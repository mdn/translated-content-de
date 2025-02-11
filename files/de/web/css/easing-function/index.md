---
title: <easing-function>
slug: Web/CSS/easing-function
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{CSSRef}}

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine mathematische Funktion, die die Rate beschreibt, mit der sich ein Wert ändert.

Dieser Übergang zwischen zwei Werten kann in verschiedenen Situationen angewendet werden. Zum Beispiel kann er verwendet werden, um zu beschreiben, wie schnell Werte während Animationen verändert werden. Damit können Sie die Geschwindigkeit einer Animation über ihre Dauer variieren. Eine `easing function` kann für die CSS-Eigenschaften [transition](/de/docs/Web/CSS/transition-timing-function) und [animation](/de/docs/Web/CSS/animation-timing-function) angegeben werden.

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

  - : Erstellt Übergänge, die mit einer konstanten Rate verlaufen. Diese Funktion kann auf folgende Weise angegeben werden:

    - `linear`

      - : Gibt eine konstante Interpolationsrate an, ohne Änderung in der Fortschrittsrate während der gesamten Dauer (d.h. keine Beschleunigung oder Verlangsamung).
        Dieser Schlüsselwortwert ist gleichwertig zu `linear(0, 1)`.
        Er kann auch durch `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Graph des Eingabe- zum Ausgabefortschritt, der eine Linie zeigt, die vom Ursprung bis zu (1, 1) verläuft.](linear.svg)

        > [!NOTE]
        > Das Schlüsselwort `linear` wird immer als `linear(0, 1)` interpretiert, wohingegen die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte mit {{cssxref("&lt;number&gt;")}}-Werten und optionalen {{cssxref("&lt;percentage&gt;")}}-Werten, um deren Timing zu steuern.

- `<cubic-bezier-easing-function>`

  - : Erstellt sanfte Übergänge mit variablen Änderungsraten. Diese Funktion kann auf folgende Weise angegeben werden:

    - `ease`

      - : Repräsentiert die `cubic-bezier(0.25, 0.1, 0.25, 1)` Funktion.
        Diese Funktion gibt an, dass die Interpolation langsam beginnt, dann stark beschleunigt und schließlich allmählich bis zum Ende verlangsamt.
        Ähnlich wie das Schlüsselwort `ease-in-out`, allerdings beschleunigt es am Anfang stärker.

    - `ease-in`

      - : Repräsentiert die `cubic-bezier(0.42, 0, 1, 1)` Funktion.
        Diese Funktion gibt an, dass die Interpolation langsam beginnt und dann progressiv beschleunigt, bis sie abrupt am Ende stoppt.

    - `ease-out`

      - : Repräsentiert die `cubic-bezier(0, 0, 0.58, 1)` Funktion.
        Diese Funktion gibt an, dass die Interpolation abrupt beginnt und dann progressiv bis zum Ende verlangsamt.

    - `ease-in-out`

      - : Repräsentiert die `cubic-bezier(0.42, 0, 0.58, 1)` Funktion.
        Diese Funktion gibt an, dass die Interpolation langsam beginnt, beschleunigt und dann bis zum Ende verlangsamt.
        Am Anfang verhält sie sich wie das Schlüsselwort `ease-in`; am Ende wie `ease-out`.

        ![Diagramme des Eingabe- zum Ausgabefortschritt. Easing zeigt eine gekrümmte Linie, die schnell vom Ursprung zu (1, 1) ansteigt; ease-in zeigt eine flache Kurve vom Ursprung, die sich zur Geraden auf (1, 1) einpendelt; ease-out zeigt eine diagonale Gerade, die sich gegen (1, 1) leicht krümmt; und ease-in-out zeigt eine symmetrische, S-förmige Kurve vom Ursprung nach (1, 1).](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}

      - : Definiert eine benutzerdefinierte Kurve mit vier {{cssxref("&lt;number&gt;")}}-Werten, die die Koordinaten von zwei Kontrollpunkten angeben.
        Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`

  - : Erstellt gestufte Übergänge, die die Animation in eine bestimmte Anzahl gleich langer Intervalle unterteilen, wodurch die Animation von einem Schritt zum nächsten springt, anstatt sich reibungslos zu verändern.
    Diese Funktion kann auf folgende Weise angegeben werden:

    - `step-start`

      - : Repräsentiert die Funktion `steps(1, jump-start)` oder `steps(1, start)`.
        Gibt an, dass die Interpolation sofort in ihren Endzustand springt und dort bis zum Ende bleibt.

    - `step-end`

      - : Repräsentiert die Funktion `steps(1, jump-end)` oder `steps(1, end)`.
        Gibt an, dass die Interpolation bis zum Ende in ihrem Anfangszustand bleibt und dann direkt in ihren Endzustand springt.

        ![Zwei Diagramme des Eingabe- zum Ausgabefortschritt. Im step-start Diagramm repräsentiert ein nicht ausgefüllter Kreis den Ursprungspunkt (0, 0), mit einer horizontalen Linie, die von (0, 1) bis (1, 1) verläuft. Im step-end Diagramm verläuft eine horizontale Linie vom Ursprung zu (1, 0), mit einem nicht ausgefüllten Kreis bei (1, 0) und einem ausgefüllten Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erstellt eine treppenartige Kurve mit einem {{cssxref("&lt;integer&gt;")}}, der die Anzahl der Intervalle angibt, und einem optionalen Schlüsselwort, das das Timing der Sprünge steuert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel ermöglicht einen einfachen Vergleich der verschiedenen Easing-Funktionen mithilfe einer Animation. Im Dropdown-Menü können Sie eine `easing function` auswählen – es gibt ein paar Schlüsselwörter sowie Optionen wie `cubic-bezier()` und `steps()`. Nach der Auswahl können Sie die Animation mit dem bereitgestellten Schalter starten und stoppen.

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
