---
title: Schreibstil-Leitfaden
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 41a27d6c0f8e44f1b9a3dabddd9315655b367b77
---

{{MDNSidebar}}

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte für die MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien gewährleisten Konsistenz in Sprache und Stil auf der gesamten Website. Unser Hauptaugenmerk liegt jedoch auf dem Inhalt, nicht auf der Formatierung, daher fühlen Sie sich nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu lernen, bevor Sie Beiträge leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Beitragender Ihre Arbeit später bearbeitet, um sie an diesen Leitfaden anzupassen. Die Reviewer könnten Ihnen auch diesen Stil-Leitfaden empfehlen, wenn Sie eine Content-Pull-Request einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für englischsprachige Dokumentation. Andere Sprachen können (und dürfen) ihre eigenen Stil-Leitfäden erstellen, die als Unterseiten der entsprechenden Lokalisierungsteamseiten veröffentlicht werden sollten. Dieser Leitfaden sollte jedoch weiterhin für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach dem Auflisten der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und erläutert, wie verschiedene Komponenten auf einer Seite formatiert werden, wie Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen, um das behandelte Thema zu verstehen.

Die folgenden Unterabschnitte geben Empfehlungen zur Erreichung dieses Ziels:

- [Berücksichtigen Sie Ihr Zielpublikum](#beruecksichtigen_sie_ihr_zielpublikum)
- [Beachten Sie die drei Cs des Schreibens](#beachten_sie_die_drei_cs_des_schreibens)
- [Relevante Beispiele einfügen](#relevante_beispiele_einfuegen)
- [Eine beschreibende Einführung bieten](#eine_beschreibende_einfuehrung_bieten)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Mit SEO im Hinterkopf schreiben](#mit_seo_im_hinterkopf_schreiben)

### Berücksichtigen Sie Ihr Zielpublikum

Behalten Sie das Zielpublikum für die Inhalte, die Sie schreiben, im Kopf. Beispielsweise benötigt eine Seite über fortgeschrittene Netzwerktechniken wahrscheinlich nicht so viele Details zu grundlegenden Netzwerkkonzepten wie eine typische Netzwerkseite. Beachten Sie, dass es sich um Richtlinien handelt. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Beachten Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Kürze und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie generell den aktiven Sprachstil und eindeutige Pronomen. Schreiben Sie kurze Sätze, die sich jeweils auf eine Idee beschränken. Definieren Sie neue Begriffe, bevor Sie sie verwenden, unter Berücksichtigung des Zielpublikums.
- **Kurz**: Beim Schreiben eines Dokuments ist es wichtig zu wissen, wie viel man sagen sollte. Wenn Sie zu viele Details geben, wird die Seite mühsam zu lesen und nur selten genutzt.
- **Konsistent**: Stellen Sie sicher, dass Sie die gleiche Ausdrucksweise konsistent auf der Seite und über mehrere Seiten hinweg verwenden.

### Relevante Beispiele einfügen

Generell gilt, Beispiele oder reale Szenarien hinzuzufügen, um die Inhalte besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbare und praktische Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um eventuelle Sonderfälle zu klären.
Sie können auch Beispiele zur Demonstration von Lösungen für allgemeine Aufgaben und Lösungen für potenzielle Probleme verwenden.

### Eine beschreibende Einführung bieten

Versichern Sie sich, dass der einleitende Absatz bzw. die einleitenden Absätze vor der ersten Überschrift ausreichend die Informationen zusammenfassen, die die Seite behandeln wird, und vielleicht, was die Leser nach Durcharbeitung des Inhalts erreichen können. Auf diese Weise kann ein Leser schnell feststellen, ob die Seite relevant für seine Anliegen und gewünschten Lernergebnisse ist.

In einem Leitfaden oder einer Anleitung sollten die einleitenden Absätze den Leser über die behandelten Themen informieren sowie darüber, welches Vorwissen der Leser erwartet wird, falls vorhanden. Der einleitende Absatz sollte die dokumentierten oder diskutierten Technologien und/oder APIs erwähnen, mit Links zu den verwandten Informationen, und sollte Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel für eine Einführung ist viel zu kurz. Es lässt zu viele Informationen aus, wie z.B. was genau "Text streichen" bedeutet, wo der Text gezeichnet wird, usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet einen String.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, ist aber jetzt viel zu lang.
  Zu viele Details sind enthalten, und der Text geht zu tief in die Beschreibung anderer Methoden und Eigenschaften ein.
  Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben sind.

  > Wenn sie aufgerufen wird, streicht die Methode **`CanvasRenderingContext2D.strokeText()`** des Canvas 2D API die Zeichen im angegebenen String ab dem angegebenen Koordinaten, und verwendet dabei die aktuelle Stiftfarbe.
  > In der Terminologie der Computergrafik bedeutet "Text streichen", die Umrisse der Glyphen im String zu zeichnen, ohne den Inhalt jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schriftart des Kontexts, wie in der [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)-Eigenschaft des Kontexts angegeben, gezeichnet.
  >
  > Die Positionierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt.
  > `textAlign` steuert die Platzierung des Strings relativ zur angegebenen X-Koordinate; wenn der Wert `"center"` ist, wird der String beginnend bei `x - (stringWidth / 2)` gezeichnet, wodurch die angegebene X-Koordinate in der Mitte des Strings platziert wird.
  > Wenn der Wert `"left"` ist, wird der String beginnend bei dem angegebenen Wert von `x` gezeichnet.
  > Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er an der angegebenen X-Koordinate endet.
  >
  > (…)
  >
  > Optional können Sie einen vierten Parameter angeben, der eine maximale Breite für den String in Pixeln spezifiziert.
  > Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um beim Zeichnen in eine so breite Fläche zu passen.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen eines Strings zu zeichnen, indem sie mit Farbe gefüllt werden, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine angemessene Einführung**: Hier sehen wir eine viel bessere Übersicht für die `strokeText()`-Methode.

  > Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Methode **`strokeText()`**, Teil des [Canvas 2D API](/de/docs/Web/API/Canvas_API), streicht (zeichnet die Umrisse) die Zeichen eines angegebenen Strings, verankert an der durch die gegebenen X- und Y-Koordinaten angegebenen Position.
  > Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und wird gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet und justiert.
  >
  > Für mehr Details und Beispiele siehe den [Text](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text)-Abschnitt auf der Seite über das Zeichnen von Grafiken sowie unseren Hauptartikel zum Thema [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein breites und vielfältiges Publikum.
Wir ermutigen nachdrücklich, den Text so inklusiv wie möglich zu gestalten.
Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Verwenden Sie anstelle von **dummy** einfach **placeholder**.
- Sie sollten die Begriffe **crazy** und **insane** in der Dokumentation nicht verwenden; sollte der Fall dennoch auftreten, ziehen Sie stattdessen **fantastic** in Betracht.

Es ist am besten, geschlechtsneutrale Sprache in jedem Schreiben zu verwenden, bei dem Geschlecht für das Thema irrelevant ist.
Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist "er"/"sein" in Ordnung; aber wenn das Thema eine Person beliebigen Geschlechts ist, ist "er"/"sein" nicht angemessen.

Lassen Sie uns die folgenden Beispiele betrachten:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt die Benutzerin, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung von Pronomen der dritten Person im Plural, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)." Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine weitere Möglichkeit besteht darin, die Benutzer plural zu machen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen umzuformulieren und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers zur Nutzung der Webcam anfordert, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfenster, das den Benutzer um Erlaubnis zur Nutzung der Webcam bittet, erscheint."

Dieses letzte Beispiel zur Problemlösung ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einige der Komplexitäten, die mit der Handhabung von Geschlechtern in verschiedenen Sprachen verbunden sind, die drastisch unterschiedliche Geschlechtsregeln haben können.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Mit SEO im Hinterkopf schreiben

Während das Hauptziel jedes Schreibens auf MDN Web Docs immer darin bestehen sollte, offene Web-Technologie zu erklären und darüber zu informieren, damit Entwickler schnell lernen können, was sie wollen, oder die kleinen Details finden können, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie in der Lage sind, das Material, das wir schreiben, _zu finden_. Wir können dies erreichen, indem wir Suchmaschinenoptimierung ({{Glossary("SEO", "SEO")}}) beim Schreiben im Hinterkopf behalten.

Dieser Abschnitt deckt die Standardpraktiken, Empfehlungen und Anforderungen für Inhalte ab, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indexieren können, damit die Leser leicht finden können, was sie brauchen. Die SEO-Richtlinien umfassen die Sicherstellung, dass jede Seite, an der Autoren und Redakteure arbeiten, angemessen gestaltet, geschrieben und markiert ist, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel ordnungsgemäß zu indizieren.

Die folgende Checkliste ist gut im Hinterkopf zu behalten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarn von Suchmaschinen korrekt indexiert werden:

- **Sicherstellen, dass Seiten nicht zu ähnlich sind**: Wenn der Inhalt auf verschiedenen Seiten textlich ähnlich ist, gehen Suchmaschinen davon aus, dass die Seiten über das Gleiche handeln, auch wenn sie es nicht tun.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, ist es leicht, dass der Text auf den beiden Seiten, die diese beiden Eigenschaften dokumentieren, überraschend ähnlich ist, nur mit wenigen ausgetauschten Wörtern und dem gleichen Beispiel. Dies macht es Suchmaschinen schwer zu wissen, welche welche ist, und sie teilen sich den Seitenrang, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Es ist also wichtig sicherzustellen, dass jede Seite ihren eigenen Inhalt hat. Hier sind einige Vorschläge, die Ihnen dabei helfen können:

  - **Mehr einzigartige Konzepte erläutern**: Betrachten Sie Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man denkt. Beispielsweise bei der Dokumentation der Eigenschaften `width` und `height` könnte man über die unterschiedlichen Nutzungsmöglichkeiten des horizontalen und vertikalen Raumes schreiben und die passenden Konzepte diskutieren. Vielleicht können Sie die Verwendung von `width` im Hinblick auf die Bereitstellung eines Platzes für eine Seitenleiste erwähnen, während `height` für die Verarbeitung des vertikalen Scrollens oder Footers eingesetzt wird. Informationen über Zugänglichkeitsprobleme sind ebenfalls eine nützliche und wichtige Idee.
  - **Verschiedene Beispiele verwenden**: Beispiele in solchen Situationen sind oft noch ähnlicher als der Haupttext, da die Beispiele von Anfang an möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften verwenden, sodass keine wirklichen Änderungen erforderlich sind, wenn sie wiederverwendet werden. Verwerfen Sie das Beispiel also und schreiben Sie ein neues oder bieten Sie zumindest mehrere Beispiele mit einigen unterschiedlichen an.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl eine Übersicht darüber, was das Beispiel tut, als auch eine Erläuterung, wie es funktioniert, in einem angemessenen Detailgrad, der dem Schwierigkeitsgrad des Themas und der Zielgruppe entspricht, sollten enthalten sein.

  Der einfachste Weg, zu ähnlich zu sein, zu vermeiden, besteht natürlich darin, jeden Artikel von Grund auf neu zu schreiben, wenn die Zeit es zulässt.

- **Sicherstellen, dass Seiten nicht zu kurz sind**: Wenn der Inhalt einer Seite zu gering ist (im SEO-Jargon auch als "dünne Seiten" bezeichnet), werden Suchmaschinen solche Seiten nicht genau (oder gar nicht) katalogisieren. Überdurchschnittlich kurze Inhaltsseiten sind schwer zu finden. Als leitender Grundsatz stellen Sie sicher, dass Seiten auf MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, sondern betrachten Sie diese Richtlinie als Mindestziel, wann immer es möglich ist.

  Hier sind einige grundlegende Richtlinien, die Ihnen helfen, Seiten zu erstellen, die genügend Inhalt haben, um korrekt durchsuchbar zu sein, ohne sie mit unnötigem Text überfrachten zu müssen:

  - **Stub-Seiten vermeiden**: Offensichtlich, wenn der Artikel eine Stub-Seite ist oder Inhalt fehlt, fügen Sie diesen hinzu. Wir versuchen, explizite "Stub"-Seiten auf MDN Web Docs zu vermeiden, obwohl sie existieren, aber es gibt viele Seiten, bei denen große Teile ihres Inhalts fehlen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie, ob die Seite so strukturiert ist, wie es ihrem [Seiten-Typ](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und den entsprechenden Inhalt haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie die Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt werden. Stellen Sie sicher, dass alle Ausnahmen abgedeckt sind - dies ist ein besonders häufiger Ort, an dem Inhalt fehlt.
  - **Alle Konzepte vollständig ausarbeiten**: Es ist einfach, eine schnelle Erklärung für etwas zu geben, aber stellen Sie sicher, dass alle Nuancen abgedeckt sind. Gibt es spezielle Fälle? Gibt es bekannte Einschränkungen, die der Leser kennen sollte?
  - **Beispiele hinzufügen**: Es sollten Beispiele enthalten sein, die alle Parameter abdecken oder zumindest die Parameter (oder Eigenschaften, Attribute), die Benutzer im Anfänger- bis mittleren Bereich wahrscheinlich verwenden werden, sowie alle fortgeschrittenen, die zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einer Übersicht eröffnet werden, was das Beispiel tun wird, welches zusätzliche Wissen möglicherweise erforderlich ist, um es zu verstehen usw. Nach dem Beispiel (oder unterbrochen zwischen Stücken des Beispiels) sollte Text enthalten sein, der erklärt, wie der Code funktioniert. Verzichten Sie nicht auf die Details oder die Fehlermanagement in Beispielen. Beachten Sie, dass Benutzer _Ihr_ Beispiel kopieren und einfügen und es in _ihren_ eigenen Projekten verwenden werden und dass Ihr Code _auf_ Produktionsseiten verwendet werden wird! Weitere nützliche Informationen finden Sie in unserem [Leitfaden für Code-Beispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).
  - **Anwendungsfälle erklären**: Wenn es besonders häufige Anwendungsfälle für das dokumentierte Feature gibt, sprechen Sie darüber! Anstatt zu erwarten, dass ein Benutzer erkennt, dass die dokumentierte Methode ein normales Entwicklungsproblem lösen kann, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall hinzu, zusammen mit einem Beispiel und einem erklärenden Text, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie den Bildern und Diagrammen ordnungsgemäßen [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text hinzu. Dieser Text sowie Bildunterschriften zu Tabellen und anderen Figuren zählen, weil Suchen-Spinnen keine Bilder durchsuchen können und daher `alt`-Text den Suchmaschinen-Crawlern mitteilt, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Schlüsselwörter oder Schlüsselwörter, die nichts mit der Funktion zu tun haben, in einem Versuch zur Manipulation von Suchmaschinen-Rankings aufzunehmen; solches Verhalten ist leicht zu erkennen und wird tendenziell bestraft.
    > Ebenso sollten Sie **nicht** wiederholte, unnütze Inhalte oder Ansammlungen von Schlüsselwörtern innerhalb der eigentlichen Seite hinzufügen, um die Seitengröße und Suchrang zu verbessern. Dies richtet mehr Schaden als Nutzen an, sowohl für die Lesbarkeit als auch für unsere Suchergebnisse.

- **Fokus auf Themeninhalt**: Es ist weit besser, Inhalte rund um das Thema der Seite zu schreiben als spezifische Schlüsselwörter. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein gegebenes Thema einfügen könnten; in der Tat stellen viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (unterschiedlich zwischen kurzen, mittleren und langen Schlüsselwörtern) zusammen, die sie je nach Länge in ihren Artikel aufnehmen wollen. Dies führt zu einer Diversifizierung Ihrer Formulierungen, wodurch eine Wiederholung vermieden wird.

## Schreibstil

Abgesehen davon, dass Sie grammatikalisch korrekte Sätze auf Englisch schreiben, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um Inhalte auf MDN Web Docs konsistent zu halten.

- [Abkürzungen und Akronyme](#abkuerzungen_und_akronyme)
- [Großschreibung](#grossschreibung)
- [Kontraktionen](#kontraktionen)
- [Zahlen und Ziffern](#zahlen_und_ziffern)
- [Pluralisierung](#pluralisierung)
- [Apostrophe und Anführungszeichen](#apostrophe_und_anfuehrungszeichen)
- [Kommas](#kommas)
- [Bindestriche](#bindestriche)
- [Rechtschreibung](#rechtschreibung)
- [Terminologie](#terminologie)
- [Stimme](#stimme)

### Abkürzungen und Akronyme

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das die Anfangsbuchstaben jedes Wortes einer Phrase verwendet. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Ausschreibungen**: Beim ersten Vorkommen eines Begriffs auf einer Seite sollten Abkürzungen, die den Benutzern wahrscheinlich unbekannt sind, ausgeschrieben werden. Bei Zweifel schreiben Sie den Begriff aus. Besser noch, verlinken Sie ihn mit dem Artikel oder dem [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Großbuchstaben und verzichten Sie auf Punkte in allen Abkürzungen und Akronymen, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (usw., d.h., z.B.) in erläuternden Ausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder anderer angemessener Interpunktion.

  - **Richtig**: Webbrowser (z.B. Firefox) können verwendet werden …
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden …
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden …
  - **Falsch**: Webbrowser, (z.B. Firefox) können verwendet werden …

  In normalem Text (d.h. Text außerhalb von Notizen oder Klammern) verwenden Sie die englische Entsprechung der Abkürzung.

  - **Richtig**: ... Webbrowser, und so weiter.
  - **Falsch**: ... Webbrowser, usw.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden …
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden …

  Die folgende Tabelle fasst die Bedeutungen und englischen Entsprechungen lateinischer Abkürzungen zusammen:

  | Abkürzung | Latin            | English                      |
  | --------- | ---------------- | ---------------------------- |
  | cf.       | _confer_         | vergleichen                  |
  | z.B.      | _exempli gratia_ | zum Beispiel                 |
  | et al.    | _et alii_        | und andere                   |
  | usw.      | _et cetera_      | und so weiter                |
  | d.h.      | _id est_         | das heißt, in anderen Worten |
  | N.B.      | _nota bene_      | beachten Sie                 |
  | P.S.      | _post scriptum_  | Postskriptum                 |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich vorteilhaft ist, eine lateinische Abkürzung zu verwenden. Einige von ihnen werden so selten verwendet, dass viele Leser sie entweder verwirren oder ihre Bedeutungen nicht verstehen.
  >
  > Stellen Sie auch sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich entscheiden, dies zu tun. Zum Beispiel achten Sie darauf, "z.B." nicht mit "d.h." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für das Plural von Abkürzungen und Akronymen fügen Sie ein _s_ hinzu. Verwenden Sie niemals Apostrophe. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Kurzform verwenden, wird "vs." über "v." bevorzugt und kann in Überschriften verwendet werden. An anderer Stelle im Text verwenden Sie die ausgeschriebene Form "versus".

  - **Richtig**: dies vs. das
  - **Falsch**: dies v. das
  - **Richtig**: dies versus das

### Großschreibung

Verwenden Sie standardmäßige englische Großschreibungsregeln im Fließtext und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (alleine verwendet oder als Modifikator) und "internet" in Kleinbuchstaben zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung von einer früheren Version dieses Leitfadens; Sie könnten auf viele Instanzen von "Web" und "Internet" auf MDN stoßen.
> Ändern Sie diese gerne, wenn Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zur Änderung der Großschreibung zu bearbeiten.

Tastenkürzel sollten die Satzstil-Großschreibung verwenden, keine Ganzkaps-Großschreibung.
Zum Beispiel "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>".
Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" für die Abkürzung der "<kbd>Escape</kbd>"-Taste verwenden können.

Bestimmte Wörter sollten immer großgeschrieben werden, wie zum Beispiel Marken, die Großbuchstaben enthalten, oder Wörter, die von einem Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Syntax des Codes erfordert die Kleinschreibung).
Einige Beispiele umfassen:

- Boolescher (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (ein Markenzeichen von Oracle Corporation, es sollte immer wie markenrechtlich registriert geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert zu einem lockeren Stil, daher sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z.B. "don't", "can't", "shouldn't"), wenn Sie dies bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Im laufenden Text verwenden Sie Kommas nur in fünfstelligen und größeren Zahlen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (außer in Code-Beispielen) verwenden Sie das Format "1. Januar 1900".

  - **Richtig**: 24. Februar 1906
  - **Falsch**: 24th Februar 1906; 24 Februar, 1906; 24/02/1906

  Alternativ können Sie das Format "YYYY/MM/DD" verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990er". Verwenden Sie kein Apostroph.

  - **Richtig**: 1920er
  - **Falsch**: 1920's

- **Plural von Ziffern**: Fügen Sie ein "s" hinzu. Verwenden Sie kein Apostroph.

  - **Richtig**: 486er
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englische Stilpluralisierung, nicht die lateinische oder griechische beeinflusste Form.

- **Richtig**: Lehrpläne, Kraken
- **Falsch**: Lehrpläne, Krake

### Apostrophe und Anführungszeichen

Verwenden Sie keine „geschwungenen“ Anführungszeichen und Zitate. Auf den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns für eines oder das andere der Konsistenz halber entscheiden müssen. Wenn geschwungene Anführungszeichen oder Apostrophe ihren Weg in Code-Ausschnitte finden, sogar in Inline-Ausschnitte, könnten Leser sie kopieren und einfügen, in der Erwartung, dass sie funktionieren (was sie nicht werden).

- **Richtig**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen.“
- **Falsch**: Bitte verwenden Sie nicht „geschwungene Anführungszeichen.“

### Kommas

Die folgende Liste beschreibt einige der allgemeinen Situationen, in denen wir uns der Kommaregeln bewusst sein müssen:

- **Nach einleitenden Sätzen**: Ein einleitender Satz ist ein abhängiger Satz, der normalerweise am Anfang eines Satzes steht. Verwenden Sie ein Komma nach einem einleitenden Satz, um ihn vom folgenden unabhängigen Satz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel sehen Sie, wie Sie ein Komma verwenden."
    - **Falsch**: "In diesem Beispiel sehen Sie, wie Sie ein Komma verwenden."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie tendenziell eine numerische Tastatur zur Dateneingabe."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie tendenziell eine numerische Tastatur zur Dateneingabe."

- **Vor Konjunktionen**: Das Serienkomma (auch "Oxford-Komma" genannt) ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf den MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor „und“ und „oder“ in einer Liste, die zwei Elemente enthält.

  - **Richtig**: „Mein Hund ist süß und schlau.“
  - **Falsch**: „Mein Hund ist süß und schlau.“

  Verwenden Sie ein Komma vor den Konjunktionen „und“, „aber“ und „oder“, wenn sie zwei unabhängige Sätze verbinden. Wenn der Satz durch die Konjunktion jedoch sehr lang oder komplex wird, sollten Sie ihn in zwei Sätze umformulieren.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng, aber liebevoll."

- **Vor "dass" und "welches"**: Ein restriktiver Satz ist für die Bedeutung des Satzes wesentlich und muss nicht durch Kommas vom restlichen Satz abgehoben werden. Ein restriktiver Satz wird normalerweise durch „dass“ eingeführt und darf **nicht** durch ein Komma vorangestellt werden.

  - **Richtig**: „Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen.“
  - **Falsch**: „Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen.“

  Ein nich-restriktiver Satz bietet zusätzliche Informationen und ist nicht wesentlich für die Bedeutung des Satzes. Ein nich-restriktiver Satz wird normalerweise durch „welches“ eingeführt und sollte durch ein Komma vorangestellt werden.

  - **Richtig**: „Sie schreiben eine Richtlinie, welches eine zugelassene Liste von Ursprüngen für jede Funktion ist.“
  - **Falsch**: „Sie schreiben eine Richtlinie, die eine zugelassene Liste von Ursprüngen für jede Funktion ist.“

- **Vor "wie"**: Wenn „wie“ Teil eines nich-restriktiven Satzes ist und der verbleibende Satz ein unabhängiger Satz ist, verwenden Sie ein Komma vor „wie“.

  - **Richtig**: „Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Arten, wie z.B. um sie zu verbinden, umzukehren oder zu sortieren.“
  - **Falsch**: „Das Array-Objekt hat Methoden zur Manipulation von Arrays auf verschiedene Arten wie z.B. um sie zu verbinden, umzukehren oder zu sortieren.“

  Das Beispiel unten zeigt, wann man kein Komma bei „wie“ verwendet. Hier ist der Satz mit „wie“ essenziell für die Bedeutung des Satzes.

  - **Richtig**: „Webanwendungen werden immer leistungsfähiger, indem sie Funktionen wie Audio- und Videobearbeitung hinzufügen und den Zugriff auf rohen Daten mit Websockets zulassen.“
  - **Falsch**: „Webanwendungen werden immer leistungsfähiger, indem sie Funktionen, wie die Audio- und Videobearbeitung, und den Zugriff auf rohen Daten mit Websockets zulassen.“

### Bindestriche

Zusammengesetzte Wörter sollten nur durch Bindestriche verbunden werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe ist wie der erste Buchstabe des Wortstamms.

- **Richtig**: wiederwahl, ko-op, email
- **Falsch**: wiederwahl, ko-op, e&#45;mail

### Rechtschreibung

Verwenden Sie amerikanisch-englische Rechtschreibung.

Verwenden Sie im Allgemeinen den ersten Eintrag bei [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag wird als alternative Schreibweise oder hauptsächlich in einer nicht-amerikanischen Englischform aufgeführt.
Wenn Sie zum Beispiel [„behavior“](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform) nachschlagen, finden Sie den Ausdruck „Hauptsächlich Britisch“, gefolgt von einem Link zur amerikanischen Standardform, ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine alternative Rechtschreibung.

<!-- cSpell:ignore localise behaviour colour -->

- **Richtig**: lokalisieren, Verhalten, Farbe
- **Falsch**: lokalisieren, Verhalten, Farbe

Wir haben [cSpell](https://cspell.org/) installiert, um Rechtschreibfehler zu finden. Es wird jede Woche ausgeführt und generiert [einen Bericht über Rechtschreibfehler](https://github.com/mdn/content/issues?q=Weekly+spelling+check+is%3Aissue+in%3Atitle) im Repository. Sie können es auch lokal über den folgenden Befehl ausführen:

```bash
npx cspell --no-progress --gitignore --config .vscode/cspell.json "**/*.md"
```

Im Repository pflegen wir mehrere Wortlisten, die sich unter [`.vscode/dictionaries`](https://github.com/mdn/content/tree/main/.vscode/dictionaries) befinden und zugelassene Wörter enthalten, die sich nicht in den Standardwörterbüchern befinden. Sie können weitere Wörter zu diesen Listen hinzufügen, wenn sie gültig, aber vom Rechtschreibprüfer gemeldet werden. Lesen Sie sich [`.vscode/cspell.json`](https://github.com/mdn/content/blob/main/.vscode/cspell.json) durch, um zu verstehen, was jedes Wörterbuch enthält und die Details unserer Rechtschreibprüfungskonfiguration.

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter Fachbegriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff „Element“, um sich auf HTML- und XML-Elemente zu beziehen, anstatt „Tag“. Darüber hinaus sollte das Element in spitzen Klammern "<>" eingeschlossen und mit Backticks (\`) hervorgehoben werden. Zum Beispiel wird die Verwendung von \<input\> innerhalb von Backticks es als `<input>` formatieren, wie es erwartet wird.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das Span-Tag

  Auf MDN können Sie optional das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) spezifizieren, das das Element formatieren, die spitzen Klammern "<>" hinzufügen sowie einen Link zur Referenzseite hinzufügen wird.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelle im Markdown: `\{{HTMLElement("span")}}`)

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf den MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff „Argumente“ aus Gründen der Konsistenz, wann immer es möglich ist.

- **Benutzeroberflächenaktionen**: Beschreiben Sie in Aufgabensequenzen Benutzeroberflächenaktionen im Imperativ. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und Typs.

  - **Richtig**: „Klicken Sie auf die Schaltfläche Bearbeiten.“
  - **Falsch**: „Klicken Sie auf Bearbeiten.“

### Stimme

Obwohl die aktive Stimme bevorzugt wird, ist die passive Stimme ebenfalls akzeptabel, gegeben der informellen Art unseres Inhalts.
Versuchen Sie jedoch konsequent zu sein.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite befolgt werden sollten, wie Überschriften, Notizen, Links und Beispiele.

- [Code-Beispiele](#code_beispiele)
- [Querverweise (Verlinkung)](#querverweise_verlinkung)
- [Externe Links](#externe_links)
- [Kurz-URLs (Kurzlinks)](#kurz-urls_kurzlinks)
- [Überschriftsebenen](#ueberschriftsebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Siehe-auch-Abschnitt](#siehe_auch_abschnitt)
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Code-Beispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Code-Beispiel enthalten. Die folgende Liste zeigt einige empfohlene Praktiken beim Schreiben eines Code-Beispiels für die MDN Web Docs:

- Jedes Beispielcode-Stück sollte Folgendes enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, die das Szenario beschreibt, das durch das Code-Beispiel demonstriert wird. Zum Beispiel „Versatzdruck verwenden“ und „Zurücksetzen auf den Stil in der vorherigen Ebene“.
  - **Beschreibung**: Eine kurze Beschreibung vor dem Beispielcode, die die Besonderheiten des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel: „Im folgenden Beispiel werden zwei Kaskadenschichten im CSS definiert, 'base' und 'special'.“
  - **Ergebniserklärung**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features demonstrieren und wie es verwendet wird, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature verwenden möchte oder benötigt.
- Wenn Sie mit einem großen Stück Beispielcode arbeiten, kann es sinnvoll sein, ihn in kleinere logische Teile zu unterteilen, damit sie einzeln beschrieben werden können.
- Wenn Sie [lebende Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) hinzufügen, ist es hilfreich zu wissen, dass der gesamte Code des Beispiels, der denselben Typ hat (HTML, CSS und JavaScript), vor dem Ausführen des Beispiels zusammengeführt wird. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, von denen jedes optional eigene Beschreibungen, Überschriften usw. haben kann. Dies macht das Dokumentieren von Code unglaublich leistungsstark und flexibel.

Um mehr darüber zu erfahren, wie Sie Codebeispiele für die MDN Web Docs stilisieren oder formatieren, siehe [Richtlinien zum Stil von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Querverweise (Verlinkung)

Beim Verweisen auf eine andere Seite oder den Abschnitt einer Seite auf MDN nach ihrem Titel, folgen Sie der Satzschreibung im Linktext (der Titel der Seite oder des Abschnitts entspricht). Verwenden Sie die Satzschreibung im Linktext, auch wenn sie sich vom verlinkten Seitentitel oder Abschnittstitel unterscheidet (es könnte sein, dass die in der Seite oder Abschnitt verwendete Großschreibung falsch ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf MDN nach ihrem Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: „Siehe den [Leitfaden zur Bestellflexibilität](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items).“
- **Falsch**: „Siehe den „[Leitfaden zur Flexibilitätsbestellung](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)“.“

Folgen Sie einem ähnlichen Stil beim Verlinken auf einen Abschnitt auf einer Seite, wie unten gezeigt:

- **Richtig**: „Für weitere Informationen siehe den [Abschnitt zur Zuweisung in JavaScript](/de/docs/Web/JavaScript/Memory_management#allocation_in_javascript) auf der _Speicherverwaltungs_-seite.“

Wenn der Abschnitt, den Sie verlinken, sich auf derselben Seite befindet, können Sie auf die Position des Abschnitts mit den Worten „oben“ oder „unten“ hinweisen.

- **Richtig**: „Dieses Konzept wird im [Zugänglichkeits](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility)-Abschnitt unten ausführlicher beschrieben.“

Sie können einen Teil eines Satzes zu einem Artikel oder dem Abschnitt eines Artikels verlinken. Seien Sie vorsichtig, beschreibende Phrasen als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite zu bieten.

- **Richtig**: „Erfahren Sie mehr über [wie man Flex-Elemente ordnet](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items).“
- **Falsch**: „Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren.“
- **Falsch**: „Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren.“

Auf MDN gibt es eine andere Möglichkeit, auf eine Referenzseite zu verlinken, indem Sie ein Makro verwenden. Diese Makros sind auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um auf die Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um auf die Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir folgen ähnlichen Querverweisrichtlinien im [Siehe auch](#siehe_auch_abschnitt) Abschnitt am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf MDN Web Docs hinzuzufügen. Ihre Pull-Request zum Hinzufügen eines externen Links wird abgelehnt, wenn sie nicht den hier beschriebenen Richtlinien entspricht.

Im Allgemeinen, wenn Sie darüber nachdenken, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass minimales Risiko besteht für die folgenden Fälle:

- Gebrochene oder veraltete Links
- Anschein einer Unterstützung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, MDN Web Docs zur Verbreitung von Spam zu nutzen
- Kurzlinks, die das Ziel des Links verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, sollten Sie erwägen, Inhalte innerhalb von MDN Web Docs zu verknüpfen. Interne Links sind einfacher zu warten und machen MDN Web Docs insgesamt wertvoller für die Leser.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, dauerhaft und weit vertrauenswürdig sind. Sie sollten es bevorzugen, Links zu externen Inhalten hinzuzufügen, die:

  - Unverzichtbar sind (z.B. ein IETF RFC)
  - Erforderlich für Zitation, Zitat oder Anerkennung (z.B. als Teil einer Creative Commons Attribution)
  - Wahrscheinlicher für das Thema gepflegt werden als solch ein Inhalt in MDN Web Docs selbst aufzunehmen (z.B. die Release Notes eines Anbieters)
  - Offen und Community-getrieben sind, wie MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen an Relevanz, Wartbarkeit, Zugänglichkeit oder stellen anderweitig Barrieren für die Leser auf. Vermeiden Sie das Hinzufügen von Links zu externem Inhalt, der:

  - Generisch oder unspezifisch ist (z.B. die Homepage eines Anbieters, statt der zugehörigen Dokumentation)
  - Flüchtig oder nicht gewartet ist (z.B. eine einmalige Ankündigung)
  - Eigenwerbung oder Eigenus herausstellt (z.B. des Autors eigene Arbeit außerhalb von MDN Web Docs)
  - Bezahlschranke hat (z.B. ein teurer Kurs, der außerhalb der Reichweite von Hobbyisten, Studenten oder Lesern in Ländern mit niedrigerem Einkommen liegt)
  - Unzugänglich ist (z.B. ein Video ohne Untertitel)

- **Links, die Eigenwerbung oder Spam sind**: Obwohl ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository wertvoll sind, kann das Verlinken zu Ihren eigenen Ressourcen den Anschein eines Interessenkonflikts schaffen. Denken Sie zweimal nach, bevor Sie zu Ressourcen verlinken, mit denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrer Pull-Request offenlegen. Die Nichtoffenlegung könnte Ihre weitere Teilnahme an MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Wenn Sie zum Beispiel Redakteur einer Spezifikation sind und zum einem Thema, das mit dieser Spezifikation zusammenhängt, beitragen, wird dann das Verlinken zu dieser Spezifikation erwartet und akzeptabel. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Kurz-URLs (Kurzlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kurze, leichter zu merkende URLs (auch "Kurzlinks" genannt) umzuwandeln. Allerdings verschleiern sie auch das Ziel der URL. Außerdem kann bei bestimmten Kurz-URLs das Ziel nach ihrer Erstellung geändert werden, eine Funktion, die für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Nutzer generierten Drittanbieter-Kurz-URLs. Zum Beispiel, wenn `https://mein-kurze-link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `Example.com` URL.

Hingegen sind kurzengeschnittene Personal-Shorteners, die von den Organisationen gepflegt werden, die auch die Ziel-URLs pflegen, ermutigt. `https://bugzil.la` ist ein von Mozilla betriebenen URL-Shortener, der auf `https://bugzilla.mozilla.org/` weiterleitet, welche auch eine von Mozilla betriebene Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel benutzen Sie `https://bugzil.la/1682349` statt `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftsebenen

Wenn ein neuer Absatz einen neuen Abschnitt einleitet sollte, sollte eine Überschrift hinzugefügt werden.
Verwenden Sie diese Markdown-Überschriftsebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###` und dann `####`; diese übersetzen sich in die [HTML-Überschriftstags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>` und `<h4>`-Tags.

`##` ist die höchste zulässige Ebene, da `#` dem Seitentitel vorbehalten ist.
Wir empfehlen, nicht mehr als drei Überschriftsebenen zu verwenden. Wenn Sie das Bedürfnis haben, eine vierte Überschriftsebene hinzuzufügen, sollten Sie erwägen, den Artikel in mehrere kleinere Artikel mit einer Einstiegsseite aufzuteilen. Alternativ überlegen Sie, ob Sie die Informationen in Aufzählungspunkten darstellen können, um eine vierte Überschrift zu vermeiden.

Beachten Sie die folgenden Empfehlungen beim Erstellen von Überschriften für Unterabschnitte:

- **Erstellen Sie keine einzelnen Unterabschnitte**. Teilen Sie ein Thema nicht in ein einzelnes Unterthema auf.
  Es sind entweder zwei oder mehr Unterüberschriften oder gar keine.
- **Verwenden Sie keine Inline-Stile, Klassen oder Makros in Überschriften**. Allerdings können Sie Backticks verwenden, um Codebegriffe anzuzeigen (z.B. „Verwendung der `FooBar`-Schnittstelle“).
- **Erstellen Sie keine „Bumping-Häupter“**. Dies sind Überschriften, denen unmittelbar eine Unterüberschrift folgt, ohne dazwischenliegenden Inhaltstext.
  Dies sieht nicht gut aus und lässt Leser ohne erläuternden Text am Anfang des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, beachten Sie die folgenden Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz erlaubt, sie zu verwenden. Versuchen Sie, Medien zu verwenden, die eine sehr permissive Lizenz wie [CC0](https://creativecommons.org/public-domain/cc0/) haben oder mindestens eine, die mit unserer allgemeinen Inhaltslizenz – [Creative Commons Attribution-ShareAlike license](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) – kompatibel ist.
- Für Bilder komprimieren Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVGs` führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/), und stellen Sie sicher, dass die `SVG`-Datei eine Leerzeile am Ende der Datei hat.
- Jedes Bild muss [mit einem Beschreibenden `alt`-Text](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images) versehen werden.

### Listen

Listen sollten auf allen Seiten konsistent formatiert und strukturiert sein.
Jeder Listeneintrag sollte mit einer geeigneten Interpunktion geschrieben werden, unabhängig von der Listenformatierung.
Je nachdem, welche Art von Liste Sie erstellen, sollten Sie jedoch Ihr Schreiben wie in den folgenden Abschnitten beschrieben anpassen. In beiden Fällen fügen Sie einen Einleitenden Satz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungslisten**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke von kurzen Informationen zu gruppieren. Jeder Eintrag in der Liste sollte einer ähnlichen Satzstruktur folgen. Sätze und Phrasen (d.h. Satzfragmente ohne Verb oder Subjekt oder beides) in Aufzählungslisten sollten die Standardinterpunktion enthalten – Sätze enden mit Punkten, Phrasen nicht.

  Wenn sich in einem Listeneintrag mehrere Sätze befinden, muss am Ende jedes Satzes, einschließlich des letzten Satzes des Elements, ein Punkt erscheinen, wie es bei einem Absatz erwartet würde. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einfügen:
  >
  > - Eine Bedingung mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung mit einer kurzen Erklärung.
  > - Noch eine Bedingung mit einer weiteren Erklärung.

  Beachten Sie, wie sich dieselbe Satzstruktur von Aufzählungspunkt zu Aufzählungspunkt wiederholt. In diesem Beispiel nennt jeder Aufzählungspunkt eine Bedingung, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listeneinträge unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezüglichen Eigenschaften werden in diesem Szenario hilfreich sein:
  >
  > - propertyA: Setzt die Hintergrundfarbe
  > - propertyB: Fügt Textschatten hinzu

  Wenn ein oder mehrere Listeneinträge vollständige Sätze sind, verwenden Sie einen Punkt nach jedem Listeneintrag, auch wenn ein Listeneintrag drei oder weniger Wörter enthält. Versuchen Sie jedoch so weit wie möglich, für alle Einträge in einer Liste die gleiche Struktur zu befolgen; Stellen Sie sicher, dass alle Listeneinträge entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Aufgabenanweisung aufzuzählen. Da Anweisungen komplex sein können, hat die Klarheit Priorität, besonders wenn der Text in jedem Listeneintrag umfangreich ist. Wie bei Aufzählungslisten befolgen Sie die Standardinterpunktionsregeln. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anweisungen einzuleiten. Es ist wichtig, dem Benutzer vor dem Beginn der Anweisungen den Kontext zu bieten.
  > 2. Beginnen Sie mit dem Erstellen Ihrer Anweisungen und halten Sie jeden Schritt in einem eigenen nummerierten Element.
  >    Ihre Anweisungen können ausführlich sein, daher ist es wichtig, klar zu schreiben und die korrekte Interpunktion zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen die nummerierte Liste mit einer kurzen abschließenden Zusammenfassung oder Erläuterung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel für das Schreiben einer abschließenden Erklärung für die obige Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die anweisende Schritte bietet, um eine nummerierte Liste mit der korrekten Formatierung zu erzeugen.

  Beachten Sie, wie die Elemente in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen routinemäßig für Anweisungen oder zur Schritt-für-Schritt-Durchführung durch ein Verfahren verwendet werden, stellen Sie sicher, dass Sie jeden Schritt fokussiert halten: ein nummeriertes Element pro Schritt.

### Siehe auch Abschnitt

Die meisten der Leitfäden, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_ Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Querverweise](#querverweise_verlinkung) auf verwandte Themen innerhalb von MDN und manchmal Links zu verwandten externen Artikeln. Dies ist der [Siehe auch Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer`-Seite.

Präsentieren Sie im Allgemeinen die Links in einem Siehe auch Abschnitt in einem [Aufzählungsliste](#listen) Format, wobei jedes Element in der Liste eine Phrase ist. Im [Lehren der Webentwicklung](/de/docs/Learn)-Bereich auf MDN folgt der See also Abschnitt jedoch dem [Definitionsliste](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) Format.

Beachten Sie die folgenden Richtlinien beim Hinzufügen oder Aktualisieren eines Siehe auch Abschnitt:

#### Linktext

- Der Linktext sollte mit dem Titel der Seite oder des Abschnitts, zu dem verlinkt wird, übereinstimmen. Zum Beispiel wird der Linktext zur [ARIA](/de/docs/Web/Accessibility/ARIA/Attributes) Seite mit dem Seitentitel "ARIA states and properties" sein:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
- Verwenden Sie die Satzschreibung im Linktext, auch wenn sie sich vom verlinkten Seitentitel oder Abschnittstitel unterscheidet. Es könnte sein, dass die in der Seite oder Abschnitt verwendete Großschreibung falsch ist. Zum Beispiel wird der Linktext zur [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrekter Satzschreibung sein:
  - **Richtig**: [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Auch bei externen Links verwenden Sie die Satzschreibung, auch wenn die Großschreibung auf der Zielseite anders ist. Dies ist zur Sicherstellung der Konsistenz auf MDN Web Docs. Ausnahmen sind Buchtitel.
- Auf MDN können Sie optional ein Makro verwenden, um auf eine Seite zu verlinken, wie im [Verlinkung auf Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) Abschnitt auf der _Häufig verwendete Makros_ Seite erklärt wird. Die Verwendung eines Makros wird Formatierungs-Codes zum Schlüsselwort im Linktext hinzufügen, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("Ein", "Eine", "Der") wird am Anfang eines Listelements des Siehe auch Abschnitts benötigt. Keine Interpunktion ist am Ende des Listelements erforderlich, da es immer ein Begriff oder ein Ausdruck sein wird.
  - **Richtig**: [`revert-layer`](/de/docs/Web/CSS/revert-layer)
  - **Falsch**: Der [`revert-layer`](/de/docs/Web/CSS/revert-layer) Schlüsselwort.
  - **Richtig**: [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
  - **Falsch**: Die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- Wie in den obigen Beispielen gezeigt, fügen Sie Codes durch Backticks (\`) zu Schlüsselwörtern und Literalen im Linktext hinzu, obwohl die Formatierung nicht in Seitentiteln und Abschnittstiteln verwendet wird. Zum Beispiel wird beim Seitentitel "Array() constructor" der Linktext [`Array()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text, der den Link umgibt, minimal. Im Fall einer Beschreibung fügen Sie sie nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Interpunktion. Halten Sie den gesamten verknüpften Text am Anfang, um die Liste der Links leichter scannbar zu machen.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS Selektoren zur Stilisierung von Kontrollkästchen
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezügliche Eigenschaften
- Bei externen Links streben Sie an, nach Möglichkeit die Quellwebsite und das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) anzugeben. Diese Informationen abzurufen gibt Lesern eine klare Vorstellung vom Ziel, das sie erreichen werden, indem sie auf den Link klicken. Das Datum der Veröffentlichung oder der letzten Aktualisierung hilft Lesern dabei, die Relevanz des verlinkten Artikels zu beurteilen und hilft auch MDN-Pflegern, Links zu Artikeln zu überprüfen, die lange nicht aktualisiert wurden. Wenn Sie einen Link zu einem Artikel auf Wikipedia bereitstellen, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Das folgende Listelement beispielsweise zeigt, wie man einen Link zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch Abschnitt hinzufügt, zusammen mit der Quell- und Jahresinformationen:
  - **Richtig**: [Top-level Await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autornamen angeben. Einige Beispiele finden Sie im [Weiterlesen](#sprache_grammatik_und_rechtschreibung) Abschnitt unten. Verzichten Sie darauf, Autornamen für Blogposts oder GitHub-Repositories, auf die Sie verlinken, hinzuzufügen.

#### Reihenfolge der Links

- Führen Sie die Links zu MDN-Seiten in der Reihenfolge von Referenzseiten zuerst, gefolgt von Links zu den zugehörigen Leitfäden und Tutorials auf. Diese vorgeschlagene Reihenfolge soll hauptsächlich die Scanbarkeit der Elemente in der Liste erleichtern.
- Wenn die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links folgen Sie der alphabetischen oder einfache-zu-komplexe Reihenfolge, je nachdem, was für den Kontext mehr Sinn macht.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder einem Themenbereich hinzufügen müssen, werden Sie dies in der Regel tun, indem Sie eine Einstiegsseite erstellen und dann Unterseiten für jeden der individuellen Artikel hinzufügen.
Die Einstiegsseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, dann eine Liste der Unterseiten mit Beschreibungen jeder Seite bereitstellen.
Sie können das Hinzufügen von Seiten zur Liste mithilfe einiger von uns erstellter Makros automatisieren.

Betrachten Sie zum Beispiel das [JavaScript](/de/docs/Web/JavaScript)-Leitfaden, das strukturiert ist wie folgt:

- [JavaScript/Leitfaden](/de/docs/Web/JavaScript/Guide) – Haupt-Inhaltsverzeichnisseite
- [JavaScript/Leitfaden/JavaScript-Übersicht](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Leitfaden/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Leitfaden/Details des Objektsmodells](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel an der Spitze der Hierarchie zu platzieren, was die Seite verlangsamt und die Suche und Navigation auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom "Slug" der Seite unterscheiden, der Teil der URL der Seite nach `<locale>/docs/` ist. Beachten Sie bei der Definition eines Slugs die folgenden Richtlinien:

- Slugs sollten kurz gehalten werden. Wenn Sie eine neue Hierarchieebene erstellen, sollte die Komponente des neuen Levels im Slug nur ein oder zwei Wörter lang sein.
- Slugs sollten einen Unterstrich für eine mehrwortige Komponente verwenden, z.B. `Getting_started` in `/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started`.
- Verwenden Sie auch bei Slugs Satzschreibung für jede Komponente, wie z.B. `Getting_started` im vorherigen Beispiel.

### Titel

Seitentitel werden in Suchergebnissen verwendet und dienen auch dazu, die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite zu strukturieren. Ein Seitentitel kann sich vom "Slug" der Seite unterscheiden, wie im [Slug](#slugs) Abschnitt erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Großschreibstil**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften die Satzstil-Großschreibung verwenden (nur das erste Wort und Eigennamen kapitalisieren) anstatt den Überschriftenstil:

  - **Richtig**: „Eine neue Methode zur Erstellung von JavaScript-Rollovern“
  - **Falsch**: „Eine Neue Methode zur Erstellung von JavaScript-Rollovern“

  Wir haben viele ältere Seiten, die vor dieser Stilregel geschrieben wurden. Wenn Sie möchten, aktualisieren Sie diese gerne nach Bedarf. Wir widmen uns ihnen allmählich.

- **Allgemeine Richtlinien**: Zu entscheiden, was Sie dokumentieren möchten, und wie Sie diesen Inhalt strukturieren werden, ist einer der ersten Schritte beim Schreiben. Ein Inhaltsverzeichnis zu schreiben kann Ihnen helfen, zu entscheiden, wie Sie Informationen ordnen möchten. Decken Sie zuerst einfache Konzepte und dann weiter mit komplizierten und fortgeschrittenen Konzepten. Decken Sie zunächst konzeptionelle Informationen ab und gehen Sie dann auf aktionsorientierte Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitte oder Unterabschnitte:

  - **Geht von höher zu niedriger**: Wie im [Überschriftsebenen](#ueberschriftsebenen) Abschnitt angegeben, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Stufe Überschriften für breitere einleitende Titel, und verwenden Sie spezifischere Titel, während Sie zu niedrigeren Stufe-Überschriften fortschreiten.
  - **Gruppe logischerweise**: Stellen Sie sicher, dass alle verwandten Unterabschnitte inhaltlich unter einer höheren Stufe Überschrift zusammengefasst werden. Das Benennen von Titeln für verschiedene Abschnitte kann Ihnen bei dieser Aufgabe helfen.
  - **Halte Titel kurz**: Kürzere Titel sind einfacher im Text und im Inhaltsverzeichnis zu scannen.
  - **Halte Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen, die in dem Abschnitt behandelt werden, zu vermitteln. Zum Beispiel, für einen Abschnitt, der HTML-Elemente einführt, verwenden Sie den Titel „HTML-Elemente“ statt „Einführung“ oder „Übersicht“.
  - **Halte Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln - eine einzige Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Verwenden Sie daher so weit wie möglich nicht die Konjunktion „und“ in einem Titel.
  - **Verwenden Sie parallelle Bauweise**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftenebene. Wenn ein `###`-Ebene Titel Gerundien verwendet, also Wörter, die auf "-ing" enden, wie "Installieren", versuchen Sie, alle Titel auf derselben Überschriftenebene in Gerundien zu schreiben. Wenn ein Titel mit einem Imperativverb beginnt, wie „Verwenden“, „Konfigurieren“, dann schreiben Sie alle Titel auf derselben Ebene beginnend mit einem Imperativverb.
  - **Vermeiden Sie einen gemeinsamen Begriff in einer niedrigeren Stufe Überschrift**: Wiederholen Sie nicht den Text im Titel einer höheren Stufensüberschrift in niedrigeren Stufensüberschriften. Zum Beispiel, in einem Abschnitt mit dem Titel "Kommas" benennen Sie den Titel eines Unterabschnitts "Nach einleitenden Sätzen" statt "Komma nach einleitenden Sätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie, Titel mit Artikeln „ein“, „eine“ oder „der“ zu beginnen.
  - **Fügen Sie Einleitungstexte hinzu**: Nach einem Titel fügen Sie einige einführende Texte hinzu, die erklären, was in dem Abschnitt behandelt werden wird.

## Siehe auch

- [Richtlinien zum Schreiben von Code Beispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Code Beispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Code Beispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Code Beispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell Prompt Code Beispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weiterlesen

### Andere Stilrichtlinien

Wenn Sie Fragen zur Nutzung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir die [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/).

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, finden Sie möglicherweise die folgenden Ressourcen nützlich.

- [Häufige Fehler im Englischen](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [Englische Grammatik FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [Englische Sprache und Nutzung](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite zur Verwendung der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich aber benutzerfreundliche, evidenzbasierte Ratschläge; sehr gut für Nichtmuttersprachler, insbesondere für Präpositionsnutzung
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Stil: Lektionen für Klarheit und Anmut](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
