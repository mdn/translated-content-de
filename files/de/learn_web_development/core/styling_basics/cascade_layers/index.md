---
title: Kaskadierungsebenen
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

Diese Lektion soll Sie in [Kaskadierungsebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) einführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und der [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) basiert.

Wenn Sie neu in CSS sind, mag das Durcharbeiten dieser Lektion weniger unmittelbar relevant und ein wenig mehr theoretisch erscheinen als einige andere Teile des Kurses. Dennoch ist es hilfreich, die Grundlagen von Kaskadierungsebenen zu kennen, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadierungsebenen und deren Nutzung Ihnen helfen, den Umgang mit einem Codebestand mit CSS von verschiedenen Parteien, Plugins und Entwicklerteams zu erleichtern.

Kaskadierungsebenen sind am relevantesten, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es zu Konflikten bei CSS-Selektoren und konkurrierenden Spezifitäten kommen kann, oder wenn Sie erwägen, {{cssxref("important", "!important")}} zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen des CSS-Stylings</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie Kaskadierungsebenen funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede auf ein Element angewendete CSS-Eigenschaft kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Styles"-Panel des Tools zeigt alle angewendeten Eigenschaftswerte des inspizierten Elements zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei an. Der Selektor aus der Quelle mit der höchsten Priorität hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel durchgestrichene Werte an, die mit dem ausgewählten Element übereinstimmten, aber aufgrund der Kaskade, der Spezifität oder der Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus derselben Quelle mit Priorität stammen, aber mit geringerer Spezifität, oder mit übereinstimmendem Ursprung und Spezifität, wurden jedoch früher im Codebasen gefunden. Für jeden angewendeten Eigenschaftswert kann es mehrere durchgestrichene Deklarationen aus vielen verschiedenen Quellen geben. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet dies, dass dem Wert der Ursprung oder die Wichtigkeit fehlt.

Oft, wenn die Komplexität einer Website zunimmt, steigt auch die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadierungsebenen vereinfachen die Wartung von Stylesheets über solche Codebasen hinweg. Kaskadierungsebenen sind explizite Spezifitätscontainer, die eine einfachere und bessere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten, wodurch Webentwickler in der Lage sind, Abschnitte von CSS zu priorisieren, ohne gegen Spezifitätsprobleme ankämpfen zu müssen.

Um Kaskadierungsebenen zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading" (Kaskadierung). Es ist die Methode, mit der Stile zusammenlaufen. Der Benutzeragent durchläuft mehrere eindeutig definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir listen diese Schritte hier kurz auf und gehen dann näher auf Schritt 4 ein, **Kaskadierungsebenen**, was Sie hier lernen sollen:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem übereinstimmenden Selektor für jedes Element.
2. **Wichtigkeit:** Sortieren Sie die Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das {{cssxref("important", "!important")}}-Flag gesetzt haben.
3. **Ursprung:** Innerhalb jedes der beiden Wichtigkeitsbereiche Sortieren nach Autor-, Benutzer- oder Benutzeragenten-Ursprung.
4. **Kaskadierungsebenen:** Innerhalb jeder der sechs Ursprungs-Wichtigkeitsbereiche sortieren nach Kaskadierungsebene. Die Ebenenreihenfolge für normale Deklarationen ist von der ersten erstellten Ebene bis zur letzten, gefolgt von unebenmäßigen normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei unebenmäßige wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungs-Ebene mit Vorrang sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity).
6. **Umfangsnähe:** Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von skopierten Regeln mit der geringsten Anzahl von Sprüngen in der DOM-Hierarchie bis zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifität und Nähe zum Umfang haben, gewinnt der Eigenschaftswert vom zuletzt erklärten Selektor mit der höchsten Spezifität.

