---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{APIRef("HTML DOM")}}

Die **`HTMLSelectElement`** Schnittstelle repräsentiert ein {{HTMLElement("select")}} HTML-Element. Diese Elemente teilen auch alle Eigenschaften und Methoden anderer HTML-Elemente über die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement) sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.autocomplete`](/de/docs/Web/API/HTMLSelectElement/autocomplete)
  - : Ein Zeichenfolgenwert, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/select#autocomplete) widerspiegelt und angibt, ob der Wert des Steuerelements vom Browser automatisch vervollständigt werden kann.
- [`HTMLSelectElement.disabled`](/de/docs/Web/API/HTMLSelectElement/disabled)
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/select#disabled) HTML-Attribut widerspiegelt, das angibt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, akzeptiert es keine Klicks.
- [`HTMLSelectElement.form`](/de/docs/Web/API/HTMLSelectElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular referenziert, mit dem dieses Element verbunden ist. Wenn das Element nicht mit einem {{HTMLElement("form")}} Element verbunden ist, gibt es `null` zurück.
- [`HTMLSelectElement.labels`](/de/docs/Web/API/HTMLSelectElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}} Elementen, die mit dem Element assoziiert sind.
- [`HTMLSelectElement.length`](/de/docs/Web/API/HTMLSelectElement/length)
  - : Eine `unsigned long` Angabe der Anzahl der {{HTMLElement("option")}} Elemente in diesem `select` Element.
- [`HTMLSelectElement.multiple`](/de/docs/Web/API/HTMLSelectElement/multiple)
  - : Ein boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) HTML-Attribut widerspiegelt, das angibt, ob mehrere Elemente ausgewählt werden können.
- [`HTMLSelectElement.name`](/de/docs/Web/API/HTMLSelectElement/name)
  - : Eine Zeichenfolge, die das [`name`](/de/docs/Web/HTML/Reference/Elements/select#name) HTML-Attribut widerspiegelt und den Namen dieses Steuerelements enthält, der von Servern und DOM-Suchfunktionen verwendet wird.
- [`HTMLSelectElement.options`](/de/docs/Web/API/HTMLSelectElement/options) {{ReadOnlyInline}}
  - : Eine [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection), die die Menge der {{HTMLElement("option")}} ([`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)) Elemente repräsentiert, die dieses Element enthält.
- [`HTMLSelectElement.required`](/de/docs/Web/API/HTMLSelectElement/required)
  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Reference/Elements/select#required) HTML-Attribut widerspiegelt, das angibt, ob der Benutzer vor dem Absenden des Formulars einen Wert auswählen muss.
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
  - : Ein `long`, der den Index des ersten ausgewählten {{HTMLElement("option")}} Elements widerspiegelt. Der Wert `-1` gibt an, dass kein Element ausgewählt ist.
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) {{ReadOnlyInline}}
  - : Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die die Menge der {{HTMLElement("option")}} Elemente repräsentiert, die ausgewählt sind.
- [`HTMLSelectElement.size`](/de/docs/Web/API/HTMLSelectElement/size)
  - : Ein `long`, der das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) HTML-Attribut widerspiegelt und die Anzahl der sichtbaren Elemente im Steuerelement enthält. Der Standardwert ist 1, es sei denn, `multiple` ist `true`, in diesem Fall ist es 4.
- [`HTMLSelectElement.type`](/de/docs/Web/API/HTMLSelectElement/type) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Typ des Formularsteuerelements repräsentiert. Wenn `multiple` `true` ist, gibt es `"select-multiple"` zurück; andernfalls `"select-one"`.
- [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine lokalisierte Nachricht darstellt, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist (`willValidate` ist false) oder es seine Einschränkungen erfüllt.
- [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der den Gültigkeitsstatus wiedergibt, in dem sich dieses Steuerelement befindet.
- [`HTMLSelectElement.value`](/de/docs/Web/API/HTMLSelectElement/value)
  - : Eine Zeichenfolge, die den Wert des Formularsteuerelements widerspiegelt. Gibt die `value` Eigenschaft des ersten ausgewählten Options-Elements zurück, falls vorhanden, ansonsten die leere Zeichenfolge.
- [`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Button ein Kandidat für die Constraint-Validierung ist. Es ist `false`, wenn Bedingungen es von der Constraint-Validierung ausschließen.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement) sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add)
  - : Fügt ein Element zur Sammlung der `option` Elemente für dieses `select` Element hinzu.
- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
  - : Überprüft, ob das Element irgendwelche Einschränkungen hat und ob es diese erfüllt. Wenn das Element seine Einschränkungen nicht erfüllt, löst der Browser ein abbruchfähiges [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis an dem Element aus (und gibt `false` zurück).
- [`HTMLSelectElement.item()`](/de/docs/Web/API/HTMLSelectElement/item)
  - : Ruft ein Element aus der Optionssammlung für dieses {{HTMLElement("select")}} Element ab. Sie können auch auf ein Element zugreifen, indem Sie den Index in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.namedItem()`](/de/docs/Web/API/HTMLSelectElement/namedItem)
  - : Ruft das Element in der Optionssammlung mit dem angegebenen Namen ab. Der Namensstring kann entweder der `id` oder dem `name` Attribut eines Optionsknotens entsprechen. Sie können auch auf ein Element zugreifen, indem Sie den Namen in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.remove()`](/de/docs/Web/API/HTMLSelectElement/remove)
  - : Entfernt das Element an dem angegebenen Index aus der Optionssammlung für dieses `select` Element.
- [`HTMLSelectElement.reportValidity()`](/de/docs/Web/API/HTMLSelectElement/reportValidity)
  - : Diese Methode berichtet dem Benutzer über Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, löst sie ein abbruchfähiges [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis an dem Element aus und gibt `false` zurück; wenn es keine Probleme gibt, gibt sie `true` zurück.
- [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)
  - : Setzt die benutzerdefinierte Fehlermeldung für das Auswahl-Element auf die angegebene Nachricht. Verwenden Sie den leeren String, um anzugeben, dass das Element _keinen_ benutzerdefinierten Validierungsfehler hat.
- [`showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)
  - : Zeigt den Optionsauswahlpicker.

## Ereignisse

_Diese Schnittstelle erbt die Ereignisse von [`HTMLElement`](/de/docs/Web/API/HTMLElement) sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener für die `oneventname` Eigenschaft dieser Schnittstelle zuweisen:

- [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer eine Option auswählt.
- [`input`](/de/docs/Web/API/Element/input_event) Ereignis
  - : Wird ausgelöst, wenn sich der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Elements geändert hat.

## Beispiel

### Informationen über die ausgewählte Option abrufen

```js
/* assuming we have the following HTML
<select id='s'>
    <option>First</option>
    <option selected>Second</option>
    <option>Third</option>
</select>
*/

const select = document.getElementById("s");

// return the index of the selected option
console.log(select.selectedIndex); // 1

// return the value of the selected option
console.log(select.options[select.selectedIndex].value); // Second
```

Eine bessere Möglichkeit, Änderungen an der Auswahl des Benutzers zu verfolgen, besteht darin, auf das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis am `<select>` zu achten. Das wird Ihnen mitteilen, wann sich der Wert ändert, und Sie können dann alles Notwendige aktualisieren. Siehe [das bereitgestellte Beispiel](/de/docs/Web/API/HTMLElement/change_event#select_element) in der Dokumentation für das `change` Ereignis für weitere Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, das diese Schnittstelle implementiert.
