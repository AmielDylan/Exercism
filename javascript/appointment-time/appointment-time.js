// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const appointment = new Date(now ?? Date.now());
  appointment.setUTCDate(appointment.getUTCDate() + days);

  return appointment;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let t = new Date(timestamp);
  return { year: t.getFullYear(), month: t.getMonth(), date: t.getDate(), hour: t.getHours(), minute: t.getMinutes() }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let t = new Date(timestamp);
  const {year, month, date, hour, minute} = options;
  if (year !== undefined) t.setFullYear(year);
  if (month !== undefined) t.setMonth(month);
  if (date !== undefined) t.setDate(date);
  if (hour !== undefined) t.setHours(hour);
  if (minute !== undefined) t.setMinutes(minute);

  return { year: t.getFullYear(), month: t.getMonth(), date: t.getDate(), hour: t.getHours(), minute: t.getMinutes() }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.abs(Math.round((new Date(timestampB).getTime() - new Date(timestampA).getTime()) / 1000));
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp) > new Date(currentTimestamp);
}
