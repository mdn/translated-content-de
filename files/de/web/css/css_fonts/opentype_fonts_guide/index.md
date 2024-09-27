---
title: OpenType-Schriftartfunktionen-Leitfaden
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

Schriftartfunktionen oder -varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen der Abstände zwischen bestimmten Buchstabenpaaren), Brüche, Ziffernstile und mehrere andere. Diese werden alle als OpenType-Funktionen bezeichnet und können auf der Website über spezifische Eigenschaften und Low-Level-Kontrolleigenschaften wie {{cssxref("font-feature-settings")}} genutzt werden. Dieser Artikel bietet Ihnen alles, was Sie wissen müssen, um OpenType-Schriftartfunktionen in CSS zu verwenden.

Einige Schriftarten haben eine oder mehrere dieser Funktionen standardmäßig aktiviert (Kerning und Standardligaturen sind gängige Beispiele), während andere dem Designer oder Entwickler überlassen werden, um sie in bestimmten Szenarien zu aktivieren.

Neben umfassenden Funktionssätzen wie Ligaturen oder Ausrichtungsziffern (Zahlen, die gleichmäßig ausgerichtet sind, im Gegensatz zu 'Oldstyle', die eher wie Kleinbuchstaben aussehen), gibt es auch sehr spezifische wie stilistische Sets (die möglicherweise mehrere spezifische Varianten von Glyphen enthalten, die zusammen verwendet werden sollen), Alternativen (die möglicherweise eine oder mehrere Varianten des Buchstabens 'a' umfassen) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. Im letzteren Fall sind diese Änderungen tatsächlich notwendig, um die Sprache richtig auszudrücken, sodass sie über die eher stilistische Präferenz der meisten anderen OpenType-Funktionen hinausgehen.

> [!WARNING]
> Es gibt viele definierte CSS-Attribute, um Schriftartfunktionen zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind alle definiert und hier gezeigt, aber viele funktionieren nur mit der Low-Level-Eigenschaft {{cssxref("font-feature-settings")}}. Es ist möglich, CSS zu schreiben, das auf beide Arten funktioniert, aber das kann umständlich werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass Sie jedes Mal, wenn Sie eine der einzelnen Funktionen ändern möchten, die gesamte Zeichenfolge neu definieren müssen (ähnlich wie beim Manipulieren von Variablen-Schriftarten mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Funktionen in Schriftarten entdecken

Dies ist manchmal das kniffligste, wenn Sie keine Dokumentation haben, die mit den Schriftarten geliefert wurde (viele Schriftgestalter und Schriftgießereien stellen Musterseiten und CSS genau aus diesem Grund bereit). Es gibt jedoch einige Websites, die es einfacher machen, das herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei auf den Kreis ziehen, wo es angezeigt wird, und nach einigen Momenten erhalten Sie einen vollständigen Bericht über alle Funktionen und Eigenschaften Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet auch eine ähnliche Möglichkeit, wobei Sie auf die Features klicken können, um sie in einem gegebenen Textblock ein- oder auszuschalten.

## Warum sollten Sie sie verwenden?

Da es ein wenig Aufwand erfordert, diese Funktionen zu entdecken und zu verwenden, mag es eine berechtigte Frage sein, warum man sich die Mühe machen sollte, sie zu nutzen. Die Antwort liegt in den spezifischen Funktionen, die eine Seite nützlicher, lesbarer und gepflegter machen:

- **Ligaturen** wie 'ff' oder 'fi' machen die Buchstabenzwischenräume und das Lesen gleichmäßiger und flüssiger.
- **Brüche** können Heimwerker- und Rezeptseiten viel einfacher zu lesen und zu verstehen machen.
- **Ziffern** innerhalb von Absätzen, die als 'Oldstyle' gesetzt sind, fügen sich komfortabler zwischen Kleinbuchstaben ein, und ebenso werden sie als 'Tabellenzahlen' besser ausrichten, wenn man eine Liste von Kosten in einer Tabelle anordnet. 'Lining'-Ziffern hingegen stehen mehr einheitlich für sich oder vor großgeschriebenen Wörtern.

Obwohl keine dieser Funktionen allein eine Site aufgrund ihrer Abwesenheit unbrauchbar machen wird, kann jede von ihnen wiederum eine Site einfacher zu benutzen und für ihre Liebe zum Detail einprägsamer machen.

> OpenType-Funktionen sind wie geheime Fächer in Schriftarten. Entsperren Sie sie und Sie finden Möglichkeiten, Schriftarten subtil und dramatisch anders aussehen und sich anders verhalten zu lassen. Nicht alle OpenType-Funktionen sind immer geeignet zu verwenden, aber einige Funktionen sind entscheidend für großartige Typografie. _-- Tim Brown, Typografie-Leiter bei Adobe_.

### Manchmal geht es um Substanz, nicht nur um Stil

Es gibt einige Fälle – wie bei {{cssxref("font-variant-east-asian")}} –, bei denen OpenType-Funktionen direkt mit der Verwendung unterschiedlicher Formen bestimmter Glyphen verbunden sind, was die Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen ist es mehr als nur eine Annehmlichkeit, sondern ein wesentlicher Bestandteil des Inhalts selbst.

## Die Schriftartfunktionen

Es gibt eine Reihe verschiedener Funktionen zu berücksichtigen. Sie sind hier entsprechend den Hauptmerkmalen und Optionen gruppiert und erklärt, die in den W3C-Spezifikationen abgedeckt sind.

> [!NOTE]
> Die unten stehenden Beispiele zeigen die Eigenschaften und einige Beispielkombinationen zusammen mit den Low-Level-Syntax-Äquivalenten. Sie stimmen möglicherweise nicht genau überein, aufgrund von Inkonsistenzen in der Browserimplementierung, aber in vielen Fällen wird das erste Beispiel mit dem zweiten übereinstimmen. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos nutzbar, die meisten sind auf Google Fonts und anderen Diensten verfügbar).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf die Abstände zwischen bestimmten Glyphenpaaren. Dies ist in der Regel standardmäßig aktiviert (wie in der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} auch auf Ihren Text gesetzt ist, dies nach dem Kerning angewendet wird.

