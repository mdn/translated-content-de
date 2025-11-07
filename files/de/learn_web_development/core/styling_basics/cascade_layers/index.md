---
title: Cascade-Ebenen
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Diese Lektion soll Ihnen eine Einführung in [Cascade-Ebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) geben, ein fortgeschrittenes Feature, das auf den grundlegenden Konzepten der [CSS Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag diese Lektion zunächst weniger direkt relevant und etwas theoretischer erscheinen als einige andere Teile des Kurses. Dennoch ist es hilfreich, die Grundlagen von Cascade-Ebenen zu kennen, falls Sie diesen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Cascade-Ebenen und das Wissen, wie man ihre Kraft nutzt, Ihnen helfen, viele Schwierigkeiten beim Verwalten eines Code-Basises mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu vermeiden.

Cascade-Ebenen sind besonders relevant, wenn Sie mit CSS aus unterschiedlichen Quellen arbeiten, in denen es zu Konflikten bei CSS-Selektoren und konkurrierenden Spezifitäten kommt, oder wenn Sie die Verwendung von [`!important`](/de/docs/Web/CSS/Reference/Values/important) in Betracht ziehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Cascade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen für das Styling</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Konflikte behandeln</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Cascade-Ebenen funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle Eigenschaftswerte, die auf ein Element angewendet werden, einsehen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Styles"-Panel des Tools zeigt alle Eigenschaftswerte an, die auf das inspizierte Element angewendet werden, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewandten Stilen zeigt das Styles-Panel durchgestrichene Werte an, die zu dem ausgewählten Element passten, aber aufgrund der Cascade, Spezifität oder Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können vom gleichen Ursprung mit Vorrang kommen, aber mit geringerer Spezifität, oder mit übereinstimmendem Ursprung und Spezifität, wurden jedoch früher in der Codebasis gefunden. Bei jedem angewandten Eigenschaftswert kann es mehrere durchgestrichene Deklarationen aus vielen verschiedenen Quellen geben. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet dies, dass dem Wert Ursprung oder Wichtigkeit fehlen.

Oftmals, wenn die Komplexität einer Website zunimmt, erhöht sich auch die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Cascade-Ebenen vereinfachen die Verwaltung von Stylesheets in solchen Code-Basen. Cascade-Ebenen sind explizite Spezifitätscontainer, die eine einfachere und bessere Kontrolle über die letztlich angewendeten CSS-Deklarationen bieten und es Webentwicklern ermöglichen, CSS-Bereiche zu priorisieren, ohne mit der Spezifität zu kämp

fen.

Um Cascade-Ebenen zu verstehen, müssen Sie die CSS-Cascade gut verstehen. Die folgenden Abschnitte geben eine kurze Zusammenfassung der wichtigen Cascade-Konzepte.

## Rückblick auf das Cascade-Konzept

Das 'C' in CSS steht für "Cascading". Dies ist die Methode, durch die Stile zusammenfließen. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4, **Cascade-Ebenen**, eintauchen, was Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem passenden Selektor für jedes Element.
2. **Wichtigkeit:** Sortieren Sie die Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/Reference/Values/important)-Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb jedes der beiden Wichtigkeits-Buckets die Regeln nach Herkunft von Autor, Benutzer oder Benutzeragent.
4. **Cascade-Ebenen:** Sortieren Sie innerhalb jedes der sechs Ursprungs-Wichtigkeits-Buckets nach Cascade-Ebene. Die Schichtreihenfolge für normale Deklarationen geht von der zuerst erstellten Ebene zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile invertiert, wobei nicht geschichtete wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) für konkurrierende Stile in der Ursprungs-Ebene mit Vorrang.
6. **Scope-Nähe:** Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb des geschachtelten Regelbereichs mit der geringsten Anzahl von Hops in der DOM-Hierarchie zur Scope-Wurzel. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved).
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifität und Scopenähe haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt bewegen sich nur die Deklarationen "im Rennen" zu ihrer "Konkurrenz" im nächsten Schritt. Wenn nur eine Deklaration im Wettbewerb ist, "gewinnt" sie, und die nachfolgenden Schritte entfallen.

