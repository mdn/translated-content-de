---
title: Cascade Layers
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Diese Lektion soll Ihnen [Kaskadenebenen](/de/docs/Web/CSS/@layer) vorstellen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es auf den ersten Blick weniger unmittelbar relevant und etwas theoretischer erscheinen als andere Teile des Kurses. Dennoch ist es hilfreich, die Grundlagen der Kaskadenebenen zu kennen, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadenebenen und die Fähigkeit, ihre Kraft zu nutzen, Ihnen helfen, viel Ärger beim Verwalten einer Codebasis mit CSS aus verschiedenen Quellen, Plug-ins und Entwicklungsteams zu vermeiden.

Kaskadenebenen sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es konfliktbehaftete CSS-Selektoren und konkurrierende Spezifitäten gibt oder wenn Sie darüber nachdenken, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie die <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Stilgrundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Kaskadenebenen funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Stil"-Panel des Tools zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte an, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Stil-Panel durchgestrichene Werte an, die mit dem ausgewählten Element übereinstimmten, jedoch aufgrund der Kaskade, Spezifität oder Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können vom selben Ursprung mit Vorrang stammen, jedoch mit geringerer Spezifität, oder mit übereinstimmendem Ursprung und Spezifität, wurden jedoch früher in der Codebasis gefunden. Falls Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet es, dass der Wert an Ursprung oder Wichtigkeit fehlt.

Oft, wenn die Komplexität einer Seite zunimmt, steigt auch die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenebenen vereinfachen das Wartung von Stylesheets über solche Codebasen hinweg. Kaskadenebenen sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die CSS-Deklarationen ermöglichen, die letztendlich angewendet werden, so dass Webentwickler die Prioritäten von CSS-Sektionen festlegen können, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadenebenen zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die Abschnitte unten bieten eine kurze Zusammenfassung der wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskaden-Konzept

Das 'C' in CSS steht für "Cascading". Es ist die Methode, bei der Stile gemeinsam ablaufen. Der Benutzeragent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann tiefer auf Schritt 4 eingehen, **Kaskadenebenen**, das ist das, was Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektor, der jedes Element übereinstimmt.
2. **Wichtigkeit:** Sortieren Sie Regeln je nachdem, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important) Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie Regeln innerhalb jedes der beiden Wichtigkeitskategorien nach Autor, Benutzer oder Benutzeragent-Ursprung.
4. **Kaskadenebenen:** Sortieren Sie in jedem der sechs Ursprungs-Wichtigkeitsebenen nach Kaskadenebene. Die Ebenenreihenfolge für normale Deklarationen erfolgt von der ersten erstellten Ebene bis zur letzten, gefolgt von nichtschichtigen normalen Stilen. Diese Reihenfolge wird für wichtige Stile umgekehrt, wobei nicht geschichtete wichtige Stile die geringste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungsebene mit Priorität sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Umfangsnähe:** Wenn zwei Selektoren in der Ursprungsebene mit Priorität die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von eingeschlossenen Regeln mit der geringsten Anzahl an Sprüngen die DOM-Hierarchie zum Bereichswurzel hoch. Weitere Details finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungsebene mit Vorrang die gleiche Spezifität und Umfangsnähe haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt rücken nur die "noch im Rennen" befindlichen Deklarationen in den nächsten Schritt vor. Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie und die nachfolgenden Schritte sind irrelevant.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): Benutzeragent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungskategorien nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Priorität: die sechs Ursprungskategorien, Eigenschaften, die sich im Übergang befinden, und Eigenschaften, die sich animieren. Die Reihenfolge der Priorität reicht von normalen Benutzeragent-Stilen, die die niedrigste Priorität haben, zu Stilen innerhalb aktuell angewendeter Animationen, bis hin zu wichtigen Benutzeragent-Stilen und dann Übergangsstilen, die die höchste Priorität haben:

