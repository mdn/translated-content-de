---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die WebExtension `clipboard` API (die sich von der [standardmäßigen Clipboard-API](/de/docs/Web/API/Clipboard_API) unterscheidet) ermöglicht einer Erweiterung, Elemente in die Systemzwischenablage zu kopieren. Derzeit unterstützt die WebExtension `clipboard` API nur das Kopieren von Bildern, aber es ist geplant, auch das Kopieren von Text und HTML in der Zukunft zu unterstützen.

Die WebExtension `clipboard` API existiert hauptsächlich, weil die standardmäßige Clipboard-API [das Schreiben von Bildern in die Zwischenablage nicht unterstützt](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). Die WebExtension `clipboard` API könnte veraltet werden, sobald die Unterstützung der Standard-Clipboard-API für nicht-textuelle Inhalte der Zwischenablage allgemein verwendet wird.

Das Lesen von der Zwischenablage wird von dieser API nicht unterstützt, da die Zwischenablage bereits mit den standardmäßigen Webplattform-APIs gelesen werden kann. Siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard).

Diese API basiert auf der Chrome [`clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API, aber diese API ist nur für Chrome-Apps verfügbar, nicht für Erweiterungen.

Um diese API zu verwenden, benötigen Sie die `"clipboardWrite"` Erweiterungs-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Funktionen

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Kopieren Sie ein Bild in die Zwischenablage.

## Browser-Kompatibilität

{{WebExtExamples("h2")}}

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API.
