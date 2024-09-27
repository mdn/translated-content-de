---
title: "SpeechRecognition: error-Event"
short-title: error
slug: Web/API/SpeechRecognition/error_event
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Das **`error`**-Ereignis des [Web Speech API](/de/docs/Web/API/Web_Speech_API)-[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts wird ausgelöst, wenn ein Fehler bei der Spracherkennung auftritt.

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

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`SpeechRecognitionErrorEvent.error`](/de/docs/Web/API/SpeechRecognitionErrorEvent/error) {{ReadOnlyInline}}
  - : Gibt den Typ des aufgetretenen Fehlers zurück.
- [`SpeechRecognitionErrorEvent.message`](/de/docs/Web/API/SpeechRecognitionErrorEvent/message) {{ReadOnlyInline}}
  - : Gibt eine detailliertere Beschreibung des Fehlers zurück.

## Beispiele

Sie können das `error`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("error", (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
});
```

Oder Sie verwenden die `onerror`-Ereignis-Handler-Eigenschaft:

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
