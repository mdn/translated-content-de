---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 4f470ce128d50dc3568ddf03b313f420055d9799
---

{{CSSRef}}

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine mathematische Funktion, die beschreibt, wie schnell sich ein Wert ändert.

Dieser Übergang zwischen zwei Werten kann in verschiedenen Situationen angewendet werden. Er kann genutzt werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. So können Sie die Geschwindigkeit der Animation im Verlauf ihrer Dauer variieren. Sie können eine easing function für die CSS-Eigenschaften [transition](/de/docs/Web/CSS/transition-timing-function) und [animation](/de/docs/Web/CSS/animation-timing-function) definieren.

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

Ein `<easing-function>` kann einer der folgenden Typen sein:

- `<linear-easing-function>`

  - : Erstellt Übergänge, die mit einer konstanten Rate fortschreiten. Diese Funktion kann wie folgt spezifiziert werden:

    - `linear`

      - : Bestimmt eine konstante Interpolationsrate, ohne Änderung der Fortschrittsrate während der Dauer (d.h. keine Beschleunigung oder Verzögerung).
        Dieser Schlüsselwortwert entspricht `linear(0, 1)`.
        Er kann auch als `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Graph vom Eingabefortschritt zum Ausgabefortschritt zeigt eine Linie, die sich vom Ursprung bis (1, 1) erstreckt.](linear.svg)

        > [!NOTE]
        > Das `linear` Schlüsselwort wird immer als `linear(0, 1)` interpretiert, während die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte mit {{cssxref("&lt;number&gt;")}} Werten, mit optionalen {{cssxref("&lt;percentage&gt;")}} Werten, um deren Timing zu steuern.

- `<cubic-bezier-easing-function>`

  - : Erstellt sanfte Übergänge mit variablen Änderungsraten. Diese Funktion kann wie folgt spezifiziert werden:

    - `ease`

      - : Repräsentiert die easing function `cubic-bezier(0.25, 0.1, 0.25, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, stark beschleunigt und dann allmählich zum Ende hin langsamer wird.
        Sie ist ähnlich dem `ease-in-out` Schlüsselwort, beschleunigt jedoch stärker zu Beginn.

    - `ease-in`

      - : Repräsentiert die easing function `cubic-bezier(0.42, 0, 1, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt und dann bis zum Ende hin allmählich schneller wird, wo sie abrupt stoppt.

    - `ease-out`

      - : Repräsentiert die easing function `cubic-bezier(0, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation abrupt beginnt und dann zum Ende hin allmählich langsamer wird.

    - `ease-in-out`

      - : Repräsentiert die easing function `cubic-bezier(0.42, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, schneller wird und dann zum Ende hin langsamer wird.
        Zu Beginn verhält sie sich wie das `ease-in` Schlüsselwort; am Ende ist es wie das `ease-out` Schlüsselwort.

        ![Graphs vom Eingabefortschritt zum Ausgabefortschritt, wobei ease eine gebogene Linie zeigt, die schnell vom Ursprung bis (1, 1) ansteigt; ease-in zeigt eine flach gebogene Linie vom Ursprung, die sich glättet, wenn sie sich (1, 1) nähert; ease-out zeigt eine gerade diagonale Linie, die sich leicht biegt, wenn sie sich (1, 1) nähert; und ease-in-out zeigt eine symmetrische, S-förmige Linie, die sich vom Ursprung bis (1, 1) biegt.](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}

      - : Definiert eine benutzerdefinierte Kurve unter Verwendung von vier {{cssxref("&lt;number&gt;")}} Werten, die die Koordinaten von zwei Kontrollpunkten angeben.
        Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`

  - : Erstellt gestufte Übergänge, die die Animation in eine festgelegte Anzahl von gleich langen Intervallen unterteilen, sodass die Animation von einem Schritt zum nächsten springt, anstatt sanft zu übergehen.
    Diese Funktion kann wie folgt spezifiziert werden:

    - `step-start`

      - : Repräsentiert die easing function `steps(1, jump-start)` oder `steps(1, start)`.
        Sie zeigt an, dass die Interpolation sofort zu ihrem Endzustand springt, wo sie bis zum Ende bleibt.

    - `step-end`

      - : Repräsentiert die easing function `steps(1, jump-end)` oder `steps(1, end)`.
        Sie zeigt an, dass die Interpolation sich bis zum Ende in ihrem Anfangszustand befindet, wo sie direkt zu ihrem Endzustand springt.

        ![Zwei Graphen vom Eingabefortschritt zum Ausgabefortschritt. Im step-start-Graphen repräsentiert ein ungefüllter Kreis den Ursprungspunkt (0, 0), mit einer horizontalen Linie, die sich von (0, 1) bis (1, 1) erstreckt. Im step-end-Graphen erstreckt sich eine horizontale Linie vom Ursprung bis (1, 0), mit einem ungefüllten Kreis bei (1,0) und einem gefüllten Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erstellt eine treppenförmige Kurve unter Verwendung eines {{cssxref("&lt;integer&gt;")}} zur Spezifikation der Anzahl der Intervalle und eines optionalen optionalen Schlüsselworts zur Steuerung des Timings der Sprünge.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der easing-Funktionen

Dieses Beispiel bietet einen einfachen Vergleich zwischen den verschiedenen easing-Funktionen mithilfe einer Animation. Über das Dropdown-Menü können Sie eine easing-Funktion auswählen – es gibt ein paar Schlüsselwörter sowie einige `cubic-bezier()` und `steps()` Optionen. Nach Auswahl einer Option können Sie die Animation mit dem bereitgestellten Button starten und stoppen.

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
- [`linear()`-Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
