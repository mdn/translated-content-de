---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{APIRef("DOM")}}

Die **`innerHTML`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle holt oder setzt das HTML- oder XML-Markup, das innerhalb des Elements enthalten ist.

Genauer gesagt, `innerHTML` liest eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

Die Serialisierung des DOM-Baums, die von der Eigenschaft gelesen wird, umfasst keine {{Glossary("shadow_tree", "Shadow Roots")}} — wenn Sie einen HTML-String erhalten möchten, der Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.
Ähnlich, wenn Sie den Inhalt eines Elements mit `innerHTML` setzen, wird der HTML-String in DOM-Elemente geparst, die keine Shadow Roots enthalten.

Zum Beispiel wird [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist oder nicht.
Um die Inhalte eines Elements aus einem HTML-String zu setzen, der deklarative Shadow Roots enthält, müssen Sie entweder [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

Beachten Sie, dass einige Browser die `<`- und `>`-Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine potenzielle Sicherheitslücke ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, wodurch ein Cross-Site-Scripting (XSS)-Angriff ermöglicht wird.

## Wert

Ein String, der die HTML-Serialisierung der Nachfahren des Elements enthält.
Das Setzen des Wertes von `innerHTML` entfernt alle Nachfahren des Elements und ersetzt sie durch Knoten, die durch das Parsen des in der Zeichenkette _htmlString_ angegebenen HTMLs konstruiert werden.

Wenn der Wert `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die kein korrekt formatiertes HTML ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Nutzungshinweise

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` veranlasst den User-Agent, das HTML- oder XML-Fragment zu serialisieren, das sich aus den Nachfahren des Elements zusammensetzt.
Die resultierende Zeichenkette wird zurückgegeben.

```js
const contents = myElement.innerHTML;
```

Dies ermöglicht es Ihnen, das HTML-Markup der Inhaltsknoten des Elements anzusehen.

> [!NOTE]
> Das zurückgegebene HTML- oder XML-Fragment wird basierend auf dem aktuellen Inhalt des Elements generiert, sodass das Markup und die Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seitenmarkup übereinstimmen.

### Ersetzen der Inhalte eines Elements

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, den vorhandenen Inhalt eines Elements einfach durch neuen Inhalt zu ersetzen.

> [!WARNING]
> Dies stellt ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn die einzufügende Zeichenkette potenziell bösartige Inhalte enthalten könnte.
> Bei der Einfügung von Benutzerdaten sollten Sie immer die Verwendung einer Sanitisierungsbibliothek in Betracht ziehen, um den Inhalt zu sanitisieren, bevor er eingefügt wird.

Zum Beispiel können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des [`body`](/de/docs/Web/API/Document/body)-Attributs des Dokuments leeren:

```js
document.body.textContent = "";
```

Dieses Beispiel holt das aktuelle HTML-Markup des Dokuments und ersetzt die `"<"`-Zeichen mit der {{Glossary("character_reference", "Zeichenreferenz")}} `"&lt;"`, wobei im Wesentlichen das HTML in reinen Text umgewandelt wird.
Dies wird dann in ein {{HTMLElement("pre")}}-Element eingeschlossen.
Dann wird der Wert von `innerHTML` auf diese neue Zeichenkette geändert.
Infolgedessen werden die Inhalte des Dokuments durch eine Darstellung des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

#### Operative Details

Was passiert genau, wenn Sie den Wert von `innerHTML` setzen?
Dies führt dazu, dass der User-Agent die folgenden Schritte ausführt:

1. Der angegebene Wert wird als HTML oder XML geparst (abhängig vom Dokumenttyp), was ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt erzeugt, das die neue Menge an DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, dann wird das [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Attribut des `<template>`-Elements durch das in Schritt 1 erstellte neue `DocumentFragment` ersetzt.
3. Für alle anderen Elemente wird der Inhalt des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### HTML zu einem Element hinzufügen

Das Setzen des Wertes von `innerHTML` ermöglicht es Ihnen, neue Inhalte zu den vorhandenen Inhalten eines Elements hinzuzufügen.

Zum Beispiel können wir ein neues Listenelement (`<li>`) zu der vorhandenen Liste (`<ul>`) hinzufügen:

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

Bitte beachten Sie, dass die Verwendung von `innerHTML`, um HTML-Elemente hinzuzufügen (z.B. `el.innerHTML += "<a href='…'>link</a>"`), dazu führt, dass alle zuvor gesetzten Event-Listener entfernt werden.
Das bedeutet, dass Sie nach dem Hinzufügen eines HTML-Elements auf diese Weise die zuvor gesetzten Event-Listener nicht mehr verwenden können.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` verwendet wird, um Text in eine Webseite einzufügen.
Dies kann ein Angriffspunkt auf einer Seite werden und ein potenzielles Sicherheitsrisiko darstellen.

```js
let name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// …

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case
```

Obwohl dies wie ein [Cross-Site-Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)-Angriff aussieht, ist das Ergebnis harmlos. Ein mit `innerHTML` eingefügtes {{HTMLElement("script")}}-Tag wird nicht ausgeführt.

Es gibt jedoch Möglichkeiten, JavaScript auszuführen, ohne {{HTMLElement("script")}}-Elemente zu verwenden, sodass ein Sicherheitsrisiko besteht, wann immer Sie `innerHTML` verwenden, um Zeichenketten zu setzen, über die Sie keine Kontrolle haben.
Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Aus diesem Grund wird empfohlen, anstelle von `innerHTML` folgende Alternativen zu verwenden:

- [`Node.textContent`](/de/docs/Web/API/Node/textContent), wenn Sie reinen Text einfügen, da dies den Text als reinen Text und nicht als HTML einfügt.

> [!WARNING]
> Wenn Ihr Projekt eine Form von Sicherheitsüberprüfung durchläuft, wird die Verwendung von `innerHTML` höchstwahrscheinlich dazu führen, dass Ihr Code abgelehnt wird.
> Wenn Sie `innerHTML` in einer [Browser-Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) verwenden und die Erweiterung bei [addons.mozilla.org](https://addons.mozilla.org/) einreichen, kann sie im Review-Prozess abgelehnt werden.
> Bitte beachten Sie [Sicheres Einfügen von externen Inhalten in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page) für alternative Methoden.

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

Die `log()`-Funktion erstellt die Protokollausgabe, indem sie die aktuelle Zeit von einem {{jsxref("Date")}}-Objekt mit {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} abruft und eine Zeichenkette mit dem Zeitstempel und dem Nachrichtentext erstellt.
Dann wird die Nachricht zu dem Kasten mit der Klasse `"log"` hinzugefügt.

Wir fügen eine zweite Methode hinzu, die Informationen über auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) basierende Ereignisse protokolliert (wie [`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`click`](/de/docs/Web/API/Element/click_event) und [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)):

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Dann verwenden wir dies als Event-Handler für eine Reihe von Mausereignissen auf dem Kasten, der unser Protokoll enthält:

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

Das {{HTMLElement("div")}} mit der Klasse `"box"` ist nur ein Container für Layout-Zwecke, der die Inhalte mit einem Rand präsentiert.
Das `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext selbst.

### CSS

Das folgende CSS gestaltet unser Beispielinhalt.

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
Sie können Ausgaben in das Protokoll sehen, indem Sie die Maus in und aus dem Kasten bewegen, darauf klicken usw.

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
