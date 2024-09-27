---
title: Cascade, Spezifität und Vererbung
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}

Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS — der Kaskade, der Spezifität und der Vererbung — zu entwickeln, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Während das Durcharbeiten dieser Lektion vielleicht nicht sofort relevant erscheint und etwas akademischer anmutet als andere Teile des Kurses, wird Sie das Verständnis dieser Konzepte später vor vielen Problemen bewahren! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu bearbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS-Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Mehr über die Kaskade und Spezifität zu lernen und wie Vererbung in CSS funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Konflikte zwischen Regeln

CSS steht für **Cascading Style Sheets**, und das erste Wort _Kaskade_ ist unglaublich wichtig zu verstehen — die Art und Weise, wie die Kaskade funktioniert, ist entscheidend für das Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Sie auf ein Element anwenden wollten, nicht funktioniert. Oft liegt das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. Die [**Kaskade**](/de/docs/Web/CSS/Cascade) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt besteht. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenfalls bedeutsam ist hier das Konzept der [**Vererbung**](/de/docs/Web/CSS/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte übernehmen, die auf dem übergeordneten Element des aktuellen Elements festgelegt sind, während andere dies nicht tun. Auch dies kann ein Verhalten verursachen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns zunächst einen kurzen Blick auf die wichtigsten Dinge werfen, mit denen wir es zu tun haben, dann werden wir uns jedes Einzelne ansehen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Themen können zunächst etwas kompliziert erscheinen, aber je mehr Sie CSS schreiben, desto offensichtlicher wird Ihnen der Ablauf.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Cascade) — auf einer sehr einfachen Ebene bedeutet das, dass der Ursprung, die Kaskadenschicht und die Reihenfolge der CSS-Regeln eine Rolle spielen. Wenn zwei Regeln aus derselben Kaskadenschicht angewendet werden und beide die gleiche Spezifität haben, wird die im Stylesheet zuletzt definierte Regel verwendet.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird schließlich blau gefärbt. Das liegt daran, dass beide Regeln von derselben Quelle stammen, einen identischen Element-Selektor haben und daher dieselbe Spezifität aufweisen, aber die zuletzt in der Quellreihenfolge stehende Regel gewinnt.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 500)}}

### Spezifität

[Spezifität](/de/docs/Web/CSS/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Style-Blöcke verschiedene Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und auf dasselbe Element abzielen, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Element-Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, und hat daher weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie normale Element-Selektoren.
- Ein Klassen-Selektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird rot gefärbt, weil der Klassen-Selektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Auch wenn die Regel mit dem `<h1>`-Element-Selektor weiter unten in der Quellreihenfolge erscheint, wird die mit der höheren Spezifität, definiert durch den Klassen-Selektor, angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 600)}}

Wir werden den Spezifitätsalgorithmus später näher erklären.

### Vererbung

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden — einige CSS-Eigenschaftswerte, die für übergeordnete Elemente festgelegt sind, werden von ihren Kindelementen geerbt, andere nicht.

Beispielsweise, wenn Sie eine `color` und eine `font-family` für ein Element festlegen, werden alle darin enthaltenen Elemente ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftwerte zugewiesen.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 650)}}

Einige Eigenschaften werden nicht vererbt — wenn Sie beispielsweise eine {{cssxref("width")}} von 50% für ein Element festlegen, erhalten alle seine Nachkommen keine Breite von 50% der Breite ihres Elternteils. Wäre dies der Fall, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den Referenzseiten der MDN-CSS-Eigenschaften finden Sie ein technisches Informationsfeld namens "Formale Definition", in dem eine Reihe von Datenpunkten zu dieser Eigenschaft aufgelistet sind, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

## Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern gemeinsam, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden sie anfangen zu erinnern, wenn Sie mit CSS erfahrener werden, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

Das folgende Video zeigt, wie Sie die Firefox-DevTools verwenden können, um die Kaskade, Spezifität und mehr auf einer Seite zu inspizieren:

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## Verständnis der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen. Wir haben dem äußeren `<ul>` eine Umrandung, ein Padding und eine Schriftfarbe gegeben.

Die Eigenschaft `color` ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten Kinder sowie auf die indirekten Kinder angewendet — die unmittelbaren `<li>`-Kinder und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese vererbt sich dann durch ihre Kinder.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 1100)}}

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Würde eine Umrandung in diesem Listenbeispiel von den Kindern geerbt, würden jedes einzelne Listelement und Listenelement eine Umrandung erhalten — wahrscheinlich nicht ein Effekt, den wir jemals wünschen würden!

