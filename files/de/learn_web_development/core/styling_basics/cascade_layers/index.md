---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

Diese Lektion zielt darauf ab, Sie mit [Kaskadenschichten](/de/docs/Web/CSS/@layer) vertraut zu machen, einer fortgeschritteneren Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, kann es zunächst weniger relevant und theoretischer erscheinen, sich durch diese Lektion zu arbeiten, im Vergleich zu anderen Teilen des Kurses. Es ist jedoch hilfreich, die Grundlagen darüber zu wissen, was Kaskadenschichten sind, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird Ihnen das Verständnis von Kaskadenschichten und das Wissen, wie Sie deren Potenzial nutzen können, dabei helfen, eine Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams besser zu verwalten.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es zu Konflikten zwischen CSS-Selektoren und konkurrierenden Spezifitäten kommen kann oder wenn Sie überlegen, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (lernen Sie
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
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

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklerwerkzeugen Ihres Browsers inspizieren. Das "Styles"-Panel des Werkzeugs zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte zusammen mit dem passenden Selektor und der CSS-Quelldatei an. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel durchgestrichene Werte, die mit dem ausgewählten Element übereinstimmten, aber aufgrund der Kaskade, der Spezifität oder der Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können vom gleichen Ursprung mit Vorrang kommen, aber mit geringerer Spezifität, oder mit übereinstimmendem Ursprung und Spezifität, wurden jedoch früher im Code gefunden. Für jeden angewendeten Eigenschaftswert kann es mehrere durchgestrichene Deklarationen aus vielen verschiedenen Quellen geben. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet das, dass der Wert an Herkunft oder Bedeutung fehlt.

Oftmals, je komplexer eine Seite wird, desto mehr Stylesheets gibt es, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Pflege von Stylesheets in solchen Codebasen. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und bessere Kontrolle über die CSS-Deklarationen ermöglichen, die letztendlich angewendet werden, und ermöglichen es Webentwicklern, CSS-Abschnitte zu priorisieren, ohne sich mit Spezifitätskonflikten auseinandersetzen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigsten Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading". Dies ist die Methode, durch die Stile zusammenkaskadieren. Der User-Agent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann tiefer auf Schritt 4 eingehen, **Kaskadenschichten**, worüber Sie hier lernen sollen:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektor, der zu jedem Element passt.
2. **Wichtigkeit:** Regeln basierend darauf sortieren, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important) Flag gesetzt haben.
3. **Ursprung:** Innerhalb jedes der beiden Wichtigkeitsgruppen, Regeln nach Autor-, Benutzer- oder User-Agent-Ursprung sortieren.
4. **Kaskadenschichten:** Innerhalb jedes der sechs Ursprungswichtigkeitsgruppen, nach Kaskadenschicht sortieren. Die Schichtenreihenfolge für normale Deklarationen reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von ungeordneten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei ungeordnete wichtige Stile die geringste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungsstufe mit Vorrang Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) sortieren.
6. **Bereichsnähe**: Wenn zwei Selektoren in der Ursprungsstufe mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der Bereiche mit der kleineren Anzahl von Sprüngen in der DOM-Hierarchie zur Wurzel des Gültigkeitsbereichs. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).
7. **Erscheinungsreihenfolge:** Wenn zwei Selektoren in der Ursprungsstufe mit Vorrang die gleiche Spezifität und Bereichsnähe haben, gewinnt der Eigenschaftswert aus dem zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt ziehen nur die Deklarationen, die "noch im Rennen" sind, in den nächsten Schritt weiter. Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die folgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Ursprungstypen der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): User-Agent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungsgruppen nach Ursprung und Wichtigkeit. Es gibt acht Stufen der Vorrangigkeit: die sechs Ursprungsgruppen, Eigenschaften, die sich in der Transition befinden, und Eigenschaften, die animiert werden. Die Vorrangreihenfolge reicht von normalen User-Agent-Stilen, die die geringste Priorität haben, bis zu Stilen in aktuell angewendeten Animationen, über wichtige User-Agent-Stile bis hin zu Stilen, die in der Transition sind und die höchste Priorität haben:

