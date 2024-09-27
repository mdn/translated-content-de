---
title: timeline-scope
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animations-Zeitleiste.

Standardmäßig kann eine benannte Zeitleiste (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Zeitleiste eines direkten Nachfahrelements festgelegt werden (d.h. indem {{cssxref("animation-timeline")}} darauf gesetzt wird, mit dem Zeitleistennamen als Wert). Dies ist der Standard-"Geltungsbereich" der Zeitleiste.

`timeline-scope` erhält den Namen einer Zeitleiste, die auf einem Nachfahrelement definiert ist; dies bewirkt, dass der Geltungsbereich der Zeitleiste auf das Element erweitert wird, auf dem `timeline-scope` gesetzt ist, sowie auf dessen Nachfahren. Mit anderen Worten, dieses Element und alle seine Nachfahren können jetzt mit dieser Zeitleiste gesteuert werden.

> [!NOTE]
> Wenn keine Zeitleiste (oder mehrere Zeitleisten) mit dem für den `timeline-scope`-Wert angegebenen Namen existieren, wird eine inaktive Zeitleiste mit dem angegebenen Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Geltungsbereich der Zeitleiste.
- `<dashed-ident>`

  - : Gibt den Namen einer existierenden benannten Zeitleiste an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrelement definiert ist. Dies bewirkt, dass der Geltungsbereich der Zeitleiste auf das Element erweitert wird, auf dem `timeline-scope` gesetzt ist, sowie auf dessen Nachfahren.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident) Werte müssen mit `--` beginnen, was hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Zeitleiste namens `--myScroller` mit der Eigenschaft `scroll-timeline-name` auf dem Element mit der `scroller` Klasse (dem Scrolling-Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (dem animierten Element) angewendet, indem `animation-timeline: --myScroller` gesetzt wird. Der entscheidende Punkt hier ist, dass das animierte Element kein Nachfahre des Scrolling-Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--myScroller` Zeitleiste, indem wir `timeline-scope: --myScroller` auf {{htmlelement("body")}} setzen.

### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Der CSS-Code ist wie folgt.

Zunächst setzen wir die Höhe des `<body>` auf `100vh` und legen die beiden Kindelemente als zwei gleich große Spalten mit Flexbox an. Wir setzen ebenfalls `timeline-scope: --myScroller` darauf, damit die `--myScroller` Zeitleiste als steuernde Zeitleiste für eine Animation auf dem `<body>` und jedem darin enthaltenen Element gesetzt werden kann.

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  /* increases the timeline scope from the .scroller <div> element
  to the whole <body> */
  timeline-scope: --myScroller;
}

.content,
.scroller {
  flex: 1;
}
```

Als nächstes hat das Scrolling-Element die `--myScroller` Zeitleiste darauf gesetzt, `overflow`, damit es scrollt, und es erhält eine Hintergrundfarbe, damit seine Grenze klar zu sehen ist. Das lange Kindelement des Scrolling-Elements erhält eine große Höhe, sodass das Scrolling-Element tatsächlich scrollt.

```css
.scroller {
  overflow: scroll;
  scroll-timeline-name: --myScroller;
  background: deeppink;
}

.long-element {
  height: 2000px;
}
```

Anschließend geben wir dem animierten Element ein wenig grundlegendes Styling und wenden eine Animation darauf an. Wir setzen ebenfalls die `--myScroller` Zeitleiste darauf, indem wir `animation-timeline: --myScroller` verwenden. Zur Wiederholung, dies ist nur möglich, weil wir zuvor `timeline-scope: --myScroller` auf das `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachfahre des Scrolling-Elements.

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
  animation-timeline: --myScroller;
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

Scrollen Sie die vertikale Leiste im pinken Bereich, um das Quadrat zu animieren.

{{EmbedLiveSample("Examples", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
