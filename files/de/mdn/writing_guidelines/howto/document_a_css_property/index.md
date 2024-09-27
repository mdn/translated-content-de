---
title: Anleitung zur Dokumentation einer CSS-Eigenschaft
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Da sich die [CSS](/de/docs/Web/CSS)-Standards weiterentwickeln, werden ständig neue Eigenschaften hinzugefügt. Das [CSS-Referenz](/de/docs/Web/CSS/Reference) auf MDN Web Docs muss mit diesen Entwicklungen auf dem neuesten Stand gehalten werden. Dieser Artikel bietet eine Schritt-für-Schritt-Anleitung zum Erstellen einer CSS-Eigenschaftsreferenzseite.

Jede CSS-Eigenschaftsreferenzseite folgt derselben Struktur. Dies hilft den Lesern, Informationen leichter zu finden, insbesondere nachdem sie mit dem Format der Standardreferenzseite vertraut sind.

## Schritt 1 — Bestimmen Sie die zu dokumentierende Eigenschaft

Zuerst müssen Sie herausfinden, welche CSS-Eigenschaft Sie dokumentieren möchten. Vielleicht ist Ihnen aufgefallen, dass eine Seite fehlt, oder Sie haben gesehen, dass fehlender Inhalt in unserer [Fehlerliste](https://github.com/mdn/content/issues) gemeldet wurde. Für Details zur CSS-Eigenschaft müssen Sie eine relevante Spezifikation dafür finden (z. B. eine [W3C-Spezifikation](https://www.w3.org/Style/CSS/) oder einen Fehlerbericht für eine nicht standardisierte Eigenschaft, die in Rendering-Engines wie Gecko oder Blink verwendet wird).

> [!NOTE]
> Bei der Verwendung einer W3C-Spezifikation verwenden Sie immer den **Editor's Draft** (achten Sie auf das rote Banner auf der linken Seite) und nicht eine veröffentlichte Version (z. B. Working Draft). Der Editor's Draft ist immer näher an der endgültigen Version!

Wenn Implementierung und Spezifikation voneinander abweichen, können Sie dies im Implementierungsfehler erwähnen. Eine der folgenden Situationen ist möglich:

- Es könnte ein Fehler in der Implementierung sein (und ein Folgefehler wird gemeldet).
- Es könnte an einer Verzögerung bei der Veröffentlichung einer neuen Spezifikation liegen.
- Es könnte ein Fehler in der Spezifikation sein (in diesem Fall lohnt es sich, einen Spezifikationsfehler zu melden).

## Schritt 2 — Überprüfen Sie die Datenbank der CSS-Eigenschaften

Mehrere Merkmale einer CSS-Eigenschaft, wie ihre Syntax oder ob sie animiert werden kann, werden auf mehreren Seiten erwähnt und daher in einer ad-hoc-Datenbank gespeichert. Makros, die Sie auf der Seite verwenden, benötigen Informationen über die Eigenschaft, die dort gespeichert wird, also beginnen Sie damit, [zu überprüfen, ob diese Informationen vorhanden sind](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Schritt 3 — Erstellen Sie die CSS-Eigenschaftsseite

Vorbereitungen abgeschlossen! Jetzt können wir die eigentliche CSS-Eigenschaftsseite hinzufügen. Der einfachste Weg, um eine neue CSS-Eigenschaftsseite zu erstellen, besteht darin, den Inhalt einer bestehenden CSS-Eigenschaftsseite zu kopieren und für die neue Eigenschaft zu bearbeiten. Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserem [Leitfaden zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

Wenn Sie eine Referenzseite erstellen, sollten Sie _Beispiele_ hinzufügen. Um dies zu tun, folgen Sie diesem [Tutorial über Live-Samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples). Denken Sie daran, dass die Eigenschaftsseite, die Sie erstellen, für eine einzelne Eigenschaft gedacht ist, also müssen die hinzugefügten Beispiele zeigen, wie diese Eigenschaft isoliert funktioniert, und nicht, wie die gesamte Spezifikation verwendet wird. Daher sollten Beispiele für die `list-style-type`-Eigenschaft die Ergebnisse mit unterschiedlichen Werten für die Eigenschaft zeigen, nicht, wie sie mit anderen Eigenschaften, Pseudo-Klassen oder Pseudo-Elementen kombiniert wird, um schöne Effekte zu erzeugen. Tutorials und Leitfäden können geschrieben werden, um mehr zu zeigen.

## Schritt 4 — Lassen Sie den Inhalt überprüfen

Nachdem Sie die Eigenschaftsseite erstellt haben, reichen Sie sie als Pull Request ein. Ein Mitglied unseres Review-Teams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
