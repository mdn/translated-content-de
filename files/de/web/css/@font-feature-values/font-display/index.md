---
title: font-display
slug: Web/CSS/@font-feature-values/font-display
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Der **`font-display`** Deskriptor für die {{cssxref("@font-feature-values")}} At-Regel legt den Standardwert fest, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen wird. Das Festlegen eines Werts für den `font-display` Deskriptor innerhalb eines `@font-feature-values` Blocks setzt den Standardwert des `font-display` Deskriptors für die {{cssxref("@font-face")}} At-Regel für alle Schriften mit demselben {{cssxref("@font-face/font-family", "font-family")}} Wert.

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
  - : Die Strategie zur Schriftanzeige wird vom User-Agent festgelegt.
- `block`
  - : Gibt der Schriftart eine kurze Blockperiode, in der Regel etwa 3 Sekunden, und eine unendliche Austauschperiode.
- `swap`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und eine unendliche Austauschperiode.
- `fallback`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und keine Austauschperiode.

## Beschreibung

Der `font-display` Deskriptor für `@font-feature-values` bestimmt die Schriftanzeige-Zeitlinie; er tut dies, indem er einen Standardwert für `font-display` für `@font-face` für denselben `font-family` Namen festlegt. Wenn `font-display` in `@font-face` ausgelassen wird, sucht der User-Agent zuerst nach dem `font-display` Wert, der über `@font-feature-values` für die relevante Schriftfamilie gesetzt wurde. Wenn kein Wert gefunden wird, verwendet der User-Agent den `auto` Wert für `font-display`, wobei der User-Agent die Strategie zur Schriftanzeige bestimmt.

Die Schriftanzeige-Zeitlinie basiert auf einem Timer, der startet, wenn der User-Agent versucht, eine bestimmte heruntergeladene Schriftart zu verwenden. Die Zeitlinie ist in drei Perioden unterteilt, wie unten aufgeführt. Diese Perioden bestimmen das Rendering-Verhalten jedes Elements, das die Schriftart verwendet.

- Schrift **Block**-Periode: Wenn die Schriftart nicht geladen ist, werden Elemente, die versuchen, die Schriftart zu verwenden, mit einer _unsichtbaren_ Ersatzschriftart gerendert. Der Browser blockiert das sichtbare Text-Rendering, wobei ein Platz für den anzuzeigenden Text basierend auf Metriken der Ersatzschrift frei gehalten wird. Während der Blockperiode ist der Text nicht sichtbar. Am Ende der Blockperiode, wenn die Schrift nicht geladen wurde, wird der Text mit der Ersatzschrift dargestellt.

- Schrift **Swap**-Periode: Die Swap-Periode tritt nach der Blockperiode (falls vorhanden) auf, und wenn die Schriftart noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schriftart zu verwenden, werden mit der nächsten verfügbaren Ersatzschriftart gerendert. Die zuvor unsichtbare Ersatzschrift wird auf den Bildschirm gemalt. Wenn die Schrift während der Swap-Periode erfolgreich geladen wird, wird der Text, der in der Ersatzschrift gerendert wurde, mit der neu geladenen Schrift aktualisiert — oder ausgetauscht. Dieser Schritt löst ein Neuzeichnen aus.

- Schrift **Fehler**-Periode: Wenn die Schriftart bis zum Ablauf der Swap-Periode oder bis zum Ende der Blockperiode nicht geladen wurde (falls es keine Swap-Periode gibt, wie es bei `optional` der Fall ist), behandelt der User-Agent die Schriftart als fehlerhaften Ladevorgang. Infolgedessen wird der Inhalt in der Ersatzschrift sichtbar.

Der `font-display` Deskriptor ermöglicht Ihnen das Festlegen einer Standardanzeigepolitik für alle `@font-face` Regeln, einschließlich solcher, die nicht unter der Kontrolle des Autors stehen, wie z.B. Drittanbieter `@font-face` Regeln. Wenn der `font-display` Wert über `@font-feature-values` gesetzt wird, wird er zum Standardwert für `font-display` und auf die gesamte Schriftfamilie angewendet. Jeder innerhalb einzelner `@font-face` Blöcke definierte `font-display` Wert wird diesen Standard jedoch für jene Blöcke überschreiben, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display` Deskriptor in diesem Beispiel setzt den Standardwert von `font-display` für die "Leitura" Schrift auf `swap` für alle `@font-face` Blöcke. Es kann mehrere `@font-face` Blöcke geben, die mehrere Schriftdateien für eine einzelne Schriftfamilie importieren. Wenn einer dieser `@font-face` Blöcke einen `font-display` Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke, die keinen `font-display` Deskriptor enthalten, verwenden standardmäßig `swap` anstelle des standardmäßigen `auto` des User-Agents.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der dieses Feature implementiert.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor für {{cssxref("@font-face")}} At-Regel
- [CSS Fonts](/de/docs/Web/CSS/CSS_fonts) Modul
