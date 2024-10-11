---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{CSSRef}}{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) ermöglicht die Durchführung von Berechnungen bei {{Glossary("Intrinsic_Size", "Intrinsische Größe")}}-Werten wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content); dies wird von der regulären {{cssxref("calc()")}}-Funktion nicht unterstützt.

Die Rückgabewerte von `calc-size()` können auch {{Glossary("Interpolation", "interpoliert")}} werden, was ermöglicht, dass Schlüsselwortwerte für die Größe in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden. Tatsächlich wird beim Einfügen von `calc-size()` in einen Eigenschaftswert automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Daher ermöglicht das Anwenden auf ein Element die Interpolation von Schlüsselwörtern für intrinsische Größen bei jeder Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Daher ist `interpolate-size` die bevorzugte Lösung, um Animationen von intrinsischen Größen zu ermöglichen. Sie sollten `calc-size()` nur verwenden, um Animationen von intrinsischen Größen zu ermöglichen, wenn auch Berechnungen erforderlich sind.

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

Die Syntax der Funktion `calc-size()` ist wie folgt:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

Die Parameter sind:

- `<calc-size-basis>`

  - : Der Wert (meistens eine intrinsische Größe), auf den Sie eine Berechnung durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)

  - : Ein Ausdruck, der die Berechnung definiert, die auf `<calc-size-basis>` durchgeführt werden soll.

### Rückgabewert

Gibt einen Wert zurück, der gleich dem durch den Ausdruck `<calc-sum>` modifizierten `<calc-size-basis>` ist. Da der `<calc-size-basis>` ein Wert für intrinsische Größen ist, ist der Rückgabewert ein modifizierter Wert für intrinsische Größen, der sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für Schlüsselwörter von intrinsischen Größen. Die Funktion `calc-size()` ist explizit definiert, um eine intrinsische Größe darzustellen und nicht eine [`<length-percentage>`](/de/docs/Web/CSS/length-percentage), wodurch die Korrektheit erzwungen wird. `calc-size()` ermöglicht es, Berechnungen bei intrinsischen Größenwerten auf eine sichere, gut definierte Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste Argument von `calc-size()` kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

Es gibt auch einige spezielle Werte, die dieses Argument haben kann:

