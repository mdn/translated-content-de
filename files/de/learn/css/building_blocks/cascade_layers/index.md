---
title: Kaskadenschichten
slug: Learn/CSS/Building_blocks/Cascade_layers
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

Diese Lektion soll Ihnen [Kaskadenschichten](/de/docs/Web/CSS/@layer) vorstellen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

Wenn Sie neu in CSS sind, kann es zu Beginn weniger relevant erscheinen und etwas akademischer wirken als andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen dessen zu kennen, was Kaskadenschichten sind, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr wird das Verständnis von Kaskadenschichten und deren Nutzung Ihnen helfen, den Schmerz zu vermeiden, eine Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklerteams zu verwalten.

Kaskadenschichten sind am relevantesten, wenn Sie mit CSS aus mehreren Quellen arbeiten, bei denen es zu Konflikten zwischen CSS-Selektoren und konkurrierender Spezifität kommt oder wenn Sie darüber nachdenken, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis dafür, wie CSS funktioniert, einschließlich Kaskade und Spezifität (lernen Sie
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

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle Eigenschaftswerte, die auf ein Element angewendet werden, anzeigen, indem Sie das Element in den Entwicklertools Ihres Browsers untersuchen. Das „Styles“-Panel des Tools zeigt alle Eigenschaftswerte, die auf das untersuchte Element angewendet werden, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Der Selektor aus der Quelle mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel durchgestrichene Werte an, die dem ausgewählten Element entsprachen, aber aufgrund der Kaskade, Spezifität oder Quellenreihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus derselben Quelle mit Vorrang stammen, aber mit geringerer Spezifität oder mit übereinstimmender Quelle und Spezifität, wurden aber früher im Code gefunden. Bei jedem angewendeten Eigenschaftswert kann es mehrere Deklarationen geben, die durchgestrichen sind und aus vielen verschiedenen Quellen stammen. Wenn ein durchgestrichener Stil angezeigt wird, der einen Selektor mit größerer Spezifität aufweist, bedeutet dies, dass der Wert an Ursprünglichkeit oder Wichtigkeit mangelt.

Oft, mit wachsender Komplexität einer Website, steigt die Anzahl der Stylesheets, was die Reihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Kaskadenschichten vereinfachen die Wartung von Stylesheets in solchen Codebasen. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die CSS-Deklarationen ermöglichen, die letztendlich angewendet werden, und Webentwickler in die Lage versetzen, Abschnitte von CSS zu priorisieren, ohne gegen die Spezifität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das „C“ in CSS steht für „Cascading“. Es ist die Methode, mit der Stile zusammenfließen. Der Benutzeragent führt mehrere klar definierte Schritte durch, um die Werte zu ermitteln, die jeder Eigenschaft für jedes Element zugewiesen werden. Wir werden diese Schritte hier kurz auflisten und dann in Schritt 4, **Kaskadenschichten**, tiefer gehen, was Sie hierher gebracht hat:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Selector-Match für jedes Element.
2. **Bedeutung:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind solche, die das [`!important`](/de/docs/Web/CSS/important) Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb jedes der beiden Wichtigkeitsstufen Regeln nach Autor-, Benutzer- oder Benutzeragenten-Ursprung.
4. **Kaskadenschichten:** Sortieren Sie innerhalb jeder der sechs Ursprung-Wichtigkeitsstufen nach Kaskadenschicht. Die Schichtenreihenfolge für normale Deklarationen reicht von der ersten bis zur letzten erstellten Schicht, gefolgt von schichtfreien normalen Stilen. Diese Reihenfolge ist bei wichtigen Stilen umgekehrt, wobei schichtfreie wichtige Stile die geringste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungsreihe mit Vorrang sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/Specificity).
6. **Erfassungsnähe**: Wenn zwei Selektoren im Ursprungsbereich mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb von Scoped-Regeln mit der geringsten Anzahl von Sprüngen nach oben in der DOM-Hierarchie zur geladenen Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Reihenfolge des Auftretens:** Wenn zwei Selektoren im Ursprungsbereich mit Vorrang dieselbe Spezifität und Eingrenzungsnähe haben, gewinnt der Eigenschaftswert aus dem zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt gehen nur die Deklarationen „weiter im Rennen“ in den nächsten Schritt über, um dort zu „konkurrieren“. Wenn nur eine Deklaration im Rennen ist, „gewinnt“ sie und die nachfolgenden Schritte sind nicht relevant.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types): Benutzeragenten-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungsstufen nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Vorrangigkeit: die sechs Ursprungsstufen, Eigenschaften, die sich in einem Übergang befinden, und animierte Eigenschaften. Die Reihenfolge der Vorrangigkeit reicht von normalen Benutzeragenten-Stilen, die die niedrigste Priorität haben, bis zu Stilen in aktuell angewendeten Animationen, über wichtige Benutzeragenten-Stile, und dann Stile im Übergang, die die höchste Priorität haben:

1. normale Benutzeragenten-Stile
2. normale Benutzerstile
3. normale Autorenstile
4. Stile, die animiert werden
5. wichtige Autorenstile
6. wichtige Benutzerstile
7. wichtige Benutzeragenten-Stile
8. Stile, die im Übergang sind

Der „Benutzeragent“ ist der Browser. Der „Benutzer“ ist der Site-Besucher. Der „Autor“ sind Sie, der Entwickler. Stile, die direkt auf ein Element über das {{HTMLElement('style')}}-Element deklariert werden, sind Autorenstile. Ohne Berücksichtigung von animierten und im Übergang befindlichen Stilen haben normale Benutzeragenten-Stile die niedrigste Priorität; wichtige Benutzeragenten-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die „gewinnt“, diejenige aus dem Ursprung mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Ohne Berücksichtigung von Schichten gilt der Wert aus dem Ursprung mit der höchsten Priorität. Wenn der Gewinner-Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, werden die [Spezifität](/de/docs/Web/CSS/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Spezifität wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im untenstehenden Beispiel gibt es zwei Links. Der erste hat keine angewendeten Autorenstile, sodass nur Benutzeragenten-Stile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color) durch Autorenstile gesetzt, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile „gewinnen“, liegt darin, dass bei widersprüchlichen Styles aus verschiedenen Ursprüngen die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifität im Ursprung ohne Vorrang.

{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}

