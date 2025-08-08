---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Diese Lektion zielt darauf ab, Sie mit [Kaskadenschichten](/de/docs/Web/CSS/@layer) vertraut zu machen, einem fortgeschritteneren Feature, das auf den grundlegenden Konzepten des [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, könnte die Bearbeitung dieser Lektion zunächst weniger relevant und etwas akademischer erscheinen als andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen von Kaskadenschichten zu kennen, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadenschichten und das Wissen, wie Sie deren Stärke nutzen können, Ihnen viel Mühe ersparen, eine Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu verwalten.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es zu Konflikten zwischen CSS-Selektoren und konkurrierenden Spezifitäten kommt oder wenn Sie erwägen, [`!wichtig`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Konflikte behandeln</a>).
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

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers untersuchen. Das „Styles“-Panel des Werkzeugs zeigt alle auf das überprüfte Element angewendeten Eigenschaftswerte zusammen mit dem passenden Selektor und der CSS-Quelldatei an. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte, die auf das übereinstimmende Element angewendet werden.

Zusätzlich zu den angewendeten Styles zeigt das Styles-Panel durchgestrichene Werte an, die mit dem ausgewählten Element übereinstimmten, aber aufgrund der Kaskade, Spezifität oder Quellordnung nicht angewendet wurden. Durchgestrichene Styles können vom gleichen Ursprung mit Vorrang stammen, aber mit niedrigerer Spezifität, oder mit passendem Ursprung und Spezifität, wurden aber früher in der Codebasis gefunden. Für jeden angewendeten Eigenschaftswert können mehrere Deklarationen aus vielen verschiedenen Quellen durchgestrichen sein. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit höherer Spezifität hat, bedeutet das, dass dem Wert der Ursprung oder die Wichtigkeit fehlt.

Oftmals, wenn die Komplexität einer Website zunimmt, steigt die Anzahl der Stylesheets, was die Quellordnung der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten erleichtern die Pflege von Stylesheets über solche Codebasen hinweg. Kaskadenschichten sind explizite Spezifitätscontainer, die einfachere und größere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten und Webentwicklern ermöglichen, Abschnitte von CSS zu priorisieren, ohne Spezifität bekämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten einen kurzen Überblick über die wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading" (Kaskadierung). Es ist die Methode, durch die Styles zusammenfließen. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann ausführlicher auf Schritt 4 eingehen, **Kaskadenschichten**, also das, was Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektortreffer für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Styles sind solche, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb jedes der beiden Wichtigkeits-Buckets die Regeln nach Autoren-, Benutzer- oder Benutzer-Agent-Ursprung.
4. **Kaskadenschichten:** Sortieren Sie innerhalb jedes der sechs Ursprungs-Wichtigkeits-Buckets nach Kaskadenschicht. Die Schichtreihenfolge für normale Deklarationen ist von der ersten erstellten Schicht bis zur letzten, gefolgt von ungeschichteten normalen Styles. Diese Reihenfolge ist für wichtige Styles umgekehrt, wobei ungeschichtete wichtige Styles die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Styles in der Vorrangs-Schicht sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Nähe des Scopings**: Wenn zwei Selektoren in der Vorrangs-Schicht die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von gescopten Regeln mit der geringsten Anzahl von "Hops" nach oben entlang der DOM-Hierarchie zur Scope-Root. Siehe [How `@scope` conflicts are resolved](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Vorrangs-Schicht die gleiche Spezifität und Scope-Nähe haben, gewinnt der Eigenschaftswert aus dem zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt ziehen nur die Deklarationen, die noch „im Rennen“ sind, in den nächsten Schritt weiter, um zu „konkurrieren“. Wenn nur eine Deklaration im Rennen ist, „gewinnt“ sie, und die nachfolgenden Schritte sind gegenstandslos.

### Ursprung und Kaskade

Es gibt drei [Ursprungstypen der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzer-Agent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungs-Buckets nach Ursprung und Wichtigkeit. Es gibt acht Vorrangsstufen: die sechs Ursprungs-Buckets, Eigenschaften, die in Übergang sind und Eigenschaften, die animiert werden. Die Reihenfolge des Vorrangs reicht von normalen Benutzer-Agent-Styles, die den niedrigsten Vorrang haben, bis zu Styles in aktuell angewendeten Animationen, zu wichtigen Benutzer-Agent-Styles, und dann zu Styles, die den höchsten Vorrang haben:

1. normale Benutzer-Agent-Styles
2. normale Benutzer-Styles
3. normale Autoren-Styles
4. Styles, die animiert werden
5. wichtige Autoren-Styles
6. wichtige Benutzer-Styles
7. wichtige Benutzer-Agent-Styles
8. Styles, die Übergängen unterliegen

Der „Benutzer-Agent“ ist der Browser. Der „Benutzer“ ist der Site-Besucher. Der „Autor“ sind Sie, der Entwickler. Styles, die direkt auf ein Element mit dem {{HTMLElement('style')}}-Element deklariert werden, sind Autoren-Styles. Wenn man animierte und übergangsabhängige Styles nicht berücksichtigt, haben normale Benutzer-Agent-Styles den niedrigsten Vorrang; wichtige Benutzer-Agent-Styles haben den höchsten Vorrang.

### Ursprung und Spezifität

Für jede Eigenschaft gewinnt die Deklaration, die vom Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig) stammt. Wenn man Schichten für den Moment ignoriert, wird der Wert vom Ursprung mit dem höchsten Vorrang angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autoren-Styles angewendet, daher werden nur Benutzer-Agent-Styles angewendet (und Ihre persönlichen Benutzer-Styles, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color) durch Autoren-Styles festgelegt, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autoren-Styles „gewinnen“, liegt darin, dass bei Konflikten von Styles aus verschiedenen Ursprüngen die Regeln vom Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität im Ursprung ohne Vorrang.

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

Der „konkurrierende“ Selektor im Benutzer-Agent-Stylesheet zur Zeit des Schreibens ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0`-Selektor im Autoren-Stylesheet, ist es egal, ob der Selektor in Ihrem aktuellen Benutzer-Agent unterschiedlich ist: Die Spezifitätsgewichte aus den Ursprüngen des Autors und des Benutzer-Agents werden nie verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektorspezifität. Wenn eine Eigenschaft eines Elements mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, überschreibt das Autoren-Stylesheet immer die redundanten normalen Eigenschaften, die in einem Benutzer- oder Benutzer-Agent-Stylesheet deklariert sind. Wenn der Style wichtig ist, gewinnt das Benutzer-Agent-Stylesheet immer über Autoren- und Benutzer-Styles. Der Vorrang des Kaskadenursprungs stellt sicher, dass Spezifitätskonflikte zwischen Ursprüngen nie auftreten.

Eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Erscheinens wird nur dann relevant, wenn konkurrierende Deklarationen im Vorrangsursprung die gleiche Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen nun den "Vorrang des Kaskadenursprungs", aber was ist der "Vorrang der Kaskadenschicht"? Wir werden diese Frage beantworten, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie geordnet sind und wie Styles Kaskadenschichten zugewiesen werden. Wir behandeln [reguläre Schichten](#erstellung_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten. Lassen Sie uns zuerst diskutieren, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangsreihenfolge der Kaskadenschicht

Ähnlich wie wir sechs Prioritätsstufen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten, eine Unterursprungs-Priorität innerhalb eines dieser Ursprünge zu erstellen.

Innerhalb jedes der sechs Ursprungs-Buckets kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Erstellungsreihenfolge, die die Vorrangsreihenfolge unter den Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungs-Buckets werden Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangsreihenfolge reicht von der zuerst erstellten Schicht bis zur letzten, gefolgt von ungeschichteten normalen Styles.

Diese Reihenfolge ist für wichtige Styles invertiert. Alle ungeschichteten wichtigen Styles kaskaden zusammen in einer impliziten Schicht mit Vorrang vor allen nicht-übergangsabhängigen normalen Styles. Die ungeschichteten wichtigen Styles haben eine niedrigere Vorrangigkeit als wichtige geschichtete Styles. Die wichtigen Styles in früher deklarierten Schichten haben Vorrang vor wichtigen Styles in nachfolgenden deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autoren-Styles beschränken, aber bedenken Sie, dass Schichten auch in Benutzer- und Benutzer-Agent-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Styles von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Egal wie viele Stylesheets enthalten sind, all diese Styles kaskaden zusammen in einem einzigen Ursprung: dem _Autoren_-Stylesheet.

Styles von vielen Quellen zusammenfließen zu lassen, besonders von Teams, die nicht zusammenarbeiten, kann Probleme schaffen. Unterschiedliche Teams können unterschiedliche Methoden haben; eines könnte die Best Practice der Reduzierung von Spezifität haben, während ein anderes einen Standard für die Aufnahme einer `id` in jeden Selektor haben könnte.

Spezifitätskonflikte können schnell eskalieren. Ein Webentwickler könnte einen "schnellen Fix" erstellen, indem er ein `!important`-Flag hinzufügt. Obwohl dies eine einfache Lösung zu sein scheint, bewegt es oft nur den Spezifitätskampf von normalen zu wichtigen Deklarationen.

Ebenso wie Kaskadenursprünge ein Machtgleichgewicht zwischen Benutzer-, Benutzer-Agent- und Autoren-Styles schaffen, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzelnen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht in einem Ursprung ein Unterursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Style-Vorrang basierend auf der Schichtreihenfolge.

Regeln innerhalb einer Schicht kaskaden zusammen, ohne mit Style-Regeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets gegenüber anderen Stylesheets, ohne sich um die Spezifität zwischen diesen Unterursprüngen kümmern zu müssen.

Schichtvorrang gewinnt immer über Selektorspezifität. Styles in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität spielt immer noch eine Rolle für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifitätsbedenken zwischen Schichten, da nur die Schicht mit der höchsten Priorität für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten ermöglichen die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten.

Beispielsweise kann eine Komponentenbibliothek in eine `Komponenten`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Autorenursprung hinzu und entfernt jegliche Spezifitätskonflikte mit anderen Autoren-Styles. Innerhalb der `Komponenten`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Theimenschichten kann basierend auf Medienabfragen (siehe den Abschnitt [Schichterstellung und Medienabfragen](#schichtkreation_und_medienabfragen) unten) definiert werden, wie Ansichtsfenstergröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die sich nicht aufgrund der Spezifität widersprechen.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeitet.

Die Fähigkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge, sich mit widersprüchlichen Schichtnamen auseinandersetzen zu müssen. Wir werden dies im Abschnitt [verschachtelte Schicht](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Drittanbieterbibliotheken, Themen, Komponenten, Overrides und andere Stylinganliegen darzustellen - und sind in der Lage, die Kaskade der Schichten auf eine explizite Weise neu zu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen den Schichten zu lösen."
>
> —[Spezifikation für Kaskaden und Vererbung](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellung von Kaskadenschichten

Schichten können auf eine der folgenden Arten erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer)-Anweisung, Deklaration von Schichten unter Verwendung von `@layer` gefolgt von den Namen einer oder mehrerer Schichten. Dies erstellt benannte Schichten, ohne ihnen Styles zuzuweisen.
- Die `@layer`-Block-Anweisung, bei der alle Styles innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem Keyword `layer` oder der Funktion `layer()`, die den Inhalt der importierten Datei in diese Schicht einfügt.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn im `@layer`-At-Regel oder `@import` mit `layer()` kein Schichtname angegeben ist, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Reihenfolge des Vorrangs der Schichten ist die Reihenfolge, in der sie erstellt werden. Styles, die nicht in einer Schicht sind, oder „ungeschichtete Styles“, kaskaden zusammen in einem finalen impliziten Label.

Lassen Sie uns die drei Arten der Erstellung einer Schicht etwas ausführlicher behandeln, bevor wir verschachtelte Schichten besprechen.

### Die @layer-Anweisung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge bestimmt, in der die Schichten in Ihrem CSS auftauchen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne ihnen irgendeine Styles zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmung_des_vorrangs_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [CSS `@layer`](/de/docs/Web/CSS/@layer)-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangsreihenfolge zu definieren, wenn es mehrere Kaskadenschichten gibt. Die folgende Anweisung erklärt drei Schichten, in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Oft möchten Sie, dass Ihre erste Zeile CSS diese `@layer`-Deklaration ist (mit Schichtnamen, die für Ihre Website sinnvoll sind, natürlich), um die volle Kontrolle über die Schichtordnung zu haben.

Wenn diese Zeile die erste Zeile eines Site-CSS ist, wird die Schichtordnung `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor dieser Anweisung erstellt wurden, werden diese drei Schichten erstellt und ans Ende der Liste der bestehenden Schichten angehängt, solange Schichten mit diesen Namen noch nicht existieren. Wenn jedoch bereits eine `layout`-Schicht existiert, werden nur `theme` und `utilities` erstellt, und die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer-Block-Anweisung für benannte und anonyme Schichten

Schichten können mit der Block-@layer-Anweisung erstellt werden. Wenn einer @layer-Anweisung ein Bezeichner und ein Größenblock folgen, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Styles in dieser Anweisung werden den Styles der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Styles der zuvor bestehenden Schicht hinzugefügt. Wenn beim Erstellen eines Blockes von Styles mit `@layer` kein Name angegeben wird, werden die Styles in der Anweisung zu einer neuen anonymen Schicht hinzugefügt.

Im untenstehenden Beispiel haben wir vier `@layer`-Block-Anweisungen und eine `@layer`-Anweisung verwendet. Dieses CSS tut folgendes in der aufgelisteten Reihenfolge:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, weil `layout` bereits existiert
4. Fügt der bereits existierenden `layout`-Schicht zusätzliche Styles hinzu
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
    color: black;
  }
}

