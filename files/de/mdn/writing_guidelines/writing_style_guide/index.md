---
title: Leitfaden zum Schreibstil
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

Dieser Leitfaden zum Schreibstil beschreibt, wie Inhalte für die MDN Web Docs verfasst, organisiert, buchstabiert und formatiert werden sollen.

Diese Richtlinien sollen sicherstellen, dass die Sprache und der Stil auf der gesamten Website einheitlich sind. Wir legen jedoch mehr Wert auf den Inhalt als auf dessen Formatierung, daher fühlen Sie sich nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie Beiträge leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um sie an diesen Leitfaden anzupassen. Die Prüfer könnten Sie auch auf diesen Leitfaden hinweisen, wenn Sie eine Inhalts-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für Dokumentationen in englischer Sprache. Andere Sprachen können eigene Stilrichtlinien haben (und sind dazu eingeladen, diese zu erstellen). Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Dieser Leitfaden sollte jedoch weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach dem Auflisten der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden sollen, wie z.B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Ks des Schreibens](#berücksichtigen_sie_die_drei_ks_des_schreibens)
- [Einschließen relevanter Beispiele](#einschließen_relevanter_beispiele)
- [Einleitung beschreiben](#einleitung_beschreiben)
- [Verwendung inklusiver Sprache](#verwendung_inklusiver_sprache)
- [Schreiben mit SEO im Hinterkopf](#schreiben_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe im Kopf, für die Sie schreiben. Beispielsweise muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerkkonzepte eingehen wie eine typische Seite über Netzwerke. Denken Sie daran, dass dies Richtlinien sind. Einige dieser Tipps sind nicht in jedem Fall anwendbar.

### Berücksichtigen Sie die drei Ks des Schreibens

Die drei Ks des guten Schreibens sind Klarheit, Kürze und Konsistenz:

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, unter Berücksichtigung der Zielgruppe.
- **Kürze**: Beim Schreiben eines Dokuments ist es wichtig, zu wissen, wie viel gesagt werden muss. Wenn Sie zu viele Details angeben, wird die Seite mühsam zu lesen und wird selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie dieselbe Ausdrucksweise konsequent auf der Seite und auf mehreren Seiten verwenden.

### Einschließen relevanter Beispiele

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt, über den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptuelle und prozedurale Informationen auf greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird und um eventuelle Randfälle zu klären, die es geben könnte. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Probleme zu demonstrieren, die auftreten können.

### Einleitung beschreiben

Stellen Sie sicher, dass die einleitenden Absätze vor der ersten Überschrift ausreichend zusammenfassen, welche Informationen die Seite abdecken wird und was die Leser möglicherweise erreichen können, nachdem sie den Inhalt durchgegangen sind. Auf diese Weise können die Leser schnell feststellen, ob die Seite für ihre Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen sowie das erforderliche Vorwissen informieren, das der Leser haben sollte, falls vorhanden. Der einleitende Absatz sollte die dokumentierten oder besprochenen Technologien und/oder APIs erwähnen, mit Links zu den entsprechenden Informationen, und Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einleitung**: Dieses Einleitungsbeispiel ist viel zu kurz. Es lässt zu viele Informationen aus, wie z.B., was es genau bedeutet, "Text zu umrahmen", wo der Text gezeichnet wird, usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel für eine lange Einleitung**: Dieses Beispiel hat eine aktualisierte Einleitung, aber jetzt ist sie viel zu lang.
  Es werden zu viele Details bereitgestellt und der Text geht zu tief darauf ein, andere Methoden und Eigenschaften zu beschreiben.
  Stattdessen sollte sich die Einleitung auf die Methode `strokeText()` konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Wenn die Methode **`CanvasRenderingContext2D.strokeText()`** der Canvas 2D API aufgerufen wird, umrahmt sie die Zeichen in der angegebenen Zeichenkette beginnend bei den angegebenen Koordinaten mit der aktuellen Stiftfarbe.
  > Im Fachjargon der Computergrafik bedeutet "Text umrahmen", die Umrisse der Glyphe in der Zeichenkette zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet, wie im [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenkette relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenkette ab `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte der Zeichenkette liegt.
  > Wenn der Wert `"left"` ist, wird die Zeichenkette ab dem angegebenen Wert `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenkette in Pixel angeben können.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen Bereich dieser Breite zu passen, während er gezeichnet wird.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenkette mit Farbe gefüllt anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine angemessene Einleitung**: Der folgende Abschnitt bietet einen viel besseren Überblick über die Methode `strokeText()`.

  > Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrahmt (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenkette, die an der durch die angegebenen X- und Y-Koordinaten angegebenen Position verankert ist.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet und gerechtfertigt.
  >
  > Weitere Details und Beispiele finden Sie im [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text)-Abschnitt auf der Seite zum Zeichnen von Grafiken sowie in unserem Hauptartikel zu diesem Thema, [Zeichen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwendung inklusiver Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, den Text so integrativ wie möglich zu gestalten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in der Dokumentation nicht benötigen; falls der Fall eintritt, überlegen Sie, stattdessen **fantastic** zu verwenden.

Es ist am besten, eine geschlechtsneutrale Sprache in jedem Text zu verwenden, in dem das Geschlecht für das Thema irrelevant ist.
Wenn Sie zum Beispiel über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Subjekt eine Person jeglichen Geschlechts ist, sind "er"/"sein" nicht angemessen.

Betrachten wir die folgenden Beispiele:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Verwendung seiner Webcam erlauben möchte."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Nutzung ihrer Webcam erlauben möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite die Nutzung ihrer Webcam erlauben möchten."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des Personalpronomens im Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechtsneutralen Pronomen umfassen "they," "them," "their," und "theirs".

Eine weitere Möglichkeit besteht darin, die Benutzer im Plural zu formulieren:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Nutzung ihrer Webcams erlauben möchten."

Die beste Lösung besteht natürlich darin, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog zur Anforderung der Benutzerberechtigung für den Webcam-Zugriff erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel zur Lösung des Problems ist wohl besser.
Nicht nur ist es grammatikalisch korrekter, sondern beseitigt einige der Schwierigkeiten, die mit den Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise stark unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Zugängliche Sprache verwenden

Vermeiden Sie die Verwendung von räumlichen und richtungsbezogenen Wörtern wie "oben", "unten", "links", "rechts" oder "hier". Diese Begriffe gehen von einem bestimmten visuellen Layout aus, das möglicherweise nicht für alle Benutzer zutrifft. Sie können auch unklar oder irreführend sein – insbesondere für Benutzer, die auf Screenreader angewiesen sind oder übersetzten Inhalt lesen, bei dem richtungsweiser Sprachgebrauch zweideutig oder schwer genau zu übersetzen sein kann. Bei responsiven Layouts, bei denen sich die Position des Inhalts je nach Bildschirmgröße ändern kann, können solche richtungsweisenden Verweise ungenau werden. Diese Art von Sprache kann die Zugänglichkeit behindern und es allen Benutzern erschweren, den Inhalt zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Ausdrücke, die den Abschnitt, das Konzept oder das Element, auf das Bezug genommen wird, klar identifizieren. Verweisen Sie auf Abschnitte mit ihren Titeln oder Überschriften und beziehen Sie sich auf Beispiele oder Code-Snippets nach dem, was sie demonstrieren oder enthalten.

Zum Beispiel:

- **Richtig**: "Siehe den Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) später auf dieser Seite."
- **Falsch**: "Siehe den Abschnitt zur Barrierefreiheit unten."

- **Richtig**: "Im folgenden Codebeispiel animieren wir einen Kreis mit CSS-Übergängen."
- **Falsch**: "Im Codebeispiel unten animieren wir einen Kreis mit CSS-Übergängen."

- **Richtig**: "Dieses Konzept wird im vorherigen Abschnitt mit dem Titel \"Erstellen einer Medienabfrage\" erläutert."
- **Falsch**: "Dieses Konzept wird im obigen Abschnitt erläutert."

Vermeiden Sie außerdem vage Link-Texte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel". Beschreibende Link-Texte bieten besseren Kontext für alle Leser und verbessern das Erlebnis für Benutzer von Hilfstechnologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Elemente ordnet](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren."

<!-- markdownlint-enable descriptive-link-text -->

Indem Sie diese Richtlinien befolgen, helfen Sie dabei, MDN-Dokumentationen zugänglich, klar und für alle Benutzer nutzbar zu machen, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben mit SEO im Hinterkopf

Während das primäre Ziel jeder Schreibarbeit auf MDN Web Docs immer darin bestehen sollte, offene Webtechnologie zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie möchten, oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Wir können das erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Hinterkopf behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material problemlos kategorisieren und indexieren können, um sicherzustellen, dass Leser leicht finden, was sie brauchen. Die SEO-Richtlinien umfassen die Gewährleistung, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und mit Markups versehen ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist gut im Auge zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen korrekt indexiert werden:

- **Vergewissern Sie sich, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textuell ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema sprechen, selbst wenn dies nicht der Fall ist.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Worten und denselben Beispielen. Dies macht es Suchmaschinen schwer zu wissen, welche welche ist, und sie teilen sich den Page Rank, wodurch beide schwerer zu finden sind als sie sein sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite ihre eigenen Inhalte hat. Die folgenden Vorschläge können Ihnen dabei helfen:
  - **Erklären Sie mehr einzigartige Konzepte**: Überlegen Sie sich Anwendungsfälle, bei denen es mehr Unterschiede gibt, als man denkt. Zum Beispiel im Fall der Dokumentation der Eigenschaften `width` und `height`, vielleicht schreiben Sie über die Art und Weise, wie horizontaler Raum und vertikaler Raum unterschiedlich genutzt werden, und bieten eine Diskussion über die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` im Hinblick auf die Schaffung von Platz für eine Seitenleiste erwähnen, während `height` verwendet wird, um vertikales Scrollen oder Fußzeilen zu handhaben. Das Einbeziehen von Informationen zu Barrierefreiheitsproblemen ist auch eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele möglicherweise sowohl die ähnlichen Methoden als auch die ähnlichen Eigenschaften von vornherein verwenden, sodass keine wirklichen Änderungen erforderlich sind, wenn sie erneut verwendet werden. Also werfen Sie das Beispiel weg und schreiben ein neues, oder bieten zumindest mehrere Beispiele, wobei mindestens einige von ihnen unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Abdeckung darüber, wie es funktioniert, in einem angemessenen Detaillierungsgrad je nach Komplexität des Themas und der Zielgruppe, sollten enthalten sein.

  Der einfachste Weg, um zu vermeiden, zu ähnlich zu sein, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Vergewissern Sie sich, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in SEO-Jargon als "thin pages" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt) katalogisieren. Übermäßig kurze Inhaltseiten sind schwer zu finden. Als Leitlinie stellen Sie sicher, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, sondern betrachten Sie diese Richtlinie als eine Mindestzielvorgabe, wenn möglich.

  Diese grundlegenden Richtlinien können Ihnen helfen, Seiten zu erstellen, die genügend Inhalte haben, um ordnungsgemäß durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:
  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, echte "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl es sie gibt, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie ordnungsgemäß für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und über geeignete Inhalte verfügen.
  - **Stellen Sie die Vollständigkeit sicher**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden – dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Sicherstellen, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine kurze Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften oder Attribute), die Benutzer aus dem Anfänger-durch-Intermediate-Bereich wahrscheinlich verwenden, sowie alle fortgeschrittenen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht darüber eingeleitet werden, was das Beispiel tut, welches zusätzliche Wissen erforderlich sein könnte, um es zu verstehen, und so weiter. Nach dem Beispiel (oder eingestreut zwischen Teile des Beispiels) sollte Text folgen, der erklärt, wie der Code funktioniert. Verzichten Sie nicht auf Details oder den Umgang mit Fehlern in den Beispielen. Denken Sie daran, dass Benutzer _Ihren_ Beispielcode kopieren und in ihre eigenen Projekte einfügen werden, und Ihr Code wird _werden_ auf Produktsites verwendet! Siehe unsere [Richtlinien für Beispielcode](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für die beschriebene Funktion gibt, reden Sie darüber! Anstatt davon auszugehen, dass ein Benutzer selbst herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text, der erklärt, wie das Beispiel funktioniert, hinzu.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie ordnungsgemäßen [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text an allen Bildern und Diagrammen ein. Dieser Text sowie Bildunterschriften auf Tabellen und anderen Abbildungen zählen, da Spinnen nicht durch Bilder krabbeln können, und daher sagt `alt`-Text den Suchmaschinen-Spidern, welchen Inhalt das eingebettete Medium enthält.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter einzuschließen, die nicht mit der Funktion zusammenhängen, in einem Versuch, Suchmaschinen-Rankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und neigt dazu, bestraft zu werden.
    > Ebenso fügen Sie **keine** sich wiederholenden, unnützen Materialien oder Blobs von Schlüsselwörtern auf der eigentlichen Seite hinzu, in einem Versuch, die Seitengröße und den Suchrang zu verbessern. Dies schadet mehr als es nützt, sowohl für die Lesbarkeit des Inhalts als auch für unsere Suchergebnisse.

- **Fokus auf Themeninhalte**: Es ist weitaus besser, Inhalte um das Thema der Seite zu schreiben als um ein bestimmtes Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einschließen könnten; in der Tat erstellen viele SEOs eine Liste von 5 bis 100 verschiedenen Schlüsselwörtern (zwischen kurzen, mittleren und langen Schlüsselwörtern variierend), die sie in ihren Artikel aufnehmen, je nach Länge. Durch die Einbindung wird Ihre Wortwahl diverser, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen davon, dass wir grammatikalisch korrekte Sätze auf Englisch schreiben, empfehlen wir, diese Richtlinien zu befolgen, um den Inhalt auf MDN Web Docs konsistent zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralisierung](#pluralisierung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Begriffe](#begriffe)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das unter Verwendung des ersten Buchstabens jedes Wortes aus einem Satz erstellt wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der erstmaligen Nennung eines Begriffs auf einer Seite erweitern Sie Akronyme, die den Benutzern wahrscheinlich nicht vertraut sind. Wenn Sie sich nicht sicher sind, erweitern Sie den Begriff. Noch besser, verlinken Sie es mit dem Artikel oder dem [Glossareintrag](/de/docs/Glossary), der die Technologie beschreibt.
  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie durchgängig Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in klammsprachlichen Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderer geeigneter Satzzeichen.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Webbrowser (e.g., Firefox) können ...
  - **Falsch**: Webbrowser e.g. Firefox können ...
  - **Falsch**: Webbrowser, e.g. Firefox, können ...
  - **Falsch**: Webbrowser, (eg: Firefox) können ...

  <!-- markdownlint-enable search-replace -->

  Im normalen Text (i.e., Text außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.
  - **Richtig**: ... Webbrowser, und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können ...
  - **Falsch**: Webbrowser e.g., Firefox können ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente lateinischer Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abkürzung | Latein           | Englisch                |
  | --------- | ---------------- | ----------------------- |
  | cf.       | _confer_         | vergleichen             |
  | e.g.      | _exempli gratia_ | zum Beispiel            |
  | et al.    | _et alii_        | und andere              |
  | etc.      | _et cetera_      | und so weiter           |
  | i.e.      | _id est_         | das heißt, insbesondere |
  | N.B.      | _nota bene_      | beachten Sie gut        |
  | P.S.      | _post scriptum_  | Nachschrift             |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige von ihnen werden so selten verwendet, dass viele Leser ihre Bedeutungen entweder verwirren oder nicht verstehen.
  >
  > Achten Sie auch darauf, _sie_ korrekt zu verwenden, wenn Sie sich entscheiden, dies zu tun. Zum Beispiel achten Sie darauf, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Fügen Sie bei Pluralen von Abkürzungen und Akronymen _s_ hinzu. Verwenden Sie niemals einen Apostrophen. Bitte.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Verkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text verwenden Sie die ausgeschriebene Form "versus".
  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie die Standardregeln für Großschreibung auf Englisch im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (allein stehend oder als Modifikator) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, daher werden Sie viele Instanzen von "Web" und "Internet" auf MDN finden.
> Fühlen Sie sich frei, diese zu ändern, wenn Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zu ändern, um Großschreibung zu ändern.

Tastaturtasten sollten Satzstil-Kapitalisierung verwenden, nicht Ganzkapital-Kapitalisierung.
Zum Beispiel "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie z.B. Marken, die Großbuchstaben enthalten, oder Wörter, die aus dem Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Codierungssyntax erfordert Kleinbuchstaben).
Einige Beispiele umfassen:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke von Oracle Corporation, es sollte immer als Markenzeichen geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

Einige Tool-Namen und Projekte haben ihre eigenen markengeschützten Kapitalisierungsregeln. Diese erfordern möglicherweise Namen, die alle in Kleinbuchstaben ("npm" oder "webpack"), alle in Großbuchstaben ("UNIX", "GNOME", "VIM") oder gemischt groß ("TypeScript", "macOS" oder "jQuery") sind.

Verwenden Sie stets die markenrechtlich geschützte Großschreibung von der offiziellen Website oder Dokumentation, auch wenn sie am Anfang eines Satzes steht. Wenn Sie sich unwohl fühlen, dass ein Satz mit einem Kleinbuchstaben beginnt, empfehlen wir, den Satz umzuformulieren, um das Problem zu vermeiden. Beispielsweise könnten Sie sagen "Sie können den Paketmanager npm verwenden, um..." anstelle von "npm ermöglicht Ihnen...".

### Kontraktionen

Unser Schreibstil neigt dazu, lässig zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie dies bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im Fließtext verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.
  - **Richtig**: 4000; 54.000
  - **Falsch**: 4.000; 54000

- **Daten**: Bei Daten (nicht einschließlich Daten in Codebeispielen) verwenden Sie das Format "1. Januar 1900".
  - **Richtig**: 24. Februar 1906
  - **Falsch**: 24. Februar, 1906; 24/02/1906

  Alternativ können Sie das YY/MM/DD-Format verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990er". Verwenden Sie keinen Apostroph.
  - **Richtig**: 1920er
  - **Falsch**: 1920's

- **Plural von Ziffern**: Fügen Sie ein "s" hinzu. Verwenden Sie keinen Apostroph.
  - **Richtig**: 486er
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englische Stil-Plurale, nicht die latein- oder griechisch beeinflussten Formen.

- **Richtig**: Lehrpläne, Kraken
- **Falsch**: Lehrpläne, Oktopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir eine der beiden Optionen für Konsistenz wählen müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Code-Snippets gelangen, selbst in Inline-Snippets, kopieren und fügen Leser sie möglicherweise ein, erwarten dass sie funktionieren (was sie nicht werden).

- **Richtig**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine &ldquo;geschwungenen Anführungszeichen&rdquo;.

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir die Kommaregeln beachten müssen:

- **Nach einleitenden Nebensätzen**: Ein einleitender Satz ist ein abhängiger Satz, der normalerweise am Anfang eines Satzes zu finden ist. Verwenden Sie ein Komma nach einem einleitenden Satz, um es vom folgenden Hauptsatz zu trennen.
  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
    - **Falsch**: "In diesem Beispiel lernen Sie, wie Sie ein Komma verwenden."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Leitfaden zum Schreibstil."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, beziehen Sie sich auf unseren Leitfaden zum Schreibstil."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen neigen Sie dazu, ein numerisches Tastenfeld zum Eingeben von Daten zu erhalten."
    - **Falsch**: "Auf mobilen Plattformen neigen Sie dazu, ein numerisches Tastenfeld zum Eingeben von Daten zu erhalten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.
  - **Richtig**: "Ich werde in Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde in Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste mit zwei Elementen.
  - **Richtig**: "Mein Hund ist süß und schlau."
  - **Falsch**: "Mein Hund ist süß, und schlau."

  Verwenden Sie Kommas vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch sehr lang oder komplex mit der Konjunktion wird, erwägen Sie, ihn als zwei Sätze umzuschreiben.
  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "that" und "which"**: Ein restriktiver Satz ist wesentlich für die Bedeutung des Satzes und muss nicht durch Kommas vom übrigen Satz abgetrennt werden. Ein restriktiver Satz wird normalerweise durch "that" eingeführt und **sollte nicht** durch ein Komma vorangestellt werden.
  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Ein nicht-restriktiver Satz bietet zusätzliche Informationen und ist für die Bedeutung des Satzes nicht wesentlich. Ein nicht-restriktiver Satz wird normalerweise durch "which" eingeführt und sollte von einem Komma vorangestellt werden.
  - **Richtig**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jedes Feature ist."
  - **Falsch**: "Sie schreiben eine Richtlinie die eine erlaubte Liste von Ursprüngen für jedes Feature ist."

- **Vor "such as"**: Wenn "such as" Teil eines nicht-restriktiven Satzes ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "such as".
  - **Richtig**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weisen, wie z. B. das Verknüpfen, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt verfügt über Methoden zum Manipulieren von Arrays auf verschiedene Weisen wie z. B. das Verknüpfen, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "such as" verwendet wird. In diesem Fall ist der Satz, der "such as" enthält, wesentlich für die Bedeutung des Satzes.
  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen wie Audio- und Videomanipulation hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem sie Funktionen, wie Audio- und Videomanipulation, hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit einem Bindestrich verbunden werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe ist wie der erste Buchstabe des Wortstamms.

- **Richtig**: Wiederwahl, Genossenschaft, E-Mail
- **Falsch**: Wiederwahl, Coop, E-Mail

### Rechtschreibung

Verwenden Sie amerikanisch-englische Rechtschreibung.

Verwenden Sie im Allgemeinen den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als Variante gekennzeichnet oder wird hauptsächlich in einer nicht-amerikanischen Form von Englisch verwendet.
Beispielsweise finden Sie beim [Nachschlagen von "behavior"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform hinzugefügt) den Ausdruck "Hauptsächlich British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine variationsgemäße Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: lokalisieren, Verhalten, Farbe
- **Falsch**: lokalisieren, Verhalten, Farbe

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird jede Woche ausgeführt und erstellt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
npm run lint:typos
```

Im Repository speichern wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und genehmigte Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber von der Rechtschreibprüfung als Fehler gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält, und mehr über unsere Rechtschreibprüfkonfiguration zu erfahren.

### Begriffe

Dies sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um sich auf HTML- und XML-Elemente zu beziehen, anstelle von "Tag". Außerdem sollte das Element in spitzen Klammern "<>" eingeschlossen und unter Verwendung von Backticks (`` ` ``) formatiert werden. Wenn z.B. \<input\> innerhalb von Backticks verwendet wird, wird es so formatiert, wie es erwartet wird, nämlich als `<input>`.
  - **Richtig**: das `<span>`-Element
  - **Falsch**: das `<span>`-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) angeben, das das Element formatiert, die Klammern "<>" hinzufügt sowie einen Link zu den Referenzseiten des Elements bereitstellt.
  - **Verwenden von Backticks**: `<span>`
  - **Verwenden des Makros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Vermeiden Sie den Begriff "Argumente" so oft wie möglich Konsistenz.

- **Benutzeroberflächenaktionen**: In Aufgabenreihen beschreiben Benutzeroberflächenaktionen im Befehlsmodus. Geben Sie das Benutzeroberflächenelement nach dessen Beschriftung und Typ an.
  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist auch die passive Stimme aufgrund des informellen Charakters unseres Inhalts akzeptabel. Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die zu befolgenden Richtlinien für verschiedene Teile jeder Seite auf, wie Überschriften, Notizen, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkungen)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzten URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Beispielcode-Stück sollte beinhalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das Szenario beschreibt, welches durch das Codebeispiel demonstriert wird. Beispielsweise "Verwendung von Offsetdruck" und "Rückkehr zum Stil der vorherigen Ebene".
  - **Beschreibung**: Eine kurze Beschreibung, die dem Beispielcode vorausgeht und die Besonderheiten des Beispiels beschreibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Beispielsweise "Im folgenden Beispiel werden zwei Kaskadenschichten im CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax der Funktion und deren Verwendung demonstrieren, sondern auch das Ziel und die Situationen hervorheben, in denen ein Webentwickler die Funktion verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, es in kleinere, logische Teile aufzubrechen, damit sie individuell beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples), ist es hilfreich zu wissen, dass alle Codeblöcke des Beispiels, die denselben Typ (HTML, CSS und JavaScript) haben, zusammengeführt werden, bevor das Beispiel ausgeführt wird. Dadurch können Sie den Code in mehrere Segmente unterteilen, wobei jedes optional seine eigenen Beschreibungen, Überschriften usw. haben kann. Dies macht die Dokumentation von Code unglaublich leistungsfähig und flexibel.

Um zu erfahren, wie man Codebeispiele für MDN Web Docs formatiert oder stilisiert, sehen Sie sich unsere [Richtlinien zum Stil von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide) an.

### Querverweise (Verlinkungen)

Beim Verweisen auf eine andere Seite oder den Abschnitt einer Seite auf MDN in seinem Titel, verwenden Sie die Satzfall-Schreibung im Linktext (denen als Seitentitel oder Abschnittstitel entsprechen). Verwenden Sie die Satzfall-Schreibweise im Linktext, auch wenn sie von dem verlinkten Seitentitel oder Abschnittstitel abweicht (es könnte sein, dass der Fall im Seitentitel oder Abschnittstitel falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN in ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den [Ordnen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items) Leitfaden."
- **Falsch**: "Siehe den "[Ordnen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)" Leitfaden."

Halten Sie sich an einen konsistenten Stil beim Verlinken auf Abschnitte innerhalb einer Seite:

- **Richtig**: "Für weitere Informationen, sehen Sie sich den [Zuweisung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Abschnitt im _Speicherverwaltung_ Leitfaden an."

Wenn der Abschnitt, den Sie verlinken, sich auf derselben Seite befindet, können Sie auf die Position des Abschnitts mit beschreibenden Phrasen hinweisen.

- **Richtig**: "Dieses Konzept wird genauer in dem [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt dieses Dokuments beschrieben."
- **Falsch**: "Dieses Konzept wird genauer in dem [Zugänglichkeit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) Abschnitt unten beschrieben."

Auf MDN gibt es eine weitere Möglichkeit, um auf eine Referenzseite zu verlinken, indem Sie ein Makro benutzen. Diese Makros sind auf der [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) Seite beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement` Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef` Makro.

Wir folgen ähnlichen Querverweis-Richtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind in bestimmten Situationen auf MDN Web Docs erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Pull Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diese Richtlinien nicht befolgen.

Wenn Sie das Hinzufügen eines externen Links zu MDNs [Lernwebentwicklung](/de/docs/Learn_web_development) in Betracht ziehen, lesen Sie bitte auch [Richtlinien zum Schreiben von Inhalten Lernen > Partnerlinks und Embeds](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie darüber nachdenken, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass das folgende Risiko minimal ist:

- Fehlerhafte oder veraltete Links
- Erscheinung von Unterstützung, besonders für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zu nutzen, um Spam zu verteilen
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, ziehen Sie in Betracht, den Inhalt innerhalb von MDN Web Docs zu verweisen. Interne Links sind einfacher zu warten und machen den gesamten MDN Web Docs wertvoller für Leser.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten es vorziehen, Links zu externen Inhalten hinzuzufügen, die:
  - Einzigartig oder unentbehrlich sind (z.B. ein IETF RFC)
  - Notwendig für die Zuordnung, Zitation oder Anerkennung sind (z.B. als Teil einer Creative Commons Zuordnung)
  - Eher für das Thema gepflegt werden, als solche Inhalte auf MDN Web Docs selbst zu integrieren (z.B. die Veröffentlichungsnotizen einer Firma)
  - Open Source oder gemeinschaftlich betrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Wartbarkeit, Zugänglichkeit oder setzen sonst Leserbarrieren. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:
  - Allgemein oder unspezifisch sind (z.B. die Startseite einer Firma, anstelle der zugehörigen Dokumentation)
  - Flüchtig oder ungepflegt sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder eigenpromotional sind (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Bezahltwalled sind (z.B. ein teurer Kurs jenseits der Reichweite von Hobbyisten, Studenten oder Lesern aus einkommensschwächeren Ländern)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository Wert haben, kann der Link zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie zweimal, bevor Sie auf Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zu dem Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Request offenlegen. Die Nichtoffenlegung kann Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie z.B. der Herausgeber einer Spezifikation sind und zur Dokumentation im Zusammenhang mit dieser Spezifikation beitragen, dann ist es zu erwarten und akzeptabel, auf diese Spezifikation zu verweisen. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzten URLs (Kurzlinks)

Ein Linkverkürzer (wie TinyURL oder Bitly) kann hilfreich sein, um lange Links zu kürzen in kleinen, leichter merkbaren URLs (auch als "Kurzlinks" bekannt). Jedoch verschleiern sie ebenfalls das Ziel der URL. Darüber hinaus kann mit bestimmten Verkürzern das Ziel nach deren Erstellung geändert werden, was für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (unique generierbare) URL-Verkürzer erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` ist eine kurze URL, die von einem zufälligen Benutzer generiert wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

<!-- markdownlint-disable search-replace -->

Auf der anderen Seite werden erstseitige Verkürzer, die von den Organisationen betrieben werden, die auch die Ziel-URLs unterhalten, empfohlen. `https://bugzil.la` wird von Mozilla besessen und betrieben und ist ein URL-Verkürzer, der zu `https://bugzilla.mozilla.org/` umleitet, das ebenfalls eine Mozilla-besessene Domäne ist. In diesem Fall verwenden Sie die kürzere URL. Verwenden Sie z.B. `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt startet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; dies entspricht den [HTML-Überschriften-Tags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Tags.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftenebene hinzuzufügen, überlegen Sie, den Artikel in mehrere kleinere Artikel mit einer Landeseite aufzuteilen. Alternativ, überlegen Sie, die Informationen als Aufzählungspunkte zu präsentieren, um die Verwendung eines vierten Überschriftlevels zu vermeiden.

Halten Sie sich an die folgenden Dos und Dont's während der Erstellung von Überschriften für Teilabschnitte:

- **Erstellen Sie keine einzelnen Teilabschnitte.** Teilen Sie ein Thema nicht in ein einzelnes Unterthema auf.
  Es sind entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb der Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzugeben (z.B. "Verwenden vom `FooBar` Interface").
- **Erstellen Sie keine "zusammenstoßenden Überschriften".** Dies sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne erklärenden Text dazwischen.
  Dies sieht nicht gut aus und lässt Leser ohne erklärenden Text am Anfang des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz es Ihnen erlaubt, sie zu verwenden. Verwenden Sie nach Möglichkeit Medien mit einer sehr freizügigen Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder, laufen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Gewicht der Seite zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss [beschreibenden `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten formatiert und strukturiert sein, um auf allen Seiten konsistent zu sein. Einzelne Listenelemente sollten mit der passenden Interpunktion geschrieben werden, unabhängig vom Listenformat. Je nachdem, welchen Listentyp Sie erstellen, möchten Sie jedoch Ihr Schreiben gemäß den in den folgenden Abschnitten beschriebenen Punkten anpassen. In beiden Fällen, fügen Sie einen einleitenden Satz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um zusammenhängende, knappe Informationen zu gruppieren. Jedes Element in der Liste sollte einen ähnlichen Satzbau befolgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten Standardinterpunktion enthalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenpunkt gibt, muss am Ende jedes Satzes ein Punkt stehen, einschließlich des letzten Satzes des Elements, genau wie es in einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir aufnehmen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine andere Bedingung, mit weiterer Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von Kugel zu Kugel wiederholt wird. In diesem Beispiel gibt jede Aufzählung eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden färbungsbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Schatten zu Text hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement drei oder weniger Wörter enthält. Versuchen Sie jedoch, wo immer möglich, dieselbe Struktur für alle Elemente in einer Liste zu folgen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden in erster Linie dazu verwendet, Schritte in einer Reihe von Anweisungen zu nummerieren. Weil Anweisungen komplex sein können, ist Klarheit Priorität, besonders wenn der Text in jedem Listenelement lang ist. Wie bei Aufzählungslisten, befolgen Sie die Standards für Interpunktion. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz öffnen, um die Anweisungen einzuführen. Es ist wichtig, dem Benutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie Ihre Anweisungen zu erstellen und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich umfassend sein, daher ist es wichtig, klar zu schreiben und korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der Nummernliste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel zum Schreiben einer abschließenden Erklärung für die vorhergehende Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungsschritte bereitstellt, um eine nummerierte Liste mit der korrekten Formatierung zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Anweisungszwecke oder zum Durchführen jemandes durch ein geordnetes Verfahren verwendet werden, achten Sie darauf, jedes Element konzentriert zu halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten am Ende des Artikels einen _Siehe auch_ Abschnitt. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Dies ist beispielsweise die [Siehe auch Abschnitt](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) für die Seite `@layer`.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt im [Aufzählungsliste](#listen) Format mit jedem Element in der Liste als Phrase. In dem [Lernwebentwicklung](/de/docs/Learn_web_development) Abschnitt auf MDN jedoch folgt der Siehe auch Abschnitt dem [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Um Konsistenz über die MDN Web Docs zu bewahren, beachten Sie bitte die folgenden Richtlinien, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Link text

- Der Link-Text sollte derselbe wie der Titel der Seite oder des Abschnitts, auf den verlinkt wird, sein. Zum Beispiel, der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA Zustände und Eigenschaften" wird sein:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satzschreibung im Link-Text, selbst wenn sie vom verlinkten Seitentitel oder Abschnittstitel abweicht. Es könnte sein, dass der Fall im Seitentitel oder Abschnittstitel falsch ist. Zum Beispiel der Linktext zur [Quirks-Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite in korrekter Satzschreibung wird sein:
  - **Richtig**: [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Auch für externe Links verwenden Sie die Satzschreibung, selbst wenn die Großkleinschreibung auf der Zielartikel-Seite anders ist. Dies ist, um Konsistenz über die MDN Web Docs zu gewährleisten. Ausnahmen sind die Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie auf der Seite [Verlinkung zu Referenzseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) auf der _Häufig verwendete Makros_ Seite erklärt wird. Die Verwendung des Makros wird dem Schlüsselwort im Link-Text Code-Formatierung hinzufügen, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("A", "An", "The") wird am Anfang des Link-Listen-Eintrags benötigt. Keine Interpunktion ist am Ende des Listen-Eintrags erforderlich, da es in der Regel ein Ausdruck oder eine Phrase sein wird.
  - **Richtig**: {{cssxref("revert-layer")}}
  - **Falsch**: The {{cssxref("revert-layer")}} keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorhergehenden Beispielen gezeigt, fügen Sie mit Backticks (`` ` ``) Code-Formatierung zu Schlüsselwörtern und Literalen im Link-Text hinzu, auch wenn die Formatierung nicht in Seitentiteln und Abschnittstiteln verwendet wird. Zum Beispiel, für den Seitentitel "Array() Konstruktor", wird der Link-Text so formatiert: [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link minimal. Im Fall einer Beschreibung, fügen Sie sie nach dem Link-Text und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne Endinterpunktion. Halten Sie allen verlinkten Text an den Anfang, um das Scannen der Liste von Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Stylen von Kontrollkästchen
- Verwenden Sie die Konjunktion "und" nicht vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere färbungsbezogene Eigenschaften
- Für externe Links streben Sie an, die Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) anzugeben, wann immer dies möglich und angemessen ist. Das Bereitstellen dieser Informationen im Voraus gibt den Lesern eine klare Idee von dem Ziel, das sie beim Klicken auf den Link erreichen werden. Das Veröffentlichungs- oder Aktualisierungsdatum führt die Leser an, die Relevanz des verlinkten Artikels zu bewerten und hilft auch den MDN-Betreuern, Links zu Artikeln zu überprüfen, die seit langer Zeit nicht aktualisiert wurden. Wenn Sie einen Link auf einen Artikel in Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Der folgende Listenpunkt ist ein Beispiel für das Hinzufügen eines Links zu dem externen Artikel [Top-Level await](https://v8.dev/features/top-level-await) im Siehe auch Abschnitt, zusammen mit den Quellen- und Jahresinformationen:
  - **Richtig**: [Top-Level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch Autorennamen angeben. Ein paar Beispiele sind im Abschnitt [Weitere Lektüre](#language_grammar_and_spelling) aufgelistet. Verzichten Sie darauf, Autorennamen für Blog-Beiträge oder GitHub-Repositories hinzuzufügen, die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu verwandten Leitfäden und Tutorial-Seiten. Diese vorgeschlagene Reihenfolge ist hauptsächlich um die Scannbarkeit der Elemente in der Liste zu unterstützen.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst und dann die externen Links.
- Innerhalb jeder Gruppe von internen und externen Links, folgen Sie der alphabetischen oder simpel-zu-fortgeschrittenen Ordnung, was auch immer für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie einige Artikel über ein Thema oder Themengebiet hinzufügen müssen, tun Sie dies in der Regel, indem Sie eine Landeseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen. Die Landeseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, gefolgt von einer Liste der Unterseiten mit Beschreibungen jeder Seite. Sie können die Einfügung der Seiten in die Liste automatisieren, indem Sie einige Makros, die wir erstellt haben, verwenden.

Zum Beispiel, betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt aufgebaut ist:

- [JavaScript/Leitfaden](/de/docs/Web/JavaScript/Guide) — Hauptinhaltsverzeichnis-Seite
- [JavaScript/Leitfaden/JavaScript-Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Leitfaden/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Leitfaden/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an der Spitze der Hierarchie zu positionieren, da dies die Site verlangsamt und Suche und Navigation auf der Site weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, welcher der Teil der URL der Seite ist, der auf `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien bei der Definition eines Slugs:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Ebene der Hierarchie erstellen, sollte die neuen Ebene Komponente im Slug nur ein Wort oder zwei sein.
- Slugs sollten einen Unterstrich für eine mehrwortige Komponente verwenden, so wie `Basic_HTML_syntax` im Pfad `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie auch bei Slugs der Satzfall-Schreibung für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch verwendet, um die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite zu strukturieren. Ein Seitentitel kann sich von dem "Slug" der Seite unterscheiden, wie im [Slugs](#slugs) Abschnitt erklärt.

Beachten Sie diese Richtlinien beim Schreiben von Titeln:

- **Schreibweise des Kapitalstils**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften die Satzstil-Schreibung verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle der Überschriftenstil-Großschreibung:
  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript Rollovers"
  - **Falsch**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel festgelegt wurde. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie mögen. Wir arbeiten allmählich daran.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren werden, ist einer der ersten Schritte beim Schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen helfen, zu entscheiden, wie Sie Informationen ordnen möchten. Behandeln Sie einfache Konzepte zuerst und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Decken Sie konzeptionelle Informationen zuerst ab und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitten oder Unterabschnitten:
  - **Von höher zu niedriger gehen**: Wie im [Überschriftenlevel](#überschriftenebenen) Abschnitt angegeben, gehen Sie von höher `##` zu niedriger `####`, ohne Level zu überspringen. Verwenden Sie höhere Überschirften für allgemeinere einleitende Überschriften und nutzen Sie spezifischere Überschriften in der Tiefe in Ihrer Gliederung.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle zusammenhängenden Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Die Benennung der Titel der verschiedenen Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Titel kurz halten**: Kürzere Titel sind leichter im Text und im Inhaltsverzeichnis zu scannen.
  - **Titel spezifisch halten**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die in dem Abschnitt behandelt werden sollen. Verwenden Sie zum Beispiel für einen Abschnitt, der HTML-Elemente einführt, den Titel "HTML-Elemente" anstelle von "Einführung" oder "Übersicht".
  - **Titel fokussieren**: Verwenden Sie den Titel, um ein einzelnes Ziel zu vermitteln — eine einzelne Idee oder ein Konzept wird in diesem Abschnitt behandelt. Zu diesem Zweck, sofern möglich, versuchen Sie nicht, die Konjunktion "und" in einem Titel zu verwenden.
  - **Parallele Konstruktion verwenden**: Verwenden Sie eine ähnliche Sprache für Titel auf demselben Überschriftenlevel. Zum Beispiel, wenn ein `###` Überschriftenlevel-Titel Gerundien verwendet, also Wörter, die auf "-ing" enden, wie "Installing", dann versuchen Sie, alle Titel auf demselben Überschriftenlevel in Gerundien-Sprache zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie "Use", "Configure", dann schreiben Sie alle Titel auf demselben Überschriftenlevel mit einem Imperativverb beginnend.
  - **Ein allgemeines Wort im niedriger Stufe vermeiden**: Wiederholen Sie nicht den Text des Titels einer höheren Ebene in niedrigeren Titeln. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", nennen Sie den Titel eines Unterabschnitts "Nach einleitenden Nebensätzen" anstelle von "Kommas nach einleitenden Nebensätzen".
  - **Mit keinem Artikel beginnen**: Vermeiden Sie es, Titel mit einem Artikel "ein", "eine" oder "das" zu beginnen.
  - **Einführende Informationen hinzufügen**: Nach einem Titel fügen Sie einige einleitende Texte hinzu, um zu erklären, was in dem Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Code-Beispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, auf den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu verweisen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein.

- [Häufige Fehler im englischen Sprachgebrauch](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Sprache und Nutzung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Seite für die Nutzung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, besonders für Präpositionsverwendung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
