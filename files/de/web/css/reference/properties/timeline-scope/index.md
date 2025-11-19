---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft ändert den Geltungsbereich einer benannten Animations-Timeline.

Standardmäßig kann eine benannte Timeline (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als Steuerungs-Timeline eines direkten Nachfahrenelements gesetzt werden (d.h. durch Setzen von {{cssxref("animation-timeline")}} auf dieses Element mit dem Namen der Timeline als Wert). Dies ist der Standard-"Scope" der Timeline.

`timeline-scope` erhält den Namen einer Timeline, die auf einem Nachfahrenelement definiert ist; dies führt dazu, dass der Geltungsbereich der Timeline auf das Element, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachfahren erweitert wird. Mit anderen Worten, dieses Element und alle seine Nachfahrenelemente können nun mit dieser Timeline gesteuert werden.

> [!NOTE]
> Wenn keine Timeline (oder mehr als eine Timeline) mit dem für `timeline-scope` angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Geltungsbereich der Timeline.
- `<dashed-ident>`
  - : Gibt den Namen einer bestehenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrenelement definiert ist. Dies führt dazu, dass der Geltungsbereich der Timeline auf das Element, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachfahren erweitert wird.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident) Werte müssen mit `--` beginnen, um Namenskollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--my-scroller` mit der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem Scrolling-Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (dem animierten Element) angewendet, mit `animation-timeline: --my-scroller`. Der entscheidende Punkt hier ist, dass das animierte Element kein Nachfahre des Scrolling-Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--my-scroller` Timeline, indem wir `timeline-scope: --my-scroller` auf den {{htmlelement("body")}} setzen.

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

Zuerst setzen wir die Höhe des `<body>` auf `100vh` und legen seine zwei Kindelemente als zwei gleiche Spalten mit Flexbox an. Wir setzen auch `timeline-scope: --my-scroller` darauf, damit die `--my-scroller` Timeline als Steuerungstimeline für eine Animation auf dem `<body>` und jedem darin befindlichen Element gesetzt werden kann.

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

Als nächstes wird auf dem Scrolling-Element die `--my-scroller` Timeline gesetzt, `overflow`, damit es scrollen kann, und es erhält eine Hintergrundfarbe, damit sein Rand deutlich sichtbar ist. Das lange Kindelement des Scrolling-Elements erhält eine große Höhe, damit das Scrolling-Element tatsächlich scrollt.

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

Dann geben wir dem animierten Element ein einfaches Styling und wenden eine Animation darauf an. Wir setzen auch die `--my-scroller` Timeline darauf, indem wir `animation-timeline: --my-scroller` verwenden. Zur Wiederholung, dies ist nur möglich, weil wir zuvor `timeline-scope: --my-scroller` auf dem `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachfahre des Scrolling-Elements.

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

Scrollen Sie die vertikale Leiste im rosa Bereich, um zu sehen, wie das Quadrat animiert wird.

{{EmbedLiveSample("Examples", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- [`view-timeline`](/de/docs/Web/CSS/Reference/Properties/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name)
- [CSS Scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
