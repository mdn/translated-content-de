---
title: Kaskadenschichten
slug: Learn/CSS/Building_blocks/Cascade_layers
l10n:
  sourceCommit: c3dd9f927687cfee9d0d89f0a6d207425919f576
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

Diese Lektion zielt darauf ab, Ihnen [Kaskadenschichten](/de/docs/Web/CSS/@layer) vorzustellen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es zunächst weniger relevant erscheinen, diese Lektion zu bearbeiten, und sie könnte akademischer wirken als einige andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen dessen zu kennen, was Kaskadenschichten sind, sollten Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadenschichten und die Fähigkeit, ihre Macht zu nutzen, Ihnen helfen, beim Verwalten einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams Schmerzen zu ersparen.

Kaskadenschichten sind am relevantesten, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es zu Konflikten zwischen CSS-Selektoren und konkurrierender Spezifität kommt oder wenn Sie erwägen, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich der Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a> und <a href="/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Kaskade, Spezifität und Vererbung</a>).
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

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle Eigenschaftswerte, die auf ein Element angewendet werden, anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Stile"-Panel des Werkzeugs zeigt alle Eigenschaftswerte an, die auf das inspizierte Element angewendet werden, zusammen mit dem ausgelösten Selektor und der CSS-Quelldatei. Der Selektor von der Ursprungsquelle mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Stile-Panel ausgegraute Werte an, die mit dem ausgewählten Element übereinstimmten, aber aufgrund der Kaskade, Spezifität oder Quellreihenfolge nicht angewendet wurden. Ausgegraute Stile können von derselben Ursprungsquelle mit Vorrang, aber mit geringerer Spezifität stammen, oder mit übereinstimmender Ursprungs- und Spezifität, wurden jedoch früher in der Codebasis gefunden. Für jeden angewendeten Eigenschaftswert können mehrere Deklarationen aus vielen verschiedenen Quellen ausgegraut sein. Wenn Sie einen ausgegrauten Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet das, dass dem Wert Ursprungs- oder Bedeutungsgewicht fehlt.

