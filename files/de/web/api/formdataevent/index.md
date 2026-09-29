---
title: FormDataEvent
slug: Web/API/FormDataEvent
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("DOM")}}

Das **`FormDataEvent`**-Interface repräsentiert ein [`formdata`-Ereignis](/de/docs/Web/API/HTMLFormElement/formdata_event). Ein solches Ereignis wird für ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt ausgelöst, nachdem die Eintragsliste mit den Formulardaten erstellt wurde. Dies geschieht beim Absenden des Formulars, kann aber auch durch den Aufruf eines [`FormData()`](/de/docs/Web/API/FormData/FormData)-Konstruktors ausgelöst werden.

So lässt sich als Reaktion auf ein `formdata`-Ereignis schnell ein [`FormData`](/de/docs/Web/API/FormData)-Objekt abrufen. Sie müssen es dann nicht selbst zusammenstellen, wenn Sie Formulardaten über eine Methode wie [`fetch()`](/de/docs/Web/API/Window/fetch) senden möchten (siehe [FormData-Objekte verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)).

{{InheritanceDiagram}}

## Konstruktor

- [`FormDataEvent()`](/de/docs/Web/API/FormDataEvent/FormDataEvent)
  - : Erstellt eine neue Instanz eines `FormDataEvent`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften vom übergeordneten Interface [`Event`](/de/docs/Web/API/Event)._

- [`FormDataEvent.formData`](/de/docs/Web/API/FormDataEvent/formData) {{ReadOnlyInline}}
  - : Enthält das [`FormData`](/de/docs/Web/API/FormData)-Objekt, das die beim Auslösen des Ereignisses im Formular enthaltenen Daten repräsentiert.

## Instanzmethoden

_Erbt Methoden vom übergeordneten Interface [`Event`](/de/docs/Web/API/Event)._

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
- [FormData-Objekte verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
