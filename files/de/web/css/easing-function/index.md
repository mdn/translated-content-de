---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 11b0f82fbdcc820866d8df218169d83a58b4f7e9
---

{{CSSRef}}

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) stellt eine mathematische Funktion dar, die die Rate beschreibt, mit der sich ein Wert ändert.

Diese Übergänge zwischen zwei Werten können in verschiedenen Situationen angewendet werden. Er kann verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dadurch können Sie die Geschwindigkeit der Animation im Laufe ihrer Dauer variieren. Sie können eine Easing-Funktion für CSS [transition](/de/docs/Web/CSS/transition-timing-function) und [animation](/de/docs/Web/CSS/animation-timing-function) Eigenschaften spezifizieren.

## Syntax

```css
/* lineare Funktion und Schlüsselwort */
/* linear(<point-list>) */
linear(1, -0.5, 0)
linear

/* kubische Bezier-Funktion und Schlüsselwörter */
/* cubic-bezier(<x1>, <y1>, <x2>, <y2>) */
cubic-bezier(0.25, 0.1, 0.25, 1)
ease
ease-in
ease-out
ease-in-out

/* Schritte-Funktion und Schlüsselwörter */
/* steps(<number-of-steps>, <direction>) */
steps(4, end)
steps(10, jump-both)
step-start
step-end
```

### Werte

