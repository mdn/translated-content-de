---
title: SVG-Schriften
slug: Web/SVG/Tutorial/SVG_fonts
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

Als SVG spezifiziert wurde, war die Unterstützung für Web-Schriften in Browsern nicht weit verbreitet. Da der Zugriff auf die korrekte Schriftartdatei jedoch entscheidend für die korrekte Darstellung von Texten ist, wurde SVG eine Schriftbeschreibungstechnologie hinzugefügt, um diese Möglichkeit bereitzustellen. Sie war nicht für die Kompatibilität mit anderen Formaten wie [PostScript](https://www.adobe.com/products/postscript.html) oder [OTF](https://fonts.google.com/knowledge/glossary/open_type) gedacht, sondern vielmehr als einfaches Mittel, um Glypheninformationen beim Rendern in SVG einzubetten.

> [!NOTE]
> SVG-Schriften werden derzeit nur in Safari und dem Android-Browser unterstützt.
>
> Die Funktionalität wurde [aus Chrome 38 entfernt](https://chromestatus.com/feature/5930075908210688) (und Opera 25) und Firefox [hat seine Implementierung auf unbestimmte Zeit verschoben](https://bugzil.la/119490), um sich auf [WOFF](/de/docs/Web/CSS/CSS_fonts/WOFF) zu konzentrieren. Andere Tools wie Batik und Teile von Inkscape unterstützen jedoch das Einbetten von SVG-Schriften.

Die Basis zur Definition einer SVG-Schrift ist das {{ SVGElement("font") }}-Element.

## Eine Schrift definieren

Es gibt einige Elemente, die erforderlich sind, um eine Schriftart in SVG einzubetten. Lassen Sie uns ein Beispiel für eine Deklaration zeigen (das [aus der Spezifikation](https://www.w3.org/TR/SVG/fonts.html#FontElement)) und die Details erklären.

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

Wir beginnen mit dem {{ SVGElement("font") }}-Element. Dieses trägt ein `id`-Attribut, damit es über eine URI referenziert werden kann (siehe unten). Das `horiz-adv-x`-Attribut bestimmt, wie breit ein Zeichen im Vergleich zu den Pfaddefinitionen der einzelnen Glyphen im Durchschnitt ist. Der Wert `1000` setzt einen vernünftigen Wert zum Arbeiten. Es gibt mehrere begleitende Attribute, die helfen, das grundlegende Glyphen-Box-Layout weiter zu definieren.

Das {{ SVGElement("font-face") }}-Element ist das SVG-Äquivalent zur CSS-Deklaration [`@font-face`](/de/docs/Web/CSS/@font-face). Es definiert grundlegende Eigenschaften der finalen Schriftart wie Gewicht, Stil etc. Im obigen Beispiel wird zuerst und am wichtigsten `font-family` definiert, dessen Wert dann in den `font-family`-Eigenschaften in CSS und SVG referenziert werden kann. Die Attribute `font-weight` und `font-style` haben denselben Zweck wie die entsprechenden Deskriptoren in CSS. Alle folgenden Attribute sind Anweisungen für das Rendering im Schriftarten-Layout des Engines; beispielsweise, wie viel von der Gesamthöhe der Glyphen [Aufsteiger](<https://en.wikipedia.org/wiki/Ascender_(typography)>) sind.

Sein Kind, das {{ SVGElement("font-face-src") }}-Element, entspricht dem `src`-Deskriptor von CSS in `@font-face`-Deklarationen. Sie können auf externe Quellen für Schriftartdeklarationen verweisen, indem Sie seine Kinder {{ SVGElement("font-face-name") }} und {{ SVGElement("font-face-uri") }} verwenden. Das obige Beispiel gibt an, dass der Renderer eine lokale Schriftart namens "Super Sans Bold" verwenden sollte, wenn diese verfügbar ist.

Auf das {{ SVGElement("font-face-src") }}-Element folgt ein {{ SVGElement("missing-glyph") }}-Element. Dies definiert, was angezeigt werden soll, wenn eine bestimmte Glyphe in der Schriftart nicht gefunden wird und es keine Fallback-Mechanismen gibt. Es zeigt auch, wie Glyphen erstellt werden: Indem man jegliche grafischen SVG-Inhalte hinzufügt. Sie können hier buchstäblich jede andere SVG-Elemente verwenden, sogar {{ SVGElement("filter") }}, {{ SVGElement("a") }} oder {{ SVGElement("script") }}. Für einfache Glyphen können Sie jedoch ein `d`-Attribut hinzufügen — dies definiert eine Form für die Glyphe genau wie es bei standardmäßigen SVG-Pfaden der Fall ist.

Die eigentlichen Glyphen werden dann von {{ SVGElement("glyph") }}-Elementen definiert. Das wichtigste Attribut ist `unicode`. Es definiert den Unicode-Codepunkt, der durch diese Glyphe dargestellt wird. Wenn Sie auch das [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut auf einer Glyphe angeben, können Sie es weiter auf bestimmte Sprachen (dargestellt durch `xml:lang` auf dem Ziel) exklusiv beschränken. Auch hier können Sie beliebige SVGs verwenden, um die Glyphe zu definieren, was in unterstützenden Benutzeragenten zu großartigen Effekten führt.

Zwei weitere Elemente können innerhalb von `font` definiert werden: {{ SVGElement("hkern") }} und {{ SVGElement("vkern") }}. Jedes trägt Referenzen zu mindestens zwei Zeichen (Attribute `u1` und `u2`) und ein `k`-Attribut, das bestimmt, wie weit der Abstand zwischen diesen Zeichen verringert werden soll. Das untenstehende Beispiel weist Benutzeragenten an, die Zeichen "A" und "V" näher zusammen zu platzieren als der Standardabstand zwischen Zeichen.

```html
<hkern u1="A" u2="V" k="20" />
```

## Eine Schrift referenzieren

Wenn Sie Ihre Schriftdeklaration wie oben beschrieben zusammengestellt haben, können Sie einfach ein `font-family`-Attribut verwenden, um die Schrift tatsächlich auf einen SVG-Text anzuwenden:

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- and so on -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

Sie sind jedoch frei, mehrere Methoden zu kombinieren, um große Freiheit zu haben, wie und wo die Schrift definiert wird.

### Option: Verwendung von CSS @font-face

Sie können `@font-face` verwenden, um auf entfernte (und weniger entfernte) Schriftarten zu verweisen:

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

### Option: eine externe Schriftart referenzieren

Das oben erwähnte `font-face-uri`-Element erlaubt es Ihnen, eine externe Schriftart zu referenzieren, was eine größere Wiederverwendbarkeit ermöglicht:

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
