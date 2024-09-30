---
title: Schreibstil-Leitfaden
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{MDNSidebar}}

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs verfasst, organisiert, geschrieben und formatiert werden sollten.

Diese Richtlinien dienen dazu, die Konsistenz von Sprache und Stil auf der gesamten Website sicherzustellen. Nichtsdestotrotz sind wir mehr an den Inhalten als an deren Formatierung interessiert, sodass Sie sich nicht verpflichtet fühlen sollten, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um sie mit diesem Leitfaden in Einklang zu bringen. Die Reviewer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentation. Andere Sprachen können (und sind eingeladen, dies zu tun) ihre eigenen Stil-Leitfäden erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Dieser Leitfaden sollte jedoch immer noch für die Formatierung und Organisation der Inhalte konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden sollen, wie z. B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser für das Verständnis des behandelten Themas benötigen könnten.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Schließen Sie relevante Beispiele ein](#schließen_sie_relevante_beispiele_ein)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie beim Schreiben den Zielkreis Ihres Inhalts im Hinterkopf. Beispielsweise muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so sehr ins Detail gehen über grundlegende Netzwerkkonzepte wie eine typische Seite über Netzwerke. Denken Sie daran, dass dies Richtlinien sind. Einige dieser Tipps mögen nicht in jedem Fall zutreffen.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind, klar, prägnant und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Sprachstil und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, unter Berücksichtigung des Zielpublikums.
- **Prägnant**: Beim Verfassen eines Dokuments ist es wichtig zu wissen, wie viel man sagen muss. Wenn Sie zu viele Details geben, wird die Seite mühsam zu lesen sein und selten benutzt werden.
- **Konsistent**: Stellen Sie sicher, dass Sie die gleiche Wortwahl konsistent auf der gesamten Seite und über mehrere Seiten hinweg beibehalten.

### Schließen Sie relevante Beispiele ein

Im Allgemeinen fügen Sie Beispiele oder reale Szenarien hinzu, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine konkretere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird, und um spezielle Fälle, die möglicherweise existieren, zu klären. Sie können auch Beispiele verwenden, um Lösungen für allgemeine Aufgaben und Lösungen für Probleme, die auftreten können, zu demonstrieren.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der Eröffnungsabschnitt vor der ersten Überschrift die Informationen, die auf der Seite behandelt werden, angemessen zusammenfasst und möglicherweise, was Leser nach dem Durcharbeiten der Inhalte erreichen können werden. So kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz die Leser über die behandelten Themen informieren sowie das erwartete Vorwissen, das der Leser benötig, falls vorhanden. Der Einleitungsabschnitt sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen und Links zu verwandten Informationen enthalten. Er sollte auch Hinweise auf Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen aus, wie z.B. was es genau bedeutet, Text zu "umranden", wo der Text gezeichnet wird, und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet einen Textstring.

- **Beispiel für eine lange Einführung**: Dieses Beispiel enthält eine aktualisierte Einführung, aber jetzt ist es viel zu lang.
  Zu viele Details sind enthalten, und der Text geht zu sehr in die Beschreibung anderer Methoden und Eigenschaften. Stattdessen sollte die Einführung sich auf die `strokeText()` Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben sind.

  > Wenn aufgerufen, umrandet die Canvas 2D API Methode **`CanvasRenderingContext2D.strokeText()`** die Zeichen im angegebenen Textstring, beginnend bei den angegebenen Koordinaten und unter Verwendung der aktuellen Stiftfarbe.
  > Im Vokabular der Computergrafik bedeutet "umranden", die Umrisse der Glyphen im String zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet, wie sie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) Eigenschaft des Kontexts angegeben ist.
  >
  > Die Positionierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung des Strings relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird der String beginnend bei `x - (stringBreite / 2)` gezeichnet, sodass die angegebene X-Koordinate in der Mitte des Strings liegt.
  > Wenn der Wert `"left"` ist, wird der String beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für den String, in Pixeln, angeben können.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal zusammengedrückt oder skaliert (oder auf andere Weise angepasst), um in einen so breiten Raum zu passen, wenn er gezeichnet wird.
  >
  > Sie können die **`fillText()`** Methode aufrufen, um die Zeichen eines Strings mit Farbe zu füllen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine angemessene Einführung**: Hier sehen wir eine viel bessere Übersicht für die `strokeText()` Methode.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrandet (zeichnet die Umrisse der) Zeichen eines angegebenen Textstrings, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angedeutet wird.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet und justiert.
  >
  > Für weitere Details und Beispiele, siehe den Abschnitt [Text](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text) auf der Seite zum Zeichnen von Grafiken sowie unseren Hauptartikel zu diesem Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir empfehlen dringend, die Texte so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy**, verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in Dokumentationen nicht verwenden; falls doch, ziehen Sie in Betracht **fantastic** zu verwenden.

Es ist am besten, in jedem Text, in dem das Geschlecht für das Thema unerheblich ist, geschlechtsneutrale Sprache zu verwenden.
Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Subjekt eine Person beiderlei Geschlechts ist, ist "er"/"sein" nicht angemessen.

