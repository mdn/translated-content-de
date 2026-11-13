---
title: "Dokument: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/Document/fonts
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`fonts`** des Interfaces [`Document`](/de/docs/Web/API/Document) gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments zurück.

Diese Funktion ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments. Mit dem Interface `FontFaceSet` können Sie neue Schriftarten laden, den Status zuvor geladener Schriftarten prüfen usw.

## Beispiele

### Eine Operation ausführen, nachdem die Schriftarten geladen wurden

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

Das Promise wird erfüllt, wenn das Laden und die Layout-Berechnung für alle verwendeten Schriftarten abgeschlossen sind. Die Menge der verwendeten Schriftarten kann sich von der Menge der _deklarierten_ Schriftarten unterscheiden, beispielsweise wenn optionale Schriftarten (also Schriftarten, die mit `font-display: optional` deklariert wurden) nicht rechtzeitig geladen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Interface [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
- [`FontFace`](/de/docs/Web/API/FontFace)
