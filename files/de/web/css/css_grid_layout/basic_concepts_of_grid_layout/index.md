---
title: Grundlegende Konzepte des Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um große Seitenbereiche oder kleine Benutzeroberflächenelemente zu gestalten. Dieser Artikel führt das CSS-Grid-Layout und die neue Terminologie ein, die Teil der CSS-Grid-Layout Level 1 Spezifikation ist. Die in dieser Übersicht gezeigten Funktionen werden dann im Rest dieses Leitfadens detaillierter erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz von sich kreuzenden horizontalen und vertikalen Linien, die Spalten und Reihen definieren. Elemente können innerhalb dieser Spalten- und Reihenlinien auf dem Grid platziert werden. Das CSS-Grid-Layout verfügt über die folgenden Funktionen:

### Feste und flexible Spurgrößen

Sie können ein Grid mit festen Spurgrößen erstellen - zum Beispiel mit Pixeln. Dies setzt das Grid auf die angegebenen Pixel, die zu dem gewünschten Layout passen. Sie können auch ein Grid mit flexiblen Größen erstellen, mit Prozentangaben oder mit der für diesen Zweck entwickelten Einheit `fr`.

### Platzierung von Elementen

Sie können Elemente an einer genauen Position auf dem Grid mittels Liniennummern, Namen oder durch das Anvisieren eines Bereichs des Grids platzieren. Grid enthält auch einen Algorithmus, um die Platzierung von Elementen zu steuern, denen auf dem Grid keine explizite Position zugewiesen wurde.

### Erstellung zusätzlicher Spuren zur Aufnahme von Inhalten

Sie können ein explizites Grid mit Grid-Layout definieren. Die Grid-Layout-Spezifikation ist flexibel genug, um zusätzliche Reihen und Spalten hinzuzufügen, wenn dies erforderlich ist. Funktionen wie das Hinzufügen von "so vielen Spalten, wie in einen Container passen" sind enthalten.

### Ausrichtungssteuerung

Grid enthält Ausrichtungsfunktionen, damit wir steuern können, wie die Elemente ausgerichtet sind, nachdem sie in einem Grid-Bereich platziert wurden, und wie das gesamte Grid ausgerichtet ist.

### Steuerung von überlappenden Inhalten

