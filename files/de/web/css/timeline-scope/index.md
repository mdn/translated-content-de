---
title: timeline-scope
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animationstimeline.

Standardmäßig kann eine benannte Timeline (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkten Nachfahrenelements festgelegt werden (d.h. durch Setzen von {{cssxref("animation-timeline")}} auf dieses mit dem Timelinenamen als Wert). Dies ist der standardmäßige "Geltungsbereich" der Timeline.

`timeline-scope` wird der Name einer auf einem Nachfahrenelement definierten Timeline gegeben; dies bewirkt, dass der Geltungsbereich der Timeline auf das Element, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachfahren erweitert wird. Mit anderen Worten, dieses Element und alle seine Nachfahrenelemente können jetzt mit dieser Timeline gesteuert werden.

> [!NOTE]
> Wenn keine Timeline (oder mehr als eine Timeline) mit dem Namen existiert, der für den `timeline-scope` Wert angegeben ist, wird eine inaktive Timeline mit dem spezifizierten Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung des Geltungsbereichs der Timeline.
- `<dashed-ident>`

  - : Gibt den Namen einer existierenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrenelement definiert ist. Dies bewirkt, dass der Geltungsbereich der Timeline auf das Element, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachfahren erweitert wird.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident) Werte müssen mit `--` beginnen, um Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Timeline namens `--myScroller` unter Verwendung der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (das scrollende Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (das animierte Element) angewendet, indem `animation-timeline: --myScroller` verwendet wird. Der entscheidende Punkt hier ist, dass das animierte Element **kein** Nachfahre des scrollenden Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--myScroller` Timeline, indem wir `timeline-scope: --myScroller` auf dem {{htmlelement("body")}} setzen.

### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Das CSS ist wie folgt.

Zunächst setzen wir die Höhe des `<body>` auf `100vh` und ordnen seine zwei Kindelemente als zwei gleich große Spalten mit Flexbox an. Wir setzen auch `timeline-scope: --myScroller` darauf, damit die `--myScroller` Timeline als steuernde Timeline für eine auf dem `<body>` und jedem darin befindlichen Element gesetzte Animation verwendet werden kann.

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

Als nächstes wird das scrollende Element mit der `--myScroller` Timeline versehen, `overflow` wird so eingestellt, dass es scrollt, und es erhält eine Hintergrundfarbe, damit seine Begrenzung deutlich sichtbar ist. Dem Kindelement des scrollenden Elements wird eine große Höhe gegeben, damit das scrollende Element tatsächlich scrollen kann.

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

Als nächstes geben wir dem animierten Element ein grundlegendes Styling und wenden eine Animation darauf an. Wir setzen auch die `--myScroller` Timeline darauf, indem wir `animation-timeline: --myScroller` verwenden. Zur Wiederholung: Dies ist nur möglich, weil wir zuvor `timeline-scope: --myScroller` auf dem `<body>` Element gesetzt haben — das animierte Element ist **kein** Nachfahre des scrollenden Elements.

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

Scrollen Sie die vertikale Leiste im rosa Bereich, um das Quadrat zu animieren.

{{EmbedLiveSample("Examples", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [Scroll-gesteuerte Animationen in CSS](/de/docs/Web/CSS/CSS_scroll-driven_animations)
