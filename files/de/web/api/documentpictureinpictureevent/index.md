---
title: DocumentPictureInPictureEvent
slug: Web/API/DocumentPictureInPictureEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`DocumentPictureInPictureEvent`**-Schnittstelle der {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}} ist das Ereignisobjekt für das {{domxref("DocumentPictureInPicture/enter_event", "enter")}}-Ereignis, das ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("DocumentPictureInPictureEvent.DocumentPictureInPictureEvent", "DocumentPictureInPictureEvent()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `DocumentPictureInPictureEvent`-Objekts.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, {{DOMxRef("Event")}}._

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{DOMxRef("Event")}}._

- {{domxref("DocumentPictureInPictureEvent.window", "window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine {{domxref("Window")}}-Instanz zurück, die den Browsing-Kontext innerhalb des `DocumentPictureInPicture`-Fensters darstellt, auf dem das Ereignis ausgelöst wurde.

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

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Die Document Picture-in-Picture API verwenden](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
