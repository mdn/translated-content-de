---
title: "`print-color-adjust` CSS property"
short-title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was der {{Glossary("user_agent", "User-Agent")}} eventuell tun darf, um das Erscheinungsbild des Elements auf dem Ausgabegerät zu optimieren.
Standardmäßig ist es dem Browser erlaubt, Anpassungen am Erscheinungsbild des Elements vorzunehmen, die er als notwendig und sinnvoll erachtet, basierend auf dem Typ und den Fähigkeiten des Ausgabegeräts.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwort-Werte angegeben:

- `economy`
  - : Dem User-Agent ist es erlaubt, Anpassungen am Element vorzunehmen, die er für geeignet und sinnvoll erachtet, um die Ausgabe für das Gerät zu optimieren, auf dem es dargestellt wird.
    Zum Beispiel könnte ein Browser beim Drucken alle Hintergrundbilder weglassen und Textfarben anpassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig mit Farben, Bildern und Stilen gestaltet, sodass eine Anpassung durch den Browser die Dinge möglicherweise verschlechtern würde.
    Das Erscheinungsbild des Inhalts sollte nur auf Wunsch des Nutzers geändert werden.
    Zum Beispiel könnte eine Seite eine Liste von Informationen enthalten, deren Zeilen abwechselnd weiße und hellgraue Hintergrundfarben haben.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Anwendungshinweise

Es gibt eine Reihe von Gründen, warum ein Browser von der angegebenen Darstellung abweichen möchte, wie zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät für Lesbarkeitszwecke zu ähnlich sind.
- Wenn das Ausgabegerät ein Drucker ist und um Tinte zu sparen, könnten dunkle oder extrem dichte Hintergrundbilder entfernt werden.
- Beim Drucken einer Seite möchte der Browser möglicherweise hellen Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen.

Alle Optionen, die der User-Agent dem Benutzer bietet, um die Verwendung von Farben und Bildern zu steuern, haben Vorrang vor dem Wert von `print-color-adjust`.
Mit anderen Worten, es gibt keine Garantie, dass `print-color-adjust` irgendetwas bewirkt.
Der Benutzer kann nicht nur das Verhalten überschreiben, sondern jeder User-Agent darf selbst entscheiden, wie er `print-color-adjust` in einer gegebenen Situation behandelt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erhaltung von geringem Kontrast

In diesem Beispiel wird ein Kasten gezeigt, der ein {{cssxref("background-image")}} und eine durchscheinende {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter einem mittleren roten Text zu erzeugen.
Aus welchem Grund auch immer, dies ist das gewünschte Erscheinungsbild in jeder Wiedergabeumgebung, einschließlich auf Papier, daher verwenden wir auch `print-color-adjust: exact`, um dem Browser mitzuteilen, keine Farb- oder Stiländerungen am Kasten vorzunehmen, wenn er ihn rendert.

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

- Andere Farb-bezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
