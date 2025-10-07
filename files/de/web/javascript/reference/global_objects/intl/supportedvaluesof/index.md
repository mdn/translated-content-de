---
title: Intl.supportedValuesOf()
short-title: supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: e36af7282dd0556f9c9409b1962f34557b1b1663
---

Die **`Intl.supportedValuesOf()`** statische Methode gibt ein Array zurück, das die unterstützten Kalender-, Kollations-, Währungs-, Zahlensystem- oder Einheit-Werte enthält, die von der Implementierung unterstützt werden.

Doppelte Einträge werden ausgelassen, und das Array ist in aufsteigender lexikografischer Reihenfolge sortiert (oder genauer gesagt, mithilfe von {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden, und einen Polyfill nur bei Bedarf herunterzuladen. Sie kann auch verwendet werden, um UIs zu erstellen, die Benutzern ermöglichen, ihre bevorzugten lokalen Werte auszuwählen, beispielsweise wenn die UI in WebGL oder serverseitig erstellt wird.

Diese Methode ist lokalitätsunabhängig: es ist möglich, dass bestimmte Bezeichner nur in bestimmten Lokalen unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für ein bestimmtes Locale ermitteln möchten, sollten Sie das {{jsxref("Intl.Locale")}}-Objekt verwenden, wie zum Beispiel {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

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
  - : Ein Schlüsselstring, der die Kategorie der zurückzugebenden Werte angibt. Dies ist eines von:
    - `"calendar"`: siehe [unterstützte Kalender-Typen](#unterstützte_kalender-typen)
    - `"collation"`: siehe [unterstützte Kollations-Typen](#unterstützte_kollations-typen)
    - `"currency"`: siehe [unterstützte Währungs-Bezeichner](#unterstützte_währungs-bezeichner)
    - `"numberingSystem"`: siehe [unterstützte Zahlensystem-Typen](#unterstützte_zahlensystem-typen)
    - `"timeZone"`: siehe [unterstützte Zeitzonen-Bezeichner](#unterstützte_zeitzonen-bezeichner)
    - `"unit"`: siehe [unterstützte Einheits-Bezeichner](#unterstützte_einheits-bezeichner)

### Rückgabewert

Ein sortiertes Array von eindeutigen Zeichenfolgenwerten, die die von der Implementierung für den gegebenen Schlüssel unterstützten Werte angeben. Die zurückgegebenen Werte sind im Folgenden aufgelistet.

#### Unterstützte Kalender-Typen

Unten sind alle Werte, die von Browsern allgemein für den `calendar`-Schlüssel unterstützt werden. Diese Werte können für die `calendar`-Option oder den `ca` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellt werden, sowie für die Erstellung von {{jsxref("Temporal")}}-Datumsobjekten.

| Wert               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buddhist`         | Thailändischer buddhistischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                      |
| `chinese`          | Traditioneller chinesischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                        |
| `coptic`           | Koptischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `dangi`            | Traditioneller koreanischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                        |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem, Einzel-Epochen-Variante (Epoche ca. 5493 v. Chr.)                                                                                                                                                                                                                                                                                                                                                        |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret, Zwei-Epochen-Variante (Epoche ca. 8 n. Chr., Amete Alem für Jahre vor Amete Mihret)                                                                                                                                                                                                                                                                                                                    |
| `gregory`          | Gregorianischer Kalender (proleptisch, _kein_ Julianischer Hybrid)                                                                                                                                                                                                                                                                                                                                                                          |
| `hebrew`           | Traditioneller hebräischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                         |
| `indian`           | Indischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `islamic`          | Hidschri-Kalender, nicht spezifizierter Algorithmus. **Hinweis:** Ab April 2025 ist dies eine astronomische Simulation, deren Parameter undokumentiert sind und die nicht dafür bekannt ist, einer bestimmten Hidschri-Kalendervariante aus nicht-softwarebezogenen Kontexten zu entsprechen. Verwenden Sie für wohlspezifizierte Ergebnisse eine der drei spezifischen Varianten: `islamic-umalqura`, `islamic-tbla` oder `islamic-civil`. |
| `islamic-umalqura` | Hidschri-Kalender, Umm al-Qura (verwendet KACST-berechnete Monate vom Beginn des Jahres 1300 AH (12.11.1882 ISO) bis zum Ende des Jahres 1600 AH (25.11.2174 ISO) und fällt außerhalb dieses Bereichs auf `islamic-civil` zurück)                                                                                                                                                                                                           |
| `islamic-tbla`     | Hidschri-Kalender, tabellarisch/regelbasiert mit Schaltjahresregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (1-basierte Nummerierung)) und Donnerstag/astronomische Epoche (15. Juli 622 Julian / 0622-07-18 ISO)                                                                                                                                                                                                  |
| `islamic-civil`    | Hidschri-Kalender, tabellarisch/regelbasiert mit Schaltjahresregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-Jahres-Zyklus (1-basierte Nummerierung)) und Freitag/zivile Epoche (16. Juli 622 Julian / 0622-07-19 ISO)                                                                                                                                                                                                            |
| `iso8601`          | ISO-Kalender (Variante des gregorianischen Kalenders mit Wochenregeln und Formatierungsparametern, die regionsunabhängig sind)                                                                                                                                                                                                                                                                                                              |
| `japanese`         | Japanischer Kaiserlicher Kalender (dieser Kalender fügt für jeden neuen Kaiser eine Epoche hinzu, sodass das Ausgabedatum und die Epoche für ein zukünftiges Datum möglicherweise nicht mit dem Eingabedatum und der Epoche übereinstimmen, wenn Ihr Code in einer zukünftigen Version der Engine ausgeführt wird)                                                                                                                          |
| `persian`          | Persischer Kalender                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `roc`              | Kalender der Republik China                                                                                                                                                                                                                                                                                                                                                                                                                 |

Die unten aufgeführten Typen sind in CLDR spezifiziert, haben aber keine Implementierungen, die sich von den oben genannten Kalendern in Browsern unterscheiden.

| Wert                             | Beschreibung                                   | Anmerkungen                                                                                                                                                                                                                                                             |
| -------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | Ziviler (algorithmischer) arabischer Kalender. | Dies ist ein Alias für `islamic-civil` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`.                                                                                                                         |
| `islamic-rgsa`                   | Hidschri-Kalender, Saudi-Arabien-Sichtung      | Browser haben keine historischen Sichtungsdaten und zukünftige Sichtungen sind noch nicht eingetreten. Ab April 2025 führt dieser Kalender zu demselben Verhalten wie `islamic`. Verwenden Sie `islamic-umalqura` für eine auf Mekka basierte astronomische Berechnung. |

Referenzen:

- [CLDR Kalender-Typ-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Daten](https://unicode.org/reports/tr35/tr35-dates.html)
- [Hidschri-Kalendertypen](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR-Designvorschlag)

#### Unterstützte Kollations-Typen

Unten sind alle Werte, die von Browsern allgemein für den `collation`-Schlüssel unterstützt werden. Diese Werte können für die `collation`-Option oder den `co` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.Collator")}} erstellt werden.

| Wert       | Beschreibung                                                                                                                                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine frühere Version der Sortierung, für Kompatibilität (für Arabisch)                                                                                                                                                              |
| `dict`     | Diktionsartige Sortierung (z. B. in Singhalesisch). Auch als `dictionary` anerkannt.                                                                                                                                                |
| `emoji`    | Empfohlene Sortierung für Emoji-Zeichen                                                                                                                                                                                             |
| `eor`      | Europäische Ordnungsregeln                                                                                                                                                                                                          |
| `phonebk`  | Telefonbuchartige Sortierung (z. B. in Deutsch). Auch als `phonebook` anerkannt.                                                                                                                                                    |
| `phonetic` | Phonetische Sortierung (Sortierung basierend auf der Aussprache; für Lingala)                                                                                                                                                       |
| `pinyin`   | Pinyin-Sortierung für lateinisch und für CJK-Zeichen (verwendet in Chinesisch)                                                                                                                                                      |
| `searchjl` | Spezieller Kollationstyp für die Suche nach koreanischen Initialkonsonanten. **Warnung:** Diese Kollation ist nicht zum Sortieren gedacht, obwohl Sie sie nur mit {{jsxref("Intl.Collator")}} mit `usage: "sort"` verwenden können. |
| `stroke`   | Pinyin-Sortierung für lateinisch, Strichreihenfolge für CJK-Zeichen (in Chinesisch verwendet)                                                                                                                                       |
| `trad`     | Traditionelle Sortierung (z. B. in Spanisch). Auch als `traditional` anerkannt.                                                                                                                                                     |
| `unihan`   | Pinyin-Sortierung für lateinisch, Unihan-Radikal-Strich-Sortierung für CJK-Zeichen (in Chinesisch verwendet)                                                                                                                        |
| `zhuyin`   | Pinyin-Sortierung für lateinisch, Zhuyin-Reihenfolge für Bopomofo- und CJK-Zeichen (in Chinesisch verwendet)                                                                                                                        |

Die unten aufgeführten Typen sind in CLDR-Daten spezifiziert, aber veraltet, werden von der expliziten Verwendung abgeraten und/oder werden möglicherweise von Browsern aus verschiedenen Gründen nicht als unterstützt angezeigt. Vermeiden Sie ihre Verwendung:

| Wert                             | Beschreibung                                                                                                                        | Anmerkungen                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin-Sortierung für lateinisch, big5-Zeichensatzsortierung für CJK-Zeichen (in Chinesisch verwendet)                              | Veraltet.                                                                                                                                                                                                                                                                                                                                                                          |
| `direct` {{deprecated_inline}}   | Binäre Codepunkt-Reihenfolge (wird in Hindi verwendet)                                                                              | Veraltet.                                                                                                                                                                                                                                                                                                                                                                          |
| `ducet`                          | Die Standard Unicode-Kollationselementtabelle sortieren                                                                             | Der Kollationstyp `ducet` steht im Web nicht zur Verfügung.                                                                                                                                                                                                                                                                                                                        |
| `gb2312` {{deprecated_inline}}   | Pinyin-Sortierung für lateinisch, gb2312han-Zeichensatzsortierung für CJK-Zeichen (für Chinesisch). Auch als `gb2312han` anerkannt. | Veraltet.                                                                                                                                                                                                                                                                                                                                                                          |
| `reformed` {{deprecated_inline}} | Reformierte Sortierung (z. B. Schwedisch)                                                                                           | Veraltet. Dies ist der alte Name für die Standardsortierung für Schwedisch [deren Kollationsbenennung früher von anderen Sprachen abwich](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies die Standardeinstellung war, fordern Sie `sv` an, anstatt `sv-u-co-reformed` anzufordern.                                                                                  |
| `search`                         | Spezieller Kollationstyp für die Suche von Zeichenfolgen                                                                            | Verwenden Sie dies nicht als Kollationstyp, da in {{jsxref("Intl.Collator")}} diese Kollation über die `usage: "search"`-Option aktiviert wird. Derzeit gibt es keine API für Substring-Suchen, daher ist dies derzeit nur gut, um eine Liste von Zeichenfolgen zu filtern, indem ein vollständiger Zeichenfolgenvergleich des Schlüssels gegen jedes Listenelement versucht wird. |
| `standard`                       | Standardreihenfolge für jede Sprache, außer Chinesisch (und früher Schwedisch)                                                      | Nicht explizit verwenden. Im Allgemeinen ist es unnötig, dies explizit anzugeben, und die Angabe dessen für Schwedisch ist problematisch aufgrund der unterschiedlichen Bedeutung für Schwedisch in der Vergangenheit.                                                                                                                                                             |

Referenzen:

- [CLDR Kollationstyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Kollation](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungs-Bezeichner

Währungsbezeichner sind dreibuchstabige Großbuchstabencodes, die in ISO 4217 definiert sind. Diese Werte können für die `currency`-Option verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden, sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}. Es gibt über 300 Bezeichner im allgemeinen Gebrauch, daher werden wir sie hier nicht auflisten. Für eine vollständige Liste möglicher Bezeichner siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

Referenzen:

- [CLDR Währungstyp-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Währungscodes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Zahlensystem-Typen

Unten sind alle Werte, die von Browsern allgemein für den `numberingSystem`-Schlüssel unterstützt werden. Diese Werte können für die `numberingSystem`-Option oder den `nu` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden. Für die Zeilen mit "Ziffernzeichen" übersetzt die Laufzeit die Ziffern eins zu eins ohne zusätzliche Aktionen. Andere, die als "algorithmisch" gekennzeichnet sind, benötigen zusätzliche Algorithmen, um die Ziffern zu übersetzen. Je höher der Unicode-Codepunkt ist, desto neuer ist das Zahlensystem und desto wahrscheinlicher wird es von allen Browsern nicht unterstützt.

| Wert       | Beschreibung                                                                  | Ziffernzeichen                                                                                          |
| ---------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                 | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 bis U+1E959)                                                                      |
| `ahom`     | Ahom-Ziffern                                                                  | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 bis U+11739)                                                                      |
| `arab`     | Arabisch-indische Ziffern                                                     | `٠١٢٣٤٥٦٧٨٩` (U+0660 bis U+0669)                                                                        |
| `arabext`  | Erweiterte arabisch-indische Ziffern                                          | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 bis U+06F9)                                                                       |
| `armn`     | Armenische Großbuchstabenzahlen                                               | algorithmisch                                                                                           |
| `armnlow`  | Armenische Kleinbuchstabenzahlen                                              | algorithmisch                                                                                           |
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
| `fullwide` | Vollbreitenziffern                                                            | `０１２３４５６７８９` (U+FF10 bis U+FF19)                                                              |
| `gara`     | Garay-Ziffern                                                                 | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 bis U+10D49)                                                                      |
| `geor`     | Georgische Zahlen                                                             | algorithmisch                                                                                           |
| `gong`     | Gunjala Gondi-Ziffern                                                         | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 bis U+11DA9)                                                                      |
| `gonm`     | Masaram Gondi-Ziffern                                                         | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 bis U+11D59)                                                                      |
| `grek`     | Griechische Großbuchstabenzahlen                                              | algorithmisch                                                                                           |
| `greklow`  | Griechische Kleinbuchstabenzahlen                                             | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                              | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 bis U+0AEF)                                                                        |
| `gukh`     | Gurung Khema-Ziffern                                                          | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 bis U+16139)                                                                      |
| `guru`     | Gurmukhi-Ziffern                                                              | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 bis U+0A6F)                                                                        |
| `hanidays` | Han-Zeichen-Tag-im-Monat Nummerierung für Mond-/andere traditionelle Kalender |                                                                                                         |
| `hanidec`  | Positionales Dezimalsystem mit chinesischen Zahlenideogrammen als Ziffern     | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte chinesische Zahlen                                               | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte chinesische Finanzzahlen                                         | algorithmisch                                                                                           |
| `hant`     | Traditionelle chinesische Zahlen                                              | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle chinesische Finanzzahlen                                        | algorithmisch                                                                                           |
| `hebr`     | Hebräische Zahlen                                                             | algorithmisch                                                                                           |
| `hmng`     | Pahawh Hmong-Ziffern                                                          | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 bis U+16B59)                                                                      |
| `hmnp`     | Nyiakeng Puachue Hmong-Ziffern                                                | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 bis U+1E149)                                                                      |
| `java`     | Javanische Ziffern                                                            | `꧐꧑ ꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 bis U+A9D9)                                                                       |
| `jpan`     | Japanische Zahlen                                                             | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Finanzzahlen                                                       | algorithmisch                                                                                           |
| `jpanyear` | Japanische Erstjahr-Gannen-Nummerierung für den japanischen Kalender          | algorithmisch                                                                                           |
| `kali`     | Kayah Li-Ziffern                                                              | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 bis U+A909)                                                                        |
| `kawi`     | Kawi-Ziffern                                                                  | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 bis U+11F59)                                                                      |
| `khmr`     | Khmer-Ziffern                                                                 | `០១២៣៤៥៦៧៨៩` (U+17E0 bis U+17E9)                                                                        |
| `knda`     | Kannada-Ziffern                                                               | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 bis U+0CEF)                                                                        |
| `krai`     | Kirat Rai-Ziffern                                                             | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 bis U+16D79)                                                                      |
| `lana`     | Tai Tham Hora (weltlich) Ziffern                                              | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 bis U+1A89)                                                                        |
| `lanatham` | Tai Tham (kirchlich) Ziffern                                                  | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 bis U+1A99)                                                                        |
| `laoo`     | Lao-Ziffern                                                                   | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 bis U+0ED9)                                                                        |
| `latn`     | Lateinische Ziffern                                                           | `0123456789` (U+0030 bis U+0039)                                                                        |
| `lepc`     | Lepcha-Ziffern                                                                | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 bis U+1C49)                                                                        |
| `limb`     | Limbu-Ziffern                                                                 | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 bis U+194F)                                                                        |
| `mathbold` | Mathematische fette Ziffern                                                   | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE bis U+1D7D7)                                                                      |
| `mathdbl`  | Mathematische doppelgestrichene Ziffern                                       | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 bis U+1D7E1)                                                                      |
| `mathmono` | Mathematische Monospace-Ziffern                                               | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 bis U+1D7FF)                                                                      |
| `mathsanb` | Mathematische Sans-Serif fette Ziffern                                        | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC bis U+1D7F5)                                                                      |
| `mathsans` | Mathematische Sans-Serif Ziffern                                              | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 bis U+1D7EB)                                                                      |
| `mlym`     | Malaiische Ziffern                                                            | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 bis U+0D6F)                                                                        |
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
| `outlined` | Legacy Computing umrandete Ziffern                                            | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 bis U+1CCF9)                                                                      |
| `rohg`     | Hanifi Rohingya-Ziffern                                                       | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 bis U+10D39)                                                                      |
| `roman`    | Römische Großbuchstabenzahlen                                                 | algorithmisch                                                                                           |
| `romanlow` | Römische Kleinbuchstabenzahlen                                                | algorithmisch                                                                                           |
| `saur`     | Saurashtra-Ziffern                                                            | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 bis U+A8D9)                                                                        |
| `segment`  | Legacy Computing segmentierte Ziffern                                         | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 bis U+1FBF9)                                                                      |
| `shrd`     | Sharada-Ziffern                                                               | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 bis U+111D9)                                                                      |
| `sind`     | Khudawadi-Ziffern                                                             | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 bis U+112F9)                                                                      |
| `sinh`     | Singhalesische Lith-Ziffern                                                   | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 bis U+0DEF)                                                                        |
| `sora`     | Sora_Sompeng Ziffern                                                          | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 bis U+110F9)                                                                      |
| `sund`     | Sundanesische Ziffern                                                         | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 bis U+1BB9)                                                                        |
| `sunu`     | Sunuwar-Ziffern                                                               | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 bis U+11BF9)                                                                      |
| `takr`     | Takri-Ziffern                                                                 | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 bis U+116C9)                                                                      |
| `talu`     | Neu-Tai-Lue-Ziffern                                                           | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 bis U+19D9)                                                                        |
| `taml`     | Tamil-Zahlen                                                                  | algorithmisch                                                                                           |
| `tamldec`  | Moderne Tamil-Dezimalziffern                                                  | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 bis U+0BEF)                                                                        |
| `telu`     | Telugu-Ziffern                                                                | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 bis U+0C6F)                                                                        |
| `thai`     | Thailändische Ziffern                                                         | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 bis U+0E59)                                                                        |
| `tibt`     | Tibetische Ziffern                                                            | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 bis U+0F29)                                                                        |
| `tirh`     | Tirhuta-Ziffern                                                               | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 bis U+114D9)                                                                      |
| `tnsa`     | Tangsa-Ziffern                                                                | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 bis U+16AC9)                                                                      |
| `vaii`     | Vai-Ziffern                                                                   | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 bis U+A629)                                                                        |
| `wara`     | Warang Citi-Ziffern                                                           | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 bis U+118E9)                                                                      |
| `wcho`     | Wancho-Ziffern                                                                | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 bis U+1E2F9)                                                                      |

Es gibt drei spezielle Werte: `native`, `traditio` und `finance`, deren Bedeutungen vom Locale abhängen und je nach Locale in das richtige System aufgelöst werden. Daher werden die Methoden `resolvedOptions()` diese Werte niemals zurückgeben, aber `Intl.Locale.prototype.numberingSystem` wird (wenn als Eingabe bereitgestellt).

Referenzen:

- [CLDR Zahlensystem-Typ-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Zahlensystem-Definitionen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Zahlensysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonen-Bezeichner

Unterstützte Zeitzonen-Bezeichner können für die `timeZone`-Option verwendet werden, wenn Objekte wie {{jsxref("Intl.DateTimeFormat")}} erstellt werden, sowie für die Erstellung von {{jsxref("Temporal")}}-Datumsobjekten. Es gibt über 400 Bezeichner im allgemeinen Gebrauch, daher werden wir sie hier nicht auflisten. Für eine vollständige Liste möglicher Bezeichner siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder die [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones).

Beim Durchstöbern der Liste ist zu beachten, dass die Standardisierung von `Temporal` erfordert, dass Browser immer den primären Bezeichner in der IANA-Datenbank zurückgeben, der sich im Laufe der Zeit ändern kann. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen. So sollte beispielsweise das zurückgegebene Array `"Asia/Kolkata"` anstelle von `"Asia/Calcutta"` enthalten, da letzteres ein Alias des ersteren ist und beide zu Indien gehören; es sollte jedoch sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, da sie sich in verschiedenen Ländern befinden, obwohl letzteres auch ein Alias des ersteren ist.

Referenzen:

- [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonen-Bezeichner](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheits-Bezeichner

Unten sind alle Werte, die von Browsern allgemein für den `unit`-Schlüssel unterstützt werden. Diese Werte können für die `unit`-Option verwendet werden, wenn Objekte wie {{jsxref("Intl.NumberFormat")}} erstellt werden. Diese Liste ist ein Teil der CLDR, der ausdrücklich von der ECMA-402-Spezifikation genehmigt wurde, sodass alle Implementierungen konsistent sein sollten.

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

Beim Specifizieren von Einheiten können Sie auch zwei Einheiten mit dem "-per-" Separator kombinieren. Zum Beispiel `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [ECMA-402 genehmigte einzelne Einheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Einheitengültigkeitsdaten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheit-Bezeichner](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn ein nicht unterstützter Schlüssel als Parameter übergeben wurde.

## Beispiele

### Funktionsprüfung

Sie können überprüfen, ob die Methode unterstützt wird, indem Sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für Schlüssel abrufen

Um die unterstützten Werte für den Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf.
Sie können dann durch das zurückgegebene Array wie unten angezeigt iterieren:

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
