---
title: Grid-Layout und Zugänglichkeit
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

HTML ist die Inhaltsschicht einer Website, in der wir semantische, gut strukturierte Dokumente erstellen. CSS ist die Präsentationsschicht; wir wenden CSS an, um unter anderem das gewünschte Layout für unsere Inhalte zu erstellen. Zweidimensionale Gitterstrukturen werden mit [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) definiert.

Obwohl modernes HTML und CSS dazu konzipiert sind, die Erstellung von semantischen, zugänglichen Inhalten und Designs zu ermöglichen, gibt es Möglichkeiten, Zugänglichkeitsprobleme mit Grids _zu erzeugen_. Dieser Artikel untersucht die potenziellen Probleme, die auftreten können, und wie man sie vermeiden kann.

## Neuanordnung von Inhalten im CSS-Grid-Layout

Wir haben in diesen Leitfäden bereits gesehen, dass das CSS-Grid-Layout uns die Möglichkeit gibt, unsere Seiteninhalte durch die Positionierung von Elementen mit [linienbasierter Platzierung von Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) neu zu ordnen. Diese Platzierung kann ohne Berücksichtigung der Position des Elements in der Quelle erfolgen. Es gibt auch die {{cssxref("order")}}-Eigenschaft, die die Auto-Platzierung von Elementen ändern kann. Die {{cssxref("grid-auto-flow")}}-Eigenschaft hat einen `dense`-Wert, der Elemente visuell aus der DOM-Reihenfolge nehmen kann.

