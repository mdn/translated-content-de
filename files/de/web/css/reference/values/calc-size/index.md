---
title: calc-size()
slug: Web/CSS/Reference/Values/calc-size
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht Berechnungen auf {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/Reference/Values/fit-content) und [`max-content`](/de/docs/Web/CSS/Reference/Values/max-content); dies wird von der regulären {{cssxref("calc()")}}-Funktion nicht unterstützt.

`calc-size()`-Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, sodass Größen-Schlüsselwortwerte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden können. Das Einschließen von `calc-size()` in einem Eigenschaftswert wendet automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/Reference/Properties/interpolate-size) auf die Auswahl an.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird und daher die Interpolation von intrinsischen Größen-Schlüsselwörtern für jede auf das Element und seine Kinder angewendete Eigenschaft aktiviert. Aus diesem Grund ist `interpolate-size` die bevorzugte Lösung für die Aktivierung von Animationen mit intrinsischen Größen. Sie sollten `calc-size()` nur verwenden, um Animationen mit intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern.

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

Die Syntax der `calc-size()`-Funktion lautet wie folgt:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

Die Parameter sind:

- `<calc-size-basis>`
  - : Der Wert (häufig eine intrinsische Größe), auf den Sie eine Berechnung anwenden möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/Reference/Values/calc-sum)
  - : Ein Ausdruck, der die Berechnung auf dem `<calc-size-basis>` definiert.

### Rückgabewert

Gibt einen Wert zurück, der dem `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>`-Ausdruck. Da der `<calc-size-basis>`-Wert eine intrinsische Größe ist, ist der Rückgabewert eine modifizierte intrinsische Größe, die sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für intrinsische Größen-Schlüsselwörter. Die `calc-size()`-Funktion ist explizit definiert, um eine intrinsische Größe darzustellen, anstatt ein [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage), wodurch die Korrektheit erzwungen wird. `calc-size()` ermöglicht es, Berechnungen auf intrinsischen Größenwerten auf sichere, klar definierte Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()`-Argument kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()`-Wert. Dies ist nicht etwas, das Sie sehr oft tun würden, aber es ist verfügbar, um sicherzustellen, dass eine [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. Daher funktioniert das beispielsweise:

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

- Ein weiteres `<calc-sum>`, mit denselben Einschränkungen wie beim `<calc-sum>` für das zweite Argument, außer dass das Schlüsselwort `size` nicht enthalten sein darf. Dies werden Sie wahrscheinlich nicht tun, da Sie keine Berechnung auf einem intrinsischen Größenwert mehr durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion dennoch. Zum Beispiel funktioniert das direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine unbestimmte spezifische Größe darstellt. In diesem Fall darf im zweiten Argument das Schlüsselwort `size` nicht enthalten sein, und die `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen verschiedener intrinsischer Größen in derselben Berechnung funktioniert nicht. Beispielsweise ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()`-Argument ist ein [`<calc-sum>`](/de/docs/Web/CSS/Reference/Values/calc-sum)-Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert das als erstes Argument angegebene `<calc-size-basis>`.
- Operanden können `size` und alle Werttypen einschließen, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen wie {{cssxref("round()")}}, {{cssxref("max()")}} oder sogar ein verschachteltes `calc-size()` können enthalten sein.
- Der gesamte Ausdruck muss mit [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage) übereinstimmen und sich zu einem [`<length>`](/de/docs/Web/CSS/Reference/Values/length) auflösen.

### Aktivieren der Animation von intrinsischen Größenwerten

`calc-size()`-Rückgabewerte können interpoliert werden, was Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage)-Wert und einem `calc-size()`-intrinsischen Größen-Rückgabewert ermöglicht.

