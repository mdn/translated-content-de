---
title: Kaskade, Spezifität und Vererbung
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu vertiefen – der Kaskade, der Spezifität und der Vererbung – die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Auch wenn die Bearbeitung dieser Lektion zunächst weniger relevant erscheinen mag und etwas akademischer ist als andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig durchzugehen und zu überprüfen, ob Sie die Konzepte verstehen, bevor Sie weitermachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um mehr über die Kaskade und Spezifität zu lernen, und wie Vererbung
        in CSS funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Widersprüchliche Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _cascading_ (kaskadierend) ist unglaublich wichtig zu verstehen – die Art und Weise, wie die Kaskade sich verhält, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Sie glauben, auf ein Element angewendet werden sollte, nicht funktioniert. Oft ist das Problem, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Specificity) sind Mechanismen, die steuern, welche Regel bei einem solchen Konflikt angewendet wird. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Hier ist auch das Konzept der [**Vererbung**](/de/docs/Web/CSS/Inheritance) von Bedeutung, was bedeutet, dass einige CSS-Eigenschaften standardmäßig die auf dem aktuellen Elternelement gesetzten Werte erben und andere nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Beginnen wir mit einem kurzen Blick auf die wesentlichen Dinge, mit denen wir es zu tun haben, dann werfen wir einen Blick auf jedes einzelne von ihnen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können anfangs kompliziert erscheinen. Mit mehr Übung im Schreiben von CSS wird Ihnen die Arbeitsweise jedoch klarer werden.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Cascade) – ganz einfach gesagt bedeutet dies, dass der Ursprung, die Kaskadenschicht und die Reihenfolge der CSS-Regeln von Bedeutung sind. Wenn zwei Regeln aus derselben Kaskadenschicht angewendet werden und beide die gleiche Spezifität haben, wird die zuletzt im Stylesheet definierte Regel verwendet.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>` wird letztlich blau gefärbt. Dies liegt daran, dass beide Regeln aus der gleichen Quelle stammen, einen identischen Element-Selektor haben und daher die gleiche Spezifität haben, aber die letzte in der Quellreihenfolge gewinnt.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 500)}}

### Spezifität

[Spezifität](/de/docs/Web/CSS/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und auf dasselbe Element abzielen, entscheidet die Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Element-Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, und hat daher weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie reguläre Element-Selektoren.
- Ein Klassen-Selektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.

Unten haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>` wird letztlich rot gefärbt, weil der Klassen-Selektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Auch wenn die Regel mit dem `<h1>`-Element-Selektor weiter unten in der Quellreihenfolge erscheint, wird die mit der höheren Spezifität, die mit dem Klassen-Selektor definiert wird, angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 600)}}

Wir werden später den Spezifitäts-Algorithmus erklären.

### Vererbung

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf Elternelemente angewendet werden, werden von ihren Kindelementen geerbt, andere wiederum nicht.

Wenn Sie zum Beispiel `color` und `font-family` auf ein Element setzen, werden damit auch alle darin enthaltenen Elemente mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerten auf sie angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 650)}}

Einige Eigenschaften werden nicht vererbt – zum Beispiel wird, wenn Sie eine {{cssxref("width")}} von 50% auf ein Element setzen, keine seiner Nachkommen eine Breite von 50% der Breite ihres Elternteils erhalten. Wenn das der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaften-Seiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich ob sie vererbt wird oder nicht. Siehe den [Formalen Definitionsbereich der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

## Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) bestimmen gemeinsam, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal ein wenig kompliziert erscheinen, aber Sie werden beginnen, sich daran zu erinnern, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können jederzeit die Details nachschlagen, wenn Sie etwas vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

Das folgende Video zeigt, wie Sie Firefox DevTools verwenden können, um die Kaskade, Spezifität und weitere Details einer Seite zu untersuchen:

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## Verstehen der Vererbung

Beginnen wir mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen verschachtelter unverzierter Listen. Wir haben der äußeren `<ul>`-Liste eine Grenze, ein Padding und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten Kinder und auch auf die indirekten Kinder angewendet – die unmittelbaren `<li>`-Kinder und jene innerhalb der ersten verschachtelten Liste. Dann haben wir der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und ihr eine andere Farbe zugewiesen. Diese wird dann durch ihre Nachkommen vererbt.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 1100)}}

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn eine Grenze in diesem Listenbeispiel von den Kindern geerbt würde, würde jede einzelne Liste und jedes Listenelement eine Grenze erhalten – wahrscheinlich nicht ein Effekt, den wir jemals möchten!

