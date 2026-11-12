---
title: CSS-Eigenschaft `contain-intrinsic-size`
short-title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`contain-intrinsic-size`** legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn für das Element [Größen-Containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) gilt.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}

## Syntax

```css
/* Keyword value */
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

Für die Eigenschaft `contain-intrinsic-size` können die folgenden Werte angegeben werden:

- `none`
  - : Das Element hat in der jeweiligen Dimension keine intrinsische Größe.
- `<length>`
  - : Das Element hat in der jeweiligen Dimension die angegebene {{cssxref("&lt;length&gt;")}}.
- `auto [<length> | none]`
  - : Falls ein gespeicherter Wert für die Größe des „normal gerenderten“ Elements vorhanden ist und der Inhalt des Elements nicht gerendert wird (beispielsweise weil es sich außerhalb des sichtbaren Bereichs befindet), wird dieser Wert verwendet. Andernfalls gilt der angegebene Wert `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wenn sich eine feste Länge von `0px` anders verhält als `none` (etwa in mehrspaltigen Layouts oder Grid-Layouts).

Wird ein einzelner Wert als Schlüsselwort, Länge oder Paar `auto [<length> | none]` angegeben, gilt er sowohl für die Breite als auch für die Höhe.

Es können zwei Längenwerte angegeben werden, die in dieser Reihenfolge für die Breite und die Höhe gelten.
Werden zwei Paare `auto [<length> | none]` angegeben, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig für Elemente verwendet, bei denen Größen-Containment aktiviert werden kann, etwa durch [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größen-Containment ermöglicht es einem User Agent, ein Element so anzuordnen, als hätte es eine feste Größe. Dadurch werden unnötige Neuberechnungen des Layouts vermieden, weil untergeordnete Elemente nicht erneut gerendert werden müssen, um die tatsächliche Größe zu bestimmen. Das verbessert die Benutzererfahrung.
Standardmäßig behandelt Größen-Containment Elemente so, als hätten sie keinen Inhalt. Das Layout kann dadurch auf dieselbe Weise zusammenfallen, als hätte der Inhalt weder Breite noch Höhe.
Mit der Eigenschaft `contain-intrinsic-size` können Autoren einen geeigneten Wert angeben, der beim Layout als Größe verwendet wird.

Der Wert `auto <length>` ermöglicht es, die Größe eines Elements zu speichern, sobald es einmal „normal gerendert“ wurde (mit seinen untergeordneten Elementen). Wenn der Inhalt des Elements später nicht gerendert wird, kann die gespeicherte Größe anstelle der angegebenen Länge verwendet werden.
Dadurch können Elemente außerhalb des sichtbaren Bereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) vom Größen-Containment profitieren, ohne dass Entwickler die Elementgröße besonders genau schätzen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die untergeordneten Elemente gerendert werden. Ist Größen-Containment aktiviert, wird dann `<length>` verwendet.

In Grid- und mehrspaltigen Layouts wird eine explizit angegebene Größe anders behandelt als eine implizite, vom Inhalt abhängige Höhe.
Das Layout von Elementen kann sich erheblich davon unterscheiden, wie es aussähe, wenn sie lediglich bis zu dieser Höhe mit Inhalt gefüllt wären.
Mit dem Wert `auto none` fällt das Element auf `contain-intrinsic-size: none` zurück, wenn kein gespeicherter Wert vorhanden ist. So kann es angeordnet werden, als hätte es keinen Inhalt. In Grid- und mehrspaltigen Layouts ist dies fast immer besser, als `0px` als intrinsische Größe festzulegen: Elemente mit Containment könnten sonst über ihre übergeordneten Elemente hinausragen und zu einem unerwarteten Seitenlayout führen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `auto`-Wertepaare für die intrinsische Größe verwenden

Dieses Beispiel zeigt `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none` anhand eines Layouts mit vielen vertikal angeordneten Elementen, deren intrinsische Größe teils zutreffend und teils falsch geschätzt wird.
Bei `content-visibility: auto` werden Elemente außerhalb des sichtbaren Bereichs nicht gerendert. Deshalb lässt sich diese Eigenschaft gut mit `contain-intrinsic-size` kombinieren, um die Rendering-Leistung zu verbessern und {{Glossary("Reflow", "Neuberechnungen des Layouts")}} zu minimieren.

