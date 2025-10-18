---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, Berechnungen an {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content) durchzuführen; dies wird von der regulären {{cssxref("calc()")}}-Funktion nicht unterstützt.

`calc-size()`-Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, wodurch Größen-Schlüsselwortwerte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden können. Tatsächlich wird durch die Einbeziehung von `calc-size()` in einen Eigenschaftswert automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Daher ermöglicht die Anwendung auf ein Element die Interpolation von intrinsischen Größen-Schlüsselwörtern für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Infolgedessen ist `interpolate-size` die bevorzugte Lösung, um Animationen mit intrinsischen Größen zu ermöglichen. Sie sollten `calc-size()` nur verwenden, wenn die intrinsischen Größen-Animationen auch Berechnungen erfordern.

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

Die Syntax der `calc-size()`-Funktion ist wie folgt:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

Die Parameter sind:

- `<calc-size-basis>`
  - : Der Wert (meist eine intrinsische Größe), auf dem Sie eine Berechnung durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)
  - : Ein Ausdruck, der die auszuführende Berechnung auf dem `<calc-size-basis>` definiert.

### Rückgabewert

Gibt einen Wert zurück, der dem `<calc-size-basis>` entspricht, das durch den `<calc-sum>`-Ausdruck modifiziert wurde. Da der `<calc-size-basis>`-Wert eine intrinsische Größe ist, ist der Rückgabewert eine modifizierte intrinsische Größe, die sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für intrinsische Größen-Schlüsselwörter. Die `calc-size()`-Funktion ist ausdrücklich definiert, um eine intrinsische Größe darzustellen, anstatt eine [`<length-percentage>`](/de/docs/Web/CSS/length-percentage), was die Korrektheit sicherstellt. `calc-size()` ermöglicht es, Berechnungen auf intrinsischen Größenwerten in einer sicheren, gut definierten Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()`-Argument kann einen der folgenden intrinsischen Werte annehmen:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()`-Wert. Dies ist nicht etwas, was Sie sehr oft tun würden, aber es ist verfügbar, um sicherzustellen, dass die Verwendung einer [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. Zum Beispiel wird dies funktionieren:

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

- Ein weiterer `<calc-sum>`, mit den gleichen Einschränkungen wie der für das zweite Argument spezifizierte `<calc-sum>`, außer dass das `size`-Schlüsselwort nicht enthalten sein kann. Dies werden Sie wahrscheinlich nicht tun, da Sie keine Berechnung mehr auf einem intrinsischen Größenwert durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, wird die Funktion trotzdem funktionieren. Zum Beispiel wird dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden, funktionieren:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte feste Größe darstellt. In diesem Fall kann das `size`-Schlüsselwort im zweiten Argument nicht enthalten sein, und das `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen verschiedener intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()`-Argument ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)-Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert den als erstes Argument angegebenen `<calc-size-basis>`.
- Die Operanden können `size` und alle Werttypen enthalten, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen können enthalten sein, wie {{cssxref("round()")}}, {{cssxref("max()")}} oder sogar ein verschachteltes `calc-size()`.
- Der gesamte Ausdruck muss mit einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) übereinstimmen und zu einem [`<length>`](/de/docs/Web/CSS/length) aufgelöst werden.

### Aktivieren der Animation von intrinsischen Größenwerten

`calc-size()`-Rückgabewerte können interpoliert werden, was Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage)-Wert und einem `calc-size()`-intrinsischen Größenrückgabewert ermöglicht.

> [!NOTE]
> Sie sollten vermeiden, Boxmodell-Eigenschaften zu animieren, wenn möglich, um die Anzahl der Layout-Operationen zu reduzieren und den resultierenden Einfluss auf die Leistung zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um die `Breite` eines Containers zwischen `0` und `auto` wie folgt zu animieren:

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

Im obigen Fall berechnen wir nichts — wir setzen `auto` in `calc-size()` ein und geben es unverändert zurück. Die {{cssxref("interpolate-size")}}-Eigenschaft macht Animationen wie die oben gezeigte einfacher zu implementieren, insbesondere wenn es mehrere Animationen zu berücksichtigen gibt. Sie wird vererbt und muss daher nur einmal bei einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir ohne die Verwendung von `calc-size()` zwischen `0` und `auto` hätten übergehen können.

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel definiert die folgende {{cssxref("@keyframes")}}-Definition eine Animation der `Breite` eines Containers zwischen `fit-content` und 70% von `fit-content`.

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

### Grundlegende `calc-size`-Verwendung

