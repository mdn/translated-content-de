---
title: "Testen Sie Ihre Fähigkeiten: Erweitertes Styling"
slug: Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unsere Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Erweitertes Formularstyling 1

In unseren ersten erweiterten Styling-Aufgaben möchten wir, dass Sie ein Suchfeld in allen Browsern so konsistent wie möglich gestalten – eine kniffligere Aufgabe als bei Standard-Textfeldern, selbst in modernen Browsern.

Wir haben Ihnen bereits einen grundlegenden Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Geben Sie dem Suchfeld zunächst eine konsistente Breite, Höhe, Polsterung und Randfarbe in allen Browsern.
2. Sie werden feststellen, dass sich einige Browser bezüglich der Höhe des Formularelements nicht wie erwartet verhalten. Dies liegt daran, dass in einigen Fällen native OS-Styling verwendet wird. Wie kann man dieses native Styling entfernen?
3. Sobald Sie das native Styling entfernt haben, müssen Sie eine der Funktionen, die es bereitgestellt hat, wieder hinzufügen, um das ursprüngliche Aussehen und Gefühl zu erhalten. Wie machen Sie das?
4. Ein weiteres inkonsistentes Merkmal in verschiedenen Browsern (insbesondere bei Safari) ist die Position der standardmäßigen blauen Fokusumrandung. Wie kann man diese entfernen?
5. Es gibt ein großes Problem, wenn man die blaue Fokusumrandung einfach entfernt. Was ist es? Können Sie irgendeine Art von Styling hinzufügen, damit Benutzer erkennen können, wann das Suchfeld gehovt oder fokussiert wird?
6. Ein weiteres häufiges Merkmal eines Suchfelds ist ein Lupe-Symbol. Wir haben eines im selben Verzeichnis wie unsere HTML-Dateien zur Verfügung gestellt – siehe [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) – sowie ein `<div>`-Element nach dem Sucheingabefeld, um es bei Bedarf anzuhängen. Können Sie einen sinnvollen Weg finden, es anzuhängen, und können Sie CSS verwenden, um es rechts neben dem Suchfeld zu platzieren und vertikal auszurichten?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Erweitertes Formularstyling 2

In unserer nächsten Aufgabe stellen wir Ihnen ein Set von drei Auswahlknöpfen zur Verfügung. Wir möchten, dass Sie diesen eine benutzerdefinierte Gestaltung geben.

Wir haben Ihnen bereits einen grundlegenden Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Entfernen Sie zunächst deren Standard-Styling.
2. Geben Sie den Auswahlknöpfen anschließend ein angemessenes Basis-Styling – das Styling, das sie haben, wenn die Seite zum ersten Mal geladen wird. Dies kann beliebig sein, aber Sie möchten wahrscheinlich eine Breite und Höhe (von etwa 18 bis 24 Pixel) sowie eine dezente Rand- und/oder Hintergrundfarbe festlegen.
3. Geben Sie den Auswahlknöpfen nun ein anderes Styling, wenn sie ausgewählt sind.
4. Richten Sie die Auswahlknöpfe schön mit den Beschriftungen aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Erweitertes Formularstyling 3

In unserer letzten Aufgabe dieser Bewertungsreihe stellen wir Ihnen ein bereits schön gestaltetes Feedback-Formular zur Verfügung – etwas Ähnliches haben Sie bereits gesehen, wenn Sie unseren Artikel [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) durchgearbeitet haben, und nun möchten wir, dass Sie Ihre eigene Lösung entwickeln.

Was wir möchten, ist, dass Sie einige erweiterte Pseudoklassen verwenden, um nützliche Indikatoren für die Gültigkeit bereitzustellen.

1. Zuerst möchten wir, dass Sie ein spezifisches Styling bereitstellen, das visuell anzeigt, welche Eingaben ausgefüllt werden müssen – sie dürfen nicht leer bleiben.
2. Zweitens möchten wir, dass Sie einen nützlichen visuellen Indikator dafür bereitstellen, ob die in jede Eingabe eingegebenen Daten gültig sind oder nicht.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
