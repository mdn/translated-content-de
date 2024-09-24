---
title: font-display
slug: Web/CSS/@font-feature-values/font-display
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Der **`font-display`** Deskriptor für die {{cssxref("@font-feature-values")}} at-Regel legt den Standardwert fest, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen wird. Das Festlegen eines Werts für den `font-display` Deskriptor innerhalb eines `@font-feature-values` Blocks setzt den Standardwert des `font-display` Deskriptors für die {{cssxref("@font-face")}} at-Regel für alle Schriftarten mit demselben {{cssxref("@font-face/font-family", "font-family")}} Wert.

## Syntax

```css
/* Schlüsselwortwerte */
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
  - : Gibt dem Schriftschnitt eine kurze Blockperiode, im Allgemeinen etwa 3 Sekunden, und eine unendliche Tauschperiode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine unendliche Tauschperiode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Tauschperiode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und keine Tauschperiode.

## Beschreibung

Der `font-display` Deskriptor für `@font-feature-values` bestimmt die Schriftanzeige-Zeitlinie, indem er einen Standard-`font-display` Wert für `@font-face` für denselben `font-family` Namen festlegt. Wenn `font-display` im `@font-face` weggelassen wird, sucht der Benutzeragent zuerst nach dem `font-display` Wert, der über `@font-feature-values` für die relevante Schriftfamilie gesetzt wurde. Wenn kein Wert gefunden wird, verwendet der Benutzeragent den Wert `auto` für `font-display`, wobei der Benutzeragent die Schriftanzeigestrategie bestimmt.

Die Schriftanzeige-Zeitlinie basiert auf einem Timer, der startet, wenn der Benutzeragent versucht, einen bestimmten heruntergeladenen Schriftschnitt zu verwenden. Die Zeitlinie ist in drei Perioden unterteilt, wie unten aufgeführt. Diese Perioden bestimmen das Renderverhalten jedes Elements, das den Schriftschnitt verwendet.

- Schrift-**Block**periode: Wenn der Schriftschnitt nicht geladen ist, werden Elemente, die versuchen, den Schriftschnitt zu verwenden, mit einem _unsichtbaren_ Ersatzschriftschnitt gerendert. Der Browser blockt die sichtbare Textdarstellung und reserviert einen Platz für den anzuzeigenden Text basierend auf den Metriken des Ersatzschriftschnitts. Während der Blockperiode ist der Text nicht sichtbar. Am Ende der Blockperiode wird, wenn die Schrift nicht geladen ist, der Text im Ersatzschriftschnitt gerendert.

- Schrift-**Tausch**periode: Die Tauschperiode tritt nach der Blockperiode (falls vorhanden) ein, wenn der Schriftschnitt noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schrift zu verwenden, werden mit dem nächsten verfügbaren Ersatzschriftschnitt gerendert. Der vormals unsichtbare Ersatzschriftschnitt wird auf den Bildschirm gemalt. Wenn die Schrift während der Tauschperiode erfolgreich geladen wird, wird der in der Ersatzschrift gerenderte Text aktualisiert — oder getauscht — mit der neu geladenen Schrift. Dieser Schritt löst ein Neuzeichnen aus.

- Schrift-**Fehler**periode: Wenn der Schriftschnitt nicht geladen ist, bis die Tauschperiode abläuft oder bis die Blockperiode abläuft (wenn es keine Tauschperiode gibt, wie im Fall von `optional`), behandelt der Benutzeragent die Schrift als fehlgeschlagenen Ladevorgang. Infolgedessen wird der Inhalt in der Ersatzschrift sichtbar.

Der `font-display` Deskriptor erlaubt es Ihnen, eine Standardanzeigerichtlinie für alle `@font-face` Regeln festzulegen, einschließlich derjenigen, die nicht unter der Kontrolle des Autors stehen, wie Drittanbieter-`@font-face` Regeln. Wenn der `font-display` Wert über `@font-feature-values` festgelegt wird, wird er zum Standardwert `font-display` und auf die gesamte Schriftfamilie angewendet. Jedoch überschreibt jeder `font-display` Wert, der innerhalb einzelner `@font-face` Blöcke definiert ist, diesen Standard, aber nur für diejenigen Blöcke, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display` Deskriptor in diesem Beispiel setzt den Standard `font-display` Wert für die "Leitura"-Schrift auf `swap` für alle `@font-face` Blöcke. Nun könnte es mehrere `@font-face` Blöcke geben, die mehrere Schriftdateien für eine einzelne Schriftfamilie importieren. Wenn einer dieser `@font-face` Blöcke einen `font-display` Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke, die keinen `font-display` Deskriptor enthalten, verwenden statt des Standardwerts `auto` des Benutzeragenten den Wert `swap`.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

Es gibt keinen Browser, der dieses Feature implementiert.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor für {{cssxref("@font-face")}} at-Regel
- [CSS Fonts](/de/docs/Web/CSS/CSS_fonts) Modul
