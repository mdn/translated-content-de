---
title: "Window: frameElement-Eigenschaft"
short-title: frameElement
slug: Web/API/Window/frameElement
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ApiRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`frameElement`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das Element zurück (z. B. {{HTMLElement("iframe")}} oder {{HTMLElement("object")}}), in das das Fenster eingebettet ist.

> [!NOTE]
> Trotz ihres Namens funktioniert diese Eigenschaft für Dokumente, die an einer beliebigen Einbettungsstelle eingebettet sind, einschließlich {{HTMLElement("object")}}, {{HTMLElement("iframe")}} oder {{HTMLElement("embed")}}.

## Wert

Das Element, in das das Fenster eingebettet ist. Wenn das Fenster nicht in ein anderes Dokument eingebettet ist oder das Dokument, in das es eingebettet ist, einen anderen {{Glossary("origin", "Origin")}} hat, ist der Wert stattdessen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

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

- [`window.frames`](/de/docs/Web/API/Window/frames) gibt ein Array-ähnliches Objekt zurück, das die direkten Unterframes des aktuellen Fensters auflistet.
- [`window.parent`](/de/docs/Web/API/Window/parent) gibt das übergeordnete Fenster zurück, das das `frameElement` des untergeordneten Fensters enthält.