Für jeden Schritt bewegen sich nur die Deklarationen "noch im Rennen" weiter, um im nächsten Schritt "zu konkurrieren". Wenn nur eine Deklaration im Rennen ist, "gewinnt" diese, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types): Benutzeragenten-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungsbereiche nach Ursprung und Wichtigkeit. Es gibt acht Prioritätsstufen: die sechs Ursprungsbereiche, sich ändernde Eigenschaften und animierende Eigenschaften. Die Prioritätsreihenfolge reicht von normalen Benutzeragenten-Stilen, die die geringste Priorität haben, bis hin zu Stilen innerhalb der derzeit angewendeten Animationen, über wichtige Benutzeragenten-Stile bis hin zu Stilen, die die höchste Priorität haben:

1. Benutzeragent normale Stile
2. Benutzer normale Stile
3. Autor normale Stile
4. Stile werden animiert
5. Autor wichtige Stile
6. Benutzer wichtige Stile
7. Benutzeragent wichtige Stile
8. Stile werden übergeblendet

Der "Benutzeragent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie als Entwickler. Stile, die direkt auf einem Element mit dem {{HTMLElement('style')}}-Element deklariert werden, sind Autorenstile. Ohne animierende und übergehende Stile haben Benutzeragent normale Stile die geringste Priorität; Benutzeragent wichtige Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Wenn wir die Ebenen im Moment ignorieren, wird der Wert aus dem Ursprung mit der höchsten Priorität angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im Beispiel unten gibt es zwei Links. Der erste hat keine Autorenstile angewendet, sodass nur Benutzeragent-Stile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat {{cssxref("text-decoration")}} und {{cssxref("color")}} durch Autorenstile gesetzt, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/Guides/Cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass bei Konflikten zwischen Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität im Ursprung, der keinen Vorrang hat.

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

