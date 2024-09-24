---
title: print-color-adjust
slug: Web/CSS/print-color-adjust
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was der {{Glossary("user agent")}}, falls überhaupt, unternehmen kann, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren. Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er in Anbetracht der Art und Fähigkeiten des Ausgabegeräts für notwendig und sinnvoll erachtet.

## Syntax

```css
print-color-adjust: economy;
print-color-adjust: exact;

/* Globale Werte */
print-color-adjust: inherit;
print-color-adjust: initial;
print-color-adjust: revert;
print-color-adjust: revert-layer;
print-color-adjust: unset;
```

Der Wert der `print-color-adjust` Eigenschaft muss eines der folgenden Schlüsselwörter sein.

### Werte

- `economy`
  - : Dem User-Agent ist es erlaubt, Anpassungen am Element vorzunehmen, die für eine Optimierung der Ausgabe auf dem jeweils verwendeten Gerät als geeignet und sinnvoll erachtet werden.
    Zum Beispiel könnte ein Browser beim Drucken alle Hintergrundbilder weglassen und die Textfarben so anpassen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde spezifisch und sorgfältig gestaltet, um Farben, Bilder und Stile auf eine durchdachte und/oder wichtige Weise zu verwenden, sodass eine Änderung durch den Browser die Situation eher verschlechtern als verbessern könnte.
    Das Erscheinungsbild des Inhalts sollte nur auf Wunsch des Benutzers geändert werden.
    Zum Beispiel könnte eine Seite eine Liste mit Informationen enthalten, deren Hintergrundfarben der Zeilen zwischen Weiß und einem hellen Grau alternieren.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Anwendungshinweise

Es gibt mehrere Gründe, warum ein Browser von dem spezifizierten Aussehen abweichen möchte, wie z.B.:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät zu ähnlich sind, um ausreichend lesbar zu sein.
- Wenn es sich bei dem Ausgabegerät um einen Drucker handelt, könnten zur Einsparung von Tinte dunkle oder sehr dichte Hintergrundbilder entfernt werden.
- Beim Drucken einer Seite könnte der Browser hellen Text auf einem dunklen Hintergrund durch dunklen Text auf einem weißen Hintergrund ersetzen wollen.

Alle Optionen, die der User-Agent dem Benutzer bietet, um die Verwendung von Farben und Bildern zu steuern, haben Vorrang vor dem Wert von `print-color-adjust`. Mit anderen Worten, es gibt keine Garantie dafür, dass `print-color-adjust` irgendetwas bewirkt. Nicht nur kann der Benutzer das Verhalten überschreiben, sondern jeder User-Agent kann selbst entscheiden, wie er `print-color-adjust` in jeder gegebenen Situation handhabt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Geringen Kontrast erhalten

In diesem Beispiel wird ein Kasten gezeigt, der eine {{cssxref("background-image")}} und eine durchsichtige {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion auf einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter mittlerotem Text zu haben. Aus welchem Grund auch immer, dies ist das gewünschte Erscheinungsbild in jeder Rendering-Umgebung, einschließlich Papier, daher verwenden wir auch `print-color-adjust: exact`, um dem Browser mitzuteilen, keine Farb- oder Stiländerungen an dem Kasten vorzunehmen, wenn er ihn rendert.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
