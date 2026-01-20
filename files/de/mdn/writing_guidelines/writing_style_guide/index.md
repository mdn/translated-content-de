---
title: Schreibstil-Leitfaden
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollen.

Diese Richtlinien dienen dazu, Konsistenz in Sprache und Stil auf der Website sicherzustellen. Uns sind Inhalte wichtiger als deren Formatierung, daher fühlen Sie sich nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie Beiträge einreichen. Seien Sie jedoch nicht überrascht oder verärgert, wenn ein anderer Beitragende später Ihre Arbeit überarbeitet, um sie an diesen Leitfaden anzupassen. Die Gutachter können Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für die englischsprachige Dokumentation. Andere Sprachen können (und sollten) ihre eigenen Stil-Leitfäden erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Dieser Leitfaden sollte jedoch weiterhin zur Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und wie verschiedene Komponenten auf einer Seite formatiert werden sollten, z.B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Zielpublikum berücksichtigen](#zielpublikum_berücksichtigen)
- [Die drei K der Schreibkunst berücksichtigen](#die_drei_k_der_schreibkunst_berücksichtigen)
- [Relevante Beispiele einbinden](#relevante_beispiele_einbinden)
- [Eine aussagekräftige Einführung bieten](#eine_aussagekräftige_einführung_bieten)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Mit SEO im Hinterkopf schreiben](#mit_seo_im_hinterkopf_schreiben)

### Zielpublikum berücksichtigen

Behalten Sie das Zielpublikum für die Inhalte, die Sie schreiben, im Auge. Eine Seite über fortgeschrittene Netzwerktechniken muss z. B. wahrscheinlich nicht so detailliert auf grundlegende Netzwerkbegriffe eingehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Die drei K der Schreibkunst berücksichtigen

Die drei K eines guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Sprachmodus und eindeutige Pronomen. Schreiben Sie kurze Sätze, indem Sie sich auf eine Idee pro Satz beschränken. Definieren Sie neue Begriffe, bevor Sie sie verwenden, unter Berücksichtigung des Zielpublikums.
- **Kürze**: Es ist wichtig, bei jedem Dokument zu wissen, wie viel gesagt werden soll. Wenn Sie zu viele Details angeben, wird die Seite mühsam zu lesen und sie wird selten verwendet.
- **Konsistent**: Achten Sie darauf, dass Sie den gleichen Wortlaut durchgehend auf der Seite und über mehrere Seiten hinweg verwenden.

### Relevante Beispiele einbinden

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird, und um eventuelle Randfälle zu klären, die auftreten können. Sie können auch Beispiele verwenden, um Lösungen für gewöhnliche Aufgaben und Probleme zu demonstrieren, die auftreten können.

### Eine aussagekräftige Einführung bieten

Stellen Sie sicher, dass der Eröffnungsabsatz bzw. die Absätze vor der ersten Überschrift die Informationen, die die Seite abdecken wird, ausreichend zusammenfassen und vielleicht, was die Leser erreichen können, nachdem sie sich den Inhalt angesehen haben. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernausgänge relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz den Leser über die behandelten Themen sowie über das erforderliche Wissen informieren, das der Leser möglicherweise haben muss. Der Anfangsabsatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu verwandten Informationen, und sollte Hinweise auf Situationen bieten, in denen der Artikelinhalt nützlich sein könnte.

- **Beispiel für eine zu kurze Einführung**: Dieses Beispiel für eine Einleitung ist viel zu kurz. Es fehlen zu viele Informationen, z. B. was es genau bedeutet, Text zu "streichen", wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang.
  Zu viele Details sind enthalten, und der Text geht zu tief darauf ein, andere Methoden und Eigenschaften zu beschreiben.
  Stattdessen sollte sich die Einleitung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben sind.

  > Wenn aufgerufen, zeichnet die Methode **`CanvasRenderingContext2D.strokeText()`** der Canvas 2D API die Umrisse der Zeichen im angegebenen Zeichenstring ab den angegebenen Koordinaten und verwendet die aktuelle Stiftfarbe.
  > In der Computergraphik-Sprache bedeutet "Streichen" von Text, die Umrisse der Glyphen im String zu zeichnen, ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schrift des Kontextes gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontextes angegeben.
  >
  > Die Platzierung des Textes im Verhältnis zu den angegebenen Koordinaten wird durch die `textAlign`-, `textBaseline`- und `direction`-Eigenschaften des Kontextes bestimmt.
  > `textAlign` steuert die Platzierung des Strings relativ zur angegebenen X-Koordinate; wenn der Wert "center" ist, wird der String beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte des Strings liegt.
  > Wenn der Wert "left" ist, beginnt der String bei dem angegebenen Wert von `x`.
  > Und wenn `textAlign` "right" ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (...)
  >
  > Sie können optional einen vierten Parameter angeben, der es Ihnen ermöglicht, eine maximale Breite für den String in Pixeln zu spezifizieren.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um beim Zeichnen in einen Raum dieser Breite zu passen.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen eines Strings mit Farbe gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine angemessene Einführung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die Methode **`strokeText()`** des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), streicht (zeichnet die Umrisse von) die Zeichen eines angegebenen Strings, verankert an der Position, die von den gegebenen X- und Y-Koordinaten angezeigt wird.
  > Der Text wird mit dem aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontextes gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite Grafiken zeichnen sowie unseren Hauptartikel zu diesem Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen Sie nachdrücklich, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in der Dokumentation nicht verwenden; jedoch, wenn der Fall eintritt, ziehen Sie in Betracht, **fantastic** zu verwenden.

Am besten verwenden Sie eine geschlechtsneutrale Sprache in jedem Schreiben, in dem das Geschlecht für das Thema irrelevant ist.
Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Subjekt eine Person eines beliebigen Geschlechts ist, ist "er"/"sein" nicht angemessen.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "A confirmation dialog asks the user if he wants to allow the web page to make use of his webcam."
- **Falsch**: "A confirmation dialog asks the user if she wants to allow the web page to make use of her webcam."

Beide Versionen sind geschlechtsspezifisch. Um dies zu korrigieren, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "A confirmation dialog asks the user if they want to allow the web page to make use of their webcam."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung von Drittpersönlichen Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)." Die geschlechtsneutralen Pronomen umfassen "they," "them", "their," und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzerzahl zu pluralisieren, wie folgt:

- **Richtig**: "A confirmation dialog asks the users if they want to allow the web page to make use of their webcams."

Die beste Lösung ist natürlich, neu zu schreiben und die Pronomen zu eliminieren:

- **Richtig**: "A confirmation dialog requesting the user's permission for webcam access appears."
- **Richtig**: "Ein Bestätigungsdialogfeld erscheint, der den Benutzer um Erlaubnis zur Nutzung der Webcam bittet."

Dieses letzte Beispiel zur Problemlösung ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, sondern entfernt einige der Komplexität in Bezug auf Geschlechter in verschiedenen Sprachen, die möglicherweise unterschiedlichste Geschlechterregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch Übersetzer erleichtern.

### Zugängliche Sprache verwenden

Vermeiden Sie die Verwendung von räumlichen und Richtungsschlüsselwörtern wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer gilt. Sie können auch unklar oder irreführend sein - insbesondere für Benutzer, die auf Bildschirmlesegeräte angewiesen sind, oder für diejenigen, die übersetzten Inhalt lesen, bei dem Richtungsbezüge mehrdeutig oder schwer genau zu übersetzen sein können. Bei responsiven Layouts, bei denen sich die Position von Inhalten je nach Bildschirmgröße ändern kann, könnten solche Richtungsangaben inkorrekt werden. Diese Art von Sprache kann die Barrierefreiheit behindern und es für alle Benutzer schwieriger machen, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Ausdrücke, die den Abschnitt, das Konzept oder das Element klar identifizieren, auf das Bezug genommen wird. Verweisen Sie auf Abschnitte nach ihren Titeln oder Überschriften und verweisen Sie auf Beispiele oder Code-Snippets, indem Sie angeben, was sie darstellen oder enthalten.

Zum Beispiel:

- **Richtig**: "Refer to the [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) section later on this page."
- **Falsch**: "Refer to the Accessibility section below."

- **Richtig**: "In the following code example, we animate a circle using CSS transitions."
- **Falsch**: "In the code example below, we animate a circle using CSS transitions."

- **Richtig**: "This concept is explained in the earlier section titled Creating a media query."
- **Falsch**: "This concept is explained in the section above."

Außerdem vermeiden Sie vage Linktexte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel". Beschreibende Linktexte bieten besseren Kontext für alle Leser und verbessern die Erfahrung für Benutzer von Hilfstechnologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Learn more about [how to order flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Click [here](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) to learn more."
- **Falsch**: "Read [this article](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) to learn more."

<!-- markdownlint-enable descriptive-link-text -->

Wenn Sie diese Richtlinien befolgen, sorgen Sie dafür, dass die MDN-Dokumentation zugänglich, klar und für alle Benutzer verwendbar ist, unabhängig davon, wie sie auf die Seite zugreifen.

### Mit SEO im Hinterkopf schreiben

Obwohl das Hauptziel jedes Schreibens auf MDN Web Docs immer darin bestehen sollte, über offene Web-Technologie zu informieren und aufzuklären, damit Entwickler schnell lernen können, was sie tun möchten oder die kleinen Details finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie die von uns geschriebenen Materialien _finden_ können. Dies können wir erreichen, indem wir Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben im Auge behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen an Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, damit Leser leicht finden, was sie benötigen. Zu den SEO-Richtlinien gehört, sicherzustellen, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel ordnungsgemäß zu indexieren.

Die folgende Checkliste ist eine gute Erinnerung beim Schreiben und Überprüfen von Inhalten, um sicherzustellen, dass die Seite und ihre Nachbarseiten richtig von Suchmaschinen indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema berichten, selbst wenn dies nicht der Fall ist.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, wobei nur wenige Wörter ausgetauscht und dasselbe Beispiel verwendet wird. Dies erschwert es Suchmaschinen zu wissen, welches welche ist, und sie teilen sich das Page-Ranking, wodurch beide schwerer zu finden sind, als sie es sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen:
  - **Einzigartigere Konzepte erklären**: Ziehen Sie Anwendungsfälle in Betracht, bei denen es möglicherweise mehr Unterschiede gibt, als man denkt. Beispielsweise, im Fall der Dokumentation von `width`- und `height`-Eigenschaften, könnten Sie über die unterschiedliche Nutzung von horizontalem und vertikalem Raum schreiben und eine Diskussion über geeignete Konzepte hinzufügen. Vielleicht können Sie die Nutzung von `width` im Hinblick auf die Schaffung von Platz für eine Seitenleiste und die Nutzung von `height` zur Behandlung von vertikalem Scrollen oder Fußbereichen erwähnen. Es ist auch eine nützliche und wichtige Idee, Informationen zu Zugänglichkeitsfragen aufzunehmen.
  - **Andere Beispiele verwenden**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Haupttext, weil die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und daher keine wirklichen Änderungen beim Wiederverwenden erfordern. Verwerfen Sie also das Beispiel und schreiben Sie ein neues, oder bieten Sie zumindest mehrere Beispiele an, wobei zumindest einige von ihnen unterschiedlich sind.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl eine Übersicht darüber, was das Beispiel tut als auch eine Abdeckung darüber, wie es funktioniert, sollten auf einem geeigneten Detaillierungsgrad im Hinblick auf die Komplexität des Themas und das Zielpublikum enthalten sein.

  Der einfachste Weg, übermäßige Ähnlichkeiten zu vermeiden, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn Zeit dafür ist.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt einer Seite zu wenig ist (im SEO-Jargon als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt nicht) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip stellen Sie sicher, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, aber behandeln Sie diese Richtlinie als Mindestziel, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen dabei helfen, Seiten zu erstellen, die genügend Inhalt haben, um richtig durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:
  - **Avoid stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalt fehlt, fügen Sie ihn hinzu. Wir versuchen, vollständige "Stubs" auf den MDN Web Docs zu vermeiden, auch wenn sie vorhanden sind, aber es gibt viele Seiten, die große Teile ihres Inhalts vermissen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und über entsprechende Inhalte verfügen.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt werden. Stellen Sie sicher, dass alle Ausnahmen behandelt werden - dies ist ein besonders häufiger Punkt, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, schnell etwas zu erklären, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, über die der Leser Bescheid wissen muss?
  - **Beispiele hinzufügen**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften oder Attribute), die Benutzer im Anfänger- bis Mittelniveau wahrscheinlich verwenden werden, sowie alle fortgeschrittenen, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht darüber eingeleitet werden, was das Beispiel tun wird, welches zusätzliche Wissen möglicherweise erforderlich ist, um es zu verstehen, usw. Nach dem Beispiel (oder unter Einbeziehung von Teilen des Beispiels) sollte Text vorhanden sein, der erklärt, wie der Code funktioniert. Sparen Sie nicht an Details oder der Fehlerbearbeitung in Beispielen. Denken Sie daran, dass Benutzer _werden_ Ihr Beispiel kopieren und in ihren eigenen Projekten verwenden, und Ihr Code wird _wird_ auf Produktionsseiten verwendet! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Benutzen Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsszenarien für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer selbst herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie einen beschreibenden [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text für alle Bilder und Diagramme ein. Dieser Text sowie Bildunterschriften zu Tabellen und anderen Figuren zählen, da Spider keine Bilder crawlen können, und daher erklärt der `alt` Text den Suchmaschinen-Crawlern, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Keywords oder nicht zum Feature gehörende Keywords einzufügen, um Suchmaschinen-Rankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und wird oft bestraft.
    > Ebenso **nicht** wiederholende, unhilfreiche Materialien oder Blöcke von Schlüsselwörtern innerhalb der eigentlichen Seite hinzufügen, um die Seitengröße und das Suchranking zu verbessern. Dies schadet sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen mehr als es nützt.

- **Fokus auf Themeninhalte**: Es ist viel besser, Inhalte rund um das Thema der Seite zu schreiben als um ein bestimmtes Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema aufnehmen könnten; viele SEOs erstellen in der Tat eine Liste von 5-100 verschiedenen Schlüsselwörtern (variierend zwischen kurzen, mittleren und langen Keywords) zur Einbeziehung in ihren Artikel, abhängig von der Länge. Dies zu tun wird Ihre Wortwahl diversifizieren, was zu weniger Wiederholungen führt.

## Schreibstil

Neben dem Schreiben grammatikalisch korrekter Sätze auf Englisch empfehlen wir, dass Sie diese Richtlinien befolgen, um die Konsistenz der Inhalte auf den MDN Web Docs zu gewährleisten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophen und Anführungszeichen](#apostrophen_und_anfuehrungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Schreibung](#schreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine gekürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus dem ersten Buchstaben jedes Wortes eines Ausdrucks gebildet wird. Dieser Abschnitt beschreibt die Richtlinien für Abkürzungen und Akronyme.

- **Ausdrücke**: Bei der ersten Erwähnung eines Begriffs auf einer Seite erweitern Sie Akronyme, die den Benutzern wahrscheinlich nicht vertraut sind. Bei Zweifel erweitern Sie den Begriff. Noch besser ist es, ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary) zu verlinken, der die Technologie beschreibt.
  - **Richtig**: "XUL (XML User Interface Language) is Mozilla's XML-based language..."
  - **Falsch**: "XUL is Mozilla's XML-based language..."

- **Großschreibung und Punkte**: Verwenden Sie vollständige Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Web browsers (e.g., Firefox) can be used ...
  - **Falsch**: Web browsers e.g. Firefox can be used ...
  - **Falsch**: Web browsers, e.g. Firefox, can be used ...
  - **Falsch**: Web browsers, (eg: Firefox) can be used ...

  <!-- markdownlint-enable search-replace -->

  Im normalen Text (d.h. außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.
  - **Richtig**: ... web browsers, and so on.
  - **Falsch**: ... web browsers, etc.

  - **Richtig**: Web browsers such as Firefox can be used ...
  - **Falsch**: Web browsers e.g., Firefox can be used ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente lateinischer Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abkürz | Latein           | Englisch                |
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
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser ihre Bedeutung entweder verwirren oder nicht verstehen werden.
  >
  > Achten Sie auch darauf, dass _Sie_ sie korrekt verwenden, wenn Sie sich entscheiden, dies zu tun. Zum Beispiel, vermeiden Sie häufige Fehler wie die Verwechslung von "e.g." mit "i.e.".

- **Pluralformen von Abkürzungen und Akronymen**: Für den Plural von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals ein Apostroph. Bitte nie.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Abkürzung verwenden, ist "vs." der bevorzugte Ausdruck gegenüber "v." und kann in Überschriften verwendet werden. Andernfalls im Text verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: this vs. that
  - **Falsch**: this v. that
  - **Richtig**: this versus that

### Großschreibung

Verwenden Sie die Standardregeln für die Großschreibung im englischen Text und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (allein verwendet oder als Modifikator) und "internet" in Kleinbuchstaben zu verwenden.

> [!NOTE]
> Diese Richtlinie ist eine Änderung der vorherigen Version dieses Leitfadens, daher finden Sie möglicherweise viele Fälle von "Web" und "Internet" auf MDN.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zu bearbeiten, um die Großschreibung zu ändern.

Tastaturtasten sollten Satzstil-Kapitalisierung verwenden, nicht alle Großbuchstaben-Kapitalisierung.
Zum Beispiel, "<kbd>Enter</kbd>" statt "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie z.B. Marken, die Großbuchstaben enthalten oder Wörter, die sich aus dem Namen einer Person ableiten (es sei denn, das Wort wird innerhalb von Code verwendet und die Syntax erfordert Kleinbuchstaben).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Warenzeichen der Oracle Corporation, es sollte immer als markenrechtlich geschrieben sein)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

Einige Werkzeugnamen und Projekte haben ihre eigenen Marken-Kapitalisierungsregeln. Diese erfordern möglicherweise Namen, die vollständig in Kleinbuchstaben ("npm" oder "webpack"), ausschließlich in Großbuchstaben ("UNIX", "GNOME", "VIM") oder gemischte Groß-/Kleinschreibung ("TypeScript", "macOS", oder "jQuery") verwenden.

Die markeneigene Kapitalisierung von der offiziellen Website oder Dokumentation sollte immer verwendet werden, selbst am Anfang eines Satzes. Wenn Sie sich unwohl fühlen, wenn ein Satz mit einem Kleinbuchstaben beginnt, empfehlen wir, den Satz so umzuschreiben, dass das Problem vermieden wird. Zum Beispiel könnten Sie sagen "You can use the npm package manager to..." statt "npm allows you to...".

### Kontraktionen

Unser Schreibstil neigt dazu, locker zu sein, so dass Sie sich frei fühlen sollten, Kontraktionen (z. B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie dies bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im fortlaufenden Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.
  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (ohne Daten in Codebeispielen) verwenden Sie das Format "January 1, 1900".
  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.
  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Pluralformen von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht die lateinisch- oder griechisch beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophen und Anführungszeichen

Verwenden Sie keine "gekrümmten" Anführungszeichen und Apostrophe. Auf den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns für Konsistenz für das eine oder andere entscheiden müssen. Wenn geschweifte Anführungszeichen oder Apostrophe in Code-Snippets, sogar in Inline-Form, gelangen, könnten Leser sie kopieren und einfügen und erwarten, dass sie (was sie nicht tun werden) funktionieren.

- **Richtig**: Please don't use "curly quotes."
- **Falsch**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Sätzen**: Ein einleitender Satz ist ein abhängiger Satz, der oft am Anfang eines Satzes zu finden ist. Verwenden Sie ein Komma nach einem einleitenden Satz, um ihn vom folgenden unabhängigen Satz zu trennen.
  - Beispiel 1:
    - **Richtig**: "In this example, you will learn how to use a comma."
    - **Falsch**: "In this example you will learn how to use a comma."
  - Beispiel 2:
    - **Richtig**: "If you are looking for guidelines, refer to our writing style guide."
    - **Falsch**: "If you are looking for guidelines refer to our writing style guide."
  - Beispiel 3:
    - **Richtig**: "On mobile platforms, you tend to get a numeric keypad for entering data."
    - **Falsch**: "On mobile platforms you tend to get a numeric keypad for entering data."

- **Vor Konjunktionen**: Das serielle Komma (auch als "Oxford Comma" bekannt) ist das Komma, das vor der Konjunktion in einer Aufzählung von drei oder mehr Elementen erscheint. Auf den MDN Web Docs verwenden wir das serielle Komma. Die Kommas trennen auch jedes Element der Liste.
  - **Richtig**: "I will travel on trains, planes, and automobiles."
  - **Falsch**: "I will travel on trains, planes and automobiles."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.
  - **Richtig**: "My dog is cute and smart."
  - **Falsch**: "My dog is cute, and smart."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, ziehen Sie in Betracht, ihn als zwei Sätze umzuschreiben.
  - Beispiel 1:
    - **Richtig**: "You can perform this step, but you need to pay attention to the file setting."
    - **Falsch**: "You can perform this step but you need to pay attention to the file setting."
  - Beispiel 2:
    - **Richtig**: "My father is strict but loving."
    - **Falsch**: "My father is strict, but loving."

- **Vor "that" und "which"**: Ein restriktiver Satz ist für die Bedeutung des Satzes wesentlich und muss nicht durch Kommas vom verbleibenden Satz abgesetzt werden. Ein restriktiver Satz wird normalerweise durch "that" eingeführt und **darf nicht** von einem Komma vorausgegangen werden.
  - **Richtig**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Falsch**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  Ein nicht restriktiver Satz bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nicht restriktiver Satz wird normalerweise durch "which" eingeführt und sollte von einem Komma vorausgegangen werden.
  - **Richtig**: "You write a policy, which is an allowed list of origins for each feature."
  - **Falsch**: "You write a policy which is an allowed list of origins for each feature."

- **Vor "derart wie"**: Wenn "derart wie" Teil eines nicht restriktiven Satzes ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "derart wie".
  - **Richtig**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Falsch**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  Das folgende Beispiel zeigt, wann das Komma bei "derart wie" nicht zu verwenden ist. In diesem Fall ist der Satz, der "derart wie" enthält, für die Bedeutung des Satzes essenziell.
  - **Richtig**: "Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **Falsch**: "Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### Bindestriche

Kompositwörter sollten nur dann mit Bindestrichen versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Schreibung

Verwenden Sie amerikanische Schreibweise.

Im Allgemeinen verwenden Sie den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als eine alternative Schreibweise oder hauptsächlich in einer nicht-amerikanischen Form von Englisch verwendet aufgeführt.
Beispielsweise, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform) nachschlagen, finden Sie den Ausdruck "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternative Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich im Verzeichnis [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und erlaubte Wörter enthalten, die nicht in den Standardwörterbüchern sind. Sie können mehr Wörter in diesen Listen hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer gemeldet sind. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Hier sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um auf HTML- und XMLElemente zu verweisen, anstelle von "Tag". Darüber hinaus sollte das Element in spitze Klammern "<>" gesetzt und mit Backticks (`` ` ``) gestylt werden. Zum Beispiel wird \<input\>, wenn es innerhalb von Backticks verwendet wird, als `<input>` formatiert, wie es erwartet wird.
  - **Richtig**: the `<span>` element
  - **Falsch**: the span tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages) spezifizieren, das das Element stylt, die spitzen Klammern "<>" hinzufügt sowie einen Link zu seiner Referenzseite einfügt.
  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelle in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" für Konsistenz, wann immer möglich.

- **Benutzeroberflächenaktionen**: In Aufgabenabfolgen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und Typs.
  - **Richtig**: "Click the Edit button."
  - **Falsch**: "Click Edit."

### Stimme

Während der aktive Sprachmodus bevorzugt wird, ist die passive Stimme auch akzeptabel, angesichts des informellen Charakters unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien für verschiedene Teile jeder Seite auf, wie Überschriften, Notizen, Links und Beispiele.

- [Codebeispiele](#code_beispiele)
- [Cross-Referenzen (Verlinkung)](#cross-referenzen_verlinkung)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#verkürzte_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Codebeispiel sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das Szenario zu beschreiben, das durch das Codebeispiel demonstriert wird. Zum Beispiel "Using offset printing" und "Reverting to style in previous layer".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Codebeispiel, die die Besonderheiten des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel "In the following example, two cascade layers are defined in the CSS, `base` and `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Codebeispiel, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und dessen Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu zerlegen, damit sie individuell beschrieben werden können.
- Beim Hinzufügen von [Live-Demos](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu beachten, dass alle Codeblöcke des Musters mit demselben Typ (HTML, CSS und JavaScript) zusammengefügt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehreren Segmenten zu unterteilen, von denen jedes optional eigene Beschreibungen, Überschriften usw. haben kann. Dies macht die Dokumentation von Code unglaublich mächtig und flexibel.

Um zu erfahren, wie man Codebeispiele für MDN Web Docs stilieren oder formatieren sollte, siehe unsere [Richtlinien zur Stilierung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Cross-Referenzen (Verlinkung)

Wenn Sie auf eine andere Seite oder einen Abschnitt einer Seite auf MDN durch ihren Titel verweisen, folgen Sie der Groß- bzw. Kleinschreibung des Satzes im Linktext (entsprechend dem Seiten- oder Abschnittstitel). Verwenden Sie Satz-Groß- und Kleinschreibung im Linktext, selbst wenn er vom Titel der verlinkten Seite oder des Abschnitts abweicht (es kann sein, dass die im Seiten- oder Abschnittstitel verwendete Groß- oder Kleinschreibung falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN durch ihren Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Refer to the [Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) guide."
- **Falsch**: "Refer to the "[Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" guide."

Folgen Sie einem konsistenten Stil beim Verlinken zu Abschnitten innerhalb einer Seite:

- **Richtig**: "For more information, refer to the [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) section in the _Memory management_ guide."

Wenn der Abschnitt, den Sie verlinken, auf derselben Seite ist, können Sie mit beschreibenden Sätzen auf den Standort des Abschnitts hinweisen.

- **Richtig**: "This concept is described in more detail in the [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) section of this document."
- **Falsch**: "This concept is described in more detail in the [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) section below."

Auf MDN können Sie auch ein Makro verwenden, um auf eine Referenzseite zu verlinken. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages) beschrieben. Beispielsweise, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das Makro `HTMLElement`, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das Makro `CSSxRef`.

Wir folgen ähnlichen Cross-Referenzierungsrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf den MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf den MDN Web Docs einzufügen. Pull Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diesen Richtlinien nicht folgen.

Wenn Sie in Erwägung ziehen, einen externen Link zu MDNs [Learn web development](/de/docs/Learn_web_development) Inhalte hinzuzufügen, lesen Sie bitte auch [Lernwebentwicklungs-Schreibrichtlinien > Partnerlinks und Einbindungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie in Erwägung ziehen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko der folgenden Punkte minimiert ist:

- Defekte oder veraltete Links
- Erscheinung der Befürwortung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu verwenden
- Kurzlinks, die das Link-Ziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, überdenken Sie das interne Cross-Referenzieren von Inhalten innerhalb der MDN Web Docs. Interne Links sind einfacher zu pflegen und machen die Gesamtheit der MDN Web Docs wertvoller für Leser.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und breit anerkannt sind. Sie sollten das Hinzufügen von Links zu externen Inhalten bevorzugen, die:
  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Notwendig für Zitat, Zitation oder Anerkennung sind (z.B. als Teil einer Creative Commons-Zitation)
  - Wahrscheinlicher für das Thema gepflegt werden als solcher Inhalt auf den MDN Web Docs selbst zu integrieren (z.B. die Versionsnotizen eines Anbieters)
  - Open Source oder Community-getrieben, wie die MDN Web Docs selbst, sind

- **Schlechte externe Links**: Schlechte externe Links mangeln an Relevanz, Wartbarkeit, Zugänglichkeit oder stellen anderweitig Barrieren für Leser dar. Vermeiden Sie das Hinzufügen von Links zu externen Inhalten, die:
  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters statt der zugehörigen Dokumentation)
  - Flüchtig oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd sind (z.B. die eigene Arbeit des Autors außerhalb der MDN Web Docs)
  - Bezahlschranken (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in einkommensschwächeren Ländern unzugänglich ist)
  - Unzugänglich (z.B. ein Video ohne Untertitel) sind

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository einen Wert hat, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Denken Sie zweimal nach, bevor Sie zu Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull Request offenlegen. Das Versäumnis, dies zu tun, könnte Ihre weitere Teilnahme an den MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Herausgeber einer Spezifikation sind und daran beteiligt sind, zugehörige Dokumentationen für diese Spezifikation zu schreiben, dann wird erwartet und akzeptiert, dass auf diese Spezifikation verwiesen wird. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter zu merkende URLs (auch bekannt als "Shortlinks") zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann bei bestimmten Shortenern das Ziel nach der Erstellung geändert werden, eine Funktion, die für bösartige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über nutzergenerierte URL-Shortener erstellt wurden. Beispielsweise, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer erstellt wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` verweist, verwenden Sie die längere `example.com` URL.

<!-- markdownlint-disable search-replace -->

Auf der anderen Seite werden von den Organisationen, die auch die Ziel-URLs betreiben, gepflegte First-Party-Shortener empfohlen. `https://bugzil.la` gehört und wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` umleitet, was ebenfalls eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Verwenden Sie beispielsweise `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in abnehmender Reihenfolge, ohne Levels zu überspringen: `##`, dann `###` und dann `####`; diese übersetzen sich in die [HTML-Überschriftentags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` und `<h4>` Tags.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis verspüren, eine Überschrift der vierten Ebene hinzuzufügen, ziehen Sie in Betracht, den Artikel in mehrere kleinere Artikel mit einer Landing-Seite zu unterteilen. Alternativ könnten Sie versuchen, die Informationen als Bullet-Points zu präsentieren, um die Verwendung einer Überschrift der vierten Ebene zu vermeiden.

Behalten Sie folgende Do's und Don'ts beim Erstellen von Überschriften für Unterabschnitte im Hinterkopf:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es sollen entweder zwei oder mehr Unterüberschriften oder keine vorhanden sein.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Code-Begriffe anzuzeigen (z.B. "Using `FooBar` interface").
- **Erstellen Sie keine "bumping heads".** Dies sind Überschriften, auf die unmittelbar eine Unterüberschrift folgt, ohne dass dazwischen erklärender Text vorhanden ist.
  Dies sieht nicht gut aus und lässt Leser ohne Erklärtext zu Beginn des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, folgen Sie diesen Richtlinien:

- Vergewissern Sie sich, dass die Medienlizenz deren Nutzung erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr permissive Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine haben, die mit unserer allgemeinen Inhaltslizenz - [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) - kompatibel ist.
- Für Bilder verwenden Sie <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG` führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), stellen Sie sicher, dass die `SVG`-Datei am Ende der Datei eine leere Zeile hat.
- Jedes Bild muss [beschreibenden `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten konsistent über alle Seiten hinweg formatiert und strukturiert sein. Einzelne Listenelemente sollten mit geeigneter Zeichensetzung verfasst werden, unabhängig vom Listenformat. Je nachdem, welche Art von Liste Sie erstellen, sollten Sie jedoch Ihr Schreiben anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen sollte ein einleitender Satz enthalten sein, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Informationsstücke zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten der Standardzeichensetzung folgen - Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss ein Punkt am Ende jedes Satzes stehen, einschließlich des letzten Satzes des Elements, genau wie es in einem Absatz zu erwarten wäre. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes beachten:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine weitere Bedingung, mit etwas weiterer Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur von Punkt zu Punkt wiederkehrt. In diesem Beispiel stellt jeder Aufzählungspunkt eine Bedingung da, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Sets the background color
  > - propertyB: Fügt dem Text einen Schatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze enthalten, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement drei oder weniger Wörter enthält. Soweit möglich, befolgen Sie jedoch die gleiche Struktur für alle Elemente in einer Liste; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich dazu verwendet, Schritte in einer Reihe von Anweisungen aufzuzählen. Da Anweisungen komplex sein können, ist Klarheit eine Priorität, insbesondere, wenn der Text in jedem Listenelement lang ist. Wie bei den Aufzählungslisten befolgen Sie die Standardnutzung von Satzzeichen. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuführen. Es ist wichtig, dem Benutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit dem Erstellen Ihrer Anweisungen und bleiben Sie bei jedem Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können sehr umfangreich sein, daher ist es wichtig, klar zu schreiben und korrekte Satzzeichen zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen zusammenfassenden Schließen oder Erläuterung über das zu erwartende Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel für das Verfassen einer Erklärung zum Abschluss der vorhergehenden Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungen bereitstellt, um eine nummerierte Liste mit der richtigen Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Anweisungszwecke oder um jemanden durch einen ordentlichen Vorgang zu führen verwendet werden, achten Sie darauf, jedes Element fokussiert zu halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Cross-Referenzen](#cross-referenzen_verlinkung) zu verwandten Themen innerhalb MDNs, und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die `@layer`-Seite.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt im Format einer [Aufzählungsliste](#listen) mit jedem Element in der Liste als Phrase. Im Bereich [Learn web development](/de/docs/Learn_web_development) auf MDN folgt der Siehe auch Abschnitt hingegen dem [Definitionslisten](#definitionslisten) Format.

Um Konsistenz über alle MDN Web Docs zu wahren, beachten Sie bitte die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitts.

#### Linktext

- Der Linktext sollte mit dem Titel der Seite oder des Abschnitts, zu der/dem verlinkt wird, übereinstimmen. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA states and properties":
  - **Richtig**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satz-Groß- und Kleinschreibung im Linktext, auch wenn dieser von dem Titel der verlinkten Seite oder des Abschnitts abweicht. Es kann sein, dass die im Seiten- oder Abschnittstitel verwendete Groß- oder Kleinschreibung falsch ist. Beispielsweise wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satz-Groß- und Kleinschreibung:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Bei externen Links verwenden Sie ebenfalls die Satz-Groß- und Kleinschreibung, selbst wenn die Großschreibung auf der Zielartikelebene unterschiedlich ist. Dies soll Konsistenz über die MDN Web Docs hinweg gewährleisten. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie auf der Seite [Linking to reference pages](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages) im Abschnitt häufig verwendeter Makros erklärt ist. Die Verwendung des Makros fügt eine Codeformatierung zum Schlüsselwort im Linktext hinzu, wie im nächsten Beispiel gezeigt.
- Es wird kein Artikel ("Ein", "Eine", "Das") am Anfang des Listenelements benötigt. Kein Satzzeichen ist am Ende des Listenelements erforderlich, da es sich mit Sicherheit um einen Begriff oder eine Phrase handelt.
  - **Richtig**: {{cssxref("revert-layer")}}
  - **Falsch**: Das {{cssxref("revert-layer")}} Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie eventuell mit Backticks (`` ` ``) Codeformatierung zum Schlüsselworttext hinzu, selbst wenn die Formatierung nicht in Seitentiteln und Abschnittstiteln verwendet wird. Zum Beispiel für den Seitentitel "Array() constructor" wird der Linktext [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den umgebenden beschreibenden Text des Links minimal. Falls eine Beschreibung erforderlich ist, fügen Sie diese nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne Endpunkt. Halten Sie den gesamten verlinkten Text am Anfang, um das Scannen der Liste von Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Kontrollkästchen
- Verwenden Sie kein "und" vor dem letzten Element in der Aufzählung.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Versuchen Sie bei externen Links, die Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) anzugeben, sofern dies möglich und angemessen ist. Diese Informationen geben den Lesern eine gute Vorstellung vom Ziel, das sie beim Klick auf den Link erreichen werden. Das Veröffentlichungs- oder Aktualisierungsdatum hilft Lesern, die Relevanz des verlinkten Artikels einzuschätzen und hilft auch den Wartungsteams von MDN, Links zu Artikeln zu überprüfen, die lange nicht aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zum externen Artikel [Top-level await](https://v8.dev/features/top-level-await), zusammen mit einer Quelle und Jahresinformation:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch Autorennamen angeben. Einige Beispiele sind im Abschnitt [Weiterführende Lektüre](/de/docs/MDN/Writing_guidelines/Further_reading#language_grammar_and_spelling) aufgelistet. Bei Blogbeiträgen oder GitHub-Repositories, die Sie verlinken könnten, verzichten Sie bitte auf die Angabe der Autorennamen.

#### Reihenfolge der Links

- List the links to MDN pages in the order of reference pages first, followed by links to the related guides and tutorial pages. Diese vorgeschlagene Reihenfolge dient hauptsächlich der besseren Scanbarkeit der Listenelemente.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links auf und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links befolgen Sie die alphabetische oder einfache-zu-fortgeschrittene Reihenfolge, je nachdem, was für den Kontext sinnvoller ist.

### Unterseiten

Wenn Sie Artikel zu einem Thema oder Themenbereich hinzufügen möchten, erstellen Sie dabei typischerweise eine Landing-Seite und fügen für jeden der einzelnen Artikel Unterseiten hinzu.
Die Landing-Seite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können das Einfügen der Seiten in die Liste mithilfe einiger von uns erstellter Makros automatisieren.

Ein Beispiel dafür ist der Aufbau des [JavaScript](/de/docs/Web/JavaScript) Leitfadens:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Haupt-Inhaltsverzeichnisseite
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel ganz oben in der Hierarchie zu platzieren, was die Seite verlangsamt und die Suche und Navigation innerhalb der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, das der Teil der URL der Seite ist, der auf `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Ebene von Hierarchie erstellen, sollte die neue Ebene im Slug nur ein Wort oder zwei lang sein.
- Slugs sollten ein Unterstrich für ein mehrteiliges Komponent verwenden, wie in `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Beachten Sie die Satz-Groß- und Kleinschreibung für jeden Komponent eines Slugs, wie in `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und sie strukturieren auch die Seitenhierarchie in der Brotkrumenliste oben auf der Seite. Ein Seitentitel kann sich von dem "Slug" der Seite, wie im Abschnitt [Slugs](#slugs) erklärt, unterscheiden.

Behalten Sie folgende Richtlinien im Kopf, während Sie die Titel schreiben:

- **Groß- und Kleinschreibung Stil**: On MDN Web Docs, Seitentitel und Abschnittsüberschriften sollten Satz-Groß- und Kleinschreibung verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle von Überschriften-Großschreibung:
  - **Richtig**: "A new method for creating JavaScript rollovers"
  - **Falsch**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilanweisung geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir kommen schrittweise zu ihnen.

- **Allgemeine Richtlinien**: Einen Inhaltsplan zu erstellen und wie Sie diesen strukturieren, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis zu erstellen, kann Ihnen helfen zu entscheiden, wie Sie Informationen anordnen möchten. Decken Sie erst einfache Konzepte ab und gehen Sie dann auf kompliziertere und fortgeschrittene Konzepte über. Decken Sie konzeptionelle Informationen zuerst ab und gehen Sie dann zu praxisorientierten Themen über.

  Halten Sie die folgenden Leitlinien im Kopf, wenn Sie Titel für eine Seite und Abschnitte oder Unterabschnitte schreiben:
  - **Von oben nach unten**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) angegeben, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriftenebenen für allgemeinere einführende Titel und verwenden Sie spezifischere Titel, wenn Sie zu niedrigeren Überschriftenebenen übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte unter einer höheren Überschrift zusammengefasst werden. Das Benennen von Titeln zu verschiedenen Abschnitten kann Ihnen bei dieser Übung helfen.
  - **Titel kurz halten**: Kürzere Titel sind leichter in Text und Inhaltsverzeichnissen zu überfliegen.
  - **Titel spezifisch halten**: Verwenden Sie den Titel, um spezifische Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" statt "Einführung" oder "Übersicht".
  - **Titel fokussiert halten**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Dafür versuchen Sie, so weit wie möglich, die Konjunktion "und" in einem Titel zu vermeiden.
  - **Parallele Struktur verwenden**: Verwenden Sie ähnliche Formulierungen für Titel auf derselben Überschriftenebene. Zum Beispiel, wenn ein Titel der Ebene `###` ein Gerundium, d.h. Wörter mit der Endung "-ing" wie "Installing", verwendet, dann versuchen Sie, alle Titel der Ebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverb wie "Use", "Configure" beginnt, dann schreiben Sie alle Titel der Ebene beginnend mit einem Imperativverb.
  - **Häufigen Begriff in niedrigerer Überschrift vermeiden**: Wiederholen Sie keinen Text aus dem Titel einer höheren Überschrift in Titeln niedrigerer Ebenen. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Sätzen" statt "Kommas nach einleitenden Sätzen".
  - **Nicht mit Artikel beginnen**: Vermeiden Sie das Starten von Titeln mit Artikeln „a“, „an“ oder „the“.
  - **Einleitinformationen hinzufügen**: Nach einem Titel fügen Sie einige einführende Texte hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Code-Beispielen für die Shell-Eingabeaufforderung](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zu Gebrauch und Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, auf den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zurückzugreifen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, können die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite für den Gebrauch der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Hinweise; sehr gut für Nicht-Muttersprachler, besonders für den Gebrauch von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
