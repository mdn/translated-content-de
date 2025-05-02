---
title: "Dokument: afterscriptexecute-Ereignis"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{non-standard_header}}{{deprecated_header}}

Das `afterscriptexecute`-Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element die Ausführung seines Skripts abgeschlossen hat. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, z. B. mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event)-Ereignis von `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
