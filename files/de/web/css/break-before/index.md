---
title: break-before
slug: Web/CSS/break-before
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche vor einem generierten Element sich verhalten sollen. Wenn es kein generiertes Element gibt, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchspunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorherigen Elements, dem `break-before` Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des umgebenden Elements.

Um festzustellen, ob ein Umbruch erfolgen muss, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer ein solcher Umbruch ist, wird derjenige des Elements genommen, das zuletzt im Fluss erscheint (d.h., der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der seinerseits Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Umbruchvermeidungswert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weiche Umbrüche hinzugefügt werden, falls erforderlich, jedoch nicht an Elementgrenzen, die zu einem entsprechenden `avoid` Wert führen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, erzwingt aber nicht, dass ein Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptelement eingefügt wird.
- `avoid`
  - : Vermeidet jeglichen Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptelement.
- `always`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptelement. Der Typ dieses Umbruchs entspricht dem unmittelbar umgebenden Fragmentierungskontext. Wenn man sich in einem Multicol-Container befindet, erzwingt dies einen Spaltenumbruch; in gepageter Medien (aber nicht in einem Multicol-Container) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt nach dem Hauptelement. Umbrüche durch alle möglichen Fragmentierungskontexte hindurch. Ein Umbruch in einem Multicol-Container, der sich in einem Seitencontainer befindet, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt vor dem Hauptelement.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor dem Hauptelement.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptelement, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite im Duplexdruck platziert ist.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptelement, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite im Duplexdruck platziert ist.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptelement, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einem von links nach rechts verlaufenden Layout oder eine linke Seite in einem von rechts nach links verlaufenden Layout.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptelement, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einem von links nach rechts verlaufenden Layout oder eine rechte Seite in einem von rechts nach links verlaufenden Layout.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt vor dem Hauptelement.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor dem Hauptelement.

#### Regionsumbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionsumbruch direkt vor dem Hauptelement.
- `region`
  - : Erzwingt einen Regionsumbruch direkt vor dem Hauptelement.

## Seitenumbruch-Aliasse

Aus Kompatibilitätsgründen sollte die veraltete {{cssxref("page-break-before")}} Eigenschaft von Browsern als Alias von `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias behandelt werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch implementiert. Daher erfolgt die Aliasing zu `page` und nicht zum `always` Wert in der Spezifikation der Stufe 4.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### In ordentliche Spalten umbrechen

Im folgenden Beispiel haben wir einen Container, der ein `<h1>` enthält, das sich über alle Spalten erstreckt (erreicht mit `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die mit `column-width: 200px` in mehreren Spalten angeordnet sind.

Standardmäßig wurden die Unterüberschriften und Absätze recht unordentlich angeordnet, da die Überschriften nicht an einem einheitlichen Ort waren. Wir haben jedoch `break-before: column` auf den `<h2>`-Elementen verwendet, um einen Spaltenumbruch vor jedem zu erzwingen, was bedeutet, dass ein `<h2>` ordentlich oben in jeder Spalte steht.

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

- [Leitfaden: Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