### Ursprung und Cascade

Es gibt drei [Cascade-Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzeragent-Stylesheets, Benutzer-Stylesheets und Autor-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungs-Buckets nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Priorität: die sechs Ursprungs-Buckets, Eigenschaften, die sich im Übergang befinden, und Eigenschaften, die animiert werden. Die Reihenfolge der Priorität reicht von normalen Benutzeragent-Stilen, die die niedrigste Priorität haben, über Stile in aktuell angewendeten Animationen, zu wichtigen Benutzeragent-Stilen und dann Stilen, die sich im Übergang befinden, die die höchste Priorität haben:

1. normale Benutzeragent-Stile
2. normale Benutzer-Stile
3. normale Autor-Stile
4. Stile, die animiert werden
5. wichtige Autor-Stile
6. wichtige Benutzer-Stile
7. wichtige Benutzeragent-Stile
8. Stile, die sich im Übergang befinden

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf ein Element mit dem {{HTMLElement('style')}}-Element deklariert sind, sind Autor-Stile. Ohne animierende und übergangsweise Stile haben normale Benutzeragent-Stile die niedrigste Priorität; wichtige Benutzeragent-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die "gewinnende" Deklaration diejenige aus dem Ursprung mit Priorität, basierend auf dem Gewicht (normal oder wichtig). Wenn man die Schichten vorerst ignoriert, wird der Wert aus dem Ursprung mit der höchsten Priorität angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autor-Stile angewendet, sodass nur Benutzeragent-Stile (und Ihre persönlichen Benutzer-Stile, falls vorhanden) angewendet werden. Der zweite Link hat [`text-decoration`](/de/docs/Web/CSS/Reference/Properties/text-decoration) und [`color`](/de/docs/Web/CSS/Reference/Properties/color), die durch Autor-Stile gesetzt sind, obwohl der Selektor im Autor-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autor-Stile "gewinnen", liegt daran, dass, wenn es Konflikte aus verschiedenen Ursprüngen gibt, die Regeln aus dem Ursprung mit Priorität angewendet werden, unabhängig von der Spezifität im Ursprung, der keine Priorität hat.

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

Der "konkurrierende" Selektor im Benutzeragent-Stylesheet zum Zeitpunkt des Schreibens ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0` Selektor im Autor-Stylesheet, spielt es keine Rolle: Die Spezifitätsgewichte aus dem Autor- und Benutzeragent-Ursprung werden niemals verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über die Selektor-Spezifität. Wenn eine Element-Eigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, überschreibt das Autor-Stylesheet immer die redundanten normalen Eigenschaften, die in einem Benutzer- oder Benutzeragent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, wird das Benutzeragent-Stylesheet immer über Autor- und Benutzer-Stile gewinnen. Die Vorrangigkeit des Cascade-Ursprungs sorgt dafür, dass Spezifitätskonflikte zwischen Ursprüngen niemals auftreten.

Eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Auftretens wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprung der Vorrangigkeit die gleiche Spezifität haben.

## Übersicht über Cascade-Ebenen

Wir verstehen jetzt "Ursprungsvorrang in der Cascade", aber was ist "Vorrang von Cascade-Schichten"? Wir werden diese Frage beantworten, indem wir erörtern, was Cascade-Ebenen sind, wie sie geordnet sind und wie Stile Cascade-Ebenen zugewiesen werden. Wir erläutern [reguläre Ebenen](#erstellen_von_cascade-ebenen), [verschachtelte Ebenen](#übersicht_über_verschachtelte_cascade-ebenen) und anonyme Ebenen. Schauen wir uns zunächst an, was Cascade-Ebenen sind und welche Probleme sie lösen.

### Vorrang von Cascade-Ebenen

Ähnlich wie wir sechs Prioritätsebenen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Cascade-Ebenen, innerhalb eines dieser Ursprünge eine Unterebene der Priorität zu schaffen.

Innerhalb jedes der sechs Ursprungs-Buckets kann es mehrere Cascade-Ebenen geben. Die [Reihenfolge der Schichtenerstellung](/de/docs/Web/CSS/Reference/At-rules/@layer) ist sehr wichtig. Sie bestimmt die Vorrangigkeit der Schichten innerhalb eines Ursprungs.

In normalen Ursprungs-Buckets werden Ebenen in der Reihenfolge ihrer Erstellung sortiert. Die Vorrangigkeit geht von der zuerst erstellten Schicht zur letzten, gefolgt von ungeschichteten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile invertiert. Alle ungeschichteten wichtigen Stile fließen in eine implizite Schicht, die Vorrang vor allen nicht-übergangsmäßigen normalen Stilen hat. Die ungeschichteten wichtigen Stile haben geringeren Vorrang als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Ebenen haben Vorrang vor den wichtigen Stilen in später deklarierten Ebenen innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials beschränken wir unsere Diskussion auf Autor-Stile, aber behalten Sie im Hinterkopf, dass Ebenen auch in Benutzer- und Benutzeragent-Stylesheets existieren können.

### Probleme, die Cascade-Ebenen lösen können

Große Code-Basen können Stile aus mehreren Teams, Komponentenbibliotheken, Frameworks und Dritten enthalten. Egal wie viele Stylesheets eingebunden sind, all diese Stile fließen in einem einzigen Ursprung zusammen: das _Autor_-Stylesheet.

Stile aus vielen Quellen zusammenzuführen, insbesondere aus Teams, die nicht miteinander arbeiten, kann Probleme erzeugen. Verschiedene Teams könnten unterschiedliche Methodologien haben; ein Team könnte eine Best Practice der Spezifitätsreduktion haben, während ein anderes Team einen Standard hat, eine `id` in jedem Selektor einzuschließen.

Spezifitätskonflikte können schnell eskalieren. Ein Webentwickler könnte einen "schnellen Fix" durch Hinzufügen eines `!important`-Flags erstellen. Obwohl dies wie eine einfache Lösung erscheinen mag, verschiebt es oft nur den Spezifikationskrieg von normalen zu wichtigen Deklarationen.

In der gleichen Weise, wie Cascade-Ursprüche ein Gleichgewicht der Macht zwischen Benutzer-, Benutzeragent- und Autor-Stilen bieten, bieten Cascade-Ebenen eine strukturierte Möglichkeit, Bedenken innerhalb eines einzelnen Ursprungs zu organisieren und auszubalancieren, als ob jede Schicht in einem Ursprung ein Unterursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Dritten erstellt werden, mit Stilvorrang basierend auf der Schichtenordnung.

Regeln innerhalb einer Schicht fließen zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Cascade-Ebenen ermöglichen es, ganze Stylesheets über andere zu priorisieren, ohne sich um die Spezifität zwischen diesen Unterursprüngen kümmern zu müssen.

Vorrang von Schichten schlägt immer die Selektor-Spezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit geringerem Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Die Spezifität spielt nur für konkurrierende Eigenschaftswerte innerhalb einer Schicht eine Rolle, aber es gibt keine Bedenken bezüglich der Spezifität zwischen den Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Cascade-Ebenen lösen können

Cascade-Ebenen erlauben die Erstellung verschachtelter Ebenen. Jede Cascade-Schicht kann verschachtelte Ebenen enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Cascade-Ebene fügt die Komponentenbibliothek zum Autorenursprung hinzu und entfernt Spezifitätskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Ebene kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Ebene. Die Reihenfolge dieser verschachtelten Themenschichten kann basierend auf Medienabfragen definiert werden (siehe den Abschnitt [Schichtenerstellung und Medienabfragen](#schichtenerstellung_und_medienabfragen) unten), wie z.B. die Ansichtsfenstergröße oder [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation). Diese verschachtelten Ebenen bieten eine Möglichkeit, Themen zu erstellen, die sich nicht basierend auf der Spezifität überschneiden.

Die Fähigkeit, Ebenen zu verschachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themes arbeiten.

Die Fähigkeit, verschachtelte Ebenen zu erstellen, beseitigt auch die Sorgen über sich überschneidende Ebenennamen. Wir werden dies im Abschnitt [Verschachtelte Ebene](#übersicht_über_verschachtelte_cascade-ebenen) behandeln.

> "Autoren können Ebenen erstellen, um Element-Defaults, Drittanbieter-Bibliotheken, Themes, Komponenten, Überschreibungen und andere Styling-Bedenken darzustellen - und sind in der Lage, die Reihenfolge der Cascade von Ebenen auf explizite Weise neu zu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Ebene zu ändern oder sich auf die Reihenfolge des Auftretens zu verlassen, um Konflikte zwischen Ebenen zu lösen."
>
> —[Spezifikation zu Cascade und Vererbung](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Cascade-Ebenen

Ebenen können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer) Attributregel, die Ebenen mit `@layer` gefolgt von den Namen einer oder mehrerer Ebenen deklariert. Dadurch werden benannte Ebenen erstellt, ohne ihnen Stile zuzuweisen.
- Die `@layer` Blockregel, in der alle Stile innerhalb eines Blocks zu einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) Regel mit dem Schlüsselwort `layer` oder der Funktion `layer()`, die den Inhalt der importierten Datei dieser Ebene zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn in der `@layer` Attributregel oder `@import` mit `layer()` kein Ebenenname angegeben ist, wird eine neue anonyme (unbenannte) Ebene erstellt.

> [!NOTE]
> Die Reihenfolge der Vorrangigkeit von Ebenen ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Ebene sind, oder "ungeschichtete Stile", fließen zusammen in eine endgültige implizite Beschriftung.

Lassen Sie uns die drei Möglichkeiten, eine Ebene zu erstellen, etwas genauer betrachten, bevor wir verschachtelte Ebenen besprechen.

### Die @layer Attributregel für benannte Ebenen

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. Das Deklarieren von Ebenen mit `@layer` gefolgt von den Namen einer oder mehrerer Ebenen, ohne ihnen Stile zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmen_der_vorrangigkeit_basierend_auf_der_reihenfolge_der_ebenen) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer) CSS Attributregel wird verwendet, um eine Cascade Ebene zu deklarieren und die Reihenfolge der Vorrangigkeit festzulegen, wenn es mehrere Cascade-Ebenen gibt. Die folgende Attributregel deklariert drei Ebenen, in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Oft möchten Sie, dass Ihre erste CSS-Zeile diese `@layer`-Deklaration ist (mit Ebenennamen, die für Ihre Website sinnvoll sind), um die volle Kontrolle über die Schichtenordnung zu haben.

Wenn die obige Anweisung die erste Zeile des CSS Ihrer Seite ist, ist die Ebenenreihenfolge `theme`, `layout` und `utilities`. Wenn einige Ebenen vor der obigen Anweisung erstellt wurden, werden diese drei Ebenen erstellt und am Ende der Liste bestehender Ebenen hinzugefügt, solange diese Namen nicht bereits existieren. Wenn jedoch eine Ebene mit demselben Namen bereits existiert, erstellt die obige Anweisung nur zwei neue Ebenen. Zum Beispiel, wenn `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Ebenenreihenfolge ist in diesem Fall `layout`, `theme` und `utilities`.

### Die @layer Blockregel für benannte und anonyme Ebenen

Ebenen können mithilfe der Blockregel `@layer` erstellt werden. Wenn einer `@layer`-Regel ein Bezeichner und ein Block von Stilen folgt, wird der Bezeichner zum Namen der Ebene, und die Stile in dieser Attributregel werden den Stilen der Ebene hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Ebene erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor bestehenden Ebene hinzugefügt. Wenn beim Erstellen eines Blocks von Stilen mit `@layer` kein Name angegeben wird, werden die Stile in der Attributregel zu einer neuen anonymen Ebene hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockregeln und eine `@layer`-Anweisungsregel verwendet. Dieses CSS tut Folgendes in der angegebenen Reihenfolge:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt zusätzliche Stile der bereits bestehenden `layout`-Schicht hinzu
5. Erstellt eine zweite unbenannte, anonyme Schicht

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

In dem obigen CSS haben wir fünf Ebenen erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Ebene von ungeschichteten Stilen, die im `body`-Stilblock enthalten sind. Die Ebenenreihenfolge ist die Reihenfolge, in der die Ebenen erstellt werden, wobei die implizite Schicht ungeschichteter Stile immer zuletzt kommt. Es gibt keine Möglichkeit, die Reihenfolge der Ebenen nach der Erstellung zu ändern.

Wir haben einige Stile der Ebene namens `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, erstellt die Angabe des Namens in einer `@layer`-Regel, mit oder ohne Zuweisung von Stilen an die Schicht, die Schicht; dies fügt die Schicht am Ende der Reihe von bestehenden Ebenennamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks den Stilen in der zuvor bestehenden Schicht hinzugefügt – das Spezifizieren von Stilen in einem Block durch die Wiederverwendung eines bestehenden Ebenennamens erstellt keine neue Schicht.

Anonyme Ebenen werden erstellt, indem Stile einer Schicht zugewiesen werden, ohne die Schicht zu benennen. Stile können einer unbenannten Ebene nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne Ebenenname erstellt zusätzliche unbenannte Ebenen; es hängt keine Stile an eine zuvor bestehende unbenannte Ebene an.

Die `@layer` Attributregel erstellt eine Schicht, benannt oder nicht, oder hängt Stile an eine Schicht an, wenn die benannte Schicht bereits existiert. Wir nannten die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>`, das ist nur, um sie zu erklären. Tatsächlich sind dies unbenannte Ebenen. Es gibt keine Möglichkeit, sie zu referenzieren oder ihnen weitere Stile hinzuzufügen.

Alle Stile, die außerhalb einer Schicht deklariert sind, werden in einer impliziten Schicht zusammengeführt. Im obigen Beispiel wurde die erste Deklaration, die `color: #333333`-Eigenschaft auf `body` gesetzt. Diese wurde außerhalb einer Schicht deklariert. Normale ungeschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, auch wenn die ungeschichteten Stile eine niedrigere Spezifität haben und in der Reihenfolge des Erscheinens zuerst kommen. Dies erklärt, warum die ungeschichteten CSS, obwohl sie zuerst im Codeblock deklariert wurden, die implizite Schicht dieser ungeschichteten Stile Vorrang hat, als wäre sie die zuletzt deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Ebenen deklariert wurde, wurden nur die `theme`- und `utilities`-Schichten erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Ebenen nicht ändert. Derzeit gibt es keine Möglichkeit, Ebenen nach ihrer Deklaration neu zu ordnen.

Im folgenden Beispiel weisen wir Stile zwei Ebenen zu, erstellen und benennen sie dabei im Prozess. Da sie bereits existieren, wurde nichts beim Erstellen von ihnen in der letzten Zeile erreicht.

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

Versuchen Sie, die letzte Zeile `@layer site, page;` zu verschieben, um sie zur ersten Zeile zu machen. Was passiert?

#### Schichtenerstellung und Medienabfragen

Wenn Sie eine Schicht mit [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)- oder [Feature-](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)-Abfragen definieren und das Medium nicht übereinstimmt oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie sich die Schichtenreihenfolge durch das Ändern der Größe Ihres Geräts oder Browsers ändern kann. In diesem Beispiel erstellen wir die `site`-Schicht nur in größeren Browsern. Danach weisen wir die Stile den `page`- und `site`-Ebenen in dieser Reihenfolge zu.

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

Bei breiten Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Andernfalls hat `site` Vorrang vor `page`, weil es bei schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Ebenen mit @import

Die [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import)-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, bevor alle Stile, kann jedoch von einer `@layer` Attributregel begleitet werden, die eine oder mehrere Schichten erstellt, ohne ihnen Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/Reference/At-rules/@charset)-Regel begleitet werden.)

