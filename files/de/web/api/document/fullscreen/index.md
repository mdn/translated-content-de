---
title: "Dokument: fullscreen-Eigenschaft"
short-title: fullscreen
slug: Web/API/Document/fullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

Die veraltete Lese-Eigenschaft **`fullscreen`** der {{domxref("Document")}}-Schnittstelle gibt an, ob das Dokument derzeit Inhalte im Vollbildmodus anzeigt.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler auslösen, wenn sie modifiziert wird (auch nicht im Strict-Modus); der Setter ist eine No-Operation und wird ignoriert.

> [!NOTE]
> Da diese Eigenschaft veraltet ist, können Sie feststellen, ob der Vollbildmodus im Dokument aktiv ist, indem Sie überprüfen, ob {{DOMxRef("Document.fullscreenElement")}} nicht `null` ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Dokument derzeit ein Element im Vollbildmodus anzeigt; andernfalls ist der Wert `false`.

## Beispiele

Diese einfache Funktion gibt an, ob der Vollbildmodus derzeit aktiv ist, indem sie die veraltete `fullscreen`-Eigenschaft verwendet.

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

Dieses nächste Beispiel verwendet hingegen die aktuelle `fullscreenElement`-Eigenschaft, um dasselbe festzustellen:

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

Wenn `fullscreenElement` nicht `null` ist, gibt dies `true` zurück und zeigt an, dass der Vollbildmodus aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
- {{DOMxRef("Document.fullscreenEnabled")}}
