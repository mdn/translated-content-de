---
title: Im Fluss und aus dem Fluss
slug: Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) erklärte Block- und Inline-Layouts im normalen Fluss. Alle Elemente, die im Fluss sind, werden mit dieser Methode angeordnet.

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind Blocklevel-Elemente, das `strong`-Element ist inline. Die Liste wird mit Flexbox angezeigt, um die Elemente in einer Reihe anzuordnen, aber auch sie nimmt am Block- und Inline-Layout teil - der Container hat einen äußeren `display`-Typ von `block`.

{{EmbedGHLiveSample("css-examples/flow/in-flow/in-flow.html", '100%', 800)}}

Alle Elemente können als im Fluss betrachtet werden. Sie erscheinen auf der Seite in der Reihenfolge, in der sie im Quelltext stehen.

## Ein Element aus dem Fluss nehmen

Alle Elemente sind im Fluss, außer:

- gefloatete Elemente
- Elemente mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise wirkt)
- das Wurzelelement (`html`)

Elemente, die aus dem Fluss sind, erzeugen einen neuen Block Formatting Context (BFC) und daher kann alles innerhalb von ihnen als ein Mini-Layout betrachtet werden, das vom Rest der Seite getrennt ist. Das Wurzelelement ist deshalb aus dem Fluss, da es der Container für alles in unserem Dokument ist und den Block Formatting Context für das Dokument etabliert.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` ist nach links gefloatet. Das `div` ist jetzt aus dem Fluss.

Als Float wird es zuerst gemäß seiner Position im normalen Fluss angeordnet, dann aus dem Fluss genommen und so weit wie möglich nach links verschoben.

{{EmbedGHLiveSample("css-examples/flow/in-flow/float.html", '100%', 800)}}

Sie können die Hintergrundfarbe des folgenden Absatzes darunter sehen. Es sind nur die Zeilenboxen dieses Absatzes, die verkürzt wurden, um den Effekt des Umflussens des Inhalts um den Float zu erzielen. Die Box unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Aus diesem Grund müssen Sie, um Platz um ein gefloatetes Element zu schaffen, dem Element einen Rand hinzufügen, um die Zeilenboxen weg davon zu drücken. Sie können nichts auf den folgenden im Fluss befindlichen Inhalt anwenden, um das zu erreichen.

### Absolute Positionierung

Einem Element `position: absolute` oder `position: fixed` zuzuweisen, entfernt es aus dem Fluss, und jeder Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatzelemente, das zweite Element hat `position: absolute` mit den Offset-Werten `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentfluss entfernt.

{{EmbedGHLiveSample("css-examples/flow/in-flow/abspos.html", '100%', 700)}}

Die Verwendung von `position: fixed` entfernt das Element ebenfalls aus dem Fluss, jedoch basieren die Offsets auf dem Viewport anstatt auf dem enthaltenen Block.

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie die Möglichkeit des Überlappens von Inhalten verwalten. Aus dem Fluss zu sein bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass dieses Element existiert und nicht darauf reagieren werden.

### Relative Positionierung und Fluss

Wenn Sie einem Element mit `position: relative` relative Positionierung zuweisen, bleibt es im Fluss. Sie können jedoch die Offset-Werte verwenden, um es zu verschieben. Der Platz, den es im normalen Fluss eingenommen hätte, wird jedoch reserviert, wie Sie im folgenden Beispiel sehen können.

{{EmbedGHLiveSample("css-examples/flow/in-flow/relative.html", '100%', 800)}}

Wenn Sie etwas tun, um ein Element von seinem Platz im normalen Fluss zu entfernen oder zu verschieben, können Sie erwarten, dass Sie einige Vorkehrungen treffen müssen, um die Inhalte und die Inhalte darum herum zu verwalten, um Überlappungen zu verhindern. Ob das das Klären von Floats oder das Sicherstellen, dass ein Element mit `position: absolute` nicht auf anderen Inhalten liegt, beinhaltet. Aus diesem Grund sollten Methoden, die Elemente aus dem Fluss entfernen, mit Verständnis der Wirkung verwendet werden, die sie haben.

## Zusammenfassung

In diesem Leitfaden haben wir die Methoden behandelt, um ein Element aus dem Fluss zu nehmen, um sehr spezielle Arten von Positionierungen zu erreichen. Im nächsten Leitfaden werden wir uns mit einem verwandten Thema befassen, der Erstellung eines [Block Formatting Context](/de/docs/Web/CSS/CSS_display/Block_formatting_context), in [Formatting Contexts Explained](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts).

## Siehe auch

- [Positioning](/de/docs/Learn/CSS/CSS_layout/Positioning) im CSS Layout Lernbereich
