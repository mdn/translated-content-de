---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dieses Objekt enthält Details, die das Injektionsziel für CSS und JavaScript spezifizieren. Es wird in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} verwendet.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Ob das Skript oder CSS in alle Frames innerhalb des Tabs injiziert wird. Standardmäßig `false`. Kann nicht `true` sein, wenn `frameIds` angegeben ist.

- `frameIds` {{optional_inline}}
  - : `array` von `number`. Array der IDs der Frames, in die injiziert werden soll.

- `tabId`
  - : `number`. Die ID des Tabs, in den injiziert werden soll.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-InjectionTarget) API.
