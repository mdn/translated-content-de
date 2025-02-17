---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht Berechnungen mit {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content). Dies wird von der regulären {{cssxref("calc()")}}-Funktion nicht unterstützt.

`calc-size()`-Rückgabewerte können auch {{Glossary("Interpolation", "interpoliert")}} werden, was ermöglicht, dass Schlüsselwortwerte für Größen in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden. Wenn `calc-size()` in einem Eigenschaftswert enthalten ist, wird automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Daher ermöglicht das Anwenden auf ein Element die Interpolation intrinsischer Größen-Schlüsselwörter für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Als Ergebnis ist `interpolate-size` die bevorzugte Lösung zur Aktivierung von Animationen intrinsischer Größen. Sie sollten `calc-size()` nur verwenden, wenn intrinsische Größen-Animationen auch Berechnungen erfordern.

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

  - : Der Wert (meistens eine intrinsische Größe), auf dem Sie eine Berechnung ausführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)

  - : Ein Ausdruck, der die Berechnung definiert, die auf dem `<calc-size-basis>` ausgeführt werden soll.

### Rückgabewert

Die Funktion gibt einen Wert zurück, der dem `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>`-Ausdruck. Da der `<calc-size-basis>` ein intrinsischer Größenwert ist, ist der Rückgabewert ein modifizierter intrinsischer Größenwert, der sich wie der Eingabewert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen bei Schlüsselwörtern für intrinsische Größen. Die `calc-size()`-Funktion ist explizit definiert, um eine intrinsische Größe darzustellen, anstatt einen [`<length-percentage>`](/de/docs/Web/CSS/length-percentage), und erzwingt so Korrektheit. `calc-size()` ermöglicht Berechnungen auf intrinsischen Größenwerten in einer sicheren und genau definierten Weise.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste Argument von `calc-size()` kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein geschachtelter `calc-size()`-Wert. Dies wird nicht oft gemacht, aber es stellt sicher, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, sofern die Variable ein gültiger Wert für die Eigenschaft ist, auf die `calc-size()` angewendet wird. Zum Beispiel funktioniert dies:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Ebenso funktioniert dies:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Ein weiterer `<calc-sum>` mit denselben Einschränkungen wie der `<calc-sum>`, der für das zweite Argument angegeben ist, außer dass das Schlüsselwort `size` nicht enthalten sein darf. Dies wird wahrscheinlich nicht gemacht, denn Sie führen keine Berechnung auf einem intrinsischen Größenwert mehr aus. Dennoch funktioniert die Funktion, wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist. Zum Beispiel funktioniert dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit dem Wert `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, welches eine unbestimmte feste Größe darstellt. In diesem Fall kann das Schlüsselwort `size` im zweiten Argument nicht enthalten sein, und `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen verschiedener intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzelnen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite Argument von `calc-size()` ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)-Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` stellt den als erstes Argument angegebenen `<calc-size-basis>` dar.
- Operanden können `size` und jede Wertart umfassen, die im Kontext Sinn ergibt.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen wie {{cssxref("round()")}}, {{cssxref("max()")}} oder sogar eine geschachtelte `calc-size()`-Funktion können enthalten sein.
- Der Gesamtausdruck muss [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) entsprechen und zu einer [`<length>`](/de/docs/Web/CSS/length) aufgelöst werden.

### Aktivierung von Animationen mit intrinsischen Größenwerten

`calc-size()`-Rückgabewerte können interpoliert werden, was Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage)-Wert und einem intrinsischen Größen-Rückgabewert von `calc-size()` ermöglicht.

> [!NOTE]
> Vermeiden Sie es, wenn möglich, Eigenschaften des Box-Modells zu animieren, um die Anzahl der Layout-Ereignisse zu reduzieren und die Auswirkungen auf die Leistung zu minimieren (siehe [Critical rendering path > Layout](/de/docs/Web/Performance/Critical_rendering_path#layout)).

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

In diesem Fall berechnen wir zwar nichts — wir setzen `auto` in `calc-size()` ein und geben es unverändert zurück. Die {{cssxref("interpolate-size")}}-Eigenschaft macht Animationen wie die oben stehende in den meisten Fällen einfacher zu implementieren, insbesondere wenn mehrere Animationen berücksichtigt werden müssen. Sie wird vererbt und muss daher nur einmal an einer übergeordneten Stelle definiert werden, was bedeutet, dass wir ohne `calc-size()` zwischen `0` und `auto` hätten wechseln können.

Die `calc-size()`-Funktion sollte nur verwendet werden, um intrinsische Größen-Animationen zu aktivieren, wenn diese auch Berechnungen erfordern. Zum Beispiel wird im folgenden Fall die `width` animiert _und_ eine Berechnung auf den Endzustand der intrinsischen Größe angewendet:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}}-Definition die `width` eines Containers zwischen `fit-content` und 70% des `fit-content`.

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

### Grundlegende Nutzung von `calc-size`

Dieses Beispiel zeigt die Basis-Größenbestimmung eines Containers mit `calc-size()`.

#### HTML

Der HTML-Inhalt besteht aus einem einzigen {{htmlelement("section")}}-Element, das einige Kinder-Elemente enthält.

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

Der restliche CSS-Code wurde aus Gründen der Übersichtlichkeit ausgelassen.

#### Ergebnis

Wir haben horizontalen und vertikalen Platz für den zentrierten Text geschaffen, ohne `padding` zu verwenden.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size`-Animationen

