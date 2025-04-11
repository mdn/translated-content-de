---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element)-Eigenschaft **`innerHTML`** erhält oder setzt das HTML- oder XML-Markup, das im Element enthalten ist.

Genauer gesagt, `innerHTML` erhält eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die aus der Eigenschaft gelesene Serialisierung des DOM-Baums schließt {{Glossary("shadow_tree", "Schatten-Wurzeln")}} nicht ein – wenn Sie eine HTML-Zeichenfolge erhalten möchten, die Schatten-Wurzeln einschließt, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) nutzen.
Ähnlich, wenn Sie den Inhalt eines Elements mit `innerHTML` setzen, wird die HTML-Zeichenfolge in DOM-Elemente geparst, die keine Schatten-Wurzeln enthalten.

Zum Beispiel wird [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut angegeben ist.
Um den Inhalt eines Elements aus einer HTML-Zeichenfolge zu setzen, die deklarative Schatten-Wurzeln enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

## Wert

Eine Zeichenfolge, die die HTML-Serialisierung der Nachkommen des Elements enthält.
Das Setzen des Wertes von `innerHTML` entfernt alle Nachkommen des Elements und ersetzt sie durch Knoten, die durch das Parsen des in der Zeichenfolge _htmlString_ angegebenen HTMLs konstruiert werden.

Wenn `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) umgewandelt, sodass `elt.innerHTML = null` äquivalent zu `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert von `innerHTML` mit einer Zeichenfolge zu setzen, die kein ordentlich formatiertes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, das HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Verwendungshinweise

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, das HTML- oder XML-Fragment zu serialisieren, das aus den Nachkommen des Elements besteht.
Die resultierende Zeichenfolge wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

Dies ermöglicht es Ihnen, das HTML-Markup der Inhaltsknoten des Elements zu betrachten.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf dem aktuellen Inhalt des Elements generiert, sodass das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seiten-Markup übereinstimmen.

### Ersetzen des Inhalts eines Elements

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, den bestehenden Inhalt eines Elements einfach durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies stellt ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn die einzufügende Zeichenfolge potenziell bösartigen Inhalt enthalten könnte.
> Wenn Benutzerdaten eingefügt werden, sollten Sie immer in Betracht ziehen, eine Sanisierungsbibliothek zu verwenden, um den Inhalt zu bereinigen, bevor er eingefügt wird.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body)-Attributs des Dokuments leeren:

```js
document.body.textContent = "";
```

Dieses Beispiel holt das aktuelle HTML-Markup des Dokuments und ersetzt die `"<"`-Zeichen mit der {{Glossary("character_reference", "Zeichenreferenz")}} `"&lt;"`, wodurch das HTML im Wesentlichen in Rohtext umgewandelt wird.
Dies wird dann in ein {{HTMLElement("pre")}}-Element eingebettet.
Dann wird der Wert von `innerHTML` in diese neue Zeichenfolge geändert.
Als Ergebnis wird der Dokumentinhalt durch eine Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Betriebliche Details

Was genau passiert, wenn Sie den Wert von `innerHTML` setzen?
Dies veranlasst den Benutzeragenten, die folgenden Schritte auszuführen:

1. Der angegebene Wert wird als HTML oder XML (basierend auf dem Dokumenttyp) geparst, was zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt führt, das die neue Menge von DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, wird das [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Attribut des `<template>`-Elements mit dem neuen `DocumentFragment` ersetzt, der in Schritt 1 erstellt wurde.
3. Für alle anderen Elemente wird der Inhalt des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### HTML zu einem Element hinzufügen

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, neue Inhalte zu den bestehenden eines Elements hinzuzufügen.

Zum Beispiel können wir ein neues Listenelement (`<li>`) zu der bestehenden Liste (`<ul>`) hinzufügen:

#### HTML

```html
<ul id="list">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
</ul>
```

#### JavaScript

```js
const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
```

Bitte beachten Sie, dass die Verwendung von `innerHTML`, um HTML-Elemente hinzuzufügen (z.B. `el.innerHTML += "<a href='…'>link</a>"`), zur Entfernung aller zuvor gesetzten Ereignis-Listener führt.
Das heißt, nachdem Sie ein HTML-Element auf diese Weise hinzugefügt haben, können Sie die zuvor gesetzten Ereignis-Listener nicht mehr verwenden.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen.
Es besteht jedoch das Potenzial, dass dies zu einem Angriffsvektor auf einer Seite wird und ein potenzielles Sicherheitsrisiko darstellt.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site-Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)-Angriff aussieht, ist das Ergebnis harmlos. Ein mit `innerHTML` eingefügtes {{HTMLElement("script")}}-Tag wird nicht ausgeführt.

Jedoch gibt es Möglichkeiten, JavaScript ohne Verwendung von {{HTMLElement("script")}}-Elementen auszuführen, daher besteht immer noch ein Sicherheitsrisiko, wenn Sie `innerHTML` verwenden, um Zeichenfolgen zu setzen, über die Sie keine Kontrolle haben.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, statt `innerHTML` folgendes zu verwenden:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent), wenn Sie nur einfachen Text einfügen, da dieser als Rohtext eingefügt wird, anstatt als HTML geparst zu werden.

> [!WARNING]
> Sollte Ihr Projekt einer Sicherheitsüberprüfung unterzogen werden, könnte die Verwendung von `innerHTML` dazu führen, dass Ihr Code abgelehnt wird.
> Beispielsweise [kann es bei Verwendung von `innerHTML`](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browsererweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) bei der Einreichung an [addons.mozilla.org](https://addons.mozilla.org/) im Überprüfungsprozess abgelehnt werden.
> Weitere Informationen finden Sie unter [Sicheres Einfügen von externen Inhalten in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden.

## Beispiele

Dieses Beispiel verwendet `innerHTML`, um einen Mechanismus zum Protokollieren von Nachrichten in einem Feld auf einer Webseite zu erstellen.

### JavaScript

```js
function log(msg) {
  const logElem = document.querySelector(".log");

  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
}

log("Logging mouse events inside this container…");
```

Die Funktion `log()` erstellt die Protokollausgabe, indem sie die aktuelle Uhrzeit von einem {{jsxref("Date")}}-Objekt mittels {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} erhält und eine Zeichenfolge mit dem Zeitstempel und dem Nachrichtentext erstellt.
Anschließend wird die Nachricht in das Feld mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen über auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) basierende Ereignisse (wie [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)) protokolliert:

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Anschließend verwenden wir dies als Ereignis-Handler für eine Reihe von Mausereignissen auf dem Feld, das unser Protokoll enthält:

```js
const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

Das HTML ist für unser Beispiel ziemlich einfach.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Der {{HTMLElement("div")}} mit der Klasse `"box"` ist einfach ein Container zu Layoutzwecken, der den Inhalt mit einem Rahmen darstellt.
Der `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

### CSS

Das folgende CSS gestaltet unsere Beispielinhalte.

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

### Ergebnis

Das resultierende Inhalt sieht so aus.
Sie können die Ausgabe im Protokoll sehen, indem Sie die Maus in und aus der Box bewegen, darin klicken und so weiter.

{{EmbedLiveSample("Examples", 640, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsen von HTML oder XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisierung eines DOM-Baums in eine XML-Zeichenfolge: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
