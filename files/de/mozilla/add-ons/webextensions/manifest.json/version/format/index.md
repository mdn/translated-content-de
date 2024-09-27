---
title: Legacy Version Formats
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version/format
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{AddonSidebar}}

Diese Seite beschreibt die veralteten Versionstring-Formate von Web-Erweiterungen. Sehen Sie in der Dokumentation zum Manifest-[Version-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) für Informationen zum aktuellen Versionstring-Format nach.

## Firefox Legacy-Versionsnummer

Ein **Versionsstring** besteht aus einem oder mehreren _Versionsbestandteilen_, die durch Punkte getrennt sind.

Jeder **Versionsbestandteil** wird als eine Sequenz von vier Teilen analysiert: `<number-a><string-b><number-c><string-d>`. Jeder der Teile ist optional. Zahlen sind ganze Zahlen im Dezimalsystem (können negativ sein), und Zeichenfolgen sind nicht-numerische [ASCII](/de/docs/Glossary/ASCII)-Zeichen.

Hier sind einige Beispiele für gültige Versionsbestandteile:

- `0` (wie in `1.0`): `<number-a>=0`
- `5a` (wie in `1.5a`): `<number-a>=5`, `<string-b>=a`
- `5pre4` (wie in `3.5pre4`): `<number-a>=5`, `<string-b>=pre`, `<number-c>=4`
- `*` (wie in `1.0.*`): `<string-b>=*`

Einige spezielle Parsing-Regeln werden zur Sicherstellung der Abwärtskompatibilität und Lesbarkeit angewendet:

- Wenn der Versionsbestandteil ein einzelnes Sternchen ist, wird es als eine unendlich große Zahl interpretiert:
  `1.5.0.*` ist dasselbe wie `1.5.0.(unendlich)`
- Wenn `string-b` ein Pluszeichen ist, wird `number-a` inkrementiert, um mit dem Firefox 1.0.x-Version-Format kompatibel zu sein:
  `1.0+` ist dasselbe wie `1.1pre`

Der Grund für das Aufteilen eines Versionsbestandteils in eine Sequenz von Zeichenfolgen und Zahlen ist, dass bei Vergleich von Versionsbestandteilen die numerischen Teile als Zahlen verglichen werden, zum Beispiel ist '1.0pre1' < '1.0pre10', während die Zeichenfolgen byteweise verglichen werden. Details finden Sie im nächsten Abschnitt über den Vergleich von Versionen.

Ab Firefox 108 lösen Web-Erweiterungen, die diesen Versionsstring verwenden, eine Warnung bei der Installation aus.

## Vergleich von Versionen

Wenn zwei Versionsstrings verglichen werden, werden ihre Versionsbestandteile von links nach rechts verglichen. Ein leerer oder fehlender Versionsbestandteil ist gleichbedeutend mit `0`.

Wenn an einem bestimmten Punkt ein Versionsbestandteil eines Versionsstrings größer ist als der entsprechende Versionsbestandteil eines anderen Versionsstrings, ist der erste Versionsstring größer als der andere.

Andernfalls sind die Versionsstrings gleich. Da fehlende Versionsbestandteile so behandelt werden, als wären sie `0`, sind diese Versionsstrings gleich: `1`, `1.0`, `1.0.`, `1.0.0` und sogar `1.0..`.

### Vergleich von Versionsbestandteilen

Versionsbestandteile werden ebenfalls von links nach rechts verglichen; die Teile A und C werden als Zahlen verglichen, während die Teile B und D byteweise verglichen werden. Ein existierender Zeichenkettenteil ist immer kleiner als ein nicht existierender Zeichenkettenteil (`1.6a` ist kleiner als `1.6`).

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
