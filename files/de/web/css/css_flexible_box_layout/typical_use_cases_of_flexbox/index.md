---
title: Typische Anwendungsfälle von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

In diesem Leitfaden betrachten wir einige der häufigen Anwendungsfälle für Flexbox – jene Szenarien, in denen Flexbox mehr Sinn macht als eine andere Layout-Methode.

## Warum Flexbox wählen?

Flexbox ist im Allgemeinen die richtige CSS-Layout-Lösung, wenn Sie eine Sammlung von Elementen in einer Dimension anordnen oder den Abstand zwischen den Elementen steuern möchten. In diesem Leitfaden werden wir einige der typischen Anwendungsfälle von Flexbox betrachten.

## Navigation

Ein gängiges Muster für Navigation ist es, eine Liste von Elementen als horizontale Leiste anzuzeigen. Dies ist wahrscheinlich das häufigste Beispiel für Flexbox und könnte als idealer Anwendungsfall für Flexbox betrachtet werden.

Wenn wir eine Gruppe von Elementen horizontal anzeigen möchten, können wir zusätzlichen Raum haben. Wir müssen entscheiden, was mit diesem Raum zu tun ist, und haben ein paar Optionen. Wir können den Raum außerhalb der Elemente anzeigen – also den Abstand zwischen oder um sie schaffen – oder wir absorbieren den zusätzlichen Raum innerhalb der Elemente und benötigen daher eine Methode, um den Elementen das Wachsen und Besetzen dieses Raums zu erlauben.

### Raum wird außerhalb der Elemente verteilt

Um den Raum zwischen oder um die Elemente zu verteilen, verwenden wir die Ausrichtungs-Eigenschaften von Flexbox und die {{cssxref("justify-content")}}-Eigenschaft. Weitere Informationen zu dieser Eigenschaft finden Sie in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container), das sich mit der Ausrichtung von Elementen auf der Hauptachse befasst.

In diesem Beispiel zeigen wir die Elemente in ihrer natürlichen Größe an und verwenden `justify-content: space-between`, um die Elemente gleichmäßig zu verteilen. Sie können ändern, wie der Raum verteilt wird, indem Sie die Werte `space-around` oder `space-evenly` verwenden. Sie könnten auch `start` verwenden, um den Raum am Ende der Elemente zu platzieren, `end`, um ihn vor den Elementen zu platzieren, oder `center`, um die Navigationselemente zu zentrieren.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}

### Raum wird innerhalb der Elemente verteilt

Ein anderes Muster für Navigation wäre, den verfügbaren Raum innerhalb der Elemente selbst zu verteilen, anstatt Raum zwischen ihnen zu schaffen. Die {{cssxref("flex")}}-Eigenschaften erlauben es, dass Elemente in Relation zueinander wachsen und schrumpfen, wie im [Steuern von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

Wenn Sie die Größen-Eigenschaft Ihrer Navigationselemente respektieren, aber den verfügbaren Raum gleichmäßig unter ihnen aufteilen möchten, könnten Sie `flex: auto` verwenden, was die Kurzform für `flex: 1 1 auto` ist – alle Elemente wachsen und schrumpfen ab einer Flex-Basis von `auto`. Das bedeutet, dass das längere Element mehr Platz hätte, weil es von einer größeren Größe ausgeht, obwohl ihm der gleiche Betrag an verfügbarem Raum zugewiesen wird wie den anderen.

Im Live-Beispiel unten versuchen Sie `flex: auto` in `flex: 1` zu ändern. Diese Kurzform für `flex: 1 1 0` führt dazu, dass alle Elemente die gleiche Breite annehmen, da sie von einer Flex-Basis von `0` ausgehen und der gesamte Raum gleichmäßig verteilt wird.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}

## Geteilte Navigation

