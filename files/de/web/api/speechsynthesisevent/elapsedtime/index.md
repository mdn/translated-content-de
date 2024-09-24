---
title: "SpeechSynthesisEvent: elapsedTime-Eigenschaft"
short-title: elapsedTime
slug: Web/API/SpeechSynthesisEvent/elapsedTime
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`elapsedTime`** des {{domxref("SpeechSynthesisEvent")}} gibt die vergangene Zeit in Sekunden an, nachdem das {{domxref("SpeechSynthesisUtterance.text")}} zu sprechen begonnen hat, zu welchem Zeitpunkt das [Ereignis](/de/docs/Web/API/SpeechSynthesisUtterance#events) ausgelöst wurde.

## Wert

Ein Float, der die vergangene Zeit in Sekunden enthält.

> [!NOTE]
> Frühere Versionen der Spezifikation verlangten die verstrichene Zeit in Millisekunden.
> Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) unten für Ihren Browser.

## Beispiele

```js
utterThis.onboundary = (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
