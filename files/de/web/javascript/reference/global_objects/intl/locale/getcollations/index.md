---
title: Intl.Locale.prototype.getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Die **`getCollations()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren [Kollationstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für diese Lokalisierung zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffs-Eigenschaft namens `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie nun als Methode implementiert, um zu verhindern, dass `locale.collations === locale.collations` `false` zurückgibt. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, die alle häufig verwendeten Kollationstypen für das `Locale` darstellen, alphabetisch sortiert, wobei die Werte `standard` und `search` immer ausgeschlossen sind. Wenn das `Locale` bereits über eine [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) verfügt, enthält das zurückgegebene Array diesen einzelnen Wert.

Unten ist eine Liste der unterstützten Kollationstypen, angepasst aus der [Unicode-Kollationsspezifikation](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml).

### Unterstützte Kollationstypen

- `big5han`
  - : Pinyin-Reihenfolge für Latein, big5 Zeichensatzreihenfolge für CJK-Zeichen (für Chinesisch)
    > [!WARNING]
    > Der Kollationstyp `big5han` ist veraltet, nicht verfügbar in Firefox, Chrome oder Edge.
- `compat`
  - : Eine frühere Version der Reihenfolge, für Kompatibilität (für Arabisch)
- `dict`
  - : Wörterbuchartige Reihenfolge (für Singhalesisch)
- `direct`
  - : Binäre Codepunktreihenfolge
    > [!WARNING]
    > Der Kollationstyp `direct` ist veraltet. Nicht verwenden.
- `ducet`
  - : Die Standardreihenfolge der Unicode-Kollationselementtabelle
    > [!WARNING]
    > Der Kollationstyp `ducet` ist im Web nicht verfügbar. Verwenden Sie stattdessen das `und` Locale ohne Kollationstyp-Spezifikator. `und` ist die Kollation, die `ducet` am nächsten kommt.
- `emoji`
  - : Empfohlene Reihenfolge für Emoji-Zeichen (für das `und` Locale)
- `eor`
  - : Europäische Ordnungsregeln (für das `und` Locale)
- `gb2312`
  - : Pinyin-Reihenfolge für Latein, gb2312han Zeichensatzreihenfolge für CJK-Zeichen (für Chinesisch)
    > [!WARNING]
    > Der Kollationstyp `gb2312` ist veraltet, nicht verfügbar in Firefox, Chrome oder Edge.
- `phonebk`
  - : Telefonbuchartige Reihenfolge (für Deutsch)
- `phonetic`
  - : Phonetische Reihenfolge (Sortierung basierend auf Aussprache; für Lingala)
- `pinyin`
  - : Pinyin-Reihenfolge für Latein und für CJK-Zeichen (für Chinesisch)
- `reformed`
  - : Reformierte Reihenfolge (früher für Schwedisch)
    > [!WARNING]
    > Nicht explizit verwenden. Dies ist der alte Name für die Standardreihenfolge für Schwedisch [die Kollationsnamen unterschieden sich früher von anderen Sprachen](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies der Standard war, fordern Sie `sv` anstelle von `sv-u-co-reformed` an.
- `search`
  - : Spezieller Kollationstyp für die Zeichenfolgensuche
    > [!WARNING]
    > Nicht als Kollationstyp verwenden, da diese Kollation in [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), durch den `"search"` Wert für die `usage` Option aktiviert wird. Derzeit gibt es keine API für Substring-Suche, daher ist dies derzeit nur zur Filterung einer Liste von Zeichenfolgen nützlich, indem ein vollständiger Zeichenfolgenabgleich des Schlüssels mit jedem Listenelement versucht wird.
- `searchjl`
  - : Spezieller Kollationstyp für die koreanische Initialkonsontantensuche
    > [!WARNING]
    > Diese Kollation ist nicht zum Sortieren, auch wenn sie über [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) mit Nutzung `"sort"` anstelle von Nutzung `"search"` bereitgestellt wird.
- `standard`
  - : Standardreihenfolge für jede Sprache, außer Chinesisch (und früher auch Schwedisch)
    > [!WARNING]
    > Nicht explizit verwenden. Im Allgemeinen ist es unnötig, dies explizit anzugeben, und dies für Schwedisch anzugeben ist problematisch aufgrund der unterschiedlichen Bedeutung für Schwedisch in der Vergangenheit.
- `stroke`
  - : Pinyin-Reihenfolge für Latein, Strichreihenfolge für CJK-Zeichen (für Chinesisch)
- `trad`
  - : Traditionelle Stilreihenfolge (wie im Spanischen)
- `unihan`
  - : Radikal-Strich-Reihenfolge für Han-Zeichen (für Chinesisch, Japanisch und Koreanisch). Pinyin-Reihenfolge für Latein im Fall von Chinesisch.
    > [!NOTE]
    > Der Kollationstyp `unihan` ist nicht verfügbar in Chrome oder Edge.
- `zhuyin`
  - : Pinyin-Reihenfolge für Latein, Zhuyin-Reihenfolge für Bopomofo und CJK-Zeichen (für Chinesisch)

## Beispiele

### Unterstützte Kollationstypen beziehen

Wenn das `Locale`-Objekt noch keine `collation` hat, listet `getCollations()` alle häufig verwendeten Kollationstypen für das gegebene `Locale` auf. Für Beispiele zur expliziten Festlegung einer `collation` siehe [`collation` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

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
