---
title: Grid-Layout und Barrierefreiheit
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Diejenigen von uns, die schon seit mehr Jahren in der Webentwicklung tätig sind, als wir uns erinnern möchten, könnten denken, dass das CSS-Grid ein wenig wie die Nutzung von "Tabellen für Layout" ist. In den frühen Tagen des Webdesigns war die gängige Methode zur Erstellung von Seitenlayouts die Verwendung von HTML-Tabellen, wobei wir unsere Designs in die Zellen dieser Tabellen zerlegten, um ein Layout zu erstellen. Dies hatte einige Vorteile gegenüber dem späteren "CSS Positioning", da wir die Ausrichtung und volle Höhe von Spalten, die durch Tabellendarstellung geboten wurden, nutzen konnten. Der größte Nachteil war jedoch, dass unser Design an das Markup gebunden wurde, was oft Barrierefreiheitsprobleme verursachte. Um das Design in der Tabelle zu layouten, haben wir oft den Inhalt so aufgeteilt, dass er z.B. beim Vorlesen mit einem Screenreader keinen Sinn machte.

Der Umzug zu CSS führte oft dazu, dass wir von CSS für Layout als Möglichkeit sprachen, Inhalt, Markup und Präsentation zu trennen. Das ultimative Ziel war, ein semantisches und gut strukturiertes Dokument zu erstellen und dann CSS anzuwenden, um das gewünschte Layout zu erstellen. Seiten wie der [CSS Zen Garden](https://www.csszengarden.com/) zeigten diese Fähigkeit. Der CSS Zen Garden forderte uns heraus, identisches Markup zu verwenden und damit ein einzigartiges Design mit CSS zu gestalten.

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) hat nicht die gleichen Probleme wie Tabellen, unsere Grid-Struktur wird in CSS und nicht im Markup definiert. Wenn wir ein Element hinzufügen müssen, können wir etwas ohne semantische Bedeutung verwenden. Auf dem Papier hilft uns Grid, das Versprechen der Trennung von Inhalt und Markup zu erfüllen, aber ist es möglich, mit dieser Idee zu weit zu gehen? Ist es möglich, durch die Verwendung von Grids ein Barrierefreiheitsproblem zu _schaffen_?

## Umordnung von Inhalten im CSS-Grid-Layout

In diesen Leitfäden haben wir bereits gesehen, dass Grid uns die Möglichkeit gibt, den Inhalt unserer Seite auf verschiedene Arten neu zu ordnen. Wir können die {{cssxref("order")}}-Eigenschaft verwenden, die ändert, wie Elemente automatisch platziert werden. Wir können `grid-auto-flow: dense` verwenden, um Elemente visuell aus der DOM-Reihenfolge zu entfernen. Außerdem können wir Elemente mithilfe der linienbasierten Platzierung von Grid-Template-Bereichen positionieren, ohne ihre Position im Quellcode zu berücksichtigen.

