---
title: SubmitEvent
slug: Web/API/SubmitEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die **`SubmitEvent`**-Schnittstelle definiert das Objekt, das verwendet wird, um ein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis eines [HTML](/de/docs/Glossary/HTML)-Formulars darzustellen. Dieses Ereignis wird am {{HTMLElement("form")}} ausgelöst, wenn die Absendeaktion des Formulars aufgerufen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`SubmitEvent()`](/de/docs/Web/API/SubmitEvent/SubmitEvent)
  - : Erstellt und gibt ein neues `SubmitEvent`-Objekt zurück, dessen [`type`](/de/docs/Web/API/Event/type) und andere Optionen wie angegeben konfiguriert sind. Beachten Sie, dass derzeit der einzige gültige `type` für ein `SubmitEvent` `submit` ist.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer Elternschnittstelle [`Event`](/de/docs/Web/API/Event)._

- [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das die Schaltfläche oder ein anderes Element identifiziert, das aufgerufen wurde, um das Formular abzusenden.

## Instanz-Methoden

_Obwohl `SubmitEvent` keine eigenen Methoden anbietet, erbt es alle von seiner Elternschnittstelle [`Event`](/de/docs/Web/API/Event) spezifizierten._

## Beispiele

In diesem Beispiel kann ein Warenkorb eine Reihe unterschiedlicher Absende-Schaltflächen haben, abhängig von Faktoren wie den Benutzereinstellungen, den Einstellungen des Shops und möglichen Mindest- oder Höchstgrenzen des Warenkorbs, die von den Zahlungsanbietern festgelegt wurden. Jede der Absendeelemente verwendet die [`id`](/de/docs/Web/API/Element/id), um den entsprechenden Zahlungsanbieter zu identifizieren.

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

Die Handler-ID wird erhalten, indem die `submit`-Ereignis-Eigenschaft [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) verwendet wird, um die Absende-Schaltfläche zu erhalten, von der wir dann die ID abrufen. Mit dieser Informationen können wir eine `processOrder()`-Funktion aufrufen, um die Bestellung zu bearbeiten und das Formular sowie die Handler-ID weiterzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