Der "konkurrierende" Selektor im Benutzeragenten-Stylesheet zum Zeitpunkt des Schreibens ist `a:any-link`, das eine Spezifitätsgewichtung von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0`-Selektor im Autoren-Stylesheet, spielt es keine Rolle, ob der Selektor in Ihrem aktuellen Benutzeragenten unterschiedlich ist: Die Spezifikationsgewichte von Autoren- und Benutzeragenten-Ursprüngen werden nie verglichen. Erfahren Sie mehr darüber, [wie Spezifikationsgewichte berechnet werden](/de/docs/Web/CSS/Guides/Cascade/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer gegenüber Selector-Spezifizität. Wenn eine Elementeigenschaft mit einer normalen Style-Deklaration in mehreren Ursprüngen gestaltet wird, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder Benutzeragenten-Stylesheet deklariert sind. Wenn der Stil wichtig ist, wird das Benutzeragenten-Stylesheet immer über Autoren- und Benutzerstile gewinnen. Der Ursprungsvorrang der Kaskade stellt sicher, dass Spezifikationskonflikte zwischen Ursprüngen nie auftreten.

Noch eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Erscheinens wird nur relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs die gleiche Spezifizität aufweisen.

## Überblick über Kaskadierungsebenen

Wir verstehen jetzt die "Ursprungsvorrang der Kaskade", aber was ist "Präzedenz der Kaskadierungsebene"? Wir werden diese Frage beantworten, indem wir erklären, was Kaskadierungsebenen sind, wie sie geordnet werden und wie Stile Kaskadierungsebenen zugewiesen werden. Wir behandeln [reguläre Ebenen](#erstellen_von_kaskadierungsebenen), [verschachtelte Ebenen](#überblick_über_verschachtelte_kaskadierungsebenen) und anonyme Ebenen. Lassen Sie uns zuerst darüber sprechen, was Kaskadierungsebenen sind und welche Probleme sie lösen.

### Reihenfolge der Präzedenz von Kaskadierungsebenen

Ähnlich wie wir sechs Prioritätsstufen basierend auf Ursprung und Wichtigkeit haben, ermöglichen uns Kaskadierungsebenen die Erstellung von Unter-Ursprungspriorität innerhalb eines dieser Ursprünge.

Innerhalb jedes der sechs Ursprungseimer kann es mehrere Kaskadierungsebenen geben. Die [Reihenfolge der Ebenenerstellung](/de/docs/Web/CSS/Reference/At-rules/@layer) ist sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Präzedenzreihenfolge zwischen Ebenen innerhalb eines Ursprungs festlegt.

In normalen Ursprungseimern werden Ebenen in der Reihenfolge der Erstellung jeder Ebene sortiert. Die Reihenfolge der Präzedenz ist von der ersten erstellten Ebene bis zur letzten, gefolgt von unebenmäßigen normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle unebenmäßigen wichtigen Stile kumulieren sich in einer impliziten Ebene mit Vorrang vor allen nicht übergehenden normalen Stilen. Die unebenmäßigen wichtigen Stile haben eine geringere Präzedenz als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Ebenen haben Vorrang vor den wichtigen Stilen in später deklarierten Ebenen innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir uns auf Autorenstile beschränken, aber denken Sie daran, dass Ebenen auch in Benutzer- und Benutzeragenten-Stylesheets existieren können.

### Probleme, die Kaskadierungsebenen lösen können

Große Codebasen können Stile aus mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Egal, wie viele Stylesheets einbezogen werden, all diese Stile kaskadieren zusammen in einem einzigen Ursprung: das _Autoren_-Stylesheet.

Dass Stile aus vielen Quellen zusammen kaskadieren, insbesondere aus Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Verschiedene Teams können unterschiedliche Methodologien haben; eines könnte es als beste Praxis ansehen, die Spezifität zu reduzieren, während ein anderes es als Standard betrachtet, jedes Mal eine Kennung in jeden Selektor einzuschließen.

Spezifikationskonflikte können schnell eskalieren. Ein Webentwickler könnte einen "schnellen Fix" erstellen, indem er ein `!important`-Flag hinzufügt. Auch wenn dies wie eine einfache Lösung erscheinen mag, bewegt es den Spezifitätskrieg oft nur von normalen zu wichtigen Deklarationen.

Ebenso wie Kaskadenursprünge ein Machtgleichgewicht zwischen Benutzer-, Benutzeragenten- und Autorenstilen bieten, bieten Kaskadierungsebenen eine strukturierte Möglichkeit, Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszubalancieren, als ob jede Ebene in einem Ursprung ein Unter-Ursprung wäre. Eine Ebene kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, wobei die Stilpriorität auf der Ebenenreihenfolge basiert.

Regeln innerhalb einer Ebene kaskadieren zusammen, ohne mit Stilregeln außerhalb der Ebene zu konkurrieren. Kaskadierungsebenen ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich Gedanken über Spezifität zwischen diesen Unter-Ursprüngen machen zu müssen.

Ebenenpräzedenz schlägt immer die Selektorspezifizität. Stile in Ebenen mit Präzedenz "gewinnen" gegenüber Ebenen mit weniger Präzedenz. Die Spezifität eines Selektors in einer verlierenden Ebene ist irrelevant. Spezifität ist immer noch wichtig für konkurrierende Eigenschaftswerte innerhalb einer Ebene, aber es gibt keine Spezifikationsprobleme zwischen Ebenen, da nur die Ebene mit der höchsten Priorität für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadierungsebenen lösen können

Kaskadierungsebenen ermöglichen die Erstellung verschachtelter Ebenen. Jede Kaskadierungsebene kann verschachtelte Ebenen enthalten.

Beispielsweise kann eine Komponentenbibliothek in eine `Komponenten`-Ebene importiert werden. Eine reguläre Kaskadierungsebene fügt die Komponentenbibliothek zum Autorenursprung hinzu und entfernt alle Spezifikationskonflikte mit anderen Autorenstilen. Innerhalb der `Komponenten`-Ebene kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Ebene. Die Reihenfolge dieser verschachtelten Themenebenen kann basierend auf Medienabfragen (siehe den Abschnitt [Ebenenerstellung und Medienabfragen](#ebenenerstellung_und_medienabfragen) unten) definiert werden, z. B. Bildschirmgröße oder [Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@media/orientation). Diese verschachtelten Ebenen bieten eine Möglichkeit, Themen zu erstellen, die nicht durch Spezifikationen im Konflikt stehen.

Die Möglichkeit, verschachtelte Ebenen zu erstellen, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeiten.

Die Möglichkeit, verschachtelte Ebenen zu erstellen, beseitigt auch die Sorge, sich überschneidende Ebenennamen zu haben. Wir werden dies im Abschnitt [verschachtelte Ebenen](#überblick_über_verschachtelte_kaskadierungsebenen) behandeln.

> "Autoren können Ebenen erstellen, um Standardwerte von Elementen, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Styles zu repräsentieren – und in der Lage sein, die Kaskade der Ebenen auf eine explizite Weise neu zu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Ebene zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen Ebenen zu lösen."
>
> —[Kaskaden- und Vererbungs-Spezifikation](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellen von Kaskadierungsebenen

Ebenen können auf eine der folgenden Arten erstellt werden:

- Mit der {{cssxref("@layer")}}-Anweisung, die Ebenen mit `@layer` gefolgt von den Namen einer oder mehrerer Ebenen deklariert. Dies erstellt benannte Ebenen, ohne diesen Stile zuzuweisen.
- Mit der `@layer`-Blockanweisung, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Ebene hinzugefügt werden.
- Mit der {{cssxref("@import")}}-Regel in Kombination mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei in diese Ebene einfügt.

Alle drei Methoden erstellen eine Ebene, wenn noch keine Ebene mit diesem Namen initialisiert wurde. Wird in der `@layer`-Anweisung oder beim `@import` mit `layer()` kein Ebenenname angegeben, wird eine neue anonyme (ungenannte) Ebene erstellt.

> [!NOTE]
> Die Reihenfolge der Präzedenz der Ebenen ist die Reihenfolge, in der sie erstellt werden. Stile, die sich nicht in einer Ebene befinden, oder "unebenmäßige Stile" kaskadieren gemeinsam in einer letzten impliziten Bezeichnung.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Ebene etwas genauer betrachten, bevor wir verschachtelte Ebenen besprechen.

### Die @layer-Anweisung für benannte Ebenen

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. Das Deklarieren von Ebenen mit `@layer` gefolgt von den Namen einer oder mehrerer Ebenen ohne Zuweisung von Stilen ist eine Möglichkeit, die [Ebenenreihenfolge](#bestimmung_der_präzedenz_basierend_auf_der_ebenenreihenfolge) zu definieren.

Das {{cssxref("@layer")}}-CSS-Attribut wird verwendet, um eine Kaskadierungsebene zu deklarieren und die Reihenfolge der Präzedenz zu definieren, wenn es mehrere Kaskadierungsebenen gibt. Die folgende Anweisung deklariert drei Ebenen in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie möchten oft, dass Ihre erste CSS-Zeile diese `@layer`-Deklaration ist (natürlich mit Ebenennamen, die für Ihre Website sinnvoll sind), um die volle Kontrolle über die Ebenenreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, ist die Ebenenreihenfolge `theme`, `layout` und `utilities`. Wenn einige Ebenen vor der obigen Anweisung erstellt worden wären, hätten אלוissa dieקchenבכמותל backוכה_sekret latter three layers into two new layers if the first one already existed. For example, if `layout` already existed, only `theme` and `utilities` would be created, but the order of layers would be, in this case, `layout`, `theme`, and `utilities`.

### Die @layer-Blockanweisung für benannte und anonyme Ebenen

Ebenen können mit der Blockanweisung `@layer` erstellt werden. Wenn eine `@layer`-Anweisung einem Identifikator und einem Block von Stilen folgt, wird der Identifikator verwendet, um die Ebene zu benennen, und die Stile in dieser Anweisung werden zu den Stilen der Ebene hinzugefügt. Wenn eine Ebene mit dem angegebenen Namen noch nicht existiert, wird eine neue Ebene erstellt. Wenn eine Ebene mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor bestehenden Ebene hinzugefügt. Wenn beim Erstellen eines Blocks von Stilen unter Verwendung von `@layer` kein Name angegeben wird, werden die Stile in der Anweisung einer neuen anonymen Ebene hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockanweisung und eine `@layer`-Anweisung verwendet. Dieses CSS führt die folgenden Aktionen in der aufgelisteten Reihenfolge aus:

1. Eine benannte `layout`-Ebene wird erstellt
2. Eine unbenannte, anonyme Ebene wird erstellt
3. Eine Liste von drei Ebenen wird deklariert und nur zwei neue Ebenen, `theme` und `utilities`, werden erstellt, weil `layout` bereits existiert
4. Zusätzliche Stile werden zur bereits bestehenden `layout`-Ebene hinzugefügt
5. Eine zweite unbenannte, anonyme Ebene wird erstellt

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

Im obigen CSS haben wir fünf Ebenen erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities`, und `<anonymous(02)>` – in dieser Reihenfolge – mit einer sechsten, implizierten Ebene unebenermäßigen Stilen, die sich im `body`-Stilblock befinden. Die Ebenenreihenfolge ist die Reihenfolge, in der die Ebenen erstellt werden, wobei die implizite Ebene unebenermäßigen Stilen immer die letzte ist. Es gibt keinen Weg, die Ebenenreihenfolge einmal erstellt zu ändern.

