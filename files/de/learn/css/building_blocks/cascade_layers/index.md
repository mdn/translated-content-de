---
title: Cascade Layers
slug: Learn/CSS/Building_blocks/Cascade_layers
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

Diese Lektion zielt darauf ab, Ihnen [Kaskadenschichten](/de/docs/Web/CSS/@layer) vorzustellen, ein fortgeschrittenes Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag diese Lektion zunächst weniger relevant und etwas theoretischer erscheinen als andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen von Kaskadenschichten zu kennen, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadenschichten und die Fähigkeit, deren Potenzial zu nutzen, Ihnen viel Ärger bei der Verwaltung einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams ersparen.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn konfliktreiche CSS-Selektoren und konkurrierende Spezifizitäten vorhanden sind oder wenn Sie erwägen, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundwissen über die Funktionsweise von CSS, einschließlich Kaskade und Spezifizität (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a> und <a href="/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Kaskade, Spezifizität und Vererbung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Kaskadenschichten funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede auf ein Element angewendete CSS-Eigenschaft kann nur ein Wert existieren. Sie können alle auf ein Element angewendeten Eigenschaftenwerte anzeigen, indem Sie das Element in den Entwicklerwerkzeugen Ihres Browsers inspizieren. Das „Styles“-Panel des Tools zeigt alle auf das betrachtete Element angewendeten Eigenschaftenwerte an, zusammen mit dem passenden Selektor und der CSS-Quelldatei. Der Selektor des Ursprungs mit Vorrang hat seine Werte auf das passende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel durchgestrichene Werte, die zwar auf das ausgewählte Element gepasst hätten, aber aufgrund der Kaskade, Spezifizität oder Quellreihenfolge nicht angewandt wurden. Durchgestrichene Stile können aus demselben Vorrangsursprung stammen, aber mit niedrigerer Spezifizität, oder mit passendem Ursprung und Spezifizität, aber sie wurden früher im Code gefunden. Für jeden angewendeten Eigenschaftswert können mehrere Deklarationen aus verschiedenen Quellen durchgestrichen sein. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifizität hat, bedeutet das, dass es dem Wert an Ursprung oder Wichtigkeit fehlt.

Oft, wenn die Komplexität einer Website zunimmt, steigt die Anzahl der Stylesheet-Dateien, was die Reihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Wartung von Stylesheets in solchen Codebasen. Kaskadenschichten sind explizite Spezifizitätscontainer, die einfachere und größere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten, wodurch Webentwickler CSS-Abschnitte priorisieren können, ohne gegen die Spezifizität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten einen kurzen Überblick über die wichtigen Konzepte der Kaskade.

## Rückblick auf das Kaskadenkonzept

Das "C" in CSS steht für "Cascading". Es ist die Methode, durch die Stile zusammengesetzt werden. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4, **Kaskadenschichten**, eintauchen, was Sie hier lernen wollten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem passenden Selektor für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important) Flag gesetzt haben.
3. **Herkunft:** Sortieren Sie innerhalb der zwei Wichtigkeitseimer Regeln nach Autor-, Benutzer- oder Benutzeragenten-Herkunft.
4. **Kaskadenschichten:** Sortieren Sie innerhalb jeder der sechs Ursprungs-Wichtigkeitseimer nach Kaskadenschicht. Die Schichtenreihenfolge für normale Deklarationen ist von der ersten erstellten Schicht zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei nicht geschichtete wichtige Stile die niedrigste Vorrangstellung haben.
5. **Spezifität:** Für konkurrierende Stile im Vorrangursprung, sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/Specificity).
6. **Umfangsnähe**: Wenn zwei Selektoren im Vorrangursprung mit derselben Spezifizität existieren, gewinnt der Eigenschaftswert innerhalb der selektierten Regeln mit der geringsten Anzahl an Sprüngen nach oben im DOM-Hierarchie zum Umfangs-Root. Mehr Details und ein Beispiel finden Sie unter [Wie `@scope` Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren im Vorrangursprung mit derselben Spezifizität und Umfangsnähe existieren, gewinnt der Eigenschaftswert des zuletzt erklärten Selektors mit der höchsten Spezifizität.

Für jeden Schritt ziehen nur die "noch im Rennen" befindlichen Deklarationen in den nächsten Schritt ein, um zu "konkurrieren". Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie und die nachfolgenden Schritte sind überflüssig.

### Ursprung und Kaskade

Es gibt drei [Ursprungstypen beim Kaskadieren](/de/docs/Web/CSS/Cascade#origin_types): Benutzeragenten-Stile, Benutzerstile und Autorenstile. Der Browser sortiert jede Deklaration in sechs Ursprungsgruppen nach Ursprung und Wichtigkeit. Es gibt acht Präzedenzlevel: die sechs Ursprungsgruppen, Eigenschaften, die in einem Übergang sind, und Eigenschaften, die animiert werden. Die Präzedenzreihenfolge reicht von normalen Benutzeragenten-Stilen, die die niedrigste Präzedenz haben, über Stile in momentan angewendeten Animationen bis zu wichtigen Benutzeragenten-Stilen, und dann zu Stilen, die übergangen werden, welche die höchste Präzedenz haben:

1. Benutzeragenten normale Stile
2. Benutzer normale Stile
3. Autoren normale Stile
4. animierte Stile
5. Autoren wichtige Stile
6. Benutzer wichtige Stile
7. Benutzeragenten wichtige Stile
8. Übergangsstile

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Webseitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf ein Element mit dem {{HTMLElement('style')}} Element deklariert werden, sind Autorenstile. Abgesehen von animierten und übergehenden Stilen haben normale Benutzeragenten-Stile die niedrigste Präzedenz; wichtige Benutzeragenten-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft "gewinnt" die Deklaration, die aus dem Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig) kommt. Wenn wir Schichten für einen Moment ignorieren, wird der Wert des Ursprungs mit der höchsten Präzedenz angewandt. Hat der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element, wird die [Spezifität](/de/docs/Web/CSS/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifizität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autorenstile, so dass nur Benutzeragentenstile (und Ihre persönlichen Benutzerstile, falls vorhanden) angewendet werden. Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die durch Autorenstile gesetzt werden, auch wenn der Selektor im Autorenstylesheet eine Spezifizität von [`0-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass bei konkurrierenden Stilen aus verschiedenen Ursprüngen die Regeln des Ursprungs mit Vorrang angewendet werden, unabhängig von der Spezifizität des Ursprungs, der keinen Vorrang hat.

{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}

Der "konkurrierende" Selektor im Benutzeragenten-Stilblatt zum Zeitpunkt dieses Schreibens ist `a:any-link`, welche ein Spezifitätsgewicht von `0-1-1` hat. Während dies größer ist als der `0-0-0` Selektor im Autorenstylesheet, spielt es keine Rolle: Die Spezifitätsgewichte von Autoren- und Benutzeragentenursprüngen werden nie verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/Specificity#how_is_specificity_calculated).

Die Vorrangstellung des Ursprungs gewinnt immer über die Selektorspezifität. Wenn eine Element-Eigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, wird das Autorenstylesheet immer die redundanten normal deklarierten Eigenschaften in einem Benutzer- oder Benutzeragent-Stylesheet übersteuern. Wenn der Stil wichtig ist, wird das Benutzeragentenstylesheet immer gegenüber Autoren- und Benutzerstilen gewinnen. Die Vorrangstellung des Kaskadenursprungs stellt sicher, dass Spezifizitätskonflikte zwischen Ursprüngen nie auftreten.

Eine letzte Anmerkung, bevor wir fortfahren: Die Anzeige-Reihenfolge wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs dieselbe Spezifizität haben.

## Überblick über Kaskadenschichten

Wir verstehen jetzt "Kaskaden-Ursprungsvorrang", aber was ist "Kaskaden-Schichtvorrang"? Wir werden diese Frage beantworten, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie geordnet werden und wie Stile zu Kaskadenschichten zugewiesen werden. Wir werden [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten behandeln. Lassen Sie uns zuerst besprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangsreihenfolge der Kaskadenschicht

Ähnlich wie wir sechs Prioritätsstufen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten das Erstellen einer Unter-Ursprungs-Priorität innerhalb eines dieser Ursprünge.

Innerhalb jeder der sechs Ursprungsgruppen kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichtenbildung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Bildung der Schichten, die die Vorrangsreihenfolge unter Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungsgruppen werden die Schichten in der Reihenfolge sortiert, in der jede Schicht erstellt wird. Die Vorrangsreihenfolge verläuft von der ersten erstellten Schicht zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile kaskadieren zusammen in eine implizite Schicht mit Vorrang über alle nicht tran- sitionierenden normal Stile. Die nicht geschichteten wichtigen Stile haben eine geringere Vorrangstellung als alle wichtigen geschichteten Stile. Die wichtigen Stile in den früher deklarierten Schichten haben Vorrang vor wichtigen Stilen in den später deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir uns auf die Autorenstile beschränken, aber beachten Sie, dass Schichten auch in Benutzer- und Benutzeragentenstyleheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Egal wie viele Stylesheets eingebunden sind, all diese Stile kaskadieren in einem einzigen Ursprung: dem Autorenstylesheet.

Wenn Stile von vielen Quellen zusammen kaskadieren, insbesondere von Teams, die nicht miteinander arbeiten, können Probleme entstehen. Verschiedene Teams können unterschiedliche Methodologien haben; eines kann eine Best-Practice des Reduzierens der Spezifizität verfolgen, während ein anderes einen Standard verfolgt, eine `id` in jedem Selektor einzuschließen.

Spezifizitätskonflikte können schnell eskalieren. Ein Webentwickler könnte ein "Schnellfix" machen, indem er ein `!important` Flag hinzufügt. Während dies wie eine einfache Lösung erscheint, verlagert es oft nur den Spezifitätskampf von normalen zu wichtigen Deklarationen.

In der gleichen Weise, wie Kaskadenursprünge ein Kräfteverhältnis zwischen Benutzer-, Benutzeragent- und Autorenstilen herstellen, bieten Kaskadenschichten eine strukturierte Möglichkeit, innerhalb eines einzelnen Ursprungs zu organisieren und Anliegen zu balancieren, als ob jede Schicht in einem Ursprung ein Teil-Ursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Stilvorrang basierend auf der Schichtenreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen das Priorisieren ganzer Stylesheets über andere Stylesheets, ohne sich um Spezifizität zwischen diesen Unter-Ursprüngen kümmern zu müssen.

Schichtenvorrang gewinnt immer gegenüber Selektorspezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifizität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifizität ist innerhalb einer Schicht für konkurrierende Eigenschaftswerte immer noch von Bedeutung, aber es gibt keine Spezifizitätsbedenken zwischen Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten erlauben das Erstellen verschachtelter Schichten. Jede Kaskadenschicht, selbst eine anonyme, kann verschachtelte Schichten enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek zum Autorenursprung hinzu und beseitigt alle Spezifizitätskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Schicht kann ein Entwickler wählen, verschiedene Themen zu definieren, jedes als eine separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Themen-Schichten kann basierend auf Medienabfragen (siehe den Abschnitt [Schichtenerstellung und Medienabfragen](#schichtenerstellung_und_medienabfragen) unten) definiert werden, wie z.B. Viewportgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifizität basieren.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeiten.

Die Fähigkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge, konfliktierende Schichtennamen zu haben. Wir werden dies im Abschnitt über [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Stil-Anliegen darzustellen – und sind in der Lage, die Kaskade von Schichten auf explizite Weise zu ordnen, ohne Selektoren oder Spezifizität innerhalb jeder Schicht zu verändern, oder sich auf die Erscheinungsreihenfolge zu verlassen, um Konflikte über Schichten hinweg zu lösen."
>
> —[Spezifikation zu Kaskadieren und Vererbung](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die `@layer` At-Regel, die Schichten deklariert mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer` Blockat-Regel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die `@import` Regel mit dem `layer` Keyword oder der `layer()` Funktion, die den Inhalt der importierten Datei dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn im `@layer` At-Regel oder `@import` mit `layer()` kein Schichtname angegeben wird, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Vorrangsreihenfolge der Schicht ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht liegen, oder "ungeschichtete Stile", kaskadieren zusammen zu einer abschließenden impliziten Schicht.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Schicht etwas detaillierter behandeln, bevor wir verschachtelte Schichten diskutieren.

### Die @layer At-Regel für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne ihnen Stile zuzuweisen, ist eine Möglichkeit, die [Schichtenreihenfolge](#bestimmen_der_vorrangstellung_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS At-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangsreihenfolge zu definieren, wenn es mehrere Kaskadenschichten gibt. Die folgende At-Regel deklariert drei Schichten in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Oftmals möchten Sie, dass Ihre erste Zeile CSS diese `@layer` Deklaration ist (natürlich mit Schichtnamen, die für Ihre Seite sinnvoll sind), um die volle Kontrolle über die Schichtordnung zu haben.

Wenn die obige Erklärung die erste Zeile eines Stylesheets der Seite ist, ist die Schichtenreihenfolge `theme`, `layout` und `utilities`. Wenn einige Schichten vor der obigen Aussage erstellt wurden, werden diese drei Schichten als neue Schichten hinzugefügt, solange Schichten mit diesen Namen nicht bereits existieren. Wenn jedoch bereits eine Schicht mit demselben Namen existiert, wird die obige Erklärung nur zwei neue Schichten erstellen. Zum Beispiel, wenn `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer Blockat-Regel für benannte und anonyme Schichten

Schichten können mit der `@layer` Blockat-Regel erstellt werden. Wenn eine `@layer` At-Regel von einem Bezeichner und einem Stilblock gefolgt wird, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser At-Regel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor existierenden Schicht hinzugefügt. Wenn beim Erstellen eines Stilblocks mit `@layer` kein Name angegeben ist, werden die Stile in der At-Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer` Blockat-Regeln und eine `@layer` Statement-Regel verwendet. Dieses CSS tut in der aufgelisteten Reihenfolge Folgendes:

1. Erstellt eine benannte `layout` Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt zusätzliche Stile zur bereits existierenden `layout` Schicht hinzu
5. Erstellt eine zweite unbenannte, anonyme Schicht

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

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Schicht von ungeschichteten Stilen, die im `body`-Stilblock enthalten sind. Die Schichtenreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht der ungeschichteten Stile immer die letzte ist. Es gibt keine Möglichkeit, die Schichtordnung nach der Erstellung zu ändern.

Wir haben einige Stile der Schicht mit dem Namen `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, dann erstellt das Angeben des Namens in einer `@layer` At-Regel, ob mit oder ohne Zuweisung von Stilen zur Schicht, die Schicht; dies fügt die Schicht am Ende der bestehenden Schichtnamenreihe hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile im benannten Block den Stilen der zuvor existierenden Schicht hinzugefügt – das Angeben von Stilen in einem Block durch Wiederverwenden eines bestehenden Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stile einer Schicht ohne Benennung zugewiesen werden. Stile können einer unbenannten Schicht nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Der nachfolgende Gebrauch von `@layer` ohne Schichtname erstellt zusätzliche unbenannte Schichten; es fügt keiner zuvor existierenden unbenannten Schicht Stile hinzu.

Die `@layer` At-Regel erstellt eine Schicht, ob benannt oder nicht, oder fügt Stile einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>` genannt, dies ist nur, damit wir sie erklären können. Es sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder ihnen zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht erklärten Stile werden zu einer impliziten Schicht zusammengefasst. Im obigen Beispiel wurde die erste Deklaration die Eigenschaft `color: #333` auf `body` gesetzt. Diese wurde außerhalb einer Schicht erklärt. Normale ungeschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die ungeschichteten Stile eine niedrigere Spezifizität haben und zuerst in der Erscheinungsreihenfolge kommen. Dies erklärt, warum, obwohl das ungeschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese ungeschichteten Stile enthält, Vorrang hat, als ob sie als letzte deklarierte Schicht war.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Derzeit gibt es keine Möglichkeit, Schichten nach der Deklaration neu zu ordnen.

Im folgenden interaktiven Beispiel weisen wir zwei Schichten Stile zu, erstellen sie und benennen sie dabei. Da sie bereits existieren, indem sie bei der ersten Verwendung erstellt wurden, macht die Deklaration in der letzten Zeile nichts.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-order.html", '100%', 500)}}

Versuchen Sie, die letzte Zeile, `@layer site, page;`, so zu verschieben, dass sie die erste Zeile wird. Was passiert dann?

#### Schichtenerstellung und Medienabfragen

Wenn Sie eine Schicht mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Featureabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) definieren und die Medien nicht übereinstimmen oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie die Änderung der Größe Ihres Geräts oder Browsers die Schichtenreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site` Schicht nur in breiteren Browsern. Wir weisen dann in dieser Reihenfolge Stile den Schichten `page` und `site` zu.

{{EmbedGHLiveSample("css-examples/learn/layers/media-order.html", '100%', 500)}}

Auf breiten Bildschirmen wird die `site` Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` Vorrang vor `page`, da es auf schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import) Regel ermöglicht es Benutzern, Stile aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen im Stylesheet oder `<style>`-Block definiert werden. Die `@import`-Anweisung muss zuerst kommen, bevor jegliche Stile erscheinen, kann jedoch von einer `@layer` At-Regel, die eine oder mehrere Schichten erstellt, gefolgt werden, solange diesen Schichten keine Stile zugewiesen werden. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset) Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht, jeweils:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in eine einzige Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Schicht:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Stile importieren und Schichten basierend auf spezifischen Bedingungen mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Featureabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) erstellen. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht nur dann, wenn der Browser `display: ruby` unterstützt, und die zu importierende Datei ist abhängig von der Breite des Bildschirms.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby) and
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby) and
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}} Methode zum Verlinken von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` nicht innerhalb des Stylesheets verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder einer anonymen Schicht. Jede Kaskadenschicht, selbst eine anonyme, kann verschachtelte Schichten enthalten. In eine andere Schicht importierte Schichten werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile des Verschachtelns von Schichten

Die Fähigkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in eine Schicht importieren werden. Ebenso ermöglicht das Verschachteln das Importieren von Drittanbieter-Stylesheets in eine Schicht, ohne sich Gedanken darüber machen zu müssen, ob dieses Stylesheet selbst Schichten enthält. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen über konfliktreiche Schichtennamen zwischen externen und internen Stylesheets machen.

### Erstellen von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit den gleichen Methoden erstellt werden, die für reguläre Schichten beschrieben wurden. Zum Beispiel können sie mit der `@layer` At-Regel gefolgt von den Namen einer oder mehrerer Schichten unter Verwendung einer Punktnotation erstellt werden. Mehrere Punkte und Schichtnamen bedeuten mehrere Verschachtelungen.

Wenn Sie eine Blockat-Regel `@layer` innerhalb einer anderen Blockat-Regel `@layer` verschachteln, ob mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import` Deklaration mit dem `layer` Schlüsselwort oder der `layer()` Funktion importiert wird, werden die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import` Erklärung Schichten enthält, werden diese Schichten verschachtelte Schichten innerhalb dieser anonymen oder benannten Schicht.

Betrachten wir das folgende Beispiel:

```css
@import url("components-lib.css") layer(components);
@import url("narrowtheme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei Schichten enthält, ob benannt oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrowtheme.css` in die `narrow`-Schicht, die eine Unterschicht der `components`-Schicht ist. Die verschachtelte `components.narrow` Schicht wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall würden die Inhalte von `narrowtheme.css` der verschachtelten `components.narrow` Schicht hinzugefügt. Zusätzliche benannte verschachtelte Schichten können der `components`-Schicht unter Verwendung des Musters `components.<layerName>` hinzugefügt werden. Wie zuvor erwähnt, können unbenannte Schichten erstellt werden, aber sie können danach nicht mehr angesprochen werden.

Betrachten wir ein weiteres Beispiel, bei dem wir [importieren `layers1.css in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Erklärung:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne Schicht mit dem Namen `example` erstellen, die einige Deklarationen und fünf verschachtelte Schichten enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen der Vorrangstellung basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt ihre Vorrangstellung. Daher ist die Reihenfolge der Schichten sehr wichtig. In gleicher Weise, wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsschicht und Wichtigkeit.

### Vorrangordnung der regulären Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css Stile werden der impliziten Schicht von ungeschichteten Stilen hinzugefügt). Nehmen wir an, dass die drei Dateien (`A.css`, `B.css`, und `C.css`) keine weiteren Schichten enthalten. Die folgende Liste zeigt, wo Stile innerhalb und außerhalb dieser Dateien sortiert werden, von geringster (1) Vorrangstellung bis zur höchsten (10).

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungeschichtete normale Stile (`C.css`)
4. Inline normale Stile
5. animierende Stile
6. ungeschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. Übergangsstile

Normale Stile, die in Schichten erklärt sind, erhalten die niedrigste Priorität und werden nach der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben die niedrigste Vorrangstellung, und normale Stile in der zuletzt erstellten Schicht haben die höchste Vorrangstellung unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` erklärt werden, werden von jedem nachfolgenden Styling auf der Liste überschrieben, wenn Konflikte bestehen.

Nächstes sind alle Stile, die außerhalb von Schichten erklärt werden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle konkurrierenden Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht erklärt sind, haben immer höhere Vorrangstellung als Stile, die _sind_ in einer Schicht erklärt (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style` Attribut](/de/docs/Web/HTML/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise erklärt werden, haben Vorrang über normale Stile, die in den geschichteten und ungeschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css`, and `C.css`) gefunden werden.

Animierende Stile haben höhere Vorrangstellung als alle normalen Stile, einschließlich Inline normaler Stile.

Wichtige Stile, das heißt Eigenschaftswerte, die das `!important` Flag enthalten, haben Vorrang über alle zuvor erwähnten Stile auf unserer Liste. Sie werden in umgekehrter Reihenfolge von normalen Stilen sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert sind, haben weniger Vorrang als diejenigen, die innerhalb einer Schicht deklariert sind. Wichtige Stile innerhalb von Schichten werden auch nach der Reihenfolge der Schichtenerstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht die niedrigste Vorrangstellung, und die zuerst erstellte Schicht hat die höchste Vorrangstellung unter den deklarierten Schichten.

Inline wichtige Stile haben wieder höhere Vorrangstellung als wichtige Stile, die anderswo deklariert werden.

Übergangsstile haben die höchste Vorrangstellung. Wenn ein normaler Eigenschaftswert übergeht, hat er Vorrang über alle anderen Eigenschaftswertedeklarationen, sogar über wichtige Inline-Stile; aber nur während des Übergangs.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-precedence.html", '100%', 500)}}

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mit einer `@layer` Deklaration ohne Stile definiert. Die Schichtstile werden in zwei `@layer` Blockat-Regeln definiert, die nach der `h1` CSS-Regel, die außerhalb einer Schicht erklärt wird, erscheinen.

Die Inline-Stile, die auf das `h1` Element mit dem `style` Attribut hinzugefügt wurden, setzen einen normalen `color` und einen wichtigen `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu übertreffen.

Das normale `text-decoration` und wichtige `box-shadow` sind kein Teil der `style` Inline-Stile und können daher überschrieben werden. Für normale nicht-Inline-Stile haben ungeschichtete Stile Vorrang. Bei wichtigen Stilen zählt auch die Schichtenreihenfolge. Während normale ungeschichtete Stile alle normalen in einer Schicht gesetzten Stile übertreffen, ist die Vorrangstellung bei wichtigen Stilen umgekehrt; ungeschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten erklärt werden, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important` Flag. Für normale Stile überschreibt die `B`-Schicht, die zuletzt deklariert wurde, Stile in der früher deklarierten Schicht `A`. Für normale Stile haben spätere Schichten Vorrang vor früheren Schichten. Die Vorrangstellung ist für wichtige Stile umgekehrt. Für die wichtigen `font-weight` Deklarationen hat die Schicht `A`, da sie zuerst deklariert ist, Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtenreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` auf `@layer B, A;` ändern. Versuchen Sie das. Welche Stile ändern sich dadurch, und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten deklariert, ohne ihnen Stile zuzuweisen, indem wir `@layer` gefolgt von den Namen unserer Schichten verwendet haben, endend mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich gewesen. Warum? Wir haben Stilregeln in benannten `@layer` Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Wenn sie nicht gewesen wären, hätten diese Regelblöcke sie erstellt, in dieser Reihenfolge.

Wir haben diese erste Zeile aus zwei Gründen hinzugefügt: Zum einen, damit Sie die Zeile einfach bearbeiten und die Reihenfolge wechseln können, und zum anderen, weil Sie oft feststellen werden, dass das Erklären der Reihenfolge der Schichtnach vorn als Best Practice für Ihr Schichtordnungsmanagement am besten geeignet ist.

Zusammenfassend:

- Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Schichtenreihenfolge zu ändern.
- Die Vorrangsreihenfolge von Schichten für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang über normale geschichtete Stile.
- Die Vorrangsreihenfolge von Schichten bei wichtigen Stilen ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang über ungeschichtete wichtige (und normale) Stile.
- Normale Inline-Stile haben Vorrang über alle normalen Stile, ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang über alle anderen Stile, mit Ausnahme von Stilen, die sich in einem Übergang befinden.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu übertreffen (außer sie zu übergehen, was vorübergehend ist).

### Vorrangordnung der verschachtelten Kaskadenschichten

Die Kaskaden-Vorrangordnung für verschachtelte Schichten ist ähnlich wie bei regulären Schichten, aber innerhalb der Schicht enthalten. Die Vorrangsreihenfolge basiert auf der Erstellungsreihenfolge der verschachtelten Schichten. Nicht verschachtelte Stile in einer Schicht haben Vorrang über verschachtelte normale Stile, wobei die Vorrangsreihenfolge für wichtige Stile umgekehrt ist. Spezifizitätsgewicht zwischen verschachtelten Schichten spielt keine Rolle, obwohl es für konkurrierende Stile innerhalb einer verschachtelten Schicht eine Rolle spielt.

Die folgenden Beispiele erstellen und fügen Stile der `components`-Schicht, der `components.narrow` verschachtelten Schicht, und der `components.wide` verschachtelten Schicht hinzu:

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

Hier ist eine Zusammenfassung der Eigenschaften, die verwendet werden, und warum jede Deklaration angewendet wird:

- `background-color`: Da ungeschichtete normale Stile Vorrang über geschichtete normale Stile haben, gewinnt die `wheat` Farbe.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang über normale verschachtelte Stile haben, gewinnt die `red` Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang über ungeschichtete Stile, mit wichtigen Stilen in früher deklarierten Schichten, die Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichtenerstellung `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang über wichtige Stile in `components.wide` haben, was bedeutet, dass die `purple` Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten festgelegt, daher gewinnt aufgrund der Deklarationsreihenfolge das `20%` Radius.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihr Wissen: Die Kaskade, Aufgabe 2](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie die meisten Punkte in diesem Artikel verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechanismen von CSS-Kaskadenschichten vertraut. Als Nächstes werfen wir einen detaillierten Blick auf [das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}