1. normale User-Agent-Stile
2. normale Benutzerstile
3. normale Autorenstile
4. animierte Stile
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige User-Agent-Stile
8. Stile in der Transition

Der "User-Agent" ist der Browser. Der "Benutzer" ist der Webseitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf einem Element mit dem {{HTMLElement('style')}}-Element deklariert werden, sind Autorenstile. Abgesehen von animierenden und transierenden Stilen haben normale User-Agent-Stile die geringste Priorität; wichtige User-Agent-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprung mit Vorrang, basierend auf dem Gewicht (normal oder wichtig). Wenn man Schichten für den Moment ignoriert, wird der Wert aus dem Ursprung mit der größten Vorrangigkeit angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine angewendeten Autorenstile, daher werden nur User-Agent-Stile (und Ihre persönlichen Benutzerstile, falls vorhanden) angewendet. Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die durch Autorenstile festgelegt wurden, obwohl der Selektor im Autorenstylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass, wenn es konkurrierende Stile aus verschiedenen Ursprüngen gibt, die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität im Ursprung, der keinen Vorrang hat.

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

Der "konkurrierende" Selektor im User-Agent-Stylesheet zur Zeit dieses Schreibens ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0` Selektor im Autorenstylesheet, ist es egal, ob der Selektor in Ihrem aktuellen User-Agent anders ist: Die Spezifitätsgewichte von Autoren- und User-Agent-Ursprüngen werden niemals verglichen. Erfahren Sie mehr über [wie Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektorspezifität. Wenn eine Elementeigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, wird das Autorenstylesheet immer die redundanten normalen Eigenschaften im Benutzer- oder User-Agent-Stylesheet überschreiben. Wenn der Stil wichtig ist, wird das User-Agent-Stylesheet immer über Autoren- und Benutzerstile gewinnen. Der Ursprungsvorrang der Kaskade sorgt dafür, dass Spezifitätskonflikte zwischen Ursprüngen nie auftreten.

Eine letzte Anmerkung, bevor Sie weitermachen: Die Erscheinungsreihenfolge wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprung mit Vorrang die gleiche Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen jetzt den "Vorrang der Kaskadenursprünge", aber was ist "Vorrang der Kaskadenschichten"? Wir werden diese Frage beantworten, indem wir ansprechen, was Kaskadenschichten sind, wie sie geordnet werden und wie Stile Kaskadenschichten zugewiesen werden. Wir werden [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten behandeln. Lassen Sie uns zuerst besprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangreihenfolge der Kaskadenschichten

Ähnlich wie wir sechs Ebenen der Priorität basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten uns, eine Unter-Ebene der Priorität innerhalb eines dieser Ursprünge zu erstellen.

Innerhalb jedes der sechs Ursprungsgruppen kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichtenerstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Sie ist die Reihenfolge der Erstellung, die die Vorrangreihenfolge der Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungsgruppen werden Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangreihenfolge reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von ungeordneten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle ungeordneten wichtigen Stile kaskadieren zusammen in eine implizite Schicht, die Vorrang vor allen nicht-transitionierenden normalen Stilen hat. Die ungeordneten wichtigen Stile haben eine geringere Priorität als jede wichtige geschichtete Stile. Die wichtigen Stile in früher erklärten Schichten haben Vorrang vor wichtigen Stilen in später erklärten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber bedenken Sie, dass Schichten auch in Benutzer- und User-Agent-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile aus mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal wie viele Stylesheets enthalten sind, alle diese Stile kaskadieren zusammen in einem einzigen Ursprung: das _Autor_-Stylesheet.

Stile aus vielen Quellen zusammen kaskadieren zu lassen, besonders von Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Unterschiedliche Teams können unterschiedliche Methoden haben; eines kann die bewährte Methode haben, die Spezifität zu reduzieren, während ein anderes den Standard hat, eine `id` in jeden Selektor einzufügen.

Spezifitätskonflikte können schnell eskalieren. Ein Webentwickler kann ein "schnelles Fix" erstellen, indem er ein `!important`-Flag hinzufügt. Auch wenn dies wie eine einfache Lösung erscheint, verlagert es oft nur den Spezifitätskrieg von normalen zu wichtigen Deklarationen.

Auf die gleiche Weise, wie Kaskadenursprünge ein Gleichgewicht zwischen Benutzer-, User-Agent- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht in einem Ursprung ein Unter-Ursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Stilvorrang basierend auf der Schichtenreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen es, ganze Stylesheets über andere Stylesheets zu priorisieren, ohne sich Sorgen über Spezifität zwischen diesen Unter-Ursprüngen machen zu müssen.

Die Schichtenspeziellität übertrifft immer die Selektorspezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität spielt bei konkurrierenden Eigenschaftswerten innerhalb einer Schicht immer noch eine Rolle, aber es gibt keine Spezifitätsprobleme zwischen Schichten, da nur die Schicht mit der höchsten Priorität für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten ermöglichen die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek in den Autorenursprung ein und beseitigt alle Spezifitätskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als eigene verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Themensschichten kann basierend auf Medienabfragen (siehe den Abschnitt [Layer creation and media queries](#schichtenerstellung_und_medienabfragen) unten) definiert werden, wie zum Beispiel Anzeigegröße oder [Orientierung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht aufgrund von Spezifität miteinander kollidieren.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeiten.

Die Möglichkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge, dass es zu Konflikten mit Schichtennamen kommt. Wir werden dies im Abschnitt über [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Element-Defaults, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Styling-Belange darzustellen—und können den Kaskadenverlauf der Schichten auf eine explizite Weise neu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu ändern, oder auf die Erscheinungsreihenfolge angewiesen sein, um Konflikte über Schichten hinweg zu lösen."
>
> —[Cascading and Inheritance specification](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer)-Anweisung mit dem At-Regel, die Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Der `@layer`-Block mit dem At-Regel, in dem alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn im `@layer`-At-Regel oder `@import` mit `layer()` kein Schichtenname angegeben wird, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Reihenfolge der Vorrangigkeit der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht sind oder "unlayered styles", kaskadieren zusammen in eine letzte implizite Schicht.

Lassen Sie uns die drei Möglichkeiten zum Erstellen einer Schicht etwas genauer behandeln, bevor wir über verschachtelte Schichten sprechen.

### Die @layer-Anweisung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne ihnen Stile zuzuweisen, ist eine Möglichkeit, die [Reihenfolge der Schichten](#bestimmung_der_vorrangigkeit_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS-at-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangreihenfolge zu definieren, wenn es mehrere Kaskadenschichten gibt. Die folgende at-Regel deklariert drei Schichten in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Häufig möchten Sie, dass Ihre erste Zeile im CSS diese `@layer`-Deklaration ist (natürlich mit Schichtennamen, die für Ihre Seite sinnvoll sind), um die volle Kontrolle über die Schichtenreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile im CSS einer Seite ist, wird die Schichtenreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, werden, solange Schichten mit diesen Namen noch nicht existieren, diese drei Schichten erstellt und an das Ende der Liste der vorhandenen Schichten angehängt. Wenn jedoch bereits eine Schicht mit demselben Namen existiert, wird die obige Anweisung nur zwei neue Schichten erstellen. Wenn zum Beispiel `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Der @layer-Block für benannte und anonyme Schichten

