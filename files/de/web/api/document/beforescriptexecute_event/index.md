---
title: "Document: beforescriptexecute Ereignis"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef}}{{non-standard_header}}

Das `beforescriptexecute` Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element kurz davor steht, ausgeführt zu werden. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, etwa mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforescriptexecute", (event) => {});

onbeforescriptexecute = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
function starting(e) {
  logMessage(`Starting script with ID: ${e.target.id}`);
}

document.addEventListener("beforescriptexecute", starting, true);
// or
document.onbeforescriptexecute = starting;
```

[Live-Beispiel ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Kein Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) Ereignis des `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
