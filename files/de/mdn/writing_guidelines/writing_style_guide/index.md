---
title: Schreibstil-Leitfaden
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: c9c2a211595d962118504b599debbf39d6aaad3f
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, geschrieben und formatiert werden sollten.

Diese Richtlinien sollen für eine einheitliche Sprache und einen einheitlichen Stil auf der gesamten Website sorgen. Der Inhalt ist uns allerdings wichtiger als seine Formatierung. Sie müssen also nicht den gesamten Schreibstil-Leitfaden kennen, bevor Sie etwas beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn andere Mitwirkende Ihre Arbeit später an diesen Leitfaden anpassen. Auch bei der Prüfung eines Pull Requests für Inhalte werden Sie möglicherweise auf diesen Leitfaden verwiesen.

> [!NOTE]
> Die sprachlichen Vorgaben dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentation. Andere Sprachen können eigene Stilrichtlinien haben und sind ausdrücklich eingeladen, solche zu erstellen. Diese sollten als Unterseiten der jeweiligen Seite des Lokalisierungsteams veröffentlicht werden. Für die Formatierung und Organisation von Inhalten sollte dieser Leitfaden dennoch herangezogen werden.

Nach den allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und anschließend die Formatierung einzelner Seitenbestandteile, etwa Listen und Titel.

## Allgemeine Schreibrichtlinien

Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leserinnen und Leser zum Verständnis des jeweiligen Themas benötigen.

