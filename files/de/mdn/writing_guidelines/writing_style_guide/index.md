---
title: Schreibstil-Leitfaden
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

Dieses Schreibstil-Handbuch beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen dazu, Sprach- und Stil-Konsistenz auf der gesamten Website sicherzustellen. Dennoch sind wir mehr an den Inhalten interessiert als an der Formatierung, also fühlen Sie sich nicht verpflichtet, das gesamte Schreibstil-Handbuch zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht enttäuscht oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später im Einklang mit diesem Leitfaden bearbeitet. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine Content-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für englischsprachige Dokumentationen. Andere Sprachen können (und sollten) ihre eigenen Stilrichtlinien erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Dieser Leitfaden sollte jedoch weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach einer Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Relevante Beispiele einfügen](#relevante_beispiele_einfügen)
- [Eine beschreibende Einführung liefern](#eine_beschreibende_einführung_liefern)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Hinterkopf. Eine Seite über fortgeschrittene Netzwerktechniken muss beispielsweise nicht so detailliert auf grundlegende Netzwerk-Konzepte eingehen wie die typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind, klar, prägnant und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie generell die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, die Sie vor der ersten Nutzung dem Zielpublikum erläutern.
- **Prägnant**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel Sie sagen sollten. Wenn Sie zu viele Details liefern, wird die Seite mühsam zu lesen und wird selten verwendet.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Wortlaut konsequent auf der gesamten Seite und auf mehreren Seiten verwenden.

### Relevante Beispiele einfügen

Fügen Sie im Allgemeinen Beispiele oder realistische Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird und um Randfälle zu erläutern, die möglicherweise existieren.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Probleme zu demonstrieren, die auftreten können.

### Eine beschreibende Einführung liefern

Stellen Sie sicher, dass der einleitende Absatz bzw. die einleitenden Absätze vor der ersten Überschrift die Informationen angemessen zusammenfassen, die die Seite abdecken wird, und vielleicht, was die Leser nach Durcharbeitung des Inhalts erreichen können. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz bzw. die einleitenden Absätze den Leser über die behandelten Themen sowie das erforderliche Vorwissen informieren, das der Leser haben sollte, sofern vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den verwandten Informationen und Hinweise auf Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen weg, wie was es genau bedeutet, Text zu "stroke", wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet einen String.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, ist jetzt jedoch viel zu lang.
  Zu viele Details sind enthalten, und der Text geht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die geeigneten Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn die Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** aufgerufen wird, überstreicht sie die Zeichen im angegebenen String, beginnend an den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe.
  > Im Terminologie der Computergrafik bedeutet "stroking" von Text, die Umrisse der Glyphen im String zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schrift der Umgebung gezeichnet, wie sie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft der Umgebung angegeben ist.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften der Umgebung `textAlign`, `textBaseline` und `direction` bestimmt.
  > `textAlign` steuert die Platzierung des Strings relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird der String so gezeichnet, dass er bei `x - (stringWidth / 2)` beginnt, wobei die angegebene X-Koordinate in der Mitte des Strings liegt.
  > Wenn der Wert `"left"` ist, beginnt der String mit dem angeführten Wert von `x`.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für den String in Pixel angeben können.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um beim Zeichnen in einen so breiten Raum zu passen.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen eines Strings gefüllt mit Farbe anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine passende Einführung**: Der folgende Abschnitt gibt einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), überstreicht (zeichnet die Umrisse) der Zeichen eines angegebenen Strings, verankert an der Position, die durch die gegebenen X- und Y-Koordinaten angegeben ist.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) der Umgebung gezeichnet und wird gemäß den [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)-Eigenschaften gerechtfertigt und ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite zur Grafikdarstellung sowie unseren Hauptartikel zu diesem Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein breites und vielfältiges Publikum.
Wir empfehlen dringend, den Text so inklusiv wie möglich zu gestalten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in Dokumentationen:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstatt **dummy** zu verwenden, nutzen Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in Dokumentationen nicht benötigen. Wenn jedoch der Fall eintritt, sollten Sie stattdessen **fantastic** verwenden.

Es ist am besten, geschlechtsneutrale Sprache bei jeglichen Schriften zu verwenden, wo das Geschlecht für das Thema irrelevant ist.
Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"seiner" völlig in Ordnung. Wenn jedoch eine Person jeden Geschlechts gemeint ist, ist "er"/"seiner" nicht geeignet.

Lassen Sie uns die folgenden Beispiele betrachten:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Verwendung seiner Webcam gestatten möchte."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Verwendung ihrer Webcam gestatten möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie wie folgt geschlechtsneutrale Pronomen:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite die Verwendung ihrer Webcam gestatten möchte."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des dritten Plurals, allgemein bekannt als "[singular 'they'](https://de.wikipedia.org/wiki/Singular_they)". Zu den geschlechtsneutralen Pronomen gehören "they", "them", "their" und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzer zu pluralisieren:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Verwendung ihrer Webcams gestatten möchten."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der um Erlaubnis der Benutzer zur Webcam-Nutzung bittet, erscheint."
- **Richtig**: "Ein Bestätigungsdialog erscheint, der die Benutzer um Erlaubnis zur Webcam-Nutzung bittet."

