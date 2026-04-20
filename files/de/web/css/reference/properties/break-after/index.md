---
title: "`break-after` CSS property"
short-title: break-after
slug: Web/CSS/Reference/Properties/break-after
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`break-after`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionenwechsel nach einer generierten Box verhalten sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after`-Wert des vorherigen Elements, dem {{cssxref("break-before")}}-Wert des nächsten Elements und dem {{cssxref("break-inside")}}-Wert des enthaltenden Elements.

Um zu bestimmen, ob ein Umbruch vorgenommen werden muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Umbrüche zutrifft, wird der Wert des Elements genommen, das zuletzt im Fluss steht (d.h. der `break-before`-Wert hat Vorrang vor dem `break-after`-Wert, der seinerseits Vorrang vor dem `break-inside`-Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Umbruch-vermeiden-Wert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird ein solcher Umbruch an dieser Stelle nicht vorgenommen.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid`-Wert aufgelöst werden.

### Werte

#### Allgemeine Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt jedoch nicht das Einfügen eines Umbruchs (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `avoid`
  - : Vermeidet das Einfügen eines Umbruchs (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Die Art dieses Umbruchs entspricht dem unmittelbar umgebenden Fragmentierungskontext. Wenn wir uns in einem Multi-Column-Container befinden, würde er einen Spaltenumbruch erzwingen, in paginierten Medien (jedoch nicht in einem Multi-Column-Container) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Durchbricht alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Multi-Column-Container, der sich in einem Seitencontainer befindet, würde daher einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrücken positioniert ist oder die Rückseite der Seite im Duplexdruck.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrücken positioniert ist oder die Vorderseite der Seite im Duplexdruck.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts verlaufenden Buch oder eine linke Seite in einem von rechts nach links verlaufenden Buch.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts verlaufenden Buch oder eine rechte Seite in einem von rechts nach links verlaufenden Buch.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Regionenumbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionenumbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Regionenumbruch direkt nach der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}}-Eigenschaft von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie beabsichtigt funktionieren. Ein Teil der Werte sollte wie folgt aliased werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always`-Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher wird das Aliasing auf `page` und nicht auf den `always`-Wert in der Level-4-Spezifikation vorgenommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### In ordentliche Spalten aufteilen

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das sich über alle Spalten erstreckt (erreicht durch `column-span: all`) sowie eine Reihe von `<h2>`s und Absätzen, die unter Verwendung von `column-width: 200px` in mehreren Spalten angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze etwas unordentlich angeordnet, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-after: column` auf die `<p>`-Elemente angewendet, um nach jedem Element einen Spaltenumbruch zu erzwingen, wodurch schließlich ein `<h2>` ordentlich am oberen Ende jeder Spalte steht.

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
- [Boxen mit CSS-Fragmentierung brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
