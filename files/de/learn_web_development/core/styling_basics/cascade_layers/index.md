---
title: Kaskadenschichten
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Diese Lektion zielt darauf ab, Sie in die [Cascade Layers](/de/docs/Web/CSS/@layer) einzuführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag diese Lektion im Vergleich zu anderen Teilen des Kurses weniger relevant und ein wenig theoretischer erscheinen. Es ist jedoch hilfreich, die Grundlagen der Cascade Layers zu kennen, falls Sie diese in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto besser werden Sie verstehen, wie Cascade Layers funktionieren, und wissen, wie Sie deren Potenzial nutzen können, um Ihnen die Verwaltung einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu erleichtern.

Cascade Layers sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es widersprüchliche CSS-Selektoren und konkurrierende Spezifität gibt oder wenn Sie die Verwendung von [`!important`](/de/docs/Web/CSS/important) in Betracht ziehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (Studieren Sie <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Umgang mit Konflikten</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu lernen, wie Cascade Layers funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle Eigenschaftswerte anzeigen, die auf ein Element angewendet werden, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Styles"-Panel des Tools zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte zusammen mit dem passenden Selektor und der CSS-Quelldatei. Der Selektor mit Vorrang hat seine Werte, die auf das passende Element angewendet werden.

Zusätzlich zu den angewendeten Stilen zeigt das Styles-Panel durchgestrichene Werte an, die zwar auf das ausgewählte Element gepasst haben, aber aufgrund der Kaskade, Spezifität oder Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus demselben Ursprung mit Vorrang stammen, aber eine geringere Spezifität haben, oder aus einem gleichwertigen Ursprung und einer gleichwertigen Spezifität stammen, jedoch vorher in der Codebasis gefunden wurden. Für jeden angewendeten Eigenschaftswert kann es mehrere durchgestrichene Deklarationen aus vielen verschiedenen Quellen geben. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit höherer Spezifität hat, bedeutet dies, dass der Wert im Ursprung oder in der Bedeutung fehlt.

Oft, wenn die Komplexität einer Website zunimmt, erhöht sich auch die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets sowohl wichtiger als auch komplexer macht. Cascade Layers vereinfachen die Wartung von Stylesheets in einer solchen Codebasis. Cascade Layers sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die CSS-Deklarationen bieten, die letztendlich angewendet werden, sodass Webentwickler Abschnitte von CSS priorisieren können, ohne gegen die Spezifität kämpfen zu müssen.

Um Cascade Layers zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigen Kaskadenkonzepte.

## Rückblick auf das Kaskadenkonzept

Das 'C' in CSS steht für "Cascading". Es ist die Methode, mit der Stile zusammengeführt werden. Der User-Agent durchläuft mehrere klar definierte Schritte, um die jedem Eigenschaftswert zugewiesenen Werte für jedes Element zu bestimmen. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4 **Cascade Layers** einsteigen, was Sie hier lernen werden:

1. **Relevanz:** Finden Sie alle Blockdeklarationen mit einem Selektormatch für jedes Element.
2. **Wichtigkeit:** Sortieren Sie die Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Innerhalb jeder der beiden Wichtigkeitskategorien, sortieren Sie die Regeln nach Autor-, Benutzer- oder User-Agent-Ursprung.
4. **Cascade Layers:** Sortieren Sie in jedem der sechs Ursprungs-Wichtigkeitseimer nach Kaskadenschicht. Die Schichtreihenfolge für normale Deklarationen geht von der ersten erstellten Schicht zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei nicht geschichtete wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungs-Schicht mit Vorrang, sortieren Sie die Deklarationen nach [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity).
6. **Scope-Nähe**: Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb der gescopeten Regeln, mit der geringsten Anzahl von Sprüngen die DOM-Hierarchie hoch bis zur Scope-Wurzel. Weitere Einzelheiten und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).
7. **Reihenfolge des Erscheinens:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität und Scope-Nähe haben, gewinnt der Eigenschaftswert aus dem zuletzt deklarierten Selektor mit der höchsten Spezifität.

