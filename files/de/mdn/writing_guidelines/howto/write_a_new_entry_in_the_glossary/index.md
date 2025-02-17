---
title: "Anleitung: Hinzufügen eines Glossar-Eintrags"
short-title: Einen Glossar-Eintrag hinzufügen
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Dieser Artikel erklärt, wie Sie Einträge im [MDN Web Docs Glossar](/de/docs/Glossary) hinzufügen und verlinken können. Er bietet zudem Leitlinien für das Layout und den Inhalt eines Glossar-Eintrags. Das Glossar bietet Definitionen für alle Begriffe, Jargon, Abkürzungen und Akronyme, die Sie beim Lesen von MDN-Inhalten über das Web und Webentwicklung begegnen können.

Es ist möglich, dass das Glossar niemals vollständig sein wird, da sich das Web ständig verändert. Indem Sie neue Einträge hinzufügen oder Probleme beheben, können Sie uns helfen, das Glossar zu aktualisieren und Lücken zu füllen.

Zum Glossar beizutragen ist eine einfache Möglichkeit, das Web für alle verständlicher zu machen. Es sind keine hohen technischen Fähigkeiten erforderlich. Glossar-Einträge sollen einfach und kurz gehalten sein.

## Anleitung zum Schreiben eines Eintrags

Wählen Sie zunächst ein Thema aus, für das Sie einen Glossar-Eintrag erstellen möchten. Wenn Sie nach Themen suchen, die einen Glossar-Eintrag benötigen, überprüfen Sie die Liste der Begriffe in der Seitenleiste der [Glossar-Startseite](/de/docs/Glossary).

Wenn Sie eine Idee für einen neuen Glossar-Eintrag haben, [erstellen Sie eine neue Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) dafür unterhalb der [Glossar-Startseite](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Schreiben einer Zusammenfassung

Der erste Absatz einer jeden Glossar-Seite ist eine einfache und kurze Beschreibung des Begriffs. Idealerweise sollte diese Beschreibung nicht mehr als zwei Sätze umfassen. Stellen Sie sicher, dass jeder, der die Beschreibung liest, den definierten Begriff sofort verstehen kann.

> [!NOTE]
> Bitte kopieren Sie keine Definitionen oder Inhalte aus anderen Quellen im Internet.
> (Insbesondere nicht von Wikipedia, da deren Lizenzreichweite kleiner und mit der von MDN inkompatibel ist.) Ihr Glossar-Eintrag sollte originaler Inhalt sein.

#### Einen guten Glossar-Eintrag schreiben

Fügen Sie einige zusätzliche Absätze hinzu, falls nötig, aber es ist leicht, sich dabei zu verlieren und einen ganzen Artikel zu schreiben. Es ist in Ordnung, einen Artikel zu schreiben, aber bitte erstellen Sie ihn nicht im oder für das Glossar. Wenn Sie unsicher sind, wo Sie Ihren Artikel platzieren sollen, zögern Sie nicht, [dies zu diskutieren](/de/docs/MDN/Community/Discussions).

Es gibt einige einfache Leitlinien, um einen besseren Glossar-Eintrag zu schreiben:

- Wenn Sie Begriffe aus dem Glossar in der Beschreibung oder Abkürzungen verwenden, sollten Sie geeignete Links erstellen.
  Oftmals bedeutet dies, Links zu anderen Seiten im Glossar zu erstellen.
- Verwenden Sie geeignete verwandte Begriffe (mit Links) im Glossar-Eintrag, wenn dies möglich ist, ohne den Artikel schwer verständlich zu machen.
  Ein gutes Netzwerk aus verwandten und nützlichen Links erleichtert die Nutzung einer Seite oder eines Seitensets erheblich.
- Denken Sie an Suchbegriffe, die Sie verwenden würden, um diese Seite zu finden.
  Versuchen Sie, alle Worte zu verwenden, die Sie für die Suche nach dem Begriff nutzen würden, ohne jedoch den Glossar-Eintrag unsinnig, lang oder schwer lesbar zu machen.

### Mit Links erweitern

Ein Glossar-Eintrag sollte immer mit einem Abschnitt _Siehe auch_ enden. Dieser Abschnitt sollte Links enthalten, die dem Leser helfen, weiterzugehen: um mehr Details zu entdecken und die relevante Technologie zu erlernen.

Es ist eine gute Praxis, die Links in drei Gruppen zu organisieren:

- Allgemeines Wissen
  - : Diese Links bieten höherwertige Informationen über den Begriff oder das Thema.
    Zum Beispiel: ein Link zu einer relevanten [Wikipedia](https://en.wikipedia.org/) Seite.
- Technische Referenz
  - : Diese Links bieten tiefgehende technische Informationen auf MDN Web Docs oder anderen Seiten.
- Mehr darüber lernen
  - : Diese Links verweisen auf Tutorials, Übungen, Beispiele oder andere Anleitungsinhalte, die den Lesern helfen, zu lernen.

## Umgang mit Mehrdeutigkeiten

Einige Begriffe können je nach Kontext mehrere Bedeutungen haben. Um Mehrdeutigkeiten zu lösen, folgen Sie diesen Leitlinien:

- Die Hauptseite des Begriffs muss eine Disambiguierungsseite sein, die das Makro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs) enthält.
- Der Begriff besitzt Unterseiten, die den Begriff in unterschiedlichen Kontexten definieren.

Lassen Sie uns dies mit einem Beispiel veranschaulichen.
Der Begriff _signature_ kann in mindestens zwei unterschiedlichen Kontexten verschiedene Bedeutungen haben: Sicherheit und Funktion.

1. Die Seite {{Glossary("Signature", "Glossary/Signature")}} ist die Disambiguierungsseite mit dem Makro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs).
2. Die Seite {{Glossary("Signature/Security", "Glossary/Signature/Security")}} definiert eine Signatur im Sicherheitskontext.
3. Die Seite {{Glossary("Signature/Function", "Glossary/Signature/Function")}} definiert eine Funktionssignatur.
