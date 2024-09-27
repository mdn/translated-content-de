---
title: "Document: afterscriptexecute Ereignis"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef}}{{non-standard_header}}

Das `afterscriptexecute` Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} Element mit der Ausführung seines Skripts fertig ist. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, beispielsweise mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("afterscriptexecute", (event) => {});

onafterscriptexecute = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished, true);
// or
document.onafterscriptexecute = finished;
```

[Live-Beispiel anzeigen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) Ereignis des `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
