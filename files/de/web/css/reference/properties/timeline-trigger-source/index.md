---
title: timeline-trigger-source CSS property
short-title: timeline-trigger-source
slug: Web/CSS/Reference/Properties/timeline-trigger-source
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-source`** gibt die Timeline an, die eine [scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) auslöst.

## Syntax

```css
/* Keywords */
timeline-trigger-source: none;
timeline-trigger-source: auto;

/* Named timeline */
timeline-trigger-source: --my-timeline;

/* Anonymous scroll progress timeline */
timeline-trigger-source: scroll();
timeline-trigger-source: scroll(x root);

/* Anonymous view progress timeline */
timeline-trigger-source: view();
timeline-trigger-source: view(inline);
timeline-trigger-source: view(x 200px auto);

/* Multiple source values */
timeline-trigger-source: view(), none, --my-timeline;
timeline-trigger-source: scroll(x), auto, scroll(y root);

/* Global values */
timeline-trigger-source: inherit;
timeline-trigger-source: initial;
timeline-trigger-source: revert;
timeline-trigger-source: revert-layer;
timeline-trigger-source: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste der folgenden Werte angegeben:

- `none`
  - : Der Trigger des Elements hat keine Quelle: Er ist keiner Timeline zugeordnet, und die Animation findet nicht statt.
- `auto`
  - : Die Trigger-Quelle des Elements ist die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.
- {{cssxref("dashed-ident")}}
  - : Das Element erstellt einen Trigger für eine scrollgesteuerte Animation als [benannte View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).
