---
title: CSS-Eigenschaft `animation`
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

Die [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`animation`** von [CSS](/de/docs/Web/CSS) wendet eine Animation zwischen Stilen an. Sie ist eine Kurzform für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

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

## Bestandteile

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("animation-name")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}

## Syntax

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slide-in;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slide-in;

/* two animations */
animation:
  3s linear slide-in,
  3s ease-out 5s slide-out;
```

### Werte

Diese Eigenschaft wird als durch Kommas getrennte Liste von `<animation>`-Werten angegeben, wobei jeder Wert eine durch Leerzeichen getrennte Liste der folgenden Werte ist:

- `<keyframes-name>` oder `none`
  - : Der Name einer {{cssxref("@keyframes")}}-At-Regel, die die auf ein Element anzuwendende Animation festlegt. Der Anfangswert für {{cssxref("animation-name")}} ist `none`.
- `<animation-duration>`
  - : Legt die Zeitdauer fest, die eine Animation für die Ausführung eines Zyklus benötigt. Der Wert muss einer der in {{cssxref("animation-duration")}} verfügbaren Werte sein. Der Anfangswert ist `0s`.
- `<easing-function>`
  - : Legt die Art des Übergangs fest. Der Wert muss einer der in {{cssxref("animation-timing-function")}} verfügbaren Werte sein. Der Anfangswert ist `ease`.
- `<animation-delay>`
  - : Legt die Wartezeit ab dem Anwenden der Animation auf ein Element fest, bevor die Animation ausgeführt wird. Der Wert muss einer der in {{cssxref("animation-delay")}} verfügbaren Werte sein. Der Anfangswert ist `0s`.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-direction")}} ist `normal`.
- `<single-animation-iteration-count>`
  - : Die Anzahl, wie oft die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-iteration-count")}} ist `1`.
- `<single-animation-fill-mode>`
  - : Legt fest, wie Stile vor und nach ihrer Ausführung auf das Ziel der Animation angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-fill-mode")}} ist `none`.
- `<single-animation-play-state>`
  - : Legt fest, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren Werte sein. Der Anfangswert für {{cssxref("animation-play-state")}} ist `running`.
- `<single-animation-timeline>`
  - : Legt die Timeline fest, die zur Steuerung des Fortschritts der Animation verwendet wird. Der Wert muss einer der in {{cssxref("animation-timeline")}} verfügbaren Werte sein. Der Anfangswert ist `auto`.

## Beschreibung

Die Eigenschaft `animation` wird als eine oder mehrere einzelne, durch Kommas getrennte Animationen angegeben. Jede `animation` innerhalb der durch Kommas getrennten Animationsliste setzt {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}. Wenn eine der Komponenten nicht in einer `animation`-Deklaration enthalten ist, wird der Komponentenwert auf den Anfangswert der Komponente gesetzt.

### animation-name

Die Komponente `<animation-name>` jeder Animation ist der Name der Animation. Sie kann `none`, ein {{cssxref("&lt;custom-ident&gt;")}} oder ein {{cssxref("&lt;string&gt;")}} sein. Der Anfangswert von `animation-name` ist `none`. Das bedeutet, dass keine Animation auf eine der Eigenschaften angewendet wird, wenn kein `animation-name`-Wert in der Kurzform-Eigenschaft `animation` deklariert ist.

Die Reihenfolge der anderen Werte innerhalb einer Animationsdefinition ist wichtig, um einen {{cssxref("animation-name")}}-Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der Kurzform `animation` als Wert für eine andere Animationseigenschaft als `animation-name` geparst werden kann, wird der Wert zuerst auf diese Eigenschaft und nicht auf `animation-name` angewendet. Daher wird empfohlen, bei Verwendung der Kurzform `animation` einen Wert für `animation-name` als letzten Wert in einer Werteliste anzugeben; dies gilt auch, wenn Sie mit der Kurzform `animation` mehrere durch Kommas getrennte Animationen angeben.

### Zeitwerte

Jede Animation kann null, ein oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}}-Werts enthalten. Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird {{cssxref("animation-duration")}} zugewiesen, und der zweite wird {{cssxref("animation-delay")}} zugewiesen.

Wenn in der Kurzform-Eigenschaft `animation` kein `animation-duration`-Wert angegeben ist, beträgt die Dauer standardmäßig `0s`. In diesem Fall findet die Animation weiterhin statt (die Ereignisse [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) werden ausgelöst), aber für den Benutzer ist keine Animation sichtbar.

### animation-timeline

Wenn keine `<animation-timeline>` in der Kurzform `animation` enthalten ist, setzt die Kurzformdeklaration alle zuvor deklarierten `animation-timeline`-Werte auf `auto` zurück, wodurch die Timeline auf die Standard-[`documentTimeline`](/de/docs/Web/API/DocumentTimeline) gesetzt wird.

Wenn ein `<animation-timeline>`-Wert enthalten ist, der User-Agent jedoch keine `<animation-timeline>`-Werte innerhalb der Kurzform unterstützt, ist die gesamte `animation`-Deklaration ungültig und wird ignoriert. Aus diesem Grund müssen Sie beim Erstellen [scrollgesteuerter CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) die Eigenschaft `animation-timeline` nach jeder Kurzform `animation` deklarieren, damit sie wirksam wird.

Alternativ kann `<animation-timeline>` innerhalb der Kurzform `animation` in einem CSS-{{cssxref("@supports")}}-Block gesetzt werden, beispielsweise:

```css
@supports (animation: view()) {
  /* CSS for browsers supporting <animation-timeline> within `animation` shorthand */
}
```

### animation-fill-mode und neue Stapelkontexte

Im Fall des [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards)-Werts von `animation-fill-mode` verhalten sich animierte Eigenschaften so, als wären sie in einem gesetzten {{cssxref("will-change")}}-Eigenschaftswert enthalten. Wenn während der Animation ein neuer Stapelkontext erstellt wird, behält das Zielelement den Stapelkontext bei, nachdem die Animation beendet ist.

## Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Bewegungsarten vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit auslösen.

Erwägen Sie, einen Mechanismus zum Anhalten oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [`@media`-Abfrage für reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für weniger Animationen angegeben haben.

- [Sicherere Webanimationen für Bewegungsempfindlichkeit entwerfen](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) via A List Apart (2015)
- [Eine Einführung in die Media Query für reduzierte Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) via CSS-Tricks (2017)
- [Responsives Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) via WebKit (2017)
- [WCAG verstehen, Richtlinie 2.2 — Ausreichend Zeit: Benutzern ausreichend Zeit geben, um Inhalte zu lesen und zu verwenden](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [WCAG-Erfolgskriterium 2.2.2 verstehen: Pausieren, anhalten, ausblenden](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) via W3C (2026)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Von der Animation von Eigenschaften des [CSS-Box-Modells](/de/docs/Web/CSS/Guides/Box_model) wird abgeraten, da dies Layout-Reflows und Neuzeichnungen verursacht. Die Animation jeder Boxmodell-Eigenschaft ist grundsätzlich CPU-intensiv; erwägen Sie stattdessen, die Eigenschaft [transform](/de/docs/Web/CSS/Reference/Properties/transform) zu animieren.

### Grundlegende Verwendung: ein Sonnenaufgang

In diesem Beispiel zeigen wir die grundlegende Verwendung der Kurzform `animate`, indem wir eine gelbe Sonne über einen hellblauen Himmel animieren. Die Sonne steigt
bis zur Mitte des Viewports auf und fällt dann außer Sicht.

#### HTML

Wir fügen ein einzelnes {{htmlelement("div")}}-Element ein, das unsere Sonne darstellt.

```html
<div class="sun"></div>
```

#### CSS

Wir beginnen mit der Erstellung von Sonne und Himmel. Der Himmel ist das {{cssxref(":root")}} des HTML-Dokuments. Wir blenden alle Inhalte aus, die sich außerhalb des Viewports befinden – in unserem Fall also jeden Teil der Sonne unterhalb des Horizonts –, indem wir {{cssxref("overflow")}} auf hidden setzen. Außerdem verwenden wir die Eigenschaft {{cssxref("justify-content")}}, um die Sonne im Hintergrund zu zentrieren. Wir machen die Sonne gelb, deklarieren ihre {{cssxref("height")}} als Höhe des Viewports (`100vh`) und setzen ihre Breite gleich ihrer Höhe, indem wir {{cssxref("aspect-ratio")}} auf `1` setzen. Mithilfe der Eigenschaft {{cssxref("border-radius")}} verwandeln wir das quadratische `<div>` in einen Kreis.

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

Als Nächstes definieren wir einige Animations-{{cssxref("@keyframes")}}, die das Element, auf das sie angewendet werden, über den Viewport hinaus nach unten verschieben und es dann mithilfe von [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) in seine Standardposition zurückbringen:

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

Der letzte Schritt besteht darin, die Animation anzuwenden! Wir verwenden die Kurzform-Eigenschaft `animation`, um die Keyframe-Animation `sunrise` auf das `.sun`-`<div>` anzuwenden. Die Animation wird auf unendlich viele Iterationen gesetzt, wobei jede 4 Sekunden dauert; die Animationsrichtung wechselt mit jeder Iteration:

```css
.sun {
  animation: 4s linear 0s infinite alternate sunrise;
}
```

#### Ergebnisse

{{EmbedLiveSample('Basic usage: a sunrise')}}

### Mehrere Animationen anwenden

Dieses Beispiel zeigt die Anwendung mehrerer Animationen auf ein einzelnes Element. Aufbauend auf dem vorherigen Beispiel mit einer Sonne, die vor einem hellblauen Hintergrund auf- und untergeht, drehen wir hier die Sonne schrittweise durch einen Regenbogen von Farben. Das Timing der Position und der Farbe der Sonne ist unabhängig voneinander.

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

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und fügen einen zweiten Satz von Animations-`@keyframes` hinzu, um einen {{cssxref("filter")}} anzuwenden, der den Farbton mithilfe der Filterfunktion [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) durch alle möglichen Werte dreht:

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

Anschließend wenden wir die beiden Animationen auf unsere Sonne an. Mehrere Animationen werden durch Kommas getrennt, und die Parameter jeder Animation werden unabhängig festgelegt:

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    24s linear 0s infinite psychedelic;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying multiple animations')}}

### Kaskadieren mehrerer Animationen

Dieses Beispiel zeigt, was passiert, wenn mehrere Animationen Werte für dieselbe Eigenschaft definieren. Dieses Beispiel erweitert das Beispiel zur [grundlegenden Verwendung](#basic_usage_a_sunrise), wobei zwei Animationen angewendet werden, die beide einen {{cssxref("transform")}}-Wert setzen.

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

Wir verwenden dasselbe HTML und CSS wie im ersten Beispiel, einschließlich der ursprünglichen `sunrise`-Animation, sowie eine zweite Animation namens `bounce`. Die beiden Animationen deklarieren Werte für dieselbe Eigenschaft:

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

Wir wenden beide Animationen auf die Sonne an. Wenn zwei Animationen unterschiedliche Werte auf dieselbe Eigenschaft anwenden, überschreiben später in der Kaskade deklarierte Animationen zuvor deklarierte Animationen. In diesem Fall gewinnt der `transform`-Wert der `bounce`-Animation in der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#css_animations_and_the_cascade) und überschreibt die durch `sunrise` gesetzte Transformation, sodass sich die Sonne nur horizontal bewegt.

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    4s linear 0s infinite alternate bounce;
}
```

#### Ergebnisse

{{EmbedLiveSample('Cascading Multiple Animations')}}

Die Sonne springt zwischen der linken und rechten Seite des Viewports hin und her. Die Sonne bleibt im Viewport, obwohl die Animation `sunrise` definiert ist. Die `transform`-Eigenschaft der Animation `sunrise` wird durch die Animation `bounce` überschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript-API [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
