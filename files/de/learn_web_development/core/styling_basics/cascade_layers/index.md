---
title: Kaskadierschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{LearnSidebar}}

Diese Lektion soll Sie in [Kaskadierschichten](/de/docs/Web/CSS/@layer) einführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag Ihnen die Bearbeitung dieser Lektion im Vergleich zu anderen Teilen des Kurses weniger relevant und akademischer erscheinen. Dennoch ist es hilfreich, die Grundlagen von Kaskadierschichten zu kennen, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird Ihnen das Verständnis von Kaskadierschichten und deren Nutzen dabei helfen, Schmerzen bei der Verwaltung eines Code-Bestands mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu vermeiden.

Kaskadierschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, es widersprüchliche CSS-Selektoren und konkurrierende Spezifizitäten gibt oder Sie erwägen, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Gestaltung</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Kaskadierschichten funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte sehen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Stile"-Panel des Tools zeigt alle Eigenschaftswerte des inspizierten Elements an, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Die Werte des Selektors aus der Herkunft mit Vorrang werden auf das übereinstimmende Element angewendet.

Neben den angewendeten Stilen zeigt das Stile-Panel durchgestrichene Werte an, die zum ausgewählten Element passten, aber aufgrund der Kaskade, Spezifität oder Reihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus derselben Quelle mit Vorrang stammen, jedoch mit geringerer Spezifität, oder mit übereinstimmender Quelle und Spezifität, wurden aber früher im Code-Bestand gefunden. Für jeden angewendeten Eigenschaftswert kann es mehrere gestrichene Deklarationen aus verschiedenen Quellen geben. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet dies, dass der Wert in Herkunft oder Wichtigkeit fehlt.

