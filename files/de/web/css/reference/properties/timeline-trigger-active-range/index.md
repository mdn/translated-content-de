---
title: CSS-Eigenschaft timeline-trigger-active-range
short-title: timeline-trigger-active-range
slug: Web/CSS/Reference/Properties/timeline-trigger-active-range
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`timeline-trigger-active-range`** legt den aktiven Bereich eines Triggers für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) fest.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-active-range-end")}}

## Syntax

```css
/* Keywords */
timeline-trigger-active-range: normal;
timeline-trigger-active-range: auto;

/* Range start only */
/* Offset only */
timeline-trigger-active-range: 10%;
timeline-trigger-active-range: 40px;
/* Named timeline only */
timeline-trigger-active-range: cover;
/* Named timeline and offset value */
timeline-trigger-active-range: exit -10%;
timeline-trigger-active-range: contain 50px;

/* Range start and end */
timeline-trigger-active-range: entry exit;
/* Offset on start only */
timeline-trigger-active-range: 10% normal;
timeline-trigger-active-range: 100px contain;
timeline-trigger-active-range: entry 10% contain;
/* Offset on end only */
timeline-trigger-active-range: normal exit-crossing 90%;
timeline-trigger-active-range: auto 10%;
timeline-trigger-active-range: contain contain 90%;
/* Offset for both start and end */
timeline-trigger-active-range: 5% 95%;
timeline-trigger-active-range: 200px exit 600px;
timeline-trigger-active-range: entry 10% 90%;
/* Named timeline and offset for both start and end */
timeline-trigger-active-range: entry 0% exit 50%;
timeline-trigger-active-range: contain 100px contain 90%;

/* Multiple ranges */
timeline-trigger-active-range:
  cover,
  entry -5% exit 50%;

/* Global values */
timeline-trigger-active-range: inherit;
timeline-trigger-active-range: initial;
timeline-trigger-active-range: revert;
timeline-trigger-active-range: revert-layer;
timeline-trigger-active-range: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste von Animationsbereichen angegeben. Jeder Animationsbereich besteht aus einem Wert für {{cssxref("timeline-trigger-active-range-start")}} und optional einem Wert für {{cssxref("timeline-trigger-active-range-end")}}.

- `<'timeline-trigger-active-range-start'>`
  - : Das Schlüsselwort `normal`, das Schlüsselwort `auto`, ein {{cssxref("length-percentage")}}, ein {{cssxref("timeline-range-name")}} oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Dieser Wert legt {{cssxref("timeline-trigger-active-range-start")}} fest. Wird ein `<timeline-range-name>` ohne `<length-percentage>` angegeben, ist der Standardwert für `<length-percentage>` `0%`.
- `<'timeline-trigger-active-range-end'>`
  - : Das Schlüsselwort `normal`, das Schlüsselwort `auto`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Dieser Wert legt {{cssxref("timeline-trigger-active-range-end")}} fest. Wird ein `<timeline-range-name>` ohne `<length-percentage>` angegeben, ist der Standardwert für `<length-percentage>` `100%`.

Prozentangaben beziehen sich auf die Länge des benannten Timeline-Bereichs, sofern einer angegeben ist. Andernfalls beziehen sie sich auf die durch `normal` repräsentierte Timeline.

## Beschreibung

Mit der Eigenschaft `timeline-trigger-active-range` können Sie den Anfang oder sowohl den Anfang als auch das Ende des aktiven Bereichs eines Triggers ausdrücklich festlegen. Die Eigenschaft setzt {{cssxref("timeline-trigger-active-range-start")}} und {{cssxref("timeline-trigger-active-range-end")}} in einer einzigen Deklaration. Beide Werte können als Timeline-Bereich, Versatz oder Kombination aus beidem angegeben werden. Der Versatz für Anfang und Ende wird jeweils vom Anfang des zugehörigen Bereichs aus gemessen.

Der _aktive Bereich_ eines Triggers ist der Bereich entlang des zugehörigen Scrollports, in dem ein Trigger für eine [scrollgesteuerte CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) nach seiner Aktivierung aktiv bleibt. Die Aktivierung erfolgt, wenn das beobachtete Element in den _Aktivierungsbereich_ eintritt. Die Deaktivierung erfolgt, wenn es den _aktiven Bereich_ verlässt. Der Standardwert ist `auto`; dadurch erhält `timeline-trigger-active-range` denselben Wert wie {{cssxref("timeline-trigger-activation-range")}}.

Ein aktiver Bereich, der länger als der Aktivierungsbereich ist, ist nützlich, wenn eine Animation innerhalb eines kleinen Bereichs ausgelöst werden soll, der Trigger aber innerhalb eines größeren Bereichs aktiv bleiben soll. Der Trigger wird erst deaktiviert, wenn das beobachtete Element den aktiven Bereich verlässt.

Der Wert `normal` setzt den aktiven Bereich auf den standardmäßigen benannten Bereich. Welcher benannte Bereich der Standard ist, hängt von {{cssxref("timeline-trigger-source")}} ab: Bei einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) entspricht er `cover`, bei einer [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) `scroll`. Die Standardwerte für den Versatz sind `0%` und `100%`. Daher wird `normal` entweder zu `cover 0% cover 100%` oder zu `scroll 0% scroll 100%` aufgelöst.

Mit der Eigenschaft `timeline-trigger-active-range` können Sie Folgendes festlegen:

- Versatz für Anfang und Ende gegenüber dem Bereich `normal`
  - : Ein Wert vom Typ `<length>` oder `<percentage>` gibt einen Versatz gegenüber dem Anfang der Timeline `normal` an. Diese entspricht bei einer View-Progress-Timeline als Quelle standardmäßig [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#cover) und bei einer Scroll-Progress-Timeline als Quelle [`scroll`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#scroll). Negative Werte verschieben Anfang und Ende nach außen und verlängern so den aktiven Bereich. Positive Werte verschieben Anfang und Ende nach innen und verkürzen ihn.
- Bestimmte benannte Bereiche
  - : Wird ein Wert vom Typ `<timeline-range-name>` ohne Versatz angegeben, beträgt der Standardversatz für den Anfang `0%` und für das Ende `100%`. Zu den benannten Timeline-Bereichen gehören `cover`, `contain`, `entry`, `exit`, `entry-crossing`, `exit-crossing` und `scroll`. Siehe [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names).
- Versatz gegenüber bestimmten benannten Bereichen
  - : Werden sowohl ein Wert vom Typ `<timeline-range-name>` als auch ein Wert vom Typ `<length>` oder `<percentage>` angegeben, werden Anfang und Ende um die angegebenen Abstände entlang der jeweiligen benannten Bereiche verschoben. Prozentangaben beziehen sich auf den angegebenen Bereich. Siehe [Innenabstände mit Prozentangaben festlegen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_insets#setting_insets_using_percentages).

In jeder Komponente eines `timeline-trigger-active-range`-Werts muss `<timeline-range-name>` vor dem Versatz vom Typ `<length>` oder `<percentage>` stehen. Im folgenden Beispiel könnte man annehmen, dass `timeline-trigger-active-range-start` auf `contain` und `timeline-trigger-active-range-end` auf `50%` gesetzt wird. Das ist jedoch nicht der Fall: Stattdessen wird `timeline-trigger-active-range-start` auf `contain 50%` gesetzt, während `timeline-trigger-active-range-end` standardmäßig `auto` erhält:

```css
timeline-trigger-active-range: contain 50%;
```

Um `timeline-trigger-active-range-start` auf `contain` und `timeline-trigger-active-range-end` auf `50%` zu setzen, geben Sie `0%` als standardmäßigen Anfangsversatz ausdrücklich an:

```css
timeline-trigger-active-range: contain 0% 50%;
```

Ein festgelegter aktiver Bereich muss mindestens so groß sein wie der Aktivierungsbereich. Insbesondere muss der Wert von `timeline-trigger-active-range-start` vor oder an derselben Position wie der Wert von `timeline-trigger-activation-range-start` liegen. Der Wert von `timeline-trigger-active-range-end` muss an derselben Position wie der Wert von `timeline-trigger-activation-range-end` oder dahinter liegen. Liegt einer der beiden Werte innerhalb des Aktivierungsbereichs, hat er keine Wirkung und der aktive Bereich entspricht dem Aktivierungsbereich.

Die Eigenschaft `timeline-trigger-active-range` kann zusammen mit {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-activation-range")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Explizite Werte und Standardwerte von `timeline-trigger-active-range`

Hinsichtlich expliziter Werte und Standardwerte verhält sich `timeline-trigger-active-range` genauso wie die Eigenschaft {{cssxref("animation-range")}}. Weitere Informationen finden Sie unter:

- [Bereichsanfang und -ende ausdrücklich mit zwei Werten festlegen](/de/docs/Web/CSS/Reference/Properties/animation-range#explicitly_defining_both_range_start_and_range_end_with_two_values)
- [Bereichsanfang festlegen und für das Bereichsende den Standardwert verwenden](/de/docs/Web/CSS/Reference/Properties/animation-range#defining_range_start_and_defaulting_range_end)

### Mehrere Bereiche angeben

Werden in einer kommagetrennten `timeline-trigger-active-range`-Deklaration mehrere Werte angegeben, gilt jeder Wert für einen Timeline-Trigger. Die Zuordnung erfolgt in der Reihenfolge, in der die Namen in der Eigenschaft {{cssxref("timeline-trigger-name")}} stehen. Stimmen die Anzahl der Trigger und die Anzahl der Werte für `timeline-trigger-active-range` nicht überein, werden sie wie [mehrere Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) angewendet:

- Gibt es mehr Werte für `timeline-trigger-active-range` als für `timeline-trigger-name`, werden die überzähligen Bereichswerte verworfen.
- Gibt es mehr Trigger-Namen als Bereiche, werden die Werte für `timeline-trigger-active-range` wiederholt, bis jedem Wert für `timeline-trigger-name` ein Wert für `timeline-trigger-active-range` zugeordnet ist.
- Sind mehrere Werte für `timeline-trigger-name`, aber nur ein Wert für `timeline-trigger-active-range` angegeben, gilt dieser Wert für alle `timeline-trigger-name`-Werte.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich die Verlängerung des aktiven Bereichs eines Triggers auswirkt. Dazu wird eine ausgelöste Animation, deren aktiver Bereich länger als ihr Aktivierungsbereich ist, mit einer identischen ausgelösten Animation verglichen, für die keine Eigenschaft `timeline-trigger-active-range` festgelegt wurde.

#### HTML

Das Markup enthält vier {{htmlelement("div")}}-Elemente – zwei, die animiert werden, und zwei, die als Trigger dienen – sowie weiteren Inhalt, der das Scrollen der Seite ermöglicht. Der zusätzliche Inhalt ist hier der Kürze halber ausgeblendet.

```html
<div class="animated">I am animated</div>
<div class="animated longer">I am animated longer</div>

