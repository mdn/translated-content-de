---
title: "Element: Eigenschaft innerHTML"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element)-Eigenschaft **`innerHTML`** liest oder setzt das HTML- oder XML-Markup, das im Element enthalten ist.

Genauer gesagt gibt `innerHTML` eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements zurück oder setzt HTML oder XML, das analysiert wird, um den DOM-Baum im Element zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des DOM-Baums, die von der Eigenschaft gelesen wird, schließt {{Glossary("shadow_tree", "Shadow Roots")}} nicht ein. Wenn Sie eine HTML-Zeichenkette erhalten möchten, die Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.
Ebenso enthalten die DOM-Elemente, die aus der mit `innerHTML` analysierten HTML-Zeichenkette erstellt werden, keine Shadow Roots.

Zum Beispiel wird [`<template>`](/de/docs/Web/HTML/Element/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) analysiert, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) angegeben ist.
Um die Inhalte eines Elements mit einer HTML-Zeichenkette einzustellen, die deklaratives Shadow Root enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

## Wert

Eine Zeichenkette, die die HTML-Serialisierung der Nachkommen des Elements enthält.
Wenn der Wert von `innerHTML` gesetzt wird, werden alle Nachkommen des Elements entfernt und durch Knoten ersetzt, die aus der in der Zeichenkette _htmlString_ bereitgestellten HTML-Zeichenkette analysiert werden.

Wenn der Wert `null` zugewiesen wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichwertig ist mit `elt.innerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die kein korrekt formatiertes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen übergeordnetes Element ein [`Document`](/de/docs/Web/API/Document) ist.

## Nutzungshinweise

### Lesen des HTML-Inhalts eines Elements

Das Lesen von `innerHTML` führt dazu, dass der Benutzeragent das HTML- oder XML-Fragment serialisiert, das aus den Nachkommen des Elements besteht.
Die resultierende Zeichenkette wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

Dies ermöglicht es Ihnen, das HTML-Markup der Inhaltsknoten des Elements zu sehen.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment basiert auf dem aktuellen Inhalt des Elements, sodass das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seiten-Markup übereinstimmen.

### Ersetzen des Inhalts eines Elements

Das Setzen des Werts von `innerHTML` ermöglicht es Ihnen, den vorhandenen Inhalt eines Elements einfach durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies ist ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn die einzufügende Zeichenkette möglicherweise potenziell bösartige Inhalte enthält.
> Beim Einfügen von benutzereingebenden Daten sollten Sie immer eine Bibliothek zum Sanitieren verwenden, um den Inhalt vor der Einfügung zu bereinigen.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt der [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des Dokuments löschen:

```js
document.body.textContent = "";
```

In diesem Beispiel wird das aktuelle HTML-Markup des Dokuments abgerufen, die Zeichen `"<"` werden durch die {{Glossary("character_reference", "Zeichenreferenz")}} `"&lt;"` ersetzt, wodurch das HTML im Wesentlichen in reinen Text umgewandelt wird.
Dieser Text wird dann in ein {{HTMLElement("pre")}}-Element eingeschlossen.
Dann wird der Wert von `innerHTML` in diese neue Zeichenkette geändert.
Das Ergebnis ist, dass der Inhalt des Dokuments durch eine Anzeige des gesamten Seitenquellcodes ersetzt wird.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Betriebliche Details

Was genau passiert, wenn Sie den Wert von `innerHTML` setzen?
Wenn Sie dies tun, führt der Benutzeragent die folgenden Schritte aus:

1. Der angegebene Wert wird als HTML oder XML (basierend auf dem Dokumenttyp) analysiert, was zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt führt, das den neuen Satz von DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, wird dann das Attribut [`content`](/de/docs/Web/API/HTMLTemplateElement/content) des `<template>`-Elements durch den neuen `DocumentFragment` ersetzt, der in Schritt 1 erstellt wurde.
3. Bei allen anderen Elementen wird der Inhalt des Elements mit den Knoten im neuen `DocumentFragment` ersetzt.

### Anhängen von HTML an ein Element

Das Setzen des Werts von `innerHTML` ermöglicht es Ihnen, neuen Inhalt an den bestehenden eines Elements anzuhängen.

Zum Beispiel können wir ein neues Listenelement (`<li>`) zu einer bestehenden Liste (`<ul>`) hinzufügen:

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

Bitte beachten Sie, dass die Verwendung von `innerHTML`, um neue HTML-Elemente hinzuzufügen (z.B. `el.innerHTML += "<a href='…'>link</a>"`), zum Entfernen von zuvor gesetzten Ereignis-Listenern führt.
Das heißt, nachdem Sie ein HTML-Element auf diese Weise hinzugefügt haben, können die zuvor festgelegten Ereignis-Listener nicht mehr genutzt werden.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen.
Dies könnte leicht zu einem Angriffsvektor auf einer Website werden, was ein potenzielles Sicherheitsrisiko darstellt.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site-Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)-Angriff aussieht, ist das Ergebnis harmlos.
Ein mit `innerHTML` eingefügtes {{HTMLElement("script")}}-Tag wird nicht ausgeführt.

Es gibt jedoch Möglichkeiten, JavaScript ohne {{HTMLElement("script")}}-Elemente auszuführen, sodass immer ein Sicherheitsrisiko besteht, wenn Sie `innerHTML` verwenden, um Zeichenfolgen zu setzen, die nicht unter Ihrer Kontrolle stehen.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, anstelle von `innerHTML` Folgendes zu verwenden:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent), wenn Sie reinen Text einfügen, da dieser als Rohtext eingefügt wird, anstatt ihn als HTML zu parsen.

> [!WARNING]
> Wenn Ihr Projekt einer Sicherheitsüberprüfung unterzogen wird, wird die Verwendung von `innerHTML` mit großer Wahrscheinlichkeit zur Ablehnung Ihres Codes führen.
> Wenn Sie beispielsweise [`innerHTML` verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browser-Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und diese bei [addons.mozilla.org](https://addons.mozilla.org/) einreichen, könnte sie während des Prüfprozesses abgelehnt werden.
> Bitte lesen Sie [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden.

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

Die `log()`-Funktion erstellt die Protokollausgabe, indem sie die aktuelle Zeit von einem {{jsxref("Date")}}-Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und eine Zeichenkette mit dem Zeitstempel und dem Nachrichtentext erstellt.
Anschließend wird die Nachricht an das Feld mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen über [`MouseEvent`](/de/docs/Web/API/MouseEvent)-basierte Ereignisse protokolliert (wie [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)):

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Dann verwenden wir dies als Ereignishandler für mehrere Mausereignisse auf dem Feld, das unser Protokoll enthält:

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

Das {{HTMLElement("div")}} mit der Klasse `"box"` dient einfach als Container zur Layoutgestaltung und stellt die Inhalte in einer Box dar.
Das `<div>` mit der Klasse `"log"` ist der Container für den Protokolltext selbst.

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

Der resultierende Inhalt sieht wie folgt aus. Sie können Ausgaben in das Protokoll sehen, indem Sie die Maus in und aus der Box bewegen, darin klicken und so weiter.

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
- Serialisieren eines DOM-Baums in eine XML-Zeichenkette: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