1. Benutzeragent normale Stile
2. Benutzer normale Stile
3. Autor normale Stile
4. Stile, die animiert werden
5. Autor wichtige Stile
6. Benutzer wichtige Stile
7. Benutzeragent wichtige Stile
8. Stile, die übergehen

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Webseiten-Besucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf ein Element mit dem {{HTMLElement('style')}}-Element deklariert sind, sind Autorenstile. Abgesehen von animierenden und übergehenden Stilen haben normale Benutzeragentenstile die niedrigste Priorität; wichtige Benutzeragentenstile die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprung mit Vorrang, basierend auf dem Gewicht (normal oder wichtig). Ignorieren Sie Ebenen für den Moment, wird der Wert aus dem Ursprung mit der höchsten Priorität angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im Beispiel unten gibt es zwei Links. Der erste hat keine Autorenstile angewendet, sodass nur Benutzeragentenstile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die durch Autorenstile gesetzt sind, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass bei konkurrierenden Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Priorität angewendet werden, unabhängig von der Spezifität im Ursprung, der keine Priorität hat.

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

Der "konkurrierende" Selektor im Benutzeragenten-Stylesheet zum Zeitpunkt der Niederschrift dieses Artikels ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Auch wenn dies größer ist als der `0-0-0`-Selektor im Autoren-Stylesheet, selbst wenn der Selektor in Ihrem aktuellen Benutzeragenten anders ist, spielt es keine Rolle: Die Spezifitätsgewichte aus Autoren- und Benutzeragenten-Ursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungspräferenz gewinnt immer über Selektorspezifität. Wenn eine Element-Eigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder Benutzeragenten-Stylesheet deklariert sind. Wenn der Stil wichtig ist, wird das Benutzeragent-Stylesheet immer über Autoren- und Benutzerstile gewinnen. Die Kaskadenursprungspräferenz sorgt dafür, dass Spezifitäts-Konflikte zwischen Ursprüngen nie auftreten.

Eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Erscheinens wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprungsbereich mit der gleichen Spezifität bestehen.

## Übersicht über Kaskadenebenen