Betrachten wir die folgenden Beispiele:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Verwendung seiner Webcam erlauben möchte."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Verwendung ihrer Webcam erlauben möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite die Verwendung ihrer Webcam erlauben möchten."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des dritten Plurals, allgemein bekannt als "[Singular 'they'](https://en.wikipedia.org/wiki/Singular_they).". Die geschlechtsneutralen Pronomen umfassen "they," "them", "their," und "theirs".

Eine andere Option besteht darin, die Benutzer zu pluralisieren, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Verwendung ihrer Webcams erlauben möchten."

Die beste Lösung ist natürlich, die Pronomen umzuformulieren und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der um die Zustimmung des Benutzers zur Webcam-Nutzung bittet, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Webcam-Nutzung bittet, erscheint."

Dieses letzte Beispiel ist wahrscheinlich besser.
Zum einen ist es grammatikalisch korrekter, es entfernt jedoch einige der Komplexitäten, die mit der Geschlechterhandhabung in verschiedenen Sprachen verbunden sind, die möglicherweise völlig unterschiedliche Geschlechtregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch Übersetzer erleichtern.

### Schreiben Sie mit SEO im Hinterkopf

Obwohl das primäre Ziel jeglichen Schreibens auf MDN Web Docs immer das Erklären und Informieren über offene Webtechnologien sein sollte, damit Entwickler schnell lernen können, was sie tun möchten, oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Wir können dies erreichen, indem wir an die Suchmaschinenoptimierung ([SEO](/de/docs/Glossary/SEO)) beim Schreiben denken.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indizieren können, damit Leser alles finden können, was sie benötigen. Die SEO-Richtlinien beinhalten, dass sichergestellt wird, dass jede Seite, an der Autoren und Redakteure arbeiten, einigermaßen gut gestaltet, geschrieben und markiert wird, um den Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indizieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn richtig von den Suchmaschinen indiziert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textuell ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten über dasselbe Thema sind, selbst wenn sie das nicht sind.
  Wenn eine Schnittstelle beispielsweise die Eigenschaften `width` und `height` aufweist, ist es leicht, dass der Text auf den beiden Seiten zur Dokumentation dieser beiden Eigenschaften überraschend ähnlich ist, mit nur wenigen ausgetauschten Worten und unter Verwendung desselben Beispiels. Dies macht es für Suchmaschinen schwierig zu wissen, welche welche ist, und sie teilen sich den Page-Rank, wodurch beide schwerer zu finden sind, als sie sein sollten.

  Es ist daher wichtig sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, um Ihnen dies zu ermöglichen:

  - **Erklären Sie mehr einzigartige Konzepte**: Berücksichtigen Sie Anwendungsfälle, bei denen es möglicherweise mehr Unterschiede gibt, als man denkt. Bei der Dokumentation der Eigenschaften `width` und `height` beispielsweise könnten Sie über die unterschiedlichen Verwendungen des horizontalen Raums und des vertikalen Raums sprechen und eine Diskussion über die entsprechenden Konzepte führen. Vielleicht können Sie die Verwendung von `width` im Hinblick auf das Platzschaffen für eine Seitenleiste erwähnen, während Sie `height` verwenden, um vertikales Scrollen oder Fußzeilen zu verwalten. Auch das Einbeziehen von Informationen über Barrierefreiheit ist eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Fließtext, da die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften verwenden, sodass sie beim erneuten Verwenden keine wirklichen Änderungen erfordern. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder bieten Sie zumindest mehrere Beispiele an, wobei zumindest einige von ihnen unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch eine Abdeckung dessen, wie es funktioniert, in einem angemessenen Detaillierungsgrad angesichts der Komplexität des Themas und des Zielpublikums, sollten enthalten sein.

  Der einfachste Weg, um zu vermeiden, zu ähnlich zu sein, besteht natürlich darin, wenn die Zeit es erlaubt, jeden Artikel von Grund auf neu zu schreiben.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (sogenannte "dünne Seiten" im SEO-Jargon), werden Suchmaschinen solche Seiten nicht genau (oder gar nicht) katalogisieren. Zu kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip sollten Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sein. Erfinden Sie keinen Text künstlich dazu, aber sehen Sie diese Richtlinie als Mindestziel an, wann immer es möglich ist.

  Hier sind einige grundlegende Richtlinien, um Ihnen zu helfen, Seiten zu erstellen, die genug Inhalt haben, um richtig durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir bemühen uns, "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl es sie gibt, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für den [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types), den sie hat, richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Stellen Sie die Vollständigkeit sicher**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen abgedeckt sind - dies ist ein besonders häufiger Bereich, in dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung zu geben, aber achten Sie darauf, dass alle Feinheiten abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser kennen sollte?
  - **Fügen Sie Beispiele hinzu**: Beispiele sollten alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer vom Anfänger- bis hin zu mittleren Niveau wahrscheinlich verwenden, sowie alle fortgeschrittenen, die zusätzliche Erklärungen erfordern. Jedes Beispiel sollte mit einem Überblick darüber beginnen, was das Beispiel tun wird, welches zusätzliche Wissen möglicherweise benötigt wird, um es zu verstehen usw. Nach dem Beispiel (oder eingebettet zwischen die Teile des Beispiels) sollte Text sein, der erklärt, wie der Code funktioniert. Gehen Sie nicht sparsam mit den Details oder der Fehlerbehandlung in den Beispielen um. Denken Sie daran, dass die Benutzer _sehr wahrscheinlich_ Ihr Beispiel kopieren und einfügen, um es in ihren eigenen Projekten zu verwenden und Ihr Code _wird_ auf produktiven Seiten enden! Siehe unsere [Leitlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) für weitere nützliche Informationen.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für die beschriebene Funktion gibt, sprechen Sie darüber! Statt davon auszugehen, dass ein Benutzer herausfindet, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie einen angemessenen [`alt`](/de/docs/Web/HTML/Element/img#alt) Text zu allen Bildern und Diagrammen hinzu. Dieser Text sowie Bildunterschriften für Tabellen und andere Abbildungen sind wichtig, da Spinnen keine Bilder durchsuchen können, und so ermöglicht der `alt`-Text Suchmaschinen-Crawlern zu verstehen, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht im Zusammenhang mit der Funktion stehen, in einem Versuch, das Suchmaschinenranking zu manipulieren, zu verwenden; dieses Verhalten ist leicht zu erkennen und neigt dazu, negativ gewertet zu werden.
    > Ebenso sollten Sie KEINEN wiederholten, unhilfreichen Materialblöcke oder Schlüsselwörter auf der eigentlichen Seite hinzufügen, um die Seitengröße und das Suchranking zu verbessern. Dies schadet mehr als es nützt, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Fokussieren Sie sich auf den Themeninhalt**: Es ist weitaus besser, Inhalte um das Thema der Seite herumzuschreiben als um ein spezifisches Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einfügen könnten; tatsächlich kompilieren viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (dabei variierend zwischen kurzen, mittleren und langen, spezialisierteren Schlüsselwörtern), die in ihrem Artikel verwendet werden sollen, abhängig von der Länge. Eine solche Diversifizierung Ihrer Ausdrucksweise führt zu weniger Wiederholung.

## Schreibstil

Abgesehen davon, dass Sie grammatikalisch korrekte Sätze in Englisch schreiben, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um Inhalte auf MDN Web Docs konsistent zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Begriffswahl](#begriffswahl)
- [Stilrichtung](#stilrichtung)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus den Anfangsbuchstaben jedes Wortes eines Ausdrucks gebildet wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Akronyme, die Benutzern wahrscheinlich unbekannt sind. Im Zweifelsfall den Begriff erweitern. Noch besser, verlinken Sie ihn auf den Artikel oder die [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache ..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache ..."

- **Großschreibung und Punkte**: Verwenden Sie durchgehende Großbuchstaben und verzichten Sie auf Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können im Ausdruck in Klammern und Notizen, allgemeine lateinische Abkürzungen (etc., i.e., e.g.) verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  - **Richtig**: Webbrowser (e.g., Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser e.g. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, e.g. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (eg: Firefox) können verwendet werden ...

  Im normalen Text (d.h. außerhalb von Notizen oder Klammern), verwenden Sie die englischsprachige Entsprechung der Abkürzung.

  - **Richtig**: ... Webbrowser usw.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser e.g. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen der lateinischen Abkürzungen zusammen:

  | Abbrev | Latein            | Englisch                 |
  | ------ | ----------------- | ------------------------ |
  | cf.    | _confer_          | vergleichen              |
  | e.g.   | _exempli gratia_  | zum Beispiel             |
  | et al. | _et alii_         | und andere               |
  | etc.   | _et cetera_       | und so weiter, usw.      |
  | i.e.   | _id est_          | das heißt, in anderen Worten |
  | N.B.   | _nota bene_       | wohlbemerkt              |
  | P.S.   | _post scriptum_   | Nachschrift              |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige dieser Abkürzungen werden so selten verwendet, dass viele Leser entweder ihre Bedeutung verwirren oder sie nicht verstehen werden.
  >
  > Vergewissern Sie sich auch, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden, sie zu verwenden. Zum Beispiel, passen Sie auf, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für Plurale von Abkürzungen und Akronymen, fügen Sie ein _s_ hinzu. Verwenden Sie keinen Apostrophen. Niemals. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Abkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Andernfalls verwenden Sie die ausgeschriebene Form "versus" im Text.

  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie Standard-Großschreibungsregeln im Fließtext und verwenden Sie "World Wide Web" in Großbuchstaben. Es ist akzeptabel, "web" (allein verwendet oder als Modifikator) und "internet" in Kleinbuchstaben zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, sodass Sie auf viele Instanzen von "Web" und "Internet" bei MDN stoßen werden.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber bearbeiten Sie einen Artikel nicht nur, um die Großschreibung zu ändern.

Tastaturtasten sollten die Satzstil-Großschreibung verwenden, nicht die Großbuchstaben-Großschreibung.
Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie z. B. Markennamen, die Großbuchstaben enthalten, oder Wörter, die aus dem Namen einer Person abgeleitet sind (es sei denn, das Wort wird innerhalb von Code verwendet und die Syntax des Codes erfordert eine Kleinschreibung).
Einige Beispiele beinhalten:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Warenzeichen von Oracle Corporation, es sollte immer als Warenzeichen geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert dazu, informell zu sein, daher sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z. B. "don't", "can't", "shouldn't"), wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im Fließtext verwenden Sie Kommas nur in fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht in Code-Beispielen enthalten), verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostrophen.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plural von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostrophen.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht die latein- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "kurvenreichen" Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns für eines von beiden entscheiden müssen, um konsistent zu bleiben. Wenn kurvenreiche Anführungszeichen oder Apostrophe in Code-Snippets, selbst in Inline-Snippets, auftauchen, können Leser diese möglicherweise kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht tun).

