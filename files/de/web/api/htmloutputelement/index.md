---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Das **`HTMLOutputElement`**-Interface bietet Eigenschaften und Methoden (über die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbten hinaus) zur Manipulation des Layouts und der Darstellung von {{HTMLElement("output")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue)
  - : Ein String, der den Standardwert des Elements darstellt, anfänglich der leere String.
- [`HTMLOutputElement.form`](/de/docs/Web/API/HTMLOutputElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular anzeigt, das mit der Steuerung verbunden ist und das HTML-Attribut [`form`](/de/docs/Web/HTML/Reference/Elements/output#form) widerspiegelt, wenn es definiert ist.
- [`HTMLOutputElement.htmlFor`](/de/docs/Web/API/HTMLOutputElement/htmlFor) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das HTML-Attribut [`for`](/de/docs/Web/HTML/Reference/Elements/output#for) widerspiegelt und eine Liste von IDs anderer Elemente im selben Dokument enthält, die zu dem berechneten `value` beitragen (oder es anderweitig beeinflussen).
- [`HTMLOutputElement.labels`](/de/docs/Web/API/HTMLOutputElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}}-Elementen, die mit dem Element assoziiert sind.
- [`HTMLOutputElement.name`](/de/docs/Web/API/HTMLOutputElement/name)
  - : Ein String, der das HTML-Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/output#name) widerspiegelt und den Namen für die Steuerung enthält, der mit Formulardaten übermittelt wird.
- [`HTMLOutputElement.type`](/de/docs/Web/API/HTMLOutputElement/type) {{ReadOnlyInline}}
  - : Der String `"output"`.
- [`HTMLOutputElement.validationMessage`](/de/docs/Web/API/HTMLOutputElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht beschreibt, die die Validierungsbeschränkungen erklärt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder ihre Beschränkungen erfüllt.
- [`HTMLOutputElement.validity`](/de/docs/Web/API/HTMLOutputElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLOutputElement.value`](/de/docs/Web/API/HTMLOutputElement/value)
  - : Ein String, der den Wert des Inhalts der Elemente darstellt. Verhält sich wie die Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent).
- [`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Immer `false` für `HTMLOutputElement`-Objekte.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
  - : Überprüft die Gültigkeit des Elements und gibt einen booleschen Wert zurück, der das Ergebnis der Überprüfung enthält.
- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)

  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, wird ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst und `false` zurückgegeben; wenn keine Probleme vorliegen, wird `true` zurückgegeben.

    Wenn das Problem gemeldet wird, kann der Benutzeragent das Element in den Fokus rücken und die Scrollposition des Dokuments ändern oder eine andere Aktion ausführen, um das Element in den Fokus des Benutzers zu rücken. Benutzeragenten können mehr als eine Einschränkungsverletzung melden, wenn dieses Element unter mehreren Problemen gleichzeitig leidet. Wenn das Element nicht gerendert wird, kann der Benutzeragent den Fehler für das laufende Skript melden, anstatt den Benutzer zu benachrichtigen.

- [`HTMLOutputElement.setCustomValidity()`](/de/docs/Web/API/HTMLOutputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Fehlermeldung für das Element fest. Wenn diese Nachricht nicht der leere String ist, dann leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

## Modi

Dieses Element verhält sich in einem von zwei Modi: _default_-Modus und _value_-Modus.

### Default-Modus

Anfangs befindet sich das Element im Default-Modus, und der Inhalt des Elements repräsentiert sowohl den Wert des Elements als auch seinen Standardwert.

Wenn das Element im Default-Modus ist, wenn die Nachkommen des Elements auf irgendeine Weise geändert werden, wird die Eigenschaft `defaultValue` auf den Wert der Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) gesetzt.

Das Zurücksetzen des Formulars versetzt das Element in den Default-Modus und setzt die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) auf den Wert der `defaultValue`-Eigenschaft.

### Value-Modus

Das Element wechselt in den Value-Modus, wenn der Inhalt der `value`-Eigenschaft gesetzt wird. Die `value`-Eigenschaft verhält sich ansonsten wie die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent). Wenn das Element im Value-Modus ist, ist der Standardwert nur über die `defaultValue`-Eigenschaft zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("output")}}.
