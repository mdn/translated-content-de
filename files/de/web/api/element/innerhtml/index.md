---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element)-Eigenschaft **`innerHTML`** holt oder setzt das HTML- oder XML-Markup, das innerhalb des Elements enthalten ist.

Genauer gesagt, `innerHTML` erhält eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des DOM-Baums, der aus der Eigenschaft gelesen wird, enthält keine [Shadow Roots](/de/docs/Glossary/shadow_tree) — wenn Sie eine HTML-Zeichenkette erhalten möchten, die Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.
Ähnlich gilt: Wenn der Inhalt eines Elements mit `innerHTML` gesetzt wird, wird die HTML-Zeichenkette in DOM-Elemente geparst, die keine Shadow Roots enthalten.

Zum Beispiel wird [`<template>`](/de/docs/Web/HTML/Element/template) in ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) Attribut angegeben ist.
Um den Inhalt eines Elements aus einer HTML-Zeichenkette zu setzen, die deklarative Shadow Roots enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

## Wert

Eine Zeichenkette, die die HTML-Serialisierung der Nachfahren des Elements enthält. Das Setzen des Wertes von `innerHTML` entfernt alle Nachfahren des Elements und ersetzt sie durch Knoten, die durch das Parsen des in der Zeichenkette _htmlString_ angegebenen HTMLs erstellt wurden.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend ist mit `elt.innerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die kein korrekt formatiertes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, das HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Hinweise zur Verwendung

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` veranlasst den User Agent, das HTML- oder XML-Fragment, das die Nachfahren des Elements umfasst, zu serialisieren. Die resultierende Zeichenkette wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

Dies ermöglicht es Ihnen, das HTML-Markup der Inhaltsknoten des Elements zu betrachten.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf dem aktuellen Inhalt des Elements generiert, sodass das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seitenmarkup übereinstimmen.

### Ersetzen des Inhalts eines Elements

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, den vorhandenen Inhalt eines Elements einfach durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies ist ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn die einzufügende Zeichenkette potenziell schädlichen Inhalt enthalten könnte.
> Beim Einfügen von Benutzerdaten sollten Sie immer in Betracht ziehen, eine Bibliothek zum Bereinigen zu verwenden, um den Inhalt zu bereinigen, bevor er eingefügt wird.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body)-Attributs des Dokuments löschen:

```js
document.body.textContent = "";
```

Dieses Beispiel holt das aktuelle HTML-Markup des Dokuments und ersetzt die `"<"`-Zeichen durch die [Zeichenreferenz](/de/docs/Glossary/character_reference) `"&lt;"`, wodurch das HTML im Wesentlichen in Rohtext umgewandelt wird.
Dies wird dann in ein {{HTMLElement("pre")}}-Element eingebettet.
Anschließend wird der Wert von `innerHTML` in diese neue Zeichenkette geändert.
Infolgedessen wird der Dokumentinhalt durch eine Anzeige des gesamten Seitenquellcodes ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Betriebliche Details

Was passiert genau, wenn Sie den Wert von `innerHTML` setzen?
Dies veranlasst den User Agent, die folgenden Schritte durchzuführen:

1. Der angegebene Wert wird als HTML oder XML geparst (basierend auf dem Dokumenttyp), was zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt führt, das die neue DOM-Knotensatz für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}} ist, wird der [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Attribut des `<template>`-Elements durch das neue `DocumentFragment` ersetzt, das in Schritt 1 erstellt wurde.
3. Für alle anderen Elemente wird der Inhalt des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### Anhängen von HTML an ein Element

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, neue Inhalte an die bestehenden Inhalte eines Elements anzuhängen.

Zum Beispiel können wir einen neuen Listeneintrag (`<li>`) an die bestehende Liste (`<ul>`) anhängen:

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

Bitte beachten Sie, dass die Verwendung von `innerHTML`, um HTML-Elemente anzuhängen (z.B. `el.innerHTML += "<a href='…'>link</a>"`), zur Entfernung von zuvor gesetzten Ereignis-Listenern führt.
Das heißt, nachdem Sie auf diese Weise ein HTML-Element angehängt haben, können Sie die zuvor gesetzten Ereignis-Listener nicht mehr verwenden.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen.
Es besteht jedoch die Möglichkeit, dass dies zu einem Angriffsvektor auf einer Seite werden könnte und ein potenzielles Sicherheitsrisiko darstellt.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site-Scripting](https://de.wikipedia.org/wiki/Cross-Site-Scripting)-Angriff aussehen mag, ist das Ergebnis harmlos. HTML legt fest, dass ein {{HTMLElement("script")}}-Tag, das mit `innerHTML` eingefügt wird, [nicht ausgeführt werden sollte](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

Es gibt jedoch Möglichkeiten, JavaScript ohne {{HTMLElement("script")}}-Elemente auszuführen, daher besteht immer noch ein Sicherheitsrisiko, wenn Sie `innerHTML` verwenden, um Zeichenketten zu setzen, über die Sie keine Kontrolle haben.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund ist es empfehlenswert, anstelle von `innerHTML`:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) zu verwenden, wenn Sie reinen Text einfügen, da dies ihn als reinen Text einfügt, anstatt ihn als HTML zu parsen.

> [!WARNING]
> Wenn Ihr Projekt einer Sicherheitsüberprüfung unterzogen wird, wird die Verwendung von `innerHTML` höchstwahrscheinlich dazu führen, dass Ihr Code abgelehnt wird.
> Wenn Sie beispielsweise [innerHTML verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browser-Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und reichen Sie die Erweiterung bei [addons.mozilla.org](https://addons.mozilla.org/) ein, kann sie im Bewertungsprozess abgelehnt werden.
> Bitte prüfen Sie [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden.

## Beispiele

Dieses Beispiel verwendet `innerHTML`, um einen Mechanismus zum Protokollieren von Nachrichten in einer Box auf einer Webseite zu erstellen.

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

Die `log()`-Funktion erstellt die Ausgabemeldung, indem sie die aktuelle Zeit von einem {{jsxref("Date")}}-Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und eine Zeichenkette mit dem Zeitstempel und dem Meldungstext erstellt.
Anschließend wird die Nachricht an die Box mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen zu Ereignissen basierend auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) protokolliert (z.B. [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)):

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Dann verwenden wir dies als Ereignishandler für eine Reihe von Mausereignissen auf der Box, die unser Protokoll enthält:

```js
const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

Das HTML ist in unserem Beispiel recht einfach.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Das {{HTMLElement("div")}} mit der Klasse `"box"` ist lediglich ein Container für Layoutzwecke, der den Inhalt mit einem Rahmen umgibt.
Das `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

### CSS

Das folgende CSS formatiert die Inhalte unseres Beispiels.

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
Sie können Ausgaben in das Protokoll einsehen, indem Sie die Maus ein- und aus der Box bewegen, darin klicken und so weiter.

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
