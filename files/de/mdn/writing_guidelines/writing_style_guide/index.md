---
title: Leitfaden für den Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Leitfaden für den Schreibstil beschreibt, wie Inhalte auf den MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen die Sprach- und Stilkonstanz über die gesamte Website hinweg sicherstellen. Wir legen jedoch mehr Wert auf den Inhalt als auf das Format, daher fühlen Sie sich nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht enttäuscht oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um sie an diesen Leitfaden anzupassen. Die Prüfer könnten Ihnen auch diesen Stil-Leitfaden zeigen, wenn Sie eine Inhalts-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentation. Andere Sprachen können und sollen eigene Stil-Leitfäden erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteam-Seite veröffentlicht werden. Dieser Leitfaden sollte jedoch weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach den allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden, wie z.B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#Berücksichtigen_Sie_Ihre_Zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#Berücksichtigen_Sie_die_drei_Cs_des_Schreibens)
- [Relevante Beispiele einfügen](#Relevante_Beispiele_einfügen)
- [Eine beschreibende Einführung geben](#Eine_beschreibende_Einführung_geben)
- [Eine inklusive Sprache verwenden](#Eine_inklusive_Sprache_verwenden)
- [SEO-gerecht schreiben](#SEO-gerecht_schreiben)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Kopf. Eine Seite zu fortgeschrittenen Netzwerktechniken muss beispielsweise wahrscheinlich nicht so ausführlich auf grundlegende Netzwerkkonzepte eingehen wie eine typische Seite über Netzwerke. Denken Sie daran, dass dies Richtlinien sind, die nicht in jedem Fall zutreffen müssen.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Sprachstil und eindeutige Pronomen. Schreiben Sie kurze Sätze mit nur einer Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, unter Berücksichtigung der Zielgruppe.
- **Kompakt**: Bei der Erstellung eines Dokuments ist es wichtig zu wissen, wie viel gesagt werden muss. Wenn Sie zu viele Details liefern, wird die Seite mühsam zu lesen und wird selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie dasselbe Vokabular konsistent auf der gesamten Seite und über mehrere Seiten hinweg verwenden.

### Relevante Beispiele einfügen

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den zu vermittelnden Inhalt besser zu veranschaulichen. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen greifbarer und praktischer zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird, und um Randfälle zu erklären, die möglicherweise existieren. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen für Probleme, die möglicherweise auftreten, zu demonstrieren.

### Eine beschreibende Einführung geben

Stellen Sie sicher, dass der einleitende Absatz vor der ersten Überschrift die Informationen, die die Seite abdecken wird, sowie eventuell das, was die Leser nach dem Durchlesen des Inhalts erreichen können, angemessen zusammenfasst. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz den Leser über die Themen informieren, die behandelt werden, sowie über das erforderliche Vorwissen, das der Leser haben sollte, falls vorhanden. Der Eröffnungsabsatz sollte die Technologien und/oder APIs, die dokumentiert oder diskutiert werden, erwähnen, mit Links zu den zugehörigen Informationen, und er sollte Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Einführungsbeispiel ist zu kurz. Es fehlen wichtige Informationen, wie das genaue "Streichen" von Texten, wo der Text gezeichnet wird, usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, ist jetzt jedoch viel zu lang. Es gibt zu viele Details, und der Text taucht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben sind.

  > Wenn sie aufgerufen wird, streicht die Methode **`CanvasRenderingContext2D.strokeText()`** der Canvas 2D API die Zeichen in der angegebenen Zeichenfolge, beginnend bei den angegebenen Koordinaten und verwendet dabei die aktuelle Stiftfarbe.
  > Im Bereich der Computergrafik bedeutet "Streichen" von Text, die Konturen der Glyphen in der Zeichenfolge ohne Füllung zu zeichnen.
  >
  > Der Text wird unter Verwendung der aktuellen Schrift des Kontexts gezeichnet, wie im [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; ist der Wert `"center"`, wird die Zeichenfolge beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte der Zeichenfolge liegt.
  > Ist der Wert `"left"`, wird die Zeichenfolge beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Optional können Sie einen vierten Parameter angeben, der es Ihnen ermöglicht, eine maximale Breite für die Zeichenfolge in Pixel festzulegen.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um beim Zeichnen in einen Raum zu passen, der so breit ist.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen einer Zeichenfolge mit Farbe zu füllen, anstatt nur die Konturen der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Hier sehen wir einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die Methode **`strokeText()`** des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), die Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API) ist, streicht (zeichnet die Konturen von) die Zeichen einer angegebenen Zeichenfolge, verankert an der durch die angegebenen X- und Y-Koordinaten angegebenen Position.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für weitere Details und Beispiele, siehe den [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text)-Abschnitt auf der Seite zum Zeichnen von Grafiken sowie unseren Hauptartikel zum Thema [Texte zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Eine inklusive Sprache verwenden

MDN hat ein weites und diverses Publikum.
Wir ermutigen dazu, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gängigen Begriffen, die in der Dokumentation verwendet werden:

- Verwenden Sie anstelle der Begriffe **Master** und **Slave** die Begriffe **Haupt** und **Replikat**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Kohärenz** ersetzt werden.
- Anstatt **Dummy**, verwenden Sie **Platzhalter**.
- Sie sollten die Begriffe **verrückt** und **wahnsinnig** nicht in der Dokumentation verwenden; sollte der Fall eintreten, verwenden Sie stattdessen **fantastisch**.

Es ist am besten, geschlechterneutrale Sprache in jedem Text zu verwenden, in dem das Geschlecht für das Thema irrelevant ist.
Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn es um eine Person beider Geschlechter geht, ist "er"/"sein" nicht angemessen.

Sehen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu nutzen."
- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchte, ihre Webcam zu nutzen."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu nutzen."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des dritten Person Plural, allgemein als "[Singular 'they'](https://en.wikipedia.org/wiki/Singular_they)." bekannt. Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine weitere Option ist, die Benutzer zu pluralisieren, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu nutzen."

Die beste Lösung ist natürlich, die Pronomen neu zu schreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers für den Zugriff auf die Webcam anfordert, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel für den Umgang mit dem Problem ist wohl besser.
Nicht nur ist es grammatikalisch korrekter, es entfernt auch einige der Schwierigkeiten, die mit dem Umgang mit Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise sehr unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch Übersetzer erleichtern.

### SEO-gerecht schreiben

Während das Hauptziel jeder Schrift auf den MDN Web Docs immer sein sollte, über offene Webtechnologie zu informieren und zu erklären, damit Entwickler schnell lernen können, was sie tun möchten, oder um die kleinen Details zu finden, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Wir können dies erreichen, indem wir bei der Erstellung an Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) denken.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, damit Leser leicht finden können, was sie benötigen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und markiert ist, um den Suchmaschinen die benötigten Kontexte und Hinweise zu geben, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist gut zu beachten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn ordnungsgemäß von Suchmaschinen indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt verschiedener Seiten textlich zu ähnlich ist, gehen Suchmaschinen davon aus, dass es sich bei den Seiten um dasselbe Thema handelt, selbst wenn sie es nicht sind.
  Wenn eine Schnittstelle zum Beispiel die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Worten und mit demselben Beispiel. Das macht es Suchmaschinen schwer zu wissen, welche welche ist, und sie teilen den Page Rank, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Deshalb ist es wichtig, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, die helfen können, dies zu erreichen:

  - **Mehr einzigartige Konzepte erklären**: Denken Sie über Anwendungsfälle nach, in denen möglicherweise mehr Unterschiede bestehen, als man denkt. Zum Beispiel, im Fall der Dokumentation der `width`- und `height`-Eigenschaften, könnten Sie über die verschiedenen Möglichkeiten schreiben, wie horizontaler und vertikaler Raum unterschiedlich genutzt werden, und eine Diskussion über die entsprechenden Konzepte bieten. Möglicherweise können Sie die Verwendung von `width` im Zusammenhang mit der Schaffung von Raum für eine Seitenleiste erwähnen, während `height` verwendet wird, um vertikales Scrollen oder Fußzeilen zu handhaben. Die Aufnahme von Informationen über Zugänglichkeitsprobleme ist ebenfalls eine nützliche und wichtige Idee.
  - **Verschiedene Beispiele verwenden**: Beispiele in diesen Situationen sind oftmals sogar ähnlicher als der Haupttext, da die Beispiele in der Regel sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und dadurch keine echten Änderungen bei der Wiederverwendung erforderlich sind. So werfen Sie das Beispiel weg und schreiben ein neues, oder bieten zumindest mehrere Beispiele an, von denen mindestens einige unterschiedlich sind.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch eine Darstellung, wie es funktioniert, sollte in einem geeigneten Detaillierungsgrad gegeben, abhängig von der Thematik und dem angestrebten Publikum.

  Der einfachste Weg, um zu vermeiden, dass man sich zu sehr ähnelt, ist natürlich, jeden Artikel von Grund auf neu zu schreiben, wenn es die Zeit erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt einer Seite zu wenig ist (im SEO-Jargon als "dünne Seiten" bezeichnet), werden solche Seiten von Suchmaschinen nicht genau (oder überhaupt nicht) katalogisiert. Zu kurze Inhaltsseiten sind schwer zu finden. Als Leitlinie ist es wichtig, sicherzustellen, dass Seiten auf den MDN Web Docs in der Regel nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, aber behandeln Sie diese Richtlinie als Mindestzielgröße, wenn möglich.

  Hier sind einige grundlegende Richtlinien, um sicherzustellen, dass Sie Seiten erstellen, die genügend Inhalt haben, um ordnungsgemäß auffindbar zu sein, ohne sie mit unnötigem Text zu überfrachten:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalt fehlt, fügen Sie ihn hinzu. Wir versuchen, echte "Stub"-Seiten auf den MDN Web Docs zu vermeiden, obwohl sie existieren; es gibt jedoch viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie ordnungsgemäß für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden - dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung abzugeben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es besondere Fälle? Gibt es bekannte Einschränkungen, die der Leser kennen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder mindestens die Parameter (oder Eigenschaften oder Attribute), die Benutzer aus dem Bereich Anfänger bis Mittelstufe wahrscheinlich verwenden werden, sowie alle erweiterten, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht eröffnet werden, was das Beispiel tun wird, welche zusätzlichen Kenntnisse zum Verständnis erforderlich sein könnten usw. Nach dem Beispiel (oder eingestreut unter Stücke des Beispiels) sollte Text sein, der erklärt, wie der Code funktioniert. Sparen Sie nicht bei den Details oder der Fehlerbehandlung in den Beispielen. Denken Sie daran, dass Benutzer _wird_ Ihr Beispiel kopieren und in ihr eigenes Projekt einfügen, und Ihr Code _wird_ auf Produktionsseiten verwendet! Weitere nützliche Informationen finden Sie in unseren [Richtlinien zur Stilpflege von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt zu erwarten, dass ein Benutzer herausfindet, dass die dokumentierte Methode ein gängiges Entwicklungsproblem lösen kann, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, um zu erklären, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie proper [`alt`](/de/docs/Web/HTML/Element/img#alt) Texte zu allen Bildern und Diagrammen hinzu. Dieser Text, ebenso wie Beschriftungen auf Tabellen und anderen Figuren, zählen, da "Spiders" Bilder nicht crawlen können und daher `alt` Text Suchmaschinen-Crawlern erzählt, welchen Inhalt das eingebettete Medium enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder nicht verwandte Schlüsselwörter hinzuzufügen, um Suchmaschinen-Rankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und wird in der Regel bestraft.
    > Ebenso, **fügen Sie nicht** wiederholendes, nicht hilfreiches Material oder Keyword-Blöcke innerhalb der eigentlichen Seite hinzu, um die Größe der Seite und ihr Suchranking zu verbessern. Dies schadet mehr als es nützt, sowohl der Lesbarkeit des Inhalts als auch unseren Suchergebnissen.

- **Fokus auf den Themeninhalt**: Es ist viel besser, Inhalte um das Thema der Seite zu schreiben als um ein spezifisches Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einfügen könnten; tatsächlich erstellen viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (zwischen kurzen, mittleren und langen Schlüsselwörtern variierend), die in ein Artikel eingefügt werden sollen, abhängig von der Länge. Dies wird Ihre Wortwahl diversifizieren und zu weniger Wiederholung führen.

## Schreibstil

Neben dem Schreiben von grammatisch korrekten Sätzen auf Englisch empfehlen wir, diese Richtlinien zu befolgen, um den Inhalt über die MDN Web Docs hinweg einheitlich zu halten.

- [Abkürzungen und Akronyme](#Abkürzungen_und_Akronyme)
- [Großschreibung](#Großschreibung)
- [Verkürzungen](#Verkürzungen)
- [Zahlen und Numerale](#Zahlen_und_Numerale)
- [Pluralisierung](#Pluralisierung)
- [Apostrophe und Anführungszeichen](#Apostrophe_und_Anführungszeichen)
- [Kommas](#Kommas)
- [Bindestriche](#Bindestriche)
- [Rechtschreibung](#Rechtschreibung)
- [Terminologie](#Terminologie)
- [Stimme](#Stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das die Anfangsbuchstaben jedes Wortes aus einem Satz verwendet. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Akronyme, die den Benutzern wahrscheinlich unbekannt sind. Im Zweifelsfall erweitern Sie den Begriff. Noch besser, verlinken Sie ihn auf den Artikel oder das [Glossar](/de/docs/Glossary), der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie vollständige Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammern Ausdrucke und Anmerkungen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->

  - **Richtig**: Webbrowser (z.B., Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (eg: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  Im regulären Text (d.h. außerhalb von Anmerkungen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... Webbrowser und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B., Firefox, können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente lateinischer Abkürzungen zusammen:

<!-- markdownlint-disable search-replace -->

| Abkürzung | Latein           | Englisch                      |
| --------- | ---------------- | ----------------------------- |
| cf.       | _confer_         | vergleichen                   |
| z.B.      | _exempli gratia_ | zum Beispiel                  |
| et al.    | _et alii_        | und andere                    |
| usw.      | _et cetera_      | und so weiter                 |
| d.h.      | _id est_         | das heißt, mit anderen Worten |
| N.B.      | _nota bene_      | wohlgemerkt                   |
| P.S.      | _post scriptum_  | Nachschrift                   |

<!-- markdownlint-enable search-replace -->

> [!NOTE]
> Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige werden so selten verwendet, dass viele Leser ihre Bedeutungen entweder verwirren oder nicht verstehen.
>
> Achten Sie auch darauf, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Beispielsweise sollten Sie darauf achten, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Bei Pluralen von Abkürzungen und Akronymen fügen Sie ein _s_ hinzu. Verwenden Sie niemals ein Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Verkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text die ausgeschriebene Form "versus".

  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Modifikator) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, daher finden Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN.
> Sie können diese bei anderen Änderungen, die Sie vornehmen, ändern, aber nur zum Ändern der Großschreibung einen Artikel zu bearbeiten, ist nicht erforderlich.

Tastaturtasten sollten den Satz-Großbuchstabenstil und nicht den All-Caps-Großbuchstabenstil verwenden. Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>". Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie beispielsweise Markennamen, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Syntax des Codes erfordert Kleinschreibung). Einige Beispiele:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Warenzeichen der Oracle Corporation, es sollte immer markenrechtlich geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Verkürzungen

Unser Schreibstil neigt zu einem lockeren Ton, daher können Sie nach Belieben Verkürzungen verwenden (z.B. "don't", "can't", "shouldn't").

### Zahlen und Numerale

- **Kommas**: Im Fließtext verwenden Sie nur bei fünfstelligen und größeren Zahlen Kommas.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (außer in Codebeispielen) verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plural von Numeralen**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englische Pluralformen, nicht die lateinisch- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Apostrophe. Bei MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies geschieht, weil wir für Konsistenz eine der beiden Varianten wählen müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Codeausschnitten, auch in Inline-Ausschnitten, vorkommen, könnten Leser sie kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie nicht &ldquo;geschwungene Anführungszeichen.&rdquo;

### Kommas

Die nachstehende Liste beschreibt einige der häufigen Situationen, in denen wir auf die Kommaregeln achten müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitenden Nebensatz ist ein abhängiger Satz, der sich in der Regel am Anfang eines Satzes befindet. Verwenden Sie ein Komma nach einem einleitenden Nebensatz, um diesen von dem nachfolgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel, lernen Sie, wie man Kommas verwendet."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie man Kommas verwendet."
  - Beispiel 2:
    - **Richtig**: "Falls Sie nach Richtlinien suchen, sind Sie an der richtigen Stelle."
    - **Falsch**: "Falls Sie nach Richtlinien suchen sind Sie an der richtigen Stelle."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen, tendieren Sie dazu, eine numerische Tastatur zum Eingeben von Daten zu erhalten."
    - **Falsch**: "Auf mobilen Plattformen tendieren Sie dazu, eine numerische Tastatur zum Eingeben von Daten zu erhalten."

- **Vor Konjunktionen**: Das "Serienkomma" (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Gegenständen erscheint. Bei MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste mit zwei Elementen.

  - **Richtig**: "Mein Hund ist klug und süß."
  - **Falsch**: "Mein Hund ist klug, und süß."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, überlegen Sie, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Ein restriktiver Nebensatz ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas, um von dem restlichen Satz abgesetzt zu werden. Ein restriktiver Nebensatz wird in der Regel durch "dass" eingeleitet und **sollte nicht** durch ein Komma getrennt werden.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen, die Sie benötigen, um Ihr Ziel zu erreichen, enthält."

  Ein nichtrestriktiver Nebensatz bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nichtrestriktiver Nebensatz wird in der Regel durch "welches" eingeleitet und sollte durch ein Komma getrennt werden.

  - **Richtig**: "Sie schreiben eine Policy, welche eine erlaubte Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Policy welche eine erlaubte Liste von Ursprüngen für jede Funktion ist."

- **Vor "zum Beispiel"**: Wenn "zum Beispiel" Teil eines nichtrestriktiven Nebensatzes ist und der restliche Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "zum Beispiel".

  - **Richtig**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise, zum Beispiel Verknüpfen, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise zum Beispiel Verknüpfen, Umkehren, und Sortieren."

  Das untenstehende Beispiel zeigt, wann kein Komma bei "zum Beispiel" verwendet werden sollte. Hier ist der Satz, der "zum Beispiel" enthält, für die Bedeutung des Satzes wesentlich.

  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen hinzufügen, wie z.B. Audio- und Videomanipulation sowie den Zugriff auf Rohdaten über WebSockets ermöglichen."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen hinzufügen, wie z.B. Audio- und Videomanipulation, und den Zugriff auf Rohdaten über WebSockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit einem Bindestrich versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als Variante oder primär in nicht-amerikanischem Englisch verwendet gelistet.
Wenn Sie beispielsweise "behaviour" mit zusätzlichem _u_ nach dem amerikanischen Standard suchen, finden Sie den Satz "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, "behavior".
Verwenden Sie keine alternative Rechtschreibung.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und zulässige Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber dennoch als Fehler erkannt werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um auf HTML- und XML-Elemente Bezug zu nehmen, anstelle von "Tag". Darüber hinaus sollte das Element in spitzen Klammern "<>" eingeschlossen sein und sollte mit Rückenhöckchen (\`) formatiert sein, z. B. `<input>`.

  - **Richtig**: das `<span>` Element
  - **Falsch**: der span Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, die spitzen Klammern "<>" hinzufügt und einen Link zu seiner Referenzseite bereitstellt.

  - **Unter Verwendung von Rückenhöckchen**: `<span>`
  - **Verwenden des Makros**: {{HTMLElement("span")}} (Quelltext in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff in den MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" zur Konsistenz, wann immer möglich.

- **Benutzeroberflächenaktionen**: In Aufgabenfolgen beschreiben Sie Aktionen der Benutzeroberfläche im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und Typs.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Während die aktive Stimme bevorzugt wird, ist auch die passive Stimme akzeptabel, angesichts des informellen Tons unseres Inhalts.
Seien Sie jedoch konsistent damit.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite befolgt werden sollten, wie z.B. Überschriften, Anmerkungen, Links und Beispiele.

- [Codebeispiele](#Codebeispiele)
- [Querverweise (Verlinkung)](#Querverweise_Verlinkung)
- [Externe Links](#Externe_Links)
- [Verkürzte URLs (Kurzlinks)](#Verkürzte_URLs_Kurzlinks)
- [Überschriftenebenen](#Überschriftenebenen)
- [Bilder und andere Medien](#Bilder_und_andere_Medien)
- [Listen](#Listen)
- [Abschnitt "Siehe auch"](#Abschnitt_Siehe_auch)
- [Unterseiten](#Unterseiten)
- [Slugs](#Slugs)
- [Titel](#Titel)

### Codebeispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Vorgehensweisen beim Schreiben eines Codebeispiels für die MDN Web Docs:

- Jedes Codebeispiel sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das durch das Codebeispiel demonstrierte Szenario beschreibt. Zum Beispiel "Offset-Druck verwenden" und "Zurück zum Stil in der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung, die vor dem Codebeispiel steht, die die Einzelheiten des Beispiels nennt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel "Im folgenden Beispiel werden zwei Kaskadenschichten in der CSS, `base` und `special`, definiert."
  - **Ergebniserklärung**: Eine Erklärung nach dem Codebeispiel, die das Ergebnis beschreibt und erklärt, wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und seine Verwendung zeigen, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature nutzen möchte oder muss.
- Wenn Sie an einem großen Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile aufzubrechen, damit sie einzeln beschrieben werden können.
- Wenn Sie [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels, die denselben Typ haben (HTML, CSS und JavaScript), vor dem Ausführen des Beispiels zusammengefügt werden. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, die jeweils optional eigene Beschreibungen, Überschriften und so weiter enthalten. Dies macht die Dokumentation von Code unglaublich mächtig und flexibel.

Um zu erfahren, wie Sie Codebeispiele für die MDN Web Docs stilisieren oder formatieren, lesen Sie [Richtlinien für die Stilpflege von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Beim Verweisen auf eine andere Seite oder einen Abschnitt einer Seite auf MDN mit ihrem Titel, folgen Sie der Satzschreibung im Linktext (passen Sie den Seitentitel oder Abschnittstitel an). Verwenden Sie die Satzschreibung im Linktext, auch wenn sie sich vom verlinkten Seitentitel oder Abschnittstitel unterscheidet (es könnte sein, dass der Fall im Seitentitel oder Abschnittstitel falsch verwendet wurde). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN mit ihrem Titel zu verweisen, verwenden Sie folgenden Stil:

- **Richtig**: "Siehe den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)-Leitfaden."
- **Falsch**: "Siehe den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)"-Leitfaden."

Verwenden Sie einen ähnlichen Stil, wenn Sie auf einen Abschnitt auf einer Seite verlinken, wie unten gezeigt:

- **Richtig**: "Für weitere Informationen, siehe den [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript)-Abschnitt auf der _Memory management_-Seite."

Wenn der Abschnitt, auf den Sie verlinken, sich auf derselben Seite befindet, können Sie den Ort des Abschnitts durch die Worte "oben" oder "unten" andeuten.

- **Richtig**: "Dieses Konzept wird im [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility)-Abschnitt unten näher beschrieben."

Sie können einen Teil eines Satzes mit einem Artikel oder dem Abschnitt eines Artikels verlinken. Achten Sie darauf, beschreibende Phrasen als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite zu bieten.

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Elemente bestellt](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN gibt es eine weitere Möglichkeit, auf eine Referenzseite zu verlinken, indem Sie ein Makro verwenden. Diese Makros werden auf der [Commonly-used macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references)-Seite beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir befolgen ähnliche Querverweisrichtlinien in den [Siehe auch](#Abschnitt_Siehe_auch)-Sektionen am Ende von Referenzseiten, Glossar-Seiten und Leitfäden.

### Externe Links

Externe Links sind unter bestimmten Umständen auf den MDN Web Docs erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf den MDN Web Docs hinzuzufügen. Ihre Pull-Anfrage zum Hinzufügen eines externen Links wird abgelehnt, wenn sie nicht den hier beschriebenen Richtlinien entspricht.

Wenn Sie erwägen, einen externen Link zu den MDN [Lernen-Webentwicklung](/de/docs/Learn_web_development)-Inhalten hinzuzufügen, lesen Sie bitte auch die [Lern-Webentwicklung-Schreib-Richtlinien > Externe Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

Im Allgemeinen, wenn Sie erwägen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko des Folgenden minimal ist:

- Veraltete oder nicht funktionierende Links
- Anschein einer Befürwortung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, die MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Link-Ziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie erwägen, Inhalte innerhalb der MDN Web Docs zu verlinken. Interne Links sind einfacher zu warten und machen die Gesamtheit der MDN Web Docs für die Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten das Hinzufügen von Links zu externen Inhalten bevorzugen, die:

  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Notwendig für Urheberrecht, Zitation oder Anerkennung sind (z.B. als Teil einer Creative Commons-Zuschreibung)
  - Wahrscheinlicher für das Thema aufrechterhalten werden als das Integrieren solcher Inhalte in die MDN Web Docs selbst (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder gemeinschaftlich betrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links mangeln an Relevanz, Wartbarkeit, Zugänglichkeit oder stellen dem Leser anderweitige Hindernisse in den Weg. Vermeiden Sie das Hinzufügen von Links zu externen Inhalten, die:

  - Allgemein oder unspezifisch sind (z.B. die Homepage eines Anbieters, anstelle der zugehörigen Dokumentation)
  - Vergänglich oder unbetreut sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder eigennützig sind (z.B. eigene Werke des Autors außerhalb der MDN Web Docs)
  - Bezahlbarrieren (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in Ländern mit geringem Einkommen unzugänglich ist)
  - Unzugänglich (z.B. ein Video ohne Untertitel)

- **Selbstfördernde oder Spam-Links**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository von Wert sind, kann das Verlinken auf eigene Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie sich gründlich, bevor Sie auf Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Verbindung mit dem Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Anfrage offenlegen. Das Versäumnis, dies zu tun, kann Ihre weitere Teilnahme mit den MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie beispielsweise der Herausgeber einer Spezifikation sind und zur Dokumentation dieser Spezifikation beitragen, dann wird erwartet und akzeptiert, dass Sie auf diese Spezifikation verlinken. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Verkürzer (wie TinyURL oder Bitly) kann großartig sein, um lange Links zu kleinen, leichter erinnerbaren URLs zu verkürzen (auch als "Kurzlinks" bekannt). Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann mit bestimmten Verkürzern das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für bösartige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über von Dritten (user-generatable) URL-Verkürzer erstellt wurden. Wenn `https://myshort.link/foobar` beispielsweise eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

Andererseits werden von Organisationen betreute Erstverkürzer, die gleichzeitig das Ziel kennen, befürwortet. `https://bugzil.la` ist im Besitz und wird betrieben von Mozilla und ist ein URL-Verkürzer, der auf `https://bugzilla.mozilla.org/` umleitet, welches ebenfalls eine Mozilla-eigene Domain ist. Verwenden Sie in diesem Fall die kürzere URL. Verwenden Sie beispielsweise `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden. Verwenden Sie diese Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; dies entspricht den [HTML-Überschriftentags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`, entsprechend.

`##` ist die höchste zulässige Ebene, weil `#` für den Seitentitel reserviert ist. Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftenebene hinzuzufügen, überlegen Sie, ob der Artikel in mehrere kleinere Artikel mit einer Übersichtsseite aufgeteilt werden kann. Alternativ prüfen Sie, ob die Informationen in Aufzählungspunkten präsentiert werden können, um die Hinzufügung einer vierten Überschriftenebene zu vermeiden.

Beachten Sie die folgenden Dos und Don'ts beim Erstellen von Überschriften für Unterabschnitte:

- **Erstellen Sie keine einzelnen Unterabschnitte**. Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es ist entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros in Überschriften.** Allerdings können Sie Rückenhöckchen verwenden, um Codebezeichnungen anzugeben (z.B. "Verwendung des `FooBar`-Interfaces").
- **Erstellen Sie keine "störrischen Überschriften".** Dies sind Überschriften, denen unmittelbar eine Unterüberschrift folgt, ohne dass zwischen ihnen Inhaltstext enthalten ist.
  Das sieht nicht gut aus und lässt die Leser ohne erklärenden Text am Anfang des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, folgen Sie diesen Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen die Nutzung erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr freizügige Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, komprimieren Sie sie über <https://tinypng.com> oder <https://imageoptim.com>, um das Seitgewicht zu reduzieren.
- Für `SVG`, bearbeiten Sie den Code über [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt` Text beinhalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten über alle Seiten hinweg einheitlich formatiert und strukturiert sein. Einzelne Listenelemente sollten mit geeigneter Zeichensetzung geschrieben werden, unabhängig vom Listenformat. Je nach Art der Liste, die Sie erstellen, möchten Sie Ihre Schreibweise anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen fügen Sie einen Einleitungssatz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke von prägnanten Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder ein Subjekt oder beides fehlen) in Aufzählungslisten sollten mit standardmäßiger Zeichensetzung versehen werden — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss ein Punkt am Ende jedes Satzes erscheinen, einschließlich des letzten Satzes des Elements, wie es in einem Absatz zu erwarten wäre. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten enthalten sein:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine weitere Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur sich von Aufzählungspunkt zu Aufzählungspunkt wiederholt. In diesem Beispiel beschreibt jeder Aufzählungspunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist kein Punkt am Ende erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - EigenschaftenA: Setzt die Hintergrundfarbe
  > - EigenschaftenB: Fügt Schatten zum Text hinzu

  Wenn eines oder mehrere Listenelemente vollständige Sätze enthalten, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement drei oder weniger Wörter enthält. Versuchen Sie jedoch, die gleiche Struktur für alle Elemente in einer Liste zu verwenden; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen aufzuzählen. Da Anweisungen komplex sein können, hat Klarheit Priorität, besonders wenn der Text in jedem Listenelement langwierig ist. Ebenso wie die Aufzählungslisten sollten standardmäßige Zeichensetzungsrichtlinien verwendet werden. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz öffnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie damit, Ihre Anweisungen zu erstellen, und halten Sie jeden Schritt in einem eigenen nummerierten Element. Ihre Anweisungen könnten sehr umfangreich sein, also ist es wichtig, klar zu schreiben und die korrekte Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungen zum Erstellen einer nummerierten Liste mit der richtigen Formatierung bereitstellt.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anweisungszwecke verwendet werden oder jemanden durch ein geordnetes Verfahren führen, halten Sie jeden Punkt fokussiert: ein nummeriertes Element pro Schritt.

### Abschnitt "Siehe auch"

Die meisten Leitfäden, Referenzseiten und sogar Glossar-Seiten auf den MDN Web Docs enthalten einen _Siehe auch_-Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#Querverweise_Verlinkung) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [See also section](/de/docs/Web/CSS/@layer#see_also) für die `@layer`-Seite.

Im Allgemeinen sollten die Links in einem Siehe auch-Abschnitt in [Stichpunktlisten](#Listen) format mit jedem Element in der Liste als Phrase präsentiert werden. Auf der [Lernen-Webentwicklung](/de/docs/Learn_web_development)-Seite auf MDN folgt der Siehe auch-Abschnitt jedoch dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists)-Format.

Um Konsistenz über die MDN Web Docs hinweg zu wahren, beachten Sie bitte die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch-Abschnitts.

#### Text des Links

- Der Text des Links sollte mit dem Titel der Seite oder des Abschnitts übereinstimmen. Beispielsweise wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)-Seite mit dem Seitentitel "ARIA-Status und -Eigenschaften" sein:
  - **Richtig**: [ARIA-Status und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satzschreibung im Linktext, auch wenn sie sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet. Es könnte sein, dass der Fall im Seitentitel oder Abschnittstitel falsch ist. Zum Beispiel wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)-Seite im korrekten Satzfall sein:
  - **Richtig**: [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Verwenden Sie auch für externe Links den Satzfall, auch wenn der Fall auf der Zielartikel-Seite anders ist. Dies ist zur Sicherstellung der Konsistenz über die MDN Web Docs hinweg. Ausnahmen umfassen Buchnamen.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Linking to pages in references](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Commonly used macros_-Seite erläutert. Die Verwendung eines Makros fügt der Schlüsselwort im Linktext eine Code-Formatierung hinzu, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("Ein", "Ein", "Der") ist am Anfang der Linkliste erforderlich. Am Ende des Listenelements ist keine Zeichensetzung erforderlich, da es immer ein Begriff oder eine Phrase ist.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Der [`revert-layer`](/de/docs/Web/CSS/revert-layer)-Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)

#### Beschreibungstext

- Halten Sie den Beschreibungstext um den Link minimal. Im Falle einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Zeichensetzung. Behalten Sie alle verlinkten Texte am Anfang, um die Liste der Links zu scannen.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zur Gestaltung von Kontrollkästchen
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Bei externen Links geben Sie nach Möglichkeit die Quell-Website und das Jahr der Veröffentlichung oder der letzten Aktualisierung an. Diese Informationen geben den Lesern eine klare Vorstellung davon, wohin sie nach dem Klicken auf den Link gelangen. Das Datum der Veröffentlichung oder der letzten Aktualisierung hilft den Lesern, die Relevanz des verlinkten Artikels zu beurteilen, und hilft den MDN-Pflegekräften, Links zu Artikeln zu prüfen, die seit langem nicht mehr aktualisiert wurden. Wenn Sie beispielsweise auf einen Artikel auf Wikipedia verlinken, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await)-externe-Artikel im Siehe auch-Abschnitt, zusammen mit der Quellen- und Jahresinformation:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Zu externen Links zu Büchern können Sie auch Autorennamen angeben. Sie können einige Beispiele hierzu im Abschnitt [Weiterlesen](#Weiterlesen) weiter unten sehen. Verzichten Sie darauf, Autorennamen für Blogposts oder GitHub-Repositories hinzuzufügen, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst auf, gefolgt von Links zu den zugehörigen Leitfäden und Tutorials. Diese vorgeschlagene Reihenfolge dient hauptsächlich der besseren Lesbarkeit der Listenpunkte.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen oder einfachen-zu-komplexen Ordnung, je nachdem, was für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder einem Themenbereich hinzufügen müssen, erstellen Sie in der Regel eine Übersichtsseite und fügen dann Unterseiten für jeden der individuellen Artikel hinzu. Die Übersichtsseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen der einzelnen Seiten bereitstellen. Sie können das Einfügen der Seiten in die Liste mit einigen von uns erstellten Makros automatisieren.

Zum Beispiel betrachten Sie den [JavaScript](/de/docs/Web/JavaScript)-Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptseite der Inhaltsverzeichnisse
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie, Ihren Artikel nicht an die Spitze der Hierarchie zu stellen, da dies die Seite verlangsamt und die Suche und Site-Navigation weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, der den Teil der URL der Seite darstellt, der nach `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte die neue Ebene in der Slug nur ein oder zwei Wörter lang sein.
- Verwenden Sie für mehrwortige Komponenten eines Slugs ein Unterstrich, z.B. `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Behalten Sie die Satzschreibung auch in den Slugs für jede Komponente bei, z.B. `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Brotkrümelliste oben auf der Seite. Ein Seitentitel kann sich von dem "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#Slugs) erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Schreibweise der Großschreibung**: Bei MDN Web Docs sollten Seitentitel und Abschnittsüberschriften die Satzstil-Großschreibung verwenden (nur das erste Wort und Eigennamen großschreiben), anstatt die Schlagzeilenstil-Großschreibung:

  - **Richtig**: "Eine neue Methode zur Erstellung JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode Zur Erstellung JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilregel geschrieben wurden. Wenn Sie möchten, dürfen Sie diese aktualisieren. Wir arbeiten nach und nach alle durch.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist ein erster Schritt beim Schreiben. Ein Inhaltsverzeichnis zu erstellen kann Ihnen helfen zu entscheiden, wie Sie Informationen anordnen möchten. Behandeln Sie einfache Konzepte zuerst und dann kompliziertere und fortgeschrittene Konzepte. Decken Sie konzeptionelle Informationen zuerst ab und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte:

  - **Vom Höheren zum Niedrigeren**: Gehen Sie, wie im Abschnitt [Überschriftenebenen](#Überschriftenebenen) angegeben, von höheren `##` zu niedrigeren `####` Überschriften, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebenen-Überschriften für breitere Einleitungstitel und spezifischere Titel, während Sie zu niedrigeren Ebenenüberschriften fortschreiten.
  - **Logisch Gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebene gruppiert sind. Titel von verschiedenen Abschnitten zu benennen, kann Ihnen hierbei helfen.
  - **Titel kurz halten**: Kürzere Titel sind im Text und im Inhaltsverzeichnis leichter zu überfliegen.
  - **Titel spezifisch halten**: Verwenden Sie den Titel, um die spezifische Information zu vermitteln, die im Abschnitt behandelt wird. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Übersicht".
  - **Titel fokussiert halten**: Verwenden Sie den Titel, um ein Einzelziel zu vermitteln, eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck versuchen Sie, soweit möglich, das Bindewort "und" in einem Titel zu vermeiden.
  - **Parallele Konstruktion verwenden**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftenebene. Wenn ein `###`-Ebene-Titel Gerundien verwendet, also Wörter, die mit "-ing" enden, wie "Installieren", dann versuchen Sie, alle Titel auf dieser Ebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverbum beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf dieser Ebene, beginnend mit einem Imperativverbum.
  - **Vermeiden Sie allgemeine Begriffe in der niedrigerebenen-Überschrift**: Wiederholen Sie nicht den Text des Titels einer höheren Ebene in niedriger Stufenüberschriften. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas" sollten Sie den Titel eines Unterabschnitts "Nach einleitenden Nebensätzen" anstelle von "Kommas nach einleitenden Nebensätzen" nennen.
  - **Beginnen Sie keine Titel mit Artikeln**: Vermeiden Sie es, Titel mit den Artikeln "ein", "ein" oder "der" zu beginnen.
  - **Einleitende Informationen hinzufügen**: Nach einem Titel fügen Sie einen einleitenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterlesen

### Andere Stilführungen

Wenn Sie Fragen zur Verwendung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir, die [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu Rate zu ziehen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie die folgenden Ressourcen möglicherweise hilfreich.

- [Häufige Fehler in der englischen Verwendung](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Grammatik FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Verwendung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Seite für die englische Sprachverwendung
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftliche, aber benutzerfreundliche, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, besonders für Präpositionsnutzung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
