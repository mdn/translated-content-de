---
title: Grid-Layout und Barrierefreiheit
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
l10n:
  sourceCommit: 9416c5b089a1c18296bde0b55e1c0d6637871869
---

{{CSSRef}}

HTML ist die Inhaltsschicht einer Website, in der wir semantische, gut strukturierte Dokumente erstellen. CSS ist die Präsentationsschicht; wir verwenden CSS, um unter anderem das gewünschte Layout für unsere Inhalte zu erstellen. Zweidimensionale Gitterstrukturen werden mithilfe des [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) definiert.

Obwohl modernes HTML und CSS so gestaltet sind, dass sie die Erstellung semantischer, zugänglicher Inhalte und Designs ermöglichen, gibt es dennoch Möglichkeiten, **Barrieren** mit Grids zu erzeugen. Dieser Artikel betrachtet potenzielle Probleme, die auftreten können, und wie diese vermieden werden können.

## Umordnung von Inhalten im CSS Grid-Layout

Wie in diesen Leitfäden bereits gezeigt wurde, gibt uns das CSS Grid-Layout die Möglichkeit, unsere Seiteninhalte durch [linienbasierte Platzierung von Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) neu anzuordnen. Dies kann unabhängig vom Standort des Elements in der Quelle erfolgen. Es gibt auch die {{cssxref("order")}}-Eigenschaft, die beeinflussen kann, wie Elemente automatisch platziert werden. Die {{cssxref("grid-auto-flow")}}-Eigenschaft hat einen `dense`-Wert, der Elemente visuell aus der DOM-Reihenfolge herausholen kann.