Schichten können mithilfe des `@layer`-Blocks mit dem At-Regel erstellt werden. Wenn ein `@layer`-At-Regel von einem Bezeichner und einem Block von Stilen gefolgt wird, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in diesem At-Regel werden den Stilen der Schicht hinzugefügt. Wenn die angegebene Schicht noch nicht existiert, wird eine neue Schicht erstellt. Wenn die angegebene Schicht bereits existiert, werden die Stile der zuvor vorhandenen Schicht hinzugefügt. Wird beim Erstellen eines Blocks von Stilen keine Name bei `@layer` angegeben, werden die Stile des At-Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Block mit dem At-Regel und eine `@layer`-Anweisung verwendet. Diese CSS tut Folgendes in der aufgeführten Reihenfolge:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt der bereits vorhandenen `layout`-Schicht zusätzliche Stile hinzu
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

In dem oben gezeigten CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge – mit einer sechsten impliziten Schicht von ungeschichteten Stilen, die im `body`-Stilblock enthalten ist. Die Schichtenreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht der ungeschichteten Stile immer die letzte ist. Es gibt keine Möglichkeit, die Schichtenreihenfolge nachträglich zu ändern.

Wir haben einige Stile der Schicht mit dem Namen `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, dann erstellt die Angabe des Namens in einem `@layer`-At-Regel, mit oder ohne die Zuweisung von Stilen zur Schicht, die Schicht; dies fügt die Schicht an das Ende der Serie existierender Schichtennamen an. Wenn die benannte Schicht bereits existiert, werden alle innerhalb des benannten Blocks befindlichen Stile der vorher vorhandenen Schicht hinzugefügt – das Spezifizieren von Stilen in einem Block durch wiederholte Verwendung eines vorhandenen Schichtennamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stile ohne Benennung der Schicht zugewiesen werden. Stile können nur zum Zeitpunkt ihrer Erstellung einer unbenannten Schicht hinzugefügt werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne Schichtennamen erstellt zusätzliche unbenannte Schichten; es fügt keine Stile zu einer bereits vorhandenen unbenannten Schicht hinzu.

Das `@layer`-At-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stile einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` genannt und die zweite `<anonymous(02)>`, dies ist nur zu Erklärungszwecken. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder ihnen zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden in einer impliziten Schicht zusammengefasst. In dem obigen Beispiel wurde mit der ersten Deklaration die `color: #333` Eigenschaft auf `body` gesetzt. Dies wurde außerhalb einer Schicht deklariert. Normale ungeschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die ungeschichteten Stile eine geringere Spezifität haben und zuerst in der Erscheinungsreihenfolge kommen. Dies erklärt, warum, auch wenn das ungeschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese ungeschichteten Stile enthält, Vorrang hat, als ob sie die letzte erklärte Schicht wäre.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurden, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge bereits erstellter Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, Schichten nach der Deklaration neu zu ordnen.

