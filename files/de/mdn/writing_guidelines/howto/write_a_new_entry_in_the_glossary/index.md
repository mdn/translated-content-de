---
title: Wie man einen Eintrag im Glossar schreibt
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel erklärt, wie man Einträge im [MDN Web Docs Glossar](/de/docs/Glossary) hinzufügt und verlinkt.
Er gibt auch Richtlinien zur Gestaltung und zum Inhalt von Glossareinträgen.
Das Glossar bietet Definitionen für alle Begriffe, Fachjargon, Abkürzungen und Akronyme, die Sie begegnen, wenn Sie Inhalte über das Web und Webentwicklung auf MDN lesen.

Es ist möglich, dass das Glossar niemals vollständig sein wird, da das Web sich ständig verändert.
Indem Sie neue Einträge beitragen oder Probleme beheben, können Sie uns helfen, das Glossar zu aktualisieren und Lücken zu schließen.

Zum Glossar beizutragen ist eine einfache Möglichkeit, das Web verständlicher für alle zu machen.
Sie benötigen keine hochgradigen technischen Fähigkeiten.
Glossareinträge sollen einfach und kurz sein.

## Wie man einen Eintrag schreibt

Zuerst wählen Sie das Thema, zu dem Sie einen Glossareintrag schreiben möchten.
Wenn Sie nach Themen suchen, die einen Glossareintrag benötigen, schauen Sie sich die Liste der Begriffe in der Seitenleiste der [Glossar-Startseite](/de/docs/Glossary) an.

Wenn Sie eine Idee für einen neuen Glossareintrag haben, [erstellen Sie eine neue Seite](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) dafür unterhalb der [Glossar-Startseite](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Schreiben Sie eine Zusammenfassung

Der erste Absatz einer jeden Glossarseite ist eine einfache und kurze Beschreibung des Begriffs.
Vorzugsweise sollte diese nicht mehr als zwei Sätze umfassen.
Stellen Sie sicher, dass jeder, der die Beschreibung liest, den definierten Begriff sofort verstehen kann.

> [!NOTE]
> Bitte kopieren Sie nicht Definitionen oder Inhalte aus dem Internet.
> (Und insbesondere nicht aus Wikipedia, da dessen Lizenzversionen eingeschränkter und mit MDN unvereinbar sind.) Ihr Glossareintrag sollte ein origineller Inhalt sein.

#### Ein guter Glossareintrag schreiben

Fügen Sie ein paar zusätzliche Absätze hinzu, wenn es nötig ist, aber es ist leicht, sich dabei zu ertappen, einen ganzen Artikel zu schreiben.
Einen Artikel zu schreiben ist in Ordnung, aber bitte erstellen Sie ihn nicht im/für das Glossar.
Wenn Sie sich nicht sicher sind, wo Sie Ihren Artikel platzieren sollen, zögern Sie nicht, [um darüber zu diskutieren](/de/docs/MDN/Community/Discussions).

Es gibt ein paar einfache Richtlinien, die Sie beachten sollten, um einen besseren Glossareintrag zu schreiben:

- Wenn Sie Begriffe in der Beschreibung des Glossarsbegriffs verwenden oder wenn Sie Abkürzungen verwenden, sollten Sie geeignete Links erstellen.
  Oft bedeutet das einfach, Links zu anderen Seiten im Glossar zu erstellen.
- Verwenden Sie geeignete verwandte Begriffe (mit Links) im Glossareintrag, wenn dies ohne Erschwerung der Lesbarkeit möglich ist.
  Ein gutes Netzwerk aus verwandten und nützlichen Links macht eine Seite — oder einen Satz von Seiten — viel benutzerfreundlicher.
- Denken Sie an die Suchbegriffe, die Sie wählen würden, wenn Sie diese Seite finden wollten.
  Versuchen Sie, alle Wörter zu verwenden, die Sie verwenden würden, um nach dem Begriff zu suchen, aber ohne den Glossareintrag unsinnig, lang oder schwer lesbar zu machen.

### Erweitern mit Links

Ein Glossareintrag sollte immer mit einem _Siehe auch_-Abschnitt enden.
Dieser Abschnitt sollte Links enthalten, die dem Leser helfen, weiterzugehen: mehr Details entdecken; lernen, die relevante Technologie zu nutzen.

Es ist eine gute Praxis, die Links in drei Gruppen zu organisieren:

- Allgemeinwissen
  - : Diese Links bieten höherstufige Informationen über den Begriff oder das Thema.
    Zum Beispiel: ein Link zu einer relevanten [Wikipedia](https://en.wikipedia.org/) Seite.
- Technische Referenz
  - : Diese Links bieten tiefgehende technische Informationen, auf MDN Web Docs oder anderen Seiten.
- Lernen Sie es
  - : Dies sind Links zu Tutorials, Übungen, Beispielen oder anderen lehrreichen Inhalten, die dem Leser helfen zu lernen.

## Umgang mit Mehrdeutigkeiten

Einige Begriffe können je nach Kontext mehrere Bedeutungen haben.
Um Mehrdeutigkeiten zu klären, beachten Sie diese Richtlinien:

- Die Hauptseite des Begriffs muss eine Begriffsklärungsseite sein, die das [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro enthält.
- Der Begriff hat Unterseiten, die den Begriff für verschiedene Kontexte definieren.

Lassen Sie uns dies mit einem Beispiel veranschaulichen.
Der Begriff _Signatur_ kann in mindestens zwei verschiedenen Kontexten unterschiedliche Bedeutungen haben: Sicherheit und Funktion.

1. Die Seite [Glossar/Signatur](/de/docs/Glossary/Signature) ist die Begriffsklärungsseite mit dem [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) Makro.
2. Die Seite [Glossar/Signatur/Sicherheit](/de/docs/Glossary/Signature/Security) ist die Seite, die eine Signatur im Sicherheitskontext definiert.
3. Die Seite [Glossar/Signatur/Funktion](/de/docs/Glossary/Signature/Function) ist die Seite, die eine Funktionssignatur definiert.
