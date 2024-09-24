---
title: Schreibstil-Leitfaden
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{MDNSidebar}}

Dieser Schreibstil-Leitfaden beschreibt, wie Inhalte auf den MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert werden sollten.

Diese Richtlinien dienen dazu, die sprachliche und stilistische Konsistenz auf der gesamten Website zu gewährleisten. Dennoch legen wir mehr Wert auf den Inhalt als auf dessen Formatierung, fühlen Sie sich also nicht verpflichtet, den gesamten Schreibstil-Leitfaden zu erlernen, bevor Sie einen Beitrag leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um sie an diesen Leitfaden anzupassen. Die Prüfer könnten Sie auch auf diesen Stil-Leitfaden hinweisen, wenn Sie eine Inhalts-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten in erster Linie für englischsprachige Dokumentationen. Andere Sprachen können (und sind herzlich eingeladen, es zu tun) eigene Stil-Leitfäden erstellen. Diese sollten als Unterseiten der jeweiligen Lokalisierungsteamseiten veröffentlicht werden. Trotzdem sollte dieser Leitfaden weiterhin für die Formatierung und Organisation von Inhalten zu Rate gezogen werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für die MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite formatiert werden, wie z. B. Listen und Titel.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu schreiben, die alle Informationen enthalten, die Leser benötigen könnten, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte bieten die Empfehlungen, um dies zu erreichen:

