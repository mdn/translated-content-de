---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-feature-values/font-display
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`font-display`** Deskriptor für die {{cssxref("@font-feature-values")}} at-Regel legt den Standardwert fest, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen wird. Die Festlegung eines Wertes für den `font-display` Deskriptor innerhalb eines `@font-feature-values` Blocks setzt den Standardwert des `font-display` Deskriptors für die {{cssxref("@font-face")}} at-Regel für alle Schriftarten mit dem gleichen {{cssxref("@font-face/font-family", "font-family")}} Wert.

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
  - : Die Schriftanzeigestrategie wird vom Benutzeragenten festgelegt.
- `block`
  - : Gibt dem Schriftschnitt eine kurze Blockperiode, in der Regel etwa 3 Sekunden, und eine unbegrenzte Austauschperiode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine unbegrenzte Austauschperiode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und keine Austauschperiode.

## Beschreibung

Der `font-display` Deskriptor für `@font-feature-values` bestimmt die Schriftanzeigezeitlinie; dies erfolgt durch das Setzen eines Standardwerts für `font-display` bei `@font-face` für den gleichen `font-family` Namen. Wenn `font-display` in `@font-face` weggelassen wird, sucht der Benutzeragent zuerst nach dem `font-display` Wert, der über `@font-feature-values` für die relevante Schriftfamilie festgelegt wurde. Wenn kein Wert gefunden wird, verwendet der Benutzeragent den `auto` Wert für `font-display`, in diesem Fall bestimmt der Benutzeragent die Schriftanzeigestrategie.

Die Schriftanzeigezeitlinie basiert auf einem Timer, der startet, wenn der Benutzeragent versucht, eine bestimmte heruntergeladene Schriftart zu verwenden. Die Zeitlinie ist in drei Perioden unterteilt, wie unten aufgeführt. Diese Perioden bestimmen das Render-Verhalten jedes Elements, das die Schriftart verwendet.

- Schrift-**block**periode: Wenn der Schriftschnitt nicht geladen ist, werden Elemente, die versuchen, die Schriftart zu verwenden, mit einem _unsichtbaren_ Ersatz-Schriftschnitt gerendert. Der Browser blockiert das sichtbare Text-Rendering und hält einen Platz für den anzuzeigenden Text basierend auf den Metriken des Ersatz-Schriftschnitts frei. Während der Blockperiode ist der Text nicht sichtbar. Am Ende der Blockperiode, wenn die Schrift nicht geladen wurde, wird der Text in der Ersatzschriftart gerendert.

- Schrift-**austausch**periode: Die Austauschperiode erfolgt nach der Blockperiode (falls es eine gibt) und wenn der Schriftschnitt noch nicht erfolgreich geladen wurde. Elemente, die versuchen, die noch nicht geladene Schriftart zu verwenden, werden mit der nächsten verfügbaren Ersatzschriftart gerendert. Der zuvor unsichtbare Ersatz-Schriftschnitt wird auf den Bildschirm gezeichnet. Wenn die Schrift während der Austauschperiode erfolgreich geladen wird, wird der in der Ersatzschriftart gerenderte Text – oder ausgetauscht – durch die neu geladene Schrift aktualisiert. Dieser Schritt löst ein Neuzeichnen aus.

- Schrift-**fehler**periode: Wenn der Schriftschnitt nicht geladen ist, wenn die Austauschperiode abläuft oder wenn die Blockperiode abläuft (wenn es keine Austauschperiode gibt, wie es bei `optional` der Fall ist), behandelt der Benutzeragent die Schrift als fehlgeschlagenen Ladevorgang. Infolgedessen wird der Inhalt in der Ersatzschrift sichtbar.

Der `font-display` Deskriptor ermöglicht es Ihnen, eine Standardanzeigepolitik für alle `@font-face` Regeln festzulegen, einschließlich solcher, die nicht unter der Kontrolle des Autors stehen, wie Regeln von Drittanbietern. Wenn der `font-display` Wert über `@font-feature-values` festgelegt wird, wird er zum Standardwert für `font-display` und wird auf die gesamte Schriftfamilie angewendet. Jede innerhalb der einzelnen `@font-face` Blöcke definierte `font-display`-Angabe überschreibt jedoch diesen Standard, aber nur für jene Blöcke, in denen der Deskriptor definiert ist.

## Beispiele

```css
@font-feature-values "Leitura" {
  font-display: swap;
  @swash {
    fancy: 1;
  }
}
```

Der `font-display` Deskriptor in diesem Beispiel setzt den Standardwert für `font-display` der "Leitura" Schriftart auf `swap` für alle `@font-face` Blöcke. Nun könnte es mehrere `@font-face` Blöcke geben, die mehrere Schriftdateien für eine einzige Schriftfamilie importieren. Wenn einer dieser `@font-face` Blöcke einen `font-display` Deskriptor enthält, wird der angegebene Wert nur für diese spezifische Schriftdatei verwendet. Alle anderen Blöcke, die keinen `font-display` Deskriptor enthalten, verwenden `swap` anstelle des standardmäßigen `auto` des Benutzeragenten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor für {{cssxref("@font-face")}} at-Regel
- [CSS-Schriften](/de/docs/Web/CSS/CSS_fonts) Modul
