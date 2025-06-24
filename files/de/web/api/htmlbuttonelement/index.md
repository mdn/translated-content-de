---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Das **`HTMLButtonElement`** Interface bietet Eigenschaften und Methoden (zusätzlich zu dem normalen [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface, das es ebenfalls von der Vererbung her zur Verfügung hat) zum Manipulieren von {{HTMLElement("button")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ein Zeichenfolgewert, der die Aktion angibt, die an einem durch diesen Knopf gesteuerten Element ausgeführt werden soll.
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ein Verweis auf ein existierendes [`Element`](/de/docs/Web/API/Element), das durch den Knopf gesteuert wird.
- [`HTMLButtonElement.disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)
  - : Ein boolescher Wert, der angibt, ob die Steuerung deaktiviert ist, was bedeutet, dass sie keine Klicks annimmt.
- [`HTMLButtonElement.form`](/de/docs/Web/API/HTMLButtonElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular darstellt, mit dem dieser Knopf verknüpft ist. Wenn der Knopf ein Nachkomme eines Formular-Elements ist, dann ist dieses Attribut eine Referenz auf das zugehörige `HTMLFormElement` dieses Formulars.
    Wenn der Knopf kein Nachkomme eines Formular-Elements ist, dann kann das Attribut ein Verweis auf ein beliebiges `HTMLFormElement` im selben Dokument sein, mit dem es verknüpft ist, oder der Wert `null`, wenn kein entsprechendes vorhanden ist.
- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
  - : Eine Zeichenfolge, die die URI einer Ressource darstellt, die die vom Knopf übermittelten Informationen verarbeitet. Wenn angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) Attribut des {{HTMLElement("form")}} Elements, zu dem es gehört.
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Eine Zeichenfolge, die den Inhaltstyp darstellt, der verwendet wird, um das Formular an den Server zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des {{HTMLElement("form")}} Elements, zu dem es gehört.
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
  - : Eine Zeichenfolge, die die HTTP-Methode darstellt, die der Browser verwendet, um das Formular zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) Attribut des {{HTMLElement("form")}} Elements, zu dem es gehört.
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Ein boolescher Wert, der angibt, dass das Formular beim Senden nicht validiert werden soll. Wenn angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut des {{HTMLElement("form")}} Elements, zu dem es gehört.
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
  - : Eine Zeichenfolge, die einen Namen oder ein Schlüsselwort darstellt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars erhalten wird. Wenn angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) Attribut des {{HTMLElement("form")}} Elements, zu dem es gehört.
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels) {{ReadOnlyInline}}
  - : Ein [`NodeList`](/de/docs/Web/API/NodeList), das eine Liste von {{HTMLElement("label")}}-Elementen darstellt, die Labels für diesen Knopf sind.
- [`HTMLButtonElement.name`](/de/docs/Web/API/HTMLButtonElement/name)
  - : Eine Zeichenfolge, die den Namen des Objekts darstellt, wenn es mit einem Formular übermittelt wird. Wenn angegeben, darf es nicht die leere Zeichenfolge sein.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction)
  - : Ruft die Aktion ab und setzt sie (`"hide"`, `"show"` oder `"toggle"`), die an einem durch einen Steuerknopf kontrollierten Popover-Element ausgeführt werden soll. Es spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement)
  - : Ruft das Popover-Element ab und setzt es, das über einen Knopf gesteuert werden soll. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget).
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)

  - : Eine Zeichenfolge, die das Verhalten des Knopfes anzeigt. Dies ist ein enumeriertes Attribut mit den folgenden möglichen Werten:
    - `submit`: Der Knopf übermittelt das Formular. Dies ist der Standardwert, wenn das Attribut nicht angegeben oder dynamisch auf einen leeren oder ungültigen Wert geändert wird.
    - `reset`: Der Knopf setzt das Formular zurück.
    - `button`: Der Knopf tut nichts.
    - `menu`: Der Knopf zeigt ein Menü an. {{experimental_inline}}

- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Knopf ein Kandidat für die Einschränkungsvalidierung ist. Er ist `false`, wenn Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich: seine `type`-Eigenschaft ist `reset` oder `button`; es hat einen {{HTMLElement("datalist")}} Vorfahren; oder die `disabled` Eigenschaft ist auf `true` gesetzt.
- [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die lokalisierten Nachricht darstellt, welche die Validierungsbedingungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dieses Attribut ist die leere Zeichenkette, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`), oder wenn sie ihre Einschränkungen erfüllt.
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Gültigkeitszustände darstellt, in denen sich dieser Knopf befindet.
- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
  - : Eine Zeichenfolge, die den aktuellen Formularsteuerwert des Knopfes darstellt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls gibt es `false` zurück.
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
  - : Führt die gleiche Aktion wie `checkValidity()` aus, aber berichtet das Ergebnis auch dem Benutzer, wenn das `invalid`-Ereignis nicht abgebrochen wurde.
- [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity)
  - : Setzt die benutzerdefinierte Gültigkeitsnachricht für das Element. Verwenden Sie die leere Zeichenfolge, um anzugeben, dass das Element _keinen_ benutzerdefinierten Gültigkeitsfehler hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("button")}}
