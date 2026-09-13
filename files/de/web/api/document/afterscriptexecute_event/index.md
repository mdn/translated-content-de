---
title: "Dokument: afterscriptexecute Event"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{non-standard_header}}

Das `afterscriptexecute` Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} Element das Ausführen seines Scripts beendet. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, wie zum Beispiel mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("afterscriptexecute", (event) => { })

onafterscriptexecute = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished);
// or
document.onafterscriptexecute = finished;
```

[Live-Beispiel ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) Ereignis von `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
