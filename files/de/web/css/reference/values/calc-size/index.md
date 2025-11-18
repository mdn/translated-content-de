---
title: calc-size()
slug: Web/CSS/Reference/Values/calc-size
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht Berechnungen auf Werten von {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/Reference/Values/fit-content) und [`max-content`](/de/docs/Web/CSS/Reference/Values/max-content); dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

`calc-size()` Rückgabewerte können ebenfalls {{Glossary("Interpolation", "interpoliert")}} werden, sodass Schlüsselwortgrößenwerte in [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergängen](/de/docs/Web/CSS/Guides/Transitions) verwendet werden können. Wenn `calc-size()` in einem Eigenschaftswert verwendet wird, wird automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/Reference/Properties/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird. Daher ermöglicht die Anwendung auf ein Element die Interpolation von Schlüsselwörtern für intrinsische Größen für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Daher ist `interpolate-size` die bevorzugte Lösung, um Animationen von intrinsischen Größen zu ermöglichen. Sie sollten `calc-size()` nur verwenden, um Animationen von intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern.

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
  - : Der Wert (meist eine intrinsische Größe), auf dem Sie eine Berechnung durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/Reference/Values/calc-sum)
  - : Ein Ausdruck, der die Berechnung definiert, die auf dem `<calc-size-basis>` durchgeführt wird.

### Rückgabewert

Gibt einen Wert zurück, der dem `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>` Ausdruck. Da der Wert von `<calc-size-basis>` ein intrinsischer Größenwert ist, ist der Rückgabewert ein modifizierter intrinsischer Größenwert, der sich wie der in die Funktion eingegebene intrinsische Größenwert verhält.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für Schlüsselwörter zur intrinsischen Größenbestimmung. Die `calc-size()` Funktion wird explizit definiert, um eine intrinsische Größe darzustellen, anstatt eines [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage), und erzwingt dadurch die Korrektheit. `calc-size()` ermöglicht es, Berechnungen an intrinsischen Größenwerten auf eine sichere, gut definierte Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()` Argument kann einen der folgenden intrinsischen Werte haben:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein verschachtelter `calc-size()` Wert. Dies ist etwas, das Sie wahrscheinlich nicht häufig tun werden, aber es ist möglich, sicherzustellen, dass eine [CSS-Variable](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` angewendet wird. Das folgende Beispiel würde funktionieren:

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

- Ein weiteres `<calc-sum>`, mit den gleichen Einschränkungen wie der für das zweite Argument angegebene `<calc-sum>`, außer dass das `size` Schlüsselwort nicht enthalten sein kann. Sie werden dies wahrscheinlich nicht tun, da Sie keine Berechnung auf einem intrinsischen Größenwert mehr durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, funktioniert die Funktion trotzdem. Zum Beispiel funktioniert dies direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Schlüsselwort `any`, das eine unspezifizierte endgültige Größe darstellt. In diesem Fall kann das Schlüsselwort `size` nicht im zweiten Argument enthalten sein, und `calc-size()` gibt das Ergebnis der Berechnung des zweiten Arguments zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen verschiedener intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel macht `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert pro Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()` Argument ist ein [`<calc-sum>`](/de/docs/Web/CSS/Reference/Values/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert das `<calc-size-basis>`, das als erstes Argument angegeben wurde.
- Operanden können `size` und jeden Werttyp, der im Kontext sinnvoll ist, beinhalten.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen können enthalten sein, wie z.B. {{cssxref("round()")}}, {{cssxref("max()")}}, oder sogar ein verschachteltes `calc-size()`.
- Der gesamte Ausdruck muss dem [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage) entsprechen und sich zu einem [`<length>`](/de/docs/Web/CSS/Reference/Values/length) auflösen.

### Aktivieren der Animation von intrinsischen Größenwerten

`calc-size()` Rückgabewerte können interpoliert werden, wodurch Animationen zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage) Wert und einem `calc-size()` intrinsischen Größenrückgabewert ermöglicht werden.