Die [Spezifikation](https://drafts.csswg.org/css-grid/#order-accessibility) enthält einen Abschnitt über Umordnung und Barrierefreiheit. In der Einleitung zu diesem Abschnitt werden Details beschrieben, was die Spezifikation von Browsern erwartet, wenn Inhalte visuell mit Grid-Layout umgeordnet werden.

> Grid-Layout gibt Autoren große Umgestaltungsfähigkeiten über das Dokument. Diese sind jedoch kein Ersatz für die korrekte Reihenfolge der Dokumentquelle. Die Eigenschaft Order und die Grid-Platzierung beeinflussen nicht die Reihenfolge in nicht-visuellen Medien (wie Sprache). Ebenso beeinflusst das visuelle Umordnen von Grid-Elementen nicht die Standard-Durchlaufreihenfolge von sequentiellen Navigationsmodi (wie dem Durchlaufen von Links, siehe z.B. [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) HTML5).

Wenn Sie Dinge visuell mit Grid-Layout ordnen, ändert dies nicht die Reihenfolge der Elemente, wenn der Inhalt von einem Screenreader oder einem anderen Text-to-Speech-Benutzeragenten vorgelesen wird. Darüber hinaus wird die Tabulatorreihenfolge nicht geändert. Das bedeutet, dass jemand, der die Tastatur zur Navigation verwendet, durch Links auf Ihrer Seite tabben könnte und plötzlich feststellen könnte, dass er vom Anfang zum Ende des Dokuments springt, da ein umgeordnetes Element als nächstes in der Reihe ist.

Die Spezifikation warnt Autoren (der CSSWG-Begriff für Webentwickler), diese Umordnung nicht durchzuführen.

> Autoren müssen die Eigenschaften Order und Grid-Platzierungen nur für die visuelle, nicht logische Umordnung von Inhalten verwenden. Stylesheets, die diese Funktionen zur Ausführung logischer Umordnungen verwenden, sind nicht konform.

Was bedeutet das in der Praxis für das Design mit Grid-Layout?

### Visuelle, nicht logische Umordnung

Jedes Mal, wenn Sie Dinge mit Grid-Layout – oder mit Flexbox – umordnen, führen Sie nur eine _visuelle Umordnung_ durch. Die zugrunde liegende Quelle bestimmt Dinge wie Text-to-Speech und die Tabulatorreihenfolge des Dokuments. Sie können in einem sehr einfachen Beispiel sehen, wie dies funktioniert.

In diesem Beispiel habe ich Grid verwendet, um ein Set von Boxen mit Links zu layouten. Ich habe die linienbasierten Platzierungseigenschaften verwendet, um Box 1 in die zweite Zeile des Grids zu platzieren. Visuell erscheint sie nun als viertes Element in der Liste. Wenn ich jedoch von Link zu Link tabuliere, beginnt die Tabulatorreihenfolge immer noch mit Box 1, da sie zuerst in der Quelle kommt.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1;
  grid-row: 2;
}
```

```html
<div class="wrapper">
  <div class="box box1"><a href="">One</a></div>
  <div class="box box2"><a href="">Two</a></div>
  <div class="box box3"><a href="">Three</a></div>
  <div class="box box4"><a href="">Four</a></div>
  <div class="box box5"><a href="">Five</a></div>
</div>
```

{{ EmbedLiveSample('Visual_not_logical_re-ordering', '500', '330') }}

Die Spezifikation sagt, dass in diesem Szenario, wenn Box 1 an dieser Position wirklich Sinn macht, wir zu unserer Quelle zurückkehren und die Änderung dort vornehmen sollten, anstatt sie mit Grid-Layout umzuordnen. Dies ist mit visueller vs. logischer Umordnung gemeint, logische Ordnung ist wichtig für die Bedeutung und Struktur unseres Dokuments, und wir sollten sicherstellen, dass wir diese Struktur beibehalten.

## Wie sollten wir die Barrierefreiheit für Grid-Layout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unseres Inhalts beibehält. Wie sollten wir bei der Entwicklung vorgehen, um sicherzustellen, dass wir die Barrierefreiheit für verschiedene Benutzer und die Arten, wie sie mit unseren Seiten interagieren, erhalten?

- Beginnen Sie mit einem strukturierten und zugänglichen Dokument
  - : Ein Grid-Layout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das gewünschte Layout zu erhalten. Daher sollte der Ausgangspunkt Ihrer Seite ein gut strukturiertes und zugängliches Quellendokument sein. Wie in der CSS-Grid-Layout-Spezifikation erwähnt, gibt dies Ihnen oft auch eine gute Struktur für _Ihre kleinsten Bildschirmgeräte_. Wenn ein Benutzer auf einem mobilen Gerät durch ein langes Dokument scrollt, stimmen die Prioritäten für diesen Benutzer oft mit dem überein, was in der Quelle Priorität haben sollte.
- Erstellen Sie ein responsives und verantwortungsvolles Grid
  - : Mit einem soliden Dokument können Sie anfangen, Ihr Layout hinzuzufügen. Es ist wahrscheinlich, dass Sie [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwenden, um zusätzliche Spalten zu erstellen und Änderungen für verschiedene Bildschirmgrößen und Geräte vorzunehmen. Grid kann hier wirklich sehr nützlich sein; zum Beispiel können Elemente, die in der mobilen Quellordnung weniger wichtig sind, in ein Seitenleiste-Layout auf dem Desktop verschoben werden. Der Schlüssel hier ist, ständig zu testen, ein sehr einfacher Test besteht darin, _durch das Dokument zu tabben_. Ergibt diese Reihenfolge noch Sinn? Überprüfen Sie, ob Sie nicht auf seltsame Weise vom oberen zum unteren Layout springen. Wenn dies der Fall ist, wäre das ein Zeichen dafür, dass Sie etwas am Layout anpassen müssen.
- Zurück zur Quelle
  - : Wenn Sie zu irgendeinem Zeitpunkt im Designprozess Grid verwenden, um die Position eines Elements zu verschieben, überlegen Sie, ob Sie nicht zu Ihrem Dokument zurückkehren und auch die logische Reihenfolge ändern sollten. Das Schöne an der Verwendung des CSS-Grid-Layouts ist, dass Sie ein Element in der Quelle verschieben können, um die logische Reihenfolge zu entsprechen, ohne große Änderungen an Ihrem Layout vornehmen zu müssen. Das ist eine enorme Verbesserung gegenüber einem {{cssxref("float")}}-basierten Layout, bei dem die Dokumentquelle eine große Rolle spielt, um Layouts bei verschiedenen Breakpoints zu erreichen. Dennoch liegt es an uns als Entwickler, daran zu denken, zu unserer Quelle zurückzukehren und sie zu aktualisieren, um die logische Ordnung beizubehalten.

## Grid und die Gefahr der Markup-Glättung

Ein weiteres Problem, das im CSS-Grid-Layout und in geringerem Maße im CSS-Flexbox beachtet werden sollte, ist die Versuchung, das Markup zu _glätten_. Wie wir festgestellt haben, muss ein Element, damit es zu einem Grid-Element wird, ein direktes Kind des Grid-Containers sein. Wenn Sie also ein {{HTMLElement("ul")}}-Element in einem Grid-Container haben, wird _dieses_ `ul` zu einem Grid-Element – die Kinder-{{HTMLElement("li")}}-Elemente jedoch nicht.

Der [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` wird dieses Problem beheben, sobald er weit implementiert ist. Er wird es ermöglichen, dass das Grid von Grid-Elementen übernommen und in den Baum weitergegeben wird.

