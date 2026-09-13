---
title: "Window: frameElement-Eigenschaft"
short-title: frameElement
slug: Web/API/Window/frameElement
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{ApiRef("HTML DOM")}}

Die **`Window.frameElement`**-Eigenschaft gibt das Element zurück (wie {{HTMLElement("iframe")}} oder {{HTMLElement("object")}}), in dem das Fenster eingebettet ist.

> [!NOTE]
> Trotz des Namens dieser Eigenschaft funktioniert sie für Dokumente, die in jedem Einbettungspunkt eingebettet sind, einschließlich {{HTMLElement("object")}}, {{HTMLElement("iframe")}} oder {{HTMLElement("embed")}}.

## Wert

Das Element, in das das Fenster eingebettet ist. Wenn das Fenster nicht in ein anderes Dokument eingebettet ist oder wenn das Dokument, in das es eingebettet ist, einen anderen {{Glossary("origin", "Origin")}} hat, ist der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Beispiele

```js
const frameEl = window.frameElement;
// If we're embedded, change the containing element's URL to 'https://mozilla.org/'
if (frameEl) {
  frameEl.src = "https://mozilla.org/";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.frames`](/de/docs/Web/API/Window/frames) gibt ein objektähnliches Array zurück, das die direkten Unterrahmen des aktuellen Fensters auflistet.
- [`window.parent`](/de/docs/Web/API/Window/parent) gibt das übergeordnete Fenster zurück, welches das Fenster ist, das das `frameElement` des Kindfensters enthält.
