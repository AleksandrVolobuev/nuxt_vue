export function useAssetPath() {
  const baseURL = useRuntimeConfig().app.baseURL

  return (path: string) => {
    if (/^(https?:|data:|blob:|#)/.test(path)) {
      return path
    }

    const cleanBase = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
    const cleanPath = path.startsWith('/') ? path.slice(1) : path

    return `${cleanBase}${cleanPath}`
  }
}
