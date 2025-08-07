---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: 861dc1b515e6dd9ff835b841cdba50388ffa746c
---

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine mathematische Funktion, die die Rate beschreibt, mit der sich ein Wert ändert.

Diese Übergang zwischen zwei Werten kann in verschiedenen Situationen angewendet werden. Er kann verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dadurch können Sie die Geschwindigkeit der Animation im Verlauf deren Dauer variieren. Sie können eine `easing-function` für CSS [transition](/de/docs/Web/CSS/transition-timing-function) und [animation](/de/docs/Web/CSS/animation-timing-function) Eigenschaften angeben.

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

Eine `<easing-function>` kann von einem der folgenden Typen sein:

- `<linear-easing-function>`
  - : Erzeugt Übergänge, die mit einer konstanten Rate fortschreiten. Diese Funktion kann mit einer der folgenden Angaben spezifiziert werden:
    - `linear`
      - : Gibt eine konstante Interpolationsrate an, ohne Änderung der Fortschrittsrate im Verlauf der Dauer (d.h. keine Beschleunigung oder Verzögerung).
        Dieser Schlüsselwortwert entspricht `linear(0, 1)`.
        Er kann auch als `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Graph des Input-Fortschritts zum Output-Fortschritt, der eine Linie zeigt, die von der Ursprungsstelle bis zu (1, 1) reicht.](linear.svg)

        > [!NOTE]
        > Das Schlüsselwort `linear` wird immer als `linear(0, 1)` interpretiert, während die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte mithilfe von {{cssxref("&lt;number&gt;")}} Werten, mit optionalen {{cssxref("&lt;percentage&gt;")}} Werten zur Kontrolle ihrer zeitlichen Abstimmung.

- `<cubic-bezier-easing-function>`
  - : Erzeugt sanfte Übergänge mit variablen Änderungsraten. Diese Funktion kann mit einer der folgenden Angaben spezifiziert werden:
    - `ease`
      - : Repräsentiert die Easingfunktion `cubic-bezier(0.25, 0.1, 0.25, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, stark beschleunigt und dann allmählich zum Ende hin langsamer wird.
        Sie ist ähnlich dem Schlüsselwort `ease-in-out`, beschleunigt jedoch zu Beginn stärker.

    - `ease-in`
      - : Repräsentiert die Easingfunktion `cubic-bezier(0.42, 0, 1, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, dann allmählich schneller wird, bis zum Ende, wo sie abrupt stoppt.

    - `ease-out`
      - : Repräsentiert die Easingfunktion `cubic-bezier(0, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation abrupt beginnt und dann allmählich zum Ende hin langsamer wird.

    - `ease-in-out`
      - : Repräsentiert die Easingfunktion `cubic-bezier(0.42, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, beschleunigt und dann zum Ende hin langsamer wird.
        Am Anfang verhält sie sich wie das Schlüsselwort `ease-in`; am Ende ist es wie das Schlüsselwort `ease-out`.

        ![Graphen des Input-Fortschritts zum Output-Fortschritt, von denen ease eine gekrümmte Linie zeigt, die schnell von der Ursprungsstelle zu (1, 1) aufsteigt; ease-in zeigt eine flache gekrümmte Linie von der Ursprungsstelle, die sich begradigt, wenn sie sich (1, 1) nähert; ease-out zeigt eine diagonale Gerade, die sich leicht krümmt, wenn sie sich (1, 1) nähert; und ease-in-out zeigt eine symmetrische, S-förmige Kurve von der Ursprungsstelle zu (1, 1).](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
      - : Definiert eine benutzerdefinierte Kurve mit vier {{cssxref("&lt;number&gt;")}} Werten, die die Koordinaten von zwei Kontrollpunkten spezifizieren.
        Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`
  - : Erzeugt gestufte Übergänge, die die Animation in eine bestimmte Anzahl von gleich langen Intervallen unterteilt, wodurch die Animation von einem Schritt zum nächsten springt anstatt sanft zu übergehen.
    Diese Funktion kann mit einer der folgenden Angaben spezifiziert werden:
    - `step-start`
      - : Repräsentiert die Easingfunktion `steps(1, jump-start)` oder `steps(1, start)`.
        Sie zeigt an, dass die Interpolation sofort zu ihrem Endzustand springt, in dem sie bis zum Ende verbleibt.

    - `step-end`
      - : Repräsentiert die Easingfunktion `steps(1, jump-end)` oder `steps(1, end)`.
        Sie zeigt an, dass die Interpolation in ihrem Anfangszustand bleibt, bis sie am Ende direkt zu ihrem Endzustand springt.

        ![Zwei Graphen des Input-Fortschritts zum Output-Fortschritt. Im step-start-Graphen stellt ein ungefüllter Kreis den Ursprungsort (0, 0) dar, mit einer horizontalen Linie, die sich von (0, 1) bis (1, 1) erstreckt. Im step-end-Graphen erstreckt sich eine horizontale Linie vom Ursprung bis (1, 0), mit einem ungefüllten Kreis bei (1,0) und einem gefüllten Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erzeugt eine treppenartige Kurve, indem ein {{cssxref("&lt;integer&gt;")}} verwendet wird, um die Anzahl der Intervalle anzugeben, und ein optionales Schlüsselwort zur Steuerung des Zeitpunkts der Sprünge.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen einfachen Vergleich zwischen den verschiedenen Easing-Funktionen mit einer Animation. Im Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt ein paar Schlüsselwörter sowie einige `cubic-bezier()` und `steps()` Optionen. Nach Auswahl einer Option können Sie die Animation mit dem bereitgestellten Knopf starten und stoppen.

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

- [CSS easing functions](/de/docs/Web/CSS/CSS_easing_functions) Modul
- [CSS animations](/de/docs/Web/CSS/CSS_animations) Modul
- [CSS transitions](/de/docs/Web/CSS/CSS_transitions) Modul
- [`linear()` easing generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
- [cubic-bezier.com](https://cubic-bezier.com/) von Lea Verou
