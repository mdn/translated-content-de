---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Bestandteile

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

Für die Eigenschaft `contain-intrinsic-size` können die folgenden Werte angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in der/den angegebenen Dimension(en).
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in der/den angegebenen Dimension(en).
- `auto [<length> | none]`
  - : Ein im Gedächtnis behaltenes Elementgröße im "normal" gerenderten Zustand, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wobei `0px` feste Längen sich anders verhalten als `none` (wie in mehrspaltigen oder Rasterlayouts).

Wenn ein Wert als Schlüsselwort, eine Länge oder ein `auto [<length> | none]`-Paar angegeben wird, gilt er sowohl für die Breite als auch für die Höhe.

Zwei Längenwerte können angegeben werden, die in dieser Reihenfolge für die Breite und Höhe gelten.
Wenn zwei `auto [<length> | none]`-Paare angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbegrenzung auslösen können, wie z.B. [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbegrenzung ermöglicht es einem Benutzeragenten, ein Element so anzuordnen, als ob es eine feste Größe hätte, um unnötige Neulayouts zu verhindern, indem das erneute Rendern von Kinderelementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert). Standardmäßig behandelt die Größenbegrenzung Elemente so, als ob sie keinen Inhalt hätten, und kann das Layout auf die gleiche Weise zusammenklappen lassen, als ob die Inhalte keine Breite oder Höhe hätten. Die Eigenschaft `contain-intrinsic-size` ermöglicht es Autoren, einen geeigneten Wert festzulegen, der als Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` erlaubt es, die Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kinderelementen), und dann anstelle der angegebenen Länge zu verwenden, wenn das Element seine Inhalte überspringt. Dies ermöglicht es, außerhalb des Bildschirms befindlichen Elementen mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility) von der Größenbegrenzung zu profitieren, ohne dass Entwickler bei ihren Schätzungen der Elementgröße genau sein müssen. Der gespeicherte Wert wird nicht verwendet, wenn die Kinderelemente gerendert werden (wenn die Größenbegrenzung aktiviert ist, wird die `<length>` verwendet).

In Raster- und mehrspaltigen Layouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe. Elemente könnten wesentlich anders angeordnet werden, als wenn sie einfach mit Inhalt bis zu dieser Höhe gefüllt wären. Der Wert `auto none` erlaubt es, dass das Element auf `contain-intrinsic-size: none` zurückfällt, wenn kein gespeicherter Wert existiert, wodurch das Element so angeordnet wird, als ob es keinen Inhalt hätte. Dies ist fast immer bevorzugt, anstatt `0px` als intrinsische Größe in Raster- und mehrspaltigen Layouts festzulegen, wo enthaltene Elemente ihre Eltern überfluten könnten und zu unerwarteten Seitenlayouts führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von auto-Wertepaaren für intrinsische Größe

Dieses Beispiel zeigt `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none`, indem ein Layout verwendet wird, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch ungenaue Schätzungen der intrinsischen Größe haben. Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie außerhalb des Bildschirms sind, sodass diese Eigenschaft ein guter Kandidat ist, um mit `contain-intrinsic-size` kombiniert zu werden, um die Renderleistung zu verbessern und {{Glossary("Reflow", "Neulayouts")}} zu minimieren.

Das Wertpaar `contain-intrinsic-size: auto 500px` weist den Browser an, 500px als eine Art 'Platzhalter' Größe (Breite und Höhe) für das Element zu verwenden, wenn es außerhalb des Bildschirms ist und die Seite angeordnet wird. Wenn der Benutzer zu dem Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte. Wenn es eine Differenz zwischen der Platzhaltergröße und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit begleitenden Änderungen an der Seitenleistenposition.

Sobald der Browser echte Größeninformationen für das Element hat, wird er diese Größe merken, wenn das Element erneut vom Bildschirm scrollt, und die gespeicherte Größe für die Layoutberechnungen anstelle des Platzhalterwertes verwenden. Der Vorteil besteht darin, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um dessen Größe zu berechnen, was besonders nützlich ist, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

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

- Die ersten beiden Kästchen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht. Wenn sie ins Sichtfeld kommen, wird das Layout neu berechnet, aber wir sehen keine Veränderung im Scrollbalken oder der Scrollposition.

- Die dritte und vierte Box haben eine enorme intrinsische Größe, sodass das anfängliche Layout, das der Browser berechnet hat, viel zu groß ist, und wir haben diese Boxen verkleinert, damit es offensichtlich ist, wenn ein Punkt erreicht wird, der eine drastische Layoutänderung erzwingt.

  Wenn die dritte und vierte Box ins Sichtfeld gescrollt wird, wird die Größe neu berechnet, wodurch die Box und ihr Elternteil weniger hoch werden.
  Der Effekt ist, dass der Scroller die Seite herunter springt (wir sind effektiv weiter durch die Box gescrollt, als wir geschätzt hatten) und der Scroller länger ist, weil die gesamte Seite weniger hoch ist, als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, daher haben sie keine geschätzte Größe.
  Wenn sie ins Sichtfeld gescrollt werden, wird die Größe des Elements und seines Elternteils neu berechnet, um viel größer zu sein, sodass der Scroller in der Größe abnimmt und die Leiste nach oben bewegt.

Nachdem Sie ganz nach unten gescrollt haben, können Sie anschließend reibungslos nach oben und unten scrollen, da die Verwendung von `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für das nächste Mal, wenn es angezeigt wird, speichert.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Einstellen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` auf einem Element zu modifizieren, um die Wirkung der verschiedenen Einstellungen zu beobachten.

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

Das HTML definiert zwei Buttons und ein Container-Element, das über die Eigenschaft `content-visibility` der Begrenzung unterliegt.

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

Verwenden Sie die Selektoren, um die gegebenen Stile auf das enthaltende `div` Element anzuwenden. Beachten Sie, dass wenn `content-visibility` `visible` oder `auto` ist, das Ändern von `contain-intrinsic-size` keinen Unterschied macht. Wenn der Inhalt jedoch versteckt ist, führt ein `contain-intrinsic-size` von `none` dazu, dass das Elternelement zusammenbricht, als ob sein Kindelement keine Größe hätte.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS-Begrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)
- [CSS-Begrenzungsmodul](/de/docs/Web/CSS/CSS_containment)
- [`content-visibility`: Die neue CSS-Eigenschaft, die Ihre Rendering-Performance steigert](https://web.dev/articles/content-visibility) via web.dev (2020)
