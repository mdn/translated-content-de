---
title: "`font-display` CSS-Attribut-Zuordnung"
short-title: font-display
slug: Web/CSS/Reference/At-rules/@font-feature-values/font-display
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`font-display`**-Deskriptor für die {{cssxref("@font-feature-values")}}-Attributregel legt den Standardwert fest, wie ein Schriftbild basierend darauf angezeigt wird, ob und wann es heruntergeladen wird. Das Festlegen eines Wertes für den `font-display`-Deskriptor innerhalb eines `@font-feature-values`-Blocks setzt den Standardwert des `font-display`-Deskriptors für die {{cssxref("@font-face")}}-Attributregel für alle Schriften mit demselben {{cssxref("@font-face/font-family", "font-family")}}-Wert fest.

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
  - : Die Strategie zur Schriftanzeige wird durch den User-Agent definiert.
- `block`
  - : Gibt dem Schriftbild eine kurze Blockperiode, normalerweise etwa 3 Sekunden, und eine unendliche Tauschperiode.
- `swap`
  - : Gibt dem Schriftbild eine extrem kurze Blockperiode und eine unendliche Tauschperiode.
- `fallback`
  - : Gibt dem Schriftbild eine extrem kurze Blockperiode und eine kurze Tauschperiode.
- `optional`
  - : Gibt dem Schriftbild eine extrem kurze Blockperiode und keine Tauschperiode.

## Beschreibung

Der `font-display`-Deskriptor für `@font-feature-values` bestimmt den Schriftanzeige-Zeitplan; dies geschieht durch Festlegung eines Standardwerts für `font-display` für `@font-face` mit demselben `font-family`-Namen. Wenn `font-display` in `@font-face` weggelassen wird, sucht der User-Agent zuerst nach dem über `@font-feature-values` für die betreffende Schriftfamilie festgelegten `font-display`-Wert. Wenn kein Wert gefunden wird, verwendet der User-Agent den Wert `auto` für `font-display`, wobei der User-Agent die Schriftanzeigestrategie bestimmt.

Der Schriftanzeige-Zeitplan basiert auf einem Timer, der startet, wenn der User-Agent versucht, ein bestimmtes heruntergeladenes Schriftbild zu verwenden. Der Zeitplan ist in drei Perioden unterteilt, die unten aufgeführt sind. Diese Perioden bestimmen das Anzeigeverhalten jedes Elements, das das Schriftbild verwendet.

- **Blockperiode** der Schrift: Wenn das Schriftbild nicht geladen ist, werden Elemente, die versuchen, die Schrift zu verwenden, mit einem _unsichtbaren_ Ersatzschriftbild gerendert. Der Browser blockiert die sichtbare Textanzeige und reserviert einen Platz für den darzustellenden Text basierend auf den Metriken der Ersatzschrift. Während der Blockperiode ist der Text nicht sichtbar. Am Ende der Blockperiode, falls die Schrift nicht geladen wurde, wird der Text in der Ersatzschrift gerendert.

- **Tauschperiode** der Schrift: Die Tauschperiode tritt nach der Blockperiode auf (falls es eine gibt) und wenn das Schriftbild noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schrift zu verwenden, werden mit der nächsten verfügbaren Ersatzschrift gerendert. Die zuvor unsichtbare Ersatzschrift wird auf den Bildschirm gemalt. Wenn die Schrift während der Tauschperiode erfolgreich geladen wird, wird der Text, der in der Ersatzschrift gerendert wurde, mit der neu geladenen Schrift aktualisiert — oder getauscht. Dieser Schritt löst ein Neuzeichnen aus.

- **Fehlperiode** der Schrift: Wenn die Schrift nicht bis zum Ablauf der Tauschperiode oder der Blockperiode geladen wurde (wenn es keine Tauschperiode gibt, wie es bei `optional` der Fall ist), behandelt der User-Agent die Schrift als fehlgeschlagenes Laden. Als Ergebnis wird der Inhalt in der Ersatzschrift sichtbar.

Der `font-display`-Deskriptor ermöglicht es Ihnen, eine standardmäßige Anzeigerichtlinie für alle `@font-face`-Regeln festzulegen, einschließlich solcher, die nicht unter der Kontrolle des Autors stehen, wie z.B. Drittanbieter-`@font-face`-Regeln. Wenn der `font-display`-Wert über `@font-feature-values` festgelegt wird, wird er zum Standardwert für `font-display` und auf die gesamte Schriftfamilie angewendet. Jeder `font-display`-Wert, der innerhalb einzelner `@font-face`-Blöcke definiert wird, überschreibt jedoch diesen Standard, aber nur für die Blöcke, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display`-Deskriptor in diesem Beispiel setzt den Standardwert `font-display` für die "Leitura"-Schrift auf `swap` für alle `@font-face`-Blöcke. Es könnte nun mehrere `@font-face`-Blöcke geben, die mehrere Schriftdateien für eine einzige Schriftfamilie importieren. Wenn einer dieser `@font-face`-Blöcke einen `font-display`-Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke, die keinen `font-display`-Deskriptor enthalten, verwenden stattdessen standardmäßig `swap` anstelle des standardmäßigen `auto` des User-Agents.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}-Deskriptor für die {{cssxref("@font-face")}}-Attributregel
- [CSS-Schriften](/de/docs/Web/CSS/Guides/Fonts)-Modul
