import createImageUrlBuilder from "@sanity/image-url"

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

// j'ai enlévé le url() parce que j'ai utilisé deja  l'url dans la page post [slug] dans Image 
export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
//ici y'a l'url
// export const urlForImage = (source) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url()
// }