Oftmals, wenn die Komplexität einer Website zunimmt, steigt auch die Anzahl der Stylesheets, was die Reihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadierschichten vereinfachen die Wartung von Stylesheets über solche Code-Bestände hinweg. Kaskadierschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die CSS-Deklarationen bieten, die letztendlich angewendet werden, und den Webentwicklern ermöglichen, Abschnitte von CSS zu priorisieren, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadierschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigsten Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading" (Kaskadierend). Es ist die Methode, mit der Stile zusammenkaskadieren. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4 eintauchen, **Kaskadierschichten**, was Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektormatch für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important) Flag gesetzt haben.
3. **Herkunft:** Sortieren Sie innerhalb der beiden Wichtigkeitseimer Regeln nach Autor-, Benutzer- oder Benutzeragentherkunft.
4. **Kaskadierschichten:** Sortieren Sie innerhalb der sechs Ursprungswichtigkeitseimer nach Kaskadierschicht. Die Schichtreihenfolge für normale Deklarationen ist von der ersten erstellten Schicht zur letzten, gefolgt von ungeschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei ungeschichtete wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungsstufe mit Vorrang sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Scope-Nähe:** Wenn zwei Selektoren mit Vorrang in der Ursprungsstufe dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb von Scoped-Regeln, der die kleinste Anzahl von Hops in der DOM-Hierarchie zum Scope-Wurzel hat. Siehe [Wie `@scope` Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Erscheinungsreihenfolge:** Wenn zwei Selektoren mit Vorrang in der Ursprungsstufe dieselbe Spezifität und Scope-Nähe haben, gewinnt der Eigenschaftswert des zuletzt deklarierten Selektors mit der höchsten Spezifität.

Für jeden Schritt ziehen nur die Deklarationen, die "noch im Rennen" sind, in den nächsten Schritt, um zu "konkurrieren". Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind hinfällig.

### Herkunft und Kaskade

Es gibt drei [Herkunftstypen der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzeragent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Herkunftseimer nach Herkunft und Wichtigkeit. Es gibt acht Ebenen der Vorrangstellung: die sechs Herkunftseimer, Übergangseigenschaften und animierte Eigenschaften. Die Reihenfolge der Priorität geht von normalen Benutzeragent-Stilen, die die niedrigste Priorität haben, bis zu Stilen innerhalb von derzeit angewendeten Animationen, bis zu wichtigen Benutzeragent-Stilen und dann zu Stilen, die die höchste Priorität haben:

1. normale Benutzeragent-Stile
2. normale Benutzerstile
3. normale Autorenstile
4. Stile, die animiert werden
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige Benutzeragent-Stile
8. Stile, die übergangen werden

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Direkt auf einem Element deklarierte Stile mit dem {{HTMLElement('style')}} Element sind Autorenstile. Abgesehen von animierenden und übergehenden Stilen haben normale Benutzeragent-Stile die niedrigste Priorität; wichtige Benutzeragent-Stile haben die höchste.

### Herkunft und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus der Herkunft mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Ignoriert man die Schichten vorerst, wird der Wert aus der Herkunft mit der höchsten Vorrangstellung angewendet. Wenn die siegreiche Herkunft mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird niemals zwischen Selektoren aus verschiedenen Herkünften verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autorenstile angewendet, sodass nur Benutzeragent-Stile (und Ihre persönlichen Benutzerstile, falls vorhanden) angewendet werden. Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die durch Autorenstile gesetzt werden, obwohl der Selektor im Autorenstylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", liegt daran, dass wenn es widersprüchliche Stile aus verschiedenen Herkünften gibt, die Regeln aus der Herkunft mit Vorrang angewendet werden, unabhängig von der Spezifität in der Herkunft, die keinen Vorrang hat.

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

Der "konkurrierende" Selektor im Benutzeragent-Stylesheet zum Zeitpunkt dieses Schreibens ist `a:any-link`, das ein Spezifitätsgewicht von `0-1-1` hat. Während dies höher als der `0-0-0` Selektor im Autorenstylesheet ist, spielt es selbst dann keine Rolle, wenn der Selektor in Ihrem aktuellen Benutzeragenten anders ist: Die Spezifitätsgewichte von Autoren- und Benutzeragentherkünften werden niemals verglichen. Erfahren Sie mehr darüber, [wie Spezifitätsgewichte berechnet werden](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Herkunftsvorrang gewinnt immer über Selektorspezifität. Wenn eine Eigenschaft eines Elements mit einer normalen Stil-Deklaration in mehreren Herkünften gestylt wird, wird das Autorenstylesheet immer die redundanten normalen Eigenschaften außer Kraft setzen, die in einem Benutzer- oder Benutzeragent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, wird das Benutzeragent-Stylesheet immer über Basis- und Benutzerstile gewinnen. Der Kaskadenherkunftsvorrang stellt sicher, dass Spezifikationskonflikte zwischen Herkünften nie auftreten.

Noch eine letzte Sache, die zu beachten ist, bevor wir weitermachen: Die Erscheinungsreihenfolge wird erst dann relevant, wenn konkurrierende Deklarationen in der Herkunft des Vorrangs dieselbe Spezifität haben.

## Überblick über Kaskadierschichten

Wir verstehen jetzt "Herkunftskaskadenvorrang", aber was ist "Kaskadierschichtenvorrang"? Wir werden diese Frage beantworten, indem wir erläutern, was Kaskadierschichten sind, wie sie geordnet sind und wie Stile Kaskadierschichten zugewiesen werden. Wir werden [reguläre Schichten](#erstellen_von_kaskadierschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadierschichten) und anonyme Schichten behandeln. Lassen Sie uns zunächst darüber sprechen, was Kaskadierschichten sind und welche Probleme sie lösen.

### Kaskadierschichtenvorrangsordnung

Ähnlich wie wir sechs Ebenen der Priorität basierend auf Herkunft und Wichtigkeit haben, ermöglichen Kaskadierschichten uns, innerhalb einer dieser Herkünfte eine Unterprioritätsebene zu schaffen.

Innerhalb der sechs Ursprungseimer kann es mehrere Kaskadierschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) ist von großer Bedeutung. Es ist die Erstellung der Schicht, die die Vorrangsreihenfolge zwischen den Schichten innerhalb eines Ursprungs festlegt.

In normalen Herkunftseimern werden die Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangsreihenfolge reicht von der ersten erstellten Schicht zur letzten, gefolgt von ungeschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle ungeschichteten wichtigen Stile kaskadieren zusammen in eine implizite Schicht mit Vorrang über alle nicht übergehenden normalen Stile. Die ungeschichteten wichtigen Stile haben einen geringeren Vorrang als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang gegenüber wichtigen Stilen in nachfolgend deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber bedenken Sie, dass Schichten auch in Benutzer- und Benutzeragent-Stylesheets existieren können.

### Probleme, die Kaskadierschichten lösen können

Große Code-Bestände können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittparteien haben. Egal wie viele Stylesheets enthalten sind, alle diese Stile kaskadieren in einem einzigen Ursprung: dem _Autoren_-Stylesheet.

Stile aus vielen Quellen zusammen zu kaskadieren, insbesondere aus Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Verschiedene Teams können unterschiedliche Methoden haben; eines kann die beste Praxis haben, die Spezifität zu reduzieren, während ein anderes den Standard hat, eine `id` in jeden Selektor einzubeziehen.

Spezifikationskonflikte können schnell eskalieren. Ein Webentwickler könnte einen "schnellen Fix" erstellen, indem er ein `!important`-Flag hinzufügt. Obwohl dies wie eine einfache Lösung erscheinen mag, verlagert es oft nur den Spezifikationskrieg von normalen zu wichtigen Deklarationen.

In der gleichen Weise wie Kaskadenherkünfte eine Machtbalance zwischen Benutzer-, Benutzeragent- und Autorenstilen bieten, bieten Kaskadierschichten eine strukturierte Möglichkeit, Anliegen innerhalb eines einzigen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht in einem Ursprung ein Sub-Ursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jede Drittpartei erstellt werden, mit Stilvorrang basierend auf der Schichtreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadierschichten ermöglichen es, gesamte Stylesheets gegenüber anderen Stylesheets zu priorisieren, ohne sich Sorgen über die Spezifität zwischen diesen Sub-Ursprüngen machen zu müssen.

Schichtenvorrang schlägt immer Selektorspezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität spielt immer noch eine Rolle für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifikationsbedenken zwischen den Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadierschichten lösen können

Kaskadierschichten ermöglichen die Erstellung verschachtelter Schichten. Jede Kaskadierschicht kann verschachtelte Schichten enthalten, sogar eine anonyme.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadierschicht wird die Komponentenbibliothek in den Autorenursprung hinzufügen und jegliche Spezifikationskonflikte mit anderen Autorenstilen entfernen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Themenschichten kann basierend auf Medienabfragen definiert werden (siehe den Abschnitt [Schichterstellung und Medienabfragen](#schichterstellung_und_medienabfragen) unten), wie zum Beispiel Viewport-Größe oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifität basieren.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeitet.

Die Möglichkeit, Schichten zu verschachteln, entfernt auch die Sorge, widersprüchliche Schichtnamen zu haben. Wir werden dies im [verschachtelten Schichten](#überblick_über_verschachtelte_kaskadierschichten) Abschnitt behandeln.

> "Autoren können Schichten erstellen, um Standardeinstellungen von Elementen, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Styling-Hinweise zu repräsentieren – und in der Lage sein, die Kaskade von Schichten in einer expliziten Weise neu zu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu ändern oder auf die Erscheinungsreihenfolge zu verlassen, um Konflikte zwischen Schichten zu lösen."
>
> —[Spezifikation für Kaskadierung und Vererbung](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadierschichten

Schichten können auf eine der folgenden Methoden erstellt werden:

- Die Anweisung `@layer` bei-Regel, die Schichten mit `@layer` gefolgt von den Namen von einer oder mehreren Schichten deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer` Block bei-Regel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import) Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei in dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen nicht bereits initialisiert wurde. Wenn kein Schichtname in der `@layer` bei-Regel oder `@import` mit `layer()` angegeben wird, wird eine neue anonyme (nicht benannte) Schicht erstellt.

> [!NOTE]
> Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die sich nicht in einer Schicht befinden, oder "ungeschichtete Stile", kaskadieren zusammen in ein abschließendes implizites Label.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Schicht genauer behandeln, bevor wir verschachtelte Schichten besprechen.

### Die @layer Anweisung bei-Regel für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Schichten mit `@layer` gefolgt von den Namen von einer oder mehreren Schichten zu deklarieren, ohne ihnen Stile zuzuweisen, ist eine Möglichkeit, die [Schichterordnung](#bestimmen_der_vorrangsreihenfolge_basierend_auf_der_ordnung_der_schichten) zu bestimmen.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS bei-Regel wird verwendet, um eine Kaskadierschicht zu deklarieren und die Vorrangsreihenfolge bei mehreren Kaskadierschichten zu definieren. Die folgende bei-Regel deklariert drei Schichten in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie möchten oft Ihre erste Zeile CSS mit dieser `@layer`-Deklaration beginnen (natürlich mit Schichtnamen, die für Ihre Website sinnvoll sind), um die Schichtreihenfolge vollständig steuern zu können.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, wird die Schichtreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, solange keine Schichten mit diesen Namen bereits existieren, werden diese drei Schichten erstellt und an das Ende der Liste der vorhandenen Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, wird die obige Anweisung nur zwei neue Schichten erstellen. Wenn z.B. `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer Block bei-Regel für benannte und anonyme Schichten

Schichten können mit der Block `@layer` bei-Regel erstellt werden. Wenn eine `@layer`-Anweisung von einer Kennzeichnung und einem Block von Stilen gefolgt wird, wird die Kennzeichnung verwendet, um die Schicht zu benennen, und die Stile in dieser Anweisung werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile zur bereits bestehenden Schicht hinzugefügt. Wenn beim Erstellen eines Blocks von Stilen mit `@layer` kein Name angegeben wird, werden die Stile in der Anweisung einer neuen anonymen Schicht hinzugefügt.

Im Beispiel unten haben wir vier `@layer` Block bei-Regeln und eine `@layer` Anweisung bei-Regel verwendet. Dieses CSS erledigt die folgenden Dinge in der angegebenen Reihenfolge:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten - `theme` und `utilities` - weil `layout` bereits existiert
4. Fügt der bereits bestehenden `layout`-Schicht zusätzliche Stile hinzu
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

In diesem CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Schicht ungeschichteter Stile im `body`-Stilblock. Die Reihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht ungeschichteter Stile immer zuletzt kommt. Es gibt keine Möglichkeit, die Schichtreihenfolge nach der Erstellung zu ändern.

Wir haben einige Stile der Schicht namens `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, wird durch Angabe des Namens in einer `@layer`-Anweisung, ob mit oder ohne Zuweisung von Stilen an die Schicht, die Schicht erstellt; dies fügt die Schicht am Ende der Reihe vorhandener Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile im benannten Block der bereits bestehenden Schicht hinzugefügt - die Angabe von Stilen in einem Block durch Wiederverwendung eines vorhandenen Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden durch Zuweisung von Stilen an eine Schicht erstellt, ohne die Schicht zu benennen. Stile können nur zum Zeitpunkt der Erstellung einer unbenannten Schicht hinzugefügt werden.

> [!NOTE]
> Der nachfolgende Gebrauch von `@layer` ohne Schichtnamen erstellt zusätzliche unbenannte Schichten; es fügt keine Stile zu einer zuvor bestehenden unbenannten Schicht hinzu.

Die `@layer`-Anweisung erstellt eine Schicht, benannt oder nicht, oder fügt Stile zu einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir nannten die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>`, dies nur um sie zu erklären. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden in einer impliziten Schicht zusammengeführt. Im obigen Beispielcode setzte die erste Deklaration die `color: #333`-Eigenschaft auf `body`. Dies wurde außerhalb einer Schicht deklariert. Normale ungeschichtete Deklarationen haben Vorrang über normale geschichtete Deklarationen, auch wenn die ungeschichteten Stile eine geringere Spezifität haben und zuerst in der Erscheinungsreihenfolge kommen. Dies erklärt, warum auch wenn das ungeschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese ungeschichteten Stile enthält, Vorrang hat, als ob sie die zuletzt deklarierte Schicht wäre.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die `theme` und `utilities`-Schichten erstellt; `layout` war bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration nicht die Reihenfolge der bereits erstellten Schichten ändert. Es gibt derzeit keine Möglichkeit, Schichten nach der Deklaration neu zu ordnen.

Im folgenden Beispiel weisen wir Stile zwei Schichten zu und erstellen und benennen diese dabei. Da sie bereits existieren, weil sie bei der ersten Verwendung erstellt wurden, bewirkt deren Deklaration in der letzten Zeile nichts.

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

Versuchen Sie, die letzte Zeile, `@layer site, page;`, an eine andere Stelle zu bewegen. Was passiert?

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht mit [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Merkmal](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) abfragen definieren und die Medienbedingung nicht zutrifft oder das Merkmal nicht unterstützt wird, wird die Schicht nicht erstellt. Das Beispiel unten zeigt, wie sich die Schichtreihenfolge ändern kann, wenn Sie die Größe Ihres Geräts oder Browsers ändern. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen dann Stile den `page` und `site`-Schichten zu, in dieser Reihenfolge.

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

Auf breiten Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Ansonsten hat `site` mehr Vorrang als `page`, da es auf schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import) Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}} Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Styles innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Styles, kann aber von einer `@layer`-Anweisung gefolgt sein, die eine oder mehrere Schichten erstellt, ohne diesen Schichten irgendwelche Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset) Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht:

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

Sie können Stile importieren und Schichten basierend auf spezifischen Bedingungen mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Merkmalsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) erstellen. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht nur dann, wenn der Browser `display: ruby` unterstützt, und die zu importierende Datei hängt von der Breite des Bildschirms ab.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}} Methode zum Verknüpfen von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` nicht im Stylesheet verwenden können.

## Überblick über verschachtelte Kaskadierschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder anonymen Schicht. Jede Kaskadierschicht kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden verschachtelte Schichten innerhalb dieser Schicht.

### Vorteile der Verschachtelung von Schichten

Die Möglichkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadierschichten zu erstellen, ohne sich darüber Sorgen zu machen, ob andere Teams sie in eine Schicht importieren werden. In ähnlicher Weise können Sie dadurch Drittanbieter-Stylesheets in eine Schicht importieren, ohne sich sorgen zu müssen, ob dieses Stylesheet selbst Schichten enthält. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen machen, dass Layernamen zwischen externen und internen Stylesheets in Konflikt geraten.

### Erstellen von verschachtelten Kaskadierschichten

Verschachtelte Schichten können mit denselben Methoden erstellt werden, wie sie für reguläre Schichten beschrieben sind. Zum Beispiel können sie mit der `@layer` bei-Regel gefolgt von den Namen von einer oder mehreren Schichten unter Verwendung einer Punktnotation erstellt werden. Mehrere Punkte und Schichtnamen bedeuten mehrere Verschachtelungen.

Wenn Sie eine Block `@layer` bei-Regel in einer anderen Block `@layer` bei-Regel, mit oder ohne Name, verschachteln, wird der verschachtelte Block zu einer verschachtelten Schicht. In ähnlicher Weise werden beim Importieren eines Stylesheets mit einer `@import`-Deklaration, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten verschachtelte Schichten innerhalb dieser anonymen oder benannten Schicht.

Schauen wir uns das folgende Beispiel an:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei irgendeine Schicht enthält, werden diese Schichten verschachtelte Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Teilschicht von `components` ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in welchem Fall der Inhalt von `narrow-theme.css` zur verschachtelten `components.narrow`-Schicht hinzugefügt würde. Weitere benannte verschachtelte Schichten können zur `components`-Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können anschließend nicht mehr angesprochen werden.

Schauen wir uns ein weiteres Beispiel an, wo wir [`layers1.css` in eine benannte Schicht importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import url(layers1.css) layer(example);
```

