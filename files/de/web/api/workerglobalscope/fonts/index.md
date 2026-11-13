---
title: "WorkerGlobalScope: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/WorkerGlobalScope/fonts
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`fonts`** des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interface des Workers zurück.

Diese Eigenschaft ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interface des Workers. Das `FontFaceSet`-Interface ist nützlich, um neue Schriftarten zu laden und den Status zuvor geladener Schriftarten zu überprüfen.

## Beispiele

### Eine Operation ausführen, nachdem alle Schriftarten geladen wurden

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

- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interface
- [`FontFace`](/de/docs/Web/API/FontFace)
