---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, Berechnungen an {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content) durchzuführen; dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

`calc-size()` Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, wodurch Größen-Schlüsselwortwerte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Transitionen](/de/docs/Web/CSS/CSS_transitions) verwendet werden können. Tatsächlich wird durch die Einbeziehung von `calc-size()` in einen Eigenschaftswert automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Daher aktiviert das Anwenden auf ein Element die Interpolation von intrinsischen Größen-Schlüsselwörtern für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Daher ist `interpolate-size` die bevorzugte Lösung, um Animationen mit intrinsischen Größen zu ermöglichen. Sie sollten `calc-size()` nur verwenden, um Animationen mit intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern.

## Syntax

```css
/* Pass a value through calc-size() */
calc-size(auto, size)
calc-size(fit-content, size)

/* Perform a calculation */
calc-size(min-content, size + 100px)
calc-size(fit-content, size / 2)

/* Calculation including a function */
calc-size(auto, round(up, size, 50px))
```

### Parameter

Die Syntax der `calc-size()` Funktion ist wie folgt:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

Die Parameter sind:

- `<calc-size-basis>`

  - : Der Wert (meistens eine intrinsische Größe), auf den Sie eine Berechnung durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)
  - : Ein Ausdruck, der die Berechnung definiert, die auf dem `<calc-size-basis>` durchgeführt werden soll.

### Rückgabewert

Gibt einen Wert zurück, der dem durch den `<calc-sum>` Ausdruck modifizierten `<calc-size-basis>` entspricht. Da der `<calc-size-basis>` Wert eine intrinsische Größe ist, ist der Rückgabewert eine modifizierte intrinsische Größe, die sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für intrinsische Größen-Schlüsselwörter. Die `calc-size()` Funktion ist explizit so definiert, dass sie eine intrinsische Größe darstellt und nicht einen [`<length-percentage>`](/de/docs/Web/CSS/length-percentage), was die Korrektheit erzwingt. `calc-size()` ermöglicht es, Berechnungen auf intrinsische Größenwerte in einer sicheren, wohldefinierten Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste Argument der `calc-size()` Funktion kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert sind).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()` Wert. Dies werden Sie wahrscheinlich nicht sehr oft tun, aber es ist verfügbar, um sicherzustellen, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. So funktioniert zum Beispiel dies:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Genauso wie dies:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Ein weiterer `<calc-sum>`, mit denselben Einschränkungen wie der für das zweite Argument angegebene `<calc-sum>`, außer dass das Schlüsselwort `size` nicht enthalten sein darf. Sie werden dies wahrscheinlich nicht tun, da Sie keine Berechnung mehr an einem intrinsischen Größenwert vornehmen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion trotzdem. Zum Beispiel funktioniert dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte bestimmte Größe darstellt. In diesem Fall kann das Schlüsselwort `size` nicht im zweiten Argument enthalten sein, und `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen verschiedener intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzelnen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite Argument einer `calc-size()` Funktion ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` stellt das `<calc-size-basis>` dar, das als erstes Argument angegeben wurde.
- Operanden können `size` und alle Wertetypen einbeziehen, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*` und `/` können einbezogen werden.
- Andere mathematische Funktionen können einbezogen werden, wie z.B. {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der Gesamtausdruck muss mit [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) übereinstimmen und sich auf ein [`<length>`](/de/docs/Web/CSS/length) auflösen.

### Ermöglichen der Animation von intrinsischen Größenwerten

`calc-size()` Rückgabewerte können interpoliert werden, was Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem `calc-size()` intrinsischen Größen-Rückgabewert ermöglicht.

> [!NOTE]
> Sie sollten vermeiden, Box-Model-Eigenschaften zu animieren, wenn möglich, um Layout-Ereignisse zu reduzieren und die resultierende Auswirkung auf die Leistung zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie eine [Transition](/de/docs/Web/CSS/CSS_transitions) verwenden, um eine Containerbreite zwischen `0` und `auto` wie folgt zu animieren:

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size);
}
```

Im obigen Fall berechnen wir nichts — wir setzen `auto` in `calc-size()` ein und geben es unverändert zurück. Die {{cssxref("interpolate-size")}} Eigenschaft macht Animationen wie die obige in den meisten Fällen einfacher zu implementieren, besonders wenn es mehrere Animationen zu beachten gibt. Sie ist vererbt und muss daher nur einmal auf einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` ohne Verwendung von `calc-size()` hätten wechseln können.

