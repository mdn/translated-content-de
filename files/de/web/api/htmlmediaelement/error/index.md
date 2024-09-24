---
title: "HTMLMediaElement: error-Eigenschaft"
short-title: error
slug: Web/API/HTMLMediaElement/error
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.error`**-Eigenschaft ist das
{{domxref("MediaError")}}-Objekt für den letzten Fehler oder `null`, wenn kein
Fehler aufgetreten ist. Wenn ein {{domxref("HTMLMediaElement/error_event", "Fehler")}}-Ereignis von dem
Element empfangen wird, können Sie die Details darüber ermitteln, was passiert ist, indem Sie dieses Objekt untersuchen.

## Wert

Ein {{domxref("MediaError")}}-Objekt, das den zuletzt aufgetretenen Fehler auf dem
Medienelement beschreibt, oder `null`, wenn keine Fehler aufgetreten sind.

## Beispiele

Dieses Beispiel erstellt ein Videoelement und fügt einen Fehlerbehandlungsmechanismus hinzu; der Fehlerbehandler protokolliert die Details in der Konsole.

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

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.error`-Eigenschaft
- {{HTMLElement("audio")}} und {{HTMLElement("video")}}
