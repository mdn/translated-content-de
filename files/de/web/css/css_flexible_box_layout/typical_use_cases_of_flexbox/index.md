---
title: Typische Anwendungsfälle von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

In diesem Leitfaden werfen wir einen Blick auf einige der häufigen Anwendungsfälle für Flexbox - dort, wo Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen den Elementen steuern möchten. In diesem Leitfaden betrachten wir einige der typischen Anwendungsfälle von Flexbox.

## Navigation

Ein häufiges Muster für Navigation ist eine Liste von Elementen, die als horizontale Leiste angezeigt werden. Es ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Flexbox-Anwendungsfall angesehen werden.

Wenn wir eine Reihe von Elementen horizontal anzeigen wollen, kann es sein, dass wir zusätzlichen Raum haben. Wir müssen entscheiden, was wir mit diesem Raum machen, und haben ein paar Optionen. Wir können entweder den Raum außerhalb der Elemente anzeigen — sie also mit weißem Raum dazwischen oder darum herum verteilen — oder wir absorbieren den zusätzlichen Raum in den Elementen selbst und benötigen daher eine Methode, um den Elementen zu ermöglichen, zu wachsen und diesen Raum auszufüllen.

### Raum außerhalb der Elemente verteilt

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungseigenschaften in Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Sie können mehr über diese Eigenschaft im Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) lesen, der sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Raum verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu positionieren, `end`, um ihn davor zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}

### Raum innerhalb der Elemente verteilt

Ein anderes Muster für Navigation wäre, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften ermöglichen es, dass Elemente im Verhältnis zueinander wachsen und schrumpfen, wie im Artikel [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größen-Eigenschaft Ihrer Navigationselemente respektieren, aber den verfügbaren Raum gleichmäßig unter ihnen aufteilen wollen, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist — alle Elemente wachsen und schrumpfen von einer flex-Basis von `auto`. Dies würde bedeuten, dass das längere Element mehr Raum hätte, weil es von einer größeren Größe aus gestartet ist, obwohl ihm die gleiche Menge an verfügbarem Raum zugewiesen wird wie den anderen.

Im folgenden Live-Beispiel versuchen Sie, `flex: auto` in `flex: 1` zu ändern. Diese Kurzform für `flex: 1 1 0` sorgt dafür, dass alle Elemente die gleiche Breite haben, da sie von einer `flex-basis` von `0` arbeiten, was bedeutet, dass der gesamte Raum gleichmäßig verteilt wird.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}

## Geteilte Navigation

Eine weitere Möglichkeit, Elemente auf der Hauptachse zu auszurichten, ist die Verwendung von automatischen Rändern. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier nutzen wir die Technik der automatischen Ränder, die im Artikel [Verwendung von automatischen Rändern für die Hauptachsen-Ausrichtung](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das Standardverhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/gap)-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element auf ein anderes verschieben, um zu ändern, wo die Trennung auftritt.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}

## Zentrales Element

Ein langjähriger Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign das vertikale Zentrieren ist. Vertikales Zentrieren von Inhalten ist mit Flexbox-Ausrichtungseigenschaften sehr einfach, wie das folgende Live-Beispiel zeigt.

Sie können mit der Ausrichtung spielen, indem Sie das Element mit `start` am Anfang oder mit `end` am Ende ausrichten.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}

Mit [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Eigenschaften können Sie ein Element vertikal innerhalb eines anderen zentrieren, ohne Flexbox zu verwenden. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus der Box zu entfernen und `align-content: center` hinzuzufügen. Dann fügen Sie `margin: auto` zu dem Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten drückt

Egal, ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten anzuordnen, diese Layoutmethoden funktionieren nur bei direkten Nachkommen des Flex- oder Grid-Containers. Das bedeutet, dass wenn Sie variable Inhalte haben, sich die Karte auf die Höhe des Grid-Bereichs oder Flex-Containers ausdehnt. Jeder Inhalt im Inneren verwendet das normale Block-Layout, was bedeutet, dass sich auf einer Karte mit weniger Inhalt der Footer nach oben zum Inhalt bewegt, anstatt am Kartenboden zu bleiben.

![Zwei Kartenkomponenten zeigen, dass die internen Komponenten nicht mit dem Wrapper dehnen.](flex-cards.png)

Flexbox löst dieses Problem. Wir machen die Karte zu einem Flex-Container, mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist - das Element kann von einer Flex-Basis von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nutzt es den gesamten verfügbaren Raum im Flex-Container aus und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, werden Sie sehen, dass der Footer direkt unter den Inhalt verschoben wird.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}

