---
title: CSS-Eigenschaft `animation`
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 5d20ba73fde9de229a91dbdabe3be20966e95a65
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`animation`** wendet eine Animation zwischen Stilen an. Sie ist eine Kurzschreibweise für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

{{InteractiveExample("CSS Demo: animation")}}

```css interactive-example-choice
animation: 3s ease-in 1s infinite reverse both running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite running slide-in;
```

```css interactive-example-choice
animation: 3s linear 1s infinite alternate slide-in;
```

```css interactive-example-choice
animation: 0.5s linear 1s infinite alternate slide-in;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  margin: 20px;
  border: 5px solid #333333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

@keyframes slide-in {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("animation-name")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}

### Nur zurückgesetzte Untereigenschaften

Diese Eigenschaft setzt die folgenden CSS-Eigenschaften auf ihre Anfangswerte zurück:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-delay-end")}}
- {{cssxref("animation-composition")}}
- {{cssxref("animation-trigger")}}

## Syntax

```css
/* Duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slide-in;

/* Duration | easing-function | delay | name */
animation: 3s linear 1s slide-in;

/* Duration | name */
animation: 3s slide-in;

/* Multiple animations */
animation:
  3s linear slide-in,
  3s ease-out 5s slide-out;
```

### Werte

Diese Eigenschaft wird als durch Kommas getrennte Liste von `<animation>`-Werten angegeben. Jeder Wert ist eine durch Leerzeichen getrennte Liste der folgenden Werte:

- `<keyframes-name>` oder `none`
  - : Der Name einer {{cssxref("@keyframes")}}-At-Regel, die die auf ein Element anzuwendende Animation festlegt. Der Anfangswert von {{cssxref("animation-name")}} ist `none`.
- `<animation-duration>`
  - : Bestimmt, wie lange eine Animation für einen Durchlauf benötigt. Der Wert muss einer der für {{cssxref("animation-duration")}} verfügbaren Werte sein. Der Anfangswert ist `0s`.
- `<easing-function>`
  - : Bestimmt die Art des Übergangs. Der Wert muss einer der für {{cssxref("animation-timing-function")}} verfügbaren Werte sein. Der Anfangswert ist `ease`.
- `<animation-delay>`
  - : Bestimmt, wie lange nach dem Anwenden der Animation auf ein Element gewartet wird, bevor die Animation beginnt. Der Wert muss einer der für {{cssxref("animation-delay")}} verfügbaren Werte sein. Der Anfangswert ist `0s`.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der für {{cssxref("animation-direction")}} verfügbaren Werte sein. Der Anfangswert von {{cssxref("animation-direction")}} ist `normal`.
- `<single-animation-iteration-count>`
  - : Gibt an, wie oft die Animation abgespielt wird. Der Wert muss einer der für {{cssxref("animation-iteration-count")}} verfügbaren Werte sein. Der Anfangswert von {{cssxref("animation-iteration-count")}} ist `1`.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile vor und nach der Ausführung der Animation auf deren Zielelement angewendet werden. Der Wert muss einer der für {{cssxref("animation-fill-mode")}} verfügbaren Werte sein. Der Anfangswert von {{cssxref("animation-fill-mode")}} ist `none`.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird. Der Wert muss einer der für {{cssxref("animation-play-state")}} verfügbaren Werte sein. Der Anfangswert von {{cssxref("animation-play-state")}} ist `running`.
- `<single-animation-timeline>`
  - : Bestimmt die Zeitleiste, mit der der Fortschritt der Animation gesteuert wird. Der Wert muss einer der für {{cssxref("animation-timeline")}} verfügbaren Werte sein. Der Anfangswert ist `auto`.

## Beschreibung

Die Eigenschaft `animation` wird als eine oder mehrere einzelne Animationen angegeben, die durch Kommas getrennt sind. Jede `animation` in dieser Liste legt {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}} fest. Fehlt eine dieser Komponenten in einer `animation`-Deklaration, wird ihr Wert auf den jeweiligen Anfangswert gesetzt.

> [!NOTE]
> Die Kurzschreibweise `animation` setzt die Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und {{cssxref("animation-trigger")}} auf ihre jeweiligen Anfangswerte `normal`, `normal` und `none` zurück. Diese nur zurückgesetzten Untereigenschaften können nicht in der Kurzschreibweise `animation` festgelegt werden; werden sie dennoch aufgenommen, ist die gesamte Deklaration ungültig. Da die `animation`-Deklaration jede dieser Eigenschaften auf ihren Anfangswert setzt, müssen sie entweder nach allen `animation`-Kurzschreibweisen oder mit höherer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) deklariert werden.

### animation-name

Die Komponente `<animation-name>` jeder Animation bezeichnet deren Namen. Dieser kann `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein. Der Anfangswert von `animation-name` ist `none`. Wird in der Kurzschreibweise `animation` kein Wert für `animation-name` angegeben, wird somit auf keine der Eigenschaften eine Animation angewendet.

