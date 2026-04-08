---
title: Intl.supportedValuesOf()
short-title: supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 9b917afdc7307c3ad951cb031ca802cbc9fbc373
---

Die **`Intl.supportedValuesOf()`** statische Methode gibt ein Array zurück, das die unterstützten Kalender-, Sortier-, Währungs-, Zahlensystem- oder Einheitenwerte enthält, die von der Implementierung unterstützt werden.

Duplikate werden weggelassen und das Array wird in aufsteigender lexikographischer Reihenfolge sortiert (oder genauer gesagt, mit {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined`-Vergleichsfunktion).

Die Methode kann verwendet werden, um zu prüfen, ob Werte in einer bestimmten Implementierung unterstützt werden, und um nur bei Bedarf ein Polyfill herunterzuladen. Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es Benutzern ermöglichen, ihre bevorzugten lokalisierten Werte zu wählen, beispielsweise wenn die Benutzeroberfläche aus WebGL oder serverseitig erstellt wird.

Diese Methode ist nicht lokalabhängig: Es ist möglich, dass bestimmte Bezeichner nur in bestimmten Regionen unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für eine bestimmte Region bestimmen möchten, sollten Sie das {{jsxref("Intl.Locale")}} Objekt verwenden, wie z.B. {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

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
  - : Ein Zeichenfolgen-Schlüssel, der die Kategorie der zurückzugebenden Werte angibt. Dies ist einer von:
    - `"calendar"`: siehe [unterstützte Kalenderarten](#unterstützte_kalenderarten)
    - `"collation"`: siehe [unterstützte Sortierarten](#unterstützte_sortierarten)
    - `"currency"`: siehe [unterstützte Währungsbezeichner](#unterstützte_währungsbezeichner)
    - `"numberingSystem"`: siehe [unterstützte Zahlensystemarten](#unterstützte_zahlensysteme)
    - `"timeZone"`: siehe [unterstützte Zeitzonenbezeichner](#unterstützte_zeitzonen-bezeichner)
    - `"unit"`: siehe [unterstützte Einheitenbezeichner](#unterstützte_einheiten-bezeichner)

### Rückgabewert

Ein sortiertes Array einzigartiger Zeichenfolgenwerte, die die von der Implementierung für den angegebenen Schlüssel unterstützten Werte anzeigen. Die zurückgegebenen Werte sind unten aufgeführt.

#### Unterstützte Kalenderarten

Im Folgenden sind alle Werte aufgeführt, die gängigerweise von Browsern für den `calendar` Schlüssel unterstützt werden. Diese Werte können für die `calendar`-Option oder das `ca` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}}, sowie zur Erstellung von {{jsxref("Temporal")}} Datumsobjekten verwendet werden. Diese Liste ist durch die ECMA-402-Spezifikation ausdrücklich sanktioniert, sodass alle Implementierungen konsistent sein sollten.

| Wert               | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buddhist`         | Thailändischer buddhistischer Kalender, proleptisch. Monatszahlen, Monatscodes und Tage sind dieselben wie im ISO 8601 Kalender, aber das Epochjahr ist unterschiedlich. Es gibt eine Ära.                                                                                                                                                                                                         |
| `chinese`          | Traditioneller chinesischer Kalender, proleptisch. Lunisolarer Kalender, der in China basierend auf Daten des Purple Mountain Observatoriums zwischen 1900 und 2100 verwendet wird (entspricht GB/T 33661-2017 zwischen 1912 und 2100), mit einem Implementierungsdefinierten Näherungswert außerhalb dieses Bereichs. Das arithmetische Jahr ist identisch mit `gregory`, und es gibt keine Ären. |
| `coptic`           | Koptischer Kalender, proleptisch. Ähnlicher solare Algorithmus wie `ethioaa` und `ethiopic`, mit einer Ära und einem anderen Epochjahr.                                                                                                                                                                                                                                                            |
| `dangi`            | Traditioneller koreanischer Kalender, proleptisch. Lunisolarer Kalender, der Monate verwendet, die vom Korea Astronomy and Space Science Institute (KASI) zwischen 1900 und 2050 veröffentlicht wurden, mit einem Implementierungsdefinierten Näherungswert außerhalb dieses Bereichs. Das arithmetische Jahr ist identisch mit `gregory`, und es gibt keine Ären.                                 |
| `ethioaa`          | Äthiopischer Kalender, Amete Alem, proleptisch. Ähnlicher solare Algorithmus wie `coptic` und `ethiopic`, mit einer Ära und einem anderen Epochjahr.                                                                                                                                                                                                                                               |
| `ethiopic`         | Äthiopischer Kalender, Amete Mihret, proleptisch. Ähnlicher solare Algorithmus wie `coptic` und `ethioaa`, mit zwei Ären und einem anderen Epochjahr.                                                                                                                                                                                                                                              |
| `gregory`          | Gregorianischer Kalender, proleptisch. Sonnenkalender fast identisch mit dem ISO 8601 Kalender, außer dass er keine Wochenzählung definiert und zwei Ären enthält, eine vor dem Epochjahr.                                                                                                                                                                                                         |
| `hebrew`           | Hebräischer Kalender, proleptisch. Ziviler Kalender mit Tishrei als dem ersten Monat des Jahres. Lunisolarer Kalender mit einem Schaltmonat, der nach Monat 5 eingefügt wird. Es gibt eine Ära.                                                                                                                                                                                                    |
| `indian`           | Indischer nationaler (oder Śaka) Kalender, proleptisch. Sonnenkalender mit einer Ära.                                                                                                                                                                                                                                                                                                              |
| `islamic-civil`    | Hidschri-Kalender, proleptisch, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-jährigen Zyklus (1-basierte Nummerierung)) und zivilem Epoche (Freitag, 16. Juli 622 Julian / 0622-07-19 ISO)                                                                                                                                                    |
| `islamic-tbla`     | Hidschri-Kalender, proleptisch, tabellarisch/regelbasiert mit Schaltjahrregel II (Schaltjahre 2,5,7,10,13,16,18,21,24,26,29 im 30-jährigen Zyklus (1-basierte Nummerierung)) und astronomischem Epoche (Donnerstag, 15. Juli 622 Julian / 0622-07-18 ISO)                                                                                                                                          |
| `islamic-umalqura` | Hidschri-Kalender, proleptisch, Umm al-Qura. Lunarkalender, der KACST-berechnete Monate vom Beginn 1300 AH (1882-11-12 ISO) bis Ende 1600 AH (2174-11-25 ISO) verwendet, mit einem Rückgriff auf `islamic-civil` außerhalb desselben Bereichs.                                                                                                                                                     |
| `iso8601`          | ISO Kalender (Variante des Gregorianischen Kalenders mit Wochenregeln und Formatierungsparametern regionsunabhängig gemacht)                                                                                                                                                                                                                                                                       |
| `japanese`         | Japanischer Kaiserkalender (dieser Kalender fügt für jeden neuen Kaiser eine Ära hinzu, sodass das Ausgabejahr und die Ära für ein zukünftiges Datum möglicherweise nicht mit dem Eingabejahr und der Ära übereinstimmen, wenn Ihr Code auf einer zukünftigen Engine-Version ausgeführt wird. **Hinweis:** Siehe die Bemerkungen unter dieser Tabelle zu Daten vor dem 23.10.1868 ISO.)            |
| `persian`          | Persischer (oder Solarer Hidschri) Kalender, proleptisch. Es gibt eine Ära.                                                                                                                                                                                                                                                                                                                        |
| `roc`              | Republik China (oder Minguo) Kalender, proleptisch. Monatszahlen, Monatcodes und Tage sind dieselben wie im ISO 8601 Kalender, aber das Epochjahr ist unterschiedlich. Es gibt zwei Ären, eine vor dem Epochjahr und eine danach.                                                                                                                                                                  |

Stand Oktober 2025 gibt es im `japanese` Kalender zwei Probleme bei Daten vor dem 23.10.1868 ISO (dem Startdatum des Jahres 1 Meiji) in Browsern: Erstens, [CLDR hatte das falsche Startdatum für die Meiji-Ära](https://unicode-org.atlassian.net/browse/CLDR-11375), was zur Folge hat, dass Kalenderimplementierungen die Meiji-Ära weiter in die Vergangenheit ausdehnen, als sie tatsächlich war. Zweitens wird im kommenden [Intl-Ära und monthCode-Vorschlag](https://tc39.es/proposal-intl-era-monthcode/) spezifiziert, dass Daten vor dem 01.01.1873 ISO Gregorianische Ären verwenden sollten, aber Browser verwendeten traditionell Näherungen früherer japanischer Ären. Der `japanese` Kalender wurde am 01.01.1873 ISO eingeführt, sodass diese Probleme nur proleptische Daten betreffen.

Die Typen unten sind in CLDR spezifiziert, haben jedoch keine in Browsern von den obigen Kalendern unterscheidbare Implementierungen.

| Wert                             | Beschreibung                                         | Anmerkungen                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ethiopic-amete-alem`            | Äthiopischer Kalender, Amete Alem, proleptisch.      | Dies ist ein Alias für `ethioaa` und daher wird er nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `ethioaa`.                                                                                                                                                                                                                                                                       |
| `islamic`                        | Hidschri-Kalender, nicht spezifizierter Algorithmus. | Stand April 2025 ist dies eine astronomische Simulation, deren Parameter undokumentiert sind und nicht bekannt ist, dass sie mit einer bestimmten Hidschri-Kalendervariante aus Nicht-Software-Kontexten übereinstimmt. Es ist spezifiziert, auf einen anderen Kalender kanonisiert zu werden, normalerweise einen von `islamic-umalqura`, `islamic-tbla` oder `islamic-civil`, und eine Warnung auszulösen. |
| `islamicc` {{deprecated_inline}} | Ziviler (algorithmischer) Arabischer Kalender.       | Dies ist ein Alias für `islamic-civil` und daher wird er nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`.                                                                                                                                                                                                                                                           |

Die Dokumentation zu {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} und {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} bieten weitere Informationen zu verschiedenen Kalendern.

Referenzen:

- [CLDR Kalender Typenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Daten](https://unicode.org/reports/tr35/tr35-dates.html)
- [Islamische Kalenderarten](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (CLDR Designvorschlag)

#### Unterstützte Sortierarten

Unten sind alle Werte aufgeführt, die gängigerweise von Browsern für den `collation` Schlüssel unterstützt werden. Diese Werte können für die `collation` Option oder den `co` [Unicode Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.Collator")}} verwendet werden.

| Wert       | Beschreibung                                                                                                                                                                                                                                          |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine frühere Version der Sortierung, für Kompatibilität (für Arabisch)                                                                                                                                                                                |
| `dict`     | Wörterbuchstil-Sortierung (für Singhalesisch). Auch als `dictionary` erkannt.                                                                                                                                                                         |
| `emoji`    | Empfohlene Reihenfolge für Emoji-Zeichen. Die angeforderte Sprache hat keinen Einfluss, daher führt die Kombination mit einer Sprache, die sprachspezifische Regeln erfordert, zum Brechen der Sortierung für Texte in dieser Sprache!                |
| `eor`      | Europäische Ordnungsregeln (ENV 13710). Diese Reihenfolge ist darauf ausgelegt, nicht sprachspezifisch zu sein. Während die API erfordert, dass dies einer Sprache zugeordnet wird, hat die angeforderte Sprache keinen Einfluss auf die Reihenfolge. |
| `phonebk`  | Telefonbuchstil-Sortierung (für Deutsch). Auch als `phonebook` erkannt.                                                                                                                                                                               |
| `phonetic` | Phonetische Sortierung (Sortierung basierend auf Aussprache; für Lingala)                                                                                                                                                                             |
| `pinyin`   | Pinyin-Sortierung für Latein- und Han-Zeichen (für Chinesisch)                                                                                                                                                                                        |
| `searchjl` | Spezielle Sortierart für koreanische Anlaut-Suche. **Warnung:** Diese Sortierung ist nicht für die Sortierung geeignet, auch wenn sie nur mit {{jsxref("Intl.Collator")}} von `usage: "sort"` verwendet werden kann.                                  |
| `stroke`   | Pinyin-Sortierung für Latein, Striche-Richtung für Han-Zeichen (für Chinesisch)                                                                                                                                                                       |
| `trad`     | Traditioneller Stil-Sortierung (wie in Spanisch). Auch als `traditional` erkannt.                                                                                                                                                                     |
| `unihan`   | Unihan Radikal-Strich-Sortierung für Han-Zeichen (für Chinesisch, Japanisch und Koreanisch), Pinyin-Sortierung für Latein für Chinesisch und japanische Standard-Kana-Sortierung für Japanisch                                                        |
| `zhuyin`   | Pinyin-Sortierung für Latein, Zhuyin-Sortierung für Bopomofo und Han-Zeichen (für Chinesisch)                                                                                                                                                         |

Die folgenden Typen sind in CLDR-Daten spezifiziert, werden jedoch als veraltet angesehen, von der expliziten Nutzung abgeraten und/oder möglicherweise durch Browser aus verschiedenen Gründen nicht als unterstützt angezeigt. Vermeiden Sie deren Verwendung:

| Wert                             | Beschreibung                                                                                                                   | Anmerkungen                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin-Sortierung für Latein, Big5-Zeichensatz-Sortierung für CJK-Zeichen (verwendet in Chinesisch)                            | Veraltet.                                                                                                                                                                                                                                                                                                                                                 |
| `direct` {{deprecated_inline}}   | Binäre Codepoint-Reihenfolge (verwendet in Hindi)                                                                              | Veraltet.                                                                                                                                                                                                                                                                                                                                                 |
| `ducet`                          | Die Standard-Unicode-Kollationselementtabelle Reihenfolge                                                                      | Der `ducet` Sortiertyp ist nicht für das Web verfügbar.                                                                                                                                                                                                                                                                                                   |
| `gb2312` {{deprecated_inline}}   | Pinyin-Sortierung für Latein, gb2312han Zeichensatz-Sortierung für CJK-Zeichen (für Chinesisch). Auch als `gb2312han` erkannt. | Veraltet.                                                                                                                                                                                                                                                                                                                                                 |
| `reformed` {{deprecated_inline}} | Reformer Stil-Sortierung (wie z.B. in Schwedisch)                                                                              | Veraltet. Dies ist der alte Name für die Standard-Sortierung für Schwedisch [deren Sortierbenennung sich früher von anderen Sprachen unterschied](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies der Standard war, fordern Sie `sv` anstatt `sv-u-co-reformed` anzufordern.                                                                |
| `search`                         | Spezielle Sortierart für Zeichenfolgensuche                                                                                    | Verwenden Sie dies nicht als Sortiertyp, da in {{jsxref("Intl.Collator")}}, diese Sortierung durch die Option `usage: "search"` aktiviert wird. Derzeit gibt es keine API für Substring-Suche, sodass dies derzeit nur gut geeignet ist, um eine Liste von Zeichenfolgen durch einen vollständigen Schlüsselvergleich mit jedem Listenelement zu filtern. |
| `standard`                       | Standardreihenfolge für jede Sprache, außer Chinesisch (und, früher, Schwedisch)                                               | Verwenden Sie dies nicht explizit. Im Allgemeinen ist es unnötig, dies explizit anzugeben, und dies für Schwedisch explizit anzugeben ist problematisch aufgrund der unterschiedlichen Bedeutung für Schwedisch in der Vergangenheit.                                                                                                                     |

Referenzen:

- [CLDR Sortiertypenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Sortierungen](https://unicode.org/reports/tr35/tr35-collation.html)

#### Unterstützte Währungsbezeichner

Währungsbezeichner sind drei Buchstaben umfassende Großbuchstabencodes, die in ISO 4217 definiert sind. Diese Werte können für die `currency`-Option beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}}, sowie für {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}} verwendet werden. Es gibt über 300 Bezeichner, die häufig verwendet werden, sodass wir sie hier nicht alle auflisten. Für eine umfassende Liste der möglichen Bezeichner, siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

Referenzen:

- [CLDR Währungstype Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Währungs-Codes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Währungen](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Unterstützte Zahlensysteme

Im Folgenden sind alle Werte aufgeführt, die gängig von Browsern für den `numberingSystem` Schlüssel unterstützt werden. Diese Werte können für die `numberingSystem` Option oder den `nu` [Unicode Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} verwendet werden. Für die Zeilen mit "Ziffernzeichen" übersetzt die Laufzeit die Ziffern eins zu eins ohne zusätzliche Aktionen. Bei den anderen, als "algorithmisch" markiert, werden zusätzliche Algorithmen benötigt, um die Ziffern zu übersetzen. Je höher der Unicode-Codepunkt ist, desto neuer ist das Zahlensystem und desto wahrscheinlicher wird es nicht von allen Browsern unterstützt.

| Wert       | Beschreibung                                                                        | Ziffernzeichen                                                                                          |
| ---------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam-Ziffern                                                                       | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 bis U+1E959)                                                                      |
| `ahom`     | Ahom-Ziffern                                                                        | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 bis U+11739)                                                                      |
| `arab`     | Arabisch-Indische Ziffern                                                           | `٠١٢٣٤٥٦٧٨٩` (U+0660 bis U+0669)                                                                        |
| `arabext`  | Erweiterte Arabisch-Indische Ziffern                                                | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 bis U+06F9)                                                                       |
| `armn`     | Armenische Großbuchstaben-Zahlen                                                    | algorithmisch                                                                                           |
| `armnlow`  | Armenische Kleinbuchstaben-Zahlen                                                   | algorithmisch                                                                                           |
| `bali`     | Balinesische Ziffern                                                                | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 bis U+1B59)                                                                        |
| `beng`     | Bengalische Ziffern                                                                 | `০১২৩৪৫৬৭৮৯` (U+09E6 bis U+09EF)                                                                        |
| `bhks`     | Bhaiksuki-Ziffern                                                                   | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 bis U+11C59)                                                                      |
| `brah`     | Brahmi-Ziffern                                                                      | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 bis U+1106F)                                                                      |
| `cakm`     | Chakma-Ziffern                                                                      | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 bis U+1113F)                                                                      |
| `cham`     | Cham-Ziffern                                                                        | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 bis U+AA59)                                                                        |
| `cyrl`     | Kyrillische Ziffern                                                                 | algorithmisch                                                                                           |
| `deva`     | Devanagari-Ziffern                                                                  | `०१२३४५६७८९` (U+0966 bis U+096F)                                                                        |
| `diak`     | Dives Akuru-Ziffern                                                                 | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 bis U+11959)                                                                      |
| `ethi`     | Äthiopische Ziffern                                                                 | algorithmisch                                                                                           |
| `fullwide` | Vollbreite Ziffern                                                                  | `０１２３４５６７８９` (U+FF10 bis U+FF19)                                                              |
| `gara`     | Garay-Ziffern                                                                       | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 bis U+10D49)                                                                      |
| `geor`     | Georgische Ziffern                                                                  | algorithmisch                                                                                           |
| `gong`     | Gunjala Gondi-Ziffern                                                               | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 bis U+11DA9)                                                                      |
| `gonm`     | Masaram Gondi-Ziffern                                                               | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 bis U+11D59)                                                                      |
| `grek`     | Griechische Großbuchstaben-Zahlen                                                   | algorithmisch                                                                                           |
| `greklow`  | Griechische Kleinbuchstaben-Zahlen                                                  | algorithmisch                                                                                           |
| `gujr`     | Gujarati-Ziffern                                                                    | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 bis U+0AEF)                                                                        |
| `gukh`     | Gurung Khema-Ziffern                                                                | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 bis U+16139)                                                                      |
| `guru`     | Gurmukhi-Ziffern                                                                    | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 bis U+0A6F)                                                                        |
| `hanidays` | Han-Zeichen-Tag-des-Monats-Nummerierung für Mond-/andere traditionelle Kalender     |                                                                                                         |
| `hanidec`  | Positionelles Dezimalsystem, das chinesische Zahlenideogramme als Ziffern verwendet | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Vereinfachte Chinesische Ziffern                                                    | algorithmisch                                                                                           |
| `hansfin`  | Vereinfachte Chinesische Finanzziffern                                              | algorithmisch                                                                                           |
| `hant`     | Traditionelle Chinesische Ziffern                                                   | algorithmisch                                                                                           |
| `hantfin`  | Traditionelle Chinesische Finanzziffern                                             | algorithmisch                                                                                           |
| `hebr`     | Hebräische Ziffern                                                                  | algorithmisch                                                                                           |
| `hmng`     | Pahawh Hmong-Ziffern                                                                | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 bis U+16B59)                                                                      |
| `hmnp`     | Nyiakeng Puachue Hmong-Ziffern                                                      | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 bis U+1E149)                                                                      |
| `java`     | Javanesische Ziffern                                                                | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 bis U+A9D9)                                                                        |
| `jpan`     | Japanische Ziffern                                                                  | algorithmisch                                                                                           |
| `jpanfin`  | Japanische Finanzziffern                                                            | algorithmisch                                                                                           |
| `jpanyear` | Japanische Erstes-Jahr-Gannen-Nummerierung für Japanischen Kalender                 | algorithmisch                                                                                           |
| `kali`     | Kayah Li-Ziffern                                                                    | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 bis U+A909)                                                                        |
| `kawi`     | Kawi-Ziffern                                                                        | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 bis U+11F59)                                                                      |
| `khmr`     | Khmer-Ziffern                                                                       | `០១២៣៤៥៦៧៨៩` (U+17E0 bis U+17E9)                                                                        |
| `knda`     | Kannada-Ziffern                                                                     | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 bis U+0CEF)                                                                        |
| `krai`     | Kirat Rai-Ziffern                                                                   | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 bis U+16D79)                                                                      |
| `lana`     | Tai Tham Hora (Säkulare) Ziffern                                                    | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 bis U+1A89)                                                                        |
| `lanatham` | Tai Tham (Ekklesiastische) Ziffern                                                  | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 bis U+1A99)                                                                        |
| `laoo`     | Laotische Ziffern                                                                   | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 bis U+0ED9)                                                                        |
| `latn`     | Lateinische Ziffern                                                                 | `0123456789` (U+0030 bis U+0039)                                                                        |
| `lepc`     | Lepcha-Ziffern                                                                      | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 bis U+1C49)                                                                        |
| `limb`     | Limbu-Ziffern                                                                       | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 bis U+194F)                                                                        |
| `mathbold` | Mathematik-Bold-Ziffern                                                             | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE bis U+1D7D7)                                                                      |
| `mathdbl`  | Mathematik-Doppel-Schlag-Ziffern                                                    | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 bis U+1D7E1)                                                                      |
| `mathmono` | Mathematik-Monospace-Ziffern                                                        | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 bis U+1D7FF)                                                                      |
| `mathsanb` | Mathematik-Sans-Serif-Bold-Ziffern                                                  | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC bis U+1D7F5)                                                                      |
| `mathsans` | Mathematik-Sans-Serif-Ziffern                                                       | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 bis U+1D7EB)                                                                      |
| `mlym`     | Malaiisch-Ziffern                                                                   | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 bis U+0D6F)                                                                        |
| `modi`     | Modi-Ziffern                                                                        | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 bis U+11659)                                                                      |
| `mong`     | Mongolische Ziffern                                                                 | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 bis U+1819)                                                                        |
| `mroo`     | Mro-Ziffern                                                                         | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 bis U+16A69)                                                                      |
| `mtei`     | Meetei Mayek-Ziffern                                                                | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 bis U+ABF9)                                                                        |
| `mymr`     | Myanma-Ziffern                                                                      | `၀၁၂၃၄၅၆၇၈၉` (U+1040 bis U+1049)                                                                        |
| `mymrepka` | Myanmar-East-Pao-Karen-Ziffern                                                      | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA bis U+116E3)                                                                      |
| `mymrpao`  | Myanmar-Pao-Ziffern                                                                 | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 bis U+116D9)                                                                      |
| `mymrshan` | Myanmar-Shan-Ziffern                                                                | `႐႑႒႓႔႕႖႗႘႙` (U+1090 bis U+1099)                                                                        |
| `mymrtlng` | Myanmar-Tai-Laing-Ziffern                                                           | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 bis U+A9F9)                                                                        |
| `nagm`     | Nag-Mundari-Ziffern                                                                 | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 bis U+1E4F9)                                                                      |
| `newa`     | Newa-Ziffern                                                                        | `𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙` (U+11450 bis U+11459)                                                                      |
| `nkoo`     | N'Ko-Ziffern                                                                        | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 bis U+07C9)                                                                        |
| `olck`     | Ol-Chiki-Ziffern                                                                    | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 bis U+1C59)                                                                        |
| `onao`     | Ol-Onal-Ziffern                                                                     | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 bis U+1E5FA)                                                                      |
| `orya`     | Oriya-Ziffern                                                                       | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 bis U+0B6F)                                                                        |
| `osma`     | Osmanya-Ziffern                                                                     | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 bis U+104A9)                                                                      |
| `outlined` | Die mit Umrissen versehenen Zahlen des Legacy-Computing                             | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 bis U+1CCF9)                                                                      |
| `rohg`     | Hanifi Rohingya-Ziffern                                                             | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 bis U+10D39)                                                                      |
| `roman`    | Römische Großbuchstaben-Zahlen                                                      | algorithmisch                                                                                           |
| `romanlow` | Römische Kleinbuchstaben-Zahlen                                                     | algorithmisch                                                                                           |
| `saur`     | Saurashtra Ziffern                                                                  | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 bis U+A8D9)                                                                        |
| `segment`  | Segementierte Zahlen des Legacy-Computing                                           | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 bis U+1FBF9)                                                                      |
| `shrd`     | Sharada-Ziffern                                                                     | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 bis U+111D9)                                                                      |
| `sind`     | Khudawadi-Ziffern                                                                   | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 bis U+112F9)                                                                      |
| `sinh`     | Singhalesische Lith-Ziffern                                                         | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 bis U+0DEF)                                                                        |
| `sora`     | Sora_Sompeng-Ziffern                                                                | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 bis U+110F9)                                                                      |
| `sund`     | Sundanesische Ziffern                                                               | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 bis U+1BB9)                                                                        |
| `sunu`     | Sunuwar-Ziffern                                                                     | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 bis U+11BF9)                                                                      |
| `takr`     | Takri-Ziffern                                                                       | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 bis U+116C9)                                                                      |
| `talu`     | Neue Tai Lue-Ziffern                                                                | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 bis U+19D9)                                                                        |
| `taml`     | Tamil-Ziffern                                                                       | algorithmisch                                                                                           |
| `tamldec`  | Moderne Tamil-Dezimalziffern                                                        | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 bis U+0BEF)                                                                        |
| `telu`     | Telugu-Ziffern                                                                      | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 bis U+0C6F)                                                                        |
| `thai`     | Thailändische Ziffern                                                               | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 bis U+0E59)                                                                        |
| `tibt`     | Tibetische Ziffern                                                                  | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 bis U+0F29)                                                                        |
| `tirh`     | Tirhuta-Ziffern                                                                     | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 bis U+114D9)                                                                      |
| `tnsa`     | Tangsa-Ziffern                                                                      | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 bis U+16AC9)                                                                      |
| `vaii`     | Vai-Ziffern                                                                         | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 bis U+A629)                                                                        |
| `wara`     | Warang Citi-Ziffern                                                                 | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 bis U+118E9)                                                                      |
| `wcho`     | Wancho-Ziffern                                                                      | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 bis U+1E2F9)                                                                      |

