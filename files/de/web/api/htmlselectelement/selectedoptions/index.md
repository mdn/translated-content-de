---
title: "HTMLSelectElement: selectedOptions Eigenschaft"
short-title: selectedOptions
slug: Web/API/HTMLSelectElement/selectedOptions
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

Die **schreibgeschützte** [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) Eigenschaft
**`selectedOptions`** enthält eine Liste der
{{HTMLElement("option")}}-Elemente, die innerhalb des {{HTMLElement("select")}}-Elements enthalten sind und derzeit ausgewählt sind. Die Liste der ausgewählten Optionen ist ein
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Objekt mit einem Eintrag pro aktuell ausgewählter Option.

Eine Option wird als ausgewählt betrachtet, wenn sie ein [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
Attribut hat.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die alle derzeit ausgewählten
[`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) auflistet, die entweder ein Kind des
[`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) oder eines [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement) innerhalb des
`<select>`-Elements sind.

Mit anderen Worten, jede Option, die innerhalb des `<select>`-Elements enthalten ist, kann
Teil der Ergebnisse sein, aber Optionsgruppen sind nicht in der Liste enthalten.

Wenn derzeit keine Optionen ausgewählt sind, ist die Sammlung leer und gibt eine
[`length`](/de/docs/Web/API/HTMLCollection/length) von 0 zurück.

## Beispiele

In diesem Beispiel wird ein {{HTMLElement("select")}}-Element mit einer Anzahl von Optionen verwendet,
um dem Benutzer das Bestellen verschiedener Lebensmittel zu ermöglichen.

### HTML

Der HTML-Code, der das Auswahlfeld und die {{HTMLElement("option")}}-Elemente erstellt,
die jeweils eine der Speiseoptionen darstellen, sieht folgendermaßen aus:

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
und es ist 7 Zeilen hoch. Beachten Sie auch den {{HTMLElement("button")}}, dessen Aufgabe es ist,
das Abrufen der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der ausgewählten Elemente mit der
`selected`-Eigenschaft auszulösen.

### JavaScript

Der JavaScript-Code, der den Ereignishandler für den Button einrichtet, sowie der
Ereignishandler selbst, sieht folgendermaßen aus:

```js
let orderButton = document.getElementById("order");
let itemList = document.getElementById("foods");
let outputBox = document.getElementById("output");

orderButton.addEventListener("click", () => {
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
});
```

Dieses Skript richtet einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignislistener für den "Jetzt bestellen"-Button ein. Beim
Klick ruft der Ereignishandler die Liste der ausgewählten Optionen mit
`selectedOptions` ab und durchläuft dann die Optionen in der Liste. Ein String wird
konstruiert, um die bestellten Artikel aufzulisten, mit einer Logik, die die Liste nach den korrekten englischen
Grammatikregeln (einschließlich eines [serial comma](https://en.wikipedia.org/wiki/Serial_comma)) erstellt.

### Ergebnis

Das resultierende Inhalt sieht in der Aktion so aus:

{{EmbedLiveSample("Examples", 600, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dropdown-Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls)
