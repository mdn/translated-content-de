---
title: <mfenced>
slug: Web/MathML/Element/mfenced
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{MathMLRef}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<mfenced>`** [MathML](/de/docs/Web/MathML)-Element bietet die Möglichkeit, benutzerdefinierte öffnende und schließende Klammern (z. B. runde Klammern) und Trenner (z. B. Kommas oder Semikolons) zu einem Ausdruck hinzuzufügen.

> [!NOTE]
> Historisch gesehen wurde das `<mfenced>`-Element als Kurzschreibweise für geschlossene Ausdrücke definiert und war gleichbedeutend mit einer erweiterten Form, die die {{MathMLElement("mrow")}} und {{MathMLElement("mo")}}-Elemente umfasst. Heutzutage wird empfohlen, stattdessen diese äquivalente Form zu verwenden.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `close`
  - : Ein String für das schließende Trennzeichen. Der Standardwert ist `")"` und jeder Leerraum wird entfernt.
- `open`
  - : Ein String für das öffnende Trennzeichen. Der Standardwert ist `"("` und jeder Leerraum wird entfernt.
- `separators`
  - : Eine Folge von null oder mehr Zeichen, die als unterschiedliche Trennzeichen verwendet werden, optional durch Leerzeichen getrennt, die ignoriert werden. Der Standardwert ist ",". Durch die Angabe von mehr als einem Zeichen ist es möglich, verschiedene Trennzeichen für jedes Argument im Ausdruck festzulegen. Wenn es zu viele Trennzeichen gibt, werden alle Überschüsse ignoriert. Wenn es in dem Ausdruck zu wenige Trennzeichen gibt, wird das zuletzt angegebene Trennzeichen wiederholt.

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

Beispielabbildung: ![{a;b;c,d,e}](mfenced01.png)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

### Alle Überschüsse werden ignoriert (`,`)

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

Beispielabbildung: ![[a|b|c|d|e]](mfenced02.png)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

## Spezifikationen

Das `<mfenced>`-Element ist in keiner browserorientierten Spezifikation definiert, aber eine Beschreibung finden Sie in [MathML 4](https://w3c.github.io/mathml/#presm_mfenced).

## Browser-Kompatibilität

{{Compat}}
