---
title: "`text-overflow` CSS property"
short-title: text-overflow
slug: Web/CSS/Reference/Properties/text-overflow
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-overflow`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie verborgene Überlaufinhalte den Benutzern signalisiert werden. Sie kann abgeschnitten, durch ein Ellipsenzeichen (`…`) ersetzt oder mit einer benutzerdefinierten Zeichenkette angezeigt werden.

{{InteractiveExample("CSS Demo: text-overflow")}}

```css interactive-example-choice
text-overflow: clip;
```

```css interactive-example-choice
text-overflow: ellipsis;
```

```css interactive-example-choice
text-overflow: "-";
```

```css interactive-example-choice
text-overflow: "";
```

```html interactive-example
<section id="default-example">
  <div id="example-element-container">
    <p id="example-element">"Is there any tea on this spaceship?" he asked.</p>
  </div>
</section>
```

```css interactive-example
#example-element-container {
  width: 100%;
  max-width: 18em;
}

#example-element {
  line-height: 50px;
  border: 1px solid #c5c5c5;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  padding: 0 0.5em;
  text-align: left;
}
```

Die Eigenschaft `text-overflow` erzwingt nicht, dass ein Überlauf stattfindet. Um zu erreichen, dass Text seinen Container überläuft, müssen Sie andere CSS-Eigenschaften setzen: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die Eigenschaft `text-overflow` wirkt sich nur auf Inhalte aus, die in der _inline_-Fortschrittsrichtung eines Block-Container-Elements überlaufen (nicht auf Text, der am unteren Rand einer Box überläuft, zum Beispiel).

## Syntax

```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";

/* Global values */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: revert-layer;
text-overflow: unset;
```

Die Eigenschaft `text-overflow` kann mit ein oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, gibt er das Überlaufverhalten für das Ende der Linie an (das rechte Ende für von links nach rechts laufenden Text, das linke Ende für von rechts nach links laufenden Text). Wenn zwei Werte angegeben werden, gibt der erste das Überlaufverhalten für das linke Ende der Linie an, und der zweite spezifiziert es für das rechte Ende der Linie. Die Eigenschaft akzeptiert entweder einen Schlüsselwortwert (`clip` oder `ellipsis`) oder einen `<string>`-Wert.

### Werte

- `clip`
  - : Der Standardwert für diese Eigenschaft. Dieser Schlüsselwortwert wird den Text am Limit des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) abschneiden, daher kann das Abschneiden in der Mitte eines Zeichens geschehen. Um an der Übergangsstelle zwischen Zeichen zu schneiden, können Sie `text-overflow` als leere Zeichenfolge angeben, wenn dies in Ihren Ziel-Browsern unterstützt wird: `text-overflow: '';`.
- `ellipsis`
  - : Dieser Schlüsselwortwert zeigt ein Ellipsenzeichen (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) an, um abgeschnittenen Text darzustellen. Das Ellipsenzeichen wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt, wodurch die Menge des angezeigten Texts verringert wird. Wenn nicht genug Platz vorhanden ist, um das Ellipsenzeichen anzuzeigen, wird es abgeschnitten.
- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der verwendet werden soll, um abgeschnittenen Text darzustellen. Die Zeichenkette wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt, wodurch die Größe des angezeigten Texts verkürzt wird. Wenn nicht genug Platz vorhanden ist, um die Zeichenkette selbst anzuzeigen, wird sie abgeschnitten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein-Wert-Syntax

Dieses Beispiel zeigt verschiedene Werte für `text-overflow`, die auf einen Absatz angewendet werden, für von links nach rechts und von rechts nach links laufenden Text.

#### HTML

```html
<div class="ltr">
  <h2>Left to right text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>

<div class="rtl">
  <h2>Right to left text</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Both of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  text-overflow: " [..]";
}

body {
  display: flex;
  justify-content: space-around;
}

.ltr > p {
  direction: ltr;
}

.rtl > p {
  direction: rtl;
}
```

#### Ergebnis

{{EmbedLiveSample('One-value_syntax', 600, 320)}}

### Zwei-Wert-Syntax

Dieses Beispiel zeigt die Zwei-Wert-Syntax für `text-overflow`, bei der Sie unterschiedliches Überlaufverhalten für den Anfang und das Ende des Textes definieren können. Um den Effekt zu zeigen, müssen wir die Zeile scrollen, damit auch der Anfang der Zeile verborgen ist.

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* Both of the following are required for text-overflow */
  white-space: nowrap;
  overflow: scroll;
}

.overflow-clip-clip {
  text-overflow: clip clip;
}

.overflow-clip-ellipsis {
  text-overflow: clip ellipsis;
}

.overflow-ellipsis-ellipsis {
  text-overflow: ellipsis ellipsis;
}

.overflow-ellipsis-string {
  text-overflow: ellipsis " [..]";
}
```

#### JavaScript

```js
// Scroll each paragraph so the start is also hidden
const paras = document.querySelectorAll("p");

for (const para of paras) {
  para.scroll(100, 0);
}
```

#### Ergebnis

{{EmbedLiveSample('Two-value_syntax', 600, 360)}}

## Spezifikationen

{{Specifications}}

Eine frühere Version dieser Schnittstelle erreichte den Status _Candidate Recommendation_. Da einige als nicht riskant gelistete Funktionen entfernt werden mussten, wurde die Spezifikation auf das Niveau _Working Draft_ herabgestuft, was erklärt, warum Browser diese Eigenschaft ohne Präfix implementierten, obwohl sie nicht im CR-Zustand ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche in Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