Der „konkurrierende“ Selektor im Benutzeragenten-Stylesheet zur Zeit dieses Schreibens ist `a:any-link`, der eine Spezifitätsgewichtung von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0` Selektor im Autoren-Stylesheet, spielt es keine Rolle, selbst wenn der Selektor in Ihrem aktuellen Benutzeragenten anders ist: Die Spezifikationsgewichte der Autoren- und Benutzeragenten-Ursprünge werden nie verglichen. Erfahren Sie mehr darüber, [wie die Spezifikationsgewichtung berechnet wird](/de/docs/Web/CSS/Specificity#how_is_specificity_calculated).

Die Vorrangigkeit des Ursprungs gewinnt immer über die Spezifität des Selektors. Wenn eine Eigenschaft eines Elements mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt wird, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder Benutzeragenten-Stylesheet deklariert sind. Wenn der Stil wichtig ist, wird das Benutzeragenten-Stylesheet immer über die Autoren- und Benutzerstile gewinnen. Die Vorrangigkeit des Kaskadenursprungs gewährleistet, dass Spezifikationskonflikte zwischen Ursprüngen nie auftreten.

Ein letzter wichtiger Hinweis: Die Reihenfolge des Auftretens wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprung mit Vorrang dieselbe Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen jetzt „Vorrang von Kaskadenursprüngen“, aber was ist „Vorrang von Kaskadenschichten“? Wir werden diese Frage beantworten, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie geordnet sind und wie Stile Kaskadenschichten zugeordnet werden. Wir werden [normale Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten behandeln. Lassen Sie uns zunächst besprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangreihenfolge von Kaskadenschichten

Ähnlich wie wir sechs Prioritätsstufen basierend auf Ursprung und Wichtigkeit haben, ermöglichen es uns Kaskadenschichten, eine Unterebene der Priorität innerhalb von jedem dieser Ursprünge zu schaffen.

Innerhalb jeder der sechs Ursprungsstufen kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichten-Erstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Vorrangreihenfolge zwischen Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungsstufen sind die Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Vorrangreihenfolge reicht von der zuerst erstellten Schicht bis zur letzten, gefolgt von schichtfreien normalen Stilen.

Diese Reihenfolge ist umgekehrt für wichtige Stile. Alle schichtfreien wichtigen Stile fließen in eine implizite Schicht mit Vorrang über alle nicht im Übergang befindlichen normalen Stile. Die schichtfreien wichtigen Stile haben eine geringere Vorrangigkeit als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang vor wichtigen Stilen in später deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieser Anleitung beschränken wir unsere Diskussion auf Autorenstile, aber beachten Sie, dass Schichten auch in Benutzer- und Benutzeragenten-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile aus mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern enthalten. Unabhängig davon, wie viele Stylesheets einbezogen werden, alle diese Stile fließen innerhalb eines Ursprungs zusammen: dem _Autoren_-Stylesheet.

Stile aus vielen Quellen zusammenfließen zu lassen, insbesondere von Teams, die nicht zusammenarbeiten, kann Probleme verursachen. Verschiedene Teams können unterschiedliche Methoden haben; eines kann die bewährte Praxis haben, die Spezifität zu reduzieren, während ein anderes den Standard hat, eine `id` in jedem Selektor enthalten zu haben.

Spezifikationskonflikte können schnell eskalieren. Ein Webentwickler kann einen „schnellen Fix“ durch Hinzufügen eines `!important`-Flags erstellen. Obwohl dies wie eine einfache Lösung erscheinen mag, verschiebt es oft nur den Spezifikationskrieg von normalen zu wichtigen Deklarationen.

So wie Kaskadenursprünge ein Kräftegleichgewicht zwischen Benutzer-, Benutzeragenten- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzelnen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht in einem Ursprung ein Unterursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Stilpräferenz basierend auf der Schichtenreihenfolge.

Regeln innerhalb einer Schicht fließen zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich Gedanken über Spezifikationen zwischen diesen Unterursprüngen machen zu müssen.

Die Vorrangigkeit der Schicht gewinnt immer über die Spezifikationsgewichte des Selektors. Stile in Schichten mit Vorrang „gewinnen“ über Schichten mit geringerem Vorrang. Die Spezifikationsgewichte eines Selektors in einer verlierenden Schicht sind irrelevant. Spezifikationsgewichte sind nach wie vor wichtig für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifikationsprobleme zwischen Schichten, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten ermöglichen die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht kann A, B, C sein. verschachtelte Schichten enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Autorenursprung hinzu und entfernt jegliche Spezifikationskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als eine separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Themen-Schichten kann basierend auf Medienabfragen (siehe den untenstehenden Abschnitt [Layer-Erstellung und Medienabfragen](#schichterstellung_und_medienabfragen)), wie z.B. Viewportgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation), festgelegt werden. Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifikationsbasis konkurrieren.

Die Möglichkeit, Schichten zu verschachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Widgets von Drittanbietern und Themen arbeiten.

Die Möglichkeit, verschachtelte Schichten zu erstellen, entfernt auch die Sorge, sich widersprechende Schichtnamen zu haben. Wir werden dies im Abschnitt [verschachtelte Schicht](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Element-Defaults, Bibliotheken von Drittanbietern, Themen, Komponenten, Overrides und andere Styling-Anforderungen zu repräsentieren – und können die Kaskade von Schichten auf eine explizite Weise neu anordnen, ohne Selektoren oder Spezifikationen innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen Schichten zu lösen."
>
> —[Cascading and Inheritance Specification](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können mit einer der folgenden Methoden erstellt werden:

- Die Regel auf der Regel `@layer`-Klausel, die Schichten mit `@layer` deklariert, gefolgt von den Namen von einer oder mehreren Schichten. Dies erstellt benannte Schichten ohne Zuweisung von Styles zu ihnen.
- Die `@layer`-Blockregel, in der alle Styles innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die Regel [`@import`](/de/docs/Web/CSS/@import) mit dem Keyword `layer` oder der Funktion `layer()`, die den Inhalt der importierten Datei in diese Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn kein Schichtname in der `@layer`-Regel oder `@import` mit `layer()` angegeben wird, wird eine neue anonyme (nicht benannte) Schicht erstellt.

> [!NOTE]
> Die Reihenfolge der Vorrangigkeit von Schichten ist die Reihenfolge, in der sie erstellt werden. Styles, die nicht in einer Schicht sind, oder „schichtfreie Stile“, fließen in eine letzte implizite Bezeichnung zusammen.

Gehen wir etwas detaillierter auf die drei Methoden zur Erstellung einer Schicht ein, bevor wir über verschachtelte Schichten sprechen.

### Die @layer-Erklärung für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Die Deklaration von Schichten mit `@layer` gefolgt von den Namen von einer oder mehreren Schichten, ohne Zuweisung von Styles, ist eine Möglichkeit, die [Schichtenreihenfolge](#bestimmen_der_vorrangigkeit_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die CSS-Regel [`@layer`](/de/docs/Web/CSS/@layer) wird verwendet, um eine Kaskadenschicht zu deklarieren und die Reihenfolge der Vorrangigkeit zu definieren, wenn es mehrere Kaskadenschichten gibt. Die folgende Regel erklärt drei Schichten, in der Reihenfolge, in der sie aufgelistet sind:

```css
@layer theme, layout, utilities;
```

Sie werden oft wollen, dass Ihre erste Zeile CSS diese `@layer`-Deklaration ist (natürlich mit Schichtnamen, die für Ihre Site sinnvoll sind), um die volle Kontrolle über die Schichtenreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Site ist, ist die Schichtenreihenfolge `theme`, `layout` und `utilities`. Wenn einige Schichten vor dieser Anweisung erstellt wurden, solange keine Schichten mit diesen Namen bereits existieren, werden diese drei Schichten erstellt und am Ende der Liste der vorhandenen Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, erstellt die obenstehende Anweisung nur zwei neue Schichten. Wenn beispielsweise `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten in diesem Fall wird `layout`, `theme` und `utilities` sein.