Mehr als ein Element kann in einer Rasterzelle oder einem Bereich platziert werden und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}} Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Spezifikation, die, wenn sie mit anderen Teilen von CSS wie [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kombiniert wird, Ihnen helfen kann, Layouts zu erstellen, die zuvor in CSS nicht möglich waren. Alles beginnt mit der Erstellung eines Grids in Ihrem **Grid-Container**.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` an einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Elementen_.

In diesem Beispiel habe ich ein enthaltenes div mit einer Klasse von wrapper und darin befinden sich fünf Kinderelemente.

```html
<div class="wrapper">
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
</div>
```

Ich mache das `.wrapper` zu einem Grid-Container.

```css
.wrapper {
  display: grid;
}
```

Alle direkten Kinder sind jetzt Grid-Elemente. In einem Webbrowser sehen Sie keinen Unterschied darin, wie diese Elemente angezeigt werden, bevor sie in ein Grid umgewandelt werden, da Grid eine einspaltige Anordnung für die Elemente erstellt hat. Zu diesem Zeitpunkt können Sie es nützlich finden, mit dem [Grid-Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) zu arbeiten, der als Teil der Firefox-Entwicklertools verfügbar ist. Wenn Sie dieses Beispiel in Firefox anzeigen und das Grid inspizieren, sehen Sie ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf, und das Grid auf diesem Element wird im Browserfenster überlagert.

![Verwendung des Grid-Highlighters in DevTools zur Ansicht eines Grids](1-grid-inspector.png)

Wenn Sie lernen und dann mit dem CSS-Grid-Layout arbeiten, wird Ihnen dieses Werkzeug ein besseres Verständnis dafür geben, was mit Ihren Grids visuell geschieht.

Wenn wir anfangen wollen, dies mehr nach Grid aussehen zu lassen, müssen wir Spaltenspuren hinzufügen.

## Grid-Spuren

Wir definieren Reihen und Spalten auf unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren Grid-Spuren. Eine _Grid-Spur_ ist der Raum zwischen zwei benachbarten Linien auf dem Grid. Das Bild unten zeigt eine hervorgehobene Spur – dies ist die erste Reihen-Spur in unserem Grid.

Grid-Spuren werden im expliziten Grid durch Verwendung der Eigenschaften `grid-template-columns` und `grid-template-rows` oder der Kurzform `grid` oder `grid-template` definiert. Spuren werden auch im impliziten Grid erstellt, indem ein Grid-Element außerhalb der im expliziten Grid definierten Spuren positioniert wird.

### Einfaches Beispiel

Ich kann unser früheres Beispiel erweitern, indem ich die Eigenschaft `grid-template-columns` hinzufüge und dann die Größe der Spaltenspuren definiere.

Ich habe jetzt ein Grid mit drei Spaltenspuren von je 200 Pixel Breite erstellt. Die Kinderelemente werden auf diesem Grid, jeweils in einer Grid-Zelle, angeordnet.

```html
<div class="wrapper">
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

### Die fr-Einheit

Spuren können mit jeder Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, die uns hilft, flexible Grid-Spuren zu erstellen. Die neue `fr`-Einheit stellt einen Bruchteil des verfügbaren Raums im Grid-Container dar. Die nächste Grid-Definition würde drei gleich breite Spuren erstellen, die entsprechend dem verfügbaren Raum wachsen und schrumpfen.

### Ungleiche Größen

Im nächsten Beispiel erstellen wir eine Definition mit einer `2fr` Spur und dann zwei `1fr` Spuren. Der verfügbare Raum wird in vier Teile geteilt. Zwei Teile werden zur ersten Spur gegeben und jeweils ein Teil zu den nächsten zwei Spuren.

### Mischung aus flexiblen und absoluten Größen

In diesem letzten Beispiel mischen wir absolute Größen mit `fr`-Einheiten. Die erste Spur ist 500 Pixel breit, sodass die feste Breite vom verfügbaren Raum abgezogen wird. Der verbleibende Raum wird in drei Teile geteilt und im Verhältnis auf die beiden flexiblen Spuren aufgeteilt.

### Spurlisten mit der repeat()-Notierung

Große Grids mit vielen Spuren können die `repeat()`-Notierung verwenden, um die ganze oder einen Teil der Spuraufzählung zu wiederholen. Zum Beispiel kann die Grid-Definition...

kann auch geschrieben werden als:

### Implizite und explizite Grids

Beim Erstellen unseres Beispiel-Grids haben wir unsere Spaltenspuren mit der Eigenschaft {{cssxref("grid-template-columns")}} explizit definiert, aber das Grid hat die Reihen von selbst erstellt. Diese Reihen sind Teil des impliziten Grids. Das explizite Grid hingegen besteht aus allen Reihen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert werden.

Sie können auch eine festgelegte Größe für in das implizite Grid erstellte Spuren mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

### Spurgröße und minmax

Beim Einrichten eines expliziten Grids oder der Definition der Größe für automatisch erstellte Reihen oder Spalten möchten wir den Spuren vielleicht eine Mindestgröße geben, aber auch dafür sorgen, dass sie sich erweitern, um zu irgendeinem hinzugefügten Inhalt zu passen.

Grid bietet hierfür eine Lösung mit der {{cssxref("minmax", "minmax()")}} Funktion. In diesem nächsten Beispiel benutze ich `minmax()` im Wert von {{cssxref("grid-auto-rows")}}. Dies bedeutet, dass automatisch erstellte Reihen eine Mindesthöhe von 100 Pixel und ein Maximum von `auto` haben werden.

## Grid-Linien

Es sollte beachtet werden, dass wir beim Definieren eines Grids die Grid-Spuren definieren, nicht die Linien. Grid gibt uns dann nummerierte Linien, die beim Positionieren von Elementen verwendet werden können.

### Positionierung von Elementen an Linien

Wir werden die positionierungsbasierte Platzierung von Linien in einem späteren Artikel ausführlich erforschen. Im folgenden Beispiel zeige ich, wie dies auf einfache Weise gemacht werden kann.

Im folgenden Beispiel positioniere ich die ersten beiden Elemente unseres Drei-Spuren-Grids mit den Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}}.