Die Reihenfolge der übrigen Werte innerhalb einer Animationsdefinition ist wichtig, um einen Wert für {{cssxref("animation-name")}} von anderen Werten zu unterscheiden. Lässt sich ein Wert in der Kurzschreibweise `animation` als Wert einer anderen Animationseigenschaft als `animation-name` interpretieren, wird er zuerst dieser Eigenschaft zugewiesen und nicht `animation-name`. Daher empfiehlt es sich, bei Verwendung der Kurzschreibweise `animation` den Wert für `animation-name` als letzten Wert anzugeben. Das gilt auch, wenn Sie mit der Kurzschreibweise mehrere durch Kommas getrennte Animationen angeben.

### Zeitwerte

Jede Animation kann den Wert {{cssxref("&lt;time&gt;")}} null-, ein- oder zweimal enthalten. Die Reihenfolge der Zeitwerte innerhalb einer Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} interpretiert werden kann, wird {{cssxref("animation-duration")}} zugewiesen, der zweite {{cssxref("animation-delay")}}.

Wenn in der Kurzschreibweise `animation` kein Wert für `animation-duration` angegeben ist, beträgt die Dauer standardmäßig `0s`. In diesem Fall findet die Animation dennoch statt – die Ereignisse [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) werden ausgelöst –, ist für Benutzer jedoch nicht sichtbar.

### animation-timeline

Ist in der Kurzschreibweise `animation` kein `<animation-timeline>` enthalten, setzt die Kurzschreibweise zuvor deklarierte `animation-timeline`-Werte auf `auto` zurück. Damit wird die Zeitleiste auf die standardmäßige [`documentTimeline`](/de/docs/Web/API/DocumentTimeline) gesetzt.

Ist ein `<animation-timeline>`-Wert enthalten, der User-Agent unterstützt solche Werte innerhalb der Kurzschreibweise jedoch nicht, ist die gesamte `animation`-Deklaration ungültig und wird ignoriert. Wenn Sie [CSS-Animationen mit Scrollsteuerung](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen, müssen Sie daher die Eigenschaft `animation-timeline` nach jeder `animation`-Kurzschreibweise deklarieren, damit sie wirksam wird.

Alternativ kann `<animation-timeline>` innerhalb der Kurzschreibweise `animation` in einem CSS-{{cssxref("@supports")}}-Block festgelegt werden, zum Beispiel:

```css
@supports (animation: view()) {
  /* CSS for browsers supporting <animation-timeline> within `animation` shorthand */
}
```

### animation-fill-mode und neue Stacking-Kontexte

Beim Wert [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) für `animation-fill-mode` verhalten sich animierte Eigenschaften so, als wären sie im Wert einer festgelegten {{cssxref("will-change")}}-Eigenschaft enthalten. Wird während der Animation ein neuer Stacking-Kontext erstellt, behält das Zielelement diesen nach Abschluss der Animation bei.

## Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Bestimmte Arten von Bewegung können außerdem Beschwerden bei Gleichgewichtsstörungen, Epilepsie, Migräne und skotopischer Empfindlichkeit auslösen.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen. Verwenden Sie außerdem die [`@media`-Abfrage für reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um Benutzern, die weniger Animationen bevorzugen, eine entsprechende Alternative zu bieten.

- [Sicherere Webanimationen bei Bewegungsempfindlichkeit gestalten](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) auf A List Apart (2015)
- [Einführung in die Media Query für reduzierte Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2017)
- [Responsives Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) auf WebKit (2017)
- [WCAG verstehen, Richtlinie 2.2 – Ausreichend Zeit: Benutzern genügend Zeit zum Lesen und Verwenden von Inhalten geben](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [WCAG-Erfolgskriterium 2.2.2 verstehen: Pausieren, Beenden, Ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) beim W3C (2026)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Von der Animation von Eigenschaften des [CSS-Boxmodells](/de/docs/Web/CSS/Guides/Box_model) wird abgeraten, da sie eine Neuberechnung des Layouts und ein erneutes Zeichnen auslöst. Die Animation einer Boxmodell-Eigenschaft ist grundsätzlich CPU-intensiv. Erwägen Sie stattdessen, die Eigenschaft [transform](/de/docs/Web/CSS/Reference/Properties/transform) zu animieren.

### Grundlegende Verwendung: ein Sonnenaufgang

In diesem Beispiel zeigen wir die grundlegende Verwendung der Kurzschreibweise `animation`, indem wir eine gelbe Sonne über einen hellblauen Himmel animieren. Die Sonne steigt bis zur Mitte des Viewports auf und verschwindet dann wieder aus dem Blickfeld.

#### HTML

Wir verwenden ein einzelnes {{htmlelement("div")}}-Element, das die Sonne darstellt.

```html
<div class="sun"></div>
```

#### CSS

Zunächst erstellen wir die Sonne und den Himmel. Der Himmel ist das {{cssxref(":root")}} des HTML-Dokuments. Mit {{cssxref("overflow")}} auf `hidden` blenden wir alle Inhalte außerhalb des Viewports aus – in diesem Fall den Teil der Sonne unterhalb des Horizonts. Außerdem zentrieren wir die Sonne mit der Eigenschaft {{cssxref("justify-content")}} vor dem Hintergrund. Wir färben die Sonne gelb, setzen ihre {{cssxref("height")}} auf die Höhe des Viewports (`100vh`) und machen ihre Breite gleich ihrer Höhe, indem wir {{cssxref("aspect-ratio")}} auf `1` setzen. Mit der Eigenschaft {{cssxref("border-radius")}} verwandeln wir das quadratische `<div>` in einen Kreis.

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1;
  animation: 4s linear 0s infinite alternate sunrise;
}
```

Als Nächstes definieren wir Animations-{{cssxref("@keyframes")}}, die das Element, auf das sie angewendet werden, mithilfe von [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) nach unten über den Viewport hinaus verschieben und dann an seine Ausgangsposition zurückführen:

```css
@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

Zum Schluss wenden wir die Animation an. Mit der Kurzschreibweise `animation` wenden wir die Keyframe-Animation `sunrise` auf das `.sun`-`<div>` an. Die Animation wird unendlich oft wiederholt, wobei jeder Durchlauf 4 Sekunden dauert. Bei jedem Durchlauf wechselt die Animationsrichtung:

```css
.sun {
  animation: 4s linear 0s infinite alternate sunrise;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic usage: a sunrise')}}

### Mehrere Animationen anwenden

Dieses Beispiel zeigt, wie mehrere Animationen auf ein einzelnes Element angewendet werden. Aufbauend auf dem vorherigen Beispiel mit einer Sonne, die vor einem hellblauen Hintergrund auf- und untergeht, lassen wir die Sonne hier nach und nach durch die Farben des Regenbogens wechseln. Der zeitliche Ablauf von Position und Farbe der Sonne ist voneinander unabhängig.

```html hidden
<div class="sun"></div>
```

```css hidden
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
}