## Medienobjekte

Das Medienobjekt — ein Bild oder ein anderes Medienelement zusammen mit einem beschreibenden Text nebeneinander — ist ein häufiges Muster im Webdesign. Medienobjekte sollten umkehrbar sein — also das Bild von einer Seite zur anderen verschieben können.

Dieses Muster wird für Kommentare und andere Stellen verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox nutzen, um den Teil des Medienobjekts, der das Bild enthält, seine Größeninformationen vom Bild nehmen zu lassen, wobei der Inhalt des Medienobjekts flexen kann, um den verbleibenden Raum einzunehmen.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und der `.content` ist so eingestellt, dass er wächst, mit dem Wachstumsfaktor auf `1` gesetzt. Diese Eigenschaften sind dieselben wie die, die wir für unser Kartenmuster mit Spalten-Layout oben verwendet haben.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren könnten, beziehen sich auf die verschiedenen Möglichkeiten, wie Sie das Medienobjekt in Ihrem Design einschränken möchten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie ein {{cssxref("max-width")}} auf das Bild anwenden. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen, und verwendet eine `flex-basis` von auto. Jede angewendete {{cssxref("width")}} oder `max-width` wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten erlauben, im Verhältnis zu wachsen und zu schrumpfen. Wenn Sie beide Seiten auf `flex: 1` setzen, wachsen und schrumpfen sie von einer {{cssxref("flex-basis")}} von `0`, sodass Sie am Ende zwei gleich große Spalten haben. Sie könnten auch den Inhalt als Leitfaden nehmen und beide auf `flex: auto` setzen, in diesem Fall würden sie vom Inhalt ausgehend wachsen und schrumpfen oder jede direkt auf die Flex-Elemente wie eine `width` auf das Bild angewendete Größe verwenden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren geben, zum Beispiel die Seite mit dem Bild auf `flex: 1` setzen und die Inhaltsseite auf `flex: 3`. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum mit unterschiedlichen Raten entsprechend dem `flex-grow`-Faktor, den Sie zugewiesen haben, verteilen. Die Flex-Eigenschaften, die wir dafür verwenden, sind im Detail im Leitfaden [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Umschalten des Medienobjekts

Um die Darstellung des Medienobjekts zu wechseln und das Bild auf der rechten und den Inhalt auf der linken Seite zu haben, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

In diesem Beispiel haben wir eine `flipped`-Klasse neben der `media`-Klasse hinzugefügt. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Darstellung ändert.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}

## Formularelemente

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu stylen. Formulare haben mehrere kleine Elemente, die wir typischerweise miteinander ausrichten möchten. Ein häufiges Muster ist ein Paar aus {{htmlelement("label")}} und {{htmlelement("input")}} kombiniert mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Newsletter-Anmeldeformular, in dem Ihr Besucher seine E-Mail-Adresse eingeben soll.

Flexbox macht es einfach, diese Art von Layout zu erreichen. Der `<label>`, `<input>` und der `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften ermöglichen es dem `<input>`-Feld, zu wachsen, während der Button und das Label nicht wachsen. Das Texteingabefeld wächst und schrumpft je nach verfügbarem Raum.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}

Solche Muster können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die sich problemlos erweitern lässt, wenn weitere Elemente hinzugefügt werden. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen können, mit solchen, die es können.

## Fazit

Während Sie die oben genannten Muster erforscht haben, haben Sie hoffentlich begonnen zu erkennen, wie Sie den besten Weg finden können, Flexbox zu verwenden, um das gewünschte Resultat zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht dehnen können, mit denen, die es können, verwenden Sie den Inhalt, um die Größe zu bestimmen, oder lassen Sie Flexbox den Raum anteilig aufteilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den Inhalt, den Sie haben, am besten präsentieren können und sehen Sie dann, wie Flexbox oder andere Layoutmethoden Ihnen helfen können, dies zu erreichen.