- **Richtig**: Please don't use "curly quotes."
- **Falsch**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Kommas

In der folgenden Liste werden einige der häufigen Situationen beschrieben, bei denen wir uns der Regeln für die Komma-Verwendung bewusst sein müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die normalerweise am Anfang eines Satzes zu finden ist. Verwenden Sie ein Komma nach einer einleitenden Klausel, um sie von der folgenden unabhängigen Klausel zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel, werden Sie sehen, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel werden Sie sehen, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen sind Sie hier richtig."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen, erhalten Sie in der Regel ein numerisches Tastenfeld zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel ein numerisches Tastenfeld zum Eingeben von Daten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "Oxford Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "I will travel on trains, planes, and automobiles."
  - **Falsch**: "I will travel on trains, planes and automobiles."

  Verwenden Sie kein Komma vor "and" und "or" in einer Liste mit zwei Elementen.

  - **Richtig**: "Mein Hund ist niedlich und intelligent."
  - **Falsch**: "Mein Hund ist niedlich, und intelligent."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber", und "oder", wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch mit der Konjunktion sehr lang oder komplex wird, sollten Sie ihn in zwei Sätze umschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Eine einschränkende Klausel ist essenziell für den Sinn des Satzes und benötigt keine Kommas, um sie vom restlichen Satz abzugrenzen. Eine einschränkende Klausel wird normalerweise durch "dass" eingeführt und **sollte nicht** durch ein Komma eingeführt werden.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle notwendigen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, dass alle notwendigen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."


  Eine nicht einschränkende Klausel bietet zusätzliche Informationen und ist nicht essenziell für den Sinn des Satzes. Eine nicht einschränkende Klausel wird normalerweise durch "welches" eingeführt und sollte durch ein Komma eingeleitet werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, welche eine erlaubte Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie welche eine erlaubte Liste von Ursprüngen für jede Funktion ist."

