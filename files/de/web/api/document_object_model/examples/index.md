---
title: Beispiele für Web- und XML-Entwicklung mithilfe des DOM
slug: Web/API/Document_Object_Model/Examples
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{DefaultAPISidebar("DOM")}}

Dieses Kapitel bietet einige längere Beispiele für die Web- und XML-Entwicklung mithilfe des DOM. Wo immer möglich, verwenden die Beispiele gängige APIs, Tricks und Muster in JavaScript zur Manipulation des Dokumentobjekts.

## Beispiel 1: Höhe und Breite

Das folgende Beispiel zeigt die Verwendung der Eigenschaften `height` und `width` zusammen mit Bildern unterschiedlicher Dimensionen:

```html
<p>
  Image 1: no height, width, or style
  <img id="image1" src="https://www.mozilla.org/images/mozilla-banner.gif" />
</p>

<p>
  Image 2: height="50", width="500", but no style
  <img
    id="image2"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    height="50"
    width="500" />
</p>

<p>
  Image 3: no height, width, but style="height: 50px; width: 500px;"
  <img
    id="image3"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    style="height: 50px; width: 500px;" />
</p>

<div id="output"></div>
```

```js
const arrImages = [
  document.getElementById("image1"),
  document.getElementById("image2"),
  document.getElementById("image3"),
];

const objOutput = document.getElementById("output");
let strHtml = "<ul>";

for (const img of arrImages) {
  strHtml += `<li>image${i + 1}: height=${img.height}, width=${img.width}, style.height=${img.style.height}, style.width=${img.style.width}</li>`;
}

strHtml += "</ul>";

objOutput.innerHTML = strHtml;
```

{{EmbedLiveSample("example_1_height_and_width", "", "300")}}

## Beispiel 2: Bildattribute

```html
<p>
  <img id="img1" src="image1.gif" width="100" height="100" alt="border test" />
</p>

<form name="FormName">
  <input type="button" id="btn1" value="Make border 20px-wide" />
  <input type="button" id="btn2" value="Make border 5px-wide" />
</form>
```

```css
#img1 {
  border: 5px solid green;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("img1").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("example_2_image_attributes", "", "200")}}

## Beispiel 3: Manipulieren von Stilen

In diesem einfachen Beispiel werden einige grundlegende Stil-Eigenschaften eines HTML-Absatz-Elements über das style-Objekt auf dem Element und dessen CSS-Stileigenschaften abgerufen, die über das DOM abgerufen und gesetzt werden können. In diesem Fall manipulieren Sie die individuellen Stile direkt. Im nächsten Beispiel (siehe Beispiel 4) können Sie Stylesheets und deren Regeln verwenden, um Stile für ganze Dokumente zu ändern.

```html
<p id="pid">Some text</p>
<form>
  <p><button type="button">Change text</button></p>
</form>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("example_3_manipulating_styles", "", "200")}}

## Beispiel 4: Verwendung von Stylesheets

Die [`styleSheets`](/de/docs/Web/API/Document/styleSheets)-Eigenschaft auf dem [`document`](/de/docs/Web/API/Document)-Objekt gibt eine Liste der Stylesheets zurück, die auf diesem Dokument geladen wurden. Sie können auf diese Stylesheets und deren Regeln einzeln über die Objekte stylesheet, style und [`CSSRule`](/de/docs/Web/API/CSSRule) zugreifen, wie in diesem Beispiel gezeigt, das alle Stilregel-Selektoren in die Konsole ausgibt.

```js
for (const styleSheet of document.styleSheets) {
  for (const rule of styleSheet.cssRules) {
    console.log(`${rule.selectorText}\n`);
  }
}
```

Für ein Dokument mit einem einzigen Stylesheet, in dem die folgenden drei Regeln definiert sind:

```css
body {
  background-color: darkblue;
}
p {
  font-family: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

Dieses Skript gibt Folgendes aus:

```plain
BODY
P
#LUMPY
```

## Beispiel 5: Ereignisweiterleitung

Dieses Beispiel zeigt, wie Ereignisse in sehr einfacher Weise im DOM ausgelöst und behandelt werden. Wenn der BODY dieses HTML-Dokuments geladen wird, wird ein Ereignislistener mit der obersten Zeile der TABELLE registriert. Der Ereignislistener verarbeitet das Ereignis, indem er die Funktion stopEvent ausführt, die den Wert in der unteren Zelle der Tabelle ändert.

stopEvent ruft jedoch auch eine Methode des Ereignisobjekts, [`event.stopPropagation`](/de/docs/Web/API/Event/stopPropagation), auf, die verhindert, dass das Ereignis weiter im DOM nach oben propagiert wird. Beachten Sie, dass die Tabelle selbst einen [`onclick`](/de/docs/Web/API/Element/click_event)-Ereignishandler hat, der eine Nachricht anzeigen sollte, wenn die Tabelle angeklickt wird. Doch die Methode stopEvent hat die Weiterleitung gestoppt, und so endet die Ereignisphase effektiv, nachdem die Daten in der Tabelle aktualisiert wurden, und ein Alarmfeld wird angezeigt, um dies zu bestätigen.

```html
<table id="t-daddy">
  <tr id="tbl1">
    <td id="c1">one</td>
  </tr>
  <tr>
    <td id="c2">two</td>
  </tr>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "hello";

  // this ought to keep t-daddy from getting the click.
  event.stopPropagation();
  console.log("event propagation halted.");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent, false);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("t-daddy clicked");
});
```

{{EmbedLiveSample("example_5_event_propagation", "", "300")}}

## Beispiel 6: getComputedStyle

Dieses Beispiel zeigt, wie die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) verwendet werden kann, um die Stile eines Elements abzurufen, die nicht über das `style`-Attribut oder mit JavaScript gesetzt werden (z.B. `elt.style.backgroundColor="rgb(173 216 230)"`). Letztere Arten von Stilen können mit der direkteren [`elt.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft abgerufen werden, deren Eigenschaften in der [DOM CSS Properties List](/de/docs/Web/CSS/Reference) aufgeführt sind.

