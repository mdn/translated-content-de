---
title: Effekte mit SVG-Filtern anwenden
short-title: Filters
slug: Web/SVG/Guides/Filters
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

SVG-Filter verarbeiten die Pixel, die ein Element zeichnen würde, bevor sie auf dem Bildschirm erscheinen: Sie können sie weichzeichnen, verschieben, umfärben, zusammensetzen oder völlig neue Bilder erzeugen. Filter lassen sich zu mehrstufigen Verarbeitungsketten verknüpfen und sowohl auf SVG- als auch auf HTML-Inhalte anwenden.

Ein Filter wird mit dem Element {{SVGElement("filter")}} definiert, das selbst nie gerendert wird. Es benötigt eine `id`, damit andere Elemente darauf verweisen können. Es kann an beliebiger Stelle im Dokument stehen, wird aber üblicherweise innerhalb eines {{SVGElement("defs")}}-Elements definiert. SVG-Elemente wenden einen Filter mit dem Attribut {{SVGAttr("filter")}} an. Sowohl SVG- als auch HTML-Elemente können dafür die CSS-Eigenschaft {{cssxref("filter")}} verwenden:

```html
<rect width="100" height="100" filter="url(#blur-me)" />
```

```css
.blurred {
  filter: url("#blur-me");
}
```

## Ein erster Filter

Innerhalb des `<filter>`-Elements führen Sie _Filterprimitiven_ auf: die `fe*`-Elemente, wobei `fe` für „filter effect“ steht. Jede Primitive führt eine Operation aus. Der folgende einfache Filter enthält eine einzige Primitive, {{SVGElement("feGaussianBlur")}}. Deren Attribut {{SVGAttr("stdDeviation")}} bestimmt die Stärke der Weichzeichnung. Von den beiden identischen Kreisen verweist nur der zweite auf den Filter:

```html
<svg
  viewBox="0 0 200 100"
  width="200"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur-me">
      <feGaussianBlur stdDeviation="4" />
    </filter>
  </defs>

  <circle cx="50" cy="50" r="40" fill="steelblue" />
  <circle cx="150" cy="50" r="40" fill="steelblue" filter="url(#blur-me)" />
</svg>
```

{{EmbedLiveSample("A_first_filter", "100%", 130)}}

Der gefilterte Kreis wird gezeichnet, weichgezeichnet und anschließend wieder in die Grafik eingefügt. Ein höherer Wert für `stdDeviation` dehnt die Weichzeichnung weiter aus, bis sie durch den Filterbereich abgeschnitten wird.

## So funktioniert eine Filterverarbeitungskette

Ein Filter mit mehr als einer Primitive bildet eine Verarbeitungskette. Jede Primitive nimmt null oder mehr Bilder als Eingabe entgegen und erzeugt ein Bild als Ausgabe:

- {{SVGAttr("in")}} benennt die Eingabe. {{SVGAttr("in2")}} benennt die zweite Eingabe bei Primitiven, die zwei Bilder kombinieren, etwa {{SVGElement("feBlend")}} und {{SVGElement("feComposite")}}.
- {{SVGAttr("result")}} benennt die Ausgabe, damit eine spätere Primitive darauf verweisen kann. Dieser Name gilt nur innerhalb des `<filter>`-Elements.
- Hat eine Primitive kein `in`, verwendet sie `SourceGraphic`, wenn sie die erste Primitive im Filter ist. Andernfalls verwendet sie das Ergebnis der vorangehenden Primitive. Eine Folge von Primitiven, die alle `in` und `result` auslassen, wird daher in Dokumentreihenfolge ausgeführt: Jede verarbeitet die Ausgabe der vorherigen.

