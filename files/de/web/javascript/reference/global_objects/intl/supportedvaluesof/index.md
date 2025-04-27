---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{JSRef}}

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array zurück, das die unterstützten Kalender-, Kollations-, Währungs-, Nummerierungssystem- oder Einheitswerte enthält, die von der Implementierung unterstützt werden.

Duplikate werden ausgelassen und das Array wird in aufsteigender lexikographischer Reihenfolge sortiert (oder genauer gesagt, durch die Verwendung von {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden, und einen Polyfill nur bei Bedarf herunterzuladen.
Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es Benutzern ermöglichen, ihre bevorzugten lokalisierten Werte auszuwählen, beispielsweise wenn die Benutzeroberfläche aus WebGL oder serverseitig erstellt wird.

Diese Methode ist nicht lokalebezogen: Es ist möglich, dass bestimmte Identifikatoren nur in bestimmten Regionen unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für eine bestimmte Region ermitteln möchten, sollten Sie das {{jsxref("Intl.Locale")}} Objekt verwenden, wie zum Beispiel {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

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
  - : Ein Schlüsselstring, der die Kategorie der zurückzugebenden Werte angibt. Dies ist einer von:
    - `"calendar"`: siehe [unterstützte Kalendertypen](#unterstützte_kalendertypen)
    - `"collation"`: siehe [unterstützte Kollationstypen](#unterstützte_kollationstypen)
    - `"currency"`: siehe [unterstützte Währungsidentifikatoren](#unterstützte_währungsidentifikatoren)
    - `"numberingSystem"`: siehe [unterstützte Nummerierungssystemtypen](#unterstützte_nummerierungssystemtypen)
    - `"timeZone"`: siehe [unterstützte Zeitzonenidentifikatoren](#unterstützte_zeitzonen-identifikatoren)
    - `"unit"`: siehe [unterstützte Einheitsidentifikatoren](#unterstützte_einheitsidentifikatoren)

### Rückgabewert

Ein sortiertes Array mit eindeutigen Zeichenfolgenwerten, die die von der Implementierung für den gegebenen Schlüssel unterstützten Werte angeben. Die zurückgegebenen Werte sind unten aufgeführt.

#### Unterstützte Kalendertypen

Nachfolgend sind alle Werte aufgeführt, die in Browsern üblicherweise für den Schlüssel `calendar` unterstützt werden. Diese Werte können für die `calendar`-Option oder den `ca` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellt werden, sowie zur Erstellung von {{jsxref("Temporal")}}-Datum-Objekten.

| Wert               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buddhist`         | Thailändischer buddhistischer Kalender                                                                                                                                                                                                                                                                                                                                                                                     |
| `chinese`          | Traditioneller chinesischer Kalender                                                                                                                                                                                                                                                                                                                                                                                       |
| `coptic`           | Koptischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                        |
| `dangi`            | Traditioneller koreanischer Kalender                                                                                                                                                                                                                                                                                                                                                                                       |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem, Single-Ära-Variante (Epoche ca. 5493 v. Chr.)                                                                                                                                                                                                                                                                                                                                           |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret, Zwei-Ära-Variante (Epoche ca. 8 n. Chr., Amete Alem für Jahre vor Amete Mihret)                                                                                                                                                                                                                                                                                                       |
| `gregory`          | Gregorianischer Kalender (proleptisch, _nicht_ julianisch)                                                                                                                                                                                                                                                                                                                                                                 |
| `hebrew`           | Traditioneller hebräischer Kalender                                                                                                                                                                                                                                                                                                                                                                                        |
| `indian`           | Indischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                         |
| `islamic`          | Hijri-Kalender, nicht spezifizierter Algorithmus. **Hinweis:** Ab April 2025 ist dies eine astronomische Simulation, deren Parameter nicht dokumentiert sind und die nicht bekannt ist, einer bestimmten Hijri-Kalendervariante aus Nicht-Software-Kontexten zu entsprechen. Für gut spezifizierte Ergebnisse verwenden Sie eine der drei spezifischen Varianten: `islamic-umalqura`, `islamic-tbla` oder `islamic-civil`. |
| `islamic-umalqura` | Hijri-Kalender, Umm al-Qura (verwendet KACST-berechnete Monate von Anfang 1300 AH bis Ende 1600 AH und greift außerhalb dieses Bereichs auf `islamic-civil` zurück)                                                                                                                                                                                                                                                        |
| `islamic-tbla`     | Hijri-Kalender, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahre-Zyklus (nummeriert ab 1)) und Donnerstag/astronomische Epoche (15. Juli 622 Julian / 0622-07-18 ISO)                                                                                                                                                                                               |
| `islamic-civil`    | Hijri-Kalender, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahre-Zyklus (nummeriert ab 1)) und Freitag/zivile Epoche (16. Juli 622 Julian / 0622-07-19 ISO)                                                                                                                                                                                                         |
| `iso8601`          | ISO-Kalender (Variante des Gregorianischen Kalenders mit Wochenregeln und formatierungstechnischen Parametern, die von der Region unabhängig gemacht werden)                                                                                                                                                                                                                                                               |
| `japanese`         | Japanischer Kaiserlicher Kalender (dieser Kalender fügt für jeden neuen Kaiser eine Ära hinzu, sodass das Ausgabejahr und die Ära für ein zukünftiges Datum möglicherweise nicht mit dem Eingabejahr und der Ära übereinstimmen, wenn Ihr Code auf einer zukünftigen Engine-Version ausgeführt wird)                                                                                                                       |
| `persian`          | Persischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                        |
| `roc`              | Kalender der Republik China                                                                                                                                                                                                                                                                                                                                                                                                |

Die folgenden Typen sind in der CLDR spezifiziert, haben aber keine Implementierungen, die sich von den oben genannten Kalendern in Browsern unterscheiden.

| Wert                             | Beschreibung                             | Anmerkungen                                                                                                                                                                                                                                                         |
| -------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | Arabischer Zivilkalender (algorithmisch) | Dies ist ein Alias für `islamic-civil` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`.                                                                                                                     |
| `islamic-rgsa`                   | Hijri-Kalender, Saudi-Arabien-Sichtung   | Browser haben keine historischen Sichtungsdaten und zukünftige Sichtungen sind noch nicht eingetreten. Ab April 2025 führt dieser Kalender zum gleichen Verhalten wie `islamic`. Verwenden Sie `islamic-umalqura` für eine Mecca-basierte astronomische Berechnung. |

Referenzen:

- [CLDR Kalendertyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Daten](https://unicode.org/reports/tr35/tr35-dates.html)
- [Islamische Kalendertypen](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR Designvorschlag)

#### Unterstützte Kollationstypen

Nachfolgend sind alle Werte aufgeführt, die in Browsern üblicherweise für den Schlüssel `collation` unterstützt werden. Diese Werte können für die `collation`-Option oder den `co` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.Collator")}} erstellt werden.

| Wert       | Beschreibung                                                                                                                                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine frühere Version des Sortergebnisses, aus Kompatibilitätsgründen (für Arabisch)                                                                                                                                                    |
| `dict`     | Wörterbuchsortierung (wie in Sinhala). Wird auch als `dictionary` erkannt.                                                                                                                                                             |
| `emoji`    | Empfohlene Sortierreihenfolge für Emoji-Zeichen                                                                                                                                                                                        |
| `eor`      | Europäische Sortierregeln                                                                                                                                                                                                              |
| `phonebk`  | Telefonbuchsortierung (wie im Deutschen). Wird auch als `phonebook` erkannt.                                                                                                                                                           |
| `phonetic` | Phonetische Sortierung (Sortierung basierend auf der Aussprache; für Lingala)                                                                                                                                                          |
| `pinyin`   | Pinyin-Sortierung für lateinische und CJK-Zeichen (verwendet im Chinesischen)                                                                                                                                                          |
| `searchjl` | Spezieller Kollationstyp für die Suche nach koreanischen Initialkonsonanten. **Warnung:** Diese Kollation ist nicht zum Sortieren gedacht, auch wenn Sie sie nur mit {{jsxref("Intl.Collator")}} von `usage: "sort"` verwenden können. |
| `stroke`   | Pinyin-Sortierung für lateinische, Strichfolge für CJK-Zeichen (verwendet im Chinesischen)                                                                                                                                             |
| `trad`     | Traditionelle Sortierung (wie im Spanischen). Wird auch als `traditional` erkannt.                                                                                                                                                     |
| `unihan`   | Pinyin-Sortierung für lateinische, Unihan-Radikal-Strichfolge-Sortierung für CJK-Zeichen (verwendet im Chinesischen)                                                                                                                   |
| `zhuyin`   | Pinyin-Sortierung für lateinische, Zhuyin-Sortierung für Bopomofo- und CJK-Zeichen (verwendet im Chinesischen)                                                                                                                         |

Die unten aufgeführten Typen sind in CLDR-Daten spezifiziert, aber veraltet, von der expliziten Verwendung abgeraten und/oder dürfen von Browsern aus verschiedenen Gründen nicht als unterstützt angezeigt werden. Vermeiden Sie die Verwendung:

| Wert                             | Beschreibung                                                                                                                            | Anmerkungen                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin-Sortierung für lateinische, Big5-Zeichensatzsortierung für CJK-Zeichen (verwendet im Chinesischen)                               | Veraltet.                                                                                                                                                                                                                                                                                                                                                                 |
| `direct` {{deprecated_inline}}   | Binäre Code-Punkt-Reihenfolge (verwendet im Hindi)                                                                                      | Veraltet.                                                                                                                                                                                                                                                                                                                                                                 |
| `ducet`                          | Die Standard-Reihenfolge der Unicode-Kollationselemente                                                                                 | Der `ducet`-Kollationstyp ist im Web nicht verfügbar.                                                                                                                                                                                                                                                                                                                     |
| `gb2312` {{deprecated_inline}}   | Pinyin-Sortierung für lateinische, gb2312han Zeichensatzsortierung für CJK-Zeichen (für Chinesisch). Wird auch als `gb2312han` erkannt. | Veraltet.                                                                                                                                                                                                                                                                                                                                                                 |
| `reformed` {{deprecated_inline}} | Reformierte Sortierung (wie im Schwedischen)                                                                                            | Veraltet. Dies ist der alte Name für die Standardsortierung für Schwedisch [dessen Kollationsbenennung sich von anderen Sprachen unterschied](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies die Standardeinstellung war, fordern Sie `sv` anstatt `sv-u-co-reformed` anzufordern.                                                                         |
| `search`                         | Spezieller Kollationstyp zur Strings-Wuche                                                                                              | Nicht als Kollationstyp verwenden, da bei {{jsxref("Intl.Collator")}} diese Kollation über die `usage: "search"`-Option aktiviert wird. Es gibt derzeit keine API für die Teilstringsuche, daher ist dies derzeit nur nützlich zum Filtern einer Liste von Strings, indem versucht wird, einen Vollstring-Abgleich der Schlüssel gegen jeden Listeneintrag durchzuführen. |
| `standard`                       | Standardsortierung für jede Sprache, außer Chinesisch (und, bisher, Schwedisch)                                                         | Nicht explizit verwenden. In der Regel ist es nicht notwendig, dies explizit anzugeben, und dies für Schwedisch anzugeben, ist problematisch aufgrund des unterschiedlichen Bedeutungsaspekts in der Vergangenheit.                                                                                                                                                       |

Referenzen:

- [CLDR Kollationstyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Kollation](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungsidentifikatoren

Währungsidentifikatoren sind dreibuchstabige Großcodes, die in ISO 4217 definiert sind. Diese Werte können für die `currency`-Option verwendet werden, wenn Sie Objekte wie {{jsxref("Intl.NumberFormat")}} erstellen, sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}. Es gibt über 300 Identifikatoren in gebräuchlicher Verwendung, daher werden wir sie nicht alle auflisten. Für eine erschöpfende Liste möglicher Identifikatoren siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

Referenzen:

- [CLDR Währungstyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Währungscodes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Nummerierungssystemtypen

Nachfolgend sind alle Werte aufgeführt, die in Browsern üblicherweise für den Schlüssel `numberingSystem` unterstützt werden. Diese Werte können für die `numberingSystem`-Option oder den `nu` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden. Bei den Zeilen mit "Ziffernzeichen" übersetzt die Laufzeit die Ziffern einzeln ohne zusätzliche Aktionen. Die anderen, die als "algorithmisch" markiert sind, benötigen zusätzliche Algorithmen, um die Ziffern zu übersetzen. Je höher der Unicode-Codepunkt ist, desto neuer ist das Nummerierungssystem und desto wahrscheinlicher wird es nicht von allen Browsern unterstützt.

| Wert       | Beschreibung                                                                  | Ziffernzeichen                                                                                          |
| ---------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                 | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 bis U+1E959)                                                                      |
| `ahom`     | Ahom-Ziffern                                                                  | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 bis U+11739)                                                                      |
| `arab`     | Arabisch-Indische Ziffern                                                     | `٠١٢٣٤٥٦٧٨٩` (U+0660 bis U+0669)                                                                        |
| `arabext`  | Erweiterte Arabisch-Indische Ziffern                                          | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 bis U+06F9)                                                                       |
| `armn`     | Armenische Großbuchstaben-Ziffern                                             | algorithmisch                                                                                           |
| `armnlow`  | Armenische Kleinbuchstaben-Ziffern                                            | algorithmisch                                                                                           |
| `bali`     | Balinesische Ziffern                                                          | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 bis U+1B59)                                                                        |
| `beng`     | Bengalische Ziffern                                                           | `০১২৩৪৫৬৭৮৯` (U+09E6 bis U+09EF)                                                                        |
| `bhks`     | Bhaiksuki-Ziffern                                                             | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 bis U+11C59)                                                                      |
| `brah`     | Brahmi-Ziffern                                                                | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 bis U+1106F)                                                                      |
| `cakm`     | Chakma-Ziffern                                                                | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 bis U+1113F)                                                                      |
| `cham`     | Cham-Ziffern                                                                  | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 bis U+AA59)                                                                        |
| `cyrl`     | Kyrillische Ziffern                                                           | algorithmisch                                                                                           |
| `deva`     | Devanagari-Ziffern                                                            | `०१२३४५६७८९` (U+0966 bis U+096F)                                                                        |
| `diak`     | Dives Akuru-Ziffern                                                           | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 bis U+11959)                                                                      |
| `ethi`     | Äthiopische Ziffern                                                           | algorithmisch                                                                                           |
| `fullwide` | Vollbreite-Ziffern                                                            | `０１２３４５６７８９` (U+FF10 bis U+FF19)                                                              |
| `gara`     | Garay-Ziffern                                                                 | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 bis U+10D49)                                                                      |
| `geor`     | Georgische Ziffern                                                            | algorithmisch                                                                                           |
| `gong`     | Gunjala Gondi-Ziffern                                                         | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 bis U+11DA9)                                                                      |
| `gonm`     | Masaram Gondi-Ziffern                                                         | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 bis U+11D59)                                                                      |
| `grek`     | Griechische Großbuchstaben-Ziffern                                            | algorithmisch                                                                                           |
| `greklow`  | Griechische Kleinbuchstaben-Ziffern                                           | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                              | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 bis U+0AEF)                                                                        |
| `gukh`     | Gurung Khema-Ziffern                                                          | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 bis U+16139)                                                                      |
| `guru`     | Gurmukhi-Ziffern                                                              | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 bis U+0A6F)                                                                        |
| `hanidays` | Han-Zeichen für Tagesnummerierung für den Mond-/andere traditionelle Kalender |                                                                                                         |
| `hanidec`  | Positionssystem mit chinesischen Nummernideogrammen als Ziffern               | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte chinesische Ziffern                                              | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte chinesische Finanzziffern                                        | algorithmisch                                                                                           |
| `hant`     | Traditionelle chinesische Ziffern                                             | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle chinesische Finanzziffern                                       | algorithmisch                                                                                           |
| `hebr`     | Hebräische Ziffern                                                            | algorithmisch                                                                                           |
| `hmng`     | Pahawh Hmong-Ziffern                                                          | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 bis U+16B59)                                                                      |
| `hmnp`     | Nyiakeng Puachue Hmong-Ziffern                                                | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 bis U+1E149)                                                                      |
| `java`     | Javanische Ziffern                                                            | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 bis U+A9D9)                                                                        |
| `jpan`     | Japanische Ziffern                                                            | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Finanzziffern                                                      | algorithmisch                                                                                           |
| `jpanyear` | Japanische Erstjahres-Gannen-Nummerierung für den japanischen Kalender        | algorithmisch                                                                                           |
| `kali`     | Kayah Li-Ziffern                                                              | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 bis U+A909)                                                                        |
| `kawi`     | Kawi-Ziffern                                                                  | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 bis U+11F59)                                                                      |
| `khmr`     | Khmer-Ziffern                                                                 | `០១២៣៤៥៦៧៨៩` (U+17E0 bis U+17E9)                                                                        |
| `knda`     | Kannada-Ziffern                                                               | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 bis U+0CEF)                                                                        |
| `krai`     | Kirat Rai-Ziffern                                                             | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 bis U+16D79)                                                                      |
| `lana`     | Tai Tham Hora (weltliche) Ziffern                                             | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 bis U+1A89)                                                                        |
| `lanatham` | Tai Tham (kirchliche) Ziffern                                                 | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 bis U+1A99)                                                                        |
| `laoo`     | Lao-Ziffern                                                                   | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 bis U+0ED9)                                                                        |
| `latn`     | Lateinische Ziffern                                                           | `0123456789` (U+0030 bis U+0039)                                                                        |
| `lepc`     | Lepcha-Ziffern                                                                | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 bis U+1C49)                                                                        |
| `limb`     | Limbu-Ziffern                                                                 | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 bis U+194F)                                                                        |
| `mathbold` | Mathematisch fettgedruckte Ziffern                                            | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE bis U+1D7D7)                                                                      |
| `mathdbl`  | Mathematisch doppelt geschlagene Ziffern                                      | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 bis U+1D7E1)                                                                      |
| `mathmono` | Mathematisch einspurige Ziffern                                               | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 bis U+1D7FF)                                                                      |
| `mathsanb` | Mathematisch serifenlose fettgedruckte Ziffern                                | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC bis U+1D7F5)                                                                      |
| `mathsans` | Mathematisch serifenlose Ziffern                                              | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 bis U+1D7EB)                                                                      |
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
| `outlined` | Legacy computing dargestellte Ziffern                                         | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 bis U+1CCF9)                                                                      |
| `rohg`     | Hanifi Rohingya-Ziffern                                                       | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 bis U+10D39)                                                                      |
| `roman`    | Römische Großbuchstaben-Ziffern                                               | algorithmisch                                                                                           |
| `romanlow` | Römische Kleinbuchstaben-Ziffern                                              | algorithmisch                                                                                           |
| `saur`     | Saurashtra-Ziffern                                                            | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 bis U+A8D9)                                                                        |
| `segment`  | Legacy computing segmentierte Ziffern                                         | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 bis U+1FBF9)                                                                      |
| `shrd`     | Sharada-Ziffern                                                               | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 bis U+111D9)                                                                      |
| `sind`     | Khudawadi-Ziffern                                                             | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 bis U+112F9)                                                                      |
| `sinh`     | Singhalesische Lith-Ziffern                                                   | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 bis U+0DEF)                                                                        |
| `sora`     | Sora_Sompeng-Ziffern                                                          | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 bis U+110F9)                                                                      |
| `sund`     | Sundanesische Ziffern                                                         | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 bis U+1BB9)                                                                        |
| `sunu`     | Sunuwar-Ziffern                                                               | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 bis U+11BF9)                                                                      |
| `takr`     | Takri-Ziffern                                                                 | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 bis U+116C9)                                                                      |
| `talu`     | Neue Tai Lue-Ziffern                                                          | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 bis U+19D9)                                                                        |
| `taml`     | Tamil-Ziffern                                                                 | algorithmisch                                                                                           |
| `tamldec`  | Moderne Tamil- Dezimalziffern                                                 | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 bis U+0BEF)                                                                        |
| `telu`     | Telugu-Ziffern                                                                | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 bis U+0C6F)                                                                        |
| `thai`     | Thailändische Ziffern                                                         | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 bis U+0E59)                                                                        |
| `tibt`     | Tibetische Ziffern                                                            | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 bis U+0F29)                                                                        |
| `tirh`     | Tirhuta-Ziffern                                                               | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 bis U+114D9)                                                                      |
| `tnsa`     | Tangsa-Ziffern                                                                | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 bis U+16AC9)                                                                      |
| `vaii`     | Vai-Ziffern                                                                   | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 bis U+A629)                                                                        |
| `wara`     | Warang Citi-Ziffern                                                           | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 bis U+118E9)                                                                      |
| `wcho`     | Wancho-Ziffern                                                                | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 bis U+1E2F9)                                                                      |

