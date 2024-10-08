---
title: Beispiele für Web- und XML-Entwicklung mit dem DOM
slug: Web/API/Document_Object_Model/Examples
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("DOM")}}

Dieses Kapitel bietet einige längere Beispiele für die Web- und XML-Entwicklung mit dem DOM. Wo immer möglich, verwenden die Beispiele gängige APIs, Tricks und Muster in JavaScript zur Manipulation des Dokumentobjekts.

## Beispiel 1: Höhe und Breite

Das folgende Beispiel zeigt die Verwendung der `height`- und `width`-Eigenschaften zusammen mit Bildern unterschiedlicher Dimensionen:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>width/height example</title>
    <script>
      function init() {
        const arrImages = new Array(3);

        arrImages[0] = document.getElementById("image1");
        arrImages[1] = document.getElementById("image2");
        arrImages[2] = document.getElementById("image3");

        const objOutput = document.getElementById("output");
        let strHtml = "<ul>";

        for (let i = 0; i < arrImages.length; i++) {
          strHtml +=
            "<li>image" +
            (i + 1) +
            ": height=" +
            arrImages[i].height +
            ", width=" +
            arrImages[i].width +
            ", style.height=" +
            arrImages[i].style.height +
            ", style.width=" +
            arrImages[i].style.width +
            "</li>";
        }

        strHtml += "</ul>";

        objOutput.innerHTML = strHtml;
      }
    </script>
  </head>
  <body onload="init();">
    <p>
      Image 1: no height, width, or style
      <img
        id="image1"
        src="https://www.mozilla.org/images/mozilla-banner.gif" />
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
  </body>
</html>
```

## Beispiel 2: Bildattribute

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Modifying an image border</title>

    <script>
      function setBorderWidth(width) {
        document.getElementById("img1").style.borderWidth = width + "px";
      }
    </script>
  </head>

  <body>
    <p>
      <img
        id="img1"
        src="image1.gif"
        style="border: 5px solid green;"
        width="100"
        height="100"
        alt="border test" />
    </p>

    <form name="FormName">
      <input
        type="button"
        value="Make border 20px-wide"
        onclick="setBorderWidth(20);" />
      <input
        type="button"
        value="Make border 5px-wide"
        onclick="setBorderWidth(5);" />
    </form>
  </body>
</html>
```

## Beispiel 3: Manipulation von Stilen

In diesem einfachen Beispiel werden einige grundlegende Stil-Eigenschaften eines HTML-Absatzelements über das Stil-Objekt des Elements und die CSS-Stil-Eigenschaften dieses Objekts abgerufen, die aus dem DOM abgerufen und gesetzt werden können. In diesem Fall manipulieren Sie die einzelnen Stile direkt. Im nächsten Beispiel (siehe Beispiel 4) können Sie Stylesheets und deren Regeln verwenden, um Stile für ganze Dokumente zu ändern.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Changing color and font-size example</title>

    <script>
      function changeText() {
        const p = document.getElementById("pid");

        p.style.color = "blue";
        p.style.fontSize = "18pt";
      }
    </script>
  </head>
  <body>
    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">
      linker
    </p>

    <form>
      <p><input value="rec" type="button" onclick="changeText();" /></p>
    </form>
  </body>
</html>
```

## Beispiel 4: Verwendung von Stylesheets

Die [`styleSheets`](/de/docs/Web/API/Document/styleSheets)-Eigenschaft des [`document`](/de/docs/Web/API/Document)-Objekts gibt eine Liste der Stylesheets zurück, die auf diesem Dokument geladen wurden. Sie können diese Stylesheets und deren Regeln einzeln über die Stylesheet-, Style- und [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekte abrufen, wie in diesem Beispiel demonstriert wird, das alle Stilregel-Selektoren in die Konsole ausgibt.

```js
const ss = document.styleSheets;

for (let i = 0; i < ss.length; i++) {
  for (let j = 0; j < ss[i].cssRules.length; j++) {
    console.log(`${ss[i].cssRules[j].selectorText}\n`);
  }
}
```

Für ein Dokument mit einem einzelnen Stylesheet, in dem die folgenden drei Regeln definiert sind:

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

Gibt dieses Skript Folgendes aus:

```plain
BODY
P
#LUMPY
```

## Beispiel 5: Ereignisverbreitung

Dieses Beispiel demonstriert, wie Ereignisse im DOM auf sehr einfache Weise ausgelöst und gehandhabt werden. Wenn der BODY dieses HTML-Dokuments geladen wird, wird ein Ereignis-Listener mit der obersten Zeile der TABELLE registriert. Der Ereignis-Listener behandelt das Ereignis, indem er die Funktion stopEvent ausführt, welche den Wert in der unteren Zelle der Tabelle ändert.

StopEvent ruft jedoch auch eine Ereignis-Objektmethode auf, [`event.stopPropagation`](/de/docs/Web/API/Event/stopPropagation), welche das Ereignis daran hindert, weiter im DOM nach oben zu wandern. Beachten Sie, dass die Tabelle selbst einen [`onclick`](/de/docs/Web/API/Element/click_event)-Ereignishandler hat, der eine Nachricht anzeigen soll, wenn die Tabelle angeklickt wird. Aber die stopEvent-Methode hat die Ausbreitung gestoppt, und so bleibt nach der Aktualisierung der Daten in der Tabelle die Ereignisphase effektiv beendet, und ein Alert-Fenster wird angezeigt, um dies zu bestätigen.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Event Propagation</title>

    <style>
      #t-daddy {
        border: 1px solid red;
      }
      #c1 {
        background-color: pink;
      }
    </style>

    <script>
      function stopEvent(event) {
        const c2 = document.getElementById("c2");
        c2.textContent = "hello";

        // this ought to keep t-daddy from getting the click.
        event.stopPropagation();
        alert("event propagation halted.");
      }

      function load() {
        const elem = document.getElementById("tbl1");
        elem.addEventListener("click", stopEvent, false);
      }
    </script>
  </head>

  <body onload="load();">
    <table id="t-daddy" onclick="alert('hi');">
      <tr id="tbl1">
        <td id="c1">one</td>
      </tr>
      <tr>
        <td id="c2">two</td>
      </tr>
    </table>
  </body>
</html>
```

