---
title: Rasterlayout und Barrierefreiheit
slug: Web/CSS/Guides/Grid_layout/Accessibility
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

HTML ist die Inhaltsebene einer Website, auf der wir semantische, gut strukturierte Dokumente erstellen. CSS ist die Präsentationsebene; wir setzen CSS ein, um unter anderem das gewünschte Layout für unsere Inhalte zu erstellen. Zwei-dimensionale Rasterstrukturen werden mithilfe des [CSS-Rasterlayouts](/de/docs/Web/CSS/Guides/Grid_layout) definiert.

Obwohl modernes HTML und CSS darauf ausgelegt sind, die Erstellung von semantischen, zugänglichen Inhalten und Designs zu ermöglichen, gibt es Möglichkeiten, mit Rastern Barrierefreiheitsprobleme zu _verursachen_. Dieser Artikel untersucht die potenziellen Probleme, die auftreten können, und wie man sie vermeidet.

## Neuanordnung von Inhalten im CSS-Rasterlayout

Wir haben in diesen Leitfäden bereits gesehen, dass CSS-Rasterlayouts uns die Möglichkeit geben, unsere Seiteninhalte neu zu ordnen, indem wir Elemente mithilfe der [linienbasierten Platzierung von Rastervorlagenbereichen](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) positionieren. Diese Platzierung kann ohne Berücksichtigung der Position des Elements in der Quelle erfolgen. Es gibt auch die {{cssxref("order")}}-Eigenschaft, die ändern kann, wie Elemente automatisch platziert werden. Die {{cssxref("grid-auto-flow")}}-Eigenschaft hat einen `dense` Wert, der Elemente visuell aus der DOM-Reihenfolge nehmen kann.

