---
title: CSS-Eigenschaft timeline-trigger
short-title: timeline-trigger
slug: Web/CSS/Reference/Properties/timeline-trigger
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Die **`timeline-trigger`**-Eigenschaft ist eine [CSS-Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties), die auf einem Element einen Auslöser für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) definiert.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger-active-range")}}

## Syntax

```css
/* Keyword */
timeline-trigger: none;

/* Name | source */
timeline-trigger: --t view();
timeline-trigger: --t --my-timeline;

/* Name | source | activation range */
timeline-trigger: --t view() contain;
timeline-trigger: --t --my-timeline entry exit 50%;

/* Name | source | activation range | active range */
timeline-trigger: --t view() contain / cover;
timeline-trigger: --t --my-timeline entry / entry exit 50%;

/* Multiple triggers */
timeline-trigger:
  --t view(),
  --other-trigger --my-timeline entry / entry 50% exit 50%;

/* Global values */
timeline-trigger: inherit;
timeline-trigger: initial;
timeline-trigger: revert;
timeline-trigger: revert-layer;
timeline-trigger: unset;
```

### Werte

Diese Eigenschaft wird entweder mit dem Schlüsselwort `none` oder mit einer kommagetrennten Liste von `<timeline-trigger>`-Werten angegeben:

- `none`
  - : Gibt an, dass das Element keinen Auslöser erzeugt. Alle vier Einzelwerte werden auf ihre Standardwerte zurückgesetzt.
- `<timeline-trigger>`
  - : Wird als durch Leerzeichen getrennte Liste der folgenden Werte angegeben:
    - `<'timeline-trigger-name'>`
      - : Gibt den {{cssxref("timeline-trigger-name")}}-Wert an, der den identifizierenden Namen des Auslösers darstellt. Der Standardwert ist `none`.
    - `<'timeline-trigger-source'>`
      - : Gibt den {{cssxref("timeline-trigger-source")}}-Wert an, der die Timeline des Auslösers darstellt. Der Standardwert ist `auto`.
    - `<'timeline-trigger-activation-range'>` {{optional_inline}}
      - : Gibt den {{cssxref("timeline-trigger-activation-range")}}-Wert an, der den Aktivierungsbereich des Auslösers darstellt. Der Standardwert ist `normal`. Dies entspricht `cover 0% cover 100%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `0% 100%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) als `timeline-trigger-source`.
    - `<'timeline-trigger-active-range'>` {{optional_inline}}
      - : Wird durch einen Schrägstrich (`/`) eingeleitet und gibt den {{cssxref("timeline-trigger-active-range")}}-Wert an, der den aktiven Bereich des Auslösers darstellt. Der Standardwert ist `auto`; dadurch erhält `<'timeline-trigger-active-range'>` denselben Wert wie `<'timeline-trigger-activation-range'>`.

## Beschreibung

Mit der Eigenschaft `timeline-trigger` lassen sich alle Einzelwerte zum Erstellen eines Auslösers für eine [scrollgesteuerte CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) in einer einzigen Deklaration festlegen. Zugehörige Eigenschaften, die in der kommagetrennten Liste der `timeline-trigger`-Werte nicht angegeben sind, erhalten ihre Standardwerte.

### Reihenfolge der Werte in der Kurzschreibweise

Da einige der zugehörigen Eigenschaften dieselben Werttypen verwenden, ist ihre Reihenfolge innerhalb der Kurzschreibweise wichtig. Die Werte müssen in der angegebenen Reihenfolge stehen:

- {{cssxref("timeline-trigger-name")}}
- {{cssxref("timeline-trigger-source")}}
- {{cssxref("timeline-trigger-activation-range")}}
- {{cssxref("timeline-trigger-active-range")}}, eingeleitet durch einen Schrägstrich.

Der Wert für `timeline-trigger-active-range` kann nur angegeben werden, wenn auch ein Wert für {{cssxref("timeline-trigger-activation-range")}} angegeben ist. Die beiden Werte werden durch einen Schrägstrich (`/`) getrennt.

Zum Beispiel:

```css
.trigger {
  timeline-trigger: --my-trigger view() entry / contain;
}
```

