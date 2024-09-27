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
{{HTMLElement("option")}}-Elemente, die innerhalb des {{HTMLElement("select")}}-Elements
enthalten sind und derzeit ausgewählt sind. Die Liste der ausgewählten Optionen ist ein
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt mit einem Eintrag pro aktuell ausgewählter Option.

Eine Option wird als ausgewählt betrachtet, wenn sie ein [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
Attribut hat.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die jedes derzeit ausgewählte
[`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) auflistet, das entweder ein Kind des
[`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) oder eines [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement) innerhalb des
`<select>`-Elements ist.

Mit anderen Worten, jedes innerhalb des `<select>`-Elements enthaltene Optionselement kann
Teil der Ergebnisse sein, aber Optionsgruppen sind nicht in der Liste enthalten.

Wenn derzeit keine Optionen ausgewählt sind, ist die Sammlung leer und gibt eine
[`length`](/de/docs/Web/API/HTMLCollection/length) von 0 zurück.

## Beispiele

In diesem Beispiel wird ein {{HTMLElement("select")}}-Element mit einer Anzahl von Optionen verwendet,
um dem Benutzer die Auswahl von verschiedenen Lebensmitteln zu ermöglichen.

### HTML

Der HTML-Code, der das Auswahlfeld und die {{HTMLElement("option")}}-Elemente
für jede der Lebensmitteloptionen erstellt, sieht folgendermaßen aus:

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

Das `<select>`-Element ist so konfiguriert, dass es die Auswahl mehrerer Elemente zulässt,
und es ist 7 Zeilen hoch. Beachten Sie auch den {{HTMLElement("button")}}, dessen Aufgabe es ist,
das Abrufen der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der ausgewählten Elemente mit der
`selected`-Eigenschaft auszulösen.

### JavaScript

Der JavaScript-Code, der den Ereignishandler für den Button sowie den
Ereignishandler selbst einrichtet, sieht folgendermaßen aus:

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

Dieses Skript richtet einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener auf dem "Order Now"-Button ein. Wird
geklickt, ruft der Ereignishandler die Liste der ausgewählten Optionen mit
`selectedOptions` ab und iteriert dann über die Optionen in der Liste. Ein String wird
erstellt, um die bestellten Artikel aufzulisten, mit einer Logik, die die Liste gemäß den englischen
Grammatikregeln (einschließlich eines [seriellen Kommas](https://en.wikipedia.org/wiki/Serial_comma)) erstellt.

### Ergebnis

Das resultierende Layout sieht in Aktion so aus:

{{EmbedLiveSample("Examples", 600, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drop-down-Steuerelemente](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls)
