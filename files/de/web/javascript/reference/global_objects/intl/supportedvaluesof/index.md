---
title: Intl.supportedValuesOf()
short-title: supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array mit den Kalender-, Sortierungs-, Währungs-, Zahlensystem- oder Einheitenwerten zurück, die von der Implementierung unterstützt werden.

Doppelte Werte werden weggelassen, und das Array wird in aufsteigender lexikografischer Reihenfolge sortiert (genauer gesagt mit {{jsxref("Array/sort", "Array.prototype.sort()")}} und einer `undefined`-Vergleichsfunktion).

Mit der Methode können Sie prüfen, ob bestimmte Werte in einer Implementierung unterstützt werden, und nur bei Bedarf ein Polyfill herunterladen. Sie können damit auch Benutzeroberflächen erstellen, in denen Benutzer ihre bevorzugten lokalisierten Werte auswählen können, beispielsweise wenn die Oberfläche mit WebGL oder serverseitig erstellt wird.

Diese Methode berücksichtigt keine Locale: Bestimmte Bezeichner werden möglicherweise nur in bestimmten Locales unterstützt oder bevorzugt. Wenn Sie die bevorzugten Werte für eine bestimmte Locale ermitteln möchten, verwenden Sie das Objekt {{jsxref("Intl.Locale")}}, beispielsweise {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

{{InteractiveExample("JavaScript Demo: Intl.supportedValuesOf()", "taller")}}

```js interactive-example
console.log(Intl.supportedValuesOf("calendar"));
console.log(Intl.supportedValuesOf("collation"));
console.log(Intl.supportedValuesOf("currency"));
console.log(Intl.supportedValuesOf("numberingSystem"));
console.log(Intl.supportedValuesOf("timeZone"));
console.log(Intl.supportedValuesOf("unit"));
// Expected output: Array ['key'] (for each key)

try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  console.log(err.toString());
  // Expected output: RangeError: invalid key: "someInvalidKey"
}
```

## Syntax

```js-nolint
Intl.supportedValuesOf(key)
```

### Parameter

- `key`
  - : Ein Schlüssel-String, der die Kategorie der zurückzugebenden Werte angibt. Mögliche Werte sind:
    - `"calendar"`: siehe [Unterstützte Kalendertypen](#unterstützte_kalendertypen)
    - `"collation"`: siehe [Unterstützte Sortierungstypen](#unterstützte_sortierungstypen)
    - `"currency"`: siehe [Unterstützte Währungsbezeichner](#unterstützte_währungsbezeichner)
    - `"numberingSystem"`: siehe [Unterstützte Zahlensystemtypen](#unterstützte_zahlensystemtypen)
    - `"timeZone"`: siehe [Unterstützte Zeitzonenbezeichner](#unterstützte_zeitzonenbezeichner)
    - `"unit"`: siehe [Unterstützte Einheitenbezeichner](#unterstützte_einheitenbezeichner)

### Rückgabewert

Ein sortiertes Array eindeutiger String-Werte, das angibt, welche Werte die Implementierung für den angegebenen Schlüssel unterstützt. Die möglichen Rückgabewerte sind unten aufgeführt.

#### Unterstützte Kalendertypen

Im Folgenden sind alle Werte aufgeführt, die Browser für den Schlüssel `calendar` üblicherweise unterstützen. Diese Werte können beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}} für die Option `calendar` oder den [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) `ca` sowie zum Erstellen von {{jsxref("Temporal")}}-Datumsobjekten verwendet werden. Diese Liste ist in der ECMA-402-Spezifikation ausdrücklich zugelassen, sodass alle Implementierungen übereinstimmen sollten.

| Wert               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buddhist`         | Thailändischer buddhistischer Kalender, proleptisch. Monatsnummern, Monatscodes und Tage entsprechen denen des ISO-8601-Kalenders, aber das Epochenjahr ist anders. Es gibt eine Ära.                                                                                                                                                                                                                                                            |
| `chinese`          | Traditioneller chinesischer Kalender, proleptisch. Ein in China verwendeter Lunisolarkalender, der auf Daten basiert, die das Purple Mountain Observatory für die Jahre 1900 bis 2100 veröffentlicht hat (und die für die Jahre 1912 bis 2100 GB/T 33661-2017 entsprechen). Außerhalb dieses Zeitraums wird eine von der Implementierung festgelegte Näherung verwendet. Das rechnerische Jahr entspricht dem von `gregory`; es gibt keine Ären. |
| `coptic`           | Koptischer Kalender, proleptisch. Ähnlicher Sonnenkalender-Algorithmus wie bei `ethioaa` und `ethiopic`, mit einer Ära und einem anderen Epochenjahr.                                                                                                                                                                                                                                                                                            |
| `dangi`            | Traditioneller koreanischer Kalender, proleptisch. Ein Lunisolarkalender, der für die Jahre 1900 bis 2050 die vom Korea Astronomy and Space Science Institute (KASI) veröffentlichten Monate verwendet. Außerhalb dieses Zeitraums wird eine von der Implementierung festgelegte Näherung verwendet. Das rechnerische Jahr entspricht dem von `gregory`; es gibt keine Ären.                                                                     |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem, proleptisch. Ähnlicher Sonnenkalender-Algorithmus wie bei `coptic` und `ethiopic`, mit einer Ära und einem anderen Epochenjahr.                                                                                                                                                                                                                                                                               |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret, proleptisch. Ähnlicher Sonnenkalender-Algorithmus wie bei `coptic` und `ethioaa`, mit zwei Ären und einem anderen Epochenjahr.                                                                                                                                                                                                                                                                              |
| `gregory`          | Gregorianischer Kalender, proleptisch. Ein Sonnenkalender, der nahezu mit dem ISO-8601-Kalender übereinstimmt, jedoch keine Wochennummerierung festlegt und zwei Ären umfasst, davon eine vor dem Epochenjahr.                                                                                                                                                                                                                                   |
| `hebrew`           | Hebräischer Kalender, proleptisch. Ziviler Kalender mit Tischri als erstem Monat des Jahres. Lunisolarkalender, bei dem nach dem fünften Monat ein Schaltmonat eingefügt wird. Es gibt eine Ära.                                                                                                                                                                                                                                                 |
| `indian`           | Indischer Nationalkalender (oder Śaka-Kalender), proleptisch. Sonnenkalender mit einer Ära.                                                                                                                                                                                                                                                                                                                                                      |
| `islamic-civil`    | Hidschri-Kalender, proleptisch und tabellarisch beziehungsweise regelbasiert, mit Schaltjahrregel II (Schaltjahre 2, 5, 7, 10, 13, 16, 18, 21, 24, 26 und 29 im 30-Jahres-Zyklus, ab 1 gezählt) und ziviler Epoche (Freitag, 16. Juli 622 nach dem julianischen Kalender / 0622-07-19 ISO).                                                                                                                                                      |
| `islamic-tbla`     | Hidschri-Kalender, proleptisch und tabellarisch beziehungsweise regelbasiert, mit Schaltjahrregel II (Schaltjahre 2, 5, 7, 10, 13, 16, 18, 21, 24, 26 und 29 im 30-Jahres-Zyklus, ab 1 gezählt) und astronomischer Epoche (Donnerstag, 15. Juli 622 nach dem julianischen Kalender / 0622-07-18 ISO).                                                                                                                                            |
| `islamic-umalqura` | Hidschri-Kalender, proleptisch, Umm al-Qura. Ein Mondkalender, der vom Beginn des Jahres 1300 AH (1882-11-12 ISO) bis zum Ende des Jahres 1600 AH (2174-11-25 ISO) die vom KACST berechneten Monate verwendet. Außerhalb dieses Zeitraums wird `islamic-civil` verwendet.                                                                                                                                                                        |
| `iso8601`          | ISO-Kalender (Variante des gregorianischen Kalenders mit regionsunabhängigen Wochenregeln und Formatierungsparametern).                                                                                                                                                                                                                                                                                                                          |
| `japanese`         | Japanischer Kaiserzeitkalender (dieser Kalender fügt für jeden neuen Kaiser eine Ära hinzu. Daher stimmen das ausgegebene Jahr und die ausgegebene Ära für ein zukünftiges Datum möglicherweise nicht mit dem eingegebenen Jahr und der eingegebenen Ära überein, wenn Ihr Code in einer zukünftigen Engine-Version ausgeführt wird. **Hinweis:** Beachten Sie die Anmerkungen unter dieser Tabelle zu Daten vor dem 1868-10-23 ISO).            |
| `persian`          | Persischer Kalender (oder Solar-Hidschri-Kalender), proleptisch. Es gibt eine Ära.                                                                                                                                                                                                                                                                                                                                                               |
| `roc`              | Kalender der Republik China (oder Minguo-Kalender), proleptisch. Monatsnummern, Monatscodes und Tage entsprechen denen des ISO-8601-Kalenders, aber das Epochenjahr ist anders. Es gibt zwei Ären, eine vor und eine nach dem Epochenjahr.                                                                                                                                                                                                       |

Stand Oktober 2025 funktionieren Daten vor dem 1868-10-23 ISO (dem Beginn des Jahres 1 Meiji) im Kalender `japanese` in Browsern in zweierlei Hinsicht nicht wie erwartet. Erstens [enthielt CLDR ein falsches Anfangsdatum für die Meiji-Ära](https://unicode-org.atlassian.net/browse/CLDR-11375), wodurch Kalenderimplementierungen die Meiji-Ära weiter in die Vergangenheit ausdehnen, als sie tatsächlich zurückreichte. Zweitens legt der bevorstehende [Vorschlag zu Intl-Ären und monthCode](https://tc39.es/proposal-intl-era-monthcode/) fest, dass Daten vor dem 1873-01-01 ISO gregorianische Ären verwenden sollen; Browser haben bisher stattdessen Näherungen früherer japanischer Ären verwendet. Der Kalender `japanese` wurde am 1. Januar des Jahres 6 Meiji / 1873-01-01 ISO eingeführt. Diese Probleme betreffen daher nur proleptische Daten.

Die folgenden Typen sind in CLDR festgelegt, haben in Browsern aber keine Implementierungen, die sich von den oben genannten Kalendern unterscheiden.

| Wert                             | Beschreibung                                                | Hinweise                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ethiopic-amete-alem`            | Äthiopischer Kalender, Amete Alem, proleptisch.             | Dies ist ein Alias für `ethioaa` und wird daher von `supportedValuesOf()` nicht zurückgegeben. Verwenden Sie stattdessen `ethioaa`.                                                                                                                                                                                                                                                                                                     |
| `islamic`                        | Hidschri-Kalender mit nicht näher bezeichnetem Algorithmus. | Stand April 2025 handelt es sich um eine astronomische Simulation, deren Parameter nicht dokumentiert sind und von der nicht bekannt ist, dass sie einer bestimmten, außerhalb von Software verwendeten Variante des Hidschri-Kalenders entspricht. Der Wert wird gemäß Spezifikation in einen anderen Kalender kanonisiert, üblicherweise `islamic-umalqura`, `islamic-tbla` oder `islamic-civil`, wobei eine Warnung ausgegeben wird. |
| `islamicc` {{deprecated_inline}} | Ziviler (algorithmischer) arabischer Kalender.              | Dies ist ein Alias für `islamic-civil` und wird daher von `supportedValuesOf()` nicht zurückgegeben. Verwenden Sie stattdessen `islamic-civil`.                                                                                                                                                                                                                                                                                         |

Die Dokumentation zu {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} und {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} enthält weitere Informationen zu verschiedenen Kalendern.

Referenzen:

- [CLDR-Schlüssel für Kalendertypen](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Datumsangaben](https://unicode.org/reports/tr35/tr35-dates.html)
- [Islamische Kalendertypen](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR-Entwurfsvorschlag)

#### Unterstützte Sortierungstypen

Im Folgenden sind alle Werte aufgeführt, die Browser für den Schlüssel `collation` üblicherweise unterstützen. Diese Werte können beim Erstellen von Objekten wie {{jsxref("Intl.Collator")}} für die Option `collation` oder den [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) `co` verwendet werden.

| Wert       | Beschreibung                                                                                                                                                                                                                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Frühere Version der Sortierreihenfolge zur Wahrung der Kompatibilität (für Arabisch).                                                                                                                                                                           |
| `dict`     | Wörterbuchsortierung (für Singhalesisch). Auch als `dictionary` bekannt.                                                                                                                                                                                        |
| `emoji`    | Empfohlene Sortierreihenfolge für Emoji-Zeichen. Die angeforderte Sprache hat keinen Einfluss. Wenn Sie diesen Wert mit einer Sprache kombinieren, die sprachspezifische Regeln benötigt, funktioniert die Sortierung von Text in dieser Sprache nicht korrekt! |
| `eor`      | Europäische Sortierregeln (ENV 13710). Diese Reihenfolge ist nicht sprachspezifisch. Obwohl die API eine Zuordnung zu einer Sprache verlangt, hat die angeforderte Sprache keinen Einfluss auf die Reihenfolge.                                                 |
| `phonebk`  | Telefonbuchsortierung (für Deutsch). Auch als `phonebook` bekannt.                                                                                                                                                                                              |
| `phonetic` | Phonetische Sortierung (nach Aussprache; für Lingala).                                                                                                                                                                                                          |
| `pinyin`   | Pinyin-Sortierung für lateinische und Han-Zeichen (für Chinesisch).                                                                                                                                                                                             |
| `searchjl` | Spezieller Sortierungstyp für die Suche nach koreanischen Anfangskonsonanten. **Warnung:** Diese Sortierung ist nicht zum Sortieren vorgesehen, obwohl sie sich nur mit {{jsxref("Intl.Collator")}} und `usage: "sort"` verwenden lässt.                        |
| `stroke`   | Pinyin-Sortierung für lateinische Zeichen und Sortierung nach Strichzahl für Han-Zeichen (für Chinesisch).                                                                                                                                                      |
| `trad`     | Traditionelle Sortierung (beispielsweise für Spanisch). Auch als `traditional` bekannt.                                                                                                                                                                         |
| `unihan`   | Unihan-Sortierung nach Radikal und Strichzahl für Han-Zeichen (für Chinesisch, Japanisch und Koreanisch), Pinyin-Sortierung für lateinische Zeichen im Chinesischen sowie japanische Standard-Kana-Sortierung für Japanisch.                                    |
| `zhuyin`   | Pinyin-Sortierung für lateinische Zeichen und Zhuyin-Sortierung für Bopomofo- und Han-Zeichen (für Chinesisch).                                                                                                                                                 |

Die folgenden Typen sind in CLDR-Daten festgelegt, aber veraltet, ihre ausdrückliche Verwendung wird nicht empfohlen und/oder Browser weisen sie aus verschiedenen Gründen möglicherweise nicht als unterstützt aus. Vermeiden Sie ihre Verwendung:

| Wert                             | Beschreibung                                                                                                                                            | Hinweise                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin-Sortierung für lateinische Zeichen und Sortierung nach dem Big5-Zeichensatz für CJK-Zeichen (für Chinesisch).                                    | Veraltet.                                                                                                                                                                                                                                                                                                                                                                                 |
| `direct` {{deprecated_inline}}   | Binäre Reihenfolge der Codepunkte (für Hindi).                                                                                                          | Veraltet.                                                                                                                                                                                                                                                                                                                                                                                 |
| `ducet`                          | Sortierreihenfolge der standardmäßigen Unicode Collation Element Table.                                                                                 | Der Sortierungstyp `ducet` ist im Web nicht verfügbar.                                                                                                                                                                                                                                                                                                                                    |
| `gb2312` {{deprecated_inline}}   | Pinyin-Sortierung für lateinische Zeichen und Sortierung nach dem gb2312han-Zeichensatz für CJK-Zeichen (für Chinesisch). Auch als `gb2312han` bekannt. | Veraltet.                                                                                                                                                                                                                                                                                                                                                                                 |
| `reformed` {{deprecated_inline}} | Reformierte Sortierung (beispielsweise für Schwedisch).                                                                                                 | Veraltet. Dies ist die frühere Bezeichnung für die Standardsortierung des Schwedischen, [dessen Sortierungsbezeichnungen sich früher von denen anderer Sprachen unterschieden](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies die Standardsortierung war, geben Sie `sv` statt `sv-u-co-reformed` an.                                                                      |
| `search`                         | Spezieller Sortierungstyp für die Suche nach Strings.                                                                                                   | Verwenden Sie diesen Wert nicht als Sortierungstyp, da diese Sortierung in {{jsxref("Intl.Collator")}} über die Option `usage: "search"` aktiviert wird. Derzeit gibt es keine API für die Suche nach Teilstrings. Daher eignet sich dies momentan nur dazu, eine Liste von Strings zu filtern, indem der Suchschlüssel mit jedem Listeneintrag als vollständiger String verglichen wird. |
| `standard`                       | Standardsortierung für jede Sprache außer Chinesisch (und früher Schwedisch).                                                                           | Verwenden Sie diesen Wert nicht ausdrücklich. Im Allgemeinen ist seine ausdrückliche Angabe unnötig; für Schwedisch ist sie aufgrund der früher abweichenden Bedeutung problematisch.                                                                                                                                                                                                     |

Referenzen:

- [CLDR-Schlüssel für Sortierungstypen](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Sortierung](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungsbezeichner

Währungsbezeichner sind dreibuchstabige Codes aus Großbuchstaben, die in ISO 4217 definiert sind. Diese Werte können beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} für die Option `currency` sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}} verwendet werden. Mehr als 300 Bezeichner sind gebräuchlich, weshalb sie hier nicht aufgeführt werden. Eine vollständige Liste möglicher Bezeichner finden Sie im [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

Referenzen:

- [CLDR-Schlüssel für Währungstypen](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217, Währungscodes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Zahlensystemtypen

Im Folgenden sind alle Werte aufgeführt, die Browser für den Schlüssel `numberingSystem` üblicherweise unterstützen. Diese Werte können beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} für die Option `numberingSystem` oder den [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) `nu` verwendet werden. Bei den Zeilen mit „Ziffernzeichen“ übersetzt die Laufzeitumgebung die Ziffern einzeln und ohne zusätzliche Schritte. Für die übrigen, als „algorithmisch“ gekennzeichneten Systeme sind zusätzliche Algorithmen zur Darstellung der Zahlen erforderlich. Je höher der Unicode-Codepunkt ist, desto neuer ist das Zahlensystem und desto wahrscheinlicher ist es, dass kein Browser es unterstützt.

| Wert       | Beschreibung                                                                                   | Ziffernzeichen                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                                  | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 bis U+1E959)                                                                      |
| `ahom`     | Ahom-Ziffern                                                                                   | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 bis U+11739)                                                                      |
| `arab`     | Arabisch-indische Ziffern                                                                      | `٠١٢٣٤٥٦٧٨٩` (U+0660 bis U+0669)                                                                        |
| `arabext`  | Erweiterte arabisch-indische Ziffern                                                           | `۰۱۲۳۴۵۶۷۸۹` (U+06F0 bis U+06F9)                                                                        |
| `armn`     | Armenische Zahlzeichen in Großschreibung                                                       | algorithmisch                                                                                           |
| `armnlow`  | Armenische Zahlzeichen in Kleinschreibung                                                      | algorithmisch                                                                                           |
| `bali`     | Balinesische Ziffern                                                                           | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 bis U+1B59)                                                                        |
| `beng`     | Bengalische Ziffern                                                                            | `০১২৩৪৫৬৭৮৯` (U+09E6 bis U+09EF)                                                                        |
| `bhks`     | Bhaiksuki-Ziffern                                                                              | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 bis U+11C59)                                                                      |
| `brah`     | Brahmi-Ziffern                                                                                 | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 bis U+1106F)                                                                      |
| `cakm`     | Chakma-Ziffern                                                                                 | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 bis U+1113F)                                                                      |
| `cham`     | Cham-Ziffern                                                                                   | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 bis U+AA59)                                                                        |
| `cyrl`     | Kyrillische Zahlzeichen                                                                        | algorithmisch                                                                                           |
| `deva`     | Devanagari-Ziffern                                                                             | `०१२३४५६७८९` (U+0966 bis U+096F)                                                                        |
| `diak`     | Dives-Akuru-Ziffern                                                                            | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 bis U+11959)                                                                      |
| `ethi`     | Äthiopische Zahlzeichen                                                                        | algorithmisch                                                                                           |
| `fullwide` | Vollbreite Ziffern                                                                             | `０１２３４５６７８９` (U+FF10 bis U+FF19)                                                              |
| `gara`     | Garay-Ziffern                                                                                  | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 bis U+10D49)                                                                      |
| `geor`     | Georgische Zahlzeichen                                                                         | algorithmisch                                                                                           |
| `gong`     | Gunjala-Gondi-Ziffern                                                                          | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 bis U+11DA9)                                                                      |
| `gonm`     | Masaram-Gondi-Ziffern                                                                          | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 bis U+11D59)                                                                      |
| `grek`     | Griechische Zahlzeichen in Großschreibung                                                      | algorithmisch                                                                                           |
| `greklow`  | Griechische Zahlzeichen in Kleinschreibung                                                     | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                                               | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 bis U+0AEF)                                                                        |
| `gukh`     | Gurung-Khema-Ziffern                                                                           | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 bis U+16139)                                                                      |
| `guru`     | Gurmukhi-Ziffern                                                                               | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 bis U+0A6F)                                                                        |
| `hanidays` | Nummerierung der Monatstage mit Han-Zeichen für Mondkalender und andere traditionelle Kalender |                                                                                                         |
| `hanidec`  | Positionsgebundenes Dezimalsystem mit chinesischen Zahlideogrammen als Ziffern                 | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte chinesische Zahlzeichen                                                           | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte chinesische Zahlzeichen für Finanzangaben                                         | algorithmisch                                                                                           |
| `hant`     | Traditionelle chinesische Zahlzeichen                                                          | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle chinesische Zahlzeichen für Finanzangaben                                        | algorithmisch                                                                                           |
| `hebr`     | Hebräische Zahlzeichen                                                                         | algorithmisch                                                                                           |
| `hmng`     | Pahawh-Hmong-Ziffern                                                                           | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 bis U+16B59)                                                                      |
| `hmnp`     | Nyiakeng-Puachue-Hmong-Ziffern                                                                 | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 bis U+1E149)                                                                      |
| `java`     | Javanische Ziffern                                                                             | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 bis U+A9D9)                                                                        |
| `jpan`     | Japanische Zahlzeichen                                                                         | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Zahlzeichen für Finanzangaben                                                       | algorithmisch                                                                                           |
| `jpanyear` | Japanische Gannen-Zählung für das erste Jahr einer Ära im japanischen Kalender                 | algorithmisch                                                                                           |
| `kali`     | Kayah-Li-Ziffern                                                                               | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 bis U+A909)                                                                        |
| `kawi`     | Kawi-Ziffern                                                                                   | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 bis U+11F59)                                                                      |
| `khmr`     | Khmer-Ziffern                                                                                  | `០១២៣៤៥៦៧៨៩` (U+17E0 bis U+17E9)                                                                        |
| `knda`     | Kannada-Ziffern                                                                                | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 bis U+0CEF)                                                                        |
| `krai`     | Kirat-Rai-Ziffern                                                                              | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 bis U+16D79)                                                                      |
| `lana`     | Weltliche Tai-Tham-Hora-Ziffern                                                                | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 bis U+1A89)                                                                        |
| `lanatham` | Religiöse Tai-Tham-Ziffern                                                                     | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 bis U+1A99)                                                                        |
| `laoo`     | Laotische Ziffern                                                                              | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 bis U+0ED9)                                                                        |
| `latn`     | Lateinische Ziffern                                                                            | `0123456789` (U+0030 bis U+0039)                                                                        |
| `lepc`     | Lepcha-Ziffern                                                                                 | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 bis U+1C49)                                                                        |
| `limb`     | Limbu-Ziffern                                                                                  | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 bis U+194F)                                                                        |
| `mathbold` | Mathematische fette Ziffern                                                                    | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE bis U+1D7D7)                                                                      |
| `mathdbl`  | Mathematische doppelt gestrichene Ziffern                                                      | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 bis U+1D7E1)                                                                      |
| `mathmono` | Mathematische nichtproportionale Ziffern                                                       | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 bis U+1D7FF)                                                                      |
| `mathsanb` | Mathematische fette serifenlose Ziffern                                                        | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC bis U+1D7F5)                                                                      |
| `mathsans` | Mathematische serifenlose Ziffern                                                              | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 bis U+1D7EB)                                                                      |
| `mlym`     | Malayalam-Ziffern                                                                              | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 bis U+0D6F)                                                                        |
| `modi`     | Modi-Ziffern                                                                                   | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 bis U+11659)                                                                      |
| `mong`     | Mongolische Ziffern                                                                            | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 bis U+1819)                                                                        |
| `mroo`     | Mro-Ziffern                                                                                    | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 bis U+16A69)                                                                      |
| `mtei`     | Meetei-Mayek-Ziffern                                                                           | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 bis U+ABF9)                                                                        |
| `mymr`     | Myanmar-Ziffern                                                                                | `၀၁၂၃၄၅၆၇၈၉` (U+1040 bis U+1049)                                                                        |
| `mymrepka` | Myanmar-Ziffern der östlichen Pwo-Karen                                                        | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA bis U+116E3)                                                                      |
| `mymrpao`  | Myanmar-Ziffern der Pa'o                                                                       | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 bis U+116D9)                                                                      |
| `mymrshan` | Myanmar-Ziffern der Shan                                                                       | `႐႑႒႓႔႕႖႗႘႙` (U+1090 bis U+1099)                                                                        |
| `mymrtlng` | Myanmar-Ziffern der Tai Laing                                                                  | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 bis U+A9F9)                                                                        |
| `nagm`     | Nag-Mundari-Ziffern                                                                            | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 bis U+1E4F9)                                                                      |
| `newa`     | Newa-Ziffern                                                                                   | `𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙` (U+11450 bis U+11459)                                                                      |
| `nkoo`     | N'Ko-Ziffern                                                                                   | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 bis U+07C9)                                                                        |
| `olck`     | Ol-Chiki-Ziffern                                                                               | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 bis U+1C59)                                                                        |
| `onao`     | Ol-Onal-Ziffern                                                                                | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 bis U+1E5FA)                                                                      |
| `orya`     | Oriya-Ziffern                                                                                  | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 bis U+0B6F)                                                                        |
| `osma`     | Osmanya-Ziffern                                                                                | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 bis U+104A9)                                                                      |
| `outlined` | Umrissziffern aus älteren Computersystemen                                                     | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 bis U+1CCF9)                                                                      |
| `rohg`     | Hanifi-Rohingya-Ziffern                                                                        | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 bis U+10D39)                                                                      |
| `roman`    | Römische Zahlzeichen in Großschreibung                                                         | algorithmisch                                                                                           |
| `romanlow` | Römische Zahlzeichen in Kleinschreibung                                                        | algorithmisch                                                                                           |
| `saur`     | Saurashtra-Ziffern                                                                             | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 bis U+A8D9)                                                                        |
| `segment`  | Segmentierte Ziffern aus älteren Computersystemen                                              | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 bis U+1FBF9)                                                                      |
| `shrd`     | Sharada-Ziffern                                                                                | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 bis U+111D9)                                                                      |
| `sind`     | Khudawadi-Ziffern                                                                              | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 bis U+112F9)                                                                      |
| `sinh`     | Sinhala-Lith-Ziffern                                                                           | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 bis U+0DEF)                                                                        |
| `sora`     | Sora-Sompeng-Ziffern                                                                           | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 bis U+110F9)                                                                      |
| `sund`     | Sundanesische Ziffern                                                                          | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 bis U+1BB9)                                                                        |
| `sunu`     | Sunuwar-Ziffern                                                                                | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 bis U+11BF9)                                                                      |
| `takr`     | Takri-Ziffern                                                                                  | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 bis U+116C9)                                                                      |
| `talu`     | Neu-Tai-Lue-Ziffern                                                                            | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 bis U+19D9)                                                                        |
| `taml`     | Tamilische Zahlzeichen                                                                         | algorithmisch                                                                                           |
| `tamldec`  | Moderne tamilische Dezimalziffern                                                              | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 bis U+0BEF)                                                                        |
| `telu`     | Telugu-Ziffern                                                                                 | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 bis U+0C6F)                                                                        |
| `thai`     | Thailändische Ziffern                                                                          | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 bis U+0E59)                                                                        |
| `tibt`     | Tibetische Ziffern                                                                             | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 bis U+0F29)                                                                        |
| `tirh`     | Tirhuta-Ziffern                                                                                | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 bis U+114D9)                                                                      |
| `tnsa`     | Tangsa-Ziffern                                                                                 | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 bis U+16AC9)                                                                      |
| `vaii`     | Vai-Ziffern                                                                                    | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 bis U+A629)                                                                        |
| `wara`     | Warang-Citi-Ziffern                                                                            | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 bis U+118E9)                                                                      |
| `wcho`     | Wancho-Ziffern                                                                                 | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 bis U+1E2F9)                                                                      |

