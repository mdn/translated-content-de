---
title: Kaskadenschichten
slug: Learn/CSS/Building_blocks/Cascade_layers
l10n:
  sourceCommit: 033285c99a8e1bc05b646ff19b70d2e8b86dff46
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

Diese Lektion soll Ihnen [Kaskadenschichten](/de/docs/Web/CSS/@layer) vorstellen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es zunächst weniger relevant und etwas theoretischer erscheinen als einige andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen von Kaskadenschichten zu kennen, falls Sie ihnen in Ihren Projekten begegnen. Je mehr Sie mit CSS arbeiten, desto mehr werden Sie verstehen können, dass das Verständnis von Kaskadenschichten und das Wissen, wie Sie deren Potenzial nutzen können, Sie davor bewahren wird, eine Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu verwalten.

Kaskadenschichten sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es Konflikte zwischen CSS-Selektoren und konkurrierenden Spezifizitäten gibt oder wenn Sie die Verwendung von [`!important`](/de/docs/Web/CSS/important) in Betracht ziehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifität (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a> und <a href="/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Kaskade, Spezifität und Vererbung</a>).
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

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle auf ein Element angewendeten Eigenschaftswerte anzeigen, indem Sie das Element in den Entwicklerwerkzeugen Ihres Browsers inspizieren. Das "Stile"-Panel des Werkzeugs zeigt alle auf das inspizierte Element angewendeten Eigenschaftswerte an, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelle. Die Werte des Selektors mit Vorrang aus der Quelle werden auf das passende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Stile-Panel durchgestrichene Werte an, die auf das ausgewählte Element gepasst haben, aber aufgrund der Kaskade, der Spezifität oder der Quellreihenfolge nicht angewendet wurden. Durchgestrichene Stile können aus derselben Quelle mit Vorrang stammen, aber mit niedrigerer Spezifität, oder mit übereinstimmender Quelle und Spezifität, jedoch früher im Code gefunden werden. Wenn Sie einen durchgestrichenen Stil mit einem Selektor höherer Spezifität sehen, bedeutet dies, dass der Wert an Bedeutung oder Ursprung fehlt.

Oft, wenn die Komplexität einer Website zunimmt, steigt die Anzahl der Stylesheets, was die Quellreihenfolge der Stylesheets wichtiger und komplexer macht. Kaskadenschichten vereinfachen die Wartung von Stylesheets in solchen Codebasen. Kaskadenschichten sind explizite Spezifitätscontainer, die eine einfachere und größere Kontrolle über die letztendlich angewendeten CSS-Deklarationen bieten, sodass Webentwickler Abschnitte von CSS priorisieren können, ohne um die Spezifität kämpfen zu müssen.

Um Kaskadenschichten zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Zusammenfassung der wichtigsten Kaskadenkonzepte.

## Überprüfung des Kaskadenkonzepts

Das "C" in CSS steht für "Cascading" (Kaskadierung). Es ist die Methode, mit der Stile gemeinsam kaskadieren. Der User-Agent durchläuft mehrere klar definierte Schritte, um die zugewiesenen Werte für jede Eigenschaft für jedes Element zu bestimmen. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4 eintauchen, **Kaskadenschichten**, das ist, was Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem übereinstimmenden Selektor für jedes Element.
2. **Wichtigkeit:** Sortieren Sie Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important)-Flag gesetzt haben.
3. **Ursprung:** Sortieren Sie innerhalb jeder der beiden Wichtigkeitsgruppen die Regeln nach Autor-, Benutzer- oder User-Agent-Ursprung.
4. **Kaskadenschichten:** Sortieren Sie innerhalb jeder der sechs Ursprungs-Wichtigkeitsgruppen nach Kaskadenschicht. Die Schichtreihenfolge für normale Deklarationen reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen. Diese Reihenfolge ist für wichtige Stile umgekehrt, wobei nicht geschichtete wichtige Stile die niedrigste Priorität haben.
5. **Spezifität:** Für konkurrierende Stile in der Ursprungs-Schicht mit Vorrang sortieren Sie Deklarationen nach [Spezifität](/de/docs/Web/CSS/Specificity).
6. **Einschränkungsnähe:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb von beschränkten Regeln mit der kleinsten Anzahl von Sprüngen in der DOM-Hierarchie zur Wurzel des Bereichs. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
7. **Reihenfolge des Auftretens:** Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang dieselbe Spezifität und Bereichsnähe haben, gewinnt der Eigenschaftswert des zuletzt deklarierten Selektors mit der höchsten Spezifität.