Wir haben einige Stile zu der Ebene namens `layout` zugewiesen. Wenn eine benannte Ebene nicht bereits existiert, erstellt das Angeben des Namens in einer `@layer`-Anweisung, mit oder ohne Stilen, diese Ebene und fügt sie dem Ende der Liste der bestehenden Ebenennamen hinzu. Wenn die benannte Ebene bereits existiert, werden alle Stile innerhalb des benannten Blocks den Stilen der zuvor vorhandenen Ebene hinzugefügt – das Angeben von Stilen in einem Block durch Wiederverwenden eines bestehenden Ebenennamens erstellt keine neue Ebene.

Anonyme Ebenen werden erstellt, indem Stile einer Ebene ohne Benennung der Ebene zugewiesen werden. Stile können nur zum Zeitpunkt ihrer Erstellung einer unbenannten Ebene hinzugefügt werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne Ebenennamen erstellt zusätzliche unbenannte Ebenen; es fügt Stilen keine zuvor bestehende unbenannte Ebene hinzu.

Die `@layer`-Anweisung erstellt eine Ebene, benannt oder nicht, oder fügt Stile zu einer Ebene hinzu, wenn die benannte Ebene bereits existiert. Wir nannten die erste anonyme Ebene `<anonymous(01)>` und die zweite `<anonymous(02)>`, dies dient nur der Erklärung. Dies sind tatsächlich unbenannte Ebenen. Es gibt keinen Weg, diese zu referenzieren oder ihnen zusätzliche Stile hinzuzufügen.