### Die @layer-Blockregel für benannte und anonyme Schichten

Schichten können mithilfe der blockweisen `@layer`-Regel erstellt werden. Wenn auf eine `@layer`-Regel ein Bezeichner und ein Block von Styles folgt, wird der Bezeichner verwendet, um die Schicht zu benennen, und die Styles in dieser Regel werden den Styles der Schicht hinzugefügt. Wenn noch keine Schicht mit dem angegebenen Namen existiert, wird eine neue Schicht erstellt. Wenn bereits eine Schicht mit dem angegebenen Namen existiert, werden die Styles zur vorher bestehenden Schicht hinzugefügt. Wenn beim Erstellen eines Blocks von Styles über `@layer` kein Name angegeben wird, werden die Styles in der Regel einer neuen anonymen Schicht hinzugefügt.

Im Beispiel unten haben wir vier `@layer`-Blockregel und eine `@layer`-Anweisung. Dieses CSS tut in der angegebenen Reihenfolge Folgendes:

1. Erstellt eine benannte `layout` Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt weitere Styles zur bereits bestehenden `layout`-Schicht hinzu
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

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten impliziten Schicht von schichtfreien Stilen, die im `body`-Stilblock enthalten sind. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, wobei die implizite Schicht von schichtfreien Stilen immer als letzte folgt. Es gibt keine Möglichkeit, die Schichtreihenfolge einmal erstellt zu ändern.

Wir haben einige Styles der Schicht `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, erstellt der Name dieser Schicht in einer `@layer`-Regel, mit oder ohne Zuweisung von Styles, die Schicht; Dies fügt die Schicht am Ende der Serien existierender Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Styles innerhalb des benannten Blocks zu den bereits in der vorher bestehenden Schicht vorhandenen Styles hinzugefügt – das Zuweisen von Styles in einem Block, indem ein vorhandener Schichtname wiederverwendet wird, erstellt keine neue Schicht.

Anonyme Schichten werden erstellt, indem Stile zu einer Schicht hinzugefügt werden, ohne die Schicht zu benennen. Zu einer unbenannten Schicht können nur beim erstmaligen Erstellen der Schicht Stile hinzugefügt werden.

> [!NOTE]
> Nachfolgende Verwendungen von `@layer` ohne Schichtname erstellen zusätzliche unbenannte Schichten; sie fügen keine Styles zu einer zuvor existierenden unbenannten Schicht hinzu.

Die `@layer`-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Styles zu einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>` genannt; dies ist nur zu Erklärungszwecken. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, auf sie zu verweisen oder zusätzliche Styles hinzuzufügen.

