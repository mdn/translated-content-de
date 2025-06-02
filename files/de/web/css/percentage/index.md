---
title: <percentage>
slug: Web/CSS/percentage
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{CSSRef}}

Der **`<percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Prozentwert. Er wird häufig verwendet, um eine Größe relativ zum übergeordneten Objekt eines Elements zu definieren. Zahlreiche Eigenschaften können Prozentsätze verwenden, wie {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}} und {{CSSxRef("font-size")}}.

> [!NOTE]
> Nur berechnete Werte können vererbt werden. Auch wenn ein Prozentwert bei der übergeordneten Eigenschaft verwendet wird, ist ein tatsächlicher Wert (wie eine Breite in Pixeln für einen {{CSSxRef("&lt;length&gt;")}}-Wert) bei der vererbten Eigenschaft zugänglich, nicht der Prozentwert.

## Syntax

Der `<percentage>`-Datentyp besteht aus einem {{CSSxRef("&lt;number&gt;")}}, gefolgt vom Prozentzeichen (`%`). Optional kann er von einem einzelnen `+`- oder `-`-Zeichen vorangestellt werden, obwohl negative Werte nicht für alle Eigenschaften gültig sind. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen dem Symbol und der Zahl.

## Interpolation

Bei Animationen werden Werte des `<percentage>`-Datentyps als reale Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Breite und margin-left

```html
<div class="container">
  <div class="box1">Width: 50%, Left margin: 20%</div>
  <div class="box2">Width: 30%, Left margin: 60%</div>
</div>
```

```css
.container {
  background-color: navy;
}

.box1 {
  width: 50%;
  margin-left: 20%;
  background-color: chartreuse;
}

.box2 {
  width: 30%;
  margin-left: 60%;
  background-color: pink;
}
```

{{EmbedLiveSample('Width_and_margin-left', '600', 140)}}

### Schriftgröße

```html
<div class="container">
  <p>Full-size text (18px)</p>
  <p><span class="half">50% (9px)</span></p>
  <p><span class="double">200% (36px)</span></p>
</div>
```

```css
.container {
  font-size: 18px;
}

.half {
  font-size: 50%;
}

.double {
  font-size: 200%;
}
```

{{EmbedLiveSample('Font-size', 'auto', 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;length-percentage&gt;")}}
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
