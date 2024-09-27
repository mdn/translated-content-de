---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef("HTML DOM")}}

Die **`HTMLSelectElement`**-Schnittstelle repräsentiert ein {{HTMLElement("select")}} HTML-Element. Diese Elemente teilen auch alle Eigenschaften und Methoden anderer HTML-Elemente über die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt die Eigenschaften von [`HTMLElement`](/de/docs/Web/API/HTMLElement), und von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.disabled`](/de/docs/Web/API/HTMLSelectElement/disabled)
  - : Ein Boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/select#disabled)-HTML-Attribut widerspiegelt und angibt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, akzeptiert es keine Klicks.
- [`HTMLSelectElement.form`](/de/docs/Web/API/HTMLSelectElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`], das das Formular referenziert, mit dem dieses Element verbunden ist. Wenn das Element nicht mit einem {{HTMLElement("form")}}-Element verknüpft ist, gibt es `null` zurück.
- [`HTMLSelectElement.labels`](/de/docs/Web/API/HTMLSelectElement/labels) {{ReadOnlyInline}}
  - : Eine [`NodeList`] von {{HTMLElement("label")}}-Elementen, die mit dem Element verbunden sind.
- [`HTMLSelectElement.length`](/de/docs/Web/API/HTMLSelectElement/length)
  - : Ein `unsigned long`, das die Anzahl der {{HTMLElement("option")}}-Elemente in diesem `select`-Element angibt.
- [`HTMLSelectElement.multiple`](/de/docs/Web/API/HTMLSelectElement/multiple)
  - : Ein Boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Element/select#multiple)-HTML-Attribut widerspiegelt und angibt, ob mehrere Elemente ausgewählt werden können.
