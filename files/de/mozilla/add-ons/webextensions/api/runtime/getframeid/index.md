---
title: runtime.getFrameId()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getFrameId
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt die Frame-ID eines beliebigen globalen Fensters oder Frame-Elements zurück, wenn es von einem Content Script oder einer Erweiterungsseite, einschließlich Hintergrundseiten, aufgerufen wird.

## Syntax

```js-nolint
let gettingInfo = browser.runtime.getFrameId(
  target               // object
)
```

### Parameter

- `target`
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}} oder ein Container der {{Glossary("browsing_context", "browsing context")}} [Element](/de/docs/Web/API/Element) (iframe, frame, embed oder object) für das Ziel-Frame.

### Rückgabewert

Gibt die Frame-ID des Ziel-Frames zurück oder -1, wenn das Frame nicht existiert.

## Beispiele

Dieser Code durchläuft rekursiv Nachkommen-Frames und erhält übergeordnete Frame-IDs.

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
