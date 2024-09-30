---
title: "FontFace: display-Eigenschaft"
short-title: display
slug: Web/API/FontFace/display
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die **`display`**-Eigenschaft der [`FontFace`](/de/docs/Web/API/FontFace) Schnittstelle legt fest, wie ein Schriftsatz angezeigt wird, basierend darauf, ob und wann er heruntergeladen und gebrauchsfertig ist. Diese Eigenschaft entspricht dem CSS-Deskriptor `font-display`.

Wenn diese Eigenschaft verwendet wird, hat das Schriftladen eine Zeitleiste mit drei Perioden. Die Länge der ersten beiden Perioden hängt von dem Wert der Eigenschaft und dem Benutzeragenten ab. (Siehe unten.)

- Blockperiode
  - : Der Browser bereitet unsichtbar eine Ersatzschrift vor. Wenn der Schriftsatz während dieser Zeit lädt, wird er verwendet, um den Text anzuzeigen, und die Anzeige ist abgeschlossen.
- Austauschperiode
  - : Wenn der Schriftsatz noch nicht geladen ist, wird die Ersatzschrift angezeigt. Wenn der Schriftsatz geladen wird, wird die Ersatzschrift gegen die heruntergeladene Schrift getauscht.
- Fehlerperiode
  - : Wenn der Schriftsatz weiterhin nicht geladen ist, wird die Ersatzschrift angezeigt und es erfolgt kein Austausch.

## Wert

Ein String mit einem der folgenden Werte.

- `auto`
  - : Verwendet die vom Benutzeragenten bereitgestellte Anzeigenstrategie für Schriften.
- `block`
  - : Verleiht dem Schriftsatz eine kurze Blockperiode und eine unbegrenzte Austauschperiode. Die Spezifikation empfiehlt 3 Sekunden für die Blockperiode, obwohl dies von Browser zu Browser variieren kann.
- `fallback`
  - : Verleiht dem Schriftsatz eine kurze Blockperiode und eine kurze Austauschperiode. Die Spezifikation empfiehlt 100 ms oder weniger für die Blockperiode und 3 Sekunden für die Austauschperiode, obwohl diese Werte von Browser zu Browser variieren können.
- `optional`
  - : Verleiht dem Schriftsatz eine kurze Blockperiode und keine Austauschperiode. Die Spezifikation empfiehlt 100 ms oder weniger, obwohl dies von Browser zu Browser variieren kann.
- `swap`
  - : Verleiht dem Schriftsatz eine Blockperiode von 0 Sekunden und eine unbegrenzte Austauschperiode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
