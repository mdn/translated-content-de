---
title: "`break-before` CSS property"
short-title: break-before
slug: Web/CSS/Reference/Properties/break-before
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Seiten-, Spalten- oder Regionsumbrüche vor einem generierten Rahmen eingestellt sein sollen. Wenn kein generierter Rahmen vorhanden ist, wird die Eigenschaft ignoriert.

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

Jeder mögliche Umbruchspunkt (mit anderen Worten, jede Elementgrenze) wird von drei Eigenschaften beeinflusst: dem {{cssxref("break-after")}} Wert des vorherigen Elements, dem `break-before` Wert des nächsten Elements und dem {{cssxref("break-inside")}} Wert des enthaltenen Elements.

Um zu bestimmen, ob ein Umbruch notwendig ist, werden die folgenden Regeln angewendet:

1. Wenn einer der drei betroffenen Werte ein _erzwungener Umbruchwert_ ist (`always`, `left`, `right`, `page`, `column` oder `region`), hat dieser Vorrang. Wenn mehr als einer dieser Werte ein solcher Umbruch ist, wird der des Elements verwendet, das zuletzt im Fluss auftaucht (d.h. der `break-before` Wert hat Vorrang vor dem `break-after` Wert, der wiederum Vorrang vor dem `break-inside` Wert hat).
2. Wenn einer der drei betroffenen Werte ein _Vermeidungsumbruchwert_ ist (`avoid`, `avoid-page`, `avoid-region` oder `avoid-column`), wird an dieser Stelle kein solcher Umbruch angewendet.

Sobald erzwungene Umbrüche angewendet wurden, können weichere Umbrüche hinzugefügt werden, falls erforderlich, jedoch nicht an Elementgrenzen, die einen entsprechenden `avoid` Wert auflösen.

### Werte

#### Generische Umbruchwerte

- `auto`
  - : Erlaubt, aber erzwingt nicht, dass ein beliebiger Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptcontainer eingefügt wird.
- `avoid`
  - : Vermeidet jeden Umbruch (Seite, Spalte oder Region) direkt vor dem Hauptcontainer.
- `always`
  - : Erzwingt einen Seitenumbruch direkt vor dem Hauptcontainer. Der Typ dieses Umbruchs entspricht dem des unmittelbar enthaltenden Fragmentierungskontexts. Wenn wir uns innerhalb eines mehrspaltigen Containers befinden, würde er einen Spaltenumbruch erzwingen, innerhalb paginierter Medien (aber nicht innerhalb eines mehrspaltigen Containers) einen Seitenumbruch.
- `all`
  - : Erzwingt einen Seitenumbruch direkt vor dem Hauptcontainer. Umbricht alle möglichen Fragmentierungskontexte. Ein Umbruch innerhalb eines mehrspaltigen Containers, der sich in einem Seitencontainer befindet, würde einen Spalten- und Seitenumbruch erzwingen.

#### Seitenumbruchwerte

- `avoid-page`
  - : Vermeidet jeden Seitenumbruch direkt vor dem Hauptcontainer.
- `page`
  - : Erzwingt einen Seitenumbruch direkt vor dem Hauptcontainer.
- `left`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptcontainer, je nachdem, welcher die nächste Seite zu einer linken Seite macht. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite beim beidseitigen Drucken platziert ist.
- `right`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptcontainer, je nachdem, welcher die nächste Seite zu einer rechten Seite macht. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite beim beidseitigen Drucken platziert ist.
- `recto`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptcontainer, je nachdem, welcher die nächste Seite zu einer Recto-Seite macht. (Eine Recto-Seite ist eine rechte Seite in einer von links nach rechts verlaufenden oder eine linke Seite in einer von rechts nach links verlaufenden Darstellung.)
- `verso`
  - : Erzwingt einen oder zwei Seitenumbrüche direkt vor dem Hauptcontainer, je nachdem, welcher die nächste Seite zu einer Verso-Seite macht. (Eine Verso-Seite ist eine linke Seite in einer von links nach rechts verlaufenden oder eine rechte Seite in einer von rechts nach links verlaufenden Darstellung.)

#### Spaltenumbruchwerte

- `avoid-column`
  - : Vermeidet jeden Spaltenumbruch direkt vor dem Hauptcontainer.
- `column`
  - : Erzwingt einen Spaltenumbruch direkt vor dem Hauptcontainer.

#### Regionsumbruchwerte

- `avoid-region`
  - : Vermeidet jeden Regionsumbruch direkt vor dem Hauptcontainer.
- `region`
  - : Erzwingt einen Regionsumbruch direkt vor dem Hauptcontainer.

## Alias für Seitenumbruch

Aus Kompatibilitätsgründen sollte die alte {{cssxref("page-break-before")}} Eigenschaft von Browsern als Alias für `break-before` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt zugeordnet werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

> [!NOTE]
> Der `always` Wert von `page-break-*` wurde von Browsern als Seitenumbruch und nicht als Spaltenumbruch umgesetzt. Daher wird der Alias auf `page` gesetzt, anstatt den `always` Wert in der Spezifikation der Stufe 4 zu verwenden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Geordnete Spalten

Im folgenden Beispiel haben wir einen Container, der eine `<h1>` enthält, die sich über alle Spalten erstreckt (erreicht durch `column-span: all`) und eine Reihe von `<h2>`s und Absätzen, die in mehreren Spalten mit `column-width: 200px` angeordnet sind.

Standardmäßig wurden die Untertitel und Absätze eher chaotisch angeordnet, da die Überschriften nicht an einheitlichen Positionen waren. Allerdings nutzten wir `break-before: column` für die `<h2>` Elemente, um einen Spaltenumbruch vor jedem zu erzwingen, was bedeutet, dass Sie am Ende ein `<h2>` ordentlich am oberen Ende jeder Spalte haben.

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

- [Leitfaden: Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)
