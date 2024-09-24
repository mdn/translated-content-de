---
title: "HTMLSelectElement: selectedOptions-Eigenschaft"
short-title: selectedOptions
slug: Web/API/HTMLSelectElement/selectedOptions
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("HTML DOM")}}

Die **schreibgeschützte** Eigenschaft **`selectedOptions`** des {{domxref("HTMLSelectElement")}} enthält eine Liste der {{HTMLElement("option")}}-Elemente, die im {{HTMLElement("select")}}-Element derzeit ausgewählt sind. Die Liste der ausgewählten Optionen ist ein {{domxref("HTMLCollection")}}-Objekt mit einem Eintrag pro aktuell ausgewählter Option.

Eine Option wird als ausgewählt betrachtet, wenn sie ein {{domxref("HTMLOptionElement.selected")}}-Attribut besitzt.

## Wert

Eine {{domxref("HTMLCollection")}}, die jedes aktuell ausgewählte {{domxref("HTMLOptionElement")}} auflistet, das entweder ein Kind des {{domxref("HTMLSelectElement")}} oder eines {{domxref("HTMLOptGroupElement")}} innerhalb des `<select>`-Elements ist.

Mit anderen Worten: Jede Option innerhalb des `<select>`-Elements kann Teil der Ergebnisse sein, aber Optionsgruppen sind nicht in der Liste enthalten.

Wenn keine Optionen derzeit ausgewählt sind, ist die Sammlung leer und hat eine {{domxref("HTMLCollection.length", "Länge")}} von 0.

## Beispiele

In diesem Beispiel wird ein {{HTMLElement("select")}}-Element mit mehreren Optionen verwendet, um dem Benutzer die Bestellung verschiedener Speisen zu ermöglichen.

### HTML

Das HTML, das das Auswahlfeld und die {{HTMLElement("option")}}-Elemente erstellt, die jede der Essensauswahlen repräsentieren, sieht folgendermaßen aus:

```html
<label for="foods">Was möchten Sie essen?</label><br />
<select id="foods" name="foods" size="7" multiple>
  <option value="1">Burrito</option>
  <option value="2">Cheeseburger</option>
  <option value="3">Double Bacon Burger Supreme</option>
  <option value="4">Pepperoni Pizza</option>
  <option value="5">Taco</option>
</select>
<br />
<button name="order" id="order">Jetzt bestellen</button>
<p id="output"></p>
```

Das `<select>`-Element ist so eingestellt, dass mehrere Elemente ausgewählt werden können und es ist 7 Zeilen hoch. Beachten Sie auch den {{HTMLElement("button")}}, dessen Rolle es ist, das Abrufen der {{domxref("HTMLCollection")}} der ausgewählten Elemente mit der `selected`-Eigenschaft auszulösen.

### JavaScript

Der JavaScript-Code, der den Ereignishandler für die Schaltfläche sowie den Ereignishandler selbst erstellt, sieht folgendermaßen aus:

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
        output = "Ihre Bestellung für die folgenden Artikel wurde aufgegeben: ";
      }
      output += collection[i].label;

      if (i === collection.length - 2 && collection.length < 3) {
        output += " und ";
      } else if (i < collection.length - 2) {
        output += ", ";
      } else if (i === collection.length - 2) {
        output += ", und ";
      }
    }

    if (output === "") {
      output = "Sie haben nichts bestellt!";
    }

    outputBox.textContent = output;
  },
  false,
);
```

Dieses Skript richtet einen {{domxref("Element/click_event", "Klick")}}-Ereignis-Listener auf der Schaltfläche "Jetzt bestellen" ein. Beim Klicken ruft der Ereignishandler die Liste der ausgewählten Optionen mit `selectedOptions` ab und durchläuft die Optionen in der Liste. Ein String wird konstruiert, um die bestellten Artikel aufzulisten, mit Logik, um die Liste unter Verwendung korrekter deutscher Grammatikregeln zu erstellen (einschließlich eines [Oxford-Kommas](https://de.wikipedia.org/wiki/Oxford-Komma)).

### Ergebnis

Der resultierende Inhalt sieht in Aktion so aus:

{{EmbedLiveSample("Examples", 600, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dropdown-Steuerelemente](/de/docs/Learn/Forms/Other_form_controls#drop-down_controls)
