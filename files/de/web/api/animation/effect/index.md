---
title: "Animation: Effekt-Eigenschaft"
short-title: Effekt
slug: Web/API/Animation/effect
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die **`Animation.effect`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) holt und setzt den Ziel-Effekt einer Animation. Der Ziel-Effekt kann entweder ein Effektobjekt eines Typs basierend auf {{domxref("AnimationEffect")}}, wie zum Beispiel {{domxref("KeyframeEffect")}}, oder `null` sein.

## Wert

Ein {{domxref("AnimationEffect")}}-Objekt, das den Ziel-Animationseffekt für die Animation beschreibt, oder `null`, um anzuzeigen, dass kein aktiver Effekt vorhanden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
