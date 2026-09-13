---
title: Anleitung zum Hinzufügen eines Glossareintrags
short-title: Einen Glossareintrag hinzufügen
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: 964ab8ae30c5ce0a343cc6d0f28c1b94389bae89
---

Dieser Artikel erläutert, wie Sie Einträge im [MDN-Web-Docs-Glossar](/de/docs/Glossary) hinzufügen und darauf verlinken.
Er enthält außerdem Richtlinien zum Layout und Inhalt von Glossareinträgen.
Das Glossar bietet Definitionen für alle Begriffe, Fachausdrücke, Abkürzungen und Akronyme, auf die Sie beim Lesen von MDN-Inhalten über das Web und die Webentwicklung stoßen.

Es ist möglich, dass das Glossar nie vollständig sein wird, da sich das Web ständig verändert.
Indem Sie neue Einträge beitragen oder Probleme beheben, können Sie uns helfen, das Glossar zu aktualisieren und Lücken zu schließen.

Zum Glossar beizutragen ist eine einfache Möglichkeit, das Web für alle verständlicher zu machen.
Sie benötigen dafür keine fortgeschrittenen technischen Kenntnisse.
Glossareinträge sollen klar und kurz sein.

## So schreiben Sie einen Eintrag

Wählen Sie zunächst ein Thema aus, für das Sie einen Glossareintrag schreiben möchten.
Wenn Sie nach Themen suchen, die einen Glossareintrag benötigen, sehen Sie sich die Liste der Begriffe in der Seitenleiste der [Glossar-Startseite](/de/docs/Glossary) an.

Wenn Sie eine Idee für einen neuen Glossareintrag haben, [erstellen Sie dafür eine neue Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) unterhalb der [Glossar-Startseite](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Eine Zusammenfassung schreiben

Der erste Absatz jeder Glossarseite ist eine einfache und kurze Beschreibung des Begriffs.
Vorzugsweise sollte diese nicht mehr als zwei Sätze umfassen.
Stellen Sie sicher, dass jede Person, die die Beschreibung liest, den definierten Begriff sofort verstehen kann.

> [!NOTE]
> Bitte kopieren Sie keine Definitionen oder Inhalte aus anderen Quellen im Internet.
> (Insbesondere nicht aus Wikipedia, da deren Spektrum an Lizenzversionen kleiner und nicht mit MDN kompatibel ist.) Ihr Glossareintrag sollte ein Originalinhalt sein.

#### Einen guten Glossareintrag schreiben

Fügen Sie bei Bedarf einige zusätzliche Absätze hinzu, aber es ist leicht möglich, dass Sie am Ende einen ganzen Artikel schreiben.
Einen Artikel zu schreiben ist in Ordnung, aber erstellen Sie ihn bitte nicht im/für das Glossar.
Wenn Sie nicht sicher sind, wo Sie Ihren Artikel einordnen sollen, können Sie sich gerne [an uns wenden, um dies zu besprechen](/de/docs/MDN/Community/Discussions).

Für einen besseren Glossareintrag gibt es einige einfache Richtlinien:

- Wenn Sie in der Beschreibung des Begriffs andere Begriffe aus dem Glossar oder Abkürzungen verwenden, sollten Sie entsprechende Links erstellen.
  Häufig bedeutet dies einfach, Links zu anderen Seiten im Glossar zu erstellen.
- Verwenden Sie im Glossareintrag passende verwandte Begriffe (mit Links), sofern dies möglich ist, ohne den Artikel schwer verständlich zu machen.
  Ein gutes Netzwerk aus verwandten und nützlichen Links macht eine Seite – oder eine Reihe von Seiten – deutlich einfacher nutzbar.
- Überlegen Sie, welche Suchbegriffe Sie wählen würden, wenn Sie diese Seite finden wollten.
  Versuchen Sie, alle Wörter zu verwenden, nach denen Sie suchen würden, ohne den Glossareintrag unsinnig, lang oder schwer lesbar zu machen.

### Mit Links erweitern

Ein Glossareintrag sollte immer mit einem Abschnitt _Siehe auch_ enden.
Dieser Abschnitt sollte Links enthalten, die der lesenden Person helfen, weiterzukommen: um mehr Details zu entdecken oder den Umgang mit der relevanten Technologie zu erlernen.

Es empfiehlt sich, die Links in drei Gruppen zu organisieren:

- Allgemeines Wissen
  - : Diese Links bieten übergeordnete Informationen über den Begriff oder das Thema.
    Zum Beispiel: ein Link zu einer relevanten [Wikipedia](https://en.wikipedia.org/)-Seite.
- Technische Referenz
  - : Diese Links bieten ausführliche technische Informationen auf MDN Web Docs oder anderen Websites.
- Darüber lernen
  - : Dies sind Links zu Tutorials, Übungen, Beispielen oder anderen Lehrinhalten, die der lesenden Person beim Lernen helfen.

## Umgang mit Mehrdeutigkeiten

Einige Begriffe können je nach Kontext mehrere Bedeutungen haben.
Befolgen Sie zur Auflösung von Mehrdeutigkeiten diese Richtlinien:

- Die Hauptseite des Begriffs muss eine Begriffsklärungsseite sein, die das Makro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs) enthält.
- Der Begriff hat Unterseiten, die ihn für verschiedene Kontexte definieren.

Veranschaulichen wir dies anhand eines Beispiels.
Der Begriff _signature_ kann in mindestens zwei verschiedenen Kontexten unterschiedliche Bedeutungen haben: Sicherheit und Funktion.

1. Die Seite {{Glossary("Signature", "Glossary/Signature")}} ist die Begriffsklärungsseite mit dem Makro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs).
2. Die Seite {{Glossary("Signature/Security", "Glossary/Signature/Security")}} definiert eine Signatur im Sicherheitskontext.
3. Die Seite {{Glossary("Signature/Function", "Glossary/Signature/Function")}} definiert eine Funktionssignatur.
