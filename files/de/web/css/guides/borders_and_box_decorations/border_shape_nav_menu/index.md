---
title: Erstellen eines unregelmäßigen Navigationsmenüs mit border-shape
short-title: "`border-shape` Navigationsmenü"
slug: Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Die CSS-Eigenschaft {{cssxref("border-shape")}} kann auf Elemente angewendet werden, um präzise geformte Container wie Sprechblasen, abstrakte Tooltip-Designs und mehr zu erstellen, wodurch viele neue kreative Ideen umgesetzt werden können, ohne dass Workarounds oder Tricks erforderlich sind. Sie können alles über die Eigenschaft lernen und grundlegende Beispiele in Aktion auf der Eigenschaftsreferenzseite sehen.

In diesem Leitfaden zeigen wir Ihnen, wie Sie `border-shape` verwenden, um ein unregelmäßiges animiertes Navigationsmenü zu erstellen, bei dem jedes Navigationselement wie ein Puzzlestück geformt ist.

## Definition des Navigationsmenü-Markups

Unser HTML ist für ein Navigationsmenü ziemlich typisch — eine Liste von Links.

```html live-sample___jigsaw-example
<ul>
  <li><a href="#">One</a></li>
  <li><a href="#">Two</a></li>
  <li><a href="#">Three</a></li>
  <li><a href="#">Four</a></li>
</ul>
```

## Festlegung der grundlegenden Seitenstile

