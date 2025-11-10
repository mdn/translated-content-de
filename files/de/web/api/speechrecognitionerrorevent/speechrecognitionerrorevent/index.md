---
title: "SpeechRecognitionErrorEvent: SpeechRecognitionErrorEvent() Konstruktor"
short-title: SpeechRecognitionErrorEvent()
slug: Web/API/SpeechRecognitionErrorEvent/SpeechRecognitionErrorEvent
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Der **`SpeechRecognitionErrorEvent()`** Konstruktor erstellt eine neue Instanz des [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent) Objekts.

## Syntax

```js-nolint
new SpeechRecognitionErrorEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält. Dies wird immer `error` sein.
- `init`
  - : Ein Initialisierungsobjekt, das die folgenden Eigenschaften enthält:
    - `error`
      - : Ein enumerierter Wert, der den Typ des Fehlers darstellt. Siehe die [möglichen `error` Werte](/de/docs/Web/API/SpeechRecognitionErrorEvent/error#value).
    - `message` {{optional_inline}}
      - : Ein String, der weitere Details über den aufgetretenen Fehler enthält. Beachten Sie, dass die Spezifikation die genaue Wortwahl dieser Nachrichten nicht definiert — Implementierer müssen ihre eigene Formulierung definieren.

## Beispiele

Es ist unwahrscheinlich, dass Sie eine Instanz von `SpeechRecognitionErrorEvent` manuell erstellen. Solche Instanzen sind als Ereignisobjekte innerhalb von `error` Ereignis-Handler-Funktionen verfügbar.

Zum Beispiel:

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("error", (event) => {
  console.log(`Speech recognition error detected: ${event.error}`);
  console.log(`Additional information: ${event.message}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
