---
title: CSS-Eigenschaft `contain-intrinsic-size`
short-title: contain-intrinsic-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`contain-intrinsic-size`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe eines Elements fest, die ein Browser für das Layout verwendet, wenn das Element einer [Größenbeschränkung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment) unterliegt.

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Für die Eigenschaft `contain-intrinsic-size` können folgende Werte angegeben werden:

- `none`
  - : Das Element hat keine intrinsische Größe in den angegebenen Dimensionen.
- `<length>`
  - : Das Element hat die angegebene {{cssxref("&lt;length&gt;")}} in den angegebenen Dimensionen.
- `auto [<length> | none]`
  - : Ein gemerkter Wert der "normal gerenderten" Elementgröße, falls vorhanden, und das Element überspringt seine Inhalte (zum Beispiel, wenn es außerhalb des Bildschirms ist); andernfalls die angegebene `<length>`.
    Das Schlüsselwort `none` kann anstelle von `<length>` verwendet werden, wenn `0px` feste Längen sich anders verhalten als `none` (z.B. in Multi-Spalten- oder Gitterlayouts).

Wenn ein Wert als Schlüsselwort, Länge oder als `auto [<length> | none]`-Paar angegeben wird, gilt er sowohl für die Breite als auch für die Höhe.

Es können zwei Längenwerte angegeben werden, die in dieser Reihenfolge auf Breite und Höhe angewendet werden. Wenn zwei `auto [<length> | none]`-Paare angegeben werden, gilt das erste Paar für die Breite und das zweite für die Höhe.

## Beschreibung

Die Eigenschaft wird häufig zusammen mit Elementen angewendet, die Größenbeschränkungen auslösen können, wie zum Beispiel [`contain: size`](/de/docs/Web/CSS/Reference/Properties/contain) und {{cssxref("content-visibility")}}.

Größenbeschränkungen ermöglichen es einem Benutzeragenten, einem Element ein Layout zuzuweisen, als ob es eine feste Größe hätte, um unnötige Neuberechnungen zu verhindern, indem das Neurendern von Kindelementen zur Bestimmung der tatsächlichen Größe vermieden wird (was die Benutzerfreundlichkeit verbessert). Standardmäßig behandeln Größenbeschränkungen Elemente, als ob sie keine Inhalte hätten, und das Layout kann in gleicher Weise zusammenbrechen, als hätten die Inhalte keine Breite oder Höhe. Die Eigenschaft `contain-intrinsic-size` ermöglicht es Autoren, einen geeigneten Wert anzugeben, der als Größe für das Layout verwendet werden soll.

Der Wert `auto <length>` ermöglicht es, die Größe des Elements zu speichern, wenn das Element jemals "normal gerendert" (mit seinen Kindelementen) wurde, und dann anstelle der angegebenen Länge zu verwenden, wenn das Element seine Inhalte überspringt. Dies ermöglicht es Elementen außerhalb des Bildschirms mit [`content-visibility: auto`](/de/docs/Web/CSS/Reference/Properties/content-visibility), von Größenbeschränkungen zu profitieren, ohne dass Entwickler so präzise bei der Schätzung der Elementgröße sein müssen. Der gemerkte Wert wird nicht benutzt, wenn die Kindelemente gerendert werden (wenn die Größenbeschränkung aktiviert ist, wird die `<length>` verwendet).

In Gitter- und Multi-Spalten-Layouts wird eine explizite Größe anders behandelt als eine implizite, inhaltsbasierte Höhe. Elemente könnten viel anders angeordnet werden, als wären sie einfach mit Inhalt bis zu dieser Höhe gefüllt. Der Wert `auto none` ermöglicht es, dass das Element auf `contain-intrinsic-size: none` zurückfällt, wenn kein gemerkter Wert existiert, was das Layout des Elements so gestaltet, als hätte es keine Inhalte. Dies wird fast immer bevorzugt gegenüber der Einstellung von 0px als intrinsische Größe in Gitter- und Multi-Spalten-Layouts, wo enthaltene Elemente über ihre Eltern hinausreichen können und zu unerwarteten Seitengestaltungen führen können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Nutzung von Auto-Wertpaaren für intrinsische Größe

Dieses Beispiel zeigt `contain-intrinsic-size: auto <length>` und `contain-intrinsic-size: auto none`, verwendet ein Layout, in dem viele Elemente vertikal angezeigt werden, die sowohl genaue als auch fehlerhafte Schätzungen der intrinsischen Größe haben. Die Verwendung von `content-visibility: auto` überspringt das Rendern von Elementen, wenn sie außerhalb des Bildschirms sind, sodass diese Eigenschaft ein guter Kandidat ist, um mit `contain-intrinsic-size` kombiniert zu werden, um die Rendering-Performance zu verbessern und {{Glossary("Reflow", "Neuberechnungen")}} zu minimieren.