Ein anderer Weg, um Elemente auf der Hauptachse auszurichten, ist das Verwenden von automatischen Margen. Dies ermöglicht das Designmuster einer Navigationsleiste, bei der eine Gruppe von Elementen links und eine andere Gruppe rechts ausgerichtet ist. Hier verwenden wir die Technik der automatischen Margen, die im [Verwenden von automatischen Margen zur Ausrichtung auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container#using_auto_margins_for_main_axis_alignment) beschrieben wird.

Die Elemente sind auf der Hauptachse mit `normal` ausgerichtet, was sich wie `start` verhält, da dies das initiale Verhalten von Flexbox ist. Die [`gap`](/de/docs/Web/CSS/gap)-Eigenschaft erzeugt Lücken zwischen den Elementen. Und wir richten das letzte Element nach rechts aus, indem wir ihm einen `margin-left`-Wert von `auto` geben. Sie können die Klasse von einem Element auf ein anderes verschieben, um zu ändern, wo die Teilung passiert.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}

## Element zentrieren

Ein lang andauernder Witz unter Entwicklern ist, dass das schwierigste Problem im Webdesign die vertikale Zentrierung ist. Das vertikale Zentrieren von Inhalt ist mit den Ausrichtungs-Eigenschaften von Flexbox sehr einfach, wie das folgende Live-Beispiel zeigt.

Sie können mit der Ausrichtung spielen, das Element mit `start` zum Start oder mit `end` zum Ende ausrichten.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}

Mit den [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Eigenschaften können Sie ein Element auch ohne Flexbox vertikal in einem anderen zentrieren. Im obigen Beispiel versuchen Sie, die Flex-Eigenschaften aus dem Kasten zu entfernen und `align-content: center` hinzuzufügen. Fügen Sie dann `margin: auto` zum Element hinzu, das Sie horizontal zentrieren möchten.

## Kartenlayout, das den Footer nach unten drückt

Ob Sie Flexbox oder Grid verwenden, um eine Liste von Kartenkomponenten zu layouten, diese Layout-Methoden funktionieren nur bei direkten Kindern der Flex- oder Grid-Komponente. Das bedeutet, dass wenn Sie variable Mengen an Inhalt haben, die Karte auf die Höhe des Gitterbereichs oder des Flex-Containers gestreckt wird. Jeder Inhalt im Inneren nutzt das normale Block-Layout, was bedeutet, dass bei einer Karte mit weniger Inhalt der Footer nach oben zum Unterrand des Inhalts steigen wird, anstatt am unteren Rand der Karte zu kleben.

![Zwei Kartenkomponenten, die zeigen, dass die internen Komponenten nicht mit der Hülle gedehnt werden.](flex-cards.png)

Flexbox löst dies. Wir machen die Karte zu einem Flex-Container mit {{cssxref("flex-direction", "flex-direction: column")}}. Wir setzen dann den Inhaltsbereich auf `flex: 1`, was die Kurzform für `flex: 1 1 0` ist – das Element kann ausgehend von einer Flex-Basis von `0` wachsen und schrumpfen. Da dies das einzige Element ist, das wachsen kann, nimmt es den gesamten verfügbaren Raum im Flex-Container ein und drückt den Footer nach unten. Wenn Sie die `flex`-Eigenschaft aus dem Live-Beispiel entfernen, sehen Sie, dass sich der Footer nach oben bewegt, um direkt unter dem Inhalt zu sitzen.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}

## Medienobjekte

Das Medienobjekt – ein Bild oder ein anderes Medienelement mit etwas beschreibendem Text nebeneinander – ist ein häufiges Muster im Webdesign. Medienobjekte sollten in der Lage sein, umgedreht zu werden – das Bild von einer Seite zur anderen zu verschieben.

Dieses Muster wird für Kommentare und andere Orte verwendet, an denen Bilder neben ihren Beschreibungen platziert werden. Wir können Flexbox verwenden, um dem Teil des Medienobjekts, der das Bild enthält, zu ermöglichen, seine Größeninformationen vom Bild zu beziehen, wobei der Inhalt des Medienobjekts flexibel den übrigen Raum einnimmt.

In diesem Beispiel ist das Medienobjekt auf `flex-start` ausgerichtet und die `.content` ist so eingestellt, dass sie wächst, mit dem Wachstumsfaktor auf `1` gesetzt. Diese Eigenschaften sind dieselben wie diejenigen, die wir für unser Spaltenlayout-Kartenmuster oben verwendet haben.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}

Einige Dinge, die Sie in diesem Live-Beispiel ausprobieren könnten, beziehen sich auf die verschiedenen Möglichkeiten, wie Sie das Medienobjekt in Ihrem Design begrenzen möchten.

