---
title: Schreibstilleitfaden
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{MDNSidebar}}

Dieser Schreibstilleitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen sicherstellen, dass Sprache und Stil auf der gesamten Website konsistent sind. Dennoch legen wir mehr Wert auf den Inhalt als auf die Formatierung, also fühlen Sie sich nicht verpflichtet, den gesamten Leitfaden zu lernen, bevor Sie einen Beitrag leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um diesen Leitfaden zu entsprechen. Die Gutachter könnten Sie auch auf diesen Stilleitfaden hinweisen, wenn Sie einen Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens beziehen sich hauptsächlich auf englischsprachige Dokumentationen. Andere Sprachen können (und sind eingeladen) ihre eigenen Stilrichtlinien zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams-Seite veröffentlicht werden. Dennoch sollte dieser Leitfaden auch für das Formatieren und Organisieren von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und anschließend, wie verschiedene Komponenten auf einer Seite, wie Listen und Titel, formatiert werden sollen.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Schließen Sie relevante Beispiele ein](#schließen_sie_relevante_beispiele_ein)
- [Bieten Sie eine beschreibende Einführung an](#bieten_sie_eine_beschreibende_einführung_an)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für die Inhalte, die Sie schreiben, im Hinterkopf. Eine Seite über fortgeschrittene Netzwerktechniken muss beispielsweise wahrscheinlich nicht so detailliert auf grundlegende Netzwerk-Konzepte eingehen wie die typische Seite über Netzwerk. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps sind möglicherweise nicht in jedem Fall anwendbar.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Knappheit und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie generell die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze und bleiben Sie bei einer Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden.
- **Kompakt**: Beim Schreiben eines Dokuments ist es wichtig zu wissen, wie viel Sie sagen müssen. Wenn Sie zu viele Details angeben, wird die Seite mühsam zu lesen und selten verwendet.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Wortlaut konsistent auf der Seite und über mehrere Seiten hinweg verwenden.

### Schließen Sie relevante Beispiele ein

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um klarzustellen, wofür jeder Parameter verwendet wird, und um Unklarheiten zu klären, die möglicherweise auftreten. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen für Probleme zu demonstrieren, die auftreten können.

### Bieten Sie eine beschreibende Einführung an

Stellen Sie sicher, dass der einleitende Absatz bzw. die einleitenden Absätze vor der ersten Überschrift die Informationen zusammenfasst, die die Seite abdecken wird und was die Leser möglicherweise erreichen können, nachdem sie den Inhalt durchgegangen sind. Auf diese Weise können die Leser schnell feststellen, ob die Seite für ihre Bedenken und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Lesern mitteilen, welche Themen behandelt werden und welches Vorwissen vorausgesetzt wird, falls vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder besprochen werden, mit Links zu den zugehörigen Informationen, und er sollte hinweisen, in welchen Situationen die Inhalte des Artikels nützlich sein könnten.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel für eine Einführung ist viel zu kurz. Es werden zu viele Informationen ausgelassen, wie z.B. was es genau bedeutet, Text zu "umschließen", wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang. Es sind zu viele Details enthalten, und der Text neigt dazu, andere Methoden und Eigenschaften zu sehr zu beschreiben. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn die Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** aufgerufen wird, umschließt sie die Zeichen in der angegebenen Zeichenfolge beginnend bei den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe. In der Terminologie der Computergrafik bedeutet "Text umschließen", die Umrisse der Schriftzeichen in der Zeichenfolge zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit Hilfe der aktuellen Schrift des Kontexts gezeichnet, wie er in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts spezifiziert ist.
  >
  > Die Platzierung des Texts relativ zu den angegebenen Koordinaten wird von den `textAlign`, `textBaseline` und `direction` Eigenschaften des Kontexts bestimmt. `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenfolge beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate sich in der Mitte der Zeichenfolge befindet. Ist der Wert `"left"`, wird die Zeichenfolge beginnend beim angegebenen Wert von `x` gezeichnet. Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite der Zeichenfolge in Pixeln festlegen können. Wenn Sie diesen Parameter angeben, wird der Text bei der Ausführung horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen derart breiten Bereich zu passen.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen der Zeichenfolge farblich auszufüllen anstatt nur deren Umrisse zu zeichnen.

- **Beispiel für eine angemessene Einführung**: Hier sehen wir einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die Methode [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umschließt (zeichnet die Umrisse der) Zeichen einer angegebenen Zeichenfolge, verankert an der Position, die durch die gegebenen X- und Y-Koordinaten angezeigt wird. Der Text wird mit Hilfe der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign) , [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)-Eigenschaften gerechtfertigt und ausgerichtet.
  >
  > Für weitere Details und Beispiele sehen Sie sich den [Text](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text)-Abschnitt auf der Zeichnen von Grafiken-Seite sowie unseren Hauptartikel zu diesem Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text), an.

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum. Wir ermutigen Sie nachdrücklich, die Texte so inklusiv wie möglich zu halten. Hier sind einige Alternativen zu gängigen Begriffen, die in der Dokumentation verwendet werden:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** nicht in der Dokumentation verwenden müssen; falls dies jedoch der Fall sein sollte, sollten Sie stattdessen **fantastic** in Betracht ziehen.

Am besten verwenden Sie genderneutrale Sprache in jedem Text, bei dem das Geschlecht für das Thema irrelevant ist. Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn es sich um eine Person eines beliebigen Geschlechts handelt, ist "er"/"sein" nicht angemessen.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu korrigieren, verwenden Sie genderneutrale Pronomen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben wollen, ihre Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Mehrzahl, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechtsneutralen Pronomen sind "sie", "ihnen", "ihrer" und "ihres".

Eine andere Möglichkeit besteht darin, die Benutzer im Plural zu nennen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben wollen, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen zu überarbeiten und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog erscheint, der die Erlaubnis des Benutzers für den Zugriff auf die Webcam anfordert."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Verwendung der Webcam bittet, erscheint."

Dieses letzte Beispiel, wie man mit dem Problem umgeht, ist wohl besser. Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einige der Komplexität, die mit der Handhabung von Geschlechtern in verschiedenen Sprachen verbunden ist, die möglicherweise völlig unterschiedliche Geschlechtsregeln haben. Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Schreiben Sie mit SEO im Hinterkopf

Während das Hauptziel jedes Schreibens auf MDN Web Docs immer sein sollte, über offene Webtechnologie zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie tun möchten oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Wir können dies erreichen, indem wir die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben im Hinterkopf behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unsere Materialien leicht kategorisieren und indizieren können, damit die Leser leicht finden können, was sie brauchen. Die SEO-Richtlinien beinhalten die Sicherstellung, dass jede Seite, an der Schreiber und Redakteure arbeiten, vernünftig gestaltet, geschrieben und mit Markierungen versehen ist, um den Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indizieren.

Die folgende Checkliste ist gut zu beachten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn richtig von Suchmaschinen indiziert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textuell ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema sind, selbst wenn sie es nicht sind. Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Worten und derselben Beispielnutzung. Dies macht es Suchmaschinen schwer zu wissen, was was ist, und sie teilen sich am Ende den Page Rank, was dazu führt, dass beide schwerer zu finden sind, als sie es sein sollten.

  Es ist dann wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, um dies zu ermöglichen:

  - **Erklären Sie mehr einzigartige Konzepte**: Betrachten Sie Anwendungsfälle, bei denen es möglicherweise mehr Unterschiede gibt, als man denkt. Zum Beispiel im Fall der Dokumentation von `width`- und `height`-Eigenschaften könnten Sie vielleicht über die unterschiedlichen Verwendungen von horizontalem und vertikalem Raum schreiben und eine Diskussion über die entsprechenden Konzepte bereitstellen. Vielleicht können Sie die Verwendung von `width` im Hinblick auf die Schaffung von Platz für eine Seitenleiste erwähnen, während Sie `height` zur Handhabung des vertikalen Scrollens oder der Füße verwenden. Informationen zu Barrierefreiheitsaspekten sind ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen ähneln oft sogar noch mehr dem Text des Hauptteils, weil die Beispiele von Anfang an beide (oder alle) ähnlichen Methoden oder Eigenschaften verwenden können, was keine wirklichen Änderungen beim Wiederverwenden erfordert. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder zumindest mehrere Beispiele bereitstellen, von denen zumindest einige unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Behandlung dessen, wie es funktioniert, in einem angemessenen Detaillierungsgrad angesichts der Komplexität des Themas und des Zielpublikums, sollte enthalten sein.

  Der einfachste Weg, um übermäßige Ähnlichkeiten zu vermeiden, ist natürlicherweise, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in der SEO-Sprache als "dünne Seiten" bezeichnet), werden solche Seiten von Suchmaschinen nicht genau katalogisiert (oder überhaupt nicht). Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip stellen Sie sicher, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, sondern behandeln Sie diese Richtlinie als Mindestziel, wenn möglich.

  Hier einige grundlegende Richtlinien, die Ihnen helfen, Seiten zu erstellen, die genug Inhalt haben, um ordnungsgemäß auffindbar zu sein, ohne sie mit unnötigem Text zu überfüllen:

  - **Vermeiden Sie Platzhalter**: Offensichtlich gibt es, wenn der Artikel ein Platzhalter ist oder Inhalte fehlen, füge ihn hinzu. Wir versuchen auf MDN Web Docs, explizite "Platzhalter"-Seiten zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie den Seitenaufbau**: Überprüfen Sie die Seite, um sicherzustellen, dass sie richtig für den [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und geeignete Inhalte haben.
  - **Sicherstellen der Vollständigkeit**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Beispiele hinzufügen**: Es sollten Beispiele für alle Parameter oder zumindest die Parameter (oder Eigenschaften, oder Attribute) vorhanden sein, die Benutzer vom Anfänger- bis mittleren Bereich wahrscheinlich verwenden werden, sowie alle fortgeschrittenen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte von einer Übersicht dessen, was das Beispiel tun wird, was zusätzliches Wissen benötigt wird, um es zu verstehen, und so weiter. Nach dem Beispiel (oder unter Einfügen von Teilen des Beispiels) sollte Text hinzugefügt werden, der erklärt, wie der Code funktioniert. Knausern Sie nicht bei den Details oder der Behandlung von Fehlern in Beispielen. Bedenken Sie, dass Benutzer _werden_ Ihr Beispiel kopieren und einfügen, um es in ihren eigenen Projekten zu verwenden, und Ihr Code wird am Ende in Produktionsseiten verwendet! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) für weitere nützliche Informationen.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer selbst herausfindet, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel hinzu und fügen Sie Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie passende [`alt`](/de/docs/Web/HTML/Element/img#alt)-Texte für alle Bilder und Diagramme hinzu. Dieser Text sowie Bildunterschriften in Tabellen und anderen Abbildungen zählen, da "Spinnen" Bilder nicht durchsuchen können, und daher beschreibt der `alt`-Text den Suchmaschinen-Crawlern, welchen Inhalt das eingebettete Medium enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit dem Feature zusammenhängen, in einem Versuch hinzuzufügen, das Suchmaschinen-Ranking zu manipulieren; diese Art von Verhalten ist leicht zu erkennen und wird dazu neigen, eine Strafe zu erhalten.
    > Ebenso **fügen Sie keine** sich wiederholenden, unhilfreichen Materialien oder Schlüsselförmige Massen innerhalb der tatsächlichen Seite hinzu, um zu versuchen, die Größe der Seite und das Suchranking zu verbessern. Dies schadet mehr, sowohl der Lesbarkeit des Inhalts als auch unseren Suchergebnissen.

- **Fokus auf den Themeninhalt**: Es ist weitaus besser, Inhalte rund um das Thema der Seite zu schreiben als ein bestimmtes Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einbeziehen könnten; viele SEOs zusammengestellte eine Liste von 5 bis 100 verschiedenen Schlüsselwörtern (unterschiedlich zwischen kurzen, mittleren und langschwänzigen Schlüsselwörtern) in ihrem Artikel zu enthalten, je nach Länge. Das Festlegen diversifiziert Ihre Formulierung und führt zu weniger Wiederholungen.

## Schreibstil

Außer dem Schreiben grammatikalisch korrekter Sätze auf Englisch empfehlen wir, diese Richtlinien zu befolgen, um Konsistenz des Inhalts über MDN Web Docs hinweg sicherzustellen.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das mit dem ersten Buchstaben jedes Wortes eines Satzes erstellt wurde. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite sollten Akronyme, die den Benutzern wahrscheinlich unbekannt sind, erweitert werden. Im Zweifelsfall erweitern Sie den Begriff. Besser noch, verlinken Sie es mit dem Artikel oder Eintrag im [Glossar](/de/docs/Glossary), der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas auf XML basierende Sprache ..."
  - **Falsch**: "XUL ist Mozillas auf XML basierende Sprache ..."

- **Großschreibung und Punkte**: Verwenden Sie vollständig Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Latienische Abkürzungen**: Sie können gebräuchliche Lateinische Abkürzungen (etc., i.e., e.g.) in Klammern setzen und verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderen geeigneten Satzzeichen.

  - **Richtig**: Webbrowser (z.B., Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser zB Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, eg. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (eg: Firefox) können verwendet werden ...

  In regulärem Text (d.h., Text außerhalb der Anmerkungen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... Webbrowser und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser e.g. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente lateinischer Abkürzungen zusammen:

  | Abk.   | Latein           | Englisch                      |
  | ------ | ---------------- | ----------------------------- |
  | cf.    | _confer_         | vergleichen                   |
  | e.g.   | _exempli gratia_ | zum Beispiel                  |
  | et al. | _et alii_        | und andere                    |
  | etc.   | _et cetera_      | und so weiter, usw.           |
  | i.e.   | _id est_         | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_      | merke wohl                    |
  | P.S.   | _post scriptum_  | Nachschrift                   |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine Lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder ihre Bedeutungen verwirren oder nicht verstehen werden.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Zum Beispiel achten Sie darauf, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Mehrzahl von Abkürzungen und Akronymen**: Verwenden Sie `_s_` um die Mehrzahl von Abkürzungen und Akronymen zu bilden. Verwenden Sie keinen Apostroph. Niemals. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Bei Verwendung der Verkürzung wird "vs." bevorzugt gegenüber "v." und kann in Überschriften verwendet werden. Andernfalls verwenden Sie im Text die ausgeschriebene Form "versus".

  - **Richtig**: this vs. that
  - **Falsch**: this v. that
  - **Richtig**: this versus that

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Text und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Modifikator) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie stellt eine Änderung gegenüber einer früheren Version dieses Leitfadens dar, sodass Sie auf MDN eventuell viele Fälle von "Web" und "Internet" finden.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zur Änderung der Großschreibung zu bearbeiten.

Tastaturtasten sollten die Satzstil-Großschreibung verwenden, nicht die vollständige Großschreibung.
Beispielsweise "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben sein, wie eingetragene Marken mit Großbuchstaben oder Worte, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird innerhalb von Code verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine eingetragene Marke der Oracle Corporation, sie sollte immer als Marke geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, zwanglos zu sein, also können Sie sich frei fühlen, Kontraktionen (z.B., "don't", "can't", "shouldn't") zu verwenden, wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: In fortlaufendem Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht einschließend Daten in Codebeispielen), verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Mehrzahl von Ziffern**: Fügen Sie "_s_" hinzu. Verwenden Sie keinen Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie Pluralformen in englischem Stil und nicht die durch Latein oder Griechisch beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Anführungsstriche. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies ist notwendig, weil wir eins von beiden wählen müssen, um Konsistenz zu erhalten. Wenn geschwungene Anführungszeichen oder Apostrophe in Codeausschnitte gelangen, selbst in Inline-Code, könnten Leser sie kopieren und einfügen und erwarten, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine &rsquo;geschwungenen Anf&uuml;hrungszeichen.&rsquo;

### Kommas

Die nachstehende Liste beschreibt einige der gängigen Situationen, in denen wir uns der Komma-Nutzungsregeln bewusst sein müssen:

- **Nach einleitenden Phrasen**: Eine einleitende Phrase ist eine abhängige Phrase, die sich normalerweise am Anfang eines Satzes findet. Verwenden Sie nach einer einleitenden Phrase ein Komma, um diese von der folgenden unabhängigen Phrase zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel werden Sie sehen, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel werden Sie sehen, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sind Sie an der richtigen Stelle."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen sind Sie an der richtigen Stelle."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie tendenziell eine numerische Tastatur zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie tendenziell eine numerische Tastatur zum Eingeben von Daten."

- **Vor Konjunktionen**: Das serielle Komma (auch bekannt als "das Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das serielle Komma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Gegenstände enthält.

  - **Richtig**: "Mein Hund ist niedlich und schlau."
  - **Falsch**: "Mein Hund ist niedlich, und schlau."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, überlegen Sie, ob Sie ihn in zwei Sätze umschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Eine restriktive Klausel ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas, um sich vom restlichen Satz abzuheben. Eine restriktive Klausel wird normalerweise durch "dass" eingeführt und sollte **nicht** durch ein Komma vorangehen.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, dass alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht einschränkende Klausel bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Eine nicht einschränkende Klausel wird normalerweise durch "welches" eingeführt und sollte durch ein Komma vorangehen.

  - **Richtig**: "Sie schreiben eine Richtlinie, welche eine erlaubte Liste von Ursprungsorten für jedes Merkmal ist."
  - **Falsch**: "Sie schreiben eine Richtlinie welche eine erlaubte Liste von Ursprungsorten für jedes Merkmal ist."

- **Vor "wie zum Beispiel"**: Wenn "wie zum Beispiel" Teil einer nicht einschränkenden Klausel ist und der restliche Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "wie zum Beispiel".

  - **Richtig**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Arten, zum Beispiel durch das Verbinden, Umdrehen und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Arten wie das Verbinden, Umdrehen, und das Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "wie zum Beispiel" verwendet wird. Hier ist die Klausel mit "wie zum Beispiel" wesentlich für die Bedeutung des Satzes.

  - **Richtig**: "Webanwendungen werden durch das Hinzufügen von Funktionen wie Audios und Video-Manipulationen immer leistungsfähiger und ermöglichen den Zugriff auf rohe Daten über WebSockets."
  - **Falsch**: "Webanwendungen werden durch das Hinzufügen von Funktionen, wie Audios und Video-Manipulationen, und die Zugänglichkeit zu rohen Daten über WebSockets immer leistungsfähiger."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann getrennt geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist, der derselbe wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie American-English Schreibweise.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als eine Variante oder hauptsächlich in der nicht-amerikanischen Form von Englisch verwendet.
Wenn Sie zum Beispiel ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ der amerikanischen Standardform hinzugefügt) nachschlagen, finden Sie den Ausdruck "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Variantenschreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

### Terminologie

Hier sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstatt "Tag". Darüber hinaus sollte das Element in spitze Klammern "<>" gesetzt und mit Hilfe von Backticks (\`) gestylt werden. Beispielsweise wird die Verwendung von \<input\> innerhalb von Backticks als `<input>` gesstylt, wie erwartet.

  - **Richtig**: das `<span>` Element
  - **Falsch**: der span Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) spezifizieren, das das Element formatiert, die spitzen Klammern "<>" hinzufügt und einen Link zur Referenzseite hinzufügt.

  - **Using backticks**: `<span>`
  - **Using the macro**: {{HTMLElement("span")}} (Quelltext in Markdown: \\{{HTMLElement("span")\}})

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Vermeiden Sie so weit wie möglich den Begriff "Argumente", um Konsistenz zu wahren.

- **Benutzeroberflächenaktionen**: Beschreiben Sie in Tasksequenzen Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und seines Typs.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist die passive Stimme auch akzeptabel, angesichts des informellen Stils unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für die verschiedenen Teile jeder Seite, wie Überschriften, Hinweise, Links und Beispiele, befolgt werden sollten.

- [Programmbeispiele](#programmbeispiele)
- [Querverweise (Verknüpfung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Programmbeispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Programmbeispiel enthalten. Die folgende Liste enthält einige empfohlene Praktiken beim Schreiben eines Programmbeispiels für MDN Web Docs:

- Jedes Stück Beispielcode sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das Szenario beschreibt, das im Code-Beispiel demonstriert wird. Zum Beispiel "Verwendung des Offset-Drucks" und "Zurücksetzen auf den Stil in der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die spezifischen Aspekte des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel, "Im folgenden Beispiel sind zwei Kaskadenschichten im CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und seinen Anwendungsfall demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature möglicherweise verwenden möchten oder müssen.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile aufzuteilen, damit sie individuell beschrieben werden können.
- Beim Hinzufügen von [live samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich, sich bewusst zu sein, dass alle Codeblöcke des Beispiels, die den gleichen Typ (HTML, CSS und JavaScript) haben, vor dem Ausführen des Beispiels miteinander verkettet werden. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, die jeweils optional eigene Beschreibungen, Überschriften und so weiter haben. Dies macht das Dokumentieren von Code unglaublich leistungsstark und flexibel.

Um zu erfahren, wie man Programmbeispiele für MDN Web Docs formatiert oder formatiert, sehen Sie sich [Richtlinien zum Stil von Programmbeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) an.

### Querverweise (Verknüpfung)

Wenn Sie eine andere Seite oder einen Abschnitt einer Seite auf MDN per Titel verweisen, folgen Sie der Satzgroßschreibung im Linktext (gleich wie im Titel der Seite oder des Abschnitts). Verwenden Sie die Satzgroßschreibung im Linktext, auch wenn es sich im Titel der Seite oder des Abschnitts unterscheidet (es könnte sein, dass die Schreibweise im Titel der Seite oder des Abschnitts falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite von MDN durch den Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)-Leitfaden."
- **Falsch**: "Siehe den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)"-Leitfaden."

Folgen Sie einem ähnlichen Stil, wenn Sie auf einen Abschnitt auf einer Seite verweisen, wie unten gezeigt:

- **Richtig**: "Für weitere Informationen siehe den [Allocation in JavaScript](/de/docs/Web/JavaScript/Memory_management#allocation_in_javascript)-Abschnitt auf der _Memory management_-Seite."

Wenn sich der Abschnitt, auf den Sie sich beziehen, auf derselben Seite befindet, können Sie auf den Standort des Abschnitts mit den Worten "oben" oder "unten" hinweisen.

- **Richtig**: "Dieses Konzept wird im [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility)-Abschnitt unten ausführlicher beschrieben."

Sie können einen Teil eines Satzes oder Artikels mit der Sektion eines Artikels verknüpfen. Achten Sie darauf, beschreibende Phrasen als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite bereitzustellen.

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Objekte bestellt](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf dem MDN gibt es eine andere Möglichkeit, auf eine Referenzseite zu verlinken, indem Sie ein Makro verwenden. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Um beispielsweise auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweis-Richtlinien in den [Siehe auch](#siehe_auch)-Abschnitten am Ende der Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs aufzunehmen. Ihr Pull Request zur Hinzufügung eines externen Links wird abgelehnt, wenn es nicht die in diesen Richtlinien beschriebenen Anforderungen erfüllt.

Im Allgemeinen, wenn Sie darüber nachdenken, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko minimal ist, dass Folgendes passiert:

- Gebrochene oder veraltete Links
- Der Eindruck von Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Der Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Shortlinks, die das Ziel der Verknüpfung verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie in Betracht ziehen, Inhalte innerhalb von MDN Web Docs zu verknüpfen. Interne Links sind einfacher zu warten und machen das Ganze von MDN Web Docs wertvoller für Leser.

- **Gute externe Links**: Gute externe Links leiten Leser zu Ressourcen, die relevant, langlebig und weithin vertrauenswürdig sind. Sie sollten bevorzugen, Links zu externen Inhalten hinzuzufügen, die so sind:

  - Einzigartig oder unentbehrlich (z.B. ein IETF RFC)
  - Erforderlich für Zitation, Zitat oder Anerkennung (z.B. als Teil eines Creative-Commons-Anerkennung)
  - Mehr wahrscheinlich für das Thema aufrechterhalten, als solche Inhalte auf MDN Web Docs selbst aufzunehmen (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder Community-getrieben, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen Relevanz, Wartbarkeit, Zugänglichkeit oder haben anderweitig Hindernisse für Leser. Vermeiden Sie das Hinzufügen von Links zu externen Inhalten, die so sind:

  - Generisch oder unspezifisch (z.B. die Homepage eines Anbieters, anstatt die zugehörige Dokumentation)
  - Flüchtig oder nicht gepflegt (z.B. eine einmalige Ankündigung)
  - Selbstverknüpfend oder selbstpropagierend (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Bezahlt (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in einkommensschwachen Länder nicht zugänglich ist)
  - Nicht zugänglich (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogpost, Vortrag auf einer Konferenz oder GitHub_repository einen Wert hat, kann das Verknüpfen Ihrer eigenen Ressourcen das Erscheinungsbild eines Interessenkonflikts schaffen. Überlegen Sie zweimal, bevor Sie Links zu Ressourcen hinzufügen, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull Request offenlegen. Wenn Sie dies versäumen, kann dies Ihre weitere Teilnahme mit MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Beispielsweise, wenn Sie der Herausgeber einer Spezifikation sind und an der Dokumentation zu dieser Spezifikation mitwirken, dann wird erwartet und akzeptiert, dass Sie diese Spezifikation verlinken. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann nützlich sein, um lange Links in kleine, leichter zu merkende URLs zu verkürzen (auch "shortlinks" genannt). Allerdings verschleiern sie auch das Ziel der URL. Mit bestimmten Shortenern kann das Ziel nach ihrer Erstellung geändert werden, was zu böswilligen Zwecken ausgenutzt werden kann.

Verwenden Sie keine Links, die über von Dritten (benutzergenerierte) URL-Shortener erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` eine Short-URL ist, die von einem Benutzer zufällig erstellt und auf `https://example.com/somelongURL/details/show?page_id=foobar` weitergeleitet wird, verwenden Sie die längere `example.com`-URL.

Auf der anderen Seite, von der Organisationen unterhaltene verkürzte URLs, die ebenfalls die Ziele-URLs unterhalten, sind zu bevorzugen. `https://bugzil.la` wird von Mozilla besessen und betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` weiterleitet, was ebenfalls ein von Mozilla besessenes Domain ist. In diesem Fall verwenden Sie den kürzeren URL. Verwenden Sie zum Beispiel `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie nacheinander abnehmende Markdown-Überschriftsebenen, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese werden in die [HTML-Überschrift-Elemente](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags übersetzt, bzw.

`##` ist die höchstzulässige Ebene, da `#` dem Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschrift hinzuzufügen. Wenn Sie das Bedürfnis verspüren, die vierte Überschriftsebene hinzuzufügen, überlegen Sie, ob Sie den Artikel in mehrere kleinere Artikel mit einer zentralen Seite aufteilen können. Alternativ überlegen Sie, ob Sie die Informationen in Aufzählungspunkten präsentieren können, um die Hinzufügung von Ebene vier Überschrift zu vermeiden.

Beachten Sie die folgenden Dos und Don’ts während der Erstellung von Überschriften für Untersektionen:

- **Keine Einzel-Unterabschnitte erstellen**. Unterteilen Sie ein Thema nicht in ein einziges Unterthema.
  Entweder es gibt zwei oder mehr Unterüberschriften oder gar keine.
- **Keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften verwenden**. Sie können jedoch Backticks verwenden, um Codebegriffe zu kennzeichnen (z.B. "Verwendung der `FooBar`-Schnittstelle").
- **Keine direkt aufeinanderfolgenden Überschriften erstellen**. Diese sind Überschriften, gefolgt von einer Unterüberschrift, ohne Textinhalt dazwischen.
  Das sieht nicht gut aus und lässt Leser ohne erläuternden Text zu Beginn des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, beachten Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr großzügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine kompatible mit unserer allgemeinen Content-Lizenz besitzen — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Reduzieren Sie bei Bildern deren Gewicht durch Optimierungstools wie <https://tinypng.com> oder <https://imageoptim.com>.
- Lassen Sie den `SVG`-Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) laufen, und stellen Sie sicher, dass die `SVG`-Datei am Ende eine leere Zeile enthält.
- Jedes Bild muss [beschreibenden `alt` Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten über alle Seiten hinweg konsistent formatiert und strukturiert werden.
Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Format der Liste.
Je nachdem, welche Art von Liste Sie erstellen möchten, sollten Sie Ihr Schreiben wie in den nachfolgenden Abschnitten beschrieben anpassen.
Fügen Sie in beiden Fällen einen einleitenden Satz ein, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte kurze Informationen zu gruppieren.
  Jedes Element in der Liste sollte eine ähnliche Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder ein Subjekt oder beide fehlen) in Aufzählungslisten sollten die Standardzeichen – Sätze enden mit Punkten, Sätze nicht – enthalten.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss ein Punkt am Ende jedes Satzes stehen, inklusive dem letzten Satz des Elements, wie es in einem Absatz erwartet werden würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur sich von Punkt zu Punkt wiederholt. In diesem Beispiel geben die Aufzählungspunkte jeweils eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Listenelement endet mit einem Punkt.

  Enthält der Listeneintrag unvollständige Sätze, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt dem Text einen Schatten hinzu

  Enthält ein Listenelement vollständige Sätze, verwenden Sie nach jedem Listenelement einen Punkt, auch wenn ein Listenelement drei oder weniger Wörter enthält. Dennoch sollten, wenn möglich, alle Elemente in einer Liste der gleichen Struktur folgen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden primär verwendet, um Schritte in einer Menge von Anweisungen aufzuzählen. Da Anweisungen komplex sein können, ist Klarheit eine Priorität, insbesondere wenn der Text in jedem Listenelement sehr lang ist. Wie bei Aufzählungslisten wird die Standardzeichensetzung verwendet. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz zur Einführung der Anweisungen beginnen.
  >    Es ist wichtig, dem Benutzer Kontext zu bieten, bevor mit den Anweisungen begonnen wird.
  > 2. Beginnen Sie mit dem Erstellen Ihrer Anweisungen, und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können sehr ausführlich sein, daher ist es wichtig, klar zu schreiben und die korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anleitungen beendet haben, fügen Sie eine kurze Zusammenfassung im Schlussteil oder eine Erklärung darüber, welches Ergebnis erwartet wird, hinzu.

  Die folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die anleitende Schritte enthält, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze wirken. Da nummerierte Listen routinemäßig für Anleitungszwecke oder um jemanden durch ein Verwaltungs- oder Ordnungsverfahren zu begleiten, sollte jedes Element fokussiert bleiben: Ein nummerierter Eintrag pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_-Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb des MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch-Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer`-Seite.

In der Regel präsentieren Sie die Links in einem "Siehe auch"-Abschnitt im [Aufzählungslistenformat](#listen), wobei jedes Element in der Liste als Phrase formuliert ist. In den [Lernen Webentwicklung](/de/docs/Learn) Bereichen auf MDN folgt der "Siehe auch"-Abschnitt der [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Formatierung.

Um die Konsistenz auf MDN Web Docs zu bewahren, beachten Sie folgende Richtlinien, während dem Hinzufügen oder Aktualisieren eines "Siehe auch"-Abschnitts.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der Seite oder des Abschnitts, auf den verwiesen wird. Zum Beispiel, der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Attributes) Seite mit dem Seitentitel "ARIA-Zustände und Eigenschaften" wird so sein:
  - **Richtig**: [ARIA-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
- Verwenden Sie die Satzgroßschreibung im Linktext, auch wenn sich diese von dem Titel der verknüpften Seite oder des Abschnitts unterscheidet. Es könnte sein, dass die Schreibweise auf der verlinkten Seite oder dem Abschnitt nicht korrekt ist. Zum Beispiel, der Linktext zur [Quirks Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite im korrekten Satzcasus wird folgendermaßen sein:
  - **Richtig**: [Quirks Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Auch für externe Links verwenden Sie die Satzgroßschreibung, selbst dann, wenn im Zieltitel des Artikels die Groß-/Kleinschreibung unterschiedlich ist. Dies dient dem Zweck, auf MDN Web Docs die Konsistenz zu gewährleisten. Ausnahmen umfassen den Namen von Büchern.
- Auf MDN kann man optional ein Makro nutzen, um auf eine Seite zu verlinken, was im [Seitenverweise verlinken](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) Abschnitt auf der _Häufig verwendete Makros_ Seite erklärt wird. Die Verwendung des Makros wird die Code-Formatierung des Schlüsselwortes im Linktext hinzufügen, wie im nächsten Beispiel dargestellt.
- Kein Artikel ("Ein", "Eine", "Der") wird benötigt am Anfang des Listenelements der Verknüpfung. Keinerlei Zeichensatz wird benötigt am Ende des Listenelements, weil es in der Regel [Läuterungen](#programmbeispiele) oder eine Phrase sein wird.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Der [`revert-layer`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, fügen Sie die Code-Formatierung durch Backticks (\`) zu Schlüsselworten und Literalen im Linktext hinzu, auch wenn die Formatierung nicht in Seitentiteln und Abschnittstiteln verwendet wird. Zum Beispiel wird für den Seitentitel "Array() Konstruktor" der Linktext sein: [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link herum minimal. Im Fall einer Beschreibung, fügen Sie ihn nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase, ohne abschließende Zeichensatz. Halten Sie den gesamten verlinkten Text zu Beginn der Phrase, um das Scannen der Linkliste zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Styling von Kontrollkästchen
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element in der Reihe.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links, bitte versuchen Sie, die Quell-Website und das Erscheinungsjahr oder zuletzt Update hinzufügen (in Klammern), wann immer es praktikabel und angebracht ist. Das Zugeben dieser Informationen kämpft die Leser im Voraus eine klare Vorstellung zu geben, das Ziel, sie erreichen werden, und hilft MDN Verantwortlichen zu überprüfen Links zu Artikeln, die nicht für eine lange Zeit aktualisiert worden sind. Wenn Sie einen Link zu einem Artikel auf Wikipedia einfügen, können Sie das Veröffentlichungs-/Update-Datum ignorieren. Das folgende Listenbeispiel zeigt, wie man Top-level await: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019) in einem externe Artikellinks im "Siehe auch"-Abschnitt plant.
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern, können Sie auch die Namen der Autoren angeben. Sie können einige Beispiele in dem [Weiterführende Lektüre](/de/docs/MDN/Writing_guidelines/Howto/Language_grammar_and_spelling) Abschnitt unten sehen. Vermeiden Sie es, Autorennamen für Blogbeiträge oder GitHub-Repositories, die Sie möglicherweise verlinken, hinzuzufügen.

#### Reihenfolge der Links

- Listen Sie die Links zu den MDN-Seiten in der Reihenfolge der Referenzseiten zuerst auf, gefolgt von Links zu den zugehörigen Leitfäden und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich der besseren Scannbarkeit der Elemente in der Liste.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen und dann die externen Links auf.
- Innerhalb jeder Gruppe von internen und externen Links, folgen Sie alphabetisch oder einer einfachen bis fortgeschrittenen Reihenfolge, was mehr Sinn für den Kontext ergibt.

### Unterseiten

Wenn Sie einige Artikel über ein Thema oder Fachgebiet hinzufügen müssen, werden Sie normalerweise eine Einstiegsseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Einstiegsseite sollte mit einem Absatz oder zwei sein Thema oder Technologie beschreibend öffnen, dann eine Liste der Unterseiten mit Beschreibungen der einzelnen Seiten zur Verfügung stellen.
Sie können das Einfügen von Seiten in die Liste mit einigen Makros, die wir erstellt haben, automatisieren.

Zum Beispiel beachten Sie die [JavaScript](/de/docs/Web/JavaScript) Leitfaden, das wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Haupt-Tabelle-die-Inhalt-Seite
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel ganz oben in die Hierarchie zu setzen, was die Seite verlangsamt und die Suche und Navigations-Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann von dem der Seitenslug sein, das ist der Teil der URL der Seite, der auf `<locale>/docs/` folgt, unterscheiden. Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie einen Slug definieren:

- Die Slugs sollten kurz gehalten werden. Bei der Erstellung einer neuen Hierarchieebene sollte die neue Ebene Komponente im Slug nur ein Wort oder zwei sein.
- Die Slugs sollten einen Unterstrich für eine Mehrwort-Komponente verwenden, wie `Getting_started` in `/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started`.
- Folgen Sie der Satzgroßschreibung auch für jeden Komponent im Slug, wie `Getting_started` im obigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch genutzt, um die Seitenhierarchie in der Brotkrümeliste oben auf der Seite zu strukturieren. Ein Seitentitel kann von dem der Seitenslug sein, wie im [Slugs](#slugs) Abschnitt erklärt.

Behalten Sie die folgenden Richtlinien im Kopf beim Schreiben von Titeln:

- **Großschreibung Stil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften satzartigen Kapitalisierungsstil (nur das erste Wort und Eigennamen groß schreiben) umfassen anstelle von Schlagzeilen-Kapitalisierungsstil:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript Rollovers"
  - **Falsch**: "Eine Neue Methode Zur Erstellung Von JavaScript Rollovers"

  Wir haben viele ältere Seiten, die vor dem Aufbau dieser Stilregel geschrieben wurden. Sie dürfen dies beheben, wenn Sie es mögen. Wir kommen allmählich zu ihnen.

- **Allgemeine Richtlinien**: Die Entscheidung, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren werden, ist einer der ersten Schritte beim Schreiben. Das Schreiben einer Themenübersicht kann Ihnen helfen zu entscheiden, wie Sie Informationen ordnen möchten. Behandeln Sie einfache Konzepte zuerst und gehen Sie dann zu komplizierteren und fortgeschrittenen Konzepten. Decken Sie konzeptionelle Informationen zuerst ab und gehen Sie dann zu aktionsorientierten Themen über.

  Halten Sie die folgenden Richtlinien im Kopf beim Schreiben von Titeln für eine Seite und deren Abschnitte oder Unterabschnitte:

  - **Von höher zu niedriger gehen**: Wie im [Überschriftenebenen](#überschriftenebenen)-Abschnitt erklärt, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriftenebenen für umfassendere Einführungstitel und verwenden Sie genauere Titel, während Sie zu niedrigeren Überschriftenebenen voranschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschriftenebene gruppiert sind. Das Benennen von Überlegungen zu den Titeln der verschiedenen Abschnitte kann Ihnen in dieser Übung helfen.
  - **Titel kurz halten**: Kürzere Titel sind einfacher in Text und im Inhaltsverzeichnis zu durchsuchen.
  - **Titel spezifisch halten**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML Elemente" anstelle von "Einführung" oder "Übersicht".
  - **Titel fokussiert halten**: Verwenden Sie den Titel, um einen bestimmten Zweck zu vermitteln — eine einzelne Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck vermeiden Sie so weit wie möglich die Verwendung der Konjunktion "und" in einem Titel.
  - **Benutzen Sie parallele Konstruktion**: Verwenden Sie eine ähnliche Sprache für Titel derselben Überschriftenebene. Zum Beispiel, wenn ein `###`-Titel Verben in ing-Form verwendet, wie "Installing", versuchen dann alle Titel auf dieser Überschriftenebene mit Verben in ing-Formlichen zu schreiben. Beginnen Sie die Titel dieser Überschriftenebene mit einem Imperativverb, wenn ein Titel mit einem Imperativverb, wie z.B. "Use", "Configure", beginnt.
  - **Vermeiden wiederholte Text im niedrigeren Überschriftenebene**: Wiederholen Sie nicht den im Titel der höheren Überschriftenebene enthaltenen Text in niedrigeren Überschriftentiteln. Zum Beispiel in einem Abschnitt betitelt "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einführenden Phrasen" anstelle von "Kommas nach einführenden Phrasen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie möglichst, mit Artikeln "ein", "eine", "der" zu beginnen.
  - **Fügen Sie einleitende Informationen hinzu**: Fügen Sie nach einem Titel einen einleitenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weiterführende Lektüre

### Andere Leitfäden

Falls Sie Fragen zur Verwendung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir die [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder den [Chicago Manual of Style](https://www.chicagomanualofstyle.org/).

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie möglicherweise die folgenden Ressourcen hilfreich.

- [Häufige Fehler in der englischen Nutzung](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [FAQ zur englischen Grammatik](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Nutzung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Nutzung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Beratung; sehr nützlich für Nicht-Muttersprachler, insbesondere für Präpositionsverwendung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
