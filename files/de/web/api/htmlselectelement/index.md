---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLSelectElement`** Interface repräsentiert ein {{HTMLElement("select")}} HTML-Element. Diese Elemente teilen auch alle Eigenschaften und Methoden anderer HTML-Elemente über das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement), sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.disabled`](/de/docs/Web/API/HTMLSelectElement/disabled)
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/select#disabled) HTML-Attribut widerspiegelt und anzeigt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, akzeptiert es keine Klicks.
- [`HTMLSelectElement.form`](/de/docs/Web/API/HTMLSelectElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular referenziert, mit dem dieses Element assoziiert ist. Wenn das Element nicht mit einem {{HTMLElement("form")}}-Element assoziiert ist, dann gibt es `null` zurück.
- [`HTMLSelectElement.labels`](/de/docs/Web/API/HTMLSelectElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}} Elementen, die mit dem Element verbunden sind.
- [`HTMLSelectElement.length`](/de/docs/Web/API/HTMLSelectElement/length)
  - : Ein `unsigned long` Die Anzahl der {{HTMLElement("option")}} Elemente in diesem `select`-Element.
- [`HTMLSelectElement.multiple`](/de/docs/Web/API/HTMLSelectElement/multiple)
  - : Ein boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/select#multiple) HTML-Attribut widerspiegelt und anzeigt, ob mehrere Elemente ausgewählt werden können.
- [`HTMLSelectElement.name`](/de/docs/Web/API/HTMLSelectElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/select#name) HTML-Attribut wiedergibt, das den Namen dieses Steuerelements enthält, der von Servern und DOM-Suchfunktionen verwendet wird.
- [`HTMLSelectElement.options`](/de/docs/Web/API/HTMLSelectElement/options) {{ReadOnlyInline}}
  - : Eine [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection), die die Menge der {{HTMLElement("option")}} ([`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)) Elemente repräsentiert, die von diesem Element enthalten werden.
- [`HTMLSelectElement.required`](/de/docs/Web/API/HTMLSelectElement/required)
  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Reference/Elements/select#required) HTML-Attribut widerspiegelt und anzeigt, ob der Benutzer einen Wert vor dem Senden des Formulars auswählen muss.
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
  - : Ein `long`, der den Index des ersten ausgewählten {{HTMLElement("option")}} Elements widerspiegelt. Der Wert `-1` zeigt an, dass kein Element ausgewählt ist.
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) {{ReadOnlyInline}}
  - : Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die die Menge der {{HTMLElement("option")}} Elemente repräsentiert, die ausgewählt sind.
- [`HTMLSelectElement.size`](/de/docs/Web/API/HTMLSelectElement/size)
  - : Ein `long`, der das [`size`](/de/docs/Web/HTML/Reference/Elements/select#size) HTML-Attribut widerspiegelt, das die Anzahl der sichtbaren Elemente im Steuerelement enthält. Der Standardwert ist 1, es sei denn, `multiple` ist `true`, in diesem Fall ist er 4.
- [`HTMLSelectElement.type`](/de/docs/Web/API/HTMLSelectElement/type) {{ReadOnlyInline}}
  - : Ein String, der den Typ des Formularsteuerelements repräsentiert. Wenn `multiple` `true` ist, wird `"select-multiple"` zurückgegeben; ansonsten wird `"select-one"` zurückgegeben.
- [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht repräsentiert, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist false) oder wenn es seine Einschränkungen erfüllt.
- [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der den Gültigkeitszustand widerspiegelt, in dem sich dieses Steuerelement befindet.
- [`HTMLSelectElement.value`](/de/docs/Web/API/HTMLSelectElement/value)
  - : Ein String, der den Wert des Formularsteuerelements widerspiegelt. Gibt die `value`-Eigenschaft des ersten ausgewählten Options-Elements zurück, wenn eines vorhanden ist, ansonsten den leeren String.
- [`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Schaltfläche ein Kandidat für die Beschränkungsvalidierung ist. Es ist `false`, wenn irgendwelche Bedingungen es von der Beschränkungsvalidierung ausschließen.

## Instanz-Methoden

_Dieses Interface erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement), sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add)
  - : Fügt ein Element zur Sammlung der `option`-Elemente für dieses `select`-Element hinzu.
- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
  - : Überprüft, ob das Element irgendwelche Einschränkungen hat und ob es diese erfüllt. Wenn das Element seine Beschränkungen nicht erfüllt, löst der Browser ein kündbares [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus (und gibt `false` zurück).
- [`HTMLSelectElement.item()`](/de/docs/Web/API/HTMLSelectElement/item)
  - : Ruft ein Element aus der Optionssammlung für dieses {{HTMLElement("select")}}-Element ab. Sie können auch ein Element abrufen, indem Sie den Index in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.namedItem()`](/de/docs/Web/API/HTMLSelectElement/namedItem)
  - : Ruft das Element in der Optionssammlung mit dem angegebenen Namen ab. Der Namensstring kann entweder mit dem `id`- oder dem `name`-Attribut eines Optionsknotens übereinstimmen. Sie können auch ein Element abrufen, indem Sie den Namen in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.remove()`](/de/docs/Web/API/HTMLSelectElement/remove)
  - : Entfernt das Element an dem angegebenen Index aus der Optionssammlung für dieses `select`-Element.
- [`HTMLSelectElement.reportValidity()`](/de/docs/Web/API/HTMLSelectElement/reportValidity)
  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen für das Element, falls vorhanden. Wenn es Probleme gibt, löst sie ein kündbares [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und gibt `false` zurück; wenn es keine Probleme gibt, gibt sie `true` zurück.
- [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)
  - : Setzt die benutzerdefinierte Fehlermeldung für das Auswahl-Element auf die angegebene Nachricht. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ benutzerdefinierten Fehler hat.
- [`showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)
  - : Zeigt den Auswahl-Picker an.

## Ereignisse

_Dieses Interface erbt die Ereignisse von [`HTMLElement`](/de/docs/Web/API/HTMLElement), sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen:

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

Eine bessere Möglichkeit, Änderungen an der Auswahl des Benutzers zu verfolgen, besteht darin, auf das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis des `<select>` zu achten. Dies wird Ihnen mitteilen, wann sich der Wert ändert, und Sie können dann alles anpassen, was Sie benötigen. Siehe [das bereitgestellte Beispiel](/de/docs/Web/API/HTMLElement/change_event#select_element) in der Dokumentation für das `change`-Ereignis für Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, das dieses Interface implementiert.
