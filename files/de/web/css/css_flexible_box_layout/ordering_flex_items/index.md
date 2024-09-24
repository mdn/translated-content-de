---
title: Anordnung von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
l10n:
  sourceCommit: 0800ba8f755ac48ca427094b3e060c0fac5bb88a
---

{{CSSRef}}

Layout-Methoden wie Flexbox und Grid ermöglichen die Kontrolle der Reihenfolge von Inhalten. In diesem Artikel betrachten wir Möglichkeiten, wie Sie die visuelle Reihenfolge Ihrer Inhalte ändern können, wenn Sie Flexbox verwenden. Wir werden auch betrachten, wie das Umordnen von Elementen die Barrierefreiheit beeinflusst.

## Umkehren der Anzeige der Elemente

Die Eigenschaft {{cssxref("flex-direction")}} kann einen von vier Werten annehmen:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Die ersten beiden Werte behalten die Elemente in der gleichen Reihenfolge, in der sie in der Dokumentquellreihenfolge erscheinen, und zeigen sie sequentiell von der Startlinie an.

![Die Elemente werden in einer Reihe dargestellt, die von links beginnt.](basics1.png)

![Die Elemente werden in einer Spalte dargestellt, die von oben beginnt.](align10.png)

Die zweiten beiden Werte kehren die Elemente um, indem sie die Start- und Endlinien vertauschen.

![Die Elemente werden in umgekehrter Reihenfolge beginnend von der rechten Linie dargestellt.](align9.png)

![Die Elemente werden in einer Spalte in umgekehrter Reihenfolge beginnend an der unteren Linie dargestellt.](align11.png)

Denken Sie daran, dass sich die Startlinie auf Schriftsysteme bezieht. Die oben dargestellten reihenbezogenen Beispiele zeigen, wie `row` und `row-reverse` in einer von links nach rechts gerichteten Sprache wie Englisch funktionieren. Wenn Sie in einer von rechts nach links gerichteten Sprache wie Arabisch arbeiten, würde `row` auf der rechten Seite beginnen, `row-reverse` auf der linken.

![Flex-Container mit arabischen Buchstaben zeigen, wie die Reihe von der rechten Seite beginnt und row-reverse von der linken Seite.](order-rtl.png)

Dies kann wie eine einfache Möglichkeit erscheinen, Dinge in umgekehrter Reihenfolge anzuzeigen. Sie sollten jedoch beachten, dass die Elemente nur _visuell_ in umgekehrter Reihenfolge angezeigt werden. Die Umordnungsfähigkeiten des Flex-Layouts beeinflussen nur die visuelle Darstellung. Die Tab-Reihenfolge und die Sprachreihenfolge folgen der Reihenfolge des Quellcodes. Das bedeutet, dass sich nur die visuelle Darstellung ändert; die Quellreihenfolge bleibt gleich, was eine andere Benutzererfahrung für nicht-CSS-unterstützte Assistenten (denken Sie an Siri oder Alexa) und Nutzer von unterstützenden Technologien bietet. Wenn Sie die Reihenfolge einer Navigationsleiste ändern, bleibt die Tab-Reihenfolge die Dokumentquellreihenfolge und nicht Ihre visuelle Reihenfolge, was kognitiv verwirrend sein kann.

Wenn Sie einen umgekehrten Wert verwenden oder Ihre Elemente anderweitig umordnen, sollten Sie überlegen, ob Sie die logische Reihenfolge im Quellcode wirklich ändern sollten.

Die Spezifikation des flexiblen Box-Layouts warnt davor, die Umordnung nicht als Mittel zur Behebung von Quellproblemen zu verwenden:

> "Autoren _dürfen nicht_ `order` oder die \*-reverse-Werte von {{cssxref("flex-flow")}} / `flex-direction` als Ersatz für die korrekte Quellreihenfolge verwenden, da dies die Barrierefreiheit des Dokuments ruinieren kann."

Wenn Sie im nachstehenden Live-Beispiel von Link zu Link tabben, ist der Fokus-Stil hervorgehoben und zeigt, dass das Ändern der Reihenfolge von Flex-Elementen mit `flex-direction` die Tab-Reihenfolge nicht ändert, die der Quellcode-Reihenfolge folgt.

{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}

Ebenso wie das Ändern des Wertes von `flex-direction` die Tab-Reihenfolge nicht ändert, ändert es auch nicht die Malreihenfolge. Es ist nur ein visuelles Umkehren der Elemente.

## Die order-Eigenschaft

Zusätzlich zum Umkehren der Reihenfolge, in der Flex-Elemente visuell angezeigt werden, können Sie einzelne Elemente mit der {{cssxref("order")}}-Eigenschaft ansprechen und ändern, wo sie in der visuellen Reihenfolge erscheinen.

Die {{cssxref("order")}}-Eigenschaft ist dafür ausgelegt, die Elemente in _ordinale Gruppen_ anzuordnen. Das bedeutet, dass den Elementen eine ganze Zahl zugewiesen wird, die ihre Gruppe repräsentiert. Die Elemente werden dann gemäß dieser Zahl in der visuellen Reihenfolge platziert, beginnend mit dem niedrigsten Wert. Wenn mehr als ein Element denselben ganzzahligen Wert hat, werden diese innerhalb dieser Gruppe gemäß der Quellreihenfolge angeordnet.

Zum Beispiel werden fünf Flex-Elementen folgende `order`-Werte zugewiesen:

- Quell-Element 1: `order: 2`
- Quell-Element 2: `order: 3`
- Quell-Element 3: `order: 1`
- Quell-Element 4: `order: 3`
- Quell-Element 5: `order: 1`

Diese Elemente würden auf der Seite in folgender Reihenfolge angezeigt:

