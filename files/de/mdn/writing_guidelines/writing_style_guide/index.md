---
title: Leitfaden für den Schreibstil
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Dieser Leitfaden für den Schreibstil beschreibt, wie Inhalte auf den MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen der Sicherstellung von Sprach- und Stil-Konsistenz auf der gesamten Website. Das heißt, wir legen mehr Wert auf Inhalte als auf deren Formatierung, daher fühlen Sie sich nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu erlernen, bevor Sie beitragen. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender Ihre Arbeit später bearbeitet, um diesen Leitfaden zu entsprechen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie einen Content-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens beziehen sich hauptsächlich auf die englischsprachige Dokumentation. Andere Sprachen können (und sind willkommen, zu erstellen) eigene Stil-Richtlinien haben. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteams veröffentlicht werden. Trotzdem sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten herangezogen werden.

Nachdem die allgemeinen Schreibrichtlinien aufgelistet sind, beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie man verschiedene Komponenten auf einer Seite formatiert, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das Thema zu verstehen.

Die folgenden Unterabschnitte geben Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei C des Schreibens](#berücksichtigen_sie_die_drei_c_des_schreibens)
- [Beziehen Sie relevante Beispiele ein](#beziehen_sie_relevante_beispiele_ein)
- [Bieten Sie eine beschreibende Einführung](#bieten_sie_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#schreiben_sie_mit_seo_im_hinterkopf)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe für den Inhalt, den Sie schreiben, im Hinterkopf. Zum Beispiel muss eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerk-Konzepte eingehen wie die typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Berücksichtigen Sie die drei C des Schreibens

Die drei C des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze und bleiben Sie bei einer Idee pro Satz. Definieren Sie neue Begriffe, bevor Sie sie verwenden.
- **Kürze**: Es ist wichtig zu wissen, wie viel man sagen sollte. Wenn Sie zu viele Details angeben, wird die Seite ermüdend zu lesen und wird selten verwendet.
- **Konsistenz**: Stellen Sie sicher, dass Sie die gleiche Wortwahl durchgängig auf der Seite und über mehrere Seiten hinweg verwenden.

### Beziehen Sie relevante Beispiele ein

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt besser zu erklären, den Sie schreiben. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf eine greifbarere und praktischere Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu klären, wofür jeder Parameter verwendet wird, und um Sonderfälle zu klären, die möglicherweise existieren.
Sie können auch Beispiele verwenden, um Lösungen für allgemeine Aufgaben und Lösungen für Probleme zu demonstrieren, die auftreten können.

### Bieten Sie eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz oder die Absätze vor der ersten Überschrift die Informationen, die die Seite abdecken wird, und möglicherweise das, was die Leser nach dem Durchgehen des Inhalts erreichen können, ausreichend zusammenfassen. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollten die einleitenden Absätze den Leser über die behandelten Themen informieren sowie das vorausgesetzte Wissen, das der Leser haben sollte, wenn vorhanden. Der einleitende Absatz sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen, mit Links zu den zugehörigen Informationen, und es sollten Hinweise auf Situationen geben, in denen die Inhalte des Artikels nützlich sein könnten.

- **Beispiel einer kurzen Einleitung**: Dieses Beispiel einer Einleitung ist viel zu kurz. Es fehlt zu viel Information, wie zum Beispiel, was es genau bedeutet, Text zu "umrahmen", wo der Text gezeichnet wird und so weiter.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel einer langen Einleitung**: Dieses Beispiel hat eine aktualisierte Einleitung, ist jedoch jetzt viel zu lang.
  Es sind zu viele Details enthalten, und der Text geht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte die Einleitung sich auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben werden.

  > Wenn die Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** aufgerufen wird, umrahmt sie die Zeichen der angegebenen Zeichenkette ab den angegebenen Koordinaten, wobei die aktuelle Stiftfarbe verwendet wird.
  > In der Terminologie der Computergrafik bedeutet "umrahmen" von Text, die Umrisse der Glyphen im String zu zeichnen, ohne die Inhalte jedes Zeichens mit Farbe auszufüllen.
  >
  > Der Text wird unter Verwendung der aktuellen Schrift des Kontexts gezeichnet, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die `textAlign`-, `textBaseline`- und `direction`-Eigenschaften des Kontexts bestimmt.
  > `textAlign` steuert die Positionierung des Strings relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird der String beginnend bei `x - (stringWidth / 2)` gezeichnet, wobei die angegebene X-Koordinate in der Mitte des Strings liegt.
  > Wenn der Wert `"left"` ist, wird der String beginnend beim angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der es Ihnen ermöglicht, eine maximale Breite für den String in Pixeln zu spezifizieren.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen Raum zu passen, der so breit ist, wenn er gezeichnet wird.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen eines Strings als farbgefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel einer passenden Einleitung**: Hier sehen wir eine viel bessere Übersicht für die `strokeText()`-Methode.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrahmt (zeichnet die Umrisse) der Zeichen einer angegebenen Zeichenkette, die an der Position dargestellt ist, die durch die angegebenen X- und Y-Koordinaten bestimmt wird.
  > Der Text wird unter Verwendung des aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Zeichengrafik-Seite sowie unseren Hauptartikel zu diesem Thema, [Zeichentext](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, den Text so inklusiv wie möglich zu halten.
Hier sind einige Alternativen zu gängigen Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Verwenden Sie statt **Dummy** **Platzhalter**.
- Sie sollten nicht die Begriffe **crazy** und **insane** in der Dokumentation verwenden; jedoch, wenn der Fall eintritt, ziehen Sie in Betracht **fantastic** zu verwenden.

Es ist am besten, geschlechtsneutrale Sprache in jedem Text zu verwenden, in dem Geschlecht für den Inhalt unerheblich ist.
Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist "er"/"seine" in Ordnung; aber wenn das Subjekt eine Person beliebigen Geschlechts ist, ist "er"/"seine" nicht geeignet.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu benutzen."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu benutzen."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Nutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu benutzen."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechtsneutralen Pronomen sind "they", "them", "their" und "theirs".

Eine andere Option besteht darin, die Benutzer im Plural zu schreiben, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu benutzen."

Die beste Lösung besteht natürlich darin, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog zur Erlaubnis für den Webkamera-Zugriff erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel, das Problem zu lösen, ist sicherlich besser.
Es ist nicht nur grammatikalisch korrekter, sondern entfernt auch einige der Komplexitäten, die mit der Behandlung von Geschlechtern in verschiedenen Sprachen einhergehen, die möglicherweise sehr unterschiedliche Geschlechtsregeln haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Schreiben Sie mit SEO im Hinterkopf

Während das primäre Ziel jeder Schreiberei auf den MDN Web Docs immer sein sollte, offene Webtechnologie zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie wollen oder um die kleinen Details zu finden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie die Materialien finden können, die wir schreiben. Wir können dies erreichen, indem wir bei der Erstellung von Inhalten an die Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) denken.

Dieser Abschnitt behandelt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unsere Materialien leicht kategorisieren und indizieren können, damit Leser leicht finden, was sie brauchen. Die SEO-Richtlinien umfassen, dass sichergestellt wird, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und ausgezeichnet ist, um den Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indexieren.

Die folgende Checkliste ist gut, um bei der Erstellung und Überprüfung von Inhalten im Hinterkopf zu behalten, um sicherzustellen, dass die Seite und ihre Nachbarn ordnungsgemäß von Suchmaschinen indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, werden Suchmaschinen annehmen, dass die Seiten über dasselbe Thema sind, selbst wenn sie es nicht sind.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es einfach, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, indem nur wenige Wörter ausgetauscht werden und das gleiche Beispiel verwendet wird. Dies macht es den Suchmaschinen schwer zu wissen, was was ist, und sie teilen sich den Seitenrang, was dazu führt, dass beide schwerer zu finden sind, als sie es sein sollten.

  Es ist also wichtig, sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, um dies zu erreichen:

  - **Erklären Sie mehr einzigartige Konzepte**: Überlegen Sie Anwendungsfälle, in denen möglicherweise mehr Unterschiede bestehen, als man denken würde. Zum Beispiel im Fall der Dokumentation der `width`- und `height`-Eigenschaften, schreibe vielleicht über die unterschiedlichen Verwendungen von horizontalem und vertikalem Raum und biete eine Diskussion über die entsprechenden Konzepte. Vielleicht können Sie die Verwendung von `width` in Bezug auf die Bereitstellung von Raum für eine Seitenleiste erwähnen, während `height` verwendet wird, um mit vertikalem Scrollen oder Fußzeilen umzugehen. Informationen über Zugänglichkeitsfragen einzuschließen ist ebenfalls eine nützliche und wichtige Idee.
  - **Verwenden Sie unterschiedliche Beispiele**: Beispiele in diesen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele möglicherweise beide (oder alle) der ähnlichen Methoden oder Eigenschaften verwenden, um zu beginnen, wodurch keine realen Änderungen erforderlich sind, wenn sie wiederverwendet werden. Also werfen Sie das Beispiel weg und schreiben Sie ein neues, oder bieten Sie zumindest mehrere Beispiele an, von denen mindestens einige unterschiedlich sind.
  - **Fügen Sie Beschreibungen für Beispiele hinzu**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch eine Abdeckung darüber, wie es funktioniert, in einem angemessenen Detaillierungsgrad, abhängig von der Komplexität des Themas und der Zielgruppe, sollten enthalten sein.

  Der einfachste Weg, übermäßig ähnliche Inhalte zu vermeiden, ist es natürlich, jeden Artikel von Grund auf zu schreiben, wenn es die Zeit erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu knapp ist (genannt "dünne Seiten" im SEO-Jargon), werden Suchmaschinen solche Seiten nicht genau (oder gar nicht) katalogisieren. Zu kurze Inhaltsseiten sind schwer zu finden. Als Richtlinie sollten Seiten auf den MDN Web Docs nicht kürzer als etwa 300 Wörter sein. Blasen Sie eine Seite nicht künstlich auf, aber betrachten Sie diese Richtlinie als Mindestziel, wenn möglich.

  Hier sind einige grundlegende Richtlinien, die Ihnen helfen können, Seiten zu erstellen, die genug Inhalt haben, um ordnungsgemäß durchsuchbar zu sein, ohne sie mit unnötigem Text zu füllen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, eindeutige "Stub"-Seiten auf den MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Überprüfen Sie die Seitenstruktur**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für ihren [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Stellen Sie Vollständigkeit sicher**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Bereich, in dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist leicht, eine schnelle Erklärung von etwas zu geben, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser wissen muss?
  - **Fügen Sie Beispiele hinzu**: Es sollten Beispiele alle Parameter oder zumindest die Parameter (oder Eigenschaften, oder Attribute) abdecken, die Benutzer von den Anfänger- bis Mittelstufen wahrscheinlich verwenden werden, sowie fortgeschrittene, die zusätzliche Erklärungen benötigen. Jedes Beispiel sollte von einem Überblick darüber, was das Beispiel tun wird, welche zusätzlichen Kenntnisse möglicherweise benötigt werden, um es zu verstehen, und so weiter, vorangegangen werden. Nach dem Beispiel (oder verteilt zwischen den Teilen des Beispiels) sollte Text erklären, wie der Code funktioniert. Geizen Sie nicht mit den Details oder der Behandlung von Fehlern in den Beispielen. Denken Sie daran, dass die Benutzer _Ihr_ Beispiel für ihre eigenen Projekte kopieren und verwenden _werden_, und Ihr Code _wird_ auf Produktionsseiten verwendet werden! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) für nützlichere Informationen.
  - **Erklären Sie Anwendungsfälle**: Wenn es besonders häufige Anwendungsfälle für die beschriebene Funktion gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode verwendet werden kann, um ein häufiges Entwicklungsproblem zu lösen, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Fügen Sie Bildinformationen hinzu**: Fügen Sie allen Bildern und Diagrammen einen ordnungsgemäßen [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text hinzu. Dieser Text und auch die Bildunterschriften auf Tabellen und anderen Abbildungen zählen, weil Spider keine Bilder durchsuchen können, und daher erläutern `alt`-Texte den Suchmaschinencrawlern den Inhalt der eingebetteten Mediadaten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder nicht mit der Funktion zusammenhängende Schlüsselwörter einzuschließen, um die Suchmaschinen-Rankings zu manipulieren; dieses Verhalten ist leicht zu erkennen und wird in der Regel bestraft.
    > Ebenso fügen Sie bitte **keine** wiederholten, wenig hilfreichen Materialien oder Haufen von Schlüsselwörtern in die eigentliche Seite ein, um die Größe und das Suchranking der Seite zu verbessern. Dies schadet mehr, als es nützt, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Konzentrieren Sie sich auf Themeninhalte**: Es ist weit besser, Inhalte um das Thema der Seite herum zu schreiben als um ein spezifisches Schlüsselwort. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein bestimmtes Thema einschließen könnten; tatsächlich erstellen viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (von kurzen, mittleren bis langen Schlüsselwörtern), die je nach Länge in ihren Artikel aufgenommen werden sollen. Indem Sie dies tun, diversifizieren Sie Ihre Wortwahl, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen davon, dass Sie grammatikalisch korrekte Sätze auf Englisch schreiben, empfehlen wir Ihnen, die folgenden Richtlinien zu befolgen, um den Inhalt in den MDN Web Docs konsistent zu halten.

- [Abkürzungen und Akronyme](#abkürzungen_und_akronyme)
- [Großschreibung](#großschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralbildung](#pluralbildung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anführungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#hyphens)
- [Rechtschreibung](#spelling)
- [Terminologie](#terminology)
- [Stimme](#voice)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das aus dem ersten Buchstaben jedes Wortes eines Satzes erstellt wird. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Beim ersten Vorkommen eines Begriffs auf einer Seite sollten Akronyme, die den Benutzern möglicherweise unbekannt sind, ausgeschrieben werden. Im Zweifelsfall den Begriff ausschreiben. Noch besser, verlinken Sie ihn mit dem Artikel oder dem [Glossareintrag](/de/docs/Glossary), der die Technologie beschreibt.

  - **Korrekt**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache…"
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache…"

- **Großschreibung und Punkte**: Verwenden Sie vollständige Großbuchstaben und löschen Sie Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Korrekt**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  - **Korrekt**: Webbrowser (z.B., Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (z.B. Firefox) können verwendet werden ...

  Im laufenden Text (d.h. außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Korrekt**: ... Webbrowser, und so weiter.
  - **Falsch**: ... Webbrowser, etc.

  - **Korrekt**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und englischen Äquivalente der lateinischen Abkürzungen zusammen:

  | Abkürzung | Latein           | Englisch                      |
  | --------- | ---------------- | ----------------------------- |
  | cf.       | _confer_         | vergleichen                   |
  | e.g.      | _exempli gratia_ | zum Beispiel                  |
  | et al.    | _et alii_        | und andere                    |
  | etc.      | _et cetera_      | und so weiter, und so fort    |
  | i.e.      | _id est_         | das heißt, mit anderen Worten |
  | N.B.      | _nota bene_      | merke wohl                    |
  | P.S.      | _post scriptum_  | Nachschrift                   |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich nützlich ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten benutzt, dass viele Leser entweder verwirrt sind oder ihre Bedeutungen nicht verstehen.
  >
  > Achten Sie auch darauf, dass _Sie_ sie korrekt verwenden, wenn Sie sich entscheiden, sie zu verwenden. Zum Beispiel, verwechseln Sie nicht "e.g." mit "i.e.", was ein häufiger Fehler ist.

- **Plurale von Abkürzungen und Akronymen**: Für Plurale von Abkürzungen und Akronymen fügen Sie ein _s_ hinzu. Verwenden Sie niemals ein Apostroph. Bitte.

  - **Korrekt**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs.", und "v."**: Wenn Sie die Verkürzung verwenden, wird "vs." bevorzugt gegenüber "v." und kann in Überschriften verwendet werden. Ansonsten im Text verwenden Sie die ausgeschriebene Form "versus".

  - **Korrekt**: dies vs. das
  - **Falsch**: dies v. das
  - **Korrekt**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Haupttext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (allein stehend oder als Modifier) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer vorherigen Version dieses Leitfadens, daher können Sie viele Instanzen von "Web" und "Internet" auf MDN finden.
> Fühlen Sie sich frei, diese zu ändern, während Sie andere Änderungen vornehmen, aber bearbeiten Sie einen Artikel nicht ausschließlich, um die Großschreibung zu ändern.

Tastaturtasten sollten satzmäßige Großschreibung verwenden, nicht All-Caps-Großschreibung.
Zum Beispiel, "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie Marken, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird innerhalb von Code verwendet und die Codesyntax erfordert Kleinschreibung).
Einige Beispiele sind:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke von Oracle Corporation, sollte immer als markengeschützt geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil neigt dazu, leger zu sein, daher sollten Sie sich frei fühlen, Kontraktionen (z.B. "don't", "can't", "shouldn't") zu verwenden, wenn Sie möchten.

### Zahlen und Ziffern

- **Kommas**: Im laufenden Text verwenden Sie Kommas nur bei fünfstelligen und größeren Zahlen.

  - **Korrekt**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (ausgenommen Daten in Codebeispielen) verwenden Sie das Format "January 1, 1900".

  - **Korrekt**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format JJJJ/MM/TT verwenden.

  - **Korrekt**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie kein Apostroph.

  - **Korrekt**: 1920s
  - **Falsch**: 1920's

- **Plurale von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie kein Apostroph.

  - **Korrekt**: 486s
  - **Falsch**: 486's

### Pluralbildung

Verwenden Sie englische Pluralformen, nicht die lateinischen oder griechischen Formen.

- **Korrekt**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Apostrophe. Auf den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies ist notwendig, weil wir uns für eine Variante entscheiden müssen, um Konsistenz zu gewährleisten. Wenn geschwungene Anführungszeichen oder Apostrophe in Code-Schnipsel, selbst in Inline-Schnipseln, geraten, können Leser sie kopieren und einfügen, erwarten, dass sie funktionieren (was sie nicht tun).

- **Korrekt**: Please don't use "curly quotes."
- **Falsch**: Please don&rsquo;t use &ldquo;curly quotes.&rdquo;

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einführenden Nebensätzen**: Ein einleitender Nebensatz ist ein abhängiger Satz, der normalerweise am Anfang eines Satzes gefunden wird. Verwenden Sie ein Komma nach einem einführenden Nebensatz, um ihn vom folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Korrekt**: "In diesem Beispiel, sehen Sie, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel sehen Sie, wie man ein Komma verwendet."
  - Beispiel 2:
    - **Korrekt**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen sind Sie hier richtig."
  - Beispiel 3:
    - **Korrekt**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel eine numerische Tastatur zum Eingeben von Daten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf den MDN Web Docs verwenden wir das Serienkomma. Auch die einzelnen Elemente der Liste werden durch Kommas getrennt.

  - **Korrekt**: "I will travel on trains, planes, and automobiles."
  - **Falsch**: "I will travel on trains, planes and automobiles."

  Verwenden Sie kein Komma vor "and" und "or" in einer Liste, die zwei Elemente enthält.

  - **Korrekt**: "My dog is cute and smart."
  - **Falsch**: "My dog is cute, and smart."

  Verwenden Sie ein Komma vor den Konjunktionen "and", "but", und "or", wenn sie zwei unabhängige Sätze verbinden. Wenn jedoch der Satz sehr lang oder kompliziert wird, erwägen Sie, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Korrekt**: "You can perform this step, but you need to pay attention to the file setting."
    - **Falsch**: "You can perform this step but you need to pay attention to the file setting."
  - Beispiel 2:
    - **Korrekt**: "My father is strict but loving."
    - **Falsch**: "My father is strict, but loving."

- **Vor "that" und "which"**: Ein restriktiver Satz ist wesentlich für die Bedeutung des Satzes und benötigt keine Kommas, um ihn vom restlichen Satz abzugrenzen. Ein restriktiver Satz wird normalerweise durch "that" eingeführt und **sollte nicht** durch ein Komma vorangestellt werden.

  - **Korrekt**: "We have put together a course that includes all the essential information you need to work towards your goal."
  - **Falsch**: "We have put together a course, that includes all the essential information you need to work towards your goal."

  Ein nicht restriktiver Satz liefert zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nicht restriktiver Satz wird normalerweise durch "which" eingeführt und sollte mit einem Komma vorangestellt werden.

  - **Korrekt**: "You write a policy, which is an allowed list of origins for each feature."
  - **Falsch**: "You write a policy which is an allowed list of origins for each feature."

- **Vor "such as"**: Wenn "such as" Teil eines nicht restriktiven Satzes ist und der restliche Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor "such as".

  - **Korrekt**: "The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them."
  - **Falsch**: "The Array object has methods for manipulating arrays in various ways such as joining, reversing, and sorting them."

  Das folgende Beispiel zeigt, wann man kein Komma mit "such as" verwendet. Hier ist der Satz, der "such as" enthält, wesentlich für die Bedeutung des Satzes.

  - **Korrekt**
