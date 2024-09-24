---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("HTML DOM")}}

Die **`HTMLButtonElement`**-Schnittstelle bietet Eigenschaften und Methoden (zusätzlich zu der regulären {{domxref("HTMLElement")}}-Schnittstelle, die sie ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation von {{HTMLElement("button")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLButtonElement.disabled")}}
  - : Ein boolescher Wert, der angibt, ob die Steuerung deaktiviert ist, was bedeutet, dass sie keine Klicks akzeptiert.
- {{domxref("HTMLButtonElement.form")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLFormElement")}}, das das Formular widerspiegelt, mit dem dieser Button verknüpft ist. Wenn der Button ein Nachkomme eines Formular-Elements ist, ist dieses Attribut eine Referenz zu dem zugehörigen `HTMLFormElement` dieses Formulars.
    Wenn der Button kein Nachkomme eines Formular-Elements ist, kann das Attribut eine Referenz zu jedem `HTMLFormElement`-Element im selben Dokument sein, mit dem es in Beziehung steht, oder den Wert `null` haben, wenn keines übereinstimmt.
- {{domxref("HTMLButtonElement.formAction")}}
  - : Ein String, der die URI einer Ressource widerspiegelt, die die vom Button übermittelten Informationen verarbeitet. Wenn angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- {{domxref("HTMLButtonElement.formEnctype")}}
  - : Ein String, der den Inhaltstyp widerspiegelt, der verwendet wird, um das Formular an den Server zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- {{domxref("HTMLButtonElement.formMethod")}}
  - : Ein String, der die HTTP-Methode widerspiegelt, die der Browser verwendet, um das Formular zu übermitteln. Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- {{domxref("HTMLButtonElement.formNoValidate")}}
  - : Ein boolescher Wert, der anzeigt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- {{domxref("HTMLButtonElement.formTarget")}}
  - : Ein String, der einen Namen oder ein Schlüsselwort widerspiegelt, das angibt, wo die Antwort angezeigt werden soll, die nach Übermittlung des Formulars empfangen wird. Wenn angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- {{domxref("HTMLButtonElement.labels")}} {{ReadOnlyInline}}
  - : Eine {{domxref("NodeList")}}, die eine Liste von {{HTMLElement("label")}}-Elementen darstellt, die Labels für diesen Button sind.
- {{domxref("HTMLButtonElement.name")}}
  - : Ein String, der den Namen des Objekts darstellt, wenn es mit einem Formular übermittelt wird. Wenn angegeben, darf es nicht der leere String sein.
- {{domxref("HTMLButtonElement.popoverTargetAction")}}
  - : Ruft die Aktion ab und setzt sie, die auf ein Popover-Element ausgeführt werden soll, das von einem Steuerungsknopf gesteuert wird (`"hide"`, `"show"` oder `"toggle"`). Es spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction) wider.
- {{domxref("HTMLButtonElement.popoverTargetElement")}}
  - : Ruft das Popover-Element ab und setzt es, um es über einen Button zu steuern. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget).
- {{domxref("HTMLButtonElement.type")}}

  - : Ein String, der das Verhalten des Buttons angibt. Dies ist ein aufgezähltes Attribut mit den folgenden möglichen Werten:

    - `submit`: Der Button übermittelt das Formular. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist oder wenn es dynamisch auf einen leeren oder ungültigen Wert geändert wird.
    - `reset`: Der Button setzt das Formular zurück.
    - `button`: Der Button macht nichts.
    - `menu`: Der Button zeigt ein Menü an. {{experimental_inline}}

- {{domxref("HTMLButtonElement.willValidate")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Button ein Kandidat für die Einschränkungsvalidierung ist. Er ist `false`, wenn Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich: seine `type`-Eigenschaft ist `reset` oder `button`; es hat einen {{HTMLElement("datalist")}}-Vorfahren; oder die `disabled`-Eigenschaft ist auf `true` gesetzt.
- {{domxref("HTMLButtonElement.validationMessage")}} {{ReadOnlyInline}}
  - : Ein String, der die lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder sie ihre Einschränkungen erfüllt.
- {{domxref("HTMLButtonElement.validity")}} {{ReadOnlyInline}}
  - : Ein {{domxref("ValidityState")}}, der die Gültigkeitszustände darstellt, in denen sich dieser Button befindet.
- {{domxref("HTMLButtonElement.value")}}
  - : Ein String, der den aktuellen Formularsteuerungswert des Buttons darstellt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLButtonElement.checkValidity()")}}
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme hat; andernfalls `false`.
- {{domxref("HTMLButtonElement.reportValidity()")}}
  - : Führt dieselbe Aktion wie `checkValidity()` aus, berichtet jedoch auch das Ergebnis dem Benutzer, wenn das `invalid`-Ereignis nicht abgesagt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("button")}}
