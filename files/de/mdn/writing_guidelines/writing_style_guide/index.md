---
title: Leitfaden für Schreibstil
short-title: Style guide
slug: MDN/Writing_guidelines/Writing_style_guide
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

Dieser Leitfaden für Schreibstil beschreibt, wie Inhalte auf MDN Web Docs geschrieben, organisiert, buchstabiert und formatiert sein sollten.

Diese Richtlinien dienen dazu, Konsistenz in Sprache und Stil auf der gesamten Website zu gewährleisten. Dennoch interessieren wir uns mehr für den Inhalt als für das Format, daher fühlen Sie sich nicht verpflichtet, den gesamten Leitfaden zu lernen, bevor Sie Beiträge leisten. Seien Sie jedoch nicht verärgert oder überrascht, wenn ein anderer Mitwirkender später Ihre Arbeit bearbeitet, um sie diesem Leitfaden anzupassen. Die Reviewer könnten Sie außerdem auf diesen Leitfaden hinweisen, wenn Sie eine Content-Pull-Anfrage einreichen.

> [!NOTE]
> Die sprachlichen Aspekte dieses Leitfadens gelten hauptsächlich für Dokumentationen in englischer Sprache. Andere Sprachen können (und sollen) ihre eigenen Stilrichtlinien erstellen. Diese sollten als Unterseiten auf der jeweiligen Lokalisierungsseite veröffentlicht werden. Dennoch sollte dieser Leitfaden für die Formatierung und Organisation von Inhalten konsultiert werden.

Nach der Auflistung der allgemeinen Schreibrichtlinien beschreibt dieser Leitfaden den empfohlenen Schreibstil für MDN Web Docs und dann, wie verschiedene Komponenten auf einer Seite, wie Listen und Titel, formatiert werden sollten.

## Allgemeine Schreibrichtlinien

Das Ziel ist es, Seiten zu erstellen, die alle Informationen enthalten, die Leser benötigen, um das jeweilige Thema zu verstehen.

Die folgenden Unterabschnitte geben Empfehlungen, um dies zu erreichen:

