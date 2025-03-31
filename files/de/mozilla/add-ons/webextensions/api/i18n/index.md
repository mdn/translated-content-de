---
title: i18n
slug: Mozilla/Add-ons/WebExtensions/API/i18n
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{AddonSidebar}}

Funktionen zur Internationalisierung Ihrer Erweiterung. Sie können diese APIs verwenden, um lokalisierte Zeichenfolgen aus mit Ihrer Erweiterung gepackten Sprachdateien zu erhalten, um die aktuelle Sprache des Browsers herauszufinden und um den Wert seines [Accept-Language-Headers](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) zu ermitteln.

Siehe die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser API.

## Typen

- {{WebExtAPIRef("i18n.LanguageCode")}}
  - : Ein [Sprachtag](https://www.rfc-editor.org/rfc/rfc9110.html#name-language-tags) wie `"en-US"` oder `"fr"`.

## Funktionen

- {{WebExtAPIRef("i18n.getAcceptLanguages()")}}
  - : Ermittelt die [accept-languages](/de/docs/Web/HTTP/Guides/Content_negotiation#the_accept-language_header) des Browsers. Diese unterscheidet sich von der vom Browser verwendeten Sprache. Um die Sprache zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getUILanguage')}}.
- {{WebExtAPIRef("i18n.getMessage()")}}
  - : Ermittelt die lokalisierte Zeichenfolge für die angegebene Nachricht.
- {{WebExtAPIRef("i18n.getUILanguage()")}}
  - : Ermittelt die UI-Sprache des Browsers. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die die bevorzugten Benutzersprachen zurückgibt.
- {{WebExtAPIRef("i18n.detectLanguage()")}}
  - : Erkennt die Sprache des bereitgestellten Textes mit dem [Compact Language Detector](https://github.com/CLD2Owners/cld2).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n) API. Diese Dokumentation stammt aus [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.

## Siehe auch

- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization): ein Leitfaden zur Verwendung des WebExtension-i18n-Systems.
- [Locale-Spezifische Nachrichtenreferenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference): Erweiterungen liefern sprachspezifische Zeichenfolgen in Dateien namens `messages.json`. Diese Seite beschreibt das Format von `messages.json`.