Sie können ein Stylesheet in eine benannte Ebene, eine verschachtelte benannte Ebene oder eine anonyme Ebene importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Ebene, eine verschachtelte `dialog`-Ebene innerhalb der `components`-Ebene und eine unbenannte Schicht:

```css
@import "components-lib.css" layer(components);
@import "dialog.css" layer(components.dialog);
@import "marketing.css" layer();
```

Sie können mehr als eine CSS-Datei in eine einzelne Ebene importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Ebene:

```css
@import "comments.css" layer(social);
@import "sm-icons.css" layer(social);
```

Sie können Stile importieren und Ebenen basierend auf spezifischen Bedingungen unter Verwendung von [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Featureabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) erstellen. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Ebene nur, wenn der Browser `display: ruby` unterstützt und die importierte Datei von der Bildschirmbreite abhängt.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode, um Stylesheets zu verknüpfen. Verwenden Sie `@import`, um ein Stylesheet in eine Ebene zu importieren, wenn Sie `@layer` im Stylesheet nicht verwenden können.

## Übersicht über verschachtelte Cascade-Ebenen

Verschachtelte Ebenen sind Ebenen innerhalb einer ben<span class="tox-spellchecker-word" data-word="e-n"><b>e-n</b></span>annten oder <span class="tox-spellchecker-word" data-word="an-n"><b>an-n</b></span>ymen Ebene. Jede C<span class="tox-spellchecker-word" data-word="ascade-"><b>ascade-</b></span>ebene, <span class="tox-spellchecker-word" data-word="auch e-b-en- anonym"><b>auch e-b-en- anonym</b></span>, kann verschachtelte Ebenen enthalten. Ebenen, die in eine andere Ebene importiert werden, werden zu verschachtelten Ebenen innerhalb dieser Ebene.

