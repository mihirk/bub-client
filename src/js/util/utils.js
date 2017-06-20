export let isYoutubeVideoURL = (url) => {
    const youtubeVideoPattern = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    const match = url.match(youtubeVideoPattern);
    return match ? match[1] : false;
};