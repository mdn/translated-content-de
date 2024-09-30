---
title: Reihenfolge von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
l10n:
  sourceCommit: 0800ba8f755ac48ca427094b3e060c0fac5bb88a
---

{{CSSRef}}

Layout-Methoden wie Flexbox und Grid ermöglichen die Kontrolle über die Reihenfolge von Inhalten. In diesem Artikel betrachten wir Möglichkeiten, wie Sie die visuelle Reihenfolge Ihrer Inhalte mit Flexbox ändern können. Wir werden auch berücksichtigen, wie das Umordnen von Elementen die Barrierefreiheit beeinflusst.

## Umkehren der Anzeige der Elemente

Die Eigenschaft {{cssxref("flex-direction")}} kann einen von vier Werten annehmen:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Die ersten beiden Werte halten die Reihenfolge der Elemente so, wie sie in der Dokumentenquellreihenfolge erscheinen, und zeigen sie sequentiell von der Startlinie an.

![Die Elemente werden in einer Zeile angezeigt, beginnend von links.](basics1.png)

![Die Elemente werden als Spalte angezeigt, beginnend von oben.](align10.png)

Die zweiten beiden Werte kehren die Elemente um, indem sie die Start- und Endlinien vertauschen.

![Die Elemente werden in umgekehrter Reihenfolge angezeigt, beginnend von der rechten Linie.](align9.png)

![Die Elemente werden in einer Spalte in umgekehrter Reihenfolge angezeigt, beginnend an der unteren Linie.](align11.png)

Denken Sie daran, dass sich die Startlinie auf die Schreibmodi bezieht. Die oben genannten reihenbezogenen Beispiele zeigen, wie `row` und `row-reverse` in einer von links nach rechts verlaufenden Sprache wie Englisch funktionieren. Wenn Sie in einer von rechts nach links verlaufenden Sprache wie Arabisch arbeiten, würde `row` rechts beginnen, `row-reverse` links.

![Flex-Container mit arabischen Buchstaben, die zeigen, wie die Reihenfolge der Zeile von rechts beginnt und die Reihenfolge `row-reverse` von links.](order-rtl.png)

Dies mag wie eine einfache Möglichkeit erscheinen, Dinge in umgekehrter Reihenfolge anzuzeigen. Sie sollten jedoch beachten, dass die Elemente nur _visuell_ in umgekehrter Reihenfolge angezeigt werden. Die Umordnungsmöglichkeiten des Flex-Layouts betreffen nur die visuelle Darstellung. Die Tab-Reihenfolge und die Reihenfolge der Sprachausgabe folgen der Quellcode-Reihenfolge. Das bedeutet, dass sich nur die visuelle Darstellung ändert; die Quellreihenfolge bleibt gleich und bietet ein anderes Benutzererlebnis für nicht-CSS-UAs (wie Siri oder Alexa) und Benutzer von Hilfstechnologien. Wenn Sie die Reihenfolge einer Navigationsleiste ändern, bleibt die Tab-Reihenfolge die Dokumentenquellreihenfolge und nicht Ihre visuelle Reihenfolge, was kognitiv verwirrend sein kann.

Wenn Sie einen umgekehrten Wert nutzen oder Ihre Elemente anderweitig umordnen, sollten Sie in Betracht ziehen, ob Sie die logische Reihenfolge in der Quelle wirklich ändern sollten.

Die Spezifikation des flexiblen Boxlayouts warnt davor, das Umordnen nicht als Lösung für Quellenprobleme einzusetzen:

> "Autoren _dürfen nicht_ `order` oder die \*-reverse Werte von {{cssxref("flex-flow")}}/`flex-direction` als Ersatz für die korrekte Quellreihenfolge verwenden, da dies die Zugänglichkeit des Dokuments ruinieren kann."

Während Sie von Link zu Link im Live-Beispiel unten tabben, wird der Fokusstil hervorgehoben, der zeigt, dass das Ändern der Reihenfolge von Flex-Elementen mit `flex-direction` die Tab-Reihenfolge nicht ändert, die weiterhin der Quellcode-Reihenfolge folgt.

{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}

Ebenso wie das Ändern des Werts von `flex-direction` die Tab-Reihenfolge nicht ändert, ändert das Ändern dieses Wertes nicht die Malreihenfolge. Es ist lediglich eine visuelle Umkehrung der Elemente.

## Die order-Eigenschaft

Zusätzlich zur Umkehrung der Reihenfolge, in der Flex-Elemente visuell angezeigt werden, können Sie mit der Eigenschaft {{cssxref("order")}} gezielt einzelne Elemente ansteuern und ändern, wo sie in der visuellen Reihenfolge erscheinen.

Die Eigenschaft {{cssxref("order")}} ist dazu gedacht, die Elemente in _ordinale Gruppen_ anzuordnen. Das bedeutet, dass die Elemente einer Ganzzahl zugewiesen werden, die ihre Gruppe repräsentiert. Die Elemente werden dann gemäß dieser Ganzzahl, mit den niedrigsten Werten zuerst, in der visuellen Reihenfolge platziert. Wenn mehr als ein Element denselben Ganzzahlwert hat, werden die Elemente innerhalb dieser Gruppe gemäß der Quellreihenfolge angeordnet.

Als Beispiel werden fünf Flex-Elementen die folgenden `order`-Werte zugewiesen:

- Quell-Element 1: `order: 2`
- Quell-Element 2: `order: 3`
- Quell-Element 3: `order: 1`
- Quell-Element 4: `order: 3`
- Quell-Element 5: `order: 1`

Diese Elemente würden in folgender Reihenfolge auf der Seite angezeigt werden:

