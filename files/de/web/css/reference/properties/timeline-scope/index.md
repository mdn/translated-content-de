---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft modifiziert den Geltungsbereich einer benannten Animations-Zeitleiste.

Standardmäßig kann eine benannte Zeitleiste (d. h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Zeitleiste eines direkten Nachfahren-Elements festgelegt werden (d. h. indem man {{cssxref("animation-timeline")}} auf dieses mit dem Zeitleistennamen als Wert setzt). Das ist der Standard-"Geltungsbereich" der Zeitleiste.

`timeline-scope` wird der Name einer auf einem Nachfahren-Element definierten Zeitleiste gegeben; dies führt dazu, dass der Geltungsbereich der Zeitleiste auf das Element, auf dem `timeline-scope` gesetzt ist, und alle seine Nachfahren ausgeweitet wird. Mit anderen Worten, dieses Element und alle seine Nachfahren-Elemente können nun mit dieser Zeitleiste gesteuert werden.

> [!NOTE]
> Wenn keine Zeitleiste (oder mehr als eine Zeitleiste) mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Zeitleiste mit dem angegebenen Namen erstellt.

## Syntax

```css
timeline-scope: none;
timeline-scope: custom_name_for_timeline;
```

### Werte

Zulässige Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Geltungsbereich der Zeitleiste.
- `<dashed-ident>`
  - : Gibt den Namen einer bestehenden benannten Zeitleiste an (d. h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahren-Element definiert ist. Dies führt dazu, dass der Geltungsbereich der Zeitleiste auf das Element, auf dem `timeline-scope` gesetzt ist, und alle seine Nachfahren ausgeweitet wird.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/custom-ident)-Werte müssen mit `--` beginnen, um Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel wird eine Scroll-Zeitleiste mit dem Namen `--my-scroller` unter Verwendung der Eigenschaft `scroll-timeline-name` auf dem Element mit der Klasse `scroller` (dem scrollenden Element) definiert. Diese wird dann auf die Animation des Elements mit den Klassen `box` und `animation` (das animierte Element) mit `animation-timeline: --my-scroller` angewendet. Der entscheidende Punkt hier ist, dass das animierte Element kein Nachfahre des scrollenden Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--my-scroller`-Zeitleiste, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} setzen.

### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

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

Zunächst setzen wir die `<body>`-Höhe auf `100vh` und ordnen seine beiden Kindelemente als zwei gleich große Spalten mit Flexbox an. Wir setzen auch `timeline-scope: --my-scroller` darauf, damit die `--my-scroller`-Zeitleiste als steuernde Zeitleiste für eine Animation auf dem `<body>` und jedem im Inneren befindlichen Element gesetzt werden kann.

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

Als nächstes bekommt das scrollende Element die `--my-scroller`-Zeitleiste, `overflow` wird so gesetzt, dass es scrollen kann, und es wird mit einer Hintergrundfarbe versehen, so dass seine Grenze leicht zu erkennen ist. Dem langen untergeordneten Element des scrollenden Elements wird eine große Höhe gegeben, damit das scrollende Element tatsächlich scrollt.

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

Dann geben wir dem animierten Element eine grundlegende Gestaltung und wenden eine Animation darauf an. Wir wenden die `--my-scroller`-Zeitleiste auch mit `animation-timeline: --my-scroller` darauf an. Um zu wiederholen, das ist nur möglich, weil wir zuvor `timeline-scope: --my-scroller` auf dem `<body>`-Element gesetzt haben — das animierte Element ist **kein** Nachfahre des scrollenden Elements.

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
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
