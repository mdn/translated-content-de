---
title: "HTMLMediaElement: error-Eigenschaft"
short-title: error
slug: Web/API/HTMLMediaElement/error
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.error`**-Eigenschaft ist das [`MediaError`](/de/docs/Web/API/MediaError)-Objekt für den neuesten Fehler oder `null`, wenn kein Fehler aufgetreten ist. Wenn ein [`error`](/de/docs/Web/API/HTMLMediaElement/error_event)-Ereignis vom Element empfangen wird, können Sie durch Überprüfung dieses Objekts Einzelheiten darüber herausfinden, was passiert ist.

## Wert

Ein [`MediaError`](/de/docs/Web/API/MediaError)-Objekt, das den neuesten Fehler beschreibt, der beim Media-Element aufgetreten ist, oder `null`, wenn keine Fehler aufgetreten sind.

## Beispiele

Dieses Beispiel erstellt ein Video-Element und fügt ihm einen Fehler-Handler hinzu; der Fehler-Handler protokolliert die Details in der Konsole.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.error`-Eigenschaft
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
