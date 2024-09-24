---
title: Intl.Locale.prototype.getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Die **`getCollations()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren [Kollationstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für diese Lokalisierung zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Accessor-Eigenschaft mit dem Namen `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgab, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.collations === locale.collations` `false` zurückgibt. Überprüfen Sie die [Tabelle zur Browserkompatibilität](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle Kollationstypen darstellt, die üblicherweise für die `Locale` verwendet werden, alphabetisch sortiert, wobei die Werte `standard` und `search` immer ausgeschlossen sind. Wenn die `Locale` bereits eine [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Unten ist eine Liste der unterstützten Kollationstypen, angepasst von der [Unicode-Kollationsspezifikation](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml).

### Unterstützte Kollationstypen

- `big5han`
  - : Pinyin-Sortierung für Latein, big5-Zeichensatzsortierung für CJK-Zeichen (für Chinesisch)
    > [!WARNING]
    > Der `big5han`-Kollationstyp ist veraltet, nicht verfügbar in Firefox, Chrome oder Edge.
- `compat`
  - : Eine frühere Version der Sortierung, zur Kompatibilität (für Arabisch)
- `dict`
  - : Wörterbuchstil-Sortierung (für Singhalesisch)
- `direct`
  - : Binäre Codepunkt-Reihenfolge
    > [!WARNING]
    > Der `direct`-Kollationstyp ist veraltet. Nicht verwenden.
- `ducet`
  - : Die Standard-Unicode-Kollationselement-Tabelle
    > [!WARNING]
    > Der `ducet`-Kollationstyp ist nicht für das Web verfügbar. Verwenden Sie stattdessen die `und`-Lokalisierung ohne einen Kollationstyp-Spezifizierer. `und` ist die Kollation, die `ducet` am nächsten kommt.
- `emoji`
  - : Empfohlene Sortierung für Emoji-Zeichen (für die `und`-Lokalisierung)
- `eor`
  - : Europäische Sortierregeln (für die `und`-Lokalisierung)
- `gb2312`
  - : Pinyin-Sortierung für Latein, gb2312han-Zeichensatz-Sortierung für CJK-Zeichen (für Chinesisch)
    > [!WARNING]
    > Der `gb2312`-Kollationstyp ist veraltet, nicht verfügbar in Firefox, Chrome oder Edge.
- `phonebk`
  - : Telefonbuch-Stil-Reihenfolge (für Deutsch)
- `phonetic`
  - : Phonetische Sortierung (Sortierung basierend auf der Aussprache; für Lingala)
- `pinyin`
  - : Pinyin-Sortierung für Latein und für CJK-Zeichen (für Chinesisch)
- `reformed`
  - : Reformierte Reihenfolge (früher für Schwedisch)
    > [!WARNING]
    > Nicht explizit verwenden. Dies ist der alte Name für die Standardreihenfolge für Schwedisch [dessen Kollationsbenennung sich früher von anderen Sprachen unterschied](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies die Standardeinstellung war, fordern Sie `sv` an, anstatt `sv-u-co-reformed` anzufordern.
- `search`
  - : Spezieller Kollationstyp für die Zeichenfolgensuche
    > [!WARNING]
    > Nicht als Kollationstyp verwenden, da in [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) diese Kollation über den Wert `"search"` für die `usage`-Option aktiviert wird. Es gibt derzeit keine API für Substring-Suche, daher ist dies derzeit nur gut, um eine Liste von Zeichenfolgen zu filtern, indem versucht wird, einen vollständigen Schlüsselübereinstimmung gegen jedes Listenelement zu erzielen.
- `searchjl`
  - : Spezieller Kollationstyp für die koreanische Initialkonsonant-Suche
    > [!WARNING]
    > Diese Kollation ist nicht zum Sortieren geeignet, obwohl sie durch [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) verfügbar gemacht wird, die mit `usage` `"sort"` im Gegensatz zu `usage` `"search"` instanziiert wurde.
- `standard`
  - : Standard-Reihenfolge für jede Sprache, außer Chinesisch (und ehemals Schwedisch)
    > [!WARNING]
    > Nicht explizit verwenden. Im Allgemeinen ist es unnötig, dies explizit anzugeben und dies für Schwedisch anzugeben, ist problematisch aufgrund der früher unterschiedlichen Bedeutung für Schwedisch.
- `stroke`
  - : Pinyin-Sortierung für Latein, Strich-Reihenfolge für CJK-Zeichen (für Chinesisch)
- `trad`
  - : Traditionelle Stil-Reihenfolge (wie in Spanisch)
- `unihan`
  - : Radikal-Strich-Sortierung für Han-Zeichen (für Chinesisch, Japanisch und Koreanisch). Pinyin-Sortierung für Latein im Fall von Chinesisch.
    > [!NOTE]
    > Der `unihan`-Kollationstyp ist nicht verfügbar in Chrome oder Edge.
- `zhuyin`
  - : Pinyin-Sortierung für Latein, Zhuyin-Reihenfolge für Bopomofo und CJK-Zeichen (für Chinesisch)

## Beispiele

### Ermitteln unterstützter Kollationstypen

Wenn das `Locale`-Objekt noch keine `collation` hat, listet `getCollations()` alle üblicherweise verwendeten Kollationstypen für die gegebene `Locale` auf. Für Beispiele zur expliziten Festlegung einer `collation` siehe [`collation`-Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

```js
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["pinyin", "stroke", "zhuyin", "emoji", "eor"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)
