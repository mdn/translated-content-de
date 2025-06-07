---
title: Ebenen der Cascade
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Diese Lektion zielt darauf ab, Ihnen [Ebenen der Cascade](/de/docs/Web/CSS/@layer) vorzustellen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es zunächst weniger relevant und akademischer erscheinen, sich mit dieser Lektion auseinanderzusetzen als mit anderen Teilen des Kurses. Dennoch ist es hilfreich, die Grundlagen von Cascade-Ebenen zu verstehen, sollte man ihnen in Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis der Cascade-Ebenen und das Wissen, wie man ihre Macht nutzt, Ihnen helfen, Schmerzen beim Verwalten einer Codebasis mit CSS von verschiedenen Quellen, Plugins und Entwicklerteams zu ersparen.

Cascade-Ebenen sind am relevantesten, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es widersprüchliche CSS-Selektoren und konkurrierende Spezifitäten gibt, oder wenn Sie [`!important`](/de/docs/Web/CSS/important) in Betracht ziehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis davon, wie CSS funktioniert, einschließlich Cascade und Spezifität (studieren
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Basics</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Konflikte Handhaben</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Cascade-Ebenen funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Stile"-Panel des Tools zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte an, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Der Selektor von der Ursprungsquelle mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Stile-Panel durchgestrichene Werte an, die auf das ausgewählte Element passten, aber aufgrund der Cascade, Spezifität oder Quellenreihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus demselben Ursprung mit Vorrang kommen, aber mit niedrigerer Spezifität, oder mit übereinstimmendem Ursprung und Spezifität, aber sie wurden früher in der Codebasis gefunden. Für jeden angewendeten Eigenschaftswert kann es mehrere aus verschiedenen Quellen durchgestrichene Deklarationen geben. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet dies, dass dem Wert der Ursprung oder die Wichtigkeit fehlt.

Oft, wenn die Komplexität einer Website zunimmt, steigt die Anzahl der Stylesheets, was die Quellenreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Cascade-Ebenen vereinfachen die Pflege von Stylesheets über solche Codebasen hinweg. Cascade-Ebenen sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten und Webentwickler in die Lage versetzen, Abschnitte von CSS zu priorisieren, ohne mit der Spezifität kämpfen zu müssen.

Um Cascade-Ebenen zu verstehen, müssen Sie die CSS-Cascade gut verstehen. Die folgenden Abschnitte bieten einen kurzen Rückblick auf die wichtigen Cascade-Konzepte.

## Überprüfung des Cascade-Konzepts

Das 'C' in CSS steht für "Cascading". Dies ist die Methode, mittels derer Stile zusammenfließen. Der Benutzer-Agent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugeordnet sind. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4 eintauchen, **Cascade-Ebenen**, was Sie hier lernen wollen:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektortreffer für jedes Element.
2. **Wichtigkeit:** Sortieren Sie die Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important) Flag gesetzt haben.
3. **Herkunft:** Sortieren Sie innerhalb jedes der beiden Wichtigkeitsbereiche Regeln nach Autor-, Benutzer- oder Benutzer-Agent-Quelle.
4. **Cascade-Ebenen:** Sortieren Sie innerhalb jedes der sechs Herkunfts-Wichtigkeitsbereiche nach der Cascade-Ebene. Die Ebensfolge für normale Deklarationen ist von der ersten erstellten Ebene bis zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile invertiert, wobei nicht geschichtete wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Herkunftsebene mit Vorrang sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Eingrenzungsnähe:** Wenn zwei Selektoren in der Herkunftsebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von eingekapselten Regeln mit der kleinsten Anzahl von Sprüngen in der DOM-Hierarchie zur Eingrenzungswurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
7. **Reihenfolge des Auftretens:** Wenn zwei Selektoren in der Herkunftsebene mit Vorrang die gleiche Spezifität und Eingrenzungsnähe haben, gewinnt der Eigenschaftswert des zuletzt deklarierten Selektors mit der höchsten Spezifität.

Für jeden Schritt gehen nur die Deklarationen, die "noch im Rennen" sind, zum "Wettbewerb" im nächsten Schritt über. Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind irrelevant.

### Herkunft und Cascade

