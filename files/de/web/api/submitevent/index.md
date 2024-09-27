---
title: SubmitEvent
slug: Web/API/SubmitEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die **`SubmitEvent`**-Schnittstelle definiert das Objekt, das verwendet wird, um das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis eines [HTML](/de/docs/Glossary/HTML)-Formulars darzustellen. Dieses Ereignis wird bei dem {{HTMLElement("form")}} ausgelöst, wenn die Absendeaktion des Formulars aufgerufen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`SubmitEvent()`](/de/docs/Web/API/SubmitEvent/SubmitEvent)
  - : Erstellt und gibt ein neues `SubmitEvent`-Objekt zurück, dessen [`type`](/de/docs/Web/API/Event/type) und andere Optionen wie angegeben konfiguriert sind. Beachten Sie, dass derzeit der einzige gültige `type` für ein `SubmitEvent` `submit` ist.

## Instanz-Eigenschaften

_Neben den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer Elternschnittstelle [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das das Element identifiziert, das ausgelöst wurde, um das Formular einzusenden.

## Instanz-Methoden

_Obwohl `SubmitEvent` keine eigene Methoden anbietet, erbt es alle von seiner Elternschnittstelle [`Event`](/de/docs/Web/API/Event) spezifizierten._

## Beispiele

In diesem Beispiel kann ein Warenkorb eine Vielzahl unterschiedlicher Abschicken-Buttons haben, abhängig von Faktoren wie Benutzereinstellungen, Shop-Einstellungen und festgelegten minimalen oder maximalen Einkaufssummen durch die Zahlungsabwickler. Jede der Abschick-Elemente [`id`](/de/docs/Web/API/Element/id) wird verwendet, um den Zahlungsabwickler zu identifizieren, dem der Button entspricht.

```js
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  let submitter = event.submitter;
  let handler = submitter.id;

  if (handler) {
    processOrder(form, handler);
  } else {
    showAlertMessage(
      "An unknown or unaccepted payment type was selected. Please try again.",
      "OK",
    );
  }
});
```

Die Handler-ID wird erhalten, indem die [`submitter`](/de/docs/Web/API/SubmitEvent/submitter)-Eigenschaft des `submit`-Ereignisses verwendet wird, um den Absende-Button zu erhalten, von dem wir dann die ID abrufen. Mit dieser in der Hand können wir eine `processOrder()`-Funktion aufrufen, um die Bestellung zu bearbeiten, wobei das Formular und die Handler-ID übergeben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