Es gibt drei spezielle Werte: `native`, `traditio` und `finance`, deren Bedeutung ist regionsabhängig und wird entsprechend der Region auf das richtige System aufgelöst. Daher werden die `resolvedOptions()`-Methoden diese Werte niemals zurückgeben, aber `Intl.Locale.prototype.numberingSystem` wird dies (falls als Eingabe bereitgestellt) tun.

Referenzen:

- [CLDR Nummerierungssystemtypenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Nummerierungssystemdefinitionen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Nummerierungssysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonen-Identifikatoren

Unterstützte Zeitzonen-Identifikatoren können für die `timeZone`-Option verwendet werden, wenn Sie Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellen, sowie zur Erstellung von {{jsxref("Temporal")}}-Datum-Objekten. Es gibt über 400 Identifikatoren in gebräuchlicher Verwendung, so dass wir sie nicht alle auflisten. Für eine erschöpfende Liste möglicher Identifikatoren siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder die [IANA-Zeitzonen-Datenbank](https://www.iana.org/time-zones).

Während Sie die Liste durchsuchen, beachten Sie, dass die Standardisierung von `Temporal` erfordert, dass Browser immer den primären Identifikator in der IANA-Datenbank zurückgeben, der sich im Laufe der Zeit ändern kann. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für mehr Informationen. Zum Beispiel sollte das zurückgegebene Array `"Asia/Kolkata"` anstelle von `"Asia/Calcutta"` enthalten, da letzteres ein Alias des ersteren ist und beide zu Indien gehören; es sollte jedoch sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, da sie in verschiedenen Ländern liegen, obwohl letzteres auch ein Alias des ersteren ist.

Referenzen:

- [IANA-Zeitzonen-Datenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonenidentifikatoren](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheitsidentifikatoren

Nachfolgend sind alle Werte aufgelistet, die von Browsern üblicherweise für den Schlüssel `unit` unterstützt werden. Diese Werte können für die `unit`-Option verwendet werden, wenn Sie Objekte wie {{jsxref("Intl.NumberFormat")}} erstellen. Diese Liste ist eine Untermenge der CLDR, die von der ECMA-402-Spezifikation ausdrücklich sanktioniert wurde, sodass alle Implementierungen konsistent sein sollten.

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

Beim Angeben von Einheiten können Sie auch zwei Einheiten mit dem "-per-" Trennzeichen kombinieren. Zum Beispiel `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [ECMA-402 sanktionierte einzelne Einheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Einheitsgültigkeitsdaten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheit-Identifikatoren](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Funktionsprüfung

Sie können überprüfen, ob die Methode durch Vergleichen mit `undefined` unterstützt wird:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für Schlüssel abrufen

Um die unterstützten Werte für den Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf.
Sie können dann durch das zurückgegebene Array iterieren, wie unten gezeigt:

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
