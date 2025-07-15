---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`contain-intrinsic-width`](/de/docs/Web/CSS/contain-intrinsic-width)
- [`contain-intrinsic-height`](/de/docs/Web/CSS/contain-intrinsic-height)

## Syntax

```css
/* Keyword values */
contain-intrinsic-size: none;

/* <length> values */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* width | height */
contain-intrinsic-size: 1000px 1.5em;

/* auto <length> */
contain-intrinsic-size: auto 300px;
contain-intrinsic-size: auto none;

/* auto width | auto height */
contain-intrinsic-size: auto 300px auto 4rem;

/* Global values */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: revert-layer;
contain-intrinsic-size: unset;
```

### Werte

Die folgenden Werte können für die `contain-intrinsic-size`-Eigenschaft angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in der angegebenen Dimension(en).
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in der angegebenen Dimension(en).
- `auto [<length> | none]`
  - : Ein gemerkter Wert der "normal gerenderten" Elementgröße, wenn einer existiert, und das Element seine Inhalte überspringt (zum Beispiel, wenn es sich außerhalb des sichtbaren Bereichs befindet); ansonsten die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wo feste Längen von `0px` anders als `none` wirken (wie bei mehrspaltigen oder Raster-Layouts).

Wird ein Wert als Schlüsselwort, Länge oder als `auto [<length> | none]` Paar bereitgestellt, gilt er für Breite und Höhe.

Zwei Längenwerte können angegeben werden, die in dieser Reihenfolge für Breite und Höhe gelten.
Wenn zwei `auto [<length> | none]` Paare angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so anzuordnen, als hätte es eine feste Größe, wodurch unnötige Neuanordnungen vermieden werden, indem das erneute Rendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt Größenbeschränkung Elemente, als ob sie keine Inhalte hätten, und kann das Layout auf die gleiche Weise zusammenbrechen lassen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-size`-Eigenschaft erlaubt es Autoren, einen geeigneten Wert als Größe für das Layout anzugeben.

Der Wert `auto <length>` erlaubt es, die Größe des Elements zu speichern, wenn das Element "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Länge zu verwenden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es Elementen außerhalb des sichtbaren Bereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler bei ihren Schätzungen der Elementgröße so präzise sein müssen.
Der gemerkte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

In Raster- und mehrspaltigen Layouts wird eine explizite Größe anders behandelt als eine implizite inhaltsbasierte Höhe.
Elemente könnten sich erheblich anders anordnen als sie es getan hätten, wenn sie einfach mit Inhalten bis zu dieser Höhe gefüllt worden wären.
Der Wert `auto none` erlaubt es, dass das Element auf `contain-intrinsic-size: none` zurückfällt, wenn kein gemerkter Wert existiert, was es dem Element ermöglicht, so angeordnet zu werden, als hätte es keine Inhalte. Dies wird fast immer dem Setzen von 0px als intrinsische Größe in Raster- und mehrspaltigen Layouts vorgezogen, wo enthaltene Elemente ihre Eltern überschreiten und unerwartete Seitenlayouts verursachen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwenden von Auto-Wertpaaren für die intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none` in einem Layout, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch ungenaue Schätzungen ihrer intrinsischen Größe haben.
Dank `content-visibility: auto` wird das Rendern von Elementen übersprungen, wenn sie außerhalb des sichtbaren Bereichs liegen. Diese Eigenschaft ist daher ein guter Kandidat, um sie mit `contain-intrinsic-size` zu kombinieren, um die Renderleistung zu verbessern und {{Glossary("Reflow", "Neuanordnungen")}} zu minimieren.

Der Wert `contain-intrinsic-size: auto 500px` gibt dem Browser an, 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element zu verwenden, wenn es außerhalb des sichtbaren Bereichs liegt und die Seite angeordnet wird.
Wenn der Benutzer zu dem Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und dessen Inhalt.
Gibt es eine Differenz zwischen der Platzhalter- und der berechneten Größe, könnte dies ein neues Layout erzwingen, mit entsprechenden Änderungen an der Position der Seitenleiste.

Sobald der Browser tatsächliche Größeninformationen für das Element hat, merkt er sich diese Größe, wenn das Element wieder aus dem sichtbaren Bereich scrollt, und verwendet die gemerkte Größe für Layoutberechnungen anstelle des Platzhalterwertes.
Der Vorteil ist, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um dessen Größe zu berechnen, was besonders nützlich ist, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

#### HTML

```html
<div id="container">
  <div id="auto-length-note">
    <p>
      Your browser does not support
      <code>contain-intrinsic-size: auto &lt;length&gt;</code>.
    </p>
  </div>
  <div class="auto-length">
    <p>Item one</p>
  </div>
  <div class="auto-length">
    <p>Item two</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item three</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item four</p>
  </div>
  <div id="auto-none-note">
    <p>
      Your browser does not support
      <code>contain-intrinsic-size: auto none</code>.
    </p>
  </div>
  <div class="auto-length none">
    <p>Item five</p>
  </div>
  <div class="auto-length none">
    <p>Item six</p>
  </div>
</div>
```

#### CSS

