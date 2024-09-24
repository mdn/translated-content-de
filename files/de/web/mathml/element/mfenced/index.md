---
title: <mfenced>
slug: Web/MathML/Element/mfenced
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<mfenced>`** [MathML](/de/docs/Web/MathML) Element ermöglicht es, benutzerdefinierte öffnende und schließende Klammern (wie Klammern) und Trennzeichen (wie Kommas oder Semikolons) zu einem Ausdruck hinzuzufügen.

> [!NOTE]
> Historisch gesehen wurde das `<mfenced>` Element als Kurzform für das Schreiben von geordneten Ausdrücken definiert und entsprach einer erweiterten Form, die {{MathMLElement("mrow")}} und {{MathMLElement("mo")}} Elemente beinhaltete. Heutzutage wird empfohlen, stattdessen diese gleichwertige Form zu verwenden.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `close`
  - : Eine Zeichenfolge für das schließende Trennzeichen. Der Standardwert ist `")"` und jegliche Leerzeichen werden entfernt.
- `open`
  - : Eine Zeichenfolge für das öffnende Trennzeichen. Der Standardwert ist `"("` und jegliche Leerzeichen werden entfernt.
- `separators`
  - : Eine Abfolge von null oder mehr Zeichen, die für unterschiedliche Trennzeichen verwendet werden, optional durch Leerzeichen getrennt, welches ignoriert wird. Der Standardwert ist ",". Durch die Angabe von mehr als einem Zeichen ist es möglich, unterschiedliche Trennzeichen für jedes Argument im Ausdruck festzulegen. Wenn zu viele Trennzeichen angegeben sind, wird der Überschuss ignoriert. Wenn zu wenige Trennzeichen im Ausdruck vorhanden sind, wird das zuletzt angegebene Trennzeichen wiederholt.

## Beispiele

### Das letzte Trennzeichen wird wiederholt (`,`)

```html
<math display="block">
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

Beispielhafte Darstellung: ![{a;b;c,d,e}](mfenced01.png)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

### Der gesamte Überschuss wird ignoriert (`,`)

```html
<math display="block">
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

Beispielhafte Darstellung: ![[a|b|c|d|e]](mfenced02.png)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

## Spezifikationen

Das `<mfenced>` Element ist in keinem browserorientierten Standard definiert, Sie finden jedoch eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_mfenced).

## Kompatibilität der Browser

{{Compat}}