{{EmbedGHLiveSample("css-examples/font-features/font-kerning.html", '100%', 520)}}

### Alternates

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriftarten können eine Reihe verschiedener Alternativen für verschiedene Glyphen bereitstellen, wie verschiedene Stile des kleinen Buchstabens 'a' oder mehr oder weniger aufwendige Schwünge in einer Skriptschriftart. Diese Eigenschaft kann ein ganzes Set von Alternaten oder nur ein spezifisches aktivieren, abhängig von den bereitgestellten Werten. Das folgende Beispiel zeigt verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriftarten mit alternativen Glyphen können sie flächendeckend oder individuell in separaten stilistischen Sets oder sogar einzelnen Zeichen verfügbar machen. In diesem Beispiel sehen Sie zwei verschiedene Schriftarten und die Einführung der {{cssxref("@font-feature-values")}} at-rule. Diese wird verwendet, um Abkürzungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur für ein einziges Schriftart gilt oder die geteilt und allgemeiner angewendet werden kann.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-alternates.html", '100%', 800)}}

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für jede Schriftart. Die Anwendung auf nur das Wort 'My' ändert die Art und Weise, wie das 'M' gerendert wird, und die Anwendung von `@styleset(alt-a)` ändert nur das kleine 'a'.

Ändern Sie die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

in

```css
font-variant-alternates: styleset(alt-g);
```

und beachten Sie, dass sich das kleine 'a' auf seine reguläre Form zurückstellt und das kleine 'g' stattdessen ändert.

#### Mehr über Alternates

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie glatter darzustellen (aus einer Abstands- oder ästhetischen Perspektive). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (als gemeine Ligaturen bezeichnet) und es gibt auch spezialisiertere Kategorien wie 'diskretionäre Ligaturen', 'historische Ligaturen' und 'kontextbezogene Alternativen'. Während diese letzten technisch gesehen keine Ligaturen sind, sind sie im Allgemeinen ähnlich, indem sie spezifische Buchstabenkombinationen ersetzen, wenn diese zusammen erscheinen.

Während sie häufiger in Skriptschriftarten vorkommen, werden sie im Beispiel unten verwendet, um Pfeile zu erstellen:

{{EmbedGHLiveSample("css-examples/font-features/font-variant-ligatures.html", '100%', 540)}}

### Position

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-position")}}

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungszeichen zu aktivieren. Diese sind so konzipiert, dass sie mit dem umgebenden Text funktionieren, ohne die Grundlinie oder den Zeilenabstand zu ändern. Dies ist besonders nützlich mit den {{htmlelement("sub")}} oder {{htmlelement("sup")}} Elementen.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-position.html", '100%', 550)}}

### Capitals

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Eine der häufigeren Anwendungsfälle für OpenType-Funktionen ist die richtige Kleinschreibung. Dies sind Großbuchstaben, die so dimensioniert sind, dass sie besser unter kleineren Buchstaben passen, und werden im Allgemeinen für Akronyme und Abkürzungen verwendet.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-caps.html", '100%', 620)}}

### Numerals

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt verschiedene Stile von Zahlen, die häufig in Schriftarten enthalten sind:

