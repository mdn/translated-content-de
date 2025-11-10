---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-feature-values/font-display
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`font-display`** Deskriptor für die {{cssxref("@font-feature-values")}} Regel legt den Standardwert dafür fest, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen wird. Das Setzen eines Wertes für den `font-display` Deskriptor innerhalb eines `@font-feature-values` Blockes legt den Standardwert des `font-display` Deskriptors für die {{cssxref("@font-face")}} Regel für alle Schriftarten mit demselben {{cssxref("@font-face/font-family", "font-family")}} Wert fest.

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
  - : Die Strategie zur Schriftanzeige wird vom Nutzeragenten definiert.
- `block`
  - : Gibt der Schriftart ein kurzes Block-Zeitraum, in der Regel ungefähr 3 Sekunden, und ein unendliches Swap-Zeitraum.
- `swap`
  - : Gibt der Schriftart ein äußerst kleines Block-Zeitraum und ein unendliches Swap-Zeitraum.
- `fallback`
  - : Gibt der Schriftart ein äußerst kleines Block-Zeitraum und ein kurzes Swap-Zeitraum.
- `optional`
  - : Gibt der Schriftart ein äußerst kleines Block-Zeitraum und kein Swap-Zeitraum.

## Beschreibung

Der `font-display` Deskriptor für `@font-feature-values` bestimmt die Schriftanzeige-Timeline; er tut dies, indem er einen Standard `font-display` Wert für `@font-face` für denselben `font-family` Namen festlegt. Wenn `font-display` in `@font-face` weggelassen wird, sucht der Nutzeragent zunächst nach dem `font-display` Wert, der über `@font-feature-values` für die relevante Schriftfamilie festgelegt wurde. Wenn kein Wert gefunden wird, verwendet der Nutzeragent den `auto` Wert für `font-display`, in welchem Fall der Nutzeragent die Strategie zur Schriftanzeige bestimmt.

Die Schriftanzeige-Timeline basiert auf einem Timer, der startet, wenn der Nutzeragent versucht, eine spezifisch heruntergeladene Schriftart zu verwenden. Die Timeline ist in drei Phasen unterteilt, wie unten aufgeführt. Diese Phasen bestimmen das Renderingverhalten jedes Elements, das die Schriftart verwendet.

- Schrift **Block** Zeitraum: Wenn die Schriftart nicht geladen ist, werden Elemente, die versuchen, die Schriftart zu verwenden, mit einer _unsichtbaren_ Fallback-Schriftart gerendert. Der Browser blockiert das sichtbare Text-Rendering und behält einen Platz für den anzuzeigenden Text basierend auf den Metriken der Fallback-Schriftart. Während des Block-Zeitraums ist der Text nicht sichtbar. Am Ende des Block-Zeitraums, falls die Schriftart nicht geladen ist, wird der Text in der Fallback-Schriftart gerendert.

- Schrift **Swap** Zeitraum: Der Swap-Zeitraum beginnt nach dem Block-Zeitraum (falls vorhanden) und wenn die Schriftart noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schriftart zu verwenden, werden mit der nächsten verfügbaren Fallback-Schriftart gerendert. Die früher unsichtbare Fallback-Schriftart wird auf den Bildschirm gemalt. Falls die Schriftart während des Swap-Zeitraums erfolgreich geladen wird, wird der in der Fallback-Schriftart gerenderte Text mit der neu geladenen Schriftart aktualisiert — oder geswappt. Dieser Vorgang löst ein Neuzeichen aus.

- Schrift **Fehler** Zeitraum: Wenn die Schriftart nicht geladen ist, wenn der Swap-Zeitraum abläuft oder wenn der Block-Zeitraum abläuft (falls es keinen Swap-Zeitraum gibt, wie im Fall von `optional`), behandelt der Nutzeragent die Schriftart als fehlgeschlagene Ladung. Infolgedessen wird der Inhalt in der Fallback-Schriftart sichtbar.

Der `font-display` Deskriptor erlaubt es Ihnen, eine Standardanzeigerichtlinie für alle `@font-face` Regeln festzulegen, einschließlich derjenigen, die nicht unter der Kontrolle des Autors stehen, wie z.B. `@font-face` Regeln von Drittanbietern. Wenn der `font-display` Wert über `@font-feature-values` festgelegt wird, wird er zum Standardwert für die gesamte Schriftfamilie. Allerdings wird jeder `font-display` Wert, der innerhalb einzelner `@font-face` Blöcke definiert ist, diesen Standard überschreiben, jedoch nur für die Blöcke, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display` Deskriptor in diesem Beispiel legt den Standard `font-display` Wert für die "Leitura" Schriftart auf `swap` für alle `@font-face` Blöcke fest. Jetzt kann es mehrere `@font-face` Blöcke geben, die mehrere Schriftdateien für eine einzige Schriftfamilie importieren. Wenn einer dieser `@font-face` Blöcke einen `font-display` Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke ohne einen `font-display` Deskriptor werden auf `swap` anstelle des standardmäßigen `auto` des Nutzeragenten zurückgreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor für {{cssxref("@font-face")}} Regel
- [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts) Modul
