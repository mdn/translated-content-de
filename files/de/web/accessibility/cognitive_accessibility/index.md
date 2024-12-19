---
title: Kognitive Barrierefreiheit
slug: Web/Accessibility/Cognitive_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{AccessibilitySidebar}}

Die kognitive Barrierefreiheit umfasst Überlegungen zur Zugänglichkeit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Barrierefreiheit ein und zeigt auf, wie die Zugänglichkeit des Internets für Menschen mit kognitiven und Lerndifferenzen verbessert werden kann.

Eine kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit geistigen Behinderungen, die möglicherweise die am meisten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen mit Denken und Erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie Depression und Schizophrenie. Es umfasst auch Menschen mit Lernbehinderungen, wie Dyslexie und Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS).

Obwohl es eine große Vielfalt innerhalb der klinischen Definitionen kognitiver Beeinträchtigungen gibt, erleben betroffene Menschen eine gemeinsame Reihe funktioneller Probleme. Diese Probleme umfassen Schwierigkeiten beim Verständnis von Inhalten, beim Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung verursacht durch inkonsistente oder unkonventionelle Webseitenlayouts. In diesem Dokument konzentrieren wir uns auf Maßnahmen, die Entwickler ergreifen sollten, um die kognitive Barrierefreiheit ihrer Webseiten und Anwendungen zu verbessern.

## Überblick

Kognitive und geistige Behinderungen umfassen ein breites Spektrum und können vorübergehende, temporäre oder permanente Zustände sein. Zum Beispiel sind Demenz und Alzheimer permanente kognitive Beeinträchtigungen, die sich progressiv verschlechtern. Andere permanente kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprechstörungen, Autismus, ADD/ADHS, Dyslexie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnten Menschen sein, die von Substanzen wie Alkohol oder Drogen beeinflusst werden. Eine andere Form könnte Depression sein, zum Beispiel bei Trauer um den Verlust eines geliebten Menschen, oder wenn man momentan traurig ist aufgrund eines Tweets oder Videos, das man gerade online gesehen hat. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag überwältigend erscheinen, das breite Spektrum an kognitiven Differenzen anzugehen, besonders wenn Lösungen für zwei verschiedene Personen im Konflikt stehen könnten. Ein Weg, damit umzugehen, ist der Fokus auf kognitive Fähigkeiten. Zu den kognitiven Fähigkeiten zählen:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verständnis und treffen von Entscheidungen

Ein solider Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, etwa durch Text-to-Speech oder Video;
- Bereitstellung leicht verständlicher Inhalte, wie Texte, die Klarsprachstandards verwenden;
- Fokussierung auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung;
- Bereitstellung eines einheitlichen Webseitenlayouts und Navigation;
- Integration vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsindikatoren;
- Gestaltung der Website-Authentifizierung so einfach wie möglich, ohne die Sicherheit zu gefährden; und
- Gestaltung von Formularen, die einfach auszufüllen sind, z. B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

## WCAG-Richtlinien

Die WCAG, Web Content Accessibility Guidelines, umfasst mehrere Richtlinien zur Verbesserung der kognitiven Barrierefreiheit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C) veröffentlicht, der wichtigsten internationalen Standardisierungsorganisation für das Internet. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/ARIA_Guides) Richtlinien.

WCAG wird von vier Prinzipien geleitet: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Dazu definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Barrierefreiheit sind.

Alle folgenden Richtlinien helfen mehr als nur Menschen mit kognitiven Behinderungen. Zum Beispiel hilft die Möglichkeit, die Ablaufzeit einer Anwendung zu verlängern, die einen Authentifizierungscode per Textnachricht an ein Mobilgerät sendet, in den folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit schlechtem Kurzzeitgedächtnis oder die mehrere Aufgaben gleichzeitig erledigen.
- Menschen mit geringer technischer Kompetenz.
- Menschen mit schlechtem drahtlosem Empfang.
- Menschen mit motorischen Kontrollproblemen.

## Anpassungsfähigkeit

