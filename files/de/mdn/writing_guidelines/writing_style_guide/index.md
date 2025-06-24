---
title: Leitfaden für den Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieser Leitfaden für den Schreibstil beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen der Sicherstellung von Konsistenz in Sprache und Stil auf der gesamten Website. Dennoch sind wir mehr an Inhalten interessiert als an deren Formatierung, daher fühlen Sie sich nicht verpflichtet, den gesamten Leitfaden für den Schreibstil zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht enttäuscht oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um diesen Leitfaden zu befolgen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine inhaltliche Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentationen. Andere Sprachen können (und sind willkommen), ihre eigenen Stilrichtlinien zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungs-Teamseite veröffentlicht werden. Dennoch sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten konsultiert werden.

Nachdem die allgemeinen Schreibrichtlinien aufgelistet sind, beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und wie verschiedene Komponenten auf einer Seite formatiert werden, wie z.B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das Thema zu verstehen.

Die folgenden Unterabschnitte enthalten Empfehlungen, um dies zu erreichen:

- [Betrachten Sie Ihre Zielgruppe](#betrachten_sie_ihre_zielgruppe)
- [Betrachten Sie die drei Cs des Schreibens](#betrachten_sie_die_drei_cs_des_schreibens)
- [Bieten Sie relevante Beispiele an](#bieten_sie_relevante_beispiele_an)
- [Bieten Sie eine beschreibende Einführung an](#bieten_sie_eine_beschreibende_einführung_an)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie unter Berücksichtigung von SEO](#schreiben_sie_unter_berücksichtigung_von_seo)

### Betrachten Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Hinterkopf. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerk-Konzepte eingehen, wie es eine typische Seite über Netzwerke tun würde. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Betrachten Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind klar, prägnant und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, und berücksichtigen Sie die Zielgruppe.
- **Prägnant**: Bei jedem Dokument ist es wichtig zu wissen, wie viel gesagt werden muss. Wenn Sie zu viele Details bereitstellen, wird die Seite mühsam zu lesen und selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie dieselbe Wortwahl konsistent auf der Seite und über mehrere Seiten hinweg verwenden.

### Bieten Sie relevante Beispiele an

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, für was jeder Parameter verwendet wird und um eventuelle Spezialfälle zu klären, die auftreten können.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und zur Lösung auftretender Probleme zu demonstrieren.

### Bieten Sie eine beschreibende Einführung an

Stellen Sie sicher, dass die einleitenden Absätze vor der ersten Überschrift die Informationen, die auf der Seite behandelt werden, sowie möglicherweise das, was Leser erreichen können, nachdem sie den Inhalt durchgegangen sind, angemessen zusammenfassen. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder in einer Anleitung sollten die einleitenden Absätze den Leser über die behandelten Themen sowie das erforderliche Vorwissen, das der Leser haben sollte, informieren, falls vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den verwandten Informationen, und Hinweise auf Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel für eine Einführung ist viel zu kurz. Es fehlen zu viele Informationen, wie z.B. was es genau bedeutet, Text zu "streichen", wo der Text gezeichnet wird, usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet einen String.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, die jetzt aber viel zu lang ist.
  Zu viele Details sind enthalten, und der Text geht zu tief auf die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn die Methode **`CanvasRenderingContext2D.strokeText()`** des Canvas 2D-APIs aufgerufen wird, werden die Zeichen im angegebenen String ab den angegebenen Koordinaten mithilfe der aktuellen Stiftfarbe gezeichnet.
  > Im Fachjargon der Computergrafik bedeutet "streichen", die Umrisse der Glyphen im String zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schrift des Kontexts gezeichnet, wie sie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben ist.
  >
  > Die Position des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung des Strings relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird der String begonnen bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte des Strings liegt.
  > Wenn der Wert `"left"` ist, wird der String beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er bei der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der Ihnen ermöglicht, eine maximale Breite für den String in Pixeln festzulegen.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen so breiten Raum zu passen, wenn er gezeichnet wird.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen eines Strings farblich gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine angemessene Einführung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die Methode **`strokeText()`** des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), zeichnet (die Umrisse von) die Zeichen eines angegebenen Strings, verankert an der durch die angegebenen X- und Y-Koordinaten angegebenen Position.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Weitere Details und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite Zeichnen von Grafiken sowie in unserem Hauptartikel zum Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen dringend, Texte so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Verwenden Sie anstelle von **dummy** den Begriff **placeholder**.
- Die Begriffe **crazy** und **insane** sollten in Dokumentationen nicht notwendig sein; falls doch, ziehen Sie **fantastic** in Betracht.

Es ist am besten, eine geschlechtsneutrale Sprache in jedem Schreiben zu verwenden, in dem das Geschlecht für den Sachverhalt irrelevant ist.
Wenn Sie zum Beispiel über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "he"/"his" in Ordnung; aber wenn das Subjekt eine Person jeden Geschlechts sein kann, ist "he"/"his" unangebracht.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlauben die Verwendung des dritten Person Plurals, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechtsneutralen Pronomen umfassen "they," "them", "their," und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzer plural zu machen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, den Satz umzuschreiben und die Pronomen zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der um Erlaubnis zur Webcam-Nutzung bittet, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Webcam-Nutzung bittet, erscheint."

Dieses letzte Beispiel, mit dem Problem umzugehen, ist wohl besser.
Es ist nicht nur grammatikalisch richtiger, sondern entfernt einige der Komplexitäten, die mit der Geschlechterregelung in verschiedenen Sprachen verbunden sind, die sehr unterschiedliche Geschlechtsregeln haben können.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Verwenden Sie zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und Richtungsausdrücken wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein spezifisches visuelles Layout voraus, das nicht auf alle Benutzer zutrifft. Sie können auch unklar oder irreführend sein – besonders für Benutzer, die auf Bildschirmleser angewiesen sind oder für solche, die übersetzte Inhalte lesen, bei denen Richtungssprache mehrdeutig oder schwer genau zu übersetzen sein kann. In responsiven Layouts, wo sich die Position des Inhalts je nach Bildschirmgröße ändern kann, können solche Richtungsreferenzen ungenau werden. Diese Art von Sprache kann die Zugänglichkeit behindern und es allen Benutzern erschweren, sich durch den Inhalt zu navigieren oder ihn zu verstehen.

Verwenden Sie stattdessen beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element, auf das verwiesen wird, klar identifizieren. Beziehen Sie sich auf Abschnitte anhand ihrer Titel oder Überschriften, und beziehen Sie sich auf Beispiele oder Code-Snippets durch das, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Siehe den [Zugänglichkeitsabschnitt](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) weiter unten auf dieser Seite."
- **Falsch**: "Siehe den Zugänglichkeitsabschnitt unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mit Hilfe von CSS-Übergängen."
- **Falsch**: "Im unteren Codebeispiel animieren wir einen Kreis mit Hilfe von CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorherigen Abschnitt mit dem Titel 'Erstellen einer Medienabfrage' erklärt."
- **Falsch**: "Dieses Konzept wird im obigen Abschnitt erklärt."

Vermeiden Sie es außerdem, vage Linktexte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel" zu verwenden. Beschreibende Linktexte geben allen Lesern einen besseren Kontext und verbessern die Erfahrung für Benutzer von Assistenztechnologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Erfahren Sie mehr über [die Bestellungen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Indem Sie diese Richtlinien befolgen, tragen Sie dazu bei, die Dokumentation von MDN für alle Benutzer zugänglich, klar und benutzerfreundlich zu gestalten, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben Sie unter Berücksichtigung von SEO

Während das primäre Ziel jeder Schreibarbeit auf MDN Web Docs immer sein sollte, über offene Webtechnologie zu informieren und Entwickler schnell lernen zu lassen, was sie tun möchten, oder die kleinen Details zu finden, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das von uns geschriebene Material _finden_ können. Wir können dies erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Auge behalten.

Dieser Abschnitt deckt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte ab, um sicherzustellen, dass Suchmaschinen unsere Materialien leicht kategorisieren und indizieren können, damit Leser leicht finden können, was sie brauchen. Zu den SEO-Richtlinien gehört die Gewährleistung, dass jede Seite, an der Autoren und Redakteure arbeiten, angemessen gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel ordnungsgemäß zu indizieren.

Die folgende Checkliste ist gut zu beachten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen richtig indexiert werden:

- **Stellen Sie sicher, dass sich Seiten nicht zu sehr ähneln**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema handeln, auch wenn dies nicht der Fall ist.
  Wenn beispielsweise eine Schnittstelle die Eigenschaften `width` und `height` hat, kann es leicht passieren, dass der Text auf den beiden Seiten, die diese zwei Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Wörtern und demselben Beispiel. Das macht es Suchmaschinen schwer zu wissen, welche Seite welche ist, und sie teilen den Pagerank, was dazu führt, dass beide schwerer zu finden sind, als sie es sein sollten.

  Es ist also wichtig, sicherzustellen, dass jede Seite ihre eigenen Inhalte hat. Die folgenden Vorschläge können Ihnen dabei helfen, dies zu erreichen:

  - **Erklären Sie einzigartige Konzepte**: Betrachten Sie Anwendungsfälle, bei denen es mehr Unterschiede gibt, als man denken würde. Im Fall von Dokumentation der `width`- und `height`-Eigenschaften könnten Sie zum Beispiel über die unterschiedlichen Verwendungen von horizontalem und vertikalem Raum sprechen und eine Diskussion über die entsprechenden Konzepte führen. Vielleicht können Sie die Nutzung von `width` im Hinblick auf das Platzschaffen für eine Seitenleiste erwähnen, während `height` verwendet wird, um vertikales Scrollen oder Fußzeilen zu handhaben. Auch das Hinzufügen von Informationen zu Zugränglichkeitsfragen ist eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in solchen Situationen sind oft noch ähnlicher als der Haupttext, da die Beispiele möglicherweise beide (oder alle) der ähnlichen Methoden oder Eigenschaften verwenden, was keine wirklichen Änderungen erfordert, wenn sie wiederverwendet werden. Also verwerfen Sie das Beispiel und schreiben Sie ein neues, oder zumindest bieten Sie mehrere Beispiele an, von denen einige unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch eine Abdeckung darüber, wie es funktioniert, in einem angemessenen Detaillierungsgrad angesichts der Komplexität des Themas und der Zielgruppe, sollten enthalten sein.

  Der einfachste Weg, eine übermäßige Ähnlichkeit zu vermeiden, ist natürlich, den Artikel vollständig neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in SEO-Jargon "thin pages" genannt), werden solche Seiten von Suchmaschinen nicht genau (oder gar nicht) katalogisiert. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie stellen Sie sicher, dass Seiten auf MDN Web Docs in der Regel nicht kürzer als etwa 300 Wörter sind. Erhöhen Sie den Inhalt einer Seite nicht künstlich, aber betrachten Sie dies als eine Mindestzielvorgabe, wann immer möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genügend Inhalte haben, um ordentlich durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie sie hinzu. Wir versuchen, offene "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Struktur der Seite überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für den typ [Seite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types), den sie besitzt, richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden - dies ist ein besonders häufiger Bereich, in dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist leicht, eine kurze Erklärung zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt wurden. Gibt es Spezialfälle? Gibt es bekannte Einschränkungen, die der Leser wissen sollte?
  - **Beispiele hinzufügen**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer im Bereich von Anfängern bis Fortgeschrittenen wahrscheinlich verwenden, sowie alle fortgeschritteneren, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einem Überblick darüber, was das Beispiel tun wird, fortfahren, welches zusätzliche Wissen möglicherweise erforderlich ist, um es zu verstehen, und so weiter. Nach dem Beispiel (oder verstreut innerhalb der Teile des Beispiels) sollte Text enthalten sein, der erklärt, wie der Code funktioniert. Kümmern Sie sich nicht um Details oder Fehlerhandhabung in Beispielen. Denken Sie daran, dass Benutzer _Ihr_ Beispiel kopieren und in ihre eigenen Projekte einfügen werden, und Ihr Code _wird_ auf Produktionsseiten verwendet werden! Sehen Sie sich unsere [Richtlinien für Code-Beispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für nützliche Informationen an.
  - **Verwendungssituationen erklären**: Wenn es besonders häufige Verwendungssituationen für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer selbstständig herausfindet, dass die dokumentierte Methode ein häufiges Entwicklungsproblem lösen kann, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, die erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie auf allen Bildern und Diagrammen ordnungsgemäße [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Texte hinzu. Dieser Text sowie Beschriftungen auf Tabellen und anderen Figuren zählen, weil Spinnen keine Bilder durchsuchen können, und so sagt `alt`-Text Suchmaschinen-Crawlern, welchen Inhalt das eingebettete Medium hat.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Keywords oder nicht mit dem Thema zusammenhängende Keywords zu verwenden, um Suchmaschinenplatzierungen zu beeinflussen; diese Art von Verhalten ist leicht zu erkennen und wird in der Regel bestraft.
    > Ebenso **fügen Sie nicht** repetitives, unnützes Material oder Blöcke von Keywords innerhalb der tatsächlichen Seite hinzu, um die Größe und das Suchranking der Seite zu verbessern. Dies schadet mehr als es nützt, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Konzentrieren Sie sich auf Themeninhalte**: Es ist weitaus besser, Inhalte um das Thema der Seite herum zu schreiben als um ein bestimmtes Keyword. Es ist sehr wahrscheinlich, dass es viele Keywords geben wird, die Sie für ein bestimmtes Thema einfügen könnten; tatsächlich erstellen viele SEOs eine Liste von 5-100 verschiedenen Keywords (variiert zwischen kurzen, mittleren und langen Keywords), um sie in ihrem Artikel einzuschließen, abhängig von der Länge. Durch das Diversifizieren Ihrer Formulierung wird weniger Wiederholung erreicht.

## Schreibstil

Abgesehen vom Schreiben grammatikalisch korrekter Sätze in Englisch, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um die Konsistenz der Inhalte auf MDN Web Docs sicherzustellen.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das unter Verwendung des ersten Buchstabens jedes Wortes eines Ausdrucks erstellt wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Beim ersten Erwähnen eines Begriffs auf einer Seite erweitern Sie Akronyme, die Benutzern wahrscheinlich unbekannt sind. Im Zweifelsfall den Begriff erweitern. Noch besser ist es, ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary)-Eintrag zu verlinken, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->

  - **Richtig**: Webbrowser (z.B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B.: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  In regulärem Text (d.h. Text außerhalb von Notizen oder Klammern) verwenden Sie die englische Entsprechung der Abkürzung.

  - **Richtig**: ... Webbrowser und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser e.g., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abkürzung | Latein           | Englisch                     |
  | --------- | ---------------- | ---------------------------- |
  | cf.       | _confer_         | vergleichen                  |
  | e.g.      | _exempli gratia_ | zum Beispiel                 |
  | et al.    | _et alii_        | und andere                   |
  | etc.      | _et cetera_      | und so weiter                |
  | i.e.      | _id est_         | das heißt, in anderen Worten |
  | N.B.      | _nota bene_      | beachten Sie                 |
  | P.S.      | _post scriptum_  | Nachschrift                  |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich sinnvoll ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder verwirrt oder sie nicht verstehen.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich entscheiden, dies zu tun. Zum Beispiel sollten Sie darauf achten, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Für Pluralformen von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie keinesfalls ein Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Beim Verwenden der Kontraktion wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie Standardregeln der englischen Großschreibung im Fließtext und schreiben Sie "World Wide Web" groß. Es ist in Ordnung, "web" in Kleinbuchstaben (allein oder als Modifikator) und "internet" zu verwenden.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, sodass Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN finden.
> Ändern Sie diese gerne, während Sie andere Änderungen vornehmen, aber das Bearbeiten eines Artikels nur zur Änderung der Großschreibung ist nicht notwendig.

Tastaturtasten sollten mit Satzstil-Großschreibung, nicht aber Ganzbuchstabengroßschreibung verwendet werden.
Zum Beispiel "<kbd>Enter</kbd>" und nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die Taste "<kbd>Escape</kbd>" abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie z.B. Marken, die Großbuchstaben enthalten, oder Wörter, die sich vom Namen einer Person ableiten (es sei denn, das Wort wird innerhalb von Code verwendet und der Codesyntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine eingetragene Marke von Oracle Corporation, sollte immer als solche geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, informell zu sein, sodass Sie gerne Kontraktionen verwenden können (z.B. "don't", "can't", "shouldn't"), wenn Sie möchten.

### Zahlen und Ziffern

- **Kommas**: Im laufenden Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (abgesehen von Daten in Codeschnipseln) verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Pluralformen von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englisch-formatige Pluralformen, nicht die Formen, die von Latein oder Griechisch beeinflusst sind.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „geschwungenen“ Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir ausschließlich gerade Anführungszeichen und Apostrophe. Das liegt daran, dass wir uns für Konsistenz für eine der beiden Optionen entscheiden müssen. Wenn geschwungene Anführungszeichen oder Apostrophe den Weg in Code-Snippets finden, selbst in Inline-Snippets, könnten Leser diese kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht tun).

- **Richtig**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen“.
- **Falsch**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen“.

### Kommas

Die folgende Liste beschreibt einige der häufigsten Situationen, in denen wir auf die Regeln für die Verwendung von Kommas achten müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die normalerweise am Anfang eines Satzes steht. Verwenden Sie ein Komma nach einer einleitenden Klausel, um diese von der folgenden unabhängigen Klausel zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie ein Komma verwendet wird."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie ein Komma verwendet wird."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, finden Sie unseren Schreibstil-Leitfaden."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, finden Sie unseren Schreibstil-Leitfaden."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."

- **Vor Konjunktionen**: Das Serialkomma (auch bekannt als "das Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serialkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit dem Zug, Flugzeug und Auto reisen."
  - **Falsch**: "Ich werde mit dem Zug, Flugzeug und Auto reisen."

  Verwenden Sie kein Komma vor „und“ und „oder“ in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "Mein Hund ist süß und klug."
  - **Falsch**: "Mein Hund ist süß, und klug."

  Verwenden Sie ein Komma vor den Konjunktionen „und“, „aber“ und „oder“, wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch sehr lang oder kompliziert mit der Konjunktion wird, ziehen Sie in Betracht, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt durchführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt durchführen, aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor „that“ und „which“**: Eine restriktive Klausel ist essentiell für die Bedeutung des Satzes und muss nicht mit Kommas vom restlichen Satz abgesetzt werden. Eine restriktive Klausel wird normalerweise durch „that“ eingeführt und **sollte nicht** von einem Komma vorangegangen sein.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wichtigen Informationen beinhaltet, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wichtigen Informationen beinhaltet, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht restriktive Klausel liefert zusätzliche Informationen und ist nicht essentiell für die Bedeutung des Satzes. Eine nicht restriktive Klausel wird normalerweise durch „which“ eingeführt und sollte von einem Komma vorangegangen sein.

  - **Richtig**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Feature ist."
  - **Falsch**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Feature ist."

- **Vor „such as“**: Wenn „such as“ Teil einer nicht restriktiven Klausel ist und der verbleibende Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor „such as“.

  - **Richtig**: „Das Array-Objekt verfügt über Methoden, um Arrays auf verschiedene Weise zu manipulieren, wie z.B. das Zusammenfügen, Umkehren und Sortieren.“
  - **Falsch**: „Das Array-Objekt verfügt über Methoden, um Arrays auf verschiedene Weise zu manipulieren, wie z.B. das Zusammenfügen, Umkehren und Sortieren.“

  Das folgende Beispiel zeigt, wann kein Komma bei „such as“ verwendet wird. In diesem Fall ist die Klausel, in der „such as“ enthalten ist, für die Bedeutung des Satzes notwendig.

  - **Richtig**: „Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen.“
  - **Falsch**: „Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen.“

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Englisch-Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), sofern dieser Eintrag nicht als alternative Schreibweise oder als primär in einer nicht-amerikanischen Form von Englisch verwendet angegeben ist.
Wenn Sie zum Beispiel [„behaviour“](https://www.dictionary.com/browse/behaviour) nachschlagen (mit einem zusätzlichen _u_ zur amerikanischen Standardform hinzugefügt), finden Sie die Phrase „Hauptsächlich Britisch“ gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternative Schreibweise.

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird jede Woche ausgeführt und erzeugt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und überprüfte Wörter enthalten, die nicht in den Standardwörterbüchern sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer als falsch gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungs-Konfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter Fachbegriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff „Element“, um sich auf HTML- und XML-Elemente zu beziehen, anstatt „Tag“. Darüber hinaus sollte das Element in spitze Klammern "„<>"“gefasst und mit Backticks (`` ` ``) formatiert werden. Zum Beispiel wird die Verwendung von \<input\> innerhalb von Backticks es als `<input>` setzen, wie es erwartet wird.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, welches das Element stylen, die spitzen Klammern "„<>"“hinzufügen, sowie einen Link zu seiner Referenzseite hinzufügen wird.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff „Argumente“ wann immer möglich für Konsistenz.

- **Benutzeroberflächenaktionen**: In Tasksequenzen beschreiben Sie Benutzeroberflächenaktionen im Imperativmodus. Identifizieren Sie das Benutzerschnittstellenelement anhand seines Etiketts und Typs.
  - **Richtig**: „Klicken Sie auf die Schaltfläche Bearbeiten.“
  - **Falsch**: „Klicken Sie auf Bearbeiten.“

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist auch die passive Stimme akzeptabel, gegeben der informellen Stimmung unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite, wie Überschriften, Hinweise, Links und Beispiele, zu befolgen sind.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftsstufen](#überschriftsstufen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt "Siehe auch"](#abschnitt_"siehe_auch")
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste zeigt einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Beispiel sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`)-Überschrift, um das Szenario zu beschreiben, das durch das Codebeispiel demonstriert wird. Zum Beispiel: „Verwendung von Offsetdruck“ und „Zurücksetzen auf den Stil in der vorherigen Schicht“.
  - **Beschreibung**: Eine kurze Beschreibung, die dem Beispielcode vorangeht und auf die Besonderheiten des Beispiels eingeht, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel: „Im folgenden Beispiel werden zwei Kaskadenschichten im CSS definiert, `base` und `special`.“
  - **Erklärung der Ergebnisse**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und dessen Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile zu unterteilen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich, sich bewusst zu sein, dass alle Codeblöcke des Beispiels, die denselben Typ haben (HTML, CSS und JavaScript), vor der Ausführung des Beispiels zusammengeführt werden. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, jeweils optional mit eigenen Beschreibungen, Überschriften usw. Dies macht das Dokumentieren von Code äußerst leistungsfähig und flexibel.

Um mehr darüber zu erfahren, wie Codebeispiele für MDN Web Docs gestaltet oder aufgebaut werden sollen, sehen Sie sich unsere [Richtlinien für die Formatierung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide) an.

### Querverweise (Verlinkung)

Wenn Sie auf eine andere Seite oder den Abschnitt einer Seite auf MDN anhand ihres Titels verweisen, folgen Sie der Satz-Schreibweise im Linktext (entspricht dem Seiten- oder Abschnittstitel). Verwenden Sie die Satz-Schreibweise im Linktext, auch wenn sie von dem Seitentitel oder Abschnittstitel abweicht (es könnte sein, dass die in den Titeln verwendete Großschreibung falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um sich auf eine Seite auf MDN anhand ihres Titels zu beziehen, verwenden Sie den folgenden Stil:

- **Richtig**: "Beziehen Sie sich auf den [Bestellung von flexiblen Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Falsch**: "Beziehen Sie sich auf den "[Bestellung von flexiblen Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Führen Sie einen konsistenten Stil beim Verlinken von Abschnitten innerhalb einer Seite:

- **Richtig**: "Für weitere Informationen beziehen Sie sich auf den [Allokation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Abschnitt im _Speicherverwaltung_ Leitfaden."

Wenn der Abschnitt, auf den Sie verlinken, auf derselben Seite ist, können Sie den Standort des Abschnitts mit beschreibenden Phrasen anzeigen lassen.

- **Richtig**: "Dieses Konzept wird im [Barrierefreiheit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt dieses Dokuments näher beschrieben."
- **Falsch**: "Dieses Konzept wird im [Barrierefreiheit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt unten näher beschrieben."

Auf MDN existiert auch eine andere Möglichkeit, um auf eine Referenzseite zu verlinken, indem ein Makro verwendet wird. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf eine CSS-Eigenschaftsreferenzseite zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweis-Richtlinien in den [Siehe auch](#siehe_auch)-Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in spezifischen Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es angebracht ist, einen externen Link auf MDN Web Docs hinzuzufügen oder nicht. Pull-Anfragen, die externe Links hinzufügen, werden abgelehnt, wenn sie diese Richtlinien nicht beachten.

Wenn Sie überlegen, einen externen Link zu MDNs [Webentwicklung lernen](/de/docs/Learn_web_development) Inhalte hinzuzufügen, lesen Sie bitte auch [MDN Web Docs Schreibrichtlinien > Partner Links und Einbindungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen müssen Sie sicherstellen, dass das Risiko des folgenden, wann immer Sie über einen externen Link nachdenken, minimal ist:

- Gebrochene oder veraltete Links
- Erscheinung von Unterstützung, besonders für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, überlegen Sie, das Inhalt innerhalb von MDN Web Docs zu verweisen. Interne Links sind leichter zu pflegen und machen den kompletten MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, dauerhaft und allgemein vertrauenswürdig sind. Sie sollten es bevorzugen, Links zu externen Inhalten hinzuzufügen, die sind:

  - Einzigartig oder unentbehrlich (z.B. ein IETF RFC)
  - Notwendig für Zitate, Zitationen oder Anerkennung (z.B. als Teil einer Creative Commons-Anerkennung)
  - Wird eher für das Thema gepflegt als solche Inhalte selbst auf MDN Web Docs zu integrieren (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder community-getrieben, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen Relevanz, Wartbarkeit, Zugänglichkeit oder setzen Lesern andere Hindernisse. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die sind:

  - Generisch oder nicht spezifisch (z.B. die Startseite eines Anbieters, anstatt die dazugehörige Dokumentation)
  - Flüchtig oder nicht gepflegt (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Kostenpflichtig (z.B. ein teurer Kurs, der weit über das hinausgeht, was Bastler, Schüler oder Leser in einkommensschwächeren Ländern sich leisten können)
  - Nicht zugänglich (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogpost, ein Konferenzgespräch oder ein GitHub-Repository einen Wert hat, kann das Verlinken zu den eigenen Ressourcen den Eindruck eines Interessenkonflikts erwecken. Denken Sie zweimal nach, bevor Sie Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Anfrage offenlegen. Andernfalls könnte Ihre weitere Teilnahme an MDN Web Docs gefährdet sein.

  Manchmal sind solche Links relevant und angebracht. Wenn Sie zum Beispiel der Herausgeber einer Spezifikation sind und zur Dokumentation im Zusammenhang mit dieser Spezifikation beitragen, ist das Verlinken zu dieser Spezifikation erwartet und akzeptabel. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kurze, leichter zu merkende URLs (auch als „Kurzlinks“ bekannt) zu verkürzen. Allerdings verschleiern sie auch das Ziel der URL. Außerdem kann bei bestimmten Shortenern das Ziel nach der Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die durch Drittanbieter-Kurz-URL-Dienste generiert wurden. Wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die langfristige `example.com`-URL.

Auf der anderen Seite, sind zuerst-seitige Kurz-URL-Dienste, die von den Organisationen, die auch die Ziel-URLs verwalten, unterstützt werden, erlaubt. `https://bugzil.la` gehört und wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` umleitet, eine von Mozilla betriebene Domain. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsstufen

Wenn ein neuer Absatz einen neuen Abschnitt startet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenstufen in absteigender Reihenfolge ohne Stufen zu überspringen: `##`, dann `###`, und dann `####`; diese entsprechen den [HTML-Überschriftselementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Elementen.

`##` ist die höchste erlaubte Stufe, da `#` für den Seitentitel reserviert ist.
Es wird empfohlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, ein viertes Überelement hinzuzufügen, sollten Sie erwägen, den Artikel in mehrere kleinere Artikel mit einer Hauptseite aufzuteilen. Alternativ erwägen Sie, die Informationen als Aufzählungspunkte zu präsentieren, um die Verwendung einer vierten Übersicht zu vermeiden.

Behalten Sie die folgenden Punkte im Hinterkopf, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine Einzelabschnitte.** Unterteilen Sie ein Thema nicht in ein einziges Unterthema.
  Es ist entweder zwei oder mehr Unterüberschriften oder keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros in Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z.B. "Using `FooBar` interface").
- **Erstellen Sie keine „stolpernde Überschriften“.** Dies sind Überschriften, gefolgt von einer Unterüberschrift, ohne irgendeinen Text dazwischen.
  Dies sieht nicht gut aus und lässt die Leser ohne jeglichen erklärenden Text am Anfang des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr freizügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder mindestens eine, die mit unserer generellen Inhaltslizenz kompatibel ist — [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Für Bilder komprimieren Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Bei `SVG`-Dateien führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende hat.
- Jedem Bild muss ein [deskriptiver `alt`-Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) beigefügt werden.

### Listen

Listen sollten über alle Seiten hinweg konsistent formatiert und strukturiert sein.
Einzelne Listenelemente sollten mit geeigneter Zeichensetzung geschrieben werden, unabhängig vom Listenformat.
Je nachdem, welchen Listentyp Sie erstellen, möchten Sie Ihr Schreiben jedoch wie in den folgenden Abschnitten beschrieben anpassen. Fügen Sie in beiden Fällen einen einführenden Satz ein, der die Informationen in der Liste beschreibt.

- **Aufzählungspunkte-Listen**: Aufgezählte Listen sollten verwendet werden, um verwandte Informationen gruppiert darzustellen. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente, die ein Verb oder Subjekt oder beides fehlen) in aufgezählten Listen sollten standardmäßige Zeichensetzung entsprechen — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes ein Punkt stehen, einschließlich des letzten Satzes des Elements, genau wie es im Paragraphen erwartet würde. Dies ist ein Beispiel für eine korrekt strukturierte Liste mit Aufzählungspunkten:

  > In diesem Beispiel sollten wir einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit etwas weiterer Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur sich von Punkt zu Punkt wiederholt. In diesem Beispiel spricht jeder Aufzählungspunkt eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt Text Schatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie nach jedem Listenelement einen Punkt, auch wenn ein Listenelement aus drei oder weniger Wörtern besteht. Versuchen Sie jedoch, soweit möglich, die gleiche Struktur für alle Elemente in einer Liste zu befolgen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen aufzulisten. Da Anweisungen komplex sein können, hat Klarheit Priorität, besonders wenn der Text in jedem Listenelement lang ist. Befolgen Sie wie bei aufgezählten Listen standardmäßige Zeichensetzung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz die Anweisungen einleiten. Es ist wichtig, dem Benutzer vor Beginn der Anweisungen Kontext zu bieten.
  > 2. Beginnen Sie mit dem Erstellen Ihrer Anweisungen und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich ausführlich sein, daher ist es wichtig, klar zu schreiben und die korrekte Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das Folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die vorherige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungsschritte bietet, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anleitungszwecke oder um jemanden durch ein geordnetes Verfahren zu führen verwendet werden, stellen Sie sicher, dass jedes Element fokussiert bleibt: eine nummerierte Element pro Schritt.

### Abschnitt "Siehe auch"

Der Großteil der Leitfäden, Referenzseiten und auch Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt im [Aufzählungsliste](#listen) Format mit jedem Element in der Liste als Phrase. In dem [Webentwicklung lernen](/de/docs/Learn_web_development) Abschnitt auf MDN hingegen folgt der Siehe auch Abschnitt dem [Definitionslisten](#definitionslist) Format.

Um Konsistenz in MDN Web Docs zu gewährleisten, sollten Sie die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitts beachten.

#### Linktext

- Der Linktext sollte mit dem Titel der Seite oder des Abschnitts identisch sein, auf den verlinkt wird. Beispielweise, für die [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel „ARIA-Zustände und -Eigenschaften“ wird der Linktext sein:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satz-Schreibweise im Linktext, auch wenn diese von dem Seitentitel oder Abschnittstitel abweicht. Es könnte sein, dass die in den Titeln verwendete Großschreibung falsch ist. Beispielweise wird der Linktext auf der [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite die korrekte Satz-Schreibweise sein:
  - **Richtig**: [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch bei externen Links, verwenden Sie Satz-Schreibweise, selbst wenn die Großschreibung auf der Zielartikelseite unterschiedlich ist. Dies ist, um Konsistenz auf MDN Web Docs sicherzustellen. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie es im Abschnitt [Linken zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_ Seite erklärt wird. Die Verwendung eines Makros wird dem Schlüsselwort im Linktext eine Codeformatierung hinzufügen, wie im nächsten Beispiel gezeigt.
- Kein Artikel („Ein“, „Eine“, „Das“) ist am Beginn des Listenelements für den Link notwendig. Am Ende des Listenelements ist keine Interpunktion erforderlich, da es sich um einen Begriff oder eine Phrase handelt.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: The [`revert-layer`](/de/docs/Web/CSS/revert-layer) keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispiel gezeigt, fügen Sie dem Linktext Codeformatierung hinzu, indem Sie Backticks (`` ` ``) für Schlüsselwörter und Zeichenfolgen verwenden, auch wenn das Format in Seitentiteln und Abschnittstiteln nicht verwendet wird. Beispielweise, für den Seitentitel „Array() constructor“, wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Deskriptiver Text

- Halten Sie den beschreibenden Text um den Link herum minimal. Im Wartungsfall nach einem beschreibenden Text, fügen Sie ihn nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne Punktierung zum Ende. Platzieren Sie den gesamten verlinkten Text am Anfang, um die Liste von links leichter durchsichtbar zu machen.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Kontrollkästchen
- Verwenden Sie vor dem letzten Element in der Serie nicht die Konjunktion "und".
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links versuchen Sie, wo sinnvoll und machbar, den Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung anzugeben. Durch diese Information im Voraus, bekommt der Leser einen klaren Eindruck vom Ziel, das erreicht wird, wenn er auf den Link klickt. Das Veröffentlichungs- oder das letzte Aktualisierungsdatum hilft den Lesern bei der Einschätzung der Relevanz des verlinkten Artikels und hilft auch den MDN-Wartungsteams bei der Überprüfung von Links zu Artikeln, die seit langem nicht aktualisiert wurden. Wenn Sie zum Beispiel einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement stellt ein Beispiel für das Hinzufügen eines Links zu dem [Top-level await](https://v8.dev/features/top-level-await) externen Artikel in dem Siehe auch Abschnitt bereit, zusammen mit der Quell- und Jahresinformation:
  - **Richtig**: [Top-Level-Await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autorennamen hinzufügen. Einige Beispiele sind im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) aufgeführt. Verzichten Sie darauf, bei Blogs oder GitHub-Repositories, die Sie vielleicht verlinken, die Namen der Autoren anzugeben.

#### Reihenfolge der Links

- Listen Sie die Links zu den MDN-Seiten in der Reihenfolge der Referenzseiten zuerst auf, gefolgt von Links zu den verwandten Leitfaden- und Tutorialseiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich der besseren Durchsichtbarkeit der Listenelemente.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen oder von-einfach-zu-schwierig Reihenfolge, was auch immer im Kontext mehr Sinn ergibt.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Fachbereich hinzufügen müssen, tun Sie dies in der Regel, indem Sie eine Hauptseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Hauptseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen zu jeder Seite bieten.
Sie können die Einfügung von Seiten in die Liste mithilfe einiger Makros automatisieren, die wir erstellt haben.

Beispielweise, betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der folgendermaßen aufgebaut ist:

- [Web/JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptübersichtseite
- [Web/JavaScript/Guide/Einführung in JavaScript](/de/docs/Web/JavaScript/Guide/Introduction)
- [Web/JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Web/JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel ganz oben in der Hierarchie zu platzieren, was die Website verlangsamt und die Suche und die Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der ganz oben auf der Seite angezeigt wird, kann von dem "Slug" der Seite, der ein Teil der URL der Seite nach `<locale>/docs/` ist, abweichen. Beachten Sie die folgenden Richtlinien beim Definieren eines Slugs:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte die Komponente dieser Ebene im Slug nur aus ein oder zwei Wörtern bestehen.
- In Slugs sollte ein Unterstrich für eine mehrgliedrige Komponente verwendet werden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie auch in Slugs der Satz-Schreibweise für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Breadcrumb-Liste an der Oberseite der Seite verwendet. Ein Seitentitel kann sich von dem "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt wird.

Behalten Sie die folgenden Richtlinien im Hinterkopf, während Sie Titel verfassen:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Überschriften Satz-Schreibweise verwenden (nur das erste Wort und Eigennamen großschreiben) anstatt der Schlagzeilen-Schreibweise:

  - **Richtig**: „Eine neue Methode zur Erstellung von JavaScript-Rollovers“
  - **Falsch**: „Eine Neue Methode Zur Erstellung Von JavaScript-Rollovers“

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel etabliert wurde. Aktualisieren Sie sie bei Bedarf gerne, wenn Sie mögen. Wir kommen schrittweise dazu.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte beim Schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen helfen zu entscheiden, wie Sie die Informationen bestellen möchten. Decken Sie zuerst einfache Konzepte ab und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Decken Sie konzeptionelle Informationen zuerst ab und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien, wenn Sie Titel für eine Seite und für Abschnitte oder Unterabschnitte schreiben:

  - **Von oben nach unten**: Gehen Sie, wie im Abschnitt [Überschriftsstufen](#überschriftsstufen) erklärt, von höheren `##` zu niedrigeren `####`, ohne Stufen zu überspringen. Verwenden Sie höhere Überschriften für allgemein eingeführte Titel und verwenden Sie spezifischere Titel, um zu niedrigeren Überschriften fortzuschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebene gruppiert sind. Das Benennen von Titeln verschiedener Abschnitte kann Ihnen in dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter im Text und im Inhaltsverzeichnis zu durchschauen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen mitzuteilen, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel „HTML-Elemente“ anstelle von „Einführung“ oder „Überblick“.
  - **Fokussieren Sie Titel**: Verwenden Sie den Titel, um ein Ziel zu übermitteln—eine einzelne Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck versuchen Sie, soweit möglich, die Konjunktion „und“ in einem Titel zu vermeiden.
  - **Verwenden Sie parallele Struktur**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftsstufe. Beispielweise, wenn ein `###` Überschriftenstufen-Titel Gerundien verwendet, d.h. Worte, die mit „-ing“ enden, wie „Installieren“, dann versuchen Sie, alle Titel auf derselben Überschriftenstufe mit Gerundien zu schreiben. Wenn ein Titel mit einem imperativen Verb beginnt, wie „Use“, „Configure“, schreiben Sie alle Titel auf dieser Überschriftenstufe das gleiche.
  - **Vermeiden Sie allgemeine Begriffe in niedrigeren Überschriften**: Wiederholen Sie nicht den Text im Titel einer höheren Überschrift in niedrigeren Titeln. Beispielweise, in einem Abschnitt mit dem Titel „Kommas“, nennen Sie den Titel einer Untersektion „Nach einleitenden Klauseln“ anstelle von „Kommas nach einleitenden Klauseln“.
  - **Beginnen Sie nicht mit Artikel**: Vermeiden Sie es, Titel mit den Artikeln „ein“, „eine“ oder „die“ zu beginnen.
  - **Fügen Sie einführende Informationen hinzu**: Nach einem Titel fügen Sie einige einführende Texte hinzu, die erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Verwendung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Redaktionsfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein:

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite für die Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich fundierte, benutzerfreundliche Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für den Gebrauch von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
