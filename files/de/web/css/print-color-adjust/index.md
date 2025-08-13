---
title: print-color-adjust
slug: Web/CSS/print-color-adjust
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob und was der {{Glossary("user_agent", "User-Agent")}} tun darf, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren.
Standardmäßig ist der Browser berechtigt, jegliche Anpassungen am Erscheinungsbild des Elements vorzunehmen, die er angesichts des Typs und der Fähigkeiten des Ausgabegeräts für notwendig und sinnvoll hält.

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
  - : Der User-Agent darf Anpassungen am Element vornehmen, die er für geeignet und sinnvoll hält, um die Ausgabe für das Gerät, auf dem sie angezeigt wird, zu optimieren.
    Beispielsweise könnte ein Browser beim Drucken entscheiden, alle Hintergrundbilder wegzulassen und die Textfarben anzupassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist der Standard.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig gestaltet, um Farben, Bilder und Stile auf eine durchdachte und/oder wichtige Weise zu verwenden, sodass eine Änderung durch den Browser möglicherweise eher schädlich als nützlich wäre.
    Das Erscheinungsbild des Inhalts sollte nur auf Wunsch des Benutzers geändert werden.
    Zum Beispiel könnte eine Seite eine Liste von Informationen enthalten, bei der sich die Hintergrundfarben der Zeilen zwischen Weiß und einem hellen Grau abwechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Verwendungshinweise

Es gibt eine Reihe von Gründen, warum ein Browser von dem angegebenen Erscheinungsbild abweichen möchte, wie z.B.:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät für Lesbarkeitszwecke zu ähnlich sind.
- Wenn das Ausgabegerät ein Drucker ist, könnten dunkle oder extrem dichte Hintergrundbilder entfernt werden, um Tinte zu sparen.
- Beim Drucken einer Seite möchte der Browser möglicherweise hellen Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen.

Alle Optionen, die der User-Agent dem Benutzer anbietet, um die Verwendung von Farben und Bildern zu kontrollieren, haben Vorrang vor dem Wert von `print-color-adjust`.
Mit anderen Worten, es gibt keine Garantie, dass `print-color-adjust` irgendetwas bewirkt.
Nicht nur kann der Benutzer das Verhalten überschreiben, sondern jeder User-Agent darf selbst entscheiden, wie er `print-color-adjust` in jeder gegebenen Situation handhabt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Geringen Kontrast beibehalten

In diesem Beispiel wird ein Kasten gezeigt, der ein {{cssxref("background-image")}} und eine transparente {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter mittlerotem Text zu haben.
Aus welchem Grund auch immer, dies ist das gewünschte Erscheinungsbild in jeder Renderumgebung, einschließlich auf Papier, daher verwenden wir auch `print-color-adjust: exact`, um dem Browser zu sagen, dass er keine Farb- oder Stiländerungen am Kasten vornehmen soll, wenn er ihn rendert.

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
