---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animationstimeline.

Standardmäßig kann eine benannte Timeline (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkten Nachfahr-Elements festgelegt werden (d.h. durch Setzen von {{cssxref("animation-timeline")}} mit dem Timelinenamen als dessen Wert). Dies ist der standardmäßige "Geltungsbereich" der Timeline.

`timeline-scope` erhält den Namen einer auf einem Nachfahrelement definierten Timeline; dies führt dazu, dass der Geltungsbereich der Timeline auf das Element, auf dem `timeline-scope` gesetzt ist, und alle dessen Nachfahren erhöht wird. Mit anderen Worten: Dieses Element und alle seine Nachfahren-Elemente können nun mit dieser Timeline gesteuert werden.

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
  - : Es gibt keine Änderung im Geltungsbereich der Timeline.
- `<dashed-ident>`

  - : Gibt den Namen einer bestehenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrelement definiert ist. Dies führt dazu, dass der Geltungsbereich der Timeline auf das Element, auf dem `timeline-scope` gesetzt ist, und all dessen Nachfahren erhöht wird.

    > [!NOTE] > [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident) Werte müssen mit `--` beginnen, was hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--my-scroller` mittels der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem scrollenden Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (dem animierten Element) angewandt, indem `animation-timeline: --my-scroller` gesetzt wird. Der zentrale Punkt hier ist, dass das animierte Element kein Nachfahre des scrollenden Elements ist — um dies zu ermöglichen, erhöhen wir den Geltungsbereich der `--my-scroller` Timeline, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} setzen.

### HTML

Das HTML für das Beispiel wird unten gezeigt.

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

Zuerst setzen wir die Höhe des `<body>` auf `100vh` und arrangieren dessen zwei Kind-Elemente als zwei gleich große Spalten mit Hilfe von Flexbox. Wir setzen auch `timeline-scope: --my-scroller` auf `<body>`, sodass die `--my-scroller` Timeline als steuernde Timeline für eine auf `<body>` und jedes darin enthaltene Element gesetzte Animation festgelegt werden kann.

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

Als nächstes wird auf das scrollende Element die `--my-scroller` Timeline gesetzt, `overflow`, damit es scrollt, und es erhält eine Hintergrundfarbe, sodass seine Grenze klar sichtbar ist. Das lange Kindelement des scrollenden Elements wird mit einer großen Höhe versehen, damit das scrollende Element tatsächlich scrollt.

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

Dann geben wir dem animierten Element ein grundlegendes Styling und wenden eine Animation darauf an. Wir wenden auch die `--my-scroller` Timeline darauf an, indem wir `animation-timeline: --my-scroller` verwenden. Um es zu wiederholen: Dies ist nur möglich, weil wir zuvor `timeline-scope: --my-scroller` auf das `<body>` Element gesetzt haben — das animierte Element ist **kein** Nachfahre des scrollenden Elements.

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

Scrollen Sie die vertikale Leiste im pinkfarbenen Bereich, um das Quadrat animieren zu sehen.

{{EmbedLiveSample("Examples", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- [`view-timeline`](/de/docs/Web/CSS/Reference/Properties/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
