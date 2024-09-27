---
title: font-display
slug: Web/CSS/@font-feature-values/font-display
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Der **`font-display`** Deskriptor für die {{cssxref("@font-feature-values")}} At-Regel setzt den Standardwert dafür, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen wird. Ein Wert für den `font-display` Deskriptor innerhalb eines `@font-feature-values` Blocks legt den Standardwert des `font-display` Deskriptors für die {{cssxref("@font-face")}} At-Regel für alle Schriften mit dem gleichen {{cssxref("@font-face/font-family", "font-family")}} Wert fest.

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
  - : Die Strategie zur Schriftanzeige wird durch den Benutzeragenten definiert.
- `block`
  - : Gibt der Schriftart eine kurze Blockierungsperiode, in der Regel etwa 3 Sekunden, und eine unbegrenzte Austauschperiode.
- `swap`
  - : Gibt der Schriftart eine äußerst kurze Blockierungsperiode und eine unbegrenzte Austauschperiode.
- `fallback`
  - : Gibt der Schriftart eine äußerst kurze Blockierungsperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt der Schriftart eine äußerst kurze Blockierungsperiode und keine Austauschperiode.

## Beschreibung

Der `font-display` Deskriptor für `@font-feature-values` bestimmt die Zeitplanung der Schriftanzeige; er tut dies, indem er einen Standardwert für `font-display` für `@font-face` mit demselben `font-family` Namen setzt. Wenn `font-display` in `@font-face` weggelassen wird, sucht der Benutzeragent zunächst nach dem `font-display` Wert, der über `@font-feature-values` für die relevante Schriftfamilie gesetzt wurde. Wird kein Wert gefunden, verwendet der Benutzeragent den `auto` Wert für `font-display`, in diesem Fall bestimmt der Benutzeragent die Strategie zur Schriftanzeige.

Die Zeitplanung der Schriftanzeige basiert auf einem Timer, der startet, wenn der Benutzeragent versucht, eine bestimmte heruntergeladene Schriftart zu verwenden. Die Zeit wird in drei Perioden unterteilt, wie unten aufgeführt. Diese Perioden bestimmen das Darstellungsverhalten jedes Elements, das die Schriftart verwendet.

- Schrift **Blockierungsperiode**: Wenn die Schriftart nicht geladen ist, werden Elemente, die versuchen, die Schriftart zu verwenden, mit einer _unsichtbaren_ Ersatzschriftart gerendert. Der Browser blockiert das sichtbare Textrendering und reserviert einen Platz für den anzuzeigenden Text basierend auf den Metriken der Ersatzschriftart. Während der Blockierungsperiode ist der Text nicht sichtbar. Am Ende der Blockierungsperiode, wenn die Schrift nicht geladen wurde, wird der Text in der Ersatzschrift gerendert.

- Schrift **Austauschperiode**: Die Austauschperiode tritt nach der Blockierungsperiode ein (wenn es eine gibt), und wenn die Schriftart noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schriftart zu verwenden, werden mit der nächstverfügbaren Ersatzschriftart gerendert. Die zuvor unsichtbare Ersatzschriftart wird auf den Bildschirm gemalt. Wenn die Schrift während der Austauschperiode erfolgreich geladen wird, wird der mit der Ersatzschrift gerenderte Text mit der neu geladenen Schrift aktualisiert — oder ausgetauscht. Dieser Schritt löst ein Neuzeichnen aus.

- Schrift **Fehlerperiode**: Wenn die Schriftart nicht geladen ist, bevor die Austauschperiode abläuft oder bevor die Blockierungsperiode abläuft (wenn es keine Austauschperiode gibt, wie im Fall von `optional`), behandelt der Benutzeragent die Schrift als fehlgeschlagenen Ladeversuch. Infolgedessen wird der Inhalt in der Ersatzschrift sichtbar.

Der `font-display` Deskriptor ermöglicht es Ihnen, eine Standardanzeigepolitik für alle `@font-face` Regeln festzulegen, einschließlich derjenigen, die nicht unter der Kontrolle des Autors stehen, wie z.B. Drittanbieter `@font-face` Regeln. Wenn der `font-display` Wert über `@font-feature-values` festgelegt wird, wird er zum Standardwert für das gesamte Schriftfamilie. Allerdings überschreibt jeder innerhalb einzelner `@font-face` Blöcke definierte `font-display` Wert diesen Standard, aber nur für die Blöcke, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display` Deskriptor in diesem Beispiel setzt den Standardwert `font-display` für die "Leitura" Schrift auf `swap` für alle `@font-face` Blöcke. Es kann mehrere `@font-face` Blöcke geben, die mehrere Schriftdateien für eine einzelne Schriftfamilie importieren. Wenn einer dieser `@font-face` Blöcke einen `font-display` Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke, die keinen `font-display` Deskriptor enthalten, verwenden standardmäßig `swap` anstelle des Standardwertes `auto` des Benutzeragenten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor für {{cssxref("@font-face")}} At-Regel
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