Wir verstehen jetzt die "Kaskadenursprungspräferenz", aber was ist die "Kaskadenebenenpräferenz"? Wir beantworten diese Frage, indem wir darauf eingehen, was Kaskadenebenen sind, wie sie geordnet sind und wie Stile Kaskadenebenen zugewiesen werden. Wir werden [reguläre Ebenen](#erstellen_von_kaskadenebenen), [verschachtelte Ebenen](#überblick_über_verschachtelte_kaskadenebenen) und anonyme Ebenen behandeln. Lassen Sie uns zunächst diskutieren, was Kaskadenebenen sind und welche Probleme sie lösen.

### Reihenfolge der Präferenz von Kaskadenebenen

Ähnlich wie wir sechs Prioritätsebenen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenebenen uns, eine Subs-Origin-Priorität innerhalb eines dieser Ursprünge zu erstellen.

Innerhalb jeder der sechs Ursprungskategorien kann es mehrere Kaskadenebenen geben. Die [Reihenfolge der Ebenenerstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Präferenzreihenfolge unter den Ebenen innerhalb eines Ursprungs festlegt.

In normalen Ursprungskategorien werden die Ebenen in der Reihenfolge jeder Ebenenerstellung sortiert. Die Reihenfolge der Präferenz erfolgt von der ersten erstellten Ebene bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile fließen zusammen in eine implizite Ebene, die Vorrang vor allen nicht übergehenden normalen Stilen hat. Die nicht geschichteten wichtigen Stile haben eine geringere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Ebenen haben Vorrang vor den wichtigen Stilen in nachträglich deklarierten Ebenen innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber bedenken Sie, dass Ebenen auch in Benutzer- und Benutzeragenten-Stylesheets existieren können.

### Probleme, die Kaskadenebenen lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Egal, wie viele Stylesheets enthalten sind, all diese Stile fließen in einem einzigen Ursprung zusammen: dem _Autoren_-Stylesheet.

Stile aus vielen Quellen zusammenfließen zu haben, insbesondere von Teams, die nicht zusammenarbeiten, kann Probleme schaffen. Verschiedene Teams können unterschiedliche Methoden haben; eines kann eine Best Practice haben, die Spezifität zu reduzieren, während ein anderes eine Norm hat, eine `id` in jeden Selektor einzuschließen.

Spezifitätskonflikte können sich schnell eskalieren. Ein Webentwickler kann einen "Quick-Fix" schaffen, indem er ein `!important`-Flag hinzufügt. Während dies wie eine einfache Lösung erscheinen mag, verschiebt es oft nur den Spezifizitätskrieg von normalen zu wichtigen Deklarationen.

Genau wie Kaskadenursprünge ein Gleichgewicht der Macht zwischen Benutzer-, Benutzeragenten- und Autorenstilen bieten, bieten Kaskadenebenen eine strukturierte Möglichkeit, Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszubalancieren, als ob jede Ebene innerhalb eines Ursprungs ein Sub-Origin wäre. Für jedes Team, jede Komponente und jede Drittanbieteranwendung kann eine Ebene erstellt werden, wobei die Stilpräferenz auf der Ebenenreihenfolge basiert.

Regeln innerhalb einer Ebene fließen zusammen, ohne mit Stilregeln außerhalb der Ebene zu konkurrieren. Kaskadenebenen ermöglichen es, gesamte Stylesheets über andere Stylesheets zu priorisieren, ohne sich Gedanken über Spezifität zwischen diesen Sub-Ursprüngen machen zu müssen.

Die Präferenz der Ebene schlägt immer die Selektorspezifität. Stile in Ebenen mit Vorrang "gewinnen" gegenüber Ebenen mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Ebene ist irrelevant. Spezifität spielt immer noch eine Rolle für konkurrierende Eigenschaftswerte innerhalb einer Ebene, aber es gibt keine Spezifitätskonflikte zwischen Ebenen, da nur die höchste Prioritätsebene für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenebenen lösen können

Kaskadenebenen ermöglichen die Erstellung von verschachtelten Ebenen. Jede Kaskadenebene, sogar eine anonyme, kann verschachtelte Ebenen enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Ebene importiert werden. Eine reguläre Kaskadenebene fügt die Komponentenbibliothek dem Autoren-Ursprung hinzu und entfernt jegliche Spezifitätskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Ebene kann ein Entwickler verschiedene Themen definieren, jeweils als separate verschachtelte Ebene. Die Reihenfolge dieser verschachtelten Themenebenen kann basierend auf Media Queries definiert werden (siehe den Abschnitt [Ebenenerstellung und Media Queries](#ebenenerstellung_und_media_queries) unten), wie z.B. Bildschirmgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Ebenen bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifität basierend in Konflikt geraten.

Die Fähigkeit, Ebenen zu verschachteln, ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeitet.

Die Fähigkeit, verschachtelte Ebenen zu erstellen, beseitigt auch die Sorge, gleichnamige Ebenen zu haben. Wir werden dies im Abschnitt [verschachtelte Ebenen](#überblick_über_verschachtelte_kaskadenebenen) behandeln.

> "Autoren können Ebenen erstellen, um Element-Defaults, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Styling-Bedenken zu repräsentieren – und sind in der Lage, den Kaskadenablauf der Ebenen auf eine explizite Art und Weise neu zu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Ebene zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen Ebenen zu lösen."
>
> —[CSS-Cascade und Vererbungsspezifikation](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Kaskadenebenen

Ebenen können mit einer der folgenden Methoden erstellt werden:

- Das Attribut [`@layer`](/de/docs/Web/CSS/@layer), durch das Deklarieren von Ebenen mit `@layer`, gefolgt von den Namen einer oder mehrerer Ebenen. Dadurch werden benannte Ebenen erstellt, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Blockregel, in der alle Stile innerhalb eines Blocks zu einer benannten oder unbenannten Ebene hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem Schlüsselwort `layer` oder der Funktion `layer()`, die den Inhalt der importierten Datei dieser Ebene zuweist.

Alle drei Methoden erstellen eine Ebene, wenn eine Ebene mit diesem Namen noch nicht initialisiert wurde. Wenn kein Ebenenname in der `@layer`-Regel oder `@import` mit `layer()` angegeben wird, wird eine neue anonyme (unbenannte) Ebene erstellt.

> [!NOTE]
> Die Reihenfolge der Ebenenpräferenz ist die Reihenfolge, in der sie erstellt werden. Stile, die sich nicht in einer Ebene befinden, oder "nicht geschichtete Stile" fließen zusammen in eine letzte implizite Ebene.

Behandeln wir die drei Möglichkeiten, eine Ebene zu erstellen, etwas ausführlicher, bevor wir über verschachtelte Ebenen sprechen.

### Die @layer-Anweisung für benannte Ebenen

Die Reihenfolge von Ebenen ist durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. Das Deklarieren von Ebenen mit `@layer`, gefolgt von den Namen einer oder mehrerer Ebenen ohne Zuweisung von Stilen, ist eine Möglichkeit, die [Ebenenreihenfolge](#bestimmen_der_präferenz_basierend_auf_der_reihenfolge_der_ebenen) festzulegen.

Die CSS-Attributregel [`@layer`](/de/docs/Web/CSS/@layer) wird verwendet, um eine Kaskadenebene zu deklarieren und die Reihenfolge der Präferenz festzulegen, wenn es mehrere Kaskadenebenen gibt. Die folgende Attributregel deklariert drei Ebenen in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Häufig möchten Sie, dass Ihre erste Zeile CSS diese `@layer`-Deklaration ist (natürlich mit Namen, die für Ihre Seite sinnvoll sind), um die vollständige Kontrolle über die Reihenfolge der Ebenen zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Seite ist, wird die Ebenenreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Ebenen vor der obigen Anweisung erstellt wurden, werden diese drei Ebenen, solange sie nicht bereits existieren, erstellt und am Ende der Liste der bestehenden Ebenen hinzugefügt. Wenn jedoch eine Ebene mit demselben Namen bereits existiert, erstellt die obige Anweisung nur zwei neue Ebenen. Zum Beispiel, wenn `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Ebenen wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer-Blockregel für benannte und anonyme Ebenen

Ebenen können mit der Blockregel `@layer` erstellt werden. Wenn eine `@layer`-Regel von einem Identifikator und einem Block von Stilen gefolgt wird, wird der Identifikator verwendet, um die Ebene zu benennen, und die Stile in dieser Regel werden den Stilen der Ebene hinzugefügt. Wenn eine Ebene mit dem angegebenen Namen noch nicht existiert, wird eine neue Ebene erstellt. Wenn eine Ebene mit dem angegebenen Namen bereits existiert, werden die Stile der bereits bestehenden Ebene hinzugefügt. Wenn beim Erstellen eines Stilblocks mit `@layer` kein Name angegeben wird, werden die Stile in der Regel einer neuen anonymen Ebene hinzugefügt.

Im Beispiel unten haben wir vier `@layer`-Blockregeln und eine `@layer`-Anweisungsregel verwendet. Dieses CSS führt die folgenden Aktionen in der angegebenen Reihenfolge aus:

1. Erstellt eine benannte `layout`-Ebene
2. Erstellt eine unbenannte, anonyme Ebene
3. Deklariert eine Liste von drei Ebenen und erstellt nur zwei neue Ebenen, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt zusätzliche Stile der bereits existierenden `layout`-Ebene hinzu
5. Erstellt eine zweite unbenannte, anonyme Ebene

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

In dem oben gezeigten CSS haben wir fünf Ebenen erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Ebene nicht geschichteter Stile im `body`-Stilblock enthalten. Die Reihenfolge der Ebenen ist die Reihenfolge, in der die Ebenen erstellt wurden, wobei die implizite Ebene nicht geschichteter Stile immer die letzte ist. Es gibt keine Möglichkeit, die Ebenenreihenfolge nach der Erstellung zu ändern.

Wir haben einige Stile der benannten Ebene `layout` zugewiesen. Wenn eine benannte Ebene noch nicht existiert, wird deren Name in einer `@layer`-Regel angegeben – mit oder ohne die Zuweisung von Stilen zur Ebene –, wodurch die Ebene erstellt wird; dies fügt die Ebene am Ende der Serie bestehender Ebenennamen hinzu. Wenn die benannte Ebene bereits existiert, werden alle Stile innerhalb des benannten Blocks den Stilen in der bereits bestehenden Ebene hinzugefügt – das Spezifizieren von Stilen in einem Block durch Wiederverwendung eines bestehenden Ebenennamens erstellt keine neue Ebene.

Anonyme Ebenen werden erstellt, indem Stilen einer Ebene zugewiesen werden, ohne die Ebene zu benennen. Stile können nur bei der Erstellung einer unbenannten Ebene zu einer solchen hinzugefügt werden.

> [!NOTE]
> Die nachträgliche Verwendung von `@layer` ohne Ebenennamen erstellt zusätzliche unbenannte Ebenen; es fügt keine Stile zu einer bereits existierenden unbenannten Ebene hinzu.

Die `@layer`-Regel erstellt eine Ebene, entweder benannt oder nicht, oder fügt Stile einer Ebene hinzu, wenn die benannte Ebene bereits existiert. Wir nannten die erste anonyme Ebene `<anonymous(01)>` und die zweite `<anonymous(02)>`, dies ist nur, damit wir sie erklären können. Diese sind eigentlich unbenannte Ebenen. Es gibt keine Möglichkeit, sie zu referenzieren oder zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Ebene deklarierten Stile werden in einer impliziten Ebene zusammengefügt. In dem obigen Beispiel haben wir zunächst die Eigenschaft `color: #333333` auf `body` gesetzt. Dies wurde außerhalb jeglicher Ebene deklariert. Normale nicht geschichtete Deklarationen haben Vorrang vor normal geschichteten Deklarationen, selbst wenn die nicht geschichteten Stile eine geringere Spezifität haben und zuerst in der Erscheinungsreihenfolge auftauchen. Dies erklärt, warum die implizite Ebene, die diese nicht geschichteten Stile enthält, trotz der Tatsache, dass der nicht geschichtete CSS-Block zuerst im Codeblock deklariert wurde, Vorrang hat, als ob sie die letzte erklärte Ebene wäre.

In der Zeile `@layer theme, layout, utilities;`, in der eine Serie von Ebenen deklariert wurde, wurden nur die Ebenen `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Diese Deklaration ändert die Reihenfolge der bereits erstellten Ebenen nicht. Derzeit gibt es keine Möglichkeit, Ebenen nach der Deklaration neu zu ordnen.

Im folgenden Beispiel weisen wir zwei Ebenen Stile zu, erstellen sie und benennen sie währenddessen. Da sie bereits existieren und bei der ersten Verwendung erstellt wurden, hat deren Deklaration in der letzten Zeile keine Wirkung.

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

Versuchen Sie, die letzte Zeile `@layer site, page;` nach oben zu verschieben. Was passiert?

#### Ebenenerstellung und Media Queries

Wenn Sie eine Ebene mittels [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)- oder [Feature-](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)Queries definieren und das Medium kein Match ist oder das Feature nicht unterstützt wird, wird die Ebene nicht erstellt. Das folgende Beispiel zeigt, wie das Ändern der Größe Ihres Geräts oder Browsers die Ebenenreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site`-Ebene nur in breiteren Browsern. Wir weisen dann in dieser Reihenfolge der `page`- und der `site`-Ebene Stile zu.

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

In großen Bildschirmen ist die `site`-Ebene in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Andernfalls hat `site` Vorrang vor `page`, da sie auf schmalen Bildschirmen später deklariert wird. Wenn es nicht funktioniert, versuchen Sie, die `50em` in der Media Query auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Ebenen mit @import

Die Regel [`@import`](/de/docs/Web/CSS/@import) erlaubt Nutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Wenn Stylesheets importiert werden, muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann jedoch durch eine `@layer`-Regel vorangehen, die eine oder mehrere Ebenen erstellt, ohne ihnen Stile zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel vorangehen.)

Sie können ein Stylesheet in eine benannte Ebene, eine geschachtelte benannte Ebene oder eine anonyme Ebene importieren. Die folgende Ebene importiert die Stylesheets in eine `components`-Ebene, eine geschachtelte `dialog`-Ebene innerhalb der `components`-Ebene und eine unbenannte Ebene:

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

Sie können Stile importieren und Ebenen basierend auf bestimmten Bedingungen erstellen, indem Sie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Die folgende Importieregale ein Stylesheet in eine `international`-Ebene, nur wenn der Browser `display: ruby` unterstützt, und die importierte Datei ist abhängig von der Bildschirmbreite.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent der {{HTMLElement('link')}}-Methode des Verlinkens von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Ebene zu importieren, wenn Sie `@layer` innerhalb des Stylesheets nicht verwenden können.

## Überblick über verschachtelte Kaskadenebenen

Verschachtelte Ebenen sind Ebenen innerhalb einer benannten oder anonymen Ebene. Jede Kaskadenebene, sogar eine anonyme, kann verschachtelte Ebenen enthalten. Ebenen, die in eine andere Ebene importiert werden, werden zu verschachtelten Ebenen innerhalb dieser Ebene.

### Vorteile des Verschachtelns von Ebenen

Die Möglichkeit, Ebenen zu verschachteln, ermöglicht Teams, Kaskadenebenen zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in eine Ebene importieren werden. Ebenso ermöglicht das Verschachteln, dass Sie Drittanbieter-Stylesheets in eine Ebene importieren, ohne sich Sorgen machen zu müssen, ob dieses Stylesheet selbst Ebenen hat. Da Ebenen verschachtelt werden können, müssen Sie sich keine Sorgen über gleichnamige Ebenen zwischen externen und internen Stylesheets machen.

### Erstellen von verschachtelten Kaskadenebenen

Verschachtelte Ebenen können mit den gleichen Methoden wie reguläre Ebenen erstellt werden. Zum Beispiel können sie erstellt werden, indem die `@layer`-Regel gefolgt von den Namen einer oder mehrerer Ebenen mit Punktnotation verwendet wird. Mehrere Punkte und Ebenennamen signalisieren mehrere Verschachtelungen.

Wenn Sie ein Block `@layer`-Regel innerhalb einer anderen Block `@layer`-Regel, mit oder ohne Namen, verschachteln, wird der verschachtelte Block zu einer verschachtelten Ebene. Ebenso werden, wenn ein Stylesheet mit einer `@import`-Deklaration importiert wird, die das Schlüsselwort `layer` oder die Funktion `layer()` enthält, die Stile dieser benannten oder anonymen Ebene zugewiesen. Wenn die `@import`-Anweisung Ebenen enthält, werden diese Ebenen zu verschachtelten Ebenen innerhalb dieser anonymen oder benannten Ebene.

Sehen wir uns das folgende Beispiel an:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Ebene. Wenn diese Datei Ebenen enthält, benannt oder nicht, werden diese Ebenen zu verschachtelten Ebenen innerhalb der `components`-Ebene.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Ebene, die eine Unterebene der `components`-Ebene ist. Die verschachtelte `components.narrow` wird als letzte Ebene innerhalb der `components`-Ebene erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Ebene, in welchem Fall der Inhalt von `narrow-theme.css` der verschachtelten `components.narrow`-Ebene hinzugefügt würde. Weitere verschachtelte benannte Ebenen können der `components`-Ebene mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Ebenen erstellt werden, aber sie können anschließend nicht mehr aufgerufen werden.

Sehen wir uns ein weiteres Beispiel an, in dem wir [importieren `layers1.css` in eine benannte Ebene](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import "layers1.css" layer(example);
```

Dies erstellt eine einzelne Ebene namens `example`, die einige Deklarationen und fünf verschachtelte Ebenen enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Ebene hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen der Präferenz basierend auf der Reihenfolge der Ebenen

Die Reihenfolge der Ebenen bestimmt deren Präferenzreihenfolge. Daher ist die Reihenfolge der Ebenen sehr wichtig. Genauso wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsebene und Wichtigkeit.

### Präferenzreihenfolge von regulären Kaskadenebenen

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Ebenen (Stile in C.css werden der impliziten Ebene nicht geschichteter Stile hinzugefügt). Angenommen, die drei Dateien (`A.css`, `B.css` und `C.css`) enthalten keine zusätzlichen Ebenen. Die folgende Liste zeigt, wo deklarierte Stile innerhalb und außerhalb dieser Dateien nach den am wenigsten (1) bis höchsten (10) Prioritäten sortiert werden:

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. nicht geschichtete normale Stile (`C.css`)
4. Inline normale Stile
5. animierende Stile
6. nicht geschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. übergehende Stile

Normale Stile, die innerhalb von Ebenen deklariert sind, haben die niedrigste Priorität und werden in der Reihenfolge der Erstellung der Ebenen sortiert. Normale Stile in der ersten erstellten Ebene haben die niedrigste Priorität, und normale Stile in der zuletzt erstellten Ebene haben die höchste Priorität unter den Ebenen. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert sind, werden von jeder weiteren Stiländerung auf der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb von Ebenen deklariert sind. Die Stile in `C.css` wurden nicht in eine Ebene importiert und überschreiben alle in `firstLayer` und `secondLayer` auftretenden Konflikte. Stile, die nicht in einer Ebene deklariert sind, haben immer eine höhere Priorität als Stile, die in einer Ebene deklariert _sind_ (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale auf diese Weise deklarierte Stile haben Vorrang vor normalen Stilen, die in den nicht geschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) gefunden werden.

Animierende Stile haben höhere Priorität als alle normalen Stile, einschließlich Inline-Normalstilen.

Wichtige Stile, also Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen Stilen, die zuvor in unserer Liste erwähnt wurden. Sie sind in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Ebene deklariert sind, haben weniger Priorität als die innerhalb einer Ebene deklarierten. Auch wichtige Stile innerhalb von Ebenen sind in der Reihenfolge der Ebenenerstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Ebene die niedrigste Priorität, und die zuerst erstellte Ebene hat die höchste Priorität unter den deklarierten Ebenen.

Inline wichtige Stile haben wieder höhere Priorität als wichtig deklarierte Stile anderswo.

Übergehende Stile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert übergeht, hat er Vorrang vor allen anderen Eigenschaftswert-Deklarationen, sogar vor Inline-wichtigen Stilen; jedoch nur während des Übergangs.

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

In diesem Beispiel wurden zwei Ebenen (`A` und `B`) initial mit einer `@layer`-Anweisungsregel ohne Stile definiert. Die Layer-Stile sind in zwei `@layer`-Blockregeln definiert, die nach der `h1` CSS-Regel erscheinen, die außerhalb von Ebenen deklariert ist.

Die Inline-Stile, die auf das `h1`-Element unter Verwendung des `style`-Attributs angewandt wurden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungegliederten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit, dass Autorenstile wichtige Inline-Stile überschreiben.

Der normale `text-decoration` und der wichtige `box-shadow` sind nicht Teil des `style` Inline-Stils und können daher überschrieben werden. Für normale nicht inline-Stile haben geschichtete Stile Vorrang. Für wichtige Stile zählt auch die Ebenenreihenfolge. Während normale ungelayerte Stile alle normalen Stile, die in einer Ebene festgelegt sind, überschreiten, ist die Vorrangsreihenfolge für wichtige Stile umgekehrt; ungelayerte wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die zwei Stile, die nur innerhalb von Ebenen deklariert sind, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Für normale Stile überschreibt die zuletzt deklarierte Ebene `B` Stile in der zuvor deklarierten Ebene `A`. Für normale Stile haben spätere Ebenen Vorrang vor früheren Ebenen. Die Ordnung der Präferenz ist für wichtige Stile umgekehrt. Für die wichtigen `font-weight`-Deklarationen hat die zuerst deklarierte Ebene `A` Vorrang vor der zuletzt deklarierten Ebene `B`.

Sie können die Ebenenreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Probieren Sie das aus. Welche Stile werden dadurch geändert und welche bleiben gleich? Warum?

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir die Reihenfolge der Schichten erklärt, ohne Stile mit `@layer` gefolgt von den Namen unserer Schichten hinzuzufügen und durch ein Semikolon zu beenden. Hätten wir diese Zeile weggelassen, wären die Ergebnisse die gleichen. Warum? Wir haben Stile in benannten `@layer`-Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Ebenen wurden in jener ersten Zeile erstellt. Wären sie es nicht gewesen, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen aufgenommen: Erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass das Deklarieren der Reiheneinteilung von Anfang an die beste Praxis für ihr Ebenenordnungsmanagement ist.

Zusammenfassend:

- Die Reihenfolge der Ebenenpräferenz ist die Reihenfolge, in der die Ebenen erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Ebenenreihenfolge zu ändern.
- Layer-Priorität für normale Stile ist die Reihenfolge, in der die Ebenen erstellt werden.
- Normale nicht geschichtete Stile haben Vorrang vor normalen geschichteten Stilen.
- Layer-Priorität für wichtige Stile ist umgekehrt, wobei früher erstellte Ebenen Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor nicht geschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von Stilen, die sich im Übergang befinden.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was nur temporär ist).

### Präferenzordnung verschachtelter Kaskadenebenen

Die Kaskadenpräferenzordnung verschachtelter Ebenen ist der für reguläre Ebenen ähnlich, jedoch innerhalb der Ebene enthalten. Die Reihenfolge der Präferenz basiert auf der Reihenfolge der Erstellung von verschachtelten Ebenen. Nicht verschachtelte Stile innerhalb einer Ebene haben Vorrang vor normalen verschachtelten Stilen, wobei die Präferenzordnung für wichtige Stile umgekehrt ist. Spezifitätsgewicht zwischen verschachtelten Ebenen spielt keine Rolle, jedoch spielt es eine Rolle für konkurrierende Stile innerhalb einer verschachtelten Ebene.

Das folgende Beispiel erstellt und fügt der `components`-Ebene, der `components.narrow` verschachtelten Ebene, und der `components.wide` verschachtelten Ebene Stile hinzu:

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

- `background-color`: Da ungegliederte normale Stile Vorrang vor gegliederten normalen Stilen haben, gewinnt `wheat`.
- `border`: Da innerhalb einer Ebene nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt `red`.
- `color`: Bei wichtigen Stilen haben gegliederte Stile Vorrang vor nicht gegliederten Stilen, wobei wichtige Stile in früher erklärten Ebenen Vorrang vor später erklärten Ebenen haben. In diesem Beispiel ist die Reihenfolge der Erstellung von verschachtelten Ebenen `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet `purple` gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Ebenen festgelegt, also gewinnt `20%`, je nach Deklarationsreihenfolge.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren - siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade#task_2).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie sind jetzt mit den grundlegenden Mechanismen von CSS-Kaskadenebenen vertraut.
