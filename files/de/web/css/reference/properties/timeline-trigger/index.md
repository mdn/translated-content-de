---
title: CSS-Eigenschaft timeline-trigger
short-title: timeline-trigger
slug: Web/CSS/Reference/Properties/timeline-trigger
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`timeline-trigger`** definiert für ein Element einen Auslöser für eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations).

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

Diese Eigenschaft wird entweder als Schlüsselwort `none` oder als kommagetrennte Liste von `<timeline-trigger>`-Werten angegeben:

- `none`
  - : Gibt an, dass das Element keinen Auslöser erstellt. Alle vier Einzelwerteigenschaften werden auf ihre Standardwerte zurückgesetzt.
- `<timeline-trigger>`
  - : Wird als durch Leerzeichen getrennte Liste der folgenden Werte angegeben:
    - `<'timeline-trigger-name'>`
      - : Gibt den {{cssxref("timeline-trigger-name")}}-Wert an, der den identifizierenden Namen des Auslösers darstellt. Der Standardwert ist `none`.
    - `<'timeline-trigger-source'>`
      - : Gibt den {{cssxref("timeline-trigger-source")}}-Wert an, der die Timeline des Auslösers darstellt. Der Standardwert ist `auto`.
    - `<'timeline-trigger-activation-range'>` {{optional_inline}}
      - : Gibt den {{cssxref("timeline-trigger-activation-range")}}-Wert an, der den Aktivierungsbereich des Auslösers darstellt. Der Standardwert ist `normal`. Dies entspricht `cover 0% cover 100%` für eine [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als {{cssxref("timeline-trigger-source")}} und `0% 100%` für eine [Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines) als `timeline-trigger-source`.
    - `<'timeline-trigger-active-range'>` {{optional_inline}}
      - : Gibt, eingeleitet durch einen Schrägstrich (`/`), den {{cssxref("timeline-trigger-active-range")}}-Wert an, der den aktiven Bereich des Auslösers darstellt. Der Standardwert ist `auto`, wodurch `<'timeline-trigger-active-range'>` denselben Wert wie `<'timeline-trigger-activation-range'>` erhält.

## Beschreibung

Mit der Eigenschaft `timeline-trigger` können Sie alle Einzelwerteigenschaften zum Erstellen eines Auslösers für eine [scrollgesteuerte CSS-Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) in einer einzigen Deklaration festlegen. Zugehörige Eigenschaften, die in der kommagetrennten Liste der `timeline-trigger`-Werte nicht angegeben sind, erhalten ihre Standardwerte.

### Reihenfolge der Werte in der Kurzschreibweise

Da einige der zugehörigen Eigenschaften dieselben Wertetypen verwenden, ist ihre Reihenfolge in der Kurzschreibweise wichtig. Die Werte müssen in der angegebenen Reihenfolge stehen:

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

- `--my-trigger` als identifizierenden {{cssxref("timeline-trigger-name")}}-Wert.
- [`view()`](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) als {{cssxref("timeline-trigger-source")}}-Wert. Damit wird das nächstgelegene scrollende Vorfahrenelement als Quelle für die Timeline des Auslösers ausgewählt.
- `entry` als Aktivierungsbereich. Der Auslöser wird also aktiviert, wenn das verfolgte Element in den Bereich [`entry`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry) gelangt. Dieser Bereich reicht vom Überschreiten der Endkante des Scrollports durch die Anfangskante des Elements bis zum Überschreiten derselben Kante durch seine Endkante.
- `contain` als aktiven Bereich. Nach der Aktivierung bleibt der Auslöser somit aktiv, bis das verfolgte Element den Bereich [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry) verlässt: den Bereich, in dem ein Teil des verfolgten Elements im Scrollport sichtbar ist.

Um ein animiertes Element über den beschriebenen Auslöser zu steuern, verweisen Sie in der Eigenschaft {{cssxref("animation-trigger")}} des animierten Elements auf den `timeline-trigger-name`. Legen Sie sowohl `timeline-trigger` als auch `animation-trigger` auf dem animierten Element fest, damit es seinen eigenen Auslöser erstellen kann.

### Der Wert `none`

Das Schlüsselwort `none` gibt an, dass das Element keinen Auslöser für eine scrollgesteuerte Animation erstellt. `none` entspricht `none auto normal / normal` und setzt damit alle vier entsprechenden Einzelwerteigenschaften auf ihre Standardwerte zurück.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie mit der Kurzschreibweise `timeline-trigger` eine scrollgesteuerte Animation erstellen.

#### HTML

Wir verwenden zwei {{htmlelement("div")}}-Elemente: eines, das animiert wird, und eines, für das ein Auslöser erstellt wird. Der Text, durch den die Seite scrollbar wird, ist der Kürze halber ausgeblendet.

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

Die {{cssxref("position")}} des Elements `.animated` wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass sichtbar ist, wann seine Animation beginnt und endet.

```css hidden live-sample___basic-example
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
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

Als Nächstes definieren wir die {{cssxref("@keyframes")}} für eine `rotate`-Animation:

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

Mit der Kurzschreibweise {{cssxref("animation")}} wenden wir die `rotate`-Animation auf das Element `.animated` an. Ohne Auslöser beginnen Animationen beim Laden der Seite. Zusätzlich verwenden wir die Eigenschaft {{cssxref("animation-trigger")}}, die auf einen `timeline-trigger-name` namens `--t` verweist und die beiden `<animation-action>`-Werte `play` und `pause` angibt. Dadurch wird die Animation bei der Aktivierung abgespielt und bei der Deaktivierung angehalten.

```css live-sample___basic-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt mit dem `timeline-trigger`-Wert `--t view() entry / cover` den Auslöser für das Element `.animated`. Diese einzelne Deklaration legt Folgendes fest:

- Einen {{cssxref("timeline-trigger-name")}}-Wert von `--t`. Er entspricht dem Bezeichner, auf den der `animation-trigger`-Wert des Elements `.animated` verweist, und verknüpft so die beiden Elemente.
- Einen {{cssxref("timeline-trigger-source")}}-Wert von [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird eine View-Progress-Timeline als Timeline des Auslösers und das nächstgelegene scrollende Vorfahrenelement als deren Quelle festgelegt.
- Einen {{cssxref("timeline-trigger-activation-range")}}-Wert von [`entry`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry). Der Auslöser wird damit aktiviert, wenn die Block-Anfangskante des verfolgten Elements in den Scrollport eintritt.
- Einen {{cssxref("timeline-trigger-active-range")}}-Wert von [`cover`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#entry). Nach der Aktivierung bleibt der Auslöser damit aktiv, bis das verfolgte Element den Scrollport vollständig verlassen hat.

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view() entry / cover;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie durch den Inhalt. Die Rotation beginnt, wenn das verfolgte Element in den Bereich `entry` gelangt, also wenn das Element `.trigger` erstmals am unteren Rand des Scrollports erscheint. Die Animation endet erst, wenn das Element `.trigger` den Scrollport vollständig verlassen hat.

### Mehrere timeline-trigger-Werte

Dieses Beispiel baut auf dem vorherigen auf. Es zeigt, wie Sie mehrere `timeline-trigger`-Werte für dasselbe Element festlegen, um mehrere Auslöser für verschiedene Animationen zu erstellen.

#### HTML

Das Markup ähnelt dem vorherigen Beispiel, enthält aber ein zusätzliches animiertes `<div>`-Element mit dem `class`-Wert `animated2`. Dieses Beispiel hat zwei animierte Elemente und ein Element, für das Auslöser erstellt werden.

```html hidden live-sample___basic-example live-sample___multiple-values
<div class="animated2">I am animated as well</div>
```

#### CSS

Wie im vorherigen Beispiel haben die animierten Elemente eine `position` von `fixed`. Unterschiedliche `left`-Werte verhindern, dass sie sich überlappen.

```css hidden live-sample___multiple-values
body {
  width: 80%;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
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

Wir definieren zwei Gruppen von `@keyframes` für die Animationen:

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

Für jedes animierte Element ist eine andere Animation festgelegt, die durch einen eigenen Timeline-Auslöser gesteuert wird und andere `<animation-action>`-Werte verwendet. Auf das Element `.animated` wenden wir dieselbe `animation` wie im vorherigen Beispiel an, auf `.animated2` eine andere. Beide verwenden die Eigenschaft `animation-trigger`, jedoch mit unterschiedlichen Werten. Die erste Animation wird bei der Aktivierung abgespielt und bei der Deaktivierung rückwärts ausgeführt. Die zweite wird bei der Aktivierung abgespielt und bei der Deaktivierung angehalten.

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

Für `.trigger` legen wir einen `timeline-trigger`-Wert fest, der zwei Einträge enthält. Jeder Eintrag verwendet andere Werte für `timeline-trigger-name`, `timeline-trigger-activation-range` und `timeline-trigger-active-range`. Dadurch beginnen und enden die Animationen der beiden Elemente an unterschiedlichen Scrollpositionen.

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

Scrollen Sie durch den Inhalt. Das erste animierte Element beginnt sich zu drehen, wenn das verfolgte Element am unteren Rand des Scrollports in den Bereich `entry` gelangt. Sobald das verfolgte Element den Scrollport vollständig verlassen hat, dreht es sich in die entgegengesetzte Richtung. Das zweite animierte Element beginnt sich auf und ab zu bewegen, sobald das verfolgte Element vollständig in den Scrollport eingetreten ist, und hält an, wenn das verfolgte Element beginnt, den Scrollport zu verlassen.

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
