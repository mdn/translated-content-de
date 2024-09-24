---
title: Zwischenablage
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die WebExtension `clipboard`-API (die sich von der [standardmäßigen Clipboard API](/de/docs/Web/API/Clipboard_API) unterscheidet) ermöglicht es einer Erweiterung, Elemente in die System-Zwischenablage zu kopieren. Derzeit unterstützt die WebExtension `clipboard`-API nur das Kopieren von Bildern, soll jedoch in Zukunft auch das Kopieren von Text und HTML unterstützen.

Die WebExtension `clipboard`-API existiert hauptsächlich, weil die standardmäßige Clipboard API [das Schreiben von Bildern in die Zwischenablage nicht unterstützt](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). Die WebExtension `clipboard`-API könnte veraltet sein, sobald der Support der standardmäßigen Clipboard API für nicht-textuelle Zwischenablageinhalte allgemein genutzt wird.

Das Lesen aus der Zwischenablage wird von dieser API nicht unterstützt, da die Zwischenablage bereits mit den standardmäßigen Webplattform-APIs gelesen werden kann. Siehe [Interagieren mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard).

Diese API basiert auf Chromes [`clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API, aber diese API ist nur für Chrome-Apps, nicht für Erweiterungen verfügbar.

Um diese API zu verwenden, benötigen Sie die `"clipboardWrite"` Erweiterungs-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Funktionen

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Kopieren Sie ein Bild in die Zwischenablage.

## Browser-Kompatibilität

{{WebExtExamples("h2")}}

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API.
