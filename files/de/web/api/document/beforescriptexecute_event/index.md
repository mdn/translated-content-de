---
title: "Dokument: beforescriptexecute-Ereignis"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef}}{{non-standard_header}}

Das `beforescriptexecute`-Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element kurz davor steht, ausgeführt zu werden. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, z. B. mit {{domxref("Node.appendChild()", "appendChild()")}}.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforescriptexecute", (event) => {});

onbeforescriptexecute = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
function starting(e) {
  logMessage(`Starting script with ID: ${e.target.id}`);
}

document.addEventListener("beforescriptexecute", starting, true);
// oder
document.onbeforescriptexecute = starting;
```

[Beispiel live ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Ist Teil keiner Spezifikation.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.afterscriptexecute_event", "afterscriptexecute")}}-Ereignis von `Document`
- {{domxref("Document.currentScript")}}
