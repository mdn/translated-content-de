---
title: timeline-scope
slug: Web/CSS/timeline-scope
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft modifiziert den Geltungsbereich einer benannten Animations-Zeitleiste.

Standardmäßig kann eine benannte Zeitleiste (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als Steuerzeitleiste eines direkten Nachkommen-Elements festgelegt werden (d.h. durch Setzen von {{cssxref("animation-timeline")}} darauf mit dem Namen der Zeitleiste als Wert). Dies ist der standardmäßige "Bereich" der Zeitleiste.

`timeline-scope` erhält den Namen einer Zeitleiste, die auf einem Nachkommen-Element definiert ist; dies bewirkt, dass der Bereich der Zeitleiste auf das Element, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachkommen ausgedehnt wird. Mit anderen Worten, dieses Element und alle seine Nachkommen können nun unter Verwendung dieser Zeitleiste gesteuert werden.

> [!NOTE]
> Falls keine Zeitleiste (oder mehr als eine Zeitleiste) mit dem Namen, der für den `timeline-scope` Wert angegeben wird, existiert, wird eine inaktive Zeitleiste mit dem angegebenen Namen erstellt.

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

  - : Gibt den Namen einer vorhandenen benannten Zeitleiste an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachkommen-Element definiert ist. Dies bewirkt, dass der Bereich der Zeitleiste auf das Element, auf dem `timeline-scope` gesetzt ist, und auf alle seine Nachkommen ausgedehnt wird.

    > [!NOTE] > [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident) Werte müssen mit `--` beginnen, was hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Offizielle Definition

{{cssinfo}}

## Offizieller Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Zeitleiste namens `--myScroller` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem scrollenden Element) verwendet wird. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (dem animierten Element) angewendet, indem `animation-timeline: --myScroller` gesetzt wird. Der entscheidende Punkt hier ist, dass das animierte Element kein Nachkomme des scrollenden Elements ist — um dies zu realisieren, erweitern wir den Bereich der `--myScroller`-Zeitleiste, indem wir `timeline-scope: --myScroller` auf dem {{htmlelement("body")}} setzen.

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

Zuerst setzen wir die Höhe des `<body>` auf `100vh` und legen seine zwei Kind-Elemente als zwei gleichgroße Spalten mit Flexbox aus. Wir setzen auch `timeline-scope: --myScroller` darauf, sodass die `--myScroller`-Zeitleiste als steuernde Zeitleiste für eine Animation eingestellt werden kann, die auf dem `<body>` und jedem darin enthaltenen Element gesetzt wird.

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

Als Nächstes wird auf dem scrollenden Element die `--myScroller`-Zeitleiste gesetzt, `overflow` wird gesetzt, sodass es scrollen kann, und es erhält eine Hintergrundfarbe, damit seine Begrenzung deutlich zu erkennen ist. Dem Kind-Element des scrollenden Elements wird eine große Höhe gegeben, damit das scrollende Element tatsächlich scrollen kann.

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

Dann geben wir dem animierten Element einige grundlegende Stile und wenden eine Animation darauf an. Wir wenden auch die `--myScroller`-Zeitleiste darauf an, indem `animation-timeline: --myScroller` verwendet wird. Um zu wiederholen, dies ist nur möglich, weil wir zuvor `timeline-scope: --myScroller` auf das `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachkomme des scrollenden Elements.

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
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
