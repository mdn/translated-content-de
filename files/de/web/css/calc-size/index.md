---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, Berechnungen auf Werten der {{Glossary("Intrinsic_Size", "intrinsischen Größe")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content) durchzuführen; dies wird von der regulären {{cssxref("calc()")}}-Funktion nicht unterstützt.

Die Rückgabewerte von `calc-size()` können auch {{Glossary("Interpolation", "interpoliert")}} werden, sodass Größe-Schlüsselwortwerte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden können. Durch die Einbeziehung von `calc-size()` in einen Eigenschaftswert wird automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Das Anwenden auf ein Element aktiviert die Interpolation von intrinsischen Größen-Schlüsselwörtern für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Infolgedessen ist `interpolate-size` die bevorzugte Lösung, um Animationen mit intrinsischen Größen zu aktivieren. Sie sollten `calc-size()` nur verwenden, um Animationen mit intrinsischen Größen zu aktivieren, wenn sie auch Berechnungen erfordern.

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

  - : Der Wert (meistens eine intrinsische Größe), auf den Sie eine Berechnung durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)

  - : Ein Ausdruck, der die Berechnung definiert, die auf die `<calc-size-basis>` durchgeführt werden soll.

### Rückgabewert

Gibt einen Wert zurück, der der `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>` Ausdruck. Da der `<calc-size-basis>`-Wert ein Wert der intrinsischen Größe ist, ist der Rückgabewert ein modifizierter Wert der intrinsischen Größe, der sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensmuster für Schlüsselwörter der intrinsischen Größenbestimmung. Die `calc-size()`-Funktion ist explizit definiert, um eine intrinsische Größe statt eines [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) darzustellen und dadurch die Korrektheit zu erzwingen. `calc-size()` ermöglicht die Durchführung von Berechnungen auf intrinsischen Größenwerten auf eine sichere, eindeutig definierte Weise.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste Argument von `calc-size()` kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert sind).

Es gibt auch einige besondere Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()`-Wert. Dies ist nicht etwas, das Sie sehr oft tun würden, aber es ist verfügbar, um sicherzustellen, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. Das wird zum Beispiel funktionieren:

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

- Ein weiteres `<calc-sum>`, mit den gleichen Einschränkungen wie das für das zweite Argument angegebene `<calc-sum>`, mit der Ausnahme, dass das Schlüsselwort `size` nicht enthalten sein darf. Sie werden dies wahrscheinlich nicht tun, da Sie keine Berechnung mehr auf einem intrinsischen Größenwert durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, wird die Funktion trotzdem funktionieren. Zum Beispiel funktioniert dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine unbestimmte definierte Größe darstellt. In diesem Fall darf das Schlüsselwort `size` im zweiten Argument nicht enthalten sein, und `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen unterschiedlicher intrinsischer Größen in derselben Berechnung funktioniert nicht. Beispiel: `max-content - min-content` ergibt keinen Sinn. `calc-size()` erlaubt nur einen einzigen Wert der intrinsischen Größe in jeder Berechnung und vermeidet so dieses Problem.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite Argument `calc-size()` ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` stellt die `<calc-size-basis>` dar, die als erstes Argument angegeben wurde.
- Operanden können `size` beinhalten und alle Wertetypen, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen können ebenso inkludiert sein, wie {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der gesamte Ausdruck muss mit [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) übereinstimmen und zu einem [`<length>`](/de/docs/Web/CSS/length) auflösen.

### Aktivierung der Animation von intrinsischen Größenwerten

`calc-size()` Rückgabewerte können interpoliert werden, wodurch Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem `calc-size()`-Rückgabewert der intrinsischen Größe möglich werden.

> [!NOTE]
> Sie sollten es vermeiden, Boxmodell-Eigenschaften zu animieren, wenn möglich, um Layout-Ereignisse zu reduzieren und die daraus resultierenden Auswirkungen auf die Performance zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie eine [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um die `width` eines Containers wie folgt zwischen `0` und `auto` zu animieren:

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

Im obigen Fall berechnen wir nichts - wir setzen `auto` in `calc-size()` ein und geben es unverändert zurück. Die Eigenschaft {{cssxref("interpolate-size")}} vereinfacht in den meisten Fällen die Implementierung solcher Animationen besonders, wenn mehrere Animationen zu berücksichtigen sind. Sie wird vererbt und daher muss sie nur einmal an einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` übergehen konnten, ohne `calc-size()` zu verwenden.

