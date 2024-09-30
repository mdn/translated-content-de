---
title: SpeechRecognitionResult
slug: Web/API/SpeechRecognitionResult
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionResult`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert einen einzelnen Erkennungstreffer, der mehrere [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte enthalten kann.

## Instanz-Eigenschaften

- [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob dieses Ergebnis endgültig (true) oder nicht (false) ist — dies ist das letzte Mal, dass dieses Ergebnis zurückgegeben wird; wenn nicht, ist das Ergebnis vorläufig und kann später aktualisiert werden.
- [`SpeechRecognitionResult.length`](/de/docs/Web/API/SpeechRecognitionResult/length) {{ReadOnlyInline}}
  - : Gibt die Länge des "Arrays" zurück — die Anzahl der im Ergebnis enthaltenen [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte (auch als "n-best alternatives" bezeichnet).

## Instanz-Methoden

- [`SpeechRecognitionResult.item`](/de/docs/Web/API/SpeechRecognitionResult/item)
  - : Ein standardmäßiger Getter, der den Zugriff auf [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte innerhalb des Ergebnisses über Array-Syntax ermöglicht.

## Beispiele

Dieser Code ist aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel entnommen.

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects
  // that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
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
