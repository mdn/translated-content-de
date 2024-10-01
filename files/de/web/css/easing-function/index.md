---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 11b0f82fbdcc820866d8df218169d83a58b4f7e9
---

{{CSSRef}}

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine mathematische Funktion, die die Geschwindigkeit beschreibt, mit der sich ein Wert ändert.

Dieser Übergang zwischen zwei Werten kann in unterschiedlichen Situationen angewendet werden. Er kann genutzt werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dies ermöglicht es, die Geschwindigkeit der Animation im Verlauf ihrer Dauer zu variieren. Sie können eine Easing-Funktion für die CSS-[transition](/de/docs/Web/CSS/transition-timing-function) und [animation](/de/docs/Web/CSS/animation-timing-function) Eigenschaften angeben.

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

  - : Gibt eine konstante Interpolationsrate an, ohne Änderung der Fortschrittsrate über die gesamte Dauer (d. h. keine Beschleunigung oder Verzögerung). Dieser Schlüsselwortwert entspricht sowohl den Funktionen [`cubic-bezier(0, 0, 1, 1)`](#cubic_bézier_easing_function) als auch [`linear(0, 1)`](#lineare_easing-funktion).

![Diagramm von "Input progress" zu "Output progress", das eine Linie vom Ursprung bis (1, 1) zeigt.](linear.svg)

- `<linear-easing-function>`

  - : Gibt eine `linear()` Funktion mit einem oder mehreren durch Kommas getrennten _linear stops_ an, die jeweils bis zu zwei optionale _stop lengths_ enthalten können, um den Fortschritt einer Animation oder eines Übergangs zu steuern.

    Die `linear()` Funktion spezifiziert eine `<linear-stop-list>`, eine durch Kommas getrennte Liste von Punkten entlang des Animations- oder Übergangsfortschritts. Jeder Punkt oder `<linear-stop>` in der Liste wird als ein {{cssxref("&lt;number&gt;")}} zwischen `0` und `1` angegeben. Standardmäßig sind die Stopps in der `<linear-stop-list>` gleichmäßig verteilt. Um den Fortschritt der Animation oder des Übergangs besser zu kontrollieren, kann jeder Punkt bis zu zwei optionale {{cssxref("&lt;percentage&gt;")}} `<linear-stop-length>` Werte enthalten.

    - `<number>`: Repräsentiert einen Zeitpunkt während der Dauer der Animation oder des Übergangs. Der Wert `0` repräsentiert den Beginn der Iteration und `1` das Ende. Werte außerhalb des Bereichs von 0 bis 1 sind ebenfalls erlaubt.

    - `<percentage>`: Gibt die Position eines linearen Stopps entlang der Dauer an. Es können bis zu zwei Werte angegeben werden. Wenn ein Wert angegeben wird, definiert er den Beginn des zugehörigen linearen Stopps. Wenn zwei Prozentwerte angegeben werden, definieren diese die Länge des Stopps: Der erste Prozentwert gibt den Startpunkt an, der zweite Prozentwert den Endpunkt für dieses Segment der Animation oder des Übergangs. Wenn kein `<percentage>`-Wert angegeben wird, was der Standard ist, sind die Stopps gleichmäßig entlang der Zeitachse verteilt.

- `<cubic-bezier-easing-function>`

  - : Gibt eine {{Glossary("Bezier_curve", "Bézier-Kurve")}} an, um den Fortschritt einer Animation oder eines Übergangs zu gestalten. In CSS werden Bézier-Kurven durch vier Kontrollpunkte definiert, die die Kurve mathematisch beschreiben: ein Startpunkt, ein Endpunkt und zwei Kontrollpunkte. Die kubische Bézier-Easing-Funktion kann auf eine dieser beiden Arten definiert werden: durch das Erstellen einer benutzerdefinierten Kurve mit einem vierparametrigen `cubic-bezier()` Funktionsaufruf oder durch die Verwendung eines der vordefinierten Schlüsselwortwerte, die den häufig verwendeten Bézier-Kurven parametrisieren. Die vordefinierten Schlüsselwortwerte umfassen:

    `ease`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.25, 0.1, 0.25, 1)`. Es zeigt an, dass die Interpolation langsam beginnt, dann schnell beschleunigt und am Ende allmählich langsamer wird. Es ähnelt dem `ease-in-out` Schlüsselwort, beschleunigt jedoch zu Beginn stärker.

    `ease-in`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 1, 1)`. Es zeigt an, dass die Interpolation langsam beginnt und dann bis zum Ende allmählich schneller wird, wo sie abrupt stoppt.

    `ease-out`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0, 0, 0.58, 1)`. Es zeigt an, dass die Interpolation abrupt beginnt und dann allmählich langsamer wird, bis zum Ende.

    `ease-in-out`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 0.58, 1)`. Es zeigt an, dass die Interpolation langsam beginnt, schneller wird und dann am Ende allmählich langsamer wird. Zu Beginn verhält es sich wie das `ease-in` Schlüsselwort; am Ende ist es wie das `ease-out` Schlüsselwort.

    ![Diagramme von "Input progress" zu "Output progress", wobei "ease" eine gekrümmte Linie zeigt, die schnell vom Ursprung zu (1, 1) ansteigt; "ease-in" zeigt eine flache gekrümmte Linie vom Ursprung, die sich streckt, wenn sie sich (1, 1) nähert; "ease-out" zeigt eine diagonale Linie, die sich leicht krümmt, wenn sie sich (1, 1) nähert; und "ease-in-out" zeigt eine symmetrische, "S"-förmige Linie, die vom Ursprung zu (1, 1) verläuft.](ease.svg)

    `cubic-bezier()`: Diese Funktion akzeptiert vier {{cssxref("&lt;number&gt;")}} Werte, um eine Kurve zu formen.

    - {{cssxref("&lt;number&gt;")}}: Gibt den Standort der [P1 und P2 Punkte](#cubic_bézier_easing_function) auf der Kurve an. `<x1>` und `<y1>` sind die Koordinaten für Punkt P1, und `<x2>` und `<y2>` sind die Koordinaten für Punkt P2. `<x1>` und `<x2>` Werte müssen zwischen `0` und `1` liegen, ansonsten funktioniert die Funktion nicht wie erwartet.

- `<step-easing-function>`

  - : Gibt eine `steps()` Funktion an, die die Animation in eine festgelegte Anzahl von gleich langen Intervallen oder "Steps" unterteilt, sodass die Animation von einem Step zum nächsten springt, anstatt einen sanften Übergang zu machen. Dieser Parameter akzeptiert eines der folgenden beiden Schlüsselwortwerte, die mit vordefinierten `steps()` Funktionen oder einer benutzerdefinierten `steps()` Funktion korrespondieren:

    `step-start`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `steps(1, jump-start)` oder `steps(1, start)`. Es zeigt an, dass die Interpolation sofort in ihren Endzustand springt, wo sie bis zum Ende verbleibt.

    `step-end`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `steps(1, jump-end)` oder `steps(1, end)`. Es zeigt an, dass die Interpolation in ihrem Anfangszustand bleibt, bis sie am Ende direkt in ihren Endzustand springt.

    ![Zwei Diagramme von "Input progress" zu "Output progress". Im "step-start" Diagramm stellt ein nicht ausgefüllter Kreis den Ursprungspunkt (0,0) dar, mit einer horizontalen Linie, die von (0, 1) bis (1, 1) verläuft. Im "step-end" Diagramm verläuft eine horizontale Linie vom Ursprung bis (1,0), mit einem nicht ausgefüllten Kreis bei (1,0) und einem ausgefüllten Kreis bei (1, 1).](step.svg)

    `steps()`: Diese Funktion akzeptiert einen positiven {{cssxref("&lt;integer&gt;")}} und eine optionale `<step-position>`.

    - `<integer>`: Repräsentiert die Anzahl der gleichmäßig verteilten Intervalle oder 'Steps'. Es muss eine positive ganze Zahl größer als `0` sein, es sei denn, der zweite Parameter ist `jump-none`, in diesem Fall muss es eine positive ganze Zahl größer als `1` sein.
    - `<step-position>`: Gibt das [Timing des Sprungs](#steps_easing_function) an, der entweder am Anfang, am Ende, sowohl am Anfang als auch am Ende oder an keiner Stelle erfolgen soll. Die möglichen Schlüsselwortwerte umfassen:

      - `jump-start` bedeutet, dass der erste Sprung direkt am Anfang erfolgt, im Wesentlichen an der `0`-Marke. Es wird keine Zeit bei der `0%`-Marke verbracht.
      - `jump-end` bedeutet, dass der letzte Sprung direkt am Ende erfolgt, im Wesentlichen an der `1`-Marke. Es wird keine Zeit bei der `100%`-Marke verbracht. Dies ist der Standardwert, wenn keine `<step-position>` angegeben wird.
      - `jump-none` bedeutet, dass kein Sprung weder am Anfang noch am Ende erfolgt, wodurch effektiv ein Step während der Dauer entfernt wird. Stattdessen bleibt der Fortschritt sowohl bei der `0%`-Marke als auch bei der `100%`-Marke stabil. Die Dauer dieser Haltepunkte wird bestimmt, indem die Gesamtdauer durch die Anzahl der Steps (1/n) geteilt wird.
      - `jump-both` bedeutet, dass Sprünge sowohl am Anfang als auch am Ende erfolgen, im Wesentlichen sowohl bei `0` als auch `1`. Effektiv wird an beiden Enden ein Step hinzugefügt. Es wird keine Zeit bei den `0%`- und `100%`-Marken verbracht.
      - `start` ist gleichbedeutend mit `jump-start`.
      - `end` ist gleichbedeutend mit `jump-end`.

## Beschreibung

Es gibt drei Typen von Easing-Funktionen:

- [Linear](#lineare_easing-funktion)
- [Kubische Bézier-Kurve](#cubic_bézier_easing_function)
- [Steps](#steps_easing_function)

### Lineare Easing-Funktion

Die `linear()` Funktion erstellt eine stückweise lineare Easing, die die Annäherung komplexer Animationen und Übergänge ermöglicht, indem sie linear zwischen den angegebenen Punkten interpoliert. Die Interpolation erfolgt mit einer konstanten Rate von Anfang bis Ende. Ein typischer Anwendungsfall der `linear()` Funktion ist, viele Punkte bereitzustellen, um jede beliebige Kurve zu approximieren.

Zum Beispiel hat die Funktion `linear(0, 0.25, 1)` lineare Stopps von `0`, `0.25` und `1` als Argumente. Die Animation oder der Übergang beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt sich dann linear zu Punkt `1` fort. Da kein `<linear-stop-length>` Prozentwert angegeben ist, wird die gleiche Dauer (50%) verwendet, um von `0` auf `0.25` und von `0.25` auf `1` zu gelangen.

![Diagramme von "Input progress" zu "Output progress", wobei "linear(0, 0.25, 1)" eine gebrochene Linie vom Ursprung über (0.5, 0.25) bis (1, 1) zeigt; und "linear(0, 0.25 75%, 1)" eine gebrochene Linie vom Ursprung über (0.75, 0.25) bis (1, 1) zeigt.](linear_function.svg)

Standardmäßig sind die Stopps gleich weit voneinander entfernt. Wenn es also 5 Stopps gibt, befinden sie sich bei 0%, 25%, 50%, 75% und 100% der Dauer. Sie können optional `<linear-stop-length>` Prozentangaben verwenden, um die Kontrolle zu verfeinern, indem Sie den Beginn und/oder die Länge jedes Segments definieren, wodurch ein kontrollierterer Übergang erreicht wird.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixeln. Schauen wir uns ein Beispiel an, in dem die Easing der Animation angegeben ist: `linear(0, 0.25 75%, 1)`. In diesem Fall schreitet die Animation in den ersten 75 Sekunden (75% der Dauer) auf 25 Pixel (25% der gesamten Änderung) voran. Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet. Für die gleiche Animation, angenommen, die Easing-Funktion wird stattdessen als `linear(0, 0.5 25% 75%, 1)` angegeben. Hier erreicht die Animation 50 Pixel (50% der gesamten Änderung) in 25 Sekunden (25% der Dauer), und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichbedeutend mit `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

> [!NOTE]
> Das [`linear`](#linear) Schlüsselwort ist gleichbedeutend mit der Easing-Funktion `linear(0, 1)`. Während das `linear` Schlüsselwort immer unverändert interpretiert wird, wird die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert.

### Cubic Bézier Easing Function

Die `cubic-bezier()` Funktionsnotation definiert eine kubische {{Glossary("Bezier_curve", "Bézier-Kurve")}}. Die Easing-Funktionen im kubischen Bézier-Subset von Easing-Funktionen werden oft als "weiche" Easing-Funktionen bezeichnet, weil sie verwendet werden können, um den Start und das Ende der {{Glossary("interpolation", "Interpolation")}} zu glätten. Sie korrelieren einen Eingangsfortschritt mit einem Ausgangsfortschritt, beide ausgedrückt als {{cssxref("&lt;number&gt;")}}. Für diese Werte repräsentiert `0.0` den Anfangszustand und `1.0` den Endzustand.

![Diagramm von "Input progress" zu "Output progress", das eine "S"-förmige Linie vom Ursprung zu (1, 1) mit den Bezier-Kontrollpunkten P1(0.1, 0.6) und P2(0.7, 0.2) zeigt.](cubic-bezier.svg)

Eine kubische Bézier-Kurve wird durch vier Punkte definiert: P0, P1, P2 und P3. Die Punkte P0 und P3 repräsentieren den Anfang und das Ende der Kurve. In CSS sind diese Punkte als die Koordinaten des Fortschritts festgelegt (die Abszisse ist der Eingangsfortschritt, die Ordinate der Ausgangsfortschritt). P0 ist `(0, 0)` und repräsentiert den Anfangsfortschritt und den Anfangszustand. P3 ist `(1, 1)` und repräsentiert den Endfortschritt und den Endzustand.

Nicht alle kubischen Bézier-Kurven sind als Easing-Funktionen geeignet, weil nicht alle [mathematische Funktionen](<https://de.wikipedia.org/wiki/Funktion_(Mathematik)>) sind; d. h. Kurven, die für eine gegebene Abszisse null oder einen Wert haben. Mit P0 und P3, die durch CSS festgelegt sind, ist eine kubische Bézier-Kurve eine Funktion und daher gültig, wenn und nur wenn die Abszissen von P1 und P2 beide im `[0, 1]` Bereich liegen.

Kubische Bézier-Kurven mit der Ordinate von P1 oder P2 außerhalb des `[0, 1]` Bereichs können dazu führen, dass der Wert weiter als der Endzustand geht und dann zurückkehrt. Bei Animationen erzeugt dies für einige Eigenschaften, wie {{cssxref("left")}} oder {{cssxref("right")}}, einen "spring-effekt".

![Grafiken der Easing-Funktion "cubic-bezier(0.3, 0.2, 0.2, 1.4)", von denen eine den Ausgangsfortschritt über 1 ab einem bestimmten Eingangsfortschritt zeigt, die andere zeigt den Ausgangsfortschritt, der 1 erreicht und dann dort bleibt.](cubic-bezier_out_of_range.svg)

Jedoch werden bestimmte Eigenschaften den Ausgang einschränken, wenn er außerhalb eines zulässigen Bereichs liegt. Zum Beispiel wird eine Farbkomponente größer als `255` oder kleiner als `0` in {{CSSXref("color_value/rgb", "rgb()")}} auf den nächstgelegenen erlaubten Wert (`255` und `0`) beschnitten. Einige `cubic-bezier()` Werte zeigen diese Eigenschaft.

Wenn Sie eine ungültige kubische Bézier-Kurve angeben, ignoriert CSS die gesamte Eigenschaft.

Die Schlüsselwörter `ease`, `ease-in`, `ease-out` und `ease-in-out` entsprechen einem bestimmten `cubic-bezier()` Wert.

### Steps Easing Function

Die `steps()` Funktionsnotation definiert eine [Stufenfunktion](https://de.wikipedia.org/wiki/Sprungfunktion), die die Domäne der Ausgangswerte in gleich abständige Steps unterteilt. Diese Unterklasse von Stufenfunktionen wird manchmal auch _Treppenfunktionen_ genannt.

Dies sind einige Beispiele zur Veranschaulichung der `steps()` Funktion:

```css
steps(2, jump-start) /* Or steps(2, start) */
steps(4, jump-end) /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Diagramme von "Input progress" zu "Output progress", wobei "steps(2, jump-start)" horizontale Linien zeigt, die sich jeweils 0,5 Einheit von (0, 0,5) und (0,5, 1) erstrecken, mit leeren Kreisen am Ursprung und (0,5, 0,5); "steps(4, jump-end)" zeigt horizontale Linien, die sich jeweils 0,25 Einheit von (0, 0), (0,25, 0,25), (0,5, 0,5) und (0,75, 0,75) erstrecken, mit nicht ausgefüllten Kreisen bei (0,25, 0), (0,5, 0,25), und (0,75, 0,5) und einem ausgefüllten Kreis bei (1, 1); "steps(5, jump-none)" zeigt horizontale Linien, die sich jeweils 0,2 Einheit von (0, 0), (0,2, 0,25), (0,4, 0,5), (0,6, 0,75) und (0,8, 1) erstrecken, mit nicht ausgefüllten Kreisen bei (0,2, 0), (0,4, 0,25), (0,6, 0,5) und (0,8, 0,75); "steps(3, jump-both)" zeigt horizontale Linien, die sich jeweils 1/3 Einheit von (0, 0.25), (1/3, 0.5) und (2/3, 0.75) erstrecken, mit einem ausgefüllten Kreis bei (1, 1) und nicht ausgefüllten Kreisen am Ursprung, (1/3, 0.25), (2/3, 0.5) und (1, 0.75).](jump.svg)

Die Schlüsselwörter `step-start` und `step-end` sind gleichbedeutend mit einem bestimmten `steps()` Wert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen einfachen Vergleich zwischen den verschiedenen Easing-Funktionen mithilfe einer Animation. Aus dem Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt ein paar Schlüsselwörter und einige `cubic-bezier()` sowie `steps()` Optionen. Nach der Auswahl einer Option können Sie die Animation mit dem bereitgestellten Button starten oder stoppen.

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

Diese kubischen Bézier-Kurven sind zur Verwendung in CSS gültig:

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

Diese kubischen Bézier-Kurvendefinitionen sind ungültig:

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
> Wenn die Animation mehrere Stopps enthält, dann werden die in der `steps()` Funktion angegebenen Schritte auf jeden Abschnitt angewendet. Daher enthält eine Animation mit drei Segmenten und `steps(2)` insgesamt 6 Schritte, 2 pro Segment.

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
