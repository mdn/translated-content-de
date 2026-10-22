---
title: So fügen Sie einen Glossareintrag hinzu
short-title: Einen Glossareintrag hinzufügen
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: c9c2a211595d962118504b599debbf39d6aaad3f
---

Dieser Artikel erklärt, wie Sie Einträge im [Glossar der MDN Web Docs](/de/docs/Glossary) hinzufügen und verlinken.
Außerdem enthält er Richtlinien für den Aufbau und Inhalt von Glossareinträgen.
Das Glossar bietet Definitionen für Begriffe, Fachausdrücke, Abkürzungen und Akronyme, denen Sie beim Lesen von MDN-Inhalten über das Web und die Webentwicklung begegnen.

Da sich das Web ständig verändert, wird das Glossar möglicherweise nie vollständig sein.
Indem Sie neue Einträge beitragen oder Probleme beheben, können Sie uns helfen, das Glossar zu aktualisieren und Lücken zu schließen.

Ein Beitrag zum Glossar ist eine einfache Möglichkeit, das Web für alle verständlicher zu machen.
Sie benötigen dafür keine umfassenden technischen Kenntnisse.
Glossareinträge sollen leicht verständlich und kurz sein.

## So schreiben Sie einen Eintrag

Wählen Sie zunächst ein Thema, zu dem Sie einen Glossareintrag schreiben möchten.
Wenn Sie nach Themen suchen, für die noch ein Glossareintrag fehlt, sehen Sie sich die Begriffsliste in der Seitenleiste der [Glossar-Startseite](/de/docs/Glossary) an.

Wenn Sie eine Idee für einen neuen Glossareintrag haben, [erstellen Sie eine neue Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) unterhalb der [Glossar-Startseite](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Eine Zusammenfassung schreiben

Der erste Absatz jeder Glossarseite ist eine einfache, kurze Beschreibung des Begriffs.
Er sollte möglichst nicht mehr als zwei Sätze umfassen.
Achten Sie darauf, dass alle, die die Beschreibung lesen, den definierten Begriff sofort verstehen können.

> [!NOTE]
> Kopieren Sie keine Definitionen oder anderen Inhalte aus dem Internet.
> (Insbesondere nicht aus Wikipedia, da deren Auswahl an Lizenzversionen kleiner und mit MDN nicht kompatibel ist.)
> Verwenden Sie auch keine generierten Texte.
> Ihr Glossareintrag sollte ein eigenständiger Text sein, den Sie mit Ihren eigenen Worten verfasst haben.

#### Einen guten Glossareintrag schreiben

Fügen Sie bei Bedarf ein paar weitere Absätze hinzu. Dabei kann es jedoch leicht passieren, dass Sie einen ganzen Artikel schreiben.
Einen Artikel zu schreiben ist in Ordnung, aber erstellen Sie ihn bitte nicht im oder für das Glossar.
Wenn Sie unsicher sind, wo Ihr Artikel hingehört, können Sie sich gerne [an uns wenden, um das zu besprechen](/de/docs/MDN/Community/Discussions).

Beachten Sie beim Schreiben eines guten Glossareintrags einige einfache Richtlinien:

- Wenn Sie in der Beschreibung eines Begriffs andere Glossarbegriffe oder Abkürzungen verwenden, sollten Sie entsprechende Links setzen.
  Häufig genügt es, auf andere Glossarseiten zu verlinken.
- Verwenden Sie gegebenenfalls passende verwandte Begriffe (mit Links) im Glossareintrag, sofern der Artikel dadurch nicht schwerer verständlich wird.
  Ein gutes Netz aus thematisch passenden und hilfreichen Links erleichtert die Nutzung einer Seite oder mehrerer zusammengehöriger Seiten erheblich.
- Überlegen Sie, mit welchen Suchbegriffen Sie diese Seite finden würden.
  Versuchen Sie, alle Wörter zu verwenden, mit denen Sie nach dem Begriff suchen würden, ohne dass der Glossareintrag dadurch unsinnig, lang oder schwer lesbar wird.

### Den Eintrag mit Links ergänzen

Ein Glossareintrag sollte immer mit einem Abschnitt _Siehe auch_ enden.
Dieser Abschnitt sollte Links enthalten, die den Lesenden weiterhelfen: um weitere Einzelheiten zu entdecken und zu erfahren, wie die betreffende Technologie verwendet wird.

Es empfiehlt sich, die Links in drei Gruppen einzuteilen:

- Allgemeinwissen
  - : Diese Links bieten übergeordnete Informationen zum Begriff oder Thema.
    Zum Beispiel: ein Link zu einer passenden [Wikipedia](https://en.wikipedia.org/)-Seite.
- Technische Referenz
  - : Diese Links bieten ausführliche technische Informationen auf MDN Web Docs oder anderen Websites.
- Mehr darüber erfahren
  - : Diese Links führen zu Tutorials, Übungen, Beispielen oder anderen Lernmaterialien.

## Mehrdeutigkeit behandeln

Manche Begriffe können je nach Kontext mehrere Bedeutungen haben.
Gehen Sie wie folgt vor, um Mehrdeutigkeiten aufzulösen:

- Die Hauptseite des Begriffs muss eine Begriffsklärungsseite sein, die das Makro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs) enthält.
- Der Begriff erhält Unterseiten, die ihn für verschiedene Kontexte definieren.

Ein Beispiel verdeutlicht dies.
Der Begriff _signature_ kann in mindestens zwei verschiedenen Kontexten unterschiedliche Bedeutungen haben: Sicherheit und Funktionen.

1. Die Seite {{Glossary("Signature", "Glossary/Signature")}} ist die Begriffsklärungsseite mit dem Makro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs).
2. Die Seite {{Glossary("Signature/Security", "Glossary/Signature/Security")}} definiert eine Signatur im Sicherheitskontext.
3. Die Seite {{Glossary("Signature/Function", "Glossary/Signature/Function")}} definiert eine Funktionssignatur.
