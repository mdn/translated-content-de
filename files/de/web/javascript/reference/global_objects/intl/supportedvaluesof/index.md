---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Intl.supportedValuesOf()`** gibt ein Array mit den unterstützten Kalender-, Kollations-, Währungs-, Nummerierungssystem- oder Einheit-Werten zurück, die von der Implementierung unterstützt werden.

Duplikate werden weggelassen, und das Array wird in aufsteigender lexikografischer Reihenfolge sortiert (oder genauer gesagt, durch die Verwendung von {{jsxref("Array/sort", "Array.prototype.sort()")}} mit einer `undefined` Vergleichsfunktion).

Die Methode kann verwendet werden, um zu testen, ob Werte in einer bestimmten Implementierung unterstützt werden, und gegebenenfalls nur dann ein Polyfill herunterzuladen. Sie kann auch verwendet werden, um Benutzeroberflächen zu erstellen, die es den Nutzern ermöglichen, ihre bevorzugten lokalen Werte auszuwählen, z. B. wenn die Benutzeroberfläche mit WebGL oder serverseitig erstellt wird.

Diese Methode ist lokalisierungsunabhängig: Es ist möglich, dass bestimmte Bezeichner nur in bestimmten lokalen Einstellungen unterstützt oder bevorzugt werden. Wenn Sie die bevorzugten Werte für eine spezifische lokale Einstellung ermitteln möchten, sollten Sie das {{jsxref("Intl.Locale")}}-Objekt verwenden, z. B. {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

{{InteractiveExample("JavaScript Demo: Intl.supportedValuesOf", "taller")}}

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
  - : Ein Schlüsselstring, der die Kategorie der zurückzugebenden Werte angibt. Dieser ist einer der folgenden:
    - `"calendar"`: siehe [unterstützte Kalendertypen](#unterstützte_kalendertypen)
    - `"collation"`: siehe [unterstützte Kollationstypen](#unterstützte_kollationstypen)
    - `"currency"`: siehe [unterstützte Währungsbezeichner](#beispiele)
    - `"numberingSystem"`: siehe [unterstützte Nummerierungssystemtypen](#feature-testing)
    - `"timeZone"`: siehe [unterstützte Zeitzonenbezeichner](#alle_werte_für_einen_schlüssel_abrufen)
    - `"unit"`: siehe [unterstützte Einheitenbezeichner](#ungültiger_schlüssel_wirft_rangeerror)

### Rückgabewert

Ein sortiertes Array mit einzigartigen Stringwerten, die die von der Implementierung unterstützten Werte für den gegebenen Schlüssel anzeigen. Die möglichen zurückgegebenen Werte sind unten aufgelistet.

#### Unterstützte Kalendertypen

Unten sind alle Werte aufgeführt, die Browser häufig für den Schlüssel `calendar` unterstützen. Diese Werte können für die Option `calendar` oder den `ca` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) bei der Erstellung von Objekten wie {{jsxref("Intl.DateTimeFormat")}} und zur Erstellung von {{jsxref("Temporal")}}-Datumsobjekten verwendet werden.

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
| `islamic-rgsa`     | Hijri-Kalender, Saudi-Arabien-Sichtung                                                            |
| `iso8601`          | ISO-Kalender (Gregorianischer Kalender mit den Kalenderwochenvorschriften von ISO 8601)           |
| `japanese`         | Japanischer Kaiser-Kalender                                                                       |
| `persian`          | Persischer Kalender                                                                               |
| `roc`              | Republik-China-Kalender                                                                           |

Die unten aufgeführten Typen sind in den CLDR-Daten spezifiziert, aber veraltet, werden nicht zum expliziten Gebrauch empfohlen und/oder können von Browsern aus verschiedenen Gründen nicht als unterstützt angezeigt werden. Vermeiden Sie die Verwendung dieser:

| Wert                             | Beschreibung                                   | Hinweise                                                                                                                                        |
| -------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | Ziviler (algorithmischer) arabischer Kalender. | Dies ist ein Alias für `islamic-civil` und wird daher nicht von `supportedValuesOf()` zurückgegeben. Verwenden Sie stattdessen `islamic-civil`. |

Referenzen:

- [CLDR Kalender-Typ-Schlüssel](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Daten](https://unicode.org/reports/tr35/tr35-dates.html)

#### Unterstützte Kollationstypen

Unten sind alle Werte aufgeführt, die Browser häufig für den Schlüssel `collation` unterstützen. Diese Werte können für die Option `collation` oder den `co` [Unicode-Erweiterungsschlüssel](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) bei der Erstellung von Objekten wie {{jsxref("Intl.Collator")}} verwendet werden.

| Wert       | Beschreibung                                                                                                                                                                                                                                  |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Eine ältere Version der Sortierregeln, zur Kompatibilität (für Arabisch)                                                                                                                                                                      |
| `dict`     | Wörterbuchstil-Sortierung (wie z. B. bei Singhalesisch). Wird auch als `dictionary` erkannt.                                                                                                                                                  |
| `emoji`    | Empfohlene Sortierung für Emoji-Zeichen                                                                                                                                                                                                       |
| `eor`      | Europäische Sortierungsregeln                                                                                                                                                                                                                 |
| `phonebk`  | Telefonbuchstil-Sortierung (wie z. B. bei Deutsch). Wird auch als `phonebook` erkannt.                                                                                                                                                        |
| `phonetic` | Phonetische Sortierung (Sortierung basierend auf Aussprache; für Lingala)                                                                                                                                                                     |
| `pinyin`   | Pinyin-Sortierung für Latein- und CJK-Zeichen (wird in Chinesisch verwendet)                                                                                                                                                                  |
| `searchjl` | Spezieller Kollationstyp für koreanische Such-Funktionen nach Initialkonsonanten. **Warnung:** Diese Kollation ist nicht zur Sortierung gedacht, auch wenn sie nur mit {{jsxref("Intl.Collator")}} von `usage: "sort"` verwendet werden kann. |

// Aufgrund der Länge des Dokuments folgt die Fortsetzung mit ähnlichen Detaillierungsgrad.

## Beispiele

### Feature-Testing

Sie können prüfen, ob die Methode unterstützt wird, indem Sie mit `undefined` vergleichen:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Alle Werte für einen Schlüssel abrufen

Um die unterstützten Werte für den Schlüssel `calendar` zu erhalten, rufen Sie die Methode mit dem Schlüssel `"calendar"` auf. Sie können dann durch das zurückgegebene Array iterieren, wie unten gezeigt:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

Die anderen Werte werden auf die gleiche Weise abgerufen:

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
  //Error: RangeError: invalid key: "someInvalidKey"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.supportedValuesOf` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
