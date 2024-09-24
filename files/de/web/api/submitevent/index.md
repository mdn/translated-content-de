---
title: SubmitEvent
slug: Web/API/SubmitEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

Die **`SubmitEvent`**-Schnittstelle definiert das Objekt, das verwendet wird, um das {{Glossary("HTML")}}-Formular {{domxref("HTMLFormElement.submit_event", "submit")}}-Ereignis darzustellen. Dieses Ereignis wird beim {{HTMLElement("form")}} ausgelöst, wenn die Absendeaktion des Formulars aufgerufen wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SubmitEvent.SubmitEvent", "SubmitEvent()")}}
  - : Erstellt und gibt ein neues `SubmitEvent`-Objekt zurück, dessen {{domxref("Event.type", "type")}} und andere Optionen wie angegeben konfiguriert sind. Beachten Sie, dass derzeit der einzige gültige `type` für ein `SubmitEvent` `submit` ist.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLElement")}}-Objekt, das das Element identifiziert, welches ausgelöst wurde, um das Formularabsenden zu initiieren.

## Instanz-Methoden

_Obwohl `SubmitEvent` keine eigenen Methoden anbietet, erbt es alle, die von seiner übergeordneten Schnittstelle, {{domxref("Event")}}, spezifiziert sind._

## Beispiele

In diesem Beispiel kann ein Warenkorb je nach Benutzer- und Shop-Einstellungen und den von den Zahlungsanbietern festgelegten Mindest- oder Höchstgrenzen eine Vielzahl unterschiedlicher Absende-Schaltflächen haben. Jede der Absende-Elemente wird durch die {{domxref("Element.id", "id")}} identifiziert, um den entsprechenden Zahlungsanbieter anzugeben.

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

Die Handler-ID wird durch Verwendung der {{domxref("SubmitEvent.submitter", "submitter")}}-Eigenschaft des `submit`-Ereignisses erhalten, um die Absende-Schaltfläche zu ermitteln, von der wir dann die ID erhalten. Mit dieser Information können wir eine `processOrder()`-Funktion aufrufen, um die Bestellung zu bearbeiten, und dabei das Formular und die Handler-ID übergeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
