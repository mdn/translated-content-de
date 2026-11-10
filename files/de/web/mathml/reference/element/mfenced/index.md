---
title: <mfenced>
slug: Web/MathML/Reference/Element/mfenced
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{Non-standard_Header}}

Das **`<mfenced>`**-Element von [MathML](/de/docs/Web/MathML) ermöglicht es, einem Ausdruck benutzerdefinierte öffnende und schließende Klammern (z. B. runde Klammern) sowie Trennzeichen (z. B. Kommas oder Semikolons) hinzuzufügen.

> [!NOTE]
> Ursprünglich wurde das `<mfenced>`-Element als Kurzschreibweise für Ausdrücke mit umschließenden Zeichen definiert. Es entsprach einer ausgeschriebenen Form mit {{MathMLElement("mrow")}}- und {{MathMLElement("mo")}}-Elementen. Heute wird empfohlen, stattdessen diese ausgeschriebene Form zu verwenden.

## Attribute

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

- `close`
  - : Eine Zeichenfolge für das schließende Zeichen. Der Standardwert ist `")"`; führende und nachfolgende Leerzeichen werden entfernt.
- `open`
  - : Eine Zeichenfolge für das öffnende Zeichen. Der Standardwert ist `"("`; führende und nachfolgende Leerzeichen werden entfernt.
- `separators`
  - : Eine Folge von null oder mehr Zeichen, die als Trennzeichen verwendet werden. Sie können durch Leerzeichen getrennt sein, die ignoriert werden. Der Standardwert ist „,“. Wenn Sie mehrere Zeichen angeben, können Sie für die einzelnen Argumente des Ausdrucks unterschiedliche Trennzeichen festlegen. Überzählige Trennzeichen werden ignoriert. Sind für den Ausdruck zu wenige Trennzeichen angegeben, wird das zuletzt angegebene Trennzeichen wiederholt.

## Beispiele

### Das letzte Trennzeichen wird wiederholt (`,`)

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

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

Beispieldarstellung:

![{a;b;c,d,e}](mfenced-repeated.svg)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('the_last_separator_is_repeated', 700, 200, "", "") }}

### Überzählige Trennzeichen werden ignoriert (`,`)

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

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

Beispieldarstellung:

![[a|b|c|d|e]](mfenced-ignored.svg)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('all_excess_is_ignored', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

Das `<mfenced>`-Element ist in keiner browserorientierten Spezifikation definiert. Eine Beschreibung finden Sie jedoch in [MathML 4](https://w3c.github.io/mathml/#presm_mfenced).

## Browser-Kompatibilität

{{Compat}}
