---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: 5eb1c147189824b5d2ff915da1b444aeafd51c6f
---

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche vor einem generierten Kasten behandelt werden sollen. Wenn kein generierter Kasten vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem Wert von {{cssxref("break-after")}} des vorhergehenden Elements, dem Wert `break-before` des nächsten Elements und dem Wert von {{cssxref("break-inside")}} des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer von ihnen ein solcher Umbruch ist, wird derjenige des Elements genommen, das zuletzt im Fluss erscheint (d.h. der `break-before`-Wert hat Vorrang vor dem `break-after`-Wert, der wiederum Vorrang vor dem `break-inside`-Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Vermeidungsbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche bei Bedarf hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid`-Wert aufgelöst werden.

### Werte

#### Allgemeine Umbruchwerte

- `auto`
  - : Ermöglicht, erzwingt aber nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptkasten eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptkasten eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptkasten. Der Typ dieses Umbruchs entspricht dem des unmittelbar umgebenden Fragmentierungskontexts. Wenn wir uns in einem Multicol-Container befinden, würde es einen Spaltenumbruch erzwingen, in paginierten Medien (aber nicht in einem Multicol-Container) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptkasten. Bricht durch alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Multicol-Container, der sich in einem Seiten-Container befand, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt vor dem Hauptkasten.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor dem Hauptkasten.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptkasten, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die sich auf der linken Seite des Buches befindet oder die Rückseite der Seite im Duplex-Druck.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptkasten, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die sich auf der rechten Seite des Buches befindet oder die Vorderseite der Seite im Duplex-Druck.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptkasten, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts verteilten Buch oder eine linke Seite in einem von rechts nach links verteilten Buch.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptkasten, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts verteilten Buch oder eine rechte Seite in einem von rechts nach links verteilten Buch.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt vor dem Hauptkasten.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor dem Hauptkasten.

#### Regionsumbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionsumbruch direkt vor dem Hauptkasten.
- `region`
  - : Erzwingt einen Regionsumbruch direkt vor dem Hauptkasten.

## Seitenumbruch-Aliasse

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}} Eigenschaft von Browsern als ein Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Aliasse behandelt werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always`-Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Alias-Zuordnung zu `page` und nicht zum `always`-Wert in der Spezifikation Level 4.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### In ordentliche Spalten unterteilen

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch Verwendung von `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` dargestellt sind.

Standardmäßig waren die Unterüberschriften und Absätze ziemlich unstrukturiert, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-before: column` auf die `<h2>`-Elemente angewendet, um einen Spaltenumbruch vor jedem zu erzwingen, was bedeutet, dass Sie am Anfang jeder Spalte ein `<h2>` ordentlich haben.

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

- [Lernen: Mehrspaltige Layouts](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