Alle Stile, die außerhalb einer Ebene deklariert werden, werden zu einer impliziten Ebene zusammengeführt. Im obigen Beispiel hat die erste Deklaration die `color: #333333`-Eigenschaft für `body` gesetzt. Dies wurde außerhalb einer Ebene deklariert. Normale unebenermäßige Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die unebenermäßigen Stile eine geringere Spezifikität haben und zuerst in der Reihenfolge des Erscheinens erscheinen. Dies erklärt, warum auch wenn das unebenermäßige CSS zuerst im Codeblock deklariert wurde, die implizite Ebene, die diese unebenermäßigen Stile enthält, Vorrang hat, als ob sie die letzte deklarierte Ebene wäre.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Ebenen deklariert wurden, wurden nur die `theme` und `utilities`-Ebenen erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge bereits erstellter Ebenen nicht ändert. Derzeit gibt es keinen Weg, Ebenen nach Deklaration neu anzuordnen.

Im folgenden Beispiel weisen wir Stile zwei Ebenen zu, indem wir sie erstellen und sie im Prozess benennen. Da sie bereits existieren, erstellt ihre Deklaration in der letzten Zeile nichts.

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

#### Ebenenerstellung und Medienabfragen

Wenn Sie eine Ebene mit [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using) oder [Featureabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) definieren und das Medium nicht übereinstimmt oder das Feature nicht unterstützt wird, wird die Ebene nicht erstellt. Das untenstehende Beispiel zeigt, wie sich die Ebenenreihenfolge ändern kann, wenn Sie die Größe Ihres Geräts oder Browsers ändern. In diesem Beispiel erstellen wir die `site`-Ebene nur in breiteren Browsern. Wir weisen dann Stile den `page` und `site`-Ebenen in dieser Reihenfolge zu.

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

