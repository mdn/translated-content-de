---
title: Schreibstil-Leitfaden
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{MDNSidebar}}

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf den MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen die Konsistenz in Sprache und Stil auf der gesamten Webseite sicherstellen. Nichtsdestotrotz sind wir mehr an Inhalten als an deren Formatierung interessiert, daher fühlen Sie sich nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um diesen Leitfaden zu entsprechen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentation. Andere Sprachen können (und sind eingeladen) ihre eigenen Stil-Leitfäden zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungs-Teamseite veröffentlicht werden. Dieser Leitfaden sollte jedoch auch für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und wie verschiedene Komponenten auf einer Seite, wie Listen und Titel, formatiert werden.

## Allgemeine Schreibrichtlinien

Das Ziel ist, Seiten zu schreiben, die alle Informationen enthalten, die die Leser benötigen, um das behandelte Thema zu verstehen.

Die folgenden Unterabschnitte geben Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Integrieren Sie relevante Beispiele](#integrieren_sie_relevante_beispiele)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Hinterkopf. Beispielsweise erfordert eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so viele Details über grundlegende Netzwerk-Konzepte wie eine typische Seite über Netzwerk. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps sind möglicherweise nicht in jedem Fall anwendbar.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, und berücksichtigen Sie die Zielgruppe.
- **Kurz**: Wenn Sie ein Dokument verfassen, ist es wichtig zu wissen, wie viel gesagt werden muss. Wenn Sie zu viele Details bereitstellen, wird die Seite mühsam zu lesen und wird selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie die gleiche Ausdrucksweise konsequent sowohl auf der Seite als auch auf mehreren Seiten verwenden.

### Integrieren Sie relevante Beispiele

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um eventuelle Randfälle zu klären, die existieren könnten.
Sie können auch Beispiele verwenden, um Lösungen für allgemeine Aufgaben und Lösungen für Probleme zu demonstrieren, die auftreten können.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der Eröffnungssatz oder die Eröffnungsabsätze vor der ersten Überschrift die Informationen, die die Seite abdecken wird, und vielleicht, was die Leser erreichen können, nachdem sie den Inhalt durchgegangen sind, angemessen zusammenfasst. Auf diese Weise kann ein Leser schnell bestimmen, ob die Seite für seine Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen sowie über das erforderliche Vorwissen, das vom Leser erwartet wird, informieren, falls vorhanden. Der Eröffnungssatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den entsprechenden Informationen, und Hinweise auf Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gängigen Ausdrücken, die in der Dokumentation verwendet werden:

- Vermeiden Sie die Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Coherence** ersetzt werden.
- Anstelle von **Dummy**, verwenden Sie **Placeholder**.
- Sie sollten die Begriffe **Crazy** und **Insane** in der Dokumentation nicht benötigen; wenn jedoch der Fall eintritt, verwenden Sie stattdessen **Fantastic**.

Es ist am besten, geschlechtsneutrale Sprache in jedem Text zu verwenden, in dem das Geschlecht für das Thema irrelevant ist.
Beispielsweise, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"seiner" in Ordnung; aber wenn das Subjekt eine Person jeden Geschlechts ist, sind "er"/"seiner" nicht geeignet.

Lassen Sie uns die folgenden Beispiele betrachten:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen, wie folgt:

- **Korrekt**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[Singuläres ‚they‘](https://en.wikipedia.org/wiki/Singular_they).". Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzer im Plural zu verfassen, wie folgt:

- **Korrekt**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen zu eliminieren:

- **Korrekt**: "Ein Bestätigungsdialog, der um die Erlaubnis des Benutzers für den Zugriff auf die Webcam bittet, erscheint."
- **Korrekt**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel zur Problembewältigung ist arguably besser.
Es ist nicht nur grammatikalisch korrekter, sondern entfernt auch einige der Komplexität, die mit der Behandlung von Geschlechtern in verschiedenen Sprachen verbunden ist, die möglicherweise unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Schreiben Sie mit SEO im Hinterkopf

Obwohl das Hauptziel jedes Schreibens auf den MDN Web Docs immer darin bestehen sollte, über offene Web-Technologie zu informieren und aufzuklären, damit Entwickler schnell lernen können, was sie wollen, oder die kleinen Details finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material finden, das wir schreiben. Wir können dies erreichen, indem wir Suchmaschinenoptimierung ([SEO](/de/docs/Glossary/SEO)) beim Schreiben im Hinterkopf behalten.

Dieser Abschnitt deckt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte ab, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, damit Leser leicht finden, was sie benötigen. Die SEO-Richtlinien beinhalten sicherzustellen, dass jede Seite, mit der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und markiert ist, damit Suchmaschinen die erforderlichen Kontexte und Hinweise erhalten, um die Artikel ordnungsgemäß zu indexieren.

## Schreibstil

Abgesehen vom Schreiben grammatikalisch korrekter Sätze in Englisch empfehlen wir Ihnen, diese Richtlinien zu befolgen, um die Konsistenz der Inhalte auf den MDN Web Docs sicherzustellen.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralisierung](#pluralisierung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das durch die Verwendung des ersten Buchstabens jedes Wortes eines Ausdrucks erstellt wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Acronyme, die den Benutzern wahrscheinlich nicht vertraut sind. Im Zweifelsfall erweitern Sie den Begriff. Besser noch, verlinken Sie ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Korrekt**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punktsetzung**: Verwenden Sie Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Korrekt**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (usw., z.B., d.h.) in parenthetischen Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen passenden Satzzeichen.

  - **Korrekt**: Web-Browser (z.B., Firefox) können verwendet werden ...
  - **Falsch**: Web-Browser z.B. Firefox können verwendet werden ...
  - **Falsch**: Web-Browser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Web-Browser, (ie: Firefox) können verwendet werden ...

  In normalem Text (also Text außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Korrekt**: ... Web-Browser, und so weiter.
  - **Falsch**: ... Web-Browser, usf.

  - **Korrekt**: Web-Browser wie Firefox können verwendet werden ...
  - **Falsch**: Web-Browser z.B. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen von lateinischen Abkürzungen zusammen:

  | Abkürzung | Lateinisch       | Englisch                      |
  | --------- | ---------------- | ----------------------------- |
  | cf.       | _confer_         | vergleichen                   |
  | e.g.      | _exempli gratia_ | zum Beispiel                  |
  | et al.    | _et alii_        | und andere                    |
  | etc.      | _et cetera_      | und so weiter                 |
  | i.e.      | _id est_         | das heißt, mit anderen Worten |
  | N.B.      | _nota bene_      | wohlgemerkt                   |
  | P.S.      | _post scriptum_  | Nachschrift                   |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder verwirrt sind oder ihre Bedeutung nicht verstehen.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich entscheiden, sie zu nutzen. Beispielsweise, achten Sie darauf, nicht "e.g." mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Bei der Pluralbildung von Abkürzungen und Akronymen fügen Sie ein _s_ hinzu. Verwenden Sie niemals ein Apostroph.

  - **Korrekt**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Abkürzung verwenden, bevorzugen Sie "vs." gegenüber "v." und können es in Überschriften verwenden. Ansonsten im Text verwenden Sie die ausgeschriebene Form "versus".

  - **Korrekt**: this vs. that
  - **Falsch**: this v. that
  - **Korrekt**: this versus that

### Großschreibung

Verwenden Sie Standard-Großschreibungsregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Modifikator) und "internet" kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie stellt eine Änderung gegenüber einer früheren Version dieses Leitfadens dar, daher finden Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN.
> Fühlen Sie sich frei, diese bei anderen Änderungen ebenfalls zu ändern, aber eine Bearbeitung nur zur Änderung der Großschreibung ist nicht notwendig.

Tastaturtasten sollten die Satzstil-Großschreibung verwenden, nicht die Großbuchstabenschreibung.
Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer groß geschrieben werden, wie Marken, die Großbuchstaben enthalten, oder Wörter, die von einem Personennamen abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele umfassen:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation, sollte immer so geschrieben werden, wie es markenrechtlich geschützt ist)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, locker zu sein, daher sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z.B. "don't", "can't", "shouldn't"), wenn Sie dies bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im laufenden Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Korrekt**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht einschließlich Daten in Code-Beispielen) verwenden Sie das Format "January 1, 1900".

  - **Korrekt**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.

  - **Korrekt**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Korrekt**: 1920s
  - **Falsch**: 1920's

