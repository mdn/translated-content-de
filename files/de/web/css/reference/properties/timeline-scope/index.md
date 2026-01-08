---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft modifiziert den Bereich einer benannten Animationszeitleiste.

## Syntax

```css
/* Keyword values */
timeline-scope: all;
timeline-scope: none;

/* Custom name values */
timeline-scope: --custom_name_for_timeline;
timeline-scope: --timeline_name_one, --timeline_name_two;

/* Global values */
timeline-scope: inherit;
timeline-scope: initial;
timeline-scope: revert;
timeline-scope: revert-layer;
timeline-scope: unset;
```

### Werte

Erlaubte Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Zeitleistenbereich. Dies ist der Standardwert.
- `all`
  - : Die Namen aller von Nachfahren definierten Zeitleisten sind im Bereich für dieses Element und seine Nachfahren.
- `<dashed-ident>`
  - : Gibt den Namen einer bestehenden benannten Zeitleiste an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem nachfolgenden Element definiert ist. Dies erweitert den Zeitleistenbereich auf das aktuelle Element und alle seine Nachkommen.

## Beschreibung

Die `timeline-scope`-Eigenschaft modifiziert den Bereich einer benannten Animationszeitleiste. Standardmäßig kann eine [benannte Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#animation_timelines) (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als die kontrollierende Zeitleiste eines direkten Nachfahrenelements festgelegt werden (d.h. indem {{cssxref("animation-timeline")}} darauf mit dem Zeitleistennamen als Wert gesetzt wird). Dies ist der Standard-"Bereich" für die Zeitleiste.

Der Wert von `timeline-scope` ist der Name einer auf einem nachfolgenden Element definierten Zeitleiste; dies ändert den Bereich der Zeitleiste, um das gezielte Element und seine Nachkommen einzuschließen. Mit anderen Worten, das Element, auf dem die `timeline-scope`-Eigenschaft definiert ist, und alle seine nachfolgenden Elemente können anhand dieser Zeitleiste gesteuert werden.

Wenn keine Zeitleiste (oder mehrere Zeitleisten) mit dem für `timeline-scope` gegebenen Namen existieren, wird eine inaktive Zeitleiste mit dem angegebenen Namen erzeugt. Die `timeline-scope`-Eigenschaft funktioniert nur mit benannten Zeitleisten und kann daher nicht in Verbindung mit anonymen Zeitleisten verwendet werden, die mit den Funktionen {{cssxref("animation-timeline/view", "view()")}} oder {{cssxref("animation-timeline/scroll", "scroll()")}} erstellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel animieren wir ein Element als Reaktion auf das Scrollen eines anderen Elements, indem wir den Zeitleistenbereich mit der `timeline-scope`-Eigenschaft erweitern.

### HTML

Das HTML enthält ein zu animierendes Element und ein Element zum Scrollen:

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Eine Scroll-Zeitleiste mit dem Namen `--my-scroller` wird unter Verwendung der {{cssxref("scroll-timeline-name")}}-Eigenschaft auf einem scrollbaren Element definiert. Dieser Scroll-Zeitleistenname wird an zwei weiteren Stellen verwendet: Er wird als {{cssxref("animation-timeline")}} auf das Element angewendet, das wir animieren möchten, und als `timeline-scope` auf einen Vorfahren sowohl des Scroll- als auch des animierten Elements, was den Bereich erweitert.

Wir setzen die Höhe des `<body>` auf `100vh` und platzieren seine zwei Kindelemente als zwei gleich große Spalten mit Flexbox. Um den Zeitleistenbereich vom `<div class="scroller">`-Element auf das gesamte `<body>` zu erweitern, setzen wir `timeline-scope: --my-scroller` darauf. Indem wir dies tun, kann die `--my-scroller`-Zeitleiste als die kontrollierende Zeitleiste für eine auf `<body>` oder einem darin verschachtelten Element gesetzte Animation festgelegt werden.

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;

  timeline-scope: --my-scroller;
}

.content,
.scroller {
  flex: 1;
}
```

Wir setzen `--my-scroller` als die {{cssxref("scroll-timeline-name")}} auf das scrollbare Element, das die Scroll-Fortschrittszeitleiste für unser animiertes Element bereitstellen soll. Wir fügen {{cssxref("overflow")}} hinzu, um das Scrollen zu ermöglichen, und fügen eine Hintergrundfarbe hinzu, um seine Grenze sichtbar zu machen. Wir setzen eine große {{cssxref("height")}} auf den Inhalt unseres scrollbaren Elements, damit das Element tatsächlich scrollt.

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

Als nächstes geben wir dem animierten Element einige grundlegende Stile und wenden eine Animation darauf an, indem wir die {{cssxref("animation")}}-Kurzschreibweise verwenden. Wir setzen die {{cssxref("animation-timeline")}} auf die benannte Scroll-Zeitleiste: `--my-scroller`. Um es zu wiederholen: Das Animieren des Elements basierend auf dem Scroll-Fortschritt seines Cousin-Elements ist nur möglich, weil wir `timeline-scope` auf einen gemeinsamen Vorfahren gesetzt haben; das animierte Element ist **kein** Nachfahre des scrollbaren Elements.

```css
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
}

.animation {
  animation: rotate-appear 1ms linear;
  animation-timeline: --my-scroller;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    translate: 0;
  }

  to {
    rotate: 720deg;
    translate: 100%;
  }
}
```

```css hidden
@layer supports {
  @supports not (timeline-scope: none) {
    body::before {
      content: "Your browser does not support the 'timeline-scope' property.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem;
    }
  }
}
```

### Ergebnis

Scrollen Sie die vertikale Leiste im pinkfarbenen Bereich, um das Quadrat zu animieren.

{{EmbedLiveSample("Examples", "100%", "320px")}}

Der zentrale Punkt hier ist, dass das animierte Element kein Nachfahre des scrollbaren Elements ist — um dies zu ermöglichen, erweitern wir den Bereich der `--my-scroller`-Zeitleiste, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS-scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
