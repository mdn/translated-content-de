---
title: Typische Anwendungsfälle von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

In diesem Leitfaden werden wir einige der häufigen Anwendungsfälle für Flexbox betrachten — jene Situationen, in denen Flexbox mehr Sinn ergibt als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist in der Regel die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen den Elementen steuern möchten. In diesem Leitfaden werfen wir einen Blick auf einige der typischen Anwendungsfälle von Flexbox.

## Navigation

Ein häufiges Muster für die Navigation ist es, eine Liste von Elementen als horizontale Leiste anzuzeigen. Dies ist wahrscheinlich das häufigste Flexbox-Beispiel und könnte als der ideale Anwendungsfall für Flexbox angesehen werden.

Wenn wir eine Reihe von Elementen horizontal anzeigen wollen, haben wir möglicherweise zusätzlichen Raum. Wir müssen entscheiden, was mit diesem Raum geschehen soll, und haben dazu einige Optionen. Wir können den Raum außerhalb der Elemente anzeigen — indem wir sie mit Leerraum zwischen oder um sie herum aufteilen — oder wir absorbieren den zusätzlichen Raum innerhalb der Elemente und benötigen daher eine Methode, die es den Elementen erlaubt, zu wachsen und diesen Raum einzunehmen.

### Raum außerhalb der Elemente verteilt

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungseigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Mehr zu dieser Eigenschaft können Sie unter [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) nachlesen, die sich mit der Ausrichtung von Elementen auf der Hauptachse beschäftigt.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Raum verteilt wird, indem Sie `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu platzieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}

### Raum innerhalb der Elemente verteilt

Ein anderes Muster für die Navigation wäre es, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften ermöglichen es, dass Elemente im Verhältnis zueinander wachsen und schrumpfen, wie im Beitrag [Kontrolle der Verhältnis der Flex-Elemente entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größeigenschaft Ihrer Navigationselemente respektieren, aber den verfügbaren Raum gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist — alle Elemente wachsen und schrumpfen von einer Flex-Basis von `auto`. Das würde bedeuten, dass das längere Element mehr Raum hätte, da es von einer größeren Größe aus startete, obwohl ihm der gleiche Betrag an verfügbarem Raum zugewiesen wird wie den anderen.

Im untenstehenden Live-Beispiel versuchen Sie `flex: auto` zu `flex: 1` zu ändern. Diese Kurzform für `flex: 1 1 0` bewirkt, dass alle Elemente die gleiche Breite bekommen, da sie von einer Flex-Basis von `0` arbeiten, wodurch der gesamte Raum gleichmäßig verteilt wird.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}

## Geteilte Navigation

Eine weitere Möglichkeit, Elemente auf der Hauptachse auszurichten, ist die Verwendung von automatischen Rändern. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Ränder, die unter [Verwendung von automatischen Rändern für die Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben ist.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das anfängliche Verhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/gap)-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element zu einem anderen verschieben, um zu ändern, wo die Aufteilung passiert.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}

## Zentriertes Element

Ein langjähriger Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Die vertikale Zentrierung von Inhalten ist mit den Flexbox-Ausrichtungseigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Sie können mit der Ausrichtung spielen, indem Sie das Element mit `start` an den Anfang oder mit `end` ans Ende ausrichten.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}

Mit [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften können Sie ein Element innerhalb eines anderen vertikal zentrieren, ohne Flexbox zu verwenden. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Kasten zu entfernen und `align-content: center` hinzuzufügen. Dann fügen Sie `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout mit nach unten geschobenem Footer

Ob Sie Flexbox oder ein Grid verwenden, um eine Liste von Kartenkomponenten zu gestalten, diese Layoutmethoden funktionieren nur bei direkten Nachkommen der Flex- oder Grid-Komponente. Das bedeutet, dass wenn Sie variable Mengen an Inhalt haben, die Karte auf die Höhe des Grid-Bereichs oder Flex-Containers gedehnt wird. Jedes Element im Inneren verwendet das normale Block-Layout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer sich nach oben bewegt, um sich unter den Inhalt zu setzen, anstatt am Boden der Karte zu bleiben.

