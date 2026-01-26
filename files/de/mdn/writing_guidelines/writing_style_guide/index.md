---
title: Schreibstil-Leitfaden
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen für Konsistenz in Sprache und Stil auf der gesamten Website sorgen. Allerdings legen wir mehr Wert auf den Inhalt als auf das Formatieren, sodass Sie sich nicht verpflichtet fühlen müssen, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie einen Beitrag leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Beitragender Ihre Arbeit später bearbeitet, um sie diesem Leitfaden anzupassen. Die Reviewer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Content-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens richten sich hauptsächlich an die englischsprachige Dokumentation. Andere Sprachen können (und sind eingeladen), eigene Stilrichtlinien zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisationsteams veröffentlicht werden. Dennoch sollte dieser Leitfaden weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nachdem die allgemeinen Schreibrichtlinien aufgeführt wurden, beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite, wie Listen und Titel, formatiert werden sollten.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Inklusive relevanter Beispiele](#inklusive_relevanter_beispiele)
- [Bereitstellung einer beschreibenden Einführung](#bereitstellung_einer_beschreibenden_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Hinterkopf. Eine Seite über fortgeschrittene Netzwerktechniken muss beispielsweise möglicherweise nicht so detailliert auf grundlegende Netzwerk-konzepte eingehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klarheit**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Sprachstil und eindeutige Pronomen. Schreiben Sie kurze Sätze, die sich auf eine Idee pro Satz beschränken. Definieren Sie neue Begriffe für die Zielgruppe, bevor Sie sie verwenden.
- **Kürze**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel Sie sagen sollen. Wenn Sie übermäßig viele Details bereitstellen, wird die Seite langweilig zu lesen und selten verwendet.
- **Konsistenz**: Stellen Sie sicher, dass Sie die gleiche Ausdrucksweise während der gesamten Seite und auf mehreren Seiten hinweg verwenden.

### Inklusive relevanter Beispiele

Fügen Sie im Allgemeinen Beispiele oder Szenarien aus dem realen Leben hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen besser zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird, und um Randfälle zu erläutern, die möglicherweise vorliegen.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen zu Problemen zu demonstrieren, die möglicherweise auftreten.

### Bereitstellung einer beschreibenden Einführung

Stellen Sie sicher, dass der einführende Absatz vor der ersten Überschrift die Informationen, die auf der Seite behandelt werden, und möglicherweise das, was die Leser erreichen können, nachdem sie den Inhalt durchgesehen haben, angemessen zusammenfasst. Auf diese Weise kann ein Leser schnell bestimmen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen sowie über das erforderliche Vorwissen, falls vorhanden, informieren. Der einleitende Absatz sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen, mit Links zu den verwandten Informationen, und Hinweise auf Situationen bieten, in denen die Inhalte des Artikels nützlich sein könnten.

- **Beispiel für kurze Einleitung**: Dieses Beispiel einer Einleitung ist viel zu kurz. Es lässt zu viele Informationen aus, wie z.B., was es genau bedeutet, Text zu "umranden", wo der Text gezeichnet wird, und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel für lange Einleitung**: Dieses Beispiel hat eine aktualisierte Einleitung, ist aber jetzt viel zu lang.
  Es werden zu viele Details enthalten und der Text taucht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einleitung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn aufgerufen, umrandet die Methode **`CanvasRenderingContext2D.strokeText()`** der 2D-Canvas-API die Zeichen in der angegebenen Zeichenkette, beginnend an den angegebenen Koordinaten, unter Verwendung der aktuellen Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet "Umrandung" von Text, die Umrisse der Glyphen in der Zeichenkette zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuell im Kontext angegebenen Schriftart gezeichnet.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenkette relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenkette beginnend bei `x - (stringWidth / 2)` gezeichnet und der angegebene X-Koordinate in die Mitte der Zeichenkette gesetzt.
  > Wenn der Wert `"left"` ist, wird die Zeichenkette beginnend am angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenkette in Pixeln angeben können.
  > Wenn Sie diesen Parameter angeben, wird der Text beim Zeichnen horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen so breiten Raum zu passen.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen einer Zeichenkette mit Farbe gefüllt statt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine angemessene Einleitung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die `strokeText()`-Methode.

  > Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrandet (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenkette, die an der durch die angegebenen X- und Y-Koordinaten angegebenen Position verankert ist.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite Grafiken zeichnen sowie unseren Hauptartikel zum Thema, [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Verwendung der Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Main** und **Replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Verwenden Sie statt **Dummy** den Begriff **Placeholder**.
- Sie sollten die Begriffe **Crazy** und **Insane** in der Dokumentation nicht verwenden müssen; falls jedoch der Fall eintritt, überlegen Sie, ob Sie stattdessen **Fantastic** verwenden.

Es ist am besten, in jedem Schreiben, bei dem das Geschlecht für das Thema irrelevant ist, eine geschlechtsneutrale Sprache zu verwenden.
Wenn Sie zum Beispiel über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"seiner" in Ordnung; aber wenn das Subjekt eine Person eines beliebigen Geschlechts ist, ist "er"/"seiner" nicht angemessen.

Betrachten wir die folgenden Beispiele:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite gestatten möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite gestatten möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite gestatten möchte, ihre Webcam zu verwenden."

> [!NOTE]
> Auf den MDN Web Docs ist die Verwendung der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)," erlaubt. Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzeranzahl im Plural zu schreiben, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite gestatten möchten, ihre Webcams zu verwenden."

Die beste Lösung besteht natürlich darin, die Sätze neu zu schreiben und dabei die Pronomen zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog fordert die Erlaubnis des Benutzers zur Webcam-Nutzung an."
- **Richtig**: "Ein Bestätigungsdialog, der den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel für den Umgang mit dem Problem ist arguably besser.
Es ist nicht nur grammatikalisch korrekter, sondern entfernt einige der Komplexität beim Umgang mit Geschlechtern in verschiedenen Sprachen, die möglicherweise völlig unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer vereinfachen.

### Verwenden Sie zugängliche Sprache

Verwenden Sie keine räumlichen und Richtungshinweise wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein spezifisches visuelles Layout voraus, das jedoch nicht auf alle Benutzer zutreffen muss. Sie können auch unklar oder irreführend sein – insbesondere für Benutzer, die auf Bildschirmlesegeräte angewiesen sind oder übersetzte Inhalte lesen, bei denen Dorinselnrichtung unklar oder schwer genau zu übersetzen sind. In responsiven Layouts, bei denen sich die Position von Inhalten in Abhängigkeit von der Bildschirmgröße ändern kann, können solche Richtungsreferenzen ungenau werden. Diese Art von Sprache kann die Zugänglichkeit beeinträchtigen und es allen Benutzern erschweren, die Inhalte zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element klar identifizieren, auf das Bezug genommen wird. Verweisen Sie auf Abschnitte mit ihren Titeln oder Überschriften und verweisen Sie auf Beispiele oder Codefragmente, indem Sie beschreiben, was sie demonstrieren oder enthalten.

Beispielsweise:

- **Richtig**: "Verweisen Sie auf den [Accessibility](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility)-Abschnitt weiter unten auf dieser Seite."
- **Falsch**: "Verweisen Sie auf den Accessibility-Abschnitt unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mit CSS-Übergängen."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mit CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorherigen Abschnitt mit dem Titel Erstellen einer Media Query erklärt."
- **Falsch**: "Dieses Konzept wird im Abschnitt oben erklärt."

Vermeiden Sie außerdem vage Linktexte wie "Hier klicken" oder "Diesen Artikel lesen". Beschreibender Linktext bietet allen Lesern besseren Kontext und verbessert das Erlebnis für Nutzer von Hilfstechnologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Erfahren Sie mehr darüber, [wie Sie Flex-Elemente anordnen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Indem Sie diese Richtlinien befolgen, helfen Sie dabei, die MDN-Dokumentation für alle Benutzer zugänglich, klar und nutzbar zu machen, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben Sie mit SEO im Hinterkopf

Während das primäre Ziel jedes Schreibens auf MDN Web Docs darin besteht, offene Webtechnologien zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie wollen, oder die kleinen Details finden können, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, finden können. Wir können dies erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Hinterkopf behalten.

Dieser Abschnitt deckt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte ab, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indizieren können, damit die Leser leicht finden können, was sie benötigen. Die SEO-Richtlinien umfassen die Gewährleistung, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indizieren.

Die folgende Checkliste ist gut, um sie im Kopf zu behalten, während man Inhalte schreibt und überprüft, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen ordnungsgemäß indiziert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten über dasselbe Thema sind, auch wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den zwei Seiten, die diese beiden Eigenschaften dokumentieren, sich überraschend ähnlich ist, mit nur wenigen ausgetauschten Wörtern und dem gleichen Beispiel. Dies macht es Suchmaschinen schwer zu wissen, welches was ist, und sie teilen sich die Seitenrangfolge, was dazu führt, dass beide schwieriger zu finden sind, als sie sein sollten.

  Daher ist es wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen:
  - **Erklären Sie mehr einzigartige Konzepte**: Überlegen Sie sich Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man denkt. Beispielsweise können Sie beim Dokumentieren der `width`- und `height`-Eigenschaften über die unterschiedlichen Verwendungszwecke von horizontalem und vertikalem Raum schreiben und eine Diskussion über die entsprechenden Konzepte anbieten. Vielleicht können Sie die Verwendung von `width` im Hinblick auf die Raumgewinnung für eine Seitenleiste erwähnen, während Sie `height` verwenden, um vertikales Scrollen oder Footer zu behandeln. Das Einbeziehen von Informationen zu Barrierefreiheitsthemen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: In diesen Situationen sind Beispiele oft sogar noch ähnlicher als der Textkörper, da die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und daher keine wirklichen Änderungen bei der Wiederverwendung erforderlich sind. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder bieten Sie mindestens mehrere Beispiele an, wobei zumindest einige davon unterschiedlich sein sollten.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl eine Übersicht darüber, was das Beispiel macht, als auch eine Erklärung, wie es funktioniert, in einem dem Thema angemessenen Detailreichtum, sollten enthalten sein.

  Der einfachste Weg, zu vermeiden, dass man sich zu ähnlich ist, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in SEO-Jargon "dünne Seiten" genannt), werden Suchmaschinen solche Seiten nicht genau (oder gar nicht) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Leitprinzip stellen Sie sicher, dass die Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, sondern behandeln Sie diese Richtlinie als Mindestziel, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genügend Inhalt haben, um ordnungsgemäß durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:
  - **Vermeiden Sie Stubs**: Natürlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie ihn hinzu. Wir versuchen, auf den MDN-Webdocs direkte "Stub"-Seiten zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, denen große Teile ihrer Inhalte fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für den [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types), den sie repräsentiert, ordnungsgemäß strukturiert ist. Überprüfen Sie, ob alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Sicherstellen der Vollständigkeit**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt werden. Sicherstellen, dass alle Ausnahmen behandelt werden – dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, über die der Leser Bescheid wissen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele für alle Parameter oder zumindest die Parameter (oder Eigenschaften oder Attribute) enthalten sein, die Benutzer im Anfänger- bis mittleren Bereich wahrscheinlich verwenden, sowie alle fortgeschrittenen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht darüber beginnen, was das Beispiel tut, welches zusätzliche Wissen möglicherweise erforderlich ist, um es zu verstehen, und so weiter. Nach dem Beispiel (oder zwischen den Teilen des Beispiels) sollte Text stehen, der erklärt, wie der Code funktioniert. Sparen Sie nicht an den Details oder dem Umgang mit Fehlern in Beispielen. Beachten Sie, dass Benutzer Ihren Code kopieren und in ihren eigenen Projekten verwenden und dass Ihr Code auf Produktionswebsites verwendet wird! Weitere nützliche Informationen finden Sie in unseren [Codebeispielrichtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide).
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Statt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt zu diesem Anwendungsfall mit einem Beispiel und einem Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie passenden `alt`-Text zu allen Bildern und Diagrammen hinzu. Dieser Text zählt, da Crawler keine Bilder durchforsten können und so der `alt`-Text Suchmaschinen-Crawlern mitteilt, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit der Funktion in Zusammenhang stehen, einzuschließen, um das Suchmaschinenranking zu manipulieren; solches Verhalten wird leicht erkannt und neigt dazu, bestraft zu werden.
    > Ebenso **nicht** sich wiederholendes, unhilfreiches Material oder Schlüsselwörter innerhalb der eigentlichen Seite in einem Versuch hinzufügen, die Größe der Seite und das Suchranking zu verbessern. Dies schadet mehr als es nützt, sowohl in Bezug auf die Lesbarkeit der Inhalte als auch auf unsere Suchergebnisse.

- **Konzentrieren Sie sich auf Themeninhalte**: Schreiben Sie Inhalte lieber zu dem Thema der Seite als zu einem bestimmten Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einfügen könnten; tatsächlich erstellen viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (Variationen aus kurzen, mittleren und langschwänzigen Schlüsselwörtern), um innerhalb ihres Artikels hinterlegt zu werden, je nach Länge. Auf diese Weise wird Ihre Wortwahl diversifiziert, was weniger Wiederholungen fördert.

## Schreibstil

Abgesehen vom Schreiben grammatikalisch korrekter Sätze in Englisch sollten Sie diese Richtlinien befolgen, um Inhalte über die MDN Web Docs hinweg konsistent zu halten.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das mit dem ersten Buchstaben jedes Wortes eines Satzes erstellt wird. Dieser Abschnitt beschreibt die Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Erwähnen Sie bei der ersten Erwähnung eines Begriffs auf einer Seite Akronyme, die für Benutzer wahrscheinlich unbekannt sind. Im Zweifelsfall erweitern Sie den Begriff. Noch besser, verlinken Sie ihn mit dem Artikel oder [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.
  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache ..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache ..."

- **Großschreibung und Punkte**: Verwenden Sie vollständige Großschreibung und lassen Sie Punkte in allen Abkürzungen und Akronymen weg, einschließlich Organisationen wie "USA" und "UN".
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderem geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Webbrowser (z. B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B. Firefox) können verwendet werden ...

  <!-- markdownlint-enable search-replace -->

  In normalem Text (d.h. Text außerhalb von Anmerkungen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.
  - **Richtig**: ... Webbrowser und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser e.g., Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente von lateinischen Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abk.   | Latein           | Englisch                     |
  | ------ | ---------------- | ---------------------------- |
  | cf.    | _confer_         | vergleiche                   |
  | e.g.   | _exempli gratia_ | zum Beispiel                 |
  | et al. | _et alii_        | und andere                   |
  | etc.   | _et cetera_      | und so weiter                |
  | i.e.   | _id est_         | das heißt, in anderen Worten |
  | N.B.   | _nota bene_      | wohlgemerkt                  |
  | P.S.   | _post scriptum_  | Nachschrift                  |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich sinnvoll ist, eine lateinische Abkürzung zu verwenden. Einige werden so selten verwendet, dass viele Leser ihre Bedeutung entweder nicht verstehen oder verwirren könnten.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Zum Beispiel verwechseln viele "e.g." mit "i.e.", was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Für Pluralformen von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals ein Apostroph. Bitte.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Abkürzung verwenden, bevorzugen Sie "vs." über "v." und können sie in Überschriften verwenden. Ansonsten im Text verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Fließtext und verwenden Sie "World Wide Web" als Eigenname. Es ist akzeptabel, "web" (allein oder als Adjektiv) und "internet" kleingeschrieben zu verwenden.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, sodass Sie auf MDN möglicherweise viele Instanzen von "Web" und "Internet" finden.
> Sie können diese ändern, wenn Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur wegen der Großschreibung zu bearbeiten.

Tastaturtasten sollten die Satz-Stil-Großschreibung verwenden, nicht die Großbuchstaben-Kapitellizierung.
Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" zur Abkürzung der "<kbd>Escape</kbd>"-Taste verwenden können.

Bestimmte Wörter sollten immer großgeschrieben werden, z.B. Markennamen, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Code-Syntax erfordert Kleinschreibung).
Einige Beispiele:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Warenzeichen der Oracle Corporation, es sollte immer wie markenrechtlich geschützt geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

Einige Werkzeug- und Projektnamen haben ihre eigenen Marken-Großschreibungsregeln. Diese können Namen erfordern, die vollständig in Kleinbuchstaben ("npm" oder "webpack"), vollständig in Großbuchstaben ("UNIX", "GNOME", "VIM") oder gemischt ("TypeScript", "macOS" oder "jQuery") sind.

Die Marken-Großschreibung von der offiziellen Website oder Dokumentation sollte immer verwendet werden, auch am Anfang eines Satzes. Wenn Sie es nicht mögen, einen Satz mit einem Kleinbuchstaben beginnen zu lassen, empfehlen wir, ihn umzuformulieren, um das Problem zu vermeiden. Zum Beispiel könnten Sie sagen "Sie können den npm-Paketmanager verwenden, um..." statt "npm lässt Sie...".

### Kontraktionen

Unser Schreibstil neigt dazu, lässig zu sein, daher können Sie Kontraktionen (z.B. "don't", "can't", "shouldn't") verwenden, wenn Sie möchten.

### Zahlen und Ziffern

- **Kommas**: Im Fließtext verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.
  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht einschließlich Daten in Codebeispielen) verwenden Sie das Format "January 1, 1900".
  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Dekaden**: Verwenden Sie das Format "1990s". Nicht mit einem Apostroph.
  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Pluralformen von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englische Pluralformen, nicht latinische oder griechische Varianten.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „geschwungenen“ Anführungszeichen und Apostrophe. Auf den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns für Konsistenz für das eine oder andere entscheiden müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Codebeispiele, selbst inline, gelangen, können Leser sie kopieren und einfügen und erwarten, dass sie funktionieren (was sie nicht werden).

- **Richtig**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen“.
- **Falsch**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen“.

### Kommas

Die folgende Liste beschreibt einige der häufigsten Situationen, in denen wir auf die Regeln der Kommasetzung achten müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitender Nebensatz ist ein abhängiger Satz, der sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie ein Komma nach einem einleitenden Nebensatz, um ihn vom nachfolgenden unabhängigen Satz zu trennen.
  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Schreibstil-Leitfaden."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen beziehen Sie sich auf unseren Schreibstil-Leitfaden."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zur Eingabe von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zur Eingabe von Daten."

- **Vor Konjunktionen**: Das Serialkomma (auch als „Oxford-Comma“ bekannt) ist das Komma, das vor der Konjunktion in einer Aufzählung von drei oder mehr Elementen erscheint. Bei den MDN Web Docs verwenden wir das Serialkomma. Kommas trennen auch jedes Element der Liste voneinander.
  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie keine Kommas vor "and" und "or" in einer Liste, die zwei Elemente enthält.
  - **Richtig**: "Mein Hund ist süß und klug."
  - **Falsch**: "Mein Hund ist süß, und klug."

  Verwenden Sie Kommas vor Konjunktionen wie "and", "but" und "or", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, ziehen Sie in Erwägung, ihn in zwei Sätze umzuschreiben.
  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "that" und "which"**: Ein restriktiver Nebensatz ist wesentlich für die Bedeutung des Satzes und muss nicht mit Kommas vom Rest des Satzes abgesetzt werden. Ein restriktiver Nebensatz wird normalerweise durch "that" eingeleitet und darf **nicht** mit einem Komma vorangestellt werden.
  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen.
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen.

  Ein nicht restriktiver Nebensatz liefert zusätzliche Informationen und ist für die Bedeutung des Satzes nicht wesentlich. Ein nicht restriktiver Nebensatz wird normalerweise durch "which" eingeleitet und sollte mit einem Komma vorangestellt werden.
  - **Richtig**: "Sie schreiben eine Richtlinie, die eine zulässige Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie, die eine zulässige Liste von Ursprüngen für jede Funktion ist."

- **Vor "such as"**: Wenn "such as" Teil eines nicht restriktiven Nebensatzes ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "such as".
  - **Richtig**: "Das Array-Objekt verfügt über Methoden, um Arrays auf verschiedene Arten zu manipulieren, wie etwa sie zu verbinden, umzukehren und zu sortieren."
  - **Falsch**: "Das Array-Objekt verfügt über Methoden, um Arrays auf verschiedene Arten zu manipulieren, wie."

  Das folgende Beispiel zeigt, wann kein Komma mit "such as" verwendet wird. In diesem Fall ist der Satzteil mit "such as" für die Bedeutung des Satzes wesentlich.
  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten mit WebSockets erlauben."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten mit WebSockets erlauben."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann durch Bindestriche getrennt werden, wenn der letzte Buchstabe des Präfixes ein Vokal und derselbe wie der erste Buchstabe des Stamms ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e-mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Verwenden Sie im Allgemeinen den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als Varianten-Schreibweise oder als hauptsächlich in einer nicht-amerikanischen Form des Englischen verwendet gelistet.
Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen „u“ zur amerikanischen Standardform) nachschlagen, finden Sie die Beschreibung "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Varianten-Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und erstellt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit folgendem Befehl ausführen:

```bash
npm run lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und zugelassene Wörter enthalten, die nicht in den Standardwörterbüchern vorhanden sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber vom Schreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstatt „Tag“. Darüber hinaus sollte das Element in spitze Klammern "<>" eingeschlossen werden und mit Zurückblick-Kommas (`` ` ``) formatiert werden. Zum Beispiel wird die Verwendung von \<input\> innerhalb von Zurückblick-Kommas als `<input>` formatiert, wie es erwartet wird.
  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages) angeben, das das Element formatiert, die spitzen Klammern "<>" hinzufügt und einen Link zu seiner Referenzseite hinzufügt.
  - **Mit Zurückblick-Kommas**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **parameters**. Bitte vermeiden Sie den Begriff "arguments" wenn möglich für Konsistenz.