@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}
```

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und ergänzen einen zweiten Satz Animations-`@keyframes`. Dieser wendet einen {{cssxref("filter")}} an, der den Farbton mithilfe der Filterfunktion [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) durch alle möglichen Werte rotieren lässt:

```css
@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

Anschließend wenden wir beide Animationen auf die Sonne an. Mehrere Animationen werden durch Kommas getrennt; die Parameter jeder Animation werden unabhängig voneinander festgelegt:

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    24s linear 0s infinite psychedelic;
}
```

#### Ergebnis

{{EmbedLiveSample('Applying multiple animations')}}

### Kaskadierung mehrerer Animationen

Dieses Beispiel zeigt, was geschieht, wenn mehrere Animationen Werte für dieselbe Eigenschaft definieren. Es erweitert das Beispiel zur [grundlegenden Verwendung](#basic_usage_a_sunrise) um zwei Animationen, die beide einen Wert für {{cssxref("transform")}} festlegen.

```html hidden
<div class="sun"></div>
```

```css hidden
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
}
```

Wir verwenden dasselbe HTML und CSS wie im ersten Beispiel, einschließlich der ursprünglichen Animation `sunrise`, und fügen eine zweite Animation namens `bounce` hinzu. Beide Animationen deklarieren Werte für dieselbe Eigenschaft:

```css
@keyframes sunrise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

Wir wenden beide Animationen auf die Sonne an. Wenn zwei Animationen unterschiedliche Werte auf dieselbe Eigenschaft anwenden, überschreiben später in der Kaskade deklarierte Animationen die zuvor deklarierten. In diesem Fall setzt sich der `transform`-Wert der Animation `bounce` in der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#css_animations_and_the_cascade) durch und überschreibt die von `sunrise` festgelegte Transformation. Deshalb bewegt sich die Sonne nur horizontal.

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    4s linear 0s infinite alternate bounce;
}
```

#### Ergebnis

{{EmbedLiveSample('Cascading Multiple Animations')}}

Die Sonne bewegt sich zwischen der linken und der rechten Seite des Viewports hin und her. Sie bleibt im Viewport, obwohl die Animation `sunrise` definiert ist. Der Wert für `transform` aus `sunrise` wird durch die Animation `bounce` überschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- Modul [CSS-Animationen mit Scrollsteuerung](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
