---
title: Intl.Locale.prototype.collation
short-title: collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`collation`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den [Kollationstyp](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) für dieses Locale zurück, der verwendet wird, um Zeichenfolgen gemäß den Regeln des Locales zu ordnen.

## Beschreibung

Kollation ist der Prozess der Anordnung von Zeichenfolgen. Sie wird immer dann verwendet, wenn Zeichenfolgen sortiert und in eine bestimmte Reihenfolge gebracht werden müssen, von Suchergebnissen bis zur Anordnung von Einträgen in einer Datenbank. Während die Idee, Zeichenfolgen zu ordnen, trivial erscheinen mag, kann die Vorstellung von Ordnung von Region zu Region und Sprache zu Sprache variieren. Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

Der Wert der `collation` Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `co` Schlüssel der Locale-Kennung oder durch die `collation` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `collation` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Kollationstyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Kollationstyps über den Locale-String

Im [Unicode-Locale-String-Spec](https://www.unicode.org/reports/tr35/) ist `collation` ein "Erweiterungs-Subtag". Diese Subtags fügen zusätzliche Daten über das Locale hinzu und werden den Locale-Kennungen mit dem `-u` Erweiterungsschlüssel hinzugefügt. Um den Kollationstyp dem anfänglichen Locale-Kennung-String hinzuzufügen, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird, fügen Sie zuerst den `-u` Erweiterungsschlüssel hinzu, falls er nicht existiert. Fügen Sie dann die `-co` Erweiterung hinzu, um anzuzeigen, dass Sie einen Kollationstyp hinzufügen. Schließlich fügen Sie den Kollationstyp hinzu.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Hinzufügen eines Kollationstyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine von mehreren Erweiterungsarten enthalten kann, einschließlich Kollationstypen. Setzen Sie die `collation` Eigenschaft des Konfigurationsobjekts auf den gewünschten Kollationstyp und übergeben Sie es dann dem Konstruktor.

```js
const locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations)
