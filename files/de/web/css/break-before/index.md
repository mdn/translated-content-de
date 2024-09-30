---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionenwechsel vor einer generierten Box erfolgen sollen. Gibt es keine generierte Box, wird die Eigenschaft ignoriert.

{{EmbedInteractiveExample("pages/css/break-before.html")}}

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorherigen Elements, dem `break-before` Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des beinhaltenden Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat er Vorrang. Wenn mehr als einer dieser Werte einen solchen Umbruch darstellt, wird der des Elements genommen, das zuletzt im Fluss erscheint (d.h., der `break-before` Wert hat Vorrang vor dem `break-after` Wert, welcher wiederum Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betreffenden Werte ein _Umbruch-Vermeidungswert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die sich in einem entsprechenden `avoid` Wert auflösen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt aber nicht, dass ein beliebiger Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox eingefügt wird.
- `avoid`
  - : Vermeidet jeglichen Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox einzufügen.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Typ dieses Umbruchs entspricht dem des unmittelbar beinhaltenden Fragmentierungskontextes. Befindet sich die Hauptbox in einem Multicol-Container, erzwingt dieser Wert einen Spaltenumbruch; in einem seitengesteuerten Medium (jedoch nicht in einem Multicol-Container) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Umbruch erfolgt durch alle möglichen Fragmentierungskontexte. Ein Umbruch innerhalb eines Multicol-Containers, der sich innerhalb eines Seiten-Containers befindet, würde somit einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeglichen Seitenumbruch direkt vor der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, was die nächste Seite linksseitig werden lässt. Dies ist die Seite, die auf der linken Seite der Buchmitte oder auf der Rückseite der Seite beim Duplexdruck platziert ist.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, was die nächste Seite rechtsseitig werden lässt. Dies ist die Seite, die auf der rechten Seite der Buchmitte oder auf der Vorderseite der Seite beim Duplexdruck platziert ist.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, was die nächste Seite zu einer Seite auf der rechten Buchseite in einem Rahmen von links nach rechts oder zu einer Seite auf der linken Buchseite in einem Rahmen von rechts nach links macht.
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, was die nächste Seite zu einer Seite auf der linken Buchseite in einem Rahmen von links nach rechts oder zu einer Seite auf der rechten Buchseite in einem Rahmen von rechts nach links macht.

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeglichen Spaltenumbruch direkt vor der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor der Hauptbox.

#### Regionenbruchwerte

- `avoid-region`
  - : Vermeidet jeglichen Regionenbruch direkt vor der Hauptbox.
- `region`
  - : Erzwingt einen Regionenbruch direkt vor der Hauptbox.

## Seitenumbrüche Alias

Aus Kompatibilitätsgründen sollte die alte Eigenschaft {{cssxref("page-break-before")}} von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollten als folgt aliasiert werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Aliaserstellung zu `page` und nicht zum `always` Wert in der Level-4-Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufteilen in ordentliche Spalten

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das alle Spalten überspannt (erreicht durch `column-span: all`), sowie eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze eher chaotisch angeordnet, weil sich die Überschriften nicht an einheitlichen Stellen befanden. Wir verwendeten jedoch `break-before: column` auf den `<h2>` Elementen, um einen Spaltenumbruch vor jeder Überschrift zu erzwingen, was dazu führte, dass sich jeweils ein `<h2>` sauber oben in jeder Spalte befindet.

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

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Umbrüche mit CSS-Fragmentierung] (https://www.smashingmagazine.com/2019/02/css-fragmentation/)