Im folgenden Beispiel weisen wir zwei Schichten Stile zu, erstellen sie und benennen sie dabei. Da sie bereits existieren, nachdem sie zum ersten Mal verwendet wurden, tut ihre Deklaration in der letzten Zeile nichts.

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

Wenn Sie eine Schicht mithilfe von [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)-Abfragen definieren und das Medium nicht übereinstimmt oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie die Änderung der Größe Ihres Geräts oder Browsers die Schichtreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen dann in dieser Reihenfolge Stile den `page`- und `site`-Schichten zu.

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

Auf Breitbildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Ansonsten hat `site` Vorrang vor `page`, weil es auf schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, das `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen im Stylesheet oder `<style>`-Block definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann jedoch von einer `@layer`-Anweisung gefolgt werden, die eine oder mehrere Schichten erstellt, ohne ihnen Stile zuzuweisen. (Außerdem kann `@import` von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in einer einzigen Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Schicht:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Stile importieren und Schichten basierend auf bestimmten Bedingungen erstellen, indem Sie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Die folgende Regel importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die importierte Datei hängt von der Breite des Bildschirms ab.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode zum Verlinken von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` nicht innerhalb des Stylesheets verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder anonymen Schicht. Jede Kaskadenschicht, auch eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile des Verschachtelns von Schichten