Die CSS Grid-Layout-Spezifikation enthält einen Abschnitt zum Thema [Umordnung und Barrierefreiheit](https://drafts.csswg.org/css-grid/#order-accessibility). Die Einleitung zu diesem Abschnitt beschreibt, was Browser tun sollten, wenn Inhalte visuell mit Grid-Layout neu angeordnet werden:

> Das Grid-Layout gibt Autoren große Freiheiten, das Dokument umzugestalten. Diese sind jedoch kein Ersatz für die korrekte Reihenfolge der Quelldokumente. Die `order`-Eigenschaft und die Grid-Platzierung beeinflussen nicht die Reihenfolge in nicht-visuellen Medien (wie z. B. Sprachausgabe). Ebenso beeinflusst die visuelle Umordnung von Grid-Elementen nicht die Standard-Durchlaufreihenfolge von sequentiellen Navigationsmodi (wie das Durchschalten von Links, siehe z. B. [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)).

Wenn Sie Inhalte visuell mit dem Grid-Layout umordnen, wird dies nicht beeinflussen, wie die Inhalte von einem Screenreader oder anderen Text-zu-Sprache-Agents gelesen werden. Darüber hinaus wird die Umordnung die Tab-Reihenfolge nicht ändern. Das bedeutet, dass jemand, der mit der Tastatur navigiert, möglicherweise von den Links auf Ihrer Seite plötzlich vom oberen Bereich zum unteren Bereich des Dokuments springt, weil sich ein neu angeordnetes Element als Nächstes in der Tab-Reihenfolge befindet.

Die Spezifikation warnt Entwickler (in der CSSWG-Sprache die Autoren), dies nicht umzusetzen.

> Autoren müssen die `order`- und Grid-Platzierungseigenschaften nur für visuelle, nicht logische Umordnungen von Inhalten verwenden. Stylesheets, die diese Funktionen für logische Umordnungen nutzen, gelten als nicht konform.

Was bedeutet das für das Design mit Grid-Layouts in der Praxis?

### Visuelle und nicht logische Umordnung

Jedes Mal, wenn Sie eine Umordnung mit dem Grid-Layout – oder mit Flexbox – durchführen, führen Sie eine _visuelle Umordnung_ durch. Die zugrunde liegende Quelle steuert Dinge wie die Sprachausgabe und die Tab-Reihenfolge des Dokuments. Wir können sehen, wie das funktioniert, anhand eines Beispiels.

In diesem Beispiel haben wir ein Grid mit fünf Elementen, von denen jedes einen Link enthält. Die Elemente werden mit linienbasierten Platzierungseigenschaften positioniert. Wir haben Box 1 in die zweite Zeile des Grids gelegt, damit sie visuell als viertes Element in der Liste erscheint. Wenn wir durch die Links mit der Tabulatortaste navigieren, beginnt die Tab-Reihenfolge weiterhin mit Box 1, da sie zuerst in der Quelle steht.

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

Die Spezifikation legt nahe, dass Sie, wenn Box 1 wirklich logisch an diese Position gehört, zu Ihrem HTML-Dokument zurückkehren und die Reihenfolge dort ändern sollten, anstatt sie über das Grid-Layout umzuordnen. Dies ist gemeint mit visueller versus logischer Umordnung. Die logische Reihenfolge ist wichtig für die Bedeutung und Struktur unseres Dokuments, und wir sollten sicherstellen, dass wir diese Struktur bewahren.

## Wie sollten wir Barrierefreiheit im Grid-Layout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unserer Inhalte beibehält. Wie sollten wir unsere Entwicklung angehen, um sicherzustellen, dass wir die Barrierefreiheit für die unterschiedlichen Nutzer und die Arten, wie sie mit unseren Seiten interagieren, aufrechterhalten?

- Beginnen Sie mit einem strukturierten und barrierefreien Dokument:
  - : Ein Grid-Layout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das Layout zu erreichen, das wir möchten. Der Ausgangspunkt Ihrer Seite sollte also ein gut strukturiertes und barrierefreies Ausgangsdokument sein. Dies wird oft auch eine gute Struktur für _Ihre kleinsten Bildschirme_ geben. Wenn ein Benutzer auf einem Mobilgerät durch ein langes Dokument scrollt, stimmen die Prioritäten dieses Benutzers oft mit dem überein, was in der Quelle Priorität haben sollte.
- Erstellen Sie ein responsives und verantwortungsvolles Grid:
  - : Mit einer soliden Dokumentstruktur, die im HTML definiert ist, können Sie CSS verwenden, um Ihr Layout darüber zu ergänzen. Sie werden wahrscheinlich [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwenden, um Änderungen für verschiedene Bildschirmgrößen und Geräte vorzunehmen, einschließlich der Erstellung zusätzlicher Spalten für größere Bildschirme. Grid kann hier sehr nützlich sein. Beispielsweise können Elemente, die in der mobilen Quellreihenfolge weniger priorisiert sind, in einem Desktop-Layout in eine Seitenleiste verschoben werden. Der Schlüssel ist hier, ständig zu testen. Ein guter Test ist es, _mit der Tabulatortaste durch das Dokument_ zu navigieren. Macht die Reihenfolge immer noch Sinn? Überprüfen Sie, dass Sie nicht in merkwürdiger Weise von oben nach unten im Layout springen. Das ist ein Zeichen, dass Sie etwas im Layout anpassen müssen.
- Zurück zur Quelle:
  - : Wenn Sie zu irgendeinem Zeitpunkt im Designprozess Grid verwenden, um die Position eines Elements zu verschieben, überlegen Sie, ob Sie zu Ihrem Dokument zurückkehren und die logische Reihenfolge ebenfalls ändern sollten. Das Gute am CSS Grid-Layout ist, dass Sie ein Element in der Quelle in die logische Reihenfolge verschieben können, ohne große Änderungen an Ihrem Layout vornehmen zu müssen. Es liegt an uns als Entwicklern, daran zu denken, zur Quelle zurückzugehen und sie zu aktualisieren, um die logische Reihenfolge beizubehalten.

## Grid und die Gefahr der Markup-Glättung

Ein weiteres Problem, das beim CSS Grid-Layout – und in etwas geringerem Maße bei CSS Flexbox – zu beachten ist, ist die Versuchung, das Markup zu _glätten_. Wie wir festgestellt haben, muss ein Element, um zu einem Grid-Element zu werden, ein direktes Kind des Grid-Containers sein. Wenn Sie also ein {{HTMLElement("ul")}}-Element innerhalb eines Grid-Containers haben, wird _dieses_ `ul` zu einem Grid-Element – die kindlichen {{HTMLElement("li")}}-Elemente nicht.

Der [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` löst dieses Problem. Er ermöglicht es, dass das Grid von Grid-Elementen geerbt und innerhalb des Baumes weitergegeben wird. Alternativ bewirkt die Einstellung `display: contents` auf einem Grid-Element, dass die Kinder des Elements zu Grid-Elementen werden. Wenn Sie ein Element auf `display: contents` setzen, verschwindet die Box, die es normalerweise erstellen würde, und die Boxen der Kinderelemente erscheinen, als wären sie eine Ebene höher gezogen worden.

Mit einem gut strukturierten Dokument zu beginnen, ist ein sehr guter Weg, um Barrierefreiheitsprobleme zu vermeiden.

## Siehe auch

- [Flexbox & the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) und [(Human After All): Accessibility remix video](https://www.youtube.com/watch?v=spxT2CmHoPk) via Léonie Watson (2016)
- [Grid, content re-ordering and accessibility](https://css-tricks.com/grid-content-re-ordering-and-accessibility/) via CSS-tricks (2019)
- [`display: contents` is not a CSS reset](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html) via Adrian Roselli (2024)
