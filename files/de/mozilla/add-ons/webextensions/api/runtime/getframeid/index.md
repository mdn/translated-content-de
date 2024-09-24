---
title: runtime.getFrameId()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getFrameId
l10n:
  sourceCommit: 824e5d88f3590fd39892d8975a2255c203feae9b
---

{{AddonSidebar}}

Gibt die Frame-ID eines beliebigen Window-Globals oder Frame-Elements zurück, wenn sie von einem Content-Skript oder einer Erweiterungsseite, einschließlich Hintergrundseiten, aufgerufen wird.

## Syntax

```js-nolint
let gettingInfo = browser.runtime.getFrameId(
  target               // object
)
```

### Parameter

- `target`
  - : Ein {{glossary("WindowProxy")}} oder ein {{glossary("browsing context")}} Container [Element](/de/docs/Web/API/Element) (iframe, frame, embed oder object) für das Ziel-Frame.

### Rückgabewert

Gibt die Frame-ID des Ziel-Frames zurück oder -1, wenn das Frame nicht existiert.

## Beispiele

Dieser Code durchläuft rekursiv die untergeordneten Frames und ermittelt die übergeordneten Frame-IDs.

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
    // Kein Zugriff auf ein Cross-Origin .frameElement.
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

> [!NOTE]
> Die Kompatibilitätsdaten für Microsoft Edge werden von der Microsoft Corporation bereitgestellt und sind hier unter der Creative Commons Attribution 3.0 United States License enthalten.
