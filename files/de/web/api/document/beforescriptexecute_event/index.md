---
title: "Dokument: beforescriptexecute-Ereignis"
short-title: beforescriptexecute
slug: Web/API/Document/beforescriptexecute_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("DOM")}}{{non-standard_header}}

Das `beforescriptexecute`-Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element kurz davorsteht, ausgeführt zu werden. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, beispielsweise mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforescriptexecute", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
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
// Or (but note that this replaces other event listeners
// added using onbeforescriptexecute, if any)
document.onbeforescriptexecute = starting;
```

[Live-Beispiel ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event)-Ereignis von `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
