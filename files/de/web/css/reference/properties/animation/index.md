---
title: "`animation` CSS-Eigenschaft"
short-title: animation
slug: Web/CSS/Reference/Properties/animation
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`animation`**-Eigenschaft in [CSS](/de/docs/Web/CSS) ist eine [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) und wendet eine Animation zwischen Stilen an. Es ist eine Kurzform für {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}.

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

## Zusammengesetzte Eigenschaften

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

Eine oder mehrere `<animation>`-Deklarationen als Einzelangaben, getrennt durch Kommas, wobei jede `<animation>` Folgendes beinhaltet:

- `<keyframes-name>` oder `none`
  - : Der Name einer {{cssxref("@keyframes")}}-Regel, die die auf ein Element anzuwendende Animation angibt. Der Anfangswert für {{cssxref("animation-name")}} ist `none`.
- `<animation-duration>`
  - : Bestimmt die Zeitspanne, die eine Animation benötigt, um einen Zyklus abzuschließen. Der Wert muss einer der in {{cssxref("animation-duration")}} verfügbaren sein. Der Anfangswert ist `0s`.
- `<easing-function>`
  - : Bestimmt den Übergangstyp. Der Wert muss einer der in {{cssxref("animation-timing-function")}} verfügbaren sein. Der Anfangswert ist `ease`.
- `<animation-delay>`
  - : Bestimmt die Wartezeit, bevor eine Animation nach der Anwendung auf ein Element beginnt. Der Wert muss einer der in {{cssxref("animation-delay")}} verfügbaren sein. Der Anfangswert ist `0s`.
