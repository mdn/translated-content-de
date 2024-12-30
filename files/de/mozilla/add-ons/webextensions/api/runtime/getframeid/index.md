---
title: runtime.getFrameId()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getFrameId
l10n:
  sourceCommit: 873e38320b7f7dbe0492f96a02e7e6503ac8c3b3
---

{{AddonSidebar}}

Gibt die Frame-ID eines beliebigen Fenster-Globals oder eines Frame-Elements zurück, wenn sie von einem Content-Skript oder einer Erweiterungsseite aufgerufen wird, einschließlich Hintergrundseiten.

## Syntax

```js-nolint
let gettingInfo = browser.runtime.getFrameId(
  target               // object
)
```

### Parameter

- `target`
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}} oder ein {{Glossary("browsing_context", "browsing context")}} Container-[Element](/de/docs/Web/API/Element) (iframe, frame, embed oder object) für das Ziel-Frame.

### Rückgabewert

Gibt die Frame-ID des Ziel-Frames zurück oder -1, wenn das Frame nicht existiert.

## Beispiele

Dieser Code durchläuft rekursiv Nachkommen-Frames und erhält die Frame-IDs der übergeordneten Frames.

```js
const parents = {};

function visit(win) {
  const frameId = browser.runtime.getFrameId(win);
  const parentId = browser.runtime.getFrameId(win.parent);
  parents[frameId] = win.parent !== win ? parentId : -1;

  try {
    const frameEl = browser.runtime.getFrameId(win.frameElement);
    browser.test.assertEq(frameId, frameEl, "frameElement id correct");
  } catch (e) {
    // Can't access a cross-origin .frameElement.
  }

  for (const frame of win.frames) {
    visit(frame);
  }
}
visit(window);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