Die `calc-size()` Funktion sollte nur verwendet werden, um Animationen mit intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern. Zum Beispiel animieren wir im folgenden Fall die Breite _und_ wenden eine Berechnung auf den intrinsischen Größen-Endzustand an:

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size + 2rem);
}
```

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}} Definition eine Containerbreite zwischen `fit-content` und 70% des `fit-content`.

```css
@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}
```

> [!NOTE]
> Beachten Sie, dass `calc-size()` das Animieren zwischen zwei verschiedenen intrinsischen Größenwerten nicht ermöglicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `calc-size` Nutzung

Dieses Beispiel zeigt die grundlegende Dimensionierung eines Containers mit `calc-size()`

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element, das einige Kindinhalte enthält.

```html
<section>
  <h2>Favorite quote</h2>

  <p>
    Fashion is something so ugly it has to be changed every fifteen minutes.
  </p>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 0.8rem;
}
```

Im CSS verwenden wir [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente innerhalb des `<section>` Zentriert anzuordnen, und setzen die Breite und Höhe des `<section>` auf `calc-size()` Funktionen. Die Breite wird auf `fit-content` plus `6rem` gesetzt. Die Höhe wird auf `auto` multipliziert mit zwei gesetzt.

```css
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc-size(fit-content, size + 6rem);
  height: calc-size(auto, size * 2);
}
```

Der Rest des CSS wurde der Kürze wegen ausgeblendet.

#### Ergebnis

Wir haben etwas horizontalen und vertikalen Raum für den Text geschaffen, um zentriert zu sein, ohne die Verwendung von Padding.

{{ EmbedLiveSample('Grundlegende `calc-size` Nutzung', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel zeigt, wie `calc-size()` verwendet wird, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakter-Badge/"Namensschild", das beim Fokusieren oder Schweben Informationen über den Charakter offenbart. Das Offenlegen wird durch eine {{cssxref("height")}} Transition zwischen einer festgelegten Länge und `max-content` behandelt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) darauf gesetzt, damit es Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, die jeweils ihren eigenen Kindinhalt haben.

```html
<section tabindex="0">
  <header>
    <h2>Chris Mills</h2>
  </header>
  <main>
    <p>Chris is the silent phantom of MDN.</p>
    <ul>
      <li><strong>Height</strong>: 3.03m</li>
      <li><strong>Weight</strong>: 160kg</li>
      <li><strong>Tech Fu</strong>: 7</li>
      <li><strong>Bad Jokes</strong>: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