- 'Lining'-Ziffern haben alle die gleiche Höhe und stehen auf derselben Grundlinie.
- 'Oldstyle'-Ziffern haben unterschiedliche Höhen und wirken wie Auf- und Abstriche ähnlich wie andere Kleinbuchstaben. Diese sind so konzipiert, dass sie im Textfluss verwendet werden, damit die Zahlen visuell mit den umgebenden Glyphen auf ähnliche Weise wie Kleinbuchstaben verschmelzen.

Es gibt auch das Konzept der Abstände. Proportionale Abstände sind die normale Einstellung, während tabellarische Abstände Zahlen gleichmäßig ausrichten, unabhängig von der Zeichenbreite, was es besser geeignet macht, Tabellen von Nummern in Finanztabellen anzuordnen.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal geschlitzte Brüche.
- Vertikal gestapelte Brüche.

Ordnungszahlen werden ebenfalls unterstützt (wie '1st' oder '3rd'), ebenso wie eine durchgestrichene Null, sofern im Schriftzeichen vorhanden.

#### Lining und Oldstyle-Figuren

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric.html", '100%', 560)}}

#### Brüche, Ordnungszahlen und geschnittene Null

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-frac.html", '100%', 600)}}

### Ostasiatisch

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Dies ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart. Das Beispiel unten zeigt eine Zeichenfolge mit nur der OpenType-Einstellung 'jis78' aktiviert. Deaktivieren Sie das Kontrollkästchen unten, und Sie werden mehr Zeichen sehen.

{{EmbedGHLiveSample("css-examples/font-features/font-variant-east-asian.html", '100%', 750)}}

> [!NOTE]
> Diese Glyphen wurden aus einem Schriftmuster kopiert und sind nicht als Prosa gedacht.

### Schriftvarianten-Abkürzung

Die {{Cssxref("font-variant")}} Eigenschaft ist die Abkürzungssyntax für die Definition all der oben genannten. Das Setzen eines Wertes von `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Das Setzen eines Wertes von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. (Das bedeutet, dass, wenn Kerning standardmäßig aktiviert ist, es auch dann aktiviert bleibt, wenn hier ein Wert von `none` angegeben wird.)

{{EmbedGHLiveSample("css-examples/font-features/font-variant.html", '100%', 600)}}

## Schriftmerkmaleinstellungen

{{cssxref("font-feature-settings")}} ist die 'Low-Level-Syntax', die expliziten Zugriff auf jede benannte verfügbare OpenType-Funktion ermöglicht. Dies bietet viel Kontrolle, hat jedoch einige Nachteile, wie es die Vererbung beeinflusst und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenfolge erneut deklariert (sofern Sie nicht [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) verwenden, um die Werte zu setzen). Daher ist es am besten, die oben gezeigten Standard-Eigenschaften wann immer möglich zu verwenden.

Es gibt eine riesige Anzahl von möglichen Funktionen. Sie können Beispiele für einige davon oben sehen, und es gibt mehrere Ressourcen, um weitere zu finden.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut der Spezifikation können Sie entweder nur den 4-stelligen Funktionscode angeben oder eine 1 nach dem Code (zum Aktivieren dieser Funktion) oder eine 0 (Null), um sie zu deaktivieren. Dies ist hilfreich, wenn Sie eine Funktion wie Ligaturen standardmäßig aktiviert haben, aber sie ausschalten möchten, wie folgt:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über font-feature-settings-Codes

- ['Das vollständige CSS-Demo für OpenType-Funktionen'](https://sparanoid.com/lab/opentype-features/) (Ich kann nicht für die Wahrheit des Namens bürgen, aber es ist ziemlich groß)
- [Eine Liste der OpenType-Funktionen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung der CSS-Feature-Erkennung für die Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es gute Praxis, Ihr CSS mit Feature-Erkennung einzurichten, um die richtigen Eigenschaften zu nutzen, mit {{cssxref("font-feature-settings")}} als Fallback.

Zum Beispiel können kleine Großbuchstaben auf mehrere Arten eingestellt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Groß- und Kleinschreibung alles in kleinen Großbuchstaben endet, benötigt es 2 Einstellungen mit `font-feature-settings` gegenüber einem einzigen Eigenschaftswert mit {{cssxref("font-variant-caps")}}.

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

### Demos der CSS OpenType-Funktionen in CSS

- [Das vollständige CSS-Demo für OpenType-Funktionen](https://sparanoid.com/lab/opentype-features/)

### Web-Schriftanalyse-Tools

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftmerkmal-Eigenschaften im CSS-Schriften-Modul Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives im CSS-Schriften-Modul Level 4](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### Andere Ressourcen

- [Verwendung von OpenType-Funktionen](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Leiter der Typografie, Adobe
- [Syntax für OpenType-Funktionen in CSS von Adobe](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
