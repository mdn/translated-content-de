---
title: OpenType Font Features Guide
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenkombinationen), Brüche, Zahlenstile und mehrere weitere. Diese werden alle als OpenType-Funktionen bezeichnet und können im Web über spezifische Eigenschaften und niedere Kontrolleigenschaften wie {{cssxref("font-feature-settings")}} genutzt werden. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

Einige Schriftarten haben eines oder mehrere dieser Merkmale standardmäßig aktiviert (Kerning und Standard-Ligaturen sind häufige Beispiele), während andere dem Designer oder Entwickler überlassen bleiben, um sie in bestimmten Szenarien zu aktivieren.

Neben breiten Merkmalgruppen wie Ligaturen oder Schrägziffern (Ziffern, die gleichmäßig ausgeglichen sind, im Gegensatz zu 'oldstyle', die mehr wie Kleinbuchstaben aussehen) gibt es auch sehr spezielle wie stilistische Sets (die mehrere spezifische Varianten von Glyphen enthalten können, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' sein könnten) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. Im letzteren Fall sind diese Änderungen tatsächlich notwendig, um die Sprache richtig auszudrücken, und gehen somit über die eher stilistische Präferenz der meisten anderen OpenType-Funktionen hinaus.

> [!WARNING]
> Es gibt viele CSS-Attribute, die genutzt werden, um Schriftmerkmale zu nutzen, aber leider sind viele davon nicht vollständig implementiert. Sie sind alle hier definiert und gezeigt, aber viele funktionieren nur mit der niederschwelligen {{cssxref("font-feature-settings")}}-Eigenschaft. Es ist möglich, CSS zu schreiben, das auf beide Arten funktioniert, aber das kann umständlich werden. Das Problem, `font-feature-settings` für alles zu verwenden, besteht darin, dass jedes Mal, wenn Sie eines der einzelnen Merkmale ändern möchten, Sie die gesamte Zeichenkette neu definieren müssen (ähnlich wie beim Manipulieren von Variablen-Schriftarten mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Merkmalen in Schriftarten herausfinden

Dies ist manchmal das Schwierigste, herauszufinden, wenn Sie keine Dokumentation haben, die mit den Schriftarten geliefert wurde (viele Schriftdesigner und -hersteller stellen Musterseiten und CSS genau aus diesem Grund zur Verfügung). Es gibt jedoch einige Websites, die es leichter machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei auf dem angezeigten Kreis ablegen und in wenigen Augenblicken erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Merkmale Ihrer Schrift. [Axis-praxis.org](https://www.axis-praxis.org/) bietet ebenfalls eine ähnliche Möglichkeit an, mit der Fähigkeit, auf die Merkmale zu klicken, um sie in einem bestimmten Textblock ein- oder auszuschalten.

## Warum sollten Sie sie verwenden?

Angesichts der Tatsache, dass diese Merkmale ein wenig Arbeit erfordern, um entdeckt und genutzt zu werden, könnte es gerecht erscheinen, zu fragen, warum man sich die Mühe machen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Merkmalen, die eine Website nützlicher, lesbarer und polierter machen:

- **Ligaturen** wie 'ff' oder 'fi' verbessern den Buchstabenabstand und das flüssige Lesen.
- **Brüche** können Wohnbau- und Rezeptseiten viel leichter lesbar und verständlich machen.
- **Zahlen** innerhalb von Absatztexten, die als 'oldstyle' gesetzt sind, passen sich besser zwischen Kleinbuchstaben ein, und ebenso werden sie, wenn sie als 'Tabellenzahlen' gesetzt sind, besser ausgerichtet, wenn sie eine Kostenliste in einer Tabelle aufstellen. 'lining'-Ziffern hingegen stehen mehr für sich und wirken vor großgeschriebenen Wörtern gleichmäßiger.

Obwohl keines dieser Merkmale allein eine Website aufgrund ihres Fehlens unbrauchbar machen wird, kann jedes von ihnen wiederum eine Website benutzerfreundlicher und durch ihre Detailversessenheit erinnerungswürdiger machen.

> OpenType-Funktionen sind wie geheime Fächer in Schriftarten. Entsperren Sie sie und Sie finden Wege, Schriftarten subtil und dramatisch anders aussehen und sich verhalten zu lassen. Nicht alle OpenType-Funktionen sind immer angemessen zu verwenden, aber einige Merkmale sind entscheidend für großartige Typografie. _-- Tim Brown, Leiter der Typografie bei Adobe_.

### Manchmal ist es Substanz, nicht nur Stil

Es gibt einige Fälle — wie mit {{cssxref("font-variant-east-asian")}} — in denen OpenType-Funktionen direkt mit der Verwendung verschiedener Formen bestimmter Glyphen verbunden sind, was Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen ist es mehr als nur eine Nettigkeit, sondern ein integraler Bestandteil des Inhalts selbst.

## Die Schriftmerkmale

Es gibt eine Reihe von verschiedenen Merkmalen zu berücksichtigen. Sie sind hier nach den wichtigsten Attributen und Optionen gruppiert und erklärt, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die nachstehenden Beispiele zeigen die Eigenschaften und einige Beispielkombinationen sowie die niederschwelligen Syntaxäquivalente. Sie stimmen möglicherweise aufgrund von Unterschieden in der Browserimplementierung nicht genau überein, aber in vielen Fällen wird das erste Beispiel dem zweiten entsprechen. Die gezeigten Schrifttypen sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos nutzbar, die meisten auf Google Fonts und anderen Diensten).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen bestimmten Glyphenkombinationen. Dies ist im Allgemeinen standardmäßig aktiviert (wie in der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} ebenfalls auf Ihrem Text eingestellt ist, dieser nach dem Kerning angewendet wird.

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### Alternates

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriften können eine Reihe verschiedener Alternativen für verschiedene Glyphen bereitstellen, wie z.B. verschiedene Stile des Kleinbuchstabens 'a' oder mehr oder weniger aufwendige Schwünge in einer Schreibschrift. Diese Eigenschaft kann ein ganzes Set von Alternativen aktivieren oder nur eine spezifische, abhängig von den gelieferten Werten. Das untenstehende Beispiel zeigt verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriftarten mit alternativen Glyphen können diese allgemein oder individuell in separaten stilistischen Sets oder sogar Einzelzeichen verfügbar machen. In diesem Beispiel sehen Sie zwei verschiedene Schrifttypen und die Einführung der {{cssxref("@font-feature-values")}} at-rule. Diese wird verwendet, um Verknüpfungen oder benannte Optionen zu definieren, die pro Schriftfamilie festgelegt werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur auf eine einzige Schriftart angewendet wird oder eine, die geteilt und allgemeiner angewendet werden kann.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für beide Schriftarten. Das Anwenden auf nur das Wort 'My' ändert die Darstellung des 'M', und das Anwenden von `@styleset(alt-a)` ändert nur das Kleinbuchstaben-'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

in

```css
font-variant-alternates: styleset(alt-g);
```

zu ändern und bemerken Sie, dass das Kleinbuchstaben-'a' wieder seine reguläre Form einnimmt und die Kleinbuchstaben-'g's sich stattdessen ändern.

#### Mehr über Alternativen

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie glatter zu repräsentieren (aus Abstandsperspektive oder ästhetisch). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten, die als normale Ligaturen bezeichnet werden, und es gibt auch spezialisiertere Kategorien wie 'diskretionäre Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Während diese letzten technisch gesehen keine Ligaturen sind, sind sie im Allgemeinen ähnlich, da sie spezifische Buchstabenkombinationen ersetzen, wenn sie zusammen erscheinen.

Weitere Details und Beispiele sind im untenstehenden Live-Beispiel aufgeführt, in dem sie zur Erstellung von Pfeilen verwendet werden:

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### Position

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-position")}}

Positionsvarianten werden verwendet, um typografische hochgestellte und tiefgestellte Glyphen zu aktivieren. Diese sind so gestaltet, dass sie mit dem umgebenden Text arbeiten, ohne die Basislinie oder Zeilenabstände zu verändern. Dies ist besonders nützlich mit den {{htmlelement("sub")}} oder {{htmlelement("sup")}} Elementen.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### Capitals

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Einer der häufigsten Anwendungsfälle für OpenType-Merkmale sind richtige Kapitälchen. Diese sind Großbuchstaben, die so dimensioniert sind, dass sie besser unter Kleinbuchstaben passen und werden im Allgemeinen für Akronyme und Abkürzungen verwendet.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### Numerals

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt verschiedene Stile von Ziffern, die häufig in Schriftarten enthalten sind:

- 'Lining'-Ziffern haben alle die gleiche Höhe und befinden sich auf der gleichen Basislinie.
- 'Oldstyle'-Ziffern sind gemischter Höhe und designt, um das Erscheinungsbild von Ober- und Unterlängen ähnlich wie andere Kleinbuchstaben zu haben. Diese sind dazu gedacht, im Textfluss verwendet zu werden, sodass die Ziffern visuell mit den umliegenden Glyphen ähnlich wie bei Kapitälchen verschmelzen.

Es gibt auch das Konzept der Abstände. Proportionale Abstände sind die normale Einstellung, während tabellarische Abstände die Zahlen gleichermaßen ausrichten, unabhängig von der Zeichenbreite, was es angemessener macht, Tabellen von Zahlen in finanziellen Tabellen anzuordnen.

Durch diese Eigenschaft werden zwei Arten von Brüchen unterstützt:

- Diagonal geschlitzte Brüche.
- Vertikal gestapelte Brüche.

Ordnungszahlen werden ebenfalls unterstützt (wie '1st' oder '3rd'), ebenso wie eine geschrägte Null, wenn sie in der Schriftart vorhanden ist.

#### Lining und oldstyle-Ziffern

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### Brüche, Ordnungszahlen und durchgestrichene Null

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### Ostasiatisch

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Dies ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart. Das untenstehende Beispiel zeigt eine Zeichenfolge mit nur dem OpenType-Set 'jis78' aktiviert. Deaktivieren Sie das Kontrollkästchen unten und Sie sehen mehr Zeichen.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> [!NOTE]
> Diese Glyphen wurden aus einer Schriftprobe kopiert und sind nicht als Prosa gedacht.

### Schriftvariante in Kurzform

Die {{Cssxref("font-variant")}} Eigenschaft ist die Kurzsyntax für die Definition all der oben genannten. Durch Festlegen eines Werts von `normal` werden alle Eigenschaften auf ihren Anfangswert zurückgesetzt. Ein Wert von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. (Das bedeutet, dass wenn Kerning standardmäßig an ist, es auch an bleibt, selbst wenn hier ein Wert von `none` angegeben wird.)

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## Schriftmerkmaleinstellungen

{{cssxref("font-feature-settings")}} ist die 'niedrige Syntax', die expliziten Zugriff auf jede benannte verfügbare OpenType-Funktion ermöglicht. Dies bietet viel Kontrolle, hat aber einige Nachteile in Bezug auf Vererbung und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenkette erneut deklarieren (es sei denn, Sie verwenden [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties), um die Werte zu setzen). Deshalb ist es am besten, die oben gezeigten Standardeigenschaften wann immer möglich zu verwenden.

Es gibt eine riesige Anzahl möglicher Funktionen. Beispiele für einige davon finden Sie oben, und es gibt mehrere Ressourcen, um weitere zu finden.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut den Spezifikationen können Sie entweder nur den vierstelligen Feature-Code angeben oder eine 1 nach dem Code angeben (zum Aktivieren dieser Funktion) oder eine 0 (Null), um sie zu deaktivieren. Das ist hilfreich, wenn Sie eine Funktion wie Ligaturen standardmäßig aktiviert haben, aber sie ausschalten möchten, wie folgt:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über font-feature-settings Codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann die Wahrheit des Namens nicht garantieren, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Funktionen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung von CSS-Funktionsüberprüfung für die Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es gute Praxis, Ihr CSS mit Funktionsüberprüfung einzurichten, um die richtigen Eigenschaften zu nutzen, mit {{cssxref("font-feature-settings")}} als Fallback.

Zum Beispiel können Kapitälchen auf mehrere Weisen gesetzt werden, aber wenn Sie sicherstellen möchten, dass ungeachtet der zugrunde liegenden Groß- oder Kleinschreibung alles in Kapitälchen endet, erfordert dies 2 Einstellungen mit `font-feature-settings` gegenüber einem einzelnen Eigenschaftswert mit {{cssxref("font-variant-caps")}}.

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

### Demos von OpenType-Funktionen in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Web-Schriftanalyse-Tools

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C Spezifikationen

- [Schriftmerkmaleigenschaften im CSS Schriftmodule Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives im CSS Fontmodule Level 4](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### Weitere Ressourcen

- [Verwendung von OpenType-Funktionen](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Leiter der Typografie, Adobe
- [Adobe's Syntax für OpenType-Funktionen in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
