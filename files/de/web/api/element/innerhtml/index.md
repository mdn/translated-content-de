---
title: "Element: innerHTML Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element) Eigenschaft **`innerHTML`** ruft die HTML- oder XML-Markierung ab, die innerhalb des Elements enthalten ist, oder setzt sie.

Genauer gesagt, `innerHTML` erhält eine Serialisierung der verschachtelten untergeordneten DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des vom Property gelesenen DOM-Baums beinhaltet keine {{Glossary("shadow_tree", "Shadow Roots")}} — wenn Sie eine HTML-Zeichenkette erhalten möchten, die Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.
Ähnlich, wenn Sie Elementinhalte mithilfe von `innerHTML` setzen, werden die HTML-Zeichenketten in DOM-Elemente geparst, die keine Shadow Roots enthalten.

So wird beispielsweise [`<template>`](/de/docs/Web/HTML/Element/template) zu [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) Attribut angegeben ist oder nicht.
Um die Inhalte eines Elements aus einer HTML-Zeichenkette zu setzen, die deklarative Shadow Roots enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

## Wert

Ein String, der die HTML-Serialisierung der Nachfahren des Elements enthält.
Wenn der Wert von `innerHTML` gesetzt wird, werden alle Nachfahren des Elements entfernt und durch Knoten ersetzt, die durch Parsen des HTMLs in der Zeichenkette _htmlString_ konstruiert wurden.

Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die kein korrekt formatiertes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Eltern ein [`Document`](/de/docs/Web/API/Document) ist.

## Hinweise zur Verwendung

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` führt dazu, dass der User-Agent das HTML- oder XML-Fragment, das von den Nachfahren des Elements gebildet wird, serialisiert.
Die resultierende Zeichenkette wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

Dies ermöglicht Ihnen, das HTML-Markup der Inhaltsknoten des Elements anzusehen.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf den aktuellen Inhalten des Elements generiert, sodass das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seitenmarkup übereinstimmen.

### Ersetzen der Inhalte eines Elements

Das Setzen des Werts von `innerHTML` ermöglicht es Ihnen, den vorhandenen Inhalt eines Elements leicht durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies stellt ein [Sicherheitsrisiko](#sicherheitserwägungen) dar, wenn die Zeichenkette, die eingefügt werden soll, möglicherweise bösartigen Inhalt enthält.
> Wenn Benutzerdaten eingefügt werden, sollten Sie immer in Betracht ziehen, eine Bibliothek zur Inhaltssanierung zu verwenden, um den Inhalt zu reinigen, bevor er eingefügt wird.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body) Attributs des Dokuments löschen:

```js
document.body.textContent = "";
```

Dieses Beispiel ruft das aktuelle HTML-Markup des Dokuments ab und ersetzt die `"<"` Zeichen mit der {{Glossary("character_reference", "Zeichenreferenz")}} `"&lt;"`, wodurch das HTML im Wesentlichen in Rohtext umgewandelt wird.
Dies wird dann in ein {{HTMLElement("pre")}} Element eingebettet.
Dann wird der Wert von `innerHTML` auf diese neue Zeichenkette geändert.
Infolgedessen werden die Dokumentinhalte durch eine Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Operative Details

Was passiert genau, wenn Sie den Wert von `innerHTML` setzen?
Wenn Sie dies tun, folgt der User-Agent diesen Schritten:

1. Der angegebene Wert wird als HTML oder XML (basierend auf dem Dokumenttyp) geparst, was zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Objekt führt, das die neue Menge von DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalte ersetzt werden, ein {{HTMLElement("template")}} Element ist, dann wird das `<template>` Elementattribut [`content`](/de/docs/Web/API/HTMLTemplateElement/content) mit dem in Schritt 1 erstellten neuen `DocumentFragment` ersetzt.
3. Für alle anderen Elemente werden die Inhalte des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### Anfügen von HTML an ein Element

Das Setzen des Werts von `innerHTML` ermöglicht es Ihnen, neuen Inhalt zum bestehenden eines Elements hinzuzufügen.

Zum Beispiel können wir ein neues Listenelement (`<li>`) zur vorhandenen Liste (`<ul>`) hinzufügen:

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

Bitte beachten Sie, dass die Verwendung von `innerHTML`, um HTML-Elemente anzuhängen (z.B. `el.innerHTML += "<a href='…'>link</a>"`), zur Entfernung aller zuvor gesetzten Ereignis-Listener führen wird.
Das heißt, nachdem Sie ein HTML-Element auf diese Weise anhängen, können Sie die vorher gesetzten Ereignis-Listener nicht mehr verwenden.

### Sicherheitserwägungen

Es ist nicht ungewöhnlich, `innerHTML` zu verwenden, um Text in eine Webseite einzufügen.
Dies könnte jedoch zu einem Angriffsvektor auf einer Webseite werden und ein potenzielles Sicherheitsrisiko darstellen.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) Angriff aussehen mag, ist das Ergebnis harmlos. HTML gibt an, dass ein {{HTMLElement("script")}} Tag, der mit `innerHTML` eingefügt wird, [nicht ausgeführt werden sollte](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

Es gibt jedoch Möglichkeiten, JavaScript ohne Verwendung von {{HTMLElement("script")}} Elementen auszuführen, daher besteht immer ein Sicherheitsrisiko, wenn Sie `innerHTML` verwenden, um Zeichenketten zu setzen, über die Sie keine Kontrolle haben.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, statt `innerHTML` zu verwenden:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) beim Einfügen von gewöhnlichem Text, da dieser als Rohtext eingefügt wird, anstatt ihn als HTML zu parsen.

> [!WARNING]
> Wenn Ihr Projekt irgendeiner Form von Sicherheitsüberprüfung unterliegt, wird die Verwendung von `innerHTML` höchstwahrscheinlich dazu führen, dass Ihr Code abgelehnt wird.
> Wenn Sie beispielsweise [innerHTML verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browser-Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und
> die Erweiterung bei [addons.mozilla.org](https://addons.mozilla.org/) einreichen, kann sie im Prüfungsprozess abgelehnt werden.
> Bitte sehen Sie sich [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden an.

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

Die `log()` Funktion erstellt die Protokollausgabe, indem sie die aktuelle Zeit aus einem {{jsxref("Date")}} Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} erhält und eine Zeichenkette mit dem Zeitstempel und dem Nachrichtentext erstellt.
Dann wird die Nachricht an das Feld mit der Klasse `"log"` angehängt.

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

Das HTML für unser Beispiel ist recht einfach.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Der {{HTMLElement("div")}} mit der Klasse `"box"` ist nur ein Container für Layoutzwecke, der die Inhalte mit einem Kasten umgibt.
Das `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

### CSS

Das folgende CSS formatiert unseren Beispielinhalt.

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

Der resultierende Inhalt sieht so aus. Sie können Ausgaben in das Protokoll sehen, indem Sie die Maus hinein- und herausbewegen, darauf klicken und so weiter.

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
