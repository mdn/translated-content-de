---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

Diese Lektion soll Ihnen [Kaskadenschichten](/de/docs/Web/CSS/@layer) näherbringen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, erscheint diese Lektion möglicherweise weniger relevant und etwas akademischer als andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen der Kaskadenschichten zu kennen, falls Sie in Ihren Projekten auf sie stoßen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis der Kaskadenschichten und wie man ihre Macht nutzt, Ihnen helfen, Schmerzen beim Verwalten einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu vermeiden.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es widersprüchliche CSS-Selektoren und konkurrierende Spezifitäten gibt oder wenn Sie darüber nachdenken, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Behandlung von Konflikten</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie Kaskadenschichten funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklerwerkzeugen Ihres Browsers inspizieren. Das "Stile"-Panel des Werkzeugs zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte an, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Stile-Panel durchgestrichene Werte an, die mit dem ausgewählten Element übereinstimmten, aber aufgrund der Kaskade, Spezifität oder Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus demselben Ursprung mit Vorrang, aber mit geringerer Spezifität stammen oder mit übereinstimmendem Ursprung und Spezifität, aber sie wurden früher in der Codebasis gefunden. Wenn Sie einen Stil sehen, der durchgestrichen ist und einen Selektor mit höherer Spezifität hat, bedeutet dies, dass dem Wert an Ursprung oder Wichtigkeit fehlt.

Oftmals, je komplexer eine Website wird, desto mehr Stylesheets gibt es, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Wartung von Stylesheets in solchen Codebasen. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die CSS-Deklarationen ermöglichen, die letztendlich angewendet werden, und es Webentwicklern ermöglichen, CSS-Bereiche zu priorisieren, ohne Spezifität bekämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten einen kurzen Rückblick auf die wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading". Es ist die Methode, mit der sich Stile zusammenfügen. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4, **Kaskadenschichten**, eintauchen, was Sie hier lernen wollten:

1. **Relevanz:** Finden aller Deklarationsblöcke mit einem Selektor-Match für jedes Element.
2. **Wichtigkeit:** Sortieren von Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important) Flag gesetzt haben.
3. **Ursprung:** Sortieren von Regeln innerhalb jedes der beiden Wichtigkeitskategorien nach Autor-, Benutzer- oder Benutzeragentursprung.
4. **Kaskadenschichten:** Sortieren nach Kaskadenschicht innerhalb jeder der sechs Ursprungs-Wichtigkeitseimer. Die Schichtreihenfolge für normale Deklarationen erfolgt von der ersten erstellten Schicht zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgedreht, wobei nicht geschichtete wichtige Stile die niedrigste Vorrang haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungs-Schicht mit Vorrang, das Sortieren von Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Scoping-Nähe:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb von gegliederten Regeln mit der geringsten Anzahl an Sprüngen die DOM-Hierarchie hoch zur Skoorwurzel. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).
7. **Auftrittsreihenfolge:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität und Scoping-Nähe haben, gewinnt der Eigenschaftswert des zuletzt deklarierten Selektors mit der höchsten Spezifität.

Für jeden Schritt bewegen sich nur die "noch im Rennen" befindlichen Deklarationen zum nächsten Schritt, um "zu konkurrieren". Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Kaskadenursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzeragent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungsbehältern nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Vorrang: die sechs Ursprungsbehälter, Eigenschaften, die sich in Transition befinden, und Eigenschaften, die animiert werden. Die Reihenfolge der Vorrang geht von normalen Benutzeragentursstyles, die die niedrigste Vorrang haben, zu Stilen innerhalb der derzeit angewendeten Animationen, zu wichtigen Benutzeragenturstilen und dann zu Stilen in Transition, die die höchste Vorrang haben:

1. normale Benutzeragenturstile
2. normale Benutzerstile
3. normale Autorenstile
4. Stile, die animiert werden
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige Benutzeragenturstile
8. Stile, die in Transition sind

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Besucher der Website. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf einem Element mit dem {{HTMLElement('style')}}-Element deklariert sind, sind Autorenstile. Wenn man animierte und sich in Transition befindende Stile nicht berücksichtigt, haben normale Benutzeragenturstile die niedrigste Vorrang; wichtige Benutzeragenturstile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft wird die Deklaration, die "gewinnt", aus dem Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Schichten ignorierend, wird der Wert aus dem Ursprung mit der höchsten Vorrang angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, werden die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifität wird niemals zwischen Selektoren von verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autorenstile angewendet, sodass nur Benutzeragenturstile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color) durch Autorenstile festgelegt, auch wenn der Selektor im Autorenstylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass bei widersprüchlichen Stilen von verschiedenen Ursprüngen die Regeln vom Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität im Nicht-Vorrang-Ursprung.

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

