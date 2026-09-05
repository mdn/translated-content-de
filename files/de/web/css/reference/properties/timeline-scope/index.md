---
title: "`timeline-scope` CSS property"
short-title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft ändert den Geltungsbereich einer benannten Animations-Timeline.

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
  - : Es gibt keine Änderung im Zeithorizont. Dies ist der Standardwert.
- `all`
  - : Die Namen aller Timelines, die von Nachfahren definiert sind, sind im Geltungsbereich für dieses Element und seine Nachfahren.
- `<dashed-ident>`
  - : Gibt den Namen einer bestehenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem Nachfahrenelement definiert ist. Dies erweitert den Zeithorizont auf das aktuelle Element und auf alle seine Nachfahren.

## Beschreibung

Die Eigenschaft `timeline-scope` ändert den Geltungsbereich einer benannten Animations-Timeline. Standardmäßig kann eine [benannte Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#animation_timelines) (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkt untergeordneten Elements festgelegt werden (d.h. durch Setzen von {{cssxref("animation-timeline")}} mit dem Timeline-Namen als Wert). Dies ist der Standard-"Geltungsbereich" für die Timeline.

Der Wert von `timeline-scope` ist der Name einer Timeline, die auf einem Nachfahrenelement definiert ist; dies ändert den Geltungsbereich der Timeline, um das gezielte Element und seine Nachfahren einzuschließen. Mit anderen Worten, das Element, auf dem die Eigenschaft `timeline-scope` definiert ist, und alle seine nachfolgenden Elemente können unter Verwendung dieser Timeline gesteuert werden.

Wenn keine Timeline (oder mehr als eine Timeline) mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt. Die `timeline-scope`-Eigenschaft funktioniert nur mit benannten Timelines und kann daher nicht in Verbindung mit anonymen Timelines verwendet werden, die mithilfe der {{cssxref("animation-timeline/view", "view()")}}- oder {{cssxref("animation-timeline/scroll", "scroll()")}}-Animations-Timeline-Funktionen erstellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel animieren wir ein Element als Reaktion auf das Scrollen eines anderen Elements, indem wir den Zeithorizont mit der `timeline-scope`-Eigenschaft erweitern.

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

Eine Scroll-Timeline mit dem Namen `--my-scroller` wird unter Verwendung der Eigenschaft {{cssxref("scroll-timeline-name")}} auf einem scrollenden Element definiert. Dieser Scroll-Timeline-Name wird an zwei anderen Stellen verwendet: Er wird als {{cssxref("animation-timeline")}} auf das Element angewendet, das wir animieren möchten, und als `timeline-scope` auf einen Vorfahren sowohl des Scrollers als auch des animierten Elements, was den Geltungsbereich erweitert.

Wir setzen die Höhe des `<body>` auf `100vh` und gestalten seine beiden Kindelemente als zwei gleich große Spalten mit Flexbox. Um den Zeithorizont vom `<div class="scroller">`-Element auf das gesamte `<body>` zu erweitern, setzen wir `timeline-scope: --my-scroller` darauf. Dadurch kann die `--my-scroller`-Timeline als steuernde Timeline für eine auf dem `<body>` oder einem darin verschachtelten Element festgelegte Animation verwendet werden.

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

Wir setzen `--my-scroller` als {{cssxref("scroll-timeline-name")}} auf dem scrollenden Element, das die Fortschritts-Timeline für unser animiertes Element bereitstellen soll. Wir fügen {{cssxref("overflow")}} hinzu, um das Scrollen zu aktivieren, und fügen eine Hintergrundfarbe hinzu, um die Begrenzung sichtbar zu machen. Wir setzen eine große {{cssxref("height")}} auf den Inhalt unseres scrollenden Elements, damit das Element tatsächlich scrollt.

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

Als Nächstes geben wir dem animierten Element einige grundlegende Stile und wenden eine Animation darauf an, indem wir die {{cssxref("animation")}}-Kurzform-Eigenschaft verwenden. Wir setzen die {{cssxref("animation-timeline")}} auf die benannte Scroll-Timeline: `--my-scroller`. Nochmals: das Animieren des Elements basierend auf dem Scroll-Fortschritt seines Cousin-Elements ist nur deshalb möglich, weil wir `timeline-scope` auf einen gemeinsamen Vorfahren setzen; das animierte Element ist **kein** Nachkomme des scrollenden Elements.

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

Der entscheidende Punkt hier ist, dass das animierte Element kein Nachkomme des scrollenden Elements ist — um dies zu ermöglichen, erweitern wir den Geltungsbereich der `--my-scroller`-Timeline, indem wir `timeline-scope: --my-scroller` auf das {{htmlelement("body")}} setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS Scroll-Driven Animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
