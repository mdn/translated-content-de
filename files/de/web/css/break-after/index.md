---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionalumbrüche nach einem generierten Block verhalten sollen. Wenn kein Block generiert wird, wird die Eigenschaft ignoriert.

{{EmbedInteractiveExample("pages/css/break-after.html")}}

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

Jeder mögliche Umbruchpunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after` Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Umbrüche vorliegt, wird der des Elements genommen, das im Fluss zuletzt erscheint (d. h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, welcher wiederum vor dem `break-inside` Wert Vorrang hat).
2. Wenn einer der drei betroffenen Werte ein _Vermeidungsumbruchswert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche hinzugefügt werden, falls erforderlich, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid` Wert resultieren.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt jedoch nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt nach dem Hauptblock eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein Umbruch (Seite, Spalte oder Region) direkt nach dem Hauptblock eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptblock. Der Typ dieses Umbruchs entspricht dem der direkt enthaltenen Fragmentierungskontext. Wenn wir uns in einem Multi-Spalten-Container befinden, würde er einen Spaltenumbruch erzwingen, innerhalb von paginierten Medien (jedoch nicht innerhalb eines Multi-Spalten-Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptblock. Durchbricht alle möglichen Fragmentierungskontexte. Ein Umbruch innerhalb eines Multi-Spalten-Containers, der sich innerhalb eines Seitencontainers befand, würde sowohl einen Spalten- als auch einen Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet einen Seitenumbruch direkt nach dem Hauptblock.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptblock.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptblock, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder auf der Rückseite der Seite im Duplexdruck platziert ist.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptblock, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder auf der Vorderseite der Seite im Duplexdruck platziert ist.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptblock, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts Verlauf oder eine linke Seite in einem von rechts nach links Verlauf.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptblock, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts Verlauf oder eine rechte Seite in einem von rechts nach links Verlauf.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet einen Spaltenumbruch direkt nach dem Hauptblock.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach dem Hauptblock.

#### Regionalumbruchwerte

- `avoid-region`
  - : Vermeidet einen regionalen Umbruch direkt nach dem Hauptblock.
- `region`
  - : Erzwingt einen regionalen Umbruch direkt nach dem Hauptblock.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}} Eigenschaft von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Unterset von Werten sollte wie folgt als Alias betrachtet werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch implementiert und nicht als Spaltenumbruch. Daher bezieht sich das Alias auf `page`, anstatt auf den `always` Wert in der Level 4 Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Geordnete Aufteilung in Spalten

Im folgenden Beispiel haben wir einen Container, der eine `<h1>`-Überschrift enthält, die sich über alle Spalten erstreckt (mit `column-span: all` erreicht), sowie eine Reihe von `<h2>` Überschriften und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze ziemlich unordentlich dargestellt, weil die Überschriften nicht an einem einheitlichen Ort standen. Wir benutzten jedoch `break-after: column` für die `<p>` Elemente, um nach jedem einen Spaltenumbruch zu erzwingen, was zu einem `<h2>` führt, der sich ordentlich oben in jeder Spalte befindet.

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

### Ergebniss

{{EmbedLiveSample('Breaking_into_neat_columns', '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Kästchen mit CSS Fragmentierung brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
