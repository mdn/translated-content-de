---
title: text-overflow
slug: Web/CSS/text-overflow
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`text-overflow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der verborgene Überlaufinhalt den Benutzern signalisiert wird. Es kann abgeschnitten werden, ein Auslassungszeichen (`…`) angezeigt oder eine benutzerdefinierte Zeichenfolge angezeigt werden.

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

Die `text-overflow`-Eigenschaft erzwingt keinen Überlauf. Um Text über seinen Container hinauslaufen zu lassen, müssen Sie andere CSS-Eigenschaften festlegen: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die `text-overflow`-Eigenschaft beeinflusst nur Inhalte, die in einer Blockcontainer-Ebene in ihrer _inline_-Fortschrittsrichtung überlaufen (nicht Text, der am unteren Rand einer Box überläuft).

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

Die `text-overflow`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, bestimmt er das Überlaufverhalten für das Ende der Zeile (das rechte Ende für links-nach-rechts-Text, das linke Ende für rechts-nach-links-Text). Wenn zwei Werte angegeben werden, bestimmt der erste das Überlaufverhalten für das linke Ende der Zeile und der zweite für das rechte Ende. Die Eigenschaft akzeptiert entweder einen Schlüsselwortwert (`clip` oder `ellipsis`) oder einen `<string>`-Wert.

### Werte

- `clip`
  - : Der Standardwert für diese Eigenschaft. Dieser Schlüsselwortwert kürzt den Text am Rand des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), daher kann die Kürzung in der Mitte eines Zeichens erfolgen. Um an der Übergangsstelle zwischen Zeichen abzuschneiden, können Sie `text-overflow` als leere Zeichenfolge angeben, sofern dies in Ihren Ziel-Browsern unterstützt wird: `text-overflow: '';`.
- `ellipsis`
  - : Dieser Schlüsselwortwert zeigt ein Auslassungszeichen (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) an, um den abgeschnittenen Text darzustellen. Das Auslassungszeichen wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt, wodurch die Menge des angezeigten Textes verringert wird. Wenn nicht genug Platz vorhanden ist, um das Auslassungszeichen anzuzeigen, wird es abgeschnitten.
- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der verwendet wird, um den abgeschnittenen Text darzustellen. Die Zeichenfolge wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt und verkürzt die Größe des angezeigten Textes. Wenn nicht genug Platz vorhanden ist, um die Zeichenfolge selbst anzuzeigen, wird sie abgeschnitten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein-Wert-Syntax

Dieses Beispiel zeigt verschiedene Werte für `text-overflow`, die auf einen Absatz für links-nach-rechts- und rechts-nach-links-Text angewendet werden.

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

Eine frühere Version dieser Schnittstelle erreichte den Status _Candidate Recommendation_. Da einige nicht-risikofreie Funktionen entfernt werden mussten, wurde die Spezifikation auf den Stand _Working Draft_ herabgestuft, was erklärt, warum Browser diese Eigenschaft ohne Präfix implementierten, obwohl sie nicht im CR-Zustand war.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche in Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