Die Möglichkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Gedanken darüber zu machen, ob andere Teams sie in eine Schicht importieren werden. Ebenso ermöglicht das Verschachteln Ihnen, externe Stylesheets in eine Schicht zu importieren, ohne sich Gedanken darüber zu machen, ob dieses Stylesheet selbst Schichten enthält. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen über widersprüchliche Schichtennamen zwischen externen und internen Stylesheets machen.

### Erstellen von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit den gleichen Methoden erstellt werden wie reguläre Schichten. Zum Beispiel können sie mit einer `@layer`-Anweisung gefolgt von den Namen einer oder mehrerer Schichten, unter Verwendung einer Punktnotation, erstellt werden. Mehrfache Punkte und Schichtennamen bedeuten mehrfache Verschachtelungen.

Wenn Sie einen `@layer`-Block in einen anderen `@layer`-Block verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Wenn ein Stylesheet mit einer `@import`-Deklaration und dem `layer`-Schlüsselwort oder der `layer()`-Funktion importiert wird, werden die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten zu verschachtelten Schichten innerhalb dieser anonymen oder benannten Schicht.

Sehen wir uns folgendes Beispiel an:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei irgendwelche Schichten enthält, benannt oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unterschicht der `components` ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall würden die Inhalte von `narrow-theme.css` an die `components.narrow`-verschachtelte Schicht angehängt werden. Zusätzliche benannte verschachtelte Schichten können zur `components`-Schicht hinzugefügt werden, indem das Muster `components.<layerName>` verwendet wird. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, sie können jedoch anschließend nicht mehr angesprochen werden.

