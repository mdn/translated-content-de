---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLButtonElement`**-Interface stellt Eigenschaften und Methoden (zusätzlich zu den regulären, durch Vererbung verfügbaren [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstellen) zur Verfügung, um {{HTMLElement("button")}}-Elemente zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das Steuerelement deaktiviert ist, was bedeutet, dass es keine Klicks akzeptiert.
- [`HTMLButtonElement.form`](/de/docs/Web/API/HTMLButtonElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular widerspiegelt, mit dem dieser Button verbunden ist. Wenn der Button ein Nachfahre eines Formularelements ist, ist dieses Attribut ein Verweis auf das zugehörige `HTMLFormElement` dieses Formulars. Wenn der Button kein Nachfahre eines Formularelements ist, kann das Attribut ein Verweis auf ein beliebiges `HTMLFormElement`-Element im selben Dokument sein, mit dem es in Beziehung steht, oder der Wert `null`, wenn keine Übereinstimmung vorhanden ist.
- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
  - : Ein String, der die URI eines Ressource widerspiegelt, die Informationen verarbeitet, die durch den Button übermittelt werden. Wenn angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Ein String, der den Inhaltstyp widerspiegelt, der verwendet wird, um das Formular an den Server zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
  - : Ein String, der die HTTP-Methode widerspiegelt, die der Browser verwendet, um das Formular zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Ein boolescher Wert, der angibt, dass das Formular bei Übermittlung nicht validiert werden soll. Wenn angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
  - : Ein String, der einen Namen oder ein Schlüsselwort widerspiegelt, welches angibt, wo die Antwort angezeigt werden soll, die nach der Übermittlung des Formulars empfangen wird. Wenn angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList), die eine Liste von {{HTMLElement("label")}}-Elementen darstellt, die Labels für diesen Button sind.
- [`HTMLButtonElement.name`](/de/docs/Web/API/HTMLButtonElement/name)
  - : Ein String, der den Namen des Objekts repräsentiert, wenn es mit einem Formular übermittelt wird. Wenn angegeben, darf es nicht der leere String sein.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction)
  - : Ruft die Aktion ab und setzt sie fest (`"hide"`, `"show"` oder `"toggle"`), die auf ein Popover-Element angewendet wird, das durch einen Steuerungsknopf kontrolliert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-HTML-Attributs wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement)
  - : Ruft das Popover-Element ab und setzt es, sodass es über einen Button gesteuert wird. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-HTML-Attributs.
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)
  - : Ein String, der das Verhalten des Buttons angibt. Dies ist ein Enumerationsattribut mit den folgenden möglichen Werten:
    - `submit`: Der Button übermittelt das Formular. Dies ist der Standardwert, wenn das Attribut nicht angegeben wurde oder wenn es dynamisch auf einen leeren oder ungültigen Wert geändert wird.
    - `reset`: Der Button setzt das Formular zurück.
    - `button`: Der Button macht nichts.
    - `menu`: Der Button zeigt ein Menü an. {{experimental_inline}}
- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Button ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn irgendeine Bedingung die Einschränkungsvalidierung verhindert, einschließlich: seine `type`-Eigenschaft ist `reset` oder `button`; es hat einen {{HTMLElement("datalist")}}-Vorfahren; oder die Eigenschaft `disabled` ist auf `true` gesetzt.
- [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die lokalisierte Nachricht beschreibt, welche die Validierungseinschränkungen angibt, die das Bedienelement nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn das Bedienelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder es seine Einschränkungen erfüllt.
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), das die Gültigkeitszustände darstellt, in denen sich dieser Button befindet.
- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
  - : Ein String, der den aktuellen Formularsteuerungswert des Buttons darstellt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls wird `false` zurückgegeben.
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
  - : Führt dieselbe Aktion wie `checkValidity()` aus, meldet jedoch auch das Ergebnis dem Benutzer, wenn das `invalid`-Ereignis nicht abgebrochen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("button")}}