Das Wertepaar `contain-intrinsic-size: auto 500px` weist den Browser an, beim Layout der Seite für das Element eine Art Platzhaltergröße von 500px (für Breite und Höhe) zu verwenden, solange es sich außerhalb des sichtbaren Bereichs befindet.
Wenn ein Benutzer zum Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seines Inhalts.
Weicht die berechnete Größe von der Platzhaltergröße ab, kann dies eine erneute Layoutberechnung auslösen und dabei auch die Position der Seitenleiste verändern.

Sobald dem Browser die tatsächliche Größe des Elements bekannt ist, merkt er sie sich, wenn das Element erneut aus dem sichtbaren Bereich gescrollt wird. Für spätere Layoutberechnungen verwendet er dann die gespeicherte Größe anstelle des Platzhalterwerts.
Der Vorteil ist, dass der Browser den Inhalt des Elements nicht wiederholt rendern muss, um dessen Größe zu berechnen. Das ist besonders nützlich, wenn der Inhalt komplex ist oder von Netzwerkressourcen oder JavaScript abhängt.

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

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht. Wenn sie in den sichtbaren Bereich gelangen, wird das Layout zwar neu berechnet, aber weder an der Scrollleiste noch an der Scrollposition ist eine Änderung zu erkennen.

- Die dritte und vierte Box haben eine sehr große intrinsische Größe. Deshalb ist das anfänglich vom Browser berechnete Layout viel zu groß. Diese Boxen wurden kleiner gestaltet, damit deutlich wird, wann eine erhebliche Layoutänderung erforderlich ist.

  Wenn die dritte und vierte Box in den sichtbaren Bereich gescrollt werden, wird ihre Größe neu berechnet. Dadurch werden die Boxen und ihr übergeordnetes Element weniger hoch.
  Infolgedessen springt die Scrollposition auf der Seite nach unten (tatsächlich wurde weiter durch die Box gescrollt als geschätzt), und der Schieberegler der Scrollleiste wird länger, weil die gesamte Seite weniger hoch ist als geschätzt.

- Die letzten Boxen verwenden `auto none` und haben daher eine geschätzte Größe von null.
  Wenn sie in den sichtbaren Bereich gescrollt werden, wird die Größe der Elemente und ihres übergeordneten Elements neu berechnet und fällt wesentlich größer aus. Dadurch wird der Schieberegler der Scrollleiste kürzer und bewegt sich auf der Leiste nach oben.

Nachdem Sie ganz nach unten gescrollt haben, können Sie anschließend flüssig nach oben und unten scrollen. Durch `content-visibility: auto` wird die tatsächliche gerenderte Größe eines Elements für die nächste Anzeige gespeichert.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Die intrinsische Größe festlegen

Dieses Beispiel enthält Auswahllisten, mit denen Sie `contain-intrinsic-size`, `content-visibility` und `contain` für ein Element ändern und die Auswirkungen der verschiedenen Einstellungen beobachten können.

#### HTML

Das HTML definiert zwei Schaltflächen und ein Containerelement, für das über die Eigenschaft `content-visibility` Containment gilt.

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

Der folgende Code fügt dem enthaltenden Element abhängig von den ausgewählten Optionen Styles hinzu oder entfernt sie.

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

#### Ergebnis

Verwenden Sie die Auswahllisten, um die angegebenen Styles auf das enthaltende `div`-Element anzuwenden.
Beachten Sie, dass eine Änderung von `contain-intrinsic-size` keine Auswirkungen hat, wenn `content-visibility` den Wert `visible` oder `auto` hat.
Ist der Inhalt dagegen ausgeblendet, führt `contain-intrinsic-size: none` dazu, dass das übergeordnete Element zusammenfällt, als hätte sein untergeordnetes Element keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [CSS-Containment verwenden](/de/docs/Web/CSS/Guides/Containment/Using)
- Modul [CSS-Containment](/de/docs/Web/CSS/Guides/Containment)
- [Die neue CSS-Eigenschaft `content-visibility`, die die Rendering-Leistung verbessert](https://web.dev/articles/content-visibility) auf web.dev (2020)