### Vorteile des Verschachtelns von Ebenen

Die Fähigkeit, Ebenen zu verschachteln, ermöglicht es Teams, C<span class="tox-spellchecker-word" data-word="ascade-"><b>ascade-</b></span>ebenen zu erstellen, ohne sich s<span class="tox-spellchecker-word" data-word="orgen machen zu müssen"><b>orgen machen zu müssen</b></span>, ob andere Teams sie in eine Ebene importieren werden. Ebenso ermöglicht das V<span class="tox-spellchecker-word" data-word="erschachteln"><b>erschachteln</b></span>, Drittanbieter-Stylesheets in eine Ebene zu importieren, ohne sich s<span class="tox-spellchecker-word" data-word="orgen machen zu müssen"><b>orgen machen zu müssen</b></span>, ob das Stylesheet selbst Ebenen hat. Da Ebenen verschachtelt werden können, müssen Sie sich keine Sorgen darum machen, ob es Konflikte bei den Ebenennamen zwischen externen und internen Stylesheets gibt.

### Erstellen von verschachtelten Cascade-Ebenen

Verschachtelte Ebenen können mit den gleichen Methoden wie reguläre Ebenen erstellt werden. Beispielsweise können sie mit der `@layer`-Regel erstellt werden, gefolgt von den Namen einer oder mehrerer Ebenen unter Verwendung einer Punktnotation. Mehrere Punkte und Ebenennamen bedeuten mehrfaches Verschachteln.

