---
title: "Testen Sie Ihre Fähigkeiten: Conditionals"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Conditionals 1

In dieser Aufgabe werden Ihnen zwei Variablen bereitgestellt:

- `season` — enthält einen String, der angibt, welche Jahreszeit aktuell ist.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird.

Wir möchten, dass Sie eine Bedingung erstellen, die prüft, ob `season` den String "summer" enthält, und wenn ja, einen String an `response` zuweist, der dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Wenn nicht, sollte ein generischer String an `response` zugewiesen werden, der dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.

Um die Aufgabe abzuschließen, sollten Sie dann einen weiteren Test hinzufügen, der prüft, ob `season` den String "winter" enthält, und wiederum einen passenden String an `response` zuweist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Conditionals 2

Für diese Aufgabe bekommen Sie drei Variablen:

- `machineActive` — enthält einen Indikator, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`)
- `score` — enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingegeben, der eine Antwort liefert, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `response` setzt, wenn sie nicht eingeschaltet ist, die dem Benutzer mitteilt, die Maschine einzuschalten.

Innerhalb der ersten `if...else` müssen Sie eine weitere `if...else`-Struktur verschachteln, die je nach Wert von `score` entsprechende Nachrichten in die Variable `response` setzt — wenn die Maschine eingeschaltet ist. Die verschiedenen bedingten Tests (und die entsprechenden Antworten) sind wie folgt:

- Punktzahl von weniger als 0 oder mehr als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
- Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — totaler Ausfall!"
- Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber es ist eine ziemlich schlechte Punktzahl. Verbesserungsbedarf."
- Punktzahl von 40 bis 69 — "Sie haben eine passable Arbeit gemacht, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich aus."
- Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Meinen Sie das ernst?"

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu ändern, um zu sehen, ob es funktioniert.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Conditionals 3

Für die letzte Aufgabe werden Ihnen vier Variablen bereitgestellt:

- `machineActive` — enthält einen Indikator, ob die Login-Maschine eingeschaltet ist oder nicht (`true`/`false`).
- `pwd` — enthält das Passwort des Benutzers.
- `machineResult` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird und dem Benutzer mitteilt, ob die Maschine eingeschaltet ist.
- `pwdResult` — beginnt nicht initialisiert, wird aber später verwendet, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird und den Benutzer darüber informiert, ob sein Loginversuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `machineResult` setzt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.

Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung ausgeführt wird, die überprüft, ob die `pwd` gleich `cheese` ist. Wenn ja, sollte ein String an `pwdResult` zugewiesen werden, der dem Benutzer mitteilt, dass er sich erfolgreich angemeldet hat. Andernfalls sollte ein anderer String an `pwdResult` zugewiesen werden, der dem Benutzer mitteilt, dass sein Loginversuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, ohne eine `if...else`-Struktur zu verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
