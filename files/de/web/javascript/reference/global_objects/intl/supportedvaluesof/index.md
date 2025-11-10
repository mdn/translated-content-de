---
title: Intl.supportedValuesOf()
short-title: supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 8792a4bbc7d6db3611edad0b942119498a764ca6
---

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array zurück, das die unterstützten Kalender-, Kollations-, Währungs-, Zahlensystem- oder Einheit-Werte enthält, die von der Implementierung unterstützt werden.

Duplikate werden weggelassen und das Array wird in aufsteigender lexikografischer Reihenfolge sortiert (oder präziser, indem {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion verwendet wird).

Die Methode kann verwendet werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden, und ggf. nur dann ein Polyfill herunterzuladen, wenn es notwendig ist. Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es Nutzern ermöglichen, ihre bevorzugten lokalisierten Werte auszuwählen, beispielsweise wenn die Benutzeroberfläche von WebGL oder serverseitig erstellt wird.

Diese Methode ist nicht lokalabhängig: Es kann sein, dass bestimmte Bezeichner nur in bestimmten Lokalen unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für ein bestimmtes Lokal bestimmen wollen, sollten Sie das Objekt {{jsxref("Intl.Locale")}}, wie z.B. {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}, verwenden.

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
  - : Ein Schlüssel-String, der die Kategorie der zurückzugebenden Werte angibt. Dies ist eine der folgenden:
    - `"calendar"`: siehe [unterstützte Kalenderarten](#unterstützte_kalenderarten)
    - `"collation"`: siehe [unterstützte Kollationsarten](#unterstützte_kollationsarten)
    - `"currency"`: siehe [unterstützte Währungskennungen](#unterstützte_währungskennungen)
    - `"numberingSystem"`: siehe [unterstützte Zahlensystemarten](#unterstützte_zahlensystem-arten)
    - `"timeZone"`: siehe [unterstützte Zeitzonenkennungen](#unterstützte_zeitzonenkennungen)
    - `"unit"`: siehe [unterstützte Einheitskennungen](#unterstützte_einheitskennungen)

### Rückgabewert

Ein sortiertes Array von eindeutigen Zeichenfolgenwerten, die die von der Implementierung für den angegebenen Schlüssel unterstützten Werte angeben. Die Werte, die zurückgegeben werden könnten, sind unten aufgeführt.

#### Unterstützte Kalenderarten

Unten stehen alle Werte, die allgemein von Browsern für den Schlüssel `calendar` unterstützt werden. Diese Werte können für die `calendar`-Option oder den `ca` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellt werden, sowie für die Erstellung von {{jsxref("Temporal")}} Datumsobjekten.

| Wert               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buddhist`         | Thailändischer buddhistischer Kalender                                                                                                                                                                                                                                                                                                                                                                                          |
| `chinese`          | Traditioneller chinesischer Kalender                                                                                                                                                                                                                                                                                                                                                                                            |
| `coptic`           | Koptischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                             |
| `dangi`            | Traditioneller koreanischer Kalender                                                                                                                                                                                                                                                                                                                                                                                            |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem, Einzelära-Variante (Epoche ca. 5493 v. Chr.)                                                                                                                                                                                                                                                                                                                                                 |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret, Zwei-Ära-Variante (Epoche ca. 8 n. Chr., Amete Alem für Jahre vor Amete Mihret)                                                                                                                                                                                                                                                                                                            |
| `gregory`          | Gregorianischer Kalender (proleptisch, _kein_ Julianischer Hybrid)                                                                                                                                                                                                                                                                                                                                                              |
| `hebrew`           | Traditioneller hebräischer Kalender                                                                                                                                                                                                                                                                                                                                                                                             |
| `indian`           | Indischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                              |
| `islamic`          | Hijri-Kalender, nicht näher spezifizierter Algorithmus. **Hinweis:** Ab April 2025 ist dies eine astronomische Simulation, deren Parameter nicht dokumentiert sind und die nicht bekannt ist, einem spezifischen Hijri-Kalender aus nicht-softwarebezogenen Kontexten zu entsprechen. Für wohlbestimmte Ergebnisse verwenden Sie eine der drei spezifischen Varianten: `islamic-umalqura`, `islamic-tbla` oder `islamic-civil`. |
| `islamic-umalqura` | Hijri-Kalender, Umm al-Qura (verwendet KACST-berechnete Monate vom Beginn des Jahres 1300 AH (1882-11-12 ISO) bis zum Ende des Jahres 1600 AH (2174-11-25 ISO) und greift außerhalb dieses Bereichs auf `islamic-civil` zurück)                                                                                                                                                                                                 |
| `islamic-tbla`     | Hijri-Kalender, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (eins-basierte Nummerierung)) und Donnerstag/astronomische Epoche (15. Juli 622 Julian / 0622-07-18 ISO)                                                                                                                                                                                        |
| `islamic-civil`    | Hijri-Kalender, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (eins-basierte Nummerierung)) und Freitag/zivile Epoche (16. Juli 622 Julian / 0622-07-19 ISO)                                                                                                                                                                                                  |
| `iso8601`          | ISO-Kalender (Variante des Gregorianischen Kalenders mit Wochenregeln und Formatierungsparametern, die regionsunabhängig gemacht wurden)                                                                                                                                                                                                                                                                                        |
| `japanese`         | Japanischer Imperialkalender (dieser Kalender fügt für jeden neuen Kaiser eine Epoche hinzu, sodass das Ausgabedatum und die Epoche für ein zukünftiges Datum möglicherweise nicht mit dem Eingabedatum und der Epoche übereinstimmen, wenn Ihr Code auf einer zukünftigen Engine-Version ausgeführt wird. **Hinweis:** Siehe die Bemerkungen unter dieser Tabelle zu Daten vor 1868-10-23 ISO.)                                |
| `persian`          | Persischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                             |
| `roc`              | Republik China Kalender                                                                                                                                                                                                                                                                                                                                                                                                         |

Ab Oktober 2025 funktionieren beim `japanese` Kalender Daten vor dem 23.10.1868 ISO (dem Startdatum des Jahres 1 Meiji) in Browsern in zwei Arten nicht wie erwartet. Erstens hatte [CLDR das falsche Startdatum für die Meiji-Ära](https://unicode-org.atlassian.net/browse/CLDR-11375), was dazu führt, dass Kalenderimplementierungen die Meiji-Ära weiter in die Vergangenheit ausdehnen als sie es tatsächlich tat. Zweitens gibt die kommende [Intl-Epoch- und MonthCode-Vorschlag](https://tc39.es/proposal-intl-era-monthcode/) an, dass Daten vor der Meiji-Ära Gregorianische Epochen verwenden sollten, aber Browser traditionell stattdessen Annäherungen an frühere japanische Epochen verwendet haben. Der `japanese` Kalender wurde am 1. Januar, 6 Meiji / 1873-01-01 ISO eingeführt, sodass diese Probleme nur proleptische Daten betreffen.

Die unten aufgeführten Typen sind in CLDR spezifiziert, haben jedoch in Browsern keine von den oben genannten Kalendern unterschiedlichen Implementierungen.

| Wert                             | Beschreibung                                   | Anmerkungen                                                                                                                                                                                                                                                                |
| -------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | Ziviler (algorithmischer) arabischer Kalender. | Dies ist ein Alias für `islamic-civil` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`.                                                                                                                            |
| `islamic-rgsa`                   | Hijri-Kalender, Saudi-Arabien-Sichtung         | Browser haben keine historischen Sichtungsdaten und zukünftige Sichtungen sind noch nicht erfolgt. Ab April 2025 resultiert dieser Kalender in demselben Verhalten wie `islamic`. Verwenden Sie `islamic-umalqura` für eine auf Mekka basierende astronomische Berechnung. |

Referenzen:

- [CLDR Kalender-Typenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Daten](https://unicode.org/reports/tr35/tr35-dates.html)
- [Islamic calendar types](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR Designvorschlag)

#### Unterstützte Kollationsarten

Unten stehen alle Werte, die allgemein von Browsern für den Schlüssel `collation` unterstützt werden. Diese Werte können für die `collation`-Option oder den `co` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.Collator")}} erstellt werden.

| Wert       | Beschreibung                                                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine vorherige Version der Sortierreihenfolge zur Kompatibilität (für Arabisch)                                                                                                                                                       |
| `dict`     | Wörterbuchstil-Sortierreihenfolge (wie in Sinhala). Auch als `dictionary` bekannt.                                                                                                                                                    |
| `emoji`    | Empfohlene Reihenfolge für Emoji-Zeichen                                                                                                                                                                                              |
| `eor`      | Europäische Sortierreihenfolge                                                                                                                                                                                                        |
| `phonebk`  | Telefonbuchstil-Sortierreihenfolge (wie im Deutschen). Auch als `phonebook` bekannt.                                                                                                                                                  |
| `phonetic` | Phonetische Sortierreihenfolge (Sortierung basierend auf Aussprache; für Lingala)                                                                                                                                                     |
| `pinyin`   | Pinyin-Sortierung für Lateinisches und für CJK-Zeichen (verwendet im Chinesischen)                                                                                                                                                    |
| `searchjl` | Spezieller Kollationstyp für die Suche nach koreanischen Erstkonsonanten. **Warnung:** Diese Kollation ist nicht zur Sortierung gedacht, auch wenn sie nur mit {{jsxref("Intl.Collator")}} von `usage: "sort"` verwendet werden kann. |
| `stroke`   | Pinyin-Sortierung für Lateinisches, Strich-Reihenfolge für CJK-Zeichen (verwendet im Chinesischen)                                                                                                                                    |
| `trad`     | Traditioneller Stil der Sortierreihenfolge (wie im Spanischen). Auch bekannt als `traditional`.                                                                                                                                       |
| `unihan`   | Pinyin-Sortierung für Lateinisches, Unihan Radikalen-Strich-Sortierung für CJK-Zeichen (verwendet im Chinesischen)                                                                                                                    |
| `zhuyin`   | Pinyin-Sortierung für Lateinisches, Zhuyin-Sortierung für Bopomofo und CJK-Zeichen (verwendet im Chinesischen)                                                                                                                        |

Die unten aufgeführten Typen sind in CLDR-Daten spezifiziert, sind jedoch veraltet, werden von der expliziten Nutzung abgeraten und/oder möglicherweise nicht von Browsern als unterstützt angezeigt, aus verschiedenen Gründen. Vermeiden Sie deren Verwendung:

| Wert                             | Beschreibung                                                                                                                          | Anmerkungen                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin-Sortierung für Lateinisches, Big5-Zeichensatz-Sortierung für CJK-Zeichen (verwendet im Chinesischen)                           | Veraltet.                                                                                                                                                                                                                                                                                                                                                         |
| `direct` {{deprecated_inline}}   | Binäre Codepunkt-Reihenfolge (verwendet im Hindi)                                                                                     | Veraltet.                                                                                                                                                                                                                                                                                                                                                         |
| `ducet`                          | Die Standard-Unicode-Kollationselementtabelle Ordnung                                                                                 | Der `ducet` Kollationstyp ist nicht für das Web verfügbar.                                                                                                                                                                                                                                                                                                        |
| `gb2312` {{deprecated_inline}}   | Pinyin-Sortierung für Lateinisches, gb2312han Zeichensatz-Reihenfolge für CJK-Zeichen (für Chinesisch). Auch bekannt als `gb2312han`. | Veraltet.                                                                                                                                                                                                                                                                                                                                                         |
| `reformed` {{deprecated_inline}} | Reformierte Sortierreihenfolge (wie Schwedisch)                                                                                       | Veraltet. Dies ist der alte Name für die Standardsortierung für Schwedisch [dessen Kollationsbenennung früher von anderen Sprachen abwich](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies der Standard war, fordern Sie `sv` anstatt `sv-u-co-reformed` anzufordern.                                                                               |
| `search`                         | Spezieller Kollationstyp für die Suche nach Zeichenfolgen                                                                             | Nicht als Kollationstyp verwenden, da in {{jsxref("Intl.Collator")}} diese Kollation über die `usage: "search"`-Option aktiviert wird. Derzeit gibt es keine API für Unterzeichenfolgenerkennung, sodass dies momentan nur für das Filtern einer Liste von Strings durch den Versuch eines Vollstring-Abgleichs des Schlüssels gegen jedes Listenelement gut ist. |
| `standard`                       | Standard-Sortierreihenfolge für jede Sprache, außer Chinesisch (und zuvor Schwedisch)                                                 | Nicht explizit verwenden. Im Allgemeinen ist es unnötig, dies explizit anzugeben, und das Angeben davon für Schwedisch ist aufgrund der unterschiedlichen Bedeutung für Schwedisch in der Vergangenheit problematisch.                                                                                                                                            |

Referenzen:

- [CLDR Kollation-Typenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Kollation](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungskennungen

Währungskennungen sind dreibuchstabige Großbuchstabencodes, die in ISO 4217 definiert sind. Diese Werte können für die `currency`-Option verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden, sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}. Es gibt über 300 Kennungen, die allgemein verwendet werden, daher werden wir sie nicht alle auflisten. Für eine umfassende Liste möglicher Kennungen sehen Sie sich den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes) an.

Referenzen:

- [CLDR Währungs-Typenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Währungscodes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Zahlensystem-Arten

Unten stehen alle Werte, die allgemein von Browsern für den Schlüssel `numberingSystem` unterstützt werden. Diese Werte können für die `numberingSystem`-Option oder den `nu` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden. Für die Zeilen mit "Ziffernzeichen" übersetzt die Laufzeit die Ziffern einzeln ohne zusätzliche Aktionen. Für die anderen, die als "algorithmisch" gekennzeichnet sind, sind zusätzliche Algorithmen erforderlich, um die Ziffern zu übersetzen. Je höher der Unicode-Codepunkt ist, desto neuer ist das Zahlensystem und desto wahrscheinlicher wird es von allen Browsern nicht unterstützt.

| Wert       | Beschreibung                                                                  | Ziffernzeichen                                                                                          |
| ---------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                 | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 bis U+1E959)                                                                      |
| `ahom`     | Ahom-Ziffern                                                                  | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 bis U+11739)                                                                      |
| `arab`     | Arabisch-Indische Ziffern                                                     | `٠١٢٣٤٥٦٧٨٩` (U+0660 bis U+0669)                                                                        |
| `arabext`  | Erweiterte Arabisch-Indische Ziffern                                          | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 bis U+06F9)                                                                       |
| `armn`     | Armenische Großbuchstabe-Zahlen                                               | algorithmisch                                                                                           |
| `armnlow`  | Armenische Kleinbuchstabe-Zahlen                                              | algorithmisch                                                                                           |
| `bali`     | Balinesische Ziffern                                                          | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 bis U+1B59)                                                                        |
| `beng`     | Bengalische Ziffern                                                           | `০১২৩৪৫৬৭৮৯` (U+09E6 bis U+09EF)                                                                        |
| `bhks`     | Bhaiksuki-Ziffern                                                             | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 bis U+11C59)                                                                      |
| `brah`     | Brahmi-Ziffern                                                                | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 bis U+1106F)                                                                      |
| `cakm`     | Chakma-Ziffern                                                                | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 bis U+1113F)                                                                      |
| `cham`     | Cham-Ziffern                                                                  | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 bis U+AA59)                                                                        |
| `cyrl`     | Kyrillische Zahlen                                                            | algorithmisch                                                                                           |
| `deva`     | Devanagari-Ziffern                                                            | `०१२३४५६७८९` (U+0966 bis U+096F)                                                                        |
| `diak`     | Dives Akuru-Ziffern                                                           | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 bis U+11959)                                                                      |
| `ethi`     | Äthiopische Zahlen                                                            | algorithmisch                                                                                           |
| `fullwide` | Vollbreiten-Ziffern                                                           | `０１２３４５６７８９` (U+FF10 bis U+FF19)                                                              |
| `gara`     | Garay-Ziffern                                                                 | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 bis U+10D49)                                                                      |
| `geor`     | Georgische Zahlen                                                             | algorithmisch                                                                                           |
| `gong`     | Gunjala Gondi-Ziffern                                                         | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 bis U+11DA9)                                                                      |
| `gonm`     | Masaram Gondi-Ziffern                                                         | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 bis U+11D59)                                                                      |
| `grek`     | Griechische Großbuchstabe-Zahlen                                              | algorithmisch                                                                                           |
| `greklow`  | Griechische Kleinbuchstabe-Zahlen                                             | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                              | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 bis U+0AEF)                                                                        |
| `gukh`     | Gurung Khema-Ziffern                                                          | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 bis U+16139)                                                                      |
| `guru`     | Gurmukhi-Ziffern                                                              | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 bis U+0A6F)                                                                        |
| `hanidays` | Han-Zeichen Tag-Monat Zahlen für Mond/andere traditionelle Kalender           |                                                                                                         |
| `hanidec`  | Positionales Dezimalsystem, das chinesische Zahlzeichen als Ziffern verwendet | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte chinesische Zahlen                                               | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte chinesische Finanzzahlen                                         | algorithmisch                                                                                           |
| `hant`     | Traditionelle chinesische Zahlen                                              | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle chinesische Finanzzahlen                                        | algorithmisch                                                                                           |
| `hebr`     | Hebräische Zahlen                                                             | algorithmisch                                                                                           |
| `hmng`     | Pahawh Hmong-Ziffern                                                          | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 bis U+16B59)                                                                      |
| `hmnp`     | Nyiakeng Puachue Hmong-Ziffern                                                | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 bis U+1E149)                                                                      |
| `java`     | Javanische Ziffern                                                            | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 bis U+A9D9)                                                                        |
| `jpan`     | Japanische Zahlen                                                             | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Finanzzahlen                                                       | algorithmisch                                                                                           |
| `jpanyear` | Japanische Erster-Jahres-Gannen-Nummerierung für japanischen Kalender         | algorithmisch                                                                                           |
| `kali`     | Kayah Li-Ziffern                                                              | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 bis U+A909)                                                                        |
| `kawi`     | Kawi-Ziffern                                                                  | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 bis U+11F59)                                                                      |
| `khmr`     | Khmer-Ziffern                                                                 | `០១២៣៤៥៦៧៨៩` (U+17E0 bis U+17E9)                                                                        |
| `knda`     | Kannada-Ziffern                                                               | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 bis U+0CEF)                                                                        |
| `krai`     | Kirat Rai-Ziffern                                                             | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 bis U+16D79)                                                                      |
| `lana`     | Tai Tham Hora (säkulare) Ziffern                                              | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 bis U+1A89)                                                                        |
| `lanatham` | Tai Tham (klerikale) Ziffern                                                  | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 bis U+1A99)                                                                        |
| `laoo`     | Lao-Ziffern                                                                   | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 bis U+0ED9)                                                                        |
| `latn`     | Lateinische Ziffern                                                           | `0123456789` (U+0030 bis U+0039)                                                                        |
| `lepc`     | Lepcha-Ziffern                                                                | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 bis U+1C49)                                                                        |
| `limb`     | Limbu-Ziffern                                                                 | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 bis U+194F)                                                                        |
| `mathbold` | Mathematische fette Ziffern                                                   | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE bis U+1D7D7)                                                                      |
| `mathdbl`  | Mathematische doppelt geschlagene Ziffern                                     | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 bis U+1D7E1)                                                                      |
| `mathmono` | Mathematische Monospace-Ziffern                                               | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 bis U+1D7FF)                                                                      |
| `mathsanb` | Mathematische sans-serif fette Ziffern                                        | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC bis U+1D7F5)                                                                      |
| `mathsans` | Mathematische sans-serif Ziffern                                              | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 bis U+1D7EB)                                                                      |
| `mlym`     | Malayalam-Ziffern                                                             | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 bis U+0D6F)                                                                        |
| `modi`     | Modi-Ziffern                                                                  | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 bis U+11659)                                                                      |
| `mong`     | Mongolische Ziffern                                                           | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 bis U+1819)                                                                        |
| `mroo`     | Mro-Ziffern                                                                   | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 bis U+16A69)                                                                      |
| `mtei`     | Meetei Mayek-Ziffern                                                          | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 bis U+ABF9)                                                                        |
| `mymr`     | Myanmar-Ziffern                                                               | `၀၁၂၃၄၅၆၇၈၉` (U+1040 bis U+1049)                                                                        |
| `mymrepka` | Myanmar Eastern Pwo Karen-Ziffern                                             | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA bis U+116E3)                                                                      |
| `mymrpao`  | Myanmar Pao-Ziffern                                                           | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 bis U+116D9)                                                                      |
| `mymrshan` | Myanmar Shan-Ziffern                                                          | `႐႑႒႓႔႕႖႗႘႙` (U+1090 bis U+1099)                                                                        |
| `mymrtlng` | Myanmar Tai Laing-Ziffern                                                     | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 bis U+A9F9)                                                                        |
| `nagm`     | Nag Mundari-Ziffern                                                           | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 bis U+1E4F9)                                                                      |
| `newa`     | Newa-Ziffern                                                                  | `𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙` (U+11450 bis U+11459)                                                                      |
| `nkoo`     | N'Ko-Ziffern                                                                  | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 bis U+07C9)                                                                        |
| `olck`     | Ol Chiki-Ziffern                                                              | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 bis U+1C59)                                                                        |
| `onao`     | Ol Onal-Ziffern                                                               | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 bis U+1E5FA)                                                                      |
| `orya`     | Oriya-Ziffern                                                                 | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 bis U+0B6F)                                                                        |
| `osma`     | Osmanya-Ziffern                                                               | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 bis U+104A9)                                                                      |
| `outlined` | Legacy Computing Outline-Ziffern                                              | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 bis U+1CCF9)                                                                      |
| `rohg`     | Hanifi Rohingya-Ziffern                                                       | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 bis U+10D39)                                                                      |
| `roman`    | Römische Großbuchstabe-Zahlen                                                 | algorithmisch                                                                                           |
| `romanlow` | Römische Kleinbuchstabe-Zahlen                                                | algorithmisch                                                                                           |
| `saur`     | Saurashtra-Ziffern                                                            | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 bis U+A8D9)                                                                        |
| `segment`  | Legacy Computing Segmentierte Ziffern                                         | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 bis U+1FBF9)                                                                      |
| `shrd`     | Sharada-Ziffern                                                               | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 bis U+111D9)                                                                      |
| `sind`     | Khudawadi-Ziffern                                                             | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 bis U+112F9)                                                                      |
| `sinh`     | Singhalesische Lit-Ziffern                                                    | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 bis U+0DEF)                                                                        |
| `sora`     | Sora Sompeng-Ziffern                                                          | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 bis U+110F9)                                                                      |
| `sund`     | Sundanesische Ziffern                                                         | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 bis U+1BB9)                                                                        |
| `sunu`     | Sunuwar-Ziffern                                                               | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 bis U+11BF9)                                                                      |
| `takr`     | Takri-Ziffern                                                                 | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 bis U+116C9)                                                                      |
| `talu`     | Neue Tai Lue-Ziffern                                                          | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 bis U+19D9)                                                                        |
| `taml`     | Tamilische Zahlen                                                             | algorithmisch                                                                                           |
| `tamldec`  | Moderne tamilische Dezimalziffern                                             | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 bis U+0BEF)                                                                        |
| `telu`     | Telugu-Ziffern                                                                | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 bis U+0C6F)                                                                        |
| `thai`     | Thailändische Ziffern                                                         | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 bis U+0E59)                                                                        |
| `tibt`     | Tibetische Ziffern                                                            | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 bis U+0F29)                                                                        |
| `tirh`     | Tirhuta-Ziffern                                                               | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 bis U+114D9)                                                                      |
| `tnsa`     | Tangsa-Ziffern                                                                | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 bis U+16AC9)                                                                      |
| `vaii`     | Vai-Ziffern                                                                   | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 bis U+A629)                                                                        |
| `wara`     | Warang Citi-Ziffern                                                           | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 bis U+118E9)                                                                      |
| `wcho`     | Wancho-Ziffern                                                                | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 bis U+1E2F9)                                                                      |