Auch wenn jede CSS-Eigenschaftsseite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv erraten, dasselbe, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stilisieren wird.

### Vererbung steuern

CSS stellt fünf spezielle universelle Eigenschaftswerte zum Steuern der Vererbung bereit. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf denselben Wert wie auf seinem Elternelement. Effektiv "schaltet" dies die Vererbung "ein".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf die Standardeinstellung des Browsers anstatt auf die für diese Eigenschaft festgelegten Standardwerte. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass sie sich, wenn die Eigenschaft von Natur aus vererbt wird, wie `inherit` verhält, ansonsten wie `initial`.

> [!NOTE]
> Sehen Sie [Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types) für weitere Informationen über jeden dieser Werte und wie sie funktionieren.

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das untenstehende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu experimentieren und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des darin verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall Schwarz) und nicht den Browserstandard für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements, Grün, verwendet.
3. Welche der Links wird sich ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft auf `all`. Beachten Sie, wie das zweite Element auf einer neuen Linie steht und ein Aufzählungszeichen hat. Welche Eigenschaften denken Sie, wurden vererbt?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 800)}}

### Zurücksetzen aller Eigenschaftswerte

Die CSS-Abkürzungseigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an den Stilen rückgängig zu machen, sodass Sie wieder zu einem bekannten Startpunkt zurückkehren können, bevor Sie neue Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockquotes. Das erste hat Stil auf das Blockquote-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockquote angewendet, die den Wert von `all` auf `unset` setzt.

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 800)}}

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie, was der Unterschied ist.

## Verständnis der Kaskade

Wir verstehen jetzt, dass Vererbung der Grund dafür ist, warum ein tief in der Struktur Ihres HTMLs verschachtelter Absatz dieselbe Farbe wie das CSS des Bodys hat. Aus den Einführungskapiteln haben wir ein Verständnis davon, wie wir das CSS, das auf etwas irgendwo im Dokument angewendet wird, ändern können – sei es durch Zuweisung von CSS zu einem Element oder durch Erstellung einer Klasse. Nun werden wir uns ansehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei Faktoren zu berücksichtigen, die hier in aufsteigender Wichtigkeit aufgeführt sind. Spätere überlagern frühere:

1. **Quellenreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellenreihenfolge

Wir haben bereits gesehen, wie die Quellenreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die genau dasselbe Gewicht hat, dann gewinnt diejenige, die zuletzt im CSS kommt. Sie können dies so betrachten: Die Regel, die näher am eigentlichen Element ist überschreibt die vorhergehenden, bis die letzte gewinnt und das Element steuert.

Die Quellenreihenfolge ist nur dann von Bedeutung, wenn das Spezifitätsgewicht der Regeln gleich ist, also sehen wir uns die Spezifität genauer an:

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewandt wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige gewählt, die das Element stylen soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassen-Selektor mehr Gewicht als ein Element-Selektor, sodass die in dem Klassen-Stilblock definierten Eigenschaften über denen im Element-Stilblock definierten überwiegen.

Hier ist zu beachten, dass, obwohl wir über Selektoren und die darauf angewendeten Regeln, die den Text oder die Komponente, die sie auswählen, denken, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine verbreitete Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen zu erstellen, für diejenigen, die unterschiedlich sind. Zum Beispiel haben wir im folgenden Stylesheet generische Stile für Level-2-Überschriften definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die anfänglich definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 1000)}}

