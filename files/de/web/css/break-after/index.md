---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`break-after`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Seiten-, Spalten- oder Bereichsumbrüche nach einer generierten Box funktionieren sollen. Wenn es keine generierte Box gibt, wird die Eigenschaft ignoriert.

{{EmbedInteractiveExample("pages/css/break-after.html")}}

## Syntax

```css
/* Allgemeine Umbrüche */
break-after: auto;
break-after: avoid;
break-after: always;
break-after: all;

/* Seitenumbrüche */
break-after: avoid-page;
break-after: page;
break-after: left;
break-after: right;
break-after: recto;
break-after: verso;

/* Spaltenumbrüche */
break-after: avoid-column;
break-after: column;

/* Bereichsumbrüche */
break-after: avoid-region;
break-after: region;

/* Globale Werte */
break-after: inherit;
break-after: initial;
break-after: revert;
break-after: revert-layer;
break-after: unset;
```

Jeder mögliche Umbruchpunkt (also jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after`-Wert des vorherigen Elements, dem {{cssxref("break-before")}}-Wert des nächsten Elements und dem {{cssxref("break-inside")}}-Wert des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch erfolgen muss, werden folgende Regeln angewandt:

1. Wenn einer der drei betreffenden Werte ein _erzwungener Umbruchwert_ (`always`, `left`, `right`, `page`, `column` oder `region`) ist, hat er Vorrang. Wenn mehr als einer von ihnen ein solcher Umbruch ist, wird der des Elements, das zuletzt im Fluss erscheint, genommen (d. h. der `break-before`-Wert hat Vorrang vor dem `break-after`-Wert, der seinerseits Vorrang vor dem `break-inside`-Wert hat).
2. Wenn einer der drei betreffenden Werte ein _vermeidbarer Umbruchwert_ (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`) ist, wird an dieser Stelle kein solcher Umbruch angewandt.

Sobald erzwungene Umbrüche angewandt wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die in einem entsprechenden `avoid`-Wert aufgelöst werden.

### Werte

#### Allgemeine Umbruchwerte

- `auto`
  - : Erlaubt, aber erzwingt nicht, dass ein Umbruch (Seite, Spalte oder Bereich) direkt nach der Hauptbox eingefügt wird.
- `avoid`
  - : Verhindert, dass ein Umbruch (Seite, Spalte oder Bereich) direkt nach der Hauptbox eingefügt wird.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Typ dieses Umbruchs ist der des unmittelbar enthaltenen Fragmentierungskontexts. Wenn wir uns in einem multikollom Behälter befinden, würde es einen Spaltenumbruch erzwingen, in Medien mit Seiten (aber nicht innerhalb eines multikollom Behälters) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox, der durch alle möglichen Fragmentierungskontexte geht. Ein Umbruch innerhalb eines multikollom Behälters, der sich in einem Seitenbehälter befindet, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Verhindert jeden Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, was die nächste Seite zu einer linken Seite macht. Es ist die Seite auf der linken Seite des Buchrückens oder die Rückseite der Seite beim Duplexdruck.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, was die nächste Seite zu einer rechten Seite macht. Es ist die Seite auf der rechten Seite des Buchrückens oder die Vorderseite der Seite beim Duplexdruck.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, was die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einer von links nach rechts verlaufenden Doppelseite oder eine linke Seite in einer von rechts nach links verlaufenden Doppelseite.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, was die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einer von links nach rechts verlaufenden Doppelseite oder eine rechte Seite in einer von rechts nach links verlaufenden Doppelseite.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Verhindert jeden Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Bereichsumbruchwerte

- `avoid-region`
  - : Verhindert jeden Bereichsumbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Bereichsumbruch direkt nach der Hauptbox.

## Seitenumbruch-Aliase

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}}-Eigenschaft von Browsern als Alias für `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt aliasiert werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der Wert `always` bei `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Aliasbildung auf `page` und nicht auf den `always`-Wert in der Spezifikation der Stufe 4.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufteilen in ordentliche Spalten

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht mit `column-span: all`), und eine Reihe von `<h2>`s und Absätzen, die mit `column-width: 200px` in mehreren Spalten angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze ziemlich unordentlich angeordnet, da die Überschriften nicht an einem einheitlichen Ort waren. Allerdings haben wir `break-after: column` auf die `<p>`-Elemente angewendet, um nach jedem einen Spaltenumbruch zu erzwingen, was bedeutet, dass Sie ein `<h2>` sauber oben in jeder Spalte haben.

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
- [Zerbrechen von Boxen mit CSS-Fragmentierung](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