> [!NOTE]
> Sie sollten vermeiden, Boxmodell-Eigenschaften zu animieren, wenn möglich, um Anzahl der Layout-Ereignisse zu reduzieren und die damit verbundenen Auswirkungen auf die Leistung zu mindern (siehe [kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

Zum Beispiel können Sie einen [Übergang](/de/docs/Web/CSS/Guides/Transitions) verwenden, um die Breite eines Containers zwischen `0` und `auto` wie folgt zu animieren:

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

Im obigen Fall berechnen wir nichts - wir setzen `auto` in `calc-size()` und geben es unverändert zurück. Die {{cssxref("interpolate-size")}} Eigenschaft ermöglicht es, solche Animationen wie die obige in den meisten Fällen einfacher zu implementieren, insbesondere wenn es mehrere Animationen gibt. Sie wird vererbt und muss daher nur einmal auf einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` hätten wechseln können, ohne `calc-size()` zu verwenden.

Die `calc-size()` Funktion sollte nur verwendet werden, um Animationen von intrinsischen Größen zu ermöglichen, wenn diese auch Berechnungen erfordern. Zum Beispiel, im folgenden Fall animieren wir die Breite _und_ wenden eine Berechnung auf den Endzustand der intrinsischen Größe an:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel definiert die folgende {{cssxref("@keyframes")}} Animation die Breite eines Containers zwischen `fit-content` und 70% des `fit-content`.

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
> Beachten Sie, dass `calc-size()` es nicht ermöglicht, zwischen zwei verschiedenen intrinsischen Größenwerten zu animieren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `calc-size`

Dieses Beispiel zeigt die grundlegende Dimensionierung eines Containers mit `calc-size()`.

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

Im CSS verwenden wir [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um die Kindelemente im `<section>` zu zentrieren und setzen die `width` und `height` des `<section>` auf `calc-size()` Funktionen. Die Breite wird gleich `fit-content` plus `6rem` gesetzt. Die Höhe wird auf `auto` multipliziert mit zwei gesetzt.

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

Der restliche CSS-Code wurde der Kürze halber ausgeblendet.

#### Ergebnis

Wir haben etwas horizontalen und vertikalen Platz für den Text geschaffen, um zentriert zu sein, ohne die Verwendung von Padding.

{{ EmbedLiveSample('Grundlegende Verwendung von `calc-size`', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel zeigt, wie `calc-size()` verwendet werden kann, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Die Demo zeigt ein Charakterabzeichen/"Namensschild", das durch Hover oder Fokus Informationen über den Charakter enthüllt. Der Übergang erfolgt über einen {{cssxref("height")}} Wechsel zwischen einer festgelegten Länge und `max-content`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es den Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jeweils mit eigenen Kindinhalten.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird, und spezifizieren dann einen `transition`, der die `<section>` Höhe über 1 Sekunde während der Zustandsänderungen animiert. Schließlich setzen wir die `<section>` `height` auf einen `calc-size()` Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Funktionsrückgabewert entspricht `max-content` + `2rem`.

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

Der restliche CSS-Code wurde der Kürze halber ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur in den Fokus zu nehmen - es wird auf seine volle Höhe + 2rem animiert, wodurch der gesamte Inhalt mit 2rem zusätzlichem Platz am unteren Rand angezeigt wird.

{{ EmbedLiveSample('Grundlegende `calc-size` Animationen', '100%', '250') }}

### Anpassen der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und einen Knopf, der geklickt werden kann, um die Containerbreite basierend auf der Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element, das Kindertextinhalte sowie einen {{htmlelement("button")}} enthält, um die Breite des `<section>` zu ändern.

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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standard von {{cssxref("fit-content")}}. Dann definieren wir zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, das von `fit-content` zu 70% von `fit-content` animiert (berechnet mit `calc-size()`), und `wider`, das dieselben Werte, jedoch in die entgegengesetzte Richtung, animiert. Schließlich hängen wir diese Animationen an zwei Klassen – `.narrower` und `.wider`. Jede Animation ist so definiert, dass sie eine Sekunde dauert und den endgültigen Zustand beibehält, sobald sie beendet ist.

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

Der restliche CSS-Code wurde der Kürze halber ausgeblendet.

#### JavaScript

Das JavaScript bietet einen Schalter für schmaler/breiter, der die entsprechende Klasse auf das `<section>` anwendet, wenn der Knopf geklickt wird:

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken, um das `<section>` zwischen der breiten und schmalen Lesebreite zu verstellen, erreicht durch das Manipulieren der `width` basierend auf dem `fit-content` Wert.

{{ EmbedLiveSample('Anpassen der Lesebreite basierend auf `fit-content`', '100%', '300') }}

### Verwenden einer Funktion innerhalb der `calc-size()` Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/Reference/Properties/field-sizing) auf {{htmlelement("input")}} Elemente, um sie so breit wie der eingegebene Inhalt zu machen, und verwendet dann eine [`max()`](/de/docs/Web/CSS/Reference/Values/max) Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>`s mindestens eine Mindestgröße haben und nur anfangen zu wachsen, wenn der eingegebene Text breiter als diese Größe wird – indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}} Element, das drei textuelle `<input>` Typen enthält. Jedes `<input>` hat ein zugeordnetes {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) angewendet, um zu verhindern, dass eingegebene Werte so lang werden, dass sie das Formularlayout stören.

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

Im CSS setzen wir die Breite der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}} Elemente, um sie so breit wie der eingegebene Inhalt zu machen – standardmäßig hätten sie keine Breite, da nichts eingegeben wäre. Um dies abzufedern, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie eine Mindestbreite von `100px` haben, selbst wenn kein Wert eingegeben ist. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` auf `fit-content` plus `20px`, was bedeutet, dass sie anfangen, mit der Inhaltsgröße zu wachsen, aber einen `20px` Abstand auf der rechten Seite halten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der restliche CSS-Code wurde der Kürze halber ausgeblendet.

#### Ergebnis

Versuchen Sie, einige Texte in die Formulareingaben einzugeben und beobachten Sie, wie sie wachsen, wenn die Werte anfangen, so breit wie die Mindestbreite zu werden, die von der `max()` Funktion erzwungen wird.

{{ EmbedLiveSample('Verwenden einer Funktion innerhalb der `calc-size()` Funktion', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (und andere intrinsische Größen-Schlüsselwörter) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
