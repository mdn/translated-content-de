---
title: Anleitung zu OpenType-Schriftmerkmalen
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu zählen zum Beispiel Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Ziffernstile und mehrere andere. Diese werden alle als OpenType-Merkmale bezeichnet und können im Web über spezifische Eigenschaften und niedrigstufige Steuereigenschaften genutzt werden — {{cssxref("font-feature-settings")}}. Dieser Artikel liefert Ihnen alle notwendigen Informationen zur Verwendung von OpenType-Schriftmerkmalen in CSS.

Einige Schriftarten haben eines oder mehrere dieser Merkmale standardmäßig aktiviert (Kerning und Standardligaturen sind häufige Beispiele), während andere vom Designer oder Entwickler ausgewählt werden müssen, um sie in bestimmten Szenarien zu aktivieren.

Zusätzlich zu breiten Merkmalsätzen wie Ligaturen oder Hochzahlen (Ziffern, die gleichmäßig ausgerichtet sind, im Gegensatz zu 'oldstyle', die eher wie Kleinbuchstaben aussehen) gibt es auch sehr spezifische Merkmale wie stilistische Sätze (die möglicherweise mehrere spezielle Varianten von Glyphen enthalten, die zusammen verwendet werden sollen), Alternativen (die möglicherweise eine oder mehrere Varianten des Buchstabens 'a' umfassen) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. Im letzteren Fall sind diese Änderungen tatsächlich notwendig, um die Sprache korrekt auszudrücken, und gehen über die eher stilistische Präferenz anderer OpenType-Merkmale hinaus.

> [!WARNING]
> Es gibt viele in CSS definierte Attribute zur Nutzung von Schriftmerkmalen, aber leider sind viele nicht vollständig implementiert. Alle sind hier definiert und dargestellt, aber viele funktionieren nur über die niedrigstufige {{cssxref("font-feature-settings")}}-Eigenschaft. Es ist möglich, CSS so zu schreiben, dass es in beide Richtungen funktioniert, dies kann jedoch umständlich werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass jedes Mal, wenn Sie eines der einzelnen Merkmale ändern möchten, Sie den gesamten String neu definieren müssen (ähnlich wie bei der Manipulation von Variablen-Schriften mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Merkmalen in Schriftarten entdecken

Dies ist manchmal das Schwierigste herauszufinden, wenn Sie keine Dokumentation haben, die mit den Schriftarten geliefert wurde (viele Schriftendesigner und -foundries stellen aus diesem Grund Musterseiten und CSS zur Verfügung). Es gibt jedoch einige Websites, die es einfacher machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei auf den Kreis ziehen, wo es angegeben ist, und in wenigen Momenten erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Merkmale Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet auch eine ähnliche Möglichkeit, mit der Fähigkeit, auf die Merkmale zu klicken, um sie in einem gegebenen Textblock zu aktivieren oder zu deaktivieren.

## Warum sollten Sie sie verwenden?

Angesichts der Tatsache, dass diese Merkmale ein wenig Arbeit erfordern, um sie zu entdecken und zu nutzen, scheint es eine berechtigte Frage zu sein, warum man sich die Mühe machen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Merkmalen, die eine Webseite nützlicher, lesbarer und glänzender machen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und fließender.
- **Brüche** können Heimwerker- und Rezeptseiten viel einfacher lesbar und verständlich machen.
- **Ziffern** innerhalb von Textabsätzen, die als 'oldstyle' gesetzt sind, passen besser zwischen Kleinbuchstaben, und ebenso bewirken sie als 'Tabellenzahlen', dass sie besser ausgerichtet werden, wenn man eine Liste von Kosten in einer Tabelle beispielsweise aufstellt. Figuren, die als 'lining' gesetzt sind, hingegen, stehen gleichmäßig für sich allein oder vor großgeschriebenen Wörtern.

Während keines dieser Merkmale einzeln eine Webseite unnutzbar machen wird, aufgrund ihrer Abwesenheit, kann jedes von ihnen dazu beitragen, eine Webseite einfacher zu bedienen und einprägsamer durch Aufmerksamkeit fürs Detail zu machen.

> OpenType-Merkmale sind wie geheime Fächer in Schriftarten. Entsperren Sie sie, und Sie finden Möglichkeiten, Schriftarten subtil und dramatisch anders aussehen und sich benehmen zu lassen. Nicht alle OpenType-Merkmale sind immer angemessen zu verwenden, aber einige Merkmale sind entscheidend für großartige Typografie. _-- Tim Brown, Leiter der Typografie bei Adobe_.

### Manchmal geht es um Substanz, nicht nur um Stil

Es gibt einige Fälle — wie mit {{cssxref("font-variant-east-asian")}} — in denen OpenType-Merkmale direkt mit der Verwendung unterschiedlicher Formen bestimmter Glyphen verknüpft sind, was Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen ist es mehr als nur eine Gefälligkeit, sondern ein integraler Bestandteil des Inhalts selbst.

## Die Schriftmerkmale

Es gibt eine Reihe verschiedener Merkmale zu berücksichtigen. Sie sind hier gemäß den Hauptattributen und Optionen gruppiert und erläutert, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die unten gezeigten Beispiele zeigen die Eigenschaften und einige Beispielkombinationen zusammen mit den niedrigstufigen Syntaxäquivalenten. Sie stimmen möglicherweise aufgrund von Inkonsistenzen bei der Browserimplementierung nicht genau überein, aber in vielen Fällen wird das erste Beispiel mit dem zweiten übereinstimmen. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle sind verfügbar und kostenlos zu verwenden, die meisten sind auf Google Fonts und anderen Diensten zu finden).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen spezifischen Glyphenpaarungen. Dies ist in der Regel standardmäßig aktiviert (wie in der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} auch auf Ihrem Text eingestellt ist, dies nach dem Kerning angewendet wird.

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### Alternates

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriften können eine Reihe unterschiedlicher Alternativen für verschiedene Glyphen bereitstellen, wie zum Beispiel verschiedene Stile eines Kleinbuchstabens 'a' oder mehr oder weniger aufwändige Schwünge in einer Script-Schriftart. Diese Eigenschaft kann einen gesamten Satz von Alternativen oder nur eine spezifische aktivieren, abhängig von den bereitgestellten Werten. Das untenstehende Beispiel zeigt verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriften mit alternativen Glyphen können diese übergreifend oder einzeln in separaten stilistischen Sätzen oder sogar einzelnen Zeichen verfügbar machen. In diesem Beispiel sehen Sie zwei verschiedene Schriftarten und die Einführung der {{cssxref("@font-feature-values")}}-Regel. Diese wird verwendet, um Abkürzungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur auf eine einzelne Schriftart angewendet wird, oder eine, die geteilt wird und allgemeiner angewendet werden kann.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für beide Schriftarten. Die Anwendung auf nur das Wort 'My' ändert die Art, wie das 'M' dargestellt wird, und die Anwendung von `@styleset(alt-a)` ändert nur den Kleinbuchstaben 'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

