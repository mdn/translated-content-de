---
title: "HTMLMediaElement: error-Eigenschaft"
short-title: error
slug: Web/API/HTMLMediaElement/error
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`error`** der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) enthält das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den zuletzt aufgetretenen Fehler oder `null`, wenn kein Fehler aufgetreten ist. Wenn das Element ein [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignis empfängt, können Sie anhand dieses Objekts Einzelheiten zum Fehler ermitteln.

## Wert

Ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den zuletzt beim Medienelement aufgetretenen Fehler beschreibt, oder `null`, wenn kein Fehler aufgetreten ist.

## Beispiele

Dieses Beispiel erstellt ein Videoelement und fügt ihm einen Fehler-Handler hinzu. Der Fehler-Handler protokolliert die Einzelheiten in der Konsole.

```js
const videoElement = document.createElement("video");
videoElement.onerror = () => {
  console.error(
    `Error ${videoElement.error.code}; details: ${videoElement.error.message}`,
  );
};
videoElement.src = "https://example.com/bogusvideo.mp4";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, in der die Eigenschaft `HTMLMediaElement.error` definiert ist
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
