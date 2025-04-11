---
title: Grid-Layout und Barrierefreiheit
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

HTML ist die Inhaltsschicht einer Website, in der wir semantische, gut strukturierte Dokumente erstellen. CSS ist die Darstellungsschicht; wir wenden CSS an, um unter anderem das gewünschte Layout für unsere Inhalte zu erstellen. Zweidimensionale Rasterstrukturen werden mithilfe des [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) definiert.

Obwohl modernes HTML und CSS entwickelt wurden, um die Erstellung semantischer, zugänglicher Inhalte und Designs zu ermöglichen, gibt es Möglichkeiten, mit Grids Barrierefreiheitsprobleme zu _erzeugen_. Dieser Artikel beleuchtet die potenziellen Probleme, die auftreten können, und wie man sie vermeidet.

## Neuanordnung von Inhalten im CSS Grid-Layout

In diesen Leitfäden haben wir bereits gesehen, dass das CSS Grid-Layout uns die Möglichkeit gibt, durch die Positionierung von Elementen mithilfe der [linienbasierten Platzierung von Grid Templates](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) die Seiteninhalte neu zu ordnen. Diese Platzierung kann erfolgen, ohne den Standort des Elements in der Quelle zu berücksichtigen. Es gibt auch die {{cssxref("order")}}-Eigenschaft, die beeinflussen kann, wie Elemente automatisch platziert werden. Die {{cssxref("grid-auto-flow")}}-Eigenschaft hat einen `dense`-Wert, der Elemente visuell aus der DOM-Reihenfolge herausnehmen kann.

