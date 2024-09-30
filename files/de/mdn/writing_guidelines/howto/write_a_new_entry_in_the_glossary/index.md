---
title: Wie man einen Eintrag im Glossar schreibt
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel erklärt, wie Sie Einträge im [MDN Web Docs-Glossar](/de/docs/Glossary) hinzufügen und verlinken können. Er bietet auch Leitlinien zum Layout und Inhalt von Glossareinträgen. Das Glossar liefert Definitionen für alle Begriffe, Fachausdrücke, Abkürzungen und Akronyme, die Sie beim Lesen von MDN-Inhalten über das Web und Webentwicklung antreffen.

Es ist möglich, dass das Glossar niemals vollständig sein wird, da sich das Web ständig verändert. Durch das Beitragen neuer Einträge oder das Beheben von Problemen können Sie uns helfen, das Glossar zu aktualisieren und Lücken zu füllen.

Zum Glossar beizutragen ist ein einfacher Weg, das Web für alle verständlicher zu machen. Sie benötigen keine hochentwickelten technischen Fähigkeiten. Glossareinträge sollen einfach und kurz gehalten sein.

## Anleitung zum Schreiben eines Eintrags

Wählen Sie zuerst das Thema aus, für das Sie einen Glossareintrag schreiben möchten. Wenn Sie nach Themen suchen, die einen Glossareintrag benötigen, überprüfen Sie die Liste der Begriffe in der Seitenleiste der [Glossar-Startseite](/de/docs/Glossary).

Wenn Sie eine Idee für einen neuen Glossareintrag haben, [erstellen Sie eine neue Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) dafür unterhalb der [Glossar-Startseite](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Schreiben Sie eine Zusammenfassung

Der erste Absatz jeder Glossarseite ist eine einfache und kurze Beschreibung des Begriffs. Idealerweise sollte diese nicht mehr als zwei Sätze umfassen. Stellen Sie sicher, dass jeder, der die Beschreibung liest, den definierten Begriff sofort verstehen kann.

> [!NOTE]
> Bitte kopieren Sie keine Inhalte von anderen Definitionen oder aus dem Internet.
> (Und insbesondere nicht von Wikipedia, da dessen Lizenzvarianten noch eingeschränkter und inkompatibel mit MDN sind.) Ihr Glossareintrag sollte ein Originalinhalt sein.

#### Einen guten Glossareintrag schreiben

Fügen Sie einige zusätzliche Absätze hinzu, wenn nötig, aber es ist leicht, sich dabei zu verlieren und einen ganzen Artikel zu schreiben. Einen Artikel zu schreiben ist in Ordnung, aber bitte nicht im oder für das Glossar. Wenn Sie nicht sicher sind, wo Sie Ihren Artikel platzieren sollen, zögern Sie nicht, [sich mit uns zu besprechen](/de/docs/MDN/Community/Discussions).

Es gibt ein paar einfache Richtlinien, die Sie für einen besseren Glossareintrag beachten sollten:

- Wenn Sie Begriffe in der Beschreibung des Glossarinhalts oder Abkürzungen verwenden, sollten Sie geeignete Links erstellen. Oft bedeutet dies einfach, Links zu anderen Seiten im Glossar zu erstellen.
- Verwenden Sie geeignete verwandte Begriffe (mit Links) im Glossareintrag, wenn es möglich ist, ohne den Artikel unübersichtlich zu machen. Ein gutes Netzwerk aus verwandten und nützlichen Links macht eine Seite – oder ein Set von Seiten – wesentlich einfacher nutzbar.
- Überlegen Sie, welche Suchbegriffe Sie wählen würden, um diese Seite zu finden. Versuchen Sie, alle Wörter zu verwenden, die Sie bei der Suche nach dem Begriff verwenden würden, ohne den Glossareintrag unsinnig, lang oder schwer lesbar zu machen.

### Mit Links erweitern

Ein Glossareintrag sollte immer mit einem Abschnitt _Siehe auch_ enden. Dieser Abschnitt sollte Links enthalten, die dem Leser helfen, weiterzugehen: mehr Details zu entdecken und relevante Technologie zu erlernen.

Es ist eine gute Praxis, die Links in drei Gruppen zu organisieren:

- Allgemeines Wissen
  - : Diese Links bieten höherwertige Informationen über den Begriff oder das Thema. Zum Beispiel: ein Link zu einer relevanten [Wikipedia](https://en.wikipedia.org/) Seite.
- Technische Referenz
  - : Diese Links bieten ausführliche technische Informationen, auf den MDN Web Docs oder anderen Seiten.
- Lernen
  - : Diese sind Links zu Tutorials, Übungen, Beispielen oder anderen didaktischen Inhalten, die dem Leser beim Lernen helfen.

## Umgang mit Mehrdeutigkeit

Einige Begriffe können je nach Kontext mehrere Bedeutungen haben. Um Mehrdeutigkeiten zu lösen, beachten Sie folgende Richtlinien:

- Die Hauptseite des Begriffs muss eine Begriffsklärungsseite mit dem [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro sein.
- Der Begriff hat Unterseiten, die den Begriff für verschiedene Kontexte definieren.

Lassen Sie uns dies mit einem Beispiel veranschaulichen. Der Begriff _Signatur_ kann in mindestens zwei verschiedenen Kontexten unterschiedliche Bedeutungen haben: Sicherheit und Funktion.

1. Die Seite [Glossary/Signature](/de/docs/Glossary/Signature) ist die Begriffsklärungsseite mit dem [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro.
2. Die Seite [Glossary/Signature/Security](/de/docs/Glossary/Signature/Security) definiert eine Signatur im Sicherheitskontext.
3. Die Seite [Glossary/Signature/Function](/de/docs/Glossary/Signature/Function) definiert eine Funktionssignatur.