Dieses letzte Beispiel für den Umgang mit dem Problem ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, es beseitigt auch einige der Komplexität im Umgang mit Geschlechtern in verschiedenen Sprachen, die möglicherweise sehr unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung für Leser und Übersetzer erleichtern.

### Zugängliche Sprache verwenden

Vermeiden Sie es, räumliche und richtungsbezogene Wörter wie "oben", "unten", "links", "rechts" oder "hier" zu verwenden. Diese Begriffe setzen ein spezifisches visuelles Layout voraus, das möglicherweise nicht für alle Benutzer zutrifft. Sie können auch unklar oder irreführend sein – insbesondere für Benutzer, die auf Screenreader angewiesen sind, oder für diejenigen, die übersetzte Inhalte lesen, bei denen richtungsbezogene Sprache mehrdeutig oder schwer genau zu übersetzen sein kann. In responsiven Layouts, bei denen sich die Position von Inhalten je nach Bildschirmgröße ändern kann, können solche Richtungsangaben ungenau werden. Diese Art von Sprache kann die Zugänglichkeit behindern und es für alle Benutzer schwieriger machen, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Sätze, die den Abschnitt, das Konzept oder das Element, auf das Bezug genommen wird, klar identifizieren. Verwenden Sie Abschnittsüberschriften oder Titel und verweisen Sie auf Beispiele oder Code-Snippets, indem Sie beschreiben, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Verweisen Sie auf den [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility)-Abschnitt weiter unten auf dieser Seite."
- **Falsch**: "Verweisen Sie auf den Zugänglichkeit-Abschnitt unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mit CSS-Übergängen."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mit CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorherigen Abschnitt mit dem Titel Erstellen einer Medienabfrage erklärt."
- **Falsch**: "Dieses Konzept wird im Abschnitt oben erklärt."

Vermeiden Sie es auch, vage Linktexte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel" zu verwenden. Beschreibende Linktexte bieten einen besseren Kontext für alle Leser und verbessern die Erfahrung für Benutzer von Hilfstechnologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Items anordnet](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Durch die Einhaltung dieser Richtlinien helfen Sie, die Dokumentation von MDN zugänglich, klar und benutzerfreundlich zu machen, unabhängig davon, wie Benutzer auf die Seite zugreifen.

### Schreiben Sie mit SEO im Hinterkopf

Während das primäre Ziel jedes Schreibens auf den MDN Web Docs immer sein sollte, über offene Webtechnologie zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie möchten, oder die kleinen Details finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material finden können, das wir schreiben. Dies können wir erreichen, indem wir bei der Erstellung von Inhalten die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Auge behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indizieren können, damit Leser leicht finden, was sie brauchen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, verhältnismäßig gut gestaltet, geschrieben und gekennzeichnet ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indizieren.

