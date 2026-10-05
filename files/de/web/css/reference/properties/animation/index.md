---
title: CSS-Eigenschaft `animation`
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`animation`** wendet eine Animation zwischen Stilzuständen an. Sie ist eine Kurzschreibweise für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

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

### Untereigenschaften, die nur zurückgesetzt werden

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

Diese Eigenschaft wird als durch Kommas getrennte Liste von `<animation>`-Werten angegeben. Jeder Wert besteht aus einer durch Leerzeichen getrennten Liste der folgenden Werte:

- `<keyframes-name>` oder `none`
  - : Der Name einer {{cssxref("@keyframes")}}-At-Regel, die die auf ein Element anzuwendende Animation festlegt. Der Anfangswert für {{cssxref("animation-name")}} ist `none`.
- `<animation-duration>`
  - : Bestimmt, wie lange eine Animation für einen Durchlauf benötigt. Der Wert muss einer der für {{cssxref("animation-duration")}} verfügbaren Werte sein. Der Anfangswert ist `0s`.
- `<easing-function>`
  - : Bestimmt den Verlauf der Animation. Der Wert muss einer der für {{cssxref("animation-timing-function")}} verfügbaren Werte sein. Der Anfangswert ist `ease`.
- `<animation-delay>`
  - : Bestimmt, wie lange nach dem Anwenden der Animation auf ein Element gewartet wird, bevor die Animation beginnt. Der Wert muss einer der für {{cssxref("animation-delay")}} verfügbaren Werte sein. Der Anfangswert ist `0s`.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der für {{cssxref("animation-direction")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-direction")}} ist `normal`.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Durchläufe der Animation. Der Wert muss einer der für {{cssxref("animation-iteration-count")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-iteration-count")}} ist `1`.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile vor und nach der Ausführung der Animation auf deren Zielelement angewendet werden. Der Wert muss einer der für {{cssxref("animation-fill-mode")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-fill-mode")}} ist `none`.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird. Der Wert muss einer der für {{cssxref("animation-play-state")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-play-state")}} ist `running`.
- `<single-animation-timeline>`
  - : Bestimmt die Timeline, die den Fortschritt der Animation steuert. Der Wert muss einer der für {{cssxref("animation-timeline")}} verfügbaren Werte sein. Der Anfangswert ist `auto`.

## Beschreibung

Die Eigenschaft `animation` wird als eine oder mehrere einzelne Animationen angegeben, die durch Kommas getrennt sind. Jede `animation` in der durch Kommas getrennten Liste legt {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}} fest. Fehlt eine dieser Komponenten in einer `animation`-Deklaration, wird sie auf ihren Anfangswert gesetzt.

> [!NOTE]
> Die Kurzschreibweise `animation` setzt die Eigenschaften {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} und {{cssxref("animation-trigger")}} auf ihre jeweiligen Anfangswerte `normal`, `normal` und `none` zurück. Diese Untereigenschaften können in der Kurzschreibweise `animation` nicht gesetzt werden; werden sie darin angegeben, ist die gesamte Deklaration ungültig. Da die `animation`-Deklaration jede dieser Eigenschaften auf ihren Anfangswert setzt, müssen sie entweder nach allen `animation`-Kurzschreibweisen oder mit höherer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) deklariert werden.

### animation-name

