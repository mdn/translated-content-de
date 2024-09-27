---
title: Anordnung von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
l10n:
  sourceCommit: 0800ba8f755ac48ca427094b3e060c0fac5bb88a
---

{{CSSRef}}

Layout-Methoden wie Flexbox und Grid ermöglichen die Steuerung der Anordnung von Inhalten. In diesem Artikel werfen wir einen Blick auf Möglichkeiten, wie Sie die visuelle Reihenfolge Ihrer Inhalte ändern können, wenn Sie Flexbox verwenden. Wir werden auch betrachten, wie die Neuanordnung von Elementen die Zugänglichkeit beeinflusst.

## Umkehren der Anzeige der Elemente

Die {{cssxref("flex-direction")}}-Eigenschaft kann einen von vier Werten annehmen:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Die ersten beiden Werte halten die Elemente in der gleichen Reihenfolge, in der sie im Dokumentquelltext erscheinen, und zeigen sie sequentiell von der Startlinie an.

![Die Elemente werden in einer Reihe beginnend von links angezeigt.](basics1.png)

![Die Elemente werden als Spalte beginnend von oben angezeigt](align10.png)

Die beiden anderen Werte kehren die Elemente um, indem sie die Start- und Endlinien vertauschen.

![Die Elemente werden in umgekehrter Reihenfolge beginnend an der rechten Linie angezeigt.](align9.png)

![Die Elemente werden in einer Spalte in umgekehrter Reihenfolge beginnend an der unteren Linie angezeigt.](align11.png)

Denken Sie daran, dass die Startlinie sich auf Schreibmodi bezieht. Die oben gezeigten Beispiele im Zusammenhang mit der Zeile demonstrieren, wie `row` und `row-reverse` in einer Sprache von links nach rechts wie Englisch funktionieren. Wenn Sie in einer Sprache von rechts nach links wie Arabisch arbeiten, würde `row` rechts beginnen, `row-reverse` links.

![Flex-Container mit arabischen Buchstaben, die zeigen, wie die Zeile von der rechten Seite beginnt und row-reverse von links.](order-rtl.png)

Dies kann wie ein einfacher Weg erscheinen, um Dinge in umgekehrter Reihenfolge anzuzeigen. Allerdings sollten Sie bedenken, dass die Elemente nur _visuell_ in umgekehrter Reihenfolge angezeigt werden. Die Neuanordnungsmöglichkeiten des Flexbox-Layouts betreffen nur die visuelle Darstellung. Die Tab-Reihenfolge und die Sprecher-Reihenfolge folgen der Reihenfolge des Quellcodes. Das bedeutet, dass sich nur die visuelle Darstellung ändert; die Quellreihenfolge bleibt gleich, was eine andere Benutzererfahrung für nicht-CSS-Benutzeragenten (denken Sie an Siri oder Alexa) und Benutzer von Hilfstechnologien bietet. Wenn Sie die Reihenfolge einer Navigationsleiste ändern, bleibt die Tab-Reihenfolge die Quellreihenfolge des Dokuments und nicht Ihre visuelle Reihenfolge, was kognitiv verwirrend sein kann.

Wenn Sie einen umgekehrten Wert verwenden oder Ihre Elemente anderweitig neu anordnen, sollten Sie überlegen, ob Sie wirklich die logische Reihenfolge im Quelltext ändern sollten.

Die Spezifikation des flexiblen Box-Layouts warnt uns davor, das Neuanordnen als Mittel für die Behebung von Quellproblemen zu verwenden:

> "Autoren dürfen `order` oder die \*-reverse-Werte von {{cssxref("flex-flow")}}/`flex-direction` _nicht_ als Ersatz für die richtige Quellreihenfolge verwenden, da dies die Zugänglichkeit des Dokuments zerstören kann."

