
export const logger = {
  info: (msg) => console.log(`ℹ️ [INFO]: ${msg}`),
  warn: (msg) => console.warn(`⚠️ [WARN]: ${msg}`),
  error: (msg) => console.error(`❌ [ERROR]: ${msg}`),
  success: (msg) => console.log(`✅ [SUCCESS]: ${msg}`)
};