- **Plural von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Korrekt**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie Englisch-Pluralformen, nicht die lateinisch- oder griechisch beeinflussten Formen.

- **Korrekt**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Apostrophe und Anführungszeichen. Auf MDN Web Docs verwenden wir nur gerade Apostrophe und Anführungszeichen. Dies liegt daran, dass wir für Konsistenz entweder das eine oder das andere wählen müssen. Sollten geschwungene Anführungszeichen oder Apostrophe ihren Weg in Code-Snippets finden, selbst in Inline-Code-Snippets, könnten Leser diese kopieren und einfügen und erwarten, dass sie funktionieren (was nicht der Fall sein wird).

- **Korrekt**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine &ldquo;geschwungenen Anführungszeichen.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Sätzen**: Ein einleitender Satz ist ein Nebensatz, der normalerweise am Anfang eines Satzes steht. Verwenden Sie ein Komma nach einem einleitenden Satz, um ihn vom folgenden Hauptsatz zu trennen.

  - Beispiel 1:
    - **Korrekt**: "In diesem Beispiel werden Sie sehen, wie man ein Komma benutzt."
    - **Falsch**: "In diesem Beispiel werden Sie sehen wie man ein Komma benutzt."
  - Beispiel 2:
    - **Korrekt**: "Wenn Sie nach Richtlinien suchen, sind Sie an der richtigen Stelle."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen sind Sie an der richtigen Stelle."
  - Beispiel 3:
    - **Korrekt**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "das Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serienkomma. Kommata trennen auch jedes Element der Liste.

  - **Korrekt**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.

  - **Korrekt**: "Mein Hund ist süß und klug."
  - **Falsch**: "Mein Hund ist süß, und klug."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber", und "oder", wenn sie zwei Hauptsätze verbinden. Wenn der Satz jedoch sehr lang oder komplex wird, sollten Sie ihn in zwei Sätze umformulieren.

  - Beispiel 1:
    - **Korrekt**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Korrekt**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Ein restriktiver Satz ist für die Bedeutung des Satzes wesentlich und benötigt keine Kommas, um vom übrigen Satz abgegrenzt zu werden. Ein restriktiver Satz wird normalerweise von "dass" eingeleitet und **sollte nicht** von einem Komma vorgeschaltet sein.

  - **Korrekt**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Ein nicht restriktiver Satz bietet zusätzliche Informationen und ist für die Bedeutung des Satzes nicht wesentlich. Ein nicht restriktiver Satz wird normalerweise von "welches" eingeleitet und sollte von einem Komma vorgeschaltet sein.

  - **Korrekt**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Feature ist."
  - **Falsch**: "Sie schreiben eine Richtlinie, das eine erlaubte Liste von Ursprüngen für jedes Feature ist."

