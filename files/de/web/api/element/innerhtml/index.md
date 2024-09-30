---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element)-Eigenschaft **`innerHTML`** liest oder setzt das HTML- oder XML-Markup, das innerhalb des Elements enthalten ist.

Genauer gesagt erhält `innerHTML` eine Serialisierung der verschachtelten untergeordneten DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des vom Attribut gelesenen DOM-Baums umfasst keine [shadow roots](/de/docs/Glossary/shadow_tree) — wenn Sie eine HTML-Zeichenkette erhalten möchten, die shadow roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.
Ebenso wird beim Setzen von Elementinhalten über `innerHTML` die HTML-Zeichenkette in DOM-Elemente geparst, die keine shadow roots enthalten.

Zum Beispiel wird [`<template>`](/de/docs/Web/HTML/Element/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) angegeben ist.
Um den Inhalt eines Elements aus einer HTML-Zeichenkette festzulegen, die deklarative shadow roots enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

## Wert

Eine Zeichenkette, die die HTML-Serialisierung der Nachkommen des Elements enthält.
Das Setzen des Werts von `innerHTML` entfernt alle Nachkommen des Elements und ersetzt sie durch Knoten, die durch das Parsen des in der Zeichenkette _htmlString_ angegebenen HTML konstruiert werden.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die nicht korrekt geformtes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Verwendungshinweise

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzer-Agenten, das HTML- oder XML-Fragment zu serialisieren, das aus den Nachkommen des Elements besteht.
Die resultierende Zeichenkette wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

Damit können Sie das HTML-Markup der Inhaltsknoten des Elements betrachten.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf dem aktuellen Inhalt des Elements generiert, sodass Markup und Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seitenmarkup übereinstimmen.

### Ersetzen der Inhalte eines Elements

Das Setzen des Werts von `innerHTML` ermöglicht es Ihnen, den vorhandenen Inhalt eines Elements einfach durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies stellt ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn die einzufügende Zeichenkette potenziell schädlichen Inhalt enthalten könnte.
> Beim Einfügen von benutzerbereitgestellten Daten sollten Sie stets die Verwendung einer Sanitizer-Bibliothek in Betracht ziehen, um den Inhalt zu bereinigen, bevor er eingefügt wird.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body)-Attributs des Dokuments leeren:

```js
document.body.textContent = "";
```

Dieses Beispiel holt das aktuelle HTML-Markup des Dokuments und ersetzt die `"<"`-Zeichen durch die [Zeichenreferenz](/de/docs/Glossary/character_reference) `"&lt;"`, wodurch das HTML im Wesentlichen in Rohtext umgewandelt wird.
Dies wird dann in ein {{HTMLElement("pre")}}-Element eingefügt.
Dann wird der Wert von `innerHTML` auf diese neue Zeichenkette geändert.
Infolgedessen wird der Dokumentinhalt durch die Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Betriebsdetails

Was genau passiert, wenn Sie den Wert von `innerHTML` setzen?
Dadurch wird der Benutzer-Agent veranlasst, folgende Schritte auszuführen:

1. Der angegebene Wert wird als HTML oder XML geparst (je nach Dokumenttyp), was zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt führt, das die neue Menge von DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, wird das [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Attribut des `<template>`-Elements mit dem neuen `DocumentFragment` ersetzt, das in Schritt 1 erstellt wurde.
3. Für alle anderen Elemente wird der Inhalt des Elements mit den Knoten im neuen `DocumentFragment` ersetzt.

### Anhängen von HTML an ein Element

Das Setzen des Werts von `innerHTML` ermöglicht es Ihnen, neuen Inhalt an den bestehenden eines Elements anzuhängen.

Zum Beispiel können wir ein neues Listenelement (`<li>`) an die bestehende Liste (`<ul>`) anhängen:

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

Bitte beachten Sie, dass die Verwendung von `innerHTML`, um HTML-Elemente anzuhängen (z.B. `el.innerHTML += "<a href='…'>link</a>"`), dazu führt, dass zuvor gesetzte Ereignislistener entfernt werden.
Das heißt, nachdem Sie auf diese Weise ein HTML-Element angehängt haben, können Sie die zuvor gesetzten Ereignislistener nicht mehr hören.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen.
Dies kann ein potenzieller Angriffsvektor auf einer Seite werden und ein potenzielles Sicherheitsrisiko darstellen.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site-Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)-Angriff aussehen mag, ist das Ergebnis harmlos. HTML gibt an, dass ein {{HTMLElement("script")}}-Tag, das mit `innerHTML` eingefügt wurde, [nicht ausgeführt werden sollte](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

Es gibt jedoch Möglichkeiten, JavaScript auszuführen, ohne {{HTMLElement("script")}}-Elemente zu verwenden, sodass immer ein Sicherheitsrisiko besteht, wenn Sie `innerHTML` verwenden, um Zeichenketten zu setzen, über die Sie keine Kontrolle haben.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, statt `innerHTML` Folgendes zu verwenden:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent), wenn Sie reinen Text einfügen, da dieser als Rohtext eingefügt wird, anstatt ihn als HTML zu parsen.

> [!WARNING]
> Wenn Ihr Projekt eine Form der Sicherheitsüberprüfung durchlaufen muss, wird die Verwendung von `innerHTML` höchstwahrscheinlich dazu führen, dass Ihr Code abgelehnt wird.
> Wenn Sie beispielsweise [`innerHTML` verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browsererweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und diese bei
> [addons.mozilla.org](https://addons.mozilla.org/) einreichen, könnte es im Überprüfungsprozess abgelehnt werden.
> Bitte sehen Sie sich [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden an.

## Beispiele

Dieses Beispiel verwendet `innerHTML`, um einen Mechanismus zum Protokollieren von Nachrichten in einem Kasten auf einer Webseite zu erstellen.

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

Die Funktion `log()` erstellt die Protokollausgabe, indem sie die aktuelle Zeit von einem {{jsxref("Date")}}-Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und eine Zeichenkette mit dem Zeitstempel und dem Nachrichtentext erstellt.
Dann wird die Nachricht an den Kasten mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen über [`MouseEvent`](/de/docs/Web/API/MouseEvent)-basierte Ereignisse protokolliert (wie z.B. [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)):

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Dann verwenden wir dies als Ereignishandler für eine Reihe von Mausereignissen auf dem Kasten, der unser Protokoll enthält:

```js
const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

Das HTML ist in unserem Beispiel ziemlich einfach.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Das {{HTMLElement("div")}} mit der Klasse `"box"` ist lediglich ein Container für Layoutzwecke, der den Inhalt mit einem Rahmen darum präsentiert.
Das `<div>`, dessen Klasse `"log"` ist, dient als Container für den Protokolltext selbst.

### CSS

Das folgende CSS formatiert den Inhalt unseres Beispiels.

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
Sie können die Ausgabe in das Protokoll sehen, indem Sie die Maus hinein- und herausbewegen, darauf klicken und so weiter.

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
- Serialisierung eines DOM-Baums in eine XML-Zeichenkette: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
