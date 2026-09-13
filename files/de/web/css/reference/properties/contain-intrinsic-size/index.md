---
title: "`contain-intrinsic-size` CSS-Eigenschaft"
short-title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element der [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}

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
  - : Ein gespeicherter Wert der "normal gerenderten" Elementgröße, falls vorhanden, und das Element seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wo `0px` feste Längen sich anders verhalten als `none` (wie bei Mehrspalten- oder Raster-Layouts).

Wenn ein Wert als Schlüsselwort, eine Länge oder ein `auto [<length> | none]` Paar angegeben wird, gilt er für sowohl Breite als auch Höhe.

Zwei Längenwerte können angegeben werden, die in dieser Reihenfolge für die Breite bzw. Höhe gelten.
Wenn zwei `auto [<length> | none]` Paare angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größenbeschränkung auslösen können, wie [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größenbeschränkung ermöglicht es einem User-Agent, ein Element so zu gestalten, als hätte es eine feste Größe, indem unnötige Reflows verhindert werden, indem das erneute Rendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzererfahrung verbessert).
Standardmäßig behandelt die Größenbeschränkung Elemente, als hätten sie keine Inhalte, und kann das Layout so zusammenfallen lassen, als hätten die Inhalte keine Breite oder Höhe.
Die `contain-intrinsic-size`-Eigenschaft ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Länge verwendet wird, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es, dass Elemente außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größenbeschränkung profitieren, ohne dass Entwickler so präzise ihre Schätzungen der Elementgröße vornehmen müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

In Grid- und Mehrspaltenlayouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe.
Elemente könnten erheblich anders gestaltet sein, als wenn sie einfach mit Inhalten bis zu dieser Höhe gefüllt wären.
Der Wert `auto none` ermöglicht es dem Element auf `contain-intrinsic-size: none` zurückzufallen, wenn kein gespeicherter Wert existiert, was es dem Element erlaubt, so gestaltet zu werden, als hätte es keine Inhalte. Dies wird fast immer bevorzugt, anstatt `0px` als intrinsische Größe in Grid- und Mehrspaltenlayouts festzulegen, wo enthaltene Elemente ihre Eltern überlaufen können und zu unerwarteten Layoutänderungen der Seite führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Auto-Wertepaaren für die intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none`, indem ein Layout verwendet wird, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch falsche Schätzungen der intrinsischen Größe aufweisen.
Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie außerhalb des Bildschirms sind, daher ist diese Eigenschaft ein guter Kandidat, um mit `contain-intrinsic-size` kombiniert zu werden, um die Rendering-Leistung zu verbessern und {{Glossary("Reflow", "Reflows")}} zu minimieren.

Das `contain-intrinsic-size: auto 500px` Wertepaar sagt dem Browser, 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element zu verwenden, wenn es außerhalb des Bildschirms ist und die Seite gestaltet wird.
Wenn der Benutzer zu dem Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte.
Wenn es einen Unterschied zwischen dem Platzhalter und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit begleitenden Änderungen der Position der Seitenleiste.

Sobald der Browser tatsächliche Größeninformationen für das Element hat, speichert er diese Größe, wenn das Element wieder außerhalb des Bildschirms scrollt, und verwendet die gespeicherte Größe für Layoutberechnungen anstelle des Platzhalterwerts.
Der Vorteil ist, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um seine Größe zu berechnen, was besonders nützlich ist, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

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

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, sodass beim Einblenden in den Anzeigebereich das Layout neu berechnet wird, jedoch keine Änderung in der Scrollleiste oder der Scrollposition zu sehen ist.

- Die dritte und vierte Box haben eine riesige intrinsische Größe, sodass das anfängliche Layout, das der Browser berechnet hat, viel zu groß ist, und wir haben diese Boxen kleiner gemacht, damit es offensichtlich ist, wenn Sie einen Punkt erreichen, der eine drastische Layoutänderung erzwingt.

  Wenn die dritte und vierte Box in den Anzeigebereich scrollen, wird die Größe neu berechnet, wodurch die Box und ihr Elternteil weniger hoch werden.
  Der Effekt ist, dass der Scroller nach unten auf der Seite springt (wir sind effektiv weiter durch die Box gescrollt, als wir geschätzt haben), und der Scroller ist länger, da die gesamte Seite niedriger ist, als wir geschätzt haben.

- Die letzten Boxen haben `auto none`, sodass sie eine geschätzte Größe von Null haben.
  Wenn sie in den Anzeigebereich scrollen, wird die Größe des Elements und seines Elternteils angepasst, um viel größer zu sein, sodass der Scroller in der Größe abnimmt und die Leiste nach oben verschoben wird.

Nachdem Sie ganz nach unten gescrollt haben, können Sie anschließend reibungslos nach oben und unten scrollen, da durch die Verwendung von `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für die nächste Anzeigemal gespeichert wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` auf einem Element zu modifizieren, um den Effekt der verschiedenen Einstellungen zu beobachten.

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

Der untenstehende Code fügt Stile hinzu und entfernt Stile vom enthaltenen Element basierend auf den ausgewählten Optionen.

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

Das HTML definiert zwei Buttons, ein Container-Element, das durch die `content-visibility`-Eigenschaft der Beschränkung unterliegt.

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
Beachten Sie, dass bei `content-visibility` auf `visible` oder `auto`, das Ändern von `contain-intrinsic-size` keinen Unterschied macht.
Wenn der Inhalt jedoch ausgeblendet ist, wird bei `contain-intrinsic-size` von `none` das Elternelement so zusammengeklappt, als hätte sein Kindelement keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS Containment](/de/docs/Web/CSS/Guides/Containment/Using)
- [CSS Containment](/de/docs/Web/CSS/Guides/Containment) Modul
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) über web.dev (2020)
