---
title: text-overflow
slug: Web/CSS/text-overflow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-overflow`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie versteckter Überlauf-Inhalt den Benutzern signalisiert wird. Es kann abgeschnitten, mit einem Auslassungszeichen (`…`) angezeigt oder mit einem benutzerdefinierten String dargestellt werden.

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

Die `text-overflow`-Eigenschaft erzwingt keinen Überlauf. Um Text außerhalb seines Containers überlaufen zu lassen, müssen andere CSS-Eigenschaften gesetzt werden: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die `text-overflow`-Eigenschaft beeinflusst nur Inhalte, die über ein Block-Container-Element in seiner _inline_-Fortschrittsrichtung überlaufen (zum Beispiel nicht der Text, der am unteren Rand einer Box überläuft).

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

Die `text-overflow`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, legt er das Überlaufverhalten für das Zeilenende fest (das rechte Ende für Text von links nach rechts, das linke Ende für Text von rechts nach links). Wenn zwei Werte angegeben werden, legt der erste das Überlaufverhalten für das linke Ende der Zeile fest, und der zweite gibt es für das rechte Ende der Zeile an. Die Eigenschaft akzeptiert entweder einen Schlüsselwortwert (`clip` oder `ellipsis`) oder einen `<string>`-Wert.

### Werte

- `clip`
  - : Der Standardwert für diese Eigenschaft. Dieser Schlüsselwortwert wird den Text am Ende des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) abschneiden. Dadurch kann das Abschneiden in der Mitte eines Zeichens erfolgen. Um das Abschneiden an der Grenze zwischen Zeichen zu erreichen, können Sie `text-overflow` als leeren String angeben, falls dies in Ihren Ziel-Browsern unterstützt wird: `text-overflow: '';`.
- `ellipsis`
  - : Dieser Schlüsselwortwert zeigt ein Auslassungszeichen (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) an, um abgeschnittenen Text darzustellen. Das Auslassungszeichen wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt, wodurch die Menge der angezeigten Texte reduziert wird. Wenn nicht genügend Platz vorhanden ist, um das Auslassungszeichen anzuzeigen, wird es abgeschnitten.
- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der verwendet wird, um abgeschnittenen Text darzustellen. Der String wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt und verkürzt die Größe des angezeigten Textes. Wenn nicht genügend Platz vorhanden ist, um den String selbst anzuzeigen, wird er abgeschnitten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein-Wert-Syntax

Dieses Beispiel zeigt unterschiedliche Werte für `text-overflow` angewendet auf einen Absatz, sowohl für Text von links nach rechts als auch für Text von rechts nach links.

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

### Zwei-Werte-Syntax

Dieses Beispiel zeigt die Zwei-Werte-Syntax für `text-overflow`, bei der Sie unterschiedliches Überlaufverhalten für den Anfang und das Ende des Textes definieren können. Um den Effekt zu zeigen, müssen wir die Zeile scrollen, sodass auch der Anfang der Zeile verborgen ist.

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

Eine frühere Version dieses Interfaces erreichte den Stand der _Candidate Recommendation_. Da einige nicht-aufgeführte Risiken enthaltenden Funktionen entfernt werden mussten, wurde die Spezifikation auf das _Working Draft_-Niveau herabgestuft, was erklärt, warum Browser diese Eigenschaft unpräfiziert implementierten, obwohl sie nicht im CR-Zustand ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche in Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
