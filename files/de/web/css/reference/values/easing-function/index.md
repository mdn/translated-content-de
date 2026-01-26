---
title: <easing-function>
slug: Web/CSS/Reference/Values/easing-function
l10n:
  sourceCommit: ed2725c99c6011da9d4afa5e47546fe0722ee814
---

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine mathematische Funktion, die die Rate beschreibt, mit der sich ein Wert ändert.

Diese Übergänge zwischen zwei Werten können in verschiedenen Situationen angewendet werden. Sie können verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dadurch können Sie die Geschwindigkeit der Animation über die Dauer hinweg variieren. Sie können eine `Easing-Funktion` für CSS [transition](/de/docs/Web/CSS/Reference/Properties/transition-timing-function) und [animation](/de/docs/Web/CSS/Reference/Properties/animation-timing-function) Eigenschaften festlegen.

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
  - : Erstellt Übergänge, die mit konstanter Geschwindigkeit verlaufen. Diese Funktion kann folgendermaßen angegeben werden:
    - `linear`
      - : Gibt eine konstante Interpolationsrate an, ohne Änderung der Fortschrittsgeschwindigkeit während der Dauer (das heißt, keine Beschleunigung oder Verzögerung).
        Dieser Schlüsselwortwert entspricht `linear(0, 1)`.
        Es kann auch als `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Diagramm von Eingabefortschritt zu Ausgabefortschritt, das eine Linie zeigt, die sich vom Ursprungsort bis zu (1, 1) erstreckt.](linear.svg)

        > [!NOTE]
        > Das Schlüsselwort `linear` wird immer als `linear(0, 1)` interpretiert, während die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte unter Verwendung von {{cssxref("&lt;number&gt;")}} Werten, mit optionalen {{cssxref("&lt;percentage&gt;")}} Werten, um deren Timing zu steuern.

- `<cubic-bezier-easing-function>`
  - : Erstellt sanfte Übergänge mit variablen Änderungsraten. Diese Funktion kann folgendermaßen angegeben werden:
    - `ease`
      - : Repräsentiert die `Easing-Funktion` `cubic-bezier(0.25, 0.1, 0.25, 1)`.
        Sie zeigt an, dass die Interpolation langsam startet, dann abrupt beschleunigt und sich dann allmählich zum Ende hin verlangsamt.
        Es ist ähnlich wie das Schlüsselwort `ease-in-out`, beschleunigt jedoch zu Beginn stärker.

    - `ease-in`
      - : Repräsentiert die `Easing-Funktion` `cubic-bezier(0.42, 0, 1, 1)`.
        Sie zeigt an, dass die Interpolation langsam startet und dann bis zum Ende allmählich beschleunigt, an diesem Punkt stoppt sie abrupt.

    - `ease-out`
      - : Repräsentiert die `Easing-Funktion` `cubic-bezier(0, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation abrupt startet und sich dann allmählich zum Ende hin verlangsamt.

    - `ease-in-out`
      - : Repräsentiert die `Easing-Funktion` `cubic-bezier(0.42, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation langsam startet, beschleunigt und sich dann zum Ende hin verlangsamt.
        Am Anfang verhält sie sich wie das Schlüsselwort `ease-in`; am Ende ist sie wie das Schlüsselwort `ease-out`.

        ![Diagramme von Eingabefortschritt zu Ausgabefortschritt, wobei ease eine gebogene Linie zeigt, die schnell von den Ursprung zu (1, 1) steigt; ease-in eine flache gebogene Linie vom Ursprung zeigt, die sich begradigt, je näher sie (1, 1) kommt; ease-out zeigt eine gerade diagonale Linie, die sich leicht krümmt, wenn sie sich (1, 1) nähert; und ease-in-out zeigt eine symmetrische, S-förmige Linie, die sich vom Ursprung zu (1, 1) krümmt.](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
      - : Definiert eine benutzerdefinierte Kurve unter Verwendung von vier {{cssxref("&lt;number&gt;")}} Werten, die die Koordinaten von zwei Kontrollpunkten angeben.
        Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`
  - : Erstellt stufenweise Übergänge, die die Animation in eine festgelegte Anzahl gleichlanger Intervalle unterteilen, wodurch die Animation von einem Schritt zum nächsten springt, statt sanft zu übergehen.
    Diese Funktion kann folgendermaßen angegeben werden:
    - `step-start`
      - : Repräsentiert die `Easing-Funktion` `steps(1, jump-start)` oder `steps(1, start)`.
        Sie zeigt an, dass die Interpolation sofort zu ihrem Endzustand springt, wo sie bis zum Ende bleibt.

    - `step-end`
      - : Repräsentiert die `Easing-Funktion` `steps(1, jump-end)` oder `steps(1, end)`.
        Sie zeigt an, dass die Interpolation in ihrem Anfangszustand bleibt, bis sie schließlich direkt zu ihrem Endzustand springt.

        ![Zwei Diagramme von Eingabefortschritt zu Ausgabefortschritt. Im step-start-Diagramm repräsentiert ein unausgefüllter Kreis den Ursprungspunkt (0, 0), mit einer horizontalen Linie, die sich von (0, 1) bis zu (1, 1) erstreckt. Im step-end-Diagramm erstreckt sich eine horizontale Linie vom Ursprung zu (1, 0), mit einem unausgefüllten Kreis bei (1,0) und einem vollen Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erstellt eine treppenförmige Kurve unter Verwendung einer {{cssxref("&lt;integer&gt;")}}, um die Anzahl der Intervalle festzulegen und mit einem optionalen Schlüsselwort, um das Timing der Sprünge zu steuern.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen Vergleich zwischen den verschiedenen Easing-Funktionen mit einer Animation. Über das Dropdown-Menü kann eine Easing-Funktion ausgewählt werden – es gibt einige Schlüsselwörter sowie `cubic-bezier()` und `steps()` Optionen. Nach der Auswahl einer Option können Sie die Animation mit der bereitgestellten Schaltfläche starten und stoppen.

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

- [CSS Easing-Funktionen](/de/docs/Web/CSS/Guides/Easing_functions) Modul
- [CSS Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS Übergänge](/de/docs/Web/CSS/Guides/Transitions) Modul
- [`linear()` Easing-Generator](https://linear-easing-generator.netlify.app/) von Jake Archibald
- [cubic-bezier.com](https://cubic-bezier.com/) von Lea Verou
