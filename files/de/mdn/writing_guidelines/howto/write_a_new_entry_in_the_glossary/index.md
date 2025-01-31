---
title: Anleitung zum Hinzufügen eines Glossareintrags
short-title: Einen Glossareintrag hinzufügen
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieser Artikel erklärt, wie man Einträge im [MDN Web Docs Glossar](/de/docs/Glossary) hinzufügt und verlinkt.
Er gibt auch Richtlinien zum Layout und Inhalt von Glossareinträgen.
Das Glossar bietet Definitionen für alle Begriffe, Jargon, Abkürzungen und Akronyme, die Ihnen beim Lesen von MDN-Inhalten über das Web und die Webentwicklung begegnen.

Es ist möglich, dass das Glossar niemals vollständig sein wird, da das Web sich ständig verändert.
Durch das Beitragen neuer Einträge oder das Beheben von Problemen können Sie uns helfen, das Glossar zu aktualisieren und Lücken zu schließen.

Einen Beitrag zum Glossar zu leisten, ist eine einfache Möglichkeit, das Web verständlicher für alle zu machen.
Es sind keine hochgradigen technischen Fähigkeiten erforderlich.
Glossareinträge sollen einfach und kurz sein.

## Anleitung zum Schreiben eines Eintrags

Wählen Sie zunächst das Thema, für das Sie einen Glossareintrag schreiben möchten.
Wenn Sie nach Themen suchen, die einen Glossareintrag benötigen, überprüfen Sie die Liste der Begriffe in der Seitenleiste der [Glossar-Startseite](/de/docs/Glossary).

Wenn Sie eine Idee für einen neuen Glossareintrag haben, [erstellen Sie eine neue Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) dafür unterhalb der [Glossar-Startseite](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Schreiben Sie eine Zusammenfassung

Der erste Absatz jeder Glossarseite ist eine einfache und kurze Beschreibung des Begriffs.
Vorzugsweise sollte diese nicht mehr als zwei Sätze umfassen.
Stellen Sie sicher, dass jeder, der die Beschreibung liest, den definierten Begriff sofort verstehen kann.

> [!NOTE]
> Bitte kopieren und fügen Sie keine Definitionen oder Inhalte aus dem Internet ein.
> (Und besonders nicht aus Wikipedia, da dessen Lizenzreichweite kleiner und mit MDN nicht kompatibel ist.) Ihr Glossareintrag sollte originaler Inhalt sein.

#### Einen guten Glossareintrag schreiben

Fügen Sie ein paar zusätzliche Absätze hinzu, wenn es unbedingt nötig ist, aber es ist leicht möglich, dass man einen gesamten Artikel schreibt.
Einen Artikel zu schreiben ist in Ordnung, jedoch bitte nicht im/für das Glossar.
Wenn Sie sich nicht sicher sind, wo Sie Ihren Artikel platzieren sollen, können Sie gerne [mit uns darüber sprechen](/de/docs/MDN/Community/Discussions).

Hier sind ein paar einfache Richtlinien, um einen besseren Glossareintrag zu schreiben:

- Wenn Sie Begriffe in der Beschreibung des Glossarbegriffs oder Abkürzungen verwenden, sollten Sie entsprechende Links erstellen.
  Oftmals bedeutet dies einfach, Links zu anderen Seiten im Glossar zu erstellen.
- Verwenden Sie geeignete verwandte Begriffe (mit Links) im Glossareintrag, wenn dies möglich ist, ohne den Artikel schwer verständlich zu machen.
  Ein gutes Netzwerk verwandter und nützlicher Links macht eine Seite — oder eine Gruppierung von Seiten — viel benutzerfreundlicher.
- Denken Sie an die Suchbegriffe, die Sie verwenden würden, um diese Seite zu finden.
  Versuchen Sie, alle Wörter zu verwenden, die Sie zur Suche des Begriffs nutzen würden, aber ohne den Glossareintrag unsinnig, lang oder schwer lesbar zu machen.

### Mit Links erweitern

Ein Glossareintrag sollte immer mit einem _Siehe auch_-Abschnitt enden.
Dieser Abschnitt sollte Links enthalten, um dem Leser dabei zu helfen, voranzukommen: mehr Details zu entdecken und die relevante Technologie zu erlernen.

Es ist eine gute Praxis, die Links in drei Gruppen zu organisieren:

- Allgemeines Wissen
  - : Diese Links bieten höherstufige Informationen über den Begriff oder das Thema.
    Zum Beispiel: ein Link zu einer relevanten [Wikipedia](https://en.wikipedia.org/) Seite.
- Technischer Verweis
  - : Diese Links bieten ausführliche technische Informationen, auf MDN Web Docs oder anderen Seiten.
- Lernen Sie darüber
  - : Dies sind Links zu Tutorials, Übungen, Beispielen oder anderem Lehrmaterial, das dem Leser hilft, zu lernen.

## Umgang mit Mehrdeutigkeit

Einige Begriffe können je nach Kontext unterschiedliche Bedeutungen haben.
Um Mehrdeutigkeiten zu lösen, befolgen Sie diese Richtlinien:

- Die Hauptseite des Begriffs muss eine Seite zur Auflösung von Mehrdeutigkeiten mit dem [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro sein.
- Der Begriff hat Unterseiten, die den Begriff für verschiedene Kontexte definieren.

Lassen Sie uns dies mit einem Beispiel verdeutlichen.
Der Begriff _Signature_ kann unterschiedliche Bedeutungen in mindestens zwei verschiedenen Kontexten haben: Sicherheit und Funktion.

1. Die Seite {{Glossary("Signature", "Glossary/Signature")}} ist die Seite zur Auflösung von Mehrdeutigkeiten mit dem [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro.
2. Die Seite {{Glossary("Signature/Security", "Glossary/Signature/Security")}} ist die Seite, die eine Signatur im Kontext der Sicherheit definiert.
3. Die Seite {{Glossary("Signature/Function", "Glossary/Signature/Function")}} ist die Seite, die eine Funktionssignatur definiert.