Beim Durchsteppen von Link zu Link im Live-Beispiel unten wird der Fokus-Stil hervorgehoben und zeigt, dass das Ändern der Reihenfolge von Flex-Elementen mit `flex-direction` die Tab-Reihenfolge nicht ändert, die weiterhin der Quellcode-Reihenfolge folgt.

{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}

Genauso wie das Ändern des Wertes von `flex-direction` die Tab-Reihenfolge nicht ändert, ändert sich bei diesem Wert auch nicht die Malreihenfolge. Es ist nur eine visuelle Umkehrung der Elemente.

## Die Order-Eigenschaft

Zusätzlich zur Umkehrung der Reihenfolge, in der Flex-Elemente visuell angezeigt werden, können Sie einzelne Elemente gezielt ansprechen und ändern, wo sie in der visuellen Reihenfolge mit der {{cssxref("order")}}-Eigenschaft erscheinen.

Die {{cssxref("order")}}-Eigenschaft ist darauf ausgelegt, die Elemente in _ordinalen Gruppen_ anzuordnen. Das bedeutet, dass den Elementen eine Ganzzahl zugewiesen wird, die ihre Gruppe repräsentiert. Die Elemente werden dann in der visuellen Reihenfolge entsprechend dieser Ganzzahl angeordnet, zunächst die niedrigsten Werte. Wenn mehr als ein Element den gleichen ganzzahligen Wert hat, werden innerhalb dieser Gruppe die Elemente gemäß der Quellreihenfolge angeordnet.

Als Beispiel erhalten fünf Flex-Elemente folgende `order`-Werte:

- Quellen-Element 1: `order: 2`
- Quellen-Element 2: `order: 3`
- Quellen-Element 3: `order: 1`
- Quellen-Element 4: `order: 3`
- Quellen-Element 5: `order: 1`

Diese Elemente würden auf der Seite in folgender Reihenfolge angezeigt werden:

- Quellen-Element 3: `order: 1`
- Quellen-Element 5: `order: 1`
- Quellen-Element 1: `order: 2`
- Quellen-Element 2: `order: 3`
- Quellen-Element 4: `order: 3`

![Elemente haben eine Nummer, die ihre Quellreihenfolge zeigt, welche neu geordnet wurde.](order-property.png)

Spielen Sie mit den Werten in diesem Live-Beispiel unten herum und sehen Sie, wie sich die Reihenfolge ändert. Versuchen Sie auch, `flex-direction` auf `row-reverse` zu ändern und sehen Sie, was passiert — die Startlinie wird gewechselt, sodass die Anordnung von der gegenüberliegenden Seite beginnt.

{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}

Flex-Elemente haben standardmäßig einen `order`-Wert von `0`. Daher werden Elemente mit einem ganzzahligen Wert größer als `0` nach allen Elementen angezeigt, denen kein expliziter `order`-Wert zugewiesen wurde.

Sie können auch negative Werte mit `order` verwenden, was ziemlich nützlich sein kann. Wenn Sie ein Element zuerst anzeigen möchten, ohne die Reihenfolge aller anderen Elemente zu verändern, können Sie diesem Element `order: -1` zuweisen. Da dies niedriger als `0` ist, wird das Element immer zuerst angezeigt.

Im Live-Code-Beispiel unten sind die Elemente mit Flexbox angeordnet. Indem Sie ändern, welches Element die Klasse `active` im HTML zugeordnet bekommt, können Sie steuern, welches Element zuerst angezeigt wird und somit die volle Breite oben im Layout einnimmt, während die anderen Elemente darunter angezeigt werden.

{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}

Die Elemente werden in der _nach Order modifizierten Dokumentreihenfolge_ angezeigt, was bedeutet, dass der Wert der `order`-Eigenschaft vor der Anzeige der Elemente berücksichtigt wird.

`Order` verändert auch die Malreihenfolge der Elemente; Elemente mit einem niedrigeren `order`-Wert werden zuerst gezeichnet und Elemente mit einem höheren `order`-Wert danach.

