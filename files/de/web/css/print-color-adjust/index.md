---
title: print-color-adjust
slug: Web/CSS/print-color-adjust
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`print-color-adjust`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, was, wenn überhaupt, der {{Glossary("user_agent", "User-Agent")}} tun kann, um das Aussehen des Elements auf dem Ausgabegerät zu optimieren.
Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er in Anbetracht des Typs und der Fähigkeiten des Ausgabegeräts als notwendig und angemessen erachtet.

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
  - : Der User-Agent darf Anpassungen am Element vornehmen, die er als angemessen erachtet, um die Ausgabe für das Gerät, auf dem es gerendert wird, zu optimieren.
    Zum Beispiel kann ein Browser beim Drucken beschließen, alle Hintergrundbilder wegzulassen und die Textfarben anzupassen, um sicherzustellen, dass der Kontrast für das Lesen auf weißem Papier optimiert ist.
    Dies ist der Standard.
- `exact`
  - : Der Inhalt des Elements wurde speziell und sorgfältig entworfen, um Farben, Bilder und Stile auf eine durchdachte und/oder wichtige Weise zu verwenden, sodass eine Änderung durch den Browser die Dinge möglicherweise eher verschlechtern als verbessern würde.
    Das Aussehen des Inhalts sollte nur auf Wunsch des Benutzers geändert werden.
    Zum Beispiel könnte eine Seite eine Liste von Informationen enthalten, deren Zeilen sich in der Hintergrundfarbe zwischen weiß und hellgrau abwechseln.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts verringern.

## Anwendungshinweise

Es gibt eine Reihe von Gründen, warum ein Browser von der festgelegten Darstellung abweichen möchte, wie zum Beispiel:

- Der Inhalt verwendet Text- und Hintergrundfarben, die auf dem Ausgabegerät aus Lesbarkeitsgründen zu ähnlich sein werden.
- Wenn das Ausgabegerät ein Drucker ist und um Tinte zu sparen, könnten dunkle oder extrem dichte Hintergrundbilder entfernt werden.
- Beim Drucken einer Seite möchte der Browser vielleicht hellen Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen.

Alle vom User-Agent angebotenen Optionen, die dem Benutzer die Kontrolle über die Verwendung von Farben und Bildern ermöglichen, haben Vorrang vor dem Wert von `print-color-adjust`.
Mit anderen Worten, es gibt keine Garantie, dass `print-color-adjust` irgendetwas bewirkt.
Nicht nur kann der Benutzer das Verhalten überschreiben, sondern jeder User-Agent darf selbst entscheiden, wie `print-color-adjust` in einer gegebenen Situation gehandhabt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Geringen Kontrast beibehalten

In diesem Beispiel wird eine Box gezeigt, die ein {{cssxref("background-image")}} und eine durchscheinende {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Verlauf hinter mittlerotem Text zu haben.
Aus welchem Grund auch immer, dies ist das gewünschte Erscheinungsbild in jeder Rendering-Umgebung, einschließlich auf Papier. Daher verwenden wir auch `print-color-adjust: exact`, um dem Browser mitzuteilen, dass keine Farb- oder Stiländerungen an der Box vorgenommen werden sollen, wenn sie gerendert wird.

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
