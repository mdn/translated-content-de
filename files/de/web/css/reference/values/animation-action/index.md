---
title: <animation-action>
slug: Web/CSS/Reference/Values/animation-action
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{SeeCompatTable}}

Der {{Glossary("enumerated", "Aufzählungsdatentyp")}} **`<animation-action>`** steht für Schlüsselwortwerte, die festlegen, wie sich eine Animation unter bestimmten Umständen verhalten soll – beispielsweise, wie eine [ausgelöste Animation](/de/docs/Web/CSS/Guides/Animation_triggers) reagieren soll, wenn ihr Trigger aktiviert oder deaktiviert wird.

Die `<animation-action>`-Schlüsselwortwerte werden in der folgenden Eigenschaft verwendet:

- {{cssxref("animation-trigger")}}

## Syntax

Der Aufzählungstyp `<animation-action>` wird mit einem der folgenden Werte angegeben:

- `none`
  - : Für die Animation wird keine Aktion festgelegt.
- `play`
  - : Die Animation wird abgespielt, fortgesetzt (falls sie pausiert ist) oder neu gestartet (falls sie bereits beendet ist), und zwar in ihrer aktuellen Abspielrichtung.
- `play-forwards`
  - : Wie `play`, mit dem Unterschied, dass die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation bei Bedarf angepasst wird (von einem negativen auf einen positiven Wert), damit die Animation vorwärts abgespielt wird.
- `play-backwards`
  - : Wie `play`, mit dem Unterschied, dass die `playbackRate` der Animation bei Bedarf angepasst wird (von einem positiven auf einen negativen Wert), damit die Animation rückwärts abgespielt wird.
- `play-once`
  - : Wie `play`, mit dem Unterschied, dass die Animation nicht erneut ausgelöst wird, nachdem alle ihre Durchläufe abgespielt wurden. Wie `play` setzt `play-once` eine pausierte Animation fort; anders als `play` spielt es eine beendete Animation nicht erneut ab.
- `pause`
  - : Die Animation wird pausiert.
- `replay`
  - : Wie `play`, mit dem Unterschied, dass die Animation an den Anfang zurückgesetzt wird.
- `reset`
  - : Wie `pause`, mit dem Unterschied, dass die Animation an den Anfang zurückgesetzt wird.

## Beschreibung

Der Typ `<animation-action>` legt fest, wie sich eine Animation verhält, wenn bestimmte Ereignisse eintreten. Wenn Sie beispielsweise für ein animiertes Element einen Wert für {{cssxref("animation-trigger")}} festlegen, um die Animation als ausgelöste Animation zu definieren, kann der Wert einen oder zwei durch ein Leerzeichen getrennte `<animation-action>`-Werte enthalten. Der erste Wert legt das Verhalten der Animation fest, wenn ihr Trigger aktiviert wird; der optionale zweite Wert legt das Verhalten fest, wenn der Trigger deaktiviert wird. Wenn Sie nur einen Wert angeben, ändert die Animation ihr Verhalten bei der Deaktivierung des Triggers nicht, sondern behält das Aktivierungsverhalten bei. Das hat dieselbe Wirkung, als würden Sie `none` als zweiten Wert festlegen.

Einige häufige Muster sind:

- `play-forwards play-backwards` wird häufig verwendet, wenn ein UI-Element beim Scrollen in den sichtbaren Bereich „hineinanimiert“ und beim Verlassen des sichtbaren Bereichs wieder „hinausanimiert“ werden soll.
- `play pause` wird häufig verwendet, um ein Element beim Scrollen in den sichtbaren Bereich zu animieren und die Animation beim Verlassen des sichtbaren Bereichs zu pausieren.
- `play-once` wird oft allein verwendet, wenn eine Animation beim Scrollen in den sichtbaren Bereich nur einmal abgespielt werden soll.

Die acht `<animation-action>`-Werte ermöglichen unterschiedliche Animationsverhalten. Es ist wichtig zu verstehen, wie sie einzeln wirken und welche Effekte durch verschiedene Werte für die Aktivierung und Deaktivierung des Triggers entstehen können.