Ein Element mit dieser Deklaration hat:

- Den identifizierenden {{cssxref("timeline-trigger-name")}} `--my-trigger`.
- Den {{cssxref("timeline-trigger-source")}}-Wert [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function). Damit wird das nächstgelegene scrollende Vorfahrenelement ausgewählt, um die Timeline des Auslösers zu definieren.
- Den Aktivierungsbereich `entry`. Der Auslöser wird also aktiviert, wenn sich das beobachtete Element in den Bereich [`entry`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry) bewegt. Dieser Bereich reicht vom Überqueren der Endkante des Scrollports durch die Anfangskante des Elements bis zum Überqueren derselben Kante durch die Endkante des Elements.
- Den aktiven Bereich `contain`. Nach der Aktivierung bleibt der Auslöser also aktiv, bis das beobachtete Element den Bereich [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry) verlässt: den Bereich, in dem ein Teil des beobachteten Elements im Scrollport sichtbar ist.

Um über den zuvor beschriebenen Auslöser eine Animation für ein Element auszulösen, verweisen Sie in der {{cssxref("animation-trigger")}}-Eigenschaft des animierten Elements auf den `timeline-trigger-name`. Legen Sie sowohl `timeline-trigger` als auch `animation-trigger` auf dem animierten Element fest, damit es seinen eigenen Auslöser erstellen kann.

### Der Wert `none`

Das Schlüsselwort `none` gibt an, dass das Element keinen Auslöser für eine scrollgesteuerte Animation erzeugt. `none` entspricht `none auto normal / normal` und setzt damit alle vier zugehörigen Einzelwerte auf ihre Standardwerte zurück.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie mit der Kurzschreibweise `timeline-trigger` ein Auslöser für eine scrollgesteuerte Animation erstellt wird.

#### HTML

Wir verwenden zwei {{htmlelement("div")}}-Elemente: eines, das animiert wird, und eines, auf dem der Auslöser erstellt wird. Der Text, der das Scrollen der Seite ermöglicht, wurde der Kürze halber ausgeblendet.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-example live-sample___multiple-values
<div class="animated">I am animated</div>

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

<div class="trigger">I create the trigger</div>

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

Die {{cssxref("position")}} des Elements `.animated` wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass erkennbar ist, wann seine Animation beginnt und endet.

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
```

Als Nächstes definieren wir mit {{cssxref("@keyframes")}} eine `rotate`-Animation:

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

Mit der Kurzschreibweise {{cssxref("animation")}} wenden wir die `rotate`-Animation auf das Element `.animated` an. Ohne Auslöser beginnen Animationen beim Laden der Seite. Wir fügen die Eigenschaft {{cssxref("animation-trigger")}} hinzu, die auf einen `timeline-trigger-name` mit dem Wert `--t` verweist und zwei `<animation-action>`-Werte angibt: `play` und `pause`. Dadurch wird die Animation bei Aktivierung abgespielt und bei Deaktivierung angehalten.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Auslöser für das Element `.animated` mit dem `timeline-trigger`-Wert `--t view() entry / cover`. Damit wird in einer einzigen Deklaration Folgendes festgelegt:

- Ein {{cssxref("timeline-trigger-name")}}-Wert von `--t`. Er entspricht dem Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des Elements `.animated` verweist, und verknüpft so die beiden Elemente.
- Ein {{cssxref("timeline-trigger-source")}}-Wert von [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Damit wird eine View-Progress-Timeline als Timeline des Auslösers und das nächstgelegene scrollende Vorfahrenelement als deren Quelle festgelegt.
- Ein {{cssxref("timeline-trigger-activation-range")}}-Wert von [`entry`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry). Der Auslöser wird damit aktiviert, wenn die Block-Anfangskante des beobachteten Elements in den Scrollport eintritt.
- Ein {{cssxref("timeline-trigger-active-range")}}-Wert von [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry). Nach der Aktivierung bleibt der Auslöser damit aktiv, bis das beobachtete Element den Scrollport vollständig verlassen hat.

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view() entry / cover;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie durch den Inhalt. Die Drehung beginnt, wenn das beobachtete Element in den Bereich `entry` eintritt, also wenn das Element `.trigger` erstmals am unteren Rand des Scrollports erscheint. Die Animation endet erst, wenn das Element `.trigger` den Scrollport vollständig verlassen hat.

### Mehrere timeline-trigger-Werte

Dieses Beispiel baut auf dem vorherigen auf. Es zeigt, wie mehrere `timeline-trigger`-Werte auf demselben Element festgelegt werden können. Dadurch entstehen mehrere Auslöser, die mehrere Animationen auslösen können.

#### HTML

Das Markup ähnelt dem vorherigen Beispiel, enthält aber ein zusätzliches animiertes `<div>`-Element mit der `class` `animated2`. Dieses Beispiel enthält zwei animierte Elemente und ein Element, auf dem die Auslöser erstellt werden.

```html hidden live-sample___basic-example live-sample___multiple-values
<div class="animated2">I am animated as well</div>
```

#### CSS

Wie im vorherigen Beispiel ist die `position` der animierten Elemente `fixed`. Sie haben unterschiedliche `left`-Werte, damit sie sich nicht überlagern.

```css hidden live-sample___multiple-values
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

