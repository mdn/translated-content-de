---
title: Intl.Locale.prototype.collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
l10n:
  sourceCommit: 00ed80cdebab5bc6a382686f22f52207a7897ea9
---

{{JSRef}}

Die **`collation`** Zugriffsleiste von {{jsxref("Intl.Locale")}} Instanzen gibt den [Sortieralgorithmus](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) für diese Locale zurück, der verwendet wird, um Zeichenketten entsprechend den Regeln der Locale zu ordnen.

## Beschreibung

Sortierung ist der Prozess der Anordnung von Zeichenketten. Sie wird immer dann verwendet, wenn Zeichenketten sortiert und in eine bestimmte Reihenfolge gebracht werden müssen, von Suchabfrageergebnissen bis zur Anordnung von Datensätzen in einer Datenbank. Während die Idee, Zeichenketten in eine Reihenfolge zu bringen, trivial erscheinen mag, kann die Vorstellung von Ordnung je nach Region und Sprache variieren. Der Wert der `collation` Eigenschaft wird zum Zeitpunkt der Erstellung festgelegt, entweder durch den `co` Schlüssel des Locale-Identifiers oder durch die `collation` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Eine Liste der unterstützten Sortiertypen finden Sie unter [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types).

Der Set-Zugriffsmechanismus von `collation` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Sortiertyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Sortiertyps über den Locale-String

Im [Unicode-Locale-String-Spezifikationsdokument](https://www.unicode.org/reports/tr35/) sind Sortiertypen "Erweiterungssubtags". Diese Subtags fügen zusätzliche Daten zur Locale hinzu und werden durch die Verwendung der `-u` Erweiterung zu Locale-Identifiers hinzugefügt. Daher kann der Sortiertyp dem anfänglichen Locale-String hinzugefügt werden, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergegeben wird. Um den Sortiertyp hinzuzufügen, fügen Sie zuerst die `-u` Erweiterung zum String hinzu. Fügen Sie dann die `-co` Erweiterung hinzu, um anzuzeigen, dass Sie einen Sortiertyp hinzufügen. Schließlich fügen Sie den Sortiertyp zum String hinzu.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Hinzufügen eines Sortiertyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor verfügt über ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen enthalten kann, einschließlich Sortiertypen. Setzen Sie die `collation` Eigenschaft des Konfigurationsobjekts auf den gewünschten Sortiertyp und übergeben Sie dann das Objekt an den Konstruktor.

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
