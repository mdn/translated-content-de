---
title: Cascade, Spezifität und Vererbung
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Auch wenn das Durcharbeiten dieser Lektion zunächst weniger relevant und vielleicht etwas theoretischer als andere Teile des Kurses erscheint, erspart Ihnen das Verständnis dieser Konzepte später viel Ärger! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu durcharbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a>, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a>, HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a>), und eine Vorstellung davon, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um über die Kaskade und Spezifität zu lernen und wie Vererbung in CSS funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Konfliktregelungen

CSS steht für **Cascading Style Sheets** und das erste Wort _Cascading_ ist unglaublich wichtig zu verstehen — das Verhalten der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, von dem Sie dachten, es sollte auf ein Element angewendet werden, nicht funktioniert. Oft liegt das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. Die [**Kaskade**](/de/docs/Web/CSS/Cascade) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/Specificity) sind Mechanismen, die steuern, welche Regel bei einem solchen Konflikt angewendet wird. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenfalls bedeutend ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte vom übergeordneten Element des aktuellen Elements erben und andere nicht. Dies kann ebenfalls unerwartetes Verhalten verursachen.

Lassen Sie uns mit einem kurzen Blick auf die wichtigen Dinge beginnen, mit denen wir es zu tun haben, dann sehen wir uns jedes einzeln an und wie sie miteinander und Ihrem CSS interagieren. Dies können anfangs schwierig verständliche Konzepte sein. Mit mehr Übung beim Schreiben von CSS wird Ihnen die Funktionsweise deutlicher.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Cascade) — auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung, die Kaskadenschicht und die Reihenfolge der CSS-Regeln eine Rolle spielen. Wenn zwei Regeln aus derselben Kaskadenschicht gelten und beide die gleiche Spezifität haben, wird die im Stylesheet zuletzt definierte verwendet.

Im untenstehenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird schließlich blau eingefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität tragen, aber die letzte in der Quellreihenfolge gewinnt.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-simple.html", '100%', 500)}}

### Spezifität