- Ein verschachtelter `calc-size()`-Wert. Dies ist nicht etwas, das Sie sehr häufig tun würden, aber es ist verfügbar, um sicherzustellen, dass das Verwenden einer [CSS-Variable](/de/docs/Web/CSS/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` eingestellt wird. Zum Beispiel funktioniert dies:

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

- Ein weiteres `<calc-sum>`, mit den gleichen Einschränkungen wie das für das zweite Argument angegebene `<calc-sum>`, außer dass das Schlüsselwort `size` nicht enthalten sein kann. Wahrscheinlich werden Sie dies nicht tun, da Sie keine Berechnung mehr bei einem intrinsischen Größenwert durchführen, aber wenn der Wert einer benutzerdefinierten Eigenschaft ein `<calc-sum>` ist, funktioniert die Funktion dennoch. Zum Beispiel funktioniert dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine nicht spezifizierte definitive Größe darstellt. In diesem Fall kann das Schlüsselwort `size` nicht im zweiten Argument enthalten sein, und `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen verschiedener intrinsischer Größen in der gleichen Berechnung funktioniert nicht. Zum Beispiel ergibt `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite Argument `calc-size()` ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)-Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert den `<calc-size-basis>`, der als erstes Argument angegeben wurde.
- Operanden können `size` enthalten und alle Werttypen, die im Kontext Sinn machen.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen können enthalten sein wie {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der Gesamtausdruck muss [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) entsprechen und zu einem [`<length>`](/de/docs/Web/CSS/length) auflösen.

### Aktivieren der Animation von intrinsischen Größenwerten

`calc-size()`-Rückgabewerte können interpoliert werden, was Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage)-Wert und einem `calc-size()`-Rückgabewert für intrinsische Größen ermöglicht.

> [!NOTE]
> Sie sollten vermeiden, Boxenmodell-Eigenschaften zu animieren, wenn möglich, um Layout-Ereignisse zu reduzieren und die daraus resultierenden Auswirkungen auf die Leistung zu mildern (siehe [Critical rendering path > Layout](/de/docs/Web/Performance/Critical_rendering_path#layout)).

Zum Beispiel könnten Sie einen [Übergang](/de/docs/Web/CSS/CSS_transitions) verwenden, um die `width` eines Containers zwischen `0` und `auto` folgendermaßen zu animieren:

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

Im obigen Fall berechnen wir nichts — wir setzen `auto` in `calc-size()` und geben es unverändert zurück. Die Eigenschaft {{cssxref("interpolate-size")}} macht Animationen wie die oben genannten in den meisten Fällen einfacher zu implementieren, insbesondere wenn mehrere Animationen zu berücksichtigen sind. Sie ist geerbt, und daher muss sie nur einmal auf einer Vorfahreneigenschaft deklariert werden, was bedeutet, dass wir ohne die Verwendung von `calc-size()` zwischen `0` und `auto` übergehen könnten.

Die Funktion `calc-size()` sollte nur verwendet werden, um Animationen von intrinsischen Größen zu ermöglichen, wenn auch Berechnungen erforderlich sind. Zum Beispiel animieren wir im folgenden Fall die Breite _und_ führen eine Berechnung beim Endzustand der intrinsischen Größe durch:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}}-Definition die `width` eines Containers zwischen `fit-content` und 70% von `fit-content`.

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
> Beachten Sie, dass `calc-size()` nicht das Animieren zwischen zwei verschiedenen intrinsischen Größenwerten ermöglicht.

## Formaler Syntax

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die untergeordneten Elemente im `<section>` zu zentrieren, und setzen die `width` und `height` des `<section>` auf `calc-size()`-Funktionen. Die `width` wird auf `fit-content` plus `6rem` gesetzt. Die `height` wird auf `auto` multipliziert mit zwei gesetzt.

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

Wir haben etwas horizontalen und vertikalen Raum für die zentrierte Darstellung des Textes geschaffen, ohne Polsterung zu verwenden.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size`-Animationen

Dieses Beispiel zeigt, wie `calc-size()` verwendet wird, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Das Demo zeigt ein Charakterabzeichen/„Namensschild“, das durch Hovern oder Fokussieren informationen über den Charakter offenbart. Das Offenlegen wird durch einen {{cssxref("height")}}-Übergang zwischen einer festen Länge und `max-content` behandelt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex), damit es den Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}}- und {{htmlelement("main")}}-Elemente, jeweils mit ihren eigenen untergeordneten Inhalten.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur der `<header>` angezeigt wird, dann geben wir einen `Übergang` an, der die `height` des `<section>` während Zustandsänderungen über 1 Sekunde animiert. Schließlich setzen wir die `height` des `<section>` auf einen `calc-size()`-Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Rückgabewert der Funktion entspricht `max-content` + `2rem`.

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

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird animieren, um seine volle Höhe + 2rem zu erreichen und den gesamten Inhalt mit 2rems zusätzlichem Raum am Boden zu zeigen.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und einen Button, der geklickt werden kann, um die Containerbreite je nach Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit untergeordneten Textinhalten sowie einen {{htmlelement("button")}}, um die `<section>`-Breite zu ändern.

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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standardwert von {{cssxref("fit-content")}}. Wir definieren dann zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, das von `fit-content` auf 70% von `fit-content` animiert wird (berechnet mit `calc-size()`), und `wider`, das dieselben Werte in umgekehrter Richtung animiert. Schließlich fügen wir diese Animationen zwei Klassen zu — `.narrower` und `.wider`. Jede Animation ist so definiert, dass sie eine Sekunde dauert und den endgültigen Zustand einmal angewendet hält, sobald sie beendet ist.

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

Das JavaScript bietet einen Schmaler/Breiter-Umschalter, der die relevante Klasse auf die `<section>` anwendet, wenn der Button angeklickt wird:

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

Versuchen Sie, den `<button>` einige Male zu klicken, um die `<section>` zwischen der weiten und schmalen Lesebreite zu ändern, indem die `width` auf Basis des `fit-content`-Werts manipuliert wird.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()`-Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}}-Elemente, um sie so breit wie den eingegebenen Inhalt zu machen. Dann wird eine [`max()`](/de/docs/Web/CSS/max)-Funktion innerhalb von `calc-size()` verwendet, um sicherzustellen, dass die `<input>`s mindestens eine Mindestgröße haben und erst wachsen, wenn der eingegebene Text größer als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}}-Element mit drei textuellen `<input>`-Typen. Jedes `<input>` hat ein {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength), um zu verhindern, dass eingegebene Werte so lang werden, dass das Formularlayout gebrochen wird.

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

Im CSS setzen wir die `width` der `<label>`-Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}}-Elemente, um sie so breit wie den eingegebenen Inhalt zu machen — standardmäßig hätten sie keine Breite, weil nichts in sie eingegeben würde. Um dies auszugleichen, setzen wir ihre `width`-Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie mindestens `100px` breit sind, selbst wenn kein Wert eingegeben wird. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` zu `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, sich aber einen `20px`-Abstand auf der rechten Seite behalten.

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

Versuchen Sie, ein bisschen Text in die Formulareingaben einzugeben und sehen Sie, wie sie wachsen, wenn die Werte anfangen, so breit wie die minimale Breite zu werden, die durch die `max()`-Funktion erzwungen wird.

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