Die CSS Grid-Layout-Spezifikation enthält einen Abschnitt über [Umordnung und Barrierefreiheit](https://drafts.csswg.org/css-grid/#order-accessibility). Die Einführung zu diesem Abschnitt beschreibt, was Browser tun sollten, wenn Inhalte mithilfe des Grid-Layouts visuell neu geordnet werden:

> Grid-Layout gibt Autoren große Umgestaltungsbefugnisse über das Dokument. Diese sind jedoch kein Ersatz für die korrekte Reihenfolge der Dokumentquelle. Die `order`-Eigenschaft und die Grid-Platzierung beeinflussen nicht die Reihenfolge in nicht-visuellen Medien (wie Sprache). Ebenso beeinflusst die visuelle Neuanordnung der Grid-Elemente nicht die Standard-Traversalreihenfolge von sequentiellen Navigationsmodi (wie beim Durchlaufen von Links, siehe z.B. [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Wenn Sie Dinge visuell mit dem Grid-Layout neu anordnen, wird dies nicht ändern, wie die Elemente geordnet sind, wenn der Inhalt von einem Screenreader oder einem anderen Text-zu-Sprache-Benutzeragenten vorgelesen wird. Darüber hinaus wird die Neuanordnung nicht die Tab-Reihenfolge ändern. Dies bedeutet, dass jemand, der mit der Tastatur navigiert, durch die Links auf Ihrer Seite tabben und plötzlich vom Anfang bis zum Ende des Dokuments springen könnte, weil ein neu angeordnetes Element als nächstes in der Tab-Reihenfolge steht.

Die Spezifikation warnt Autoren (der Begriff der CSSWG für Webentwickler), dies nicht zu tun.

> Autoren müssen `order` und die Grid-Platzierungseigenschaften nur für die visuelle, nicht die logische, Neuanordnung von Inhalten verwenden. Stylesheets, die diese Funktionen zur Durchführung von logischen Neuanordnungen verwenden, sind nicht konform.

Was bedeutet das für das Design mit Grid-Layout in der Praxis?

### Visuelle, nicht logische Neuanordnung

Immer wenn Sie Dinge mit dem Grid-Layout – oder mit Flexbox – neu ordnen, führen Sie nur eine _visuelle Neuanordnung_ durch. Die zugrunde liegende Quelle steuert Dinge wie Text-to-Speech und die Tab-Reihenfolge des Dokuments. Wir können sehen, wie das mit einem Beispiel funktioniert.

In diesem Beispiel haben wir ein Grid, das fünf Elemente enthält, von denen jedes einen Link enthält. Die Elemente sind mit linienbasierten Platzierungseigenschaften platziert. Wir haben Box 1 in der zweiten Reihe des Grids positioniert, sodass es visuell als viertes Element in der Liste erscheint. Wenn wir mit der Tab-Taste durch die Links navigieren, beginnt die Tab-Reihenfolge immer noch mit Box 1, da sie in der Quelle zuerst kommt.

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

Die Spezifikation besagt, dass wir in diesem Szenario, wenn Box 1 logisch an dieser Stelle Sinn macht, zu unserer HTML-Quelle zurückkehren und die Änderung dort vornehmen sollten, anstatt das Grid-Layout zur Neuanordnung zu verwenden. Das ist gemeint mit visueller versus logischer Neuanordnung; die logische Reihenfolge ist wichtig für die Bedeutung und Struktur unseres Dokuments, und wir sollten sicherstellen, dass wir diese Struktur beibehalten.

## Wie sollten wir Barrierefreiheit für Grid-Layout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unserer Inhalte aufrechterhält. Wie sollten wir unsere Entwicklung angehen, um sicherzustellen, dass wir die Barrierefreiheit für die unterschiedlichen Benutzer und die Art und Weise, wie sie mit unseren Seiten interagieren, gewährleisten?

- Beginnen Sie mit einem strukturierten und zugänglichen Dokument
  - : Ein Grid-Layout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das gewünschte Layout zu erhalten. Daher sollte der Ausgangspunkt Ihrer Seite ein gut strukturiertes und zugängliches Quelldokument sein. Dies wird häufig auch für Ihre kleinsten Bildschirme eine gute Struktur ergeben. Wenn ein Benutzer auf einem mobilen Gerät durch ein langes Dokument scrollt, stimmen die Prioritäten für diesen Benutzer häufig mit dem überein, was in der Quelle Priorität haben sollte.
- Erstellen Sie ein responsives und verantwortungsvolles Grid
  - : Mit einer soliden Dokumentstruktur, die in Ihrem HTML definiert ist, können Sie CSS verwenden, um Ihr Layout darauf anzuwenden. Sie werden wahrscheinlich [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) verwenden, um Änderungen für verschiedene Bildschirmgrößen und Geräte vorzunehmen, einschließlich der Erstellung zusätzlicher Spalten für größere Bildschirme. Grid kann hier sehr nützlich sein. Beispielsweise können Elemente, die in der mobilen Quellreihenfolge weniger priorisiert werden, in ein Sidebar-Layout auf einem Desktop verschoben werden. Der Schlüssel hier ist, kontinuierlich zu testen. Ein guter Test ist das _Tabben über das Dokument_. Ist die Reihenfolge immer noch sinnvoll? Achten Sie darauf, dass Sie nicht in einer merkwürdigen Weise von oben nach unten durch das Layout springen. Das ist ein Anzeichen dafür, dass Sie etwas am Layout anpassen müssen.
- Rückkehr zur Quelle
  - : Wenn Sie zu irgendeinem Zeitpunkt im Designprozess feststellen, dass Sie das Grid zur Neupositionierung eines Elements verwenden, überlegen Sie, ob Sie zu Ihrem Dokument zurückkehren und auch eine Änderung an der logischen Reihenfolge vornehmen sollten. Das Schöne am CSS Grid-Layout ist, dass Sie in der Lage sein sollten, ein Element in der Quelle so zu verschieben, dass die logische Reihenfolge stimmt, ohne große Änderungen an Ihrem Layout vornehmen zu müssen. Es liegt in unserer Verantwortung als Entwickler, uns daran zu erinnern, zurück zu unserer Quelle zu gehen und sie zu aktualisieren, um die logische Reihenfolge beizubehalten.

## Grid und die Gefahr des Markup-Flattens

Ein weiteres Problem, das beim CSS Grid-Layout und in geringerem Maße auch bei CSS Flexbox zu beachten ist, ist die Versuchung, das Markup zu _flatten_. Wie wir festgestellt haben, muss ein Element, um zu einem Grid-Element zu werden, ein direktes Kind des Grid-Containers sein. Wenn Sie also ein {{HTMLElement("ul")}}-Element innerhalb eines Grid-Containers haben, wird _dieses_ `ul` zu einem Grid-Element – die Kinder-{{HTMLElement("li")}}-Elemente nicht.

Der [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` löst dieses Problem. Er ermöglicht es, dass das Grid von den Grid-Elementen geerbt und entlang des Baums weitergegeben wird. Alternativ führt das Setzen von `display: contents` auf einem Grid-Element dazu, dass die Kinder-Elemente zu Grid-Elementen werden. Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der Kindelemente erscheinen so, als ob sie eine Ebene nach oben gestiegen wären.

Ein gut strukturiertes Dokument als Ausgangspunkt ist ein sehr guter Weg, um Barrierefreiheitsprobleme zu vermeiden.

## Siehe auch

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) und [(Human After All): Accessibility remix video](https://www.youtube.com/watch?v=spxT2CmHoPk) über Léonie Watson (2016)
- [Grid, content re-ordering and accessibility](https://css-tricks.com/grid-content-re-ordering-and-accessibility/) über CSS-tricks (2019)
- [`display: contents` is not a CSS reset](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html) über Adrian Roselli (2024)
