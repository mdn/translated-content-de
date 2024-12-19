---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Diese Lektion hat das Ziel, Ihnen [Kaskadenschichten](/de/docs/Web/CSS/@layer) vorzustellen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es weniger unmittelbar relevant und ein wenig akademischer erscheinen, diese Lektion durchzugehen, als einige andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen von Kaskadenschichten zu kennen, falls Sie sie in Ihren Projekten antreffen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadenschichten und die Kenntnis, wie man deren Kraft nutzt, Ihnen viel Ärger ersparen, wenn Sie eine Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams verwalten.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es zu Konflikten zwischen CSS-Selektoren und konkurrierenden Spezifitäten kommt, oder wenn Sie überlegen, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis dafür, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Den Umgang mit Konflikten</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu lernen, wie Kaskadenschichten funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte einsehen, indem Sie das Element in den Entwicklerwerkzeugen Ihres Browsers inspizieren. Das "Styles"-Panel des Werkzeugs zeigt alle auf das überprüfte Element angewendeten Eigenschaftswerte an, zusammen mit dem passenden Selektor und der CSS-Quelldatei. Der Selektor von der Quelle mit Vorrang hat seine Werte auf das passende Element angewendet.

Zusätzlich zu den angewandten Stilen zeigt das Stil-Panel auch durchgestrichene Werte an, die mit dem ausgewählten Element übereinstimmten, aber aufgrund der Kaskade, der Spezifität oder der Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können von derselben Quelle mit Vorrang stammen, jedoch mit geringerer Spezifität, oder mit übereinstimmender Quelle und Spezifität, aber früher in der Codebasis gefunden wurden. Für jeden angewandten Eigenschaftswert können mehrere Deklarationen aus vielen verschiedenen Quellen durchgestrichen sein. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet dies, dass dem Wert die Ursprung oder Bedeutung fehlt.