- `linear`

  - : Bestimmt eine konstante Interpolationsrate ohne Änderung der Fortschrittsrate über die gesamte Dauer (d. h. keine Beschleunigung oder Verzögerung). Dieser Schlüsselwortwert entspricht sowohl der [`cubic-bezier(0, 0, 1, 1)`](#kubische_bézier_easing-funktion) als auch der [`linear(0, 1)`](#lineare_easing-funktion) Funktion.

![Grafik von "Input progress" zu "Output progress", die eine Linie zeigt, die sich vom Ursprung bis (1, 1) erstreckt.](linear.svg)

- `<linear-easing-function>`

  - : Bestimmt eine `linear()` Funktion mit einem oder mehreren durch Kommas getrennten _linearen Stopps_, die jeweils bis zu zwei optionale _Stopp-Längen_ enthalten, um den Fortschritt einer Animation oder Transition zu steuern.

    Die `linear()` Funktion gibt eine `<linear-stop-list>` an, eine durch Kommas getrennte Liste von Punkten entlang des Animations- oder Transition-Fortschritts. Jeder Punkt oder `<linear-stop>` in der Liste wird als ein {{cssxref("&lt;number&gt;")}} zwischen `0` und `1` angegeben. Standardmäßig ist jeder Stopp in der `<linear-stop-list>` gleich weit entfernt. Um den Fortschritt der Animation oder Transition besser zu kontrollieren, kann jeder Punkt bis zu zwei optionale {{cssxref("&lt;percentage&gt;")}} `<linear-stop-length>` Werte enthalten.

    - `<number>`: Repräsentiert einen Zeitpunkt entlang der Dauer der Animation oder Transition. Der Wert `0` repräsentiert den Beginn der Iteration und `1` das Ende. Werte außerhalb des Bereichs von 0 bis 1 sind ebenfalls erlaubt.

    - `<percentage>`: Gibt die Position eines linearen Stopps entlang der Dauer an. Es können bis zu zwei Werte angenommen werden. Wenn ein Wert angegeben wird, definiert er den Beginn des zugehörigen linearen Stopps. Wenn zwei Prozentwerte angegeben werden, definieren sie die Länge des Stopps: der erste Prozentsatz gibt den Startpunkt und der zweite Prozentsatz den Endpunkt für dieses Segment in der Animation oder der Transition an. Wenn kein `<percentage>` Wert angegeben wird, was der Standard ist, werden die Stopps gleichmäßig entlang der Zeitachse verteilt.

- `<cubic-bezier-easing-function>`

  - : Bestimmt eine [Bézier-Kurve](/de/docs/Glossary/Bezier_curve), um den Fortschritt einer Animation oder einer Transition zu gestalten. In CSS werden Bézier-Kurven durch vier Kontrollpunkte definiert, die die Kurve mathematisch beschreiben: ein Anfangspunkt, ein Endpunkt und zwei Kontrollpunkte. Die kubische Bézier-Easing-Funktion kann auf eine der folgenden zwei Arten definiert werden: durch die Erstellung einer benutzerdefinierten Kurve mit einem vier-Parameter `cubic-bezier()` Funktionsaufruf oder durch die Verwendung eines der vordefinierten Schlüsselwerten, die den häufig verwendeten Bézier-Kurvenparametern entsprechen. Die vordefinierten Schlüsselwerte umfassen:

    `ease`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.25, 0.1, 0.25, 1)`. Es zeigt an, dass die Interpolation langsam beginnt, stark beschleunigt und dann allmählich gegen Ende verlangsamt. Es ist dem `ease-in-out` Schlüsselwort ähnlich, beschleunigt jedoch zu Beginn stärker.

    `ease-in`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 1, 1)`. Es zeigt an, dass die Interpolation langsam beginnt und dann allmählich bis zum Ende immer schneller wird und schließlich abrupt stoppt.

    `ease-out`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0, 0, 0.58, 1)`. Es zeigt an, dass die Interpolation abrupt beginnt und dann allmählich gegen Ende verlangsamt.

    `ease-in-out`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 0.58, 1)`. Es zeigt an, dass die Interpolation langsam beginnt, beschleunigt und dann gegen Ende verlangsamt. Am Anfang verhält es sich wie das `ease-in` Schlüsselwort; am Ende ist es wie das `ease-out` Schlüsselwort.

    ![Grafiken von "Input progress" zu "Output progress", von denen "ease" eine gebogene Linie zeigt, die schnell vom Ursprung zu (1, 1) steigt; "ease-in" zeigt eine flache gebogene Linie vom Ursprung, die sich beim Annähern an (1, 1) glättet; "ease-out" zeigt eine gerade diagonale Linie, die sich leicht krümmt, wenn sie sich (1, 1) nähert; und "ease-in-out" zeigt eine symmetrische, "S"-förmige Linie, die sich vom Ursprung bis (1, 1) krümmt.](ease.svg)

    `cubic-bezier()`: Diese Funktion akzeptiert vier {{cssxref("&lt;number&gt;")}} Werte, um eine Kurve zu gestalten.

    - {{cssxref("&lt;number&gt;")}}: Gibt die Lage der [P1- und P2-Punkte](#kubische_bézier_easing-funktion) auf der Kurve an. `<x1>` und `<y1>` sind die Koordinaten für Punkt P1, und `<x2>` und `<y2>` sind die Koordinaten für Punkt P2. Die Werte `<x1>` und `<x2>` müssen zwischen `0` und `1` liegen, sonst funktioniert die Funktion nicht wie erwartet.

- `<step-easing-function>`

  - : Bestimmt eine `steps()` Funktion, die die Animation in eine festgelegte Anzahl gleichlanger Intervalle oder "Schritte" unterteilt, wodurch die Animation von einem Schritt zum nächsten springt, anstatt sanft zu übergehen. Dieser Parameter akzeptiert eines der folgenden zwei Schlüsselwortwerte, die mit vordefinierten `steps()` Funktionen übereinstimmen, oder eine benutzerdefinierte `steps()` Funktion:

    `step-start`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `steps(1, jump-start)` oder `steps(1, start)`. Es zeigt an, dass die Interpolation sofort auf ihren Endzustand springt und dort bis zum Ende bleibt.

    `step-end`: Dieses Schlüsselwort repräsentiert die Easing-Funktion `steps(1, jump-end)` oder `steps(1, end)`. Es zeigt an, dass die Interpolation im Anfangszustand bleibt, bis sie sich zum Ende hin direkt in den Endzustand bewegt.

    ![Zwei Grafiken von "Input progress" zu "Output progress". Im "step-start"-Diagramm stellt ein nicht gefüllter Kreis den Ursprungspunkt (0,0) dar, mit einer horizontalen Linie, die sich von (0, 1) bis (1, 1) erstreckt. Im "step-end"-Diagramm erstreckt sich eine horizontale Linie vom Ursprung bis (1, 0), mit einem nicht gefüllten Kreis bei (1,0) und einem vollen Kreis bei (1, 1).](step.svg)

    `steps()`: Diese Funktion akzeptiert eine positive {{cssxref("&lt;integer&gt;")}} und eine optionale `<step-position>`.

    - `<integer>`: Gibt die Anzahl der gleichlangen Intervalle oder 'Schritte' an. Es muss eine positive Zahl größer als `0` sein, es sei denn, der zweite Parameter ist `jump-none`, dann muss es eine positive Zahl größer als `1` sein.
    - `<step-position>`: Bestimmt das [Timing des Sprungs](#schritte_easing-funktion) entweder am Start, am Ende, sowohl am Anfang als auch am Ende oder an keiner Stelle. Die möglichen Schlüsselwortwerte umfassen:

      - `jump-start` gibt an, dass der erste Sprung direkt zu Beginn erfolgt, im Wesentlichen zum `0` Punkt. Es wird keine Zeit bei der `0%` Marke verbracht.
      - `jump-end` gibt an, dass der letzte Sprung direkt am Ende erfolgt, im Wesentlichen zum `1` Punkt. Es wird keine Zeit bei der `100%` Marke verbracht. Dies ist der Standardwert, wenn kein `<step-position>` angegeben ist.
      - `jump-none` gibt an, dass kein Sprung entweder zu Beginn oder am Ende erfolgt, und effektiv wird ein Schritt während der Dauer entfernt. Stattdessen bleibt der Fortschritt sowohl bei der `0%` als auch bei der `100%` Marke konstant. Die Dauer dieser Haltepunkte wird bestimmt, indem die Gesamtdauer durch die Anzahl der Schritte (1/n) geteilt wird.
      - `jump-both` gibt an, dass Sprünge sowohl am Anfang als auch am Ende erfolgen, im Wesentlichen sowohl zum `0` als auch zum `1`. Effektiv wird an beiden Enden ein Schritt hinzugefügt. Es wird keine Zeit bei den `0%` und `100%` Marken verbracht.
      - `start` ist gleichbedeutend mit `jump-start`.
      - `end` ist gleichbedeutend mit `jump-end`.

## Beschreibung

Es gibt drei Arten von Easing-Funktionen:

- [Linear](#lineare_easing-funktion)
- [Kubische Bézier](#kubische_bézier_easing-funktion)
- [Schritte](#schritte_easing-funktion)

### Lineare Easing-Funktion

Die `linear()` Funktion erstellt ein stückweise lineares Easing, das die Annäherung von komplexen Animationen und Transitionen durch lineare Interpolation zwischen den angegebenen Punkten ermöglicht. Die Interpolation erfolgt mit einer konstanten Rate vom Anfang bis zum Ende. Eine typische Verwendung der `linear()` Funktion besteht darin, viele Punkte bereitzustellen, um jede Kurve zu approximieren.

Zum Beispiel hat die `linear(0, 0.25, 1)` Funktion als Argumente die linearen Stopps `0`, `0.25` und `1`. Die Animation oder Transition beginnt bei Punkt `0`, bewegt sich linear zu `0.25` und setzt sich dann linear zu Punkt `1` fort. Da kein `<linear-stop-length>` Prozentsatz angegeben ist, wird die gleiche Dauer (50%) verwendet, um von `0` zu `0.25` und von `0.25` zu `1` zu gehen.

![Grafiken von "Input progress" zu "Output progress", von denen "linear(0, 0.25, 1)" eine gebrochene Linie zeigt, die den Ursprung, (0.5, 0.25) und (1, 1) verbindet; und "linear(0, 0.25 75%, 1)" eine gebrochene Linie zeigt, die den Ursprung, (0.75, 0.25) und (1, 1) verbindet.](linear_function.svg)

Standardmäßig sind die Stopps gleich weit entfernt. Wenn also 5 Stopps vorhanden sind, befinden sie sich zu 0%, 25%, 50%, 75% und 100% der Dauer. Sie können optionale `<linear-stop-length>` Prozentwerte verwenden, um eine feiner abgestimmte Steuerung zu bieten und den Start und/oder die Länge jedes Segments zu definieren, was eine kontrolliertere Progression der Transition ermöglicht.

Betrachten Sie eine Animation mit einer Dauer von 100 Sekunden und einer Änderung von 100 Pixeln. Schauen wir uns ein Beispiel an, in dem das Easing der Animation festgelegt ist: `linear(0, 0.25 75%, 1)`. In diesem Fall progressiert die Animation zu 25 Pixel (25% ihrer Gesamtkapazität) in den ersten 75 Sekunden (75% der Dauer). Die letzten 75 Pixel werden in den verbleibenden 25 Sekunden der Animation angewendet. Für dieselbe Animation wird angenommen, dass die Easing-Funktion stattdessen als `linear(0, 0.5 25% 75%, 1)` angegeben wird. Hier erreicht die Animation 50 Pixel (50% ihrer Gesamtkapazität) in 25 Sekunden (25% der Dauer) und bleibt dort für 50 Sekunden (75% - 25% der Dauer). Dann werden die letzten 50 Pixel in den verbleibenden 25 Sekunden der Dauer angewendet. Beachten Sie, dass `linear(0, 0.5 25% 75%, 1)` gleichbedeutend mit `linear(0, 0.5 25%, 0.5 75%, 1)` ist.

> [!NOTE]
> Das [`linear`](#linear) Schlüsselwort ist gleichbedeutend mit der Easing-Funktion `linear(0, 1)`. Während das `linear` Schlüsselwort immer unverändert interpretiert wird, wird die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert.

### Kubische Bézier Easing-Funktion

Die `cubic-bezier()` funktionale Notation definiert eine kubische [Bézier-Kurve](/de/docs/Glossary/Bezier_curve). Die Easing-Funktionen im kubischen Bézier-Subset der Easing-Funktionen werden oft als "glatte" Easing-Funktionen bezeichnet, da sie dazu verwendet werden können, den Start und das Ende der {{Glossary("interpolation")}} zu glätten. Sie korrelieren einen Eingangsfortschritt mit einem Ausgangsfortschritt, beide als {{cssxref("&lt;number&gt;")}} ausgedrückt. Für diese Werte repräsentiert `0.0` den Anfangszustand und `1.0` den Endzustand.

![Graph von "Input progress" zu "Output progress", der eine "S"-förmige Linie zeigt, die sich vom Ursprung bis (1, 1) krümmt, mit den Bézier-Kontrollpunkten P1(0.1, 0.6) und P2(0.7, 0.2).](cubic-bezier.svg)

Eine kubische Bézier-Kurve wird durch vier Punkte definiert: P0, P1, P2 und P3. Die Punkte P0 und P3 repräsentieren den Start und das Ende der Kurve. In CSS sind diese Punkte festgelegt als die Koordinaten des Fortschritts (die Abszisse der Eingangsprozent, die Ordinate der Ausgangsprozent). P0 ist `(0, 0)` und repräsentiert den anfänglichen Fortschritt und den Anfangszustand. P3 ist `(1, 1)` und repräsentiert den endgültigen Fortschritt und den Endzustand.

Nicht alle kubischen Bézier-Kurven sind als Easing-Funktionen geeignet, da nicht alle [mathematische Funktionen](https://de.wikipedia.org/wiki/Funktion_(Mathematik)) sind; d. h., Kurven, die für eine gegebene Abszisse keinen oder einen Wert haben. Mit P0 und P3, die von CSS festgelegt sind, ist eine kubische Bézier-Kurve eine Funktion und ist daher gültig, wenn und nur wenn die Abszissen von P1 und P2 beide im `[0, 1]` Bereich liegen.

Kubische Bézier-Kurven mit der Ordinate von P1 oder P2 außerhalb des `[0, 1]` Bereichs können den Wert über den Endzustand hinaus bewegen und dann zurückkehren. Bei Animationen führt dies für einige Eigenschaften wie {{cssxref("left")}} oder {{cssxref("right")}} zu einem "Bounce"-Effekt.

![Grafiken der Easing-Funktion "cubic-bezier(0.3, 0.2, 0.2, 1.4)", eine davon zeigt den Ausgangsfortschritt, der einen bestimmten Eingangsfortschritt überschreitet, die andere zeigt den Ausgangsfortschritt, der einen bestimmten Punkt erreicht und dann bei 1 bleibt.](cubic-bezier_out_of_range.svg)

Jedoch einige Eigenschaften beschränken den Ausgang, wenn er außerhalb eines zulässigen Bereichs liegt. Ein Farbkomponentenwert, der größer als `255` oder kleiner als `0` ist, z. B. in {{CSSXref("color_value/rgb", "rgb()")}}, wird auf den nächstgelegenen zulässigen Wert gekürzt (`255` bzw. `0`). Einige `cubic-bezier()` Werte zeigen diese Eigenschaft.

Wenn Sie eine ungültige kubische Bézier-Kurve spezifizieren, ignoriert CSS die gesamte Eigenschaft.

Die Schlüsselwörter `ease`, `ease-in`, `ease-out` und `ease-in-out` sind einem spezifischen `cubic-bezier()` Wert gleichbedeutend.

### Schritte Easing-Funktion

Die `steps()` funktionale Notation definiert eine [Schritt-Funktion](https://de.wikipedia.org/wiki/Sprungfunktion), die den Bereich der Ausgangswerte in gleichmäßige Schritte unterteilt. Diese Unterklasse von Schritt-Funktionen wird manchmal auch _Treppe-Funktionen_ genannt.

Dies sind einige Beispiele, die die `steps()` Funktion veranschaulichen:

```css
steps(2, jump-start) /* Oder steps(2, start) */
steps(4, jump-end) /* Oder steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Grafiken von "Input progress" zu "Output progress", von denen "steps(2, jump-start)" horizontale Linien zeigt, die sich um 0,5 Einheiten von (0, 0.5) und (0.5, 1), jeweils mit nicht gefüllten Kreisen vom Ursprung und (0.5, 0.5), erstrecken; "steps(4, jump-end)" zeigt horizontale Linien, die 0,25 Einheiten von (0, 0), (0.25, 0.25), (0.5, 0.5), und (0.75, 0.75), jeweils mit nicht gefüllten Kreisen bei (0.25, 0), (0.5, 0.25), und (0.75, 0.5) und einem vollen Kreis bei (1, 1) erstrecken; "steps(5, jump-none)" zeigt horizontale Linien, die 0,2 Einheiten von (0, 0), (0.2, 0.25), (0.4, 0.5), (0.6, 0.75), und (0.8, 1), jeweils mit nicht gefüllten Kreisen bei (0.2, 0), (0.4, 0.25), (0.6, 0.5), und (0.8, 0.75) erstrecken; "steps(3, jump-both)" zeigt horizontale Linien, die sich um 1/3 Einheiten von (0, 0.25), (1/3, 0.5), und (2/3, 0.75), jeweils mit einem vollen Kreis bei (1, 1) und nicht gefüllten Kreisen am Ursprung, (1/3, 0.25), (2/3, 0.5), und (1, 0.75), erstrecken.](jump.svg)

Die Schlüsselwörter `step-start` und `step-end` sind einem spezifischen `steps()` Wert gleichbedeutend.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen einfachen Vergleich zwischen den verschiedenen Easing-Funktionen mithilfe einer Animation. Aus dem Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt ein paar Schlüsselwörter und einige `cubic-bezier()` und `steps()` Optionen. Nach Auswahl einer Option können Sie die Animation mit dem bereitgestellten Button starten und stoppen.

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
/* Die kanonische Bézier-Kurve mit vier <number> im [0,1] Bereich */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* Die Verwendung von <integer> ist gültig, da jeder <integer>
   auch eine <number> ist. */
cubic-bezier(0, 0, 1, 1)

/* Negative Werte für Ordinaten sind gültig und führen zu 
   Bounce-Effekten. */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Werte größer als 1.0 für Ordinaten sind auch gültig. */
cubic-bezier(0, 1.1, 0.8, 4)
```

Diese Definitionen von kubischen Bézier-Kurven sind ungültig:

```css example-bad
/* Obwohl der animierte Ausgangstyp eine Farbe sein kann,
   funktionieren Bézier-Kurven mit numerischen Verhältnissen. */
cubic-bezier(0.1, red, 1.0, green)

/* Die Abszissen müssen im Bereich [0, 1] liegen, 
   sonst ist die Kurve keine Funktion der Zeit. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* Die beiden Punkte müssen definiert sein, es gibt keinen Standardwert. */
cubic-bezier(0.3, 2.1)

/* Die Abszissen müssen im Bereich [0, 1] liegen, 
   sonst ist die Kurve keine Funktion der Zeit. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

### Verwendung der steps() Funktion

Diese Easing-Funktionen sind gültig:

```css example-good
/* Es gibt 5 Schritte, der letzte erfolgt 
   direkt vor dem Ende der Animation. */
steps(5, end)

/* Eine Zweistufenleiter, der erste erfolgt 
   am Start der Animation. */
steps(2, start)

/* Der zweite Parameter ist optional. */
steps(2)
```

> [!NOTE]
> Wenn die Animation mehrere Stopps enthält, dann werden die in der `steps()` Funktion angegebenen Schritte auf jeden Abschnitt angewendet. Daher wird eine Animation mit drei Segmenten und `steps(2)` insgesamt 6 Schritte enthalten, 2 pro Segment.

Diese Easing-Funktionen sind ungültig:

```css example-bad
/* Der erste Parameter muss ein <integer> sein und
   darf keinen reellen Wert annehmen, selbst wenn er eins ist. */
steps(2.0, jump-end)

/* Die Anzahl der Schritte muss nicht negativ sein. */
steps(-3, start)

/* Es muss mindestens einen Schritt geben. */
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
