---
title: "Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingte Anweisungen 1

In dieser Aufgabe werden Ihnen zwei Variablen zur Verfügung gestellt:

- `season` — enthält einen String, der sagt, welche Jahreszeit gerade ist.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel gedruckt wird.

Wir möchten, dass Sie eine Bedingung erstellen, die überprüft, ob `season` den String "summer" enthält, und wenn ja, einen String zu `response` zuweisen, der dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Wenn nicht, sollte ein allgemeiner String zu `response` zugewiesen werden, der dem Benutzer sagt, dass wir nicht wissen, welche Jahreszeit es ist.

Zum Abschluss sollten Sie dann einen weiteren Test hinzufügen, der überprüft, ob `season` den String "winter" enthält und erneut einen passenden String zu `response` zuweist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 2

Für diese Aufgabe werden Ihnen drei Variablen gegeben:

- `machineActive` — enthält einen Indikator dafür, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`)
- `score` — Enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel gedruckt wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die `response`-Variable einfügt, wenn sie nicht eingeschaltet ist, um dem Benutzer zu sagen, dass er die Maschine einschalten soll.

Innerhalb des ersten `if...else` müssen Sie eine weitere `if...else` verschachteln, die je nach Wert der Punktzahl passende Nachrichten in die `response`-Variable einfügt — wenn die Maschine eingeschaltet ist. Die verschiedenen bedingten Tests (und die resultierenden Antworten) sind wie folgt:

- Punktzahl von weniger als 0 oder mehr als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
- Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — totaler Fehlschlag!"
- Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber das ist eine ziemlich schlechte Punktzahl. Verbesserungsbedürftig."
- Punktzahl von 40 bis 69 — "Sie haben eine passable Arbeit geleistet, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen wirklich Ihre Sachen."
- Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Sind Sie echt?"

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu ändern, um zu sehen, ob es funktioniert.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 3

Für die letzte Aufgabe werden Ihnen vier Variablen gegeben:

- `machineActive` — enthält einen Indikator dafür, ob die Login-Maschine eingeschaltet ist oder nicht (`true`/`false`).
- `pwd` — Enthält das Login-Passwort des Benutzers.
- `machineResult` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel gedruckt wird und dem Benutzer mitteilt, ob die Maschine eingeschaltet ist.
- `pwdResult` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabepanel gedruckt wird und dem Benutzer mitteilt, ob sein Login-Versuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist und eine Nachricht in die `machineResult`-Variable einfügt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.

Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung ausgeführt wird, die überprüft, ob das `pwd` gleich `cheese` ist. Wenn ja, sollte es einen String zu `pwdResult` zuweisen, der dem Benutzer mitteilt, dass der Login erfolgreich war. Wenn nicht, sollte es einen anderen String zu `pwdResult` zuweisen, der dem Benutzer mitteilt, dass der Login-Versuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, indem Sie etwas verwenden, das keine `if...else`-Struktur ist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
