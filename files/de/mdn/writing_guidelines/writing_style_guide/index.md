---
title: Leitfaden für den Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Dieser Leitfaden für den Schreibstil beschreibt, wie Inhalte in den MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen die sprachliche und stilistische Konsistenz auf der gesamten Website sicherstellen. Trotzdem interessiert uns mehr der Inhalt als die Formatierung, daher fühlen Sie sich nicht verpflichtet, den gesamten Stil-Leitfaden zu lernen, bevor Sie einen Beitrag leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um diesen Leitfaden zu befolgen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für Englisch-sprachige Dokumentationen. Andere Sprachen können (und sind eingeladen) ihre eigenen Stil-Leitfäden zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Dennoch sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und wie verschiedene Komponenten auf einer Seite wie Listen und Titel formatiert werden sollen.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte liefern Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Inklusive relevanter Beispiele](#einschluss_relevanter_beispiele)
- [Bereiten Sie eine beschreibende Einführung vor](#präsentieren_sie_eine_beschreibende_einführung)
- [Verwenden Sie eine inklusive Sprache](#verwenden_sie_eine_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Kopf. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so viel Detail zu grundlegenden Netzwerkkonzepten enthalten wie die typische Seite zum Netzwerk. Denken Sie daran, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind klar, prägnant und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen Aktivpassiv und eindeutige Pronomen. Schreiben Sie kurze Sätze, indem Sie sich auf eine Idee pro Satz beschränken. Definieren Sie neue Begriffe, bevor Sie sie verwenden.
- **Prägnant**: Es ist wichtig zu wissen, wie viel geschrieben werden muss. Wenn Sie zu viele Details angeben, wird die Seite mühsam zu lesen und wird selten verwendet.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Ausdrucksweise konsistent auf der gesamten Seite und über mehrere Seiten hinweg verwenden.

### Einschluss relevanter Beispiele

Fügen Sie im Allgemeinen Beispiele oder Szenarien aus dem wirklichen Leben hinzu, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um etwaige Randfälle zu klären, die möglicherweise existieren.
Sie können auch Beispiele verwenden, um Lösungen für allgemeine Aufgaben und Probleme aufzuzeigen, die auftreten können.

### Präsentieren Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz bzw. die Absätze vor der ersten Überschrift die Informationen, die die Seite abdecken wird, angemessen zusammenfassen und was die Leser möglicherweise nach dem Durchgehen des Inhalts erreichen können. Auf diese Weise kann ein Leser schnell bestimmen, ob die Seite für seine Bedürfnisse und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen sowie das vorausgesetzte Wissen informieren, das der Leser haben sollte, falls vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den entsprechenden Informationen, und es sollten Hinweise auf Situationen angeboten werden, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen weg, wie zum Beispiel was genau bedeutet, "Text zu umranden", wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang.
  Es sind zu viele Details enthalten, und der Text taucht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die Methode `strokeText()` konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Beim Aufruf hebt die Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** die Umrisse der Zeichen in der angegebenen Zeichenfolge an den angegebenen Koordinaten hervor, indem die aktuelle Stiftfarbe verwendet wird.
  > In der Terminologie der Computergrafik bedeutet "Umranden" von Text, die Umrisse der Glyphen in der Zeichenkette zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schrift wie im [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) Eigenschaft des Kontextes angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontextes bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenkette relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenkette beginnend bei `x - (stringWidth / 2)` gezeichnet, wodurch die angegebene X-Koordinate in der Mitte der Zeichenkette platziert wird.
  > Wenn der Wert `"left"` ist, wird die Zeichenkette beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der Ihnen ermöglicht, eine maximale Breite für die Zeichenkette in Pixel anzugeben.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um innerhalb eines so breiten Bereiches beim Zeichnen zu passen.
  >
  > Sie können die **`fillText()`** Methode aufrufen, um die Zeichen einer Zeichenkette mit Farbe zu füllen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine geeignete Einführung**: Die folgende Sektion gibt einen viel besseren Überblick über die Methode `strokeText()`.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrandet (zeichnet die Umrisse) der Zeichen einer angegebenen Zeichenkette, verankert an der durch die gegebenen X- und Y-Koordinaten bestimmten Position.
  > Der Text wird unter Verwendung der aktuellen [`Schrift`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontextes gezeichnet und wird nach den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet und gerechtfertigt.
  >
  > Für weitere Details und Beispiele, siehe den [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) Abschnitt auf der Seite Zeichnen von Grafiken sowie unser Hauptartikel zum Thema, [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie eine inklusive Sprache

MDN hat eine breite und diverse Zielgruppe.
Wir ermutigen Sie stark, den Text so inklusiv wie möglich zu halten.
Einige Begriffe, obwohl sie nicht beabsichtigen, beleidigend zu sein, könnten Leser bestimmter Hintergründe entfremden, wie zum Beispiel:

- Vermeiden Sie die Verwendung der Begriffe **Meister** und **Sklave** und verwenden Sie stattdessen **Haupt** und **Replik**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Vernunft** sollte durch **Kohärenz** ersetzt werden.
- Anstatt **Dummy** zu verwenden, verwenden Sie **Platzhalter**.
- Sie sollten die Begriffe **verrückt** und **wahnsinnig** in der Dokumentation nicht verwenden; falls doch, ziehen Sie stattdessen **fantastisch** in Betracht.

Vermeiden Sie figurative Redewendungen mit Darstellungen von Gewalt oder Grausamkeit, die bei bestimmten Zielgruppen eine Reaktion hervorrufen und den falschen Ton für Dokumentationen setzen können. Zum Beispiel:

- Anstatt "zwei Fliegen mit einer Klappe schlagen", verwenden Sie "zwei Probleme auf einmal lösen".
- Anstatt "ein totes Pferd prügeln", verwenden Sie "den Punkt überbetonen" oder "im Kreis drehen".
- Anstatt "es gibt mehr als einen Weg, eine Katze zu häuten", verwenden Sie "es gibt mehr als eine Möglichkeit, dies zu tun".

Es ist am besten, in jedem Schriftstück, in dem das Geschlecht für den Gegenstand irrelevant ist, geschlechtsneutrale Sprache zu verwenden.
Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn es um eine Person eines beliebigen Geschlechts geht, ist "er"/"sein" nicht angemessen.

Sehen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Nutzung seiner Webcam gestatten möchte."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Nutzung ihrer Webcam gestatten möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen folgendermaßen:

- **Korrekt**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Nutzung ihrer Webcam gestatten möchten."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[Singular 'sie'](https://en.wikipedia.org/wiki/Singular_they).". Die geschlechtsneutralen Pronomen umfassen "sie", "ihnen", "ihr", und "ihres".

Eine andere Möglichkeit ist, die Benutzer in den Plural zu setzen, wie folgt:

- **Korrekt**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Nutzung ihrer Webcams gestatten möchten."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Korrekt**: "Ein Bestätigungsdialog erscheint, der die Benutzerberechtigung für den Zugriff auf die Webcam anfordert."
- **Korrekt**: "Ein Bestätigungsdialogfeld erscheint, das den Benutzer um Erlaubnis zur Webcam-Nutzung bittet."

Dieses letzte Beispiel für den Umgang mit dem Problem ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einige der Komplexitäten, die mit dem Umgang mit Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise stark unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für die Leser als auch für die Übersetzer erleichtern.

### Verwenden Sie zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und richtungsbezogenen Wörtern wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer gilt. Sie können auch unklar oder irreführend sein, insbesondere für Benutzer von Bildschirmlesern oder solche, die übersetzte Inhalte lesen, bei denen Richtungssprache zweideutig oder schwierig zu übersetzen sein kann. In responsiven Layouts, bei denen sich die Position von Inhalten je nach Bildschirmgröße ändern kann, können solche Richtungsreferenzen ungenau werden. Diese Art von Sprache kann die Zugänglichkeit beeinträchtigen und es Benutzern erschweren, den Inhalt zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Sätze, die den Abschnitt, das Konzept oder das Element, auf das verwiesen wird, eindeutig identifizieren. Beziehen Sie sich auf Abschnitte mit ihren Titeln oder Überschriften und beziehen Sie sich auf Beispiele oder Code-Snippets, die auf das hinweisen, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Korrekt**: "Siehe den [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt später auf dieser Seite."
- **Falsch**: "Siehe den Zugänglichkeitsabschnitt unten."

- **Korrekt**: "Im folgenden Codebeispiel animieren wir einen Kreis mit CSS-Übergängen."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mit CSS-Übergängen."

- **Korrekt**: "Dieses Konzept wird im früheren Abschnitt mit dem Titel Erstellen einer Medienabfrage erklärt."
- **Falsch**: "Dieses Konzept wird im Abschnitt oben erklärt."

Zusätzlich vermeiden Sie die Verwendung von vagen Linktexten wie "Klicke hier" oder "Lies diesen Artikel". Beschreibende Linktexte bieten einen besseren Kontext für alle Leser und verbessern die Nutzungserfahrung für Benutzer von unterstützenden Technologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Korrekt**: "Erfahren Sie mehr über [wie Sie Flex-Elemente anordnen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Wenn Sie diesen Richtlinien folgen, helfen Sie, die MDN-Dokumentation zugänglich, klar und für alle nutzbar zu machen, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben Sie mit SEO im Hinterkopf

Während das primäre Ziel jedes Schreibens auf den MDN Web Docs immer sein sollte, über offene Web-Technologie zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie tun möchten, oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material auch _finden_ können. Wir können dies erreichen, indem wir Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Hinterkopf behalten, während wir schreiben.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indizieren können, damit Leser leicht finden können, was sie brauchen. Die SEO-Richtlinien beinhalten sicherzustellen, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und mit Markup versehen ist, um den Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indizieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn ordnungsgemäß von Suchmaschinen indiziert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, werden Suchmaschinen davon ausgehen, dass die Seiten über dasselbe Thema sind, selbst wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Wörtern und demselben Beispiel. Dies macht es Suchmaschinen schwer zu wissen, welcher welcher ist, und sie teilen sich am Ende das Seitenranking, was dazu führt, dass beide schwerer zu finden sind, als sie es sein sollten.

  Es ist daher wichtig sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen:
  - **Erklären Sie mehr einzigartige Konzepte**: Erwägen Sie Anwendungsmöglichkeiten, bei denen es möglicherweise mehr Unterschiede gibt, als man denkt. Im Falle der Dokumentation der `width`- und `height`-Eigenschaften, schreiben Sie vielleicht über die unterschiedlichen Verwendungen von horizontalem und vertikalem Raum und bieten Sie eine Diskussion über die entsprechenden Konzepte an. Vielleicht können Sie die Verwendung von `width` im Hinblick auf das Schaffen von Raum für eine Seitenleiste erwähnen, während `height` für das vertikale Scrollen oder Fußzeilen verwendet wird. Es ist auch eine nützliche und wichtige Idee, Informationen über Zugänglichkeitsprobleme einzubeziehen.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele oft sowohl die (oder alle) der ähnlichen Methoden oder Eigenschaften verwenden, um mit zu beginnen, wodurch keine echten Änderungen erforderlich sind, wenn sie wiederverwendet werden. Also werfen Sie das Beispiel weg und schreiben Sie ein neues oder bieten Sie zumindest mehrere Beispiele an, von denen einige zumindest unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Ein Überblick über das, was das Beispiel tut, sowie eine Erklärung, wie es funktioniert, in einem angemessenen Detailgrad, gegeben des Komplexitätsgrades des Themas und des Zielpublikums, sollte inkludiert sein.

  Der einfachste Weg, übermäßige Ähnlichkeiten zu vermeiden, ist natürlich, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (sogenannte "dünne Seiten" im SEO-Jargon), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt) katalogisieren. Zu kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie sollten Sie versuchen, sicherzustellen, dass Seiten auf den MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Setzen Sie die Seite nicht künstlich in die Länge, aber behandeln Sie diese Richtlinie als Mindestziel, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genug Inhalt haben, um ordentlich durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:
  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub oder unvollständig ist, ergänzen Sie ihn. Wir versuchen, eindeutige "Stub"-Seiten auf den MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, die große Teile ihres Inhalts vermissen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types), der sie ist, korrekt strukturiert ist. Vergewissern Sie sich, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen abgedeckt sind—dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgestaltet sind**: Es ist einfach, eine kurze Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es besondere Fälle? Gibt es bekannte Einschränkungen, von denen der Leser wissen müsste?
  - **Fügen Sie Beispiele hinzu**: Es sollte Beispiele geben, die alle Parameter oder mindestens die Parameter (oder Eigenschaften, oder Attribute) abdecken, die von Benutzern aus der Anfänger- bis hin zur Mittelstufe wahrscheinlich verwendet werden, sowie alle fortgeschrittenen, die zusätzliche Erklärungen erfordern. Jedes Beispiel sollte mit einem Überblick darüber, was das Beispiel tun wird, welchen zusätzlichen Kenntnissen für das Verständnis nötig sind, usw., eingeleitet werden. Nach dem Beispiel (oder in das Beispiel eingestreut) sollte ein Text erklärt werden, wie der Code funktioniert. Sparen Sie nicht mit Details oder dem Umgang mit Fehlern in Beispielen. Beachten Sie, dass Benutzer _Ihr_ Beispiel kopieren und einfügen werden, um es in ihren eigenen Projekten zu verwenden, und _Ihr_ Code wird auf Produktionsseiten enden! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders allgemeine Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt anzunehmen, dass ein Benutzer herausfindet, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt zu diesem Anwendungsfall mit einem Beispiel und einem Text hinzu, in dem erklärt wird, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Einschließlich ordnungsgemäßer [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Texte auf allen Bildern und Diagrammen. Dieser Text, sowie Beschriftungen auf Tabellen und anderen Abbildungen, zählt, weil Suchspinnen keine Bilder durchsuchen können, und deshalb sagt `alt`-Text den Suchmaschinen-Crawlern, welchen Inhalt das eingebettete Medium enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder nicht verwandte Schlüsselwörter hinzuzufügen, um das Ranking der Suchmaschinen zu manipulieren; diese Art von Verhalten ist leicht zu erkennen und wird tendenziell abgestraft.
    > Ebenso, **fügen Sie keine** sich wiederholenden, unhilfreichen Materialien oder Blöcke von Schlüsselwörtern innerhalb der eigentlichen Seite hinzu, um die Größe und das Ranking der Seite zu verbessern. Dies richtet mehr Schaden als Nutzen an, sowohl für die Leserlichkeit des Inhalts als auch für unsere Suchergebnisse.

- **Konzentrieren Sie sich auf den Themeninhalt**: Es ist viel besser, Inhalte um das Thema der Seite herum zu schreiben, als um ein bestimmtes Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein gegebenes Thema einfügen könnten; in der Tat, viele SEOs erstellen eine Liste von 5-100 verschiedenen Schlüsselwörtern (je nach Länge kurze, mittlere, und lange) zur Aufnahme in ihren Artikel, abhängig von der Länge. Dies wird Ihre Wortwahl diversifizieren und zu weniger Wiederholung führen.

## Schreibstil

Abgesehen davon, dass Sie grammatikalisch korrekte Sätze in Englisch schreiben, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um den Inhalt über die MDN Web Docs hinweg konsistent zu halten.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das durch die ersten Buchstaben jedes Wortes eines Satzes erstellt wurde. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite erweitern Sie Akronyme, die den Benutzern wahrscheinlich unbekannt sind. Wenn Sie im Zweifel sind, erweitern Sie den Begriff. Noch besser, verlinken Sie ihn auf den Artikel oder [Glossar](/de/docs/Glossary), der die Technologie beschreibt.
  - **Korrekt**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".
  - **Korrekt**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können häufige lateinische Abkürzungen (usw., z.B., d.h.) in klammernden Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderer geeigneter Zeichensetzung.

  <!-- markdownlint-disable search-replace -->
  - **Korrekt**: Webbrowser (z.B., Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (zb: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  Im Fließtext (d.h. Text außerhalb von Notizen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.
  - **Korrekt**: ... Webbrowser, und so weiter.
  - **Falsch**: ... Webbrowser, usw.

  - **Korrekt**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente der lateinischen Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abkürzung | Latein           | Englisch                      |
  | --------- | ---------------- | ----------------------------- |
  | cf.       | _confer_         | vergleichen                   |
  | e.g.      | _exempli gratia_ | zum Beispiel                  |
  | et al.    | _et alii_        | und andere                    |
  | etc.      | _et cetera_      | und so weiter, usw.           |
  | i.e.      | _id est_         | das heißt, mit anderen Worten |
  | N.B.      | _nota bene_      | beachten Sie                  |
  | P.S.      | _post scriptum_  | Nachschrift                   |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder verwirrt oder ihre Bedeutungen nicht verstehen werden.
  >
  > Stellen Sie auch sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dazu entscheiden. Beispielsweise, achten Sie darauf, "z.B." nicht mit "d.h." zu verwechseln, was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Für den Plural von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals ein Apostroph.
  - **Korrekt**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Kontraktion verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Andernorts im Text verwenden Sie die ausgeschriebene Form "versus".
  - **Korrekt**: dies vs. das
  - **Falsch**: dies v. das
  - **Korrekt**: dies versus das

### Großschreibung

Verwenden Sie die standardmäßigen englischen Großschreibregeln im Fließtext, und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleine oder als Modifikator) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, daher finden Sie möglicherweise viele Fälle von "Web" und "Internet" auf MDN.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber das Bearbeiten eines Artikels nur um die Großschreibung zu ändern ist nicht erforderlich.

Tastaturtasten sollten satzweise groß geschrieben werden, nicht alle Großbuchstaben.
Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie zum Beispiel Marken, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Handelsmarke von Oracle Corporation, sollte immer so geschrieben werden, wie es markenrechtlich geschützt ist)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

Manche Werkzeugnamen und Projekte haben ihre eigenen markenrechtlich geschützten Regeln für Großschreibung. Diese könnten Namen erfordern, die komplett klein geschrieben sind ("npm" oder "webpack"), komplett in Großbuchstaben ("UNIX", "GNOME", "VIM") oder gemischte Schreibweise ("TypeScript", "macOS" oder "jQuery").

Die markenrechtlich geschützte Großschreibung von der offiziellen Website oder Dokumentation sollte immer benutzt werden, selbst zu Beginn eines Satzes. Wenn Sie sich unwohl fühlen, einen Satz mit einem Kleinbuchstaben beginnen zu lassen, empfehlen wir, den Satz umzuformulieren, um das Problem zu vermeiden. Zum Beispiel könnten Sie sagen: "Sie können den npm- Paketmanager verwenden, um..." anstatt "npm erlaubt es Ihnen zu...".

### Kontraktionen

Unser Schreibstil neigt dazu, lässig zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B., "don't", "can't", "shouldn't") zu verwenden, wenn Sie dies bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Verwenden Sie im Fließtext nur Kommas in fünfstelligen und größeren Zahlen.
  - **Korrekt**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (außer in Code-Beispielen) verwenden Sie das Format "Januar 1, 1900".
  - **Korrekt**: Februar 24, 1906
  - **Falsch**: Februar 24th, 1906; 24 Februar, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.
  - **Korrekt**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.
  - **Korrekt**: 1920s
  - **Falsch**: 1920's

- **Plurale von Nummern**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.
  - **Korrekt**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie Plurale im englischen Stil, nicht die pluralisierten Formen lateinischen oder griechischen Ursprungs.

- **Korrekt**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Apostrophe. In den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Das liegt daran, dass wir uns für Konsistenz entscheiden müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Code-Snippets, selbst inline, auftauchen, könnten Leser sie kopieren und einfügen und erwarten, dass sie funktionieren (was sie nicht tun werden).

- **Korrekt**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie nicht &ldquo;geschwungene Anf&uuml;hrungszeichen&rdquo;.

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns über die Komma-Verwendungsregeln bewusst sein müssen:

- **Nach einleitenden Worten**: Ein einleitender Satz ist eine abhängige Klausel, die sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie ein Komma nach einer einleitenden Klausel, um sie von der folgenden unabhängigen Klausel zu trennen.
  - Beispiel 1:
    - **Korrekt**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Korrekt**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Schreibstil-Leitfaden."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Schreibstil-Leitfaden."
  - Beispiel 3:
    - **Korrekt**: "Auf mobilen Plattformen erhalten Sie tendenziell eine numerische Tastatur zur Dateneingabe."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie tendenziell eine numerische Tastatur zur Dateneingabe."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. In den MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.
  - **Korrekt**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.
  - **Korrekt**: "Mein Hund ist süß und klug."
  - **Falsch**: "Mein Hund ist süß und klug."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber", und "oder" wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, ziehen Sie in Erwägung ihn als zwei Sätze neu zu formulieren.
  - Beispiel 1:
    - **Korrekt**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Korrekt**: "Mein Vater ist streng, aber liebend."
    - **Falsch**: "Mein Vater ist streng aber liebend."

- **Vor "that" und "which"**: Eine einschränkende Klausel ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas, um vom übrigen Satz abgesondert zu werden. Eine einschränkende Klausel wird in der Regel durch "that" eingeführt und **sollte nicht** durch ein Komma vorangehen.
  - **Korrekt**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie zur Erreichung Ihres Ziels benötigen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie zur Erreichung Ihres Ziels benötigen."

  Eine nicht einschränkende Klausel bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Eine nicht einschränkende Klausel wird normalerweise durch "which" eingeführt und sollte durch ein Komma vorangehen.
  - **Korrekt**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Merkmal ist."
  - **Falsch**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Merkmal ist."

- **Vor "such as"**: Wenn "such as" Teil einer nicht einschränkenden Klausel ist und der verbleibende Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "such as".
  - **Korrekt**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weisen, wie z.B. zum Verbinden, Umdrehen, und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weisen wie z.B. zum Verbinden, Umdrehen, und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "such as" verwendet werden sollte. In diesem Fall ist die Klausel, die "such as" enthält, wesentlich für die Bedeutung des Satzes.
  - **Korrekt**: "Webanwendungen werden mächtiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und Zugang zu Rohdaten über WebSockets ermöglichen."
  - **Falsch**: "Webanwendungen werden mächtiger, indem sie Funktionen, wie Audio- und Videomanipulation, hinzufügen und Zugang zu Rohdaten über WebSockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel.

- **Korrekt**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Verwenden Sie im Allgemeinen den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag sollte als abweichende Schreibung oder als hauptsächlich in einer nicht-amerikanischen Form von Englisch verwendet aufgeführt sein.
Zum Beispiel, wenn Sie nach "behaviour" (mit einem zusätzlichen _u_ zur amerikanisch-standardmäßigen Form) suchen, finden Sie den Hinweis "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, "behavior".
Verwenden Sie keine abweichenden Schreibungen.

<!-- cSpell:ignore localise behaviour colour -->

- **Korrekt**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erfassen. Es wird jede Woche ausgeführt und erstellt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
npm run lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich in [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden, die erlaubte Wörter enthalten, die nicht in den Standardwörterbüchern vorhanden sind. Sie können mehr Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML und XML-Elemente zu beziehen, anstatt "Tag". Darüber hinaus sollte das Element in Winkelklammern "<>" eingeschlossen und mit Backticks (`` ` ``) formatiert werden. Zum Beispiel wird die Verwendung von \<input\> innerhalb von Backticks es als `<input>` formatieren, wie es erwartet wird.
  - **Korrekt**: das `<span>` Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement` Macro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) angeben, was das Element formatieren, die Winkelklammern "<>" hinzufügen, sowie einen Link zu seiner Referenzseite hinzufügen wird.
  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Macros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf den MDN Web Docs sind **Parameter**. Bitte vermeiden Sie, soweit möglich, den Begriff "Argumente" für Konsistenz.

- **Benutzeroberflächenaktionen**: Beschreiben Sie in Handlungsschritten Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das UI-Element anhand seines Labels und Typs.
  - **Korrekt**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Während das Aktivpassiv bevorzugt wird, ist das Passiv auch akzeptabel, angesichts des informellen Charakters unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite zu befolgen sind, wie z.B. Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite in den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Codebeispiel sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das durch das Codebeispiel veranschaulichte Szenario beschreibt. Zum Beispiel, "Verwendung des Offset-Drucks" und "Zurücksetzen auf den Stil in der vorherigen Schicht".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Besonderheiten des Beispiels, auf die Sie die Aufmerksamkeit des Lesers lenken möchten, darstellt. Zum Beispiel, "Im folgenden Beispiel sind zwei Kaskadenschichten im CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis und die Funktionsweise des Codes beschreibt.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und wie es verwendet wird demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder muss.
- Wenn Sie mit einem großen Codebeispiel arbeiten, kann es sinnvoll sein, es in kleinere logische Teile aufzuteilen, damit sie individuell beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels, die denselben Typ haben (HTML, CSS und JavaScript), vor der Ausführung des Beispiels zusammengefügt werden. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, jedes optional mit eigenen Beschreibungen, Überschriften usw. Dadurch wird die Dokumentation von Code unglaublich leistungsfähig und flexibel.

Um zu erfahren, wie Sie Codebeispiele für MDN Web Docs gestalten oder formatieren, siehe unsere [Richtlinien für das Styling von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Beim Verweisen auf eine andere Seite oder den Abschnitt einer Seite auf MDN nach ihrem Titel, befolgen Sie das Satzfallformat im Linktext (entspricht dem Seitentitel oder Abschnittstitel). Verwenden Sie Satzfallformat im Linktext, auch wenn es sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet (der Fall, der im Seitentitel oder im Abschnittstitel verwendet wird, kann falsch sein). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN nach ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Korrekt**: "Verweisen Sie auf den [Anordnen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) Leitfaden."
- **Falsch**: "Verweisen Sie auf den "[Anordnen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" Leitfaden."

Befolgen Sie einen konsistenten Stil beim Verlinken von Abschnitten innerhalb einer Seite:

- **Korrekt**: "Für weitere Informationen verweisen Sie auf den [Zuordnung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Abschnitt im _Speicherverwaltung_ Leitfaden."

Wenn der Abschnitt, zu dem Sie verlinken, sich auf derselben Seite befindet, können Sie den Standort des Abschnitts mit beschreibenden Phrasen andeuten.

- **Korrekt**: "Dieses Konzept wird ausführlicher im [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt dieses Dokuments beschrieben."
- **Falsch**: "Dieses Konzept wird ausführlicher im [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt unten beschrieben."

Auf MDN gibt es einen weiteren Weg, um auf eine Referenzseite zu verlinken, indem Sie ein Makro verwenden. Diese Makros sind auf der Seite zu den [Häufig verwendeten Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) beschrieben. Zum Beispiel, um die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Ähnliche Querverweisrichtlinien befolgen wir in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind in bestimmten Situationen auf MDN Web Docs erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs einzufügen. Pull-Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diesen Richtlinien nicht folgen.

Wenn Sie in Erwägung ziehen, einen externen Link zum Inhalt von MDN's [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) hinzuzufügen, lesen Sie bitte auch [Leitlinien zum Schreiben von Lerninhalten > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen müssen Sie sicherstellen, dass das Risiko für Folgendes minimal ist, wenn Sie in Betracht ziehen, einen externen Link hinzuzufügen:

- Defekte oder veraltete Links
- Anmutung einer Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu verwenden
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, betrachten Sie den Querverweis von Inhalten innerhalb von MDN Web Docs. Interne Links sind leichter zu pflegen und machen die Gesamtheit von MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten das Hinzufügen von Links zu externen Inhalten bevorzugen, die:
  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Notwendig für die Zuordnung, Zitation oder Anerkennung sind (z.B. als Teil einer Creative Commons Attribution)
  - Wahrscheinlicher für das Thema gepflegt werden als das Integrieren solcher Inhalte auf MDN Web Docs selbst (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder community-getrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Wartbarkeit, Zugänglichkeit oder stellen auf andere Weise Barrieren für die Leser dar. Vermeiden Sie das Hinzufügen von Links zu externen Inhalten, die:
  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters anstatt der entsprechenden Dokumentation)
  - Flüchtig oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstwerbend sind (z.B. das eigene Werk des Autors außerhalb von MDN Web Docs)
  - Kostenpflichtig sind (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser aus einkommensschwächeren Ländern nicht erreichbar ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogpost, ein Konferenzvortrag oder ein GitHub-Repository von Wert ist, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie genau, bevor Sie Links zu Ressourcen hinzufügen, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Verbindung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull Request offenlegen. Wenn Sie dies nicht tun, könnte Ihre weitere Teilnahme an den MDN Web Docs gefährdet sein.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Redakteur einer Spezifikation sind und zur Dokumentation im Zusammenhang mit dieser Spezifikation beitragen, dann wird das Verlinken zu dieser Spezifikation erwartet und akzeptiert. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter zu merkende URLs (auch "Kurzlinks" genannt) zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Zusätzlich kann bei bestimmten Kurzlink-Diensten das Ziel nach der Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (nutzererzeugbare) URL-Shortener erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

<!-- markdownlint-disable search-replace -->

Andererseits werden firmeninterne URL-Shortener, die von den Organisationen gepflegt werden, die auch die Ziel-URLs verwalten, unterstützt. `https://bugzil.la` gehört Mozilla und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` umleitet, welches ebenfalls eine von Mozilla verwaltete Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel, verwenden Sie `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenebenen in absteigender Reihenfolge ohne das Überspringen von Ebenen: `##`, dann `###` und dann `####`; diese werden in die [HTML-Überschriftentags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags übersetzt.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftenebene hinzuzufügen, sollten Sie in Betracht ziehen, den Artikel in mehrere kleinere Artikel mit einer Zielseite aufzuteilen. Alternativ können Sie in Erwägung ziehen, die Informationen als Aufzählungspunkte darzustellen, um die Verwendung einer Ebene-vier-Überschrift zu vermeiden.

Behalten Sie die folgenden Dos und Don'ts im Hinterkopf, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es müssen entweder zwei oder mehr Unterüberschriften sein oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe zu kennzeichnen (z.B. "Verwendung des `FooBar`-Interfaces").
- **Erstellen Sie keine "übersprungenen Überschriften".** Das sind Überschriften, auf die unmittelbar eine Unterüberschrift folgt, ohne dass es Erklärtext dazwischen gibt.
  Das sieht nicht gut aus und lässt Leser ohne Erklärtext am Anfang des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr freizügige Lizenz haben, wie z.B. [CC0](https://wiki.creativecommons.org/wiki/CC0) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, führen Sie diese durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG`-Datei am Ende der Datei eine Leerzeile hat.
- Jedes Bild muss über [beschreibenden `alt` Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) verfügen.

### Listen

Listen sollten konsistent über alle Seiten hinweg formatiert und strukturiert werden.
Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Listenformat.
Je nach Art der Liste, die Sie erstellen, passen Sie Ihr Schreiben wie in den folgenden Abschnitten beschrieben an. In beiden Fällen sollten Sie einen einleitenden Satz einschließen, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke knapper Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (also Satzfragmente, denen ein Verb oder ein Subjekt oder beides fehlen) in Aufzählungslisten sollten standardmäßige Interpunktion enthalten — Sätze enden mit Punkten, Phrasen hingegen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes, einschließlich des letzten Satzes des Elements, ein Punkt stehen, genau wie es in einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von einem Aufzählungspunkt zum anderen wiederholt wird. In diesem Beispiel gibt jeder Aufzählungspunkt eine Bedingung gefolgt von einem Komma und einer kurzen Erklärung an, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze beinhalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario von Vorteil sein:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt Schatten zu Text hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze enthalten, verwenden Sie einen Punkt nach jedem Listenelement, selbst wenn ein Listenelement drei oder weniger Wörter enthält. Allerdings sollten, so weit wie möglich, alle Listenelemente die gleiche Struktur haben; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen aufzuzählen. Da Anweisungen komplex sein können, hat Klarheit Priorität, besonders wenn der Text in jedem Listenelement umfangreich ist. Wie bei Aufzählungslisten folgen Sie der Standardinterpunktionsverwendung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Nutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen, und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich umfangreich sein, daher ist es wichtig, klar zu schreiben und die korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die vorhergehende Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die anweisende Schritte zur Erstellung einer nummerierten Liste mit dem korrekten Format bietet.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anweisungszwecke oder um jemanden durch ein geordnetes Verfahren zu führen, verwendet werden, sollten Sie sicherstellen, das jedes Element fokussiert bleibt: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die `@layer` Seite.

Präsentieren Sie die Links in einem Siehe auch Abschnitt im Allgemeinen im [Aufzählungsliste](#listen)-Format, wobei jedes Element in der Liste als Phrase erscheint. Im [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) Abschnitt auf MDN folgt der Siehe auch Abschnitt jedoch dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Um Konsistenz über MDN Web Docs hinweg zu wahren, behalten Sie die folgenden Richtlinien im Hinterkopf, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der Seite oder des Abschnitts, zu dem verlinkt wird. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA states and properties" so sein:
  - **Korrekt**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satzfallformat im Linktext, auch wenn es sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet. Es könnte sein, dass der im Seiten- oder Abschnittstitel verwendete Fall falsch ist. Zum Beispiel wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite im korrekten Satzfall so sein:
  - **Korrekt**: [Quirks mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch für externe Links verwenden Sie Satzfallformat, selbst wenn das Format auf der Zieldokumentseite anders ist. Dies dient der Konsistenz über MDN Web Docs hinweg. Ausnahmen sind die Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie es im Abschnitt [Verlinken zu Referenzseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) auf der _Häufig verwendete Makros_ Seite erklärt wird. Die Verwendung von Makros fügt eine Codeformatierung zum Schlüsselwort im Linktext hinzu, wie im nächsten Beispiel gezeigt wird.
- Keine Artikel ("Ein", "Eine", "Die") sind am Anfang des Listenelements erforderlich. Am Ende des Listenelements ist keine Interpunktion erforderlich, da es immer ein Begriff oder eine Phrase sein wird.
  - **Korrekt**: {{cssxref("revert-layer")}}
  - **Falsch**: Die {{cssxref("revert-layer")}} Schlüsselwort.
  - **Korrekt**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie Codeformatierung mit Backticks (`` ` ``) zu Schlüsselwörtern und Literalen im Linktext hinzu, auch wenn die Formatierung nicht in Seiten- und Abschnittstiteln verwendet wird. Zum Beispiel wird für den Seitentitel "Array() constructor" der Linktext [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link minimal. Im Falle einer Beschreibung, fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Interpunktion. Halten Sie alle verlinkten Texte am Anfang, um das Scannen der Liste von Links zu unterstützen.
  - **Korrekt**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Kontrollkästchen
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element in der Reihe.
  - **Korrekt**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Weitere farbbezogene Eigenschaften
- Bei externen Links versuchen Sie, die Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) anzugeben, wann immer dies machbar und angemessen ist. Diese Angabe gibt den Lesern eine klare Vorstellung vom Ziel, das sie beim Klicken auf den Link erreichen werden. Das Veröffentlichungs- oder Aktualisierungsdatum hilft den Lesern, die Relevanz des verlinkten Artikels zu bewerten und hilft auch den MDN-Pflegern, Links zu Artikeln zu überprüfen, die seit langer Zeit nicht mehr aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit der Quellen- und Jahresinformation:
  - **Korrekt**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autorennamen angeben. Ein paar Beispiele sind im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) aufgeführt. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repositories anzugeben, die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu verwandten Leitfäden und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich der Scanbarkeit der Items in der Liste.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen oder einfachen-zu-komplexen Reihenfolge, je nachdem, was für den Kontext mehr Sinn ergibt.

### Unterseiten

Wenn Sie Artikel über ein Thema oder Fachgebiet hinzufügen müssen, tun Sie dies in der Regel durch das Erstellen einer Zielseite und das Hinzufügen von Unterseiten für jeden der einzelnen Artikel.
Die Zielseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können die Einfügung von Seiten in die Liste mit einigen Makros, die wir erstellt haben, automatisieren.

Zum Beispiel sei der [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptseite des Inhaltsverzeichnisses
- [JavaScript/Guide/JavaScript Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an die Spitze der Hierarchie zu setzen, was die Seite verlangsamt und die Suche und Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, welchem der Teil der URL der Seite nach `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien bei der Definition eines Slugs:

- Slugs sollten kurz gehalten werden. Wenn Sie ein neues Niveau der Hierarchie erstellen, sollte die neue Komponentenebene im Slug nur ein oder zwei Wörter umfassen.
- Slugs sollten ein Unterstrichzeichen für eine mehrteilige Komponente verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Verwenden Sie Satzfallformat in Slugs, ebenfalls für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Brotkrumennavigation oben auf der Seite verwendet. Ein Seitentitel kann sich vom "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Behalten Sie die folgenden Richtlinien im Hinterkopf, wenn Sie Titel schreiben:

- **Schreibweise der Groß- und Kleinschreibung**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften Satzstil-Groß- und Kleinschreibung verwenden (nur das erste Wort und Eigennamen großschreiben), anstatt Schlagzeilenstil-Groß- und Kleinschreibung:
  - **Korrekt**: "Eine neue Methode zum Erstellen von JavaScript-Rollover"
  - **Falsch**: "Eine Neue Methode Zum Erstellen Von JavaScript-Rollover"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel eingeführt wurde. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir arbeiten uns langsam daran.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren werden, ist einer der ersten Schritte beim Schreiben. Das Erstellen eines Inhaltsverzeichnisses kann Ihnen helfen zu entscheiden, wie Sie Informationen anordnen möchten. Erläutern Sie einfache Konzepte zuerst und gehen Sie dann zu komplexeren und fortgeschritteneren Konzepten über. Erläutern Sie zunächst konzeptionelle Informationen und gehen Sie dann zu handlungsorientierten Themen über.

  Behalten Sie die folgenden Richtlinien im Hinterkopf, wenn Sie Titel für eine Seite und für Abschnitte oder Unterabschnitte schreiben:
  - **Gehen Sie von höher zu niedriger**: Wie im Abschnitt [Überschriftenebenen](#überschriftenebenen) erklärt, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriften für breitere Einführungstitel und verwenden Sie spezifischere Titel, während Sie zu niedrigeren Ebenen übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Das Benennen von Titeln verschiedener Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie die Titel kurz**: Kürzere Titel sind in Text und im Inhaltsverzeichnis leichter zu überfliegen.
  - **Halten Sie die Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" statt "Einführung" oder "Überblick".
  - **Halten Sie die Titel fokussiert**: Verwenden Sie den Titel, um ein objektives Ziel zu vermitteln — eine einzige Idee oder ein Konzept, das im Abschnitt behandelt wird. Zu diesem Zweck versuchen Sie, die Konjunktion "und" im Titel zu vermeiden.
  - **Verwenden Sie parallele Konstruktion**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftenebene. Zum Beispiel, wenn ein `###` Überschriftenniveau Titel Gerundien verwendet, das sind Wörter, die auf "-ing" enden, wie "Installation", dann versuchen Sie, alle Titel auf dieser Überschriftenebene mit Gerundien zu schreiben. Wenn ein Titel mit einem imperative Verb beginnt, wie "Verwenden", "Konfigurieren", schreiben Sie alle Titel auf dieser Überschriftenebene mit einem imperativem Verb.
  - **Vermeiden Sie allgemeine Begriffe in niedrigeren Ebene-Überschriften**: Wiederholen Sie nicht den Text im Titel einer höheren Ebene-Überschrift in niedrigeren Ebene-Überschriften. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Klauseln" statt "Kommas nach einleitenden Klauseln".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie, Titel mit den Artikeln "ein", "eine" oder "die" zu beginnen.
  - **Fügen Sie einleitende Informationen hinzu**: Nach einem Titel, fügen Sie einleitenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell Prompt Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stilrichtlinien

Wenn Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie möglicherweise die folgenden Ressourcen hilfreich.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Fragen-und-Antworten-Seite zur englischen Sprachverwendung
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler geeignet, insbesondere für die Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
