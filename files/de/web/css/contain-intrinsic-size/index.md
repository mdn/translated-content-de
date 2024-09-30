---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
l10n:
  sourceCommit: 9aff58ba641ce676db1ae5a1955ed6ef81cbc718
---

{{CSSRef}}

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment) unterliegt.

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Folgende Werte können für die `contain-intrinsic-size` Eigenschaft angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in der angegebenen Dimension.
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in der angegebenen Dimension.
- `auto [<length> | none]`
  - : Ein gespeicherter Wert der "normal gerenderten" Elementgröße, falls vorhanden, und wenn das Element seine Inhalte überspringt (beispielsweise, wenn es nicht im Sichtbereich ist); andernfalls der angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wenn feste Längen von `0px` anders verhalten als `none` (wie in Mehrspalten- oder Gitterlayouts).

Wird ein Wert als Schlüsselwort, Länge oder ein `auto [<length> | none]`-Paar angegeben, gilt er sowohl für Breite als auch Höhe.

Es können zwei Längenwerte angegeben werden, die in dieser Reihenfolge für Breite und Höhe gelten.
Wenn zwei `auto [<length> | none]`-Paare angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/contain) und [`content-visibility`](/de/docs/Web/CSS/content-visibility).

Größenbeschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als ob es eine feste Größe hätte, was unnötige Reflows verhindert, indem das Neu-Renden von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (und so die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente so, als hätten sie keine Inhalte, und kann das Layout auf die gleiche Weise zusammenklappen lassen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-size` Eigenschaft ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Größe für das Layout verwendet wird.

Der Wert `auto <length>` erlaubt es, die Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Länge zu verwenden, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es Elementen außerhalb des Sichtbereichs mit [`content-visibility: auto`](/de/docs/Web/CSS/content-visibility), von der Größenbeschränkung zu profitieren, ohne dass Entwickler so präzise in ihren Schätzungen der Elementgröße sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

In Gitter- und Mehrspaltenlayouts wird eine explizite Größe anders behandelt als eine implizite inhaltsbasierte Höhe.
Elemente könnten sich erheblich anders layouten als sie es getan hätten, wären sie einfach mit Inhalt bis zu dieser Höhe gefüllt gewesen.
Der Wert `auto none` erlaubt es dem Element, auf `contain-intrinsic-size: none` zurückzufallen, falls kein gespeicherter Wert existiert, was dem Element ermöglicht, layoutet zu werden, als hätte es keine Inhalte. Dies ist fast immer der bevorzugte Ansatz gegenüber der Festlegung auf 0px als intrinsische Größe in Gitter- und Mehrspaltenlayouts, wo enthaltene Elemente ihre Eltern überschreiten können und zu unerwarteten Seitengestaltungen führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von auto-Wert-Paaren für intrinsische Größe

Dieses Beispiel zeigt `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none` in einem Layout, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch falsche Schätzungen ihrer intrinsischen Größe haben.
Durch die Verwendung von `content-visibility: auto` wird das Rendern von Elementen übersprungen, wenn sie nicht im Sichtbereich sind. Diese Eigenschaft eignet sich gut zur Kombination mit `contain-intrinsic-size`, um die Renderleistung zu erhöhen und [Reflows](/de/docs/Glossary/Reflow) zu minimieren.

Das Wertpaar `contain-intrinsic-size: auto 500px` weist den Browser an, 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element zu verwenden, wenn es außerhalb des Sichtbereichs ist und die Seite gelayoutet wird.
Wenn der Benutzer zum Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte.
Wenn es einen Unterschied zwischen der Platzhalter- und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit begleitenden Änderungen an der Position der Seitenleiste.

Hat der Browser einmal tatsächliche Größeninformationen für das Element, wird er diese Größe speichern, wenn das Element erneut gescrollt wird, und die gespeicherte Größe für Layoutberechnungen anstelle des Platzhalterwerts verwenden.
Der Vorteil ist, dass der Browser nicht wiederholt die Elementinhalte rendern muss, um deren Größe zu berechnen, und dies ist besonders nützlich, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

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

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, sodass beim Sichtbarwerden keine Änderung an der Bildlaufleiste oder der Scrollposition zu sehen ist.

- Die dritte und vierte Boxen haben eine riesige intrinsische Größe, daher ist das anfängliche Layout, das der Browser berechnet hat, viel zu groß, und wir haben diese Boxen kleiner gemacht, damit es offensichtlich ist, wenn sie drastische Layoutänderungen erzwingen.

  Wenn die dritte und vierte Box in den Sichtbereich scrollt, wird die Größe neu berechnet, wodurch die Box und ihr Elternteil weniger hoch werden.
  Der Effekt ist, dass der Scroller nach unten springt (wir sind effektiv weiter durch die Box gescrollt, als wir geschätzt hatten) und der Scroller ist länger, weil die gesamte Seite weniger hoch ist, als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, also haben sie eine null geschätzte Größe.
  Wenn sie in den Sichtbereich scrollen, werden die Größe des Elements und seines Elternteils so neu berechnet, dass sie viel größer werden, sodass der Scroller in der Größe abnimmt und die Leiste nach oben bewegt.

Nach dem Scrollen bis zum Ende können Sie anschließend reibungslos auf- und abscrollen, da `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für das nächste Mal speichert, wenn es angezeigt wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` eines Elements zu ändern, um den Effekt der verschiedenen Einstellungen zu beobachten.

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

Der folgende Code fügt dem enthaltenen Element basierend auf den ausgewählten Optionen Stile hinzu oder entfernt diese.

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

Das HTML definiert zwei Schaltflächen, ein enthaltenes Element, das durch die `content-visibility` Eigenschaft der Beschränkung unterliegt.

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

Verwenden Sie die Selektoren, um die angegebenen Stile auf das enthaltende `div`-Element anzuwenden.
Beachten Sie, dass bei `content-visibility` `visible` oder `auto`, `contain-intrinsic-size` ändern keinen Unterschied macht.
Wenn jedoch der Inhalt verborgen ist, lässt eine `contain-intrinsic-size` von `none` das Elternelement zusammenklappen, als hätte dessen Kindelement keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS-Containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment)
- [CSS-Containment](/de/docs/Web/CSS/CSS_containment) Modul
- [`content-visibility`: Die neue CSS-Eigenschaft, die Ihre Renderleistung verbessert](https://web.dev/articles/content-visibility) über web.dev (2020)
