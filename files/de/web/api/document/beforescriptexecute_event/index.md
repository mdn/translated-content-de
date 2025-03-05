---
title: "Dokument: beforescriptexecute Event"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
l10n:
  sourceCommit: c15dc43c147bba7bdbaf2754831c59e5f44b98d2
---

{{APIRef}}{{non-standard_header}}{{deprecated_header}}

Das `beforescriptexecute`-Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element kurz vor der Ausführung steht. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, wie zum Beispiel mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) Ereignis des `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