Für jeden Schritt bewegen sich nur die "noch im Rennen" befindlichen Deklarationen in den nächsten Schritt, um dort weiter zu "konkurrieren". Wenn nur eine Deklaration noch im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte werden bedeutungslos.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungsarten](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types): User-Agent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungs-Eimer nach Ursprung und Wichtigkeit. Es gibt acht Ebenen der Priorität: die sechs Ursprungs-Eimer, Eigenschaften, die einen Übergang machen, und sich animierende Eigenschaften. Die Reihenfolge der Priorität reicht von normalen User-Agent-Stilen, die die niedrigste Priorität haben, über Stile innerhalb derzeit angewandter Animationen, bis hin zu wichtigen User-Agent-Stilen und dann zu übergehenden Stilen, die die höchste Priorität haben:

1. User-Agent normale Stile
2. Benutzer normale Stile
3. Autor normale Stile
4. animierende Stile
5. Autor wichtige Stile
6. Benutzer wichtige Stile
7. User-Agent wichtige Stile
8. Übergangende Stile

Der "User-Agent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Direkt auf einem Element mit dem {{HTMLElement('style')}}-Element deklarierte Stile sind Autorenstile. Nicht einschließlich animierender und übergehender Stile, haben normale User-Agent-Stile die niedrigste Priorität; wichtige User-Agent-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprung mit Priorität basierend auf dem Gewicht (normal oder wichtig). Wenn man die Schichten vorübergehend ignoriert, wird der Wert aus dem Ursprung mit der höchsten Priorität angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine angewendeten Autorenstile, also werden nur User-Agent-Stile (und Ihre persönlichen Benutzerstile, falls vorhanden) angewendet. Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color) durch Autorenstile gesetzt, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass wenn es konkurrierende Stile aus verschiedenen Ursprüngen gibt, die Regeln aus dem Ursprung mit Priorität angewendet werden, unabhängig von der Spezifität im Ursprung, der keine Priorität hat.

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

