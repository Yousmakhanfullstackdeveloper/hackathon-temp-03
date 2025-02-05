export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
"sk1tMxYh0fQ7v4BPN9VxmAlCpoiRgpn7H52EIdCN1fCwhFdObjs0s89YQvINl5WVhDWvgMSSVvSjQiWVdlyOAcgftyAi3OVpQUZKZDOdoeua3bAXKTt8stF14wQvwIaWEu00PbikIbi5krozrfccM09Jpn3ZchpCZ0jhLCKlr8Ve2ZuyGfdd",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