Da die interoperable Unterstützung für Subgrid begrenzt ist, besteht eine deutliche Versuchung, beim Entwickeln einer Seite mit CSS-Grid-Layout das Markup zu glätten, semantische Elemente zu entfernen, um es einfacher zu machen, ein Layout zu erstellen. Ein Beispiel wäre, wenn einige Inhalte semantisch als Liste markiert sind, Sie sich jedoch entscheiden, eine Reihe von {{HTMLElement("div")}}-Elementen zu verwenden, da diese dann direktes Kind eines Containers sein können, der auf `display: grid` gesetzt ist. Seien Sie sich dieser Versuchung bewusst und finden Sie Wege, Ihr Design zu entwickeln, ohne das Markup auszudünnen. Das Starten mit einem gut strukturierten Dokument ist eine sehr gute Möglichkeit, das Problem zu vermeiden, da Sie sich bewusst sind, dass Sie semantische Elemente entfernen, um das Layout zu ermöglichen, wenn Sie tatsächlich in das Dokument gehen und dies tun müssen!

## Weiterführende Literatur

Es gibt nicht viel vorhandenes Material zu Barrierefreiheit und CSS-Grid-Layout. Viele der Probleme ähneln denen, die durch CSS-Flexbox aufgeworfen werden, das ebenfalls Methoden zur Umordnung von Inhalten mit {{cssxref("flex-direction")}} und der {{cssxref("order")}}-Eigenschaft bietet.

Das Konzept der visuellen Darstellung, die der Dokumentquellenreihenfolge folgt, wird in den _WCAG-Techniken für Erfolgskriterien – [Technik C27](https://www.w3.org/TR/WCAG20-TECHS/C27.html)_ beschrieben.

Um mit diesen Problemen zu beginnen, empfehle ich Ihnen, wenn Sie CSS-Grid-Layout verwenden, die Lektüre von _[Flexbox & the Keyboard Navigation Disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)_ von Léonie Watson. Auch [das Video von Léonies Präsentation bei ffconf](https://www.youtube.com/watch?v=spxT2CmHoPk) ist hilfreich, um mehr darüber zu erfahren, wie Screenreader mit der visuellen Darstellung von Dingen in CSS arbeiten. Adrian Roselli hat ebenfalls über [Tabulator-Reihenfolge in verschiedenen Browsern](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) gepostet – obwohl dies vor der vollständigen Implementierung der Grid-Unterstützung in Firefox war.
