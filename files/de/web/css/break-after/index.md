---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: 5eb1c147189824b5d2ff915da1b444aeafd51c6f
---

Die **`break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie Seiten-, Spalten- oder Regionenumbrüche nach einer generierten Box verhalten sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after` Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des umschließenden Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden folgende Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ (`always`, `left`, `right`, `page`, `column` oder `region`) ist, hat dieser Vorrang. Wenn mehr als einer von ihnen ein solcher Umbruch ist, wird derjenige des Elements, das zuletzt im Fluss erscheint, genommen (d.h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Umbruch-vermeidungs-Wert_ (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`) ist, wird an diesem Punkt kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche hinzugefügt werden, falls nötig, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert enden.

### Werte

#### Allgemeine Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt aber nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox eingefügt wird.
- `avoid`
  - : Verhindert, dass ein Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Typ dieses Umbruchs ist der des unmittelbar umgebenden Fragmentierungskontexts. Wenn wir uns in einem Container mit mehreren Spalten befinden, erzwingt dies einen Spaltenumbruch, in paginierten Medien (aber nicht in einem Container mit mehreren Spalten) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Bricht durch alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Container mit mehreren Spalten, der sich in einem Seitencontainer befand, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Verhindert jeden Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die sich auf der linken Seite des Buchrückens befindet oder die Rückseite der Seite im Duplexdruck.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die sich auf der rechten Seite des Buchrückens befindet oder die Vorderseite der Seite im Duplexdruck.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einer von links nach rechts angeordneten Doppelseite oder eine linke Seite in einer von rechts nach links angeordneten Doppelseite.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einer von links nach rechts angeordneten Doppelseite oder eine rechte Seite in einer von rechts nach links angeordneten Doppelseite.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Verhindert jeden Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Regionen-Umbruchwerte

- `avoid-region`
  - : Verhindert jeden Regionen-Umbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Regionen-Umbruch direkt nach der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}} Eigenschaft von Browsern als Alias von `break-after` betrachtet werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias behandelt werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch implementiert und nicht als Spaltenumbruch. Daher erfolgt die Alias-Zuordnung zu `page` und nicht zum `always` Wert in der Level 4 Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufteilen in ordentliche Spalten

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die mit `column-width: 200px` in mehrere Spalten aufgeteilt sind.

Standardmäßig wurden die Unterüberschriften und Absätze ziemlich unordentlich angeordnet, weil die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-after: column` auf die `<p>`-Elemente angewendet, um nach jedem einen Spaltenumbruch zu erzwingen, was bedeutet, dass Sie am Anfang jeder Spalte ein `<h2>` ordentlich erhalten.

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
  font-family: helvetica, arial, sans-serif;
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
- [Kästen mit CSS-Fragmentierung brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
