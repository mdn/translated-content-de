---
title: font-display
slug: Web/CSS/@font-feature-values/font-display
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`font-display`** Deskriptor für die {{cssxref("@font-feature-values")}} Regel legt den Standardwert fest, wie ein Schriftbild angezeigt wird, basierend darauf, ob und wann es heruntergeladen wird. Das Setzen eines Wertes für den `font-display` Deskriptor innerhalb eines `@font-feature-values` Blocks setzt den Standardwert des `font-display` Deskriptors für die {{cssxref("@font-face")}} Regel für alle Schriften mit demselben {{cssxref("@font-face/font-family", "font-family")}} Wert.

## Syntax

```css
/* Keyword values */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Werte

- `auto`
  - : Die Schriftanzeigestrategie wird durch den Benutzeragenten definiert.
- `block`
  - : Gibt dem Schriftbild eine kurze Blockierungsperiode, in der Regel etwa 3 Sekunden, und eine unendliche Tauschperiode.
- `swap`
  - : Gibt dem Schriftbild eine extrem kurze Blockierungsperiode und eine unendliche Tauschperiode.
- `fallback`
  - : Gibt dem Schriftbild eine extrem kurze Blockierungsperiode und eine kurze Tauschperiode.
- `optional`
  - : Gibt dem Schriftbild eine extrem kurze Blockierungsperiode und keine Tauschperiode.

## Beschreibung

Der `font-display` Deskriptor für `@font-feature-values` bestimmt die Schriftanzeige-Zeitachse; er tut dies, indem er einen Standardwert für `font-display` für `@font-face` für denselben `font-family` Namen festlegt. Wenn `font-display` in `@font-face` weggelassen wird, sucht der Benutzeragent zuerst nach dem `font-display` Wert, der über `@font-feature-values` für die betreffende Schriftfamilie gesetzt wurde. Wenn kein Wert gefunden wird, verwendet der Benutzeragent den Wert `auto` für `font-display`, wobei der Benutzeragent die Schriftanzeigestrategie bestimmt.

Die Schriftanzeige-Zeitachse basiert auf einem Timer, der startet, wenn der Benutzeragent versucht, ein bestimmtes heruntergeladenes Schriftbild zu verwenden. Die Zeitachse ist in drei Perioden unterteilt, wie unten aufgeführt. Diese Perioden bestimmen das Darstellungsverhalten eines jeden Elements, das das Schriftbild verwendet.

- Schrift **Blockierungsperiode**: Wenn das Schriftbild nicht geladen ist, werden Elemente, die versuchen, die Schrift zu verwenden, mit einer _unsichtbaren_ Ersatzschrift gerendert. Der Browser blockiert das sichtbare Textrendering und reserviert einen Platz für den anzuzeigenden Text basierend auf den Metriken der Ersatzschrift. Während der Blockierungsperiode ist der Text nicht sichtbar. Am Ende der Blockierungsperiode, falls die Schrift nicht geladen wurde, wird der Text in der Ersatzschrift gerendert.

- Schrift **Tauschperiode**: Die Tauschperiode erfolgt nach der Blockierungsperiode (falls vorhanden) und wenn das Schriftbild noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schrift zu verwenden, werden mit der nächstverfügbaren Ersatzschrift gerendert. Die vormals unsichtbare Ersatzschrift wird auf dem Bildschirm dargestellt. Wenn die Schrift während der Tauschperiode erfolgreich geladen wird, wird der zuvor in der Ersatzschrift gerenderte Text aktualisiert — oder ausgetauscht — mit der neu geladenen Schrift. Dieser Schritt löst ein Neuzeichnen aus.

- Schrift **Fehlerperiode**: Wenn das Schriftbild nicht geladen wurde, bis die Tauschperiode oder die Blockierungsperiode (falls keine Tauschperiode vorhanden ist, wie es bei `optional` der Fall ist) abläuft, behandelt der Benutzeragent die Schrift als fehlgeschlagen. Das Ergebnis ist, dass der Inhalt in der Ersatzschrift sichtbar wird.

Der `font-display` Deskriptor ermöglicht es Ihnen, eine Standardanzeigepolitik für alle `@font-face` Regeln festzulegen, einschließlich solcher, die nicht unter der Kontrolle des Autors stehen, wie z.B. Drittanbieter-`@font-face` Regeln. Wenn der `font-display` Wert über `@font-feature-values` gesetzt wird, wird er zum Standardwert für `font-display` und wird auf die gesamte Schriftfamilie angewendet. Jedoch wird jeder `font-display` Wert, der innerhalb individueller `@font-face` Blöcke definiert ist, diesen Standardwert überschreiben, jedoch nur für jene Blöcke, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display` Deskriptor in diesem Beispiel setzt den Standardwert von `font-display` für die "Leitura" Schrift auf `swap` für alle `@font-face` Blöcke. Es könnten mehrere `@font-face` Blöcke vorhanden sein, die mehrere Schriftdateien für eine einzelne Schriftfamilie importieren. Wenn einer dieser `@font-face` Blöcke einen `font-display` Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke, die keinen `font-display` Deskriptor enthalten, verwenden standardmäßig `swap` anstelle des Standardwerts `auto` des Benutzeragenten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor für {{cssxref("@font-face")}} Regel
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