zu ändern in

```css
font-variant-alternates: styleset(alt-g);
```

und bemerken Sie, dass das Kleinbuchstaben-'a' in seine reguläre Form zurückkehrt und das Kleinbuchstaben-'g's stattdessen geändert wird.

#### Mehr über Alternates

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie gleichmäßiger darzustellen (aus einem räumlichen oder ästhetischen Gesichtspunkt). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (als allgemeine Ligaturen bezeichnet) und es gibt auch spezialisiertere Kategorien wie 'fakultative Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Obwohl diese letzten technisch gesehen keine Ligaturen sind, sind sie im Allgemeinen ähnlich, da sie spezifische Kombinationen von Buchstaben ersetzen, wenn sie zusammen erscheinen.

Obwohl sie in Script-Schriftarten häufiger vorkommen, werden sie im folgenden Beispiel verwendet, um Pfeile zu erstellen:

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### Position

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-position")}}

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungsglyphen zu aktivieren. Diese sind darauf ausgelegt, mit dem umgebenden Text zu arbeiten, ohne die Grundlinie oder den Zeilenabstand zu verändern. Dies ist besonders nützlich mit den {{htmlelement("sub")}} oder {{htmlelement("sup")}}-Elementen.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### Kapitälchen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Einer der häufigeren Anwendungsfälle für OpenType-Merkmale sind richtige Kapitälchen. Diese sind Großbuchstaben, die so dimensioniert sind, dass sie besser zu Kleinbuchstaben passen und werden im Allgemeinen für Akronyme und Abkürzungen verwendet.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### Ziffern

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt mehrere verschiedene Stile von Ziffern, die üblicherweise in Schriften enthalten sind:

