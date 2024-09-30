---
title: HTMLFieldSetElement
slug: Web/API/HTMLFieldSetElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Das **`HTMLFieldSetElement`**-Interface bietet spezielle Eigenschaften und Methoden (über diejenigen hinaus, die es durch Vererbung auch für das reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface verfügbar hat) zur Manipulation des Layouts und der Darstellung von {{ HTMLElement("fieldset") }}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.disabled`](/de/docs/Web/API/HTMLFieldSetElement/disabled)
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/fieldset#disabled)-HTML-Attribut widerspiegelt und angibt, ob der Benutzer mit dem Steuerelement interagieren kann.
- [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) {{ReadOnlyInline}}
  - : Die Elemente, die zu diesem Feldsatz gehören. Der Typ dieser Eigenschaft hängt von der Version der Spezifikation ab, die vom Browser implementiert wird.
- [`HTMLFieldSetElement.form`](/de/docs/Web/API/HTMLFieldSetElement/form) {{ReadOnlyInline}}
  - : Eine [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection) oder [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die das enthaltene Formularelement referenziert, wenn dieses Element in einem Formular ist. Wenn der Feldsatz kein Nachfahre eines Formularelements ist, dann kann das Attribut die ID eines beliebigen Formularelements im gleichen Dokument sein, zu dem es gehört, oder der `null`-Wert, wenn keine Übereinstimmung besteht.
- [`HTMLFieldSetElement.name`](/de/docs/Web/API/HTMLFieldSetElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/fieldset#name)-HTML-Attribut widerspiegelt und den Namen des Feldsatzes enthält. Dies kann beim Zugriff auf das Feldset in JavaScript verwendet werden. Es ist _nicht_ Teil der Daten, die zum Server gesendet werden.
- [`HTMLFieldSetElement.type`](/de/docs/Web/API/HTMLFieldSetElement/type) {{ReadOnlyInline}}
  - : Der String `"fieldset"`.
- [`HTMLFieldSetElement.validationMessage`](/de/docs/Web/API/HTMLFieldSetElement/validationMessage)
  - : Ein String, der eine lokalisierte Nachricht darstellt, die die Validierungsanforderungen beschreibt, die das Element nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`), oder wenn es seine Anforderungen erfüllt.
- [`HTMLFieldSetElement.validity`](/de/docs/Web/API/HTMLFieldSetElement/validity)
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Validitätszustände darstellt, in denen sich dieses Element befindet.
- [`HTMLFieldSetElement.willValidate`](/de/docs/Web/API/HTMLFieldSetElement/willValidate)
  - : Ein boolescher Wert `false`, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für Einschränkungsvalidierungen sind.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLFieldSetElement.checkValidity()`](/de/docs/Web/API/HTMLFieldSetElement/checkValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für Einschränkungsvalidierungen sind.
- [`HTMLFieldSetElement.reportValidity()`](/de/docs/Web/API/HTMLFieldSetElement/reportValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("fieldset")}}-Objekte niemals Kandidaten für Einschränkungsvalidierungen sind.
- [`HTMLFieldSetElement.setCustomValidity()`](/de/docs/Web/API/HTMLFieldSetElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Fehlermeldung für den Feldsatz. Wenn diese Nachricht nicht der leere String ist, dann leidet der Feldsatz unter einem benutzerdefinierten Validitätsfehler und wird nicht validiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{ HTMLElement("fieldset") }}.
