---
title: "Element: Eigenschaft innerHTML"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die {{domxref("Element")}} Eigenschaft **`innerHTML`** ruft das HTML- oder XML-Markup ab, das im Element enthalten ist, oder legt es fest.

Genauer gesagt, `innerHTML` erhält eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt die Inhalte eines Elements zu ersetzen, verwenden Sie die Methode {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}}.

Die Serialisierung des vom Property gelesenen DOM-Baums schließt {{glossary("shadow tree", "shadow roots")}} nicht ein – wenn Sie einen HTML-String erhalten möchten, der auch Shadow Roots enthält, müssen Sie stattdessen die Methoden {{domxref("Element.getHTML()")}} oder {{domxref("ShadowRoot.getHTML()")}} verwenden. Ebenso, wenn Sie den Inhalt eines Elements mit `innerHTML` setzen, wird der HTML-String in DOM-Elemente geparst, die keine Shadow Roots enthalten.

Zum Beispiel wird [`<template>`](/de/docs/Web/HTML/Element/template) als {{domxref("HTMLTemplateElement")}} geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Element/template#shadowrootmode) angegeben ist oder nicht. Um den Inhalt eines Elements aus einem HTML-String zu setzen, der deklarative Shadow Roots enthält, müssen Sie entweder {{domxref("Element.setHTMLUnsafe()")}} oder {{domxref("ShadowRoot.setHTMLUnsafe()")}} verwenden.

## Wert

Ein String, der die HTML-Serialization der Nachkommen des Elements enthält. Beim Setzen des Wertes von `innerHTML` werden alle Nachkommen des Elements entfernt und durch Knoten ersetzt, die durch Parsen des angegebenen Strings _htmlString_ erstellt wurden.

Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einem String zu setzen, der nicht korrekt formatiertes HTML ist.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Elternteil ein {{domxref("Document")}} ist.

## Verwendungshinweise

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, das HTML- oder XML-Fragment zu serialisieren, das aus den Nachkommen des Elements besteht. Der resultierende String wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

So können Sie sich das HTML-Markup der Inhaltsknoten des Elements ansehen.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird auf der Basis der aktuellen Inhalte des Elements generiert, sodass das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht dem ursprünglichen Seitenmarkup entsprechen.

### Ersetzen der Inhalte eines Elements

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, die vorhandenen Inhalte eines Elements einfach durch neue Inhalte zu ersetzen.

> [!WARNING]
> Dies ist ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn der einzufügende String potenziell schädliche Inhalte enthalten könnte. Wenn Sie nutzergelieferte Daten einfügen, sollten Sie immer in Betracht ziehen, eine Sanitisierungsbibliothek zu verwenden, um den Inhalt zu bereinigen, bevor er eingefügt wird.

Beispielsweise können Sie die gesamten Inhalte eines Dokuments löschen, indem Sie die Inhalte des Attributs {{domxref("Document.body", "body")}} des Dokuments leeren:

```js
document.body.textContent = "";
```

In diesem Beispiel wird das aktuelle HTML-Markup des Dokuments abgerufen und die `"<"`-Zeichen werden durch die {{glossary("character reference")}} `"&lt;"` ersetzt, wodurch das HTML im Wesentlichen in rohen Text umgewandelt wird. Dies wird dann in ein {{HTMLElement("pre")}}-Element eingeschlossen. Anschließend wird der Wert von `innerHTML` in diesen neuen String geändert. Infolgedessen werden die Inhalte des Dokuments durch eine Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Betrieb technische Details

Was genau passiert, wenn Sie den Wert von `innerHTML` setzen? Dadurch wird der Benutzeragent veranlasst, folgende Schritte auszuführen:

1. Der angegebene Wert wird als HTML oder XML geparst (basierend auf dem Dokumenttyp), was zu einem {{domxref("DocumentFragment")}}-Objekt führt, das die neue Gruppe von DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalte ersetzt werden, ein {{HTMLElement("template")}}-Element ist, wird das {{domxref("HTMLTemplateElement.content", "content")}}-Attribut des `<template>`-Elements durch den in Schritt 1 erstellten neuen `DocumentFragment` ersetzt.
3. Für alle anderen Elemente werden die Inhalte des Elements mit den Knoten im neuen `DocumentFragment` ersetzt.

### HTML zu einem Element hinzufügen

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, neue Inhalte zu den bestehenden eines Elements hinzuzufügen.

Zum Beispiel können wir ein neues Listenelement (`<li>`) zur bestehenden Liste (`<ul>`) hinzufügen:

#### HTML