/* creates the fifth layer: an unnamed, anonymous layer */
@layer {
  body {
    margin: 1vw;
  }
}
```

In dem oben gezeigten CSS haben wir fünf Schichten erstellt: `layout`, `<anonym(01)>`, `theme`, `utilities` und `<anonym(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Schicht von ungeschichteten Styles, die im `body`-Style-Block enthalten sind. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, mit der impliziten Schicht von ungeschichteten Styles, die immer die letzte ist. Es gibt keine Möglichkeit, die Schichtreihenfolge nach der Erstellung zu ändern.

Wir haben einige Styles der Schicht namens `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, erstellt das Angeben des Namens in einer @layer-Anweisung, ob mit oder ohne Zuweisung von Styles zur Schicht, diese und fügt sie dem Ende der Serie von bestehenden Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Styles innerhalb des benannten Blocks den Styles der zuvor bestehenden Schicht hinzugefügt – das Angeben von Styles in einem Block durch Wiederverwendung eines bestehenden Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Styles einer Schicht zugewiesen werden, ohne die Schicht zu benennen. Styles können einer unbenannten Schicht nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne Schichtnamen erstellt zusätzliche unbenannte Schichten; es fügt keine Styles einer zuvor bestehenden unbenannten Schicht hinzu.

Die `@layer`-Anweisung erstellt eine Schicht, ob benannt oder nicht, oder fügt Styles einer Schicht hinzu, falls die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonym(01)>` und die zweite `<anonym(02)>` genannt, nur damit wir sie erklären können. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder zusätzliche Styles zu ihnen hinzuzufügen.

Alle Styles, die außerhalb einer Schicht deklariert werden, werden zusammen in einer impliziten Schicht verbunden. Im obigen Beispielcode wurde die erste Deklaration festgelegt `color: #333` die Eigenschaft auf `body`. Dies wurde außerhalb einer Schicht deklariert. Normale ungeschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die ungeschichteten Styles eine niedrigere Spezifität haben und zuerst in der Erscheinungsreihenfolge kommen. Das erklärt, warum auch wenn das ungeschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese ungeschichteten Styles enthält, Vorrang hat, als wäre sie die zuletzt deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, Schichten nach der Deklaration neu zu ordnen.

Im folgenden Beispiel ordnen wir Styles zwei Schichten zu und erstellen sie dabei und benennen sie. Da sie bereits existieren, da sie beim ersten Mal erstellt wurden, macht das Deklarieren auf der letzten Zeile nichts.

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

Versuchen Sie, die letzte Zeile, `@layer site, page;`, zu verschieben, um sie zur ersten Zeile zu machen. Was passiert?

#### Schichtkreation und Medienabfragen

Wenn Sie eine Schicht mit [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) Abfragen definieren und das Medium kein Match ist oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie sich die Schichtreihenfolge ändern kann, indem Sie die Größe Ihres Geräts oder Browsers ändern. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen dann Styles den `page`- und `site`-Schichten in der Reihenfolge zu.

```html live-sample___media-order
<h1>Is this heading underlined?</h1>
```

```css live-sample___media-order
@media (width >= 50em) {
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

Auf breiten Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Andernfalls hat `site` Vorrang über `page`, weil es nach auf schmalen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es Benutzern, Style-Regeln von anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Styles innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Styles, kann aber von einer `@layer`-Anweisung gefolgt werden, die eine oder mehrere Schichten erstellt, ohne ihnen Styles zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Das folgende Beispiel importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht, jeweils:

```css
@import "components-lib.css" layer(components);
@import "dialog.css" layer(components.dialog);
@import "marketing.css" layer();
```

Sie können mehr als eine CSS-Datei in eine einzige Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Schicht:

```css
@import "comments.css" layer(social);
@import "sm-icons.css" layer(social);
```

Sie können Styles importieren und Schichten basierend auf spezifischen Bedingungen mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) erstellen. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die importierte Datei abhängig von der Bildschirmbreite ist.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode des Verknüpfens von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` innerhalb des Stylesheets nicht verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder anonymen Schicht. Jede Kaskadenschicht, sogar eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile des Schachtelns von Schichten

Die Fähigkeit, Schichten zu verschachteln, ermöglicht Teams, Kaskadenschichten zu erstellen, ohne sich sorgen zu müssen, ob andere Teams sie in eine Schicht importieren. Ebenso ermöglicht das Schachteln, Drittanbieter-Stylesheets in eine Schicht zu importieren, ohne sich Sorgen machen zu müssen, ob dieses Stylesheet selbst Schichten hat. Weil Schichten verschachtelt werden können, brauchen Sie sich keine Sorgen zu machen über widersprüchliche Schichtnamen zwischen externen und internen Stylesheets.

### Erstellung von verschachtelten Kaskadenschichten

Verschachtelte Schichten können auf die gleichen Methoden wie normale Schichten erstellt werden. Zum Beispiel können sie erstellt werden, indem die `@layer`-Anweisung gefolgt von den Namen einer oder mehrerer Schichten, unter der Verwendung einer Punktnotation. Mehrere Punkte und Schichtnamen bedeuten mehrfache Schachtelung.

Wenn Sie eine Block-@layer-Anweisung innerhalb einer anderen Block-@layer-Anweisung verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration mit dem `layer` Keyword oder der `layer()`-Funktion importiert wird, werden die Styles dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten zu verschachtelten Schichten innerhalb der anonymen oder benannten Schicht.

Betrachten wir das folgende Beispiel:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei irgendwelche Schichten enthält, benannte oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unterschicht von `components` ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in welchem Fall der Inhalt von `narrow-theme.css` der `components.narrow` verschachtelten Schicht angefügt wird. Zusätzliche verschachtelte benannte Schichten können der `components`-Schicht unter Verwendung des Musters `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie dürfen danach nicht mehr angesprochen werden.

Lassen Sie uns ein weiteres Beispiel betrachten, bei dem wir [import `layers1.css` in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import "layers1.css" layer(example);
```

Dies wird eine einzige Schicht mit dem Namen `example` erstellen, die einige Deklarationen und fünf verschachtelte Schichten enthält - `example.layout`, `example.<anonymer(01)>`, `example.theme`, `example.utilities` und `example.<anonymer(02)>`.

Um Styles zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung des Vorrangs basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt deren Vorrang. Daher ist die Reihenfolge der Schichten sehr wichtig. Ebenso wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsmäßiger Schicht und Wichtigkeit.

### Vorrangsreihenfolge regelmäßiger Kaskadenschichten

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Schichten (C.css-Styles werden zur impliziten Schicht der ungeschichteten Styles hinzugefügt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Schichten enthalten. Die folgende Liste zeigt, wo Styles, die innerhalb und außerhalb dieser Dateien deklariert werden, von geringstem (1) bis höchstem (10) Vorrang sortiert werden.

1. `firstLayer` normale Styles (`A.css`)
2. `secondLayer` normale Styles (`B.css`)
3. ungeschichtete normale Styles (`C.css`)
4. Inline normale Styles
5. animierte Styles
6. ungeschichtete wichtige Styles (`C.css`)
7. `secondLayer` wichtige Styles (`B.css`)
8. `firstLayer` wichtige Styles (`A.css`)
9. Inline wichtige Styles
10. Übergangs-Styles

Normale Styles, die innerhalb von Schichten deklariert werden, erhalten die niedrigste Priorität und werden nach der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Styles in der zuerst erstellten Schicht haben die niedrigste Vorrangigkeit, und normale Styles in der zuletzt erstellten Schicht haben die höchste Vorrangigkeit unter den Schichten. Mit anderen Worten, normale Styles, die innerhalb von `firstLayer` deklariert werden, werden durch jedes nachfolgende Styling auf der Liste ersetzt, wenn Konflikte bestehen.

Als Nächstes kommen alle Styles, die außerhalb von Schichten deklariert werden. Die Styles in `C.css` wurden nicht in einer Schicht importiert und haben Vorrang vor allen Konflikten von `firstLayer` und `secondLayer`. Styles, die nicht in einer Schicht deklariert sind, haben immer höhere Priorität als Styles, die innerhalb einer Schicht deklariert sind (mit Ausnahme wichtiger Styles).

Inline-Styles werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale Styles, die auf diese Weise deklariert werden, haben Vorrang vor normalen Styles, die in den ungeschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) gefunden werden.

Animierte Styles haben höheren Vorrang als alle normalen Styles, einschließlich Inline-Normal-Styles.

Wichtige Styles, also Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor in unserer Liste erwähnten Styles. Sie werden in umgekehrter Reihenfolge der normalen Styles sortiert. Alle wichtigen Styles, die außerhalb einer Schicht deklariert sind, haben weniger Vorrang als diejenigen, die innerhalb einer Schicht deklariert sind. Wichtige Styles, die innerhalb von Schichten gefunden werden, sind auch in der Reihenfolge der Schichterstellung sortiert. Für wichtige Styles hat die zuletzt erstellte Schicht die niedrigste Vorrangigkeit, und die zuerst erstellte Schicht hat die höchste Vorrangigkeit unter den deklarierten Schichten.

Wichtige Inline-Styles haben erneut höheren Vorrang als wichtige Styles, die anderswo deklariert sind.

Übergangsabhängige Styles haben die höchste Vorrangigkeit. Wenn ein normaler Eigenschaftswert in den Übergang übergeht, hat er Vorrang vor allen anderen Eigenschaftswert-Deklarationen, selbst vor wichtigen Inline-Styles; aber nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) initial mit einer `@layer`-Anweisung ohne Styles definiert. Die Styles der Schicht werden in zwei `@layer`-Block-Anweisungen festgelegt, die nach der `h1`-CSS-Regel deklariert sind, die außerhalb einer beliebigen Schicht deklariert wird.

