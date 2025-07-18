---
title: extensionTypes.RunAt
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/RunAt
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der früheste Zeitpunkt, zu dem das JavaScript oder CSS in den Tab eingefügt wird.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind: `"document_start"`, `"document_end"`, `"document_idle"`.

- `"document_start"`: entspricht `loading`. Das DOM lädt noch.
- `"document_end"`: entspricht `interactive`. Das DOM ist vollständig geladen, aber Ressourcen wie Skripte und Bilder könnten noch laden.
- `"document_idle"`: entspricht `complete`. Das Dokument und alle seine Ressourcen sind vollständig geladen.

Der Standardwert ist `"document_idle"`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-RunAt) API von Chromium. Diese Dokumentation wurde aus [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code abgeleitet.
