---
title: Erstellen eines unregelmäßigen Navigationsmenüs mit border-shape
short-title: "`border-shape` Navigationsmenü"
slug: Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Die CSS-Eigenschaft {{cssxref("border-shape")}} kann auf Elemente angewendet werden, um präzise geformte Container wie Sprechblasen, abstrakte Tooltip-Designs und mehr zu erstellen. Dies ermöglicht viele neue kreative Ideen in die Produktion zu bringen, ohne dass Workarounds oder Hacks erforderlich sind. Auf der Eigenschaftsreferenzseite können Sie alles über die Eigenschaft erfahren und grundlegende Beispiele in Aktion sehen.

In diesem Leitfaden zeigen wir Ihnen, wie Sie `border-shape` verwenden, um ein unregelmäßiges animiertes Navigationsmenü zu erstellen, bei dem jedes Navigationselement wie ein Puzzleteil geformt ist.

## Definieren des Navigationsmenü-Markups

Unser HTML ist typisch für ein Navigationsmenü — eine Liste von Links.

```html live-sample___jigsaw-example
<ul>
  <li><a href="#">One</a></li>
  <li><a href="#">Two</a></li>
  <li><a href="#">Three</a></li>
  <li><a href="#">Four</a></li>
</ul>
```

## Festlegen der grundlegenden Seitendesigns

Die grundlegenden Seitenlayout-Designs sind wie folgt. Wir wenden einige grundlegende Schriftartenstile an, verwenden {{cssxref("height")}}, um den {{htmlelement("body")}} den Ansichtsbereich ausfüllen zu lassen, und verwenden [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um das Navigationsmenü in der Mitte des Bildschirms zu platzieren.

```css live-sample___jigsaw-example
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-family: "Helvetica", "Arial";
  font-size: 1.2rem;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Anwenden der allgemeinen Navigationsstile

Zuerst stylen wir das {{htmlelement("ul")}}, indem wir den Standard-{{cssxref("list-style-type")}} und das {{cssxref("padding")}} entfernen und einen {{cssxref("display")}}-Wert von `flex` setzen, um die enthaltenen {{htmlelement("li")}}-Elemente in einer Reihe anzuordnen. Wir setzen dann einen {{cssxref("gap")}}-Wert von `0` und wenden eine {{cssxref("transition")}} an, sodass bei einer Zustandsänderung des `<ul>` ein Wertänderung des `gap`-Werts sanft animiert.

```css live-sample___jigsaw-example
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 0;
  transition: gap 0.6s;
}
```

Als nächstes stylen wir die `<li>`-Elemente. Wir möchten, dass jedes Navigationselement quadratisch ist, daher setzen wir eine gleiche {{cssxref("width")}} und {{cssxref("height")}}.

```css live-sample___jigsaw-example
li {
  width: 160px;
  height: 160px;
}
```

Anschließend stylen wir die {{htmlelement("a")}}-Elemente innerhalb der Listenelemente. Wir beginnen damit, die Standard-{{cssxref("text-decoration")}} zu entfernen und die {{cssxref("color")}} auf `black` zu setzen. Dann setzen wir eine `width` und `height` von `100%`, um die `<a>`-Elemente den gesamten Bereich der `<li>`-Elemente ausfüllen zu lassen, und verwenden [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um ihren Text horizontal und vertikal zu zentrieren.

Wir setzen dann {{cssxref("box-shadow")}} und {{cssxref("text-shadow")}}-Eigenschaften auf die Links, plus eine `transition`, sodass alle Eigenschaftswertänderungen sanft animiert werden, wenn sich der Zustand des Elements ändert.

```css live-sample___jigsaw-example
a {
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow:
    2px 0px 2px rgb(0 0 0 / 0.5),
    inset 3px 3px 3px rgb(255 255 255 / 0.5);
  text-shadow: 1px 1px 1px rgb(0 0 0 / 0.5);
  transition: all 0.6s;
}
```

Dann geben wir jedem Puzzleteil eine andere Farbe:

```css live-sample___jigsaw-example
li:nth-child(1) a {
  background-color: #2de1fc;
}

li:nth-child(2) a {
  background-color: #2afc98;
}

li:nth-child(3) a {
  background-color: #09e85e;
}

li:nth-child(4) a {
  background-color: #16c172;
}
```

## Handhabung der Randform

Jetzt ist es an der Zeit, die `border-shape` für jedes Navigationselement festzulegen, um den Puzzleteillook zu erhalten, den wir anstreben. Zur Abwechslung haben wir jedes ungerade `<a>`-Element wie ein nach unten zeigendes Puzzleteil und jedes gerade `<a>`-Element wie ein nach oben zeigendes Puzzleteil geformt:

```css live-sample___jigsaw-example
li:nth-child(even) a {
  border-shape: shape(
      from 0% 0%,
      hline to 33%,
      arc by 33% 0% of 16% 20% small cw,
      hline to 100%,
      line to 100% 33%,
      arc by 0% 33% of 20% 16% small cw,
      line to 100% 100%,
      hline to 66%,
      arc by -33% 0% of 16% 20% small ccw,
      hline to 0%,
      line to 0% 66%,
      arc by 0% -33% of 20% 16% small ccw,
      close
    )
    content-box;
}

