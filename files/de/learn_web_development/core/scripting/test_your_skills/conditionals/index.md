---
title: "Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen"
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: 79f1568f8916bd2fa58653f37cad2e66e746f12f
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Sollte ein Fehler auftreten, wird er im Ergebnispanel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen weiterzuhelfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingte Anweisungen 1

In dieser Aufgabe stehen Ihnen zwei Variablen zur Verfügung:

- `season` — enthält einen String, der angibt, welche Jahreszeit gerade ist.
- `response` — beginnt nicht initialisiert, wird später jedoch verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird.

Wir möchten, dass Sie eine Bedingung erstellen, die überprüft, ob `season` den String "summer" enthält, und wenn ja, `response` einen String zuweist, der dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Falls nicht, sollte `response` einen generischen String zugewiesen bekommen, der dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.

Zum Abschluss sollten Sie einen weiteren Test hinzufügen, der überprüft, ob `season` den String "winter" enthält, und ebenfalls `response` einen entsprechenden String zuweist.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 2

Für diese Aufgabe werden Ihnen drei Variablen gegeben:

- `machineActive` — enthält einen Indikator dafür, ob der Anrufbeantworter ein- oder ausgeschaltet ist (`true`/`false`).
- `score` — enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — beginnt nicht initialisiert, wird später jedoch verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die `response`-Variable setzt, wenn sie nicht eingeschaltet ist, um den Benutzer aufzufordern, die Maschine einzuschalten.

Innerhalb des ersten `if...else` sollten Sie ein weiteres `if...else` verschachteln, das passende Nachrichten in die `response`-Variable setzt, abhängig vom Wert der Punktzahl — vorausgesetzt, die Maschine ist eingeschaltet. Die verschiedenen bedingten Tests (und die daraus resultierenden Antworten) sind wie folgt:

- Punktzahl von weniger als 0 oder mehr als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
- Punktzahl von 0 bis 19 — "Das war eine furchtbare Punktzahl — totaler Misserfolg!"
- Punktzahl von 20 bis 39 — "Sie wissen ein paar Dinge, aber es ist eine ziemlich schlechte Punktzahl. Verbesserungsbedürftig."
- Punktzahl von 40 bis 69 — "Sie haben einen passablen Job gemacht, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich aus."
- Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Ist das echt?"

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu reproduzieren. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu setzen, um zu sehen, ob es funktioniert. Bitte beachten Sie, dass die Aussage `Your score is __` auf dem Bildschirm verbleibt, unabhängig vom Wert von `machineActive`.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 3

Für die letzte Aufgabe stehen Ihnen vier Variablen zur Verfügung:

- `machineActive` — enthält einen Indikator, ob die Login-Maschine ein- oder ausgeschaltet ist (`true`/`false`).
- `pwd` — enthält das Login-Passwort des Benutzers.
- `machineResult` — beginnt nicht initialisiert, wird jedoch später verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird und dem Benutzer mitteilt, ob die Maschine ein- oder ausgeschaltet ist.
- `pwdResult` — beginnt nicht initialisiert, wird jedoch später verwendet, um eine Antwort zu speichern, die im Ausgabepanel angezeigt wird und dem Benutzer mitteilt, ob sein Loginversuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die `machineResult`-Variable setzt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.

Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung überprüft, ob das `pwd` gleich `cheese` ist. Falls ja, sollte ein String an `pwdResult` zugewiesen werden, der dem Benutzer mitteilt, dass er sich erfolgreich eingeloggt hat. Andernfalls sollte ein anderer String an `pwdResult` zugewiesen werden, der dem Benutzer mitteilt, dass sein Loginversuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, unter Verwendung von etwas, das keine `if...else`-Struktur ist.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel zu reproduzieren:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
