---
title: Stil-Leitfaden für das Schreiben
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

Dieser Stil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen die sprachliche und stilistische Konsistenz auf der Website sicherstellen. Allerdings sind wir mehr an den Inhalten als an deren Formatierung interessiert, daher fühlen Sie sich nicht verpflichtet, den gesamten Stil-Leitfaden vor Ihrer ersten Mitwirkung zu lernen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um diesen Leitfaden zu entsprechen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Pull-Request für Inhalte einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für englischsprachige Dokumentationen. Andere Sprachen können (und sollten) ihre eigenen Stil-Leitfäden erstellen. Diese sollten als Unterseiten der entsprechenden Lokalisierungs-Teamseite veröffentlicht werden. Dennoch sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten herangezogen werden.

Nach der Auflistung allgemeiner Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das betreffende Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Ks des Schreibens](#berücksichtigen_sie_die_drei_ks_des_schreibens)
- [Beispiele einfügen](#beispiele_einfügen)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie unter Berücksichtigung von SEO](#schreiben_sie_unter_berücksichtigung_von_seo)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe im Blick, für die Sie Inhalte schreiben. Zum Beispiel benötigt eine Seite zu fortgeschrittenen Netzwerktechniken wahrscheinlich nicht so viele Details zu grundlegenden Netzwerk-Konzepten wie die typische Seite über Vernetzung. Beachten Sie, dass es sich hierbei um Richtlinien handelt. Einige dieser Tipps könnten nicht in jedem Fall anwendbar sein.

### Berücksichtigen Sie die drei Ks des Schreibens

Die drei Ks des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den aktiven Satzbau und eindeutige Pronomen. Schreiben Sie kurze Sätze und konzentrieren Sie sich dabei auf eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, wobei Sie die Zielgruppe im Hinterkopf behalten.
- **Kurz**: Wenn Sie ein Dokument schreiben, ist es wichtig zu wissen, wie viel Sie sagen sollten. Wenn Sie zu viele Details angeben, wird die Seite ermüdend zu lesen und selten genutzt werden.
- **Konsistent**: Stellen Sie sicher, dass Sie dieselbe Sprache im gesamten Text und über mehrere Seiten hinweg konsequent verwenden.

### Beispiele einfügen

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen greifbarer und praktischer zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, für welchen Parameter jeder verwendet wird und um Randfälle zu klären, die möglicherweise existieren.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Probleme, die auftreten können, darzustellen.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz oder die Absätze vor der ersten Überschrift die Informationen zusammenfasst, die die Seite abdecken wird, und möglicherweise, was Leser erreichen können, nachdem sie den Inhalt durchgegangen sind. So kann ein Leser schnell bestimmen, ob die Seite für seine Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen informieren sowie über das erforderliche Vorwissen, das der Leser haben sollte, falls vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den verwandten Informationen, und er sollte Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Einführungsbeispiel ist viel zu kurz. Es lässt zu viele Informationen aus, wie zum Beispiel, was es genau bedeutet, Text zu „streichen“, wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zieht eine Zeichenfolge.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat nun eine aktualisierte Einführung, ist aber jetzt viel zu lang. Es wurden zu viele Details eingeschlossen, und der Text geht zu tief darauf ein, andere Methoden und Eigenschaften zu beschreiben. Stattdessen sollte sich die Einführung auf die Methode `strokeText()` konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn aufgerufen, streicht die Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** die Zeichen in der angegebenen Zeichenfolge, beginnend an den angegebenen Koordinaten, mit der aktuellen Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet „streichen“ von Text, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts festgelegt.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert „center“ ist, wird die Zeichenfolge beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in die Mitte der Zeichenfolge platziert wird.
  > Wenn der Wert „left“ ist, wird die Zeichenfolge beginnend am angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` „right“ ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der Ihnen ermöglicht, eine maximale Breite für die Zeichenfolge in Pixeln anzugeben.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen so breiten Raum zu passen, wenn er gezeichnet wird.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenfolge farbig auszufüllen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine angemessene Einführung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die Methode `strokeText()`.

  > Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), ein Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), streicht (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenfolge, verankert an der durch die gegebenen X- und Y-Koordinaten angegebenen Position.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Für mehr Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite "Zeichnen von Grafiken" sowie unseren Hauptartikel zum Thema [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und diverses Publikum.
Wir ermutigen nachdrücklich, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Haupt** und **Replikat**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Kohärenz** ersetzt werden.
- Statt **Dummy** verwenden Sie **Platzhalter**.
- Sie sollten die Begriffe **verrückt** und **wahnsinnig** in der Dokumentation nicht verwenden; wenn sich der Fall ergibt, erwägen Sie die Verwendung von **fantastisch**.

Es ist am besten, geschlechtsneutrale Sprache in jedem Schriftstück zu verwenden, bei dem das Geschlecht für das Thema irrelevant ist.
Wenn Sie zum Beispiel über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Subjekt eine Person eines beliebigen Geschlechts ist, ist "er"/"sein" nicht angemessen.

Lassen Sie uns die folgenden Beispiele betrachten:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, nutzen Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."

> [!NOTE]
> Die MDN Web Docs erlauben die Verwendung der dritten Person Plural, allgemein bekannt als "[Singular 'they'](https://en.wikipedia.org/wiki/Singular_they)." Die geschlechtsneutralen Pronomen umfassen "sie", "ihnen", "ihr" und "ihres".

Eine andere Möglichkeit besteht darin, die Benutzer in den Plural zu setzen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "In einem Bestätigungsdialog erscheint die Anfrage zur Verwendung der Webcam."
- **Richtig**: "Ein Bestätigungsdialog, der die Nutzung der Webcam erfragt, erscheint."

Dieses letzte Beispiel, mit dem Problem umzugehen, ist wohl besser.
Nicht nur ist es grammatisch korrekter, sondern entfernt auch einige der Komplexität, die mit den Geschlechtern in verschiedenen Sprachen verbunden ist, die möglicherweise sehr unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Verwenden Sie zugängliche Sprache

Vermeiden Sie die Verwendung von räumlichen und Richtungsausdrücken wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer zutrifft. Sie können auch unklar oder irreführend sein - insbesondere für Benutzer, die auf Screenreader angewiesen sind oder übersetzte Inhalte lesen, bei denen Richtungsbegriffe mehrdeutig oder schwierig genau zu übersetzen sein können. In responsiven Layouts, in denen sich die Position des Inhalts je nach Bildschirmgröße ändern kann, können solche richtungsbezogenen Hinweise ungenau werden. Diese Art der Sprache kann die Zugänglichkeit beeinträchtigen und es schwieriger machen, für alle Benutzer eine Navigation oder ein Verständnis der Inhalte zu erreichen.

Stattdessen verwenden Sie beschreibende Phrasen, die den Abschnitt, das Konzept oder das Element, auf das Bezug genommen wird, klar identifizieren. Verweisen Sie auf Abschnitte anhand ihrer Titel oder Überschriften und beziehen Sie sich auf Beispiele oder Codesnippets anhand dessen, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Beziehen Sie sich auf den Abschnitt [Zugänglichkeit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility), der später auf dieser Seite erscheint."
- **Falsch**: "Beziehen Sie sich auf den Abschnitt Zugänglichkeit unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mithilfe von CSS-Übergängen."
- **Falsch**: "Im folgenden Codebeispiel unten, animieren wir einen Kreis mithilfe von CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorherigen Abschnitt mit dem Titel Erstellen einer Medienabfrage erklärt."
- **Falsch**: "Dieses Konzept wird im obigen Abschnitt erklärt."

Vermeiden Sie außerdem vage Linktexte wie "Hier klicken" oder "Diesen Artikel lesen". Beschreibende Linktexte geben allen Lesern einen besseren Kontext und verbessern die Benutzererfahrung von unterstützenden Technologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Erfahren Sie mehr über [wie Sie Flex-Elemente anordnen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Wenn Sie diese Richtlinien befolgen, tragen Sie dazu bei, MDN-Dokumentationen zugänglich, klar und für alle Benutzer, unabhängig davon, wie sie auf die Seite zugreifen, verwendbar zu machen.

### Schreiben Sie unter Berücksichtigung von SEO

Während das Hauptziel jeglichen Schreibens bei den MDN Web Docs immer sein sollte, über offene Web-Technologie aufzuklären und zu informieren, damit Entwickler schnell lernen können, was sie tun möchten, oder die kleinen Details finden, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie in der Lage sind, das Material zu _finden_, das wir schreiben. Wir können dies erreichen, indem wir bei der Erstellung von Inhalten die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) berücksichtigen.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unsere Materialien leicht kategorisieren und indexieren können, damit die Leser leicht finden können, was sie benötigen. Die SEO-Richtlinien beinhalten, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indizieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten beim Schreiben und beim Überprüfen von Inhalten, um zu helfen sicherzustellen, dass die Seite und ihre Nachbarn richtig von Suchmaschinen indiziert werden:

- **Sicherstellen, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema sind, auch wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Wörtern und einem identischen Beispiel. Dies macht es für Suchmaschinen schwierig zu wissen, welches welche Seite ist, und sie teilen den Page-Rank, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Es ist also wichtig, sicherzustellen, dass jede Seite ihre eigenen Inhalte hat. Die folgenden Vorschläge können Ihnen dabei helfen:

  - **Erklären Sie mehr einzigartige Konzepte**: Berücksichtigen Sie Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man denken würde. Zum Beispiel, im Fall der Dokumentation von `width` und `height`-Eigenschaften, vielleicht schreiben Sie über die Möglichkeiten, wie horizontaler Raum und vertikaler Raum unterschiedlich genutzt werden und bieten eine Diskussion über die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` in Bezug auf die Bereitstellung eines Seitenbereichs erwähnen, während die `height` genutzt wird, um vertikales Scrollen oder Fußnoten zu handhaben. Das Einbeziehen von Informationen über Zugänglichkeitsprobleme ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Haupttext, weil die Beispiele oft sowohl die ähnlichen Methoden als auch Eigenschaften verwenden, um mit ähnlichen Eigenschaften zu beginnen, daher keine wirklichen Änderungen erfordern, wenn sie wiederverwendet werden. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder bieten Sie zumindest mehrere Beispiele an, von denen zumindest einige davon unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl einen Überblick darüber, was das Beispiel macht, als auch die Erläuterung dazu, wie es funktioniert, in einem angemessenen Detailmaß, das der Komplexität des Themas und dem Zielpublikum entspricht, sollte enthalten sein.

  Der einfachste Weg, um zu vermeiden, dass sie zu ähnlich sind, ist natürlich, jedes Artikel von Grund auf neu zu schreiben, wenn Zeit erlaubt ist.

- **Sicherstellen, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (als "dünne Seiten" im SEO-Jargon bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt) katalogisieren. Übermäßig kurze Inhaltseiten sind schwer zu finden. Als Orientierungshilfe sicherstellen, dass Seiten auf den MDN Web Docs nicht kürzer sind als rund 300 Wörter oder so. Künstlich eine Seite aufzuweiten ist jedoch nicht zu empfehlen, aber diese Richtlinie als Mindestziel zu behandeln, wann immer es möglich ist.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genug Inhalt haben, um richtig durchsuchbar zu sein, ohne gezwungen zu sein, sie mit unnötigem Text vollzustopfen:

  - **Stubs vermeiden**: Offensichtlich, wenn der Artikel ein Stub oder Inhalt fehlt, fügen Sie es hinzu. Wir versuchen, "Stub"-Seiten bei den MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, die große Teile ihres Inhalts vermissen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie strukturmäßig für die [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types), den sie darstellt, korrekt ist. Überprüfen Sie, ob alle Abschnitte vorhanden sind und geeignete Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Sicherstellen, dass alle Parameter aufgelistet und erklärt sind. Sicherstellen, dass alle Ausnahmen behandelt werden - dies ist ein besonders häufiger Punkt, an dem Inhalte fehlen.
  - **Alle Konzepte vollständig ausgearbeitet sicherstellen**: Es ist einfach, eine schnelle Erklärung für etwas zu geben, aber sicherstellen, dass alle Feinheiten behandelt werden. Gibt es Sonderfälle? Gibt es bekannte Einschränkungen, die der Leser wissen sollte?
  - **Beispiele hinzufügen**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, oder Attribute), die Benutzer vom Anfänger- bis zum mittleren Erfahrungsbereich wahrscheinlich verwenden werden, sowie alle fortschrittlichen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht darüber vorangestellt werden, was das Beispiel tun wird, welches zusätzliche Wissen erforderlich sein könnte, um es zu verstehen, und so weiter. Nach dem Beispiel (oder eingestreut zwischen Stücke des Beispiels) sollte ein Text sein, der erklärt, wie der Code funktioniert. Die Details nicht verknappen oder die Fehlerbehandlung in Beispielen. Immer im Hinterkopf behalten, dass Benutzer _Ihr_ Beispiel kopieren und in ihre eigenen Projekte einfügen _werden_ und Ihr Code _wird_ auf Produktionsseiten eingesetzt! Siehe unsere [Leitlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Anwendungsfälle erklären**: Wenn es besonders häufige Anwendungsfälle für die beschriebene Funktion gibt, sprechen Sie darüber! Statt dass ein Benutzer herausfinden muss, dass die dokumentierte Methode zur Lösung eines häufigen Entwicklungsproblems verwendet werden kann, tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text, der erklärt, wie das Beispiel funktioniert, hinzufügen.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie auf allen Bildern und Diagrammen korrekten [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text ein. Dieser Text sowie Beschriftungen auf Tabellen und anderen Figuren zählen, weil Suchmaschinen-Spider Bilder nicht durchsuchen können und daher der `alt`-Text den Suchmaschinen-Crawlern mitteilt, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder nicht verwandte Schlüsselwörter in einem Versuch zu verwenden, Suchmaschinen-Rankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und tendiert dazu, bestraft zu werden.
    > Ebenso sollten **keine** sich wiederholenden, unnützen Materialien oder keywordgefüllten Blöcke innerhalb der tatsächlichen Seite hinzugefügt werden, um die Größe und Such-Rankings der Seite zu verbessern. Dies schadet mehr als es nützt, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Fokus auf Themeninhalte**: Es ist weitaus besser, Inhalte rund um das Thema der Seite zu schreiben statt ein spezifisches Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einbeziehen könnten; in der Tat, viele SEO-Spezialisten erstellen eine Liste von 5-100 verschiedenen Schlüsselwörtern (variierend zwischen kurzen, mittleren und langen Schlüsselwörtern), um sie in ihren Artikel aufzunehmen, abhängig von der Länge. Dies wird Ihre Wortwahl diversifizieren, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen davon, grammatisch korrekte Sätze auf Englisch zu schreiben, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um die Inhalte auf den MDN Web Docs konsistent zu halten.

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
- [Aktiv- vs Passiv-Stimme](#aktiv-_vs_passiv-stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus dem ersten Buchstaben jedes Wortes eines Satzes besteht. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Ausschreiben**: Beim ersten Erwähnen eines Begriffs auf einer Seite, der Benutzern möglicherweise nicht vertraut ist, bitte Ausschreiben von Akronymen. Im Zweifelsfall den Begriff ausschreiben. Noch besser, verlinken Sie es auf den Artikel oder [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie für alle Abkürzungen und Akronyme ausschließlich Großbuchstaben und lassen Sie Punkte weg, einschließlich für Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (usw., z.B., d.h.) in klammernden Ausdrücken und Notizen verwenden. In diesen Abkürzungen Punkte setzen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->

  - **Richtig**: Webbrowser (z.B. Firefox) können verwendet werden …
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden …
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden …
  - **Falsch**: Webbrowser, (eg: Firefox) können verwendet werden …

  <!-- markdownlint-enable search-replace -->

  In regulärem Text (d.h. Text außerhalb von Notizen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: … Webbrowser, und so weiter.
  - **Falsch**: … Webbrowser, usw.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden …
  - **Falsch**: Webbrowser z.B., Firefox können verwendet werden …

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente der lateinischen Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abk.   | Lateinischer Begriff | Englisches Äquivalent         |
  | ------ | -------------------- | ----------------------------- |
  | cf.    | _confer_             | vergleichen                   |
  | e.g.   | _exempli gratia_     | zum Beispiel                  |
  | et al. | _et alii_            | und andere                    |
  | etc.   | _et cetera_          | und so fort, und so weiter    |
  | i.e.   | _id est_             | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_          | beachten Sie                  |
  | P.S.   | _post scriptum_      | Nachscriptum                  |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Prüfen Sie immer, ob der Einsatz einer lateinischen Abkürzung wirklich von Vorteil ist. Einige dieser Abkürzungen werden so selten verwendet, dass viele Leser ihre Bedeutungen entweder verwechseln oder nicht verstehen.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie richtig verwenden, wenn Sie sie verwenden möchten. Zum Beispiel verwechseln viele "e.g." mit "i.e.", was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für den Plural von Abkürzungen und Akronymen ein _s_ anhängen. Verwenden Sie niemals ein Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn eine Abgekürzung verwendet wird, ist "vs." gegenüber "v." bevorzugt und es kann in Überschriften verwendet werden. Anderenfalls im Text verwenden Sie die ausgeschriebene Form "versus".

  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige englische Regeln zur Großschreibung im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "Web" (alleinstehend oder als Modifikator) und "Internet" in Kleinbuchstaben zu schreiben.

> [!NOTE]
> Diese Richtlinie stellt eine Änderung gegenüber einer früheren Version dieses Leitfadens dar, daher finden Sie möglicherweise viele Fälle von "Web" und "Internet" auf MDN.
> Sie können diese ändern, während Sie andere Änderungen machen, aber das Bearbeiten eines Artikels nur um der Großschreibung willen ist nicht notwendig.

Tastaturtasten sollten mit Satzstil-Großschreibung und nicht in Großbuchstaben formatiert werden.
Zum Beispiel "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie Markennamen, die Großbuchstaben enthalten oder Wörter, die sich aus dem Namen einer Person ableiten (es sei denn, das Wort wird innerhalb von Code verwendet und die Code-Syntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein eingetragenes Warenzeichen von Oracle Corporation, sollte immer als solches geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, informell zu sein, daher sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z.B. "don't", "can't", "shouldn't"), wenn Sie es bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im Fließtext Kommas nur bei fünfstelligen und größeren Zahlen verwenden.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht inklusive Daten in Code-Beispielen), verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plural von numerischen Angaben**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englischsprachige Plurale, nicht die lateinisch- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir eine Auswahl für Konsistenz benötigen. Falls geschwungene Anführungszeichen oder Apostrophe in Code-Snippets, auch in Inline-Snippets, auftauchen, könnten Benutzer diese kopieren und einfügen, erwarten, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine &bdquo;&bdquo;geschwungenen Anführungszeichen.&ldquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommasetzungsregeln bewusst sein müssen:

- **Nach einleitenden Satzteilen**: Ein einleitender Satzteil ist ein abhängiger Satz, der üblicherweise am Anfang eines Satzes zu finden ist. Nach einem einleitenden Satzteil soll ein Komma verwendet werden, um ihn vom folgenden Hauptsatz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel lernen Sie wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, verweisen Sie auf unseren Stil-Leitfaden."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen verweisen Sie auf unseren Stil-Leitfaden."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie in der Regel ein Ziffernblock zur Dateneingabe."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel ein Ziffernblock zur Dateneingabe."

- **Vor Konjunktionen**: Das Serielle Komma (auch bekannt als "Oxford-Komma") ist das Komma, das in einer Reihe von drei oder mehr Elementen vor der Konjunktion erscheint. Auf MDN Web Docs verwenden wir das serielle Komma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit dem Zug, dem Flugzeug und dem Auto reisen."
  - **Falsch**: "Ich werde mit dem Zug, dem Flugzeug und dem Auto reisen"

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "Mein Hund ist süß und schlau."
  - **Falsch**: "Mein Hund ist süß, und schlau."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex wird, ziehen Sie in Betracht, ihn als zwei Sätze umzuformulieren.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellungen achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellungen achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Ein restriktiver Satz ist für die Bedeutung des Satzes wesentlich und benötigt keine Kommas, um sich vom restlichen Satz abzusetzen. Ein restriktiver Satz wird normalerweise durch "dass" eingeführt und **sollte nicht** durch ein Komma eingeleitet werden.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie zur Erreichung Ihres Ziels benötigen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie zur Erreichung Ihres Ziels benötigen."

  Ein nicht restriktiver Satz bietet zusätzliche Informationen und ist für die Bedeutung des Satzes nicht wesentlich. Ein nicht restriktiver Satz wird normalerweise durch "welches" eingeführt und sollte durch ein Komma eingeführt werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, welche eine erlaubte Liste von Ursprüngen für jedes Feature darstellt."
  - **Falsch**: "Sie schreiben eine Richtlinie, welche eine erlaubte Liste von Ursprüngen für jedes Feature darstellt."

- **Vor "solchen wie"**: Wenn "solchen wie" Teil eines nicht restriktiven Satzes ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "solchen wie".

  - **Richtig**: "Das Array-Objekt verfügt über Methoden zur Manipulation von Arrays auf verschiedene Weise, wie z.B. durch Verbinden, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt verfügt über Methoden zur Manipulation von Arrays auf verschiedene Weise wie z.B. durch Verbinden, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "solchen wie" verwendet werden sollte. In diesem Fall ist der Satz, der "solchen wie" enthält, wesentlich für die Bedeutung des Satzes.

  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videobearbeitung hinzufügen und den Zugriff auf Rohdaten über Websockets ermöglichen."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen, wie Audio- und Videobearbeitung, hinzufügen und den Zugriff auf Rohdaten über Websockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe des Stammes.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Englisch-Rechtschreibung.

Verwenden Sie im Allgemeinen den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als variantische Schreibweise oder als hauptsächlich in einem nicht-amerikanischen Englisch verwendet aufgeführt.
Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_, das zur amerikanischen Standardform hinzugefügt wurde) nachschlagen, finden Sie den Satz "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Varianten-Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und erstellt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich in [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden, welche erlaubte Wörter enthalten, die nicht in den Standardwörterbüchern sind. Sie können mehr Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstelle von "Tag". Zusätzlich sollte das Element in Winkelklammern "<>" eingeschlossen und mit Backticks (\`) formatiert werden. Zum Beispiel wird die Verwendung von \<input\> innerhalb von Backticks es als `<input>` formatieren, wie es erwartet wird.

  - **Richtig**: das `<span>` Element
  - **Falsch**: das span tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement` Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatiert, die Winkelklammern "<>" hinzufügt sowie einen Link zu seiner Referenzseite hinzufügt.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quellcode im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **parameters**. Bitte vermeiden Sie den Begriff "arguments" für Konsistenz, wann immer es möglich ist.

- **Benutzeroberflächenaktionen**: In Aufgabenreihen beschreiben Sie Aktionen der Benutzeroberfläche im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und Typs.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Aktiv- vs Passiv-Stimme

Während die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts des informellen Charakters unserer Inhalte.
Versuchen Sie konsistent zu bleiben, jedoch.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite gelten, wie Überschriften, Hinweise, Links und Beispiele.

- [Code-Beispiele](#code-beispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (kurze Links)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt "Siehe auch"](#abschnitt_"siehe_auch")
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Code-Beispiele

Eine Seite auf MDN Web Docs kann mehr als ein Code-Beispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Code-Beispiels für MDN Web Docs:

- Jedes Beispielcode-Stück sollte beinhalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das Szenario, das durch das Code-Beispiel demonstriert wird, zu beschreiben. Zum Beispiel, "Offset-Druck verwenden" und "Zurückkehrend zum Stil in der vorherigen Schicht".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Besonderheiten des Beispielcodes darlegt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel, "Im folgenden Beispiel werden zwei Kaskadenschichten im CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und erklärt, wie der Code funktioniert.
- Im Allgemeinen sollte das Code-Beispiel nicht nur die Syntax des Features und seine Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature möglicherweise verwenden möchte oder benötigt.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu unterteilen, damit sie individuell beschrieben werden können.
- Wenn Sie [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass alle Codesnippets des gleichen Typs (HTML, CSS und JavaScript) zusammengeführt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu zerlegen, von denen jedes optional seine eigenen Beschreibungen, Überschriften und so weiter haben kann. Dadurch wird die Dokumentation von Code extrem mächtig und flexibel.

Um zu lernen, wie Sie Code-Beispiele für MDN Web Docs stilisieren oder formatieren, sehen Sie unsere [Richtlinien für das Stylen von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Wenn Sie sich auf eine andere Seite oder den Abschnitt einer Seite auf MDN durch ihren Titel beziehen, folgen Sie der Satzkapselung im Linktext (entspricht dem Titel der Seite oder des Abschnitts). Verwenden Sie die Satzkapselung im Linktext, auch wenn sie von dem im Titel der verlinkten Seite oder Abschnitt abweicht (es könnte sein, dass die verwendete Kapselung im Titel der Seite oder des Abschnitts falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN durch ihren Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Lesen Sie im [Leitfaden zur Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) nach."
- **Falsch**: "Lesen Sie im "[Leitfaden zur Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" nach."

Verwenden Sie einen konsistenten Stil, wenn Sie auf Abschnitte innerhalb einer Seite verlinken:

- **Richtig**: "Für weitere Informationen lesen Sie den Abschnitt [Zuweisung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) im \_Speicherverwaltungs_leitfaden."

Wenn sich der Abschnitt, auf den Sie verlinken, auf derselben Seite befindet, können Sie die Lage des Abschnitts durch beschreibende Phrasen andeuten.

- **Richtig**: "Dieses Konzept wird im Abschnitt [Zugänglichkeit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) dieses Dokuments ausführlicher beschrieben."
- **Falsch**: "Dieses Konzept wird im Abschnitt [Zugänglichkeit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) unten ausführlicher beschrieben."

Auf MDN gibt es eine weitere Möglichkeit, auf eine Referenzseite durch die Verwendung eines Makros zu verlinken. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Um zum Beispiel auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Macro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Macro.

Wir folgen ähnlichen Querverweis-Richtlinien in den [Siehe auch](#siehe_auch)-Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die beschriebenen Richtlinien in diesem Abschnitt, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Pull-Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diesen Richtlinien nicht entsprechen.

Wenn Sie erwägen, einen externen Link zu den themenbezogenen Inhalten von MDN's [Learn web development](/de/docs/Learn_web_development) hinzuzufügen, lesen Sie bitte auch [Learn web development writing guidelines > Partner links and embeds](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie darüber nachdenken, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass minimales Risiko für die folgenden Punkte besteht:

- Gebrochene oder veraltete Links
- Der Anschein von Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs für die Verbreitung von Spam zu nutzen
- Kurze Links, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, erwägen Sie, den Inhalt innerhalb von MDN Web Docs zu referenzieren. Interne Links sind leichter zu pflegen und machen die Gesamtheit der MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und weithin vertraut sind. Sie sollten es vorziehen, Links zu externen Inhalten hinzuzufügen, die:

  - Einzigartig oder unentbehrlich sind (z.B. ein IETF-RFC)
  - Notwendig für Attribution, Zitat oder Anerkennung sind (z.B. als Teil einer Creative-Commons-Attribution)
  - Wahrscheinlicher auf dem neuesten Stand gehalten werden als dass dieselben Inhalte in die MDN Web Docs aufgenommen werden (z.B. die Versionshinweise eines Anbieters)
  - Open-Source oder gemeinschaftsgetrieben sind, wie die MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links sind mangelhaft an Relevanz, Wartungsfähigkeit und Zugänglichkeit oder stellen auf andere Weise Barrieren für die Leserschaft dar. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters, anstatt der zugehörigen Dokumentation)
  - Flüchtig oder ungewartet sind (z.B. eine einmalige Ankündigung)
  - Eigenwerbung oder selbstbezogen sind (z.B. die eigene Arbeit des Autors außerhalb der MDN Web Docs)
  - Bezahlschranken unterliegen (z.B. ein teurer Kurs, der außerhalb der Reichweite von Interessierten, Studenten oder Lesern in einkommensärmeren Ländern liegt)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstpromotional oder spammy sind**: Während ein persönlicher Blog-Beitrag, ein Konferenzvortrag oder ein GitHub-Repository Wert hat, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenskonflikts erwecken. Überlegen Sie zweimal, bevor Sie auf Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull-Request offenlegen. Das Versäumnis, dies zu tun, kann Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie der Herausgeber einer Spezifikation sind und zur Dokumentation beitragen, die sich auf diese Spezifikation bezieht, dann ist das Verlinken dieser Spezifikation zu erwarten und akzeptabel. Aber Sie müssen Ihre Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (kurze Links)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, erinnerungsfreundlichere URLs (auch als kurze Links bekannt) zu verwandeln. Allerdings verschleiern sie auch das Ziel der URL. Zusätzlich kann das Ziel bestimmter Shortener nach ihrer Erstellung geändert werden, eine Funktion, die für bösartige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die durch Drittanbieter (benutzererstellbare) URL-Shortener erstellt wurden. Wenn beispielsweise `https://myshort.link/foobar` eine verkürzte URL ist, die von einem zufälligen Benutzer generiert wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com` URL.

<!-- markdownlint-disable search-replace -->

Andererseits sind First-Party-Shortener, die von Organisationen gewartet werden, die auch die Ziel-URLs warten, zu bevorzugen. `https://bugzil.la` wird von Mozilla betrieben und ist ein URL-Shortener, der zu `https://bugzilla.mozilla.org/` weiterleitet, was ebenfalls eine von Mozilla betrieben Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese werden in die [HTML-Überschriften-Tags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags übersetzt.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist.
Wir empfehlen nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Ebene hinzuzufügen, sollten Sie in Betracht ziehen, den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite zu unterteilen. Alternativ erwägen Sie, die Informationen als Aufzählungspunkte zu präsentieren, um die Verwendung einer vierten Kopfzeile zu vermeiden.

Behalten Sie die folgenden Do's und Don'ts im Kopf, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einziges Unterthema.
  Es sind entweder zwei oder mehr Unterüberschriften oder keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros in Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z.B. "Verwendung der `FooBar`-Schnittstelle").
- **Erstellen Sie keine "stoßenden Überschriften".** Dies sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne erläuternden Text dazwischen.
  Dies sieht nicht gut aus und lässt die Leser ohne erläuternden Text am Anfang des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Media-Lizenz Ihnen die Verwendung erlaubt. Versuchen Sie, Medien zu nutzen, die eine sehr großzügige Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine Lizenz, die mit unserer allgemeinen Inhaltslizenz kompatibel ist — [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Führen Sie Bilder über <https://tinypng.com> oder <https://imageoptim.com> um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt` Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) enthalten.

### Listen

Listen sollten konsistent über alle Seiten formatiert und strukturiert werden.
Einzelne Listeneinträge sollten mit geeigneter Zeichensetzung geschrieben

werden, unabhängig vom Listenformat.
Je nach Art der Liste, die Sie erstellen, sollten Sie jedoch Ihr Schreiben anpassen, wie in den folgenden Abschnitten beschrieben wird. In beiden Fällen fügen Sie einen Einleitungssatz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Informationsstücke zu gruppieren. Jeder Punkt in der Liste sollte eine ähnliche Satzstruktur haben. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten nach Standardzeichen gesetzt werden — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es in einem Listeneintrag mehrere Sätze gibt, muss nach jedem Satz, einschließlich des letzten Satzes des Eintrags, ein Punkt stehen, ebenso wie es in einem Absatz erwartet würde. Dies ist ein Beispiel für eine korrekt formatierte Aufzählungsliste:

  > In diesem Beispiel sollten wir einbeziehen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit etwas weiterer Erklärung.

  Beachten Sie, wie sich die gleiche Satzstruktur von Aufzählungspunkt zu Aufzählungspunkt wiederholt. In diesem Beispiel nennt jeder Aufzählungspunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jeder Listeneintrag endet mit einem Punkt.

  Wenn die Listeneinträge unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - EigenschaftA: Setzt die Hintergrundfarbe
  > - EigenschaftB: Fügt dem Text Schatten hinzu

  Wenn ein oder mehrere Listeneinträge vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listeneintrag, selbst wenn ein Listeneintrag drei oder weniger Wörter enthält. Jedoch, soweit möglich, folgen Sie derselben Struktur für alle Einträge in einer Liste; stellen Sie sicher, dass alle Listeneinträge entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden primär verwendet, um Schritte in einer Anleitung zu enumerieren. Da Anleitungen komplex sein können, ist Klarheit eine Priorität, insbesondere wenn der Text in jedem Listeneintrag lang ist. Wie bei Aufzählungslisten, folgen Sie der Standardp

> Unktuation. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

> Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
>
> 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer Kontext zu bieten, bevor die Anweisungen beginnen.
> 2. Beginnen Sie mit der Erstellung Ihrer Anleitungen und halten Sie jeden Schritt in einem eigenen nummerierten Eintrag.
>    Ihre Anleitungen könnten recht umfangreich sein, daher ist es wichtig, klar zu schreiben und die richtige Zeichensetzung zu verwenden.
> 3. Nachdem Sie Ihre Anleitungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

Das Folgende ist ein Beispiel dafür, wie eine abschließende Erklärung für die oben genannte Liste geschrieben wird:

> Wir haben eine kurze nummerierte Liste erstellt, die instruierende Schritte bietet, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

Beachten Sie, wie die Einträge in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anleitung verwendet werden oder um jemanden durch eine geordnete Prozedur zu führen, stellen Sie sicher, dass jeder Eintrag fokussiert bleibt: ein nummerierter Eintrag pro Schritt.

### Abschnitt "Siehe auch"

Die meisten Leitfäden, Referenzseiten und gelegentlich Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Dies ist zum Beispiel der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer`-Seite.

Präsentieren Sie die Links in einem Siehe auch Abschnitt generell im [Aufzählungslisten](#listen)-Format mit jedem Punkt auf der Liste als Phrase. Im [Learn web development](/de/docs/Learn_web_development) Bereich auf MDN folgt der Siehe auch Abschnitt dem [Definitionslisten](#definition_lists)-Format.

Um Konsistenz über die MDN Web Docs hinweg sicherzustellen, behalten Sie die folgenden Richtlinien im Kopf, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Link-Text

- Der Linktext sollte derselbe wie der Titel der Seite oder des Abschnitts sein, auf die oder den verlinkt wird. Zum Beispiel, der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA-Zustände und -Eigenschaften" wird sein:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satz Groß- und Kleinschreibung im Linktext, selbst wenn es sich von dem Titel der Seite oder des Abschnitts unterscheidet. Es könnte sein, dass die im Titel der Seite oder des Abschnitts verwendete Kaspelung falsch ist. Zum Beispiel, beim Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satz-Groß-und Kleinschreibung wird sein:
  - **Richtig**: [Quirks Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch für externe Links verwenden Sie Satz Groß- und Kleinschreibung, selbst wenn die Groß- und Kleinschreibung auf der Zielseite anders ist. Dadurch wird die Konsistenz über die MDN Web Docs hinweg sichergestellt. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie in der Rubrik [Verlinken zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der Seite _Häufig verwendete Makros_ erläutert wird. Die Verwendung eines Makros fügt dem Stichwort im Linktext eine Code-Formatierung hinzu, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("Ein", "Eine", "Das") ist am Anfang des Listenelements erforderlich. Am Ende des Listenelements ist keine Zeichensetzung erforderlich, da es sich immer um einen Begriff oder eine Phrase handelt.
  - **Korrekt**: [`Rückgängig-Schicht`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Die [`Rückgängig-Schicht`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Korrekt**: [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Das [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie den Stichwörtern und Literalen im Linktext Codeformatierung mithilfe von Backticks (\`) hinzu, obwohl die Formatierung nicht in den Titeln von Seiten und Abschnitten verwendet wird. Zum Beispiel, für den Seitentitel "Array() Konstruktor", wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den umgebenden beschreibenden Text im Rahmen. Im Falle einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Zeichensetzung. Behalten Sie den gesamten verlinkten Text am Anfang, um das Scannen der Liste der Links zu erleichtern.
  - **Korrekt**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zur Gestaltung von Kontrollkästchen
- Verwenden Sie das Bindewort "und" nicht vor dem letzten Element der Serie.
  - **Korrekt**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Bei externen Links zielen Sie darauf ab, die Quell-Website und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) wann immer es möglich und angemessen ist, anzugeben. Diese Informationen gleich zu Beginn geben den Lesern eine klare Vorstellung von dem Ziel, das sie erreichen, wenn sie auf den Link klicken. Das Datum der Veröffentlichung oder der letzten Aktualisierung hilft den Lesern, die Relevanz des verlinkten Artikels einzuschätzen und hilft auch den MDN-Pflegen beim Überprüfen von Links zu Artikeln, die lange nicht aktualisiert wurden. Wenn Sie zum Beispiel einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit den Quell- und Jahresangaben:
  - **Korrekt**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch die Namen der Autoren hinzufügen. Einige Beispiele sind im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) aufgeführt. Verzichten sie darauf, Autoren Namen für Blog-Posts oder GitHub Repositories, die Sie verlinken, hinzuzufügen.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu den verwandten Leitfaden- und Tutorialseiten. Diese vorgeschlagene Reihenfolge soll hauptsächlich die Scannbarkeit der Einträge in der Liste fördern.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen oder einfachen-zu-komplexen Ordnung, was auch immer für den Kontext sinnvoller ist.

### Unterseiten

Wenn Sie einige Artikel über ein Thema oder ein Fachgebiet hinzufügen müssen, tun Sie dies typischerweise, indem Sie eine Einstiegsseite erstellen, dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Einstiegsseite sollte mit einem Absatz oder zwei zählen, um das Thema oder die Technologie zu beschreiben, dann eine Liste der Unterseiten mit Beschreibungen von jeder Seite bereitstellen.
Sie können das Einfügen von Seiten in die Liste mit einigen von uns erstellten Makros automatisieren.

Zum Beispiel betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Leitfaden](/de/docs/Web/JavaScript/Guide) – Hauptseite des Inhaltsverzeichnisses
- [JavaScript/Leitfaden/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Leitfaden/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Leitfaden/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an der Spitze der Hierarchie zu platzieren, was die Website verlangsamt und die Suche und die Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem Seiten- "Slug" unterscheiden, der der Teil der URL der Seite nach `<locale>/docs/` ist. Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte die neue Ebenen-Komponente im Slug nur ein oder zwei Wörter umfassen.
- Slugs sollten einen Unterstrich für eine mehrwortige Komponente verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie dem Satzfall auch in Slugs für jede Komponente, wie in dem vorherigen Beispiel von `Basic_HTML_syntax`.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und auch dazu verwendet, die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite zu strukturieren. Ein Seitentitel kann sich vom Seiten-"Slug" unterscheiden, wie im Abschnitt [Slugs](#slugs) erläutert wird.

Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie Titel schreiben:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften Satzfall-Groß- und Kleinschreibung (nur das erste Wort und Eigennamen großschreiben) anstatt Schlagzeilenstil-Groß- und Kleinschreibung verwenden:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript Rollovers"
  - **Falsch**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilregelung geschrieben wurden. Fühlen Sie sich frei, sie nach Bedarf zu aktualisieren, wenn Sie möchten. Wir kommen allmählich dazu.

- **Allgemeine Richtlinien**: Das Entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis zu erstellen, kann Ihnen helfen, zu entscheiden, wie Sie Informationen anordnen möchten. Decken Sie zuerst einfache Konzepte ab und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Decken Sie Konzeptinformationen zuerst ab und gehen Sie dann zu handlungsorientierten Themen über.

  Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie Titel für eine Seite und Abschnitten oder Unterabschnitten schreiben:

  - **Höhere-Niedrigere**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) angegeben, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebene Überschriften für breitere Einleitungstitel und verwenden Sie spezifische Titel, während Sie zu niedrigeren Überschriftsebenen fortschreiten.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebene Überschrift gruppiert sind. Das Benennen von Titeln verschiedener Abschnitte kann Ihnen in dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter in Text und im Inhaltsverzeichnis lesbar.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel "HTML-Elemente" anstelle von "Einführung" oder "Überblick".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln - eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Verwenden Sie zu diesem Zweck, soweit möglich, versuchen Sie, nicht die Konjunktion "und" in einem Titel zu verwenden.
  - **Verwenden Sie parallele Konstruktionen**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftsebene. Zum Beispiel, wenn ein `###`-Überschriftsebene-Titel Gerundien verwendet, d.h. Wörter, die auf "-ing" enden, wie z.B. "Installieren", dann versuchen Sie, alle Titel auf dieser Überschriftsebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben alle Titel auf dieser Überschriftsebene beginnend mit einem Imperativverb.
  - **Vermeiden Sie die allgemeine Begriffe der tieferen Überschriftenebene zu verwenden**: Wiederholen Sie keine Texte im Titel einer höheren Überschriftsebene in tieferen Überschriftenebenen. Zum Beispiel, in einem Abschnitt, der mit "Kommas" betitelt ist, benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Satzteilen" anstelle von "Kommas nach einleitenden Satzteilen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie das Beginnen von Titeln mit Artikeln "ein", "eine", oder "das".
  - **Fügen Sie Einleitungstext hinzu**: Fügen Sie nach einem Titel ein

Einleitungstext hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Lektüre

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu Rate zu ziehen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie Ihre Schreib- und Bearbeitungsfähigkeiten verbessern möchten, finden Sie die folgenden Ressourcen möglicherweise hilfreich.

- [Häufige Fehler im englischen Gebrauch](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Grammatik FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Gebrauch](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite für den Gebrauch der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich fundierte, aber benutzerfreundliche, evidenzbasierte Beratung; sehr gut für Nicht-Muttersprachler, besonders für die Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
