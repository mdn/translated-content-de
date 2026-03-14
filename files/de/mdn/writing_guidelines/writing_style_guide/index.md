---
title: Leitfaden für den Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: a886ef3867e01df856ed9b49b3b6856232cc8c75
---

Dieser Leitfaden für den Schreibstil beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, geschrieben und formatiert werden sollten.

Diese Richtlinien sollen die Sprach- und Stil-Konsistenz auf der Website sicherstellen. Wir sind jedoch eher an den Inhalten als an deren Formatierung interessiert, daher fühlen Sie sich nicht verpflichtet, den gesamten Leitfaden für den Schreibstil zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um diesen Leitfaden einzuhalten. Die Prüfer könnten Sie auch auf diesen Leitfaden hinweisen, wenn Sie eine Inhalts-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für englischsprachige Dokumentationen. Andere Sprachen können (und sind herzlich eingeladen, dies zu tun) ihre eigenen Stilrichtlinien erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungs-Teamseite veröffentlicht werden. Dennoch sollte dieser Leitfaden weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und anschließend, wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das aktuelle Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei C des Schreibens](#berücksichtigen_sie_die_drei_c_des_schreibens)
- [Relevante Beispiele einfügen](#relevante_beispiele_einfügen)
- [Eine beschreibende Einführung geben](#eine_beschreibende_einführung_geben)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Mit SEO im Hinterkopf schreiben](#mit_seo_im_hinterkopf_schreiben)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für den von Ihnen geschriebenen Inhalt im Kopf. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so sehr auf grundlegende Netzwerk-Konzepte eingehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Berücksichtigen Sie die drei C des Schreibens

Die drei C's guten Schreibens sind klar, prägnant und konsistent schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den Aktivsatz und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie diese verwenden, unter Berücksichtigung der Zielgruppe.
- **Prägnant**: Wenn Sie ein Dokument verfassen, ist es wichtig zu wissen, wie viel man sagen soll. Wenn Sie zu viele Details bereitstellen, wird die Seite langatmig und selten genutzt.
- **Konsistent**: Verwenden Sie dasselbe Vokabular konsistent innerhalb der Seite und über mehrere Seiten hinweg.

### Relevante Beispiele einfügen

Fügen Sie im Allgemeinen Beispiele oder Szenarien aus dem wirklichen Leben hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbare und praktische Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um etwaige Randfälle zu klären, die existieren könnten.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Probleme, die auftreten können, zu demonstrieren.

### Eine beschreibende Einführung geben

Stellen Sie sicher, dass der einleitende Absatz oder die Absätze vor der ersten Überschrift die Informationen, die auf der Seite behandelt werden, zusammenfassen und vielleicht, was die Leser nach der Durcharbeitung des Inhalts erreichen können. Auf diese Weise kann der Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen sowie das benötigte Vorwissen informieren, das der Leser mitbringen sollte, sofern vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den zugehörigen Informationen, und sollte Hinweise darauf geben, in welchen Situationen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Einführungsbeispiel ist viel zu kurz. Es lässt zu viele Informationen aus, wie was es genau bedeutet, Text "zu umrahmen", wo der Text gezeichnet wird, und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist es viel zu lang.
  Es wird zu viel Detail einbezogen und der Text dringt zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die Methode `strokeText()` konzentrieren und auf die geeigneten Leitfäden verweisen, wo die anderen Details beschrieben sind.

  > Wenn die Methode des Canvas 2D-API **`CanvasRenderingContext2D.strokeText()`** aufgerufen wird, umrahmt sie die Zeichen in der angegebenen Zeichenkette beginnend an den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet "Text umrahmen" das Zeichnen der Konturen der Glyphen der Zeichenkette, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schriftart des Kontexts gezeichnet, wie in der Eigenschaft [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenkette relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenkette beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte der Zeichenkette platziert wird.
  > Wenn der Wert `"left"` ist, wird die Zeichenkette beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der es Ihnen ermöglicht, eine maximale Breite für die Zeichenkette in Pixeln festzulegen.
  > Wenn Sie diesen Parameter angeben, wird der Text beim Zeichnen horizontal zusammengedrückt oder skaliert (oder anderweitig angepasst), um in einen Bereich dieser Breite zu passen.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenkette mit Farbe zu füllen, anstatt nur die Konturen der Zeichen zu zeichnen.

- **Beispiel für eine geeignete Einführung**: Der folgende Abschnitt bietet eine viel bessere Übersicht für die Methode `strokeText()`.

  > Die Methode [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrahmt (zeichnet die Konturen) die Zeichen einer angegebenen Zeichenkette, verankert an der durch die angegebenen X- und Y-Koordinaten angegebenen Position.
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für mehr Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite "Grafiken zeichnen" sowie unseren Hauptartikel zum Thema [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, Texte so inklusiv wie möglich zu halten.
Einige Begriffe, auch wenn sie nicht beleidigend gemeint sind, können Leser aus bestimmten Hintergründen ausgrenzen, wie zum Beispiel:

- Vermeiden Sie die Verwendung der Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Kohärenz** ersetzt werden.
- Statt **Dummy** verwenden Sie **Placeholder**.
- Sie sollten die Begriffe **verrückt** und **wahnsinnig** in der Dokumentation nicht verwenden; wenn der Fall eintritt, ziehen Sie in Betracht, stattdessen **fantastisch** zu verwenden.

Vermeiden Sie bildhafte Redewendungen mit Darstellungen von Gewalt oder Grausamkeit, die bestimmte Zielgruppen auslösen und den falschen Ton für die Dokumentation setzen. Zum Beispiel:

- Statt "zwei Fliegen mit einer Klappe schlagen" verwenden Sie "zwei Probleme auf einmal lösen".
- Statt "ein totes Pferd schlagen" verwenden Sie "den Punkt überstrapazieren" oder "im Kreis gehen".
- Statt "mehr als eine Möglichkeit, eine Katze zu häuten" verwenden Sie "mehr als eine Möglichkeit, dies zu tun".

Am besten verwenden Sie geschlechtsneutrale Sprache in jedem Schreiben, wo das Geschlecht für das Thema irrelevant ist.
Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist "er"/"sein" in Ordnung; aber wenn es sich um eine Person eines beliebigen Geschlechts handelt, ist "er"/"sein" nicht angemessen.

Sehen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu nutzen."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu nutzen."

Beide Versionen sind geschlechtsspezifisch. Um dies zu korrigieren, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu nutzen."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des dritten Personen Plurals, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they).". Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Option ist, die Benutzer im Plural zu machen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu nutzen."

Die beste Lösung ist natürlich, umzuformulieren und die Pronomen zu entfernen:

- **Richtig**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers für den Webcam-Zugriff anfordert, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel, wie man das Problem behandelt, ist arguably besser.
Es ist nicht nur grammatikalisch korrekter, sondern entfernt auch einige der Komplexitäten, die mit dem Umgang von Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise völlig unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Zugängliche Sprache verwenden

Vermeiden Sie die Verwendung von räumlichen und richtungsbezogenen Wörtern wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer gilt. Sie können auch unklar oder irreführend sein – besonders für Benutzer, die sich auf Bildschirmleser verlassen oder Inhalte übersetzen, wo Richtungssprache zweideutig oder schwer übersetzbar sein kann. In responsiven Layouts, wo sich die Position des Inhalts je nach Bildschirmgröße ändern kann, können solche Richtungsangaben ungenau werden. Diese Art von Sprache kann die Zugänglichkeit erschweren und es allen Benutzern schwieriger machen, Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element, auf das verwiesen wird, klar identifizieren. Verweisen Sie auf Abschnitte anhand ihrer Titel oder Überschriften und beziehen Sie sich auf Beispiele oder Code-Snippets anhand dessen, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Verweisen Sie auf den [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt weiter unten auf dieser Seite."
- **Falsch**: "Verweisen Sie auf den Zugänglichkeitsabschnitt unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mithilfe von CSS-Transitions."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mithilfe von CSS-Transitions."

- **Richtig**: "Dieses Konzept wird im früheren Abschnitt mit dem Titel Erstellen einer Media Query erklärt."
- **Falsch**: "Dieses Konzept wird im Abschnitt oben erklärt."

Vermeiden Sie außerdem vage Linktexte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel". Beschreibender Linktext bietet besseren Kontext für alle Leser und verbessert das Erlebnis für Benutzer von Hilfstechnologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Elemente anordnet](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Indem Sie diesen Richtlinien folgen, tragen Sie dazu bei, die MDN-Dokumentation für alle Benutzer zugänglich, klar und nutzbar zu machen, unabhängig davon, wie sie auf die Seite zugreifen.

### Mit SEO im Hinterkopf schreiben

Während das primäre Ziel jedes Schreibens auf MDN Web Docs immer sein sollte, über offene Webtechnologie zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie wollen, oder die kleinen Details finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie in der Lage sind, das Material, das wir schreiben, zu _finden_. Wir können dies erreichen, indem wir Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben berücksichtigen.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, damit Leser leicht finden können, was sie brauchen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, gut gestaltet, geschrieben und markiert ist, um Suchmaschinen die erforderlichen Kontext und Hinweise zu geben, um die Artikel richtig zu indexieren.

Die folgende Checkliste ist gut zu beachten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarseiten von Suchmaschinen korrekt indexiert werden:

- **Sicherstellen, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, nehmen Suchmaschinen an, dass die Seiten über dasselbe Thema handeln, auch wenn sie es nicht tun.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf beiden Seiten, die diese zwei Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur ein paar ausgetauschten Worten und dem gleichen Beispiel. Dies macht es für Suchmaschinen schwierig zu wissen, welche welche ist, und sie teilen den Seitenrang, was dazu führt, dass beide schwerer zu finden sind als sie sein sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite eigene Inhalte hat. Die folgenden Vorschläge können Ihnen helfen, dies zu erreichen:
  - **Mehr einzigartige Konzepte erklären**: Überlegen Sie Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man denkt. Zum Beispiel im Fall der Dokumentation von `width` und `height` Eigenschaften, schreiben Sie eventuell über die unterschiedlichen Nutzungen von horizontalem und vertikalem Raum, und bieten Sie eine Diskussion über die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` im Hinblick auf das Schaffen von Platz für eine Seitenleiste erwähnen, während `height` verwendet wird, um vertikales Scrollen oder Fußzeilen zu handhaben. Informationen über Zugänglichkeitsprobleme einzubeziehen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verschiedene Beispiele verwenden**: Beispiele sind in diesen Situationen oft sogar noch ähnlicher als der Haupttext, da die Beispiele möglicherweise beide (oder alle) ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und keine echten Änderungen bei der Wiederverwendung erfordern. Verwerfen Sie deshalb das Beispiel und schreiben Sie ein neues, oder zumindest geben Sie mehrere Beispiele an, von denen einige unterschiedlich sind.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Abdeckung darüber, wie es funktioniert, sollten in einem angemessenen Detailgrad in Anbetracht der Komplexität des Themas und der Zielgruppe enthalten sein.

  Der einfachste Weg, zu vermeiden, zu ähnlich zu sein, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Sicherstellen, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in der SEO-Sprache "dünne Seiten" genannt), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip stellen Sie sicher, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind, soweit möglich. Inflieren Sie eine Seite nicht künstlich, aber betrachten Sie diese Richtlinie als Mindestziel, wann immer möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genügend Inhalt haben, um vernünftig suchbar zu sein, ohne sie mit unnötigem Text vollzupacken:
  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, outright "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgeführt und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen abgedeckt sind - dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Alle Konzepte vollständig ausarbeiten**: Es ist einfach, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen könnte?
  - **Beispiele hinzufügen**: Es sollten Beispiele zu allen Parametern oder mindestens denjenigen Parametern (oder Eigenschaften, oder Attributen) vorhanden sein, die Benutzer im Bereich von Anfänger bis Fortgeschrittene wahrscheinlich verwenden, sowie solche, die zusätzliche Erklärungen erfordern. Jedes Beispiel sollte von einer Übersicht darüber, was das Beispiel machen wird, begleitet sein, welches zusätzliches Wissen möglicherweise benötigt wird, um es zu verstehen, und so weiter. Nach dem Beispiel (oder eingestreut zwischen Teile des Beispiels) sollte Text sein, der erklärt, wie der Code funktioniert. Geizen Sie nicht mit Details oder dem Umgang mit Fehlern in Beispielen. Denken Sie daran, dass Benutzer _werden_ Ihr Beispiel kopieren und einfügen, um es in ihren eigenen Projekten zu verwenden, und Ihr Code _wird_ auf Produktionsseiten landen! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Anwendungsfälle erklären**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, reden Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie richtiges [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text auf allen Bildern und Diagrammen hinzu. Dieser Text und Bildunterschriften in Tabellen und anderen Figuren zählen, weil Suchmaschinen keine Bilder durchsuchen können, und `alt` Text Suchmaschinen-Crawlern sagt, welchen Inhalt das eingebettete Medium enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit dem Feature in Zusammenhang stehen, in einem Versuch zu verwenden, die Suchmaschinen-Rankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und neigt dazu, bestraft zu werden.
    > Ebenso sollten Sie **nicht** sich wiederholende, wenig hilfreiche Materialien oder Blöcke von Schlüsselwörtern innerhalb der tatsächlichen Seite hinzufügen, in einem Versuch, die Größe und Suchplatzierung der Seite zu verbessern. Dies schadet mehr als es nutzt, sowohl der Lesbarkeit des Inhalts als auch unseren Suchergebnissen.

- **Fokussieren Sie sich auf den Themeninhalt**: Es ist weitaus besser, Inhalte rund um das Thema der Seite als ein bestimmtes Schlüsselwort zu schreiben. Es ist höchst wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einbeziehen könnten; in der Tat, viele SEOs erstellen eine Liste von 5-100 verschiedenen Schlüsselwörtern (variierend zwischen kurzen, mittleren und langen Schlüsselwörtern), die sie in ihren Artikel aufnehmen, abhängig von der Länge. Auf diese Weise diversifizieren Sie Ihre Formulierungen, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen davon, grammatisch korrekte Sätze auf Englisch zu schreiben, empfehlen wir, diese Richtlinien zu befolgen, um den Inhalt über die MDN Web Docs hinweg konsistent zu halten.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das mit dem ersten Buchstaben jedes Wortes eines Satzes erstellt wurde. Dieser Abschnitt beschreibt die Richtlinien für Abkürzungen und Akronyme.

- **Ausschreibungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Akronyme, die den Benutzern wahrscheinlich nicht vertraut sind. Wenn Zweifel bestehen, erweitern Sie den Begriff. Noch besser, verlinken Sie es auf den Artikel oder [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.
  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie volle Großbuchstaben und lassen Sie Punkte in allen Abkürzungen und Akronymen weg, einschließlich Organisationen wie "US" und "UN".
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können allgemeine lateinische Abkürzungen (etc., i.e., e.g.) in klammerartigen Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einer anderen geeigneten Interpunktion.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Webbrowser (z.B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B.: Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  Im normalen Text (d.h. Text außerhalb von Notizen oder Klammern) verwenden Sie die englische Entsprechung der Abkürzung.
  - **Richtig**: ... Webbrowser und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen der lateinischen Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abk.   | Latein           | Englisch                      |
  | ------ | ---------------- | ----------------------------- |
  | cf.    | _confer_         | vergleichen                   |
  | e.g.   | _exempli gratia_ | zum Beispiel                  |
  | et al. | _et alii_        | und andere                    |
  | etc.   | _et cetera_      | und so weiter                 |
  | i.e.   | _id est_         | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_      | wohl merken                   |
  | P.S.   | _post scriptum_  | Nachschrift                   |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser ihre Bedeutungen entweder verwechseln oder nicht verstehen.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich entschließen, dies zu tun. Achten Sie beispielsweise darauf, "z.B." nicht mit "d.h." zu verwechseln, was ein häufiger Fehler ist.

- **Mehrzahl von Abkürzungen und Akronymen**: Für die Mehrzahl von Abkürzungen und Akronymen fügen Sie ein _s_ hinzu. Verwenden Sie keinen Apostroph. Niemals. Bitte.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Bei Verwendung der Kontraktion wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text, verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: das vs. das
  - **Falsch**: das v. das
  - **Richtig**: das versus das

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibregeln im Haupttext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, für "web" (allein oder als Modifikator verwendet) und "internet" Kleinschreibung zu verwenden.

> [!NOTE]
> Diese Richtlinie ist eine Änderung im Vergleich zu einer früheren Version dieses Leitfadens, sodass Sie viele Instanzen von "Web" und "Internet" auf MDN finden können.
> Fühlen Sie sich frei, diese zu ändern, wenn Sie andere Änderungen vornehmen, aber ein Artikel nur zur Änderung der Großschreibung zu bearbeiten, ist nicht notwendig.

Tastaturtasten sollten die Satzstil-Großschreibung verwenden, nicht die Großbuchstabenschreibung.
Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie Marken, die Großbuchstaben enthalten, oder Wörter, die von einem Personennamen abgeleitet sind (es sei denn, das Wort wird innerhalb von Code verwendet und die Codesyntax erfordert eine Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation, es sollte immer wie markiert geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

Einige Toolnamen und Projekte haben ihre eigenen markengeschützten Großschreibungsregeln. Diese könnten Namen erfordern, die alle Kleinbuchstaben sind ("npm" oder "webpack"), alle Großbuchstaben ("UNIX", "GNOME", "VIM") oder gemischte Großschreibung ("TypeScript", "macOS" oder "jQuery").

Die markengeschützte Großschreibung von der offiziellen Website oder Dokumentation sollte immer verwendet werden, selbst am Anfang eines Satzes. Wenn Sie sich unwohl dabei fühlen, einen Satz mit einem Kleinbuchstaben zu beginnen, empfehlen wir, ihn umzuformulieren, um das Problem zu vermeiden. Zum Beispiel könnten Sie sagen "Sie können den npm-Paketmanager verwenden, um..." statt "npm erlaubt Ihnen...".

### Kontraktionen

Unser Schreibstil tendiert dazu, ungezwungen zu sein, also sollten Sie sich frei fühlen, Kontraktionen (z.B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Verwenden Sie in fortlaufendem Text Kommas nur bei fünfstelligen und größeren Zahlen.
  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht einschliesslich Daten in Codebeispielen) verwenden Sie das Format "January 1, 1900".
  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.
  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Mehrzahlen von Ziffern**: Fügen Sie ein "s" hinzu. Verwenden Sie keinen Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englische Pluralformen, nicht die latein- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Zitate und Anführungszeichen. Auf MDN Web Docs verwenden wir nur gerade Zitate und Apostrophe. Dies ist, weil wir eines von beiden für Konsistenz wählen müssen. Wenn geschwungene Zitate oder Apostrophe in Code-Snippets gelangen, auch inline, könnten Leser sie kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht werden).

- **Korrekt**: Bitte verwenden Sie keinen "geschwungenen Zitate."
- **Falsch**: Bitte verwenden Sie nicht &ldquo;geschwungene Zitate.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommapunktion bewusst sein müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie nach einer einleitenden Klausel ein Komma, um sie von der folgenden unabhängigen Klausel zu trennen.
  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel werden Sie lernen, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel werden Sie lernen wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, ziehen Sie unseren Schreibstil-Leitfaden zu Rate."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen ziehen Sie unseren Schreibstil-Leitfaden zu Rate."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie normalerweise ein numerisches Tastenfeld zur Eingabe von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie normalerweise ein numerisches Tastenfeld zur Eingabe von Daten."

- **Vor Konjunktionen**: Das Serialkomma (auch bekannt als "das Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. In MDN Web Docs verwenden wir das Serialkomma. Kommas trennen auch jedes Element der Liste.
  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Automobilen reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Automobilen reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste mit zwei Elementen.
  - **Richtig**: "Mein Hund ist süß und klug."
  - **Falsch**: "Mein Hund ist süß, und klug."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, sollten Sie überlegen, ihn in zwei Sätze umzuschreiben.
  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt durchführen, aber Sie müssen auf die Dateieinstellungen achten."
    - **Falsch**: "Sie können diesen Schritt durchführen aber Sie müssen auf die Dateieinstellungen achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Eine restriktive Klausel ist wesentlich für die Bedeutung des Satzes und braucht keine Kommas, um von dem verbleibenden Satz getrennt zu werden. Eine restriktive Klausel wird normalerweise durch "dass" eingeführt und **sollte nicht** durch ein Komma vorausgegangen werden.
  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, welcher alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Eine nicht einschränkende Klausel bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Eine nicht einschränkende Klausel wird normalerweise durch "welches" eingeführt und sollte durch ein Komma vorangestellt werden.
  - **Richtig**: "Sie schreiben eine Richtlinie, was eine genehmigte Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie welche eine genehmigte Liste von Ursprüngen für jede Funktion ist."

- **Vor "wie"**: Wenn "wie" Teil einer nicht einschränkenden Klausel ist und der verbleibende Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "wie".
  - **Richtig**: "Das Array-Objekt hat Methoden, um Arrays auf verschiedene Arten zu manipulieren, wie das Verbinden, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden das Verbinden, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "wie" zu verwenden ist. In diesem Fall ist die Klausel, die "wie" enthält, wesentlich für die Bedeutung des Satzes.
  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen, wie Audio- und Videomanipulation, hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."

### Bindestriche

Wortzusammensetzungen sollten nur dann mit einem Bindestrich geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe des Stamms ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als eine Variante Rechtschreibung oder als hauptsächliche Verwendung in einer nicht-amerikanischen Form von Englisch aufgeführt.
Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform hinzugefügt) nachschlagen, finden Sie den Ausdruck "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Varianten-Rechtschreibung.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erfassen. Es läuft jede Woche und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
npm run lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich in [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden, die zugelassene Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können mehr Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungs-Konfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um auf HTML- und XML-Elemente zu verweisen, anstelle von "Tag". Darüber hinaus sollte das Element in spitzen Klammern "<>" eingeschlossen und mit Backticks (`` ` ``) formatiert werden. Zum Beispiel wird \<input\> innerhalb von Backticks formatiert als `<input>`, wie es erwartet wird.
  - **Richtig**: das `<span>` Element
  - **Falsch**: das span Tag

  In MDN können Sie optional das HTML-Element im [`HTMLElement` Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) angeben, das das Element formatiert, die Klammern "<>" hinzufügt und auch einen Link zur Referenzseite hinzufügt.
  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Quelle in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" für Konsistenz, wann immer möglich.

- **Benutzeroberflächenaktionen**: In Arbeitsabläufen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzerelement anhand seines Labels und Typs.
  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts des informellen Stils unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenelemente

In diesem Abschnitt werden die Richtlinien aufgeführt, die für verschiedene Teile jeder Seite zu befolgen sind, wie Überschriften, Hinweise, Links und Beispiele.

- [Code-Beispiele](#code-beispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Code-Beispiele

Eine Seite auf MDN Web Docs kann mehr als ein Code-Beispiel enthalten. Die folgende Liste stellt einige empfohlene Praktiken dar, wenn Sie ein Code-Beispiel für MDN Web Docs schreiben:

- Jedes Code-Beispiel sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift zur Beschreibung des Szenarios, das durch das Code-Beispiel demonstriert wird. Zum Beispiel: "Using offset printing" und "Reverting to style in previous layer".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Besonderheiten des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel: "In the following example, two cascade layers are defined in the CSS, `base` and `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Code-Beispiel nicht nur die Syntax des Features und dessen Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature möglicherweise nutzen möchte oder muss.
- Wenn Sie mit einem großen Code-Beispiel arbeiten, kann es sinnvoll sein, es in kleinere logische Teile aufzuteilen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Code-Blöcke des Beispiels, die denselben Typ (HTML, CSS und JavaScript) haben, vor der Ausführung des Beispiels zusammengeführt werden. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, die jeweils optional eigene Beschreibungen, Überschriften usw. enthalten können. Dadurch wird die Dokumentation von Code unglaublich leistungsfähig und flexibel.

Um zu erfahren, wie man Code-Beispiele für MDN Web Docs stilisiert oder formatiert, siehe unsere [Richtlinien für die Stilgestaltung von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Wenn Sie auf eine andere Seite oder einen Abschnitt einer Seite auf MDN nach ihrem Titel verweisen, verwenden Sie die Satzschreibung im Link-Text (entspricht dem Seiten- oder Abschnittstitel). Verwenden Sie die Satzschreibung im Link-Text, auch wenn sie sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet (es könnte sein, dass die Großschreibung im Titel der Seite oder des Abschnitts falsch ist). Verwenden Sie keine Anführungszeichen um den Link-Text. Um auf eine Seite auf MDN anhand ihres Titels zu verweisen, verwenden Sie den folgenden Stil:

- **Korrekt**: "Verweisen Sie auf den [Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) Leitfaden."
- **Falsch**: "Verweisen Sie auf den "[Ordering flex items](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" Leitfaden."

Folgen Sie einem konsistenten Stil, wenn Sie zu Abschnitten innerhalb einer Seite verlinken:

- **Korrekt**: "Für weitere Informationen, verweisen Sie auf den [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Abschnitt im _Memory management_ Leitfaden."

Wenn der Abschnitt, auf den Sie verlinken, auf derselben Seite ist, können Sie den Ort des Abschnitts mit beschreibenden Phrasen angeben.

- **Korrekt**: "Dieses Konzept wird im [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt dieses Dokuments ausführlicher beschrieben."
- **Falsch**: "Dieses Konzept wird im [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt unten ausführlicher beschrieben."

Auf MDN gibt es eine weitere Möglichkeit, zu einer Referenzseite zu verlinken, indem ein Makro verwendet wird. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweisrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Pull-Anfragen, die externe Links hinzufügen, werden abgelehnt, wenn sie diesen Richtlinien nicht folgen.

Wenn Sie erwägen, einen externen Link zu MDN's [Lernen der Webentwicklung](/de/docs/Learn_web_development) Inhalt hinzuzufügen, lesen Sie bitte auch die [Schreibrichtlinien für das Lernen der Webentwicklung > Partnerlinks und -einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie erwägen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das Risiko der folgenden Punkte minimal ist:

- Defekte oder veraltete Links
- Der Anschein eines Zuspruchs, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Der Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, ziehen Sie in Betracht, Inhalte innerhalb von MDN Web Docs über Querverweise zu verknüpfen. Interne Links sind einfacher zu pflegen und machen die Gesamtheit von MDN Web Docs wertvoller für die Leser.

- **Gute externe Links**: Gute externe Links leiten Leser zu Ressourcen, die relevant, beständig und weithin vertraut sind. Bevorzugen Sie es, Links zu externen Inhalten hinzuzufügen, die:
  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Notwendig für die Zuschreibung, Zitation oder Anerkennung sind (z.B. als Teil einer Creative Commons-Zuschreibung)
  - Wahrscheinlich besser gewartet werden für das Thema, als solch ein Inhalt selbst in MDN Web Docs zu übernehmen (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder gemeinschaftsgetrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links mangeln an Relevanz, Wartbarkeit, Barrierefreiheit oder stellen sonstige Hindernisse für die Leser auf. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:
  - Generisch oder nicht spezifisch sind (z.B. die Startseite eines Anbieters, anstelle der zugehörigen Dokumentation)
  - Vergänglich oder ungewartet sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd sind (z.B. die eigenen Arbeiten des Autors außerhalb von MDN Web Docs)
  - Bezahlt sind (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser aus einkommensschwächeren Ländern nicht erschwinglich ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blog-Beitrag, ein Vortrag auf einer Konferenz oder ein GitHub-Repository Wert haben, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein von Interessenkonflikten erwecken. Überlegen Sie zweimal, bevor Sie zu Ressourcen verlinken, mit denen Sie geschäftlich oder persönlich verbunden sind.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zu dem Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Anfrage bekanntgeben. Ein Versäumnis, dies zu tun, kann Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Beispielsweise, wenn Sie der Redakteur einer Spezifikation sind und Sie zur Dokumentation zu dieser Spezifikation beitragen, dann ist das Verlinken zu dieser Spezifikation erwartet und akzeptabel. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter zu merkende URLs zu verwandeln (auch als "Kurzlinks" bekannt). Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann bei bestimmten Kurzlink-Anbietern das Ziel nach deren Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über von Benutzern generierbare Kurzlink-Anbieter erstellt wurden. Wenn zum Beispiel `https://myshort.link/foobar` eine Kurz-URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

<!-- markdownlint-disable search-replace -->

Andererseits sind erstklassige Kurzlink-Anbieter, die von den Organisationen gepflegt werden, die auch die Ziel-URLs pflegen, zu bevorzugen. `https://bugzil.la` wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` umleitet, was ebenfalls eine von Mozilla betriebene Domain ist. Verwenden Sie in diesem Fall die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden. Verwenden Sie diese Markdown-Überschriftsebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese übersetzen sich in die [HTML-Überschriftstags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Tags, jeweils.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist. Wir empfehlen, nicht mehr als drei Ebenen von Übertiteln hinzuzufügen. Wenn Sie das Bedürfnis verspüren, eine vierte Überschriftsebene hinzuzufügen, überlegen Sie, den Artikel in mehrere kleinere Artikel mit einer Eingangspage aufzuteilen. Alternativ können Sie die Informationen als Aufzählungspunkte präsentieren, um die Verwendung einer Überschrift der vierten Ebene zu vermeiden.

Halten Sie sich beim Erstellen von Unterabschnittsüberschriften an folgende Dos and Don'ts:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es sollten entweder zwei oder mehr Unterüberschriften sein oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z.B. "Using `FooBar` interface").
- **Erstellen Sie keine "stoßenden Köpfe".** Dies sind Überschriften, gefolgt von einer Unterüberschrift, ohne dass dazwischen Textinhalt steht.
  Dies sieht nicht gut aus und hinterlässt dem Leser keine erklärenden Texteingaben zu Beginn des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen deren Verwendung erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr freizügige Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder komprimieren Sie diese mit <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG` führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG`-Datei eine Leerzeile am Ende der Datei enthält.
- Jedes Bild muss [beschreibenden `alt` Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten auf allen Seiten konsistent formatiert und strukturiert sein. Einzelne Listenelemente sollten mit geeigneter Zeichensetzung verfasst werden, unabhängig vom Listenformat. Abhängig vom Typ der Liste, die Sie erstellen, sollten Sie Ihr Schreiben jedoch wie in den folgenden Abschnitten beschrieben anpassen. In beiden Fällen fügen Sie einen einführenden Satz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungspunkte**: Aufzählungspunkte sollten verwendet werden, um zusammenhängende kurze Informationen zu gruppieren. Jedes Element in der Liste sollte eine ähnliche Satzstruktur aufweisen. Sätze und Phrasen (d.h. unvollständige Sätze ohne Verb oder Subjekt oder beides) in Listen mit Aufzählungspunkten sollten die übliche Zeichensetzung beinhalten — Sätze enden mit Punkten, Phrasen hingegen nicht.

  Wenn es mehrere Sätze in einem Listeneintrag gibt, muss am Ende jeden Satzes ein Punkt erscheinen, auch am Ende des letzten Satzes, wie man es in einem Absatz erwarten würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einbeziehen:
  >
  > - Eine Bedingung mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung mit einer kurzen Erklärung.
  > - Noch eine Bedingung mit einer weiteren Erklärung.

  Beachten Sie, wie sich die Satzstruktur von Punkt zu Punkt wiederholt. In diesem Beispiel gibt jeder Aufzählungspunkt eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listeneinträge unvollständige Sätze umfassen, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt Text Schatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement nur drei oder weniger Wörter enthält. Versuchen Sie jedoch nach Möglichkeit, dieselbe Struktur für alle Elemente in einer Liste zu befolgen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Gruppe von Anweisungen aufzuzählen. Da Anweisungen komplex sein können, hat Klarheit Priorität, insbesondere wenn der Text in jedem Listenelement umfangreich ist. Wie bei Aufzählungspunkten sollten Sie die übliche Zeichensetzung einhalten. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer Kontext zu bieten, bevor er mit den Anweisungen beginnt.
  > 2. Beginnen Sie mit den Anweisungen und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich umfangreich sein, daher ist es wichtig, klar zu schreiben und die richtige Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung, welches Ergebnis erwartet wird, wenn der Vorgang abgeschlossen ist.

  Das folgende Beispiel zeigt das Schreiben einer abschließenden Erklärung für die vorhergehende Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die anleitende Schritte zur Erstellung einer nummerierten Liste mit der richtigen Formatierung bietet.

  Beachten Sie, wie sich die Elemente in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Anweisungen oder zur Durchführung eines ordnungsgemäßen Verfahrens verwendet werden, sollten Sie sicherstellen, dass jedes Element fokussiert ist: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die `@layer` Seite.

Im Allgemeinen stellen Sie die Links im Siehe auch Abschnitt in einem [Aufzählungsliste](#listen)-Format dar, wobei jedes Element in der Liste als Phrase ist. Im [Lernen der Webentwicklung](/de/docs/Learn_web_development) Abschnitt auf MDN folgt der Siehe auch Abschnitt dem [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Um die Konsistenz innerhalb der MDN Web Docs aufrechtzuerhalten, denken Sie an die folgenden Richtlinien, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Link-Text

- Der Link-Text sollte derselbe sein wie der Titel der Seite oder des Abschnitts, auf den verlinkt wird. Zum Beispiel, der Link-Text zur [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA states and properties" wird:
  - **Korrekt**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satzschreibung im Link-Text, auch wenn er sich vom verlinkten Seitentitel oder Abschnittstitel unterscheidet. Es könnte sein, dass die Großschreibung in dem Titel der Seite oder des Abschnitts falsch ist. Zum Beispiel, der Link-Text zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satzschreibung wird:
  - **Korrekt**: [Quirks mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Verwenden Sie für externe Links ebenfalls die Satzschreibung, auch wenn die Großschreibung auf der Zielartikelseite abweicht. Dies dient dazu, Konsistenz innerhalb der MDN Web Docs zu gewährleisten. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie es in der [Verlinkung zu Referenzseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) Abschnitt auf der _Commonly used macros_ Seite erklärt wird. Die Verwendung eines Makros fügt dem Link-Text eine Codeformatierung hinzu, wie im folgenden Beispiel gezeigt.
- Kein Artikel ("A", "An", "The") ist am Anfang des Linklistenelements erforderlich. Keine Interpunktion am Ende des Listenelements ist erforderlich, da es in der Regel ein Begriff oder eine Phrase ist.
  - **Korrekt**: {{cssxref("revert-layer")}}
  - **Falsch**: The {{cssxref("revert-layer")}} keyword.
  - **Korrekt**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie der Linkbeschriftung mit Backticks (`` ` ``) Codeformatierungen hinzu, auch wenn die Formatierung nicht in Seitentiteln und Abschnittstiteln verwendet wird. Zum Beispiel, für den Seitentitel "Array() constructor", wird der Link-Text zu [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text, der den Link umgibt, minimal. Im Falle einer Beschreibung fügen Sie sie nach dem Link-Text und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne Endpunkt. Platzieren Sie den gesamten verlinkten Text am Anfang, um das Durchsuchen der Links zu erleichtern.
  - **Korrekt**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS Selektoren für die Gestaltung von Kontrollkästchen
- Verwenden Sie nicht das Konjunktion "und" vor dem letzten Element in der Liste.
  - **Korrekt**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links geben Sie nach Möglichkeit die Quellwebseite und das Jahr der Veröffentlichung oder des letzten Updates (in Klammern) an. Dies gibt den Lesern sofort eine klare Vorstellung davon, wohin sie durch Klicken auf den Link gelangen. Das Datum der Veröffentlichung oder des letzten Updates hilft den Lesern, die Relevanz des verlinkten Artikels zu bewerten, und hilft auch den MDN-Pflegern, Links zu Artikeln zu überprüfen, die lange nicht aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zu dem [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit der Quellen- und Jahresinformation:
  - **Korrekt**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autorennamen angeben. Einige Beispiele sind im [Weiterführende Literatur](#language_grammar_and_spelling) Abschnitt aufgeführt. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repositorys anzugeben, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu den zugehörigen Leitfäden und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge soll hauptsächlich das Scannen der Elemente in der Liste erleichtern.
- Wenn die Liste aus einer Mischung aus internen und externen Links besteht, listen Sie die internen Links zuerst und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie einem alphabetischen oder einfachen bis fortgeschrittenen Ordnung, was auch immer im Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie Artikel zu einem Thema oder Themenbereich hinzufügen müssen, tun Sie dies in der Regel durch Erstellen einer Einstiegsseite und dann das Hinzufügen von Unterseiten für jeden der einzelnen Artikel. Die Einstiegsseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen. Sie können das Einfügen von Seiten in die Liste automatisieren, indem Sie einige von uns erstellte Makros verwenden.

Beispielsweise ist der [JavaScript](/de/docs/Web/JavaScript) Leitfaden wie folgt strukturiert:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnis-Seite
- [JavaScript/Guide/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel ganz oben in der Hierarchie zu platzieren, da dies die Seite verlangsamt und die Suche und Navigation auf der Website weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom Seiten-"Slug" unterscheiden, der der Teil der URL der Seite nach `<locale>/docs/` ist. Beachten Sie beim Definieren eines Slugs die folgenden Richtlinien:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte die neue Ebenenkomponente im Slug nur ein oder zwei Worte umfassen.
- Slugs sollten einen Unterstrich für eine mehrgliedrige Komponente verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie der Satzschreibung auch in Slugs für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite. Ein Seitentitel kann sich vom "Slug" der Seite unterscheiden, wie im [Slugs](#slugs) Abschnitt erklärt.

Beachthalten Sie die folgenden Richtlinien ein, wenn Sie Titel schreiben:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften eine Satz-Groß-/Kleinschreibung verwenden (nur das erste Wort und Eigennamen großschreiben) statt der Schlagzeilen-Groß-/Kleinschreibung:
  - **Korrekt**: "A new method for creating JavaScript rollovers"
  - **Falsch**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilregel geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir arbeiten uns allmählich durch.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diese Inhalte strukturieren, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis zu schreiben kann Ihnen helfen, zu entscheiden, wie Sie Informationen ordnen möchten. Decken Sie zunächst einfache Konzepte ab und gehen Sie dann zu komplizierteren und fortgeschrittenen Konzepten über. Decken Sie zuerst konzeptionelle Informationen ab und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte:
  - **Von oben nach unten**: Wie im [Überschriftsebenen](#überschriftsebenen) Abschnitt angegeben, gehen Sie von der höheren `##` zu der niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebenen für allgemeinere Einleitungstitel und spezifischere Titel, wenn Sie zu tieferen Ebenen fortschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Das Benennen von Titeln für verschiedene Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind einfacher in Text und im Inhaltsverzeichnis zu scannen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Treiben Sie Titel auf den Punkt**: Verwenden Sie den Titel, um ein einzelnes Ziel zu vermitteln — eine einzige Idee oder ein Konzept, das im Abschnitt behandelt wird. Verwenden Sie dazu nach Möglichkeit nicht das Konjunktion "und" in einem Titel.
  - **Verwenden Sie parallele Konstruktion**: Verwenden Sie eine ähnliche Sprache für Titel auf derselben Überschriftenebene. Zum Beispiel, wenn ein `###`-Überschriftsebene-Titel Gerundien verwendet, das heißt, Wörter, die auf "-ing" enden, wie "Installing", dann versuchen Sie, alle Titel auf dieser Überschriftenebene mit Gerundien zu schreiben. Wenn ein Titel mit einem gebietenden Verb beginnt, wie "Use", "Configure", dann schreiben Sie alle Titel auf dieser Überschriftenebene beginnend mit einem gebietenden Verb.
  - **Vermeiden Sie gemeinsame Begriffe in Unterüberschriften**: Wiederholen Sie den Text im Titel einer höheren Überschrift nicht in Unterüberschriften. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", nennen Sie den Titel eines Unterabschnitts "Nach einleitenden Sätzen" anstelle von "Kommas nach einleitenden Sätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, Titel mit den Artikeln "a", "an" oder "the" zu beginnen.
  - **Fügen Sie einleitende Informationen hinzu**: Fügen Sie nach einem Titel einen einführenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Weitere Stilrichtlinien

Wenn Sie Fragen zur Verwendung und zum Stil haben, die in dieser Anleitung nicht behandelt werden, empfehlen wir die Referenzierung des [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder des [Chicago Manual of Style](https://www.chicagomanualofstyle.org/).

### Sprache, Grammatik und Rechtschreibung

Wenn Sie an der Verbesserung Ihrer Schreib- und Bearbeitungsfähigkeiten interessiert sind, können Sie die folgenden Ressourcen als hilfreich erachten.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur englischen Sprachverwendung
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich fundierte, aber benutzerfreundliche, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für die Präpositionsverwendung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