Die CSS-Grid-Layout-Spezifikation enthält einen Abschnitt zu [Neuanordnung und Zugänglichkeit](https://drafts.csswg.org/css-grid/#order-accessibility). Die Einleitung zu diesem Abschnitt beschreibt, was Browser tun sollten, wenn Inhalte visuell mit dem Grid-Layout neu geordnet werden:

> Grid-Layout gibt Autoren große Umstrukturierungsmöglichkeiten über das Dokument. Dies ist jedoch kein Ersatz für die korrekte Reihenfolge der Dokumentquelle. Die `order`-Eigenschaft und die Grid-Platzierung beeinflussen nicht die Reihenfolge in nicht-visuellen Medien (wie Sprache). Ebenso beeinflusst das visuelle Neuanordnen von Grid-Elementen nicht die Standarddurchgangsreihenfolge von sequentiellen Navigationsmodi (wie das Durchblättern von Links, siehe z.B. [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)).

Wenn Sie mit Grid-Layout Dinge visuell neu anordnen, ändert dies nicht die Reihenfolge, in der die Elemente angeordnet sind, wenn der Inhalt von einem Screenreader oder einem anderen Text-zu-Sprache-Benutzeragenten vorgelesen wird. Zusätzlich verändert die Neuanordnung die Tab-Reihenfolge nicht. Das bedeutet, dass jemand, der mit der Tastatur navigiert, möglicherweise durch Links auf Ihrer Seite tabbt und plötzlich vom Anfang zum Ende des Dokuments springt, weil ein neu geordnetes Element als nächstes in der Tab-Reihenfolge ist.

Die Spezifikation warnt Autoren (der CSSWG-Begriff für Webentwickler), diese Neuanordnung nicht vorzunehmen.

> Autoren müssen `order` und die Grid-Platzierungseigenschaften nur zur visuellen, nicht zur logischen Neuanordnung von Inhalten verwenden. Stylesheets, die diese Funktionen zur logischen Neuanordnung verwenden, sind nicht konform.

Was bedeutet das für das Design mit Grid-Layout in der Praxis?

### Visuelle, nicht logische Neuanordnung

Jedes Mal, wenn Sie Dinge mit Grid-Layout – oder mit Flexbox – neu anordnen, führt das nur zur _visuellen Neuanordnung_. Die zugrunde liegende Quelle kontrolliert Dinge wie Text-zu-Sprache und die Tab-Reihenfolge des Dokuments. Wir können sehen, wie das mit einem Beispiel funktioniert.

In diesem Beispiel haben wir ein Grid mit fünf Elementen, die jeweils einen Link enthalten. Die Elemente werden mit linienbasierten Platzierungseigenschaften platziert. Wir haben Kasten 1 in der zweiten Reihe des Grids positioniert, sodass er visuell als viertes Element in der Liste erscheint. Wenn wir mit der Tabulatortaste durch die Links navigieren, beginnt die Tab-Reihenfolge immer noch mit Kasten 1, da er als erstes in der Quelle kommt.

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

Die Spezifikation besagt, dass in diesem Szenario, wenn Kasten 1 wirklich logisch an dieser Position Sinn ergibt, wir zu unserer HTML-Quelle zurückkehren und die Änderung dort vornehmen sollten, anstatt die Neuanordnung mit Grid-Layout vorzunehmen. Das ist gemeint mit visueller versus logischer Neuanordnung; die logische Ordnung ist wichtig für die Bedeutung und Struktur unseres Dokuments und wir sollten sicherstellen, dass wir diese Struktur beibehalten.

## Wie sollten wir Zugänglichkeit für Grid-Layout angehen?

Aus der Spezifikation wissen wir, dass wir sicherstellen müssen, dass unser Dokument die logische Reihenfolge unserer Inhalte beibehält. Wie sollten wir bei unserer Entwicklung vorgehen, um sicherzustellen, dass wir die Zugänglichkeit für die unterschiedlichen Benutzer und die Art und Weise, wie sie mit unseren Seiten interagieren, gewährleisten?

- Beginnen Sie mit einem strukturierten und zugänglichen Dokument

  - : Ein Grid-Layout sollte bedeuten, dass wir unsere Dokumentquelle nicht ändern müssen, um das gewünschte Layout zu erhalten. Daher sollte der Ausgangspunkt Ihrer Seite ein gut strukturiertes und zugängliches Quelldokument sein. Dies wird Ihnen häufig auch eine gute Struktur für _Ihre kleinsten Bildschirmgeräte_ geben. Wenn ein Benutzer auf einem mobilen Gerät durch ein langes Dokument scrollt, entsprechen die Prioritäten dieses Benutzers oft dem, was in der Quelle prioritär sein sollte.

- Erstellen Sie ein responsives und verantwortungsvolles Grid

  - : Mit einer soliden Dokumentstruktur in Ihrem HTML können Sie CSS verwenden, um Ihr Layout darüber hinzuzufügen. Sie werden wahrscheinlich [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwenden, um Änderungen für unterschiedliche Bildschirmgrößen und Geräte vorzunehmen, einschließlich der Erstellung zusätzlicher Spalten für größere Bildschirme. Grid kann hier sehr nützlich sein. Zum Beispiel können Elemente, die in der mobilen Quellreihenfolge weniger wichtig sind, in einem Desktop-Layout in eine Seitenleiste verschoben werden. Der Schlüssel hier ist, beständig zu testen. Ein guter Test ist es, _im Dokument zu tabben_. Macht die Reihenfolge immer noch Sinn? Prüfen Sie, dass Sie nicht auf seltsame Weise vom oberen Ende zum unteren Ende des Layouts springen. Das ist ein Zeichen dafür, dass Sie etwas am Layout anpassen müssen.

- Rückkehr zur Quelle
  - : Wenn Sie sich zu irgendeinem Zeitpunkt im Designprozess dabei ertappen, ein Element mit Grid zu entfernen, überlegen Sie, ob Sie zu Ihrem Dokument zurückkehren und die logische Reihenfolge ebenfalls ändern sollten. Das Schöne an der Verwendung des CSS-Grid-Layouts ist, dass Sie ein Element in der Quelle bewegen können, um die logische Reihenfolge zu entsprechen, ohne große Änderungen an Ihrem Layout vornehmen zu müssen. Die Verantwortung liegt bei uns als Entwickler, daran zu denken, in unsere Quelle zurückzukehren und diese zu aktualisieren, um die logische Reihenfolge beizubehalten.

## Grid und die Gefahr der Markup-Glättung

Ein weiteres Problem, das man beim CSS-Grid-Layout und in geringerem Maße bei CSS-Flexbox beachten sollte, ist die Versuchung, Markup zu _glätten_. Wie wir festgestellt haben, muss ein Element, um ein Grid-Element zu werden, ein unmittelbares Kind des Grid-Containers sein. Daher wird, wenn Sie ein {{HTMLElement("ul")}}-Element in einem Grid-Container haben, _dieses_ `ul` zu einem Grid-Element – die Kinder-{{HTMLElement("li")}}-Elemente jedoch nicht.

Der [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Wert von `grid-template-columns` und `grid-template-rows` löst dieses Problem. Er ermöglicht es, dass das Grid von den Grid-Elementen geerbt und entlang des Baums weitergegeben wird. Alternativ führt die Einstellung `display: contents` auf einem Grid-Element dazu, dass die Kinder-Elemente zu Grid-Elementen werden. Wenn Sie ein Element auf `display: contents` setzen, verschwindet das Kästchen, das es normalerweise erstellt, und die Kästchen der Kindelemente erscheinen, als ob sie eine Ebene nach oben verschoben worden wären.

Mit einem gut strukturierten Dokument zu beginnen, ist eine sehr gute Möglichkeit, Zugänglichkeitsprobleme zu vermeiden.

## Siehe auch

- [Flexbox & das Tastaturnavigations-Disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) und [(Human After All): Zugänglichkeits-Remix-Video](https://www.youtube.com/watch?v=spxT2CmHoPk) von Léonie Watson (2016)
- [Grid, Inhaltsneuanordnung und Zugänglichkeit](https://css-tricks.com/grid-content-re-ordering-and-accessibility/) von CSS-tricks (2019)
- [`display: contents` ist kein CSS-Reset](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html) von Adrian Roselli (2024)
