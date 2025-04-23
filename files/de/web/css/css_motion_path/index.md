---
title: CSS-Bewegungspfad
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: 3dce7daa89de9290c5ca04b6289756cd3c39d247
---

{{CSSRef}}

Das **CSS motion path**-Modul ermöglicht es Autoren, beliebige grafische Objekte entlang eines benutzerdefinierten Pfades zu animieren.

Die Idee ist, dass wenn Sie ein Element entlang eines Pfades animieren möchten, Ihnen bisher nur die Animation von Übersetzung, Positionierung usw. zur Verfügung stand, was nicht ideal war und nur einfache Bewegungen erlaubte. Mit {{cssxref("offset-path")}} können Sie einen spezifischen Pfad in jeder gewünschten Form definieren. Sie animieren dann das Objekt entlang dieses Pfades, indem Sie {{cssxref("offset-distance")}} animieren, und können es jederzeit mit {{cssxref("offset-rotate")}} rotieren lassen.

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