Lassen Sie uns nun ansehen, wie der Browser Spezifität berechnet. Wir wissen bereits, dass ein Element-Selektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird jedem Selektortyp ein Punktwert zugewiesen, und das Summieren dieser Punkte ergibt das Gewicht des jeweiligen Selektors, das dann gegen andere potenzielle Treffer bewertet werden kann.

Der Grad der Spezifität eines Selektors wird anhand von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, KLASSEN- und ELEMENT-Spalten in der Hunderter-, Zehner- und Einerstelle betrachtet werden können:

- **Identifikatoren**: Zählen Sie eins in dieser Spalte für jeden ID-Selektor, der im gesamten Selektor enthalten ist.
- **Klassen**: Zählen Sie eins in dieser Spalte für jeden Klassen-Selektor, Attributselektor oder Pseudo-Klasse, die im gesamten Selektor enthalten ist.
- **Elemente**: Zählen Sie eins in dieser Spalte für jeden Element-Selektor oder Pseudo-Element, das im gesamten Selektor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) (`+`, `>`, `~`, ' '), und der Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die Negierung ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die passt-alle ([`:is()`](/de/docs/Web/CSS/:is)) Pseudo-Klassen, und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst erhöhen nicht die Spezifität, aber ihre Parameter oder verschachtelten Regeln tun es. Das Spezifitätsgewicht, das jede dieser Aktionen zum Spezifitätsalgorithmus beiträgt, ist das Spezifitätsgewicht des Selektors im Parameter oder in der verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Ihnen den Einstieg zu erleichtern. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir angegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamte Spezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ------------------ |
| `h1`                                      | 0               | 0       | 1        | 0-0-1              |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3              |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2              |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0              |
| `button:not(#mainBtn, .cta)`              | 1               | 0       | 1        | 1-0-1              |

Bevor wir weitermachen, lassen Sie uns ein Beispiel in Aktion betrachten.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 800)}}

Was passiert hier? Zunächst einmal interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel angegeben.

- Die ersten beiden Selektoren konkurrieren um die Hintergrundfarbe des Links. Der zweite gewinnt und färbt den Hintergrund blau, weil er in der Kette einen zusätzlichen ID-Selektor hat: Seine Spezifität beträgt 2-0-1 im Vergleich zu 1-0-1.
- Selektoren 3 und 4 konkurrieren um die Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, obwohl er einen Selektor weniger hat, wird der fehlende Selektor durch einen Klassen-Selektor ausgetauscht, der mehr Gewicht hat als unendlich viele Element-Selektoren. Die gewinnende Spezifität beträgt 1-1-3 im Vergleich zu 1-0-4.
- Selektoren 5–7 konkurrieren um die Randgestaltung des Links beim Hover. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifizität von 0-2-3 im Vergleich zu 0-2-4; er hat einen Element-Selektor weniger in der Kette. Selektor 7 jedoch übertrifft sowohl Selektor 5 als auch Selektor 6, weil er die gleiche Anzahl von Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element wurde gegen einen Klassen-Selektor ausgetauscht. So beträgt die gewinnende Spezifizität 0-3-3 gegen 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifizitätsniveau, das nicht durch Selektoren mit niedrigeren Spezifizitätsleveln überschrieben werden kann. Zum Beispiel könnten _eine Million_ **Klassen**-Selektoren zusammen das Spezifizitätsniveau von _einem_ **ID**-Selektor nicht überschreiben.
>
> Die beste Methode, um die Spezifizität zu bewerten, ist, die Spezifizitätslevel einzeln von der höchsten zur niedrigsten zu bewerten, wenn nötig. Nur wenn eine Krawatte zwischen Selektor-Punktzahlen innerhalb einer Spezifizitätsspalte besteht, müssen Sie die nächste Spalte herunter bewerten; andernfalls können Sie die niedrigeren Spezifität Selektoren ignorieren, da sie niemals die höheren Spezifität Selektoren überschreiben können.

### Inline-Stile

