---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die **`HTMLFieldSetElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (über die regulären Eigenschaften der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus, die sie ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von {{ HTMLElement("fieldset") }}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.disabled`](/de/docs/Web/API/HTMLFieldSetElement/disabled)
  - : Ein boolescher Wert, der das HTML-Attribut [`disabled`](/de/docs/Web/HTML/Element/fieldset#disabled) widerspiegelt und angibt, ob der Benutzer mit dem Steuerelement interagieren kann.
- [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) {{ReadOnlyInline}}
  - : Die Elemente, die zu diesem Fieldset gehören. Der Typ dieser Eigenschaft hängt von der Version der vom Browser implementierten Spezifikation ab.
- [`HTMLFieldSetElement.form`](/de/docs/Web/API/HTMLFieldSetElement/form) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) oder [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die das enthaltene Form-Element referenziert, falls dieses Element in einem Formular ist. Wenn das Fieldset kein Nachfahre eines Form-Elements ist, kann das Attribut die ID eines beliebigen Form-Elements im selben Dokument sein, zu dem es in Beziehung steht, oder der Wert `null`, wenn keine Übereinstimmungen vorliegen.
- [`HTMLFieldSetElement.name`](/de/docs/Web/API/HTMLFieldSetElement/name)
  - : Ein String, der das HTML-Attribut [`name`](/de/docs/Web/HTML/Element/fieldset#name) widerspiegelt und den Namen des Fieldsets enthält. Dies kann verwendet werden, wenn das Fieldset in JavaScript angesprochen wird. Es ist _nicht_ Teil der Daten, die an den Server gesendet werden.
- [`HTMLFieldSetElement.type`](/de/docs/Web/API/HTMLFieldSetElement/type) {{ReadOnlyInline}}
  - : Der String `"fieldset"`.
- [`HTMLFieldSetElement.validationMessage`](/de/docs/Web/API/HTMLFieldSetElement/validationMessage)
  - : Ein String, der eine lokalisierte Nachricht darstellt, die die Validierungsbedingungen beschreibt, die das Element nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder seine Bedingungen erfüllt.
- [`HTMLFieldSetElement.validity`](/de/docs/Web/API/HTMLFieldSetElement/validity)
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Gültigkeitszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLFieldSetElement.willValidate`](/de/docs/Web/API/HTMLFieldSetElement/willValidate)
  - : Ein boolescher Wert `false`, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.

## Instanzmethoden

_Erbt Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.
- [`HTMLFieldSetElement.reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für die Einschränkungsvalidierung sind.
- [`HTMLFieldSetElement.setCustomValidity()`](/de/docs/Web/API/HTMLFieldSetElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Gültigkeitsnachricht für das Fieldset. Wenn diese Nachricht nicht der leere String ist, leidet das Fieldset unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("fieldset") }}.
