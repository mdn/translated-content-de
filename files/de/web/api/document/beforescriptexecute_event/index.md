---
title: "Dokument: beforescriptexecute-Event"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{non-standard_header}}{{deprecated_header}}

Das `beforescriptexecute`-Event wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element kurz davor steht, ausgeführt zu werden. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, zum Beispiel mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("beforescriptexecute", (event) => { })

onbeforescriptexecute = (event) => { }
```

## Event-Typ

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

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event)-Event des `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
