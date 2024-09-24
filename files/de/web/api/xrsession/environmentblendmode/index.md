---
title: "XRSession: environmentBlendMode-Eigenschaft"
short-title: environmentBlendMode
slug: Web/API/XRSession/environmentBlendMode
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`environmentBlendMode`**-Eigenschaft der {{domxref("XRSession")}}-Schnittstelle identifiziert, ob und in welchem Maße computererzeugte Bilder über die reale Welt gelegt werden.

Dies wird verwendet, um zwischen vollständig immersiven VR-Sitzungen und AR-Sitzungen zu unterscheiden, die über ein Durchgangsbild der realen Welt gerendert werden und möglicherweise teilweise transparent sind.

## Wert

Ein String, der definiert, ob und wie virtuelle, gerenderte Inhalte über das Bild der realen Welt gelegt werden.

Mögliche Werte sind:

- `opaque`
  - : Das gerenderte Bild wird gezeichnet, ohne dass Durchgangsbilder zugelassen werden. Dies wird hauptsächlich von vollständig immersiven VR-Headsets verwendet, die die umgebende Umgebung vollständig verdecken, wobei dem Benutzer nichts von der realen Welt gezeigt wird. Die in der `baseLayer`-Eigenschaft des {{domxref("XRSession")}}s {{domxref("XRSession.renderState", "renderState")}} angegebenen Alphawerte werden ignoriert, da die Alphawerte für die gerenderten Bilder alle als 1.0 (vollständig undurchsichtig) behandelt werden.
- `additive`
  - : Wird hauptsächlich von AR-Geräten mit transparenten Linsen verwendet, die die Realität direkt in die Augen des Benutzers durchlassen. Der `additive`-Mischmodus ist für Situationen gedacht, in denen das Gerät keine Kontrolle über den Hintergrund und dessen Helligkeit hat, da diese nicht digital gesteuert werden. Das Gerät kann dem Bild nur mehr Licht hinzufügen; es kann nichts abdunkeln. Daher wird Schwarz als vollständig transparent gerendert, und es gibt keine Möglichkeit, ein Pixel vollständig undurchsichtig zu machen. Wie bei der Einstellung `opaque` werden die angegebenen Alphawerte ignoriert und so behandelt, als wären sie 1.0.
- `alpha-blend`
  - : Wird von Headsets oder Brillen verwendet, die Kameras nutzen, um die reale Welt aufzunehmen und sie digital auf dem Bildschirm oder den Bildschirmen anzuzeigen, die verwendet werden, um die Inhalte zu rendern, die der Benutzer sehen soll. Dies bietet eine Möglichkeit, eine AR-Darstellung mit einem VR-Gerät zu erstellen. Alpha-Blending kann auch von nicht tragbaren Geräten verwendet werden, die AR-Modi bereitstellen, wie z.B. Handys oder Tablets, die Kameras verwenden, um die reale Welt für die Verwendung in AR-Anwendungen aufzunehmen. Da die reale Welt digital präsentiert wird, kann die Helligkeit jedes Pixels kontrolliert werden, egal ob es sich um die Realität oder das gerenderte XR-Bild handelt. Die Umgebung des Benutzers kann mit der virtuellen Umgebung verschmolzen werden, wobei jede Farbe und Helligkeit der Pixel präzise gesteuert wird.
    In diesem Modus bietet die `renderState.baseLayer`-Eigenschaft des `XRSession` relative Gewichte der künstlichen Schicht während des Kompositionsprozesses. Pixel, deren Alphawert 1.0 ist, werden vollständig undurchsichtig gerendert und verdecken die reale Welt vollständig, während Pixel mit einem Alpha von 0.0 völlig transparent sind und die umgebende Umgebung durchlassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
