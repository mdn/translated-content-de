---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: d805adc1604ad27fbee00598dc81bcdfe5635bd3
---

Diese Lektion soll Ihnen [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer) näherbringen, eine fortgeschrittene Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und der [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, kann es zunächst weniger relevant und etwas akademischer erscheinen als andere Teile des Kurses, sich mit dieser Lektion zu beschäftigen. Dennoch ist es hilfreich, die Grundlagen der Kaskadenschichten zu kennen, falls Sie in Ihren Projekten darauf stoßen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis für Kaskadenschichten und deren Nutzung Ihnen helfen, viele Schwierigkeiten bei der Verwaltung einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu vermeiden.

Kaskadenschichten sind am relevantesten, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es zu widersprüchlichen CSS-Selektoren und konkurrierenden Spezifitäten kommt, oder wenn Sie in Erwägung ziehen, {{cssxref("important", "!important")}} zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen für die Stilgestaltung</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
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

Für jede auf ein Element angewendete CSS-Eigenschaft kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwickler-Tools Ihres Browsers inspizieren. Das "Styles"-Panel des Tools zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte zusammen mit dem passenden Selektor und der CSS-Quelldatei an. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel durchgestrichene Werte an, die dem ausgewählten Element entsprachen, jedoch aufgrund der Kaskade, Spezifität oder Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus demselben Ursprung mit Vorrang, aber mit niedrigerer Spezifität stammen, oder mit übereinstimmendem Ursprung und Spezifität, jedoch weiter oben in der Codebasis gefunden werden. Für jeden angewendeten Eigenschaftswert können mehrere Deklarationen aus vielen verschiedenen Quellen durchgestrichen sein. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit höherer Spezifität hat, bedeutet das, dass dem Wert der Ursprung oder die Wichtigkeit fehlt.

Wenn die Komplexität einer Seite zunimmt, erhöht sich häufig auch die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Pflege von Stylesheets über solche Codebasen hinweg. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten und es Webentwicklern ermöglichen, Abschnitte von CSS zu priorisieren, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigen Konzepte der Kaskade.

## Übersicht über das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading". Es ist die Methode, durch die Stile zusammenkaskadieren. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann auf Schritt 4, **Kaskadenschichten**, näher eingehen, der das Thema dieser Lektion ist:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem passenden Selektor für jedes Element.
2. **Wichtigkeit:** Sortieren Sie die Regeln anhand der normalen oder wichtigen Bedeutung. Wichtige Stile sind diejenigen, die das {{cssxref("important", "!important")}}-Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb jedes der beiden Wichtigkeitseimer die Regeln nach Autor-, Benutzer- oder Benutzeragentenursprung.
4. **Kaskadenschichten:** Sortieren Sie innerhalb jedes der sechs Ursprung-Bedeutungseimer anhand der Kaskadenschicht. Die Schichtenreihenfolge für normale Deklarationen geht von der zuerst erstellten Schicht bis zur letzten, gefolgt von ungelagerten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei ungelagerte wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Bei konkurrierenden Stilen in der Ursprungsmischung mit Vorrang sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity).
6. **Näherung zur Einbettung von Bereichen**: Wenn zwei Selektoren in der Ursprungsmischung mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb der umschlossenen Regeln, der die geringste Anzahl an Sprüngen in der DOM-Hierarchie zur Einbettungswurzel hat. Siehe [wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Erscheinungsreihenfolge:** Wenn zwei Selektoren in der Ursprungsmischung mit Vorrang dieselbe Spezifität und Bereichsnähe haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt rücken nur die Deklarationen vor, die "noch im Rennen" sind, um im nächsten Schritt "mitzukämpfen". Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei Arten von [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types): Benutzeragenten-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungseimer nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Priorität: die sechs Ursprungseimer, Eigenschaften, die sich im Übergang befinden, und Eigenschaften, die animiert werden. Die Prioritätsreihenfolge reicht von normalen Benutzeragentenstilen, die die niedrigste Priorität haben, zu Stilen innerhalb aktuell angewendeter Animationen, zu wichtigen Benutzeragentenstilen und dann zu Stilen, die im Übergang sind, die die höchste Priorität haben:

1. normale Benutzeragentenstile
2. normale Benutzerstile
3. normale Autorenstile
4. Stile, die animiert werden
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige Benutzeragentenstile
8. Stile, die im Übergang sind

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Website-Besucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf ein Element mit dem {{HTMLElement('style')}}-Element deklariert werden, sind Autorenstile. Abgesehen von animierten und im Übergang befindlichen Stilen haben normale Benutzeragentenstile die niedrigste Priorität; wichtige Benutzeragentenstile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Wenn wir die Schichten für den Moment ignorieren, wird der Wert aus dem Ursprung mit der höchsten Priorität angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, werden die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine angewendeten Autorenstile, daher werden nur Benutzeragentenstile angewendet (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat {{cssxref("text-decoration")}} und {{cssxref("color")}} durch Autorenstile gesetzt, obwohl der Selektor im Autorenstylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/Guides/Cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", liegt darin, dass, wenn es zu widersprüchlichen Stilen aus verschiedenen Ursprüngen kommt, die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität in dem Ursprung, der keinen Vorrang hat.

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

Der "konkurrierende" Selektor im Benutzeragenten-Stylesheet zum Zeitpunkt dieses Schreibens ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Auch wenn dies höher ist als der `0-0-0` Selektor im Autoren-Stylesheet, spielt es keine Rolle: Die Spezifitätsgewichte von Autoren- und Benutzeragentenursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektorspezifität. Wenn eine Elementeneigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt ist, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder Benutzeragent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, gewinnt das Benutzeragenten-Stylesheet immer gegenüber Autoren- und Benutzerstilen. Der Ursprungsvorrang der Kaskade stellt sicher, dass Spezifitätskonflikte zwischen Ursprüngen nie stattfinden.

Eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Erscheinens wird nur relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs dieselbe Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen jetzt den "Ursprungsvorrang der Kaskade", aber was ist "Kaskadenschichtenvorrang"? Wir werden diese Frage beantworten, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie geordnet sind und wie Stile Kaskadenschichten zugewiesen werden. Wir behandeln [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten. Lassen Sie uns zuerst darüber sprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangreihenfolge von Kaskadenschichten

Ähnlich wie wir sechs Prioritätsebenen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten, eine Ebene unterhalb des Ursprungsniveaus innerhalb eines Ursprungs zu schaffen.

Innerhalb jedes der sechs Ursprungseimer kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichtenerstellung](/de/docs/Web/CSS/Reference/At-rules/@layer) ist von großer Bedeutung. Es ist die Reihenfolge der Erstellung, die die Vorrangsreihenfolge zwischen den Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungseimern werden die Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangsreihenfolge reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von ungelagerten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile umgekehrt. Alle ungelagerten wichtigen Stile kaskadieren zusammen in einer impliziten Schicht, die Vorrang vor allen sich nicht im Übergang befindenden normalen Stilen hat. Die ungelagerten wichtigen Stile haben eine geringere Priorität als alle wichtigen Schichten in Schichten. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang vor wichtigen Stilen in nachträglichen deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber beachten Sie, dass Schichten auch in Benutzer- und Benutzeragenten-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal, wie viele Stylesheets eingebunden sind, all diese Stile kaskadieren zusammen in einem einzigen Ursprung: dem _Autoren_-Stylesheet.

Stile aus vielen Quellen zusammen kaskadieren zu lassen, insbesondere von Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Verschiedene Teams haben möglicherweise unterschiedliche Vorgehensweisen; eines hat vielleicht eine Best Practice, die Spezifität zu reduzieren, während ein anderes Standardmäßig `id` in jedem Selektor einfügt.

Spezifitätskonflikte können schnell eskalieren. Ein Webentwickler kann eine "schnelle Lösung" schaffen, indem er ein `!important`-Flag hinzufügt. Auch wenn dies wie eine einfache Lösung erscheinen mag, wird der Spezifitätskrieg oft nur von normalen zu wichtigen Deklarationen verschoben.

Auf die gleiche Weise, wie Kaskadenursprünge ein Gleichgewicht zwischen Benutzer-, Benutzeragenten- und Autorenstilen schaffen, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht innerhalb eines Ursprungs ein Sub-Ursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit der Stil-Priorität basierend auf der Schichtreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich über die Spezifität zwischen diesen Sub-Ursprüngen Sorgen machen zu müssen.

Schichtenvorrang schlägt immer Selektorspezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität ist immer noch wichtig für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifitätsprobleme zwischen Schichten, da nur die Schicht mit der höchsten Priorität für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten ermöglichen die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht, sogar eine anonyme, kann verschachtelte Schichten enthalten.

Beispielsweise kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Autorenursprung hinzu, wodurch Konflikte in der Spezifität mit anderen Autorenstilen beseitigt werden. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren und jede als separate verschachtelte Schicht anlegen. Die Reihenfolge dieser verschachtelten Themaschichten kann basierend auf Medienabfragen (siehe den Abschnitt [Schichtenerstellung und Medienabfragen](#schichtenerstellung_und_medienabfragen) unten) definiert werden, wie z.B. Viewport-Größe oder [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht basierend auf Spezifität in Konflikt geraten.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieterwidgets und Themen arbeitet.

Die Möglichkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge, dass Schichtnamen in Konflikt geraten. Wir werden dies im Abschnitt [verschachtelte Schicht](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Drittanbieterbibliotheken, Themen, Komponenten, Überschreibungen und andere Stylingaspekte darzustellen – und sind in der Lage, den Kaskadenfluss der Schichten auf eine explizite Weise umzuordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte über Schichten hinweg zu lösen."
>
> —[Kaskadierungs- und Vererbungsspezifikation](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können auf eine der folgenden Weisen erstellt werden:

- Die {{cssxref("@layer")}}-Anweisungsregel, die Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die Blockregel `@layer`, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die {{cssxref("@import")}}-Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn im `@layer`-At-Regel oder `@import` mit `layer()` kein Schichtname angegeben ist, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die sich nicht in einer Schicht befinden, oder "ungelagerte Stile", kaskadieren zusammen in eine abschließende implizite Schicht.

Schauen wir uns die drei Methoden zur Erstellung einer Schicht genauer an, bevor wir verschachtelte Schichten besprechen.

### Die @layer-Anweisungsregel für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge bestimmt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne Stile zuzuweisen, ist eine Möglichkeit, die [Vorrangsreihenfolge der Schichten](#bestimmen_des_vorrangs_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die {{cssxref("@layer")}}-CSS-Anweisungsregel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangsreihenfolge festzulegen, wenn es mehrere Kaskadenschichten gibt. Die folgende Anweisung erklärt drei Schichten in der aufgeführten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie möchten oft, dass Ihre erste Zeile im CSS diese `@layer`-Deklaration ist (mit Schichtnamen, die für Ihre Website sinnvoll sind), um die volle Kontrolle über die Schichtreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile im CSS einer Website ist, wird die Schichtreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, und wenn Schichten mit diesen Namen nicht bereits existieren, werden diese drei Schichten erstellt und am Ende der Liste der bestehenden Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, erstellt die obige Anweisung nur zwei neue Schichten. Zum Beispiel, wenn `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer-Blockregel für benannte und anonyme Schichten

Schichten können durch die Blockregel `@layer` erstellt werden. Wenn eine `@layer`-Regel von einem Bezeichner und einem Stilblock gefolgt wird, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser Regel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der bereits bestehenden Schicht hinzugefügt. Wenn beim Erstellen eines Stilblocks mit `@layer` kein Name angegeben wird, werden die Stile der Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockregeln und eine `@layer`-Anweisungsregel verwendet. Dieses CSS macht in der aufgelisteten Reihenfolge Folgendes:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Erklärt eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, weil `layout` bereits existiert
4. Fügt zusätzliche Stile zur bereits bestehenden `layout`-Schicht hinzu
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

In dem oben genannten CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge – mit einer sechsten impliziten Schicht ungedeckter Stile, die im `body`-Stilblock enthalten sind. Die Reihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht ungedeckter Stile immer die letzte ist. Es gibt keine Möglichkeit, die Reihenfolge der Schichten nach Erstellung zu ändern.

Wir haben einige Stile in der benannten Schicht `layout` zugewiesen. Wenn eine benannte Schicht nicht bereits existiert, wird die Benennung in einer `@layer`-Regel, unabhängig davon, ob dieser Schicht Stile zugeordnet werden oder nicht, die Schicht erstellen; dies fügt die Schicht am Ende der Serie existierender Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks der vorher bestehenden Schicht hinzugefügt – das Zuweisen von Stilen in einem Block durch die Wiederverwendung eines bestehenden Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden durch das Zuweisen von Stilen zu einer Schicht ohne Namensnennung erstellt. Stile können einer unbenannten Schicht nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne Schichtname erstellt zusätzliche unbenannte Schichten; sie fügt keine Stile zu einer bereits bestehenden unbenannten Schicht hinzu.

Die `@layer`-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stile zu einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir nannten die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>`; dies dient nur zur Erklärung. Es handelt sich tatsächlich um unbenannte Schichten. Es gibt keine Möglichkeit, auf sie zu verweisen oder zusätzliche Stile zu ihnen hinzuzufügen.

Alle Deklarationen außerhalb einer Schicht werden in einer impliziten Schicht zusammengefasst. Im obigen Beispiel wurde die erste Deklaration `color: #333333` auf `body` gesetzt. Diese wurde außerhalb jeder Schicht deklariert. Normale ungelagerte Deklarationen haben Vorrang über normale gelagerte Deklarationen, selbst wenn die ungelagerten Stile eine geringere Spezifität haben und zuerst in der Erscheinungsreihenfolge festgelegt wurden. Dies erklärt, warum selbst wenn das ungelagerte CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese ungelagerten Stile enthält, Vorrang hat als ob sie die zuletzt deklarierte Schicht wäre.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, Schichten nach ihrer Deklaration umzuordnen.

Im folgenden Beispiel weisen wir zwei Schichten Stile zu und erstellen und benennen sie dabei. Da sie bereits existieren, als sie zum ersten Mal verwendet wurden, ändert ihre Deklaration in der letzten Linie nichts.

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

Versuchen Sie, die letzte Zeile `@layer site, page;` an den Anfang zu verschieben. Was passiert?

#### Schichtenerstellung und Medienabfragen

Wenn Sie eine Schicht mithilfe von [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Featureabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) definieren, und das Medium nicht übereinstimmt oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie das Ändern der Größe Ihres Geräts oder Browsers die Schichtenreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen dann Stile den Schichten `page` und `site` in dieser Reihenfolge zu.

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

In breiten Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` Vorrang über `page`, weil es später in schmalen Bildschirmen deklariert wurde. Wenn das nicht funktioniert, versuchen Sie, die `50em` im Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die {{cssxref("@import")}}-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Import von Stylesheets muss die `@import`-Anweisung vor ^CSS-Stilen im Stylesheet oder `<style>`-Block definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann jedoch von einer `@layer`-Anweisungsregel vorangehen, die eine oder mehrere Schichten erstellt, ohne diesen Schichten Stile zuzuweisen. (`@import` kann auch von einer {{cssxref("@charset")}}-Regel vorangehen.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht, jeweils:

```css
@import "components-lib.css" layer(components);
@import "dialog.css" layer(components.dialog);
@import "marketing.css" layer();
```

Sie können mehr als eine CSS-Datei in eine einzige Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzelne `social`-Schicht:

```css
@import "comments.css" layer(social);
@import "sm-icons.css" layer(social);
```

Sie können Stile im Import und Schichten basierend auf spezifischen Bedingungen mit [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using) und [Featureabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) erstellen. Die folgende importiert ein Stylesheet in eine `international`-Schicht nur, wenn der Browser `display: ruby` unterstützt, und die importierte Datei hängt von der Bildschirmbreite ab.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode des Verlinkens von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` nicht im Stylesheet verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder anonymen Schicht. Jede Kaskadenschicht, sogar eine anonyme, kann verschachtelte Schichten enthalten. In eine andere Schicht importierte Schichten werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile der Verschachtelung von Schichten

Die Möglichkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich darüber Sorgen zu machen, ob andere Teams sie in eine Schicht importieren. Ebenso ermöglicht es die Verschachtelung, dass Sie Drittanbieter-Stylesheets in eine Schicht importieren können, ohne sich Sorgen zu machen, ob dieses Stylesheet selbst Schichten hat. Da Schichten verschachtelt werden können, müssen Sie sich nicht um konfligierende Schichtnamen zwischen externen und internen Stylesheets sorgen.

### Erstellen von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit denselben Methoden wie regelmäßige Schichten erstellt werden. Beispielsweise können sie mit `@layer`-Regel gefolgt von den Namen einer oder mehrerer Schichten erstellt werden, unter Verwendung einer Punktnotation. Mehrere Punkte und Schichtnamen bedeuten mehrere Verschachtelungen.

Wenn Sie eine Blockregel `@layer` innerhalb einer anderen Blockregel `@layer` verschachteln, mit oder ohne Name, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration importiert wird, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, werden die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten zu verschachtelten Schichten innerhalb dieser anonymen oder benannten Schicht.

Lassen Sie uns das folgende Beispiel ansehen:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei Schichten enthält, benannt oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unter-Schicht der `components`-Schicht ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall wird der Inhalt von `narrow-theme.css` zur verschachtelten `components.narrow`-Schicht hinzugefügt. Zusätzliche verschachtelte benannte Schichten können zur `components`-Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt, aber nicht nachträglich zugegriffen werden.

Schauen wir uns ein weiteres Beispiel an, in dem wir [import `layers1.css` in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import "layers1.css" layer(example);
```

Dies wird eine einzige Schicht namens `example` erstellen, die einige Deklarationen und fünf verschachtelte Schichten enthält – `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen des Vorrangs basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt ihren Vorrang. Daher ist die Reihenfolge der Schichten sehr wichtig. Auf die gleiche Weise, wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsschicht und Wichtigkeit.

### Vorrangsreihenfolge von regulären Kaskadenschichten

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden der impliziten Schicht ungedeckter Stile hinzugefügt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Schichten enthalten. Die folgende Liste zeigt, wo Stile, die in- und außerhalb dieser Dateien deklariert sind, von der geringsten (1) bis zur höchsten (10) Priorität sortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungelagerte normale Stile (`C.css`)
4. Inline normale Stile
5. animierte Stile
6. ungelagerte wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. Übergangsstile

Normale Stile, die innerhalb von Schichten deklariert werden, erhalten die niedrigste Priorität und werden nach der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben die geringste Priorität und normale Stile in der zuletzt erstellten Schicht haben die höchste Priorität unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb `firstLayer` deklariert werden, werden durch nachfolgende Stilsetzungen auf der Liste überschrieben, wenn Konflikte existieren.

Als nächstes kommen alle Stile, die außerhalb von Schichten deklariert werden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle widersprüchlichen Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer mehr Vorrang als Stile, die _in_ einer Schicht deklariert sind (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang über normale Stile, die in den ungelagerten und gelagerten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) zu finden sind.

Animierte Stile haben mehr Vorrang als alle normalen Stile, einschließlich Inline normaler Stile.

Wichtige Stile, das heißt, Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang über alle zuvor genannten Stile in unserer Liste. Sie sind in umgekehrter Reihenfolge normaler Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert sind, haben weniger Vorrang als diejenigen innerhalb einer Schicht. Wichtige Stile, die in Schichten gefunden werden, sind ebenfalls nach der Reihenfolge der Schichtenerstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht den geringsten Vorrang und die zuerst erstellte Schicht den höchsten Vorrang unter den erklärten Schichten.

Wichtige Inline-Stile haben wiederum mehr Vorrang als wichtige Stile, die anderswo deklariert wurden.

Übergängliche Stile haben den höchsten Vorrang. Wenn ein normaler Eigenschaftswert im Übergang ist, hat er Vorrang über alle anderen Eigenschaftswertdeklarationen, sogar über wichtige Inline-Stile; jedoch nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mit einer `@layer`-Anweisungsregel ohne Stile definiert. Die Schichtstile werden in zwei `@layer`-Blockregeln definiert, die nach der `h1` CSS-Regel erscheinen, die außerhalb jeder Schicht deklariert ist.

Die Inline-Stile, die dem `h1`-Element mithilfe des `style`-Attributs hinzugefügt wurden, setzen einen normalen `color`- und einen wichtigen `background-color`. Normale Inline-Stile überschreiben alle in Schichten und ungelagerten normalen Stile deklarierten Stile. Wichtige Inline-Stile überschreiben alle in Schichten und ungelagerten, sowohl normalen als auch wichtigen Autorenstile. Es gibt keinen Weg für Autorenstile, wichtige Inline-Stile zu überschreiben.

Der normale `text-decoration` und der wichtige `box-shadow` sind nicht Teil der `style` Inline-Stile und können daher überschrieben werden. Für normale, nicht Inline-Stile haben ungelagerte Stile Vorrang. Für wichtige Stile spielt die Schichtreihenfolge auch eine Rolle. Während normale ungelagerte Stile alle in einer Schicht gesetzten normalen Stile überschreiben, hat bei wichtigen Stilen die Vorrangsreihenfolge umgekehrt; ungelagerte wichtige Stile haben weniger Vorrang als gelagerte Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert sind, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Für normale Stile hat die Schicht `B`, die zuletzt deklariert wurde, Vorrang vor den Stilen in der früher deklarierten Schicht `A`. Für normale Stile haben später deklarierte Schichten Vorrang gegenüber früher deklarierten Schichten. Die Vorrangsreihenfolge ist für wichtige Stile umgekehrt. Für die wichtigen `font-weight`-Deklarationen hat die Schicht `A`, da sie zuerst deklariert wurde, Vorrang über die zuletzt deklarierte Schicht `B`.

Sie können die Schichtreihenfolge ändern, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Versuchen Sie das. Welche Stile werden davon verändert und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge, in der die Schichten in Ihrem CSS erscheinen, festgelegt. In unserer ersten Zeile haben wir Schichten deklariert, ohne Stile zuzuweisen, unter Verwendung `@layer` gefolgt von den Namen unserer Schichten, endend mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich gewesen. Warum? Wir haben Stilregeln in den benannten `@layer`-Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Wären sie nicht, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen eingefügt: Erstens, damit Sie die Zeile einfach editieren und die Reihenfolge umkehren können, und zweitens, weil oft das Deklarieren der Schichtenreihenfolge ein guter Praxistipp für die Verwaltung Ihrer Schichtenreihenfolge ist.

Zusammengefasst:

- Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Sobald sie erstellt sind, gibt es keine Möglichkeit, die Schichtenreihenfolge zu ändern.
- Schichtvorrang für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungelagerte normale Stile haben Vorrang über normale gelagerte Stile.
- Schichtvorrang für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle gelagerten wichtigen Stile haben Vorrang über ungelagerte wichtige (und normale) Stile.
- Normale Inline-Stile haben Vorrang über alle normalen Stile, in Schichten oder nicht.
- Wichtige Inline-Stile haben Vorrang über alle anderen Stile, außer über Stile, die im Übergang sind.
- Es gibt keinen Weg für Autorenstile, wichtige Inline-Stile zu überschreiben (außer im Übergang, was vorübergehend ist).

### Vorrangsreihenfolge von verschachtelten Kaskadenschichten

Die Vorrangsreihenfolge der Kaskade für verschachtelte Schichten ist ähnlich wie die von regulären Schichten, aber innerhalb der Schicht enthalten. Die Vorrangsreihenfolge basiert auf der Reihenfolge der verschachtelten Schichtenerstellung. Nicht-verschachtelte Stile in einer Schicht haben Vorrang über verschachtelte normale Stile, wobei die Vorrangsreihenfolge für wichtige Stile umgekehrt ist. Spezifitätsgewicht zwischen verschachtelten Schichten spielt keine Rolle, obwohl es für konkurrierende Stile innerhalb einer verschachtelten Schicht eine Rolle spielt.

Das folgende Beispiel erstellt und fügt der Schicht `components`, der verschachtelten Schicht `components.narrow` und der verschachtelten Schicht `components.wide` Stile hinzu:

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

Hier eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Da ungelagerte normale Stile Vorrang vor gelagerten normalen Stilen haben, gewinnt die Farbe `wheat`.
- `border`: Da innerhalb einer Schicht nicht-verschachtelte Stile Vorrang über verschachtelte normale Stile haben, gewinnt die Farbe `red`.
- `color`: Bei wichtigen Stilen haben gelagerte Stile Vorrang vor ungelagerten Stilen, wobei wichtige Stile in früher erklärten Schichten Vorrang vor später erklärten Schichten haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichtenerstellung `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang über wichtige Stile in `components.wide` haben, d.h. die Farbe `purple` gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, sodass nach Deklarationsreihenfolge `20%`-Radius gewinnt.

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, herzlichen Glückwunsch – Sie sind nun mit den grundlegenden Mechanismen von CSS-Kaskadenschichten vertraut.