Dies erstellt eine einzelne Schicht namens `example`, die einige Deklarationen enthält und fünf verschachtelte Schichten - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen der Vorrangsreihenfolge basierend auf der Ordnung der Schichten

Die Reihenfolge der Schichten bestimmt deren Vorrangsreihenfolge. Daher ist die Reihenfolge der Schichten sehr wichtig. In der gleichen Weise sortiert die Kaskade jede CSS-Deklaration nach Herkunftsschicht und Wichtigkeit wie die Kaskade nach Herkunft und Wichtigkeit.

### Vorrangsordnung regulärer Kaskadierschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden zur impliziten Schicht ungeschichteter Stile hinzugefügt). Nehmen wir an, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine weiteren Schichten enthalten. Die folgende Liste zeigt, wo Stile, die innerhalb und außerhalb dieser Dateien deklariert sind, von der am wenigsten (1) bis zur höchsten (10) Vorrangstellung sortiert werden.

1. `firstLayer` normale Styles (`A.css`)
2. `secondLayer` normale Styles (`B.css`)
3. ungeschichtete normale Styles (`C.css`)
4. Inline normale Styles
5. animierende Styles
6. ungeschichtete wichtige Styles (`C.css`)
7. `secondLayer` wichtige Styles (`B.css`)
8. `firstLayer` wichtige Styles (`A.css`)
9. Inline wichtige Styles
10. übergehende Styles

