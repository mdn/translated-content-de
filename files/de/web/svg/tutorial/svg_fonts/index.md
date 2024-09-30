---
title: SVG-Schriftarten
slug: Web/SVG/Tutorial/SVG_fonts
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

Als SVG spezifiziert wurde, war die Unterstützung für Webfonts in Browsern nicht weit verbreitet. Da der Zugriff auf die richtige Schriftdatei jedoch entscheidend für die korrekte Darstellung von Text ist, wurde SVG eine Schriftbeschreibungstechnologie hinzugefügt, um diese Fähigkeit bereitzustellen. Sie war nicht für die Kompatibilität mit anderen Formaten wie [PostScript](https://www.adobe.com/products/postscript.html) oder [OTF](https://fonts.google.com/knowledge/glossary/open_type) gedacht, sondern eher als ein einfaches Mittel, um Glypheninformationen in SVG beim Rendern einzubetten.

> [!NOTE]
> SVG-Schriftarten werden derzeit nur in Safari und Android Browser unterstützt.
>
> Die Funktionalität wurde [aus Chrome 38 entfernt](https://chromestatus.com/feature/5930075908210688) (und Opera 25) und Firefox hat ihre Umsetzung [auf unbestimmte Zeit verschoben](https://bugzil.la/119490), um sich auf [WOFF](/de/docs/Web/CSS/CSS_fonts/WOFF) zu konzentrieren. Andere Werkzeuge wie Batik und Teile von Inkscape unterstützen jedoch das Einbetten von SVG-Schriftarten.

Die Grundlage für die Definition einer SVG-Schriftart ist das {{ SVGElement("font") }}-Element.

## Eine Schriftart definieren

Es gibt einige Elemente, die für das Einbetten einer Schriftart in SVG erforderlich sind. Lassen Sie uns ein Beispieldeklaration (die [aus der Spezifikation](https://www.w3.org/TR/SVG/fonts.html#FontElement)) zeigen und die Details erklären.

```html
<font id="Font1" horiz-adv-x="1000">
  <font-face
    font-family="Super Sans"
    font-weight="bold"
    font-style="normal"
    units-per-em="1000"
    cap-height="600"
    x-height="400"
    ascent="700"
    descent="300"
    alphabetic="0"
    mathematical="350"
    ideographic="400"
    hanging="500">
    <font-face-src>
      <font-face-name name="Super Sans Bold" />
    </font-face-src>
  </font-face>
  <missing-glyph><path d="M0,0h200v200h-200z" /></missing-glyph>
  <!-- Outline of exclamation point glyph -->
  <glyph unicode="!" horiz-adv-x="300"></glyph>
  <glyph unicode="@"><!-- Outline of @ glyph --></glyph>
  <!-- more glyphs -->
</font>
```

Wir beginnen mit dem {{ SVGElement("font") }}-Element. Dieses trägt ein `id`-Attribut, damit es über eine URI referenziert werden kann (siehe unten). Das `horiz-adv-x`-Attribut bestimmt, wie breit ein Zeichen im Vergleich zu den Pfaddefinitionen der einzelnen Glyphen im Durchschnitt ist. Der Wert `1000` setzt einen vernünftigen Arbeitswert. Es gibt mehrere begleitende Attribute, die helfen, das grundlegende Glyphen-Kasten-Layout weiter zu definieren.

Das {{ SVGElement("font-face") }}-Element ist das SVG-Äquivalent zur CSS-Deklaration [`@font-face`](/de/docs/Web/CSS/@font-face). Es definiert grundlegende Eigenschaften der endgültigen Schriftart wie Gewicht, Stil usw. Im obigen Beispiel ist das erste und wichtigste zu definierende `font-family`, dessen Wert dann in CSS- und SVG-`font-family`-Eigenschaften referenziert werden kann. Die Attribute `font-weight` und `font-style` haben denselben Zweck wie die entsprechenden Deskriptoren in CSS. Alle folgenden Attribute sind Anweisungen für die Schriftlayout-Engine; zum Beispiel, wie viel der Gesamtgröße der Glyphen [Hochschäfte](<https://en.wikipedia.org/wiki/Ascender_(typography)>) sind.

Sein Kind, das {{ SVGElement("font-face-src") }}-Element, entspricht dem `src`-Deskriptor in CSS-`@font-face`-Deklarationen. Sie können mit seinen Kindern {{ SVGElement("font-face-name") }} und {{ SVGElement("font-face-uri") }} auf externe Quellen für Schriftdeklarationen verweisen. Das obige Beispiel gibt an, dass, wenn der Renderer eine lokale Schriftart namens "Super Sans Bold" verfügbar hat, diese stattdessen verwendet werden sollte.

Auf {{ SVGElement("font-face-src") }} folgt ein {{ SVGElement("missing-glyph") }}-Element. Dies definiert, was angezeigt werden soll, wenn eine bestimmte Glyphe in der Schriftart nicht gefunden wird und es keine Ausweichmechanismen gibt. Es zeigt auch, wie Glyphen erstellt werden: durch Hinzufügen von beliebigem grafischen SVG-Inhalt im Inneren. Sie können buchstäblich alle anderen SVG-Elemente hier verwenden, sogar {{ SVGElement("filter") }}, {{ SVGElement("a") }} oder {{ SVGElement("script") }}. Für einfache Glyphen können Sie jedoch ein `d`-Attribut hinzufügen – dies definiert eine Form für die Glyphe genau wie bei Standard-SVG-Pfaden.

Die tatsächlichen Glyphen werden dann durch {{ SVGElement("glyph") }}-Elemente definiert. Das wichtigste Attribut ist `unicode`. Es definiert den Unicode-Codepunkt, der durch diese Glyphe dargestellt wird. Wenn Sie auch das [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut auf eine Glyphe angeben, können Sie es weiter auf bestimmte Sprachen beschränken (dargestellt durch `xml:lang` am Ziel). Wiederum können Sie beliebiges SVG zur Definition der Glyphe verwenden, was großartige Effekte in unterstützenden Benutzeragenten ermöglicht.

Zwei weitere Elemente können innerhalb `font` definiert werden: {{ SVGElement("hkern") }} und {{ SVGElement("vkern") }}. Jedes trägt Referenzen zu mindestens zwei Zeichen (Attribute `u1` und `u2`) und ein Attribut `k`, das bestimmt, um wie viel der Abstand zwischen diesen Zeichen verringert werden soll. Das folgende Beispiel weist Benutzeragenten an, die Zeichen "A" und "V" näher zusammen zu setzen als der Standardabstand zwischen Zeichen.

```html
<hkern u1="A" u2="V" k="20" />
```

## Eine Schriftart referenzieren

Wenn Sie Ihre Schriftdeklaration wie oben beschrieben zusammengestellt haben, können Sie einfach ein `font-family`-Attribut verwenden, um die Schrift tatsächlich auf einen SVG-Text anzuwenden:

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- and so on -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

Sie sind jedoch frei, mehrere Methoden zu kombinieren, um große Freiheit zu haben, wie und wo die Schriftart definiert wird.

### Option: Verwenden Sie CSS @font-face

Sie können `@font-face` verwenden, um entfernte (und nicht so entfernte) Schriftarten zu referenzieren:

```html
<font id="Super_Sans">
  <!-- and so on -->
</font>

<style>
  @font-face {
    font-family: "Super Sans";
    src: url(#Super_Sans);
  }
</style>

<text font-family="Super Sans">My text uses Super Sans</text>
```

### Option: Eine entfernte Schriftart referenzieren

Das oben erwähnte `font-face-uri`-Element ermöglicht das Referenzieren einer externen Schriftart; somit wird eine größere Wiederverwendbarkeit ermöglicht:

```html
<font>
  <font-face font-family="Super Sans">
    <font-face-src>
      <font-face-uri href="fonts.svg#Super_Sans" />
    </font-face-src>
  </font-face>
</font>
```

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
