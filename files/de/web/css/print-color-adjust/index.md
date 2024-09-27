---
title: print-color-adjust
slug: Web/CSS/print-color-adjust
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`print-color-adjust`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, was, wenn überhaupt, der [User-Agent](/de/docs/Glossary/user_agent) tun darf, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren.
Standardmäßig darf der Browser jede Anpassung am Erscheinungsbild des Elements vornehmen, die er angesichts des Typs und der Fähigkeiten des Ausgabegeräts für notwendig und sinnvoll erachtet.

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
  - : Der User-Agent darf Anpassungen am Element vornehmen, soweit er es für angemessen und sinnvoll hält, um die Ausgabe für das Gerät zu optimieren, für das es gerendert wird.
    Beispielsweise könnte ein Browser beim Drucken entscheiden, alle Hintergrundbilder wegzulassen und die Textfarben anzupassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig gestaltet, um Farben, Bilder und Stile auf durchdachte und/oder wichtige Weise zu verwenden, wodurch Änderungen durch den Browser die Dinge verschlechtern könnten.
    Das Erscheinungsbild des Inhalts sollte nur auf Wunsch des Benutzers geändert werden.
    Beispielsweise könnte eine Seite eine Informationsliste mit Zeilen enthalten, deren Hintergrundfarben zwischen weiß und hellgrau wechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts vermindern.

## Nutzungshinweise

Es gibt eine Reihe von Gründen, warum ein Browser vom angegebenen Erscheinungsbild abweichen möchte, zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät für Lesbarkeitszwecke zu ähnlich sein könnten.
- Wenn das Ausgabegerät ein Drucker ist, könnten dunkle oder extrem dichte Hintergrundbilder entfernt werden, um Tinte zu sparen.
- Beim Drucken einer Seite könnte der Browser hell gefärbten Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen wollen.

Alle Optionen, die der User-Agent dem Benutzer anbietet, um die Verwendung von Farben und Bildern zu steuern, haben Vorrang vor dem Wert von `print-color-adjust`.
Mit anderen Worten, es gibt keine Garantie, dass `print-color-adjust` irgendetwas bewirkt.
Nicht nur kann der Benutzer das Verhalten außer Kraft setzen, jeder User-Agent darf selbst entscheiden, wie `print-color-adjust` in einer gegebenen Situation gehandhabt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beibehaltung von niedrigem Kontrast

In diesem Beispiel wird ein Kasten gezeigt, der ein {{cssxref("background-image")}} und eine durchscheinende {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter mittlerotem Text zu haben.
Aus welchen Gründen auch immer, dies ist das gewünschte Erscheinungsbild in jeder Rendering-Umgebung, einschließlich auf Papier. Daher nutzen wir auch `print-color-adjust: exact`, um dem Browser mitzuteilen, dass keine Farb- oder Stiländerungen am Kasten vorgenommen werden sollen, wenn er gerendert wird.

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

- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