Es gibt drei spezielle Werte: `native`, `traditio` und `finance`, deren Bedeutungen vom Lokal abhängen und die auf das richtige System entsprechend dem Lokal aufgelöst werden. Daher werden die `resolvedOptions()`-Methoden niemals diese Werte zurückgeben, aber `Intl.Locale.prototype.numberingSystem` wird es (wenn als Eingabe angegeben).

Referenzen:

- [CLDR Zahlensystem-Typenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Zahlensystemdefinitionen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Zahlensysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonenkennungen

Unterstützte Zeitzonenkennungen können für die `timeZone`-Option verwendet werden, wenn Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellt werden, sowie für die Erstellung von {{jsxref("Temporal")}} Datumsobjekten. Es gibt über 400 Kennungen, die allgemein verwendet werden, daher werden wir sie nicht alle auflisten. Für eine umfassende Liste möglicher Kennungen sehen Sie sich den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder die [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones) an.

Beachten Sie während des Durchsehens der Liste, dass die Standardisierung von `Temporal` erfordert, dass Browser immer die primäre Kennung in der IANA-Datenbank zurückgeben, die sich im Laufe der Zeit ändern kann. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Zum Beispiel sollte das zurückgegebene Array `"Asia/Kolkata"` statt `"Asia/Calcutta"` enthalten, da Letzteres ein Alias von Ersterem ist und beide Indien entsprechen; es sollte jedoch sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, da sich diese in verschiedenen Ländern befinden, obwohl Letzteres auch ein Alias von Ersterem ist.

Referenzen:

- [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonenkennungen](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheitskennungen

Unten stehen alle Werte, die allgemein von Browsern für den Schlüssel `unit` unterstützt werden. Diese Werte können für die `unit`-Option verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden. Diese Liste ist ein Teil von der CLDR, die ausdrücklich von der ECMA-402-Spezifikation zugelassen ist, sodass alle Implementierungen konsistent sein sollten.

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

Beim Spezifizieren von Einheiten können Sie auch zwei Einheiten mit dem "-pro-" Separator kombinieren. Zum Beispiel, `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [ECMA-402 sanktionierte einzelne Einheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Einheitengültigkeitsdaten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheitskennungen](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Funktionstest

Sie können überprüfen, ob die Methode unterstützt wird, indem Sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für Schlüssel erhalten

Um die unterstützten Werte für den Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf.
Sie können dann durch das zurückgegebene Array wie unten gezeigt iterieren:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

Die anderen Werte werden auf die gleiche Weise erhalten:

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
