---
title: "`<easing-function>` CSS-Typ"
short-title: <easing-function>
slug: Web/CSS/Reference/Values/easing-function
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<easing-function>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine mathematische Funktion, die die Geschwindigkeit beschreibt, mit der sich ein Wert ändert.

Dieser Übergang zwischen zwei Werten kann in verschiedenen Situationen angewendet werden. Er kann verwendet werden, um zu beschreiben, wie schnell sich Werte während Animationen ändern. Dies ermöglicht es Ihnen, die Geschwindigkeit der Animation über die Dauer zu variieren. Sie können eine Easing-Funktion für die CSS-Eigenschaften [transition](/de/docs/Web/CSS/Reference/Properties/transition-timing-function) und [animation](/de/docs/Web/CSS/Reference/Properties/animation-timing-function) angeben.

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
  - : Erstellt Übergänge, die mit einer konstanten Rate fortschreiten. Diese Funktion kann wie folgt angegeben werden:
    - `linear`
      - : Gibt eine konstante Interpolationsrate an, ohne Änderungen in der Fortschrittsrate während der Dauer (d.h. keine Beschleunigung oder Verzögerung).
        Dieser Schlüsselwortwert entspricht `linear(0, 1)`.
        Er kann auch als `cubic-bezier(0, 0, 1, 1)` dargestellt werden.

        ![Diagramm des Eingabefortschritts zum Ausgabefortschritt, das eine Linie zeigt, die sich vom Ursprung bis (1, 1) erstreckt.](linear.svg)

        > [!NOTE]
        > Das Schlüsselwort `linear` wird immer als `linear(0, 1)` interpretiert, während die Funktion `linear(0, 1)` als `linear(0 0%, 1 100%)` interpretiert wird.

    - {{cssxref("easing-function/linear", "linear()")}}
      - : Definiert mehrere Fortschrittspunkte mit {{cssxref("&lt;number&gt;")}}-Werten, mit optionalen {{cssxref("&lt;percentage&gt;")}}-Werten, um deren Timing zu steuern.

- `<cubic-bezier-easing-function>`
  - : Erstellt sanfte Übergänge mit variablen Änderungsraten. Diese Funktion kann wie folgt angegeben werden:
    - `ease`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.25, 0.1, 0.25, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, dann scharf beschleunigt und allmählich gegen Ende verlangsamt.
        Sie ist ähnlich dem `ease-in-out` Schlüsselwort, beschleunigt jedoch am Anfang schärfer.

    - `ease-in`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 1, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt und dann nach und nach bis zum Ende beschleunigt, an welchem Punkt sie abrupt stoppt.

    - `ease-out`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation abrupt beginnt und dann nach und nach gegen Ende verlangsamt.

    - `ease-in-out`
      - : Repräsentiert die Easing-Funktion `cubic-bezier(0.42, 0, 0.58, 1)`.
        Sie zeigt an, dass die Interpolation langsam beginnt, dann beschleunigt und schließlich gegen Ende verlangsamt.
        Zu Beginn verhält sie sich wie das `ease-in` Schlüsselwort; am Ende wie das `ease-out` Schlüsselwort.

        ![Diagramme des Eingabefortschritts zum Ausgabefortschritt, bei denen Ease eine geschwungene Linie zeigt, die schnell vom Ursprung nach oben zu (1, 1) steigt; Ease-in zeigt eine flache geschwungene Linie vom Ursprung, die sich beim Annähern an (1, 1) begradigt; Ease-out zeigt eine gerade diagonale Linie, die sich leicht krümmt, wenn sie sich (1, 1) nähert; und Ease-in-out zeigt eine symmetrische, S-förmige Linie, die sich vom Ursprung zu (1, 1) krümmt.](ease.svg)

    - {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}}
      - : Definiert eine benutzerdefinierte Kurve, die vier {{cssxref("&lt;number&gt;")}}-Werte verwendet, um die Koordinaten von zwei Kontrollpunkten festzulegen.
        Die x-Koordinaten müssen im Bereich `[0, 1]` liegen.

- `<step-easing-function>`
  - : Erstellt gestufte Übergänge, die die Animation in eine bestimmte Anzahl gleich langer Intervalle unterteilen, wodurch die Animation von einem Schritt zum nächsten springt, anstatt sich glatt zu bewegen.
    Diese Funktion kann wie folgt angegeben werden:
    - `step-start`
      - : Repräsentiert die Easing-Funktion `steps(1, jump-start)` oder `steps(1, start)`.
        Sie zeigt an, dass die Interpolation sofort in ihren Endzustand springt, in dem sie bis zum Ende verbleibt.

    - `step-end`
      - : Repräsentiert die Easing-Funktion `steps(1, jump-end)` oder `steps(1, end)`.
        Sie zeigt an, dass die Interpolation in ihrem Anfangszustand verbleibt, bis sie am Ende direkt in ihren Endzustand springt.

        ![Zwei Diagramme des Eingabefortschritts zum Ausgabefortschritt. Im Step-Start-Diagramm stellt ein ungefüllter Kreis den Ursprungspunkt (0, 0) dar, mit einer horizontalen Linie, die sich von (0, 1) bis (1, 1) erstreckt. Im Step-End-Diagramm erstreckt sich eine horizontale Linie vom Ursprung bis (1, 0), mit einem ungefüllten Kreis bei (1,0) und einem gefüllten Kreis bei (1, 1).](step.svg)

    - {{cssxref("easing-function/steps", "steps()")}}
      - : Erstellt eine treppenförmige Kurve, die einen {{cssxref("&lt;integer&gt;")}} verwendet, um die Anzahl der Intervalle sowie ein optionales Schlüsselwort zur Steuerung des Timing der Sprünge festzulegen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergleich der Easing-Funktionen

Dieses Beispiel bietet einen Vergleich zwischen den verschiedenen Easing-Funktionen mithilfe einer Animation. Über das Dropdown-Menü können Sie eine Easing-Funktion auswählen – es gibt ein paar Schlüsselwörter und einige `cubic-bezier()` und `steps()` Optionen. Nach der Auswahl einer Option können Sie die Animation mit dem bereitgestellten Button starten und stoppen.

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