Schauen wir uns ein weiteres Beispiel an, bei dem wir [import `layers1.css` in einer benannten Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit folgendem Statement importieren:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne Schicht namens `example` erstellen, die einige Deklarationen und fünf verschachtelte Schichten - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>` - enthält.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung der Vorrangigkeit basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt ihre Vorrangreihenfolge. Daher ist die Reihenfolge der Schichten sehr wichtig. Ähnlich wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsschicht und Wichtigkeit.

### Vorrangsreihenfolge regulärer Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (die Stile von C.css werden der impliziten Schicht der ungeschichteten Stile hinzugefügt). Nehmen wir an, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Schichten enthalten. Die folgende Liste zeigt, wo innerhalb und außerhalb dieser Dateien deklarierte Stile vom geringsten (1) bis zum höchsten (10) Vorrang sortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungeschichtete normale Stile (`C.css`)
4. inline normale Stile
5. animierende Stile
6. ungeschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. inline wichtige Stile
10. transitionierende Stile

Normale innerhalb von Schichten deklarierte Stile erhalten die niedrigste Priorität und werden nach der Reihenfolge der Erstellung der Schichten sortiert. Normale Stile in der zuerst erstellten Schicht haben die geringste Priorität, und normale Stile in der zuletzt erstellten Schicht haben die höchste Vorrangigkeit unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert werden, werden von allen nachfolgenden Stilen in der Liste überschrieben, wenn irgendwelche Konflikte bestehen.

Als nächstes kommen alle außerhalb von Schichten deklarierten Stile. Die in `C.css` befindlichen Stile wurden nicht in einer Schicht importiert und überschreiben alle konfLiktierenden Stile von `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer eine höhere Priorität als Stile, die _in_ einer Schicht deklariert sind (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale auf diese Weise deklarierte Stile haben Vorrang vor allen normalen in den ungeschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) gefundenen Stilen.

Animierende Stile haben eine höhere Priorität als alle normalen, einschließlich normaler Inline-Stile.

Wichtige Stile, also Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor in unserer Liste erwähnten Stilen. Sie sind in umgekehrter Reihenfolge zu normalen Stilen sortiert. Wichtige Stile, die außerhalb einer Schicht deklariert sind, haben weniger Vorrang als die innerhalb einer Schicht deklarierten. Wichtige Stile, die innerhalb von Schichten gefunden werden, sind auch in der Reihenfolge der Schichtenerstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht die geringste Vorrangigkeit, und die zuerst erstellte Schicht hat innerhalb der deklarierten Schichten die höchste Vorrangigkeit.

Inline wichtige Stile haben erneut Vorrang vor wichtigen an anderem Ort deklarierten Stilen.

Transitionierende Stile haben die höchste Vorrangigkeit. Wenn ein normaler Eigenschaftswert transitioniert wird, hat er Vorrang vor allen anderen Eigenschaftswert-Deklarationen, sogar vor wichtigen Inline-Stilen; jedoch nur während der Transition.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst unter Verwendung einer `@layer`-Anweisung ohne Stile definiert. Die Schichtstile werden in zwei `@layer`-Blockanweisungen definiert, die nach der `h1`-CSS-Regel erscheinen, die außerhalb einer Schicht deklariert ist.

Die mit dem `style`-Attribut auf dem `h1`-Element hinzugefügten Inline-Stile setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normalen `text-decoration`- und wichtigen `box-shadow`-Stile sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Für normale nicht-inline Stile haben ungeschichtete Stile Vorrang. Für wichtige Stile zählt auch die Schichtenreihenfolge. Während normale ungeschichtete Stile alle in einer Schicht deklarierten normalen Stile überschreiben, ist die Reihenfolge bei wichtigen Stilen umgekehrt; ungeschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert sind, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Für normale Stile überschreibt die zuletzt deklarierte Schicht `B` Stile in der früher deklarierten Schicht `A`. Für normale Stile haben spätere Schichten Vorrang vor früheren Schichten. Die Vorrangreihenfolge ist umgekehrt für wichtige Stile. Für die wichtigen `font-weight`-Deklarationen hat die zuerst deklArierte Schicht `A` mehr Vorrang als die zuletzt deklarierte Schicht `B`.

Sie können die Schichtenreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Versuchen Sie das. Welche Stile werden dadurch geändert und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten ohne die Zuweisung von Stilen deklariert, indem wir `@layer` gefolgt von den Namen unserer Schichten und einem Semikolon verwendet haben. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich geblieben. Warum? Wir haben in benOberung von Schichten mit den . layer" block

Stilregelblöcken zugewiesen der letzten erstellten Schicht Variablen, JSONizzo erweisen ersten beiden.

Zusammenfassend:

- Die Reihenfolge der Vorrangigkeit der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Sobald erstellt, gibt es keine Möglichkeit, die Schichtenreihenfolge zu ändern.
- Schichtenvorrang für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Schichtenvorrang für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von Stilen, die in der Übergangsphase sind.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer durch Übergang, der nur vorübergehend ist).

### Vorrangreihenfolge von verschachtelten Kaskadenschichten

Die Kaskadenvorrangreihenfolge für verschachtelte Schichten ist ähnlich wie die von regulären Schichten, jedoch innerhalb der Schicht enthalten. Die Vorrangreihenfolge basiert auf der Reihenfolge der Erstellung verschachtelter Schichten. Nicht verschachtelte Stile in einer Schicht haben Vorrang vor normalen verschachtelten Stilen, wobei die Vorrangreihenfolge für wichtige Stile umgekehrt ist. Das Spezifitätsgewicht zwischen verschachtelten Schichten spielt keine Rolle, obwohl es für konkurrierende Stile innerhalb einer verschachtelten Schicht eine Rolle spielt.

Die folgende erstellt und fügt der `components`-Schicht Stile hinzu, die `components.narrow` verschachtelten Schicht und die `components.wide` verschachtelten Schicht:

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

- `background-color`: Da ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die Farbe `wheat`.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die Farbe `red`.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, wobei wichtige Stile in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der Erstellung verschachtelter Schichten `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass die Farbe `purple` gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, daher gewinnt der Radius `20%` nach Deklarationsreihenfolge.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden hier einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechaniken der CSS-Kaskadenschichten vertraut.
