---
title: Intl.supportedValuesOf()
short-title: supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array zurück, das die durch die Implementierung unterstützten Kalender-, Kollations-, Währungs-, Zahlensystem- oder Einheitenwerte enthält.

Doppelte Einträge werden weggelassen und das Array wird in aufsteigender lexikographischer Reihenfolge sortiert (oder genauer gesagt, mit {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined`-Vergleichsfunktion).

Die Methode kann genutzt werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden und nur bei Bedarf ein Polyfill herunterzuladen. Sie kann auch verwendet werden, um Benutzerschnittstellen zu erstellen, die es Nutzern ermöglichen, ihre bevorzugten lokalisierten Werte auszuwählen, z. B. wenn die UI aus WebGL oder serverseitig erstellt wird.

Diese Methode ist nicht sprachabhängig: Es ist möglich, dass bestimmte Identifikatoren nur in bestimmten Lokalen unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für ein bestimmtes Locale ermitteln möchten, sollten Sie das Objekt {{jsxref("Intl.Locale")}} verwenden, zum Beispiel {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

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
    - `"currency"`: siehe [unterstützte Währungskennungen](#unterstützte_währungskennungen)
    - `"numberingSystem"`: siehe [unterstützte Zahlensystemtypen](#unterstützte_zahlensystemtypen)
    - `"timeZone"`: siehe [unterstützte Zeitzonenkennungen](#unterstützte_zeitzonenkennungen)
    - `"unit"`: siehe [unterstützte Einheitenkennungen](#unterstützte_einheitenkennungen)

### Rückgabewert

Ein sortiertes Array einzigartiger Zeichenfolgenwerte, die die von der Implementierung für den gegebenen Schlüssel unterstützten Werte angeben. Die möglichen zurückgegebenen Werte sind unten aufgeführt.

#### Unterstützte Kalendertypen

Nachfolgend sind alle Werte aufgeführt, die von Browsern für den `calendar`-Schlüssel allgemein unterstützt werden. Diese Werte können für die `calendar`-Option oder den `ca`- [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}}, sowie für die Erstellung von {{jsxref("Temporal")}}-Datumsobjekten verwendet werden.

| Wert               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buddhist`         | Thailändischer buddhistischer Kalender                                                                                                                                                                                                                                                                                                                                                                                   |
| `chinese`          | Traditioneller chinesischer Kalender                                                                                                                                                                                                                                                                                                                                                                                     |
| `coptic`           | Koptischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                      |
| `dangi`            | Traditioneller koreanischer Kalender                                                                                                                                                                                                                                                                                                                                                                                     |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem, Single-Era-Variante (Epoche ca. 5493 v. u. Z.)                                                                                                                                                                                                                                                                                                                                        |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret, Zwei-Epochen-Variante (Epoche ca. 8 n. u. Z., Amete Alem für Jahre vor Amete Mihret)                                                                                                                                                                                                                                                                                                |
| `gregory`          | Gregorianischer Kalender (proleptisch, _nicht_ julianisch-hybride)                                                                                                                                                                                                                                                                                                                                                       |
| `hebrew`           | Traditioneller hebräischer Kalender                                                                                                                                                                                                                                                                                                                                                                                      |
| `indian`           | Indischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                       |
| `islamic`          | Hijri-Kalender, nicht spezifizierter Algorithmus. **Hinweis:** Ab April 2025 handelt es sich um eine astronomische Simulation, deren Parameter nicht dokumentiert sind und die nicht mit einer bestimmten Hijri-Kalendervariante aus Nicht-Software-Kontexten übereinstimmt. Für wohldefinierte Ergebnisse verwenden Sie eine der drei spezifischen Varianten: `islamic-umalqura`, `islamic-tbla`, oder `islamic-civil`. |
| `islamic-umalqura` | Hijri-Kalender, Umm al-Qura (verwendet KACST-berechnete Monate von Anfang 1300 AH bis Ende 1600 AH und fällt außerhalb dieses Bereichs auf `islamic-civil` zurück)                                                                                                                                                                                                                                                       |
| `islamic-tbla`     | Hijri-Kalender, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (nummeriert ab 1)) und Donnerstag/astronomische Epoche (15. Juli 622 Julian / 0622-07-18 ISO)                                                                                                                                                                                            |
| `islamic-civil`    | Hijri-Kalender, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (nummeriert ab 1)) und Freitag/zivile Epoche (16. Juli 622 Julian / 0622-07-19 ISO)                                                                                                                                                                                                      |
| `iso8601`          | ISO-Kalender (Variante des Gregorianischen Kalenders mit Wochensystem und regional-unabhängigen Formatierungsparametern)                                                                                                                                                                                                                                                                                                 |
| `japanese`         | Japanischer Kaiserlicher Kalender (Dieser Kalender fügt für jeden neuen Kaiser eine Ära hinzu, daher können Ausgabedatum und Ära für ein zukünftiges Datum nicht mit dem Eingabedatum und der Ära übereinstimmen, wenn Ihr Code auf einer zukünftigen Engine-Version ausgeführt wird)                                                                                                                                    |
| `persian`          | Persischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                      |
| `roc`              | Kalender der Republik China                                                                                                                                                                                                                                                                                                                                                                                              |

