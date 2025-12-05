---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

Das **`HTMLButtonElement`**-Interface bietet Eigenschaften und Methoden (zusätzlich zu denen des regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces, die ihm durch Vererbung ebenfalls zur Verfügung stehen) zur Manipulation von {{HTMLElement("button")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
  - : Ein String-Wert, der die Aktion angibt, die an einem durch diesen Button gesteuerten Element ausgeführt werden soll.
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
  - : Eine Referenz auf ein vorhandenes [`Element`](/de/docs/Web/API/Element), das der Button kontrolliert.
- [`HTMLButtonElement.disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)
  - : Ein boolean-Wert, der anzeigt, ob das Steuerelement deaktiviert ist, was bedeutet, dass es keine Klicks akzeptiert.
- [`HTMLButtonElement.form`](/de/docs/Web/API/HTMLButtonElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular widerspiegelt, mit dem dieser Button verknüpft ist. Wenn der Button ein Nachkomme eines Formularelements ist, ist dieses Attribut eine Referenz auf das zugehörige `HTMLFormElement` des Formulars.
    Wenn der Button kein Nachkomme eines Formularelements ist, kann das Attribut eine Referenz auf ein `HTMLFormElement`-Element im gleichen Dokument sein, mit dem es in Beziehung steht, oder der `null`-Wert, wenn keines übereinstimmt.
- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
  - : Ein String, der die URI einer Ressource widerspiegelt, die Informationen verarbeitet, die vom Button übermittelt werden. Wenn angegeben, überschreibt dieses Attribut das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
  - : Ein String, der den Typ des Inhalts widerspiegelt, der zum Übermitteln des Formulars an den Server verwendet wird. Wenn angegeben, überschreibt dieses Attribut das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
  - : Ein String, der die HTTP-Methode widerspiegelt, die der Browser zur Übermittlung des Formulars verwendet. Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
  - : Ein boolean-Wert, der angibt, dass das Formular beim Absenden nicht validiert werden soll. Wenn angegeben, überschreibt dieses Attribut das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
  - : Ein String, der einen Namen oder ein Schlüsselwort widerspiegelt, welcher angibt, wo die Antwort angezeigt wird, die nach dem Absenden des Formulars empfangen wurde. Wenn angegeben, überschreibt dieses Attribut das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des {{HTMLElement("form")}}-Elements, das dieses Element besitzt.
- [`HTMLButtonElement.interestForElement`](/de/docs/Web/API/HTMLButtonElement/interestForElement) {{experimental_inline}}
  - : Ruft das Ziel-Element eines "interest invoker" ab oder setzt es in Fällen, in denen das zugehörige {{htmlelement("button")}}-Element als [Interest Invoker](/de/docs/Web/API/Popover_API/Using_interest_invokers#creating_an_interest_invoker) angegeben ist.
- [`HTMLButtonElement.labels`](/de/docs/Web/API/HTMLButtonElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList), die eine Liste von {{HTMLElement("label")}}-Elementen darstellt, die Labels für diesen Button sind.
- [`HTMLButtonElement.name`](/de/docs/Web/API/HTMLButtonElement/name)
  - : Ein String, der den Namen des Objekts beim Absenden mit einem Formular repräsentiert. Wenn angegeben, darf er nicht der leere String sein.
- [`HTMLButtonElement.popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction)
  - : Ruft die Aktion ab oder setzt sie, die (`"hide"`, `"show"` oder `"toggle"`) auf einem "popover"-Element durchgeführt werden soll, das von einem Steuerungsbutton gesteuert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)-HTML-Attributs wider.
- [`HTMLButtonElement.popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement)
  - : Ruft das "popover"-Element ab, das über einen Button gesteuert wird oder setzt es. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-HTML-Attributes.
- [`HTMLButtonElement.type`](/de/docs/Web/API/HTMLButtonElement/type)
  - : Ein String, der das Verhalten des Buttons angibt. Dies ist ein aufgezähltes Attribut mit den folgenden möglichen Werten:
    - `submit`: Der Button übermittelt das Formular. Dies ist der Standardwert, wenn das Attribut nicht angegeben ist oder wenn es dynamisch in einen leeren oder ungültigen Wert geändert wurde.
    - `reset`: Der Button setzt das Formular zurück.
    - `button`: Der Button führt keine Aktion aus.
    - `menu`: Der Button zeigt ein Menü an. {{experimental_inline}}

- [`HTMLButtonElement.willValidate`](/de/docs/Web/API/HTMLButtonElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolean-Wert, der angibt, ob der Button für die Einschränkungsvalidierung in Frage kommt. Es ist `false`, wenn irgendwelche Bedingungen ihn von der Einschränkungsvalidierung ausschließen, einschließlich: seine `type`-Eigenschaft ist `reset` oder `button`; er hat einen {{HTMLElement("datalist")}}-Vorfahren; oder die `disabled`-Eigenschaft ist auf `true` gesetzt.
- [`HTMLButtonElement.validationMessage`](/de/docs/Web/API/HTMLButtonElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der die lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`), oder wenn sie ihre Einschränkungen erfüllt.
- [`HTMLButtonElement.validity`](/de/docs/Web/API/HTMLButtonElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der die Gültigkeitszustände darstellt, in denen sich dieser Button befindet.
- [`HTMLButtonElement.value`](/de/docs/Web/API/HTMLButtonElement/value)
  - : Ein String, der den aktuellen Wert der Formularsteuerung des Buttons repräsentiert.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
  - : Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`.
- [`HTMLButtonElement.reportValidity()`](/de/docs/Web/API/HTMLButtonElement/reportValidity)
  - : Führt die gleiche Aktion wie `checkValidity()` aus, berichtet aber auch das Ergebnis an den Benutzer, wenn das `invalid`-Ereignis nicht abgebrochen wurde.
- [`HTMLButtonElement.setCustomValidity()`](/de/docs/Web/API/HTMLButtonElement/setCustomValidity)
  - : Setzt die benutzerdefinierte Gültigkeitsnachricht für das Element. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ benutzerdefinierten Gültigkeitsfehler aufweist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("button")}}