- 'Lining'-Figuren haben alle die gleiche Höhe und befinden sich auf der gleichen Grundlinie.
- 'Oldstyle'-Figuren haben gemischte Höhen und wurden entworfen, um das Erscheinungsbild von Ober- und Unterlängen wie andere Kleinbuchstaben zu haben. Diese sind so konzipiert, dass sie inline mit einem Text verwendet werden, damit die Ziffern visuell mit den umgebenden Glyphen ähnlich wie Kapitälchen verschmelzen.

Es gibt auch das Konzept der Abstände. Proportionaler Abstand ist die normale Einstellung, während tabellarischer Abstand Ziffern gleichmäßig unabhängig von der Zeichenbreite ausrichtet, womit er besser für das Ausrichten von Zahlen in finanziellen Tabellen geeignet ist.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal geschlitzte Brüche.
- Vertikal gestapelte Brüche.

Ordnungszahlen werden ebenfalls unterstützt (wie '1st' oder '3rd'), ebenso wie eine durchgestrichene Null, falls in der Schriftart vorhanden.

#### Lining und Oldstyle-Figuren

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### Brüche, Ordnungszahlen und durchgestrichene Null

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### Ostasiatisch

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Dies ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart. Das Beispiel unten zeigt eine Zeichenkette mit nur dem OpenType-Set 'jis78' aktiviert. Deaktivieren Sie das Kästchen unten und Sie sehen mehr Zeichen angezeigt.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> [!NOTE]
> Diese Glyphen wurden aus einem Schriftmustermuster kopiert und sind nicht als Prosa gedacht.

### Schriftvarianten-Kurzform

Die {{Cssxref("font-variant")}}-Eigenschaft ist die Kurzsyntax zur Definition aller oben genannten Merkmale. Die Einstellung eines Werts von `normal` setzt alle Eigenschaften auf ihren Initialwert zurück. Die Einstellung eines Werts von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Initialwert. (Bedeutet, dass wenn Kerning standardmäßig aktiviert ist, es auch mit einem Wert von `none`, der hier angegeben wird, weiterhin aktiviert bleibt.)

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## Schriftmerkmaleinstellungen

{{cssxref("font-feature-settings")}} ist die 'niedrigstufige Syntax', die expliziten Zugriff auf jedes benannte verfügbare OpenType-Merkmal ermöglicht. Dies bietet viel Kontrolle, hat jedoch einige Nachteile in Bezug auf Vererbung und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie den gesamten String neu deklarieren (es sei denn, Sie verwenden [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), um die Werte festzulegen). Aus diesem Grund ist es am besten, die oben gezeigten Standardmerkmaleigenschaften so weit wie möglich zu verwenden.

Es gibt eine enorme Anzahl möglicher Merkmale. Sie können Beispiele für eine Anzahl oben sehen und es gibt mehrere Ressourcen, um mehr über sie zu erfahren.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Gemäß der Spezifikation können Sie entweder nur den vierstelligen Merkmalcode angeben oder eine 1 nach dem Code (zum Aktivieren des Merkmals) oder eine 0 (Null) angeben, um ihn zu deaktivieren. Dies ist hilfreich, wenn Sie ein Merkmal wie Ligaturen standardmäßig aktiviert haben, Sie sie jedoch deaktivieren möchten, wie folgt:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über font-feature-settings-Codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann nicht für die Richtigkeit des Namens garantieren, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Merkmalen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung der CSS-Feature-Erkennung zur Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es eine gute Praxis, Ihr CSS unter Verwendung der Feature-Erkennung so einzurichten, dass die richtigen Eigenschaften genutzt werden, wobei {{cssxref("font-feature-settings")}} als Fallback dient.

Beispielsweise können Kapitälchen auf mehrere Arten eingestellt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Großschreibung alles in Kapitälchen angezeigt wird, erfordert dies 2 Einstellungen mit `font-feature-settings` gegenüber einem einzelnen Eigenschaftswert unter Verwendung von {{cssxref("font-variant-caps")}}.

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
  .small-caps {
    font-feature-settings: normal;
    font-variant-caps: all-small-caps;
  }
}
```

## Siehe auch

### Demos von CSS-OpenType-Features in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Werkzeuge zur Web-Schriftanalyse

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Font Feature Properties in CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives in CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### Andere Ressourcen

- [Verwendung von OpenType-Features](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Leiter der Typografie, Adobe
- [Adobes Syntax für OpenType-Features in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
