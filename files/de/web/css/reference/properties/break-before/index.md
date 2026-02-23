---
title: break-before
slug: Web/CSS/Reference/Properties/break-before
l10n:
  sourceCommit: fb718e7db3758da4e74f74c72ac425c848ad7023
---

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche vor einer generierten Box behandelt werden sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

{{InteractiveExample("CSS Demo: break-before")}}

```css interactive-example-choice
break-before: auto;
```

```css interactive-example-choice
break-before: page;
```

```html interactive-example
<div>
  <p>
    The effect of this property can be noticed when the document is being
    printed or a preview of a print is displayed.
  </p>
  <button id="print-btn">Show Print Preview</button>
  <div class="box-container">
    <div class="box">Content before the property</div>
    <div class="box" id="example-element">Content with 'break-before'</div>
    <div class="box">Content after the property</div>
  </div>
</div>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
});
```

## Syntax

```css
/* Generic break values */
break-before: auto;
break-before: avoid;
break-before: always;
break-before: all;

/* Page break values */
break-before: avoid-page;
break-before: page;
break-before: left;
break-before: right;
break-before: recto;
break-before: verso;

/* Column break values */
break-before: avoid-column;
break-before: column;

/* Region break values */
break-before: avoid-region;
break-before: region;

/* Global values */
break-before: inherit;
break-before: initial;
break-before: revert;
break-before: revert-layer;
break-before: unset;
```

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}}-Wert des vorherigen Elements, dem `break-before`-Wert des nächsten Elements und dem {{cssxref("break-inside")}}-Wert des umschließenden Elements.

Um zu bestimmen, ob ein Umbruch durchgeführt werden muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column`, oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Werte einen solchen Umbruch darstellt, wird der des Elements genommen, das zuletzt im Fluss erscheint (d.h. der `break-before`-Wert hat Vorrang vor dem `break-after`-Wert, der wiederum Vorrang vor dem `break-inside`-Wert hat).
2. Wenn einer der drei betreffenden Werte ein _Vermeide-Umbruch-Wert_ ist (`avoid`, `avoid-page`, `avoid-region`, oder `avoid-column`), wird an diesem Punkt kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die sich in einem entsprechenden `avoid`-Wert auflösen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt aber nicht, dass ein beliebiger Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox eingefügt wird.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox.
- `always`
  - : Erzwingt einen Seitenumbruch direkt vor der Hauptbox. Der Typ dieses Umbruchs entspricht dem unmittelbar umschließenden Fragmentierungskontext. Wenn wir uns in einem Multicol-Container befinden, wird ein Spaltenumbruch erzwungen, innerhalb paginierter Medien (jedoch nicht innerhalb eines Multicol-Containers) ein Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt vor der Hauptbox und durchbricht alle möglichen Fragmentierungskontexte. Ein Umbruch innerhalb eines Multicol-Containers, der sich innerhalb eines Seitencontainers befindet, würde somit einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchswerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt vor der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die sich auf der linken Seite des Buchrückens befindet oder die Rückseite der Seite im Duplexdruck.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die sich auf der rechten Seite des Buchrückens befindet oder die Vorderseite der Seite im Duplexdruck.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem Links-nach-Rechts-Spread oder eine linke Seite in einem Rechts-nach-Links-Spread.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem Links-nach-Rechts-Spread oder eine rechte Seite in einem Rechts-nach-Links-Spread.)

#### Spaltenumbruchswerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt vor der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor der Hauptbox.

#### Regionsumbruchswerte

- `avoid-region`
  - : Vermeidet jeden Regionsumbruch direkt vor der Hauptbox.
- `region`
  - : Erzwingt einen Regionsumbruch direkt vor der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}}-Eigenschaft von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Unterset von Werten sollte wie folgt als Alias verwendet werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch implementiert und nicht als Spaltenumbruch. Daher erfolgt der Alias zu `page`, anstatt des `always` Werts in der Level-4-Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Saubere Spaltenaufteilung

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, welches alle Spalten überspannt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig waren die Unterüberschriften und Absätze eher unordentlich angeordnet, da die Überschriften nicht einheitlich platziert waren. Wir haben jedoch `break-before: column` auf die `<h2>` Elemente angewendet, um vor jedem ein Spaltenumbruch zu erzwingen, was bedeutet, dass Sie am Anfang jeder Spalte ein sauberes `<h2>` haben.

#### HTML

```html
<article>
  <h1>Main heading</h1>

  <h2>Subheading</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
    fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec
    lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus.
    Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque
    dapibus, eu lacinia lectus dictum.
  </p>

  <h2>Subheading</h2>

  <p>
    Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras
    suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur
    a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non
    vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie
    nec nisi.
  </p>

  <h2>Subheading</h2>

  <p>
    Vivamus eleifend metus vitae neque placerat, eget interdum elit mattis.
    Donec eu vulputate nibh. Ut turpis leo, malesuada quis nisl nec, volutpat
    egestas tellus.
  </p>

  <h2>Subheading</h2>

  <p>
    In finibus viverra enim vel suscipit. Quisque consequat velit eu orci
    malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam
    risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl,
    sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.
  </p>
</article>
```

#### CSS

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
  letter-spacing: 2px;
  column-span: all;
}

h2 {
  font-size: 1.2rem;
  color: red;
  letter-spacing: 1px;
  break-before: column;
}

p {
  line-height: 1.5;
}

article {
  column-width: 200px;
  gap: 20px;
}
```

### Ergebnis

{{EmbedLiveSample('Breaking_into_neat_columns', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Kästen mit CSS-Fragmentierung brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