`getComputedStyle()` gibt ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, dessen individuelle Stileigenschaften mit der [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode dieses Objekts referenziert werden können, wie das folgende Beispieldokument zeigt.

```html
<div id="d1">&nbsp;</div>

<form action="">
  <p>
    <button type="button">getComputedStyle</button>
    height<input id="t1" type="text" value="1" /> max-width<input
      id="t2"
      type="text"
      value="2" />
    bg-color<input id="t3" type="text" value="3" />
  </p>
</form>
```

```css
#d1 {
  margin-left: 10px;
  background-color: rgb(173, 216, 230);
  height: 20px;
  max-width: 20px;
}
```

```js
function cStyles() {
  const refDiv = document.getElementById("d1");
  const txtHeight = document.getElementById("t1");
  const hStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("height");

  txtHeight.value = hStyle;

  const txtWidth = document.getElementById("t2");
  const wStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("width");

  txtWidth.value = wStyle;

  const txtBackgroundColor = document.getElementById("t3");
  const bStyle = document.defaultView
    .getComputedStyle(refDiv, null)
    .getPropertyValue("background-color");

  txtBackgroundColor.value = bStyle;
}

document.querySelector("button").addEventListener("click", cStyles);
```

{{EmbedLiveSample("example_6_getComputedStyle", "", "300")}}

## Beispiel 7: Anzeigen von Ereignisobjekteigenschaften

Dieses Beispiel verwendet DOM-Methoden, um alle Eigenschaften des [`onload`](/de/docs/Web/API/Window/load_event)-[`event`](/de/docs/Web/API/Event)-Objekts und ihre Werte in einer Tabelle anzuzeigen. Es zeigt auch eine nützliche Technik, eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife zu verwenden, um über die Eigenschaften eines Objekts zu iterieren, um deren Werte abzurufen.

Die Eigenschaften von Ereignisobjekten unterscheiden sich stark zwischen Browsern, der [WHATWG DOM Standard](https://dom.spec.whatwg.org/) listet die Standard-Eigenschaften auf, jedoch haben viele Browser diese erheblich erweitert.

Geben Sie den folgenden Code in eine leere Textdatei ein und laden Sie ihn in eine Vielzahl von Browsern, Sie werden erstaunt sein über die unterschiedlichen Anzahl und Namen der Eigenschaften. Sie können auch einige Elemente auf der Seite hinzufügen und diese Funktion von verschiedenen Ereignishandlern aufrufen.

```html
<h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
```

```css
table {
  border-collapse: collapse;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: #ffffff;
}
```

```js
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  const event = e || window.event;
  document.getElementById("eventType").textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "Property", "Value"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const p in event) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, event[p]);
  }

  document.body.appendChild(table);
}

window.onload = (event) => {
  showEventProperties(event);
};
```

{{EmbedLiveSample("example_7_displaying_event_object_properties", "", "300")}}

## Beispiel 8: Verwendung des DOM-Tabellen-Interfaces

Das DOM-Interface [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) bietet einige praktische Methoden zum Erstellen und Manipulieren von Tabellen. Zwei häufig verwendete Methoden sind [`HTMLTableElement.insertRow`](/de/docs/Web/API/HTMLTableElement/insertRow) und [`HTMLTableRowElement.insertCell`](/de/docs/Web/API/HTMLTableRowElement/insertCell).

Um eine Zeile und einige Zellen zu einer vorhandenen Tabelle hinzuzufügen:

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>
```

```js
const table = document.getElementById("table0");
const row = table.insertRow(-1);
let cell;
let text;

for (let i = 0; i < 2; i++) {
  cell = row.insertCell(-1);
  text = `Row ${row.rowIndex} Cell ${i}`;
  cell.appendChild(document.createTextNode(text));
}
```

{{EmbedLiveSample("example_8_using_the_dom_table_interface", "", "300")}}

### Anmerkungen

- Die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft einer Tabelle sollte niemals verwendet werden, um eine Tabelle zu ändern, obwohl Sie sie verwenden können, um eine gesamte Tabelle oder den Inhalt einer Zelle zu schreiben.
- Wenn die DOM-Core-Methoden [`document.createElement`](/de/docs/Web/API/Document/createElement) und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) verwendet werden, um Zeilen und Zellen zu erstellen, erfordert IE, dass sie an ein {{HTMLElement("tbody")}}-Element angehängt werden, während andere Browser das Anhängen an ein {{HTMLElement("table")}}-Element erlauben werden (die Zeilen werden dem letzten `<tbody>`-Element hinzugefügt).
- Es gibt eine Reihe weiterer Komfortmethoden, die zur [`HTMLTableElement`-Schnittstelle](/de/docs/Web/API/HTMLTableElement#instance_methods) gehören und zum Erstellen und Modifizieren von Tabellen verwendet werden können.