Obwohl auf jeder CSS-Eigenschaftsseite aufgelistet ist, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stilisiert.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Legt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, so fest, dass er derselbe ist wie der des übergeordneten Elements. Im Wesentlichen "schaltet dies die Vererbung ein".
- {{cssxref("initial")}}
  - : Legt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft fest.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf die Standardstyling des Browsers zurück, anstatt auf die Standardeinstellungen der Eigenschaft. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den Wert, der in einer vorhergehenden [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde, zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Siehe [Herkunftstypen](/de/docs/Web/CSS/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und deren Funktionsweise.

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das folgende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu experimentieren ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Beispielsweise:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des eingebetteten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert es die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Browserstandard für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements verwendet, grün.
3. Welche der Links ändern die Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den folgenden Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile und mit einem Aufzählungszeichen ist. Welche Eigenschaften denken Sie, dass vererbt wurden?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 800)}}

### Zurücksetzen aller Eigenschaftswerte

Die CSS-Kurzschreibweise [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Sein Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Methode, um Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie mit neuen Änderungen beginnen.

Im untenstehenden Beispiel haben wir zwei Blockzitate. Das erste hat Styling auf das Blockquote-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockquote angewendet, die den Wert `all` auf `unset` festlegt.

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 800)}}

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie den Unterschied.

## Verständnis der Kaskade

Wir verstehen nun, dass Vererbung der Grund ist, warum ein tief in der Struktur Ihres HTML verschachtelter Absatz dieselbe Farbe hat wie die auf den Body angewendete CSS. Aus den einführenden Lektionen wissen wir, wie wir das CSS ändern können, das auf etwas an jeglichem Punkt im Dokument angewendet wird — sei es durch Zuordnung von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden nun sehen, wie Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Style-Block dieselbe Eigenschaft, jedoch mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei zu berücksichtigende Faktoren, die in zunehmender Reihenfolge der Bedeutung aufgeführt sind. Spätere überschreiben frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade wichtig ist. Haben Sie mehr als eine Regel, die genau dasselbe Gewicht haben, gewinnt die, die zuletzt im CSS steht. Sie können sich das als: Die Regel, die näher am Element selbst steht, überschreibt die früheren, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge spielt nur dann eine Rolle, wenn das Spezifitätsgewicht der Regeln dasselbe ist, also schauen wir uns die Spezifität an:

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, im Konflikt stehende Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als die Regel ausgewählt, die das Element stylen soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassen-Selektor mehr Gewicht als ein Element-Selektor, daher werden die in dem Klassen-Stilblock definierten Eigenschaften die im Element-Stilblock definierten überschreiben.

Etwas, was hier zu beachten ist, ist, dass, obwohl wir an Selektoren und die Regeln, die auf den Text oder die Komponente angewendet werden, die sie auswählen, denken, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen erklärt werden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis besteht darin, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die unterschiedlich sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Überschriften der Stufe 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zunächst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 1000)}}

Schauen wir uns nun an, wie der Browser die Spezifität berechnen wird. Wir wissen bereits, dass ein Element-Selektor eine geringe Spezifität hat und durch eine Klasse überschrieben werden kann. Im Wesentlichen wird den verschiedenen Arten von Selektoren ein Wert in Punkten zugewiesen und das Addieren dieser ergibt das Gewicht eines bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Das Maß der Spezifität eines Selektors wird unter Verwendung von drei verschiedenen Werten (oder Komponenten) ermittelt, die als IDs, KLASSEN und ELEMENTE in den Hunderten, Zehnern und Einsen des Bereichs betrachtet werden können:

- **Identifikatoren**: Zählen Sie eins in dieser Spalte für jeden ID-Selektor, der im gesamten Selektor enthalten ist.
- **Klassen**: Zählen Sie eins in dieser Spalte für jeden Klassen-Selektor, Attributselektor oder Pseudoklasse, die im gesamten Selektor enthalten sind.
- **Elemente**: Zählen Sie eins in dieser Spalte für jeden Element-Selektor oder Pseudo-Element, die im gesamten Selektor enthalten sind.

> [!NOTE]
> Der universale Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) (`+`, `>`, `~`, ' '), und der Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die Negation ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die Matches-any ([`:is()`](/de/docs/Web/CSS/:is)) Pseudoklassen und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst fügen der Spezifität nichts hinzu, aber ihre Parameter oder verschachtelten Regeln tun dies. Das Spezifitätsgewicht, welches jeder zur Spezifitätsalgorithmus