Der "konkurrierende" Selektor im Benutzeragenturstil bei der Erstellung dieses Textes ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Während dies größer ist als der `0-0-0`-Selektor im Autorenstylesheet, spielt es keine Rolle, selbst wenn der Selektor in Ihrem aktuellen Benutzeragent anders ist: Die Spezifitätsgewichte von Autoren- und Benutzeragenturzspzüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektorspezifität. Wenn eine Eigenschaft eines Elements in mehreren Ursprüngen mit einer normalen Stil-Deklaration gestylt wurde, wird das Autorenstyleblatt immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder Benutzeragenturstilblatt deklariert wurden. Wenn der Stil wichtig ist, wird das Benutzeragenturstilblatt stets über Autoren- und Benutzerstile gewinnen. Ursprungsvorrang in der Kaskade stellt sicher, dass zwischen Ursprüngen keine Spezifitätskonflikte auftreten.

Noch eine letzte Bemerkung, bevor wir fortfahren: Die Auftrittsreihenfolge wird erst dann relevant, wenn konkurrierende Deklarationen im Ursprungs-Vorrang die gleiche Spezifität haben.

## Überblick über Kaskadenschichten

Nun verstehen wir "Ursprungsvorrang in der Kaskade", aber was ist "Vorrang in der Kaskadenschicht"? Wir werden diese Frage beantworten, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie angeordnet sind und wie Stile Kaskadenschichten zugewiesen werden. Wir werden [reguläre Schichten](#erstellung_von_kaskadenschichten), [geschachtelte Schichten](#überblick_über_geschachtelte_kaskadenschichten) und anonyme Schichten abdecken. Lassen Sie uns zunächst diskutieren, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangreihenfolge der Kaskadenschichten

Ähnlich wie bei den sechs Prioritätsstufen basierend auf Ursprung und Wichtigkeit ermöglichen Kaskadenschichten die Erstellung einer Unterebene von Prioritäten innerhalb eines dieser Ursprünge.

Innerhalb jeder der sechs Ursprungsbehälter kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) spielt eine große Rolle. Sie ist die Erstellungsreihenfolge, die die Vorrangreihenfolge unter den Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungsbehältern werden Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangreihenfolge reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile fließen in eine implizite Schicht mit Vorrang über alle nicht in Transition befindlichen normalen Stile. Die nicht geschichteten wichtigen Stile haben niedrigere Vorrang als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang vor wichtigen Stilen in anschließend deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber bedenken Sie, dass Schichten auch in Benutzer- und Benutzeragenturstilblättern existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Egal wie viele Stylesheets eingeschlossen sind, alle diese Stile fließen in einem einzigen Ursprung zusammen: das _Autoren_-Stylesheet.

Da Stile aus vielen Quellen zusammenfließen, besonders von Teams, die nicht zusammenarbeiten, können Probleme entstehen. Verschiedene Teams können unterschiedliche Methoden haben; eines kann es als Best Practice haben, die Spezifität zu reduzieren, während ein anderes es als Standard betrachtet, eine `id` in jeden Selektor einzuschließen.

Spezifitätskonflikte können sich schnell zuspitzen. Ein Webentwickler kann eine "schnelle Lösung" schaffen, indem er ein `!important`-Flag hinzufügt. Während dies wie eine einfache Lösung erscheint, verlagert es oft nur den Spezifitätskampf von normalen zu wichtigen Deklarationen.

In der gleichen Weise, wie Kaskadenursprünge ein Gleichgewicht der Macht zwischen Benutzer-, Benutzeragent- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, die Anliegen innerhalb eines einzigen Ursprungs zu organisieren und auszubalancieren, als ob jede Schicht in einem Ursprung ein Teilursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Stilvorrang basierend auf der Schichtreihenfolge.

