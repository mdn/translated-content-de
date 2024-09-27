---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("HTML DOM")}}

Das **`HTMLButtonElement`** Interface bietet Eigenschaften und Methoden (die über das reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface hinausgehen, welches es auch durch Vererbung verfügbar hat) zur Manipulation von {{HTMLElement("button")}} Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternelement, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)
  - : Ein boolescher Wert, der anzeigt, ob die Steuerung deaktiviert ist, was bedeutet, dass sie keine Klicks akzeptiert.
- [`HTMLButtonElement.form`](/de/docs/Web/API/HTMLButtonElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular widerspiegelt, mit dem dieser Button verknüpft ist. Wenn der Button ein Nachkomme eines Formularelements ist, dann ist dieses Attribut ein Verweis auf das mit diesem Formular verbundene `HTMLFormElement`.
    Wenn der Button kein Nachkomme eines Formularelements ist, kann das Attribut ein Verweis auf ein beliebiges `HTMLFormElement` im selben Dokument sein, mit dem es verwandt ist, oder der Wert `null`, wenn kein passendes Element vorhanden ist.
- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
  - : Ein String, der die URI einer Ressource darstellt, die Informationen verarbeitet, die vom Button gesendet werden. Wenn angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut des {{HTMLElement("form")}} Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Ein String, der den Inhaltstyp widerspiegelt, der verwendet wird, um das Formular an den Server zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des {{HTMLElement("form")}} Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
  - : Ein String, der die HTTP-Methode widerspiegelt, die der Browser verwendet, um das Formular zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method) Attribut des {{HTMLElement("form")}} Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Ein boolescher Wert, der angibt, dass das Formular bei der Übermittlung nicht validiert werden soll. Wenn angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut des {{HTMLElement("form")}} Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
  - : Ein String, der einen Namen oder ein Schlüsselwort angibt, wo die Antwort nach dem Absenden des Formulars angezeigt wird. Wenn angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des {{HTMLElement("form")}} Elements, das dieses Element besitzt.
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList), die eine Liste von {{HTMLElement("label")}} Elementen darstellt, die Bezeichnungen für diesen Button sind.
- [`HTMLButtonElement.name`](/de/docs/Web/API/HTMLButtonElement/name)
  - : Ein String, der den Namen des Objekts angibt, wenn es mit einem Formular übermittelt wird. Wenn angegeben, darf es nicht der leere String sein.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction)
  - : Ruft die Aktion ab und setzt sie (`"hide"`, `"show"`, oder `"toggle"`), die auf einem Popover-Element ausgeführt werden soll, das von einem Steuerknopf kontrolliert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) HTML-Attributes wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement)
  - : Ruft das Popover-Element ab und setzt es, das über einen Button gesteuert wird. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget) HTML-Attributes.
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)

  - : Ein String, der das Verhalten des Buttons angibt. Dies ist ein enumeriertes Attribut mit den folgenden möglichen Werten:

    - `submit`: Der Button sendet das Formular ab. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist oder wenn es dynamisch auf einen leeren oder ungültigen Wert geändert wird.
    - `reset`: Der Button setzt das Formular zurück.
    - `button`: Der Button tut nichts.
    - `menu`: Der Button zeigt ein Menü an. {{experimental_inline}}

- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob der Button ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich: seine `type` Eigenschaft ist `reset` oder `button`; es hat einen {{HTMLElement("datalist")}} Vorfahren; oder die `disabled` Eigenschaft ist auf `true` gesetzt.
- [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`), oder wenn es seine Einschränkungen erfüllt.
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Gültigkeitszustände darstellt, in denen sich dieser Button befindet.
- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
  - : Ein String, der den aktuellen Wert der Formularelement-Steuerung des Buttons darstellt.

## Instanzmethoden

_Erbt Methoden von seinem Elternelement, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls wird `false` zurückgegeben.
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
  - : Führt die gleiche Aktion wie `checkValidity()` aus, berichtet jedoch auch das Ergebnis an den Benutzer, wenn das `invalid` Ereignis nicht abgebrochen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("button")}}
