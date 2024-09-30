---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("HTML DOM")}}

Die **`HTMLButtonElement`**-Schnittstelle bietet zusätzliche Eigenschaften und Methoden (über die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus, die sie auch durch Vererbung zur Verfügung hat) zur Manipulation von {{HTMLElement("button")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)
  - : Ein boolescher Wert, der angibt, ob die Steuerung deaktiviert ist, was bedeutet, dass sie keine Klicks akzeptiert.
- [`HTMLButtonElement.form`](/de/docs/Web/API/HTMLButtonElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular widerspiegelt, mit dem dieser Button verbunden ist. Wenn der Button ein Nachkomme eines Formularelements ist, stellt dieses Attribut eine Referenz auf das zugehörige `HTMLFormElement` dieses Formulars dar. Wenn der Button kein Nachkomme eines Formularelements ist, kann das Attribut eine Referenz auf ein beliebiges `HTMLFormElement` Element im selben Dokument sein, mit dem es verbunden ist, oder der Wert `null`, wenn keine Übereinstimmung besteht.
- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
  - : Ein String, der die URI einer Ressource widerspiegelt, die die vom Button übermittelten Informationen verarbeitet. Falls angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Ein String, der den Inhaltstyp widerspiegelt, der verwendet wird, um das Formular an den Server zu übermitteln. Falls angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
  - : Ein String, der die HTTP-Methode widerspiegelt, die der Browser verwendet, um das Formular zu übermitteln. Falls angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des {{HTMLElement("form")}}-Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Ein boolescher Wert, der angibt, dass das Formular bei Übermittlung nicht validiert werden soll. Falls angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des {{HTMLElement("form")}}-Elements, dem dieses Element gehört.
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
  - : Ein String, der einen Namen oder ein Schlüsselwort widerspiegelt, das angibt, wo die Antwort angezeigt werden soll, die nach der Übermittlung des Formulars empfangen wird. Falls angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des {{HTMLElement("form")}}-Elements, dem dieses Element gehört.
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList), die eine Liste von {{HTMLElement("label")}}-Elementen darstellt, die Labels für diesen Button sind.
- [`HTMLButtonElement.name`](/de/docs/Web/API/HTMLButtonElement/name)
  - : Ein String, der den Namen des Objekts bei Übermittlung mit einem Formular darstellt. Falls angegeben, darf es nicht der leere String sein.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction)
  - : Ermittelt und setzt die Aktion, die (`"hide"`, `"show"`, oder `"toggle"`) an einem Popover-Element ausgeführt werden soll, das von einem Steuerbutton kontrolliert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)-HTML-Attributs wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement)
  - : Ermittelt und setzt das Popover-Element, das über einen Button gesteuert werden soll. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)-HTML-Attributs.
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)

  - : Ein String, der das Verhalten des Buttons angibt. Dies ist ein aufgezähltes Attribut mit folgenden möglichen Werten:

    - `submit`: Der Button übermittelt das Formular. Dies ist der Standardwert, wenn das Attribut nicht angegeben wurde oder es dynamisch auf einen leeren oder ungültigen Wert geändert wurde.
    - `reset`: Der Button setzt das Formular zurück.
    - `button`: Der Button führt keine Aktion durch.
    - `menu`: Der Button zeigt ein Menü an. {{experimental_inline}}

- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Button ein Kandidat für die Validierung von Einschränkungen ist. Er ist `false`, wenn Bedingungen die Einschränkungsvalidierung ausschließen, einschließlich: seine `type`-Eigenschaft ist `reset` oder `button`; er hat einen {{HTMLElement("datalist")}}-Vorfahr; oder die `disabled`-Eigenschaft ist auf `true` gesetzt.
- [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder sie ihre Einschränkungen erfüllt.
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Gültigkeitszustände darstellt, in denen sich dieser Button befindet.
- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
  - : Ein String, der den aktuellen Wert der Formularsteuerung des Buttons darstellt.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls gibt es `false` zurück.
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
  - : Führt die gleiche Aktion wie `checkValidity()` aus, meldet aber auch das Ergebnis dem Benutzer, wenn das `invalid`-Ereignis nicht abgebrochen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("button")}}