- Quell-Element 3: `order: 1`
- Quell-Element 5: `order: 1`
- Quell-Element 1: `order: 2`
- Quell-Element 2: `order: 3`
- Quell-Element 4: `order: 3`

![Elemente haben eine Nummer, die ihre Quellreihenfolge zeigt, die neu angeordnet wurde.](order-property.png)

Experimentieren Sie mit den Werten im nachstehenden Live-Beispiel und sehen Sie sich an, wie sich die Reihenfolge ändert. Versuchen Sie auch, `flex-direction` auf `row-reverse` zu ändern und sehen Sie, was passiert — die Startlinie wird umgeschaltet, sodass die Reihenfolge von der gegenüberliegenden Seite beginnt.

{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}

Flex-Elemente haben einen Standardwert für `order` von `0`. Daher werden Elemente mit einem ganzzahligen Wert größer als `0` nach allen Elementen angezeigt, denen kein expliziter `order`-Wert gegeben wurde.

Sie können auch negative Werte mit `order` verwenden, was sehr nützlich sein kann. Wenn Sie möchten, dass ein Element zuerst angezeigt wird, während die Reihenfolge aller anderen Elemente unverändert bleibt, können Sie diesem Element einen `order` von `-1` geben. Da dies niedriger als `0` ist, wird das Element immer zuerst angezeigt.

Im nachstehenden Live-Code-Beispiel werden die Elemente mit Flexbox angeordnet. Indem Sie in der HTML ändern, welches Element die Klasse `active` zugewiesen bekommt, können Sie ändern, welches Element zuerst angezeigt wird und somit in voller Breite oben im Layout erscheint, während die anderen Elemente darunter angezeigt werden.

{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}

Die Elemente werden in _order-modified document order_ angezeigt, was bedeutet, dass der Wert der `order`-Eigenschaft berücksichtigt wird, bevor die Elemente angezeigt werden.

`Order` ändert auch die Malreihenfolge der Elemente; Elemente mit einem niedrigeren Wert für `order` werden zuerst gemalt und Elemente mit einem höheren Wert für `order` danach gemalt.

## Die order-Eigenschaft und Barrierefreiheit

Die Verwendung der `order`-Eigenschaft hat die gleichen Auswirkungen auf die Barrierefreiheit wie das Ändern der Richtung mit `flex-direction`. Die Verwendung von `order` ändert die Reihenfolge, in der die Elemente gemalt werden und wie sie visuell erscheinen. Sie ändert nicht die sequentielle Navigationsreihenfolge der Elemente. Daher könnte ein Benutzer, der die Tastatur zum Tabben durch den Inhalt auf der Seite verwendet, sich verwirrenderweise in Ihrem Inhalt bewegt.

Indem Sie durch eines der Live-Beispiele auf dieser Seite tabben, können Sie sehen, wie `order` möglicherweise eine seltsame Erfahrung für jeden schafft, der kein Zeigegerät wie eine Maus verwendet. Um mehr über diese Diskrepanz zwischen visueller und logischer Reihenfolge und einige der potenziellen Probleme zu erfahren, die sie in Bezug auf Barrierefreiheit aufwirft, lesen Sie die folgenden Ressourcen.

- [Flexbox and the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) über tink.uk (2016)
- [HTML Source Order vs CSS Display Order](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) über adrianroselli.com (2015)
- [The Responsive Order Conflict for Keyboard Focus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) über alastairc.uk (2017)

## Anwendungsfälle für `order`

Es gibt einige Anwendungsfälle, bei denen die Tatsache, dass die logische und damit Lesereihenfolge von Flex-Elementen von der visuellen Reihenfolge getrennt ist, hilfreich ist. Wenn sorgfältig verwendet, kann die `order`-Eigenschaft einige nützliche allgemeine Muster einfach implementieren.

Sie könnten ein Design haben, vielleicht eine Karte, die eine Nachricht anzeigt. Die Überschrift der Nachricht ist das wesentliche Element, das hervorgehoben werden sollte und wäre das Element, zu dem ein Benutzer springen könnte, wenn er zwischen den Überschriften tabbt, um den Inhalt zu finden, den er lesen möchte. Die Karte hat auch ein Datum; das fertige Design, das wir erstellen möchten, sieht folgendermaßen aus.

![Ein Design-Komponent mit einem Datum, dann einer Überschrift und dann Inhalt.](order-card.png)

Visuell erscheint das Datum über der Überschrift im Quellcode. Wenn die Karte jedoch von einem Screenreader vorgelesen wird, würde ich bevorzugen, dass zuerst der Titel und dann das Veröffentlichungsdatum genannt wird. Wir können dies mit der `order`-Eigenschaft erreichen.

Die Karte ist unser Flex-Container mit `flex-direction` auf `column` gesetzt. Wir geben dem Datum einen `order` von `-1`, wodurch es über der Überschrift platziert wird.

{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}

Diese kleinen Anpassungen sind die Art von Fällen, in denen die `order`-Eigenschaft sinnvoll ist. Behalten Sie die logische Reihenfolge identisch mit der Lese- und Tab-Reihenfolge des Dokuments und erhalten Sie diese auf die zugänglichste und strukturierteste Weise. Verwenden Sie dann `order` nur für rein visuelle Design-Anpassungen. Ordnen Sie keine Elemente um, die den Tastaturfokus erhalten. Stellen Sie sicher, dass Sie Ihren Inhalt immer nur mit einer Tastatur anstelle einer Maus oder eines Touchscreens testen; dies wird aufdecken, ob Ihre Entwicklungsentscheidungen die Navigation des Inhalts erschweren.

## Siehe auch

- [Grundlegende Konzepte von flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Beziehung von Flexbox zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
