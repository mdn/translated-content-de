---
title: SVG-Schriftarten
slug: Web/SVG/Tutorial/SVG_fonts
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

Als SVG spezifiziert wurde, war die Unterstützung für Web-Schriftarten in Browsern noch nicht weit verbreitet. Da der Zugriff auf die korrekte Schriftartdatei entscheidend für die korrekte Darstellung von Text ist, wurde SVG eine Technologie zur Schriftartenbeschreibung hinzugefügt, um diese Möglichkeit zu bieten. Sie wurde implementiert, um die einbettbare Zeicheninformationsübermittlung in SVG während des Renderings zu ermöglichen.

Die Grundlage zur Definition einer SVG-Schriftart ist das {{ SVGElement("font") }}-Element.

## Eine Schriftart definieren

Es gibt einige notwendige Zutaten, um eine Schriftart in SVG einzubetten. Lassen Sie uns ein Beispiel zur Deklaration zeigen (das [aus der Spezifikation](https://www.w3.org/TR/SVG/fonts.html#FontElement)), und die Details erklären.

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

Wir beginnen mit dem {{ SVGElement("font") }}-Element. Dieses trägt ein `id`-Attribut, um es über eine URI referenziert zu machen (siehe unten). Das `horiz-adv-x`-Attribut bestimmt, wie breit ein Zeichen durchschnittlich im Vergleich zu den Pfaddefinitionen der einzelnen Glyphen ist. Der Wert `1000` setzt einen vernünftigen Wert als Arbeitsgrundlage. Es gibt mehrere begleitende Attribute, die helfen, das grundlegende Glyphen-Box-Layout weiter zu definieren.

Das {{ SVGElement("font-face") }}-Element ist das SVG-Äquivalent zur CSS-Definition [`@font-face`](/de/docs/Web/CSS/@font-face). Es definiert grundlegende Eigenschaften der endgültigen Schriftart wie Gewicht, Stil etc. Im obigen Beispiel ist das erste und wichtigste zu definierende Attribut `font-family`, dessen Wert dann in den CSS- und SVG-Eigenschaften `font-family` referenziert werden kann. Die Attribute `font-weight` und `font-style` haben denselben Zweck wie die entsprechenden Deskriptoren in CSS. Alle folgenden Attribute sind Rendering-Anweisungen für die Schriftarten-Layout-Engine; beispielsweise, wie viel der Gesamthöhe der Glyphen [ascenders](<https://en.wikipedia.org/wiki/Ascender_(typography)>) sind.

Als Kind-Element entspricht das {{ SVGElement("font-face-src") }} dem `src`-Deskriptor von CSS in `@font-face`-Deklarationen. Sie können auf externe Quellen für Schriftarten-Deklarationen mittels der Kindelemente {{ SVGElement("font-face-name") }} und {{ SVGElement("font-face-uri") }} verweisen. Das obige Beispiel gibt an, dass, wenn der Renderer eine lokale Schriftart mit dem Namen "Super Sans Bold" verfügbar hat, diese verwendet werden soll.

Dem {{ SVGElement("font-face-src") }}-Element folgt ein {{ SVGElement("missing-glyph") }}-Element. Dies definiert, was angezeigt werden soll, wenn eine bestimmte Glyphe in der Schriftart nicht gefunden wird und keine Fallback-Mechanismen verfügbar sind. Es zeigt auch, wie Glyphen erstellt werden: Durch das Hinzufügen jedes beliebigen grafischen SVG-Inhalts im Inneren. Sie können hier buchstäblich jede andere SVG-Elemente verwenden, sogar {{ SVGElement("filter") }}, {{ SVGElement("a") }} oder {{ SVGElement("script") }}. Für grundlegende Glyphen können Sie jedoch ein `d`-Attribut hinzufügen — dies definiert eine Form für die Glyphe genau wie bei standardmäßigen SVG-Pfaden.

Die tatsächlichen Glyphen werden dann durch {{ SVGElement("glyph") }}-Elemente definiert. Das wichtigste Attribut ist `unicode`. Es definiert den Unicode-Codepunkt, der durch diese Glyphe dargestellt wird. Wenn Sie auch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut auf einer Glyphe angeben, können Sie es weiter auf bestimmte Sprachen einschränken (dargestellt durch `xml:lang` am Ziel). Auch hier können Sie beliebiges SVG verwenden, um die Glyphe zu definieren, was im unterstützenden Benutzeragenten für großartige Effekte sorgt.

Zwei weitere Elemente können innerhalb von `font` definiert werden: {{ SVGElement("hkern") }} und {{ SVGElement("vkern") }}. Jedes trägt Referenzen zu mindestens zwei Zeichen (Attribute `u1` und `u2`) und ein Attribut `k`, das bestimmt, wie viel der Abstand zwischen diesen Zeichen verringert werden soll. Das untenstehende Beispiel weist Benutzeragenten an, die Zeichen "A" und "V" näher zusammen zu platzieren als den Standardabstand zwischen Zeichen.

```html
<hkern u1="A" u2="V" k="20" />
```

## Eine Schriftart referenzieren

Wenn Sie Ihre Schriftartdeklaration wie oben beschrieben zusammengestellt haben, können Sie einfach das `font-family`-Attribut verwenden, um die Schriftart tatsächlich auf einen SVG-Text anzuwenden:

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- and so on -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

Sie sind jedoch frei, mehrere Methoden zu kombinieren, um große Freiheit bei der Definition und dem Standort der Schriftart zu haben.

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

### Option: eine entfernte Schriftart referenzieren

Das oben erwähnte `font-face-uri`-Element ermöglicht es Ihnen, eine externe Schriftart zu referenzieren; was somit eine größere Wiederverwendbarkeit erlaubt:

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
