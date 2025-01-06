---
title: Die MDN Inhaltssammlung
slug: MDN/Kitchensink
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

> [!WARNING]
> Löschen Sie diese Seite nicht. Sie wird von [mdn/yari](https://github.com/mdn/yari) für die Automatisierung verwendet.

## Über diese Seite

Der **Kitchensink** ist eine Seite, die _versucht_, jedes mögliche Inhaltselement und Yari-Makro zu integrieren.

Diese Seite versucht, das vollständige Schnittpunkt von jeder anderen Seite zu sein. Nicht in Bezug auf den Text, sondern in Bezug auf die Stile und Makros. Lassen Sie uns mit einigen Notizen beginnen...

Text, der das `<kbd>`-Tag verwendet: <kbd>Shift</kbd>

> [!NOTE]
> Hier ist eine Block-Notiz.

> [!WARNING]
> Hier ist eine Block-Warnung.

## Vorher/Nachher-Schaltflächen

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

### Eine andere…

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

## Code-Schnipsel

### Reiner Text

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

```wasm
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

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}} {{EmbedInteractiveExample("pages/css/order.html")}} {{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}

## Tabellen

### Markdown-Tabelle

| Name der Konstante           | Wert   | Beschreibung                                                                              |
| ---------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | Die Anzahl der Bits, die für die Abfrageergebnisse des gegebenen Ziels verwendet werden.  |
| `CURRENT_QUERY_EXT`          | 0x8865 | Die aktuell aktive Abfrage.                                                               |
| `QUERY_RESULT_EXT`           | 0x8866 | Das Abfrageergebnis.                                                                      |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | Ein booleanischer Wert, der angibt, ob ein Abfrageergebnis verfügbar ist.                 |
| `TIME_ELAPSED_EXT`           | 0x88BF | Verstrichene Zeit (in Nanosekunden).                                                      |
| `TIMESTAMP_EXT`              | 0x8E28 | Die aktuelle Zeit.                                                                        |
| `GPU_DISJOINT_EXT`           | 0x8FBB | Ein booleanischer Wert, der angibt, ob die GPU eine getrennte Operation durchgeführt hat. |

### HTML-Tabelle

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Formulierungsinhalt</a>, fassbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Formulierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Formulierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
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
      <td>Eine positive Ganzzahl oder der Text <code>device-width</code></td>
      <td>
        Definiert die Pixelbreite des Viewports, bei der die Website gerendert werden soll.
      </td>
    </tr>
    <tr>
      <td><code>user-scalable</code> {{ReadOnlyInline}}</td>
      <td><code>yes</code> oder <code>no</code></td>
      <td>
        Wenn auf <code>no</code> gesetzt, kann der Benutzer nicht in die Webseite hineinzoomen.
        Standard ist <code>yes</code>. Browsereinstellungen können diese Regel ignorieren,
        und iOS10+ ignoriert sie standardmäßig.
      </td>
    </tr>
    <tr>
      <td><code>viewport-fit</code></td>
      <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
      <td>
        <p>
          Der Wert <code>auto</code> beeinflusst das anfängliche Layout-Viewport nicht, und die gesamte Webseite ist sichtbar.
        </p>
        <p>
          Der Wert <code>contain</code> bedeutet, dass der Viewport skaliert wird, um das größte in die Anzeige eingeschriebene Rechteck anzupassen.
        </p>
        <p>
          Der Wert <code>cover</code> bedeutet, dass der Viewport skaliert wird, um die Gerätedisplay zu füllen. Es wird dringend empfohlen, die
          <a href="/de/docs/Web/CSS/env">safe area inset</a> Variablen zu verwenden, um sicherzustellen, dass wichtiger Inhalt nicht außerhalb der Anzeige landet.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Jedes Makro unter der Sonne

**Nun, fast jedes Makro. Hoffentlich nur diejenigen, die aktiv verwendet werden.**

Ein {{Glossary("HTTP", "HTTP")}}-Fehlercode, der "Bad Gateway" bedeutet.

Ein {{Glossary("Server", "Server")}} kann als Gateway oder Proxy (Vermittler) zwischen einem Client (wie Ihrem Webbrowser) und einem anderen, stromaufwärts gelegenen Server fungieren. Wenn Sie versuchen, auf eine {{Glossary("URL", "URL")}} zuzugreifen, kann der Gateway-Server Ihre Anfrage an den stromaufwärts gelegenen Server weiterleiten. "502" bedeutet, dass der stromaufwärts gelegene Server eine ungültige Antwort zurückgegeben hat.

- JavaScript {{jsxref("Array")}} auf MDN

Das Abhören von Mausbewegungen ist sogar noch einfacher als das Abhören von Tastendrücken: Wir benötigen lediglich den Listener für das [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis.

## Browser-Kompatibilität

{{Compat}}

## Achsenbündige Begrenzungsbox

Eine der einfacheren Formen der Kollisionserkennung erfolgt zwischen zwei Rechtecken, die achsenparallel sind — d. h. ohne Rotation. Der Algorithmus funktioniert, indem sichergestellt wird, dass es keine Lücke zwischen den 4 Seiten der Rechtecke gibt. Jede Lücke bedeutet, dass keine Kollision existiert.

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

### Rechteck-Code

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

- [Barrierefreiheitsressourcen bei MDN](/de/docs/Web/Accessibility)
- [Web-Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia

Das [`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs)-Makro fügt ein lokalisiertes Hinweisfeld ein, das anzeigt, dass eine Funktion im Kontext eines [Webarbeiters](/de/docs/Web/API/Web_Workers_API) verfügbar ist.

{{AvailableInWorkers}}

- [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`treeitem`](/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

<!---->

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie dessen `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie dessen CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften auf das 2- oder 4-fache des Wertes der HTML-Attribute `width` und `height`. Wenn das Canvas-Beispiel mit einer Breite von 128 Pixel erstellt wurde, würden wir die CSS-Breite auf `512px` setzen, wenn wir eine Skalierung im 4-fachen wünschen.
- Setzen Sie die CSS-Eigenschaft `image-rendering` des {{htmlelement("canvas")}}-Elements auf einen Wert, der das Bild nicht verschwommen erscheinen lässt. Entweder `crisp-edges` oder `pixelated` funktionieren. Lesen Sie den Artikel über {{cssxref("image-rendering")}}, um mehr über die Unterschiede zwischen diesen Werten zu erfahren und welche Präfixe je nach Browser verwendet werden sollen.

<!---->

- [MDN Web Docs Glossar](/de/docs/Glossary):

  - {{Glossary("XMLHttpRequest", "XHR")}}

- [AJAX](https://en.wikipedia.org/wiki/AJAX) auf Wikipedia
- [Lernen: Netzwerk-Anfragen mit JavaScript stellen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`Fetch API`](/de/docs/Web/API/Fetch_API)
- [Verwendung der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [Synchron vs. asynchron Kommunikation](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)

<!---->

- {{SVGElement("feGaussianBlur")}}
- {{SVGAttr("keySplines")}} SVG-Attribut
- [dir](/de/docs/Web/HTML/Global_attributes#dir)
- [lang](/de/docs/Web/HTML/Global_attributes#lang)
- {{cssxref(":dir")}}
- {{cssxref("direction")}}

## Typen

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Informationen über einen bestimmten Alarm.

{{Non-standard_Header}}
{{Deprecated_Header}}
[![Eisberg Bild](iceberg.jpg)](iceberg.jpg)