Es gibt drei besondere Werte: `native`, `traditio` und `finance`. Ihre Bedeutung hängt von der Locale ab; sie werden entsprechend der Locale dem passenden Zahlensystem zugeordnet. Die Methoden `resolvedOptions()` geben diese Werte daher nie zurück, `Intl.Locale.prototype.numberingSystem` hingegen schon (wenn sie als Eingabe angegeben wurden).

Referenzen:

- [CLDR-Schlüssel für Zahlensystemtypen](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR-Definitionen von Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Zahlensysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonenbezeichner

Unterstützte Zeitzonenbezeichner können beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}} für die Option `timeZone` sowie zum Erstellen von {{jsxref("Temporal")}}-Datumsobjekten verwendet werden. Mehr als 400 Bezeichner sind gebräuchlich, weshalb sie hier nicht aufgeführt werden. Eine vollständige Liste möglicher Bezeichner finden Sie im [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder in der [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones).

Beachten Sie beim Durchsehen der Liste, dass Browser aufgrund der Standardisierung von `Temporal` stets den primären Bezeichner aus der IANA-Datenbank zurückgeben müssen. Dieser kann sich im Laufe der Zeit ändern. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Beispielsweise sollte das zurückgegebene Array `"Asia/Kolkata"` statt `"Asia/Calcutta"` enthalten, da Letzteres ein Alias für Ersteres ist und beide Indien zugeordnet sind. Es sollte jedoch sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, da sie zu unterschiedlichen Ländern gehören, obwohl Letzteres ebenfalls ein Alias für Ersteres ist.

Referenzen:

- [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonenbezeichner](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheitenbezeichner

Im Folgenden sind alle Werte aufgeführt, die Browser für den Schlüssel `unit` üblicherweise unterstützen. Diese Werte können beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} für die Option `unit` verwendet werden. Diese Liste ist eine Teilmenge der CLDR-Werte, die in der ECMA-402-Spezifikation ausdrücklich zugelassen ist, sodass alle Implementierungen übereinstimmen sollten.

- `acre`
- `bit`
- `byte`
- `celsius`
- `centimeter`
- `day`
- `degree`
- `fahrenheit`
- `fluid-ounce`
- `foot`
- `gallon`
- `gigabit`
- `gigabyte`
- `gram`
- `hectare`
- `hour`
- `inch`
- `kilobit`
- `kilobyte`
- `kilogram`
- `kilometer`
- `liter`
- `megabit`
- `megabyte`
- `meter`
- `microsecond`
- `mile`
- `mile-scandinavian`
- `milliliter`
- `millimeter`
- `millisecond`
- `minute`
- `month`
- `nanosecond`
- `ounce`
- `percent`
- `petabyte`
- `pound`
- `second`
- `stone`
- `terabit`
- `terabyte`
- `week`
- `yard`
- `year`

Bei der Angabe von Einheiten können Sie auch zwei Einheiten mit dem Trennzeichen „-per-“ kombinieren, beispielsweise `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [In ECMA-402 zugelassene einzelne Einheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR-Daten zur Gültigkeit von Einheiten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheitenbezeichner](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wird.

## Beispiele

### Unterstützung prüfen

Sie können prüfen, ob die Methode unterstützt wird, indem Sie sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für einen Schlüssel abrufen

Um die unterstützten Kalenderwerte abzurufen, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf. Anschließend können Sie wie unten gezeigt über das zurückgegebene Array iterieren:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

Die übrigen Werte werden auf dieselbe Weise abgerufen:

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### Ein ungültiger Schlüssel löst RangeError aus

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  // RangeError: invalid key: "someInvalidKey"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Intl.supportedValuesOf` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
