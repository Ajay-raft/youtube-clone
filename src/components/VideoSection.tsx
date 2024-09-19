import { useEffect, useRef, useState } from "react";
import { formateDuration, formateViews } from "../utils/formateDuration";
import { formatTimeAgo } from "../utils/formateTimeAgo";

type VideoSectionProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoSection = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoSectionProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current?.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${isVideoPlaying ? "rounded-none" : "rounded-xl" }`}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formateDuration(duration)}
        </div>
        <video ref={videoRef} muted playsInline controls className={`block h-full object-cover absolute inset-0 transition-opacity duration ${isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"}`} src={videoUrl} />
      </a>
      <div className="flex gap-2">
        <a className="flex-shrink-0" href={`/@${channel.id}`}>
          <img src={channel.profileUrl} className="w-12 h-12 rounded-full" />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </a>
          <div className="text-secondary-text text-sm">
            {formateViews(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