Für jeden Schritt ziehen nur die "noch im Rennen" befindlichen Deklarationen in den nächsten Schritt weiter, um dort zu "konkurrieren". Wenn nur eine Deklaration im Rennen ist, "gewinnt" sie, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Kaskaden-Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types): User-Agent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungsgruppen nach Ursprung und Wichtigkeit. Es gibt acht Ebene der Priorisierung: die sechs Ursprungsgruppen, Übergangseigenschaften und animierte Eigenschaften. Die Reihenfolge der Priorität reicht von normalen User-Agent-Stilen, die die niedrigste Priorität haben, bis zu Stilen in aktuell angewendeten Animationen, zu wichtigen User-Agent-Stilen und dann zu Stilen, die gerade übergehen, die die höchste Priorität haben:

1. User-Agent normale Stile
2. Benutzer normale Stile
3. Autor normale Stile
4. Stile, die animiert werden
5. Autor wichtige Stile
6. Benutzer wichtige Stile
7. User-Agent wichtige Stile
8. Stile, die übergehen

Der "User-Agent" ist der Browser. Der "Benutzer" ist der Website-Besucher. Der "Autor" sind Sie, der Entwickler. Direkt auf einem Element mit dem {{HTMLElement('style')}}-Element deklarierte Stile sind Autorenstile. Abgesehen von animierten und übergehenden Stilen haben normale User-Agent-Stile die niedrigste Priorität; wichtige User-Agent-Stile haben die höchste.

### Ursprung und Spezifität

