---
title: Kaskade, Spezifität und Vererbung
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}

Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — der Kaskade, der Spezifität und der Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stilangaben gelöst werden.

Während das Durcharbeiten dieser Lektion anfangs weniger relevant und etwas akademischer erscheinen mag als andere Teile des Kurses, wird ein Verständnis dieser Konzepte Ihnen später viel Schmerz ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu bearbeiten und zu überprüfen, ob Sie die Konzepte verstehen, bevor Sie weitermachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Idee, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Kaskade und Spezifität kennenzulernen und wie Vererbung in CSS funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und das erste Wort _cascading_ ist unglaublich wichtig zu verstehen — die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, von dem Sie dachten, es sollte auf ein Element angewendet werden, nicht funktioniert. Oft liegt das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn es zu einem solchen Konflikt kommt. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenso bedeutsam ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf dem übergeordneten Element des aktuellen Elements festgelegt sind, während andere dies nicht tun. Dies kann ebenfalls zu einem Verhalten führen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns zunächst einen schnellen Blick auf die wichtigsten Dinge werfen, mit denen wir es zu tun haben, dann werden wir jeden einzelnen nacheinander betrachten und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können auf den ersten Blick schwierig zu verstehen sein. Mit mehr Übung beim Schreiben von CSS wird Ihnen die Funktionsweise klarer werden.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Cascade) — einfach ausgedrückt bedeutet dies, dass der Ursprung, die Kaskadenschicht und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln aus derselben Kaskadenschicht angewendet werden und beide die gleiche Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>`-Elements wird blau gefärbt. Dies liegt daran, dass beide Regeln von derselben Quelle stammen, denselben Elementselektor haben und daher die gleiche Spezifität tragen, aber die letzte in der Quellreihenfolge gewinnt.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 500)}}

### Spezifität

[Spezifität](/de/docs/Web/CSS/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke verschiedene Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und dasselbe Element anvisieren, entscheidet die Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors ist:

- Ein Elementselektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, sodass er weniger Gewicht hat. Pseudo-Elementselektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, sodass er mehr Gewicht hat. Attributselektoren und Pseudoklassen haben das gleiche Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der unten stehende `<h1>`-Inhalt wird rot gefärbt, da der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Auch wenn die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quellreihenfolge erscheint, wird diejenige mit der höheren Spezifität, die mit dem Klassenselektor definiert ist, angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 600)}}

Wir werden den Spezifitätsalgorithmus später erklären.

### Vererbung

Vererbung muss in diesem Kontext ebenfalls verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente angewendet werden, werden von ihren Kindelementen geerbt, andere nicht.

Wenn Sie beispielsweise eine `color` und `font-family` auf ein Element setzen, werden alle darin enthaltenen Elemente ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftartwerte zugewiesen.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 650)}}

Einige Eigenschaften werden nicht vererbt — wenn Sie beispielsweise eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten nicht alle Nachkommen eine Breite von 50% der Breite ihres Elternteils. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> In den MDN CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten über diese Eigenschaft enthält, einschließlich der Information, ob sie vererbt wird oder nicht. Siehe den [Abschnitt über die formale Definition der `color`-Eigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

## Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) bestimmen zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal ein wenig kompliziert erscheinen, aber Sie werden anfangen, sich an sie zu erinnern, je erfahrener Sie mit CSS werden, und Sie können die Details immer nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

Das folgende Video zeigt, wie Sie die Firefox DevTools verwenden können, um die Kaskade, Spezifität und mehr einer Seite zu inspizieren:

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## Verstehen der Vererbung

Beginnen wir mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen. Wir haben der äußeren `<ul>` einen Rahmen, ein Padding und eine Schriftfarbe zugewiesen.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert sowohl auf die direkten Kinder als auch auf die indirekten Kinder angewendet — die unmittelbaren `<li>`-Kinder und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und ihr eine andere Farbe zugewiesen. Diese Farbe wird dann durch ihre Kinder vererbt.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 1100)}}

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind keine geerbten Eigenschaften. Wenn ein Rahmen von den Kindern dieser Listenelemente im Beispiel vererbt würde, würde jedes einzelne Listenelement einen Rahmen erhalten — wahrscheinlich nicht ein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie dies oft intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert gestalten wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert so, dass er derselbe ist wie der des übergeordneten Elements. Dies "aktiviert" effektiv die Vererbung.
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf die Standard-Styling-Einstellung des Browsers, anstatt auf die standardmäßig angewendeten Eigenschaftseinstellungen. Dieser Wert funktioniert in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass sie, wenn die Eigenschaft von Natur aus vererbt werden soll, wie `inherit` funktioniert, andernfalls wie `initial`.

> [!NOTE]
> Siehe [Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und deren Funktionsweise.

Sehen wir uns eine Liste von Links an und erforschen, wie universelle Werte funktionieren. Das unten stehende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Das Spielen mit Code ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Beispielsweise:

1. Das zweite Listenelement hat die Klasse `my-class-1` zugewiesen. Dies setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft (in diesem Fall schwarz) und nicht den Standard des Browsers für Links, der blau ist, verwendet. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements verwendet, grün.
3. Welche der Links ändern die Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren — beispielsweise `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kommen Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und einen Aufzählungspunkt hat. Welche Eigenschaften denken Sie, wurden vererbt?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 800)}}

