---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Funktionen zur Internationalisierung Ihrer Erweiterung. Sie können diese APIs verwenden, um lokalisierte Zeichenfolgen aus Locale-Dateien abzurufen, die mit Ihrer Erweiterung verpackt sind, um die aktuelle Sprache des Browsers zu ermitteln und um den Wert seines [Accept-Language-Headers](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) zu bestimmen.

Siehe die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Nutzung dieser API.

## Typen

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Ein [Sprachtag](https://www.rfc-editor.org/rfc/rfc9110.html#name-language-tags) wie z.B. `"en-US"` oder "`fr`".

## Funktionen

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Ruft die [accept-languages](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) des Browsers ab. Dies unterscheidet sich von der vom Browser verwendeten Locale. Um die Locale zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Holt die lokalisierte Zeichenfolge für die angegebene Nachricht.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Ruft die UI-Sprache des Browsers ab. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die die bevorzugten Benutzersprachen zurückgibt.
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Erkennt die Sprache des bereitgestellten Textes mit dem [Compact Language Detector](https://github.com/CLD2Owners/cld2).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

## Siehe auch

- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization): Ein Leitfaden zur Verwendung des WebExtension i18n-Systems.
- [Locale-Spezifische Nachrichtenreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): Erweiterungen liefern locale-spezifische Zeichenfolgen in Dateien namens `messages.json`. Diese Seite beschreibt das Format von `messages.json`.
