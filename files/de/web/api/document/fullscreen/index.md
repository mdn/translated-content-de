---
title: "Document: fullscreen-Eigenschaft"
short-title: fullscreen
slug: Web/API/Document/fullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

Die veraltete [`Document`](/de/docs/Web/API/Document)-Schnittstelle hat die schreibgeschützte **`fullscreen`**-Eigenschaft, die angibt, ob das Dokument derzeit Inhalte im Vollbildmodus anzeigt.

Obwohl diese Eigenschaft schreibgeschützt ist, wird kein Fehler ausgelöst, wenn sie geändert wird (auch im strengen Modus); der Setter ist eine No-Operation und wird ignoriert.

> [!NOTE]
> Da diese Eigenschaft veraltet ist, können Sie feststellen, ob der Vollbildmodus im Dokument aktiv ist, indem Sie überprüfen, ob [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) nicht `null` ist.

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Dokument derzeit ein Element im Vollbildmodus anzeigt; andernfalls ist der Wert `false`.

## Beispiele

Diese einfache Funktion zeigt an, ob der Vollbildmodus derzeit aktiv ist, indem die veraltete `fullscreen`-Eigenschaft verwendet wird.

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

Das nächste Beispiel hingegen verwendet die aktuelle `fullscreenElement`-Eigenschaft, um dasselbe festzustellen:

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

Wenn `fullscreenElement` nicht `null` ist, wird `true` zurückgegeben, was darauf hinweist, dass der Vollbildmodus aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
