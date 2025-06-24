---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine mathematische Funktion, die beschreibt, mit welcher Geschwindigkeit sich ein Wert ändert.

Diese Übergänge zwischen zwei Werten können in verschiedenen Situationen angewendet werden. Sie können verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dadurch kann die Geschwindigkeit der Animation im Laufe ihrer Dauer variiert werden. Sie können eine Easing-Funktion für die CSS-Eigenschaften [transition](/de/docs/Web/CSS/transition-timing-function) und [animation](/de/docs/Web/CSS/animation-timing-function) angeben.

## Syntax

```css
/* Keyword linear easing function */
linear                /* linear(0, 1) */

/* Custom linear easing functions */
linear(0, 0.25, 1)
linear(0, 0.25 75%, 1)

/* Keyword cubic Bézier easing functions */
ease                  /* cubic-bezier(0.25, 0.1, 0.25, 1) */
ease-in               /* cubic-bezier(0.42, 0, 1, 1) */
ease-out              /* cubic-bezier(0, 0, 0.58, 1) */
ease-in-out           /* cubic-bezier(0.42, 0, 0.58, 1) */

/* Custom cubic Bézier easing function */
cubic-bezier(0.25, 0.1, 0.25, 1)

/* Keyword step easing functions */
step-start            /* steps(1, jump-start) */
step-end              /* steps(1, jump-end) */

/* Custom step easing functions */
steps(4, end)
steps(10, jump-both)
```

### Werte

Eine `<easing-function>` kann eines der folgenden Typen sein:

- `<linear-easing-function>`

  - : Erstellt Übergänge, die mit einer konstanten Rate fortschreiten. Diese Funktion kann folgendermaßen angegeben werden:

    - `linear`

      - : Bestimmt eine konstante Interpolationsrate ohne Änderung der Fortschrittsgeschwindigkeit während der gesamten Dauer (das heißt, keine Beschleunigung oder Verzögerung).
        Dieser Schlüsselwortwert ist äquivalent zu `linear(0, 1)`.
        Er kann auch als `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Graph des Eingabefortschritts zum Ausgabefortschritt zeigt eine Linie, die sich vom Ursprung zum Punkt (1, 1) erstreckt.](linear.svg)

        > [!NOTE]
        > Das `linear`-Schlüsselwort wird immer als `linear(0, 1)` interpretiert, während die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte unter Verwendung von {{cssxref("&lt;number&gt;")}}-Werten mit optionalen {{cssxref("&lt;percentage&gt;")}}-Werten, um deren Timing zu steuern.

- `<cubic-bezier-easing-function>`

  - : Erstellt sanfte Übergänge mit variablen Änderungsraten. Diese Funktion kann folgendermaßen angegeben werden:

    - `ease`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.25, 0.1, 0.25, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, dann stark beschleunigt und gegen Ende allmählich langsamer wird.
        Sie ist dem Schlüsselwort `ease-in-out` ähnlich, beschleunigt jedoch zu Beginn stärker.

    - `ease-in`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 1, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, dann allmählich bis zum Ende beschleunigt wird, wo sie abrupt stoppt.

    - `ease-out`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation abrupt beginnt und dann allmählich bis zum Ende verlangsamt wird.

    - `ease-in-out`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, beschleunigt und dann gegen Ende langsamer wird.
        Zu Beginn verhält sie sich wie das `ease-in`-Schlüsselwort; am Ende ist sie wie das `ease-out`-Schlüsselwort.

        ![Graphen des Eingabefortschritts zum Ausgabefortschritt, wobei ease eine gekrümmte Linie zeigt, die schnell vom Ursprung zum Punkt (1, 1) ansteigt; ease-in zeigt eine flache gekrümmte Linie vom Ursprung, die sich beim Erreichen des Punkts (1, 1) aufrichtet; ease-out zeigt eine gerade diagonale Linie, die sich leicht krümmt, wenn sie sich dem Punkt (1, 1) nähert; und ease-in-out zeigt eine symmetrische, S-förmige Linie, die sich vom Ursprung zum Punkt (1, 1) krümmt.](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
      - : Definiert eine benutzerdefinierte Kurve mit vier {{cssxref("&lt;number&gt;")}}-Werten, die die Koordinaten von zwei Kontrollpunkten angeben.
        Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`

  - : Erstellt abgestufte Übergänge, die die Animation in eine festgelegte Anzahl gleichlanger Intervalle unterteilen, wodurch die Animation von einem Schritt zum nächsten springt, anstatt sanft zu wechseln.
    Diese Funktion kann folgendermaßen angegeben werden:

    - `step-start`

      - : Repräsentiert die Easing-Funktion `steps(1, jump-start)` oder `steps(1, start)`.
        Sie zeigt an, dass die Interpolation sofort in ihren Endzustand wechselt, in dem sie bis zum Ende bleibt.

    - `step-end`

      - : Repräsentiert die Easing-Funktion `steps(1, jump-end)` oder `steps(1, end)`.
        Sie zeigt an, dass die Interpolation in ihrem Anfangszustand bleibt, bis sie am Ende direkt in ihren Endzustand springt.

        ![Zwei Graphen des Eingabefortschritts zum Ausgabefortschritt. Im step-start-Graphen repräsentiert ein ungefüllter Kreis den Ursprungspunkt (0, 0), mit einer horizontalen Linie, die sich von (0, 1) bis (1, 1) erstreckt. Im step-end-Graphen erstreckt sich eine horizontale Linie vom Ursprung bis (1, 0), mit einem ungefüllten Kreis bei (1,0) und einem gefüllten Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erstellt eine treppenförmige Kurve unter Verwendung eines {{cssxref("&lt;integer&gt;")}} zur Angabe der Anzahl der Intervalle und eines optionalen Schlüsselworts zur Steuerung des Sprungtimings.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen einfachen Vergleich zwischen den verschiedenen Easing-Funktionen mithilfe einer Animation. Im Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt ein paar Schlüsselwörter sowie einige `cubic-bezier()`- und `steps()`-Optionen. Nach der Auswahl einer Option können Sie die Animation mit der bereitgestellten Schaltfläche starten und stoppen.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions)
- [cubic-bezier.com](https://cubic-bezier.com/) von Lea Verou (2011)
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
