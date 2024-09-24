---
title: SVG-Schriften
slug: Web/SVG/Tutorial/SVG_fonts
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

Als SVG spezifiziert wurde, war die Unterstützung für Webfonts in Browsern nicht weit verbreitet. Da der Zugriff auf die richtige Schriftdatei jedoch entscheidend für die korrekte Darstellung von Text ist, wurde SVG eine Schriftbeschreibungstechnologie hinzugefügt, um diese Fähigkeit bereitzustellen. Sie war nicht für die Kompatibilität mit anderen Formaten wie [PostScript](https://www.adobe.com/products/postscript.html) oder [OTF](https://fonts.google.com/knowledge/glossary/open_type) gedacht, sondern vielmehr als einfaches Mittel zur Einbettung von Glypheninformationen in SVG beim Rendern.

> [!NOTE]
> SVG-Schriften werden derzeit nur in Safari und Android Browser unterstützt.
>
> Die Funktionalität wurde [ab Chrome 38 entfernt](https://chromestatus.com/feature/5930075908210688) (und Opera 25), und Firefox hat [die Implementierung auf unbestimmte Zeit verschoben](https://bugzil.la/119490), um sich auf [WOFF](/de/docs/Web/CSS/CSS_fonts/WOFF) zu konzentrieren. Andere Tools wie Batik und Teile von Inkscape unterstützen jedoch das Einbetten von SVG-Schriften.

Die Basis zur Definition einer SVG-Schrift ist das {{ SVGElement("font") }}-Element.

## Definieren einer Schriftart

Es gibt einige Zutaten, die erforderlich sind, um eine Schriftart in SVG einzubetten. Lassen Sie uns eine Beispiel-Deklaration zeigen (die [aus der Spezifikation](https://www.w3.org/TR/SVG/fonts.html#FontElement)), und die Details erklären.

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
  <!-- Umriss des Ausrufezeichenglyphen -->
  <glyph unicode="!" horiz-adv-x="300"></glyph>
  <glyph unicode="@"><!-- Umriss des @ Glyphen --></glyph>
  <!-- weitere Glyphen -->
</font>
```

Wir beginnen mit dem {{ SVGElement("font") }}-Element. Dieses trägt ein `id`-Attribut, damit es über eine URI referenziert werden kann (siehe unten). Das `horiz-adv-x`-Attribut bestimmt, wie breit ein Zeichen im Durchschnitt im Vergleich zu den Pfaddefinitionen der einzelnen Glyphen ist. Der Wert `1000` legt einen angemessenen Arbeitswert fest. Es gibt mehrere begleitende Attribute, die dazu beitragen, das grundlegende Glyphen-Box-Layout weiter zu definieren.

Das {{ SVGElement("font-face") }}-Element ist das SVG-Äquivalent zur CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Deklaration. Es definiert grundlegende Eigenschaften der endgültigen Schriftart wie Gewicht, Stil usw. Im obigen Beispiel ist die erste und wichtigste zu definierende Eigenschaft `font-family`, deren Wert dann in CSS- und SVG-`font-family`-Eigenschaften referenziert werden kann. Die Attribute `font-weight` und `font-style` haben denselben Zweck wie die entsprechenden Deskriptoren in CSS. Alle folgenden Attribute sind Rendering-Anweisungen für die Schrift-Layout-Engine; zum Beispiel, wie viel von der gesamten Höhe der Glyphen [Oberlängen](<https://de.wikipedia.org/wiki/Oberl%C3%A4nge_(Typografie)>) sind.

Sein Kind, das {{ SVGElement("font-face-src") }}-Element, entspricht dem CSS-`src`-Deskriptor in `@font-face`-Deklarationen. Sie können mit seinen Kindern {{ SVGElement("font-face-name") }} und {{ SVGElement("font-face-uri") }} auf externe Quellen für Schriftdeklarationen verweisen. Das obige Beispiel gibt an, dass, wenn der Renderer eine lokale Schriftart mit dem Namen "Super Sans Bold" verfügbar hat, diese verwendet werden sollte.

Dem {{ SVGElement("font-face-src") }} folgt ein {{ SVGElement("missing-glyph") }}-Element. Dieses definiert, was angezeigt werden soll, wenn ein bestimmtes Glyphe nicht in der Schrift vorhanden ist und keine Fallback-Mechanismen verfügbar sind. Es zeigt auch, wie Glyphen erstellt werden: Indem beliebiger grafischer SVG-Inhalt hinzugefügt wird. Sie können hier buchstäblich alle anderen SVG-Elemente verwenden, sogar {{ SVGElement("filter") }}, {{ SVGElement("a") }} oder {{ SVGElement("script") }}. Für einfache Glyphen können Sie jedoch ein `d`-Attribut hinzufügen — dies definiert eine Form für die Glyphe genau so, wie es mit Standard-SVG-Pfaden funktioniert.

Die tatsächlichen Glyphen werden dann durch {{ SVGElement("glyph") }}-Elemente definiert. Das wichtigste Attribut ist `unicode`. Es definiert den Unicode-Codepunkt, der durch diese Glyphe dargestellt wird. Wenn Sie auch das [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut auf einer Glyphe angeben, können Sie es weiter auf bestimmte Sprachen (dargestellt durch `xml:lang` am Ziel) beschränken. Auch hier können Sie beliebiges SVG verwenden, um die Glyphe zu definieren, was zu großartigen Effekten bei der Unterstützung von Benutzeragenten führen kann.

Zwei weitere Elemente können innerhalb von `font` definiert werden: {{ SVGElement("hkern") }} und {{ SVGElement("vkern") }}. Jedes enthält Referenzen zu mindestens zwei Zeichen (Attribute `u1` und `u2`) und ein Attribut `k`, das bestimmt, um wie viel der Abstand zwischen diesen Zeichen verringert werden soll. Das folgende Beispiel weist Benutzeragenten an, die Zeichen "A" und "V" näher zusammen als den Standardabstand zwischen Zeichen zu platzieren.

```html
<hkern u1="A" u2="V" k="20" />
```

## Eine Schriftart referenzieren

Wenn Sie Ihre Schrifterklärung wie oben beschrieben zusammengestellt haben, können Sie einfach ein `font-family`-Attribut verwenden, um die Schrift tatsächlich auf einen SVG-Text anzuwenden:

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- und so weiter -->
</font>

<text font-family="Super Sans">Mein Text verwendet Super Sans</text>
```

Sie sind jedoch frei, mehrere Methoden zu kombinieren, um große Freiheit bezüglich der Definition und des Ortes der Schrift zu erzielen.

### Option: Verwenden Sie CSS @font-face

Sie können `@font-face` verwenden, um auf entfernte (und nicht so entfernte) Schriften zu verweisen:

```html
<font id="Super_Sans">
  <!-- und so weiter -->
</font>

<style>
  @font-face {
    font-family: "Super Sans";
    src: url(#Super_Sans);
  }
</style>

<text font-family="Super Sans">Mein Text verwendet Super Sans</text>
```

### Option: Eine entfernte Schriftart referenzieren

Das oben erwähnte `font-face-uri`-Element ermöglicht es Ihnen, auf eine externe Schriftart zu verweisen; dies ermöglicht eine größere Wiederverwendbarkeit:

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
