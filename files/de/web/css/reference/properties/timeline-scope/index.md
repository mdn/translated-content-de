---
title: "`timeline-scope` CSS property"
short-title: timeline-scope
slug: Web/CSS/Reference/Properties/timeline-scope
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`timeline-scope`** [CSS](/de/docs/Web/CSS)-Eigenschaft modifiziert den Gültigkeitsbereich einer benannten Animation Timeline.

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

Zulässige Werte für `timeline-scope` sind:

- `none`
  - : Es gibt keine Änderung im Timeline-Gültigkeitsbereich. Dies ist der Standardwert.
- `all`
  - : Die Namen aller durch Nachfahren definierten Timelines sind im Gültigkeitsbereich für dieses Element und seine Nachfahren.
- `<dashed-ident>`
  - : Gibt den Namen einer existierenden benannten Timeline an (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}), die auf einem untergeordneten Element definiert ist. Dies erweitert den Timeline-Gültigkeitsbereich auf das aktuelle Element und auf all seine Nachfahren.

## Beschreibung

Die `timeline-scope`-Eigenschaft modifiziert den Gültigkeitsbereich einer benannten Animation Timeline. Standardmäßig kann eine [benannte Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#animation_timelines) (d.h. deklariert mit {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}}) nur als steuernde Timeline eines direkten Nachfahren-Elements gesetzt werden (d.h. durch das Setzen von {{cssxref("animation-timeline")}} auf diesem mit dem Timelinenamen als Wert). Dies ist der Standard-"Gültigkeitsbereich" für die Timeline.

Der Wert von `timeline-scope` ist der Name einer Timeline, die auf einem untergeordneten Element definiert ist; dies ändert den Gültigkeitsbereich der Timeline, um das gezielte Element und seine Nachfahren einzuschließen. Mit anderen Worten, das Element, auf dem die `timeline-scope`-Eigenschaft definiert ist, und alle seine Nachfahren können unter Verwendung dieser Timeline gesteuert werden.

Falls keine Timeline (oder mehr als eine Timeline) mit dem für den `timeline-scope`-Wert angegebenen Namen existiert, wird eine inaktive Timeline mit dem angegebenen Namen erstellt. Die `timeline-scope`-Eigenschaft funktioniert nur mit benannten Timelines und kann daher nicht in Verbindung mit anonymen Timelines verwendet werden, die mit den {{cssxref("animation-timeline/view", "view()")}} oder {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktionen für Timeline-Animationen erstellt wurden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel haben wir ein Element in Reaktion auf das Scrollen eines anderen Elements animiert, indem wir den Timeline-Gültigkeitsbereich mit der `timeline-scope`-Eigenschaft erweitert haben.

### HTML

Das HTML beinhaltet ein zu animierendes Element und ein zu scrollendes Element:

```html
<div class="content">
  <div class="box animation"></div>
</div>

<div class="scroller">
  <div class="long-element"></div>
</div>
```

### CSS

Eine Scroll-Timeline mit dem Namen `--my-scroller` wird auf einem scrollenden Element unter Verwendung der {{cssxref("scroll-timeline-name")}}-Eigenschaft definiert. Dieser Scroll-Timeline-Name wird an zwei anderen Stellen verwendet: Er wird als {{cssxref("animation-timeline")}} auf das Element angewendet, das wir animieren möchten, und als `timeline-scope` auf einen Vorfahren sowohl des Scroll- als auch des animierten Elements, um den Gültigkeitsbereich zu erweitern.

Wir setzen die Höhe des `<body>` auf `100vh` und arrangieren seine zwei Kindelemente als zwei gleiche Spalten mit Flexbox. Um den Timeline-Gültigkeitsbereich vom `<div class="scroller">`-Element auf das gesamte `<body>` zu erweitern, setzen wir `timeline-scope: --my-scroller` darauf. Dadurch kann die `--my-scroller`-Timeline als steuernde Timeline für eine Animation auf dem `<body>` oder einem darin geschachtelten Element gesetzt werden.

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

Wir setzen `--my-scroller` als {{cssxref("scroll-timeline-name")}} auf das scrollende Element, das die Scrollfortschritt-Timeline für unser animiertes Element bereitstellen soll. Wir fügen {{cssxref("overflow")}} hinzu, um das Scrollen zu aktivieren, und fügen eine Hintergrundfarbe hinzu, um ihre Grenze sichtbar zu machen. Wir setzen eine große {{cssxref("height")}} auf den Inhalt unseres scrollenden Elements, damit das Element tatsächlich gescrollt wird.

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

Als Nächstes geben wir dem animierten Element einige grundlegende Stile und wenden eine Animation mit der {{cssxref("animation")}}-Kurzform-Eigenschaft darauf an. Wir setzen die {{cssxref("animation-timeline")}} auf die benannte Scroll-Timeline: `--my-scroller`. Noch einmal zur Wiederholung: Das Animieren des Elements basierend auf dem Scrollfortschritt seines Cousin-Elements ist nur möglich, weil wir `timeline-scope` auf einem gemeinsamen Vorfahren gesetzt haben; das animierte Element ist **kein** untergeordnetes Element des scrollenden Elements.

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

Der entscheidende Punkt hierbei ist, dass das animierte Element kein Nachfahre des scrollenden Elements ist – um dies zu ermöglichen, erweitern wir den Gültigkeitsbereich der `--my-scroller`-Timeline, indem wir `timeline-scope: --my-scroller` auf das {{htmlelement("body")}} setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