Die folgende Checkliste ist während des Schreibens und Überprüfens von Inhalten gut im Kopf zu behalten, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen korrekt indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten über das gleiche Thema sind, auch wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Worten und derselben Beispielverwendung. Dies macht es für Suchmaschinen schwer zu wissen, welche welche ist, und sie teilen sich oft das Page-Ranking, was dazu führt, dass beide schwerer zu finden sind als sie sein sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen:
  - **Erklären Sie mehr einzigartige Konzepte**: Betrachten Sie Anwendungsfälle, bei denen es mehr Unterschiede geben könnte, als man auf den ersten Blick denkt. Im Fall der Dokumentation von `width` und `height`-Eigenschaften, könnten Sie über die Wege schreiben, in denen horizontaler Raum und vertikaler Raum unterschiedlich genutzt werden, und eine Diskussion über die entsprechenden Konzepte bieten. Vielleicht können Sie die Nutzung von `width` im Hinblick auf Platz für eine Seitenleiste erwähnen, während `height` für vertikales Scrollen oder Fußzeilen verwendet wird. Auch das Hinzufügen von Informationen zu Barrierefreiheit ist eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Textkörper, da die Beispiele möglicherweise beide (oder alle) von den ähnlichen Methoden oder Eigenschaften zu Beginn verwenden, was keine wirklichen Änderungen erfordert, wenn sie wiederverwendet werden. Werfen Sie also das Beispiel weg und schreiben Sie ein neues, oder stellen Sie zumindest mehrere Beispiele zur Verfügung, mit denen einige von ihnen unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch die Erklärung, wie es funktioniert, sollten enthalten sein, in einem angemessenen Detaillierungsgrad je nach Komplexität des Themas und der Zielgruppe.

  Der einfachste Weg, um zu vermeiden, sich zu sehr zu ähneln, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit dies erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in der SEO-Sprache als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt nicht) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie sollten die Seiten auf den MDN Web Docs nicht kürzer als etwa 300 Wörter sein. Blähen Sie eine Seite nicht künstlich auf, behandeln Sie diese Richtlinie eher als eine Mindestziel-Länge, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen dabei helfen, Seiten zu erstellen, die genügend Inhalt haben, um durchsuchbar zu sein, ohne sie mit unnötigem Text zu überfrachten:
  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub oder kein vollständiger Inhalt ist, ergänzen Sie ihn. Wir versuchen, auf den MDN Web Docs offene "Stub"-Seiten zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, die große Teile ihres Inhalts vermissen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) richtig strukturiert ist. Überprüfen Sie, dass alle Abschnitte vorhanden sind und geeigneten Inhalt haben.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden – dies ist ein besonders häufiger Punkt, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung zu liefern, aber stellen Sie sicher, dass alle Feinheiten abgedeckt sind. Gibt es Sonderfälle? Gibt es bekannte Einschränkungen, die der Leser wissen sollte?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele für alle Parameter oder zumindest für die Parameter (oder Eigenschaften, oder Attribute) vorhanden sein, die Benutzer im Anfänger-bis-Fortgeschrittenen-Bereich wahrscheinlich verwenden, sowie für alle fortgeschrittenen, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einem Überblick darüber, was das Beispiel tun wird, welche zusätzlichen Kenntnisse erforderlich sind, um es zu verstehen und so weiter, vorangestellt werden. Nach dem Beispiel (oder verflechtet mit Teilen des Beispiels) sollte Text folgen, der erklärt, wie der Code funktioniert. Sparen Sie nicht an den Details oder der Fehlerbehandlung in Beispielen. Denken Sie daran, dass Benutzer _werden_ Ihr Beispiel kopieren und einfügen, um es in ihren eigenen Projekten zu verwenden, und Ihr Code _wird_ auf Produktionsseiten verwendet werden! Weitere nützliche Informationen finden Sie in unseren [Leitfäden zu Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).
  - **Erklären Sie Anwendungsfälle**: Wenn es spezielle allgemeine Anwendungsfälle für das Merkmal gibt, das beschrieben wird, sprechen Sie darüber! Statt zu erwarten, dass ein Benutzer herausfindet, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie geeigneten [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text zu allen Bildern und Diagrammen hinzu. Dieser Text, ebenso wie Bildunterschriften auf Tabellen und anderen Figuren, zählt, weil Suchmaschinen "Spinnen" keine Bilder indexieren können, und der `alt`-Text sagt Suchmaschinen, welchen Inhalt das eingebettete Medium enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit dem Merkmal zusammenhängen, hinzuzufügen, um die Suchmaschinenrankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und neigt dazu, bestraft zu werden.
    > Ebenso sollten Sie **keine** sich wiederholenden, unhilfreichen Materialien oder Blocke von Schlüsselwörtern in den tatsächlichen Seiten verwenden, um die Größe und das Suchranking der Seite zu verbessern. Das tut mehr Schaden als Nutzen, sowohl für die Lesbarkeit der Inhalte als auch für unsere Suchergebnisse.

- **Konzentrieren Sie sich auf Inhalts-Themen**: Es ist viel besser, Inhalte um das Thema der Seite herum zu schreiben als um ein konkretes Stichwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein gegebenes Thema einfügen könnten; in der Tat erstellen viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (abwechselnd zwischen kurzen, mittleren und langen Schlüsselwörtern), die sie in ihren Artikel einfügen, je nach Länge. Dies wird Ihre Wortwahl diversifizieren, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen davon, dass grammatikalisch korrekte Sätze in Englisch geschrieben werden, empfehlen wir, diese Richtlinien zu befolgen, um den Inhalt über die MDN Web Docs hinweg konsistent zu halten.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das unter Verwendung des ersten Buchstabens jedes Wortes aus einem Satz erstellt wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Beim ersten Erwähnen eines Begriffs auf einer Seite, dehnen Sie Akronyme aus, die den Benutzern wahrscheinlich nicht vertraut sind. Im Zweifelsfall erweitern Sie den Begriff. Noch besser ist es, ihn mit dem Artikel oder [Glossar](/de/docs/Glossary)-Eintrag zu verlinken, der die Technologie beschreibt.
  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Vollgroßbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in klammerhaften Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einer anderen geeigneten Interpunktionszeichen.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Web-Browser (z.B. Firefox) können verwendet werden ...
  - **Falsch**: Web-Browser z.B. Firefox können verwendet werden ...
  - **Falsch**: Web-Browser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Web-Browser, (z.B.: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  In normalem Text (d.h. Text außerhalb von Notizen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.
  - **Richtig**: ... Webbrowser und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente der lateinischen Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abk.   | Latein           | Englisch                      |
  | ------ | ---------------- | ----------------------------- |
  | cf.    | _confer_         | vergleichen                   |
  | e.g.   | _exempli gratia_ | zum Beispiel                  |
  | et al. | _et alii_        | und andere                    |
  | etc.   | _et cetera_      | und so weiter, usw.           |
  | i.e.   | _id est_         | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_      | man beachte                   |
  | P.S.   | _post scriptum_  | Nachschrift                   |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich von Vorteil ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder verwirrt oder die Bedeutungen nicht verstehen werden.
  >
  > Achten Sie auch darauf, dass _Sie_ sie richtig verwenden, wenn Sie sich dazu entscheiden. Zum Beispiel achten Sie darauf, nicht "e.g." mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für den Plural von Abkürzungen und Akronymen fügen Sie ein _s_ hinzu. Verwenden Sie keinen Apostroph. Niemals. Bitte.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Abkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text, verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: dies vs. jenes
  - **Falsch**: dies v. jenes
  - **Richtig**: dies versus jenes

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Modifikator) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, daher finden Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN.
> Fühlen Sie sich frei, diese zu ändern, wenn Sie andere Änderungen vornehmen, aber einen Artikel nur zu ändern, um die Großschreibung zu verändern, ist nicht notwendig.

Tastaturtasten sollten Satzstil-Kapitalisierung verwenden, nicht Großbuchstaben-Kapitalisierung.
Zum Beispiel: "<kbd>Eingabetaste</kbd>" nicht "<kbd>EINGABETASTE</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" zur Abkürzung der "<kbd>Escape</kbd>"-Taste verwenden können.

Bestimmte Wörter sollten immer großgeschrieben werden, wie Marken, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird innerhalb des Codes verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://de.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation, sie sollte immer wie markenrechtlich geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

Einige Werkzeuge und Projekte haben ihre eigenen markenspezifischen Großschreibungsregeln. Diese könnten Namen erfordern, die komplett klein geschrieben sind ("npm" oder "webpack"), komplett groß geschrieben ("UNIX", "GNOME", "VIM") oder gemischt geschrieben ("TypeScript", "macOS" oder "jQuery").

Die markenspezifische Großschreibung von der offiziellen Website oder Dokumentation sollte immer verwendet werden, sogar am Anfang eines Satzes. Wenn Sie sich unwohl dabei fühlen, einen Satz mit einem Kleinbuchstaben zu beginnen, empfehlen wir, den Satz so umzuformulieren, dass das Problem vermieden wird. Zum Beispiel könnten Sie sagen "Sie können den npm-Paketmanager verwenden, um..." anstelle von "npm erlaubt Ihnen..."

### Kontraktionen

Unser Schreibstil neigt dazu, lässig zu sein, also können Sie Kontraktionen verwenden (z.B., "don't", "can't", "shouldn't"), wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: In Fließtexten verwenden Sie Kommas nur in fünfstelligen und größeren Zahlen.
  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (außer in Codesnippets) verwenden Sie das Format "January 1, 1900".
  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.
  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plural von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht die lateinisch oder griechisch beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „gekrümmten“ Anführungszeichen und Apostrophe. Auf den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir eines von beiden für Konsistenz wählen müssen. Krümmte Anführungszeichen oder Apostrophe, die sich in Codesnippets, auch in eingebetteten, wiederfinden, können von Lesern kopiert und eingefügt werden, in der Erwartung, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "gekrümmten Anführungszeichen".
- **Falsch**: Bitte verwenden Sie kein "gekrümmtes Anfü̈hrungszeichen".

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Komma-Nutzung bewusst sein müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die normalerweise am Anfang eines Satzes zu finden ist. Verwenden Sie nach einer einleitenden Klausel ein Komma, um sie von der nachfolgenden unabhängigen Klausel zu trennen.
  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel lernen Sie wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sehen Sie in unserem Schreibstil-Leitfaden nach."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen sehen Sie in unserem Schreibstil-Leitfaden nach."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie oft eine numerische Tastatur zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie oft eine numerische Tastatur zum Eingeben von Daten."

- **Vor Konjunktionen**: Das Serielle Komma (auch "Oxford Comma" genannt) ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das serielle Komma. Kommas trennen auch jedes Element der Liste.
  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "and" und "or" in einer Liste mit zwei Elementen.
  - **Richtig**: "Mein Hund ist niedlich und klug."
  - **Falsch**: "Mein Hund ist niedlich und klug."

  Verwenden Sie Kommas vor den Konjunktionen "and", "but" und "or", wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, überlegen Sie, ihn in zwei Sätze umzuschreiben.
  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng aber liebevoll."

- **Vor "dass" und "was"**: Eine restriktive Klausel ist entscheidend für die Bedeutung des Satzes und benötigt keine Kommas, um von dem verbliebenen Satz abgesondert zu werden. Eine restriktive Klausel wird normalerweise von "dass" eingeführt und **sollte nicht** durch ein Komma vorangestellt werden.
  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle notwendigen Informationen enthält, die Sie für das Erreichen Ihres Ziels benötigen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle notwendigen Informationen enthält, die Sie für das Erreichen Ihres Ziels benötigen."

  Eine nicht restriktive Klausel bietet zusätzliche Informationen und ist nicht essenziell für die Bedeutung des Satzes. Eine nicht restriktive Klausel wird normalerweise durch "which" eingeführt und sollte durch ein Komma vorangestellt werden.
  - **Richtig**: "Sie schreiben eine Richtlinie, die eine zugelassene Liste von Ursprüngen für jedes Merkmal ist."
  - **Falsch**: "Sie schreiben eine Richtlinie die eine zugelassene Liste von Ursprüngen für jedes Merkmal ist."

- **Vor "wie"**: Wenn "wie" Teil einer nicht restriktiven Klausel ist, und der übrige Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "wie".
  - **Richtig**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Arten, wie das Verbinden, Umkehren und Sortieren von ihnen."
  - **Falsch**: "Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Arten wie das Verbinden, Umkehren und Sortieren von ihnen."

  Das folgende Beispiel zeigt, wann kein Komma mit "wie" verwendet werden sollte. In diesem Fall ist die Klausel mit "wie" essenziell für die Bedeutung des Satzes.
  - **Richtig**: "Webanwendungen werden leistungsstärker, indem sie Features wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten mit WebSockets ermöglichen."
  - **Falsch**: "Webanwendungen werden leistungsstärker, indem sie Features, wie Audio- und Videomanipulation hinzufügen, und den Zugriff auf Rohdaten mit WebSockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrich versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe Buchstabe wie der erste Buchstabe der Wurzel.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als Variante oder hauptsächlich in einer nicht-amerikanischen Form von Englisch aufgeführt. Wenn Sie zum Beispiel [„behaviour“](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_, das der amerikanischen Standardform hinzugefügt wurde) nachschlagen, finden Sie den Ausdruck "Chiefly British" gefolgt von einem Link zu der amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior). Verwenden Sie keine Varianten der Rechtschreibung.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und erstellt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich in [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden, die zugelassene Wörter enthalten, die nicht in den Standardwörterbüchern vorhanden sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Nutzung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um auf HTML- und XML-Elemente zu verweisen, anstatt "Tag". Zusätzlich sollte das Element in spitzen Klammern "<>" eingeschlossen sein und mithilfe von Backticks (`` ` ``) stilisiert werden. Zum Beispiel führt die Nutzung von \<input\> innerhalb von Backticks dazu, dass es als `<input>` dargestellt wird, wie es erwartet wird.
  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, welches das Element stilisiert, die spitzen Klammern "<>" hinzufügt sowie einen Link zu dessen Referenzseite.
  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf den MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" aus Gründen der Konsistenz wann immer möglich.

- **Benutzeroberflächenaktionen**: In Aufgabensequenzen beschreiben Sie Benutzeroberflächenaktionen mit dem Imperativ. Identifizieren Sie das Benutzerschnittstellenelement anhand seines Labels und Typs.
  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Während die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts des informellen Tons unserer Inhalte.
Versuchen Sie jedoch konsequent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien für verschiedene Teile jeder Seite auf, wie Überschriften, Anmerkungen, Links und Beispiele.

- [Codex-Beispiele](#codex-beispiele)
- [Verweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt Weitere Infos](#abschnitt_weitere_infos)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codex-Beispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Codex-Beispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codex-Beispiels für die MDN Web Docs:

- Jedes Beispielcode-Stück sollte beinhalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift zur Beschreibung des durch das Codex-Beispiel demonstrierten Szenarios. Zum Beispiel, "Using offset printing" und "Reverting to style in previous layer".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Besonderheiten des Beispieles angibt, die Sie der Leser aufmerksam machen möchten. Zum Beispiel, "Im folgenden Beispiel sind in der CSS zwei Kaskadenschichten definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Beispiel nicht nur die Syntax des Merkmals und seine Verwendung zeigen, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Merkmal verwenden möchte oder muss.
- Wenn Sie mit einem großen Codex-Beispiel arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu unterteilen, damit sie individuell beschrieben werden können.
- Beim Hinzufügen von [Live-Demos](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels desselben Typs (HTML, CSS und JavaScript) vor dem Ausführen des Beispiels zusammengefügt werden. Dadurch können Sie den Code in mehrere Segmente aufteilen, die jeweils optional eigene Beschreibungen, Überschriften usw. enthalten können. Dies macht das Dokumentieren von Code unglaublich mächtig und flexibel.

Um mehr darüber zu erfahren, wie Sie Codex-Beispiele für die MDN Web Docs stilisieren oder formatieren können, siehe unsere [Leitlinien zur Stilistika von Codex-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Verweise (Verlinkung)

Beim Verweisen auf eine andere Seite oder den Abschnitt einer Seite auf MDN anhand ihres Titels, befolgen Sie die Satzgroßschreibung im Linktext (entsprechen Sie dem Seitentitel oder Abschnittstitel). Verwenden Sie die Satzgroßschreibung im Linktext, auch wenn er anders ist als der Titel der verlinkten Seite oder Abschnitt. Verwenden Sie keine Anführungszeichen um den Linktext. Um sich auf eine MDN-Seite durch ihren Titel zu beziehen, verwenden Sie den folgenden Stil:

- **Richtig**: "Verweisen Sie auf den [Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) Leitfaden."
- **Falsch**: "Verweisen Sie auf den "[Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" Leitfaden."

Verfolgen Sie einen konsistenten Stil, wenn Sie auf Abschnitte innerhalb einer Seite verlinken:

- **Richtig**: "Für weitere Informationen beachten Sie den [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Abschnitt im _Memory Management_ Leitfaden."

Wenn der Abschnitt, auf den Sie verlinken, sich auf derselben Seite befindet, können Sie die Position des Abschnitts mit beschreibenden Ausdrücken angeben.

- **Richtig**: "Dieses Konzept wird ausführlicher im [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt in diesem Dokument beschrieben."
- **Falsch**: "Dieses Konzept wird ausführlicher im [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt unten beschrieben."

Auf MDN gibt es eine weitere Möglichkeit, auf eine Referenzseite zu verlinken, indem man ein Makro verwendet. Diese Makros sind auf der [Seite über häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement` Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef` Makro.

Wir folgen ähnlichen Verweisrichtlinien in den [Weitere Infos](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Pull-Anfragen, die externe Links hinzufügen, werden abgelehnt, wenn sie diesen Richtlinien nicht entsprechen.

Wenn Sie darüber nachdenken, einen externen Link zu den MDN-Lerninhalten [Learn web development](/de/docs/Learn_web_development) hinzuzufügen, lesen Sie bitte auch die [Leitlinien für das Schreiben von Lerninhalten > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen müssen Sie, wenn Sie über einen externen Link nachdenken, sicherstellen, dass das Risiko folgender Punkte minimiert wird:

- Ungültige oder veraltete Links
- Erscheinungsbild von Befürwortungen, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verteilung von Spam zu verwenden
- Kurzlinks, die das Ziel des Links verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie in Betracht ziehen, innerhalb von MDN Web Docs Inhalte zu verweisen. Interne Links sind einfacher zu warten und machen die Gesamtheit der MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und allgemein vertrauenswürdig sind. Sie sollten es bevorzugen, Links zu externen Inhalten hinzuzufügen, die:
  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Für die Zuschreibung, Zitation oder Anerkennung notwendig sind (z.B. als Teil einer Creative Commons Zuschreibung)
  - Mehr gepflegt werden als solche Inhalte auf MDN Web Docs selbst (z.B. Release Notes eines Herstellers)
  - Open Source oder gemeinschaftsgetrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Wartbarkeit, Zugänglichkeit oder legen anderweitig Barrieren für Leser auf. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:
  - Generisch oder unspezifisch sind (z.B. die Homepage eines Anbieters, anstatt der zugehörigen Dokumentation)
  - Kurzlebig oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd sind (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Bezahlschranke haben (z.B. einen teuren Kurs, der über die Reichweite von Hobbyisten, Studenten oder Lesern in einkommensschwächeren Ländern hinausgeht)
  - Nicht zugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository einen Wert hat, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie zweimal, bevor Sie Links zu Ressourcen hinzufügen, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Anfrage offenlegen. Das Nichteinhalten könnte Ihre weitere Teilnahme an den MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie zum Beispiel der Redakteur einer Spezifikation sind und zu Dokumentationen im Zusammenhang mit dieser Spezifikation beitragen, dann wird die Verlinkung zu dieser Spezifikation erwartet und ist akzeptabel. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Kürzer (wie TinyURL oder Bitly) kann großartig dafür sein, lange Links in kleine, leichter zu merkende URLs zu verkürzen (auch als "Shortlinks" bekannt). Sie verschleiern jedoch auch das Ziel der URL. Zusätzlich kann bei bestimmten Kürzern das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für bösartige Zwecke eingesetzt werden könnte.

Verwenden Sie nicht von Benutzern erstellte Kurzlinks von Drittanbietern (URL-Kürzern). Verwenden Sie z.B. den längeren `example.com` URL, wenn `https://myshort.link/foobar` ein kurzer URL ist, der von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet.

<!-- markdownlint-disable search-replace -->

Auf der anderen Seite sind Kurzlinks von Erstanbietern, die von den Organisationen beibehalten werden, die auch die Ziel-URLs pflegen, ermutigt. `https://bugzil.la` gehört und wird von Mozilla betrieben und ist ein URL-Kürzer, der auf `https://bugzilla.mozilla.org/` umleitet, das auch eine von Mozilla betriebene Domain ist. In diesem Fall, verwenden Sie den kürzeren URL. Verwenden Sie z.B. `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in absteigender Reihenfolge ohne Auslassen von Ebenen: `##`, dann `###` und dann `####`; diese übersetzen sich in die [HTML Kopfzeilenelemente](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` und `<h4>` Tags.

`##` ist die maximale erlaubte Ebene, weil `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis verspüren, die vierte Überschriftenebene hinzuzufügen, überlegen Sie, den Artikel in mehrere kleinere Artikel mit einer Landing-Page zu unterteilen. Alternativ erwägen Sie, die Informationen als Aufzählungspunkte zu präsentieren, um die Verwendung einer vierten Überschriftenebene zu vermeiden.

Behalten Sie die folgenden Dos und Don'ts im Hinterkopf, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es müssen entweder zwei oder mehr Unterüberschriften oder keine sein.
- **Verwenden Sie keine Inline-Stile, Klassen, oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z.B. "Verwendung der `FooBar` Schnittstelle").
- **Erstellen Sie keine "Aufeinanderprallenden Überschriften".** Dies sind Überschriften, die unmittelbar darauf von einer Unterüberschrift gefolgt werden, ohne dass Text dazwischen ist.
  Dies sieht nicht gut aus und lässt die Leser ohne erklärenden Text am Anfang des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz diese Verwendung erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr permissive Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Content-Lizenz — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, führen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`-Bilder, schneiden Sie den Code mit [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt`-Text einschließen](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten konsistent formatiert und strukturiert sein auf allen Seiten.
Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Listenformat.
Abhängig von der Art der Liste, die Sie erstellen, möchten Sie möglicherweise Ihr Schreiben anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen fügen Sie einen vorangestellten Satz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungspunkte-Listen**: Aufzählungspunktslisten sollten verwendet werden, um zusammenhängende Teile von prägnanten Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente mit fehlendem Verb oder Subjekt oder beidem) in Aufzählungspunktslisten sollten standardmäßige Interpunktion — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es in einem Listenelement mehrere Sätze gibt, muss am Ende jedes Satzes, einschließlich des letztes Satzes des Elementes, ein Punkt stehen, genau wie das, was in einem Absatz zu erwarten wäre. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungspunktsliste:

  > In diesem Beispiel sollten wir einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel nennt jeder Punkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften sind hilfreich in diesem Szenario:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Text Schatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn das Listenelement nur drei oder weniger Wörter enthält. Wenn möglich, folgen Sie jedoch derselben Struktur für alle Listenelemente; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen zu enumerieren. Da Anweisungen komplex sein können, ist Klarheit oberste Priorität, besonders wenn der Text in jedem Element der Liste umfangreich ist. Wie bei Aufzählungspunktslisten, folgen Sie den standardmäßigen Interpunktion. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer Kontext zu geben, bevor es mit den Anweisungen beginnt.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen und halten Sie jeden Schritt in seinem eigenen nummerierten Punkt.
  >    Ihre Anweisungen können ziemlich umfangreich sein, also ist es wichtig, klar zu schreiben und korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel, wie man eine abschließende Erklärung für die vorherige Liste schreibt:

  > Wir haben eine kurze nummerierte Liste erstellt, die instruktione Schritte bietet, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in den nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Instruktionszwecke oder zum Durchlaufen eines geordneten Verfahrens verwendet werden, achten Sie darauf, jeden Punkt fokussiert zu halten: ein nummeriertes Element pro Schritt.

### Abschnitt Weitere Infos

Die meisten der Leitfäden, Referenzseiten und selbst Glossar-Seiten auf den MDN Web Docs enthalten einen _Weitere Infos_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies das Beispiel des [Weitere Infos Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die `@layer`-Seite.

Im Allgemeinen präsentieren Sie die Links in einem Abschnitt Weitere Infos in einer [Aufzählungspunkte]-Listenformat mit jedem Element der Liste als Phrase. Im [Learn web development](/de/docs/Learn_web_development)-Abschnitt auf MDN hingegen folgt der Weitere Info Abschnitt dem [Definitionslisten]-Format.

Um Konsistenz auf den MDN Web Docs aufrechtzuerhalten, behalten Sie die folgenden Richtlinien im Kopf, während Sie einen oder mehrere Abschnittselemente des Weitere Infos Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte derselbe wie der Titel der Seite oder des Abschnitt sein, zu dem Sie verlinken. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA Zustände und Eigenschaften" sein:
  - **Richtig**: [ARIA Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satzgroßschreibung im Linktext, auch wenn er sich dadurch vom verlinkten Seitentitel oder Abschnittstitel unterscheidet. Es könnte sein, dass die im Seite oder Abschnitt verwendete Fall ist falsch. Zum Beispiel wird der Linktext zur Seite [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) im korrekten Satzfall
  - **Richtig**: [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch bei externen Links verwenden Sie die Satzgroßschreibung, auch wenn der Fall auf der Zielsseite des Artikels anders ist. Dies ist wichtig, um Konsistenz auf den MDN Web Docs zu gewährleisten. Ausnahmen beinhalten Buchnamen.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu linken, wie in der [Verlinkung zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references)-Sektion auf der _Häufig verwendete Makros_ Seite erklärt ist. Die Verwendung eines Makros wird auf so den Keywordinhalt im Linktext formatieren, wie in dem nächsten Beispiel gezeigt.
- Kein Artikel ("A", "An", "The") wird am Anfang des Listenelements benötigt. Keine Interpunktion wird am Ende des Listenelements benötigt, da es immer ein Begriff oder eine Phrase ist.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer)
  - **Falsch**: The [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer) keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispiel zu sehen, fügen Sie die Codeformatierung mit Backticks (`` ` ``) für Schlüsselwörter und Literale im Linktext hinzu, auch wenn das Format im Titel der Seite oder Abschnitt nicht verwendet wird. Zum Beispiel für den Seitentitel "`Array()` Konstruktor", wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den umgebenden beschreibenden Text minimal. Im Falle einer Beschreibung, fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne Schlusspunkt. Halten Sie allen verknüpften Text zu Anfang des Text, um die Liste zu scannen.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS Selektoren für das Stylen von Kontrollkästchen
- Verwenden Sie nicht die Konjunktion "and" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: andere farbbezogene Eigenschaften
- Bei externen Links, bemühen Sie sich, die Quelle der Website und das Veröffentlichungsjahr oder das Jahr der letzten Aktualisierung (in Klammern) immer, wenn dies möglich und angemessen ist, anzugeben. Das Zurverfügungstellen dieser Information vorneweg schenkt Lesern eine klare Vorstellung davon, wohin sie gelangen, wenn sie den Link anklicken. Das Veröffentlichungsdatum leitet den Lesern ebenfalls in der Bestimmung der Relevanz des verlinkten Artikels und veranlasst auch die MDN-Maintainer, Links zu Artikeln zu überprüfen, die schon länger nicht mehr aktualisiert worden sind. Wenn Sie einen Link zu einem Artikel auf Wikipedia angeben, dürfen Sie das Veröffentlichungsdatum ignorieren. Der folgende Listeneintrag ist ein Beispiel für das Hinzufügen eines Links zum externen Artikel [Top-level await](https://v8.dev/features/top-level-await) im Abschnitt Siehe auch, zusammen mit der Quell- und Jahresangabe:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch, falls angemessen, die Namen der Autoren hinzufügen. Einige Beispiele sind in den [weiterführenden Lesungen](#language_grammar_and_spelling) Sektion aufgeführt. Achten Sie darauf, keine Namen für Blogbeiträge oder GitHub-Repositorys hinzuzufügen, zu denen Sie verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu den MDN-Seiten zuerst nach Referenzseiten auf, gefolgt von Links zu den verwandten Leitfäden und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich dazu, die Scanbarkeit der Elementen in der Liste zu verbessern.
- Wenn die Liste aus einer Mischung von internen und externen Links besteht, listen Sie zuerst die internen und dann die externen Links auf.
- Befolgen Sie innerhalb jeder Gruppe von internen und externen Links eine alphabetische oder einfach-nach-komplex-Reihenfolge, je nachdem was mehr für den Kontext Sinn ergibt.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Themenbereich hinzufügen müssen, tun Sie dies im Allgemeinen, indem Sie eine Landing-Page erstellen, dann Unterseiten zu den einzelnen Artikeln hinzufügen.
Die Landing-Page sollte mit einem oder zwei Absätzen öffnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können die Aufnahme von Seiten in die Liste mit einigen Makros, die wir erstellt haben, automatisieren.

Zum Beispiel betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der folgendermaßen strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptverzeichnisseite
- [JavaScript/Guide/JavaScript Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel im obersten Teil der Hierarchie zu platzieren, was die Seite verlangsamt und die Suche und die Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom Seiten-"Slug", der sich im URL-Teil der Seite befindet und nach `<locale>/docs/` folgt, unterscheiden. Behalten Sie bei der Definition eines Slugs die folgenden Richtlinien im Kopf:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte der neue Level-Komponente im Slug nur ein Wort oder zwei betragen.
- Slugs sollten einen Unterstrich für eine mehrwortige Komponente verwenden, wie zum Beispiel `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie auch für die Komponenten von Slugs der Satzgroßschreibung, z.B. `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und dienen auch dazu, die Seitenhierarchie in der Brotkrume oben auf der Seite zu strukturieren. Ein Seitentitel kann sich vom Seiten-"Slug", wie im [Slugs](#slugs)-Abschnitt erklärt, unterscheiden.

Behalten Sie beim Schreiben von Titeln die folgenden Richtlinien im Kopf:

- **Großschreibungsstil**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften Satzstil-Großschreibung (nur das erste Wort und Eigennamen großschreiben) verwenden, nicht die Überschriftstil-Großschreibung:
  - **Richtig**: "Eine neue Methode für die Erstellung von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode Für Die Erstellung Von JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die vor diesen Stilrichtlinien geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir kommen nach und nach dazu.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte beim Schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen helfen zu entscheiden, wie Sie Informationen anordnen möchten. Decken Sie einfache Konzepte zuerst und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Decken Sie zuerst konzeptionelle Informationen ab und gehen sie dann zu aktionsorientierten Themen über.

  Halten Sie beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte folgende Richtlinien ein:
  - **Gehen Sie höher zu tiefer**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) festgehalten, von der höheren `##` zu niedrigeren `####`-Ebenen, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriften für breitere einführende Titel und spezifischere Titel im niedrigeren Überschriften.
  - **Gruppieren Sie logisch**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Die Benennung der Titel der verschiedenen Abschnitte kann Ihnen dabei helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter im Text und im Inhaltsverzeichnis zu überblicken.
  - **Halten Sie Titel spezifisch**: Benutzen Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein einzelnes Konzept oder Ziel zu behandeln, das in dem Abschnitt behandelt wird. Verzichten Sie darauf, falls möglich, eine Konjunktion wie "and" in einem Titel zu verwenden.
  - **Verwenden Sie Parallele Konstruktion**: Verwenden Sie ähnliche Sprache für Titel auf der gleichen Überschriftsebene. Wenn ein `###`-Überschriftstitel mit einer Gerundien beginnt, d.h. einem mit "-ing" endenden Wort, wie "Installing", versuchen Sie alle Überschriftstitel auf dieser Ebene im Gerundium zu schreiben. Wenn ein Titel mit einem Imperativverben beginnt, wie "Use", "Configure", dann formulieren Sie alle Titel auf dieser Überschriftenebene mit einem Imperativverb beginnend.
  - **Vermeiden Sie gängige Begriffe in niedrigeren Überschriftstiteln**: Wiederholen Sie nicht den Text der höheren Überschrift in Titeln für niedrigere Überschriften. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Klauseln" anstelle von "Kommas nach einleitenden Klauseln".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, Titel mit einem Artikel "a", "an" oder "the" zu beginnen.
  - **Fügen Sie einführende Informationen hinzu**: Nach einem Titel, fügen Sie einige einleitende Texte hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Code-Beispielen mit Shell-Prompt](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stilguides

Wenn Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, sich auf den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu beziehen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie die folgenden Ressourcen möglicherweise hilfreich.

- [Häufige Fehler im englischen Gebrauch](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Sprache und Nutzung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Nutzung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere zur Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
