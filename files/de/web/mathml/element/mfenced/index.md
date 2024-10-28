---
title: <mfenced>
slug: Web/MathML/Element/mfenced
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<mfenced>`** [MathML](/de/docs/Web/MathML)-Element ermöglicht es, benutzerdefinierte öffnende und schließende Klammern (wie Klammern) und Trennzeichen (wie Kommas oder Semikolons) zu einem Ausdruck hinzuzufügen.

> [!NOTE]
> Historisch wurde das `<mfenced>`-Element als Kurzform für das Schreiben von geklammerten Ausdrücken definiert und entsprach einer erweiterten Form unter Verwendung von {{MathMLElement("mrow")}} und {{MathMLElement("mo")}}-Elementen. Heutzutage wird empfohlen, diese äquivalente Form zu verwenden.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `close`
  - : Ein String für das schließende Trennzeichen. Der Standardwert ist `")"` und alle Leerzeichen werden entfernt.
- `open`
  - : Ein String für das öffnende Trennzeichen. Der Standardwert ist `"("` und alle Leerzeichen werden entfernt.
- `separators`
  - : Eine Folge von null oder mehr Zeichen, die für unterschiedliche Trennzeichen verwendet werden sollen, optional getrennt durch Leerzeichen, die ignoriert werden. Der Standardwert ist ",". Durch die Angabe von mehr als einem Zeichen ist es möglich, verschiedene Trennzeichen für jedes Argument im Ausdruck festzulegen. Wenn es zu viele Trennzeichen gibt, wird der Überschuss ignoriert. Wenn es zu wenige Trennzeichen im Ausdruck gibt, wird das zuletzt angegebene Trennzeichen wiederholt.

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

Beispielrendering: ![{a;b;c,d,e}](mfenced01.png)

Rendering in Ihrem Browser:

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

Beispielrendering: ![[a|b|c|d|e]](mfenced02.png)

Rendering in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

Das `<mfenced>`-Element ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_mfenced) finden.

## Browser-Kompatibilität

{{Compat}}