Um zu verhindern, dass das Bild zu groß wird, sollten Sie ein {{cssxref("max-width")}} auf das Bild anwenden. Da diese Seite des Medienobjekts die Anfangswerte von Flexbox verwendet, kann sie schrumpfen, aber nicht wachsen und verwendet eine `flex-basis` von auto. Jede angewendete {{cssxref("width")}} oder `max-width` auf das Bild wird zur `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Sie könnten auch beide Seiten proportional wachsen und schrumpfen lassen. Wenn Sie beide Seiten auf `flex: 1` setzen, werden sie von einer {{cssxref("flex-basis")}} von `0` wachsen und schrumpfen, sodass Sie am Ende zwei gleich große Spalten haben. Sie könnten auch den Inhalt als Richtlinie nehmen und beide auf `flex: auto` setzen, in welchem Fall sie von der Größe des Inhalts oder einer auf die Flex-Elemente angewendeten Größe wie einer `width` auf dem Bild wachsen und schrumpfen würden.

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Sie könnten auch jeder Seite unterschiedliche {{cssxref("flex-grow")}}-Faktoren zuweisen, indem Sie zum Beispiel die Seite mit dem Bild auf `flex: 1` und die Inhaltsseite auf `flex: 3` setzen. Dies bedeutet, dass sie eine `flex-basis` von `0` verwenden, aber diesen Raum mit unterschiedlichen Raten gemäß dem zugewiesenen `flex-grow`-Faktor verteilen. Die Flex-Eigenschaften, die wir verwenden, um dies zu tun, werden im Detail im Leitfaden [Steuern von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) beschrieben.

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Das Medienobjekt umdrehen

Um die Darstellung des Medienobjekts zu wechseln und das Bild rechts und den Inhalt links zu haben, setzen wir die `flex-direction`-Eigenschaft auf `row-reverse`.

In diesem Beispiel haben wir eine `flipped`-Klasse neben der `media`-Klasse hinzugefügt. Entfernen Sie die Klasse aus dem HTML, um zu sehen, wie sich die Darstellung ändert.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}

## Formularelemente

Flexbox ist besonders nützlich, wenn es darum geht, Formularelemente zu gestalten. Formulare haben mehrere kleine Elemente, die wir typischerweise miteinander ausrichten möchten. Ein häufiges Muster ist ein Paar aus {{htmlelement("label")}} und {{htmlelement("input")}} kombiniert mit einem {{htmlelement("button")}}, vielleicht für ein Suchformular oder ein Newsletter-Anmeldeformular, bei dem Sie möchten, dass Ihr Besucher seine E-Mail-Adresse eingibt.

Flexbox macht dieses Layout leicht erreichbar. Der `<label>`, `<input>` und `<button>` sind in einem Wrapper enthalten, der auf `display: flex` gesetzt ist. Die Flex-Eigenschaften erlauben dem `<input>`-Feld zu wachsen, während der Button und das Label nicht wachsen. Das Texteingabefeld wird je nach verfügbarem Platz wachsen und schrumpfen.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}

Solche Muster können es viel einfacher machen, eine Bibliothek von Formularelementen für Ihr Design zu erstellen, die es leicht macht, zusätzliche Elemente hinzuzufügen. Sie nutzen die Flexibilität von Flexbox, indem Sie Elemente mischen, die nicht wachsen können, mit denen, die es können.

## Fazit

Beim Erkunden der oben genannten Muster haben Sie hoffentlich begonnen zu verstehen, wie Sie die beste Möglichkeit finden, Flexbox zu verwenden, um das gewünschte Ergebnis zu erzielen. Oft haben Sie mehr als eine Wahl. Mischen Sie Elemente, die sich nicht strecken können, mit solchen, die dies können, verwenden Sie den Inhalt, um die Größe zu bestimmen, oder lassen Sie Flexbox den Raum proportional teilen. Es liegt an Ihnen.

Denken Sie darüber nach, wie Sie den vorhandenen Inhalt am besten präsentieren können, und sehen Sie dann, wie Flexbox oder andere Layout-Methoden Ihnen dabei helfen können, dies zu erreichen.
