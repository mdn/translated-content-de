---
title: CSS-Bewegungspfad
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: 848fff9f8c8a2389e8c205773083de4bfa6b7eee
---

{{CSSRef}}

Das **CSS-Bewegungspfad**-Modul ermöglicht es Autoren, jedes grafische Objekt entlang eines benutzerdefinierten Pfades zu animieren.

Die Idee ist, dass man, wenn man ein Element entlang eines Pfades animieren möchte, zuvor nur die Animation von Übersetzung, Position etc. zur Verfügung hatte, was nicht ideal war und nur einfache Bewegungen ermöglichte. Mit {{cssxref("offset-path")}} können Sie einen spezifischen Pfad beliebiger Form definieren. Sie animieren das dann entlang dieses Pfades, indem Sie {{cssxref("offset-distance")}} animieren, und können es an jedem Punkt mit {{cssxref("offset-rotate")}} rotieren lassen.

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
