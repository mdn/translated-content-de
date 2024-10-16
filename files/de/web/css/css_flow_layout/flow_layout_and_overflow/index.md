---
title: Flusslayout und Überlauf
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_overflow
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{CSSRef}}

Wenn es mehr Inhalt gibt, als in einen Container passt, tritt eine Überlaufsituation auf. Das Verständnis darüber, wie Überlauf funktioniert, ist wichtig, um mit jedem Element mit begrenzter Größe in CSS umzugehen. In diesem Leitfaden wird erklärt, wie Überlauf funktioniert, wenn mit normalem Fluss gearbeitet wird.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann erheblichen Inhalt in die Box hinzuzufügen, erzeugt ein grundlegendes Überlaufbeispiel:

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

Der Inhalt gelangt in die Box. Sobald die Box gefüllt ist, läuft der Inhalt auf sichtbare Weise über und zeigt den Inhalt außerhalb der Box und möglicherweise unter darauffolgendem Inhalt an. Das Attribut, das steuert, wie sich der Überlauf verhält, ist das [`overflow`](/de/docs/Web/CSS/overflow)-Attribut, das einen Anfangswert von `visible` hat. Daher können wir den Überlauf-Inhalt sehen.

## Steuerung des Überlaufs

Es gibt andere Werte, die steuern, wie sich Überlauf-Inhalt verhält. Um überlaufenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass einige Ihrer Inhalte nicht sichtbar sind.

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

Die Verwendung des Wertes `scroll` enthält den Inhalt in seiner Box und fügt Bildlaufleisten hinzu, um die Ansicht zu ermöglichen. Bildlaufleisten werden auch hinzugefügt, wenn der Inhalt in die Box passt.

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

Die Verwendung des Wertes `auto` zeigt den Inhalt ohne Bildlaufleisten an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Bildlaufleisten hinzugefügt. Im Vergleich zum nächsten Beispiel mit dem Beispiel für `overflow: scroll` sollten Sie sehen, dass `overflow scroll` horizontale und vertikale Bildlaufleisten hat, obwohl es nur vertikales Scrollen braucht. Das `auto`-Beispiel unten fügt nur die Bildlaufleiste in der Richtung hinzu, in die wir scrollen müssen.

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

Wie wir bereits gelernt haben, führt die Verwendung eines dieser Werte, außer dem Standardwert `visible`, zu einem neuen Block-Formatierungskontext.

> [!NOTE]
> In dem [Working Draft von Overflow Level 3](https://www.w3.org/TR/css-overflow-3/) gibt es einen zusätzlichen Wert `overflow: clip`. Dies verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen, die Box wird nicht scrollbar. Darüber hinaus wird kein Block-Formatierungskontext erstellt.

Das Überlauf-Attribut ist tatsächlich eine Kurzform für die Eigenschaften [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y). Wenn Sie nur einen Wert für den Überlauf angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch auch beide Werte angeben, wobei der erste Wert für `overflow-x` und damit die horizontale Richtung verwendet wird, und der zweite Wert für `overflow-y` und die vertikale Richtung. Im unten stehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Bildlaufleiste nicht bekommen.

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## Flussbezogene Eigenschaften

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes) haben wir uns die neueren Eigenschaften `block-size` und `inline-size` angesehen, die mehr Sinn ergeben, wenn man mit verschiedenen Schreibmodi arbeitet, als unser Layout an die physischen Abmessungen des Bildschirms zu binden. Das Level 3 Overflow-Modul enthält auch flussbezogene Eigenschaften für den Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

Diese Eigenschaften haben derzeit keine Implementierungen in Browsern, daher müssen Sie im Moment die physischen Eigenschaften verwenden und für Ihren Schreibmodus anpassen.

## Überlauf anzeigen

In der Level 3 Overflow-Spezifikation haben wir einige Eigenschaften, die dazu beitragen können, das Erscheinungsbild von Inhalten in einer Überlaufsituation zu verbessern.

### Inline-Achsenüberlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft befasst sich mit Text, der in der Inline-Richtung überläuft. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft, dies ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, das durch ein besseres Zeichen für die verwendete Sprache oder den Schreibmodus ersetzt werden kann.

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### Block-Achsenüberlauf

Es gibt auch einen Vorschlag für eine `block-overflow`-Eigenschaft, obwohl der Name zum Zeitpunkt der Erstellung dieses Artikels noch zur Diskussion steht. Dieser Vorschlag würde das Hinzufügen eines Auslassungszeichens ermöglichen, wenn Text in der Blockdimension überläuft.

Dies ist nützlich in der Situation, in der Sie eine Liste von Artikeln haben, die Sie in Boxen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen. Für den Leser ist es möglicherweise nicht offensichtlich, dass es mehr Inhalte gibt, auf die er durch Klicken auf die Box oder den Titel zugreifen kann. Ein Auslassungszeichen zeigt klar an, dass es mehr Inhalte gibt. Die Spezifikation würde erlauben, eine Zeichenkette von Inhalten oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Egal, ob Sie sich in kontinuierlichen Medien im Web oder in einem Seitenmedienformat wie Druck oder EPUB befinden, das Verständnis, wie Inhalte überlaufen, ist hilfreich, wenn Sie mit jedweder Layoutmethode umgehen. Durch das Verständnis, wie Überlauf im normalen Fluss funktioniert, sollte es Ihnen leichter fallen, die Auswirkungen von Überlauf-Inhalten in Layoutmethoden wie Grid und Flexbox zu verstehen.
