---
title: Intl.Locale.prototype.getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Die Methode **`getCalendars()`** von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren eindeutigen Kalender-Identifikatoren für dieses Locale zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffs-Eigenschaft namens `calendars` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu verhindern, dass `locale.calendars === locale.calendars` `false` zurückgibt. Überprüfen Sie die [Kompatibilitätstabelle des Browsers](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getCalendars()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle Kalender darstellt, die üblicherweise für das `Locale` verwendet werden, sortiert in absteigender Präferenz. Wenn das `Locale` bereits einen [`calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) hat, dann enthält das zurückgegebene Array diesen einzigen Wert.

Unten ist eine Liste der unterstützten Kalendertypen.

### Unterstützte Kalendertypen

- `buddhist`
  - : Thailändischer buddhistischer Kalender
- `chinese`
  - : Traditioneller chinesischer Kalender
- `coptic`
  - : Koptischer Kalender
- `dangi`
  - : Traditioneller koreanischer Kalender
- `ethioaa`
  - : Äthiopischer Kalender, Amete Alem (Epoche ca. 5493 B.C.E)
- `ethiopic`
  - : Äthiopischer Kalender, Amete Mihret (Epoche ca. 8 C.E.)
- `gregory`
  - : Gregorianischer Kalender
- `hebrew`
  - : Traditioneller hebräischer Kalender
- `indian`
  - : Indischer Kalender
- `islamic`
  - : Islamischer Kalender
- `islamic-umalqura`
  - : Islamischer Kalender, Umm al-Qura
- `islamic-tbla`
  - : Islamischer Kalender, tabellarisch (Schaltjahre [2,5,7,10,13,16,18,21,24,26,29] - astronomische Epoche)
- `islamic-civil`
  - : Islamischer Kalender, tabellarisch (Schaltjahre [2,5,7,10,13,16,18,21,24,26,29] - zivile Epoche)
- `islamic-rgsa`
  - : Islamischer Kalender, Sichtung in Saudi-Arabien
- `iso8601`
  - : ISO-Kalender (Gregorianischer Kalender mit den ISO 8601 Kalenderwochenregeln)
- `japanese`
  - : Japanischer Kaiserlicher Kalender
- `persian`
  - : Persischer Kalender
- `roc`
  - : Ziviler (algorithmischer) Arabischer Kalender
- `islamicc`
  - : Ziviler (algorithmischer) Arabischer Kalender
    > [!WARNING]
    > Der `islamicc` Kalender-Schlüssel wurde veraltet. Bitte verwenden Sie `islamic-civil`.

## Beispiele

### Ermitteln von unterstützten Kalendern

Falls das `Locale`-Objekt noch keinen `calendar` hat, listet `getCalendars()` alle üblicherweise verwendeten Kalender für das gegebene `Locale` auf. Für Beispiele zum expliziten Festlegen eines `calendar`, siehe [`calendar` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getCalendars()); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getCalendars()); // ["gregory", "japanese"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode-Locale-Daten-Markup-Sprachenspezifikation