.animated,
.animated2 {
  width: 100px;
  background: orange;
}

.trigger {
  background: wheat;
}
```

```css live-sample___multiple-values
.animated,
.animated2 {
  position: fixed;
  top: 25px;
}

.animated {
  left: 25px;
}

.animated2 {
  left: 150px;
}
```

Wir definieren zwei Sätze von `@keyframes` für die Animationen:

```css live-sample___multiple-values
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes up-down {
  0% {
    translate: 0 0;
  }

  25% {
    translate: 0 25px;
  }

  50% {
    translate: 0 0;
  }

  75% {
    translate: 0 -25px;
  }

  100% {
    translate: 0 0;
  }
}
```

Jedem animierten Element wird eine andere Animation zugewiesen, die durch einen eigenen Timeline-Auslöser gesteuert wird. Außerdem erhält jedes Element unterschiedliche `<animation-action>`-Werte. Auf das Element `.animated` wenden wir dieselbe `animation` wie im vorherigen Beispiel an, auf das Element `.animated2` eine andere. Beide erhalten die Eigenschaft `animation-trigger`, allerdings mit unterschiedlichen Werten. Die erste Animation wird bei Aktivierung abgespielt und bei Deaktivierung rückwärts abgespielt. Die zweite wird bei Aktivierung abgespielt und bei Deaktivierung angehalten.

```css live-sample___multiple-values
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}

.animated2 {
  animation: up-down 1s infinite linear;
  animation-trigger: --t2 play pause;
}
```

Für `.trigger` legen wir einen `timeline-trigger`-Wert fest, der zwei durch Kommas getrennte Werte enthält. Sie unterscheiden sich jeweils in ihren Werten für `timeline-trigger-name`, `timeline-trigger-activation-range` und `timeline-trigger-active-range`. Dadurch beginnen und beenden die animierten Elemente ihre Animationen an unterschiedlichen Scrollpositionen.

```css live-sample___multiple-values
.trigger {
  timeline-trigger:
    --t view() entry / cover,
    --t2 view() contain;
}
```

```css hidden live-sample___basic-example live-sample___multiple-values
@supports not (timeline-trigger: --t view() entry / cover) {
  body::before {
    content: "Your browser does not support the timeline-trigger property.";
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

{{EmbedLiveSample("multiple-values", "100%", "240")}}

Scrollen Sie durch den Inhalt. Das erste animierte Element beginnt sich zu drehen, wenn das beobachtete Element unten im Scrollport in den Bereich `entry` eintritt. Sobald das beobachtete Element den Scrollport vollständig verlassen hat, dreht es sich rückwärts. Das zweite animierte Element beginnt sich auf und ab zu bewegen, sobald das beobachtete Element vollständig in den Scrollport eingetreten ist. Es hält an, wenn das beobachtete Element beginnt, den Scrollport zu verlassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- Typ {{cssxref("animation-action")}}
- [Scrollgesteuerte CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationsauslöser](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