Wenn Sie eine Block-`@layer`-Regel innerhalb einer anderen Block-`@layer`-Regel verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Ebene. Ähnlich werden Stylesheets, die mit einer `@import`-Deklaration mit dem Schlüsselwort `layer` oder der Funktion `layer()` importiert werden, den benannten oder anonymen Ebenen zugewiesen. Wenn die `@import`-Anweisung Ebenen enthält, werden diese Ebenen zu verschachtelten Ebenen innerhalb dieser anonymen oder benannten Ebene.

Schauen wir uns das folgende Beispiel an:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Ebene. Wenn diese Datei Ebenen enthält, ob benannte oder nicht, werden diese Ebenen zu verschachtelten Ebenen innerhalb der `components`-Ebene.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Ebene, die eine Unterebene von `components` ist. Die verschachtelte `components.narrow`-Ebene wird als letzte Ebene innerhalb der `components`-Ebene erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Ebene, in diesem Fall werden die Inhalte von `narrow-theme.css` der `components.narrow`-verschachtelten Ebene hinzugefügt. Weitere verschachtelte benannte Ebenen können der `components`-Ebene mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Ebenen erstellt werden, aber sie können nicht nachträglich angesprochen werden.

Schauen wir uns ein weiteres Beispiel an, in dem wir [importieren `layers1.css` in eine benannte Ebene](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import "layers1.css" layer(example);
```

Dies erstellt eine einzige Ebene namens `example`, die einige Deklarationen und fünf verschachtelte Ebenen enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Ebene hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen der Vorrangigkeit basierend auf der Reihenfolge der Ebenen

Die Reihenfolge der Ebenen bestimmt ihre Vorrangigkeit. Daher ist die Reihenfolge der Ebenen sehr wichtig. In der gleichen Weise, wie die Cascade nach Ursprung und Wichtigkeit sortiert, sortiert die Cascade auch jede CSS-Deklaration nach Ursprungsschicht und Wichtigkeit.

### Vorrangsreihenfolge von regulären Cascade-Ebenen

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Ebenen (C.css-Stile werden der impliziten Schicht nicht geschichteter Stile hinzugefügt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Ebenen innerhalb enthalten. Die folgende Liste zeigt, wo die in und außerhalb dieser Dateien deklarierten Stile sortiert werden, von der niedrigsten (1) bis zur höchsten (10) Vorrangigkeit.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungeschichtete normale Stile (`C.css`)
4. Inline normale Stile
5. animierende Stile
6. ungeschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. übergangsweise Stile

Normale Stile, die innerhalb von Ebenen erklärt werden, erhalten die geringste Priorität und werden in der Reihenfolge ihrer Erstellung der Ebenen sortiert. Normale Stile der ersten erstellten Schicht haben die geringste Vorrangigkeit, und normale Stile der zuletzt erstellten Schicht haben die höchste Vorrangigkeit unter den Ebenen. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` erklärt werden, werden von allen nachfolgend in der Liste genannten Stilen überschrieben, falls es Konflikte gibt.

Als nächstes kommen alle Stile, die außerhalb von Ebenen erklärt werden. Die in `C.css` enthaltenen Stile wurden nicht in eine Schicht importiert und überschreiben alle widersprüchlichen Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Ebene erklärt werden, haben immer höhere Vorrangigkeit als die Stile, die _in_ einer Ebene erklärt werden (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem globalen Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) erklärt. Normal erstellte Inline-Styles haben Vorrang vor normalen Styles, die in nicht geschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) zu finden sind.

