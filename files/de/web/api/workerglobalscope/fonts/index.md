---
title: "WorkerGlobalScope: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/WorkerGlobalScope/fonts
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Die **`fonts`**-Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle des Workers zurück.

Diese Eigenschaft ist Teil der [CSS-Schriftartenlade-API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle des Workers.
Die `FontFaceSet`-Schnittstelle ist nützlich zum Laden neuer Schriftarten, Überprüfen des Status zuvor geladener Schriftarten usw.

## Beispiele

### Operationen ausführen, nachdem alle Schriftarten geladen sind

```js
fonts.ready.then(() => {
  // Any operation that needs to be done only after all the fonts
  // have finished loading can go here.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle
- [`FontFace`](/de/docs/Web/API/FontFace)
