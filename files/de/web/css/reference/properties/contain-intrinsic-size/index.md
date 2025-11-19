---
title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element der [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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
  - : Das Element hat keine intrinsische Größe in den angegebenen Dimensionen.
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in den angegebenen Dimensionen.
- `auto [<length> | none]`
  - : Ein gespeicherter Wert der "normally rendered" Elementgröße, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des sichtbaren Bereichs liegt); ansonsten die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wo sich feste Längen von `0px` anders als `none` verhalten (z.B. in mehrspaltigen oder Gitterlayouts).

Wenn ein Wert als Schlüsselwort, eine Länge oder ein `auto [<length> | none]`-Paar angegeben wird, gilt es sowohl für die Breite als auch die Höhe.

Es können zwei Längenwerte angegeben werden, die der Reihenfolge nach für Breite und Höhe gelten.
Wenn zwei `auto [<length> | none]`-Paare angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die Größenbeschränkung auslösen können, wie etwa [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility).

Größenbeschränkung ermöglicht es einem Benutzer-Agenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Neueinreichungen vermieden werden, indem das Neurendern von untergeordneten Elementen zur Bestimmung der tatsächlichen Größe vermieden wird (wodurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise zusammenklappen, als ob die Inhalte keine Breite oder Höhe hätten.
Die `contain-intrinsic-size`-Eigenschaft erlaubt es Autoren, einen geeigneten Wert anzugeben, der als Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Größe des Elements zu speichern, wenn das Element jemals "normally rendered" (mit seinen Kindelementen) wird, und dann anstelle der angegebenen Länge zu verwenden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es, dass außerhalb des sichtbaren Bereichs befindliche Elemente mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler so präzise Schätzungen der Elementgröße vornehmen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

In Gitter- und mehrspaltigen Layouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe.
Elemente können wesentlich anders layouten, als wenn sie einfach mit Inhalt bis zu dieser Höhe gefüllt worden wären.
Der Wert `auto none` erlaubt es dem Element, auf `contain-intrinsic-size: none` zurückzufallen, wenn kein gespeicherter Wert existiert, was es dem Element ermöglicht, so layoutet zu werden, als hätte es keine Inhalte. Dies ist fast immer vorzuziehen, anstatt `0px` als intrinsische Größe in Gitter- und mehrspaltigen Layouts zu setzen, wo eingeschlossene Elemente ihre Eltern überschreiten können und dies zu unerwarteten Seitenlayouts führen kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Auto-Wert-Paaren für intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none`, indem ein Layout verwendet wird, bei dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch ungenaue Schätzungen der intrinsischen Größe haben.
Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie außerhalb des sichtbaren Bereichs sind, daher ist diese Eigenschaft ein guter Kandidat, um mit `contain-intrinsic-size` kombiniert zu werden, um die Rendering-Performance zu verbessern und {{Glossary("Reflow", "Neuerstellungen")}} zu minimieren.

Das `contain-intrinsic-size: auto 500px`-Wertpaar gibt dem Browser an, 500px als eine Art "Platzhalter"-Größe (Breite und Höhe) für das Element zu verwenden, wenn es außerhalb des sichtbaren Bereichs ist und die Seite gelayoutet wird.
Wenn der Benutzer zu dem Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte.
Wenn es eine Differenz zwischen dem Platzhalter und der berechneten Größe gibt, könnte dies ein neues Layout erfordern, mit begleitenden Änderungen an der Position der Seitenleiste.

Sobald der Browser tatsächliche Größeninformationen für das Element hat, erinnert er sich an diese Größe, wenn das Element wieder außerhalb des sichtbaren Bereichs scrollt, und verwendet für Layout-Berechnungen anstelle des Platzhalterwerts die gespeicherte Größe.
Der Vorteil ist, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um seine Größe zu berechnen, was besonders nützlich ist, wenn die Inhalte komplex oder von Netzwerkressourcen oder JavaScript abhängig sind.

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

- Die ersten beiden Kästchen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, sodass, wenn sie in den sichtbaren Bereich gelangen, das Layout neu berechnet wird, aber wir keine Veränderung in der Bildlaufleiste oder der Bildlaufposition sehen.

- Die dritte und vierte Box haben eine enorme intrinsische Größe, sodass das anfängliche Layout, das der Browser berechnete, viel zu groß ist, und wir haben diese Boxen verkleinert, damit es offensichtlich wird, wann Sie einen Punkt erreicht haben, der eine drastische Layout-Änderung erzwingt.

  Wenn die dritte und vierte Box in den sichtbaren Bereich scrollen, wird die Größe neu berechnet, wodurch die Box und ihr Elternteil weniger hoch werden.
  Der Effekt ist, dass der Scroller die Seite hinunter springt (wir sind effektiver weiter durch die Box gescrollt, als wir geschätzt hatten) und der Scroller länger wird, da die gesamte Seite niedriger ist, als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, sodass sie eine geschätzte Größe von null haben.
  Wenn sie in den sichtbaren Bereich scrollen, wird die Größe des Elements und seines Elternteils neu berechnet, um viel größer zu werden, sodass der Scroller in der Größe abnimmt und sich die Leiste nach oben bewegt.

Nachdem Sie bis zum Ende nach unten gescrollt haben, können Sie anschließend reibungslos nach oben und unten scrollen, da `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für das nächste Mal, wenn es angezeigt wird, speichert.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, mit denen `contain-intrinsic-size`, `content-visibility` und `contain` an einem Element geändert werden können, um den Effekt der verschiedenen Einstellungen zu beobachten.

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

Der folgende Code fügt Stile hinzu und entfernt Stile vom umgebenden Element basierend auf den ausgewählten Optionen.

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

Das HTML definiert zwei Schaltflächen, ein Containerelement, das über die `content-visibility`-Eigenschaft eingeschränkt wird.

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

Verwenden Sie die Auswahllisten, um die gegebenen Stile auf das umhüllende `div`-Element anzuwenden.
Beachten Sie, dass, wenn `content-visibility` `visible` oder `auto` ist, das Ändern von `contain-intrinsic-size` keinen Unterschied macht.
Ist der Inhalt jedoch versteckt, lässt ein `contain-intrinsic-size` von `none` das Elternelement zusammenbrechen, als ob das Kindelement keine Größe hätte.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS-Einschränkungen](/de/docs/Web/CSS/Guides/Containment/Using)
- [CSS-Einschränkungsmodul](/de/docs/Web/CSS/Guides/Containment)
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Rendering-Performance steigert](https://web.dev/articles/content-visibility) über web.dev (2020)
