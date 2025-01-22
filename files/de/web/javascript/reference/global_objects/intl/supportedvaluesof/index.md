---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`Intl.supportedValuesOf()`** statische Methode gibt ein Array zurück, das die unterstützten Kalender-, Kollations-, Währungs-, Nummerierungssysteme- oder Einheitswerte enthält, die von der Implementierung unterstützt werden.

Duplikate werden weggelassen und das Array wird in aufsteigender lexikografischer Reihenfolge sortiert (oder genauer gesagt, mit {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu prüfen, ob Werte in einer bestimmten Implementierung unterstützt werden und gegebenenfalls nur dann ein Polyfill herunterzuladen.
Außerdem kann sie verwendet werden, um Benutzeroberflächen zu erstellen, die es Nutzern ermöglichen, ihre bevorzugten lokalisierten Werte auszuwählen, zum Beispiel wenn die Benutzeroberfläche mit WebGL oder serverseitig erstellt wird.

Diese Methode ist nicht lokalisierungsabhängig: Es ist möglich, dass bestimmte Bezeichner nur in bestimmten Sprachgebieten unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für ein bestimmtes Sprachgebiet ermitteln möchten, sollten Sie das {{jsxref("Intl.Locale")}} Objekt verwenden, wie z. B. {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

## Syntax

```js-nolint
Intl.supportedValuesOf(key)
```

### Parameter

- `key`
  - : Ein Schlüsselstring, der die Kategorie der zurückzugebenden Werte angibt. Dieser ist einer der folgenden:
    - `"calendar"`: siehe [unterstützte Kalendertypen](#unterstützte_kalendertypen)
    - `"collation"`: siehe [unterstützte Kollationstypen](#unterstützte_kollationstypen)
    - `"currency"`: siehe [unterstützte Währungsbezeichner](#unterstützte_währungsbezeichner)
    - `"numberingSystem"`: siehe [unterstützte Nummerierungssystemtypen](#unterstützte_nummerierungssystemtypen)
    - `"timeZone"`: siehe [unterstützte Zeitzonenbezeichner](#unterstützte_zeitzonenbezeichner)
    - `"unit"`: siehe [unterstützte Einheitbezeichner](#unterstützte_einheitbezeichner)

### Rückgabewert

Ein sortiertes Array mit eindeutigen String-Werten, die die von der Implementierung für den gegebenen Schlüssel unterstützten Werte anzeigen. Die Werte, die zurückgegeben werden könnten, sind unten aufgelistet.

#### Unterstützte Kalendertypen

Im Folgenden sind alle Werte aufgeführt, die von Browsern häufig für den Schlüssel `calendar` unterstützt werden. Diese Werte können für die `calendar`-Option oder den `ca` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}} sowie zur Erstellung von {{jsxref("Temporal")}} Datumsobjekten verwendet werden.

| Wert               | Beschreibung                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| `buddhist`         | Thailändischer buddhistischer Kalender                                                            |
| `chinese`          | Traditioneller chinesischer Kalender                                                              |
| `coptic`           | Koptischer Kalender                                                                               |
| `dangi`            | Traditioneller koreanischer Kalender                                                              |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem (Epoche ca. 5493 v. Chr.)                                       |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret (Epoche ca. 8 n. Chr.)                                        |
| `gregory`          | Gregorianischer Kalender                                                                          |
| `hebrew`           | Traditioneller hebräischer Kalender                                                               |
| `indian`           | Indischer Kalender                                                                                |
| `islamic`          | Hijri-Kalender                                                                                    |
| `islamic-umalqura` | Hijri-Kalender, Umm al-Qura                                                                       |
| `islamic-tbla`     | Hijri-Kalender, tabellarisch (Schaltjahre [2,5,7,10,13,16,18,21,24,26,29] - astronomische Epoche) |
| `islamic-civil`    | Hijri-Kalender, tabellarisch (Schaltjahre [2,5,7,10,13,16,18,21,24,26,29] - zivile Epoche)        |
| `islamic-rgsa`     | Hijri-Kalender, Saudi-Arabien-Beobachtung                                                         |
| `iso8601`          | ISO-Kalender (Gregorianischer Kalender mit den ISO 8601 Kalenderwochenregeln)                     |
| `japanese`         | Japanischer Kaiserlicher Kalender                                                                 |
| `persian`          | Persischer Kalender                                                                               |
| `roc`              | Kalender der Republik China                                                                       |

Die unten angegebenen Typen sind in CLDR-Daten spezifiziert, aber veraltet, werden von der expliziten Verwendung abgeraten und/oder können aus verschiedenen Gründen nicht von Browsern als unterstützte angezeigt werden. Vermeiden Sie deren Verwendung:

| Wert                             | Beschreibung                                   | Anmerkungen                                                                                                                                     |
| -------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | Ziviler (algorithmischer) arabischer Kalender. | Dies ist ein Alias für `islamic-civil` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`. |

Referenzen:

- [CLDR Kalender-Typenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Daten](https://unicode.org/reports/tr35/tr35-dates.html)

#### Unterstützte Kollationstypen

Im Folgenden sind alle Werte aufgeführt, die von Browsern häufig für den Schlüssel `collation` unterstützt werden. Diese Werte können für die `collation`-Option oder den `co` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.Collator")}} verwendet werden.

| Wert       | Beschreibung                                                                                                                                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine frühere Version der Sortierung, für Kompatibilität (für Arabisch)                                                                                                                                                                          |
| `dict`     | Wörterbuchartige Sortierung (wie z. B. im Singhalesischen). Auch als `dictionary` erkannt.                                                                                                                                                      |
| `emoji`    | Empfohlene Sortierung für Emoji-Zeichen                                                                                                                                                                                                         |
| `eor`      | Europäische Sortierregeln                                                                                                                                                                                                                       |
| `phonebk`  | Telefonbuchartige Sortierung (wie z. B. im Deutschen). Auch als `phonebook` erkannt.                                                                                                                                                            |
| `phonetic` | Phonetische Sortierung (Sortierung basierend auf der Aussprache; für Lingala)                                                                                                                                                                   |
| `pinyin`   | Pinyin-Sortierung für Latein- und CJK-Zeichen (wird im Chinesischen verwendet)                                                                                                                                                                  |
| `searchjl` | Spezieller Kollationstyp für die Suche nach initialen Konsonanten im Koreanischen. **Warnung:** Diese Kollation ist nicht für die Sortierung gedacht, obwohl sie nur mit {{jsxref("Intl.Collator")}} von `usage: "sort"` verwendet werden kann. |
| `stroke`   | Pinyin-Sortierung für Latein, Strichreihenfolge für CJK-Zeichen (wird im Chinesischen verwendet)                                                                                                                                                |
| `trad`     | Traditionelle Sortierweise (wie z. B. im Spanischen). Auch als `traditional` erkannt.                                                                                                                                                           |
| `unihan`   | Pinyin-Sortierung für Latein, Unihan-Radikal-Strich-Ordnung für CJK-Zeichen (wird im Chinesischen verwendet)                                                                                                                                    |
| `zhuyin`   | Pinyin-Sortierung für Latein, Zhuyin-Reihenfolge für Bopomofo und CJK-Zeichen (wird im Chinesischen verwendet)                                                                                                                                  |

Die unten angegebenen Typen sind in CLDR-Daten spezifiziert, aber veraltet, werden von der expliziten Verwendung abgeraten und/oder können aus verschiedenen Gründen nicht von Browsern als unterstützte angezeigt werden. Vermeiden Sie deren Verwendung:

| Wert                             | Beschreibung                                                                                                                     | Anmerkungen                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin-Sortierung für Latein, Big5-Zeichensatzsortierung für CJK-Zeichen (wird im Chinesischen verwendet)                        | Veraltet.                                                                                                                                                                                                                                                                                                                                                                 |
| `direct` {{deprecated_inline}}   | Binäre Sortierung der Codepunkte (wird im Hindi verwendet)                                                                       | Veraltet.                                                                                                                                                                                                                                                                                                                                                                 |
| `ducet`                          | Die Standardreihenfolge für das Unicode-Kollationselementtabelle                                                                 | Der `ducet` Kollationstyp ist im Web nicht verfügbar.                                                                                                                                                                                                                                                                                                                     |
| `gb2312` {{deprecated_inline}}   | Pinyin-Sortierung für Latein, GB2312-Hanzi-Zeichensatzsortierung für CJK-Zeichen (für Chinesisch). Auch als `gb2312han` erkannt. | Veraltet.                                                                                                                                                                                                                                                                                                                                                                 |
| `reformed` {{deprecated_inline}} | Reformierte Sortierung (wie z. B. im Schwedischen)                                                                               | Veraltet. Dies ist der alte Name für die Standardreihenfolge für Schwedisch [dessen Kollationsbenennung sich früher von anderen Sprachen unterschied](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies die Standardeinstellung war, verwenden Sie `sv` anstelle von `sv-u-co-reformed`.                                                                      |
| `search`                         | Spezieller Kollationstyp für die String-Suche                                                                                    | Nicht als Kollationstyp verwenden, da diese Kollation in {{jsxref("Intl.Collator")}} über die Option `usage: "search"` aktiviert wird. Es gibt derzeit keine API für die Unterzeichensuche, daher ist dies derzeit nur gut für das Filtern einer Liste von Zeichenfolgen durch Versuch eines vollständigen Zeichenfolgenabgleichs des Schlüssels mit jedem Listenelement. |
| `standard`                       | Standardreihenfolge für jede Sprache, außer Chinesisch (und zuvor Schwedisch)                                                    | Nicht explizit verwenden. In der Regel ist es unnötig, dies explizit zu spezifizieren, und die Spezifizierung für Schwedisch ist problematisch aufgrund der unterschiedlichen Bedeutung für Schwedisch in der Vergangenheit.                                                                                                                                              |

Referenzen:

- [CLDR Kollationstypenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Kollation](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungsbezeichner

Währungsbezeichner sind dreistellige Großbuchstabencodes, die in ISO 4217 definiert sind. Diese Werte können für die `currency`-Option beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}}, sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}} verwendet werden. Es gibt über 300 im allgemeinen Gebrauch befindliche Bezeichner, daher werden wir sie nicht auflisten. Für eine umfassende Liste möglicher Bezeichner siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

Referenzen:

- [CLDR Währungstypenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Währungscodes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Nummerierungssystemtypen

Im Folgenden sind alle Werte aufgeführt, die von Browsern häufig für den Schlüssel `numberingSystem` unterstützt werden. Diese Werte können für die `numberingSystem`-Option oder den `nu` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} verwendet werden. Bei den Zeilen mit "Ziffernzeichen" übersetzt die Laufzeit die Ziffern einzeln ohne zusätzliche Aktionen. Die anderen, die als "algorithmisch" gekennzeichnet sind, benötigen zusätzliche Algorithmen zur Übersetzung der Ziffern. Je höher der Unicode-Codepunkt ist, desto neuer ist das Nummerierungssystem und desto wahrscheinlicher ist es, dass es von allen Browsern nicht unterstützt wird.

| Wert       | Beschreibung                                                                   | Ziffernzeichen                                                                                          |
| ---------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                  | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 bis U+1E959)                                                                      |
| `ahom`     | Ahom-Ziffern                                                                   | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 bis U+11739)                                                                      |
| `arab`     | Arabisch-Indische Ziffern                                                      | `٠١٢٣٤٥٦٧٨٩` (U+0660 bis U+0669)                                                                        |
| `arabext`  | Erweiterte Arabisch-Indische Ziffern                                           | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 bis U+06F9)                                                                       |
| `armn`     | Armenische Großbuchstabenziffern                                               | algorithmisch                                                                                           |
| `armnlow`  | Armenische Kleinbuchstabenziffern                                              | algorithmisch                                                                                           |
| `bali`     | Balinesische Ziffern                                                           | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 bis U+1B59)                                                                        |
| `beng`     | Bengalische Ziffern                                                            | `০১২৩৪৫৬৭৮৯` (U+09E6 bis U+09EF)                                                                        |
| `bhks`     | Baihksuki-Ziffern                                                              | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 bis U+11C59)                                                                      |
| `brah`     | Brahmi-Ziffern                                                                 | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 bis U+1106F)                                                                      |
| `cakm`     | Chakma-Ziffern                                                                 | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 bis U+1113F)                                                                      |
| `cham`     | Cham-Ziffern                                                                   | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 bis U+AA59)                                                                        |
| `cyrl`     | Kyrillische Ziffern                                                            | algorithmisch                                                                                           |
| `deva`     | Devanagari-Ziffern                                                             | `०१२३४५६७८९` (U+0966 bis U+096F)                                                                        |
| `diak`     | Dives Akuru Ziffern                                                            | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 bis U+11959)                                                                      |
| `ethi`     | Äthiopische Ziffern                                                            | algorithmisch                                                                                           |
| `fullwide` | Vollbreitenziffern                                                             | `０１２３４５６７８９` (U+FF10 bis U+FF19)                                                              |
| `gara`     | Garay-Ziffern                                                                  | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 bis U+10D49)                                                                      |
| `geor`     | Georgische Ziffern                                                             | algorithmisch                                                                                           |
| `gong`     | Gunjala Gondi Ziffern                                                          | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 bis U+11DA9)                                                                      |
| `gonm`     | Masaram Gondi Ziffern                                                          | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 bis U+11D59)                                                                      |
| `grek`     | Griechische Großbuchstabenziffern                                              | algorithmisch                                                                                           |
| `greklow`  | Griechische Kleinbuchstabenziffern                                             | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                               | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 bis U+0AEF)                                                                        |
| `gukh`     | Gurung Khema Ziffern                                                           | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 bis U+16139)                                                                      |
| `guru`     | Gurmukhi-Ziffern                                                               | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 bis U+0A6F)                                                                        |
| `hanidays` | Han-Zeichen Tag-im-Monat Nummerierung für Mond-/andere traditionelle Kalender  |                                                                                                         |
| `hanidec`  | Positionelles Dezimalsystem, das chinesische Zahlzeichen als Ziffern verwendet | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte chinesische Ziffern                                               | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte chinesische Finanzziffern                                         | algorithmisch                                                                                           |
| `hant`     | Traditionelle chinesische Ziffern                                              | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle chinesische Finanzziffern                                        | algorithmisch                                                                                           |
| `hebr`     | Hebräische Ziffern                                                             | algorithmisch                                                                                           |
| `hmng`     | Pahawh Hmong Ziffern                                                           | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 bis U+16B59)                                                                      |
| `hmnp`     | Nyiakeng Puachue Hmong Ziffern                                                 | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 bis U+1E149)                                                                      |
| `java`     | Javanesische Ziffern                                                           | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 bis U+A9D9)                                                                        |
| `jpan`     | Japanische Ziffern                                                             | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Finanzziffern                                                       | algorithmisch                                                                                           |
| `jpanyear` | Japanisches Gannen-Jahresnumerierung für den japanischen Kalender              | algorithmisch                                                                                           |
| `kali`     | Kayah Li Ziffern                                                               | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 bis U+A909)                                                                        |
| `kawi`     | Kawi-Ziffern                                                                   | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 bis U+11F59)                                                                      |
| `khmr`     | Khmer-Ziffern                                                                  | `០១២៣៤៥៦៧៨៩` (U+17E0 bis U+17E9)                                                                        |
| `knda`     | Kannada-Ziffern                                                                | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 bis U+0CEF)                                                                        |
| `krai`     | Kirat Rai Ziffern                                                              | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 bis U+16D79)                                                                      |
| `lana`     | Tai Tham Hora (säkulare) Ziffern                                               | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 bis U+1A89)                                                                        |
| `lanatham` | Tai Tham (kirchlich) Ziffern                                                   | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 bis U+1A99)                                                                        |
| `laoo`     | Laotische Ziffern                                                              | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 bis U+0ED9)                                                                        |
| `latn`     | Lateinische Ziffern                                                            | `0123456789` (U+0030 bis U+0039)                                                                        |
| `lepc`     | Lepcha-Ziffern                                                                 | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 bis U+1C49)                                                                        |
| `limb`     | Limbu-Ziffern                                                                  | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 bis U+194F)                                                                        |
| `mathbold` | Mathematische fette Ziffern                                                    | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE bis U+1D7D7)                                                                      |
| `mathdbl`  | Mathematische doppelt gestrichene Ziffern                                      | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 bis U+1D7E1)                                                                      |
| `mathmono` | Mathematische Monospace-Ziffern                                                | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 bis U+1D7FF)                                                                      |
| `mathsanb` | Mathematische serifenlose fette Ziffern                                        | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC bis U+1D7F5)                                                                      |
| `mathsans` | Mathematische serifenlose Ziffern                                              | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 bis U+1D7EB)                                                                      |
| `mlym`     | Malayalam-Ziffern                                                              | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 bis U+0D6F)                                                                        |
| `modi`     | Modi-Ziffern                                                                   | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 bis U+11659)                                                                      |
| `mong`     | Mongolische Ziffern                                                            | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 bis U+1819)                                                                        |
| `mroo`     | Mro-Ziffern                                                                    | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 bis U+16A69)                                                                      |
| `mtei`     | Meetei Mayek Ziffern                                                           | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 bis U+ABF9)                                                                        |
| `mymr`     | Myanmar-Ziffern                                                                | `၀၁၂၃၄၅၆၇၈၉` (U+1040 bis U+1049)                                                                        |
| `mymrepka` | Myanmar Eastern Pwo Karen Ziffern                                              | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA bis U+116E3)                                                                      |
| `mymrpao`  | Myanmar Pao Ziffern                                                            | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 bis U+116D9)                                                                      |
| `mymrshan` | Myanmar Shan Ziffern                                                           | `႐႑႒႓႔႕႖႗႘႙` (U+1090 bis U+1099)                                                                        |
| `mymrtlng` | Myanmar Tai Laing Ziffern                                                      | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 bis U+A9F9)                                                                        |
| `nagm`     | Nag Mundari Ziffern                                                            | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 bis U+1E4F9)                                                                      |
| `newa`     | Newa-Ziffern                                                                   | `𑑐𑑑𑑒𑑓𑑔𑑕𑖖𑑗𑑘𑑙` (U+11450 bis U+11459)                                                                      |
| `nkoo`     | N'Ko Ziffern                                                                   | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 bis U+07C9)                                                                        |
| `olck`     | Ol Chiki Ziffern                                                               | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 bis U+1C59)                                                                        |
| `onao`     | Ol Onal Ziffern                                                                | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 bis U+1E5FA)                                                                      |
| `orya`     | Oriya-Ziffern                                                                  | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 bis U+0B6F)                                                                        |
| `osma`     | Osmanya-Ziffern                                                                | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 bis U+104A9)                                                                      |
| `outlined` | Legacy Computing Outlined Ziffern                                              | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 bis U+1CCF9)                                                                      |
| `rohg`     | Hanifi Rohingya Ziffern                                                        | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 bis U+10D39)                                                                      |
| `roman`    | Römische Großbuchstabenziffern                                                 | algorithmisch                                                                                           |
| `romanlow` | Römische Kleinbuchstabenziffern                                                | algorithmisch                                                                                           |
| `saur`     | Saurashtra-Ziffern                                                             | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 bis U+A8D9)                                                                        |
| `segment`  | Legacy Computing Segmentierte Ziffern                                          | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 bis U+1FBF9)                                                                      |
| `shrd`     | Sharada-Ziffern                                                                | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 bis U+111D9)                                                                      |
| `sind`     | Khudawadi-Ziffern                                                              | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 bis U+112F9)                                                                      |
| `sinh`     | Singhalesische Lith-Ziffern                                                    | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 bis U+0DEF)                                                                        |
| `sora`     | Sora_Sompeng Ziffern                                                           | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 bis U+110F9)                                                                      |
| `sund`     | Sundanesische Ziffern                                                          | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 bis U+1BB9)                                                                        |
| `sunu`     | Sunuwar Ziffern                                                                | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 bis U+11BF9)                                                                      |
| `takr`     | Takri-Ziffern                                                                  | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 bis U+116C9)                                                                      |
| `talu`     | Neue Tai Lue Ziffern                                                           | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 bis U+19D9)                                                                        |
| `taml`     | Tamil-Ziffern                                                                  | algorithmisch                                                                                           |
| `tamldec`  | Moderne Tamil-Dezimalziffern                                                   | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 bis U+0BEF)                                                                        |
| `telu`     | Telugu-Ziffern                                                                 | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 bis U+0C6F)                                                                        |
| `thai`     | Thailändische Ziffern                                                          | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 bis U+0E59)                                                                        |
| `tibt`     | Tibetische Ziffern                                                             | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 bis U+0F29)                                                                        |
| `tirh`     | Tirhuta-Ziffern                                                                | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 bis U+114D9)                                                                      |
| `tnsa`     | Tangsa-Ziffern                                                                 | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 bis U+16AC9)                                                                      |
| `vaii`     | Vai-Ziffern                                                                    | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 bis U+A629)                                                                        |
| `wara`     | Warang Citi Ziffern                                                            | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 bis U+118E9)                                                                      |
| `wcho`     | Wancho-Ziffern                                                                 | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 bis U+1E2F9)                                                                      |

Es gibt drei spezielle Werte: `native`, `traditio` und `finance`, deren Bedeutungen lokalisierungsabhängig sind und je nach Sprachgebiet in das richtige System aufgelöst werden. Daher werden die `resolvedOptions()`-Methoden diese Werte nie zurückgeben, aber `Intl.Locale.prototype.numberingSystem` wird es tun (wenn sie als Eingabe bereitgestellt werden).

Referenzen:

- [CLDR Nummerierungssystemtypenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Nummerierungssystemdefinitionen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Nummerierungssysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonenbezeichner

Unterstützte Zeitzonenbezeichner können für die `timeZone`-Option beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}}, sowie zur Erstellung von {{jsxref("Temporal")}} Datumsobjekten verwendet werden. Es gibt über 400 im allgemeinen Gebrauch befindliche Bezeichner, daher werden wir sie nicht auflisten. Für eine umfassende Liste möglicher Bezeichner siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder die [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones).

Beachten Sie beim Durchstöbern der Liste, dass die Standardisierung von `Temporal` erfordert, dass Browser immer den primären Bezeichner in der IANA-Datenbank zurückgeben, der sich im Laufe der Zeit ändern kann. Siehe [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen. Beispielsweise sollte das zurückgegebene Array `"Asia/Kolkata"` anstelle von `"Asia/Calcutta"` enthalten, da Letzteres ein Alias für Ersteres ist und beide zu Indien gehören; es sollte jedoch sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, weil sie sich in verschiedenen Ländern befinden, obwohl Letzteres auch ein Alias von Ersterem ist.

Referenzen:

- [IANA Zeitzonendatenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonenbezeichner](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheitbezeichner

Im Folgenden sind alle Werte aufgelistet, die von Browsern häufig für den Schlüssel `unit` unterstützt werden. Diese Werte können für die `unit`-Option beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} verwendet werden. Diese Liste ist ein Unterabschnitt des CLDR, der ausdrücklich durch die ECMA-402-Spezifikation sanktioniert ist, damit alle Implementierungen konsistent sein sollten.

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

Wenn Sie Einheiten spezifizieren, können Sie auch zwei Einheiten mit dem Trennzeichen "-per-" kombinieren. Zum Beispiel `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [ECMA-402 sanktionierte Einzel Einheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Einheitsgültigkeitsdaten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheitsbezeichner](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

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

### Alle Werte für den Schlüssel erhalten

Um die unterstützten Werte für Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf.
Sie können dann durch das zurückgegebene Array iterieren wie unten gezeigt:

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

### Ungültiger Schlüssel löst RangeError aus

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  //Error: RangeError: invalid key: "someInvalidKey"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Intl.supportedValuesOf` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