Es gibt drei spezielle Werte: `native`, `traditio` und `finance`, deren Bedeutungen von der Region abhängig sind und die je nach Region zum richtigen System aufgelöst werden. Daher werden die `resolvedOptions()`-Methoden diese Werte niemals zurückgeben, aber `Intl.Locale.prototype.numberingSystem` wird dies (wenn als Eingabe bereitgestellt).

Referenzen:

- [CLDR Zahlensystemtypenschlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Zahlensystemdefinitionen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Zahlensysteme](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Unterstützte Zeitzonen-Bezeichner

Unterstützte Bezeichner für Zeitzonen können für die `timeZone`-Option beim Erstellen von Objekten wie {{jsxref("Intl.DateTimeFormat")}}, sowie für das Erstellen von {{jsxref("Temporal")}} Datumsobjekten verwendet werden. Es gibt über 400 gängige Bezeichner, daher werden wir sie nicht alle auflisten. Für eine vollständige Liste möglicher Bezeichner siehe den [Wikipedia-Artikel](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) oder die [IANA Zeitzone-Datenbank](https://www.iana.org/time-zones).

Beim Durchstöbern der Liste beachten Sie, dass die Standardisierung von `Temporal` von Browsern erfordert, immer den Hauptbezeichner in der IANA-Datenbank zurückzugeben, wobei sich dieser im Laufe der Zeit ändern kann. Siehe [Zeitzonen und Verschiebungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen. Beispielsweise sollte das zurückgegebene Array `"Asia/Kolkata"` anstelle von `"Asia/Calcutta"` enthalten, da letztere ein Alias für ersteres ist und beide zu Indien gehören; aber es sollte sowohl `"Africa/Abidjan"` als auch `"Atlantic/Reykjavik"` enthalten, da sie in verschiedenen Ländern sind, obwohl letzteres auch ein Alias für ersteres ist.

Referenzen:

- [IANA Zeitzonen-Datenbank](https://www.iana.org/time-zones)
- [UTS 35, Zeitzonen-Bezeichner](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Unterstützte Einheiten-Bezeichner

Im Folgenden sind alle Werte aufgeführt, die gängig von Browsern für das `unit`-Schlüssel unterstützt werden. Diese Werte können für die `unit`-Option beim Erstellen von Objekten wie {{jsxref("Intl.NumberFormat")}} verwendet werden. Diese Liste ist ein Teil von CLDR, der explizit durch die ECMA-402-Spezifikation sanktioniert wird, sodass alle Implementierungen konsistent sein sollten.

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

Beim Angeben von Einheiten können Sie auch zwei Einheiten mit dem Separator "-per-" kombinieren. Zum Beispiel, `meter-per-second` oder `liter-per-megabyte`.

Referenzen:

- [ECMA-402 sanktionierte Einzel Einheiten](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Einheiten-Gültigkeitsdaten](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Einheiten-Bezeichner](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

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

### Alle Werte für Schlüssel abrufen

Um die unterstützten Werte für den Kalender zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf.
Sie können dann iterieren durch das zurückgegebene Array wie unten gezeigt:

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
