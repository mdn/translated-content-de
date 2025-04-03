---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element)-Eigenschaft **`innerHTML`** ruft das HTML- oder XML-Markup innerhalb des Elements ab oder setzt es.

Genauer gesagt erhält `innerHTML` eine Serialisierung der geschachtelten Kind-DOM-Elemente innerhalb des Elements, oder es setzt HTML oder XML, das geparsed werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des DOM-Baums, die von der Eigenschaft gelesen wird, schließt {{Glossary("shadow_tree", "Shadow-Roots")}} nicht ein — wenn Sie eine HTML-Zeichenkette erhalten möchten, die Shadow-Roots einschließt, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden. Ebenso wird beim Setzen des Elementinhalts mit `innerHTML` die HTML-Zeichenkette in DOM-Elemente geparsed, die keine Shadow-Roots enthalten.

So wird zum Beispiel ein [`<template>`](/de/docs/Web/HTML/Element/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparsed, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) angegeben ist oder nicht. Um den Inhalt eines Elements aus einer HTML-Zeichenkette festzulegen, die deklarative Shadow-Roots enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

## Wert

Eine Zeichenkette, die die HTML-Serialisierung der Nachkommen des Elements enthält. Das Setzen des Wertes von `innerHTML` entfernt alle Nachkommen des Elements und ersetzt sie durch Knoten, die durch das Parsen des in der Zeichenkette _htmlString_ angegebenen HTMLs konstruiert werden.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die nicht korrekt formatiertes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Nutzungshinweise

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` bewirkt, dass der User-Agent das HTML- oder XML-Fragment, das aus den Nachkommen des Elements besteht, serialisiert. Die resultierende Zeichenkette wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

Dies ermöglicht es Ihnen, das HTML-Markup der Inhaltsknoten des Elements anzusehen.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf dem aktuellen Inhalt des Elements generiert, sodass das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seitenmarkup übereinstimmen.

### Ersetzen des Inhalts eines Elements

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen einfach, den vorhandenen Inhalt eines Elements durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies stellt ein [Sicherheitsrisiko](#sicherheitserwägungen) dar, wenn die einzufügende Zeichenkette potenziell schädliche Inhalte enthalten könnte. Wenn Sie nutzergelieferte Daten einfügen, sollten Sie stets eine Sanitizer-Bibliothek in Betracht ziehen, um den Inhalt zu bereinigen, bevor er eingefügt wird.

Beispielsweise können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body)-Attributs des Dokuments leeren:

```js
document.body.textContent = "";
```

In diesem Beispiel wird das aktuelle HTML-Markup des Dokuments geholt und die `"<"`-Zeichen werden durch die {{Glossary("character_reference", "Zeichenreferenz")}} `"&lt;"` ersetzt, wodurch das HTML im Wesentlichen in einen Rohtext konvertiert wird. Dies wird dann in ein {{HTMLElement("pre")}}-Element eingebettet. Dann wird der Wert von `innerHTML` auf diese neue Zeichenkette geändert. Infolgedessen werden die Dokumentinhalte durch eine Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Operative Details

Was geschieht genau, wenn Sie den Wert von `innerHTML` setzen? Dadurch veranlasst der User-Agent, die folgenden Schritte durchzuführen:

1. Der angegebene Wert wird als HTML oder XML geparsed (abhängig vom Dokumenttyp), was in einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt resultiert, das die neue Menge an DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, wird dann das [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Attribut des `<template>`-Elements durch das neue `DocumentFragment`, das in Schritt 1 erstellt wurde, ersetzt.
3. Bei allen anderen Elementen wird der Inhalt des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### HTML zu einem Element hinzufügen

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, neuen Inhalt dem bestehenden eines Elements hinzuzufügen.

Beispielsweise können wir ein neues Listenelement (`<li>`) zu der bestehenden Liste (`<ul>`) hinzufügen:

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

Bitte beachten Sie, dass die Verwendung von `innerHTML` zum Anhängen von HTML-Elementen (z. B. `el.innerHTML += "<a href='…'>link</a>"`) zur Entfernung von zuvor gesetzten Ereignis-Listenern führt. Das heißt, nachdem Sie auf diese Weise ein HTML-Element hinzugefügt haben, können Sie die zuvor gesetzten Ereignis-Listener nicht mehr nutzen.

### Sicherheitserwägungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen. Dies könnte zu einem Angriffsvektor auf einer Seite werden und ein potenzielles Sicherheitsrisiko darstellen.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site-Scripting](https://de.wikipedia.org/wiki/Cross-Site-Scripting)-Angriff aussehen mag, ist das Ergebnis harmlos. Ein mit `innerHTML` eingefügtes {{HTMLElement("script")}}-Tag wird nicht ausgeführt.

Es gibt jedoch Möglichkeiten, JavaScript auszuführen, ohne {{HTMLElement("script")}}-Elemente zu verwenden, sodass immer ein Sicherheitsrisiko besteht, wenn Sie `innerHTML` verwenden, um Zeichenketten zu setzen, über die Sie keine Kontrolle haben. Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, anstelle von `innerHTML` Folgendes zu verwenden:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) beim Einfügen von Reintext, da dieser als Rohtext eingefügt wird, anstatt als HTML geparsed zu werden.

> [!WARNING]
> Wenn Ihr Projekt einer Sicherheitsüberprüfung unterzogen wird, wird die Verwendung von `innerHTML` höchstwahrscheinlich dazu führen, dass Ihr Code abgelehnt wird. Beispielsweise kann es passieren, dass [wenn Sie `innerHTML` verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browser-Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und diese bei
> [addons.mozilla.org](https://addons.mozilla.org/) einreichen, es im Überprüfungsprozess abgelehnt wird. Bitte sehen Sie sich [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden an.

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

Die `log()`-Funktion erstellt die Protokollausgabe, indem sie die aktuelle Zeit von einem {{jsxref("Date")}}-Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und eine Zeichenkette mit dem Zeitstempel und dem Nachrichtentext erstellt. Dann wird die Nachricht der Box mit der Klasse `"log"` hinzugefügt.

Wir fügen eine zweite Methode hinzu, die Informationen über mousebasierte [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Ereignisse protokolliert (wie [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)):

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Dann verwenden wir dies als Ereignis-Handler für eine Reihe von Mausereignissen auf der Box, die unser Protokoll enthält:

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

Das {{HTMLElement("div")}} mit der Klasse `"box"` ist nur ein Container für Layoutzwecke, der den Inhalt mit einem Kasten umgibt. Das `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

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

Der resultierende Inhalt sieht wie folgt aus. Sie können eine Ausgabe in das Protokoll sehen, indem Sie die Maus in und aus der Box bewegen, darauf klicken und so weiter.

{{EmbedLiveSample("Examples", 640, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- HTML oder XML in einen DOM-Baum parsen: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Einen DOM-Baum in eine XML-Zeichenkette serialisieren: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
