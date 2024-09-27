---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 11b0f82fbdcc820866d8df218169d83a58b4f7e9
---

{{CSSRef}}

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) stellt eine mathematische Funktion dar, die die Geschwindigkeit beschreibt, mit der sich ein Wert ändert.

Dieser Übergang zwischen zwei Werten kann in verschiedenen Situationen angewendet werden. Er kann verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dies ermöglicht es Ihnen, die Geschwindigkeit der Animation im Verlauf ihrer Dauer zu variieren. Sie können eine Easing-Funktion für CSS-[Übergangs-](/de/docs/Web/CSS/transition-timing-function) und [Animations-](/de/docs/Web/CSS/animation-timing-function) Eigenschaften angeben.

## Syntax

```css
/* linear function and keyword */
/* linear(<point-list>) */
linear(1, -0.5, 0)
linear

/* cubic-bezier function and keywords */
/* cubic-bezier(<x1>, <y1>, <x2>, <y2>) */
cubic-bezier(0.25, 0.1, 0.25, 1)
ease
ease-in
ease-out
ease-in-out

/* steps function and keywords */
/* steps(<number-of-steps>, <direction>) */
steps(4, end)
steps(10, jump-both)
step-start
step-end
```

### Werte

- `linear`

  - : Gibt eine konstante Rate der Interpolation an, ohne Änderung der Fortschrittsrate während der gesamten Dauer (d.h. keine Beschleunigung oder Verlangsamung). Dieser Schlüsselwortwert entspricht sowohl den Funktionen [`cubic-bezier(0, 0, 1, 1)`](#kubische_bézier-easing-funktion) als auch [`linear(0, 1)`](#lineare_easing-funktion).

![Graph des "Eingabefortschritts" zu "Ausgabefortschritt" zeigt eine Linie, die sich vom Ursprung bis zu (1, 1) erstreckt.](linear.svg)

- `<linear-easing-function>`

  - : Gibt eine `linear()`-Funktion mit einem oder mehreren kommaseparierten _linearen Stops_ an, die jeweils bis zu zwei optionale _Stoplängen_ enthalten können, um den Fortschritt einer Animation oder eines Übergangs zu steuern.

    Die `linear()`-Funktion gibt eine `<linear-stop-list>` an, eine kommaseparierte Liste von Punkten entlang des Animations- oder Übergangsfortschritts. Jeder Punkt oder `<linear-stop>` in der Liste wird als {{cssxref("&lt;number&gt;")}} zwischen `0` und `1` angegeben. Standardmäßig ist jeder Stop in der `<linear-stop-list>` gleich verteilt. Um mehr Kontrolle über den Fortschritt der Animation oder des Übergangs zu haben, kann jeder Punkt bis zu zwei optionale {{cssxref("&lt;percentage&gt;")}} `<linear-stop-length>`-Werte enthalten.

    - `<number>`: Repräsentiert einen Zeitpunkt während der Dauer der Animation oder des Übergangs. Der Wert `0` repräsentiert den Anfang der Iteration und `1` das Ende. Werte außerhalb des Bereichs von 0 bis 1 sind ebenfalls zulässig.

    - `<percentage>`: Gibt die Position eines linearen Stops entlang der Dauer an. Es können bis zu zwei Werte angenommen werden. Wird ein Wert angegeben, definiert dieser den Start des zugehörigen linearen Stops. Werden zwei Prozentwerte angegeben, definieren sie die Länge des Stops: Der erste Prozentwert gibt den Startpunkt und der zweite Prozentwert das Ende für diesen Abschnitt in der Animation oder dem Übergang an. Wenn kein `<percentage>`-Wert angegeben wird, was der Standard ist, sind die Stops gleichmäßig entlang der Zeitleiste verteilt.

- `<cubic-bezier-easing-function>`

  - : Gibt eine [Bézier-Kurve](/de/docs/Glossary/Bezier_curve) an, um den Fortschritt einer Animation oder eines Übergangs zu gestalten. In CSS werden Bézier-Kurven durch vier Kontrollpunkte definiert, die die Kurve mathematisch beschreiben: einen Startpunkt, einen Endpunkt und zwei Kontrollpunkte. Die kubische Bézier-Easing-Funktion kann auf eine der beiden Arten definiert werden: durch Erstellen einer benutzerdefinierten Kurve mit einem Vier-Parameter-`cubic-bezier()`-Funktionsaufruf oder durch Verwendung eines der vordefinierten Schlüsselwortwerte, die den häufig verwendeten Bézier-Kurvenparametern entsprechen. Zu den vordefinierten Schlüsselwortwerten gehören:

    `ease`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.25, 0.1, 0.25, 1)`. Es zeigt an, dass die Interpolation langsam beginnt, stark beschleunigt und dann allmählich gegen Ende abflacht. Es ähnelt dem Schlüsselwort `ease-in-out`, beschleunigt jedoch zu Beginn stärker.

    `ease-in`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 1, 1)`. Es zeigt an, dass die Interpolation langsam beginnt und dann allmählich bis zum Ende beschleunigt, wo sie abrupt stoppt.

    `ease-out`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0, 0, 0.58, 1)`. Es zeigt an, dass die Interpolation abrupt beginnt und dann allmählich gegen Ende verlangsamt.

    `ease-in-out`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 0.58, 1)`. Es zeigt an, dass die Interpolation langsam beginnt, dann beschleunigt und gegen Ende wieder verlangsamt. Am Anfang verhält es sich wie das Schlüsselwort `ease-in`; am Ende ist es wie das Schlüsselwort `ease-out`.

    ![Graphen des "Eingabefortschritts" zu "Ausgabefortschritt", von denen "ease" eine gekrümmte Linie zeigt, die schnell vom Ursprung zu (1, 1) ansteigt; "ease-in" zeigt eine flache gekrümmte Linie vom Ursprung, die sich glättet, wenn sie sich (1, 1) nähert; "ease-out" zeigt eine schräg steigende Linie, die sich leicht krümmt, wenn sie sich (1, 1) nähert; und "ease-in-out" zeigt eine symmetrische, S-förmige Linie, die sich vom Ursprung zu (1, 1) krümmt.](ease.svg)

    `cubic-bezier()`: Diese Funktion akzeptiert vier {{cssxref("&lt;number&gt;")}}-Werte, um eine Kurve zu gestalten.

    - {{cssxref("&lt;number&gt;")}}: Gibt die Lage der [P1- und P2-Punkte](#kubische_bézier-easing-funktion) auf der Kurve an. `<x1>` und `<y1>` sind die Koordinaten für Punkt P1, und `<x2>` und `<y2>` sind die Koordinaten für Punkt P2. Die Werte von `<x1>` und `<x2>` müssen zwischen `0` und `1` liegen, andernfalls funktioniert die Funktion nicht wie erwartet.

- `<step-easing-function>`

  - : Gibt eine `steps()`-Funktion an, die die Animation in eine bestimmte Anzahl gleichlanger Intervalle oder "Steps" unterteilt und die Animation von einem Schritt zum nächsten springen lässt, anstatt sanft zu überblenden. Dieser Parameter akzeptiert einen der beiden folgenden Schlüsselwortwerte, die auf vordefinierte `steps()`-Funktionen abbilden, oder eine benutzerdefinierte `steps()`-Funktion:

    `step-start`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `steps(1, jump-start)` oder `steps(1, start)`. Es zeigt an, dass die Interpolation sofort zu ihrem Endzustand springt, wo sie bis zum Ende bleibt.

    `step-end`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `steps(1, jump-end)` oder `steps(1, end)`. Es zeigt an, dass die Interpolation in ihrem initialen Zustand bleibt, bis sie am Ende direkt in den Endzustand springt.

    ![Zwei Graphen des "Eingabefortschritts" zu "Ausgabefortschritt". Im Graph "step-start" repräsentiert ein nicht ausgefüllter Kreis den Ursprungspunkt (0,0), mit einer horizontalen Linie, die sich von (0, 1) bis (1, 1) erstreckt. Im Graph "step-end" erstreckt sich eine horizontale Linie vom Ursprung zu (1, 0), mit einem nicht ausgefüllten Kreis bei (1,0) und einem ausgefüllten Kreis bei (1, 1).](step.svg)

    `steps()`: Diese Funktion akzeptiert eine positive {{cssxref("&lt;integer&gt;")}} und eine optionale `<step-position>`.

    - `<integer>`: Gibt die Anzahl gleichabständiger Intervalle oder 'Steps' an. Es muss eine positive Ganzzahl größer als `0` sein, es sei denn, der zweite Parameter ist `jump-none`, in diesem Fall muss es eine positive Ganzzahl größer als `1` sein.
    - `<step-position>`: Gibt an, [wann der Sprung](#steps-easing-funktion) erfolgen soll, entweder am Anfang, am Ende, sowohl am Anfang als auch am Ende oder weder noch. Die möglichen Schlüsselwortwerte umfassen:

      - `jump-start` bedeutet, dass der erste Sprung direkt am Anfang erfolgt, im Wesentlichen an der `0`-Stelle. Es wird keine Zeit am `0%`-Punkt verbracht.
      - `jump-end` bedeutet, dass der letzte Sprung direkt am Ende erfolgt, im Wesentlichen an der `1`-Stelle. Es wird keine Zeit am `100%`-Punkt verbracht. Dies ist der Standardwert, wenn keine `<step-position>` angegeben wird.
      - `jump-none` bedeutet, dass weder am Anfang noch am Ende ein Sprung erfolgt, wodurch effektiv ein Schritt während der Dauer entfernt wird. Stattdessen bleibt der Fortschritt sowohl am `0%`-Punkt als auch an den `100%`-Punkten konstant. Die Dauer dieser Haltepositionen wird durch Division der Gesamtdauer durch die Anzahl der Schritte (1/n) bestimmt.
      - `jump-both` bedeutet, dass Sprünge sowohl am Anfang als auch am Ende erfolgen, also sowohl bei `0` als auch bei `1`. Effektiv wird an beiden Enden ein Schritt hinzugefügt. Es wird keine Zeit an den `0%`- und `100%`-Punkten verbracht.
      - `start` ist gleichbedeutend mit `jump-start`.
      - `end` ist gleichbedeutend mit `jump-end`.

## Beschreibung

Es gibt drei Arten von Easing-Funktionen:

- [Linear](#lineare_easing-funktion)
- [Kubische Bézier-Kurve](#kubische_bézier-easing-funktion)
- [Steps](#steps-easing-funktion)

### Lineare Easing-Funktion

Die `linear()`-Funktion erzeugt eine stückweise lineare Easing, die es ermöglicht, komplexe Animationen und Übergänge zu approximieren, indem sie linear zwischen den angegebenen Punkten interpoliert. Die Interpolation erfolgt mit konstanter Rate von Anfang bis Ende. Eine typische Verwendung der `linear()`-Funktion besteht darin, viele Punkte zu verwenden, um jede Kurve zu approximieren.

Zum Beispiel hat die `linear(0, 0.25, 1)`-Funktion lineare Stops von `0`, `0.25` und `1` als Argumente. Die Animation oder der Übergang beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt sich dann linear zu Punkt `1` fort. Da kein `<linear-stop-length>`-Prozentsatz angegeben ist, wird für das Fortbewegen von `0` zu `0.25` und von `0.25` zu `1` die gleiche Dauer (50%) verwendet.

![Graphen des "Eingabefortschritts" zu "Ausgabefortschritt", von denen "linear(0, 0.25, 1)" eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und "linear(0, 0.25 75%, 1)" zeigt eine gebrochene Linie, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stops gleichmäßig verteilt. Wenn es also 5 Stops gibt, sind sie bei 0%, 25%, 50%, 75% und 100% der Dauer. Sie können optionale `<linear-stop-length>`-Prozentwerte verwenden, um eine feinere Kontrolle zu bieten, indem Sie den Start und/oder die Länge jedes Segments definieren, was einen kontrollierteren Übergang erlaubt.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixeln. Schauen wir uns ein Beispiel an, bei dem die Easing der Animation angegeben ist: `linear(0, 0.25 75%, 1)`. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) bis zu 25 Pixel (25% ihrer gesamten Änderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet. Bei der gleichen Animation wird stattdessen die Easing-Funktion `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation in 25 Sekunden (25% der Dauer) 50 Pixel (50% ihrer gesamten Änderung) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichwertig mit `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

> [!NOTE]
> Das Schlüsselwort [`linear`](#linear) entspricht der Easing-Funktion `linear(0, 1)`. Während das `linear`-Schlüsselwort immer wie angegeben interpretiert wird, wird die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert.

### Kubische Bézier-Easing-Funktion

Die funktionale Notation `cubic-bezier()` definiert eine kubische [Bézier-Kurve](/de/docs/Glossary/Bezier_curve). Die Easing-Funktionen der cubic-bezier Untermenge von Easing-Funktionen werden oft als "sanfte" Easing-Funktionen bezeichnet, da sie verwendet werden können, um den Start und das Ende der [Interpolation](/de/docs/Glossary/interpolation) zu glätten. Sie korrelieren einen Eingabefortschritt mit einem Ausgabefortschritt, die beide als {{cssxref("&lt;number&gt;")}} angegeben sind. Für diese Werte steht `0.0` für den Anfangszustand und `1.0` für den Endzustand.

![Graph des "Eingabefortschritts" zu "Ausgabefortschritt" zeigt eine S-förmige Linie, die sich vom Ursprung zu (1, 1) mit den Bézier-Kontrollpunkten P1(0.1, 0.6) und P2(0.7, 0.2) krümmt.](cubic-bezier.svg)

Eine kubische Bézier-Kurve wird durch vier Punkte definiert: P0, P1, P2 und P3. Die Punkte P0 und P3 repräsentieren den Anfang und das Ende der Kurve. In CSS sind diese Punkte als die Koordinaten des Fortschritts festgelegt (die Abszisse ist der Eingabefortschritt, die Ordinate der Ausgabefortschritt). P0 ist `(0, 0)` und repräsentiert den Anfangsfortschritt und den Anfangszustand. P3 ist `(1, 1)` und repräsentiert den Endfortschritt und den Endzustand.

Nicht alle kubischen Bézier-Kurven sind als Easing-Funktionen geeignet, da nicht alle [mathematische Funktionen](https://en.wikipedia.org/wiki/Function_%28mathematics%29) sind; d.h. Kurven, die für eine gegebene Abszisse null oder einen Wert haben. Bei mit CSS definierten festen P0 und P3 ist eine kubische Bézier-Kurve genau dann eine Funktion, also gültig, wenn die Abszissen von P1 und P2 beide im Bereich `[0, 1]` liegen.

Kubische Bézier-Kurven bei denen die P1- oder P2-Ordinate außerhalb des `[0, 1]`-Bereichs liegt, können dazu führen, dass der Wert jenseits des Endzustands geht und dann zurückkehrt. Bei Animationen führt dies für einige Eigenschaften, wie {{cssxref("left")}} oder {{cssxref("right")}}, zu einem "Springen" ähnlichen Effekt.

![Graphen der Easing-Funktion "cubic-bezier(0.3, 0.2, 0.2, 1.4)", von denen einer zeigt, dass der Ausgabefortschritt ab einem bestimmten Eingabefortschritt über 1 steigt, der andere zeigt, dass der Ausgabefortschritt 1 erreicht und dann dort bleibt.](cubic-bezier_out_of_range.svg)

Einige Eigenschaften werden jedoch die Ausgabe einschränken, wenn sie außerhalb eines zulässigen Bereichs liegt. Beispielsweise wird eine Farbkomponente größer als `255` oder kleiner als `0` in {{CSSXref("color_value/rgb", "rgb()")}} auf den nächstgelegenen erlaubten Wert (`255` bzw. `0`) gekappt. Einige `cubic-bezier()`-Werte zeigen diese Eigenschaft.

Wenn Sie eine ungültige kubische Bézier-Kurve angeben, ignoriert CSS die gesamte Eigenschaft.

Die Schlüsselwörter `ease`, `ease-in`, `ease-out` und `ease-in-out` sind äquivalent zu einem bestimmten `cubic-bezier()`-Wert.

### Steps-Easing-Funktion

Die Notation der `steps()`-Funktion definiert eine [Sprungfunktion](https://en.wikipedia.org/wiki/Step_function), die den Bereich der Ausgabewerte in gleichmäßige Schritte unterteilt. Diese Unterklasse von Sprungfunktionen wird manchmal auch _Treppenfunktionen_ genannt.

Hier sind einige Beispiele, die die `steps()`-Funktion veranschaulichen:

```css
steps(2, jump-start) /* Or steps(2, start) */
steps(4, jump-end) /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Graphen des "Eingabefortschritts" zu "Ausgabefortschritt", von denen "steps(2, jump-start)" horizontale Linien zeigt, die sich jeweils 0,5 Einheiten von (0, 0,5) und (0,5, 1) erstrecken, mit leeren Kreisen am Ursprung und (0,5, 0,5); "steps(4, jump-end)" zeigt horizontale Linien, die sich jeweils 0,25 Einheiten von (0, 0), (0,25, 0,25), (0,5, 0,5) und (0,75, 0,75) erstrecken, mit nicht ausgefüllten Kreisen bei (0,25, 0), (0,5, 0,25) und (0,75, 0,5) und einem ausgefüllten Kreis bei (1, 1); "steps(5, jump-none)" zeigt horizontale Linien, die sich jeweils 0,2 Einheiten von (0, 0), (0,2, 0,25), (0,4, 0,5), (0,6, 0,75) und (0,8, 1) erstrecken, mit nicht ausgefüllten Kreisen bei (0,2, 0), (0,4, 0,25), (0,6, 0,5) und (0,8, 0,75); "steps(3, jump-both)" zeigt horizontale Linien, die jeweils 1/3 Einheiten von (0, 0,25), (1/3, 0,5) und (2/3, 0,75) erstrecken, mit einem ausgefüllten Kreis bei (1, 1) und nicht ausgefüllten Kreisen am Ursprung, (1/3, 0,25), (2/3, 0,5) und (1, 0,75).](jump.svg)

Die Schlüsselwörter `step-start` und `step-end` sind äquivalent zu einem bestimmten `steps()`-Wert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen einfachen Vergleich zwischen den verschiedenen Easing-Funktionen unter Verwendung einer Animation. Im Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt ein paar Schlüsselwörter sowie einige `cubic-bezier()`- und `steps()`-Optionen. Nach der Auswahl einer Option können Sie die Animation mit dem bereitgestellten Button starten und stoppen.

#### HTML

```html
<div>
  <div></div>
</div>
<ul>
  <li>
    <button class="animation-button">Start animation</button>
  </li>
  <li>
    <label for="easing-select">Choose an easing function:</label>
    <select id="easing-select">
      <option selected>linear</option>
      <option>linear(0, 0.5 50%, 1)</option>
      <option>ease</option>
      <option>ease-in</option>
      <option>ease-in-out</option>
      <option>ease-out</option>
      <option>cubic-bezier(0.1, -0.6, 0.2, 0)</option>
      <option>cubic-bezier(0, 1.1, 0.8, 4)</option>
      <option>steps(5, end)</option>
      <option>steps(3, start)</option>
      <option>steps(4)</option>
    </select>
  </li>
</ul>
```

#### CSS

```css
body > div {
  position: relative;
  height: 100px;
}

div > div {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: blue;
  background-image: radial-gradient(
    circle at 10px 10px,
    rgb(25 255 255 / 80%),
    rgb(25 255 255 / 40%)
  );
  border-radius: 50%;
  top: 25px;
  animation: 1.5s infinite alternate;
}

@keyframes move-right {
  from {
    left: 10%;
  }

  to {
    left: 90%;
  }
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector("select");
const startBtn = document.querySelector("button");
const divElem = document.querySelector("div > div");

startBtn.addEventListener("click", () => {
  if (startBtn.textContent === "Start animation") {
    divElem.style.animationName = "move-right";
    startBtn.textContent = "Stop animation";
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = "unset";
    startBtn.textContent = "Start animation";
  }
});

selectElem.addEventListener("change", () => {
  divElem.style.animationTimingFunction = selectElem.value;
});
```

#### Ergebnis

{{EmbedLiveSample("comparing_the_easing_functions", "100%", 200)}}

### Verwendung der cubic-bezier() Funktion

Diese kubischen Bézier-Kurven sind gültig für die Verwendung in CSS:

```css example-good
/* The canonical Bézier curve with four <number> in the [0,1] range */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* Using <integer> is valid because any <integer> is also a <number>. */
cubic-bezier(0, 0, 1, 1)

/* Negative values for ordinates are valid, leading to bouncing effects. */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Values greater than 1.0 for ordinates are also valid. */
cubic-bezier(0, 1.1, 0.8, 4)
```

Diese kubischen Bézier-Kurven-Definitionen sind ungültig:

```css example-bad
/* Though the animated output type may be a color,
   Bézier curves work with numerical ratios. */
cubic-bezier(0.1, red, 1.0, green)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* The two points must be defined, there is no default value. */
cubic-bezier(0.3, 2.1)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### Verwendung der steps() Funktion

Diese Easing-Funktionen sind gültig:

```css example-good
/* There are 5 treads, the last one happens
   right before the end of the animation. */
steps(5, end)

/* A two-step staircase, the first one happening
   at the start of the animation. */
steps(2, start)

/* The second parameter is optional. */
steps(2)
```

> [!NOTE]
> Wenn die Animation mehrere Stops enthält, dann werden die in der Funktion `steps()` angegebenen Schritte für jeden Abschnitt angewendet. Daher enthält eine Animation mit drei Segmenten und `steps(2)` insgesamt 6 Schritte, 2 pro Segment.

Diese Easing-Funktionen sind ungültig:

```css example-bad
/* The first parameter must be an <integer> and
   cannot be a real value, even if it is equal to one. */
steps(2.0, jump-end)

/* The amount of steps must be non-negative. */
steps(-3, start)

/* There must be at least one step. */
steps(0, jump-none)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)
- [cubic-bezier](https://cubic-bezier.com/)
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/)
