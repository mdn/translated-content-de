---
title: "DocumentPictureInPictureEvent: window Eigenschaft"
short-title: window
slug: Web/API/DocumentPictureInPictureEvent/window
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`window`**-Eigenschaft der Schnittstelle [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent) ist schreibgeschützt und gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext innerhalb des `DocumentPictureInPicture`-Fensters repräsentiert, auf dem das Ereignis ausgelöst wurde.

## Wert

Eine [`Window`](/de/docs/Web/API/Window)-Objektinstanz.

## Beispiele

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("Video player has entered the pip window");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "Mute";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "Unmute";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "Mute";
    }
  });

  pipWindow.document.body.append(pipMuteButton);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
