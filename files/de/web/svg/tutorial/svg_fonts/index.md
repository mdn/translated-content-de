---
title: SVG fonts
slug: Web/SVG/Tutorial/SVG_fonts
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

Als SVG spezifiziert wurde, war die Unterstützung für Webfonts in Browsern nicht weit verbreitet. Da jedoch der Zugriff auf die richtige Schriftartdatei entscheidend für die korrekte Darstellung von Text ist, wurde eine Schriftbeschreibungs-technologie zu SVG hinzugefügt, um diese Fähigkeit bereitzustellen. Sie war nicht für die Kompatibilität mit anderen Formaten wie [PostScript](https://www.adobe.com/products/postscript.html) oder [OTF](https://fonts.google.com/knowledge/glossary/open_type) gedacht, sondern vielmehr als einfache Möglichkeit, Glyphinformationen in SVG zu integrieren, wenn es gerendert wird.

> [!NOTE]
> SVG-Schriften werden derzeit nur in Safari und Android-Browser unterstützt.
>
> Die Funktionalität wurde [aus Chrome 38 entfernt](https://chromestatus.com/feature/5930075908210688) (und Opera 25), und Firefox [hat ihre Implementierung auf unbestimmte Zeit verschoben](https://bugzil.la/119490), um sich auf [WOFF](/de/docs/Web/CSS/CSS_fonts/WOFF) zu konzentrieren. Andere Tools wie Batik und Teile von Inkscape unterstützen jedoch die SVG-Schrifteinbettung.

Die Basis zur Definition einer SVG-Schriftart ist das {{ SVGElement("font") }}-Element.

## Definieren einer Schriftart

Es gibt einige Komponenten, die für das Einbetten einer Schriftart in SVG benötigt werden. Lassen Sie uns ein Beispiel einer Deklaration zeigen (das [aus der Spezifikation](https://www.w3.org/TR/SVG/fonts.html#FontElement)), und die Details erklären.

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

Wir beginnen mit dem {{ SVGElement("font") }}-Element. Es trägt ein `id`-Attribut, um es über eine URI referenzieren zu können (siehe unten). Das Attribut `horiz-adv-x` bestimmt, wie breit ein Zeichen im Durchschnitt im Vergleich zu den Pfaddefinitionen der einzelnen Glyphen ist. Der Wert `1000` setzt einen vernünftigen Arbeitswert. Es gibt mehrere begleitende Attribute, die helfen, das grundlegende Glyphenrahmen-Layout weiter zu definieren.

Das {{ SVGElement("font-face") }}-Element ist das SVG-Äquivalent zur CSS-Deklaration [`@font-face`](/de/docs/Web/CSS/@font-face). Es definiert Grundeigenschaften der endgültigen Schriftart wie Gewicht, Stil usw. Im obigen Beispiel ist das erste und wichtigste zu definierende Attribut `font-family`, dessen Wert dann in CSS- und SVG-`font-family`-Eigenschaften referenziert werden kann. Die Attribute `font-weight` und `font-style` haben denselben Zweck wie die entsprechenden Deskriptoren in CSS. Alle folgenden Attribute sind Anweisungen für den Schriftart-Layout-Engine; zum Beispiel, wie viel der gesamten Höhensumme der Glyphen [Ascender](https://de.wikipedia.org/wiki/Schriftlinie#Versalienlinie) sind.

Dessen Kind, das {{ SVGElement("font-face-src") }}-Element, entspricht dem `src`-Deskriptor in den CSS-`@font-face`-Deklarationen. Sie können auf externe Quellen für Schriftdeklarationen mittels seiner Kinder {{ SVGElement("font-face-name") }} und {{ SVGElement("font-face-uri") }} verweisen. Das obige Beispiel gibt an, dass der Renderer, wenn er eine lokale Schriftart namens "Super Sans Bold" verfügbar hat, diese verwenden sollte.

Dem {{ SVGElement("font-face-src") }} folgt ein {{ SVGElement("missing-glyph") }}-Element. Dies definiert, was angezeigt werden soll, wenn ein bestimmtes Glyph nicht in der Schrift vorhanden ist und es keine Ersatzmechanismen gibt. Es zeigt auch, wie Glyphen erstellt werden: durch Hinzufügen jeglicher grafischer SVG-Inhalte. Sie können buchstäblich alle anderen SVG-Elemente verwenden, sogar {{ SVGElement("filter") }}, {{ SVGElement("a") }} oder {{ SVGElement("script") }}. Für einfache Glyphen können Sie jedoch ein `d`-Attribut hinzufügen — dieses definiert eine Form für das Glyph, genau wie standardmäßige SVG-Pfade funktionieren.

Die tatsächlichen Glyphen werden dann durch {{ SVGElement("glyph") }}-Elemente definiert. Das wichtigste Attribut ist `unicode`. Es definiert den Unicode-Codepunkt, der durch dieses Glyph dargestellt wird. Wenn Sie auch das Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang) für ein Glyph festlegen, können Sie es weiter auf bestimmte Sprachen (vertreten durch `xml:lang` auf dem Ziel) beschränken. Wiederum können Sie beliebige SVGs verwenden, um das Glyph zu definieren, was in unterstützenden Benutzeragenten beeindruckende Effekte ermöglicht.

Zwei weitere Elemente können innerhalb von `font` definiert werden: {{ SVGElement("hkern") }} und {{ SVGElement("vkern") }}. Jedes trägt Referenzen zu mindestens zwei Zeichen (Attribute `u1` und `u2`) und ein Attribut `k`, das bestimmt, um wie viel die Distanz zwischen diesen Zeichen verringert werden soll. Das unten stehende Beispiel weist Benutzeragenten an, die Zeichen "A" und "V" näher beieinander zu platzieren als den Standardabstand zwischen Zeichen.

```html
<hkern u1="A" u2="V" k="20" />
```

## Referenzieren einer Schriftart

Wenn Sie Ihre Schriftartendeklaration wie oben beschrieben zusammengestellt haben, können Sie einfach ein `font-family`-Attribut verwenden, um die Schriftart auf einen SVG-Text anzuwenden:

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- and so on -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

Sie sind jedoch frei, mehrere Methoden zu kombinieren, um große Freiheit zu haben, wo und wie Sie die Schriftart definieren.

### Option: Verwenden von CSS @font-face

Sie können `@font-face` verwenden, um auf entfernte (und nicht so entfernte) Schriften zu verweisen:

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

Das oben erwähnte `font-face-uri`-Element ermöglicht es Ihnen, eine externe Schriftart zu referenzieren; daher, eine größere Wiederverwendbarkeit zu ermöglichen:

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
