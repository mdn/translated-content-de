---
title: "Testen Sie Ihre Fähigkeiten: Erweitertes Styling"
short-title: Erweitertes Styling
slug: Learn_web_development/Extensions/Forms/Test_your_skills/Advanced_styling
l10n:
  sourceCommit: 93f54b6e1fdfef1375233abb265f101bd6866f99
---

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unsere Artikel [Erweitertes Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Erweitertes Formularstyling 1

In unseren ersten Aufgaben zum erweiterten Styling möchten wir, dass Sie ein Suchfeld so konsistent wie möglich über verschiedene Browser hinweg gestalten — eine kniffligere Aufgabe als bei Standard-Textfeldern, selbst in modernen Browsern.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Geben Sie dem Suchfeld zuerst eine konsistente Breite, Höhe, Abstände und Rahmenfarbe über alle Browser hinweg.
2. Sie werden feststellen, dass sich einige Browser hinsichtlich der Höhe des Formularelements nicht einheitlich verhalten. Dies liegt daran, dass in einigen Fällen das native Betriebssystem-Styling verwendet wird. Wie können Sie dieses native Styling entfernen?
3. Sobald Sie das native Styling entfernt haben, müssen Sie eines der Merkmale, das es bereitgestellt hat, wieder hinzufügen, um das ursprüngliche Aussehen und Gefühl beizubehalten. Wie machen Sie das?
4. Eine Sache, die über verschiedene Browser hinweg inkonsistent ist (besonders wenn man sich Safari ansieht), ist die Position des standardmäßigen blauen Fokusrahmens. Wie können Sie diesen entfernen?
5. Es gibt ein großes Problem, wenn Sie einfach nur den blauen Fokusrahmen entfernen. Was ist es? Können Sie eine Art von Styling hinzufügen, damit Benutzer erkennen können, wann das Suchfeld aktiviert oder fokussiert ist?
6. Eine weitere Sache, die oft ein Suchfeld kennzeichnet, ist ein Lupensymbol. Wir haben eines im selben Verzeichnis wie unsere HTML-Dateien verfügbar gemacht — siehe [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) — plus ein `<div>`-Element nach dem Suchfeld, um Ihnen bei der Befestigung zu helfen, falls Sie es benötigen. Können Sie eine sinnvolle Möglichkeit finden, es zu befestigen, und können Sie CSS verwenden, um es rechts neben dem Suchfeld zu platzieren und vertikal auszurichten?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Erweitertes Formularstyling 2

In unserer nächsten Aufgabe stellen wir Ihnen eine Reihe von drei Optionsfeldern zur Verfügung. Wir möchten, dass Sie ihnen ein benutzerdefiniertes Styling geben.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Entfernen Sie zuerst ihr Standardstyling.
2. Geben Sie den Optionsfeldern als Nächstes einen angemessenen Basisstil — den Stil, den sie haben, wenn die Seite zum ersten Mal geladen wird. Dies kann alles sein, was Ihnen gefällt, aber wahrscheinlich möchten Sie eine Breite und Höhe festlegen (zwischen 18 und 24 Pixeln), sowie eine subtile Rand- und/oder Hintergrundfarbe.
3. Geben Sie den Optionsfeldern nun einen anderen Stil, wenn sie ausgewählt sind.
4. Richten Sie die Optionsfelder ordentlich mit den Labels aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Erweitertes Formularstyling 3

In unserer letzten Aufgabe für diese Bewertungsreihe stellen wir Ihnen ein bereits schön gestaltetes Feedback-Formular zur Verfügung — Sie haben bereits etwas Ähnliches gesehen, wenn Sie unseren Artikel [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) durchgearbeitet haben, und nun möchten wir, dass Sie Ihre eigene Lösung entwickeln.

Wir möchten, dass Sie einige erweiterte Pseudoklassen verwenden, um nützliche Indikatoren für die Gültigkeit bereitzustellen.

1. Zuerst möchten wir, dass Sie einige spezifische Stylings bereitstellen, um visuell anzuzeigen, welche Eingaben ausgefüllt werden müssen — sie dürfen nicht leer bleiben.
2. Zweitens möchten wir, dass Sie einen nützlichen visuellen Indikator dafür bereitstellen, ob die in jede Eingabe eingegebenen Daten gültig sind oder nicht.

> [!CALLOUT]
>
> [Laden Sie den Startpunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
