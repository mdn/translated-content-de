---
title: <percentage>
slug: Web/CSS/percentage
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<percentage>`** [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Prozentwert. Er wird häufig verwendet, um eine Größe relativ zum übergeordneten Element eines Elements zu definieren. Zahlreiche Eigenschaften können Prozentsätze verwenden, wie zum Beispiel {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}} und {{CSSxRef("font-size")}}.

> [!NOTE]
> Es können nur berechnete Werte vererbt werden. Selbst wenn auf der übergeordneten Eigenschaft ein Prozentwert verwendet wird, ist auf der geerbten Eigenschaft ein realer Wert (wie eine Breite in Pixeln für einen {{CSSxRef("&lt;length&gt;")}}-Wert) zugänglich, nicht der Prozentwert.

## Syntax

Der `<percentage>`-Datentyp besteht aus einem {{CSSxRef("&lt;number&gt;")}}, gefolgt vom Prozentzeichen (`%`). Optional kann er durch ein einzelnes `+`- oder `-`-Zeichen vorangestellt werden, obwohl negative Werte nicht für alle Eigenschaften gültig sind. Wie bei allen CSS-Maßen gibt es keinen Zwischenraum zwischen dem Symbol und der Zahl.

## Interpolation

Bei Animationen werden Werte des `<percentage>`-Datentyps als reale Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verknüpfte [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

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

Das obige HTML gibt folgendes aus:

{{EmbedLiveSample('Width_and_margin-left', '600', 140)}}

### Font-size

```html
<div style="font-size:18px;">
  <p>Full-size text (18px)</p>
  <p><span style="font-size:50%;">50% (9px)</span></p>
  <p><span style="font-size:200%;">200% (36px)</span></p>
</div>
```

Das obige HTML gibt folgendes aus:

{{EmbedLiveSample('Font-size', 'auto', 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;length-percentage&gt;")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
