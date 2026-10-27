---
title: "HTMLFormElement: formdata-Ereignis"
short-title: formdata
slug: Web/API/HTMLFormElement/formdata_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("HTML DOM")}}

Das **`formdata`**-Ereignis wird ausgelöst, nachdem die Eintragsliste mit den Formulardaten erstellt wurde. Dies geschieht beim Absenden des Formulars, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktors ausgelöst werden.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("formdata", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onformdata = (event) => { }
```

## Ereignistyp

Ein [`FormDataEvent`](/de/docs/Web/API/FormDataEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FormDataEvent")}}

## Beispiele

```js
// grab reference to form

const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  console.log(formElem.querySelector('input[name="field1"]').value); // FOO
  console.log(formElem.querySelector('input[name="field2"]').value); // BAR

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

Die Variante mit `onformdata` würde so aussehen (beachten Sie jedoch, dass sie gegebenenfalls andere mit `onformdata` hinzugefügte Ereignis-Listener ersetzt):

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

- HTML-Element {{htmlElement("form")}}
- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
