---
title: text-overflow
slug: Web/CSS/text-overflow
l10n:
  sourceCommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{CSSRef}}

Die **`text-overflow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie versteckte Überlaufinhalte den Benutzern signalisiert werden. Sie können abgeschnitten, mit Ellipsis („`…`“) oder mit einer benutzerdefinierten Zeichenfolge angezeigt werden.

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

Die `text-overflow` Eigenschaft erzwingt keinen Überlauf. Um Text dazu zu bringen, aus seinem Container herauszufließen, müssen andere CSS-Eigenschaften gesetzt werden: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die `text-overflow` Eigenschaft betrifft nur Inhalte, die in ihrer _Inline_-Fortlaufrichtung ein Blockcontainerelement überlaufen (nicht Text, der am unteren Ende einer Box überläuft).

## Syntax

```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";

/* Globale Werte */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: revert-layer;
text-overflow: unset;
```

Die `text-overflow` Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wird ein Wert angegeben, so spezifiziert er das Überlaufverhalten für das Zeilenende (das rechte Ende für links-nach-rechts-Text, das linke Ende für rechts-nach-links-Text). Werden zwei Werte angegeben, gibt der erste das Überlaufverhalten für das linke Ende der Zeile an und der zweite für das rechte Ende der Zeile. Die Eigenschaft akzeptiert entweder einen Schlüsselwortwert (`clip` oder `ellipsis`) oder einen `<string>` Wert.

### Werte

- `clip`
  - : Der Standardwert für diese Eigenschaft. Dieses Schlüsselwort schneidet den Text an der Grenze des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) ab, daher kann die Abschneidung in der Mitte eines Zeichens erfolgen. Um an der Übergangsstelle zwischen den Zeichen abzuschneiden, können Sie `text-overflow` als leere Zeichenfolge angeben, falls dies in Ihren Zielbrowsern unterstützt wird: `text-overflow: '';`.
- `ellipsis`
  - : Dieses Schlüsselwort zeigt ein Ellipsis (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) an, um abgeschnittenen Text darzustellen. Das Ellipsis wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt, wodurch die Menge des angezeigten Textes verringert wird. Wenn nicht genug Platz vorhanden ist, um das Ellipsis anzuzeigen, wird es abgeschnitten.
- `<string>`
  - : Die {{cssxref("&lt;string&gt;")}}, die verwendet werden soll, um abgeschnittenen Text darzustellen. Die Zeichenfolge wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) angezeigt und verkürzt die Größe des angezeigten Textes. Wenn nicht genug Platz vorhanden ist, um die Zeichenfolge selbst anzuzeigen, wird sie abgeschnitten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Syntax mit einem Wert

Dieses Beispiel zeigt unterschiedliche Werte für `text-overflow`, die auf einen Absatz angewendet werden, sowohl für links-nach-rechts als auch rechts-nach-links Text.

#### HTML

```html
<div class="ltr">
  <h2>Text von links nach rechts</h2>
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
  <h2>Text von rechts nach links</h2>
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

  /* Beide der folgenden sind für text-overflow erforderlich */
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

  /* Beide der folgenden sind für text-overflow erforderlich */
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
// Scrollen Sie jeden Absatz, damit auch der Anfang verborgen ist
const paras = document.querySelectorAll("p");

for (const para of paras) {
  para.scroll(100, 0);
}
```

#### Ergebnis

{{EmbedLiveSample('Two-value_syntax', 600, 360)}}

## Spezifikationen

{{Specifications}}

Eine frühere Version dieser Schnittstelle erreichte den Status _Candidate Recommendation_. Da einige nicht als riskant aufgelistete Features entfernt werden mussten, wurde die Spezifikation auf das Niveau _Working Draft_ herabgestuft, was erklärt, warum Browser diese Eigenschaft ohne Präfix implementierten, obwohl sie nicht im CR-Zustand war.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche in Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
