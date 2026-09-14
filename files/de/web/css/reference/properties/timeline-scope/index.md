---
title: "`timeline-scope` CSS property"
short-title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-scope`** verändert den Gültigkeitsbereich einer benannten Animations-Zeitachse.

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

Diese Eigenschaft wird als Schlüsselwort oder als kommagetrennte Liste benutzerdefinierter Zeitachsennamen angegeben:

- `none`
  - : Es gibt keine Änderung des Zeitachsen-Gültigkeitsbereichs. Dies ist der Standardwert.
- `all`
  - : Die Namen aller von Nachfahren definierten Zeitachsen liegen für dieses Element und seine Nachfahren im Gültigkeitsbereich.
- `<dashed-ident>`
  - : Gibt den Namen einer vorhandenen benannten Zeitachse an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrenelement definiert ist. Dies erweitert den Zeitachsen-Gültigkeitsbereich auf das aktuelle Element und alle seine Nachfahren.

## Beschreibung

Die Eigenschaft `timeline-scope` verändert den Gültigkeitsbereich einer benannten Animations-Zeitachse. Standardmäßig kann eine [benannte Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#animation_timelines) (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Zeitachse eines direkten Nachfahrenelements festgelegt werden (d.h. indem {{cssxref("animation-timeline")}} darauf gesetzt wird und der Zeitachsenname als Wert verwendet wird). Dies ist der standardmäßige „Gültigkeitsbereich“ der Zeitachse.

Der Wert von `timeline-scope` ist der Name einer Zeitachse, die auf einem Nachfahrenelement definiert ist; dadurch wird der Gültigkeitsbereich der Zeitachse so geändert, dass er das Ziel-Element und dessen Nachfahren einschließt. Mit anderen Worten: Das Element, auf dem die Eigenschaft `timeline-scope` definiert ist, sowie alle seine Nachfahrenelemente können mithilfe dieser Zeitachse gesteuert werden.

Wenn keine Zeitachse (oder mehr als eine Zeitachse) mit dem als `timeline-scope`-Wert angegebenen Namen vorhanden ist, wird eine inaktive Zeitachse mit dem angegebenen Namen erstellt. Die Eigenschaft `timeline-scope` funktioniert nur mit benannten Zeitachsen und kann daher nicht zusammen mit anonymen Zeitachsen verwendet werden, die mit den Animations-Zeitachsenfunktionen {{cssxref("animation-timeline/view", "view()")}} oder {{cssxref("animation-timeline/scroll", "scroll()")}} erstellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel animieren wir ein Element als Reaktion auf das Scrollen eines anderen Elements, indem wir den Zeitachsen-Gültigkeitsbereich mit der Eigenschaft `timeline-scope` erweitern.

### HTML

Das HTML enthält ein zu animierendes Element und ein zu scrollendes Element:

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Eine Scroll-Zeitachse namens `--my-scroller` wird mithilfe der Eigenschaft {{cssxref("scroll-timeline-name")}} auf einem scrollbaren Element definiert. Dieser Scroll-Zeitachsenname wird an zwei weiteren Stellen verwendet: Er wird als {{cssxref("animation-timeline")}} auf das Element angewendet, das wir animieren möchten, und als `timeline-scope` auf einen gemeinsamen Vorfahren des Scrollers und des animierten Elements, wodurch der Gültigkeitsbereich erweitert wird.

Wir setzen die Höhe von `<body>` auf `100vh` und ordnen seine beiden Kindelemente mithilfe von flexbox als zwei gleich große Spalten an. Um den Zeitachsen-Gültigkeitsbereich vom Element `<div class="scroller">` auf das gesamte `<body>` zu erweitern, setzen wir darauf `timeline-scope: --my-scroller`. Dadurch kann die Zeitachse `--my-scroller` als steuernde Zeitachse für eine auf `<body>` oder einem darin verschachtelten Element festgelegte Animation verwendet werden.

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

Wir setzen `--my-scroller` als {{cssxref("scroll-timeline-name")}} auf dem scrollbaren Element, das die Scroll-Fortschrittszeitachse für unser animiertes Element bereitstellen soll. Wir fügen {{cssxref("overflow")}} hinzu, um das Scrollen zu aktivieren, und fügen eine Hintergrundfarbe hinzu, damit seine Begrenzung sichtbar ist. Wir setzen für den Inhalt unseres scrollbaren Elements eine große {{cssxref("height")}}, damit das Element tatsächlich scrollt.

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

Als Nächstes geben wir dem animierten Element einige grundlegende Stile und wenden mithilfe der Kurzform-Eigenschaft {{cssxref("animation")}} eine Animation darauf an. Wir setzen {{cssxref("animation-timeline")}} auf die benannte Scroll-Zeitachse: `--my-scroller`. Um es zu wiederholen: Die Animation des Elements basierend auf dem Scroll-Fortschritt seines verwandten Elements ist nur möglich, weil wir `timeline-scope` auf einem gemeinsamen Vorfahren gesetzt haben; das animierte Element ist **kein** Nachfahre des scrollbaren Elements.

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

Scrollen Sie die vertikale Leiste im rosafarbenen Bereich, um die Animation des Quadrats zu sehen.

{{EmbedLiveSample("Examples", "100%", "320px")}}

Der wichtigste Punkt ist hier, dass das animierte Element kein Nachfahre des scrollbaren Elements ist — damit dies funktioniert, erweitern wir den Gültigkeitsbereich der Zeitachse `--my-scroller`, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
