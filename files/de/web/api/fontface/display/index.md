---
title: "FontFace: display Eigenschaft"
short-title: display
slug: Web/API/FontFace/display
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`display`**-Eigenschaft des [`FontFace`](/de/docs/Web/API/FontFace)-Interfaces bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist. Diese Eigenschaft entspricht dem CSS-Descriptor `font-display`.

Wenn diese Eigenschaft verwendet wird, hat das Laden von Schriftarten eine Zeitachse mit drei Perioden. Die Längen der ersten beiden Perioden hängen vom Wert der Eigenschaft und dem Benutzeragenten ab. (Siehe unten.)

- Blockperiode
  - : Der Browser bereitet unsichtbar eine Ersatzschriftart vor. Wenn die Schriftart während dieser Zeit geladen wird, wird sie zur Anzeige des Textes verwendet, und die Anzeige ist abgeschlossen.
- Austauschperiode
  - : Wenn die Schriftart noch nicht geladen ist, wird die Ersatzschriftart angezeigt. Sobald die Schriftart geladen wird, wird die Ersatzschriftart durch die heruntergeladene Schriftart ersetzt.
- Fehlerperiode
  - : Wenn die Schriftart immer noch nicht geladen ist, wird die Ersatzschriftart angezeigt und kein Austausch erfolgt.

## Wert

Ein String mit einem der folgenden Werte.

- `auto`
  - : Verwendet die Strategie zur Schriftanzeige, die vom Benutzeragenten vorgegeben wird.
- `block`
  - : Gibt der Schrift eine kurze Blockperiode und eine unendliche Austauschperiode. Die Spezifikation empfiehlt 3 Sekunden für die Blockperiode, obwohl dies von Browser zu Browser variieren kann.
- `fallback`
  - : Gibt der Schrift eine kurze Blockperiode und eine kurze Austauschperiode. Die Spezifikation empfiehlt 100 ms oder weniger für die Blockperiode und 3 Sekunden für die Austauschperiode, obwohl diese Werte von Browser zu Browser variieren können.
- `optional`
  - : Gibt der Schrift eine kurze Blockperiode und keine Austauschperiode. Die Spezifikation empfiehlt 100 ms oder weniger, obwohl dies von Browser zu Browser variieren kann.
- `swap`
  - : Gibt der Schrift eine 0 Sekunden Blockperiode und eine unendliche Austauschperiode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
