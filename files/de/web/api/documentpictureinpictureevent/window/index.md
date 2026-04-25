---
title: "DocumentPictureInPictureEvent: window-Eigenschaft"
short-title: window
slug: Web/API/DocumentPictureInPictureEvent/window
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

Die schreibgeschützte **`window`**-Eigenschaft der [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)-Schnittstelle gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext im `DocumentPictureInPicture`-Fenster darstellt, auf dem das Ereignis ausgelöst wurde.

## Wert

Eine [`Window`](/de/docs/Web/API/Window) Objektinstanz.

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