## Beispiel 6: getComputedStyle

Dieses Beispiel zeigt, wie die Methode [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) verwendet werden kann, um die Stile eines Elements abzurufen, die nicht über das `style`-Attribut oder mit JavaScript festgelegt sind (z.B. `elt.style.backgroundColor="rgb(173 216 230)"`). Diese letzteren Arten von Stilen können mit der direkteren [`elt.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft abgerufen werden, deren Eigenschaften in der [DOM CSS Properties List](/de/docs/Web/CSS/Reference) aufgeführt sind.

`getComputedStyle()` gibt ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurück, dessen individuelle Stil-Eigenschaften mit der [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue)-Methode dieses Objekts referenziert werden können, wie das folgende Beispieldokument zeigt.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>getComputedStyle example</title>

    <script>
      function cStyles() {
        const RefDiv = document.getElementById("d1");
        const txtHeight = document.getElementById("t1");
        const h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");

        txtHeight.value = h_style;

        const txtWidth = document.getElementById("t2");
        const w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");

        txtWidth.value = w_style;

        const txtBackgroundColor = document.getElementById("t3");
        const b_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("background-color");

        txtBackgroundColor.value = b_style;
      }
    </script>

    <style>
      #d1 {
        margin-left: 10px;
        background-color: rgb(173 216 230);
        height: 20px;
        max-width: 20px;
      }
    </style>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <form action="">
      <p>
        <button type="button" onclick="cStyles();">getComputedStyle</button>
        height<input id="t1" type="text" value="1" /> max-width<input
          id="t2"
          type="text"
          value="2" />
        bg-color<input id="t3" type="text" value="3" />
      </p>
    </form>
  </body>
</html>
```

## Beispiel 7: Anzeige der Eigenschaften von Ereignisobjekten

Dieses Beispiel verwendet DOM-Methoden, um alle Eigenschaften des [`onload`](/de/docs/Web/API/Window/load_event)-[`event`](/de/docs/Web/API/Event)-Objekts und deren Werte in einer Tabelle anzuzeigen. Es zeigt auch eine nützliche Technik, eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife zu verwenden, um über die Eigenschaften eines Objekts zu iterieren und deren Werte zu erhalten.

Die Eigenschaften von Ereignisobjekten unterscheiden sich erheblich zwischen den Browsern, der [WHATWG DOM Standard](https://dom.spec.whatwg.org/) listet die Standard-Eigenschaften auf, jedoch haben viele Browser diese erheblich erweitert.

Setzen Sie den folgenden Code in eine leere Textdatei und laden Sie ihn in verschiedene Browser, Sie werden überrascht sein über die unterschiedlichen Anzahl und Namen der Eigenschaften. Vielleicht möchten Sie auch einige Elemente auf der Seite hinzufügen und diese Funktion von verschiedenen Ereignishandlern aufrufen.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Show Event properties</title>

    <style>
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
    </style>

    <script>
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
    </script>
  </head>

  <body>
    <h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
  </body>
</html>
```

## Beispiel 8: Verwendung der DOM-Tabellenoberfläche

Das DOM-Interface [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) bietet einige praktische Methoden zur Erstellung und Manipulation von Tabellen. Zwei häufig verwendete Methoden sind [`HTMLTableElement.insertRow`](/de/docs/Web/API/HTMLTableElement/insertRow) und [`HTMLTableRowElement.insertCell`](/de/docs/Web/API/HTMLTableRowElement/insertCell).

Um eine Zeile und einige Zellen zu einer bestehenden Tabelle hinzuzufügen:

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>

<script>
  const table = document.getElementById("table0");
  const row = table.insertRow(-1);
  let cell;
  let text;

  for (let i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Row " + row.rowIndex + " Cell " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

### Hinweise

- Die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft einer Tabelle sollte niemals zum Modifizieren einer Tabelle verwendet werden, obwohl Sie damit eine ganze Tabelle oder den Inhalt einer Zelle schreiben können.
- Wenn DOM-Kernmethoden [`document.createElement`](/de/docs/Web/API/Document/createElement) und [`Node.appendChild`](/de/docs/Web/API/Node/appendChild) verwendet werden, um Zeilen und Zellen zu erstellen, erfordert IE, dass sie einem {{HTMLElement("tbody")}}-Element angefügt werden, während andere Browser das Hinzufügen zu einem {{HTMLElement("table")}}-Element erlauben (die Zeilen werden dem letzten `<tbody>`-Element hinzugefügt).
- Es gibt eine Reihe anderer praktischer Methoden, die zur [`HTMLTableElement`-Schnittstelle](/de/docs/Web/API/HTMLTableElement#instance_methods) gehören und zum Erstellen und Ändern von Tabellen verwendet werden können.
