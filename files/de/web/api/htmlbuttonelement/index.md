---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{APIRef("HTML DOM")}}

Das **`HTMLButtonElement`** Interface stellt Eigenschaften und Methoden (über die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle hinaus, die es auch durch Vererbung verfügbar hat) zur Manipulation von {{HTMLElement("button")}}-Elementen zur Verfügung.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ein Zeichenfolgenwert, der die Aktion angibt, die bei einem vom Button gesteuerten Element ausgeführt werden soll.
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ein Verweis auf ein vorhandenes [`Element`](/de/docs/Web/API/Element), das vom Button gesteuert wird.
- [`HTMLButtonElement.disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)
  - : Ein boolescher Wert, der angibt, ob die Steuerung deaktiviert ist, was bedeutet, dass sie keine Klicks akzeptiert.
- [`HTMLButtonElement.form`](/de/docs/Web/API/HTMLButtonElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular widerspiegelt, mit dem dieser Button verknüpft ist. Ist der Button ein Nachkomme eines Formularelements, dann ist dieses Attribut ein Verweis auf das zugehörige `HTMLFormElement` des Formulars. Wenn der Button nicht ein Nachkomme eines Formularelements ist, kann das Attribut ein Verweis auf jedes `HTMLFormElement`-Element im selben Dokument sein, mit dem es verbunden ist, oder den Wert `null` haben, wenn keine Übereinstimmung vorliegt.
- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
  - : Eine Zeichenfolge, die die URI einer Ressource widerspiegelt, die von dem Button übermittelte Informationen verarbeitet. Wenn angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) Attribut des {{HTMLElement("form")}} Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Eine Zeichenfolge, die den Inhaltstyp widerspiegelt, der verwendet wird, um das Formular an den Server zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des {{HTMLElement("form")}} Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
  - : Eine Zeichenfolge, die das HTTP-Verfahren widerspiegelt, das der Browser verwendet, um das Formular zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) Attribut des {{HTMLElement("form")}} Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Ein boolescher Wert, der anzeigt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut des {{HTMLElement("form")}} Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
  - : Eine Zeichenfolge, die einen Namen oder ein Schlüsselwort widerspiegelt, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wurde. Wenn angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) Attribut des {{HTMLElement("form")}} Elements, dem dieses Element gehört.
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList), die eine Liste von {{HTMLElement("label")}} Elementen darstellt, die Labels für diesen Button sind.
- [`HTMLButtonElement.name`](/de/docs/Web/API/HTMLButtonElement/name)
  - : Eine Zeichenfolge, die den Namen des Objekts bei der Übermittlung mit einem Formular darstellt. Wenn angegeben, darf sie nicht die leere Zeichenfolge sein.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction)
  - : Ruft die Aktion ab, die auf ein durch einen Kontrollknopf gesteuertes Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`), oder setzt sie. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attributs wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement)
  - : Ruft das Popover-Element ab oder setzt es, das über einen Button gesteuert werden soll. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attributs.
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)

  - : Eine Zeichenfolge, die das Verhalten des Buttons angibt. Dies ist ein aufgezähltes Attribut mit den folgenden möglichen Werten:

    - `submit`: Der Button übermittelt das Formular. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist oder es auf einen leeren oder ungültigen Wert dynamisch geändert wird.
    - `reset`: Der Button setzt das Formular zurück.
    - `button`: Der Button tut nichts.
    - `menu`: Der Button zeigt ein Menü an. {{experimental_inline}}

- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Button ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich: seine `type` Eigenschaft ist `reset` oder `button`; es hat einen {{HTMLElement("datalist")}} Vorfahren; oder die `disabled` Eigenschaft ist auf `true` gesetzt.
- [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dieses Attribut ist die leere Zeichenfolge, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`), oder wenn es seine Einschränkungen erfüllt.
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Gültigkeitszustände darstellt, in denen sich dieser Button befindet.
- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
  - : Eine Zeichenfolge, die den aktuellen Formularsteuerwert des Buttons darstellt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
  - : Führt die gleiche Aktion wie `checkValidity()` aus, meldet aber das Ergebnis auch dem Benutzer, wenn das `invalid` Ereignis nicht abgebrochen wurde.
- [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity)
  - : Setzt die benutzerdefinierte Fehlermeldung für das Element. Verwenden Sie die leere Zeichenfolge, um anzugeben, dass das Element _keinen_ benutzerdefinierten Gültigkeitsfehler hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("button")}}