- [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
  - : Das Element erstellt einen Trigger für eine scrollgesteuerte Animation als [anonyme Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines).
- [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)
  - : Das Element erstellt einen Trigger für eine scrollgesteuerte Animation als [anonyme View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function).

## Beschreibung

Die Eigenschaft `timeline-trigger-source` gibt die Timeline an, deren Trigger eine scrollgesteuerte Animation steuert.

Zum Beispiel:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

Die resultierende [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) verfolgt die Position des Elements `.trigger` entlang der Blockachse des nächstgelegenen übergeordneten Scroll-Containers. Der Trigger wird aktiviert und deaktiviert, wenn das verfolgte Element an bestimmte Positionen innerhalb des Scrollports gescrollt wird. Wenn `timeline-trigger-source` auf `view()` gesetzt ist, erfolgt die Aktivierung standardmäßig, sobald das verfolgte Element beginnt, in den Scrollport einzutreten. Die Deaktivierung erfolgt, sobald das Element den Scrollport vollständig verlassen hat.

Ein animiertes Element kann durch den zuvor beschriebenen Trigger ausgelöst werden, indem es dessen `timeline-trigger-name` in seiner Eigenschaft {{cssxref("animation-trigger")}} referenziert. Der Wert von `animation-trigger` besteht aus einer kommagetrennten Liste. Jeder Listeneintrag enthält den Namen eines Triggers und ein oder zwei {{cssxref("animation-action")}}-Schlüsselwörter, die festlegen, was die Animation bei der Aktivierung und Deaktivierung des Triggers tun soll.

Zum Beispiel:

```css
.animated {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;
}
```

Das animierte Element und das Element, das den Trigger erstellt, können identisch sein. In diesem Fall erstellt das animierte Element seinen eigenen Trigger:

```css
.animatedAndTrigger {
  animation: rotate 3s infinite linear both;
  animation-trigger: --my-trigger play-once;

  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

Die Eigenschaft `timeline-trigger-source` kann zusammen mit den Eigenschaften {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}} auch über die Kurzschreibweise {{cssxref("timeline-trigger")}} festgelegt werden.

### Arten von Trigger-Quellen

Um eine ausgelöste Animation zu erstellen, setzen Sie die Eigenschaft `timeline-trigger-source` auf einen von drei grundlegenden Werttypen:

- Eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion, die einen Trigger auf Basis einer [anonymen View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) referenziert. Dieser wird auf dem nächstgelegenen scrollenden Vorfahren des Elements erstellt, das den Trigger erzeugt. Wie zuvor gezeigt, können Sie damit erreichen, dass ein Element zu animieren beginnt, wenn es selbst oder ein anderes Element eine bestimmte Scroll-Position im Scrollport erreicht, und die Animation beendet oder eine andere Aktion ausgeführt wird, wenn es selbst oder ein anderes Element eine andere Scroll-Position erreicht. Zum Beispiel:

  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  ```

- Eine [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktion, die einen Trigger auf Basis einer [anonymen Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) referenziert. Sie können diesen auf dem Wurzelelement oder dem nächstgelegenen Scroll-Container des Elements erstellen, das den Trigger erzeugt. Damit können Sie erreichen, dass ein Element zu animieren beginnt, wenn es selbst oder ein anderes Element eine absolute Scroll-Position erreicht, beispielsweise nachdem es um `600px` nach oben gescrollt wurde. Die Animation kann beendet oder eine andere Aktion ausgeführt werden, wenn es selbst oder ein anderes Element eine andere Position erreicht. Zum Beispiel:

  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: scroll();
  timeline-trigger-activation-range: 600px;
  ```

  > [!NOTE]
  > Siehe das [Beispiel zu `scroll()` mit `timeline-trigger-source`](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-source#basic_scroll_progress_timeline_source_usage).

- Ein {{cssxref("dashed-ident")}}, das eine [benannte View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) oder eine [benannte Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) referenziert. Dazu legen Sie {{cssxref("view-timeline-name")}} oder {{cssxref("scroll-timeline-name")}} für das Element fest, das den Trigger erstellt, und verwenden diesen Namen anschließend als Wert der Eigenschaft `timeline-trigger-source`. Zum Beispiel:

  ```css
  view-timeline-name: --my-timeline;
  timeline-trigger-source: --my-timeline;
  ```

Scroll-Progress-Timelines sind für scrollgesteuerte Animationen möglicherweise weniger nützlich als View-Progress-Timelines. Häufig soll eine Animation bei einer Scroll-Position relativ zum Scrollport beginnen und nicht nach einer beliebigen Scroll-Strecke. Andernfalls könnte die Animation auf kleineren Bildschirmen außerhalb des sichtbaren Bereichs ausgelöst werden.

### Weitere Werte

Sie können `timeline-trigger-source` auch auf das Schlüsselwort `auto` oder `none` setzen. Beide Werte führen zu einer Animation, die nicht durch Scrollen ausgelöst wird, unterscheiden sich jedoch in ihrer Wirkung.

- Der Standardwert `auto` setzt die Trigger-Quelle des Elements auf die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dadurch werden auf das Element angewendete Animationen beim Laden der Seite abgespielt.
- Bei `none` hat der Trigger des Elements keine Quelle. Das bedeutet, dass auf das Element angewendete Animationen überhaupt nicht abgespielt werden.

### Mehrere Quellen

Wenn Sie für eine einzelne Eigenschaft `timeline-trigger-source` mehrere kommagetrennte Werte angeben, werden diese den Timeline-Triggern in der Reihenfolge zugewiesen, in der die {{cssxref("timeline-trigger-name")}}-Werte auftreten. Wenn die Anzahl der Trigger und der Werte von `timeline-trigger-source` nicht übereinstimmt, werden die Werte wie bei [mehreren Werten von Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values) zugewiesen.

Wenn beispielsweise mehrere `timeline-trigger-name`-Werte, aber nur ein `timeline-trigger-source`-Wert angegeben sind, gilt dieser Wert für alle `timeline-trigger-name`-Werte. Sind zwei `timeline-trigger-source`-Werte angegeben, werden sie der Reihe nach wiederholt, bis jedem `timeline-trigger-name` ein `timeline-trigger-source`-Wert zugewiesen ist. Entsprechend verhält es sich bei weiteren Werten.

Betrachten Sie diese Deklarationen:

```css
timeline-trigger-name: --my-trigger, --my-other-trigger, --another-trigger;
timeline-trigger-source: view(), --my-source;
```

In diesem Fall verwendet der erste Name die Quelle `view()` und der zweite die Quelle `--my-source`. Beim dritten Namen beginnt die Zuordnung erneut mit der Quelle `view()`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung einer View-Progress-Timeline als Quelle

In diesem Beispiel erstellen wir eine einfache scrollgesteuerte Animation, die eine anonyme View-Progress-Timeline als Trigger-Quelle verwendet.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente: eines, das animiert werden soll, und eines, das einen Trigger erstellt. Hinzu kommt Textinhalt, damit die Seite gescrollt werden kann. Der Text ist der Kürze halber ausgeblendet.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
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

Die Eigenschaft {{cssxref("position")}} des animierten `<div>`-Elements wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass wir sehen können, wann seine Animation beginnt und endet.

```css hidden live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
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

```css live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
.animated {
  position: fixed;
  top: 25px;
  left: 25px;
}
```

Als Nächstes definieren wir die {{cssxref("@keyframes")}} für die Animation `rotate`, die wir später verwenden:

```css live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Über die Kurzschreibweise `animation` wird die Animation `rotate` auf das Element `.animated` angewendet. Ohne zugehörigen Trigger würde das Element beim Laden der Seite zu animieren beginnen. Durch die Eigenschaft `animation-trigger` wird daraus eine ausgelöste Animation. Der Wert referenziert einen `timeline-trigger-name` namens `--t` und gibt zwei `<animation-action>`-Werte an – `play` und `pause`. Diese legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung angehalten wird.

```css live-sample___basic-view-progress-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das animierte `<div>` mithilfe der folgenden Eigenschaften:

- {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner im Wert der Eigenschaft `animation-trigger` des Elements `.animated` und verknüpft so die beiden Elemente.
- `timeline-trigger-source` mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt, wobei das nächstgelegene scrollende Vorfahr-Element die Timeline bereitstellt.

```css live-sample___basic-view-progress-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

#### Ergebnis

{{EmbedLiveSample("basic-view-progress-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben. Sobald ein Teil von `.trigger` im Scrollport erscheint, wird die Animation abgespielt. Hat `.trigger` den Scrollport an einem der beiden Ränder vollständig verlassen, wird die Animation angehalten.

### Grundlegende Verwendung einer Scroll-Progress-Timeline als Quelle

Dieses Beispiel ist nahezu identisch mit dem vorherigen. Diesmal setzen wir `timeline-trigger-source` jedoch auf eine anonyme Scroll-Progress-Timeline statt auf eine anonyme View-Progress-Timeline.

HTML und CSS sind nahezu identisch, außer dass wir `timeline-trigger-source` für das Element `.trigger` diesmal auf [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) statt auf `view()` gesetzt haben. Dadurch wird der Trigger als anonyme Scroll-Progress-Timeline auf dem nächstgelegenen scrollenden Vorfahren des Elements erstellt.

Außerdem haben wir {{cssxref("timeline-trigger-activation-range")}} auf `600px` gesetzt. Das bedeutet, dass der Trigger aktiviert wird – und die Animation zu spielen beginnt –, wenn das verfolgte Element um `600px` nach oben gescrollt wird. Ohne diese Einstellung würde der Trigger sofort beim Laden der Seite aktiviert.

```css hidden live-sample___basic-scroll-progress-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

```css live-sample___basic-scroll-progress-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: scroll();
  timeline-trigger-activation-range: 600px;
}
```

```css hidden live-sample___basic-view-progress-example live-sample___basic-scroll-progress-example
@supports not (timeline-trigger-source: scroll()) {
  body::before {
    content: "Your browser does not support the timeline-trigger-source property.";
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

{{EmbedLiveSample("basic-scroll-progress-example", "100%", "240")}}

Die Animation beginnt, wenn das verfolgte Element um `600px` nach oben gescrollt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- Die Kurzschreibweise {{cssxref("timeline-trigger")}}
- {{cssxref("animation-trigger")}}
- Der Typ {{cssxref("animation-action")}}
- {{cssxref("trigger-scope")}}
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Das Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Das Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