Alle Stile, die außerhalb einer Schicht deklariert sind, werden in einer impliziten Schicht zusammengefasst. Im obigen Beispielcode hat die erste Deklaration die `color: #333`-Eigenschaft auf `body` gesetzt. Dies wurde außerhalb einer Schicht deklariert. Normale schichtfreie Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, auch wenn die schichtfreien Stile eine geringere Spezifität haben und zuerst in der Erscheinungsreihenfolge deklariert werden. Dies erklärt, warum selbst wenn das schichtfreie CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese schichtfreien Styles enthält, Vorrang hat, als ob sie die zuletzt deklarierte Schicht wäre.

In der Linie `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die `theme`- und `utilities`-Schichten erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge bereits erstellter Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, die Schichtenreihenfolge einmal deklariert zu ändern.

Im folgenden interaktiven Beispiel weisen wir Styles zwei Schichten zu, indem wir sie erstellen und dabei benennen. Da sie bereits existieren, nachdem sie zuerst verwendet wurden, ändert ihre Deklaration in der letzten Zeile nichts.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-order.html", '100%', 500)}}

Versuchen Sie, die letzte Zeile, `@layer site, page;`, zur ersten Zeile zu machen. Was passiert dann?

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht mit [Media](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)- oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)-Abfragen definieren und die Medien nicht übereinstimmen oder das Feature wird nicht unterstützt, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie die Schichtreihenfolge durch Ändern der Größe Ihres Geräts oder Browsers geändert werden kann. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen dann Styles in folgender Reihenfolge zu: `page` und `site`.

{{EmbedGHLiveSample("css-examples/learn/layers/media-order.html", '100%', 500)}}

Auf breiten Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` eine geringere Vorrangigkeit als `page` hat. Andernfalls hat `site` Vorrang vor `page`, weil es später auf schmalen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, den `50em`-Wert in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die Regel [`@import`](/de/docs/Web/CSS/@import) ermöglicht es Benutzern, Styles aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{HTMLElement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Styles innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Styles, kann jedoch durch eine `@layer`-Regel vorangehen, die eine oder mehrere Schichten erstellt, ohne Styles den Schichten zuzuweisen. (`@import` kann auch durch eine [`@charset`](/de/docs/Web/CSS/@charset)-Regel vorangestellt werden.)

Sie können ein Stylesheet in eine benannte, eine verschachtelte benannte oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in die `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in eine einzelne Schicht importieren. Die folgende Deklaration importiert zwei separate Dateien in eine einzige `social`-Schicht:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Styles importieren und Schichten basierend auf spezifischen Bedingungen erstellen, indem Sie [Medienanfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Die folgende importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die zu importierende Datei ist abhängig von der Bildschirmbreite.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby) and
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby) and
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode des Verlinkens von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` im Stylesheet nicht verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder einer anonymen Schicht. Jede Kaskadenschicht, sogar eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile von verschachtelten Schichten

Die Möglichkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Gedanken darüber zu machen, ob andere Teams sie in eine Schicht importieren. Ebenso ermöglicht es Verschachtelung, externe Stylesheets in eine Schicht zu importieren, ohne sich Sorgen zu machen, ob dieses Stylesheet selbst Schichten hat. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen über widersprüchliche Schichtnamen zwischen externen und internen Stylesheets machen.

### Erstellen verschachtelter Kaskadenschichten

Verschachtelte Schichten können mit denselben Methoden wie reguläre Schichten erstellt werden. Beispielsweise können sie mit der `@layer`-Regel gefolgt von den Namen von einer oder mehreren Schichten erstellt werden, indem eine Punktnotation verwendet wird. Mehrere Punkte und Schichtnamen bedeuten mehrfache Verschachtelung.

Wenn Sie eine blockweise `@layer`-Regel in eine andere blockweise `@layer`-Regel verschachteln, mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration mit dem Keyword `layer` oder der Funktion `layer()` importiert wird, werden die Styles dieser benannten oder anonymen Schicht zugeordnet. Wenn die `@import`-Anweisung Schichten enthält, werden diese Schichten verschachtelte Schichten innerhalb dieser anonymen oder benannten Schicht.

Lassen Sie uns das folgende Beispiel betrachten:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei irgendwelche Schichten enthält, benannt oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

In der zweiten Zeile importieren wir `narrow-theme.css` in die `narrow`-Schicht, die eine Unterschicht von `components` ist. Die verschachtelte `components.narrow` wird als die letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall würden die Inhalte von `narrow-theme.css` zur verschachtelten `components.narrow`-Schicht hinzugefügt werden. Zusätzliche verschachtelte benannte Schichten können zur `components`-Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können anschließend nicht erneut zugegriffen werden.

Lassen Sie uns ein weiteres Beispiel betrachten, bei dem wir [`layers1.css` in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) importieren mit der folgenden Anweisung:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne Schicht mit dem Namen `example` erstellen, die einige Deklarationen und fünf verschachtelte Schichten enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Styles zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmen der Vorrangigkeit basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt deren Vorrangigkeit. Daher ist die Reihenfolge der Schichten sehr wichtig. In der gleichen Art und Weise wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungsschicht und Wichtigkeit.

### Vorrangreihenfolge regulärer Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden der impliziten Schicht von schichtfreien Stilen hinzugefügt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css` und `C.css`) keine zusätzlichen Schichten enthalten. Die folgende Liste zeigt, wo Stile, die innerhalb und außerhalb dieser Dateien deklariert werden, von der geringsten (1) Vorrangigkeit bis zur höchsten (10) sortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. ungedeckelte normale Stile (`C.css`)
4. inline normale Stile
5. animierte Stile
6. schichtfreie wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. inline wichtige Stile
10. Übergangsstile

Normale Stile, die innerhalb von Schichten deklariert werden, erhalten die niedrigste Priorität und werden sortiert, je nach der Reihenfolge, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben die geringste Vorrangigkeit, und normale Stile in der zuletzt erstellten Schicht haben die höchste Vorrangigkeit unter den Schichten. Anders gesagt, normale Stile, die innerhalb von `firstLayer` deklariert werden, werden durch nachfolgende Stile auf der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb von Schichten deklariert werden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle widersprüchlichen Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer eine höhere Vorrangigkeit als Stile, die in einer Schicht deklariert _sind_ (mit Ausnahme wichtiger Stile).

Inline Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang vor normalen Stilen, die in den schichtfreien und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) zu finden sind.

