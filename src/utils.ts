export const MARKER = '<!-- Sticky Footer Marker -->'

export function upsertFooter(footer: string, currentBody: string): string {
  const regex = new RegExp(`(.*)(${MARKER})\\s*`)

  if (currentBody.match(regex)) {
    return currentBody.replace(regex, `\n\n${footer}${MARKER}`)
  }

  return `${currentBody}\n\n${footer}${MARKER}`
}