Die `calc-size()`-Funktion sollte nur verwendet werden, um Animationen mit intrinsischen Größen zu aktivieren, wenn sie auch Berechnungen erfordern. Zum Beispiel animieren wir im folgenden Fall die `width` _und_ wenden eine Berechnung auf den Endzustand der intrinsischen Größe an:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}}-Definition eine `width` eines Containers zwischen `fit-content` und 70% des `fit-content`.

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
> Beachten Sie, dass `calc-size()` es nicht ermöglicht, zwischen zwei unterschiedlichen intrinsischen Größenwerten zu animieren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `calc-size`-Verwendung

Dieses Beispiel zeigt die grundlegende Dimensionierung eines Containers mit `calc-size()`

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element, das einige Kindinhalte enthält.

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente innerhalb des `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()`-Funktionen. Die `width` ist gleich `fit-content` plus `6rem` gesetzt. Die `height` ist auf `auto` multipliziert mit zwei gesetzt.

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

Wir haben etwas horizontalen und vertikalen Raum geschaffen, damit der Text zentriert wird, ohne Polsterung zu verwenden.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size`-Animationen

Dieses Beispiel zeigt, wie man `calc-size()` verwendet, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakterabzeichen/"Namensschild", das schwebend oder fokussiert werden kann, um Informationen über den Charakter zu enthüllen. Die Enthüllung erfolgt durch einen {{cssxref("height")}} Übergang zwischen einer festen Länge und `max-content`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}}-Elemente, jedes mit eigenem Kindinhalt.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur der `<header>` angezeigt wird. Dann bestimmen wir einen `transition`, der die `<section>` `height` über eine Sekunde während Statusänderungen animiert. Schließlich setzen wir die `<section>` `height` auf einen `calc-size()`-Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Rückgabewert der Funktion entspricht `max-content` + `2rem`.

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

Versuchen Sie, über das `<section>` zu schweben oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animiert, sodass der gesamte Inhalt mit 2rem zusätzlichem Raum am unteren Rand angezeigt wird.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text im Inneren und einen Knopf, der angeklickt werden kann, um die Containerbreite je nach Leservorliebe schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit enthaltenem Textinhalt sowie einen {{htmlelement("button")}} zum Ändern der `<section>` Breite.

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

Im CSS setzen wir die {{cssxref("width")}} der `<section>`-Elemente standardmäßig auf {{cssxref("fit-content")}}. Dann definieren wir zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, das von `fit-content` zu 70% von `fit-content` animiert (berechnet mit `calc-size()`), und `wider`, das dieselben Werte, jedoch in entgegengesetzter Richtung animiert. Schließlich binden wir diese Animationen an zwei Klassen — `.narrower` und `.wider`. Jede Animation ist so definiert, dass sie eine Sekunde dauert und den Endzustand nach Abschluss beibehält.

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

Das JavaScript bietet einen Schaltflächenwechsel "schmaler/breiter", der die relevante Klasse auf die `<section>` anwendet, wenn der Knopf geklickt wird:

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken, um die `<section>`-Breite zwischen der breiten und schmalen Lesebreite anzupassen, dies wird erreicht, indem die `width` basierend auf dem `fit-content` Wert manipuliert wird.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()`-Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}}-Elementen, um sie so breit wie der eingegebene Inhalt zu machen, und verwendet dann eine [`max()`](/de/docs/Web/CSS/max) Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>`s mindestens eine Mindestgröße haben und erst anfangen zu wachsen, wenn der eingegebene Text breiter als diese Größe ist — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}}-Element mit drei textuellen `<input>`-Typen. Jedes `<input>` hat ein zugehöriges {{htmlelement("label")}}, um das Formular barrierefrei zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) angewendet, um zu verhindern, dass die eingegebenen Werte lang genug sind, um das Formularlayout zu beeinflussen.

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

Im CSS setzen wir die `width` der `<label>`-Elemente auf `100px`. Wir setzen `field-sizing: content` auf den {{htmlelement("input")}}-Elementen, um sie so breit wie den eingegebenen Inhalt zu machen — standardmäßig hätten sie keine Breite, weil nichts in sie eingegeben würde. Um dies zu kontern, setzen wir ihre `width`-Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Dies bedeutet, dass sie mindestens `100px` breit sind, auch wenn kein Wert eingegeben wurde. Wird ein eingegebener Wert breiter als `100px`, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber einen `20px` Abstand auf der rechten Seite beibehalten.

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

Versuchen Sie, einige Texte in die Formulareingaben einzugeben, und sehen Sie, wie sie wachsen, wenn die Werte anfangen, so breit wie die durch die `max()` Funktion erzwungene Mindestbreite zu werden.

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
