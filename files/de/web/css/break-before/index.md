---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie sich Seiten-, Spalten- oder Regionenumbrüche vor einem generierten Block verhalten sollen. Wenn kein Block generiert wird, wird die Eigenschaft ignoriert.

{{InteractiveExample("CSS Demo: break-before")}}

```css interactive-example-choice
break-before: auto;
```

```css interactive-example-choice
break-before: page;
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
      <div class="box" id="example-element">Content with 'break-before'</div>
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

Jeder mögliche Umbruchpunkt (das heißt, jede Elementgrenze) wird durch drei Eigenschaften beeinflusst: den {{cssxref("break-after")}} Wert des vorherigen Elements, den `break-before` Wert des nächsten Elements und den {{cssxref("break-inside")}} Wert des beinhaltenden Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ (`always`, `left`, `right`, `page`, `column` oder `region`) ist, hat dieser Vorrang. Wenn mehr als einer dieser Werte so ein Umbruch ist, wird der des Elements genommen, das zuletzt im Fluss erscheint (d.h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betreffenden Werte ein _Vermeidungbruchwert_ (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`) ist, wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die einem entsprechenden `avoid` Wert entsprechen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt aber nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptblock eingefügt wird.
- `avoid`
  - : Vermeidet jeglichen Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptblock.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptblock. Der Typ dieses Umbruchs ist der des unmittelbar umgebenden Fragmentierungskontexts. Wenn wir uns innerhalb eines Multicol-Containers befinden, würde es einen Spaltenumbruch erzwingen, innerhalb von Seitenmedien (aber nicht innerhalb eines Multicol-Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptblock. Es durchbricht alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Multicol-Container, der sich in einem Seitencontainer befand, würde somit einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeglichen Seitenumbruch direkt vor dem Hauptblock.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor dem Hauptblock.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite im Duplexdruck platziert ist.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite im Duplexdruck platziert ist.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts verlaufenden Spread oder eine linke Seite in einem von rechts nach links verlaufenden Spread.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts verlaufenden Spread oder eine rechte Seite in einem von rechts nach links verlaufenden Spread.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeglichen Spaltenumbruch direkt vor dem Hauptblock.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor dem Hauptblock.

#### Regionen-Umbruchwerte

- `avoid-region`
  - : Vermeidet jeglichen Regionen-Umbruch direkt vor dem Hauptblock.
- `region`
  - : Erzwingt einen Regionen-Umbruch direkt vor dem Hauptblock.

## Seitenumbruch-Aliasse

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}} Eigenschaft von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, wie beabsichtigt weiter funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Alias-Zuordnung zu `page` und nicht zum `always` Wert in der Level-4-Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### In ordentliche Spalten aufteilen

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>` und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze eher unordentlich dargestellt, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-before: column` auf den `<h2>` Elementen verwendet, um einen Spaltenumbruch vor jedem zu erzwingen, was bedeutet, dass Sie mit einem `<h2>` an der oberen Stelle jeder Spalte enden.

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

- [Lernen: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxes mit CSS-Fragmentierung durchbrechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
