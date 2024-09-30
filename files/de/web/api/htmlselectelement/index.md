---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef("HTML DOM")}}

Das **`HTMLSelectElement`** Interface repräsentiert ein {{HTMLElement("select")}} HTML Element. Diese Elemente teilen auch alle Eigenschaften und Methoden anderer HTML-Elemente über das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement), sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.disabled`](/de/docs/Web/API/HTMLSelectElement/disabled)
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/select#disabled) HTML-Attribut widerspiegelt und anzeigt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, akzeptiert es keine Klicks.
- [`HTMLSelectElement.form`](/de/docs/Web/API/HTMLSelectElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular referenziert, mit dem dieses Element assoziiert ist. Wenn das Element nicht mit einem {{HTMLElement("form")}} Element assoziiert ist, gibt es `null` zurück.
- [`HTMLSelectElement.labels`](/de/docs/Web/API/HTMLSelectElement/labels) {{ReadOnlyInline}}
  - : Ein [`NodeList`](/de/docs/Web/API/NodeList) von {{HTMLElement("label")}} Elementen, die mit dem Element verbunden sind.
- [`HTMLSelectElement.length`](/de/docs/Web/API/HTMLSelectElement/length)
  - : Ein `unsigned long`, der die Anzahl der {{HTMLElement("option")}}-Elemente in diesem `select`-Element darstellt.
- [`HTMLSelectElement.multiple`](/de/docs/Web/API/HTMLSelectElement/multiple)
  - : Ein boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Element/select#multiple) HTML-Attribut widerspiegelt und anzeigt, ob mehrere Elemente ausgewählt werden können.
- [`HTMLSelectElement.name`](/de/docs/Web/API/HTMLSelectElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/select#name) HTML-Attribut widerspiegelt und den Namen dieses Steuerelements enthält, der von Servern und DOM-Suchfunktionen verwendet wird.
- [`HTMLSelectElement.options`](/de/docs/Web/API/HTMLSelectElement/options) {{ReadOnlyInline}}
  - : Eine [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection), die die Menge der {{HTMLElement("option")}} ([`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)) Elemente, die von diesem Element enthalten sind, darstellt.
- [`HTMLSelectElement.required`](/de/docs/Web/API/HTMLSelectElement/required)
  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Element/select#required) HTML-Attribut widerspiegelt und anzeigt, ob der Benutzer verpflichtet ist, einen Wert auszuwählen, bevor er das Formular absendet.
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
  - : Ein `long`, der den Index des ersten ausgewählten {{HTMLElement("option")}}-Elements widerspiegelt. Der Wert `-1` zeigt an, dass kein Element ausgewählt ist.
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) {{ReadOnlyInline}}
  - : Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die die Menge der ausgewählten {{HTMLElement("option")}} Elemente darstellt.
- [`HTMLSelectElement.size`](/de/docs/Web/API/HTMLSelectElement/size)
  - : Ein `long`, der das [`size`](/de/docs/Web/HTML/Element/select#size) HTML-Attribut widerspiegelt und die Anzahl der sichtbaren Elemente im Steuerelement enthält. Der Standardwert ist 1, es sei denn, `multiple` ist `true`, in diesem Fall sind es 4.
- [`HTMLSelectElement.type`](/de/docs/Web/API/HTMLSelectElement/type) {{ReadOnlyInline}}
  - : Ein String, der den Typ des Formular-Steuerelements darstellt. Wenn `multiple` `true` ist, gibt es `"select-multiple"` zurück; andernfalls gibt es `"select-one"` zurück.
- [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht darstellt und die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist false), oder es seine Einschränkungen erfüllt.
- [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`](/de/docs/Web/API/ValidityState), der den Gültigkeitszustand widerspiegelt, in dem sich dieses Steuerelement befindet.
- [`HTMLSelectElement.value`](/de/docs/Web/API/HTMLSelectElement/value)
  - : Ein String, der den Wert des Formular-Steuerelements widerspiegelt. Gibt die `value`-Eigenschaft des ersten ausgewählten Optionselements zurück, falls vorhanden, andernfalls den leeren String.
- [`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das Steuerelement ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn irgendwelche Bedingungen die Einschränkungsvalidierung verhindern.

## Instanz-Methoden

_Dieses Interface erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement), sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add)
  - : Fügt ein Element zur Sammlung der `option` Elemente für dieses `select` Element hinzu.
- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
  - : Prüft, ob das Element irgendwelche Einschränkungen hat und ob es diese erfüllt. Wenn das Element seine Einschränkungen nicht erfüllt, löst der Browser ein abbrechbares [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element aus (und gibt `false` zurück).
- [`HTMLSelectElement.item()`](/de/docs/Web/API/HTMLSelectElement/item)
  - : Ruft einen Artikel aus der Optionen-Sammlung für dieses {{HTMLElement("select")}} Element ab. Sie können auch auf einen Artikel zugreifen, indem Sie den Index in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.namedItem()`](/de/docs/Web/API/HTMLSelectElement/namedItem)
  - : Ruft den Artikel in der Optionen-Sammlung mit dem angegebenen Namen ab. Der Name-String kann entweder der `id` oder das `name` Attribut eines Options-Knotens entsprechen. Sie können auch auf einen Artikel zugreifen, indem Sie den Namen in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.remove()`](/de/docs/Web/API/HTMLSelectElement/remove)
  - : Entfernt das Element am angegebenen Index aus der Optionen-Sammlung für dieses `select` Element.
- [`HTMLSelectElement.reportValidity()`](/de/docs/Web/API/HTMLSelectElement/reportValidity)
  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen auf dem Element, falls vorhanden. Wenn es Probleme gibt, löst es ein abbrechbares [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element aus und gibt `false` zurück; wenn keine Probleme vorliegen, gibt es `true` zurück.
- [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)
  - : Setzt die individuelle Validierungsnachricht für das Auswahl-Element auf die angegebene Nachricht. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ individuellen Validierungsfehler hat.
- [`showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)
  - : Zeigt den Options-Auswähler an.

## Ereignisse

_Dieses Interface erbt die Ereignisse von [`HTMLElement`](/de/docs/Web/API/HTMLElement), sowie von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen:

- [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer eine Option auswählt.
- [`input`](/de/docs/Web/API/Element/input_event) Ereignis
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Elements geändert wurde.

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

Eine bessere Möglichkeit, Änderungen an der Auswahl des Benutzers zu verfolgen, besteht darin, auf das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis zu achten, das auf dem `<select>` auftritt. Dies wird Ihnen mitteilen, wann sich der Wert ändert, und Sie können dann alles aktualisieren, was Sie benötigen. Siehe [das bereitgestellte Beispiel](/de/docs/Web/API/HTMLElement/change_event#select_element) in der Dokumentation für das `change`-Ereignis für Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, das dieses Interface implementiert.
