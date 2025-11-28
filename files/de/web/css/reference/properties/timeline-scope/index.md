---
title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: de6b6c760753776ad38b5d77c519fd1e845e0413
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS) Eigenschaft verändert den Geltungsbereich einer benannten Animations-Timeline.

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
  - : Es gibt keine Änderung im Timeline-Geltungsbereich. Dies ist der Standard.
- `all`
  - : Die Namen aller von Nachfahren definierten Timelines sind für dieses Element und seine Nachfahren im Geltungsbereich.
- `<dashed-ident>`
  - : Gibt den Namen einer existierenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahren-Element definiert ist. Dadurch wird der Timeline-Geltungsbereich auf das aktuelle Element und alle seine Nachfahren erweitert.

## Beschreibung

Die `timeline-scope` Eigenschaft verändert den Geltungsbereich einer benannten Animations-Timeline. Standardmäßig kann eine [benannte Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#animation_timelines) (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkten Nachfahren-Elements festgelegt werden (d.h. durch Setzen von {{cssxref("animation-timeline")}} auf dieses mit dem Timelinenamen als Wert). Dies ist der Standard-"Geltungsbereich" für die Timeline.

Der Wert von `timeline-scope` ist der Name einer Timeline, die auf einem Nachfahren-Element definiert ist; dies ändert den Geltungsbereich der Timeline, sodass das Ziel-Element und dessen Nachfahren einbezogen werden. Mit anderen Worten: das Element, auf dem die `timeline-scope` Eigenschaft definiert ist, und alle seine Nachfahren-Elemente können mit dieser Timeline gesteuert werden.

Wenn keine Timeline (oder mehr als eine Timeline) mit dem für den `timeline-scope` Wert angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt. Die `timeline-scope` Eigenschaft funktioniert nur mit benannten Timelines und kann daher nicht in Verbindung mit anonymen Timelines verwendet werden, die mit den Animations-Timeline-Funktionen {{cssxref("view()")}} oder {{cssxref("scroll()")}} erstellt werden.

## Formaler Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel animieren wir ein Element in Reaktion auf das Scrollen eines anderen Elements, indem wir den Timeline-Geltungsbereich mit der `timeline-scope` Eigenschaft erweitern.

### HTML

Das HTML enthält ein Element zum Animieren und ein Element zum Scrollen:

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Eine Scroll-Timeline namens `--my-scroller` wird mithilfe der {{cssxref("scroll-timeline-name")}} Eigenschaft auf einem scrollbaren Element definiert. Dieser Scroll-Timelinenamen wird an zwei anderen Stellen verwendet: Er wird als {{cssxref("animation-timeline")}} auf das Element angewendet, das wir animieren möchten, und als `timeline-scope` auf einen Vorfahren sowohl des Scrollers als auch des animierten Elements, um den Geltungsbereich zu erweitern.

Wir setzen die Höhe des `<body>` auf `100vh` und ordnen seine beiden Kindelemente als zwei gleichmäßige Spalten mit Flexbox an. Um den Timeline-Geltungsbereich vom `<div class="scroller">`-Element auf das gesamte `<body>` zu erweitern, setzen wir `timeline-scope: --my-scroller` darauf. Dadurch kann die `--my-scroller` Timeline als steuernde Timeline für eine auf dem `<body>` oder einem darin verschachtelten Element gesetzte Animation festgelegt werden.

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

Wir setzen `--my-scroller` als {{cssxref("scroll-timeline-name")}} auf dem scrollenden Element, das die Scroll-Progress-Timeline für unser animiertes Element bereitstellen soll. Wir fügen {{cssxref("overflow")}} hinzu, um das Scrollen zu ermöglichen und fügen eine Hintergrundfarbe hinzu, um die Begrenzung sichtbar zu machen. Wir setzen eine große {{cssxref("height")}} auf die Inhalte unseres scrollenden Elements, damit das Element tatsächlich scrollt.

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

Anschließend geben wir dem animierten Element einige rudimentäre Stile und wenden eine Animation darauf an, indem wir die {{cssxref("animation")}} Kurzschreibweise verwenden. Wir setzen die {{cssxref("animation-timeline")}} auf die benannte Scroll-Timeline: `--my-scroller`. Um zu wiederholen: Das Animieren des Elements basierend auf dem Scroll-Fortschritt seines Schwester-Elements ist nur möglich, weil wir `timeline-scope` auf einem gemeinsamen Vorfahren gesetzt haben; das animierte Element ist **kein** Nachfahre des scrollenden Elements.

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

Scrollen Sie die vertikale Leiste im rosa Bereich, um das Quadrat zu animieren.

{{EmbedLiveSample("Examples", "100%", "320px")}}

Der wichtige Punkt hier ist, dass das animierte Element kein Nachfahre des scrollenden Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--my-scroller` Timeline, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
