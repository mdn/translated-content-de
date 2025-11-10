---
title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was der {{Glossary("user_agent", "User Agent")}} möglicherweise tun darf, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren. Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er für notwendig und vernünftig hält, basierend auf der Art und den Fähigkeiten des Ausgabegeräts.

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

Der Wert der `print-color-adjust` Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `economy`
  - : Der User Agent darf Anpassungen am Element vornehmen, die er für angemessen und vernünftig hält, um die Ausgabe für das Gerät, auf dem sie dargestellt wird, zu optimieren.
    Zum Beispiel könnte ein Browser beim Drucken alle Hintergrundbilder weglassen und die Textfarben anpassen, um sicherzustellen, dass der Kontrast zum Lesen auf weißem Papier optimiert ist.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig erstellt, um Farben, Bilder und Stile auf eine durchdachte und/oder wichtige Weise zu verwenden, sodass eine Veränderung durch den Browser die Situation eher verschlechtern als verbessern könnte.
    Das Erscheinungsbild des Inhalts sollte nicht verändert werden, außer auf Wunsch des Benutzers.
    Zum Beispiel könnte eine Seite eine Liste von Informationen enthalten, bei der sich die Hintergrundfarben der Zeilen zwischen weiß und hellgrau abwechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Nutzungshinweise

Es gibt eine Reihe von Gründen, warum ein Browser vom angegebenen Erscheinungsbild abweichen möchte, wie zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät für Lesbarkeitszwecke zu ähnlich sind.
- Wenn das Ausgabegerät ein Drucker ist, könnten zur Einsparung von Tinte dunkle oder extrem dichte Hintergrundbilder entfernt werden.
- Beim Drucken einer Seite möchte der Browser möglicherweise hellen Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen.

Alle Optionen, die der User Agent dem Benutzer zur Verfügung stellt, um die Verwendung von Farben und Bildern zu steuern, haben Vorrang vor dem Wert von `print-color-adjust`. Mit anderen Worten, es gibt keine Garantie, dass `print-color-adjust` irgendetwas bewirken wird. Nicht nur kann der Benutzer das Verhalten überschreiben, sondern jeder User Agent kann selbst entscheiden, wie er `print-color-adjust` in einer gegebenen Situation behandelt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Niedrigen Kontrast beibehalten

In diesem Beispiel wird eine Box gezeigt, die eine {{cssxref("background-image")}} und eine durchscheinende {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion über einer schwarzen Hintergrundfarbe nutzt, um einen dunkelblauen Verlauf hinter mittelrotem Text anzuzeigen. Aus welchem Grund auch immer, ist dies das gewünschte Erscheinungsbild in jeder Rendering-Umgebung, einschließlich auf Papier, sodass wir auch `print-color-adjust: exact` verwenden, um dem Browser mitzuteilen, dass er beim Rendern keine Farb- oder Stiländerungen an der Box vornehmen soll.

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
