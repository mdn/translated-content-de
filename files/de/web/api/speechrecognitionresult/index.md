---
title: SpeechRecognitionResult
slug: Web/API/SpeechRecognitionResult
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognitionResult`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert ein einzelnes Erkennungsergebnis, das mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthalten kann.

## Instanz-Eigenschaften

- [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob dieses Ergebnis endgültig (true) ist oder nicht (false) — wenn ja, dann wird dieses Ergebnis zum letzten Mal zurückgegeben; wenn nicht, dann ist dieses Ergebnis ein Zwischenergebnis und kann später aktualisiert werden.
- [`SpeechRecognitionResult.length`](/de/docs/Web/API/SpeechRecognitionResult/length) {{ReadOnlyInline}}
  - : Gibt die Länge des "Arrays" zurück — die Anzahl der [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die im Ergebnis enthalten sind (auch als "n-beste Alternativen" bezeichnet).

## Instanz-Methoden

- [`SpeechRecognitionResult.item`](/de/docs/Web/API/SpeechRecognitionResult/item)
  - : Ein Standard-Getter, der den Zugriff auf [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte innerhalb des Ergebnisses über Array-Syntax ermöglicht.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
