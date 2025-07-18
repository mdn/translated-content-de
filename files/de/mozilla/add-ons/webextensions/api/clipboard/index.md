---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die WebExtension `clipboard` API (die sich von der [standardmäßigen Clipboard-API](/de/docs/Web/API/Clipboard_API) unterscheidet) ermöglicht einer Erweiterung, Elemente in die Zwischenablage des Systems zu kopieren. Derzeit unterstützt die WebExtension `clipboard` API nur das Kopieren von Bildern, aber in Zukunft soll auch das Kopieren von Text und HTML unterstützt werden.

Die WebExtension `clipboard` API existiert hauptsächlich, weil die standardmäßige Clipboard-API [nicht das Schreiben von Bildern in die Zwischenablage unterstützt](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). Die WebExtension `clipboard` API könnte veraltet werden, sobald die Unterstützung nicht-textlicher Inhalte durch die standardmäßige Clipboard-API allgemein verfügbar ist.

Das Lesen aus der Zwischenablage wird von dieser API nicht unterstützt, da die Zwischenablage bereits mit den standardmäßigen Webplattform-APIs ausgelesen werden kann. Siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard).

Diese API basiert auf der [`clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API von Chrome, aber diese API ist nur für Chrome-Apps verfügbar, nicht für Erweiterungen.

Um diese API zu nutzen, benötigen Sie die Erweiterungs[berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"clipboardWrite"`.

## Funktionen

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Kopiert ein Bild in die Zwischenablage.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API von Chromium.
