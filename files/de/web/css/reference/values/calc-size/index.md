---
title: "`calc-size()` CSS-Funktion"
short-title: calc-size()
slug: Web/CSS/Reference/Values/calc-size
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es, Berechnungen auf {{Glossary("intrinsic_size", "intrinsische Größen")}}-Werte wie `auto`, {{cssxref("fit-content")}} und {{cssxref("max-content")}} durchzuführen; dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

Die Rückgabewerte von `calc-size()` können ebenfalls {{Glossary("Interpolation", "interpoliert")}} werden, wodurch Größenschlüsselwerte in [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergängen](/de/docs/Web/CSS/Guides/Transitions) verwendet werden können. Das Einbeziehen von `calc-size()` in einen Eigenschaftswert wendet automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/Reference/Properties/interpolate-size) auf die Auswahl an.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird, sodass es auf ein Element anzuwenden, die Interpolation von intrinsischen Größenschlüsselwörtern für jede Eigenschaft ermöglicht, die auf dieses Element und seine Kinder angewendet wird. Daher ist `interpolate-size` die bevorzugte Lösung zur Aktivierung von Animationen mit intrinsischen Größen. Sie sollten `calc-size()` nur dann verwenden, um Animationen mit intrinsischen Größen zu ermöglichen, wenn sie auch Berechnungen erfordern.

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
  - : Der Wert (häufig eine intrinsische Größe), auf dem Sie eine Berechnung durchführen möchten.

- {{cssxref("calc-sum")}}
  - : Ein Ausdruck, der die Berechnung definiert, die auf dem `<calc-size-basis>` durchgeführt werden soll.

### Rückgabewert

Gibt einen Wert zurück, der dem `<calc-size-basis>` entspricht, der durch den `<calc-sum>`-Ausdruck modifiziert wurde. Da der `<calc-size-basis>`-Wert ein intrinsischer Größenwert ist, ist der Rückgabewert ein modifizierter intrinsischer Größenwert, der sich wie der intrinsische Größenwert verhält, der in die Funktion eingegeben wurde.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für Schlüsselwörter zur intrinsischen Größenanpassung. Die `calc-size()`-Funktion ist ausdrücklich definiert, um eine intrinsische Größe statt einer {{cssxref("length-percentage")}} darzustellen, wodurch Korrektheit sichergestellt wird. `calc-size()` ermöglicht es, Berechnungen auf intrinsische Größenwerte in einer sicheren, gut definierten Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()`-Argument kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert sind).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()`-Wert. Dies werden Sie wahrscheinlich nicht oft tun, aber es ist verfügbar, wodurch sichergestellt wird, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` gesetzt wird. Dieses Beispiel wird funktionieren:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  Genauso wie dieses:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Ein weiteres `<calc-sum>`, mit den gleichen Einschränkungen wie das `<calc-sum>`, das für das zweite Argument angegeben ist, außer dass das `size` Schlüsselwort nicht enthalten sein darf. Dies werden Sie wahrscheinlich nicht tun, da Sie dann keine Berechnung auf einem intrinsischen Größenwert mehr durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion trotzdem. Zum Beispiel wird dies direkt funktionieren, oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte feste Größe darstellt. In diesem Fall darf das `size` Schlüsselwort nicht in das zweite Argument aufgenommen werden, und das `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen unterschiedlicher intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt in jeder Berechnung nur einen einzigen intrinsischen Größenwert, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite Argument von `calc-size()` ist ein {{cssxref("calc-sum")}} Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert das `<calc-size-basis>`, das als erstes Argument angegeben ist.
- Operanden können `size` und alle Wertetypen enthalten, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*` und `/` können eingeschlossen werden.
- Andere mathematische Funktionen können eingeschlossen werden, wie {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der Gesamtausdruck muss mit {{cssxref("length-percentage")}} übereinstimmen und sich zu einer {{cssxref("length")}} auflösen.

### Aktivieren einer Animation von intrinsischen Größenwerten

`calc-size()` Rückgabewerte können interpoliert werden, was Animationen zwischen einem {{cssxref("length-percentage")}} Wert und einem `calc-size()` intrinsischen Größenrückgabewert ermöglicht.

> [!NOTE]
> Sie sollten vermeiden, Box-Modell Eigenschaften zu animieren, wenn möglich, um Layout-Ereignisse zu minimieren und die daraus resultierenden Auswirkungen auf die Leistung zu vermindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/Guides/Transitions) verwenden, um die Breite eines Containers zwischen `0` und `auto` wie folgt zu animieren:

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

Im obigen Fall berechnen wir nichts — wir setzen `auto` in `calc-size()` und geben es unverändert zurück. Die {{cssxref("interpolate-size")}}-Eigenschaft macht Animationen wie die obige in den meisten Fällen einfacher umzusetzen, vor allem wenn es mehrere Animationen zu berücksichtigen gibt. Es wird vererbt und muss daher nur einmal auf einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` wechseln konnten, ohne `calc-size()` zu verwenden.