Animierende Stile haben höhere Vorrangigkeit als alle normalen Stile, einschließlich Inline-normalen Stilen.

Wichtige Stile, also Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor erwähnten Styles in unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Styles sortiert. Alle wichtigen Stile, die außerhalb einer Schicht erklärt werden, haben weniger Vorrang als die, die in einer Schicht erklärt werden. Wichtige Stile, die innerhalb von Ebenen zu finden sind, werden auch in der Reihenfolge der Schichtenerstellung sortiert. Bei wichtigen Stilen hat die zuletzt erstellte Schicht die geringste Vorrangigkeit, und die zuerst erstellte Schicht hat die höchste Vorrangigkeit unter den erklärt

en Ebenen.

Inline wichtige Stile haben erneut eine höhere Vorrangigkeit als wichtige, anderswo erklärte Stile.

Übergangsweise Stile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert im Übergang ist, hat er Vorrang vor allen anderen Eigenschaftswert-Deklarationen, sogar vor Inline wichtigen Stilen; jedoch nur während des Übergangs.

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

In diesem Beispiel werden zwei Ebenen (`A` und `B`) initialisiert, indem sie eine `@layer`-Anweisungsregel ohne Stile verwenden. Die Ebenenstile werden in zwei `@layer`-Blockregeln definiert, die nach der CSS-Regel `h1`, die außerhalb einer Ebene erklärt wird, folgen.

