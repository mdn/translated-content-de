---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche nach einer generierten Box verhalten sollen. Wenn es keine generierte Box gibt, wird die Eigenschaft ignoriert.

{{InteractiveExample("CSS Demo: break-after")}}

```css interactive-example-choice
break-after: auto;
```

```css interactive-example-choice
break-after: page;
```

```html interactive-example
<section id="default-example">
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
</section>
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

.hide-element {
  display: none;
}
```

```js interactive-example
const btn = document.getElementById("print-btn");
const editorContainer = document.getElementsByClassName(
  "css-editor-container",
)[0];
const exampleHTMLElement = document.getElementById("default-example");

const printableSection = document.createElement("div");
printableSection.setAttribute("id", "printable-section");
printableSection.classList.add("hide-element");
document.body.appendChild(printableSection);

btn.addEventListener("click", () => {
  const exampleContent = exampleHTMLElement.innerHTML;

  editorContainer.classList.add("hide-element");
  printableSection.innerHTML = exampleContent;
  printableSection.classList.remove("hide-element");

  window.print();

  printableSection.classList.add("hide-element");
  printableSection.innerHTML = "";
  editorContainer.classList.remove("hide-element");
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

Jeder mögliche Umbruchspunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after` Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden folgende Regeln angewendet:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Umbruchwerte vorhanden ist, wird der des Elements genommen, das zuletzt im Fluss erscheint (d.h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der seinerseits Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betreffenden Werte ein _Vermeidungsvorgabewert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Nachdem erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einen entsprechenden `avoid` Wert aufgelöst werden.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, aber erzwingt keinen Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `avoid`
  - : Vermeidet jeglichen Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Typ dieses Umbruchs entspricht dem des unmittelbar umgebenden Fragmentierungskontexts. Wenn wir uns in einem Mehrspaltigen Container befinden, wird ein Spaltenumbruch erzwungen, und in paginierten Medien (aber nicht in einem Mehrspaltigen Container) ein Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Umbricht alle möglichen Fragmentierungskontexte. Also würde ein Umbruch in einem Mehrspaltigen Container, der sich in einem Seitencontainer befand, einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeglichen Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer linken Seite machen wird. Es ist die Seite, die auf der linken Seite des Buchrückens oder die Rückseite der Seite beim Duplexdruck platziert wird.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer rechten Seite machen wird. Es ist die Seite, die auf der rechten Seite des Buchrückens oder die Vorderseite der Seite beim Duplexdruck platziert wird.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Recto-Seite machen wird. (Eine Recto-Seite ist eine rechte Seite in einer Links-nach-Rechts-Ausbreitung oder eine linke Seite in einer Rechts-nach-Links-Ausbreitung.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Verso-Seite machen wird. (Eine Verso-Seite ist eine linke Seite in einer Links-nach-Rechts-Ausbreitung oder eine rechte Seite in einer Rechts-nach-Links-Ausbreitung.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeglichen Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Regionenbruchwerte

- `avoid-region`
  - : Vermeidet jeglichen Regionsumbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Regionsumbruch direkt nach der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}} Eigenschaft von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Seiten, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Aliasing zu `page` anstelle des `always` Wertes in der Level 4 Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Sauberes Aufteilen in Spalten

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die mit `column-width: 200px` in mehreren Spalten angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze ziemlich unordentlich angeordnet, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-after: column` auf die `<p>`-Elemente angewendet, um einen Spaltenumbruch nach jedem von ihnen zu erzwingen, was bedeutet, dass Sie mit einem `<h2>` oben in jeder Spalte enden.

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

- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxes mit CSS-Fragmentierung umbrechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
