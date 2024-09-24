---
title: "DocumentPictureInPictureEvent: Fenster-Eigenschaft"
short-title: Fenster
slug: Web/API/DocumentPictureInPictureEvent/window
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`window`** schreibgeschützte Eigenschaft des {{domxref("DocumentPictureInPictureEvent")}}-Interfaces gibt eine {{domxref("Window")}}-Instanz zurück, die den Browsing-Kontext innerhalb des `DocumentPictureInPicture`-Fensters darstellt, für das das Ereignis ausgelöst wurde.

## Wert

Ein {{domxref("Window")}}-Objektinstanz.

## Beispiele

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("Videoplayer hat das PiP-Fenster betreten");

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

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
