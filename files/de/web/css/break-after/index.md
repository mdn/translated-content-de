---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`break-after`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionenwechsel nach einer generierten Box behandelt werden sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (anders ausgedrückt, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after`-Wert des vorherigen Elements, dem {{cssxref("break-before")}}-Wert des nächsten Elements und dem {{cssxref("break-inside")}}-Wert des umschließenden Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer von ihnen ein solcher Umbruch ist, wird derjenige des Elements genommen, das zuletzt im Fluss erscheint (das heißt, der `break-before`-Wert hat Vorrang vor dem `break-after`-Wert, der wiederum Vorrang vor dem `break-inside`-Wert hat).
2. Wenn einer der drei betreffenden Werte ein _Vermeidungs-Umbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird kein solcher Umbruch an diesem Punkt angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die sich auf einen entsprechenden `avoid`-Wert auflösen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt jedoch nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Die Art dieses Umbruchs entspricht dem unmittelbar umgebenden Fragmentierungskontext. Wenn wir uns innerhalb eines Multicol-Containers befinden, würde es einen Spaltenumbruch erzwingen, innerhalb paginierter Medien (aber nicht innerhalb eines Multicol-Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Bricht durch alle möglichen Fragmentierungskontexte. Ein Umbruch innerhalb eines Multicol-Containers, der sich innerhalb eines Seitencontainers befand, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet einen Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite im Duplexdruck platziert ist.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite im Duplexdruck platziert ist.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Rectoseite macht. (Eine Rectoseite ist eine rechte Seite in einer links-nach-rechts-Ausbreitung oder eine linke Seite in einer rechts-nach-links-Ausbreitung.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Versoseite macht. (Eine Versoseite ist eine linke Seite in einer links-nach-rechts-Ausbreitung oder eine rechte Seite in einer rechts-nach-links-Ausbreitung.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet einen Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Regionenabbruchwerte

- `avoid-region`
  - : Vermeidet einen Regionenabbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Regionenabbruch direkt nach der Hauptbox.

## Seitenumbruch-Aliasse

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}}-Eigenschaft von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Unterset von Werten sollte wie folgt als Alias verwendet werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always`-Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Aliasbildung zu `page`, anstatt zum `always`-Wert in der Level-4-Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### In ordentliche Spalten aufteilen

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das alle Spalten überspannt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`-Elementen und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig waren die Zwischenüberschriften und Absätze eher unordentlich angeordnet, weil die Überschriften nicht einheitlich platziert waren. Wir haben jedoch `break-after: column` auf die `<p>`-Elemente angewendet, um einen Spaltenumbruch nach jedem zu erzwingen, was dazu führt, dass ein `<h2>` ordentlich am oberen Rand jeder Spalte steht.

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

- [Lernen: Mehrspaltenlayout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxes mit CSS-Fragmentierung aufbrechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
