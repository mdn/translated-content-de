---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht Berechnungen mit {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content); dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

`calc-size()` Rückgabewerte können ebenfalls {{Glossary("Interpolation", "interpoliert")}} werden, wodurch Größen-Keyword-Werte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden können. Der Einschluss von `calc-size()` in einen Eigenschaftswert wendet automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl an.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird, daher ermöglicht die Anwendung auf ein Element die Interpolation von intrinsischen Größen-Keywords für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Daher ist `interpolate-size` die bevorzugte Lösung zur Aktivierung von Animationen mit intrinsischen Größen. Sie sollten `calc-size()` nur verwenden, um Animationen mit intrinsischen Größen zu aktivieren, wenn diese auch Berechnungen erfordern.

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

Die Syntax der `calc-size()` Funktion lautet wie folgt:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

Die Parameter sind:

- `<calc-size-basis>`
  - : Der Wert (häufig eine intrinsische Größe), auf den Sie eine Berechnung anwenden möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)
  - : Ein Ausdruck, der die Berechnung definiert, die auf `<calc-size-basis>` ausgeführt werden soll.

### Rückgabewert

Gibt einen Wert zurück, der dem durch den `<calc-sum>` Ausdruck modifizierten `<calc-size-basis>` entspricht. Da der `<calc-size-basis>` Wert eine intrinsische Größe ist, handelt es sich beim Rückgabewert um eine modifizierte intrinsische Größe, die sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für intrinsische Größen-Keywords. Die `calc-size()` Funktion ist explizit definiert, um eine intrinsische Größe statt einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) darzustellen, wodurch Korrektheit erzwungen wird. `calc-size()` ermöglicht Berechnungen auf intrinsischen Größenwerten in einer sicheren, wohl definierten Weise.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()` Argument kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert sind).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()` Wert. Dies ist nichts, was Sie wahrscheinlich häufig tun würden, aber es ist verfügbar und stellt sicher, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf der `calc-size()` gesetzt wird. Ein Beispiel, das funktioniert, wäre:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Ebenso wie dieses:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Ein weiteres `<calc-sum>`, mit denselben Einschränkungen wie das für das zweite Argument angegebene `<calc-sum>`, außer dass das `size` Keyword nicht enthalten sein darf. Dies werden Sie wahrscheinlich nicht tun, da keine Berechnung auf einem intrinsischen Größenwert mehr durchgeführt wird, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion trotzdem. Zum Beispiel funktioniert dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine unbestimmte bestimmte Größe darstellt. In diesem Fall darf das `size` Keyword im zweiten Argument nicht enthalten sein, und das `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Ein Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen unterschiedlicher intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()` Argument ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert das als erstes Argument angegebene `<calc-size-basis>`.
- Operandien können `size` und alle Werttypen enthalten, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen können enthalten sein, wie {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der Gesamtausdruck muss mit [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) übereinstimmen und zu einer [`<length>`](/de/docs/Web/CSS/length) aufgelöst werden.

### Aktivierung der Animation von intrinsischen Größenwerten

`calc-size()` Rückgabewerte können interpoliert werden, wodurch Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem `calc-size()` intrinsischen Größenrückgabewert möglich werden.

> [!NOTE]
> Sie sollten es vermeiden, Box-Model-Eigenschaften zu animieren, wenn möglich, um die Anzahl der Layout-Ereignisse zu reduzieren und die daraus resultierenden Auswirkungen auf die Leistung zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um eine Containerbreite zwischen `0` und `auto` wie folgt zu animieren:

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

Im obigen Fall berechnen wir nichts — wir setzen `auto` in `calc-size()` und geben es unverändert zurück. Die {{cssxref("interpolate-size")}} Eigenschaft vereinfacht Animationen wie die obige in den meisten Fällen, besonders wenn es mehrere Animationen zu berücksichtigen gibt. Sie wird vererbt und muss daher nur einmal auf einer Vorgängereigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` ohne `calc-size()` hätten übergehen können.

Die `calc-size()` Funktion sollte nur verwendet werden, um Animationen mit intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern. Zum Beispiel, in dem folgenden Fall animieren wir die `width` _und_ wenden eine Berechnung auf den Endzustand der intrinsischen Größe an:

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
> Beachten Sie, dass `calc-size()` keine Animationen zwischen zwei unterschiedlichen intrinsischen Größenwerten ermöglicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `calc-size`

Dieses Beispiel zeigt eine grundlegende Dimensionierung eines Containers unter Verwendung von `calc-size()`

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente innerhalb des `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()` Funktionen. Die `width` wird auf `fit-content` plus `6rem` gesetzt. Die `height` wird auf `auto` multipliziert mit zwei gesetzt.

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

Wir haben etwas horizontalen und vertikalen Raum geschaffen, damit der Text zentriert angezeigt wird, ohne das Padding zu verwenden.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel demonstriert, wie man `calc-size()` verwendet, um zwischen einer spezifischen Größe und einer intrinsischen Größe zu animieren. Die Demo enthält ein Charakter-Abzeichen/"Namensschild", das bei Hover oder Fokus Informationen über den Charakter enthüllt. Die Enthüllung wird durch eine {{cssxref("height")}} Transition zwischen einer festgelegten Länge und `max-content` abgewickelt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jedes mit eigenem Kindinhalt.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass nur das `<header>` standardmäßig angezeigt wird. Dann spezifizieren wir eine `transition`, die die `height` des `<section>` über 1 Sekunde während Zustandsänderungen animiert. Schließlich setzen wir die `<section>` `height ` auf einen `calc-size()` Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Funktionsrückgabewert ist die Entsprechung von `max-content` + `2rem`.

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

Versuchen Sie über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animiert, sodass der gesamte Inhalt mit einem zusätzlichen Abstand von 2rem am unteren Rand enthüllt wird.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und einen Button, der geklickt werden kann, um die Containerbreite je nach Lesepreferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einziges {{htmlelement("section")}} Element mit Kindelementen und einem {{htmlelement("button")}}, um die `<section>` Breite zu ändern.

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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standard von {{cssxref("fit-content")}}. Wir definieren dann zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, die von `fit-content` zu 70% von `fit-content` animieren (berechnet mit `calc-size()`), und `wider`, die dieselben Werte, aber in umgekehrter Richtung animiert. Schließlich hängen wir diese Animationen an zwei Klassen — `.narrower` und `.wider`. Jede Animation ist auf eine Sekunde festgelegt und hält den Endzustand nach dem Abschluss angewendet.

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

Das JavaScript bietet einen Schmaler/Breiter-Umschalter, der die relevante Klasse auf das `<section>` anwendet, wenn der Button geklickt wird:

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken, um die `<section>` zwischen der weiten und schmalen Lesebreite anzupassen, erreicht durch die Manipulation der `width` basierend auf dem `fit-content` Wert.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()` Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen, und verwendet dann eine [`max()`](/de/docs/Web/CSS/max) Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>`s mindestens eine Mindestgröße haben und erst anfangen zu wachsen, wenn der eingetippte Text breiter als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}} Element, das drei textuelle `<input>` Typen enthält. Jedes `<input>` hat ein zugehöriges {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength), angewendet, um zu verhindern, dass eingegebene Werte lang genug werden, um das Formular-Layout zu zerstören.

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

Im CSS setzen wir die `width` der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen — standardmäßig hätten sie keine Breite, weil nichts in sie eingegeben worden wäre. Um dem entgegenzuwirken, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie mindestens `100px` breit sind, selbst ohne eingetragenen Wert. Wenn ein eingetragener Wert breiter als `100px` wird, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber auf der rechten Seite eine Lücke von `20px` bleibt.

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

Versuchen Sie, etwas Text in die Formulareingaben einzugeben, und sehen Sie, wie sie wachsen, wenn die Werte so breit wie die Mindestbreite werden, die durch die `max()` Funktion erzwungen wird.

{{ EmbedLiveSample('Using a function inside the `calc-size()` function', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (andere intrinsische Größen-Keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