Es gibt drei [Cascade-Herkunftstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzer-Agent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Herkunftseimer nach Herkunft und Wichtigkeit. Es gibt acht Ebenen des Vorrangs: die sechs Herkunftseimer, Eigenschaften, die sich in der Übergangsphase befinden, und sich animierende Eigenschaften. Die Vorrangreihenfolge reicht von normalen Benutzer-Agent-Stilen, die den niedrigsten Vorrang haben, zu Stilen in aktuell angewendeten Animationen, zu wichtigen Benutzer-Agent-Stilen, und dann zu sich in der Übergangsphase befindenden Stilen, die den höchsten Vorrang haben:

1. normale Benutzer-Agent-Stile
2. normale Benutzer-Stile
3. normale Autoren-Stile
4. sich animierende Stile
5. wichtige Autoren-Stile
6. wichtige Benutzer-Stile
7. wichtige Benutzer-Agent-Stile
8. sich in der Übergangsphase befindliche Stile

Der "Benutzer-Agent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf einem Element mit dem {{HTMLElement('style')}} Element deklariert sind, sind Autoren-Stile. Abgesehen von animierenden und sich in der Übergangsphase befindenden Stilen haben normale Benutzer-Agent-Stile den niedrigsten Vorrang; wichtige Benutzer-Agent-Stile haben den höchsten.

### Herkunft und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Ignorieren Sie im Moment die Ebenen, der Wert aus dem Ursprung mit dem höchsten Vorrang wird angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifität wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autoren-Stile angewendet, daher werden nur Benutzer-Agent-Stile angewendet (und Ihre persönlichen Benutzer-Stile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die von Autoren-Stilen gesetzt werden, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autoren-Stile "gewinnen", ist, dass bei widersprüchlichen Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität im Ursprung, der keinen Vorrang hat.

```html live-sample___basic-cascade
<p><a href="https://example.org">User agent styles</a></p>
<p><a class="author" href="https://example.org">Author styles</a></p>
```

```css live-sample___basic-cascade
:where(a.author) {
  text-decoration: overline;
  color: red;
}
```

{{EmbedLiveSample("basic-cascade")}}

Der "konkurrierende" Selektor im Benutzer-Agent-Stylesheet ist zum Zeitpunkt des Schreibens `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Während dies größer ist als der `0-0-0` Selektor im Autoren-Stylesheet, spielt es keine Rolle, auch wenn der Selektor im aktuellen Benutzer-Agent anders ist: Die Spezifitätsgewichte von Autoren- und Benutzer-Agent-Ursprüngen werden nie verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektor-Spezifität. Wenn eine Eigenschaft eines Elements mit einer normalen Stildeklaration in mehreren Ursprüngen gestylt ist, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften in einem Benutzer- oder Benutzer-Agent-Stylesheet überschreiben. Wenn der Stil wichtig ist, wird das Benutzer-Agent-Stylesheet immer über Autoren- und Benutzer-Stile gewinnen. Ursprungsschutz beinhaltet, dass Spezifitätskonflikte zwischen Ursprüngen nie passieren.

Eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Auftretens wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs die gleiche Spezifität haben.

## Überblick über Cascade-Ebenen

Wir verstehen nun "Ursprungsvorrang der Cascade", aber was ist der "Vorrang der Cascade-Ebene"? Wir werden diese Frage beantworten, indem wir klären, was Cascade-Ebenen sind, wie sie geordnet sind und wie Stile auf Cascade-Ebenen zugewiesen werden. Wir behandeln [reguläre Ebenen](#erstellen_von_cascade-ebenen), [verschachtelte Ebenen](#überblick_über_verschachtelte_cascade-ebenen) und anonyme Ebenen. Lassen Sie uns zuerst besprechen, was Cascade-Ebenen sind und welche Probleme sie lösen.

### Vorrang der Cascade-Ebenen

Ähnlich wie wir sechs Prioritätsstufen basierend auf Herkunft und Wichtigkeit haben, ermöglichen uns Cascade-Ebenen die Erstellung von Prioritätsstufen unterhalb jeder dieser Herkunftsebenen.

Innerhalb jedes der sechs Ursprungseimer kann es mehrere Cascade-Ebenen geben. Die [Reihenfolge der Erstellung von Ebenen](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Erstellungsreihenfolge, die den Vorrang unter den Ebenen innerhalb eines Ursprungs festlegt.

In den normalen Ursprungseimern werden die Ebenen in der Reihenfolge der Erstellung jeder Ebene sortiert. Die Vorrangreihenfolge reicht von der ersten erstellten Ebene bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile fließen zusammen in eine implizite Ebene, die Vorrang über alle nicht übergangenen normalen Stile hat. Die nicht geschichteten wichtigen Stile haben weniger Vorrang als alle wichtigen geschichteten Stilen. Die wichtigen Stile in früher deklarierten Ebenen haben Vorrang über wichtige Stile in später deklarierten Ebenen innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir uns auf Autorenstile beschränken, aber bedenken Sie, dass Ebenen auch in Benutzer- und Benutzer-Agent-Stylesheets existieren können.

### Probleme, die Cascade-Ebenen lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal wie viele Stylesheets hinzugefügt werden, all diese Stile fließen in einem einzigen Ursprung zusammen: dem _Autor_-Stylesheet.

Wenn Stile aus vielen Quellen zusammenfließen, insbesondere von Teams, die nicht zusammenarbeiten, können Probleme entstehen. Unterschiedliche Teams können unterschiedliche Methoden haben; eines kann als Best Practice die Reduzierung der Spezifität festgelegt haben, während ein anderes den Standard hat, eine `id` in jedem Selektor einzuschließen.

Spezifitätskonflikte können schnell eskalieren. Ein Webentwickler könnte eine "schnelle Lösung" schaffen, indem er eine `!important`-Flagge hinzufügt. Während dies wie eine einfache Lösung erscheint, verlagert es oft nur den Spezifikationskrieg von normalen auf wichtige Deklarationen.

Genau wie Cascade-Ursprünge ein Gleichgewicht der Macht zwischen Benutzer-, Benutzer-Agent- und Autoren-Stilen bieten, bieten Cascade-Ebenen eine strukturierte Möglichkeit, Anliegen innerhalb eines einzigen Ursprungs zu organisieren und auszubalancieren, als ob jede Ebene in einem Ursprung ein Unter-Ursprung wäre. Eine Ebene kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Stilvorrang, der auf der Ebene der Reihenfolge basiert.

Regeln innerhalb einer Ebene fließen zusammen, ohne mit Stilregeln außerhalb der Ebene zu konkurrieren. Cascade-Ebenen ermöglichen es, ganze Stylesheets über andere Stylesheets zu priorisieren, ohne sich um Spezifikation zwischen diesen Unter-Ursprüngen sorgen zu müssen.

Ebenenvorrang schlägt immer Selektorspezifikation. Stile in Ebenen mit Vorrang "gewinnen" über Ebenen mit weniger Vorrang. Die Spezifikation eines Selektors in einer verlierenden Ebene ist irrelevant. Spezifikation zählt immer noch für konkurrierende Eigenschaftswerte innerhalb einer Ebene, aber es gibt keine Spezifikationsprobleme zwischen den Ebenen, da nur die höchste Prioritätsebene für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Cascade-Ebenen lösen können

Cascade-Ebenen erlauben die Erstellung von verschachtelten Ebenen. Jede Cascade-Ebene kann verschachtelte Ebenen enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Ebene importiert werden. Eine reguläre Cascade-Ebene wird die Komponentenbibliothek zum Autorenursprung hinzufügen und jegliche Spezifikationskonflikte mit anderen Autoren-Stilen entfernen. Innerhalb der `components`-Ebene kann ein Entwickler entscheiden, verschiedene Themen zu definieren, jede als separate verschachtelte Ebene. Die Reihenfolge dieser verschachtelten Themenebenen kann basierend auf Medienabfragen (siehe Abschnitt [Layer-Erstellung und Medienabfragen](#erstellen_von_ebenen_und_medienabfragen) unten) wie der Viewport-Größe oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation) definiert werden. Diese verschachtelten Ebenen bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifikation basieren und keine Konflikte verursachen.

Die Fähigkeit, Ebenen zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeitet.

Die Fähigkeit, verschachtelte Ebenen zu erstellen, beseitigt auch die Sorge um konfligierende Ebenennamen. Dies werden wir im Abschnitt über [verschachtelte Ebenen](#überblick_über_verschachtelte_cascade-ebenen) behandeln.

> "Autoren können Ebenen erstellen, um Element-Standardeinstellungen, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Stylinganliegen darzustellen - und sind in der Lage, die Cascade von Ebenen explizit neu zu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Ebene zu ändern oder sich auf die Reihenfolge des Auftretens zu verlassen, um Konflikte zwischen Ebenen zu lösen."
>
> —[Cascading and Inheritance specification](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Cascade-Ebenen

Ebenen können auf eine der folgenden Weisen erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer) statement-Regel, die Ebenen mit `@layer` gefolgt von Namen einer oder mehrerer Ebenen deklariert. Dies erstellt benannte Ebenen, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Blockregel, in der alle Stile in einem Block zu einer benannten oder unbenannten Ebene hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem Keyword `layer` oder der `layer()`-Funktion, die den Inhalt der importierten Datei in diese Ebene einfügt.

Alle drei Methoden erstellen eine Ebene, wenn eine Ebene mit diesem Namen noch nicht initialisiert ist. Wenn kein Ebenenname in der `@layer`-Regel oder bei `@import` mit `layer()` angegeben ist, wird eine neue anonyme (unbenannte) Ebene erstellt.

> [!NOTE]
> Die Reihenfolge des Vorrangs von Ebenen ist die Reihenfolge, in der sie erstellt werden. Stile, die sich nicht in einer Ebene befinden, oder "nicht geschichtete Stile", fließen zusammen in eine endgültige implizite Bezeichnung.

Lassen Sie uns die drei Methoden zur Erstellung einer Ebene etwas detaillierter betrachten, bevor wir über verschachtelte Ebenen sprechen.

### Die @layer statement-Regel für benannte Ebenen

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. Ebenen zu deklarieren, indem `@layer` gefolgt von den Namen einer oder mehrerer Ebenen ohne zugehörige Stile verwendet wird, ist eine Möglichkeit, die [Ebene-Reihenfolge](#bestimmung_des_vorrangs_basierend_auf_der_reihenfolge_der_ebenen) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS-at-Regel wird verwendet, um eine Cascade-Ebene zu deklarieren und die Reihenfolge des Vorrangs festzulegen, wenn es mehrere Cascade-Ebenen gibt. Die folgende at-Regel deklariert drei Ebenen, in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie werden oft wollen, dass Ihre erste Zeile im CSS diese `@layer`-Deklaration ist (mit Ebenennamen, die für Ihre Website sinnvoll sind, natürlich), um die gesamte Kontrolle über die Ebenenreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile im CSS einer Website ist, wird die Ebenenreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Ebenen vor der oben genannten Anweisung erstellt wurden, solange keine Ebenen mit diesen Namen bereits existieren, werden diese drei Ebenen erstellt und am Ende der Liste der bestehenden Ebenen hinzugefügt. Wenn jedoch eine Ebene mit demselben Namen bereits existiert, dann wird die oben genannte Anweisung nur zwei neue Ebenen erstellen. Wenn z.B. `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Ebenen wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer-Blockregel für benannte und anonyme Ebenen

Ebenen können mithilfe der `@layer`-Blockregel erstellt werden. Wenn eine `@layer`-At-Regel von einem Identifikator gefolgt ist und einem Block von Stilen, wird der Identifikator verwendet, um die Ebene zu benennen, und die Stile in dieser At-Regel werden den Stilen der Ebene hinzugefügt. Wenn eine Ebene mit dem angegebenen Namen noch nicht existiert, wird eine neue Ebene erstellt. Wenn eine Ebene mit demselben Namen bereits existiert, werden die Stile der zuvor existierenden Ebene hinzugefügt. Wenn beim Erstellen eines Blockes von Stilen mit `@layer` kein Name angegeben wird, werden die Stile in der At-Regel einer neuen anonymen Ebene hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Block-Regeln und eine `@layer` statement-Regel verwendet. Dieses CSS macht Folgendes in der angegebenen Reihenfolge:

1. Erstellt eine benannte `layout`-Ebene
2. Erstellt eine unbenannte, anonyme Ebene
3. Deklariert eine Liste von drei Ebenen und erstellt nur zwei neue Ebenen, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt zusätzliche Stile zur bereits bestehenden `layout`-Ebene hinzu
5. Erstellt eine zweite unbenannte, anonyme Ebene

```css
/* file: layers1.css */

/* unlayered styles */
body {
  color: #333;
}

/* creates the first layer: `layout` */
@layer layout {
  main {
    display: grid;
  }
}

/* creates the second layer: an unnamed, anonymous layer */
@layer {
  body {
    margin: 0;
  }
}

/* creates the third and fourth layers: `theme` and `utilities` */
@layer theme, layout, utilities;

/* adds styles to the already existing `layout` layer */
@layer layout {
  main {
    color: #000;
  }
}

/* creates the fifth layer: an unnamed, anonymous layer */
@layer {
  body {
    margin: 1vw;
  }
}
```

Im obigen CSS haben wir fünf Ebenen erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge – mit einer sechsten, impliziten Ebene von nicht geschichteten Stilen im `body`-Stileblock. Die Reihenfolge der Ebenen ist die Reihenfolge, in der die Ebenen erstellt werden, wobei die implizite Ebene der nicht geschichteten Stile immer die letzte ist. Es gibt keine Möglichkeit, die Reihenfolge der Ebenen nach der Erstellung zu ändern.

Wir haben einige Stile der benannten `layout`-Ebene zugewiesen. Wenn eine benannte Ebene noch nicht existiert, wird durch die Angabe des Namens in einer `@layer`-At-Regel, ob mit der Zuweisung von Stilen zur Ebene oder ohne, die Ebene erstellt; dies fügt die Ebene am Ende der Serie bestehender Ebenennamen hinzu. Wenn die benannte Ebene bereits existiert, werden alle Stile innerhalb des benannten Blocks zu den in der zuvor existierenden Ebene hinzugefügt – die Angabe von Stilen in einem Block durch die Wiederverwendung eines bestehenden Ebenennamens erstellt keine neue Ebene.

Anonyme Ebenen werden erstellt, indem Stile einer Ebene zugewiesen werden, ohne die Ebene zu benennen. Stile können einer unbenannten Ebene nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Eine spätere Verwendung von `@layer` ohne Ebenenname erstellt weitere unbenannte Ebenen; es fügt keine Stile zu einer vorher existierenden unbenannten Ebene hinzu.

Die `@layer`-At-Regel erstellt eine Ebene, benannt oder nicht, oder fügt Stile zu einer Ebene hinzu, wenn die benannte Ebene bereits existiert. Wir nannten die erste anonyme Ebene `<anonymous(01)>` und die zweite `<anonymous(02)>`, dies ist nur zu Erklärungszwecken. Dies sind tatsächlich unbenannte Ebenen. Es gibt keine Möglichkeit, auf sie zuzugreifen oder ihnen zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Ebene deklarierten Stile werden zusammen zu einer impliziten Ebene geführt. Im obigen Beispiel erklärt die erste Erklärung die `color: #333`-Eigenschaft auf `body`. Dies wurde außerhalb einer Ebene erklärt. Normale nicht geschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, auch wenn die nicht geschichteten Stile eine geringere Spezifität haben und zuerst in der Reihenfolge des Auftretens kommen. Dies erklärt, warum, obwohl das nicht geschichtete CSS zuerst im Codeblock erklärt wurde, die implizite Ebene dieser nicht geschichteten Stile Vorrang hat, als ob es die zuletzt erklärte Ebene wäre.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Ebenen deklariert wurde, wurden nur die `theme`- und `utilities`-Ebenen erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration nicht die Reihenfolge bereits erstellter Ebenen ändert. Derzeit gibt es keine Möglichkeit, die Reihenfolge der Ebenen nach der Deklaration zu ändern.

Im folgenden Beispiel weisen wir Stile zwei Ebenen zu, erstellen sie und benennen sie im Prozess. Da sie bereits existieren, indem sie beim ersten Mal verwendet werden, bewirkt ihre Deklaration in der letzten Zeile nichts.

```html live-sample___layer-order
<h1>Is this heading underlined?</h1>
```

```css live-sample___layer-order
@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}

/* this does nothing */
@layer site, page;
```

{{EmbedLiveSample("layer-order")}}

Versuchen Sie, die letzte Zeile, `@layer site, page;`, an den Anfang zu verschieben. Was passiert?

#### Erstellen von Ebenen und Medienabfragen

Wenn Sie eine Ebene mit [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)-Abfragen definieren und das Medium kein Treffer ist oder das Feature nicht unterstützt wird, wird die Ebene nicht erstellt. Das folgende Beispiel zeigt, wie sich die Ebenenreihenfolge ändern kann, wenn Sie die Größe Ihres Geräts oder Browsers ändern. In diesem Beispiel erstellen wir die `site`-Ebene nur in breiteren Browsern. Wir weisen dann Stile zu den `page`- und `site`-Ebenen zu, in dieser Reihenfolge.

```html live-sample___media-order
<h1>Is this heading underlined?</h1>
```

```css live-sample___media-order
@media (min-width: 50em) {
  @layer site;
}

@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}
```

{{EmbedLiveSample("media-order")}}

Auf großen Bildschirmen wird die `site`-Ebene in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Andernfalls hat `site` Vorrang über `page`, da es zuletzt auf kleinen Bildschirmen deklariert wurde. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Ebenen mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel erlaubt Benutzern den Import von Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element.

Beim Import von Stylesheets muss die `@import`-Anweisung vor jeglichen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor jeglichen Stilen, kann jedoch von einer `@layer`-At-Regel, die eine oder mehrere Ebenen erstellt, gefolgt werden, ohne diesen Ebenen Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Ebene, eine verschachtelte benannte Ebene oder eine anonyme Ebene importieren. Die folgende Ebene importiert die Stylesheets in eine `components`-Ebene, eine verschachtelte `dialog`-Ebene innerhalb der `components`-Ebene und eine unbenannte Ebene, jeweils:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in eine einzige Ebene importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Ebene:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Stile importieren und Ebenen basierend auf spezifischen Bedingungen erstellen, indem Sie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Ebene nur, wenn der Browser `display: ruby` unterstützt, und die importierte Datei von der Breite des Bildschirms abhängt.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode zum Verlinken von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Ebene zu importieren, wenn Sie `@layer` nicht innerhalb des Stylesheets verwenden können.

## Überblick über verschachtelte Cascade-Ebenen

Verschachtelte Ebenen sind Ebenen innerhalb einer benannten oder einer anonymen Ebene. Jede Cascade-Ebene, selbst eine anonyme, kann verschachtelte Ebenen enthalten. Ebenen, die in eine andere Ebene importiert werden, werden in dieser Ebene zu verschachtelten Ebenen.

### Vorteile der Verschachtelung von Ebenen

Die Fähigkeit, Ebenen zu verschachteln, ermöglicht es Teams, Cascade-Ebenen zu erstellen, ohne sich Sorgen darüber machen zu müssen, ob andere Teams sie in eine Ebene importieren werden. Ebenso ermöglicht die Verschachtelung das Importieren von Drittanbieter-Stylesheets in eine Ebene, ohne sich Sorgen machen zu müssen, ob das Stylesheet selbst Ebenen enthält. Da Ebenen verschachtelt werden können, müssen Sie sich nicht um konfligierende Ebenennamen zwischen externen und internen Stylesheets sorgen.

### Erstellen von verschachtelten Cascade-Ebenen

Verschachtelte Ebenen können mit den gleichen Methoden wie reguläre Ebenen erstellt werden. Zum Beispiel können sie mit der `@layer`-At-Regel gefolgt von den Namen einer oder mehrerer Ebenen unter Verwendung einer Punktnotation erstellt werden. Mehrere Punkte und Ebenennamen bedeuten mehrere Verschachtelungen.

Wenn Sie eine blockierende `@layer`-At-Regel innerhalb einer anderen blockierenden `@layer`-At-Regel verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Ebene. Ebenso werden, wenn ein Stylesheet mit einer `@import`-Deklaration, die das `layer`-Keyword oder die `layer()`-Funktion enthält, importiert wird, die Stile dieser benannten oder anonymen Ebene zugewiesen. Wenn die `@import`-Anweisung Ebenen enthält, werden diese Ebenen zu untergeordneten Ebenen innerhalb dieser anonymen oder benannten Ebene.

Betrachten wir das folgende Beispiel:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Ebene. Wenn diese Datei Ebenen enthält, benannt oder nicht, werden diese Ebenen zu verschachtelten Ebenen innerhalb der `components`-Ebene.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Ebene, die eine Unterebene der `components`-Ebene ist. Die verschachtelte `components.narrow` wird als die letzte Ebene innerhalb der `components`-Ebene erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Ebene, in welchem Fall der Inhalt von `narrow-theme.css` der `components.narrow`-verschachtelten Ebene hinzugefügt würde. Zusätzliche verschachtelte benannte Ebenen können zur `components`-Ebene mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Ebenen erstellt werden, aber sie können nach diesem Zeitpunkt nicht mehr zugegriffen werden.

Sehen wir uns ein weiteres Beispiel an, bei dem wir [import `layers1.css` in eine benannte Ebene](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung einfügen:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne Ebene mit dem Namen `example` erstellen, die einige Deklarationen und fünf verschachtelte Ebenen enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Ebene hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung des Vorrangs basierend auf der Reihenfolge der Ebenen

Die Reihenfolge der Ebenen bestimmt deren Vorrangsreihenfolge. Daher ist die Reihenfolge der Ebenen sehr wichtig. Genauso wie die Cascade nach Herkunft und Wichtigkeit sortiert, wird jede CSS-Deklaration nach Herkunftsebene und Wichtigkeit sortiert.

### Vorrangsreihenfolge von regulären Cascade-Ebenen

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Ebenen (Stile von C.css werden der impliziten Ebene der nicht geschichteten Stile hinzugefügt). Lassen Sie uns davon ausgehen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Ebenen enthalten. Die folgende Liste zeigt, wo innerhalb und außerhalb dieser Dateien deklarierte Stile vom geringsten (1) bis zum höchsten (10) Vorrang sortiert werden:

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. nicht geschichtete normale Stile (`C.css`)
4. inline normale Stile
5. animierende Stile
6. nicht geschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. inline wichtige Stile
10. sich in der Übergangsphase befindende Stile

Normale in Ebenen deklarierte Stile erhalten die niedrigste Priorität und werden in der Reihenfolge der Erstellung der Ebenen sortiert. Normale Stile in der zuerst erstellten Ebene haben den niedrigsten Vorrang, und normale Stile in der zuletzt erstellten Ebene haben den höchsten Vorrang unter den Ebenen. Mit anderen Worten, normale Stile innerhalb von `firstLayer` werden durch alle nachfolgenden Stile in der Liste bei vorhandenen Konflikten überschrieben.

Die nächsten sind alle außerhalb von Ebenen deklarierten Stile. Die Stile in `C.css` wurden nicht in eine Ebene importiert und überschreiben daher alle konkurrierenden Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Ebene deklariert wurden, haben immer Vorrang über Stile, die innerhalb einer Ebene deklariert wurden (mit Ausnahme wichtiger Stile).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normal inline deklarierte Stile haben Vorrang über normale Stile in den nicht geschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css`, und `C.css`).

Animierende Stile haben Vorrang vor allen normalen Stilen, einschließlich normaler Inline-Stile.

Wichtige Stile, das heißt, Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang über alle zuvor erwähnten Stile in unserer Liste. Sie werden in umgekehrter Reihenfolge zu normalen Stilen sortiert. Alle außerhalb einer Ebene deklarierten wichtigen Stile haben weniger Vorrang als diejenigen innerhalb einer Ebene. Wichtige Stile innerhalb von Ebenen werden ebenfalls in der Reihenfolge der Erstellung der Ebenen sortiert. Für wichtige Stile hat die zuletzt erstellte Ebene den geringsten Vorrang, und die zuerst erstellte Ebene hat den höchsten Vorrang unter den deklarierten Ebenen.

Wichtige Inline-Stile haben wieder Vorrang über wichtige anders deklarierten Stile.

Stile, die sich in der Übergangsphase befinden, haben den höchsten Vorrang. Wenn ein normaler Eigenschaftswert in der Übergangsphase ist, hat er Vorrang vor allen anderen Eigenschaftswert -Deklarationen, selbst vor wichtigen Inline-Stilen; aber nur während der Übergangsphase.

```html live-sample___layer-precedence
<div>
  <h1 style="color: yellow; background-color: maroon !important;">
    Inline styles
  </h1>
</div>
```

```css live-sample___layer-precedence
@layer A, B;

h1 {
  font-family: sans-serif;
  margin: 1em;
  padding: 0.2em;
  color: orange;
  background-color: green;
  text-decoration: overline pink !important;
  box-shadow: 5px 5px lightgreen !important;
}

@layer A {
  h1 {
    color: grey;
    background-color: black !important;
    text-decoration: line-through grey;
    box-shadow: -5px -5px lightblue !important;
    font-style: normal;
    font-weight: normal !important;
  }
}

@layer B {
  h1 {
    color: aqua;
    background: yellow !important;
    text-decoration: underline aqua;
    box-shadow: -5px 5px magenta !important;
    font-style: italic;
    font-weight: bold !important;
  }
}
```

{{EmbedLiveSample("layer-precedence")}}

In diesem Beispiel werden zwei Ebenen (`A` und `B`) zunächst mit einem `@layer`-Anweisungsregel ohne Stile deklariert. Die Ebenenstile werden in zwei `@layer` -Blockregeln definiert, die nach der außerhalb einer Ebene erklärten `h1`-CSS-Regel erscheinen.

Die Inline-Stile, die dem `h1`-Element mit dem `style`-Attribut hinzugefügt wurden, setzen einen normalen `color`- und einen wichtigen `background-color`. Normale Inline-Stile überschreiben alle normalen und geschichteten, sowie nicht geschichteten Stile. Wichtige Inline-Stile überschreiben alle anderen normalen und wichtigen geschichteten und nicht geschichteten Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normalen `text-decoration` und wichtigen `box-shadow` sind nicht Teil der Inline-Stile des `style`-Attributs und können daher überschrieben werden. Bei normalen nicht-Inline-Stilen haben nicht geschichtete Stile Vorrang. Bei wichtigen Stilen, spielt auch die Ebenenreihenfolge eine Rolle. Während normale nicht geschichtete Stile alle in einer Ebene gesetzten normalen Stile überschreiben, wird bei wichtigen Stilen die Reihenfolge des Vorrangs umgekehrt; nicht geschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die zwei in den Ebenen allein deklarierten Stile sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Bei normalen Stilen hat die zuletzt deklarierte Ebene `B` Vorrang vor der früher deklarierten Ebene `A`. Bei normalen Stilen haben später deklarierte Ebenen Vorrang vor früher deklarierten. Die Reihenfolge des Vorrangs ist bei wichtigen Stilen umgekehrt. Bei den wichtigen `font-weight`-Deklarationen hat die zuerst deklariert Ebene `A` Vorrang vor der zuletzt deklarierten Ebene `B`.

Sie können die Reihenfolge der Ebenen umkehren, indem Sie die erste Zeile von `@layer A, B;` auf `@layer B, A;` ändern. Probieren Sie es aus. Welche Stile werden dadurch verändert und welche bleiben gleich? Warum?

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. In unserer ersten Zeile erklärten wir Ebenen ohne Stile zuweisen, indem wir `@layer` gefolgt von den Namen unserer Ebenen verwenden und mit einem Semikolon enden. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich gewesen. Warum? Wir wiesen Stile in benannten `@layer`-Blöcken der Reihenfolge nach A dann B zu. Die beiden Ebenen wurden in dieser ersten Zeile erstellt. Wären sie nicht gewesen, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir schlossen die erste Zeile aus zwei Gründen ein: erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass es eine Best Practice für Ihre Ebenenverwaltung ist, die Reihenfolge der Ebenen vorneweg zu deklarieren.

Zusammenfassend:

- Die Reihenfolge des Vorrangs der Ebenen ist die Reihenfolge, in der die Ebenen erstellt werden.
- Es gibt keine Möglichkeit, die Reihenfolge der Ebenen nach der Erstellung zu ändern.
- Ebenenvorrang für normale Stile ist die Reihenfolge, in der die Ebenen erstellt werden.
- Nicht geschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Ebenenvorrang für wichtige Stile ist umgekehrt, wobei früher erstellte Ebenen Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor nicht geschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit der Ausnahme von während der Übergangsphase befindlichen Stilen.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was vorübergehend ist).

### Vorrangsreihenfolge von verschachtelten Cascade-Ebenen

Die Vorrangsreihenfolge für verschachtelte Ebenen ist der der regulären Ebenen ähnlich, jedoch innerhalb einer Ebene enthalten. Die Vorrangsreihenfolge basiert auf der Reihenfolge der Erstellung der verschachtelten Ebenen. Nicht verschachtelte Stile in einer Ebene haben Vorrang vor verschachtelten normalen Stilen, mit umgekehrter Reihenfolge für wichtige Stile. Spezifitätsgewicht zwischen verschachtelten Ebenen spielt keine Rolle, allerdings spielt es eine Rolle für konkurrierende Stile innerhalb einer verschachtelten Ebene.

Das folgende Beispiel erstellt und fügt Stile der `components`-Ebene, der `components.narrow`-verschachtelten Ebene und der `components.wide`-verschachtelten Ebene hinzu:

```html hidden
<div>Text</div>
```

```css hidden
div {
  height: 150px;
  width: 150px;
  margin: 1rem;
  padding: 1rem;
  font-size: 3rem;
}
```

```css
div {
  background-color: wheat;
  color: pink !important;
}

@layer components {
  div {
    background-color: yellow;
    border: 1rem dashed red;
    color: orange !important;
  }
}

@layer components.narrow {
  div {
    background-color: skyblue;
    border: 1rem dashed blue;
    color: purple !important;
    border-radius: 50%;
  }
}

@layer components.wide {
  div {
    background-color: limegreen;
    border: 1rem dashed green;
    color: seagreen !important;
    border-radius: 20%;
  }
}
```

{{EmbedLiveSample("Precedence order of nested cascade layers", "100%", "250")}}

Hier ist eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wurde:

- `background-color`: Da nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt `wheat` als Farbe.
- `border`: Da innerhalb einer Ebene nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt `red` als Farbe.
- `color`: Mit wichtigen Stilen haben geschichtete Stile Vorrang vor nicht geschichteten Stilen, wobei wichtige Stile in früher deklarierten Ebenen Vorrang vor später deklarierten Ebenen haben. In diesem Beispiel ist die Reihenfolge der Erstellung der verschachtelten Ebenen `components.narrow`, gefolgt von `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass `purple` als Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Ebenen gesetzt, daher gewinnt nach Deklarationsreihenfolge `20%` als Radius.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Cascade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade#task_2).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind nun mit den grundlegenden Mechaniken der CSS-Cascade-Ebenen vertraut.
