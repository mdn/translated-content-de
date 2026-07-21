---
title: "`text-overflow` CSS property"
short-title: text-overflow
slug: Web/CSS/Reference/Properties/text-overflow
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`text-overflow`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie versteckter Überlauf-Inhalt den Nutzern signalisiert wird.

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
  - : Der Standard für diese Eigenschaft. Dieser Schlüsselwortwert wird den Text am Rand des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) abschneiden, daher kann die Trunkierung mitten in einem Zeichen erfolgen. Um am Übergang zwischen Zeichen abzuschneiden, können Sie `text-overflow` als leeren String angeben, falls dies in den angestrebten Browsern unterstützt wird: `text-overflow: '';`.
- `ellipsis`
  - : Dieser Schlüsselwortwert zeigt eine Ellipse (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) an, um abgeschnittenen Text darzustellen. Die Ellipse wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt, wodurch die Menge des angezeigten Textes verringert wird. Wenn nicht genug Platz vorhanden ist, um die Ellipse anzuzeigen, wird sie abgeschnitten.
- `<string>`
  - : Der {{cssxref("&lt;string&gt;")}}, der verwendet wird, um abgeschnittenen Text darzustellen. Der String wird innerhalb des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction) angezeigt und verkürzt die Größe des angezeigten Textes. Wenn nicht genug Platz vorhanden ist, um den String selbst anzuzeigen, wird er abgeschnitten.

## Beschreibung

Die `text-overflow`-Eigenschaft legt fest, wie versteckter Überlauf-Inhalt den Nutzern signalisiert wird. Es kann abgeschnitten, eine Ellipse (`…`) angezeigt oder ein benutzerdefinierter String angezeigt werden.

Die `text-overflow`-Eigenschaft erzwingt keinen Überlauf. Um Text dazu zu bringen, über seinen Container hinauszugehen, müssen Sie andere CSS-Eigenschaften festlegen: {{cssxref("overflow")}} und {{cssxref("white-space")}}. Zum Beispiel:

```css
overflow: hidden;
white-space: nowrap;
```

Die `text-overflow`-Eigenschaft betrifft nur Inhalte, die in ihrer _inline_ Fortschrittsrichtung einen Blockcontainer-Element überlaufen (nicht Text, der am unteren Rand eines Kastens überläuft, zum Beispiel).

Die `text-overflow`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben ist, gibt er das Überlaufverhalten für das Ende der Zeile an (das rechte Ende für links-nach-rechts Text, das linke Ende für rechts-nach-links Text). Wenn zwei Werte angegeben sind, gibt der erste das Überlaufverhalten für das linke Ende der Zeile an, und der zweite für das rechte Ende der Zeile. Die Eigenschaft akzeptiert entweder einen Schlüsselwortwert (`clip` oder `ellipsis`) oder einen `<string>`-Wert.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein-Wert-Syntax

Dieses Beispiel zeigt verschiedene Werte für `text-overflow`, die auf einen Absatz angewendet werden, für links-nach-rechts und rechts-nach-links Text.

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

Dieses Beispiel zeigt die Zwei-Wert-Syntax für `text-overflow`, bei der Sie unterschiedliches Überlaufverhalten für den Anfang und das Ende des Textes definieren können. Um den Effekt zu zeigen, müssen wir die Zeile scrollen, sodass der Anfang der Zeile ebenfalls verborgen ist.

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

Eine frühere Version dieser Schnittstelle erreichte den Status _Candidate Recommendation_. Da einige nicht-aufgelistete-als-riskant Funktionen entfernt werden mussten, wurde die Spezifikation auf die Stufe _Working Draft_ zurückgestuft, was erklärt, warum Browser diese Eigenschaft ohne Präfix implementiert haben, jedoch nicht im CR-Zustand.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS-Eigenschaften, die Zeilenumbrüche in Wörtern steuern: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