- `<single-animation-direction>`
  - : Die Richtung, in der die Animation abgespielt wird. Der Wert muss einer der in {{cssxref("animation-direction")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-direction")}} ist `normal`.
- `<single-animation-iteration-count>`
  - : Die Anzahl der Wiederholungen der Animation. Der Wert muss einer der in {{cssxref("animation-iteration-count")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-iteration-count")}} ist `1`.
- `<single-animation-fill-mode>`
  - : Bestimmt, wie Stile vor und nach der Ausführung der Animation auf das Ziel angewendet werden sollen. Der Wert muss einer der in {{cssxref("animation-fill-mode")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-fill-mode")}} ist `none`.
- `<single-animation-play-state>`
  - : Bestimmt, ob die Animation abgespielt wird oder nicht. Der Wert muss einer der in {{cssxref("animation-play-state")}} verfügbaren sein. Der Anfangswert für {{cssxref("animation-play-state")}} ist `running`.
- `<single-animation-timeline>`
  - : Bestimmt die Zeitleiste, die zur Steuerung des Fortschritts der Animation verwendet wird. Der Wert muss einer der in {{cssxref("animation-timeline")}} verfügbaren sein. Der Anfangswert ist `auto`.

## Beschreibung

Die `animation`-Eigenschaft wird als eine oder mehrere Einzelanimationen angegeben, getrennt durch Kommas. Jede `animation` innerhalb der durch Kommas getrennten Liste von Animationen setzt die {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-play-state")}} und {{cssxref("animation-timeline")}}. Wenn eine der Komponenten in einer `animation`-Deklaration nicht enthalten ist, wird der Wert der Komponente auf den Anfangswert der Komponente gesetzt.

### animation-name

Die `<animation-name>`-Komponente jeder Animation ist der Name der Animation, der `none`, eine {{cssxref("&lt;custom-ident&gt;")}} oder eine {{cssxref("&lt;string&gt;")}} sein kann. Der Anfangswert von `animation-name` ist `none`, was bedeutet, dass, wenn kein `animation-name`-Wert in der `animation`-Kurzformdeklaration enthalten ist, keine Animation auf irgendwelche der Eigenschaften angewendet wird.

Die Reihenfolge der anderen Werte innerhalb einer Animationsdefinition ist wichtig, um einen {{cssxref("animation-name")}}-Wert von anderen Werten zu unterscheiden. Wenn ein Wert in der `animation`-Kurzform als Wert für eine andere Animationseigenschaft als `animation-name` geparst werden kann, wird der Wert zuerst auf diese Eigenschaft angewendet und nicht auf `animation-name`. Aus diesem Grund wird empfohlen, einen Wert für `animation-name` als letzten Wert in einer Liste von Werten bei der Verwendung der `animation`-Kurzform anzugeben; dies gilt auch, wenn Sie mehrere, durch Kommas getrennte Animationen mit der `animation`-Kurzform angeben.

### Zeitwerte

Jede Animation kann null, ein oder zwei Vorkommen des {{cssxref("&lt;time&gt;")}}-Werts enthalten. Die Reihenfolge der Zeitwerte innerhalb jeder Animationsdefinition ist wichtig: Der erste Wert, der als {{cssxref("&lt;time&gt;")}} geparst werden kann, wird {{cssxref("animation-duration")}} zugewiesen, und der zweite wird {{cssxref("animation-delay")}} zugewiesen.

Wenn kein `animation-duration`-Wert in der `animation`-Kurzformdeklaration angegeben ist, wird die Dauer standardmäßig auf `0s` gesetzt. In diesem Fall tritt die Animation dennoch auf (die [`animationStart`](/de/docs/Web/API/Element/animationstart_event) und [`animationEnd`](/de/docs/Web/API/Element/animationend_event) Ereignisse werden ausgelöst), aber es wird keine Animation für den Benutzer sichtbar sein.

### animation-timeline

Wenn keine `<animation-timeline>`-Angabe in der `animation`-Kurzform enthalten ist, setzt die Kurzformdeklaration alle zuvor deklarierten `animation-timeline`-Werte auf `auto` zurück, wodurch die Zeitleiste auf die Standard-[`documentTimeline`](/de/docs/Web/API/DocumentTimeline) gesetzt wird.

Wenn ein `<animation-timeline>`-Wert enthalten ist, der Benutzeragent jedoch `<animation-timeline>`-Werte innerhalb der Kurzform nicht unterstützt, ist die gesamte `animation`-Deklaration ungültig und wird ignoriert. Aus diesem Grund müssen bei der Erstellung von [CSS scroll-getriebenen Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) die `animation-timeline`-Eigenschaft nach der Deklaration einer `animation`-Kurzform angegeben werden, damit sie wirksam wird.

Alternativ kann die `<animation-timeline>` innerhalb der `animation`-Kurzform in einem CSS {{cssxref("@supports")}}-Block festgelegt werden, wie z.B.:

```css
@supports (animation: view()) {
  /* CSS for browsers supporting <animation-timeline> within `animation` shorthand */
}
```

### animation-fill-mode und neue Stacking-Kontexte

Im Fall des `animation-fill-mode` [forwards](/de/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards) Wertes verhalten sich animierte Eigenschaften so, als ob sie in einem Set {{cssxref("will-change")}}-Eigenschaftswert enthalten wären. Wenn während der Animation ein neuer Stacking-Kontext erstellt wird, behält das Zielelement den Stacking-Kontext bei, nachdem die Animation beendet ist.

## Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Anliegen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Bewegungsarten ein Auslöser für vestibuläre Störungen, Epilepsie, Migräne und fototoxische Empfindlichkeiten sein.

Es ist ratsam, eine Möglichkeit anzubieten, Animationen zu pausieren oder zu deaktivieren, sowie die [reduzierte Bewegungs-`@media`-Abfrage](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Vorliebe für weniger animierte Erlebnisse ausgedrückt haben.

- [Designing Safer Web Animation For Motion Sensitivity](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/) über A List Apart (2015)
- [An Introduction to the Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/) über CSS-Tricks (2017)
- [Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/) über WebKit (2017)
- [Understanding WCAG, Guideline 2.2 — Enough Time: Provide users enough time to read and use content](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding WCAG Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) über W3C (2026)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

> [!NOTE]
> Das Animieren von [CSS-Boxmodel](/de/docs/Web/CSS/Guides/Box_model)-Eigenschaften wird nicht empfohlen, da dies zu Layout-Neuberechnungen und Neuzeichnungen führt. Das Animieren jeglicher Boxmodell-Eigenschaft ist von Natur aus CPU-intensiv; überlegen Sie, stattdessen die [transform](/de/docs/Web/CSS/Reference/Properties/transform)-Eigenschaft zu animieren.

### Grundlegende Verwendung: ein Sonnenaufgang

In diesem Beispiel demonstrieren wir die grundlegende Verwendung der `animation`-Kurzform, indem wir eine gelbe Sonne über einen hellblauen Himmel animieren. Die Sonne steigt
in die Mitte der Ansicht an und fällt dann aus dem Blickfeld.

#### HTML

Wir fügen ein einzelnes {{htmlelement("div")}}-Element ein, um unsere Sonne darzustellen.

```html
<div class="sun"></div>
```

#### CSS

Wir beginnen mit der Erstellung der Sonne und des Himmels. Der Himmel ist das {{cssxref(":root")}} des HTML-Dokuments. Wir verbergen Inhalte, die außerhalb der Ansicht liegen, was in unserem Fall jeder Teil der Sonne unterhalb des Horizonts sein wird, indem wir das {{cssxref("overflow")}} auf hidden setzen. Wir verwenden auch die {{cssxref("justify-content")}}-Eigenschaft, um die Sonne im Hintergrund zu zentrieren. Wir machen die Sonne gelb, geben ihr die {{cssxref("height")}} der Ansichtshöhe (`100vh`), und setzen ihre Breite gleich ihrer Höhe, indem wir das {{cssxref("aspect-ratio")}} auf `1` setzen. Wir verwandeln das quadratische `<div>` in einen Kreis mit der {{cssxref("border-radius")}}-Eigenschaft.

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

Als nächstes definieren wir einige Animation-{{cssxref("@keyframes")}}, die das Element, auf das sie angewendet werden, über die Ansicht hinausschieben und dann das Element in seine Standardposition zurückbringen, unter Verwendung von [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms):

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

Der letzte Schritt ist die Anwendung der Animation! Wir verwenden die `animation`-Kurzform, um die `sunrise`-Keyframe-Animation auf das `.sun` `<div>` anzuwenden. Die Animation ist so eingestellt, dass sie unendlich oft abgespielt wird, wobei jede Iteration 4 Sekunden dauert; die Animationsrichtung wechselt mit jeder Iteration:

```css
.sun {
  animation: 4s linear 0s infinite alternate sunrise;
}
```

#### Ergebnisse

{{EmbedLiveSample('Basic usage: a sunrise')}}

### Mehrere Animationen anwenden

Dieses Beispiel demonstriert die Anwendung mehrerer Animationen auf ein einzelnes Element. Basierend auf dem vorherigen Beispiel, bei dem eine Sonne über einen hellblauen Hintergrund steigt und fällt, werden wir hier die Sonne allmählich durch einen Regenbogen von Farben drehen. Das Timing der Sonnenposition und Farbe sind unabhängig.

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

Wir verwenden dasselbe HTML und CSS wie im vorherigen Beispiel und fügen ein zweites Set von `@keyframes` für die Animation hinzu, bei dem ein {{cssxref("filter")}} angewendet wird, der die Farbtonrotation durch alle möglichen Werte unter Verwendung der [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) Filterfunktion durchläuft:

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

Wir wenden dann die beiden Animationen auf unsere Sonne an. Mehrere Animationen werden durch Kommas getrennt, und die Parameter jeder Animation werden unabhängig festgelegt:

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    24s linear 0s infinite psychedelic;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying multiple animations')}}

### Mehrere Animationen kaskadieren

Dieses Beispiel zeigt, was passiert, wenn mehrere Animationen Werte für dieselbe Eigenschaft definieren. Dieses Beispiel erweitert das [Grundlegende Nutzung](#basic_usage_a_sunrise)-Beispiel, indem zwei Animationen angewendet werden, die beide einen {{cssxref("transform")}}-Wert festlegen.

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

Wir verwenden dasselbe HTML und CSS wie im ersten Beispiel, einschließlich der ursprünglichen `sunrise`-Animation, und einer zweiten Animation namens `bounce`. Die beiden Animationen deklarieren Werte für dieselbe Eigenschaft:

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

Wir wenden beide Animationen auf die Sonne an. Wenn zwei Animationen unterschiedliche Werte für dieselbe Eigenschaft anwenden, überschreiben später deklarierte Animationen in der Kaskade die zuvor deklarierten. In diesem Fall "gewinnt" der `transform`-Wert der `bounce`-Animation die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction#css_animations_and_the_cascade) und überschreibt die Transformationswerte, die von `sunrise` gesetzt wurden, sodass sich die Sonne nur horizontal bewegt.

```css
.sun {
  animation:
    4s linear 0s infinite alternate sunrise,
    4s linear 0s infinite alternate bounce;
}
```

#### Ergebnisse

{{EmbedLiveSample('Cascading Multiple Animations')}}

Die Sonne springt zwischen den
linken und rechten Seiten der Ansicht. Die Sonne bleibt in der Ansicht, obwohl die `sunrise`-Animation definiert ist. Die `sunrise`-Animationseigenschaft `transform`
wird durch die Bounce-Animation überschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