...
<section>
  <div class="trigger">I create the trigger</div>
  <div class="trigger longer">I create a longer trigger</div>
</section>
...
```

```html hidden live-sample___basic-example
<div class="animated">I am animated</div>
<div class="animated longer">I am animated longer</div>
<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<section>
  <div class="trigger">I create the trigger</div>
  <div class="trigger longer">I create a longer trigger</div>
</section>
<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>

<p>
  Fusce dictum ex quis ipsum consectetur placerat. Cras sed lectus ex. Quisque
  purus dolor, vulputate ac mi eget, commodo varius odio. Suspendisse faucibus
  ipsum vel libero finibus, in placerat nibh congue. Sed iaculis, metus et
  euismod posuere, mi diam vestibulum felis, ac vulputate eros ipsum id justo.
  Etiam a tincidunt purus. Maecenas semper sed enim at blandit. Aenean ut
  sagittis lorem, eget gravida purus. Phasellus eleifend, lectus nec pulvinar
  facilisis, dui dolor feugiat odio, iaculis tempor felis est non tortor. In
  suscipit lorem efficitur molestie tempus. Integer sit amet neque et risus
  iaculis sodales sed eget diam. Quisque sodales nunc sapien, vitae lacinia ex
  luctus quis. Maecenas scelerisque scelerisque elit eu consequat. Etiam ac
  tristique tellus, sed tincidunt velit.
