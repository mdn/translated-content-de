---
title: break-after
slug: Web/CSS/Reference/Properties/break-after
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche nach einer generierten Box verhalten sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

{{InteractiveExample("CSS Demo: break-after")}}

```css interactive-example-choice
break-after: auto;
```

```css interactive-example-choice
break-after: page;
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
    <div class="box" id="example-element">Content with 'break-after'</div>
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
break-after: auto;
break-after: avoid;
break-after: always;
break-after: all;

/* Page break values */
break-after: avoid-page;
break-after: page;
break-after: left;
break-after: right;
break-after: recto;
break-after: verso;

/* Column break values */
break-after: avoid-column;
break-after: column;

/* Region break values */
break-after: avoid-region;
break-after: region;

/* Global values */
break-after: inherit;
break-after: initial;
break-after: revert;
break-after: revert-layer;
break-after: unset;
```

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after` Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des umgebenden Elements.

Um festzustellen, ob ein Umbruch erfolgen muss, werden folgende Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehrere solcher Umbrüche vorhanden sind, wird der Wert des Elements genommen, das zuletzt im Fluss erscheint (d. h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, welcher selbst Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Umbruchvermeidungswert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an diesem Punkt kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert aufgelöst werden.

### Werte

#### Generische Umbruch-Werte

- `auto`
  - : Erlaubt, erzwingt aber keinen Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Die Art dieses Umbruchs entspricht dem unmittelbar umgebenden Fragmentierungskontext. Wenn wir uns in einem mehrspaltigen Container befinden, würde es einen Spaltenumbruch erzwingen, in einem Seitenträgermedium (aber nicht in einem mehrspaltigen Container) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Umbrüche durch alle möglichen Fragmentierungskontexte hindurch. Ein Umbruch in einem mehrspaltigen Container, der sich in einem Seitencontainer befand, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruch-Werte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zur linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens platziert wird oder die Rückseite der Seite beim Duplexdruck.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zur rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens platziert wird oder die Vorderseite der Seite beim Duplexdruck.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zur Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts verlaufenden Layout oder eine linke Seite in einem von rechts nach links verlaufenden Layout.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zur Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts verlaufenden Layout oder eine rechte Seite in einem von rechts nach links verlaufenden Layout.)

#### Spaltenumbruch-Werte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Regionen-Umbruch-Werte

- `avoid-region`
  - : Vermeidet jeden Regionen-Umbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Regionen-Umbruch direkt nach der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}} Eigenschaft von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Aliase behandelt werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch umgesetzt. Daher ist das Alias `page` und nicht der `always` Wert in der Level 4 Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufteilung in ordentliche Spalten

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Zwischenüberschriften und Absätze etwas unordentlich angeordnet, weil die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-after: column` auf die `<p>` Elemente angewendet, um nach jedem einen Spaltenumbruch zu erzwingen, was bedeutet, dass Sie am Anfang jeder Spalte ein `<h2>` ordentlich haben.

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
}

p {
  line-height: 1.5;
  break-after: column;
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

- [Lernen: Layout mit mehreren Spalten](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxen mit CSS-Fragmentierung aufbrechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
