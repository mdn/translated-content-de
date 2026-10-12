---
title: "`text-overflow` CSS property"
short-title: text-overflow
slug: Web/CSS/Reference/Properties/text-overflow
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-overflow`** legt fest, wie Nutzern verborgener überlaufender Inhalt angezeigt wird.

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

Für diese Eigenschaft werden ein oder zwei durch Leerzeichen getrennte Werte angegeben, darunter:

- `clip`
  - : Der Standardwert dieser Eigenschaft. Dieser Schlüsselwortwert schneidet den Text an der Grenze des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) ab. Dadurch kann der Text mitten in einem Zeichen abgeschnitten werden. Um den Text zwischen Zeichen abzuschneiden, können Sie `text-overflow` als leere Zeichenfolge angeben, sofern Ihre Zielbrowser dies unterstützen: `text-overflow: '';`.
- `ellipsis`
  - : Dieser Schlüsselwortwert zeigt Auslassungspunkte (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) an, um abgeschnittenen Text zu kennzeichnen. Die Auslassungspunkte werden innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt, wodurch weniger Text sichtbar ist. Wenn nicht genügend Platz für die Auslassungspunkte vorhanden ist, werden sie abgeschnitten.
- `<string>`
  - : Die {{cssxref("&lt;string&gt;")}}, die abgeschnittenen Text kennzeichnen soll. Die Zeichenfolge wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt, wodurch weniger Text sichtbar ist. Wenn nicht genügend Platz für die Zeichenfolge selbst vorhanden ist, wird sie abgeschnitten.

## Beschreibung

Die Eigenschaft `text-overflow` legt fest, wie Nutzern verborgener überlaufender Inhalt angezeigt wird. Er kann abgeschnitten oder durch Auslassungspunkte (`…`) oder eine benutzerdefinierte Zeichenfolge gekennzeichnet werden.

Die Eigenschaft `text-overflow` bewirkt selbst keinen Überlauf. Damit Text über seinen Container hinausläuft, müssen Sie weitere CSS-Eigenschaften festlegen: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die Eigenschaft `text-overflow` wirkt sich nur auf Inhalt aus, der in _Inline_-Richtung über ein Block-Container-Element hinausläuft (nicht beispielsweise auf Text, der über den unteren Rand einer Box hinausläuft).

Für die Eigenschaft `text-overflow` können ein oder zwei Werte angegeben werden. Bei einem Wert legt dieser das Verhalten am Zeilenende fest (am rechten Ende bei Text von links nach rechts, am linken Ende bei Text von rechts nach links). Bei zwei Werten legt der erste das Verhalten am linken Zeilenende und der zweite das Verhalten am rechten Zeilenende fest.

### `ellipsis` verhält sich bei bearbeitbaren Elementen wie `clip`

Wenn `text-overflow: ellipsis` auf bearbeitbare Elemente wie textbasierte {{htmlelement("input")}}- und {{htmlelement("textarea")}}-Elemente sowie Elemente mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) angewendet wird, behandeln Browser dies im Allgemeinen wie `text-overflow: clip` – entweder immer oder wenn das Element fokussiert ist. Das genaue Verhalten unterscheidet sich je nach Browser; siehe [Browser-Kompatibilität](#browser-kompatibilität).

Dieses Verhalten stellt sicher, dass der Text auch dann durchlaufen und bearbeitet werden kann, wenn er überläuft. Würde der überlaufende Text weiterhin von Auslassungspunkten verdeckt, wäre er weder sichtbar noch bearbeitbar.

Sie können das Verhalten im folgenden interaktiven Beispiel sehen, auf das dieses CSS angewendet wird:

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
<p contenteditable>
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

Dieses Beispiel zeigt verschiedene Werte für `text-overflow`, die auf einen Absatz mit Text von links nach rechts beziehungsweise von rechts nach links angewendet werden.

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

Dieses Beispiel zeigt die Syntax mit zwei Werten für `text-overflow`, mit der Sie für den Anfang und das Ende des Textes ein unterschiedliches Überlaufverhalten festlegen können.
Um den Effekt zu zeigen, müssen wir die Zeile scrollen, sodass auch der Zeilenanfang verborgen ist.

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

Eine frühere Version dieser Schnittstelle erreichte den Status _Candidate Recommendation_. Da einige Funktionen entfernt werden mussten, die nicht als gefährdet aufgeführt waren, wurde die Spezifikation auf den Status _Working Draft_ zurückgestuft. Das erklärt, warum Browser diese Eigenschaft ohne Präfix implementierten, obwohl sie sich nicht im CR-Status befand.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche innerhalb von Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