li:nth-child(odd) a {
  border-shape: shape(
      from 0% 0%,
      hline to 33%,
      arc by 33% 0% of 16% 20% small ccw,
      hline to 100%,
      line to 100% 33%,
      arc by 0% 33% of 20% 16% small cw,
      line to 100% 100%,
      hline to 66%,
      arc by -33% 0% of 16% 20% small cw,
      hline to 0%,
      line to 0% 66%,
      arc by 0% -33% of 20% 16% small ccw,
      close
    )
    content-box;
}
```

Dies erzeugt sofort ein Problem — die Kerben an den Puzzleteilen, die außerhalb des ursprünglichen `<a>`-Bereichs liegen, sind nicht durch die Hintergrundfarben der `<a>`-Elemente gefüllt.

Es gibt eine Lösung für dieses Problem. Wir haben absichtlich den `content-box` `<geometry-box>`-Wert nach jeder `shape()`-Funktion in den vorherigen zwei Regeln eingefügt. Das bedeutet, dass die Formen relativ zu den Content-Boxen der Elemente gezeichnet werden und jegliches angewandte `padding` nicht innerhalb der Form gesetzt wird. Stattdessen wird das Padding außerhalb der Form platziert, wodurch diese kleiner wird und die Hintergrundfarbe die Kerben auffüllt.

Das erforderliche `padding` wird folgendermaßen gesetzt:

```css live-sample___jigsaw-example
a {
  padding: 24px;
}
```

> [!NOTE]
> Sie können das Hintergrundproblem sehen, indem Sie das [Live-Beispiel](#ergebnis) in den Entwicklerwerkzeugen Ihres Browsers inspizieren und das auf die `<a>`-Elemente angewendete `padding` deaktivieren.

Das `padding` führt dazu, dass die Puzzleteile kleiner werden, sodass Lücken zwischen ihnen entstehen. Wir möchten, dass sie sich anfänglich berühren, daher setzen wir einen großen negativen {{cssxref("margin-right")}}-Wert auf jedes Listenelement, um sie zusammenzubringen:

```css live-sample___jigsaw-example
li {
  margin-right: -47px;
}
```

Eine Nebenwirkung dieser `margin-right`-Einstellung ist, dass alle `<li>`-Elemente nach rechts verschoben werden, sodass das Navigationsmenü nicht mehr horizontal zentriert ist. Um dies zu beheben, verwenden wir die [relative Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#relative_positioning), um das `<ul>` wieder nach links zu verschieben:

```css live-sample___jigsaw-example
ul {
  position: relative;
  right: 23.5px;
}
```

Schließlich wenden wir einige Stilaktualisierungen an, die bei `:hover` und `:focus` in Kombination mit den zuvor gesetzten `transition`-Eigenschaften einige animierte Effekte bei der Interaktion mit den Navigationselementen erzeugen. Wir erhöhen das auf das `<ul>`-Flexbox-Layout gesetzte `gap`, wenn es überfahren oder fokussiert wird. Um den Fokussierzustand zu handhaben, verwenden wir die {{cssxref(":has")}}-Pseudo-Klasse, um das gesamte `<ul>` zu selektieren, wenn ein `<a>` darin fokussiert wird.

```css live-sample___jigsaw-example
ul:hover,
ul:has(a:focus) {
  gap: 30px;
}
```

Wir setzen dann einen erhöhten `brightness` {{cssxref("filter")}}, einen {{cssxref("scale")}}-Faktor und einen äußeren `box-shadow` auf die `<a>`-Elemente selbst, wenn sie überfahren oder fokussiert werden, sodass sie bei Interaktion heller und angehoben erscheinen.

```css live-sample___jigsaw-example
a:hover,
a:focus {
  filter: brightness(1.2);
  scale: 1.1;
  box-shadow:
    5px 0px 10px rgb(0 0 0 / 0.5),
    inset 3px 3px 3px rgb(255 255 255 / 0.5);
}
```

## Ergebnis

{{EmbedLiveSample("jigsaw-example", "100%", "240")}}

Fahren Sie mit der Maus über die Navigationselemente oder fokussieren Sie sie, um die animierten Effekte zu sehen. Beachten Sie, wie natürlich die verschiedenen angewendeten Effekte mit den `border-shape`-Werten zusammenarbeiten.

```css hidden live-sample___jigsaw-example
@supports not (border-shape: circle(50%)) {
  body::before {
    content: "Your browser does not support the 'border-shape' property.";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## Siehe auch

- {{cssxref("border-shape")}}
- Modul [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
- Modul [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [border-shape: the future of the non-rectangular web](https://una.im/border-shape) von Una Kravets (2026)
- [Get Ready For the Powerful CSS border-shape Property!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) auf CSS Tricks (2026)
