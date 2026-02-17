---
title: Intl.supportedValuesOf()
short-title: supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

Die **`Intl.supportedValuesOf()`** statische Methode gibt ein Array zurück, das die vom Interpreter unterstützten Werte für Kalender, Kollationen, Währungen, Zahlensysteme oder Einheiten enthält.

Duplikate werden ausgelassen und das Array wird in aufsteigender lexikographischer Reihenfolge sortiert (oder genauer gesagt, unter Verwendung von {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu prüfen, ob Werte in einer bestimmten Implementierung unterstützt werden, und nur dann ein Polyfill herunterzuladen, wenn dies erforderlich ist. Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es Benutzern ermöglichen, ihre bevorzugten lokalisierten Werte auszuwählen, beispielsweise wenn die Benutzeroberfläche aus WebGL oder serverseitig erstellt wird.

Diese Methode ist nicht lokalbezogen: Es ist möglich, dass bestimmte Bezeichner nur in bestimmten Lokalen unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für ein spezifisches Lokale ermitteln möchten, sollten Sie das {{jsxref("Intl.Locale")}}-Objekt verwenden, wie zum Beispiel {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

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
  - : Ein Schlüssel-String, der die Kategorie der zurückgegebenen Werte angibt. Dies ist einer der folgenden:
    - `"calendar"`: siehe [unterstützte Kalendertypen](#unterstützte_kalendertypen)
    - `"collation"`: siehe [unterstützte Kollationstypen](#unterstützte_kollationstypen)
    - `"currency"`: siehe [unterstützte Währungsbezeichner](#unterstützte_währungsbezeichner)
    - `"numberingSystem"`: siehe [unterstützte Zahlensystemtypen](#unterstützte_zahlensystemtypen)
    - `"timeZone"`: siehe [unterstützte Zeitzonenbezeichner](#unterstützte_zeitzonenbezeichner)
    - `"unit"`: siehe [unterstützte Einheit-Bezeichner](#unterstützte_einheit-bezeichner)

### Rückgabewert

Ein sortiertes Array einzigartiger String-Werte, die die von der Implementierung für den gegebenen Schlüssel unterstützten Werte angeben. Die Werte, die zurückgegeben werden könnten, sind unten aufgeführt.

#### Unterstützte Kalendertypen

Nachfolgend sind alle Werte aufgeführt, die von Browsern häufig für den `calendar` Schlüssel unterstützt werden. Diese Werte können für die `calendar` Option oder den `ca` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellt werden, sowie für die Erstellung von {{jsxref("Temporal")}} Datumobjekten. Diese Liste wird ausdrücklich durch die ECMA-402-Spezifikation sanktioniert, sodass alle Implementierungen konsistent sein sollten.

| Wert               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buddhist`         | Thailändischer buddhistischer Kalender, proleptisch. Monatsnummern, Monatscodes und Tage sind identisch mit denen des ISO 8601-Kalenders, jedoch ist das Epoche-Jahr anders. Es gibt eine Ära.                                                                                                                                                                                                                      |
| `chinese`          | Traditioneller chinesischer Kalender, proleptisch. Lunisolarkalender, der in China verwendet wird, basierend auf Daten des Purple Mountain Observatory zwischen 1900 und 2100 (die mit GB/T 33661-2017 zwischen 1912 und 2100 übereinstimmen) und außerhalb dieses Bereichs auf eine implementierungsspezifische Annäherung zurückfällt. Das arithmetische Jahr ist identisch mit `gregory` und es gibt keine Ären. |
| `coptic`           | Koptischer Kalender, proleptisch. Ähnlicher Sonnenalgorithmus wie `ethioaa` und `ethiopic`, mit einer Ära und einem anderen Epoche-Jahr.                                                                                                                                                                                                                                                                            |
| `dangi`            | Traditioneller koreanischer Kalender, proleptisch. Lunisolarkalender, der Monate verwendet, die vom Korea Astronomy and Space Science Institute (KASI) zwischen 1900 und 2050 veröffentlicht wurden, und außerhalb dieses Bereichs auf eine implementierungsspezifische Annäherung zurückfällt. Das arithmetische Jahr ist identisch mit `gregory` und es gibt keine Ären.                                          |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem, proleptisch. Ähnlicher Sonnenalgorithmus wie `coptic` und `ethiopic`, mit einer Ära und einem anderen Epoche-Jahr.                                                                                                                                                                                                                                                               |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret, proleptisch. Ähnlicher Sonnenalgorithmus wie `coptic` und `ethioaa`, mit zwei Ären und einem anderen Epoche-Jahr.                                                                                                                                                                                                                                                              |
| `gregory`          | Gregorianischer Kalender, proleptisch. Solarkalender, der fast identisch mit dem ISO 8601-Kalender ist, mit Ausnahme, dass er keine Wochennummerierung definiert und zwei Ären enthält, eine vor dem Epochejahr.                                                                                                                                                                                                    |
| `hebrew`           | Hebräischer Kalender, proleptisch. Bürgerlicher Kalender mit Tischri als erstem Monat des Jahres. Lunisolarkalender mit einem Schaltmonat, der nach dem fünften Monat eingefügt wird. Es gibt eine Ära.                                                                                                                                                                                                             |
| `indian`           | Indischer nationaler (oder Śaka) Kalender, proleptisch. Solarkalender mit einer Ära.                                                                                                                                                                                                                                                                                                                                |
| `islamic-civil`    | Hijri-Kalender, proleptisch, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (nummeriert ab 1)) und bürgerlichem Epoche (Freitag, 16. Juli 622 Julian / 0622-07-19 ISO)                                                                                                                                                                             |
| `islamic-tbla`     | Hijri-Kalender, proleptisch, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (nummeriert ab 1)) und astronomischem Epoche (Donnerstag, 15. Juli 622 Julian / 0622-07-18 ISO)                                                                                                                                                                        |
| `islamic-umalqura` | Hijri-Kalender, proleptisch, Umm al-Qura. Lunarkalender, der von KACST berechnete Monate vom Beginn des Jahres 1300 AH (1882-11-12 ISO) bis zum Ende des Jahres 1600 AH (2174-11-25 ISO) verwendet, und außerhalb dieses Zeitraums auf `islamic-civil` zurückfällt.                                                                                                                                                 |
| `iso8601`          | ISO-Kalender (Variante des Gregorianischen Kalenders mit Wochenregeln und Formatierungsparametern, die regionsunabhängig gemacht wurden)                                                                                                                                                                                                                                                                            |
| `japanese`         | Japanischer kaiserlicher Kalender (dieser Kalender fügt für jeden neuen Kaiser eine Ära hinzu, sodass das Ausgabejahr und die Ära eines zukünftigen Datums möglicherweise nicht mit dem Eingabejahr und der Ära übereinstimmen, wenn Ihr Code auf einer zukünftigen Engine-Version ausgeführt wird. **Hinweis:** Siehe die Bemerkungen unter dieser Tabelle zu Daten vor dem 23.10.1868 ISO.)                       |
| `persian`          | Persischer (oder Solar-Hijri) Kalender, proleptisch. Es gibt eine Ära.                                                                                                                                                                                                                                                                                                                                              |
| `roc`              | Republik China (oder Minguo) Kalender, proleptisch. Monatsnummern, Monatscodes und Tage sind identisch mit denen des ISO 8601-Kalenders, aber das Epoche Jahr ist anders. Es gibt zwei Ären, eine vor dem Epoche Jahr und eine danach.                                                                                                                                                                              |

Stand Oktober 2025 funktionieren im `japanese` Kalender die Daten vor dem 23.10.1868 ISO (dem Startdatum des Jahres 1 Meiji) in Browsern nicht wie erwartet, und zwar in zwei Weisen. Erstens hatte [CLDR das falsche Startdatum für die Meiji-Ära](https://unicode-org.atlassian.net/browse/CLDR-11375), was dazu führt, dass Kalenderimplementierungen die Meiji-Ära weiter in die Vergangenheit ausdehnen, als sie tatsächlich war. Zweitens gibt die bevorstehende [Intl-Ära und Monatscode-Vorschlag](https://tc39.es/proposal-intl-era-monthcode/) an, dass Daten vor dem 01.01.1873 ISO gregorianische Ären verwenden sollten, aber Browser traditionell Annäherungen vorhergehender japanischer Ären verwendet haben. Der `japanese` Kalender wurde am 1. Januar, 6 Meiji / 01.01.1873 ISO, in Gebrauch genommen, daher betreffen diese Probleme nur proleptische Daten.

Die folgenden Typen sind in CLDR spezifiziert, haben jedoch keine von den oben genannten Kalendern in Browsern verschiedenen Implementierungen.

| Wert                             | Beschreibung                                        | Anmerkungen                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ethiopic-amete-alem`            | Äthiopischer Kalender, Amete Alem, proleptisch.     | Dies ist ein Alias für `ethioaa` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `ethioaa`.                                                                                                                                                                                                                                                                        |
| `islamic`                        | Hijri-Kalender, unbestimmter Algorithmus.           | Seit April 2025 ist dies eine astronomische Simulation, deren Parameter undokumentiert sind und die nicht dafür bekannt ist, mit einer bestimmten Hijri-Kalender-Variante aus nicht-software Kontexten übereinzustimmen. Es ist vorgesehen, in einen anderen Kalender kanonisiert zu werden, üblicherweise einen von `islamic-umalqura`, `islamic-tbla` oder `islamic-civil`, und eine Warnung auszugeben. |
| `islamicc` {{deprecated_inline}} | Bürgerlicher (algorithmischer) arabischer Kalender. | Dies ist ein Alias für `islamic-civil` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`.                                                                                                                                                                                                                                                            |

Die {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} und {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} Dokumentationen bieten weitere Informationen über verschiedene Kalender.

Referenzen:

- [CLDR Kalendertypen Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Daten](https://unicode.org/reports/tr35/tr35-dates.html)
- [Islamische Kalendertypen](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR Designvorschlag)

#### Unterstützte Kollationstypen

Nachfolgend sind alle Werte aufgeführt, die von Browsern häufig für den `collation` Schlüssel unterstützt werden. Diese Werte können für die `collation` Option oder den `co` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.Collator")}} erstellt werden.

| Wert       | Beschreibung                                                                                                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine vorherige Version der Reihenfolge, zur Kompatibilität (für Arabisch)                                                                                                                                                   |
| `dict`     | Wörterbuchstilreihung (zum Beispiel in Singhalesisch). Wird auch als `dictionary` erkannt.                                                                                                                                  |
| `emoji`    | Empfohlene Reihenfolge für Emoji-Zeichen                                                                                                                                                                                    |
| `eor`      | Europäische Ordnungsregeln                                                                                                                                                                                                  |
| `phonebk`  | Telefonbuchstilreihung (zum Beispiel in Deutsch). Wird auch als `phonebook` erkannt.                                                                                                                                        |
| `phonetic` | Phonetische Reihenfolge (Sortierung basierend auf der Aussprache; für Lingala)                                                                                                                                              |
| `pinyin`   | Pinyin-Reihenfolge für lateinische und CJK-Zeichen (wird in Chinesisch verwendet)                                                                                                                                           |
| `searchjl` | Spezielle Kollationstyp für koreanische Eingangs-Konsonantensuche. **Warnung:** Diese Kollation ist nicht zum Sortieren gedacht, auch wenn Sie es nur mit {{jsxref("Intl.Collator")}} von `usage: "sort"` verwenden können. |
| `stroke`   | Pinyin-Reihenfolge für Latein, Strichordnung für CJK-Zeichen (wird in Chinesisch verwendet)                                                                                                                                 |
| `trad`     | Traditioneller Stil (zum Beispiel in Spanisch). Wird auch als `traditional` erkannt.                                                                                                                                        |
| `unihan`   | Pinyin-Reihenfolge für Latein, Unihan-Radikal-Strich Reihung für CJK-Zeichen (wird in Chinesisch verwendet)                                                                                                                 |
| `zhuyin`   | Pinyin-Reihenfolge für Latein, Zhuyin-Reihenfolge für Bopomofo- und CJK-Zeichen (wird in Chinesisch verwendet)                                                                                                              |

Die folgenden Typen sind in CLDR-Daten spezifiziert, sind jedoch veraltet, werden von der expliziten Verwendung abgeraten und/oder können aus verschiedenen Gründen von Browsern nicht als unterstützt angezeigt werden. Vermeiden Sie deren Verwendung:

| Wert                             | Beschreibung                                                                                                                          | Anmerkungen                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `big5han` {{deprecated_inline}}  | Pinyin-Reihenfolge für Latein, Big5-Zeichensatz Reihenfolge für CJK-Zeichen (verwendet in Chinesisch)                                 | Veraltet.                                                                                                                                                                                                                                                                                                                                                                                              |
| `direct` {{deprecated_inline}}   | Binäre Codepunkt Reihenfolge (verwendet in Hindi)                                                                                     | Veraltet.                                                                                                                                                                                                                                                                                                                                                                                              |
| `ducet`                          | Die Standard-Unicode-Kollationselement-Tabelle Reihenfolge                                                                            | Der `ducet` Kollationstyp ist im Web nicht verfügbar.                                                                                                                                                                                                                                                                                                                                                  |
| `gb2312` {{deprecated_inline}}   | Pinyin-Reihenfolge für Latein, gb2312han Zeichensatz Reihenfolge für CJK-Zeichen (für Chinesisch). Wird auch als `gb2312han` erkannt. | Veraltet.                                                                                                                                                                                                                                                                                                                                                                                              |
| `reformed` {{deprecated_inline}} | Reformierte Reihenfolge (zum Beispiel für Schwedisch)                                                                                 | Veraltet. Dies ist der alte Name für die Standardreihenfolge für Schwedisch [dessen Kollationsnamen sich von anderen Sprachen unterschieden](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies der Standard war, wird empfohlen `sv` statt `sv-u-co-reformed` anzufordern.                                                                                                                 |
| `search`                         | Spezial-Kollationstyp für Zeichenfolgensuche                                                                                          | Verwenden Sie dies nicht als Kollationstyp, da in {{jsxref("Intl.Collator")}} diese Kollation über die `usage: "search"`-Option aktiviert wird. Derzeit gibt es keine API für Substring-Suchen, daher ist dies derzeit nur gut zum Filtern einer Liste von Zeichenfolgen, indem versucht wird, einen vollständigen Zeichenfolgenabgleich zwischen dem Schlüssel und jedem Listenelement durchzuführen. |
| `standard`                       | Standardreihenfolge für jede Sprache, außer Chinesisch (und zuvor Schwedisch)                                                         | Verwenden Sie dies nicht explizit. Im Allgemeinen ist es unnötig, dies explizit anzugeben, und die Angabe für Schwedisch ist problematisch aufgrund der unterschiedlichen Bedeutung für Schwedisch in der Vergangenheit.                                                                                                                                                                               |

Referenzen:

- [CLDR Kollationstypen Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Kollation](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungsbezeichner

Währungsbezeichner sind dreistellige Buchstabencodes in Großbuchstaben, die im ISO 4217 definiert sind. Diese Werte können für die `currency`-Option verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden, sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}. Es gibt über 300 Bezeichner im allgemeinen Gebrauch, daher werden wir sie nicht auflisten. Für eine umfassende Liste möglicher Bezeichner siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

Referenzen:

- [CLDR Währungsbezeichner Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Währungscodes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Zahlensystemtypen

Nachfolgend sind alle Werte aufgeführt, die von Browsern häufig für den `numberingSystem` Schlüssel unterstützt werden. Diese Werte können für die `numberingSystem` Option oder den `nu` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden. Für die Zeilen mit "Ziffernzeichen" übersetzt die Laufzeit die Ziffern eins zu eins ohne zusätzliche Aktionen. Die anderen, die als "algorithmisch" markiert sind, benötigen zusätzliche Algorithmen, um die Ziffern zu übersetzen. Je höher der Unicode-Codepunkt ist, desto neuer ist das Zahlensystem und desto wahrscheinlicher ist es, dass es von allen Browsern nicht unterstützt wird.

| Wert       | Beschreibung                                                                           | Ziffernzeichen                                                                                          |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                          | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 bis U+1E959)                                                                      |
| `ahom`     | Ahom-Ziffern                                                                           | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 bis U+11739)                                                                      |
| `arab`     | Arabisch-Indische Ziffern                                                              | `٠١٢٣٤٥٦٧٨٩` (U+0660 bis U+0669)                                                                        |
| `arabext`  | Erweiterte Arabisch-Indische Ziffern                                                   | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 bis U+06F9)                                                                       |
| `armn`     | Armenische Großbuchstabenziffern                                                       | algorithmisch                                                                                           |
| `armnlow`  | Armenische Kleinbuchstabenziffern                                                      | algorithmisch                                                                                           |
| `bali`     | Balinesische Ziffern                                                                   | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 bis U+1B59)                                                                        |
| `beng`     | Bengalische Ziffern                                                                    | `০১২৩৪৫৬৭৮৯` (U+09E6 bis U+09EF)                                                                        |
| `bhks`     | Bhaiksuki-Ziffern                                                                      | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 bis U+11C59)                                                                      |
| `brah`     | Brahmi-Ziffern                                                                         | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 bis U+1106F)                                                                      |
| `cakm`     | Chakma-Ziffern                                                                         | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 bis U+1113F)                                                                      |
| `cham`     | Cham-Ziffern                                                                           | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 bis U+AA59)                                                                        |
| `cyrl`     | Kyrillische Zahlzeichen                                                                | algorithmisch                                                                                           |
| `deva`     | Devanagari-Ziffern                                                                     | `०१२३४५६७८९` (U+0966 bis U+096F)                                                                        |
| `diak`     | Dives Akuru Ziffern                                                                    | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 bis U+11959)                                                                      |
| `ethi`     | Äthiopische Zahlzeichen                                                                | algorithmisch                                                                                           |
| `fullwide` | Vollbreite Ziffern                                                                     | `０１２３４５６７８９` (U+FF10 bis U+FF19)                                                              |
| `gara`     | Garay-Ziffern                                                                          | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 bis U+10D49)                                                                      |
| `geor`     | Georgische Zahlzeichen                                                                 | algorithmisch                                                                                           |
| `gong`     | Gunjala-Gondi-Ziffern                                                                  | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 bis U+11DA9)                                                                      |
| `gonm`     | Masaram-Gondi-Ziffern                                                                  | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 bis U+11D59)                                                                      |
| `grek`     | Griechische Großbuchstabenzahlzeichen                                                  | algorithmisch                                                                                           |
| `greklow`  | Griechische Kleinbuchstabenzahlzeichen                                                 | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                                       | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 bis U+0AEF)                                                                        |
| `gukh`     | Gurung Khema Ziffern                                                                   | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 bis U+16139)                                                                      |
| `guru`     | Gurmukhi-Ziffern                                                                       | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 bis U+0A6F)                                                                        |
| `hanidays` | Han-Zeichen-Tag-des-Monats-Nummerierung für Mond- oder andere traditionelle Kalender   |                                                                                                         |
| `hanidec`  | Positionsbasiertes Dezimalsystem unter Verwendung chinesischer Zahlzeichen als Ziffern | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte chinesische Zahlzeichen                                                   | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte chinesische Finanzzahlzeichen                                             | algorithmisch                                                                                           |
| `hant`     | Traditionelle chinesische Zahlzeichen                                                  | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle chinesische Finanzzahlzeichen                                            | algorithmisch                                                                                           |
| `hebr`     | Hebräische Zahlzeichen                                                                 | algorithmisch                                                                                           |
| `hmng`     | Pahawh Hmong Ziffern                                                                   | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 bis U+16B59)                                                                      |
| `hmnp`     | Nyiakeng Puachue Hmong Ziffern                                                         | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 bis U+1E149)                                                                      |
| `java`     | Javanesische Ziffern                                                                   | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 bis U+A9D9)                                                                        |
| `jpan`     | Japanische Zahlzeichen                                                                 | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Finanzzahlzeichen                                                           | algorithmisch                                                                                           |
| `jpanyear` | Japanische Erste-Jahr-Gannen-Nummerierung für japanischen Kalender                     | algorithmisch                                                                                           |
| `kali`     | Kayah Li Ziffern                                                                       | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 bis U+A909)                                                                        |
| `kawi`     | Kawi-Ziffern                                                                           | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 bis U+11F59)                                                                      |
| `khmr`     | Khmer-Ziffern                                                                          | `០១២៣៤៥៦៧៨៩` (U+17E0 bis U+17E9)                                                                        |
| `knda`     | Kannada-Ziffern                                                                        | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 bis U+0CEF)                                                                        |
| `krai`     | Kirat Rai Ziffern                                                                      | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 bis U+16D79)                                                                      |
| `lana`     | Tai Tham Hora (weltliche) Ziffern                                                      | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 bis U+1A89)                                                                        |
| `lanatham` | Tai Tham (kirchliche) Ziffern                                                          | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 bis U+1A99)                                                                        |
| `laoo`     | Laotische Ziffern                                                                      | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 bis U+0ED9)                                                                        |
| `latn`     | Lateinische Ziffern                                                                    | `0123456789` (U+0030 bis U+0039)                                                                        |
| `lepc`     | Lepcha-Ziffern                                                                         | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 bis U+1C49)                                                                        |
| `limb`     | Limbu-Ziffern                                                                          | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 bis U+194F)                                                                        |
| `mathbold` | Mathematische Fettdruck-Ziffern                                                        | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE bis U+1D7D7)                                                                      |
| `mathdbl`  | Mathematische Doppelstrich-Ziffern                                                     | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 bis U+1D7E1)                                                                      |
| `mathmono` | Mathematische Monospace-Ziffern                                                        | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 bis U+1D7FF)                                                                      |
| `mathsanb` | Mathematische Sans-Serif-Fettdruck-Ziffern                                             | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC bis U+1D7F5)                                                                      |
| `mathsans` | Mathematische Sans-Serif-Ziffern                                                       | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 bis U+1D7EB)                                                                      |
| `mlym`     | Malayalam-Ziffern                                                                      | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 bis U+0D6F)                                                                        |
| `modi`     | Modi-Ziffern                                                                           | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 bis U+11659)                                                                      |
| `mong`     | Mongolische Ziffern                                                                    | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 bis U+1819)                                                                        |
| `mroo`     | Mro-Ziffern                                                                            | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 bis U+16A69)                                                                      |
| `mtei`     | Meetei Mayek Ziffern                                                                   | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 bis U+ABF9)                                                                        |
| `mymr`     | Myanma-Ziffern                                                                         | `၀၁၂၃၄၅၆၇၈၉` (U+1040 bis U+1049)                                                                        |
| `mymrepka` | Myanmar Eastern Pwo Karen Ziffern                                                      | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA bis U+116E3)                                                                      |
| `mymrpao`  | Myanmar Pao Ziffern                                                                    | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 bis U+116D9)                                                                      |
| `mymrshan` | Myanmar Shan Ziffern                                                                   | `႐႑႒႓႔႕႖႗႘႙` (U+1090 bis U+1099)                                                                        |
| `mymrtlng` | Myanmar Tai Laing Ziffern                                                              | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 bis U+A9F9)                                                                        |
| `nagm`     | Nag Mundari Ziffern                                                                    | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 bis U+1E4F9)                                                                      |
| `newa`     | Newa-Ziffern                                                                           | `𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙` (U+11450 bis U+11459)                                                                      |
| `nkoo`     | N'Ko-Ziffern                                                                           | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 bis U+07C9)                                                                        |
| `olck`     | Ol-Chiki-Ziffern                                                                       | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 bis U+1C59)                                                                        |
| `onao`     | Ol Onal Ziffern                                                                        | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 bis U+1E5FA)                                                                      |
| `orya`     | Oriya-Ziffern                                                                          | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 bis U+0B6F)                                                                        |
| `osma`     | Osmania-Ziffern                                                                        | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 bis U+104A9)                                                                      |
| `outlined` | Legacy Computing Umrissene Ziffern                                                     | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 bis U+1CCF9)                                                                      |
| `rohg`     | Hanifi Rohingya Ziffern                                                                | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 bis U+10D39)                                                                      |
| `roman`    | Römische Großbuchstabenzahlzeichen                                                     | algorithmisch                                                                                           |
| `romanlow` | Römische Kleinbuchstabenzahlzeichen                                                    | algorithmisch                                                                                           |
| `saur`     | Saurashtra-Ziffern                                                                     | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 bis U+A8D9)                                                                        |
| `segment`  | Legacy Computing Segmentierte Ziffern                                                  | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 bis U+1FBF9)                                                                      |
| `shrd`     | Sharada-Ziffern                                                                        | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 bis U+111D9)                                                                      |
| `sind`     | Khudawadi-Ziffern                                                                      | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 bis U+112F9)                                                                      |
| `sinh`     | Singhalesische Lith-Ziffern                                                            | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 bis U+0DEF)                                                                        |
| `sora`     | Sora-Sompeng-Ziffern                                                                   | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 bis U+110F9)                                                                      |
| `sund`     | Sundanesische Ziffern                                                                  | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 bis U+1BB9)                                                                        |
| `sunu`     | Sunuwar-Ziffern                                                                        | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 bis U+11BF9)                                                                      |
| `takr`     | Takri-Ziffern                                                                          | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 bis U+116C9)                                                                      |
| `talu`     | Neue Tai Lue Ziffern                                                                   | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 bis U+19D9)                                                                        |
| `taml`     | Tamilische Zahlzeichen                                                                 | algorithmisch                                                                                           |
| `tamldec`  | Moderne Tamilische Dezimalziffern                                                      | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 bis U+0BEF)                                                                        |
| `telu`     | Telugu-Ziffern                                                                         | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 bis U+0C6F)                                                                        |
| `thai`     | Thailändische Ziffern                                                                  | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 bis U+0E59)                                                                        |
| `tibt`     | Tibetische Ziffern                                                                     | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 bis U+0F29)                                                                        |
| `tirh`     | Tirhuta-Ziffern                                                                        | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 bis U+114D9)                                                                      |
| `tnsa`     | Tangsa-Ziffern                                                                         | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 bis U+16AC9)                                                                      |
| `vaii`     | Vai-Ziffern                                                                            | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 bis U+A629)                                                                        |
| `wara`     | Warang Citi Ziffern                                                                    | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 bis U+118E9)                                                                      |
| `wcho`     | Wancho-Ziffern                                                                         | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 bis U+1E2F9)                                                                      |

Es gibt drei spezielle Werte: `native`, `traditio` und `finance`, deren Bedeutungen von den Lokalen abhängen und vom Lokale-Skript in das richtige System aufgelöst werden. Daher werden die `resolvedOptions()` Methoden niemals diese Werte zurückgeben, aber `Intl.Locale.prototype.numberingSystem` wird es (wenn es als Eingabe übergeben wurde).

Referenzen:

- [CLDR Zahlensystemtypen Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Zahlensystemdefinitionen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Zahlensysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonenbezeichner

Unterstützte Zeitzonenbezeichner können für die `timeZone` Option verwendet werden, wenn Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellt werden, sowie für die Erstellung von {{jsxref("Temporal")}} Datumobjekten. Es gibt über 400 Bezeichner im allgemeinen Gebrauch, daher werden wir sie nicht auflisten. Für eine umfassende Liste möglicher Bezeichner siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder die [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones).

Beim Durchsuchen der Liste beachten Sie, dass die Standardisierung von `Temporal` erfordert, dass Browser immer den primären Bezeichner in der IANA-Datenbank zurückgeben, der sich im Laufe der Zeit ändern kann. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen. Beispielsweise sollte das zurückgegebene Array `"Asia/Kolkata"` statt `"Asia/Calcutta"` enthalten, weil letzteres ein Alias für ersteres ist und beide zu Indien gehören; es sollte jedoch sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, weil sie sich in verschiedenen Ländern befinden, obwohl letzteres auch ein Alias für ersteres ist.

Referenzen:

- [IANA Zeitzonendatenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonenbezeichner](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheit-Bezeichner

Nachfolgend sind alle Werte aufgeführt, die von Browsern häufig für den `unit` Schlüssel unterstützt werden. Diese Werte können für die `unit` Option verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden. Diese Liste ist ein Teilset der CLDR, das ausdrücklich von der ECMA-402-Spezifikation sanktioniert wird, so dass alle Implementierungen konsistent sein sollten.

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

Bei der Angabe von Einheiten können Sie auch zwei Einheiten mit dem "-per-" Separator kombinieren. Zum Beispiel: `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [ECMA-402 sanktionierte Einzeleinheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Einheit Gültigkeitsdaten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheit-Bezeichner](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Funktionstest

Sie können prüfen, ob die Methode unterstützt wird, indem Sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für Schlüssel abrufen

Um die unterstützten Werte für Kalender abzurufen, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf. Sie können dann durch das zurückgegebene Array iterieren, wie unten gezeigt:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

Die anderen Werte werden alle auf die gleiche Weise abgerufen:

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

### Ungültiger Schlüssel wirft RangeError

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

- [Polyfill von `Intl.supportedValuesOf` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
