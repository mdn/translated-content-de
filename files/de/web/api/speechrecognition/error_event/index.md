---
title: "SpeechRecognition: error-Ereignis"
short-title: error
slug: Web/API/SpeechRecognition/error_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`error`**-Ereignis des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts der [Web Speech API](/de/docs/Web/API/Web_Speech_API) wird ausgelöst, wenn ein Fehler bei der Spracherkennung tritt auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein [`SpeechRecognitionErrorEvent`](/de/docs/Web/API/SpeechRecognitionErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SpeechRecognitionErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) {{ReadOnlyInline}}
  - : Gibt die Art des aufgetretenen Fehlers zurück.
- [`SpeechRecognitionErrorEvent.message`](/de/docs/Web/API/SpeechRecognitionErrorEvent/message) {{ReadOnlyInline}}
  - : Gibt eine Nachricht zurück, die den Fehler genauer beschreibt.

## Beispiele

Sie können das `error`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("error", (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
});
```

Oder verwenden Sie die `onerror`-Ereignis-Handler-Eigenschaft:

```js
recognition.onerror = (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
