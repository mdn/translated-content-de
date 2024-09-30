---
title: "TextDecoder: encoding Eigenschaft"
short-title: encoding
slug: Web/API/TextDecoder/encoding
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`TextDecoder.encoding`** gibt einen String zurück, der den Namen des Dekodierungsalgorithmus enthält, der vom spezifischen Decoder-Objekt verwendet wird.

Die Kodierung wird durch den [Konstruktor](/de/docs/Web/API/TextDecoder/TextDecoder) `label` Parameter festgelegt und standardmäßig auf `utf-8` gesetzt.

## Wert

Ein in Kleinbuchstaben gehaltener ASCII-String, der einer der folgenden Werte sein kann:

- Die empfohlene Codierung für das Web: `'utf-8'`.
- Die veralteten Single-Byte-Codierungen:
  ['ibm866'](https://en.wikipedia.org/wiki/Code_page_866),
  ['iso-8859-2'](https://en.wikipedia.org/wiki/ISO/IEC_8859-2),
  ['iso-8859-3'](https://en.wikipedia.org/wiki/ISO/IEC_8859-3),
  ['iso-8859-4'](https://en.wikipedia.org/wiki/ISO/IEC_8859-4),
  ['iso-8859-5'](https://en.wikipedia.org/wiki/ISO/IEC_8859-5),
  ['iso-8859-6'](https://en.wikipedia.org/wiki/ISO/IEC_8859-6),
  ['iso-8859-7'](https://en.wikipedia.org/wiki/ISO/IEC_8859-7),
  ['iso-8859-8'](https://en.wikipedia.org/wiki/ISO/IEC_8859-8)'`,
  ['iso-8859-8i'](https://en.wikipedia.org/wiki/ISO-8859-8-I),
  ['iso-8859-10'](https://en.wikipedia.org/wiki/ISO/IEC_8859-10),
  ['iso-8859-13'](https://en.wikipedia.org/wiki/ISO/IEC_8859-13),
  ['iso-8859-14'](https://en.wikipedia.org/wiki/ISO/IEC_8859-14),
  ['iso-8859-15'](https://en.wikipedia.org/wiki/ISO/IEC_8859-15),
  ['iso-8859-16'](https://en.wikipedia.org/wiki/ISO/IEC_8859-16),
  ['koi8-r'](https://en.wikipedia.org/wiki/KOI8-R),
  ['koi8-u'](https://en.wikipedia.org/wiki/KOI8-U),
  ['macintosh'](https://en.wikipedia.org/wiki/Mac_OS_Roman),
  ['windows-874'](https://en.wikipedia.org/wiki/Windows-874),
  ['windows-1250'](https://en.wikipedia.org/wiki/Windows-1250),
  ['windows-1251'](https://en.wikipedia.org/wiki/Windows-1251),
  ['windows-1252'](https://en.wikipedia.org/wiki/Windows-1252),
  ['windows-1253'](https://en.wikipedia.org/wiki/Windows-1253),
  ['windows-1254'](https://en.wikipedia.org/wiki/Windows-1254),
  ['windows-1255'](https://en.wikipedia.org/wiki/Windows-1255),
  ['windows-1256'](https://en.wikipedia.org/wiki/Windows-1256),
  ['windows-1257'](https://en.wikipedia.org/wiki/Windows-1257),
  ['windows-1258'](https://en.wikipedia.org/wiki/Windows-1258), oder
  ['x-mac-cyrillic'](https://en.wikipedia.org/wiki/Macintosh_Cyrillic_encoding).
- Die veralteten Multi-Byte-Codierungen für vereinfachtes Chinesisch:
  ['gbk'](https://en.wikipedia.org/wiki/GBK),
  ['gb18030'](https://en.wikipedia.org/wiki/GB_18030).
- Die veraltete Multi-Byte-Codierung für traditionelles Chinesisch:
  ['big5'](https://en.wikipedia.org/wiki/Big5).
- Die veralteten Multi-Byte-Codierungen für Japanisch:
  ['euc-jp'](https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-JP),
  ['iso-2022-jp'](https://en.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-JP),
  ['shift-jis'](https://en.wikipedia.org/wiki/Shift_JIS).
- Die veralteten Multi-Byte-Codierungen für Koreanisch:
  ['euc-kr'](https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-KR).
- Die veralteten verschiedenen Codierungen:
  ['utf-16be'](https://en.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes),
  ['utf-16le'](https://en.wikipedia.org/wiki/UTF-16#Byte_order_encoding_schemes),
  `'x-user-defined'`.
- Eine spezielle Codierung, `'replacement'`.
  Diese dekodiert leere Eingaben in leere Ausgaben und jede andere Eingabe beliebiger Länge in ein einzelnes Ersatzzeichen.
  Sie wird verwendet, um Angriffe zu verhindern, die durch das Fehlanpassen von Codierungen zwischen dem Client und dem Server entstehen.
  Die folgenden Codierungen werden ebenfalls auf die Ersatzcodierung abgebildet: `ISO-2022-CN`, `ISO-2022-CN-ext`, ['iso-2022-kr'](https://en.wikipedia.org/wiki/ISO/IEC_2022#ISO-2022-KR), und ['hz-gb-2312'](<https://en.wikipedia.org/wiki/HZ_(character_encoding)>).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextDecoder`](/de/docs/Web/API/TextDecoder) Interface, zu dem es gehört.