Dieses Beispiel zeigt die grundlegende Dimensionierung eines Containers mit `calc-size()`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das einigen Kind-Inhalt enthält.

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente im `<section>` zu zentrieren, und legen die `Breite` und `Höhe` des `<section>` auf `calc-size()`-Funktionen fest. Die `Breite` ist gleich `fit-content` plus `6rem` gesetzt. Die `Höhe` ist auf `auto` multipliziert mit zwei gesetzt.

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

Der Rest des CSS wurde der Kürze halber verborgen.

#### Ergebnis

Wir haben einige horizontale und vertikale Abstände für den Text erstellt, um zentriert zu werden, ohne die Verwendung von Padding.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size`-Animationen

Dieses Beispiel demonstriert, wie man `calc-size()` verwendet, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakter-Badge/"Namensschild", das durch Hover oder Fokus Informationen über den Charakter enthüllt. Das Enthüllen wird durch einen {{cssxref("Höhe")}}-Übergang zwischen einer festgelegten Länge und `max-content` behandelt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es Tastaturfokus empfangen kann. `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}}-Elemente, jeweils mit eigenem Kindelement-Inhalt.

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

Im CSS setzen wir die {{cssxref("Höhe")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass nur der `<header>` standardmäßig angezeigt wird. Dann spezifizieren wir einen `Übergang`, der die `Höhe` des `<section>` über 1 Sekunde während der Zustandsänderungen animiert. Schließlich setzen wir die `Höhe` des `<section>` auf einen `calc-size()`-Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Rückgabewert der Funktion entspricht `max-content` + `2rem`.

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

Der Rest des CSS wurde der Kürze halber verborgen.

#### Ergebnis

Versuchen Sie, über die `<section>` zu fahren oder sie über die Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animieren und den gesamten Inhalt mit einem zusätzlichen Raum von 2rem am unteren Rand enthüllen.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

In diesem Beispiel wird ein Container mit Text darin gezeigt, und ein Button, der angeklickt werden kann, um die Breite des Containers schmaler oder breiter zu machen, je nach Lesevorliebe.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das Kindertextinhalt und eine {{htmlelement("button")}} enthält, um die `<section>`-Breite zu ändern.

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

Im CSS setzen wir die {{cssxref("Breite")}} des `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Anschließend definieren wir zwei {{cssxref("@keyframes")}}-Sätze: `narrower`, die von `fit-content` auf 70% von `fit-content` (berechnet mit `calc-size()`) animiert, und `wider`, die dieselben Werte in entgegengesetzter Richtung animiert. Schließlich hängen wir diese Animationen an zwei Klassen an — `.narrower` und `.wider`. Jede Animation soll eine Sekunde dauern und den Endzustand nach Abschluss beibehalten.

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

Der Rest des CSS wurde der Kürze halber verborgen.

#### JavaScript

Das JavaScript bietet eine Schmaler-/Breiter-Umschaltung, die die entsprechende Klasse auf `<section>` anwendet, wenn der Button angeklickt wird:

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

Versuchen Sie, ein paar Mal auf den `<button>` zu klicken, um die `<section>` zwischen der weiten und schmalen Lesebreite zu verändern, wodurch die `Breite` basierend auf dem `fit-content`-Wert manipuliert wird.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()`-Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. In diesem Beispiel wird [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}}-Elementen gesetzt, um sie so breit wie der eingegebene Inhalt zu machen, und dann wird eine [`max()`](/de/docs/Web/CSS/max)-Funktion innerhalb von `calc-size()` verwendet, um sicherzustellen, dass die `<input>`s zumindest eine Mindestgröße haben und erst wachsen, wenn der eingegebene Text breiter als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}}-Element mit drei textuellen `<input>`-Typen. Jedes `<input>` hat ein zugehöriges {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), um zu vermeiden, dass eingegebene Werte lang genug werden, um das Formularlayout zu brechen.

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

Im CSS setzen wir die `Breite` der `<label>`-Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}}-Elemente, um sie so breit wie den eingegebenen Inhalt zu machen — standardmäßig hätten sie aufgrund keiner eingegebenen Werte keine Breite. Um dies entgegenzuwirken, setzen wir ihre `Breite`-Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie zumindest `100px` breit sind, selbst ohne eingegebenen Wert. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `Breite` auf `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltgröße wachsen, aber einen `20px`-Abstand auf der rechten Seite erhalten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der Rest des CSS wurde der Kürze halber verborgen.

#### Ergebnis

Versuchen Sie, etwas Text in die Formulareingaben einzugeben, und sehen Sie, wie sie wachsen, wenn die Werte anfangen, so breit wie die durch die `max()`-Funktion erzwungene Mindestbreite zu werden.

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
