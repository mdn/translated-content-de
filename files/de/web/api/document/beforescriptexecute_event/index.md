---
title: "Dokument: beforescriptexecute-Ereignis"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{non-standard_header}}{{deprecated_header}}

Das `beforescriptexecute`-Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} kurz davor steht, ausgeführt zu werden. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, zum Beispiel mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforescriptexecute", (event) => { })

onbeforescriptexecute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
function starting(e) {
  logMessage(`Starting script with ID: ${e.target.id}`);
}

document.addEventListener("beforescriptexecute", starting);
// or
document.onbeforescriptexecute = starting;
```

[Live-Beispiel ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event)-Ereignis von `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