Oftmals, wenn die Komplexität einer Website zunimmt, steigt auch die Anzahl der Stylesheets, was die Quellenreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Wartung von Stylesheets in solch einer Codebasis. Kaskadenschichten sind explizite Spezifitäts-Container, die eine einfachere und größere Kontrolle über die endgültig angewendeten CSS-Deklarationen bieten, sodass Webentwickler die Abschnitte von CSS priorisieren können, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte liefern einen kurzen Rückblick auf die wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das "C" in CSS steht für "Cascading" (Kaskadierend). Es ist die Methode, durch die Stildefinitionen zusammen kaskadieren. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jedem Element für jede Eigenschaft zugeordnet werden. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4 eintauchen, **Kaskadenschichten**, das ist es, was Sie hier lernen wollten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektortreffer für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind solche, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Innerhalb jeder der zwei Wichtigkeitskategorien sortieren Sie die Regeln nach Autor, Benutzer oder Benutzeragenten-Ursprung.
4. **Kaskadenschichten:** Innerhalb jeder der sechs Ursprungs-Wichtigkeitskategorien sortieren Sie nach Kaskadenschicht. Die Schichtenreihenfolge für normale Deklarationen reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von ungeschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, mit ungeschichteten wichtigen Stilen, die die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungs-Spezifitätsschicht sortieren Sie die Deklarationen nach [Spezifität](/de/docs/Web/CSS/Specificity).
6. **Abstandsproximität:** Wenn zwei Selektoren in der Ursprungs-Spezifitätsschicht die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der geschachtelten Regeln mit der geringsten Anzahl von Sprüngen in der DOM-Hierarchie zur Ursprungs-Spezifität. Siehe [Wie `@scope`-Konflikte aufgelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungs-Spezifitätsschicht die gleiche Spezifität und Abstandsproximität haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt kommen nur die Deklarationen, die noch "im Rennen" sind, in den nächsten Wettstreit, in den nächsten Schritt. Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind belanglos.

### Ursprung und Kaskade

Es gibt drei [Ursprungstypen der Kaskade](/de/docs/Web/CSS/Cascade#origin_types): Benutzeragenten-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungscontainer nach Ursprung und Wichtigkeit. Es gibt acht Stufen der Priorität: die sechs Ursprungscontainer, Eigenschaften, die sich ändern, und Eigenschaften, die animiert werden. Die Reihenfolge der Priorität reicht von normalen Benutzeragenten-Stilen, die die niedrigste Priorität haben, bis zu Stilen innerhalb der aktuellen Animationen, bis hin zu wichtigen Benutzeragenten-Stilen, und letztendlich zu Stilen, die die höchste Priorität haben:

1. normale Benutzeragenten-Stile
2. normale Benutzer-Stile
3. normale Autoren-Stile
4. animierte Stile
5. wichtige Autoren-Stile
6. wichtige Benutzer-Stile
7. wichtige Benutzeragenten-Stile
8. animierte Stile

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf ein Element mit dem {{HTMLElement('style')}}-Element angewendet werden, sind Autoren-Stile. Ohne animierende und sich ändernde Stile, haben normale Benutzeragenten-Stile die niedrigste Priorität; wichtige Benutzeragenten-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprung mit Priorität, basierend auf dem Gewicht (normal oder wichtig). Ignorieren Sie die Schichten für den Moment, der Wert aus dem Ursprung mit der höchsten Priorität wird angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifität wird niemals zwischen Selektoren von verschiedenen Ursprüngen verglichen.

Im Beispiel unten gibt es zwei Links. Der erste hat keine Autoren-Stile angewendet, daher werden nur Benutzeragenten-Stile angewendet (und Ihre persönlichen Benutzer-Stile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die durch Autoren-Stile festgelegt werden, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories) hat. Der Grund, warum Autoren-Stile "gewinnen", ist, dass, wenn es zu Konflikten zwischen Stilen von verschiedenen Ursprüngen kommt, die Regeln vom Ursprung mit Priorität angewendet werden, unabhängig von der Spezifität im Ursprung, der keine Priorität hat.

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

Der "konkurrierende" Selektor im Benutzeragenten-Stylesheet zum Zeitpunkt des Schreibens ist `a:any-link`, das ein Spezifikationsgewicht von `0-1-1` hat. Während dies größer ist als der `0-0-0` Selektor im Autoren-Stylesheet, spielt es keine Rolle, wenn der Selektorer in Ihrem derzeitigen Benutzeragent anders ist: Die Spezifikationsgewichte von Autoren- und Benutzeragenten-Ursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie das Spezifikationsgewicht berechnet wird](/de/docs/Web/CSS/Specificity#how_is_specificity_calculated).

Ursprung-Priorität gewinnt immer gegenüber Selektor-Spezifität. Wenn eine Element-Eigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt ist, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder Benutzeragenten-Stylesheet festgelegt wurden. Wenn der Stil wichtig ist, wird das Benutzeragenten-Stylesheet immer über Autoren- und Benutzerstile gewinnen. Die Ursprung-Priorität der Kaskade garantiert, dass Spezifikationskonflikte zwischen Ursprüngen niemals auftreten.

Ein letzter Hinweis, bevor wir weitergehen: Die Reihenfolge des Erscheinens wird nur dann relevant, wenn konkurrierende Deklarationen den Ursprung der Priorität teilen und dieselbe Spezifität haben.

## Übersicht über Kaskadenschichten

Wir verstehen jetzt "Ursprung-Priorität der Kaskade", doch was ist "Schicht-Priorität der Kaskade"? Wir werden diese Frage beantworten, indem wir adressieren, was Kaskadenschichten sind, wie sie geordnet sind, und wie Stile zu Kaskadenschichten zugeordnet werden. Wir werden [reguläre Schichten](#erstellung_von_kaskadenschichten), [verschachtelte Schichten](#übersicht_über_verschachtelte_kaskadenschichten) und anonyme Schichten behandeln. Lassen Sie uns zuerst klären, was Kaskadenschichten sind und welche Probleme sie lösen.

### Reihenfolge der Schicht-Priorität der Kaskade

Ähnlich wie wir sechs Stufen der Priorität basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten uns, eine Sub-Ursprungs-Priorität innerhalb eines dieser Ursprünge zu erstellen.

Innerhalb jedes der sechs Ursprungscontainer kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) spielt eine entscheidende Rolle. Es ist die Reihenfolge der Erstellung, die die Priorität unter den Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungscontainern werden Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Prioritätsreihenfolge reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von ungeschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle ungeschichteten wichtigen Stile kaskadieren zusammen in einer impliziten Schicht, die Vorrang vor allen nicht-übergangsfreien normalen Stilen hat. Die ungeschichteten wichtigen Stile haben eine niedrigere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang gegenüber wichtigen Stilen in später deklarierten Schichten innerhalb desselben Ursprungs.

Für den restlichen Verlauf dieses Tutorials werden wir uns auf Autoren-Stile beschränken, aber beachten Sie, dass Schichten auch in Benutzer- und Benutzeragenten-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Egal wie viele Stylesheets inkludiert werden, alle diese Stile kaskadieren zusammen in einem Ursprung: dem _Autoren_-Stylesheet.

Stile aus vielen Quellen, die zusammen kaskadieren, insbesondere aus Teams, die nicht zusammenarbeiten, können Probleme schaffen. Verschiedene Teams könnten unterschiedliche Methoden haben; eines könnte die beste Praxis haben, die Spezifität zu reduzieren, während ein anderes den Standard hat, in jeden Selektor eine `id` einzufügen.

Spezifikationskonflikte können schnell eskalieren. Ein Webentwickler könnte eine "schnelle Korrektur" vornehmen, indem er ein `!important`-Flag hinzufügt. Während dies wie eine einfache Lösung erscheinen mag, verlagert es oft nur den Spezifikationskrieg von normalen zu wichtigen Deklarationen.

In der gleichen Weise, wie Kaskaden-Ursprünge ein Machtgleichgewicht zwischen Benutzer-, Benutzeragenten- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszugleichen, als wäre jede Schicht in einem Ursprung ein Sub-Ursprung. Eine Schicht kann für jedes Team, jede Komponente und jedes Drittunternehmen erstellt werden, mit Stilpriorität basierend auf der Schichtenreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen es, ganze Stylesheets gegenüber anderen Stylesheets zu priorisieren, ohne sich Sorgen um die Spezifität zwischen diesen Sub-Ursprüngen machen zu müssen.

Schichtpriorität gewinnt immer über Selektor-Spezifität. Stile in Schichten mit Priorität "gewinnen" über Schichten mit weniger Priorität. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität spielt immer noch eine Rolle bei konkurrierenden Eigenschaftswerten innerhalb einer Schicht, aber es gibt keine Spezifikationsbedenken zwischen Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten erlauben es, verschachtelte Schichten zu erstellen. Jede Kaskadenschicht kann verschachtelte Schichten enthalten, sogar eine anonyme.

Zum Beispiel könnte eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Autoren-Ursprung hinzu und beseitigt jegliche Spezifikationskonflikte mit anderen Autoren-Stilen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themes definieren, jedes als separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Themen-Schichten kann basierend auf Medienabfragen (siehe den Abschnitt über [Schichterstellung und Medienabfragen](#schichterstellung_und_medienabfragen) unten) definiert werden, wie beispielsweise der Ansichtsgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themes zu erstellen, die nicht durch Spezifitätskonflikte beeinträchtigt werden.

Die Möglichkeit, Schichten zu verschachteln, ist sehr nützlich für jeden, der Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themes entwickelt.

Die Möglichkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge vor widersprüchlichen Schichtnamen. Wir werden dies im Abschnitt über [verschachtelte Schichten](#übersicht_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Drittanbieter-Bibliotheken, Themes, Komponenten, Überschreibungen und andere Stilfragen darzustellen – und sind in der Lage, die Kaskade von Schichten explizit umzuordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte über Schichten hinweg zu lösen."
>
> —[Spezifikation für Kaskadierung und Vererbung](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellung von Kaskadenschichten

Schichten können auf eine der folgenden Arten erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer) Anweisung mit Regel, die Schichten mit `@layer` gefolgt von den Namen von einer oder mehreren Schichten deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Block-Anweisung, in welcher alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import) Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn kein Schichtname in der `@layer`-Anweisung oder `@import` mit `layer()` angegeben wird, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Reihenfolge der Priorität der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht sind, oder "ungeschichtete Stile", kaskadieren zusammen zu einem abschließenden impliziten Etikett.

Lassen Sie uns die drei Wege zur Erstellung einer Schicht etwas genauer betrachten, bevor wir verschachtelte Schichten besprechen.

### Die @layer Anweisung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten durch `@layer` gefolgt von den Namen von einer oder mehreren Schichten, ohne irgendetwas zuzuweisen, ist eine Möglichkeit, die [Schichtenreihenfolge](#bestimmung_der_priorität_basierend_auf_schichtreihenfolge) festzulegen.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS-Regel dient zur Deklaration einer Kaskadenschicht und zur Festlegung der Reihenfolge der Priorität, wenn mehrere Kaskadenschichten vorhanden sind. Die folgende Regel erklärt drei Schichten in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie werden oft wollen, dass Ihre erste CSS-Zeile diese `@layer`-Deklaration ist (mit Schichtnamen, die für Ihre Seite sinnvoll sind, natürlich), um die volle Kontrolle über die Schichtenordnung zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Seite ist, wird die Schichtenordnung `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, solange Schichten mit diesen Namen noch nicht existieren, werden diese drei Schichten erstellt und am Ende der Liste der existierenden Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, dann wird die obige Anweisung nur zwei neue Schichten erstellen. Zum Beispiel, wenn `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Schichtenordnung wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer Block-Anweisung für benannte und anonyme Schichten

Schichten können mit der Block-Anweisung `@layer` erstellt werden. Wenn eine `@layer`-Anweisung von einem Bezeichner gefolgt ist und einem Block von Stilen, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser Anweisung werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem spezifizierten Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem spezifizierten Namen bereits existiert, werden die Stile in die zuvor existierenden Schichten eingefügt. Wenn beim Erstellen eines Blocks von Stilen mit `@layer` kein Name angegeben wird, werden die Stile in der Anweisung einer neuen anonymen Schicht hinzugefügt.

Im Beispiel unten haben wir vier `@layer`-Block-Anweisungen und eine `@layer`-Anweisungsregel verwendet. Dieses CSS führt die folgenden Aktionen in der aufgelisteten Reihenfolge durch:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt zusätzliche Stile zur bereits existierenden `layout`-Schicht hinzu
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

In dem obenstehenden CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Schicht ungeschichteter Stile, die in dem `body` Stilblock enthalten ist. Die Schichtenreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht ungeschichteter Stile immer die letzte ist. Es gibt keine Möglichkeit, die Schichtenreihenfolge nach der Erstellung zu ändern.

Wir haben einige Stile der `layout`-Schicht zugewiesen. Wenn eine benannte Schicht noch nicht existiert, dann erzeugt das Angeben des Namens in einer `@layer`-Anweisung mit oder ohne das Zuweisen von Stilen zur Schicht die Schicht und fügt die Schicht am Ende der Serie der vorhandenen Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks der zuvor bestehenden Schicht hinzugefügt – das Angeben von Stilen in einem Block durch Wiederverwenden eines bestehenden Schichtnamens erzeugt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stile einer Schicht zugewiesen werden, ohne die Schicht zu benennen. Stile können nur beim Erstellen einer unbenannten Schicht hinzugefügt werden.

> [!NOTE]
> Der nachfolgende Gebrauch von `@layer` ohne Schichtnamen erzeugt zusätzliche unbenannte Schichten; es fügt nicht Stile zu einer zuvor existierenden unbenannten Schicht hinzu.

Die `@layer`-Anweisung erstellt eine Schicht, benannt oder nicht, oder fügt Stile zu einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` genannt und die zweite `<anonymous(02)>`, dies ist nur, um sie zu erklären. Diese sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder ihnen zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden in einer impliziten Schicht zusammengefügt. In dem obigen Beispielcode setzte die erste Deklaration `color: #333` auf `body`. Dies wurde außerhalb einer Schicht deklariert. Normale ungeschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, auch wenn die ungeschichteten Stile eine geringere Spezifität haben und zuerst in der Reihenfolge des Erscheinens kommen. Das erklärt, warum die ungeschichtete CSS erklärt würde, selbst wenn es die erste in dem Codeblock ist, die implizite Schicht, die diese ungeschichteten Stile enthält, hat Vorrang, als wäre sie die letzte deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, in der eine Serie von Schichten deklariert wurde, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` war bereits in der ersten Zeile erstellt worden. Beachten Sie, dass diese Erklärung die Reihenfolge der bereits erstellten Schichten nicht ändert. Derzeit gibt es keine Möglichkeit, Schichten nach der Erstellung umzuordnen.

Im folgenden Beispiel weisen wir Stile zwei Schichten zu, erstellen sie und benennen sie im Prozess. Da sie bereits existieren und beim ersten Gebrauch erstellt werden, tut ihre Deklaration in der letzten Zeile nichts.

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

Versuchen Sie, die letzte Zeile, `@layer site, page;`, zu verschieben, damit sie die erste Zeile ist. Was passiert?

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht mit [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) Abfragen definieren, und die Medien nicht übereinstimmen oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie das Ändern der Größe Ihres Geräts oder Browsers die Schichtenreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen danach Stile den Schichten `page` und `site` zu, in dieser Reihenfolge.

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

Auf weiten Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` über `page` Vorrang, weil es auf schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Der [`@import`](/de/docs/Web/CSS/@import) Befehl ermöglicht es, Stilregeln von anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert sein. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann jedoch von einer `@layer`-Anweisung gefolgt werden, die eine oder mehrere Schichten erstellt, ohne ihnen Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset) Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht, und eine unbenannte Schicht, je nachdem:

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

Sie können Stile importieren und Schichten basierend auf spezifischen Bedingungen erstellen, indem Sie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Featureabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die importierte Datei hängt von der Breite des Bildschirms ab.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent der {{HTMLElement('link')}} Methode zum Verlinken von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie kein `@layer` innerhalb des Stylesheets verwenden können.

## Übersicht über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder anonymen Schicht. Jede Kaskadenschicht, selbst eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden verschachtelte Schichten innerhalb dieser Schicht.

### Vorteile von verschachtelten Schichten

Die Fähigkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in eine Schicht importieren werden. Ebenso ermöglicht es Ihnen das Verschachteln, externe Stylesheets in eine Schicht zu importieren, ohne sich Gedanken darüber machen zu müssen, ob dieses Stylesheet selbst Schichten hat. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen über widersprüchliche Schichtnamen zwischen externen und internen Stylesheets machen.

### Erstellung von verschachtelten Kaskadenschichten

Verschachtelte Schichten können auf die gleichen Methoden wie reguläre Schichten erstellt werden. Zum Beispiel können sie unter Verwendung der `@layer`-Anweisung gefolgt von den Namen von einer oder mehreren Schichten erstellt werden, die eine Punktnotation verwendet. Mehrere Punkte und Schichtnamen signalisieren mehrere Verschachtelungen.

Wenn Sie eine Block-`@layer`-Anweisung innerhalb einer anderen Block-`@layer`-Anweisung einfügen, mit oder ohne Namen, wird der innere Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import`-Erklärung, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, importiert wird, werden die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten zu verschachtelten Schichten innerhalb dieser anonymen oder benannten Schicht.

Sehen wir uns das folgende Beispiel an:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei Schichten enthält, benannte oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unter-Schicht der `components`-Schicht ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in welchem Fall der Inhalt von `narrow-theme.css` an die verschachtelte Schicht `components.narrow` angehängt wird. Zusätzliche benannte verschachtelte Schichten können zur `components`-Schicht hinzugefügt werden, indem das Muster `components.<layerName>` verwendet wird. Wie bereits erwähnt, können unbenannte Schichten erstellt, aber sie können danach nicht mehr zugegriffen werden.

Lassen Sie uns ein weiteres Beispiel betrachten, bei dem wir [importieren `layers1.css` in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) unter Verwendung der folgenden Anweisung:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne Schicht namens `example` erstellen, die einige Deklarationen und fünf verschachtelte Schichten enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung der Priorität basierend auf Schichtreihenfolge

Die Reihenfolge der Schichten bestimmt ihre Reihenfolge der Priorität. Daher ist die Reihenfolge der Schichten sehr wichtig. In der gleichen Weise, wie die Kaskade durch Ursprung und Wichtigkeit sortiert wird, sortiert die Kaskade jede CSS-Deklaration nach Ursprung, Schicht und Wichtigkeit.

### Prioritätsreihenfolge regulärer Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden dem impliziten Schicht ungeschichteter Stile hinzugefügt). Lassen Sie uns davon ausgehen, dass die drei Dateien (`A.css`, `B.css`, und `C.css`) keine zusätzlichen Schichten innerhalb von ihnen enthalten. Die folgende Liste zeigt, wo Stile deklariert innerhalb und außerhalb dieser Dateien sortiert werden, von geringster (1) bis höchster (10) Priorität.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungeschichtete normale Stile (`C.css`)
4. Inline normale Stile
5. animierte Stile
6. ungeschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. sich ändernde Stile

Normale Stile, die innerhalb von Schichten deklariert sind, erhalten die niedrigste Priorität und werden in der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben die geringste Priorität, und normale Stile in der zuletzt erstellten Schicht haben die höchste Priorität unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb `firstLayer` deklariert sind, werden von anderen konkurrierenden Stilen auf der Liste überschrieben, wenn jegliche Konflikte auftreten.

Als nächstes kommen alle Stile, die außerhalb von Schichten deklariert werden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle konkurrierenden Stile von `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer höhere Priorität als Stile, die _in_ einer Schicht deklariert sind (außer es handelt sich um wichtige Stile).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang über normale Stile in den ungeschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css`, und `C.css`).

Animierte Stile haben höhere Priorität als alle normalen Stile, einschließlich normaler Inline-Stile.

Wichtige Stile, das heißt Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang über alle zuvor erwähnten Stile auf unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert wurden, haben eine geringere Priorität als diejenigen, die innerhalb einer Schicht deklariert wurden. Wichtige Stile, die innerhalb von Schichten gefunden werden, werden auch in der Reihenfolge der Schichterstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht die niedrigste Priorität, und diejenige, die als erste erstellt wurde, hat die höchste Priorität unter den deklarierten Schichten.

Wichtige Inline-Stile haben wieder einmal eine höhere Priorität als wichtige Stile, die anderswo deklariert wurden.

Sich ändernde Stile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert geändert wird, hat er Vorrang über alle anderen Eigenschaftswert-Deklarationen, sogar über wichtige Inline-Stile; jedoch nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst durch eine `@layer`-Anweisungsregel ohne jegliche Stile definiert. Die Schichtstile werden in zwei `@layer`-Block-Anweisungen nach der `h1` CSS Regel deklariert, die außerhalb einer Schicht deklariert ist.

Die Inline-Stile, die auf das `h1`-Element mit dem `style`-Attribut angewendet werden, setzen einen normalen `color` und einen wichtigen `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autoren-Stile. Es gibt keine Möglichkeit für Autoren-Stile, wichtige Inline-Stile zu überschreiben.

Die normalen `text-decoration` und wichtigen `box-shadow` sind nicht Teil der Inline-Stile `style` und können daher überschrieben werden. Für normale nicht-Inline-Stile haben ungeschichtete Stile Vorrang. Für wichtige Stile spielt auch die Schichtreihenfolge eine Rolle. Während ungeschichtete normale Stile alle normalen Stile in einer Schicht überschreiben, wird die Prioritätsregel für wichtige Stile umgekehrt; ungeschichtete wichtige Stile haben eine geringere Priorität als geschichtete Stile.

Die beiden Stile, die nur innerhalb der Schichten deklariert sind, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Bei normalen Stilen hat die Schicht `B`, die zuletzt deklariert wurde, Vorrang vor Stilen in der früher deklarierten Schicht `A`. Bei normalen Stilen haben spätere Schichten eine höhere Priorität als frühere Schichten. Die Reihenfolge der Vorrangstellung wird für wichtige Stile umgekehrt. Für die wichtigen `font-weight` Deklarationen hat die Schicht `A`, die zuerst deklariert wurde, Vorrang gegenüber der zuletzt deklarierten Schicht `B`.

Sie können die Schichtenreihenfolge durch Ändern der ersten Zeile von `@layer A, B;` zu `@layer B, A;` umkehren. Probieren Sie das aus. Welche Stile werden dadurch geändert, und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten deklariert, ohne sie zuzuweisen, indem wir `@layer` gefolgt von den Namen unserer Schichten und mit einem Semikolon beendet haben. Wenn wir diese Zeile ausgelassen hätten, wären die Ergebnisse gleich gewesen. Warum? Wir haben Stilregeln in benannten `@layer` Blöcken in der Reihenfolge A dann B zugewiesen. Die zwei Schichten wurden in der ersten Zeile erstellt. Wären sie nicht vorhanden gewesen, hätten diese Regelblöcke sie erstellt, in dieser Reihenfolge.

Wir haben diese erste Zeile aus zwei Gründen eingefügt: erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, da Sie oft feststellen werden, dass das Deklarieren der Schichtenordnung im Voraus die beste Praxis ist, um Ihre Schichtenreihenfolge zu verwalten.

Zusammenfassend:

- Die Reihenfolge der Priorität der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Nach der Erstellung gibt es keine Möglichkeit, die Schichtenreihenfolge zu ändern.
- Die Priorität für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Priorität für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme der sich ändernden Stile.
- Es gibt keine Möglichkeit für Autoren-Stile, wichtige Inline-Stile zu überschreiben (außer durch das Ändern, was temporär ist).

### Prioritätsreihenfolge von verschachtelten Kaskadenschichten

Die Kaskadenprioritätsreihenfolge für verschachtelte Schichten ist ähnlich wie die von regulären Schichten, jedoch innerhalb der Schicht enthalten. Die Prioritätsreihenfolge basiert auf der Reihenfolge der Erstellung der verschachtelten Schichten. Nicht-geschichtete Stile in einer Schicht haben Vorrang vor normalen verschachtelten Stilen, mit umgekehrter Prioritätsordnung für wichtige Stile. Spezifikationsgewicht zwischen verschachtelten Schichten spielt keine Rolle, obwohl es bei konkurrierenden Stilen innerhalb einer verschachtelten Schicht relevant ist.

Das folgende Beispiel erstellt und fügt Stile zur `components`-Schicht, `components.narrow` verschachtelten Schicht und `components.wide` verschachtelten Schicht hinzu:

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

- `background-color`: Da ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat` Farbe.
- `border`: Da innerhalb einer Schicht nicht-verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `red` Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, und wichtige Stile in früher deklarierten Schichten haben Vorrang vor später deklarierten Schichten. In diesem Beispiel ist die Reihenfolge der Erstellung verschachtelter Schichten `components.narrow`, dann `components.wide`, so dass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass die `purple` Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, so dass durch die Deklarationsreihenfolge der `20%` Radius gewinnt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, können Sie sich aber an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht — Sie sind jetzt mit den grundlegenden Mechanismen von CSS-Kaskadenschichten vertraut.
