---
title: timeline-trigger-source CSS property
short-title: timeline-trigger-source
slug: Web/CSS/Reference/Properties/timeline-trigger-source
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`timeline-trigger-source`** legt die Timeline fest, die eine [scroll-ausgelöste Animation](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations) auslöst.

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
  - : Der Trigger des Elements hat keine Quelle: Er ist keiner Timeline zugeordnet, und die Animation wird nicht ausgeführt.
- `auto`
  - : Die Trigger-Quelle des Elements ist die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dies ist der Standardwert.
- {{cssxref("dashed-ident")}}
  - : Das Element erstellt einen Trigger für eine scroll-ausgelöste Animation auf Basis einer [benannten View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).
- [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
  - : Das Element erstellt einen Trigger für eine scroll-ausgelöste Animation auf Basis einer [anonymen Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines).
- [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)
  - : Das Element erstellt einen Trigger für eine scroll-ausgelöste Animation auf Basis einer [anonymen View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function).

## Beschreibung

Die Eigenschaft `timeline-trigger-source` legt den Timeline-Trigger fest, der eine scroll-ausgelöste Animation steuert.

Beispiel:

```css
.trigger {
  timeline-trigger-name: --my-trigger;
  timeline-trigger-source: view();
}
```

Die resultierende [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) verfolgt die Position des Elements `.trigger` entlang der Blockachse des nächstgelegenen scrollbaren Vorfahren. Der Trigger wird aktiviert und deaktiviert, wenn das verfolgte Element an bestimmte Positionen innerhalb des Scrollports gescrollt wird. Wenn `timeline-trigger-source` auf `view()` gesetzt ist, wird der Trigger standardmäßig aktiviert, sobald das verfolgte Element beginnt, in den Scrollport einzutreten. Er wird deaktiviert, sobald das Element den Scrollport vollständig verlassen hat.

Ein animiertes Element kann durch den zuvor beschriebenen Trigger ausgelöst werden, indem dessen `timeline-trigger-name` in der Eigenschaft {{cssxref("animation-trigger")}} des animierten Elements referenziert wird. Der Wert von `animation-trigger` besteht aus einer kommagetrennten Liste. Jeder Eintrag enthält den Namen eines Triggers und ein oder zwei {{cssxref("animation-action")}}-Schlüsselwörter, die festlegen, was die Animation bei der Aktivierung und Deaktivierung des Triggers tun soll.

Beispiel:

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

### Typen von Trigger-Quellen

Um eine ausgelöste Animation zu erstellen, setzen Sie die Eigenschaft `timeline-trigger-source` auf einen von drei grundlegenden Werttypen:

- Eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion, die einen Trigger auf Basis einer [anonymen View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) referenziert. Dieser wird auf dem nächstgelegenen scrollbaren Vorfahren des Elements erstellt, das den Trigger erzeugt. Wie bereits gezeigt, können Sie damit eine Animation starten, wenn dieses oder ein anderes Element einen bestimmten Scroll-Offset im Scrollport erreicht. Die Animation kann beendet oder eine andere Aktion ausgeführt werden, wenn dieses oder ein anderes Element einen anderen Scroll-Offset erreicht. Beispiel:

  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
  ```

- Eine [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktion, die einen Trigger auf Basis einer [anonymen Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) referenziert. Sie können diesen auf dem Wurzelelement oder dem nächstgelegenen scrollbaren Vorfahren des Elements erstellen, das den Trigger erzeugt. Damit können Sie eine Animation starten, wenn dieses oder ein anderes Element einen absoluten Scroll-Offset erreicht (beispielsweise nachdem um `600px` nach oben gescrollt wurde). Die Animation kann beendet oder eine andere Aktion ausgeführt werden, wenn dieses oder ein anderes Element einen anderen Offset erreicht. Beispiel:

  ```css
  timeline-trigger-name: --t;
  timeline-trigger-source: scroll();
  timeline-trigger-activation-range: 600px;
  ```

  > [!NOTE]
  > Siehe das [Beispiel für `timeline-trigger-source` mit `scroll()`](/de/docs/Web/CSS/Reference/Properties/timeline-trigger-source#basic_scroll_progress_timeline_source_usage).

- Ein {{cssxref("dashed-ident")}}, das eine [benannte View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) oder eine [benannte Scroll-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) referenziert. Dazu legen Sie auf dem Element, das den Trigger erstellt, einen {{cssxref("view-timeline-name")}} oder {{cssxref("scroll-timeline-name")}} fest und referenzieren diesen Namen im Wert der Eigenschaft `timeline-trigger-source`. Beispiel:

  ```css
  view-timeline-name: --my-timeline;
  timeline-trigger-source: --my-timeline;
  ```

Scroll-Progress-Timelines sind für scroll-ausgelöste Animationen wohl weniger nützlich als View-Progress-Timelines. Meist möchten Sie eine Animation bei einem Scroll-Offset relativ zum Scrollport starten und nicht nach einer beliebigen Scrollstrecke. Andernfalls könnte die Animation auf kleineren Bildschirmen außerhalb des sichtbaren Bereichs ausgelöst werden.

### Andere Werte

Sie können `timeline-trigger-source` auch auf die Schlüsselwörter `auto` oder `none` setzen. Beide führen dazu, dass die Animation nicht durch Scrollen ausgelöst wird, haben aber unterschiedliche Auswirkungen.

- Der Standardwert `auto` setzt die Trigger-Quelle des Elements auf die standardmäßige zeitbasierte [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) des Dokuments. Dadurch werden auf das Element angewendete Animationen beim Laden der Seite abgespielt.
- Beim Wert `none` hat der Trigger des Elements keine Quelle. Auf das Element angewendete Animationen werden daher überhaupt nicht abgespielt.

### Mehrere Quellen

Wenn Sie für eine einzelne Eigenschaft `timeline-trigger-source` mehrere kommagetrennte Werte angeben, werden diese den Timeline-Triggern in der Reihenfolge zugewiesen, in der die {{cssxref("timeline-trigger-name")}}-Werte erscheinen. Wenn die Anzahl der Trigger und der Werte von `timeline-trigger-source` nicht übereinstimmt, erfolgt die Zuweisung wie bei [mehreren Werten für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

Wenn beispielsweise mehrere Werte für `timeline-trigger-name`, aber nur ein Wert für `timeline-trigger-source` festgelegt sind, gilt dieser für alle `timeline-trigger-name`-Werte. Sind zwei Werte für `timeline-trigger-source` festgelegt, werden sie den `timeline-trigger-name`-Werten wiederholt abwechselnd zugewiesen, bis jeder Name einen Wert für `timeline-trigger-source` hat. Entsprechend verhält es sich mit weiteren Werten.

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

In diesem Beispiel erstellen wir eine einfache scroll-ausgelöste Animation, die einen Trigger auf Basis einer anonymen View-Progress-Timeline verwendet.

#### HTML

Das Markup enthält zwei {{htmlelement("div")}}-Elemente: eines für die Animation und eines zum Erstellen des Triggers. Hinzu kommt einfacher Textinhalt, damit die Seite gescrollt werden kann. Der Text ist der Kürze halber ausgeblendet.

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

Die Eigenschaft {{cssxref("position")}} des animierten `<div>`-Elements wird auf `fixed` gesetzt. Dadurch wird es nahe der oberen linken Ecke des Scrollports positioniert, sodass wir erkennen können, wann seine Animation startet und stoppt.

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

Über die Kurzschreibweise `animation` wird die Animation `rotate` auf das Element `.animated` angewendet. Ohne zugeordneten Trigger würde das Element beim Laden der Seite mit der Animation beginnen. Die Eigenschaft `animation-trigger` macht daraus eine ausgelöste Animation. Ihr Wert referenziert einen `timeline-trigger-name` namens `--t` und gibt zwei `<animation-action>`-Werte an – `play` und `pause`. Diese legen fest, dass die Animation bei der Aktivierung abgespielt und bei der Deaktivierung pausiert wird.

```css live-sample___basic-view-progress-example
.animated {
  animation: rotate 3s infinite linear;
  animation-trigger: --t play pause;
}
```

Das Element `.trigger` erstellt den Trigger für das animierte `<div>` über die folgenden Eigenschaften:

- Einen {{cssxref("timeline-trigger-name")}} mit dem Wert `--t`. Dieser entspricht dem Bezeichner, auf den der Wert der Eigenschaft `animation-trigger` des Elements `.animated` verweist, und verknüpft so die beiden Elemente.
- Eine Eigenschaft `timeline-trigger-source` mit dem Wert [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt, wobei der nächstgelegene scrollbare Vorfahr des Elements die Timeline bereitstellt.

```css live-sample___basic-view-progress-example
.trigger {
  timeline-trigger-name: --t;
  timeline-trigger-source: view();
}
```

#### Ergebnis

{{EmbedLiveSample("basic-view-progress-example", "100%", "240")}}

Versuchen Sie, den Inhalt nach oben zu scrollen. Sobald ein Teil von `.trigger` im Scrollport erscheint, wird die Animation abgespielt. Hat `.trigger` den Scrollport an einer der beiden Seiten vollständig verlassen, wird die Animation pausiert.

### Grundlegende Verwendung einer Scroll-Progress-Timeline als Quelle

Dieses Beispiel ist fast identisch mit dem vorherigen. Diesmal setzen wir `timeline-trigger-source` jedoch auf eine anonyme Scroll-Progress-Timeline statt auf eine anonyme View-Progress-Timeline.

HTML und CSS sind nahezu identisch. Wir haben lediglich `timeline-trigger-source` für das Element `.trigger` auf [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) statt auf `view()` gesetzt. Dadurch wird der Trigger als anonyme Scroll-Progress-Timeline auf dem nächstgelegenen scrollbaren Vorfahren des Elements erstellt.

Außerdem haben wir {{cssxref("timeline-trigger-activation-range")}} auf `600px` gesetzt. Das bedeutet, dass der Trigger aktiviert wird – und die Animation damit beginnt –, wenn das verfolgte Element um `600px` nach oben gescrollt wird. Ohne diese Angabe würde der Trigger sofort beim Laden der Seite aktiviert.

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
- Das Modul [CSS animation triggers](/de/docs/Web/CSS/Guides/Animation_triggers)
- Das Modul [CSS animations](/de/docs/Web/CSS/Guides/Animations)
