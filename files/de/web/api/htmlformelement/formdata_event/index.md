---
title: "HTMLFormElement: formdata-Ereignis"
short-title: formdata
slug: Web/API/HTMLFormElement/formdata_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

Das **`formdata`**-Ereignis wird ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde. Dies geschieht, wenn das Formular abgeschickt wird, kann aber auch durch den Aufruf eines {{domxref("FormData.FormData", "FormData()")}}-Konstruktors ausgelöst werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht an übergeordnete Objekte weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("formdata", (event) => {});

onformdata = (event) => {};
```

## Ereignistyp

Ein {{domxref("FormDataEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("FormDataEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, {{domxref("Event")}}._

- {{domxref("FormDataEvent.formData")}}
  - : Enthält das {{domxref("FormData")}}-Objekt, das die Daten darstellt, die im Formular enthalten waren, als das Ereignis ausgelöst wurde.

## Beispiele

```js
// Referenz auf das Formular erhalten

const formElem = document.querySelector("form");

// Abschick-Handler

formElem.addEventListener("submit", (e) => {
  // Beim Absenden des Formulars Standardeinstellung verhindern
  e.preventDefault();

  console.log(formElem.querySelector('input[name="field1"]')); // FOO
  console.log(formElem.querySelector('input[name="field2"]')); // BAR

  // Ein FormData-Objekt konstruieren, das das formdata-Ereignis auslöst
  const formData = new FormData(formElem);
  // formdata wird durch das formdata-Ereignis modifiziert
  console.log(formData.get("field1")); // foo
  console.log(formData.get("field2")); // bar
});

// formdata-Handler zur Datenabfrage

formElem.addEventListener("formdata", (e) => {
  console.log("formdata ausgelöst");

  // Formulardaten modifizieren
  const formData = e.formData;
  // formdata wird durch das formdata-Ereignis modifiziert
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
});
```

Die `onformdata`-Version würde so aussehen:

```js
formElem.onformdata = (e) => {
  console.log("formdata ausgelöst");

  // Formulardaten modifizieren
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

- HTML {{htmlElement("form")}}-Element
- {{domxref("FormDataEvent")}}
