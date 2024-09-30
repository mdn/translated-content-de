---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Funktionen zur Internationalisierung Ihrer Erweiterung. Sie können diese APIs verwenden, um lokalisierte Zeichenfolgen aus mit Ihrer Erweiterung verpackten Lokalisierungsdateien zu erhalten, die aktuelle Sprache des Browsers zu ermitteln und den Wert des [Accept-Language Headers](/de/docs/Web/HTTP/Content_negotiation#the_accept-language_header) herauszufinden.

Sehen Sie sich die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) an, um einen Leitfaden zur Verwendung dieser API zu erhalten.

## Typen

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Ein [Sprach-Tag](https://www.rfc-editor.org/rfc/rfc9110.html#name-language-tags) wie z.B. `"en-US"` oder "`fr`".

## Funktionen

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Ruft die [Accept-Languages](/de/docs/Web/HTTP/Content_negotiation#the_accept-language_header) des Browsers ab. Dies unterscheidet sich von der vom Browser verwendeten Sprache. Um die Lokalisierung zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Ruft die lokalisierte Zeichenfolge für die angegebene Nachricht ab.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Ruft die UI-Sprache des Browsers ab. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, das die bevorzugten Benutzersprachen zurückgibt.
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Erkennt die Sprache des bereitgestellten Textes mit dem [Compact Language Detector](https://github.com/CLD2Owners/cld2).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

## Siehe auch

- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization): ein Leitfaden zur Verwendung des WebExtension-i18n-Systems.
- [Lokalspezifische Nachrichtenreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): Erweiterungen liefern lokalspezifische Zeichenfolgen in Dateien namens `messages.json`. Diese Seite beschreibt das Format von `messages.json`.
