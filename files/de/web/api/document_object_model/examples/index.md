---
title: Beispiele für Web- und XML-Entwicklung unter Verwendung des DOM
slug: Web/API/Document_Object_Model/Examples
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("DOM")}}

Dieses Kapitel bietet einige längere Beispiele für die Web- und XML-Entwicklung unter Verwendung des DOM. Wo immer möglich, verwenden die Beispiele gängige APIs, Tricks und Muster in JavaScript zur Manipulation des Dokumentenobjekts.

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
      Bild 1: keine Höhe, Breite oder Stil
      <img
        id="image1"
        src="https://www.mozilla.org/images/mozilla-banner.gif" />
    </p>

    <p>
      Bild 2: height="50", width="500", aber kein Stil
      <img
        id="image2"
        src="https://www.mozilla.org/images/mozilla-banner.gif"
        height="50"
        width="500" />
    </p>

    <p>
      Bild 3: keine Höhe, Breite, aber style="height: 50px; width: 500px;"
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
        value="Rahmen 20px breit machen"
        onclick="setBorderWidth(20);" />
      <input
        type="button"
        value="Rahmen 5px breit machen"
        onclick="setBorderWidth(5);" />
    </form>
  </body>
</html>
```

## Beispiel 3: Stilmanipulation

In diesem einfachen Beispiel werden einige grundlegende Stil-Eigenschaften eines HTML-Absatzelements mithilfe des Stilobjekts auf dem Element und dessen CSS-Stileigenschaften, die aus dem DOM abgerufen und festgelegt werden können, zugegriffen. In diesem Fall manipulieren Sie die einzelnen Stile direkt. Im nächsten Beispiel (siehe Beispiel 4) können Sie Stile und ihre Regeln verwenden, um Stile für ganze Dokumente zu ändern.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Beispiel zur Änderung von Farbe und Schriftgröße</title>

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

Die Eigenschaft {{domxref("document.styleSheets", "styleSheets")}} des {{domxref("document")}}-Objekts gibt eine Liste der Stylesheets zurück, die in diesem Dokument geladen wurden. Sie können auf diese Stylesheets und ihre Regeln einzeln mit den Objekten stylesheet, style und {{domxref("CSSRule")}} zugreifen, wie in diesem Beispiel gezeigt, das alle Stilregel-Selektoren an die Konsole ausgibt.

```js
const ss = document.styleSheets;

