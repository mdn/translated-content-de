---
title: clipboard
slug: Mozilla/Add-ons/WebExtensions/API/clipboard
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das WebExtension `clipboard` API (welches sich vom [standardmäßigen Clipboard API](/de/docs/Web/API/Clipboard_API) unterscheidet) ermöglicht einer Erweiterung, Elemente in die System-Zwischenablage zu kopieren. Aktuell unterstützt das WebExtension `clipboard` API nur das Kopieren von Bildern, es ist jedoch geplant, in Zukunft auch das Kopieren von Text und HTML zu unterstützen.

Das WebExtension `clipboard` API existiert hauptsächlich, weil das standardmäßige Clipboard API [das Schreiben von Bildern in die Zwischenablage nicht unterstützt](https://w3c.github.io/clipboard-apis/#writing-to-clipboard). Das WebExtension `clipboard` API könnte veraltet werden, sobald die Unterstützung für nicht-textliche Zwischenablageinhalte des standardmäßigen Clipboard API allgemein verfügbar ist.

Das Lesen aus der Zwischenablage wird von diesem API nicht unterstützt, da die Zwischenablage bereits mit den Standard-Webplattform-APIs gelesen werden kann. Siehe [Interaktion mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#reading_from_the_clipboard).

Dieses API basiert auf Chromes [`clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API, jedoch ist jenes API nur für Chrome-Apps verfügbar, nicht für Erweiterungen.

Um dieses API zu nutzen, benötigen Sie die `"clipboardWrite"` Erweiterungs[berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Funktionen

- {{WebExtAPIRef("clipboard.setImageData()")}}
  - : Kopiert ein Bild in die Zwischenablage.

## Browser-Kompatibilität

{{WebExtExamples("h2")}}

{{Compat}}

> [!NOTE]
> Dieses API basiert auf Chromiums [`chrome.clipboard`](https://developer.chrome.com/docs/apps/reference/clipboard) API.
