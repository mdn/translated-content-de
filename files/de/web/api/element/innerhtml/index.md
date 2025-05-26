---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 9ec0f8b51c464119792fbc36115b8f407939e2bb
---

{{APIRef("DOM")}}

Die **`innerHTML`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle erhält oder setzt das HTML- oder XML-Markup, das innerhalb des Elements enthalten ist.

Genauer gesagt, erhält `innerHTML` eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements oder setzt HTML- oder XML-Code, der geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des vom Attribut gelesenen DOM-Baums schließt keine {{Glossary("shadow_tree", "Shadow Roots")}} ein — wenn Sie einen HTML-String erhalten möchten, der Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.
Ebenso, wenn der Inhalt eines Elements mit `innerHTML` gesetzt wird, wird der HTML-String in DOM-Elemente geparst, die keine Shadow Roots enthalten.

Zum Beispiel wird ein [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) in ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist oder nicht.
Um den Inhalt eines Elements aus einem HTML-String zu setzen, der deklarative Shadow Roots enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

Beachten Sie, dass einige Browser `<` und `>` in Attributen als `&lt;` und `&gt;` serialisieren, wenn das HTML gelesen wird (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies verhindert bestimmte Exploits, bei denen Code ausführbar wird, wenn er serialisiert und dann in HTML deserialisiert wird.

## Wert

Ein String, der die HTML-Serialisierung der Nachkommen des Elements enthält.
Das Setzen des `innerHTML`-Werts entfernt alle Nachkommen des Elements und ersetzt sie durch Knoten, die durch das Parsen des im String _htmlString_ angegebenen HTMLs erstellt wurden.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `elt.innerHTML = null` gleichbedeutend ist mit `elt.innerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einem String zu setzen, der kein korrekt formatiertes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Verwendungshinweise

### Lesen des HTML-Inhalts eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, das aus den Nachkommen des Elements bestehende HTML- oder XML-Fragment zu serialisieren.
Der resultierende String wird zurückgegeben.

```js
const contents = myElement.innerHTML;
```

Dies ermöglicht es Ihnen, das HTML-Markup der Inhaltsknoten des Elements anzusehen.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf den aktuellen Inhalten des Elements generiert; das Markup und die Formatierung des zurückgegebenen Fragments werden daher wahrscheinlich nicht mit dem ursprünglichen Seiten-Markup übereinstimmen.

### Ersetzen des Inhalts eines Elements

Das Setzen des `innerHTML`-Werts ermöglicht es Ihnen, den bestehenden Inhalt eines Elements einfach mit neuem Inhalt zu ersetzen.

> [!WARNING]
> Dies stellt ein [Sicherheitsrisiko](#sicherheitserwägungen) dar, wenn der einzufügende String potenziell bösartigen Code enthalten könnte.
> Bei der Einfügung von Benutzerdaten sollten Sie stets in Betracht ziehen, eine Sanitize-Bibliothek zu verwenden, um den Inhalt vor der Einfügung zu bereinigen.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body)-Attributs des Dokuments leeren:

```js
document.body.textContent = "";
```

In diesem Beispiel wird das aktuelle HTML-Markup des Dokuments abgerufen und die `"<"`-Zeichen werden durch die {{Glossary("character_reference", "Zeichenreferenz")}} `"&lt;"` ersetzt, wodurch im Wesentlichen das HTML in Rohtext konvertiert wird.
Dies wird dann in ein {{HTMLElement("pre")}}-Element eingebettet.
Anschließend wird der Wert von `innerHTML` auf diesen neuen String geändert.
Infolgedessen wird der Dokumentinhalt durch eine Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Betriebliche Details

Was genau passiert, wenn Sie den Wert von `innerHTML` setzen?
Das Veranlassen führt dazu, dass der Benutzeragent folgende Schritte ausführt:

1. Der angegebene Wert wird als HTML oder XML (basierend auf dem Dokumenttyp) geparst, was zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt führt, das die neue Menge an DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, wird das [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Attribut des `<template>`-Elements durch das in Schritt 1 erstellte neue `DocumentFragment` ersetzt.
3. Für alle anderen Elemente wird der Inhalt des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### Anhängen von HTML an ein Element

Das Setzen des `innerHTML`-Werts ermöglicht es Ihnen, neuen Inhalt an den bestehenden Inhalt eines Elements anzuhängen.

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

Bitte beachten Sie, dass die Verwendung von `innerHTML` zum Anhängen von HTML-Elementen (z. B. `el.innerHTML += "<a href='…'>link</a>"`) dazu führen wird, dass alle zuvor gesetzten Event-Listener entfernt werden.
Das heißt, nachdem Sie auf diese Weise ein HTML-Element angehängt haben, können Sie die zuvor gesetzten Event-Listener nicht mehr hören.

### Sicherheitserwägungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen.
Dies kann ein Angriffspunkt auf einer Website werden und birgt ein potenzielles Sicherheitsrisiko.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site Scripting](https://de.wikipedia.org/wiki/Cross-Site-Scripting)-Angriff aussieht, ist das Ergebnis harmlos. Ein mit `innerHTML` eingefügtes {{HTMLElement("script")}}-Tag wird nicht ausgeführt.

Es gibt jedoch Möglichkeiten, JavaScript ohne Verwendung von {{HTMLElement("script")}}-Elementen auszuführen, sodass immer dann ein Sicherheitsrisiko besteht, wenn Sie `innerHTML` verwenden, um Strings zu setzen, über die Sie keine Kontrolle haben.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, anstelle von `innerHTML` Folgendes zu verwenden:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) beim Einfügen von reinem Text, da dieser als Rohtext eingefügt wird, anstatt ihn als HTML zu parsen.

> [!WARNING]
> Wenn Ihr Projekt irgendeiner Art von Sicherheitsüberprüfung unterzogen wird, wird die Verwendung von `innerHTML` höchstwahrscheinlich dazu führen, dass Ihr Code abgelehnt wird.
> Wenn Sie zum Beispiel [innerHTML verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browser-Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und
> die Erweiterung an [addons.mozilla.org](https://addons.mozilla.org/) einreichen, kann sie im Überprüfungsprozess abgelehnt werden.
> Bitte sehen Sie sich [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden an.

## Beispiele

Dieses Beispiel verwendet `innerHTML`, um einen Mechanismus zum Protokollieren von Meldungen in einem Kasten auf einer Webseite zu erstellen.

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

Die Funktion `log()` erstellt die Protokollausgabe, indem sie die aktuelle Uhrzeit von einem {{jsxref("Date")}}-Objekt mithilfe von {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und einen String mit dem Zeitstempel und dem Meldungstext erstellt.
Dann wird die Nachricht an den Kasten mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen über auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) basierende Ereignisse (wie [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)) protokolliert:

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

Das HTML ist für unser Beispiel recht einfach.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Das {{HTMLElement("div")}} mit der Klasse `"box"` ist nur ein Container für Layoutzwecke, der den Inhalt in einem Kasten präsentiert.
Das `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

### CSS

Das folgende CSS gestaltet unseren Beispielinhalt.

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
Sie können Ausgaben im Protokoll sehen, indem Sie die Maus hinein- und herausbewegen, darin klicken und so weiter.

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
- Serialisieren eines DOM-Baums in einen XML-String: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
