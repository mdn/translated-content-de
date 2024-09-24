---
title: Grid-Layout und Barrierefreiheit
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Diejenigen von uns, die seit mehr Jahren Webentwicklung betreiben, als wir uns erinnern können, könnten denken, dass CSS-Grid ein wenig wie die Verwendung von "Tabellen für das Layout" ist. In den frühen Tagen des Webdesigns war es üblich, Seitendesigns mit HTML-Tabellen zu konstruieren und das Design in die Zellen dieser Tabellen zu fragmentieren, um ein Layout zu erstellen. Dies hatte gegenüber dem später folgenden "CSS-Positioning" einige Vorteile, da wir die Ausrichtung und die volle Höhe der Spalten nutzen konnten, die durch die Tabellenanzeige geboten wurden. Der größte Nachteil war jedoch, dass unser Design an das Markup gebunden war, was häufig Barrierefreiheitsprobleme verursachte. Um das Design in der Tabelle zu layouten, zerteilten wir den Inhalt oft auf eine Weise, die beim Vorlesen durch einen Screenreader beispielsweise keinen Sinn ergab.

Mit dem Übergang zu CSS sprachen wir oft davon, dass CSS für das Layout eine Trennung von Inhalt, Markup und Präsentation ermöglicht. Das ultimative Ziel war es, ein semantisch korrektes und gut strukturiertes Dokument zu erstellen und dann CSS anzuwenden, um das gewünschte Layout zu erzielen. Websites wie der [CSS Zen Garden](https://www.csszengarden.com/) zeigten diese Fähigkeit. Der CSS Zen Garden forderte uns heraus, identisches Markup zu nehmen und mit CSS ein einzigartiges Design zu erstellen.

Das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) hat nicht dieselben Probleme, die Tabellen hatten, da unsere Grid-Struktur in CSS und nicht im Markup definiert ist. Wenn wir ein Element hinzufügen müssen, können wir etwas verwenden, das keine semantische Bedeutung hat. Theoretisch hilft uns das Grid, das Versprechen einer Trennung von Inhalt und Markup richtig zu erfüllen. Allerdings ist es möglich, dass wir durch die Nutzung von Grids ein Barrierefreiheitsproblem _erschaffen_ könnten?

## Neuanordnung von Inhalten in CSS-Grid-Layouts

Wie bereits in diesen Leitfäden gesehen, bietet uns das Grid die Möglichkeit, den Inhalt unserer Seite auf verschiedene Weise neu zu ordnen. Wir können die {{cssxref("order")}}-Eigenschaft verwenden, die ändert, wie Elemente automatisch platziert werden. Wir können `grid-auto-flow: dense` verwenden, das Elemente visuell aus der DOM-Reihenfolge herausnimmt. Wir können auch Elemente mithilfe von linienbasiertem Platzieren oder Grid-Template-Bereichen positionieren, ohne ihre Position im Quellcode zu berücksichtigen.

