---
title: runtime.PlatformInfo
slug: Mozilla/Add-ons/WebExtensions/API/runtime/PlatformInfo
l10n:
  sourceCommit: d093679f1b6c69e417e761d90eca65681e5f95f4
---

Ein Objekt, das Informationen über die aktuelle Plattform enthält.

## Typ

Werte dieses Typs sind Objekte, die die folgenden Eigenschaften enthalten:

- `os`
  - : {{WebExtAPIRef('runtime.PlatformOs')}}. Das Betriebssystem der Plattform.
- `arch`
  - : {{WebExtAPIRef('runtime.PlatformArch')}}. Die Prozessorarchitektur der Plattform.
- `nacl_arch` {{deprecated_inline}}
  - : {{WebExtAPIRef('runtime.PlatformNaclArch')}}. Die Architektur des Google Native Clients. Nur auf Chromium-basierenden Browsern wird dieses Attribut unterstützt, und Chromium entfernt es. Überlegen Sie, zu `arch` zu migrieren, das gleichwertige Informationen enthält und auf einigen Plattformen (ARM und RISC-V) aussagekräftiger ist.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-PlatformInfo)-API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
