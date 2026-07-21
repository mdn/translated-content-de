---
title: "`print-color-adjust` CSS property"
short-title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was, wenn überhaupt, der {{Glossary("user_agent", "User-Agent")}} tun darf, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren. Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er für notwendig und sinnvoll hält, je nach Art und Fähigkeiten des Ausgabegeräts.

## Syntax

```css
print-color-adjust: economy;
print-color-adjust: exact;

/* Global values */
print-color-adjust: inherit;
print-color-adjust: initial;
print-color-adjust: revert;
print-color-adjust: revert-layer;
print-color-adjust: unset;
```

### Werte

Diese Eigenschaft wird durch einen der folgenden Schlüsselwörterwerte spezifiziert:

- `economy`
  - : Der User-Agent darf Anpassungen am Element vornehmen, die er für geeignet und sinnvoll hält, um die Ausgabe für das Gerät zu optimieren, für das es gerendert wird.
    Zum Beispiel könnte ein Browser beim Drucken darauf verzichten, alle Hintergrundbilder anzuzeigen, und die Textfarben anpassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig so gestaltet, dass Farben, Bilder und Stile in einer durchdachten und/oder wichtigen Weise verwendet werden, sodass eine Änderung durch den Browser eher zu einer Verschlechterung als zu einer Verbesserung führen könnte.
    Das Erscheinungsbild des Inhalts sollte nur auf Benutzeranfrage geändert werden.
    Zum Beispiel könnte eine Seite eine Liste von Informationen enthalten, deren Zeilenhintergrundfarben zwischen Weiß und einem hellen Grau wechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Verwendungshinweise

Es gibt mehrere Gründe, warum ein Browser von der angegebenen Darstellung abweichen möchte, wie zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät zu ähnlich sind, um leserlich zu sein.
- Wenn das Ausgabegerät ein Drucker ist und um Tinte zu sparen, könnten dunkle oder extrem dichte Hintergrundbilder entfernt werden.
- Beim Drucken einer Seite möchte der Browser möglicherweise hellfarbigen Text auf einem dunklen Hintergrund durch dunklen Text auf einem weißen Hintergrund ersetzen.

Alle Optionen, die der User-Agent dem Benutzer bietet, um die Verwendung von Farbe und Bildern zu kontrollieren, haben Vorrang vor dem Wert von `print-color-adjust`.
Mit anderen Worten, es gibt keine Garantie, dass `print-color-adjust` etwas bewirkt.
Nicht nur kann der Benutzer das Verhalten überschreiben, sondern auch jeder User-Agent darf für sich selbst entscheiden, wie `print-color-adjust` in einer bestimmten Situation gehandhabt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erhaltung von geringem Kontrast

In diesem Beispiel wird ein Kasten gezeigt, der eine {{cssxref("background-image")}} und eine durchsichtige {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter einem mittleren roten Text zu haben.
Aus welchen Gründen auch immer, dies ist das gewünschte Erscheinungsbild in jeder Renderumgebung, einschließlich auf Papier, daher verwenden wir auch `print-color-adjust: exact`, um dem Browser zu sagen, dass er keine Farb- oder Stiländerungen am Kasten vornehmen soll, wenn er ihn rendert.

#### CSS

```css
.my-box {
  background-color: black;
  background-image: linear-gradient(rgb(0 0 180 / 50%), rgb(70 140 220 / 50%));
  color: #990000;
  width: 15rem;
  height: 6rem;
  text-align: center;
  font:
    24px "Helvetica",
    sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  print-color-adjust: exact;
}
```

#### HTML

```html
<div class="my-box">
  <p>Need more contrast!</p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("Preserving_low_contrast", 640, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