beiträgt, ist das Spezifitätsgewicht des Selektors im Parameter oder der verschachtelten Regel mit dem höchsten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta`)              | 1               | 0       | 1        | 1-0-1            |

Bevor wir fortfahren, schauen wir uns ein Beispiel an, das in Aktion zu sehen ist.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 800)}}

Also, was passiert hier? Zunächst einmal interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie sehen werden, haben wir deren Spezifitätswerte in einem Kommentar vor jeder angegeben.

- Die ersten beiden Selektoren konkurrieren über das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht den Hintergrund blau, denn er hat einen zusätzlichen ID-Selektor in der Kette: Seine Spezifität beträgt 2-0-1 gegen 1-0-1.
- Selektoren 3 und 4 konkurrieren über das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, denn obwohl er einen Selektor weniger hat, wird der fehlende Selektor gegen einen Klassen-Selektor ausgetauscht, der mehr Gewicht als unendlich viele Element-Selektoren hat. Die Gewinnspezifität beträgt 1-1-3 gegen 1-0-4.
- Selektoren 5–7 konkurrieren über das Styling der Umrandung des Links beim Hovern. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 gegen 0-2-4; er hat einen Element-Selektor weniger in der Kette. Selektor 7 hingegen schlägt beide Selektoren 5 und 6, denn er hat die gleiche Anzahl an Unterselektoren in der Kette wie Selektor 5, doch ein Element wurde gegen einen Klassen-Selektor ausgetauscht. Die gewinnende Spezifität beträgt 0-3-3 gegen 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsstufe, die nicht von Selektoren mit niedrigerer Spezifitätsstufe überschrieben werden kann. Beispielsweise könnten _eine Million_ **Klassen**-Selektoren kombiniert nicht die Spezifität eines _einzigen_ **ID**-Selektors überschreiben.
>
> Die beste Art, die Spezifität zu bewerten, besteht darin, die Spezifizitätsstufen individuell von der höchsten bis zur niedrigsten zu bewerten, falls erforderlich. Nur wenn es ein Unentschieden zwischen Selektorpunkten innerhalb einer Spezifikationsspalte gibt, müssen Sie die nächste Spalte überprüfen; andernfalls können Sie die niedriger bewerteten Selektorpunkte ignorieren, da sie niemals die höher bewerteten Selektoren überschreiben können.

### Inline-Stile

Inline-Stile, also Stil-Deklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attributs, haben Vorrang vor allen normalen Styles, egal wie spezifisch sie sind. Solche Deklarationen haben keine Selektoren, aber ihre Spezifizität kann als 1-0-0-0 verstanden werden; immer mehr als jedes andere Spezifizitätsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, mit dem Sie alle obigen Berechnungen überflüssig machen können, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts- und Wertpaar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade zu überschreiben, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute finden. **Wir empfehlen jedoch dringend, dass Sie es nicht verwenden, es sei denn, Sie müssen es absolut.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, und kann das Debugging von CSS-Problemen wirklich erschweren, insbesondere in einem großen Stylesheet.

Sehen Sie sich dieses Beispiel an, in dem wir zwei Absätze haben, von denen einer eine ID hat.

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 800)}}

Gehen wir das durch und sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie es schwer verstehen:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, die {{cssxref("background-color")}} jedoch nicht. Warum? Eigentlich sollten alle drei sicher anwenden, denn Regeln, die später in der Quellreihenfolge sind, überschreiben normalerweise frühere Regeln.
2. Die Regeln darüber gewinnen jedoch, weil Klassen-Selektoren eine höhere Spezifizität als Element-Selektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes#class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Global_attributes#id) von `winning` auch. Da IDs eine _noch höhere_ Spezifizität haben als Klassen (Sie können nur ein Element mit jeder eindeutigen ID auf einer Seite haben, viele Elemente jedoch mit derselben Klasse — ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und die 1px schwarze Umrandung beide auf das 2. Element angewendet werden, mit dem ersten Element, das die graue Hintergrundfarbe und keine Umrandung erhält, wie von der Klasse angegeben.
4. Das 2. Element _hat_ die rote Hintergrundfarbe, aber keine Umrandung. Warum? Aufgrund des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifizität aufweist.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit derselben Spezifizität später in der Quellreihenfolge zu setzen, oder eine mit höherer Spezifizität, oder eine wichtige Deklaration in einer vorhergehenden Kaskadenschicht einzuschließen (wir haben noch keine Kaskadenschichten behandelt).

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, in dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Wirkung der Lage von CSS

Abschließend ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet und in welcher Kaskadenschicht sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets einstellen, um die vom Entwickler festgelegten Styles zu überschreiben. Beispielsweise möchte ein sehbehinderter Benutzer möglicherweise die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe einstellen, um das Lesen zu erleichtern.

Es ist auch möglich, Entwicklerstile in Kaskadenschichten zu deklarieren: Sie können nicht geschichtete Stile festlegen, die Stile in Schichten überschreiben, oder Stile in späteren Schichten, die die Stile von früher erklärten Schichten überschreiben. Beispielsweise können Sie als Entwickler möglicherweise ein Drittanbieter-Stylesheet nicht bearbeiten, aber das externe Stylesheet in eine Kaskadenschicht importieren, so dass alle Ihre Stile problemlos die importierten Stile überschreiben, ohne sich um die Spezifizität von Drittanbieter-S selektoren sorgen zu müssen.

### Reihenfolge der überschreibenden Deklarationen

Widersprüchliche Deklarationen werden in folgender Reihenfolge angewendet, wobei spätere die früheren überschreiben:

1. Deklarationen in Benutzeragent-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autoren-Stylesheets (das sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzeragent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Vorrangstellung ist für Stile mit `!important` umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die Benutzer-Stylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

### Reihenfolge der Kaskadenschichten

Auch wenn [Kaskadenschichten](/de/docs/Web/CSS/@layer) ein fortgeschrittenes Thema sind und Sie diese Funktion möglicherweise nicht sofort verwenden, ist es wichtig zu verstehen, wie Schichten kaskadieren.

Wenn Sie CSS in Kaskadenschichten deklarieren, wird die Reihenfolge der Vorrangstellung durch die Reihenfolge bestimmt, in der die Schichten deklariert werden. CSS-Stiles, die außerhalb einer Schicht deklariert werden, werden als nicht benannte Schicht zusammengefügt, in der Reihenfolge, in der diese Stile deklariert werden, als ob es sich um die zuletzt deklarierte Schicht handelt. Bei konkurrierenden normalen (nicht wichtigen) Stilen haben spätere Schichten Vorrang vor zuvor definierten Schichten. Für mit `!important` gekennzeichnete Stile wird die Reihenfolge jedoch umgekehrt, wobei wichtige Stile in früheren Schichten Vorrang vor wichtigen Stilen haben, die in nachfolgenden Schichten oder außerhalb irgendeiner Schicht deklariert werden. Inline-Stile haben Vorrang vor allen Autorenstilen, egal welche Schicht.

Wenn Sie mehrere Stilblöcke in verschiedenen Schichten haben, die konkurrierende Werte für eine Eigenschaft auf ein einzelnes Element bereitstellen, bestimmt die Reihenfolge, in der die Schichten deklariert werden, die Vorrangstellung. Spezifizität zwischen Schichten spielt keine Rolle, aber Spezifizität innerhalb einer einzelnen Schicht schon.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-layers.html", '100%', 800)}}

Lassen Sie uns einige Punkte aus dem obigen Beispiel besprechen, um zu verstehen, was passiert. Zwei Schichten wurden deklariert, `firstLayer` und `secondLayer`, in genannter Reihenfolge. Auch wenn die Spezifizität in `secondLayer` die höchste ist, wird keines der deklarierten Werte verwendet. Warum? Weil nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, unabhängig von der Spezifizität, und wichtige geschichtete Stile Vorrang vor wichtigen Stilen haben, die in späteren Schichten oder außerhalb jeder Schicht deklariert werden, erneut unabhängig von der Spezifizität.

Wenn Sie die erste Zeile CSS in diesem Beispiel in `@layer secondLayer, firstLayer;` ändern, werden Sie die Schichtenerklärung ändern, und alle wichtigen Stile aus `firstLayer` werden zu ihren jeweiligen Werten in `secondLayer` geändert.

### Scoping-Proximität

Ein weiteres fortgeschrittenes Thema, das Sie möglicherweise nicht sofort verwenden, aber in Zukunft verstehen müssen, ist {{CSSxRef("@scope")}}. Dies ist eine [at-rule](/de/docs/Web/CSS/At-rule), mit der Sie einen Block von Regeln erstellen können, die nur auf einen bestimmten Unterabschnitt des HTML auf Ihrer Seite angewendet werden. Beispielsweise können Sie Stile festlegen, die nur auf {{htmlelement("img")}}-Elemente angewendet werden, wenn sie in Elemente verschachtelt sind, die eine `feature`-Klasse haben:

```css
@scope (.feature) {
  img {
    border: 2px solid black;
    display: block;
  }
}
```

**Scoping-Proximität** ist der Mechanismus, der Konflikte zwischen gesc

opten Elementen löst. Die Scoping-Proximität besagt, dass, wenn zwei Scopes konkurrierende Stile haben, der Stil mit der geringsten Anzahl an Sprüngen die DOM-Baum-Hierarchie hinauf zum Scope-Root gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

> [!NOTE]
> Die Scoping-Proximität übersteigt die Quellreihenfolge, wird aber selbst von anderen, höherrangigen Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifizität](/de/docs/Web/CSS/Specificity) übertroffen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber erinnern Sie sich noch an die wichtigsten Informationen? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann Glückwunsch — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen. Als nächstes werden wir uns eingehender mit [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) befassen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben und etwas, das selbst erfahrene Web-Entwickler manchmal schwierig finden. Wir empfehlen Ihnen, mehrmals zu diesem Artikel zurückzukehren, während Sie den Kurs fortsetzen, und weiterhin darüber nachzudenken.

Verweisen Sie auf diesen Artikel, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}
