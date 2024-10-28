---
title: "Testen Sie Ihre Fähigkeiten: Bedingungen"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals
l10n:
  sourceCommit: 7081ee43d15bbba213f8c8a0e03e46ba17c96d09
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie unseren [Entscheidungen in Ihrem Code treffen – Bedingungsanweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals) Artikel verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingungen 1

In dieser Aufgabe werden Ihnen zwei Variablen bereitgestellt:

- `season` — enthält einen String, der angibt, in welcher Jahreszeit wir uns befinden.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich gedruckt wird.

Wir möchten, dass Sie eine Bedingung erstellen, die überprüft, ob `season` den String "summer" enthält, und falls ja, `response` einen String zuweist, der dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Falls nicht, sollte ein allgemeiner String `response` zugewiesen werden, der dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.

Zum Abschluss sollten Sie einen weiteren Test hinzufügen, der überprüft, ob `season` den String "winter" enthält, und erneut `response` einen passenden String zuweist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingungen 2

Für diese Aufgabe werden Ihnen drei Variablen gegeben:

- `machineActive` — enthält einen Indikator dafür, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`)
- `score` — enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich gedruckt wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die `response`-Variable einfügt, falls sie es nicht ist, die dem Benutzer sagt, er solle die Maschine einschalten.

Innerhalb der ersten `if...else` müssen Sie ein weiteres `if...else` verschachteln, das je nach Wert von `score` passende Nachrichten in die `response`-Variable einfügt — wenn die Maschine eingeschaltet ist. Die verschiedenen Bedingungstests (und resultierende Antworten) sind wie folgt:

- Punktzahl von weniger als 0 oder mehr als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
- Punktzahl von 0 bis 19 — "Das war ein furchtbares Ergebnis — totaler Misserfolg!"
- Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber es ist ein ziemlich schlechtes Ergebnis. Verbesserungsbedarf."
- Punktzahl von 40 bis 69 — "Sie haben eine akzeptable Leistung erbracht, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist ein tolles Ergebnis, Sie wissen wirklich Bescheid."
- Punktzahl von 90 bis 100 — "Was für ein erstaunliches Ergebnis! Haben Sie geschummelt? Sind Sie echt?"

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` in `true` zu ändern, um zu sehen, ob es funktioniert.
Bitte beachten Sie, dass die Aussage `Ihre Punktzahl ist __` auf dem Bildschirm verbleibt, unabhängig davon, wie der Wert von `machineActive` ist.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingungen 3

Für die letzte Aufgabe werden Ihnen vier Variablen gegeben:

- `machineActive` — enthält einen Indikator dafür, ob die Login-Maschine eingeschaltet ist oder nicht (`true`/`false`).
- `pwd` — enthält das Login-Passwort des Benutzers.
- `machineResult` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich gedruckt wird und dem Benutzer mitteilt, ob die Maschine eingeschaltet ist.
- `pwdResult` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich gedruckt wird und dem Benutzer mitteilt, ob sein Login-Versuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die `machineResult`-Variable einfügt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.

Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung ausgeführt wird, die überprüft, ob `pwd` gleich `cheese` ist. Falls ja, sollte ein String in `pwdResult` zugewiesen werden, der dem Benutzer mitteilt, dass er sich erfolgreich angemeldet hat. Falls nicht, sollte ein anderer String in `pwdResult` zugewiesen werden, der dem Benutzer mitteilt, dass sein Login-Versuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, indem Sie etwas verwenden, das keine `if...else`-Struktur ist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
