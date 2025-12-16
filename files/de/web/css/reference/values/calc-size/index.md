---
title: calc-size()
slug: Web/CSS/Reference/Values/calc-size
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, Berechnungen an {{Glossary("intrinsic_size", "intrinsischen Größen")}} wie `auto`, {{cssxref("fit-content")}} und {{cssxref("max-content")}} durchzuführen; dies wird von der regulären {{cssxref("calc()")}}-Funktion nicht unterstützt.

`calc-size()`-Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, was die Verwendung von Größen-Schlüsselwörtern in [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Transitionen](/de/docs/Web/CSS/Guides/Transitions) ermöglicht. Tatsächlich aktiviert das Einbeziehen von `calc-size()` in einen Eigenschaftswert automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/Reference/Properties/interpolate-size) für die Auswahl.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Daher ermöglicht das Anwenden auf ein Element die Interpolation von intrinsischen Größen-Schlüsselwörtern für jede auf dieses Element und seine Kinder angewendete Eigenschaft. Daher ist `interpolate-size` die bevorzugte Lösung zur Aktivierung von Animationen intrinsischer Größen. Sie sollten `calc-size()` nur verwenden, um Animationen intrinsischer Größen zu ermöglichen, wenn sie auch Berechnungen erfordern.

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

- {{cssxref("calc-sum")}}
  - : Ein Ausdruck, der die auf die `<calc-size-basis>` anzuwendende Berechnung definiert.

### Rückgabewert

Gibt einen Wert zurück, der der `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>`-Ausdruck. Da der `<calc-size-basis>`-Wert eine intrinsische Größe ist, ist der Rückgabewert eine modifizierte intrinsische Größe, die sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielles Verhalten für intrinsische Größen-Schlüsselwörter. Die `calc-size()`-Funktion ist explizit definiert, um eine intrinsische Größe darzustellen, anstatt eine {{cssxref("length-percentage")}}, was die Korrektheit erzwingt. `calc-size()` ermöglicht Berechnungen an intrinsischen Größenwerten in einer sicheren und gut definierten Weise.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()`-Argument kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} bemessen werden).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()`-Wert. Dies ist nicht etwas, das Sie sehr oft tun würden, aber es ist möglich, sicherzustellen, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. So funktioniert zum Beispiel dies:

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

- Ein anderer `<calc-sum>`, mit denselben Einschränkungen wie der `<calc-sum>`, der für das zweite Argument spezifiziert ist, außer dass das Schlüsselwort `size` nicht enthalten sein darf. Sie werden dies wahrscheinlich nicht tun, da Sie keine Berechnung an einem intrinsischen Größenwert mehr durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion trotzdem. Zum Beispiel funktioniert dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte definitive Größe darstellt. In diesem Fall darf das Schlüsselwort `size` nicht im zweiten Argument enthalten sein und `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen unterschiedlicher intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()`-Argument ist ein {{cssxref("calc-sum")}}-Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` steht für die als erstes Argument angegebene `<calc-size-basis>`.
- Operanden können `size` und alle Wertetypen, die im Kontext sinnvoll sind, umfassen.
- Die Operatoren `+`, `-`, `*` und `/` können einbezogen werden.
- Andere mathematische Funktionen wie {{cssxref("round()")}}, {{cssxref("max()")}} oder sogar ein verschachteltes `calc-size()` können einbezogen werden.
- Der gesamte Ausdruck muss {{cssxref("length-percentage")}} entsprechen und zu einem {{cssxref("length")}} aufgelöst werden.

### Aktivierung von Animationen für intrinsische Größenwerte

`calc-size()`-Rückgabewerte können interpoliert werden, was Animationen zwischen einem {{cssxref("length-percentage")}}-Wert und einem `calc-size()`-Rückgabewert einer intrinsischen Größe ermöglicht.

> [!NOTE]
> Sie sollten möglichst vermeiden, Boxmodell-Eigenschaften zu animieren, um die Anzahl der Layout-Ereignisse zu minimieren und die sich daraus ergebenden Auswirkungen auf die Leistung zu mildern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie eine [Transition](/de/docs/Web/CSS/Guides/Transitions) verwenden, um eine Container-`width` zwischen `0` und `auto` wie folgt zu animieren:

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

In diesem Fall wird nichts berechnet — wir setzen `auto` in `calc-size()` und geben es unverändert zurück. Die {{cssxref("interpolate-size")}}-Eigenschaft macht Animationen wie die obige in den meisten Fällen einfacher zu implementieren, insbesondere wenn mehrere Animationen berücksichtigt werden müssen. Sie wird vererbt und muss daher nur einmal auf einer Vorfahren-Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` hätten wechseln können, ohne `calc-size()` zu verwenden.

