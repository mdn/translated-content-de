---
title: HTMLOutputElement
slug: Web/API/HTMLOutputElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLOutputElement`**-Interface bietet Eigenschaften und Methoden (über die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbten hinaus) zur Manipulation des Layouts und der Präsentation von {{HTMLElement("output")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt ebenfalls Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.defaultValue`](/de/docs/Web/API/HTMLOutputElement/defaultValue)
  - : Ein String, der den Standardwert des Elements darstellt, der anfangs der leere String ist.
- [`HTMLOutputElement.form`](/de/docs/Web/API/HTMLOutputElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das mit dem Steuerelement verbundene Formular anzeigt und das [`form`](/de/docs/Web/HTML/Reference/Elements/output#form)-HTML-Attribut widerspiegelt, sofern es definiert ist.
- [`HTMLOutputElement.htmlFor`](/de/docs/Web/API/HTMLOutputElement/htmlFor) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die das [`for`](/de/docs/Web/HTML/Reference/Elements/output#for)-HTML-Attribut widerspiegelt und eine Liste von IDs anderer Elemente im selben Dokument enthält, die zum berechneten `value` beitragen (oder diesen beeinflussen).
- [`HTMLOutputElement.labels`](/de/docs/Web/API/HTMLOutputElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}}-Elementen, die dem Element zugeordnet sind.
- [`HTMLOutputElement.name`](/de/docs/Web/API/HTMLOutputElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/output#name)-HTML-Attribut widerspiegelt und den Namen für das Steuerelement enthält, der mit Formulardaten übermittelt wird.
- [`HTMLOutputElement.type`](/de/docs/Web/API/HTMLOutputElement/type) {{ReadOnlyInline}}
  - : Der String `"output"`.
- [`HTMLOutputElement.validationMessage`](/de/docs/Web/API/HTMLOutputElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht beschreibt, die die Validierungseinschränkungen erläutert, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder wenn es seine Einschränkungen erfüllt.
- [`HTMLOutputElement.validity`](/de/docs/Web/API/HTMLOutputElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLOutputElement.value`](/de/docs/Web/API/HTMLOutputElement/value)
  - : Ein String, der den Wert des Inhalts der Elemente darstellt. Verhält sich ähnlich wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.
- [`HTMLOutputElement.willValidate`](/de/docs/Web/API/HTMLOutputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Immer `false` für `HTMLOutputElement`-Objekte.

## Instanz-Methoden

_Dieses Interface erbt ebenfalls Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOutputElement.checkValidity()`](/de/docs/Web/API/HTMLOutputElement/checkValidity)
  - : Überprüft die Gültigkeit des Elements und gibt einen booleschen Wert zurück, der das Ergebnis der Überprüfung enthält.
- [`HTMLOutputElement.reportValidity()`](/de/docs/Web/API/HTMLOutputElement/reportValidity)

  - : Diese Methode meldet die Probleme mit den Einschränkungen des Elements, falls vorhanden, dem Benutzer. Wenn es Probleme gibt, löst sie ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und gibt `false` zurück; wenn es keine Probleme gibt, gibt sie `true` zurück.

    Wenn das Problem gemeldet wird, kann der Benutzeragent das Element fokussieren und die Scroll-Position des Dokuments ändern oder eine andere Aktion ausführen, die das Element in den Vordergrund des Benutzers rückt. Benutzeragenten können mehr als einen Einschränkungsverstoß melden, wenn dieses Element gleichzeitig unter mehreren Problemen leidet. Wenn das Element nicht gerendert wird, kann der Benutzeragent den Fehler für das laufende Skript anstelle der Benutzerbenachrichtigung melden.

- [`HTMLOutputElement.setCustomValidity()`](/de/docs/Web/API/HTMLOutputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Gültigkeitsnachricht für das Element fest. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

## Modi

Dieses Element verhält sich in einem von zwei Modi: _Standardmodus_ und _Wertmodus_.

### Standardmodus

Anfangs befindet sich das Element im Standardmodus, und so repräsentiert der Inhalt des Elements sowohl den Wert des Elements als auch seinen Standardwert.

Wenn sich das Element im Standardmodus befindet und die Nachfahren des Elements auf irgendeine Weise geändert werden, wird die `defaultValue`-Eigenschaft auf den Wert der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft gesetzt.

Das Zurücksetzen des Formulars versetzt das Element in den Standardmodus und setzt die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft auf den Wert der `defaultValue`-Eigenschaft.

### Wertmodus

Das Element wechselt in den Wertmodus, wenn der Inhalt der `value`-Eigenschaft gesetzt wird. Die `value`-Eigenschaft verhält sich ansonsten wie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Wenn sich das Element im Wertmodus befindet, ist der Standardwert nur über die `defaultValue`-Eigenschaft zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("output")}}.