Die Inline-Styles, die zum `h1`-Element mit dem `style`-Attribut hinzugefügt werden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Styles überschreiben alle geschichteten und ungeschichteten normalen Styles. Wichtige Inline-Styles überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autoren-Styles. Es gibt keine Möglichkeit für Autoren-Styles, wichtige Inline-Styles zu überschreiben.

Die normalen `text-decoration` und wichtigen `box-shadow` sind nicht Teil der `style`-Inline-Styles und können daher überschrieben werden. Für normale Nicht-Inline-Styles haben ungeschichtete Styles Vorrang. Für wichtige Styles spielt auch die Schichtreihenfolge eine Rolle. Während normale ungeschichtete Styles alle normalen Styles in einer Schicht überschreiben, ist die Vorrangsreihenfolge bei wichtigen Styles umgekehrt; ungeschichtete wichtige Styles haben eine niedrigere Vorrangigkeit als geschichtete Styles.

Die beiden Styles, die nur innerhalb von Schichten deklariert sind, sind `font-style` mit normaler Wichtigkeit und `font-weight` mit einem `!important`-Flag. Bei normalen Styles überschreibt die `B`-Schicht, die zuletzt deklariert worden ist, Styles in der früher deklarierten Schicht `A`. Für normale Styles haben spätere Schichten Vorrang vor früheren Schichten. Die Vorrangsreihenfolge ist für wichtige Styles umgekehrt. Bei den wichtigen `font-weight`-Deklinationen hat die Schicht `A`, die zuerst deklariert wurde, Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Versuchen Sie das. Welche Styles werden dadurch geändert und welche bleiben gleich? Warum?