In großen Bildschirmen wird die `site`-Ebene in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` Vorrang vor `page`, da es bei schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage in `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Ebenen mit @import

Die {{cssxref("@import")}}-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann jedoch durch eine `@layer`-Anweisung gefolgt werden, die eine oder mehrere Ebenen erstellt, ohne diesen Stilen zuzuweisen. (`@import` kann auch durch eine {{cssxref("@charset")}}-Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Ebene, eine verschachtelte benannte Ebene oder eine anonyme Ebene importieren. Die folgende Ebene importiert die Stylesheets in eine `components`-Ebene, eine verschachtelte `dialog`-Ebene innerhalb der `components`-Ebene und eine unbenannte Ebene:

```css
@import "components-lib.css" layer(components);
@import "dialog.css" layer(components.dialog);
@import "marketing.css" layer();
```

Sie können mehr als eine CSS-Datei in eine einzige Ebene importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Ebene:

```css
@import "comments.css" layer(social);
@import "sm-icons.css" layer(social);
```

Sie können Stile importieren und Ebenen basierend auf bestimmten Bedingungen erstellen, indem Sie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using) und [Featureabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) verwenden. Die folgende importiert ein Stylesheet in eine `international`-Ebene, nur wenn der Browser `display: ruby` unterstützt, und die importierte Datei ist abhängig von der Bildschirmbreite.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode des Verlinkens von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Ebene zu importieren, wenn Sie `@layer` im Stylesheet nicht verwenden können.

## Überblick über verschachtelte Kaskadierungsebenen

Verschachtelte Ebenen sind Ebenen innerhalb einer benannten oder einer anonymen Ebene. Jede Kaskadierungsebene, sogar eine anonyme, kann verschachtelte Ebenen enthalten. Ebenen, die in eine andere Ebene importiert werden, werden zu verschachtelten Ebenen innerhalb dieser Ebene.

### Vorteile des Verschachtelns von Ebenen

Die Möglichkeit, Ebenen zu verschachteln, ermöglicht es Teams, Kaskadierungsebenen zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in eine Ebene importieren. Ebenso ermöglicht das Verschachteln, dass Sie Drittanbieter-Stylesheets in eine Ebene importieren können, ohne sich Sorgen machen zu müssen, ob dieses Stylesheet selbst Ebenen enthält. Da Ebenen verschachtelt werden können, müssen Sie sich keine Sorgen machen, sich überschneidende Ebenennamen zwischen externen und internen Stylesheets zu haben.

### Erstellen von verschachtelten Kaskadierungsebenen

Verschachtelte Ebenen können mit den gleichen Methoden wie reguläre Ebenen erstellt werden. Beispielsweise können sie mit der `@layer`-Anweisung gefolgt von den Namen einer oder mehrerer Ebenen erstellt werden, indem eine Punktnotation verwendet wird. Mehrere Punkte und Ebenennamen bedeuten mehrere Verschachtelungen.

Wenn Sie eine Block-`@layer`-Anweisung innerhalb einer anderen Block-`@layer`-Anweisung verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Ebene. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, importiert wird, werden die Stile dieser benannten oder anonymen Ebene zugewiesen. Wenn die `@import`-Anweisung Ebenen enthält, werden diese Ebenen zu verschachtelten Ebenen innerhalb dieser anonymen oder benannten Ebene.

