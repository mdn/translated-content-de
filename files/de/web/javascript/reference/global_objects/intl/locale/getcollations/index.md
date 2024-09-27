---
title: Intl.Locale.prototype.getCollations()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{JSRef}}

Die Methode **`getCollations()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren [Sortierungstypen](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_collation) für diesen `Locale` zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffseigenschaft namens `collations` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie nun als Methode implementiert, um zu verhindern, dass `locale.collations === locale.collations` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getCollations()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle im `Locale` üblichen Sortierungstypen darstellt, alphabetisch sortiert, wobei die Werte `standard` und `search` immer ausgeschlossen sind. Wenn der `Locale` bereits eine [`collation`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Im Folgenden finden Sie eine Liste der unterstützten Sortierungstypen, die an die [Unicode-Spezifikation für Sortierungen](https://github.com/unicode-org/cldr/blob/2dd06669d833823e26872f249aa304bc9d9d2a90/common/bcp47/collation.xml) angepasst wurden.

### Unterstützte Sortierungstypen

- `big5han`
  - : Pinyin-Sortierung für Latein, big5 Zeichensatzsortierung für CJK-Zeichen (für Chinesisch)
    > [!WARNING]
    > Der `big5han` Sortierungstyp ist veraltet, nicht verfügbar in Firefox, Chrome oder Edge.
- `compat`
  - : Eine frühere Version der Sortierung, zur Kompatibilität (für Arabisch)
- `dict`
  - : Wörterbuchartige Sortierung (für Singhalesisch)
- `direct`
  - : Binäre Codepunkt-Sortierung
    > [!WARNING]
    > Der `direct` Sortierungstyp ist veraltet. Nicht verwenden.
- `ducet`
  - : Die Standard-Sortierung nach der Unicode-Kollationstabelle
    > [!WARNING]
    > Der `ducet` Sortierungstyp ist im Web nicht verfügbar. Verwenden Sie stattdessen den `und`-Locale ohne Sortierungstyp-Spezifizierer. `und` ist die Sortierung, die `ducet` am nächsten kommt.
- `emoji`
  - : Empfohlene Sortierung für Emoji-Zeichen (für den `und`-Locale)
- `eor`
  - : Europäische Sortierungsregeln (für den `und`-Locale)
- `gb2312`
  - : Pinyin-Sortierung für Latein, gb2312han Zeichensatzsortierung für CJK-Zeichen (für Chinesisch)
    > [!WARNING]
    > Der `gb2312` Sortierungstyp ist veraltet, nicht verfügbar in Firefox, Chrome oder Edge.
- `phonebk`
  - : Telefonbuchartige Sortierung (für Deutsch)
- `phonetic`
  - : Phonetische Sortierung (Sortierung basierend auf der Aussprache; für Lingala)
- `pinyin`
  - : Pinyin-Sortierung für Latein und CJK-Zeichen (für Chinesisch)
- `reformed`
  - : Reformierte Sortierung (ehemals für Schwedisch)
    > [!WARNING]
    > Nicht explizit verwenden. Dies ist der alte Name für die Standardsortierung für Schwedisch [deren Kollationsnamen früher von anderen Sprachen abwichen](https://unicode-org.atlassian.net/browse/CLDR-15603). Da dies standardmäßig war, fordern Sie `sv` anstatt `sv-u-co-reformed` anzufordern.
- `search`
  - : Spezieller Sortierungstyp für die Zeichenfolgensuche
    > [!WARNING]
    > Nicht als Sortierungstyp verwenden, da in [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), diese Sortierung über den `"search"`-Wert für die `usage`-Option aktiviert wird. Es gibt derzeit keine API für die Substringsuche, daher ist dies derzeit nur nützlich, um eine Liste von Zeichenfolgen zu filtern, indem ein vollständiger Zeichenfolgenvergleich des Schlüssels mit jedem Listeneintrag versucht wird.
- `searchjl`
  - : Spezieller Sortierungstyp für die koreanische Initialkonsonantensuche
    > [!WARNING]
    > Diese Sortierung ist nicht zum Sortieren gedacht, obwohl sie über [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) bei Verwendung `"sort"` anstatt `"search"` verfügbar gemacht wird.
- `standard`
  - : Standardsortierung für jede Sprache, außer Chinesisch (und ehemals Schwedisch)
    > [!WARNING]
    > Nicht explizit verwenden. Im Allgemeinen ist es unnötig, dies explizit anzugeben, und es ist problematisch, dies für Schwedisch festzulegen, da es in der Vergangenheit eine andere Bedeutung für Schwedisch hatte.
- `stroke`
  - : Pinyin-Sortierung für Latein, Strichreihenfolge für CJK-Zeichen (für Chinesisch)
- `trad`
  - : Traditionelle Sortierung (wie im Spanischen)
- `unihan`
  - : Radikal-Strich-Reihenfolge für Han-Zeichen (für Chinesisch, Japanisch und Koreanisch). Pinyin-Sortierung für Latein im Falle von Chinesisch.
    > [!NOTE]
    > Der `unihan` Sortierungstyp ist nicht verfügbar in Chrome oder Edge.
- `zhuyin`
  - : Pinyin-Sortierung für Latein, Zhuyin-Reihenfolge für Bopomofo und CJK-Zeichen (für Chinesisch)

## Beispiele

### Ermittlung der unterstützten Sortierungstypen

Wenn das `Locale`-Objekt bereits keine `collation` hat, listet `getCollations()` alle gängigen Sortierungstypen für die gegebene `Locale` auf. Für Beispiele zur expliziten Einstellung einer `collation` siehe [`collation`-Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation#examples).

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
