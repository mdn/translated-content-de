---
title: "FormDataEvent: formData-Eigenschaft"
short-title: formData
slug: Web/API/FormDataEvent/formData
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft `formData` des {{domxref("FormDataEvent")}}-Interfaces enthält das {{domxref("FormData")}}-Objekt, das die Daten darstellt, die im Formular enthalten waren, als das Ereignis ausgelöst wurde.

## Wert

Ein {{domxref("FormData")}}-Objekt.

## Beispiele

```js
// Bezug zum Formular herstellen

const formElem = document.querySelector("form");

// Behandlungsroutine für das Absenden

formElem.addEventListener("submit", (e) => {
  // beim Absenden des Formulars Standardverhalten verhindern
  e.preventDefault();

  // ein FormData-Objekt erstellen, das das formdata-Ereignis auslöst
  new FormData(formElem);
});

// formdata-Behandlungsroutine zum Abrufen der Daten

formElem.addEventListener("formdata", (e) => {
  console.log("formdata ausgelöst");

  // Die Formulardaten aus dem Ereignisobjekt abrufen
  let data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // die Daten über XHR senden
  const request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Using FormData objects](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