- [Überlegen Sie, wer Ihre Zielgruppe ist](#überlegen_sie,_wer_ihre_zielgruppe_ist)
- [Beachten Sie die drei Ks des Schreibens](#beachten_sie_die_drei_ks_des_schreibens)
- [Relevante Beispiele einschließen](#relevante_beispiele_einschließen)
- [Eine beschreibende Einführung bieten](#eine_beschreibende_einführung_bieten)
- [Inklusive Sprache verwenden](#inklusive_sprache_verwenden)
- [Mit SEO im Hinterkopf schreiben](#mit_seo_im_hinterkopf_schreiben)

### Überlegen Sie, wer Ihre Zielgruppe ist

Behalten Sie die Zielgruppe im Hinterkopf, für die Sie den Inhalt schreiben. Zum Beispiel muss eine Seite über erweiterte Netzwerktechniken wahrscheinlich nicht so detailliert auf grundlegende Netzwerk-Konzepte eingehen wie eine typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps gelten möglicherweise nicht in jedem Fall.

### Beachten Sie die drei Ks des Schreibens

Die drei Ks des guten Schreibens sind: klar, konsistent und kurz.

- **Klar**: Stellen Sie sicher, dass Ihre Schreibweise klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze, die sich auf eine Idee pro Satz konzentrieren. Definieren Sie neue Begriffe für die Zielgruppe, bevor Sie sie verwenden.
- **Konsistent**: Verwenden Sie konsistent dieselbe Ausdrucksweise auf einer Seite und über mehrere Seiten hinweg.
- **Kurz**: Wenn Sie ein Dokument schreiben, ist es wichtig, zu wissen, wie viel Sie sagen sollen. Wenn Sie zu viele Details angeben, wird die Seite ermüdend zu lesen und selten genutzt.

### Relevante Beispiele einschließen

Im Allgemeinen sollten Sie Beispiele oder reale Szenarien hinzufügen, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft den Lesern, konzeptionelle und prozedurale Informationen auf greifbare und praktische Weise zu verstehen.

Sie sollten Beispiele verwenden, um zu verdeutlichen, wofür jeder Parameter verwendet wird und um eventuelle Sonderfälle zu klären, die existieren könnten. Sie können auch Beispiele verwenden, um Lösungen für häufige Aufgaben und Probleme zu demonstrieren, die auftreten können.

### Eine beschreibende Einführung bieten

Stellen Sie sicher, dass der einleitende Absatz vor der ersten Überschrift die Informationen, die die Seite behandelt, zusammenfasst und vielleicht, was Leser nach dem Durchgehen des Inhalts erreichen können. Auf diese Weise können Leser schnell feststellen, ob die Seite relevant für ihre Anliegen und gewünschten Lernergebnisse ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz den Leser informieren, welche Themen behandelt werden und welches Vorwissen der Leser möglicherweise benötigt. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den zugehörigen Informationen, und er sollte Hinweise zu Situationen bieten, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel einer Einführung ist viel zu kurz und lässt zu viele Informationen weg, z. B. was es genau bedeutet, Text zu "umranden", wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel für eine lange Einführung**: Dieses Beispiel hat eine aktualisierte Einführung, aber jetzt ist sie viel zu lang. Es sind zu viele Details enthalten, und der Text beschreibt zu ausführlich andere Methoden und Eigenschaften. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben werden.

  > Der Aufruf der Canvas 2D API-Methode **`CanvasRenderingContext2D.strokeText()`** umrandet die Zeichen der angegebenen Zeichenkette mit der derzeitigen Stiftfarbe ab den angegebenen Koordinaten.
  > In der Terminologie der Computergrafik bedeutet "Umranden" von Text, die Umrisse der Glyphen in der Zeichenkette zu zeichnen, ohne die Inhalte jedes Zeichens mit Farbe zu füllen.
  >
  > Der Text wird mit der aktuellen Schrift des Kontexts gezeichnet, die in der {{domxref("CanvasRenderingContext2D.font", "font")}}-Eigenschaft des Kontexts angegeben ist.
  >
  > Die Platzierung des Textes relativ zu den angegebenen Koordinaten wird durch die Eigenschaften `textAlign`, `textBaseline` und `direction` des Kontexts bestimmt. `textAlign` steuert die Platzierung der Zeichenkette relativ zur spezifizierten X-Koordinate; wenn der Wert `"center"` ist, wird die Zeichenkette beginnend bei `x - (stringWidth / 2)` gezeichnet, wodurch die angegebene X-Koordinate in der Mitte der Zeichenkette liegt. Wenn der Wert `"left"` ist, wird die Zeichenkette beginnend beim angegebenen Wert von `x` gezeichnet. Und wenn `textAlign` `"right"` ist, wird der Text so gezeichnet, dass er am angegebenen X-Koordinatenpunkt endet.
  >
  > (…)
  >
  > Sie können optional einen vierten Parameter angeben, der es Ihnen erlaubt, eine maximale Breite für die Zeichenkette in Pixel anzugeben. Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert oder skaliert (oder anderweitig angepasst), um in einen Raum dieser Breite zu passen, wenn er gezeichnet wird.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen einer Zeichenkette mit Farbe gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine passende Einführung**: Hier sehen wir eine viel bessere Übersicht der `strokeText()`-Methode.

  > Die {{domxref("CanvasRenderingContext2D")}}-Methode **`strokeText()`**, Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umrandet (zeichnet die Umrisse) die Zeichen einer angegebenen Zeichenkette, verankert an der Position, die durch die angegebenen X- und Y-Koordinaten angegeben ist. Der Text wird mit der aktuellen {{domxref("CanvasRenderingContext2D.font", "font")}} des Kontexts gezeichnet und gemäß den {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}} und {{domxref("CanvasRenderingContext2D.direction", "direction")}}-Eigenschaften gerechtfertigt und ausgerichtet.
  >
  > Weitere Details und Beispiele finden Sie im Abschnitt [Text](/de/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text) auf der Seite Zeichnen von Grafiken sowie in unserem Hauptartikel zum Thema, [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Inklusive Sprache verwenden

MDN hat ein weites und diverses Publikum.
Wir ermutigen nachdrücklich dazu, den Text so inklusive wie möglich zu halten.
Hier sind einige Alternativen zu gebräuchlichen Begriffen, die in der Dokumentation verwendet werden:

- Vermeiden Sie die Verwendung der Begriffe **Master** und **Slave** und verwenden Sie stattdessen **Main** und **Replica**.
- Ersetzen Sie **Whitelist** und **Blacklist** durch **Allowlist** und **Denylist**.
- **Sanity** sollte durch **Coherence** ersetzt werden.
- Anstelle von **Dummy** verwenden Sie **Platzhalter**.
- Sie sollten die Begriffe **Crazy** und **Insane** in der Dokumentation nicht verwenden; sollten solche Begriffe jedoch erforderlich sein, erwägen Sie stattdessen, **Fantastisch** zu verwenden.

Es ist am besten, geschlechtsneutrale Sprache in jedem Schreiben zu verwenden, in dem das Geschlecht für das Thema unerheblich ist.
Zum Beispiel, wenn Sie über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "er"/"sein" in Ordnung, aber wenn das Subjekt eine Person eines beliebigen Geschlechts ist, ist "er"/"sein" nicht angemessen.

Schauen wir uns die folgenden Beispiele an:

- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob er der Webseite erlauben möchte, seine Webcam zu verwenden."
- **Falsch**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchte, ihre Webcam zu verwenden."

Beide Versionen sind geschlechtsspezifisch. Um dies zu beheben, verwenden Sie geschlechtsneutrale Pronomen wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt den Benutzer, ob sie der Webseite erlauben möchten, ihre Webcam zu verwenden."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung der dritten Person Plural, allgemein bekannt als "[Singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Die geschlechtsneutralen Pronomen umfassen "they", "them", "their" und "theirs".

Eine andere Möglichkeit ist, die Benutzer in den Plural zu setzen, wie folgt:

- **Richtig**: "Ein Bestätigungsdialog fragt die Benutzer, ob sie der Webseite erlauben möchten, ihre Webcams zu verwenden."

Die beste Lösung ist natürlich, die Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "Ein Bestätigungsdialog, der die Erlaubnis des Benutzers für den Zugriff auf die Webcam anfordert, erscheint."
- **Richtig**: "Ein Bestätigungsdialogfeld, das den Benutzer um Erlaubnis bittet, die Webcam zu verwenden, erscheint."

Dieses letzte Beispiel, wie mit dem Problem umgegangen wird, ist wohl besser.
Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einige der Komplexitäten, die mit dem Umgang mit Geschlechtern in verschiedenen Sprachen verbunden sind, die möglicherweise sehr unterschiedliche Geschlechtsregelungen haben.
Diese Lösung kann die Übersetzung sowohl für Leser als auch für Übersetzer erleichtern.

### Mit SEO im Hinterkopf schreiben

Obwohl das Hauptziel jedes Schreibens auf den MDN Web Docs immer darin bestehen sollte, offene Webtechnologien zu erklären und zu informieren, damit Entwickler schnell lernen können, was sie wollen, oder um die kleinen Details herauszufinden, die sie wissen müssen, um ihren Code zu perfektionieren, ist es wichtig, dass sie das Material, das wir schreiben, _finden_ können. Dies können wir erreichen, indem wir beim Schreiben die Suchmaschinenoptimierung ({{Glossary("SEO")}}) im Hinterkopf behalten.

Dieser Abschnitt behandelt die Standardverfahren, Empfehlungen und Anforderungen für Inhalte, um sicherzustellen, dass Suchmaschinen unser Material leicht kategorisieren und indizieren können und dass die Leser leicht finden können, was sie benötigen. Die SEO-Richtlinien beinhalten, dass jede Seite, an der Autoren und Redakteure arbeiten, vernünftig gestaltet, geschrieben und ausgezeichnet wird, um Suchmaschinen den Kontext und die Hinweise zu geben, die sie benötigen, um die Artikel korrekt zu indizieren.

Die folgende Checkliste ist gut zu beachten, während Sie Inhalte schreiben und überprüfen, um sicherzustellen, dass die Seite und ihre Nachbarseiten ordnungsgemäß von Suchmaschinen indexiert werden:

- **Stellen Sie sicher, dass Seiten nicht zu ähnlich sind**: Wenn die Inhalte auf verschiedenen Seiten textlich ähnlich sind, werden Suchmaschinen davon ausgehen, dass die Seiten dasselbe Thema behandeln, auch wenn sie es nicht tun.
  Zum Beispiel, wenn eine Schnittstelle die Eigenschaften `width` und `height` hat, kann der Text auf den beiden Seiten, auf denen diese beiden Eigenschaften dokumentiert sind, unerwartet ähnlich sein, wobei nur wenige Wörter ausgetauscht und dasselbe Beispiel verwendet werden. Dies macht es Suchmaschinen schwer zu wissen, welche welche ist, und sie teilen sich das Page-Ranking, was dazu führt, dass beide schwerer zu finden sind, als sie sein sollten.

  Es ist daher wichtig sicherzustellen, dass jede Seite ihre eigenen Inhalte hat. Hier sind einige Vorschläge, um Ihnen dabei zu helfen, dies zu erreichen:

  - **Einzigartige Konzepte erklären**: Betrachten Sie Anwendungsfälle, in denen es möglicherweise mehr Unterschiede gibt, als man denken würde. Zum Beispiel, im Fall der Dokumentation der `width`- und `height`-Eigenschaften, könnten Sie über die unterschiedliche Verwendung von horizontalem und vertikalem Raum sprechen und über die entsprechenden Konzepte diskutieren. Vielleicht können Sie die Verwendung von `width` im Hinblick auf die Schaffung von Raum für eine Seitenleiste erwähnen, während `height` zur Handhabung des vertikalen Scrollens oder der Fußzeilen verwendet wird. Auch die Einbeziehung von Informationen über Barrierefreiheitsfragen ist eine nützliche und wichtige Idee.
  - **Unterschiedliche Beispiele verwenden**: Beispiele in diesen Situationen sind oft sogar noch ähnlicher als der Haupttext, da die Beispiele möglicherweise sowohl (oder alle) der ähnlichen Methoden oder Eigenschaften von Anfang an verwenden, wodurch keine wirklichen Änderungen beim erneuten Gebrauch erforderlich sind. Verwerfen Sie also das Beispiel und schreiben Sie ein neues, oder bieten Sie mindestens mehrere Beispiele an, von denen zumindest einige unterschiedlich sind.
  - **Beschreibungen für Beispiele hinzufügen**: Sowohl ein Überblick darüber, was das Beispiel tut, als auch eine Abdeckung, wie es funktioniert, sollten mit einem angemessenen Detailgrad, angesichts der Komplexität des Themas und der Zielgruppe, enthalten sein.

  Der einfachste Weg, zu vermeiden, dass man sich zu sehr ähnelt, ist natürlich, jeden Artikel von Grund auf neu zu schreiben, sofern dies die Zeit erlaubt.

- **Stellen Sie sicher, dass Seiten nicht zu kurz sind**: Wenn der Inhalt auf einer Seite zu wenig ist (sogenannte "dünne Seiten" im SEO-Jargon), werden Suchmaschinen solche Seiten nicht genau oder gar nicht katalogisieren. Seiten mit zu wenig Inhalt sind schwer zu finden. Als Leitprinzip stellen Sie sicher, dass Seiten auf den MDN Web Docs nicht kürzer als etwa 300 Wörter sind. Blähen Sie eine Seite nicht künstlich auf, aber betrachten Sie diese Richtlinie als Mindestzielänge, wenn möglich.

  Hier sind einige grundlegende Richtlinien, die Ihnen helfen, Seiten zu erstellen, die genügend Inhalt haben, um korrekt durchsucht werden zu können, ohne sie mit unnötigem Text zu überladen:

  - **Vermeiden Sie Stubs**: Offensichtlich, wenn der Artikel ein Stub ist oder Inhalte fehlen, fügen Sie diese hinzu. Wir versuchen, vollständige "Stub"-Seiten auf den MDN Web Docs zu vermeiden, obwohl es sie gibt, aber es gibt viele Seiten, denen große Teile ihres Inhalts fehlen.
  - **Seitenstruktur überprüfen**: Überprüfen Sie die Seite, um sicherzustellen, dass sie für den [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types), für den sie gedacht ist, richtig strukturiert ist. Stellen Sie sicher, dass alle Abschnitte vorhanden sind und angemessene Inhalte haben.
  - **Vollständigkeit sicherstellen**: Überprüfen Sie Abschnitte, um sicherzustellen, dass keine Informationen fehlen. Stellen Sie sicher, dass alle Parameter aufgelistet und erklärt sind. Stellen Sie sicher, dass alle Ausnahmen behandelt werden — dies ist ein besonders häufiger Ort, an dem Inhalte fehlen.
  - **Stellen Sie sicher, dass alle Konzepte vollständig ausgearbeitet sind**: Es ist einfach, schnell etwas zu erklären, aber stellen Sie sicher, dass alle Nuancen behandelt werden. Gibt es Sonderfälle? Gibt es bekannte Beschränkungen, die der Leser wissen muss?
  - **Beispiele hinzufügen**: Es sollten Beispiele vorhanden sein, die alle Parameter oder zumindest die Parameter (oder Eigenschaften oder Attribute) abdecken, die Benutzer vom Anfänger- bis zum mittleren Bereich verwenden werden, sowie alle fortgeschrittenen, die eine zusätzliche Erklärung erfordern. Jedes Beispiel sollte mit einem Überblick darüber, was das Beispiel tun wird, welches zusätzliche Wissen benötigt wird, beschlossen werden, um es zu verstehen, und so weiter. Nach dem Beispiel (oder eingestreut in die Teile des Beispiels) sollte Text stehen, der erklärt, wie der Code funktioniert. Gehen Sie nicht mit den Details oder der Behandlung von Fehlern in Beispielen sparsam um. Denken Sie daran, dass Benutzer _werden_ Ihr Beispiel kopieren und einfügen, um es in ihren eigenen Projekten zu verwenden, und Ihr Code _wird_ auf Produktionsseiten verwendet! Siehe unsere [Richtlinien für Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) für weitere nützliche Informationen.
  - **Anwendungsfälle erklären**: Wenn es besonders häufige Anwendungsfälle für das dokumentierte Feature gibt, sprechen Sie darüber! Anstatt davon auszugehen, dass ein Benutzer herausfinden wird, dass die dokumentierte Methode ein häufiges Entwicklungsproblem lösen kann, fügen Sie tatsächlich einen Abschnitt über diesen Anwendungsfall mit einem Beispiel und Text hinzu, der erklärt, wie das Beispiel funktioniert.
  - **Bildinformationen hinzufügen**: Fügen Sie auf allen Bildern und Diagrammen den richtigen [`alt`](/de/docs/Web/HTML/Element/img#alt) Text hinzu. Dieser Text sowie die Beschriftungen auf Tabellen und anderen Figuren zählen, weil Crawler keine Bilder durchsuchen können und `alt`-Texte den Suchmaschinen-Crawlern mitteilen, welchen Inhalt die eingebetteten Medien enthalten.
    > [!NOTE]
    > Es wird nicht empfohlen, zu viele Keywords oder Schlüsselwörter, die nicht mit dem Feature zusammenhängen, zu verwenden, um Suchmaschinenergebnisse zu manipulieren; dieses Verhalten ist leicht zu erkennen und wird in der Regel bestraft.
    > Ebenso **fügen Sie keine** wiederholenden, nicht hilfreichen Materialien oder Keyword-Blöcke innerhalb der tatsächlichen Seite hinzu, um die Größe der Seite und die Suchergebnisse zu verbessern. Dies schadet mehr, als es nützt, sowohl der Lesbarkeit der Inhalte als auch unseren Suchergebnissen.

- **Konzentrieren Sie sich auf den Inhalt des Themas**: Es ist viel besser, Inhalte um das Thema der Seite herum zu schreiben als um ein bestimmtes Keyword. Es ist sehr wahrscheinlich, dass es viele Schlüsselwörter gibt, die Sie für ein gegebenes Thema einbeziehen könnten; tatsächlich erstellen viele SEOs eine Liste von 5-100 verschiedenen Schlüsselwörtern (variierend zwischen kurzen, mittellangen und langen Schlüsselwörtern), die sie in ihren Artikel aufnehmen, abhängig von der Länge. Dies wird Ihre Wortwahl diversifizieren, was zu weniger Wiederholungen führt.

## Schreibstil

Abgesehen vom Schreiben grammatikalisch korrekter Sätze auf Englisch, empfehlen wir Ihnen, diese Richtlinien zu befolgen, um die Konsistenz der Inhalte auf den MDN Web Docs zu bewahren.

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

Eine Abkürzung ist eine verkürzte Version eines längeren Wortes, während ein Akronym ein neues Wort ist, das mit dem ersten Buchstaben jedes Wortes aus einem Ausdruck erstellt wurde. Dieser Abschnitt beschreibt Richtlinien für Abkürzungen und Akronyme.

- **Erweiterungen**: Beim ersten Erwähnen eines Begriffs auf einer Seite erweitern Sie Akronyme, die für Benutzer möglicherweise unbekannt sind. Im Zweifelsfall erweitern Sie den Begriff. Besser noch, verlinken Sie ihn mit dem Artikel oder [Glossar](/de/docs/Glossary)-Eintrag, der die Technologie beschreibt.

  - **Richtig**: "XUL (XML User Interface Language) ist Mozillas XML-basierte Sprache..."
  - **Falsch**: "XUL ist Mozillas XML-basierte Sprache..."

- **Großschreibung und Punkte**: Verwenden Sie Großbuchstaben und lassen Sie Punkte in allen Abkürzungen und Akronymen weg, einschließlich Organisationen wie "US" und "UN".

  - **Richtig**: XUL
  - **Falsch**: X.U.L.; Xul

- **Lateinische Abkürzungen**: Sie können gängige lateinische Abkürzungen (etc., i.e., e.g.) in Klammerausdrücken und Notizen verwenden. Verwenden Sie Punkte in diesen Abkürzungen, gefolgt von einem Komma oder einem anderen geeigneten Satzzeichen.

  - **Richtig**: Webbrowser (z. B. Firefox) können verwendet werden ...
  - **Falsch**: Webbrowser z.B. Firefox können verwendet werden ...
  - **Falsch**: Webbrowser, z.B. Firefox, können verwendet werden ...
  - **Falsch**: Webbrowser, (eg: Firefox) können verwendet werden ...

  Im regulären Text (d. h. außerhalb von Notizen oder Klammern) verwenden Sie das englische Äquivalent der Abkürzung.

  - **Richtig**: ... Webbrowser usw.
  - **Falsch**: ... Webbrowser, etc.

  - **Richtig**: Webbrowser wie Firefox können verwendet werden ...
  - **Falsch**: Webbrowser e.g. Firefox können verwendet werden ...

  Die folgende Tabelle fasst die Bedeutungen und die englischen Entsprechungen der lateinischen Abkürzungen zusammen:

  | Abk.   | Latein             | Englisch                  |
  | ------ | ------------------ | ------------------------- |
  | cf.    | _confer_           | vergleichen               |
  | e.g.   | _exempli gratia_   | zum Beispiel              |
  | et al. | _et alii_          | und andere                |
  | etc.   | _et cetera_        | und so fort, und so weiter|
  | i.e.   | _id est_           | das heißt, mit anderen Worten |
  | N.B.   | _nota bene_        | beachten                  |
  | P.S.   | _post scriptum_    | Nachsatz                  |

  > [!NOTE]
  > Überlegen Sie immer, ob es wirklich von Vorteil ist, eine lateinische Abkürzung zu verwenden. Einige davon werden so selten verwendet, dass viele Leser sie entweder verwirren oder ihre Bedeutungen nicht verstehen werden.
  >
  > Stellen Sie außerdem sicher, dass _Sie_ sie korrekt verwenden, wenn Sie sich dafür entscheiden. Zum Beispiel vermeiden Sie es, "e.g." mit "i.e." zu verwechseln, was ein häufiger Fehler ist.

- **Plural von Abkürzungen und Akronymen**: Für Plurale von Abkürzungen und Akronymen fügen Sie _s_ hinzu. Verwenden Sie niemals einen Apostroph. Bitte.

  - **Richtig**: CD-ROMs
  - **Falsch**: CD-ROM's

- **"Versus", "vs." und "v."**: Wenn Sie die Kurzform verwenden, wird "vs." gegenüber "v." bevorzugt und kann in Überschriften verwendet werden. Andernfalls verwenden Sie in Texten die ausgeschriebene Form "versus".

  - **Richtig**: dieses vs. jenes
  - **Falsch**: dieses v. jenes
  - **Richtig**: dieses versus jenes

### Großschreibung

Verwenden Sie in Fließtexten standardmäßige englische Großschreibungsregeln und schreiben Sie "World Wide Web" groß. Es ist akzeptabel, "web" (allein stehend oder als Modifikator) und "internet" klein zu schreiben.

> [!NOTE]
> Diese Richtlinie ist eine Änderung gegenüber einer früheren Version dieses Leitfadens, daher finden Sie möglicherweise viele Fälle von "Web" und "Internet" auf den MDN.
> Ändern Sie diese gerne, wenn Sie andere Änderungen vornehmen, aber es ist nicht notwendig, einen Artikel nur zur Änderung der Großschreibung zu bearbeiten.

Tastaturtasten sollten die Großschreibung im Satzstil verwenden, nicht Großschreibung für alle Buchstaben. Zum Beispiel "<kbd>Enter</kbd>" nicht "<kbd>ENTER</kbd>". Die einzige Ausnahme ist, dass Sie "<kbd>ESC</kbd>" verwenden können, um die "<kbd>Escape</kbd>"-Taste abzukürzen.

Bestimmte Wörter sollten immer großgeschrieben werden, wie z. B. Marken, die Großbuchstaben enthalten, oder Wörter, die vom Namen einer Person abgeleitet sind (es sei denn, das Wort wird im Code verwendet und die Code-Syntax erfordert Kleinschreibung). Einige Beispiele beinhalten:

- Boolean (benannt nach dem englischen Mathematiker und Logiker [George Boole](https://en.wikipedia.org/wiki/George_Boole))
- JavaScript (eine Marke der Oracle Corporation, sollte immer als Marke geschrieben werden)
- Python, TypeScript, Django und andere Programmiersprachen- und Framework-Namen

### Kontraktionen

Unser Schreibstil tendiert zu einem informellen Ton, daher sollten Sie sich frei fühlen, Kontraktionen zu verwenden (z. B. "don't", "can't", "shouldn't"), wenn Sie das bevorzugen.

### Zahlen und Ziffern

- **Kommas**: Verwenden Sie in laufendem Text nur Kommas bei Zahlen mit fünf und mehr Stellen.

  - **Richtig**: 4000; 54,000
  - **Falsch**: 4,000; 54000

- **Daten**: Für Daten (nicht einschließlich Daten in Codebeispielen) verwenden Sie das Format "January 1, 1900".

  - **Richtig**: February 24, 1906
  - **Falsch**: February 24th, 1906; 24 February, 1906; 24/02/1906

  Alternativ können Sie das Format YYYY/MM/DD verwenden.

  - **Richtig**: 1906/02/24
  - **Falsch**: 02/24/1906; 24/02/1906; 02/24/06

- **Jahrzehnte**: Verwenden Sie das Format "1990s". Verwenden Sie keinen Apostroph.

  - **Richtig**: 1920s
  - **Falsch**: 1920's

- **Plurale von Ziffern**: Fügen Sie "s" hinzu. Verwenden Sie keinen Apostroph.

  - **Richtig**: 486s
  - **Falsch**: 486's

### Pluralisierung

Verwenden Sie englische Pluralformen, nicht die von Latein oder Griechisch beeinflussten.

- **Richtig**: syllabuses, octopuses
- **Falsch**: syllabi, octopi

### Apostrophe und Anführungszeichen

Verwenden Sie keine "geschwungenen" Anführungszeichen und Zitate. Auf den MDN Web Docs verwenden wir nur gerade Anführungszeichen und Apostrophe. Dies liegt daran, dass wir uns aus Gründen der Konsistenz für eines von beiden entscheiden müssen. Wenn geschwungene Anführungszeichen oder Apostrophe in Code-Snippets, selbst in Inline-Snippets, eingefügt werden, könnten Leser sie kopieren und einfügen und erwarten, dass sie funktionieren (was sie nicht tun werden).

- **Richtig**: Bitte verwenden Sie keine "geschwungenen Anführungszeichen."
- **Falsch**: Bitte verwenden Sie keine „geschwungenen Anführungszeichen.“

### Kommas

Die folgende Liste beschreibt einige der häufigen Situationen, bei denen wir uns der Kommasetzungsregeln bewusst sein müssen:

- **Nach Einleitungssätzen**: Ein Einleitungssatz ist ein Nebensatz, der sich normalerweise am Anfang eines Satzes befindet. Verwenden Sie nach einem Einleitungssatz ein Komma, um ihn vom folgenden Hauptsatz zu trennen.

  - Beispiel 1:
    - **Richtig**: "In diesem Beispiel werden Sie sehen, wie man ein Komma verwendet."
    - **Falsch**: "In diesem Beispiel werden Sie sehen wie man ein Komma verwendet."
  - Beispiel 2:
    - **Richtig**: "Wenn Sie nach Richtlinien suchen, sind Sie hier richtig."
    - **Falsch**: "Wenn Sie nach Richtlinien suchen sind Sie hier richtig."
  - Beispiel 3:
    - **Richtig**: "Auf mobilen Plattformen erhalten Sie in der Regel ein numerisches Tastenfeld zur Eingabe von Daten."
    - **Falsch**: "Auf mobilen Plattformen erhalten Sie in der Regel ein numerisches Tastenfeld zur Eingabe von Daten."

- **Vor Konjunktionen**: Das Serienkomma (auch bekannt als "Oxford-Komma") ist das Komma, das vor der Konjunktion in einer Reihe von drei oder mehr Elementen erscheint. Auf den MDN Web Docs verwenden wir das Serienkomma. Kommas trennen auch jedes Element der Liste.

  - **Richtig**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."
  - **Falsch**: "Ich werde mit Zügen, Flugzeugen und Autos reisen."

  Verwenden Sie kein Komma vor "und" und "oder" in einer Liste mit zwei Elementen.

  - **Richtig**: "Mein Hund ist süß und schlau."
  - **Falsch**: "Mein Hund ist süß, und schlau."

  Verwenden Sie ein Komma vor den Konjunktionen "und", "aber" und "oder", wenn sie zwei Hauptsätze verbinden. Wenn der Satz jedoch zu lang oder komplex wird, wenn die Konjunktion enthalten ist, erwägen Sie, ihn in zwei Sätze umzuschreiben.

  - Beispiel 1:
    - **Richtig**: "Sie können diesen Schritt ausführen, aber Sie müssen auf die Dateieinstellung achten."
    - **Falsch**: "Sie können diesen Schritt ausführen aber Sie müssen auf die Dateieinstellung achten."
  - Beispiel 2:
    - **Richtig**: "Mein Vater ist streng, aber liebevoll."
    - **Falsch**: "Mein Vater ist streng aber liebevoll."

- **Vor "dass" und "welches"**: Ein restriktiver Nebensatz ist für die Bedeutung des Satzes unerlässlich und muss nicht mit Kommas vom restlichen Satz abgetrennt werden. Ein restriktiver Nebensatz wird normalerweise mit "dass" eingeführt und **sollte nicht** von einem Komma getrennt werden.

  - **Richtig**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."
  - **Falsch**: "Wir haben einen Kurs zusammengestellt, der alle wesentlichen Informationen enthält, die Sie benötigen, um Ihr Ziel zu erreichen."

  Ein nicht restriktiver Nebensatz liefert zusätzliche Informationen und ist nicht essenziell für die Bedeutung des Satzes. Ein nicht restriktiver Nebensatz wird normalerweise mit "das" eingeführt und sollte von einem Komma abgetrennt werden.

  - **Richtig**: "Sie schreiben eine Richtlinie, die eine erlaubte Liste von Quellen für jede Funktion enthält."
  - **Falsch**: "Sie schreiben eine Richtlinie die eine erlaubte Liste von Quellen für jede Funktion enthält."

- **Vor "wie"**: Wenn "wie" Teil eines nicht restriktiven Nebensatzes ist und der restliche Satz ein Hauptsatz ist, verwenden Sie ein Komma vor "wie".

  - **Richtig**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise, wie das Zusammenfügen, Umkehren und Sortieren."
  - **Falsch**: "Das Array-Objekt hat Methoden zum Manipulieren von Arrays auf verschiedene Weise wie das Zusammenfügen, Umkehren und Sortieren."

  Das folgende Beispiel zeigt, wann kein Komma mit "wie" verwendet werden soll. Hier ist der Nebensatz mit "wie" essenziell für die Bedeutung des Satzes.

  - **Richtig**: "Webanwendungen werden mächtiger, indem sie Funktionen wie die Manipulation von Audio und Video hinzufügen und den Zugriff auf Rohdaten über WebSockets ermöglichen."
  - **Falsch**: "Webanwendungen werden mächtiger, indem sie Funktionen hinzufügen, wie die Manipulation von Audio und Video, und den Zugriff auf Rohdaten über WebSockets ermöglichen."

### Bindestriche

Zusammengesetzte Wörter sollten nur dann durch einen Bindestrich getrennt werden, wenn der letzte Buchstabe des Präfixes ein Vokal ist und derselbe wie der erste Buchstabe der Wurzel ist.

- **Richtig**: re-elect, co-op, email
- **Falsch**: reelect, coop, e&#45;mail

### Rechtschreibung

Verwenden Sie die amerikanische Rechtschreibung.

Im Allgemeinen verwenden Sie den ersten Eintrag auf [Dictionary.com](https://www.dictionary.com/), es sei denn, dieser Eintrag ist als abweichende Schreibweise oder als hauptsächlich in einer nicht amerikanischen Form des Englischen verwendete Schreibweise aufgeführt.
Wenn Sie zum Beispiel ["behaviour"](https://www.dictionary.com/browse/behaviour) (mit einem zusätzlichen _u_ zur amerikanischen Standardform hinzugefügt) nachschlagen, finden Sie den Hinweis "Hauptsächlich britisch", gefolgt von einem Link zur amerikanischen Standardform ["behavior"](https://www.dictionary.com/browse/behavior).
Verwenden Sie keine abweichenden Schreibweisen.

- **Richtig**: lokalize, behavior, color
- **Falsch**: localise, behaviour, colour

### Terminologie

Dies sind unsere Empfehlungen für die Verwendung bestimmter technischer Begriffe:

- **HTML-Elemente**: Verwenden Sie den Begriff "Element", wenn Sie sich auf HTML- und XML-Elemente beziehen, anstatt "Tag". Außerdem sollte das Element in spitzen Klammern "<>" eingeschlossen und mit Backticks (`) formatiert werden. Zum Beispiel wird `<input>` in Backticks so `<input>` formatiert, wie es erwartet wird.

  - **Richtig**: das `<span>`-Element
  - **Falsch**: das span-Tag

  Auf MDN können Sie das HTML-Element im [`HTMLElement`-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) optional spezifizieren, das das Element formatiert, der Winkelklammern "hinzufügt", sowie auf seine Referenzseite verlinkt.

  - **Verwendung von Backticks**: `<span>`
  - **Verwendung des Makros**: {{HTMLElement("span")}} (Quelle im Markdown: \\{{HTMLElement("span")\}})

- **Parameter vs. Argumente**: Der bevorzugte Begriff auf den MDN Web Docs ist **Parameter**. Bitte vermeiden Sie den Begriff "Argumente", wann immer möglich, um Konsistenz zu gewährleisten.

- **Benutzeroberflächenaktionen**: Beschreiben Sie in Aufgabenreihenfolgen Benutzeroberflächenaktionen im Imperativmodus. Identifizieren Sie das Benutzeroberflächenelement anhand seines Labels und Typs.

  - **Richtig**: "Klicken Sie auf die Schaltfläche Bearbeiten."
  - **Falsch**: "Klicken Sie auf Bearbeiten."

### Stimme

Während die aktive Stimme bevorzugt wird, ist die passive Stimme auch akzeptabel, angesichts des informellen Tons unserer Inhalte.
Versuchen Sie jedoch, konsistent zu bleiben.

## Seitenkomponenten

Dieser Abschnitt listet die Richtlinien auf, die für verschiedene Teile jeder Seite befolgt werden sollten, wie Überschriften, Hinweise, Links und Beispiele.

- [Codebeispiele](#codebeispiele)
- [Cross-Referenzen (Verlinken)](#cross-references_linking)
- [Externe Links](#externe_links)
- [Verkürzte URLs (Shortlinks)](#shortened_urls_shortlinks)
- [Überschriftenebenen](#überschriftenebenen)
- [Bilder und andere Medien](#bilder_und_andere_medien)
- [Listen](#listen)
- [Abschnitt "Siehe auch"](#abschnitt_"siehe_auch")
- [Unterseiten](#unterseiten)
- [Slugs](#slugs)
- [Titel](#titel)

### Codebeispiele

Eine Seite auf den MDN Web Docs kann mehr als ein Codebeispiel enthalten. Die folgende Liste präsentiert einige empfohlene Praktiken beim Schreiben eines Codebeispiels für die MDN Web Docs:

- Jedes Beispielstück sollte enthalten:
  - **Überschrift**: Eine kurze `###` (`<h3>`) Überschrift, um das durch das Codebeispiel demonstrierte Szenario zu beschreiben. Zum Beispiel "Verwendung des Offset-Drucks" und "Rückkehr zu Stil im vorherigen Layer".
  - **Beschreibung**: Eine kurze Beschreibung vor dem Codebeispiel, die die Details des Beispiels angibt, auf die Sie die Aufmerksamkeit des Lesers lenken möchten. Zum Beispiel "Im untenstehenden Beispiel werden zwei Kaskadenschichten im CSS definiert, `base` und `special`."
  - **Erklärung des Ergebnisses**: Eine Erklärung nach dem Beispielcode, die das Ergebnis beschreibt und erklärt, wie der Code funktioniert.
- Im Allgemeinen sollte das Codebeispiel nicht nur die Syntax des Features und dessen Verwendung demonstrieren, sondern auch den Zweck und die Situationen hervorheben, in denen ein Webentwickler das Feature nutzen möchte oder benötigt.
- Wenn Sie mit einem großen Codebeispiel arbeiten, kann es sinnvoll sein, es in kleinere logische Teile zu zerlegen, damit sie einzeln beschrieben werden können.
- Beim Hinzufügen von [Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) ist es hilfreich zu wissen, dass alle Codeblöcke desselben Typs (HTML, CSS und JavaScript) zusammengeführt werden, bevor das Beispiel ausgeführt wird. Dies ermöglicht es Ihnen, den Code in mehrere Segmente zu unterteilen, jeweils optional mit eigenen Beschreibungen, Überschriften usw. Dies macht die Dokumentation von Code unglaublich leistungsstark und flexibel.

Um zu erfahren, wie Sie Codebeispiele für die MDN Web Docs formatieren oder stylen können, siehe [Richtlinien zum Stylen von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

### Cross-Referenzen (Verlinken)

Beim Verweisen auf eine andere Seite oder einen Abschnitt einer Seite auf den MDN durch ihren Titel folgen Sie der Satzschreibung im Linktext (entspricht dem Titel der Seite oder des Abschnitts). Verwenden Sie Satzschreibung im Linktext, auch wenn sie vom Titel der verlinkten Seite oder Abschnitt abweicht (es könnte sein, dass die im Seitentitel oder Abschnitt verwendete Schreibung nicht korrekt ist). Verwenden Sie keine Anführungszeichen um den Linktext. Um auf eine Seite auf den MDN durch ihren Titel zu verweisen, verwenden Sie den folgenden Stil:

- **Richtig**: "Siehe den Leitfaden [Anordnung von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Siehe den „[Anordnung von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)“ Leitfaden."

Befolgen Sie einen ähnlichen Stil beim Verlinken zu einem Abschnitt auf einer Seite, wie unten dargestellt:

- **Richtig**: "Weitere Informationen finden Sie im Abschnitt [Speicherzuweisung in JavaScript](/de/docs/Web/JavaScript/Memory_management#allocation_in_javascript) auf der Seite _Speicherverwaltung_."

Wenn sich der Abschnitt, auf den Sie verlinken, auf derselben Seite befindet, können Sie mit den Worten "oben" oder "unten" auf die Position des Abschnitts hinweisen.

- **Richtig**: "Dieses Konzept wird im Abschnitt [Barrierefreiheit](/de/docs/Web/CSS/gradient/repeating-conic-gradient#accessibility) unten näher beschrieben."

Sie können einen Teil eines Satzes zu einem Artikel oder Abschnitt eines Artikels verlinken. Achten Sie darauf, beschreibende Phrasen als Linktexte zu verwenden, um genügend Kontext für die verlinkte Seite bereitzustellen.

- **Richtig**: "Erfahren Sie mehr über [wie man Flex-Items anordnet](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)."
- **Falsch**: "Klicken Sie [hier](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."
- **Falsch**: "Lesen Sie [diesen Artikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items), um mehr zu erfahren."

Auf MDN gibt es eine andere Möglichkeit, auf eine Referenzseite zu verlinken, nämlich durch die Verwendung eines Makros. Diese Makros werden auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) beschrieben. Zum Beispiel, um zu einer Referenzseite eines HTML-Elements zu verlinken, verwenden Sie das `HTMLElement`-Makro, und um zu einer Referenzseite einer CSS-Eigenschaft zu verlinken, verwenden Sie das `CSSxRef`-Makro.

Wir befolgen ähnliche Cross-Referenzierungsrichtlinien in den [Siehe auch](#siehe_auch) Abschnitten am Ende von Referenzseiten, Glossarseiten und Leitfäden.

### Externe Links

Externe Links sind auf den MDN Web Docs in bestimmten Situationen erlaubt. Verwenden Sie die in diesem Abschnitt beschriebenen Richtlinien, um zu entscheiden, ob es in Ordnung ist, einen externen Link auf den MDN Web Docs hinzuzufügen. Ihr Pull-Request zum Hinzufügen eines externen Links wird abgelehnt, wenn er die hier beschriebenen Richtlinien nicht erfüllt.

Im Allgemeinen, wenn Sie in Erwägung ziehen, einen externen Link hinzuzufügen, müssen Sie sicherstellen, dass ein minimales Risiko für Folgendes besteht:

- Gebrochene oder veraltete Links
- Erscheinung einer Befürwortung, insbesondere für kommerzielle Produkte oder Dienstleistungen
- Versuch, die MDN Web Docs zur Verbreitung von Spam zu verwenden
- Shortlinks, die das Linkziel verschleiern

> [!NOTE]
> Bevor Sie einen externen Link hinzufügen, überlegen Sie, ob Sie Inhalte innerhalb der MDN Web Docs querverweisen. Interne Links sind leichter zu warten und machen die Gesamtheit der MDN Web Docs für die Leser wertvoller.

- **Gute externe Links**: Gute externe Links führen die Leser zu Ressourcen, die relevant, langlebig und allgemein vertrauenswürdig sind. Sie sollten vorzugsweise Links zu externen Inhalten hinzufügen, die:

  - Einzigartig oder unverzichtbar sind (z. B. ein IETF RFC)
  - Für die Namensnennung, Zitierung oder Anerkennung erforderlich sind (z. B. im Rahmen einer Namensnennung unter Creative Commons)
  - Wahrscheinlicher als für das Thema gepflegt werden als durch das Einfügen solcher Inhalte auf den MDN Web Docs selbst (z. B. die Versionshinweise eines Anbieters)
  - Open-Source oder Community-geleitet sind, ähnlich wie die MDN Web Docs selbst

- **Schlechte externe Links**: Schlechte externe Links fehlen Relevanz, Wartbarkeit, Zugänglichkeit oder stellen anderweitig Hindernisse für die Leser dar. Vermeiden Sie es, Links zu externen Inhalten hinzuzufügen, die:

  - Generisch oder unspezifisch sind (z. B. die Startseite eines Anbieters anstelle der zugehörigen Dokumentation)
  - Flüchtig oder ungepflegt sind (z. B. eine einmalige Ankündigung)
  - Selbstverlinkend oder selbstfördernd sind (z. B. die eigene Arbeit des Autors außerhalb der MDN Web Docs)
  - Bezahlschranken haben (z. B. ein teurer Kurs, der für Hobbyisten, Studenten oder Leser in einkommensschwachen Ländern unzugänglich ist)
  - Unzugänglich sind (z. B. ein Video ohne Untertitel)

- **Links, die selbstfördernd oder Spam sind**: Während ein persönlicher Blogbeitrag, ein Konferenzvortrag oder ein GitHub-Repository einen Wert hat, kann das Verlinken auf eigene Ressourcen den Eindruck eines Interessenkonflikts erwecken. Denken Sie zweimal nach, bevor Sie auf Ressourcen verlinken, zu denen Sie eine geschäftliche oder persönliche Verbindung haben.

  > [!NOTE]
  > Wenn Sie eine geschäftliche oder persönliche Beziehung zum Ziel eines Links haben, müssen Sie diese Beziehung in Ihrem Pull-Request offenlegen. Das Versäumnis, dies zu tun, kann Ihre fortgesetzte Teilnahme an den MDN Web Docs gefährden.

  Manchmal sind solche Links relevant und angemessen. Zum Beispiel, wenn Sie Redakteur einer Spezifikation sind und zur Dokumentation in Bezug auf diese Spezifikation beitragen, dann wird erwartet und akzeptiert, dass auf diese Spezifikation verlinkt wird. Aber Sie müssen die Beziehung zwischen Ihnen und dem Link offenlegen.

### Verkürzte URLs (Shortlinks)

Ein URL-Shortener (wie TinyURL oder Bitly) kann großartig sein, um lange Links in kleine, leichter zu merkende URLs (auch bekannt als "Shortlinks") zu verkürzen. Sie verschleiern jedoch auch das Ziel der URL. Darüber hinaus kann bei bestimmten Kürzern das Ziel nach ihrer Erstellung geändert werden, was potenziell für böswillige Zwecke genutzt werden könnte.

Verwenden Sie keine Links, die über Drittanbieter (benutzergenerierbare) URL-Shortener erstellt wurden. Wenn zum Beispiel `https://myshort.link/foobar` eine kurze URL ist, die von einem zufälligen Benutzer generiert wurde und auf `https://example.com/somelongURL/details/show?page_id=foobar` weiterleitet, verwenden Sie die längere `example.com`-URL.

Auf der anderen Seite werden Shortlinks, die von den Organisationen gepflegt werden, die auch die Ziel-URLs pflegen, ermutigt. `https://bugzil.la` wird von Mozilla betrieben und ist ein URL-Shortener, der auf `https://bugzilla.mozilla.org/` weiterleitet, was ebenfalls eine Mozilla-Domain ist. In diesem Fall verwenden Sie die kürzere URL. Zum Beispiel verwenden Sie `https://bugzil.la/1682349` anstelle von `https://bugzilla.mozilla.org/show_bug.cgi?id=1682349`.

### Überschriftenebenen

Wann immer ein neuer Abschnitt beginnt, sollte eine Überschrift hinzugefügt werden. Verwenden Sie beim Erstellen der Überschriften diese Markdown-Überschriftenebenen in absteigender Reihenfolge, ohne Ebenen zu überspringen: `##`, dann `###` und dann `####`; dies entspricht den [HTML-Überschriftstags](/de/docs/Web/HTML/Element/Heading_Elements) `<h2>`, `<h3>`, und `<h4>` Tags.

`##` ist die höchste zulässige Ebene, da `#` für den Seitentitel reserviert ist. Wir empfehlen nicht mehr als drei Ebenen von Überschriften. Wenn Sie das Bedürfnis verspüren, eine vierte Ebene hinzuzufügen, erwägen Sie, den Artikel in mehrere kleinere Artikel mit einer Hauptseite zu unterteilen. Alternativ überprüfen Sie, ob Sie die Informationen in Aufzählungspunkten präsentieren können, um das Hinzufügen einer vierten Überschriftsebene zu vermeiden.

Halten Sie beim Erstellen von Überschriften für Unterabschnitte folgende Tipps im Blick:

- **Erstellen Sie keine einzelnen Unterabschnitte.** Unterteilen Sie ein Thema nicht in ein einziges Unterthema. Es sollten zwei oder mehr Unterüberschriften oder gar keine sein.
- **Verwenden Sie in Überschriften keine Inline-Stile, Klassen oder Makros.** Sie können jedoch Backticks verwenden, um Codebegriffe anzuzeigen (z. B. "Verwenden des `FooBar`-Interfaces").
- **Erstellen Sie keine "springenden Überschriften".** Diese sind Überschriften, gefolgt von einer Unterüberschrift, ohne dazwischen liegenden Text. Dies sieht nicht gut aus und lässt Leser ohne erläuternden Text am Anfang des äußeren Abschnitts zurück.

### Bilder und andere Medien

Wenn Sie Bilder oder andere Medien auf einer Seite einfügen, befolgen Sie diese Richtlinien:

- Stellen Sie sicher, dass die Medienlizenz ihre Verwendung erlaubt. Versuchen Sie, Medien zu verwenden, die eine sehr permessive Lizenz haben, wie [CC0](https://creativecommons.org/public-domain/cc0/) oder zumindest eine, die mit unserer allgemeinen Inhaltslizenz — [Creative Commons Namensnennung-Weitergabe unter gleichen Bedingungen Lizenz](https://creativecommons.org/licenses/by-sa/2.5/) (CC-BY-SA) — kompatibel ist.
- Für Bilder führen Sie sie durch <https://tinypng.com> oder <https://imageoptim.com>, um das Seitengewicht zu reduzieren.
- Für `SVG`, führen Sie den Code durch [SVGOMG](https://jakearchibald.github.io/svgomg/) und stellen Sie sicher, dass die `SVG`-Datei eine Leerzeile am Ende der Datei hat.
- Jedes Bild muss [eine beschreibende `alt`-Text enthalten](/de/docs/MDN/Writing_guidelines/Howto/Images_media#adding_alternative_text_to_images).

### Listen

Listen sollten überall konsistent formatiert und strukturiert werden. Einzelne Listeneinträge sollten unabhängig vom Listenformat mit angemessener Zeichensetzung geschrieben werden. Je nach Art der Liste, die Sie erstellen, möchten Sie jedoch Ihren Schreibstil anpassen, wie in den untenstehenden Abschnitten beschrieben. In beiden Fällen fügen Sie mindestens einen Einleitungssatz hinzu, der die Informationen in der Liste beschreibt.

- **Aufzählungsliste**: Aufzählungslisten sollten verwendet werden, um verwandte Stücke von prägnanten Informationen zu gruppieren. Jeder Eintrag in der Liste sollte eine ähnliche Satzstruktur beibehalten. Sätze und Phrasen (d. h. Satzfragmente, denen ein Verb oder ein Subjekt oder beides fehlt) in Aufzählungslisten sollten mit standardmäßiger Zeichensetzung geschrieben werden — Sätze enden mit einem Punkt, Phrasen nicht.

  Enthält ein Listeneintrag mehrere Sätze, muss am Ende jedes Satzes, einschließlich des letzten Satzes des Eintrags, ein Punkt gesetzt werden, genau wie in einem Absatz erwartet wird. Dies ist ein Beispiel für eine korrekt strukturierte Aufzählungsliste:

  > In diesem Beispiel sollten wir Folgendes einschließen:
  >
  > - Eine Bedingung, mit einer kurzen Erklärung.
  > - Eine ähnliche Bedingung, mit einer kurzen Erklärung.
  > - Noch eine weitere Bedingung, mit einer weiteren Erklärung.

  Beachten Sie, wie dieselbe Satzstruktur von Aufzählung zu Aufzählung wiederholt wird. In diesem Beispiel gibt jeder Punkt eine Bedingung an, gefolgt von einem Komma und einer kurzen Erklärung, und jedes Element in der Liste endet mit einem Punkt.

  Wenn die Listeneinträge unvollständige Sätze enthalten, ist am Ende kein Punkt erforderlich. Zum Beispiel:

  > Die folgenden farbbezogenen Eigenschaften sind in diesem Szenario hilfreich:
  >
  > - EigenschaftA: Setzt die Hintergrundfarbe
  > - EigenschaftB: Fügt dem Text einen Schatten hinzu

  Wenn ein oder mehrere Listeneinträge vollständige Sätze sind, verwenden Sie nach jedem Listeneintrag einen Punkt, auch wenn ein Listeneintrag drei oder weniger Wörter enthält. Verfolgen Sie jedoch, soweit möglich, dieselbe Struktur für alle Einträge in einer Liste; stellen Sie sicher, dass alle Listeneinträge entweder vollständige Sätze oder Phrasen sind.

- **Nummerierte Listen**: Nummerierte Listen werden hauptsächlich verwendet, um Schritte in einer Reihe von Anweisungen aufzuzählen. Da Anweisungen komplex sein können, hat Klarheit Priorität, insbesondere wenn der Text in jedem Listeneintrag umfangreich ist. Wie bei Aufzählungslisten sollten Sie die standardmäßige Zeichensetzung beachten. Dies ist ein Beispiel für eine korrekt strukturierte nummerierte Liste:

  > Um eine nummerierte Liste korrekt zu strukturieren, sollten Sie:
  >
  > 1. Mit einer Überschrift oder einem kurzen Absatz beginnen, um die Anleitung einzuführen. Es ist wichtig, dem Benutzer Kontext zu geben, bevor die Anweisungen beginnen.
  > 2. Beginnen Sie mit der Erstellung Ihrer Anweisungen und halten Sie jeden Schritt in seinem eigenen nummerierten Eintrag. Ihre Anweisungen können ziemlich umfangreich sein, daher ist es wichtig, klar zu schreiben und die richtige Zeichensetzung zu verwenden.
  > 3. Nachdem Sie Ihre Anweisungen abgeschlossen haben, folgen Sie der nummerierten Liste mit einer kurzen abschließenden Zusammenfassung oder Erklärung über das erwartete Ergebnis nach Abschluss.

  Das folgende ist ein Beispiel für das Verfassen einer abschließenden Erklärung zur obigen Liste:

  > Wir haben eine kurze nummerierte Liste erstellt, die Anweisungen zur Erstellung einer nummerierten Liste mit der richtigen Formatierung bietet.

  Beachten Sie, wie die Einträge in nummerierten Listen wie kurze Absätze lesen. Da nummerierte Listen regelmäßig für Anweisungszwecke oder zum Durchgehen eines geordneten Verfahrens verwendet werden, achten Sie darauf, jeden Eintrag fokussiert zu halten: nur ein nummerierter Eintrag pro Schritt.

### Abschnitt "Siehe auch"

Die meisten Leitfäden, Referenzseiten und sogar Glossarseiten auf den MDN Web Docs enthalten einen _Siehe auch_-Abschnitt am Ende des Artikels. Dieser Abschnitt enthält [Cross-Referenzen](#cross-references_linking) zu verwandten Themen innerhalb der MDN und manchmal Links zu verwandten externen Artikeln. Zum Beispiel ist dies der [Siehe auch-Abschnitt](/de/docs/Web/CSS/@layer#see_also) für die `@layer`-Seite.

Im Allgemeinen stellen Sie die Links in einem Siehe auch-Abschnitt im [Aufzählungsliste](#listen)-Format dar, wobei jeder Eintrag in der Liste eine Phrase ist. Im Bereich [Entwickel Sie webentwicklung](/de/docs/Learn) auf MDN folgt der Siehe auch-Abschnitt jedoch das [Definitionsliste](#/markdown#definition_lists)-Format.

Um Konsistenz über die MDN Web Docs hinweg zu bewahren, behalten Sie beim Hinzufügen oder Aktualisieren eines Siehe auch-Abschnitts die folgenden Richtlinien im Auge.

#### Linktext

- Der Linktext sollte derselbe sein wie der Titel der Seite oder des Abschnitts, auf den verlinkt wird. Zum Beispiel, der Linktext zu dieser ARIA-Seite mit dem Seitentitel "ARIA-Zustände und -Eigenschaften" wird sein:
  - **Richtig**: [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes)
- Verwenden Sie die Satzschreibung im Linktext, auch wenn sie vom Titel der verlinkten Seite oder Abschnitt abweicht. Es könnte sein, dass die im Seitentitel oder Abschnitt verwendete Schreibung nicht korrekt ist. Zum Beispiel, der Linktext zur [Quirks Mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) Seite in korrekter Satzschrift wird sein:
  - **Richtig**: [Quirks mode](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- Auch für externe Links verwenden Sie die Satzschreibung, selbst wenn die Schreibung auf der Zielartikel-Seite anders ist. Dies dient der Konsistenz über die MDN Web Docs hinweg. Ausnahmen sind Namen von Büchern.
- Auf MDN können Sie auch optional ein Makro verwenden, um zu einer Seite zu verlinken, wie auf der Seite [Verlinkung zu Seiten in Referenzen](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_pages_in_references) auf der _Häufig verwendete Makros_-Seite erklärt wird. Die Verwendung des Makros fügt dem Schlüsselwort im Linktext eine Codeformatierung hinzu, wie im nächsten Beispiel gezeigt.
- Kein Artikel ("Ein", "Eine", "Der") wird zu Beginn des Listeintrags benötigt. Am Ende des Eintrags ist kein Satzzeichen erforderlich, da es sich ausnahmslos um einen Begriff oder eine Phrase handeln wird,wie in den oben stehenden Beispielen gezeigt, ist es nötig, eine Codeformatierung mit Backticks (`) zu Schlüsselwörtern und Literalen im Linktext hinzuzufügen, auch wenn die Formatierung nicht in Seitentiteln und Abschnittstiteln verwendet wird. Für den Seitentitel "Array() Konstruktor" wird der Linktext [`Array()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) sein.

#### Beschreibender Text

- Halten Sie den beschreibenden Text um den Link herum minimal. Im Falle einer Beschreibung fügen Sie ihn nach dem Linktext und einem Doppelpunkt hinzu. Formulieren Sie die Beschreibung als Phrase ohne abschließende Zeichensetzung. Halten Sie verknüpften Text am Anfang, um das Scannen der Liste von Links zu erleichtern.
  - **Richtig**: {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}: CSS-Selektoren zum Styling von Kontrollkästchen
- Verwenden Sie nicht die Konjunktion "und" vor dem letzten Element in der Serie.
  - **Richtig**: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("color")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: Andere farbbezogene Eigenschaften
- Für externe Links versuchen Sie, die Quellwebsite sowie das Jahr der Veröffentlichung oder der letzten Aktualisierung (in Klammern) wann immer möglich und angemessen anzugeben. Die Bereitstellung dieser Informationen gibt den Lesern eine klare Vorstellung vom Ziel, das sie durch Klicken auf den Link erreichen. Das Datum der Veröffentlichung oder der letzten Aktualisierung gibt den Lesern einen Hinweis auf die Relevanz des verlinkten Artikels und hilft auch den MDN-Wartungsmitarbeitern, Links zu Artikeln zu überprüfen, die seit langem nicht mehr aktualisiert wurden. Wenn Sie zum Beispiel einen Link zu einem Artikel auf Wikipedia angeben, können Sie das Veröffentlichungs-/Aktualisierungsdatum ignorieren. Der folgende Listeneintrag ist ein Beispiel für das Hinzufügen eines Links zum [Top-level await](https://v8.dev/features/top-level-await) externen Artikel im Siehe auch-Abschnitt, zusammen mit den Quell- und Jahresinformationen:
  - **Richtig**: [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- Bei externen Links zu Büchern können Sie auch Autorennamen angeben. Sie können einige Beispiele dafür im [Weiterführende Literatur](#language_grammar_and_spelling) Abschnitt weiter oben sehen. Verzichten Sie darauf, Autorennamen für Blogbeiträge oder GitHub-Repositories zu erwähnen, auf die Sie möglicherweise verlinken.

#### Reihenfolge der Links

- Listen Sie die Links zu den MDN-Seiten in der Reihenfolge der Referenzseiten zuerst auf, gefolgt von Links zu den verwandten Leitfaden- und Tutorialseiten. Diese vorgeschlagene Reihenfolge dient hauptsächlich der besseren Scanbarkeit der Liste.
- Falls die Liste eine Mischung aus internen und externen Links ist, listen Sie zuerst die internen Links und dann die externen auf.
- Innerhalb jeder Gruppe von internen und externen Links, folgen Sie der alphabetischen oder von einfach zu komplexen Reihenfolge, je nachdem, was mehr Sinn für den Kontext macht.

### Unterseiten

Wenn Sie einige Artikel zu einem Thema oder Fachbereich hinzufügen möchten, tun Sie dies in der Regel, indem Sie eine Einstiegsseite erstellen und dann Unterseiten für jeden der einzelnen Artikel hinzufügen. Die Einstiegsseite sollte mit einem oder zwei Absätzen beginnen, die das Thema oder die Technologie beschreiben, und dann eine Liste der Unterseiten mit Beschreibungen für jede Seite enthalten. Sie können die Einfügung von Seiten in die Liste mit einigen Makros automatisieren, die wir erstellt haben.

Beispielsweise das [JavaScript](/de/docs/Web/JavaScript) Handbuch, das folgendermaßen strukturiert ist:

- [JavaScript/Guide](/de/docs/Web/JavaScript/Guide) – Hauptinhaltsverzeichnis (Table of Contents)
- [JavaScript/Guide/JavaScript Überblick](/de/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details des Objektmodells](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

Versuchen Sie zu vermeiden, Ihren Artikel ganz oben in der Hierarchie zu platzieren, was die Seite verlangsamt und die Navigation und Suche auf der Seite weniger effektiv macht.

### Slugs

Der Seitentitel, der oben auf der Seite angezeigt wird, kann sich vom "Slug" der Seite unterscheiden, der der Teil der URL der Seite nach `<locale>/docs/` ist. Beachten Sie die folgenden Richtlinien, wenn Sie einen Slug definieren:

- Slugs sollten kurz gehalten werden. Wenn eine neue Ebene der Hierarchie erstellt wird, sollte die neue Ebene im Slug nur ein Wort oder zwei sein.
- Slugs sollten einen Unterstrich für ein mehrteiliges Element verwenden, wie im `Getting_started` in `/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started`.
- Befolgen Sie in den Slugs ebenfalls die Satzschreibung, wie in den einzelnen Componenten angegeben, ein Beispiel wäre `Getting_started` im vorherigen Beispiel.

### Titel

Seitentitel werden in den Suchergebnissen verwendet und strukturieren auch die Seitenhierarchie in der Breadcrumb-Liste oben auf der Seite. Ein Seitentitel kann sich vom "Slug" der Seite unterscheiden, wie im Abschnitt [Slugs](#slugs) erklärt.

Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln:

- **Schreibweise**: Auf den MDN Web Docs sollten Seitentitel und Abschnittsüberschriften die Satzschreibung verwenden (nur das erste Wort und Eigennamen großschreiben) anstelle der Überschriftsschreibung:

  - **Richtig**: "Eine neue Methode zur Erstellung von JavaScript-Rollover-Effekten"
  - **Falsch**: "Eine neue Methode zur Erstellung von JavaScript-Rollover-Effekten"

  Wir haben viele ältere Seiten, die geschrieben wurden, bevor diese Stilregel etabliert wurde. Aktualisieren Sie diese gerne bei Bedarf. Wir arbeiten uns allmählich durch diese durch.

- **Allgemeine Richtlinien**: Die Entscheidung darüber, was Sie dokumentieren möchten und wie Sie diesen Inhalt strukturieren, ist einer der ersten Schritte beim Schreiben. Eine Inhaltsverzeichnis kann Ihnen helfen zu entscheiden, wie Sie Informationen strukturieren möchten. Beginnen Sie mit einfachen Konzepten und gehen Sie dann zu komplexeren und fortgeschrittenen Konzepten über. Beginnen Sie mit konzeptionellen Informationen und gehen Sie dann zu aktionsorientierten Themen über.

  Beachten Sie die folgenden Richtlinien beim Schreiben von Titeln für eine Seite und Abschnitten oder Unterabschnitten:

  - **Von höher nach niedriger gehen**: Wie im Abschnitt [Überschriftenebenen](#überschriftenebenen) angegeben, gehen Sie von höheren `##` zu niedrigeren `####`, ohne Ebenen zu überspringen. Verwenden Sie höhere Überschriften für breitere Einführungstitel und spezifischere Titel im fortschreitenden Verlauf zu den niedrigeren Überschriften.
  - **Logisch gruppieren**: Stellen Sie sicher, dass alle verwandten Unterabschnitte logisch unter einer höheren Überschrift gruppiert sind. Das Benennen von Titeln der verschiedenen Abschnitte kann Ihnen bei dieser Übung helfen.
  - **Halten Sie Titel kurz**: Kürzere Titel sind leichter in Text und im Inhaltsverzeichnis zu scannen.
  - **Halten Sie Titel spezifisch**: Verwenden Sie den Titel, um die spezifischen Informationen zu vermitteln, die in dem Abschnitt behandelt werden. Zum Beispiel, für eine Einführung in HTML-Elemente verwenden Sie den Titel "HTML-Elemente" anstelle von "Einleitung" oder "Übersicht".
  - **Halten Sie Titel fokussiert**: Verwenden Sie den Titel, um ein Ziel zu vermitteln — eine einzelne Idee oder ein Konzept, das in diesem Abschnitt behandelt wird. Vermeiden Sie soweit möglich die Verwendung der Konjunktion "und" in einem Titel.
  - **Parallelkonstruktion verwenden**: Verwenden Sie ähnliche Sprache für Titel auf derselben Überschriftenebene. Verwenden Sie für ein `###` Überschriftntitel, der ein Gerundium verwendet, also Wörter, die mit "-ing" enden, wie "Installation", dann versuchen Sie, alle Titel auf dieser Überschriftenebene mit Gerundien zu schreiben. Wenn ein Titel mit einem imperativen Verb beginnt, wie "Verwenden", "Konfigurieren", dann schreiben Sie alle Titel auf dieser Ebene mit einem imperativen Verb beginnend.
  - **Vermeiden Sie allgemeine Begriffe in niedrigeren Überschriftentiteln**: Wiederholen Sie nicht den Text im Titel einer höheren Überschrift in niedrigeren Überschriftentiteln. Verwenden Sie zum Beispiel für einen Abschnitt namens "Kommas" den Titel eines Unterabschnitts "Nach Einleitungssätzen" anstelle von "Kommas nach Einleitungssätzen".
  - **Beginnen Sie nicht mit einem Artikel**: Vermeiden Sie das Beginnen von Titeln mit Artikeln ["Ein", "Eine", "der"].
  - **Fügen Sie Einleitungsinformationen hinzu**: Fügen Sie nach einem Titel einen einleitenden Text hinzu, um zu erklären, was im Abschnitt behandelt wird.

## Siehe auch

- [Richtlinien zum Schreiben von Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
- [Richtlinien zum Schreiben von HTML-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [Richtlinien zum Schreiben von CSS-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [Richtlinien zum Schreiben von JavaScript-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Richtlinien zum Schreiben von Shell-Prompt-Codebeispielen](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Weiterführende Literatur

### Andere Stil-Leitfäden

Wenn Sie Fragen zur Verwendung und zum Stil haben, die hier nicht behandelt werden, empfehlen wir, sich auf den [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) oder das [Chicago Manual of Style](https://www.chicagomanualofstyle.org/) zu beziehen.

### Sprache, Grammatik und Rechtschreibung

Wenn Sie daran interessiert sind, Ihre Schreib- und Bearbeitungsfähigkeiten zu verbessern, könnten Sie die folgenden Ressourcen hilfreich finden.

- [Common errors in English usage](https://brians.wsu.edu/common-errors-in-english-usage/) auf brians.wsu.edu
- [English grammar FAQ](https://websites.umich.edu/~jlawler/aue.html) auf alt-usage-english.org
- [English language and usage](https://english.stackexchange.com/) auf english.stackexchange.com: Frage- und Antwortseite für den Gebrauch der englischen Sprache
- [Merriam-Webster's Concise Dictionary of English Usage](https://books.google.com/books?id=UDIjAQAAIAAJ) auf google.com/books (veröffentlicht 2002): Wissenschaftlich aber benutzerfreundlicher, evidenzbasierter Rat; sehr gut für Nicht-Muttersprachler, insbesondere für den Gebrauch von Präpositionen
- [On Writing Well](https://www.harpercollins.com/products/on-writing-well-william-zinsser) von William Zinsser auf harpercollins.com (veröffentlicht 2016)
- [Style: Lessons in Clarity and Grace](https://books.google.com/books?id=QjskvgEACAAJ) von Joseph Williams und Gregory Colomb auf google.com/books (veröffentlicht 2019)
