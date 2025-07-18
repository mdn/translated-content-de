---
title: Alte Versionsformate
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version/format
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Diese Seite beschreibt veraltete Versionsstring-Formate für Webextensionen. Lesen Sie die Dokumentation des Manifests zum [Version-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) für Informationen zum aktuellen Versionsstring-Format.

## Firefox altes Versionsnummerformat

Ein **Versionsstring** besteht aus einem oder mehreren _Versionsabschnitten_, die durch Punkte getrennt sind.

Jeder **Versionsabschnitt** wird als eine Folge von vier Teilen geparst: `<number-a><string-b><number-c><string-d>`. Jeder dieser Teile ist optional. Zahlen sind ganze Zahlen in Basis 10 (können negativ sein), und Zeichenfolgen sind nicht-numerische {{Glossary("ASCII", "ASCII")}}-Zeichen.

Hier sind einige Beispiele für gültige Versionsabschnitte:

- `0` (wie in `1.0`): `<number-a>=0`
- `5a` (wie in `1.5a`): `<number-a>=5`, `<string-b>=a`
- `5pre4` (wie in `3.5pre4`): `<number-a>=5`, `<string-b>=pre`, `<number-c>=4`
- `*` (wie in `1.0.*`): `<string-b>=*`

Einige spezielle Parsing-Regeln werden für Rückwärtskompatibilität und Lesbarkeit angewendet:

- Wenn der Versionsabschnitt ein einzelner Stern ist, wird er als unendlich große Zahl interpretiert:
  `1.5.0.*` ist dasselbe wie `1.5.0.(infinity)`
- Wenn string-b ein Pluszeichen ist, wird number-a inkrementiert, um mit dem Firefox 1.0.x-Versionsformat kompatibel zu sein:
  `1.0+` ist dasselbe wie `1.1pre`

Der Grund, einen Versionsabschnitt in eine Folge von Zeichenfolgen und Zahlen aufzuteilen, liegt darin, dass beim Vergleichen von Versionsabschnitten die numerischen Teile als Zahlen verglichen werden, zum Beispiel '1.0pre1' < '1.0pre10', während die Zeichenfolgen byteweise verglichen werden. Details dazu, wie Versionen verglichen werden, finden Sie im nächsten Abschnitt.

Ab Firefox 108 lösen Webextensionen, die diesen Versionsstring verwenden, bei der Installation eine Warnung aus.

## Vergleichen von Versionen

Wenn zwei Versionsstrings verglichen werden, werden ihre Versionsabschnitte von links nach rechts verglichen. Ein leerer oder fehlender Versionsabschnitt ist gleichbedeutend mit `0`.

Wenn an einem Punkt ein Versionsabschnitt eines Versionsstrings größer ist als der entsprechende Abschnitt eines anderen Versionsstrings, dann ist der erste Versionsstring größer als der andere.

Andernfalls sind die Versionsstrings gleich. Da fehlende Versionsabschnitte so behandelt werden, als wären sie `0`, sind diese Versionsstrings gleich: `1`, `1.0`, `1.0.`, `1.0.0` und sogar `1.0..`.

### Vergleich von Versionsabschnitten

Versionsabschnitte werden ebenfalls von links nach rechts verglichen; Teile A und C werden als Zahlen verglichen, während Teile B und D byteweise verglichen werden. Ein existierender Zeichenfolgenabschnitt ist immer niedriger als ein nicht existierender Zeichenfolgenabschnitt (`1.6a` ist niedriger als `1.6`).

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
