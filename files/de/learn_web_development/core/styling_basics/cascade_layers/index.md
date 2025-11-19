---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Diese Lektion zielt darauf ab, Ihnen [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer) vorzustellen, ein fortgeschrittenes Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es weniger relevant und etwas akademischer erscheinen, diese Lektion im Vergleich zu anderen Teilen des Kurses durchzuarbeiten. Es ist jedoch hilfreich, die Grundlagen von Kaskadenschichten zu kennen, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadenschichten und die Fähigkeit, deren Potenzial zu nutzen, Ihnen helfen, viel Ärger beim Verwalten einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu vermeiden.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es zu Konflikten bei CSS-Selektoren und konkurrierenden Spezifizitäten kommt oder wenn Sie in Erwägung ziehen, [`!important`](/de/docs/Web/CSS/Reference/Values/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifikität (studieren Sie
        <a href="https://developer.mozilla.org/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a> und <a href="https://developer.mozilla.org/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
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

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Stile"-Panel des Tools zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte an, zusammen mit dem passenden Selektor und der CSS-Quelldatei. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Stile-Panel durchgestrichene Werte an, die auf das ausgewählte Element passten, aber aufgrund der Kaskade, Spezifikität oder Reihenfolge der Quellen nicht angewendet wurden. Durchgestrichene Stile können aus demselben Ursprung mit Vorrang stammen, aber mit niedrigerer Spezifikität, oder mit übereinstimmendem Ursprung und Spezifikität, aber sie wurden früher in der Codebasis gefunden. Für jeden angewendeten Eigenschaftswert kann es mehrere Deklarationen geben, die aus vielen verschiedenen Quellen durchgestrichen sind. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit höherer Spezifizität hat, bedeutet das, dass es dem Wert an Ursprung oder Bedeutung mangelt.

Oft, wenn die Komplexität einer Website zunimmt, erhöht sich die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Verwaltung von Stylesheets über solche Codebasen hinweg. Kaskadenschichten sind explizite Spezifikationscontainer, die eine einfachere und bessere Kontrolle über die CSS-Deklarationen ermöglichen, die letztendlich angewendet werden, und ermöglichen es Webentwicklern, Abschnitte von CSS zu priorisieren, ohne gegen die Spezifizierung kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigsten Kaskadenkonzepte.

## Überprüfung des Kaskadenkonzepts

Das 'C' in CSS steht für "Cascading". Es ist die Methode, durch die Stile zusammenfallen. Der User-Agent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen sind. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4, **Kaskadenschichten**, eintauchen, was Sie hier lernen sollen:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektormatch für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind solche, die das [`!important`](/de/docs/Web/CSS/Reference/Values/important) Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb jeder der beiden Wichtigkeitseimer Regeln nach Autor-, Benutzer- oder User-Agent-Ursprung.
4. **Kaskadenschichten:** Sortieren Sie innerhalb jeder der sechs Ursprung-Wichtigkeitseimer nach Kaskadenschicht. Die Schichtreihenfolge für normale Deklarationen ist von der ersten erstellten Schicht zur letzten, gefolgt von ungeordneten normalen Stilen. Diese Ordnung wird für wichtige Stile umgekehrt, wobei ungeordnete wichtige Stile die niedrigste Priorität haben.
5. **Spezifikität:** Sortieren Sie für konkurrierende Stile in der Ursprungsschicht mit Vorrang die Deklarationen nach [Spezifikität](/de/docs/Web/CSS/Guides/Cascade/Specificity).
6. **Umfangsnähe:** Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang die gleiche Spezifikität haben, gewinnt der Eigenschaftswert innerhalb von Bereichsregeln mit der geringsten Anzahl von Sprüngen in der DOM-Hierarchie zur Bereichswurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang die gleiche Spezifikität und Umfangsnähe haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifikität.

Für jeden Schritt gelangen nur die Deklarationen, die "noch im Rennen" sind, dazu, im nächsten Schritt "anzutreten". Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind gegenstandslos.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types): User-Agent-Stylesheets, Benutzerstylesheets und Autorenstylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungseimer nach Ursprung und Wichtigkeit. Es gibt acht Stufen der Priorität: die sechs Ursprungseimer, Eigenschaften im Übergang und animierte Eigenschaften. Die Reihenfolge der Priorität reicht von normalen User-Agent-Stilen, die die niedrigste Priorität haben, bis zu den Stilen innerhalb aktuell angewendeter Animationen, hin zu wichtigen User-Agent-Stilen und dann zu übergangenen Stilen, die die höchste Priorität haben:

1. normale User-Agent-Stile
2. normale Benutzerstile
3. normale Autorenstile
4. animierte Stile
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige User-Agent-Stile
8. übergangene Stile

Der "User-Agent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf einem Element mit dem {{HTMLElement('style')}}-Element deklariert sind, sind Autorenstile. Abgesehen von animierten und übergangenen Stilen haben normale User-Agent-Stile die niedrigste Priorität; wichtige User-Agent-Stile die höchste.

### Ursprung und Spezifikität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige vom Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Wenn man Schichten vorerst ignoriert, wird der Wert vom Ursprung mit der höchsten Priorität angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifikität wird zwischen Selektoren aus verschiedenen Ursprüngen nie verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autorenstile angewendet, sodass nur User-Agent-Stile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/Reference/Properties/text-decoration) und [`color`](/de/docs/Web/CSS/Reference/Properties/color), die von Autorenstilen festgelegt sind, obwohl der Selektor im Autorenstylesheet eine Spezifikität von [`0-0-0`](/de/docs/Web/CSS/Guides/Cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass bei widersprüchlichen Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifikität im Ursprung, der keinen Vorrang hat.

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

Im User-Agent-Stylesheet zur Zeit des Schreibens ist der "konkurrierende" Selektor `a:any-link`, der ein Spezifikationsgewicht von `0-1-1` hat. Während dies größer ist als der `0-0-0`-Selektor im Autorenstylesheet, spielt es selbst dann keine Rolle, wenn der Selektor im aktuellen User-Agent anders ist: Die Spezifikationsgewichte von Ursprüngen von Autor und User-Agent werden nie verglichen. Erfahren Sie mehr darüber, [wie Spezifikationsgewicht berechnet wird](/de/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated).

Die Ursprungsvorrang hat immer Vorrang vor der Selektorspezifikität. Wenn eine Elementeigenschaft mit einer normalen Stildeklaration in mehreren Ursprüngen gestylt ist, wird das Autorenstylesheet immer die redundanten normalen Eigenschaften, die in einem Benutzer- oder User-Agent-Stylesheet deklariert sind, überschreiben. Wenn der Stil wichtig ist, gewinnt das User-Agent-Stylesheet immer über Autor- und Benutzerstile. Der Kaskaden-Ursprungs-Vorrang sorgt dafür, dass Spezifizierungskonflikte zwischen Ursprüngen nie passieren.

Eine letzte Anmerkung bevor wir fortfahren: Die Reihenfolge des Auftretens wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs die gleiche Spezifikität haben.

## Überblick über Kaskadenschichten

Wir verstehen nun "Kaskaden-Ursprungs-Vorrang", aber was ist "Kaskaden-Schicht-Vorrang"? Wir beantworten diese Frage, indem wir uns damit beschäftigen, was Kaskadenschichten sind, wie sie geordnet werden und wie Stile den Kaskadenschichten zugewiesen werden. Wir decken [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten ab. Lassen Sie uns zunächst darüber sprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangreihenfolge der Kaskadenschichten

Ähnlich wie wir sechs Ebenen der Priorität basierend auf Ursprung und Wichtigkeit haben, ermöglichen es Kaskadenschichten, eine Sub-Ursprungs-Ebene der Priorität innerhalb eines dieser Ursprünge zu erstellen.

Innerhalb jedes der sechs Ursprungseimer kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichtenerstellung](/de/docs/Web/CSS/Reference/At-rules/@layer) spielt eine große Rolle. Es ist die Reihenfolge der Erstellung, die die Vorrangreihenfolge innerhalb der Ursprünge festlegt.

In normalen Ursprungseimern werden die Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangreihenfolge geht von der zuerst erstellten Schicht zur letzten, gefolgt von ungeordneten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile umgekehrt. Alle ungeordneten wichtigen Stile werden in eine implizite Schicht zusammengefasst, die Vorrang über alle nicht-übergangenen normalen Stile hat. Die ungeordneten wichtigen Stile haben eine geringere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile innerhalb der früher deklarierten Schichten haben Vorrang vor den wichtigen Stilen in nachfolgenden deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials beschränken wir unsere Diskussion auf Autorenstile, aber bedenken Sie, dass Schichten auch in Benutzer- und User-Agent-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal, wie viele Stylesheets enthalten sind, all diese Stile fallen in einem einzigen Ursprung zusammen: dem \_Autoren_stylesheet.

Stile von vielen Quellen zusammenfallen zu lassen, besonders von Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Verschiedene Teams können unterschiedliche Methoden haben; ein Team könnte es für bewährte Praxis halten, die Spezifizität zu reduzieren, während ein anderes Team in jedem Selektor eine `id` enthalten möchte.

Spezifitätskonflikte können sich schnell eskalieren. Ein Webentwickler könnte eine "schnelle Lösung" erstellen, indem er eine `!important`-Flagge hinzufügt. Während dies sich wie eine einfache Lösung anfühlen mag, verschiebt es oft nur den Spezifikationskrieg von normalen auf wichtige Deklarationen.

In der gleichen Weise, wie Kaskadenursprünge ein Machtgleichgewicht zwischen Benutzer-, User-Agent- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzelnen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht in einem Ursprung ein Sub-Ursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Stilvorrang basierend auf der Schichtreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit anderen Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen es, ganze Stylesheets gegenüber anderen Stylesheets zu priorisieren, ohne sich um die Spezifizität zwischen diesen Sub-Ursprüngen kümmern zu müssen.

Der Schichtenvorrang schlägt immer die Selektorspezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifizität eines Selektors in einer unterlegenen Schicht ist irrelevant. Spezifizität spielt weiterhin eine Rolle bei konkurrierenden Eigenschaftswerten innerhalb einer Schicht, aber es gibt keine Spezifizitätsbedenken zwischen Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten erlauben die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten, auch eine anonyme.

Beispielsweise kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Autorenursprung hinzu und beseitigt jegliche Spezifizierungskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themes als separate verschachtelte Schicht definieren. Die Reihenfolge dieser verschachtelten Themenschichten kann in Abhängigkeit von Media-Queries definiert werden (siehe Abschnitt [Schichtenerstellung und Media-Queries](#schichtenerstellung_und_media-queries) weiter unten), wie z.B. Anzeigengröße oder [Orientation](/de/docs/Web/CSS/Reference/At-rules/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themes zu erstellen, die aufgrund von Spezifizität nicht in Konflikt stehen.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themes arbeitet.

Die Fähigkeit, verschachtelte Schichten zu erstellen, beseitigt auch das Problem von sich widersprechenden Schichtennamen. Wir werden dies im Abschnitt über [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementeigenschaften, Drittanbieterbibliotheken, Themes, Komponenten, Überschreibungen und andere Stylinganliegen zu repräsentieren – und können die Kaskaden der Schichten explizit neu ordnen, ohne Selektoren oder Spezifizität innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen Schichten zu lösen."
>
> —[CSS-Cascade-5-Spezifikation](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer)-Anweisung, die Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Blockregel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die Regel [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) mit dem Schlüsselwort `layer` oder der Funktion `layer()`, die den importierten Dateiinhalt in diese Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn kein Schichtname in der `@layer`-Anweisung oder `@import` mit `layer()` angegeben wird, wird eine neue anonyme (namenlose) Schicht erstellt.

> [!NOTE]
> Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht sind, oder "ungeordnete Stile", kaskadieren zusammen in einer finalen impliziten Schicht.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Schicht etwas genauer besprechen, bevor wir verschachtelte Schichten diskutieren.

### Die @layer-Anweisung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne Stile zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmen_des_vorrangs_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer)-CSS-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangreihenfolge festzulegen, wenn mehrere Kaskadenschichten vorhanden sind. Die folgende Regel deklariert drei Schichten in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Es ist oft sinnvoll, diese `@layer`-Deklaration (natürlich mit Schichtnamen, die für Ihre Website sinnvoll sind) als erste Codezeile zu haben, um vollständige Kontrolle über die Schichtenreihenfolge zu erhalten.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, lautet die Schichtreihenfolge `theme`, `layout`, und `utilities`. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, solange Schichten mit diesen Namen nicht bereits existieren, werden diese drei Schichten erstellt und am Ende der Liste der vorhandenen Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, werden durch die obige Anweisung nur zwei neue Schichten erstellt. Wenn beispielsweise `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten in diesem Fall wird `layout`, `theme`, und `utilities` sein.

### Die @layer-Blockregel für benannte und anonyme Schichten

Schichten können mit der `@layer`-Blockregel erstellt werden. Wenn eine `@layer`-Blockregel von einem Bezeichner und einem Block von Stilen gefolgt wird, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser Regel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor vorhandenen Schicht hinzugefügt. Wenn kein Name angegeben ist, während ein Block von Stilen mit `@layer` erstellt wird, werden die Stile der Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockregeln und eine `@layer`-Anweisung. Dieses CSS macht im beschriebenen Ablauf Folgendes:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt der bereits existierenden `layout`-Schicht zusätzliche Stile hinzu
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

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities`, und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Schicht aus ungeordneten Stilen, die im `body`-Stilblock enthalten sind. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht der ungeordneten Stile immer die letzte ist. Es gibt keine Möglichkeit, die Schichtreihenfolge nach der Erstellung zu ändern.

Wir haben einige Stile der benannten Schicht `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, dann erstellt das Angeben des Namens in einer `@layer`-Regel mit oder ohne Zuweisen von Stilen zur Schicht die Schicht und fügt sie ans Ende der Reihe der existierenden Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks den Stilen der zuvor vorhandenen Schicht hinzugefügt – das Angeben von Stilen in einem Block durch die Wiederverwendung eines bestehenden Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden durch das Zuweisen von Stilen zu einer Schicht erstellt, ohne die Schicht zu benennen. Stile können einer unbenannten Schicht nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Das erneute Verwenden von `@layer` ohne einen Schichtnamen erstellt zusätzliche unbenannte Schichten; es fügt keine Stile zu einer zuvor vorhandenen unbenannten Schicht hinzu.

Die `@layer`-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stilen einer bestehenden Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>` genannt, nur um sie zu erklären. Diese sind tatsächlich namenlose Schichten. Es gibt keine Möglichkeit, auf sie zu verweisen oder zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden zusammen in einer impliziten Schicht gefasst. Im obigen Beispiel kodiert setzten die erste Deklaration die `color: #333333`-Eigenschaft auf `body`. Diese wurde außerhalb jeder Schicht deklariert. Normale ungeordnete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die ungeordneten Stile eine geringere Spezifizität haben und zuerst in der Erscheinungsreihenfolge kommen. Das erklärt, warum selbst wenn das ungeordnete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese ungeordneten Stile enthält, Vorrang hat, als wäre es die zuletzt deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurden, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` war bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, die Reihenfolge von Schichten nach der Erstellung zu ändern.

Im folgenden Beispiel weisen wir Stile zwei Schichten zu, erstellen und benennen sie dabei. Da sie bereits existieren und beim ersten Gebrauch erstellt wurden, tut die Deklaration dieser Schichten in der letzten Zeile nichts mehr.

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

#### Schichtenerstellung und Media-Queries

Wenn Sie eine Schicht mit [Media](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Feature](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) Queries definieren und das Medium nicht übereinstimmt oder die Funktion nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie das Ändern der Größe Ihres Geräts oder Browsers die Schichtreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site`-Schicht nur bei breiten Browsern. Dann weisen wir Stile den `page`- und `site`-Schichten in dieser Reihenfolge zu.

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

In Breitbildschirmen wird die `site` Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` Vorrang über `page`, weil es später auf schmalen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Media-Query in `10em` oder `100em` zu ändern.

### Einbetten von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import)-Regel erlaubt es Benutzern, Stilregeln aus anderen Stylesheets direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss als erstes erscheinen, bevor Stile, aber sie kann von einer `@layer`-Regel vorangegangen sein, die eine oder mehrere Schichten erstellt, ohne ihnen Stile zuzuweisen. (Die `@import`-Anweisung kann auch von einer [`@charset`](/de/docs/Web/CSS/Reference/At-rules/@charset)-Regel vorangegangen sein).

Es ist möglich, ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht zu importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht:

```css
@import "components-lib.css" layer(components);
@import "dialog.css" layer(components.dialog);
@import "marketing.css" layer();
```

Wenn Sie mehr als eine CSS-Datei in eine einzige Schicht importieren möchten, können Sie dies mithilfe der folgenden Deklaration tun, die zwei separate Dateien in eine einzelne `social`-Schicht importiert:

```css
@import "comments.css" layer(social);
@import "sm-icons.css" layer(social);
```

Stile können importiert und Schichten unter bestimmten Bedingungen mit [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) und [Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) basierend auf spezifischen Bedingungen erstellt werden. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht nur, wenn der Browser `display: ruby` unterstützt und die Datei, die importiert wird, von der Breite des Bildschirms abhängig ist.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt keine Äquivalenz zur {{HTMLElement('link')}}-Methode, um Stylesheets zu verlinken. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` im Stylesheet nicht verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder einer anonymen Schicht. Jede Kaskadenschicht, auch eine anonyme, kann verschachtelte Schichten enthalten. In eine andere Schicht importierte Schichten werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile der Verschachtelung von Schichten

Die Möglichkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in einer Schicht importieren. Ebenso ermöglicht es die Verschachtelung, Drittanbieter-Stylesheets in eine Schicht zu importieren, ohne sich Sorgen machen zu müssen, ob dieses Stylesheet selbst Schichten hat. Da Schichten verschachtelt werden können, müssen Sie sich keine Gedanken über sich widersprechende Schichtennamen zwischen externen und internen Stylesheets machen.

### Erstellen von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit denselben Methoden erstellt werden, die für reguläre Schichten beschrieben werden. Zum Beispiel können sie mit der `@layer`-Regel gefolgt von den Namen einer oder mehrerer Schichten, die eine Punktnotation verwenden, erstellt werden. Mehrere Punkte und Schichtennamen bedeuten mehrere Verschachtelungsebenen.

Wenn Sie eine `@layer`-Blockregel innerhalb einer anderen `@layer`-Blockregel verschachteln, mit oder ohne Namen, wird die verschachtelte Blockregel zu einer verschachtelten Schicht. Ebenso werden beim Import eines Stylesheets mit einem `@import`-Befehl, der das Schlüsselwort `layer` oder `layer()`-Funktion enthält, die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese innerhalb dieser benannten oder anonymen Schicht zu verschachtelten Schichten.

Betrachten wir das folgende Beispiel:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

Im ersten Beispiel importieren wir `components-lib.css` in die `components`-Schicht. Falls diese Datei Schichten enthält, benannt oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, welche eine Unter-Schicht der `components`-Schicht ist. Die verschachtelte `components.narrow` Schicht wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in welchem Fall der Inhalt von `narrow-theme.css` zur verschachtelten Komponente `narrow` innerhalb von `components` angefügt wird. Zusätzliche benannte verschachtelte Schichten können der `components`-Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, sie können jedoch anschließend nicht mehr zugegriffen werden.

Betrachten wir ein weiteres Beispiel, in dem wir [importieren `layers1.css` in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import "layers1.css" layer(example);
```

Dies erstellt eine einzige Schicht, die `example` genannt wird und einige Deklarationen sowie fünf verschachtelte Schichten enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen des Vorrangs basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt ihre Vorrangreihenfolge. Daher ist die Reihenfolge der Schichten von großer Bedeutung. In der gleichen Weise, wie die Kaskade nach Herkunft und Bedeutung sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsschicht und Bedeutung.

### Vorrangsreihenfolge der regulären Kaskadenschichten

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden der impliziten Schicht der ungeordneten Stile hinzugefügt). Angenommen, die drei Dateien (`A.css`, `B.css`, und `C.css`) enthalten keine zusätzlichen Schichten. Die folgende Liste zeigt, wo Stile, die innerhalb und außerhalb dieser Dateien deklariert sind, sortiert werden, von der geringsten (1) bis zur höchsten (10) Vorrangreihenfolge.

1. Normale Stile aus `firstLayer` (`A.css`)
2. Normale Stile aus `secondLayer` (`B.css`)
3. Ungeordnete normale Stile (`C.css`)
4. Inline normale Stile
5. Animierende Stile
6. Ungeordnete wichtige Stile (`C.css`)
7. Wichtige Stile aus `secondLayer` (`B.css`)
8. Wichtige Stile aus `firstLayer` (`A.css`)
9. Inline wichtige Stile
10. Übergangene Stile

Normale in Schichten deklarierte Stile erhalten die niedrigste Priorität und werden nach der Reihenfolge der Schichtenerstellung sortiert. Normale Stile in der zuerst erstellten Schicht haben die niedrigste Priorität, und normale Stile in der zuletzt erstellten Schicht haben die höchste Priorität unter den Schichten. Mit anderen Worten, normale Stile, die in `firstLayer` deklariert sind, werden von allen nachfolgenden Stilen auf der Liste überschrieben, wenn es Konflikte gibt.

Als nächstes kommen alle Stile, die außerhalb von Schichten deklariert sind. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle konkurrierenden Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer eine höhere Priorität als diejenigen, die in einer Schicht deklariert sind (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden unter Verwendung des [`style` attributes](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale auf diese Weise deklarierte Stile haben Vorrang vor normalen Stilen, die in den ungeschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) gefunden werden.

Animierende Stile haben eine höhere Priorität als alle normalen Stile, einschließlich normaler Inline-Stile.

Wichtige Stile, dh Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor erwähnten Stilen in unserer Liste. Sie werden in der umgekehrten Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die nicht in einer Schicht deklariert sind, haben weniger Priorität als diejenigen, die innerhalb einer Schicht deklariert wurden. Wichtige Stile, die innerhalb von Schichten gefunden werden, sind auch in der Reihenfolge der Schichtenerstellung sortiert. Für wichtige Stile hat die letzte erstellte Schicht die niedrigste Priorität, und die zuerst erstellte Schicht hat die höchste Priorität unter den deklarierten Schichten.

Wichtige Inline-Stile haben erneut eine höhere Priorität als wichtige Stile, die anderswo deklariert sind.

Übertragende Stile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert übergeht, hat er Vorrang vor allen anderen Eigenschaftswertdeklarationen, selbst vor wichtigen Inline-Stilen, jedoch nur während der Übergangsphase.

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

In diesem Beispiel wurden zwei Schichten (`A` und `B`) initial mit einer `@layer`-Anweisung ohne Stile definiert. Die Schichtstile sind in zwei `@layer`-Blockregeln dargestellt, die nach der `h1`-CSS-Regel erscheinen, die außerhalb jeder Schicht deklariert ist.

Die Inline-Stile, die dem `h1`-Element mithilfe des `style`-Attributes hinzugefügt wurden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeordneten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeordneten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Der normale `text-decoration` und der wichtige `box-shadow` sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Für normale Nicht-Inline-Stile haben ungeordnete Stile Vorrang. Für wichtige Stile zählt jedoch auch die Schichtreihenfolge. Während ungeorderte normale Stile alle normalen Stile in einer Schicht überschreiben, ist bei wichtigen Stilen die Vorrangreihenfolge umgekehrt; ungeorderte wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert wurden, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Bei normalen Stilen hat später deklarierte Schicht Vorrang vor früher deklarierten Schichten. Bei wichtigen Stilen haben Schichten, die zuerst deklariert wurden, Vorrang vor zuletzt deklarierten Schichten. In diesem Fall hat die Schicht `A`, die zuerst deklariert wurde, Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Probieren Sie das aus. Welche Stile ändern sich dadurch und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile deklarierten wir Schichten ohne Zuweisung von Stilen mit `@layer` gefolgt von den Namen unserer Schichten, endend mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse die gleichen geblieben. Warum? Wir haben Stilregeln in benannten `@layer`-Blöcken in der Reihenfolge A dann B zugewiesen. Die zwei Schichten wurden in dieser ersten Zeile erstellt. Wenn sie nicht erstellt worden wären, hätten diese Regelblöcke sie in dieser Reihenfolge erstellen können.

Wir haben diese erste Zeile aus zwei Gründen aufgenommen: Erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil oft das Deklarieren der Schichtreihenfolge auf der ersten Linie die beste Praxis für Ihr Schichtenordnungsmanagement ist.

Zusammenfassend:

- Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Sobald erstellt, gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Der Vorrang von Schichten für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeordnete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Der Vorrang von Schichten für wichtige Stile ist umgekehrt, mit früher erstellten Schichten, die Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeordneten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang über alle normalen Stile, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang über alle anderen Stile, mit Ausnahme von Stilen, die übergehen.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was temporär ist).

### Vorrangreihenfolge der verschachtelten Kaskadenschichten

Die Kaskaden-Vorrangreihenfolge für verschachtelte Schichten ist ähnlich der von regulären Schichten, jedoch innerhalb eines Rahmens. Die Vorrangreihenfolge basiert auf der Reihenfolge der Erstellung von verschachtelten Schichten. Nicht-verschachtelte Stile innerhalb einer Schicht haben Vorrang vor verschachtelten normalen Stilen, wobei die Vorrangreihenfolge für wichtige Stile umgekehrt ist. Das Spezifizierungstgewicht zwischen verschachtelten Schichten spielt keine Rolle, allerdings gilt es für konkurrierende Stile innerhalb einer verschachtelten Schicht.

Die folgenden Beispiele erstellen und fügen Stile der `components`-Schicht, der gehefteten `components.narrow` verschachtelten Schicht und der `components.wide` verschachtelten Schicht hinzu:

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

{{EmbedLiveSample("Vorrangreihenfolge der verschachtelten Kaskadenschichten", "100%", "250")}}

Hier ist eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Weil ungeordnete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat`-Farbe.
- `border`: Da innerhalb einer Schicht nicht-verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt `red`-Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeordneten Stilen, mit wichtigen Stilen in früher deklarierten Schichten, die Vorrang vor später deklarierten Schichten haben. In diesem Beispiel lautet die Reihenfolge der erstellten verschachtelten Schichten `components.narrow` dann `components.wide`, wodurch wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass `purple`-Farbe siegt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten festgelegt, sodass das von der Deklarationsreihenfolge `20%`-Radius siegt.

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechanismen von CSS-Kaskadenschichten vertraut.
