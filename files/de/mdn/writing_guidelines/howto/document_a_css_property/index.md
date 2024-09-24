---
title: Dokumentation einer CSS-Eigenschaft
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Da sich die [CSS](/de/docs/Web/CSS)-Standards weiterentwickeln, werden ständig neue Eigenschaften hinzugefügt. Das [CSS Reference](/de/docs/Web/CSS/Reference) auf den MDN Web Docs muss mit diesen Entwicklungen aktuell gehalten werden. Dieser Artikel bietet eine Schritt-für-Schritt-Anleitung zum Erstellen einer CSS-Eigenschaftsreferenzseite.

Jede CSS-Eigenschaftsreferenzseite folgt der gleichen Struktur. Dies hilft den Lesern, Informationen leichter zu finden, insbesondere nachdem sie mit dem Standardformat der Referenzseiten vertraut sind.

## Schritt 1 — Bestimmen Sie die zu dokumentierende Eigenschaft

Zunächst müssen Sie die CSS-Eigenschaft finden, die Sie dokumentieren möchten. Möglicherweise haben Sie bemerkt, dass eine Seite fehlt, oder Sie haben fehlende Inhalte in unserer [Liste von Problemen](https://github.com/mdn/content/issues) gemeldet gesehen. Für Details über die CSS-Eigenschaft müssen Sie eine relevante Spezifikation dafür finden (z. B. eine [W3C-Spezifikation](https://www.w3.org/Style/CSS/) oder einen Fehlerbericht über eine nicht standardisierte Eigenschaft, die in Rendering-Engines wie Gecko oder Blink verwendet wird).

> [!NOTE]
> Bei Verwendung einer W3C-Spezifikation sollten Sie immer den **Editor's Draft** verwenden (achten Sie auf das rote Banner auf der linken Seite) und nicht auf eine veröffentlichte Version (z. B. Working Draft). Der Editor's Draft ist der endgültigen Version immer näher!

Wenn die Implementierung und die Spezifikation voneinander abweichen, können Sie dies gerne im Implementierungsfehler erwähnen. Eine der folgenden Situationen ist möglich:

- Es könnte ein Fehler in der Implementierung sein (und ein Folgefehler wird gemeldet).
- Es könnte eine Verzögerung bei der Veröffentlichung einer neuen Spezifikation vorliegen.
- Es könnte ein Fehler in der Spezifikation sein (in diesem Fall lohnt es sich, einen Spezifikationsfehler zu melden).

## Schritt 2 — Überprüfen Sie die Datenbank der CSS-Eigenschaften

Mehrere Merkmale einer CSS-Eigenschaft, wie z. B. ihre Syntax oder ob sie animiert werden kann, werden auf mehreren Seiten erwähnt und sind daher in einer ad-hoc-Datenbank gespeichert. Makros, die Sie auf der Seite verwenden, benötigen Informationen über die Eigenschaft, die dort gespeichert sind. Beginnen Sie also damit, [zu überprüfen, ob diese Informationen vorhanden sind](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Schritt 3 — Erstellen Sie die CSS-Eigenschaftsseite

Vorbereitungen abgeschlossen! Jetzt können wir die eigentliche CSS-Eigenschaftsseite hinzufügen. Der einfachste Weg, eine neue CSS-Eigenschaftsseite zu erstellen, besteht darin, den Inhalt einer bestehenden CSS-Eigenschaftsseite zu kopieren und für die neue Eigenschaft zu bearbeiten. Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem Leitfaden [wie man eine Seite erstellt](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

Wenn Sie eine Referenzseite erstellen, sollten Sie _Beispiele_ hinzufügen. Um dies zu tun, folgen Sie diesem [Tutorial über Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples). Denken Sie daran, dass die Eigenschaftsseite, die Sie erstellen, sich auf eine einzige Eigenschaft bezieht. Die von Ihnen hinzugefügten Beispiele müssen also zeigen, wie diese Eigenschaft isoliert funktioniert, nicht wie die gesamte Spezifikation verwendet wird. Daher sollten Beispiele für die `list-style-type`-Eigenschaft die Ergebnisse mit verschiedenen Werten für die Eigenschaft zeigen, nicht wie sie mit anderen Eigenschaften, Pseudoklassen oder Pseudoelementen kombiniert werden, um schöne Effekte zu erzielen. Tutorials und Anleitungen können geschrieben werden, um mehr zu zeigen.

## Schritt 4 — Lassen Sie den Inhalt überprüfen

Nachdem Sie die Eigenschaftsseite erstellt haben, reichen Sie diese als Pull Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zur Überprüfung Ihrer Seite zugewiesen.