### Keine Aktion festlegen

Verwenden Sie den Wert `none`, um festzulegen, dass keine Aktion ausgeführt werden soll.

### Animation abspielen

Die Schlüsselwortwerte `play`, `play-forwards`, `play-backwards` und `play-once` bewirken alle, dass die Animation abgespielt wird. Jeder Wert legt jedoch ein anderes Verhalten fest.

#### `play`

Mit `play` wird die Animation über alle Durchläufe abgespielt, die durch die Eigenschaft {{cssxref("animation-iteration-count")}} festgelegt sind.

Wenn nur `play` festgelegt ist, wird die Animation bei Aktivierung abgespielt, ihr Verhalten ändert sich bei Deaktivierung jedoch nicht, da keine Deaktivierungsaktion angegeben ist.

```css
animation-trigger: --t play;
```

Wenn `play` mit `pause`, `replay` oder `reset` kombiniert wird, wird die Animation bei Aktivierung abgespielt. Bei Deaktivierung wird dann `pause`, `replay` beziehungsweise `reset` ausgeführt. Bei einer späteren Aktivierung wird die Animation erneut abgespielt.

```css
animation-trigger: --t play reset;
```

Wenn `play` mit `play-backwards` kombiniert wird, wird die Animation bei Aktivierung abgespielt. Bei Deaktivierung wird sie über alle zuvor vorwärts abgespielten Durchläufe rückwärts abgespielt:

```css
animation-trigger: --t play play-backwards;
```

Die Kombination von `play` mit `play-once` ist zwar gültig, aber unnötig, da sie sich genauso wie `play` verhält. Auch die Kombination von `play` mit `play-forwards` ist unnötig: `play-forwards` spielt die Animation in derselben Richtung ab wie `play`, selbst wenn {{cssxref("animation-direction")}} auf `reverse` oder `alternate` gesetzt ist.

#### `play-forwards` und `play-backwards`

Mit `play-forwards` beziehungsweise `play-backwards` wird die Animation über alle ihre Durchläufe vorwärts beziehungsweise rückwärts abgespielt. Dazu wird die [`playbackRate`](/de/docs/Web/API/Animation/playbackRate) der Animation angepasst; der Wert von {{cssxref("animation-direction")}} bleibt unverändert.

Wird nur `play-forwards` als Aktivierungsaktion angegeben, hat dies dieselbe Wirkung, als würde nur `play` angegeben:

```css
animation-trigger: --t play-forwards;
```

Die Kombination von `play-forwards` mit `play-backwards` bewirkt, dass die Animation bei Aktivierung vorwärts und bei Deaktivierung über alle zuvor vorwärts abgespielten Durchläufe rückwärts abgespielt wird. Bei einer späteren Aktivierung beginnt die Animation erneut, vorwärts zu laufen.

```css
animation-trigger: --t play-forwards play-backwards;
```

Die Kombination von `play-forwards` mit `pause`, `replay` oder `reset` hat dieselbe Wirkung wie bei `play`: Die Animation wird bei Aktivierung abgespielt. Bei Deaktivierung wird dann `pause`, `replay` beziehungsweise `reset` ausgeführt. Bei einer späteren Aktivierung wird die Animation erneut abgespielt.

```css
animation-trigger: --t play-forwards pause;
```

Es ist nicht sinnvoll, `play-forwards` mit `play` oder `play-once` zu kombinieren, da all diese Aktionen die Animation effektiv vorwärts abspielen. Wenn bei Deaktivierung dasselbe geschieht wie bei Aktivierung, hat dies keinen erkennbaren Effekt.

Beachten Sie, dass `play-backwards` als Aktivierungsaktion keine Wirkung hat, wenn sich die Animation bereits am Anfang ihrer Durchläufe befindet. Im folgenden Beispiel wird die Animation nicht abgespielt, weil sie sich bereits am Anfang befindet:

```css
animation-trigger: --t play-backwards;
```

#### `play-once`

Mit `play-once` wird die Animation über alle ihre Durchläufe abgespielt, jedoch nur einmal. Wenn {{cssxref("animation-iteration-count")}} auf `infinite` gesetzt ist, unterscheidet sich die Wirkung von `play-once` kaum von der von `play` oder `play-forwards`. Ist `animation-iteration-count` jedoch auf eine endliche Zahl gesetzt, zeigt sich das folgende Verhalten.

Wird `play-once` mit `pause` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung pausiert. Nachdem die Animation alle ihre Durchläufe abgeschlossen hat, wird sie bei späteren Aktivierungen jedoch nicht erneut abgespielt.

```css
animation-trigger: --t play-once pause;
```

Wenn Sie `play-once` mit `replay` kombinieren, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung erneut von Anfang an abgespielt. Bei keinem Abspielen überschreitet sie ihre festgelegte Anzahl an Durchläufen. Sie wird jedoch bei späteren Deaktivierungen erneut abgespielt, weil sie jedes Mal an den Anfang zurückgesetzt wird. Bei späteren Aktivierungen wird die Animation dagegen nicht erneut abgespielt.

```css
animation-trigger: --t play-once replay;
```

Wird `play-once` mit `reset` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung an den Anfang zurückgesetzt. Bei einer späteren Aktivierung wird sie erneut abgespielt.

```css
animation-trigger: --t play-once reset;
```

Wird `play-once` mit `play-backwards` kombiniert, wird die Animation bei Aktivierung abgespielt und bei Deaktivierung über alle Durchläufe rückwärts abgespielt. Bei späteren Aktivierungen wird die Animation nicht erneut abgespielt, bei späteren Deaktivierungen jedoch erneut rückwärts.

```css
animation-trigger: --t play-once play-backwards;
```

### Animation pausieren

Der Wert `pause` pausiert die Animation bei Aktivierung oder Deaktivierung an der Stelle, die sie beim Abspielen erreicht hat. Die Kombination mit anderen Werten wurde bereits beschrieben. Ein bisher nicht erwähntes Beispiel ist `pause` als Aktivierungsaktion:

```css
animation-trigger: --t pause play;
```

Das hat einen interessanten Effekt: Bei Aktivierung wird die Animation nicht abgespielt, bei einer späteren Deaktivierung dagegen schon. Das ist nützlich, wenn eine Animation erst abgespielt werden soll, wenn das betreffende Element den Scrollbereich verlässt.

Es ist nicht sinnvoll, `pause` mit `reset` zu kombinieren, da beide die Animation effektiv pausieren. `reset` setzt sie zusätzlich an den Anfang zurück. Wurde die Animation noch nicht abgespielt, hat `reset` keinen erkennbaren Effekt.

### Animation zurücksetzen

Die Werte `replay` und `reset` ähneln `pause`, unterscheiden sich jedoch wie folgt:

- `reset` pausiert die Animation und setzt sie an den Anfang zurück.
- `replay` setzt die Animation an den Anfang zurück und startet sie erneut.

Die Kombination dieser Werte mit anderen Werten wurde bereits beschrieben. Ein Fall wurde jedoch noch nicht erwähnt: ihre Verwendung als Aktivierungsaktion.

Zum Beispiel:

```css
animation-trigger: --t replay pause;
```

Das hat einen interessanten Effekt: Die Animation wird bei Aktivierung abgespielt (wie bei einer Aktion wie `play`) und bei Deaktivierung pausiert. Bei einer späteren Aktivierung wird sie jedoch unabhängig vom vorherigen Abspielzustand erneut von Anfang an abgespielt. Das ist nützlich, wenn eine Animation abgespielt werden soll, sobald das betreffende Element in den Scrollbereich gelangt, beim Verlassen des Scrollbereichs pausieren und bei jedem späteren Eintritt wieder von Anfang an abgespielt werden soll.

Ein weiteres interessantes Beispiel:

