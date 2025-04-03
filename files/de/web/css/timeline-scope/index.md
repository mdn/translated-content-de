---
title: timeline-scope
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}{{seecompattable}}

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animations-Timeline.

Standardmäßig kann eine benannte Timeline (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als Steuerungs-Timeline eines direkten Nachkommenelements festgelegt werden (d.h. durch Festlegen von {{cssxref("animation-timeline")}} mit dem Namen der Timeline als Wert). Dies ist der standardmäßige "Scope" der Timeline.

`timeline-scope` wird der Name einer auf einem Nachkommelelement definierten Timeline gegeben; dies führt dazu, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` festgelegt ist, und auf alle seine Nachkommen. Mit anderen Worten, dieses Element und alle seine Nachkommen können jetzt mit dieser Timeline gesteuert werden.

> [!NOTE]
> Wenn keine Timeline (oder mehr als eine Timeline) mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Timeline mit dem spezifizierten Namen erstellt.

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

  - : Gibt den Namen einer bestehenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachkommelelement definiert ist. Dies führt dazu, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` festgelegt ist, und auf alle seine Nachkommen.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident)-Werte müssen mit `--` beginnen, um Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Timeline namens `--myScroller` mit der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (das scrollende Element) definiert. Diese wird dann auf die Animation auf dem Element mit den Klassen `box` und `animation` (das animierte Element) angewendet, indem `animation-timeline: --myScroller` verwendet wird. Der entscheidende Punkt hier ist, dass das animierte Element kein Nachkomme des scrollenden Elements ist — um dies zu ermöglichen, erhöhen wir den Geltungsbereich der `--myScroller`-Timeline, indem wir `timeline-scope: --myScroller` auf dem {{htmlelement("body")}} setzen.

### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

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

Zuerst setzen wir die Höhe des `<body>` auf `100vh` und ordnen seine beiden Kindelemente als zwei gleich große Spalten mit Flexbox an. Wir setzen auch `timeline-scope: --myScroller` darauf, damit die `--myScroller`-Timeline als Steuerungs-Timeline für eine Animation auf dem `<body>` und jedem darin enthaltenen Element festgelegt werden kann.

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

Als nächstes hat das scrollende Element die `--myScroller`-Timeline auf sich gesetzt, `overflow`, damit es scrollt, und es bekommt eine Hintergrundfarbe, damit seine Grenze klar zu sehen ist. Das lange Kindelement des scrollenden Elements erhält eine große Höhe, damit das scrollende Element tatsächlich scrollt.

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

Als nächstes geben wir dem animierten Element einige grundlegende Stile und wenden eine Animation darauf an. Wir wenden auch die `--myScroller`-Timeline darauf an, indem wir `animation-timeline: --myScroller` verwenden. Zur Wiederholung, dies ist nur möglich, weil wir zuvor `timeline-scope: --myScroller` auf dem `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachkomme des scrollenden Elements.

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
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