Animierte Stile haben höhere Vorrangigkeit als normale Stile, einschließlich inline normaler Stile.

Wichtige Stile, also Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor genannten Stilen in unserer Liste. Sie werden in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert werden, haben weniger Vorrang als die innerhalb einer Schicht deklarierten. Wichtige Stile, die in Schichten zu finden sind, werden auch in der Reihenfolge der Schichterstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht die geringste Vorrangigkeit und die zuerst erstellte Schicht hat die höchste Vorrangigkeit unter den deklarierten Schichten.

Inline wichtige Stile haben erneut die höhere Vorrangigkeit als wichtige Stile, die anderswo deklariert wurden.

Übergangsstile haben die höchste Vorrangigkeit. Wenn ein normaler Eigenschaftswert übergangen wird, hat er Vorrang über alle anderen Eigenschaftswert-Deklarationen, sogar über inline wichtige Stile; jedoch nur während des Übergangs.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-precedence.html", '100%', 500)}}

In diesem Beispiel werden zwei Schichten (`A` und `B`) initial definiert, indem eine `@layer`-Anweisung ohne Stile verwendet wird. Die Schichtstile werden in zwei `@layer`-Blockanweisungen definiert, die nach der `h1`-CSS-Regel erscheinen, die außerhalb einer beliebigen Schicht deklariert wird.