Neben einem früheren `result` akzeptieren `in` und `in2` auch Schlüsselwörter, die Eingaben des Filters selbst bezeichnen. Zwei davon sind in der Praxis besonders wichtig: `SourceGraphic` bezeichnet das Element so, wie es gezeichnet worden wäre, und `SourceAlpha` bezeichnet dasselbe Element, reduziert auf seinen Alphakanal. Diese Silhouette ist der Ausgangspunkt für einen Schatten, denn er benötigt die Form des Elements, nicht aber dessen Farben. Die Referenz zu {{SVGAttr("in")}} führt die übrigen Schlüsselwörter auf. Sie beziehen sich auf die Füllung und Kontur des Elements sowie auf den Hintergrund dahinter.

Einige Primitiven benötigen überhaupt keine Eingabe: {{SVGElement("feFlood")}}, {{SVGElement("feTurbulence")}} und {{SVGElement("feImage")}} erzeugen ein Bild aus ihren eigenen Attributen statt aus einem früheren Ergebnis der Verarbeitungskette. Daher hat `in` für sie keine Bedeutung. Nur mit diesen Primitiven lassen sich Bilder einbringen, die der Filter nicht als Eingabe erhalten hat.

Die Primitiven werden immer in Dokumentreihenfolge angewendet. Auf ein `result` können nur Primitiven verweisen, die danach stehen.