- **Vor "wie zum Beispiel"**: Wenn "wie zum Beispiel" Teil einer nicht einschränkenden Klausel ist und der restliche Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "wie zum Beispiel".

  - **Richtig**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise, wie z.B. sie zu verbinden, umzukehren und zu sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise wie z.B. sie zu verbinden, umzukehren und zu sortieren."

  Das folgende Beispiel zeigt, wann man kein Komma mit "wie zum Beispiel" verwenden sollte. Hier ist die Klausel mit "wie zum Beispiel" essenziell für den Sinn des Satzes.

  - **Richtig**: "Webanwendungen werden mächtiger, indem sie Funktionen wie Audio- und Videomanipulation sowie Zugang zu Rohdaten durch WebSockets hinzuzufügen."
  - **Falsch**: "Webanwendungen werden mächtiger, indem sie Funktionen, wie Audio- und Videomanipulation, sowie Zugang zu Rohdaten durch WebSockets hinzuzufügen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrich geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe ist wie der erste Buchstabe der Wurzel.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als Varianten- oder hauptsächlich in einer nicht-amerikanischen Form des Englischen verwendete Schreibweise aufgeführt.
Wenn Sie beispielsweise [„behaviour“](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_) suchen, finden Sie den Hinweis „Chiefly British“ (Hauptsächlich britisch) gefolgt von einem Link zur amerikanischen Standardform, [„behavior“](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Variantenrechtschreibung.

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

### Begriffswahl

Diese sind unsere Empfehlungen zur Nutzung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "element", um sich auf HTML- und XML-Elemente zu beziehen, anstelle von "tag". Darüber hinaus sollte das Element in spitze Klammern "<>" eingefasst und mit Backticks (\`) formatiert werden. Beispielsweise wird die Verwendung von \<input\> innerhalb von Backticks als `<input>` formatiert, wie erwartet.

  - **Richtig**: das `<span>` Element
  - **Falsch**: das span tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement` Macro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, die Klammern "<>" hinzufügt und einen Link zu dessen Referenzseite erstellt.

  - **Mit Backticks**: `<span>`
  - **Mit dem Macro**: {{HTMLElement("span")}} (source in markdown: \\{{HTMLElement("span")\}})

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie, soweit möglich, den Begriff "Argumente" zu verwenden.

- **Benutzeroberflächenaktionen**: Beschreiben Sie in Aufgabenabfolgen Benutzeroberflächenaktionen im Imperativ. Geben Sie das Benutzeroberflächenelement durch sein Label und seine Art an.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stilrichtung

Während die aktive Form bevorzugt wird, ist die passive Form auch akzeptabel, da unser Inhalt einen informellen Stil hat.
Versuchen Sie jedoch, konsistent zu bleiben.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite beachtet werden sollten, wie Überschriften, Anmerkungen, Links und Beispiele.

- [Code Beispiele](#code_beispiele)
- [Verweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftsstufen](#überschriftsstufen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Code Beispiele

Eine Seite auf MDN Web Docs kann mehrere Codebeispiele enthalten. Die folgende Liste zeigt einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Beispielcode-Stück sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das durch das Codebeispiel demonstrierte Szenario beschreibt. Zum Beispiel, "Verwendung von Offset-Druck" und "Zurücksetzen auf Stil in der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Details des Beispiels nennt, auf die Sie die Aufmerksamkeit des Lesers richten möchten. Beispielsweise "Im folgenden Beispiel sind zwei Kaskadierungsebenen in der CSS-Datei definiert, `basis` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und wie es verwendet wird, demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder benötigt.
- Wenn Sie mit einem großen Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile zu zerlegen, damit sie einzeln beschrieben werden können.
- Wenn Sie [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass alle Codeblöcke desselben Typs (HTML, CSS und JavaScript) zu einem einzigen Codeblock zusammengefügt werden, bevor das Beispiel ausgeführt wird. Dies erlaubt es Ihnen, den Code in mehrere Segmente zu unterteilen, jedes optional mit eigenen Beschreibungen, Überschriften usw. Dies macht die Dokumentation von Code unglaublich mächtig und flexibel.

Um mehr darüber zu erfahren, wie man Codebeispiele für MDN Web Docs stylt oder formatiert, siehe [Leitlinien für das Styling von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Verweise (Verlinkung)

Wenn Sie auf eine andere Seite oder einen Abschnitt einer Seite auf MDN mit ihrem Titel verweisen, verwenden Sie Großbuchstaben in Satzform im Linktext (entsprechen Sie dem Seiten- oder Abschnittstitel). Verwenden Sie Großbuchstaben in Satzform im Linktext, auch wenn dies vom verlinkten Seitentitel oder Abschnittstitel abweicht (es könnte sein, dass die Großbuchstaben im Seiten- oder Abschnittstitel nicht korrekt sind). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN mit ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Falsch**: "Siehe den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Befolgen Sie denselben Stil, wenn Sie auf einen Abschnitt auf einer Seite verlinken, wie unten gezeigt:

- **Richtig**: "Für weitere Informationen sehen Sie den Abschnitt [Allocation in JavaScript](/de/docs/Web/JavaScript/Memory_management#allocation_in_javascript) auf der _Memory management_ Seite."

Wenn der Abschnitt, zu dem Sie verlinken, auf derselben Seite ist, können Sie mit den Worten "oben" oder "unten" auf die Position des Abschnitts hinweisen.

- **Richtig**: "Dieses Konzept ist ausführlicher im [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt unten beschrieben."

Sie können einen Teil eines Satzes mit einem Artikel oder einem Abschnitt eines Artikels verlinken. Achten Sie darauf, beschreibende Sätze als Linktext zu verwenden, um genug Kontext für die verlinkte Seite zu bieten.

- **Richtig**: "Erfahren Sie mehr darüber, [wie man Flex-Items anordnet](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN gibt es eine andere Möglichkeit, auf eine Referenzseite zu verlinken, indem ein Macro verwendet wird. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Beispielsweise verwenden Sie das `HTMLElement` Macro, um auf die Referenzseite eines HTML-Elements zu verlinken, und das `CSSxRef` Macro, um auf die Referenzseite einer CSS-Eigenschaft zu verlinken.

Wir befolgen ähnliche Verweisrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind unter bestimmten Umständen auf MDN Web Docs erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen oder nicht. Ihr Pull-Request zum Hinzufügen eines externen Links wird abgelehnt, wenn er nicht den hier beschriebenen Richtlinien entspricht.

Im Allgemeinen sollten Sie bei der Erwägung, einen externen Link hinzuzufügen, sicherstellen, dass das Risiko minimal ist:

- Kaputte oder veraltete Links
- Eindruck von Unterstützung, insbesondere bei kommerziellen Produkten oder Dienstleistungen
- Versuch, MDN Web Docs zum Verteilen von Spam zu nutzen
- Kurzlinks, die das Ziel des Links verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie in Betracht ziehen, Inhalte innerhalb von MDN Web Docs zu referenzieren. Interne Links sind leichter zu pflegen und machen den gesamten Wert der MDN Web Docs für Leser höher.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, langlebig und weithin vertrauenswürdig sind. Sie sollten es bevorzugen, Links zu externen Inhalten hinzuzufügen, die:

  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Notwendig für Quellangaben, Zitationen oder Anerkennungen sind (z.B. als Teil einer Creative Commons Attribution)
  - Wahrscheinlicher sind, für das Thema aktuelle Informationen bereitzustellen, als solche Inhalte auf MDN Web Docs selbst zu integrieren (z.B. die Release Notes eines Anbieters)
  - Open Source oder Community-getrieben sind, ähnlich wie MDN Web Docs

- **Schlechte externe Links**: Schlechte externe Links sind nicht relevant, unüberschaubar, unzugänglich oder stellen für Leser sonstige Barrieren dar. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters, anstelle der zugehörigen Dokumentation)
  - Flüchtig oder ungewartet sind (z.B. eine einmalige Ankündigung)
  - Selbstlinkend oder eigenwerbend sind (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Gebührenpflichtig sind (z.B. ein teurer Kurs, der für Freizeitentwickler, Studenten oder Leser in einkommensniedrigen Ländern unerschwinglich ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstbewerbend oder Spam sind**: Während ein persönlicher Blogpost, ein Vortrag auf einer Konferenz oder ein GitHub-Repository durchaus Wert haben, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie sich sehr genau, bevor Sie Links zu Ressourcen hinzufügen, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull-Request offenlegen. Das Nichterfüllen dieser Anforderung könnte Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Beispielsweise, wenn Sie Herausgeber einer Spezifikation sind und zur Dokumentation zu dieser Spezifikation beitragen, dann wird erwartet und ist akzeptabel, dass Sie auf diese Spezifikation verlinken. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Kürzungsdienst (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kurze, leichter zu merkende URLs (auch als "Shortlinks" bekannt) umzuwandeln. Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann bei bestimmten Kürzungsdiensten das Ziel nach deren Erzeugung geändert werden, ein Feature, das zu böswilligen Zwecken genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter-basierte (benutzergenerierbare) URL-Kürzungsdienste erstellt wurden. Wenn beispielsweise `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com` URL.

Auf der anderen Seite sind vom Unternehmen direkt gepflegte Kurzlinks, die von den Organisationen, die auch die Ziel-URLs warten, gepflegt werden, empfohlen. `https://bugzil.la` wird von Mozilla betrieben und ist ein URL-Kürzer-Tool, das auf `https://bugzilla.mozilla.org/` verweist, welches auch eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Beispielsweise verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsstufen

Wenn mit einem neuen Absatz ein neuer Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsstufen in absteigender Reihenfolge, ohne Stufen zu überspringen: `##`, dann `###`, und dann `####`; diese übersetzen sich zu den [HTML Überschriftstags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags, jeweils.

`##` ist die höchste erlaubte Stufe, da `#` dem Seitentitel vorbehalten ist.
Wir empfehlen, nicht mehr als drei Überschriftsebenen hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftsebene hinzuzufügen, erwägen Sie, den Artikel in mehrere kleinere Artikel mit einer Übersichtsseite aufzuteilen. Alternativ können Sie prüfen, ob Sie die Informationen in Aufzählungspunkten präsentieren können, um die Hinzufügung einer viertstufigen Überschrift zu vermeiden.

Behalten Sie die folgenden Dos und Don'ts im Hinterkopf, wenn Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Untergliedern Sie kein Thema in ein einziges Unterthema.
  Es sollten entweder zwei oder mehr Unterüberschriften sein oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe zu kennzeichnen (z. B. "Using `FooBar` Interface").
- **Erstellen Sie keine "Bumping Heads".** Dies sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne dass dazwischen ein erklärender Text steht.
  Dies sieht nicht gut aus und lässt Leser ohne erklärenden Text am Anfang des äußeren Abschnitts stehen.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz ihr 사용 erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr offene Lizenz haben, wie zum Beispiel [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, lassen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com> laufen, um die Seitengröße zu reduzieren.
- Für `SVG`, lassen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt` Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten auf allen Seiten konsistent formatiert und strukturiert sein.
Einzelne Listeneinträge sollten mit einer geeigneten Zeichensetzung geschrieben werden, unabhängig vom Listenformat.
Abhängig von der Art der Liste, die Sie erstellen, möchten Sie jedoch Ihr Schreiben anpassen, wie in den untenstehenden Abschnitten beschrieben. In beiden Fällen, fügen Sie einen Einleitungssatz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte, prägnante Informationsstücke zu gruppieren. Jeder Eintrag in der Liste sollte einen ähnlichen Satzaufbau haben. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder Subjekt oder beides fehlen) in Aufzählungslisten sollten Standardzeichensetzung verwenden - Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listeneintrag gibt, muss ein Punkt am Ende jedes Satzes erscheinen, einschließlich des finalen Satzes des Eintrags, so wie es bei einem Absatz erwartet würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir enthalten:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit etwas weiter gehender Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur von Aufzählungspunkt zu Aufzählungspunkt wiederholt wird. In diesem Beispiel nennt jeder Punkt eine Bedingung gefolgt von einem Komma und einer kurzen Erklärung, und jeder Punkt in der Liste endet mit einem Punkt.

  Wenn die Listeneinträge unvollständige Sätze enthalten, ist kein Punkt am Ende erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario nützlich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Schatten zu Text hinzu

  Wenn ein oder mehr Listeneinträge vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listeneintrag, selbst wenn ein Listeneintrag drei oder weniger Wörter enthält. Versuchen Sie jedoch soweit wie möglich, für alle Einträge in einer Liste dieselbe Struktur zu folgen; stellen Sie sicher, dass alle Listeneinträge entweder vollständige Sätze sind oder Phrasen.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen zu nummerieren. Da Anweisungen komplex sein können, hat Klarheit Vorrang, insbesondere wenn der Text in jedem Listeneintrag umfangreich ist. Wie bei Aufzählungslisten befolgen Sie die Standardzeichensetzung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder kurzem Absatz zur Einführung der Anweisungen beginnen. Es ist wichtig dem Benutzer Kontext zu bieten, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie, Ihre Anweisungen zu erstellen, und halten Sie jeden Schritt in seinem eigenen nummerierten Eintrag.
  >    Ihre Anweisungen könnten recht umfangreich sein, daher ist es wichtig klar zu schreiben und korrekte Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach der Fertigstellung.

  Der folgende Absatz ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungen enthält, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

  Beachten Sie, wie die Einträge in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig zu Anleitungszwecken oder zum Durchführen eines geordneten Verfahrens verwendet werden, achten Sie darauf, jeden Eintrag fokussiert zu halten: ein nummerierter Eintrag pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Verweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Beispielsweise ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Im Allgemeinen stellen Sie die Links in einem Siehe auch Abschnitt im [Aufzählungslisten](#listen) Format vor, wobei jeder Punkt in der Liste ein Ausdruck ist. Im Bereich [Webentwicklung lernen](/de/docs/Learn) bei MDN folgt der Siehe auch Abschnitt jedoch dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Um die Konsistenz über MDN Web Docs aufrechtzuerhalten, behalten Sie die folgenden Richtlinien im Kopf, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Link-Text

- Der Link-Text sollte mit dem Titel der Seite oder des Abschnitts, der verlinkt werden soll, identisch sein. Zum Beispiel wird der Link-Text zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Attributes) Seite mit dem Titel "ARIA Zustände und Eigenschaften", wie folgt lauten:
  - **Richtig**: [ARIA Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
- Verwenden Sie Großbuchstaben in Satzform im Link-Text, auch wenn dies vom verlinkten Seitentitel oder Abschnittstitel abweicht. Es könnte sein, dass die Großbuchstaben im Seiten- oder Abschnittstitel nicht korrekt sind. Zum Beispiel, der Link-Text zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrekter Großbuchstabenform ist:
  - **Richtig**: [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Verwenden Sie auch bei externen Links Großbuchstaben in Satzform, selbst wenn die Großschreibung auf der Zielartikel-Seite anders ist. Dies dient der Konsistenz bei MDN Web Docs. Ausnahmen umfassen Buchnamen.
- Auf MDN können Sie optional ein Macro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Verlinkung von Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_ Seite erklärt. Die Verwendung des Macros fügt Code-Formatierung in das Schlüsselwort im Link-Text ein, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("Ein", "Eine", "Der") wird am Anfang des Link-Listeneintrags benötigt. Kein Punkt ist am Ende des Listeneintrags erforderlich, da er unweigerlich ein Begriff oder Ausdruck sein wird.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Der [`revert-layer`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, verwenden Sie Backticks (\`) zur Codeformatierung für Schlüsselwörter und Literalen im Link-Text, auch wenn die Formatierung im Seiten- oder Abschnittstitel nicht verwendet wird. Beispielsweise wird für den Seitentitel "Array() Konstruktor" der Link-Text als [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) formatiert.

#### Beschreibender Text

- Halten Sie den beschreibenden Text rund um den Link minimal. Im Falle einer Beschreibung fügen Sie sie nach dem Link-Text und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne Endzeichensetzung. Halten Sie den ganzen verlinkten Text am Anfang, um die Scannbarkeit der Linkliste zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Checkboxes
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links versuchen Sie, die Quell-Website und das Erscheinungs- oder Aktualisierungsjahr (in Klammern) wann immer möglich und angemessen anzugeben. Das Bereitstellen dieser Information im Voraus gibt Lesern eine klare Vorstellung davon, wo sie hin gelangen, sobald sie auf den Link klicken. Das Erscheinungs- oder Aktualisierungsdatum bietet Lesern eine Leitlinie zur Bewertung der Relevanz des verlinkten Artikels und hilft auch MDN-Pflegern, Links zu Artikeln zu überprüfen, die lange nicht aktualisiert wurden. Wenn Sie beispielsweise einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Der Listeneintrag unten ist ein Beispiel für das Hinzufügen eines Links zum externen Artikel [Top-level await](https://v8.dev/features/top-level-await) im Abschnitt Siehe auch zusammen mit der Quell- und Jahresinformation:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch die Namen der Autoren angeben. Einige Beispiele finden Sie im Abschnitt [Weiterlesen](#language_grammar_and_spelling) unten. Verzichten Sie darauf, Autoren für Blogposts oder GitHub-Repositories anzugeben, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu den MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu verwandten Leitfäden und Tutorialseiten. Diese empfohlene Reihenfolge dient hauptsächlich der Verbesserbarkeit der Scannbarkeit der Elemente in der Liste.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zunächst die internen Links und dann die externen.
- Innerhalb der Gruppen interner und externer Links, befolgen Sie eine alphabetische oder einfache zu fortgeschrittene Reihenfolge, je nachdem, was für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie Artikel zu einem Thema oder Bereich hinzufügen müssen, tun Sie dies normalerweise, indem Sie eine Übersichtseite erstellen und dann Unterseiten für jeden einzelnen Artikel hinzufügen.
Die Übersichtseite sollte mit einem Absatz oder zwei beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können die Einfügung von Seiten in die Liste mit einigen von uns erstellten Makros automatisieren.

Zum Beispiel betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnis
- [JavaScript/Guide/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an der Spitze der Hierarchie zu platzieren, da dies die Seite verlangsamt und die Suche und Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom Seiten-"Slug" unterscheiden, bei dem es sich um den Teil der Seiten-URL handelt, der nach `<locale>/docs/` folgt. Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn eine neue Ebene der Hierarchie erstellt wird, sollte die Komponente der neuen Ebene im Slug nur ein oder zwei Wörter lang sein.
- Slugs sollten für eine mehrwortige Komponente einen Unterstrich verwenden, wie z.B. `Getting_started` in `/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started`.
- Befolgen Sie die Großbuchstaben in Satzform auch bei Slugs für jede Komponente, wie etwa `Getting_started` im vorherigen Beispiel.

### Titel

Seitentitel werden bei den Suchergebnissen verwendet und strukturieren auch die Seitenhierarchie in der Brotkrumenliste oben auf der Seite. Ein Seitentitel kann sich vom "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie Titel schreiben:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften den Satzstil in Sachen Großschreibung verwenden (nur das erste Wort und Eigennamen werden großgeschrieben), anstelle des Schlagzeilenstils:

  - **Richtig**: "Eine neue Methode für das Erstellen von JavaScript Rollovern"
  - **Falsch**: "Eine Neue Methode Für Das Erstellen Von JavaScript Rollovern"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel eingeführt wurde. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir arbeiten nach und nach daran.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte beim Schreiben. Eine Inhaltsübersicht zu schreiben, kann Ihnen helfen zu entscheiden, wie Sie Informationen ordnen möchten. Behandeln Sie einfache Konzepte zuerst und gehen Sie dann zu komplizierteren und fortgeschrittenen Konzepten über. Behandeln Sie konzeptionelle Informationen zuerst und gehen Sie dann zu aktionsorientierten Themen über.

  Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie Titel für eine Seite und Abschnitte oder Unterabschnitte schreiben:

  - **Von höher zu niedriger gehen**: Wie im Abschnitt [Überschriftsstufen](#überschriftsstufen) erwähnt, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriften für breitere Einführungsüberschriften und spezifischere Titel weiter unten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift zusammengefasst sind. Titel zu verschiedenen Abschnitten zu benennen, kann Ihnen dabei helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel lassen sich leichter im Text und im Inhaltsverzeichnis scannen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, wenn ein Abschnitt HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" anstatt "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Diesbezüglich vermeiden Sie, soweit möglich, die Verwendung der Konjunktion "und" in einem Titel.
  - **Parallelität verwenden**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftsebene. Wenn eine `###` Überschriftsebene zum Beispiel Gerundium-Wörter verwendet, das heißt Wörter, die auf "-ing" enden, wie "Installieren", versuchen Sie alle Titel auf dieser Überschriftsebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativ-Verb beginnt, wie "verwenden", "konfigurieren", dann schreiben Sie alle Titel auf dieser Überschriftsebene beginnend mit einem Imperativ-Verb.
  - **Häufige Begriffe in niedrigerer Überschrift vermeiden**: Wiederholen Sie keinen Text des Titels einer höheren Überschrift in niedrigeren Titeln. Beispielsweise benennen Sie in einem Abschnitt mit dem Titel "Kommas", den Titel eines Unterabschnitts "Nach einleitenden Klauseln" statt "Kommas nach einleitenden Klauseln".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie, Titel mit Artikeln "ein", "eine" oder "der" zu beginnen.
  - **Einführende Informationen hinzufügen**: Fügen Sie nach einem Titel einige einleitende Informationen hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Leitlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Leitlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Leitlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Leitlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Leitlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weiterlesen

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Nutzung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten die folgenden Ressourcen nützlich für Sie sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierter Rat; sehr gut für Nicht-Muttersprachler geeignet, besonders für Präpositionsbenutzung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