Oftmals, wenn die Komplexität einer Website zunimmt, erhöht sich auch die Anzahl der Stylesheets, wodurch die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer wird. Kaskadenschichten vereinfachen die Wartung von Stylesheets in solchen Codebasen. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die CSS-Deklarationen bieten, die letztendlich angewendet werden, was es Webentwicklern ermöglicht, Abschnitte von CSS zu priorisieren, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten einen kurzen Rückblick auf die wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading" - Kaskadieren. Es ist die Methode, durch die Stile zusammen kaskadieren. Der User-Agent führt mehrere klar definierte Schritte durch, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann näher auf Schritt 4 eingehen: **Kaskadenschichten**, was Sie eigentlich lernen wollten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektor-Treffer für jedes Element.
2. **Bedeutung:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Innerhalb jeder der beiden Wichtigkeitsstufen sortieren Sie die Regeln nach Autor-, Benutzer- oder User-Agent-Ursprung.
4. **Kaskadenschichten:** Innerhalb jeder der sechs Ursprungs-Wichtigkeitsstufen, sortieren Sie nach Kaskadenschicht. Die Schichtreihenfolge für normale Deklarationen reicht von der zuerst erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge wird für wichtige Stile umgekehrt, wobei nicht geschichtete wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungsschicht mit Vorrang, sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/Specificity).
6. **Scoping-Proximität:** Wenn zwei Selektoren in der Ursprangsschicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der umschlossenen Regeln mit der kleinsten Anzahl Hops zur Scope-Root. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang die gleiche Spezifität und Scope-Proximität haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt ziehen nur die Deklarationen, die "noch im Rennen" sind, in den nächsten Schritt ein. Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Kaskadenursprungstypen](/de/docs/Web/CSS/Cascade#origin_types): User-Agent-Stylesheets, Benutzer-Stylesheets und Autor-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungs-Eimer nach Ursprung und Wichtigkeit. Es gibt acht Prioritätsstufen: die sechs Ursprungs-Eimer, Eigenschaften, die in Übergang sind, und Eigenschaften, die animiert werden. Die Prioritätsreihenfolge reicht von den normalen User-Agent-Stilen, die die niedrigste Priorität haben, bis zu Stilen innerhalb aktuell angewendeter Animationen, zu wichtigen User-Agent-Stilen, und dann zu Stilen, die die höchste Priorität haben:

1. normale User-Agent-Stile
2. normale Benutzer-Stile
3. normale Autoren-Stile
4. Stile, die animiert werden
5. wichtige Autoren-Stile
6. wichtige Benutzer-Stile
7. wichtige User-Agent-Stile
8. Stile, die im Übergang sind

Der "User-Agent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt auf einem Element mit dem {{HTMLElement('style')}}-Element deklariert sind, sind Autoren-Stile. Ohne animierende und übergehende Stile haben normale User-Agent-Stile die niedrigste Priorität; wichtige User-Agent-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige vom Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Wenn wir Schichten für den Moment ignorieren, wird der Wert vom Ursprung der höchsten Priorität angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird niemals zwischen Selektoren von verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autoren-Stile angewendet, daher werden nur User-Agent-Stile angewendet (und Ihre persönlichen Benutzer-Stile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color) durch Autoren-Stile gesetzt, auch wenn der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories) hat. Der Grund, warum Autoren-Stile "gewinnen", ist, dass bei widersprüchlichen Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität im Ursprung, der keinen Vorrang hat.

{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}

Der "konkurrierende" Selektor im User-Agent-Stylesheet zum Zeitpunkt dieses Schreibens ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Auch wenn dies größer ist als der `0-0-0` Selektor im Autoren-Stylesheet, spielt es keine Rolle, selbst wenn der Selektor in Ihrem aktuellen User-Agent anders ist: Die Spezifitätsgewichte von Autor- und User-Agent-Ursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/Specificity#how_is_specificity_calculated).

Ursprungs-Vorrang gewinnt immer über Selektoren-Spezifität. Wenn eine Element-Eigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder User-Agent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, gewinnt das User-Agent-Stylesheet immer über Autoren- und Benutzerstile. Ursprungsvorrang in der Kaskade stellt sicher, dass Spezifitätskonflikte zwischen Ursprüngen niemals auftreten.

Noch eine Anmerkung, bevor wir weitermachen: Die Reihenfolge des Erscheinens wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs die gleiche Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen jetzt den "Ursprungsvorrang in der Kaskade", aber was ist der "Vorrang der Kaskadenschichten"? Wir werden diese Frage beantworten, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie geordnet sind und wie Stile Kaskadenschichten zugeordnet werden. Wir werden [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten behandeln. Lassen Sie uns zuerst besprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangsreihenfolge der Kaskadenschichten

Ähnlich wie wir sechs Prioritätsstufen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten es uns, sub-origin-Ebenen der Priorität innerhalb eines dieser Ursprünge zu erstellen.

Innerhalb jedes der sechs Ursprungs-Eimer gibt es mehrere Kaskadenschichten. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Vorrangsreihenfolge zwischen Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungs-Eimern sind Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangsreihenfolge reicht von der zuerst erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile kaskadieren zusammen in eine implizite Schicht, die Vorrang über alle nicht-übergehenden normalen Stile hat. Die nicht geschichteten wichtigen Stile haben eine niedrigere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang über wichtige Stile in später deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autoren-Stile beschränken, aber bedenken Sie, dass Schichten auch in Benutzer- und User-Agent-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Dritten haben. Egal wie viele Stylesheets eingeschlossen sind, alle diese Stile kaskadieren zusammen in einem einzigen Ursprung: dem _Autor_-Stylesheet.

Da Stile aus vielen Quellen zusammen kaskadieren, insbesondere von Teams, die nicht zusammenarbeiten, können Probleme entstehen. Verschiedene Teams können unterschiedliche Methoden haben; eines kann die beste Praxis haben, die Spezifität zu reduzieren, während ein anderes den Standard hat, eine `id` in jeden Selektor aufzunehmen.

Spezifitätskonflikte können sich schnell verschärfen. Ein Webentwickler könnte eine "schnelle Lösung" erstellen, indem er ein `!important`-Flag hinzufügt. Auch wenn dies eine einfache Lösung zu sein scheint, verlagert es oft nur den Spezifitätskrieg von normalen auf wichtige Deklarationen.

Ähnlich wie Kaskadenursprünge ein Gleichgewicht der Kräfte zwischen Benutzer-, User-Agent- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Anliegen innerhalb eines einzigen Ursprungs zu organisieren und auszugleichen, als wäre jede Schicht in einem Ursprung ein Sub-Ursprung. Eine Schicht kann für jedes Team, jede Komponente und jeden Dritten erstellt werden, mit Stil-Vorrang basierend auf der Schichtreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich um die Spezifität zwischen diesen Sub-Ursprüngen kümmern zu müssen.

Schichtvorrang schlägt immer Selektor-Spezifität. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit weniger Vorrang. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität ist immer noch wichtig für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifitätskonzepte zwischen Schichten, da nur die Schicht mit der höchsten Priorität für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten ermöglichen die Erstellung verschachtelter Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Autorursprung hinzu und entfernt alle Spezifitätskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Thema-Schichten kann basierend auf Medienabfragen (siehe Abschnitt [Schichterstellung und Medienabfragen](#schichterstellung_und_medienabfragen) unten) wie Viewport-Größe oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation) definiert werden. Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifität basieren.

Die Möglichkeit, Schichten zu verschachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeiten.

Die Möglichkeit, verschachtelte Schichten zu erstellen, entfernt auch die Sorge über sich überschneidende Schichtnamen. Wir werden dies im [verschachtelten Schicht](#überblick_über_verschachtelte_kaskadenschichten) Abschnitt behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Bibliotheken von Drittanbietern, Themen, Komponenten, Überschreibungen und andere stilistische Anliegen darzustellen - und sind in der Lage, die Kaskade von Schichten explizit umzuordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu ändern, oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte über Schichten hinweg zu lösen."
>
> —[Cascading and Inheritance specification](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer) Anweisung, die Schichten deklariert, indem `@layer` gefolgt von den Namen einer oder mehrerer Schichten verwendet wird. Dies erstellt benannte Schichten ohne Zuordnung von Stilen zu ihnen.
- Die `@layer` Blockanweisung, bei der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import) Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei in diese Schicht einfügt.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn in der `@layer`-Anweisung oder `@import` mit `layer()` kein Schichtname angegeben ist, wird eine neue anonyme (unnamed) Schicht erstellt.

> [!NOTE]
> Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht sind, oder "nicht geschichtete Stile", kaskadieren gemeinsam in eine abschließende implizite Schicht.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Schicht etwas genauer betrachten, bevor wir verschachtelte Schichten besprechen.

### Die @layer-Anweisung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen von einer oder mehreren Schichten ohne Zuordnung von Stilen ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmen_des_vorrangs_auf_basis_der_schichtreihenfolge) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS-Anweisung wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangsreihenfolge festzulegen, wenn mehrere Kaskadenschichten vorhanden sind. Die folgende Anweisung deklariert drei Schichten in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie werden oft möchten, dass Ihre erste Zeile im CSS diese `@layer`-Deklaration ist (mit Schichtnamen, die für Ihre Seite sinnvoll sind), um die volle Kontrolle über die Schichtreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile im CSS einer Seite ist, wird die Schichtreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, solange Schichten mit diesen Namen noch nicht existieren, werden diese drei Schichten erstellt und am Ende der Liste der bestehenden Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, dann wird die obige Anweisung nur zwei neue Schichten erstellen. Wenn zum Beispiel `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wäre in diesem Fall `layout`, `theme` und `utilities`.

### Der @layer Blockanweisung für benannte und anonyme Schichten

Schichten können mit der Blockanweisung `@layer` erstellt werden. Wenn einer `@layer` Anweisung ein Bezeichner und ein Block von Stilen folgt, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Stile in dieser Anweisung werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor existierenden Schicht hinzugefügt. Wenn kein Name angegeben ist, während ein Block von Stilen mit `@layer` erstellt wird, werden die Stile in der Anweisung einer neuen anonymen Schicht hinzugefügt.

Im Beispiel unten haben wir vier `@layer` Blockanweisungen und eine `@layer` Anweisung. Dieses CSS macht Folgendes in der angegebenen Reihenfolge:

1. Erstellt eine benannte `layout` Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste mit drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, weil `layout` bereits existiert
4. Fügt zusätzliche Stile zur bereits bestehenden `layout` Schicht hinzu
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

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Schicht von nicht geschichteten Stilen in dem `body`-Stilblock. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht von nicht geschichteten Stilen immer die letzte ist. Es gibt keine Möglichkeit, die Schichtreihenfolge nach ihrer Erstellung zu ändern.

Wir haben einige Stile zur Schicht namens `layout` zugeordnet. Wenn eine benannte Schicht noch nicht existiert, erstellt die Angabe des Namens in einer `@layer`-Anweisung, mit oder ohne Zuordnung von Stilen zur Schicht, die Schicht; dies fügt die Schicht am Ende der Abfolge von bestehenden Schichternamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks an Stile in der zuvor existierenden Schicht angehängt – das spezifizieren von Stilen in einem Block durch erneutes Verwenden eines bestehenden Schichtenamens erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stile zu einer Schicht zugeordnet werden, ohne die Schicht zu benennen. Stile können zu einer unbenannten Schicht nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Bei weiterer Verwendung von `@layer` ohne Schichtname werden zusätzliche unbenannte Schichten erstellt; es werden keine Stile zu einer zuvor bestehenden unbenannten Schicht hinzugefügt.

Die `@layer` Anweisung erstellt eine Schicht, benannt oder nicht, oder hängt Stile einer Schicht an, wenn die benannte Schicht bereits existiert. Wir nannten die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>`, dies ist nur, um sie zu erklären. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder ihnen zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden in einem impliziten Schicht zusammengefasst. Im Beispielcode oben, wurde die erste Deklaration gesetzt, um die `color: #333` Eigenschaft auf `body` festzulegen. Dies wurde außerhalb einer Schicht deklariert. Normale ungeschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die ungeschichteten Stile eine niedrigere Spezifität haben und zuerst in der Erscheinungsfolge kommen. Dies erklärt, warum, obwohl das ungeschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese ungeschichteten Stile enthält, Vorrang hat, als wäre sie die zuletzt deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, bei der eine Reihe von Schichten deklariert wurde, wurden nur die `theme` und `utilities` Schichten erstellt; `layout` wurde bereits in der ersten Zeile erstellt erklärt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, die Schichten nach ihrer Deklaration neu zu ordnen.

Im folgenden interaktiven Beispiel weisen wir Stile zu zwei Schichten zu, indem wir sie erstellen und benennen. Da sie bereits existieren, weil sie beim ersten Gebrauch erstellt wurden, ändert ihre Deklaration in der letzten Zeile nichts.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-order.html", '100%', 500)}}

Versuchen Sie, die letzte Zeile, `@layer site, page;`, zu verschieben, um sie in die erste Zeile zu rücken. Was passiert?

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht mittels [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) definieren, und die Medienabfrage wird nicht erfüllt oder das Feature wird nicht unterstützt, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie das Ändern der Größe Ihres Geräts oder Browsers die Reihenfolge der Schichten ändern kann. In diesem Beispiel erstellen wir die `site` Schicht nur in breiten Browsern. Wir weisen dann Stile in der `page` und `site` Schicht zu, in dieser Reihenfolge.

{{EmbedGHLiveSample("css-examples/learn/layers/media-order.html", '100%', 500)}}

Auf breiten Bildschirmen wird die `site` Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` Vorrang über `page`, weil es auf schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Medienabfrage zu `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import) Regel ermöglicht es Benutzern, Stile aus anderen Stylesheets sowohl direkt in eine CSS-Datei als auch in ein {{htmlelement('style')}} Element zu importieren.

Beim Importieren von Stylesheets muss die `@import` Anweisung vor allen CSS-Stilen in dem Stylesheet oder im `<style>`-Block definiert werden. Die `@import` Anweisung muss zuerst erscheinen, vor allen Stilen, kann jedoch durch eine `@layer` Anweisung gefolgt werden, die eine oder mehrere Schichten erstellt, ohne Stile zuzuordnen. (`@import` kann auch durch eine [`@charset`](/de/docs/Web/CSS/@charset) Regel gefolgt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine geschichtete benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components` Schicht, eine geschichtete `dialog` Schicht innerhalb der `components` Schicht und eine unbenannte Schicht, jeweils:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in eine einzige Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social` Schicht:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Stile importieren und basierend auf spezifischen Bedingungen mithilfe von [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) Schichten erstellen. Das folgende Importieren eines Stylesheets in eine `international` Schicht geschieht nur, wenn der Browser `display: ruby` unterstützt, und die importierte Datei ist von der Breite des Bildschirms abhängig.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}} Methode zum Verlinken von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` im Stylesheet nicht verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten in einer benannten oder anonymen Schicht. Jede Kaskadenschicht, sogar eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu verschachtelten Schichten innerhalb jener Schicht.

### Vorteile des Verschachtelns von Schichten

Verschachtelte Schichten ermöglichen es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in eine Schicht importieren. Ebenso ermöglicht Verschachtelung, Styles von Drittanbietern in eine Schicht zu importieren, ohne sich darum zu sorgen, ob das Stylesheet selbst Schichten enthält. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen über sich überschneidende Schichtnamen zwischen Stylesheets aus externen und internen Quellen machen.

### Erstellung von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit den gleichen Methoden erstellt werden wie reguläre Schichten. Zum Beispiel können sie mit `@layer` Anweisung gefolgt von den Namen von einer oder mehreren Schichten, unter Verwendung einer Punktnotation, erstellt werden. Mehrere Punkte und Schichtnamen signalisieren eine mehrfache Verschachtelung.

Wenn Sie eine Blockanweisung `@layer` innerhalb einer anderen Blockanweisung `@layer` verschachteln, mit oder ohne einen Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration, die das `layer` Schlüsselwort oder die `layer()` Funktion enthält, importiert wird, werden die Stile dieser benannten oder anonymen Schicht zugeordnet. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten zu verschachtelten Schichten innerhalb jener anonymen oder benannten Schicht.

Sehen wir uns das folgende Beispiel an:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components` Schicht. Wenn diese Datei irgendwelche Schichten enthält, benannt oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components` Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow` Schicht, welche eine Sub-Schicht von `components` ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components` Schicht erstellt, außer `components-lib.css` enthält bereits eine `narrow` Schicht, in diesem Fall würde der Inhalt von `narrow-theme.css` an die verschachtelte `components.narrow` Schicht angehängt. Zusätzliche verschachtelte benannte Schichten können der `components` Schicht mithilfe des Musters `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können nachträglich nicht zugegriffen werden.

Sehen wir uns ein weiteres Beispiel an, in dem wir [layers1.css in eine benannte Schicht importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung:

```css
@import url(layers1.css) layer(example);
```

Dies erstellt eine einzelne Schicht namens `example`, die einige Deklarationen und fünf verschachtelte Schichten enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen des Vorrangs auf Basis der Schichtreihenfolge

Die Reihenfolge der Schichten bestimmt ihre Vorrangsreihenfolge. Daher ist die Reihenfolge der Schichten sehr wichtig. In der gleichen Weise, wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungs-Schicht und Wichtigkeit.

### Vorrangsreihenfolge regulärer Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css Stile werden der impliziten Schicht von nicht geschichteten Stilen angehängt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css`, und `C.css`) keine zusätzlichen Schichten innerhalb von sich enthalten. Die folgende Liste zeigt, wo innerhalb und außerhalb dieser Dateien deklarierte Stile sortiert werden, von der geringsten (1) Vorrang bis zur höchsten (10).

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. nicht geschichtete normale Stile (`C.css`)
4. Inline normale Stile
5. animierte Stile
6. nicht geschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. übergehende Stile

Normale Stile, die innerhalb von Schichten deklariert werden, erhalten die niedrigste Priorität und werden in der Reihenfolge der Erstellung jeder Schicht sortiert. Normale Stile in der zuerst erstellten Schicht haben die niedrigste Vorrang, und normale Stile in der zuletzt erstellten Schicht haben die höchste Vorrang unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert werden, werden von allen nachfolgenden Stylings in der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen Stile, die außerhalb von Schichten deklariert werden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle konfliktierenden Stile von `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer Vorrang vor Stilen, die _in_ einer Schicht deklariert sind (mit der Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style` Attribut](/de/docs/Web/HTML/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang vor normalen Stilen in den nicht geschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css`, und `C.css`).

Animierte Stile haben eine höhere Vorrang als alle normalen Stile, einschließlich Inline-normaler Stile.

Wichtige Stile, das heißt, Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor erwähnten Stilen in unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert wurden, haben weniger Vorrang als diejenigen, die innerhalb einer Schicht deklariert wurden. Wichtige Stile, die in Schichten gefunden werden, sind ebenfalls in der Reihenfolge der Schichterstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht die niedrigste Vorrang, und die zuerst erstellte Schicht hat die höchste Vorrang unter den deklarierten Schichten.

Inline wichtige Stile haben wiederum Vorrang vor wichtigen Stilen, die anderswo deklariert wurden.

Übergangsstile haben die höchste Vorrang. Wenn ein normaler Eigenschaftswert übergeht, hat er Vorrang vor allen anderen Eigenschaftswertdeclarationen, sogar vor wichtigen Inline-Stilen; aber nur während des Übergangs.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-precedence.html", '100%', 500)}}

In diesem Beispiel werden zwei Schichten (`A` und `B`) initial mittels einer `@layer` Anweisung ohne Stile definiert. Die Schichtstile werden in zwei `@layer` Blockanweisungen nach der `h1` CSS-Regel deklariert, die nicht innerhalb einer Schicht aufgestellt ist.

Die Inline-Stile, die auf dem `h1` Element mit dem `style` Attribut hinzufügen, setzen einen normalen `color` und einen wichtigen `background-color`. Normale Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normalen Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen und wichtigen Autorenstile. Autoren-Stile haben keine Möglichkeit, wichtige Inline-Stile zu überschreiben.

Der normale `text-decoration` und wichtige `box-shadow` sind nicht Teil der `style` Inline-Stile und können daher überschrieben werden. Bei normalen nicht-inline Stilen haben ungeschichtete Stile Vorrang. Bei wichtigen Stilen spielt auch die Schichtreihenfolge eine Rolle. Wenn normale ungeschichtete Stile alle normalen Stile in einer Schicht überschreiben, dann haben bei wichtigen Stilen die Schichten die umgekehrte Vorrangsreihenfolge; ungeschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert wurden, sind `font-style`, mit normaler Bedeutung, und `font-weight` mit einem `!important`-Flag. Für normale Stile überschreibt die Schicht `B`, die zuletzt deklariert wurde, Stile in der früher deklarierten Schicht `A`. Bei normalen Stilen haben später deklarierten Schichten Vorrang gegenüber früher deklarierten Schichten. Die Vorrangsreihenfolge ist jedoch für wichtige Stile umgekehrt. Bei den wichtigen `font-weight` Deklarationen hat die Schicht `A`, die zuerst deklariert wurde, Vorrang gegenüber der zuletzt deklarierten Schicht `B`.

Sie können die Schichtenreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Versuchen Sie das. Welche Stile ändern sich dadurch, und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile deklarierten wir Schichten ohne Stile zuzuweisen, indem `@layer` gefolgt von den Namen unserer Schichten, endend mit einem Semikolon, verwendet wird. Hätten wir diese Zeile weggelassen, wären die Ergebnisse dieselben geblieben. Warum? Wir haben die Stilregeln in benannten `@layer` Anweisungsblöcken in der Reihenfolge A dann B zugeordnet. Die zwei Schichten wurden in jener ersten Zeile erstellt. Hätte es sie nicht gegeben, hätten diese Anweisungsblöcke sie in jener Reihenfolge erstellt.

Wir haben jene erste Zeile aus zwei Gründen hinzugefügt: Erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil es oft eine gute Praxis für Ihr Schichtenreihenfolgenmanagement ist, die Schichtreihenfolge oben anzugeben.

Zusammenfassend:

- Die Vorrangsreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Sobald sie erstellt sind, gibt es keine Möglichkeit, die Schichtenreihenfolge zu ändern.
- Die Vorrangsreihenfolge der Schichten für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Vorrangsreihenfolge der Schichten für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, egal ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit der Ausnahme von Stilen, die im Übergang sind.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu überführen, was temporär ist).

### Vorrangsreihenfolge der verschachtelten Kaskadenschichten

Die Vorrangsreihenfolge der Kaskade für verschachtelte Schichten ist ähnlich der regulären Schichten, aber innerhalb der Schicht. Die Vorrangsreihenfolge basiert auf der Reihenfolge der Erstellung verschachtelter Schichten. Nicht verschachtelte Stile in einer Schicht haben Vorrang vor normalen verschachtelten Stilen, wobei die Vorrangsreihenfolge für wichtige Stile umgekehrt ist. Das Spezifitätsgewicht zwischen verschachtelten Schichten spielt keine Rolle, obwohl es für konkurrierende Stile innerhalb einer verschachtelten Schicht wichtig ist.

Der folgende Code erstellt und fügt Stile der `components` Schicht, `components.narrow` verschachtelten Schicht und `components.wide` verschachtelten Schicht hinzu:

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

- `background-color`: Da ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat` Farbe.
- `border`: Da innerhalb einer Schicht die nicht verschachtelten Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `red` Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, wobei wichtige Stile in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der Erstellung verschachtelter Schichten `components.narrow`, dann `components.wide`, daher haben wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide`, was bedeutet die `purple` Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten festgelegt, daher gewinnt der `20%` Radius aufgrund der Deklarationsreihenfolge.

## Testen Sie Ihr Wissen!

Sie haben den Artikel zu Ende gelesen, aber erinnern Sie sich an die wichtigsten Informationen? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Die Kaskade, Aufgabe 2](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, gut gemacht — Sie sind nun mit den grundlegenden Mechanismen von CSS-Kaskadenschichten vertraut. Als Nächstes schauen wir uns [das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) im Detail an.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}