- **Vor "wie zum Beispiel"**: Wenn "wie zum Beispiel" Teil eines nicht restriktiven Satzes ist und der verbleibende Satz ein Hauptsatz ist, verwenden Sie ein Komma vor "wie zum Beispiel".

  - **Korrekt**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise, wie zum Beispiel das Zusammenfügen, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise wie zum Beispiel das Zusammenfügen, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "wie zum Beispiel" verwendet werden sollte. Hier ist der Satz mit "wie zum Beispiel" für die Bedeutung des Satzes wesentlich.

  - **Korrekt**: "Web-Anwendungen werden durch Hinzufügen von Funktionen wie zum Beispiel der Manipulation von Audio und Video und dem Zugriff auf Rohdaten über WebSockets leistungsfähiger."
  - **Falsch**: "Web-Anwendungen werden durch Hinzufügen von Funktionen, wie zum Beispiel der Manipulation von Audio und Video, und dem Zugriff auf Rohdaten über WebSockets leistungsfähiger."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wortwurzel ist.

- **Korrekt**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als eine alternative Schreibweise oder als hauptsächlich in einer nicht-amerikanischen Form des Englischen verwendet aufgeführt.
Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) nachschlagen (mit einem zusätzlichen _u_ zur amerikanischen Standardform hinzugefügt), finden Sie den Satz "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternative Schreibweise.