Normale Styles, die innerhalb von Schichten erklärt werden, erhalten die niedrigste Priorität und werden nach der Reihenfolge der Erstellung der Schichten sortiert. Normale Styles in der zuerst erstellten Schicht haben die niedrigste Priorität, und normale Styles in der zuletzt erstellten Schicht haben die höchste Priorität unter den Schichten. Mit anderen Worten, normale Styles, die innerhalb von `firstLayer` erklärt werden, werden von allen nachfolgenden Formulierungen auf der Liste überschrieben, falls Konflikte bestehen.

Als nächstes sind alle Styles erklärt, die außerhalb von Schichten liegen. Die Styles in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle widersprüchlichen Styles von `firstLayer` und `secondLayer`. Styles, die nicht in einer Schicht erklärt sind, haben immer höhere Priorität als Styles, die sich in einer Schicht befinden (mit Ausnahme von wichtigen Styles).

Inline-Styles werden mit dem [`style` Attribut](/de/docs/Web/HTML/Global_attributes/style) erklärt. Normale Styles, die auf diese Weise erklärt werden, haben Vorrang vor normalen Styles, die in ungeschichteten und geschichteten Stylesheets gefunden werden (`firstLayer - A.css`, `secondLayer - B.css` und `C.css`).

Animierende Styles haben höhere Priorität als alle normalen Styles, einschließlich Inline normale Styles.

