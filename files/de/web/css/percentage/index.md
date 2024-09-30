---
title: <prozentual>
slug: Web/CSS/percentage
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **`<percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen prozentualen Wert. Er wird oft verwendet, um eine Größe relativ zu einem übergeordneten Element eines Objekts zu definieren. Zahlreiche Eigenschaften können Prozentsätze verwenden, wie zum Beispiel {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}} und {{CSSxRef("font-size")}}.

> [!NOTE]
> Nur berechnete Werte können vererbt werden. Daher wird, selbst wenn ein prozentualer Wert für die übergeordnete Eigenschaft verwendet wird, ein reeller Wert (wie eine Breite in Pixeln für einen {{CSSxRef("&lt;length&gt;")}}-Wert) auf der vererbten Eigenschaft zugänglich sein, nicht der prozentuale Wert.

## Syntax

Der `<percentage>`-Datentyp besteht aus einem {{CSSxRef("&lt;number&gt;")}}, gefolgt vom Prozentzeichen (`%`). Optional kann ihm ein einzelnes `+` oder `-` Zeichen vorangestellt werden, obwohl negative Werte nicht für alle Eigenschaften gültig sind. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen dem Symbol und der Zahl.

## Interpolation

Bei Animationen werden die Werte des `<percentage>`-Datentyps als reale, Gleitkommazahlen [interpoliert](/de/docs/Glossary/interpolation). Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Breite und margin-left

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

Das obige HTML führt zu folgender Ausgabe:

{{EmbedLiveSample('Width_and_margin-left', '600', 140)}}

### Font-size

```html
<div style="font-size:18px;">
  <p>Full-size text (18px)</p>
  <p><span style="font-size:50%;">50% (9px)</span></p>
  <p><span style="font-size:200%;">200% (36px)</span></p>
</div>
```

Das obige HTML führt zu folgender Ausgabe:

{{EmbedLiveSample('Font-size', 'auto', 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;length-percentage&gt;")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
