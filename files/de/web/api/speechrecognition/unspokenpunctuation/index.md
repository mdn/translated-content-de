---
title: "SpeechRecognition: unspokenPunctuation-Eigenschaft"
short-title: unspokenPunctuation
slug: Web/API/SpeechRecognition/unspokenPunctuation
l10n:
  sourceCommit: 57a80c7a6d2174d77234cb58f536a40dd0803c4a
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`unspokenPunctuation`**-Eigenschaft der
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Schnittstelle gibt an, ob die Spracherkennungs-Engine Interpunktionszeichen basierend auf den natürlichen Sprachmustern des Benutzers ableiten und einfügen wird.

## Wert

Ein boolescher Wert.

- Wenn auf `true` gesetzt, werden Interpunktionszeichen automatisch abgeleitet und eingefügt.
- Wenn auf `false` gesetzt (Standard), werden keine Interpunktionszeichen automatisch eingefügt.

## Beschreibung

Standardmäßig ist der Text, der von der Spracherkennungs-Engine der Web Speech API ausgegeben wird, ohne Interpunktion. Um diesen Text für die Präsentation vorzubereiten, ist ein zusätzlicher Schritt erforderlich, um Interpunktion an geeigneten Stellen hinzuzufügen, zum Beispiel durch manuelle Bearbeitung oder durch die Verwendung eines Modells zur Verarbeitung natürlicher Sprache (NLP), um Interpunktion abzuleiten. Benutzer können helfen, indem sie Interpunktion manuell angeben (zum Beispiel, indem sie "Komma" oder "Fragezeichen" beim Sprechen sagen), aber dies erfordert normalerweise eine Verarbeitung und ist unpraktisch.

Dieser Prozess kann durch die Verwendung der `unspokenPunctuation`-Eigenschaft erheblich vereinfacht werden. Wenn sie auf `true` gesetzt wird, veranlasst sie die Spracherkennungs-Engine, automatisch Interpunktionszeichen (wie Punkte, Kommas und Fragezeichen) basierend auf den natürlichen Pausen, der grammatikalischen Struktur und der Prosodie des Benutzers abzuleiten und einzufügen.

Zum Beispiel würde das Sprechen der Zeile

"Ich habe Hunger [Pause einfügen] und ich muss bald essen."

dazu führen, dass die Engine ausgibt

"Ich habe Hunger, und ich muss bald essen."

Das Ergebnis ist nicht immer perfekt, aber es resultiert in einem Text, der viel näher an Präsentationsqualität herankommt, als wenn `unspokenPunctuation` nicht verwendet wird.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine neue Instanz eines `SpeechRecognition`-Objekts unter Verwendung des [`SpeechRecognition()`](/de/docs/Web/API/SpeechRecognition/SpeechRecognition)-Konstruktors, und legt dann fest, dass Interpunktionszeichen abgeleitet werden sollen, indem `unspokenPunctuation` auf `true` gesetzt wird:

```js
const recognition = new SpeechRecognition();
recognition.unspokenPunctuation = true;
```

Sehen Sie dies in Aktion im [Web Speech API Playground](https://speech.evanliu.com/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
