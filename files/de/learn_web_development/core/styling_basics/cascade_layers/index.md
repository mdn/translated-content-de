---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

Diese Lektion soll Ihnen einen Überblick über [Kaskadenschichten](/de/docs/Web/CSS/@layer) geben, eine fortgeschrittene Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag diese Lektion zunächst etwas weniger relevant und etwas akademischer erscheinen als andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen dessen zu kennen, was Kaskadenschichten sind, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr werden Sie verstehen, dass Kaskadenschichten hilfreich sind und Ihnen viel Mühe ersparen können, eine Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklerteams zu verwalten.

Kaskadenschichten sind am relevantesten, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es zu Konflikten zwischen CSS-Selektoren und konkurrierenden Spezifitäten kommt, oder wenn Sie überlegen, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie Kaskadenschichten funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwickler-Tools Ihres Browsers untersuchen. Das "Styles"-Panel des Tools zeigt alle auf das untersuchte Element angewendeten Eigenschaftswerte an, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Der Selektor mit der höchsten Priorität hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel ausgegraute Werte an, die zwar auf das ausgewählte Element zutrafen, aber aufgrund der Kaskade, der Spezifität oder der Reihenfolge der Quellen nicht angewendet wurden. Ausgegraute Stile können von derselben Quelle mit Priorität stammen, jedoch mit geringerer Spezifität, oder mit übereinstimmender Quelle und Spezifität, wurden jedoch früher im Code gefunden. Bei jedem angewendeten Eigenschaftswert kann es mehrere ausgegraute Deklarationen aus vielen verschiedenen Quellen geben. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet dies, dass der Wert mangelnde Priorität oder Wichtigkeit hat.

Häufig, wenn die Komplexität einer Website zunimmt, erhöht sich die Anzahl der Stylesheets, was die Reihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen das Verwalten von Stylesheets in einer solchen Codebasis. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten, sodass Webentwickler CSS-Abschnitte priorisieren können, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading". Es ist die Methode, mit der Stile zusammengeführt werden. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu ermitteln, die jeder Eigenschaft für jedes Element zugewiesen sind. Wir listen diese Schritte hier kurz auf und gehen dann näher auf Schritt 4, **Kaskadenschichten**, ein, den Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem übereinstimmenden Selektor für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind solche, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Herkunft:** Sortieren Sie innerhalb der beiden Wichtigkeitsstufen die Regeln nach Autor-, Benutzer- oder Benutzeragenten-Herkunft.
4. **Kaskadenschichten:** Sortieren Sie innerhalb der sechs Ursprungs-Wichtigkeitskategorien nach Kaskadenschicht. Die Schichtreihenfolge für normale Deklarationen reicht von der ersten bis zur letzten erstellten Schicht, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge wird für wichtige Stile invertiert, wobei nicht geschichtete wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Sortieren Sie bei konkurrierenden Stilen in der Ursprungs-Schicht mit Priorität Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Nähe zur Einbettung**: Wenn zwei Selektoren in der Ursprungs-Schicht mit Priorität die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der eingebetteten Regeln mit der geringsten Anzahl von Sprüngen in der DOM-Hierarchie zur Scope-Root. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Erscheinungsreihenfolge:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Priorität die gleiche Spezifität und Einbettungsnähe haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt kommen nur die Deklarationen "noch im Rennen" weiter, um im nächsten Schritt "zu konkurrieren". Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzeragentenstylesheets, Benutzerstylesheets und Autorenstylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungskategorien nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Priorität: die sechs Ursprungskategorien, Eigenschaften, die sich im Übergang befinden, und Eigenschaften, die animiert werden. Die Reihenfolge der Priorität reicht von normalen Benutzeragentenstilen, die die niedrigste Priorität haben, bis zu Stilen innerhalb momentan angewandter Animationen, über wichtige Benutzeragentenstile und dann Übergangsstile, die die höchste Priorität haben:

