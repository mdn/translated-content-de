---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionenumbrüche vor einem generierten Blockelement erfolgen sollen. Wenn es kein generiertes Blockelement gibt, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorherigen Elements, dem `break-before` Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat er Vorrang. Wenn mehr als einer dieser Werte zu einem Umbruch führen würde, wird der Wert des Elements genommen, der zuletzt im Fluss erscheint (d. h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Umbruch-Vermeidung Wert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an diesem Punkt kein Umbruch eingefügt.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die einem entsprechenden `avoid` Wert entsprechen.

### Werte

#### Allgemeine Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt aber keinen Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptblock.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptblock.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptblock. Die Art dieses Umbruchs entspricht dem unmittelbar umgebenden Fragmentierungskontext. Wenn wir uns in einem Mehrspaltencontainer befinden, würde er einen Spaltenumbruch erzwingen; in paginierten Medien (aber nicht innerhalb eines Mehrspaltencontainers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptblock, der durch alle möglichen Fragmentierungskontexte bricht. Ein Umbruch innerhalb eines Mehrspaltencontainers, der sich in einem Seitencontainer befindet, würde sowohl einen Spalten- als auch einen Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt vor dem Hauptblock.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor dem Hauptblock.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder auf der Rückseite der Seite im Duplexdruck platziert wird.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder auf der Vorderseite der Seite im Duplexdruck platziert wird.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einer von links nach rechts geöffneten Doppelseite oder eine linke Seite in einer von rechts nach links geöffneten Doppelseite.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor dem Hauptblock, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einer von links nach rechts geöffneten Doppelseite oder eine rechte Seite in einer von rechts nach links geöffneten Doppelseite.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt vor dem Hauptblock.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor dem Hauptblock.

#### Regionenumbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionenumbruch direkt vor dem Hauptblock.
- `region`
  - : Erzwingt einen Regionenumbruch direkt vor dem Hauptblock.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}} Eigenschaft von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias verwendet werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher wird das Alias zu `page`, anstatt zum `always` Wert in der Level 4 Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### In ordentliche Spalten aufteilen

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehrere Spalten mit `column-width: 200px` aufgeteilt sind.

Standardmäßig wurden die Unterüberschriften und Absätze ziemlich unordentlich angeordnet, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-before: column` auf die `<h2>` Elemente angewendet, um einen Spaltenumbruch vor jedem zu erzwingen, sodass ein `<h2>` ordentlich oben in jeder Spalte erscheint.

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
- [Kästchen mit CSS-Fragmentierung brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
