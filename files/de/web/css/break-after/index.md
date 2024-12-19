---
title: break-after
slug: Web/CSS/break-after
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionenumbrüche nach einer generierten Box verhalten sollen. Wenn keine generierte Box vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchspunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem `break-after` Wert des vorherigen Elements, dem {{cssxref("break-before")}} Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des enthaltenen Elements.

Um festzustellen, ob ein Umbruch erfolgen muss, gelten die folgenden Regeln:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Umbrüche vorliegt, wird der des Elements, das zuletzt im Fluss erscheint, genommen (d. h., der Wert von `break-before` hat Vorrang vor dem Wert von `break-after`, welcher wiederum Vorrang vor dem Wert von `break-inside` hat).
2. Wenn einer der drei betroffenen Werte ein _vermeidender Umbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können bei Bedarf weiche Umbrüche hinzugefügt werden, jedoch nicht an Elementgrenzen, die sich zu einem entsprechenden `avoid`-Wert auflösen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt aber keinen Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) direkt nach der Hauptbox.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Der Typ dieses Umbruchs ist der des unmittelbar umgebenden Fragmentierungskontextes. Befinden wir uns in einem Mehrspalten-Container, erzwingt dies einen Spaltenumbruch; in paginierten Medien (aber nicht innerhalb eines Mehrspalten-Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox. Bricht durch alle möglichen Fragmentierungskontexte. Ein Umbruch in einem Mehrspalten-Container, der sich in einem Seitencontainer befand, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt nach der Hauptbox.
- `page`
  - : Erzwingt einen Seitenumbruch direkt nach der Hauptbox.
- `left`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens platziert ist, oder die Rückseite der Seite beim Duplexdruck.
- `right`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens platziert ist, oder die Vorderseite der Seite beim Duplexdruck.
- `recto`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer recto-Seite macht. (Eine recto-Seite ist eine rechte Seite in einer links-nach-rechts-Doppelseite oder eine linke Seite in einer rechts-nach-links-Doppelseite.)
- `verso`
  - : Erzwingt ein oder zwei Seitenumbrüche direkt nach der Hauptbox, je nachdem, welcher die nächste Seite zu einer verso-Seite macht. (Eine verso-Seite ist eine linke Seite in einer links-nach-rechts-Doppelseite oder eine rechte Seite in einer rechts-nach-links-Doppelseite.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt nach der Hauptbox.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt nach der Hauptbox.

#### Regionen-Umbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionen-Umbruch direkt nach der Hauptbox.
- `region`
  - : Erzwingt einen Regionen-Umbruch direkt nach der Hauptbox.

## Alias für Seitenumbruch

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-after")}} Eigenschaft von Browsern als Alias für `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias behandelt werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> [!NOTE]
> Der Wert `always` von `page-break-*` wurde von den Browsern als Seitenumbruch implementiert und nicht als Spaltenumbruch. Daher wird die Aliasing als `page` vorgenommen, anstatt des Werts `always` in der Level-4-Spezifikation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aufbrechen in ordentliche Spalten

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze eher unordentlich angeordnet, da die Überschriften nicht an einer einheitlichen Stelle waren. Wir haben jedoch `break-after: column` auf die `<p>` Elemente angewendet, um einen Spaltenumbruch nach jedem zu erzwingen, was bedeutet, dass Sie ein `<h2>` ordentlich oben in jeder Spalte erhalten.

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

- [Leitfaden: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Boxen mit CSS-Fragmentierung brechen](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
