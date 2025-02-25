---
title: calc-size()
slug: Web/CSS/calc-size
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{CSSRef}}{{seecompattable}}

Die **`calc-size()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ermöglicht es Ihnen, Berechnungen an {{Glossary("Intrinsic_Size", "intrinsischen Größen")}} vorzunehmen, wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) und [`max-content`](/de/docs/Web/CSS/max-content); dies wird von der regulären {{cssxref("calc()")}} Funktion nicht unterstützt.

`calc-size()` Rückgabewerte können ebenfalls {{Glossary("Interpolation", "interpoliert")}} werden, wodurch Größen-Keyword-Werte in [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden können. Durch die Verwendung von `calc-size()` in einem Eigenschaftswert wird automatisch [`interpolate-size: allow-keywords`](/de/docs/Web/CSS/interpolate-size) auf die Auswahl angewendet.

Beachten Sie jedoch, dass `interpolate-size` vererbt wird, daher ermöglicht die Anwendung auf ein Element die Interpolation von intrinsischen Größen-Keywords für jede Eigenschaft, die auf dieses Element und seine Kinder angewendet wird. Daher ist `interpolate-size` die bevorzugte Lösung, um intrinsische Größenanimationen zu aktivieren. Sie sollten `calc-size()` nur dann verwenden, um intrinsische Größenanimationen zu aktivieren, wenn diese auch Berechnungen erfordern.

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

  - : Der Wert (meistens eine intrinsische Größe), auf den Sie eine Berechnung durchführen möchten.

- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)

  - : Ein Ausdruck, der die durchzuführende Berechnung auf dem `<calc-size-basis>` definiert.

### Rückgabewert

Gibt einen Wert zurück, der dem `<calc-size-basis>` entspricht, modifiziert durch den `<calc-sum>` Ausdruck. Da der `<calc-size-basis>` Wert eine intrinsische Größe ist, ist der Rückgabewert ein modifizierter intrinsischer Größenwert, der sich wie der intrinsische Größenwert verhält, der in die Funktion eingegeben wurde.

## Beschreibung

Bestimmte Browser-Layout-Algorithmen haben spezielle Verhaltensweisen für intrinsische Größen-Keywords. Die `calc-size()` Funktion ist explizit definiert, um eine intrinsische Größe darzustellen, anstatt eines [`<length-percentage>`](/de/docs/Web/CSS/length-percentage), wodurch Korrektheit erzwungen wird. `calc-size()` ermöglicht es, Berechnungen auf intrinsische Größenwerte in einer sicheren, wohldefinierten Weise durchzuführen.

### Gültige Werte für das erste Argument (`<calc-size-basis>`)

Das erste `calc-size()` Argument kann einer der folgenden intrinsischen Werte sein:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert sind).

Es gibt auch einige spezielle Werte, die dieses Argument annehmen kann:

- Ein geschachtelter `calc-size()` Wert. Dies ist nicht etwas, das Sie häufig tun würden, aber es ist verfügbar, um sicherzustellen, dass die Verwendung einer [CSS-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) als `<calc-size-basis>` immer funktioniert, vorausgesetzt, die Variable ist ein gültiger Wert für die Eigenschaft, auf die `calc-size()` gesetzt wird. So funktioniert zum Beispiel das Folgende:

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

- Ein anderer `<calc-sum>`, mit den gleichen Einschränkungen wie der `<calc-sum>`, der für das zweite Argument spezifiziert ist, außer dass das `size` Keyword nicht enthalten sein darf. Sie werden dies wahrscheinlich nicht tun, da Sie keine Berechnung mehr auf einen intrinsischen Größenwert durchführen, aber wenn ein benutzerdefinierter Eigenschaftswert ein `<calc-sum>` ist, wird die Funktion trotzdem funktionieren. Zum Beispiel funktioniert das direkt oder wenn Sie eine benutzerdefinierte Eigenschaft mit einem Wert von `300px + 2rem` verwenden:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- Das Keyword `any`, das eine nicht spezifizierte feste Größe darstellt. In diesem Fall darf das `size` Schlüsselwort nicht im zweiten Argument enthalten sein, und `calc-size()` gibt das Ergebnis der zweiten Argumentberechnung zurück. Zum Beispiel:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Das Mischen unterschiedlicher intrinsischer Größen in derselben Berechnung funktioniert nicht. Zum Beispiel macht `max-content - min-content` keinen Sinn. `calc-size()` erlaubt nur einen einzigen intrinsischen Größenwert in jeder Berechnung, um dieses Problem zu vermeiden.

### Gültige Werte für das zweite Argument (`<calc-sum>`)

Das zweite `calc-size()` Argument ist ein [`<calc-sum>`](/de/docs/Web/CSS/calc-sum) Ausdruck.

In diesem Ausdruck:

- Das Schlüsselwort `size` repräsentiert das `<calc-size-basis>`, das als erstes Argument spezifiziert wurde.
- Operanden können `size` und alle Wertetypen einschließen, die im Kontext sinnvoll sind.
- Die Operatoren `+`, `-`, `*` und `/` können enthalten sein.
- Andere mathematische Funktionen können enthalten sein, wie {{cssxref("round()")}}, {{cssxref("max()")}} oder sogar ein geschachteltes `calc-size()`.
- Der gesamte Ausdruck muss dem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) entsprechen und sich zu einem [`<length>`](/de/docs/Web/CSS/length) auflösen.

### Aktivieren der Animation von intrinsischen Größenwerten

`calc-size()` Rückgabewerte können interpoliert werden, was es ermöglicht, zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem `calc-size()` intrinsischen Größenrückgabewert zu animieren.

> [!NOTE]
> Sie sollten vermeiden, Boxmodell-Eigenschaften zu animieren, wenn möglich, um die Anzahl der Layout-Ereignisse zu reduzieren und die resultierenden Auswirkungen auf die Leistung zu mindern (siehe [Kritischer Rendering-Pfad > Layout](/de/docs/Web/Performance/Guides/Critical_rendering_path#layout)).

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

Im obigen Fall berechnen wir nichts — wir geben `auto` in `calc-size()` ein und geben es unverändert zurück. Die {{cssxref("interpolate-size")}} Eigenschaft macht Animationen wie die oben beschriebenen in den meisten Fällen einfacher zu implementieren, besonders wenn mehrere Animationen zu berücksichtigen sind. Sie wird vererbt und muss daher nur einmal auf einer übergeordneten Eigenschaft deklariert werden, was bedeutet, dass wir zwischen `0` und `auto` hätten übergehen können, ohne `calc-size()` zu verwenden.

Die `calc-size()` Funktion sollte nur verwendet werden, um intrinsische Größenanimationen zu aktivieren, wenn diese auch Berechnungen erfordern. Zum Beispiel animieren wir im folgenden Fall die `width` _und_ wenden eine Berechnung auf den Endzustand der intrinsischen Größe an:

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

Ein Fall, in dem `calc-size()` nützlich ist, ist, wenn Sie zwischen einer intrinsischen Größe und einer modifizierten Version derselben intrinsischen Größe animieren möchten. Dies ist mit `interpolate-size` und `calc()` nicht möglich. Zum Beispiel animiert die folgende {{cssxref("@keyframes")}} Definition die `width` eines Containers zwischen `fit-content` und 70% des `fit-content`.

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
> Beachten Sie, dass `calc-size()` es nicht ermöglicht, zwischen zwei unterschiedlichen intrinsischen Größen zu animieren.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `calc-size`

Dieses Beispiel zeigt die grundlegende Größendimensionierung eines Containers unter Verwendung von `calc-size()`

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

Im CSS verwenden wir [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um die Kindelemente innerhalb der `<section>` zu zentrieren, und setzen die `width` und `height` der `<section>` auf `calc-size()` Funktionen. Die `width` wird auf `fit-content` plus `6rem` gesetzt. Die `height` wird auf `auto` multipliziert mit zwei gesetzt.

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

Der Rest des CSS wurde aus Gründen der Kürze ausgeblendet.

#### Ergebnis

Wir haben etwas horizontalen und vertikalen Raum geschaffen, damit der Text zentriert werden kann, ohne dass Polsterung verwendet wird.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Grundlegende `calc-size` Animationen

Dieses Beispiel demonstriert, wie man `calc-size()` verwenden kann, um zwischen einer bestimmten Größe und einer intrinsischen Größe zu animieren. Das Demo zeigt ein Charakterabzeichen/"Namensschild", das durch Hover- oder Fokusiervorgänge Informationen über den Charakter enthüllt. Die Enthüllung wird durch eine {{cssxref("height")}} Transition zwischen einer festgelegten Länge und `max-content` gehandhabt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex), damit es über die Tastatur fokussierbar ist. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jedes mit seinen eigenen Kindinhalten.

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

Im CSS setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird, und spezifizieren dann eine `transition`, die die `<section>` `height` über 1 Sekunde bei Zustandsänderungen animiert. Schließlich setzen wir die `<section>` `height` auf einen `calc-size()` Funktionsaufruf bei {{cssxref(":hover")}} und {{cssxref(":focus")}}. Der Rückgabewert der Funktion entspricht `max-content` + `2rem`.

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

Der Rest des CSS wurde aus Gründen der Kürze ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe + 2rem animieren, alle Inhalte werden unter der Berücksichtigung von 2rem zusätzlichem Raum am unteren Rand angezeigt.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Anpassung der Lesebreite basierend auf `fit-content`

Dieses Beispiel zeigt einen Container mit Text darin und eine Schaltfläche, die angeklickt werden kann, um die Breite des Containers je nach Lesepräferenz schmaler oder breiter zu machen.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element, das Kindtextinhalte enthält, sowie eine {{htmlelement("button")}}, um die `<section>` Breite verändern zu können.

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

Im CSS setzen wir die {{cssxref("width")}} des `<section>` auf einen Standard von {{cssxref("fit-content")}}. Wir definieren dann zwei Sätze von {{cssxref("@keyframes")}}, `narrower`, das von `fit-content` zu 70% von `fit-content` animiert (berechnet mit `calc-size()`), und `wider`, das die gleichen Werte animiert, jedoch in umgekehrter Richtung. Schließlich binden wir diese Animationen an zwei Klassen — `.narrower` und `.wider`. Jede Animation ist definiert, eine Sekunde zu dauern und den Endzustand nach Beendigung beizubehalten.

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

Der Rest des CSS wurde aus Gründen der Kürze ausgeblendet.

#### JavaScript

Das JavaScript bietet einen Schmaler-/Breiter-Umschalter, der die relevante Klasse auf die `<section>` anwendet, wenn die Schaltfläche angeklickt wird:

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

Versuchen Sie, die `<button>` mehrmals zu klicken, um die `<section>` zwischen der breiten und schmalen Lesebreite anzupassen, die durch die Manipulation der `width` basierend auf dem `fit-content` Wert erreicht wird.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Verwendung einer Funktion innerhalb der `calc-size()` Funktion

Wie bereits erwähnt, ist es möglich, eine andere Funktion innerhalb von `calc-size()` zu verwenden. Dieses Beispiel setzt [`field-sizing: content`](/de/docs/Web/CSS/field-sizing) auf {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen, und verwendet dann eine [`max()`](/de/docs/Web/CSS/max) Funktion innerhalb von `calc-size()`, um sicherzustellen, dass die `<input>` mindestens eine Mindestgröße haben und nur anfangen zu wachsen, wenn der eingegebene Text breiter als diese Größe wird — indem sie auf `fit-content` plus `20px` gesetzt werden.

#### HTML

Das HTML enthält ein {{htmlelement("form")}} Element mit drei textuellen `<input>` Typen. Jedes `<input>` hat ein zugehöriges {{htmlelement("label")}}, um das Formular zugänglich zu machen, und ein [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength), um zu verhindern, dass eingegebene Werte so lang werden, dass sie das Formular-Layout sprengen.

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

Im CSS setzen wir die `width` der `<label>` Elemente auf `100px`. Wir setzen `field-sizing: content` auf die {{htmlelement("input")}} Elemente, um sie so breit wie den eingegebenen Inhalt zu machen — standardmäßig hätten sie keine Breite, da nichts in sie eingegeben würde. Um dem entgegenzuwirken, setzen wir ihre `width` Werte auf `calc-size(fit-content, max(100px, size + 20px))`. Das bedeutet, dass sie mindestens `100px` breit sind, selbst ohne eingegebenen Wert. Wenn ein eingegebener Wert breiter als `100px` wird, ändert sich ihre `width` in `fit-content` plus `20px`, was bedeutet, dass sie mit der Inhaltsgröße wachsen, jedoch einen `20px` Abstand auf der rechten Seite beibehalten.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

Der Rest des CSS wurde aus Gründen der Kürze ausgeblendet.

#### Ergebnis

Versuchen Sie, Text in die Formulareingaben einzugeben, und sehen Sie, wie sie wachsen, wenn die Werte anfangen, genauso breit wie die durch die `max()` Funktion erzwungene Mindestbreite zu werden.

{{ EmbedLiveSample('Using a function inside the `calc-size()` function', '100%', '200') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (und andere intrinsische Größen-Keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
