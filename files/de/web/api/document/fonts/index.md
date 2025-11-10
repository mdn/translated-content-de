---
title: "Dokument: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/Document/fonts
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Die **`fonts`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle des Dokuments zurück.

Diese Funktion ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle des Dokuments.
Die `FontFaceSet`-Schnittstelle ist nützlich zum Laden neuer Schriftarten, Überprüfen des Status von zuvor geladenen Schriftarten usw.

## Beispiele

### Ausführung nach dem Laden der Schriftarten

```js
document.fonts.ready.then((fontFaceSet) => {
  // Any operation that needs to be done only after all used fonts
  // have finished loading can go here.
  const fontFaces = [...fontFaceSet];
  console.log(fontFaces);
  // some fonts may still be unloaded if they aren't used on the site
  console.log(fontFaces.map((f) => f.status));
});
```

Das Versprechen wird erfüllt, wenn die Lade- und Layout-Operationen aller verwendeten Schriftarten abgeschlossen sind. Die Menge der verwendeten Schriftarten kann von der Menge der _deklarierten_ Schriftarten abweichen, z.B. wenn optionale Schriftarten (d.h. Schriftarten, die über `font-display: optional` deklariert sind) nicht rechtzeitig geladen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Schnittstelle
- [`FontFace`](/de/docs/Web/API/FontFace) Schnittstelle
