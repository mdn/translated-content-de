---
title: Leitfaden für den Schreibstil
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{MDNSidebar}}

Dieser Leitfaden für den Schreibstil beschreibt, wie Inhalte auf MDN Web Docs verfasst, organisiert, geschrieben und formatiert werden sollten.

Diese Richtlinien sollen die sprachliche und stilistische Konsistenz auf der Website gewährleisten. Trotzdem sind wir mehr an den Inhalten als an deren Formatierung interessiert, fühlen Sie sich also nicht verpflichtet, den gesamten Leitfaden für den Schreibstil zu lernen, bevor Sie Beiträge leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um sie an diesen Leitfaden anzupassen. Die Prüfer könnten Sie auch auf diesen Leitfaden verweisen, wenn Sie eine Inhalts-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für Dokumentationen in englischer Sprache. Andere Sprachversionen können (und sind eingeladen) ihre eigenen Stilrichtlinien zu erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteamseite veröffentlicht werden. Dennoch sollte dieser Leitfaden für das Formatieren und Organisieren von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und wie verschiedene Komponenten auf einer Seite formatiert werden, wie zum Beispiel Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das Thema zu verstehen.

Die folgenden Unterabschnitte bieten Empfehlungen, um dies zu erreichen:

- [Betrachten Sie Ihre Zielgruppe](#betrachten_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Fügen Sie relevante Beispiele ein](#fügen_sie_relevante_beispiele_ein)
- [Liefern Sie eine beschreibende Einführung](#liefern_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Betrachten Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Kopf. Beispielsweise muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so sehr ins Detail über grundlegende Netzwerkbegriffe gehen wie eine typische Seite zum Thema Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps sind möglicherweise nicht in jedem Fall anwendbar.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Prägnanz und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen den Aktivsatz und eindeutige Pronomen. Schreiben Sie kurze Sätze, indem Sie sich auf eine Idee pro Satz konzentrieren. Definieren Sie neue Begriffe, bevor Sie sie verwenden, dabei die Zielgruppe im Hinterkopf behaltend.
- **Prägnant**: Beim Schreiben eines Dokuments ist es wichtig zu wissen, wie viel man sagen muss. Wenn Sie zu viele Details angeben, wird die Seite mühsam zu lesen und selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie denselben Wortlaut durchgehend auf der Seite und über mehrere Seiten hinweg gleichbleibend verwenden.

### Fügen Sie relevante Beispiele ein

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbarere und praxisnahe Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um Randfälle zu klären, die möglicherweise existieren.
Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Lösungen für Probleme zu demonstrieren, die möglicherweise auftreten.

### Liefern Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz/die einleitenden Absätze vor der ersten Überschrift die Informationen, die die Seite behandeln wird, angemessen zusammenfassen und vielleicht, was Leser nach der Durchsicht der Inhalte erreichen werden. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernergebnisse relevant ist.

In einem Leitfaden oder einer Anleitung sollten die einleitenden Absätze den Leser über die behandelten Themen informieren sowie das vorausgesetzte Wissen, über das der Leser verfügen sollte, falls vorhanden. Der erste Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den verwandten Informationen, und es sollte auf Situationen hinweisen, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel einer kurzen Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz. Es lässt zu viele Informationen aus, wie zum Beispiel, was es genau bedeutet, Text zu „umranden“, wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenfolge.

- **Beispiel einer langen Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang.
  Zu viele Details sind enthalten und der Text vertieft sich zu stark in die Beschreibung anderer Methoden und Eigenschaften.
  Stattdessen sollte sich die Einführung auf die `strokeText()` Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben sind.

  > Wenn aufgerufen, umrandet die Canvas 2D API Methode **`CanvasRenderingContext2D.strokeText()`** die Zeichen der angegebenen Zeichenfolge, beginnend an den angegebenen Koordinaten und verwendet die aktuelle Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet „Umranden“ von Text, die Umrisse der Glyphen in der Zeichenfolge zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe auszufüllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schriftart des Kontexts gezeichnet, wie sie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) Eigenschaft des Kontexts angegeben ist.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die `textAlign`, `textBaseline`, und `direction` Eigenschaften des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung der Zeichenfolge relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, dann wird die Zeichenfolge beginnend bei `x - (stringWidth / 2)` gezeichnet, wodurch die angegebene X-Koordinate in der Mitte der Zeichenfolge liegt.
  > Wenn der Wert `"left"` ist, beginnt die Zeichenfolge bei dem angegebenen Wert von `x`.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der es Ihnen erlaubt, für die Zeichenfolge eine maximale Breite in Pixeln festzulegen.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um innerhalb eines Raums dieser Breite beim Zeichnen zu passen.
  >
  > Sie können die **`fillText()`** Methode aufrufen, um die Zeichen einer Zeichenfolge mit Farbe ausgefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer angemessenen Einführung**: Hier sehen wir einen viel besseren Überblick über die `strokeText()` Methode.

  > Die Methode [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrandet (zeichnet die Umrisse von) die Zeichen einer angegebenen Zeichenfolge, verankert bei der durch die angegebenen X- und Y-Koordinaten angezeigten Position.
  > Der Text wird unter Verwendung der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet, und wird gemäß den [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline), und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) Eigenschaften ausgerichtet und gerechtfertigt.
  >
  > Für weitere Details und Beispiele siehe den [Text](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text) Abschnitt auf der Seite "Zeichnen von Grafiken" sowie unseren Hauptartikel zum Thema [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat eine vielfältige und breite Zuhörerschaft.
Wir ermutigen ausdrücklich, Texte so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Anstelle von **dummy** verwenden Sie **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in der Dokumentation nicht verwenden müssen; wenn jedoch der Fall eintritt, erwägen Sie, **fantastic** zu verwenden.

Am besten verwenden Sie geschlechterneutrale Sprache, wenn das Geschlecht für das Thema irrelevant ist.
Wenn Sie zum Beispiel über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung; wenn das Subjekt jedoch eine Person beliebigen Geschlechts ist, ist "er"/"sein" nicht angemessen.

Betrachten wir die folgenden Beispiele:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite die Nutzung seiner Webcam erlauben möchte."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite die Nutzung ihrer Webcam erlauben möchte."

Beide Versionen sind geschlechtsspezifisch. Um dies zu korrigieren, verwenden Sie geschlechtsneutrale Pronomen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite die Nutzung ihrer Webcam erlauben möchten."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they).". Die geschlechtsneutralen Pronomen sind "they," "them", "their," und "theirs".

Eine andere Möglichkeit besteht darin, die Benutzer zu pluralisieren, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite die Nutzung ihrer Webcams erlauben möchten."

Die beste Lösung ist natürlich, den Satz umzuschreiben und die Pronomen zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog zur Anforderung der Benutzererlaubnis für den Webcam-Zugriff erscheint."
- **Richtig**: "Ein Bestätigungsdialog, der den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel der Problemlösung ist wohl besser.
Es ist nicht nur grammatisch korrekter, sondern entfernt auch einige der Komplexitäten im Zusammenhang mit dem Umgang der Geschlechter über verschiedene Sprachen hinweg, die möglicherweise völlig unterschiedliche Geschlechterregelungen haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch Übersetzer erleichtern.

### Schreiben Sie mit SEO im Hinterkopf

Während das Hauptziel des Schreibens über MDN Web Docs immer sein sollte, über offene Web-Technologie zu informieren und diese zu erklären, damit Entwickler schnell lernen können, was sie wollen oder die kleinen Details finden können, die sie benötigen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das von uns geschriebene Material _finden_ können. Dies können wir erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung ([SEO](/de/docs/Glossary/SEO)) im Auge behalten.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unsere Inhalte einfach kategorisieren und indexieren können, damit Leser leicht finden, was sie benötigen. Die SEO-Richtlinien umfassen das Sicherstellen, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel ordnungsgemäß zu indexieren.

Die folgende Checkliste ist hilfreich, um sicherzustellen, dass die Seite und ihre Nachbarseiten von Suchmaschinen richtig indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über dasselbe Thema handeln, selbst wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den beiden die Eigenschaften dokumentierenden Seiten überraschend ähnlich ist, nur mit wenigen ausgetauschten Worten und demselben Beispiel. Dies erschwert es Suchmaschinen zu wissen, welcher welche ist, und sie teilen den Seitenrang, was dazu führt, dass beide schwerer zu finden sind als sie sein sollten.

  Es ist wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, die dabei helfen können:

  - **Erklären Sie mehr einzigartige Konzepte**: Erwägen Sie Anwendungsfälle, in denen es mehr Unterschiede geben könnte, als man denkt. Zum Beispiel im Fall des Dokumentierens von `width` und `height` Eigenschaften, vielleicht schreiben Sie über die unterschiedlichen Nutzungen von horizontalem und vertikalem Raum, und eine Diskussion über die angemessenen Konzepte. Möglicherweise erwähnen Sie die Verwendung von `width`, um Platz für eine Seitenleiste zu schaffen, während Sie `height` verwenden, um vertikales Scrollen oder Fußzeilen zu handhaben. Die Einbeziehung von Informationen zu Barrierefreiheitsproblemen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden und daher keine wirklichen Änderungen erfordern, wenn diese erneut verwendet werden. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder bieten Sie zumindest mehrere Beispiele an, von denen einige zumindest anders sind.
  - **Fügen Sie Beschreibungen zu Beispielen hinzu**: Sowohl eine Übersicht darüber, was das Beispiel macht als auch die Funktionsweise sollte auf einem angemessenen Detaillierungsgrad gegeben werden, abhängig von der Komplexität des Themas und der Zielgruppe.

  Der einfachste Weg, übermäßig ähnlich zu sein, zu vermeiden, ist natürlich, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit dies erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (im SEO-Jargon als „dünne Seiten“ bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder überhaupt) indexieren. Übermäßig kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie sollten Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sein. Blähen Sie eine Seite nicht künstlich auf, sondern betrachten Sie diese Richtlinie als Mindestziel, wann immer möglich.

  Hier sind einige grundlegende Richtlinien, die Ihnen helfen können, Seiten zu erstellen, die genügend Inhalt haben, um richtig durchsuchbar zu sein, ohne sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Offensichtlich, falls der Artikel ein Stub ist oder Inhalt fehlt, fügen Sie ihn hinzu. Wir versuchen, richtige „Stub“-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, die große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Struktur der Seite**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden und mit angemessenem Inhalt gefüllt sind.
  - **Stellen Sie die Vollständigkeit sicher**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen abgedeckt sind — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, eine schnelle Erklärung zu etwas zu geben, aber stellen Sie sicher, dass all die Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser kennen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele vorhanden sein, die alle Parameter abdecken oder wenigstens die Parameter (oder Eigenschaften oder Attribute), die Benutzer im Bereich von Anfänger bis Fortgeschrittener wahrscheinlich verwenden, sowie alle fortgeschrittenen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht dessen, was das Beispiel macht, beginnen, welches zusätzliche Wissen möglicherweise erforderlich ist, um es zu verstehen, und so weiter. Nach dem Beispiel (oder in den Beispielen verstreut) sollte Text folgen, der erklärt, wie der Code funktioniert. Sparen Sie nicht an den Details oder der Behandlung von Fehlern in Beispielen. Beachten Sie, dass Benutzer _Ihr_ Beispiel kopieren und einfügen werden, um es in ihren eigenen Projekten zu verwenden, und Ihr Code wird in Produktions-Sites verwendet werden! Siehe unsere [Richtlinien für Code-Beispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) für weitere nützliche Informationen.
  - **Erklärungen zu Anwendungsfällen**: Wenn es besonders häufige Anwendungsfälle für die Funktion gibt, die beschrieben wird, sprechen Sie darüber! Anstatt anzunehmen, dass ein Benutzer selbst herausfindet, dass die dokumentierte Methode dazu verwendet werden kann, ein häufig auftretendes Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text, der erklärt, wie das Beispiel funktioniert, hinzu.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie eine ordnungsgemäße [`alt`](/de/docs/Web/HTML/Element/img#alt) für alle Bilder und Diagramme hinzu. Dieser Text sowie Beschreibungen in Tabellen und anderen Abbildungen zählen, da „Crawler“ keine Bilder durchsuchen können, und daher erklärt der `alt` Text den Suchmaschinen-Crawlern, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nicht mit der Funktion zusammenhängen, hinzuzufügen, um Suchmaschinen-Rankings zu manipulieren; Dieses Verhalten ist leicht erkennbar und wird meist bestraft.
    > Ebenso **nicht** fügen Sie wiederholte, unhilfreiche Materialien oder Massen von Schlüsselwörtern innerhalb der eigentlichen Seite hinzu, in einem Versuch, die Seitengröße und Such-Rankings zu verbessern. Dies richtet mehr Schaden als Nutzen aus, sowohl für die Lesbarkeit der Inhalte als auch für unsere Suchergebnisse.

- **Fokus auf Themeninhalte**: Es ist weitaus besser, Inhalte um das Thema der Seite herum zu schreiben, als um ein bestimmtes Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einfügen könnten; tatsächlich erstellen viele SEOs eine Liste von 5 bis 100 verschiedenen Schlüsselwörtern (wobei man zwischen kurzen, mittleren und langen Schlüsselwörtern variieren kann), die in ihren Artikel aufgenommen werden sollten, abhängig von der Länge. Dies führt dazu, dass Ihre Worte diversifiziert werden und führt zu weniger Wiederholungen.

## Schreibstil

Neben dem Schreiben grammatisch korrekter Sätze in Englisch empfehlen wir, dass Sie diese Richtlinien befolgen, um die Konsistenz der Inhalte über MDN Web Docs hinweg zu gewährleisten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus den Anfangsbuchstaben eines Satzes erstellt wurde. In diesem Abschnitt werden Richtlinien für Abkürzungen und Akronyme beschrieben.

- **Erweiterungen**: Bei der ersten Erwähnung eines Begriffs auf einer Seite, erweitern Sie Akronyme, die Benutzern möglicherweise unbekannt sind. Im Zweifelsfall den Begriff erweitern. Noch besser ist es, ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary) Eintrag zu verlinken, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie voll Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können in Klammerausdrücken und Notizen übliche lateinische Abkürzungen (etc., i.e., e.g.) verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  - **Richtig**: Web-Browser (z.B., Firefox) können verwendet werden ...
  - **Falsch**: Web-Browser z.B. Firefox können verwendet werden ...
  - **Falsch**: Web-Browser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Web-Browser, (eg: Firefox) können verwendet werden ...

  Im regulären Text (d.h. Text außerhalb von Notizen oder Klammern), verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... Web-Browser, und so weiter.
  - **Falsch**: ... Web-Browser, etc.

  - **Richtig**: Web-Browser wie Firefox können verwendet werden ...
  - **Falsch**: Web-Browser z.B. Firefox können verwendet werden ...

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
  > Seien Sie sich bewusst, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige dieser Begriffe werden so selten verwendet, dass viele Leser sie entweder verwechseln oder ihre Bedeutungen nicht verstehen.
  >
  > Achten Sie auch darauf, dass _Sie_ sie richtig verwenden, wenn Sie sich dafür entscheiden. Achten Sie zum Beispiel darauf, "e.g." nicht mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Pluralformen von Abkürzungen und Akronymen**: Für die Pluralformen von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals ein Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Abkürzung verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. An anderer Stelle im Text verwenden Sie die ausgeschriebene Form "versus".

  - **Richtig**: this vs. that
  - **Falsch**: this v. that
  - **Richtig**: this versus that

### Großschreibung

Verwenden Sie in Fließtexten die standardmäßigen englischen Regeln für die Großschreibung und kapitalisieren Sie "World Wide Web". Es ist akzeptabel "web" (alleinstehend oder als Modifikator) und "internet" kleinzuschreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, daher finden Sie möglicherweise viele Instanzen von "Web" und "Internet" auf MDN.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber ein Artikel ausschließlich zur Änderung der Großschreibung ist nicht notwendig.

Tastaturtasten sollten die Satzstil-Großschreibung und nicht die vollständige Großschreibung verwenden. Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>". Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie zum Beispiel Marken, die Großbuchstaben enthalten oder Wörter, die von einem Personennamen abgeleitet sind (es sei denn, das Wort wird innerhalb von Code verwendet und die Codesyntax erfordert die Kleinschreibung). Einige Beispiele umfassen:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke von Oracle Corporation, sollte immer wie markenrechtlich geschützt geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert dazu, entspannt zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B., "don't", "can't", "shouldn't") zu verwenden, wenn Sie es vorziehen.

### Zahlen und Ziffern

- **Kommas**: In fortlaufendem Text verwenden Sie Kommas nur für Zahlen ab fünf Ziffern.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (außerhalb von Codebeispielen), verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das YYYY/MM/DD Format verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Pluralformen von Zahlen**: Fügen Sie ein "s" hinzu. Verwenden Sie kein Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englischsprachige Pluralformen anstelle der vom Lateinischen oder Griechischen beeinflussten Formen.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine „geschwungenen“ Anführungs- und Fußmarken. Auf den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies, weil wir eines von beiden für Konsistenz auswählen müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Codeschnipsel eindringen, selbst in Inline-Codeschnipsel, könnten Leser diese kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Please don't use "curly quotes."
- **Falsch**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir die Regeln zur Verwendung von Kommas beachten müssen:

- **Nach einleitenden Sätzen**: Ein einleitender Satz ist ein abhängiger Satz, der sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie nach einem einleitenden Satz ein Komma, um ihn vom folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In this example, you will see how to use a comma."
    - **Falsch**: "In this example you will see how to use a comma."
  - Beispiel 2:
    - **Richtig**: "If you are looking for guidelines, you have come to the right place."
    - **Falsch**: "If you are looking for guidelines you have come to the right place."
  - Beispiel 3:
    - **Richtig**: "On mobile platforms, you tend to get a numeric keypad for entering data."
    - **Falsch**: "On mobile platforms you tend to get a numeric keypad for entering data."

- **Vor Konjunktionen**: Das Serienkomma (auch als „Oxford-Komma“ bekannt) ist das Komma, das vor der Konjunktion in einer Serie von drei oder mehr Elementen erscheint. Auf den MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "I will travel on trains, planes, and automobiles."
  - **Falsch**: "I will travel on trains, planes and automobiles."

  Verwenden Sie kein Komma vor „and“ und „or“ in einer Liste, die zwei Elemente enthält.

  - **Richtig**: "My dog is cute and smart."
  - **Falsch**: "My dog is cute, and smart."

  Verwenden Sie ein Komma vor den Konjunktionen „and“, „but“ und „or“, wenn sie zwei unabhängige Sätze verbinden. Wenn jedoch der Satz mit der Konjunktion sehr lange oder komplex wird, ziehen Sie in Erwägung, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "You can perform this step, but you need to pay attention to the file setting."
    - **Falsch**: "You can perform this step but you need to pay attention to the file setting."
  - Beispiel 2:
    - **Richtig**: "My father is strict but loving."
    - **Falsch**: "My father is strict, but loving."

- **Vor „that“ und „which“**: Ein restriktiver Satz ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas, um von dem verbleibenden Satz abgesetzt zu werden. Ein restriktiver Satz wird normalerweise durch „that“ eingeleitet und sollte nicht durch ein Komma vorangestellt werden.

  - **Richtig**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Falsch**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  Ein nicht-restriktiver Satz bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nicht-restriktiver Satz wird normalerweise durch „which“ eingeleitet und sollte durch ein Komma vorangestellt werden.

  - **Richtig**: "You write a policy, which is an allowed list of origins for each feature."
  - **Falsch**: "You write a policy which is an allowed list of origins for each feature."

- **Vor „such as“**: Wenn „such as“ Teil eines nicht-restriktiven Satzes ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor „such as“.

  - **Richtig**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Falsch**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  Das untenstehende Beispiel zeigt, wann man kein Komma mit „such as“ verwenden sollten. Hier ist der Satz, der „such as“ enthält, wesentlich für die Bedeutung des Satzes.

  - **Richtig**: "Web applications are becoming more powerful by adding features such as audio and video manipulation and allowing access to raw data using WebSockets."
  - **Falsch**: "Web applications are becoming more powerful by adding features, such as audio and video manipulation, and allowing access to raw data using WebSockets."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann mit Bindestrichen geschrieben werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als alternative Schreibweise oder hauptsächlich in einer nicht-amerikanischen Form von Englisch aufgeführt. Zum Beispiel, wenn Sie ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ hinzugefügt zur amerikanischen Standardform) nachschlagen, finden Sie die Phrase „Chiefly British“ gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior). Verwenden Sie keine alternative Schreibweise.

