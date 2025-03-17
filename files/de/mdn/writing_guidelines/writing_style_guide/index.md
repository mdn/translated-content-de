---
title: Stilrichtlinien für das Schreiben
short-title: Style guide
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 2865d3c239d8b02246480456fd8eb23230e3e5aa
---

Diese Stilrichtlinien beschreiben, wie Inhalte erstellt, organisiert, geschrieben und formatiert werden sollen, um auf MDN Web Docs veröffentlicht zu werden.

Diese Richtlinien sollen sicherstellen, dass Sprache und Stil auf der gesamten Website konsistent sind. Dennoch legen wir mehr Wert auf Inhalte als auf deren Formatierung. Fühlen Sie sich also nicht verpflichtet, die gesamte Schreibstilrichtlinie zu lernen, bevor Sie einen Beitrag leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um sie an diese Richtlinien anzupassen. Die Reviewer könnten Sie auch auf diese Stilrichtlinien hinweisen, wenn Sie eine Pull-Anfrage für Inhalte einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieser Anleitungen beziehen sich hauptsächlich auf die Dokumentation in englischer Sprache. Andere Sprachen können (und sind eingeladen, dies zu tun) ihre eigenen Stilrichtlinien erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams-Seite veröffentlicht werden. Dennoch sollte diese Anleitung weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der allgemeinen Übersichts der Schreibrichtlinien beschreibt diese Anleitung den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden sollen, wie z. B. Listen und Überschriften.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu erstellen, die alle Informationen enthalten, die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihr Zielpublikum](#berücksichtigen_sie_ihr_zielpublikum)
- [Berücksichtigen Sie die drei C's des Schreibens](#berücksichtigen_sie_die_drei_c's_des_schreibens)
- [Fügen Sie relevante Beispiele hinzu](#fügen_sie_relevante_beispiele_hinzu)
- [Bereiten Sie eine beschreibende Einführung vor](#bereiten_sie_eine_beschreibende_einführung_vor)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für die Inhalte, die Sie schreiben, im Auge. Zum Beispiel sollte eine Seite zu fortgeschrittenen Netzwerktechniken vermutlich nicht so detailliert auf grundlegende Netzwerk-Konzepte eingehen wie eine typische Seite über Netzwerke. Bitte beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Berücksichtigen Sie die drei C's des Schreibens

Die drei C's des guten Schreibens sind klar, prägnant und konsistent.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Nutzen Sie in der Regel den aktiven Sprachstil und verwenden Sie eindeutige Pronomen. Schreiben Sie kurze Sätze und halten Sie sich an eine Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden, unter Berücksichtigung des Zielpublikums.
- **Prägnant**: Beim Schreiben eines Dokuments ist es wichtig, zu wissen, wie viel gesagt werden muss. Wenn Sie zu ausführlich werden, wird die Seite ermüdend zu lesen und selten genutzt.
- **Konsistent**: Achten Sie darauf, eine einheitliche Wortwahl beizubehalten, sowohl auf der Seite selbst als auch über mehrere Seiten hinweg.

### Fügen Sie relevante Beispiele hinzu

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den von Ihnen geschriebenen Inhalt besser zu erklären. Dies hilft den Lesern, konzeptionelle und verfahrensmäßige Informationen auf greifbarere und praktischere Weise zu verstehen.

Beispiele sollten verwendet werden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um eventuelle Sonderfälle zu klären, die auftreten können.
Sie können auch Beispiele verwenden, um Lösungen für allgemeine Aufgaben und Probleme, die möglicherweise auftreten, zu demonstrieren.

### Bereiten Sie eine beschreibende Einführung vor

Stellen Sie sicher, dass der einleitende Absatz oder die einleitenden Absätze vor der ersten Überschrift die Informationen zusammenfassen, die auf der Seite behandelt werden, und möglicherweise, was die Leser erreichen können, nachdem sie den Inhalt durchgearbeitet haben. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen sowie die vorausgesetzten Kenntnisse, die der Leser haben sollte, informieren, sofern vorhanden. Der einleitende Absatz sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen und Verweise auf die relevanten Informationen sowie Hinweise auf Situationen, in denen die Inhalte des Artikels nützlich sein könnten, bieten.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen aus, wie z. B. was es genau bedeutet, Text zu „streichen“, wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, ist aber jetzt viel zu lang. Es sind zu viele Details enthalten, und der Text geht zu sehr auf die Beschreibung anderer Methoden und Eigenschaften ein. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben werden.

  > Wenn die Canvas-2D-API-Methode **`CanvasRenderingContext2D.strokeText()`** aufgerufen wird, werden die Zeichen in der angegebenen Zeichenfolge ab den angegebenen Koordinaten in der aktuellen Stiftfarbe gestreichelt.
  > In der Terminologie der Computergrafik bedeutet "Streicheln" von Text, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schriftart des Kontexts gezeichnet, wie im Font des Kontexts [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) Eigenschaft angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, beginnt die Zeichenfolge ab `x - (stringWidth / 2)`, sodass die angegebene X-Koordinate in der Mitte der Zeichenfolge liegt.
  > Wenn der Wert `"left"` ist, beginnt die Zeichenfolge mit dem angegebenen Wert von `x`.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der spezifizierten X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter bereitstellen, mit dem Sie eine maximale Breite für die Zeichenfolge in Pixeln angeben können.
  > Wenn Sie diesen Parameter bereitstellen, wird der Text beim Zeichnen horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen so breiten Raum zu passen.
  >
  > Sie können die Methode **`fillText()`** aufrufen, um die Zeichen einer Zeichenfolge als mit Farbe gefüllt anstelle der Umrisse der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Hier sehen wir einen viel besseren Überblick über die `strokeText()` Methode.

  > Die Methode [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), streicht (zeichnet die Umrisse) die Zeichen einer angegebenen Zeichenfolge, die an der Position verankert ist, die durch die angegebenen X- und Y-Koordinaten angezeigt wird.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) Abschnitt auf der Seite zum Zeichnen von Grafiken sowie unseren Hauptartikel zum Thema, [Texte zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen dringend dazu, Texte so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gebräuchlichen Begriffen, die in der Dokumentation verwendet werden:

- Vermeiden Sie die Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **Dummy** verwenden Sie **Placeholder**.
- Sie sollten nicht die Begriffe **crazy** und **insane** in der Dokumentation verwenden; falls der Fall eintritt, ziehen Sie in Betracht, statt **fantastic** zu verwenden.

Es ist am besten, geschlechtsneutrale Sprache in allen Texten zu verwenden, wo das Geschlecht für das Thema irrelevant ist.
Wenn Sie zum Beispiel die Handlungen eines bestimmten Mannes beschreiben, ist die Verwendung von "er"/"sein" in Ordnung. Wenn jedoch die Person von unabhängigem Geschlecht ist, ist "er"/"sein" nicht angemessen.

Sehen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu korrigieren, verwenden Sie geschlechtsneutrale Pronomen so:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlauben die Verwendung der dritten Person Plural, allgemein bekannt als "[Singular 'sie'](https://de.wikipedia.org/wiki/Singularthey)." Die geschlechtsneutralen Pronomen beinhalten "sie", "ihnen", "ihr" und "ihres".

Eine andere Option besteht darin, die Benutzer plural zu machen, so:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, das Problem zu umgehen, indem man die Pronomen entfernt:

- **Richtig**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers für den Zugriff auf die Webcam anfordert, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Verwendung der Webcam bittet, erscheint."

Dieses letzte Beispiel, wie mit dem Problem umgegangen wird, ist ohne Zweifel besser.
Es ist nicht nur grammatikalisch korrekter, sondern entfernt auch einige der Komplexitäten, die mit dem Umgang mit Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise stark unterschiedliche Geschlechterregeln haben.
Diese Lösung kann die Übersetzung für Leser und Übersetzer erleichtern.

### Schreiben Sie mit SEO im Hinterkopf

Während das primäre Ziel jeder Schrift auf MDN Web Docs immer darin bestehen sollte, über offene Webtechnologie zu erklären und zu informieren, damit Entwickler schnell lernen können, wie sie das tun, was sie wollen, oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie in der Lage sind, das Material zu _finden_, das wir schreiben. Wir können dies erreichen, indem wir Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) im Hinterkopf behalten, während wir schreiben.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unsere Materialien leicht kategorisieren und indexieren können, um sicherzustellen, dass die Leser leicht finden können, was sie brauchen. Die SEO-Richtlinien umfassen die Gewährleistung, dass jede Seite, an der Autoren und Editoren arbeiten, vernünftig gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel ordnungsgemäß zu indexieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn ordnungsgemäß von Suchmaschinen indiziert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich zu ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten über dasselbe Thema sind, auch wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, mit nur wenigen ausgetauschten Wörtern und die dasselbe Beispiel verwenden. Dies erschwert es Suchmaschinen, zu wissen, welches was ist, und sie teilen den Seitenrang, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Es ist daher wichtig sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, die Ihnen dabei helfen können:

  - **Erklären Sie mehr einzigartige Konzepte**: Berücksichtigen Sie Nutzungsszenarien, bei denen es möglicherweise mehr Unterschiede gibt, als man denkt. Beispielsweise beim Dokumentieren von `width`- und `height`-Eigenschaften vielleicht über die Art und Weise schreiben, wie horizontaler Raum und vertikaler Raum unterschiedlich genutzt werden, und eine Diskussion über die entsprechenden Konzepte führen. Vielleicht können Sie die Verwendung von `width` in Bezug auf das Schaffen von Platz für eine Seitenleiste erwähnen, während `height` verwendet wird, um mit vertikalem Scrollen oder Fußzeilen umzugehen. Die Aufnahme von Informationen zu Barrierefreiheitsproblemen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie verschiedene Beispiele**: Beispiele in diesen Situationen sind oft sogar ähnlicher als der eigentliche Textkörper, da die Beispiele möglicherweise beide (oder alle) der ähnlichen Methoden oder Eigenschaften verwenden, um anzufangen, und daher keine wirklichen Änderungen bei der Wiederverwendung erforderlich sind. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder bieten Sie zumindest mehrere Beispiele an, von denen zumindest einige unterschiedlich sein sollten.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Darstellung dessen, wie es funktioniert, sollte auf einem geeigneten Detailniveau basierend auf der Komplexität des Themas und der Zielgruppe enthalten sein.

  Der einfachste Weg, um übermäßig ähnlich zu sein zu vermeiden, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (im SEO-Jargon als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt) katalogisieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie stellen Sie sicher, dass die Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter oder so sind. Künstlich eine Seite aufzublähen ist nicht angebracht, aber behandeln Sie diese Richtlinie als ein mindestens anzustrebendes Ziel, wenn möglich.

  Hier sind einige grundlegende Richtlinien, um Ihnen dabei zu helfen, Seiten zu erstellen, die genug Inhalt haben, um ordnungsgemäß durchsuchbar zu sein, ohne darauf zurückzugreifen, sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub oder unvollständig ist, ergänzen Sie ihn. Wir versuchen, ausdrücklich "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, die große Teile ihres Inhalts vermissen.
  - **Überprüfen Sie die Struktur der Seite**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für den [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) richtig strukturiert ist, der sie sein soll. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessenen Inhalt haben.
  - **Stellen Sie die Vollständigkeit sicher**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen abgedeckt sind — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es besondere Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele nie berichtet oder kopiert und eingefügt werden, um die Übersichtlichkeit und Verständlichkeit der Seiten zu gewährleisten. Bieten Sie Beispiele an, die alle Parameter oder zumindest die Parameter (oder Eigenschaften, oder Attribute) abdecken, die Benutzer von der Anfänger- bis zur Mittelstufe wahrscheinlich verwenden werden, sowie alle fortgeschritteneren, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte eine Übersicht darüber bringen, was das Beispiel tun wird, welches zusätzliche Wissen erforderlich sein könnte, um es zu verstehen, und so weiter. Nach dem Beispiel (oder dazwischen eingefügt) sollte Text enthalten sein, der erklärt, wie der Code funktioniert. Sparen Sie nicht an Details oder die Handhabung von Fehlern in Beispielen. Beachten Sie, dass Benutzer _beispielsweise_ Ihren Beispielen kopieren und in ihren eigenen Projekten verwenden können und dass Ihr Code _auf Produktionsseiten_ verwendet wird. Sehen Sie unseren [Codebeispielrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) für nützliche Informationen zu diesem Thema.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für das beschriebene Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer feststellen wird, dass die dokumentierte Methode verwendet werden kann, um ein gängiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text ein, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie für alle Bilder und Diagramme ordnungsgemäße [`Alt`](/de/docs/Web/HTML/Element/img#alt) Texte hinzu. Dieser Text sowie Beschriftungen auf Tabellen und anderen Formen zählen, da Suchmaschinen-Bots nicht in der Lage sind, Bilder zu durchsuchen und Alt-Text Suchmaschinen-Crawler darüber informieren, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht im Zusammenhang mit dem Feature stehen, hinzuzufügen, um die Suchmaschinenergebnisse zu manipulieren; Dieses Verhalten ist leicht zu erkennen und wird tendenziell bestraft.
    > Ebenso **bitte nicht** wiederholte, unbrauchbare Materialien oder Gruppen von Schlüsselwörtern innerhalb der tatsächlichen Seite hinzufügen, in einem Versuch, die Seitenlänge und Suchergebnisse zu verbessern. Dies schadet dem Lesefluss als auch den Suchergebnissen mehr.

- **Fokus auf Inhalt des Themas**: Es ist viel besser, den Inhalt rund um das Thema der Seite zu schreiben, als um ein bestimmtes Schlüsselwort. Es ist hochwahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema hinzufügen könnten; Tatsächlich erstellen viele SEO-Experten eine Liste von 5-100 verschiedenen Schlüsselwörtern (variierend zwischen kurzen, mittleren und langen Schlüsselwörtern), die sie in ihren Artikel aufnehmen möchten, abhängig von der Länge. Dies wird Ihren Wortschatz diversifizieren und zu weniger Wiederholungen führen.

## Schreibstil

Abgesehen davon, dass grammatikalisch korrekte Sätze auf Englisch geschrieben werden, empfehlen wir, dass Sie diesen Richtlinien folgen, um den Inhalt auf MDN Web Docs einheitlich zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralisierung](#pluralisierung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommata](#kommata)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das durch die Verwendung des ersten Buchstabens jedes Wortes eines Satzes gebildet wird. In diesem Abschnitt werden Richtlinien für Abkürzungen und Akronyme beschrieben.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite sollten die für Benutzer unbekannten Akronyme ausgeschrieben werden. Wenn Sie sich unsicher sind, schreiben Sie den Begriff aus. Noch besser ist es, ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary)-Eintrag zu verlinken, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Großbuchstaben und entfernen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (usw., d.h. z. B.) in Klammern und Anmerkungen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen angemessenen Satzzeichen.

  - **Richtig**: Webbrowser (z. B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B.: Firefox) können verwendet werden ...

  Im regulären Text (d.h. Text außerhalb von Anmerkungen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... Webbrowser usw.
  - **Falsch**: ... Webbrowser, usw.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen zusammen:

  | Abk.  | Deutsch          | Englisch                 |
  | ----- | ---------------- | ------------------------ |
  | vgl.  | _vergleiche_     | compare                  |
  | z. B. | _exempli gratia_ | for example              |
  | u. a. | _et alii_        | and others               |
  | usw.  | _et cetera_      | et cetera, und so weiter |
  | d.h.  | _id est_         | that is, in other words  |
  | NB    | _nota bene_      | note well                |
  | PS    | _post scriptum_  | postscript               |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige davon sind so selten, dass viele Leser entweder verwirrt sind oder ihre Bedeutungen nicht verstehen.
  >
  > Achten Sie auch darauf, dass _Sie_ sie korrekt verwenden, wenn Sie sich entscheiden, dies zu tun. Achten Sie zum Beispiel darauf, "z. B." nicht mit "d.h." zu verwechseln, was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Für Pluralformen von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals einen Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Abkürzung benutzen, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. An anderer Stelle im Text verwenden Sie das ausgeschriebene Wort "versus".

  - **Richtig**: dies vs. jenes
  - **Falsch**: dies v. jenes
  - **Richtig**: dies versus jenes

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Fließtext, und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (allein oder als Modifikator im Kleinbuchstaben) und "internet" im Kleinbuchstaben zu verwenden.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Handbuchs, sodass Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN finden.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber es ist nicht erforderlich, einen Artikel nur zur Änderung der Großschreibung zu bearbeiten.

Tastaturtasten sollten die Satzstil-Großschreibung und keine Großbuchstabengroßschreibung verwenden.
Zum Beispiel, "<kbd>Enter</kbd>" statt "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" zur Abkürzung der "<kbd>Escape</kbd>"-Taste verwenden können.

Bestimmte Wörter sollten immer großgeschrieben werden, wie z. B. Marken, die Großbuchstaben enthalten, oder Wörter, die sich vom Namen einer Person ableiten (es sei denn, das Wort wird im Code verwendet und die Syntax erfordert eine Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://de.wikipedia.org/wiki/George_Boole))
- JavaScript (eine eingetragene Marke von Oracle Corporation, sie sollte immer als eingetragene Marke geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, informell zu sein, deshalb können Sie Kontraktionen (z. B. "don't", "can't", "shouldn't") verwenden, wenn Sie es vorziehen.

### Zahlen und Ziffern

- **Kommata**: Im Fließtext verwenden Sie Kommata nur in fünf- oder größeren Zahlen.

  - **Richtig**: 4000; 54.000
  - **Falsch**: 4.000; 54000

- **Daten**: Für Daten (mit Ausnahme von Daten in Codebeispielen) verwenden Sie das Format "1. Januar 1900".

  - **Richtig**: 24. Februar 1906
  - **Falsch**: 24. Februar 1906; 24 Februar, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990er". Verwenden Sie keinen Apostroph.

  - **Richtig**: 1920er
  - **Falsch**: 1920's

- **Pluralformen von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie die englischen Pluralformen, nicht die latein- oder griechisch beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Apostrophe. Auf MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns für Konsistenz für das eine oder das andere entscheiden müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Code-Snippets, sogar in inline Snippets, ihren Weg finden, könnten Leser sie kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen.“

### Kommata

Die folgende Liste beschreibt einige der häufigsten Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Sätzen**: Ein einleitender Satz ist ein abhängiger Satz, der normalerweise am Anfang eines Satzes steht. Verwenden Sie nach einem einleitenden Satz ein Komma, um ihn von dem folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel sehen Sie, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel sehen Sie, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie meist eine Zifferntastatur zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie meist eine Zifferntastatur zum Eingeben von Daten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. Auf MDN Web Docs verwenden wir das Serienkomma. Kommata trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "Mein Hund ist süß und klug."
  - **Falsch**: "Mein Hund ist süß, und klug."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz jedoch aufgrund der Konjunktion sehr lang oder komplex wird, überlegen Sie, ob Sie ihn nicht in zwei Sätze aufteilen sollten.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellungen achten."
    - **Falsch**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellungen achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Ein restriktiver Satz ist für die Bedeutung des Satzes unerlässlich und muss nicht durch Kommata vom restlichen Satz getrennt werden. Ein restriktiver Satz wird normalerweise durch "dass" eingeführt und darf **nicht** durch ein Komma eingeleitet werden.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen beinhaltet, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen beinhaltet, die Sie benötigen, um Ihr Ziel zu erreichen."

  Ein nicht restriktiver Satz bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nicht restriktiver Satz wird normalerweise durch "welches" eingeführt und sollte durch ein Komma eingeleitet werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jede Funktion ist."
  - **Falsch**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Ursprüngen für jede Funktion ist."

- **Vor "wie"**: Wenn "wie" Teil eines nicht restriktiven Satzes ist und der restliche Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "wie".

  - **Richtig**: "Das Array-Objekt verfügt über Methoden, um Arrays auf verschiedene Weise zu manipulieren, wie z.B. das Zusammenfügen, das Umkehren und das Sortieren."
  - **Falsch**: "Das Array-Objekt verfügt über Methoden, um Arrays auf verschiedene Weise zu manipulieren wie das Zusammenfügen, das Umkehren und das Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "wie" verwendet werden muss. Hier ist der Satz, der "wie" enthält, entscheidend für die Bedeutung des Satzes.

  - **Richtig**: "Webanwendungen werden leistungsfähiger, indem Funktionen hinzugefügt werden, wie z.B. die Audio- und Videobearbeitung und der Zugriff auf Rohdaten mithilfe von WebSockets."
  - **Falsch**: "Webanwendungen werden leistungsfähiger, indem Funktionen hinzugefügt werden, wie z.B. die Audio- und Videobearbeitung und der Zugriff auf Rohdaten mithilfe von WebSockets."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrich versehen werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und mit dem ersten Buchstaben der Wurzel übereinstimmt.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanische Rechtschreibung.

Im Allgemeinen nutzen Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als alternative Schreibweise oder hauptsächlich in einer nicht-amerikanischen Form des Englischen aufgeführt.
Beispielsweise, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform) nachschlagen, finden Sie die Phrase "Chiefly British" gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternativen Schreibweisen.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu erkennen. Es wird jede Woche ausgeführt und erstellt [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal mit dem folgenden Befehl ausführen:

```bash
yarn lint:typos
```

Im Repository pflegen wir mehrere Wortlisten, die sich in [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und genehmigte Wörter enthalten, die nicht in den Standardwörterbüchern enthalten sind. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig sind, aber vom Rechtschreibprüfer als fehlerhaft gemeldet werden. Lesen Sie [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json), um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungs-Konfiguration.

### Terminologie

Diese sind unsere Empfehlungen zur Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element" für HTML- und XML-Elemente, anstelle von "Tag". Außerdem sollte das Element in spitzen Klammern "<>" eingehüllt und unter Verwendung von Backticks (\`) formatiert werden. Beispielsweise wird `<input>` innerhalb von Backticks wie erwartet als `<input>` formatiert.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, das das Element formatieren, die spitzen Klammern "<>" hinzufügen und einen Link zu seiner Referenzseite hinzufügen wird.

  - **Unter Verwendung von Backticks**: `<span>`
  - **Unter Verwendung des Makros**: {{HTMLElement("span")}} (im Markdown-Quelltext: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente" zur Konsistenz, wann immer möglich.

- **Benutzeroberflächenaktionen**: In Aufgabensequenzen beschreiben Sie Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und Typs.

  - **Richtig**: "Klicken Sie auf die Bearbeiten-Schaltfläche."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Obwohl der aktive Modus bevorzugt wird, ist der passive Modus ebenfalls akzeptabel, basierend auf dem informellen Stil unserer Inhalte.
Versuchen Sie jedoch, konsistent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, denen für verschiedene Teile jeder Seite, wie Überschriften, Hinweise, Links und Beispiele, gefolgt werden muss.

- [Codebeispiele](#codebeispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Kurz-URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftsebenen](#überschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt "Siehe auch"](#abschnitt_"siehe_auch")
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Überschriften](#überschriften)

### Codebeispiele

Eine Seite auf MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für MDN Web Docs:

- Jedes Stück Beispielcode sollte beinhalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das durch das Codebeispiel demonstrierte Szenario zu beschreiben. Zum Beispiel, "Offset-Druck verwenden" und "Zurück zum Stil in vorheriger Schicht kehren".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die besonderen Spezifika des Beispiels darlegt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel, "Im Beispiel unten sind zwei Kaskadenschichten in der CSS definiert, `base` und `special`."
  - **Ergebniserklärung**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Merkmals demonstrieren und wie es verwendet wird, sondern auch den Zweck hervorheben und Situationen, in denen ein Webentwickler das Feature möglicherweise verwenden möchte oder benötigt.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile zu zerlegen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen [lebender Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) kann es nützlich sein zu wissen, dass alle Codeblöcke des Beispiels mit demselben Typ (HTML, CSS und JavaScript) vor dem Ausführen des Beispiels zusammengeführt werden. Dies ermöglicht es Ihnen, den Code in mehrere Segmente aufzuteilen, wobei jedes optional eigene Beschreibungen, Überschriften usw. haben kann. Dies macht das Dokumentieren des Codes unglaublich leistungsstark und flexibel.

Um zu lernen, wie Codebeispiele für MDN Web Docs zu gestalten oder zu formatieren sind, siehe [Richtlinien zum Stylen von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Querverweise (Verlinkung)

Wenn auf eine andere Seite oder den Abschnitt einer Seite auf MDN mit ihrem Titel verwiesen wird, folgen Sie der Satzzeichen-Großschreibung im Link-Text (entspricht dem Seitentitel oder Abschnittstitel). Verwenden Sie Satzzeichen im Link-Text, auch wenn es vom verlinkten Seitentitel oder Abschnittstitel abweicht (es könnte sein, dass die Großschreibung im Seiten- oder Abschnittstitel falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext herum. Um auf eine Seite auf MDN mit ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den [Bestellen von flexiblen Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Falsch**: "Siehe den "[Bestellen von flexiblen Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Ähnlich sollten Sie vorgehen, wenn Sie auf einen Abschnitt auf einer Seite verlinken, wie unten gezeigt:

- **Richtig**: "Für weitere Informationen siehe den [Speicherzuweisung in JavaScript](/de/docs/Web/JavaScript/Guide/Memory_management#allocation_in_javascript) Abschnitt auf der _Speicherverwaltung_ Seite."

Wenn der Abschnitt, auf den Sie verlinken, sich auf derselben Seite befindet, können Sie mit den Wörtern "oben" oder "unten" auf den Ort des Abschnitts hinweisen.

- **Richtig**: "Dieses Konzept wird im [Zugänglichkeit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt unten ausführlicher beschrieben."

Sie können auch einen Teil eines Satzes verlinken, um auf einen Artikel oder den Abschnitt eines Artikels zu verlinken. Seien Sie sich bewusst, beschreibende Phrasen als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite bereitzustellen.

- **Richtig**: "Erfahren Sie mehr über [wie man flexible Elemente bestellt](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN gibt es eine weitere Möglichkeit, auf eine Referenzseite zu verlinken, indem man ein Makro verwendet. Diese Makros werden auf der [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) Seite beschrieben. Beispielsweise verwenden Sie das `HTMLElement`-Makro, um auf die Referenzseite eines HTML-Elements zu verlinken, und das `CSSxRef`-Makro, um auf die Referenzseite einer CSS-Eigenschaft zu verlinken.

Wir folgen ähnlichen Querverweiss-Richtlinien im [Siehe auch](#siehe_auch) Abschnitt am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es akzeptabel ist, einen externen Link auf MDN Web Docs hinzuzufügen. Ihr Pull Request zur Hinzufügung eines externen Links wird abgelehnt, wenn er nicht den hier beschriebenen Richtlinien entspricht.

Wenn Sie erwägen, einen externen Link zu MDN-Webentwicklungsinhalten hinzuzufügen, lesen Sie bitte auch [MDN-Writing-Guidelines-Webentwicklung > Externe Links und Einbettungen](/de/docs/MDN/Writing_guidelines/Learning_content#external_links_and_embeds).

Im Allgemeinen müssen Sie sicherstellen, dass es beim Hinzufügen eines externen Links ein minimales Risiko gibt, folgende Punkte sicherzustellen:

- Kaputte oder veraltete Links
- Erscheinung einer Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuchen, MDN Web Docs für den Versand von Spam zu verwenden
- Kurzlinks, die das Ziel der Verlinkung verbergen

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie darüber nachdenken, Inhalte innerhalb der MDN Web Docs zu verknüpfen. Interne Links sind einfacher zu warten und machen die Gesamtheit der MDN Web Docs für Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen die Leser zu hilfreichen, langlebigen und weithin vertrauenswürdigen Ressourcen. Sie sollten bevorzugt Links zu externen Inhalten hinzufügen, die sind:

  - Einzigartig oder unverzichtbar (z.B. ein IETF RFC)
  - Notwendig für eine Quellenangabe, ein Zitat oder ein Anerkennung (z.B. im Rahmen einer Creative Commons Attribution)
  - Wahrscheinlich umfassender gewartet zu einem Thema als solche Inhalte in MDN Web Docs selbst (z. B. Versionshinweise eines Herstellers)
  - Open Source oder gemeinschaftlich gefahren, ähnlich wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links mangeln es an Relevanz, Wartbarkeit, Zugänglichkeit oder setzen anderweitig Barrieren für Leser. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die sind:

  - Allgemein oder unspezifisch (z. B. die Startseite eines Anbieters, statt der zugehörigen Dokumentation)
  - Kurzlebig oder nicht unterstützend (z. B. eine einmalige Ankündigung)
  - Selbstverlinkend oder Eigenwerbung (z. B. die eigenen Arbeiten des Autors außerhalb von MDN Web Docs)
  - Kostenpflichtig (z. B. ein teurer Kurs außerhalb der Reichweite von Hobbynutzern, Studenten oder Lesern, die in niedrigeren Einkommensländern leben)
  - Nicht zugänglich (z. B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blog-Beitrag, ein Konferenzgespräch oder ein GitHub-Repository wertvoll sein kann, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts erwecken. Denken Sie zweimal nach, bevor Sie auf Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull Request offenlegen. Das Versäumnis, dies zu tun, kann Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie beispielsweise der Editor einer Spezifikation sind und Sie zur Dokumentation im Zusammenhang mit dieser Spezifikation beitragen, dann wird das Verlinken zu dieser Spezifikation erwartet und ist akzeptabel. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Kurz-URL's (Kurzlinks)

Ein URL-Shortener (z.B. TinyURL oder Bitly) kann großartig dafür sein, lange Links in kurze, einprägsamere URLs (auch "Kurzlinks" genannt) zu kürzen. Dennoch verschleiern sie auch das Ziel der URL. Außerdem kann mit bestimmten Shortenern das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die von Drittanbietern (user-generatable) URL-Shortenern erstellt wurden. Zum Beispiel, wenn `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` umleitet, verwenden Sie die längere `example.com` URL.

Auf der anderen Seite sind first-party Shortener, die von den Organisationen betreut werden, die auch die Ziel-URLs betreiben, empfohlen. `https://bugzil.la` gehört und wird betrieben von Mozilla und ist ein URL-Shortener, welcher zu `https://bugzilla.mozilla.org/` umleitet, das ebenfalls eine Mozilla-eigene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Verwenden Sie beispielsweise `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in absteigender Reihenfolge ohne Ebenen zu überspringen: `##`, dann `###`, dann `####`; diese wandeln sich in die [HTML-Überschriftentags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>` und `<h4>` um.

`##` ist die höchste erlaubte Ebene, weil `#` für den Seitentitel reserviert ist.
Es wird empfohlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie meinen, dass eine vierte Überschriftenebene erforderlich ist, überlegen Sie, ob Sie den Artikel nicht in mehrere kleinere Artikel mit einer Landesseite aufteilen. Alternativ sehen Sie, ob Sie die Informationen in Gliederungspunkten präsentieren können, um die Notwendigkeit einer vierten Überschriftenebene zu vermeiden.

Halten Sie die folgenden Dos und Don'ts im Kopf, während Sie Überschriften für Unterabschnitte erstellen:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einziges Unterthema.
  Es muss entweder zwei Überschriften oder mehr oder gar keine geben.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z. B. "Verwendung der `FooBar`-Schnittstelle").
- **Erstellen Sie keine "anstoßenden Köpfe".** Diese sind Überschriften, gefolgt unmittelbar von einer Unterüberschrift, ohne dass dazwischen Text erscheint.
  Das sieht nicht gut aus und lässt dem Leser keinen erklärenden Text zu Beginn des äußeren Abschnitts.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite hinzufügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz Ihnen erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr großzügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder zumindest mit unserer allgemeinen Inhaltslizenz — [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel sind.
- Für Bilder sollten Sie diese durch <https://tinypng.com> oder <https://imageoptim.com> laufen lassen, um die Seitengröße zu reduzieren.
- Für `SVG` sollten Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) laufen lassen und sicherstellen, dass die `SVG`-Datei eine leere Zeile am Ende des Dokuments hat.
- Jedes Bild muss [einen beschreibenden `alt`-Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) enthalten.

### Listen

Listen sollten konsistent auf allen Seiten formatiert und strukturiert werden.
Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig vom Listenformat.
Je nach Art der Liste, die Sie erstellen, sollten Sie jedoch Ihren Schreibstil anpassen, wie in den folgenden Abschnitten beschrieben. In beiden Fällen fügen Sie einen einführenden Satz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungszeichen**: Aufzählungszeichen sollten verwendet werden, um verwandte und prägnante Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. unvollständige Sätze ohne Verb oder Subjekt oder beides) in Listen mit Aufzählungszeichen sollten standardmäßige Interpunktion enthalten — Sätze enden mit Punkten, Phrasen nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss am Ende jedes Satzes, einschließlich des letzten Satzes des Items, wie in einem Absatz, ein Punkt erscheinen. Dies ist ein Beispiel für eine korrekt strukturierte Liste mit Aufzählungspunkten:

  > In diesem Beispiel sollten wir enthalten:
  >
  > - Einen Zustand, mit einer kurzen Erklärung.
  > - Einen ähnlichen Zustand, mit einer kurzen Erklärung.
  > - Noch einen weiteren Zustand, mit etwas weiterer Erklärung.

  Beachten Sie, wie sich die gleiche Satzstruktur vom Punkt zu Punkt wiederholt. In diesem Beispiel erklärt jeder Aufzählungspunkt einen Zustand, gefolgt von einem Komma und einer kurzen Erklärung und endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden, mit Farben verbundenen Eigenschaften sind in diesem Szenario hilfreich:
  >
  > - propertyA: Bestimmt die Hintergrundfarbe
  > - propertyB: Fügt dem Text einen Schatten hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie nach jedem Listenelement einen Punkt, auch wenn ein Listenelement drei oder weniger Wörter enthält. Versuchen Sie jedoch, die gleiche Struktur für alle Elemente in einer Liste zu befolgen; Stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einem Satz von Anweisungen zu numerieren. Da Anweisungen komplex sein können, steht Klarheit im Vordergrund, insbesondere wenn der Text in jedem Listenelement lang ist. Wie bei Listen mit Aufzählungszeichen befolgen Sie die standardmäßige Interpunktionsverwendung. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer den Kontext zu geben, bevor er mit den Anweisungen beginnt.
  > 2. Beginnen Sie mit dem Erstellen Ihrer Anweisungen und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich umfangreich sein, daher ist es wichtig, klar zu schreiben und korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen beendet haben, folgen Sie der nummerierten Liste mit einer kurzen Abschlusszusammenfassung oder einer Erklärung darüber, was das erwartete Ergebnis bei Abschluss ist.

  Das folgende ist ein Beispiel, wie Sie eine Abschluss Erklärung für die obige Liste schreiben können:

  > Wir haben eine kurze nummerierte Liste erstellt, die instruktive Schritte zum korrekten Formatieren und Strukturieren einer nummerierten Liste enthält.

  Beachten Sie, wie sich die Elemente in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Anweisungen oder zum Durchlaufen eines geordneten Verfahrens verwendet werden, achten Sie darauf, dass jedes Element fokussiert bleibt: ein numeriertes Element pro Schritt.

### Abschnitt "Siehe auch"

Die meisten Leitfäden, Referenzseiten und viele Glossarseiten auf MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross-references_linking) zu verwandten Themen innerhalb von MDN und manchmal Hinweise auf verwandte externe Artikel. Zum Beispiel ist das der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die Seite `@layer`.

Im Allgemeinen sollten Sie Links in einem Siehe auch-Abschnitt im [Listen mit Aufzählungspunkten](#listen)-Format präsentieren, mit jedem Listenelement als Phrase. Im MDN-Bereich [Webentwicklung lernen](/de/docs/Learn_web_development) hingegen folgt der Siehe auch Abschnitt dem [Definitionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists)-Format.

Um Konsistenz in den MDN Web Docs beizubehalten, beachten Sie die folgenden Richtlinien, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Linktexte

- Der Linktext sollte mit dem Titel der Seite oder des Abschnitts übereinstimmen, auf die verwiesen wird. Beispielsweise wird der Linktext auf dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Reference/Attributes) Seite mit dem Seitentitel "ARIA-Zustände und -Eigenschaften" so aussehen:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
- Verwenden Sie die Satzzeichen-Großschreibung im Linktext, auch wenn sie vom verlinkten Seitentitel oder Abschnittstitel abweicht. Es könnte sein, dass die Großschreibung im Seiten- oder Abschnittstitel falsch ist. Beispielsweise wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrekter Satzzeichen-Großschreibung so sein:
  - **Richtig**: [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Verwenden Sie Satzzeichen-Großschreibung auch für externe Links, selbst wenn sie auf der Zielartikelseite anders ist. Dies soll konsistenz in den MDN Web Docs sicherstellen. Ausnahmen sind Buchnamen.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie auf der Seite [Linking to pages in references](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_ Seite beschrieben ist. Die Verwendung des Makros wird das Schlüsselwort im Linktext als Code formatiert, wie im nächsten Beispiel gezeigt wird.
- Kein Artikel ("Ein", "Eine", "Der") ist am Anfang des Linklistenelements erforderlich. Am Ende des Listenelements ist keine Interpunktion erforderlich, da es stets ein Begriff oder eine Phrase ist.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Der [`revert-layer`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Richtig**: [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, sollten Sie Codeformatierungen mit Hilfe von Backticks (\`) zu Schlüsselwörtern und Literalen im Linktext hinzufügen, auch wenn die Formatierung nicht in Seiten- und Abschnittsüberschriften verwendet wird. Zum Beispiel ist der Linktext für den Seitentitel "Array() Konstruktor" [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).

#### Beschreibender Text

- Halten Sie den umgebenden beschreibenden Text kurz. Bei einer Beschreibung, fügen Sie diese nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Interpunktion. Halten Sie den gesamten verlinkten Text am Anfang, um das Scannen der Linkliste zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren für das Styling von Kontrollkästchen
- Verwenden Sie vor dem letzten Element in der Serie keine Verbindung "und".
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links, versuchen Sie, wenn möglich, die Quelle der Webseite und das Jahr der Veröffentlichung oder der letzten Aktualisierung als Information anzugeben. Die Angabe dieser Informationen gibt den Lesern eine klare Vorstellung davon, wohin sie geleitet werden, wenn sie auf den Link klicken. Das Datum der Veröffentlichung oder der letzten Aktualisierung hilft den Lesern, die Relevanz des verlinkten Artikels zu bewerten, und unterstützt auch MDN-Maintainer dabei, Links zu Artikeln zu überprüfen, die seit langer Zeit nicht aktualisiert wurden. Wenn Sie beispielsweise einen Link zu einem Artikel auf Wikipedia hinzufügen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listenelement ist ein Beispiel für die Verlinkung zum externen Artikel über [Top-Level-await](https://v8.dev/features/top-level-await) im Siehe auch Abschnitt, zusammen mit der Quelle und dem Jahr:
  - **Richtig**: [Top-level-await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern können Sie auch die Namen der Autoren hinzufügen. Einige Beispiele finden Sie im Abschnitt [Weiterlesen](#language_grammar_and_spelling) unten. Refrainieren Sie vom Hinzufügen von Autorennamen für Blogeinträge oder GitHub-Repositories, die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN-Seiten in der Reihenfolge zuerst die Referenzseiten-Verlinkungen, gefolgt von den Links zu verwandten Leitfäden und Tutorial-Seiten. Diese empfohlene Reihenfolge ist hauptsächlich dazu gedacht, die Scanbarkeit der Punkte in der Liste zu unterstützen.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie die internen Links zuerst und dann die externen.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen oder einfach-zu-fortgeschrittenen Reihenfolge, je nachdem, was für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Themengebiet hinzufügen müssen, tun Sie dies normalerweise, indem Sie eine Einstiegsseite erstellen und dann Unterseiten für jeden der jeweiligen Artikel hinzufügen.
Die Einstiegsseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben und dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können das Einfügen von Seiten automatisch in die Liste einfügen lassenz mit einigen Makros, die wir erstellt haben.

Betrachten Sie zum Beispiel die [JavaScript](/de/docs/Web/JavaScript) Anleitung, die folgendermaßen strukturiert ist:

- [JavaScript/Leitfaden](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnis
- [JavaScript/Leitfaden/JavaScript Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Leitfaden/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Leitfaden/Details des Objektmodells](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, den Artikel an die Spitze der Hierarchie zu legen, da dies die Seite verlangsamt und die Suche und Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich von dem "Slug" der Seite unterscheiden, bei dem es sich um den Teil der URL der Seite handelt, der nach `<locale>/docs/` folgt. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Beim Erstellen einer neuen Hierarchieebene sollte die neue Ebene im Slug nur ein oder zwei Wörter umfassen.
- Slugs sollten ein Unterstrich für einen mehrteiligen Komponentennamen verwenden, wie `Basic_HTML_syntax` in `/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax`.
- Folgen Sie der Satzzeichen-Großschreibung auch bei Slugs für jeden Komponentennamen, wie `Basic_HTML_syntax` im vorherigen Beispiel.

### Überschriften

Seitentitel werden in den Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite verwendet. Ein Seitentitel kann sich vom "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie die folgenden Richtlinien, wenn Sie Titel schreiben:

- **Großschreibungsstil**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften den Satzzeichen-Großschreibungsstil verwenden (nur das erste Wort und Eigennamen werden großgeschrieben) anstatt des Schlagzeilen-Großschreibungsstils:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript Rollovern"
  - **Falsch**: "Eine Neue Methode Zur Erstellung Von JavaScript Rollovern"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel etabliert wurde. Fühlen Sie sich frei, diese bei Bedarf zu aktualisieren, wenn Sie möchten. Wir kommen ihnen allmählich nach.

- **Allgemeine Richtlinien**: Entscheiden, was Sie dokumentieren möchten und wie Sie den Inhalt strukturieren werden, ist einer der ersten Schritte beim Schreiben. Das Schreiben eines Inhaltsverzeichnisses kann Ihnen helfen zu entscheiden, in welcher Reihenfolge Sie die Informationen präsentieren wollen. Behandeln Sie zuerst einfache Konzepte und gehen Sie dann zu komplizierteren und fortgeschritteneren Konzepten über. Decken Sie zuerst konzeptionelle Informationen ab und gehen Sie dann zu handlungsorientierten Themen über.

  Beachten Sie folgende Richtlinien, wenn Sie Titel für eine Seite und Abschnitte oder Unterabschnitte schreiben:

  - **Höher zu niedriger gehen**: Wie im Abschnitt [Überschriftsebenen](#überschriftsebenen) erwähnt, gehen Sie von höher `##` zu niedriger `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriftsebenen für breitere einleitende Titel und spezifischere Titel, während Sie zu niedrigeren Überschriftenebenen übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift zusammengefasst werden. Die Benennung von Titeln für verschiedene Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie die Titel kurz**: Kürzere Titel sind im Text und im Inhaltsverzeichnis leichter zu scannen.
  - **Halten Sie die Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die im Abschnitt behandelt werden. Verwenden Sie beispielsweise "HTML-Elemente" für einen Abschnitt, der HTML-Elemente einführt, anstelle von „Einführung“ oder „Übersicht“.
  - **Halten Sie die Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln—eine einzelne Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. So weit möglich, versuchen Sie nicht, die Verbindung "und" in einem Titel zu verwenden.
  - **Parallele Konstruktion verwenden**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftsebene. Zum Beispiel, wenn ein Titel der Ebene `###` Gerundien verwendet, d.h. Wörter, die auf "-ing" enden, wie "Installieren", dann versuchen Sie, alle Titel auf dieser Überschriftsebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf dieser Überschriftsebene mit einem Imperativverb.
  - **Vermeiden Sie, einen häufigen Begriff in der untergeordneten Überschrift zu verwenden**: Wiederholen Sie im Titel einer untergeordneten Überschrift nicht den Text im Titel einer übergeordneten Überschrift. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommata", benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Sätzen" anstelle von "Kommata nach einleitenden Sätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie es, Titel mit Artikeln „ein“, „eine“ oder „der“ zu beginnen.
  - **Fügen Sie einleitende Informationen hinzu**: Fügen Sie nach einem Titel einführende Texte hinzu, die erklären, was in dem Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weitere Lektüre

### Weitere Stilhandbücher

Falls Sie Fragen zur Nutzung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir, das [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Editierfähigkeiten zu verbessern, könnten die folgenden Ressourcen hilfreich sein.

- [Häufige Fehler im Englischen Gebrauch](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Grammatik-FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Nutzung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage-und-Antwort-Plattform für englische Sprachverwendung
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich, aber benutzerfreundlich, evidenzbasierte Beratung; sehr gut für Nicht-Muttersprachler, insbesondere zur Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
