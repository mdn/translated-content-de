---
title: text-overflow
slug: Web/CSS/text-overflow
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`text-overflow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie verborgener Überlauf-Inhalt den Benutzern signalisiert wird. Er kann abgeschnitten, mit einem Auslassungszeichen (`…`) oder mit einer benutzerdefinierten Zeichenfolge angezeigt werden.

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

Die `text-overflow`-Eigenschaft erzwingt keinen Überlauf. Um Text den Container überlaufen zu lassen, müssen Sie andere CSS-Eigenschaften festlegen: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die `text-overflow`-Eigenschaft beeinflusst nur Inhalt, der in seiner _Inline_-Fortlaufrichtung ein Block-Container-Element überläuft (nicht z.B. Text, der am unteren Ende einer Box überläuft).

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

Die `text-overflow`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, legt er das Überlaufverhalten für das Ende der Zeile fest (das rechte Ende für von links nach rechts gerichteten Text, das linke Ende für von rechts nach links gerichteten Text). Wenn zwei Werte angegeben werden, legt der erste das Überlaufverhalten für das linke Ende der Zeile und der zweite für das rechte Ende fest. Die Eigenschaft akzeptiert entweder einen Schlüsselwortwert (`clip` oder `ellipsis`) oder einen `<string>`-Wert.

### Werte

- `clip`
  - : Der Standardwert für diese Eigenschaft. Dieser Schlüsselwortwert wird den Text an der Grenze des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) abschneiden, daher kann der Schnitt in der Mitte eines Zeichens erfolgen. Um den Schnitt am Übergang zwischen Zeichen vorzunehmen, können Sie `text-overflow` als leeren String angeben, wenn dies in Ihren Zielbrowsern unterstützt wird: `text-overflow: '';`.
- `ellipsis`
  - : Dieser Schlüsselwortwert zeigt ein Auslassungszeichen (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) an, um abgeschnittenen Text darzustellen. Das Auslassungszeichen wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt und verringert die Menge des angezeigten Textes. Wenn nicht genügend Platz vorhanden ist, um das Auslassungszeichen anzuzeigen, wird es abgeschnitten.
- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der verwendet wird, um abgeschnittenen Text darzustellen. Die Zeichenfolge wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt und verkürzt die Größe des angezeigten Textes. Wenn nicht genügend Platz vorhanden ist, um die Zeichenfolge selbst anzuzeigen, wird sie abgeschnitten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein-Wert-Syntax

Dieses Beispiel zeigt verschiedene Werte für `text-overflow`, die auf einen Absatz für von links nach rechts und von rechts nach links gerichteten Text angewendet werden.

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

Dieses Beispiel zeigt die Zwei-Wert-Syntax für `text-overflow`, bei der Sie unterschiedliches Überlaufverhalten für Anfang und Ende des Textes definieren können. Um den Effekt zu zeigen, müssen wir die Zeile so scrollen, dass auch der Anfang der Zeile verborgen ist.

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

Eine frühere Version dieser Schnittstelle erreichte den Status _Candidate Recommendation_. Da einige nicht als risikobehaftet gelistete Merkmale entfernt werden mussten, wurde die Spezifikation auf das Niveau des _Working Draft_ herabgestuft, was erklärt, warum Browser diese Eigenschaft ohne Präfixe implementiert haben, obwohl sie nicht im CR-Zustand ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche in Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
