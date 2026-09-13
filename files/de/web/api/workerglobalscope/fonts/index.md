---
title: "WorkerGlobalScope: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/WorkerGlobalScope/fonts
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers("worker")}}

Die **`fonts`**-Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle des Workers zurück.

Diese Eigenschaft ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle des Workers. Die `FontFaceSet`-Schnittstelle ist nützlich zum Laden neuer Schriften, Überprüfen des Status bereits geladener Schriften usw.

## Beispiele

### Ausführung einer Operation, nachdem alle Schriften geladen sind

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
