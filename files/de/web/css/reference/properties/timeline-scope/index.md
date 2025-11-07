---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animationstimeline.

Standardmäßig kann eine benannte Timeline (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkten Nachfahrenelements festgelegt werden (d.h. indem {{cssxref("animation-timeline")}} darauf mit dem Timeline-Namen als Wert gesetzt wird). Dies ist der Standard-"Geltungsbereich" der Timeline.

`timeline-scope` wird der Name einer Timeline zugewiesen, die auf einem Nachfahrenelement definiert ist; dies führt dazu, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` gesetzt ist, sowie auf alle seine Nachfahren. Mit anderen Worten, dieses Element und alle seine Nachfahrenelemente können nun mithilfe dieser Timeline gesteuert werden.

> [!NOTE]
> Wenn keine Timeline (oder mehr als eine Timeline) mit dem für den `timeline-scope` angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Timeline-Geltungsbereich.
- `<dashed-ident>`
  - : Gibt den Namen einer bestehenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrenelement definiert ist. Dadurch wird der Timeline-Geltungsbereich auf das Element erweitert, auf dem `timeline-scope` gesetzt ist, und alle seine Nachfahren.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident) Werte müssen mit `--` beginnen, was hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--my-scroller` mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (das scrollende Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (das animierte Element) angewendet, indem `animation-timeline: --my-scroller` verwendet wird. Der entscheidende Punkt hier ist, dass das animierte Element kein Nachfahre des scrollenden Elements ist - um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--my-scroller` Timeline, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} setzen.

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

Zunächst setzen wir die Höhe des `<body>` auf `100vh` und layouten seine beiden Kindelemente als zwei gleich große Spalten mit Flexbox. Wir setzen auch `timeline-scope: --my-scroller` darauf, damit die `--my-scroller` Timeline als steuernde Timeline für eine auf dem `<body>` und einem beliebigen darin befindlichen Element gesetzte Animation gesetzt werden kann.

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

Als Nächstes bekommt das scrollende Element die `--my-scroller` Timeline zugewiesen, `overflow`, damit es scrollt, und es erhält eine Hintergrundfarbe, damit seine Grenzen deutlich sichtbar sind. Das Kindelement des scrollenden Elements wird mit einer großen Höhe versehen, damit das scrollende Element tatsächlich scrollen kann.

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

Als Nächstes geben wir dem animierten Element einige grundlegende Stile und wenden eine Animation darauf an. Wir wenden auch die `--my-scroller` Timeline darauf an, indem wir `animation-timeline: --my-scroller` verwenden. Um es zu wiederholen: Dies ist nur möglich, weil wir zuvor `timeline-scope: --my-scroller` auf dem `<body>`-Element gesetzt haben - das animierte Element ist **kein** Nachfahre des scrollenden Elements.

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

Scrollen Sie die vertikale Leiste im rosa Bereich, um das Quadrat zu animieren.

{{EmbedLiveSample("Examples", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- [`view-timeline`](/de/docs/Web/CSS/Reference/Properties/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