Die `calc-size()`-Funktion sollte nur verwendet werden, um Animationen mit intrinsischen Größen zu ermöglichen, wenn sie auch Berechnungen erfordern. Zum Beispiel, im folgenden Fall animieren wir die `width` _und_ führen eine Berechnung am Endzustand der intrinsischen Größe durch:

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

Ein Anwendungsfall, bei dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende Definition von {{cssxref("@keyframes")}} die `width` eines Containers zwischen `fit-content` und 70% von `fit-content`.

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

Dieses Beispiel zeigt die grundlegende Dimensionierung eines Containers mit `calc-size()`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}, das einige Kindinhalte enthält.

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die Kindelemente innerhalb des `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()`-Funktionen. Die `width` wird auf `fit-content` plus `6rem` gesetzt. Die `height` wird auf `auto` multipliziert mit zwei gesetzt.

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

Wir haben etwas horizontalen und vertikalen Raum für den Text geschaffen, damit er zentriert ist, ohne Verwendung von Padding.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel zeigt, wie man `calc-size()` verwendet, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakterabzeichen/"Namensschild", das durch Hover oder Fokus Informationen über den Charakter offenbart. Die Offenlegung erfolgt durch eine {{cssxref("height")}} Übergangsanimation zwischen einer festgelegten Länge und `max-content`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) gesetzt, sodass es über die Tastatur fokussiert werden kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jedes mit eigenen Kindelementen.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird, dann spezifizieren wir einen `transition`, der die `height` des `<section>` über 1 Sekunde während Zustandsänderungen animiert. Schließlich setzen wir die `height` des `<section>` auf einen `calc-size()` Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Rückgabewert der Funktion entspricht `max-content` + `2rem`.

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

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animiert, wodurch der gesamte Inhalt mit zusätzlichen 2rem am unteren Rand sichtbar wird.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und einem Button, der geklickt werden kann, um die Breite des Containers je nach Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit Kindtextinhalt, plus einen {{htmlelement("button")}}, um die Breite des `<section>` zu ändern.

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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf den Standardwert {{cssxref("fit-content")}}. Wir definieren dann zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, das von `fit-content` auf 70% von `fit-content` animiert (berechnet mit `calc-size()`), und `wider`, das die gleichen Werte animiert, jedoch in die entgegengesetzte Richtung. Schließlich binden wir diese Animationen an zwei Klassen — `.narrower` und `.wider`. Jede Animation dauert eine Sekunde und behält den Endzustand bei, sobald sie beendet ist.

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

Das JavaScript bietet einen Schalter für schmaler/breiter, der die betreffende Klasse auf das `<section>` anwendet, wenn der Button geklickt wird:

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken, um das `<section>` zwischen der breiten und schmalen Lesebreite anzupassen, indem Sie die `width` basierend auf dem `fit-content` Wert manipulieren.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()` Funktion

Wie bereits erwähnt, ist es möglich, innerhalb von `calc-size()` eine andere Funktion zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/Reference/Properties/field-sizing) auf {{htmlelement("input")}}-Elemente, um sie so breit zu machen wie der eingegebene Inhalt, und verwendet dann eine [`max()`](/de/docs/Web/CSS/Reference/Values/max) Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>` mindestens eine Mindestgröße haben und nur zu wachsen beginnen, wenn der eingegebene Text breiter wird als diese Größe — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}} Element mit drei textlichen `<input>`-Typen. Jedes `<input>` hat ein zugeordnetes {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) angewendet, um zu verhindern, dass eingegebene Werte so lang werden, dass sie das Layout des Formulars zerstören.

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

Im CSS setzen wir die `width` der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}}-Elemente, um sie so breit zu machen wie der eingegebene Inhalt — standardmäßig hätten sie keine Breite, da nichts in sie eingegeben würde. Um dem entgegenzuwirken, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Dies bedeutet, dass sie mindestens `100px` breit sind, auch ohne einen Wert eingegeben. Wenn ein eingegebener Wert breiter als `100px` wird, ändern sich ihre `width` auf `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, aber eine `20px` Lücke auf der rechten Seite behalten.

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

Versuchen Sie, in die Formulareingaben etwas Text einzugeben, und sehen Sie, wie sie wachsen, wenn die Werte beginnen, so breit wie die durch die `max()` Funktion erzwungene Mindestbreite zu werden.

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
