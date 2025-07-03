---
title: "Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen"
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
> Wenn ein Fehler auftritt, wird er im Ergebnispanel auf der Seite protokolliert oder in der JavaScript-Konsole des Browsers angezeigt, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingte Anweisungen 1

In dieser Aufgabe werden Ihnen zwei Variablen zur Verfügung gestellt:

- `season` — enthält einen String, der angibt, welche Jahreszeit aktuell ist.
- `response` — beginnt mit nicht initialisiert, wird später jedoch verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird.

Wir möchten, dass Sie eine bedingte Anweisung erstellen, die überprüft, ob `season` den String "summer" enthält, und wenn ja, `response` einen String zuweist, der dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Andernfalls sollte `response` einen generischen String zuweisen, der dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.

Zum Abschluss sollten Sie einen weiteren Test hinzufügen, der überprüft, ob `season` den String "winter" enthält, und wieder einen passenden String zu `response` zuweist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 2

Für diese Aufgabe erhalten Sie drei Variablen:

- `machineActive` — enthält einen Indikator, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`)
- `score` — enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — beginnt mit nicht initialisiert, wird später jedoch verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist und eine Nachricht in die `response`-Variable einfügt, wenn sie nicht eingeschaltet ist, die den Benutzer auffordert, die Maschine einzuschalten.

Innerhalb des ersten `if...else` müssen Sie ein weiteres verschachteltes `if...else` erstellen, das je nach Wert der Punktzahl passende Nachrichten in die `response`-Variable einfügt — wenn die Maschine eingeschaltet ist. Die verschiedenen Bedingungstests (und resultierenden Antworten) sind wie folgt:

- Punktzahl von weniger als 0 oder mehr als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
- Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — totaler Fehlschlag!"
- Punktzahl von 20 bis 39 — "Sie wissen ein paar Dinge, aber es ist eine ziemlich schlechte Punktzahl. Verbesserung nötig."
- Punktzahl von 40 bis 69 — "Das war eine passable Leistung, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich aus."
- Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Ist das echt?"

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu ändern, um zu sehen, ob es funktioniert.
Bitte beachten Sie, dass die Aussage `Your score is __` auf dem Bildschirm bleibt, unabhängig vom Wert von `machineActive`.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 3

Für die letzte Aufgabe erhalten Sie vier Variablen:

- `machineActive` — enthält einen Indikator, ob die Anmeldemaschine eingeschaltet ist oder nicht (`true`/`false`).
- `pwd` — enthält das Anmeldepasswort des Benutzers.
- `machineResult` — beginnt mit nicht initialisiert, wird später jedoch verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird und dem Benutzer mitteilt, ob die Maschine eingeschaltet ist.
- `pwdResult` — beginnt mit nicht initialisiert, wird später jedoch verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird und den Benutzer darüber informiert, ob sein Anmeldeversuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist und eine Nachricht in die `machineResult`-Variable einfügt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.

Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung ausgeführt wird, die überprüft, ob `pwd` gleich `cheese` ist. Wenn ja, sollte ein String zu `pwdResult` zugewiesen werden, der den Benutzer darüber informiert, dass er sich erfolgreich angemeldet hat. Wenn nicht, sollte ein anderer String zu `pwdResult` zugewiesen werden, der den Benutzer darüber informiert, dass sein Anmeldeversuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, ohne eine `if...else`-Struktur zu verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel neu zu erstellen:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder einem Online-Editor zu arbeiten.