Das Wertpaar `contain-intrinsic-size: auto 500px` teilt dem Browser mit, dass 500px als eine Art 'Platzhalter'-Größe (Breite und Höhe) für das Element verwendet werden sollen, wenn es außerhalb des Bildschirms ist und die Seite gestaltet wird. Wenn der Benutzer zum Element scrollt und es angezeigt werden muss, berechnet der Browser die tatsächliche Größe des Elements und seiner Inhalte. Wenn es einen Unterschied zwischen dem Platzhalter und der berechneten Größe gibt, könnte dies ein neues Layout erzwingen, mit begleitenden Änderungen an der Position der Seitenleiste.

Sobald der Browser tatsächliche Größeninformationen für das Element hat, speichert es diese Größe, wenn das Element erneut außerhalb des Bildschirms scrollt, und verwendet die gespeicherte Größe für Layoutberechnungen anstelle des Platzhalterwerts. Der Vorteil ist, dass der Browser nicht wiederholt die Inhalte des Elements rendern muss, um seine Größe zu berechnen, und ist besonders nützlich, wenn die Inhalte komplex sind oder von Netzwerkressourcen oder JavaScript abhängen.

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

- Die ersten beiden Boxen haben eine intrinsische Größe, die ihrer tatsächlichen Größe entspricht, sodass das Layout neu berechnet wird, wenn sie in den Sichtbereich kommen, wir aber keine Änderungen am Scrollbalken oder der Scrollposition sehen.

- Die dritte und vierte Box haben eine riesige intrinsische Größe, sodass das ursprüngliche Layout, das der Browser berechnet hat, viel zu groß ist, und wir haben diese Boxen kleiner gemacht, damit es offensichtlich ist, wenn Sie einen Punkt erreicht haben, der eine drastische Layout-Änderung erzwingt.

  Wenn die dritte und vierte Box in den Sichtbereich scrollen, wird die Größe neu berechnet, wodurch die Box und ihr Elternteil weniger hoch werden. Der Effekt ist, dass der Scroller die Seite hinunter springt (wir haben effektiv weiter durch die Box gescrollt als wir geschätzt hatten) und der Scroller ist länger, da die gesamte Seite weniger hoch ist als wir geschätzt hatten.

- Die letzten Boxen haben `auto none`, sodass sie eine geschätzte Größe von null haben. Wenn sie in den Sichtbereich scrollen, wird die Größe des Elements und seines Elternteils auf viel größer neu berechnet, sodass der Scroller kleiner wird und die Leiste nach oben bewegt.

Nachdem Sie bis ganz nach unten gescrollt haben, können Sie anschließend reibungslos nach oben und unten scrollen, da die Verwendung von `content-visibility: auto` die tatsächliche gerenderte Größe des Elements für das nächste Mal speichert, wenn es angezeigt wird.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Festlegen der intrinsischen Größe

Dieses Beispiel bietet Auswahllisten, die verwendet werden können, um `contain-intrinsic-size`, `content-visibility` und `contain` eines Elements zu ändern, um die Wirkung der verschiedenen Einstellungen zu beobachten.

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

Der untenstehende Code fügt Stile zum umgebenden Element hinzu und entfernt Stile von diesem basierend auf den ausgewählten Optionen.

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

Das HTML definiert zwei Schaltflächen, ein Container-Element, das der Umschließung über die Eigenschaft `content-visibility` unterliegt.

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

Verwenden Sie die Selektoren, um die angegebenen Stile auf das umgebende `div`-Element anzuwenden. Beachten Sie, dass wenn `content-visibility` auf `visible` oder `auto` eingestellt ist, eine Änderung des `contain-intrinsic-size` keinen Unterschied macht. Wenn der Inhalt jedoch ausgeblendet ist, führt ein `contain-intrinsic-size` von `none` zum Kollabieren des Elternelements, als hätte sein Kindelement keine Größe.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- [Verwendung von CSS-Einschließung](/de/docs/Web/CSS/Guides/Containment/Using)
- [CSS-Einschließungsmodul](/de/docs/Web/CSS/Guides/Containment)
- [`content-visibility`: die neue CSS-Eigenschaft, die Ihre Rendering-Performance steigert](https://web.dev/articles/content-visibility) über web.dev (2020)
