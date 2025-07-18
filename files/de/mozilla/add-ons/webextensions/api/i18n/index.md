---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Funktionen zur Internationalisierung Ihrer Erweiterung. Sie können diese APIs verwenden, um lokalisierte Zeichenfolgen aus mit Ihrer Erweiterung gepackten Lokalisierungsdateien zu erhalten, die aktuelle Sprache des Browsers zu ermitteln und den Wert seines [Accept-Language-Headers](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) herauszufinden.

Siehe die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser API.

## Typen

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Ein [Sprachtag](https://www.rfc-editor.org/rfc/rfc9110.html#name-language-tags) wie `"en-US"` oder `"fr"`.

## Funktionen

- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Erkennt die Sprache des bereitgestellten Textes mit dem [Compact Language Detector](https://github.com/CLD2Owners/cld2).
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Ruft die lokalisierte Zeichenfolge für die angegebene Nachricht ab.
- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Holt die [accept-languages](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) des Browsers. Dies unterscheidet sich von der vom Browser verwendeten Locale. Um die Locale zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Ermittelt die UI-Sprache des Browsers. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, das die bevorzugten Benutzersprachen zurückgibt.
- {{WebExtAPIRef("i18n.getPreferredSystemLanguages()")}}
  - : Gibt die bevorzugten Locales des Betriebssystems zurück.
- {{WebExtAPIRef("i18n.getSystemUILanguage()")}}
  - : Gibt die aktuelle UI-Locale des Betriebssystems zurück.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API. Diese Dokumentation wird abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

## Siehe auch

- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization): ein Leitfaden zur Verwendung des WebExtension i18n-Systems.
- [Lokale spezifische Nachrichtsreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): Erweiterungen liefern sprachspezifische Zeichenfolgen in Dateien namens `messages.json`. Diese Seite beschreibt das Format von `messages.json`.
