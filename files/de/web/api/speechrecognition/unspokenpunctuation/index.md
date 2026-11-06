---
title: "SpeechRecognition: Eigenschaft unspokenPunctuation"
short-title: unspokenPunctuation
slug: Web/API/SpeechRecognition/unspokenPunctuation
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Web Speech API")}}

Die Eigenschaft **`unspokenPunctuation`** der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) legt fest, ob die Spracherkennungs-Engine anhand der natürlichen Sprechweise der Nutzerin oder des Nutzers Satzzeichen erschließt und einfügt.

## Wert

Ein boolescher Wert.

- Bei `true` werden Satzzeichen automatisch erschlossen und eingefügt.
- Bei `false` (dem Standardwert) werden keine Satzzeichen automatisch eingefügt.

## Beschreibung

Standardmäßig enthält der von der Spracherkennungs-Engine der Web Speech API ausgegebene Text keine Satzzeichen. Damit der Text angezeigt werden kann, müssen Satzzeichen an geeigneten Stellen hinzugefügt werden – beispielsweise durch manuelle Bearbeitung oder mithilfe eines Modells zur Verarbeitung natürlicher Sprache (Natural Language Processing, NLP), das Satzzeichen erschließt. Nutzerinnen und Nutzer können helfen, indem sie Satzzeichen aussprechen (etwa indem sie innehalten und „Komma“ oder „Fragezeichen“ sagen). Dies erfordert normalerweise dennoch eine Nachbearbeitung und ist umständlich.

Die Eigenschaft `unspokenPunctuation` kann diesen Vorgang erheblich vereinfachen. Wird sie auf `true` gesetzt, erschließt die Spracherkennungs-Engine anhand natürlicher Sprechpausen, der grammatischen Struktur und der Prosodie automatisch Satzzeichen (wie Punkte, Kommas und Fragezeichen) und fügt sie ein.

Wird beispielsweise der folgende Satz gesprochen:

„Ich habe Hunger [Pause] und muss bald etwas essen.“

gibt die Engine Folgendes aus:

„Ich habe Hunger, und muss bald etwas essen.“

Das Ergebnis ist nicht immer perfekt, aber der Text ist deutlich besser für die Anzeige geeignet als ohne `unspokenPunctuation`.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt mit dem Konstruktor [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition) eine neue Instanz von `SpeechRecognition` und legt anschließend durch Setzen von `unspokenPunctuation` auf `true` fest, dass Satzzeichen erschlossen werden sollen:

```js
const recognition = new SpeechRecognition();
recognition.unspokenPunctuation = true;
```

Sehen Sie sich dies im [Web Speech API Playground](https://speech.evanliu.com/) in Aktion an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
