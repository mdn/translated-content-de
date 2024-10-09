---
title: DocumentPictureInPictureEvent
slug: Web/API/DocumentPictureInPictureEvent
l10n:
  sourceCommit: bac20b9ed34bf5b6427ba9274c99c1737dc309ff
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`DocumentPictureInPictureEvent`**-Interface der [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) ist das Ereignisobjekt für das [`enter`](/de/docs/Web/API/DocumentPictureInPicture/enter_event)-Ereignis, welches ausgelöst wird, wenn das Picture-in-Picture-Fenster geöffnet wird.

{{InheritanceDiagram}}

## Konstruktor

- [`DocumentPictureInPictureEvent()`](/de/docs/Web/API/DocumentPictureInPictureEvent/DocumentPictureInPictureEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `DocumentPictureInPictureEvent`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

- [`window`](/de/docs/Web/API/DocumentPictureInPictureEvent/window) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext innerhalb des `DocumentPictureInPicture`-Fensters repräsentiert, auf dem das Ereignis ausgelöst wurde.

## Instanzmethoden

_Erbt Methoden von seinem Elternobjekt, [`Event`](/de/docs/Web/API/Event)._

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
