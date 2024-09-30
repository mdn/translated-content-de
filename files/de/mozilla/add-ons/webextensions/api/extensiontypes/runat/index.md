---
title: extensionTypes.RunAt
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/RunAt
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der früheste Zeitpunkt, zu dem das JavaScript oder CSS in das Tab eingefügt wird.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind: `"document_start"`, `"document_end"`, `"document_idle"`.

- `"document_start"`: entspricht `loading`. Das DOM wird noch geladen.
- `"document_end"`: entspricht `interactive`. Das DOM ist fertig geladen, aber Ressourcen wie Skripte und Bilder werden möglicherweise noch geladen.
- `"document_idle"`: entspricht `complete`. Das Dokument und alle seine Ressourcen sind fertig geladen.

Der Standardwert ist `"document_idle"`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-RunAt) API von Chromium. Diese Dokumentation ist abgeleitet von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.