- [Berücksichtigen Sie Ihre Zielgruppe](#berücksichtigen_sie_ihre_zielgruppe)
- [Berücksichtigen Sie die drei Cs des Schreibens](#berücksichtigen_sie_die_drei_cs_des_schreibens)
- [Inklusive relevante Beispiele](#inklusive_relevante_beispiele)
- [Sorgen Sie für eine beschreibende Einführung](#sorgen_sie_für_eine_beschreibende_einführung)
- [Verwenden Sie inklusive Sprache](#verwenden_sie_inklusive_sprache)
- [Schreiben Sie mit SEO im Hinterkopf](#write_with_seo_in_mind)

### Berücksichtigen Sie Ihre Zielgruppe

Behalten Sie die Zielgruppe im Kopf, für die Sie schreiben. Eine Seite über fortgeschrittene Netzwerktechniken muss beispielsweise vermutlich nicht so detailliert auf grundlegende Netzwerkkonzepte eingehen wie die typische Seite über Netzwerke. Beachten Sie, dass dies Richtlinien sind. Einige dieser Tipps treffen möglicherweise nicht in jedem Fall zu.

### Berücksichtigen Sie die drei Cs des Schreibens

Die drei Cs des guten Schreibens sind Klarheit, Prägnanz und Konsistenz.

- **Klar**: Stellen Sie sicher, dass Ihr Schreiben klar und einfach ist. Verwenden Sie im Allgemeinen die aktive Stimme und eindeutige Pronomen. Schreiben Sie kurze Sätze, die sich auf eine Idee pro Satz beschränken. Definieren Sie neue Begriffe, bevor Sie sie verwenden.
- **Prägnant**: Es ist wichtig, zu wissen, wie viel gesagt werden muss. Gibt es zu viele Details, wird die Seite ermüdend zu lesen und selten genutzt.
- **Konsistent**: Verwenden Sie dieselben Formulierungen konsistent auf der gesamten Seite und über mehrere Seiten hinweg.

### Inklusive relevante Beispiele

Fügen Sie im Allgemeinen Beispiele oder reale Szenarien hinzu, um den Inhalt, den Sie schreiben, besser zu erklären. Dies hilft Lesern, konzeptionelle und prozedurale Informationen greifbarer und praktischer zu verstehen.

Verwenden Sie Beispiele, um zu verdeutlichen, wofür jeder Parameter verwendet wird, und um Randfälle zu klären. Sie können auch Beispiele verwenden, um Lösungen für gängige Aufgaben und Probleme, die auftreten können, zu demonstrieren.

### Sorgen Sie für eine beschreibende Einführung

Stellen Sie sicher, dass der einleitende Absatz vor der ersten Überschrift die Informationen, die auf der Seite behandelt werden, und möglicherweise das, was Leser nach dem Durcharbeiten des Inhalts erreichen können, ausreichend zusammenfasst. So kann ein Leser schnell feststellen, ob die Seite für seine Anliegen und gewünschten Lernziele relevant ist.

In einem Leitfaden oder Tutorial sollte der einleitende Absatz den Leser über die behandelten Themen sowie über die erforderlichen Vorkenntnisse informieren, sofern vorhanden. Der einleitende Absatz sollte die Technologien und/oder APIs erwähnen, die dokumentiert oder diskutiert werden, mit Links zu den entsprechenden Informationen, und sollte Hinweise auf Situationen geben, in denen der Inhalt des Artikels nützlich sein könnte.

- **Beispiel für eine kurze Einführung**: Dieses Beispiel für eine Einführung ist viel zu kurz. Es fehlt an wesentlichen Informationen, z. B. was genau mit "Text umfahren" gemeint ist, wo der Text gezeichnet wird usw.

  > **`CanvasRenderingContext2D.strokeText()`** zeichnet eine Zeichenkette.

- **Beispiel für eine lange Einführung**: Dieses Beispiel enthält eine aktualisierte Einführung, ist jedoch jetzt viel zu lang. Es enthält zu viele Details und beschreibt andere Methoden und Eigenschaften zu tiefgreifend. Stattdessen sollte sich die Einführung auf die `strokeText()`-Methode konzentrieren und auf die entsprechenden Leitfäden verweisen, wo die anderen Details beschrieben werden.

  > (...)
  >
  > Sie können optional einen vierten Parameter angeben, mit dem Sie eine maximale Breite für die Zeichenkette in Pixeln festlegen können. Wenn Sie diesen Parameter angeben, wird der Text horizontal komprimiert, skaliert (oder anderweitig angepasst), um in einen Bereich dieser Breite zu passen, wenn er gezeichnet wird.
  >
  > Sie können die **`fillText()`**-Methode aufrufen, um die Zeichen der Zeichenkette mit Farbe gefüllt zu zeichnen, anstatt nur die Umrisse der Zeichen zu zeichnen.

- **Beispiel für eine geeignete Einführung**: Hier sehen wir eine viel bessere Übersicht für die `strokeText()`-Methode.

  > Die Methode [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) **`strokeText()`**, ein Teil der [Canvas 2D API](/de/docs/Web/API/Canvas_API), umfährt (zeichnet die Umrisse) die Zeichen einer angegebenen Zeichenkette, die an der durch die angegebenen X- und Y-Koordinaten angegebenen Position verankert ist. Der Text wird mit der aktuellen [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) des Kontexts gezeichnet und gemäß den Eigenschaften [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) ausgerichtet.
  >
  > Für weitere Details und Beispiele siehe den Abschnitt [Text](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics#text) auf der Seite "Grafiken zeichnen" sowie unseren Hauptartikel zu diesem Thema: [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text).

### Verwenden Sie inklusive Sprache

MDN hat ein breites und vielfältiges Publikum. Wir ermutigen Sie ausdrücklich, den Text so inklusiv wie möglich zu halten.

Hier sind einige Alternativen zu häufig verwendeten Begriffen in der Dokumentation:

- Vermeiden Sie die Begriffe **master** und **slave** und verwenden Sie stattdessen **main** und **replica**.
- Ersetzen Sie **whitelist** und **blacklist** durch **allowlist** und **denylist**.
- **Sanity** sollte durch **coherence** ersetzt werden.
- Statt **dummy** verwenden Sie **placeholder**.
- Begriffe wie **crazy** und **insane** sollten in der Dokumentation vermieden und durch **fantastic** ersetzt werden, falls erforderlich.

Es ist am besten, eine geschlechtsneutrale Sprache zu verwenden, wenn das Geschlecht für das Thema irrelevant ist. Wenn Sie beispielsweise über die Handlungen eines bestimmten Mannes sprechen, ist die Verwendung von "he"/"his" in Ordnung; wenn das Subjekt jedoch eine Person eines beliebigen Geschlechts ist, sind "he"/"his" nicht geeignet.

Betrachten wir die folgenden Beispiele:

- **Falsch**: "A confirmation dialog asks the user if he wants to allow the web page to make use of his webcam."
- **Falsch**: "A confirmation dialog asks the user if she wants to allow the web page to make use of her webcam."

Beide Versionen sind geschlechtsspezifisch. Um dies zu lösen, verwenden Sie geschlechtsneutrale Pronomen, wie folgt:

- **Richtig**: "A confirmation dialog asks the user if they want to allow the web page to make use of their webcam."

> [!NOTE]
> MDN Web Docs erlaubt die Verwendung des dritten Plurals in der Einzahl, allgemein bekannt als "[singular 'they'](https://en.wikipedia.org/wiki/Singular_they)". Geschlechtsneutrale Pronomen sind "they", "them", "their" und "theirs".

Eine andere Option ist, die Benutzer zu pluralisieren, wie folgt:

- **Richtig**: "A confirmation dialog asks the users if they want to allow the web page to make use of their webcams."

Die beste Lösung ist natürlich, das Pronomen umzuschreiben und zu eliminieren:

- **Richtig**: "A confirmation dialog requesting the user's permission for webcam access appears."
- **Richtig**: "A confirmation dialog box that asks the user for permission to use the webcam appears."

Dieses letzte Beispiel für den Umgang mit dem Problem ist wohl besser. Es ist nicht nur grammatikalisch korrekter, sondern beseitigt auch einige der Komplexitäten, die mit der Behandlung von Geschlechtern in verschiedenen Sprachen einhergehen können, die völlig unterschiedliche Geschlechterregeln haben. Diese Lösung kann sowohl das Lesen als auch die Übersetzung erleichtern.

(Die verbleibenden Abschnitte folgen denselben Übersetzungsrichtlinien entsprechend dem obigen Beispiel.)
