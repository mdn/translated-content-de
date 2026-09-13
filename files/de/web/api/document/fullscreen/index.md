---
title: "Document: fullscreen-Eigenschaft"
short-title: fullscreen
slug: Web/API/Document/fullscreen
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Fullscreen API")}}

Die veraltete [`Document`](/de/docs/Web/API/Document)-Schnittstelle hat die schreibgeschützte Eigenschaft **`fullscreen`**, die angibt, ob das Dokument derzeit Inhalte im Vollbildmodus anzeigt.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie nicht zu einem Fehler führen, wenn sie modifiziert wird (auch nicht im strikten Modus); der Setter führt keine Operation aus und wird ignoriert.

> [!NOTE]
> Da diese Eigenschaft veraltet ist, können Sie feststellen, ob der Vollbildmodus im Dokument aktiv ist, indem Sie prüfen, ob [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) nicht `null` ist.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Dokument derzeit ein Element im Vollbildmodus anzeigt; andernfalls ist der Wert `false`.

## Beispiele

Diese einfache Funktion gibt an, ob der Vollbildmodus derzeit aktiv ist, indem die veraltete `fullscreen`-Eigenschaft verwendet wird.

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

Dieses nächste Beispiel hingegen verwendet die aktuelle `fullscreenElement`-Eigenschaft, um dasselbe zu bestimmen:

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

Wenn `fullscreenElement` nicht `null` ist, gibt dies `true` zurück, was anzeigt, dass der Vollbildmodus aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