```html
<ul id="list">
  <li><a href="#">Punkt 1</a></li>
  <li><a href="#">Punkt 2</a></li>
  <li><a href="#">Punkt 3</a></li>
</ul>
```

#### JavaScript

```js
const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Punkt ${list.children.length + 1}</a></li>`;
```

Beachten Sie bitte, dass die Verwendung von `innerHTML`, um HTML-Elemente hinzuzufügen (z.B. `el.innerHTML += "<a href='…'>link</a>"`), die zuvor festgelegten Ereignis-Listener entfernt. Das bedeutet, nachdem Sie auf diese Weise ein HTML-Element hinzugefügt haben, können Sie die vorher festgelegten Ereignis-Listener nicht mehr verwenden.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen. Dies könnte jedoch zu einem Angriffspunkt auf einer Website werden, was ein potenzielles Sicherheitsrisiko darstellt.

```js
let name = "John";
// angenommen, 'el' ist ein HTML-DOM-Element
el.innerHTML = name; // in diesem Fall harmlos

// …

name = "<script>alert('Ich bin John in einem nervigen Alert!')</script>";
el.innerHTML = name; // in diesem Fall harmlos
```

Obwohl dies wie ein [Cross-Site Scripting](https://de.wikipedia.org/wiki/Cross-Site-Scripting) Angriff aussieht, ist das Ergebnis harmlos. HTML gibt an, dass ein {{HTMLElement("script")}}-Tag, das mit `innerHTML` eingefügt wird, [nicht ausgeführt werden sollte](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

Es gibt jedoch Möglichkeiten, JavaScript ohne Verwendung von {{HTMLElement("script")}}-Elementen auszuführen, sodass immer noch ein Sicherheitsrisiko besteht, wenn Sie `innerHTML` verwenden, um Strings zu setzen, über die Sie keine Kontrolle haben. Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // zeigt den Alert an
```

Aus diesem Grund wird empfohlen, anstelle von `innerHTML` zu verwenden:

- {{domxref("Node.textContent")}}, wenn Sie reinen Text einfügen, da dieser als Rohtext eingefügt wird, anstatt ihn als HTML zu parsen.

> [!WARNING]
> Wenn Ihr Projekt irgendeiner Sicherheitsüberprüfung unterzogen wird, wird die Verwendung von `innerHTML` höchstwahrscheinlich dazu führen, dass Ihr Code abgelehnt wird. Zum Beispiel, [wenn Sie `innerHTML` verwenden](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browsererweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) und die Erweiterung an [addons.mozilla.org](https://addons.mozilla.org/) senden, kann sie im Überprüfungsprozess abgelehnt werden. Bitte sehen Sie sich [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden an.

## Beispiele

Dieses Beispiel verwendet `innerHTML`, um einen Mechanismus zum Protokollieren von Nachrichten in ein Feld auf einer Webseite zu erstellen.

### JavaScript

```js
function log(msg) {
  const logElem = document.querySelector(".log");

  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
}

log("Protokollieren von Mausereignissen innerhalb dieses Containers…");
```

Die `log()` Funktion erstellt die Protokollausgabe, indem sie die aktuelle Zeit von einem {{jsxref("Date")}} Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und einen String mit dem Zeitstempel und dem Nachrichtentext erstellt. Anschließend wird die Nachricht in das Feld mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen über auf {{domxref("MouseEvent")}} basierende Ereignisse (wie {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/click_event", "click")}} und {{domxref("Element/mouseenter_event", "mouseenter")}}) protokolliert:

```js
function logEvent(event) {
  const msg = `Ereignis <strong>${event.type}</strong> bei <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Dann verwenden wir dies als den Ereignishandler für eine Reihe von Mausereignissen in dem Feld, das unser Protokoll enthält:

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
  <div><strong>Protokoll:</strong></div>
  <div class="log"></div>
</div>
```

Das {{HTMLElement("div")}} mit der Klasse `"box"` ist nur ein Container für Layoutzwecke, der den Inhalt mit einer Box darum präsentiert. Das `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

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

Der resultierende Inhalt sieht so aus. Sie können sehen, dass das Protokoll ausgegeben wird, indem Sie die Maus ein- und aus der Box bewegen, darin klicken und so weiter.

{{EmbedLiveSample("Examples", 640, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.textContent")}} und {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.outerHTML")}}
- Parsen von HTML oder XML in einen DOM-Baum: {{domxref("DOMParser")}}
- Serialisieren eines DOM-Baums in einen XML-String: {{domxref("XMLSerializer")}}
- {{domxref("Element.getHTML()")}}
- {{domxref("ShadowRoot.getHTML()")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
