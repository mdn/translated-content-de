---
title: Leitfaden für Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs verfasst, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen dazu, Sprach- und Stilkonsistenz auf der Website sicherzustellen. Dennoch sind wir mehr an Inhalten als an deren Formatierung interessiert. Sie müssen das gesamte Handbuch nicht vollständig lernen, bevor Sie Beiträge leisten. Seien Sie jedoch nicht enttäuscht oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um sie an diesen Leitfaden anzupassen. Die Gutachter könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Pull-Request für Inhalte einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für die englischsprachige Dokumentation. Andere Sprachen können (und sind willkommen) ihre eigenen Stil-Leitfäden erstellen. Diese sollten als Unterseiten der entsprechenden Lokalisierungsteams-Seite veröffentlicht werden. Dieser Leitfaden sollte jedoch weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist, Seiten zu erstellen, die alle Informationen enthalten, die Leser benötigen, um das Thema zu verstehen.

Die folgenden Unterabschnitte liefern die Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Schließen Sie relevante Beispiele ein](#schließen_sie_relevante_beispiele_ein)
- [Geben Sie eine beschreibende Einleitung](#geben_sie_eine_beschreibende_einleitung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Hinterkopf. Eine Seite über fortgeschrittene Netzwerktechniken muss möglicherweise nicht so sehr auf grundlegende Netzwerkkonzepte eingehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps sind möglicherweise nicht in jedem Fall anwendbar.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Sprachstil und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe für die Zielgruppe, bevor Sie sie verwenden.
- **Kurz**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel Sie sagen sollten. Wenn Sie zu detailliert werden, wird die Seite langweilig zu lesen und wird selten genutzt.
- **Konsistent**: Verwenden Sie dieselbe Ausdrucksweise konsistent auf der Seite und über mehrere Seiten hinweg.

### Schließen Sie relevante Beispiele ein

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Das hilft den Lesern, konzeptionelle und prozedurale Informationen greifbarer und praktischer zu verstehen.

Sie sollten Beispiele verwenden, um zu erklären, wofür jeder Parameter verwendet wird, und um eventuelle Randfälle zu klären, die existieren könnten.
Sie können auch Beispiele verwenden, um Lösungen für gängige Aufgaben und Probleme zu demonstrieren, die auftreten können.

### Geben Sie eine beschreibende Einleitung

Stellen Sie sicher, dass die einleitenden Absätze vor der ersten Überschrift die Informationen, die die Seite abdecken wird, ausreichend zusammenfassen und womöglich auch, was Leser erreichen können, nachdem sie die Inhalte durchgegangen sind. So kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die Themen informieren, die behandelt werden, sowie über das erforderliche Vorwissen, wenn es welches gibt. Der einleitende Absatz sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen, mit Links zu den zugehörigen Informationen, und es sollte auf Situationen hingewiesen werden, in denen die Inhalte des Artikels nützlich sein könnten.

- **Beispiel einer kurzen Einleitung**: Dieses Beispiel für eine Einleitung ist viel zu kurz. Es lässt zu viele Informationen aus, wie zum Beispiel, was genau unter "streicheln" verstanden wird, wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einleitung**: Dieses Beispiel hat eine aktualisierte Einleitung, aber jetzt ist es viel zu lang. Es werden zu viele Details eingeschlossen, und der Text vertieft sich zu stark in die Beschreibung anderer Methoden und Eigenschaften. Stattdessen sollte sich die Einleitung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben sind.

  > Beim Aufruf zeichnet die Canvas 2D-API-Methode **`CanvasRenderingContext2D.strokeText()`** die Umrisse der Zeichen in der angegebenen Zeichenfolge ab den angegebenen Koordinaten unter Verwendung der aktuellen Stiftfarbe. Im Computergraphik-Terminologie bedeutet "Streichelung" von Text, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mithilfe der im Kontext aktuellen Schriftart wie im [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts angegeben, gezeichnet.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt. `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenfolge ab `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte der Zeichenfolge liegt. Wenn der Wert `"left"` ist, wird die Zeichenfolge ab dem angegebenen Wert von `x` gezeichnet. Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Optional können Sie einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenfolge in Pixel angeben können. Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um beim Zeichnen in einen so breiten Raum zu passen.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen einer Zeichenfolge mit Farbe zu füllen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer geeigneten Einleitung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), streichelt (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenfolge, verankert an der durch die angegebenen X- und Y-Koordinaten angegebenen Position. Der Text wird mithilfe der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und wird laut der Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet und ausgerichtet.
  >
  > Weitere Details und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite Grafiken zeichnen sowie in unserem Hauptartikel zum Thema [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen ausdrücklich dazu, Texte so inklusiv wie möglich zu verfassen.
Hier sind einige Alternativen zu gängigen Begriffen, die in der Dokumentation verwendet werden:

- Vermeiden Sie die Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Coherence** ersetzt werden.
- Anstelle von **Dummy** verwenden Sie **Placeholder**.
- Sie sollten die Begriffe **Crazy** und **Insane** in der Dokumentation nicht verwenden; jedoch falls erforderlich, ziehen Sie stattdessen **Fantastisch** in Betracht.

Es ist am besten, geschlechtsneutrale Sprache in jedem Text zu verwenden, in dem das Geschlecht für das Thema irrelevant ist.
Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; jedoch ist "er"/"sein" unpassend, wenn das Subjekt eine Person beliebigen Geschlechts ist.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Verwendung seiner Webcam erlauben möchte."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Verwendung ihrer Webcam erlauben möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite die Verwendung ihrer Webcam erlauben möchten."

> [!NOTE]
> Auf MDN-Web-Dokumenten kann die Pluralform der dritten Person, allgemein bekannt als "[Singuläres 'sie'](https://de.wikipedia.org/wiki/Singular_they)", verwendet werden. Die geschlechtsneutralen Pronomen umfassen "sie", "ihnen", "ihre" und "ihrer".

Eine andere Möglichkeit besteht darin, die Benutzer:innen zu pluralisieren, so:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer:innen, ob sie der Webseite die Verwendung ihrer Webcams erlauben möchten."

Die beste Lösung besteht natürlich darin, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers zur Webcam-Nutzung anfordert, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet."

Dieses letzte Beispiel, um das Problem zu lösen, ist wohl besser. Nicht nur, dass es grammatikalisch korrekter ist, sondern es entfernt auch einige der Komplexität im Umgang mit Geschlechtern in verschiedenen Sprachen, die unterschiedlichste Geschlechterregeln haben können. Diese Lösung kann die Übersetzung sowohl für Leser:innen als auch Übersetzer:innen erleichtern.

### Verwenden Sie zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und richtungsweisenden Wörtern wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer:innen gilt. Sie können auch unklar oder irreführend sein—insbesondere für Benutzer:innen, die auf Bildschirmleser angewiesen sind oder übersetzte Inhalte lesen, bei denen Richtungsangaben mehrdeutig oder schwierig zu übersetzen sein können. In responsiven Layouts, in denen sich die Position des Inhalts je nach Bildschirmgröße ändern kann, könnten solche Richtungsangaben ungenau werden. Diese Art der Sprache kann die Zugänglichkeit behindern und es allen Benutzer:innen erschweren, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element, auf das Bezug genommen wird, klar identifizieren. Beziehen Sie sich auf Abschnitte nach ihren Titeln oder Überschriften und beziehen Sie sich auf Beispiele oder Code-Snippets durch das, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Verweisen Sie auf den [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt später auf dieser Seite."
- **Falsch**: "Verweisen Sie auf den Zugänglichkeitsabschnitt unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mithilfe von CSS-Übergängen."
- **Falsch**: "Im unten stehenden Codebeispiel animieren wir einen Kreis mithilfe von CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorherigen Abschnitt mit dem Titel Erstellen einer media query erläutert."
- **Falsch**: "Dieses Konzept wird im oberhalb liegenden Abschnitt erläutert."

Zusätzlich sollten Sie keine vagen Linktexte wie "Hier klicken" oder "Diesen Artikel lesen" verwenden. Beschreibende Linktexte bieten besseren Kontext für alle Leser:innen und verbessern die Erfahrung für Benutzer:innen von assistiven Technologien.

- **Richtig**: "Erfahren Sie mehr darüber, [wie man Flex-Elemente anordnet](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."

Indem Sie diese Richtlinien befolgen, tragen Sie dazu bei, dass die MDN-Dokumentation für alle zugänglich, klar und nutzbar ist, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben Sie mit SEO im Hinterkopf

Während das Hauptziel von Texten auf MDN Web Docs immer sein sollte, offene Web-Technologien zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie wollen, oder die kleinen Details finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, finden können. Wir können dies erreichen, indem wir bei der Erstellung Inhalte mit Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Hinterkopf schreiben.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, um sicherzustellen, dass Leser:innen leicht finden, was sie brauchen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Schriftsteller:innen und Redakteur:innen arbeiten, einigermaßen gut gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Der folgende Checkliste ist hilfreich, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn ordnungsgemäß von Suchmaschinen indiziert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textuell ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema handeln, auch wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, wobei nur ein paar Wörter ausgetauscht und dasselbe Beispiel verwendet wird. Dies macht es Suchmaschinen schwer, zu wissen, welche welche ist, und sie teilen letztendlich das Seitenranking, was dazu führt, dass beide schwerer zu finden sind als sie sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen helfen, dies zu erreichen:

  - **Erklären Sie mehr einzigartige Konzepte**: Betrachten Sie Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man denkt. Zum Beispiel im Fall der Dokumentation von `width` und `height` Eigenschaften, schreiben Sie vielleicht über die unterschiedlichen Verwendungen von horizontalem und vertikalem Raum und bieten eine Diskussion über die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` im Sinne von Platzmachen für eine Sidebar erwähnen, während `height` verwendet wird, um vertikales Scrollen oder Fußzeilen zu handhaben. Informationen über Zugänglichkeitsprobleme zu ihrer Seite zu haben ist auch eine gute und nützliche Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Haupttext, weil die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften verwenden, um zu beginnen, wodurch keine wirklichen Änderungen erforderlich sind, wenn sie wiederverwendet werden. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder sorgen Sie zumindest dafür, dass mehrere Beispiele vorhanden sind, von denen einige anders sind.
  - **Fügen Sie Beschreibungen zu Beispielen hinzu**: Sowohl eine Übersicht darüber, was das Beispiel macht, als auch eine Beschreibung, wie es funktioniert, sollten im Detail erklärt werden, abhängig von der Komplexität des Themas und der Zielgruppe.

  Der einfachste Weg, allzu ähnlich zu sein, zu vermeiden, ist natürlich, jeden Artikel von Grund auf neu zu schreiben, falls die Zeit es zulässt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (im SEO-Jargon als "dünne Seiten" bezeichnet), werden solche Seiten von Suchmaschinen nicht richtig (oder überhaupt nicht) katalogisiert. Zu kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip sollten Seiten auf MDN Web Docs im Allgemeinen nicht kürzer als 300 Wörter sein. Versuchen Sie nicht künstlich, eine Seite aufzublähen, behandeln Sie dies jedoch als Mindestlängenrichtlinie, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genug Inhalt haben, um wirklich durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Natürlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie sie hinzu. Wir versuchen, "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren; es gibt jedoch viele Seiten, bei denen große Teile ihrer Inhalte fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Stellen Sie sicher, dass die Seite korrekt strukturiert ist für den Typ der [page](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) sie ist. Überprüfen Sie, ob alle Abschnitte präsent und mit den entsprechenden Inhalten gefüllt sind.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt sind — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung zu etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt sind. Gibt es Spezialfälle? Gibt es bekannte Beschränkungen, die der Leser wissen müsste?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorliegen, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer vom Anfänger- bis ins mittlere Niveau zu verwenden neigen, sowie jede fortgeschrittenen, die eine extra Erklärung benötigen. Jedes Beispiel sollte mit einer Übersicht darüber eingeleitet werden, was das Beispiel macht, welches weitere Wissen benötigt sein könnte, um es zu verstehen, und so weiter. Nach dem Beispiel (oder über die Teile des Beispiel gestreut) sollte Text vorhanden sein, der erklärt, wie der Code funktioniert. Gehen Sie nicht auf Details oder Fehlerbehandlung in Beispielen ein. Halten Sie sich vor Augen, dass Benutzer _werden_ Ihren Beispielcode kopieren und in ihren Projekten verwenden, und Ihr Code _wird_ auf Produktionswebsites verwendet werden! Siehe auch unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Erklärungen für Anwendungsfälle**: Wenn es besonders häufig Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Statt davon auszugehen, dass ein Benutzer herausfindet, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklerproblem zu lösen, addieren Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie proper [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text zu allen Bildern und Diagrammen hinzu. Dieser Text sowie Beschriftungen auf Tabellen und anderen Bildern zählen, weil Spinnen keine Bilder durchforsten können, und daher erklärt der Alt-Text den Suchmaschinen-Crawlern, welcher Inhalt in den eingebetteten Medien enthalten ist.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Keywords oder nicht mit dem Feature in Zusammenhang stehende Keywords einzuschließen, um Suchmaschinenrankings zu manipulieren; dieser Art von Verhalten lässt sich leicht erkennen und wird in der Regel bestraft.
    > Ebenso **fügen Sie keinen** sich wiederholenden, nicht hilfreichen Material oder Keyword-Brocken innerhalb der eigentlichen Seite hinzu, um deren Größe und Suchrang zu verbessern. Dies schadet sowohl der Lesbarkeit des Inhalts als auch unseren Suchergebnissen.

- **Fokussieren Sie sich auf den Themeninhalt**: Es ist viel besser, Inhalte rund um das Thema der Seite zu schreiben als ein spezifisches Keyword. Es ist sehr wahrscheinlich, dass es viele Keywords gibt, die Sie für ein bestimmtes Thema aufnehmen können; tatsächlich erstellen viele SEOs eine Liste von 5-100 verschiedenen Keywords (vom kurzen bis zum langen Silbenumfang) zur Aufnahme in ihren Artikel, je nach Länge. Damit diversifizieren Sie Ihre Wortwahl und vermeiden Wiederholungen.

## Schreibstil

Neben dem Schreiben von grammatisch korrekten Sätzen in Englisch, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um die Inhalte auf MDN Web Docs konsistent zu halten.

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

- **Erklärungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite erläutern Sie Akronyme, die den Benutzern möglicherweise unbekannt sind. Im Zweifelsfall den Begriff erläutern. Besser noch, verlinken Sie ihn zum Artikel oder [Glossar](/de/docs/Glossary), das die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache ..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache ..."

- **Großschreibung und Punkte**: Verwenden Sie durchgehend Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in klammergeschriebenen Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  - **Richtig**: Webbrowser (z.B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser e.g. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, (z. B. Firefox) können verwendet werden ...

  Im normalen Text (d.h. außerhalb von Notizen oder Klammern) verwenden Sie die englische Entsprechung der Abkürzung.

  - **Richtig**: ... Webbrowser usw.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser e.g., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen zusammen:

  | Abk.   | Latein           | Englisch                      |
  | ------ | ---------------- | ----------------------------- |
  | cf.    | _confer_         | vergleichen                   |
  | e.g.   | _exempli gratia_ | zum Beispiel                  |
  | et al. | _et alii_        | und andere                    |
  | etc.   | _et cetera_      | und so weiter, usw.           |
  | i.e.   | _id est_         | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_      | beachte gut                   |
  | P.S.   | _post scriptum_  | Nachschrift                   |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich nützlich ist, eine lateinische Abkürzung zu verwenden. Einige dieser Abkürzungen werden so selten verwendet, dass viele Leser:innen ihre Bedeutungen entweder verwechseln oder sie nicht verstehen.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dazu entscheiden. Zum Beispiel passen Sie auf, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für das Plural von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie keinesfalls ein Apostroph.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Abkürzung verwenden, hat "vs." Vorrang vor "v." und kann in Überschriften verwendet werden. Andernorts im Text verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige Großschreibungsregeln im englischen Text und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleine oder als Modifikator) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, daher könnten Sie viele Instanzen von "Web" und "Internet" auf MDN finden. Sie können diese gerne ändern, wenn Sie andere Änderungen vornehmen, aber nur um der Großschreibung willen einen Artikel zu bearbeiten ist nicht notwendig.

Tastaturtasten sollten Satzschrift verwenden, nicht Großbuchstaben. Zum Beispiel "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>". Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die Taste "<kbd>Escape</kbd>" abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie Marken, die Großbuchstaben enthalten oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird innerhalb von Code verwendet und die Syntax des Codes erfordert eine Kleinschreibung). Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://de.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation, sollte es immer als markenrechtlich geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Frameworknamen

Einige Toolnamen und Projekte haben ihre eigenen gebrandeten Großschreibungsregeln. Diese könnten Namen erfordern, die alle Kleinbuchstaben verwenden ("npm" oder "webpack"), alle Großbuchstaben ("UNIX", "GNOME", "VIM") oder gemischte Schreibweise ("TypeScript", "macOS", oder "jQuery").

Die mit offiziellen Websites oder Dokumentationen gebrandete Großschreibung sollte immer verwendet werden, sogar am Satzanfang. Wenn Sie sich mit einem Satzbeginn mit einem Kleinbuchstaben unwohl fühlen, empfehlen wir, die Formulierung zu ändern, um das Problem zu vermeiden. Zum Beispiel könnten Sie sagen "Sie können den npm-Paketmanager verwenden, um ..." anstelle von "npm erlaubt Ihnen ...".

### Kontraktionen

Unser Schreibstil neigt dazu, locker zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B., "don't", "can't", "shouldn't") zu verwenden, wenn Sie dies bevorzugen.

### Zahlen und Ziffern

- **Kommas**: In fließendem Text verwenden Sie Kommas nur in fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (außer Daten in Codebeispiele) verwenden Sie das Format "1. Januar 1900".

  - **Richtig**: 24. Februar, 1906
  - **Falsch**: 24. Februar, 1906; 24 Februar, 1906; 24/02/1906

  Alternativ können Sie das Format JJJJ/MM/TT verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plural von Zahlen**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht die lateinischen- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "gekrümmten" Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir eines von beiden für die Konsistenz wählen müssen. Wenn gekrümmte Anführungszeichen oder Apostrophe in Code-Snippets, auch Inline-Snippets, gelangen, könnte etwas kopier- und eingefügt werden, wobei davon ausgegangen wird, dass sie funktionieren (was sie nicht werden).

- **Richtig**: Bitte verwenden Sie keine "gekrümmten Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine „gekrümmten Anführungszeichen.“

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Regeln zur Kommasetzung bewusst sein müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitender Nebensatz ist ein abhängiger Satz, der sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie nach einem einleitenden Nebensatz ein Komma, um ihn vom nachfolgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel erfahren Sie, wie ein Komma verwendet wird."
    - **Falsch**: "In diesem Beispiel erfahren Sie wie ein Komma verwendet wird."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, nehmen Sie Bezug auf unsere Schreibstil-Richtlinien."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen nehmen Sie Bezug auf unsere Schreibstil-Richtlinien."
  - Beispiel 3:
    - **Richtig**: "Auf Mobilplattformen erhalten Sie tendenziell ein Ziffernblock für die Dateneingabe."
    - **Falsch**: "Auf Mobilplattformen erhalten Sie tendenziell ein Ziffernblock für die Dateneingabe."

- **Vor Konjunktionen**: Das Serialkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serialkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "Mein Hund ist süß und intelligent."
  - **Falsch**: "Mein Hund ist süß, und intelligent."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz durch die Konjunktion jedoch sehr lang oder komplex wird, ziehen Sie in Betracht, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Ein restriktiver Satz ist für die Bedeutung des Satzes unerlässlich und benötigt keine Kommas, um sich vom verbleibenden Satz abzusetzen. Ein restriktiver Satz wird normalerweise durch "dass" eingeführt und sollte **nicht** von einem Komma vorangestellt werden.

  - **Richtig**: "Wir haben einen Kurs vorbereitet, der alle wesentlichen Informationen enthält, die Sie zur Erreichung Ihrer Ziele benötigen."
  - **Falsch**: "Wir haben einen Kurs vorbereitet, der , alle wesentlichen Informationen enthält, die Sie zur Erreichung Ihrer Ziele benötigen."

  Ein nicht restriktiver Satz bietet zusätzliche Informationen und ist für die Bedeutung des Satzes nicht wesentlich. Ein nicht restriktiver Satz wird normalerweise durch "welches" eingeführt und sollte von einem Komma vorangestellt werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, welche eine erlaubte Liste von Herkunftsangaben für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie welche eine erlaubte Liste von Herkunftsangaben für jede Funktion ist."

- **Vor "zum Beispiel"**: Wenn "zum Beispiel" Teil eines nicht restriktiven Satzes ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "zum Beispiel".

  - **Richtig**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Arten, z.B. durch das Verbinden, das Umkehren und das Sortieren dieser."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Arten, z.B. durch das Verbinden, das Umkehren und das Sortieren dieser."

  Das folgende Beispiel zeigt, wann ein Komma mit "zum Beispiel" nicht verwendet werden sollte. In diesem Fall ist der Satz, der "zum Beispiel" enthält, für die Bedeutung des Satzes unerlässlich.

  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten mit WebSockets erlauben."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen, und den Zugriff auf Rohdaten mit WebSockets erlauben."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel.

- **Richtig**: re-elect, co-op, e-mail
- **Falsch**: reelect, coop, email

### Rechtschreibung

Verwenden Sie amerikanische Schreibweise.

Im Allgemeinen verwenden Sie den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als alternative Schreibweise oder hauptsächlich in einer nicht-amerikanischen Form des Englischen verwendet. Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ gegenüber der amerikanischen Standardform) nachschlagen, finden Sie den Hinweis "Hauptsächlich Britisch" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior). Verwenden Sie nicht die alternative Schreibweise.

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und genehmigte Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, falls sie gültig sind, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstelle von "Tag". Zudem sollte das Element in Spitzklammern "<>" eingeschlossen und mit Backticks (`` ` ``) formatiert sein. Zum Beispiel wird \<input\> innerhalb von Backticks als `<input>` dargestellt, wie erwartet.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das Span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, welches das Element formatiert, die Spitzklammern "<>" hinzufügt und einen Link zu seiner Referenzseite hinzufügt.

  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Quelltext in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente", wann immer möglich, um Konsistenz zu gewährleisten.

- **Benutzeroberflächenaktionen**: In Aufgabelisten Aktionen in der Benutzeroberfläche im Imperativ beschreiben. Identifizieren Sie das Benutzeroberflächenelement durch seine Bezeichnung und seinen Typ.
  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Zwar ist der aktive Sprachstil bevorzugt, jedoch ist auch der Passivstimme akzeptabel, angesichts des informellen Charakters unserer Inhalte. Dennoch, bemühen Sie sich um Konsistenz.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite zu befolgen sind, wie Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken zum Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Stück Beispielcode sollte umfassen:
  - **Überschrift**: Eine kurze `###` (`<h3>`)-Überschrift, die das durch das Codebeispiel demonstrierte Szenario beschreibt. Zum Beispiel "Offset Druckverwendung" und "Zurücksetzen auf Stil in der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung, die dem Beispielcode vorausgeht und die Besonderheiten des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel: "Im folgenden Beispiel sind zwei Cascading Layers definiert im CSS, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und wie es verwendet wird demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature möglicherweise verwenden oder benötigen könnte.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu zerlegen, damit sie einzeln beschrieben werden können.
- Wenn Sie [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass alle Codeabschnitte des gleichen Typs (HTML, CSS und JavaScript) zusammengefasst werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehreren Segmenten zu unterteilen, jedes optional mit seinen eigenen Beschreibungen, Überschriften usw. Dies macht die Dokumentation des Codes unglaublich flexibel und leistungsfähig.

Um zu erfahren, wie Sie Codebeispiele für MDN Web Docs gestalten oder formatieren, siehe unsere [Richtlinien für die Gestaltung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Wenn Sie auf eine andere Seite oder einen Abschnitt auf MDN nach deren Titel verweisen, folgen Sie der Satzgroßschreibung im Linktext (entspricht dem Seitentitel oder Abschnittstitel). Verwenden Sie Groß- und Kleinschreibung im Linktext, auch wenn sie von dem verlinkten Seitentitel oder Abschnittstitel abweichen. Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite von MDN nach deren Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Verweisen Sie auf den [Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) Leitfaden."
- **Falsch**: "Verweisen Sie auf den "[Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" Leitfaden."

Folgen Sie einem konsistenten Stil, wenn Sie auf Bereiche innerhalb einer Seite verlinken:

- **Richtig**: "Für weitere Informationen lesen Sie im Abschnitt [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im _Speicherverwaltung_ Leitfaden nach."

Wenn der Abschnitt, zu dem Sie verlinken, auf derselben Seite ist, können Sie den Standort des Abschnitts mit beschreibenden Phrasen andeuten.

- **Richtig**: "Dieses Konzept wird ausführlicher im [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt dieses Dokuments beschrieben."
- **Falsch**: "Dieses Konzept wird genauer im [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt unten beschrieben."

Auf MDN gibt es eine andere Möglichkeit, auf eine Referenzseite zu verlinken, indem ein Makro verwendet wird. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Um zum Beispiel auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweiserichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es okay ist, einen externen Link auf MDN Web Docs hinzuzufügen. Pull Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie nicht diesen Richtlinien folgen.

Wenn Sie in Betracht ziehen, einen externen Link zu MDNs [Webentwicklung lernen](/de/docs/Learn_web_development)-Inhalten hinzuzufügen, lesen Sie auch [Richtlinien für das Schreiben von Webentwicklungsinhalten > Partner-Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie daran denken, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko der folgenden Punkte minimal ist:

- Gebrochene oder veraltete Links
- Anschein von Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Shortlinks, die das Ziel des Links verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie Inhalte innerhalb von MDN Web Docs in Betracht ziehen. Interne Links sind einfacher zu pflegen und machen MDN Web Docs als Ganzes wertvoller für Leser:innen.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, langlebig und allgemein vertrauenswürdig sind. Sie sollten bevorzugt Links zu externen Inhalten hinzufügen, die:

  - Einzigartig oder unersetzlich sind (z.B. ein IETF RFC)
  - Notwendig für die Zitation, den Zitiervermerk oder die Anerkennung sind (zum Beispiel im Rahmen einer Creative-Commons-Gutschrift)
  - Für das Thema eher gewartet werden als den Inhalt auf MDN Web Docs selbst einzubeziehen (zum Beispiel die Veröffentlichungsnotizen eines Anbieters)
  - Open-Source oder Community-gesteuert sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links haben keine Relevanz, Wartungsfähigkeit, Zugänglichkeit oder stellen auf andere Weise Barrieren für Leser:innen auf. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Allgemein oder nicht spezifisch sind (z.B. die Homepage eines Anbieters statt der zugehörigen Dokumentation)
  - Kurzlebig oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Eigenlinkend oder selbstvermarktend sind (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Kostenpflichtig sind (z.B. ein teurer Kurs, der für Hobbyisten, Studierende oder Leser in einkommensschwächeren Ländern außerhalb ihrer Reichweite liegt)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstvermarktend oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzgespräch oder ein GitHub-Repository Wert hat, kann das Verlinken zu den eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie zweimal, bevor Sie auf Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull Request offenlegen. Die Nichtoffenlegung kann Ihre zukünftige Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie die Redakteurin einer Spezifikation sind und zur Dokumentation zu dieser Spezifikation beitragen, wird erwartet und akzeptiert, dass Sie einen Link zu dieser Spezifikation hinzufügen. Dennoch müssen Sie die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter merkbare URLs (auch als "Shortlinks" bekannt) zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Zusätzlich kann mit bestimmten Shortenern das Ziel nach der Erstellung geändert werden, eine Funktion, die für bösartige Zwecke genutzt werden könnte.

Verwenden Sie keine von Dritten erstellte Links, die über URL-Shortener generiert wurden. Zum Beispiel, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com`-URL.

Auf der anderen Seite, first-party Shortener, die von den Organisationen gepflegt werden, die auch die Ziel-URLs verwalten, werden empfohlen. `https://bugzil.la` gehört und wird von Mozilla betrieben und ist ein URL-Shortener, der zu `https://bugzilla.mozilla.org/` weiterleitet, was auch eine von Mozilla geführte Domain ist. In diesem Fall verwenden Sie die kürzere URL. Verwenden Sie zum Beispiel `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden. Verwenden Sie diese Markdown-Überschriften in abnehmender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese entsprechen den [HTML-Überschriftstags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Tags, beziehungsweise.

`##` ist die höchste Ebene erlaubt, weil `#` für den Seitentitel reserviert ist. Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, ein Überschrift der vierten Ebene hinzuzufügen, denken Sie darüber nach, den Artikel in mehrere kleinere Artikel mit einer Startseite aufzuteilen. Alternativ, in Erwägung ziehen, die Informationen als Aufzählungspunkte darzustellen, um eine Verwendung von Überschriften der vierten Ebene zu vermeiden.

Beachten Sie die folgenden Gebote und Verbote beim Erstellen von Überschriften für Unterabschnitte:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Teilen Sie ein Thema nicht in ein einzelnes Unterthema auf. Es ist entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebezeichnungen anzuzeigen (z.B., "Verwendung der `FooBar`-Schnittstelle").
- **Erstellen Sie keine "Kollisionen von Überschriften".** Damit sind Überschriften gemeint, die unmittelbar durch eine Unterüberschrift gefolgt werden, ohne dazwischenliegenden Text.
  Dies sieht nicht gut aus und lässt Leser:innen ohne erklärenden Text zu Beginn des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, folgen Sie diesen Richtlinien:

- Stellen Sie sicher, dass die Lizenz der Medien die Nutzung erlaubt. Verwenden Sie bevorzugt Medien, die eine sehr freizügige Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder mindestens eine, die mit unserer allgemeinen Inhaltslizenz kompatibel ist — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Bei Bildern führen Sie diese durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Bei `SVG` führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine Leerzeile am Ende der Datei hat.
- Jedes Bild muss [eine beschreibende `alt`-Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) enthalten.

### Listen

Listen sollten durchgehend formatiert und strukturiert werden. Einzelne Listenelemente sollten mit geeigneter Zeichensetzung geschrieben werden, unabhängig vom Listenformat. Je nach Art der Liste, die Sie erstellen, möchten Sie Ihren Text gemäß den in den folgenden Abschnitten beschriebenen Methoden anpassen. In beiden Fällen fügen Sie einen einleitenden Satz ein, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um zusammengehörige Informationsstücke in knapper Form zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. unvollständige Sätze, die ein Verb oder Subjekt oder beides fehlen) in Auflistungen sollten durchgehend Satzzeichen enthalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn in einem Listenelement mehrere Sätze enthalten sind, muss jeweils ein Punkt am Ende jedes Satzes stehen, einschließlich des letzten Satzes des Elements, genau wie es in einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte Liste:

  > In diesem Beispiel sollten wir enthalten:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Wieder eine Bedingung, mit einer zusätzlichen Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur sich von Aufzählungspunkt zu Aufzählungspunkt wiederholt. In diesem Beispiel nennt jeder Aufzählungspunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist kein Punkt am Ende erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Textschatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie nach jedem Listenelement einen Punkt, auch wenn ein Listenelement nur drei oder weniger Wörter enthält. Wenn möglich, folgen Sie jedoch demselben Strukturmuster für alle Elemente in einer Liste; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden in erster Linie verwendet, um Schritte in einem Satz von Anweisungen aufzuzählen. Da Anweisungen komplex sein können, ist Klarheit eine Priorität, besonders wenn der Text in jedem Listenelement umfangreich ist. Wie bei Aufzählungslisten folgen Sie Standardregeln für die Zeichensetzung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine Nummerliste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz zur Einführung der Anweisungen beginnen. Es ist wichtig, den Benutzer:innen vor dem Beginn der Anweisungen Kontext zu geben.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anweisungen können recht umfangreich sein, daher ist es wichtig, klar zu schreiben und richtige Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel, wie man eine abschließende Erklärung für die obige Liste schreibt:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungsschritte zur Erzeugung einer nummerierten Liste mit der richtigen Formatierung bereitstellt.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anweisungen oder zur Durchführung eines geordneten Verfahrens verwendet werden, sollten Sie dafür sorgen, dass jedes Element fokussiert bleibt: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar die Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Dies ist zum Beispiel der [Siehe auch Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die Seite `@layer`.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt in einem [Aufzählungsliste](#listen) Format, wobei jedes Element in der Liste eine Phrase sein sollte. Im Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) auf MDN folgt der Siehe auch Abschnitt jedoch dem [Definitionsliste](#siehe_auch_abschnitt) Format.

Um Konsistenz über MDN Web Docs hinweg zu wahren, beachten Sie die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitt.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der Seite oder des Abschnitts, auf den verlinkt wird. Zum Beispiel wird der Linktext auf diese [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA-Zustände und -Eigenschaften" sein:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satzschreibung im Linktext, selbst wenn dies vom Titel der verlinkten Seite oder Abschnitt abweicht. Es könnte sein, dass die Groß- und Kleinschreibung auf der verlinkten Seite oder im Abschnitt falsch ist. Zum Beispiel wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satzschreibung sein:
  - **Richtig**: [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Verwenden Sie auch bei externen Links Satzschreibung, auch wenn die Großschreibung auf der Zielseite des Artikels unterschiedlich ist. Dies soll über MDN Web Docs hinweg für Konsistenz sorgen. Ausnahmen umfassen Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Verlinkung auf Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_ Seite erklärt wird. Die Verwendung des Makros fügt eine Codeformatierung zum Schlüsselwort im Linktext hinzu, wie im nächsten Beispiel ersichtlich.
- Kein Artikel ("A", "Ein", "Das") wird am Anfang des Linklistenelements benötigt. Kein Satzzeichen ist am Ende des Listenelements erforderlich, da es invariably ein Begriff oder eine Phrase sein wird.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer)
  - **Falsch**: Das [`revert-layer`](/de/docs/Web/CSS/Reference/Values/revert-layer) Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie Codeformatierungen mit Backticks (`` ` ``) zu Schlüsselwörtern und Literale im Linktext hinzu, obwohl die Formatierung in Seitentiteln und Abschnittstiteln nicht verwendet wird. Zum Beispiel, für den Seitentitel "Array() Konstruktor", wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text, der den Link umgibt, minimal. Im Falle einer Beschreibung fügen Sie diese nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne endendes Satzzeichen. Halten Sie alle verlinkten Texte am Anfang, um das Scannen der Liste der Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zur Gestaltung von Kontrollkästchen
- Verwenden Sie kein "und" als Konjugation vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Bei externen Links versuchen Sie, die Quell-Website und das Veröffentlichungs- oder letzte Aktualisierungsjahr in Klammern anzugeben, wann immer dies möglich und sinnvoll ist. Die Angabe dieser Informationen im Voraus gibt den Lesern eine klare Vorstellung über das Ziel, das sie erreichen werden, wenn sie den Link klicken. Das Veröffentlichungs- oder letzte Aktualisierungsdatum hilft den Lesern bei der Einschätzung der Relevanz des verlinkten Artikels und hilft MDN-Mitarbeitern, Links zu Artikeln zu überprüfen, die seit langer Zeit nicht mehr aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenpunkt ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit der Quelle und den Jahresangaben:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autorennamen angeben. Einige Beispiele sind im Abschnitt [Weitere Lektüre](#language_grammar_and_spelling) aufgeführt. Verzichten Sie darauf, Autorennamen für Blog-Beiträge oder GitHub-Repositories hinzuzufügen, die Sie möglicherweise verlinken möchten.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst auf, gefolgt von Links zu den zugehörigen Leitfäden und Tutorialseiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich dazu, die Scanbarkeit der Artikel in der Liste zu verbessern.
- Wenn die Liste sowohl interne als auch externe Links enthält, listen Sie zuerst die internen Links und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie alphabetischer Reihenfolge oder einer einfachen bis einer fortgeschrittenen Ordnung, je nachdem, was im Kontext mehr Sinn ergibt.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Bereich hinzufügen müssen, erstellen Sie in der Regel eine Startseite und fügen dann Unterseiten für die einzelnen Artikel hinzu. Die Startseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, gefolgt von einer Liste der Unterseiten mit Beschreibungen jeder Seite. Sie können einige Makros verwenden, um den Einfügen von Seiten in die Liste zu automatisieren.

Zum Beispiel berücksichtigen Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Haupt-Inhaltsverzeichnis
- [JavaScript/Guide/JavaScript Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie, Ihren Artikel nicht ganz oben in der Hierarchie zu platzieren, was die Website verlangsamt und die Suche und Navigation erschwert.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann vom Seiten-"Slug" abweichen, der der Anteil der URL der Seite ist, der `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte die Komponente des neuen Levels im Slug nur ein oder zwei Wörter umfassen.
- Slugs sollten für eine mehrteilige Komponente einen Unterstrich wie in `Basic_HTML_syntax` verwenden in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie der Satzschreibung im Slug genauso hoch für jede Komponente, wie z.B. `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch zum Strukturieren der Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite verwendet. Ein Seitentitel kann sich vom Seiten-"Slug" unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt wird.

Halten Sie die folgenden Richtlinien beim Schreiben von Titeln ein:

- **Groß- und Kleinschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften Satzstil-Groß- und Kleinschreibung verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle von Überschriftenstil-Groß- und Kleinschreibung:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode zur Erstellung von JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel festgelegt wurden. Fühlen Sie sich frei, diese bei Bedarf zu aktualisieren, wenn Sie mögen. Wir bearbeiten sie allmählich.

- **Allgemeine Richtlinien**: Die Entscheidung, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren werden, ist eines der ersten Schritte beim Schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen helfen zu entscheiden, wie Sie Informationen ordnen möchten. Decken Sie einfache Konzepte zuerst ab und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Decken Sie konzeptionelle Informationen erst ab und gehen Sie dann zu aktionsorientierten Themen über.

  Halten Sie folgende Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte ein:

  - **Gehen Sie von höher nach niedriger**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) erklärt, gehen Sie von einer höheren `##` zu einer niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriften für allgemeinere Einführungstitel und detailliertere Titel, wenn Sie zu niedrigeren Überschriftsebenen übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle zugehörigen Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Das Benennen von Titeln verschiedener Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter im Text und im Inhaltsverzeichnis zu erfassen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel verwenden Sie für einen Abschnitt, der HTML-Elemente einführt, den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Beziehen Sie sich im Titel auf ein Ziel – eine einzelne Idee oder ein Konzept, das im Abschnitt behandelt wird. Zu diesem Zweck, soweit möglich, versuchen Sie nicht, die Konjunktion "und" in einem Titel zu verwenden.
  - **Verwenden Sie parallele Konstruktionen**: Verwenden Sie ähnlichen Sprachgebrauch für Titel auf derselben Überschriftenebene. Beispielsweise, wenn ein `###`-Überschriftstitel ein mit "-ing" endendes Wort verwendet, wie z.B. "Installation", schreiben Sie dann alle Titel auf dieser Überschriftenebene mit -ing endenden Wörtern. Wenn ein Titel mit einem Imperativverb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf dieser Überschriftenebene mit einem Imperativverb beginnend.
  - **Vermeiden Sie den Common Term in niedrigeren Überschriftstiteln**: Wiederholen Sie den Text nicht im Titel einer höheren Überschrift in niedrigeren Titeln. Zum Beispiel, in einem Abschnitt namens "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Nebensätzen" anstelle von "Kommas nach einleitenden Nebensätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, Titel mit "a", "an" oder "the" zu beginnen.
  - **Fügen Sie einführende Informationen hinzu**: Fügen Sie nach einem Titel einführenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weitere Lektüre

### Weitere Stilrichtlinien

Falls Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zurate zu ziehen.

### Sprache, Grammatik und Rechtschreibung

Falls Sie daran interessiert sind, Ihre Schreib- und Editierfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Nutzung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundliche, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
