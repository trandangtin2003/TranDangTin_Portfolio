
/**
 * Converts a standard YouTube URL or share URL to an embed URL
 */
export const getEmbedUrl = (url: string) => {
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("youtube.com/embed/")) {
    return url;
  }
  return `https://www.youtube.com/embed/${videoId}`;
};