Inline-Stile, das sind die Stil-Deklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 interpretiert werden; immer mehr als jede andere Spezifizität, unabhängig davon, wie viele ID-Selektoren in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überregeln, sogar Inline-Stile – das `!important`-Flag. Sie sollten jedoch sehr vorsichtig damit sein, es zu verwenden. Dieses Flag wird verwendet, um ein einzelnes Eigenschaft/
Wert-Paar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade überschrieben werden, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie darauf in den Codes anderer stoßen. **Wir empfehlen jedoch dringend, dass Sie es nur verwenden, wenn Sie wirklich müssen.** Das `!important`-Flag verändert die normalen Funktionsweise der Kaskade, was das Debuggen von CSS-Problemen wirklich schwer machen kann, insbesondere in einem großen Stylesheet.

Probieren Sie dieses Beispiel aus, in dem wir zwei Absätze haben, von denen einer eine ID hat.

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 800)}}

Lassen Sie uns dies durchgehen, um zu sehen, was passiert – versuchen Sie einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie es schwer haben, es zu verstehen:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, aber die {{cssxref("background-color")}} nicht. Warum? Wirklich, alle drei sollten sicherlich angewendet werden, da normalerweise spätere Regeln in der Quellenreihenfolge frühere Regeln überschreiben.
2. Die obigen Regeln gewinnen jedoch, da Klassen-Selektoren eine höhere Spezifität als Element-Selektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes/class) von `better`, aber das zweite hat eine [`id`](/de/docs/Web/HTML/Global_attributes/id) von `winning` ebenfalls. Da IDs eine _sogar höhere_ Spezifität haben als Klassen (Sie können jeweils nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit derselben Klasse – ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und die 1px schwarze Umrandung auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keine Umrandung erhält, wie von der Klasse spezifiziert.
4. Das zweite Element _bekommt_ die rote Hintergrundfarbe, aber keine Umrandung. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration über den `border`-Wert in der vorherigen Regel gewinnt, auch wenn der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Der einzige Weg, eine wichtige Deklaration zu überschreiben, besteht darin, eine weitere wichtige Deklaration mit derselben Spezifität später in der Quellenreihenfolge oder eine mit höherer Spezifität, oder eine wichtige Deklaration in einer früheren Kaskadenschicht (wir haben die Kaskadenschichten noch nicht behandelt) einzubinden.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Einfluss der CSS-Position

Schließlich ist es wichtig zu beachten, dass die Vorrangigkeit einer CSS-Deklaration davon abhängt, in welchem Stylesheet und in welcher Kaskadenschicht sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets einrichten können, um die Stile des Entwicklers zu überschreiben. Zum Beispiel könnte ein sehbehinderter Benutzer möchten, die Schriftgröße auf allen Webseiten, die er besucht, auf das Doppelte der normalen Größe einstellen, um das Lesen zu erleichtern.

Es ist auch möglich, Entwickler-Stile in Kaskadenschichten zu deklarieren: Sie können nicht-geschichtete Stile Stile Erklärung in Schichten überschreiben oder Sie können Stile erklären, die in späteren Schichten Stile übersteuern, die in früheren deklarierten Schichten erklärt werden. Zum Beispiel können Sie als Entwickler ein Drittanbieter-Stylesheet nicht bearbeiten, aber Sie können das externe Stylesheet in eine Kaskadenschicht importieren, so dass alle Ihre Stile die importierten Stile leicht überschreiben können, ohne sich um die Spezifität des Drittanbieter-Sleektors zu kümmern.

### Reihenfolge der überschreibenden Deklarationen

Konflikte, die sich resultiernde Deklarationen, werden in der folgenden Reihenfolge angewendet, wobei spätere die früheren überschreiben:

1. Deklarationen in Benutzeragenten-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile eingestellt sind).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autoren-Stylesheets (das sind die Stile, die von uns, den Webentwicklern, festgelegt werden).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzeragenten-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Prioritäten wird für Stile mit dem `!important`-Flag umgekehrt. Es macht Sinn, dass Stylesheets von Webentwicklern die von Nutzern übersteuern, damit das Design beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile von Webentwicklern zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem `!important` in ihren Regeln verwendet wird.

### Reihenfolge der Kaskadenschichten