Die Komponente `<animation-name>` jeder Animation bezeichnet den Namen der Animation. Sie kann `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein. Der Anfangswert von `animation-name` ist `none`. Wird in der Kurzschreibweise `animation` kein Wert für `animation-name` angegeben, wird daher auf keine der Eigenschaften eine Animation angewendet.

Die Reihenfolge der übrigen Werte innerhalb einer Animationsdefinition ist wichtig, um einen Wert für {{cssxref("animation-name")}} von anderen Werten zu unterscheiden. Kann ein Wert in der Kurzschreibweise `animation` als Wert für eine andere Animationseigenschaft als `animation-name` interpretiert werden, wird er zuerst dieser Eigenschaft und nicht `animation-name` zugewiesen. Daher empfiehlt es sich, bei Verwendung der Kurzschreibweise `animation` den Wert für `animation-name` als letzten Wert anzugeben. Das gilt auch, wenn Sie mehrere durch Kommas getrennte Animationen mit der Kurzschreibweise `animation` angeben.

### Zeitwerte

Jede Animation kann den Wert {{cssxref("&lt;time&gt;")}} null-, ein- oder zweimal enthalten. Die Reihenfolge der Zeitwerte innerhalb einer Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} interpretiert werden kann, wird {{cssxref("animation-duration")}} zugewiesen, der zweite {{cssxref("animation-delay")}}.

Wird in der Kurzschreibweise `animation` kein Wert für `animation-duration` angegeben, beträgt die Dauer standardmäßig `0s`. In diesem Fall findet die Animation dennoch statt – die Ereignisse [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) werden ausgelöst –, für Benutzer ist jedoch keine Animation sichtbar.

### animation-timeline

Wenn die Kurzschreibweise `animation` keinen Wert für `<animation-timeline>` enthält, setzt die Deklaration alle zuvor deklarierten `animation-timeline`-Werte auf `auto` zurück. Dadurch wird die Timeline auf die standardmäßige [`documentTimeline`](/de/docs/Web/API/DocumentTimeline) gesetzt.

Wenn ein Wert für `<animation-timeline>` enthalten ist, der User-Agent solche Werte innerhalb der Kurzschreibweise jedoch nicht unterstützt, ist die gesamte `animation`-Deklaration ungültig und wird ignoriert. Deklarieren Sie daher beim Erstellen [scrollgesteuerter CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) die Eigenschaft `animation-timeline` nach der `animation`-Kurzschreibweise, damit sie wirksam wird.

Alternativ können Sie `<animation-timeline>` innerhalb der Kurzschreibweise `animation` in einem CSS-{{cssxref("@supports")}}-Block setzen, zum Beispiel:

```css
@supports (animation: view()) {
  /* CSS for browsers supporting <animation-timeline> within `animation` shorthand */
}
```

### animation-fill-mode und neue Stapelkontexte

Beim [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards)-Wert von `animation-fill-mode` verhalten sich animierte Eigenschaften so, als wären sie im Wert der Eigenschaft {{cssxref("will-change")}} enthalten. Wird während der Animation ein neuer Stapelkontext erstellt, behält das Zielelement diesen Stapelkontext nach Abschluss der Animation bei.

## Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Bestimmte Bewegungsarten können außerdem vestibuläre Störungen, Epilepsie, Migräne und eine erhöhte Empfindlichkeit bei schwachem Licht auslösen.

Erwägen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen. Verwenden Sie außerdem die [`@media`-Abfrage für reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um eine passende Alternative für Benutzer zu schaffen, die eine Präferenz für weniger Animationen angegeben haben.

- [Sicherere Webanimationen für Menschen mit Bewegungsempfindlichkeit gestalten](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) auf A List Apart (2015)
- [Einführung in die Media Query für reduzierte Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2017)
- [Responsives Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) auf WebKit (2017)
- [WCAG verstehen, Richtlinie 2.2 – Ausreichend Zeit: Benutzern ausreichend Zeit geben, Inhalte zu lesen und zu verwenden](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [WCAG-Erfolgskriterium 2.2.2 verstehen: Pausieren, beenden, ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) beim W3C (2026)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Von der Animation von Eigenschaften des [CSS-Boxmodells](/de/docs/Web/CSS/Guides/Box_model) wird abgeraten, da sie Neuberechnungen des Layouts und erneutes Zeichnen auslöst. Die Animation von Boxmodell-Eigenschaften beansprucht grundsätzlich die CPU stark. Erwägen Sie stattdessen, die Eigenschaft [transform](/de/docs/Web/CSS/Reference/Properties/transform) zu animieren.

### Grundlegende Verwendung: ein Sonnenaufgang

In diesem Beispiel zeigen wir die grundlegende Verwendung der Kurzschreibweise `animation`, indem wir eine gelbe Sonne vor einem hellblauen Himmel animieren. Die Sonne steigt bis zur Mitte des Viewports auf und sinkt dann aus dem Sichtfeld.

#### HTML

Wir fügen ein einzelnes {{htmlelement("div")}}-Element ein, das unsere Sonne darstellt.

```html
<div class="sun"></div>
```

#### CSS

Zunächst erstellen wir die Sonne und den Himmel. Der Himmel ist das {{cssxref(":root")}}-Element des HTML-Dokuments. Inhalte außerhalb des Viewports – in unserem Fall der Teil der Sonne unterhalb des Horizonts – blenden wir aus, indem wir {{cssxref("overflow")}} auf `hidden` setzen. Mit der Eigenschaft {{cssxref("justify-content")}} zentrieren wir die Sonne außerdem im Hintergrund. Wir färben die Sonne gelb, legen ihre {{cssxref("height")}} auf die Höhe des Viewports (`100vh`) fest und setzen ihre Breite gleich ihrer Höhe, indem wir {{cssxref("aspect-ratio")}} auf `1` setzen. Mit der Eigenschaft {{cssxref("border-radius")}} machen wir aus dem quadratischen `<div>` einen Kreis.

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

Als Nächstes definieren wir Animations-{{cssxref("@keyframes")}}, die das Element, auf das sie angewendet werden, nach unten über den Viewport hinausschieben und es anschließend mithilfe von [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) an seine Ausgangsposition zurückbringen:

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

Zum Schluss wenden wir die Animation an! Mit der Kurzschreibweise `animation` wenden wir die Keyframe-Animation `sunrise` auf das `.sun`-`<div>` an. Die Animation wird unendlich oft wiederholt, wobei jeder Durchlauf 4 Sekunden dauert. Die Animationsrichtung wechselt bei jedem Durchlauf:

```css
.sun {
  animation: 4s linear 0s infinite alternate sunrise;
}
```

#### Ergebnisse

{{EmbedLiveSample('Basic usage: a sunrise')}}

### Mehrere Animationen anwenden

Dieses Beispiel zeigt, wie mehrere Animationen auf ein einzelnes Element angewendet werden. Aufbauend auf dem vorherigen Beispiel mit einer Sonne, die vor einem hellblauen Hintergrund auf- und untergeht, lassen wir die Farben der Sonne nun allmählich durch das gesamte Regenbogenspektrum wechseln. Die zeitlichen Verläufe von Position und Farbe der Sonne sind voneinander unabhängig.

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

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und fügen einen zweiten Satz von Animations-`@keyframes` hinzu. Dieser wendet einen {{cssxref("filter")}} an, der den Farbton mithilfe der Filterfunktion [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) durch alle möglichen Werte dreht:

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

Anschließend wenden wir beide Animationen auf unsere Sonne an. Mehrere Animationen werden durch Kommas getrennt; die Parameter jeder Animation werden unabhängig voneinander festgelegt:

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    24s linear 0s infinite psychedelic;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying multiple animations')}}

### Kaskadierung mehrerer Animationen

Dieses Beispiel zeigt, was geschieht, wenn mehrere Animationen Werte für dieselbe Eigenschaft definieren. Es erweitert das Beispiel zur [grundlegenden Verwendung](#basic_usage_a_sunrise) um zwei Animationen, die beide einen {{cssxref("transform")}}-Wert festlegen.

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

Wir wenden beide Animationen auf die Sonne an. Wenn zwei Animationen unterschiedliche Werte auf dieselbe Eigenschaft anwenden, überschreiben später in der Kaskade deklarierte Animationen die zuvor deklarierten. In diesem Fall setzt sich der `transform`-Wert der Animation `bounce` in der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#css_animations_and_the_cascade) durch und überschreibt die von `sunrise` festgelegte Transformation. Daher bewegt sich die Sonne nur horizontal.

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    4s linear 0s infinite alternate bounce;
}
```

#### Ergebnisse

{{EmbedLiveSample('Cascading Multiple Animations')}}

Die Sonne bewegt sich zwischen der linken und der rechten Seite des Viewports hin und her. Sie bleibt im Viewport, obwohl die Animation `sunrise` definiert ist. Die von `sunrise` festgelegte Eigenschaft `transform` wird durch die Animation `bounce` überschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- Modul [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