for (let i = 0; i < ss.length; i++) {
  for (let j = 0; j < ss[i].cssRules.length; j++) {
    console.log(`${ss[i].cssRules[j].selectorText}\n`);
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

gibt dieses Skript Folgendes aus:

```plain
BODY
P
#LUMPY
```

## Beispiel 5: Ereignisausbreitung

Dieses Beispiel zeigt auf sehr einfache Weise, wie Ereignisse im DOM ausgelöst und behandelt werden. Wenn der BODY dieses HTML-Dokuments geladen wird, wird ein Ereignislistener bei der obersten Zeile der TABLE registriert. Der Ereignislistener verarbeitet das Ereignis durch Ausführen der Funktion stopEvent, die den Wert in der unteren Zelle der Tabelle ändert.

stopEvent ruft jedoch auch eine Methodes des Ereignisobjekts auf, {{domxref("event.stopPropagation")}}, die verhindert, dass sich das Ereignis weiter im DOM ausbreitet. Beachten Sie, dass die Tabelle selbst einen {{domxref("Element.click_event", "onclick")}}-Ereignishandler hat, der eine Nachricht anzeigen soll, wenn die Tabelle angeklickt wird. Aber die Methode stopEvent hat die Propagierung gestoppt, sodass nach der Aktualisierung der Daten in der Tabelle die Ereignisphase effektiv beendet ist und eine Meldungsbox angezeigt wird, um dies zu bestätigen.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Ereignisausbreitung</title>

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
        c2.textContent = "hallo";

        // Dies sollte t-daddy daran hindern, den Klick zu erhalten.
        event.stopPropagation();
        alert("Ereignisausbreitung gestoppt.");
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
        <td id="c1">eins</td>
      </tr>
      <tr>
        <td id="c2">zwei</td>
      </tr>
    </table>
  </body>
</html>
```

## Beispiel 6: getComputedStyle

Dieses Beispiel zeigt, wie die Methode {{domxref("window.getComputedStyle")}} verwendet werden kann, um die Stile eines Elements zu ermitteln, die nicht mit dem `style`-Attribut oder mit JavaScript festgelegt sind (z. B. `elt.style.backgroundColor="rgb(173 216 230)"`). Diese letztgenannten Stile können mit der direkteren {{domxref("HTMLElement.style", "elt.style")}}-Eigenschaft abgerufen werden, deren Eigenschaften in der [DOM-CSS-Eigenschaften-Liste](/de/docs/Web/CSS/Reference) aufgeführt sind.

`getComputedStyle()` gibt ein {{domxref("CSSStyleDeclaration")}}-Objekt zurück, dessen einzelne Stileigenschaften mit der Methode {{domxref("CSSStyleDeclaration.getPropertyValue()", "getPropertyValue()")}} dieses Objekts referenziert werden können, wie das folgende Beispieldokument zeigt.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>getComputedStyle Beispiel</title>

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

## Beispiel 7: Anzeigen von Ereignisobjekteigenschaften

Dieses Beispiel verwendet DOM-Methoden, um alle Eigenschaften des {{domxref("Window.load_event", "onload")}}-{{domxref("event")}}-Objekts und deren Werte in einer Tabelle anzuzeigen. Es zeigt auch eine nützliche Technik des Einsatzes einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife, um über die Eigenschaften eines Objekts zu iterieren, um deren Werte abzurufen.

Die Eigenschaften von Ereignisobjekten unterscheiden sich stark zwischen den Browsern, der [WHATWG DOM-Standard](https://dom.spec.whatwg.org/) listet die Standard-Eigenschaften auf, jedoch haben viele Browser diese stark erweitert.

Speichern Sie den folgenden Code in einer leeren Textdatei und laden Sie ihn in einer Vielzahl von Browsern, Sie werden überrascht sein über die unterschiedliche Anzahl und Namen von Eigenschaften. Vielleicht möchten Sie auch einige Elemente in der Seite hinzufügen und diese Funktion von verschiedenen Ereignis-Handlern aufrufen.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Ereigniseigenschaften anzeigen</title>

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
        const labelList = ["#", "Eigenschaft", "Wert"];
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
    <h1>Eigenschaften des DOM-<span id="eventType"></span>-Ereignisobjekts</h1>
  </body>
</html>
```

## Beispiel 8: Verwendung der DOM-Tabellen-Schnittstelle

Die DOM-{{domxref("HTMLTableElement")}}-Schnittstelle bietet einige bequeme Methoden zum Erstellen und Manipulieren von Tabellen. Zwei häufig verwendete Methoden sind {{domxref("HTMLTableElement.insertRow")}} und {{domxref("HTMLTableRowElement.insertCell")}}.

Um eine Zeile und einige Zellen zu einer vorhandenen Tabelle hinzuzufügen:

```html
<table id="table0">
  <tr>
    <td>Zeile 0 Zelle 0</td>
    <td>Zeile 0 Zelle 1</td>
  </tr>
</table>

<script>
  const table = document.getElementById("table0");
  const row = table.insertRow(-1);
  let cell;
  let text;

  for (let i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Zeile " + row.rowIndex + " Zelle " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

### Hinweise

- Die {{domxref("element.innerHTML", "innerHTML")}}-Eigenschaft einer Tabelle sollte niemals verwendet werden, um eine Tabelle zu ändern, obwohl Sie damit eine gesamte Tabelle oder den Inhalt einer Zelle schreiben können.
- Wenn die DOM-Core-Methoden {{domxref("document.createElement")}} und {{domxref("Node.appendChild")}} verwendet werden, um Zeilen und Zellen zu erstellen, erfordert IE, dass sie zu einem {{HTMLElement("tbody")}}-Element hinzugefügt werden, während andere Browser das Hinzufügen zu einem {{HTMLElement("table")}}-Element erlauben (die Zeilen werden zum letzten `<tbody>`-Element hinzugefügt).
- Es gibt eine Reihe weiterer bequemer Methoden, die zur [`HTMLTableElement`-Schnittstelle](/de/docs/Web/API/HTMLTableElement#instance_methods) gehören und zum Erstellen und Ändern von Tabellen verwendet werden können.
