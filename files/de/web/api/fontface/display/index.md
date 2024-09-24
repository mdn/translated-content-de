---
title: "FontFace: display-Eigenschaft"
short-title: display
slug: Web/API/FontFace/display
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die **`display`**-Eigenschaft der {{domxref("FontFace")}}-Schnittstelle bestimmt, wie eine Schriftart angezeigt wird, je nachdem, wann und ob sie heruntergeladen und verwendet werden kann. Diese Eigenschaft entspricht dem CSS-Attribut `font-display`.

Wenn diese Eigenschaft verwendet wird, hat das Laden der Schriftart einen Zeitverlauf mit drei Phasen. Die Dauer der ersten beiden Phasen hängt von dem Wert der Eigenschaft und dem Benutzeragenten ab. (Siehe unten.)

- block-Phase
  - : Der Browser bereitet unsichtbar eine Ersatzschriftart vor. Wenn die Schriftart in dieser Zeit geladen wird, wird sie verwendet, um den Text anzuzeigen, und die Anzeige ist abgeschlossen.
- swap-Phase
  - : Wenn die Schriftart noch nicht geladen ist, wird die Ersatzschriftart angezeigt.
    Sobald die Schriftart geladen ist, wird die Ersatzschriftart gegen die heruntergeladene Schriftart ausgetauscht.
- failure-Phase
  - : Wenn die Schriftart immer noch nicht geladen ist, wird die Ersatzschriftart angezeigt und es erfolgt kein Austausch.

## Wert

Ein String mit einem der folgenden Werte.

- `auto`
  - : Verwendet die von dem Benutzeragenten bereitgestellte Strategien zur Schriftdarstellung.
- `block`
  - : Verleiht der Schriftart eine kurze block-Phase und eine unendliche swap-Phase.
    Der Standard empfiehlt 3 Sekunden für die block-Phase, obwohl dies je nach Browser variieren kann.
- `fallback`
  - : Verleiht der Schriftart eine kurze block-Phase und eine kurze swap-Phase.
    Der Standard empfiehlt 100 ms oder weniger für die block-Phase und 3 Sekunden für die swap-Phase, obwohl diese Werte je nach Browser variieren können.
- `optional`
  - : Verleiht der Schriftart eine kurze block-Phase und keine swap-Phase.
    Der Standard empfiehlt 100 ms oder weniger, obwohl dies je nach Browser variieren kann.
- `swap`
  - : Verleiht der Schriftart eine block-Phase von 0 Sekunden und eine unendliche swap-Phase.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