Der "konkurrierende" Selektor im User-Agent-Stylesheet zum Zeitpunkt dieses Schreibens ist `a:any-link`, der eine Spezifitätsgewichtung von `0-1-1` hat. Auch wenn dies größer ist als der `0-0-0`-Selektor im Autorenstylesheet, selbst wenn der Selektor in Ihrem aktuellen User-Agent anders ist, spielt das keine Rolle: Die Spezifitätsgewichte aus Autor- und User-Agent-Ursprüngen werden nie verglichen. Erfahren Sie mehr darüber, [wie Spezifitätsgewicht berechnet wird](/de/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Die Priorität des Ursprungs gewinnt immer über Selektorspezifität. Wenn eine Elementeigenschaft mit einer normalen Stildeklaration in mehreren Ursprüngen gestylt ist, überschreibt das Autoren-Stylesheet immer die redundanten normalen Eigenschaften, die in einem Benutzer- oder User-Agent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, gewinnt das User-Agent-Stylesheet immer über Autoren- und Benutzerstile. Die Priorität des Kaskadenursprungs stellt sicher, dass Spezifitätskonflikte zwischen Ursprüngen niemals auftreten.

Ein letzter Punkt, bevor wir weitermachen: Die Reihenfolge des Erscheinens wird nur dann relevant, wenn konkurrierende Deklarationen im Ursprungspriorität die gleiche Spezifität haben.

## Überblick über Kaskadenschichten

Wir verstehen nun die "Priorität des Kaskadenursprungs", aber was ist die "Priorität der Kaskadenschicht"? Wir werden diese Frage beantworten, indem wir darauf eingehen, was Kaskadenschichten sind, wie sie geordnet sind und wie Stile Kaskadenschichten zugewiesen werden. Wir werden [reguläre Schichten](#erstellen_von_kaskadenschichten), [geschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten abdecken. Lassen Sie uns zunächst besprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Prioritätsreihenfolge von Kaskadenschichten

Ähnlich wie wir sechs Prioritätsebenen basierend auf Ursprung und Wichtigkeit haben, ermöglichen es Kaskadenschichten, eine Unterursprungsebene der Priorität innerhalb jedes dieser Ursprünge zu erstellen.

Innerhalb jedes der sechs Ursprungseimer kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) ist sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Prioritätsreihenfolge zwischen Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungs-Eimern werden Schichten in der Reihenfolge der Erstellung jeder Schicht sortiert. Die Prioritätsreihenfolge geht von der ersten erstellten Schicht zur letzten Schicht, gefolgt von nicht gestaffelten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile umgekehrt. Alle nicht gestaffelten wichtigen Stile kaskadieren zusammen in eine implizite Schicht, die Vorrang vor allen nicht übergehenden normalen Stilen hat. Die nicht gestaffelten wichtigen Stile haben eine geringere Priorität als alle wichtigen gestaffelten Stile. Die wichtigen Stile in den früher deklarierten Schichten haben Vorrang vor den wichtigen Stilen in den nachfolgenden deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir uns auf Autorenstile beschränken, aber denken Sie daran, dass Schichten auch in Benutzer- und User-Agent-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal wie viele Stylesheets enthalten sind, all diese Stile kaskadieren zusammen in einem einzigen Ursprung: dem _Autor_-Stylesheet.

Stile aus vielen Quellen, die zusammen kaskadieren, insbesondere von Teams, die nicht zusammenarbeiten, können Probleme verursachen. Verschiedene Teams haben möglicherweise unterschiedliche Methoden; eines könnte eine Best Practice haben, die Spezifität zu reduzieren, während ein anderes möglicherweise den Standard hat, bei jedem Selektor eine `id` einzuschließen.

Spezifitätskonflikte können sich schnell verschärfen. Ein Webentwickler könnte ein "schnelles Fix" schaffen, indem er ein `!important`-Flag hinzufügt. Auch wenn dies eine einfache Lösung zu sein scheint, verschiebt es oft nur den Spezifitätskonflikt von normalen zu wichtigen Deklarationen.

In derselben Weise, wie die Kaskadenursprünge ein Gleichgewicht der Kräfte zwischen Benutzer-, User-Agent- und Autorenstilen bieten, bieten Kaskadenschichten einen strukturierten Weg, um Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht in einem Ursprung ein Unterursprung wäre. Es kann eine Schicht für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Stil-Priorität basierend auf der Schichtreihenfolge.

Regeln innerhalb einer Schicht kaskadieren zusammen, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich Sorgen über die Spezifität zwischen diesen Unterursprüngen zu machen.

Die Schichtpriorität ist immer wichtiger als die Selektorspezifität. Stile in Schichten mit Priorität "gewinnen" über Schichten mit weniger Priorität. Die Spezifität eines Selektors in einer verlierenden Schicht ist irrelevant. Spezifität spielt immer noch eine Rolle bei konkurrierenden Eigenschaftswerten innerhalb einer Schicht, aber es gibt keine Spezifitätsprobleme zwischen Schichten, da nur die höchstrangige Schicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die geschachtelte Kaskadenschichten lösen können

Kaskadenschichten erlauben die Erstellung von geschachtelten Schichten. Jede Kaskadenschicht kann geschachtelte Schichten enthalten.

Ein Beispiel: Eine Komponentenbibliothek kann in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht fügt die Komponentenbibliothek dem Autorenursprung hinzu und entfernt alle Spezifitätskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als separate geschachtelte Schicht. Die Reihenfolge dieser geschachtelten Themaschichten kann basierend auf Media Queries definiert werden (siehe den Abschnitt [Schichterstellung und Media Queries](#schichterstellung_und_media_queries) unten), wie etwa Bildschirmgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese geschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifität basierend in Konflikt geraten.

Die Fähigkeit, Schichten zu schachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeiten.

Die Möglichkeit, Schichten zu schachteln, beseitigt auch die Sorge über sich widersprechende Schichtnamen. Wir werden dies im Abschnitt [geschachtelte Schicht](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementstandards, Drittanbieter-Bibliotheken, Themen, Komponenten, Überschreibungen und andere Styling-Anliegen darzustellen — und sind in der Lage, die Kaskade der Schichten in expliziter Weise neu zu ordnen, ohne Selektoren oder Spezifität innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Erscheinens zu verlassen, um Konflikte zwischen Schichten zu lösen."
>
> —[Cascading und Inheritance Spezifikation](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können auf eine der folgenden Arten erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer) Anweisung Atregel, die Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten deklariert. Dies erstellt benannte Schichten ohne Zuweisung von Stilen.
- Die `@layer` Block Atregel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import) Regel mit dem `layer` Schlüsselwort oder der Funktion `layer()`, die den Inhalt der importierten Datei dieser Schicht zuordnet.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn im `@layer` Atregel oder `@import` mit `layer()` kein Schichtname angegeben wird, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die sich nicht in einer Schicht befinden, oder "nicht geschichtete Stile", kaskadieren zusammen in eine letzte implizite Etikettierung.

Lassen Sie uns die drei Methoden zur Erstellung einer Schicht genauer betrachten, bevor wir geschachtelte Schichten besprechen.

### Die @layer Anweisung Atregel für benannte Schichten

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in welcher sie in Ihrem CSS erscheinen. Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten zu deklarieren, ohne Stile zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmung_des_vorrangs_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS Atregel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangreihenfolge zu definieren, wenn es mehrere Kaskadenschichten gibt. Die folgende Atregel deklariert drei Schichten, in der aufgelisteten Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie werden oft Ihre erste Zeile CSS mit dieser `@layer` Deklaration (mit Schichtnamen, die für Ihre Seite sinnvoll sind, natürlich) haben, um die volle Kontrolle über die Schichtreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Seite ist, wird die Schichtreihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, werden, solange Schichten mit diesen Namen noch nicht existieren, diese drei Schichten erstellt und am Ende der Liste der vorhandenen Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, wird die obige Anweisung nur zwei neue Schichten erstellen. Wenn zum Beispiel `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Schichten wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer Block Atregel für benannte und anonyme Schichten

Schichten können mit der Block `@layer` Atregel erstellt werden. Wenn eine `@layer` Atregel von einem Identifikator und einem Block von Stilen gefolgt wird, wird der Identifikator verwendet, um die Schicht zu benennen, und die Stile in dieser Atregel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen noch nicht existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor existierenden Schicht hinzugefügt. Wenn beim Erstellen eines Blocks von Stilen mit `@layer` kein Name angegeben wird, werden die Stile in der Atregel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer` Block Atregeln und eine `@layer` Anweisung Atregel verwendet. Dieses CSS macht in der angegebenen Reihenfolge Folgendes:

1. Erstellt eine benannte `layout` Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt der bereits existierenden `layout` Schicht zusätzliche Stile hinzu
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

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge - mit einer sechsten, impliziten Schicht nicht geschichteter Stile im `body`-Stilblock. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt wurden, wobei die implizite Schicht nicht geschichteter Stile immer zuletzt kommt. Es gibt keine Möglichkeit, die Schichtreihenfolge nach der Erstellung zu ändern.

Wir haben einige Stile der Schicht mit dem Namen `layout` zugewiesen. Wenn eine benannte Schicht noch nicht existiert, dann erstellt der Name einer `@layer` Atregel, mit oder ohne Zuweisung von Stilen an die Schicht, die Schicht; sie fügt dann die Schicht am Ende der Reihe der vorhandenen Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile im benannten Block den Stilen in der zuvor existierenden Schicht angehängt – die Spezifizierung von Stilen in einem Block durch Wiederverwendung eines vorhandenen Schichnamens erstellt keine neue Schicht.

Anonyme Schichten werden durch Zuweisen von Stilen an eine Schicht ohne Namensgebung erstellt. Stile können einer unbenannten Schicht nur bei deren Erstellung zugewiesen werden.

> [!NOTE]
> Die nachfolgende Verwendung von `@layer` ohne Schichtname erstellt zusätzliche unbenannte Schichten; es fügt keine Stile zu einer zuvor existierenden unbenannten Schicht hinzu.

Die `@layer` Atregel erstellt eine Schicht, ob benannt oder nicht, oder fügt einer Schicht Stile hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` genannt und die zweite `<anonymous(02)>`, das ist nur, damit wir sie erklären können. Diese sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, auf sie zuzugreifen oder ihnen zusätzliche Stile hinzuzufügen.

Alle Stile, die außerhalb einer Schicht deklariert werden, werden in einer impliziten Schicht zusammengeführt. Im obigen Beispiel hat die erste Deklaration die `color: #333` Eigenschaft auf `body` gesetzt. Dies wurde außerhalb jeglicher Schicht deklariert. Normale nicht geschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, selbst wenn die nicht geschichteten Stile eine geringere Spezifität haben und zuerst in der Reihenfolge des Erscheinens kommen. Dies erklärt, warum, obwohl das nicht geschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese nicht geschichteten Stile enthält, Vorrang hat, als wäre sie die zuletzt deklarierte Schicht.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die `theme`- und `utilities`-Schichten erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Derzeit gibt es keine Möglichkeit, die Reihenfolge der Schichten nach der Deklaration zu ändern.

Im folgenden Beispiel weisen wir zwei Schichten Stile zu, erstellen sie und benennen sie dabei. Da sie bereits existieren, erstellt sie die Deklaration auf der letzten Zeile nicht.

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

#### Schichterstellung und Media Queries

Wenn Sie eine Schicht mit [Media](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) Queries definieren, und das Medium nicht passt oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie sich die Schichtreihenfolge ändern kann, wenn Sie die Größe Ihres Geräts oder Browsers ändern. In diesem Beispiel erstellen wir die `site`-Schicht nur in breiteren Browsern. Wir weisen dann Stile den `page`- und `site`-Schichten zu, in dieser Reihenfolge.

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

Auf breiten Bildschirmen wird die `site`-Schicht in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Priorität als `page` hat. Andernfalls hat `site` mehr Priorität als `page`, weil sie in schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, das `50em` in der Media Query in `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Erklärung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Erklärung muss zuerst kommen, vor allen Stilen, kann jedoch von einer `@layer` Atregel, die eine oder mehrere Schichten erstellt, ohne diesen Schichten Stile zuzuweisen, vorangestellt werden. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel vorangestellt werden.)

Sie können ein Stylesheet in einer benannten Schicht, einer verschachtelten benannten Schicht oder einer anonymen Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine unbenannte Schicht:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in einer einzigen Schicht importieren. Die folgende Erklärung importiert zwei separate Dateien in eine einzige `social`-Schicht:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Stile importieren und Schichten basierend auf spezifischen Bedingungen mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) erstellen. Die folgende importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die Datei, die importiert wird, ist abhängig von der Breite des Bildschirms.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode zum Verlinken von Stylesheets. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` im Stylesheet nicht verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder anonymen Schicht. Jede Kaskadenschicht, auch eine anonyme, kann geschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile der Schichtverschachtelung

Die Fähigkeit zur Schichtverschachtelung ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Gedanken darüber machen zu müssen, ob andere Teams sie in eine Schicht importieren. Ebenso ermöglicht die Verschachtelung, dass Sie Drittanbieter-Stylesheets in eine Schicht importieren können, ohne sich Sorgen zu machen, ob jenes Stylesheet selbst Schichten enthält. Da Schichten geschachtelt sein können, müssen Sie sich keine Sorgen über sich widersprechende Schichtnamen zwischen externen und internen Stylesheets machen.

### Erstellung von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit denselben Methoden wie reguläre Schichten erstellt werden. Sie können beispielsweise mit der `@layer`-Atregel gefolgt von den Namen einer oder mehrerer Schichten unter Verwendung einer Punktnotation erstellt werden. Mehrere Punkte und Schichtnamen bedeuten mehrere Verschachtelungen.

Wenn Sie eine `@layer`-Blockregel in eine andere `@layer`-Blockregel einsetzen, ob mit oder ohne Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso werden beim Importieren eines Stylesheets mit einer `@import`-Deklaration, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, die Stile dieser benannten oder anonymen Schicht zugewiesen. Wenn die `@import`-Erklärung Schichten enthält, werden diese Schichten zu verschachtelten Schichten innerhalb dieser anonymen oder benannten Schicht.

Betrachten wir das folgende Beispiel:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei irgendwelche Schichten enthält, benannte oder nicht, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unterschicht der `components`-Schicht ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall werden die Inhalte von `narrow-theme.css` der verschachtelten Schicht `components.narrow` angehängt. Zusätzliche verschachtelte benannte Schichten können der `components`-Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, sie können aber anschließend nicht mehr zugegriffen werden.

Betrachten wir ein weiteres Beispiel, wo wir [`layers1.css` in einer benannten Schicht importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers) unter Verwendung der folgenden Anweisung:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne Schicht namens `example` mit einigen Deklarationen und fünf verschachtelten Schichten erstellen - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Stile einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung des Vorrangs basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt ihre Vorrangreihenfolge. Daher ist die Reihenfolge der Schichten sehr wichtig. Auf die gleiche Weise wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprungs-Schicht und Wichtigkeit.

### Vorrangreihenfolge von regulären Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden an die implizite Schicht nicht geschichteter Stile angehängt). Angenommen, die drei Dateien (`A.css`, `B.css` und `C.css`) enthalten keine weiteren Schichten. Die folgende Liste zeigt, wo Stile, die innerhalb und außerhalb dieser Dateien deklariert sind, vom wenigst (1) vorrangigen bis zum höchsten (10) einsortiert werden.

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. nicht geschichtete normale Stile (`C.css`)
4. Inline normale Stile
5. animierende Stile
6. nicht geschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. Inline wichtige Stile
10. Übergangende Stile

Normale Stile, die innerhalb von Schichten deklariert werden, erhalten die niedrigste Priorität und werden in der Reihenfolge sortiert, in der die Schichten erstellt wurden. Normale Stile in der zuerst erstellten Schicht haben die niedrigste Priorität, und normale Stile in der zuletzt erstellten Schicht haben die höchste Priorität unter den Schichten. Mit anderen Worten, normale Stile, die innerhalb von `firstLayer` deklariert werden, werden durch alle nachfolgenden Stile auf der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb der Schichten deklariert werden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle konfliktierenden Stile aus `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert werden, haben immer mehr Priorität als Stile, die innerhalb einer Schicht deklariert werden (mit Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style` attribute](/de/docs/Web/HTML/Reference/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang vor normalen Stilen, die in den nicht geschichteten und geschichteten Stylesheets (`firstLayer – A.css`, `secondLayer – B.css` und `C.css`) zu finden sind.

Animierende Stile haben höhere Priorität als alle normalen Stile, einschließlich Inline normaler Stile.

Wichtige Stile, das heißt, Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen vorher erwähnten Stilen auf unserer Liste. Sie sind in umgekehrter Reihenfolge der normalen Stile sortiert. Alle wichtigen Stile, die außerhalb einer Schicht deklariert werden, haben weniger Vorrang als die, die innerhalb einer Schicht deklariert werden. Wichtige Stile, die innerhalb von Schichten zu finden sind, sind ebenfalls in der Reihenfolge der Schichterstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Schicht die niedrigste Priorität, und die zuerst erstellte Schicht hat die höchste Priorität unter den deklarierten Schichten.

Wichtige Inline-Stile haben wiederum mehr Priorität als wichtige Stile, die anderswo deklariert wurden.

Übergangende Stile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert übergeht, hat er Vorrang vor allen anderen Eigenschaftswerterklärungen, sogar vor wichtigen Inline-Stilen; aber nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst mit einer `@layer` Anweisung Atregel ohne Stile definiert. Die Schichtstile werden in zwei `@layer` Block Atregeln definiert, die nach der in keiner Schicht deklarierten CSS-Regel `h1` erscheinen.

Die Inline-Stile, die auf dem `h1`-Element mit dem `style`-Attribut hinzugefügt wurden, setzen einen normalen `color`- und einen wichtigen `background-color`-Wert. Normale Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen und wichtigen Autorenstile. Es gibt keine Möglichkeit, dass Autorenstile wichtige Inline-Stile überschreiben können.

Der normale `text-decoration` und der wichtige `box-shadow` sind nicht Teil der Inline-Stile und können daher überschrieben werden. Für normale Nicht-Inline-Stile haben nicht geschichtete Stile Vorrang. Für wichtige Stile zählt auch die Schichtreihenfolge. Während normale nicht geschichtete Stile alle normalen Stile, die in einer Schicht festgelegt sind, überschreiben, wird bei wichtigen Stilen die Vorrangreihenfolge umgekehrt; nicht geschichtete wichtige Stile haben weniger Vorrang als geschichtete Stile.

Die zwei Stile, die nur innerhalb von Schichten deklariert sind, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Für normale Stile hat die `B`-Schicht, die zuletzt deklariert wurde, Vorrang vor Stilen in der früher deklarierten Schicht `A`. Für normale Stile haben die späteren Schichten Vorrang vor früheren Schichten. Die Reihenfolge des Vorrangs wird für wichtige Stile umgekehrt. Für die wichtigen `font-weight`-Deklarationen hat die `A`-Schicht, die zuerst deklariert wurde, Vorrang vor der zuletzt deklarierten `B`-Schicht.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` zu `@layer B, A;` ändern. Probieren Sie das aus. Welche Stile werden dadurch geändert, und welche bleiben gleich? Warum?

Die Reihenfolge der Schichten wird durch die Reihenfolge festgelegt, in der sie in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten deklariert, ohne Stile zuzuweisen, indem wir `@layer` gefolgt von den Namen unserer Schichten verwenden und mit einem Semikolon enden. Hätten wir diese Zeile weggelassen, wären die Ergebnisse die gleichen gewesen. Warum? Wir haben stilistische Regelblöcke in benannten `@layer` Blöcken in der Reihenfolge A dann B zugewiesen. Die beiden Schichten wurden in dieser ersten Zeile erstellt. Wären sie nicht erstellt worden, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen eingeschlossen: Erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass die Deklaration der Schichtreihenfolge eine bewährte Praxis für Ihr Schichtmanagement ist.

Zusammengefasst:

- Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der die Schichten erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Die Schichtpriorität für normale Stile ist die Reihenfolge, in der die Schichten erstellt werden.
- Nicht geschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Schichtpriorität für wichtige Stile ist umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor nicht geschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von übergingen Stilen.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was vorübergehend ist).

### Vorrangreihenfolge von verschachtelten Kaskadenschichten

Die Vorrangreihenfolge der Kaskade für verschachtelte Schichten ist derjenigen von regulären Schichten ähnlich, jedoch innerhalb der Schicht enthalten. Die Vorrangreihenfolge basiert auf der Reihenfolge der Erstellung der verschachtelten Schichten. Nicht verschachtelte Stile in einer Schicht haben Vorrang vor verschachtelten normalen Stilen, wobei die Vorrangreihenfolge für wichtige Stile umgekehrt ist. Spezifitätsgewicht zwischen verschachtelten Schichten spielt keine Rolle, obwohl es bei konfligierenden Stilen innerhalb einer verschachtelten Schicht eine Rolle spielt.

Das folgende erstellt und fügt Stile zur `components` Schicht, verschachtelten `components.narrow` Schicht und verschachtelten `components.wide` Schicht hinzu:

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

- `background-color`: Da nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat` Farbe.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `red` Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor nicht geschichteten Stilen, wobei wichtige Stile in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der Erstellung der verschachtelten Schichten `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass die `purple` Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, sodass durch die Deklarationsreihenfolge der `20%` Radius gewinnt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade#task_2).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechanismen von CSS-Kaskadenschichten vertraut.
