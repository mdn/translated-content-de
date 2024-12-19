---
title: "Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling"
slug: Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Das Ziel dieses Fertigkeitstests besteht darin, zu beurteilen, ob Sie unsere Artikel zu [Erweitertes Formstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich an uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Fortgeschrittenes Formstyling 1

Bei unseren ersten Aufgaben zum fortgeschrittenen Styling möchten wir, dass Sie ein Suchfeld erstellen, das in allen Browsern möglichst konsistent ist — eine schwierigere Aufgabe als bei Standard-Textfeldern, selbst in modernen Browsern.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Versuchen Sie zunächst, dem Suchfeld eine konsistente Breite, Höhe, Polsterung und Rahmenfarbe über alle Browser hinweg zu geben.
2. Sie werden feststellen, dass einige Browser bezüglich der Höhe des Formularelements nicht wie erwartet funktionieren. Dies liegt daran, dass in einigen Fällen native OS-Stile verwendet werden. Wie können Sie diese nativen Stile entfernen?
3. Sobald Sie die nativen Stile entfernt haben, müssen Sie ein Merkmal wieder hinzufügen, das ursprünglich dafür gesorgt hat, dass das Erscheinungsbild erhalten bleibt. Wie machen Sie das?
4. Ein weiteres Problem, das bei verschiedenen Browsern (insbesondere bei Safari) uneinheitlich ist, ist die Position der standardmäßigen blauen Fokusumrandung. Wie können Sie diese entfernen?
5. Es gibt ein wesentliches Problem, wenn die blaue Fokusumrandung einfach entfernt wird. Was ist es? Können Sie eine Art Styling hinzufügen, damit Benutzer erkennen können, wann das Suchfeld aktiviert oder fokussiert ist?
6. Ein weiteres typisches Merkmal eines Suchfeldes ist ein Lupensymbol. Wir haben Ihnen eines im selben Verzeichnis wie unsere HTML-Dateien zur Verfügung gestellt — siehe [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) — sowie ein `<div>`-Element nach dem Suchfeld, um es zu befestigen, falls Sie es benötigen. Können Sie eine sinnvolle Möglichkeit finden, es zu befestigen, und können Sie CSS verwenden, um es rechts neben dem Suchfeld zu platzieren und vertikal auszurichten?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formstyling 2

In unserer nächsten Aufgabe stellen wir Ihnen ein Set mit drei Optionsfeldern zur Verfügung. Wir möchten, dass Sie ihnen ein benutzerdefiniertes Styling geben.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Entfernen Sie zunächst deren Standardstil.
2. Geben Sie den Optionsfeldern als Nächstes einen angemessenen Basisstil – den Stil, den sie beim ersten Laden der Seite haben. Dies kann alles sein, was Ihnen gefällt, aber Sie möchten wahrscheinlich eine Breite und Höhe (zwischen etwa 18 und 24 Pixel), sowie eine dezente Rahmen- und/oder Hintergrundfarbe festlegen.
3. Geben Sie den Optionsfeldern nun einen anderen Stil, wenn sie ausgewählt sind.
4. Richten Sie die Optionsfelder ordentlich an den Beschriftungen aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formstyling 3

In unserer letzten Aufgabe dieser Bewertungsreihe stellen wir Ihnen ein Feedback-Formular zur Verfügung, das bereits schön gestaltet ist — Sie haben bereits etwas Ähnliches gesehen, wenn Sie unseren Artikel [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) durchgearbeitet haben, und jetzt möchten wir, dass Sie Ihre eigene Lösung entwickeln.

Was wir von Ihnen möchten, ist, einige fortgeschrittene Pseudoklassen zu verwenden, um einige nützliche Indikatoren für die Gültigkeit bereitzustellen.

1. Zunächst möchten wir, dass Sie spezifisches Styling bereitstellen, um visuell anzuzeigen, welche Eingaben ausgefüllt werden müssen — sie dürfen nicht leer sein.
2. Zweitens möchten wir, dass Sie einen nützlichen visuellen Indikator bereitstellen, ob die in jede Eingabe eingegebenen Daten gültig sind oder nicht.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
