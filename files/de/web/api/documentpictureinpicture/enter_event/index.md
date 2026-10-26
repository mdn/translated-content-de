---
title: "DocumentPictureInPicture: enter-Ereignis"
short-title: enter
slug: Web/API/DocumentPictureInPicture/enter_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

Das **`enter`**-Ereignis der Schnittstelle [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture) wird ausgelöst, wenn das Picture-in-Picture-Fenster erfolgreich geöffnet wurde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("enter", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
