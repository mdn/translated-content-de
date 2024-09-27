---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Das **`HTMLOutputElement`**-Interface bietet Eigenschaften und Methoden (über die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbten hinaus) zur Manipulation des Layouts und der Darstellung von {{HTMLElement("output")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue)
  - : Ein String, der den Standardwert des Elements darstellt, zunächst der leere String.
- [`HTMLOutputElement.form`](/de/docs/Web/API/HTMLOutputElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das mit dem Steuerelement verbundene Formular angibt, und das das [`form`](/de/docs/Web/HTML/Element/output#form) HTML-Attribut widerspiegelt, falls es definiert ist.
- [`HTMLOutputElement.htmlFor`](/de/docs/Web/API/HTMLOutputElement/htmlFor) {{ReadOnlyInline}}
  - : Ein [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), das das [`for`](/de/docs/Web/HTML/Element/output#for) HTML-Attribut widerspiegelt und eine Liste von IDs anderer Elemente im selben Dokument enthält, die zum berechneten `value` beitragen oder dieses beeinflussen.
- [`HTMLOutputElement.labels`](/de/docs/Web/API/HTMLOutputElement/labels) {{ReadOnlyInline}}
  - : Ein [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}}-Elementen, die mit dem Element verknüpft sind.
- [`HTMLOutputElement.name`](/de/docs/Web/API/HTMLOutputElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/output#name) HTML-Attribut widerspiegelt, und den Namen für das Steuerelement enthält, der mit Formulardaten übermittelt wird.
- [`HTMLOutputElement.type`](/de/docs/Web/API/HTMLOutputElement/type) {{ReadOnlyInline}}
  - : Der String `"output"`.
- [`HTMLOutputElement.validationMessage`](/de/docs/Web/API/HTMLOutputElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder seine Einschränkungen erfüllt.
- [`HTMLOutputElement.validity`](/de/docs/Web/API/HTMLOutputElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLOutputElement.value`](/de/docs/Web/API/HTMLOutputElement/value)
  - : Ein String, der den Wert des Inhalts der Elemente darstellt. Verhält sich wie die Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent).
- [`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Immer `false` für `HTMLOutputElement`-Objekte.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
  - : Überprüft die Gültigkeit des Elements und gibt einen booleschen Wert zurück, der das Ergebnis der Überprüfung enthält.
- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)

  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, wird ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Event am Element ausgelöst und `false` zurückgegeben; wenn keine Probleme vorliegen, wird `true` zurückgegeben.

    Wenn das Problem gemeldet wird, kann der Benutzeragent das Element fokussieren und die Scrollposition des Dokuments ändern oder eine andere Aktion durchführen, die das Element auf die Aufmerksamkeit des Benutzers lenkt. Benutzeragenten können mehr als eine Einschränkungsverletzung melden, wenn dieses Element gleichzeitig unter mehreren Problemen leidet. Wenn das Element nicht gerendert wird, kann der Benutzeragent den Fehler für das laufende Skript melden, anstatt den Benutzer zu benachrichtigen.

- [`HTMLOutputElement.setCustomValidity()`](/de/docs/Web/API/HTMLOutputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Gültigkeitsnachricht für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

## Modi

Dieses Element verhält sich in einem von zwei Modi: _Standardmodus_ und _Wertmodus_.

### Standardmodus

Zu Beginn befindet sich das Element im Standardmodus, sodass der Inhalt des Elements sowohl den Wert des Elements als auch dessen Standardwert darstellt.

Wenn sich das Element im Standardmodus befindet, wenn die Nachkommen des Elements in irgendeiner Weise geändert werden, wird die `defaultValue`-Eigenschaft auf den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft gesetzt.

Das Zurücksetzen des Formulars versetzt das Element in den Standardmodus und setzt die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft auf den Wert der `defaultValue`-Eigenschaft.

### Wertmodus

Das Element wechselt in den Wertmodus, wenn der Inhalt der `value`-Eigenschaft gesetzt wird. Die `value`-Eigenschaft verhält sich ansonsten wie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Wenn sich das Element im Wertmodus befindet, ist der Standardwert nur über die `defaultValue`-Eigenschaft zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("output")}}.
