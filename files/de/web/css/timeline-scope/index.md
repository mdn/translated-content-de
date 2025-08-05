---
title: timeline-scope
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animations-Timeline.

Standardmäßig kann eine benannte Timeline (d.h. deklariert durch {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als die steuernde Timeline eines direkten Nachfahrelements festgelegt werden (d.h. durch Setzen von {{cssxref("animation-timeline")}} auf dieses mit dem Timelinenamen als Wert). Dies ist der Standard-"Geltungsbereich" der Timeline.

`timeline-scope` wird der Name einer auf einem Nachfahrelement definierten Timeline gegeben; dies bewirkt, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` festgelegt ist, sowie auf alle seine Nachfahren. Mit anderen Worten, dieses Element und alle seine Nachfahrelemente können nun mit dieser Timeline gesteuert werden.

> [!NOTE]
> Wenn keine Timeline (oder mehr als eine Timeline) mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Timelinen-Geltungsbereich.
- `<dashed-ident>`
  - : Gibt den Namen einer existierenden benannten Timeline an (d.h. deklariert durch {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrelement definiert ist. Dies bewirkt, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` festgelegt ist, sowie auf alle seine Nachfahren.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident)-Werte müssen mit `--` beginnen, um Konflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Timeline namens `--my-scroller` mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem Scroll-Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (dem animierten Element) angewendet, indem `animation-timeline: --my-scroller` verwendet wird. Der entscheidende Punkt ist, dass das animierte Element kein Nachfahre des Scroll-Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--my-scroller`-Timeline, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} setzen.

### HTML

Der HTML-Code für das Beispiel ist unten dargestellt.

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Die CSS lautet wie folgt.

Zunächst setzen wir die Höhe des `<body>` auf `100vh` und verteilen seine zwei Kindelemente als zwei gleich große Spalten mit Hilfe von Flexbox. Wir setzen außerdem `timeline-scope: --my-scroller`, sodass die `--my-scroller`-Timeline als steuerende Timeline für eine auf dem `<body>` und jedem darin befindlichen Element gesetzte Animation festgelegt werden kann.

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  /* increases the timeline scope from the .scroller <div> element
  to the whole <body> */
  timeline-scope: --my-scroller;
}

.content,
.scroller {
  flex: 1;
}
```

Als nächstes wird auf das Scroll-Element die `--my-scroller`-Timeline gesetzt, `overflow`, sodass es scrollt, und es wird eine Hintergrundfarbe festgelegt, damit seine Begrenzung klar erkennbar ist. Dem langen Kind-Element des Scroll-Elements wird eine große Höhe zugewiesen, sodass das Scroll-Element tatsächlich scrollt.

```css
.scroller {
  overflow: scroll;
  scroll-timeline-name: --my-scroller;
  background: deeppink;
}

.long-element {
  height: 2000px;
}
```

Dann geben wir dem animierten Element ein grundlegendes Styling und wenden eine Animation darauf an. Wir setzen auch die `--my-scroller`-Timeline darauf, indem wir `animation-timeline: --my-scroller` verwenden. Um es zu wiederholen, dies ist nur möglich, weil wir zuvor `timeline-scope: --my-scroller` auf dem `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachfahre des Scroll-Elements.

```css
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 20px;
  left: 0%;
}

.animation {
  animation: rotate-appear;
  animation-timeline: --my-scroller;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    left: 0%;
  }

  to {
    rotate: 720deg;
    left: 100%;
  }
}
```

### Ergebnis

Scrollen Sie die vertikale Leiste im pinkfarbenen Bereich, um das Quadrat zu animieren.

{{EmbedLiveSample("Examples", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