- **Korrekt**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um auf HTML- und XML-Elemente zu verweisen, anstatt "Tag". Darüber hinaus sollte das Element in spitze Klammern "<>" eingewickelt und mit Backticks (\`) formatiert werden. Zum Beispiel wird die Verwendung von \<input\> in Backticks formatiert als `<input>`, wie es erwartet wird.

  - **Korrekt**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, die spitzen Klammern "<>" hinzufügt sowie einen Link zu seiner Referenzseite hinzufügt.

  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Quelle im Markdown: \\{{HTMLElement("span")\}})

- **Parameter vs. Argumente**: Der bevorzugte Ausdruck auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" zur Konsistenz wann immer möglich.

- **Benutzeroberflächenaktionen**: In Aufgabenfolgen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement nach seinem Label und Typ.

  - **Korrekt**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Während die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts des informellen Charakters unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien für verschiedene Teile jeder Seite auf, wie Überschriften, Notizen, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinken)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Stück Beispielcode sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das Szenario zu beschreiben, das durch das Codebeispiel demonstriert wird. Zum Beispiel, "Verwendung von Offsetdruck" und "Zurücksetzen auf Stil in vorheriger Ebene".
  - **Beschreibung**: Eine kurze Beschreibung, die dem Beispielcode vorausgeht und die Einzelheiten des Beispiels erklärt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel, "Im folgenden Beispiel werden zwei Kaskadierungsebenen in der CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis und die Funktionsweise des Codes beschreibt.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und seine Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature möglicherweise anwenden oder benötigen könnte.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile zu zerlegen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels, die denselben Typ (HTML, CSS und JavaScript) haben, vor der Ausführung des Beispiels zusammengefügt werden. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, die jeweils optional ihre eigenen Beschreibungen, Überschriften usw. haben können. Das macht die Dokumentation von Code unglaublich leistungsstark und flexibel.

Um mehr darüber zu erfahren, wie Sie Codebeispiele für MDN Web Docs gestalten und formatieren können, sehen Sie [Richtlinien zur Gestaltung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Querverweise (Verlinken)

Wenn Sie auf eine andere Seite oder einen Abschnitt einer Seite auf MDN nach ihrem Titel verweisen, folgen Sie der Satzgroßschreibung im Linktext (entspricht dem Titel der Seite oder des Abschnitts). Verwenden Sie die Satzgroßschreibung im Linktext, auch wenn er vom Titel der verlinkten Seite oder des Abschnitts abweicht (es könnte sein, dass die Großschreibung im Seitentitel oder Abschnittstitel falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN nach ihrem Titel zu verweisen, verwenden Sie folgenden Stil:

- **Korrekt**: "Siehe den [Reihenfolge von flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Falsch**: "Siehe den "[Reihenfolge von flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Befolgen Sie einen ähnlichen Stil, wenn Sie auf einen Abschnitt auf einer Seite verlinken, wie unten gezeigt:

- **Korrekt**: "Für weitere Informationen siehe den [Zuweisung in JavaScript](/de/docs/Web/JavaScript/Memory_management#allocation_in_javascript) Abschnitt auf der _Speicherverwaltung_-Seite."

Wenn der Abschnitt, zu dem Sie verlinken, sich auf derselben Seite befindet, können Sie auf die Lage des Abschnitts mit den Worten "oberhalb" oder "unterhalb" hinweisen.

- **Korrekt**: "Dieses Konzept wird detaillierter im [Barrierefreiheit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt unten beschrieben."

Sie können einen Teil eines Satzes verlinken, um auf einen Artikel oder den Abschnitt eines Artikels zu verweisen. Achten Sie darauf, beschreibende Ausdrücke als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite zu bieten.

- **Korrekt**: "Erfahren Sie mehr über [Anordnung von flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN können Sie auch ein Makro verwenden, um auf eine Referenzseite zu verlinken. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Um beispielsweise auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweisrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs einzufügen. Ihr Pull-Request zum Hinzufügen eines externen Links wird abgelehnt, wenn er nicht den hier beschriebenen Richtlinien entspricht.

Im Allgemeinen müssen Sie sicherstellen, dass es bei der Erwägung, einen externen Link hinzuzufügen, ein minimales Risiko für Folgendes gibt:

- Kaputte oder veraltete Links
- Anschein von Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Ziel der Verlinkung verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, überlegen Sie, ob Sie Inhalte innerhalb von MDN Web Docs verknüpfen. Interne Links sind leichter zu pflegen und machen die Gesamtheit von MDN Web Docs für die Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, beständig und weitgehend vertrauenswürdig sind. Sie sollten bevorzugen, Links zu externen Inhalten hinzuzufügen, die:

  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Notwendig zur Attribution, Zitierung oder Anerkennung sind (z.B. als Teil einer Creative Commons Attribuierung)
  - Wahrscheinlicher für das Thema gepflegt werden als solche Inhalte in MDN Web Docs zu integrieren (z.B. Release-Notes eines Anbieters)
  - Open Source oder Gemeinschaftsgetrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlt es an Relevanz, Wartbarkeit, Zugänglichkeit oder stellen sonstige Hindernisse für die Leser dar. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Allgemein oder unspezifisch sind (z.B. die Hauptseite eines Anbieters, anstatt der zugehörigen Dokumentation)
  - Vergänglich oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstdarstellend oder selbstwerbend sind (z.B. die eigene Arbeit des Autors außer MDN Web Docs)
  - Bezahlpflichtig sind (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in einkommensschwächeren Ländern unerschwinglich ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstdarstellend oder Spam sind**: Während ein persönlicher Blog-Post, ein Konferenzvortrag oder ein GitHub-Repository von Wert sind, kann die Verlinkung auf Ihre eigenen Quellen den Anschein eines Interessenkonflikts erwecken. Denken Sie zweimal nach, bevor Sie auf Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung mit dem Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull-Request offenlegen. Das Versäumnis, dies zu tun, könnte Ihre weitere Beteiligung an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Herausgeber einer Spezifikation sind und an der Dokumentation zur dieser Spezifikation mitarbeiten, dann wird das Verlinken auf diese Spezifikation erwartet und akzeptiert. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leicht merkbare URLs (auch bekannt als "Kurzlinks") zu verwandeln. Sie verschleiern jedoch auch das Ziel der URL. Außerdem kann bei bestimmten Verkürzern das Ziel nach ihren Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (benutzergenerierbare) URL-Shortener erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` ein kurzer URL ist, der von einem zufälligen Benutzer erstellt wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

Andererseits sind selbstverwaltete Verkürzer, die von den Organisationen, die auch die Ziel-URLs pflegen, empfohlen. `https://bugzil.la` wird von Mozilla besessen und betrieben und ist ein URL-Shortener, der zu `https://bugzilla.mozilla.org/` umleitet, was auch eine Mozilla-eigene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel, verwenden Sie `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###` und dann `####`; diese werden in die [HTML-Überschriftstags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>` und `<h4>` übertragen.

`##` ist die höchste erlaubte Stufe, da `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, die vierte Überschriftsebene hinzuzufügen, erwägen Sie, den Artikel in mehrere kleinere Artikel mit einer Startseite aufzuteilen. Alternativ sehen Sie, ob Sie die Informationen in Aufzählungspunkten präsentieren können, um das Hinzufügen der vierten Überschriftsebene zu vermeiden.

Behalten Sie die folgenden Dos und Don'ts im Kopf, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Teilen Sie ein Thema nicht in ein einziges Unterthema auf.
  Es sind entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Code-Begriffe anzugeben (z.B. "Verwendung der `FooBar`-Schnittstelle").
- **Erstellen Sie keine "Bumping Heads".** Dies sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne dass dazwischen erläuternder Text steht.
  Dies sieht nicht gut aus und hinterlässt Leser ohne erklärenden Text zu Beginn des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, folgen Sie diesen Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz es Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr großzügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder mindestens eine Lizenz, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike License](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, führen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG` Datei am Ende der Datei eine leere Zeile hat.
- Jedes Bild muss [beschreibenden `alt` Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten konsistent über alle Seiten hinweg formatiert und strukturiert werden.
Einzelne Listenelemente sollten mit geeigneter Zeichensetzung geschrieben werden, unabhängig vom Listenformat.
Je nach Art der Liste, die Sie erstellen, sollten Sie jedoch wie in den unten beschriebenen Abschnitten Ihren Schreibstil anpassen. In jedem Fall fügen Sie einen einführenden Satz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke prägnanter Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten die übliche Zeichensetzung beinhalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes, auch des letzten Satzes des Elements, ein Punkt erscheinen, so wie es in einem Absatz erwarten würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir enthalten:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Eine weitere Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel wird in jedem Aufzählungspunkt eine Bedingung gefolgt von einem Komma und einer kurzen Erklärung angegeben, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Schatten zu Text hinzu

  Wenn eines oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement aus drei oder weniger Wörtern besteht. Sofern möglich, folgen Sie jedoch der gleichen Struktur für alle Elemente in einer Liste; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einem Satz von Anweisungen zu nummerieren. Da Anweisungen komplex sein können, hat Klarheit Priorität, insbesondere wenn der Text in jedem Listenelement umfangreich ist. Wie bei Aufzählungslisten, folgen Sie den üblichen Zeichensetzungsregeln. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste richtig zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz zur Einführung der Anweisungen beginnen. Es ist wichtig, dem Benutzer Kontext zu geben, bevor Sie mit den Anweisungen beginnen.
  > 2. Beginnen Sie Ihre Anweisungen zu erstellen, und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können sehr umfangreich sein, also ist es wichtig, klar zu schreiben und die richtige Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel für das Schreiben einer Abschlusserklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungsschritte liefert, um eine nummerierte Liste mit der richtigen Formatierung zu erzeugen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Anweisungszwecke oder um jemanden durch einen geordneten Ablauf zu führen verwendet werden, halten Sie jedes Element fokussiert: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_-Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Präsentieren Sie im Allgemeinen die Links in einem Siehe auch Abschnitt in einem [Ein Aufzählung](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format mit jedem Element in der Liste als Phrase. Im Bereich [Webentwicklung lernen](/de/docs/Learn) auf MDN folgt der Siehe auch Abschnitt jedoch dem [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Um die Konsistenz auf MDN Web Docs zu gewährleisten, beachten Sie beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitts die folgenden Richtlinien.

#### Linktext

- Der Linktext sollte mit dem Titel der Seite oder des Abschnitts übereinstimmen, auf den verlinkt wird. Zum Beispiel, der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Attributes) Seite mit dem Seitentitel "ARIA-Zustände und -Eigenschaften" wird sein:
  - **Korrekt**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
- Verwenden Sie Satzgroßschreibung im Linktext, auch wenn er vom Titel der verlinkten Seite oder des Abschnitts abweicht. Es könnte sein, dass die Großschreibung im Seitentitel oder Abschnittstitel falsch ist. Zum Beispiel, der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in der korrekten Satzgroßschreibung wird sein:
  - **Korrekt**: [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Auch für externe Links verwenden Sie Satzgroßschreibung, auch wenn die Großschreibung auf der Zielartikelseite abweicht. Dies dient der Konsistenz auf MDN Web Docs. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie auf der Seite [Verlinkung zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_ Seite erklärt. Die Verwendung des Makros wird dem Schlüsselwort im Linktext Codeformatierung hinzufügen, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("Ein", "Eine", "Der") ist am Anfang des Listenpunkts erforderlich. Keine Zeichensetzung ist am Ende des Listenpunkts erforderlich, da es immer ein Begriff oder eine Phrase sein wird.
  - **Korrekt**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Der [`revert-layer`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Korrekt**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, verwenden Sie Backticks (\`) zur Codeformatierung von Schlüsselwörtern und Literalen im Linktext, auch wenn die Formatierung nicht in Titeln von Seiten und Abschnitten verwendet wird. Zum Beispiel für den Seitentitel "Array() Konstruktor", wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link herum minimal. Im Falle einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Zeichensetzung. Fügen Sie den gesamten verlinkten Text am Anfang hinzu, damit die Liste der Links leichter gescannt werden kann.
  - **Korrekt**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Checkboxen
- Verwenden Sie das Bindewort "und" nicht vor dem letzten Element in der Serie.
  - **Korrekt**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links versuchen Sie, nach Möglichkeit die Quellwebseite und das Jahr der Veröffentlichung oder der letzten Aktualisierung anzugeben. Die Angabe dieser Informationen im Voraus gibt Lesern eine klare Vorstellung vom Ziel, das sie durch Klicken auf den Link erreichen. Das Datum der Veröffentlichung oder der letzten Aktualisierung leitet Leser bei der Einschätzung der Relevanz des verlinkten Artikels an und hilft auch den MDN-Wartenden, Links zu Artikeln zu überprüfen, die seit langem nicht mehr aktualisiert wurden. Wenn Sie zum Beispiel einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Der folgende Listenpunkt ist ein Beispiel für das Hinzufügen eines Links zum Artikel [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019) im Siehe auch Abschnitt, zusammen mit einer Quellen- und Jahresangabe:
  - **Korrekt**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch die Namen der Autoren angeben. Sie können einige Beispiele dafür im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) unten sehen. Verzichten Sie darauf, die Namen von Blog-Posts oder GitHub-Repositories, die Sie verlinken, hinzuzufügen.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu verwandten Leitfaden- und Tutorial-Seiten. Diese empfohlene Reihenfolge soll in erster Linie die Scannbarkeit der Elemente in der Liste unterstützen.
- Wenn die Liste aus einer Mischung von internen und externen Links besteht, listen Sie zuerst die internen und dann die externen Links auf.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie einer alphabetischen oder einfach-zu-anspruchsvollen Reihenfolge, was auch immer mehr Sinn für den Kontext ergibt.

### Unterseiten

Wenn Sie einige Artikel über ein Thema oder einen Fachbereich hinzufügen müssen, tun Sie dies in der Regel, indem Sie eine Startseite erstellen und dann für jeden der Artikel Unterseiten hinzufügen.
Die Startseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können das Einfügen von Seiten in die Liste automatisch mit einigen von uns erstellten Makros automatisieren.

Zum Beispiel, betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Haupttablature-Seite
- [JavaScript/Guide/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an oberster Stelle der Hierarchie zu platzieren, da dies die Seite verlangsamt und die Suche und Seitennavigation weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom Seitenslug unterscheiden, der der Teil der URL der Seite ist, der der `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien beim Definieren eines Slugs:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Ebene in der Hierarchie erstellen, sollte die neue Ebene in der Slug-Struktur nur ein oder zwei Wörter lang sein.
- Slugs sollten für Mehrwort-Komponenten einen Unterstrich verwenden, wie `Getting_started` in `/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started`.
- Folgen Sie der Satzgroßschreibung der Slugs ebenso für jede Komponente, wie `Getting_started` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und werden auch zur Strukturierung der Seitenhierarchie in der Navigationsleiste oben auf der Seite verwendet. Ein Seitentitel kann sich vom Seitenslug unterscheiden, wie im [Slugs](#slugs) Abschnitt erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften die Satzstil-Großschreibung verwenden (nur das erste Wort und Eigennamen großschreiben) statt der Schlagzeilenstil-Großschreibung:

  - **Korrekt**: "Eine neue Methode zur Erstellung von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode Zur Erstellung Von JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die vor der Einrichtung dieser Stilregel geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir arbeiten allmählich daran.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diese Inhalte strukturieren, ist einer der ersten Schritte beim Schreiben. Eine Tabelle der Inhalte schreiben kann Ihnen helfen zu entscheiden, wie Sie Informationen ordnen möchten. Beginnen Sie mit einfachen Konzepten und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Beginnen Sie mit konzeptionellen Informationen und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und für Abschnitte oder Unterabschnitte:

  - **Von höher zu niedriger**: Wie im [Überschriftsebenen](#überschriftsebenen) Abschnitt erklärt, gehen Sie von der höheren `##` zu der niedrigeren `####`. Verwenden Sie höhere Überschriften für breitere Einführungsüberschriften, und verwenden Sie spezifischere Überschriften, während Sie zu niedrigeren Überschriftsebenen fortschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebene gruppiert sind. Das Benennen der Titel verschiedener Abschnitte kann Ihnen dabei helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter im Text und in der Tabelle der Inhalte zu überfliegen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Beispielsweise verwenden Sie für einen Abschnitt, der HTML-Elemente einführt, den Titel "HTML-Elemente" statt "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine einzelne Idee oder ein Konzept, das im Abschnitt behandelt wird. Versuchen Sie deshalb, soweit möglich, nicht die Konjunktion "und" in einem Titel zu verwenden.
  - **Verwenden Sie einen parallelen Aufbau**: Verwenden Sie ähnliche Sprache für Titel auf der gleichen Überschriftsebene. Wenn ein Titel auf der `###` Überschriftsebene beispielsweise Gerundien verwendet, das sind Wörter, die auf "-ing" enden, wie "Installation", dann versuchen Sie, alle Titel auf dieser Überschriftsebene mit Gerundien zu schreiben. Wenn ein Titel mit einem imperative Verb beginnt, wie "Verwenden", "Einrichten", dann schreiben Sie alle Titel auf dieser Überschriftsebene beginnend mit einem impérative Verb.
  - **Vermeiden Sie wiederkehrende Begriffe in niedrigeren Überschriften**: Wiederholen Sie den Text einer höheren Überschrift nicht in niedrigeren Überschriften. Beispielsweise in einem Abschnitt mit dem Titel "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einführenden Sätzen" statt "Kommas nach einführenden Sätzen".
  - **Beginnen Sie nicht mit Artikel**: Vermeiden Sie, Titel mit den Artikeln "ein", "eine" oder "der" zu beginnen.
  - **Fügen Sie einführende Informationen hinzu**: Nach einem Titel fügen Sie einen einleitenden Text hinzu, um zu erläutern, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien zur Gestaltung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Richtlinien zur Gestaltung von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Richtlinien zur Gestaltung von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Richtlinien zur Gestaltung von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Richtlinien zur Gestaltung von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Nutzung und Stil haben, die hier nicht behandelt werden, empfehlen wir Ihnen, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortplattform zur englischen Sprachverwendung
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich fundierte, benutzerfreundliche Ratschläge; sehr gut für nicht-muttersprachliche Sprecher, insbesondere für Präpositionsverwendung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
