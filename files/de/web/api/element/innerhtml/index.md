---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: aebeb771add7275369094687b4925e6dbd5bf7b5
---

{{APIRef("DOM")}}

Die **`innerHTML`** Eigenschaft des [`Element`](/de/docs/Web/API/Element) Interfaces ruft das HTML- oder XML-Markup ab oder setzt es, das innerhalb des Elements enthalten ist.

Genauer gesagt, `innerHTML` liefert eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des aus der Eigenschaft gelesenen DOM-Baums schließt keine {{Glossary("shadow_tree", "Shadow-Roots")}} ein – wenn Sie eine HTML-Zeichenfolge erhalten möchten, die Shadow-Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.
Ebenso, wenn Sie den Inhalt eines Elements mit `innerHTML` setzen, wird die HTML-Zeichenfolge in DOM-Elemente geparst, die keine Shadow-Roots enthalten.

Zum Beispiel wird ein [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) in [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist oder nicht.
Um den Inhalt eines Elements aus einer HTML-Zeichenfolge zu setzen, die deklarative Shadow-Roots enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient der Verhinderung einer potenziellen Sicherheitsanfälligkeit ([Mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)), bei der ein Angreifer Eingaben erstellen kann, die eine [Sanisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und einen Cross-Site-Scripting (XSS) Angriff ermöglichen.

## Wert

Ein String, der die HTML-Serialisierung der Nachkommen des Elements enthält.
Das Setzen des Wertes von `innerHTML` entfernt alle Nachkommen des Elements und ersetzt sie durch Knoten, die durch das Parsen des in _htmlString_ angegebenen HTMLs konstruiert werden.

Wenn auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) konvertiert, sodass `elt.innerHTML = null` gleichbedeutend ist mit `elt.innerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert von `innerHTML` mit einem String zu setzen, der kein korrekt geformtes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Verwendungsnotizen

### Lesen des HTML-Inhalts eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, das HTML- oder XML-Fragment zu serialisieren, das aus den Nachkommen des Elements besteht.
Die resultierende Zeichenfolge wird zurückgegeben.

```js
const contents = myElement.innerHTML;
```

Dies ermöglicht es Ihnen, das HTML-Markup der Inhaltselemente des Elements anzusehen.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf dem aktuellen Inhalt des Elements generiert, daher wird das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seiten-Markup übereinstimmen.

### Ersetzen des Inhalts eines Elements

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, den vorhandenen Inhalt eines Elements leicht durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies ist ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn der einzufügende String potenziell bösartigen Inhalt enthalten könnte.
> Beim Einfügen von Benutzereingaben sollten Sie immer in Betracht ziehen, eine Sanisierungsbibliothek zu verwenden, um den Inhalt zu reinigen, bevor er eingefügt wird.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body)-Attributs des Dokuments löschen:

```js
document.body.textContent = "";
```

In diesem Beispiel wird das aktuelle HTML-Markup des Dokuments abgerufen und die `"<"`-Zeichen mit der {{Glossary("character_reference", "Zeichenreferenz")}} `"&lt;"` ersetzt, wodurch das HTML im Wesentlichen in Rohtext umgewandelt wird.
Dies wird dann in ein {{HTMLElement("pre")}}-Element eingewickelt.
Anschließend wird der Wert von `innerHTML` auf diese neue Zeichenfolge geändert.
Als Ergebnis wird der Dokumentinhalt durch die Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Betriebstechnische Details

Was genau passiert, wenn Sie den Wert von `innerHTML` setzen?
Dies führt dazu, dass der Benutzeragent die folgenden Schritte ausführt:

1. Der angegebene Wert wird als HTML oder XML (abhängig vom Dokumenttyp) geparst, was zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Objekt führt, das die neue Menge an DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, dann wird das [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Attribut des `<template>`-Elements durch das neue `DocumentFragment` ersetzt, das in Schritt 1 erstellt wurde.
3. Für alle anderen Elemente wird der Inhalt des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### HTML an ein Element anhängen

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, neue Inhalte an den bestehenden eines Elements anzuhängen.

Zum Beispiel können wir ein neues Listenelement (`<li>`) an die bestehende Liste (`<ul>`) anhängen.

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

Bitte beachten Sie, dass das Verwenden von `innerHTML`, um HTML-Elemente hinzuzufügen (z.B., `el.innerHTML += "<a href='…'>link</a>"`), zur Entfernung aller zuvor gesetzten Event-Listener führen wird.
Das heißt, nachdem Sie auf diese Weise ein HTML-Element hinzugefügt haben, können Sie die zuvor gesetzten Event-Listener nicht mehr verwenden.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen.
Dies kann ein Angriffsvektor auf einer Seite werden und ein potenzielles Sicherheitsrisiko darstellen.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site-Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)-Angriff aussieht, ist das Ergebnis harmlos. Ein mit `innerHTML` eingefügtes {{HTMLElement("script")}}-Tag wird nicht ausgeführt.

Es gibt jedoch Möglichkeiten, JavaScript auszuführen, ohne {{HTMLElement("script")}}-Elemente zu verwenden. Daher besteht immer ein Sicherheitsrisiko, wenn Sie `innerHTML` verwenden, um Zeichenfolgen zu setzen, über die Sie keine Kontrolle haben.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, anstelle von `innerHTML`:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) zu verwenden, wenn reiner Text eingefügt wird, da dieser als Rohtext eingefügt wird, anstatt als HTML geparst zu werden.

> [!WARNING]
> Wenn Ihr Projekt einer Sicherheitsprüfung unterzogen wird, führt die Verwendung von `innerHTML` höchstwahrscheinlich dazu, dass Ihr Code abgelehnt wird.
> Wenn Sie z.B. [`innerHTML` verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browser-Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und diese an [addons.mozilla.org](https://addons.mozilla.org/) einreichen,
> kann es sein, dass sie im Überprüfungsprozess abgelehnt wird.
> Siehe [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden.

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

Die Funktion `log()` erstellt die Protokollausgabe, indem sie die aktuelle Zeit von einem {{jsxref("Date")}} Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und eine Zeichenfolge mit dem Zeitstempel und dem Nachrichtentext erstellt.
Dann wird die Nachricht an das Feld mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen über Ereignisse basierend auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) protokolliert (wie [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)):

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Dann verwenden wir dies als Ereignishandler für eine Reihe von Mausereignissen im Feld, das unser Protokoll enthält:

```js
const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

Das HTML ist für unser Beispiel recht einfach.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Der {{HTMLElement("div")}} mit der Klasse `"box"` ist nur ein Container für Layoutzwecke, der den Inhalt mit einem Rahmen präsentiert.
Das `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

### CSS

Das folgende CSS stylt unser Beispielinhalt.

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

Der resultierende Inhalt sieht so aus.
Sie können die Ausgabe im Protokoll sehen, indem Sie die Maus in und aus der Box bewegen, darin klicken usw.

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
- Serialisierung eines DOM-Baums in einen XML-String: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
