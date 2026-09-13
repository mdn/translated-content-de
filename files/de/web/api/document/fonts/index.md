---
title: "Dokument: fonts Eigenschaft"
short-title: fonts
slug: Web/API/Document/fonts
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("DOM")}}

Die **`fonts`** Eigenschaft des [`Document`](/de/docs/Web/API/Document) Interfaces gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Interface des Dokuments zurück.

Diese Funktion ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Interface des Dokuments.
Das `FontFaceSet` Interface ist nützlich zum Laden neuer Schriftarten, Überprüfen des Status zuvor geladener Schriftarten etc.

## Beispiele

### Durchführung von Operationen, nachdem Schriftarten geladen sind

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

Das Versprechen wird erfüllt, wenn Lade- und Layoutoperationen aller verwendeten Schriftarten abgeschlossen sind. Die Menge der verwendeten Schriftarten kann sich von der Menge der _erklärten_ Schriftarten unterscheiden, z.B. wenn optionale Schriftarten (d.h. Schriftarten, die über `font-display: optional` deklariert wurden) nicht rechtzeitig geladen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Interface
- [`FontFace`](/de/docs/Web/API/FontFace)
