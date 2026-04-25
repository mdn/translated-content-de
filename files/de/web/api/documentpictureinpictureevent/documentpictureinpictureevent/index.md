---
title: "DocumentPictureInPictureEvent: DocumentPictureInPictureEvent() Konstruktor"
short-title: DocumentPictureInPictureEvent()
slug: Web/API/DocumentPictureInPictureEvent/DocumentPictureInPictureEvent
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

Der **`DocumentPictureInPictureEvent()`** Konstruktor erstellt eine neue Instanz des [`DocumentPictureInPictureEvent`](/de/docs/Web/API/DocumentPictureInPictureEvent)-Objekts.

## Syntax

```js-nolint
new DocumentPictureInPictureEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert. Im Fall von `DocumentPictureInPictureEvent` ist dies immer `enter`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `window`
      - : Eine [`Window`](/de/docs/Web/API/Window)-Instanz, die den Browsing-Kontext innerhalb des `DocumentPictureInPicture`-Fensters darstellt, auf das das Ereignis ausgelöst wurde.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `DocumentPictureInPictureEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignisses aufgerufen wird.

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
