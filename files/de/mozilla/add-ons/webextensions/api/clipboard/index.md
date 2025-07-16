---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die WebExtension-API `clipboard` (die sich von der [standardmäßigen Clipboard-API](/de/docs/Web/API/Clipboard_API) unterscheidet) ermöglicht einer Erweiterung, Elemente in die Zwischenablage des Systems zu kopieren. Derzeit unterstützt die WebExtension-API `clipboard` nur das Kopieren von Bildern, jedoch ist vorgesehen, zukünftig auch das Kopieren von Text und HTML zu unterstützen.

Die WebExtension-API `clipboard` existiert hauptsächlich, weil die standardmäßige Clipboard-API [das Schreiben von Bildern in die Zwischenablage nicht unterstützt](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). Die WebExtension-API `clipboard` könnte veraltet werden, sobald die standardmäßige Clipboard-API die Unterstützung für nicht-textuelle Inhalte der Zwischenablage allgemein einführt.

Das Lesen aus der Zwischenablage wird von dieser API nicht unterstützt, da die Zwischenablage bereits mit den standardmäßigen Webplattform-APIs gelesen werden kann. Siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard).

Diese API basiert auf der [`clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard)-API von Chrome, aber diese API ist nur für Chrome-Apps und nicht für Erweiterungen verfügbar.

Um diese API zu verwenden, benötigen Sie die Erweiterungs-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardWrite"`.

## Funktionen

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Kopiert ein Bild in die Zwischenablage.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard)-API von Chromium.
