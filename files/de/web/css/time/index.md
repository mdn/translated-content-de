---
title: <time>
slug: Web/CSS/time
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **`<time>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Zeitwert, der in Sekunden oder Millisekunden ausgedrückt wird. Er wird in {{cssxref("animation")}}, {{cssxref("transition")}} und verwandten Eigenschaften verwendet.

## Syntax

Der `<time>` Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Optional kann er von einem einzelnen `+` oder `-` Zeichen vorangestellt sein. Wie bei allen Dimensionen gibt es keinen Abstand zwischen dem Einheitensymbol und der Zahl.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer gleich ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und repräsentiert nicht `0s` oder `0ms`.

### Einheiten

- `s`
  - : Repräsentiert eine Zeit in Sekunden. Beispiele: `0s`, `1.5s`, `-60s`.
- `ms`
  - : Repräsentiert eine Zeit in Millisekunden. Beispiele: `0ms`, `150.25ms`, `-60000ms`.

> [!NOTE]
> Die Umrechnung zwischen `s` und `ms` folgt der Logik `1s` = `1000ms`.

## Beispiele

### Gültige Zeiten

```plain example-good
12s         Positive ganze Zahl
-456ms      Negative ganze Zahl
4.3ms       Nicht ganzen Zahle
14mS        Die Einheit ist nicht case-sensitiv, obwohl Großbuchstaben nicht empfohlen werden.
+0s         Null mit führendem + und einer Einheit
-0ms        Null mit führendem - und einer Einheit
```

### Ungültige Zeiten

```plain example-bad
0           Obwohl einheitenloses Null für <length>s erlaubt ist, ist es für <time>s ungültig.
12.0        Dies ist ein <number>, kein <time>, da eine Einheit fehlt.
7 ms        Kein Abstand ist zwischen der Zahl und der Einheit erlaubt.
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{cssxref("&lt;time-percentage&gt;")}}
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
