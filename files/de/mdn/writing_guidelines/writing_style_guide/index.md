---
title: Leitfaden zum Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

Dieser Leitfaden zum Schreibstil beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen sprachliche und stilistische Konsistenz auf der gesamten Website gewährleisten. Dennoch interessieren wir uns stärker für den Inhalt als für dessen Formatierung. Fühlen Sie sich daher nicht verpflichtet, den gesamten Leitfaden zum Schreibstil zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Beitragender Ihre Arbeit später bearbeitet, um sie diesem Leitfaden anzupassen. Die Reviewer können Sie auch auf diesen Leitfaden zum Schreibstil verweisen, wenn Sie einen Content-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für englischsprachige Dokumentation. Andere Sprachen können eigene Leitfäden zum Schreibstil haben (und sind willkommen, solche zu erstellen). Diese sollten als Unterseiten der Seite des jeweiligen Lokalisierungsteams veröffentlicht werden. Dieser Leitfaden sollte jedoch weiterhin für die Formatierung und Organisation von Inhalten herangezogen werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und anschließend, wie verschiedene Komponenten auf einer Seite formatiert werden, etwa Listen und Titel.

## Allgemeine Schreibrichtlinien

Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Lesende zum Verständnis des jeweiligen Themas benötigen könnten.

Die folgenden Unterabschnitte enthalten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Fügen Sie relevante Beispiele ein](#fügen_sie_relevante_beispiele_ein)
- [Geben Sie eine aussagekräftige Einführung](#geben_sie_eine_aussagekräftige_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie unter Berücksichtigung von SEO](#schreiben_sie_unter_berücksichtigung_von_seo)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für die Inhalte, die Sie schreiben, im Blick. Beispielsweise muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerkkonzepte eingehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs guten Schreibens sind Klarheit, Prägnanz und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Text klar und einfach ist. Verwenden Sie im Allgemeinen Aktiv und eindeutige Pronomen. Schreiben Sie kurze Sätze und beschränken Sie sich auf eine Idee pro Satz. Definieren Sie neue Begriffe unter Berücksichtigung der Zielgruppe, bevor Sie sie verwenden.
- **Prägnant**: Beim Schreiben eines Dokuments ist es wichtig zu wissen, wie viel gesagt werden sollte. Wenn Sie übermäßige Details angeben, wird die Seite mühsam zu lesen sein und selten verwendet werden.
- **Konsistent**: Stellen Sie sicher, dass Sie auf der gesamten Seite und über mehrere Seiten hinweg dieselben Formulierungen konsistent verwenden.

### Fügen Sie relevante Beispiele ein

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um die Inhalte, die Sie schreiben, besser zu erklären. Dies hilft Lesenden, konzeptionelle und prozedurale Informationen greifbarer und praktischer zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird, und um möglicherweise vorhandene Sonderfälle zu erläutern.
Sie können Beispiele auch verwenden, um Lösungen für häufige Aufgaben und für möglicherweise auftretende Probleme zu demonstrieren.

### Geben Sie eine aussagekräftige Einführung

Stellen Sie sicher, dass die einleitenden Absätze vor der ersten Überschrift die Informationen, die auf der Seite behandelt werden, sowie möglicherweise das, was Lesende nach der Durcharbeitung des Inhalts erreichen können, angemessen zusammenfassen. Auf diese Weise kann eine lesende Person schnell feststellen, ob die Seite für ihre Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze die lesende Person über die behandelten Themen sowie über gegebenenfalls erwartete Vorkenntnisse informieren. Der erste Absatz sollte die dokumentierten oder besprochenen Technologien und/oder APIs mit Links zu den zugehörigen Informationen nennen und Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Einführungsbeispiel ist viel zu kurz. Es lässt zu viele Informationen aus, etwa was genau es bedeutet, Text mit einer Kontur zu versehen, wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet einen String mit einer Kontur.

- **Beispiel für eine lange Einführung**: Dieses Beispiel enthält eine überarbeitete Einführung, ist nun aber viel zu lang.
  Es enthält zu viele Details, und der Text geht zu sehr auf die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die Methode `strokeText()` konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn sie aufgerufen wird, zeichnet die Canvas-2D-API-Methode **`CanvasRenderingContext2D.strokeText()`** die Zeichen im angegebenen String beginnend bei den angegebenen Koordinaten mit einer Kontur und verwendet dabei die aktuelle Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet Text mit einer Kontur zu versehen, die Umrisse der Glyphen im String zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet, die in der Eigenschaft [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts angegeben ist.
  >
  > Die Positionierung des Texts relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung des Strings relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird der String beginnend bei `x - (stringWidth / 2)` gezeichnet, wodurch die angegebene X-Koordinate in der Mitte des Strings liegt.
  > Wenn der Wert `"left"` ist, wird der String beginnend beim angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` den Wert `"right"` hat, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Optional können Sie einen vierten Parameter angeben, mit dem Sie eine maximale Breite für den String in Pixeln festlegen.
  > Wenn Sie diesen Parameter angeben, wird der Text beim Zeichnen horizontal komprimiert oder skaliert (oder anderweitig angepasst), damit er in einen Bereich dieser Breite passt.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen eines Strings mit Farbe gefüllt zu zeichnen, statt nur deren Umrisse zu zeichnen.

- **Beispiel für eine angemessene Einführung**: Der folgende Abschnitt bietet einen deutlich besseren Überblick über die Methode `strokeText()`.

  > Die Methode [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), versieht die Zeichen eines angegebenen Strings mit einer Kontur (zeichnet ihre Umrisse), verankert an der Position, die durch die angegebenen X- und Y-Koordinaten festgelegt ist.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet und angeordnet.
  >
  > Weitere Details und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite zum Zeichnen von Grafiken sowie in unserem Hauptartikel zu diesem Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat eine breite und vielfältige Zielgruppe.
Wir empfehlen nachdrücklich, Texte so inklusiv wie möglich zu formulieren.
Einige Begriffe können Lesende mit bestimmten Hintergründen entfremden, auch wenn sie nicht beleidigend gemeint sind, zum Beispiel:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Verwenden Sie statt **dummy** den Begriff **placeholder**.
- Die Begriffe **crazy** und **insane** sollten in der Dokumentation nicht erforderlich sein; falls dies dennoch der Fall ist, ziehen Sie stattdessen **fantastic** in Betracht.

Vermeiden Sie bildhafte Redewendungen mit Darstellungen von Gewalt oder Grausamkeit, da diese bestimmte Zielgruppen triggern und für Dokumentation einen falschen Ton setzen. Zum Beispiel:

- Verwenden Sie statt „kill two birds with one stone“ „solve two problems at once“.
- Verwenden Sie statt „beating a dead horse“ „belaboring the point“ oder „going round in circles“.
- Verwenden Sie statt „more than one way to skin a cat“ „more than one way to do this“.

Verwenden Sie am besten geschlechtsneutrale Sprache, wenn das Geschlecht für das Thema nicht relevant ist.
Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, sind „he“/„his“ in Ordnung; wenn sich das Thema jedoch auf eine Person beliebigen Geschlechts bezieht, sind „he“/„his“ nicht angemessen.

Sehen wir uns die folgenden Beispiele an:

- **Falsch**: „A confirmation dialog asks the user if he wants to allow the web page to make use of his webcam.“
- **Falsch**: „A confirmation dialog asks the user if she wants to allow the web page to make use of her webcam.“

Beide Versionen sind geschlechtsspezifisch. Verwenden Sie zur Korrektur geschlechtsneutrale Pronomen:

- **Richtig**: „A confirmation dialog asks the user if they want to allow the web page to make use of their webcam.“

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, die allgemein als „[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)“ bekannt ist. Zu den geschlechtsneutralen Pronomen gehören „they“, „them“, „their“ und „theirs“.

Eine weitere Möglichkeit besteht darin, die Benutzer im Plural zu formulieren:

- **Richtig**: „A confirmation dialog asks the users if they want to allow the web page to make use of their webcams.“

Die beste Lösung ist natürlich, den Satz umzuformulieren und die Pronomen zu entfernen:

- **Richtig**: „A confirmation dialog requesting the user's permission for webcam access appears.“
- **Richtig**: „A confirmation dialog box that asks the user for permission to use the webcam appears.“

Dieses letzte Beispiel zur Behandlung des Problems ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einen Teil der Komplexität, die mit der Behandlung von Geschlechtern in verschiedenen Sprachen mit möglicherweise sehr unterschiedlichen Geschlechtsregeln verbunden ist.
Diese Lösung kann die Übersetzung sowohl für Lesende als auch für Übersetzende erleichtern.

### Verwenden Sie barrierefreie Sprache

Vermeiden Sie räumliche und richtungsbezogene Wörter wie „oben“, „unten“, „links“, „rechts“ oder „hier“. Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das nicht für alle Benutzenden gilt. Sie können außerdem unklar oder irreführend sein, insbesondere für Benutzende, die auf Screenreader angewiesen sind, oder für Personen, die übersetzte Inhalte lesen, bei denen Richtungsangaben mehrdeutig oder schwer präzise zu übersetzen sein können. In responsiven Layouts, bei denen sich die Position von Inhalten abhängig von der Bildschirmgröße ändern kann, können solche Verweise ungenau werden. Diese Art von Sprache kann die Barrierefreiheit beeinträchtigen und es allen Benutzenden erschweren, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Formulierungen, die den Abschnitt, das Konzept oder das Element, auf das verwiesen wird, eindeutig identifizieren. Verweisen Sie auf Abschnitte anhand ihrer Titel oder Überschriften und auf Beispiele oder Code-Snippets anhand dessen, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: „Lesen Sie den Abschnitt [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) weiter unten auf dieser Seite.“
- **Falsch**: „Lesen Sie den Accessibility-Abschnitt unten.“

- **Richtig**: „Im folgenden Codebeispiel animieren wir einen Kreis mit CSS transitions.“
- **Falsch**: „Im Codebeispiel unten animieren wir einen Kreis mit CSS transitions.“

- **Richtig**: „Dieses Konzept wird im vorherigen Abschnitt mit dem Titel Creating a media query erklärt.“
- **Falsch**: „Dieses Konzept wird im Abschnitt oben erklärt.“

Vermeiden Sie außerdem vage Linktexte wie „Klicken Sie hier“ oder „Lesen Sie diesen Artikel“. Aussagekräftiger Linktext bietet allen Lesenden einen besseren Kontext und verbessert die Erfahrung für Benutzende assistiver Technologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: „Erfahren Sie mehr darüber, [wie Flex-Elemente angeordnet werden](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items).“
- **Falsch**: „Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren.“
- **Falsch**: „Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren.“

<!-- markdownlint-enable descriptive-link-text -->

Indem Sie diese Richtlinien befolgen, tragen Sie dazu bei, dass die MDN-Dokumentation für alle zugänglich, klar und nutzbar ist, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben Sie unter Berücksichtigung von SEO

Während das primäre Ziel jedes Texts auf MDN Web Docs stets darin bestehen sollte, offene Webtechnologien zu erklären und darüber zu informieren, damit Entwickler schnell lernen können, das zu tun, was sie möchten, oder die kleinen Details finden, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das von uns geschriebene Material auch _finden_ können. Dies können wir erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) berücksichtigen.

Dieser Abschnitt behandelt Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, die dazu beitragen, dass Suchmaschinen unser Material einfach kategorisieren und indexieren können, sodass Lesende problemlos finden, was sie benötigen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Autorinnen, Autoren und Redakteurinnen oder Redakteure arbeiten, angemessen gestaltet, geschrieben und ausgezeichnet ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel ordnungsgemäß zu indexieren.

Die folgende Checkliste ist beim Schreiben und Überprüfen von Inhalten hilfreich, um sicherzustellen, dass die Seite und benachbarte Seiten von Suchmaschinen ordnungsgemäß indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn Inhalte auf verschiedenen Seiten textlich ähnlich sind, gehen Suchmaschinen davon aus, dass die Seiten dasselbe Thema behandeln, auch wenn dies nicht der Fall ist.
  Wenn eine Schnittstelle beispielsweise die Eigenschaften `width` und `height` hat, kann der Text auf den beiden Seiten, die diese Eigenschaften dokumentieren, überraschend ähnlich sein, wobei nur einige Wörter ausgetauscht werden und dasselbe Beispiel verwendet wird. Dadurch ist es für Suchmaschinen schwierig zu erkennen, welche Seite welche ist, und sie teilen sich den Page Rank, wodurch beide schwerer zu finden sind, als sie sein sollten.

  Deshalb ist es wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen:
  - **Erklären Sie mehr einzigartige Konzepte**: Berücksichtigen Sie Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man vermuten würde. Bei der Dokumentation der Eigenschaften `width` und `height` könnten Sie beispielsweise erläutern, wie horizontaler und vertikaler Platz unterschiedlich verwendet werden, und die entsprechenden Konzepte besprechen. Sie könnten die Verwendung von `width` erwähnen, um Platz für eine Sidebar zu schaffen, während `height` verwendet wird, um vertikales Scrollen oder Footer zu behandeln. Die Aufnahme von Informationen über Barrierefreiheitsprobleme ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele sind in diesen Situationen oft noch ähnlicher als der Fließtext, da die Beispiele möglicherweise beide (oder alle) ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und bei einer Wiederverwendung daher keine wirklichen Änderungen erfordern. Verwerfen Sie also das Beispiel und schreiben Sie ein neues, oder stellen Sie zumindest mehrere Beispiele bereit, von denen mindestens einige unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Es sollten sowohl ein Überblick darüber, was das Beispiel bewirkt, als auch eine Erklärung seiner Funktionsweise aufgenommen werden, mit einem angemessenen Detailgrad entsprechend der Komplexität des Themas und der Zielgruppe.

  Die einfachste Möglichkeit, übermäßige Ähnlichkeit zu vermeiden, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt einer Seite zu gering ist (im SEO-Jargon als „thin pages“ bezeichnet), werden Suchmaschinen solche Seiten nicht korrekt oder gar nicht katalogisieren. Seiten mit übermäßig wenig Inhalt sind schwer zu finden. Als Leitprinzip sollten Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sein. Blähen Sie eine Seite nicht künstlich auf, behandeln Sie diese Richtlinie aber nach Möglichkeit als Mindestziellänge.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten mit genügend Inhalt zu erstellen, damit sie ordnungsgemäß durchsuchbar sind, ohne sie mit unnötigem Text zu überladen:
  - **Vermeiden Sie Stubs**: Wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, reine „Stub“-Seiten auf MDN Web Docs zu vermeiden, obwohl es sie gibt; es gibt jedoch viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) korrekt strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte enthalten.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgeführt und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Bereich, in dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist leicht, etwas kurz zu erklären, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es Sonderfälle? Gibt es bekannte Einschränkungen, die Lesende kennen müssen?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorhanden sein, die alle Parameter oder zumindest die Parameter (oder Eigenschaften oder Attribute) abdecken, die Benutzende vom Anfänger- bis zum Fortgeschrittenenniveau wahrscheinlich verwenden, sowie alle erweiterten Fälle, die zusätzliche Erklärungen erfordern. Jedem Beispiel sollte ein Überblick vorangestellt sein, der erklärt, was das Beispiel bewirkt, welche zusätzlichen Kenntnisse zum Verständnis erforderlich sein könnten und so weiter. Nach dem Beispiel — oder zwischen Teilen des Beispiels — sollte Text erklären, wie der Code funktioniert. Sparen Sie nicht bei Details oder bei der Fehlerbehandlung in Beispielen. Denken Sie daran, dass Benutzende _werden_ Ihr Beispiel kopieren und in ihre eigenen Projekte einfügen, und Ihr Code _wird_ auf Produktionsseiten verwendet werden! Weitere nützliche Informationen finden Sie in unseren [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide).
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Statt anzunehmen, dass eine benutzende Person herausfinden wird, dass die dokumentierte Methode zur Lösung eines häufigen Entwicklungsproblems verwendet werden kann, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und einem Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie für alle Bilder und Diagramme korrekten [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text ein. Dieser Text sowie Beschriftungen von Tabellen und anderen Abbildungen zählen, da Crawler keine Bilder durchsuchen können und `alt`-Text den Suchmaschinen-Crawlern mitteilt, welchen Inhalt eingebettete Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Keywords oder Keywords ohne Bezug zum Feature aufzunehmen, um Suchmaschinenrankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und wird häufig sanktioniert.
    > Fügen Sie ebenso **kein** wiederholtes, nicht hilfreiches Material oder Ansammlungen von Keywords in die eigentliche Seite ein, um die Größe und das Suchranking der Seite zu verbessern. Dies schadet mehr als es nützt — sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Konzentrieren Sie sich auf Themeninhalte**: Es ist deutlich besser, Inhalte rund um das Thema der Seite als um ein bestimmtes Keyword zu schreiben. Es ist sehr wahrscheinlich, dass Sie für ein bestimmtes Thema viele Keywords einbeziehen könnten; tatsächlich stellen viele SEO-Fachleute abhängig von der Länge eine Liste von 5–100 verschiedenen Keywords zusammen, die sie in ihren Artikel aufnehmen (mit kurzen, mittleren und Long-Tail-Keywords). Dadurch wird Ihre Wortwahl vielfältiger und Wiederholungen werden reduziert.

## Schreibstil

Neben dem Schreiben grammatikalisch korrekter englischer Sätze empfehlen wir, diese Richtlinien zu befolgen, um Inhalte auf MDN Web Docs konsistent zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Groß- und Kleinschreibung](#groß-_und_kleinschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Sprachform](#sprachform)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus dem ersten Buchstaben jedes Wortes einer Phrase gebildet wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Auflösungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite sollten Akronyme ausgeschrieben werden, die Benutzenden wahrscheinlich nicht bekannt sind. Schreiben Sie den Begriff im Zweifelsfall aus. Noch besser ist es, auf den Artikel oder [Glossareintrag](/de/docs/Glossary) zu verlinken, der die Technologie beschreibt.
  - **Richtig**: „XUL (XML User Interface Language) is Mozilla's XML-based language ...“
  - **Falsch**: „XUL is Mozilla's XML-based language ...“

- **Großschreibung und Punkte**: Verwenden Sie ausschließlich Großbuchstaben und entfernen Sie Punkte aus allen Abkürzungen und Akronymen, einschließlich Organisationen wie „US“ und „UN“.
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gebräuchliche lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Hinweisen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen passenden Satzzeichen.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Web browsers (e.g., Firefox) can be used ...
  - **Falsch**: Web browsers e.g. Firefox can be used ...
  - **Falsch**: Web browsers, e.g. Firefox, can be used ...
  - **Falsch**: Web browsers, (eg: Firefox) can be used ...

  <!-- markdownlint-enable search-replace -->

  Verwenden Sie im regulären Text (d.h. außerhalb von Hinweisen oder Klammern) das englische Äquivalent der Abkürzung.
  - **Richtig**: ... web browsers, and so on.
  - **Falsch**: ... web browsers, etc.

  - **Richtig**: Web browsers such as Firefox can be used ...
  - **Falsch**: Web browsers e.g., Firefox can be used ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abk.   | Latein           | Englisch                |
  | ------ | ---------------- | ----------------------- |
  | cf.    | _confer_         | compare                 |
  | e.g.   | _exempli gratia_ | for example             |
  | et al. | _et alii_        | and others              |
  | etc.   | _et cetera_      | and so forth, and so on |
  | i.e.   | _id est_         | that is, in other words |
  | N.B.   | _nota bene_      | note well               |
  | P.S.   | _post scriptum_  | postscript              |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie stets, ob die Verwendung einer lateinischen Abkürzung wirklich vorteilhaft ist. Einige davon werden so selten verwendet, dass viele Lesende ihre Bedeutung entweder verwechseln oder nicht verstehen.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Achten Sie beispielsweise darauf, „e.g.“ nicht mit „i.e.“ zu verwechseln, was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Fügen Sie für die Pluralbildung von Abkürzungen und Akronymen _s_ hinzu. Verwenden Sie niemals einen Apostroph. Wirklich nicht.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **„Versus“, „vs.“ und „v.“**: Wenn Sie die Kontraktion verwenden, wird „vs.“ gegenüber „v.“ bevorzugt und kann in Überschriften verwendet werden. Verwenden Sie an anderer Stelle im Text die ausgeschriebene Form „versus“.
  - **Richtig**: this vs. that
  - **Falsch**: this v. that
  - **Richtig**: this versus that

### Groß- und Kleinschreibung

Verwenden Sie im Fließtext die Standardregeln der englischen Groß- und Kleinschreibung und schreiben Sie „World Wide Web“ groß. Es ist zulässig, „web“ (allein oder als Modifikator) und „internet“ kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie stellt eine Änderung gegenüber einer früheren Version dieses Leitfadens dar. Daher finden Sie auf MDN möglicherweise viele Vorkommen von „Web“ und „Internet“.
> Sie können diese gerne ändern, wenn Sie weitere Änderungen vornehmen, aber es ist nicht erforderlich, einen Artikel nur zur Änderung der Groß- und Kleinschreibung zu bearbeiten.

Tastaturtasten sollten satzartige Großschreibung verwenden, nicht vollständige Großschreibung.
Beispielsweise „<kbd>Enter</kbd>“ statt „<kbd>ENTER</kbd>“.
Die einzige Ausnahme ist, dass Sie „<kbd>ESC</kbd>“ als Abkürzung für die Taste „<kbd>Escape</kbd>“ verwenden können.

Bestimmte Wörter sollten immer großgeschrieben werden, etwa Marken, die Großbuchstaben enthalten, oder Wörter, die sich vom Namen einer Person ableiten (es sei denn, das Wort wird innerhalb von Code verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation; es sollte immer in der markengeschützten Schreibweise geschrieben werden)
- Python, TypeScript, Django und andere Namen von Programmiersprachen und Frameworks

Einige Tool-Namen und Projekte haben eigene Regeln zur Markenschreibweise. Diese können Namen erfordern, die vollständig kleingeschrieben werden („npm“ oder „webpack“), vollständig großgeschrieben werden („UNIX“, „GNOME“, „VIM“) oder gemischte Schreibweise verwenden („TypeScript“, „macOS“ oder „jQuery“).

Die Markenschreibweise der offiziellen Website oder Dokumentation sollte immer verwendet werden, auch am Anfang eines Satzes. Wenn Sie einen Satz, der mit einem kleingeschriebenen Wort beginnt, unangenehm finden, empfehlen wir, ihn umzuformulieren, um das Problem zu vermeiden. Sie könnten beispielsweise „You can use the npm package manager to ...“ statt „npm allows you to ...“ schreiben.

### Kontraktionen

Unser Schreibstil ist eher informell. Sie können daher nach Belieben Kontraktionen verwenden (z. B. „don't“, „can't“, „shouldn't“).

### Zahlen und Ziffern

- **Kommas**: Verwenden Sie im Fließtext Kommas nur in Zahlen mit fünf oder mehr Stellen.
  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Verwenden Sie für Daten (ausgenommen Daten in Codebeispielen) das Format „January 1, 1900“.
  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format „1990s“. Verwenden Sie keinen Apostroph.
  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Pluralformen von Ziffern**: Fügen Sie „s“ hinzu. Verwenden Sie keinen Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht lateinisch oder griechisch beeinflusste Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine typografischen Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir aus Gründen der Konsistenz eine der beiden Varianten wählen müssen. Wenn typografische Anführungszeichen oder Apostrophe in Code-Snippets gelangen, auch in Inline-Snippets, könnten Lesende sie kopieren und einfügen und erwarten, dass sie funktionieren, was nicht der Fall ist.

- **Richtig**: Please don't use "curly quotes."
- **Falsch**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Kommas

Die folgende Liste beschreibt einige häufige Situationen, in denen wir die Regeln zur Kommasetzung beachten müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitender Nebensatz ist ein abhängiger Satz, der sich üblicherweise am Anfang eines Satzes befindet. Verwenden Sie nach einem einleitenden Nebensatz ein Komma, um ihn vom folgenden Hauptsatz zu trennen.
  - Beispiel 1:
    - **Richtig**: „In this example, you will learn how to use a comma.“
    - **Falsch**: „In this example you will learn how to use a comma.“
  - Beispiel 2:
    - **Richtig**: „If you are looking for guidelines, refer to our writing style guide.“
    - **Falsch**: „If you are looking for guidelines refer to our writing style guide.“
  - Beispiel 3:
    - **Richtig**: „On mobile platforms, you tend to get a numeric keypad for entering data.“
    - **Falsch**: „On mobile platforms you tend to get a numeric keypad for entering data.“

- **Vor Konjunktionen**: Das serielle Komma (auch als „Oxford comma“ bekannt) ist das Komma vor der Konjunktion in einer Aufzählung mit drei oder mehr Einträgen. Auf MDN Web Docs verwenden wir das serielle Komma. Kommas trennen außerdem die einzelnen Einträge der Liste.
  - **Richtig**: „I will travel on trains, planes, and automobiles.“
  - **Falsch**: „I will travel on trains, planes and automobiles.“

  Verwenden Sie kein Komma vor „and“ und „or“ in einer Liste mit zwei Einträgen.
  - **Richtig**: „My dog is cute and smart.“
  - **Falsch**: „My dog is cute, and smart.“

  Verwenden Sie ein Komma vor den Konjunktionen „and“, „but“ und „or“, wenn diese zwei Hauptsätze verbinden. Wenn der Satz durch die Konjunktion jedoch sehr lang oder komplex wird, sollten Sie ihn in zwei Sätze umformulieren.
  - Beispiel 1:
    - **Richtig**: „You can perform this step, but you need to pay attention to the file setting.“
    - **Falsch**: „You can perform this step but you need to pay attention to the file setting.“
  - Beispiel 2:
    - **Richtig**: „My father is strict but loving.“
    - **Falsch**: „My father is strict, but loving.“

- **Vor „that“ und „which“**: Ein restriktiver Nebensatz ist für die Bedeutung des Satzes wesentlich und muss nicht durch Kommas vom übrigen Satz abgetrennt werden. Ein restriktiver Nebensatz wird normalerweise mit „that“ eingeleitet und sollte **nicht** mit einem Komma eingeleitet werden.
  - **Richtig**: „We have put together a course that includes all the essential information you need to work towards your goal.“
  - **Falsch**: „We have put together a course, that includes all the essential information you need to work towards your goal.“

  Ein nicht restriktiver Nebensatz liefert zusätzliche Informationen und ist für die Bedeutung des Satzes nicht wesentlich. Ein nicht restriktiver Nebensatz wird normalerweise mit „which“ eingeleitet und sollte mit einem Komma eingeleitet werden.
  - **Richtig**: „You write a policy, which is an allowed list of origins for each feature.“
  - **Falsch**: „You write a policy which is an allowed list of origins for each feature.“

- **Vor „such as“**: Wenn „such as“ Teil eines nicht restriktiven Nebensatzes ist und der verbleibende Satz ein Hauptsatz ist, verwenden Sie ein Komma vor „such as“.
  - **Richtig**: „The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them.“
  - **Falsch**: „The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them.“

  Das folgende Beispiel zeigt, wann kein Komma mit „such as“ verwendet werden soll. In diesem Fall ist der Nebensatz mit „such as“ für die Bedeutung des Satzes wesentlich.
  - **Richtig**: „Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets.“
  - **Falsch**: „Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets.“

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrich geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und dem ersten Buchstaben des Grundworts entspricht.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanisch-englische Rechtschreibung.

Verwenden Sie im Allgemeinen den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als alternative Schreibweise oder als primär in einer nicht amerikanischen Variante des Englischen verwendet aufgeführt.
Wenn Sie beispielsweise [„behaviour“](https://www.dictionary.com/browse/behaviour) nachschlagen (mit einem zusätzlichen _u_ gegenüber der amerikanischen Standardform), finden Sie die Formulierung „Chiefly British“ gefolgt von einem Link zur amerikanischen Standardform [„behavior“](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternative Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird jede Woche ausgeführt und erstellt im Repository [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle). Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
npm run lint:typos
```

Im Repository verwalten wir mehrere Wortlisten im Verzeichnis [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries), die zulässige Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können diesen Listen weitere Wörter hinzufügen, wenn sie gültig sind, aber von der Rechtschreibprüfung gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält, und um Details zu unserer Konfiguration für die Rechtschreibprüfung zu erfahren.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter Fachbegriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff „element“ für HTML- und XML-Elemente statt „tag“. Außerdem sollte das Element in spitze Klammern „<>“ eingeschlossen und mit Backticks (`` ` ``) formatiert werden. Beispielsweise formatiert die Verwendung von \<input\> innerhalb von Backticks es erwartungsgemäß als `<input>`.
  - **Richtig**: the `<span>` element
  - **Falsch**: the span tag

  Auf MDN können Sie das HTML-Element optional im Makro [`HTMLElement`](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) angeben. Dieses formatiert das Element, fügt die spitzen Klammern „<>“ hinzu und verlinkt auf die Referenzseite.
  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelltext in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs lautet **parameters**. Vermeiden Sie aus Konsistenzgründen nach Möglichkeit den Begriff „arguments“.

- **Aktionen in Benutzeroberflächen**: Beschreiben Sie Aktionen in Benutzeroberflächen bei Aufgabenabläufen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seiner Beschriftung und seines Typs.
  - **Richtig**: „Click the Edit button.“
  - **Falsch**: „Click Edit.“

### Sprachform

Obwohl Aktiv bevorzugt wird, ist Passiv angesichts des informellen Tons unserer Inhalte ebenfalls akzeptabel.
Versuchen Sie jedoch, konsistent zu bleiben.

## Seitenkomponenten

Dieser Abschnitt führt die Richtlinien für verschiedene Teile jeder Seite auf, etwa Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt „See also“](#abschnitt_„see_also“)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste enthält einige empfohlene Vorgehensweisen beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jeder Beispielcode sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze Überschrift der Ebene `###` (`<h3>`), die das durch das Codebeispiel demonstrierte Szenario beschreibt. Zum Beispiel „Using offset printing“ und „Reverting to style in previous layer“.
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Einzelheiten des Beispiels nennt, auf die Sie die Aufmerksamkeit der lesenden Person lenken möchten. Beispielsweise: „In the following example, two cascade layers are defined in the CSS, `base` and `special`.“
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis und die Funktionsweise des Codes beschreibt.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und seine Verwendung demonstrieren, sondern auch den Zweck und Situationen hervorheben, in denen eine Webentwicklerin oder ein Webentwickler das Feature verwenden möchte oder muss.
- Wenn Sie mit einem großen Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile aufzuteilen, damit diese einzeln beschrieben werden können.
- Beim Hinzufügen von [Live Samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels desselben Typs (HTML, CSS und JavaScript) vor der Ausführung des Beispiels zusammengefügt werden. Dadurch können Sie den Code in mehrere Segmente aufteilen, jeweils optional mit eigenen Beschreibungen, Überschriften und so weiter. Dies macht die Dokumentation von Code äußerst leistungsstark und flexibel.

Informationen zum Gestalten oder Formatieren von Codebeispielen für MDN Web Docs finden Sie in unseren [Richtlinien zum Gestalten von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Wenn Sie auf eine andere MDN-Seite oder auf einen Abschnitt einer Seite anhand ihres Titels verweisen, verwenden Sie im Linktext Satzschreibung (entsprechend dem Seiten- oder Abschnittstitel). Verwenden Sie im Linktext Satzschreibung, auch wenn sie vom Titel der verlinkten Seite oder des Abschnitts abweicht — möglicherweise ist die im Seiten- oder Abschnittstitel verwendete Schreibweise falsch. Verwenden Sie keine Anführungszeichen um den Linktext. Verwenden Sie den folgenden Stil, um anhand ihres Titels auf eine MDN-Seite zu verweisen:

- **Richtig**: „Refer to the [Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) guide.“
- **Falsch**: „Refer to the "[Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" guide.“

Verwenden Sie beim Verlinken auf Abschnitte innerhalb einer Seite einen konsistenten Stil:

- **Richtig**: „Weitere Informationen finden Sie im Abschnitt [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im Leitfaden _Memory management_.“

Wenn sich der Abschnitt, auf den Sie verlinken, auf derselben Seite befindet, können Sie mit beschreibenden Formulierungen auf seine Position hinweisen.

- **Richtig**: „Dieses Konzept wird im Abschnitt [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) dieses Dokuments ausführlicher beschrieben.“
- **Falsch**: „Dieses Konzept wird im Abschnitt [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) unten ausführlicher beschrieben.“

Auf MDN können Sie auch mithilfe eines Makros auf eine Referenzseite verlinken. Diese Makros werden auf der Seite [Commonly-used macros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) beschrieben. Um beispielsweise auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das Makro `HTMLElement`; um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das Makro `CSSxRef`.

Wir befolgen ähnliche Richtlinien für Querverweise in den Abschnitten [See also](#siehe_auch) am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen zulässig. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob ein externer Link auf MDN Web Docs eingefügt werden sollte. Pull Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diese Richtlinien nicht befolgen.

Wenn Sie erwägen, externe Links zu den Inhalten von MDN [Learn web development](/de/docs/Learn_web_development) hinzuzufügen, lesen Sie außerdem [Learn web development writing guidelines > Partner links and embeds](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Wenn Sie im Allgemeinen erwägen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko für Folgendes minimal ist:

- Defekte oder veraltete Links
- Der Eindruck einer Befürwortung, insbesondere für kommerzielle Produkte oder Dienste
- Der Versuch, MDN Web Docs zur Verbreitung von Spam zu verwenden
- Shortlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie Inhalte innerhalb von MDN Web Docs querverweisen. Interne Links sind einfacher zu pflegen und machen MDN Web Docs insgesamt für Lesende wertvoller.

- **Gute externe Links**: Gute externe Links führen Lesende zu Ressourcen, die relevant, dauerhaft und weithin vertrauenswürdig sind. Sie sollten bevorzugt Links zu externen Inhalten hinzufügen, die:
  - Einzigartig oder unverzichtbar sind (z. B. ein IETF RFC)
  - Für Namensnennung, Zitation oder Danksagung erforderlich sind (z. B. als Teil einer Creative-Commons-Namensnennung)
  - Für das Thema mit höherer Wahrscheinlichkeit gepflegt werden als Inhalte, die in MDN Web Docs selbst aufgenommen werden (z. B. Release Notes eines Anbieters)
  - Open Source oder gemeinschaftsgetrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links mangelt es an Relevanz, Wartbarkeit oder Barrierefreiheit, oder sie schaffen anderweitig Hürden für Lesende. Vermeiden Sie das Hinzufügen von Links zu externen Inhalten, die:
  - Allgemein oder unspezifisch sind (z. B. die Startseite eines Anbieters statt der zugehörigen Dokumentation)
  - Kurzlebig oder ungepflegt sind (z. B. eine einmalige Ankündigung)
  - Auf eigene Inhalte verweisen oder Eigenwerbung darstellen (z. B. die eigene Arbeit der Autorin oder des Autors außerhalb von MDN Web Docs)
  - Hinter einer Paywall liegen (z. B. ein teurer Kurs, der für Hobbyentwicklerinnen und -entwickler, Studierende oder Lesende in Ländern mit niedrigem Einkommen unerschwinglich ist)
  - Nicht barrierefrei sind (z. B. ein Video ohne Untertitel)

- **Links mit Eigenwerbung oder Spam**: Obwohl ein persönlicher Blogbeitrag, Konferenzvortrag oder ein GitHub-Repository wertvoll sein kann, kann das Verlinken auf eigene Ressourcen den Eindruck eines Interessenkonflikts erwecken. Überlegen Sie zweimal, bevor Sie auf Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull Request offenlegen. Andernfalls kann Ihre weitere Teilnahme an MDN Web Docs gefährdet sein.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie beispielsweise Herausgeberin oder Herausgeber einer Spezifikation sind und zu Dokumentation über diese Spezifikation beitragen, wird ein Link auf diese Spezifikation erwartet und akzeptiert. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Kürzungsdienst (etwa TinyURL oder Bitly) kann hervorragend dazu geeignet sein, lange Links in kurze, leichter zu merkende URLs zu verkürzen (auch als „Shortlinks“ bezeichnet). Sie verschleiern jedoch auch das Ziel der URL. Außerdem kann bei bestimmten Kürzungsdiensten das Ziel nach der Erstellung geändert werden — ein Feature, das für bösartige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über URL-Kürzungsdienste von Drittanbietern erstellt wurden und von Benutzenden generiert werden können. Wenn beispielsweise `https://myshort.link/foobar` eine von einer zufälligen Person erzeugte kurze URL ist und auf `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere URL von `example.com`.

<!-- markdownlint-disable search-replace -->

Dagegen werden First-Party-Kürzungsdienste empfohlen, die von den Organisationen gepflegt werden, welche auch die Ziel-URLs verwalten. `https://bugzil.la` gehört Mozilla und wird von Mozilla betrieben; es ist ein URL-Kürzungsdienst, der auf `https://bugzilla.mozilla.org/` weiterleitet, ebenfalls eine Mozilla-Domain. Verwenden Sie in diesem Fall die kürzere URL. Verwenden Sie beispielsweise `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###` und dann `####`; diese werden jeweils in die [HTML-Überschriften-Tags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` und `<h4>` übersetzt.

`##` ist die höchste zulässige Ebene, weil `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Überschriftenebenen hinzuzufügen. Wenn Sie das Bedürfnis haben, die vierte Überschriftenebene hinzuzufügen, sollten Sie den Artikel in mehrere kleinere Artikel mit einer Landingpage aufteilen. Alternativ können Sie die Informationen als Aufzählungspunkte darstellen, um die Verwendung einer Überschrift der Ebene vier zu vermeiden.

Beachten Sie beim Erstellen von Überschriften für Unterabschnitte die folgenden Empfehlungen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in nur ein Unterthema.
  Es sollten entweder zwei oder mehr Unterüberschriften vorhanden sein oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros in Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzugeben, z. B. „Using `FooBar` interface“.
- **Erstellen Sie keine direkt aufeinanderfolgenden Überschriften.** Dies sind Überschriften, auf die unmittelbar eine Unterüberschrift folgt, ohne dass Textinhalt dazwischensteht.
  Dies sieht nicht gut aus und lässt Lesende am Anfang des äußeren Abschnitts ohne erklärenden Text zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz ihre Verwendung zulässt. Versuchen Sie, Medien mit einer sehr freizügigen Lizenz wie [CC0](https://wiki.creativecommons.org/wiki/CC0) oder zumindest einer Lizenz zu verwenden, die mit unserer allgemeinen Inhaltslizenz kompatibel ist — der [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Führen Sie Bilder durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Führen Sie für `SVG` den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei am Dateiende eine leere Zeile enthält.
- Jedes Bild muss [aussagekräftigen `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten auf allen Seiten konsistent formatiert und strukturiert sein.
Einzelne Listeneinträge sollten unabhängig vom Listenformat mit geeigneter Zeichensetzung geschrieben werden.
Je nach Art der Liste, die Sie erstellen, sollten Sie Ihren Schreibstil jedoch wie in den folgenden Abschnitten beschrieben anpassen. Fügen Sie in beiden Fällen einen einleitenden Satz ein, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um zusammengehörige, prägnante Informationen zu gruppieren. Jeder Eintrag in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb, Subjekt oder beides) in Aufzählungslisten sollten die übliche Zeichensetzung enthalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn ein Listeneintrag mehrere Sätze enthält, muss am Ende jedes Satzes ein Punkt stehen, einschließlich des letzten Satzes des Eintrags, wie dies auch in einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einbeziehen:
  >
  > - Eine Bedingung mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung mit einer kurzen Erklärung.
  > - Eine weitere Bedingung mit einer ausführlicheren Erklärung.

  Beachten Sie, wie sich dieselbe Satzstruktur von Aufzählungspunkt zu Aufzählungspunkt wiederholt. In diesem Beispiel nennt jeder Aufzählungspunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jeder Listeneintrag endet mit einem Punkt.

  Wenn die Listeneinträge unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften sind in diesem Szenario hilfreich:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt Text einen Schatten hinzu

  Wenn ein oder mehrere Listeneinträge vollständige Sätze sind, verwenden Sie nach jedem Listeneintrag einen Punkt, auch wenn ein Eintrag aus drei oder weniger Wörtern besteht. Befolgen Sie jedoch nach Möglichkeit für alle Einträge einer Liste dieselbe Struktur; stellen Sie sicher, dass alle Listeneinträge entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen aufzuführen. Da Anweisungen komplex sein können, hat Klarheit Priorität, insbesondere wenn der Text in jedem Listeneintrag lang ist. Befolgen Sie wie bei Aufzählungslisten die übliche Zeichensetzung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuführen. Es ist wichtig, der benutzenden Person Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen und behalten Sie jeden Schritt in einem eigenen nummerierten Eintrag.
  >    Ihre Anweisungen können sehr umfangreich sein, daher ist es wichtig, klar zu schreiben und korrekte Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen fertiggestellt haben, schließen Sie die nummerierte Liste mit einer kurzen Zusammenfassung oder Erklärung des erwarteten Ergebnisses nach Abschluss ab.

  Das Folgende ist ein Beispiel für eine abschließende Erklärung für die vorhergehende Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungsschritte enthält, um eine nummerierte Liste mit korrekter Formatierung zu erzeugen.

  Beachten Sie, wie Einträge in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen regelmäßig für Anweisungen oder zur Führung durch einen geordneten Ablauf verwendet werden, sollten Sie jeden Eintrag fokussiert halten: ein nummerierter Eintrag pro Schritt.

### Abschnitt „See also“

Die meisten Leitfäden, Referenzseiten und auch Glossarseiten auf MDN Web Docs enthalten am Ende des Artikels einen Abschnitt _See also_. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und gelegentlich Links auf verwandte externe Artikel. Dies ist beispielsweise der [Abschnitt See also](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die Seite zu `@layer`.

Präsentieren Sie die Links in einem Abschnitt See also im Allgemeinen als [Aufzählungsliste](#listen), wobei jeder Listeneintrag eine Phrase ist. Im Bereich [Learn web development](/de/docs/Learn_web_development) auf MDN folgt der Abschnitt See also jedoch dem Format einer [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists).

Beachten Sie beim Hinzufügen oder Aktualisieren eines Abschnitts See also die folgenden Richtlinien, um die Konsistenz auf MDN Web Docs zu wahren.

#### Linktext

- Der Linktext sollte dem Titel der verlinkten Seite oder des verlinkten Abschnitts entsprechen. Der Linktext auf diese [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)-Seite mit dem Seitentitel „ARIA states and properties“ lautet beispielsweise:
  - **Richtig**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satzschreibung im Linktext, auch wenn sie vom Titel der verlinkten Seite oder des Abschnitts abweicht. Es könnte sein, dass die im Seiten- oder Abschnittstitel verwendete Schreibweise falsch ist. Der Linktext auf die Seite [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) in korrekter Satzschreibung lautet beispielsweise:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Verwenden Sie auch für externe Links Satzschreibung, selbst wenn sich die Groß- und Kleinschreibung auf der Zielartikelseite unterscheidet. Dies dient der Konsistenz auf MDN Web Docs. Ausnahmen sind Buchtitel.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Linking to reference pages](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) auf der Seite _Commonly used macros_ erklärt wird. Die Verwendung eines Makros fügt dem Keyword im Linktext eine Codeformatierung hinzu, wie im nächsten Beispiel gezeigt.
- Am Anfang eines Link-Listeneintrags wird kein Artikel („A“, „An“, „The“) benötigt. Am Ende des Listeneintrags ist keine Zeichensetzung erforderlich, da es sich stets um einen Begriff oder eine Phrase handelt.
  - **Richtig**: {{cssxref("revert-layer")}}
  - **Falsch**: The {{cssxref("revert-layer")}} keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie Keywords und Literalen im Linktext mit Backticks (`` ` ``) eine Codeformatierung hinzu, auch wenn diese Formatierung nicht in Seiten- und Abschnittstiteln verwendet wird. Beim Seitentitel „Array() constructor“ lautet der Linktext beispielsweise [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link herum auf ein Minimum. Wenn eine Beschreibung erforderlich ist, fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Zeichensetzung. Halten Sie sämtlichen verlinkten Text am Anfang, um das Überfliegen der Linkliste zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Gestalten von Kontrollkästchen
- Verwenden Sie die Konjunktion „and“ nicht vor dem letzten Eintrag in einer Reihe.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Weitere farbbezogene Eigenschaften
- Geben Sie für externe Links nach Möglichkeit und sofern angemessen die Quellwebsite sowie das Jahr der Veröffentlichung oder letzten Aktualisierung in Klammern an. Diese Informationen im Voraus bereitzustellen, vermittelt Lesenden eine klare Vorstellung vom Ziel, das sie beim Anklicken des Links erreichen. Das Veröffentlichungs- oder Aktualisierungsdatum hilft Lesenden bei der Einschätzung der Relevanz des verlinkten Artikels und unterstützt MDN-Verantwortliche bei der Überprüfung von Links auf Artikel, die lange nicht aktualisiert wurden. Wenn Sie beispielsweise auf einen Artikel in Wikipedia verlinken, können Sie das Veröffentlichungs-/Aktualisierungsdatum weglassen. Der folgende Listeneintrag ist ein Beispiel für das Hinzufügen eines Links zum externen Artikel [Top-level await](https://v8.dev/features/top-level-await) im Abschnitt See also zusammen mit Quellen- und Jahresangabe:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links auf Bücher können Sie auch Autorennamen angeben. Einige Beispiele sind im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) aufgeführt. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repositories anzugeben, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie Links auf MDN-Seiten in der Reihenfolge auf: zuerst Referenzseiten, gefolgt von Links auf verwandte Leitfäden und Tutorialseiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich der besseren Überfliegbarkeit der Listeneinträge.
- Wenn die Liste eine Mischung aus internen und externen Links enthält, führen Sie zuerst die internen Links und anschließend die externen Links auf.
- Befolgen Sie innerhalb jeder Gruppe interner und externer Links eine alphabetische Reihenfolge oder eine Reihenfolge von einfach zu fortgeschritten, je nachdem, was im Kontext sinnvoller ist.

### Unterseiten

Wenn Sie mehrere Artikel über ein Thema oder einen Themenbereich hinzufügen müssen, erstellen Sie üblicherweise eine Landingpage und fügen dann Unterseiten für die einzelnen Artikel hinzu.
Die Landingpage sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und anschließend eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können das Einfügen von Seiten in die Liste mithilfe einiger von uns erstellter Makros automatisieren.

Betrachten Sie beispielsweise den [JavaScript](/de/docs/Web/JavaScript)-Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptseite mit Inhaltsverzeichnis
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Vermeiden Sie nach Möglichkeit, Ihren Artikel an der Spitze der Hierarchie einzuordnen, da dies die Website verlangsamt und Suche sowie Seitennavigation weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom „Slug“ der Seite unterscheiden. Dies ist der Teil der Seiten-URL nach `<locale>/docs/`. Beachten Sie beim Definieren eines Slugs die folgenden Richtlinien:

- Slugs sollten kurz gehalten werden. Beim Erstellen einer neuen Hierarchieebene sollte die Komponente der neuen Ebene im Slug nur aus ein oder zwei Wörtern bestehen.
- Slugs sollten für eine Komponente mit mehreren Wörtern einen Unterstrich verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Verwenden Sie auch in Slugs Satzschreibung für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und dienen außerdem zur Strukturierung der Seitenhierarchie in der Breadcrumb-Liste am oberen Seitenrand. Ein Seitentitel kann sich vom „Slug“ der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie beim Schreiben von Titeln die folgenden Richtlinien:

- **Stil der Groß- und Kleinschreibung**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften satzartige Großschreibung verwenden (nur das erste Wort und Eigennamen werden großgeschrieben), statt titelhafte Großschreibung:
  - **Richtig**: „A new method for creating JavaScript rollovers“
  - **Falsch**: „A New Method for Creating JavaScript Rollovers“

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel eingeführt wurde. Sie können sie bei Bedarf gerne aktualisieren. Wir arbeiten sie nach und nach durch.

- **Allgemeine Richtlinien**: Die Entscheidung, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren werden, ist einer der ersten Schritte beim Schreiben. Das Erstellen eines Inhaltsverzeichnisses kann Ihnen bei der Entscheidung helfen, wie Sie Informationen anordnen möchten. Behandeln Sie zuerst einfache Konzepte und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Behandeln Sie zuerst konzeptionelle Informationen und wechseln Sie anschließend zu handlungsorientierten Themen.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite sowie für Abschnitte und Unterabschnitte:
  - **Von höher zu niedriger gehen**: Wie im Abschnitt [Überschriftenebenen](#überschriftenebenen) beschrieben, gehen Sie von `##` auf höherer Ebene zu `####` auf niedrigerer Ebene, ohne Ebenen zu überspringen. Verwenden Sie Überschriften höherer Ebene für breitere einführende Titel und spezifischere Titel, wenn Sie zu Überschriften niedrigerer Ebene übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer Überschrift höherer Ebene gruppiert sind. Das Benennen der Titel verschiedener Abschnitte kann Ihnen bei dieser Aufgabe helfen.
  - **Titel kurz halten**: Kürzere Titel lassen sich im Text und im Inhaltsverzeichnis leichter überfliegen.
  - **Titel spezifisch halten**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Verwenden Sie beispielsweise für einen Abschnitt, der HTML-Elemente einführt, den Titel „HTML elements“ statt „Introduction“ oder „Overview“.
  - **Titel fokussiert halten**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine einzelne Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Versuchen Sie zu diesem Zweck nach Möglichkeit, die Konjunktion „and“ nicht in einem Titel zu verwenden.
  - **Parallele Konstruktion verwenden**: Verwenden Sie für Titel auf derselben Überschriftenebene eine ähnliche Sprache. Wenn beispielsweise ein Titel der Überschriftenebene `###` Gerundien verwendet, also auf „-ing“ endende Wörter wie „Installing“, versuchen Sie, alle Titel auf dieser Überschriftenebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, etwa „Use“ oder „Configure“, schreiben Sie alle Titel auf dieser Überschriftenebene mit einem Imperativverb am Anfang.
  - **Gemeinsamen Begriff in Überschriften niedrigerer Ebene vermeiden**: Wiederholen Sie nicht den Text aus dem Titel einer Überschrift höherer Ebene in Titeln niedrigerer Ebenen. Benennen Sie beispielsweise in einem Abschnitt mit dem Titel „Commas“ einen Unterabschnitt „After introductory clauses“ statt „Commas after introductory clauses“.
  - **Nicht mit einem Artikel beginnen**: Vermeiden Sie es, Titel mit den Artikeln „a“, „an“ oder „the“ zu beginnen.
  - **Einleitende Informationen hinzufügen**: Fügen Sie nach einem Titel einleitenden Text hinzu, der erklärt, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Leitfäden zum Schreibstil

Wenn Sie Fragen zur Verwendung oder zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) heranzuziehen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie Ihre Schreib- und Bearbeitungsfähigkeiten verbessern möchten, könnten die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Website zur Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nichtmuttersprachlerinnen und Nichtmuttersprachler, insbesondere zur Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
