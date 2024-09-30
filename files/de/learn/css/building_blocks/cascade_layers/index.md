---
title: Cascade Layers
slug: Learn/CSS/Building_blocks/Cascade_layers
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}

Diese Lektion zielt darauf ab, Sie in [Cascade Layers](/de/docs/Web/CSS/@layer) einzuführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

Wenn Sie neu in CSS sind, mag es zunächst weniger relevant erscheinen und etwas akademischer als einige andere Teile des Kurses. Es ist jedoch hilfreich, die Grundlagen zu kennen, falls Sie auf Cascade Layers in Ihren Projekten stoßen. Je mehr Sie mit CSS arbeiten, desto mehr werden Sie verstehen, wie Cascade Layers funktionieren und Sie können deren Leistungsfähigkeit nutzen, um sich viel Schmerz bei der Verwaltung einer Codebasis mit CSS von verschiedenen Parteien, Plugins und Entwicklungsteams zu ersparen.

Cascade Layers sind besonders relevant, wenn Sie mit CSS aus mehreren Quellen arbeiten, wenn es Konflikte zwischen CSS-Selektoren und konkurrierende Spezifikationen gibt oder wenn Sie darüber nachdenken, [`!important`](/de/docs/Web/CSS/important) zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Eine Vorstellung davon, wie CSS funktioniert, einschließlich Kaskade und Spezifikationen (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS: Erste Schritte</a> und <a href="/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Kaskade, Spezifikationen und Vererbung</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie Cascade Layers funktionieren.
      </td>
    </tr>
  </tbody>
</table>

Für jede CSS-Eigenschaft, die auf ein Element angewendet wird, kann es nur einen Wert geben. Sie können alle Eigenschaftswerte eines Elements ansehen, indem Sie das Element in den Entwicklertools Ihres Browsers inspizieren. Das "Stile"-Panel zeigt alle angewendeten Eigenschaftswerte auf das inspizierte Element, zusammen mit dem übereinstimmenden Selektor und der CSS-Quelldatei. Der Selektor aus der Quelle mit Vorrang hat seine Werte auf das übereinstimmende Element angewendet.

Zusätzlich zu den angewendeten Stilen zeigt das Stile-Panel durchgestrichene Werte, die dem ausgewählten Element entsprachen, aber aufgrund der Kaskade, Spezifikationen oder Quellordnung nicht angewendet wurden. Durchgestrichene Stile könnten aus derselben Quelle mit Vorrang kommen, aber mit niedrigerer Spezifikation, oder mit passender Quelle und Spezifikation, aber sie wurden früher in der Codebasis gefunden. Wenn Sie einen durchgestrichenen Stil sehen, der einen Selektor mit größerer Spezifikation aufweist, bedeutet das, dass dem Wert die Herkunft oder Wichtigkeit fehlt.

Oftmals, mit zunehmender Komplexität einer Website, erhöht sich die Anzahl der Stylesheets, was die Quellordnung der Stylesheets sowohl wichtiger als auch komplexer macht. Cascade Layers vereinfachen die Wartung von Stylesheets über solche Codebasen hinweg. Cascade Layers sind explizite Spezifikationscontainer, die eine einfachere und bessere Kontrolle über die CSS-Deklarationen bieten, die letztlich angewendet werden, und es Webentwickler\*innen ermöglichen, Abschnitte von CSS ohne den Kampf mit den Spezifikationen zu priorisieren.

Um Cascade Layers zu verstehen, müssen Sie die CSS-Kaskade gut verstehen. Die folgenden Abschnitte bieten eine kurze Wiederholung der wichtigen Kaskadenkonzepte.

## Überprüfung des Kaskadenkonzepts

Das 'C' in CSS steht für "Cascading". Es ist die Methode, durch die sich Stile zusammenfügen. Der User-Agent durchläuft mehrere klar definierte Schritte, um die Werte zu ermitteln, die jeder Eigenschaft für jedes Element zugeordnet sind. Wir werden diese Schritte hier kurz auflisten und dann tiefer in Schritt 4, **Cascade Layers**, einsteigen, worüber Sie hier lernen möchten:

1. **Relevanz:** Finden Sie alle Deklarationsblöcke mit einem Übereinstimmungsvergleich für jedes Element.
2. **Wichtigkeit:** Sortieren Sie die Regeln basierend darauf, ob sie normal oder wichtig sind. Wichtige Stile sind diejenigen, die das [`!important`](/de/docs/Web/CSS/important) Flag haben.
3. **Herkunft:** Innerhalb jeder der zwei Wichtigkeitsstufen werden die Regeln nach Autor, Benutzer oder User-Agent-Herkunft sortiert.
4. **Cascade Layers:** Innerhalb jeder der sechs Herkunfts-Wichtigkeits-Buckets, sortieren Sie nach Cascade-Ebene. Die Layer-Reihenfolge für normale Deklarationen ist von der ersten erstellten Ebene bis zur letzten, gefolgt von ungeschichteten normalen Stilen. Diese Reihenfolge ist umgekehrt für wichtige Stile, wobei wichtige ungeschichtete Stile die niedrigste Priorität haben.
5. **Spezifikation:** Für konkurrierende Stile in der Herkunftsebene mit Vorrang werden die Deklarationen nach [Spezifikation](/de/docs/Web/CSS/Specificity) sortiert.
6. **Scope-Nähe:** Wenn zwei Selektoren in der Herkunftsebene mit Vorrang die gleiche Spezifikation haben, gewinnt der Eigenschaftswert innerhalb von umfassten Regeln mit der geringsten Anzahl von Sprüngen in der DOM-Hierarchie zur Scope-Wurzel. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).
7. **Reihenfolge des Auftretens:** Wenn zwei Selektoren in der Herkunftsebene mit Vorrang dieselbe Spezifikation und Scope-Nähe haben, gewinnt der Eigenschaftswert vom zuletzt deklarierten Selektor mit der höchsten Spezifikation.

