---
title: Legacy Version Formats
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version/format
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{AddonSidebar}}

Diese Seite beschreibt alte Formatierungen für Versionszeichenfolgen von Web-Erweiterungen. Siehe die Dokumentation zum [version key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) im Manifest für Informationen über das aktuelle Versionszeichenfolgenformat.

## Firefox Legacy-Versionsnummer

Eine **Versionszeichenfolge** besteht aus einem oder mehreren _Versionsteilen_, die durch Punkte getrennt sind.

Jeder **Versionsteil** wird als eine Sequenz von vier Teilen analysiert: `<number-a><string-b><number-c><string-d>`. Jeder der Teile ist optional. Zahlen sind ganzzahlige Basis 10 (können negativ sein), und Zeichenfolgen sind nicht-numerische {{Glossary("ASCII", "ASCII")}}-Zeichen.

Hier sind einige Beispiele gültiger Versionsteile:

- `0` (wie in `1.0`): `<number-a>=0`
- `5a` (wie in `1.5a`): `<number-a>=5`, `<string-b>=a`
- `5pre4` (wie in `3.5pre4`): `<number-a>=5`, `<string-b>=pre`, `<number-c>=4`
- `*` (wie in `1.0.*`): `<string-b>=*`

Einige spezielle Parsing-Regeln werden angewendet, um die Abwärtskompatibilität und Lesbarkeit zu gewährleisten:

- Wenn der Versionsteil ein einzelner Stern ist, wird er als unendlich große Zahl interpretiert:
  `1.5.0.*` ist dasselbe wie `1.5.0.(unendlich)`
- Wenn string-b ein Pluszeichen ist, wird number-a erhöht, um mit dem Firefox 1.0.x-Versionsformat kompatibel zu sein:
  `1.0+` ist dasselbe wie `1.1pre`

Der Grund für die Aufteilung eines Versionsteils in eine Sequenz aus Zeichen und Zahlen ist, dass beim Vergleich von Versionsteilen die numerischen Teile als Zahlen verglichen werden, zum Beispiel '1.0pre1' < '1.0pre10', während die Zeichenfolgen byteweise verglichen werden. Siehe den nächsten Abschnitt für Details dazu, wie Versionen verglichen werden.

Ab Firefox 108 lösen Web-Erweiterungen, die diese Versionszeichenfolge verwenden, eine Warnung bei der Installation aus.

## Vergleich von Versionen

Wenn zwei Versionszeichenfolgen verglichen werden, werden ihre Versionsteile von links nach rechts verglichen. Ein leerer oder fehlender Versionsteil entspricht `0`.

Wenn an irgendeinem Punkt ein Versionsteil einer Versionszeichenfolge größer ist als der entsprechende Versionsteil einer anderen Versionszeichenfolge, dann ist die erste Versionszeichenfolge größer als die andere.

Andernfalls sind die Versionszeichenfolgen gleich. Da fehlende Versionsteile so behandelt werden, als ob sie `0` wären, sind diese Versionszeichenfolgen gleich: `1`, `1.0`, `1.0.`, `1.0.0`, und sogar `1.0..`.

### Vergleich von Versionsteilen

Versionsteile werden ebenfalls von links nach rechts verglichen; Teile A und C werden als Zahlen verglichen, während Teile B und D byteweise verglichen werden. Ein vorhandener Zeichenfolgenteil ist immer kleiner als ein nicht vorhandener Zeichenfolgenteil (`1.6a` ist kleiner als `1.6`).

## Beispiele

```plain
1.-1
< 1 == 1. == 1.0 == 1.0.0
< 1.1a < 1.1aa < 1.1ab < 1.1b < 1.1c
< 1.1pre == 1.1pre0 == 1.0+
< 1.1pre1a < 1.1pre1aa < 1.1pre1b < 1.1pre1
< 1.1pre2
< 1.1pre10
< 1.1.-1
< 1.1 == 1.1.0 == 1.1.00
< 1.10
< 1.* < 1.*.1
< 2.0
```
