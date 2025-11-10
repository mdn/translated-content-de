---
title: Grid-Layout und Barrierefreiheit
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

HTML ist die Inhaltsebene einer Website, auf der wir semantische, gut strukturierte Dokumente erstellen. CSS ist die Präsentationsebene; wir verwenden CSS, um unter anderem das gewünschte Layout für unseren Inhalt zu gestalten. Zweidimensionale Gitterstrukturen werden mit dem [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert.

Obwohl modernes HTML und CSS darauf ausgelegt sind, die Erstellung von semantischen und zugänglichen Inhalten und Designs zu ermöglichen, gibt es Möglichkeiten, Barrierefreiheitsprobleme mit Grids zu _erstellen_. Dieser Artikel betrachtet die potenziellen Probleme, die auftreten können, und wie man sie vermeidet.

## Neuanordnung von Inhalten im CSS Grid Layout

Wir haben bereits in diesen Leitfäden gesehen, dass das CSS Grid Layout uns die Möglichkeit bietet, unsere Seiteninhalte neu anzuordnen, indem wir Elemente mit [linienbasierter Platzierung von Grid-Template-Bereichen](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) positionieren. Diese Platzierung kann erfolgen, ohne den Standort des Elements in der Quelle zu berücksichtigen. Es gibt auch die {{cssxref("order")}}-Eigenschaft, die ändern kann, wie Elemente automatisch platziert werden. Die {{cssxref("grid-auto-flow")}}-Eigenschaft hat einen `dense`-Wert, der Elemente visuell aus der DOM-Reihenfolge entfernen kann.

Die CSS Grid Layout-Spezifikation enthält einen Abschnitt über [Neuanordnung und Barrierefreiheit](https://drafts.csswg.org/css-grid/#order-accessibility). Die Einführung zu diesem Abschnitt beschreibt, was Browser tun sollten, wenn Inhalte visuell mit Grid Layout neu angeordnet werden:

> Das Grid-Layout gibt Autoren große Freiheiten zur Umordnung des Dokuments. Diese sind jedoch kein Ersatz für die korrekte Anordnung der Dokumentquelle. Die `order`-Eigenschaft und die Grid-Platzierung beeinflussen nicht die Reihenfolge in nicht-visuellen Medien (wie Sprache). Ebenso beeinflusst die visuelle Umordnung von Grid-Elementen nicht die Standarddurchlaufreihenfolge von sequenziellen Navigationsmodi (wie das Durchlaufen von Links, siehe z. B. [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Wenn Sie Dinge visuell mithilfe des Grid-Layouts neu anordnen, ändert dies nicht, wie die Elemente geordnet sind, wenn der Inhalt von einem Screenreader oder anderen Text-zu-Sprache-Benutzeragenten vorgelesen wird. Zusätzlich ändert die Neuanordnung nicht die Tab-Reihenfolge. Das bedeutet, dass jemand, der mit der Tastatur navigiert, möglicherweise plötzlich vom Anfang zum Ende des Dokuments springt, weil ein umgeordnetes Element als Nächstes in der Tab-Reihenfolge kommt.

Die Spezifikation warnt Autoren (der CSSWG-Begriff für Webentwickler), diese Neuanordnung nicht zu machen.

> Autoren müssen die `order`- und Grid-Platzierungseigenschaften nur für die visuelle, nicht logische Neuanordnung von Inhalten verwenden. Stylesheets, die diese Funktionen zur logischen Neuanordnung verwenden, sind nicht konform.

Was bedeutet das für das Design mit dem Grid-Layout in der Praxis?

### Visuelle, nicht logische Neuanordnung

Jedes Mal, wenn Sie Dinge mit Grid-Layout – oder mit Flexbox – neu anordnen, führen Sie nur eine _visuelle Neuanordnung_ durch. Die zugrunde liegende Quelle steuert Dinge wie Text-zu-Sprache und die Tab-Reihenfolge des Dokuments. Wir können sehen, wie das mit einem Beispiel funktioniert.

In diesem Beispiel haben wir ein Grid, das fünf Elemente enthält, von denen jedes einen Link enthält. Die Elemente sind mit linienbasierten Platzierungseigenschaften positioniert. Wir haben Box 1 in der zweiten Zeile des Grids positioniert, sodass sie visuell als viertes Element in der Liste erscheint. Navigieren wir durch die Links mit der Tab-Taste, beginnt die Tab-Reihenfolge immer noch mit Box 1, da sie zuerst in der Quelle kommt.

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

Die Spezifikation besagt, dass in diesem Szenario, wenn Box 1 an dieser Position wirklich logisch sinnvoll ist, wir zu unserer HTML-Quelle zurückgehen und die Änderung dort machen sollten, anstatt sie mit Grid-Layout neu zu ordnen. Dies ist gemeint mit visueller versus logischer Neuanordnung; logische Ordnung ist wichtig für die Bedeutung und Struktur unseres Dokuments und wir sollten sicherstellen, dass wir diese Struktur bewahren.

## Wie sollten wir die Barrierefreiheit beim Grid-Layout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unserer Inhalte beibehält. Wie sollten wir unsere Entwicklung angehen, um sicherzustellen, dass wir die Barrierefreiheit für die verschiedenen Benutzer und die Arten, wie sie mit unseren Seiten interagieren, wahren?

- Beginnen Sie mit einem strukturierten und zugänglichen Dokument
  - : Ein Grid-Layout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das gewünschte Layout zu erhalten. Daher sollte der Ausgangspunkt Ihrer Seite ein gut strukturiertes und zugängliches Quelldokument sein. Dies gibt Ihnen oft auch eine gute Struktur für _Ihre kleinsten Bildschirmgeräte_. Wenn ein Benutzer auf einem Mobilgerät durch ein langes Dokument scrollt, stimmen die Prioritäten für diesen Benutzer oft mit denen überein, die in der Quelle eine Priorität sein sollten.
- Erstellen Sie ein responsives und verantwortungsvolles Grid
  - : Mit einer soliden Dokumentstruktur, die in Ihrem HTML definiert ist, können Sie CSS verwenden, um Ihr Layout von oben hinzuzufügen. Sie werden wahrscheinlich [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) verwenden, um Änderungen für verschiedene Bildschirmgrößen und Geräte vorzunehmen, einschließlich der Erstellung zusätzlicher Spalten für größere Bildschirme. Grid kann hier sehr nützlich sein. Zum Beispiel können Elemente, die in der mobilen Quellreihenfolge entpriorisiert sind, in ein Seitenbereich-Layout auf dem Desktop verschoben werden. Der Schlüssel hier ist, kontinuierlich zu testen. Ein guter Test ist, _durch das Dokument zu tabben_. Ergibt die Reihenfolge immer noch Sinn? Überprüfen Sie, ob Sie nicht auf seltsame Weise vom Anfang zum Ende des Layouts springen. Das ist ein Zeichen dafür, dass Sie etwas am Layout ändern müssen.
- Zurück zur Quelle
  - : Wenn Sie sich während des Designprozesses jemals dabei ertappen, Grid zu verwenden, um die Position eines Elements zu verschieben, überlegen Sie, ob Sie zu Ihrem Dokument zurückkehren und auch eine Änderung der logischen Ordnung vornehmen sollten. Das Schöne an der Verwendung des CSS Grid Layouts ist, dass Sie ein Element in der Quelle verschieben können, um die logische Reihenfolge zu erfüllen, ohne große Änderungen an Ihrem Layout vornehmen zu müssen. Es liegt an uns als Entwickler, daran zu denken, zu unserer Quelle zurückzukehren und sie zu aktualisieren, um die logische Reihenfolge beizubehalten.

## Grid und die Gefahr des Markup-Flachens

Ein weiteres Problem, das im CSS Grid Layout (und in geringerem Maße im CSS Flexbox) auftreten kann, ist die Versuchung, das Markup zu _verflachen_. Wie wir festgestellt haben, muss ein Element ein direktes Kind des Grid-Containers sein, um ein Grid-Item zu werden. Daher wird dort, wo Sie ein {{HTMLElement("ul")}}-Element in einem Grid-Container haben, _dieses_ `ul` zu einem Grid-Item – die Kind-{{HTMLElement("li")}}-Elemente nicht.

Der [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` löst dieses Problem. Er ermöglicht es, dass das Grid von Grid-Items geerbt und an den Baum weitergegeben wird. Alternativ führt das Festlegen von `display: contents` auf einem Grid-Item dazu, dass die Kinder des Elements zu Grid-Items werden. Wenn Sie ein Element so festlegen, dass es `display: contents` hat, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der Kindelemente erscheinen, als ob sie eine Ebene höher gestiegen wären.

Mit einem gut strukturierten Dokument zu beginnen, ist eine sehr gute Möglichkeit, Barrierefreiheitsprobleme zu vermeiden.

## Siehe auch

- [Flexbox und die Diskrepanz der Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) und [(Human After All): Accessibility Remix Video](https://www.youtube.com/watch?v=spxT2CmHoPk) von Léonie Watson (2016)
- [Grid, Content-Neuanordnung und Barrierefreiheit](https://css-tricks.com/grid-content-re-ordering-and-accessibility/) via CSS-tricks (2019)
- [`display: contents` ist kein CSS-Reset](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html) von Adrian Roselli (2024)
