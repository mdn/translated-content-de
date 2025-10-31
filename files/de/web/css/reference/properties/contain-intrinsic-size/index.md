---
title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element der [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`contain-intrinsic-width`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-width)
- [`contain-intrinsic-height`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-height)

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

Die folgenden Werte können für die Eigenschaft `contain-intrinsic-size` angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in der/den angegebenen Dimension(en).
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in der/den angegebenen Dimension(en).
- `auto [<length> | none]`
  - : Ein erinnerter Wert der "normal angezeigten" Elementgröße, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wo feste Längen von `0px` anders als `none` verhalten (wie bei Mehrspalten- oder Rasterlayouts).

Wenn ein Wert als Schlüsselwort, Länge oder ein `auto [<length> | none]`-Paar angegeben wird, gilt er sowohl für Breite als auch Höhe.

Zwei Längenwerte können angegeben werden, die in dieser Reihenfolge auf Breite und Höhe angewendet werden.
Wenn zwei `auto [<length> | none]`-Paare angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen verwendet, die Größenbeschränkungen auslösen können, wie [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility).

Die Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, um unnötige Reflows zu vermeiden, indem die erneute Darstellung von Kind-Elementen zur Bestimmung der tatsächlichen Größe vermieden wird (dies verbessert die Nutzererfahrung).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout in ähnlicher Weise aufbrechen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-size`-Eigenschaft ermöglicht es Autoren, einen passenden Wert anzugeben, der als Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` erlaubt es, die Größe des Elements zu speichern, wenn das Element jemals "normal angezeigt" wird (mit seinen Kind-Elementen) und dann anstelle der angegebenen Länge verwendet wird, wenn das Element seine Inhalte überspringt.
Dies erlaubt es, außerhalb des Bildschirms befindlichen Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler so präzise bei ihren Schätzungen der Elementgröße sein müssen.
Der erinnerte Wert wird nicht verwendet, wenn die Kind-Elemente dargestellt werden (wenn die Größenbeschränkung aktiv ist, wird die `<length>` verwendet).

In Raster- und Mehrspaltenlayouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe.
Elemente können wesentlich anders layouten, als wenn sie einfach mit Inhalt bis zu dieser Höhe gefüllt wären.
Der Wert `auto none` erlaubt dem Element, auf `contain-intrinsic-size: none` zurückzufallen, wenn kein erinnerter Wert existiert, was dem Element erlaubt, so layoutet zu werden, als hätte es keine Inhalte. Dies ist fast immer vorzuziehen, anstelle von 0px als intrinsische Größe in Raster- und Mehrspaltenlayouts zu setzen, wo enthaltene Elemente ihre Eltern überlaufen können und zu unerwarteten Seitenlayouts führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Auto-Wert-Paaren für die intrinsische Größe

Dieses Beispiel zeigt `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none`, mit einem Layout, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch ungenaue Schätzungen der intrinsischen Größe haben.
Durch die Verwendung von `content-visibility: auto` wird das Rendern von Elementen übersprungen, wenn sie außerhalb des Bildschirms sind, sodass diese Eigenschaft ein guter Kandidat ist, um mit `contain-intrinsic-size` kombiniert zu werden, um die Renderleistung zu verbessern und {{Glossary("Reflow", "Reflows")}} zu minimieren.

Das `contain-intrinsic-size: auto 500px` Wertpaar sagt dem Browser, dass 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element verwendet werden soll, wenn es außerhalb des Bildschirms ist und die Seite layoutet wird.
Wenn der Benutzer zu dem Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte.
Wenn es einen Unterschied zwischen der Platzhalter- und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit begleitenden Änderungen der Seitenleistenposition.

Sobald der Browser tatsächliche Größeninformationen für das Element hat, wird er diese Größe beibehalten, wenn das Element wieder außerhalb des Bildschirms scrollt, und die erinnerte Größe für Layout-Berechnungen anstelle des Platzhalterwertes verwenden.
Der Vorteil ist, dass der Browser die Inhaltselemente nicht ständig rendern muss, um ihre Größe zu berechnen, was besonders nützlich ist, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

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

- Die ersten beiden Kästchen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, sodass beim Einblenden des Layouts keine Veränderung der Scrollleiste oder der Position des Scrollens zu sehen ist.

- Die dritte und vierte Box haben eine riesige intrinsische Größe, daher ist das anfängliche Layout, das der Browser berechnet hat, viel zu groß, und wir haben diese Boxen kleiner gemacht, damit es offensichtlich ist, wann Sie einen Punkt erreicht haben, der eine drastische Layoutänderung erzwingt.

  Wenn die dritte und vierte Box in Sichtweite scrollen, wird die Größe neu berechnet, wodurch die Box und ihr übergeordnetes Element weniger hoch werden.
  Der Effekt ist, dass der Scroller die Seite hinunterspringt (wir sind im Wesentlichen weiter durch die Box gescrollt, als wir geschätzt hatten) und der Scroller ist länger, weil die gesamte Seite weniger hoch ist, als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, sodass sie eine geschätzte Größe von Null haben.
  Wenn sie in Sichtweite scrollen, werden die Größe des Elements und seines übergeordneten Elements neu berechnet, um viel größer zu sein, sodass der Scroller in der Größe abnimmt und sich die Leiste nach oben bewegt.

Nach dem Scrollen bis ganz nach unten können Sie anschließend reibungslos nach oben und unten scrollen, da durch die Verwendung von `content-visibility: auto` die tatsächliche gerenderte Größe des Elements für das nächste Mal, wenn es angezeigt wird, gespeichert wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` auf ein Element zu ändern, um die Wirkung der verschiedenen Einstellungen zu beobachten.

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

Der untenstehende Code fügt dem enthaltenen Element basierend auf den ausgewählten Optionen Stile hinzu und entfernt sie.

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

Das HTML definiert zwei Tasten, ein enthaltenes Element, das der Beschränkung über die Eigenschaft `content-visibility` unterliegt.

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

Verwenden Sie die Auswahlen, um die angegebenen Stile auf das enthaltende `div`-Element anzuwenden.
Beachten Sie, dass, wenn `content-visibility` `visible` oder `auto` ist, das Ändern von `contain-intrinsic-size` keinen Unterschied macht.
Wenn jedoch der Inhalt verborgen ist, kollabiert ein `contain-intrinsic-size` von `none` das übergeordnete Element, als hätte sein Kind-Element keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwenden von CSS containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)
- Modul [CSS containment](/de/docs/Web/CSS/CSS_containment)
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Renderleistung verbessert](https://web.dev/articles/content-visibility) über web.dev (2020)
