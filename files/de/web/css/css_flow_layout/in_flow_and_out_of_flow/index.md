---
title: Im Fluss und aus dem Fluss
slug: Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Der [vorherige Leitfaden](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) erklärte die Block- und Inline-Layout im normalen Fluss. Alle Elemente, die im Fluss sind, werden mit dieser Methode angeordnet.

Das folgende Beispiel enthält eine Überschrift, einen Absatz, eine Liste und einen abschließenden Absatz, der ein `strong`-Element enthält. Die Überschrift und die Absätze sind Block-Level-Elemente, das `strong`-Element ist inline. Die Liste wird mit Flexbox angezeigt, um die Elemente in einer Reihe anzuordnen, jedoch nimmt sie auch am Block- und Inline-Layout teil - der Container hat einen äußeren `display`-Typ von `block`.

{{EmbedGHLiveSample("css-examples/flow/in-flow/in-flow.html", '100%', 800)}}

Alle diese Elemente kann man als im Fluss betrachten. Sie erscheinen auf der Seite in der Reihenfolge, wie sie im Quelltext stehen.

## Ein Element aus dem Fluss nehmen

Alle Elemente sind im Fluss außer:

- gefloatete Elemente
- Elemente mit `position: absolute` (einschließlich `position: fixed`, das auf die gleiche Weise funktioniert)
- das Wurzelelement (`html`)

Elemente außerhalb des Flusses erzeugen einen neuen Block-Formatierungskontext (BFC) und alles, was sich innerhalb von ihnen befindet, kann als ein Mini-Layout angesehen werden, getrennt vom Rest der Seite. Das Wurzelelement ist daher außerhalb des Flusses, da es der Container für alles in unserem Dokument ist und den Block-Formatierungskontext für das Dokument festlegt.

### Gefloatete Elemente

In diesem Beispiel gibt es ein `div` und dann zwei Absätze. Den Absätzen wurde eine Hintergrundfarbe hinzugefügt, und das `div` ist nach links gefloatet. Das `div` ist jetzt aus dem Fluss.

Als Float wird es zuerst gemäß seiner Position im normalen Fluss angeordnet, dann aus dem Fluss genommen und so weit wie möglich nach links verschoben.

{{EmbedGHLiveSample("css-examples/flow/in-flow/float.html", '100%', 800)}}

Sie sehen die Hintergrundfarbe des folgenden Absatzes darunter verlaufen, nur die Linienboxen dieses Absatzes wurden verkürzt, um den Effekt des Umfließens des Inhalts um den Float herum zu erzeugen. Die Box unseres Absatzes wird immer noch gemäß den Regeln des normalen Flusses angezeigt. Deshalb müssen Sie, um Platz um ein gefloatetes Element zu schaffen, dem Element einen Rand hinzufügen, um die Linienboxen von ihm wegzudrücken. Sie können nichts auf den nachfolgenden im Fluss befindlichen Inhalt anwenden, um dies zu erreichen.

### Absolute Positionierung

Wenn ein Element `position: absolute` oder `position: fixed` erhält, wird es aus dem Fluss entfernt, und der Platz, den es eingenommen hätte, wird entfernt. Im nächsten Beispiel habe ich drei Absatz-Elemente, das zweite Element hat `position: absolute`, mit Versatzwerten von `top: 30px` und `right: 30px`. Es wurde aus dem Dokumentenfluss entfernt.

{{EmbedGHLiveSample("css-examples/flow/in-flow/abspos.html", '100%', 700)}}

Die Verwendung von `position: fixed` entfernt das Element ebenfalls aus dem Fluss, jedoch basieren die Versätze auf dem Ansichtsfenster statt auf dem beinhaltenden Block.

Wenn Sie ein Element mit Positionierung aus dem Fluss nehmen, müssen Sie die Möglichkeit des Überlappens von Inhalten verwalten. Aus dem Fluss bedeutet im Wesentlichen, dass die anderen Elemente auf Ihrer Seite nicht mehr wissen, dass dieses Element existiert, und daher nicht darauf reagieren.

### Relative Positionierung und Fluss

Wenn Sie einem Element relative Positionierung mit `position: relative` geben, bleibt es im Fluss. Sie können dann jedoch die Versatzwerte verwenden, um es zu verschieben. Der Platz, den es in normalem Fluss eingenommen hätte, wird jedoch reserviert, wie Sie im folgenden Beispiel sehen können.

{{EmbedGHLiveSample("css-examples/flow/in-flow/relative.html", '100%', 800)}}

Wenn Sie etwas tun, um ein Element von seinem Platz zu entfernen oder zu verschieben, an dem es im normalen Fluss platziert wäre, müssen Sie mit der Verwaltung des Inhalts und des Inhaltsumfelds rechnen, um Überlappungen zu vermeiden. Ob das das Löschen von Floats umfasst oder sicherzustellen, dass ein Element mit `position: absolute` nicht über anderem Inhalt liegt. Aus diesem Grund sollten Methoden, die Elemente aus dem Fluss entfernen, mit einem Verständnis der Auswirkungen eingesetzt werden, die sie haben.

## Zusammenfassung

In diesem Leitfaden haben wir die Möglichkeiten behandelt, ein Element aus dem Fluss zu nehmen, um einige sehr spezifische Arten der Positionierung zu erreichen. Im nächsten Leitfaden werden wir ein verwandtes Thema untersuchen, die Erstellung eines [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context), in [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts).

## Siehe auch

- [Positioning](/de/docs/Learn/CSS/CSS_layout/Positioning) im Bereich CSS-Layout lernen
