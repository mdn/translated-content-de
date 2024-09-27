---
title: "SpeechSynthesisEvent: elapsedTime-Eigenschaft"
short-title: elapsedTime
slug: Web/API/SpeechSynthesisEvent/elapsedTime
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`elapsedTime`** schreibgeschützte Eigenschaft des [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent) gibt die verstrichene Zeit in Sekunden zurück, nachdem das [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zu sprechen begonnen hat, zu der das [Ereignis](/de/docs/Web/API/SpeechSynthesisUtterance#events) ausgelöst wurde.

## Wert

Ein Float, der die verstrichene Zeit in Sekunden enthält.

> [!NOTE]
> Frühere Versionen der Spezifikation erforderten die verstrichene Zeit in Millisekunden.
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
