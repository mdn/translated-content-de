---
title: Kognitive Zugänglichkeit
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Kognitive Zugänglichkeit umfasst Überlegungen zur Barrierefreiheit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Zugänglichkeit ein und erläutert, wie die Zugänglichkeit des Internets für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit geistigen Behinderungen, die möglicherweise die am stärksten eingeschränkten Fähigkeiten haben, bis zu altersbedingten Problemen mit Denken und Erinnern. Dazu gehören Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie sowie Menschen mit Lernbehinderungen wie Dyslexie und Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS).

Obwohl es viele Unterschiede in den klinischen Definitionen von kognitiven Beeinträchtigungen gibt, erleben Menschen mit diesen Beeinträchtigungen eine Reihe gemeinsamer funktionaler Probleme. Diese Probleme umfassen Schwierigkeiten beim Verständnis von Inhalten, beim Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung durch inkonsistente oder unkonventionelle Webseiten-Layouts. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Zugänglichkeit ihrer Websites und Anwendungen zu verbessern.

## Überblick

Kognitive und geistige Behinderungen decken ein breites Spektrum ab und können momentane, vorübergehende oder dauerhafte Zustände sein. Zum Beispiel sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich zunehmend verschlimmern. Weitere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprechstörungen, Autismus, ADD/ADHS, Dyslexie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnten Menschen sein, die von Substanzen wie Alkohol oder Drogen beeinflusst sind. Eine weitere Form kann Depression sein, etwa bei Trauer über den Verlust eines geliebten Menschen oder bei kurzfristiger Traurigkeit durch einen Tweet oder ein Video, das sie gerade online gesehen haben. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag eine überwältigende Herausforderung erscheinen, die Vielzahl an kognitiven Unterschieden zu adressieren, zumal Lösungen für zwei verschiedene Personen im Konflikt stehen können. Eine Möglichkeit, dies zu bewältigen, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Zu den kognitiven Fähigkeiten gehören:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verständnis und Entscheidungsfindung

Ein fundierter Ansatz zur Bereitstellung barrierefreier Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z. B. durch Text-to-Speech oder Video;
- Lieferung leicht verständlicher Inhalte, wie zum Beispiel Texte, die nach Standards der einfachen Sprache geschrieben sind;
- Aufmerksamkeit auf wichtige Inhalte lenken;
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung;
- Bereitstellung eines konsistenten Webseitendesigns und einer konsistenten Navigation;
- Integration vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- möglichst einfache Authentifizierung auf der Website ohne Kompromittierung der Sicherheit; und
- einfache Ausfüllbarkeit von Formularen, etwa durch klare Fehlermeldungen und Fehlerbehebung.

## WCAG-Richtlinien

WCAG, die Web Content Accessibility Guidelines, enthalten mehrere Richtlinien zur Verbesserung der kognitiven Zugänglichkeit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortiums (W3C) veröffentlicht, der wichtigsten internationalen Normungsorganisation für das Internet. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/Guides) Richtlinien.

WCAG basieren auf vier Prinzipien: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Zugänglichkeit sind.

Alle folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. Zum Beispiel hilft die Möglichkeit, die Ablaufzeit bei einer Anwendung zu verlängern, die einen Authentifizierungscode erfordert, der per SMS an ein Mobilgerät gesendet wird, in folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit einem schlechten Kurzzeitgedächtnis oder die Multitasking betreiben.
- Menschen, die weniger technikaffin sind.
- Menschen mit schlechter drahtloser Verbindung.
- Menschen mit motorischen Kontrollproblemen.

## Anpassungsfähigkeit

[Leitlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte **anpassbar** sein sollten". Erstellen Sie Inhalte, die auf verschiedene Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Beispielsweise bieten Sie {{Glossary("responsive_web_design", "responsive")}} Layouts mit einem einspaltigen mobilen Design an.

Alle Informationen, einschließlich der durch die Präsentation vermittelten Struktur und Beziehungen, sollten in einer Form verfügbar sein, die von allen Nutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Beispielsweise könnten die Informationen über ein Erzählungstool laut vorgelesen werden. Ihre Inhalte so zu gestalten, dass sie von der Software verstanden werden können, ist eine gute Möglichkeit, sicherzustellen, dass sie in alternativen Präsentationsmodi verwendet werden können.

## Zeit

Es ist wichtig, den Nutzern die Zeit zu geben, die sie zum Erledigen von Aufgaben benötigen. [Leitlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt, dass "Nutzern genügend **Zeit** gegeben werden soll, um Inhalte zu lesen und zu verwenden".

Ein **Zeitlimit** ist jeder Prozess, der nach einer festgelegten Zeit oder regelmäßig ohne Benutzerinitiation abläuft, wie z. B. das automatische Abmelden nach 30 Minuten oder die Begrenzung auf 15 Minuten für einen Kauf. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen auszuführen. Lösungen umfassen, Nutzern genügend zusätzliche Zeit zu geben, um Aufgaben zu erledigen, oder Zeitbeschränkungen ganz zu eliminieren.

### Timer

Optionen zur Anpassung der Zeitanforderungen umfassen:

- Dem Nutzer die Möglichkeit geben, die Zeit auszuschalten oder auf mindestens das zehnfache des ursprünglichen Limits anzupassen, bevor er auf dieses trifft.
- Der Nutzer wird benachrichtigt und erhält ein Puffer von mindestens 20 Sekunden, um die Ablaufdauer mit einer Aktion, wie dem Drücken der Leertaste, um den Faktor 10 zu verlängern.

Stellen Sie einen Schalter auf den Inhalt bereit, der es Benutzern ermöglicht, eine längere Sitzungszeitbegrenzung oder gar keine Sitzungsbeschränkung zu aktivieren. Beispiele für zeitlich gesteuerte Inhalte sind Formulare, zeitlich begrenzte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden ist, sind keine Vorkehrungen erforderlich.

### Bewegend, blinkend, scrollend

Es ist wichtig, Benutzer nicht abzulenken, insbesondere solche mit kognitiven Behinderungen.

Wenn bewegende, blinkende, scrollende oder sich automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, diese zu pausieren, zu stoppen, zu verbergen oder zu kontrollieren, es sei denn, es handelt sich um eine wesentliche Funktionalität. „Wesentlich“ bedeutet, dass das Entfernen der bewegenden, blinkenden, scrollenden oder sich automatisch aktualisierenden Informationen die Bedeutung der Inhalte und/oder der Funktionalität grundlegend ändern würde, **und** dass Informationen und Funktionalität nicht auf eine andere Weise erreicht werden können, die konform wäre. Dies schließt animierte GIFs ein, wenn die Gif-Animation länger als 5 Sekunden dauert.

Weitere zeitliche Kriterien, die zu berücksichtigen sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Zur Verbesserung der Benutzerfreundlichkeit entfernen Sie alle Zeitbeschränkungen. Zeitgesteuerte Inhalte sollten ebenfalls vermieden werden, ausgenommen sind nicht interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten sich ohne Ablenkungen auf Inhalte konzentrieren können. Der Nutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Situationen, in denen eine Benachrichtigung über einen Notfall erforderlich ist. Dies gewährleistet den Zugang für Menschen mit kognitiven Behinderungen, indem sie sich auf den Hauptzweck der Inhalte konzentrieren können. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen zu verschieben, indem Sie eine Möglichkeit bieten, Inhaltsaktualisierungen anzufordern, anstatt diese automatisch zu aktualisieren. Außerdem ist es wichtig, eine Option bereitzustellen, um nicht wesentliche Benachrichtigungen optional zu machen.
- Sicherstellen, dass Personen eine Aktivität fortsetzen können, ohne Datenverlust nach der Neuauthentifizierung einer abgelaufenen Sitzung, z. B. durch Speicherung des Zustands eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer Benutzerneuauthentifizierung geändert werden können. Verschlüsseln oder verstecken Sie vor der Neuauthentifizierung die Daten.
- Bereitstellung von Warnhinweisen über Inaktivität, die zu Datenverlust führen kann. Wenn ein Timeout verwendet wird, informieren Sie die Benutzer genau, wie viel Zeit zu einem Sitzungs-Timeout und Datenverlust führen könnte. Die Ausnahme besteht darin, Daten länger als 20 Stunden zu erhalten, wenn keine Aktionen vorgenommen werden.

## Navigation

[Leitlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt, dass "Möglichkeiten geboten werden sollen, die Benutzern helfen, zu navigieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden" und bietet 10 Richtlinien, um sicherzustellen, dass die Website navigierbar ist und Inhalte auffindbar sind:

### Ein `<title>` hinzufügen

Stellen Sie sicher, dass ein {{HTMLElement('title')}} für das Dokument enthalten ist, da Titel eine schnelle und leicht zu referenzierende Beschreibung des Hauptpunktes des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwächen profitieren alle davon, auf diese Weise den Zweck von Inhalten identifizieren zu können.

### Überschriften und Beschriftungen

Fügen Sie klare und beschreibende Überschriften ein, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Beschriftungen helfen Benutzern, spezifische Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen, und Menschen mit eingeschränktem Kurzzeitgedächtnis profitieren, wenn Überschriften es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die gesamte Organisation des Seiteninhalts zu definieren. Sie erleichtern die Navigation durch Inhaltsabschnitte der Seite und bieten einen Mechanismus zur Unterstützung des Verständnisses. Beispiele für Überschriften sind Kapitel, Abschnitte und Unterabschnitte des Inhalts usw.

Überschriften sind im Vergleich zu anderen Methoden zur Identifizierung von Seitensektionsinhalten (Ränder, Leerraum, horizontale Linien usw.) offensichtlichere Navigationshilfen.

### Mehrere Möglichkeiten, Inhalte zu finden

Verschiedene Benutzer bevorzugen unterschiedliche Methoden, um Informationen zu finden, daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, um Inhalte auf Ihrer Website zu lokalisieren.

Bereitstellung von mehr als einer Möglichkeit, die Website zu navigieren, kann Menschen helfen, Informationen schneller zu finden. Einige Benutzer bevorzugen möglicherweise ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktion anstatt mehrere Seiten zu lesen und zu durchqueren, um das zu finden, was sie benötigen. Andere bevorzugen es möglicherweise, die Website nacheinander zu erkunden, von Seite zu Seite, um das Layout, den Inhalt und die Konzepte der Website besser zu verstehen.

### Möglichkeit, Blöcke von Inhalten zu überspringen

Bereitstellung eines Mechanismus, wie eines [Sprunglinks](/de/docs/Web/HTML/Element/a#skip_links), um Blöcke von Inhalten zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Die Reihenfolge des Fokus ergibt Sinn

Die Fokusreihenfolge für interaktive Elemente sollte sinnvoll sein. Um dies zu erreichen, sollte die Reihenfolge des DOM mit der visuellen Reihenfolge übereinstimmen, die wiederum mit der Tab-Reihenfolge übereinstimmen sollte. Wenn die Tab-Reihenfolge herumspringt, insbesondere auf eine Weise, die nicht mit der visuellen Reihenfolge beim Navigieren mit der Tastatur übereinstimmt, können Benutzer desorientiert werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Benutzer die Tastatur zur Navigation verwendet, sollte die UI offensichtlich machen, welches Element derzeit den Fokus hat. Ändern oder entfernen Sie nicht das Standard-Styling des Browsers für [`:focus`](/de/docs/Web/CSS/:focus), es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktexte vermitteln Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, was der Benutzer erwarten sollte, als Nächstes navigiert zu werden, wenn er sich entscheidet, ihn zu aktivieren. Schlecht formulierte Linktexte können Benutzer über ihren Zweck oder ihre Bestimmung verwirren.

Einige Formen von unterstützender Technologie erlauben es Benutzern, nach Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihrer umgebenden nicht-linken Inhalte entfernt, was die Notwendigkeit für verständliche Linktexte noch wichtiger macht. Ein Beispiel für eine schlechte Benutzererfahrung ist eine Seite voller Links, deren Texte "Hier klicken" lauten. Ohne anzugeben, wohin "hier" führt, ist der Zweck des Links unklar.

Für Bildschirmlesegeräte ist es entscheidend, dass der verknüpfte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalte zu Links für Bildschirmlesegeräte hinzugefügt haben und diese Inhalte lang und potenziell verwirrend für sehende Leser sind, überlegen Sie, die hinzugefügten Texte abzuschneiden, um sie optisch für Personen, die keine unterstützenden Technologien verwenden, auszublenden.

### Aktueller Standort ist verfügbar

Benutzer sollten in der Lage sein, sich innerhalb einer Website oder Anwendung zu orientieren. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die möglicherweise verwirrt werden, wenn sie einer langen Reihe von Navigationsschritten folgen.

Alle Benutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere für Websites oder Anwendungen mit großen Mengen an Inhalten oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Breadcrumbs")}}, {{Glossary("Site_map", "Sitemaps")}} und das Identifizieren der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die helfen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Leitlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt, dass "Textinhalte lesbar und verständlich gemacht werden sollen". Für einige Benutzer ist es schwierig, die Bedeutung eines Wortes oder Satzes aus dem Kontext zu erschließen, insbesondere wenn das Wortoder der Satz auf eine ungewöhnliche Weise verwendet wird oder eine spezialisierte Bedeutung erhalten hat.

Für diese Benutzer kann die Fähigkeit zu lesen und zu verstehen davon abhängen, dass spezifische Definitionen oder die ausgeschriebenen Formen von Akronymen oder Abkürzungen verfügbar sind. Einige Benutzer haben große Schwierigkeiten, geschriebene Wörter zu erkennen, obwohl sie extrem komplexe und ausgeklügelte Dokumente verstehen, wenn der Text laut vorgelesen wird oder wenn Schlüsselprozesse und -ideen visuell veranschaulicht werden.

### Die Sprache der Seite und alle Inhalte, die nicht in dieser Hauptsprache sind, deklarieren

Die Sprache jeder Seite muss durch die Verwendung des [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attributs auf das {{HTMLElement('html')}} Element deklariert werden. Fügen Sie das `lang`-Attribut erneut bei Text ein, der in einer anderen Sprache als der Hauptsprache des Dokuments verfasst ist.

Die korrekte Nutzung von `lang` ermöglicht es einigen Bildschirmlesegeräten, den Text korrekt in synthetische Sprache umzuwandeln. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Ungewöhnliche Wörter und Wortverwendungen definieren

Einige Behinderungen erschweren das Verständnis von nicht wörtlicher Wortverwendung, wie Idiomen, umgangssprachlichen Ausdrücken und Fachjargon. Auch Nichtmuttersprachler können mit diesen Begriffen Probleme haben. Wenn ein Wort oder Satz eine einzigartige Bedeutung hat, stellen Sie innerhalb des Dokuments eine Inline-Definition zur Verfügung oder verlinken Sie auf ein Glossar oder ein Online-Wörterbuch. Wenn ein Wort oder Satz mehr als eine Bedeutung hat, definieren Sie jede Verwendung.

### Abkürzungen definieren

Abkürzungen können verwirrend sein für Menschen, die:

- Schwierigkeiten beim Entziffern von Wörtern haben.
- Ein eingeschränktes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zur Unterstützung des Verständnisses zu verwenden.
- Bildschirmvergrößerer verwenden (die oft kontextuelle Anhaltspunkte reduzieren).

Bieten Sie die ausgeschriebene Form der Abkürzung an, wenn diese das erste Mal verwendet wird, gefolgt von der Abkürzung innerhalb eines {{HTMLElement('abbr')}} Elements. Wenn eine Abkürzung keine ausgeschriebene Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments verfasst ist (wie Latein), erklären Sie seine Bedeutung. Erwägen Sie auch, [Ruby-Text](/de/docs/Web/HTML/Element/ruby) für Initialismen (Aussprachen von Akronymen) zu verwenden.

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben werden. Eine gute Regel ist, Inhalte so einfach zu gestalten, dass sie beim ersten Mal verstanden werden können. Methoden, dies zu erreichen, umfassen:

- Verwenden Sie kurze, einfache Wörter.
- Schreiben Sie kurze Sätze.
- Verwenden Sie die aktive Stimme in der Gegenwartsform.
- Verwenden Sie korrekte Grammatik und Rechtschreibung.

Es hilft Nutzern mit kognitiven Behinderungen, eine Textzusammenfassung (manchmal als TL;DR oder "too long; didn't read" bezeichnet) auf einem niedrigen Lesestufen-Niveau bereitzustellen. Eine andere Technik, die Sie verwenden können, ist die Bereitstellung von begleitenden visuellen Darstellungen, um Ideen, Ereignisse und Prozesse zu veranschaulichen.

Es gibt Tools, die das Niveau Ihrer Inhalte bewerten können. Beispielsweise hat dieses Dokument ein durchschnittliches Klassenstufenniveau von etwa 11. Das bedeutet, dass es von einem englischen Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Tools können sogar Vorschläge geben, um es zu vereinfachen.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen die Aussprache von Wörtern beizubringen:

- Geben Sie die Aussprache direkt nach dem Wort an.
- Verlinken Sie zu einer Liste von Aussprachen.
- Stellen Sie ein Glossar mit Aussprachen zur Verfügung.
- Verwenden Sie das {{HTMLElement('ruby')}} Element, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Die Bereitstellung von Anleitungen zur Aussprache von Wörtern hilft vielen verschiedenen Arten von Menschen, einschließlich derjenigen, die es bevorzugen, laut zu lesen, Nichtmuttersprachler der Sprache sowie Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine andere Lösung ist die Verwendung von Glyphen oder diakritischen Zeichen, um die Aussprache zu veranschaulichen. Wenn diese Technik jedoch angewendet wird, muss es einen Mechanismus geben, um sie auszuschalten. Weiterhin ist es hilfreich, einen Link zu einer Anleitung für die verwendeten Markierungen bereitzustellen, da deren Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Leitlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt "Webseiten sollen so erscheinen und funktionieren, dass es vorhersehbar ist". Dies ist ein Grundsatz guten Benutzererfahrungsdesigns. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dazu gehört die Konsistenz im Layout der Seite und in den vorhersehbaren interaktiven Komponenten.

### Verwenden Sie Aktivierung, nicht Fokus, um den Kontext zu ändern

Das Erzeugen einer Kontextänderung sollte beabsichtigt sein. Aus diesem Grund, wenn ein UI-Feature den [Fokus](/de/docs/Web/API/HTMLElement/focus) erhält, sollte es keine weiteren Aktionen auslösen, die der Benutzer nicht sieht. Vielmehr sollten Benutzer ein Feature aktivieren, um die Änderung auszulösen.

### Änderungseinstellung basierend auf einer aktiven Anfrage

Der Betrieb von Formularelementen und die Dateneingabe sollten zu vorhersehbarem Verhalten führen. Änderungen im Kontext können Benutzer mit kognitiven Behinderungen verwirren und sollten daher nur erfolgen, wenn klar ist, dass eine solche Änderung als Ergebnis der Benutzeraktion geschehen wird.

Zustandsänderungen sollten eine bewusste Benutzeraktion erfordern. Beispiele hierfür sind das Ankreuzen eines Kontrollkästchens, das Eingeben von Daten oder das Ändern einer Auswahlauswahl. Stellen Sie auch sicher, dass ein Absende-Button bereitgestellt wird, um die Kontextänderung einzuleiten, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Halten Sie die Navigation konsistent auf der Website

Halten Sie die Reihenfolge der Navigation zwischen Seiten konsistent. Wenn Sie z. B. eine Navigationsleiste auf mehreren Seiten haben, gestalten Sie diese einheitlich auf der gesamten Website mit denselben Links an derselben Position. Dies gilt nicht nur für die Navigation: Präsentieren Sie alle sich wiederholenden Komponenten bei jedem Erscheinen in derselben relativen Reihenfolge.

### Stellen Sie konsistente Beschriftungen bereit

Identische Funktionen sollten jedes Mal ähnliche Bezeichnungen haben, wenn sie genutzt werden. Konsistente Beschriftungen von Schaltflächen, alternativen Texten für Symbole und Symbolik für ähnliche Interaktionen usw., selbst in verschiedenen Abschnitten Ihrer Website, helfen allen Ihren Benutzern.

### Seien Sie konsistent und vorhersehbar und verwenden Sie Normen

Während nicht beschriftete Symbolik nicht die effektivste Methode zur Übermittlung von Informationen ist, hilft das Beibehalten der Symbole (und wenn beschriftet, deren Beschriftungstext) konsistent, Menschen zu verstehen, was das Symbol repräsentiert. Ändern Sie auch keine Standardfunktionen wie die Zurück-Schaltfläche des Browsers. Wenn Sie einen Benutzer umleiten müssen, informieren Sie vorher darüber.

## Eingabehilfe

[Leitlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, eine korrekte Dateneingabe sicherzustellen, und besagt "Helfen Sie den Benutzern dabei, Fehler zu vermeiden und zu korrigieren". Obwohl wir alle Fehler machen, sind einige Menschen eher dazu geneigt, Fehler zu machen, weniger wahrscheinlich, einen Fehler zu bemerken, oder haben Schwierigkeiten, einen Fehler zu korrigieren, nachdem er gemacht wurde.

Die Eingabehilfe-Richtlinien zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere Menschen mit Behinderungen, einen Fehler machen, und, wenn sie einen Fehler machen, die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und erfolgreich alle Fehler beheben können.

### automatisierte Fehlererkennung vermitteln

Benutzer müssen auf den Fehler aufmerksam gemacht und informiert werden, was falsch ist. Wenn eine clientseitige Fehlererkennung vorliegt, beachten Sie die folgenden Richtlinien, um den Fehler beim Benutzer als effektiv zu vermitteln:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Stellen Sie Text bereit, um erforderliche, nicht ausgefüllte Felder und Textbeschreibungen zu identifizieren, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler eine Formularübermittlung verhindert hat, fokussieren Sie auf den Fehler. Wenn mehrere Fehler vorhanden sind, stellen Sie eine Zusammenfassung bereit, wobei jeder Fehler mit dem zugehörigen Eingabefeld verlinkt ist.
- Verwenden Sie neben Symbolen, Bildern, Farben usw. auch Text. Einige Menschen haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, die Textversion Ihrer Fehlermeldung zu verstehen. Stellen Sie deshalb auch Dinge wie Symbole und Farben zur Verfügung.
- Geben Sie auch Feedback zu einer erfolgreichen Formularübermittlung.

### Anweisungen für Benutzereingaben bereitstellen

Beginnen Sie das Formular mit Textanweisungen, wie es funktioniert. Fügen Sie Beschriftungen oder Anweisungen hinzu, wenn Benutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}} Elemente verwenden.

Beschriftungen sollten beschreibend und in der Nähe der Eingaben platziert sein, auf die sie sich beziehen. Wenn ein spezifisches Eingabeformat erforderlich ist, geben Sie ein Beispiel an, das im richtigen Format formatiert ist. Erwägen Sie auch, serverseitige Validierung durchzuführen, um Eingabedaten zu formatieren und die Benutzerfreundlichkeit zu erleichtern.

Wenn ein Formularelement erforderlich ist, zeigen Sie dies sowohl visuell als auch [über den Code](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) an. Wenn ein Formularelement den Kontext ändert, beschreiben Sie, was passieren wird, damit der Benutzer dies versteht, bevor die Änderung des Kontexts erfolgt.

### Fehlervermeidung

Schlagen Sie dem Benutzer bei automatisch erkannten Eingabefehlern geeignete Eingaben vor und bieten Sie Korrekturvorschläge an, es sei denn, dies würde die Sicherheit oder den Zweck des Inhalts gefährden.

### Katastrophen verhindern

Bei Übermittlungen, die rechtliche, finanzielle oder andere erhebliche Konsequenzen haben oder haben können, stellen Sie sicher, dass die Übermittlungen überprüft, bestätigt und/oder reversibel sind.

Vom Benutzer eingegebene Daten sollten vor der Übermittlung auf Fehler überprüft werden, und der Benutzer sollte die Möglichkeit erhalten, diese zu korrigieren. Der Benutzer sollte in der Lage sein, die Informationen vor der endgültigen Übermittlung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie auch sicher, dass neben einem Absenden-Button ein Bestätigungsfeld hinzugefügt wird.

Wenn eine Übermittlung eine rechtliche oder finanzielle Transaktion auslöst, geben Sie eine festgelegte Zeit an, in der die Anfrage vom Benutzer geändert oder storniert werden kann.

### Hilfe bereitstellen

Kontextbezogene Hilfe sollte verfügbar gemacht werden. Wenn ein Formular Texteingaben erfordert, stellen Sie Formulareingabeanweisungen zur Beschreibung des Zwecks und der erforderlichen Eingaben zur Verfügung. Fügen Sie Rechtschreibprüfung und Vorschläge für lange Texteinträge hinzu, sowie Links zu Hilfe- und Unterstützungsmaterial. Wenn für die Eingabe ein spezifisches Datenformat erforderlich ist, stellen Sie ein Beispiel bereit.

## Hinweise

Die oben genannten sind gute Designpraktiken. Sie werden allen zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Beeinträchtigungen. Websites müssen die [Web Content Accessibility Guidelines](/www.w3.org/WAI/standards-guidelines/wcag/) des W3C einhalten.
- Die [Cognitive and Learning Disabilities Accessibility Task Force](/www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Richtlinien zur Webzugänglichkeit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die Zentren für Krankheitskontrolle und Prävention der USA schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat und bei ihnen [kognitive Beeinträchtigungen die häufigste bei jungen Menschen sind](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "geistige Behinderungen" früher als "mentale Retardierung" bezeichnet. Im Vereinigten Königreich werden "geistige Behinderungen" oft als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Barrierefreiheitsrichtlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Barrierefreiheit für Anfallsleiden](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Verständnis der WCAG-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Überblick über Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), inklusive [Richtlinien zur kognitiven Zugänglichkeit](#wcag-richtlinien)
- [Die Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Cognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC-Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
