---
title: Schreibstil-Leitfaden
short-title: Style guide
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien sollen die Konsistenz von Sprache und Stil auf der gesamten Website sicherstellen. Dennoch sind wir mehr an den Inhalten als an deren Formatierung interessiert, fühlen Sie sich also nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um sich an diesen Leitfaden zu halten. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine Content-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für die englischsprachige Dokumentation. Andere Sprachen können (und sind willkommen) eigene Stil-Leitfäden zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteamseite veröffentlicht werden. Dennoch sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden sollten, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser möglicherweise benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte geben die Empfehlungen zur Erreichung dieses Ziels:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Fügen Sie relevante Beispiele ein](#fügen_sie_relevante_beispiele_ein)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für die Inhalte, die Sie schreiben, im Auge. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerkbegriffe eingehen wie die typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind klar, knapp und konsistent zu schreiben.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze, indem Sie sich auf eine Idee pro Satz beschränken. Definieren Sie neue Begriffe, bevor Sie sie verwenden, wobei Sie die Zielgruppe im Auge behalten.
- **Knapp**: Es ist wichtig, zu wissen, wie viel Sie sagen möchten, wenn Sie ein Dokument schreiben. Wenn Sie zu viele Details bereitstellen, wird die Seite langweilig zu lesen und wird selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie den gleichen Wortlaut konsequent auf der gesamten Seite und über mehrere Seiten hinweg verwenden.

### Fügen Sie relevante Beispiele ein

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptuelle und verfahrensmäßige Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird, und um Randfälle zu klären, die existieren können.
Sie können auch Beispiele verwenden, um Lösungen für gängige Aufgaben und Lösungen für Probleme zu demonstrieren, die auftreten können.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der Einleitungstext vor der ersten Überschrift die Informationen, die die Seite abdecken wird, und vielleicht das, was die Leser nach dem Durchgehen des Inhalts erreichen können, angemessen zusammenfasst. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Text den Leser über die Themen informieren, die behandelt werden, sowie das erforderliche Wissen, das vom Leser erwartet wird, falls vorhanden. Der Einleitungstext sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den entsprechenden Informationen, und sollte Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Einführungsbeispiel ist viel zu kurz. Es lässt zu viele Informationen aus, wie zum Beispiel, was es genau bedeutet, Text zu "umrahmen", wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, ist aber jetzt viel zu lang.
  Es sind zu viele Details enthalten, und der Text geht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben werden.

  > Bei Aufruf umrahmt die Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** die Zeichen in der angegebenen Zeichenfolge, beginnend an den angegebenen Koordinaten, mit der aktuellen Stiftfarbe.
  > Im Fachjargon der Computergrafik bedeutet "umrahmen" von Text, die Umrisse der Zeichen in der Zeichenfolge zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe auszufüllen.
  >
  > Der Text wird mit der aktuellen Schrift des Kontexts gezeichnet, wie im `font`-Eigenschaft des Kontexts [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenfolge beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte der Zeichenfolge liegt.
  > Wenn der Wert `"left"` ist, wird die Zeichenfolge beginnend am angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenfolge in Pixeln angeben können.
  > Wenn Sie diesen Parameter angeben, wird der Text beim Zeichnen horizontal gestaucht oder skaliert (oder anderweitig angepasst), um in einen so breiten Raum zu passen.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen einer Zeichenfolge mit Farbe auszufüllen anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Hier sehen wir eine viel bessere Übersicht über die `strokeText()`-Methode.

  > Die Methode **`strokeText()`** des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrahmt (zeichnet die Umrisse) die Zeichen einer angegebenen Zeichenfolge, die an der durch die angegebenen X- und Y-Koordinaten angegebenen Position verankert ist.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite "Zeichnungsgrafiken" sowie unseren Hauptartikel zum Thema [Texte Zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein großes und vielfältiges Publikum.
Wir empfehlen dringend, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gängigen in der Dokumentation verwendeten Begriffen:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Verwenden Sie statt **dummy** das Wort **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** nicht in der Dokumentation verwenden müssen; falls dies jedoch der Fall ist, ziehen Sie in Betracht, **fantastic** stattdessen zu verwenden.

Es ist am besten, in jedem Text genderneutrale Sprache zu verwenden, bei dem das Geschlecht für das Thema unerheblich ist.
Wenn Sie z. B. über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; aber wenn das Subjekt eine Person beider Geschlechter ist, ist "er"/"sein" nicht angebracht.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "A confirmation dialog asks the user if he wants to allow the web page to make use of his webcam."
- **Falsch**: "A confirmation dialog asks the user if she wants to allow the web page to make use of her webcam."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "A confirmation dialog asks the user if they want to allow the web page to make use of their webcam."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des dritten Person Plurals, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die genderneutralen Pronomen umfassen "they," "them", "their," und "theirs".

Eine weitere Möglichkeit ist es, die Benutzer in den Plural zu setzen:

- **Richtig**: "A confirmation dialog asks the users if they want to allow the web page to make use of their webcams."

Die beste Lösung ist natürlich, die Pronomen zu überarbeiten und eliminieren:

- **Richtig**: "A confirmation dialog requesting the user's permission for webcam access appears."
- **Richtig**: "A confirmation dialog box that asks the user for permission to use the webcam appears."

Dieses letzte Beispiel, wie man das Problem behandelt, ist wahrscheinlich besser.
Es ist nicht nur grammatikalisch richtiger, sondern beseitigt auch einige der Komplexitäten, die mit dem Umgang mit Geschlechtern in verschiedenen Sprachen einhergehen, die möglicherweise unterschiedliche Geschlechterregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch Übersetzer erleichtern.

### Schreiben Sie mit SEO im Hinterkopf

Das primäre Ziel jeglichen Schreibens auf MDN Web Docs sollte immer sein, über offene Webtechnologie zu informieren und zu lehren, damit Entwickler schnell lernen können, was sie wollen, oder die kleinen Details finden, die sie wissen müssen, um ihren Code zu perfektionieren. Es ist jedoch wichtig, dass sie in der Lage sind, das Material zu _finden_, das wir schreiben. Wir können dies erreichen, indem wir die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben im Hinterkopf haben.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen an die Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indizieren können, damit Leser leicht finden, was sie brauchen. Die SEO-Richtlinien umfassen die Gewährleistung, dass jede Seite, an der Autoren und Redakteure arbeiten, gut gestaltet, geschrieben und mit Markup versehen ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel richtig zu indexieren.

Die folgende Checkliste sollte beim Schreiben und Überprüfen von Inhalten berücksichtigt werden, um zu gewährleisten, dass die Seite und ihre Nachbarn ordnungsgemäß von Suchmaschinen indiziert werden:

- **Sicherstellen, dass Seiten nicht zu ähnlich sind**: Wenn der Textinhalt auf verschiedenen Seiten ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten über dasselbe Thema sind, auch wenn sie es nicht sind.
  Wenn ein Interface beispielsweise die Eigenschaften `width` und `height` hat, kann es leicht passieren, dass der Text auf den beiden Seiten, auf denen diese beiden Eigenschaften dokumentiert werden, überraschend ähnlich ist, mit nur wenigen ausgetauschten Worten und dem gleichen Beispiel. Dies erschwert es Suchmaschinen, zu wissen, welche Seite welche ist, und sie teilen sich den Pagerank, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, die Ihnen dabei helfen können:

  - **Erklären Sie mehr einzigartige Konzepte**: Betrachten Sie Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man denkt. Beispielsweise könnte man beim Dokumentieren der Eigenschaften `width` und `height` über die Unterschiede in der Nutzung von horizontalem und vertikalem Raum schreiben und eine Diskussion über die geeigneten Konzepte führen. Vielleicht können Sie die Verwendung von `width` in Bezug auf das Platzieren eines Seitenleiste erwähnen, während `height` zum Handhaben des vertikalen Scrollens oder der Fußzeilen verwendet wird. Auch Informationen zu Fragen der Barrierefreiheit einzubringen, ist eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in solchen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele möglicherweise beide (oder alle) ähnlichen Methoden oder Eigenschaften bereits von Anfang an verwenden, sodass keine wesentlichen Änderungen bei einer Wiederverwendung erforderlich sind. Schmeißen Sie also das Beispiel heraus und schreiben Sie ein neues, oder stellen Sie zumindest mehrere Beispiele bereit, von denen mindestens einige unterschiedlich sind.
  - **Fügen Sie Beschreibungen der Beispiele hinzu**: Sowohl eine Übersicht darüber, was das Beispiel macht, als auch eine Erläuterung, wie es funktioniert, sollten in einem angemessenen Detailgrad für das Thema und das Zielpublikum enthalten sein.

  Der einfachste Weg, zu vermeiden, dass man zu ähnlich ist, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Sicherstellen, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (in der SEO-Sprache als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt nicht) katalogisieren. Zu kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie sollte sichergestellt werden, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Künstlich sollte eine Seite jedoch nicht verlängert werden, aber behandeln Sie diese Richtlinie als Mindestziel.

  Hier sind einige grundlegende Richtlinien, die Ihnen helfen können, Seiten zu erstellen, die genug Inhalt haben, um richtig durchsuchbar zu sein, ohne sie mit unnötigem Text zu füllen:

  - **Stub-Seiten vermeiden**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl es sie gibt, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für den [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und geeignete Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt werden. Stellen Sie sicher, dass alle Ausnahmen abgedeckt sind – dies ist ein besonders häufiger Bereich, in dem Inhalte fehlen.
  - **Alle Konzepte vollständig ausgearbeitet sicherstellen**: Es ist leicht, eine kurze Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser kennen sollte?
  - **Beispiele hinzufügen**: Es sollten Beispiele sein, die alle Parameter oder zumindest die Parameter (oder Eigenschaften oder Attribute) abdecken, die Benutzer im Bereich von Anfänger bis Fortgeschrittene wahrscheinlich verwenden, sowie alle fortgeschrittenen, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht beginnen, was das Beispiel tun wird, welches zusätzliche Wissen benötigt wird, es zu verstehen, und so weiter. Nach dem Beispiel (oder unterbrochen durch Teile des Beispiels) sollte Text stehen, der erklärt, wie der Code funktioniert. Verzichten Sie nicht auf die Details oder die Behandlung von Fehlern in Beispielen. Denken Sie daran, dass Benutzer Ihr Beispiel _kopieren_ und _einfügen_ werden, um es in ihren eigenen Projekten zu verwenden, und Ihr Code wird auf Produktionsseiten verwendet werden! Siehe unsere [Code-Beispiel-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) für weitere nützliche Informationen.
  - **Anwendungsfälle erklären**: Wenn es besonders häufige Anwendungsfälle für die beschriebene Funktion gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie allen Bildern und Diagrammen geeignete [`alt`](/de/docs/Web/HTML/Element/img#alt) Texte hinzu. Dieser Text sowie Bildunterschriften für Tabellen und andere Figuren sind wichtig, weil Suchmaschinen Crawler keine Bilder durchsuchen können, und `alt`-Texte sagen den Suchmaschinen Crawlern, welcher Inhalt in den eingebetteten Medien enthalten ist.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder nicht mit der Funktion in Zusammenhang stehende Schlüsselwörter einzufügen, um die Suchmaschinenplatzierungen zu manipulieren; dieses Verhalten ist leicht zu erkennen und wird in der Regel bestraft.
    > Ebenso **nicht** wiederholendes, unnötiges Material oder Blöcke von Schlüsselwörtern innerhalb der tatsächlichen Seite hinzufügen, um die Größe der Seite und das Suchranking zu verbessern. Dies schadet der Lesbarkeit der Inhalte und unseren Suchergebnissen mehr.

- **Fokussieren Sie sich auf den Themeninhalt**: Es ist weitaus besser, Inhalte um das Thema der Seite zu schreiben als um ein bestimmtes Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einfügen könnten; in der Tat sammeln viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (unterschiedlich zwischen kurzen, mittleren und langen Schlüsselwörtern), die je nach Länge in ihrem Artikel enthalten sein sollen. Dies diversifiziert Ihre Formulierung und führt zu weniger Wiederholungen.

## Schreibstil

Neben dem Verfassen grammatikalisch korrekter Sätze auf Englisch empfehlen wir Ihnen, diese Richtlinien zu befolgen, um Inhalte über MDN Web Docs hinweg konsistent zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralisierungen](#pluralisierungen)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das unter Verwendung des ersten Buchstabens jedes Wortes eines Ausdrucks erstellt wurde. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite erläutern Sie Akronyme, die den Benutzern wahrscheinlich unbekannt sind. Bei Zweifeln, erweitern Sie den Begriff. Noch besser ist es, ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary) Eintrag zu verlinken, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) is Mozilla's XML-based language..."
  - **Falsch**: "XUL is Mozilla's XML-based language..."

- **Großschreibung und Punkte**: Verwenden Sie bei allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN", Großbuchstaben und lassen Sie Punkte weg.

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Anmerkungen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  - **Richtig**: Web browsers (e.g., Firefox) can be used ...
  - **Falsch**: Web browsers e.g. Firefox can be used ...
  - **Falsch**: Web browsers, e.g. Firefox, can be used ...
  - **Falsch**: Web browsers, (eg: Firefox) can be used ...

  Im regulären Text (d.h. Text außerhalb von Anmerkungen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... web browsers, and so on.
  - **Falsch**: ... web browsers, etc.

  - **Richtig**: Web browsers such as Firefox can be used ...
  - **Falsch**: Web browsers e.g. Firefox can be used ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente lateinischer Abkürzungen zusammen:

  | Abkürzung | Latein           | Englisch                |
  | --------- | ---------------- | ----------------------- |
  | cf.       | _confer_         | compare                 |
  | e.g.      | _exempli gratia_ | for example             |
  | et al.    | _et alii_        | and others              |
  | etc.      | _et cetera_      | and so forth, and so on |
  | i.e.      | _id est_         | that is, in other words |
  | N.B.      | _nota bene_      | note well               |
  | P.S.      | _post scriptum_  | postscript              |

  > [!NOTE]
  > Überlegen Sie sich immer, ob es wirklich sinnvoll ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser ihre Bedeutungen entweder verwechseln oder nicht verstehen werden.
  >
  > Stellen Sie auch sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden, dies zu tun. Verwechseln Sie zum Beispiel nicht "e.g." mit "i.e.", was ein häufiger Fehler ist.

- **Plurale von Abkürzungen und Akronymen**: Für die Plurale von Abkürzungen und Akronymen, fügen Sie _s_ hinzu. Verwenden Sie niemals einen Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Abkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text, verwenden Sie die ausgeschriebene Form "versus".

  - **Richtig**: this vs. that
  - **Falsch**: this v. that
  - **Richtig**: this versus that

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (allein oder als Modifikator) und "internet" kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, sodass Sie auf MDN möglicherweise viele Instanzen von "Web" und "Internet" finden.
> Sie können diese ändern, während Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel ausschließlich zur Änderung der Großschreibung zu bearbeiten.

Tastaturtasten sollten mit Satzmäßiger Großschreibung und nicht in Großbuchstaben geschrieben werden.
Zum Beispiel, "<kbd>Enter</kbd>" statt "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie zum Beispiel Markennamen, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Codesyntax verlangt eine Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Warenzeichen der Oracle Corporation, sollte immer wie markenrechtlich geschützt geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert zu einem lockeren Stil, daher können Sie Kontraktionen (z.B. "don't", "can't", "shouldn't") verwenden, wenn Sie möchten.

### Zahlen und Ziffern

- **Kommas**: In durchlaufendem Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht einschließlich Daten in Codebeispielen) verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format JJJJ/MM/TT verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plurale von Ziffern**: Fügen Sie ein "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierungen

Verwenden Sie die englischen Stil-Plurale, nicht die lateinisch- oder griechisch-beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „gebogene“ Anführungszeichen und Anführungszeichen. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir eines von beiden für Konsistenz wählen müssen. Wenn gebogene Anführungszeichen oder Apostrophe in Code-Snippets auftauchen, selbst in Inline-Snippets, könnten Leser diese kopieren und einfügen und erwarten, dass sie funktionieren (was sie nicht tun).

- **Richtig**: Please don't use "curly quotes."
- **Falsch**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Kommas

Die nachstehende Liste beschreibt einige der häufigsten Situationen, in denen wir auf die Kommasetzung achten müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine Nebensatz, der normalerweise am Anfang eines Satzes steht. Verwenden Sie ein Komma nach einer einleitenden Klausel, um sie von der folgenden unabhängigen Klausel zu trennen.

  - Beispiel 1:
    - **Richtig**: "In this example, you will see how to use a comma."
    - **Falsch**: "In this example you will see how to use a comma."
  - Beispiel 2:
    - **Richtig**: "If you are looking for guidelines, you have come to the right place."
    - **Falsch**: "If you are looking for guidelines you have come to the right place."
  - Beispiel 3:
    - **Richtig**: "On mobile platforms, you tend to get a numeric keypad for entering data."
    - **Falsch**: "On mobile platforms you tend to get a numeric keypad for entering data."

- **Vor Konjunktionen**: Das Seriellkomma (auch Oxford-Komma genannt) ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Seriellkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "I will travel on trains, planes, and automobiles."
  - **Falsch**: "I will travel on trains, planes and automobiles."

  Verwenden Sie kein Komma vor "and" und "or" in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "My dog is cute and smart."
  - **Falsch**: "My dog is cute, and smart."

  Verwenden Sie ein Komma vor den Konjunktionen "and", "but", und "or", wenn sie zwei unabhängige Klauseln verbinden. Wenn der Satz jedoch sehr lang oder komplex wird, sollten Sie erwägen, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "You can perform this step, but you need to pay attention to the file setting."
    - **Falsch**: "You can perform this step but you need to pay attention to the file setting."
  - Beispiel 2:
    - **Richtig**: "My father is strict but loving."
    - **Falsch**: "My father is strict, but loving."

- **Vor "that" und "which"**: Eine einschränkende Klausel ist wesentlich für die Bedeutung des Satzes und muss nicht durch Kommas vom restlichen Satz abgetrennt werden. Eine einschränkende Klausel wird normalerweise durch "that" eingeführt und sollte nicht von einem Komma vorangestellt werden.

  - **Richtig**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Falsch**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  Ein nicht einschränkender Abschnitt bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nicht einschränkender Abschnitt wird normalerweise durch "which" eingeführt und sollte von einem Komma vorangestellt werden.

  - **Richtig**: "You write a policy, which is an allowed list of origins for each feature."
  - **Falsch**: "You write a policy which is an allowed list of origins for each feature."

- **Vor "such as"**: Wenn "such as" Teil einer nicht einschränkenden Klausel ist und der verbleibende Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "such as".

  - **Richtig**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Falsch**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  Das folgende Beispiel zeigt, wann kein Komma mit "such as" verwendet wird. Hier ist die Klausel mit "such as" wesentlich für die Bedeutung des Satzes.

  - **Richtig**: "Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **Falsch**: "Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanische Englisch-Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als abweichende Schreibweise oder Hauptsächlich in einer nicht-amerikanischen Form von Englisch verwendet vermerkt.
Wenn Sie beispielsweise das Wort "behaviour" (mit einem zusätzlichen _u_ im Vergleich zur amerikanischen Standardform) nachschlagen, finden Sie den Hinweis "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine abweichende Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es läuft jede Woche und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal über den folgenden Befehl ausführen:

```bash
npx cspell --no-progress --gitignore --config .vscode/cspell.json "**/*.md"
```

Im Repository führen wir mehrere Wortlisten, die sich im Verzeichnis [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden, die zugelassene Wörter enthalten, die sich nicht im Standardwörterbuch befinden. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber von der Rechtschreibprüfung gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter Fachbegriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", um auf HTML- und XML-Elemente zu verweisen, anstatt "tag". Das Element soll in spitzen Klammern "<>" eingeschlossen werden und mit Backticks (\`) gestylt werden. Beispielsweise wird die Verwendung von \<input\> in Backticks es wie `<input>` stilisieren, was erwartet wird.

  - **Richtig**: the `<span>` element
  - **Falsch**: the span tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element stilisiert, die spitzen Klammern "<>" hinzufügt sowie einen Link zu seiner Referenzseite hinzufügt.

  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Quellcode im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" zur Konsistenz wann immer möglich.

- **Benutzerschnittstellenaktionen**: In Aufgabenfolgen benennen Sie Benutzerschnittstellenaktionen im Imperativ. Identifizieren Sie das Benutzerelement durch seinen Bezeichner und Typ.

  - **Richtig**: "Click the Edit button."
  - **Falsch**: "Click Edit."

### Stimme

Auch wenn die aktive Stimme bevorzugt wird, ist die passive Stimme auch akzeptabel, angesichts des informellen Gefühls unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenelemente

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite befolgt werden sollten, wie Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Cross-Referenzen (verlinken)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Kurzlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe auch Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste stellt einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs dar:

- Jedes Beispiel sollte beinhalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift zur Beschreibung des Szenarios, das durch das Codebeispiel demonstriert wird. Beispielsweise, "Using offset printing" und "Reverting to style in previous layer".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispiel, die die Besonderheiten des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Beispielsweise: "In the example below, two cascade layers are defined in the CSS, `base` and `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispiel, die das Ergebnis und die Funktionsweise des Codes beschreibt.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax der Funktion demonstrieren und wie sie verwendet wird, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler die Funktion möglicherweise verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile aufzuteilen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass der gesamte Code der Beispiele, der denselben Typ (HTML, CSS und JavaScript) hat, vor der Ausführung des Beispiels zusammengefügt wird. Dies ermöglicht es Ihnen, den Code in mehrere Segmente aufzuteilen, jeweils optional mit eigenen Beschreibungen, Überschriften usw. Dies macht die Dokumentation von Code unglaublich leistungsfähig und flexibel.

Um mehr über das Styling oder die Formatierung von Codebeispielen für MDN Web Docs zu erfahren, siehe [Richtlinien zum Stil von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Cross-Referenzen (verlinken)

Wenn Sie auf eine andere Seite oder den Abschnitt einer Seite auf MDN mit ihrem Titel referenzieren, folgen Sie der Satzstrukturierung im Linktext (entspricht dem Titel der Seite oder des Abschnitts). Verwenden Sie die Satzstrukturierung im Linktext, auch wenn sie sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet (es könnte sein, dass die auf der Seite oder im Abschnitt verwendete Strukturierung falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN mit ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "See the [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) guide."
- **Falsch**: "See the "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" guide."

Folgen Sie einem ähnlichen Stil beim Verlinken auf einen Abschnitt auf einer Seite, wie unten gezeigt:

- **Richtig**: "For more information, see the [Allocation in JavaScript](/de/docs/Web/JavaScript/Memory_management#allocation_in_javascript) section on the _Memory management_ page."

Wenn der Abschnitt, den Sie verlinken, sich auf derselben Seite befindet, können Sie mit den Worten "above" oder "below" auf den Standort des Abschnitts hinweisen.

- **Richtig**: "This concept is described in more detail in the [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) section below."

Sie können auch einen Teil eines Satzes verlinken, um auf einen Artikel oder den Abschnitt eines Artikels zu verweisen. Achten Sie darauf, beschreibende Phrasen als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite zu geben.

- **Richtig**: "Learn more about [how to order flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Click [here](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) to learn more."
- **Falsch**: "Read [this article](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) to learn more."

Auf MDN können Sie auch ein Makro verwenden, um auf eine Referenzseite zu verlinken. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Cross-Referenzierungsrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind in spezifischen Situationen auf MDN Web Docs erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Ihre Pull-Request zum Hinzufügen eines externen Links wird abgelehnt, wenn sie nicht den hier beschriebenen Richtlinien entspricht.

Im Allgemeinen müssen Sie, wenn Sie eine externe Verlinkung in Betracht ziehen, sicherstellen, dass ein minimales Risiko hinsichtlich der folgenden Punkte besteht:

- Gebrochene oder veraltete Links
- Anschein von Befürwortung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zu nutzen, um Spam zu verbreiten
- Kurzlinks, die das Ziel des Links verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, überlegen Sie, ob Sie Inhalte innerhalb von MDN Web Docs querverweisen. Interne Links sind leichter zu pflegen und erhöhen den Wert der gesamten MDN Web Docs für die Leser.

- **Gute externe Links**: Gute externe Links bringen Leser zu Ressourcen, die relevant, dauerhaft und weithin vertrauenswürdig sind. Sie sollten es vorziehen, Links zu externen Inhalten hinzuzufügen, die:

  - Einzigartig oder unersetzlich sind (z. B. ein IETF RFC)
  - Notwendig für die Zitation, Anerkennung oder Anerkennung der Rechte (z. B. als Teil einer Creative Commons-Bildnachweis)
  - Wahrscheinlicher für das Thema gepflegt werden als solche Inhalte in MDN Web Docs selbst zu integrieren (z. B. die Versionshinweise eines Anbieters)
  - Wie MDN Web Docs selbst Open Source oder gemeinschaftsorientiert sind

- **Schlechte externe Links**: Schlechte externe Links mangeln an Relevanz, Wartungsfreundlichkeit, Zugänglichkeit oder stellen auf andere Weise Barrieren für Leser dar. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Allgemein oder unspezifisch sind (z. B. die Startseite eines Anbieters, anstatt der dazugehörigen Dokumentation)
  - Vergänglich oder ungewartet sind (z. B. eine einmalige Ankündigung)
  - Selbstverbindend oder selbstfördernd sind (z. B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Bezahlschranken aufweisen (z. B. einen teuren Kurs, der außerhalb der Reichweite von Freizeitbenutzern, Studenten oder Lesern in Ländern mit niedrigem Einkommen liegt)
  - Unzugänglich sind (z. B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogbeitrag, Vortrag auf einer Konferenz oder GitHub-Repository von Wert sind, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erzeugen. Denken Sie zweimal nach, bevor Sie Links zu Ressourcen setzen, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Request offenlegen. Das Versäumnis, dies zu tun, könnte Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie zum Beispiel der Herausgeber einer Spezifikation sind und zur Dokumentation dieser Spezifikation beitragen, dann wird erwartet und akzeptiert, dass Sie auf diese Spezifikation verlinken. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleinere, leicht zu merkende URLs (auch bekannt als "Shortlinks") zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Bei bestimmten Shortenern kann das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über von Dritten generierte URL-Shortener erstellt wurden. Wenn `https://myshort.link/foobar` beispielsweise eine vom Benutzer erzeugte Short-URL ist, die zu `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com`-URL.

Ermutigt werden jedoch erstens Partei-Shortener, die von den Organisationen gepflegt werden, die auch die Ziel-URLs pflegen. `https://bugzil.la` gehört Mozilla und wird von Mozilla betrieben und ist ein URL-Shortener, der zu `https://bugzilla.mozilla.org/` umleitet, das ebenfalls eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Verwenden Sie beispielsweise `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt startet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in abnehmender Reihenfolge, ohne Stufen zu überspringen: `##`, dann `###`, und dann `####`; diese Übersetzungen zu den [HTML-Überschrift-Elementen](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags, jeweils.

`##` ist die höchste Stufe, die erlaubt ist, da `#` für den Seitentitel reserviert ist.
Wir empfehlen nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie der Meinung sind, dass eine vierte Überschriftenebene notwendig ist, sollten Sie den Artikel in mehrere kleinere Artikel mit einer Übersichtsseite aufteilen. Alternativ, sehen Sie, ob Sie die Informationen in Aufzählungspunkten darstellen können, um eine Ebene vier Überschrift zu vermeiden.

Behalten Sie die folgenden Punkte im Kopf, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es sind entweder zwei oder mehr Unterüberschriften oder keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Code-Begriffe anzuzeigen (z. B. "Using `FooBar` interface").
- **Erstellen Sie keine "Hüpfenden Überschriften".** Das sind Überschriften, die unmittelbar von einer Unterüberschrift gefolgt werden, ohne dass Texterklärung dazwischen ist.
  Das sieht nicht gut aus und lässt Leser ohne einen erklärenden Text zu Beginn des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz es Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr freizügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder zumindest mit unserer allgemeinen Inhaltslizenz – [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) – kompatibel sind.
- Für Bilder, schicken Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG`-Datei am Ende der Datei eine Leerzeile hat.
- Jedes Bild muss [einen beschreibenden `alt` Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) enthalten.

### Listen

Listen sollten über alle Seiten hinweg konsistent formatiert und strukturiert werden.
Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Listenformat.
Abhängig von der Art der Liste, die Sie erstellen, sollten Sie Ihr Schreiben jedoch entsprechend den unten beschriebenen Sektionen anpassen. In beiden Fällen fügen Sie einen Einführungssatz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke von kurzen Informationen zu gruppieren. Jedes Element in der Liste sollte einem ähnlichen Satzaufbau folgen. Sätze und Phrasen (d.h. Satzfragmente, denen ein Verb oder ein Subjekt oder beides fehlen) in Aufzählungslisten sollten der normativen Interpunktion folgen — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes ein Punkt erscheinen, einschließlich des letzten Satzes des Elements, so wie es in einem Absatz erwartet wird. Dies ist ein Beispiel einer korrekt strukturierten Aufzählungsliste:

  > In diesem Beispiel sollten wir einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit weiterer Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von Aufzählungszeichen zu Aufzählungszeichen wiederholt wird. In diesem Beispiel gibt jede Aufzählungsmarkierung eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze beinhalten, ist am Ende kein Punkt erforderlich. Beispielsweise:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt dem Text einen Schatten hinzu

  Wenn eines oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement drei oder weniger Wörter enthält. Soweit möglich, halten Sie jedoch dieselbe Struktur für alle Elemente einer Liste ein; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Anweisung zu enumerieren. Da Anweisungen komplex sein können, hat Klarheit Vorrang, besonders wenn der Text in jedem Listenelement umfangreich ist. Wie bei Aufzählungslisten folgen Sie der standardmäßigen Interpunktionsverwendung. Dies ist ein Beispiel einer korrekt strukturierten nummerierten Liste:

  > Um eine Nummernliste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz zur Einführung der Anweisungen beginnen. Es ist wichtig, dem Benutzer vor Beginn der Anweisungen Kontext zu geben.
  > 2. Beginnen Sie mit Ihren Anweisungen und halten Sie jeden Schritt in seinem eigenen nummerierten Punkt.
  >    Ihre Anweisungen können ziemlich umfangreich sein, daher ist es wichtig, klar zu schreiben und die korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen Schlusszusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das Folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungsschritte bietet, um eine nummerierte Liste mit dem richtigen Format zu erstellen.

  Beachten Sie, wie die Punkte in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Anweisungszwecke oder das Durchführen einer geordneten Prozedur verwendet werden, stellen Sie sicher, dass Sie jeden Punkt fokussiert halten: ein nummerierter Punkt pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen Abschnitt _Siehe auch_ am Ende des Artikels. Dieser Abschnitt enthält [Cross-Referenzen](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel, dies ist der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer`-Seite.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt im Format einer [Aufzählungsliste](#listen), wobei jedes Element in der Liste als Phrase ist. Im [Learn web development](/de/docs/Learn_web_development)-Abschnitt auf MDN folgt der Abschnitt Siehe auch jedoch dem Format einer [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists).

Um die Konsistenz auf MDN Web Docs aufrechtzuerhalten, beachten Sie die folgenden Richtlinien, wenn Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der Seite oder des Abschnitts, zu dem verlinkt wird. Zum Beispiel, der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Attributes)-Seite mit dem Seitentitel "ARIA states and properties" wird sein:
  - **Richtig**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Attributes)
- Verwenden Sie Satzweise im Linktext, auch wenn es sich vom Titel der verlinkten Seite oder des Abschnitts unterscheidet. Es könnte sein, dass die auf der Seite oder im Abschnitt verwendete Strukturierung falsch ist. Zum Beispiel, der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrekter Satzweise wird sein:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Auch für externe Links verwenden Sie Satzweise, auch wenn die Strukturierung auf der Zielartikel-Seite unterschiedlich ist. Dies soll die Konsistenz auf MDN Web Docs gewährleisten. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um eine Seite zu verlinken, wie es im Abschnitt [Linking to pages in references](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Commonly used macros_ Seite erklärt wird. Die Verwendung des Makros wird Hinzufügen eines Codeformates für das Schlüsselwort im Linktext, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("A", "An", "The") wird am Anfang des Listenelements aus der Linkliste benötigt. Am Ende des Listenelements ist keine Zeichenführung erforderlich, da es sich in der Regel um einen Begriff oder eine Phrase handelt.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: The [`revert-layer`](/de/docs/Web/CSS/revert-layer) keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, fügen Sie Codeformatierung mit Backticks (\`) zu Schlüsselwörtern und Literalen im Linktext hinzu, obwohl die Formatierung nicht in Seiten- und Abschnittstiteln verwendet wird. Zum Beispiel, für den Seitentitel "Array() constructor", wird der Linktext [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text, der den Link umgibt, minimal. Im Fall einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Interpunktion. Lassen Sie alle verlinkten Texte am Anfang, um das Scannen der Linkliste zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS selectors for styling checkboxes
- Verwenden Sie die Konjunktion "and" nicht vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Other color-related properties
- Für externe Links streben Sie an, die Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) wann immer möglich und angemessen zu spezifizieren. Das Aufführen dieser Informationen auf den ersten Blick gibt den Lesern eine klare Ahnung von dem Ziel, das sie beim Anklicken des Links erreichen werden. Das Datum der Veröffentlichung oder der letzten Aktualisierung leitet die Leser an, die Relevanz des verlinkten Artikels einzuschätzen und hilft auch den MDN-Betreuern, Links zu Artikeln zu überprüfen, die lange nicht aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zum externen [Top-level await](https://v8.dev/features/top-level-await)-Artikel im Siehe auch Abschnitt, zusammen mit der Quelle und dem Jahr der Information:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) on v8.dev (2019)
- Für externe Links zu Büchern können Sie auch die Namen der Autoren angeben. Einige Beispiele dafür finden Sie im Abschnitt [Weiterführende Literatur](#language_grammar_and_spelling) unten. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repositories hinzuzufügen, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu den zugehörigen Leitfäden und Tutorials. Diese vorgeschlagene Reihenfolge soll vor allem die Scannbarkeit der Einträge in der Liste erleichtern.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen und dann die externen Links.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen oder einfacher-zu-erweiterte Reihenfolge, je nachdem, was für den Kontext mehr Sinn ergibt.

### Unterseiten

Wenn Sie einige Artikel über ein Thema oder ein Fachgebiet hinzufügen müssen, tun Sie dies in der Regel, indem Sie eine Übersichtsseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Übersichtsseite sollte mit einem oder zwei Absätzen zur Beschreibung des Themas oder der Technologie beginnen, dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können die Einfügung von Seiten in die Liste durch einige von uns erstellte Makros automatisieren.

Zum Beispiel betrachten Sie den [JavaScript](/de/docs/Web/JavaScript)-Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Haupt-Inhaltsverzeichnis-Seite
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Vermeiden Sie es, Ihren Artikel an der Spitze der Hierarchie zu platzieren, da dies die Seite verlangsamt und die Suche und Navigation durch die Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, der der Teil der URL der Seite ist, der `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien beim Definieren eines Slugs:

- Slugs sollten kurz gehalten werden. Wenn Sie ein neues Hierarchie-Level erstellen, sollte die neue Level-Komponente im Slug nur ein oder zwei Worte sein.
- Slugs sollten einen Unterstrich für eine mehrgliedrige Komponente haben, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie auch in Slugs der Satzweise für jede Komponente, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und auch verwendet, um die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite zu strukturieren. Ein Seitentitel kann sich vom "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Berücksichtigen Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Großschreibung**: Auf MDN Web Docs sollten Seitentitel und Abschnittsüberschriften Satzweise (nur das erste Wort und Eigennamen großschreiben) statt Schlagzeilen-Großschreibung verwenden:

  - **Richtig**: "A new method for creating JavaScript rollovers"
  - **Falsch**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die vor der Einführung dieser Stilrichtlinie geschrieben wurden. Fühlen Sie sich frei, sie bei Bedarf zu aktualisieren, wenn Sie möchten. Wir werden sie nach und nach bearbeiten.

- **Allgemeine Leitlinien**: Zu entscheiden, was Sie dokumentieren möchten und wie Sie diese Inhalte strukturieren werden, ist einer der ersten Schritte beim Schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen helfen, zu entscheiden, wie Sie Informationen anordnen möchten. Behandeln Sie einfache Konzepte zuerst und dann kompliziertere und fortgeschrittene Konzepte. Behandeln Sie konzeptionelle Informationen zuerst und dann aktionsorientierte Themen.

  Berücksichtigen Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte:

  - **Von oben nach unten**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) angegeben, gehen Sie von der höheren `##` zu der niedrigeren `####` weiter, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebenenüberschriften für breitere Einführungstitel, und verwenden Sie spezifischere Titel, während Sie zu niedrigeren Ebene-Überschriften übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höherstufigen Überschrift gruppiert sind. Das Benennen der Titel verschiedener Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter in Text und Inhaltsverzeichnissen zu erfassen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die in dem Abschnitt behandelt werden. Verwenden Sie zum Beispiel, für einen Abschnitt über HTML-Elemente, den Titel "HTML elements" anstatt "Introduction" oder "Overview".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck, soweit möglich, versuchen Sie nicht, die Konjunktion "and" in einem Titel zu verwenden.
  - **Parallelbau anwenden**: Verwenden Sie ähnliche Sprache für Titel auf der gleichen Überschriftenebene. Zum Beispiel, wenn ein Titel der `###`-Ebene Gerundien verwendet, d. h. Wörter, die auf "-ing" enden, wie "Installing", dann versuchen Sie alle Titel auf dieser Überschriftenebene mit Gerundien zu schreiben. Wenn ein Titel mit einem imperativen Verb beginnt, wie "Use", "Configure", dann schreiben Sie alle Titel auf dieser Überschriftenebene mit einem imperativen Verb beginnend.
  - **Vermeiden Sie allgemein Begriffe in niederstufigen Überschriften**: Wiederholen Sie nicht den Text der Titel einer höherstufigen Überschrift in den niederstufigen Titeln. Verwenden Sie z. B. in einem Abschnitt mit dem Titel "Kommas", den Titel eines Unterabschnitts "Nach einleitenden Sätzen" statt "Kommas nach einleitenden Sätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, mit den Artikeln "a", "an", oder "the" zu beginnen.
  - **Fügen Sie Einführungsinformationen hinzu**: Nach einem Titel, fügen Sie einigen einleitenden Text hinzu, um zu erklären, was in dem Abschnitt behandelt werden wird.

## Siehe auch

- [Richtlinien zur Gestaltung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Nutzung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir auf den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu verweisen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie Ihre Schreib- und Bearbeitungsfähigkeiten verbessern möchten, könnten die folgenden Ressourcen hilfreich sein.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Verwendung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich aber benutzerfreundlich, evidenzbasierte Beratung; sehr gut für Nicht-Muttersprachler, insbesondere für Präpositionsgebrauch
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
