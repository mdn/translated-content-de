---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche vor einer generierten Box behandelt werden sollen. Wenn keine Box generiert wurde, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorhergehenden Elements, dem `break-before` Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Werte ein solcher Umbruch ist, wird der Umbruch des Elements berücksichtigt, das zuletzt im Fluss erscheint (d.h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Vermeidungswert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert aufgelöst werden.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Ermöglicht, aber erzwingt nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox eingefügt wird.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Die Art dieses Umbruchs entspricht dem unmittelbar umgebenden Fragmentierungskontext. Wenn wir uns in einem Multicol-Container befinden, erzwingt dies einen Spaltenumbruch, in paginierten Medien (aber nicht innerhalb eines Multicol-Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Bricht durch alle möglichen Fragmentierungskontexte. Ein Umbruch innerhalb eines Multicol-Containers, der sich in einem Seitencontainer befindet, würde somit einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt vor der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor der Hauptbox.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite im Duplexdruck platziert wird.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite im Duplexdruck platziert wird.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem links-nach-rechts-Spread oder eine linke Seite in einem rechts-nach-links-Spread.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem links-nach-rechts-Spread oder eine rechte Seite in einem rechts-nach-links-Spread.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt vor der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor der Hauptbox.

#### Regionsumbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionsumbruch direkt vor der Hauptbox.
- `region`
  - : Erzwingt einen Regionsumbruch direkt vor der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}} Eigenschaft von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Webseiten, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt aliasiert werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt das Alias auf `page` anstelle des `always` Wertes in der Spezifikation der Stufe 4.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Sauberes Aufteilen in Spalten

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die mit `column-width: 200px` in mehreren Spalten angeordnet sind.

Standardmäßig waren die Unterüberschriften und Absätze ziemlich unordentlich angeordnet, weil die Überschriften nicht einheitlich platziert waren. Wir haben jedoch `break-before: column` auf die `<h2>` Elemente angewendet, um vor jedem ein Spaltenumbruch zu erzwingen, wodurch Sie ein `<h2>` sauber oben in jeder Spalte erhalten.

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

- [Lernen: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxen mit CSS-Fragmentierung aufbrechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