Die folgenden Abschnitte enthalten Empfehlungen, um dieses Ziel zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Schreiben Sie klar, prägnant und einheitlich](#schreiben_sie_klar,_prägnant_und_einheitlich)
- [Fügen Sie relevante Beispiele hinzu](#fügen_sie_relevante_beispiele_hinzu)
- [Schreiben Sie eine aussagekräftige Einleitung](#schreiben_sie_eine_aussagekräftige_einleitung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Verwenden Sie barrierefreie Sprache](#verwenden_sie_barrierefreie_sprache)
- [Denken Sie beim Schreiben an SEO](#denken_sie_beim_schreiben_an_seo)
- [Übernehmen Sie Verantwortung für Ihre Texte](#übernehmen_sie_verantwortung_für_ihre_texte)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe Ihrer Inhalte im Blick. Eine Seite über fortgeschrittene Netzwerktechniken muss beispielsweise grundlegende Netzwerkkonzepte wahrscheinlich nicht so ausführlich erläutern wie eine allgemeine Seite über Netzwerke. Bedenken Sie, dass es sich um Richtlinien handelt: Nicht jeder Hinweis gilt in jedem Fall.

### Schreiben Sie klar, prägnant und einheitlich

Gute Texte sind klar, prägnant und einheitlich.

- **Klar**: Schreiben Sie verständlich und einfach. Verwenden Sie möglichst aktive Formulierungen und eindeutige Pronomen. Halten Sie Sätze kurz und beschränken Sie sich auf einen Gedanken pro Satz. Definieren Sie neue Begriffe unter Berücksichtigung Ihrer Zielgruppe, bevor Sie sie verwenden.
- **Prägnant**: Bei jedem Dokument ist es wichtig zu wissen, wie viel Sie sagen müssen. Zu viele Details machen eine Seite mühsam zu lesen, sodass sie seltener genutzt wird.
- **Einheitlich**: Verwenden Sie auf einer Seite und über mehrere Seiten hinweg dieselben Begriffe und Formulierungen.

### Fügen Sie relevante Beispiele hinzu

Ergänzen Sie Ihre Texte nach Möglichkeit um Beispiele oder Szenarien aus der Praxis. So werden konzeptionelle Informationen und Anleitungen anschaulicher und leichter verständlich.

Erläutern Sie anhand von Beispielen, wofür die einzelnen Parameter verwendet werden und welche Sonderfälle auftreten können.
Beispiele können außerdem Lösungen für häufige Aufgaben und mögliche Probleme zeigen.

### Schreiben Sie eine aussagekräftige Einleitung

Achten Sie darauf, dass die Absätze vor der ersten Überschrift die Inhalte der Seite angemessen zusammenfassen. Gegebenenfalls können sie auch beschreiben, was Leserinnen und Leser nach der Lektüre erreichen können. So lässt sich schnell erkennen, ob die Seite für die eigenen Fragen und Lernziele relevant ist.

Bei einem Leitfaden oder Tutorial sollten die einleitenden Absätze die behandelten Themen und gegebenenfalls die erforderlichen Vorkenntnisse nennen. Der erste Absatz sollte die dokumentierten oder besprochenen Technologien und/oder APIs erwähnen, auf weiterführende Informationen verlinken und Hinweise geben, wann die Inhalte des Artikels nützlich sein könnten.

- **Beispiel für eine zu kurze Einleitung**: Diese Einleitung ist viel zu kurz. Sie lässt wichtige Informationen aus, etwa was genau es bedeutet, Textkonturen zu zeichnen, und wo der Text gezeichnet wird.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel für eine zu lange Einleitung**: Dieses Beispiel enthält eine überarbeitete Einleitung, die nun aber viel zu lang ist.
  Sie enthält zu viele Details und beschreibt andere Methoden und Eigenschaften zu ausführlich.
  Stattdessen sollte sich die Einleitung auf die Methode `strokeText()` konzentrieren und auf die passenden Leitfäden verweisen, in denen die übrigen Details beschrieben werden.

  > Beim Aufruf zeichnet die Methode **`CanvasRenderingContext2D.strokeText()`** der Canvas 2D API die Konturen der Zeichen einer angegebenen Zeichenfolge ab den angegebenen Koordinaten mit der aktuellen Zeichenfarbe.
  > In der Computergrafik bedeutet das Zeichnen von Textkonturen, dass nur die Umrisse der Glyphen einer Zeichenfolge gezeichnet werden, ohne die Zeichen mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts gezeichnet, die durch dessen Eigenschaft [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) festgelegt ist.
  >
  > Die Position des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Position der Zeichenfolge relativ zur angegebenen X-Koordinate. Beim Wert `"center"` beginnt die Zeichenfolge bei `x - (stringWidth / 2)`, sodass die angegebene X-Koordinate in ihrer Mitte liegt.
  > Beim Wert `"left"` beginnt die Zeichenfolge beim angegebenen Wert von `x`.
  > Ist `textAlign` `"right"`, endet der Text an der angegebenen X-Koordinate.
  >
  > (…)
  >
  > Optional können Sie einen vierten Parameter angeben, der eine maximale Breite für die Zeichenfolge in Pixeln festlegt.
  > Wenn Sie diesen Parameter angeben, wird der Text beim Zeichnen horizontal gestaucht, skaliert oder anderweitig angepasst, damit er in einen Bereich dieser Breite passt.
  >
  > Mit der Methode **`fillText()`** können Sie die Zeichen einer Zeichenfolge mit Farbe gefüllt zeichnen, statt nur ihre Umrisse darzustellen.

- **Beispiel für eine angemessene Einleitung**: Der folgende Abschnitt bietet einen wesentlich besseren Überblick über die Methode `strokeText()`.

  > Die Methode **`strokeText()`** von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) gehört zur [Canvas 2D API](/de/docs/Web/API/Canvas_API). Sie zeichnet die Konturen der Zeichen einer angegebenen Zeichenfolge, wobei die durch die X- und Y-Koordinaten angegebene Position als Anker dient.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und entsprechend den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Weitere Informationen und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite zum Zeichnen von Grafiken sowie in unserem Hauptartikel zum Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein großes und vielfältiges Publikum.
Wir empfehlen ausdrücklich, Texte so inklusiv wie möglich zu formulieren.
Manche Begriffe können Menschen mit bestimmten Hintergründen ausgrenzen, auch wenn das nicht beabsichtigt ist. Beispiele:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- Ersetzen Sie **sanity** durch **coherence**.
- Verwenden Sie statt **dummy** den Begriff **placeholder**.
- Die Begriffe **crazy** und **insane** sollten in der Dokumentation nicht nötig sein. Falls doch einmal ein entsprechender Ausdruck gebraucht wird, erwägen Sie stattdessen **fantastic**.

Vermeiden Sie bildhafte Redewendungen, die Gewalt oder Grausamkeit darstellen. Sie können bei manchen Menschen negative Reaktionen auslösen und setzen den falschen Ton für eine Dokumentation. Zum Beispiel:

- Schreiben Sie statt „kill two birds with one stone“ („zwei Fliegen mit einer Klappe schlagen“) „solve two problems at once“ („zwei Probleme gleichzeitig lösen“).
- Schreiben Sie statt „beating a dead horse“ („auf einem toten Pferd herumreiten“) „belaboring the point“ („einen Punkt übermäßig ausführen“) oder „going round in circles“ („sich im Kreis drehen“).
- Schreiben Sie statt „more than one way to skin a cat“ „more than one way to do this“ („mehrere Möglichkeiten, dies zu tun“).

Wenn das Geschlecht für ein Thema keine Rolle spielt, sollten Texte möglichst geschlechtsneutral formuliert sein.
Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes schreiben, sind „he“ und „his“ angemessen. Kann die betreffende Person jedoch ein beliebiges Geschlecht haben, sind „he“ und „his“ nicht passend.

Betrachten wir die folgenden Beispiele:

- **Falsch**: „A confirmation dialog asks the user if he wants to allow the web page to make use of his webcam.“
- **Falsch**: „A confirmation dialog asks the user if she wants to allow the web page to make use of her webcam.“

Beide Fassungen beziehen sich auf ein bestimmtes Geschlecht. Verwenden Sie stattdessen geschlechtsneutrale Pronomen:

- **Richtig**: „A confirmation dialog asks the user if they want to allow the web page to make use of their webcam.“

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des Plurals der dritten Person für eine einzelne Person, bekannt als [„singular they“](https://en.wikipedia.org/wiki/Singular_they). Zu diesen geschlechtsneutralen Pronomen gehören „they“, „them“, „their“ und „theirs“.

Eine weitere Möglichkeit besteht darin, die Personen im Plural zu nennen:

- **Richtig**: „A confirmation dialog asks the users if they want to allow the web page to make use of their webcams.“

Am besten formulieren Sie den Satz so um, dass die Pronomen entfallen:

- **Richtig**: „A confirmation dialog requesting the user's permission for webcam access appears.“
- **Richtig**: „A confirmation dialog box that asks the user for permission to use the webcam appears.“

Die letzte Lösung ist wohl die beste.
Sie ist nicht nur grammatikalisch korrekter, sondern vermeidet auch einen Teil der Schwierigkeiten, die durch unterschiedliche Regeln für das grammatische Geschlecht in verschiedenen Sprachen entstehen.
Das kann die Übersetzung sowohl für Lesende als auch für Übersetzende erleichtern.

### Verwenden Sie barrierefreie Sprache

Vermeiden Sie räumliche und richtungsbezogene Wörter wie „oben“, „unten“, „links“, „rechts“ oder „hier“. Solche Begriffe setzen eine bestimmte visuelle Anordnung voraus, die nicht für alle Nutzenden gilt. Sie können außerdem unklar oder irreführend sein – insbesondere für Menschen, die Screenreader verwenden oder übersetzte Inhalte lesen, bei denen Richtungsangaben mehrdeutig oder schwer korrekt zu übertragen sein können. In responsiven Layouts kann sich die Position von Inhalten je nach Bildschirmgröße ändern, wodurch solche Verweise unzutreffend werden. Diese Sprache kann die Barrierefreiheit beeinträchtigen und es allen Nutzenden erschweren, Inhalte zu finden oder zu verstehen.

Verwenden Sie stattdessen beschreibende Formulierungen, die den gemeinten Abschnitt, das Konzept oder das Element eindeutig benennen. Verweisen Sie auf Abschnitte mit ihren Titeln oder Überschriften und beschreiben Sie Beispiele oder Codeausschnitte anhand dessen, was sie zeigen oder enthalten.

Zum Beispiel:

- **Richtig**: „Lesen Sie den Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) auf dieser Seite.“
- **Falsch**: „Lesen Sie den Abschnitt Barrierefreiheit weiter unten.“

- **Richtig**: „Im folgenden Codebeispiel animieren wir einen Kreis mit CSS-Übergängen.“
- **Falsch**: „Im Codebeispiel unten animieren wir einen Kreis mit CSS-Übergängen.“

- **Richtig**: „Dieses Konzept wird im vorangehenden Abschnitt mit dem Titel Medienabfrage erstellen erläutert.“
- **Falsch**: „Dieses Konzept wird im Abschnitt oben erläutert.“

Vermeiden Sie außerdem ungenaue Linktexte wie „Hier klicken“ oder „Diesen Artikel lesen“. Aussagekräftige Linktexte bieten allen Lesenden mehr Kontext und verbessern insbesondere die Nutzung mit assistiven Technologien.

<!-- markdownlint-disable descriptive-link-text -->

- **Richtig**: „Erfahren Sie mehr darüber, [wie Sie Flex-Elemente anordnen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items).“
- **Falsch**: „Klicken Sie [hier](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren.“
- **Falsch**: „Lesen Sie [diesen Artikel](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items), um mehr zu erfahren.“

<!-- markdownlint-enable descriptive-link-text -->

Wenn Sie diese Richtlinien befolgen, tragen Sie dazu bei, dass die MDN-Dokumentation für alle zugänglich, klar und nutzbar ist – unabhängig davon, wie sie auf die Seite zugreifen.

### Denken Sie beim Schreiben an SEO

Das wichtigste Ziel aller Texte auf MDN Web Docs sollte stets sein, offene Webtechnologien zu erklären und darüber zu informieren. So können Entwicklerinnen und Entwickler schnell lernen, ihre Vorhaben umzusetzen, oder die Details finden, die sie zur Verbesserung ihres Codes benötigen. Ebenso wichtig ist aber, dass sie unsere Inhalte _finden_ können. Dazu können wir beitragen, indem wir beim Schreiben die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) berücksichtigen.

Dieser Abschnitt behandelt bewährte Vorgehensweisen, Empfehlungen und Anforderungen an Inhalte, damit Suchmaschinen unser Material leicht einordnen und indexieren können und Lesende finden, was sie benötigen. Die SEO-Richtlinien sollen sicherstellen, dass jede von Autorinnen, Autoren und Redaktionen bearbeitete Seite angemessen gestaltet, geschrieben und ausgezeichnet ist. Dadurch erhalten Suchmaschinen den Kontext und die Hinweise, die sie für eine korrekte Indexierung brauchen.

Beachten Sie beim Schreiben und Prüfen von Inhalten die folgende Checkliste, damit die Seite und benachbarte Seiten von Suchmaschinen richtig indexiert werden:

- **Achten Sie darauf, dass Seiten einander nicht zu stark ähneln**: Wenn der Text verschiedener Seiten ähnlich ist, nehmen Suchmaschinen an, dass die Seiten dasselbe Thema behandeln – selbst wenn das nicht der Fall ist.
  Hat eine Schnittstelle beispielsweise die Eigenschaften `width` und `height`, können sich die Dokumentationsseiten überraschend stark ähneln: Es werden nur wenige Wörter ausgetauscht und dasselbe Beispiel verwendet. Suchmaschinen können die Seiten dann schwer unterscheiden und verteilen die Relevanzbewertung auf beide. Dadurch sind beide Seiten schwerer zu finden, als sie sein sollten.

  Deshalb ist es wichtig, dass jede Seite eigenständige Inhalte hat. Die folgenden Vorschläge können Ihnen dabei helfen:
  - **Erläutern Sie unterschiedliche Konzepte**: Betrachten Sie Anwendungsfälle, bei denen sich mehr Unterschiede ergeben, als zunächst zu erwarten wäre. Bei der Dokumentation der Eigenschaften `width` und `height` könnten Sie beispielsweise erklären, wie horizontaler und vertikaler Platz unterschiedlich genutzt werden, und die dazugehörigen Konzepte besprechen. Sie könnten erwähnen, dass `width` Platz für eine Seitenleiste schaffen kann, während `height` für vertikales Scrollen oder Fußzeilen relevant ist. Informationen zu Fragen der Barrierefreiheit sind ebenfalls nützlich und wichtig.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele sind in solchen Fällen oft noch ähnlicher als der Fließtext, weil sie möglicherweise von Anfang an beide oder alle ähnlichen Methoden oder Eigenschaften verwenden. Bei einer Wiederverwendung wären deshalb kaum Änderungen nötig. Ersetzen Sie das Beispiel durch ein neues oder stellen Sie zumindest mehrere Beispiele bereit, von denen sich einige unterscheiden.
  - **Beschreiben Sie Beispiele**: Erläutern Sie sowohl, was das Beispiel zeigt, als auch, wie es funktioniert. Wählen Sie dabei einen Detailgrad, der zur Komplexität des Themas und zur Zielgruppe passt.

  Wenn es die Zeit erlaubt, vermeiden Sie übermäßige Ähnlichkeit am einfachsten, indem Sie jeden Artikel von Grund auf neu schreiben.

- **Achten Sie darauf, dass Seiten nicht zu kurz sind**: Enthält eine Seite zu wenig Inhalt – im SEO-Bereich spricht man von „Thin Pages“ –, erfassen Suchmaschinen sie nicht zuverlässig oder gar nicht. Sehr kurze Inhaltsseiten sind schwer zu finden. Als Orientierung sollten Seiten auf MDN Web Docs etwa 300 Wörter oder mehr umfassen. Verlängern Sie eine Seite nicht künstlich, aber betrachten Sie diesen Wert nach Möglichkeit als Mindestziel.

  Diese grundlegenden Richtlinien helfen Ihnen, Seiten mit genügend durchsuchbarem Inhalt zu erstellen, ohne sie mit unnötigem Text zu überfrachten:
  - **Vermeiden Sie unvollständige Seiten**: Wenn ein Artikel nur ein Gerüst ist oder Inhalte fehlen, ergänzen Sie ihn. Wir versuchen, reine Platzhalterseiten auf MDN Web Docs zu vermeiden, auch wenn es sie gibt. Darüber hinaus fehlen auf vielen Seiten größere Teile des Inhalts.
  - **Prüfen Sie die Seitenstruktur**: Vergewissern Sie sich, dass die Seite ihrem [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entsprechend aufgebaut ist. Prüfen Sie, ob alle Abschnitte vorhanden sind und passende Inhalte enthalten.
  - **Stellen Sie Vollständigkeit sicher**: Prüfen Sie die Abschnitte auf fehlende Informationen. Sorgen Sie dafür, dass alle Parameter aufgeführt und erklärt werden. Berücksichtigen Sie auch sämtliche Ausnahmen – gerade hier fehlen häufig Informationen.
  - **Arbeiten Sie alle Konzepte vollständig aus**: Eine kurze Erklärung ist schnell geschrieben. Achten Sie jedoch darauf, alle wichtigen Feinheiten abzudecken. Gibt es Sonderfälle? Gibt es bekannte Einschränkungen, die Leserinnen und Leser kennen sollten?
  - **Fügen Sie Beispiele hinzu**: Beispiele sollten alle Parameter abdecken oder zumindest diejenigen Parameter, Eigenschaften und Attribute, die Personen mit grundlegenden bis mittleren Kenntnissen wahrscheinlich verwenden. Auch fortgeschrittene Funktionen, die zusätzliche Erläuterungen erfordern, sollten Beispiele erhalten. Leiten Sie jedes Beispiel mit einem Überblick darüber ein, was es zeigt, welche zusätzlichen Kenntnisse möglicherweise zum Verständnis nötig sind und Ähnliches. Erläutern Sie anschließend oder zwischen einzelnen Teilen des Beispiels, wie der Code funktioniert. Sparen Sie weder bei den Details noch bei der Fehlerbehandlung. Denken Sie daran: Nutzende _werden_ Ihr Beispiel kopieren und in eigene Projekte einfügen, und Ihr Code _wird_ auf produktiven Websites eingesetzt! Weitere hilfreiche Informationen finden Sie in unseren [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide).
  - **Erläutern Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für die beschriebene Funktion gibt, sprechen Sie sie an! Gehen Sie nicht davon aus, dass Nutzende selbst erkennen, wie sich mit der dokumentierten Methode ein häufiges Entwicklungsproblem lösen lässt. Ergänzen Sie stattdessen einen Abschnitt zu diesem Anwendungsfall mit einem Beispiel und einer Erklärung seiner Funktionsweise.
  - **Fügen Sie Bildinformationen hinzu**: Versehen Sie alle Bilder und Diagramme mit aussagekräftigem [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text. Dieser Text zählt ebenso wie Beschriftungen von Tabellen und anderen Abbildungen: Suchmaschinen-Crawler können Bilder nicht auslesen, daher beschreibt der `alt`-Text den Inhalt eingebetteter Medien.
    > [!NOTE]
    > Versuchen Sie nicht, Suchmaschinenplatzierungen durch zu viele oder themenfremde Schlüsselwörter zu beeinflussen. Dieses Verhalten ist leicht zu erkennen und wird häufig abgestraft.
    > Fügen Sie ebenso **keine** sich wiederholenden, nutzlosen Inhalte oder Ansammlungen von Schlüsselwörtern in die Seite ein, um deren Umfang oder Platzierung in Suchergebnissen zu verbessern. Das schadet sowohl der Lesbarkeit als auch unseren Suchergebnissen.

- **Konzentrieren Sie sich auf das Seitenthema**: Es ist wesentlich besser, Inhalte rund um das Thema der Seite zu schreiben, als sich auf ein bestimmtes Schlüsselwort zu konzentrieren. Für ein Thema gibt es wahrscheinlich viele geeignete Schlüsselwörter. Tatsächlich stellen viele SEO-Fachleute je nach Artikellänge Listen mit 5 bis 100 verschiedenen kurzen, mittleren und langen Suchbegriffen zusammen. Unterschiedliche Begriffe sorgen für mehr sprachliche Vielfalt und weniger Wiederholungen.

### Übernehmen Sie Verantwortung für Ihre Texte

Unabhängig davon, welche Hilfsmittel Sie beim Schreiben verwenden, tragen Sie die Verantwortung für das Ergebnis.
Vor der Einreichung muss ein Mensch den gesamten Fließtext prüfen.
Überarbeiten Sie den Text so, dass er [klar, prägnant und einheitlich](#schreiben_sie_klar,_prägnant_und_einheitlich) ist, und überprüfen Sie seine technische Richtigkeit.

## Schreibstil

Neben grammatikalisch korrekten englischen Sätzen empfehlen wir die folgenden Richtlinien, um Inhalte auf MDN Web Docs einheitlich zu gestalten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Groß- und Kleinschreibung](#groß-_und_kleinschreibung)
- [Zusammengezogene Formen](#zusammengezogene_formen)
- [Zahlen und Zahlenschreibweise](#zahlen_und_zahlenschreibweise)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Aktiv und Passiv](#aktiv_und_passiv)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Form eines längeren Wortes. Ein Akronym ist ein neues Wort, das aus den Anfangsbuchstaben der Wörter einer Wortgruppe gebildet wird. Dieser Abschnitt enthält Richtlinien für Abkürzungen und Akronyme.

- **Ausschreiben**: Schreiben Sie Akronyme, die Nutzenden möglicherweise nicht bekannt sind, bei ihrer ersten Erwähnung auf einer Seite aus. Schreiben Sie sie im Zweifelsfall aus. Noch besser ist ein Link zum entsprechenden Artikel oder [Glossareintrag](/de/docs/Glossary), der die Technologie erklärt.
  - **Richtig**: „XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache ...“
  - **Falsch**: „XUL ist Mozillas XML-basierte Sprache ...“

- **Großschreibung und Punkte**: Schreiben Sie alle Buchstaben in Abkürzungen und Akronymen groß und lassen Sie Punkte weg. Das gilt auch für Bezeichnungen von Organisationen wie „US“ und „UN“.
  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: In Klammerzusätzen und Hinweisen können Sie gebräuchliche lateinische Abkürzungen wie „etc.“, „i.e.“ und „e.g.“ verwenden. Setzen Sie dabei Punkte und anschließend ein Komma oder ein anderes passendes Satzzeichen.

  <!-- markdownlint-disable search-replace -->
  - **Richtig**: Web browsers (e.g., Firefox) can be used ...
  - **Falsch**: Web browsers e.g. Firefox can be used ...
  - **Falsch**: Web browsers, e.g. Firefox, can be used ...
  - **Falsch**: Web browsers, (eg: Firefox) can be used ...

  <!-- markdownlint-enable search-replace -->

  Verwenden Sie im normalen englischen Fließtext, also außerhalb von Hinweisen oder Klammern, stattdessen die ausgeschriebene englische Entsprechung.
  - **Richtig**: ... web browsers, and so on.
  - **Falsch**: ... web browsers, etc.

  - **Richtig**: Web browsers such as Firefox can be used ...
  - **Falsch**: Web browsers e.g., Firefox can be used ...

  Die folgende Tabelle zeigt die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen:

  <!-- markdownlint-disable search-replace -->

  | Abkürzung | Latein           | Englisch                |
  | --------- | ---------------- | ----------------------- |
  | cf.       | _confer_         | compare                 |
  | e.g.      | _exempli gratia_ | for example             |
  | et al.    | _et alii_        | and others              |
  | etc.      | _et cetera_      | and so forth, and so on |
  | i.e.      | _id est_         | that is, in other words |
  | N.B.      | _nota bene_      | note well               |
  | P.S.      | _post scriptum_  | postscript              |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Überlegen Sie immer, ob eine lateinische Abkürzung wirklich hilfreich ist. Einige werden so selten verwendet, dass viele Lesende ihre Bedeutung verwechseln oder nicht verstehen.
  >
  > Wenn Sie solche Abkürzungen verwenden, achten Sie darauf, dass _Sie_ sie richtig einsetzen. Verwechseln Sie beispielsweise nicht „e.g.“ und „i.e.“ – das ist ein häufiger Fehler.

- **Plural von Abkürzungen und Akronymen**: Hängen Sie für den Plural ein _s_ an. Verwenden Sie niemals einen Apostroph.
  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **„Versus“, „vs.“ und „v.“**: Wenn Sie die Kurzform verwenden, bevorzugen Sie „vs.“ gegenüber „v.“. In Überschriften ist „vs.“ zulässig. Verwenden Sie im übrigen Text die ausgeschriebene Form „versus“.
  - **Richtig**: this vs. that
  - **Falsch**: this v. that
  - **Richtig**: this versus that

### Groß- und Kleinschreibung

Verwenden Sie im Fließtext die üblichen englischen Regeln zur Groß- und Kleinschreibung und schreiben Sie „World Wide Web“ mit Großbuchstaben. „web“ darf allein oder als Bestimmungswort kleingeschrieben werden, ebenso „internet“.

> [!NOTE]
> Diese Richtlinie unterscheidet sich von einer früheren Fassung dieses Leitfadens. Deshalb finden Sie auf MDN möglicherweise viele Vorkommen von „Web“ und „Internet“.
> Sie können diese Schreibweisen ändern, wenn Sie ohnehin weitere Änderungen vornehmen. Einen Artikel nur deshalb zu bearbeiten, ist jedoch nicht nötig.

Schreiben Sie Tastennamen wie in einem Satz und nicht vollständig in Großbuchstaben.
Verwenden Sie beispielsweise „<kbd>Enter</kbd>“ statt „<kbd>ENTER</kbd>“.
Die einzige Ausnahme ist „<kbd>ESC</kbd>“ als Abkürzung für die Taste „<kbd>Escape</kbd>“.

Bestimmte Wörter sollten immer großgeschrieben werden. Dazu gehören Marken mit Großbuchstaben und Wörter, die von Personennamen abgeleitet sind – außer wenn sie in Code stehen und dessen Syntax eine Kleinschreibung verlangt.
Beispiele:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation, deren markenrechtliche Schreibweise immer verwendet werden sollte)
- Python, TypeScript, Django und Namen anderer Programmiersprachen und Frameworks

Manche Werkzeuge und Projekte haben eigene Regeln für die Schreibweise ihrer Namen. Diese können ausschließlich Kleinbuchstaben („npm“ oder „webpack“), ausschließlich Großbuchstaben („UNIX“, „GNOME“, „VIM“) oder eine Kombination daraus („TypeScript“, „macOS“ oder „jQuery“) vorsehen.

Verwenden Sie immer die Schreibweise der offiziellen Website oder Dokumentation, auch am Satzanfang. Wenn Sie einen Satz nicht mit einem Kleinbuchstaben beginnen möchten, formulieren Sie ihn um. Schreiben Sie beispielsweise „Sie können den Paketmanager npm verwenden, um ...“ statt „npm ermöglicht es Ihnen, ...“.

### Zusammengezogene Formen

Unser englischer Schreibstil ist eher locker. Sie können daher zusammengezogene Formen wie „don't“, „can't“ und „shouldn't“ verwenden, wenn Sie das bevorzugen.

### Zahlen und Zahlenschreibweise

- **Kommas**: Verwenden Sie in englischem Fließtext Kommas als Tausendertrennzeichen erst ab fünfstelligen Zahlen.
  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Datumsangaben**: Verwenden Sie für Datumsangaben außerhalb von Codebeispielen das Format „January 1, 1900“.
  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.
  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format „1990s“ ohne Apostroph.
  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plural von Zahlen**: Hängen Sie ein „s“ an. Verwenden Sie keinen Apostroph.
  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie die englischen Pluralformen statt der vom Lateinischen oder Griechischen beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine typografischen Anführungszeichen oder Apostrophe. Auf MDN Web Docs verwenden wir ausschließlich gerade Anführungszeichen und Apostrophe, um eine einheitliche Schreibweise zu gewährleisten. Gelangen typografische Zeichen in Codeausschnitte – auch in Inline-Code –, könnten Lesende sie kopieren und erwarten, dass der Code funktioniert. Das wäre nicht der Fall.

- **Richtig**: Please don't use "curly quotes."
- **Falsch**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Kommas

Die folgende Liste beschreibt häufige Fälle, in denen Sie die englischen Kommaregeln beachten sollten:

- **Nach einleitenden Nebensätzen**: Ein einleitender Nebensatz steht gewöhnlich am Anfang eines Satzes. Trennen Sie ihn mit einem Komma vom folgenden Hauptsatz.
  - Beispiel 1:
    - **Richtig**: „In this example, you will learn how to use a comma.“
    - **Falsch**: „In this example you will learn how to use a comma.“
  - Beispiel 2:
    - **Richtig**: „If you are looking for guidelines, refer to our writing style guide.“
    - **Falsch**: „If you are looking for guidelines refer to our writing style guide.“
  - Beispiel 3:
    - **Richtig**: „On mobile platforms, you tend to get a numeric keypad for entering data.“
    - **Falsch**: „On mobile platforms you tend to get a numeric keypad for entering data.“

- **Vor Konjunktionen**: Das Aufzählungskomma, auch „Oxford comma“ genannt, steht im Englischen bei Aufzählungen mit mindestens drei Elementen vor der Konjunktion. Auf MDN Web Docs verwenden wir dieses Komma. Die übrigen Elemente der Aufzählung werden ebenfalls durch Kommas getrennt.
  - **Richtig**: „I will travel on trains, planes, and automobiles.“
  - **Falsch**: „I will travel on trains, planes and automobiles.“

  Setzen Sie in einer englischen Aufzählung mit nur zwei Elementen kein Komma vor „and“ oder „or“.
  - **Richtig**: „My dog is cute and smart.“
  - **Falsch**: „My dog is cute, and smart.“

  Setzen Sie vor „and“, „but“ und „or“ ein Komma, wenn die Konjunktion zwei selbstständige Hauptsätze verbindet. Wird der Satz dadurch sehr lang oder kompliziert, teilen Sie ihn besser in zwei Sätze.
  - Beispiel 1:
    - **Richtig**: „You can perform this step, but you need to pay attention to the file setting.“
    - **Falsch**: „You can perform this step but you need to pay attention to the file setting.“
  - Beispiel 2:
    - **Richtig**: „My father is strict but loving.“
    - **Falsch**: „My father is strict, but loving.“

- **Vor „that“ und „which“**: Ein bestimmender Relativsatz ist für die Bedeutung des Satzes notwendig und wird nicht durch Kommas vom übrigen Satz abgetrennt. Er wird gewöhnlich mit „that“ eingeleitet; davor sollte **kein** Komma stehen.
  - **Richtig**: „We have put together a course that includes all the essential information you need to work towards your goal.“
  - **Falsch**: „We have put together a course, that includes all the essential information you need to work towards your goal.“

  Ein nicht bestimmender Relativsatz enthält zusätzliche Informationen, die für die Bedeutung des Satzes nicht notwendig sind. Er wird gewöhnlich mit „which“ eingeleitet; davor sollte ein Komma stehen.
  - **Richtig**: „You write a policy, which is an allowed list of origins for each feature.“
  - **Falsch**: „You write a policy which is an allowed list of origins for each feature.“

- **Vor „such as“**: Wenn „such as“ Teil eines nicht bestimmenden Einschubs ist und der übrige Satz selbstständig ist, setzen Sie davor ein Komma.
  - **Richtig**: „The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them.“
  - **Falsch**: „The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them.“

  Das folgende Beispiel zeigt, wann vor „such as“ kein Komma stehen sollte. Hier ist der mit „such as“ eingeleitete Teil für die Bedeutung des Satzes notwendig.
  - **Richtig**: „Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets.“
  - **Falsch**: „Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets.“

### Bindestriche

Setzen Sie in englischen zusammengesetzten Wörtern nur dann einen Bindestrich, wenn der letzte Buchstabe des Präfixes ein Vokal ist und mit dem ersten Buchstaben des Wortstamms übereinstimmt.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanisches Englisch.

Orientieren Sie sich grundsätzlich am ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), sofern dieser nicht als alternative Schreibweise oder als überwiegend nichtamerikanische Form des Englischen gekennzeichnet ist.
Wenn Sie beispielsweise [„behaviour“ nachschlagen](https://www.dictionary.com/browse/behaviour) – mit einem zusätzlichen _u_ gegenüber der amerikanischen Standardschreibweise –, finden Sie den Hinweis „Chiefly British“ und einen Link zur amerikanischen Standardform [„behavior“](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternativen Schreibweisen.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir verwenden [cSpell](https://cspell.org/), um Rechtschreibfehler zu finden. Es wird jede Woche ausgeführt und erstellt im Repository [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle). Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
npm run lint:typos
```

Im Repository pflegen wir unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) mehrere Wortlisten mit zulässigen Wörtern, die in den Standardwörterbüchern fehlen. Wenn die Rechtschreibprüfung ein gültiges Wort meldet, können Sie es einer dieser Listen hinzufügen. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu erfahren, wofür die einzelnen Wörterbücher vorgesehen sind und wie die Rechtschreibprüfung konfiguriert ist.

### Terminologie

Für bestimmte technische Begriffe empfehlen wir Folgendes:

- **HTML-Elemente**: Bezeichnen Sie HTML- und XML-Elemente als „Element“ und nicht als „Tag“. Schreiben Sie den Elementnamen außerdem in spitze Klammern „<>“ und formatieren Sie ihn mit Backticks (`` ` ``). Wenn Sie beispielsweise \<input\> in Backticks setzen, wird es wie vorgesehen als `<input>` dargestellt.
  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie ein HTML-Element optional mit dem [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) angeben. Das Makro formatiert das Element, ergänzt die spitzen Klammern „<>“ und verlinkt auf seine Referenzseite.
  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Markdown-Quelltext: `\{{HTMLElement("span")}}`)

- **Parameter und Argumente**: Auf MDN Web Docs wird der Begriff **Parameter** bevorzugt. Vermeiden Sie nach Möglichkeit den Begriff „Argumente“, um einheitlich zu bleiben.

- **Aktionen in Benutzeroberflächen**: Beschreiben Sie Aktionen in Schritt-für-Schritt-Anleitungen im Imperativ. Nennen Sie das Bedienelement anhand seiner Beschriftung und seines Typs.
  - **Richtig**: „Klicken Sie auf die Schaltfläche Bearbeiten.“
  - **Falsch**: „Klicken Sie auf Bearbeiten.“

### Aktiv und Passiv

Aktive Formulierungen werden bevorzugt. Wegen des ungezwungenen Tons unserer Inhalte sind passive Formulierungen jedoch ebenfalls zulässig.
Achten Sie dabei auf einen einheitlichen Stil.

## Seitenbestandteile

Dieser Abschnitt enthält Richtlinien für verschiedene Teile einer Seite, etwa Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkungen)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt „Siehe auch“](#abschnitt_„siehe_auch“)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehrere Codebeispiele enthalten. Die folgende Liste enthält Empfehlungen zum Verfassen solcher Beispiele:

- Jeder Codebeispielabschnitt sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze Überschrift der Ebene `###` (`<h3>`), die das gezeigte Szenario beschreibt, beispielsweise „Offsetdruck verwenden“ oder „Zum Stil der vorherigen Ebene zurückkehren“.
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die erklärt, worauf die Lesenden achten sollen. Beispielsweise: „Im folgenden Beispiel werden im CSS zwei Kaskadenebenen definiert: `base` und `special`.“
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis und die Funktionsweise des Codes beschreibt.
- Ein Codebeispiel sollte grundsätzlich nicht nur die Syntax und Verwendung einer Funktion zeigen, sondern auch ihren Zweck und die Situationen verdeutlichen, in denen Webentwicklerinnen und Webentwickler sie verwenden möchten oder müssen.
- Bei umfangreichem Beispielcode kann es sinnvoll sein, ihn in kleinere, logisch zusammengehörige Teile aufzuteilen, die sich einzeln erklären lassen.
- Beim Hinzufügen [interaktiver Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist wichtig zu wissen, dass alle Codeblöcke eines Beispiels mit demselben Typ (HTML, CSS oder JavaScript) vor der Ausführung zusammengefügt werden. So können Sie den Code auf mehrere Abschnitte verteilen und jeden davon mit eigenen Beschreibungen, Überschriften und weiteren Informationen versehen. Das macht die Dokumentation von Code besonders leistungsfähig und flexibel.

Wie Sie Codebeispiele für MDN Web Docs gestalten und formatieren, erfahren Sie in unseren [Richtlinien zur Gestaltung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkungen)

Wenn Sie anhand des Titels auf eine andere MDN-Seite oder einen Abschnitt verweisen, verwenden Sie im Linktext die Groß- und Kleinschreibung eines Satzes, entsprechend dem Seiten- oder Abschnittstitel. Tun Sie dies auch dann, wenn sich die Schreibweise vom verlinkten Titel unterscheidet – möglicherweise ist dessen Groß- und Kleinschreibung nicht korrekt. Setzen Sie keine Anführungszeichen um den Linktext. Verwenden Sie für Verweise auf eine MDN-Seite anhand ihres Titels den folgenden Stil:

- **Richtig**: „Lesen Sie den Leitfaden [Flex-Elemente anordnen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items).“
- **Falsch**: „Lesen Sie den Leitfaden ‚[Flex-Elemente anordnen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)‘.“

Verlinken Sie Abschnitte innerhalb einer Seite einheitlich:

- **Richtig**: „Weitere Informationen finden Sie im Abschnitt [Speicherzuweisung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) des Leitfadens _Speicherverwaltung_.“

Wenn sich der verlinkte Abschnitt auf derselben Seite befindet, können Sie seine Position mit einer beschreibenden Formulierung andeuten.

- **Richtig**: „Dieses Konzept wird im Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) dieses Dokuments ausführlicher beschrieben.“
- **Falsch**: „Dieses Konzept wird im Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient#accessibility) weiter unten ausführlicher beschrieben.“

Auf MDN können Sie Referenzseiten auch mit Makros verlinken. Diese werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) beschrieben. Verwenden Sie beispielsweise das Makro `HTMLElement`, um eine Referenzseite für ein HTML-Element zu verlinken, und das Makro `CSSxRef` für die Referenzseite einer CSS-Eigenschaft.

Ähnliche Regeln für Querverweise gelten in den Abschnitten [Siehe auch](#siehe_auch) am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Fällen zulässig. Entscheiden Sie anhand der Richtlinien in diesem Abschnitt, ob ein externer Link geeignet ist. Pull Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diese Richtlinien nicht einhalten.

Wenn Sie einen externen Link zu den Inhalten von MDNs [Webentwicklung lernen](/de/docs/Learn_web_development) hinzufügen möchten, lesen Sie auch [Schreibrichtlinien für Webentwicklung lernen > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Bevor Sie einen externen Link hinzufügen, sollten Sie grundsätzlich sicherstellen, dass die folgenden Risiken möglichst gering sind:

- Defekte oder veraltete Links
- Der Eindruck einer Empfehlung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Der Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Linkziel verschleiern

> [!NOTE]
> Prüfen Sie vor dem Hinzufügen eines externen Links, ob Sie stattdessen auf Inhalte innerhalb von MDN Web Docs verweisen können. Interne Links lassen sich leichter pflegen und machen MDN Web Docs insgesamt wertvoller für Lesende.

- **Geeignete externe Links**: Geeignete externe Links führen zu relevanten, dauerhaften und allgemein vertrauenswürdigen Ressourcen. Bevorzugen Sie externe Inhalte, die:
  - Einzigartig oder unverzichtbar sind, beispielsweise ein IETF RFC
  - Für eine Quellenangabe, ein Zitat oder eine Danksagung erforderlich sind, beispielsweise im Rahmen einer Creative-Commons-Namensnennung
  - Zum jeweiligen Thema voraussichtlich besser gepflegt werden, als wenn MDN Web Docs die Inhalte selbst übernehmen würde, beispielsweise Versionshinweise eines Anbieters
  - Wie MDN Web Docs quelloffen oder gemeinschaftlich gepflegt sind

- **Ungeeignete externe Links**: Ungeeigneten externen Links fehlt es an Relevanz, Pflege oder Zugänglichkeit, oder sie erschweren Lesenden auf andere Weise den Zugang. Vermeiden Sie Links zu externen Inhalten, die:
  - Allgemein oder unspezifisch sind, beispielsweise die Startseite eines Anbieters statt der passenden Dokumentation
  - Kurzlebig oder ungepflegt sind, beispielsweise eine einmalige Ankündigung
  - Auf eigene Inhalte verweisen oder der Eigenwerbung dienen, beispielsweise Arbeiten der Autorin oder des Autors außerhalb von MDN Web Docs
  - Hinter einer Bezahlschranke liegen, beispielsweise ein teurer Kurs, den sich Hobbyentwickelnde, Studierende oder Menschen in Ländern mit geringeren Einkommen nicht leisten können
  - Nicht barrierefrei sind, beispielsweise ein Video ohne Untertitel

- **Links zur Eigenwerbung oder Spam**: Ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository kann wertvoll sein. Links zu eigenen Ressourcen können jedoch den Eindruck eines Interessenkonflikts erwecken. Überlegen Sie sorgfältig, bevor Sie Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie zum Ziel eines Links eine geschäftliche oder persönliche Beziehung haben, müssen Sie diese in Ihrem Pull Request offenlegen. Tun Sie das nicht, kann Ihre weitere Mitarbeit an MDN Web Docs gefährdet sein.

  Solche Links können mitunter relevant und angemessen sein. Wenn Sie beispielsweise eine Spezifikation redigieren und an der zugehörigen Dokumentation mitarbeiten, ist ein Link zu dieser Spezifikation zu erwarten und zulässig. Sie müssen Ihre Verbindung zum Linkziel jedoch offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Kürzungsdienst wie TinyURL oder Bitly kann lange Links in kurze, leichter merkbare URLs umwandeln, die auch „Kurzlinks“ genannt werden. Allerdings verschleiern solche Links das Ziel der URL. Bei manchen Diensten lässt sich das Ziel nach der Erstellung ändern, was für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die durch URL-Kürzungsdienste von Drittanbietern erstellt wurden und von beliebigen Personen erzeugt werden können. Wenn beispielsweise `https://myshort.link/foobar` eine von einer beliebigen Person erzeugte Kurz-URL ist, die zu `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com`-URL.

<!-- markdownlint-disable search-replace -->

Kurzlinks aus erster Hand, die von denselben Organisationen gepflegt werden wie die Ziel-URLs, sind dagegen erwünscht. `https://bugzil.la` gehört Mozilla, wird von Mozilla betrieben und leitet zu `https://bugzilla.mozilla.org/` weiter, einer Domain, die ebenfalls Mozilla gehört. Verwenden Sie in diesem Fall die kürzere URL, also beispielsweise `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

<!-- markdownlint-enable search-replace -->

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte er eine Überschrift erhalten.
Verwenden Sie die folgenden Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne eine Ebene zu überspringen: zuerst `##`, dann `###` und schließlich `####`. Sie entsprechen den [HTML-Überschriftenelementen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` und `<h4>`.

`##` ist die höchste zulässige Ebene, da `#` dem Seitentitel vorbehalten ist.
Wir empfehlen, nicht mehr als drei Überschriftenebenen unterhalb des Seitentitels zu verwenden. Wenn Sie eine vierte Ebene benötigen, überlegen Sie, ob Sie den Artikel in mehrere kleinere Artikel mit einer Übersichtsseite aufteilen können. Alternativ können Sie die Informationen als Aufzählung darstellen, statt eine Überschrift der vierten Ebene zu verwenden.

Beachten Sie beim Erstellen von Unterüberschriften Folgendes:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in nur ein Unterthema.
  Verwenden Sie entweder mindestens zwei Unterüberschriften oder keine.
- **Verwenden Sie in Überschriften keine Inline-Styles, Klassen oder Makros.** Backticks zur Kennzeichnung von Codebegriffen sind jedoch zulässig, beispielsweise „Die `FooBar`-Schnittstelle verwenden“.
- **Vermeiden Sie direkt aufeinanderfolgende Überschriften.** Auf eine Überschrift sollte nicht unmittelbar eine Unterüberschrift folgen, ohne Text dazwischen.
  Das sieht nicht gut aus und lässt Lesende ohne einleitende Erklärung für den übergeordneten Abschnitt zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einbinden, beachten Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz die Verwendung erlaubt. Bevorzugen Sie Medien mit einer möglichst freizügigen Lizenz wie [CC0](https://wiki.creativecommons.org/wiki/CC0) oder zumindest einer Lizenz, die mit unserer allgemeinen Inhaltslizenz kompatibel ist: der [Creative Commons Attribution-ShareAlike-Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Verarbeiten Sie Bilder mit <https://tinypng.com> oder <https://imageoptim.com>, um die Seitengröße zu verringern.
- Lassen Sie `SVG`-Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) verarbeiten und stellen Sie sicher, dass die `SVG`-Datei am Dateiende eine Leerzeile enthält.
- Jedes Bild muss [aussagekräftigen `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Formatieren und strukturieren Sie Listen auf allen Seiten einheitlich.
Verwenden Sie für einzelne Listeneinträge eine passende Zeichensetzung, unabhängig vom Listenformat.
Wie Sie die Einträge formulieren, hängt jedoch von der Listenart ab, wie die folgenden Abschnitte erläutern. Leiten Sie Listen in beiden Fällen mit einem Satz ein, der ihren Inhalt beschreibt.

- **Aufzählungslisten**: Verwenden Sie Aufzählungslisten, um zusammengehörige, knappe Informationen zu gruppieren. Die Einträge sollten ähnlich aufgebaut sein. Verwenden Sie in Aufzählungslisten die übliche Zeichensetzung: Vollständige Sätze enden mit einem Punkt, Satzfragmente ohne Verb, Subjekt oder beides nicht.

  Enthält ein Listeneintrag mehrere Sätze, muss jeder Satz – auch der letzte – wie in einem Absatz mit einem Punkt enden. Dies ist ein Beispiel für eine richtig aufgebaute Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes aufnehmen:
  >
  > - Eine Bedingung mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung mit einer kurzen Erklärung.
  > - Eine weitere Bedingung mit einer etwas ausführlicheren Erklärung.

  Beachten Sie, dass alle Einträge denselben Satzbau haben. Jeder nennt eine Bedingung, gefolgt von einer kurzen Erklärung, und endet mit einem Punkt.

  Bestehen die Listeneinträge aus unvollständigen Sätzen, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften sind in diesem Szenario hilfreich:
  >
  > - propertyA: Legt die Hintergrundfarbe fest
  > - propertyB: Fügt dem Text einen Schatten hinzu

  Wenn mindestens ein Listeneintrag ein vollständiger Satz ist, setzen Sie nach jedem Eintrag einen Punkt – auch wenn ein Eintrag nur aus drei oder weniger Wörtern besteht. Gestalten Sie möglichst alle Einträge gleich: entweder als vollständige Sätze oder als Satzfragmente.

- **Nummerierte Listen**: Nummerierte Listen dienen vor allem dazu, Schritte einer Anleitung aufzuzählen. Da Anleitungen komplex sein können, ist Klarheit besonders wichtig – vor allem bei längeren Einträgen. Beachten Sie wie bei Aufzählungslisten die üblichen Regeln zur Zeichensetzung. Dies ist ein Beispiel für eine richtig aufgebaute nummerierte Liste:

  > Um eine nummerierte Liste richtig zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, der die Anleitung einführt. Geben Sie den Nutzenden Kontext, bevor die einzelnen Schritte beginnen.
  > 2. Ihre Anleitung schreiben und jeden Schritt in einem eigenen nummerierten Eintrag aufführen.
  >    Die Anleitung kann recht umfangreich sein. Schreiben Sie deshalb klar und achten Sie auf die richtige Zeichensetzung.
  > 3. Nach Abschluss der Anleitung eine kurze Zusammenfassung oder Erklärung des erwarteten Ergebnisses an die nummerierte Liste anschließen.

  Das folgende Beispiel zeigt eine abschließende Erklärung für diese Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, deren Anweisungen zu einer korrekt formatierten nummerierten Liste führen.

  Die Einträge nummerierter Listen lesen sich wie kurze Absätze. Da sie häufig Anweisungen oder einen geordneten Ablauf beschreiben, sollte jeder Eintrag auf einen Schritt beschränkt bleiben.

### Abschnitt „Siehe auch“

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten am Ende einen Abschnitt _Siehe auch_. Er enthält [Querverweise](#cross-references_linking) auf verwandte MDN-Themen und manchmal Links zu passenden externen Artikeln. Ein Beispiel ist der [Abschnitt „Siehe auch“](/de/docs/Web/CSS/Reference/At-rules/@layer#see_also) auf der Seite zu `@layer`.

Stellen Sie die Links in einem Abschnitt „Siehe auch“ grundsätzlich als [Aufzählungsliste](#listen) dar, deren Einträge jeweils aus einer Wortgruppe bestehen. Im Bereich [Webentwicklung lernen](/de/docs/Learn_web_development) auf MDN folgt der Abschnitt „Siehe auch“ dagegen dem Format einer [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists).

Beachten Sie beim Hinzufügen oder Aktualisieren eines Abschnitts „Siehe auch“ die folgenden Richtlinien, damit MDN Web Docs einheitlich bleibt.

#### Linktext

- Der Linktext sollte dem Titel der verlinkten Seite oder des verlinkten Abschnitts entsprechen. Für die Seite [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) mit dem Titel „ARIA states and properties“ lautet der Linktext beispielsweise:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie im Linktext die Groß- und Kleinschreibung eines Satzes, auch wenn der verlinkte Seiten- oder Abschnittstitel anders geschrieben ist. Möglicherweise ist dessen Schreibweise nicht korrekt. Für die Seite [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) lautet ein entsprechend geschriebener Linktext beispielsweise:
  - **Richtig**: [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Verwenden Sie auch für externe Links eine einheitliche Groß- und Kleinschreibung wie in einem Satz, selbst wenn der Zielartikel eine andere Schreibweise verwendet. Ausgenommen sind Buchtitel.
- Auf MDN können Sie optional ein Makro verwenden, um eine Seite zu verlinken. Das wird im Abschnitt [Referenzseiten verlinken](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) auf der Seite _Häufig verwendete Makros_ erläutert. Das Makro versieht den Begriff im Linktext mit einer Codeformatierung, wie das nächste Beispiel zeigt.
- Am Anfang eines Listeneintrags ist kein englischer Artikel („A“, „An“, „The“) erforderlich. Am Ende steht kein Satzzeichen, weil der Eintrag stets aus einem Begriff oder einer Wortgruppe besteht.
  - **Richtig**: {{cssxref("revert-layer")}}
  - **Falsch**: Das Schlüsselwort {{cssxref("revert-layer")}}.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Formatieren Sie Schlüsselwörter und Literale im Linktext wie in den vorherigen Beispielen mit Backticks (`` ` ``), auch wenn Seiten- und Abschnittstitel nicht so formatiert werden. Für die Seite mit dem Titel „Array() constructor“ lautet der Linktext beispielsweise [`Array()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie beschreibenden Text um einen Link kurz. Falls Sie eine Beschreibung hinzufügen, setzen Sie sie nach den Linktext und einen Doppelpunkt. Formulieren Sie sie als Wortgruppe ohne abschließendes Satzzeichen. Stellen Sie den verlinkten Text an den Anfang, damit die Linkliste leicht überflogen werden kann.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zur Gestaltung von Kontrollkästchen
- Verwenden Sie vor dem letzten Element einer Aufzählung keine Konjunktion wie „und“.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Weitere farbbezogene Eigenschaften
- Nennen Sie bei externen Links nach Möglichkeit und sofern sinnvoll die Quellwebsite sowie das Erscheinungsjahr oder das Jahr der letzten Aktualisierung in Klammern. So erkennen Lesende schon vor dem Öffnen, wohin der Link führt. Das Datum hilft ihnen, die Aktualität des Artikels einzuschätzen, und unterstützt MDN-Mitwirkende dabei, Links zu lange nicht aktualisierten Artikeln zu prüfen. Bei Links zu Wikipedia-Artikeln können Sie das Datum weglassen. Der folgende Eintrag zeigt, wie ein Link zum externen Artikel [Top-level await](https://v8.dev/features/top-level-await) im Abschnitt „Siehe auch“ um Quelle und Jahr ergänzt wird:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch die Namen der Autorinnen und Autoren nennen. Einige Beispiele finden Sie im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling). Bei verlinkten Blogbeiträgen oder GitHub-Repositories sollten Sie keine Namen von Autorinnen und Autoren hinzufügen.

#### Reihenfolge der Links

- Führen Sie Links zu MDN-Referenzseiten zuerst auf, gefolgt von Links zu verwandten Leitfäden und Tutorials. Diese Reihenfolge soll vor allem das Überfliegen der Liste erleichtern.
- Enthält eine Liste interne und externe Links, nennen Sie zuerst die internen und anschließend die externen.
- Ordnen Sie Links innerhalb der internen und externen Gruppen alphabetisch oder vom Einfachen zum Fortgeschrittenen – je nachdem, was im Kontext sinnvoller ist.

### Unterseiten

Wenn Sie mehrere Artikel zu einem Thema oder Themenbereich hinzufügen, erstellen Sie üblicherweise zuerst eine Übersichtsseite und anschließend Unterseiten für die einzelnen Artikel.
Die Übersichtsseite sollte mit ein bis zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben. Danach sollte sie die Unterseiten mit jeweils einer kurzen Beschreibung auflisten.
Mit einigen unserer Makros können Sie Seiten automatisch in diese Liste einfügen.

Betrachten Sie beispielsweise den [JavaScript](/de/docs/Web/JavaScript)-Leitfaden, der wie folgt aufgebaut ist:

- [JavaScript/Leitfaden](/de/docs/Web/JavaScript/Guide) – Hauptseite mit Inhaltsverzeichnis
- [JavaScript/Leitfaden/JavaScript-Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Leitfaden/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Leitfaden/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Vermeiden Sie es nach Möglichkeit, Ihren Artikel auf der obersten Hierarchieebene anzulegen. Das verlangsamt die Website und erschwert die Suche und Navigation.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom „Slug“ unterscheiden. Der Slug ist der Teil der Seiten-URL nach `<locale>/docs/`. Beachten Sie beim Festlegen eines Slugs die folgenden Richtlinien:

- Halten Sie Slugs kurz. Wenn Sie eine neue Hierarchieebene erstellen, sollte ihr Bestandteil im Slug nur ein oder zwei Wörter umfassen.
- Trennen Sie bei Slug-Bestandteilen aus mehreren Wörtern die Wörter mit Unterstrichen, beispielsweise `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Verwenden Sie für jeden Bestandteil eines Slugs die Groß- und Kleinschreibung eines Satzes, wie bei `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel erscheinen in Suchergebnissen und strukturieren außerdem die Seitenhierarchie in der Navigationsleiste oben auf der Seite. Wie im Abschnitt [Slugs](#slugs) erläutert, kann sich ein Seitentitel vom Slug unterscheiden.

Beachten Sie beim Schreiben von Titeln die folgenden Richtlinien:

- **Groß- und Kleinschreibung**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften wie Sätze geschrieben werden: Nur das erste Wort und Eigennamen erhalten einen Großbuchstaben. Verwenden Sie nicht die englische Schreibweise von Überschriften, bei der mehrere Wörter großgeschrieben werden:
  - **Richtig**: „A new method for creating JavaScript rollovers“
  - **Falsch**: „A New Method for Creating JavaScript Rollovers“

  Viele ältere Seiten wurden erstellt, bevor diese Stilregel eingeführt wurde. Sie können sie bei Bedarf aktualisieren. Wir passen sie nach und nach an.

- **Allgemeine Richtlinien**: Zu den ersten Schritten beim Schreiben gehört die Entscheidung, was Sie dokumentieren und wie Sie die Inhalte strukturieren möchten. Ein Inhaltsverzeichnis kann Ihnen helfen, die Reihenfolge festzulegen. Behandeln Sie zuerst einfache und anschließend komplexere und fortgeschrittene Konzepte. Erläutern Sie zunächst die Grundlagen und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie beim Schreiben von Titeln für Seiten, Abschnitte und Unterabschnitte Folgendes:
  - **Gehen Sie von höheren zu niedrigeren Ebenen**: Wechseln Sie, wie im Abschnitt [Überschriftenebenen](#überschriftenebenen) beschrieben, von der höheren Ebene `##` zu niedrigeren Ebenen bis `####`, ohne eine Ebene zu überspringen. Verwenden Sie höhere Überschriftenebenen für allgemeine einleitende Themen und niedrigere Ebenen für spezifischere Themen.
  - **Gruppieren Sie logisch**: Ordnen Sie zusammengehörige Unterabschnitte logisch unter einer übergeordneten Überschrift an. Das Benennen der einzelnen Abschnitte kann Ihnen dabei helfen.
  - **Halten Sie Titel kurz**: Kurze Titel lassen sich im Text und im Inhaltsverzeichnis leichter überfliegen.
  - **Formulieren Sie Titel konkret**: Der Titel sollte zeigen, welche Informationen der Abschnitt enthält. Verwenden Sie für einen Abschnitt über HTML-Elemente beispielsweise „HTML-Elemente“ statt „Einleitung“ oder „Überblick“.
  - **Beschränken Sie Titel auf ein Thema**: Ein Titel sollte ein Ziel, eine Idee oder ein Konzept benennen, das im Abschnitt behandelt wird. Vermeiden Sie deshalb möglichst die Konjunktion „und“ im Titel.
  - **Verwenden Sie einen parallelen Aufbau**: Formulieren Sie Titel auf derselben Überschriftenebene ähnlich. Wenn ein Titel auf Ebene `###` beispielsweise im Englischen eine Verlaufsform wie „Installing“ verwendet, sollten die anderen Titel dieser Ebene möglichst ebenfalls solche Formen verwenden. Beginnt ein Titel mit einem Verb im Imperativ wie „Use“ oder „Configure“, sollten die anderen Titel dieser Ebene ebenfalls so beginnen.
  - **Wiederholen Sie keine Begriffe aus übergeordneten Überschriften**: Wiederholen Sie den Titel einer höheren Ebene nicht in untergeordneten Titeln. Nennen Sie einen Unterabschnitt im Abschnitt „Kommas“ beispielsweise „Nach einleitenden Nebensätzen“ statt „Kommas nach einleitenden Nebensätzen“.
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie englische Artikel wie „a“, „an“ oder „the“ am Titelanfang.
  - **Ergänzen Sie einleitende Informationen**: Fügen Sie nach einem Titel etwas einleitenden Text hinzu, der erklärt, was der Abschnitt behandelt.

## Siehe auch

- [Richtlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Codebeispielen für Shell-Prompts](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Weitere Stilrichtlinien

Wenn Sie Fragen zu Sprachgebrauch und Stil haben, die dieser Leitfaden nicht beantwortet, empfehlen wir den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/).

### Sprache, Grammatik und Rechtschreibung

Wenn Sie Ihre Fähigkeiten im Schreiben und Redigieren verbessern möchten, können die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Website zum englischen Sprachgebrauch
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Fundierte, aber leicht verständliche, beleggestützte Empfehlungen; besonders hilfreich für Nichtmuttersprachlerinnen und Nichtmuttersprachler, insbesondere bei der Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
