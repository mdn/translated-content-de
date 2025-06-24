---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Dieses Objekt enthält Details, die das Ziel für die Injektion von CSS und JavaScript spezifizieren. Es wird in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, und {{WebExtAPIRef("scripting.removeCSS()")}} verwendet.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}

  - : `boolean`. Ob das Skript oder CSS in alle Frames innerhalb des Tabs injiziert wird. Standardmäßig `false`. Kann nicht `true` sein, wenn `frameIds` angegeben ist.

- `frameIds` {{optional_inline}}

  - : `array` von `number`. Array der IDs der Frames, in die injiziert wird.

- `tabId`
  - : `number`. Die ID des Tabs, in den injiziert wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-InjectionTarget) API von Chromium.
