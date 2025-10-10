---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, Berechnungen an {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content) durchzuführen; dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

`calc-size()` Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, sodass Größen-Schlüsselwortwerte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden können. In der Tat wird bei der Verwendung von `calc-size()` in einem Eigenschaftswert automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird, daher ermöglicht das Anwenden auf ein Element die Interpolation von intrinsischen Größen-Schlüsselwörtern für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Daher ist `interpolate-size` die bevorzugte Lösung, um Animationen von intrinsischen Größen zu ermöglichen. Sie sollten `calc-size()` nur verwenden, um Animationen von intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern.

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

Die Syntax der Funktion `calc-size()` lautet wie folgt:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

Die Parameter sind:

- `<calc-size-basis>`
  - : Der Wert (meistens eine intrinsische Größe), auf den eine Berechnung angewendet werden soll.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)
  - : Ein Ausdruck, der die durchzuführende Berechnung auf dem `<calc-size-basis>` definiert.

### Rückgabewert

Gibt einen Wert zurück, der gleich dem `<calc-size-basis>` ist, modifiziert durch den `<calc-sum>` Ausdruck. Da der `<calc-size-basis>` Wert eine intrinsische Größe ist, ist der zurückgegebene Wert eine modifizierte intrinsische Größe, die sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für intrinsische Größen-Schlüsselwörter. Die Funktion `calc-size()` ist explizit so definiert, dass sie eine intrinsische Größe und nicht ein [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) darstellt, womit die Korrektheit erzwungen wird. `calc-size()` ermöglicht Berechnungen an intrinsischen Größenwerten auf eine sichere, gut definierte Weise.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste Argument von `calc-size()` kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mithilfe von {{cssxref("flex-basis")}} dimensioniert sind).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()` Wert. Dies ist nicht etwas, das Sie wahrscheinlich sehr oft tun würden, aber es ist verfügbar, um sicherzustellen, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. Zum Beispiel wird dies funktionieren:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Ebenso wie dies:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Ein weiteres `<calc-sum>`, mit den gleichen Einschränkungen wie das für das zweite Argument angegebene `<calc-sum>`, außer dass das Schlüsselwort `size` nicht enthalten sein darf. Dies werden Sie wahrscheinlich nicht tun, da Sie keine Berechnung an einem intrinsischen Größenwert mehr durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion dennoch. Zum Beispiel wird dies direkt funktionieren oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte definitive Größe darstellt. In diesem Fall darf das Schlüsselwort `size` im zweiten Argument nicht enthalten sein, und die `calc-size()` gibt das Ergebnis der zweiten Argumentberechnung zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen verschiedener intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()` Argument ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` stellt das als erstes Argument angegebene `<calc-size-basis>` dar.
- Operanden können `size` und jede Wertetype beinhalten, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*`, und `/` können enthalten sein.
- Andere mathematische Funktionen können enthalten sein, wie {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachtelter `calc-size()`.
- Der gesamte Ausdruck muss mit [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) übereinstimmen und sich zu einem [`<length>`](/de/docs/Web/CSS/length) auflösen.

### Aktivierung der Animation von intrinsischen Größenwerten

Die Rückgabewerte von `calc-size()` können interpoliert werden, was Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem `calc-size()` intrinsischen Größenrückgabewert ermöglicht.

> [!NOTE]
> Sie sollten das Animieren von Box-Modell-Eigenschaften nach Möglichkeit vermeiden, um Layout-Ereignisse zu verringern und die daraus resultierende Auswirkung auf die Leistung zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um die `width` eines Containers zwischen `0` und `auto` wie folgt zu animieren:

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

Im obigen Fall berechnen wir nichts — wir setzen `auto` in `calc-size()` und geben es unverändert zurück. Die {{cssxref("interpolate-size")}} Eigenschaft macht Animationen wie die oben genannten einfacher in den meisten Fällen zu implementieren, besonders wenn es mehrere Animationen zu berücksichtigen gibt. Sie wird vererbt und muss daher nur einmal auf einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir ohne die Verwendung von `calc-size()` zwischen `0` und `auto` wechseln könnten.

Die `calc-size()` Funktion sollte nur verwendet werden, um Animationen von intrinsischen Größen zu aktivieren, wenn diese auch Berechnungen erfordern. Zum Beispiel, im folgenden Fall animieren wir die `width` _und_ wenden eine Berechnung auf den intrinsischen Größenendzustand an:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel, die folgende {{cssxref("@keyframes")}} Definition animiert eine Container `width` zwischen `fit-content` und 70% von `fit-content`.

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
> Beachten Sie, dass `calc-size()` nicht ermöglicht, zwischen zwei verschiedenen intrinsischen Größenwerten zu animieren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `calc-size`

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

Im CSS verwenden wir [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente im `<section>` zu zentrieren, und legen die `width` und `height` des `<section>` auf `calc-size()` Funktionen fest. Die `width` ist gleich `fit-content` plus `6rem`. Die `height` ist `auto` multipliziert mit zwei.

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

Der Rest des CSS wurde der Übersichtlichkeit halber ausgeblendet.

#### Ergebnis

Wir haben etwas horizontalen und vertikalen Platz für den Text geschaffen, um zentriert zu werden, ohne die Verwendung von Padding.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel demonstriert, wie `calc-size()` verwendet wird, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakterabzeichen/"Namensschild", das beim Hovern oder Fokussieren Informationen über den Charakter enthüllt. Das Enthüllen wird durch einen {{cssxref("height")}} Übergang zwischen einer festgelegten Länge und `max-content` behandelt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) darauf gesetzt, damit es Fokus über die Tastatur erhalten kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jedes mit eigenen Kindinhalten.

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
  background: #eeeeee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 10px;
  border-bottom: 2px solid #cccccc;
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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass nur das `<header>` standardmäßig angezeigt wird, und spezifizieren dann einen `transition`, der die `<section>` `height` über 1 Sekunde während der Zustandsänderungen animiert. Schließlich setzen wir die `<section>` `height` zu einem `calc-size()` Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Funktionsrückgabewert ist das Äquivalent zu `max-content` + `2rem`.

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

Der Rest des CSS wurde der Übersichtlichkeit halber ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu hovern oder es über die Tastatur zu fokussieren — es wird zu seiner vollen Höhe + 2rem animiert und enthüllt den gesamten Inhalt mit 2rem zusätzlichem Platz am unteren Rand.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit darin befindlichem Text und einen Knopf, der geklickt werden kann, um die Containerbreite je nach Lesepreference zu verkleinern oder zu erweitern.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element, das Text-Inhalt enthält, plus einen {{htmlelement("button")}}, um die `<section>` Breite zu ändern.

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
  background: #eeeeee;
  border: 2px solid #cccccc;
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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Wir definieren dann zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, die von `fit-content` zu 70% von `fit-content` (berechnet mit `calc-size()`) animiert, und `wider`, die dieselben Werte, aber in die entgegengesetzte Richtung animiert. Schließlich binden wir diese Animationen an zwei Klassen – `.narrower` und `.wider`. Jede Animation ist so definiert, dass sie eine Sekunde dauert und den Endzustand beibehält, nachdem sie abgeschlossen ist.

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

Der Rest des CSS wurde der Übersichtlichkeit halber ausgeblendet.

#### JavaScript

Das JavaScript bietet eine Schmaler-/Weiterumschaltung, die die relevante Klasse auf das `<section>` anwendet, wenn der Knopf geklickt wird:

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken, um die `<section>` zwischen der weiten und schmalen Lesebreite zu wechseln, erreicht durch Manipulation der `width` basierend auf dem `fit-content` Wert.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()` Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen, und dann wird eine [`max()`](/de/docs/Web/CSS/max) Funktion in `calc-size()` verwendet, um sicherzustellen, dass die `<input>`s zumindest eine Mindestgröße haben und erst anfangen zu wachsen, wenn der eingegebene Text breiter als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt sind.

#### HTML

Das HTML enthält ein {{htmlelement("form")}} Element mit drei textuellen `<input>` Typen. Jedes `<input>` hat ein {{htmlelement("label")}} assoziiert, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) angewendet, um zu verhindern, dass eingegebene Werte lang genug werden, um das Formular-Layout zu brechen.

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
  background: #eeeeee;
  border: 2px solid #cccccc;
}

div {
  display: flex;
  align-items: center;
}

div:not(div:last-child) {
  margin-bottom: 20px;
}
```

Im CSS setzen wir die `width` der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen — standardmäßig hätten sie keine Breite, da nichts in sie eingegeben würde. Um dies zu kompensieren, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Dies bedeutet, dass sie mindestens `100px` breit sind, auch wenn kein Wert eingegeben wurde. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber einen `20px` Abstand auf der rechten Seite behalten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der Rest des CSS wurde der Übersichtlichkeit halber ausgeblendet.

#### Ergebnis

Versuchen Sie, etwas Text in die Formulareingaben einzugeben, und sehen Sie, wie sie wachsen, wenn die Werte anfangen, so breit wie die Mindestbreite zu werden, die durch die `max()` Funktion erzwungen wird.

{{ EmbedLiveSample('Using a function inside the `calc-size()` function', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
