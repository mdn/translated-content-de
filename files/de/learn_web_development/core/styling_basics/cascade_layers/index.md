---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Diese Lektion soll Ihnen [Kaskadenschichten](/de/docs/Web/CSS/@layer) näherbringen, eine fortgeschrittene Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es zunächst weniger relevant und etwas akademischer erscheinen, diese Lektion zu bearbeiten, verglichen mit anderen Teilen des Kurses. Es ist jedoch nützlich, die Grundlagen von Kaskadenschichten zu kennen, falls Sie diese in Ihren Projekten antreffen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis der Kaskadenschichten und die Fähigkeit, deren Potenzial zu nutzen, Ihnen helfen, den Umgang mit Codebasen zu meistern, die CSS von verschiedenen Parteien, Plugins und Entwicklungsteams enthalten.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es zu Konflikten zwischen CSS-Selektoren und konkurrierenden Spezifitäten kommt, oder wenn Sie erwägen, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundkenntnisse über die Funktionsweise von CSS, einschließlich Kaskade und Spezifität (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Grundlagen der Gestaltung</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Konfliktbewältigung</a>).
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

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann nur ein Wert existieren. Sie können alle auf ein Element angewendeten Eigenschaftswerte sehen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Styles"-Panel des Tools zeigt alle auf das untersuchte Element angewendeten Eigenschaftswerte an, zusammen mit dem passenden Selektor und der CSS-Quelldatei. Der Selektor von der Quelle mit der Vorrangstellung hat seine Werte auf das passende Element angewendet.

Zusätzlich zu den angewandten Stilen zeigt das Styles-Panel gestrichene Werte an, die auf das ausgewählte Element gepasst haben, aber aufgrund der Kaskade, der Spezifität oder der Quellreihenfolge nicht angewendet wurden. Gestrichene Stile können von derselben Quelle mit Vorrangstellung stammen, aber mit niedrigerer Spezifität, oder mit passender Quelle und Spezifität, aber sie wurden früher in der Codebasis gefunden. Für jeden angewendeten Eigenschaftswert gibt es möglicherweise mehrere Deklarationen, die aus verschiedenen Quellen gestrichen wurden. Wenn Sie einen Stil sehen, der durchgestrichen ist und einen Selektor mit höherer Spezifität hat, bedeutet das, dass dem Wert Ursprung oder Wichtigkeit fehlen.

Oft, wenn die Komplexität einer Seite zunimmt, erhöht sich auch die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Wartung von Stylesheets in solchen Codebasen. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten und es Webentwicklern ermöglichen, Abschnitte von CSS zu priorisieren, ohne gegen die Spezifität ankämpfen zu müssen.

Um Kaskadenschichten zu verstehen, muss man die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigsten Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading" (Kaskadierung). Es ist die Methode, mit der Stile zusammenkaskadieren. Der User-Agent durchläuft mehrere klar definierte Schritte, um die jedem Eigenschaftswert für jedes Element zugewiesenen Werte festzulegen. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4 eintauchen, **Kaskadenschichten**, was Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektormatch für jedes Element.
2. **Wichtigkeit:** Sortieren Sie die Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Innerhalb jeder der beiden Wichtigkeitsgruppen sortieren Sie die Regeln nach Autor-, Benutzer- oder Benutzeragentenursprung.
4. **Kaskadenschichten:** Innerhalb jeder der sechs Ursprungs-Wichtigkeitsgruppen sortieren Sie nach Kaskadenschicht. Die Schichtenreihenfolge für normale Deklarationen reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei nicht geschichtete wichtige Stile die niedrigste Vorrangstellung haben.
5. **Spezifität:** Für konkurrierende Stile innerhalb der Ursprungs-Schicht mit Vorrangstellung sortieren Sie die Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Scoping-Proximität:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb von gescope Ten Regeln mit der kleinsten Anzahl von Sprüngen die DOM-Hierarchie hinauf zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität und Scope-Proximität haben, gewinnt der Eigenschaftswert des zuletzt deklarierten Selektors mit der höchsten Spezifität.

In jedem Schritt gehen nur die Deklarationen, die "noch im Rennen" sind, in den nächsten Schritt über. Wenn nur eine Deklaration im Rennen ist, "gewinnt" diese und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzeragenten-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungsgruppen nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Vorrangstellung: die sechs Ursprungsgruppen, Eigenschaften, die im Übergang sind, und Eigenschaften, die animiert werden. Die Reihenfolge der Vorrangstellung reicht von normalen Benutzeragentenstilen, die die niedrigste Vorrangstellung haben, bis zu Stilen innerhalb aktuell angewendeter Animationen, über wichtige Benutzeragentenstile, bis hin zu Stilen, die die höchste Vorrangstellung im Übergang haben:

1. normale User-Agent-Stile
2. normale Benutzerstile
3. normale Autorenstile
4. Stile, die animiert werden
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige User-Agent-Stile
8. Stile, die im Übergang sind

Der "User-Agent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Direkt auf einem Element deklarierte Stile mit dem {{HTMLElement('style')}}-Element sind Autorenstile. Abgesehen von animierenden und übergehenden Stilen haben normale User-Agent-Stile die niedrigste Vorrangstellung; wichtige User-Agent-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige, die aus dem Ursprung mit Vorrangstellung basierend auf dem Gewicht (normal oder wichtig) kommt. Unabhängig von den Schichten im Moment wird der Wert aus dem Ursprung mit der höchsten Vorrangstellung angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine angewendeten Autorenstile, daher werden nur Benutzeragentenstile (und Ihre persönlichen Benutzerstile, falls vorhanden) angewendet. Der zweite hat [`text-decoration`](/de/docs/Web/CSS/Reference/Properties/text-decoration) und [`color`](/de/docs/Web/CSS/Reference/Properties/color) durch Autorenstile festgelegt, obwohl der Selektor im Autorenstylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", liegt daran, dass bei widersprüchlichen Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Vorrangstellung angewendet werden, unabhängig von der Spezifität im Ursprung, der keine Vorrangstellung hat.

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

Der "konkurrierende" Selektor im Benutzeragenten-Stylesheet zum Zeitpunkt des Schreibens ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Obwohl dieser größer ist als der `0-0-0`-Selektor im Autoren-Stylesheet, spielt es keine Rolle, selbst wenn der Selektor in Ihrem aktuellen Benutzeragenten anders ist: Die Spezifitätsgewichte von Autoren- und Benutzeragentenursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektorspezifität. Wenn eine Elementeigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, überschreibt das Autoren-Stylesheet immer die redundanten normalen Eigenschaften, die in einem Benutzer- oder Benutzeragentenstylesheet deklariert sind. Wenn der Stil wichtig ist, gewinnt das Benutzeragentenstylesheet immer über Autoren- und Benutzerstile. Ursprungsvorrang in der Kaskade stellt sicher, dass Spezifitätskonflikte zwischen Ursprüngen niemals auftreten.

Eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Erscheinens wird nur relevant, wenn konkurrierende Deklarationen innerhalb des Ursprungs mit Vorrang dieselbe Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen jetzt "Ursprungsvorrang in der Kaskade", aber was ist "Vorrang der Kaskadenschicht"? Wir werden diese Frage beantworten, indem wir behandeln, was Kaskadenschichten sind, wie sie geordnet werden, und wie Stile Kaskadenschichten zugewiesen werden. Wir werden [normale Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten behandeln. Lassen Sie uns zunächst diskutieren, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangreihenfolge der Kaskadenschicht

Ähnlich wie wir sechs Prioritätsebenen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten uns, eine untergeordnete Prioritätsebene innerhalb dieser Ursprünge zu erstellen.

Innerhalb jeder der sechs Ursprungseimer kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichtenerstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Vorrangreihenfolge der Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungseimern werden die Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Reihenfolge der Vorrangstellung reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile kaskadieren zusammen in eine implizite Schicht mit Vorrangstellung über alle nicht im Übergang befindlichen normalen Stile. Die nicht geschichteten wichtigen Stile haben eine geringere Vorrangstellung als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang gegenüber wichtigen Stilen in nachfolgend deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber denken Sie daran, dass Schichten auch in Benutzer- und Benutzeragenten-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile aus mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal wie viele Stylesheets enthalten sind, all diese Stile kaskadieren zusammen in einem einzigen Ursprung: dem _Autoren_-Stylesheet.

Stile aus vielen Quellen zusammen kaskadieren zu lassen, besonders von Teams, die nicht zusammenarbeiten, kann Probleme bereiten. Verschiedene Teams können unterschiedliche Methoden haben; eines könnte die Best Practice haben, die Spezifität zu reduzieren, während ein anderes den Standard hat, eine `id` in jeden Selektor einzuschließen.

Spezifitätskonflikte können schnell eskalieren. Ein Webentwickler könnte eine "schnelle Lösung" durch Hinzufügen eines `!important`-Flags erstellen. Obwohl sich das einfach anfühlen mag, bewegt es oft einfach den Spezifikationskrieg von normalen zu wichtigen Deklarationen.

Auf die gleiche Weise, in der Kaskadenursprünge eine Machtbalance zwischen Benutzer-, Benutzeragenten- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Anliegen innerhalb eines einzelnen Ursprungs zu organisieren und auszubalancieren, als ob jede Schicht in einem Ursprung ein Unterursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, wobei die Stilvorrangstellung auf der Schichtreihenfolge basiert.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen es, ganze Stylesheets über andere Stylesheets zu priorisieren, ohne sich um Spezifität zwischen diesen Unterursprüngen zu sorgen.

Schichtvorrang gewinnt immer über Selektorspezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität ist immer noch wichtig für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifikationsbedenken zwischen Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft in Betracht gezogen wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten erlauben die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine normale Kaskadenschicht wird die Komponentenbibliothek zum Autorenursprung hinzufügen und spezifische Konflikte mit anderen Autorenstilen beseitigen. Innerhalb der `components`-Schicht kann ein Entwickler wählen, verschiedene Themen als separate verschachtelte Schichten zu definieren. Die Reihenfolge dieser verschachtelten Themenschichten kann basierend auf Media-Queries definiert werden (siehe den Abschnitt [Schichterstellung und Media-Queries](#schichterstellung_und_media-queries) unten), wie z.B. Bildschirmgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Basis der Spezifität in Konflikt stehen.

Die Fähigkeit, Schichten zu verschachteln, ist für jeden sehr nützlich, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Widgets von Drittanbietern und Themen arbeitet.

Die Möglichkeit, verschachtelte Schichten zu erstellen, beseitigt ebenfalls die Sorge um konkurrierende Schichtnamen. Wir werden dies im Abschnitt [verschachtelte Schicht](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Drittanbieterbibliotheken, Themes, Komponenten, Überschreibungen und andere Stylinganliegen darzustellen – und können die Kaskade der Schichten auf explizite Weise neu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu verändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen Schichten zu lösen."
>
> —[Cascading and Inheritance specification](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer)-Anweisung, eine At-Regel, die Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Block-At-Regel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen nicht bereits initialisiert wurde. Wenn in der `@layer`-At-Regel oder `@import` mit `layer()` kein Schichtname angegeben ist, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Reihenfolge der Vorrangstellung der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile außerhalb einer Schicht, oder "nicht geschichtete" Stile, kaskadieren zusammen in eine endgültige implizite Schicht.

Lassen Sie uns die drei Wege zur Erstellung einer Schicht ein wenig detaillierter behandeln, bevor wir verschachtelte Schichten besprechen.

### Die @layer-Anweisung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge bestimmt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne Stilen zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmen_des_vorrangs_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer)-CSS-At-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangstellung zu definieren, wenn mehrere Kaskadenschichten vorhanden sind. Die folgende At-Regel deklariert drei Schichten, in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie möchten oft, dass Ihre erste Zeile von CSS diese `@layer`-Deklaration ist (natürlich mit Schichtnamen, die für Ihre Seite sinnvoll sind), um die vollständige Kontrolle über die Schichtreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, wird die Schichtreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, werden diese drei Schichten erstellt und dem Ende der Liste bestehender Schichten hinzugefügt, solange nicht bereits Schichten mit diesen Namen existieren. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, erstellt die obige Anweisung nur zwei neue Schichten. Zum Beispiel, wenn `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer-Block-Anweisung für benannte und anonyme Schichten

Schichten können mit der Block-`@layer`-At-Regel erstellt werden. Wenn eine `@layer`-At-Regel durch einen Bezeichner und einen Block von Stilen gefolgt wird, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser At-Regel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor bestehenden Schicht hinzugefügt. Wenn beim Erstellen eines Stilblocks mit `@layer` kein Name angegeben ist, werden die Stile in der At-Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer` Block-At-Regeln und eine `@layer`Anweisung verwendet. Dieses CSS macht das Folgende in der aufgelisteten Reihenfolge:

1. Erstellen einer benannten Schicht `layout`
2. Erstellen einer unbenannten, anonymen Schicht
3. Deklarieren einer Liste von drei Schichten und Erstellen von nur zwei neuen Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Hinzufügen zusätzlicher Stile zur bereits existierenden Schicht `layout`
5. Erstellen einer zweiten unbenannten, anonymen Schicht

```css
/* file: layers1.css */

/* unlayered styles */
body {
  color: #333333;
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

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten impliziten Schicht von nicht geschichteten Stilen, die in dem `body`-Stilblock enthalten sind. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht von nicht geschichteten Stilen immer die letzte ist. Es gibt keine Möglichkeit, die Schichtreihenfolge nach deren Erstellung zu ändern.

Wir haben einige Stile der Schicht mit dem Namen `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, erstellt das Angeben des Namens in einer `@layer`-At-Regel, mit oder ohne Stilen, die Schicht; dies fügt die Schicht an das Ende der Reihe der bestehenden Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks an die Stile der zuvor bestehenden Schicht angehängt – das Angeben von Stilen in einem Block durch Wiederverwendung eines bestehenden Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem einem Layer ohne Namensgebung Stile zugewiesen werden. Stile können zu einer unbenannten Schicht nur bei deren Erstellung hinzugefügt werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne einen Schichtnamen erstellt weitere unbenannte Schichten; sie fügt keine Stile zu einer zuvor bestehenden unbenannten Schicht hinzu.

Die `@layer`At-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stile einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir nannten die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>`; dies ist nur, um sie erklären zu können. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, auf sie zu verweisen oder ihnen weitere Stile hinzuzufügen.

Alle Stile, die außerhalb einer Schicht deklariert sind, werden in einer impliziten Schicht zusammengefasst. Im obigen Beispielcode setzte die erste Deklaration die `color: #333333`-Eigenschaft auf `body`. Dies wurde außerhalb irgendeiner Schicht deklariert. Normale nicht geschichtete Deklarationen haben Vorrang über normale geschichtete Deklarationen, auch wenn die nicht geschichteten Stile eine geringere Spezifität haben und zuerst in der Reihenfolge des Erscheinens stehen. Das erklärt, warum, obwohl das nicht geschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht mit diesen nicht geschichteten Stilen Vorrang hat, als sei es die zuletzt deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurden, wurden nur die `theme` und `utilities` Schichten erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Derzeit gibt es keine Möglichkeit, Schichten nach der Deklaration neu zu ordnen.

Im folgenden Beispiel weisen wir zwei Schichten Stile zu, indem wir sie erstellen und im Prozess benennen. Da sie bereits existieren und beim ersten Gebrauch erstellt wurden, bewirkt deren Deklaration in der letzten Zeile nichts.

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

Versuchen Sie, die letzte Zeile `@layer site, page;` an den Anfang zu setzen. Was passiert?

#### Schichterstellung und Media-Queries

Wenn Sie eine Schicht mit [Media-](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) Abfragen definieren und die Medien nicht passen oder die Funktion nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie sich die Schichtreihenfolge ändern kann, wenn sich die Größe Ihres Geräts oder Browsers ändert. In diesem Beispiel erstellen wir die `site` Schicht nur in breiteren Browsern. Wir weisen dann Stile den `page` und `site` Schichten in dieser Reihenfolge zu.

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

Auf großen Bildschirmen wird die `site` Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Andernfalls hat die `site` Schicht Vorrang über `page`, da sie später auf engen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht den Benutzern den Import von Stilregeln aus anderen Stylesheets, entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann aber von einer `@layer`-At-Regel gefolgt werden, die eine oder mehrere Schichten erstellt, ohne ihnen irgendwelche Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components` Schicht, eine verschachtelte `dialog` Schicht innerhalb der `components` Schicht und eine unbenannte Schicht, jeweils:

```css
@import "components-lib.css" layer(components);
@import "dialog.css" layer(components.dialog);
@import "marketing.css" layer();
```

Sie können mehr als eine CSS-Datei in eine einzelne Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzelne `social` Schicht:

```css
@import "comments.css" layer(social);
@import "sm-icons.css" layer(social);
```

Sie können Stile und Schichten basierend auf bestimmten Bedingungen mit [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) importieren. Die folgende importiert ein Stylesheet in eine `international` Schicht, nur wenn der Browser `display: ruby` unterstützt, und die importierte Datei hängt von der Breite des Bildschirms ab.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent der {{HTMLElement('link')}} Methode zum Verknüpfen von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` nicht im Stylesheet verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Ebenen innerhalb einer benannten oder einer anonymen Schicht. Jede Kaskadenschicht, selbst eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu untergeordneten Schichten innerhalb dieser Schicht.

### Vorteile des Verschachtelns von Schichten

Die Fähigkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich darum zu kümmern, ob andere Teams sie in eine Schicht importieren werden. Ähnlich ermöglicht das Verschachteln, dass Sie Drittanbieter-Stylesheets in eine Schicht importieren, ohne sich darum zu kümmern, ob dieses Stylesheet selbst Schichten hat. Da Schichten verschachtelt werden können, müssen Sie sich nicht um sich überschneidende Schichtnamen zwischen externen und internen Stylesheets sorgen.

### Erstellen von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit denselben Methoden wie normale Schichten erstellt werden. Beispielsweise können sie mit einer `@layer`-At-Regel gefolgt von den Namen einer oder mehrerer Schichten unter Verwendung einer Punktnotation erstellt werden. Mehrere Punkte und Schichtnamen bedeuten mehrere Verschachtelungen.

Wenn Sie eine Block-`@layer`-At-Regel innerhalb einer anderen Block-`@layer`-At-Regel verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration importiert wird, die das `layer` Schlüsselwort oder die `layer()` Funktion enthält, werden die Stile dieser benannten oder anonymen Schicht zugewiesen. Enthält die `@import`-Anweisung Schichten, werden diese Schichten innerhalb dieser Schicht zu verschachtelten Schichten.

Schauen wir uns das folgende Beispiel an:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components` Schicht. Wenn diese Datei Schichten enthält, benannte oder nicht, werden diese Schichten zu untergeordneten Schichten innerhalb der `components` Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow` Schicht, die eine untergeordnete Schicht der `components` Schicht ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components` Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow` Schicht, in diesem Fall würde der Inhalt von `narrow-theme.css` zu der verschachtelten `components.narrow` Schicht hinzugefügt. Weitere benannte verschachtelte Schichten können zur `components` Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können anschließend nicht mehr zugegriffen werden.

Schauen wir uns ein weiteres Beispiel an, wo wir [`layers1.css` in eine benannte Schicht importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import "layers1.css" layer(example);
```

Dies wird eine einzelne Schicht namens `example` mit einigen Deklarationen und fünf verschachtelten Schichten erstellen - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen des Vorrangs basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt ihre Vorrangstellung. Daher ist die Reihenfolge der Schichten sehr wichtig. In gleicher Weise wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungs-Schicht und Wichtigkeit.

### Vorrangordnung von regulären Kaskadenschichten

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Schichten (C.css Stile werden der impliziten Schicht der ungeschichteten Stile angehängt). Lassen Sie uns davon ausgehen, dass die drei Dateien (`A.css`, `B.css`, und `C.css`) keine zusätzlichen Schichten innerhalb enthalten. Die folgende Liste zeigt, wo Stile innerhalb und außerhalb dieser Dateien vom geringsten (1) zum höchsten (10) Vorrang sortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungeschichtete normale Stile (`C.css`)
4. Inline normale Stile
5. animierende Stile
6. ungeschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. Übergangs-Stile

Normale Stile, die innerhalb von Schichten deklariert werden, erhalten die niedrigste Priorität und werden nach der Reihenfolge der Schichterstellung sortiert. Normale Stile in der zuerst erstellten Schicht haben die niedrigste Vorrangstellung, und normale Stile in der zuletzt erstellten Schicht haben die höchste Vorrangstellung unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb `firstLayer` deklariert werden, werden durch nachfolgende Stile auf der Liste überschrieben, wenn irgendwelche Konflikte bestehen.

Nächstes sind alle Stile, die außerhalb von Schichten deklariert werden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle widersprüchlichen Stile von `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer einen höheren Vorrang als Stile, die _in_ einer Schicht deklariert sind (außer bei wichtigen Stilen).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang über normale Stile, die in den ungeschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css`, und `C.css`) gefunden werden.

Animierende Stile haben einen höheren Vorrang als alle normalen Stile, einschließlich Inline-Normalstilen.

Wichtige Stile, das heißt Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang über alle zuvor erwähnten Stile in unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht erklärt werden, haben weniger Vorrang als die innerhalb einer Schicht deklarierten Stile. Wichtige Stile innerhalb von Schichten werden auch in der Reihenfolge der Schichterstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht den geringsten Vorrang und die zuerst erstellte Schicht hat die höchste Vorrangstellung unter den deklarierten Schichten.

Inline wichtige Stile haben wiederum eine höhere Vorrangstellung als wichtige Stile, die anderswo deklariert wurden.

Übergangs-Stile haben die höchste Vorrangstellung. Wenn ein normaler Eigenschaftswert im Übergang ist, hat er Vorrang über alle anderen Eigenschaftswert-Deklarationen, selbst über wichtige Inline-Stile; aber nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mit einer `@layer`-Anweisung ohne Stile definiert. Die Schichtstile werden in zwei `@layer`-Blöcken definiert, die nach der `h1` CSS-Regel erscheinen, die außerhalb einer Schicht deklariert ist.

Die Inline-Stile, die auf das `h1`-Element mit dem `style`-Attribut angewendet werden, setzen einen normalen `color` und einen wichtigen `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Der normale `text-decoration` und der wichtige `box-shadow` sind nicht Teil der `style` Inline-Stile und können daher überschrieben werden. Für normale nicht-inline Stile hat Unschicht Vorrang. Für wichtige Stile spielt die Schichtreihenfolge auch eine Rolle. Während normale ungeschichtete Stile alle normalen Stile innerhalb einer Schicht überschreiben, ist die Vorrangordnung bei wichtigen Stilen umgekehrt; ungeschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert werden, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Für normale Stile hat die Schicht `B`, die zuletzt deklariert wird, Vorrang gegenüber den Stilen in der früher deklarierten Schicht `A`. Für normale Stile hat die später deklarierte Schicht Vorrang vor früher deklarierten Schichten. Die Vorrangordnung ist für wichtige Stile umgekehrt. Für die wichtigen `font-weight` Deklarationen hat die Schicht `A`, die zuerst deklariert wird, Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` auf `@layer B, A;` ändern. Versuchen Sie das. Welche Stile werden dadurch geändert, und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge bestimmt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten ohne Zuweisung von Stilen deklariert, indem wir `@layer` gefolgt von den Namen unserer Schichten, endend mit einem Semikolon, verwendeten. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich geblieben. Warum? Wir haben Stilregeln in benannten `@layer` Blöcken in der Reihenfolge A dann B vergeben. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Wenn sie nicht gewesen wären, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen eingefügt: Erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass die Deklaration der Schichtreihenfolge von vorne die beste Praxis für Ihr Schichtordnungsmanagement ist.

Zusammenfassend:

- Die Reihenfolge der Vorrangstellung der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Die Schichtvorrangstellung für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Nicht geschichtete normale Stile haben Vorrang über geschichtete normale Stile.
- Die Schichtvorrangstellung für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang über ungeschichtete wichtige (und normale) Stile.
- Normale Inline-Stile haben Vorrang über alle normalen Stile, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang über alle anderen Stile, mit Ausnahme der sich im Übergang befindlichen Stile.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer durch Transition, die temporär ist).

### Vorrangordnung von verschachtelten Kaskadenschichten

Die Kaskaden-Vorrangordnung für verschachtelte Schichten ist ähnlich wie die von regulären Schichten, aber innerhalb der Schicht. Die Vorrangordnung basiert auf der Erstellungsreihenfolge der verschachtelten Schicht. Nicht verschachtelte Stile in einer Schicht haben Vorrang über verschachtelte normale Stile, wobei die Vorrangordnung für wichtige Stile umgekehrt wird. Spezifitätsgewicht zwischen den verschachtelten Schichten spielt keine Rolle, obwohl es eine Rolle für konkurrierende Stile innerhalb einer verschachtelten Schicht spielt.

Die folgende erstellt und fügt der `components` Schicht Stile hinzu, der `components.narrow` verschachtelten Schicht und der `components.wide` verschachtelten Schicht:

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

Eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Da nicht geschichtete normale Stile Vorrang über geschichtete normale Stile haben, gewinnt die `wheat`-Farbe.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang über normale verschachtelte Stile haben, gewinnt die `red`-Farbe.
- `color`: Bei wichtigen Stilen, geschichteten Stilen haben Vorrang über nicht geschichtete Stile, wobei wichtige Stile in früher deklarierten Schichten Vorrang über später deklarierte Schichten innerhalb derselben Schicht haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichtenerstellung `components.narrow`, dann `components.wide`, daher haben wichtige Stile in `components.narrow` Vorrang über wichtige Stile in `components.wide`, was bedeutet, dass die `purple`-Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten festgelegt, daher gewinnt der `20%`-Radius durch Deklarationsreihenfolge.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie sind nun mit den grundlegenden Mechanismen der CSS-Kaskadenschichten vertraut.
