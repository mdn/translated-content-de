---
title: Cascade-Ebenen
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Diese Lektion soll Ihnen [Cascade-Ebenen](/de/docs/Web/CSS/@layer) vorstellen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten des [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifizität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag diese Lektion zunächst weniger relevant erscheinen und etwas akademischer als andere Teile des Kurses sein. Es ist jedoch hilfreich, die Grundlagen dessen zu kennen, was Cascade-Ebenen sind, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Cascade-Ebenen und der Umgang mit ihrer Leistungsfähigkeit Ihnen helfen, Schmerz beim Verwalten einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklerteams zu vermeiden.

Cascade-Ebenen sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen sich CSS-Selektoren und konkurrierende Spezifitäten im Konflikt befinden oder wenn Sie daran denken, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Cascade und Spezifität (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
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

Für jede auf ein Element angewendete CSS-Eigenschaft kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Styles"-Panel des Tools zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte, zusammen mit dem passenden Selektor und der CSS-Quelldatei. Der Selektor aus dem Ursprung mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel durchgestrichene Werte, die zwar zum ausgewählten Element passten, aber aufgrund der Cascade, Spezifität oder Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können vom gleichen Ursprung mit Vorrang stammen, aber mit geringerer Spezifität, oder mit übereinstimmendem Ursprung und Spezifität, aber sie wurden früher in der Codebasis gefunden. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifität hat, bedeutet das, dass der Wert an Ursprung oder Bedeutung fehlt.

Oftmals, wenn die Komplexität einer Website steigt, steigt auch die Anzahl der Stylesheets, wodurch die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer wird. Cascade-Ebenen vereinfachen die Wartung von Stylesheets in solchen Codebasen. Cascade-Ebenen sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die CSS-Deklarationen bieten, die letztendlich angewendet werden sollen, wodurch Webentwickler die Möglichkeit haben, CSS-Bereiche zu priorisieren, ohne mit der Spezifität kämpfen zu müssen.

Um Cascade-Ebenen zu verstehen, müssen Sie die CSS-Cascade gut verstehen. Die folgenden Abschnitte bieten einen kurzen Rückblick auf die wichtigen Cascade-Konzepte.

## Rückblick auf das Cascade-Konzept

Das 'C' in CSS steht für "Cascading". Es ist die Methode, nach der Stile zusammenkaskadieren. Der User-Agent durchläuft mehrere klar definierte Schritte, um die Werte zu bestimmen, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz aufzählen und dann tiefer in Schritt 4 einsteigen, **Cascade-Ebenen**, was Sie hier lernen sollen:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selektormatch für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb jedes der beiden Wichtigkeitsgruppen Regeln nach Autor-, Benutzer- oder User-Agent-Ursprung.
4. **Cascade-Ebenen:** Sortieren Sie innerhalb jedes der sechs Ursprungs-Wichtigkeitsgruppen nach Cascade-Ebene. Die Ebenenreihenfolge für normale Deklarationen ist von der zuerst erstellten Ebene zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, mit nicht geschichteten wichtigen Stilen mit der niedrigsten Priorität.
5. **Spezifizität:** Für konkurrierende Stile in der Ursprungs-Ebene mit Vorrang sortieren Sie Deklarationen anhand der [Spezifizität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Nähe des Scopings:** Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von Scoped-Regeln mit der geringsten Anzahl an Sprüngen in der DOM-Hierarchie bis zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Reihenfolge des Auftretens:** Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifität und Scope-Nähe haben, gewinnt der Eigenschaftswert aus dem zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt bewegen sich nur die Deklarationen, die „noch im Rennen“ sind, um im nächsten Schritt zu „konkurrieren“. Wenn nur eine Deklaration im Rennen ist, „gewinnt“ sie, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Cascade

Es gibt drei [Cascade-Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): User-Agent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungsgruppen nach Ursprung und Wichtigkeit. Es gibt acht Ebenen des Vorrangs: die sechs Ursprungsgruppen, Eigenschaften, die im Übergang sind, und Eigenschaften, die animiert werden. Die Rangfolge reicht von normalen User-Agent-Stilen, die den niedrigsten Vorrang haben, bis hin zu Stilen in derzeit angewendeten Animationen, bis hin zu wichtigen User-Agent-Stilen und dann Stilen, die sich im Übergang befinden, die den höchsten Vorrang haben:

1. Benutzer-Agent normale Stile
2. Benutzer normale Stile
3. Autor normale Stile
4. Stile, die animiert werden
5. Autor wichtige Stile
6. Benutzer wichtige Stile
7. Benutzer-Agent wichtige Stile
8. Stile im Übergang

Der "Benutzer-Agent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Direkt auf einem Element deklarierte Stile mit dem {{HTMLElement('style')}}-Element sind Autorenstile. Ohne animierende und Übergangsstile haben User-Agent normale Stile den niedrigsten Vorrang; User-Agent wichtige Stile haben den höchsten Vorrang.

### Ursprung und Spezifizität

Für jede Eigenschaft ist die „gewinnende“ Deklaration diejenige aus dem Ursprung mit dem Vorrang basierend auf dem Gewicht (normal oder wichtig). Ohne Berücksichtigung von Ebenen wird der Wert aus dem Ursprung mit dem höchsten Vorrang angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifizität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifizität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autorenstile angewendet, sodass nur User-Agent-Stile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die durch Autorenstile festgelegt sind, auch wenn der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass wenn es Konflikte von Stilen aus verschiedenen Ursprüngen gibt, die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifizität im Ursprung, der keinen Vorrang hat.

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

Der "konkurrierende" Selektor im User-Agent-Stylesheet zum Zeitpunkt dieses Schreibens ist `a:any-link`, der ein Spezifitätsgewicht von `0-1-1` hat. Auch wenn dies größer ist als der `0-0-0` Selektor im Autoren-Stylesheet, spielt es keine Rolle, auch wenn der Selektor in Ihrem aktuellen User-Agent anders ist: Die Spezifitätsgewichte aus Autoren- und User-Agent-Ursprüngen werden nie verglichen. Erfahren Sie mehr darüber, [wie das Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Ursprungs-Vorrang gewinnt immer über die Selektor-Spezifizität. Wenn eine Element-Eigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, überschreibt das Autoren-Stylesheet immer die redundanten normalen Eigenschaften, die in einem Benutzer- oder User-Agent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, gewinnt das User-Agent-Stylesheet immer über Autoren- und Benutzerstile. Ursprungs-Vorrang in der Cascade stellt sicher, dass Spezifizierungskonflikte zwischen Ursprüngen nie vorkommen.

Eine letzte Sache, die es zu beachten gilt, bevor wir fortfahren: Die Reihenfolge des Auftretens wird relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs die gleiche Spezifizität haben.

## Überblick über Cascade-Ebenen

Wir verstehen nun den „Ursprungs-Vorrang der Cascade“, aber was ist der „Vorrang der Cascade-Ebene“? Wir werden diese Frage beantworten, indem wir ansprechen, was Cascade-Ebenen sind, wie sie geordnet sind und wie Stile Ebenen zugewiesen werden. Wir werden [reguläre Ebenen](#erstellung_von_cascade-ebenen), [verschachtelte Ebenen](#überblick_über_verschachtelte_cascade-ebenen) und anonyme Ebenen besprechen. Lassen Sie uns zunächst darüber sprechen, was Cascade-Ebenen sind und welche Probleme sie lösen.

### Vorrangsreihenfolge der Cascade-Ebenen

Ähnlich wie wir sechs Ebenen der Priorität basierend auf Ursprung und Bedeutung haben, ermöglichen Cascade-Ebenen die Erstellung von Unter-Ursprungsprioritäten innerhalb eines der Ursprünge.

Innerhalb jeder der sechs Ursprungsgruppen kann es mehrere Cascade-Ebenen geben. Die [Reihenfolge der Ebenenerstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Die Reihenfolge der Erstellung legt die Vorrangsreihenfolge zwischen den Ebenen innerhalb eines Ursprungs fest.

In normalen Ursprungsgruppen werden Ebenen in der Reihenfolge der Erstellung jeder Ebene sortiert. Die Vorrangsreihenfolge reicht von der zuerst erstellten Ebene bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge ist für wichtige Stile umgekehrt. Alle nicht geschichteten wichtigen Stile kaskadieren in eine implizite Ebene, die Vorrang vor allen nicht übergehenden normalen Stilen hat. Die nicht geschichteten wichtigen Stile haben einen niedrigeren Vorrang als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Ebenen haben Vorrang vor wichtigen Stilen in später deklarierten Ebenen innerhalb des gleichen Ursprungs.

Für den Rest dieses Tutorials werden wir unsere Diskussion auf Autorenstile beschränken, aber denken Sie daran, dass Ebenen auch in Benutzer- und User-Agent-Stylesheets existieren können.

### Probleme, die Cascade-Ebenen lösen können

Große Codebasen können Stile haben, die von mehreren Teams, Komponenten-Bibliotheken, Frameworks und Dritten kommen. Egal wie viele Stylesheets eingeschlossen sind, all diese Stile kaskadieren in einem einzigen Ursprung: dem _Autoren_-Stylesheet.

Stile aus vielen Quellen zusammen zu kaskadieren, insbesondere von Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Verschiedene Teams können unterschiedliche Methoden haben; eines könnte eine Best Practice der Reduzierung der Spezifizität haben, während ein anderes einen Standard des Einschlusses einer `id` in jedem Selektor haben könnte.

Spezifität-Konflikte können schnell eskalieren. Ein Webentwickler könnte einen „schnellen Fix“ erstellen, indem er ein `!important`-Flag hinzufügt. Auch wenn dies wie eine einfache Lösung erscheinen mag, verlagert es oft nur den Spezifizitätskrieg von normalen zu wichtigen Deklarationen.

In derselben Weise, wie Cascade-Ursprünge ein Machtgleichgewicht zwischen Benutzer-, User-Agent- und Autorenstilen bieten, bieten Cascade-Ebenen eine strukturierte Möglichkeit, um Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszubalancieren, als ob jede Ebene in einem Ursprung ein Unter-Ursprung wäre. Eine Ebene kann für jedes Team, jede Komponente und jede Drittpartei erstellt werden, mit Stilpriorität basierend auf der Ebenenreihenfolge.

Regeln innerhalb einer Ebene kaskadieren zusammen, ohne mit Stilregeln außerhalb der Ebene zu konkurrieren. Cascade-Ebenen ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich um Spezifizität zwischen diesen Unter-Ursprüngen kümmern zu müssen.

Ebenenvorrang gewinnt immer über Selektorspezifität. Stile in Ebenen mit Vorrang „gewinnen“ über Ebenen mit weniger Vorrang. Die Spezifizität eines Selektors in einer verlierenden Ebene ist irrelevant. Spezifizität spielt immer noch eine Rolle für konkurrierende Eigenschaftswerte innerhalb einer Ebene, aber es gibt keine Spezifizitätsbedenken zwischen Ebenen, da nur die höchste Prioritätsebene für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Cascade-Ebenen lösen können

Cascade-Ebenen erlauben die Erstellung von verschachtelten Ebenen. Jede Cascade-Ebene kann verschachtelte Ebenen enthalten.

Zum Beispiel könnte eine Komponentenbibliothek in eine `components`-Ebene importiert werden. Eine reguläre Cascade-Ebene fügt die Komponentenbibliothek zum Autorenursprung hinzu und entfernt jegliche Spezifizierungskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Ebene kann ein Entwickler verschiedene Themen definieren, jede als separate verschachtelte Ebene. Die Reihenfolge dieser verschachtelten Themenebenen kann basierend auf Media-Queries definiert werden (siehe den Abschnitt [Ebenenerstellung und Media Abfragen](#ebenenerstellung_und_media_abfragen) unten) wie zum Beispiel Viewportgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Ebenen bieten eine Möglichkeit, Themen zu erstellen, die nicht basierend auf Spezifizität in Konflikt stehen.

Die Möglichkeit der Verschachtelung von Ebenen ist sehr nützlich für jeden, der an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeitet.

Die Möglichkeit, verschachtelte Ebenen zu erstellen, beseitigt auch die Sorge, widersprüchliche Ebenennamen zu haben. Dies wird im Abschnitt über [verschachtelte Ebenen](#überblick_über_verschachtelte_cascade-ebenen) behandelt.

> "Autoren können Ebenen erstellen, um Elementstandards, Drittanbieterbibliotheken, Themen, Komponenten, Überschreibungen und andere Styling-Anliegen darzustellen – und sind in der Lage, die Cascade der Ebenen auf eine explizite Weise neu zu ordnen, ohne Selektoren oder Spezifizität innerhalb jeder Ebene zu ändern oder sich auf die Reihenfolge des Auftretens zu verlassen, um Konflikte zwischen Ebenen zu lösen."
>
> —[Spezifikation zu Kaskadierung und Vererbung](https://drafts.csswg.org/css-cascade-5/#layering).

## Erstellung von Cascade-Ebenen

Ebenen können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer) Anweisung, gefolgt von den Namen einer oder mehrerer Ebenen. Dies erstellt benannte Ebenen, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Blockregel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Ebene hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem Schlüsselwort `layer` oder der Funktion `layer()`, die den Inhalt der importierten Datei in diese Ebene zuweist.

Alle drei Methoden erstellen eine Ebene, wenn eine Ebene mit diesem Namen nicht bereits initialisiert wurde. Wenn kein Name in der `@layer`-Regel oder `@import` mit `layer()` angegeben wird, wird eine neue anonyme (unnamete) Ebene erstellt.

> [!NOTE]
> Die Reihenfolge des Vorrangs der Ebenen ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Ebene sind, oder "nicht geebnete Stile", kaskadieren zusammen in eine letzte implizite Ebene.

Lassen Sie uns die drei Möglichkeiten zur Erstellung einer Ebene etwas genauer behandeln, bevor wir über verschachtelte Ebenen sprechen.

### Die @layer-Anweisung zur Erstellung benannter Ebenen

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. Das Deklarieren von Ebenen mit `@layer`, gefolgt von den Namen einer oder mehrerer Ebenen ohne Zuordnung von Stilen, ist eine Möglichkeit, die [Ebenenreihenfolge](#bestimmen_der_vorrangfolge_basierend_auf_der_reihenfolge_der_ebenen) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS-Regel wird verwendet, um eine Cascade-Ebene zu deklarieren und die Reihenfolge des Vorrangs festzulegen, wenn es mehrere Cascade-Ebenen gibt. Die folgende Regel erklärt drei Ebenen, in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie möchten oft, dass Ihre erste Zeile CSS diese `@layer`-Deklaration ist (mit Ebenennamen, die auf Ihre Website passen, natürlich), um die volle Kontrolle über die Ebenenanordnung zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Website ist, wird die Ebenenreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Ebenen vor der obigen Anweisung erstellt wurden, werden diese drei Ebenen erstellt und am Ende der Liste der bestehenden Ebenen hinzugefügt, solange keine Ebenen mit diesen Namen bereits existieren. Wenn jedoch eine Ebene mit dem gleichen Namen bereits existiert, erstellt die obige Anweisung nur zwei neue Ebenen. Zum Beispiel, wenn `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Ebenen wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer-Blockregel zur Erstellung von benannten und anonymen Ebenen

Ebenen können mit der Blockregel `@layer` erstellt werden. Wenn eine `@layer`-Regel auf einen Bezeichner und einen Block von Stilen folgt, wird der Bezeichner verwendet, um die Ebene zu benennen, und die Stile in dieser Regel werden zu den Stilen der Ebene hinzugefügt. Wenn keine Ebene mit dem angegebenen Namen bereits existiert, wird eine neue Ebene erstellt. Wenn eine Ebene mit dem angegebenen Namen bereits existiert, werden die Stile zu der bereits vorhandenen Ebene hinzugefügt. Wenn beim Erstellen eines Stilblocks mit `@layer` kein Name angegeben wird, werden die Stile in der Regel einer neuen anonymen Ebene hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockregeln und eine `@layer`-Anweisung verwendet. Dieses CSS tut das Folgende in der angegebenen Reihenfolge:

1. Erstellen einer benannten `layout`-Ebene
2. Erstellen einer unbenannten, anonymen Ebene
3. Erklären einer Liste von drei Ebenen und Erstellen von nur zwei neuen Ebenen, `theme` und `utilities`, weil `layout` bereits existiert
4. Hinzufügen zusätzlicher Stile zur bereits existierenden `layout`-Ebene
5. Erstellen einer zweiten unbenannten, anonymen Ebene

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

In dem obigen CSS haben wir fünf Ebenen erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Ordnung – mit einer sechsten, impliziten Ebene von nicht geschichteten Stilen im `body`-Stilblock. Die Ebenenordnung ist die Reihenfolge, in der die Ebenen erstellt werden, wobei die implizite Ebene der nicht geschichteten Stile immer die letzte ist. Es gibt keine Möglichkeit, die Ebenenordnung nach ihrer Erstellung zu ändern.

Wir haben einige Stile zu der Ebene mit dem Namen `layout` zugewiesen. Wenn eine benannte Ebene nicht bereits existiert, erstellt das Angeben des Namens in einer `@layer`-Regel, mit oder ohne Zuweisung von Stilen zur Ebene, diese Ebene; dies fügt die Ebene am Ende der Serie der bestehenden Ebenennamen hinzu. Wenn die benannte Ebene bereits existiert, werden alle Stile innerhalb des benannten Blocks zu den Stilen der bereits existierenden Ebene hinzugefügt – das Angeben von Stilen in einem Block durch die Wiederverwendung eines bestehenden Ebenennamens erstellt keine neue Ebene.

Anonyme Ebenen werden erstellt, indem man Stile einer Ebene zuweist, ohne die Ebene zu benennen. Stile können einer unbenannten Ebene nur zum Zeitpunkt ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Nachfolgende Verwendung von `@layer` ohne Ebenennamen erstellt zusätzliche unbenannte Ebenen; es fügt keine Stile zu einer zuvor existierenden unbenannten Ebene hinzu.

Die `@layer`-Regel erstellt eine Ebene, benannt oder nicht, oder fügt Stile zu einer Ebene hinzu, wenn die benannte Ebene bereits existiert. Wir nannten die erste anonyme Ebene `<anonymous(01)>` und die zweite `<anonymous(02)>`, dies dient nur dazu, sie zu erläutern. Dies sind tatsächlich unbenannte Ebenen. Es gibt keine Möglichkeit, auf sie zuzugreifen oder zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Ebene deklarierten Stile werden in einer impliziten Ebene zusammengeführt. Im obigen Beispiel legte die erste Deklaration die Eigenschaft `color: #333` auf `body` fest. Diese wurde außerhalb einer Ebene deklariert. Normale nicht geschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, auch wenn die nicht geschichteten Stile eine niedrigere Spezifizität haben und zuerst im Erscheinungsreihenfolge erscheinen. Dies erklärt, warum die implizite Ebene, die diese ungeschichteten Stile enthält, Vorrang hat, als wäre sie die zuletzt deklarierte Ebene, obwohl das nicht geschichtete CSS zuerst im Codeblock deklariert wurde.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Ebenen deklariert wurde, wurden nur die Ebenen `theme` und `utilities` erstellt; `layout` war bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Ebenen nicht ändert. Derzeit gibt es keine Möglichkeit, die Ebenenreihenfolge nach der Deklaration neu zu ordnen.

Im folgenden Beispiel weisen wir zwei Ebenen Stile zu, erstellen sie und benennen sie gleichzeitig. Da sie bereits existieren, weil sie bei der ersten Verwendung erstellt wurden, tut die Deklaration auf der letzten Zeile nichts.

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

#### Ebenenerstellung und Media Abfragen

Wenn Sie eine Ebene mit [Media](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) Abfragen definieren und die Medien nicht übereinstimmen oder das Feature nicht unterstützt wird, wird die Ebene nicht erstellt. Das folgende Beispiel zeigt, wie das Ändern der Größe Ihres Geräts oder Browsers die Ebenenreihenfolge ändern kann. In diesem Beispiel erstellen wir die `site`-Ebene nur in breiteren Browsern. Dann weisen wir Stile den `page` und `site` Ebenen zu, in der jeweiligen Reihenfolge.

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

Auf breiten Bildschirmen wird die `site`-Ebene in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Andernfalls hat `site` Vorrang vor `page`, weil es auf engen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` im Media-Query auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Ebenen mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Import von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann aber durch eine `@layer`-Regel, die eine oder mehrere Ebenen erstellt, ohne ihnen Stile zuzuweisen, vorangegangen werden. (`@import` kann auch durch eine [`@charset`](/de/docs/Web/CSS/@charset)-Regel vorangegangen werden.)

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

Sie können Stile importieren und Ebenen basierend auf spezifischen Bedingungen erstellen, indem Sie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Das folgende importiert ein Stylesheet in eine `international`-Ebene nur dann, wenn der Browser `display: ruby` unterstützt, und die importierte Datei ist abhängig von der Breite des Bildschirms.

```css
@import "ruby-narrow.css" layer(international) supports(display: ruby)
  (width < 32rem);
@import "ruby-wide.css" layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode, um Stylesheets zu verknüpfen. Verwenden Sie `@import`, um ein Stylesheet in eine Ebene zu importieren, wenn Sie `@layer` nicht im Stylesheet verwenden können.

## Überblick über verschachtelte Cascade-Ebenen

Verschachtelte Ebenen sind Ebenen innerhalb einer benannten oder anonymen Ebene. Jede Cascade-Ebene, sogar eine anonyme, kann verschachtelte Ebenen enthalten. Ebenen, die in eine andere Ebene importiert werden, werden zu verschachtelten Ebenen innerhalb dieser Ebene.

### Vorteile des Verschachtelns von Ebenen

Die Fähigkeit, Ebenen zu verschachteln, ermöglicht es Teams, Cascade-Ebenen zu erstellen, ohne sich Gedanken darüber zu machen, ob andere Teams sie in eine Ebene importieren. Ähnlich ermöglicht das Verschachteln, Drittanbieter-Stylesheets in eine Ebene zu importieren, ohne sich Gedanken darüber zu machen, ob dieses Stylesheet selbst Ebenen hat. Da Ebenen verschachtelt werden können, müssen Sie sich keine Sorgen über widersprüchliche Ebenennamen zwischen externen und internen Stylesheets machen.

### Erstellung von verschachtelten Cascade-Ebenen

Verschachtelte Ebenen können mit den gleichen Methoden wie reguläre Ebenen erstellt werden. Zum Beispiel können sie mit der `@layer`-Regel gefolgt von den Namen einer oder mehrerer Ebenen erstellt werden, unter Verwendung einer Punktnotation. Mehrere Punkte und Ebenennamen zeigen mehrere Verschachtelungen an.

Wenn Sie eine Blockregel `@layer` innerhalb einer anderen Blockregel `@layer` verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Ebene. Ähnlich, wenn ein Stylesheet mit einer `@import`-Deklaration, die das Schlüsselwort `layer` oder die Funktion `layer()` enthält, importiert wird, werden die Stile dieser benannten oder anonymen Ebene zugewiesen. Wenn die `@import`-Anweisung Ebenen enthält, werden diese Ebenen zu verschachtelten Ebenen innerhalb dieser anonymen oder benannten Ebene.

Sehen wir uns das folgende Beispiel an:

```css
@import "components-lib.css" layer(components);
@import "narrow-theme.css" layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Ebene. Wenn diese Datei Ebenen, benannte oder nicht, enthält, werden diese Ebenen zu verschachtelten Ebenen innerhalb der `components`-Ebene.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Ebene, die eine Unterebene der `components`-Ebene ist. Die geschachtelte `components.narrow` wird als letzte Ebene innerhalb der `components`-Ebene erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Ebene, in diesem Fall würde der Inhalt von `narrow-theme.css` der geschachtelten `components.narrow`-Ebene hinzugefügt. Zusätzliche geschachtelte benannte Ebenen können zur `components`-Ebene unter Verwendung des Musters `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Ebenen erstellt werden, aber sie können anschließend nicht mehr aufgerufen werden.

Sehen wir uns ein weiteres Beispiel an, in dem wir [`layers1.css` in eine benannte Ebene](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung importieren:

```css
@import "layers1.css" layer(example);
```

Dies wird eine einzige Ebene namens `example` erstellen, die einige Deklarationen und fünf verschachtelte Ebenen enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>`.

Um Stile zu einer benannten verschachtelten Ebene hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen der Vorrangfolge basierend auf der Reihenfolge der Ebenen

Die Reihenfolge der Ebenen bestimmt ihre Vorrangreihenfolge. Daher ist die Reihenfolge der Ebenen sehr wichtig. In der gleichen Weise, wie die Kaskade nach Ursprung und Bedeutung sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsebene und Bedeutung.

### Vorrangsreihenfolge regulärer Cascade-Ebenen

```css
@import "A.css" layer(firstLayer);
@import "B.css" layer(secondLayer);
@import "C.css";
```

Der obige Code erstellt zwei benannte Ebenen (C.css-Stile werden der impliziten Ebene nicht geschichteter Stile hinzugefügt). Lassen Sie uns davon ausgehen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) innerhalb von ihnen keine zusätzlichen Ebenen enthalten. Die folgende Liste zeigt, wo innerhalb und außerhalb dieser Dateien deklarierte Stile vom geringsten (1) bis zum höchsten Vorrang (10) sortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. nicht geschichtete normale Stile (`C.css`)
4. inline normale Stile
5. animierende Stile
6. nicht geschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. inline wichtige Stile
10. Übergangsstile

Normale Stile, die innerhalb von Ebenen deklariert werden, erhalten die niedrigste Priorität und werden nach der Reihenfolge der Erstellung der Ebenen sortiert. Normale Stile in der zuerst erstellten Ebene haben den niedrigsten Vorrang und normale Stile in der zuletzt erstellten Ebene haben den höchsten Vorrang unter den Ebenen. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` erklärt werden, werden von allen nachfolgenden Stylings in der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb von Ebenen deklariert sind. Die Stile in `C.css` wurden nicht in eine Ebene importiert und überschreiben alle konkurrierenden Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Ebene deklariert sind, haben immer höheren Vorrang als Stile, die innerhalb einer Ebene _sind_ deklariert (mit Ausnahme wichtiger Stile).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normal deklarierte Stile auf diese Weise haben Vorrang über normale Stile in den nicht geschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`).

Animierte Stile haben höheren Vorrang als alle normalen Stile, einschließlich inline normaler Stile.

Wichtige Stile, das heißt Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang über alle zuvor in unserer Liste genannten Stile. Sie werden in umgekehrter Reihenfolge zu normalen Stilen sortiert. Alle wichtig deklarierten außerhalb einer Ebene haben weniger Vorrang als diejenigen, die innerhalb einer Ebene deklariert sind. Wichtige Stile, die innerhalb von Ebenen gefunden werden, werden ebenfalls in der Reihenfolge der Erstellung der Ebenen sortiert. Bei wichtigen Stilen hat die zuletzt erstellte Ebene den niedrigsten Vorrang und die zuerst erstellte Ebene den höchsten Vorrang unter den deklarierten Ebenen.

Inline wichtige Stile haben wiederum höheren Vorrang als an anderer Stelle deklarierten wichtigen Stile.

Übergangsstile haben den höchsten Vorrang. Wenn ein normaler Eigenschaftswert übergeht, hat er Vorrang vor allen anderen Eigenschaftswertdeklarationen, auch wichtigen Inline-Stilen, jedoch nur während des Übergangs.

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

In diesem Beispiel werden zwei Ebenen (`A` und `B`) initialisiert, indem eine `@layer`-Anweisung ohne Stile definiert wird. Die Ebenenstile werden in zwei `@layer`-Block-Regeln definiert, die nach der `h1` CSS-Regel erscheinen, die außerhalb jeder Ebene deklariert ist.

Die Inline-Stile, die dem `h1`-Element mit dem `style`-Attribut hinzugefügt wurden, setzen ein normales `color` und ein wichtiges `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Das normale `text-decoration` und wichtige `box-shadow` sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Für normale Nicht-Inline-Stile haben ungeschichtete Stile Vorrang. Bei wichtigen Stilen spielt die Ebenenreihenfolge eine Rolle. Während normale ungeschichtete Stile alle normalen Stile in einer Ebene überschreiben, ist dies bei wichtigen Stilen umgekehrt; ungeschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die zwei Stile, die nur innerhalb von Ebenen deklariert sind, sind `font-style` mit normaler Bedeutung und `font-weight` mit einem `!important`-Flag. Für normale Stile überschreibt die zuletzt deklarierte Ebene `B` die Stile in der früher deklarierten Ebene `A`. Für normale Stile haben spätere Ebenen Vorrang vor früheren Ebenen. Bei wichtigen Stilen ist die Vorrangsreihenfolge umgekehrt. Für die wichtigen `font-weight` Deklarationen hat die zuerst deklarierte Ebene `A` Vorrang vor der zuletzt deklarierten Ebene `B`.

Sie können die Ebenenreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` in `@layer B, A;` ändern. Versuchen Sie das. Welche Stile ändern sich dadurch und welche bleiben gleich? Warum?

Die Reihenfolge der Ebenen wird durch die Reihenfolge festgelegt, in der die Ebenen in Ihrem CSS erscheinen. In unserer ersten Zeile erklärten wir Ebenen, ohne Stilen zuzuweisen, mit `@layer`, gefolgt von den Namen unserer Ebenen, abgeschlossen mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse dieselben gewesen. Warum? Wir ordneten Stilregeln in benannten `@layer`-Blöcken in der Reihenfolge A dann B zu. Die beiden Ebenen wurden in dieser ersten Zeile erstellt. Hätten sie dies nicht, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen aufgenommen: erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil oft das Deklarieren der Ebenenordnung im Voraus die beste Praxis für Ihr Ebenenbestandsmanagement ist.

Zusammenfassend:

- Die Vorrangsreihenfolge der Ebenen ist die Reihenfolge, in der die Ebenen erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Ebenenordnung zu ändern.
- Die Ebenenordnung für normale Stile ist die Reihenfolge, in der die Ebenen erstellt werden.
- Nicht geschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Ebenenordnung für wichtige Stile ist umgekehrt, wobei frühere erstellte Ebenen Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von Stilen, die übergehen.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was temporär ist).

### Vorrangsreihenfolge verschachtelter Cascade-Ebenen

Die Cascade-Vorrangsreihenfolge verschachtelter Ebenen ist ähnlich der regulärer Ebenen, jedoch innerhalb der Ebene. Die Vorrangsreihenfolge basiert auf der Reihenfolge der Erstellung der verschachtelten Ebenen. Nicht verschachtelte Stile innerhalb einer Ebene haben Vorrang vor normalen verschachtelten Stilen, wobei die Vorrangsreihenfolge für wichtige Stile umgekehrt ist. Das Spezifizitätsgewicht zwischen verschachtelten Ebenen spielt keine Rolle, obwohl es für konkurrierende Stile innerhalb einer verschachtelten Ebene eine Rolle spielt.

Das Folgende erstellt und fügt Stile zur `components`-Ebene, zur verschachtelten `components.narrow`-Ebene und zur verschachtelten `components.wide`-Ebene hinzu:

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

{{EmbedLiveSample("Vorrangsreihenfolge verschachtelter Cascade-Ebenen", "100%", "250")}}

Hier ist eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Da nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat`-Farbe.
- `border`: Da nicht verschachtelte Stile innerhalb einer Ebene Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `red`-Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, wobei wichtige Stile in früher deklarierten Ebenen Vorrang vor später deklarierten Ebenen haben. In diesem Beispiel ist die Reihenfolge der Erstellung der verschachtelten Ebenen `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass die `purple`-Farbe gewinnt.
- `border-radius`: Die Eigenschaft ist nur in den verschachtelten Ebenen gesetzt, daher gewinnt die `20%`-Radius entsprechend der Deklarationsreihenfolge.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden ein paar weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Die Cascade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade#task_2).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechanismen der CSS-Cascade-Ebenen vertraut.
