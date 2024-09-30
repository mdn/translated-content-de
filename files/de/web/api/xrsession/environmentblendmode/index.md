---
title: "XRSession: environmentBlendMode-Eigenschaft"
short-title: environmentBlendMode
slug: Web/API/XRSession/environmentBlendMode
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`environmentBlendMode`**-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt an, ob und in welchem Umfang computererzeugte Bilder über die reale Welt gelegt werden.

Dies wird genutzt, um zwischen vollständig immersiven VR-Sitzungen und AR-Sitzungen zu unterscheiden, die über einem Durchgangsbild der realen Welt gerendert werden, möglicherweise teilweise transparent.

## Wert

Ein String, der definiert, ob und wie virtuelle, gerenderte Inhalte über das Bild der realen Welt gelegt werden.

Mögliche Werte sind:

- `opaque`
  - : Das gerenderte Bild wird gezeichnet, ohne Durchgangsbilder zuzulassen. Dies wird hauptsächlich von vollständig immersiven VR-Headsets verwendet, die die Umgebung vollständig verdecken, sodass dem Benutzer nichts von der realen Welt gezeigt wird. Die Alphawerte, die in der [`renderState`](/de/docs/Web/API/XRSession/renderState)-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)'s `baseLayer`-Feld angegeben sind, werden ignoriert, da die Alphawerte für das gerenderte Bild als 1.0 (vollständig undurchsichtig) behandelt werden.
- `additive`
  - : Wird hauptsächlich von AR-Geräten mit transparenten Linsen verwendet, die die Realität direkt an die Augen des Benutzers durchlassen. Der `additive`-Blendmodus ist so konzipiert, dass er in einer Situation verwendet wird, in der das Gerät keine Kontrolle über den Hintergrund und dessen Helligkeit hat, da diese nicht digital gesteuert wird. Alles, was das Gerät tun kann, ist, mehr Licht zum Bild hinzuzufügen; es kann nichts dunkler machen. Deshalb wird Schwarz als vollständig transparent dargestellt und es gibt keine Möglichkeit, einen Pixel vollständig undurchsichtig zu machen. Wie bei der `opaque`-Einstellung werden spezifizierte Alphawerte ignoriert und so behandelt, als wären sie 1.0.
- `alpha-blend`
  - : Verwendet von Headsets oder Brillen, die Kameras nutzen, um die reale Welt aufzunehmen und sie digital auf den Bildschirmen anzuzeigen, die für den Benutzer gerenderten Inhalte anzeigen, bietet dies eine Möglichkeit, eine AR-Präsentation mit einem VR-Gerät zu erstellen. Alpha-Blending kann auch von nicht tragbaren Geräten verwendet werden, die AR-Modi bereitstellen, wie z. B. Telefone oder Tablets, die Kameras verwenden, um die reale Welt für AR-Apps aufzunehmen. Da die reale Welt digital dargestellt wird, kann die Helligkeit jedes Pixels gesteuert werden, ob es sich um die Realität oder das gerenderte XR-Bild handelt. Die Umgebung des Benutzers kann mit der virtuellen Umgebung gemischt werden, wobei jedes Pixel seine Farbe und Helligkeit präzise kontrolliert enthält.
    In diesem Modus bietet die `renderState.baseLayer`-Eigenschaft der `XRSession` relative Gewichtungen der künstlichen Schicht während des Compositing-Prozesses an. Pixel, deren Alphawert 1.0 ist, werden vollständig undurchsichtig gerendert und verdecken die reale Welt vollständig, während Pixel mit einem Alpha von 0.0 vollständig transparent sind und die umgebende Umgebung durchlassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