## Order-Eigenschaft und Zugänglichkeit

Die Verwendung der `order`-Eigenschaft hat die gleichen Auswirkungen auf die Zugänglichkeit wie die Änderung der Richtung mit `flex-direction`. Die Verwendung von `order` verändert die Reihenfolge, in der Elemente gezeichnet werden, und die Reihenfolge, in der sie visuell erscheinen. Es ändert nicht die sequentielle Navigationsreihenfolge der Elemente. Wenn ein Benutzer also eine Tastatur verwendet, um durch den Inhalt auf der Seite zu navigieren, könnte er sich in Ihrer Inhalte in sehr verwirrender Weise bewegen.

Indem Sie durch eines der Live-Beispiele auf dieser Seite tabben, können Sie sehen, wie `order` potenziell eine seltsame Erfahrung für alle erzeugt, die kein Zeigegerät wie eine Maus verwenden. Um mehr über diese Diskrepanz zwischen visueller und logischer Reihenfolge und die potenziellen Probleme, die sie für die Zugänglichkeit hervorruft, zu erfahren, siehe die folgenden Ressourcen.

- [Flexbox und die Tastaturnavigations-Diskrepanz](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via tink.uk (2016)
- [HTML-Quellreihenfolge vs. CSS-Anzeigereihenfolge](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) via adrianroselli.com (2015)
- [Der Responsive Order Konflikt für Tastaturfokus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) via alastairc.uk (2017)

## Anwendungsfälle für `order`

Es gibt einige Anwendungsfälle, bei denen die Tatsache, dass die logische und damit die Lesereihenfolge von Flex-Elementen von der visuellen Reihenfolge getrennt ist, hilfreich sein kann. Mit Bedacht eingesetzt, kann die `order`-Eigenschaft die Implementierung einiger nützlicher gängiger Muster ermöglichen.

Vielleicht haben Sie ein Design, vielleicht eine Karte, die einen Nachrichtenartikel anzeigt. Die Überschrift des Nachrichtenartikels ist das zentrale Element, das hervorgehoben werden soll, und wäre das Element, zu dem ein Benutzer springen könnte, wenn er zwischen Überschriften tabbt, um den Inhalt zu finden, den er lesen möchte. Die Karte hat auch ein Datum; das gewollte Enddesign, das wir erstellen möchten, sieht so aus:

![Ein Design-Komponente mit einem Datum, dann eine Überschrift und dann Inhalt.](order-card.png)

Visuell erscheint das Datum über der Überschrift, jedoch im Quelltext. Wenn die Karte von einem Screenreader vorgelesen würde, bevorzuge ich, dass zuerst der Titel angekündigt wird und dann das Veröffentlichungsdatum. Dies können wir mit der `order`-Eigenschaft erreichen.

Die Karte ist unser Flex-Container, mit `flex-direction` auf `column` gesetzt. Wir geben dem Datum eine `order` von `-1`, wodurch es über der Überschrift platziert wird.

{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}

Diese kleinen Anpassungen sind die Art von Fällen, in denen die `order`-Eigenschaft sinnvoll ist. Behalten Sie die logische Reihenfolge gleich der Lese- und Tab-Reihenfolge des Dokuments bei und bewahren Sie diese auf die zugänglichste und strukturierteste Weise. Verwenden Sie dann `order` für rein visuelle Designanpassungen. Ändern Sie keine Elemente um, die Tastaturfokus erhalten. Stellen Sie sicher, dass Sie Ihren Inhalt immer mit nur einer Tastatur anstelle einer Maus oder eines Touchscreens testen; dies zeigt, ob Ihre Entwicklungsentscheidungen die Navigation des Inhalts erschweren.

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Beziehung von Flexbox zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Steuerung von Verhältnissen der Flex-Elemente entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Meistern des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Typische Anwendungsfälle von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
- [CSS flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
