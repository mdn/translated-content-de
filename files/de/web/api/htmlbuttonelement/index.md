---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("HTML DOM")}}

Das **`HTMLButtonElement`** Interface bietet Eigenschaften und Methoden (zusätzlich zu denen des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces, die es ebenfalls durch Vererbung besitzt) zur Manipulation von {{HTMLElement("button")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ein Zeichenfolgenwert, der die Aktion angibt, die auf einem Element durchgeführt werden soll, das durch diesen Button gesteuert wird.
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Ein Verweis auf ein existierendes [`Element`](/de/docs/Web/API/Element), das durch den Button gesteuert wird.
- [`HTMLButtonElement.disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)
  - : Ein boolescher Wert, der angibt, ob die Steuerung deaktiviert ist, was bedeutet, dass sie keine Klicks akzeptiert.
- [`HTMLButtonElement.form`](/de/docs/Web/API/HTMLButtonElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular widerspiegelt, mit dem dieser Button verbunden ist. Ist der Button ein Nachkomme eines Formularelements, dann ist dieses Attribut ein Verweis auf das zugehörige `HTMLFormElement` dieses Formulars. Wenn der Button kein Nachkomme eines Formularelements ist, dann kann das Attribut ein Verweis auf ein beliebiges `HTMLFormElement` im selben Dokument sein, mit dem es verbunden ist, oder der Wert `null`, wenn keiner übereinstimmt.
- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
  - : Eine Zeichenfolge, die die URI einer Ressource darstellt, die die vom Button übermittelten Informationen verarbeitet. Wenn angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Eine Zeichenfolge, die den Typ des Inhalts darstellt, der zur Übermittlung des Formulars an den Server verwendet wird. Wenn angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
  - : Eine Zeichenfolge, die die HTTP-Methode darstellt, die der Browser zur Übermittlung des Formulars verwendet. Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Ein boolescher Wert, der angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
  - : Eine Zeichenfolge, die einen Namen oder ein Schlüsselwort angibt, der beschreibt, wo die Antwort angezeigt wird, die nach dem Absenden des Formulars empfangen wird. Wenn angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement) {{experimental_inline}} {{non-standard_inline}}
  - : Holt oder setzt das Zielelement eines "interest invokers" in Fällen, in denen das zugeordnete {{htmlelement("button")}}-Element als [interest invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) festgelegt ist.
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList), die eine Liste von {{HTMLElement("label")}}-Elementen darstellt, die Labels für diesen Button sind.
- [`HTMLButtonElement.name`](/de/docs/Web/API/HTMLButtonElement/name)
  - : Eine Zeichenfolge, die den Namen des Objekts darstellt, wenn es mit einem Formular eingereicht wird. Wenn angegeben, darf es nicht die leere Zeichenfolge sein.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction)
  - : Holt und setzt die durchzuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf ein Popover-Element, das durch einen Steuerungsbutton gesteuert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML-Attributs wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement)
  - : Holt und setzt das Popover-Element, das über einen Button gesteuert wird. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML-Attributs.
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)
  - : Eine Zeichenfolge, die das Verhalten des Buttons angibt. Dies ist ein aufgezähltes Attribut mit den folgenden möglichen Werten:
    - `submit`: Der Button sendet das Formular ab. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist oder wenn es dynamisch in einen leeren oder ungültigen Wert geändert wird.
    - `reset`: Der Button setzt das Formular zurück.
    - `button`: Der Button tut nichts.
    - `menu`: Der Button zeigt ein Menü an. {{experimental_inline}}

- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Button ein Kandidat für die Beschränkungsvalidierung ist. Es ist `false`, wenn ihn Bedingungen von der Beschränkungsvalidierung ausschließen, einschließlich: seine `type`-Eigenschaft ist `reset` oder `button`; es hat einen {{HTMLElement("datalist")}}-Vorfahren; oder die `disabled`-Eigenschaft ist auf `true` gesetzt.
- [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dieses Attribut ist die leere Zeichenfolge, wenn die Kontrolle kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist `false`) oder wenn es seine Beschränkungen erfüllt.
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Gültigkeitszustände darstellt, in denen sich dieser Button befindet.
- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
  - : Eine Zeichenfolge, die den aktuellen Formulareingabewert des Buttons darstellt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls gibt es `false` zurück.
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
  - : Führt die gleiche Aktion wie `checkValidity()` aus, meldet jedoch auch das Ergebnis dem Benutzer, wenn das `invalid`-Ereignis nicht abgebrochen wurde.
- [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity)
  - : Setzt die benutzerdefinierte Fehlermeldung für das Element. Verwenden Sie die leere Zeichenfolge, um anzugeben, dass das Element _keinen_ benutzerdefinierten Gültigkeitsfehler hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("button")}}
