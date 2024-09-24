---
title: <number>
slug: Web/CSS/number
l10n:
  sourceCommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{CSSRef}}

Der **`<number>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Zahl, sei es eine ganze Zahl oder eine Zahl mit einem Bruchteil.

## Syntax

Die Syntax von `<number>` erweitert die Syntax von {{CSSxRef("&lt;integer&gt;")}}. Ein Bruchwert wird durch einen Punkt `.` gefolgt von einer oder mehreren Dezimalstellen dargestellt und kann an eine Ganzzahl angehängt werden. Es gibt keine Einheit, die mit Zahlen verbunden ist.

## Interpolation

Bei der Animation werden Werte des CSS-Datentyps `<number>` als reale, Gleitkommazahlen interpoliert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verknüpfte [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Gültige Zahlen

```plain example-good
12          Ein rohes <integer> ist auch ein <number>.
4.01        Positive Bruchzahl
-456.8      Negative Bruchzahl
0.0         Null
+0.0        Null, mit einem führenden +
-0.0        Null, mit einem führenden -
.60         Bruchzahl ohne führende Null
10e3        Wissenschaftliche Notation
-3.4e-2     Komplizierte wissenschaftliche Notation
```

### Ungültige Zahlen

```plain example-bad
12.         Dezimalpunkte müssen von mindestens einer Ziffer gefolgt werden.
+-12.2      Es ist nur ein führendes +/- zulässig.
12.1.1      Es ist nur ein Dezimalpunkt zulässig.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;integer&gt;")}}
