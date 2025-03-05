---
title: "Dokumentation: `afterscriptexecute`-Ereignis"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: c15dc43c147bba7bdbaf2754831c59e5f44b98d2
---

{{APIRef}}{{non-standard_header}}{{deprecated_header}}

Das `afterscriptexecute`-Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element mit der Ausführung seines Skripts fertig ist. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, zum Beispiel mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("afterscriptexecute", (event) => {});

onafterscriptexecute = (event) => {};
```

## Ereignisart

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

Kein Bestandteil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event)-Ereignis von `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