Für jeden Schritt ziehen nur die "noch in der Auswahl" befindlichen Deklarationen in den nächsten Schritt weiter, um dort zu "konkurrieren". Wenn nur eine Deklaration in der Auswahl ist, "gewinnt" sie, und die nachfolgenden Schritte sind hinfällig.

### Ursprung und Kaskade

Es gibt drei [Typen von Kaskaden-Ursprüngen](/de/docs/Web/CSS/Cascade#origin_types): User-Agent-Stylesheets, Benutzer-Stylesheets und Autoren-Stylesheets. Der Browser sortiert jede Deklaration in sechs Ursprungs-Buckets nach Ursprung und Wichtigkeit. Es gibt acht Prioritätsstufen: die sechs Ursprungs-Buckets, Eigenschaften, die sich ändern, und Eigenschaften, die animiert werden. Die Prioritätsreihenfolge reicht von normalen User-Agent-Stilen, die die niedrigste Priorität haben, bis hin zu Stilen in aktuell angewendeten Animationen, zu wichtigen User-Agent-Stilen und dann zu Stilen, die sich ändern und die höchste Priorität haben:

1. normale User-Agent-Stile
2. normale Benutzer-Stile
3. normale Autoren-Stile
4. sich ändernde Stile
5. wichtige Autoren-Stile
6. wichtige Benutzer-Stile
7. wichtige User-Agent-Stile
8. sich ändernde Stile

Der "User-Agent" ist der Browser. Der "Benutzer" ist der Seitenbesucher. Der "Autor" sind Sie, der Entwickler. Stile, die direkt an einem Element mit dem {{HTMLElement('style')}}-Element deklariert werden, sind Autoren-Stile. Animierte und sich ändernde Stile ausgenommen, haben normale User-Agent-Stile die niedrigste Priorität; wichtige User-Agent-Stile haben die höchste.

### Ursprung und Spezifikation

Für jede Eigenschaft ist diejenige Deklaration die "gewinnende", die aus dem Ursprung mit Vorrang aufgrund des Gewichts (normal oder wichtig) kommt. Ignorieren wir die Schichten für den Moment, der Wert aus dem Ursprung mit der höchsten Priorität wird angewendet. Wenn der gewinnende Ursprung mehr als eine Eigenschaftsdeklaration für ein Element hat, wird die [Spezifikation](/de/docs/Web/CSS/Specificity) der Selektoren für diese konkurrierenden Eigenschaftswerte verglichen. Die Spezifikation wird niemals zwischen Selektoren aus verschiedenen Ursprüngen verglichen.

Im folgenden Beispiel gibt es zwei Links. Der erste hat keine Autoren-Stile angewendet, sodass nur User-Agent-Stile angewendet werden (und Ihre persönlichen Benutzerstile, falls vorhanden). Der zweite setzt [`text-decoration`](/de/docs/Web/CSS/text-decoration) und [`color`](/de/docs/Web/CSS/color) durch Autoren-Stile, obwohl der Selektor im Autoren-Stylesheet eine Spezifikation von [`0-0-0`](/de/docs/Web/CSS/Specificity#selector_weight_categories) hat. Der Grund, warum Autoren-Stile "gewinnen", ist, dass wenn es zu Stilkonflikten aus unterschiedlichen Ursprüngen kommt, die Regeln aus dem Ursprung mit Vorrang angewendet werden, unabhängig von der Spezifikation im Ursprung, die keinen Vorrang hat.

{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}

Der "konkurrierende" Selektor im User-Agent-Stylesheet zum Zeitpunkt dieses Schreibens ist `a:any-link`, der ein Spezifikationsgewicht von `0-1-1` hat. Obwohl dies größer ist als der `0-0-0` Selektor im Autoren-Stylesheet, ist es egal: Die Spezifikationsgewichte aus Autoren- und User-Agent-Ursprüngen werden niemals verglichen. Erfahren Sie mehr darüber, [wie das Spezifikationsgewicht berechnet wird](/de/docs/Web/CSS/Specificity#how_is_specificity_calculated).

Ursprungspriorität gewinnt immer über Selektorspezifikation. Wenn eine Eigenschaft eines Elements mit einer normalen Stil-Deklaration in mehreren Ursprüngen gestaltet wird, überschreibt das Autoren-Stylesheet stets die redundanten normalen Eigenschaften, die in einem Benutzer- oder User-Agent-Stylesheet deklariert sind. Wenn der Stil wichtig ist, gewinnt das User-Agent-Stylesheet stets über Autoren- und Benutzerstile. Kaskaden-Ursprungspriorität stellt sicher, dass Spezifikationskonflikte zwischen Ursprüngen niemals auftreten.

Bevor wir fortfahren, ist noch eine letzte Sache zu beachten: Die Reihenfolge des Auftretens wird nur relevant, wenn konkurrierende Deklarationen im Ursprung des Vorrangs dieselbe Spezifikation haben.

## Übersicht über Cascade Layers

Wir verstehen nun die "Kaskaden-Ursprungspriorität", aber was ist die "Kaskaden-Ebenen-Priorität"? Diese Frage werden wir beantworten, indem wir darauf eingehen, was Cascade Layers sind, wie sie geordnet werden und wie Stile Cascade Layers zugewiesen werden. Wir behandeln [reguläre Layer](#erstellen_von_cascade_layers), [verschachtelte Layer](#übersicht_über_verschachtelte_cascade_layers) und anonyme Layer. Lassen Sie uns zunächst darüber sprechen, was Cascade Layers sind und welche Probleme sie lösen.

### Reihenfolge der Priorität von Cascade Layers

Ähnlich wie wir sechs Prioritätsstufen basierend auf Ursprung und Wichtigkeit haben, ermöglichen Cascade Layers es uns, Sub-Ursprung-Prioritätsstufen innerhalb eines dieser Ursprünge zu erstellen.

Innerhalb jedes der sechs Ursprungs-Buckets kann es mehrere Cascade Layers geben. Die [Reihenfolge der Erstellung der Layer](/de/docs/Web/CSS/@layer) ist dabei sehr wichtig. Es ist die Reihenfolge der Erstellung, die die Prioritätsreihenfolge unter den Layers innerhalb eines Ursprungs festlegt.

Bei normalen Ursprungs-Buckets werden die Layers in der Reihenfolge ihrer Erstellung sortiert. Die Prioritätsreihenfolge geht von der zuerst erstellten Ebene zur letzten, gefolgt von ungeschichteten normalen Stilen.

Diese Reihenfolge wird für wichtige Stile umgekehrt. Alle ungeschichteten wichtigen Stile kaskadieren zu einer impliziten Schicht mit Vorrang über alle nicht übergehenden normalen Stile. Die ungeschichteten wichtigen Stile haben eine geringere Priorität als alle wichtigen geschichteten Stile. Die wichtigen Stile in früher deklarierten Layers haben Vorrang über wichtige Stile in später deklarierten Layers innerhalb desselben Ursprungs.

In diesem Tutorial beschränken wir uns auf Autorenstile, aber bedenken Sie, dass Layers auch in Benutzer- und User-Agent-Stylesheets existieren können.

### Probleme, die Cascade Layers lösen können

Große Codebasen können Stile aus mehreren Teams, Komponentenbibliotheken, Frameworks und Drittparteien haben. Egal wie viele Stylesheets enthalten sind, alle diese Stile kaskadieren in einem einzigen Ursprung: dem _Autoren-Stylesheet_.

Wenn Stile aus vielen Quellen zusammen kaskadieren, insbesondere von Teams, die nicht zusammenarbeiten, kann das Probleme schaffen. Verschiedene Teams können unterschiedliche Methoden haben; eines kann die Best Practice haben, Spezifikationen zu reduzieren, während ein anderes Standardmäßig ein `id` in jeden Selektor aufnimmt.

Spezifikationskonflikte können sich schnell hochschaukeln. Ein Webentwickler könnte eine "schnelle Lösung" durch Hinzufügen eines `!important`-Flags erstellen. Während dies nach einer einfachen Lösung aussehen mag, verschiebt es oft nur den Spezifikationskrieg von normalen zu wichtigen Deklarationen.

Auf die gleiche Weise, wie Kaskadenursprünge ein Gleichgewicht zwischen Benutzer-, User-Agent- und Autorenstilen bieten, bieten Cascade Layers eine strukturierte Möglichkeit, Bedenken innerhalb eines einzigen Ursprungs zu organisieren und auszubalancieren, als ob jede Ebene innerhalb eines Ursprungs ein Unterursprung wäre. Eine Ebene kann für jedes Team, jede Komponente und jede Drittpartei erstellt werden, mit Stilvorrang basierend auf der Layer-Reihenfolge.

Regeln innerhalb einer Ebene kaskadieren zusammen, ohne mit Stilregeln außerhalb der Ebene zu konkurrieren. Cascade Layers ermöglichen die Priorisierung ganzer Stylesheets über andere Stylesheets, ohne sich um Spezifikationen zwischen diesen Sub-Ursprüngen kümmern zu müssen.

Die Layer-Vorrangigkeit gewinnt immer über die Selektorspezifikation. Stile in Layers mit Vorrang "gewinnen" gegenüber Layers mit weniger Vorrang. Die Spezifikation eines Selektors in einer verlierenden Ebene ist irrelevant. Spezifikation ist weiterhin wichtig für konkurrierende Eigenschaftswerte innerhalb einer Ebene, aber es gibt keine Spezifikationsprobleme zwischen Ebenen, da nur die höchste Prioritätsschicht für jede Eigenschaft berücksichtigt wird.

### Probleme, die verschachtelte Cascade Layers lösen können

Cascade Layers ermöglichen die Erstellung von verschachtelten Layers. Jeder Cascade Layer kann verschachtelte Layers enthalten.

Zum Beispiel kann eine Komponentenbibliothek in eine `components`-Ebene importiert werden. Eine reguläre Cascade-Ebene fügt die Komponentenbibliothek der Autorenherkunft hinzu und entfernt alle Spezifikationskonflikte mit anderen Autorenstilen. Innerhalb der `components`-Ebene kann ein Entwickler verschiedene Themen definieren, jedes als separate verschachtelte Ebene. Die Reihenfolge dieser verschachtelten Themenlayers kann basierend auf Medienabfragen definiert werden (siehe den Abschnitt [Layererstellung und Media Queries](#layer-erstellung_und_media_queries) unten), z. B. Bildschirmgröße oder [Ausrichtung](/de/docs/Web/CSS/@media/orientation). Diese verschachtelten Layers bieten eine Möglichkeit, Themen zu erstellen, die nicht auf Spezifikationsbasis konkurrieren.

Die Fähigkeit, Layers zu verschachteln, ist sehr nützlich für alle, die daran arbeiten, Komponentenbibliotheken, Frameworks, Drittanbieter-Widgets und Themen zu entwickeln.

Die Möglichkeit, verschachtelte Layers zu erstellen, beseitigt auch die Sorge um sich widersprechende Layer-Namen. Wir werden dies im Abschnitt über [verschachtelte Layer](#übersicht_über_verschachtelte_cascade_layers) näher erläutern.

> "Autoren können Layers erstellen, um Element-Vorgabewerte, Drittanbieterbibliotheken, Themen, Komponenten, Überschreibungen und andere Styling-Bedürfnisse zu repräsentieren - und in der Lage, die Kaskade von Layers in expliziter Weise neu zu ordnen, ohne Selektoren oder Spezifikationen innerhalb jeder Ebene zu ändern oder auf die Reihenfolge des Auftretens zu verlassen, um Konflikte zwischen den Ebenen zu lösen."
>
> —[Spezifikation Kaskade und Vererbung](https://www.w3.org/TR/css-cascade-5/#layering).

## Erstellen von Cascade Layers

Layers können mit einer der folgenden Methoden erstellt werden:

- Die [`@layer`](/de/docs/Web/CSS/@layer)-Anweisung bei Regel, die Layers mit `@layer` gefolgt von den Namen eines oder mehrerer Layers deklariert. Dies erstellt benannte Layers, ohne ihnen Stile zuzuweisen.
- Die `@layer`-Blockregel, in der alle Stile innerhalb eines Blocks einem benannten oder unbenannten Layer hinzugefügt werden.
- Die [`@import`](/de/docs/Web/CSS/@import)-Regel mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, die die Inhalte der importierten Datei diesem Layer zuordnet.

Alle drei Methoden erstellen einen Layer, wenn ein Layer mit diesem Namen noch nicht initialisiert wurde. Wenn in der `@layer`-Regel oder `@import` mit `layer()` kein Layer-Name angegeben ist, wird ein neuer anonymer (unbenannter) Layer erstellt.

> [!NOTE]
> Die Reihenfolge der Vorrangigkeit der Layers ist die Reihenfolge, in der sie erstellt werden. Stile, die sich in keinem Layer befinden, oder "ungeschichtete Stile", kaskadieren zusammen in eine letzte implizite Bezeichnung.

Lassen Sie uns die drei Möglichkeiten zur Erstellung eines Layers etwas detaillierter betrachten, bevor wir über verschachtelte Layers sprechen.

### Die @layer-Anweisung bei Regel für benannte Layers

Die Reihenfolge der Layers wird durch die Reihenfolge festgelegt, in der die Layers in Ihrem CSS erscheinen. Das Deklarieren von Layers unter Verwendung von `@layer` gefolgt von den Namen eines oder mehrerer Layers ohne Zuweisung von Stilen ist eine Möglichkeit, die [Layer-Reihenfolge](#bestimmung_der_reihenfolge_des_vorrangs_basierend_auf_der_reihenfolge_der_layers) zu definieren.

Die [`@layer`](/de/docs/Web/CSS/@layer)-Regel wird verwendet, um eine Kaskadenschicht zu deklarieren und die Vorrangordnung festzulegen, wenn es mehrere Kaskadenschichten gibt. Die folgende Regel deklariert drei Layers in der angegebenen Reihenfolge:

```css
@layer theme, layout, utilities;
```

Sie werden oft möchten, dass Ihre erste CSS-Zeile diese `@layer`-Deklaration ist (mit Layer-Namen, die für Ihre Seite sinnvoll sind), um vollständige Kontrolle über die Layer-Reihenfolge zu haben.

Wenn die oben genannte Erklärung die erste Zeile des CSS einer Website ist, wird die Layer-Reihenfolge `theme`, `layout` und `utilities` sein. Wenn einige Layers vor der obigen Deklaration erstellt wurden, werden diese drei Layers erstellt und am Ende der Liste der vorhandenen Layers hinzugefügt, solange Layers mit diesen Namen nicht bereits existieren. Wenn jedoch ein Layer mit demselben Namen bereits existiert, wird die obige Erklärung nur zwei neue Layers erstellen. Wenn zum Beispiel `layout` bereits existiert, werden nur `theme` und `utilities` erstellt, aber die Reihenfolge der Layers wird in diesem Fall `layout`, `theme` und `utilities` sein.

### Die @layer-Blockregel für benannte und anonyme Layers

Layers können mit der `@layer`-Blockregel erstellt werden. Wenn eine `@layer`-Regel durch einen Bezeichner und einem Block von Styles folgt, wird der Bezeichner verwendet, um den Layer zu benennen, und die Stile in dieser Regel werden den Styles des Layers hinzugefügt. Wenn ein Layer mit dem angegebenen Namen noch nicht existiert, wird ein neuer Layer erstellt. Wenn ein Layer mit dem angegebenen Namen bereits existiert, werden die Stile dem vorher existierenden Layer hinzugefügt. Wenn beim Erstellen eines Blocks von Stilen mit `@layer` kein Name angegeben wird, werden die Stile in der Regel zu einem neuen, anonymen Layer hinzugefügt.

Im folgenden Beispiel haben wir vier `@layer`-Blockregeln und eine `@layer`-Anweisungsregel verwendet. Dieses CSS tut in der angegebenen Reihenfolge Folgendes:

1. Erstellt einen benannten `layout`-Layer
2. Erstellt einen unbenannten, anonymen Layer
3. Deklariert eine Liste von drei Layers und erstellt nur zwei neue Layers, `theme` und `utilities`, da `layout` bereits existiert
4. Fügt zusätzliche Stile zum bereits bestehenden `layout`-Layer hinzu
5. Erstellt einen zweiten unbenannten, anonymen Layer

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

In dem oben genannten CSS haben wir fünf Layers erstellt: `layout`, `<anonymous(01)>`, `theme`, `utilities` und `<anonymous(02)>` – in dieser Reihenfolge – mit einem sechsten, impliziten Layer aus ungeschichteten Stilen, die in der `body`-Stilblock enthalten sind. Die Layer-Reihenfolge ist die Reihenfolge, in der die Layers erstellt werden, wobei der implizite Layer der ungeschichteten Stile immer zuletzt kommt. Es gibt keine Möglichkeit, die Layer-Reihenfolge einmal erstellt zu ändern.

Wir haben einige Stile dem Layer namens `layout` zugewiesen. Wenn ein benannter Layer noch nicht existiert, dann erstellt das Angeben des Namens in einer `@layer`-Regel, mit oder ohne Zuweisung von Stilen zu dem Layer, den Layer; dies fügt den Layer am Ende der Serie der vorhandenen Layer-Namen hinzu. Wenn der benannte Layer bereits existiert, werden alle Stile innerhalb des benannten Blocks den Styles des vorher existierenden Layers angehängt – das Angeben von Stilen in einem Block durch Wiederverwendung eines vorhandenen Layer-Namens erstellt keinen neuen Layer.

Anonyme Layers werden durch Zuweisen von Stilen zu einem Layer, ohne den Layer zu benennen, erstellt. Stile können einem unbenannten Layer nur zum Zeitpunkt seiner Erstellung hinzugefügt werden.

> [!NOTE]
> Die erneute Verwendung von `@layer` ohne Layer-Namen erstellt zusätzliche unbenannte Layers; sie fügt keine Stile zu einem vorher existierenden unbenannten Layer hinzu.

Die `@layer`-Regel erstellt einen Layer, egal ob benannt oder nicht, oder hängt Stile zu einem Layer hinzu, wenn der benannte Layer bereits existiert. Wir nannten den ersten anonymen Layer `<anonymous(01)>` und den zweiten `<anonymous(02)>`, dies ist nur, damit wir sie erklären können. Dies sind tatsächlich unbenannte Layers. Es gibt keine Möglichkeit, auf sie zu verweisen oder zusätzliche Stile zu ihnen hinzuzufügen.

Alle Stile, die außerhalb eines Layers deklariert werden, werden zusammen in einem impliziten Layer gesammelt. Im obigen Beispielcode setzt die erste Deklaration die Eigenschaft `color: #333` auf `body`. Diese wurde außerhalb eines Layers deklariert. Normale ungeschichtete Deklarationen haben Vorrang über normale geschichtete Deklarationen, selbst wenn die ungeschichteten Stile eine niedrigere Spezifikation haben und zuerst in der Erscheinungsreihenfolge erscheinen. Dies erklärt, warum sogar der ungeschichtete CSS zuerst im Codeblock deklariert wurde, der implizite Layer, der diese ungeschichteten Stile enthält, den Vorrang erhält, als wäre er der zuletzt deklarierte Layer.

In der Zeile `@layer theme, layout, utilities;`, in der eine Reihe von Layers deklariert wurde, wurden nur die `theme`- und `utilities`-Layers erstellt; `layout` wurde bereits in der ersten Zeile erstellt. Beachten Sie, dass diese Deklaration die Reihenfolge der bereits erstellten Layers nicht ändert. Derzeit gibt es keine Möglichkeit, bereits bestehende Layers neu zu ordnen.

Im folgenden interaktiven Beispiel weisen wir Styles zwei Layers zu, erstellen und benennen sie im Prozess. Da sie bereits existieren, wenn sie zum ersten Mal verwendet werden, hat das Deklarieren auf der letzten Zeile keinen Einfluss.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-order.html", '100%', 500)}}

Versuchen Sie, die letzte Zeile, `@layer site, page;`, an den Anfang zu setzen. Was passiert?

#### Layer-Erstellung und Media Queries

Wenn Sie einen Layer unter Verwendung von [Media](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) oder [Feature](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)-Abfragen definieren und das Medium keine Übereinstimmung ist oder das Feature nicht unterstützt wird, wird der Layer nicht erstellt. Das folgende Beispiel zeigt, wie die Layer-Reihenfolge durch Ändern der Größe Ihres Geräts oder Browsers geändert werden kann. In diesem Beispiel erstellen wir den `site`-Layer nur in größeren Browsern. Dann weisen wir Stile dem `page`- und `site`-Layer zu, in dieser Reihenfolge.

{{EmbedGHLiveSample("css-examples/learn/layers/media-order.html", '100%', 500)}}

Auf breiten Bildschirmen wird der `site`-Layer in der ersten Zeile deklariert, was bedeutet, dass `site` weniger Vorrang als `page` hat. Andernfalls hat `site` Vorrang vor `page`, da es später auf engen Bildschirmen deklariert wird. Wenn das nicht funktioniert, versuchen Sie, die `50em` in der Media Query auf `10em` oder `100em` zu ändern.

### Importieren von Stylesheets in benannte und anonyme Layers mit @import

Die [`@import`](/de/docs/Web/CSS/@import)-Regel ermöglicht es Benutzern, Stile aus anderen Stylesheets entweder direkt in eine CSS-Datei oder in ein {{htmlelement('style')}}-Element zu importieren.

Beim Importieren von Stylesheets muss die `@import`-Anweisung vor allen CSS-Stilen innerhalb des Stylesheets oder `<style>`-Blocks definiert werden. Die `@import`-Anweisung muss zuerst kommen, vor allen Styles, kann aber von einer `@layer`-Regel vorangestellt werden, die einen oder mehrere Layers erstellt, ohne irgendwelche Styles zuzuweisen. (`@import` kann auch von einer [`@charset`](/de/docs/Web/CSS/@charset)-Regel vorangestellt werden.)

Sie können ein Stylesheet in einen benannten Layer, einen verschachtelten benannten Layer oder einen anonymen Layer importieren. Der folgende Layer importiert die Stylesheets in einen `components`-Layer, einen verschachtelten `dialog`-Layer innerhalb des `components`-Layers und einen unbenannten Layer:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

Sie können mehr als eine CSS-Datei in einen einzigen Layer importieren. Die folgende Erklärung importiert zwei separate Dateien in einen einzigen `social`-Layer:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

Sie können Styles importieren und Layers basierend auf spezifischen Bedingungen erstellen, indem Sie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) und [Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) verwenden. Der folgende Code importiert ein Stylesheet in einen `international`-Layer nur, wenn der Browser `display: ruby` unterstützt, und die importierte Datei ist von der Breite des Bildschirms abhängig.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby) and
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby) and
  (width >= 32rem);
```

> [!NOTE]
> Es gibt kein Äquivalent zur {{HTMLElement('link')}}-Methode, Stylesheets zu verlinken. Verwenden Sie `@import`, um ein Stylesheet in einen Layer zu importieren, wenn Sie `@layer` innerhalb des Stylesheets nicht verwenden können.

## Übersicht über verschachtelte Cascade Layers

Verschachtelte Layers sind Layers innerhalb eines benannten oder anonymen Layers. Jeder Cascade Layer, selbst ein anonymer, kann verschachtelte Layers enthalten. Layers, die in einen anderen Layer importiert werden, werden zu verschachtelten Layers innerhalb dieses Layers.

### Vorteile der Verschachtelung von Layers

Die Fähigkeit, Layers zu verschachteln, ermöglicht es Teams, Cascade Layers zu erstellen, ohne sich Sorgen machen zu müssen, ob andere Teams sie in einen Layer importieren werden. Ebenso ermöglicht die Verschachtelung, dass Sie Drittanbieter-Stylesheets in einen Layer importieren können, ohne sich Sorgen zu machen, ob dieses Stylesheet selbst Layers hat. Da Layers verschachtelt werden können, müssen Sie sich keine Sorgen machen, dass es zu Konflikten zwischen externen und internen Stylesheet-Layern kommt.

### Erstellen von verschachtelten Cascade Layers

Verschachtelte Layers können mit den gleichen Methoden wie reguläre Layers erstellt werden. Zum Beispiel können sie mit einer `@layer`-Regel gefolgt von den Namen eines oder mehrerer Layers und einer Punktnotation erstellt werden. Mehrere Punkte und Layer-Namen kennzeichnen mehrere Verschachtelungen.

Wenn Sie eine `@layer`-Blockregel in eine andere `@layer`-Blockregel verschachteln, mit oder ohne einen Namen, wird der verschachtelte Block zu einem verschachtelten Layer. Ebenso, wenn ein Stylesheet mit einer `@import`-Deklaration, die das `layer`-Schlüsselwort oder die `layer()`-Funktion enthält, importiert wird, werden die Styles diesem benannten oder anonymen Layer zugewiesen. Wenn die `@import`-Erklärung Layers enthält, werden diese Layers zu verschachtelten Layers innerhalb jenes anonymen oder benannten Layers.

Betrachten wir das folgende Beispiel:

```css
@import url("components-lib.css") layer(components);
@import url("narrowtheme.css") layer(components.narrow);
```

In der ersten Zeile importieren wir `components-lib.css` in den `components`-Layer. Wenn diese Datei Layers enthält, benannt oder nicht, werden diese Layers zu verschachtelten Layers innerhalb des `components`-Layers.

Die zweite Zeile importiert `narrowtheme.css` in die `narrow`-Ebene, die eine Unterebene von `components` ist. Die verschachtelte `components.narrow` wird als letzte Ebene innerhalb des `components`-Layers erstellt, es sei denn, `components-lib.css` enthält bereits eine `narrow`-Ebene, in diesem Fall würden die Inhalte von `narrowtheme.css` der verschachtelten `components.narrow`-Ebene angehängt. Zusätzliche verschachtelte benannte Layers können dem `components`-Layer unter Verwendung des Musters `components.<layerName>` hinzugefügt werden. Wie bereits erwähnt, können unbenannte Layers erstellt werden, aber sie können später nicht erneut zugegriffen werden.

Betrachten wir ein weiteres Beispiel, bei dem wir [`layers1.css` in einen benannten Layer importieren](#the_layer_block_at-rule_for_named_and_anonymous_layers), indem wir die folgende Anweisung verwenden:

```css
@import url(layers1.css) layer(example);
```

Dies erstellt einen einzelnen Layer namens `example`, der einige Deklarationen und fünf verschachtelte Layers enthält - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities` und `example.<anonymous(02)>`.

Um Styles zu einem benannten verschachtelten Layer hinzuzufügen, verwenden Sie die Punktnotation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Bestimmung der Reihenfolge des Vorrangs basierend auf der Reihenfolge der Layers

Die Reihenfolge der Layers bestimmt ihre Vorrangreihenfolge. Daher ist die Reihenfolge der Layers sehr wichtig. Auf die gleiche Weise, wie die Kaskade nach Ursprung und Wichtigkeit sortiert, sortiert die Kaskade jede CSS-Deklaration nach Ursprung, Layer und Wichtigkeit.

### Vorrangreihenfolge regulärer Cascade Layers

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

Der oben genannte Code erstellt zwei benannte Layers (die Stile von C.css werden dem impliziten Layer aus ungeschichteten Stilen hinzugefügt). Nehmen wir an, dass die drei Dateien (A.css, B.css und C.css) keine zusätzlichen Layers enthalten. Die folgende Liste zeigt, wo im Inneren und außerhalb dieser Dateien deklarierte Stile nach von der geringsten (1) zur höchsten (10) sortiert werden.

1. `firstLayer` normale Stile (A.css)
2. `secondLayer` normale Stile (B.css)
3. ungeschichtete normale Stile (C.css)
4. Inline normale Stile
5. sich ändernde Stile
6. ungeschichtete wichtige Stile (C.css)
7. `secondLayer` wichtige Stile (B.css)
8. `firstLayer` wichtige Stile (A.css)
9. Inline wichtige Stile
10. sich ändernde Stile

Normale Stile, die innerhalb von Layers deklariert werden, haben die niedrigste Priorität und werden nach der Reihenfolge erstellt, in der die Layers erstellt wurden. Normale Stile in der zuerst erstellten Ebene haben die niedrigste Priorität, normale Stile in der zuletzt erstellten Ebene haben die höchste Priorität unter den Layers. Mit anderen Worten, normale Stile, die in `firstLayer` deklariert werden, werden von allen nachfolgenden Styles in der Liste überschrieben, wenn Konflikte bestehen.

Als nächstes kommen alle Stile, die außerhalb von Layers deklariert sind. Die Stile in C.css wurden nicht in einen Layer importiert und überschreiben alle konkurrierenden Styles aus `firstLayer` und `secondLayer`. Stile, die nicht in einem Layer deklariert werden, haben immer Vorrang über Stile, die _in einem Layer_ deklariert werden (mit der Ausnahme von wichtigen Stilen).

Inline-Stile werden mit dem [`style`-Attribut](/de/docs/Web/HTML/Global_attributes/style) deklariert. Normale Stile, die auf diese Weise deklariert werden, haben Vorrang über normale Stile, die in den ungeschichteten und geschichteten Stylesheets (`firstLayer - A.css`, `secondLayer - B.css`, und C.css) gefunden werden.

Sich ändernde Stile haben höhere Vorrang über alle normalen Stile, einschließlich normaler Inline-Stilen.

Wichtige Stile, das heißt, Eigenschaftswerte, die das `!important`-Flag enthalten, haben Vorrang über alle zuvor genannten Stile in unserer Liste. Sie sind in umgekehrter Reihenfolge zu normalen Stilen sortiert. Alle wichtigen Stile, die außerhalb eines Layers deklariert werden, haben weniger Vorrang als diejenigen, die innerhalb eines Layers deklariert werden. Wichtige Stile, die innerhalb von Layers gefunden werden, sind ebenfalls nach der Layer-Erstellung sortiert. Für wichtige Stile hat die zuletzt erstellte Ebene die niedrigste Priorität und die zunächst erstellte Ebene die höchste Priorität unter den deklarierten Layers.

Inline wichtige Stile haben wiederum die höhere Priorität über wichtige Stile, die anderswo deklariert werden.

Sich ändernde Stile haben die höchste Priorität. Wenn ein normaler Eigenschaftswert sich ändert, nimmt er Vorrang über alle anderen Eigenschaftsdeklarationen, selbst über wichtige Inline-Stilen; aber nur während der Veränderung.

{{EmbedGHLiveSample("css-examples/learn/layers/layer-precedence.html", '100%', 500)}}

In diesem Beispiel werden zwei Layers (A und B) anfänglich mit einer `@layer`-Anweisungsregel ohne jegliche Styles definiert. Die Layer-Stile werden in zwei `@layer`-Blockregelblöcken, die nach der `h1`-CSS-Regel, die außerhalb eines Layers deklariert ist, erscheinen, definiert.

Die Inline-Stile, die auf dem `h1`-Element unter Verwendung des `style`-Attributs hinzugefügt werden, setzen eine normale `color` und eine wichtige `background-color`. Normale Inline-Stile überschreiben alle geschichteten und ungeschichteten normalen Stile. Wichtige Inline-Stile überschreiben alle geschichteten und ungeschichteten Autoren-Stile, ob normal oder wichtig. Es gibt keine Möglichkeit für Autoren-Stile, wichtige Inline-Stile zu überschreiben.

Der normale `text-decoration` und wichtige `box-shadow` sind nicht Teil der `style`-Inline-Stile und können daher überschrieben werden. Für normale nicht-Inline-Stile haben ungeschichtete Stile Vorrang. Bei wichtigen Stilen spielt die Layer-Reihenfolge ebenfalls eine Rolle. Während normale ungeschichtete Stile alle normalen Stile, die in einem Layer gesetzt sind, überschreiben, ist der Vorrang bei wichtigen Stilen umgekehrt; ungeschichtete wichtige Stile haben geringeren Vorrang als geschichtete Stile.

Die beiden Stile, die nur innerhalb von Layers deklariert werden, sind `font-style`, mit normaler Wichtigkeit, und `font-weight` mit einem `!important`-Flag. Bei normalen Stilen überschreibt der zuletzt deklarierte `B`-Layer Stile in dem früher deklarierten Layer `A`. Bei normalen Stilen haben spätere Layers Vorrang über frühere Layers. Die Vorrangreihenfolge ist bei wichtigen Stilen umgekehrt. Für die wichtigen `font-weight`-Deklarationen hat der `A`-Layer, da er zuerst deklariert wurde, Vorrang über den zuletzt deklarierten `B`-Layer.

Sie können die Layer-Reihenfolge umkehren, indem Sie die erste Zeile von `@layer A, B;` auf `@layer B, A;` ändern. Probieren Sie das aus. Welche Styles ändern sich dadurch, und welche bleiben gleich? Warum?

Die Reihenfolge der Layers wird durch die Reihenfolge festgelegt, in der die Layers in Ihrem CSS erscheinen. In unserer ersten Zeile haben wir Layers deklariert, ohne irgendwelche Stile zuzuweisen, indem wir `@layer` gefolgt von den Namen unserer Layers verwendet und mit einem Semikolon beendet haben. Hätten wir diese Zeile ausgelassen, wären die Ergebnisse gleich geblieben. Warum? Wir haben Stilregeln in benannten `@layer`-Blöcken in der Reihenfolge A dann B zugewiesen. Die zwei Layers wurden in dieser ersten Zeile erstellt. Wären sie nicht, hätten diese Regelblöcke sie in dieser Reihenfolge erstellt.

Wir haben diese erste Zeile aus zwei Gründen hinzugefügt: Erstens, damit Sie die Zeile leicht bearbeiten und die Reihenfolge ändern können, und zweitens, weil Sie oft feststellen werden, dass es die beste Praxis für Ihr Layer-Management sein wird, die Layer-Reihenfolge von Anfang an zu deklarieren.

Zusammenfassend:

- Die Reihenfolge der Vorrangigkeit der Layers ist die Reihenfolge, in der die Layers erstellt werden.
- Einmal erstellt, gibt es keine Möglichkeit, die Layer-Reihenfolge zu ändern.
- Die Layer-Vorrangigkeit für normale Stile ist die Reihenfolge, in der die Layers erstellt werden.
- Ungeschichtete normale Stile haben Vorrang über normale geschichtete Stile.
- Die Layer-Vorrangigkeit für wichtige Stile ist umgekehrt, wobei früher erstellte Layers Vorrang haben.
- Alle geschichteten wichtigen Stile haben Vorrang über ungeschichtete wichtige (und normale) Stile.
- Normale Inline-Stile haben Vorrang über alle normalen Stile, ob geschichtet oder nicht.
- Wichtige Inline-Stile haben Vorrang über alle anderen Stile, mit Ausnahme von sich ändernden Stilen.
- Es gibt keine Möglichkeit für Autoren-Stile, wichtige Inline-Stile zu überschreiben (abgesehen davon, sie zu ändern, was vorübergehend ist).

### Vorrangreihenfolge verschachtelter Cascade Layers

Die Kaskaden-Vorrangreihenfolge für verschachtelte Layers ist ähnlich wie die für reguläre Layers, jedoch innerhalb des Layers. Die Vorrangreihenfolge basiert auf der Reihenfolge der Layer-Erstellung. Nicht verschachtelte Stile innerhalb eines Layers haben Vorrang über verschachtelte normale Stile, wobei die Vorrangreihenfolge für wichtige Stile umgekehrt ist. Die Spezifikationsgewichtung zwischen verschachtelten Layers spielt keine Rolle, obwohl sie für konkurrierende Stile innerhalb eines verschachtelten Layers wichtig ist.

Das folgende Beispiel erstellt und fügt Stile dem `components`-Layer, dem verschachtelten `components.narrow`-Layer und dem verschachtelten `components.wide`-Layer hinzu:

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

{{EmbedLiveSample("Vorrangreihenfolge verschachtelter Cascade Layers", "100%", "250")}}

Hier ist eine Zusammenfassung der verwendeten Eigenschaften und warum jede Deklaration angewendet wird:

- `background-color`: Da ungeschichtete normale Stile Vorrang über geschichtete normale Stile haben, gewinnt die Farbe `wheat`.
- `border`: Da innerhalb eines Layers nicht verschachtelte Stile Vorrang über normale verschachtelte Stile haben, gewinnt die Farbe `red`.
- `color`: Bei wichtigen Stilen haben geschichtete Stile Vorrang über ungeschichtete Stile, wobei wichtige Stile in früher deklarierten Layers Vorrang gegenüber später deklarierten Layers haben. In diesem Beispiel ist die Reihenfolge der verschachtelten Layer-Erstellung `components.narrow`, dann `components.wide`, sodass wichtige Stile in `components.narrow` Vorrang über wichtige Stile in `components.wide` haben, was bedeutet, dass die Farbe `purple` gewinnt.
- `border-radius`: Die Eigenschaft wurde nur in den verschachtelten Layers gesetzt, daher gewinnt nach Deklarationsreihenfolge `20%` Radius.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie fortfahren - siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade, Aufgabe 2](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks#task_2).

## Zusammenfassung

Wenn Sie die meisten Informationen in diesem Artikel verstanden haben, dann herzlichen Glückwunsch – Sie sind nun mit den grundlegenden Mechanismen der CSS-Cascade-Layers vertraut. Als Nächstes werden wir das [Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) im Detail betrachten.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks")}}
