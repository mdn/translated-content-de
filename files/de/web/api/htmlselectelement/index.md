---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef("HTML DOM")}}

Die **`HTMLSelectElement`** Schnittstelle repräsentiert ein {{HTMLElement("select")}} HTML Element. Diese Elemente teilen auch alle Eigenschaften und Methoden anderer HTML-Elemente über die {{domxref("HTMLElement")}} Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt die Eigenschaften von {{domxref("HTMLElement")}}, sowie von {{domxref("Element")}} und {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.disabled")}}
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/select#disabled) HTML-Attribut widerspiegelt, welches anzeigt, ob das Steuerelement deaktiviert ist. Wenn es deaktiviert ist, akzeptiert es keine Klicks.
- {{domxref("HTMLSelectElement.form")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLFormElement")}}, das das Formular referenziert, mit dem dieses Element verknüpft ist. Wenn das Element nicht mit einem {{HTMLElement("form")}} verknüpft ist, gibt es `null` zurück.
- {{domxref("HTMLSelectElement.labels")}} {{ReadOnlyInline}}
  - : Eine {{domxref("NodeList")}} von {{HTMLElement("label")}} Elementen, die dem Element zugeordnet sind.
- {{domxref("HTMLSelectElement.length")}}
  - : Ein `unsigned long`. Die Anzahl der {{HTMLElement("option")}} Elemente in diesem `select` Element.
- {{domxref("HTMLSelectElement.multiple")}}
  - : Ein boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Element/select#multiple) HTML-Attribut widerspiegelt, welches angibt, ob mehrere Elemente ausgewählt werden können.
- {{domxref("HTMLSelectElement.name")}}
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/select#name) HTML-Attribut widerspiegelt und den Namen dieses Steuerelements enthält, der von Servern und DOM-Suchfunktionen verwendet wird.
- {{domxref("HTMLSelectElement.options")}} {{ReadOnlyInline}}
  - : Eine {{domxref("HTMLOptionsCollection")}} die die Menge der in diesem Element enthaltenen {{HTMLElement("option")}} ({{domxref("HTMLOptionElement")}}) Elemente repräsentiert.
- {{domxref("HTMLSelectElement.required")}}
  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Element/select#required) HTML-Attribut widerspiegelt, welches angibt, ob der Benutzer vor dem Absenden des Formulars einen Wert auswählen muss.
- {{domxref("HTMLSelectElement.selectedIndex")}}
  - : Ein `long`, der den Index des ersten ausgewählten {{HTMLElement("option")}} Elements widerspiegelt. Der Wert `-1` zeigt an, dass kein Element ausgewählt ist.
- {{domxref("HTMLSelectElement.selectedOptions")}} {{ReadOnlyInline}}
  - : Eine {{domxref("HTMLCollection")}} die die Menge der ausgewählten {{HTMLElement("option")}} Elemente repräsentiert.
- {{domxref("HTMLSelectElement.size")}}
  - : Ein `long`, der das [`size`](/de/docs/Web/HTML/Element/select#size) HTML-Attribut widerspiegelt, das die Anzahl der sichtbaren Elemente im Steuerelement enthält. Der Standardwert ist 1, es sei denn, `multiple` ist `true`, in diesem Fall ist es 4.
- {{domxref("HTMLSelectElement.type")}} {{ReadOnlyInline}}
  - : Ein String, der den Typ des Formularsteuerelements repräsentiert. Wenn `multiple` `true` ist, gibt es `"select-multiple"` zurück, andernfalls `"select-one"`.
- {{domxref("HTMLSelectElement.validationMessage")}} {{ReadOnlyInline}}
  - : Ein String, der eine lokalisierte Nachricht repräsentiert, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls solche bestehen). Dieser Attribut ist der leere String, wenn das Steuerelement kein Kandidat für die Validierungsbeschränkung ist (`willValidate` ist false), oder wenn es seine Einschränkungen erfüllt.
- {{domxref("HTMLSelectElement.validity")}} {{ReadOnlyInline}}
  - : Ein {{domxref("ValidityState")}}, der den Gültigkeitszustand widerspiegelt, in dem sich dieses Steuerelement befindet.
- {{domxref("HTMLSelectElement.value")}}
  - : Ein String, der den Wert des Formularsteuerelements widerspiegelt. Gibt die `value` Eigenschaft des ersten ausgewählten Optionselements zurück, wenn es eines gibt, andernfalls den leeren String.
- {{domxref("HTMLSelectElement.willValidate")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob der Button ein Kandidat für die Validierungsbeschränkung ist. Es ist `false`, wenn keine Bedingungen die Validierungsbeschränkung verhindern.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden von {{domxref("HTMLElement")}}, sowie von {{domxref("Element")}} und {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.add()")}}
  - : Fügt ein Element zur Sammlung der `option` Elemente für dieses `select` Element hinzu.
- {{domxref("HTMLSelectElement.checkValidity()")}}
  - : Überprüft, ob das Element irgendwelche Einschränkungen hat und ob es diese erfüllt. Wenn das Element seine Einschränkungen nicht erfüllt, löst der Browser ein stornierbares {{domxref("HTMLInputElement/invalid_event", "invalid")}} Ereignis am Element aus (und gibt `false` zurück).
- {{domxref("HTMLSelectElement.item()")}}
  - : Holt ein Element aus der Optionssammlung für dieses {{HTMLElement("select")}} Element. Sie können auch auf ein Element zugreifen, indem Sie den Index in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- {{domxref("HTMLSelectElement.namedItem()")}}
  - : Holt das Element in der Optionssammlung mit dem angegebenen Namen. Der Namensstring kann entweder der `id` oder dem `name` Attribut eines Optionsknotens entsprechen. Sie können auch auf ein Element zugreifen, indem Sie den Namen in eckigen Klammern oder Klammern angeben, ohne diese Methode explizit aufzurufen.
- {{domxref("HTMLSelectElement.remove()")}}
  - : Entfernt das Element am angegebenen Index aus der Optionssammlung für dieses `select` Element.
- {{domxref("HTMLSelectElement.reportValidity()")}}
  - : Diese Methode berichtet die Probleme mit den Einschränkungen auf dem Element, falls vorhanden, dem Benutzer. Wenn es Probleme gibt, löst es ein stornierbares {{domxref("HTMLInputElement/invalid_event", "invalid")}} Ereignis am Element aus und gibt `false` zurück; wenn keine Probleme vorhanden sind, gibt es `true` zurück.
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
  - : Setzt die benutzerdefinierte Validierungsnachricht für das Auswahlfeld auf die angegebene Nachricht. Verwenden Sie den leeren String, um anzuzeigen, dass das Element _keinen_ benutzerdefinierten Validierungsfehler hat.
- {{domxref("HTMLSelectElement.showPicker()", "showPicker()")}}
  - : Zeigt das Optionsauswahlelement an.

## Events

_Diese Schnittstelle erbt die Events von {{domxref("HTMLElement")}}, sowie von {{domxref("Element")}} und {{domxref("Node")}}._

Diese Events können Sie mit {{domxref("EventTarget/addEventListener", "addEventListener()")}} beachten oder indem Sie einen Event-Listener der `oneventname` Eigenschaft dieser Schnittstelle zuweisen:

- {{domxref("HTMLElement/change_event", "change")}} Event
  - : Wird gefeuert, wenn der Benutzer eine Option auswählt.
- {{domxref("Element/input_event", "input")}} Event
  - : Wird gefeuert, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Elements geändert wurde.

## Beispiel

### Informationen zur ausgewählten Option abrufen

```js
/* angenommen, wir haben folgendes HTML
<select id='s'>
    <option>First</option>
    <option selected>Second</option>
    <option>Third</option>
</select>
*/

const select = document.getElementById("s");

// gibt den Index der ausgewählten Option zurück
console.log(select.selectedIndex); // 1

// gibt den Wert der ausgewählten Option zurück
console.log(select.options[select.selectedIndex].value); // Second
```

Eine bessere Möglichkeit, Änderungen an der Auswahl des Benutzers zu verfolgen, besteht darin, das Auftreten des {{domxref("HTMLElement/change_event", "change")}} Ereignisses auf dem `<select>` zu beobachten. Dies wird Ihnen mitteilen, wenn sich der Wert ändert, und Sie können dann alles aktualisieren, was Sie benötigen. Siehe [das bereitgestellte Beispiel](/de/docs/Web/API/HTMLElement/change_event#select_element) in der Dokumentation für das `change`-Ereignis für Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, welches diese Schnittstelle implementiert.
