---
title: "`text-overflow` CSS property"
short-title: text-overflow
slug: Web/CSS/Reference/Properties/text-overflow
l10n:
  sourceCommit: a0ee03344e973471ea75e61dd194221b172d7d5e
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-overflow`** legt fest, wie Nutzerinnen und Nutzern ausgeblendete Überlaufinhalte angezeigt werden.

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

### Werte

Diese Eigenschaft wird als ein oder zwei durch Leerzeichen getrennte Werte angegeben, darunter:

- `clip`
  - : Der Standardwert für diese Eigenschaft. Dieser Schlüsselwortwert kürzt den Text an der Grenze des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction), daher kann die Kürzung in der Mitte eines Zeichens erfolgen. Um am Übergang zwischen Zeichen abzuschneiden, können Sie `text-overflow` als leere Zeichenfolge angeben, sofern dies in Ihren Zielbrowsern unterstützt wird: `text-overflow: '';`.
- `ellipsis`
  - : Dieser Schlüsselwortwert zeigt eine Ellipse (`'…'`, `U+2026 HORIZONTALE ELLIPSE`) an, um abgeschnittenen Text darzustellen. Die Ellipse wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt und verringert die Menge des dargestellten Textes. Wenn nicht genügend Platz vorhanden ist, um die Ellipse anzuzeigen, wird sie abgeschnitten.
- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der zur Darstellung von abgeschnittenem Text verwendet werden soll. Die Zeichenfolge wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt und verkürzt die Größe des dargestellten Textes. Wenn nicht genügend Platz vorhanden ist, um die Zeichenfolge selbst anzuzeigen, wird sie abgeschnitten.

## Beschreibung

Die Eigenschaft `text-overflow` legt fest, wie Nutzerinnen und Nutzern ausgeblendete Überlaufinhalte angezeigt werden. Sie können abgeschnitten werden, eine Ellipse (`…`) oder eine benutzerdefinierte Zeichenfolge anzeigen.

Die Eigenschaft `text-overflow` erzwingt nicht, dass ein Überlauf auftritt. Damit Text aus seinem Container überläuft, müssen Sie andere CSS-Eigenschaften festlegen: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die Eigenschaft `text-overflow` betrifft nur Inhalte, die ein Block-Container-Element in seiner _inline_-Verlaufsrichtung überlaufen (nicht beispielsweise Text, der am unteren Rand einer Box überläuft).

Die Eigenschaft `text-overflow` kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, legt er das Überlaufverhalten für das Zeilenende fest (das rechte Ende bei Text von links nach rechts, das linke Ende bei Text von rechts nach links). Wenn zwei Werte angegeben werden, legt der erste das Überlaufverhalten für das linke Ende der Zeile und der zweite das für das rechte Ende fest.

### `ellipsis` verhält sich bei bearbeitbaren Elementen wie `clip`

Wenn `text-overflow: ellipsis` auf bearbeitbare Elemente wie textuelle {{htmlelement("input")}}-, {{htmlelement("textarea")}}- und [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Elemente angewendet wird, behandeln Browser dies im Allgemeinen als `text-overflow: clip`, entweder ständig oder wenn das Element fokussiert ist. Das genaue Verhalten unterscheidet sich zwischen Browsern; siehe [Browser-Kompatibilität](#browser-kompatibilität).

Dieses Verhalten stellt sicher, dass der Text durchlaufen und bearbeitet werden kann, auch wenn er überläuft. Wenn der überlaufende Text weiterhin von einer Ellipse verdeckt wäre, wäre er nicht sichtbar oder bearbeitbar.

Sie können das Verhalten im folgenden Live-Beispiel sehen, auf das dieses CSS angewendet wurde:

```css live-sample___ellipsis-as-clip
p[contenteditable],
input,
textarea {
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```html hidden live-sample___ellipsis-as-clip
<p contenteditable="">
  contenteditable paragraph. The text in here is overflowing.
</p>

<hr />

<input type="text" value="Text input. The text in here is overflowing." />

<hr />

<textarea>Textarea. The text in here is overflowing.</textarea>
```

{{embedlivesample("ellipsis-as-clip", "100%", "200")}}

Fokussieren Sie die verschiedenen Elemente und versuchen Sie, deren Textinhalt zu bearbeiten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Syntax mit einem Wert

Dieses Beispiel zeigt verschiedene Werte für `text-overflow`, die auf einen Absatz für Text von links nach rechts und von rechts nach links angewendet werden.

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

### Syntax mit zwei Werten

Dieses Beispiel zeigt die Syntax mit zwei Werten für `text-overflow`, bei der Sie unterschiedliches Überlaufverhalten für den Anfang und das Ende des Textes definieren können.
Um den Effekt zu zeigen, müssen wir die Zeile scrollen, sodass auch der Anfang der Zeile ausgeblendet wird.

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

Eine frühere Version dieser Schnittstelle erreichte den Status _Candidate Recommendation_. Da einige nicht als risikobehaftet aufgeführte Funktionen entfernt werden mussten, wurde die Spezifikation auf die Stufe _Working Draft_ zurückgestuft. Dies erklärt, warum Browser diese Eigenschaft ohne Präfix implementierten, obwohl sie sich nicht im CR-Status befand.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche in Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