- **Richtig**: localize, behavior, color
- **Falsch**: localise, behaviour, colour

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter Fachbegriffe:

- **HTML Elemente**: Verwenden Sie den Begriff „Element“, um auf HTML und XML Elemente zu verweisen, anstelle von „Tag“. Darüber hinaus sollte das Element in spitzen Klammern "<>" eingefasst und mit Backticks (\`) gestylt werden. Beispielsweise wird `<input>` bei Verwendung von Backticks wie erwartet als `<input>` dargestellt.

  - **Richtig**: das `<span>` Element
  - **Falsch**: das span tag

  Auf den MDN Web Docs können Sie optional das HTML-Element im Makro [`HTMLElement`](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) angeben, welches das Element stylen wird, die spitzen Klammern "<>" hinzufügt sowie einen Link zu seiner Referenzseite.

  - **Mit Backticks**: `<span>`
  - **Mit dem Makro**: {{HTMLElement("span")}} (Source im Markdown: \\{{HTMLElement("span")\}})

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff „Argumente“ wann immer möglich für Einheitlichkeit.

- **Benutzeroberflächenaktionen**: In Aufgabenfolgen beschreiben Sie Benutzeroberflächenaktionen im Befehlsmodus. Identifizieren Sie das Benutzeroberflächenelement durch sein Etikett und Typ.

  - **Richtig**: "Click the Edit button."
  - **Falsch**: "Click Edit."

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, angesichts des informelleren Charakters unserer Inhalte. Versuchen Sie jedoch, konsistent zu bleiben.

## Seitenelemente

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite zu beachten sind, wie Überschriften, Anmerkungen, Links und Beispiele.

- [Code-Beispiele](#code-beispiele)
- [Querverweise (Verlinkung)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt "Siehe auch"](#abschnitt_"siehe_auch")
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Code-Beispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Code-Beispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Code-Beispiels für die MDN Web Docs:

- Jedes Stück Beispielcode sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das Szenario beschreibt, das durch das Code-Beispiel demonstriert wird. Beispielweise "Verwendung von Offsetdruck" und "Rückkehr zum Stil in vorheriger Ebene".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Einzelheiten des Beispiels beschreibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Beispielweise: "Im Beispiel unten sind zwei Kaskadenschichten in der CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Code-Beispiel nicht nur die Syntax des Features und wie es verwendet wird demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder muss.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, könnte es sinnvoll sein, es in kleinere logische Teile aufzuteilen, sodass sie individuell beschrieben werden können.
- Wenn Sie [Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass alle Codeblöcke des gleichen Typs (HTML, CSS und JavaScript) zusammengefügt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht Ihnen, den Code in mehrere Segmente aufzuteilen, jedes optional mit eigenen Beschreibungen, Überschriften usw. Dies macht das Dokumentieren von Code unglaublich mächtig und flexibel.

Um zu erfahren, wie man Code-Beispiele für die MDN Web Docs gestaltet oder formatiert, siehe [Richtlinien für das Styling von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Querverweise (Verlinkung)

Wenn Sie auf eine andere Seite oder den Abschnitt einer Seite auf MDN mit ihrem Titel verweisen, verwenden Sie in der Verlinkung Satzschreibung. Verwenden Sie Satzschreibung für den Linktext, auch wenn dieser vom Titel der verlinkten Seite oder des Abschnittes abweicht (es könnte sein, dass die für den Seiten- oder Abschnittstitel verwendete Schreibweise falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN mit ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den [Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items) Leitfaden."
- **Falsch**: "Siehe den "[Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)" Leitfaden."

Verwenden Sie einen ähnlichen Stil, wenn Sie auf einen Abschnitt auf einer Seite verlinken, wie im folgenden Beispiel gezeigt:

- **Richtig**: "Für weitere Informationen, siehe den [Allocation in JavaScript](/de/docs/Web/JavaScript/Memory_management#allocation_in_javascript) Abschnitt auf der _Memory management_ Seite."

Wenn sich der Abschnitt, auf den Sie verweisen, auf derselben Seite befindet, können Sie mit den Worten „above“ oder „below“ auf die Lage des Abschnitts hinweisen.

- **Richtig**: "Dieser Begriff wird im [Accessibility](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) Abschnitt weiter unten detaillierter beschrieben."

Sie können einen Teil eines Satzes mit einem Artikel oder dem Abschnitt eines Artikels verlinken. Achten Sie darauf, beschreibende Ausdrücke als Linktexte zu verwenden, um ausreichend Kontext für die verlinkte Seite zu bieten.

- **Richtig**: "Erfahren Sie mehr darüber, [wie Sie die Reihenfolge von Flexelementen ändern](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN ist eine andere Möglichkeit, auf eine Referenzseite zu verweisen, die Verwendung eines Makros. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement` Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef` Makro.

Wir folgen ähnlichen Querverweisrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf den MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs einzufügen. Ihr Pull-Antrag zum Hinzufügen eines externen Links wird abgelehnt, wenn er nicht den hier beschriebenen Richtlinien entspricht.

Im Allgemeinen müssen Sie sicherstellen, dass es beim Hinzufügen eines externen Links ein minimales Risiko der folgenden Punkte gibt:

- Sterbende oder veraltete Links
- Eindruck einer Befürwortung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zu verwenden, um Spam zu verteilen
- Shortlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, erwägen Sie, Inhalte innerhalb von MDN Web Docs zu verknüpfen. Interne Links sind einfacher zu pflegen und machen den gesamten Wert der MDN Web Docs für die Benutzer wertvoller.

- **Gute externe Links**: Gute externe Links führen Leser zu Ressourcen, die relevant, dauerhaft und weitgehend vertrauenswürdig sind. Sie sollten es vorziehen, Verknüpfungen zu externen Inhalten hinzuzufügen, die:

  - Einzigartig oder unverzichtbar (z.B. ein IETF RFC)
  - Notwendig für Attribution, Zitat oder Anerkennung (z.B. als Teil einer Creative Commons Attribution)
  - Wahrscheinlicher, für das Thema gepflegt zu sein, als solche Inhalte auf den MDN Web Docs selbst zu integrieren (z.B. die Versionshinweise eines Anbieters)
  - Open Source oder gemeinschaftsgetrieben, ähnlich wie die MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Pflegeleichtigkeit, Zugänglichkeit oder stellen anderweitig Barrieren für Leser dar. Vermeiden Sie es, Links zu externem Inhalt hinzuzufügen, der:

  - Generisch oder unspezifisch (z.B. die Startseite eines Anbieters, anstelle der zugehörigen Dokumentation)
  - Flüchtig oder ungepflegt (z.B. eine einmalige Ankündigung)
  - Selbstverweisend oder selbstfördern (z.B. die eigene Arbeit des Autors außerhalb von MDN Web Docs)
  - Paywalled (z.B. ein teurer Kurs außerhalb der Reichweite von Hobbyisten, Studenten oder Lesern, die in einkommensschwächeren Ländern leben)
  - Unzugänglich (z.B. ein Video ohne Untertitel)

- **Verknüpfungen, die selbstfördernd oder spammtauglich sind**: Ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository haben Wert, aber das Verlinken zu Ihren eigenen Ressourcen kann den Anschein eines Interessenkonfliktes erwecken. Denken Sie zweimal nach, bevor Sie auf Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel-Link haben, müssen Sie diese Beziehung in Ihrem Pull-Antrag offenlegen. Das Versäumnis dies zu tun, kann Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Verknüpfungen relevant und angemessen. Zum Beispiel, wenn Sie der Redakteur einer Spezifikation sind und zur Dokumentation beitragen, die sich auf diese Spezifikation bezieht, dann ist die Verlinkung zu dieser Spezifikation erwartbar und akzeptabel. Sie müssen jedoch die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter zu merkende URLs (auch bekannt als „Shortlinks“) zu verwandeln. Sie verschleiern jedoch auch das Ziel der URL. Bei bestimmten Shortenern kann das Ziel auch nach ihrer Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über benutzererzeugbare URL-Shortener von Drittanbietern erstellt wurden. Wenn beispielsweise `https://myshort.link/foobar` eine kurze URL von einem zufälligen Benutzer generiert wurde und zu `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com` URL.

Andererseits sind kürzere Verknüpfungen, die von den Organisationen verwaltet werden, die auch die Ziel-URLs pflegen, wünschenswert. `https://bugzil.la` gehört zu Mozilla und ist ein URL-Shortener, der zu `https://bugzilla.mozilla.org/` weiterleitet, welches ebenfalls eine von Mozilla verwaltete Domain ist. In diesem Fall verwenden Sie die kürzere URL. Verwenden Sie beispielsweise `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftenebenen

Wenn ein neuer Absatz einen neuen Abschnitt beginnt, sollte ein Header hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in abnehmender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###`, und dann `####`; diese übersetzen sich zu den [HTML Überschrift-Tags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>`-Tags beziehungsweise.

`##` ist die höchste erlaubte Ebene, da `#` für den Seitentitel reserviert ist.
Es wird empfohlen, nicht mehr als drei Ebenen von Überschriften hinzuzufügen. Wenn Sie das Bedürfnis haben, eine vierte Überschriftsebene hinzuzufügen, erwägen Sie, den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite aufzuteilen. Alternativ prüfen Sie, ob Sie die Informationen in Aufzählungspunkten darstellen können, um das Hinzufügen einer vierten Überschriftsebene zu vermeiden.

Halten Sie bitte die folgenden Gebote und Verbote beim Erstellen von Überschriften für Unterabschnitte im Gedächtnis:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Subdividieren Sie ein Thema nicht in ein einzelnes Unterthema.
  Es ist entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen, oder Makros innerhalb von Überschriften.** Sie können jedoch Backticks verwenden, um Codebegriffe zu kennzeichnen (z.B. „Verwendung der `FooBar` Schnittstelle“).
- **Erstellen Sie keine „stößenden“ Überschriften.** Diese sind Überschriften gefolgt von sofort einer Unterüberschrift, ohne erklärenden Text dazwischen.
  Dies sieht nicht gut aus und lässt Leser ohne einen Einleitungstext am Anfang des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz es Ihnen erlaubt, diese zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr großzügige Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder zumindest mit unserer allgemeinen Inhaltslizenz kompatibel sind — [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA).
- Für Bilder, führen Sie diese durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG` führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG`-Datei eine leere Zeile am Ende der Datei hat.
- Jedes Bild muss über eine [beschreibende `alt`-Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) verfügen.

### Listen

Listen sollten konsistent über alle Seiten formatiert und strukturiert sein.
Einzelne Listenelemente sollten mit geeigneter Interpunktion geschrieben werden, unabhängig von der Listenform.
Je nach Art der erstellten Liste sollten Sie jedoch Ihre Schreibweise wie in den unten stehenden Abschnitten beschrieben anpassen. In beiden Fällen fügen Sie einen einleitenden Satz hinzu, der die Informationen in der Liste beschreibt.

- **Gegliederte Listen**: Punktierte Listen sollten verwendet werden, um zusammenhängende, prägnante Informationen zu gruppieren. Jedes Element in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Sätze (d.h. Satzfragmente, denen ein Prädikat oder ein Subjekt oder beides fehlt) in gegliederten Listen sollten Standardinterpunktion verwenden — Sätze enden mit einem Punkt, Sätze nicht.

  Wenn es mehrere Sätze in einem Listenelement gibt, muss ein Punkt am Ende jedes Satzes erscheinen, einschließlich des letzten Satzes des Elements, so wie es von einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte, gegliederte Liste:

  > In diesem Beispiel sollten wir einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine Bedingung, mit weiterer Erklärung.

  Beachten Sie, wie die gleiche Satzstruktur von Punkt zu Punkt wiederholt wird. In diesem Beispiel gibt jeder Aufzählungspunkt eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listenelemente unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Schatten zu Text hinzu

  Wenn ein oder mehrere Listenelemente vollständige Sätze sind, verwenden Sie nach jedem Listenelement einen Punkt, auch wenn ein Listenelement nur drei oder weniger Wörter enthält. Achten Sie jedoch, so weit es möglich ist, darauf, die gleiche Struktur für alle Elemente in einer Liste zu wählen; stellen Sie sicher, dass alle Listenelemente entweder vollständige Sätze oder Sätze sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen zu nummerieren. Da Anweisungen komplex sein können, hat Klarheit Priorität, besonders wenn der Text in jedem Listenelement lang ist. Wie bei gegliederten Listen folgen Sie den Standard-Interpunktionsregeln. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuführen. Es ist wichtig, dem Benutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen und behalten Sie jeden Schritt in seinem eigenen nummerierten Element.
  >    Ihre Anweisungen können ziemlich umfangreich sein, daher ist es wichtig, klar zu schreiben und korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einem kurzen abschließenden Fazit oder einer Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die anleitende Schritte bietet, um eine nummerierte Liste mit der korrekten Formatierung zu erzeugen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze gelesen werden. Da nummerierte Listen routinemäßig für Instruktionszwecke oder um jemanden durch ein geordnetes Verfahren zu führen verwendet werden, achten Sie darauf, jedes Element fokussiert zu halten: ein nummeriertes Element pro Schritt.

### Abschnitt "Siehe auch"

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#cross_references_linking) zu verwandten Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Beispielsweise ist dies der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer` Seite.

Präsentieren Sie im Allgemeinen die Links in einem Siehe auch Abschnitt im Format einer [gepunkteten Liste](#listen) mit jedem Element in der Liste als Phrase. Im [Webentwicklung Lernen](/de/docs/Learn) Bereich auf MDN folgt der Siehe auch Abschnitt dem [Defintionslisten](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Um Konsistenz über MDN Web Docs aufrechtzuerhalten, halten Sie bitte folgende Richtlinien im Gedächtnis, während Sie einen Siehe auch Abschnitt hinzufügen oder aktualisieren.

#### Linktext

- Der Linktext sollte derselbe wie der Titel der Seite oder des Abschnittes sein, auf den verwiesen wird. Zum Beispiel wird der Linktext zu dieser [ARIA](/de/docs/Web/Accessibility/ARIA/Attributes) Seite mit dem Seitentitel „ARIA-Zustände und -Eigenschaften“ sein:
  - **Richtig**: [ARIA states and properties](/de/docs/Web/Accessibility/ARIA/Attributes)
- Verwenden Sie Satzschreibung im Linktext, auch wenn dieser abweicht vom Titel der verlinkten Seite oder des Abschnittes. Es könnte sein, dass der Fall in dem auf der Seite oder im Abschnitt verwendeten Titel falsch ist. Zum Beispiel wird der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrekter Satzschreibung sein:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Für externe Links, verwenden Sie ebenfalls Satzschreibung, auch wenn die Schreibung auf der Zielartikelseite abweicht. Dies soll Konsistenz über MDN Web Docs sicherstellen. Ausnahmen umfassen die Namen von Büchern.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im Abschnitt [Linking to pages in references](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Commonly used macros_ Seite erklärt. Die Nutzung des Makros fügt dem Schlüsselwort im Linktext eine Codeformatierung hinzu, wie im nächsten Beispiel gezeigt.
- Kein Artikel („Ein“, „Eine“, „Das“) wird zu Beginn des Listenrichtungspunkts benötigt. Kein Satzzeichen ist am Ende eines Listenpunkts erforderlich, da es sich immer um einen Begriff oder Satz handelt.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: The [`revert-layer`](/de/docs/Web/CSS/revert-layer) Keyword.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: The [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, fügen Sie der Linktextformatierung Schlüsselwörter und Literale mithilfe von Backticks (\`) hinzu, obwohl die Formatierung auf den Seiten- und Abschnittstiteln nicht verwendet wird. Zum Beispiel, für den Seitentitel „Array() constructor“, wird der Linktext [`Array()` constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Begleittext zum Link minimal. Im Falle einer Beschreibung, fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase, ohne abschließendes Satzzeichen. Halten Sie alle verlinkten Texte an dem Anfang, um das Durchscannen der Liste von Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS Selektoren zum Stylen von Kontrollkästchen
- Verwenden Sie das Bindewort „und“ nicht vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Other color-related properties
- Für externe Links, geben Sie so weit wie möglich die Zielwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung an (in Klammern), wann immer möglich und sinnvoll. Diese Informationen helfen den Lesern zu wissen, wohin sie gelangen werden, wenn sie auf den Link klicken. Das Datum der Veröffentlichung oder der letzten Aktualisierung hilft dabei, die Relevanz des verlinkten Artikels zu beurteilen und hilft auch den MDN Maintainers im Zusammenhang mit Artikeln, die seit Längerem nicht aktualisiert wurden, die Links zu überprüfen. Wenn Sie beispielsweise einen Link zu einem Artikel auf Wikipedia angeben, können Sie das Veröffentlichungs-/Update-Datum ignorieren. Nachfolgend finden Sie ein Beispiel für einen Link zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt, zusammen mit der Quellen- und Jahresinformationen:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Für externe Links zu Büchern, können Sie auch die Namen der Autoren angeben. Sie können einige Beispiele dazu im [Weitere Lektüre](#language_grammar_and_spelling) Abschnitt unten sehen. Refrain von Hinzufügen der Autorennamen für Blogbeiträge oder GitHub Repositories, die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu MDN Seiten in der Reihenfolge der Referenzseiten zuerst, gefolgt von Links zu den vorgeschlagenen lernen und Tutorialseiten. Diese vorgegebene Reihenfolge ist hauptsächlich zur Hilfe bei der Scanbarkeit der Listenpunkte gedacht.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen und dann die externen Links.
- Innerhalb jeder Gruppe von internen und externen Links, folgen Sie entweder einer alphabetischen Ordnung oder einer einfachen zu fortgeschrittenen Reihenfolge, was auch immer am sinnvollsten für den Kontext ist.

### Unterseiten

Wenn Sie einige Artikel über ein Thema oder ein Themengebiet hinzufügen müssen, sollten Sie dies in der Regel durch das Erstellen einer Einstiegsseite tun, dann Unterseiten für jeden der einzelnen Artikel hinzufügen.
Die Einstiegsseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, dann eine Liste der Unterseiten mit deren Beschreibungen bereitstellen.
Sie können die Einfügung von Seiten in die Liste mithilfe einiger Makros, die wir erstellt haben, automatisieren.

Betrachten Sie zum Beispiel die [JavaScript](/de/docs/Web/JavaScript) Anleitung, die wie folgt strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnisseite
- [JavaScript/Guide/JavaScript Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel auf der obersten Ebene der Hierarchie zu platzieren, was die Site verlangsamt und die Suche sowie die Site-Navigation weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom "Slug" der Seite unterscheiden, der der Teil der URL der Seite hinter `<locale>/docs/` ist. Halten Sie bitte folgende Richtlinien bei der Definition eines Slugs im Gedächtnis:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte die Komponente der neuen Ebene im Slug nur ein oder zwei Wörter lang sein.
- Slugs sollten ein Unterstrich für eine mehrteilige Komponente verwenden, wie `Getting_started` in `/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started`.
- Verwenden Sie Satzschreibung in Slugs auch in jeder Komponente, wie `Getting_started` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und auch zur Strukturierung der Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite. Ein Seitentitel kann anders als der "Slug" der Seite sein, wie im Abschnitt [Slugs](#slugs) erklärt.

Halten Sie folgende Richtlinien im Gedächtnis, wenn Sie Titel schreiben:

- **Großschreibungsstil**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften Satzweise Großschreibung verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle von Schlagzeilenweise Großschreibung:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript-Rollovers"
  - **Falsch**: "Eine Neue Methode Zur Erstellung Von JavaScript-Rollovers"

  Wir haben viele ältere Seiten, die vor dieser Stilregel geschrieben wurden. Fühlen Sie sich frei, diese bei Bedarf zu aktualisieren wenn Sie möchten. Wir werden sie allmählich erreichen.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren wollen und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte im Schreiben. Eine Inhaltsverzeichnis kann Ihnen helfen, zu entscheiden, wie Sie Informationen ordnen möchten. Einfach beginnen und aufkompliziertere und fortgeschrittenere Konzepte übergehen. Behandeln Sie erst konzeptionelle Informationen und gehen Sie dann zu handlungsorientierten Themen über.

  Halten Sie folgende Richtlinien im Gedächtnis, wenn Sie Titel für eine Seite und Abschnitte oder Unterabschnitte schreiben:

  - **Von Oberst zu Unterst**: Wie im Abschnitt [Überschriftenebenen](#überschriftenebenen) erklärt, gehen Sie von hoher `##` zu niedriger `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Ebenenüberschriften für breitere einführende Titel, und verwenden Sie spezifischere Titel, wenn Sie zu niedrigeren Ebenenüberschriften übergehen.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Ebenenüberschrift gruppiert sind. Die Benennung der Titel der verschiedenen Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Titel kurz halten**: Kürzere Titel sind leichter in Texten und im Inhaltsverzeichnis zu scannen.
  - **Titel spezifisch halten**: Verwenden Sie den Titel, um die spezifischen Informationen zu übermitteln, die im Abschnitt behandelt werden. Ein Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwende den Titel „HTML-Elemente“ anstelle von „Einführung“ oder „Übersicht“.
  - **Titel fokussiert halten**: Verwenden Sie den Titel, um ein Ziel zu übermitteln — eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Zu diesem Zweck, so weit es möglich ist, versuchen Sie das Bindewort „und“ im Titel zu vermeiden.
  - **Verwenden Sie parallele Konstruktionen**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftsebene. Wenn ein `###` Überschriftsebene Titel Gerundien verwendet, das sind Wörter, die auf „-ing“ enden, wie „Installieren“, dann versuchen Sie, alle Titel auf dieser Überschriftsebene mit Gerundien zu schreiben. Wenn ein Titel mit einem Befehlsverb beginnt, wie „Verwenden“, „Konfigurieren“, dann schreiben Sie alle Titel auf dieser Überschriftsebene beginnend mit einem Befehlsverb.
  - **Vermeiden Sie den Gemeinbegriff in einer niedrigeren Ebenenüberschrift**: Wiederholen Sie nicht den Text im Titel einer höheren Ebenenüberschrift in niedrigeren Ebenenüberschriften. Beispielsweise, in einer Abschnitt mit dem Titel "Kommas", geben Sie dem Titel eines Unterabschnitts den Namen "Nach einleitenden Sätzen" anstelle von "Kommas nach einleitenden Sätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Beginnen Sie keine Titel mit den Artikeln „eine“, „ein“ oder „das“.
  - **Fügen Sie einleitende Informationen hinzu**: Nach einem Titel, fügen Sie einen einleitenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien für das Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Richtlinien für das Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Richtlinien für das Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Richtlinien für das Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Richtlinien für das Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weitere Lektüre

### Andere Stilhandbücher

Wenn Sie Fragen zur Verwendung und zum Stil haben, die hier nicht abgedeckt sind, empfehlen wir, den [Microsoft Schreibstilführer](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu konsultieren.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie möglicherweise die folgenden Ressourcen hilfreich.

- [Gemeine Fehler im englischen Gebrauch](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Grammatik-FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Anwendung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite für den englischen Sprachgebrauch
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich aber benutzerfreundlich, evidenzbasierte Ratschläge; sehr gut für nicht-Muttersprachler, besonders für die Verwendung von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Stil: Lektionen in Klarheit und Anmut](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
