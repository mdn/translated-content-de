---
title: "Dokument: afterscriptexecute Ereignis"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef}}{{non-standard_header}}

Das `afterscriptexecute` Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element seine Ausführung beendet hat. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, wie zum Beispiel mit {{domxref("Node.appendChild()", "appendChild()")}}.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("afterscriptexecute", (event) => {});

onafterscriptexecute = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished, true);
// oder
document.onafterscriptexecute = finished;
```

[Beispiel live ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.beforescriptexecute_event", "beforescriptexecute")}} Ereignis von `Document`
- {{domxref("Document.currentScript")}}