</p>
```

#### CSS

Die Eigenschaft {{cssxref("position")}} der `.animated`-Elemente wird auf `fixed` gesetzt. Dadurch stehen sie nahe der oberen linken Ecke des Scrollports, sodass erkennbar ist, wann ihre Animationen beginnen und anhalten.

```css hidden live-sample___basic-example
body {
  width: 80%;
  margin: 0 auto;
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
}

div {
  height: 100px;
  border: 5px solid black;
}

.animated {
  width: 100px;
  background: orange;
}

.trigger {
  background: wheat;
}
```

```css live-sample___basic-example
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
.animated.longer {
  left: 150px;
}
section {
  display: flex;
  gap: 20px;
}
```

Als Nächstes definieren wir mit {{cssxref("@keyframes")}} die Animation `rotate`:

```css live-sample___basic-example
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Mithilfe der Kurzschreibweise {{cssxref("animation")}} wird die Animation `rotate` auf die `.animated`-Elemente angewendet. Ohne zugehörigen Trigger würden die Elemente beim Laden der Seite mit der Animation beginnen. Durch die Eigenschaft `animation-trigger` wird daraus eine ausgelöste Animation. Die Werte verweisen auf die `timeline-trigger-name`-Werte `--t` beziehungsweise `--longer-t` und legen für beide dieselben `<animation-action>`-Werte fest: `play` und `pause`. Diese bestimmen, dass die Animationen bei Aktivierung abgespielt und bei Deaktivierung pausiert werden.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
.animated.longer {
  animation-trigger: --longer-t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das Element `.animated` mit den folgenden Eigenschaften:

- {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den der `animation-trigger`-Wert des Elements `.animated` verweist, und verknüpft so die beiden Elemente.
- {{cssxref("timeline-trigger-source")}} mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird die Timeline des Triggers als View-Progress-Timeline festgelegt; als Quelle dient das nächstgelegene scrollende Vorfahrenelement.
- {{cssxref("timeline-trigger-activation-range")}} mit dem Wert `contain 25% contain 75%`. Der Bereich `contain` reicht von dem Zeitpunkt, zu dem das Trigger-Element vollständig in den Scrollport eingetreten ist, bis zu dem Zeitpunkt, zu dem es beginnt, ihn zu verlassen. Mit diesem Wert beginnt der Aktivierungsbereich des Triggers bei `25%` des `contain`-Bereichs und endet bei `75%`. Mit anderen Worten: Der Aktivierungsbereich umfasst die mittlere Hälfte des Scrollports.

Das Element `.trigger.longer` erstellt den Trigger für das Element `.animated.longer` mit den folgenden Eigenschaften:

- {{cssxref("timeline-trigger-name")}} mit dem Wert `--longer-t` (der `--t` überschreibt). Dieser entspricht dem Bezeichner, auf den der `animation-trigger`-Wert des Elements `.animated.longer` verweist, und verknüpft so die beiden Elemente.
- `timeline-trigger-active-range` mit dem Wert `cover 0% cover 100%`. Der Bereich `cover` reicht von dem Zeitpunkt, zu dem das Trigger-Element beginnt, in den Scrollport einzutreten, bis es ihn vollständig verlassen hat. Der aktive Bereich umfasst also den Zeitraum, in dem sich irgendein Teil des beobachteten Elements im Scrollport befindet.

```css live-sample___basic-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  timeline-trigger-activation-range: contain 25% contain 75%;
}
.trigger.longer {
  timeline-trigger-name: --longer-t;
  timeline-trigger-active-range: cover 0% cover 100%;
}
```

```css hidden live-sample___basic-example
@supports not (timeline-trigger-active-range: contain 0%) {
  body::before {
    content: "Your browser does not support the timeline-trigger-active-range property.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben. Beide Animationen beginnen, wenn sich die beobachteten `.trigger`-Elemente ungefähr ein Viertel des Weges durch den Scrollport bewegt haben. Scrollen Sie weiter. Die erste Animation pausiert, wenn ihr Trigger-Element 75 % des Weges durch den Scrollport zurückgelegt hat. Die zweite Animation pausiert dagegen erst, wenn ihr Trigger-Element den Scrollport vollständig verlassen hat.

Der Grund dafür ist, dass der aktive Bereich verlängert, wie lange der Trigger aktiv bleibt, aber nicht verändert, wo die Aktivierung erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-active-range-end")}}, {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}} und {{cssxref("timeline-trigger-activation-range")}}
- Kurzschreibweise {{cssxref("timeline-trigger")}}
- {{cssxref("trigger-scope")}}
- Typ {{cssxref("animation-action")}}
- [Scrollgesteuerte CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