Die CSS-Rasterspezifikation enthält einen Abschnitt über [Neuanordnung und Barrierefreiheit](https://drafts.csswg.org/css-grid/#order-accessibility). Die Einführung in diesen Abschnitt erläutert, was Browser tun sollten, wenn Inhalte visuell unter Verwendung von Rasterlayout neu angeordnet werden:

> Das Rasterlayout gibt Autoren große Macht, das Dokument neu zu arrangieren. Diese sind jedoch kein Ersatz für die korrekte Anordnung der Dokumentquelle. Die `order`-Eigenschaft und die Rasterplatzierung beeinflussen die Reihenfolge in nicht-visuellen Medien (wie Sprache) nicht. Ebenso beeinflusst die visuelle Neuanordnung von Rasterelementen nicht die Standarddurchlaufreihenfolge von sequentiellen Navigationsmodi (wie das Durchspringen von Links, siehe z.B. [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Wenn Sie Dinge visuell mit dem Rasterlayout neu anordnen, ändert dies nicht, wie die Elemente angeordnet sind, wenn die Inhalte von einem Bildschirmleser oder einem anderen Text-zu-Sprache-Benutzeragenten vorgelesen werden. Darüber hinaus wird die Neuanordnung die Tab-Reihenfolge nicht ändern. Das bedeutet, dass jemand, der mit der Tastatur navigiert, durch die Links auf Ihrer Seite springen könnte und sich plötzlich vom oberen zum unteren Teil des Dokuments wiederfindet, da ein neu angeordnetes Element als nächstes in der Tab-Reihenfolge kommt.

Die Spezifikation warnt die Autoren (der Begriff der CSSWG für Webentwickler) davor, diese Neuanordnung vorzunehmen.

> Autoren müssen die `order`- und Rasterplatzierungs-Eigenschaften nur für visuelle, nicht logische Neuanordnung von Inhalten verwenden. Stylesheets, die diese Funktionen zur Durchführung logischer Neuanordnungen verwenden, sind nicht konform.

Was bedeutet das für das Entwerfen mit dem Rasterlayout in der Praxis?

### Visuelle, nicht logische Neuanordnung

Jedes Mal, wenn Sie Dinge mit dem Rasterlayout - oder mit Flexbox - neu anordnen, führen Sie nur eine _visuelle Neuanordnung_ durch. Die zugrunde liegende Quelle steuert Dinge wie Text zu Sprache und die Tab-Reihenfolge des Dokuments. Wir können sehen, wie dies mit einem Beispiel funktioniert.

In diesem Beispiel haben wir ein Raster mit fünf Elementen, die jeweils einen Link enthalten. Die Elemente werden mit linienbasierten Platzierungseigenschaften platziert. Wir haben Box 1 in die zweite Zeile des Rasters positioniert, so dass sie visuell als viertes Element in der Liste erscheint. Wenn wir mit der Tabulatortaste durch die Links navigieren, beginnt die Tab-Reihenfolge immer noch mit Box 1, da sie zuerst in der Quelle kommt.

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

{{ EmbedLiveSample('Visual_not_logical_re-ordering', '500', '230') }}

Die Spezifikation besagt, dass in diesem Szenario, wenn Box 1 wirklich an dieser Position sinnvoll ist, wir zu unserer HTML-Quelle zurückkehren und die Änderung dort vornehmen sollten, anstatt sie mit dem Rasterlayout neu zu ordnen. Das ist das, was mit visueller versus logischer Neuanordnung gemeint ist; logische Anordnung ist wichtig für die Bedeutung und Struktur unseres Dokuments, und wir sollten sicherstellen, dass wir diese Struktur bewahren.

## Wie sollten wir Barrierefreiheit für Rasterlayout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unseres Inhalts beibehält. Wie sollten wir unseren Entwicklungsprozess angehen, um sicherzustellen, dass wir Barrierefreiheit für die verschiedenen Benutzer und die Art und Weise, wie sie mit unseren Seiten interagieren, beibehalten?

- Beginnen Sie mit einem strukturierten und zugänglichen Dokument
  - : Ein Rasterlayout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das gewünschte Layout zu erhalten. Daher sollte der Ausgangspunkt Ihrer Seite ein gut strukturiertes und zugängliches Ausgangsdokument sein. Dies gibt Ihnen oft eine gute Struktur für _Ihre kleinsten Bildschirmgeräte_. Wenn ein Benutzer durch ein langes Dokument auf einem Mobilgerät scrollt, stimmen die Prioritäten für diesen Benutzer ganz oft mit dem überein, was in der Quelle Priorität haben sollte.
- Erstellen Sie ein anpassungsfähiges und verantwortliches Raster
  - : Mit einer soliden Dokumentstruktur, die in Ihrem HTML definiert ist, können Sie CSS verwenden, um Ihr Layout oben hinzuzufügen. Sie werden wahrscheinlich [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) verwenden, um Änderungen für verschiedene Bildschirmgrößen und Geräte vorzunehmen, einschließlich der Erstellung zusätzlicher Spalten für größere Bildschirme. Raster kann hier sehr nützlich sein. Beispielsweise können Elemente, die in der mobilen Quellreihenfolge depriorisiert sind, in einem Desktop-Layout in eine Seitenleiste verschoben werden. Der Schlüssel hier ist, weiterhin zu testen. Ein guter Test ist es, _durch das Dokument zu tabben_. Ergibt die Reihenfolge immer noch Sinn? Überprüfen Sie, ob Sie nicht auf seltsame Weise vom oberen zum unteren Teil des Layouts springen. Das ist ein Zeichen dafür, dass Sie etwas am Layout adressieren müssen.
- Rückkehr zur Quelle
  - : Wenn Sie zu irgendeinem Zeitpunkt im Designprozess feststellen, dass Sie ein Raster verwenden, um die Position eines Elements zu verlagern, überlegen Sie, ob Sie zu Ihrem Dokument zurückkehren und auch eine Änderung in der logischen Ordnung vornehmen sollten. Das Schöne an der Verwendung von CSS-Rasterlayout ist, dass Sie in der Lage sein sollten, ein Element in der Quelle zu verschieben, um die logische Ordnung zu erfüllen, ohne große Änderungen an Ihrem Layout vornehmen zu müssen. Die Verantwortung liegt bei uns Entwicklern, daran zu denken, zu unserer Quelle zurückzukehren und sie zu aktualisieren, um die logische Reihenfolge zu wahren.

## Raster und die Gefahr der Ausflachung von Markup

Ein weiteres Problem, das man sich beim CSS-Rasterlayout und in geringerem Maße bei CSS-Flexbox bewusst sein sollte, ist die Versuchung, Markup zu _verflachen_. Wie wir entdeckt haben, muss ein Element, um ein Rasterelement zu werden, ein direktes Kind des Rastercontainers sein. Daher, wenn Sie ein {{HTMLElement("ul")}}-Element in einem Rastercontainer haben, wird _dieser_ `ul` zu einem Rasterelement – die kindlichen {{HTMLElement("li")}}-Elemente nicht.

Der [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` löst dieses Problem. Er ermöglicht es, dass das Raster von Rasterelementen geerbt und den Baum hinuntergegeben wird. Alternativ dazu führt die Einstellung von `display: contents` auf ein Rasterelement dazu, dass die Kinder des Elements zu Rasterelementen werden. Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erzeugen würde, und die Boxen der Kinderelemente erscheinen, als ob sie eine Ebene nach oben gestiegen wären.

Der Beginn mit einem gut strukturierten Dokument ist eine sehr gute Möglichkeit, Barrierefreiheitsprobleme zu vermeiden.

## Siehe auch

- [Flexbox & die Tastaturnavigationen-Trennung](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) und [(Human After All): Accessibility Remix Video](https://www.youtube.com/watch?v=spxT2CmHoPk) via Léonie Watson (2016)
- [Raster, Neuanordnung von Inhalten und Barrierefreiheit](https://css-tricks.com/grid-content-re-ordering-and-accessibility/) via CSS-tricks (2019)
- [`display: contents` ist kein CSS-Reset](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html) via Adrian Roselli (2024)
