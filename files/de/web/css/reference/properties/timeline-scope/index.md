---
title: "`timeline-scope` CSS property"
short-title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: 2a3061b6905ba8a8fe2654e1a6a978bc614bfd66
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-scope`** verändert den Gültigkeitsbereich einer benannten Animation-Timeline.

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

Diese Eigenschaft wird als Schlüsselwort oder als durch Kommata getrennte Liste benutzerdefinierter Timeline-Namen angegeben:

- `none`
  - : Wendet keine Änderung auf den Timeline-Gültigkeitsbereich an. Dies ist der Standardwert.
- `all`
  - : Legt den Gültigkeitsbereich so fest, dass alle Timeline-Namen, die auf dem Element oder in dessen Teilbaum festgelegt sind, nur von Elementen innerhalb desselben Teilbaums abgeglichen werden.
- `<dashed-ident>`
  - : Gibt einen oder mehrere durch Kommata getrennte Timeline-Namen an, die mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}} deklariert werden. Legt den Gültigkeitsbereich so fest, dass die angegebenen `scroll-timeline-name`- oder `view-timeline-name`-Werte, wenn sie auf dem Element oder in dessen Teilbaum festgelegt sind, nur von Elementen innerhalb desselben Teilbaums abgeglichen werden.

## Beschreibung

Die Eigenschaft `timeline-scope` verändert den Gültigkeitsbereich einer benannten Animation-Timeline. Standardmäßig kann eine [benannte Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#animation_timelines) (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkten Nachfahr-Elements festgelegt werden (d.h. indem {{cssxref("animation-timeline")}} darauf festgelegt wird und der Timeline-Name als Wert verwendet wird). Dies ist der standardmäßige „Gültigkeitsbereich“ der Timeline.

Der Wert von `timeline-scope` ist der Name einer Timeline, die auf einem Nachfahr-Element definiert ist; dies ändert den Gültigkeitsbereich der Timeline so, dass er das Zielelement und dessen Nachfahren einschließt. Mit anderen Worten: Das Element, auf dem die Eigenschaft `timeline-scope` definiert ist, sowie alle seine Nachfahr-Elemente können mithilfe dieser Timeline gesteuert werden.

Wenn keine Timeline (oder mehr als eine Timeline) mit dem für den Wert `timeline-scope` angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt. Die Eigenschaft `timeline-scope` funktioniert nur mit benannten Timelines und kann daher nicht zusammen mit anonymen Timelines verwendet werden, die mit den Animation-Timeline-Funktionen {{cssxref("animation-timeline/view", "view()")}} oder {{cssxref("animation-timeline/scroll", "scroll()")}} erstellt wurden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel animieren wir ein Element als Reaktion auf das Scrollen eines anderen Elements, indem wir den Timeline-Gültigkeitsbereich mit der Eigenschaft `timeline-scope` vergrößern.

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

Eine Scroll-Timeline namens `--my-scroller` wird mithilfe der Eigenschaft {{cssxref("scroll-timeline-name")}} auf einem scrollbaren Element definiert. Dieser Scroll-Timeline-Name wird an zwei weiteren Stellen verwendet: Er wird als {{cssxref("animation-timeline")}} auf das Element angewendet, das wir animieren möchten, und als `timeline-scope` auf einem Vorfahren sowohl des Scrollers als auch des animierten Elements, wodurch der Gültigkeitsbereich vergrößert wird.

Wir setzen die Höhe von `<body>` auf `100vh` und ordnen seine beiden Kindelemente mithilfe von Flexbox als zwei gleich große Spalten an. Um den Timeline-Gültigkeitsbereich vom Element `<div class="scroller">` auf das gesamte `<body>` zu erweitern, setzen wir darauf `timeline-scope: --my-scroller`. Dadurch kann die Timeline `--my-scroller` als steuernde Timeline für eine Animation festgelegt werden, die auf `<body>` oder einem darin verschachtelten Element eingerichtet ist.

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

Wir setzen `--my-scroller` als {{cssxref("scroll-timeline-name")}} auf dem scrollbaren Element, das die Scrollfortschritts-Timeline für unser animiertes Element bereitstellen soll. Wir fügen {{cssxref("overflow")}} hinzu, um das Scrollen zu aktivieren, und fügen eine Hintergrundfarbe hinzu, um seine Begrenzung sichtbar zu machen. Wir setzen eine große {{cssxref("height")}} für den Inhalt unseres scrollbaren Elements, damit das Element tatsächlich scrollt.

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

Als Nächstes geben wir dem animierten Element einige grundlegende Stile und wenden mithilfe der Kurzform-Eigenschaft {{cssxref("animation")}} eine Animation darauf an. Wir setzen {{cssxref("animation-timeline")}} auf die benannte Scroll-Timeline: `--my-scroller`. Um es zu wiederholen: Das Animieren des Elements basierend auf dem Scrollfortschritt seines Cousin-Elements ist nur möglich, weil wir `timeline-scope` auf einem gemeinsamen Vorfahren gesetzt haben; das animierte Element ist **kein** Nachfahre des scrollbaren Elements.

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

Scrollen Sie den vertikalen Balken im rosafarbenen Bereich, um die Animation des Quadrats zu sehen.

{{EmbedLiveSample("Examples", "100%", "320px")}}

Der entscheidende Punkt ist hier, dass das animierte Element kein Nachfahre des scrollbaren Elements ist — damit dies funktioniert, erweitern wir den Gültigkeitsbereich der Timeline `--my-scroller`, indem wir `timeline-scope: --my-scroller` auf dem {{htmlelement("body")}} festlegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