Wichtige Styles, das heißt, Eigenschaftswerte, die das `!important` Flag enthalten, haben Vorrang vor allen zuvor erwähnten Styles in unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Styles sortiert. Alle wichtigen Styles, die außerhalb einer Schicht erklärt werden, haben weniger Vorrang als die, die innerhalb einer Schicht erklärt werden. Wichtige Styles, die innerhalb von Schichten gefunden werden, werden auch in der Reihenfolge der Schichterstellung sortiert. Für wichtige Styles hat die zuletzt erstellte Schicht die niedrigste Priorität, und die zuerst erstellte Schicht hat die höchste Priorität unter den erklärten Schichten.

Inline wichtige Styles haben wiederum höhere Priorität als wichtig erklärter Styles an anderer Stelle.

Übergehende Styles haben die höchste Priorität. Wenn ein normaler Eigenschaftswert übergangen wird, hat er Vorrang vor allen anderen Eigenschaftswerterklärungen, selbst Inline wichtige Styles; jedoch nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mit einer `@layer`-Anweisung ohne jegliche Styles erklärt. Die Schicht-Styles werden in zwei `@layer` Blockanweisungen definiert, die nach der `h1` CSS-Regel erscheinen, die außerhalb von Schichten erklärt wird.

Die Inline-Styles, die dem `h1` Element mithilfe des `style` Attributs hinzugefügt wurden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Styles überschreiben alle geschichteten und ungeschichteten normalen Styles. Wichtige Inline-Styles überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Styles zu überschreiben.