- **Benutzeroberflächenaktionen**: In Aufgabenfolgen beschreiben Sie Benutzeroberflächenaktionen, indem Sie die imperative Form verwenden. Identifizieren Sie das Benutzeroberflächenelement nach seinem Label und Typ.
  - **Richtig**: "Klicken Sie auf die Schaltfläche 'Bearbeiten'."
  - **Falsch**: "Klicken Sie auf 'Bearbeiten'."

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist auch die passive Stimme akzeptabel, da unsere Inhalte informell sind.
Versuchen Sie jedoch konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien für verschiedene Teile jeder Seite auf, wie Überschriften, Notizen, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Verweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (shortlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste stellt einige empfohlene Vorgehensweisen beim Schreiben eines Codebeispiels für die MDN Web Docs vor:

- Jedes Codebeispiel sollte enthalten:
  - **Überschrift**: Eine kurze `###`- (`<h3>`) Überschrift zur Beschreibung des Szenarios, das durch das Codebeispiel demonstriert wird. Zum Beispiel "Verwendung des Offset-Drucks" und "Zurücksetzung auf den Stil der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Codebeispiel, die die Besonderheiten des Beispiels erklärt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel "Im folgenden Beispiel sind zwei Kaskadenschichten in der CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Codebeispiel, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features demonstrieren und wie es verwendet wird, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature nutzen möchte oder benötigt.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile aufzuteilen, damit sie individuell beschrieben werden können.
- Wenn Sie [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass alle Codesegmente des Beispiels, die denselben Typ haben (HTML, CSS und JavaScript), vor dem Ausführen des Beispiels zusammengefügt werden. Dadurch können Sie den Code in mehrere Segmente aufteilen, von denen jedes optional mit eigenen Beschreibungen, Überschriften und so weiter versehen werden kann. Dies macht die Dokumentation von Code unglaublich leistungsstark und flexibel.

Um zu erfahren, wie Sie Codebeispiele für die MDN Web Docs stylen oder formatieren können, siehe unsere [Richtlinien für das Stylen von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Verweise (Verlinkung)

Wenn Sie auf eine andere Seite oder den Abschnitt einer Seite auf MDN durch ihren Titel verweisen, folgen Sie dem Satz-Großschreibung in dem Linktext (entspricht dem Seiten- oder Abschnittstitel). Verwenden Sie die Satz-Großschreibung im Linktext, auch wenn sie von dem verlinkten Seitentitel oder Abschnittstitel abweicht (es könnte sein, dass die im Seiten- oder Abschnittstitel verwendete Großschreibung inkorrekt ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um sich auf eine MDN-Seite durch ihren Titel zu beziehen, verwenden Sie den folgenden Stil:

- **Richtig**: "Sehen Sie sich die [Reihenfolge der Flex-Elemente](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) im Leitfaden an."
- **Falsch**: "Sehen Sie sich den Leitfaden zur "[Reihenfolge der Flex-Elemente](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" an."

Folgen Sie einem konsistenten Stil, wenn Sie auf Abschnitte innerhalb einer Seite verlinken:

- **Richtig**: "Für weitere Informationen beachten Sie den Abschnitt [Zuweisung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im _Speicherverwaltung_ Leitfaden."

Wenn der Abschnitt, auf den Sie verlinken, sich auf derselben Seite befindet, können Sie Hinweise auf den Standort des Abschnitts mit beschreibenden Sätzen geben.

- **Richtig**: "Dieses Konzept wird im Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) dieses Dokuments ausführlicher beschrieben."
- **Falsch**: "Dieses Konzept wird im Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) unten ausführlicher beschrieben."

Auf MDN ist eine weitere Möglichkeit, auf eine Referenzseite zu verlinken, die Verwendung eines Makros. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages) beschrieben. Um beispielsweise auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir befolgen ähnliche Cross-Referenzierungsrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende der Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob ein externer Link auf den MDN Web Docs sinnvoll ist oder nicht. Pull-Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie nicht diesen Richtlinien entsprechen.

Wenn Sie in Erwägung ziehen, einen externen Link zu MDNs [Web-Entwicklung lernen](/de/docs/Learn_web_development)-Inhalten hinzuzufügen, lesen Sie bitte auch [Richtlinien für das Schreiben von Lerninhalten > Partner-Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie in Erwägung ziehen, einen externen Link hinzuzufügen, stellen Sie sicher, dass ein minimales Risiko besteht für:

- Defekte oder veraltete Links
- Eindruck einer Unterstützung, insbesondere bei kommerziellen Produkten oder Dienstleistungen
- Versuch, die MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie in Erwägung ziehen, Inhalte innerhalb der MDN Web Docs zu referenzieren. Interne Links sind einfacher zu pflegen und machen die Gesamtheit der MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und weithin vertrauenswürdig sind. Sie sollten es bevorzugen, Links zu externen Inhalten hinzuzufügen, die:
  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Zur Zitation, Anerkennung oder Bestätigung notwendig sind (z.B. als Teil einer Creative Commons-Anerkennung)
  - Wahrscheinlicher zum Thema gepflegt werden, als solche Inhalte selbst auf den MDN Web Docs zu integrieren (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder gemeinschaftsgetrieben sind, wie die MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Aufrechterhaltung, Zugänglichkeit oder setzen anderweitig Barrieren für Leser. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:
  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters anstelle der damit verbundenen Dokumentation)
  - Kurzlebig oder ungewartet sind (z.B. eine einmalige Ankündigung)
  - Selbstreferenzierend oder eigenwerbend sind (z.B. die eigenen Werke des Autors abseits der MDN Web Docs)
  - Hinter einer Paywall sind (z.B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in einkommensschwächeren Ländern unerreichbar ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenztalk oder ein GitHub-Repository von Wert sind, kann das Verlinken zu eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Denken Sie zweimal nach, bevor Sie auf Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull-Request offenlegen. Andernfalls könnte Ihre weitere Teilnahme an den MDN Web Docs gefährdet sein.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Herausgeber einer Spezifikation sind und Ihnen beim Dokumentieren der Dokumentation zu dieser Spezifikation helfen, wird das Verlinken zu dieser Spezifikation erwartet und akzeptiert. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (shortlinks)

Ein URL-Verkürzer (z.B. TinyURL oder Bitly) kann großartig sein, um lange Links in kurze, einfachere URLs (auch als "Kurzlinks" bekannt) umzuwandeln. Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann mit bestimmten Verkürzern das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für bösartige Zwecke genutzt werden könnte.

Verwenden Sie keine über Drittanbieter (vom Benutzer generierbare) URL-Verkürzer erstellten Links. Zum Beispiel, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem beliebigen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

<!-- markdownlint-disable search-replace -->

Andererseits werden von den Organisationen, die auch die Ziel-URLs verwalten, unterhaltene Erstanbieter-Verkürzer empfohlen. `https://bugzil.la` gehört Mozilla und wird von Mozilla betrieben als URL-Verkürzer, der auf `https://bugzilla.mozilla.org/` umleitet, welches auch eine von Mozilla verwaltete Domäne ist. In diesem Fall verwenden Sie die kürzere URL. Beispielsweise verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese entsprechen den [HTML-Überschriftstags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Tags, jeweils.

`##` ist die höchste erlaubte Ebene, da `#` dem Seitentitel vorbehalten ist.
Wir empfehlen, nicht mehr als drei Ebenen an Überschriften hinzuzufügen. Wenn Sie das Bedürfnis verspüren, die vierte Überschriftenebene hinzuzufügen, ziehen Sie in Betracht, den Artikel in mehrere kleinere Artikel mit einer Übersichtsseite aufzuteilen. Alternativ können Sie in Betracht ziehen, die Informationen als Aufzählungspunkte darzustellen, um zu vermeiden, dass Sie eine Ebene-4-Überschrift verwenden.

Beachten Sie die folgenden Anmerkungen und Verbote, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in einen einzelnes Unterthema.
  Es sind entweder zwei oder mehr Unterüberschriften, oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch zurückblickende Zeichen verwenden, um Codebegriffe anzuzeigen (z.B. "Verwenden des `FooBar` Interfaces").
- **Erstellen Sie keine „aufprallenden“ Überschriften.** Diese sind Überschriften gefolgt von unmittelbar nachfolgender Unterüberschrift, ohne erklärenden Text dazwischen.
  Dies sieht nicht gut aus und lässt Leser am Anfang des äußeren Abschnitts ohne erklärenden Text zur Orientierung.

### Bilder und andere Medien

Wenn Sie auf einer Seite Bilder oder andere Medien einfügen, folgen Sie diesen Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen die Verwendung erlaubt. Versuchen Sie Medien zu verwenden, die sehr eine sehr freizügige Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz – [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) – kompatibel ist.
- Für Bilder führen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Gewicht der Seite zu reduzieren.
- Für `SVG` führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei am Ende der Datei eine leere Zeile hat.
- Jedes Bild muss [beschreibenden `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten konsistent und strukturiert auf allen Seiten formatiert werden.
Einzelne Listenpunkte sollten unabhängig vom Listenformat mit geeigneter Zeichensetzung geschrieben werden.
Abhängig davon, welche Art von Liste Sie erstellen, sollten Sie Ihr Schreiben jedoch entsprechend den in den folgenden Abschnitten beschriebenen Punkten anpassen. Stellen Sie in beiden Fällen einen einleitenden Satz hinzu, der die Informationen in der Liste beschreibt.

- **Ungeordnete Listen**: Ungeordnete Listen sollten verwendet werden, um zusammengehörige Stücke von kurzen Informationen zu gruppieren. Jeder Punkt in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder ein Subjekt oder beides fehlen) in ungeordnete Listen sollten die übliche Zeichensetzung verwenden – Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes einschließlich des letzten Satzes des Elements ein Punkt stehen, genau wie in einem normalen Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt aufgebaute ungeordnete Liste:

  > In diesem Beispiel sollten wir folgendes einfügen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung mit weiterer Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel erwähnt jeder Listenpunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Ein Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt dem Text Schatten hinzu

  Wenn eines oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, selbst wenn ein Listenelement drei oder weniger Wörter enthält. Insofern als es möglich ist, folgen Sie dieselbe Struktur für alle Elemente in einer Liste; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden in erster Linie verwendet, um Schritte in einer Anleitung aufzuführen. Da Anleitungen komplex sein können, ist die Klarheit eine Priorität, insbesondere wenn der Text in jedem Listenpunkt umfangreich ist. Wie bei ungeordneten Listen folgen Sie den üblichen Zeichensetzungsregeln. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen vorzustellen. Dies ist wichtig, um dem Benutzer Kontext zu bieten, bevor Sie die Anweisungen beginnen.
  > 2. Beginnen Sie, Ihre Anweisungen zu erstellen, und halten Sie jeden Schritt im eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich umfangreich sein, also ist es wichtig, klar zu schreiben und korrekte Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis bei Abschluss.

  Das folgende ist ein Beispiel für das Schreiben einer Abschluss-Erklärung für die vorhergehende Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die anweisende Schritte bietet, um eine nummerierte Liste mit der richtigen Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig zu Anleitungen oder zur Durchführung geordneter Prozeduren verwendet werden, stellen Sie sicher, dass Sie jedes Element fokussiert halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Anleitungen, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [verweise auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Dies ist der [Siehe auch Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die `@layer`-Seite.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt im [ungeordnete Liste](#listen) Format mit jedem Element in der Liste als Phrase. Im [Lernen von Webentwicklung](/de/docs/Learn_web_development) Abschnitt auf MDN folgt der Siehe auch Abschnitt dem [Definitionsliste](#definitions) Format.

Um Konsistenz über die MDN Web Docs zu bewahren, beachten Sie die folgenden Richtlinien, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte derselbe wie der Titel der Seite oder des Abschnitts sein, auf den verwiesen wird. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA states and properties":
  - **Richtig**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)

- Verwenden Sie Satz-Großschreibung im Linktext, selbst wenn sie von dem verlinkten Seitentitel oder Abschnittstitel abweicht. Es könnte sein, dass die im Titel oder Abschnittstitel verwendete Schreibweise inkorrekt ist. Zum Beispiel wird der Linktext zur [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satzschreibung sein:
  - **Richtig**: [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)

- Auch bei externen Links verwenden Sie die Satzschreibung, selbst wenn die Schreibweise auf der Zielseite anders ist. Diese Maßnahme soll Konsistenz über die MDN Web Docs hinweg sicherstellen. Ausnahmen sind Buchtitel.
- Auf MDN, Sie können optional ein Makro verwenden, um auf eine Seite zu verlinken, wie es in der [Linken zu Referenzseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros##linking_to_reference_pages) Abschnitt auf der _Häufige verwendete Makros_ Seite erklärt wird. Die Nutzung des Makros fügt der Linktext das Code-Format hinzu, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("Ein", "Eine", "Der") ist am Anfang des Auflistungselements notwendig. Kein Punkt ist am Ende des Listenelements erforderlich, da es sich um einen Begriff oder eine Phrase handelt.
  - **Richtig**: {{cssxref("revert-layer")}}
  - **Falsch**: Der {{cssxref("revert-layer")}} Begriff.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)

- Wie bei den vorherigen Beispielen, fügen Sie zur Formatierung des Links Code zurückblickenden Zeichen (`` ` ``) zu Schlüsselwörtern und literalen Text im Linktext hinzu, obwohl das Format im Titel oder Abschnittstitel nicht verwendet wird. Zum Beispiel ist für den Titel "Array() constructor" der Linktext `Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link minimal. Bei einer Beschreibung fügen Sie ihn nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Zeichensetzung. Platzieren Sie den verknüpften Text, um die Liste der Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren für die Gestaltung von Kontrollkästchen.

- Verwenden Sie nicht die Konjunktion "and" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften.
- Versuchen Sie bei externen Links, die Quelle der Website und das Jahr der Veröffentlichung oder letzten Aktualisierung (in Klammern) festzulegen, wann immer es möglich und angemessen ist. Ein Link wie [Top-Level-Wait](https://v8.dev/features/top-level-await) auf der Seite v8.dev (2019) verleiht den Lesern von MDN eine klare Vorstellung davon, welches Ziel das Ziel ist, und hilft das Jahr, dem sie

- Bei externen Links zu Büchern können Sie auch Autorennamen hinzufügen. Ein paar Beispiele sind im [Weiterführende Lektüre](#language_grammar_and_spelling) Abschnitt aufgeführt. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repositories hinzuzufügen, die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listieren Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu den verwandten Leitfäden und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge ist hauptsächlich, um die Scanfähigkeit der Elemente in der Liste zu unterstützen.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie alphabetischer oder einfacher-zu-komplexer Reihenfolge, was Sinn ergibt für den Kontext.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Fachbereich hinzufügen müssen, tun Sie dies in der Regel, indem Sie eine Übersichtseite erstellen und dann Unterseiten für jeden der individuellen Artikel hinzufügen.
Die Übersichtsseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bieten.
Sie können das Einfügen von Seiten in die Liste automatisieren, indem Sie einige von uns erstellten Makros verwenden.

Betrachten Sie zum Beispiel den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der folgendermaßen strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnisseite
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie, zu vermeiden, Ihren Artikel an die oberste Ebene der Hierarchie zu setzen, da dies die Seite verlangsamt und das Suchen und Navigieren auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem „Slug“ der Seite unterscheiden, der der Teil der URL der Seite nach `<locale>/docs/` ist. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn Sie ein neues Hierarchielevel erstellen, sollte die neue Ebene zur Zeilenbestandteil des Slugs werden, die nur ein oder zwei Wörter umfasst.
- Slugs sollten für mehrwortige Komponenten einen Unterstrich verwenden, wie etwa `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie auch in Slugs den Regeln der Satz-Großschreibung für jedes Segment, wie etwa in dem vorherigen Beispiel `Basic_HTML_syntax`.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite. Ein Titel der Seite kann in der URL der Seite nicht identisch mit dem „Slug“ sein, wie in der [Slugs](#slugs) Sektion erklärt wurde.

Beachten Sie die folgenden Richtlinien, wenn Sie Titel schreiben:

- **Großschreibungsstil**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften in Satz-Stilverwendung (nur das erste Wort und Eigennamen großgeschrieben) und nicht in Überschriften-Stilverwendung verwendet werden:
  - **Richtig**: "A new method for creating JavaScript rollovers"
  - **Falsch**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel eingeführt wurde. Aktualisieren Sie sie gerne, wenn Sie möchten. Wir kommen allmählich dazu.

- **Allgemeine Richtlinien**: Entscheiden, was Sie dokumentieren möchten und wie Sie diese Inhalte strukturieren, ist einer der ersten Schritte, um zu schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen bei der Entscheidung helfen, wie Sie Informationen anordnen möchten. Behandeln Sie zuerst einfache Konzepte und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepte vor. Behandeln Sie konzeptionelle Informationen zuerst und gehen Sie dann zu aktionsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite sowie Abschnitte oder Unterabschnitte:
  - **Gehen Sie von höher nach niedriger**: Wie in der [Überschriftenebenen](#überschriftenebenen)-Sektion beschrieben, gehen Sie von den höheren `##` zu den niedrigeren `####`-Levels, ohne Ebenen zu überspringen. Verwenden Sie höhere Level-Überschriften für breitere Einführungs-Titel und verwenden Sie spezifischere Titel, wenn Sie zu niedrigeren Überschriftenebenen gelangen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verbundenen Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Das Benennen von Titeln der verschiedenen Abschnitte kann Ihnen in dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind einfacher im Text und im Inhaltsverzeichnis zu scannen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifische Information zu vermitteln, die im Abschnitt behandelt wird. Zum Beispiel, für einen Abschnitt zur Einführung von HTML-Elementen, verwenden Sie den Titel "HTML-Elemente" statt "Einführung" oder "Übersicht".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine Einzelidee oder ein Einzelkonzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck, versuchen Sie nach Möglichkeit den Gebrauch von Konjunktionen wie "and" in einem Titel zu vermeiden.
  - **Verwenden Sie parallele Konstruktion**: Verwenden Sie eine ähnliche Sprache für Titel auf der gleichen Überschriften-Ebene. Zum Beispiel, wenn ein `###` Überschrift-Level Titel Gerundium verwendet, also Wörter, die auf „-ing“ enden, wie "Installing", dann versuchen Sie, alle Titel auf dieser Überschriftenebene mit Gerundien zu schreiben. Wenn ein Titel mit formalen Ausdrücken wie "Use", "Configure" beginnt, wäre es gut, alle Titel auf dieser Überschriftenebene mit formalen Ausdrücken zu beginnen.
  - **Vermeiden Sie gemeinsame Begriffe in niedrigeren Überschriftsebenen**: Wiederholen Sie nicht den Text im Titel einer höheren Überschriftsebene in den niedrigeren Titeln. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", benennen Sie den Titel eines Unterabschnitts in "Nach einleitenden Nebensätzen" um, statt "Kommas nach einleitenden Nebensätzen".
  - **Beginnen Sie nicht mit Artikeln**: Vermeiden Sie, Titel mit Artikeln wie „a“, „an“ oder „the“ zu beginnen.
  - **Fügen Sie einleitende Informationen hinzu**: Nach einem Titel, fügen Sie einführenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Leitfaden für das Schreiben von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Leitfaden für das Schreiben von HTML-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Leitfaden für das Schreiben von CSS-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Leitfaden für das Schreiben von JavaScript-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Leitfaden für das Schreiben von Shell-Prompt-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stilrichtlinien

Wenn Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir Ihnen, den [Microsoft-Schreibstil-Leitfaden](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich fundierte, aber benutzerfreundliche Ratschläge; sehr gut für Nicht-Muttersprachler, insbesondere für den Gebrauch von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