### Zurücksetzen aller Eigenschaftswerte

Die CSS-Kurzschreib-Eigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat Styling auf das Blockquote-Element selbst angewendet. Das zweite hat eine Klasse angewendet, die den Wert von `all` auf `unset` setzt.

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 800)}}

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie, was der Unterschied ist.

## Verständnis der Kaskade

Wir verstehen jetzt, dass Vererbung der Grund dafür ist, dass ein Absatz, der tief in der Struktur Ihres HTML verschachtelt ist, die gleiche Farbe wie das CSS erhält, das auf den Body angewendet wird. Aus den einführenden Lektionen wissen wir, wie wir das auf etwas angewendete CSS zu jedem Zeitpunkt im Dokument ändern können — sei es durch Zuweisung von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden nun betrachten, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei Faktoren zu berücksichtigen, die in aufsteigender Reihenfolge der Wichtigkeit aufgeführt sind. Spätere überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die genau das gleiche Gewicht hat, dann wird diejenige angewendet, die zuletzt im CSS steht. Sie können dies so verstehen: Die Regel, die dem Element selbst näher ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge spielt nur dann eine Rolle, wenn die Spezifitätswerte der Regeln identisch sind, also lassen Sie uns die Spezifität betrachten:

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel weiter unten im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die ursprüngliche Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher von der Browser als diejenige ausgewählt, die das Element stylen soll.

Wie wir bereits in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in dem Klassenstilblock definierten Eigenschaften die im Elementstilblock definierten überschreiben.

Es ist wichtig zu beachten, dass, obwohl wir an Selektoren und die Regeln denken, die auf den Text oder das von ihnen ausgewählte Element angewendet werden, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Beispielsweise haben wir im unten stehenden Stylesheet generische Stile für Überschriften der Stufe 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die Werte, die zunächst definiert wurden, werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 1000)}}

Schauen wir uns jetzt an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten für verschiedene Arten von Selektoren vergeben, und das Addieren dieser Punkte ergibt das Gewicht des jeweiligen Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge der Spezifität, die ein Selektor hat, wird mit drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, CLASS- und ELEMENT-Spalten in den Stellenwerten Hunderter, Zehner und Einer betrachtet werden können:

- **Identifikatoren**: Ein Punkt in dieser Spalte für jeden ID-Selektor, der innerhalb des gesamten Selektors enthalten ist.
- **Klassen**: Ein Punkt in dieser Spalte für jeden Klassen-, Attribut- oder Pseudoklassen-Selektor im gesamten Selektor.
- **Elemente**: Ein Punkt in dieser Spalte für jeden Element- oder Pseudo-Elementselektor, der im gesamten Selektor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) (`+`, `>`, `~`, ' ') und der Selektor zur Spezifitätsanpassung ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die Negation ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die Matches-Any-Pseudoklassen ([`:is()`](/de/docs/Web/CSS/:is)) und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst tragen nicht zur Spezifität bei, aber ihre Parameter oder verschachtelten Regeln tun dies. Das zur Spezifitätsalgorithmus beitragende Gewicht ist das der Parameter- oder verschachtelte Regelselektor mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen und sicherzustellen, dass Sie verstehen, warum sie die angegebene Spezifität haben. Wir haben noch keine Selektoren im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta`)              | 1               | 0       | 1        | 1-0-1            |

Bevor wir fortfahren, lassen Sie uns ein Beispiel in Aktion sehen.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 800)}}

Was passiert hier? Zuerst interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel eingefügt.

- Die ersten beiden Selektoren konkurrieren um das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, weil, obwohl er einen weniger Elementselektor hat, der fehlende Selektor gegen einen Klassenselektor ausgetauscht wird, der mehr Gewicht als unendlich viele Elementselektoren hat. Die Gewinnspezifizität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling des Rahmens des Links beim Darüberfahren. Selektor 6 verliert klar gegenüber Selektor 5 mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat einen weniger Elementselektor in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, da er die gleiche Anzahl von Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element gegen einen Klassenselektor ausgetauscht wurde. Somit ist die Gewinnspezifizität 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifitätsniveau, das nicht von Selektoren mit einem niedrigeren Spezifitätsniveau überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassenselektoren kombiniert nicht die Spezifität eines _ein_ **ID-Selektors überschreiben.
>
> Der beste Weg, die Spezifität zu bewerten, besteht darin, die Spezifitätsstufen einzeln zu bewerten, beginnend mit den höchsten und bei Bedarf zu den niedrigeren überzugehen. Nur wenn es einen Gleichstand zwischen Selektorwerten innerhalb einer Spezifitätsspalte gibt, müssen Sie die nächste Spalte bewerten. Ansonsten können Sie die weniger spezifischen Selektoren ignorieren, da sie die höher spezifischen Selektoren nie überschreiben können.

### Inline-Stile

Inline-Stile, also die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 verstanden werden; immer mehr als andere Spezifitätsgewichte, egal wie viele IDs in den Selektoren sind.

### !wichtig

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überstimmen, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig bei der Verwendung sein. Dieses Flag wird verwendet, um ein einzelnes Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, zu überschreiben.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute sehen. **Wir empfehlen jedoch dringend, dass Sie es niemals verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, sodass die Fehlersuche von CSS-Problemen besonders in einem großen Stylesheet wirklich schwierig werden kann.

Schauen Sie sich dieses Beispiel an, in dem wir zwei Absätze haben, von denen einer eine ID hat.

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 800)}}

Lassen Sie uns dies durchgehen, um zu sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die `{{cssxref("color")}}`- und `{{cssxref("padding")}}`-Werte der dritten Regel angewendet wurden, aber die `{{cssxref("background-color")}}`-Eigenschaft nicht. Warum? Eigentlich sollten doch alle drei sicher angewendet werden, da später in der Quellordnung stehende Regeln normalerweise frühere Regeln überschreiben.
2. Dennoch gewinnen die oben stehenden Regeln, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes#class) von `better`, aber das zweite hat eine [`id`](/de/docs/Web/HTML/Global_attributes#id) von `winning` ebenfalls. Da IDs eine _noch höhere_ Spezifität als Klassen haben (Sie können nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit der gleichen Klasse — ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und der 1px schwarze Rahmen auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rahmen, wie durch die Klasse vorgegeben, erhält.
4. Das zweite Element _erhält_ die rote Hintergrundfarbe, aber keinen Rahmen. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration über den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, ist das Hinzufügen einer weiteren wichtigen Deklaration mit der _gleichen Spezifität_ später in der Quellordnung oder eine mit höherer Spezifität, oder das Hinzufügen einer wichtigen Deklaration in einer vorhergehenden Kaskadenschicht (wir haben Kaskadenschichten noch nicht behandelt).

Eine Situation, in der Sie das `!important`-Flag möglicherweise verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können und wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Auswirkung des CSS-Standortes

Schließlich ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welcher Stylesheet- und Kaskadenschicht sie spezifiziert ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets setzen, um die vom Entwickler festgelegten Stile zu überschreiben. Beispielsweise könnte ein sehbehinderter Benutzer die Schriftgröße auf alle von ihm besuchten Webseiten auf das Doppelte der normalen Größe einstellen wollen, um das Lesen zu erleichtern.

Es ist auch möglich, Entwicklerstile in Kaskadenschichten zu deklarieren: Sie können festlegen, dass nicht geschichtete Stile Stile in Schichten überschreiben oder dass Stile in späteren Schichten Stile aus früher erklärten Schichten überschreiben. Beispielsweise können Sie als Entwickler ein Drittanbieter-Stylesheet importieren und alle Ihre Stile einfach die importierten Stile überschreiben lassen, ohne sich um die Spezifität von Drittanbieterselektoren zu kümmern.

### Reihenfolge von überschreibenden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere frühere überschreiben:

1. Deklarationen in Benutzeragenten-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn kein anderes Styling festgelegt ist).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autoren-Stylesheets (diese sind die Stile, die wir, die Webentwickler, festlegen).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzeragenten-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Vorrangstellung ist für mit `!important` markierte Stile umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die Benutzer-Stylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, Webentwicklerstile zu überstimmen, wie oben erwähnt, und dies kann erreicht werden, indem sie `!important` in ihren Regeln verwenden.

### Reihenfolge der Kaskadenschichten

Obwohl [Kaskadenschichten](/de/docs/Web/CSS/@layer) ein fortgeschrittenes Thema sind und Sie dieses Feature nicht sofort verwenden könnten, ist es wichtig zu verstehen, wie Schichten kaskadieren.

Wenn Sie CSS in Kaskadenschichten deklarieren, wird die Vorrangstellung durch die Reihenfolge bestimmt, in der die Schichten deklariert werden. CSS-Stile, die außerhalb einer Schicht deklariert sind, werden zusammengefasst, in der Reihenfolge, in der diese Stile deklariert werden, in eine nicht benannte Schicht, so als wäre es die zuletzt deklarierte Schicht. Bei konkurrierenden normalen (nicht wichtigen) Stilen haben die späteren Schichten Vorrang vor früher definierten Schichten. Für mit `!important` markierte Stile ist die Reihenfolge jedoch umgekehrt, wobei wichtige Stile in früheren Schichten Vorrang vor wichtigen Stilen in später erklärten Schichten oder außerhalb einer Schicht haben. Inline-Stile haben Vorrang vor allen Autorenstilen, unabhängig von der Schicht.

Wenn Sie mehrere Stilblöcke in verschiedenen Schichten haben, die konkurrierende Werte für eine Eigenschaft auf einem einzelnen Element bereitstellen, bestimmt die Reihenfolge, in der die Schichten deklariert werden, die Vorrangstellung. Die Spezifität zwischen den Schichten spielt keine Rolle, aber die Spezifität innerhalb einer einzigen Schicht tut dies.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-layers.html", '100%', 800)}}

Lassen Sie uns einige Dinge aus dem obigen Beispiel besprechen, um zu verstehen, was passiert. Zwei Schichten wurden deklariert, `firstLayer` und `secondLayer`, in dieser Reihenfolge. Obwohl die Spezifität in `secondLayer` die höchste ist, werden keine Eigenschaften aus dieser Deklaration verwendet. Warum? Weil nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, egal wie die Spezifität ist, und die wichtigen geschichteten Stile Vorrang vor wichtigen Stilen haben, die in späteren Schichten oder außerhalb einer Schicht deklariert sind, wieder unabhängig von der Spezifität.

Wenn Sie die erste Zeile des CSS in diesem Beispiel in `@layer secondLayer, firstLayer;` ändern, ändern Sie die Schichtdeklarationsreihenfolge, und alle wichtigen Stile aus `firstLayer` werden in ihre jeweiligen Werte in `secondLayer` geändert.

### Geltungsbereichsnähe

Ein weiteres fortgeschrittenes Thema, das Sie möglicherweise nicht sofort verwenden, aber in Zukunft verstehen müssen, ist {{CSSxRef("@scope")}}. Dies ist eine [at-Regel](/de/docs/Web/CSS/At-rule), die es Ihnen ermöglicht, einen Block von Regeln zu erstellen, der nur auf einen bestimmten Abschnitt des HTML auf Ihrer Seite angewendet wird. Beispielsweise können Sie Stile festlegen, die nur auf {{htmlelement("img")}}-Elemente angewendet werden, wenn sie in Elemente verschachtelt sind, die eine `feature`-Klasse haben:

```css
@scope (.feature) {
  img {
    border: 2px solid black;
    display: block;
  }
}
```

**Geltungsbereichsnähe** ist der Mechanismus, der Konflikte zwischen bereicherten Elementen auflöst. Geltungsbereichsnähe besagt, dass bei zwei Geltungsbereichen mit widersprüchlichen Stilen derjenige mit der geringsten Anzahl von Sprüngen auf der DOM-Baum-Hierarchie zur Geltungswurzel gewinnt. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte aufgelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).

> [!NOTE]
> Geltungsbereichsnähe überschreibt die Quellreihenfolge, wird jedoch von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) übergangen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen sich gemerkt haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## Zusammenfassung

Wenn Sie die meisten Punkte dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen. Als Nächstes werden wir einen tieferen Blick auf [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) werfen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben und ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, zu diesem Artikel ein paar Mal zurückzukehren, während Sie den Kurs fortsetzen, und kontinuierlich darüber nachzudenken.

Beziehen Sie sich hierauf zurück, wenn Sie anfangen, auf seltsame Probleme mit Stilen zu stoßen, die nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}