[Leitfaden 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte **anpassbar** sein sollten". Erstellen Sie Inhalte, die auf verschiedene Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Zum Beispiel, indem responsive Layouts bereitgestellt werden, mit einem einspaltigen Mobil-Design.

Alle Informationen, einschließlich der Struktur und Beziehungen, die durch die Präsentation vermittelt werden, sollten in einer Form verfügbar sein, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Beispielsweise könnten die Informationen über ein Erzählwerkzeug laut vorgelesen werden. Ihre Inhalte so zu gestalten, dass sie von Software verstanden werden können, ist eine gute Möglichkeit, sicherzustellen, dass sie in alternativen Präsentationsmodi verwendet werden können.

## Zeit

Es ist wichtig, Benutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erfüllen. [Leitfaden 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt "geben Sie den Benutzern genügend **Zeit**, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Prozess, der ohne Benutzeraktivierung nach einer festgelegten Zeit oder in regelmäßigen Abständen abläuft, wie beispielsweise das Ausloggen nach 30 Minuten oder das Erhalten von 15 Minuten, um einen Kauf zu tätigen. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen auszuführen, wie das Ausfüllen von Formularen. Lösungen umfassen das Bereitstellen genügend zusätzlicher Zeit für Benutzer, um Aufgaben zu vervollständigen, oder das Eliminieren von Zeiteinschränkungen vollständig.

### Timer

Optionen zur Anpassung der Zeitvorgaben umfassen:

- Ermöglichen des Benutzers, die Zeit bis auf mindestens das 10-fache des ursprünglichen Limits zu deaktivieren oder anzupassen, bevor es erreicht wird.
- Dem Benutzer eine Warnung geben und ihm eine Pufferzeit von mindestens 20 Sekunden zur Verfügung stellen, um die Timeout-Dauer durch eine Aktion zu verlängern, wie beispielsweise das Drücken der Leertaste.

Bieten Sie einen Umschalter auf Inhalten an, der es den Benutzern ermöglicht, ein längeres Sitzungslimit oder gar kein Sitzungslimit zu aktivieren. Beispiele für zeitgesteuerte Inhalte sind Formulare, zeitgebundene Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden ist, sind keine Anpassungen erforderlich.

### Bewegen, blinken, scrollen

Es ist wichtig, Benutzer nicht abzulenken, insbesondere solche mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder automatisch aktualisierte Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, sie zu pausieren, zu stoppen, zu verstecken oder zu kontrollieren, es sei denn, es handelt sich um eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der bewegten, blinkenden, scrollenden oder automatisch aktualisierten Informationen die Bedeutung des Inhalts und/oder der Funktionalität grundlegend ändern würde **und** die Informationen und Funktionalität nicht auf andere Weise erreicht werden können, die konform wären. Dies umfasst animierte GIFs, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche zeitliche Kriterien, die zu berücksichtigen sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Für verbesserte Benutzerfreundlichkeit entfernen Sie jegliche Zeitbeschränkung. Zeitgesteuerte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten sich ohne Ablenkungen auf Inhalte konzentrieren können. Der Benutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Situationen, die das Alarmieren einer Person bei einem Notfall erfordern. Dies ermöglicht Menschen mit kognitiven Behinderungen den Zugriff, indem sie sich auf den Hauptzweck des Inhalts konzentrieren können. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen zu verschieben, indem Sie eine Möglichkeit bereitstellen, Inhaltsaktualisierungen anzufordern, anstatt diese automatisch zu aktualisieren. Ermöglichen Sie auch eine Möglichkeit, nicht wesentliche Benachrichtigungen optional zu machen.
- Stellen Sie sicher, dass Menschen eine Aktivität fortsetzen können, ohne Datenverlust nach dem erneuten Authentifizieren einer abgelaufenen Sitzung, zum Beispiel durch das Speichern des Status eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung durch den Benutzer geändert werden können. Kodieren Sie die Daten vor der erneuten Authentifizierung versteckt oder verschlüsselt.
- Bereitstellung von Warnungen über Inaktivität, die zu Datenverlust führen könnte. Wenn ein Timeout verwendet wird, sagen Sie den Benutzern genau, wie viel Zeit verstreichen wird, bevor die Sitzung aufgrund von Inaktivität abläuft und zu Datenverlust führt. Die Ausnahme ist das Bewahren von Daten für mehr als 20 Stunden, wenn keine Aktionen durchgeführt werden.

## Navigation

[Leitfaden 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt "stellen Sie Wege bereit, um Anwendern zu helfen, zu navigieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden", und bietet 10 Richtlinien, um sicherzustellen, dass die Seite navigierbar ist und Inhalte auffindbar sind.

### Inkludieren eines `<title>`

Stellen Sie sicher, dass Sie ein {{HTMLElement('title')}} für das Dokument einschließen, da Titel eine schnelle und einfach zu referierende Beschreibung des Hauptpunktes des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren alle davon, den Zweck von Inhalten auf diese Weise zu identifizieren.

### Überschriften und Beschriftungen

Inkludieren Sie klare und beschreibende Überschriften, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Beschriftungen helfen Benutzern, spezifische Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen, und Menschen mit eingeschränktem Kurzzeitgedächtnis profitieren, wenn Überschriften es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die Gesamtorganisation der Seiteninhalte zu definieren. Sie helfen, die Navigation durch Seiteninhaltsabschnitte zu erleichtern und bieten einen Mechanismus zur Unterstützung des Verständnisses. Beispiele für Überschriften umfassen Kapitel, Abschnitte und Unterabschnitte von Inhalten und so weiter.

Überschriften sind offensichtlichere navigierende Hilfsmittel im Vergleich zu anderen Methoden, um Seiteninhaltsabschnitte zu identifizieren (Ränder, Leerraum, horizontale Regeln, usw.).

### Mehrere Wege, um Inhalte zu finden

Verschiedene Benutzer bevorzugen unterschiedliche Methoden, um Informationen zu finden. Daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, mit denen Benutzer Inhalte auf Ihrer Seite finden können.

Das Bereitstellen mehrerer Möglichkeiten zur Navigation auf Ihrer Seite kann Menschen helfen, Informationen schneller zu finden. Einige Benutzer bevorzugen möglicherweise ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktion, anstatt durch mehrere Seiten zu lesen und zu navigieren, um das zu finden, was sie benötigen. Andere ziehen es vielleicht vor, die Seite in einer sequentiellen Weise zu erkunden, von Seite zu Seite zu gehen, um das Layout, den Inhalt und die Konzepte der Seite am besten zu verstehen.

### Möglichkeit, Inhaltsblöcke zu überspringen

Bereitstellung eines Mechanismus, wie eines [Skip Link](/de/docs/Web/HTML/Element/a#skip_links), um Inhaltsblöcke zu überspringen, die auf mehreren Webseiten wiederholt vorkommen.

### Fokusreihenfolge ergibt Sinn

Die Fokusreihenfolge für interaktive Elemente sollte Sinn ergeben. Um dies zu erreichen, sollte die DOM-Reihenfolge der visuellen Reihenfolge entsprechen, die wiederum der Tabulator-Reihenfolge entsprechen sollte. Wenn die Tabulator-Reihenfolge durcheinander gerät, insbesondere in einer Weise, die nicht der visuellen Reihenfolge entspricht, wenn mit der Tastatur navigiert wird, können Benutzer desorientiert werden.

### Fokusierte Elemente sollten visuell fokussiert sein

Wenn ein Benutzer mit einer Tastatur navigiert, sollte die Benutzeroberfläche deutlich machen, welches Element derzeit den Fokus hat. Ändern oder entfernen Sie nicht das Standard-[:focus](/de/docs/Web/CSS/:focus) Styling des Browsers, es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktext vermittelt Bedeutung

Der Linktext sollte deutlich und prägnant kommunizieren, wohin der Benutzer als nächstes navigiert wird, wenn er sich entscheidet, darauf zu klicken. Schlecht formulierter Linktext kann Benutzer bezüglich seines Zwecks oder seiner Zieladresse verwirren.

Einige Formen von unterstützender Technologie ermöglichen es Benutzern, durch Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihres umgebenden Nicht-Link-Inhalts entfernt, was die Notwendigkeit eines verständlichen Linktextes umso wichtiger macht. Ein Beispiel für ein schlechtes Erlebnis ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne Angabe, wohin "hier" führt, ist der Zweck des Links unklar.

Für Bildschirmlesegeräte ist es entscheidend, dass der verlinkte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalte zu Links für Bildschirmleser hinzugefügt haben und diese Inhalte für sehende Leser ausführlich und potenziell verwirrend sind, sollten Sie diesen zusätzlichen Text ausschneiden, um ihn für diejenigen, die keine unterstützenden Technologien nutzen, visuell zu verbergen.

### Der aktuelle Standort ist verfügbar

Benutzer sollten in der Lage sein, sich innerhalb einer Website oder Anwendung zu orientieren. Dies ist besonders wichtig und hilfreich für Menschen mit kurzen Aufmerksamkeitsspannen, die möglicherweise verwirrt werden, wenn sie einer langen Reihe von Navigationsschritten folgen.

Alle Benutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere bei Websites oder Anwendungen mit großen Datenmengen oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Breadcrumbs")}}, {{Glossary("Site_map", "Sitemaps")}} und die Kennzeichnung der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die den aktuellen Standort kommunizieren helfen.

## Lesbarkeit

[Leitfaden 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt, "machen Sie Texte lesbar und verständlich". Für einige Benutzer ist es schwierig, die Bedeutung eines Wortes oder Satzes aus dem Kontext zu erschließen, besonders wenn das Wort oder der Satz auf ungewöhnliche Weise verwendet wird oder eine spezialisierte Bedeutung hat.

Für diese Benutzer hängt die Fähigkeit zu lesen und zu verstehen von der Verfügbarkeit spezifischer Definitionen oder den erweiterten Formen von Akronymen oder Abkürzungen ab. Einige Benutzer haben große Schwierigkeiten, geschriebene Wörter zu erkennen, verstehen jedoch extrem komplexe und anspruchsvolle Dokumente, wenn der Text laut vorgelesen wird oder wenn wichtige Prozesse und Ideen visuell veranschaulicht werden.

### Erklären Sie die Sprache der Seite und Inhalte, die nicht in dieser Hauptsprache sind

Die Sprache jeder Seite muss durch Verwendung des [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attributs auf dem {{HTMLElement('html')}} Element erklärt werden. Schließen Sie das `lang` Attribut erneut für Texte ein, die in einer anderen Sprache als der Hauptsprache des Dokuments verfasst sind.

Der korrekte Gebrauch von `lang` ermöglicht es einigen Bildschirmlesegeräten, den Text korrekt anzusagen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Definieren Sie ungewöhnliche Wörter und Wortverwendungen

Einige Behinderungen erschweren das Verständnis nicht-wörtlicher Wortverwendungen, wie Idiome, umgangssprachliche Ausdrücke und spezialisierten Jargon. Nicht-Muttersprachler der Sprache können ebenfalls Schwierigkeiten mit diesen Begriffen haben. Wenn ein Wort oder Satz eine einzigartige Bedeutung hat, stellen Sie eine Definition im Dokument bereit, entweder inline oder verlinkt, innerhalb eines Glossars oder zu einem Online-Wörterbuch. Wenn ein Wort oder Satz mehr als eine Bedeutung hat, definieren Sie jeden Gebrauch.

### Definieren Sie Abkürzungen

Abkürzungen können verwirrend für Menschen sein, die:

- Schwierigkeiten haben, Wörter zu entschlüsseln.
- Begrenztes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zur Hilfe beim Verstehen zu nutzen.
- Auf Bildschirmlupen angewiesen sind (die häufig kontextuelle Hinweise reduzieren).

Bieten Sie eine erweiterte Form der Abkürzung beim ersten Gebrauch, gefolgt von der Abkürzung, die in einem {{HTMLElement('abbr')}} Element platziert wird. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments liegt (wie Latein), erklären Sie deren Bedeutung. Erwägen Sie auch die Verwendung von [Rubyschrift](/de/docs/Web/HTML/Element/ruby) für Initialismen (Aussprechen von Akronymen).

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben sein. Ein guter Richtwert ist, den Inhalt so einfach zu machen, dass er beim ersten Mal verstanden werden kann. Methoden, um dies zu erreichen, umfassen:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung der aktiven Stimme im Präsens.
- Verwendung korrekter Grammatik und Rechtschreibung.

Es hilft Benutzern mit kognitiven Behinderungen, eine Textzusammenfassung (manchmal als TL;DR, oder "too long; didn't read", bekannt) auf einer niedrigen Lesestufe bereitzustellen. Eine andere Technik, die Sie verwenden können, ist das Bereitstellen begleitender visueller Darstellungen, um Ideen, Ereignisse und Prozesse zu erklären.

Es gibt Tools, die den Schwierigkeitsgrad Ihrer Inhalte bewerten können. Zum Beispiel hat dieses Dokument ein durchschnittliches Leselevel von etwa 11. Das bedeutet, dass es leicht von einem englischen Muttersprachler im Alter von 16 bis 17 Jahren verstanden werden sollte. Einige Tools können sogar Vorschläge geben, um es zu vereinfachen.

### Aussprache

Es gibt mehrere Techniken, die Menschen helfen können, die Aussprache von Wörtern zu lernen:

- Geben Sie die Aussprache direkt nach dem Wort an.
- Verlinken Sie zu einer Liste von Aussprachen.
- Stellen Sie ein Glossar mit Aussprachen bereit.
- Verwenden Sie das {{HTMLElement('ruby')}} Element, um darzustellen, wie ein Wort ausgesprochen wird.

Anweisungen zur Aussprache von Wörtern helfen vielen verschiedenen Arten von Menschen, einschließlich derjenigen, die lieber laut lesen, nichtmuttersprachlichen Sprechern und Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine andere Lösung ist die Verwendung von Glyphen oder diakritischen Zeichen, um die Aussprache darzustellen. Sollte diese Technik verwendet werden, muss es jedoch eine Möglichkeit geben, sie abzuschalten. Ferner ist es hilfreich, einen Leitfaden zu den verwendeten Zeichen bereitzustellen, da ihre Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Leitfaden 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt "gestalten Sie Webseiten, die auf vorhersehbare Weise erscheinen und funktionieren". Dies ist ein Grundsatz des guten User Experience Designs. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dies umfasst die Konsistenz im Seitenlayout und bei vorhersehbaren interaktiven Komponenten.

### Verwenden Sie Aktivierung, nicht Fokus, um Kontext zu ändern

Eine Änderung des Kontextes sollte absichtlich erfolgen. Deshalb sollte, wenn ein UI-Feature den [Fokus](/de/docs/Web/API/HTMLElement/focus) erhält, dies keine weiteren benutzerorientierten Aktionen auslösen. Vielmehr sollten Benutzer ein Feature "aktivieren" müssen, um die Änderung auszulösen.

### Ändern Sie die Einstellung basierend auf einer aktiven Anforderung

Die Bedienung von Formularelementen und die Dateneingabe sollten zu vorhersehbarem Verhalten führen. Änderungen im Kontext können Benutzer mit kognitiven Beeinträchtigungen verwirren und sollten daher nur dann auftreten, wenn klar ist, dass eine solche Änderung als Reaktion auf die Aktion des Benutzers erfolgen wird.

Das Ändern des Zustands sollte eine absichtliche Benutzeraktion erfordern. Beispiele hierfür sind das Markieren eines Auswahlkästchens, das Eingeben von Daten oder das Ändern einer Auswahloption. Sorgen Sie auch dafür, dass ein Absenden-Button vorhanden ist, um die Kontextänderung einzuleiten, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Behalten Sie die Navigation auf der gesamten Website konsistent

Halten Sie die Navigationsreihenfolge zwischen den Seiten konsistent. Haben Sie beispielsweise auf mehreren Seiten eine Navigationsleiste, machen Sie diese Navigation auf der ganzen Website einheitlich, indem Sie dieselben Links an derselben Stelle präsentieren. Dies gilt nicht nur für die Navigation: präsentieren Sie alle wiederholten Komponenten jedes Mal in derselben relativen Reihenfolge, wenn sie erscheinen.

### Bieten Sie konsistente Beschriftung

Identische Funktionen sollten jedes Mal ähnliche Bezeichnungen haben, wenn sie genutzt werden. Konsistente Beschriftungen von Tasten, Alternativtexte für Symbole und Symbolik für ähnliche Interaktionen usw., selbst in verschiedenen Bereichen Ihrer Website, unterstützen all Ihre Benutzer.

### Seien Sie konsistent und vorhersehbar und nutzen Sie Normen

Während unbeschriftete Ikonographie nicht die effektivste Methode ist, um Informationen zu vermitteln, hilft die Konsistenz beim Gebrauch der Symbole (und wenn beschriftet, deren Text) den Menschen, zu verstehen, was das Symbol repräsentiert. Ändern Sie auch keine Standardwerte wie die Zurück-Taste des Browsers. Wenn Sie einen Benutzer umleiten müssen, lassen Sie ihn vorher darüber wissen.

## Eingabehilfe

[Leitfaden 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, die genaue Dateneingabe sicherzustellen, und besagt "helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen anfälliger für Fehler, bemerken sie weniger wahrscheinlich oder haben größere Schwierigkeiten, einen Fehler zu korrigieren, sobald sie einen gemacht haben.

Die Hinweise zur Eingabehilfe zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere solche mit Behinderungen, einen Fehler machen, und, falls sie einen Fehler machen, die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und erfolgreich alle Fehler beheben können.

### Automatische Fehlererkennung vermitteln

Benutzer müssen auf den Fehler aufmerksam gemacht und darüber informiert werden, was falsch ist. Wenn eine clientseitige Fehlererkennung vorhanden ist, beachten Sie die folgenden Hinweise, um den Fehler so effektiv wie möglich zu machen, wenn er dem Benutzer vermittelt wird:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Geben Sie Text an, um unvollständige erforderliche Felder und Textbeschreibungen zu identifizieren, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler eine Formularübermittlung verhinderte, fokussieren Sie auf den Fehler. Wenn mehrere Fehler vorhanden sind, geben Sie eine Zusammenfassung an, wobei jeder Fehler mit dem zugehörigen Eingabefeld verlinkt ist.
- Schließen Sie Text zusammen mit der Verwendung von Symbolen, Bildern, Farben usw. ein. Einige Leute haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, die Textversion Ihrer Fehlermeldung zu verstehen. Stellen Sie für diese Leute auch Dinge wie Symbole und Farben bereit.
- Bieten Sie auch Feedback über erfolgreiche Formularübermittlungen.

### Anweisungen für die Benutzereingabe bereitstellen

Beginnen Sie das Formular mit Textanweisungen, wie es zu bedienen ist. Fügen Sie Labels oder Anweisungen ein, wenn Benutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}} Elemente verwenden.

Labels sollten beschreibend und in der Nähe der Eingabe platziert sein, auf die sie sich beziehen. Wenn ein spezielles Format für die Eingabe erforderlich ist, geben Sie ein Beispiel im richtigen Format bereit. Erwägen Sie außerdem, serverseitige Validierung durchzuführen, um Eingabedaten zu formatieren und die Benutzerfreundlichkeit zu unterstützen.

Wenn ein Formularfeld erforderlich ist, kennzeichnen Sie es sowohl visuell als auch [über Code](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required). Wenn ein Formularkontrollfeld den Kontext ändert, beschreiben Sie, was passieren wird, auf eine Weise, die der Benutzer vor der Kontextänderung versteht.

### Fehlerkorrekturvorschläge

Bieten Sie dem Benutzer Vorschläge für die Eingabe an, wenn ein Eingabefehler automatisch erkannt wird und Korrekturvorschläge bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck der Inhalte gefährden).

### Katastrophen verhindern

Bei Übermittlungen, die erhebliche rechtliche, finanzielle oder andere Folgen haben oder haben könnten, stellen Sie sicher, dass die Übermittlungen überprüft, bestätigt und/oder reversibel sind.

Vom Benutzer eingegebene Daten sollten vor der Übermittlung auf Fehler überprüft und der Benutzer sollte die Möglichkeit haben, sie zu korrigieren. Der Benutzer sollte in der Lage sein, Informationen vor der endgültigen Übermittlung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie auch sicher, dass ein Bestätigungsfeld zusätzlich zu einer Absenden-Schaltfläche enthalten ist.

Wenn eine Übermittlung zu einer rechtlichen oder finanziellen Transaktion führt, geben Sie eine festgelegte Zeitspanne an, innerhalb derer der Benutzer die Anfrage ändern oder stornieren kann.

### Hilfe bereitstellen

Kontextabhängige Hilfe sollte verfügbar sein. Wenn ein Formular Texteingabe erfordert, geben Sie Formularanweisungen an, die den Zweck und die erforderliche Eingabe beschreiben. Bieten Sie eine Rechtschreibprüfung und Vorschläge für lange Texteingaben an und bieten Sie Links zu Hilfe- und Unterstützungsmaterial. Wenn ein spezifisches Datenformat für die Eingabe erwartet wird, geben Sie ein Beispiel an.

## Anmerkungen

Die oben genannten sind gute Gestaltungspraktiken. Sie werden jedem zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C produziert Webzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Zentren für Krankheitskontrolle und Prävention schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hatte, und davon ist [kognitive Beeinträchtigung die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellectuelle Behinderungen" früher "mentale Retardierung" genannt. Im Vereinigten Königreich werden "intellektuelle Behinderungen" gemeinhin als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Zugänglichkeitsrichtlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Barrierefreiheit bei Anfallserkrankungen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Verständnis der WCAG-Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG)
- [Überblick über Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [kognitiver Barrierefreiheitsrichtlinien](#wcag-richtlinien)
- [Die W3C-Arbeitsgruppe zur Barrierefreiheit für kognitive und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Cognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