1. normale Benutzeragentenstile
2. normale Benutzerstile
3. normale Autorenstile
4. animierte Stile
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige Benutzeragentenstile
8. Übergangsstile

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Website-Besucher. Der "Autor" sind Sie, der Entwickler. Direkt auf einem Element deklarierte Stile mit dem {{HTMLElement('style')}}-Element sind Autorenstile. Ohne animierte und übergangene Stile haben normale Benutzeragentenstile die niedrigste Priorität; wichtige Benutzeragentenstile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft gewinnt die Deklaration, die vom Ursprung mit der höchsten Priorität basierend auf dem Gewichtung (normal oder wichtig) stammt. Ignorieren Sie Schichten für den Moment, der Wert aus dem Ursprung mit der höchsten Priorität wird angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifität wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im Beispiel unten gibt es zwei Links. Der erste hat keine angewandten Autorenstile, sodass nur Benutzeragentenstile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die von Autorenstilen gesetzt werden, obwohl der Selektor im Autorenstylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass wenn es zu Konflikten zwischen Stilen aus verschiedenen Ursprüngen kommt, die Regeln aus dem Ursprung mit Priorität angewendet werden, unabhängig von der Spezifität im Ursprung, der keine Priorität hat.

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

Der "konkurrierende" Selektor im Benutzeragentenstylesheet ist zum Zeitpunkt dieses Schreibens `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0`-Selektor im Autorenstylesheet, spielt es keine Rolle, selbst wenn der Selektor in Ihrem aktuellen Benutzeragenten anders ist: die Spezifitätsgewichte von Autoren- und Benutzeragentenursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, wie [Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungspriorität gewinnt immer über Selektorspezifität. Wenn eine Element-Eigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestaltet wird, überschreibt das Autorenstylesheet immer die redundanten normalen Eigenschaften, die in einem Benutzer- oder Benutzeragentenstylesheet deklariert wurden. Wenn der Stil wichtig ist, gewinnt das Benutzeragentenstylesheet immer über Autoren- und Benutzerstile. Die Priorität der Kaskaden-Herkunft stellt sicher, dass Spezifitätskonflikte zwischen Ursprüngen niemals auftreten.

Eine letzte Sache, bevor wir fortfahren: die Erscheinungsreihenfolge wird nur relevant, wenn konkurrierende Deklarationen im Ursprung mit Priorität die gleiche Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen nun die "Priorität der Kaskadenherkunft", aber was ist die "Priorität der Kaskadenschicht"? Wir werden diese Frage beantworten, indem wir behandeln, was Kaskadenschichten sind, wie sie angeordnet sind und wie Stile Kaskadenschichten zugewiesen werden. Wir werden [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten abdecken. Lassen Sie uns zuerst besprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Reihenfolge der Priorität von Kaskadenschichten

Ähnlich wie wir sechs Ebenen der Priorität basierend auf Herkunft und Wichtigkeit haben, ermöglichen es Kaskadenschichten, innerhalb einer dieser Herkünfte eine Unter-Ebene der Priorität zu erstellen.

Innerhalb jeder der sechs Ursprungs-Eimer (`origin buckets`) kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) ist von großer Bedeutung. Es ist die Reihenfolge der Erstellung, die die Prioritätsreihenfolge zwischen Schichten innerhalb einer Herkunft festlegt.

In normalen Ursprungs-Eimern werden Schichten in der Reihenfolge ihrer Erstellung sortiert. Die Reihenfolge der Priorität reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile invertiert. Alle nicht geschichteten wichtigen Stile kaskadieren zusammen in eine implizite Schicht mit Priorität über allen nicht-transitionierenden normalen Stilen. Die nicht geschichteten wichtigen Stile haben eine niedrigere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang über wichtige Stile in später deklarierten Schichten innerhalb derselben Herkunft.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber denken Sie daran, dass Schichten auch in Benutzer- und Benutzeragentenstylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile aus mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal wie viele Stylesheets eingeschlossen sind, all diese Stile kaskadieren in einer einzigen Herkunft: dem _Autoren_-Stylesheet.

Das Zusammenführen von Stilen aus vielen Quellen, insbesondere von Teams, die nicht zusammenarbeiten, kann Probleme schaffen. Verschiedene Teams können unterschiedliche Methoden haben; eines könnte die beste Praxis der Reduzierung von Spezifität verfolgen, während ein anderes eine Richtlinie hat, die `id` in jeden Selektor einzubeziehen.

Inhalte zu Spezifitätskonflikten können schnell eskalieren. Ein Webentwickler könnte eine "schnelle Lösung" erstellen, indem er ein `!important`-Flag hinzufügt. Obwohl dies wie eine einfache Lösung erscheint, verschiebt es oft nur den Spezifitätskrieg von normalen zu wichtigen Deklarationen.

So wie Kaskadenherkünfte ein Gleichgewicht der Kräfte zwischen Benutzer-, Benutzeragenten- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb einer einzigen Herkunft zu organisieren und auszugleichen, als ob jede Schicht in einer Herkunft eine Unterherkunft wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, wobei die Stilpriorität auf der Schichtreihenfolge basiert.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich um Spezifität zwischen diesen Unterherkünften kümmern zu müssen.

Schichtpriorität gewinnt immer über Selektorspezifität. Stile in Schichten mit Priorität "gewinnen" über Schichten mit weniger Priorität. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität ist immer noch wichtig für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifitätsprobleme zwischen Schichten, da nur die Schicht mit der höchsten Priorität für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten ermöglichen die Erstellung verschachtelter Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht wird die Komponentenbibliothek zur Autorenherkunft hinzufügen und alle Spezifitätskonflikte mit anderen Autorenstilen entfernen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Themens

chichten kann basierend auf Medienabfragen (siehe den Abschnitt [Layer-Erstellung und Medienabfragen](#schichterstellung_und_medienabfragen) unten) definiert werden, wie zum Beispiel die Ansichtsgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifität basieren konkurrieren.

Die Fähigkeit, Schichten zu verschachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeiten.

Die Fähigkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge, dass es zu Konflikten bei Schichtnamen kommt. Wir werden dies im Abschnitt [verschachtelte Schicht](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten für Elementstandards, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Styling-Angelegenheiten erstellen - und können die Kaskade der Schichten in einer expliziten Weise neu ordnen, ohne die Selektoren oder Spezifität innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen Schichten zu lösen."
>
> —[Spezifikation zu Kaskade und Vererbung](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die `@layer`-Anweisung als At-Regel, bei der Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten deklariert werden. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer` Block-at-Regel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die `@import`-Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei in diese Schicht einfügt.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn kein Schichtname in der `@layer`-Regel oder `@import` mit `layer()` angegeben ist, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Reihenfolge der Priorität von Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht sind oder "ungeschichtete Stile", kaskadieren zusammen in eine letzte implizite Etikette.

Bevor wir verschachtelte Schichten diskutieren, werfen wir einen genaueren Blick auf die drei Möglichkeiten zur Erstellung einer Schicht.

### Die @layer-Anweisung als At-Regel für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten zu deklarieren, ohne ihnen Stile zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmung_der_priorität_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer)-CSS-At-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Prioritätsreihenfolge festzulegen, wenn es mehrere Kaskadenschichten gibt. Die folgende At-Regel deklariert drei Schichten, in der aufgeführten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Oftmals möchten Sie, dass Ihre erste Zeile in Ihrem CSS diese `@layer`-Deklaration ist (natürlich mit Schichtnamen, die für Ihre Website sinnvoll sind), um die volle Kontrolle über die Schichtreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, wird die Schichtreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, werden, solange es noch keine Schichten mit diesen Namen gibt, diese drei Schichten erstellt und am Ende der Liste der bestehenden Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, erstellt die obige Anweisung nur zwei neue Schichten. So werden zum Beispiel nur `theme` und `utilities` erstellt, wenn `layout` bereits existiert. In diesem Fall wird die Schichtreihenfolge `layout`, `theme` und `utilities` sein.

### Die @layer Block-at-Regel für benannte und anonyme Schichten

Schichten können mit der Block-`@layer`-Regel erstellt werden. Befolgt eine `@layer`-Regel ein Bezeichner und einen Stilblock, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser At-Regel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor bestehenden Schicht hinzugefügt. Wenn beim Erstellen eines Stilsblocks mit `@layer` kein Name angegeben ist, werden die Stile in der At-Regel einer neuen anonymen Schicht hinzugefügt.

Im untenstehenden Beispiel haben wir vier `@layer` Block-at-Regeln und eine `@layer`-Anweisung als At-Regel verwendet. Dieses CSS macht Folgendes in der aufgeführten Reihenfolge:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
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

In dem obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities`, und `<anonymous(02)>` - in dieser Reihenfolge - mit einer sechsten, impliziten Schicht von ungeschichteten Stilen, die im `body`-Stilblock enthalten sind. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht von ungeschichteten Stilen immer zuletzt ist. Es gibt keine Möglichkeit, die Schichtreihenfolge nach der Erstellung zu ändern.

Wir haben der Schicht mit dem Namen `layout` einige Stile zugewiesen. Wenn eine benannte Schicht noch nicht existiert, erstellt die Angabe des Namens in einer `@layer`-Regel, mit oder ohne Zuweisen von Stilen zu der Schicht, die Schicht; Dies fügt die Schicht am Ende der Serie von bestehenden Schichtnamen hinzu. Existiert die benannte Schicht bereits, werden alle Stile innerhalb des benannten Blocks den Stilen in der zuvor bestehenden Schicht hinzugefügt – das Spezifizieren von Stilen in einem Block unter Wiederverwendung eines bereits bestehenden Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stilen eine Schicht zugewiesen wird, ohne die Schicht zu benennen. Stile können einer unbenannten Schicht nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Die wiederholte Verwendung von `@layer` ohne Schichtnamen erstellt zusätzliche unbenannte Schichten; es fügt nicht Stile zu einer zuvor bestehenden unbenannten Schicht hinzu.

Die `@layer`-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stile zu einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>` genannt, dies ist nur zu erläuterungszwecken. Es handelt sich eigentlich um unbenannte Schichten. Es gibt keine Möglichkeit, auf sie zuzugreifen oder ihnen nachträglich Stile hinzuzufügen.

Alle Deklarationen, die außerhalb einer Schicht stehen, werden in eine implizite Schicht zusammengeführt. Im obigen Beispiel hat die erste Deklaration die Eigenschaft `color: #333` auf `body` gesetzt. Dies wurde außerhalb jeder Schicht deklariert. Normale ungeschichtete Deklarationen haben Priorität über normale geschichtete Deklarationen, selbst wenn die ungeschichteten Stile eine niedrigere Spezifität haben und zuerst in der Erscheinungsreihenfolge erscheinen. Dies erklärt, warum die ungeschichteten CSS, obwohl sie zuerst im Codeblock deklariert wurden, die implizite Schicht dieser ungeschichteten Stile wie wenn es die letzte deklarierte Schicht wäre, übertreffen.

In der Zeile `@layer theme, layout, utilities;`, in der eine Serie von Schichten deklariert wurde, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge bereits erstellter Schichten nicht ändert. Derzeit gibt es keine Möglichkeit, die Reihenfolge der Schichten nach der Deklaration zu ändern.

Im folgenden Beispiel weisen wir Stilen zwei Schichten zu, erstellen und benennen sie im Prozess. Da sie bereits existieren, weil sie beim ersten Gebrauch erstellt wurden, macht die Deklaration in der letzten Zeile nichts.

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

Versuchen Sie, die letzte Zeile, `@layer site, page;`, zu verschieben, um die erste Zeile zu machen. Was passiert?

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) definieren und die Medien nicht zutreffen oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie sich durch das Ändern der Größe Ihres Geräts oder Browsers die Schichtreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen dann den `page`- und `site`-Schichten Stile zu, in dieser Reihenfolge.

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

In Breitbildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` Vorrang vor `page`, weil es später auf schmalen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Der Import von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets in eine CSS-Datei oder ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen im Stylesheet oder `<style>`-Block definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann jedoch von einer `@layer`-At-Regel gefolgt werden, die eine oder mehrere Schichten erstellt, ohne ihnen Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht:

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

Sie können Stile importieren und Schichten basierend auf spezifischen Bedingungen verwenden, die mit Hilfe von [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) definiert werden. Die folgende importiert ein Stylesheet in eine `international`-Schicht nur, wenn der Browser `display: ruby` unterstützt, und die zu importierende Datei ist abhängig von der Bildschirmbreite.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt keinen Äquivalent der {{HTMLElement('link')}}-Methode zum Verknüpfen von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn `@layer` nicht im Stylesheet verwendet werden kann.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder einer anonymen Schicht. Jede Kaskadenschicht, auch eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden verschachtelte Schichten innerhalb dieser Schicht.

### Vorteile der Verschachtelung von Schichten

Die Fähigkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen zu machen, ob andere Teams sie in eine Schicht importieren werden. Ebenso ermöglicht es die Verschachtelung, dass Sie Drittanbieter-Stylesheets in eine Schicht importieren können, ohne sich Sorgen machen zu müssen, ob dieses Stylesheet selbst Schichten hat. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorge über Konflikte bei Schichtnamen zwischen externen und internen Stylesheets machen.

### Erstellen von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit den gleichen Methoden erstellt werden wie reguläre Schichten. Sie können zum Beispiel mit einer `@layer`-Regel erstellt werden, gefolgt von den Namen einer oder mehrerer Schichten, die mit einer Punktnotation verwandt sind. Mehrere Punkte und Schichtnamen bedeuten mehrfache Verschachtelungen.

Wenn Sie eine Block-`@layer`-Regel innerhalb einer anderen Block-`@layer`-Regel verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso wird beim Importieren eines Stylesheets mit einer `@import`-Deklaration, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, der Stil dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten verschachtelte Schichten innerhalb dieser anonymen oder benannten Schicht.

Lassen Sie uns das folgende Beispiel ansehen:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei Schichten enthält, werden diese Schichten verschachtelte Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unterlage der `components`-Schicht ist. Die verschachtelte `components.narrow`-Schicht wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall würde der Inhalt von `narrow-theme.css` der verschachtelten `components.narrow`-Schicht hinzugefügt werden. Weitere verschachtelte benannte Schichten können der `components`-Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können nicht nachträglich zugegriffen werden.

Schauen wir uns ein weiteres Beispiel an, in dem wir [import `layers1.css` in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung importieren:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne `example`-Schicht erstellen, die einige Deklarationen und fünf verschachtelte Schichten - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>` - enthält.

Um Stilen eine benannte verschachtelte Schicht hinzuzufügen, verwenden Sie die Punktnotierung:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung der Priorität basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt deren Prioritätsreihenfolge. Daher ist die Reihenfolge der Schichten sehr wichtig. In der gleichen Weise, wie die Kaskade nach Herkunft und Wichtigkeit sortiert wird, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsschicht und Wichtigkeit.

### Vorrangordnung von regulären Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden der impliziten Schicht von ungeschichteten Stilen hinzugefügt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Schichten in sich enthalten. Die folgende Liste zeigt, wo die innerhalb und außerhalb dieser Dateien deklarierten Stile von der geringsten (1) bis zur höchsten (10) Priorität sortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungeschichtete normale Stile (`C.css`)
4. Inline-Normale Stile
5. animierende Stile
6. wichtige ungeschichtete Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. wichtige Inline-Stile
10. übergangsstile

Normale Stile, die innerhalb von Schichten deklariert sind, erhalten die niedrigste Priorität und werden in der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben die niedrigste Priorität, und normale Stile in der zuletzt erstellten Schicht haben die höchste Priorität unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert werden, werden von jedem nachfolgenden Styling auf der Liste überschrieben, wenn Konflikte bestehen.

Nächste in der Reihenfolge sind alle außerhalb von Schichten deklarierten Stile. Die in `C.css` enthaltenen Stile wurden nicht in eine Schicht importiert und überschreiben alle störenden Stile aus `firstLayer` und `secondLayer`. Alle Stile, die nicht in einer Schicht deklariert sind, haben immer höhere Priorität als Stile, die in einer Schicht deklariert wurden (mit Ausnahme der wichtigen Stile).

Inline-Stile werden unter Verwendung des [`style`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang vor normalen Stilen, die in ungeschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) zu finden sind.

Animierende Stile haben eine höhere Priorität als alle normalen Stile, einschließlich Inline-normale Stile.

Wichtige Stile, das heißt Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor in unserer Liste erwähnten Stilen. Sie sind in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert sind, haben weniger Priorität als diejenigen, die innerhalb einer Schicht deklariert sind. Wichtige Stile, die innerhalb von Schichten zu finden sind, werden ebenfalls in der Reihenfolge der Schichterstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht die niedrigste Priorität und die zuerst erstellte Schicht hat die höchste Priorität unter den deklarierten Schichten.

Wichtige Inline-Stile haben wiederum eine höhere Priorität als wichtige Stile, die anderswo deklariert werden.

Übergangsstile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert übergangen wird, hat er Vorrang vor allen anderen Eigenschaftswertdeklarationen, sogar vor wichtigen Inline-Stilen; jedoch nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mit einer `@layer`-Anweisung als At-Regel deklariert, ohne Stile. Die Schichtstile werden in zwei `@layer` Block-at-Regeln definiert, die nach der Deklaration der `h1` CSS-Regel, die außerhalb jeder Schicht deklariert ist, erscheinen.

Die Inline-Stile, die mit dem `style`-Attribut auf das `h1`-Element angewendet werden, setzen einen normalen `color` und einen wichtigen `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit, dass Autorenstile wichtige Inline-Stile überschreiben können.

Der normale `text-decoration` und der wichtige `box-shadow` sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Bei normalen Nicht-Inline-Stilen haben ungeschichtete Stile Priorität. Bei wichtigen Stilen spielt auch die Schichtreihenfolge eine Rolle. Während normale ungeschichtete Stile alle normalen Stile, die in einer Schicht konfiguriert sind, überschreiben, ist bei wichtigen Stilen die Vorrangordnung umgekehrt; ungeschichtete wichtige Stile haben weniger Priorität als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert sind, sind `font-style` mit normaler Wichtigkeit und `font-weight` mit einem `!important`-Flag. Für normale Stile hat die `B` Schicht, die zuletzt deklariert wurde, Vorrang vor Stilen in der früher deklarierten Schicht `A`. Für normale Stile haben spätere Schichten Vorrang vor früheren Schichten. Die Reihenfolge der Priorität wird für wichtige Stile umgekehrt. Bei den wichtigen `font-weight`-Deklarationen hat die Schicht `A`, die zuerst deklariert wurde, Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Probieren Sie das. Welche Stile werden dadurch geändert und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge bestimmt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten ohne Zuweisung von Stilen mit `@layer` gefolgt von den Namen unserer Schichten deklariert und mit einem Semikolon beendet. Hätten wir diese Zeile weggelassen, wäre das Ergebnis das Gleiche gewesen. Warum? Wir haben Stilregeln in benannten `@layer`-Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Wären sie nicht erstellt worden, hätten diese Regelblöcke diese in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen aufgenommen: erstens, damit Sie die Zeile einfach bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass die Schichtreihenfolge upfront zu deklarieren die beste Praxis für Ihr Schichtreihenfolgenmanagement ist.

Zusammenfassend:

- Die Reihenfolge der Vorrang von Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Sobald erstellt, gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Schichtpriorität für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Schichtpriorität für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von Stilen, die übergangen werden.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was vorübergehend ist).

### Vorrangordnung von verschachtelten Kaskadenschichten

Die Kaskaden-Vorrangordnung für verschachtelte Schichten ist ähnlich wie bei regulären Schichten, jedoch innerhalb der Schicht. Die Vorrangordnung basiert auf der Reihenfolge der verschachtelten Schichterstellung. Nicht verschachtelte Stile in einer Schicht haben Vorrang vor verschachtelten normalen Stilen, wobei die Vorrangordnung für wichtige Stile umgekehrt ist. Spezifitätsgewichte zwischen verschachtelten Schichten spielen keine Rolle, obwohl sie für konkurrierende Stile innerhalb einer verschachtelten Schicht eine Rolle spielen.

Das folgende Beispiel erstellt und fügt der `components`-Schicht, der `components.narrow`-verschachtelten Schicht, und der `components.wide`-verschachtelten Schicht Stile hinzu:

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

- `background-color`: Da ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt der `wheat`-Farbton.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt der `red`-Farbton.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, wobei wichtige Stile in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichterstellung `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass `purple`-Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, sodass nach Deklarationsreihenfolge `20%`-Radius gewinnt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie die Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade#task_2).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechanismen der CSS-Kaskadenschichten vertraut.