Die Inline-Stile, die dem `h1`-Element unter Verwendung des `style`-Attributs hinzugefügt werden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autor-Stile. Es gibt keinen Weg für Autor-Stile, wichtige Inline-Stile zu überschreiben.

Die normalen `text-decoration` und wichtigen `box-shadow` sind nicht Teil der `style` Inline-Stile und können daher überschrieben werden. Bei normalen Nicht-Inline-Stilen haben ungeschichtete Stile Vorrang. Bei wichtigen Stilen spielt auch die Schichtreihenfolge eine Rolle. Während normale ungeschichtete Stile alle normalen Stile, die in einer Ebene gesetzt sind, überschreiben, ist bei wichtigen Stilen die Vorrangreihenfolge umgekehrt; ungeschichtete wichtige Stile haben geringeren Vorrang als geschichtete Stile.

Die beiden Stile, die nur in Schichten definiert sind, sind `font-style` mit normaler Wichtigkeit und `font-weight` mit einem `!important`-Flag. Bei normalen Stilen hat die `B`-Schicht, die zuletzt deklariert wurde, Vorrang vor Stilen in der früher deklarierten Schicht `A`. Bei normalen Stilen haben zuletzt erstellte Ebenen Vorrang vor früher erstellten Ebenen. Die Reihenfolge der Vorrangigkeit ist bei wichtigen Stilen umgekehrt. Für die wichtigen Entscheidungen bezüglich `font-weight` hat die zuerst deklarierten Schicht `A` Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Reihenfolge der Schichten umkehren, indem Sie die erste Zeile von `@layer A, B;` nach `@layer B, A;` ändern. Versuchen Sie das. Welche Stile werden dadurch geändert, welche bleiben gleich? Warum?

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. In unserer ersten Zeile deklarierten wir Ebenen, ohne ihnen Stile zuzuweisen, unter Verwendung von `@layer` gefolgt von den Namen unserer Ebenen, endend mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich. Warum? Wir ordneten Stilregeln in benannten `@layer`-Blocken in der Reihenfolge A, dann B zu. Die beiden Ebenen wurden in dieser ersten Zeile erstellt. Hätten sie das nicht, hätten diese Regelblöcke sie erstellt, in dieser Reihenfolge.

