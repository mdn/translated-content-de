---
title: "SpeechRecognitionEvent: SpeechRecognitionEvent() Konstruktor"
short-title: SpeechRecognitionEvent()
slug: Web/API/SpeechRecognitionEvent/SpeechRecognitionEvent
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Der **`SpeechRecognitionEvent()`** Konstruktor erstellt eine neue Instanz des [`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent) Objekts.

## Syntax

```js-nolint
new SpeechRecognitionEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält. Dies wird entweder `result` oder `nomatch` sein, abhängig von dem Ereignis, das die Instanz erstellt hat.
- `init`
  - : Ein Initialisierungsobjekt, das die folgenden Eigenschaften enthält:
    - `resultIndex` {{optional_inline}}
      - : Eine Zahl, die den niedrigsten Indexwert des Ergebnisses in der [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) Instanz darstellt, der tatsächlich geändert wurde.
    - `results`
      - : Ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) Objekt, das alle Spracherkennungsergebnisse repräsentiert, die im zugehörigen Ereignis zurückgegeben werden.

## Beispiele

Es ist unwahrscheinlich, dass Sie eine `SpeechRecognitionEvent` Instanz manuell erstellen. Solche Instanzen sind als Ereignisobjekte innerhalb von `result` und `nomatch` Ereignishandler-Funktionen verfügbar.

Zum Beispiel:

```js
recognition.addEventListener("result", (event) => {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = "Result received: " + color + ".";
  bg.style.backgroundColor = color;
  console.log("Confidence: " + event.results[0][0].confidence);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
