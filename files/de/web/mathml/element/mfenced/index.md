---
title: <mfenced>
slug: Web/MathML/Element/mfenced
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{MathMLRef}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<mfenced>`** [MathML](/de/docs/Web/MathML) Element bietet die Möglichkeit, benutzerdefinierte öffnende und schließende Klammern (wie z.B. Klammern) und Trennzeichen (wie Kommas oder Semikolons) zu einem Ausdruck hinzuzufügen.

> [!NOTE]
> Historisch gesehen wurde das `<mfenced>` Element als Abkürzung zum Schreiben von geklammerten Ausdrücken definiert und entsprach einer erweiterten Form, die {{MathMLElement("mrow")}} und {{MathMLElement("mo")}} Elemente umfasst. Heutzutage wird empfohlen, stattdessen diese äquivalente Form zu verwenden.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `close`
  - : Ein Zeichenfolgenwert für den schließenden Begrenzer. Der Standardwert ist `")"` und alle Leerzeichen werden entfernt.
- `open`
  - : Ein Zeichenfolgenwert für den öffnenden Begrenzer. Der Standardwert ist `"("` und alle Leerzeichen werden entfernt.
- `separators`
  - : Eine Folge von null oder mehr Zeichen, die für verschiedene Trennzeichen verwendet werden sollen, optional durch Leerzeichen getrennt, welche ignoriert werden. Der Standardwert ist ",". Durch Angabe von mehr als einem Zeichen ist es möglich, unterschiedliche Trennzeichen für jedes Argument im Ausdruck festzulegen. Wenn zu viele Trennzeichen vorhanden sind, werden alle überschüssigen ignoriert. Wenn im Ausdruck zu wenig Trennzeichen vorhanden sind, wird das zuletzt angegebene Trennzeichen wiederholt.

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

Beispieldarstellung: ![{a;b;c,d,e}](mfenced01.png)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

### Alle überschüssigen werden ignoriert (`,`)

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

Beispieldarstellung: ![[a|b|c|d|e]](mfenced02.png)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

## Spezifikationen

Das `<mfenced>` Element ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_mfenced) finden.

## Browser-Kompatibilität

{{Compat}}