> [!NOTE]
> Sie sollten das Animieren von Box-Modell-Eigenschaften wenn möglich vermeiden, um Layout-Ereignisse zu reduzieren und die resultierende Auswirkung auf die Leistung zu minimieren (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um die `Breite` eines Containers zwischen `0` und `auto` folgendermaßen zu animieren:

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

Im obigen Fall berechnen wir nichts - wir platzieren `auto` in `calc-size()` und geben es unverändert zurück. Die {{cssxref("interpolate-size")}}-Eigenschaft macht Animationen wie die obige in den meisten Fällen einfacher zu implementieren, insbesondere wenn mehrere Animationen berücksichtigt werden müssen. Sie wird vererbt und muss daher nur einmal in einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` hätten wechseln können, ohne `calc-size()` zu verwenden.

Die `calc-size()`-Funktion sollte nur verwendet werden, um Animationen mit intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern. Zum Beispiel animieren wir im folgenden Fall die `Breite` _und_ wenden eine Berechnung auf den Endzustand der intrinsischen Größe an:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version der gleichen intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}}-Definition die `Breite` eines Containers zwischen `fit-content` und 70 % des `fit-content`.

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
> Beachten Sie, dass `calc-size()` keine Animation zwischen zwei verschiedenen intrinsischen Größenwerten ermöglicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `calc-size`

Dieses Beispiel zeigt die grundlegende Dimensionierung eines Containers mit `calc-size()`

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das ein wenig Kindinhalt enthält.

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
  font-family: "Helvetica", "Arial", sans-serif;
  border: 1px solid black;
}

h2 {
  margin: 0;
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 0.8rem;
}
```

Im CSS verwenden wir [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente innerhalb des `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()`-Funktionen. Die `width` wird auf `fit-content` plus `6rem` gesetzt. Die `height` wird auf `auto` multipliziert mit zwei gesetzt.

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

Wir haben etwas horizontalen und vertikalen Platz geschaffen, damit der Text zentriert werden kann, ohne dass Polster verwendet werden.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size`-Animationen

Dieses Beispiel demonstriert, wie `calc-size()` verwendet wird, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakter-Abzeichen/"Namensschild", das beim Überfahren oder Fokussieren Informationen über den Charakter preisgibt. Die Enthüllung erfolgt durch einen Übergang der {{cssxref("height")}} zwischen einer festen Länge und `max-content`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), sodass es Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}}- und {{htmlelement("main")}}-Elemente, jeweils mit eigenem Kindinhalt.

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
  font-family: "Helvetica", "Arial", sans-serif;
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
  font-weight: normal;
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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird, und geben dann einen `Übergang` an, der die `<height>` des `<section>` über 1 Sekunde während Zustandsänderungen animiert. Schließlich setzen wir die `<height>` des `<section>` auf einen `calc-size()`-Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Funktionsrückgabewert entspricht `max-content` + `2rem`.

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

Versuchen Sie, das `<section>` zu überfahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animiert und zeigt den gesamten Inhalt mit einem zusätzlichen Abstand von 2rem am unteren Rand.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Textinhalt und einen Button, der geklickt werden kann, um die Breite des Containers je nach Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit Kindtextinhalt sowie einen {{htmlelement("button")}}, um die `<section>`-Breite zu ändern.

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
  font-family: "Helvetica", "Arial", sans-serif;
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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Wir definieren dann zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, der von `fit-content` zu 70 % von `fit-content` animiert (berechnet mit `calc-size()`), und `wider`, der die gleichen Werte animiert, jedoch in umgekehrter Richtung. Schließlich hängen wir diese Animationen an zwei Klassen — `.narrower` und `.wider`. Jede Animation ist so definiert, dass sie eine Sekunde dauert und den Endzustand nach Abschluss beibehält.

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

Das JavaScript bietet einen Schalter für schmaler/breiter, der die entsprechende Klasse auf die `<section>` anwenden, wenn der Button geklickt wird:

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken, um die `<section>` zwischen der breiten und schmalen Lesebreite anzupassen, indem Sie die `Breite` auf der Grundlage des `fit-content`-Wertes manipulieren.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()`-Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. In diesem Beispiel wird [`field-sizing: content`](/de/docs/Web/CSS/Reference/Properties/field-sizing) auf {{htmlelement("input")}}-Elemente angewendet, um sie so breit wie den eingegebenen Inhalt zu machen, und dann wird eine [`max()`](/de/docs/Web/CSS/Reference/Values/max)-Funktion innerhalb von `calc-size()` verwendet, um sicherzustellen, dass die `<input>`-Elemente mindestens eine Mindestgröße haben und erst zu wachsen beginnen, wenn der eingegebene Text breiter wird als diese Größe — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}}-Element mit drei textuellen `<input>`-Typen. Jedes `<input>` hat ein zugeordnetes {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), um zu verhindern, dass eingegebene Werte so lang werden, dass das Formularlayout durcheinander gerät.

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
  font-family: "Helvetica", "Arial", sans-serif;
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

Im CSS setzen wir die `width` der `<label>`-Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}}-Elemente, um sie so breit wie der eingegebene Inhalt zu machen — standardmäßig hätten sie keine Breite, weil nichts in sie eingegeben worden wäre. Um dem entgegenzuwirken, setzen wir ihre `width`-Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Dies bedeutet, dass sie mindestens `100px` breit sind, selbst wenn kein Wert eingegeben wird. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie beginnen, mit der Inhaltsgröße zu wachsen, aber einen `20px`-Abstand auf der rechten Seite beibehalten.

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

Versuchen Sie, Text in die Formulareingaben einzugeben, und beobachten Sie, wie sie wachsen, wenn die Werte so breit wie die Mindestbreite werden, die durch die `max()`-Funktion erzwungen wird.

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
