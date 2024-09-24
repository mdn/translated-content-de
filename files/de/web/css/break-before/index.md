---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`break-before`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche vor einer generierten Box behandelt werden sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

{{EmbedInteractiveExample("pages/css/break-before.html")}}

## Syntax

```css
/* Allgemeine Umbruchwerte */
break-before: auto;
break-before: avoid;
break-before: always;
break-before: all;

/* Seitenumbruchwerte */
break-before: avoid-page;
break-before: page;
break-before: left;
break-before: right;
break-before: recto;
break-before: verso;

/* Spaltenumbruchwerte */
break-before: avoid-column;
break-before: column;

/* Regionsumbruchwerte */
break-before: avoid-region;
break-before: region;

/* Globale Werte */
break-before: inherit;
break-before: initial;
break-before: revert;
break-before: revert-layer;
break-before: unset;
```

Jeder mögliche Umbruchpunkt (also jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}}-Wert des vorherigen Elements, dem `break-before`-Wert des nächsten Elements und dem {{cssxref("break-inside")}}-Wert des enthaltenden Elements.

Um zu bestimmen, ob ein Umbruch vorgenommen werden muss, gelten die folgenden Regeln:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ (`always`, `left`, `right`, `page`, `column` oder `region`) ist, hat dieser Vorrang. Wenn mehr als einer dieser Werte ein solcher Umbruch ist, wird der des Elements, das zuletzt im Fluss erscheint, genommen (d.h., der `break-before`-Wert hat Vorrang vor dem `break-after`-Wert, der wiederum Vorrang vor dem `break-inside`-Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Vermeidungsumbruchwert_ (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`) ist, wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche hinzugefügt werden, falls nötig, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid`-Wert aufgelöst werden.

### Werte

#### Allgemeine Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt jedoch nicht, dass ein beliebiger Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox eingefügt wird.
- `avoid`
  - : Vermeidet, dass ein beliebiger Umbruch (Seite, Spalte oder Region) direkt vor der Hauptbox eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Typ dieses Umbruchs ist der des unmittelbar das Fragmentierungs-Kontext enthaltenden. Wenn sich das Element in einem Multicol-Container befindet, würde ein Spaltenumbruch erzwungen, in paginierten Medien (aber nicht innerhalb eines Multicol-Containers) ein Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox und durchbricht alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Multicol-Container, der sich in einem Seiten-Container befand, würde einen Spalten- und einen Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt vor der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher Umbruch die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite im Duplexdruck platziert wird.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher Umbruch die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite im Duplexdruck platziert wird.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher Umbruch die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einer links-nach-rechts-Anordnung oder eine linke Seite in einer rechts-nach-links-Anordnung.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt vor der Hauptbox, je nachdem, welcher Umbruch die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einer links-nach-rechts-Anordnung oder eine rechte Seite in einer rechts-nach-links-Anordnung.)

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

## Seitenumbruch-Aliasse

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}}-Eigenschaft von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Ausschnitt der Werte sollte wie folgt als Aliasse behandelt werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der Wert `always` von `page-break-*` wurde von Browsern als Seitenumbruch implementiert und nicht als Spaltenumbruch. Daher erfolgt die Aliasierung zu `page` anstatt des `always`-Wertes in der Spezifikation der Stufe 4.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ordentliche Spaltenumbrüche

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das alle Spalten überspannt (erreicht durch `column-span: all`), sowie eine Reihe von `<h2>` und Absätzen, die mit `column-width: 200px` in mehreren Spalten angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze ziemlich unordentlich angeordnet, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-before: column` bei den `<h2>`-Elementen verwendet, um einen Spaltenumbruch vor jedem zu erzwingen, was bedeutet, dass Sie mit einem `<h2>` sauber oben in jeder Spalte enden.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