Sehen wir uns das folgende Beispiel an:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Ebene. Wenn diese Datei Ebenen enthält, benannt oder nicht, werden diese Ebenen zu verschachtelten Ebenen innerhalb der `components`-Ebene.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Ebene, die eine Unterebene der `components`-Ebene ist. Die verschachtelte `components.narrow` wird als letzte Ebene innerhalb der `components`-Ebene erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Ebene, in diesem Fall würden die Inhalte von `narrow-theme.css` an die verschachtelte `components.narrow`-Ebene angehängt. Zusätzliche verschachtelte benannte Ebenen können zur `components`-Ebene mit dem Muster `components.<Ebenenname>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Ebenen erstellt werden, aber sie können nicht nachträglich aufgerufen werden.

Sehen wir uns ein weiteres Beispiel an, bei dem wir [`layers1.css` in eine benannte Ebene importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers) und die folgende Aussage verwenden:

```css
@import "layers1.css" layer(example);
```

Dies wird eine einzelne Ebene mit dem Namen `example` erstellen, die einige Deklarationen und fünf verschachtelte Ebenen beinhaltet - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile einer benannten verschachtelten Ebene hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung der Präzedenz basierend auf der Ebenenreihenfolge

Die Reihenfolge der Ebenen bestimmt deren Präzedenzreihenfolge. Daher ist die Reihenfolge der Ebenen sehr wichtig. In derselben Weise wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsebene und Wichtigkeit.

### Präzedenzreihenfolge der regulären Kaskadierungsebenen

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Ebenen (C.css-Stile werden der impliziten Ebene der unebenermäßigen Stilen hinzugefügt). Nehmen wir an, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Ebenen enthalten. Die folgende Liste zeigt, wo Stile, die innerhalb und außerhalb dieser Dateien deklariert wurden, sortiert werden, von der geringsten (1) Präzedenz bis zur höchsten (10).

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. unebenermäßige normale Stile (`C.css`)
4. Inline normale Stile
5. animierende Stile
6. unebenermäßige wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. übergehende Stile

Normale Stile, die innerhalb von Ebenen deklariert wurden, erhalten die niedrigste Priorität und werden nach der Reihenfolge sortiert, in der die Ebenen erstellt wurden. Normale Stile in der erstelleten Ebene haben die geringste Präzedenz, und normale Stile in der zuletzt erstellten Ebene haben die höchste Präzedenz unter den Ebenen. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert wurden, werden von allen nachfolgenden Stilen auf der Liste überschrieben, wenn irgendwelche Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb von Ebenen deklariert wurden. Die Stile in `C.css` wurden nicht in eine Ebene importiert und überschreiben alle konkurrierenden Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Ebene deklariert sind, haben immer eine höhere Präzedenz als Stile, die _sind_ in einer Ebene deklariert (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale auf diese Weise deklarierte Stile haben Vorrang vor normalen Stilen, die in den unebenermäßigen und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) vorkommen.

Animierende Stile haben eine höhere Präzedenz als alle normalen Stile, einschließlich Inline-Normalstile.

Wichtige Stile, d.h. Eigenschaftswerte mit dem `!important`-Flag, haben Vorrang vor allen zuvor genannten Stilen in unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Ebene deklariert werden, haben weniger Präzedenz als die innerhalb einer Ebene deklarierten. Wichtige Stile, die in Ebenen vorhanden sind, werden ebenfalls in der Reihenfolge der Ebenenerstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Ebene die geringste Präzedenz, und die in der ersten erstellten Ebene hat die höchste Präzedenz unter den erklärten Ebenen.

Inline wichtige Stile haben wiederum eine höhere Präzedenz als wichtige Stile, die anderswo deklariert wurden.

Übergangsstile haben die höchste Präzedenz. Wenn ein normaler Eigenschaftswert übergegangen wird, hat er während des Übergangs Vorrang vor allen anderen Eigenschaftswertdeklarationen, sogar Inline wichtige Stile.

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

In diesem Beispiel werden zwei Ebenen (`A` und `B`) zunächst mit einer `@layer`-Anweisung erstellt, ohne dass Stile vorhanden sind. Die Ebenenstile werden in zwei `@layer`-Blockanweisungen definiert, die nach der `h1`-CSS-Regel erscheinen, die außerhalb einer Ebene deklariert wurde.

Die mit dem `style`-Attribut hinzugefügten Inline-Stile auf dem `h1`-Element setzen eine normale Farbe und eine wichtige Hintergrundfarbe. Normale Inline-Stile überschreiben alle geschichteten und unebenermäßigen normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und unebenermäßigen normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normalen `text-decoration` und wichtigen `box-shadow` sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Für normale nicht-inline Stile haben unebenermäßige Stile Vorrang. Für wichtige Stile spielt auch die Ebenenreihenfolge eine Rolle. Während normale unebenermäßige Stile alle normalen Stile in einer Ebene überschreiben, ist bei wichtigen Stilen die Präzedenzreihenfolge umgekehrt; unebenermäßige wichtige Stile haben weniger Präzedenz als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Ebenen deklariert sind, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Für normale Stile hat die `B`-Ebene, die zuletzt deklariert wurde, Vorrang vor den Stilen in der früher deklarierten Ebene `A`. Für normale Stile haben später kreierte Ebenen Vorrang vor früheren. Die Präzedenzreihenfolge ist umgekehrt für wichtige Stile. Für die wichtigen `font-weight`-Deklarationen hat die `A`-Ebene, die zuerst deklariert wurde, Vorrang vor der zuletzt deklarierten Ebene `B`.

Sie können die Ebenenreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` in `@layer B, A;` ändern. Probieren Sie das aus. Welche Stile werden dadurch geändert, und welche bleiben gleich? Warum?

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Ebenen ohne Zuweisung von Stilen mit `@layer` gefolgt von den Namen unserer Ebenen dekliniert, die mit einem Semikolon endet. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich gewesen. Warum? Wir haben stilistische Regeln in benannten `@layer`-Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Ebenen wurden in dieser ersten Zeile erstellt. Hätten sie nicht, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen eingefügt: Erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass das Erklären der Ordnung der geschichteten Ordnung im Voraus die beste Praxis für Ihr Ebenenmanagement ist.

