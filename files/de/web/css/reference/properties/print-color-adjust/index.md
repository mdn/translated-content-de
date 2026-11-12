---
title: "`print-color-adjust` CSS property"
short-title: print-color-adjust
slug: Web/CSS/Reference/Properties/print-color-adjust
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`print-color-adjust`** legt fest, ob und wie der {{Glossary("user_agent", "User Agent")}} das Erscheinungsbild eines Elements für das Ausgabegerät optimieren darf.
Standardmäßig darf der Browser alle Anpassungen am Erscheinungsbild des Elements vornehmen, die er angesichts der Art und der Möglichkeiten des Ausgabegeräts für notwendig und sinnvoll hält.

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

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `economy`
  - : Der User Agent darf das Element nach eigenem Ermessen anpassen, um die Ausgabe für das jeweilige Ausgabegerät zu optimieren.
    Beim Drucken könnte ein Browser beispielsweise alle Hintergrundbilder weglassen und Textfarben anpassen, um einen gut lesbaren Kontrast auf weißem Papier sicherzustellen.
    Dies ist der Standardwert.
- `exact`
  - : Der Inhalt des Elements wurde gezielt und sorgfältig gestaltet, sodass Farben, Bilder und Stile eine durchdachte und/oder wichtige Funktion erfüllen. Änderungen durch den Browser könnten daher mehr schaden als nützen.
    Das Erscheinungsbild des Inhalts sollte nur auf Wunsch der Benutzerin oder des Benutzers geändert werden.
    Eine Seite könnte beispielsweise eine Liste mit Zeilen enthalten, deren Hintergrundfarben abwechselnd weiß und hellgrau sind.
    Das Entfernen der Hintergrundfarbe würde die Lesbarkeit des Inhalts beeinträchtigen.

## Hinweise zur Verwendung

Es gibt verschiedene Gründe, weshalb ein Browser vom festgelegten Erscheinungsbild abweichen könnte, zum Beispiel:

- Die Text- und Hintergrundfarben des Inhalts sind auf dem Ausgabegerät zu ähnlich, um gut lesbar zu sein.
- Wenn das Ausgabegerät ein Drucker ist, könnten dunkle oder sehr dichte Hintergrundbilder entfernt werden, um Tinte zu sparen.
- Beim Drucken einer Seite könnte der Browser hellen Text auf dunklem Hintergrund durch dunklen Text auf weißem Hintergrund ersetzen.

Einstellungen, die der User Agent den Benutzerinnen und Benutzern zur Steuerung der Verwendung von Farben und Bildern anbietet, haben Vorrang vor dem Wert von `print-color-adjust`.
Mit anderen Worten: Es gibt keine Garantie, dass `print-color-adjust` eine Wirkung hat.
Benutzerinnen und Benutzer können das Verhalten nicht nur überschreiben; jeder User Agent darf außerdem selbst entscheiden, wie er `print-color-adjust` in einer bestimmten Situation behandelt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Geringen Kontrast beibehalten

In diesem Beispiel wird eine Box gezeigt, die ein {{cssxref("background-image")}} und eine transparente {{cssxref("gradient/linear-gradient", "linear-gradient()")}}-Funktion über einer schwarzen Hintergrundfarbe verwendet, um einen dunkelblauen Farbverlauf hinter mittelrotem Text zu erzeugen.
Dieses Erscheinungsbild soll aus bestimmten Gründen in jeder Ausgabeumgebung erhalten bleiben, auch auf Papier. Deshalb verwenden wir zusätzlich `print-color-adjust: exact`, um den Browser anzuweisen, beim Ausgeben der Box keine Farb- oder Stilanpassungen vorzunehmen.

#### HTML

```html
<div class="my-box">
  <p>Need more contrast!</p>
</div>
```

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

#### Ergebnis

{{EmbedLiveSample("Preserving_low_contrast", 640, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
