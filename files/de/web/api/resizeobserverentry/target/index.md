---
title: "ResizeObserverEntry: target-Eigenschaft"
short-title: target
slug: Web/API/ResizeObserverEntry/target
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die **`target`** schreibgeschützte Eigenschaft des [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Interfaces gibt eine Referenz auf das [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement) zurück, das beobachtet wird.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement), das das beobachtete Element darstellt.

## Beispiele

Der folgende Codeausschnitt stammt aus dem Beispiel [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([siehe Quellcode](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)). Dieses Beispiel enthält ein grünes Kästchen, das als Prozentsatz der Viewport-Größe dimensioniert ist. Wenn die Größe des Viewports geändert wird, ändern sich die abgerundeten Ecken des Kästchens proportional zur Größe des Kästchens. Wir könnten dies einfach mit {{cssxref("border-radius")}} mit einem Prozentsatz umsetzen, aber das führt schnell zu unschönen ellipsenförmigen Ecken; diese Lösung bietet Ihnen schöne rechteckige Ecken, die mit der Boxgröße skalieren.

Um eine Referenz auf das beobachtete Element zu erfassen, damit wir seinen {{cssxref("border-radius")}}-Wert nach jeder Änderung aktualisieren können, verwenden wir die `target`-Eigenschaft jedes Eintrags — `entry.target.style.borderRadius`.

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