Die normalen `text-decoration` und wichtigen `box-shadow` sind nicht Teil der `style` Inline-Styles und können daher überschrieben werden. Bei normalen nicht Inline-Styles haben ungeschichtete Styles Vorrang. Bei wichtigen Styles spielt die Schichtreihenfolge ebenfalls eine Rolle. Während normale ungeschichtete Styles alle normalen Styles in einer Schicht überschreiben, ist bei wichtigen Styles die Vorrangsordnung umgekehrt; ungeschichtete wichtige Styles haben eine geringere Priorität als geschichtete Styles.

Die beiden Styles, die nur innerhalb von Schichten erklärt werden, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important` Flag. Bei normalen Styles hat die `B` Schicht, die zuletzt erklärt wird, Vorrang vor Styles in der früher deklarierten Schicht `A`. Bei normalen Styles haben später erstellte Schichten Vorrang vor früheren Schichten. Die Reihenfolge der Vorrangstellung ist bei wichtigen Styles umgekehrt. Für die wichtigen `font-weight` Deklarationen hat die `A` Schicht, die zuerst erklärt wird, Vorrang vor der zuletzt erklarten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Versuchen Sie das. Welche Styles werden dadurch geändert und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten ohne Zuweisung von Styles deklariert, indem wir `@layer` gefolgt von den Namen unserer Schichten verwendet haben, endend mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich geblieben. Warum? Wir haben Stilregeln in benannten `@layer` Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Hätten sie nicht existiert, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen aufgenommen: erstens, damit Sie die Zeile einfach bearbeiten und die Reihenfolge ändern können, und zweitens, weil es oft eine gute Praxis ist, die Schichtreihenfolge vorab zu deklarieren, um Ihr Schichtordnungsmanagement zu verbessern.

Zusammengefasst:

- Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Nach der Erstellung gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Schichtreihenfolge für normale Styles ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Styles haben Vorrang vor geschichteten normalen Styles.
- Die Schichtreihenfolge für wichtige Styles ist umgekehrt, wobei die zuerst erstellten Schichten Vorrang haben.
- Alle geschichteten wichtigen Styles haben Vorrang vor ungeschichteten wichtigen (und normalen) Styles.
- Normale Inline-Styles haben Vorrang vor allen normalen Styles, geschichtet oder nicht.
- Wichtige Inline-Styles haben Vorrang vor allen anderen Styles, mit Ausnahme von übergehenden Styles.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Styles zu überschreiben (außer sie zu übergehen, was temporär ist).

### Vorrangsordnung verschachtelter Kaskadierschichten

Die Kaskadiervorrangsordnung für verschachtelte Schichten ist ähnlich der regulären Schichten, jedoch innerhalb der Schicht enthalten. Die Vorrangsreihenfolge basiert auf der Reihenfolge der verschachtelten Schichterstellung. Nicht verschachtelte Styles in einer Schicht haben Vorrang vor verschachtelten normalen Styles, mit der Vorrangsreihenfolge, die für wichtige Styles umgekehrt ist. Die Spezifitätsgewichte zwischen verschachtelten Schichten spielen keine Rolle, obwohl sie für widersprüchliche Styles innerhalb einer verschachtelten Schicht relevant sind.

Das folgende erstellt und fügt Styles der `components` Schicht, `components.narrow` verschachtelten Schicht, und `components.wide` verschachtelten Schicht hinzu:

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

{{EmbedLiveSample("Vorrangsordnung verschachtelter Kaskadierschichten", "100%", "250")}}

Hier ist eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Da ungeschichtete normale Styles Vorrang vor geschichteten normalen Styles haben, gewinnt `wheat` Farbe.
- `border`: Da innerhalb einer Schicht nicht-verschachtelte Styles Vorrang vor normalen verschachtelten Styles haben, gewinnt `red` Farbe.
- `color`: Bei wichtigen Styles haben geschichtete Styles Vorrang vor ungeschichteten Styles, wobei wichtige Styles in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichterstellung `components.narrow`, dann `components.wide`, sodass wichtige Styles in `components.narrow` Vorrang vor wichtigen Styles in `components.wide` haben, was bedeutet, dass `purple` Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, sodass der Deklarationsreihenfolge nach, gewinnt `20%` Radius.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen - siehe [Testen Sie Ihr Können: Die Kaskade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie das meiste von diesem Artikel verstanden haben, dann herzlichen Glückwunsch - Sie sind jetzt mit den grundlegenden Mechaniken der CSS-Kaskadierschichten vertraut.
