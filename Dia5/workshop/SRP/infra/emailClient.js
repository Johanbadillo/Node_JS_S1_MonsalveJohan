export const emailClient = {
  send(to, subject, body) {
    // Simulación: solo log
    console.log(`[EMAIL to=${to}] ${subject}: ${body}`);
    return true;
  }
};