Zusammenfassend:

- Die Reihenfolge der Präzedenz der Ebenen ist die Reihenfolge, in der die Ebenen erstellt werden.
- Sobald erstellt, gibt es keine Möglichkeit, die Ebenenreihenfolge zu ändern.
- Die Ebenenpräzedenz für normale Stile richtet sich nach der Reihenfolge, in der die Ebenen erstellt werden.
- Unebenermäßige normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Ebenenpräzedenz für wichtige Stile ist umgekehrt, wobei die früher geschaffenen Ebenen Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor unebenermäßigen wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, egal ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme der Übergangsstile.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer, wenn sie übergehen, was vorübergehend ist).

### Präzedenzreihenfolge der verschachtelten Kaskadierungsebenen

Die Kaskadenpräzedenzordnung für verschachtelte Ebenen ist ähnlich wie bei regulären Ebenen, jedoch innerhalb der Ebene. Die Präzedenzordnung basiert auf der Reihenfolge der verschachtelten Ebenenerstellung. Nicht-verschachtelte Stile in einer Ebene haben Vorrang vor verschachtelten normalen Stilen, wobei die Präzedenzordnung umgekehrt für wichtige Stile ist. Spezifikationsgewichtung zwischen verschachtelten Ebenen spielt keine Rolle, obwohl es für konkurrierende Stile innerhalb einer verschachtelten Ebene von Bedeutung ist.

Das folgende Beispiel erstellt und fügt Stile zur `components`-Ebene hinzu, zur verschachtelten `components.narrow`-Ebene und zur verschachtelten `components.wide`-Ebene:

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

- `background-color`: Da unebenmäßige normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat`-Farbe.
- `border`: Da innerhalb einer Ebene nichtverschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `red`-Farbe.
- `color`: Mit wichtigen Stilen haben geschichtete Stile Vorrang vor unebenermäßigen Stilen, mit wichtigen Stilen in früher deklarieren Ebenen Vorrang vor später erklärten Ebenen. In diesem Beispiel ist die Reihenfolge der verschachtelten Ebenenerstellungen `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass die Farbe `purple` gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Ebenen gesetzt, sodass der Deklarationsreihenfolge zufolge das `20%`-Radius gewinnt.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind nun mit den grundlegenden Mechanismen der CSS-Kaskadierungsebenen vertraut.
