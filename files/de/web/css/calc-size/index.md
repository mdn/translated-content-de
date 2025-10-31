---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht Berechnungen mit {{Glossary("Intrinsic_Size", "inhärenten Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content); dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

`calc-size()` Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, was es ermöglicht, Größen-Schlüsselwortwerte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) zu verwenden. Das Einfügen von `calc-size()` in einem Eigenschaftswert aktiviert automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/Reference/Properties/interpolate-size) für die Auswahl.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Daher aktiviert es die Interpolation von inhärenten Größen-Schlüsselwörtern für jede Eigenschaft, die auf dieses Element und dessen Kinder angewendet wird. Aus diesem Grund ist `interpolate-size` die bevorzugte Lösung zur Aktivierung von Animationen inhärenter Größen. Sie sollten `calc-size()` nur verwenden, um Animationen inhärenter Größen zu aktivieren, wenn sie ebenfalls Berechnungen erfordern.

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
  - : Der Wert (meist eine inhärente Größe), auf den Sie eine Berechnung durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)
  - : Ein Ausdruck, der die Berechnung definiert, die auf der `<calc-size-basis>` durchgeführt werden soll.

### Rückgabewert

Gibt einen Wert zurück, der der `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>` Ausdruck. Da der `<calc-size-basis>` Wert eine inhärente Größenangabe ist, ist der Rückgabewert eine modifizierte inhärente Größenangabe, die sich wie der in die Funktion eingegebene inhärente Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für inhärente Größen-Schlüsselwörter. Die `calc-size()` Funktion ist explizit definiert, um eine inhärente Größe und nicht ein [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) darzustellen, wodurch die Korrektheit erzwungen wird. `calc-size()` ermöglicht es, Berechnungen auf inhärenten Größenangaben in einer sicheren, wohl definierten Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste Argument von `calc-size()` kann einer der folgenden inhärenten Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()` Wert. Dies ist etwas, das Sie wahrscheinlich nicht sehr oft tun werden, aber es ist verfügbar, um sicherzustellen, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. Zum Beispiel wird dies funktionieren:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Und auch das:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Ein weiteres `<calc-sum>`, mit denselben Einschränkungen wie das `<calc-sum>`, das für das zweite Argument angegeben ist, außer dass das `size` Schlüsselwort nicht enthalten sein darf. Sie werden dies wahrscheinlich nicht tun, da Sie keine Berechnung auf eine inhärente Größenangabe mehr durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, wird die Funktion immer noch funktionieren. Zum Beispiel wird das direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden, funktionieren:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte feste Größe darstellt. In diesem Fall kann das `size` Schlüsselwort nicht im zweiten Argument enthalten sein, und `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen unterschiedlicher inhärenter Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen inhärenten Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite Argument von `calc-size()` ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert die im ersten Argument angegebene `<calc-size-basis>`.
- Operanden können `size` enthalten, und alle Werttypen, die im Kontext Sinn ergeben.
- Die `+`, `-`, `*`, und `/` Operatoren können enthalten sein.
- Andere mathematische Funktionen können enthalten sein, wie {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der gesamte Ausdruck muss [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) entsprechen und zu einem [`<length>`](/de/docs/Web/CSS/length) aufgelöst werden.

### Aktivierung der Animation inhärenter Größenwerte

`calc-size()` Rückgabewerte können interpoliert werden, was es ermöglicht, Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem `calc-size()` inhärenten Größenergebnis zu ermöglichen.

> [!NOTE]
> Sie sollten vermeiden, Box-Modell-Eigenschaften zu animieren, wenn möglich, um Layout-Ereignisse zu reduzieren und die daraus resultierenden Auswirkungen auf die Leistung zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um die Breite eines Containers zwischen `0` und `auto` wie folgt zu animieren:

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

Im obigen Fall berechnen wir nichts — wir geben `auto` in `calc-size()` ein und geben es unverändert zurück. Die {{cssxref("interpolate-size")}} Eigenschaft macht Animationen wie die oben Gezeigte einfacher zu implementieren, besonders wenn es mehrfache Animationen zu berücksichtigen gibt. Es wird vererbt und muss daher nur einmal auf einer Vorfahreneigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` hätten wechseln können, ohne `calc-size()` zu verwenden.

Die `calc-size()` Funktion sollte nur verwendet werden, um Animationen inhärenter Größen zu ermöglichen, wenn sie auch Berechnungen erfordern. Zum Beispiel im folgenden Fall animieren wir die Breite _und_ wenden eine Berechnung auf den inhärenten Größenendzustand an:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer inhärenten Größe und einer modifizierten Version derselben inhärenten Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel definiert die folgende {{cssxref("@keyframes")}} Definition eine Animation der Breite eines Containers zwischen `fit-content` und 70% des `fit-content`.

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
> Beachten Sie, dass `calc-size()` es nicht ermöglicht, zwischen zwei unterschiedlichen inhärenten Größen zu animieren.

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente innerhalb des `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()` Funktionen. Die `width` ist gleich `fit-content` plus `6rem` gesetzt. Die `height` ist auf `auto` multipliziert mit zwei gesetzt.

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

Wir haben etwas horizontalen und vertikalen Raum für den Text geschaffen, der innerhalb des Containers zentriert wird, ohne Verwendung von Padding.

{{ EmbedLiveSample('Grundlegende Verwendung von `calc-size`', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel demonstriert, wie `calc-size()` verwendet werden kann, um zwischen einer bestimmten Größe und einer inhärenten Größe zu animieren. Die Demo zeigt ein Charakterabzeichen/„Namensschild“, das überfahren oder fokussiert werden kann, um Informationen über die Figur anzuzeigen. Die Anzeige erfolgt durch einen {{cssxref("height")}} Übergang zwischen einer festgelegten Länge und `max-content`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), sodass es Tastaturfokus erhalten kann. Die `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jeweils mit eigenem Kindinhalt.

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

Im CSS setzen wir die {{cssxref("height")}} der `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass nur der `<header>` standardmäßig angezeigt wird. Dann spezifizieren wir einen `transition`, der die `<section>` `height` über 1 Sekunde während Zustandsänderungen animiert. Schließlich setzen wir die `<section>` `height` auf einen `calc-size()` Funktionsaufruf auf {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Funktionsrückgabewert entspricht `max-content` + `2rem`.

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

Versuchen Sie, über die `<section>` zu fahren oder sie über die Tastatur zu fokussieren — sie wird auf ihre volle Höhe + 2rem animiert, wodurch der gesamte Inhalt mit 2rem zusätzlichem Raum am unteren Rand angezeigt wird.

{{ EmbedLiveSample('Grundlegende `calc-size` Animationen', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und eine Schaltfläche, die geklickt werden kann, um die Breite des Containers je nach Lesevorliebe zu verkleinern oder zu vergrößern.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit untergeordnetem Textinhalt und eine {{htmlelement("button")}}, um die `<section>` Breite zu ändern.

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

Im CSS setzen wir die {{cssxref("width")}} der `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Wir definieren dann zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, die von `fit-content` zu 70% von `fit-content` (berechnet mit `calc-size()`) animieren, und `wider`, die dieselben Werte, aber in umgekehrter Richtung, animieren. Schließlich fügen wir diese Animationen zwei Klassen zu — `.narrower` und `.wider`. Jede Animation ist definiert, um eine Sekunde zu dauern und den Endzustand beibehalten, sobald sie fertig ist.

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

Das JavaScript bietet einen Schmaler/Breiter-Umschalter, der die entsprechende Klasse auf die `<section>` anwendet, wenn die Schaltfläche geklickt wird:

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

Versuchen Sie, die `<button>` mehrmals zu klicken, um die `<section>` zwischen der breiten und schmalen Lesebreite anzupassen, was durch das Manipulieren der `width` basierend auf dem `fit-content` Wert erreicht wird.

{{ EmbedLiveSample('Anpassung der Lesebreite basierend auf `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()` Funktion

Wie zuvor erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/Reference/Properties/field-sizing) auf {{htmlelement("input")}} Elemente, um sie so breit wie der eingegebene Inhalt zu machen, und verwendet dann eine [`max()`](/de/docs/Web/CSS/max) Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>`s mindestens eine Mindestgröße haben und nur zu wachsen beginnen, wenn der eingegebene Text breiter als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}} Element mit drei textuellen `<input>` Typen. Jeder `<input>` hat ein {{htmlelement("label")}} zugeordnet, um das Formular barrierefrei zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), das angewendet wird, um zu verhindern, dass eingegebene Werte so lang werden, dass das Formularlayout beeinträchtigt wird.

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

Im CSS setzen wir die `width` der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}} Elemente, um sie so breit wie der eingegebene Inhalt zu machen — standardmäßig hätten sie keine Breite, weil nichts eingegeben worden wäre. Um dies auszugleichen, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Dies bedeutet, dass sie mindestens `100px` breit sind, selbst wenn kein Wert eingetragen ist. Wenn ein eingetragener Wert breiter als `100px` wird, ändern sich ihre `width` auf `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber einen Abstand von `20px` auf der rechten Seite behalten.

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

Versuchen Sie, Text in die Formulareingaben einzugeben, und beobachten Sie, wie sie wachsen, wenn die Werte so breit wie die durch die `max()` Funktion erzwungene Mindestbreite werden.

{{ EmbedLiveSample('Verwendung einer Funktion innerhalb der `calc-size()` Funktion', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
