---
title: Anleitung zum Schreiben eines Eintrags im Glossar
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel erklärt, wie Einträge im [MDN Web Docs Glossar](/de/docs/Glossary) hinzugefügt und verlinkt werden.
Er bietet auch Richtlinien für das Layout und den Inhalt von Glossareinträgen.
Das Glossar liefert Definitionen für alle Begriffe, Fachjargon, Abkürzungen und Akronyme, die Sie beim Lesen von MDN-Inhalten über das Web und Webentwicklung antreffen.

Es ist möglich, dass das Glossar niemals vollständig sein wird, da sich das Web ständig verändert.
Indem Sie neue Einträge beitragen oder Probleme beheben, können Sie uns dabei helfen, das Glossar zu aktualisieren und Lücken zu füllen.

Ein Beitrag zum Glossar ist eine einfache Möglichkeit, das Web für alle verständlicher zu machen.
Es sind keine hohen technischen Kenntnisse erforderlich.
Glossareinträge sollen unkompliziert und kurz sein.

## Anleitung zum Schreiben eines Eintrags

Zunächst wählen Sie das Thema, für das Sie einen Glossareintrag schreiben möchten.
Wenn Sie nach Themen suchen, die einen Glossareintrag benötigen, überprüfen Sie die Liste der Begriffe in der Seitenleiste der [Glossar-Startseite](/de/docs/Glossary).

Wenn Sie eine Idee für einen neuen Glossareintrag haben, [erstellen Sie eine neue Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) dafür unterhalb der [Glossar-Startseite](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Schreiben Sie eine Zusammenfassung

Der erste Absatz jeder Glossarseite ist eine einfache und kurze Beschreibung des Begriffs.
Vorzugsweise sollte diese nicht mehr als zwei Sätze umfassen.
Stellen Sie sicher, dass jeder Leser, der die Beschreibung liest, den definierten Begriff sofort versteht.

> [!NOTE]
> Bitte kopieren Sie nicht Definitionen oder Inhalte aus dem Internet.
> (Und insbesondere nicht aus Wikipedia, da dessen Lizenzbereich kleiner ist und nicht mit MDN kompatibel ist.) Ihr Glossareintrag sollte originelle Inhalte enthalten.

#### Einen guten Glossareintrag schreiben

Fügen Sie, wenn nötig, ein paar zusätzliche Absätze hinzu, aber es ist leicht, sich dabei zu verzetteln und einen ganzen Artikel zu schreiben.
Einen Artikel zu schreiben ist in Ordnung, aber bitte erstellen Sie ihn nicht im/in das Glossar.
Wenn Sie sich nicht sicher sind, wo Sie Ihren Artikel platzieren sollen, zögern Sie nicht, [uns für eine Besprechung zu kontaktieren](/de/docs/MDN/Community/Discussions).

Es gibt einige einfache Richtlinien, die Sie beachten sollten, um einen besseren Glossareintrag zu schreiben:

- Wenn Sie Begriffe in der Glossarbeschreibung verwenden oder Abkürzungen nutzen, sollten Sie entsprechende Links erstellen.
  Oft bedeutet dies einfach, Links zu anderen Seiten im Glossar zu erstellen.
- Verwenden Sie geeignete verwandte Begriffe (mit Links) im Glossareintrag, sofern dies ohne Beeinträchtigung der Lesbarkeit möglich ist.
  Ein gutes Netzwerk von verwandten und nützlichen Links macht eine Seite—oder eine Gruppe von Seiten—viel einfacher nutzbar.
- Denken Sie an die Suchbegriffe, die Sie wählen würden, um diese Seite zu finden.
  Versuchen Sie, alle Wörter zu verwenden, die Sie zur Suche nach dem Begriff verwenden würden, jedoch ohne den Glossareintrag unsinnig, lang oder schwer lesbar zu machen.

### Mit Links erweitern

Ein Glossareintrag sollte immer mit einem _Siehe auch_-Abschnitt enden.
Dieser Abschnitt sollte Links enthalten, die dem Leser helfen, weiterführende Informationen zu entdecken und die relevante Technologie zu erlernen.

Es ist eine gute Praxis, die Links in drei Gruppen zu organisieren:

- Allgemeinwissen
  - : Diese Links bieten umfassendere Informationen über den Begriff oder das Thema.
    Zum Beispiel: ein Link zu einer relevanten [Wikipedia](https://en.wikipedia.org/) Seite.
- Technische Referenz
  - : Diese Links bieten tiefgehende technische Informationen, auf MDN Web Docs oder anderen Seiten.
- Lernen Sie darüber
  - : Dies sind Links zu Tutorials, Übungen, Beispielen oder anderen Lehrinhalten, die dem Leser beim Lernen helfen.

## Umgang mit Mehrdeutigkeit

Einige Begriffe können je nach Kontext unterschiedliche Bedeutungen haben.
Um Mehrdeutigkeiten zu beseitigen, folgen Sie diesen Richtlinien:

- Die Hauptseite des Begriffs muss eine Begriffsklärungsseite sein, die das [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro enthält.
- Der Begriff hat Unterseiten, die den Begriff für verschiedene Kontexte definieren.

Lassen Sie uns dies mit einem Beispiel veranschaulichen.
Der Begriff _Signatur_ kann in mindestens zwei verschiedenen Kontexten unterschiedliche Bedeutungen haben: Sicherheit und Funktion.

1. Die Seite [Glossary/Signature](/de/docs/Glossary/Signature) ist die Begriffsklärungsseite mit dem [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro.
2. Die Seite [Glossary/Signature/Security](/de/docs/Glossary/Signature/Security) ist die Seite, die eine Signatur im Sicherheitskontext definiert.
3. Die Seite [Glossary/Signature/Function](/de/docs/Glossary/Signature/Function) ist die Seite, die eine Funktionssignatur definiert.
