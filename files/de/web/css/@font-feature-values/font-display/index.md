---
title: font-display
slug: Web/CSS/@font-feature-values/font-display
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Der **`font-display`** Deskriptor für die {{cssxref("@font-feature-values")}} At-Regel legt den Standardwert fest, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen wird. Wenn innerhalb eines `@font-feature-values` Blocks ein Wert für den `font-display` Deskriptor festgelegt wird, wird der Standardwert des `font-display` Deskriptors für die {{cssxref("@font-face")}} At-Regel für alle Schriftarten mit demselben {{cssxref("@font-face/font-family", "font-family")}} Wert festgelegt.

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
  - : Die Schriftanzeigestrategie wird vom User Agent definiert.
- `block`
  - : Gibt der Schriftart eine kurze Blockperiode, in der Regel etwa 3 Sekunden, und eine unendliche Austauschperiode.
- `swap`
  - : Gibt der Schriftart eine äußerst kurze Blockperiode und eine unendliche Austauschperiode.
- `fallback`
  - : Gibt der Schriftart eine äußerst kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt der Schriftart eine äußerst kurze Blockperiode und keine Austauschperiode.

## Beschreibung

Der `font-display` Deskriptor für `@font-feature-values` bestimmt den Zeitplan für die Schriftdarstellung, indem er einen Standardwert für `font-display` für `@font-face` mit demselben `font-family` Namen festlegt. Wenn `font-display` in `@font-face` weggelassen wird, sucht der User Agent zunächst nach dem `font-display` Wert, der über `@font-feature-values` für die relevante Schriftfamilie festgelegt wurde. Wenn kein Wert gefunden wird, verwendet der User Agent den Wert `auto` für `font-display`, wobei der User Agent die Schriftdarstellungsstrategie bestimmt.

Der Zeitplan für die Schriftdarstellung basiert auf einem Timer, der startet, wenn der User Agent versucht, eine bestimmte heruntergeladene Schriftart zu verwenden. Der Zeitplan ist in drei Perioden unterteilt, wie unten aufgeführt. Diese Perioden bestimmen das Rendering-Verhalten jedes Elements, das die Schriftart verwendet.

- Schrift **Block-Periode**: Wenn die Schriftart nicht geladen ist, werden Elemente, die versuchen, die Schriftart zu verwenden, mit einer _unsichtbaren_ Ersatzschriftart gerendert. Der Browser blockiert die sichtbare Textrendering, reserviert einen Platz für den anzuzeigenden Text basierend auf den Metriken der Ersatzschriftart. Während der Blockperiode ist Text nicht sichtbar. Am Ende der Blockperiode, falls die Schrift nicht geladen wurde, wird der Text in der Ersatzschriftart gerendert.

- Schrift **Austausch-Periode**: Die Austauschperiode tritt nach der Blockperiode ein (sofern vorhanden) und falls die Schriftart noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schriftart zu verwenden, werden mit der nächsten verfügbaren Ersatzschriftart gerendert. Die vormals unsichtbare Ersatzschriftart wird auf dem Bildschirm dargestellt. Wenn die Schriftart während der Austauschperiode erfolgreich geladen wird, wird der im Ersatzschriftart gerenderte Text aktualisiert — oder ausgetauscht — mit der neu geladenen Schriftart. Dieser Schritt löst ein Neumalen aus.

- Schrift **Fehler-Periode**: Wenn die Schriftart nicht bis zum Ablauf der Austauschperiode oder bis zum Ablauf der Blockperiode (sofern keine Austauschperiode, wie es bei `optional` der Fall ist) geladen wurde, behandelt der User Agent die Schriftart als Fehlgeladen. Infolgedessen wird der Inhalt in der Ersatzschriftart sichtbar.

Der `font-display` Deskriptor ermöglicht es Ihnen, eine Standardanzeigepolitik für alle `@font-face` Regeln festzulegen, einschließlich solcher, die nicht unter der Kontrolle des Autors stehen, wie z.B. Drittanbieter `@font-face` Regeln. Wenn der `font-display` Wert über `@font-feature-values` gesetzt wird, wird er zum Standard-`font-display` Wert und gilt für die gesamte Schriftfamilie. Jedoch wird jeder im Einzelnen `@font-face` Block definierte `font-display` Wert diesen Standard überschreiben, aber nur für diese Blöcke, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display` Deskriptor in diesem Beispiel setzt den Standardwert `font-display` für die Schriftart "Leitura" auf `swap` für alle `@font-face` Blöcke. Jetzt kann es mehrere `@font-face` Blöcke geben, die mehrere Schriftdateien für eine einzelne Schriftfamilie importieren. Wenn einer dieser `@font-face` Blöcke einen `font-display` Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke, die keinen `font-display` Deskriptor enthalten, verwenden `swap` als Standard anstelle des standardmäßigen `auto` des User-Agents.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor für {{cssxref("@font-face")}} At-Regel
- [CSS fonts](/de/docs/Web/CSS/CSS_fonts) Modul
