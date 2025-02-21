---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, Berechnungen an {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content) durchzuführen; dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

`calc-size()` Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, was es ermöglicht, Schlüsselwortgrößenwerte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) zu nutzen. In der Praxis wird durch die Einbeziehung von `calc-size()` in einen Eigenschaftswert automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Es ist jedoch zu beachten, dass `interpolate-size` vererbt wird. Das bedeutet, dass es auf ein Element angewendet, die Interpolation von intrinsischen Größen-Schlüsselwörtern für jede auf dieses Element und seine Kinder angewendete Eigenschaft aktiviert. Folglich ist `interpolate-size` die bevorzugte Lösung für die Aktivierung von Animationen mit intrinsischen Größen. Sie sollten `calc-size()` nur dann verwenden, um Animationen mit intrinsischen Größen zu aktivieren, wenn sie auch Berechnungen erfordern.

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

  - : Der Wert (meist eine intrinsische Größe), dessen Berechnung Sie durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)

  - : Ein Ausdruck, der die Berechnung definiert, die auf dem `<calc-size-basis>` durchgeführt werden soll.

### Rückgabewert

Gibt einen Wert zurück, der dem `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>` Ausdruck. Da der `<calc-size-basis>` Wert eine intrinsische Größenangabe ist, ist der Rückgabewert eine modifizierte intrinsische Größenangabe, die sich wie der eingebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für intrinsische Größen-Schlüsselwörter. Die `calc-size()` Funktion ist explizit definiert, um eine intrinsische Größe darzustellen, anstatt ein [`<length-percentage>`](/de/docs/Web/CSS/length-percentage), was die Korrektheit erzwingt. `calc-size()` ermöglicht es, Berechnungen an intrinsischen Größenwerten auf sichere, gut definierte Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()` Argument kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()` Wert. Dies ist etwas, das Sie wahrscheinlich nicht sehr oft tun würden, aber es steht zur Verfügung, um sicherzustellen, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. Zum Beispiel wird dies funktionieren:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Ebenso wie das:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Ein weiterer `<calc-sum>`, mit den gleichen Einschränkungen wie der `<calc-sum>`, der für das zweite Argument angegeben ist, außer dass das `size` Schlüsselwort nicht enthalten sein kann. Das werden Sie wahrscheinlich nicht tun, da Sie sich nicht mehr mit einer intrinsischen Größenberechnung beschäftigen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion trotzdem. Zum Beispiel wird dies direkt funktionieren oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte feste Größe darstellt. In diesem Fall kann das `size` Schlüsselwort nicht im zweiten Argument enthalten sein, und `calc-size()` gibt das Ergebnis der zweiten Argumentberechnung zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen unterschiedlicher intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel macht `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung und vermeidet so dieses Problem.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()` Argument ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert das im ersten Argument angegebene `<calc-size-basis>`.
- Operanden können `size` und alle Wertetypen enthalten, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*`, und `/` können enthalten sein.
- Andere mathematische Funktionen können enthalten sein, wie {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der gesamte Ausdruck muss mit [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) übereinstimmen und zu einem [`<length>`](/de/docs/Web/CSS/length) aufgelöst werden.

### Aktivierung der Animation von intrinsischen Größenwerten

`calc-size()` Rückgabewerte können interpoliert werden, was Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem `calc-size()` intrinsischen Größen-Rückgabewert ermöglicht.

> [!NOTE]
> Sie sollten vermeiden, Layout-Modell-Eigenschaften zu animieren, wenn möglich, um Layout-Ereignisse zu reduzieren und die resultierenden Auswirkungen auf die Leistung zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um die Breite eines Containers zwischen `0` und `auto` zu animieren, etwa so:

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

Im obigen Fall berechnen wir nichts — wir platzieren `auto` in `calc-size()` und geben es unverändert zurück. Die {{cssxref("interpolate-size")}} Eigenschaft macht Animationen wie die obige in den meisten Fällen einfacher zu implementieren, insbesondere wenn mehrere Animationen zu berücksichtigen sind. Sie wird vererbt und muss daher nur einmal für eine übergeordnete Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` hätten übergehen können, ohne `calc-size()` zu verwenden.