Die hinzugefügten Inline-Stile auf dem `h1`-Element unter Verwendung des `style`-Attributs setzen eine normale `color`- und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normalen Stile `text-decoration` und `box-shadow` sind nicht Teil der Inline-Styles im `style`-Element und können daher überschrieben werden. Für normale Nicht-Inline-Stile haben ungeschichtete Stile Vorrang. Für wichtige Stile zählt auch die Schichtenreihenfolge. Während normale ungeschichtete Stile alle normalen in einer Schicht gesetzten Stile überschreiben, ist bei wichtigen Stilen die Vorrangigkeit umgekehrt; ungeschichtete wichtige Stile haben geringeren Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert werden, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit `!important`-Flag. Für normale Stile überschreibt die letzte deklariert Schicht `B` Stile in der früher deklarierten Schicht `A`. Für normale Stile haben spätere Schichten Vorrang vor früheren Schichten. Die Vorrangreihenfolge wird bei wichtigen Stilen umgekehrt. Für die wichtigen Deklarationen von `font-weight` hat die zuerst deklarierte Schicht `A` also Vorrang über die zuletzt deklarierte Schicht `B`.

Sie können die Schichtenreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` in `@layer B, A;` ändern. Probieren Sie dies aus. Welche Stile werden dadurch geändert, und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten deklariert, ohne irgendeine Stile zuzuweisen, indem wir `@layer` verwenden, gefolgt von den Namen unserer Schichten, abgeschlossen mit einem Semikolon. Hätten wir diese Zeile weggelassen, wären die Ergebnisse die gleichen. Warum? Wir haben Stilregeln in benannten `@layer`-Blöcken in der Reihenfolge von A nach B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Wären sie es nicht gewesen, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen aufgenommen: Erstens, damit Sie die Zeile einfach bearbeiten und die Reihenfolge umkehren können, und zweitens, weil es oft die beste Praxis ist, die Schichtreihenfolge im Voraus zu deklarieren, um die Reihenfolge Ihrer Schichten zu verwalten.

Zusammenfassend:

- Die Reihenfolge der Vorrangigkeit von Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Nach der Erstellung gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Die Vorrangigkeit der Schicht für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Vorrangigkeit der Schicht für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle wichtigen geschichteten Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von stilen im Übergang.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie vorübergehend in den Übergang zu versetzen, was vorübergehend ist).

### Vorrangreihenfolge verschachtelter Kaskadenschichten

Die Kaskaden-Vorrangreihenfolge für verschachtelte Schichten ist ähnlich wie bei regulären Schichten, jedoch innerhalb der Schicht enthalten. Die Vorrangigkeit basiert auf der Reihenfolge der verschachtelten Schichtserstellung. Nicht verschachtelte Stile in einer Schicht haben Vorrang vor normal verschachtelten Stilen, wobei die Vorrangigkeit für wichtige Stile umgekehrt wird. Die Spezifikationsgewichtung zwischen verschachtelten Schichten spielt keine Rolle, obwohl sie für widersprüchliche Stile innerhalb einer verschachtelten Schicht eine Rolle spielt.

Das folgende erstellt und fügt Stile zur `components`-Schicht, zur `components.narrow` verschachtelten Schicht und zur `components.wide` verschachtelten Schicht hinzu:

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

{{EmbedLiveSample("Vorrangreihenfolge verschachtelter Kaskadenschichten", "100%", "250")}}

Hier eine Zusammenfassung der Eigenschaften, die verwendet werden und warum jede Deklaration angewendet wird:

- `background-color`: Da ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die Farbe `wheat`.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die Farbe `red`.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, wobei wichtige Stile in zuvor deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichterstellung `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang über wichtige Stile in `components.wide` haben, was bedeutet, dass die Farbe `purple` gewinnt.
- `border-radius`: Die Eigenschaft wird nur in den verschachtelten Schichten gesetzt, sodass gemäß der Deklarationsreihenfolge der Radius `20%` gewinnt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie sind jetzt mit den grundlegenden Mechaniken der CSS-Kaskadenschichten vertraut. Als nächstes werden wir uns [das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) im Detail ansehen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}
