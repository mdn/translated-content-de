---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionenumbrüche nach einem generierten Kasten verhalten sollen. Wenn kein generierter Kasten vorhanden ist, wird die Eigenschaft ignoriert.

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

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column`, oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Werte ein solcher Umbruch ist, wird derjenige des später im Fluss auftretenden Elements genommen (d. h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der selbst Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betreffenden Werte ein _Vermeidungsumschwert_ ist (`avoid`, `avoid-page`, `avoid-region`, oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, aber nicht an Elementgrenzen, die einen entsprechenden `avoid` Wert auflösen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, aber erzwingt nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt nach dem Hauptkastenelement eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein Umbruch (Seite, Spalte oder Region) direkt nach dem Hauptkastenelement eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptkastenelement. Die Art dieses Umbruchs ist die des unmittelbar enthaltenen Fragmentierungskontexts. Wenn wir uns in einem Multicol-Container befinden, würde es einen Spaltenumbruch erzwingen, in paginierten Medien (aber nicht innerhalb eines Multicol-Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptkastenelement. Umbrüche durch alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Multicol-Container, der sich in einem Seitencontainer befand, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt nach dem Hauptkastenelement.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptkastenelement.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptkastenelement, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder auf der Rückseite der Seite im Duplexdruck platziert ist.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptkastenelement, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder auf der Vorderseite der Seite im Duplexdruck platziert ist.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptkastenelement, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts gerichteten Layout oder eine linke Seite in einem von rechts nach links gerichteten Layout.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt nach dem Hauptkastenelement, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts gerichteten Layout oder eine rechte Seite in einem von rechts nach links gerichteten Layout.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt nach dem Hauptkastenelement.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach dem Hauptkastenelement.

#### Regionen-Umbuchwerte

- `avoid-region`
  - : Vermeidet jeden Regionen-Umbuch direkt nach dem Hauptkastenelement.
- `region`
  - : Erzwingt einen Regionen-Umbuch direkt nach dem Hauptkastenelement.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die überholte {{cssxref("page-break-after")}} Eigenschaft von Browsern als ein Alias von `break-after` behandelt werden. Dies stellt sicher, dass Webseiten, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt aliasiert werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von den Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher ist das Aliasing auf `page` und nicht der `always` Wert in der Stufe-4-Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Saubere Spaltenbildung

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das alle Spalten überspannt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze ziemlich unübersichtlich angeordnet, da die Überschriften nicht gleichmäßig platziert waren. Wir haben jedoch `break-after: column` auf die `<p>` Elemente angewendet, um einen Spaltenumbruch nach jedem zu erzwingen, was bedeutet, dass man ein `<h2>` sauber oben in jeder Spalte hat.

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

- [Layout mit mehreren Spalten](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Boxen mit CSS-Fragmentierung umbrechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
