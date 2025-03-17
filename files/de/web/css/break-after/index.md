---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche nach einer generierten Box verhalten sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchspunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after`-Wert des vorherigen Elements, dem {{cssxref("break-before")}}-Wert des nächsten Elements und dem {{cssxref("break-inside")}}-Wert des umgebenden Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ (`always`, `left`, `right`, `page`, `column`, oder `region`) ist, hat dieser Vorrang. Wenn mehr als einer dieser Umbrüche vorhanden ist, wird der Umbruch des zuletzt im Fluss erscheinenden Elements genommen (d.h. der `break-before`-Wert hat Vorrang vor dem `break-after`-Wert, der wiederum Vorrang vor dem `break-inside`-Wert hat).
2. Wenn einer der drei Werte ein _Vermeidungswert_ ist (`avoid`, `avoid-page`, `avoid-region`, oder `avoid-column`), wird an diesem Punkt kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid`-Wert aufgelöst werden.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, aber erzwingt keinen Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Typ dieses Umbruchs entspricht dem des unmittelbar umschließenden Fragmentierungskontexts. Befinden wir uns in einem Mehrspalten-Container, erzwingt dies einen Spaltenumbruch. In Seitendrucken (aber nicht in einem Mehrspalten-Container) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox und durchbricht alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Mehrspaltencontainer, der sich in einem Seitencontainer befindet, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens platziert wird oder die Rückseite der Seite im Duplexdruck.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens platziert wird oder die Vorderseite der Seite im Duplexdruck.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts verlaufenden Spread oder eine linke Seite in einem von rechts nach links verlaufenden Spread.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts verlaufenden Spread oder eine rechte Seite in einem von rechts nach links verlaufenden Spread.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Regionsumbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionsumbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Regionsumbruch direkt nach der Hauptbox.

## Seitenumbruch Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}} Eigenschaft von Browsern als Alias für `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie beabsichtigt funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher bezieht sich das Aliasing auf `page`, anstatt auf den `always` Wert in der Level 4 Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufteilen in ordentliche Spalten

Im folgenden Beispiel haben wir einen Container, der eine `<h1>`-Überschrift enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`-Überschriften und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig waren die Unterüberschriften und Absätze eher unordentlich angeordnet, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-after: column` auf den `<p>`-Elementen angewendet, um einen Spaltenumbruch nach jedem zu erzwingen, was bedeutet, dass Sie ein `<h2>` ordentlich am oberen Rand jeder Spalte finden.

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

- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxen aufbrechen mit CSS-Fragmentierung](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