Die `calc-size()`-Funktion sollte nur verwendet werden, um Animationen intrinsischer Größen zu ermöglichen, wenn sie auch Berechnungen erfordern. Zum Beispiel animieren wir im folgenden Fall die `width` _und_ führen eine Berechnung auf den Endzustand der intrinsischen Größe durch:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}}-Definition eine Container-`width` zwischen `fit-content` und 70% des `fit-content`.

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

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das einige untergeordnete Inhalte enthält.

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die untergeordneten Elemente innerhalb des `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()`-Funktionen. Die `width` ist auf `fit-content` plus `6rem` gesetzt. Die `height` ist auf `auto` multipliziert mit zwei gesetzt.

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

Der Rest des CSS wurde zur Vereinfachung ausgeblendet.

#### Ergebnis

Wir haben etwas horizontalen und vertikalen Platz geschaffen, damit der Text zentriert werden kann, ohne dass Polsterung verwendet wird.

{{ EmbedLiveSample('Grundlegende `calc-size`-Verwendung', '100%', '150') }}

### Grundlegende `calc-size`-Animationen

Dieses Beispiel demonstriert, wie man `calc-size()` verwendet, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakterabzeichen/“Namensschild“, das angeklickt oder fokussiert werden kann, um Informationen über den Charakter preiszugeben. Die Enthüllung wird durch eine {{cssxref("height")}}-Transition zwischen einer festgelegten Länge und `max-content` gesteuert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das so eingestellt ist, dass es Tastaturfokus empfangen kann, indem [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) darauf gesetzt ist. Das `<section>` enthält {{htmlelement("header")}}- und {{htmlelement("main")}}-Elemente, die jeweils eigene untergeordnete Inhalte haben.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird. Dann spezifizieren wir eine `transition`, die die `height` des `<section>` über eine Sekunde bei Statusänderungen animiert. Schließlich setzen wir die `height` des `<section>` auf einen `calc-size()`-Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Funktionsrückgabewert entspricht `max-content` + `2rem`.

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

Der Rest des CSS wurde zur Vereinfachung ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu schweben oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animiert, wobei alle Inhalte mit 2rem zusätzlichem Platz am unteren Rand angezeigt werden.

{{ EmbedLiveSample('Grundlegende `calc-size`-Animationen', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und einen Button, der geklickt werden kann, um die Containerbreite je nach Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit untergeordnetem Textinhalt und einem {{htmlelement("button")}}, um die `<section>`-Breite zu ändern.

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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Dann definieren wir zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, das von `fit-content` auf 70% von `fit-content` (berechnet mit `calc-size()`) animiert, und `wider`, das dieselben Werte animiert, aber in die entgegengesetzte Richtung. Schließlich binden wir diese Animationen an zwei Klassen — `.narrower` und `.wider`. Jede Animation ist so definiert, dass sie eine Sekunde dauert und der endgültige Zustand beibehalten wird, sobald sie beendet ist.

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

Der Rest des CSS wurde zur Vereinfachung ausgeblendet.

#### JavaScript

Das JavaScript bietet ein "schmaler/breiter" Umschalten, das die entsprechende Klasse auf die `<section>` anwendet, wenn der Button geklickt wird:

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

Versuchen Sie, ein paar Mal auf den `<button>` zu klicken, um die `<section>` zwischen der breiten und schmalen Lesebreite anzupassen, indem die `width` basierend auf dem `fit-content`-Wert manipuliert wird.

{{ EmbedLiveSample('Anpassung der Lesebreite basierend auf `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()`-Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/Reference/Properties/field-sizing) auf {{htmlelement("input")}}-Elementen, um sie so breit wie den eingegebenen Inhalt zu machen, und verwendet dann eine [`max()`](/de/docs/Web/CSS/Reference/Values/max)-Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>`s mindestens eine Mindestgröße haben und erst wachsen, wenn der eingegebene Text breiter als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}}-Element, das drei textuelle `<input>`-Typen enthält. Jedes `<input>` hat ein zugeordnetes {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), um zu verhindern, dass eingegebene Werte so lang werden, dass sie das Formularlayout sprengen.

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

Im CSS setzen wir die `width` der `<label>`-Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}}-Elemente, um sie so breit wie den eingegebenen Inhalt zu machen — standardmäßig hätten sie keine Breite, weil nichts in sie eingegeben wird. Um dem entgegenzuwirken, setzen wir ihre `width`-Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Dies bedeutet, dass sie mindestens `100px` breit sind, auch wenn kein Wert eingegeben wurde. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber einen `20px`-Abstand auf der rechten Seite behalten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der Rest des CSS wurde zur Vereinfachung ausgeblendet.

#### Ergebnis

Versuchen Sie, etwas Text in die Formulareingaben einzugeben und sehen Sie, wie sie wachsen, wenn die Werte so breit wie die durch die `max()`-Funktion erzwungene Mindestbreite werden.

{{ EmbedLiveSample('Verwendung einer Funktion innerhalb der `calc-size()`-Funktion', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
