---
title: Leitfaden für den Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

Dieser Leitfaden für den Schreibstil beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen die Konsistenz der Sprache und des Stils auf der Website gewährleisten. Dennoch sind wir mehr an den Inhalten als an deren Formatierung interessiert, daher fühlen Sie sich nicht verpflichtet, den gesamten Leitfaden zu lernen, bevor Sie Beiträge leisten. Seien Sie jedoch nicht enttäuscht oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit überarbeitet, um diesen Richtlinien zu entsprechen. Die Gutachter könnten Sie auch auf diesen Leitfaden hinweisen, wenn Sie einen Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentationen. Andere Sprachen können (und sollten) ihre eigenen Stilrichtlinien haben. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteam-Seite veröffentlicht werden. Dennoch sollte dieser Leitfaden zur Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung allgemeiner Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und anschließend, wie verschiedene Komponenten auf einer Seite wie Listen und Titel formatiert werden.

## Allgemeine Schreibrichtlinien

Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das betreffende Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Überlegen Sie sich Ihre Zielgruppe](#überlegen_sie_sich_ihre_zielgruppe)
- [Beachten Sie die drei Cs des Schreibens](#beachten_sie_die_drei_cs_des_schreibens)
- [Verwenden Sie relevante Beispiele](#verwenden_sie_relevante_beispiele)
- [Geben Sie eine beschreibende Einführung](#geben_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Beachten Sie SEO beim Schreiben](#beachten_sie_seo_beim_schreiben)

### Überlegen Sie sich Ihre Zielgruppe

Behalten Sie beim Schreiben den Zielgruppe im Hinterkopf. Eine Seite über fortgeschrittene Netzwerktechniken muss beispielsweise möglicherweise nicht so detailliert auf grundlegende Netzwerkbegriffe eingehen wie eine typische Seite über Netzwerke im Allgemeinen. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Beachten Sie die drei Cs des Schreibens

Die drei Cs guten Schreibens sind klare, prägnante und konsistente Texte.

- **Klar**: Achten Sie darauf, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den Aktiv und eindeutige Pronomen. Schreiben Sie kurze Sätze und beschränken Sie sich auf eine Idee pro Satz. Definieren Sie neue Begriffe vor ihrer Verwendung.
- **Prägnant**: Beim Schreiben eines Dokuments ist es wichtig, das richtige Maß an Informationen zu kennen. Wenn Sie zu viele Details angeben, wird die Seite anstrengend zu lesen und selten genutzt.
- **Konsistent**: Verwenden Sie konsistent die gleiche Ausdrucksweise auf der gesamten Seite und auf mehreren Seiten.

### Verwenden Sie relevante Beispiele

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, für welche Parameter sie verwendet werden, und um Randfälle zu klären, die möglicherweise auftreten. Sie können auch Beispiele verwenden, um Lösungen für allgemeine Aufgaben und Probleme zu demonstrieren, die auftreten können.

### Geben Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz oder die Absätze vor der ersten Überschrift die Informationen, die die Seite abdecken wird, sowie möglicherweise das, was Leser nach dem Durcharbeiten der Inhalte erreichen können, angemessen zusammenfassen. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Belange und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz die Leser über die behandelten Themen informieren sowie das erforderliche Vorwissen aufzeigen, das möglicherweise erwartet wird. Der Einleitungsabsatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den entsprechenden Informationen, und Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Einführungsbeispiel ist viel zu kurz. Es fehlen wesentliche Informationen, wie zum Beispiel, was "Streichen" von Text bedeutet, wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang.
  Zu viele Details sind enthalten, und der Text geht zu sehr darauf ein, andere Methoden und Eigenschaften zu beschreiben.
  Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben sind.

  > Wenn die Methode **`CanvasRenderingContext2D.strokeText()`** der Canvas 2D API aufgerufen wird, werden die Zeichen in der angegebenen Zeichenfolge beginnend bei den angegebenen Koordinaten gestrichen, unter Verwendung der aktuellen Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet „Streichen“ von Text, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schriftart des Kontexts gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, dann wird die Zeichenfolge beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte der Zeichenfolge liegt.
  > Wenn der Wert `"left"` ist, wird die Zeichenfolge beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenfolge in Pixel angeben können.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um innerhalb eines so breiten Raums gezeichnet zu werden.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenfolge als mit Farbe gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer geeigneten Einführung**: Der folgende Abschnitt bietet einen wesentlich besseren Überblick über die `strokeText()`-Methode.

  > Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), streicht (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenfolge, verankert an der durch die angegebenen X- und Y-Koordinaten angegebenen Position.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Weitere Details und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite über das Zeichnen von Grafiken sowie in unserem Hauptartikel zu diesem Thema: [Text Zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich dazu, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig in der Dokumentation verwendeten Begriffen:

- Vermeiden Sie die Verwendung der Begriffe **master** und **slave**. Verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in der Dokumentation nicht verwenden müssen; jedoch, falls der Fall auftritt, ziehen Sie in Erwägung **fantastic** stattdessen zu verwenden.

Es ist am besten, eine geschlechterneutrale Sprache in jedem Schreiben zu verwenden, bei dem das Geschlecht für das Thema irrelevant ist.
Wenn Sie zum Beispiel über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Subjekt eine Person irgendeines Geschlechts ist, sind "er"/"sein" nicht angemessen.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsbezogen. Um dies zu beheben, verwenden Sie geschlechterneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechterneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine weitere Möglichkeit ist es, die Benutzer zu pluralisieren:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der um die Erlaubnis des Benutzers für den Zugriff auf die Webcam bittet, erscheint."
- **Richtig**: "Eine Bestätigungsdialogbox, die den Benutzer um Erlaubnis zur Verwendung der Webcam bittet, erscheint."

Dieses letzte Beispiel zur Problemlösung ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, sondern entfernt auch einige der Komplexitäten im Zusammenhang mit dem Umgang mit Geschlechtern in verschiedenen Sprachen, die möglicherweise sehr unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Verwenden Sie eine zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und richtungsbezogenen Wörtern wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer gilt. Sie können auch unklar oder irreführend sein – insbesondere für Benutzer, die auf Bildschirmleser angewiesen sind, oder für diejenigen, die übersetzten Inhalt lesen, bei dem die Richtungsangabe zweideutig oder schwer zu übersetzen sein kann. In responsiven Layouts, bei denen sich die Position von Inhalten je nach Bildschirmgröße ändern kann, können solche Richtungsreferenzen ungenau werden. Diese Art von Sprache kann die Barrierefreiheit beeinträchtigen und es allen Benutzern erschweren, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element, auf das Bezug genommen wird, klar identifizieren. Beziehen Sie sich auf Abschnitte mit ihren Titeln oder Überschriften und verweisen Sie auf Beispiele oder Code-Snippets anhand dessen, was sie demonstrieren oder enthalten.

Beispielsweise:

- **Richtig**: "Beziehen Sie sich auf den Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) weiter unten auf dieser Seite."
- **Falsch**: "Beziehen Sie sich auf den Abschnitt Barrierefreiheit unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mit CSS-Übergängen."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mit CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im früheren Abschnitt mit dem Titel Erstellen einer Medienabfrage erklärt."
- **Falsch**: "Dieses Konzept wird im Abschnitt oben erklärt."

Vermeiden Sie außerdem vage Linktexte wie "Hier klicken" oder "Diesen Artikel lesen". Deskriptive Linktexte bieten besseren Kontext für alle Leser und verbessern das Erlebnis für Benutzer von unterstützenden Technologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Elemente bestellt](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Indem Sie diese Richtlinien beachten, tragen Sie dazu bei, dass die MDN-Dokumentation zugänglich, klar und für alle Benutzer verwendbar ist, unabhängig davon, wie sie auf die Seite zugreifen.

### Beachten Sie SEO beim Schreiben

Während das Hauptziel jedes Schreibens auf MDN Web Docs immer sein sollte, über Open-Web-Technologie zu erklären und zu informieren, damit Entwickler schnell lernen können, wie sie das tun können, was sie möchten, oder um die kleinen Details zu finden, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Wir können dies erreichen, indem wir Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben im Hinterkopf behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, damit Leser leicht finden können, was sie benötigen. Die SEO-Richtlinien beinhalten sicherzustellen, dass jede Seite, an der Autoren und Editoren arbeiten, vernünftig gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indexieren.

Die folgende Checkliste ist gut zu beachten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen ordnungsgemäß indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten sich textuell ähnelt, werden Suchmaschinen annehmen, dass die Seiten über dasselbe Thema handeln, auch wenn sie es nicht tun.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht für den Text überraschend ähnlich auf den beiden Seiten zu sein, die diese beiden Eigenschaften dokumentieren, mit wenigen ausgetauschten Worten und mit dem gleichen Beispiel. Das macht es für Suchmaschinen schwer zu wissen, welche welche ist, und sie teilen sich die Seitenrankings, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Es ist also wichtig sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen helfen, dies zu erreichen:
  - **Mehr einzigartige Konzepte erklären**: Ziehen Sie Anwendungsfälle in Betracht, in denen es mehr Unterschiede geben könnte, als man denkt. Im Fall der Dokumentation von `width`- und `height`-Eigenschaften schreiben Sie zum Beispiel über die unterschiedliche Nutzung von horizontalem und vertikalem Raum und bieten Sie eine Diskussion über die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` im Sinne der Schaffung von Raum für eine Seitenleiste erwähnen, während Sie `height` zur Handhabung von vertikalem Scrollen oder Fußzeilen verwenden. Informationen zu Zugänglichkeitsproblemen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele sind in diesen Situationen oft noch ähnlicher als der Haupttext, da die Beispiele möglicherweise beide (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und daher keine wirklichen Änderungen erfordern, wenn sie wiederverwendet werden. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder zumindest bieten Sie mehrere Beispiele an, wobei zumindest einige von ihnen unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl ein Überblick über das, was das Beispiel tut, als auch eine Abdeckung darüber, wie es funktioniert, sollte in einem angemessenen Detailgrad gegeben werden, abhängig von der Komplexität des Themas und der Zielgruppe.

  Der einfachste Weg, um übermäßige Ähnlichkeiten zu vermeiden, besteht natürlich darin, wenn die Zeit es erlaubt, jeden Artikel von Grund auf zu schreiben.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (genannt "dünne Seiten" in SEO-Sprache), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie stellen Sie sicher, dass Seiten auf MDN Web Docs nicht kürzer sind als ungefähr 300 Wörter oder so. Künstlich eine Seite aufzublähen, vermeiden Sie, aber behandeln Sie diese Richtlinie als ein Mindestziel, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genug Inhalt haben, um richtig durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:
  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie sie hinzu. Wir versuchen, "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie ordnungsgemäß für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Überprüfen Sie, ob alle Abschnitte vorhanden sind und über entsprechende Inhalte verfügen.
  - **Stellen Sie Vollständigkeit sicher**: Prüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden – dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist leicht, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es besondere Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer vom Anfänger- bis Fortgeschrittenenbereich wahrscheinlich verwenden werden, sowie alle fortgeschrittenen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einem Überblick darüber, was das Beispiel tut, und welche zusätzlichen Kenntnisse erforderlich sein könnten, um es zu verstehen, gefolgt werden. Nach dem Beispiel (oder zwischen den Teilen des Beispiels) sollten Texte erklärt werden, wie der Code funktioniert. Sparen Sie nicht an Details oder der Handhabung von Fehlern in Beispielen. Beachten Sie, dass Benutzer _werden_ Ihr Beispiel kopieren und in ihren eigenen Projekten verwenden, und Ihr Code _wird_ auf Produktionsseiten verwendet! Siehe unsere [Codebeispiel-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Verwenden Sie Fallbeispiele**: Wenn es besonders gängige Anwendungsfälle für die beschriebene Funktion gibt, sprechen Sie darüber! Anstatt zu erwarten, dass ein Benutzer herausfindet, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt zu diesem Anwendungsfall hinzu mit einem Beispiel und Text, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie ordentlichen [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text auf allen Bildern und Diagrammen hinzu. Dieser Text sowie Bildunterschriften auf Tabellen und anderen Abbildungen zählen, da Suchmaschinen-Spider Bilder nicht durchsuchen können und `alt`-Text den Suchmaschinen-Crawlern mitteilt, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Keywords oder nicht mit der Funktion in Zusammenhang stehende Keywords einzuschließen, um die Suchmaschinenrankings zu manipulieren; dieser Art von Verhalten ist leicht zu erkennen und wird oft bestraft.
    > Ebenso, **fügen Sie nicht** wiederholtes, unnützes Material oder Keyword-Blöcke innerhalb der tatsächlichen Seite ein, in dem Versuch, die Größe der Seite und das Suchranking zu verbessern. Dies schadet mehr als es nützt, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Konzentrieren Sie sich auf den Themeninhalt**: Es ist weitaus besser, Inhalte um das Thema der Seite herum zu schreiben als auf ein bestimmtes Keyword hin. Es ist sehr wahrscheinlich, dass es viele Keywords gibt, die Sie für ein gegebenes Thema einschließen könnten; tatsächlich erstellen viele SEOs eine Liste von 5-100 verschiedenen Keywords (mit Variationen zwischen kurzen, mittleren und langschwänzigen Keywords), die sie in ihren Artikel einfügen, abhängig von der Länge. Auf diese Weise diversifizieren Sie Ihre Ausdrucksweise und vermeiden Wiederholungen.

## Schreibstil

Abgesehen davon, dass Sie grammatikalisch korrekte Sätze in Englisch schreiben, empfehlen wir, diese Richtlinien zu befolgen, um die Konsistenz der Inhalte auf MDN Web Docs zu gewährleisten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anfuehrungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus dem ersten Buchstaben jedes Wortes eines Satzes gebildet wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Beim ersten Auftreten eines Begriffs auf einer Seite erweitern Sie Akronyme, die Benutzern wahrscheinlich unbekannt sind. Wenn Sie sich nicht sicher sind, erweitern Sie den Begriff. Noch besser, verlinken Sie ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.
  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie vollständige Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Webbrowser (e.g., Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser e.g. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, e.g. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (eg: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  In regulärem Text (d.h. Text außerhalb von Notizen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.
  - **Richtig**: ... Webbrowser usw.
  - **Falsch**: ... Webbrowser etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser e.g., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente lateinischer Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abk.   | Latein           | Englisch                     |
  | ------ | ---------------- | ---------------------------- |
  | cf.    | _confer_         | vergleichen                  |
  | e.g.   | _exempli gratia_ | zum Beispiel                 |
  | et al. | _et alii_        | und andere                   |
  | etc.   | _et cetera_      | und so weiter                |
  | i.e.   | _id est_         | das heißt, in anderen Worten |
  | N.B.   | _nota bene_      | gut bemerken                 |
  | P.S.   | _post scriptum_  | Nachschrift                  |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich von Vorteil ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder verwirrt sind oder ihre Bedeutungen nicht verstehen.
  >
  > Stellen Sie auch sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Zum Beispiel, verwechseln Sie nicht "e.g." mit "i.e.", was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Für Pluralformen von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie nie einen Apostroph. Bitte.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Abkürzung verwenden, wird "vs." bevorzugt gegenüber "v." und kann in Überschriften verwendet werden. Andernfalls verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie Standardregeln der englischen Großschreibung im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel "web" (alleinstehend oder als Modifikator) und "internet" in Kleinbuchstaben zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer vorherigen Version dieses Leitfadens, sodass Sie viele Instanzen von "Web" und "Internet" auf MDN finden können.
> Ändern Sie diese gerne, wenn Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel ausschließlich zur Änderung der Großschreibung zu bearbeiten.

Tasten auf der Tastatur sollten Satz-Stil-Großschreibung verwenden, keine vollständige Großschreibung.
Zum Beispiel "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die Abkürzung für die "<kbd>Escape</kbd>"-Taste zu schreiben.

Bestimmte Wörter sollten immer großgeschrieben werden, wie Markennamen, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird in einem Code verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke von Oracle Corporation, sollte immer wie markenrechtlich geschützt geschrieben werden)
- Python, TypeScript, Django und andere Namen von Programmiersprachen und Frameworks

Einige Werkzeugnamen und Projekte haben ihre eigenen Marken-Großschreibregeln. Diese könnten Namen erfordern, die alle in Kleinbuchstaben sind ("npm" oder "webpack"), alle in Großbuchstaben ("UNIX", "GNOME", "VIM") oder gemischt geschrieben sind ("TypeScript", "macOS" oder "jQuery").

Die markenmäßige Großschreibung von der offiziellen Website oder Dokumentation sollte immer verwendet werden, auch am Anfang eines Satzes. Wenn Sie es unangenehm finden, einen Satz mit einem Kleinbuchstaben zu beginnen, empfehlen wir, ihn umzuformulieren, um das Problem zu vermeiden. Zum Beispiel könnten Sie sagen "Sie können den npm-Paketmanager verwenden, um..." anstelle von "npm erlaubt es Ihnen, ...".

### Kontraktionen

Unser Schreibstil neigt dazu, lässig zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie es vorziehen.

### Zahlen und Ziffern

- **Kommas**: In Fließtext verwenden Sie Kommas nur in fünfstelligen und größeren Zahlen.
  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (Daten in Codeproben ausgenommen) verwenden Sie das Format "1. Januar 1900".
  - **Richtig**: 24. Februar 1906
  - **Falsch**: 24. Februar, 1906; 24/02/1906

  Alternativ können Sie das Format JJJJ/MM/TT verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990er". Verwenden Sie keinen Apostroph.
  - **Richtig**: 1920er
  - **Falsch**: 1920's

- **Plural von Ziffern**: Fügen Sie ein "s" hinzu. Verwenden Sie keinen Apostroph.
  - **Richtig**: 486er
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englischsprachige Pluralformen, nicht die von Latein- oder Griechenland beeinflussten Formen.

- **Richtig**: Syllabuses, Octopuses
- **Falsch**: Syllabi, Octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "kurvigen" Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns für eine Variante entscheiden müssen, um Konsistenz zu wahren. Wenn kurvige Anführungszeichen oder Apostrophe in Code-Snippets enthalten sind, sogar in Inline-Snippets, könnten Leser sie kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "kurvigen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine „kurvigen Anführungszeichen.“

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Komma-Verwendungsregeln bewusst sein müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie ein Komma nach einer einleitenden Klausel, um sie von der folgenden unabhängigen Klausel zu trennen.
  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Schreibstil-Leitfaden."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Schreibstil-Leitfaden."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie normalerweise eine numerische Tastatur für die Dateneingabe."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie normalerweise eine numerische Tastatur für die Dateneingabe."

- **Vor Konjunktionen**: Das serielle Komma (auch bekannt als "das Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Liste von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das serielle Komma. Kommas trennen auch jedes Element der Liste.
  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.
  - **Richtig**: "Mein Hund ist süß und schlau."
  - **Falsch**: "Mein Hund ist süß und schlau."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch zu lang oder komplex mit der Konjunktion wird, ziehen Sie in Betracht, ihn in zwei Sätze umzuschreiben.
  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber achten Sie auf die Dateieinstellung."
    - **Falsch**: "Sie können diesen Schritt ausführen, aber achten Sie auf die Dateieinstellung."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "which"**: Eine einschränkende Klausel ist entscheidend für die Bedeutung des Satzes und muss nicht durch Kommas vom restlichen Satz abgetrennt werden. Eine einschränkende Klausel wird normalerweise durch "dass" eingeführt und **sollte nicht** von einem Komma vorhergegangen werden.
  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht einschränkende Klausel liefert zusätzliche Informationen und ist für die Bedeutung des Satzes nicht entscheidend. Eine nicht einschränkende Klausel wird normalerweise durch "which" eingeführt und sollte von einem Komma vorhergegangen werden.
  - **Richtig**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jede Funktion darstellt."
  - **Falsch**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jede Funktion darstellt."

- **Vor "solcher als"**: Wenn "solcher als" Teil einer nicht einschränkenden Klausel ist und der verbleibende Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "solcher als".
  - **Richtig**: "Das Array-Objekt verfügt über Methoden zum Bearbeiten von Arrays auf verschiedene Weise, wie z. B. das Zusammenführen, Rückwärtsanordnen und Sortieren."
  - **Falsch**: "Das Array-Objekt verfügt über Methoden zum Bearbeiten von Arrays auf verschiedene Weise wie z. B. das Zusammenführen, Rückwärtsanordnen und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma bei "solcher als" zu verwenden ist. In diesem Fall ist die Klausel mit "solcher als" wesentlich für die Bedeutung des Satzes.
  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videobearbeitung hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen, wie Audio- und Videobearbeitung, hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe des Stammes ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanische Englisch-Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als alternative Schreibweise oder als hauptsächlich in einer nicht-amerikanischen Form von Englisch verwendet aufgeführt.
Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) nachschlagen (mit einem zusätzlichen _u_), finden Sie die Phrase "Hauptsächlich britisch" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternative Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird jede Woche ausgeführt und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich in [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und genehmigte Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungs-Konfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstatt auf "Tag". Außerdem sollte das Element in spitze Klammern "<>" gesetzt und mit Backticks (`` ` ``) formatiert werden. Zum Beispiel wird die Verwendung von \<input\> innerhalb von Backticks es als `<input>` formatieren, wie erwartet.
  - **Richtig**: das `<span>`-Element
  - **Falsch**: der Span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, die spitzen Klammern "<>" hinzufügt und einen Link zur Referenzseite hinzufügt.
  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" aus Konsistenzgründen wann immer es möglich ist.

- **Benutzeroberflächenaktionen**: In Aufgabenfolgen, beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement nach seinem Label und Typ.
  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Während der Aktiv bevorzugt wird, ist der Passiv auch akzeptabel, angesichts des informellen Feel unseres Inhalts.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile einer Seite gelten, wie Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkungen)](#querverweise_verlinkungen)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#verkürzte_urls_kurzlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Beispielstück sollte beinhalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das Szenario beschreibt, das durch das Codebeispiel demonstriert wird. Zum Beispiel, "Verwendung des Offset-Drucks" und "Zurückgehen zum Stil in vorheriger Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Besonderheiten des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel: "Im folgenden Beispiel werden zwei Kaskadenebenen im CSS definiert, `base` und `special`."
  - **Ergebniserklärung**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und erklärt, wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax der Funktion demonstrieren und wie sie verwendet wird, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler die Funktion verwenden möchte oder muss.
- Wenn Sie an einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile zu zerlegen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels mit demselben Typ (HTML, CSS und JavaScript) vor dem Ausführen des Beispiels zusammengeführt werden. Dies ermöglicht es, den Code in mehrere Segmente zu unterteilen, jedes mit optional eigenen Beschreibungen, Überschriften usw. Dies macht die Dokumentation des Codes unglaublich leistungsfähig und flexibel.

Um zu erfahren, wie Sie Codebeispiele für MDN Web Docs stilisieren oder formatieren können, lesen Sie unsere [Richtlinien zur Stilierung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkungen)

Wenn Sie auf eine andere Seite oder einen Abschnitt einer Seite auf MDN mit ihrem Titel verweisen, folgen Sie dem Satzstil im Linktext (passen Sie den Seiten- oder Abschnittstitel an). Verwenden Sie den Satzstil im Linktext, auch wenn er sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet (es könnte sein, dass die Großschreibung im Titel der Seite oder des Abschnitts falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN mit ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Beziehen Sie sich auf den [Leitfaden zur Bestellung von flexiblen Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Beziehen Sie sich auf den "[Leitfaden zur Bestellung von flexiblen Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)"."

Folgen Sie einem konsistenten Stil beim Verlinken von Abschnitten innerhalb einer Seite:

- **Richtig**: "Weitere Informationen finden Sie im Abschnitt [Verteilung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im _Speicherverwaltungs_-Leitfaden."

Wenn der Abschnitt, auf den Sie verlinken, sich auf derselben Seite befindet, können Sie die Position des Abschnitts mithilfe beschreibender Phrasen andeuten.

- **Richtig**: "Dieses Konzept wird ausführlicher im Abschnitt [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) in diesem Dokument beschrieben."
- **Falsch**: "Dieses Konzept wird ausführlicher im Abschnitt [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) unten beschrieben."

Auf MDN gibt es eine weitere Möglichkeit, auf eine Referenzseite zu verlinken, indem Sie ein Makro verwenden. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweis-Richtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind in bestimmten Situationen auf MDN Web Docs erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob das Hinzufügen eines externen Links auf MDN Web Docs in Ordnung ist. Pull Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diese Richtlinien nicht befolgen.

Wenn Sie erwägen, einen externen Link zu MDNs [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)-Inhalten hinzuzufügen, lesen Sie auch die [Lernen Sie Webentwicklung-Schreibrichtlinien > Partner-Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen müssen Sie, wenn Sie in Erwägung ziehen, einen externen Link hinzuzufügen, sicherstellen, dass es ein minimales Risiko der folgenden Dinge gibt:

- Gebrochene oder veraltete Links
- Erscheinung von Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu verwenden
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, ziehen Sie in Erwägung, Inhalte innerhalb von MDN Web Docs zu verknüpfen. Interne Links sind einfacher zu pflegen und machen die gesamte MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten bevorzugt Links zu externen Inhalten hinzufügen, die:
  - Einzigartig oder unerlässlich sind (z.B. ein IETF RFC)
  - Für die Zuordnung, Zitation oder Anerkennung notwendig sind (z.B. als Teil einer Creative Commons Attribution)
  - Wahrscheinlicher gepflegt werden als der Inhalt auf MDN Web Docs selbst (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder Community-gesteuert wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Wartbarkeit, Zugänglichkeit oder setzen Leser anderweitig Barrieren. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:
  - Generisch oder unspezifisch sind (z.B. die Homepage eines Anbieters, anstelle der zugehörigen Dokumentation)
  - Vergänglich oder nicht gepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd sind (z.B. die eigenen Arbeiten des Autors abseits von MDN Web Docs)
  - Hinter einer Bezahlschranke liegen (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser aus Ländern mit niedrigem Einkommen nicht erschwinglich ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository einen Wert hat, kann das Verlinken auf Ihre eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie zweimal, bevor Sie auf Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull Request offenlegen. Das Versäumnis, dies zu tun, kann Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie zum Beispiel der Herausgeber einer Spezifikation sind und zur Dokumentation beitragen, die mit dieser Spezifikation in Zusammenhang steht, dann wird das Verlinken auf diese Spezifikation erwartet und akzeptiert. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleinere, einfacher zu merkende URLs (auch bekannt als "Kurzlinks") zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Zusätzlich, mit bestimmten URL-Shortenern kann das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für bösartige Zwecke genutzt werden könnte.

Verwenden Sie keine über Drittanbieter (benutzergenerierbare) URL-Shortener erstellten Links. Zum Beispiel, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com` URL.

<!-- markdownlint-disable search-replace -->

Andererseits sind First-Party-Shortener, die von den Organisationen betrieben werden, die auch die Ziel-URLs verwalten, zu bevorzugen. `https://bugzil.la` ist im Besitz und wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` weiterleitet, das ebenfalls eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt startet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in absteigender Reihenfolge ohne Ebenen zu überspringen: `##`, dann `###` und dann `####`; diese werden in die [HTML-Überschriftstags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` und `<h4>` Tags übersetzt.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist.
Wir empfehlen nicht mehr als drei Überschrifts-Ebenen. Wenn Sie das Bedürfnis haben, eine Überschrift der vierten Ebene hinzuzufügen, ziehen Sie in Erwägung, den Artikel in mehrere kleinere Artikel mit einer Landeseite aufzuteilen. Alternativ betrachten Sie die Präsentation der Informationen als Aufzählungspunkte, um die Verwendung einer Überschrift der vierten Ebene zu vermeiden.

Beachten Sie die folgenden Dos und Don'ts beim Erstellen von Überschriften für Unterabschnitte:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Gliedern Sie ein Thema nicht in ein einziges Unterthema.
  Es müssen entweder zwei oder mehr Unterüberschriften sein oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z.B. "Verwenden der `FooBar`-Schnittstelle").
- **Erstellen Sie keine "störenden Überschriften".** Diese sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne Textinhalt dazwischen.
  Das sieht nicht gut aus und lässt Leser ohne erklärenden Text zu Beginn des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz die Nutzung erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr großzügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz – [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) – kompatibel ist.
- Für Bilder, führen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und achten Sie darauf, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten konsistent über alle Seiten hinweg formatiert und strukturiert werden.
Einzelne Listenelemente sollten mit geeigneter Zeichensetzung geschrieben werden, unabhängig vom Listenformat.
Je nachdem, welche Art von Liste Sie erstellen, sollten Sie jedoch Ihr Schreiben entsprechend anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen fügen Sie einen Einleitungssatz hinzu, der die Informationen in der Liste beschreibt.

- **Aufgezählte Listen**: Aufgezählte Listen sollten verwendet werden, um verwandte kurze Informationen zu gruppieren. Jedes Element in der Liste sollte eine ähnliche Satzstruktur haben. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder ein Subjekt oder beides fehlen) in aufgezählten Listen sollten standardmäßige Zeichensetzung enthalten – Sätze enden mit Punkten, Phrasen nicht.

  Wenn es in einem Listenelement mehrere Sätze gibt, muss ein Punkt am Ende jedes Satzes erscheinen, einschließlich des letzten Satzes des Elements, so wie es von einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte aufgezählte Liste:

  > In diesem Beispiel sollten wir enthalten:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine weitere Bedingung, mit weiterer Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel erklärt jeder Punkt eine Bedingung gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - EigenschaftA: Legt die Hintergrundfarbe fest
  > - EigenschaftB: Fügt Text Schatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, selbst wenn ein Listenelement drei oder weniger Wörter enthält. Versuchen Sie jedoch, soweit möglich, dieselbe Struktur für alle Elemente in einer Liste zu befolgen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen zu nummerieren. Weil Anweisungen komplex sein können, hat Klarheit Vorrang, insbesondere wenn der Text in jedem Listenelement umfangreich ist. Wie bei aufgezählten Listen sollten die standardmäßigen Zeichensetzungsregeln befolgt werden. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine korrekt strukturierte nummerierte Liste zu erstellen, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen vorzustellen. Es ist wichtig, dem Benutzer Kontext zu bieten, bevor Sie mit den Anweisungen beginnen.
  > 2. Beginnen Sie mit Ihrem Anweisungstext und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anweisungen können sehr umfangreich sein, deshalb ist es wichtig, klar zu schreiben und korrekte Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende Beispiel zeigt, wie eine abschließende Erklärung für die vorherige Liste geschrieben wird:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungsschritte bietet, um eine nummerierte Liste mit der richtigen Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze aufgebaut sind. Da nummerierte Listen routinemäßig für instruktive Zwecke verwendet werden oder um jemand durch ein ordentliches Verfahren zu führen, achten Sie darauf, jedes Element fokussiert zu halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten am Ende des Artikels einen _Siehe auch_ Abschnitt. Dieser Abschnitt enthält [Querverweise](#querverweise_verlinkungen) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [„Siehe auch“-Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die Seite `@layer`.

Präsentieren Sie die Links in einem See-also-Abschnitt im Allgemeinen in einem [Aufzählungslisten](#listen)-Format, wobei jedes Element in der Liste ein Satz ist. Im [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)-Abschnitt auf MDN folgt der Siehe-auch-Abschnitt jedoch dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists)-Format.

Um die Konsistenz auf MDN Web Docs zu wahren, beachten Sie die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines „Siehe auch“-Abschnitts.

#### Linktext

- Der Linktext sollte mit dem Titel der Seite oder des Abschnitts, auf den verlinkt wird, übereinstimmen. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)-Seite mit dem Titel "ARIA-Zustände und -Eigenschaften" folgendermaßen aussehen:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie den Satzstil im Linktext, selbst wenn er sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet. Es könnte sein, dass die Großschreibung im Titel der Seite oder des Abschnitts falsch ist. Zum Beispiel wird der Linktext zur Seite [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) im korrekten Satzstil folgendermaßen aussehen:
  - **Richtig**: [Quirks Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch für externe Links verwenden Sie den Satzstil, selbst wenn die Großschreibung auf der Zielseite des Artikels anders ist. Dies dient dazu, die Konsistenz auf MDN Web Docs zu gewährleisten. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional auch ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Verlinken von Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der Seite _Häufig verwendete Makros_ erklärt wird. Die Verwendung des Makros wird die Codierung zum Keyword im Linktext hinzufügen, wie das folgende Beispiel zeigt.
- Kein Artikel ("Ein", "Eine", "Das") ist am Anfang des Listelements im Linktext erforderlich. Keine Zeichensetzung ist am Ende des Listelements erforderlich, da es sich immer um einen Begriff oder Satz handelt.
  - **Richtig**: {{cssxref("revert-layer")}}
  - **Falsch**: Das {{cssxref("revert-layer")}}-Keyword.
  - **Richtig**: [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, verwenden Sie Codierungsformatierung mithilfe von Backticks (`` ` ``) zu Keywords im Linktext, selbst wenn die Formatierung nicht in Seiten- und Abschnittstiteln verwendet wird. Zum Beispiel wird für den Seitentitel "Array() Konstruktor" der Linktext folgendermaßen aussehen: [`Array()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link minimal. In Fällen von einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Satz ohne Schlusspunkt. Halten Sie alle verlinkten Texte am Anfang, um das Scannen der Liste der Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Kontrollkästchen
- Verwenden Sie keine Konjunktion "und" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Weitere farbbezogene Eigenschaften
- Für externe Links streben Sie an, die Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) anzugeben, wann immer es möglich und angemessen ist. Die Angabe dieser Informationen gibt den Lesern eine klare Vorstellung davon, wohin sie gelangen werden, wenn sie auf den Link klicken. Das Datum der Veröffentlichung oder der letzten Aktualisierung hilft den Lesern auch, die Relevanz des verlinkten Artikels zu beurteilen, und es hilft den MDN-Wartenden, Links zu Artikeln zu überprüfen, die lange nicht aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listelement ist ein Beispiel für das Hinzufügen eines Links zum externen Artikel [Top-level await](https://v8.dev/features/top-level-await) im Siehe-auch-Abschnitt, zusammen mit der Quellen- und Jahresinformation:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autorennamen angeben. Einige Beispiele sind im Abschnitt [Weiterführende Literatur](#sprache_grammatik_und_rechtschreibung) aufgeführt. Vermeiden Sie es, Autorennamen für Blogbeiträge oder GitHub-Repositories hinzuzufügen, auf die Sie verlinken könnten.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu den zugehörigen Leitfaden- und Tutorialseiten. Diese vorgeschlagene Reihenfolge dient in erster Linie der besseren Scanbarkeit der Listenpunkte.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen Ordnung oder der einfachen-bis-fortgeschrittenen Ordnung, je nachdem, was sich für den Kontext am besten eignet.

### Unterseiten

Wenn Sie Artikel zu einem Thema oder Fachgebiet hinzufügen müssen, tun Sie dies in der Regel, indem Sie eine Landeseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Landeseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können das Einfügen von Seiten in die Liste mit einigen Makros, die wir erstellt haben, automatisieren.

Zum Beispiel, betrachten Sie den [JavaScript](/de/docs/Web/JavaScript)-Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltverzeichnis
- [JavaScript/Guide/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an der Spitze der Hierarchie zu platzieren, da dies die Website verlangsamt und die Suche und Navigation weniger effizient macht.

### Slugs

Der Seitentitel, der am Anfang der Seite angezeigt wird, kann sich vom Seiten-"Slug" unterscheiden, welcher der URL-Teil der Seite nach `<locale>/docs/` ist. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Ebene der Hierarchie erstellen, sollte die Komponente der neuen Ebene im Slug nur ein oder zwei Wörter haben.
- Slugs sollten einen Unterstrich für eine mehrwortige Komponente verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Befolgen Sie den Satzstil auch in Slugs für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch verwendet, um die Seitenhierarchie in der Breadcrumb-Liste am Anfang der Seite zu strukturieren. Ein Seitentitel kann sich vom Seiten-"Slug" unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften den Satzstil verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle von Schlagzeilenstil:
  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode Zur Erstellung Von JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilregel erstellt wurden. Fühlen Sie sich frei, sie zu aktualisieren, wenn Sie möchten. Wir arbeiten Schritt für Schritt daran.

- **Allgemeine Richtlinien**: Entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren möchten, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis kann Ihnen helfen, zu entscheiden, wie Sie Informationen ordnen möchten. Decken Sie einfache Konzepte zuerst ab und gehen Sie dann zu komplizierteren und fortgeschrittenen Konzepten über. Behandeln Sie konzeptionelle Informationen zuerst und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und für Abschnitte oder Unterabschnitte:
  - **Von allgemeinen zu spezifischen gehen**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) erklärt, von höheren `##` zu niedrigeren `####` Überschriften gehen, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriftenebenen für umfassendere einführende Titel und spezifischere Titel, wenn Sie zu niedrigeren Überschriftenebenen voranschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Das Benennen von Titeln der verschiedenen Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind im Text und im Inhaltsverzeichnis leichter zu scannen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt zur Einführung in HTML-Elemente, verwenden Sie den Titel "HTML-Elemente" anstatt "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein einziges Ziel zu vermitteln – eine einzelne Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Dazu, soweit möglich, versuchen Sie nicht, die Konjunktion "und" in einem Titel zu verwenden.
  - **Verwenden Sie eine parallele Konstruktion**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftenebene. Zum Beispiel, wenn ein `###`-Titel endende gerundialen Verben, hat zum Beispiel "Installieren", versuchen Sie alle Titel auf dieser Überschriftenebene mit gerundialen Verben zu schreiben. Wenn ein Titel mit einem befehlenden Verb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf dieser Überschriftenebene, die mit einem befehlenden Verb beginnen.
  - **Vermeiden Sie denselben Begriff in einer niedrigeren Überschrift**: Wiederholen Sie nicht den Text im Titel einer höheren Überschrift in niedrigeren Titeln. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", nennen Sie den Titel eines Unterabschnitts "Nach einleitenden Klauseln" anstelle von "Kommas nach einleitenden Klauseln".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie das Beginnen von Titeln mit den Artikeln "ein", "eine" oder "das".
  - **Fügen Sie Einführungsinformationen hinzu**: Nach einem Titel fügen Sie etwas einleitenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Weitere Stil-Leitfäden

Wenn Sie Fragen zur Verwendung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Seite für die Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich fundiert, aber benutzerfreundliche, evidenzbasierte Beratung; sehr gut für Nicht-Muttersprachler, insbesondere für die Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
