---
title: timeline-scope
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animationstimeline.

Standardmäßig kann eine benannte Timeline (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkten Nachfahrelementes (d.h. durch Setzen von {{cssxref("animation-timeline")}} auf diesem mit dem Timelinenamen als Wert) festgelegt werden. Dies ist der Standard-„Geltungsbereich“ der Timeline.

`timeline-scope` erhält den Namen einer Timeline, die auf einem Nachfahrelement definiert ist; dies führt dazu, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachfahren. Mit anderen Worten: Dieses Element und alle seine Nachfahrelemente können jetzt mit dieser Timeline gesteuert werden.

> [!NOTE]
> Wenn keine (oder mehr als eine) Timeline mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt.

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
  - : Gibt den Namen einer bestehenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrelement definiert ist. Dies führt dazu, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachfahren.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident)-Werte müssen mit `--` beginnen, um Namenskollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scrolling-Timeline namens `--myScroller` mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem scrollenden Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (dem animierten Element) angewendet, indem `animation-timeline: --myScroller` verwendet wird. Der entscheidende Punkt ist, dass das animierte Element kein Nachfahre des scrollenden Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--myScroller` Timeline, indem wir `timeline-scope: --myScroller` auf der {{htmlelement("body")}} setzen.

### HTML

Das HTML für das Beispiel ist unten dargestellt.

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Das CSS sieht folgendermaßen aus.

Zunächst setzen wir die Höhe des `<body>` auf `100vh` und ordnen dessen zwei Kindelemente als zwei gleiche Spalten mithilfe von Flexbox an. Wir setzen auch `timeline-scope: --myScroller` darauf, damit die `--myScroller` Timeline als steuernde Timeline für eine auf dem `<body>` gesetzte Animation und jedes darin enthaltene Element gesetzt werden kann.

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

Als nächstes wird auf das scrollende Element die `--myScroller` Timeline gesetzt, `overflow` aktiviert, damit es scrollt, und ihm wird eine Hintergrundfarbe gegeben, damit seine Grenze klar zu sehen ist. Dem langen Kindelement des scrollenden Elements wird eine große Höhe zugewiesen, damit das scrollende Element tatsächlich scrollt.

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

Als Nächstes geben wir dem animierten Element ein einfaches Styling und wenden eine Animation darauf an. Wir wenden auch die `--myScroller` Timeline darauf an, indem wir `animation-timeline: --myScroller` verwenden. Nochmals zur Betonung, dies ist nur möglich, weil wir zuvor `timeline-scope: --myScroller` auf das `<body>` Element gesetzt haben — das animierte Element ist **kein** Nachfahre des scrollenden Elements.

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

Scrollen Sie die vertikale Leiste im rosa Bereich, um das Quadrat animieren zu sehen.

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
