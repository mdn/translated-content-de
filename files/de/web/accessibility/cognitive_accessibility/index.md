---
title: Kognitive Zugänglichkeit
slug: Web/Accessibility/Cognitive_accessibility
l10n:
  sourceCommit: 2e3ea7e3f3a563fb556e6eb58503b2c746b9aa3b
---

{{AccessibilitySidebar}}

Die kognitive Zugänglichkeit umfasst Überlegungen zur Barrierefreiheit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument stellt die kognitive Zugänglichkeit vor und beschreibt, wie die Zugänglichkeit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Behinderungen, die möglicherweise die eingeschränktesten Fähigkeiten haben, bis hin zu altersbedingten Problemen beim Denken und Erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie. Es umfasst auch Menschen mit Lernbehinderungen wie Legasthenie und Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS).

Obwohl es in den klinischen Definitionen von kognitiven Beeinträchtigungen eine große Vielfalt gibt, erleben Menschen mit diesen Beeinträchtigungen eine gemeinsame Gruppe von funktionellen Problemen. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung, die durch inkonsistente oder unkonventionelle Webseitenlayouts verursacht wird. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Zugänglichkeit ihrer Websites und Anwendungen zu verbessern.

## Übersicht

Intellektuelle und kognitive Behinderungen decken ein großes Spektrum ab und können kurzzeitig, vorübergehend oder dauerhaft auftreten. Beispielsweise sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich zunehmend verschlimmern. Andere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprachstörungen, Autismus, ADHS, Legasthenie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnten Menschen sein, die von Substanzen wie Alkohol oder Drogen betroffen sind. Eine andere Form kann Depression sein, z. B. beim Trauern um einen geliebten Menschen oder wenn man kurzzeitig durch einen Tweet oder ein Video, das man online gesehen hat, traurig ist. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die breite Palette an kognitiven Unterschieden zu adressieren, insbesondere wenn Lösungen für zwei verschiedene Personen widersprüchlich sein können. Eine Möglichkeit, damit umzugehen, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Zu den kognitiven Fähigkeiten gehören:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein fundierter Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Die Bereitstellung von Inhalten auf mehr als eine Weise, z. B. durch Text-zu-Sprache oder Video;
- Die Bereitstellung von leicht verständlichen Inhalten, wie z. B. Texten, die nach Standards für einfache Sprache geschrieben sind;
- Konzentration auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie z. B. unnötige Inhalte oder Werbung;
- Konsistente Webseitenlayouts und Navigation bereitzustellen;
- Einbindung vertrauter Elemente, wie z. B. unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Prozesse in logische, wesentliche Schritte mit Fortschrittsanzeigen unterteilen;
- Die Authentifizierung so einfach wie möglich gestalten, ohne die Sicherheit zu beeinträchtigen; und
- Formulare einfach ausfüllen können, z. B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

## WCAG-Richtlinien

Die WCAG, Web Content Accessibility Guidelines, beinhalten verschiedene Richtlinien zur Verbesserung der kognitiven Zugänglichkeit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C), der Hauptorganisation für globale Internetstandards, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/ARIA_Guides) Richtlinien.

Die WCAG sind von vier Prinzipien geleitet: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Zugänglichkeit sind.

Alle folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. Beispielsweise kann die Möglichkeit, die Ablaufzeit eines Anwendungsfalls zu verlängern, bei dem ein Authentifizierungscode an ein mobiles Gerät per SMS gesendet wird, in den folgenden Szenarien hilfreich sein:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit schlechtem Kurzzeitgedächtnis oder die Multitasking betreiben.
- Menschen mit geringerer technischer Kompetenz.
- Menschen mit schlechter kabelloser Verbindung.
- Menschen mit eingeschränkter motorischer Kontrolle.

## Anpassungsfähigkeit

[Richtlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte **anpassbar** sein sollten". Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Stellen Sie beispielsweise [responsive](/de/docs/Glossary/responsive_web_design) Layouts bereit, mit einem mobilen Design in einer einzigen Spalte.

Alle Informationen, einschließlich der durch die Präsentation vermittelten Struktur und Beziehungen, sollten in einer Form verfügbar sein, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Beispielsweise könnten die Informationen von einem Erzählwerkzeug laut vorgelesen werden. Indem Ihre Inhalte von Software verstanden werden können, tragen Sie dazu bei, sicherzustellen, dass sie in alternativen Präsentationsmodi genutzt werden können.

## Zeit

Es ist wichtig, Benutzern die Zeit zu geben, die sie benötigen, um Aufgaben abzuschließen. [Richtlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt, dass "den Benutzern genug **Zeit** gegeben werden sollte, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist ein Prozess, der nach einer festgesetzten Zeit oder periodisch ohne Benutzereingabe geschieht, wie z. B. das Ausloggen nach 30 Minuten oder das Haben von 15 Minuten, um einen Kauf abzuschließen. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen auszuführen, wie z. B. das Ausfüllen von Formularen. Lösungen umfassen die Bereitstellung von zusätzlicher Zeit für Benutzer, um Aufgaben abzuschließen, oder die vollständige Eliminierung von Zeitbeschränkungen.

### Timer

Optionen zum Anpassen der Zeitanforderungen umfassen:

- Dem Benutzer erlauben, die Zeit vor der Ansteuerung oder Anpassung der Zeit auf mindestens das 10-fache des ursprünglichen Limits zu umbrechen.
- Den Benutzer benachrichtigen und einen Puffer von mindestens 20 Sekunden bereitstellen, um die Zeitüberschreitungsdauer mit einer einfachen Aktion, wie der Betätigung der Leertaste, um den Faktor 10 zu verlängern.

Bieten Sie eine Umschaltmöglichkeit für Inhalte, die es Benutzern ermöglicht, eine längere Sitzungszeitlimitierung oder gar kein Zeitlimit zu aktivieren. Beispiele für zeitbegrenzte Inhalte sind Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden ist, sind keine Anpassungen erforderlich.

### Bewegende, blinkende, scrollende

Es ist wichtig, Benutzer nicht abzulenken, insbesondere solche mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder automatisch aktualisierte Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, es zu pausieren, zu stoppen, zu verbergen oder zu kontrollieren, es sei denn, es ist eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierten Informationen den Inhalt und/oder die Funktionalität wesentlich ändern würde, **und** Informationen und Funktionalitäten nicht auf eine andere konforme Weise erreicht werden können. Dazu gehören animierte GIFs, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche zeitliche Kriterien, die zu berücksichtigen sind, umfassen:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Um die Benutzerfreundlichkeit zu verbessern, entfernen Sie alle Zeitlimits. Zeitgesteuerte Inhalte sollten auch vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten in der Lage sein, sich ohne Ablenkungen auf Inhalte zu konzentrieren. Der Benutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Situationen, die eine Person auf einen Notfall aufmerksam machen. Dies ermöglicht den Zugang für Menschen mit kognitiven Behinderungen, indem es ihnen ermöglicht wird, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen zu verschieben, indem Sie eine Möglichkeit bieten, Inhaltsaktualisierungen anzufordern, anstatt automatisch zu aktualisieren. Bieten Sie auch eine Möglichkeit, nicht wesentliche Benachrichtigungen optional zu machen.
- Stellen Sie sicher, dass Menschen eine Aktivität ohne Datenverlust fortsetzen können, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben, zum Beispiel durch das Speichern des Zustands eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung eines Benutzers geändert werden können. Codieren Sie die Daten vor der erneuten Authentifizierung als versteckt oder verschlüsselt.
- Bieten Sie Warnungen über Inaktivität an, die zu Datenverlust führen könnten. Wenn ein Timeout verwendet wird, teilen Sie den Menschen mit, wie viel Zeit genau dazu führen wird, dass die Sitzung abläuft und Daten verloren gehen. Die Ausnahme davon ist die Speicherung von Daten über mehr als 20 Stunden, wenn keine Maßnahmen ergriffen werden.

## Navigation

[Richtlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt "stellen Sie Mittel bereit, die Benutzern helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sind", und enthält 10 Richtlinien, um sicherzustellen, dass die Website navigierbar ist und die Inhalte gefunden werden können:

### Einfügen eines `<title>`

Stellen Sie sicher, dass ein {{HTMLElement('title')}} für das Dokument eingefügt wird, da Titel eine schnelle und einfache Möglichkeit bieten, die Hauptaussage des Bildschirms zu beschreiben. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren davon, auf diese Weise den Zweck der Inhalte identifizieren zu können.

### Überschriften und Labels

Fügen Sie klare und beschreibende Überschriften hinzu, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Labels helfen Benutzern, spezifische Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen, und Menschen mit eingeschränktem Kurzzeitgedächtnis profitieren davon, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die Gesamtorganisation der Seiteninhalte zu definieren. Sie erleichtern die Navigation durch Inhaltsabschnitte der Seite und bieten einen Mechanismus, um das Verständnis zu fördern. Beispiele für Überschriften sind Kapitel, Abschnitte und Unterabschnitte von Inhalten usw.

Überschriften bieten offensichtlichere Navigationshilfen im Vergleich zu anderen Methoden zur Identifizierung von Inhaltsabschnitten der Seite (Rahmen, Leerzeichen, horizontale Linien usw.).

### Mehrere Möglichkeiten, Inhalte zu finden

Verschiedene Benutzer bevorzugen unterschiedliche Methoden, um Informationen zu finden, daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, damit Benutzer Inhalte auf Ihrer Website finden können.

Das Bereitstellen von mehr als einer Möglichkeit, auf Ihrer Website zu navigieren, kann Menschen helfen, Informationen schneller zu finden. Einige Benutzer bevorzugen ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktion anstelle des Lesens und Durchgehens mehrerer Seiten, um das zu finden, was sie brauchen. Andere ziehen es vor, die Website in einer sequenziellen Weise zu erkunden, von Seite zu Seite zu gehen, um am besten das Layout, den Inhalt und die Konzepte der Website zu verstehen.

### Möglichkeit, Inhaltsblöcke zu überspringen

Bereitstellung eines Mechanismus, wie z. B. eines [skip links](/de/docs/Web/HTML/Element/a#skip_links), um Inhaltsblöcke zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Reihenfolge der Eingaben sollte sinnvoll sein

Die Aufmerksamkeit muss auf interaktive Elemente so zum Ausdruck kommen, dass es sinnvoll ist. Um dies zu erreichen, sollte die DOM-Reihenfolge der visuellen und damit der Tabulatorreihenfolge entsprechen. Wenn die Tab-Reihenfolge herumspringt, insbesondere auf eine Weise, die nicht der visuellen Reihenfolge beim Navigieren mit einer Tastatur entspricht, können Benutzer desorientiert werden.

### Fokusierte Elemente sollten sichtbar im Fokus sein

Wenn ein Benutzer mit einer Tastatur navigiert, sollte die Benutzeroberfläche offensichtlich machen, welches Element aktuell im Fokus ist. Verändern oder entfernen Sie nicht das Standard-[`:focus`](/de/docs/Web/CSS/:focus) Styling des Browsers, es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktext vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, was der Benutzer erwarten kann, wohin sie als Nächstes geleitet werden, wenn sie sich entscheiden, ihn zu aktivieren. Schlecht formulierte Linktexte können Benutzer über ihren Zweck oder deren Ziel verwirren.

Einige Formen von unterstützender Technologie ermöglichen es Benutzern, durch Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihres umgebenden Nicht-Link-Inhalts entfernt, was die Notwendigkeit verständlichen Linktextes noch wichtiger macht. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne zu sagen, wohin "hier" führen wird, ist der Zweck des Links unklar.

Für Bildschirmlesegeräte ist es entscheidend, dass der verknüpfte Text den Zweck jedes Links beschreibt. Wenn Sie Links Text hinzugefügt haben, um ihn für Bildschirmlesegeräte verständlicher zu machen und dieser Text für sehende Leser lang und möglicherweise verwirrend ist, sollten Sie in Erwägung ziehen, den hinzugefügten Text visuell zu verstecken.

### Aktueller Standort ist verfügbar

Benutzer sollten sich innerhalb einer Webseite oder Anwendung orientieren können. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die bei der Befolgung einer langen Serie von Navigationsschritten verwirrt werden können.

Alle Benutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere bei Websites oder Anwendungen mit großen Inhaltsmengen oder vielen Unterabschnitten. [Breadcrumbs](/de/docs/Glossary/Breadcrumb), [Sitemaps](/de/docs/Glossary/Site_map) und die aktuelle Seite in der Navigation als "aktuell" zu kennzeichnen sind Techniken, die helfen, den aktuellen Standort zu vermitteln.

## Lesbarkeit

[Richtlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt "machen Sie Textinhalte lesbar und verständlich". Für einige Benutzer ist es schwierig, die Bedeutung eines Wortes oder einer Phrase aus dem Kontext abzuleiten, insbesondere wenn das Wort oder die Phrase auf ungewöhnliche Weise verwendet wird oder eine spezialisierte Bedeutung hat.

Für diese Benutzer kann die Fähigkeit zu lesen und zu verstehen von der Verfügbarkeit spezifischer Definitionen oder der erweiterten Formen von Akronymen oder Abkürzungen abhängen. Einige Benutzer haben große Schwierigkeiten, geschriebene Wörter zu erkennen, aber sie verstehen äußerst komplexe und ausgefeilte Dokumente, wenn der Text laut vorgelesen wird oder wenn Schlüsselprozesse und Ideen visuell veranschaulicht werden.

### Declare the language of the page and any content not in that main language

Die Sprache jeder Seite muss durch Verwendung des [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attributs auf dem {{HTMLElement('html')}} Element deklariert werden. Fügen Sie das `lang` Attribut erneut für Texte ein, die in einer anderen Sprache als der Hauptsprache des Dokuments verfasst sind.

Die richtige Verwendung von `lang` ermöglicht es einigen Bildschirmlesegeräten, den Text korrekt anzusagen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Define unusual words and word usage

Einige Behinderungen erschweren das Verständnis nicht-wörtlicher Wortverwendungen, wie Idiome, umgangssprachliche Ausdrücke und spezialisierte Fachsprache. Nicht-muttersprachliche Sprecher können ebenfalls Schwierigkeiten mit diesen Begriffen haben. Wenn ein Wort oder eine Phrase eine einzigartige Bedeutung hat, geben Sie im Dokument eine Definition in einem Inline-Text oder einem verlinkten Glossar oder online Wörterbuch an. Wenn ein Wort oder eine Phrase mehr als eine Bedeutung hat, definieren Sie jede Verwendung.

### Define abbreviations

Abkürzungen können verwirrend sein für Menschen, die:

- Schwierigkeiten beim Dekodieren von Wörtern haben.
- Über begrenztes Gedächtnis verfügen.
- Schwierigkeiten haben, Kontext für das Verständnis zu nutzen.
- Sich auf Bildschirmvergrößerer verlassen (die oft kontextbezogene Hinweise reduzieren).

Bieten Sie bei der ersten Verwendung die erweiterte Form der Abkürzung an, gefolgt von der Abkürzung, die innerhalb eines {{HTMLElement('abbr')}} Elements platziert ist. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments steht (wie Latein), erklären Sie deren Bedeutung. Ziehen Sie auch in Betracht, [Ruby-Text](/de/docs/Web/HTML/Element/ruby) für Initialismen (Aussprache von Akronymen) zu verwenden.

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben sein. Eine gute Regel besteht darin, Inhalte so einfach zu gestalten, dass sie beim ersten Lesen verstanden werden können. Methoden, um dies zu erreichen, umfassen:

- Kurze, einfache Wörter zu verwenden.
- Kurze Sätze zu schreiben.
- Die aktive Stimme im Präsens zu verwenden.
- Korrekte Grammatik und Rechtschreibung zu verwenden.

Dies hilft Benutzern mit kognitiven Behinderungen, eine Textzusammenfassung (manchmal als TL;DR oder "Too long; didn't read" bezeichnet) auf einem niedrigen Lesestandardsniveau bereitzustellen. Eine weitere Technik besteht darin, begleitende visuelle Darstellungen bereitzustellen, um Ideen, Ereignisse und Prozesse zu veranschaulichen.

Es gibt Tools, die den Schwierigkeitsgrad Ihrer Inhalte bewerten können. Zum Beispiel hat dieses Dokument ein durchschnittliches Klassenstufenniveau von etwa 11. Dies bedeutet, dass es von einem englischen Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Tools können sogar Vorschläge zur Vereinfachung machen.

### Aussprache

Es gibt verschiedene Techniken, die helfen können, wie man Worte ausspricht:

- Die Aussprache direkt nach dem Wort bereitstellen.
- Einen Link zu einer Liste von Aussprachen bereitstellen.
- Ein Glossar mit Aussprache bereitstellen.
- Das {{HTMLElement('ruby')}} Element verwenden, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Die Bereitstellung von Anleitung zur Aussprache von Wörtern hilft vielen verschiedenen Art von Menschen, einschließlich solcher, die es bevorzugen, laut zu lesen, nicht-muttersprachlichen Sprechern und Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine andere Lösung besteht darin, Glyphen oder Akzentzeichen zu verwenden, um die Aussprache zu veranschaulichen. Wenn diese Technik jedoch verwendet wird, muss es einen Mechanismus geben, sie auszuschalten. Es ist auch hilfreich, einen Leitfaden zu den verwendeten Zeichen bereitzustellen, da deren Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Richtlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt "lassen Sie Webseiten vorhersehbar erscheinen und arbeiten". Dies ist ein Grundsatz des guten User-Erlebnisse-Designs. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dazu gehört Konsistenz im Seitenlayout und vorhersehbare interaktive Komponenten.

### Aktivierung nutzen, nicht den Fokus, um Kontext zu ändern

Das Erstellen eines Kontextwechsels sollte beabsichtigt sein. Deshalb sollte beim Empfang des Fokus auf ein UI-Feature keine weiteren benutzerbezogenen Aktionen auslösen. Stattdessen sollten Benutzer ein Feature aktivieren müssen, um den Wechsel auszulösen.

### Änderungseinstellung auf Basis einer aktiven Anforderung

Die Bedienung von Formularsteuerungen und die Eingabe von Daten sollten zu vorhersehbarem Verhalten führen. Änderungen im Kontext können Benutzer mit kognitiven Behinderungen verwirren und sollten daher nur dann auftreten, wenn klar ist, dass eine solche Änderung als Reaktion auf die Handlung des Benutzers geschehen wird.

Das Ändern des Status sollte eine bewusste Benutzerhandlung erfordern. Beispiele dafür sind das Aktivieren eines Kontrollkästchens, das Eingeben von Daten oder das Ändern einer Auswahloption. Stellen Sie auch sicher, dass Sie eine Übermittlungsschaltfläche bereitstellen, um die Änderung des Kontexts zu initiieren, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Navigation konsistent auf der gesamten Website halten

Halten Sie die Navigationsreihenfolge zwischen den Seiten konsistent. Wenn Sie beispielsweise eine Navigationsleiste auf mehreren Seiten haben, machen Sie die Navigation einheitlich auf der Website mit denselben Links an demselben Ort. Dies gilt nicht nur für die Navigation: Präsentieren Sie alle wiederholten Komponenten immer in derselben relativen Reihenfolge, wann immer sie erscheinen.

### Konsistente Beschriftung bereitstellen

Identische Funktionen sollten bei jeder Verwendung ähnliche Beschriftungen haben. Konsistente Schaltflächenbeschriftungen, alternative Texte für Symbole und Icons für ähnliche Interaktionen und so weiter, auch in verschiedenen Bereichen Ihrer Website, helfen all Ihren Benutzern.

### Seien Sie konsistent und vorhersehbar und verwenden Sie Normen

Während unbeschriftete Ikonografie nicht die effektivste Methode zur Informationsübermittlung ist, hilft die Beibehaltung der Verwendung der Symbole (und wenn beschriftet, des Beschriftungstextes) Menschen, zu verstehen, wofür das Symbol steht. Ändern Sie auch nicht die Standards, wie zum Beispiel die Rücktaste des Browsers. Wenn Sie einen Benutzer umleiten müssen, lassen Sie es den Benutzer vorher wissen.

## Eingabehilfe

[Richtlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft dabei, eine genaue Dateneingabe sicherzustellen und besagt "hilft Benutzern dabei, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen eher dazu geneigt, Fehler zu machen, weniger wahrscheinlich, einen Fehler zu bemerken, oder haben größere Schwierigkeiten, einen Fehler zu korrigieren, wenn sie einen gemacht haben.

Die Richtlinien zur Eingabehilfe zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere solche mit Behinderungen, Fehler machen, und, wenn sie einen Fehler machen, die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und alle Fehler erfolgreich beheben können.

### Automatisierte Fehlererkennung übermitteln

Benutzer müssen über den Fehler informiert werden und darüber, was falsch ist. Wenn eine clientseitige Fehlererkennung vorhanden ist, beachten Sie die folgenden Richtlinien, um den Fehler so effektiv wie möglich für den Benutzer zu gestalten:

- Der Fehler muss im Text beschrieben werden.
- Sicherstellen, dass die Fehlermeldung so spezifisch wie möglich ist.
- Text bereitstellen, um unvollständige erforderliche Felder zu identifizieren und textliche Beschreibungen, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler eine Formularübermittlung verhindert hat, auf den Fehler fokussieren. Wenn mehrere Fehler vorliegen, eine Zusammenfassung bereitstellen, bei der jeder Fehler mit dem dazugehörigen Eingabefeld verknüpft ist.
- Text zusammen mit der Verwendung von Symbolen, Bildern, Farben und so weiter einschließen. Einige Menschen haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben Schwierigkeiten, die textliche Version Ihrer Fehlermeldung zu verstehen. Für diese Menschen stellen Sie auch Dinge wie Symbole und Farben bereit.
- Geben Sie auch Rückmeldungen, wenn eine Formularübermittlung erfolgreich war.

### Anweisungen für Benutzereingaben bereitstellen

Beginnen Sie das Formular mit Textanweisungen zur Bedienung. Fügen Sie Labels oder Anweisungen hinzu, wenn Benutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}} Elemente verwenden.

Labels sollten beschreibend und nahe der dazugehörigen Eingabe platziert sein. Wenn ein spezifisches Eingabeformat erforderlich ist, stellen Sie ein Beispiel im richtigen Format bereit. Erwägen Sie auch eine serverseitige Validierung, um Eingabedaten zu formatieren und die Benutzerfreundlichkeit zu erhöhen.

Wenn eine Formularsteuerung erforderlich ist, geben Sie dies sowohl visuell als auch [per Code](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) an. Wenn eine Formularsteuerung den Kontext ändert, beschreiben Sie, was geschehen wird, auf eine Weise, die der Benutzer versteht, bevor sie die Kontextänderung verursacht.

### Fehlerempfehlung

Stellen Sie dem Benutzer empfohlene Eingaben zur Verfügung, wenn ein Eingabefehler automatisch erkannt wird und Vorschläge zur Korrektur bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck der Inhalte gefährden).

### Katastrophen verhindern

Für Übermittlungen, die zu rechtlichen, finanziellen oder anderen erheblichen Konsequenzen führen oder führen können, stellen Sie sicher, dass die Übermittlungen überprüft, bestätigt und/oder rückgängig gemacht werden können.

Von Benutzern eingegebene Daten sollten vor der Einreichung auf Fehler überprüft werden, und dem Benutzer sollte die Möglichkeit gegeben werden, sie zu korrigieren. Der Benutzer sollte in der Lage sein, Informationen zu überprüfen, zu bestätigen und zu korrigieren, bevor die endgültige Einreichung erfolgt. Stellen Sie auch sicher, dass Sie eine Bestätigungsschaltfläche zusätzlich zur Einreichungsschaltfläche bereitstellen.

Wenn eine Übermittlung eine rechtliche oder finanzielle Transaktion auslöst, bieten Sie eine festgelegte Zeitspanne an, innerhalb derer die Anforderung vom Benutzer geändert oder storniert werden kann.

### Hilfe bereitstellen

Kontextsensitive Hilfe sollte bereitgestellt werden. Wenn ein Formular Texteingaben erfordert, geben Sie Formularanweisungen an, die den Zweck und die erforderlichen Eingaben beschreiben. Fügen Sie Rechtschreibprüfung und Vorschläge für lange Texteingaben nicht nur hinzu, sondern auch Links zu Hilfe- und Unterstützungsunterlagen. Wenn ein spezifisches Datenformat für Eingaben erwartet wird, geben Sie ein Beispiel an.

## Hinweise

Obige sind gute Designpraktiken. Sie werden allen nützen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines des W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Web-Barrierefreiheitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Centers for Disease Control schätzen, dass es im Jahr 2018 bei 1 von 4 US-Bürgern eine Behinderung gibt und [kognitive Beeinträchtigung die häufigste bei jungen Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "geistige Behinderungen" bezeichnet. Im Vereinigten Königreich wird "intellektuelle Behinderungen" meist als "Lernschwierigkeiten" oder "Lernprobleme" bezeichnet.

## Siehe auch

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility)
- [Barrierefreiheit für Anfallsstörungen](/de/docs/Web/Accessibility/Seizure_disorders)
- [WCAG-Richtlinien verstehen](/de/docs/Web/Accessibility/Understanding_WCAG)
- [Überblick über Barrierefreiheit](/de/docs/Learn/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [kognitiver Zugänglichkeitsrichtlinien](#wcag-richtlinien)
- [The W3C's Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Cognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC-Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