Die grundlegenden Seiten-Einrichtungsstile sind wie folgt. Wir wenden einige grundlegende Schriftstile an, verwenden {{cssxref("height")}}, um den {{htmlelement("body")}} den Ansichtsbereich ausfüllen zu lassen, und verwenden [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um das Navigationsmenü in der Mitte des Bildschirms zu platzieren.

```css live-sample___jigsaw-example
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
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

## Anwendung der allgemeinen Navigationsstile

Zuerst stylen wir das {{htmlelement("ul")}}, indem wir den Standardwert {{cssxref("list-style-type")}} und {{cssxref("padding")}} entfernen und einen {{cssxref("display")}}-Wert von `flex` setzen, um die enthaltenen {{htmlelement("li")}}-Elemente in einer Reihe anzuordnen. Dann setzen wir einen {{cssxref("gap")}}-Wert von `0` und wenden eine {{cssxref("transition")}} an, sodass sich ein Wertwechsel des `gap`-Wertes beim Ändern des `<ul>`-Zustands sanft animiert.

```css live-sample___jigsaw-example
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 0;
  transition: gap 0.6s;
}
```

Als nächstes stylen wir die `<li>`-Elemente. Wir möchten jedes Navigationselement quadratisch machen, also setzen wir eine gleiche {{cssxref("width")}} und {{cssxref("height")}}.

```css live-sample___jigsaw-example
li {
  width: 160px;
  height: 160px;
}
```

Als nächstes stylen wir die {{htmlelement("a")}}-Elemente innerhalb der Listeneinträge. Wir beginnen damit, die Standardwerte von {{cssxref("text-decoration")}} zu entfernen und die {{cssxref("color")}} auf `black` zu setzen. Dann setzen wir eine `width` und `height` von `100%`, um die `<a>`-Elemente den gesamten Bereich der `<li>`-Elemente ausfüllen zu lassen, und verwenden [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um ihren Text horizontal und vertikal zu zentrieren.

Dann setzen wir {{cssxref("box-shadow")}} und {{cssxref("text-shadow")}}-Eigenschaften auf den Links und eine `transition`, damit alle Eigenschaftswertänderungen sanft animiert werden, wenn sich der Zustand des Elements ändert.

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

Dann geben wir jedem Puzzlestück eine andere Farbe:

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

## Umgang mit der Randform

Jetzt ist es an der Zeit, das `border-shape` für jedes Navigationselement zu setzen, um das gewünschte Puzzlestück-Aussehen zu erreichen. Zur Abwechslung haben wir jedes ungeradzahlige `<a>`-Element wie ein nach unten zeigendes Puzzlestück und jedes gerade `<a>`-Element wie ein nach oben zeigendes Puzzlestück geformt:

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

Dies erzeugt sofort ein Problem — die Aussparungen der Puzzlestücke, die über den ursprünglichen `<a>`-Bereich hinausgehen, werden nicht von den Hintergrundfarben der `<a>`-Elemente ausgefüllt.

Es gibt eine Lösung für dieses Problem. Wir haben absichtlich die `content-box` `<geometry-box>`-Wert nach jeder `shape()`-Funktion in den vorherigen beiden Regeln eingeschlossen. Dies bedeutet, dass die Formen relativ zu den Inhaltsboxen der Elemente gezeichnet werden und alle angewendeten `padding`-Werte nicht innerhalb der Form gesetzt werden. Stattdessen wird das Padding außerhalb der Form platziert, wodurch es kleiner wird und die Hintergrundfarbe die Aussparungen ausfüllt.

Das erforderliche `padding` wird wie folgt gesetzt:

```css live-sample___jigsaw-example
a {
  padding: 24px;
}
```

> [!NOTE]
> Sie können sehen, wie das Hintergrundproblem aussieht, indem Sie das [Live-Beispiel](#ergebnis) in den Entwicklertools Ihres Browsers inspizieren und das auf die `<a>`-Elemente angewendete `padding` deaktivieren.

Das `padding` bewirkt, dass die Puzzlestücke kleiner werden, sodass Lücken zwischen ihnen entstehen. Wir möchten, dass sie sich zunächst berühren, daher setzen wir einen großen negativen {{cssxref("margin-right")}}-Wert auf jedes Listenelement, um sie zusammenzubringen:

```css live-sample___jigsaw-example
li {
  margin-right: -47px;
}
```

Ein Nebeneffekt dieser `margin-right`-Einstellung ist, dass alle `<li>`-Elemente nach rechts verschoben werden, sodass das Navigationsmenü nicht mehr horizontal zentriert ist. Um dies zu beheben, verwenden wir [relative Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#relative_positioning), um das `<ul>` wieder nach links zu verschieben:

```css live-sample___jigsaw-example
ul {
  position: relative;
  right: 23.5px;
}
```

Schließlich wenden wir einige Stilaktualisierungen bei `:hover` und `:focus` an, die zusammen mit den zuvor gesetzten `transition`-Eigenschaften einige animierte Effekte bei Interaktionen mit den Navigationselementen erzeugen. Wir erhöhen das `gap`, das beim `<ul>`-Flexbox-Layout gesetzt ist, wenn es fokussiert oder über es gehobert wird. Um den Fokuszustand zu handhaben, verwenden wir die {{cssxref(":has")}} Pseudoklasse, um das gesamte `<ul>` auszuwählen, wenn ein `<a>` darin fokussiert wird.

```css live-sample___jigsaw-example
ul:hover,
ul:has(a:focus) {
  gap: 30px;
}
```

Wir setzen dann einen erhöhten `brightness` {{cssxref("filter")}}, {{cssxref("scale")}}-Faktor und äußeren `box-shadow` auf die `<a>`-Elemente selbst, wenn sie gehobert oder fokussiert werden, wodurch sie heller und angehoben erscheinen, sobald sie interagiert werden.

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

Hover oder fokussieren Sie die Navigationselemente, um die animierten Effekte zu sehen. Beachten Sie, wie natürlich die verschiedenen angewendeten Effekte mit den `border-shape`-Werten funktionieren.

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
- [CSS-Ränder und Kastenverzierungen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Modul
- [CSS-Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [border-shape: die Zukunft des nicht-rechteckigen Webs](https://una.im/border-shape) von Una Kravets (2026)
- [Machen Sie sich bereit für die leistungsstarke CSS border-shape-Eigenschaft!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) auf CSS Tricks (2026)