Dieses Beispiel zeigt, wie `calc-size()` verwendet wird, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo verfügt über ein Charakterabzeichen/"Namensschild", das durch Hovering oder Fokussieren zusätzliche Informationen über den Charakter anzeigt. Die Anzeige erfolgt über einen {{cssxref("height")}}-Übergang zwischen einer festen Länge und `max-content`.

#### HTML

Der HTML-Inhalt besteht aus einem einzigen {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex), damit es per Tastatur fokussiert werden kann. Das `<section>` enthält {{htmlelement("header")}}- und {{htmlelement("main")}}-Elemente, jeweils mit Kindinhalt.

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

Im CSS wird die `height` des `<section>`-Elements auf `2.5rem` gesetzt und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur der `<header>` angezeigt wird. Anschließend wird eine `transition` definiert, die die `height` des `<section>` über 1 Sekunde bei Zustandsänderungen animiert. Abschließend wird im {{cssxref(":hover")}}- und {{cssxref(":focus")}}-Zustand die `calc-size()`-Funktion aufgerufen. Der Rückgabewert der Funktion entspricht `max-content` + `2rem`.

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

Der restliche CSS-Code wurde aus Gründen der Übersichtlichkeit ausgelassen.

#### Ergebnis

Versuchen Sie, mit der Maus über das `<section>` zu fahren oder es per Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animiert, wodurch der gesamte Inhalt mit einem zusätzlichen Abstand von 2rem am unteren Rand angezeigt wird.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text und eine Schaltfläche, die angeklickt werden kann, um die Containerbreite abhängig von den Lesevorlieben zu vergrößern oder zu verkleinern.

#### HTML

Der HTML-Inhalt besteht aus einem einzigen {{htmlelement("section")}}-Element mit Textinhalt sowie einer {{htmlelement("button")}}, um die Breite des `<section>` zu ändern.

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

Im CSS wird die `width` des `<section>`-Elements standardmäßig auf {{cssxref("fit-content")}} gesetzt. Zwei {{cssxref("@keyframes")}}-Definitionen werden angegeben: `narrower`, die von `fit-content` zu 70% von `fit-content` (mit `calc-size()` berechnet) animiert, und `wider`, die dieselben Werte in entgegengesetzter Richtung animiert. Schließlich werden diese Animationen zwei Klassen (`.narrower` und `.wider`) zugeordnet. Jede Animation dauert eine Sekunde und behält den Endzustand nach dem Abschluss bei.

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

Der restliche CSS-Code wurde aus Gründen der Übersichtlichkeit ausgelassen.

#### JavaScript

Das JavaScript bietet eine Schaltfläche, die per Klick zwischen den `.narrower`- und `.wider`-Klassen wechselt, um die Breite des `<section>` anzupassen:

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

Klicken Sie mehrmals auf die `<button>`, um die Breite des `<section>` zwischen einer breiten und einer schmalen Leseansicht zu wechseln. Dies wird durch die Breitenanpassung basierend auf dem `fit-content`-Wert erreicht.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Nutzung einer Funktion innerhalb der `calc-size()`-Funktion

Wie zuvor erwähnt, ist es möglich, eine andere Funktion innerhalb `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}}-Elementen, um sie an den eingegebenen Inhalt anzupassen. Gleichzeitig wird eine [`max()`](/de/docs/Web/CSS/max)-Funktion innerhalb von `calc-size()` genutzt, um sicherzustellen, dass die `<input>`-Elemente mindestens eine Mindestgröße aufweisen und erst wachsen, wenn der eingegebene Text breiter ist als diese Größe — indem `fit-content` plus `20px` verwendet wird.

#### HTML

Der HTML-Inhalt enthält ein {{htmlelement("form")}}-Element mit drei textuellen `<input>`-Feldern. Jedes `<input>` hat ein zugehöriges {{htmlelement("label")}}, um das Formular barrierefrei zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength), um lange Eingabewerte zu verhindern, die das Layout stören könnten.

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

Im CSS setzen wir die `width` der `<label>`-Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}}-Elemente, um sie an den eingegebenen Inhalt anzupassen — standardmäßig hätten sie keine Breite, da nichts eingegeben wurde. Um dies zu korrigieren, setzen wir deren `width`-Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie mindestens `100px` breit sind, auch wenn keine Eingabe erfolgt. Sobald ein Wert eingegeben wird, der breiter als `100px` ist, wird ihre `width` auf `fit-content` plus `20px` geändert, wodurch sie mit der Inhaltgröße wachsen, jedoch einen `20px`-Rand auf der rechten Seite behalten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der restliche CSS-Code wurde aus Gründen der Übersichtlichkeit ausgelassen.

#### Ergebnis

Versuchen Sie, Text in die Formularfelder einzugeben, und sehen Sie, wie sie wachsen, wenn die Eingaben breiter werden als die durch die `max()`-Funktion festgelegte Mindestbreite.

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
