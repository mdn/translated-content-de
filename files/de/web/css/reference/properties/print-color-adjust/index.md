---
title: "`print-color-adjust` CSS property"
short-title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, welche Maßnahmen der {{Glossary("user_agent", "User Agent")}} zur Optimierung des Erscheinungsbilds des Elements auf dem Ausgabegerät ergreifen darf, falls überhaupt.
Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er für notwendig und sinnvoll erachtet, basierend auf dem Typ und den Fähigkeiten des Ausgabegeräts.

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

Der Wert der Eigenschaft `print-color-adjust` muss eines der folgenden Schlüsselwörter sein.

### Werte

- `economy`
  - : Der User Agent darf Anpassungen am Element vornehmen, die er für geeignet und sinnvoll erachtet, um die Ausgabe für das Gerät, auf dem die Darstellung erfolgt, zu optimieren.
    Beispielsweise könnte ein Browser beim Drucken darauf verzichten, alle Hintergrundbilder anzuzeigen, und die Textfarben anpassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert wird.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig gestaltet, um Farben, Bilder und Stile auf eine durchdachte und/oder wichtige Weise zu verwenden, so dass Änderungen durch den Browser die Dinge eher verschlechtern als verbessern könnten.
    Das Erscheinungsbild des Inhalts sollte nur auf Wunsch des Benutzers geändert werden.
    Beispielsweise könnte eine Seite eine Liste mit Informationen enthalten, bei der sich die Hintergrundfarben der Zeilen zwischen Weiß und einem hellen Grau abwechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Verwendungshinweise

Es gibt eine Reihe von Gründen, warum ein Browser von der angegebenen Darstellung abweichen möchte, wie zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät zu ähnlich sind, um die Lesbarkeit zu gewährleisten.
- Wenn das Ausgabegerät ein Drucker ist, und um Tinte zu sparen, könnten dunkle oder extrem dichte Hintergrundbilder entfernt werden.
- Wenn eine Seite gedruckt wird, möchte der Browser eventuell hellen Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen.

Jede Option, die der User Agent dem Benutzer bietet, um die Verwendung von Farbe und Bildern zu steuern, hat Priorität über den Wert von `print-color-adjust`.
Das bedeutet, dass es keine Garantie dafür gibt, dass `print-color-adjust` etwas bewirken wird.
Nicht nur kann der Benutzer das Verhalten überschreiben, sondern jeder User Agent darf selbst entscheiden, wie er `print-color-adjust` in einer bestimmten Situation handhabt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erhaltung von geringem Kontrast

In diesem Beispiel wird eine Box gezeigt, die ein {{cssxref("background-image")}} und eine durchsichtige {{cssxref("gradient/linear-gradient", "linear-gradient()")}}-Funktion auf einem schwarzen Hintergrund verwendet, um einen dunkelblauen Verlauf hinter einem mittelroten Text darzustellen.
Aus welchem Grund auch immer, dies ist das gewünschte Erscheinungsbild in jeder Darstellung, einschließlich auf Papier. Daher verwenden wir `print-color-adjust: exact`, um dem Browser mitzuteilen, keine Farb- oder Stiländerungen an der Box vorzunehmen, wenn sie gerendert wird.

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

- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