Innerhalb einer Schicht fließen Regeln zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen es, ganze Stylesheets gegenüber anderen Stylesheets zu priorisieren, ohne sich um Spezifität zwischen diesen Teilursprüngen kümmern zu müssen.

Schichtvorrang schlägt immer Selektorspezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit geringerem Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität ist immer noch wichtig für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifitätsprobleme zwischen Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die geschachtelte Kaskadenschichten lösen können

Kaskadenschichten erlauben die Erstellung von geschachtelten Schichten. Jede Kaskadenschicht kann geschachtelte Schichten enthalten.

Beispielsweise kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Ursprung des Autors hinzu und beseitigt Spezifitätskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als separate geschachtelte Schicht. Die Reihenfolge dieser geschachtelten Themaschichten kann basierend auf Medienabfragen definiert werden (siehe den Abschnitt [Schichterstellung und Medienabfragen](#schichterstellung_und_medienabfragen) weiter unten), wie zum Beispiel die Bildschirmgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese geschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht basierend auf Spezifität in Konflikt geraten.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeitet.

Die Möglichkeit, geschachtelte Schichten zu erstellen, beseitigt auch die Sorge, dass es zu Konflikten mit ähnlichen Schichtnamen kommt. Wir werden dies im Abschnitt zu [geschachtelten Schichten](#überblick_über_geschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Drittanbieterbibliotheken, Themen, Komponenten, Überschreibungen und andere Stilprobleme zu vertreten — und können die Kaskade von Schichten auf eine explizite Weise neu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu verändern oder sich auf die Auftretensreihenfolge zu verlassen, um Konflikte zwischen Schichten zu lösen."
>
> —[Cascading and Inheritance specification](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellung von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer) Anweisung bei Regel, die Schichten mit `@layer` und darauf folgende Schichtnamen deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer` Blockregel, bei der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import) Regel mit dem `layer`-Schlüsselwort oder der Funktion `layer()`, die den Inhalt der importierten Datei dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn kein Schichtname in der `@layer` bei Regel oder `@import` mit `layer()` angegeben wird, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Reihenfolge des Vorrangs der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht liegen oder "nicht geschichtete Stile", fließen in eine endgültige implizite Etikettierung.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Schicht näher erläutern, bevor wir über geschachtelte Schichten sprechen.

### Die @layer-Anweisung bei Regel für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge bestimmt, in der die Schichten in Ihrem CSS erscheinen. Schichten nur mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten zu deklarieren, ohne Stile zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmung_der_vorrangigkeit_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die CSS bei Regel [`@layer`](/de/docs/Web/CSS/@layer) wird verwendet, um eine Kaskadenschicht zu deklarieren und die Reihenfolge des Vorrangs zu definieren, wenn es mehrere Kaskadenschichten gibt. Die folgende bei Regel deklariert drei Schichten in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie werden oft wollen, dass Ihre erste Zeile CSS diese `@layer`-Deklaration mit Schichtnamen ist, die für Ihre Website sinnvoll sind, um die volle Kontrolle über die Schichtordnung zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, ist die Schichtreihenfolge `theme`, `layout` und `utilities`. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, wird, solange Schichten mit diesen Namen noch nicht existieren, diese drei Schichten erstellt und am Ende der Liste der vorhandenen Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, erstellt die obige Anweisung nur zwei neue Schichten. Wenn beispielsweise `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer Blockregel für benannte und anonyme Schichten

Schichten können mit der Blockregel `@layer` erstellt werden. Wenn einer `@layer`-Regel ein Bezeichner und ein Block von Stilen folgt, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser Regel werden zu den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor existierenden Schicht hinzugefügt. Wenn beim Erstellen eines Stilblocks mittels `@layer` kein Name angegeben wird, werden die Stile in der Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier @layer Blockregeln und eine @layer Anweisungsregel verwendet. Dieser CSS tut das Folgende in der genannten Reihenfolge:

1. Erstellt eine benannte `layout` Schicht.
2. Erstellt eine unbenannte, anonyme Schicht.
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert.
4. Fügt zusätzliche Stile zur bereits existierenden `layout` Schicht hinzu.
5. Erstellt eine zweite unbenannte, anonyme Schicht.

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

In dem obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge – mit einer sechsten, impliziten Schicht von nicht geschichteten Stilen, die im `body`-Stilblock enthalten sind. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt wurden, wobei die implizite Schicht von nicht geschichteten Stilen immer die letzte ist. Es gibt keine Möglichkeit, die Schichtreihenfolge nach ihrer Erstellung zu ändern.

Wir haben einige Stile der `layout` Schicht zugewiesen. Wenn eine benannte Schicht noch nicht existiert, wird durch Angabe des Namens in einer `@layer`-Regel, mit oder ohne Zuweisung von Stilen an die Schicht, die Schicht erstellt; dies fügt die Schicht am Ende der Liste der vorhandenen Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks den Stilen der zuvor existierenden Schicht hinzugefügt – die Angabe von Stilen in einem Block durch Wiederverwendung eines vorhandenen Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stile zu einer Schicht hinzugefügt werden, ohne die Schicht zu benennen. Stile können nur bei ihrer Erstellung einer unbenannten Schicht hinzugefügt werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne Schichtnamen erstellt zusätzliche unbenannte Schichten; sie fügt den zuvor existierenden unbenannten Schichten keine Stile hinzu.

Die `@layer`-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stile zu einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir nannten die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>`; dies dient nur dazu, dass wir sie erklären können. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden in einer impliziten Schicht zusammengefügt. Im obigen Beispiel setzte die erste Deklaration die Eigenschaft `color: #333333` auf `body`. Dies wurde außerhalb einer Schicht deklariert. Normale nicht geschichtete Deklarationen haben Vorrang über normale geschichtete Deklarationen, selbst wenn die nicht geschichteten Stile eine geringere Spezifität haben und zuerst in der Reihenfolge des Erscheinens kommen. Dies erklärt, warum die nicht geschichtete CSS, obwohl sie zuerst im Codeblock deklariert wurde, die implizite Schicht dieser nicht geschichteten Stile Vorrang hat, als ob sie die zuletzt deklarierte Schicht wäre.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurden, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Derzeit gibt es keine Möglichkeit, Schichten neu zu ordnen, nachdem sie deklariert wurden.

Im folgenden Beispiel weisen wir zwei Schichten Stile zu, indem wir sie im Prozess erstellen und benennen. Da sie bereits existieren, da sie bei der ersten Verwendung erstellt wurden, macht eine erneute Deklaration in der letzten Zeile nichts.

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

Versuchen Sie, die letzte Zeile `@layer site, page;` zu verschieben, um die erste Zeile zu machen. Was passiert?

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht mit definierten [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)- oder [Feature-](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)Abfragen definieren und die Medien übereinstimmen nicht oder das Feature wird nicht unterstützt, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie sich die Schichtreihenfolge ändern kann, abhängig von der Größe Ihres Geräts oder Browsers. In diesem Beispiel erstellen wir die `site` Schicht nur in breiteren Browsern. Wir weisen dann Stile zu den Schichten `page` und `site` in dieser Reihenfolge zu.

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

In Breitbildschirmen wird die `site` Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Andernfalls hat `site` Vorrang vor `page`, weil es später auf schmalen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage zu `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann aber von einer `@layer`-Regel, die eine oder mehrere Schichten ohne Zuweisung von Stilen erstellt, gefolgt werden. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine geschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine geschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht, entsprechend.

```css
@import "components-lib.css" layer(components);
@import "dialog.css" layer(components.dialog);
@import "marketing.css" layer();
```

Sie können mehr als eine CSS-Datei in eine einzelne Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social` Schicht:

```css
@import "comments.css" layer(social);
@import "sm-icons.css" layer(social);
```

Sie können Stile importieren und Schichten basierend auf bestimmten Bedingungen erstellen, indem Sie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die zu importierende Datei ist von der Bildschirmbreite abhängig.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode zum Verknüpfen von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` innerhalb des Stylesheets nicht verwenden können.

## Überblick über geschachtelte Kaskadenschichten

Geschachtelte Schichten sind Schichten innerhalb einer benannten oder einer anonymen Schicht. Jede Kaskadenschicht, selbst eine anonyme, kann geschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu geschachtelten Schichten innerhalb dieser Schicht.

### Vorteile des Verschachtelns von Schichten

Die Fähigkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen zu machen, ob andere Teams sie in eine Schicht importieren werden. Ebenso ermöglicht das Verschachteln, Drittanbieter-Stilblätter in eine Schicht zu importieren, ohne sich Sorgen machen zu müssen, ob dieses Stilblatt selbst Schichten enthält. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen machen, ob es zu Konflikten mit ähnlichen Schichtnamen zwischen externen und internen Stilblättern kommt.

### Erstellung verschachtelter Kaskadenschichten

Verschachtelte Schichten können mit denselben Methoden erstellt werden wie reguläre Schichten. Beispielsweise können sie mithilfe der `@layer`-Regel, gefolgt von den Namen einer oder mehrerer Schichten, unter Verwendung der Punktnotation erstellt werden. Mehrere Punkte und Schichtnamen bedeuten mehrere Verschachtelungen.

Wenn Sie einen Block `@layer`-Regel in einem anderen Block `@layer`-Regel verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer geschachtelten Schicht. Ebenso werden, wenn ein Stylesheet mit einer `@import`-Erklärung importiert wird, die das `layer`-Schlüsselwort oder die Funktion `layer()` enthält, die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten zu geschachtelten Schichten innerhalb dieser anonymen oder benannten Schicht.

Betrachten wir das folgende Beispiel:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components` Schicht. Wenn diese Datei Schichten enthält, benannt oder nicht, werden diese Schichten zu geschachtelten Schichten innerhalb der `components` Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unterschicht der `components`-Schicht ist. Die geschachtelte `components.narrow`-Schicht wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall werden die Inhalte von `narrow-theme.css` an die geschachtelte `components.narrow`-Schicht angehängt. Weitere geschachtelte benannte Schichten können der `components`-Schicht mithilfe des Musters `components.<SchichtName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können anschließend nicht zugegriffen werden.

Sehen wir uns ein weiteres Beispiel an, bei dem wir [`layers1.css` in eine benannte Schicht importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit folgender Anweisung:

```css
@import "layers1.css" layer(example);
```

Dies erstellt eine einzige Schicht mit dem Namen `example`, die einige Deklarationen und fünf geschachtelte Schichten enthält – `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Stile zu einer benannten geschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung der Vorrangigkeit basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt ihre Vorrangreihenfolge. Daher ist die Reihenfolge der Schichten sehr wichtig. In derselben Weise, wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsschicht und Wichtigkeit.

### Vorrangreihenfolge regulärer Kaskadenschichten

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden der impliziten Schicht der nicht geschichteten Stile hinzugefügt). Angenommen, die drei Dateien (`A.css`, `B.css` und `C.css`) enthalten keine zusätzlichen Schichten. Die folgende Liste zeigt, wo Stile erklärt in und außerhalb dieser Dateien von der niedrigsten (1) Vorrang bis zur höchsten (10) sortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. nicht geschichtete normale Stile (`C.css`)
4. inline normale Stile
5. animierende Stile
6. nicht geschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. inline wichtige Stile
10. sich ändernde Stile

Normale Stile, die innerhalb von Schichten deklariert sind, erhalten die niedrigste Priorität und werden in der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben die niedrigste Vorrang, und normale Stile in der zuletzt erstellten Schicht haben die höchste Vorrang unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert wurden, werden durch alle nachfolgenden Stylings auf der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb von Schichten deklariert sind. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle widersprüchlichen Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer mehr Vorrang als Stile, die _in_ einer Schicht deklariert sind (außer bei wichtigen Stilen).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang über normale Stile, die in nicht geschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) gefunden werden.

Animierende Stile haben mehr Vorrang als alle normalen Stile, einschließlich inline normaler Stile.

Wichtige Stile, das sind Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang über alle vorher erwähnten Stile in unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Stile sortiert. Wichtige Stile, die außerhalb einer Schicht deklariert sind, haben geringeren Vorrang als diejenigen, die innerhalb einer Schicht deklariert sind. Wichtige Stile, die innerhalb von Schichten gefunden werden, werden ebenfalls in der Reihenfolge der Schichterstellung sortiert. Bei wichtigen Stilen hat die zuletzt erstellte Schicht die niedrigste Vorrang, und die zuerst erstellte Schicht hat die höchste Vorrang unter den deklarierten Schichten.

Inline wichtige Stile haben wiederum mehr Vorrang als wichtige Stile, die anderswo deklariert wurden.

Sich ändernde Stile haben den höchsten Vorrang. Wenn ein normaler Eigenschaftwert sich ändert, hat er mehr Vorrang gegenüber allen anderen Eigenschaftswertdeklarationen, sogar inline wichtigen Stilen; jedoch nur während des Änderungsprozesses.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mithilfe einer `@layer`-Anweisung bei Regel ohne irgendwelche Stile definiert. Die Schichtstile werden in zwei `@layer`-Blockregeln festgelegt, die nach der `h1` CSS-Regel erscheinen, die außerhalb einer Schicht deklariert wurde.

Die Inline-Stile, die auf dem `h1`-Element unter Verwendung des `style`-Attributs hinzugefügt werden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen und wichtigen Autorenstile. Es gibt keinen Weg für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normale `text-decoration` und die wichtige `box-shadow` sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Für normale Nicht-Inline-Stile haben nicht geschichtete Stile Vorrang. Für wichtige Stile spielt auch die Schichtreihenfolge eine Rolle. Während normale nicht geschichtete Stile alle normalen Stile in einer Schicht überschreiben, ist es bei wichtigen Stilen umgekehrt; nicht geschichtete wichtige Stile haben niedrigeren Vorrang als geschichtete Stile.

Die beiden in den Schichten deklarierten Stile sind `font-style` mit normaler Wichtigkeit und `font-weight` mit einem `!important`-Flag. Bei normalen Stilen überschreibt die zuletzt deklarierte Schicht `B` die Stile in der früher deklarierten Schicht `A`. Bei normalen Stilen haben spätere Schichten Vorrang vor früheren Schichten. Die Vorrangordnung ist für wichtige Stile umgekehrt. Für die wichtigen `font-weight` Deklarationen hat die Schicht `A`, die zuerst deklariert wurde, Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Versuchen Sie das. Welche Stile ändern sich dadurch und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten ohne Zuweisung von Stilen mittels `@layer`, gefolgt von den Namen unserer Schichten, deklariert, endend mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich gewesen. Warum? Wir haben Stilregeln in benannten `@layer`-Blöcken in der Reihenfolge A, dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Hätten sie dies nicht getan, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen hinzugefügt: erstens, damit Sie die Zeile leicht ändern und die Reihenfolge umkehren können, und zweitens, weil Sie oft die beste Praxis finden werden, die Reihenfolge der Schicht im Voraus zu deklarieren, für die Verwaltung Ihrer Schichtordnung.

Zusammenfassend:

- Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Nach der Erstellung gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Schichtvorrang für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Nicht geschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Schichtvorrang für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor nicht geschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme der sich ändernden Stile.
- Es gibt keinen Weg für Autorenstile, wichtige Inline-Stile zu überschreiben (außer durch Übergänge, die vorübergehend sind).

### Vorrangreihenfolge verschachtelter Kaskadenschichten

Die Vorrangreihenfolge für verschachtelte Schichten ist ähnlich wie die für reguläre Schichten, jedoch innerhalb der Schicht. Die Vorrangreihenfolge basiert auf der Reihenfolge der Verschachtelungsschichterstellung. Nicht verschachtelte Stile in einer Schicht haben Vorrang gegenüber normalen verschachtelten Stilen, mit umgekehrter Vorrangreihenfolge für wichtige Stile. Die Spezifitätsgewichte zwischen verschachtelten Schichten spielen keine Rolle, obwohl sie für sich widersprechende Stile innerhalb einer verschachtelten Schicht von Bedeutung sind.

Der folgende Code erstellt und fügt der `components`-Schicht, der geschachtelten `components.narrow`-Schicht und der geschachtelten `components.wide`-Schicht Stile hinzu:

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

- `background-color`: Da nicht geschichtete normale Stile mehr Vorrang haben als geschichtete normale Stile, gewinnt die `wheat` Farbe.
- `border`: Da in einer Schicht nicht verschachtelte Stile mehr Vorrang haben als normale verschachtelte Stile, gewinnt die `red` Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile mehr Vorrang als nicht geschichtete Stile, wobei wichtige Stile in früher deklarierten Schichten mehr Vorrang haben als in später deklarierten Schichten. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichtenerstellung `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` mehr Vorrang haben als wichtige Stile in `components.wide`, was bedeutet, dass die `purple` Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten eingestellt, daher gewinnt auch hier der nach Deklarationsreihenfolge eingestellte `20%` Radius.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind nun mit den grundlegenden Mechanismen der CSS-Kaskadenschichten vertraut.
