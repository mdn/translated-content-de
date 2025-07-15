---
title: CSS-Bewegungspfad
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Bewegungspfad**-Modul ermöglicht es Autoren, jedes grafische Objekt entlang eines benutzerdefinierten Pfads zu animieren.

Die Idee ist, dass Sie, wenn Sie ein Element entlang eines Pfades animieren möchten, zuvor nur die Animation von Übersetzungen, Positionen usw. zur Verfügung hatten, was nicht ideal war und nur einfache Bewegungen ermöglichte. Mit {{cssxref("offset-path")}} können Sie einen spezifischen Pfad in jeder gewünschten Form definieren. Sie animieren es dann entlang dieses Pfades, indem Sie {{cssxref("offset-distance")}} animieren, und können es zu jedem Zeitpunkt mit {{cssxref("offset-rotate")}} rotieren lassen.

## Einfaches Beispiel

```html
<div id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('Basic_example', '100%', 150)}}

## Referenz

### Eigenschaften

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

### Funktionen

- {{cssxref("ray")}}

## Spezifikationen

{{Specifications}}
