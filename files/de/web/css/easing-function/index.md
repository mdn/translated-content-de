---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert eine mathematische Funktion, die beschreibt, wie schnell sich ein Wert ändert.

Dieser Übergang zwischen zwei Werten kann in verschiedenen Situationen angewendet werden. Er kann verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dadurch können Sie die Geschwindigkeit der Animation im Laufe ihrer Dauer variieren. Sie können eine Easing-Funktion für CSS [transition](/de/docs/Web/CSS/Reference/Properties/transition-timing-function) und [animation](/de/docs/Web/CSS/Reference/Properties/animation-timing-function) Eigenschaften angeben.

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

Eine `<easing-function>` kann einer der folgenden Typen sein:

- `<linear-easing-function>`
  - : Erstellt Übergänge, die mit konstanter Geschwindigkeit verlaufen. Diese Funktion kann wie folgt spezifiziert werden:
    - `linear`
      - : Gibt eine konstante Interpolationsrate an, bei der sich die Geschwindigkeit des Fortschritts während der gesamten Dauer nicht ändert (d.h. keine Beschleunigung oder Verzögerung). Dieser Schlüsselwortwert entspricht `linear(0, 1)`. Er kann auch als `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Graph zeigt eine Linie, die sich vom Ursprung nach (1, 1) erstreckt.](linear.svg)

        > [!NOTE]
        > Das Schlüsselwort `linear` wird immer als `linear(0, 1)` interpretiert, während die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte mit {{cssxref("&lt;number&gt;")}} Werten, wobei optionale {{cssxref("&lt;percentage&gt;")}} Werte verwendet werden, um deren Timing zu steuern.

- `<cubic-bezier-easing-function>`
  - : Erstellt weiche Übergänge mit variablen Geschwindigkeitsänderungen. Diese Funktion kann wie folgt spezifiziert werden:
    - `ease`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.25, 0.1, 0.25, 1)`. Sie zeigt an, dass die Interpolation langsam beginnt, scharf beschleunigt und sich dann allmählich dem Ende nähert. Sie ist dem Schlüsselwort `ease-in-out` ähnlich, beschleunigt jedoch am Anfang stärker.

    - `ease-in`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 1, 1)`. Sie zeigt an, dass die Interpolation langsam beginnt und dann allmählich schneller wird, bis sie abrupt endet.

    - `ease-out`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0, 0, 0.58, 1)`. Sie zeigt an, dass die Interpolation abrupt beginnt und sich dann allmählich dem Ende zu verlangsamt.

    - `ease-in-out`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 0.58, 1)`. Sie zeigt an, dass die Interpolation langsam beginnt, schneller wird und dann dem Ende entgegen langsamer wird. Zu Beginn verhält sie sich wie das Schlüsselwort `ease-in`; am Ende ist sie wie das Schlüsselwort `ease-out`.

        ![Graphs zeigen die Eingabefortschritte zu den Ausgabefortschritten, wobei ease eine gekrümmte Linie zeigt, die schnell vom Ursprung nach (1, 1) ansteigt; ease-in zeigt eine flache gekrümmte Linie vom Ursprung, die sich nährt, während sie sich (1, 1) nähert; ease-out zeigt eine gerade diagonale Linie, die leicht gekrümmt wird, wenn sie sich (1, 1) nähert; und ease-in-out zeigt eine symmetrische, S-förmige Linie, die vom Ursprung nach (1, 1) verläuft.](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
      - : Definiert eine benutzerdefinierte Kurve unter Verwendung von vier {{cssxref("&lt;number&gt;")}} Werten, die die Koordinaten von zwei Kontrollpunkten angeben. Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`
  - : Erstellt abgestufte Übergänge, die die Animation in eine festgelegte Anzahl von gleichlangen Intervallen unterteilen und die Animation von einem Schritt zum nächsten springen lassen, anstatt sanft zu übergehen. Diese Funktion kann wie folgt spezifiziert werden:
    - `step-start`
      - : Repräsentiert die Easing-Funktion `steps(1, jump-start)` oder `steps(1, start)`. Sie zeigt an, dass die Interpolation sofort in ihren Endzustand springt, wo sie bis zum Ende bleibt.

    - `step-end`
      - : Repräsentiert die Easing-Funktion `steps(1, jump-end)` oder `steps(1, end)`. Sie zeigt an, dass die Interpolation in ihrem Anfangszustand bleibt, bis sie abrupt in den Endzustand springt.

        ![Zwei Graphen zeigen die Eingabefortschritte zu den Ausgabefortschritten. Im step-start-Graph repräsentiert ein ungefüllter Kreis den Ursprungspunkt (0, 0), mit einer horizontalen Linie von (0, 1) bis (1, 1). Im step-end-Graph erstreckt sich eine horizontale Linie vom Ursprung bis (1, 0), mit einem ungefüllten Kreis bei (1,0) und einem gefüllten Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erzeugt eine treppenförmige Kurve, wobei ein {{cssxref("&lt;integer&gt;")}} zur Angabe der Anzahl der Intervalle und ein optionales Schlüsselwort zur Steuerung des Zeitpunkts der Sprünge verwendet wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen einfachen Vergleich zwischen den verschiedenen Easing-Funktionen mit einer Animation. Aus dem Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt ein paar Schlüsselwörter und einige `cubic-bezier()`- und `steps()`-Optionen. Nachdem Sie eine Option ausgewählt haben, können Sie die Animation mit dem bereitgestellten Button starten und stoppen.

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

- [CSS Easing-Funktionen](/de/docs/Web/CSS/CSS_easing_functions) Modul
- [CSS Animationen](/de/docs/Web/CSS/CSS_animations) Modul
- [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions) Modul
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
- [cubic-bezier.com](https://cubic-bezier.com/) von Lea Verou