Wir haben diese erste Zeile aus zwei Gründen eingefügt: zunächst, damit Sie die Zeile einfach bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass es die beste Praxis für das Management Ihrer Ebenenreihenfolge ist, die Ordnung von Ebenen im Voraus zu deklarieren.

Zusammengefasst:

- Die Reihenfolge der Vorrangigkeit von Ebenen ist die Reihenfolge, in der die Ebenen erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Schichtenreihenfolge zu ändern.
- Die Vorrangigkeit von Ebenen für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Vorrangigkeit von Ebenen für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle wichtigen Schichtstile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von Stilen im Übergang.
- Es gibt keinen Weg für Autor-Stile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was jedoch temporär ist).

### Vorrangsreihenfolge von verschachtelten Cascade-Ebenen

Die Kaskaden-Vorrangsreihenfolge für verschachtelte Ebenen ist ähnlich der von regulären Ebenen, jedoch innerhalb der Ebene enthalten. Die Vorrangsreihenfolge basiert auf der Reihenfolge der Erstellung verschachtelter Ebenen. Nicht verschachtelte Stile in einer Ebene haben Vorrang vor normalen verschachtelten Stilen, wobei die Vorrangsreihenfolge für wichtige Stile umgekehrt ist. Das Spezifitätsgewicht zwischen verschachtelten Ebenen spielt keine Rolle, obwohl es für widersprüchliche Stile innerhalb einer verschachtelten Ebene wichtig ist.

Das Folgende erstellt und fügt der `components`-Schicht, der verschachtelten `components.narrow`-Ebene und der verschachtelten `components.wide`-Ebene Stile hinzu:

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

- `background-color`: Da ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat`-Farbe.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `red`-Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, wobei wichtige Stile in früher deklarierten Ebenen Vorrang vor später deklarierten Ebenen haben. In diesem Beispiel ist die Reihenfolge der Erstellung der verschachtelten Ebene `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass `purple` die Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Ebenen gesetzt, sodass durch die Deklarationsreihenfolge `20%` der Radius gewinnt.

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie sind jetzt mit den grundlegenden Mechanismen der Cascade-Ebenen von CSS vertraut.
