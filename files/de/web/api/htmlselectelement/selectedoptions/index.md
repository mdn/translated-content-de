---
title: "HTMLSelectElement: selectedOptions-Eigenschaft"
short-title: selectedOptions
slug: Web/API/HTMLSelectElement/selectedOptions
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("HTML DOM")}}

Die **schreibgeschützte** [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Eigenschaft
**`selectedOptions`** enthält eine Liste der
{{HTMLElement("option")}}-Elemente, die innerhalb des {{HTMLElement("select")}}
Elements enthalten sind und derzeit ausgewählt sind. Die Liste der ausgewählten Optionen ist ein
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt mit einem Eintrag pro aktuell ausgewählter Option.

Eine Option wird als ausgewählt betrachtet, wenn sie ein [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
Attribut besitzt.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die jedes derzeit ausgewählte
[`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) auflistet, das entweder ein Kind des
[`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) ist oder eines [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement) innerhalb des
`<select>` Elements ist.

Mit anderen Worten, jede Option, die innerhalb des `<select>` Elements enthalten ist, kann
Teil der Ergebnisse sein, aber Optionsgruppen sind in der Liste nicht enthalten.

Wenn momentan keine Optionen ausgewählt sind, ist die Sammlung leer und gibt eine
[`length`](/de/docs/Web/API/HTMLCollection/length) von 0 zurück.

## Beispiele

In diesem Beispiel wird ein {{HTMLElement("select")}}-Element mit mehreren Optionen verwendet,
um es dem Benutzer zu ermöglichen, verschiedene Lebensmittel zu bestellen.

### HTML

Das HTML, das das Auswahlfeld und die {{HTMLElement("option")}}-Elemente erstellt,
die jede der Essensauswahlmöglichkeiten darstellen, sieht so aus:

```html
<label for="foods">What do you want to eat?</label><br />
<select id="foods" name="foods" size="7" multiple>
  <option value="1">Burrito</option>
  <option value="2">Cheeseburger</option>
  <option value="3">Double Bacon Burger Supreme</option>
  <option value="4">Pepperoni Pizza</option>
  <option value="5">Taco</option>
</select>
<br />
<button name="order" id="order">Order Now</button>
<p id="output"></p>
```

Das `<select>`-Element ist so eingestellt, dass mehrere Elemente ausgewählt werden können,
und es ist 7 Zeilen hoch. Beachten Sie auch das {{HTMLElement("button")}}, dessen Rolle es ist,
das Abrufen der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der ausgewählten Elemente mittels der
`selected`-Eigenschaft auszulösen.

### JavaScript

Der JavaScript-Code, der den Ereignishandler für die Schaltfläche sowie den
Ereignishandler selbst festlegt, sieht so aus:

```js
let orderButton = document.getElementById("order");
let itemList = document.getElementById("foods");
let outputBox = document.getElementById("output");

orderButton.addEventListener(
  "click",
  () => {
    let collection = itemList.selectedOptions;
    let output = "";

    for (let i = 0; i < collection.length; i++) {
      if (output === "") {
        output = "Your order for the following items has been placed: ";
      }
      output += collection[i].label;

      if (i === collection.length - 2 && collection.length < 3) {
        output += " and ";
      } else if (i < collection.length - 2) {
        output += ", ";
      } else if (i === collection.length - 2) {
        output += ", and ";
      }
    }

    if (output === "") {
      output = "You didn't order anything!";
    }

    outputBox.textContent = output;
  },
  false,
);
```

Dieses Skript richtet einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener auf der Schaltfläche "Jetzt bestellen" ein. Wenn
geklickt, ruft der Ereignishandler die Liste der ausgewählten Optionen mit
`selectedOptions` ab und durchläuft dann die Optionen in der Liste. Es wird ein String
konstruiert, um die bestellten Artikel aufzulisten, mit einer Logik, die die Liste unter Verwendung korrekter englischer
Grammatikregeln erstellt (einschließlich eines [seriellen Kommas](https://en.wikipedia.org/wiki/Serial_comma)).

### Ergebnis

Der resultierende Inhalt sieht in Aktion so aus:

{{EmbedLiveSample("Examples", 600, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drop-down controls](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls)