![Zwei Kartenkomponenten, die zeigen, dass das Innere der Komponente nicht mit dem Wrapper wächst.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist — das Element kann von einer Flex-Basis von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und schiebt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, sehen Sie, dass der Footer nach oben bewegt wird, um sich direkt unter den Inhalt zu setzen.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}

## Medienobjekte

Das Medienobjekt — ein Bild oder anderes Medienelement mit daneben positioniertem erklärendem Text — ist ein häufiges Muster im Webdesign. Medienobjekte sollten umgekehrt werden können — wobei das Bild von einer Seite zur anderen bewegt wird.

Dieses Muster wird für Kommentare und andere Stellen verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um zu ermöglichen, dass der Teil des Medienobjekts, der das Bild enthält, seine Größeninformationen vom Bild erhält, wobei der Inhalt des Medienobjekts so flexibel ist, dass er den verbleibenden Raum einnimmt.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und der `.content` wird auf wachsen gesetzt, wobei der Wachstumsfaktor auf `1` gesetzt ist. Diese Eigenschaften sind dieselben wie die, die für unser Spaltenlayout-Kartenmuster oben verwendet werden.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren könnten, betreffen die unterschiedlichen Arten, wie Sie das Medienobjekt in Ihrem Design einschränken möchten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie ein {{cssxref("max-width")}} zum Bild hinzufügen. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede {{cssxref("width")}} oder `max-width`, die auf das Bild angewendet wird, wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten im Verhältnis wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie zwei gleich große Spalten erhalten. Sie könnten den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in welchem Fall sie von der Größe des Inhalts oder einer direkt auf die Flex-Elemente angewendeten Größe, wie einer `width` auf dem Bild, wachsen und schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, zum Beispiel die Seite mit dem Bild auf `flex: 1` und die Inhaltseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum in unterschiedlichen Raten gemäß dem `flex-grow`-Faktor verteilen, den Sie zugewiesen haben. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, sind im Leitfaden [Kontrolle der Verhältnis der Flex-Elemente entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) im Detail beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Medienobjekt umdrehen

Um die Anzeige des Medienobjekts umzukehren und das Bild rechts und den Inhalt links zu haben, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

In diesem Beispiel haben wir eine `flipped`-Klasse neben der `media`-Klasse hinzugefügt. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Anzeige ändert.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}

## Formularelemente

Flexbox ist besonders nützlich, wenn es um die Gestaltung von Formularelementen geht. Formulare haben mehrere kleine Elemente, die wir normalerweise miteinander ausrichten möchten. Ein häufiges Muster ist eine {{htmlelement("label")}}- und {{htmlelement("input")}}-Paarung kombiniert mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Newsletter-Anmeldeformular, bei dem Ihr Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht diese Art von Layout einfach zu erreichen. Die `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben es dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Text-Eingabefeld wird je nach verfügbarem Raum wachsen und schrumpfen.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}

Muster wie dieses können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die leicht zusätzliche hinzugefügte Elemente aufnehmen können. Sie nutzen die Flexibilität von Flexbox, indem Sie nicht wachsende Elemente mit wachsenden mischen.

## Fazit

Während Sie die obigen Muster erkundet haben, haben Sie hoffentlich begonnen zu sehen, wie Sie den besten Weg durchdenken können, um Flexbox zu verwenden und das gewünschte Ergebnis zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht dehnen können, mit denen, die es tun, verwenden Sie den Inhalt, um die Größe zu informieren, oder lassen Sie Flexbox den Raum proportional verteilen. Es liegt an Ihnen.

Überlegen Sie sich den besten Weg, den Inhalt, den Sie haben, zu präsentieren und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen helfen können, dies zu erreichen.
