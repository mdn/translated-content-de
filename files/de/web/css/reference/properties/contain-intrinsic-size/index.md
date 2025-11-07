---
title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Bestimmende Eigenschaften

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

Für die Eigenschaft `contain-intrinsic-size` können die folgenden Werte angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in der/den angegebenen Dimension(en).
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in der/den angegebenen Dimension(en).
- `auto [<length> | none]`
  - : Ein gespeicherter Wert der "normal gerenderten" Elementgröße, falls vorhanden und das Element seine Inhalte überspringt (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wo `0px` feste Längen sich anders verhalten als `none` (wie zum Beispiel in mehrspaltigen oder Grid-Layouts).

Wenn ein Wert als Schlüsselwort, Länge oder ein `auto [<length> | none]` Paar angegeben wird, gilt er sowohl für Breite als auch Höhe.

Es können zwei Längenwerte angegeben werden, die in dieser Reihenfolge auf die Breite und Höhe angewendet werden.
Wenn zwei `auto [<length> | none]` Paare angegeben werden, gilt das erste Paar für die Breite, das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die eine Größeneinschränkung auslösen können, wie z.B. [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility).

Größeneinschränkung ermöglicht es einem Benutzeragenten, ein Element so zu layouten, als hätte es eine feste Größe, wodurch unnötige Reflows vermieden werden, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (und dadurch die Benutzererfahrung verbessert wird).
Standardmäßig behandelt die Größeneinschränkung Elemente, als hätten sie keine Inhalte und könnte das Layout auf die gleiche Weise kollabieren wie wenn die Inhalte keine Breite oder Höhe hätten.
Die `contain-intrinsic-size` Eigenschaft ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Größe für das Layout verwendet wird.

Der Wert `auto <length>` erlaubt es, die Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" wird (mit seinen Kindelementen), und dann anstelle der angegebenen Länge verwendet wird, wenn das Element seine Inhalte überspringt.
Dies ermöglicht es, dass Elemente außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility) von der Größeneinschränkung profitieren, ohne dass Entwickler in ihren Schätzungen der Elementgröße so präzise sein müssen.
Der gespeicherte Wert wird nicht verwendet, wenn die Kindelemente gerendert werden (wenn die Größeneinschränkung aktiviert ist, wird die `<length>` verwendet).

In Grid- und mehrspaltigen Layouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe.
Elemente könnten wesentlich anders layoutet werden, als wäre es einfach mit Inhalt bis zu dieser Höhe befüllt.
Der Wert `auto none` ermöglicht es, dass das Element auf `contain-intrinsic-size: none` zurückfällt, wenn kein gespeicherter Wert existiert, was dem Element ermöglicht, so layoutet zu werden, als hätte es keine Inhalte. Dies ist fast immer vorzuziehen, als `0px` als intrinsische Größe in Grid- und mehrspaltigen Layouts festzulegen, wo enthaltene Elemente ihre Eltern überlaufen könnten und unerwartete Seitenlayouts zur Folge haben können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von Auto-Werten für die intrinsische Größe

Dieses Beispiel demonstriert `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none`, unter Verwendung eines Layouts, in dem viele Elemente vertikal angezeigt werden, die sowohl genau als auch ungenau die intrinsischen Größenabschätzungen haben.
Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie außerhalb des Bildschirms sind. Daher ist diese Eigenschaft eine gute Kandidatin, um mit `contain-intrinsic-size` kombiniert zu werden, um die Renderleistung zu verbessern und {{Glossary("Reflow", "Reflows")}} zu minimieren.

Das `contain-intrinsic-size: auto 500px` Wert-Paar sagt dem Browser, 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element zu verwenden, wenn es außerhalb des Bildschirms ist und die Seite layoutet wird.
Wenn der Benutzer zu dem Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte.
Wenn es einen Unterschied zwischen der Platzhalter- und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit einhergehenden Änderungen an der Seitenleistenposition.

Sobald der Browser die tatsächliche Größeninformation für das Element hat, wird diese Größe gespeichert, wenn das Element erneut außerhalb des Bildschirms scrollt, und die gespeicherte Größe wird für Layout-Berechnungen anstelle des Platzhalterwerts verwendet.
Der Vorteil ist, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um seine Größe zu berechnen, und ist besonders nützlich, wenn die Inhalte komplex sind oder von Netzwerk-Ressourcen oder JavaScript abhängen.

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

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, sodass, wenn sie in den Sichtbereich kommen, das Layout neu berechnet wird, aber keine Änderung in der Scrollleiste oder der Scrollposition zu sehen ist.

- Die dritte und vierte Box haben eine große intrinsische Größe, sodass das initial berechnete Layout des Browsers viel zu groß ist, und wir diese Boxen kleiner gemacht haben, damit es offensichtlich ist, wann Sie einen Punkt erreicht haben, der eine drastische Layoutänderung erzwingt.

  Wenn die dritte und vierte Box in den Sichtbereich scrollen, wird die Größe neu berechnet, wodurch die Box und ihr Elternteil weniger hoch werden.
  Der Effekt ist, dass der Scroller über die Seite springt (wir sind effektiv weiter durch die Box gescrollt, als wir geschätzt hatten) und der Scroller ist länger, da die gesamte Seite weniger hoch ist, als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, sodass sie eine geschätzte Größe von null haben.
  Wenn sie in den Sichtbereich scrollen, werden die Größe des Elements und seines Elternteils neu berechnet, sodass der Scroller in der Größe abnimmt und sich die Leiste nach oben bewegt.

Nachdem Sie ganz nach unten gescrollt haben, können Sie anschließend reibungslos nach oben und unten scrollen, da `content-visibility: auto` die tatsächlich gerenderte Größe des Elements für das nächste Mal speichert, wenn es angezeigt wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahl-Listen, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` an einem Element zu modifizieren, um die Wirkung der unterschiedlichen Einstellungen zu beobachten.

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

Der untenstehende Code fügt Stile hinzu und entfernt Stile aus dem enthaltenen Element basierend auf den ausgewählten Optionen.

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

Das HTML definiert zwei Schaltflächen, ein enthaltenes Element, das über die `content-visibility`-Eigenschaft einer Einschränkung unterliegt.

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
Wenn der Inhalt jedoch verborgen ist, lässt `contain-intrinsic-size` von `none` das übergeordnete Element so kollabieren, als hätte sein Kindelement keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS-Einschränkung](/de/docs/Web/CSS/Guides/Containment/Using)
- [CSS-Einschränkungsmodul](/de/docs/Web/CSS/Guides/Containment)
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Rendering-Leistung steigert](https://web.dev/articles/content-visibility) via web.dev (2020)