Das erste Element wird an die Spaltenlinie 1 platziert und erstreckt sich bis zur Spaltenlinie 4. Es beginnt an der Reihenlinie 1 und endet an der Reihenlinie 3, was zwei Reihen-Spuren entspricht.

### Line-Positionierungs-Kurzformen

Die zuvor verwendeten Langformen können zu einer Linie für Spalten mit {{cssxref("grid-column")}} und zu einer Linie für Reihen mit {{cssxref("grid-row")}} komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code ergeben, jedoch mit weitaus weniger CSS.

## Grid-Zellen

Eine _Grid-Zelle_ ist die kleinste Einheit auf einem Grid. Gedanklich ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, legen sich die Kind-Elemente nach der Definition als Elternteil alle in eine Zelle jedes definierten Grids.

## Grid-Bereiche

Elemente können sich über eine oder mehrere Zellen sowohl nach Reihe als auch nach Spalte erstrecken, und dies schafft einen _Grid-Bereich_. Grid-Bereiche müssen rechteckig sein – es ist zum Beispiel nicht möglich, einen L-förmigen Bereich zu erstellen.

## Rinnen

_Rinnen_ oder _Gassen_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} erstellt werden, oder der Kurzform {{cssxref("gap")}}.

> [!NOTE]
> Als das Grid erstmals in Browsern eingeführt wurde, waren die Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} und {{cssxref("gap")}} mit dem Präfix `grid-` als `grid-column-gap`, `grid-row-gap` und `grid-gap` präfixiert.
>
> Browser unterstützen jetzt alle unpräfixierte Werte, jedoch bleiben die präfixierten Versionen als Aliase bestehen, wodurch sie sicher zu verwenden sind.

## Verschachtelte Grids

Ein Grid-Element kann ein Grid-Container werden. Im folgenden Beispiel habe ich das zuvor erstellte Drei-Spalten-Grid mit unseren zwei positionierten Elementen. In diesem Fall hat das erste Element einige Unterelemente.

### Verschachtelung ohne Subgrid

Wenn ich `box1` auf `display: grid` setze, kann ich ihm eine Spurdefinition geben und es wird ebenfalls zu einem Grid.

In diesem Fall hat das verschachtelte Grid keine Beziehung zum Elternteil. Wie Sie im Beispiel sehen können, hat es das {{cssxref("gap")}} des Elternteils nicht geerbt und die Linien im verschachtelten Grid stimmen nicht mit den Linien im Elterngrid überein.

### Subgrid

Zusätzlich zu regulären Grids lassen _Subgrid_ uns verschachtelte Grids erstellen, die die Spurdefinition des Eltern-Grids verwenden.

## Ebenen von Elementen mit z-index

Grid-Elemente können dieselbe Zelle besetzen, und in diesem Fall können wir die Eigenschaft {{cssxref("z-index")}} verwenden, um die Reihenfolge von sich überlappenden Elementen zu steuern.

### Überlappung ohne z-index

### Steuerung der Reihenfolge

Wir können die Reihenfolge, in der Elemente übereinander gestapelt sind, mit der `z-index` Eigenschaft steuern - genau wie bei positionierten Elementen.

## Nächste Schritte

In diesem Artikel haben wir einen sehr schnellen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erkunden Sie die Codebeispiele und experimentieren Sie mit ihnen, und dann gehen Sie weiter zum [nächsten Teil dieses Leitfadens](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods), wo wir wirklich beginnen werden, die Details des CSS-Grid-Layouts zu vertiefen.