Die `calc-size()` Funktion sollte nur verwendet werden, um Animationen von intrinsischen Größen zu aktivieren, wenn sie auch Berechnungen erfordern. Zum Beispiel animieren wir im folgenden Fall die `width` _und_ wenden eine Berechnung auf den Endzustand der intrinsischen Größe an:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}} Definition die Breite eines Containers zwischen `fit-content` und 70% von `fit-content`.

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
> Beachten Sie, dass `calc-size()` keine Animation zwischen zwei unterschiedlichen intrinsischen Größenwerten ermöglicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `calc-size` Nutzung

Dieses Beispiel zeigt die grundlegende Dimensionierung eines Containers mit `calc-size()`

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das einige Kind-Inhalte enthält.

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kind-Elemente innerhalb des `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()` Funktionen. Die `width` wird gleich `fit-content` plus `6rem` gesetzt. Die `height` wird auf `auto` multipliziert mit zwei gesetzt.

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

Der Rest des CSS wurde der Kürze halber ausgeblendet.

#### Ergebnis

Wir haben horizontalen und vertikalen Raum geschaffen, damit der Text zentriert ist, ohne Verwendung von Padding.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel demonstriert, wie `calc-size()` verwendet wird, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Das Demo zeigt ein Charakterabzeichen/„Namensschild“, das durch Hovern oder Fokussieren Informationen über den Charakter enthüllt. Die Enthüllung wird durch eine {{cssxref("height")}} Transition zwischen einer festgelegten Länge und `max-content` gehandhabt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, dem [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex) zugewiesen wurde, damit es den Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jeweils mit eigenen Kindelementen.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird. Dann spezifizieren wir eine `transition`, die die `height` des `<section>` über 1 Sekunde während Zustandsänderungen animiert. Schließlich setzen wir die `height` des `<section>` auf einen `calc-size()` Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Funktionsrückgabewert entspricht `max-content` + `2rem`.

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

Der Rest des CSS wurde der Kürze halber ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird zu seiner vollen Höhe + 2rem animiert, wodurch der gesamte Inhalt mit zusätzlichen 2rem Abstand am unteren Rand enthüllt wird.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und einen Button, der geklickt werden kann, um die Containerbreite je nach Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das Kindertextinhalte und einen {{htmlelement("button")}} zur Änderung der `<section>` Breite enthält.

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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Dann definieren wir zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, das von `fit-content` zu 70% von `fit-content` animiert (mit `calc-size()` berechnet), und `wider`, das dieselben Werte, aber in umgekehrter Richtung, animiert. Schließlich ordnen wir diese Animationen zwei Klassen zu – `.narrower` und `.wider`. Jede Animation dauert eine Sekunde und behält den Endzustand bei, wenn sie fertig ist.

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

Der Rest des CSS wurde der Kürze halber ausgeblendet.

#### JavaScript

Das JavaScript bietet einen Schalter für schmaler/breiter, der die entsprechende Klasse dem `<section>` hinzufügt, wenn der Button geklickt wird:

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken, um die `<section>` zwischen der breiten und engen Lesebreite anzupassen, indem Sie die `width` basierend auf dem `fit-content` Wert manipulieren.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()` Funktion

Wie zuvor erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. In diesem Beispiel wird [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}} Elemente angewendet, um sie so breit wie den eingegebenen Inhalt zu machen, und dann wird eine [`max()`](/de/docs/Web/CSS/max) Funktion innerhalb von `calc-size()` verwendet, um sicherzustellen, dass die `<input>`s mindestens eine Mindestgröße haben und erst zu wachsen beginnen, wenn der eingegebene Text breiter als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}}-Element mit drei textlichen `<input>` Typen. Jedes `<input>` hat ein zugeordnetes {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength), um zu verhindern, dass eingegebene Werte so lang werden, dass das Formularlayout gestört wird.

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

Im CSS setzen wir die `width` der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen – standardmäßig hätten sie keine Breite, da nichts eingegeben würde. Um dem entgegenzuwirken, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie mindestens `100px` breit sind, selbst bei keinem eingegebenen Wert. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber einen `20px` Abstand auf der rechten Seite behalten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der Rest des CSS wurde der Kürze halber ausgeblendet.

#### Ergebnis

Versuchen Sie, Text in die Formulareingaben einzutragen, und sehen Sie, wie sie wachsen, wenn die Werte so breit werden wie die Mindestbreite, die von der `max()` Funktion erzwungen wird.

{{ EmbedLiveSample('Using a function inside the `calc-size()` function', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (und andere intrinsische Größen-Schlüsselwörter) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