Obwohl [Kaskadenschichten](/de/docs/Web/CSS/@layer) ein fortgeschrittenes Thema ist und Sie diese Funktion möglicherweise nicht sofort verwenden, ist es wichtig zu verstehen, wie Schichten kaskadieren.

Wenn Sie CSS in Kaskadenschichten deklarieren, wird die Vorrangigkeit durch die Reihenfolge bestimmt, in der die Schichten deklariert werden. CSS-Stile, die außerhalb einer Schicht deklariert werden, werden zusammen kombiniert, in der Reihenfolge, in der diese Stile deklariert werden, in eine unbenannte Schicht, als ob es die zuletzt deklarierte Schicht wäre. Mit Konkurrenz regelmäßigen (nicht wichtigen) Stilen, nehmen spätere Schichten Vorrang vor früher definierten Schichten. Für Stile, die mit `!important` gekennzeichnet sind, jedoch wird die Reihenfolge umgekehrt, wobei wichtige Stile in früheren Schichten Vorrang vor wichtigen in späteren Schichten oder außerhalb einer Schicht deklarierten Stilen haben. Inline-Stile haben Vorrang vor allen Autoren-Stilen, unabhängig von der Schicht.

Wenn Sie mehrere Stilblöcke in verschiedenen Schichten haben, die konkurrierende Werte für eine Eigenschaft auf einem einzigen Element bereitstellen, bestimmt die Reihenfolge, in der die Schichten deklariert werden, die Vorrangigkeit. Spezifität zwischen Schichten spielt keine Rolle, aber Spezifität innerhalb einer einzelnen Schicht schon.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-layers.html", '100%', 800)}}

Lassen Sie uns ein paar Dinge aus dem obigen Beispiel diskutieren, um zu verstehen, was passiert. Zwei Schichten wurden deklariert, `firstLayer` und `secondLayer`, in dieser Reihenfolge. Obwohl die Spezifität in `secondLayer` die höchste ist, werden keine Eigenschaften aus dieser Deklaration verwendet. Warum? Weil nicht-geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, unabhängig von der Spezifität, und wichtige geschichtete Stile Vorrang vor wichtigen Stilen haben, die in späteren Schichten oder außerhalb von Schichten deklariert sind, ebenfalls unabhängig von der Spezifität.

Wenn Sie die erste Zeile des CSS in diesem Beispiel ändern, um `@layer secondLayer, firstLayer;` zu lesen, werden Sie die Reihenfolge der Schichtdeklaration ändern, und alle wichtigen Stile aus `firstLayer` werden zu ihren jeweiligen Werten in `secondLayer` geändert.

### Nähe des Scopings

Ein weiteres fortgeschrittenes Thema, das Sie möglicherweise nicht sofort verwenden, aber zukünftig verstehen müssen, ist {{CSSxRef("@scope")}}. Dies ist eine [At-Regel](/de/docs/Web/CSS/At-rule), mit der Sie einen Block von Regeln erstellen können, die nur auf einen bestimmten Abschnitt des HTMLs auf Ihrer Seite angewendet werden. Beispielsweise können Sie Stile angeben, die nur auf {{htmlelement("img")}}-Elemente angewendet werden, wenn sie in Elemente mit einer `feature`-Klasse verschachtelt sind:

```css
@scope (.feature) {
  img {
    border: 2px solid black;
    display: block;
  }
}
```

**Nähe des Scopings** ist der Mechanismus, der Konflikte zwischen gescope-Elementen löst. Die Nähe des Scopings besagt, dass, wenn zwei Scopes widersprüchliche Stile haben, der Stil mit der kleinsten Anzahl an Sprüngen den DOM-Baum-Hierarchie bis zur Scope-Wurzel gewinnt. Siehe [Wie Scope-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

> [!NOTE]
> Die Nähe des Scopings überragt die Quellenreihenfolge, wird jedoch von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) übersteuert.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu prüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen. Als nächstes werden wir einen tieferen Blick auf [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) werfen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, keine Sorge! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben, und es ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen, diesen Artikel mehrmals zu lesen, während Sie mit dem Kurs fortfahren, und immer daran zu denken.

Kommen Sie darauf zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}
