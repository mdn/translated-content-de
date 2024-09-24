---
title: Kaskadenschichten
slug: Learn/CSS/Building_blocks/Cascade_layers
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

Diese Lektion zielt darauf ab, Sie in die [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag Ihnen das Durcharbeiten dieser Lektion anfangs weniger relevant und ein wenig theoretischer erscheinen als andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen der Kaskadenschichten zu kennen, falls Sie diesen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird Ihnen das Verständnis der Kaskadenschichten und deren Nutzung helfen, um Schwierigkeiten beim Umgang mit einem Codebestand mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu vermeiden.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es Konflikte zwischen CSS-Selektoren und konkurrierenden Spezifitäten gibt oder wenn Sie darüber nachdenken, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (Studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS-Erste Schritte</a> und <a href="/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Kaskade, Spezifität und Vererbung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie Kaskadenschichten funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Styles"-Panel des Tools zeigt alle Eigenschaftswerte an, die auf das untersuchte Element angewendet werden, zusammen mit dem passenden Selektor und der CSS-Quelldatei. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewandten Stilen zeigt das Styles-Panel durchgestrichene Werte an, die zwar auf das ausgewählte Element gepasst haben, aber aufgrund von Kaskade, Spezifität oder Quellordnung nicht angewendet wurden. Durchgestrichene Stile können aus dem gleichen Ursprung mit Vorrang stammen, aber eine geringere Spezifität haben, oder mit gleichem Ursprung und Spezifität, jedoch früher im Codebestand gefunden wurden. Für jeden angewendeten Eigenschaftswert können mehrere Erklärungen aus vielen verschiedenen Quellen durchgestrichen sein. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet dies, dass dem Wert der Ursprung oder die Wichtigkeit fehlt.

Oft, je komplexer die Website wird, desto mehr Stylesheets kommen hinzu, was die Quellordnung der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Pflege von Stylesheets in solchen Codebeständen. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die letztendlich angewandten CSS-Deklarationen ermöglichen und Webentwicklern gestatten, Abschnitte von CSS zu priorisieren, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte geben einen kurzen Überblick über die wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading" (Kaskadierend). Es ist die Methode, mit der Stile zusammengeführt werden. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die für jede Eigenschaft für jedes Element zugewiesenen Werte zu bestimmen. Wir listen diese Schritte hier kurz auf und gehen dann genauer auf Schritt 4 ein, **Kaskadenschichten**, was Sie hier lernen wollten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektor-Match für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb der beiden Wichtigkeitseimer die Regeln nach Autor-, Benutzer- oder Benutzeragent-Ursprung.
4. **Kaskadenschichten:** Sortieren Sie innerhalb jedes der sechs Ursprungs-Wichtigkeitseimer nach Kaskadenschicht. Die Schicht-Reihenfolge für normale Deklarationen erfolgt von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge wird für wichtige Stile umgekehrt, wobei nicht geschichtete wichtige Stile die geringste Priorität haben.
5. **Spezifität:** Sortieren Sie für konkurrierende Stile in der Ursprungs-Schicht mit Vorrang Deklarationen nach [Spezifität](/de/docs/Web/CSS/Specificity).
6. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb gescopter Regeln mit der kleinsten Anzahl von Sprüngen in der DOM-Hierarchie bis zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
7. **Erscheinungsreihenfolge:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang die gleiche Spezifität und Scoping-Nähe haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt gehen nur die "noch im Rennen" befindlichen Deklarationen in den nächsten Schritt über. Wenn nur eine Deklaration "im Rennen" bleibt, "gewinnt" sie, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types): Benutzeragent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungs-Eimer nach Ursprung und Wichtigkeit. Es gibt acht Ebenen des Vorrangs: die sechs Ursprungs-Eimer, Eigenschaften, die übergehen, und Eigenschaften, die animiert werden. Die Vorrangsreihenfolge reicht von normalen Benutzeragent-Stilen, die den niedrigsten Vorrang haben, bis hin zu aktuell angewandten Animationen, bis hin zu wichtigen Benutzeragent-Stilen und schließlich zu übergehenden Stilen, die den höchsten Vorrang haben:

1. Benutzeragent normale Stile
2. Benutzer normale Stile
3. Autoren normale Stile
4. Stile, die animiert werden
5. Autoren wichtige Stile
6. Benutzer wichtige Stile
7. Benutzeragent wichtige Stile
8. Stile, die übergehen

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt mit dem {{HTMLElement('style')}}-Element auf ein Element angewendet werden, sind Autorenstile. Abgesehen von animierten und übergehenden Stilen haben normale Benutzeragent-Stile den niedrigsten Vorrang; wichtige Benutzeragent-Stile haben den höchsten.

### Ursprung und Spezifität

Für jede Eigenschaft "gewinnt" die Deklaration, die von dem Ursprung mit Vorrang auf Grundlage des Gewichts (normal oder wichtig) stammt. Ignoriert man die Schichten für den Moment, wird der Wert des Ursprungs mit dem höchsten Vorrang angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, werden die [Spezifität](/de/docs/Web/CSS/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autorenstile angewendet, daher werden nur Benutzeragent-Stile angewendet (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die von Autorenstilen gesetzt wurden, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass bei konkurrierenden Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Vorrang unabhängig von der Spezifität im Ursprung ohne Vorrang angewendet werden.

{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}

Der "konkurrierende" Selektor im Benutzeragent-Stylesheet zum Zeitpunkt dieses Schreibens ist `a:any-link`, der ein Spezifizitätsgewicht von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0`-Selektor im Autoren-Stylesheet, ist es egal, wenn der Selektor in Ihrem aktuellen Benutzeragenten anders ist: Die Spezifizitätsgewichte von Autoren- und Benutzeragentursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie Spezifitätsgewichte berechnet werden](/de/docs/Web/CSS/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektorspezifität. Wenn eine Eigenschaft eines Elements mit einer normalen Stildeklaration in mehreren Ursprüngen gestylt wird, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder Benutzeragent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, gewinnt das Benutzeragent-Stylesheet immer über Autoren- und Benutzerstile. Der Vorrang des Kaskadenursprungs stellt sicher, dass Spezifikationskonflikte zwischen Ursprüngen nie auftreten.

Eine letzte Anmerkung, bevor wir fortfahren: Die Erscheinungsreihenfolge wird nur relevant, wenn konkurrenzierende Deklarationen im Ursprung des Vorrangs die gleiche Spezifität haben.

## Übersicht der Kaskadenschichten

Wir verstehen nun den "Vorrang des Kaskadenursprungs", aber was ist der "Vorrang der Kaskadenschicht"? Wir beantworten diese Frage, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie geordnet sind und wie Stile Kaskadenschichten zugewiesen werden. Wir behandeln [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten. Zunächst klären wir, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangordnung der Kaskadenschicht

Ähnlich wie wir sechs Prioritätsebenen auf Grundlage des Ursprungs und der Wichtigkeit haben, ermöglichen es Kaskadenschichten, eine Sub-Ursprungs-Prioritätsebene innerhalb eines dieser Ursprünge zu schaffen.

Innerhalb jedes der sechs Ursprungs-Eimer kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Vorrangordnung zwischen den Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungs-Eimern werden die Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangsreihenfolge erfolgt von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile kaskadieren zusammen in einer impliziten Schicht, die Vorrang vor allen nicht übergehenden normalen Stilen hat. Die nicht geschichteten wichtigen Stile haben eine geringere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang vor wichtigen Stilen in später deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir uns auf Autorenstile beschränken, aber bedenken Sie, dass Schichten auch in Benutzer- und Benutzeragent-Stylesheets existieren können.

### Probleme, die durch Kaskadenschichten gelöst werden können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Egal wie viele Stylesheets eingebunden sind, all diese Stile kaskadieren zusammen in einem einzelnen Ursprung: dem _Autoren_-Stylesheet.

Stile von vielen Quellen zusammenzuführen, insbesondere von Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Unterschiedliche Teams können unterschiedliche Methoden haben; eines kann die Beste Praxis haben, die Spezifität zu reduzieren, während ein anderes die Norm hat, ein `id` in jeden Selektor einzuschließen.

Spezifitätskonflikte können schnell eskalieren. Ein Webentwickler kann einen "schnellen Fix" durch Hinzufügen eines `!important`-Flags vornehmen. Obwohl dies wie eine einfache Lösung erscheinen mag, verschiebt es oft nur den Spezifikationskampf von normalen zu wichtigen Deklarationen.

Auf die gleiche Weise, wie Kaskadenursprünge eine Machtbalance zwischen Benutzer-, Benutzeragent- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht in einem Ursprung ein Sub-Ursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jede Drittanbieter erstellt werden, mit Stilvorrang basierend auf der Schicht-Reihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets gegenüber anderen Stylesheets, ohne sich Gedanken über Spezifität zwischen diesen Sub-Ursprüngen machen zu müssen.

Der Vorrang von Schichten übertrumpft immer die Spezifität des Selektors. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität spielt nach wie vor eine Rolle bei konkurrierenden Eigenschaftswerten innerhalb einer Schicht, aber es gibt keine Spezifitätsbedenken zwischen Schichten, da nur die höchste Prioritätschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die durch verschachtelte Kaskadenschichten gelöst werden können

Kaskadenschichten ermöglichen die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten.

Beispielsweise kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht wird die Komponentenbibliothek dem Autorenursprung hinzufügen und alle Spezifikationskonflikte mit anderen Autorenstilen entfernen. Innerhalb der `components`-Schicht kann ein Entwickler wählen, verschiedene Themes zu definieren, jedes als separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Theme-Schichten kann basierend auf Medienabfragen (siehe den Abschnitt [Schichterstellung und Medienabfragen](#schichterstellung_und_medienabfragen) weiter unten) definiert werden, z. B. Fenstergröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themes zu erstellen, die nicht auf Spezifität basieren und nicht in Konflikt stehen.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themes arbeitet.

Die Fähigkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge um sich widersprechende Schichtnamen. Wir werden dies im Abschnitt [verschachtelte Schicht](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementvorgaben, Drittanbieter-Bibliotheken, Themes, Komponenten, Überschreibungen und andere Styling-Angelegenheiten darzustellen – und sind in der Lage, die Kaskade der Schichten auf eine explizite Weise umzuordnen, ohne Selektoren oder Spezifität innerhalb einer Schicht zu ändern oder sich auf die Reihenfolge des Auftretens zu verlassen, um Konflikte über Schichten hinweg zu lösen."
>
> —[Cascading and Inheritance specification](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können auf eine der folgenden Arten erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer)-Anweisung, Deklaration von Schichten mit `@layer`, gefolgt von den Namen von einer oder mehreren Schichten. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Blockregel, bei der alle Stile innerhalb eines Blocks zu einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei in diese Schicht einfügt.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wird kein Schichtname in der `@layer`-Regel oder `@import` mit `layer()` angegeben, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht sind, oder "unlayered styles", kaskadieren zusammen in eine letzte implizite Schicht.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Schicht etwas detaillierter behandeln, bevor wir über verschachtelte Schichten sprechen.

### Die @layer-Anweisung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Deklarationen von Schichten mithilfe von `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne Stile zuzuweisen, sind eine Möglichkeit, die [Schicht-Reihenfolge](#ermittlung_des_vorrangs_auf_grundlage_der_schichtreihenfolge) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer)-CSS-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangsreihenfolge festzulegen, wenn es mehrere Kaskadenschichten gibt. Die folgende Regel deklariert drei Schichten, in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie werden oft wollen, dass Ihre erste CSS-Zeile diese `@layer`-Anweisung ist (natürlich mit Schichtnamen, die für Ihre Website sinnvoll sind), um die volle Kontrolle über die Schicht-Reihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, ist die Schichtreihenfolge `theme`, `layout` und `utilities`. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, werden diese drei Schichten erstellt und am Ende der Liste der vorhandenen Schichten hinzugefügt, solange Schichten mit diesen Namen nicht bereits existieren. Wenn jedoch bereits eine Schicht mit demselben Namen existiert, erstellt die obige Anweisung nur zwei neue Schichten. Zum Beispiel, wenn `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wäre in diesem Fall `layout`, `theme` und `utilities`.

### Die @layer-Blockregel für benannte und anonyme Schichten

Schichten können mit der Blockregel `@layer` erstellt werden. Wenn eine `@layer`-Regel von einem Bezeichner und einem Block von Stilen gefolgt wird, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser Regel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen nicht bereits existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der bereits bestehenden Schicht hinzugefügt. Wenn bei der Erstellung eines Stilblocks mit `@layer` kein Name angegeben wird, werden die Stile in dieser Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockregeln und eine `@layer`-Anweisung benutzt. Dieses CSS tut Folgendes in der angegebenen Reihenfolge:

1. Erstellt eine benannte `layout`-Schicht.
2. Erstellt eine unbenannte, anonyme Schicht.
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, weil `layout` bereits existiert.
4. Fügt zusätzliche Stile zur bereits existierenden `layout`-Schicht hinzu.
5. Erstellt eine zweite unbenannte, anonyme Schicht.

```css
/* Datei: layers1.css */

/* unlayered styles */
body {
  color: #333;
}

/* erstellt die erste Schicht: `layout` */
@layer layout {
  main {
    display: grid;
  }
}

/* erstellt die zweite Schicht: eine unbenannte, anonyme Schicht */
@layer {
  body {
    margin: 0;
  }
}

/* erstellt die dritte und vierte Schicht: `theme` und `utilities` */
@layer theme, layout, utilities;

/* fügt Stile zur bereits existierenden `layout`-Schicht hinzu */
@layer layout {
  main {
    color: #000;
  }
}

/* erstellt die fünfte Schicht: eine unbenannte, anonyme Schicht */
@layer {
  body {
    margin: 1vw;
  }
}
```

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - zusammen mit einer sechsten, impliziten Schicht von unlayered styles enthalten im `body` Stilblock. Die Schichtordnung ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht von unlayered styles immer zuletzt kommt. Es gibt keine Möglichkeit, die Schichtreihenfolge nach der Erstellung zu ändern.

Wir haben einige Stile der benannten Schicht `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, dann erstellt die Angabe des Namens in einer `@layer`-Regel, mit oder ohne Zuweisung von Stilen an die Schicht, diese Schicht; dies fügt die Schicht am Ende der Reihenfolge der vorhandenen Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks den Stilen der zuvor bestehenden Schicht hinzugefügt – die Angabe von Stilen in einem Block durch Wiederverwendung eines vorhandenen Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stile einer Schicht ohne Benennung der Schicht zugewiesen werden. Stile können einer unbenannten Schicht nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Die spätere Verwendung von `@layer` ohne Schichtnamen erstellt zusätzliche unbenannte Schichten; sie fügt keine Stile zu einer zuvor bestehenden unbenannten Schicht hinzu.

Die `@layer`-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stile einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>` genannt, dies dient nur zu Erklärungszwecken. Dies sind eigentlich unbenannte Schichten. Es gibt keine Möglichkeit, auf sie zuzugreifen oder weitere Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden in einer impliziten Schicht zusammengefasst. Im Beispielcode oben legt die erste Deklaration die `color: #333`-Eigenschaft auf `body` fest. Diese wurde außerhalb einer Schicht deklariert. Normale unlayered Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die unlayered styles eine geringere Spezifikität haben und zuerst in der Erscheinungsreihenfolge kommen. Dies erklärt, warum selbst wenn das unlayered CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese unlayered styles enthält, Vorrang hat, als wäre sie die zuletzt deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, die Schichtreihenfolge nach der Deklaration zu ändern.

Im folgenden interaktiven Beispiel weisen wir Stile zwei Schichten zu und erstellen sie dabei. Da sie bereits existieren, weil sie beim ersten Gebrauch erstellt wurden, bewirkt ihre Deklaration in der letzten Zeile nichts.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-order.html", '100%', 500)}}

Versuchen Sie, die letzte Zeile, `@layer site, page;`, an den Anfang zu verschieben. Was passiert?

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht unter Verwendung von [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)- oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)-Abfragen definieren und das Medium keine Übereinstimmung ist oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie sich die Schichtreihenfolge ändern kann, wenn Sie die Größe Ihres Geräts oder Browsers ändern. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Dann weisen wir Stile den Schichten `page` und `site` zu, in dieser Reihenfolge.

{{EmbedGHLiveSample("css-examples/learn/layers/media-order.html", '100%', 500)}}

In großen Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, `site` hat weniger Vorrang als `page`. Andernfalls hat `site` Vorrang vor `page`, weil es später auf schmalen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss an erster Stelle stehen, vor allen Stilen, kann jedoch von einer `@layer`-Regel gefolgt werden, die eine oder mehrere Schichten erstellt, ohne ihnen Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht, jeweils:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in eine einzelne Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Schicht:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Stile importieren und Schichten auf der Grundlage spezifischer Bedingungen erstellen, indem Sie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die importierte Datei von der Breite des Bildschirms abhängt.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby) and
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby) and
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode zur Verlinkung von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` nicht innerhalb des Stylesheets verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder anonymen Schicht. Jede Kaskadenschicht, selbst eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile des Verschachtelns von Schichten

Die Fähigkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen darüber machen zu müssen, ob andere Teams sie in eine Schicht importieren werden. Ebenso ermöglicht das Verschachteln das Importieren von Drittanbieter-Stylesheets in eine Schicht, ohne sich Gedanken darüber machen zu müssen, ob dieses Stylesheet selbst Schichten enthält. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen um sich widersprechende Schichtnamen zwischen externen und internen Stylesheets machen.

### Erstellen verschachtelter Kaskadenschichten

Verschachtelte Schichten können mit den gleichen Methoden wie reguläre Schichten erstellt werden. Zum Beispiel können sie mit der `@layer`-Regel erstellt werden, gefolgt von den Namen einer oder mehrerer Schichten mit einer Punktnotation. Mehrere Punkte und Schichtnamen bezeichnen mehrere Verschachtelungen.

Wenn Sie einen `@layer`-Block in einer anderen `@layer`-Blockregel verschachteln, ob mit oder ohne Name, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso werden bei der Einbettung eines Stylesheets mit einer `@import`-Deklaration, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten zu verschachtelten Schichten innerhalb dieser anonymen oder benannten Schicht.

Betrachten wir das folgende Beispiel:

```css
@import url("components-lib.css") layer(components);
@import url("narrowtheme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei Schichten enthält, benannt oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrowtheme.css` in die `narrow`-Schicht, die eine Unter-Schicht von `components` ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall würde der Inhalt von `narrowtheme.css` der verschachtelten `components.narrow`-Schicht hinzugefügt. Zusätzliche verschachtelte benannte Schichten können der `components`-Schicht unter Verwendung des Musters `components.<SchichtName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können anschließend nicht mehr referenziert werden.

Betrachten wir ein weiteres Beispiel, bei dem wir [`layers1.css` in eine benannte Schicht importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers) unter Verwendung der folgenden Anweisung:

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

## Ermittlung des Vorrangs auf Grundlage der Schichtreihenfolge

Die Reihenfolge der Schichten bestimmt ihren Vorrang. Daher ist die Reihenfolge der Schichten sehr wichtig. Auf die gleiche Weise, wie die Kaskade nach Ursprüngen und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungs-Schicht und Wichtigkeit.

### Vorrangsreihenfolge der regulären Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (die `C.css`-Stile werden der impliziten Schicht von unlayered styles hinzugefügt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Schichten enthalten. Die folgende Liste zeigt, wo die innerhalb und außerhalb dieser Dateien deklarierten Stile von den niedrigsten (1) bis zu den höchsten (10) Vorrang haben:

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. unlayered normale Stile (`C.css`)
4. inline normale Stile
5. animierte Stile
6. unlayered wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. inline wichtige Stile
10. übergehende Stile

Normale Stile, die innerhalb von Schichten deklariert werden, erhalten die niedrigste Priorität und werden nach der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben den niedrigsten Vorrang, und normale Stile in der zuletzt erstellten Schicht haben den höchsten Vorrang unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert werden, werden durch alle nachfolgenden Stylings auf der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb von Schichten deklariert sind. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle konkurrierenden Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer Vorrang vor Stilen, die _in_ einer Schicht deklariert sind (außer bei wichtigen Styles).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang vor normalen Stilen, die in den nicht geschichteten und geschichteten Stylesheets (`firstLayer - A.css`, `secondLayer - B.css` und `C.css`) gefunden werden.

Animierende Stile haben Vorrang vor allen normalen Stilen, einschließlich normaler Inline-Stile.

Wichtige Stile, das heißt Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen Stilen, die zuvor in unserer Liste erwähnt wurden. Sie sind in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert sind, haben weniger Vorrang als die innerhalb einer Schicht deklarierten. Wichtige Stile, die innerhalb von Schichten zu finden sind, sind auch in der Reihenfolge der Schichterstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht den niedrigsten Vorrang, und die zuerst erstellte Schicht hat den höchsten Vorrang unter den deklarierten Schichten.

Wichtige Inline-Stile haben erneut Vorrang vor allen anderen Stilen, mit Ausnahme der Stile, die gerade übergehen.

Übergehende Stile haben den höchsten Vorrang. Wenn ein normaler Eigenschaftswert gerade übergeht, hat er Vorrang vor allen anderen Eigenschaftswert-Deklarationen, selbst vor wichtigen Inline-Stilen; dies gilt jedoch nur während des Übergangs.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-precedence.html", '100%', 500)}}

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mithilfe einer `@layer`-Anweisung ohne Stile definiert. Die Schichtstile werden in zwei `@layer`-Blockregeln definiert, die nach der CSS-Regel `h1` stehen, die außerhalb jeder Schicht deklariert wird.

Die Inline-Stile, die auf das `h1`-Element mit dem `style`-Attribut angewendet werden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normale `text-decoration` und die wichtige `box-shadow` sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Für normale nicht-inline Stile haben ungeschichtete Stile Vorrang. Für wichtige Stile spielt auch die Schichtordnung eine Rolle. Während normale ungeschichtete Stile alle normalen Stile, die in einer Schicht festgelegt wurden, überschreiben, ist die Vorrangsreihenfolge bei wichtigen Stilen umgekehrt; ungeschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert sind, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Für normale Stile hat die Schicht `B`, die zuletzt deklariert wurde, Vorrang vor Stilen in der zuvor deklarierten Schicht `A`. Für normale Stile haben später deklarierten Schichten Vorrang vor früher deklarierten. Die Vorrangsreihenfolge ist bei wichtigen Stilen umgekehrt. Für die wichtigen `font-weight` Deklarationen hat die Schicht `A`, die zuerst deklariert wurde, Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Versuchen Sie es, welche Stile werden dadurch geändert und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten deklariert, ohne Stile zuzuweisen, indem wir `@layer`, gefolgt von den Namen unserer Schichten, mit einem Semikolon abgeschlossen haben. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich gewesen. Warum? Wir haben Stilregeln in den benannten `@layer`-Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Wären sie nicht erstellt worden, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen eingefügt: erstens, damit Sie die Zeile einfach bearbeiten und die Reihenfolge ändern können, und zweitens, weil sich oft herausstellt, dass das Deklarieren der Schichtreihenfolge im Voraus die beste Praxis für Ihr Schichtordnungsmanagement ist.

Zusammenfassend:

- Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Nach der Erstellung gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Der Schichtvorrang für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Der Schichtvorrang für wichtige Stile ist umgekehrt, wobei die früher erstellten Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von Stilen, die gerade übergehen.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer durch Übergehen, was temporär ist).

### Vorrangsreihenfolge der verschachtelten Kaskadenschichten

Die Vorrangsreihenfolge für verschachtelte Schichten ist ähnlich wie bei regulären Schichten, jedoch innerhalb der Schicht. Die Vorrangsreihenfolge basiert auf der Reihenfolge der Erstellung der verschachtelten Schicht. Nicht-verschachtelte Stile in einer Schicht haben Vorrang vor verschachtelten normalen Stilen, wobei die Vorrangsreihenfolge für wichtige Stile umgekehrt ist. Die Spezifizitätsgewichtung zwischen verschachtelten Schichten spielt keine Rolle, obwohl sie bei konkurrierenden Stilen innerhalb einer verschachtelten Schicht wichtig ist.

Das Folgende erstellt und fügt Stile zu der `components`-Schicht, der verschachtelten `components.narrow`-Schicht und der verschachtelten `components.wide`-Schicht hinzu:

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

{{EmbedLiveSample("Vorrangsreihenfolge der verschachtelten Kaskadenschichten", "100%", "250")}}

Hier ist eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Da unlayered normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt `wheat` als Farbe.
- `border`: Da innerhalb einer Schicht nicht-verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `rote` Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor unlayered Stilen, wobei wichtige Stile in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der Erstellung der verschachtelten Schicht `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass `purple` als Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten festgelegt, sodass in der Deklarationsreihenfolge `20%` Radius gewinnt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechanismen der CSS-Kaskadenschichten vertraut. Als nächstes werden wir uns im Detail mit [dem Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) beschäftigen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}
