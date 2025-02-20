---
title: <percentage>
slug: Web/CSS/percentage
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Der **`<percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Prozentwert. Er wird häufig verwendet, um eine Größe relativ zum übergeordneten Element festzulegen. Zahlreiche Eigenschaften können Prozentsätze verwenden, wie {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}}, und {{CSSxRef("font-size")}}.

> [!NOTE]
> Nur berechnete Werte können vererbt werden. Daher wird, selbst wenn ein Prozentwert für die übergeordnete Eigenschaft verwendet wird, ein realer Wert (wie z. B. eine Breite in Pixeln für einen {{CSSxRef("&lt;length&gt;")}}-Wert) auf der vererbten Eigenschaft zugänglich sein, nicht der Prozentwert.

## Syntax

Der `<percentage>`-Datentyp besteht aus einer {{CSSxRef("&lt;number&gt;")}} gefolgt vom Prozentzeichen (`%`). Optional kann diesem ein einzelnes `+` oder `-` Zeichen vorangestellt sein, obwohl negative Werte nicht für alle Eigenschaften gültig sind. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen dem Symbol und der Zahl.

## Interpolation

Wenn Werte des `<percentage>`-Datentyps animiert werden, werden sie als reale Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Width und margin-left

```html
<div style="background-color:navy;">
  <div style="width:50%; margin-left:20%; background-color:chartreuse;">
    Width: 50%, Left margin: 20%
  </div>
  <div style="width:30%; margin-left:60%; background-color:pink;">
    Width: 30%, Left margin: 60%
  </div>
</div>
```

Das obige HTML ergibt:

{{EmbedLiveSample('Width_and_margin-left', '600', 140)}}

### Font-size

```html
<div style="font-size:18px;">
  <p>Full-size text (18px)</p>
  <p><span style="font-size:50%;">50% (9px)</span></p>
  <p><span style="font-size:200%;">200% (36px)</span></p>
</div>
```

Das obige HTML ergibt:

{{EmbedLiveSample('Font-size', 'auto', 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;length-percentage&gt;")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