Für jede Eigenschaft ist die Deklaration, die "gewinnt", diejenige aus dem Ursprungsbereich mit Vorrang basierend auf dem Gewicht (normal oder wichtig). Wenn man Schichten ignoriert, wird der Wert aus dem Ursprungsbereich mit der höchsten Priorität angewendet. Wenn der gewinnende Ursprungsbereich mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifität](/de/docs/Web/CSS/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifität wird nie zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im Beispiel unten gibt es zwei Links. Der erste hat keine angewendeten Autorenstile, sodass nur User-Agent-Stile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite hat [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color), die von Autorenstilen gesetzt werden, obwohl der Selektor im Autoren-Stylesheet eine Spezifität von [`0-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories) hat. Der Grund, warum Autorenstile "gewinnen", ist, dass bei widersprüchlichen Stilen aus verschiedenen Ursprüngen die Regeln aus dem Ursprungsbereich mit Vorrang angewendet werden, unabhängig von der Spezifität im Ursprungsbereich, der keinen Vorrang hat.

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

Der "konkurrierende" Selektor im User-Agent-Stylesheet zum Zeitpunkt der Erstellung dieses Dokuments ist `a:any-link`, der ein Spezifizitätsgewicht von `0-1-1` hat. Obwohl dieser größer ist als der `0-0-0` Selektor im Autoren-Stylesheet, spielt es keine Rolle, ob der Selektor in Ihrem aktuellen User-Agent unterschiedlich ist: Die Spezifizitätsgewichte aus Autoren- und User-Agent-Ursprüngen werden nie verglichen. Erfahren Sie mehr darüber, [wie Spezifizitätsgewicht berechnet wird](/de/docs/Web/CSS/Specificity#how_is_specificity_calculated).

Ursprungsvorrang gewinnt immer über Selektorspezifität. Wenn eine Elementeigenschaft mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestylt ist, wird das Autoren-Stylesheet immer die redundanten normalen Eigenschaften überschreiben, die in einem Benutzer- oder User-Agent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, wird das User-Agent-Stylesheet immer über Autoren- und Benutzerstile siegen. Die Vorrangigkeit der Kaskaden-Ursprünge stellt sicher, dass zwischen Ursprüngen nie Spezifikationskonflikte auftreten.

Eine letzte Anmerkung, bevor wir fortfahren: Die Reihenfolge des Auftretens wird nur dann relevant, wenn konkurrierende Deklarationen im Vorrang-Ursprung denselben Spezifizitätsgrad haben.

## Überblick über Kaskadenschichten

Wir verstehen nun die "Vorrangigkeit von Kaskadenursprüngen", aber was ist "Vorrangigkeit von Kaskadenschichten"? Wir werden diese Frage beantworten, indem wir klären, was Kaskadenschichten sind, wie sie geordnet werden und wie Stile Kaskadenschichten zugeordnet werden. Wir werden [reguläre Schichten](#erstellen_von_kaskadenschichten), [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) und anonyme Schichten behandeln. Lassen Sie uns zunächst besprechen, was Kaskadenschichten sind und welche Probleme sie lösen.

### Vorrangordnung der Kaskadenschichten

Ähnlich wie wir sechs Prioritätsebenen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Kaskadenschichten uns, eine Unterebene der Priorität innerhalb eines beliebigen Ursprungs zu erstellen.

Innerhalb jeder der sechs Ursprungsgruppen kann es mehrere Kaskadenschichten geben. Die [Reihenfolge der Schichterstellung](/de/docs/Web/CSS/@layer) ist von großer Bedeutung. Es ist die Erstellungsreihenfolge, die die Vorrangreihenfolge unter den Schichten innerhalb eines Ursprungs festlegt.

In normalen Ursprungsgruppen werden Schichten in der Reihenfolge ihrer Erstellung sortiert. Die Vorrangreihenfolge reicht von der ersten erstellten Schicht bis zur letzten, gefolgt von nicht geschichteten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile umgekehrt. Alle ungeschichteten wichtigen Stile kaskadieren gemeinsam in eine implizite Schicht mit Vorrang vor allen nicht übergehenden normalen Stilen. Die ungeschichteten wichtigen Stile haben eine geringere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Schichten haben Vorrang vor wichtigen Stilen in nachfolgend deklarierten Schichten innerhalb desselben Ursprungs.

Für den Rest dieses Tutorials werden wir uns auf Autorenstile beschränken, aber denken Sie daran, dass Schichten auch in Benutzer- und User-Agent-Stylesheets existieren können.

### Probleme, die Kaskadenschichten lösen können

Große Codebasen können Stile von mehreren Teams, Komponentenbibliotheken, Frameworks und Drittanbietern haben. Egal wie viele Stylesheets enthalten sind, all diese Stile kaskadieren in einem einzigen Ursprung: dem _Autoren_-Stylesheet.

Wenn Stile von vielen Quellen zusammen kaskadieren, insbesondere von Teams, die nicht zusammenarbeiten, können Probleme entstehen. Verschiedene Teams können unterschiedliche Methodologien haben; eines kann die beste Praxis des Reduzierens der Spezifizität verfolgen, während ein anderes einen Standard zur Einbeziehung von `id` in jeden Selektor haben kann.

Spezifikationskonflikte können schnell eskalieren. Ein Webentwickler kann einen "schnellen Fix" erstellen, indem er ein `!important`-Flag hinzufügt. Obwohl dies eine einfache Lösung erscheinen mag, verlagert es oft nur den Spezifikationskrieg von normalen zu wichtigen Deklarationen.

In ähnlicher Weise wie Kaskadenursprünge eine Machtbalance zwischen Benutzer-, User-Agent- und Autorenstilen bieten, bieten Kaskadenschichten eine strukturierte Möglichkeit, Bedenken innerhalb eines einzelnen Ursprungs zu organisieren und auszugleichen, als ob jede Schicht innerhalb eines Ursprungs ein Unterursprung wäre. Eine Schicht kann für jedes Team, jede Komponente und jeden Drittanbieter erstellt werden, mit Vorrang auf Grundlage der Schichtreihenfolge.

Regeln innerhalb einer Schicht kaskadieren gemeinsam, ohne mit Stilregeln außerhalb der Schicht zu konkurrieren. Kaskadenschichten ermöglichen die Priorisierung ganzer Stylesheets gegenüber anderen Stylesheets, ohne sich um die Spezifikation zwischen diesen Unterursprüngen kümmern zu müssen.

Die Vorrangigkeit von Schichten schlägt immer die Spezifizität eines Selektors. Stile in Schichten mit Vorrang "gewinnen" über Schichten mit geringerer Vorrangigkeit. Die Spezifizität eines Selektors in einer verlierenden Schicht ist irrelevant. Die Spezifikationswertigkeit ist weiterhin relevant für konkurrierende Eigenschaftswerte innerhalb einer Schicht, aber es gibt keine Spezifikationsbedenken zwischen Schichten, da nur die Schicht mit der höchsten Priorität für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Kaskadenschichten lösen können

Kaskadenschichten ermöglichen die Erstellung von verschachtelten Schichten. Jede Kaskadenschicht kann verschachtelte Schichten enthalten.

Ein Beispiel: Eine Komponentenbibliothek kann in eine `components`-Schicht importiert werden. Eine reguläre Kaskadenschicht wird die Komponentenbibliothek dem Autorenursprung hinzufügen und Spezifikationskonflikte mit anderen Autorenstilen entfernen. Innerhalb der `components`-Schicht kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Schicht. Die Reihenfolge dieser verschachtelten Themenschichten kann basierend auf Medienabfragen (siehe den Abschnitt [Schichterstellung und Medienabfragen](#schichterstellung_und_medienabfragen) unten) wie Bildschirmgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation) definiert werden. Diese verschachtelten Schichten bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifikationen basieren.

Die Möglichkeit, Schichten zu verschachteln, ist sehr nützlich für alle, die an der Entwicklung von Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen arbeiten.

Die Möglichkeit, verschachtelte Schichten zu erstellen, beseitigt auch die Sorge über Konflikte bei Schichtnamen. Dies werden wir im Abschnitt über [verschachtelte Schichten](#überblick_über_verschachtelte_kaskadenschichten) behandeln.

> "Autoren können Schichten erstellen, um Elementdefaults, Drittanbieterbibliotheken, Themen, Komponenten, Überschreibungen und andere Styleanliegen darzustellen – und können die Kaskade von Schichten auf explizite Weise neu ordnen, ohne Selektoren oder Spezifikationen innerhalb jeder Schicht zu ändern oder sich auf die Reihenfolge des Auftretens zu verlassen, um Konflikte über Schichten hinweg zu lösen."
>
> —[Cascading and Inheritance specification](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Kaskadenschichten

Schichten können auf eine der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer) Deklaration der At-Regel, die Schichten durch `@layer` gefolgt von den Namen einer oder mehrerer Schichten deklariert. Dies erstellt benannte Schichten, ohne ihnen Stile zuzuweisen.
- Die `@layer` Block-At-Regel, in der alle Stile innerhalb eines Blocks einer benannten oder unbenannten Schicht hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import) Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die den Inhalt der importierten Datei dieser Schicht zuweist.

Alle drei Methoden erstellen eine Schicht, wenn eine Schicht mit diesem Namen noch nicht initialisiert wurde. Wenn in der `@layer` At-Regel oder `@import` mit `layer()` kein Schichtname angegeben ist, wird eine neue anonyme (unbenannte) Schicht erstellt.

> [!NOTE]
> Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden. Stile, die nicht in einer Schicht sind, oder "ungeschichtete Stile", kaskadieren gemeinsam in einer endgültigen impliziten Marke.

Lassen Sie uns die drei Methoden zur Erstellung einer Schicht etwas detaillierter behandeln, bevor wir verschachtelte Schichten besprechen.

### Die @layer-Deklarationsregel für benannte Schichten

Die Schichtreihenfolge wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. Das Deklarieren von Schichten mit `@layer` gefolgt von den Namen einer oder mehrerer Schichten, ohne irgendwelche Stile zuzuweisen, ist eine Möglichkeit, die [Schichtreihenfolge](#bestimmung_der_vorrangigkeit_basierend_auf_der_reihenfolge_der_schichten) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer) CSS At-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Reihenfolge der Vorrangigkeit festzulegen, wenn mehrere Kaskadenschichten vorhanden sind. Die folgende At-Regel deklariert drei Schichten in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Oft möchten Sie, dass Ihre erste CSS-Zeile diese `@layer`-Deklaration ist (natürlich mit Namen, die für Ihre Website sinnvoll sind), um die vollständige Kontrolle über die Schichtreihenfolge zu haben.

Wenn die obige Anweisung die erste Zeile des CSS einer Site ist, wird die Schichtreihenfolge `theme`, `layout`, und `utilities` sein. Wenn einige Schichten vor der obigen Anweisung erstellt wurden, solange Schichten mit diesen Namen noch nicht existieren, werden diese drei Schichten erstellt und am Ende der Liste der bestehenden Schichten hinzugefügt. Wenn jedoch eine Schicht mit demselben Namen bereits existiert, wird die obige Anweisung nur zwei neue Schichten erstellen. Wenn `layout` bereits existierte, werden nur `theme` und `utilities` erstellt, aber die Schichtreihenfolge in diesem Fall wird `layout`, `theme`, und `utilities` sein.

### Die @layer-Blockregel für benannte und anonyme Schichten

Schichten können mit der Blockregel `@layer` erstellt werden. Wenn einer `@layer`-Regel ein Identifikator und ein Stilblock folgt, wird der Identifikator verwendet, um die Schicht zu benennen, und die Stile in dieser Regel werden den Stilen der Schicht hinzugefügt. Wenn eine Schicht mit dem angegebenen Namen nicht bereits existiert, wird eine neue Schicht erstellt. Wenn eine Schicht mit dem angegebenen Namen bereits existiert, werden die Stile der zuvor bestehenden Schicht hinzugefügt. Wenn beim Erstellen eines Stilblocks mit `@layer` kein Name angegeben wird, werden die Stile in der At-Regel einer neuen anonymen Schicht hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockregeln und eine `@layer`-Deklarationsregel verwendet. Dieses CSS führt die folgenden Schritte in der angegebenen Reihenfolge aus:

1. Erstellt eine benannte `layout`-Schicht
2. Erstellt eine unbenannte, anonyme Schicht
3. Deklariert eine Liste von drei Schichten und erstellt nur zwei neue Schichten, `theme` und `utilities`, weil `layout` bereits existiert
4. Fügt zusätzliche Stile zur bereits bestehenden `layout`-Schicht hinzu
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

Im obigen CSS haben wir fünf Schichten erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities`, und `<anonymous(02)>` – in dieser Reihenfolge – mit einer sechsten, impliziten Schicht nicht geschichteter Stile in dem `body`-Stilblock. Die Schichtreihenfolge ist die Reihenfolge, in der die Schichten erstellt werden, mit der impliziten Schicht nicht geschichteter Stile, die immer zuletzt kommt. Es gibt keine Möglichkeit, die Schichtreihenfolge nach der Erstellung zu ändern.

Wir haben einige Stile der Schicht mit dem Namen `layout` zugeordnet. Wenn eine benannte Schicht nicht bereits existiert, wird durch die Angabe des Namens in einer `@layer`-Regel, mit oder ohne Zuordnung von Stilen zur Schicht, die Schicht erstellt; dies fügt die Schicht am Ende der Serie von bestehenden Schichtnamen hinzu. Wenn die benannte Schicht bereits existiert, werden alle Stile innerhalb des benannten Blocks den Stilen in der zuvor bestehenden Schicht hinzugefügt – die Angabe von Stilen in einem Block durch Wiederverwendung eines vorhandenen Schichtnamens erstellt keine neue Schicht.

Anonyme Schichten werden durch Zuordnung von Stilen zu einer Schicht erstellt, ohne die Schicht zu benennen. Stile können einer unbenannten Schicht nur bei ihrer Erstellung hinzugefügt werden.

> [!NOTE]
> Der nachfolgende Gebrauch von `@layer` ohne Schichtname erstellt zusätzliche unbenannte Schichten; es fügt keine Stile einer zuvor existierenden unbenannten Schicht hinzu.

Die `@layer`-Regel erstellt eine Schicht, benannt oder nicht, oder fügt Stile einer Schicht hinzu, wenn die benannte Schicht bereits existiert. Wir haben die erste anonyme Schicht `<anonymous(01)>` und die zweite `<anonymous(02)>` genannt, das ist nur, damit wir sie erklären können. Dies sind tatsächlich unbenannte Schichten. Es gibt keine Möglichkeit, sie zu referenzieren oder ihnen zusätzliche Stile hinzuzufügen.

Alle außerhalb einer Schicht deklarierten Stile werden gemeinsam in einer impliziten Schicht zusammengefügt. Im obigen Beispielcode hat die erste Deklaration die Eigenschaft `color: #333` auf `body` gesetzt. Dies wurde außerhalb einer Schicht deklariert. Normale nicht geschichtete Deklarationen haben Vorrang vor normalen geschichteten Deklarationen, auch wenn die nicht geschichteten Stile eine niedrigere Spezifikationsgewichtung haben und zuerst in der Auftretensreihenfolge kommen. Dies erklärt, warum auch wenn das nicht geschichtete CSS zuerst im Codeblock deklariert wurde, die implizite Schicht, die diese nicht geschichteten Stile enthält, Vorrang hat, als ob sie die zuletzt dекlκејρ kte Schicht war.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Schichten deklariert wurde, wurden nur die Schichten `theme` und `utilities` erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Schichten nicht ändert. Es gibt derzeit keine Möglichkeit, Schichten einmal deklariert, neu zu ordnen.

Im folgenden Beispiel weisen wir zwei Schichten Stile zu, erstellen sie und benennen sie dabei. Da sie bereits existieren, und bei ihrem ersten Gebrauch erstellt wurden, bewirkt ihre Deklaration in der letzten Zeile nichts.

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

#### Schichterstellung und Medienabfragen

Wenn Sie eine Schicht mithilfe von [Medien](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)-Abfragen definieren und die Medienabfrage nicht übereinstimmt oder das Feature nicht unterstützt wird, wird die Schicht nicht erstellt. Das folgende Beispiel zeigt, wie die Änderung der Größe Ihres Geräts oder Browsers die Schichtreihenfolge ändern kann. In diesem Beispiel erstellen wir die Schicht `site` nur in breiteren Browsern. Wir weisen dann den Schichten `page` und `site` Stile in dieser Reihenfolge zu.

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

Auf breiten Bildschirmen wird die Schicht `site` in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang hat als `page`. Ansonsten hat `site` Vorrang vor `page`, weil es auf schmalen Bildschirmen später deklariert wird. Wenn das nicht funktioniert, versuchen Sie, den `50em` in der Medienabfrage auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Schichten mit @import

Die [`@import`](/de/docs/Web/CSS/@import) Regel ermöglicht es Benutzern, Stilregeln aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Sind Sie dabei, Stylesheets zu importieren, muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Stilen, kann aber durch eine `@layer`-Regel, die eine oder mehrere Schichten erstellt, ohne Stile zuzuweisen, vorangestellt werden. (`@import` kann auch durch eine [`@charset`](/de/docs/Web/CSS/@charset) Regel vorangestellt werden.)

Sie können ein Stylesheet in eine benannte Schicht, eine verschachtelte benannte Schicht oder eine anonyme Schicht importieren. Die folgende Schicht importiert die Stylesheets in eine `components`-Schicht, eine verschachtelte `dialog`-Schicht innerhalb der `components`-Schicht und eine ungenannte Schicht, jeweils:

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

Sie können Stile importieren und Schichten basierend auf bestimmten Bedingungen mit [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Merkmalsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) erstellen. Das folgende Beispiel importiert ein Stylesheet in eine `international`-Schicht, nur wenn der Browser `display: ruby` unterstützt, und die Datei, die importiert wird, hängt von der Breite des Bildschirms ab.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur Methode {{HTMLElement('link')}}, um Stylesheets zu verknüpfen. Verwenden Sie `@import`, um ein Stylesheet in eine Schicht zu importieren, wenn Sie `@layer` innerhalb des Stylesheets nicht verwenden können.

## Überblick über verschachtelte Kaskadenschichten

Verschachtelte Schichten sind Schichten innerhalb einer benannten oder einer anonymen Schicht. Jede Kaskadenschicht, sogar eine anonyme, kann verschachtelte Schichten enthalten. Schichten, die in eine andere Schicht importiert werden, werden zu verschachtelten Schichten innerhalb dieser Schicht.

### Vorteile der Schichtverschachtelung

Die Möglichkeit, Schichten zu verschachteln, ermöglicht es Teams, Kaskadenschichten zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in eine Schicht importieren werden. Ebenso ermöglicht die Verschachtelung, dass Sie Drittanbieter-Stylesheets in eine Schicht importieren können, ohne sich Sorgen machen zu müssen, ob dieses Stylesheet selbst Schichten enthält. Da Schichten verschachtelt werden können, müssen Sie sich keine Sorgen über sich überschneidende Schichtnamen zwischen externen und internen Stylesheets machen.

### Erstellen von verschachtelten Kaskadenschichten

Verschachtelte Schichten können mit den gleichen Methoden erstellt werden, die für reguläre Schichten beschrieben wurden. Zum Beispiel können sie mit der `@layer`-Regel gefolgt von den Namen einer oder mehrerer Schichten erstellt werden, wobei eine Punknotation verwendet wird. Mehrere Punkte und Schichtnamen bedeuten mehrfache Verschachtelung.

Wenn Sie eine Blockregel `@layer` innerhalb einer anderen Blockregel `@layer` verschachteln, mit oder ohne einen Namen, wird der verschachtelte Block zu einer verschachtelten Schicht. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration importiert wird, die das Schlüsselwort `layer` oder die `layer()`-Funktion enthält, werden die Stile dieser benannten oder anonymen Schicht zugewiesen. Enthält die `@import`-Anweisung Schichten, werden diese zu verschachtelten Schichten innerhalb dieser anonymen oder benannten Schicht.

Schauen wir uns das folgende Beispiel an:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in die `components`-Schicht. Wenn diese Datei Schichten, benannt oder nicht, enthält, werden diese Schichten zu verschachtelten Schichten innerhalb der `components`-Schicht.

Die zweite Zeile importiert `narrow-theme.css` in die `narrow`-Schicht, die eine Unterschicht der `components`-Schicht ist. Die verschachtelte `components.narrow` wird als letzte Schicht innerhalb der `components`-Schicht erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Schicht, in diesem Fall würden die Inhalte von `narrow-theme.css` der verschachtelten Schicht `components.narrow` hinzugefügt. Zusätzliche benannte verschachtelte Schichten können der `components`-Schicht mit dem Muster `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Schichten erstellt werden, aber sie können anschließend nicht mehr angesprochen werden.

Schauen wir uns ein weiteres Beispiel an, in dem wir [`layers1.css` in eine benannte Schicht](#the_layer_block_at-rule_for_named_and_anonymous_layers) mit der folgenden Anweisung importieren:

```css
@import url(layers1.css) layer(example);
```

Dies wird eine einzelne Schicht mit dem Namen `example` erstellen, die einige Deklarationen und fünf verschachtelte Schichten - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, und `example.<anonymous(02)>` - enthält.

Um Stile zu einer benannten verschachtelten Schicht hinzuzufügen, verwenden Sie die Punknotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung der Vorrangigkeit basierend auf der Reihenfolge der Schichten

Die Reihenfolge der Schichten bestimmt deren Vorrangigkeit. Daher ist die Reihenfolge der Schichten von großer Bedeutung. Auf die gleiche Weise wie die Kaskade nach Ursprung und Bedeutung sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprung, Schicht und Bedeutung.

### Vorrangordnung von regulären Kaskadenschichten

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der obige Code erstellt zwei benannte Schichten (C.css-Stile werden der impliziten Schicht nicht geschichteter Stile hinzugefügt). Lassen Sie uns annehmen, dass die drei Dateien (`A.css`, `B.css`, und `C.css`) keine zusätzlichen Schichten enthalten. Die folgende Liste zeigt, wo der deklarierte Stile vom wenigsten (1) bis zum meisten (10) Vorrang sortiert werden:

1. `firstLayer` normale Stile (`A.css`)
2. `secondLayer` normale Stile (`B.css`)
3. nicht geschichtete normale Stile (`C.css`)
4. inline normale Stile
5. animierende Stile
6. nicht geschichtete wichtige Stile (`C.css`)
7. `secondLayer` wichtige Stile (`B.css`)
8. `firstLayer` wichtige Stile (`A.css`)
9. inline wichtige Stile
10. übergehende Stile

Normale Stile, die innerhalb von Schichten deklariert wurden, erhalten die niedrigste Priorität und werden in der Reihenfolge der Schichterstellung sortiert. Normale Stile in der als erste erstellten Schicht haben den niedrigsten Vorrang und normale Stile in der zuletzt erstellten Schicht haben die höchste Vorrangigkeit unter den Schichten. Mit anderen Worten: Normale Stile, die innerhalb von `firstLayer` erklärt wurden, werden von jedem nachfolgenden Styling auf der Liste überschrieben, wenn Konflikte auftreten.

Als nächstes kommen alle Stile, die außerhalb von Schichten deklariert wurden. Die Stile in `C.css` wurden nicht in eine Schicht importiert und überschreiben alle widersprüchlichen Stile von `firstLayer` und `secondLayer`. Stile, die nicht in einer Schicht deklariert sind, haben immer eine höhere Vorrangigkeit als Stile, die innerhalb einer Schicht deklariert sind (mit Ausnahme wichtiger Stile).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Global_attributes/style) deklariert. Normal inline deklarierte Stile haben Vorrang vor normalen Stilen, die in nicht geschichteten und geschichteten Stylesheets (`firstLayer - A.css`, `secondLayer - B.css` und `C.css`) gefunden werden.

Animierende Stile haben eine höhere Priorität als alle normalen Stile, einschließlich normaler Inline-Stile.

Wichtige Stile, also Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang vor allen zuvor genannten Stilen in unserer Liste. Sie werden in umgekehrter Reihenfolge normaler Stile sortiert. Alle außerhalb einer Schicht deklarierten wichtigen Stile haben weniger Priorität als diejenigen, die innerhalb einer Schicht deklariert wurden. Wichtige Stile, die in Schichten gefunden werden, sind auch nach ihrer Schichterstellung sortiert. Für wichtige Stile haben die zuletzt erstellten Schichten die niedrigste Priorität und die als erste erstellte Schicht hat die höchste Priorität unter den deklarierten Schichten.

Wichtige Inline-Stile haben erneut Vorrang vor wichtigen Stilen, die an anderer Stelle deklariert wurden.

Übergehende Stile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert übergeht, hat er Vorrang vor allen anderen Eigenschaftswert-Deklarationen, sogar vor wichtigen Inline-Stilen; jedoch nur während des Übergangs.

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

In diesem Beispiel werden zwei Schichten (`A` und `B`) zunächst über eine `@layer`-Deklaration ohne Stile definiert. Die Schichtstile werden in zwei `@layer`-Blockregeln definiert, die nach der außer irgendeiner Schicht deklarierten `h1`-CSS-Regel erscheinen.

Die Inline-Stile, die dem `h1`-Element mithilfe des `style`-Attributs hinzugefügt werden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und nicht geschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und nicht geschichteten wichtigen Autorenstile. Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben.

Die normalen `text-decoration` und wichtigen `box-shadow` sind nicht Teil der Inline-Stile und können daher überschrieben werden. Bei normalen nicht-inline Stilen haben nicht geschichtete Stile Vorrang. Bei wichtigen Stilen zählt auch die Schichtreihenfolge. Obwohl normale nicht geschichtete Stile alle normalen Stile, die in einer Schicht festgelegt wurden, überschreiben, wird bei wichtigen Stilen die Vorrangordnung umgekehrt; nicht geschichtete wichtige Stile haben eine geringere Priorität als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Schichten deklariert werden, sind `font-style`, mit normaler Bedeutung, und `font-weight` mit einem `!important`-Flag. Für normale Stile überschreibt die zuletzt deklarierte Schicht `B` Stile in der zuvor deklarierten Schicht `A`. Für normale Stile haben später erstellte Schichten Vorrang vor früher erstellten Schichten. Die Reihenfolge der Vorrangigkeit ist für wichtige Stile umgekehrt. Bei den wichtigen Deklarationen `font-weight` hat die zuerst deklarierte Schicht `A` Vorrang vor der zuletzt deklarierten Schicht `B`.

Sie können die Schichtreihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` in `@layer B, A;` ändern. Versuchen Sie das. Welche Stile ändern sich dadurch und welche bleiben gleich? Warum?

Die Schichtreihenfolge wird durch die Reihenfolge festgelegt, in der die Schichten in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Schichten deklariert, ohne Stile zuzuweisen, indem wir `@layer` gefolgt von den Namen unserer Schichten verwendet und mit einem Semikolon beendet haben. Hätten wir diese Zeile weggelassen, wären die Ergebnisse gleich. Warum? Wir haben Stilregeln in benannten `@layer`-Blöcken in der Reihenfolge A, dann B zugewiesen. Diese zwei Schichten wurden in dieser ersten Zeile erstellt. Wären sie nicht erstellt worden, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen eingefügt: Erstens, damit Sie die Zeile einfach bearbeiten und die Reihenfolge umkehren können, und zweitens, weil Sie oft feststellen werden, dass das Deklarieren der Reihenfolge der Schichtverwaltung von Anfang an die beste Praxis ist.

Zusammenfassend:

- Die Vorrangreihenfolge der Schichten ist die Reihenfolge, in der sie erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Schichtreihenfolge zu ändern.
- Die Vorrangigkeit der Schicht für normale Stile ist die Reihenfolge der Schichterstellung.
- Ungeschichtete normale Stile haben Vorrang vor normalen geschichteten Stilen.
- Die Vorrangreihenfolge der Schicht für wichtige Stile wird umgekehrt, wobei früher erstellte Schichten Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang vor ungeschichteten wichtigen (und normalen) Stilen.
- Normale Inline-Stile haben Vorrang vor allen normalen Stilen, geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang vor allen anderen Stilen, mit Ausnahme von Stilen, die übergehen.
- Es gibt keine Möglichkeit für Autorenstile, wichtige Inline-Stile zu überschreiben (außer sie zu übergehen, was vorübergehend ist).

### Vorrangordnung von verschachtelten Kaskadenschichten

Die Vorrangreihenfolge für verschachtelte Schichten ist vergleichbar mit der von regulären Schichten, jedoch innerhalb der Schicht selbst. Die Vorrangordnung basiert auf der Reihenfolge der Verschachtelungserstellung. Nichtverschachtelte Stile innerhalb einer Schicht haben Vorrang vor normalen verschachtelten Stilen, wobei die Vorrangordnung bei wichtigen Stilen umgekehrt ist. Die spezifische Gewichtung zwischen verschachtelten Schichten spielt keine Rolle, obwohl sie für konkurrierende Stile innerhalb einer verschachtelten Schicht von Bedeutung ist.

Das folgende Beispiel erstellt und fügt Stile zur `components`-Schicht, zur verschachtelten `components.narrow`-Schicht und zur verschachtelten `components.wide`-Schicht hinzu:

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

- `background-color`: Da ungeschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, gewinnt die `wheat`-Farbe.
- `border`: Da innerhalb einer Schicht nicht verschachtelte Stile Vorrang vor normalen verschachtelten Stilen haben, gewinnt die `red`-Farbe.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang vor ungeschichteten Stilen, wobei wichtige Stile in früher deklarierten Schichten Vorrang vor später deklarierten Schichten haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Schichterstellung `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang vor wichtigen Stilen in `components.wide` haben, was bedeutet, dass `purple` die Farbe gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Schichten gesetzt, sodass aufgrund der Erklärungsreihenfolge der `20%`-Radius gewinnt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Test your skills: The Cascade, Task 2](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie sind jetzt mit den grundlegenden Mechaniken der CSS-Kaskadenschichten vertraut. Als nächstes werfen wir einen detaillierten Blick auf [das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}
