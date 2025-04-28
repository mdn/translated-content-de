---
title: Stil- und Schreibrichtlinien
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

Diese Stilrichtung für das Schreiben beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen sicherstellen, dass Sprache und Stil auf der gesamten Website konsistent sind. Das gesagt, sind wir mehr an Inhalt als an der Formatierung interessiert. Fühlen Sie sich also nicht verpflichtet, das gesamte Stilhandbuch vor einem Beitrag zu lernen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit anpasst, um diesen Richtlinien zu entsprechen. Die Gutachter könnten auch auf dieses Stilhandbuch hinweisen, wenn Sie einen Inhaltsbeitrag einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für die englischsprachige Dokumentation. Andere Sprachen können und sollten ihre eigenen Stilrichtlinien erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteamseite veröffentlicht werden. Dennoch sollte dieser Leitfaden für Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und wie verschiedene Komponenten auf einer Seite formatiert werden, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu verfassen, die alle Informationen enthalten, die Leser benötigen, um das aktuelle Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen zur Erreichung dieses Ziels:

- [Beachten Sie Ihre Zielgruppe](#beachten_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#beruecksichtigen_sie_die_drei_cs_des_schreibens)
- [Fügen Sie relevante Beispiele hinzu](#fuegen_sie_relevante_beispiele_hinzu)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einfuehrung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie unter Berücksichtigung von SEO](#schreiben_sie_unter_beruecksichtigung_von_seo)

### Beachten Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Kopf. Zum Beispiel braucht eine Seite zu fortgeschrittenen Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerkkonzepte einzugehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Sprachgebrauch und eindeutige Pronomen. Schreiben Sie kurze Sätze und bleiben bei einer Idee pro Satz. Definieren Sie neue Begriffe im Kontext der Zielgruppe, bevor Sie sie verwenden.
- **Konzis**: Beim Schreiben eines Dokuments ist es wichtig zu wissen, wie viel man sagen möchte. Wenn Sie zu viele Details angeben, wird die Seite ermüdend zu lesen und wird selten verwendet.
- **Konsistent**: Verwenden Sie denselben Sprachgebrauch konsistent auf der gesamten Seite und über mehrere Seiten hinweg.

### Fügen Sie relevante Beispiele hinzu

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird, und um eventuelle Randfälle zu klären, die existieren könnten.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen für Probleme zu demonstrieren, die auftreten können.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz/Absätze vor der ersten Überschrift die Informationen, die die Seite abdecken wird, angemessen zusammenfasst und vielleicht auch, was die Leser nach dem Durchgehen des Inhalts erreichen können. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Belange und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz/Absätze den Leser über die behandelten Themen sowie das erforderliche Vorwissen des Lesers, falls vorhanden, informieren. Der einleitende Absatz sollte die im Artikel dokumentierten oder diskutierten Technologien und/oder APIs erwähnen, mit Links zu den verwandten Informationen, und sollte Hinweise auf Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Beispiel ist zu kurz. Es lässt zu viele Informationen aus, wie z. B. was es genau bedeutet, Text zu "umranden", wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, ist jetzt aber viel zu lang. Es sind zu viele Details enthalten, und der Text geht zu weit in die Beschreibung anderer Methoden und Eigenschaften.

  > Wenn aufgerufen, umrandet die Canvas-2D-API-Methode **`CanvasRenderingContext2D.strokeText()`** die Zeichen in der angegebenen Zeichenfolge, beginnend bei den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet das "Umranden" von Text das Zeichnen der Umrisse der Glyphen in der Zeichenfolge, ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben.
  >
  > Die Platzierung des Texts relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenfolge bei `x - (stringWidth / 2)` gezeichnet, wodurch die angegebene X-Koordinate in der Mitte der Zeichenfolge liegt.
  > Wenn der Wert `"left"` ist, wird die Zeichenfolge bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Optional können Sie einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenfolge in Pixeln angeben können.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder auf andere Weise angepasst), um in einen so breiten Raum zu passen, wenn er gezeichnet wird.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen einer Zeichenfolge mit Farbe gefüllt anstelle nur der Umrisse der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Methode **`strokeText()`** der [Canvas-2D-API](/de/docs/Web/API/Canvas_API) umrandet (zeichnet die Umrisse) die Zeichen einer angegebenen Zeichenfolge, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angegeben wird.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet, und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Weitere Details und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite über das Zeichnen von Grafiken sowie in unserem Hauptartikel zum Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen dringend, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **Master** und **Slave** und verwenden stattdessen **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Coherence** ersetzt werden.
- Verwenden Sie anstelle von **Dummy** das Wort **Placeholder**.
- Sie sollten nicht die Begriffe **Crazy** und **Insane** in der Dokumentation verwenden; falls doch, ziehen Sie stattdessen **Fantastic** in Betracht.

Es ist am besten, geschlechtsneutrale Sprache in jedem Schreiben zu verwenden, bei dem das Geschlecht im Wesentlichen nicht zum Thema gehört.
Beispielsweise, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Thema eine Person jeglichen Geschlechts betrifft, ist "er"/"sein" nicht angemessen.

Sehen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu korrigieren, verwenden Sie geschlechtsneutrale Pronomen:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie die Webseite erlauben möchten, ihre Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Zu den geschlechtsneutralen Pronomen gehören "they," "them", "their," und "theirs".

Eine andere Möglichkeit ist, die Benutzer plural zu machen, so wie:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog erscheint, der die Erlaubnis des Benutzers zur Webcam-Nutzung anfordert."
- **Richtig**: "Ein Bestätigungsdialog, der den Benutzer um Erlaubnis zur Webcam-Nutzung bittet, erscheint."

Diese letzte Möglichkeit, mit dem Problem umzugehen, ist arguably besser.
Nicht nur ist es grammatikalisch korrekter, sondern entfernt einige der Komplexitäten, die mit der Geschlechterregelung in verschiedenen Sprachen einhergehen, die völlig andere Geschlechterregeln haben könnten.
Diese Lösung kann die Übersetzung für Leser und Übersetzer erleichtern.

### Verwenden Sie zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und Richtungswörtern wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein spezifisches visuelles Layout voraus, welches nicht auf alle Benutzer zutreffen muss. Sie können auch unklar oder irreführend sein, insbesondere für Benutzer, die auf Screenreader angewiesen sind oder übersetzte Inhalte lesen, wo Richtungsangaben zweideutig oder schwer zu übersetzen sind. Bei responsiven Layouts, bei denen sich die Position von Inhalten je nach Bildschirmgröße ändern kann, können solche Richtungsreferenzen ungenau werden. Diese Art von Sprache kann die Zugänglichkeit behindern und es allen Benutzern erschweren, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element, auf das sich bezogen wird, klar identifizieren. Beziehen Sie sich auf Abschnitte nach ihren Titeln oder Überschriften und beziehen Sie sich auf Beispiele oder Code-Schnipsel anhand dessen, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Lesen Sie den [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt später auf dieser Seite."
- **Falsch**: "Lesen Sie den Accessibility-Abschnitt unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mithilfe von CSS-Übergängen."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mithilfe von CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorhergehenden Abschnitt mit dem Titel Creating a media query erklärt."
- **Falsch**: "Dieses Konzept wird im obigen Abschnitt erklärt."

Zusätzlich vermeiden Sie vage Linktexte wie "Hier klicken" oder "Lesen Sie diesen Artikel". Deskriptive Linktexte bieten einen besseren Kontext für alle Leser und verbessern die Erfahrung für Benutzer von unterstützender Technologie.

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Items ordnet](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Indem Sie diese Richtlinien befolgen, tragen Sie dazu bei, dass MDN-Dokumentation zugänglich, klar und für alle Benutzer nutzbar ist, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben Sie unter Berücksichtigung von SEO

Das primäre Ziel jeglichen Schreibens auf MDN Web Docs sollte immer sein, über offene Webtechnologien zu informieren und zu erklären, damit Entwickler schnell lernen können, wie sie bewältigen, was sie wollen, oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren. Es ist jedoch wichtig, dass sie das Material, das wir schreiben, auch finden können. Wir können dies erreichen, indem wir die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Hinterkopf behalten, während wir schreiben.

In diesem Abschnitt werden die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte behandelt, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, um sicherzustellen, dass Leser leicht finden können, was sie benötigen. Zu den SEO-Richtlinien gehört die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, angemessen gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen richtig indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textuell ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten über dasselbe Thema sind, auch wenn sie das nicht sind. Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, kann der Text auf den zwei Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich sein, wobei nur einige wenige Worte ausgetauscht werden und dasselbe Beispiel verwendet wird. Dadurch wird es für Suchmaschinen schwierig zu wissen, welches welche ist, und sie teilen sich das Page-Ranking, wodurch beide schwerer zu finden sind, als sie sein sollten.

  Es ist daher wichtig sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen:

  - **Erklären Sie mehr einzigartige Konzepte**: Überlegen Sie sich Anwendungsfälle, in denen es mehr Unterschiede geben könnte, als man denkt. Im Fall der Dokumentation von `width`- und `height`-Eigenschaften, schreiben Sie vielleicht über die Art und Weise, wie horizontaler Raum und vertikaler Raum unterschiedlich genutzt werden, und bieten Sie eine Diskussion über die entsprechenden Konzepte. Sie können vielleicht die Verwendung von `width` im Hinblick auf die Bereitstellung eines Raums für eine Seitenleiste erwähnen, während Sie `height` verwenden, um das vertikale Scrollen oder Fußzeilen zu handhaben. Informationen über Zugänglichkeitsprobleme einzuschließen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie verschiedene Beispiele**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Fließtext, da die Beispiele möglicherweise beide (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden, wodurch keine echten Änderungen notwendig werden, wenn sie wiederverwendet werden. Also verwerfen Sie das Beispiel und schreiben Sie ein neues, oder geben Sie zumindest mehrere Beispiele an, von denen einige unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch eine Abdeckung davon, wie es funktioniert, sollte enthalten sein, auf einem angemessenen Detaillierungsgrad abhängig von der Komplexität des Themas und der Zielgruppe.

  Der einfachste Weg, um zu vermeiden, zu ähnlich zu sein, ist natürlich, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in SEO-Terminologie als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht korrekt (oder gar nicht) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip sollten sichergestellt werden, dass Seiten auf den MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Künstlich eine Seite aufzublähen, ist nicht sinnvoll, aber behandeln Sie diese Richtlinie als eine minimale Zielvorgabe, wann immer möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genug Inhalt enthalten, um gut durchsuchbar zu sein, ohne darauf zurückzugreifen, sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub oder es fehlt noch Inhalt, fügen Sie ihn hinzu. Wir versuchen, auf den MDN Web Docs, vollwertige "Stub"-Seiten zu vermeiden, obwohl es einige gibt, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie ordnungsgemäß für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und geeigneten Inhalt haben.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt werden. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, etwas kurz zu erklären, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser kennen müsste?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer aus dem Bereich Anfänger bis Mittelstufe wahrscheinlich verwenden, sowie irgendwelche fortgeschrittenen, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einem Überblick darüber versehen werden, was das Beispiel bewirken wird, welches zusätzliche Wissen möglicherweise benötigt wird, um es zu verstehen usw. Nach dem Beispiel (oder zwischen Teilen des Beispiels verstreut) sollte ein Text erscheinen, der erklärt, wie der Code funktioniert. Führen Sie keine Details oder Fehlerbehandlung in Beispielen kurz aus. Beachten Sie, dass Benutzer _werden_ Ihr Beispiel kopieren und in ihre eigenen Projekte einfügen, und Ihr Code _wird_ auf Produktionsseiten verwendet werden! Weitere nützliche Informationen finden Sie in unseren [Codebeispielrichtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide).
  - **Erläutern Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt anzunehmen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Geben Sie für alle Bilder und Diagramme einen korrekten [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text an. Dieser Text sowie die Beschriftungen von Tabellen und anderen Abbildungen zählen, da Spider keine Bilder durchforsten können und somit der `alt`-Text den Suchmaschinen Crawlern mitteilt, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit dem abgestimmten Merkmal in Verbindung stehen, hinzuzufügen, um die Suchmaschinenrankings zu manipulieren; dieser Art von Verhalten ist leicht zu erkennen und neigt dazu, bestraft zu werden.
    > Ebenso **nicht** wiederholtes, nicht hilfreiches Material oder Blöcke von Schlüsselwörtern innerhalb der tatsächlichen Seite hinzufügen, um die Größe und das Suchranking der Seite zu verbessern. Dies schadet mehr als es hilft, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Konzentrieren Sie sich auf Themeninhalte**: Es ist weit besser, Inhalte rund um das Thema der Seite zu schreiben als zu einem spezifischen Schlüsselwort. Es ist sehr wahrscheinlich, dass viele Schlüsselwörter existieren, die Sie für ein bestimmtes Thema einfügen könnten; in der Tat erstellen viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (mit unterschiedlichen Längen von kurzen, mittleren und langen Schlüsselwörtern), die in ihren Artikel aufgenommen werden, abhängig von der Länge. Dies wird Ihre Wortwahl diversifizieren und zu weniger Wiederholung führen.

## Schreibstil

Abgesehen davon, dass Sie grammatikalisch korrekte Sätze auf Englisch schreiben, empfehlen wir Ihnen, die folgenden Richtlinien zu befolgen, um den Inhalt auf MDN Web Docs konsistent zu halten.

- [Abkürzungen und Akronyme](#abkuerzungen_und_akronyme)
- [Großschreibung](#grossschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralisierung](#pluralisierung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anfuehrungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das mit dem ersten Buchstaben jedes Wortes aus einem Satz gebildet wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erklärungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite andersfrei benennen Sie Akronyme, die Benutzern wahrscheinlich unbekannt sind. Im Zweifelsfall den Begriff ausschreiben. Noch besser, verlinken Sie ihn zu dem Artikel oder [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie durchgehend Großbuchstaben und lassen Sie Punkte in allen Abkürzungen und Akronymen weg, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in klammernden Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderem angemessenen Satzzeichen.

  - **Richtig**: Webbrowser (z.B., Firefox) können verwendet werden…
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden…
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden…
  - **Falsch**: Webbrowser, (z.B. Firefox) können verwendet werden…

  In regulärem Text (d.h. Text außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent zur Abkürzung.

  - **Richtig**: … Webbrowser und so weiter.
  - **Falsch**: … Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden …
  - **Falsch**: Webbrowser z.B., Firefox können verwendet werden …

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente lateinischer Abkürzungen zusammen:

  | Abkürzung | Latein           | Englisch                     |
  | --------- | ---------------- | ---------------------------- |
  | cf.       | _confer_         | vergleichen                  |
  | e.g.      | _exempli gratia_ | zum Beispiel                 |
  | et al.    | _et alii_        | und andere                   |
  | etc.      | _et cetera_      | und so weiter                |
  | i.e.      | _id est_         | das heißt, in anderen Worten |
  | N.B.      | _nota bene_      | merke wohl                   |
  | P.S.      | _post scriptum_  | Nachsatz                     |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich sinnvoll ist, eine lateinische Abkürzung zu verwenden. Einige dieser Abkürzungen werden so selten verwendet, dass viele Leser entweder ihre Bedeutung verwechseln oder nicht verstehen können.
  >
  > Vergewissern Sie sich auch, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Beispielsweise sollten Sie darauf achten, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Für Pluralformen von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals ein Apostroph.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Bei Verwendung der Kurzform wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text, verwenden Sie die ausgeschriebene Form "versus".

  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie die Standardregeln der englischen Großschreibung im Fließtext, und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleinstehend oder als Modifikator) und "internet" in Kleinbuchstaben zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, sodass Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN finden.
> Ändern Sie dies ruhig, während Sie andere Änderungen vornehmen, aber es ist nicht nötig, einen Artikel nur zu ändern, um die Groß-/Kleinschreibung zu korrigieren.

Tastaturtasten sollten die Satzstil-Großschreibung verwenden, nicht die vollständige Großbuchstaben-Großschreibung.
Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie Marken, die Großbuchstaben enthalten, oder Wörter, die von einem Personennamen abgeleitet sind (es sei denn, das Wort wird in Code verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Warenzeichen der Oracle Corporation, sollte immer wie markenrechtlich geschützt geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert dazu, informell zu sein, daher sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z.B., "don't", "can't", "shouldn't"), wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Verwenden Sie in Fließtext Kommas nur in fünfstelligen und größeren Zahlen.

  - **Correct**: 4000; 54,000
  - **Incorrect**: 4,000; 54000

- **Datumsangaben**: Für Datumsangaben (außer in Codebeispielen) verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Correct**: 1920s
  - **Incorrect**: 1920's

- **Pluralformen von Zahlen**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.

  - **Correct**: 486s
  - **Incorrect**: 486's

### Pluralisierung

Verwenden Sie englische Pluralformen, nicht die von Latein oder Griechisch beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "kurvenreichen" Anführungszeichen und Anführungszeichen. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir aus Konsistenzgründen eine oder die andere Wahl treffen müssen. Gelangen gekrümmte Anführungszeichen oder Apostrophe in Code-Snippets, selbst in Inline-Codes, können Leser sie möglicherweise kopieren und einfügen und erwarten, dass sie funktionieren (was sie jedoch nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "kurvenreichen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie ’kurvenreiche Anführungszeichen.’"

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir der Zeichensetzungsregel bei der Kommasetzung bewusst sein müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitender Nebensatz ist ein abhängiger Satz, der normalerweise am Anfang eines Satzes zu finden ist. Setzen Sie ein Komma nach einem einleitenden Nebensatz, um ihn vom folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, verweisen Sie auf unseren Schreibstil-Leitfaden."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen verweisen Sie auf unseren Schreibstil-Leitfaden."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie meistens eine numerische Tastatur für die Dateneingabe."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie meistens eine numerische Tastatur für die Dateneingabe."

- **Vor Konjunktionen**: Das serielle Komma (auch bekannt als "Oxford-Komma") erscheint vor der Konjunktion in einer Serie von drei oder mehr Elementen. Auf MDN Web Docs verwenden wir das serielle Komma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde in Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde in Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste mit zwei Elementen.

  - **Richtig**: "Mein Hund ist niedlich und schlau."
  - **Falsch**: "Mein Hund ist niedlich, und schlau."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn jedoch der Satz sehr lang oder komplex wird, schreiben Sie ihn lieber in zwei getrennte Sätze um.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie sollten auf die Dateieinstellungen achten."
    - **Falsch**: "Sie können diesen Schritt aber Sie sollten auf die Dateieinstellungen achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welche"**: Eine beschränkende Klausel ist notwendig für die Bedeutung des Satzes und benötigt keine Kommas, um vom restlichen Satz getrennt zu werden. Eine restriktive Klausel wird üblicherweise durch "that" eingeleitet und **sollte nicht** von einem Komma vorangestellt werden.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht-restriktive Klausel liefert zusätzliche Informationen und ist nicht notwendig für die Bedeutung des Satzes. Eine nicht-restriktive Klausel wird üblicherweise durch "sogar" eingeleitet und sollte von einem Komma vorangestellt werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, die eine Liste von Ursprüngen für jedes Feature erlaubt."
  - **Falsch**: "Sie schreiben eine Richtlinie die eine Liste von Ursprüngen für jedes Feature erlaubt."

- **Vor "such as"**: Wenn "such as" Bestandteil einer nicht-restriktiven Klausel ist und der übrige Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "such as".

  - **Richtig**: "Das Array-Objekt hat Methoden zur Manipulierung von Arrays auf verschiedene Weise, wie beispielsweise das Verbinden, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Arten wie das Verbinden, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma bei "such as" verwendet wird. In diesem Fall ist die Klausel mit "such as" notwendig für die Bedeutung des Satzes.

  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem Funktionen wie Audio- und Videobearbeitung hinzugefügt und der Zugriff auf Rohdaten unter Verwendung von WebSockets erlaubt werden."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem Funktionen, wie Audio- und Videobearbeitung, hinzugefügt und der Zugriff auf Rohdaten unter Verwendung von WebSockets erlaubt werden."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanische Englisch-Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag im [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als Variation aufgelistet oder wird in einer nicht-amerikanischen Form von Englisch primär verwendet.
Wenn Sie beispielsweise [nach "behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform) suchen, finden Sie die Phrase "Hauptsächlich Britisch" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie nicht die Variationsschreibung.

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu finden. Es läuft jede Woche und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und genehmigte Wörter enthalten, die nicht in den Standardwörterbüchern vorhanden sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibkonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um auf HTML- und XML-Elemente zu verweisen, anstatt "Tag". Darüber hinaus sollte das Element in spitze Klammern "<>" geschrieben werden und mit Backticks (\`) formatiert werden. Zum Beispiel wird die Verwendung von \<input\> innerhalb von Backticks es so gestylt, wie erwartet `<input>`.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das Span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element stylen, die spitzen Klammern "<>" hinzufügen und einen Link zur Referenzseite des Elements setzen wird.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf den MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" aus Gründen der Konsistenz, wann immer möglich.

- **Benutzeroberflächenaktionen**: In Task-Sequenzen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzerschnittstellenelement durch dessen Beschriftung und Typ.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Während die aktive Stimme bevorzugt wird, ist auch die passive Stimme zulässig, da unsere Inhalte informell sind.
Versuchen Sie, konsistent zu sein.

## Seitenkomponenten

In diesem Abschnitt werden die Richtlinien für die verschiedenen Teile jeder Seite aufgeführt, wie Überschriften, Anmerkungen, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkungen)](#querverweise_verlinkungen)
- [Externe Links](#externe_links)
- [Kurz-URLs (Shortlinks)](#kurz-urls_shortlinks)
- [Überschriftsebenen](#ueberschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch-Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Erstellen eines Codebeispiels für MDN Web Docs:

- Jedes Codebeispiel sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das im Codebeispiel vorgestellte Szenario zu beschreiben. Zum Beispiel, "Verwendung des Offset-Drucks" und "Rückkehr zum Stil in der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Codebeispiel, die die spezifischen Details angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel, "Im folgenden Beispiel werden im CSS die Cascade-Ebenen `base` und `special` definiert."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Codebeispiel, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und dessen Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature nutzen könnte oder müsste.
- Wenn Sie mit einem großen Stück Codebeispiel arbeiten, kann es sinnvoll sein, es in kleinere logische Teile aufzuteilen, damit sie individuell beschrieben werden können.
- Beim Hinzufügen von [Live-Samples](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels mit demselben Typ (HTML, CSS und JavaScript) zusammengefügt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehrere Abschnitte zu unterteilen, jeweils optional mit eigenen Beschreibungen, Überschriften usw. Dies macht die Dokumentation von Code extrem leistungsstark und flexibel.

Um zu lernen, wie Codebeispiele für MDN Web Docs gestylt oder formatiert werden, siehe unsere [Richtlinien zur Formatierung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkungen)

Wenn Sie auf eine andere Seite oder einen Abschnitt einer Seite auf MDN verweisen, verwenden Sie die Satzkonstruktion im Linktext. Verwenden Sie die Satzkonstruktion im Linktext, selbst wenn sie von der Titel- oder Abschnittüberschrift des verlinkten Dokuments abweicht (es könnte sein, dass der Fall im Titel oder Abschnittstitel unkorrekt ist). Verwenden Sie keine Anführungszeichen um die Linktext. Um auf eine Seite auf MDN nach ihrem Titel zu verweisen, verwenden Sie folgenden Stil:

- **Richtig**: "Verweisen Sie auf den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Falsch**: "Verweisen Sie auf den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Folgen Sie einem konsistenten Stil bei Verlinkungen zu Abschnitten innerhalb einer Seite:

- **Richtig**: "Weitere Informationen finden Sie im Abschnitt [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im _Memory management_ Leitfaden."

Wenn der Abschnitt, auf den Sie verlinken, auf derselben Seite ist, können Sie den Standort des Abschnitts mit beschreibenden Phrasen andeuten.

- **Richtig**: "Dieses Konzept wird ausführlicher im Abschnitt [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) dieses Dokuments beschrieben."
- **Falsch**: "Dieses Konzept wird ausführlicher im untenstehenden Abschnitt [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) beschrieben."

Auf MDN können Sie eine Referenzseite auch mit einem Makro verlinken. Diese Makros werden auf der [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) Seite beschrieben. Um eine HTML-Element-Referenzseite zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um eine CSS-Eigenchaftsreferenzseite zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir befolgen ähnliche Querverweislinien in den Abschnitten [Siehe auch](#siehe_auch) am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs unter bestimmten Umständen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs zu setzen oder nicht. Pull-Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diese Richtlinien nicht befolgen.

Wenn Sie erwägen, einen externen Link zum MDNs [Learn web development](/de/docs/Learn_web_development)-Inhalt hinzuzufügen, bitte lesen Sie auch [Learn web development writing guidelines > Partner links and embeds](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie erwägen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass nur ein geringes Risiko der folgenden ist:

- Gebrochene oder veraltete Links
- Erscheinung wie eine Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zu nutzen, um Spam zu vertreiben
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link setzen, erwägen Sie, Inhalte innerhalb von MDN Web Docs zu verlinken. Interne Links sind einfacher zu warten und machen das gesamte MDN Web Docs wertvoller für Leser.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, langlebig und weit verbreitet sind. Sie sollten bevorzugt Links zu externem Inhalt hinzufügen, der ist:

  - Einzigartig oder unentbehrlich (z.B. ein IETF RFC)
  - Notwendig für die Zitation oder Anerkennung (z.B. als Teil einer Creative Commons Lizenz)
  - Mehr wahrscheinlich gepflegt als das hier auf MDN Web Docs inkorporierte Thema (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder Community-gestützt, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz oder Wartbarkeit, Zugänglichkeit oder setzen sonstige Barrieren für Leser. Vermeiden Sie das Hinzufügen von Links zu externem Inhalt, welches ist:

  - Allgemein oder nicht spezifisch (z.B. die Homepage eines Anbieters anstelle der zugehörigen Dokumentation)
  - Kurzlebig oder nicht gewartet (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstpromotional (z.B. die eigenen Arbeiten eines Autors außerhalb der MDN Web Docs)
  - Bezahlschranke (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in einkommensschwachen Ländern unerreichbar ist)
  - Unzugänglich (z.B. ein Video ohne Untertitel)

- **Links, die selbstpromotional oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository von Wert sein können, das Setzen von Links zu Ihren eigenen Ressourcen kann den Anschein eines Interessenkonflikts erwecken. Überlegen Sie es sich zweimal, bevor Sie Links zu Ressourcen setzen, zu denen Sie berufliche oder persönliche Beziehungen unterhalten.

  > [!NOTE]
  > Wenn Sie eine berufliche oder persönliche Beziehung zu dem Ziel eines Linkes haben, müssen Sie diese Beziehungsmöglichkeiten in Ihrem Pull-Request offenlegen. Das Versäumnis kann Ihre weitere Teilnahme an den MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie beispielsweise der Editor einer Spezifikation sind und zur Dokumentation bezüglich dieser Spezifikation beitragen, wird das Setzen eines Links zu dieser Spezifikation erwartet und akzeptiert. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Kurz-URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter merkbare URLs zu verkürzen (auch als "Shortlinks" bekannt). Sie verschleiern jedoch auch das Ziel der URL. Zusätzlich kann bei bestimmten Shortenern das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über benutzergenerierte Drittanbieter-URL-Shortener erstellt wurden. Wenn `https://myshort.link/foobar` ein Shortlink ist, der von einem zufälligen Benutzer generiert wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com` URL.

Bei erstparteiigen Shortenern, die von den Organisationen gepflegt werden, welche auch die Ziel-URLs pflegen, sind diese zu bevorzugen. `https://bugzil.la` wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` weiterleitet, welcher ebenfalls eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Verwenden Sie z.B. `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in abnehmender Reihenfolge ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese werden in die entsprechenden [HTML-Heading-Tags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Tags übersetzt.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftsebene hinzuzufügen, überlegen Sie, den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite aufzuteilen. Alternativ betrachten Sie eine Präsentation der Information als Aufzählungspunkte, um die Verwendung einer vierten Überschrift zu vermeiden.

Beachten Sie die folgenden Hinweise beim Erstellen von Überschriften für Untersektionen:

- **Erstellen Sie keine einzelnen Untersektionen.** Teilen Sie ein Thema nicht in ein einzelnes Unterthema auf.
  Es ist entweder zwei Unterüberschriften oder mehr oder gar keine.
- **Verwenden Sie keine Inline-Stile, -Klassen oder -Makros in Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzugeben (z.B. "Using `FooBar` interface").
- **Erstellen Sie keine "stoßenden Überschriften".** Das sind Überschriften, denen sofort eine Unterüberschrift ohne Erklärungstext dazwischen folgt.
  Das sieht nicht gut aus und lässt Leser ohne einleitenden Text am Beginn des übergeordneten Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite hinzufügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien mit einer sehr permissiven Lizenz zu verwenden, wie z.B. [CC0](https://creativecommons.org/public-domain/cc0/) oder mindestens eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, lassen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com> laufen, um das Gewicht der Seite zu reduzieren.
- Für `SVG`, lassen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) laufen und stellen Sie sicher, dass die `SVG`-Datei am Ende der Datei eine leere Zeile hat.
- Jedes Bild muss einen [beschreibenden `alt` Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten einheitlich und strukturiert über alle Seiten formatiert werden.
Einzelne Listenelemente sollten mit geeigneten Satzzeichen, unabhängig von der Listenform, geschrieben werden.
Je nach Art der Liste, die Sie erstellen, möchten Sie Ihre Schreibweise wie in den folgenden Abschnitten beschrieben anpassen. In beiden Fällen fügen Sie einen Einleitungssatz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzähllisten**: Aufzähllisten sollten verwendet werden, um verwandte Teile prägnanter Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder ein Subjekt oder beides fehlt) in Aufzählungslisten sollten mit standardmäßiger Interpunktion verfasst werden — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes ein Punkt erscheinen, einschließlich des letzten Satzes des Elements, wie es in einem Absatz erwartet würde. Hier ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes enthalten:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel stellt jeder Punkt eine Bedingung dar, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist kein Punkt am Ende erforderlich. Beispiel:

  > Die folgenden farbbezogenen Eigenschaften sind in diesem Szenario hilfreich:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Schatten zum Text hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, selbst wenn ein Listenelement nur aus drei oder wenigen Wörtern besteht. Aber soweit wie möglich, folgen Sie der gleichen Struktur für alle Elemente in einer Liste; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Anweisungsliste zu nummerieren. Da Anweisungen komplex sein können, ist Klarheit eine Priorität, insbesondere wenn der Text in jedem Listenelement lang ist. Wie bei Aufzählungslisten, folgen Sie den standardmäßigen Zeichensetzungsregeln. Hier ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer vor Beginn der Anweisungen den Kontext zu geben.
  > 2. Beginnen Sie Ihre Anweisungen zu erstellen und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können recht umfangreich sein, daher ist es wichtig, klar zu schreiben und die korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einem kurzen abschließenden Überblick oder einer Erklärung über das erwartete Ergebnis nach der Fertigstellung.

  Das Folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung zur vorhergehenden Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die erläuternde Schritte bietet, um eine nummerierte Liste mit der richtigen Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anweisungszwecke verwendet werden oder um jemanden durch ein geordnetes Verfahren zu führen, achten Sie darauf, jedes Element fokussiert zu halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und auch Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_-Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#querverweise_verlinkungen) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch-Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch-Abschnitt im [Aufzähllisten](#listen)-Format, wobei jedes Element der Liste ein Begriff oder eine Phrase ist. Im Abschnitt [Learn web development](/de/docs/Learn_web_development) auf MDN folgt der Siehe auch-Abschnitt dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists)-Format.

Um die Konsistenz über MDN Web Docs hinweg zu gewährleisten, beachten Sie die folgende Richtlinien, während Sie einen Siehe auch-Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte der Titel der Seite oder des Abschnitts sein, auf den verlinkt wird. Beispielsweise wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA-Zustände und -Eigenschaften" folgendermaßen lauten:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satzgestaltung im Linktext, selbst wenn es von dem verlinkten Seitentitel oder Abschnittstitel abweicht. Es könnte sein, dass der Fall im Titel der Seite oder des Abschnitts unkorrekt ist. Zum Beispiel wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satzgestaltung folgendermaßen lauten:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch für externe Links verwenden Sie die Satzgestaltung, selbst wenn die Gestaltung auf der Zielartikel-Seite anders ist. Dies soll die Konsistenz über MDN Web Docs hinweg sicherstellen. Ausnahmen umfassen die Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Verlinkung zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_ Seite beschrieben. Die Verwendung des Makros wird eine Codeformatierung zum Schlüsselwort im Linktext hinzufügen, wie im nächsten Beispiel gezeigt.
- Es ist kein Artikel ("Ein", "Eine", "Das") am Anfang des Listenelements mit Links erforderlich. Am Ende des Listenelements sind keine Satzzeichen erforderlich, da es sich um einen Begriff oder eine Phrase handeln wird.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Das [`revert-layer`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie eine Codeformatierung mit Backticks (\`) zu Schlüsselwörtern und Literalen im Linktext hinzu, auch wenn die Formatierung nicht in Seitentiteln und Abschnittstiteln verwendet wird. Zum Beispiel wird der Linktext für den Seitentitel "Array() constructor" zu [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link minimal. Im Fall einer Beschreibung, fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Interpunktion. Halten Sie den gesamten verlinkten Text am Anfang des Listenelements, um das Scannen der Liste von Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren für das Styling von Kontrollkästchen
- Verwenden Sie nicht das Wort "und" vor dem letzten Artikel in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links geben Sie das Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) an, wann es machbar und angebracht ist. Das Bereitstellen dieser Informationen vorneweg gibt den Lesern eine klare Vorstellung, wohin sie beim Klicken auf den Link geleitet werden. Das Datum der Veröffentlichung oder der letzten Aktualisierung gibt den Lesern eine Vorstellung zur Relevanz des verlinkten Artikels und hilft gleichzeitig den MDN-Betreuern die Überprüfung von Links zu Artikeln, die schon lange nicht mehr aktualisiert wurden. Wenn Sie einen Artikel auf Wikipedia verlinken, können sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel zum Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch-Abschnitt, zusammen mit der Quellen- und Jahresinformation:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch den Namen der Autoren angeben. Einige Beispiele sind im Abschnitt [Weiterlesen](#language_grammar_and_spelling) aufgelistet. Vermeiden Sie es, den Namen des Autors für Blogbeiträge oder GitHub-Repositories, die Sie möglicherweise verlinken, hinzuzufügen.

#### Reihenfolge der Links

- Listen Sie Links zu MDN-Seiten in der Reihenfolge von Referenzseiten zuerst, gefolgt von Links zu verwandten Leitfäden und Tutorialseiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich zur Scannbarkeit der Listenelemente.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie einer alphabetischen oder einfacher-zu-erstellt Ordnung, was immer besser zum Kontext passt.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Fachgebiet hinzufügen müssen, werden Sie dies in der Regel durch das Erstellen einer Einstiegsseite tun und dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Einstiegsseite sollte mit einem oder zwei Absätzen eröffnet werden, die das Thema oder die Technologie beschreiben, gefolgt von einer Liste der Unterseiten mit Beschreibungen jeder Seite.
Sie können die Einfügung von Seiten in die Liste mit einigen von uns erstellen Makros automatisieren.

Betrachten Sie zum Beispiel das [JavaScript](/de/docs/Web/JavaScript) Leitfaden, das wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnis-Seite
- [JavaScript/Guide/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Vermeiden Sie es, Ihren Artikel zu weit oben in der Hierarchie zu platzieren, da dies die Seite verlangsamt und die Suche und Seitennavigation weniger effektiv macht.

### Slugs

Der Seitentitel, der am oberen Rand der Seite angezeigt wird, kann sich vom "Slug" der Seite unterschieden, der Teil der URL der Seite nach `<locale>/docs/` ist. Beachten Sie die folgenden Richtlinien bei der Bestimmung eines Slug:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Stufe in der Hierarchie erstellen, sollte der Komponentenanteil der neuen Stufe im Slug nur aus einem Wort oder zwei bestehen.
- Slugs sollten für einen mehrteiligen Bestandteil einen Unterstrich verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie der Satzgestaltung auch in Slugs für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und strukturieren auch die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite. Ein Seitentitel kann sich von dem Seiten-"Slug" unterscheiden, wie im [Slugs](#slugs)-Abschnitt erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Hauptstilinie der Großschreibung**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften die Satz-Stilkonstruktion (d.h. nur das erste Wort und Eigennamen werden großgeschrieben) und nicht die Schlagzeilen-Großschreibung verwenden:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode zur Erstellung von JavaScript Rollovers"

  Wir haben viele ältere Seiten, die geschrieben wurden bevor diese Stilregel aufgestellt wurde. Zögern Sie nicht, diese ebenfalls bei Bedarf zu aktualisieren, wenn Sie mögen. Wir arbeiten uns allmählich durch.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren wollen, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis kann Ihnen helfen zu entscheiden, wie Sie Informationen anordnen möchten. Behandeln Sie einfache Konzepte zuerst und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Behandeln Sie konzeptionelle Informationen zuerst und gehen dann zu handlungsorientierten Themen über.

  Denken Sie an die folgenden Richtlinien, wenn Sie Titel für eine Seite und Abschnitte oder Unterabschnitte schreiben:

  - **Gehen Sie von oben nach unten**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) angegeben, gehen Sie von einer höheren `##` zu einer niedrigeren `####` Ebene, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriften für die breiteren Einführungen, und verwenden Sie spezifischere Titel, wenn Sie zu den niedrigeren Ebenen übergehen.
  - **Gruppieren Sie logisch**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Die Benennung der Titel der verschiedenen Abschnitte kann Ihnen in dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leicht zu überfliegen in Text und im Inhaltsverzeichnis.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt zur Einführung von HTML-Elementen, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln – eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Versuchen Sie zu diesem Zweck, soweit möglich, das Wort "and" in einem Titel zu vermeiden.
  - **Verwenden Sie eine parallele Konstruktion**: Verwenden Sie eine ähnliche Sprache für Titel auf der gleichen Überschriftenebene. Wenn zum Beispiel ein `###` Überschriftenniveau Titel Gerundien (Wörter, die mit "-ing" enden) wie "Installing" verwendet, schreiben Sie dann alle Titel auf dieser Überschriftenebene mit Gerundien. Wenn ein Titel mit einem Imperativ beginnt, wie "Verwenden" oder "Konfigurieren", schreiben Sie dann alle Titel auf dieser Überschriftenebene mit einem Imperativ.
  - **Vermeiden Sie allgemeine Begriffe in unteren Überschriften**: Wiederholen Sie nicht den Text des Titels einer höheren Überschrift in unteren Titeln. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", geben Sie dem Unterabschnitt den Titel "Nach Einführungsklauseln" anstelle von "Kommas nach Einführungsklauseln".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, Titel mit den Artikeln "Ein", "Eine" oder "Das" zu beginnen.
  - **Hinzufügen von einleitenden Informationen**: Nach einem Titel fügen Sie einige einführende Texte hinzu, um zu vermitteln, was in dem Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, sich auf den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu beziehen.

### Sprache, Grammatik und Rechtschreibung

Falls Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein.

- [Häufige Fehler im Gebrauch der englischen Sprache](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [FAQ zur englischen Grammatik](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Gebrauch](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Website für den Gebrauch der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für den Gebrauch von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Stil: Lektionen in Klarheit und Anmut](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
