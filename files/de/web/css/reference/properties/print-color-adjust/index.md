---
title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was der {{Glossary("user_agent", "User-Agent")}} tun darf, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren.
Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er für notwendig und sinnvoll hält, abhängig von Typ und Fähigkeiten des Ausgabegeräts.

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
  - : Dem User-Agent ist erlaubt, Anpassungen am Element vorzunehmen, die er für angemessen und sinnvoll hält, um die Ausgabe für das Gerät, auf dem es gerendert wird, zu optimieren.
    Beispielsweise könnte ein Browser beim Drucken darauf verzichten, alle Hintergrundbilder darzustellen, und Textfarben anpassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist die Standardeinstellung.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig gestaltet, um Farben, Bilder und Stile überlegt und/oder wichtig zu verwenden, sodass eine Veränderung durch den Browser die Situation verschlechtern könnte.
    Das Erscheinungsbild des Inhalts sollte nur auf Anfrage des Benutzers verändert werden.
    Ein Beispiel wäre eine Seite, die eine Liste von Informationen enthält, bei der sich die Hintergrundfarben der Zeilen zwischen Weiß und Hellgrau abwechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Hinweise zur Verwendung

Es gibt mehrere Gründe, aus denen ein Browser vom spezifizierten Erscheinungsbild abweichen möchte, wie zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät zu ähnlich sein könnten, um die Lesbarkeit zu gewährleisten.
- Wenn das Ausgabegerät ein Drucker ist, könnten zur Einsparung von Tinte dunkle oder extrem dichte Hintergrundbilder entfernt werden.
- Beim Drucken einer Seite könnte der Browser hellen Text auf dunklem Hintergrund mit dunklem Text auf weißem Hintergrund ersetzen wollen.

Alle Optionen, die der User-Agent dem Benutzer anbietet, um die Verwendung von Farbe und Bildern zu steuern, haben Vorrang vor dem Wert von `print-color-adjust`.
Das bedeutet, dass es keine Garantie gibt, dass `print-color-adjust` etwas bewirkt.
Nicht nur kann der Benutzer das Verhalten überschreiben, sondern jeder User-Agent darf selbst entscheiden, wie er `print-color-adjust` in jeder gegebenen Situation handhabt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erhaltung von geringem Kontrast

In diesem Beispiel wird ein Kasten gezeigt, der ein {{cssxref("background-image")}} und eine transparente {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter mittelrotem Text zu erzeugen.
Aus welchen Gründen auch immer, dies ist das gewünschte Erscheinungsbild in jeder Rendering-Umgebung, einschließlich auf Papier. Daher verwenden wir auch `print-color-adjust: exact`, um dem Browser zu signalisieren, keine Farb- oder Stiländerungen am Kasten beim Rendern vorzunehmen.

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

- Weitere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
