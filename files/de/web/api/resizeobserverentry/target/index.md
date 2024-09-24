---
title: "ResizeObserverEntry: target-Eigenschaft"
short-title: target
slug: Web/API/ResizeObserverEntry/target
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte Eigenschaft **`target`** der
{{domxref("ResizeObserverEntry")}}-Schnittstelle gibt eine Referenz auf das
{{domxref('Element')}} oder {{domxref('SVGElement')}} zurück, das beobachtet wird.

## Wert

Ein {{domxref('Element')}} oder {{domxref('SVGElement')}} repräsentiert das beobachtete Element.

## Beispiele

Das folgende Beispiel stammt aus dem Beispiel [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)). Dieses Beispiel beinhaltet ein grünes Kästchen, das als Prozentsatz der
Viewport-Größe skaliert wird. Wenn die Größe des Viewports verändert wird, ändern sich
die abgerundeten Ecken des Kästchens im Verhältnis zur Größe des Kästchens. Wir könnten dies einfach durch die Implementierung von {{cssxref("border-radius")}} mit einem Prozentsatz erreichen, aber das führt schnell zu unschön aussehenden
elliptischen Ecken; diese Lösung gibt Ihnen schöne quadratische Ecken, die mit der Boxgröße skalieren.

Um eine Referenz auf das beobachtete Element zu erhalten, damit wir seinen
{{cssxref("border-radius")}}-Wert nach jeder Änderung aktualisieren können, verwenden wir
die `target`-Eigenschaft jedes Eintrags —
`entry.target.style.borderRadius`.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      entry.target.style.borderRadius = `${Math.min(
        100,
        entry.contentBoxSize.inlineSize / 10 +
          entry.contentBoxSize.blockSize / 10,
      )}px`;
    } else {
      entry.target.style.borderRadius = `${Math.min(
        100,
        entry.contentRect.width / 10 + entry.contentRect.height / 10,
      )}px`;
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