- [`HTMLSelectElement.name`](/de/docs/Web/API/HTMLSelectElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/select#name)-HTML-Attribut widerspiegelt und den Namen dieses Steuerelements enthält, der von Servern und DOM-Suchfunktionen verwendet wird.
- [`HTMLSelectElement.options`](/de/docs/Web/API/HTMLSelectElement/options) {{ReadOnlyInline}}
  - : Eine [`HTMLOptionsCollection`], die die Menge von {{HTMLElement("option")}} ([`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement))-Elementen darstellt, die dieses Element enthält.
- [`HTMLSelectElement.required`](/de/docs/Web/API/HTMLSelectElement/required)
  - : Ein Boolescher Wert, der das [`required`](/de/docs/Web/HTML/Element/select#required)-HTML-Attribut widerspiegelt und angibt, ob der Benutzer einen Wert auswählen muss, bevor das Formular übermittelt wird.
- [`HTMLSelectElement.selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)
  - : Ein `long`, der den Index des ersten ausgewählten {{HTMLElement("option")}}-Elements widerspiegelt. Der Wert `-1` gibt an, dass kein Element ausgewählt ist.
- [`HTMLSelectElement.selectedOptions`](/de/docs/Web/API/HTMLSelectElement/selectedOptions) {{ReadOnlyInline}}
  - : Eine [`HTMLCollection`], die die Menge der ausgewählten {{HTMLElement("option")}}-Elemente darstellt.
- [`HTMLSelectElement.size`](/de/docs/Web/API/HTMLSelectElement/size)
  - : Ein `long`, der das [`size`](/de/docs/Web/HTML/Element/select#size)-HTML-Attribut widerspiegelt und die Anzahl der sichtbaren Elemente im Steuerelement angibt. Der Standardwert ist 1, es sei denn, `multiple` ist `true`, in diesem Fall beträgt er 4.
- [`HTMLSelectElement.type`](/de/docs/Web/API/HTMLSelectElement/type) {{ReadOnlyInline}}
  - : Ein String, der den Typ des Formularsteuerelements darstellt. Wenn `multiple` `true` ist, gibt es `"select-multiple"` zurück; andernfalls `"select-one"`.
- [`HTMLSelectElement.validationMessage`](/de/docs/Web/API/HTMLSelectElement/validationMessage) {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dieses Attribut ist der leere String, wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist false) oder seine Einschränkungen erfüllt.
- [`HTMLSelectElement.validity`](/de/docs/Web/API/HTMLSelectElement/validity) {{ReadOnlyInline}}
  - : Ein [`ValidityState`], der den Gültigkeitszustand widerspiegelt, in dem sich dieses Steuerelement befindet.
- [`HTMLSelectElement.value`](/de/docs/Web/API/HTMLSelectElement/value)
  - : Ein String, der den Wert des Formularsteuerelements widerspiegelt. Gibt die `value`-Eigenschaft des ersten ausgewählten Options-Elements zurück, falls vorhanden, ansonsten den leeren String.
- [`HTMLSelectElement.willValidate`](/de/docs/Web/API/HTMLSelectElement/willValidate) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob das Steuerelement für die Beschränkungsvalidierung in Frage kommt. Es ist `false`, wenn Bedingungen die Beschränkungsvalidierung verhindern.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement), und von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

- [`HTMLSelectElement.add()`](/de/docs/Web/API/HTMLSelectElement/add)
  - : Fügt der Sammlung der `option`-Elemente dieses `select`-Elements ein Element hinzu.
- [`HTMLSelectElement.checkValidity()`](/de/docs/Web/API/HTMLSelectElement/checkValidity)
  - : Überprüft, ob das Element Einschränkungen aufweist und ob es diese erfüllt. Wenn das Element seinen Einschränkungen nicht genügt, löst der Browser ein abbrechbares [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus (und gibt `false` zurück).
- [`HTMLSelectElement.item()`](/de/docs/Web/API/HTMLSelectElement/item)
  - : Ruft ein Element aus der Optionssammlung für dieses {{HTMLElement("select")}}-Element ab. Sie können auch ein Element abrufen, indem Sie den Index in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.namedItem()`](/de/docs/Web/API/HTMLSelectElement/namedItem)
  - : Ruft das Element in der Optionssammlung mit dem angegebenen Namen ab. Der Namens-String kann entweder mit dem `id`- oder dem `name`-Attribut eines Optionsknotens übereinstimmen. Sie können auch ein Element abrufen, indem Sie den Namen in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- [`HTMLSelectElement.remove()`](/de/docs/Web/API/HTMLSelectElement/remove)
  - : Entfernt das Element am angegebenen Index aus der Optionssammlung für dieses `select`-Element.
- [`HTMLSelectElement.reportValidity()`](/de/docs/Web/API/HTMLSelectElement/reportValidity)
  - : Diese Methode berichtet dem Benutzer über Probleme mit den Beschränkungen auf dem Element, falls vorhanden. Wenn es Probleme gibt, löst es ein abbrechbares [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus und gibt `false` zurück; wenn keine Probleme vorliegen, gibt es `true` zurück.
- [`HTMLSelectElement.setCustomValidity()`](/de/docs/Web/API/HTMLSelectElement/setCustomValidity)
  - : Setzt die benutzerdefinierte Fehlermeldung für das Auswahl-Element auf die angegebene Nachricht. Verwenden Sie den leeren String, um anzugeben, dass das Element _keinen_ benutzerdefinierten Gültigkeitsfehler hat.
- [`showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)
  - : Zeigt den Optionswahlschalter an.

## Ereignisse

_Diese Schnittstelle erbt die Ereignisse von [`HTMLElement`](/de/docs/Web/API/HTMLElement), und von [`Element`](/de/docs/Web/API/Element) und [`Node`](/de/docs/Web/API/Node)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen:

- [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis
  - : Wird ausgelöst, wenn der Benutzer eine Option auswählt.
- [`input`](/de/docs/Web/API/Element/input_event)-Ereignis
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements geändert wurde.

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

Eine bessere Möglichkeit, Änderungen an der Auswahl des Benutzers zu verfolgen, besteht darin, auf das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis auf dem `<select>` zu achten. Dies informiert Sie, wenn sich der Wert ändert, sodass Sie alles aktualisieren können, was Sie benötigen. Weitere Informationen finden Sie in [dem bereitgestellten Beispiel](/de/docs/Web/API/HTMLElement/change_event#select_element) in der Dokumentation für das `change`-Ereignis.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, das diese Schnittstelle implementiert.