Die Reihenfolge der Schicht wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten deklariert, ohne Styles zuzuweisen, indem wir `@layer` gefolgt von den Namen unserer Schichten, gefolgt von einem Semikolon, verwendet haben. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich gewesen. Warum? Wir haben Regelblöcke in benannten `@layer` Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Linie erstellt. Wären sie nicht, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen hinzugefügt: zuerst, damit Sie die Zeile einfach bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft erkennen werden, dass das Deklarieren der Reihenfolge der Schicht im Voraus die beste Praxis für Ihr Schichtordnermanagement ist.

Zusammengefasst:

- Die Reihenfolge des Vorrangs der Schichten ist die Reihenfolge, in der sie erstellt wurden.
- Sobald erstellt, gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Der Schichtvorrang für normale Styles ist die Reihenfolge, in der die Schichten erstellt wurden.
- Ungeschichtete normale Styles haben Vorrang vor normalen geschichteten Styles.
- Der Schichtvorrang für wichtige Styles ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle wichtigen geschichteten Styles haben Vorrang vor ungeschichteten wichtigen (und normalen) Styles.
- Normale Inline-Styles haben Vorrang vor allen normalen Styles, geschichtet oder nicht.
- Wichtige Inline-Styles haben Vorrang vor allen anderen Styles, außer Styles, die übergehen.
- Es gibt keine Möglichkeit für Autoren-Styles, wichtige Inline-Styles zu überschreiben (es sei denn, diese werden übergeführt, was vorübergehend ist).

