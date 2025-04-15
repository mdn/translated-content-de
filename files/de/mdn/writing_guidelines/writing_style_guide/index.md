---
title: Stilrichtlinien für Schreiben
short-title: Writing style
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

Diese Stilrichtlinien für das Schreiben beschreiben, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen dazu, Konsistenz in Sprache und Stil auf der gesamten Website zu gewährleisten. Nichtsdestotrotz interessieren wir uns mehr für den Inhalt als für das Formatieren, also fühlen Sie sich nicht verpflichtet, die gesamten Stilrichtlinien vor einem Beitrag zu lernen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Beitragender Ihre Arbeit später so bearbeitet, dass sie diesen Richtlinien entspricht. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Pull-Request mit Inhalten einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für die englischsprachige Dokumentation. Andere Sprachen können (und sind willkommen) eigene Stilrichtlinien zu erstellen. Diese sollten als Unterseiten auf der Seite des jeweiligen Lokalisierungsteams veröffentlicht werden. Dennoch sollte dieser Leitfaden für das Formatieren und Organisieren von Inhalten konsultiert werden.

Nach dem Auflisten der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser brauchen könnten, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte geben Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Beispielsweise relevante Beispiele einfügen](#beispielsweise_relevante_beispiele_einfügen)
- [Eine beschreibende Einführung geben](#eine_beschreibende_einführung_geben)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Schreiben mit SEO im Hinterkopf](#schreiben_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für die Inhalte, die Sie schreiben, im Auge. Beispielsweise braucht eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so viele Details über grundlegende Netzwerkkonzepte wie die typische Seite über Netzwerke. Denken Sie daran, dass dies Richtlinien sind. Einige dieser Tipps sind möglicherweise nicht in jedem Fall anwendbar.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Im Allgemeinen verwenden Sie den aktiven Sprachstil und eindeutige Pronomen. Schreiben Sie kurze Sätze und bleiben Sie bei einer Idee pro Satz. Definieren Sie neue Begriffe, während Sie das Zielpublikum im Auge behalten, bevor Sie diese verwenden.
- **Kurz**: Beim Schreiben eines Dokuments ist es wichtig zu wissen, wie viel man sagen sollte. Wenn Sie zu viele Details geben, wird die Seite langweilig zu lesen und wird selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Wortgebrauch konsequent auf der Seite und über mehrere Seiten hinweg verwenden.

### Beispielsweise relevante Beispiele einfügen

Im Allgemeinen, fügen Sie Beispiele oder realitätsnahe Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um eventuelle Randfälle zu klären, die es geben mag. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen für Probleme zu demonstrieren, die auftreten können.

### Eine beschreibende Einführung geben

Stellen Sie sicher, dass der einleitende Absatz oder die Absätze vor der ersten Überschrift die Informationen angemessen zusammenfassen, die die Seite behandeln wird, und vielleicht, was die Leser nach dem Durchgehen des Inhalts erreichen können. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial soll der einleitende Absatz die Leserin oder den Leser über die Themen informieren, die behandelt werden, sowie über das erforderliche Wissen, das erwartet wird, falls vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den entsprechenden Informationen, und es sollte Hinweise auf Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Beispiel für eine Einführung ist viel zu kurz. Es lässt zu viele Informationen aus, wie etwa, was es genau bedeutet, Text zu "umranden", wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist es viel zu lang. Zu viele Details sind enthalten und der Text geht zu tief in die Beschreibung anderer Methoden und Eigenschaften. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, in denen die anderen Details beschrieben sind.

  > Wenn die Methode **`CanvasRenderingContext2D.strokeText()`** der 2D-Canvas-API aufgerufen wird, umrandet sie die Zeichen in der angegebenen Zeichenkette, beginnend an den angegebenen Koordinaten und unter Verwendung der aktuellen Stiftfarbe.
  > Im Fachjargon der Computergrafik bedeutet "Stroking" von Text das Zeichnen der Konturen der Glyphen in der Zeichenkette, ohne den Inhalt jeder einzelnen Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schriftart des Kontextes gezeichnet, wie im [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontextes angegeben.
  >
  > Die Platzierung des Texts relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontextes bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenkette relativ zu der angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenkette beginnend bei `x - (stringWidth / 2)` gezeichnet, wodurch die angegebene X-Koordinate in die Mitte der Zeichenkette platziert wird.
  > Wenn der Wert `"left"` ist, wird die Zeichenkette beginnend am angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter bereitstellen, der Ihnen die Möglichkeit gibt, eine maximale Breite für die Zeichenkette in Pixeln anzugeben.
  > Wenn Sie diesen Parameter bereitstellen, wird der Text horizontal zusammengedrückt, skaliert (oder anderweitig angepasst), um beim Zeichnen in einen Raum dieser Breite zu passen.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenkette mit Farbe gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Der folgende Abschnitt bietet eine viel bessere Übersicht zur `strokeText()`-Methode.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrandet (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenkette, verankert an der durch die angegebenen X- und Y-Koordinaten angegebenen Position.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontextes gezeichnet und ist gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerechtfertigt und ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite "Grafiken zeichnen" sowie unseren Hauptartikel zum Thema, [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, Texte so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gängigen Begriffen, die in Dokumentationen verwendet werden:

- Meiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in Dokumentationen nicht verwenden; wenn dies jedoch der Fall ist, ziehen Sie in Betracht, **fantastic** zu verwenden.

Es ist am besten, in jeder Schreibweise eine geschlechtsneutrale Sprache zu verwenden, in der das Geschlecht für das Thema nicht relevant ist.
Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "he"/"his" in Ordnung; aber wenn das Thema eine Person eines beliebigen Geschlechts ist, ist "he"/"his" nicht angemessen.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "A confirmation dialog asks the user if he wants to allow the web page to make use of his webcam."
- **Falsch**: "A confirmation dialog asks the user if she wants to allow the web page to make use of her webcam."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen so:

- **Richtig**: "A confirmation dialog asks the user if they want to allow the web page to make use of their webcam."

> [!NOTE]
> MDN Web Docs erlauben die Verwendung des dritten Plurals, der allgemein als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)" bekannt ist. Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Option besteht darin, die Benutzer plural zu machen, so:

- **Richtig**: "A confirmation dialog asks the users if they want to allow the web page to make use of their webcams."

Die beste Lösung besteht natürlich darin, die Pronomen neu zu formulieren und zu eliminieren:

- **Richtig**: "A confirmation dialog requesting the user's permission for webcam access appears."
- **Richtig**: "A confirmation dialog box that asks the user for permission to use the webcam appears."

Dieses letzte Beispiel für den Umgang mit dem Problem ist möglicherweise besser. Es ist nicht nur grammatikalisch richtiger, sondern beseitigt auch einige der mit Geschlechtern verbundenen Komplexitäten in verschiedenen Sprachen, die wild unterschiedliche Geschlechtsregeln haben können, was es einfacher machen kann, es für Leser und Übersetzer zu übersetzen.

### Barrierefreie Sprache verwenden

Vermeiden Sie die Verwendung von räumlichen und richtungsweisenden Wörtern wie "oberhalb", "unterhalb", "links", "rechts" oder "hier". Diese Begriffe setzen ein bestimmtes visuelles Layout voraus, das möglicherweise nicht für alle Benutzer gilt. Sie können auch unklar oder irreführend sein, insbesondere für Benutzer, die auf Screenreader angewiesen sind, oder für Benutzer, die den Inhalt übersetzt lesen, wo die Richtungssprache zweideutig oder schwer genau zu übersetzen sein kann. In responsiven Layouts, in denen sich die Position des Inhalts in Abhängigkeit von der Bildschirmgröße ändern kann, können solche Richtungsreferenzen ungenau werden. Diese Art von Sprache kann die Zugänglichkeit behindern und es allen Benutzern erschweren, den Inhalt zu navigieren oder zu verstehen.

Verwenden Sie stattdessen beschreibende Formulierungen, die den Abschnitt, das Konzept oder das Element, auf das verwiesen wird, klar identifizieren. Verweisen Sie auf Abschnitte durch ihre Titel oder Überschriften und verweisen Sie auf Beispiele oder Code-Schnipsel durch ihre Demonstration oder ihren Inhalt.

Zum Beispiel:

- **Richtig**: "Refer to the [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) section later on this page."
- **Falsch**: "Refer to the Accessibility section below."

- **Richtig**: "In the following code example, we animate a circle using CSS transitions."
- **Falsch**: "In the code example below, we animate a circle using CSS transitions."

- **Richtig**: "This concept is explained in the earlier section titled Creating a media query."
- **Falsch**: "This concept is explained in the section above."

Zudem sollten vage Link-Texte wie "Klicken Sie hier" oder "Lesen Sie diesen Artikel" vermieden werden. Beschreibende Link-Texte bieten für alle Leser besseren Kontext und verbessern das Erlebnis für Benutzer von unterstützenden Technologien.

- **Richtig**: "Learn more about [how to order flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Click [here](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) to learn more."
- **Falsch**: "Read [this article](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) to learn more."

Durch das Befolgen dieser Richtlinien helfen Sie dabei, die Dokumentation von MDN zugänglich, klar und für jeden nutzbar zu machen, unabhängig davon, wie sie auf die Seite zugreifen.

### Schreiben mit SEO im Hinterkopf

Obwohl das Hauptziel des Schreibens auf MDN Web Docs immer darin besteht, offene Web-Technologie zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie wollen, oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das von uns geschriebene Material _finden_ können. Wir können dies erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung (Search Engine Optimization, {{Glossary("SEO", "SEO")}}) im Hinterkopf behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen in der Lage sind, unser Material leicht zu kategorisieren und zu indexieren, damit Leser leicht finden können, was sie brauchen. Die SEO-Richtlinien beinhalten die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, einigermaßen gut gestaltet, geschrieben und markiert ist, um Suchmaschinen Kontext und Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn ordnungsgemäß von Suchmaschinen indexiert werden:

- **Sicherstellen, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten inhaltlich ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten vom Gleichen handeln, selbst wenn sie das nicht tun.
  Beispielsweise, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den zwei Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, wobei nur einige Wörter ausgetauscht werden und dasselbe Beispiel verwendet wird. Dadurch wissen Suchmaschinen nicht, welche Seite welche ist, und teilen sich die Seitenrangfolge, was dazu führt, dass es schwieriger ist, beide zu finden als sie sein sollten.

  Es ist daher wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Die folgenden Vorschläge können Ihnen dabei helfen, das zu erreichen:

  - **Mehr einzigartige Konzepte erklären**: Betrachten Sie Anwendungsfälle, in denen es mehr Unterschiede geben kann, als man denkt. Zum Beispiel im Fall der Dokumentation der Eigenschaften `width` und `height`, vielleicht über die verschiedenen Verwendungsweisen von horizontalem Raum und vertikalem Raum schreiben und eine Diskussion über die angemessenen Konzepte bieten. Vielleicht können Sie die Verwendung von `width` im Sinne der Schaffung eines Platzes für eine Seitenleiste erwähnen, während Sie `height` für das Handling von vertikalem Scrollen oder Fußzeilen verwenden. Informationen über Zugangsprobleme zu geben ist ebenfalls eine nützliche und wichtige Idee.
  - **Unterschiedliche Beispiele verwenden**: Beispiele in diesen Situationen sind oft noch ähnlicher als der Haupttext, weil die Beispiele möglicherweise sowohl die eine (oder beide) der ähnlichen Methoden oder Eigenschaften verwenden, um zu beginnen, wodurch keine wirklichen Änderungen beim Wiederverwenden erforderlich sind. Also werfen Sie das Beispiel weg und schreiben ein neues, oder bieten zumindest mehrere Beispiele an, bei denen zumindest einige von ihnen unterschiedlich sind.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl einen Überblick darüber, was das Beispiel tut, als auch eine Abdeckung, wie es funktioniert, auf einem angemessenen Detailgrad angesichts der Komplexität des Themas und des Zielpublikums eingeschlossen werden sollte.

  Der einfachste Weg, zu vermeiden, dass man zu ähnlich ist, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit dies erlaubt.

- **Sicherstellen, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (im SEO-Jargon als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht exakt (oder überhaupt) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Richtschnur sollte sicher sein, dass Seiten auf den MDN Web Docs nicht kürzer als etwa 300 Wörter oder so sind. Künstlich sollte man eine Seite nicht aufblasen, aber diese Richtlinie als Mindestziel betrachten, wenn dies möglich ist.

  Diese grundlegenden Richtlinien können Ihnen dabei helfen, Seiten zu erstellen, die genügend Inhalt haben, um ordentlich durchsuchbar zu sein, ohne dass sie mit unnötigem Text gefüllt werden:

  - **Stubs vermeiden**: Natürlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, sollte man sie hinzufügen. Wir versuchen zu vermeiden, komplett "Stub"-Seiten auf den MDN Web Docs zu haben, obwohl sie existieren, aber es gibt viele Seiten, bei denen große Teile ihrer Inhalte fehlen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für den [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types), der sie ist, richtig strukturiert ist. Überprüfen Sie, ob alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden – dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Alle Konzepte vollständig beschrieben haben**: Es ist einfach, eine schnelle Erklärung für etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen sollte?
  - **Beispiele hinzufügen**: Es sollten Beispiele alle Parameter oder zumindest die Parameter (oder Eigenschaften, oder Attribute) die Benutzer vom Anfänger- bis zum mittleren Bereich wahrscheinlich verwenden, sowie jede fortgeschrittene, die eine zusätzliche Erläuterung erfordern, abdecken. Jedes Beispiel sollte mit einem Überblick darüber, was das Beispiel tun wird, welchen zusätzlichen Wissensbedarf es vielleicht gibt, begonnen werden usw. Nach dem Beispiel (oder eingebettet unter den Teilen des Beispiels) sollte Text erklären, wie der Code funktioniert. Gehen Sie dabei nicht sparsam mit den Details oder der Behandlung von Fehlern in den Beispielen um. Denken Sie daran, dass Benutzer _Ihre_ Beispiel wirklich in ihre eigenen Projekte kopieren und einfügen werden, und Ihr Code _wird_ auf Produktionsseiten enden! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide) für weitere nützliche Informationen.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders gängige Anwendungsfälle für die beschriebene Funktion gibt, sprechen Sie darüber! Anstatt anzunehmen, dass ein Benutzer erkennt, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, sollten Sie tatsächlich einen Abschnitt zu diesem Anwendungsfall mit einem Beispiel und Erklärung, wie das Beispiel funktioniert, hinzufügen.
  - **Bildinformationen hinzufügen**: Fügen Sie bei allen Bildern und Diagrammen korrekten [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) Text hinzu. Dieser Text, sowie die Bildunterschriften auf Tabellen und anderen Figuren, zählt, weil Spider keine Bilder durchforsten können und `alt` Text erklärt Suchmaschinen-Crawlern den Inhalt der eingebetteten Medien.
    > [!NOTE]
    > Es wird nicht empfohlen, übermäßig viele Schlüsselwörter oder Schlüsselwörter nicht im Zusammenhang mit der Funktion hinzuzufügen, um Suchmaschinen-Rankings zu manipulieren; dieser Typ von Verhalten ist leicht zu erkennen und neigt dazu, abgestraft zu werden.
    > Ebenso fügen Sie keine sich wiederholenden, unhilfreichen Materialien oder Schlüsselwörter in den tatsächlichen Seiten ein, in einem Versuch, ihre Größe und Suchrang zu verbessern. Dies tut dem Inhalt sowohl der Lesefähigkeit als auch den Suchergebnissen mehr Schaden als Nutzen.

- **Fokus auf Themeninhalt**: Es ist weit besser, Inhalte um das Thema der Seite als um ein spezifisches Schlüsselwort zu schreiben. Es ist wahrscheinlich hoch, dass es viele Schlüsselwörter gibt, die für ein gegebenes Thema enthalten sein könnten; in der Tat kompilieren viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (variiert zwischen kurzen, mittleren und langen Schlüsselwörtern), um sie in ihrem Artikel einzubeziehen, abhängig von der Länge. Indem Sie dies tun, diversifizieren Sie Ihre Formulierung, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen vom Schreiben grammatisch korrekter Sätze in Englisch, empfehlen wir, diesen Richtlinien zu folgen, um Inhalte auf den MDN Web Docs konsistent zu halten.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das unter Verwendung des ersten Buchstabens jedes Wortes aus einem Satz erstellt wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Beim ersten Erwähnen eines Begriffs auf einer Seite, erweitern Sie Akronyme, die den Benutzern wahrscheinlich nicht bekannt sind. Im Zweifelsfall erweitern Sie den Begriff. Noch besser, verlinken Sie ihn zum Artikel oder [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) is Mozilla's XML-based language..."
  - **Falsch**: "XUL is Mozilla's XML-based language..."

- **Großschreibung und Punkte**: Verwenden Sie volle Großschreibung und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderem geeigneten Satzzeichen.

  <!-- markdownlint-disable search-replace -->

  - **Richtig**: Web browsers (e.g., Firefox) can be used ...
  - **Falsch**: Web browsers e.g. Firefox can be used ...
  - **Falsch**: Web browsers, e.g. Firefox, can be used ...
  - **Falsch**: Web browsers, (eg: Firefox) can be used ...

  <!-- markdownlint-enable search-replace -->

  In regulärem Text (also außerhalb von Notizen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... web browsers, and so on.
  - **Falsch**: ... web browsers, etc.

  - **Richtig**: Web browsers such as Firefox can be used ...
  - **Falsch**: Web browsers e.g., Firefox can be used ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente der lateinischen Abkürzungen zusammen:

  <!-- markdownlint-disable search-replace -->

  | Abbr.  | Latein           | Englisch                |
  | ------ | ---------------- | ----------------------- |
  | cf.    | _confer_         | compare                 |
  | e.g.   | _exempli gratia_ | for example             |
  | et al. | _et alii_        | and others              |
  | etc.   | _et cetera_      | and so forth, and so on |
  | i.e.   | _id est_         | that is, in other words |
  | N.B.   | _nota bene_      | note well               |
  | P.S.   | _post scriptum_  | postscript              |

  <!-- markdownlint-enable search-replace -->

  > [!NOTE]
  > Betrachten Sie immer, ob es tatsächlich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser entweder ihre Bedeutungen verwechseln oder nicht verstehen.
  >
  > Und stellen Sie sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden, dies zu tun. Beispielsweise sollten Sie darauf achten, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für den Plural von Abkürzungen und Akronymen, fügen Sie einfach _s_ hinzu. Verwenden Sie keinesfalls einen Apostroph. Nie.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Kontraktion verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Ansonsten im Text verwenden Sie die ausgeschriebene Form "versus".

  - **Richtig**: this vs. that
  - **Falsch**: this v. that
  - **Richtig**: this versus that

### Großschreibung

Verwenden Sie Standardregeln der englischen Großschreibung im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (allein verwendet oder als Präfix) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie stellt eine Änderung zur vorherigen Version dieser Richtlinien dar, weshalb Sie auf MDN möglicherweise viele Instanzen von "Web" und "Internet" finden.
> Bitte ändern Sie diese Begriffe, wenn Sie andere Änderungen vornehmen, aber bearbeiten Sie einen Artikel nicht lediglich um der Großbuchstaben willen.

Tastaturtasten sollten in der Satz-Stil Großschreibung notiert werden, nicht komplett in Großbuchstaben.
Zum Beispiel, "<kbd>Enter</kbd>" anstelle von "<kbd>ENTER</kbd>".
Die einzige Ausnahme davon ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie etwa Marken, die Großbuchstaben beinhalten, oder Wörter, die vom Namen einer Person abgeleitet sind (sofern das Wort nicht im Code verwendet wird und die Codesyntax klein schreiben erfordert).
Einige Beispiele umfassen:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine eingetragene Marke der Oracle Corporation, es sollte immer wie markenrechtlich geschützt geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert zu einem lässigeren Stil, deshalb sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z.B. "don't", "can't", "shouldn't"), wenn Sie das bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im laufenden Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (die nicht Daten in Codebeispielen einschließen), verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD-Format verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plurale von Numeralien**: Fällen Sie "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie den Plural nach englischen Regeln, nicht die lateinischen oder griechisch beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „geschwungenen“ Anführungszeichen und Anführungszeichen. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Das liegt daran, dass wir für Konsistenz eine Option wählen müssen. Wenn geschwungene Anführungszeichen oder Apostrophe ihren Weg in Codeausschnitte finden, selbst in inline-Beispielen, könnten Leser sie kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht werden).

- **Richtig**: Bitte verwenden Sie keine "geschwungenen Zitate".
- **Falsch**: Bitte verwenden Sie keine &ldquo;geschwungenen zitate.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der üblichen Situationen, in denen wir uns der Kommaregelungen bewusst sein müssen:

- **Nach einleitenden Klauseln**: Eine einleitende Klausel ist eine abhängige Klausel, die sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie nach einer einleitenden Klausel ein Komma, um sie von der folgenden unabhängigen Klausel zu trennen.

  - Beispiel 1:
    - **Richtig**: "In this example, you will learn how to use a comma."
    - **Falsch**: "In this example you will learn how to use a comma."
  - Beispiel 2:
    - **Richtig**: "If you are looking for guidelines, refer to our writing style guide."
    - **Falsch**: "If you are looking for guidelines refer to our writing style guide."
  - Beispiel 3:
    - **Richtig**: "On mobile platforms, you tend to get a numeric keypad for entering data."
    - **Falsch**: "On mobile platforms you tend to get a numeric keypad for entering data."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "das Oxford-Komma") ist das Komma, das vor einer Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes einzelne Element der Liste.

  - **Richtig**: "I will travel on trains, planes, and automobiles."
  - **Falsch**: "I will travel on trains, planes and automobiles."

  Verwenden Sie kein Komma, bevor „und“ und „oder“ in einer Liste mit zwei Elementen.

  - **Richtig**: "My dog is cute and smart."
  - **Falsch**: "My dog is cute, and smart."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Klauseln verbinden. Wenn jedoch der Satz durch die Konjunktion sehr lang oder komplex wird, erwägen Sie, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "You can perform this step, but you need to pay attention to the file setting."
    - **Falsch**: "You can perform this step but you need to pay attention to the file setting."
  - Beispiel 2:
    - **Richtig**: "My father is strict but loving."
    - **Falsch**: "My father is strict, but loving."

- **Vor "that" und "which"**: Eine restriktive Klausel ist für die Bedeutung des Satzes wesentlich und muss nicht durch Kommas vom restlichen Satz abgetrennt werden. Eine restriktive Klausel wird normalerweise durch "that" eingeführt und darf **nicht** durch ein Komma eingeleitet werden.

  - **Richtig**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Falsch**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  Eine nicht restriktive Klausel liefert zusätzliche Informationen und ist nicht wesentlich für den Sinn des Satzes. Eine nicht restriktive Klausel wird normalerweise durch "which" eingeführt und sollte durch ein Komma eingeleitet werden.

  - **Richtig**: "You write a policy, which is an allowed list of origins for each feature."
  - **Falsch**: "You write a policy which is an allowed list of origins for each feature."

- **Vor "such as"**: Wenn "such as" Teil einer nicht restriktiven Klausel ist und der verbleibende Satz eine unabhängige Klausel ist, verwenden Sie ein Komma vor "such as".

  - **Richtig**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Falsch**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  Das folgende Beispiel zeigt, wann nicht mit "such as" ein Komma verwendet wird. In diesem Fall ist die Klausel, die "such as" enthält, wesentlich für den Sinn des Satzes.

  - **Richtig**: "Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **Falsch**: "Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### Bindestriche

Zusammengesetzte Wörter sollten nur mit einem Bindestrich versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe Buchstabe wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanische englische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als eine Varianten-Schreibweise oder als hauptsächlich im nicht-amerikanischen Englisch verwendete Form aufgeführt.
Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) nachschlagen (mit einem zusätzlichen _u_, das dem amerikanischen Standard-Form hinzugefügt ist), finden Sie den Ausdruck "Chiefly British" gefolgt von einem Link zur amerikanischen Standard-Form, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine Varianten-Schreibweise.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird wöchentlich ausgeführt und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal ausführen, indem Sie den folgenden Befehl verwenden:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich im Verzeichnis [.vscode/dictionaries](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und sanktionierte Wörter enthalten, die sich nicht in den Standardwörterbüchern befinden. Sie können dieser Liste beliebig viele Wörter hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, welchen Inhalt jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "element", um auf HTML- und XML-Elemente zu verweisen, anstatt "tag". Außerdem sollte das Element in spitzen Klammern "<>" eingeschlossen und mit Backticks (`) formatiert werden. Beispielsweise wird die Verwendung von `<input>`innerhalb von Backticks als`<input>` formatiert, wie erwartet.

  - **Richtig**: the `<span>` element
  - **Falsch**: the span tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) spezifizieren, das das Element formatieren, die spitzen Klammern "<>" hinzufügen und einen Link zur Referenzseite hinzufügen wird.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quellcode in Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff bei MDN Web Docs ist **parameters**. Verwenden Sie, wenn möglich, den Begriff "arguments" für Konsistenz nicht.

- **Benutzeroberflächenaktionen**: Beschreiben Sie in Task-Sequenzen Benutzeroberflächenaktionen im Imperativstil. Identifizieren Sie das Benutzeroberflächenelement durch sein Label und seinen Typ.

  - **Richtig**: "Click the Edit button."
  - **Falsch**: "Click Edit."

### Stimme

Während der Aktive Voice bevorzugt wird, wird der Passive Voice ebenfalls akzeptiert, angesichts des informellen Gefühls unserer Inhalte.
Versuchen Sie jedoch, konsequent zu sein.

## Seitenkomponenten

Dieser Abschnitt enthält die Richtlinien, die Sie für verschiedene Teile jeder Seite befolgen sollten, wie Überschriften, Notizen, Links und Beispiele.

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

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Vorgehensweisen beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Stück Code sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das Szenario zu beschreiben, das durch das Beispiel gezeigt wird. Zum Beispiel "Benutzung von Offsetdruck" und "Rückgängig machen, um den Stil in der früheren Schicht".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispiel, die die Besonderheiten des Beispiels angibt, auf die Sie die Aufmerksamkeit der Leser lenken wollen. Zum Beispiel: "Im folgenden Beispiel werden im CSS zwei Kaskaden-Schichten definiert, `base` und `special`."
  - **Ergebniserklärung**: Eine Erklärung nach dem Beispiel, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und seine Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder benötigt.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile zu unterteilen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke desselben Typs (HTML, CSS und JavaScript) zusammen gefügt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es, den Code in mehrere Segmente zu unterteilen, jedes optional mit eigenen Beschreibungen, Überschriften und so weiter. Dies macht das Dokumentieren von Code unglaublich mächtig und flexibel.

Um mehr darüber zu erfahren, wie Codebeispiele für die MDN Web Docs gestylt oder formatiert werden müssen, lesen Sie unsere [Richtlinien zur Gestaltung von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide).

### Querverweise (Verlinkung)

Beim Verweisen auf eine andere Seite oder den Abschnitt einer Seite auf MDN durch ihren Titel, folgen Sie der Satzcasing im Text der Verlinkung. Verwenden Sie Satzcasing im Linktext selbst wenn es von dem Titel der verlinkten Seite oder des Abschnitts abweicht (es könnte sein, dass der im Seitentitel oder Abschnittstitle verwendete Fall nicht korrekt ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN durch ihren Titel zu referenzieren, verwenden Sie den folgenden Stil:

- **Richtig**: "Refer to the [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) guide."
- **Falsch**: "Refer to the "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" guide."

Folgen Sie einem konsistenten Stil bei Verlinkungen zu Abschnitten innerhalb einer Seite:

- **Richtig**: "For more information, refer to the [Allocation in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) section in the _Memory management_ guide."

Wenn sich der Abschnitt, auf den Sie verlinken, auf derselben Seite befindet, können Sie die Lage des Abschnitts mit beschreibenden Phrasen andeuten.

- **Richtig**: "This concept is described in more detail in the [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) section of this document."
- **Falsch**: "This concept is described in more detail in the [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) section below."

Auf MDN ist eine andere Möglichkeit, auf eine Referenzseite zu verweisen, die Verwendung eines Makros. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verweisen, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verweisen, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweisrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind unter bestimmten Bedingungen auf MDN Web Docs erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Pull-Requests, die externe Links hinzufügen, werden abgelehnt, wenn sie diese Richtlinien nicht einhalten.

Wenn Sie überlegen, einen externen Link zu den MDN-Lerninhalten zum Web-Entwicklung hinzuzufügen, lesen Sie bitte ebenfalls die [Richtlinien zum Schreiben von Lerninhalten > Partnerlinks und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

Im Allgemeinen, wenn Sie in Betracht ziehen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass ein minimales Risiko besteht hinsichtlich:

- kaputter oder veralteter Links
- Erscheinen der Befürwortung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zum Verteilen von Spam zu nutzen
- Kurzlinks, die das Link-Ziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, ziehen Sie das Querverweisen von Inhalten innerhalb der MDN Web Docs in Betracht. Interne Links sind leichter zu warten und machen die Gesamtheit der MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, langlebig und weitgehend vertrauenswürdig sind. Sie sollten bevorzugt Links zu externen Inhalten hinzufügen, die:

  - Einzigartig oder unverzichtbar sind (z.B. ein IETF RFC)
  - Für Attributionen, Zitationen oder Anerkennung notwendig sind (z.B. als Teil einer Creative Commons Zitation)
  - Für das Thema aufrechterhalten werden als das Einbinden solcher Inhalte in MDN Web Docs selbst (z.B. die Releases eines Anbieters)
  - Open-Source oder gemeinschaftlich geführt sind, wie MDN Web Docs selbst.

- **Schlechte externe Links**: Schlechte externe Links haben mangelnde Relevanz, Wartbarkeit, Zugänglichkeit oder stellen anderweitig Barrieren für Leser auf. Vermeiden Sie, Links zu externen Inhalten hinzuzufügen, die:

  - Generisch oder unspezifisch sind (z.B. die Startseite eines Anbieters statt der verwandten Dokumentation)
  - Flüchtig oder nicht gewartet sind (z.B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd sind (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Bezahlt sind (z.B. ein kostenpflichtiger Kurs, der für Hobbyisten, Studierende oder Leser in einkommensschwächeren Ländern nicht erschwinglich ist)
  - Unzugänglich sind (z.B. ein Video ohne Untertitel).

- **Links, die selbstfördernd oder Spam sind**: Auch wenn ein persönlicher Blogpost, ein Konferenzvortrag oder ein GitHub-Repository Wert hat, kann das Verlinken zu eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Überlegen Sie zweimal, bevor Sie Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull-Request offenlegen. Das Versäumnis dies zu tun, kann Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie zum Beispiel der Redakteur einer Spezifikation sind und zu Dokumentationen beitragen, die sich auf diese Spezifikation beziehen, dann wird das Verlinken dieser Spezifikation erwartet und akzeptabel sein. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offengelegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Verkürzer (wie zum Beispiel TinyURL oder Bitly) kann großartig sein, um lange Links in kleinere, leichter zu merkende URLs zu verkürzen (auch bekannt als "Shortlinks"). Sie verschleiern jedoch auch das Ziel der URL. Außerdem kann bei bestimmten Verkürzern die Zieladresse nach der Erstellung geändert werden, eine Funktion, die zu böswilligen Zwecken genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter- (verwendererstellbare) URL-Verkürzer erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

Auf der anderen Seite, sind kürzere URLs, die von den Organisationen, die auch die Ziel-URLs betreiben, empfohlen. `https://bugzil.la` wird von Mozilla betrieben und ist ein URL-Verkürzer, der zu `https://bugzilla.mozilla.org/` umleitet, welches auch eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriften in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese werden in die [HTML-Überschriftstags](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) `<h2>`, `<h3>` and `<h4>`-Tags umgesetzt.

`##` ist das höchste Niveau, das erlaubt ist, da `#` dem Seitentitel vorbehalten ist.
Wir empfehlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis spüren, eine Überschrift der vierten Ebene hinzuzufügen, erwägen Sie, den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite zu unterteilen. Alternativ erwägen Sie, die Informationen als Aufzählungspunkte zu präsentieren, um die Notwendigkeit einer vierten Überschrift zu vermeiden.

Beachten Sie die folgenden Dos und Don'ts beim Erstellen von Überschriften für Unterabschnitte:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einzelnes Unterthema.
  Es sind entweder zwei oder mehr Überschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros in Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z. B. "Using `FooBar` interface").
- **Erstellen Sie keine "zusammenhängenden Überschriften".** Das sind Überschriften, gefolgt von einer Unterüberschrift, ohne darauf folgende Erklärungstext im Hauptteil.
  Das sieht nicht gut aus und lässt Leser ohne Erklärungsinhalt am Beginn des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie folgende Richtlinien:

- Stellen Sie sicher, dass die Lizenz für die Medien Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr zulässige Lizenz haben, wie etwa [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die kompatibel mit unserer allgemeinen Inhaltslizenz ist — [Creative Commons Attribution-ShareAlike Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Für Bilder, lassen Sie Diese durch <https://tinypng.com> oder <https://imageoptim.com> laufen, um die Seitenlast zu reduzieren.
- Für `SVG`, lassen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) laufen und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei enthält.
- Jedes Bild muss [deskriptiven `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten format- und strukturmäßig konsistent über alle Seiten hinweg sein.
Einzelne Listenelemente sollten mit geeigneter Zeichensetzung geschrieben werden, egal welches Format die Liste hat.
Abhängig von der Art von Liste, die Sie erstellen, sollten Sie Ihr Schreiben jedoch so anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen sollte ein einleitender Satz enthalten sein, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um zusammengehörende gleiche Informationen zu gruppieren. Jedes Listenelement sollte eine ähnliche Satzstruktur verfolgen. Sätze und Phrasen (d.h. unvollständige Sätze, denen ein Verb oder ein Subjekt oder beides fehlt) in Aufzählungslisten sollten standardmäßige Zeichensetzung enthalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, sollte ein Punkt am Ende jedes Satzes stehen, einschließlich des letzten Satzes des Elements, genau wie man es in einem Absatz erwarten würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes aufnehmen:
  >
  > - Eine Bedingung, gefolgt von einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, gefolgt von einer kurzen Erklärung.
  > - Eine weitere Bedingung, gefolgt von einer weiteren Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel beschreibt jeder Punkt eine Bedingung, die durch ein Komma und eine kurze Erklärung gefolgt wird, und jedes Listenelement endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt dem Text einen Schatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze enthalten, verwenden Sie einen Punkt nach jedem Listenelement, auch wenn ein Listenelement drei oder weniger Wörter enthält. Allerdings versuchen Sie, ausschließlich dieselbe Struktur für alle Elemente auf einer Liste zu verwenden; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einem Instructionssequenz aufzulisten. Da Anleitungen komplex sein können, ist Klarheit eine Priorität, besonders wenn der Text in jedem Listenelement lang ist. Ordnen Sie, wie bei Aufzählungslisten, die reguläre Interpunktion an. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anleitungen einzuführen. Es ist wichtig, dem Benutzer vor Beginn der Anleitungen Kontext zu bieten.
  > 2. Beginnen Sie damit, Anleitungen zu erstellen, und halten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anleitungen können sehr umfangreich sein, weshalb es wichtig ist, klar zu schreiben und die korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anleitungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen zusammenfassenden Zusammenfassung oder Erklärung über das erwartete Ergebnis bei Abschluss.

  Das Folgende ist ein Beispiel für ein Erklärung am Ende der vorhergehenden Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungen gibt, um eine nummerierte Liste mit dem korrekten Format zu erstellen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze klingen. Da nummerierte Listen routinemäßig für Instruktionszwecke oder um jemanden durch einen geordneten Prozess zu führen, verwendet werden, seien Sie sicher, dass jeder Schritt fokussiert bleibt: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel, dies ist der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Im Allgemeinen präsentieren Sie die Links in einem Siehe auch Abschnitt in einem [Aufzählungslisten](#listen)-Format, wobei jedes Element auf der Liste eine Phrase ist. Im [Lernen Ressourcen](#d) Abschnitt auf MDN, folgt der Siehe auch Abschnitt dem [definitionslisten](#markdown_in_mdn) Format.

Um Konsistenz über die MDN Web Docs zu wahren, behalten Sie die folgenden Richtlinien im Kopf, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der Seite oder des Abschnitts, auf den verwiesen wird. Zum Beispiel, der Linktext für diese [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA states and properties" lautet:
  - **Richtig**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie Satzcasing im Linktext, selbst wenn sie vom Seitentitel oder Abschnittstitel abweicht. Es kann sein, dass der in der Seite verwendete Fall oder Abschnittstitel nicht korrekt ist. Zum Beispiel, der korrekte Satz für den Linktext zur [Quirks Mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) Seite lautet:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- Bei externen Links auch Satzcasing anwenden, selbst wenn der Fall auf der Zielseite unterschiedlich ist. Dies soll Konsistenz über die MDN Web Docs sicherstellen. Ausnahmefälle sind Buchnamen.
- Auf MDN, können Sie alternativ ein Makro verwenden, um auf eine Seite zu verweisen, wie auf der Seite [Verlinkung auf Seiten in Verweisen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) im Abschnitt _Commonly used macros_ erklärt wird. Die Verwendung von Makros fügt ein Codeformat zum Linktext des Keyworts hinzu, wie im nächsten Beispiel gezeigt.
- Es wird keine Bezeichnung („A“, „An“, „The“) am Anfang des Listelements benötigt. Es wird auch keine Interpunktion am Ende des Listelements benötigt, da es unweigerlich ein Begriff oder eine Phrase sein wird.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: The [`revert-layer`](/de/docs/Web/CSS/revert-layer) keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den vorherigen Beispielen gezeigt, fügen Sie ein Codeformat unter Verwendung von Backticks (`) zu Keywörtern und Literalen im Linktext zu, auch wenn das Format auf Seite und Abschnittstiteln nicht verwendet wird. Zum Beispiel, für den Seitentitel "Array() constructor", wird der Linktext [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibungstext

- Halten Sie den beschreibenden Text um die Verlinkung minimal. Im Allgemeinen nach dem Linktext und einem Doppelpunkt hinzufügen. Drücken Sie die Beschreibung als eine Phrase ohne Endpunkt aus. Halten Sie den gesamten verlinkten Text am Anfang frei, damit die Liste der Links besser gescannt werden kann.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Gestalten von Checkboxen
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Weitere farbbezogene Eigenschaften
- Für externe Links versuchen Sie, die Quell-Website und das Veröffentlichungsjahr oder das Letzter-Update-Datum (in Klammern) nach Möglichkeit und wenn sinnvoll anzugeben. Diese Informationen bereits zu vorn zu zeigen, gibt den Lesern klarere Vorstellung wohin sie gehen, wenn sie auf den Link klicken. Das Veröffentlichungsjahr oder das Letzter-Update-Datum hilft den Lesern, die Relevanz des verlinkten Artikels einzuschätzen, und es hilft auch den MDN Wartungspersonen beim Überprüfen von Links zu Artikeln, die seit langem nicht aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs- oder Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für das Hinzufügen eines Links zu einem externen Artikel [Top-level await](https://v8.dev/features/top-level-await), zusammen mit den Quell- und Jahresinformationen:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern, können Sie die Namen der Autoren ebenfalls angeben. Einige Beispiele sind in dem Abschnitt [Weiterführendes Lesen](#language_grammar_and_spelling) aufgelistet. Unterlassen Sie Autorennamen für Blog-Posts oder GitHub-Repositories, die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie zuerst die Links zu MDN-Seiten auf, gefolgt von den Links zu verwandten Leitfäden und Tutorialseiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich dazu, die Scanbarkeit der Listelemente zu verbessern.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst auf und danach die externen.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie alphabetisch oder der einfachen-zu-fortgeschrittenen Reihenfolge, was immer mehr Sinn macht für den Kontext.

### Unterseiten

Wenn Sie Artikel zu einem Thema oder Bereich hinzufügen möchten, tun Sie dies in der Regel, indem Sie eine Startseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Startseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technik beschreiben, dann eine Liste der Unterseiten mit einer Beschreibung jeder Seite bereitstellen.
Sie können das Einfügen von Seiten in die Liste mit Makros automatisieren, die wir erstellt haben.

Als Beispiel betrachten Sie den [JavaScript](/de/docs/Web/JavaScript) Leitfaden, der wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Haupt-Tischinhaltsverzeichnis Seite
- [JavaScript/Guide/JavaScript Overview](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie, zu vermeiden, Ihren Artikel an der Spitze der Hierarchie zu platzieren, da dies die Seite verlangsamt und die Suche und die Navigation auf der Website weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann vom Slug, also der Teil der Seiten-URL, der auf `<locale>/docs/` folgt, unterschiedlich sein. Behalten Sie beim Festlegen eines Slugs die folgenden Richtlinien im Kopf:

- Slugs sollten kurz gehalten werden. Wenn Sie ein neues Hierarchie-Niveau erstellen, sollte die neue Ebene, die die Slug-Struktur erhalten soll, nur ein oder zwei Wörter lang sein.
- Slugs sollten für eine mehrteilige Komponente, wie z.B. `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`, einen Unterstrich verwenden.
- Im Slug wird Satzcasing empfohlen, wie etwa in `Basic_HTML_syntax` im vorherigen Beispiel.

### Titel

Seitentitel werden in den Suchergebnissen sowohl zur Strukturierung der Seitenhierarchie (aufgelistet in der Brotkettung oben auf der Seite) genutzt als auch dort. Ein Seitentitel kann vom Seiten "Slug", wie im Abschnitt [Slugs](#slugs) erklärt, unterschiedlich sein.

Behalten Sie beim Schreiben von Titeln die folgenden Richtlinien im Kopf:

- **Großschreibungsstil**: Auf MDN Web Docs sollten Seitentitel und Überschriften Satzstil-Großschreibung verwenden (nur das erste Wort und Eigennamen werden großgeschrieben), anstelle von Überschriftstil-Großschreibung:

  - **Richtig**: "A new method for creating JavaScript rollovers"
  - **Falsch**: "A New Method for Creating JavaScript Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilrichtlinie erstellt wurden. Fühlen Sie sich frei, sie zu aktualisieren, wenn Sie möchten. Wir kommen allmählich zu ihnen.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren wollen und wie Sie diesen Inhalt strukturieren werden, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis zu schreiben, kann Ihnen helfen, zu entscheiden, wie Sie Informationen anordnen möchten. Cover einfache Konzepte zuerst dann weiter zu mehr komplizierten und fortgeschrittenen Konzepten. Cover konzeptionelle Informationen zuerst, dann gehen Sie zu aktionsorientierten Themen weiter.

  Behalten Sie die folgenden Richtlinien im Kopf, wenn Sie Titel für eine Seite und Abschnitte oder Unterabschnitte schreiben:

  - **Gehen Sie von höher zu niedriger**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) erwähnt, gehen Sie von höher `##` zu niedriger `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebenen für breitere Einleitungsüberschriften und verwenden Sie spezifischere Überschriften, wenn Sie zu niedrigeren Ebene fortschreiten.
  - **Gruppieren Sie logisch**: Stellen Sie sicher, dass alle zusammenhängenden Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Das Benennen von Titel verschiedener Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind in Texten und im Inhaltsverzeichnis besser zu scannen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu übermitteln, die der Abschnitt abdecken wird. Zum Beispiel verwenden Sie für einen Abschnitt über die Einführung von HTML-Elementen den Titel "HTML elements" anstelle von "Einleitung" oder "Übersicht".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel — eine einzelne Idee oder ein Konzept, das dieser Abschnitt abdecken wird, zu vermitteln. Aus diesem Grund verwenden Sie, so weit wie möglich, versuchen Sie die Konjunktion "und" in einem Titel zu vermeiden.
  - **Verwenden Sie eine parallele Konstruktion**: Verwenden Sie eine ähnliche Sprache für Titel auf derselben Ebene. Zum Beispiel, wenn ein Titel auf der Ebene `###` mit einem Partizip (also einem Wort, das auf -ing endet) wie "Installing" anfängt, dann versuchen Sie, alle Titel auf derselben Ebene mit einem Partizip zu schreiben. Wenn ein Titel mit einem Imperativverb anfängt, wie "Use", "Configure", dann schreiben Sie alle Titel auf derselben Ebene unter Verwendung eines Imperativverbes.
  - **Vermeiden Sie häufig verwendete Begriffe in der unteren Ebene**: Wiederholen Sie den Text der höheren Überschrift nicht in den Titeln der unteren Ebene. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas", geben Sie dem Titel eines Unterabschnitts "Nach einleitenden Klauseln" statt "Kommas nach einleitenden Klauseln" Namen.
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie, die Titel mit den Artikeln "a", "an" oder "the" zu beginnen.
  - **Fügen Sie Informationen zum Einleiten hinzu**: Nach einem Titel, fügen Sie einleitenden Text hinzu, um zu erläutern, was der Abschnitt abdecken wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stilrichtlinien

Wenn Sie Fragen zur Nutzung und zum Stil haben, die in diesem Leitfaden nicht behandelt werden, empfehlen wir, auf den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zurückzugreifen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie Ihre Schreib- und Bearbeitungsfähigkeiten verbessern möchten, finden Sie möglicherweise die folgenden Ressourcen hilfreich.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur englischen Sprachverwendung
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für Nicht-Muttersprachler, besonders für die Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
