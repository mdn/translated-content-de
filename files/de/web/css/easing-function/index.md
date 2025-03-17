---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine mathematische Funktion, die die Rate beschreibt, mit der ein Wert sich ändert.

Dieser Übergang zwischen zwei Werten kann in verschiedenen Situationen angewendet werden. Er kann verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dadurch können Sie die Geschwindigkeit der Animation im Laufe ihrer Dauer variieren. Sie können eine Easing-Funktion für die CSS-Attribute [transition](/de/docs/Web/CSS/transition-timing-function) und [animation](/de/docs/Web/CSS/animation-timing-function) festlegen.

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

  - : Erstellt Übergänge, die mit einer konstanten Rate verlaufen. Diese Funktion kann wie folgt angegeben werden:

    - `linear`

      - : Gibt eine konstante Interpolationsrate an, ohne Änderungen in der Progressionsrate während der Dauer (d.h. keine Beschleunigung oder Verzögerung).
        Dieser Schlüsselwortwert entspricht `linear(0, 1)`.
        Er kann auch als `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Grafik des Eingabe-Fortschritts zum Ausgabe-Fortschritt: eine Linie, die sich vom Ursprung bis zu (1, 1) erstreckt.](linear.svg)

        > [!NOTE]
        > Das Schlüsselwort `linear` wird immer als `linear(0, 1)` interpretiert, während die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte mit {{cssxref("&lt;number&gt;")}}-Werten und optionalen {{cssxref("&lt;percentage&gt;")}}-Werten, um deren Timing zu steuern.

- `<cubic-bezier-easing-function>`

  - : Erstellt glatte Übergänge mit variablen Änderungsraten. Diese Funktion kann wie folgt angegeben werden:

    - `ease`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.25, 0.1, 0.25, 1)`.
        Sie gibt an, dass die Interpolation langsam beginnt, stark beschleunigt und dann allmählich gegen Ende langsamer wird.
        Sie ähnelt dem Schlüsselwort `ease-in-out`, beschleunigt jedoch am Anfang stärker.

    - `ease-in`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 1, 1)`.
        Sie gibt an, dass die Interpolation langsam beginnt, dann allmählich beschleunigt und am Ende abrupt stoppt.

    - `ease-out`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0, 0, 0.58, 1)`.
        Sie gibt an, dass die Interpolation abrupt beginnt und dann allmählich gegen Ende langsamer wird.

    - `ease-in-out`

      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 0.58, 1)`.
        Sie gibt an, dass die Interpolation langsam beginnt, beschleunigt und dann gegen Ende langsamer wird.
        Zu Beginn verhält sie sich wie das Schlüsselwort `ease-in`; am Ende ähnlich wie `ease-out`.

        ![Diagramme des Eingabe-Fortschritts zum Ausgabe-Fortschritt. Hierbei zeigt ease eine kurvige Linie, die schnell vom Ursprung zu (1, 1) ansteigt; ease-in zeigt eine flache, gebogene Linie, die sich dem Ursprung nähert; ease-out weicht von der diagonalen Linie leicht gebogen ab, während ease-in-out eine s-förmige Linie zum Ursprung und (1,1) zeigt.](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}

      - : Definiert eine benutzerdefinierte Kurve mit vier {{cssxref("&lt;number&gt;")}}-Werten, die die Koordinaten von zwei Kontrollpunkten spezifizieren.
        Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`

  - : Erstellt gestufte Übergänge, indem die Animation in eine festgelegte Anzahl von Intervallen mit gleicher Länge unterteilt wird, sodass die Animation springend statt reibungslos übergeht.
    Diese Funktion kann wie folgt angegeben werden:

    - `step-start`

      - : Repräsentiert die Easing-Funktion `steps(1, jump-start)` oder `steps(1, start)`.
        Sie gibt an, dass die Interpolation sofort in ihren Endzustand springt, wo sie bis zum Ende bleibt.

    - `step-end`

      - : Repräsentiert die Easing-Funktion `steps(1, jump-end)` oder `steps(1, end)`.
        Sie gibt an, dass die Interpolation bis zum Ende in ihrem Ausgangszustand bleibt und dann direkt in ihren Endzustand springt.

        ![Zwei Diagramme des Eingabe-Fortschritts zum Ausgabe-Fortschritt. In der step-start-Grafik repräsentiert ein ungefüllter Kreis den Ursprungspunkt (0, 0), mit einer horizontalen Linie, die von (0, 1) bis (1, 1) reicht. In der step-end-Grafik eine horizontale Linie vom Ursprung bis (1, 0), ein ungefüllter Kreis bei (1,0) und ein gefüllter Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erstellt eine stufenförmige Kurve mit einem {{cssxref("&lt;integer&gt;")}}, das die Anzahl der Intervalle angibt, und einem optionalen Schlüsselwort zur Steuerung des Sprungtimings.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel erlaubt einen einfachen Vergleich zwischen den verschiedenen Easing-Funktionen mit einer Animation. Im Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt einige Schlüsselwörter und Optionen für `cubic-bezier()` und `steps()`. Nachdem Sie eine Option ausgewählt haben, können Sie die Animation mit dem bereitgestellten Button starten und stoppen.

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
