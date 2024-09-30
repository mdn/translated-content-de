---
title: In flow und out of flow
slug: Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) erklärte das Block- und Inline-Layout im normalen Fluss. Alle Elemente, die sich im Fluss befinden, werden mit dieser Methode layoutet.

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind Blocklevel-Elemente, das `strong`-Element ist inline. Die Liste wird mit Flexbox dargestellt, um die Elemente in einer Reihe anzuordnen, sie nimmt jedoch ebenfalls am Block- und Inline-Layout teil – der Container hat eine äußere `display`-Art von `block`.

{{EmbedGHLiveSample("css-examples/flow/in-flow/in-flow.html", '100%', 800)}}

Alle Elemente können als im Fluss befindlich betrachtet werden. Sie erscheinen auf der Seite in der Reihenfolge, in der sie sich im Quellcode befinden.

## Ein Element aus dem Fluss nehmen

Alle Elemente befinden sich im Fluss, abgesehen von:

- gefloateten Elementen
- Elementen mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise wirkt)
- dem Wurzelelement (`html`)

Out of flow-Elemente erzeugen einen neuen Block Formatting Context (BFC) und daher kann alles innerhalb von ihnen als ein Mini-Layout betrachtet werden, das vom Rest der Seite getrennt ist. Das Wurzelelement befindet sich daher außerhalb des Flusses, als Container für alles in unserem Dokument, und stellt den Block Formatting Context für das Dokument bereit.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` wird nach links gefloatet. Das `div` ist nun aus dem Fluss.

Als Float wird es zunächst entsprechend seiner Position im normalen Fluss layoutet, dann aus dem Fluss genommen und so weit wie möglich nach links verschoben.

{{EmbedGHLiveSample("css-examples/flow/in-flow/float.html", '100%', 800)}}

Sie können sehen, dass die Hintergrundfarbe des darauf folgenden Absatzes darunter läuft, es sind nur die Linienboxen dieses Absatzes, die verkürzt wurden, um den Effekt zu erzielen, den Inhalt um das Float herumzuwickeln. Die Box unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Aus diesem Grund müssen Sie, um Platz um ein gefloatetes Element zu schaffen, einen Rand zum Element hinzufügen, um die Linienboxen davon abzudrängen. Sie können nichts auf den folgenden im Fluss befindlichen Inhalt anwenden, um dies zu erreichen.

### Absolute Positionierung

Einem Element `position: absolute` oder `position: fixed` zu geben, nimmt es aus dem Fluss, und jeglicher Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente, das zweite Element hat `position: absolute`, mit den Offset-Werten `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentenfluss entfernt.

{{EmbedGHLiveSample("css-examples/flow/in-flow/abspos.html", '100%', 700)}}

Die Verwendung von `position: fixed` entfernt das Element ebenfalls aus dem Fluss, jedoch basieren die Offsets auf dem Viewport anstelle des umgebenden Blocks.

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie die Möglichkeit von sich überlappendem Inhalt managen. Out of flow bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass dieses Element existiert, und nicht darauf reagieren werden.

### Relative Positionierung und Fluss

Wenn Sie einem Element eine relative Positionierung mit `position: relative` geben, bleibt es im Fluss. Sie können jedoch dann die Offset-Werte verwenden, um es zu verschieben. Der Platz, den es im normalen Fluss eingenommen hätte, bleibt jedoch reserviert, wie Sie im untenstehenden Beispiel sehen können.

{{EmbedGHLiveSample("css-examples/flow/in-flow/relative.html", '100%', 800)}}

Wenn Sie etwas unternehmen, um ein Element aus seiner normalen Flussposition zu entfernen oder zu verschieben, müssen Sie damit rechnen, einige Anpassungen am Inhalt und dem Inhalt darum herum vorzunehmen, um Überlappungen zu vermeiden. Egal, ob das das Freimachen von Floats oder das Sicherstellen ist, dass ein Element mit `position: absolute` nicht auf anderem Inhalt liegt. Aus diesem Grund sollten Methoden, die Elemente aus dem Fluss nehmen, mit einem Verständnis der Auswirkungen eingesetzt werden.

## Zusammenfassung

In diesem Leitfaden haben wir die Möglichkeiten behandelt, ein Element aus dem Fluss zu nehmen, um einige sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir ein verwandtes Thema betrachten, nämlich das Erstellen eines [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context), in [Formatting Contexts Explained](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts).

## Siehe auch

- [Positioning](/de/docs/Learn/CSS/CSS_layout/Positioning) im CSS Layout Lernbereich
