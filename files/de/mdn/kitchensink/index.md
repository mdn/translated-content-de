---
title: Die MDN Content Kitchensink
slug: MDN/Kitchensink
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

> [!WARNING]
> Löschen Sie diese Seite nicht. Sie wird von [mdn/yari](https://github.com/mdn/yari) für die Automatisierung verwendet.

## Über diese Seite

Der **kitchensink** ist eine Seite, die _versucht_, jedes mögliche Inhaltselement und jeden Yari-Makro einzubeziehen.

Diese Seite versucht, die vollständige Schnittmenge jeder anderen Seite darzustellen. Nicht in Bezug auf den Text, sondern in Bezug auf die Stile und Makros. Lassen Sie uns mit einigen Hinweisen beginnen…

Text, der das `<kbd>`-Tag verwendet: <kbd>Shift</kbd>

> [!NOTE]
> Hier ist eine Hinweis-Blockanzeige.

> [!WARNING]
> Hier ist eine Warnungs-Blockanzeige.

## Vorher/Nächste Schaltflächen

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

### Noch eine

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

## Code-Snippets

### Klartext

```plain
  ___________________________
< I'm an expert in my field. >
  ---------------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
```

### HTML

```html
<pre></pre>
```

### JavaScript

```js
const f = () => {
  return Math.random();
};
```

### CSS

```css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### WebAssembly

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

### Rust

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

### Python

```python
class BookListView(generic.ListView):
    model = Book
    # your own name for the list as a template variable
    context_object_name = 'my_book_list'
    queryset = Book.objects.filter(title__icontains='war')[:5]
    template_name = 'books/my_arbitrary_template_name_list.html'
```

## Interaktive Beispiele

{{InteractiveExample("HTML Demo: &lt;data&gt;", "tabbed-shorter")}}

```html interactive-example
<p>New Products:</p>
<ul>
  <li><data value="398">Mini Ketchup</data></li>
  <li><data value="399">Jumbo Ketchup</data></li>
  <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

```css interactive-example
data:hover::after {
  content: " (ID " attr(value) ")";
  font-size: 0.7em;
}
```

{{InteractiveExample("JavaScript Demo: Set.prototype[Symbol.iterator]()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add("forty two");

const iterator1 = set1[Symbol.iterator]();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
```

{{InteractiveExample("CSS Demo: filter")}}

```css interactive-example-choice
filter: url("/shared-assets/images/examples/shadow.svg#element-id");
```

```css interactive-example-choice
filter: blur(5px);
```

```css interactive-example-choice
filter: contrast(200%);
```

```css interactive-example-choice
filter: grayscale(80%);
```

```css interactive-example-choice
filter: hue-rotate(90deg);
```

```css interactive-example-choice
filter: drop-shadow(16px 16px 20px red) invert(75%);
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <img
      id="example-element"
      src="/shared-assets/images/examples/firefox-logo.svg"
      width="200" />
  </div>
</section>
```

```css interactive-example
.example-container {
  background-color: #fff;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#example-element {
  flex: 1;
  padding: 30px;
}
```

## Tabellen

### Markdown-Tabelle

| Konstanter Name              | Wert   | Beschreibung                                                                                       |
| ---------------------------- | ------ | -------------------------------------------------------------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | Die Anzahl der Bits, die verwendet werden, um das Abfrageergebnis für das gegebene Ziel zu halten. |
| `CURRENT_QUERY_EXT`          | 0x8865 | Die derzeit aktive Abfrage.                                                                        |
| `QUERY_RESULT_EXT`           | 0x8866 | Das Abfrageergebnis.                                                                               |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | Ein Boolean, der anzeigt, ob ein Abfrageergebnis verfügbar ist.                                    |
| `TIME_ELAPSED_EXT`           | 0x88BF | Verstrichene Zeit (in Nanosekunden).                                                               |
| `TIMESTAMP_EXT`              | 0x8E28 | Die aktuelle Zeit.                                                                                 |
| `GPU_DISJOINT_EXT`           | 0x8FBB | Ein Boolean, der anzeigt, ob die GPU eine nicht zusammenhängende Operation durchgeführt hat.       |

### HTML-Tabelle

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Wortlautinhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Wortlautinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Wortlautinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

<table class="fullwidth-table">
  <caption>
    Werte für den Inhalt von <code>&#x3C;meta name="viewport"></code>
  </caption>
  <thead>
    <tr>
      <th scope="col">Wert</th>
      <th scope="col">Mögliche Unterwerte</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>width</code></td>
      <td>Eine positive Ganzzahl, oder der Text <code>device-width</code></td>
      <td>
        Definiert die Pixelbreite des Viewports, bei der die Website dargestellt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>user-scalable</code> {{ReadOnlyInline}}</td>
      <td><code>yes</code> oder <code>no</code></td>
      <td>
        Wenn auf <code>no</code> gesetzt, kann der Benutzer nicht in die Webseite zoomen.
        Der Standardwert ist <code>yes</code>. Browsereinstellungen können diese Regel ignorieren,
        und iOS10+ ignoriert sie standardmäßig.
      </td>
    </tr>
    <tr>
      <td><code>viewport-fit</code></td>
      <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
      <td>
        <p>
          Der <code>auto</code>-Wert beeinflusst das anfängliche Layout-Viewport nicht, und die gesamte Webseite ist sichtbar.
        </p>
        <p>
          Der <code>contain</code>-Wert bedeutet, dass der Viewport so skaliert wird,
          dass das größte innerhalb des Displays eingeschriebene Rechteck passt.
        </p>
        <p>
          Der <code>cover</code>-Wert bedeutet, dass der Viewport so skaliert wird, dass das Display des Geräts ausgefüllt wird.
          Es wird dringend empfohlen, die <a href="/de/docs/Web/CSS/env">sicheren Bereichseinlagen</a> Variablen zu verwenden,
          um sicherzustellen, dass wichtiger Inhalt nicht außerhalb des Displays landet.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Jeder Makro unter der Sonne

**Nun, fast jeder Makro. Hoffentlich nur die, die aktiv genutzt werden.**

Ein {{Glossary("HTTP", "HTTP")}}-Fehlercode, der "Bad Gateway" bedeutet.

Ein {{Glossary("Server", "Server")}} kann als Gateway oder Proxy (Zwischeninstanz) zwischen einem Client (wie Ihrem Webbrowser) und einem anderen, übergeordneten Server agieren. Wenn Sie einen Zugriff auf eine {{Glossary("URL", "URL")}} anfordern, kann der Gateway-Server Ihre Anfrage an den übergeordneten Server weiterleiten. "502" bedeutet, dass der übergeordnete Server eine ungültige Antwort zurückgegeben hat.

- JavaScript {{jsxref("Array")}} auf MDN

Das Abhören von Mausbewegungen ist sogar noch einfacher als das Abhören von Tastenanschlägen: Alles, was wir benötigen, ist der Listener für das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis.

## Browser-Kompatibilität

{{Compat}}

## Achsen-ausgerichtete Begrenzungsbox

Eine der einfacheren Formen der Kollisionsdetektion ist zwischen zwei rechteckigen Objekten, die achsen-ausgerichtet sind – das heißt, keine Drehung aufweisen. Der Algorithmus stellt sicher, dass zwischen keiner der 4 Seiten der Rechtecke eine Lücke besteht. Jede Lücke bedeutet, dass keine Kollision existiert.

```js
var rect1 = { x: 5, y: 5, width: 50, height: 50 };
var rect2 = { x: 20, y: 10, width: 10, height: 10 };

if (
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y
) {
  // collision detected!
}

// filling in the values =>

if (5 < 30 && 55 > 20 && 5 < 20 && 55 > 10) {
  // collision detected!
}
```

### Rect-Code

```html
<div id="cr-stage"></div>
<p>
  Move the rectangle with arrow keys. Green means collision, blue means no
  collision.
</p>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js
Crafty.init(200, 200);

var dim1 = {x: 5, y: 5, w: 50, h: 50}
var dim2 = {x: 20, y: 10, w: 60, h: 40}

var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(2).attr(dim2).color("blue");

rect2.bind("EnterFrame", function () {
if (rect1.x > rect2.x + rect2.w &#x26;&#x26;
rect1.x + rect1.w > rect2.x &#x26;&#x26;
rect1.y > rect2.y + rect2.h &#x26;&#x26;
rect1.h + rect1.y > rect2.y) {
// collision detected!
this.color("green");
} else {
// no collision
this.color("blue");
}
});
```

{{EmbedLiveSample('Rect_code', '700', '300') }}

{{SeeCompatTable}}

{{WebExtAPIRef("tabs.mutedInfo")}}

### Veraltete CSSOM-Schnittstellen {{deprecated_inline}}

{{InheritanceDiagram("WheelEvent")}}

{{EmbedGHLiveSample("web-tech-games/index.html", '100%', 820)}}

- [Ressourcen zur Barrierefreiheit bei MDN](/de/docs/Web/Accessibility)
- [Web Barrierefreiheit](https://de.wikipedia.org/wiki/Web_Accessibility) auf Wikipedia

Das [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)-Makro fügt ein lokalisiertes Hinweisfeld ein, das angibt, dass eine Funktion in einem [Web Worker](/de/docs/Web/API/Web_Workers_API)-Kontext verfügbar ist.

{{AvailableInWorkers}}

- [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

<!---->

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie dessen `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie die CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften, um das 2- oder 4-fache des HTML-`width`- und `height`-Werts darzustellen.
  Wenn das Canvas mit einer Breite von 128 Pixel erstellt wurde, würden wir die CSS-`width` auf `512px` setzen, wenn wir eine 4-fache Skalierung wünschen.
- Setzen Sie die `image-rendering`-CSS-Eigenschaft des {{htmlelement("canvas")}}-Elements auf einen Wert, der das Bild nicht unscharf macht.
  Entweder `crisp-edges` oder `pixelated` funktioniert. Sehen Sie sich den Artikel {{cssxref("image-rendering")}} an, um mehr über die Unterschiede zwischen diesen Werten zu erfahren und welche Präfixe je nach Browser zu verwenden sind.

<!---->

- [MDN Web Docs Glossar](/de/docs/Glossary):

  - {{Glossary("XMLHttpRequest", "XHR")}}

- [AJAX](https://de.wikipedia.org/wiki/AJAX) auf Wikipedia
- [Lernen: Netzwerk-Anfragen mit JavaScript machen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`Fetch API`](/de/docs/Web/API/Fetch_API)
- [Fetch API verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Synchron vs. Asynchron Kommunikation](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)

<!---->

- {{SVGElement("feGaussianBlur")}}
- {{SVGAttr("keySplines")}} SVG-Attribut
- [dir](/de/docs/Web/HTML/Reference/Global_attributes#dir)
- [lang](/de/docs/Web/HTML/Reference/Global_attributes#lang)
- {{cssxref(":dir")}}
- {{cssxref("direction")}}

## Typen

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informationen über einen bestimmten Alarm.

{{Non-standard_Header}}
{{Deprecated_Header}}
[![Eisberg-Foto](iceberg.jpg)](iceberg.jpg)
