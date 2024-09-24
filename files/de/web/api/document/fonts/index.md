---
title: "Dokument: fonts-Eigenschaft"
short-title: fonts
slug: Web/API/Document/fonts
l10n:
  sourceCommit: e20c5a4ac8437e6a4f66fb1b9992ce47510ba803
---

{{APIRef("DOM")}}

Die **`fonts`**-Eigenschaft der {{domxref("Document")}}-Schnittstelle gibt die {{domxref("FontFaceSet")}}-Schnittstelle des Dokuments zurück.

Diese Funktion ist Teil der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API).

## Wert

Der zurückgegebene Wert ist die {{domxref("FontFaceSet")}}-Schnittstelle des Dokuments. Die `FontFaceSet`-Schnittstelle ist nützlich zum Laden neuer Schriftarten, Überprüfen des Status zuvor geladener Schriftarten usw.

## Beispiele

### Operationen ausführen, nachdem Schriftarten geladen sind

```js
document.fonts.ready.then((fontFaceSet) => {
  // Jede Operation, die nur ausgeführt werden muss, nachdem alle verwendeten Schriftarten
  // fertig geladen sind, kann hier erfolgen.
  const fontFaces = [...fontFaceSet];
  console.log(fontFaces);
  // Einige Schriftarten könnten noch nicht geladen sein, wenn sie auf der Seite nicht verwendet werden
  console.log(fontFaces.map((f) => f.status));
});
```

Das Versprechen wird erfüllt, wenn alle Lade- und Layoutoperationen der verwendeten Schriftarten abgeschlossen sind. Der Satz der verwendeten Schriftarten kann sich von dem der _deklarierten_ Schriftarten unterscheiden, z. B. wenn optionale Schriftarten (d. h. Schriftarten, die über `font-display: optional` deklariert wurden) nicht rechtzeitig geladen werden konnten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("FontFaceSet")}} Schnittstelle
- {{domxref("FontFace")}}
