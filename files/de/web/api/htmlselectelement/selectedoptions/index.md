---
title: "HTMLSelectElement: selectedOptions Eigenschaft"
short-title: selectedOptions
slug: Web/API/HTMLSelectElement/selectedOptions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **schreibgeschützte** [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) Eigenschaft **`selectedOptions`** enthält eine Liste der {{HTMLElement("option")}} Elemente, die innerhalb des {{HTMLElement("select")}} Elements enthalten sind und derzeit ausgewählt sind. Die Liste der ausgewählten Optionen ist ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) Objekt mit einem Eintrag pro derzeit ausgewählter Option.

Eine Option wird als ausgewählt betrachtet, wenn sie ein [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected) Attribut hat.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die jedes aktuell ausgewählte [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) auflistet, das entweder ein Kind des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) oder eines [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement) innerhalb des `<select>` Elements ist.

Mit anderen Worten, jede Option, die innerhalb des `<select>` Elements enthalten ist, kann Teil der Ergebnisse sein, aber Optionsgruppen sind nicht in der Liste enthalten.

Wenn derzeit keine Optionen ausgewählt sind, ist die Sammlung leer und gibt eine [`length`](/de/docs/Web/API/HTMLCollection/length) von 0 zurück.

## Beispiele

In diesem Beispiel wird ein {{HTMLElement("select")}} Element mit einer Anzahl von Optionen verwendet, um dem Benutzer das Bestellen verschiedener Lebensmittel zu ermöglichen.

### HTML

Der HTML-Code, der die Auswahlbox und die {{HTMLElement("option")}} Elemente erstellt, die jeweils eine der Essensoptionen repräsentieren, sieht so aus:

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

Das `<select>` Element ist so eingestellt, dass mehrere Artikel ausgewählt werden können, und es ist 7 Zeilen hoch. Beachten Sie auch den {{HTMLElement("button")}}, dessen Rolle es ist, das Abrufen der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der ausgewählten Elemente mit der `selected` Eigenschaft auszulösen.

### JavaScript

Der JavaScript-Code, der den Ereignis-Handler für die Schaltfläche einrichtet sowie der Ereignis-Handler selbst, sehen so aus:

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

Dieses Script setzt einen [`click`](/de/docs/Web/API/Element/click_event) Ereignis-Listener auf die "Jetzt bestellen" Schaltfläche. Bei einem Klick ruft der Ereignis-Handler die Liste der ausgewählten Optionen unter Verwendung von `selectedOptions` ab und durchläuft die Optionen in der Liste. Eine Zeichenkette wird konstruiert, um die bestellten Artikel aufzulisten, mit Logik, um die Liste mit korrekter englischer Grammatik zu erstellen (einschließlich eines [serial comma](https://en.wikipedia.org/wiki/Serial_comma)).

### Ergebnis

Der resultierende Inhalt sieht in Aktion so aus:

{{EmbedLiveSample("Examples", 600, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dropdown-Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls)