```css hidden
div,
p {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: sans-serif;
}

code {
  background-color: lightgray;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

#container {
  width: 90%;
  height: 80%;
}

.auto-length,
.auto-length.none {
  display: none;
}

#auto-length-note,
#auto-none-note {
  display: block;
  padding: 0;
}

#auto-length-note p,
#auto-none-note p {
  padding: 0.5rem;
  width: 100%;
  height: max-content;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: tomato;
}

@supports (contain-intrinsic-size: auto none) {
  .auto-length.none {
    display: block;
  }
  #auto-none-note {
    display: none;
  }
}
@supports (contain-intrinsic-size: auto 500px) {
  .auto-length {
    display: block;
  }
  #auto-length-note {
    display: none;
  }
}
```

```css
p {
  height: 500px;
  width: 500px;
  border: 4px dotted;
  background: lightblue;
}

.auto-length {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
  background-color: linen;
  outline: 4px dotted blue;
}

.large-intrinsic-size {
  /* Setting an inaccurate intrinsic size for the element */
  contain-intrinsic-size: auto 5000px;
  background-color: lightgray;
  outline: 4px dotted red;
}

.small {
  /* This element is a lot smaller than expected */
  height: 100px;
  width: 100px;
}

.none {
  background-color: papayawhip;
  contain-intrinsic-size: auto none;
  outline: 4px dotted red;
}
```

#### Ergebnis

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, also wenn sie in den sichtbaren Bereich fließen, wird das Layout neu berechnet, aber wir sehen keine Änderung in der Scrollleiste oder der Scrollposition.

- Die dritte und vierte Box haben eine viel zu große intrinsische Größe, daher ist das anfängliche Layout, das der Browser berechnet hat, viel zu groß, und wir haben diese Boxen kleiner gemacht, damit es offensichtlich ist, wenn Sie einen Punkt erreichen, der eine drastische Layoutänderung erzwingt.

  Wenn die dritte und vierte Box in den sichtbaren Bereich scrollen, wird die Größe neu berechnet, wodurch die Box und ihr übergeordnetes Element weniger hoch werden.
  Der Effekt ist, dass der Scroller die Seite nach unten springt (wir haben den Schachtel weiter durchgescrollt als angenommen) und der Scroller wird länger, da die gesamte Seite weniger hoch ist, als angenommen.

- Die letzten Boxen haben `auto none`, daher haben sie eine geschätzte Größe von Null.
  Wenn sie in den sichtbaren Bereich scrollen, werden die Größe des Elements und seiner Eltern neu berechnet, um viel größer zu sein, sodass der Scroller kleiner wird und die Leiste hochgeschoben wird.

Nach dem Scrollen bis zum Ende können Sie anschließend reibungslos nach oben und unten scrollen, da `content-visibility: auto` die tatsächlich gerenderte Größe des Elements speichert, wenn es das nächste Mal angezeigt wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` auf ein Element anzuwenden, um die Auswirkungen der verschiedenen Einstellungen zu beobachten.

#### CSS

```css
#contained_element {
  border: 2px solid green;
  width: 120px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

#### JavaScript

Der folgende Code fügt Stile hinzu und entfernt Stile vom enthaltenen Element basierend auf den ausgewählten Optionen.

```js
const containedElement = document.querySelector("#contained_element");
const intrinsicSizeSelector = document.querySelector(
  "#contain_intrinsic_size_selector",
);
const containSelector = document.querySelector("#contain_selector");
const contentVisibilitySelector = document.querySelector(
  "#content_visibility_selector",
);

containedElement.style["contain-intrinsic-size"] =
  intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
containedElement.style["contain"] =
  containSelector.options[containSelector.selectedIndex].text;
containedElement.style["content-visibility"] =
  contentVisibilitySelector.options[
    contentVisibilitySelector.selectedIndex
  ].text;

intrinsicSizeSelector.addEventListener("change", () => {
  containedElement.style["contain-intrinsic-size"] =
    intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
});

containSelector.addEventListener("change", () => {
  containedElement.style["contain"] =
    containSelector.options[containSelector.selectedIndex].text;
});

contentVisibilitySelector.addEventListener("change", () => {
  containedElement.style["content-visibility"] =
    contentVisibilitySelector.options[
      contentVisibilitySelector.selectedIndex
    ].text;
});
```

#### HTML

Das HTML definiert zwei Schaltflächen, ein Containerelement, das über die `content-visibility`-Eigenschaft einer Beschränkung unterliegt.

```html
<p>
  <label for="contain_intrinsic_size_selector">contain-intrinsic-size:</label>
  <select id="contain_intrinsic_size_selector">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></select
  >;<br />

  <label for="contain_selector">contain:</label>
  <select id="contain_selector">
    <option>none</option>
    <option>size</option>
    <option>strict</option></select
  >;<br />

  <label for="content_visibility_selector">content-visibility:</label>
  <select id="content_visibility_selector">
    <option>visible</option>
    <option>auto</option>
    <option>hidden</option></select
  >;
</p>

<div id="contained_element">
  <div class="child_element"></div>
</div>
```

#### Ergebnis

Verwenden Sie die Selektoren, um die gegebenen Stile auf das enthaltende `div`-Element anzuwenden.
Beachten Sie, dass bei `content-visibility` entweder `visible` oder `auto`, das Ändern der `contain-intrinsic-size` keinen Unterschied macht.
Wenn jedoch der Inhalt verborgen ist, lässt eine `contain-intrinsic-size` von `none` das übergeordnete Element zusammenbrechen, als ob sein Kindelement keine Größe hätte.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)
- [CSS Containment](/de/docs/Web/CSS/CSS_containment) Modul
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Renderleistung verbessert](https://web.dev/articles/content-visibility) über web.dev (2020)
