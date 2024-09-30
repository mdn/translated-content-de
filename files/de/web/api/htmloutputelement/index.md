---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die Schnittstelle **`HTMLOutputElement`** bietet Eigenschaften und Methoden (zusätzlich zu denen, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbt werden) zur Manipulation des Layouts und der Darstellung von {{HTMLElement("output")}} Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue)
  - : Ein String, der den Standardwert des Elements darstellt, anfangs der leere String.
- [`HTMLOutputElement.form`](/de/docs/Web/API/HTMLOutputElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das mit dem Steuerelement assoziierte Formular anzeigt, das das [`form`](/de/docs/Web/HTML/Element/output#form) HTML-Attribut widerspiegelt, wenn es definiert ist.
- [`HTMLOutputElement.htmlFor`](/de/docs/Web/API/HTMLOutputElement/htmlFor) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), das das [`for`](/de/docs/Web/HTML/Element/output#for) HTML-Attribut widerspiegelt und eine Liste von IDs anderer Elemente im selben Dokument enthält, die zu dem berechneten `value` beitragen (oder es anderweitig beeinflussen).
- [`HTMLOutputElement.labels`](/de/docs/Web/API/HTMLOutputElement/labels) {{ReadOnlyInline}}
  - : Ein [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}} Elementen, die mit dem Element verbunden sind.
- [`HTMLOutputElement.name`](/de/docs/Web/API/HTMLOutputElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/output#name) HTML-Attribut widerspiegelt und den Namen für das Steuerelement enthält, der mit den Formulardaten übermittelt wird.
- [`HTMLOutputElement.type`](/de/docs/Web/API/HTMLOutputElement/type) {{ReadOnlyInline}}
  - : Der String `"output"`.
- [`HTMLOutputElement.validationMessage`](/de/docs/Web/API/HTMLOutputElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht beschreibt, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder es erfüllt seine Einschränkungen.
- [`HTMLOutputElement.validity`](/de/docs/Web/API/HTMLOutputElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLOutputElement.value`](/de/docs/Web/API/HTMLOutputElement/value)
  - : Ein String, der den Wert des Inhalts der Elemente darstellt. Verhält sich wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft.
- [`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Für `HTMLOutputElement`-Objekte immer `false`.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
  - : Überprüft die Gültigkeit des Elements und gibt einen booleschen Wert zurück, der das Prüfungsergebnis enthält.
- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)

  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, wird ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element ausgelöst und es wird `false` zurückgegeben; wenn es keine Probleme gibt, wird `true` zurückgegeben.

    Wenn das Problem gemeldet wird, kann der Benutzeragent das Element fokussieren und die Scrollposition des Dokuments ändern oder eine andere Aktion durchführen, die das Element auf die Aufmerksamkeit des Benutzers lenkt. Benutzeragenten können mehr als eine Einschränkungsverletzung melden, wenn dieses Element gleichzeitig unter mehreren Problemen leidet. Wenn das Element nicht gerendert wird, kann der Benutzeragent den Fehler stattdessen für das laufende Skript melden, anstatt den Benutzer zu benachrichtigen.

- [`HTMLOutputElement.setCustomValidity()`](/de/docs/Web/API/HTMLOutputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Validierungsfehler und validiert nicht.

## Modi

Dieses Element verhält sich in einem von zwei Modi: _default_ Modus und _value_ Modus.

### Default Modus

Zunächst ist das Element im Default-Modus, und so stellen die Inhalte des Elements sowohl den Wert des Elements als auch dessen Standardwert dar.

Wenn das Element im Default-Modus ist, wenn die Nachfahren des Elements in irgendeiner Weise geändert werden, wird die Eigenschaft `defaultValue` auf den Wert der [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft gesetzt.

Das Zurücksetzen des Formulars versetzt das Element in den Default-Modus und setzt die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) auf den Wert der Eigenschaft `defaultValue`.

### Value Modus

Das Element wechselt in den Value-Modus, wenn die Inhalte der Eigenschaft `value` gesetzt werden. Die Eigenschaft `value` verhält sich ansonsten wie die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft. Wenn das Element im Value-Modus ist, ist der Standardwert nur über die Eigenschaft `defaultValue` zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("output")}}.