```css
animation-trigger: --t reset play;
```

Hier wird die Animation bei Aktivierung nicht abgespielt, bei Deaktivierung jedoch schon. Bei einer späteren Aktivierung wird sie unabhängig vom vorherigen Abspielzustand auf den Fortschritt `0` zurückgesetzt. Das ist nützlich, wenn eine Animation abgespielt werden soll, sobald das betreffende Element den Scrollbereich verlässt, und bei jedem späteren Eintritt wieder an den Anfang zurückgesetzt werden soll.

### Entsprechungen in der Web Animations API

Das durch die verschiedenen `<animation-action>`-Schlüsselwörter festgelegte Verhalten entspricht den folgenden Aufrufen und Änderungen für die jeweilige Animation in der [Web Animations API](/de/docs/Web/API/Web_Animations_API):

- `play`
  - : Entspricht dem Aufruf von [`Animation.play()`](/de/docs/Web/API/Animation/play) für die Animation.
- `play-forwards`
  - : Entspricht dem Setzen der [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) einer laufenden Animation auf ihren positiven Absolutwert.
- `play-backwards`
  - : Entspricht dem Setzen der [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate) einer laufenden Animation auf ihren mit `-1` multiplizierten positiven Absolutwert.
- `play-once`
  - : Entspricht dem Aufruf von `Animation.play()` für die Animation, mit dem Unterschied, dass sie nur einmal abgespielt wird.
- `pause`
  - : Entspricht dem Aufruf von [`Animation.pause()`](/de/docs/Web/API/Animation/pause) für die Animation.
- `replay`
  - : Entspricht dem Setzen von [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) einer laufenden Animation auf `0`.
- `reset`
  - : Entspricht dem Setzen von `Animation.overallProgress` einer pausierten Animation auf `0`.

## Formale Syntax