Die [Spezifikation](https://drafts.csswg.org/css-grid/#order-accessibility) enthält einen Abschnitt, der Neuanordnung und Barrierefreiheit behandelt. In der Einführung zu diesem Abschnitt sind Details darüber enthalten, was die Spezifikation von Browsern erwartet, wenn der Inhalt visuell mithilfe von Grid-Layout neu angeordnet wird.

> Grid-Layout gibt Autoren eine große Macht der Umsortierung über das Dokument. Diese ist jedoch kein Ersatz für die korrekte Reihenfolge der Dokumentquelle. Die Order-Eigenschaft und die Grid-Platzierung beeinflussen nicht die Reihenfolge in nicht-visuellen Medien (wie Sprache). Ebenso beeinflusst das visuelle Umsortieren von Grid-Elementen nicht die Standard-Traversal-Reihenfolge bei sequentiellen Navigationsmodi (wie Durchlaufen von Links, siehe z.B. [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) HTML5).

Wenn Sie Dinge visuell mit Grid-Layout neu ordnen, ändert dies nicht die Reihenfolge, in der die Elemente angeordnet werden, wenn der Inhalt von einem Screenreader oder einem anderen Text-to-Speech-Benutzeragenten vorgelesen wird. Zusätzlich ändert das Neuanordnen nicht die Tab-Reihenfolge. Das bedeutet, dass jemand, der mit der Tastatur navigiert, durch die Links auf Ihrer Seite tappen kann und plötzlich vom Anfang zum Ende des Dokuments springt, weil das nächste in der Warteschlange liegende Element neu angeordnet wurde.

Die Spezifikation warnt Autoren (der CSSWG-Begriff für Webentwickler) davor, diese Neuanordnung durchzuführen.

> Autoren dürfen die Order- und die Grid-Platzierungseigenschaften nur für die visuelle, nicht die logische, Neuanordnung von Inhalten verwenden. Stylesheets, die diese Funktionen zur logischen Neuanordnung verwenden, sind nicht konform.

Was bedeutet das für das Design mit Grid-Layout in der Praxis?

### Visuelle, nicht logische Neuanordnung

Jedes Mal, wenn Sie Dinge mit Grid-Layout – oder mit Flexbox – neu anordnen, führen Sie nur eine _visuelle Neuanordnung_ durch. Die zugrunde liegende Quelle steuert Dinge wie Text-to-Speech und die Tab-Reihenfolge des Dokuments. Sie können sehen, wie das mit einem sehr einfachen Beispiel funktioniert.

In diesem Beispiel habe ich das Grid verwendet, um eine Reihe von Boxen anzuordnen, die Links enthalten. Ich habe die linienbasierten Platzierungseigenschaften verwendet, um Box 1 in der zweiten Reihe des Grids zu positionieren. Visuell erscheint sie nun als das vierte Element in der Liste. Wenn ich jedoch von Link zu Link tappe, beginnt die Tab-Reihenfolge immer noch mit Box 1, da sie zuerst in der Quelle kommt.

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
  <div class="box box1"><a href="">Eins</a></div>
  <div class="box box2"><a href="">Zwei</a></div>
  <div class="box box3"><a href="">Drei</a></div>
  <div class="box box4"><a href="">Vier</a></div>
  <div class="box box5"><a href="">Fünf</a></div>
</div>
```

{{ EmbedLiveSample('Visual_not_logical_re-ordering', '500', '330') }}

Die Spezifikation sagt, dass in diesem Szenario, wenn Box 1 dort wirklich logisch Sinn macht, wir zu unserer Quelle zurückkehren und die Änderung dort vornehmen sollten, anstatt dies mithilfe von Grid-Layout neu anzuordnen. Das ist das, was mit visueller gegenüber logischer Neuanordnung gemeint ist. Logische Anordnung ist wichtig für die Bedeutung und Struktur unseres Dokuments, und wir sollten sicherstellen, dass wir diese Struktur bewahren.

## Wie sollten wir Barrierefreiheit beim Grid-Layout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unseres Inhalts beibehält. Wie sollten wir bei der Entwicklung vorgehen, um sicherzustellen, dass wir die Barrierefreiheit für die unterschiedlichen Benutzer und die Art und Weise, wie sie mit unseren Seiten interagieren, aufrechterhalten?

- Beginnen Sie mit einem strukturierten und barrierefreien Dokument
  - : Ein Grid-Layout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das gewünschte Layout zu erhalten. Daher sollte der Ausgangspunkt Ihrer Seite ein gut strukturiertes und barrierefreies Quelldokument sein. Wie in der CSS-Grid-Layout-Spezifikation vermerkt, wird dies Ihnen oft auch eine gute Struktur für _Ihre kleinsten Bildschirmgeräte bieten_. Wenn ein Benutzer auf einem Mobiltelefon durch ein langes Dokument scrollt, decken sich die Prioritäten für diesen Benutzer oft mit dem, was in der Quelle Priorität haben sollte.
- Erstellen Sie ein reaktionsfähiges und verantwortungsvolles Grid
  - : Mit einem soliden Dokument können Sie beginnen, Ihr Layout hinzuzufügen. Es ist wahrscheinlich, dass Sie [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwenden, um zusätzliche Spalten zu erstellen und Änderungen für verschiedene Bildschirmgrößen und Geräte vorzunehmen. Grid kann hier wirklich sehr nützlich sein, da Elemente, die in der mobilen Quellreihenfolge weniger wichtig sind, beispielsweise in einem Desktop-Layout in eine Seitenleiste verschoben werden können. Der Schlüssel hier ist, stetig zu testen. Ein sehr einfacher Test ist _durchs Dokument zu tabben_. Ergibt diese Reihenfolge noch Sinn? Überprüfen Sie, dass Sie nicht plötzlich in einer seltsamen Weise vom Anfang bis zum Ende des Layouts springen. Wenn ja, wäre das ein Zeichen dafür, dass Sie etwas am Layout anpassen müssen.
- Rückkehr zur Quelle
  - : Sollten Sie während des Designprozesses irgendwann feststellen, dass Sie das Grid verwenden, um die Position eines Elements zu ändern, überlegen Sie, ob Sie nicht auch in Ihr Dokument zurückkehren und eine Änderung an der logischen Reihenfolge vornehmen sollten. Das Schöne an der Verwendung von CSS-Grid-Layout ist, dass Sie in der Lage sein sollten, ein Element in der Quelle zu verschieben, um die logische Reihenfolge zu entsprechen, ohne große Änderungen am Layout vornehmen zu müssen. Dies ist eine enorme Verbesserung gegenüber einem {{cssxref("float")}}-basierten Layout, bei dem die Dokumentquelle eine große Rolle spielt, um Layouts an verschiedenen Breakpoints zu erhalten. Die Verantwortung liegt jedoch bei uns als Entwickler, dass wir daran denken, zu unserer Quelle zurückzukehren und sie zu aktualisieren, um die logische Reihenfolge beizubehalten.

## Grid und die Gefahr der Markup-Reduzierung

Ein weiteres zu beachtendes Problem im CSS-Grid-Layout und in geringerem Maße bei CSS-Flexbox ist die Versuchung, das Markup zu _reduzieren_. Wie wir herausgefunden haben, muss ein Element ein direktes Kind des Grid-Containers sein, um ein Grid-Element zu werden. Wenn Sie also ein {{HTMLElement("ul")}}-Element innerhalb eines Grid-Containers haben, wird _dies_ `ul` zu einem Grid-Element - die Kind-{{HTMLElement("li")}}-Elemente jedoch nicht.

Der [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` wird dieses Problem lösen, sobald er weitreichend implementiert ist. Es wird es ermöglichen, dass das Grid von Grid-Elementen geerbt und durch den Baum weitergegeben wird.

Da der interoperable Support für Subgrid begrenzt ist, besteht eine eindeutige Versuchung, beim Entwickeln einer Site mit CSS-Grid-Layout das Markup zu reduzieren, um semantische Elemente zu entfernen und das Erstellen eines Layouts zu vereinfachen. Ein Beispiel wäre, wo einige Inhalte semantisch als Liste markiert waren, Sie aber entscheiden, eine Reihe von {{HTMLElement("div")}}-Elementen zu verwenden, da Sie so das Element als direktes Kind eines auf `display: grid` gesetzten Containers haben können. Seien Sie sich dieser Versuchung bewusst und finden Sie Wege, Ihr Design zu entwickeln, ohne das Markup zu entfernen. Mit einem gut strukturierten Dokument zu beginnen, ist eine sehr gute Möglichkeit, das Problem zu vermeiden, da Sie sich der Tatsache bewusst sind, dass Sie semantische Elemente entfernen, um das Layout zum Laufen zu bringen, wenn Sie tatsächlich ins Dokument gehen und dies tun müssen!

## Weitere Lektüre

Es gibt nicht viele vorhandene Materialien zur Barrierefreiheit und zum CSS-Grid-Layout. Viele der Probleme sind ähnlich denen, die bei CSS Flexbox auftreten, das ebenfalls Methoden bietet, um Inhalte mit {{cssxref("flex-direction")}} und der {{cssxref("order")}}-Eigenschaft umzusortieren.

Das Konzept der visuellen Darstellung, die der Quellreihenfolge des Dokuments folgt, wird in den _WCAG Techniques for Success Criteria – [Technique C27](https://www.w3.org/TR/WCAG20-TECHS/C27.html)_ detailliert beschrieben.

Als Ansatz, um über diese Probleme nachzudenken, würde ich Ihnen beim Verwenden von CSS-Grid-Layout empfehlen, _[Flexbox & the Keyboard Navigation Disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)_ von Léonie Watson zu lesen. Auch [das Video von Léonies Präsentation von der ffconf](https://www.youtube.com/watch?v=spxT2CmHoPk) ist hilfreich, um mehr darüber zu erfahren, wie Screenreader mit der visuellen Darstellung von Dingen in CSS arbeiten. Adrian Roselli hat ebenfalls über die [Tab-Reihenfolge in verschiedenen Browsern](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) geschrieben – obwohl dies vor der vollständigen Implementierung von Grid-Support in Firefox war.
