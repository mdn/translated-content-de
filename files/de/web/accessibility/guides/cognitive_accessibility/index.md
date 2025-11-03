---
title: Kognitive Zugänglichkeit
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Kognitive Zugänglichkeit umfasst Überlegungen zur Zugänglichkeit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Zugänglichkeit ein und beschreibt, wie die Zugänglichkeit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen: von Menschen mit geistigen Behinderungen, die möglicherweise die am stärksten eingeschränkten Fähigkeiten haben, bis zu altersbedingten Problemen mit Denken und Erinnern. Die Bandbreite umfasst auch Menschen mit psychischen Erkrankungen, wie Depressionen und Schizophrenie. Dazu gehören auch Menschen mit Lernbehinderungen, wie Legasthenie und Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS).

Obwohl es innerhalb der klinischen Definitionen kognitiver Beeinträchtigungen eine große Vielfalt gibt, erleben Menschen mit diesen Einschränkungen eine gemeinsame Reihe funktionaler Probleme. Diese Probleme umfassen Schwierigkeiten beim Verstehen von Inhalten, Erinnern an die Durchführung von Aufgaben und Verwirrung aufgrund inkonsistenter oder unkonventioneller Webseitenlayouts. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Zugänglichkeit ihrer Webseiten und Anwendungen zu verbessern.

## Überblick

Kognitive und geistige Behinderungen umfassen ein breites Spektrum und können momentane, vorübergehende oder dauerhafte Zustände sein. Zum Beispiel sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich zunehmend verschlechtern. Weitere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprechstörungen, Autismus, ADD/ADHS, Legasthenie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung kann darin bestehen, dass Personen von Substanzen wie Alkohol oder Drogen betroffen sind. Eine andere Form könnte Depression sein, wie beim Trauern um einen geliebten Menschen oder bei kurzzeitiger Traurigkeit durch einen Tweet oder ein Video, das sie gerade online gesehen haben. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die breite Palette kognitiver Unterschiede anzugehen, insbesondere wenn Lösungen für zwei verschiedene Menschen widersprüchlich sein können. Ein Ansatz, um damit umzugehen, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Zu den kognitiven Fähigkeiten gehören:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Art und Weise, beispielsweise durch Text-to-Speech oder Video;
- Bereitstellung leicht verständlicher Inhalte, wie beispielsweise Text, der nach Plain-Language-Standards geschrieben ist;
- Konzentrierung der Aufmerksamkeit auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung;
- Bereitstellung eines konsistenten Webseitenlayouts und einer konsistenten Navigation;
- Einbeziehen vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und violett, wenn sie besucht wurden;
- Aufteilen von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigern;
- Ermöglichen eines einfachen Website-Authentifikationsprozesses, ohne die Sicherheit zu gefährden; und
- Erleichtern des Ausfüllens von Formularen, zum Beispiel mit klaren Fehlermeldungen und einer Fehlerrückmeldung.

## WCAG-Richtlinien

WCAG, Web Content Accessibility Guidelines, enthält mehrere Richtlinien zur Verbesserung der kognitiven Zugänglichkeit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C), der wichtigsten internationalen Standardisierungsorganisation für das Internet, veröffentlicht. Diese Gruppe ist auch für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/Guides)-Richtlinien verantwortlich.

WCAG sind durch vier Prinzipien geleitet: Webseiten müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Zugänglichkeit sind.

Alle folgenden Richtlinien helfen mehr als nur Menschen mit kognitiven Behinderungen. Beispielsweise ist die Möglichkeit, die Ablaufzeit einer Anwendung zu verlängern, die einen Authentifizierungscode erfordert, der per Textnachricht an ein Mobilgerät gesendet wird, in den folgenden Szenarien hilfreich:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen, die ein schlechtes Kurzzeitgedächtnis haben oder Multitasking betreiben.
- Menschen, die weniger technikaffin sind.
- Menschen, die einen schlechten Drahtlos-Empfang haben.
- Menschen mit motorischen Steuerungsproblemen.

## Anpassungsfähigkeit

[Richtlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte **anpassbar** sein sollten". Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Bieten Sie beispielsweise {{Glossary("responsive_web_design", "responsive")}} Layouts mit einem einspaltigen mobilen Design.

Alle Informationen, einschließlich Struktur und Beziehungen, die durch die Präsentation vermittelt werden, sollten in einer Form verfügbar sein, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Zum Beispiel könnten die Informationen über ein Erzählwerkzeug laut vorgelesen werden. Ihre Inhalte so zu gestalten, dass sie von Software verstanden werden können, ist ein guter Weg, um sicherzustellen, dass sie in alternativen Präsentationsmodi verwendet werden können.

## Zeit

Es ist wichtig, Benutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erledigen. [Richtlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt, "geben Sie Benutzern genügend **Zeit**, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Prozess, der ohne Benutzerinitiierung nach einer festgelegten Zeit oder regelmäßig stattfindet, wie z.B. das Abmelden nach 30 Minuten oder 15 Minuten Zeit, um einen Kauf abzuschließen. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen auszuführen. Lösungen umfassen die Bereitstellung ausreichender zusätzlicher Zeit für Benutzer, um Aufgaben abzuschließen, oder die vollständige Beseitigung von Zeitbeschränkungen.

### Timer

Optionen zum Anpassen der Zeitvorgaben umfassen:

- Dem Benutzer zu erlauben, die Zeit entweder auszuschalten oder sie auf mindestens das Zehnfache der ursprünglichen Begrenzung anzupassen, bevor sie eintreten.
- Den Benutzer zu alarmieren und ihm einen Puffer von mindestens 20 Sekunden zu geben, um die Zeitüberschreitung um den Faktor 10 mit einer Aktion, wie dem Drücken der Leertaste, zu verlängern.

Bieten Sie eine Umschaltmöglichkeit an, die es Benutzern ermöglicht, eine längere Sitzungszeitbegrenzung zu aktivieren oder gar keine Sitzungszeitbegrenzung. Beispiele für zeitgesteuerte Inhalte sind Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn die Zeitbegrenzung länger als 20 Stunden ist, sind keine Vorkehrungen erforderlich.

### Bewegung, Blinken, Scrollen

Es ist wichtig, Benutzer nicht abzulenken, insbesondere solche mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder sich automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten dargestellt werden, muss der Benutzer die Möglichkeit haben, sie zu pausieren, zu stoppen, zu verstecken oder zu kontrollieren, es sei denn, sie stellen eine wesentliche Funktionalität dar. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder sich automatisch aktualisierenden Informationen die Bedeutung des Inhalts und/oder der Funktionalität grundlegend ändern würde **und** Informationen und Funktionalität nicht auf eine andere Weise erreicht werden können, die konform wäre. Dies schließt animierte GIFs ein, wenn das GIF länger als 5 Sekunden animiert.

Weitere zeitliche Kriterien sind zu beachten:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Entfernen Sie zur verbesserten Benutzerfreundlichkeit jede Zeitbegrenzung. Zeitgesteuerte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten ohne Ablenkung auf Inhalte fokussieren können. Der Benutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, es sei denn, es handelt sich um Situationen, die darauf abzielen, eine Person auf eine Notlage aufmerksam zu machen. Dies ermöglicht den Zugriff für Menschen mit kognitiven Behinderungen, indem es ihnen ermöglicht wird, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Benutzer die Verschiebung von Inhaltsaktualisierungen, indem Sie eine Möglichkeit bieten, Inhaltsaktualisierungen anzufordern, anstatt sie automatisch zu aktualisieren. Ermöglichen Sie auch eine Möglichkeit, nicht wesentliche Benachrichtigungen optional zu machen.
- Stellen Sie sicher, dass Personen eine Aktivität fortsetzen können, ohne Datenverlust nach einer erneuten Authentifizierung einer abgelaufenen Sitzung, zum Beispiel durch Speichern des Zustands eines Fragebogens. Stellen Sie sicher, dass die Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung des Benutzers geändert werden können. Kodieren Sie die Daten vor der erneuten Authentifizierung als versteckt oder verschlüsselt.
- Bieten Sie Warnungen über Inaktivität an, die zu Datenverlust führen können. Wenn eine Zeitüberschreitung verwendet wird, teilen Sie den Benutzern mit, wie viel Zeit genau dazu führen wird, dass die Sitzung abläuft und Daten verloren gehen. Die Ausnahme davon ist die Datenbewahrung für mehr als 20 Stunden, wenn keine Aktionen unternommen werden.

## Navigation

[Richtlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt, "bieten Sie Wege, um Benutzern zu helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden", und bietet 10 Richtlinien, um sicherzustellen, dass die Website navigierbar ist und Inhalte auffindbar sind:

### Einschließen eines `<title>`

Stellen Sie sicher, dass ein {{HTMLElement('title')}} für das Dokument enthalten ist, da Titel eine schnelle und einfache Referenzbeschreibung des Hauptpunkts des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren davon, in der Lage zu sein, den Zweck der Inhalte auf diese Weise zu identifizieren.

### Überschriften und Labels

Beziehen Sie klare und beschreibende Überschriften ein, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsbereichen verstehen können. Beschreibende Labels helfen Benutzern, spezifische Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen, und Personen mit eingeschränktem Kurzzeitgedächtnis profitieren davon, wenn Abschnittsüberschriften es ermöglichen, den Inhalt jedes Abschnitts vorherzusagen.

### Abschnittsüberschriften

Überschriften helfen, die Gesamtorganisation des Seiteninhalts zu definieren. Sie erleichtern die Navigation durch Seiteninhaltsabschnitte und bieten einen Mechanismus, der das Verständnis unterstützt. Beispiele für Überschriften sind Kapitel, Abschnitte und Unterabschnitte des Inhalts und so weiter.

Überschriften sind offensichtlichere Navigationshilfen im Vergleich zu anderen Methoden, um Seiteninhaltsabschnitte zu identifizieren (Rahmen, Leerraum, horizontale Linien usw.).

### Mehrere Wege, um Inhalte zu finden

Verschiedene Benutzer bevorzugen unterschiedliche Methoden zur Informationssuche, daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, damit Benutzer Inhalte auf Ihrer Website finden können.

Die Bereitstellung mehrerer Möglichkeiten zur Navigation Ihrer Website kann Menschen helfen, Informationen schneller zu finden. Einige Benutzer bevorzugen möglicherweise ein Inhaltsverzeichnis, eine Sitemap oder Suchfunktionalität anstelle des Lesens und Durchquerens mehrerer Seiten, um das zu finden, was sie benötigen. Andere bevorzugen es vielleicht, die Seite in einer sequentiellen Weise zu erkunden, von Seite zu Seite zu wechseln, um das Layout, den Inhalt und die Konzepte der Seite am besten zu verstehen.

### Möglichkeit, Inhaltsblöcke zu überspringen

Bieten Sie einen Mechanismus an, wie einen [Skip-Link](/de/docs/Web/HTML/Reference/Elements/a#skip_links), um Inhaltsblöcke zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Fokusreihenfolge ergibt Sinn

Die Fokusreihenfolge für interaktive Elemente sollte sinnvoll sein. Um dies zu erreichen, sollte die Reihenfolge im DOM der visuellen Reihenfolge entsprechen, welche wiederum der Tabulatorreihenfolge entsprechen sollte. Wenn die Tab-Reihenfolge springt, besonders in einer Art, die nicht der visuellen Reihenfolge beim Navigieren mit der Tastatur entspricht, können Benutzer verwirrt werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Benutzer mit einer Tastatur navigiert, sollte die Benutzeroberfläche offensichtlich machen, welches Element aktuell im Fokus ist. Ändern oder entfernen Sie das standardmäßige [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)-Styling des Browsers nicht, es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktexte vermitteln Bedeutung

Der Linktext sollte klar und prägnant kommunizieren, was der Benutzer als nächstes erwartet, wenn er sich entscheidet, ihn zu aktivieren. Schlecht formulierte Linktexte können Nutzer über deren Zweck oder Ziel verwirren.

Einige Formen von unterstützender Technologie ermöglichen es Benutzern, nach Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihres umgebenden nicht-linkhaltigen Inhalts entfernt, wodurch ein verständlicher Linktext umso wichtiger wird. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne anzugeben, wohin "hier" führt, ist der Zweck des Links unklar.

Für Bildschirmleser ist es wichtig, dass der verlinkte Text den Zweck jedes Links beschreibt. Wenn Sie zusätzlich Inhalte für Bildschirmleser zu Links hinzugefügt haben und diese Inhalte ausführlich und potenziell verwirrend für sehende Leser sein könnten, sollten Sie in Erwägung ziehen, den hinzugefügten Text so zu kürzen, dass er für diejenigen, die keine unterstützenden Technologien verwenden, visuell verborgen bleibt.

### Aktueller Standort ist verfügbar

Benutzer sollten in der Lage sein, sich innerhalb einer Website oder Anwendung zu orientieren. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die beim Folgen einer langen Navigation leicht verwirrt werden können.

Alle Benutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere für Websites oder Anwendungen mit großen Inhaltsmengen oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Breadcrumbs")}}, {{Glossary("Site_map", "Sitemaps")}} und das Kennzeichnen der aktuellen Seite in der Navigation als "aktuell" sind Techniken, die helfen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Richtlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt, "machen Sie Textinhalte lesbar und verständlich". Für einige Benutzer kann es schwierig sein, die Bedeutung eines Wortes oder Ausdrucks aus dem Kontext abzuleiten, insbesondere wenn das Wort oder der Ausdruck auf ungewöhnliche Weise verwendet wird oder eine spezielle Bedeutung hat.

Für diese Benutzer hängt die Fähigkeit zu lesen und zu verstehen möglicherweise von der Verfügbarkeit spezifischer Definitionen oder der erweiterten Form von Akronymen oder Abkürzungen ab. Einige Benutzer haben möglicherweise große Schwierigkeiten, geschriebene Wörter zu erkennen, verstehen jedoch äußerst komplexe und anspruchsvolle Dokumente, wenn der Text laut vorgelesen wird oder wenn wichtige Prozesse und Ideen visuell veranschaulicht werden.

### Deklarieren Sie die Sprache der Seite und alle Inhalte, die nicht in dieser Hauptsprache sind

Die Sprache jeder Seite muss durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut im {{HTMLElement('html')}}-Element deklariert werden. Fügen Sie das `lang`-Attribut erneut auf Text ein, der in einer anderen Sprache als der Hauptsprache des Dokuments ist.

Die ordnungsgemäße Verwendung von `lang` ermöglicht es einigen Screenreadern, den Text korrekt auszusprechen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Definieren Sie ungewöhnliche Wörter und Wortverwendungen

Einige Behinderungen erschweren das Verständnis nicht-wörtlicher Wortverwendungen, wie Idiome, umgangssprachliche Ausdrücke und spezialisiertes Fachjargon. Auch nicht muttersprachliche Sprecher dieser Sprache können mit diesen Begriffen Schwierigkeiten haben. Wenn ein Wort oder Satz eine einzigartige Bedeutung hat, geben Sie im Dokument eine Definition direkt oder verlinkt, innerhalb eines Glossars oder zu einem Online-Wörterbuch an. Wenn ein Wort oder Satz verwendet wird, um mehr als eine Sache zu bedeuten, definieren Sie jede Verwendung.

### Definieren Sie Abkürzungen

Abkürzungen können für Menschen verwirrend sein, die:

- Schwierigkeiten mit dem Dekodieren von Wörtern haben.
- Ein eingeschränktes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zu verwenden, um das Verständnis zu fördern.
- Sich auf Bildschirmlupen verlassen (die oft kontextuelle Hinweise reduzieren).

Geben Sie beim ersten Einsatz die erweiterte Form der Abkürzung an, gefolgt von der Abkürzung im {{HTMLElement('abbr')}}-Element. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort in einer anderen Sprache als der Hauptsprache des Dokuments ist (z.B. Latein), erklären Sie ihre Bedeutung. Erwägen Sie auch, [Ruby-Text](/de/docs/Web/HTML/Reference/Elements/ruby) für Initialismus (Aussprache von Akronymen) zu verwenden.

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben werden. Eine gute Regel ist, Inhalte so einfach zu machen, dass sie beim ersten Lesen verstanden werden können. Methoden, um dies zu erreichen, sind:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung des aktiven Stils im Präsens.
- Verwendung korrekter Grammatik und Rechtschreibung.

Benutzern mit kognitiven Behinderungen hilft es, eine Textzusammenfassung (manchmal als TL;DR oder "too long; didn't read" bezeichnet) auf einem niedrigen Lesenniveau bereitzustellen. Eine andere Technik, die Sie verwenden können, ist die Bereitstellung von begleitenden visuellen Elementen, die helfen, Ideen, Ereignisse und Prozesse zu erklären.

Es gibt Tools, die das Niveau Ihrer Inhalte bewerten können. Zum Beispiel hat dieses Dokument einen durchschnittlichen Schwierigkeitsgrad von etwa 11. Das bedeutet, dass es von einem Englisch-Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Tools können sogar Vorschläge zur Vereinfachung machen.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen den Aussprechen von Wörtern beizubringen:

- Geben Sie die Aussprache sofort nach dem Wort an.
- Verlinken Sie zu einer Liste von Aussprachen.
- Bieten Sie ein Glossar mit Aussprache.
- Verwenden Sie das {{HTMLElement('ruby')}}-Element, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Die Bereitstellung von Anleitungen zur Aussprache von Wörtern hilft vielen verschiedenen Arten von Menschen, einschließlich derjenigen, die bevorzugt laut lesen, nicht muttersprachliche Sprecher und Menschen, die die Bedeutung eines Begriffs im Kontext nicht kennen.

Eine andere Lösung ist die Verwendung von Glyphen oder diakritischen Zeichen, um die Aussprache zu illustrieren. Wenn jedoch diese Technik verwendet wird, muss es eine Möglichkeit geben, sie auszuschalten. Darüber hinaus ist es hilfreich, einen Leitfaden zu den verwendeten Zeichen zu verlinken, da ihre Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersagbarkeit

WCAG [Richtlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt, "Gestalten Sie Webseiten so, dass sie in vorhersehbarer Weise erscheinen und funktionieren". Dies ist ein Grundsatz des guten Benutzererlebnisdesigns. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dies umfasst Konsistenz im Seitenlayout und vorhersehbare interaktive Komponenten.

### Verwenden Sie Aktivierung, nicht Fokus, um den Kontext zu ändern

Das Erzeugen einer Kontextänderung sollte gezielt sein. Aus diesem Grund sollte eine UI-Funktion, die [Fokus](/de/docs/Web/API/HTMLElement/focus) erhält, keine weiteren benutzerbezogenen Aktionen auslösen. Vielmehr sollten Benutzer eine Funktion "aktivieren" müssen, um die Änderung auszulösen.

### Änderungseinstellung basierend auf einer aktiven Anfrage

Die Bedienung und Dateneingabe von Formularsteuerungen sollte zu vorhersehbarem Verhalten führen. Änderungen des Kontexts können Benutzer mit kognitiven Behinderungen verwirren und sollten daher nur erfolgen, wenn klar ist, dass eine solche Änderung in Reaktion auf die Benutzeraktion geschieht.

Eine Zustandsänderung sollte eine absichtliche Benutzeraktion erfordern. Beispiele hierfür sind das Aktivieren eines Kontrollkästchens, das Eingeben von Daten oder das Ändern einer Auswahloption. Stellen Sie außerdem sicher, dass ein Senden-Button zur Einleitung der Kontextänderung bereitgestellt wird, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Halten Sie die Navigation über die Website hinweg konsistent

Halten Sie die Navigationsreihenfolge zwischen den Seiten konsistent. Wenn Sie beispielsweise eine Navigationsleiste auf mehreren Seiten haben, machen Sie diese Navigation über die gesamte Website hinweg einheitlich, mit denselben Links an derselben Position. Dies gilt nicht nur für die Navigation: Präsentieren Sie alle wiederholten Komponenten jedes Mal in derselben relativen Reihenfolge, wenn sie erscheinen.

### Sorgen Sie für konsistente Labeling

Identische Funktionen sollten jedes Mal ähnlich gelabelt werden. Konsistente Button-Labels, Alternativtexte für Icons und Piktogramme für ähnliche Interaktionen und so weiter, selbst in verschiedenen Bereichen Ihrer Website, helfen allen Benutzern.

### Seien Sie konsistent und vorhersehbar, und verwenden Sie Normen

Auch wenn unbeschriftete Piktogramme nicht die effektivste Methode zur Informationsvermittlung sind, hilft es Menschen, zu verstehen, was das Icon darstellt, wenn die Verwendung der Piktogramme (und wenn sie beschriftet sind, deren Beschriftungstext) konsistent bleibt. Ändern Sie keinesfalls Standard-Einstellungen wie den Zurück-Button des Browsers. Wenn Sie einen Benutzer weiterleiten müssen, informieren Sie den Benutzer vorher darüber.

## Unterstützung bei der Eingabe

[Richtlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft sicherzustellen, dass Benutzereingaben genau sind, indem sie "Benutzern helfen, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen eher dazu neigen, Fehler zu machen, weniger wahrscheinlich, einen Fehler zu bemerken oder Schwierigkeiten haben, einen Fehler zu korrigieren, sobald sie ihn gemacht haben.

Die Richtlinien zur Unterstützung bei der Eingabe zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere solche mit Behinderungen, einen Fehler machen, und, falls sie einen Fehler machen, die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und erfolgreich einen vorhandenen Fehler beheben können.

### Kommunikation automatischer Fehlererkennung

Benutzer müssen auf den Fehler aufmerksam gemacht werden und darüber informiert werden, was falsch ist. Wenn eine clientseitige Fehlererkennung vorliegt, befolgen Sie die folgenden Richtlinien, um den Fehler so effektiv wie möglich an den Benutzer zu übermitteln:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Geben Sie Text an, um unvollständige erforderliche Felder zu identifizieren und textliche Beschreibungen, falls ein eingegebener Wert ungültig ist.
- Wenn der Fehler das Absenden eines Formulars verhindert hat, fokussieren Sie den Fehler. Falls mehrere Fehler vorhanden sind, bieten Sie eine Zusammenfassung mit jedem Fehler, der zum zugehörigen Eingabefeld verlinkt ist.
- Schließen Sie Text zusammen mit der Verwendung von Icons, Bildern, Farben und so weiter ein. Einige Menschen haben Schwierigkeiten, die Bedeutung von Icons und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, die Textversion Ihrer Fehlermeldung zu verstehen. Für diese Personen bieten Sie auch Dinge wie Icons und Farben an.
- Außerdem bieten Sie eine Rückmeldung über eine erfolgreiche Formularübermittlung an.

### Bereitstellen von Anweisungen zur Benutzereingabe

Beginnen Sie das Formular mit Textanweisungen, wie es zu bedienen ist. Fügen Sie Labels oder Anweisungen hinzu, wenn Benutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}} Elemente verwenden.

Labels sollten beschreibend sein und in der Nähe der Eingabe platziert werden, auf die sie sich beziehen. Wenn ein spezifisches Format für die Eingabe erforderlich ist, bieten Sie ein Beispiel an, das im richtigen Format formatiert ist. Ziehen Sie außerdem in Betracht, serverseitige Validierungen durchzuführen, um benutzerdefinierte Eingabedaten zu formatieren und die Eingabe von Benutzern zu erleichtern.

Wenn ein Formularelement erforderlich ist, kennzeichnen Sie es sowohl visuell als auch [per Code](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required). Wenn eine Formulareingabe den Kontext ändert, beschreiben Sie, was geschehen wird, auf eine Weise, die der Benutzer versteht, bevor er die Kontextänderung verursacht.

### Fehlerkorrektur-Vorschläge

Bieten Sie dem Benutzer vorgeschlagene Eingaben an, wenn ein Eingabefehler automatisch erkannt wird und Korrekturvorschläge bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck der Inhalte gefährden).

### Katastrophen verhindern

Für Übermittlungen, die rechtliche, finanzielle oder andere erhebliche Konsequenzen verursachen oder verursachen können, stellen Sie sicher, dass die Übermittlungen überprüft, bestätigt und/oder rückgängig gemacht werden können.

Von Benutzern eingegebene Daten sollten vor der Übermittlung auf Fehler geprüft werden, und dem Benutzer sollte die Möglichkeit gegeben werden, sie zu korrigieren. Der Benutzer sollte in der Lage sein, Informationen vor der endgültigen Absendung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie außerdem sicher, dass ein Bestätigungs-Kontrollkästchen zusätzlich zu einem Senden-Button enthalten ist.

Wenn eine Übermittlung eine rechtliche oder finanzielle Transaktion verursacht, geben Sie einen Zeitrahmen an, innerhalb dessen der Benutzer die Anforderung ändern oder stornieren kann.

### Hilfe bereitstellen

Kontextabhängige Hilfe sollte verfügbar gemacht werden. Wenn ein Formular Texteingaben erfordert, geben Sie Formularanweisungen an, die den Zweck und die erforderliche Eingabe beschreiben. Fügen Sie Rechtschreibprüfung und Vorschläge für Langformtexteingaben hinzu sowie Links zu Hilfe- und Unterstützungsdokumenten. Wenn ein spezifisches Datenformat für die Eingabe erwartet wird, geben Sie ein Beispiel an.

## Anmerkungen

Die oben genannten Best Practices sind gut gestaltete Prinzipien. Sie nützen jedem.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines des W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Webseitenzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die United States Centers for Disease Control schätzen, dass 2018 etwa 1 von 4 US-Bürgern behindert ist, und von denen [kognitive Beeinträchtigung die häufigste bei jungen Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurde "intellektuelle Behinderung" früher als "geistige Zurückgebliebenheit" bezeichnet. Im Vereinigten Königreich wird "intellektuelle Behinderung" häufig als "Lernbehinderung" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Barrierefreiheit für Anfallsstörungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Verständnis der WCAG-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Übersicht über Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Richtlinien für Web Content Accessibility](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [Richtlinien zur kognitiven Zugänglichkeit](#wcag-richtlinien)
- [Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Cognitive-Informationen](https://webaim.org/articles/cognitive/)
- [CDC-Informationen zu Behinderungen](https://www.cdc.gov/disability-and-health/)
