---
title: Anleitung zur Dokumentation einer CSS-Eigenschaft
short-title: Dokumentation einer CSS-Eigenschaft
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Mit der Weiterentwicklung der [CSS](/de/docs/Web/CSS)-Standards werden ständig neue Eigenschaften hinzugefügt. Die [CSS-Referenz](/de/docs/Web/CSS/Reference) auf MDN Web Docs muss regelmäßig mit diesen Entwicklungen aktualisiert werden. Dieser Artikel bietet eine schrittweise Anleitung zum Erstellen einer Referenzseite für CSS-Eigenschaften.

Jede Referenzseite für CSS-Eigenschaften folgt derselben Struktur. Dies hilft den Lesern, Informationen leichter zu finden, besonders wenn sie mit dem Standardseitenformat vertraut sind.

## Schritt 1 — Bestimmen Sie die zu dokumentierende Eigenschaft

Zunächst müssen Sie die CSS-Eigenschaft festlegen, die Sie dokumentieren möchten. Vielleicht haben Sie bemerkt, dass eine Seite fehlt, oder Sie haben fehlenden Inhalt in unserer [Problemliste](https://github.com/mdn/content/issues) gesehen. Für genauere Informationen über die CSS-Eigenschaft müssen Sie eine relevante Spezifikation dafür finden (z.B. eine [W3C-Spezifikation](https://www.w3.org/Style/CSS/) oder einen Fehlerbericht für eine nicht standardisierte Eigenschaft, die in Rendering-Engines wie Gecko oder Blink verwendet wird).

> [!NOTE]
> Wenn Sie eine W3C-Spezifikation verwenden, nutzen Sie immer den **Editor's Draft** (achten Sie auf das rote Banner auf der linken Seite) und nicht eine veröffentlichte Version (z.B. Working Draft). Der Editor's Draft ist der endgültigen Version immer näher!

Falls Implementierung und Spezifikation voneinander abweichen, zögern Sie nicht, dies im Implementierungsfehler zu erwähnen. Eine der folgenden Situationen ist möglich:

- Es könnte ein Fehler in der Implementierung sein (und ein Folgefehler wird erstellt).
- Es könnte eine Verzögerung bei der Veröffentlichung einer neuen Spezifikation sein.
- Es könnte ein Fehler in der Spezifikation sein (in diesem Fall lohnt es sich, einen Spezifikationsfehler zu melden).

## Schritt 2 — Überprüfen Sie die Datenbank der CSS-Eigenschaften

Mehrere Merkmale einer CSS-Eigenschaft, wie ihre Syntax oder ob sie animiert werden kann, werden auf mehreren Seiten erwähnt und daher in einer speziellen Datenbank gespeichert. Makros, die Sie auf der Seite verwenden, benötigen Informationen über die Eigenschaft, die dort gespeichert sind. Beginnen Sie daher mit der [Überprüfung, dass diese Informationen dort vorhanden sind](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Schritt 3 — Erstellen Sie die CSS-Eigenschaftsseite

Die Vorbereitungen sind abgeschlossen! Jetzt können wir die eigentliche CSS-Eigenschaftsseite hinzufügen. Der einfachste Weg, eine neue CSS-Eigenschaftsseite zu erstellen, besteht darin, den Inhalt einer vorhandenen CSS-Eigenschaftsseite zu kopieren und ihn für die neue Eigenschaft zu bearbeiten. Um eine neue Seite zu erstellen, sehen Sie sich die Anweisungen in unserer [Anleitung zum Erstellen einer Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) an.

Wenn Sie eine Referenzseite erstellen, möchten Sie _Beispiele_ hinzufügen. Um dies zu tun, folgen Sie diesem [Tutorial über Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples). Denken Sie daran, dass die von Ihnen erstellte Eigenschaftsseite für eine einzelne Eigenschaft gedacht ist. Daher müssen die Beispiele zeigen, wie diese Eigenschaft isoliert funktioniert, und nicht, wie die gesamte Spezifikation verwendet wird. Daher sollten Beispiele für die `list-style-type`-Eigenschaft die Ergebnisse mit verschiedenen Werten für die Eigenschaft zeigen und nicht, wie sie mit anderen Eigenschaften, Pseudoklassen oder Pseudoelementen kombiniert wird, um schöne Effekte zu erzeugen. Tutorials und Leitfäden können geschrieben werden, um mehr zu zeigen.

## Schritt 4 — Lassen Sie den Inhalt überprüfen

Nachdem Sie die Eigenschaftsseite erstellt haben, reichen Sie sie als Pull-Anfrage ein. Ein Mitglied unseres Überprüfungsteams wird automatisch zugewiesen, um Ihre Seite zu überprüfen.
