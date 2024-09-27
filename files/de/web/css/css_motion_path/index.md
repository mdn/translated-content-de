---
title: CSS motion path
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: 848fff9f8c8a2389e8c205773083de4bfa6b7eee
---

{{CSSRef}}

Das **CSS motion path** Modul ermöglicht es Autoren, beliebige grafische Objekte entlang eines benutzerdefinierten Pfades zu animieren.

Die Idee ist, dass Sie, wenn Sie ein Element entlang eines Pfades animieren möchten, zuvor nur die Animation der Translation, Position usw. zur Verfügung hatten, was nicht ideal war und nur einfache Bewegungen ermöglichte. Mit {{cssxref("offset-path")}} können Sie einen bestimmten Pfad in jeder gewünschten Form definieren. Sie animieren es dann entlang dieses Pfades, indem Sie {{cssxref("offset-distance")}} animieren und können es an jedem Punkt mit {{cssxref("offset-rotate")}} rotieren lassen.

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

## Browser-Kompatibilität

{{Compat}}
