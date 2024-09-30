---
title: timeline-scope
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft ändert den Geltungsbereich einer benannten Animationstimeline.

Standardmäßig kann eine benannte Timeline (d. h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als kontrollierende Timeline eines direkten Nachfahrelements festgelegt werden (d. h. durch Festlegen von {{cssxref("animation-timeline")}} darauf mit dem Timelinenamen als Wert). Dies ist der standardmäßige "Geltungsbereich" der Timeline.

`timeline-scope` erhält den Namen einer auf einem Nachfahrelement definierten Timeline; dies bewirkt, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` gesetzt ist, und auf alle dessen Nachfahren. Mit anderen Worten, dieses Element und alle seine Nachfahrelemente können nun mit dieser Timeline gesteuert werden.

> [!NOTE]
> Wenn keine Timeline (oder mehr als eine Timeline) mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Zulässige Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Geltungsbereich der Timeline.
- `<dashed-ident>`

  - : Gibt den Namen einer vorhandenen benannten Timeline an (d. h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrelement definiert ist. Dies bewirkt, dass der Geltungsbereich der Timeline auf das Element erweitert wird, auf dem `timeline-scope` gesetzt ist, und auf alle dessen Nachfahren.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident)-Werte müssen mit `--` beginnen, um Namenskollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Timeline namens `--myScroller` mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem scrollenden Element) definiert. Dies wird dann auf die Animation auf dem Element mit den Klassen `box` und `animation` (dem animierten Element) unter Verwendung von `animation-timeline: --myScroller` angewendet. Der entscheidende Punkt hier ist, dass das animierte Element kein Nachfahre des scrollenden Elements ist – um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--myScroller`-Timeline, indem wir `timeline-scope: --myScroller` auf dem {{htmlelement("body")}} setzen.

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

Zuerst setzen wir die Höhe des `<body>` auf `100vh` und positionieren seine beiden Kind-Elemente als zwei gleich große Spalten mithilfe von Flexbox. Wir setzen auch `timeline-scope: --myScroller` darauf, sodass die `--myScroller`-Timeline als Steuerungstimeline für eine Animation auf dem `<body>` und jedem Element darin gesetzt werden kann.

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

Als nächstes hat das scrollende Element die `--myScroller`-Timeline darauf gesetzt, `overflow` damit es scrollt, und es bekommt eine Hintergrundfarbe, damit dessen Grenze klar sichtbar ist. Dem langen Kind-Element des scrollenden Elements wird eine große Höhe gegeben, damit das scrollende Element tatsächlich scrollt.

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

Als nächstes geben wir dem animierten Element einige grundlegende Stile und wenden eine Animation darauf an. Wir wenden auch die `--myScroller`-Timeline darauf an, indem wir `animation-timeline: --myScroller` verwenden. Um zu wiederholen, dies ist nur möglich, weil wir zuvor `timeline-scope: --myScroller` auf dem `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachfahre des scrollenden Elements.

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
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
