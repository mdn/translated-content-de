---
title: "FontFace: display-Eigenschaft"
short-title: display
slug: Web/API/FontFace/display
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die **`display`**-Eigenschaft des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und bereit zur Nutzung ist. Diese Eigenschaft entspricht dem CSS-Deskriptor `font-display`.

Wenn diese Eigenschaft verwendet wird, hat das Schriftladen eine Zeitleiste mit drei Perioden. Die Länge der ersten beiden Perioden hängt vom Wert der Eigenschaft und dem Benutzeragenten ab. (Siehe unten.)

- Block-Periode
  - : Der Browser bereitet unsichtbar eine Ersatzschrift vor. Wenn die Schriftart während dieser Zeit geladen wird, wird sie zur Anzeige des Textes verwendet und die Anzeige ist abgeschlossen.
- Swap-Periode
  - : Wenn die Schriftart immer noch nicht geladen ist, wird die Ersatzschrift gezeigt. Sobald die Schriftart geladen wird, wird die Ersatzschrift gegen die heruntergeladene Schrift ausgetauscht.
- Fehlerperiode
  - : Wenn die Schriftart immer noch nicht geladen ist, wird die Ersatzschrift gezeigt und es findet kein Austausch statt.

## Wert

Ein String mit einem der folgenden Werte.

- `auto`
  - : Verwendet die von dem Benutzeragenten bereitgestellte Schriftanzeigesstrategie.
- `block`
  - : Gibt der Schriftart eine kurze Block-Periode und eine unendliche Swap-Periode. Die Spezifikation empfiehlt 3 Sekunden für die Block-Periode, allerdings kann dies von Browser zu Browser variieren.
- `fallback`
  - : Gibt der Schriftart eine kurze Block-Periode und eine kurze Swap-Periode. Die Spezifikation empfiehlt 100 ms oder weniger für die Block-Periode und 3 Sekunden für die Swap-Periode, obwohl diese Werte von Browser zu Browser variieren können.
- `optional`
  - : Gibt der Schriftart eine kurze Block-Periode und keine Swap-Periode. Die Spezifikation empfiehlt 100 ms oder weniger, obwohl dies von Browser zu Browser variieren kann.
- `swap`
  - : Gibt der Schriftart eine 0-Sekunden-Block-Periode und eine unendliche Swap-Periode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
