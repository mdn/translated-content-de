---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLFieldSetElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu den regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaften, die es durch Vererbung ebenfalls besitzt) zur Manipulation des Layouts und der Präsentation von {{ HTMLElement("fieldset") }}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.disabled`](/de/docs/Web/API/HTMLFieldSetElement/disabled)
  - : Ein Boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/fieldset#disabled)-HTML-Attribut widerspiegelt und anzeigt, ob der Benutzer mit dem Steuerelement interagieren kann.
- [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) {{ReadOnlyInline}}
  - : Die Elemente, die zu diesem Fieldset gehören. Der Typ dieser Eigenschaft hängt von der Spezifikationsversion ab, die vom Browser implementiert wird.
- [`HTMLFieldSetElement.form`](/de/docs/Web/API/HTMLFieldSetElement/form) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) oder [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die das enthaltene Formularelement referenziert, wenn sich dieses Element in einem Formular befindet.
    Wenn das Fieldset kein Nachfahre eines Formularelements ist, kann das Attribut die ID eines beliebigen Formularelements im gleichen Dokument sein, mit dem es in Beziehung steht, oder der Wert `null`, wenn keine Übereinstimmung vorhanden ist.
- [`HTMLFieldSetElement.name`](/de/docs/Web/API/HTMLFieldSetElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/fieldset#name)-HTML-Attribut widerspiegelt und den Namen des Fieldsets enthält. Dies kann beim Zugriff auf das Fieldset in JavaScript verwendet werden. Es ist _nicht_ Teil der Daten, die an den Server gesendet werden.
- [`HTMLFieldSetElement.type`](/de/docs/Web/API/HTMLFieldSetElement/type) {{ReadOnlyInline}}
  - : Der String `"fieldset"`.
- [`HTMLFieldSetElement.validationMessage`](/de/docs/Web/API/HTMLFieldSetElement/validationMessage)
  - : Ein String, der eine lokalisierte Nachricht darstellt, welche die Validierungseinschränkungen beschreibt, die das Element nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Element nicht für die Einschränkungsvalidierung in Frage kommt (`willValidate` ist `false`) oder es seine Einschränkungen erfüllt.
- [`HTMLFieldSetElement.validity`](/de/docs/Web/API/HTMLFieldSetElement/validity)
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Zustände der Gültigkeit darstellt, in denen sich dieses Element befindet.
- [`HTMLFieldSetElement.willValidate`](/de/docs/Web/API/HTMLFieldSetElement/willValidate)
  - : Ein Boolescher Wert `false`, da {{HTMLElement("fieldset")}}-Objekte niemals für die Einschränkungsvalidierung in Frage kommen.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals für die Einschränkungsvalidierung in Frage kommen.
- [`HTMLFieldSetElement.reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals für die Einschränkungsvalidierung in Frage kommen.
- [`HTMLFieldSetElement.setCustomValidity()`](/de/docs/Web/API/HTMLFieldSetElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Fehlermeldung für das Fieldset. Wenn diese Nachricht nicht der leere String ist, leidet das Fieldset unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("fieldset") }}.
