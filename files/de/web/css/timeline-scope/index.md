---
title: Zeitachsen-Bereich
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{seecompattable}}

Die **`timeline-scope`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ändert den Bereich einer benannten Animations-Zeitachse.

Standardmäßig kann eine benannte Zeitachse (d. h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Zeitachse eines direkten Nachkommenelements festgelegt werden (d. h. indem {{cssxref("animation-timeline")}} darauf gesetzt wird, wobei der Name der Zeitachse als Wert verwendet wird). Dies ist der Standard-"Bereich" der Zeitachse.

`timeline-scope` wird der Name einer Zeitachse zugewiesen, die auf einem Nachkommenelement definiert ist; dadurch wird der Bereich der Zeitachse auf das Element erweitert, auf dem `timeline-scope` eingestellt ist, und auf alle seine Nachkommen. Mit anderen Worten: Dieses Element und alle seine Nachkommenelemente können jetzt mit dieser Zeitachse gesteuert werden.

> [!NOTE]
> Wenn keine Zeitachse (oder mehr als eine Zeitachse) mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Zeitachse mit dem angegebenen Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Zeitachsen-Bereich.
- `<dashed-ident>`

  - : Gibt den Namen einer existierenden benannten Zeitachse an (d. h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachkommenelement definiert ist. Dies bewirkt, dass der Zeitachsen-Bereich auf das Element ausgedehnt wird, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachkommen.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident)-Werte müssen mit `--` beginnen, um Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Zeitachse mit dem Namen `--myScroller` mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem scrollenden Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (dem animierten Element) angewendet, indem `animation-timeline: --myScroller` verwendet wird. Der entscheidende Punkt hierbei ist, dass das animierte Element kein Nachkomme des scrollenden Elements ist — um dies zu ermöglichen, erweitern wir den Bereich der `--myScroller`-Zeitachse, indem wir `timeline-scope: --myScroller` auf dem {{htmlelement("body")}} setzen.

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

Der CSS-Code ist wie folgt.

Zuerst setzen wir die Höhe des `<body>` auf `100vh` und ordnen seine beiden Kindelemente als zwei gleich große Spalten mit Flexbox an. Wir setzen auch `timeline-scope: --myScroller` darauf, damit die `--myScroller`-Zeitachse als steuernde Zeitachse für eine Animation eingestellt werden kann, die auf das `<body>` und jedes darin enthaltene Element angewendet wird.

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  /* erweitert den Zeitachsen-Bereich vom .scroller <div>-Element
  auf das gesamte <body> */
  timeline-scope: --myScroller;
}

.content,
.scroller {
  flex: 1;
}
```

Als Nächstes wird auf das scrollende Element die `--myScroller`-Zeitachse gesetzt, `overflow`, sodass es scrollt, und ihm wird eine Hintergrundfarbe zugewiesen, damit seine Grenze deutlich zu sehen ist. Dem Kindelement des scrollenden Elements (`long-element`) wird eine große Höhe gegeben, damit das scrollende Element tatsächlich scrollt.

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

Danach geben wir dem animierten Element eine grundlegende Gestaltung und wenden eine Animation darauf an. Wir wenden auch die `--myScroller`-Zeitachse darauf mittels `animation-timeline: --myScroller` an. Zur Erinnerung: Dies ist nur möglich, weil wir zuvor `timeline-scope: --myScroller` auf dem `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachkomme des scrollenden Elements.

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

Scrollen Sie die vertikale Leiste im pinken Bereich, um zu sehen, wie das Quadrat animiert wird.

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
