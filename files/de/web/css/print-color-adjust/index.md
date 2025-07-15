---
title: print-color-adjust
slug: Web/CSS/print-color-adjust
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, was, wenn überhaupt, der {{Glossary("user_agent", "User-Agent")}} tun kann, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren.
Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er angesichts des Typs und der Fähigkeiten des Ausgabegeräts für notwendig und angemessen hält.

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

Der Wert der `print-color-adjust`-Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `economy`
  - : Der User-Agent darf Anpassungen am Element vornehmen, die er für geeignet und angemessen hält, um die Ausgabe für das Gerät, auf dem es gerendert wird, zu optimieren.
    Beispielsweise könnte ein Browser beim Drucken alle Hintergrundbilder weglassen und die Textfarben anpassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig gestaltet, um Farben, Bilder und Stile auf durchdachte und/oder wichtige Weise zu verwenden, sodass eine Änderung durch den Browser die Dinge tatsächlich verschlechtern könnte.
    Das Erscheinungsbild des Inhalts sollte nicht geändert werden, außer auf Wunsch des Benutzers.
    Zum Beispiel könnte eine Seite eine Liste von Informationen enthalten, bei der sich die Hintergrundfarben der Zeilen zwischen Weiß und einem hellen Grau abwechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts vermindern.

## Anwendungsnotizen

Es gibt mehrere Gründe, warum ein Browser von dem spezifizierten Erscheinungsbild abweichen möchte, wie zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät für Lesbarkeitszwecke zu ähnlich sein werden.
- Wenn das Ausgabegerät ein Drucker ist, könnten zur Einsparung von Tinte dunkle oder extrem dichte Hintergrundbilder entfernt werden.
- Beim Drucken einer Seite könnte der Browser hellen Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen wollen.

Jegliche Optionen, die der User-Agent dem Benutzer bietet, um die Verwendung von Farben und Bildern zu steuern, haben Vorrang vor dem Wert von `print-color-adjust`.
Mit anderen Worten, es gibt keine Garantie, dass `print-color-adjust` überhaupt etwas bewirken wird.
Nicht nur kann der Benutzer das Verhalten überschreiben, sondern jeder User-Agent darf selbst entscheiden, wie er `print-color-adjust` in jeder gegebenen Situation behandelt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Geringe Kontraste bewahren

In diesem Beispiel wird eine Box gezeigt, die ein {{cssxref("background-image")}} und eine durchsichtige {{cssxref("gradient/linear-gradient", "linear-gradient()")}}-Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter mittelrotem Text zu haben.
Aus welchen Gründen auch immer, dies ist das gewünschte Erscheinungsbild in jeder Renderumgebung, einschließlich auf Papier. Daher verwenden wir auch `print-color-adjust: exact`, um dem Browser mitzuteilen, dass er keine Farb- oder Stiländerungen an der Box beim Rendern vornehmen soll.

#### CSS

```css
.my-box {
  background-color: black;
  background-image: linear-gradient(rgb(0 0 180 / 50%), rgb(70 140 220 / 50%));
  color: #900;
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
