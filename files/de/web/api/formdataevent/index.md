---
title: FormDataEvent
slug: Web/API/FormDataEvent
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("DOM")}}

Die **`FormDataEvent`**-Schnittstelle repräsentiert ein [`formdata`-Ereignis](/de/docs/Web/API/HTMLFormElement/formdata_event) – ein solches Ereignis wird auf einem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde. Dies geschieht, wenn das Formular gesendet wird, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktors ausgelöst werden.

Dies ermöglicht es, schnell ein [`FormData`](/de/docs/Web/API/FormData)-Objekt als Reaktion auf ein `formdata`-Ereignis zu erhalten, anstatt es selbst zusammenstellen zu müssen, wenn Sie beispielsweise Formulardaten über eine Methode wie [`fetch()`](/de/docs/Web/API/Window/fetch) senden möchten (siehe [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)).

{{InheritanceDiagram}}

## Konstruktor

- [`FormDataEvent()`](/de/docs/Web/API/FormDataEvent/FormDataEvent)
  - : Erstellt eine neue Instanz eines `FormDataEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData)
  - : Enthält das [`FormData`](/de/docs/Web/API/FormData)-Objekt, das die Daten repräsentiert, die im Formular enthalten sind, als das Ereignis ausgelöst wurde.

## Instanz-Methoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

```js
// grab reference to form

const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  console.log(form.querySelector('input[name="field1"]')); // FOO
  console.log(form.querySelector('input[name="field2"]')); // BAR

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
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetch()`](/de/docs/Web/API/Window/fetch)
- [`FormData`](/de/docs/Web/API/FormData)
- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
