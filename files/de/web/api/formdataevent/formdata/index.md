---
title: "FormDataEvent: formData-Eigenschaft"
short-title: formData
slug: Web/API/FormDataEvent/formData
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("DOM")}}

Die schreibgeschützte `formData`-Eigenschaft des [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)-Interfaces enthält das [`FormData`](/de/docs/Web/API/FormData)-Objekt, das die Daten darstellt, die im Formular enthalten sind, als das Ereignis ausgelöst wurde.

## Wert

Ein [`FormData`](/de/docs/Web/API/FormData)-Objekt.

## Beispiele

```js
// grab reference to form

const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});

// formdata handler to retrieve data

formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // Get the form data from the event object
  let data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
  const request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHTTPRequest`](/de/docs/Web/API/XMLHttpRequest)
- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
