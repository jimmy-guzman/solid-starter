import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page).toHaveTitle(/Solid Starter/)
})

test.describe('external links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/')
  })

  test('opened vite docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /vite logo/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://vitejs.dev/')
  })

  test('opened Solid docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /solid logo/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://docs.solidjs.com/')
  })

  test('opened TypeScript docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /TypeScript logo/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://www.typescriptlang.org/')
  })

  test('opened tailwindcss docs', async ({ page, context }) => {
    const pagePromise = context.waitForEvent('page')

    await page.getByRole('link', { name: /tailwindcss logo/i }).click()

    const newPage = await pagePromise

    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL('https://tailwindcss.com/')
  })
})
