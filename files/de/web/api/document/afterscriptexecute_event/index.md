---
title: "Dokument: afterscriptexecute-Ereignis"
short-title: afterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("DOM")}}{{non-standard_header}}

Das `afterscriptexecute`-Ereignis wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element die Ausführung seines Skripts abgeschlossen hat. Es wird nicht ausgelöst, wenn das Element dynamisch hinzugefügt wird, beispielsweise mit [`appendChild()`](/de/docs/Web/API/Node/appendChild).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("afterscriptexecute", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
// Or (but note that this replaces other event listeners
// added using onafterscriptexecute, if any)
document.onafterscriptexecute = finished;
```

[Live-Beispiel ansehen](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Spezifikationen

Nicht Bestandteil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event)-Ereignis von `Document`
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)