main {
  padding: 0.7rem;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass anfänglich nur das `<header>` angezeigt wird, dann spezifizieren wir eine `transition`, die die `<section>` Höhe über 1 Sekunde bei Zustandsänderungen animiert. Schließlich setzen wir auf {{cssxref(":hover")}} und {{cssxref(":focus")}} die `<section>` Höhe auf einen `calc-size()` Funktionsaufruf. Der Funktionsrückgabewert ist das Äquivalent von `max-content` + `2rem`.

```css
section {
  height: 2.5rem;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: calc-size(max-content, size + 2rem);
}
```

Der Rest des CSS wurde der Kürze wegen ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu schweben oder es über die Tastatur in den Fokus zu nehmen — es wird auf seine volle Höhe + 2rem animiert, wodurch der gesamte Inhalt mit 2rems zusätzlichem Platz am unteren Rand sichtbar wird.

{{ EmbedLiveSample('Grundlegende `calc-size` Animationen', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und einen Button, der geklickt werden kann, um die Breite des Containers je nach Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit Kindtextinhalt, sowie einen {{htmlelement("button")}}, um die Breite des `<section>` zu ändern.

```html
<section class="easy-reader">
  <h2>Easy reader</h2>

  <p>
    Eius velit aperiam ipsa. Deleniti eum excepturi ut magni maxime maxime
    beatae. Dicta aperiam est laudantium ut illum facere qui officiis. Sunt
    deleniti quam id. Quis sunt voluptatem praesentium minima dolorum autem
    consequatur velit.
  </p>

  <p>
    Vitae ab incidunt velit aspernatur deleniti distinctio rerum. Et natus sed
    et quos mollitia quia quod. Quae officia ex ea. Ducimus ut voluptatem et et
    debitis. Quidem provident laboriosam exercitationem similique deleniti.
    Temporibus vel veniam mollitia magni unde a nostrum.
  </p>

  <button class="width-adjust">Narrower</button>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

section {
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: #eee;
  border: 2px solid #ccc;
  padding: 0 20px;
  position: relative;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

button {
  position: absolute;
  top: 2px;
  right: 2px;
}
```

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Dann definieren wir zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, die von `fit-content` auf 70% von `fit-content` (berechnet mit `calc-size()`) animieren, und `wider`, die dieselben Werte, aber in die entgegengesetzte Richtung animiert. Zum Schluss binden wir diese Animationen an zwei Klassen - `.narrower` und `.wider`. Jede Animation ist so definiert, dass sie eine Sekunde dauert und der endgültige Zustand nach dem Abschluss angewendet bleibt.

```css
section {
  width: fit-content;
}

@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}

@keyframes wider {
  from {
    width: calc-size(fit-content, size * 0.7);
  }

  to {
    width: fit-content;
  }
}

.narrower {
  animation: narrower 1s ease forwards;
}

.wider {
  animation: wider 1s ease forwards;
}
```

Der Rest des CSS wurde der Kürze wegen ausgeblendet.

#### JavaScript

Das JavaScript stellt einen schmaler/breiter Umschalter bereit, der die jeweilige Klasse auf das `<section>` anwendet, wenn der Button geklickt wird:

```js
const widthAdjustBtn = document.querySelector(".width-adjust");
const easyReader = document.querySelector(".easy-reader");

widthAdjustBtn.addEventListener("click", () => {
  if (easyReader.classList.length === 1) {
    easyReader.classList.add("narrower");
    widthAdjustBtn.textContent = "Wider";
  } else if (easyReader.classList.contains("wider")) {
    easyReader.classList.replace("wider", "narrower");
    widthAdjustBtn.textContent = "Wider";
  } else if (easyReader.classList.contains("narrower")) {
    easyReader.classList.replace("narrower", "wider");
    widthAdjustBtn.textContent = "Narrower";
  }
});
```

#### Ergebnis

Versuchen Sie, den `<button>` einige Male zu klicken, um die `<section>` zwischen der breiten und schmalen Lesebreite anzupassen, erreicht durch das Manipulieren der `width` basierend auf dem `fit-content` Wert.

{{ EmbedLiveSample('Anpassung der Lesebreite basierend auf `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()` Funktion

Wie zuvor erwähnt wurde, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen, und verwendet dann eine [`max()`](/de/docs/Web/CSS/max) Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>` Felder mindestens eine Mindestgröße haben und erst anfangen zu wachsen, wenn der eingegebene Text breiter als diese Größe wird – indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}} Element mit drei Text-`<input>` Typen. Jedes `<input>` hat ein zugeordnetes {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), um zu verhindern, dass eingegebene Werte so lang werden, dass das Formular-Layout zerstört wird.

```html
<form>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" maxlength="48" />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" maxlength="48" />
  </div>
  <div>
    <label for="address">Address:</label>
    <input type="text" id="address" name="address" maxlength="60" />
  </div>
</form>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  margin-top: 20px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: #eee;
  border: 2px solid #ccc;
}

div {
  display: flex;
  align-items: center;
}

div:not(div:last-child) {
  margin-bottom: 20px;
}
```

Im CSS setzen wir die `width` der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen - standardmäßig hätten sie keine Breite, weil nichts in sie eingegeben würde. Um dem entgegenzuwirken, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie mindestens `100px` breit sind, selbst ohne einen eingegebenen Wert. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber einen `20px` Abstand auf der rechten Seite behalten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der Rest des CSS wurde der Kürze wegen ausgeblendet.

#### Ergebnis

Versuchen Sie, in die Formularfelder Text einzugeben, und sehen Sie, wie sie wachsen, wenn die Werte anfangen, so breit wie die vom `max()` Funktion erzwungene Mindestbreite zu werden.

{{ EmbedLiveSample('Verwendung einer Funktion innerhalb der `calc-size()` Funktion', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (und andere intrinsische Größen-Schlüsselwörter) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
