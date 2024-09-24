---
title: "Window: frameElement-Eigenschaft"
short-title: frameElement
slug: Web/API/Window/frameElement
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{ApiRef}}

Die **`Window.frameElement`**-Eigenschaft gibt das Element zurück (wie {{HTMLElement("iframe")}} oder {{HTMLElement("object")}}), in das das Fenster eingebettet ist.

> [!NOTE]
> Trotz des Namens dieser Eigenschaft funktioniert sie für Dokumente, die in jeden Einbettungspunkt eingebettet sind, einschließlich {{HTMLElement("object")}}, {{HTMLElement("iframe")}} oder {{HTMLElement("embed")}}.

## Wert

Das Element, in das das Fenster eingebettet ist. Wenn das Fenster nicht in ein anderes Dokument eingebettet ist oder wenn das Dokument, in das es eingebettet ist, einen anderen {{glossary("origin")}} hat, ist der Wert stattdessen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

```js
const frameEl = window.frameElement;
// Wenn wir eingebettet sind, ändern Sie die URL des eingebetteten Elements auf 'https://mozilla.org/'
if (frameEl) {
  frameEl.src = "https://mozilla.org/";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.frames")}} gibt ein array-ähnliches Objekt zurück, das die direkten Unter-Frames des aktuellen Fensters auflistet.
- {{domxref("window.parent")}} gibt das übergeordnete Fenster zurück, welches das Fenster ist, das das `frameElement` des Kindfensters enthält.