Der folgende Filter zeichnet die Ausgangsgrafik weich, verschiebt die weichgezeichnete Kopie nach rechts und multipliziert diese Kopie mit der ungefilterten Ausgangsgrafik. Außerdem vergrößert er den Filterbereich, damit die verschobene Kopie nicht abgeschnitten wird. Das erklärt der [nächste Abschnitt](#der_filterbereich):

```html
<svg
  viewBox="0 0 140 120"
  width="140"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="echo" x="-20%" y="-20%" width="180%" height="140%">
      <!-- Blur the source graphic, and call the output "blurred" -->
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blurred" />
      <!-- Shift "blurred" to the right, and call the output "shifted" -->
      <feOffset in="blurred" dx="14" result="shifted" />
      <!-- Multiply "shifted" with the source graphic -->
      <feBlend in="shifted" in2="SourceGraphic" mode="multiply" />
    </filter>
  </defs>

  <circle cx="70" cy="60" r="32" fill="steelblue" filter="url(#echo)" />
</svg>
```

{{EmbedLiveSample("How_a_filter_pipeline_works", "100%", 150)}}

Diese Verarbeitungskette ist linear: Jede Primitive nimmt die Ausgabe der vorherigen entgegen. Daher könnten alle Attribute `in` und `result` außer `in2="SourceGraphic"` entfernt werden, ohne das gerenderte Ergebnis zu verändern. Entfernen Sie sie probeweise, um es selbst zu sehen.

Ein `result` ausdrücklich zu benennen ist nur bei einer nichtlinearen Verarbeitungskette erforderlich, wenn eine spätere Primitive eine andere Ausgabe als die unmittelbar vorhergehende benötigt. Das ist meist der Fall, wenn Ergebnisse aus zwei Ketten zusammengeführt werden oder dasselbe Ergebnis in mehreren Ketten verwendet wird. Bei einer linearen Verarbeitungskette können explizite Namen den Code lesbarer machen, durch Tippfehler aber auch Fehler verursachen.

## Der Filterbereich

Ein Filter wird nur innerhalb seines _Filterbereichs_ ausgewertet. Alles, was der Filter außerhalb dieses Bereichs zeichnen würde, wird abgeschnitten. Wenn eine Weichzeichnung oder ein versetzter Schatten an einer scharfen Kante endet, prüfen Sie daher, ob ein größerer Filterbereich hilft.

Der Bereich wird durch die Attribute `x`, `y`, `width` und `height` von `<filter>` festgelegt. Ihre Standardwerte sind `-10%`, `-10%`, `120%` und `120%`. Dadurch entsteht auf jeder Seite der Bounding Box des Elements ein Rand von 10 %, da viele Effekte über das Element selbst hinausragen.

Beide Quadrate unten erhalten denselben Schatten. Beim ersten Filter bleibt der Bereich auf den Standardwerten. Sein Schatten endet deshalb in einer geraden Linie 7 Einheiten vom Quadrat entfernt – das entspricht 10 % seiner 70 Einheiten großen Bounding Box. Der größere Bereich des zweiten Filters lässt dem Schatten dagegen Platz, allmählich auszublenden:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="clipped-shadow">
      <feDropShadow dx="10" dy="10" stdDeviation="6" />
    </filter>

    <filter id="big-shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="10" dy="10" stdDeviation="6" />
    </filter>
  </defs>

  <rect
    x="25"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#clipped-shadow)" />
  <rect
    x="145"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#big-shadow)" />
</svg>
```

{{EmbedLiveSample("The_filter_region", "100%", 150)}}

Manchmal ist das Abschneiden beabsichtigt. Ein Bereich mit `x="0" y="0" width="100%" height="100%"` begrenzt den Effekt genau auf die Bounding Box des Elements. So bleibt beispielsweise ein innerer Leuchteffekt innerhalb eines Rechtecks, oder eine Weichzeichnung breitet sich nicht über die Kante hinaus aus, die sie abschwächt.

Das Attribut {{SVGAttr("filterUnits")}} legt fest, ob `x`, `y`, `width` und `height` des Bereichs als Anteile der Bounding Box des Elements (`objectBoundingBox`, der Standardwert) oder als Längen im aktuellen Benutzerkoordinatensystem (`userSpaceOnUse`) interpretiert werden. Bei `objectBoundingBox` sind die Werte unabhängig davon, ob sie mit Prozentzeichen geschrieben werden, Anteile der Bounding Box. `width="180%"` und `width="1.8"` beschreiben daher denselben Bereich.

Auch einzelne Primitiven akzeptieren `x`, `y`, `width` und `height`. Diese Attribute beschränken die jeweilige Operation auf einen _Teilbereich der Primitive_. Das ist nützlich, um einen Effekt nur auf einen Teil eines Elements anzuwenden oder die Ausdehnung von Primitiven wie {{SVGElement("feFlood")}} und {{SVGElement("feTile")}} zu begrenzen, die andernfalls den gesamten Bereich füllen würden. Das Attribut {{SVGAttr("primitiveUnits")}} von `<filter>` trifft für diese Teilbereiche und für Werte innerhalb der Primitiven, etwa `stdDeviation` und `dx`, dieselbe Wahl wie `filterUnits`. Sein Standardwert ist `userSpaceOnUse`.

## Farbinterpolation

Filteroperationen werden in einem Farbraum ausgeführt, den die Eigenschaft {{SVGAttr("color-interpolation-filters")}} bestimmt. Ihr Anfangswert ist `linearRGB`. Linearisierte Farben sind physikalisch genauer, weil eine Weichzeichnung oder Zusammensetzung in `linearRGB` dem Verhalten von Licht entspricht. Das Ergebnis stimmt jedoch nicht mit dem überein, was CSS-Filterfunktionen und Bildbearbeitungsprogramme erzeugen oder was die meisten Menschen erwarten. Besonders bei Weichzeichnungen, Farbverläufen und Farbmischungen ist der Unterschied deutlich sichtbar.

Setzen Sie die Eigenschaft am `<filter>`-Element oder an einer einzelnen Primitive auf `sRGB`, wenn ein Filter Farbkanäle mischt und das Ergebnis dem von CSS entsprechen soll. Das lohnt sich bei jedem Filter, da sich der Standardwert `linearRGB` leicht für einen Darstellungsfehler halten lässt.

Beide Streifengruppen unten werden gleich stark weichgezeichnet; nur der Farbraum unterscheidet sich. Links führt die Weichzeichnung im anfänglichen `linearRGB` beim Mischen der schwarzen und weißen Streifen zu einem deutlich helleren Grau als rechts in `sRGB`. Das rechte Ergebnis entspricht auch dem der CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}:

```html
<svg
  viewBox="0 0 260 120"
  width="260"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur-linear" x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="8" />
    </filter>

    <filter
      id="blur-srgb"
      x="-25%"
      y="-25%"
      width="150%"
      height="150%"
      color-interpolation-filters="sRGB">
      <feGaussianBlur stdDeviation="8" />
    </filter>

    <g id="stripes">
      <rect width="100" height="80" fill="black" />
      <rect x="10" width="10" height="80" fill="white" />
      <rect x="30" width="10" height="80" fill="white" />
      <rect x="50" width="10" height="80" fill="white" />
      <rect x="70" width="10" height="80" fill="white" />
    </g>
  </defs>

  <use href="#stripes" x="20" y="20" filter="url(#blur-linear)" />
  <use href="#stripes" x="140" y="20" filter="url(#blur-srgb)" />
</svg>
```

{{EmbedLiveSample("Color_interpolation", "100%", 150)}}

## Filterprimitiven

Es gibt etwa zwanzig `fe*`-Elemente. Nach ihrer Funktion gruppiert lässt sich die Primitive für einen bestimmten Effekt leichter finden:

- **Generatoren** benötigen keine Eingabe und erzeugen ein Bild aus ihren eigenen Attributen: {{SVGElement("feFlood")}}, {{SVGElement("feTurbulence")}} und {{SVGElement("feImage")}}.
- **Farbprimitiven** verändern Kanalwerte, ohne Pixel zu verschieben: {{SVGElement("feColorMatrix")}} und {{SVGElement("feComponentTransfer")}}.
- **Geometrieprimitiven** verschieben, verbreitern oder verzerren Pixel: {{SVGElement("feGaussianBlur")}}, {{SVGElement("feOffset")}}, {{SVGElement("feMorphology")}}, {{SVGElement("feDisplacementMap")}}, {{SVGElement("feConvolveMatrix")}} und {{SVGElement("feTile")}}.
- **Primitiven zur Bildzusammensetzung** kombinieren zwei oder mehr Eingaben: {{SVGElement("feBlend")}}, {{SVGElement("feComposite")}} und {{SVGElement("feMerge")}}.
- **Beleuchtungsprimitiven** schattieren die Eingabe als Oberfläche und verwenden ihren Alphakanal als Bump-Map: {{SVGElement("feDiffuseLighting")}} und {{SVGElement("feSpecularLighting")}}. Jede enthält ein untergeordnetes Element für die Lichtquelle: {{SVGElement("feDistantLight")}}, {{SVGElement("fePointLight")}} oder {{SVGElement("feSpotLight")}}.
- {{SVGElement("feDropShadow")}} ist eine Kurzform für eine Folge der oben genannten Operationen und wird unten in den [Rezepten](#schlagschatten) behandelt.

`feImage` kann auf ein externes Bild oder auf ein Element desselben Dokuments verweisen. Die zweite Form wird jedoch nicht überall unterstützt. Beachten Sie die [Tabelle zur Browser-Kompatibilität](/de/docs/Web/SVG/Reference/Element/feImage#browser_compatibility) für `feImage`.

Die jeweilige Seite eines Elements beschreibt seine steuernden Attribute. Eine vollständige Liste finden Sie im Abschnitt [Filterprimitive-Elemente](/de/docs/Web/SVG/Reference/Element#filter_primitive_elements) der Elementreferenz.

## Rezepte

### Schlagschatten

{{SVGElement("feDropShadow")}} erledigt alles mit einer einzigen Primitive: `dx`, `dy` und `stdDeviation` bestimmen die Geometrie, die Eigenschaften `flood-color` und `flood-opacity` die Farbe. Erstellen Sie einen Schatten nur dann aus einzelnen Primitiven, wenn Sie etwas benötigen, das die Kurzform nicht ausdrücken kann – etwa die weichgezeichnete Silhouette für einen weiteren Effekt wiederzuverwenden.

Das folgende Beispiel erzeugt denselben halbtransparenten Schatten auf zwei Arten. Der linke Filter verwendet `feDropShadow`. Der rechte setzt denselben Effekt aus vier einzelnen Primitiven zusammen: Er zeichnet den Alphakanal weich, verschiebt ihn, reduziert seine Deckkraft mit {{SVGElement("feComponentTransfer")}} auf 50 % und fügt die Ausgangsgrafik wieder darüber ein. Beide vergrößern den Filterbereich, damit der Schatten nicht abgeschnitten wird:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow-shorthand" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow
        dx="4"
        dy="4"
        stdDeviation="3"
        flood-color="black"
        flood-opacity="0.5" />
    </filter>

    <filter id="shadow-by-hand" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
      <feComponentTransfer in="offsetBlur" result="fadedBlur">
        <feFuncA type="linear" slope="0.5" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode in="fadedBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect
    x="25"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#shadow-shorthand)" />
  <rect
    x="145"
    y="25"
    width="70"
    height="70"
    fill="lightskyblue"
    filter="url(#shadow-by-hand)" />
</svg>
```

{{EmbedLiveSample("Drop_shadows", "100%", 150)}}

Die beiden Quadrate sehen gleich aus, weil `feDropShadow` dieselben Schritte in einer Primitive bündelt: den Alphakanal weichzeichnen, verschieben, einfärben und die Ausgangsgrafik darüberzeichnen. Die Primitive färbt den Schatten, indem sie `flood-color` mit dem weichgezeichneten Alphakanal zusammensetzt, statt dessen Deckkraft zu verringern. Bei einem einfarbigen Schatten führt das zum selben Ergebnis.

### Umfärben mit feColorMatrix

{{SVGElement("feColorMatrix")}} multipliziert die RGBA-Werte jedes Pixels mit einer Matrix aus 20 Zahlen: vier Zeilen, eine pro Ausgabekanal, mit jeweils fünf Spalten (`R`, `G`, `B`, `A` und eine Konstante). Die Kurzformen für `type` decken häufige Fälle ab (`saturate`, `hueRotate`, `luminanceToAlpha`), während `type="matrix"` vollständige Kontrolle bietet. Dieser Filter wandelt Farben mithilfe der Luminanzkoeffizienten in Graustufen um. Er verwendet `sRGB`, damit das Ergebnis der CSS-Funktion {{cssxref("filter-function/grayscale", "grayscale()")}} entspricht. Dieselben drei Kreise werden zweimal gezeichnet; nur die rechte Kopie wird gefiltert:

```html
<svg
  viewBox="0 0 240 120"
  width="240"
  height="120"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="to-grayscale" color-interpolation-filters="sRGB">
      <feColorMatrix
        type="matrix"
        values="0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0.2126 0.7152 0.0722 0 0
                0      0      0      1 0" />
    </filter>
  </defs>

  <g id="circles">
    <circle cx="60" cy="47" r="22" fill="crimson" />
    <circle cx="45" cy="73" r="22" fill="seagreen" opacity="0.8" />
    <circle cx="75" cy="73" r="22" fill="orange" opacity="0.8" />
  </g>

  <g filter="url(#to-grayscale)" transform="translate(120, 0)">
    <use href="#circles" />
  </g>
</svg>
```

{{EmbedLiveSample("Recoloring_with_feColorMatrix", "100%", 150)}}

Jede Zeile der Matrix legt einen Ausgabekanal als gewichtete Summe der Eingabekanäle fest. Die drei Farbzeilen sind identisch. Dadurch erhalten Rot, Grün und Blau denselben Luminanzwert, während die Alphazeile (`0 0 0 1 0`) die Transparenz unverändert durchlässt.

## Filter auf HTML-Inhalten

Mit der CSS-Eigenschaft {{cssxref("filter")}} lässt sich ein SVG-Filter auch auf jedes HTML-Element anwenden. Dafür können Sie im Dokument ein `<svg>`-Element definieren, das nur den `<filter>` enthält und keinen Einfluss auf das Layout hat. Setzen Sie seine `width` und `height` auf `0`, damit es keine Seiteninhalte verdeckt, seine `position` auf `fixed`, um es aus dem Dokumentfluss zu nehmen, und `aria-hidden`, damit es nicht im Barrierefreiheitsbaum erscheint.

Im folgenden Beispiel wird der Text durch das Rauschen verschoben, das der Filter selbst erzeugt. Das ist mit keiner CSS-Filterfunktion möglich:

```html
<svg class="filter-host" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <filter id="wobble" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.05"
      numOctaves="2"
      result="noise" />
    <feDisplacementMap
      in="SourceGraphic"
      in2="noise"
      scale="8"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>
</svg>

<p class="wobble">Filtered HTML text</p>
```

```css
.filter-host {
  position: fixed;
  width: 0;
  height: 0;
}

.wobble {
  font: bold 2rem sans-serif;
  filter: url("#wobble");
}
```

{{EmbedLiveSample("Filters_on_HTML_content", "100%", 140)}}

Weitere Informationen zum Kombinieren der beiden Sprachen finden Sie unter [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content).

## SVG-Filter und CSS-Filterfunktionen

Die CSS-Eigenschaft {{cssxref("filter")}} akzeptiert sowohl einen {{cssxref("url_function", "url()")}}-Verweis auf einen SVG-Filter als auch eine Liste von [Filterfunktionen](/de/docs/Web/CSS/Reference/Values/filter-function) wie {{cssxref("filter-function/blur", "blur()")}}, {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} und {{cssxref("filter-function/grayscale", "grayscale()")}}. Die Filterfunktionen sind Kurzformen für genau diese Primitiven. Daher gilt:

- Verwenden Sie eine Filterfunktion, wenn es eine für den benötigten Effekt gibt. Sie ist kürzer, lässt sich mit CSS animieren und interpolieren und arbeitet ohne unerwartete Ergebnisse in `sRGB`. Beachten Sie jedoch, dass Filterfunktionen [möglicherweise nicht auf SVG-Elemente angewendet werden können](/de/docs/Web/CSS/Reference/Properties/filter#browser_compatibility). In diesem Fall müssen Sie einen SVG-Filter verwenden.
- Verwenden Sie einen SVG-Filter für komplexere Effekte ohne entsprechende Filterfunktion: mehrere verkettete Operationen, die Zusammensetzung zweier Eingaben, erzeugtes Rauschen oder Beleuchtung sowie die genaue Steuerung von Farbraum und Filterbereich.

Sie müssen sich nicht für eine der beiden Varianten entscheiden: Die Eigenschaft akzeptiert eine durch Leerzeichen getrennte Liste. `filter: url("#wobble") grayscale(1)` führt daher zuerst den SVG-Filter und danach die Funktion aus. Zwei `<filter>`-Verweise aufzulisten ist auch eine Möglichkeit, Schritte zu kombinieren, die unterschiedliche Werte für `primitiveUnits` benötigen, da dieses Attribut für einen ganzen Filter und nicht nur für eine einzelne Primitive gilt.

## Siehe auch

- {{SVGElement("filter")}}: das Element, das einen Filter definiert
- {{SVGAttr("in")}}, {{SVGAttr("result")}}, {{SVGAttr("color-interpolation-filters")}}: die Attribute, mit denen eine Verarbeitungskette verknüpft wird
- [Filterprimitive-Elemente](/de/docs/Web/SVG/Reference/Element#filter_primitive_elements): Referenz für die `fe*`-Elemente
- {{cssxref("filter")}}: die CSS-Eigenschaft, die einen Filter auf SVG oder HTML anwendet
- [Filtereffekte verwenden](/de/docs/Web/CSS/Guides/Filter_effects/Using): CSS-Leitfaden zu den Filterfunktionen
- [Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects): Filterkapitel des SVG-Tutorials
- [SVG-Effekte auf HTML-Inhalte anwenden](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content): Filter, Clipping und Maskierung bei HTML-Inhalten
- [SVG-Filter-Leitfaden: Einstieg in die Grundlagen](https://blog.master.dev/svg-filters-guide-getting-started-with-the-basics/) auf blog.master.dev (2026)
- [SVG-Filtereffekte für Text: Letterpress, Farbauftrag und Holzlettern](https://www.carmenansio.com/articles/svg-filters-on-type/) auf carmenansio.com (2026)