### Vorrangsreihenfolge verschachtelter Kaskadenschichten

Die Vorrangsreihenfolge für verschachtelte Schichten ist der von regulären Schichten ähnlich, jedoch innerhalb der Schicht. Die Vorrangsreihenfolge basiert auf der Erstellungsreihenfolge der verschachtelten Schicht. Nicht verschachtelte Styles innerhalb einer Schicht haben Vorrang vor normalen verschachtelten Styles, wobei die Vorrangsreihenfolge für wichtige Styles umgekehrt ist. Das Gewicht der Spezifität zwischen verschachtelten Schichten spielt keine Rolle, obwohl es bei konkurrierenden Styles innerhalb einer verschachtelten Schicht eine Rolle spielt.

Die folgende erstellt und fügt Styles der `components`-Schicht, der `components.narrow` verschachtelten Schicht und der `components.wide` verschachtelten Schicht hinzu:

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

Hier ist eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Da ungeschichtete normale Styles Vorrang vor geschichteten normalen Styles haben, gewinnt die `wheat`-Farbe.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Styles Vorrang vor normalen verschachtelten Styles haben, gewinnt die `red`-Farbe.
- `color`: Bei wichtigen Styles haben geschichtete Styles Vorrang vor ungeschichteten Styles, wobei wichtige Styles in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichterstellung `components.narrow`, dann `components.wide`, daher haben wichtige Styles in `components.narrow` Vorrang vor wichtigen Styles in `components.wide`, was bedeutet, dass die `purple`-Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, daher gewinnt der deklarationsbedingte `20%`-Radius.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade#task_2).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie sind jetzt mit den grundlegenden Mechanismen von CSS-Kaskadenschichten vertraut.
