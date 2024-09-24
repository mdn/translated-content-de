---
title: FormDataEvent
slug: Web/API/FormDataEvent
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("DOM")}}

Die **`FormDataEvent`**-Schnittstelle repräsentiert ein [`formdata` Event](/de/docs/Web/API/HTMLFormElement/formdata_event) — ein solches Ereignis wird auf einem {{domxref("HTMLFormElement")}}-Objekt ausgelöst, nachdem die Eintragsliste, die die Daten des Formulars darstellt, erstellt wurde. Dies geschieht, wenn das Formular abgeschickt wird, kann aber auch durch den Aufruf eines {{domxref("FormData.FormData", "FormData()")}} Konstruktors ausgelöst werden.

Dies ermöglicht es, schnell ein {{domxref("FormData")}}-Objekt als Reaktion auf ein ausgelöstes `formdata` Event zu erhalten, anstatt es selbst zusammenstellen zu müssen, wenn Sie Formulardaten über eine Methode wie {{domxref("Window/fetch", "fetch()")}} übermitteln möchten (siehe [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("FormDataEvent.FormDataEvent","FormDataEvent()")}}
  - : Erzeugt eine neue Instanz eines `FormDataEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("FormDataEvent.formData")}}
  - : Enthält das {{domxref("FormData")}}-Objekt, das die Daten des Formulars repräsentiert, als das Ereignis ausgelöst wurde.

## Instanz-Methoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, {{domxref("Event")}}._

## Beispiele

```js
// Referenz zum Formular holen

const formElem = document.querySelector("form");

// Übermittlungshandler

formElem.addEventListener("submit", (e) => {
  // bei Formularübermittlung Standardverhalten verhindern
  e.preventDefault();

  console.log(form.querySelector('input[name="field1"]')); // FOO
  console.log(form.querySelector('input[name="field2"]')); // BAR

  // Ein FormData-Objekt erstellen, welches das formdata Event auslöst
  const formData = new FormData(formElem);
  // formdata wird durch das formdata Event modifiziert
  console.log(formData.get("field1")); // foo
  console.log(formData.get("field2")); // bar
});

// formdata-Handler um Daten abzurufen

formElem.addEventListener("formdata", (e) => {
  console.log("formdata ausgelöst");

  // Formulardaten modifizieren
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

- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("FormData")}}
- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
