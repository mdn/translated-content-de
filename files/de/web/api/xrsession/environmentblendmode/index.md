---
title: "XRSession: environmentBlendMode-Eigenschaft"
short-title: environmentBlendMode
slug: Web/API/XRSession/environmentBlendMode
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`environmentBlendMode`**-Eigenschaft der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle gibt an, ob und in welchem Umfang computererzeugte Bilder über die reale Welt gelegt werden.

Dies wird verwendet, um zwischen vollständig immersiven VR-Sitzungen und AR-Sitzungen zu unterscheiden, die möglicherweise halbtransparent über ein Durchlaufbild der realen Welt gerendert werden.

## Wert

Ein String, der definiert, ob und wie virtuelle, gerenderte Inhalte über das Bild der realen Welt gelegt werden.

Mögliche Werte sind:

- `opaque`
  - : Das gerenderte Bild wird ohne jegliche Durchlaufbildgebung gezeichnet. Dies wird hauptsächlich von vollständig immersiven VR-Headsets verwendet, die die umliegende Umgebung völlig verdecken, ohne dass der Nutzer etwas von der realen Welt sieht. Die in der `renderState`-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)'s `baseLayer`-Feld angegebenen Alphawerte werden ignoriert, da alle Alphawerte der gerenderten Bildgebung als 1,0 (vollständig opak) behandelt werden.
- `additive`
  - : Hauptsächlich verwendet von AR-Geräten mit transparenten Linsen, die direkt die Realität in die Augen des Nutzers durchlassen, ist der `additive`-Blending-Modus für Situationen gedacht, in denen das Gerät keine Kontrolle über den Hintergrund und dessen Helligkeit hat, da dieser nicht digital gesteuert wird. Das Gerät kann nur mehr Licht zum Bild hinzufügen; es kann nichts dunkler machen. Daher wird Schwarz als vollständig transparent gerendert und es gibt keine Möglichkeit, einen Pixel vollständig opak zu machen. Wie bei der `opaque`-Einstellung werden die angegebenen Alphawerte ignoriert und behandelt, als wären sie 1,0.
- `alpha-blend`
  - : Wird von Headsets oder Brillen verwendet, die Kameras verwenden, um die reale Welt zu erfassen und sie digital auf dem Bildschirm oder den Bildschirmen darzustellen, die zum Rendern der Inhalte verwendet werden, die der Nutzer sehen soll. Dies bietet eine Möglichkeit, eine AR-Präsentation mit einem VR-Gerät zu erstellen. Alphablending kann auch von nicht tragbaren Geräten verwendet werden, die AR-Modi bieten, wie etwa Smartphones oder Tablets, die Kameras verwenden, um die reale Welt für den Einsatz in AR-Apps zu erfassen. Da die reale Welt digital dargestellt wird, kann die Helligkeit jedes Pixels gesteuert werden. Ob es sich um die Realität oder das gerenderte XR-Bild handelt, die Umgebung des Nutzers kann mit der virtuellen Umgebung vermischt werden, wobei jede Farbe und Helligkeit eines Pixels präzise kontrolliert werden kann.
    In diesem Modus liefert die `renderState.baseLayer`-Eigenschaft der `XRSession` relative Gewichte der künstlichen Schicht während des Compositing-Prozesses. Pixel, deren Alphawert 1,0 beträgt, werden vollständig opak gerendert und verdecken die reale Welt vollständig, während Pixel mit einem Alpha von 0,0 völlig transparent sind und die Umgebung durchlassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