[Spezifität](/de/docs/Web/CSS/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Style-Blöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und auf dasselbe Element abzielen, entscheidet die Spezifität über den angewendeten Eigenschaftswert. Die Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Elementselektor ist weniger spezifisch; er wird alle Elemente dieses Typs auf einer Seite auswählen, also hat er weniger Gewicht. Pseudoelement-Selektoren haben die gleiche Spezifität wie normale Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, also hat er mehr Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird schließlich rot eingefärbt, weil der Klassen-Selektor `main-heading` seiner Regel eine höhere Spezifität gibt. Auch wenn die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quellreihenfolge erscheint, wird die mit der höheren Spezifität, definiert durch den Klassenselektor, angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-simple.html", '100%', 600)}}

Wir werden den Spezifitätsalgorithmus später genauer erklären.

### Vererbung

Vererbung muss in diesem Zusammenhang auch verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von deren Kindelementen geerbt, andere nicht.

Beispielsweise, wenn Sie eine `color` und `font-family` auf ein Element setzen, wird jedes darin enthaltene Element ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerte auf sie angewendet.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance-simple.html", '100%', 650)}}

Einige Eigenschaften erben nicht — zum Beispiel, wenn Sie eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten alle seine Nachkommen nicht eine Breite von 50% der Breite ihres übergeordneten Elements. Wenn dies der Fall wäre, wäre CSS sehr frustrierend in der Anwendung!

> [!NOTE]
> Auf den CSS-Eigenschaftsreferenzseiten auf MDN finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich, ob sie geerbt wird oder nicht. Siehe den Abschnitt "Formale Definition" der [Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

## Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal ein bisschen kompliziert erscheinen, aber Sie werden sich daran erinnern, wenn Sie mit CSS vertrauter werden, und Sie können immer die Details nachschlagen, wenn Sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

Das folgende Video zeigt, wie Sie die Firefox DevTools verwenden können, um die Kaskade, Spezifität und mehr einer Seite zu inspizieren:

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## Verstehen der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen verschachtelter ungeordneter Listen darin. Wir haben dem äußeren `<ul>` eine Umrandung, Padding und Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten und auch auf die indirekten Kinder angewendet — die unmittelbaren Kind-<li>s und die in der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder geerbt.

{{EmbedGHLiveSample("css-examples/learn/cascade/inheritance.html", '100%', 1100)}}

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn eine Umrandung von den Kindern in diesem Listenbeispiel geerbt würde, würde jede einzelne Liste und Listeneintrag eine Umrandung erhalten — wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl auf jeder CSS-Eigenschaftsseite aufgeführt ist, ob die Eigenschaft vererbt wird oder nicht, können Sie dies oft intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Vererbung steuern

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf denselben Wert wie der seines übergeordneten Elements. Effektiv "aktiviert" dies die Vererbung.
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standardstyling des Browsers zurück, anstatt auf die für diese Eigenschaft angewendeten Standards. Dieser Wert wirkt oft wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass wenn die Eigenschaft von Natur aus vererbt wird, es wie `inherit` wirkt, andernfalls wirkt es wie `initial`.

> [!NOTE]
> Weitere Informationen zu jedem dieser Punkte und deren Funktionsweise finden Sie unter [Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types).

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das folgende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Das Spielen mit Code ist wirklich der beste Weg, um ein besseres Verständnis von HTML und CSS zu erlangen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet, die die Farbe des verschachtelten `<a>`-Elements auf `inherit` setzt. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Standard des Browsers für Links, welcher blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, grün, verwendet.
3. Welche der Links werden die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nach dem Lesen des nächsten Abschnitts über das Zurücksetzen aller Eigenschaften, kehren Sie zurück und ändern die `color`-Eigenschaft zu `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile ist und einen Punkt hat. Welche Eigenschaften, denken Sie, wurden vererbt?

{{EmbedGHLiveSample("css-examples/learn/cascade/keywords.html", '100%', 800)}}

### Alle Eigenschaftswerte zurücksetzen

Die CSS-Kurzeneigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einem dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Sein Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Dies ist eine bequeme Möglichkeit, gemachte Stiländerungen rückgängig zu machen, damit Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen vornehmen.

Im untenstehenden Beispiel haben wir zwei Zitate. Das erste hat Styling direkt auf das Zitatelement angewendet. Das zweite hat eine Klasse, die auf das Zitatelement angewendet wird, die den Wert von `all` auf `unset` setzt.

{{EmbedGHLiveSample("css-examples/learn/cascade/all.html", '100%', 800)}}

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie, welcher Unterschied besteht.

## Die Kaskade verstehen

Wir verstehen nun, dass Vererbung der Grund ist, warum ein Absatz, der tief in der Struktur Ihres HTMLs eingebettet ist, die gleiche Farbe hat wie das auf den Body angewendete CSS. Aus den Einführungslektionen haben wir ein Verständnis dafür, wie man das auf etwas angewendete CSS an jeder Stelle im Dokument ändern kann — sei es durch Zuweisen von CSS zu einem Element oder durch Erstellen einer Klasse. Nun werden wir uns ansehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei zu berücksichtigende Faktoren, in aufsteigender Bedeutung aufgelistet. Spätere überstimmen frühere:

1. **Quellordnung**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, was für CSS angewendet werden soll.

### Quellordnung

Wir haben bereits gesehen, wie die Quellordnung für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die genau das gleiche Gewicht hat, dann gewinnt die, die zuletzt im CSS kommt. Sie können sich das so vorstellen: die Regel, die näher am Element selbst ist, überschreibt die vorherigen, bis die letzte gewinnt und das Element stylen darf.

Die Quellordnung spielt nur dann eine Rolle, wenn das Spezifitätsgewicht der Regeln gleich ist, sehen wir uns also die Spezifität an:

### Spezifität

Sie werden häufig auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige gewählt, die das Element stylen sollte.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, also werden die in der Klassenstilblock definierten Eigenschaften diejenigen überschreiben, die im Elementstilblock definiert sind.

Hierbei ist zu beachten, dass, obwohl wir an Selektoren und die Regeln denken, die auf den Text oder das Element angewendet werden, die sie auswählen, nicht die ganze Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert wurden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, allgemeine Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die ursprünglich definierten Werte werden auf alle Überschriften angewendet, dann die spezifischeren Werte auf die Überschriften mit den Klassen.

{{EmbedGHLiveSample("css-examples/learn/cascade/mixing-rules.html", '100%', 1000)}}

Schauen wir uns nun an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Grunde wird verschiedenen Selektortypen ein Wert in Punkten zugewiesen, und die Addition dieser Punkte gibt Ihnen das Gewicht des jeweiligen Selektors, das dann gegen andere mögliche Übereinstimmungen bewertet werden kann.

Der Grad der Spezifität eines Selektors wird mit Hilfe von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID, KLASSE und ELEMENT in den Hundertern, Zehnern und Einern gedacht werden können:

- **Identifier**: Vergibt eins in dieser Kategorie für jeden ID-Selektor im gesamten Selektor.
- **Klassen**: Vergibt eins in dieser Kategorie für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im gesamten Selektor enthalten ist.
- **Elemente**: Vergibt eins in dieser Kategorie für jeden Elementselektor oder Pseudoelement im gesamten Selektor.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) (`+`, `>`, `~`, ' '), und der Spezifitätsanpassungs-Selektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Der Negationsselektor ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die Pseudoklassen ([`:is()`](/de/docs/Web/CSS/:is)) selbst bringen keine zusätzliche Spezifität, aber ihre Parameter oder verschachtelte Regeln tun es. Das Spezifitätsgewicht, das jeder von ihnen zum Spezifitätsalgorithmus beiträgt, ist das Spezifitätsgewicht des Selektors im Parameter oder in der verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Ihnen ein Gefühl zu geben. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität erhalten haben, die wir ihnen gegeben haben. Wir haben noch keine Selektoren im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifier | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | ---------- | ------- | -------- | ---------------- |
| `h1`                                      | 0          | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0          | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0          | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1          | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta)`              | 1          | 0       | 1        | 1-0-1            |

Bevor wir weitermachen, werfen wir einen Blick auf ein Beispiel in Aktion.

{{EmbedGHLiveSample("css-examples/learn/cascade/specificity-boxes.html", '100%', 800)}}

Was passiert hier? Zuerst einmal interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte als Kommentar vor jeder von ihnen eingefügt.

- Die ersten beiden Selektoren konkurrieren um das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, weil er eine zusätzliche ID im Selektor hat: Seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, obwohl er einen Elementselektor weniger hat, wurde der fehlende Selektor durch einen Klassenselektor ersetzt, der mehr Gewicht hat als unendlich viele Elementselektoren. Die gewinnende Spezifität ist 1-1-3 vs. 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling des Linkrandes beim Hovern. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 vs. 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 schlägt jedoch beide Selektoren 5 und 6, weil er die gleiche Anzahl von Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element wurde durch einen Klassenselektor ersetzt. Somit ist die gewinnende Spezifität 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsstufe, die nicht von Selektoren mit niedrigerer Spezifitätsstufe überschrieben werden kann. Zum Beispiel würde eine _Million_ **Klassen**-Selektoren kombiniert nicht in der Lage sein, die Spezifität eines _einzigen_ **ID**-Selektors zu überschreiben.
>
> Die beste Methode zur Bewertung der Spezifität besteht darin, die Spezifizitätsstufen einzeln von der höchsten zu bewerten und nur dann zur nächsten Stufe überzugehen, wenn nötig. Nur wenn ein Gleichstand zwischen den Selektorenwerten innerhalb einer Spezifizitätsspalte besteht, müssen Sie die nächste Spalte nach unten bewerten, andernfalls können Sie die Selektoren mit niedrigerer Spezifität ignorieren, da sie die Selektoren mit höherer Spezifität niemals überschreiben können.

### Inline-Stile

Inline-Stile, das heißt, die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes#style) Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 betrachtet werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um all diese Berechnungen zu überstimmen, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch beim Gebrauch vorsichtig sein. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts- und Wert-Paar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade einschließlich normaler Inline-Stile übergangen werden.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie darauf in fremdem Code stoßen. **Wir empfehlen jedoch dringend, es nicht zu verwenden, es sei denn, Sie müssen unbedingt.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, sodass es das Debuggen von CSS-Problemen wirklich schwer machen kann, besonders in einem großen Stylesheet.

Sehen Sie sich dieses Beispiel an, bei dem wir zwei Absätze haben, von denen einer eine ID hat.

{{EmbedGHLiveSample("css-examples/learn/cascade/important.html", '100%', 800)}}

Sehen wir uns an, was hier passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie es schwer zu verstehen finden:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, aber {{cssxref("background-color")}} nicht. Warum? Eigentlich sollten alle drei angewendet werden, weil Regeln später in der Quellordnung gener

ell die früheren überschreiben. 2. Die Regeln darüber gewinnen jedoch, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben. 3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes#class) von `better`, aber das zweite hat auch eine [`id`](/de/docs/Web/HTML/Global_attributes#id) von `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben (man kann nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit derselben Klasse — ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und der 1px schwarze Rand auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand bekommt, wie durch die Klasse spezifiziert. 4. Das zweite Element bekommt _tatsächlich_ die rote Hintergrundfarbe, aber keinen Rand. Warum? Wegen des `!important`-Flags in der zweiten Regel. Wenn Sie das `!important`-Flag nach dem `border: none` hinzufügen, bedeutet dies, dass diese Deklaration die `border`-Eigenschaft im vorherigen Regelblock gewinnen wird, auch wenn der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine weitere wichtige Deklaration mit derselben Spezifität später in der Quellordnung einzuschließen oder eine mit höherer Spezifität einzubeziehen oder eine wichtige Deklaration in einer vorherigen Kaskadenschicht (wir haben Kaskadenschichten noch nicht behandelt) einzufügen.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber nutzen Sie es wirklich nur, wenn es unvermeidbar ist.

## Der Effekt der CSS-Lokation

Schließlich ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet und welcher Kaskadenschicht sie spezifiziert wird.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Stile des Entwicklers zu überschreiben. Beispielsweise könnte ein sehbehinderter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe festlegen, um das Lesen zu erleichtern.

Es ist auch möglich, Entwicklerstile in Kaskadenschichten zu deklarieren: Sie können nicht geschichtete Stile verwenden, um Stile zu überschreiben, die in Schichten deklariert sind, oder Sie können Stile in später deklarierten Schichten verwenden, um Stile aus früher deklarierten Schichten zu überschreiben. Zum Beispiel können Sie als Entwickler möglicherweise ein Drittanbieter-Stylesheet nicht bearbeiten, aber Sie können das externe Stylesheet in eine Kaskadenschicht importieren, sodass all Ihre Stile die importierten Stile leicht überschreiben können, ohne sich um die Spezifität der Drittanbieter-Selektoren zu kümmern.

### Reihenfolge der überschreibenden Deklarationen

Widersprüchliche Deklarationen werden in folgender Reihenfolge angewendet, wobei spätere Deklarationen die früheren überschreiben:

1. Deklarationen in Stylesheets des Benutzeragents (z. B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die ein Benutzer festlegt).
3. Normale Deklarationen in Autorenstylesheets (diese sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autorenstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Stylesheets des Benutzeragents.

> [!NOTE]
> Die Reihenfolge der Priorität ist für mit `!important` gekennzeichnete Stile umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die der Benutzer überschreiben, damit das Design so gehalten werden kann, wie beabsichtigt; jedoch haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

### Reihenfolge von Kaskadenschichten

Auch wenn [Kaskadenschichten](/de/docs/Web/CSS/@layer) ein fortgeschrittenes Thema sind und Sie diese Funktion nicht sofort verwenden, ist es wichtig zu verstehen, wie Schichten kaskadieren.

Wenn Sie CSS in Kaskadenschichten deklarieren, wird die Vorrangordnung durch die Reihenfolge bestimmt, in der die Schichten deklariert werden. CSS-Stile, die außerhalb einer Schicht deklariert sind, werden in einem unbenannten Layer zusammengefasst, in der Reihenfolge, in der diese Stile deklariert sind, als ob es der zuletzt deklarierte Layer wäre. Bei konkurrierenden normalen (nicht wichtigen) Stilen haben spätere Ebenen Vorrang vor früher definierten Schichten. Für mit `!important` gekennzeichnete Stile jedoch ist die Reihenfolge umgekehrt, wobei wichtige Stile in früheren Schichten Vorrang vor wichtigen Stilen haben, die in späteren Schichten oder außerhalb einer Schicht deklariert sind. Inline-Stile haben Vorrang vor allen Autorenstilen, unabhängig von der Schicht.

Wenn Sie mehrere Style-Blöcke in verschiedenen Ebenen haben, die konkurrierende Werte für eine Eigenschaft an einem einzelnen Element bereitstellen, bestimmt die Reihenfolge, in der die Schichten deklariert werden, den Vorrang. Spezifität zwischen Schichten spielt keine Rolle, aber die Spezifität innerhalb einer einzigen Schicht tut dies.

{{EmbedGHLiveSample("css-examples/learn/cascade/cascade-layers.html", '100%', 800)}}

Lassen Sie uns ein paar Dinge aus dem obigen Beispiel besprechen, um zu verstehen, was passiert. Zwei Schichten wurden deklariert, `firstLayer` und `secondLayer`, in dieser Reihenfolge. Auch wenn die Spezifität in `secondLayer` die höchste ist, werden keine der Deklarationen aus diesem Block verwendet. Warum? Weil nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, unabhängig von der Spezifität, und wichtige geschichtete Stile Vorrang vor wichtigen Stilen haben, die in späteren Schichten oder außerhalb einer Schicht deklariert sind, ebenfalls unabhängig von der Spezifität.

Wenn Sie die erste Zeile der CSS in diesem Beispiel so ändern, dass sie `@layer secondLayer, firstLayer;` lautet, ändern Sie die Deklarationsreihenfolge der Schichten, und alle wichtigen Stile aus `firstLayer` werden in ihre entsprechenden Werte in `secondLayer` geändert.

### Nähe des Geltungsbereichs

Ein weiteres fortgeschrittenes Thema, das Sie möglicherweise nicht sofort verwenden, aber in der Zukunft verstehen müssen, ist {{CSSxRef("@scope")}}. Dies ist eine [At-Regel](/de/docs/Web/CSS/At-rule), mit der Sie einen Block von Regeln erstellen können, der nur auf einen bestimmten Abschnitt des HTMLs auf Ihrer Seite angewendet wird. Beispielsweise können Sie Stile angeben, die nur auf {{htmlelement("img")}}-Elemente angewendet werden, wenn diese in Elemente verschachtelt sind, die eine `feature`-Klasse haben:

```css
@scope (.feature) {
  img {
    border: 2px solid black;
    display: block;
  }
}
```

**Nähe des Geltungsbereichs** ist der Mechanismus, der Konflikte zwischen scoped-Elementen löst. Nähet des Geltungsbereichs besagt, dass, wenn zwei Bereiche widersprüchliche Stile haben, der Stil mit der kleinsten Anzahl von Schritten im DOM-Baum bis zur Wurzel des Geltungsbereichs gewinnt. Weitere Informationen finden Sie unter [Wie `@scope` Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).

> [!NOTE]
> Nähe des Geltungsbereichs überlagert die Quellordnung, wird aber von anderen, höherprio

ritären Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) überlagert.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um sicherzustellen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie haben begonnen, sich mit den grundlegenden Mechaniken von CSS vertraut zu machen. Als nächstes werfen wir einen tieferen Blick auf [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers).

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben und ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen, dass Sie zu diesem Artikel ein paar Mal zurückkehren, während Sie den Kurs fortsetzen, und darüber nachdenken.

Kehren Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}
