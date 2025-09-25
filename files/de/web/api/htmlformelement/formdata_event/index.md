---
title: "HTMLFormElement: formdata Ereignis"
short-title: formdata
slug: Web/API/HTMLFormElement/formdata_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`formdata`** Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde. Dies geschieht, wenn das Formular abgeschickt wird, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData) Konstruktors ausgelöst werden.

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("formdata", (event) => { })

onformdata = (event) => { }
```

## Ereignistyp

Ein [`FormDataEvent`](/de/docs/Web/API/FormDataEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FormDataEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData)
  - : Enthält das [`FormData`](/de/docs/Web/API/FormData) Objekt, das die im Formular enthaltenen Daten repräsentiert, als das Ereignis ausgelöst wurde.

## Beispiele

```js
// grab reference to form

const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  console.log(formElem.querySelector('input[name="field1"]')); // FOO
  console.log(formElem.querySelector('input[name="field2"]')); // BAR

  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formElem);
  // formdata gets modified by the formdata event
  console.log(formData.get("field1")); // foo
  console.log(formData.get("field2")); // bar
});

// formdata handler to retrieve data

formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // modifies the form data
  const formData = e.formData;
  // formdata gets modified by the formdata event
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
});
```

Die `onformdata` Version würde folgendermaßen aussehen:

```js
formElem.onformdata = (e) => {
  console.log("formdata fired");

  // modifies the form data
  const formData = e.formData;
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{htmlElement("form")}} Element
- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
