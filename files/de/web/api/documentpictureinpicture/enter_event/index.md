---
title: "DocumentPictureInPicture: enter-Event"
short-title: enter
slug: Web/API/DocumentPictureInPicture/enter_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`enter`**-Ereignis der [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Schnittstelle wird ausgelöst, wenn das Picture-in-Picture-Fenster erfolgreich geöffnet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("enter", (event) => { })

onenter = (event) => { }
```

## Ereignistyp

Ein [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent).

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
- [Verwenden der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
