---
title: Rasterlayout und Barrierefreiheit
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Diejenigen von uns, die seit mehr Jahren in der Webentwicklung tätig sind, als wir zugeben möchten, könnten denken, dass das CSS-Rasterlayout ein wenig wie die Verwendung von "Tabellen für das Layout" ist. In den frühen Tagen des Webdesigns haben wir das Seitenlayout mit HTML-Tabellen erstellt, dann unser Design in die Zellen dieser Tabellen aufgeteilt, um ein Layout zu erstellen. Dies hatte einige Vorteile gegenüber dem später populären "CSS Positioning", da wir die Ausrichtung und vollhöhe Spalten, die von der Tabellenanzeige geboten wurden, nutzen konnten. Der größte Nachteil war jedoch, dass das Design an das Markup gebunden war und oft Barrierefreiheitsprobleme verursachte. Um das Design in der Tabelle zu layouten, haben wir oft Inhalte in einer Weise aufgeteilt, die beim Vorlesen durch einen Screenreader keinen Sinn ergab.

Beim Übergang zu CSS sprachen wir häufig davon, dass CSS für Layout eine Trennung von Inhalt und Markup sowie Präsentation ermöglicht. Das ultimative Ziel war, dass wir ein semantisch und gut strukturiertes Dokument erstellen können, dem CSS zur Erstellung des gewünschten Layouts hinzugefügt wird. Websites wie der [CSS Zen Garden](https://www.csszengarden.com/) zeigten diese Fähigkeit. Der CSS Zen Garden forderte uns heraus, identisches Markup zu nehmen und mit CSS ein einzigartiges Design zu erstellen.

Das [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) hat nicht dieselben Probleme wie Tabellen, da unsere Rasterstruktur in CSS und nicht im Markup definiert ist. Wenn wir ein Element hinzufügen müssen, können wir etwas mit keiner semantischen Bedeutung verwenden. Auf dem Papier hilft uns das Raster, dieses Versprechen eines von Markup getrennten Inhalts zu erfüllen. Ist es jedoch möglich, mit dieser Idee zu weit zu gehen? Könnte es möglich sein, dass wir durch die Verwendung von Rastern ein Barrierefreiheitsproblem _schaffen_?

## Neuordnung von Inhalten im CSS-Rasterlayout

In diesen Leitfäden haben wir bereits gesehen, dass uns das Raster die Möglichkeit bietet, den Inhalt unserer Seite auf verschiedene Weisen neu zu ordnen. Wir können die {{cssxref("order")}}-Eigenschaft verwenden, die ändert, wie sich Elemente automatisch platzieren. Wir können `grid-auto-flow: dense` verwenden, wodurch Elemente visuell aus der DOM-Reihenfolge genommen werden. Wir können auch Elemente mithilfe der linienbasierten Platzierung von Rastervorlagenbereichen positionieren, ohne ihren Standort in der Quelle zu berücksichtigen.

Die [Spezifikation](https://drafts.csswg.org/css-grid/#order-accessibility) enthält einen Abschnitt, der sich mit der Neuordnung und Barrierefreiheit befasst. Im Einführungsabschnitt wird beschrieben, was die Spezifikation von Browsern erwartet, wenn der Inhalt mit dem Rasterlayout visuell neu geordnet wird.

> Das Rasterlayout gibt den Autoren große Mächte zur Umgestaltung des Dokuments. Diese sind jedoch kein Ersatz für die korrekte Reihenfolge der Dokumentquelle. Die `order`-Eigenschaft und die Rasterplatzierung beeinflussen die Reihenfolge in nichtvisuellen Medien (wie Sprache) nicht. Ebenso beeinflusst das visuelle Umordnen von Rasterelementen nicht die Standard-Durchlaufreihenfolge von sequentiellen Navigationsmodi (wie das Durchspringen von Links, siehe z.B. [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) HTML5).

Wenn Sie Dinge visuell mit einem Rasterlayout neu ordnen, ändert dies nicht die Reihenfolge der Elemente, wenn der Inhalt von einem Screenreader oder einem anderen Text-zu-Sprache-Benutzeragenten vorgelesen wird. Darüber hinaus wird die Tab-Reihenfolge durch die Neuordnung nicht geändert. Das bedeutet, dass jemand, der mit der Tastatur navigiert, durch die Links Ihrer Website tabbt und plötzlich feststellen kann, dass er aufgrund eines neu geordneten Elements von oben nach unten im Dokument springt.

Die Spezifikation warnt Autoren (der CSSWG-Begriff für Webentwickler) davor, diese Neuordnung vorzunehmen.

> Autoren müssen die `order`- und Rasterplatzierungseigenschaften nur für die visuelle, nicht die logische Neuordnung von Inhalten verwenden. Stylesheets, die diese Funktionen zur logischen Neuordnung verwenden, sind nicht konform.

Was bedeutet das für die Gestaltung mit Rasterlayout in der Praxis?

### Visuelle, nicht logische Neuordnung

Jedes Mal, wenn Sie Dinge mit einem Rasterlayout – oder mit Flexbox – neu ordnen, führen Sie nur eine _visuelle Neuordnung_ durch. Die zugrunde liegende Quelle ist das, was Dinge wie Text-zu-Sprache und die Tab-Reihenfolge des Dokuments steuert. Sie können sehen, wie dies mit einem sehr einfachen Beispiel funktioniert.

In diesem Beispiel habe ich ein Raster verwendet, um eine Reihe von Boxen mit Links zu gestalten. Ich habe die linienbasierten Platzierungseigenschaften verwendet, um Box 1 in der zweiten Zeile des Rasters zu positionieren. Visuell erscheint es nun als viertes Element in der Liste. Wenn ich jedoch von Link zu Link tabbe, beginnt die Tab-Reihenfolge immer noch mit Box 1, da es zuerst in der Quelle kommt.

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

Die Spezifikation sagt, dass wir in diesem Szenario, wenn Box 1 an dieser Position wirklich sinnvoll ist, zu unserer Quelle zurückgehen und die Änderung dort vornehmen sollten, anstatt sie mit dem Rasterlayout neu zu ordnen. Dies ist gemeint mit visueller versus logischer Neuordnung. Die logische Reihenfolge ist wichtig für die Bedeutung und Struktur unseres Dokuments und wir sollten sicherstellen, dass wir diese Struktur erhalten.

## Wie sollten wir Barrierefreiheit für das Rasterlayout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unserer Inhalte beibehält. Wie sollten wir unsere Entwicklung angehen, um sicherzustellen, dass wir die Barrierefreiheit für die verschiedenen Benutzer und die Arten, wie sie mit unseren Seiten interagieren, sicherstellen?

- Beginnen Sie mit einem strukturierten und zugänglichen Dokument
  - : Ein Rasterlayout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das gewünschte Layout zu erhalten. Daher sollte der Ausgangspunkt Ihrer Seite ein gut strukturiertes und barrierefreies Quelldokument sein. Wie in der CSS-Rasterlayout-Spezifikation vermerkt, wird Ihnen dies oft eine gute Struktur für _Ihre kleinsten Bildschirmgeräte geben_. Wenn ein Benutzer auf einem mobilen Gerät durch ein langes Dokument scrollt, entsprechen die Prioritäten für diesen Benutzer oft dem, was eine Priorität in der Quelle sein sollte.
- Erstellen Sie ein responsives und verantwortungsvolles Raster
  - : Mit einem soliden Dokument können Sie beginnen, Ihr Layout hinzuzufügen. Wahrscheinlich verwenden Sie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), um zusätzliche Spalten zu erstellen und Änderungen für unterschiedliche Bildschirmgrößen und Geräte vorzunehmen. Raster kann hier sehr nützlich sein, Elemente, die in der mobilen Quellreihenfolge weniger wichtig sind, können z.B. in einem Desktop-Layout in eine Seitenleiste verschoben werden. Der Schlüssel hier ist, kontinuierlich zu testen. Ein sehr einfacher Test ist, _durch das Dokument zu tabben_. Macht diese Reihenfolge noch Sinn? Überprüfen Sie, ob Sie nicht auf seltsame Weise von oben nach unten im Layout springen. Wenn ja, wäre das ein Zeichen dafür, dass Sie etwas am Layout verändern müssen.
- Rückkehr zur Quelle
  - : Wenn Sie zu irgendeinem Zeitpunkt im Designprozess feststellen, dass Sie ein Raster verwenden, um die Position eines Elements zu verlegen, überlegen Sie, ob Sie zu Ihrem Dokument zurückkehren und die logische Reihenfolge ebenfalls ändern sollten. Das Schöne an der Verwendung des CSS-Rasterlayouts ist, dass Sie ein Element in der Quelle verschieben können, um der logischen Reihenfolge zu entsprechen, ohne große Änderungen an Ihrem Layout vornehmen zu müssen. Dies ist eine große Verbesserung gegenüber einem {{cssxref("float")}}-basierten Layout, bei dem die Dokumentquelle sehr wichtig ist, um Layouts bei verschiedenen Breakpoints zu erhalten. Die Verantwortung liegt jedoch bei uns als Entwickler, daran zu denken, zu unserer Quelle zurückzukehren und sie zu aktualisieren, um die logische Reihenfolge zu erhalten.

## Raster und die Gefahr der Markup-Glättung

Ein weiteres Problem, das beim CSS-Rasterlayout und in geringerem Maße bei CSS-Flexbox zu beachten ist, ist die Versuchung, das Markup zu _glätten_. Wie wir festgestellt haben, muss ein Element, damit es ein Rasterelement wird, ein direktes Kind des Rastercontainers sein. Wenn Sie also ein {{HTMLElement("ul")}}-Element in einem Rastercontainer haben, _wird dieses_ `ul` zu einem Rasterelement – die Kindelemente {{HTMLElement("li")}} werden es nicht.

Der [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` wird dieses Problem lösen, sobald es weitreichend implementiert ist. Es wird ermöglichen, dass das Raster von Rasterelementen geerbt und im Baum weitergegeben wird.

Da der interoperable Support für Subgrid begrenzt ist, besteht eine deutliche Versuchung, beim Entwickeln einer Website mit CSS-Rasterlayout, das Markup zu glätten, um semantische Elemente zu entfernen, um das Erstellen eines Layouts zu vereinfachen. Ein Beispiel wäre, wenn einige Inhalte semantisch als Liste markiert sind, Sie sich aber entscheiden, stattdessen eine Reihe von {{HTMLElement("div")}}-Elementen zu verwenden, da Sie dann das Element als direktes Kind eines Containers haben können, dessen Anzeige auf `display: grid` gesetzt ist. Seien Sie sich dieser Versuchung bewusst und finden Sie Wege, Ihr Design zu entwickeln, ohne das Markup zu entfernen. Mit einem gut strukturierten Dokument zu beginnen, ist eine sehr gute Möglichkeit, das Problem zu vermeiden, da Sie sich bewusst sind, dass Sie semantische Elemente entfernen, um das Layout zum Funktionieren zu bringen, wenn Sie tatsächlich in das Dokument gehen und dies tun müssen!

## Weiterführende Literatur

Es gibt nicht viele bestehende Materialien zur Barrierefreiheit und dem CSS-Rasterlayout. Viele der Probleme ähneln denen, die im Zusammenhang mit CSS-Flexbox aufgeworfen wurden, das ebenfalls Methoden zur Neuordnung von Inhalten mit {{cssxref("flex-direction")}} und der {{cssxref("order")}}-Eigenschaft bietet.

Das Konzept der visuellen Darstellung, die der Dokumentquellenreihenfolge folgt, wird in den _WCAG-Techniken für Erfolgskriterien – [Technik C27](https://www.w3.org/TR/WCAG20-TECHS/C27.html)_ ausführlich behandelt.

Als Einstieg in diese Themen empfehle ich, beim Verwenden des CSS-Rasterlayouts _[Flexbox & the Keyboard Navigation Disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)_ von Léonie Watson zu lesen. Auch [das Video von Léonies Präsentation von der ffconf](https://www.youtube.com/watch?v=spxT2CmHoPk) ist hilfreich, um mehr darüber zu verstehen, wie Screenreader mit der visuellen Darstellung von Dingen in CSS arbeiten. Adrian Roselli hat auch über die [Tab-Reihenfolge in verschiedenen Browsern](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) geschrieben – obwohl dies vor der vollständigen Implementierung der Rasterunterstützung in Firefox war.