Die untenstehenden Typen sind im CLDR angegeben, haben aber keine Implementierungen, die in Browsern von den oben genannten Kalendern abweichen.

| Wert                             | Beschreibung                               | Anmerkungen                                                                                                                                                                                                                                                                  |
| -------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | Zivil (algorithmisch) arabischer Kalender. | Dies ist ein Alias für `islamic-civil` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`.                                                                                                                              |
| `islamic-rgsa`                   | Hijri-Kalender, Saudi-Arabien-Sichtung     | Browser haben keine historischen Sichtungsdaten und zukünftige Sichtungen haben noch nicht stattgefunden. Ab April 2025 führt dieser Kalender zu demselben Verhalten wie `islamic`. Verwenden Sie `islamic-umalqura` für eine auf Mekka basierende astronomische Berechnung. |

Referenzen:

- [CLDR-Kalendertyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Datumsangaben](https://unicode.org/reports/tr35/tr35-dates.html)
- [Islamische Kalendertypen](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR Designvorschlag)

#### Unterstützte Kollationstypen

Nachfolgend sind alle Werte aufgeführt, die von Browsern für den `collation`-Schlüssel allgemein unterstützt werden. Diese Werte können für die `collation`-Option oder den `co`- [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.Collator")}} verwendet werden.

| Wert       | Beschreibung                                                                                                                                                                                                                  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine frühere Version der Ordnung, für die Kompatibilität (für Arabisch)                                                                                                                                                       |
| `dict`     | Wörterbuchartige Ordnung (zum Beispiel in Singhalesisch). Auch als `dictionary` bekannt.                                                                                                                                      |
| `emoji`    | Empfohlene Reihenfolge für Emoji-Zeichen                                                                                                                                                                                      |
| `eor`      | Europäische Ordnungsregeln                                                                                                                                                                                                    |
| `phonebk`  | Telefonbuchartige Ordnung (zum Beispiel in Deutsch). Auch als `phonebook` bekannt.                                                                                                                                            |
| `phonetic` | Phonetische Ordnung (Sortierung basierend auf Aussprache; für Lingala)                                                                                                                                                        |
| `pinyin`   | Pinyin-Ordnung für lateinische und CJK-Zeichen (verwendet in Chinesisch)                                                                                                                                                      |
| `searchjl` | Spezieller Kollationstyp für die koreanische Initialkonsonantensuche. **Warnung:** Diese Kollation ist nicht zum Sortieren geeignet, obwohl Sie sie nur mit {{jsxref("Intl.Collator")}} von `usage: "sort"` verwenden können. |
| `stroke`   | Pinyin-Ordnung für lateinische, Strichreihenfolge für CJK-Zeichen (verwendet in Chinesisch)                                                                                                                                   |
| `trad`     | Traditionelle Ordnungsart (zum Beispiel in Spanisch). Auch als `traditional` bekannt.                                                                                                                                         |
| `unihan`   | Pinyin-Ordnung für lateinische, Unihan-Radikal-Strich-Reihenfolge für CJK-Zeichen (verwendet in Chinesisch)                                                                                                                   |
| `zhuyin`   | Pinyin-Ordnung für lateinische, Zhuyin-Ordnung für Bopomofo und CJK-Zeichen (verwendet in Chinesisch)                                                                                                                         |

Die unten stehenden Typen sind in CLDR-Daten spezifiziert, sind jedoch veraltet, werden von expliziter Nutzung abgeraten und/oder können von Browsern aus verschiedenen Gründen nicht als unterstützt angezeigt werden. Vermeiden Sie deren Verwendung:

| Wert                             | Beschreibung                                                                                                              | Anmerkungen                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin-Ordnung für lateinische, Big5-Charset-Ordnung für CJK-Zeichen (verwendet in Chinesisch)                            | Veraltet.                                                                                                                                                                                                                                                                                                                                               |
| `direct` {{deprecated_inline}}   | Binäre Codepunktsortierung (verwendet in Hindi)                                                                           | Veraltet.                                                                                                                                                                                                                                                                                                                                               |
| `ducet`                          | Die Standard-Unicode-Kollationselementtabellenreihenfolge                                                                 | Der Kollationstyp `ducet` ist nicht für das Web verfügbar.                                                                                                                                                                                                                                                                                              |
| `gb2312` {{deprecated_inline}}   | Pinyin-Ordnung für lateinische, gb2312han-Charset-Ordnung für CJK-Zeichen (für Chinesisch). Auch als `gb2312han` bekannt. | Veraltet.                                                                                                                                                                                                                                                                                                                                               |
| `reformed` {{deprecated_inline}} | Reformierte Ordnung (wie in Schwedisch)                                                                                   | Veraltet. Dies ist der alte Name für die Standardanordnung für Schwedisch [deren Kollationsbenennung früher von anderen Sprachen abwich](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies die Standardeinstellung war, beantragen Sie `sv` anstelle der Anforderung `sv-u-co-reformed`.                                                    |
| `search`                         | Spezieller Kollationstyp für die Zeichenfolgensuche                                                                       | Verwenden Sie diesen nicht als Kollationstyp, da er in {{jsxref("Intl.Collator")}} über die Option `usage: "search"` aktiviert wird. Derzeit gibt es keine API für die Teilzeichensuche, sodass dies derzeit nur zum Filtern einer Liste von Zeichenfolgen durch Versuch eines Vollzeichenfolgenabgleichs des Schlüssels mit jedem Listenpunkt gut ist. |
| `standard`                       | Standardanordnung für jede Sprache, außer Chinesisch (und früher Schwedisch)                                              | Nicht explizit verwenden. Im Allgemeinen ist es unnötig, dies explizit anzugeben, und dies für Schwedisch anzugeben, ist problematisch aufgrund der unterschiedlichen Bedeutung für Schwedisch in der Vergangenheit.                                                                                                                                    |

Referenzen:

- [CLDR-Kollationstyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Kollation](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungskennungen

Währungskennungen sind dreibuchstabige Großbuchstabencodes, die in ISO 4217 definiert sind. Diese Werte können für die `currency`-Option beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}}, sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}} verwendet werden. Es gibt über 300 weit verbreitete Kennungen, daher werden wir sie nicht alle auflisten. Für eine umfassende Liste möglicher Kennungen siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

Referenzen:

- [CLDR-Währungstyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Währungscodes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Zahlensystemtypen

Nachfolgend sind alle Werte aufgeführt, die von Browsern für den `numberingSystem`-Schlüssel allgemein unterstützt werden. Diese Werte können für die `numberingSystem`-Option oder den `nu`- [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} verwendet werden. Für die Zeilen mit "Ziffernzeichen" übersetzt die Laufzeit die Ziffern ohne weitere Aktionen einzeln. Die anderen, die als "algorithmisch" gekennzeichnet sind, benötigen zusätzliche Algorithmen, um die Ziffern zu übersetzen. Je höher der Unicode-Codepunkt ist, desto neuer ist das Zahlensystem und desto wahrscheinlicher wird es von allen Browsern nicht unterstützt.

| Wert       | Beschreibung                                                                   | Ziffernzeichen                                                                                          |
| ---------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                  | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 to U+1E959)                                                                       |
| `ahom`     | Ahom-Ziffern                                                                   | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 to U+11739)                                                                       |
| `arab`     | Arabisch-Indische Ziffern                                                      | `٠١٢٣٤٥٦٧٨٩` (U+0660 to U+0669)                                                                         |
| `arabext`  | Erweiterte Arabisch-Indische Ziffern                                           | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 to U+06F9)                                                                        |
| `armn`     | Armenische Großbuchstaben-Ziffern                                              | algorithmisch                                                                                           |
| `armnlow`  | Armenische Kleinbuchstaben-Ziffern                                             | algorithmisch                                                                                           |
| `bali`     | Balinesische Ziffern                                                           | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 to U+1B59)                                                                         |
| `beng`     | Bengalische Ziffern                                                            | `০১২৩৪৫৬৭৮৯` (U+09E6 to U+09EF)                                                                         |
| `bhks`     | Bhaiksuki-Ziffern                                                              | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 to U+11C59)                                                                       |
| `brah`     | Brahmi-Ziffern                                                                 | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 to U+1106F)                                                                       |
| `cakm`     | Chakma-Ziffern                                                                 | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 to U+1113F)                                                                       |
| `cham`     | Cham-Ziffern                                                                   | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 to U+AA59)                                                                         |
| `cyrl`     | Kyrillische Ziffern                                                            | algorithmisch                                                                                           |
| `deva`     | Devanagari-Ziffern                                                             | `०१२३४५६७८९` (U+0966 to U+096F)                                                                         |
| `diak`     | Dives Akuru-Ziffern                                                            | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 to U+11959)                                                                       |
| `ethi`     | Äthiopische Ziffern                                                            | algorithmisch                                                                                           |
| `fullwide` | Vollbreite Ziffern                                                             | `０１２３４５６７８９` (U+FF10 to U+FF19)                                                               |
| `gara`     | Garay-Ziffern                                                                  | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 to U+10D49)                                                                       |
| `geor`     | Georgische Ziffern                                                             | algorithmisch                                                                                           |
| `gong`     | Gunjala Gondi-Ziffern                                                          | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 to U+11DA9)                                                                       |
| `gonm`     | Masaram Gondi-Ziffern                                                          | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 to U+11D59)                                                                       |
| `grek`     | Griechische Großbuchstaben-Ziffern                                             | algorithmisch                                                                                           |
| `greklow`  | Griechische Kleinbuchstaben-Ziffern                                            | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                               | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 to U+0AEF)                                                                         |
| `gukh`     | Gurung Khema-Ziffern                                                           | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 to U+16139)                                                                       |
| `guru`     | Gurmukhi-Ziffern                                                               | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 to U+0A6F)                                                                         |
| `hanidays` | Han-Zeichentag-des-Monats-Nummerierung für Mond-/andere traditionelle Kalender |                                                                                                         |
| `hanidec`  | Positionsdezimalsystem, das chinesische Zahlzeichen als Ziffern verwendet      | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte chinesische Ziffern                                               | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte chinesische Finanzziffern                                         | algorithmisch                                                                                           |
| `hant`     | Traditionelle chinesische Ziffern                                              | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle chinesische Finanzziffern                                        | algorithmisch                                                                                           |
| `hebr`     | Hebräische Ziffern                                                             | algorithmisch                                                                                           |
| `hmng`     | Pahawh Hmong-Ziffern                                                           | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 to U+16B59)                                                                       |
| `hmnp`     | Nyiakeng Puachue Hmong-Ziffern                                                 | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 to U+1E149)                                                                       |
| `java`     | Javanesische Ziffern                                                           | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 to U+A9D9)                                                                         |
| `jpan`     | Japanische Ziffern                                                             | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Finanzziffern                                                       | algorithmisch                                                                                           |
| `jpanyear` | Erste-Jahr-Gannen-Nummerierung für den japanischen Kalender                    | algorithmisch                                                                                           |
| `kali`     | Kayah Li-Ziffern                                                               | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 to U+A909)                                                                         |
| `kawi`     | Kawi-Ziffern                                                                   | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 to U+11F59)                                                                       |
| `khmr`     | Khmer-Ziffern                                                                  | `០១២៣៤៥៦៧៨៩` (U+17E0 to U+17E9)                                                                         |
| `knda`     | Kannada-Ziffern                                                                | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 to U+0CEF)                                                                         |
| `krai`     | Kirat Rai-Ziffern                                                              | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 to U+16D79)                                                                       |
| `lana`     | Tai Tham Hora (weltliche) Ziffern                                              | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 to U+1A89)                                                                         |
| `lanatham` | Tai Tham (kirchliche) Ziffern                                                  | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 to U+1A99)                                                                         |
| `laoo`     | Laotische Ziffern                                                              | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 to U+0ED9)                                                                         |
| `latn`     | Lateinische Ziffern                                                            | `0123456789` (U+0030 to U+0039)                                                                         |
| `lepc`     | Lepcha-Ziffern                                                                 | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 to U+1C49)                                                                         |
| `limb`     | Limbu-Ziffern                                                                  | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 to U+194F)                                                                         |
| `mathbold` | Mathematische fette Ziffern                                                    | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE to U+1D7D7)                                                                       |
| `mathdbl`  | Mathematische doppelgeschlagene Ziffern                                        | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 to U+1D7E1)                                                                       |
| `mathmono` | Mathematische Monospace-Ziffern                                                | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 to U+1D7FF)                                                                       |
| `mathsanb` | Mathematische Sans-Serif-Fettziffern                                           | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC to U+1D7F5)                                                                       |
| `mathsans` | Mathematische Sans-Serif-Ziffern                                               | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 to U+1D7EB)                                                                       |
| `mlym`     | Malayalam-Ziffern                                                              | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 to U+0D6F)                                                                         |
| `modi`     | Modi-Ziffern                                                                   | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 to U+11659)                                                                       |
| `mong`     | Mongolische Ziffern                                                            | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 to U+1819)                                                                         |
| `mroo`     | Mro-Ziffern                                                                    | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 to U+16A69)                                                                       |
| `mtei`     | Meetei Mayek-Ziffern                                                           | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 to U+ABF9)                                                                         |
| `mymr`     | Myanmar-Ziffern                                                                | `၀၁၂၃၄၅၆၇၈၉` (U+1040 to U+1049)                                                                         |
| `mymrepka` | Östliche Myanmar Pwo Karen-Ziffern                                             | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA to U+116E3)                                                                       |
| `mymrpao`  | Myanmar Pao-Ziffern                                                            | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 to U+116D9)                                                                       |
| `mymrshan` | Shan-Ziffern                                                                   | `႐႑႒႓႔႕႖႗႘႙` (U+1090 to U+1099)                                                                         |
| `mymrtlng` | Taiwanesisch Myanmar Tai Laing-Ziffern                                         | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 to U+A9F9)                                                                         |
| `nagm`     | Nag Mundari-Ziffern                                                            | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 to U+1E4F9)                                                                       |
| `newa`     | Newa-Ziffern                                                                   | `𑑐𑑑𑑒𑑓𑑔𑑕𑖻𑑗𑑘𑑙` (U+11450 to U+11459)                                                                       |
| `nkoo`     | N'Ko-Ziffern                                                                   | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 to U+07C9)                                                                         |
| `olck`     | Ol Chiki-Ziffern                                                               | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 to U+1C59)                                                                         |
| `onao`     | Ol-Onal-Ziffern                                                                | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 to U+1E5FA)                                                                       |
| `orya`     | Oriya-Ziffern                                                                  | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 to U+0B6F)                                                                         |
| `osma`     | Osmanya-Ziffern                                                                | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 to U+104A9)                                                                       |
| `outlined` | Legacy-Computing-Umrissene Ziffern                                             | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 to U+1CCF9)                                                                       |
| `rohg`     | Hanifi Rohingya-Ziffern                                                        | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 to U+10D39)                                                                       |
| `roman`    | Römische Großbuchstaben-Ziffern                                                | algorithmisch                                                                                           |
| `romanlow` | Römische Kleinbuchstaben-Ziffern                                               | algorithmisch                                                                                           |
| `saur`     | Saurashtra-Ziffern                                                             | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 to U+A8D9)                                                                         |
| `segment`  | Legacy-Computing-Segmentierte Ziffern                                          | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 to U+1FBF9)                                                                       |
| `shrd`     | Sharada-Ziffern                                                                | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 to U+111D9)                                                                       |
| `sind`     | Khudawadi-Ziffern                                                              | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 to U+112F9)                                                                       |
| `sinh`     | Singhala Lith-Ziffern                                                          | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 to U+0DEF)                                                                         |
| `sora`     | Sora_Sompeng-Ziffern                                                           | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 to U+110F9)                                                                       |
| `sund`     | Sundanesische Ziffern                                                          | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 to U+1BB9)                                                                         |
| `sunu`     | Sunuwar-Ziffern                                                                | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 to U+11BF9)                                                                       |
| `takr`     | Takri-Ziffern                                                                  | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 to U+116C9)                                                                       |
| `talu`     | Neue-Tai-Lue-Ziffern                                                           | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 to U+19D9)                                                                         |
| `taml`     | Tamilische Ziffern                                                             | algorithmisch                                                                                           |
| `tamldec`  | Moderne tamilische Dezimalziffern                                              | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 to U+0BEF)                                                                         |
| `telu`     | Telugu-Ziffern                                                                 | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 to U+0C6F)                                                                         |
| `thai`     | Thailändische Ziffern                                                          | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 to U+0E59)                                                                         |
| `tibt`     | Tibetische Ziffern                                                             | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 to U+0F29)                                                                         |
| `tirh`     | Tirhuta-Ziffern                                                                | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 to U+114D9)                                                                       |
| `tnsa`     | Tangsa-Ziffern                                                                 | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 to U+16AC9)                                                                       |
| `vaii`     | Vai-Ziffern                                                                    | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 to U+A629)                                                                         |
| `wara`     | Warang Citi-Ziffern                                                            | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 to U+118E9)                                                                       |
| `wcho`     | Wancho-Ziffern                                                                 | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 to U+1E2F9)                                                                       |

Es gibt drei spezielle Werte: `native`, `traditio`, und `finance`, deren Bedeutungen sprachabhängig sind und die je nach Sprache auf das richtige System aufgelöst werden. Daher werden die `resolvedOptions()`-Methoden diese Werte nie zurückgeben, aber `Intl.Locale.prototype.numberingSystem` wird es (wenn es als Eingabe angegeben wurde).

Referenzen:

- [CLDR-Zahlensystemtyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR-Zahlensystemdefinitionen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Zahlensysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonenkennungen

Unterstützte Zeitzonenkennungen können für die `timeZone`-Option beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}}, sowie für die Erstellung von {{jsxref("Temporal")}}-Datumsobjekten verwendet werden. Es gibt über 400 häufig verwendete Kennungen, deshalb werden wir sie nicht alle auflisten. Für eine umfassende Liste möglicher Kennungen siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder die [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones).

Während Sie durch die Liste blättern, beachten Sie, dass die Standardisierung von `Temporal` von Browsern erfordert, immer den primären Identifikator in der IANA-Datenbank zurückzugeben, der sich im Laufe der Zeit ändern kann. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets). Beispielsweise sollte das zurückgegebene Array `"Asia/Kolkata"` anstelle von `"Asia/Calcutta"` enthalten, da letztere ein Alias der ersteren ist und beide Indien entsprechen; jedoch sollte es sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, da sie in verschiedenen Ländern liegen, obwohl letzterer auch ein Alias des ersteren ist.

Referenzen:

- [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonenkennungen](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheitenkennungen

Nachfolgend sind alle Werte aufgeführt, die von Browsern für den `unit`-Key allgemein unterstützt werden. Diese Werte können für die `unit`-Option beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} verwendet werden. Diese Liste ist ein Untermenge des CLDR, die explizit durch die ECMA-402-Spezifikation genehmigt wurde, sodass alle Implementierungen konsistent sein sollten.

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

Beim Spezifizieren von Einheiten können Sie auch zwei Einheiten mit dem "-per"-Separator kombinieren. Beispiel: `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [ECMA-402 genehmigte Einzelunheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR-Einheitsgültigkeitsdaten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheitenkennungen](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Funktionstest

Sie können prüfen, ob die Methode unterstützt wird, indem Sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für Schlüssel abrufen

Um die unterstützten Werte für den Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf. Sie können dann durch das zurückgegebene Array iterieren, wie unten gezeigt:

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

### Ungültiger Schlüssel löst RangeError aus

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