- Quell-Element 3: `order: 1`
- Quell-Element 5: `order: 1`
- Quell-Element 1: `order: 2`
- Quell-Element 2: `order: 3`
- Quell-Element 4: `order: 3`

![Die Elemente haben eine Zahl, die ihre Quellreihenfolge zeigt, die umgeordnet wurde.](order-property.png)

Experimentieren Sie mit den Werten im Live-Beispiel unten und sehen Sie, wie sich die Reihenfolge ändert. Versuchen Sie auch `flex-direction` auf `row-reverse` zu ändern und sehen Sie, was passiert — die Startlinie wird gewechselt, sodass die Ordnung von der gegenüberliegenden Seite beginnt.

{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}

Flex-Elemente haben einen Standardwert `order` von `0`. Daher werden Elemente mit einem ganzzahligen Wert größer als `0` nach allen Elementen angezeigt, die keinen expliziten `order`-Wert erhalten haben.

Sie können auch negative Werte mit `order` verwenden, was ziemlich nützlich sein kann. Wenn Sie ein Element zuerst anzeigen möchten und die Reihenfolge aller anderen Elemente unverändert lassen möchten, können Sie diesem Element den `order`-Wert `-1` geben. Da dies niedriger als `0` ist, wird das Element immer zuerst angezeigt.

Im Live-Code-Beispiel unten werden die Elemente mit Flexbox angeordnet. Indem Sie ändern, welchem Element die Klasse `active` im HTML zugewiesen ist, können Sie ändern, welches Element zuerst angezeigt wird und somit die volle Breite oben im Layout einnimmt, während die anderen Elemente darunter angezeigt werden.

{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}

Die Elemente werden in _order-modifizierter Dokumentenreihenfolge_ angezeigt, was bedeutet, dass der Wert der `order`-Eigenschaft berücksichtigt wird, bevor die Elemente angezeigt werden.

`Order` ändert auch die Malreihenfolge der Elemente; Elemente mit einem niedrigeren Wert für `order` werden zuerst gemalt und Elemente mit einem höheren Wert für `order` danach.

## Die order-Eigenschaft und Barrierefreiheit

Die Verwendung der `order`-Eigenschaft hat die gleichen Auswirkungen auf die Barrierefreiheit wie die Änderung der Richtung mit `flex-direction`. Die Verwendung von `order` ändert die Reihenfolge, in der die Elemente gemalt werden, und die Reihenfolge, in der sie visuell erscheinen. Sie ändert nicht die sequentielle Navigationsreihenfolge der Elemente. Daher kann ein Benutzer, der die Tastatur verwendet, um durch den Inhalt auf der Seite zu tabben, sich verwirrt fühlen, da er möglicherweise durch Ihren Inhalt springt.

Durch Tabben durch eines der Live-Beispiele auf dieser Seite können Sie sehen, wie `order` potenziell eine merkwürdige Erfahrung für jeden schafft, der kein Zeigegerät wie eine Maus verwendet. Lesen Sie mehr über diese Trennung von visueller Reihenfolge und logischer Reihenfolge und einige der potenziellen Probleme, die sie für die Barrierefreiheit aufwirft, in den folgenden Ressourcen.

- [Flexbox und die Trennung der Tastaturnavigation](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via tink.uk (2016)
- [HTML-Quellreihenfolge vs CSS-Anzeigereihenfolge](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) via adrianroselli.com (2015)
- [Der Responsive-Ordnungs-Konflikt für Tastaturfokus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) via alastairc.uk (2017)

## Anwendungsfälle für `order`

Es gibt einige Anwendungsfälle, für die die Tatsache, dass die logische und damit die Lesereihenfolge von Flex-Elementen von der visuellen Reihenfolge getrennt ist, hilfreich ist. Sorgfältig eingesetzt, kann die `order`-Eigenschaft es ermöglichen, einige nützliche gängige Muster einfach zu implementieren.

Vielleicht haben Sie ein Design, vielleicht eine Karte, die einen Nachrichtenartikel anzeigt. Die Überschrift des Nachrichtenartikels ist das wichtigste Element, das hervorgehoben werden soll und das Element, zu dem ein Benutzer springen könnte, wenn er zwischen Überschriften wechselt, um den gewünschten Inhalt zu finden. Die Karte hat auch ein Datum; das fertige Design, das wir erstellen möchten, sieht etwa so aus.

![Ein Designbaustein mit einem Datum, dann einer Überschrift und dann Inhalt.](order-card.png)

Visuell erscheint das Datum über der Überschrift, in der Quelle jedoch. Wenn die Karte von einem Screenreader vorgelesen würde, würde ich bevorzugen, dass der Titel zuerst und dann das Veröffentlichungsdatum angekündigt würde. Dies können wir mit der `order`-Eigenschaft erreichen.

Die Karte ist unser Flex-Container, mit `flex-direction` auf `column` gesetzt. Wir geben dem Datum eine `order` von `-1`, wodurch es über der Überschrift platziert wird.

{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}

Diese kleinen Anpassungen sind die Art von Fällen, in denen die `order`-Eigenschaft sinnvoll ist. Halten Sie die logische Reihenfolge identisch mit der Lese- und Tabulatorreihenfolge des Dokuments und bewahren Sie diese auf die zugänglichste und strukturierte Weise. Verwenden Sie dann `order` für rein visuelle Design-Anpassungen. Ordnen Sie keine Elemente um, die den Tastaturfokus erhalten. Stellen Sie sicher, dass Sie Ihren Inhalt immer nur mit einer Tastatur und nicht mit einer Maus oder einem Touchscreen testen; dies wird aufzeigen, ob Ihre Entwicklungsentscheidungen die Navigation durch den Inhalt komplexer machen.

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
- [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
