---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}

Das **`HTMLOutputElement`**-Interface bietet Eigenschaften und Methoden (über die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbten hinaus) zur Manipulation des Layouts und der Darstellung von {{HTMLElement("output")}}-Elementen.

{{InheritanceDiagram}}

## Konstruktor

- [`HTMLOutputElement()`](/de/docs/Web/API/HTMLOutputElement/HTMLOutputElement) {{experimental_inline}}
  - : Erstellt ein neues `HTMLOutputElement`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue)
  - : Ein String, der den Standardwert des Elements darstellt, anfangs der leere String.
- [`HTMLOutputElement.form`](/de/docs/Web/API/HTMLOutputElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular angibt, das mit dem Steuerelement verbunden ist, wobei das [`form`](/de/docs/Web/HTML/Reference/Elements/output#form)-HTML-Attribut widergespiegelt wird, falls es definiert ist.
- [`HTMLOutputElement.htmlFor`](/de/docs/Web/API/HTMLOutputElement/htmlFor) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), das das [`for`](/de/docs/Web/HTML/Reference/Elements/output#for)-HTML-Attribut widergespiegelt, enthält eine Liste von IDs anderer Elemente im selben Dokument, die zur Berechnung des `value` beitragen (oder es anderweitig beeinflussen).
- [`HTMLOutputElement.labels`](/de/docs/Web/API/HTMLOutputElement/labels) {{ReadOnlyInline}}
  - : Ein [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}}-Elementen, die mit dem Element verbunden sind.
- [`HTMLOutputElement.name`](/de/docs/Web/API/HTMLOutputElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/output#name)-HTML-Attribut widergespiegelt, enthält den Namen für das Steuerelement, der mit den Formulardaten übermittelt wird.
- [`HTMLOutputElement.type`](/de/docs/Web/API/HTMLOutputElement/type) {{ReadOnlyInline}}
  - : Der String `"output"`.
- [`HTMLOutputElement.validationMessage`](/de/docs/Web/API/HTMLOutputElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Überprüfung von Constraints ist (`willValidate` ist `false`), oder es erfüllt seine Beschränkungen.
- [`HTMLOutputElement.validity`](/de/docs/Web/API/HTMLOutputElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Validitätszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLOutputElement.value`](/de/docs/Web/API/HTMLOutputElement/value)
  - : Ein String, der den Wert des Inhalts der Elemente darstellt. Verhält sich wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.
- [`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element ein Kandidat für die Überprüfung von Constraints ist. Immer `false` für `HTMLOutputElement`-Objekte.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
  - : Überprüft die Gültigkeit des Elements und gibt einen booleschen Wert mit dem Ergebnis der Überprüfung zurück.
- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)
  - : Diese Methode meldet dem Benutzer die Probleme mit den Constraints des Elements, falls vorhanden. Bei Problemen löst sie ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element aus und gibt `false` zurück; treten keine Probleme auf, gibt sie `true` zurück.

    Wenn das Problem gemeldet wird, kann die Benutzeroberfläche das Element fokussieren und die Bildlaufposition des Dokuments ändern oder eine andere Aktion ausführen, die das Element in den Fokus des Benutzers rückt. Benutzeroberflächen können mehr als eine Verletzung von Constraints melden, wenn dieses Element gleichzeitig von mehreren Problemen betroffen ist. Wenn das Element nicht gerendert wird, kann die Benutzeroberfläche den Fehler stattdessen für das ausgeführte Skript melden, anstatt den Benutzer zu benachrichtigen.

- [`HTMLOutputElement.setCustomValidity()`](/de/docs/Web/API/HTMLOutputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Validitätsnachricht für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Validitätsfehler und wird nicht validiert.

## Modi

Dieses Element verhält sich in einem von zwei Modi: _Standard_-Modus und _Wert_-Modus.

### Standard-Modus

Anfangs befindet sich das Element im Standard-Modus, und der Inhalt des Elements stellt sowohl den Wert des Elements als auch seinen Standardwert dar.

Wenn sich das Element im Standard-Modus befindet und die Nachfahren des Elements in irgendeiner Weise geändert werden, wird die `defaultValue`-Eigenschaft auf den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft gesetzt.

Das Zurücksetzen des Formulars versetzt das Element in den Standard-Modus und setzt die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft auf den Wert der `defaultValue`-Eigenschaft.

### Wert-Modus

Das Element geht in den Wert-Modus über, wenn der Inhalt der `value`-Eigenschaft gesetzt wird. Die `value`-Eigenschaft verhält sich ansonsten wie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Wenn sich das Element im Wert-Modus befindet, ist der Standardwert nur über die `defaultValue`-Eigenschaft zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("output")}}.
