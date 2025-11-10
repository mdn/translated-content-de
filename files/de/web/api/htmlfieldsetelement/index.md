---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
l10n:
  sourceCommit: 2406bfdc031740afbd500a1fc953a76a4b7f8484
---

{{APIRef("HTML DOM")}}

Das **`HTMLFieldSetElement`**-Interface bietet spezielle Eigenschaften und Methoden (über die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus, die es auch durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von {{ HTMLElement("fieldset") }}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.disabled`](/de/docs/Web/API/HTMLFieldSetElement/disabled)
  - : Ein boolescher Wert, der das HTML-Attribut [`disabled`](/de/docs/Web/HTML/Reference/Elements/fieldset#disabled) widerspiegelt und anzeigt, ob der Benutzer mit dem Steuerelement interagieren kann.
- [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) {{ReadOnlyInline}}
  - : Die Elemente, die zu diesem Fieldset gehören. Der Typ dieser Eigenschaft hängt von der Version der Spezifikation ab, die vom Browser implementiert wird.
- [`HTMLFieldSetElement.form`](/de/docs/Web/API/HTMLFieldSetElement/form) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) oder [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die das enthaltene Formularelement referenziert, falls dieses Element in einem Formular enthalten ist.
    Wenn das Fieldset kein Nachkomme eines Formularelements ist, kann das Attribut die ID eines beliebigen Formularelements im selben Dokument sein, zu dem es gehört, oder der Wert `null`, falls keines übereinstimmt.
- [`HTMLFieldSetElement.name`](/de/docs/Web/API/HTMLFieldSetElement/name)
  - : Eine Zeichenkette, die das HTML-Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/fieldset#name) widerspiegelt, das den Namen des Fieldsets enthält. Dies kann beim Zugriff auf das Fieldset in JavaScript verwendet werden. Es ist _nicht_ Teil der Daten, die an den Server gesendet werden.
- [`HTMLFieldSetElement.type`](/de/docs/Web/API/HTMLFieldSetElement/type) {{ReadOnlyInline}}
  - : Die Zeichenkette `"fieldset"`.
- [`HTMLFieldSetElement.validationMessage`](/de/docs/Web/API/HTMLFieldSetElement/validationMessage) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die eine lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die das Element nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenkette, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`), oder es seine Einschränkungen erfüllt.
- [`HTMLFieldSetElement.validity`](/de/docs/Web/API/HTMLFieldSetElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLFieldSetElement.willValidate`](/de/docs/Web/API/HTMLFieldSetElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert `false`, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.
- [`HTMLFieldSetElement.reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.
- [`HTMLFieldSetElement.setCustomValidity()`](/de/docs/Web/API/HTMLFieldSetElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Fehlermeldung für das Fieldset. Wenn diese Nachricht nicht die leere Zeichenkette ist, leidet das Fieldset unter einem benutzerdefinierten Validierungsfehler und wird nicht validiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("fieldset") }}.
