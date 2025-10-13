---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche vor einer generierten Box verhalten sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird durch drei Eigenschaften beeinflusst: den {{cssxref("break-after")}} Wert des vorherigen Elements, den `break-before` Wert des nächsten Elements und den {{cssxref("break-inside")}} Wert des beinhaltenden Elements.

Um festzustellen, ob ein Umbruch durchgeführt werden muss, gelten die folgenden Regeln:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer solcher Umbrüche vorliegt, wird derjenige des Elements genommen, das zuletzt im Fluss erscheint (d.h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Vermeiden-Umbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an diesem Punkt kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert aufgelöst werden.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, aber erzwingt nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Die Art dieses Umbruchs entspricht dem unmittelbar beinhaltenden Fragmentierungskontext. Wenn wir uns innerhalb eines Multicol-Containers befinden, würde dies einen Spaltenumbruch erzwingen, in paginierten Medien (aber nicht innerhalb eines Multicol-Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox, indem durch alle möglichen Fragmentierungskontexte gebrochen wird. Ein Umbruch innerhalb eines Multicol-Containers, der sich innerhalb eines Seitencontainers befand, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet, dass ein Seitenumbruch direkt vor der Hauptbox erfolgt.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welche die nächste Seite in eine linke Seite verwandeln. Es ist die Seite auf der linken Seite des Buchrückens oder die Rückseite der Seite beim Duplexdruck.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welche die nächste Seite in eine rechte Seite verwandeln. Es ist die Seite auf der rechten Seite des Buchrückens oder die Vorderseite der Seite beim Duplexdruck.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welche die nächste Seite in eine Recto-Seite verwandeln. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts Layout oder eine linke Seite in einem von rechts nach links Layout.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welche die nächste Seite in eine Verso-Seite verwandeln. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts Layout oder eine rechte Seite in einem von rechts nach links Layout.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet, dass direkt vor der Hauptbox ein Spaltenumbruch erfolgt.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor der Hauptbox.

#### Regionsumbruchwerte

- `avoid-region`
  - : Vermeidet, dass direkt vor der Hauptbox ein Regionsumbruch erfolgt.
- `region`
  - : Erzwingt einen Regionsumbruch direkt vor der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}} Eigenschaft von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Alias-Zuweisung zu `page` und nicht zum `always` Wert in der Level 4 Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Saubere Spaltenbrechung

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Zwischenüberschriften und Absätze ziemlich unordentlich angeordnet, da sich die Überschriften nicht an einem einheitlichen Platz befanden. Wir haben jedoch `break-before: column` auf die `<h2>` Elemente angewendet, um vor jedem eine Spaltenbrechung zu erzwingen, was bedeutet, dass Sie eine `<h2>` ordentlich oben in jeder Spalte haben.

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

- [Lernen: Mehrspaltige Layouts](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxen mit CSS-Fragmentierung brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
