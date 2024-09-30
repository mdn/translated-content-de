---
title: Anleitung zur Dokumentation einer CSS-Eigenschaft
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Da sich die [CSS](/de/docs/Web/CSS)-Standards weiterentwickeln, werden ständig neue Eigenschaften hinzugefügt. Das [CSS-Referenz](/de/docs/Web/CSS/Reference) auf MDN Web Docs muss mit diesen Entwicklungen aktuell gehalten werden. Dieser Artikel bietet eine Schritt-für-Schritt-Anleitung zum Erstellen einer Referenzseite für CSS-Eigenschaften.

Jede Referenzseite für CSS-Eigenschaften folgt der gleichen Struktur. Dies hilft den Lesern, Informationen leichter zu finden, insbesondere nachdem sie sich mit dem Standardformat der Referenzseite vertraut gemacht haben.

## Schritt 1 — Bestimmen Sie die zu dokumentierende Eigenschaft

Zuerst müssen Sie herausfinden, welche CSS-Eigenschaft Sie dokumentieren möchten. Sie haben vielleicht bemerkt, dass eine Seite fehlt, oder fehlende Inhalte in unserer [Problemliste](https://github.com/mdn/content/issues) gemeldet gesehen. Für Details über die CSS-Eigenschaft müssen Sie eine relevante Spezifikation dafür finden (z.B. eine [W3C-Spezifikation](https://www.w3.org/Style/CSS/), oder einen Fehlerbericht für eine nicht standardisierte Eigenschaft, die in Rendering-Engines wie Gecko oder Blink verwendet wird).

> [!NOTE]
> Verwenden Sie bei einer W3C-Spezifikation immer den **Editor's Draft** (beachten Sie das rote Banner auf der linken Seite) und nicht eine veröffentlichte Version (z.B. Working Draft). Der Editor's Draft ist der endgültigen Version immer näher!

Wenn die Implementierung und Spezifikation auseinanderdriften, erwähnen Sie es gerne im Implementierungsfehler. Eine der folgenden Situationen ist möglich:

- Es könnte ein Fehler in der Implementierung sein (und ein Folgefehler wird gemeldet).
- Es könnte an einer Verzögerung bei der Veröffentlichung einer neuen Spezifikation liegen.
- Es könnte ein Fehler in der Spezifikation sein (falls ja, lohnt es sich, einen Spezifikationsfehler zu melden).

## Schritt 2 — Die Datenbank der CSS-Eigenschaften überprüfen

Mehrere Merkmale einer CSS-Eigenschaft, wie z.B. ihre Syntax oder ob sie animiert werden kann, werden auf mehreren Seiten erwähnt und sind daher in einer Ad-hoc-Datenbank gespeichert. Makros, die Sie auf der Seite verwenden werden, benötigen Informationen über die Eigenschaft, die dort gespeichert sind, also beginnen Sie damit, [zu überprüfen, ob diese Informationen vorhanden sind](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Schritt 3 — Erstellen Sie die CSS-Eigenschaftsseite

Vorbereitungen abgeschlossen! Jetzt können wir die eigentliche CSS-Eigenschaftsseite hinzufügen. Der einfachste Weg, eine neue CSS-Eigenschaftsseite zu erstellen, ist das Kopieren des Inhalts einer bestehenden CSS-Eigenschaftsseite und deren Bearbeitung für die neue Eigenschaft. Um eine neue Seite zu erstellen, folgen Sie den Anweisungen in unserer [Anleitung zur Seitenerstellung](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

Wenn Sie eine Referenzseite erstellen, möchten Sie _Beispiele_ hinzufügen. Dazu folgen Sie diesem [Tutorial über Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples). Denken Sie daran, dass die Eigenschaftsseite, die Sie erstellen, für eine einzelne Eigenschaft gedacht ist, sodass die hinzugefügten Beispiele zeigen müssen, wie diese Eigenschaft isoliert funktioniert, nicht wie die gesamte Spezifikation verwendet wird. Daher sollten Beispiele für die Eigenschaft `list-style-type` die Ergebnisse bei Verwendung unterschiedlicher Werte für die Eigenschaft zeigen, nicht wie sie mit anderen Eigenschaften, Pseudoklassen oder Pseudoelementen kombiniert wird, um schöne Effekte zu erzeugen. Tutorials und Leitfäden können geschrieben werden, um mehr zu zeigen.

## Schritt 4 — Lassen Sie den Inhalt überprüfen

Nachdem Sie die Eigenschaftsseite erstellt haben, reichen Sie diese als Pull-Request ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