{{CSSSyntaxRaw(`<animation-action> = none | pause | play | play-backwards | play-forwards | play-once | replay | reset`)}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie eine einfache scrollgesteuerte Animation erstellen, die bei Aktivierung des Triggers vorwärts und bei Deaktivierung rückwärts abgespielt wird.

#### HTML

Unser Markup enthält zwei {{htmlelement("div")}}-Elemente: eines für die Animation und eines als Trigger. Dazu kommt Textinhalt, damit die Seite gescrollt werden kann. Der Textinhalt ist hier der Kürze halber ausgeblendet.

```html
<div class="animated">I am animated</div>

...

<div class="trigger">I create the trigger</div>

...
```

```html hidden live-sample___basic-example
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

Wir geben dem Element `.animated` eine {{cssxref("position")}} von `fixed` und positionieren es nahe der oberen linken Ecke des Scrollbereichs. So können wir erkennen, wann seine Animation startet und stoppt.

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

Als Nächstes definieren wir die {{cssxref("@keyframes")}} für eine Animation namens `rotate`:

```css live-sample___basic-example live-sample___different-effects
@keyframes rotate {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}
```

Auf das Element `.animated` wird die Animation `rotate` angewendet. Anschließend geben wir ihm einen `animation-trigger`-Wert, der auf einen `timeline-trigger-name` namens `--t` verweist und die beiden `<animation-action>`-Werte `play-forwards` und `play-backwards` enthält. Diese legen fest, dass die Animation bei Aktivierung vorwärts und bei Deaktivierung rückwärts abgespielt wird.

```css live-sample___basic-example
.animated {
  animation: rotate 1.5s infinite linear both;
  animation-trigger: --t play-forwards play-backwards;
}
```

Das Element `.trigger` erstellt den Trigger für das animierte `<div>` mit dem `timeline-trigger`-Wert `--t view()`. Dieser Wert enthält den Bezeichner, auf den der `animation-trigger`-Eigenschaftswert des animierten `<div>` verweist (den `timeline-trigger-name`). Dadurch werden beide miteinander verknüpft. Außerdem enthält er:

- Einen `timeline-trigger-source`-Wert von [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view). Dadurch wird der Timeline-Trigger als View-Progress-Timeline festgelegt und das nächstgelegene scrollende Vorfahrenelement als das Element, das den Timeline-Trigger bereitstellt.
- Einen {{cssxref("timeline-trigger-activation-range")}}-Wert von [`contain`](/de/docs/Web/CSS/Reference/Values/timeline-range-name#contain). Das bedeutet, dass der Trigger aktiviert wird, wenn sich das Element `.trigger` vollständig innerhalb des Scrollbereichs befindet. Da {{cssxref("timeline-trigger-active-range")}} standardmäßig `auto` ist, entspricht sein Wert dem Aktivierungsbereich. Der Trigger wird daher deaktiviert, sobald sich das Element nicht mehr vollständig innerhalb des Scrollbereichs befindet.

```css live-sample___basic-example
.trigger {
  timeline-trigger: --t view() contain;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-example", "100%", "240")}}

Scrollen Sie den Inhalt nach oben. Sobald das beobachtete `<div>` vollständig im Scrollbereich erscheint, wird die Animation abgespielt. Wenn es den Scrollbereich an einer der beiden Kanten zu verlassen beginnt, wird die Animation rückwärts abgespielt.

### Vergleich der `<animation-action>`-Werte

Dieses Beispiel vergleicht die verschiedenen `<animation-action>`-Werte. Dieselbe Rotationsanimation wird auf identische, nebeneinander angeordnete Elemente angewendet, deren `animation-trigger`-Werte variieren. So können Sie die Auswirkungen der verschiedenen Aktionen vergleichen.

#### HTML

Wir verwenden ein {{htmlelement("section")}}-Element mit fünf {{htmlelement("div")}}-Elementen, die jeweils eine Zahl enthalten. Außerdem fügen wir Textinhalt hinzu, damit die Seite gescrollt werden kann. Dieser ist hier der Kürze halber ausgeblendet.

```html
<section>
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
  <div class="four">4</div>
  <div class="five">5</div>
</section>
```

```html hidden live-sample___different-effects
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
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
  <div class="four">4</div>
  <div class="five">5</div>
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

Wir wenden dieselbe {{cssxref("animation")}} auf jedes `<div>`-Element an: Die Animation `rotate` wird unendlich oft abgespielt, wobei jeder Durchlauf zwei Sekunden dauert. Außerdem gestalten wir jedes `<div>` als farbigen Kreis mit einem Durchmesser von `50px`.

```css hidden live-sample___different-effects
body {
  width: 80%;
  margin: 0 auto;
  font-family: "Helvetica", "Arial";
  font-size: 1.3rem;
}

div {
  display: flex;
  justify-content: center;
}

section {
  display: flex;
  justify-content: space-between;
}
```

```css live-sample___different-effects
div {
  animation: rotate 2s infinite linear both;
  height: 50px;
  width: 50px;
  border: 5px solid black;
  border-radius: 50%;
  background-color: orange;
}
```

Als Nächstes legen wir fest, dass das `<section>`-Element mit dem `timeline-trigger`-Wert `--t view() contain 20% contain 80%` einen Animationstrigger erstellt. Ungewöhnlich ist daran nur, dass wir einen {{cssxref("timeline-trigger-activation-range")}}-Wert festgelegt haben und {{cssxref("timeline-trigger-active-range")}} standardmäßig den Wert `contain 20% contain 80%` übernimmt. Das bedeutet, dass der Trigger aktiviert wird, wenn das `<section>`-Element ungefähr `20%` des Weges durch den Scrollbereich nach oben gescrollt wurde, und deaktiviert wird, wenn es ungefähr `80%` dieses Weges zurückgelegt hat. So lassen sich die Auswirkungen der `<animation-action>`-Werte deutlicher erkennen, als wenn sich der Aktivierungsbereich über den gesamten Scrollbereich erstrecken würde.

```css live-sample___different-effects
section {
  timeline-trigger: --t view() contain 20% contain 80%;
}
```

Anschließend legen wir für jedes `<div>`-Element einen anderen {{cssxref("animation-trigger")}}-Eigenschaftswert fest. Jeder Wert verweist auf den `timeline-trigger-name` des `<section>`-Elements, enthält aber andere `<animation-action>`-Werte. Für das letzte `<div>` legen wir zusätzlich einen neuen Wert für die Eigenschaft `animation` fest, der den zuvor festgelegten Wert überschreibt. Er entspricht dem ursprünglichen `animation`-Wert, außer dass die Anzahl der Durchläufe auf `1` statt auf `infinite` gesetzt ist. Die Wirkung von `play-once` lässt sich leichter zeigen, wenn `animation-iteration-count` nicht `infinite` ist (andernfalls würde die Animation unabhängig davon endlos laufen).

```css live-sample___different-effects
.one {
  animation-trigger: --t play-forwards play-backwards;
}

.two {
  animation-trigger: --t play;
}

.three {
  animation-trigger: --t play replay;
}

.four {
  animation-trigger: --t pause play;
}

.five {
  animation: rotate 2s 1 linear both;
  animation-trigger: --t play-once reset;
}
```

```css hidden live-sample___basic-example live-sample___different-effects
@supports not (animation-trigger: --t play-once reset) {
  body::before {
    content: "Your browser does not support scroll-triggered animations.";
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

{{EmbedLiveSample("different-effects", "100%", "240")}}

Scrollen Sie nach unten, bis die `<section>`- und `<div>`-Elemente in den Scrollbereich gelangen. Bewegen Sie sie durch den Anfang und das Ende des Aktivierungsbereichs des Triggers. Konzentrieren Sie sich dabei jeweils auf ein anderes `<div>`, um die Auswirkungen der verschiedenen `<animation-action>`-Werte zu erkennen.

Die Auswirkungen sind:

1. Für das erste `<div>` (ganz links) ist `play-forwards play-backwards` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, wird die Animation vorwärts abgespielt. Wenn es den Aktivierungsbereich verlässt (am oberen oder unteren Rand des Scrollbereichs), beginnt sie rückwärts zu laufen.
2. Für das zweite `<div>` ist ein einzelner `<animation-action>`-Wert festgelegt: `play`. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, beginnt die Animation. Da keine Deaktivierungsaktion festgelegt ist, die ihr Verhalten ändert, läuft sie jedoch weiter, bis die Seite neu geladen wird.
3. Für das dritte `<div>` ist `play replay` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, beginnt die Animation vorwärts zu laufen. Wenn es den Aktivierungsbereich verlässt, wird die Animation auf den Fortschritt `0` zurückgesetzt und erneut gestartet.
4. Für das vierte `<div>` ist `pause play` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, bleibt die Animation pausiert. Verlässt es den Aktivierungsbereich, beginnt die Animation jedoch zu laufen. Von da an pausiert die Animation, solange sich das beobachtete Element innerhalb des Aktivierungsbereichs befindet, und läuft, wenn es sich außerhalb befindet.
5. Für das fünfte `<div>` (ganz rechts, mit einer Durchlaufanzahl von `1`) ist `play-once reset` festgelegt. Wenn das beobachtete Element in den Aktivierungsbereich gelangt, wird die Animation einmal abgespielt. Wenn es den Aktivierungsbereich verlässt, wird die Animation auf den Fortschritt `0` zurückgesetzt und pausiert. Von da an wird sie bei jedem Eintritt des beobachteten Elements in den Aktivierungsbereich einmal abgespielt und beim Verlassen zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-trigger")}}
- {{cssxref("timeline-trigger")}}-Kurzschreibeigenschaft
- {{cssxref("timeline-trigger-name")}}, {{cssxref("timeline-trigger-source")}}, {{cssxref("timeline-trigger-activation-range")}} und {{cssxref("timeline-trigger-active-range")}}
- {{cssxref("trigger-scope")}}
- [CSS-Animationen verwenden, die durch Scrollen ausgelöst werden](/de/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
