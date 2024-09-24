---
title: Kognitive Zugänglichkeit
slug: Web/Accessibility/Cognitive_accessibility
l10n:
  sourceCommit: 2e3ea7e3f3a563fb556e6eb58503b2c746b9aa3b
---

{{AccessibilitySidebar}}

Kognitive Zugänglichkeit umfasst Überlegungen zur Barrierefreiheit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Zugänglichkeit ein und zeigt Möglichkeiten, wie die Zugänglichkeit des Webs für Menschen mit kognitiven und lernbedingten Unterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Behinderungen, die möglicherweise die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen beim Denken und Erinnern. Dazu gehören Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie sowie Menschen mit Lernbehinderungen wie Legasthenie und Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS).

Obwohl es innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen viel Vielfalt gibt, erleben Menschen mit ihnen eine gemeinsame Reihe von funktionalen Problemen. Dazu gehören Schwierigkeiten beim Verständnis von Inhalten, das Erinnern daran, wie Aufgaben ausgeführt werden, und Verwirrung durch inkonsistente oder unkonventionelle Webseitengestaltungen. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Zugänglichkeit ihrer Websites und Anwendungen zu verbessern.

## Überblick

Kognitive und intellektuelle Behinderungen umfassen ein großes Spektrum und können momentane, vorübergehende oder dauerhafte Zustände sein. Zum Beispiel sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich mit der Zeit verschlimmern. Andere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprachstörungen, Autismus, ADD/ADHS, Legasthenie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnte sein, dass Menschen von Substanzen wie Alkohol oder Drogen betroffen sind. Eine andere Form kann Depression sein, wenn zum Beispiel der Verlust eines geliebten Menschen betrauert wird oder jemand vorübergehend durch einen gerade online gesehenen Tweet oder ein Video bedrückt wird. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die breite Palette kognitiver Unterschiede anzugehen, insbesondere wenn Lösungen für zwei verschiedene Personen in Konflikt stehen könnten. Eine Möglichkeit, dies anzugehen, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Zu den kognitiven Fähigkeiten gehören:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Nummern, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z. B. durch Text-zu-Sprache oder Video;
- Bereitstellung leicht verständlicher Inhalte, z. B. Texte, die gemäß einfachsprachlichen Standards verfasst sind;
- Konzentration der Aufmerksamkeit auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung;
- Bereitstellung eines konsistenten Webseitenlayouts und Navigation;
- Integration vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und violett, wenn sie besucht wurden;
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- Vereinfachung der Website-Authentifizierung, ohne die Sicherheit zu beeinträchtigen; und
- Einfaches Ausfüllen von Formularen, z. B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

## WCAG Richtlinien

Die WCAG, die Web Content Accessibility Guidelines, enthalten mehrere Richtlinien zur Verbesserung der kognitiven Zugänglichkeit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C), der wichtigsten internationalen Normungsorganisation für das Internet, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/ARIA_Guides) Richtlinien.

Die WCAG folgen vier Prinzipien: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Zugänglichkeit sind.

Alle folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. Beispielsweise hilft es, die Ablaufzeit einer Anwendung, die einen Authentifizierungscode erfordert, der über eine Textnachricht an ein mobiles Gerät gesendet wird, in den folgenden Szenarien zu verlängern:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit schlechtem Kurzzeitgedächtnis oder die Multitasking betreiben.
- Menschen, die weniger technikaffin sind.
- Menschen mit schlechter drahtloser Verbindung.
- Menschen mit motorischen Steuerungsproblemen.

## Anpassungsfähigkeit

[Leitlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte **anpassbar** sein sollten". Erstellen Sie Inhalte, die in verschiedenen Formen präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Beispielsweise liefern Sie {{glossary('responsive web design', 'responsive')}} Layouts, mit einem einspaltigen mobilen Design.

Alle Informationen, einschließlich der durch die Präsentation vermittelten Struktur und Beziehungen, sollten in einer Form verfügbar sein, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. So können beispielsweise die Informationen über ein Erzählwerkzeug laut vorgelesen werden. Inhalte für die Software verständlich zu machen, ist ein guter Weg, um sicherzustellen, dass sie von alternativen Präsentationsmodi genutzt werden können.

## Zeit

Es ist wichtig, den Benutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erledigen. [Leitlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt, "Benutzern **genügend Zeit** geben, um die Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Vorgang, der nach einer festgelegten Zeit oder periodisch ohne Benutzerinitiierung geschieht, wie das Ausloggen nach 30 Minuten oder dem Nutzer 15 Minuten geben, um einen Kauf abzuschließen. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen durchzuführen. Lösungen umfassen die Bereitstellung ausreichender zusätzlicher Zeit für Benutzer, um Aufgaben zu erledigen, oder die vollständige Beseitigung von Zeiteinschränkungen.

### Timer

Optionen zur Anpassung von Zeitvorgaben umfassen:

- Dem Benutzer die Möglichkeit zu geben, die Zeitvorlage im Voraus abzuschalten oder sie auf mindestens das Zehnfache der ursprünglichen Begrenzung anzupassen.
- Den Benutzer zu warnen und ihm einen Puffer von mindestens 20 Sekunden zu geben, um die Ablaufzeit um einen Faktor von 10 mit einer einfachen Aktion, etwa das Drücken der Leertaste, zu verlängern.

Stellen Sie eine Umschaltmöglichkeit auf Inhalte zur Verfügung, die es Benutzern ermöglicht, eine längere Sitzungslaufzeit oder überhaupt keine Sitzungslaufzeit zu aktivieren. Beispiele für zeitlich begrenzte Inhalte sind Formulare, zeitlich eingeteilte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden ist, sind keine Vorkehrungen erforderlich.

### Bewegungen, Blinken, Scrollen

Es ist wichtig, Benutzer nicht abzulenken, insbesondere solche mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder sich automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, sie anzuhalten, zu stoppen, zu verbergen oder zu steuern, es sei denn, es handelt sich um eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder sich automatisch aktualisierenden Informationen die Bedeutung der Inhalte und/oder Funktionalität grundlegend ändern würde **und** Informationen und Funktionalität nicht auf andere Weise erzielt werden können, die den Anforderungen entsprechen würde. Dies schließt animierte GIFs ein, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche zeitliche Kriterien, die berücksichtigt werden sollten, sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Zur Verbesserung der Benutzbarkeit sollte jegliches Zeitlimit entfernt werden. Zeitlich begrenzte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive, synchronisierte Medien und Echtzeit-Ereignisse.
- Menschen mit Aufmerksamkeitsdefizit-Störungen sollten in der Lage sein, sich ohne Ablenkungen auf Inhalte zu konzentrieren. Der Benutzer sollte die Möglichkeit haben, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Fällen, in denen eine Person über einen Notfall informiert wird. Dies bietet Menschen mit kognitiven Behinderungen Zugang, indem es ihnen ermöglicht, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Benutzer, Aktualisierungen von Inhalten zu verschieben, indem Sie eine Möglichkeit bereitstellen, Inhalte anzufordern, anstatt sie automatisch zu aktualisieren. Stellen Sie auch eine Möglichkeit zur Verfügung, nicht wesentliche Warnungen optional zu machen.
- Stellen Sie sicher, dass Menschen eine Aktivität ohne Datenverlust nach einer erneuten Authentifizierung einer abgelaufenen Sitzung fortsetzen können, zum Beispiel durch Speichern des Zustands eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung des Benutzers geändert werden können. Kodieren Sie die Daten vor der erneuten Authentifizierung als versteckt oder verschlüsselt.
- Bieten Sie Warnungen über Inaktivität, die zu Datenverlust führen könnte. Wenn ein Timeout verwendet wird, informieren Sie die Benutzer genau, wie viel Zeit zur Verfügung steht, bevor die Sitzung abläuft und zu verloren gegangenen Daten führt. Die Ausnahme hiervon ist die Bewahrung von Daten für mehr als 20 Stunden, wenn keine Aktionen durchgeführt werden.

## Navigation

[Leitlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt, "Wege bereitstellen, um Benutzern zu helfen, Inhalte zu navigieren, zu finden und ihren Standort zu erkennen", und bietet 10 Richtlinien, um sicherzustellen, dass die Seite navigierbar und Inhalte auffindbar sind:

### Fügen Sie einen `<title>` ein

Stellen Sie sicher, dass Sie ein {{HTMLElement('title')}} für das Dokument einfügen, da Titel eine schnelle und einfach referenzierbare Beschreibung des Hauptzwecks des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Lesebeeinträchtigungen profitieren von der Möglichkeit, den Zweck der Inhalte auf diese Weise zu identifizieren.

### Überschriften und Labels

Fügen Sie klare und beschreibende Überschriften hinzu, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Labels helfen Benutzern, bestimmte Komponenten innerhalb der Inhalte zu identifizieren. Menschen, die langsam lesen und Menschen mit begrenztem Kurzzeitgedächtnis profitieren, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen dabei, die allgemeine Organisation der Seiteninhalte zu definieren. Sie erleichtern die Navigation durch die Inhaltsabschnitte der Seite und bieten einen Mechanismus zur Unterstützung des Verständnisses. Beispiele für Überschriften umfassen Kapitel, Abschnitte und Unterabschnitte von Inhalten usw.

Überschriften sind im Vergleich zu anderen Methoden zur Identifizierung von Seiteninhaltsabschnitten (Rahmen, Leerzeichen, horizontale Regeln usw.) offensichtlichere Navigationshilfen.

### Mehrere Möglichkeiten, Inhalte zu finden

Verschiedene Benutzer ziehen unterschiedliche Methoden vor, um Informationen zu finden, daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, damit Benutzer Inhalte auf Ihrer Seite finden können.

Die Bereitstellung von mehr als einem Weg zur Navigation auf Ihrer Seite kann Benutzern helfen, Informationen schneller zu finden. Einige Benutzer ziehen möglicherweise ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktionalität vor, anstatt durch mehrere Seiten zu lesen und zu navigieren, um zu finden, was sie benötigen. Andere wiederum bevorzugen es, die Seite auf eine sequenzielle Weise zu erkunden, von Seite zu Seite zu gehen, um das Layout, die Inhalte und die Konzepte der Seite am besten zu verstehen.

### Möglichkeit, Inhaltsblöcke zu überspringen

Bereitstellung eines Mechanismus, wie eines [Skip-Links](/de/docs/Web/HTML/Element/a#skip_links), um Blöcke von Inhalten zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Fokusreihenfolge macht Sinn

Die Fokusreihenfolge für interaktive Elemente sollte Sinn ergeben. Um dies zu erreichen, sollte die DOM-Reihenfolge der visuellen Reihenfolge entsprechen, die wiederum der Tab-Reihenfolge entsprechen sollte. Wenn die Tab-Reihenfolge hin- und herspringt, insbesondere in einer Weise, die nicht der visuellen Reihenfolge entspricht, wenn mit der Tastatur navigiert wird, können Benutzer desorientiert werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Benutzer mit der Tastatur navigiert, sollte die Benutzeroberfläche klar machen, welches Element derzeit den Fokus hat. Ändern oder entfernen Sie nicht das Standard- [`:focus`](/de/docs/Web/CSS/:focus)-Stiling des Browsers, es sei denn, Sie machen den Fokus noch deutlicher.

### Link-Text vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, zu welchem nächstgelegenen Punkt der Benutzer navigieren wird, wenn er sich entscheidet, ihn zu aktivieren. Schlecht formulierter Linktext kann Benutzer über seine Zweck oder das Ziel verwirren.

Einige Formen unterstützender Technologien ermöglichen es Benutzern, durch Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihres umgebenden Nicht-Link-Inhalts entfernt, wodurch die Notwendigkeit für verständlichen Linktext noch wichtiger wird. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text lautet: "Hier klicken". Ohne Angabe, wohin "hier" Sie führt, ist der Zweck des Links unklar.

Für Bildschirmleser ist es entscheidend, dass der verknüpfte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalte zu Links für Bildschirmleser hinzugefügt haben und dieser Inhalt für sehende Leser möglicherweise zu ausführlich und verwirrend ist, sollten Sie in Betracht ziehen, den hinzugefügten Text optisch auszublenden, damit er nicht von Personen verwendet wird, die keine unterstützenden Technologien verwenden.

### Aktueller Standort ist verfügbar

Benutzer sollten sich innerhalb einer Website oder Anwendung orientieren können. Das ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die beim Befolgen einer langen Reihe von Navigationsschritten verwirrt werden könnten.

Alle Benutzer profitieren von Informationen darüber, wo sie sich innerhalb der Hierarchie einer Website befinden, insbesondere für Websites oder Anwendungen mit großen Inhaltsmengen oder vielen Unterabschnitten. [Brotkrümel](/de/docs/Glossary/Breadcrumb), [Sitemaps](/de/docs/Glossary/Site_map) und das Kennzeichnen der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die dazu beitragen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Leitlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt, "machen Sie den Textinhalt lesbar und verständlich". Für einige Benutzer ist es schwierig, die Bedeutung eines Wortes oder Satzes aus dem Kontext heraus zu verstehen, insbesondere wenn das Wort oder der Satz auf eine ungewöhnliche Weise verwendet wird oder eine spezielle Bedeutung erhalten hat.

Für diese Benutzer kann die Fähigkeit zu lesen und zu verstehen davon abhängen, ob spezifische Definitionen oder die ausgeschriebenen Formen von Abkürzungen oder Akronymen verfügbar sind. Einige Benutzer können große Schwierigkeiten haben, geschriebene Wörter zu erkennen, obwohl sie extrem komplexe und anspruchsvolle Dokumente verstehen, wenn der Text laut vorgelesen wird oder wenn wichtige Prozesse und Ideen visuell veranschaulicht werden.

### Deklarieren Sie die Sprache der Seite und alle Inhalte, die nicht in dieser Hauptsprache sind

Die Sprache jeder Seite muss durch das Verwenden des [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attributs auf dem {{HTMLElement('html')}}-Element deklariert werden. Fügen Sie das `lang`-Attribut erneut für Texte hinzu, die in einer anderen Sprache als der Hauptsprache des Dokuments verfasst sind.

Die richtige Verwendung von `lang` ermöglicht es einigen Bildschirmlesern, den Text korrekt anzukündigen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Definieren Sie ungewöhnliche Wörter und Wortverwendungen

Einige Behinderungen erschweren das Verständnis nicht-wörtlicher Wortverwendungen, wie Idiome, Umgangssprache und spezialisiertes Fachvokabular. Auch nicht-muttersprachliche Benutzer können Schwierigkeiten mit diesen Begriffen haben. Wenn ein Wort oder Ausdruck eine einzigartige Bedeutung hat, geben Sie im Dokument eine Definition entweder im Text oder verlinkt in einem Glossar oder auf ein Online-Wörterbuch an. Wenn ein Wort oder Ausdruck mehr als eine Bedeutung hat, definieren Sie jede Verwendung.

### Abkürzungen definieren

Abkürzungen können für Menschen verwirrend sein, die:

- Schwierigkeiten beim Entschlüsseln von Wörtern haben.
- Ein eingeschränktes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zur Unterstützung des Verständnisses zu nutzen.
- Bildschirmvergrößerungen verwenden (was oft zu geringeren Kontext-Hinweisen führt).

Fügen Sie beim ersten Einsatz der Abkürzung die ausgeschriebene Form hinzu, gefolgt von der Abkürzung, die in ein {{HTMLElement('abbr')}}-Element eingefügt wird. Wenn eine Abkürzung keine ausgeschriebene Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments ist (wie z.B. Latein), erklären Sie die Bedeutung. Ziehen Sie außerdem die Verwendung von [Rubyschrift](/de/docs/Web/HTML/Element/ruby) für Initialismen (Aussprache von Akronymen) in Betracht.

### Lesestufe

Inhalte sollten so klar wie möglich verfasst sein. Eine gute Regel ist, den Inhalt so einfach zu machen, dass er beim ersten Mal verstanden werden kann. Methoden zur Erreichung dieses Ziels umfassen:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung von aktiver Stimme im Präsens.
- Verwendung korrekter Grammatik und Rechtschreibung.

Benutzern mit kognitiven Behinderungen hilft es, eine Textzusammenfassung (manchmal auch als TL;DR oder "too long; didn't read" bezeichnet) auf einem niedrigen Lesestufen zu bieten. Eine andere Technik, die Sie verwenden können, ist die Bereitstellung begleitender visueller Darstellungen, um Ideen, Ereignisse und Prozesse zu erklären.

Es gibt Werkzeuge, die das Niveau Ihrer Inhalte bewerten können. Beispielsweise hat dieses Dokument eine durchschnittliche Schulnotenstufe von etwa 11. Dies bedeutet, dass es von einem englischen Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Werkzeuge können sogar Vorschläge anbieten, um es zu vereinfachen.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen zu lehren, wie man Wörter ausspricht:

- Die Aussprache sofort nach dem Wort angeben.
- Einen Link zu einer Liste von Aussprachen bereitstellen.
- Ein Glossar mit Aussprache bereitstellen.
- Das {{HTMLElement('ruby')}}-Element verwenden, um zu zeigen, wie ein Wort ausgesprochen wird.

Die Bereitstellung von Anleitungen zur Aussprache hilft vielen verschiedenen Arten von Menschen, einschließlich solcher, die es vorziehen, laut zu lesen, nicht-muttersprachlichen Sprechern und Personen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine andere Lösung besteht darin, Glyphen oder diakritische Zeichen zu verwenden, um die Aussprache zu veranschaulichen. Wenn diese Technik verwendet wird, muss es jedoch einen Mechanismus geben, um sie auszuschalten. Darüber hinaus ist es hilfreich, auf eine Anleitung zu den verwendeten Zeichen zu verlinken, da ihre Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersagbarkeit

WCAG [Leitlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt, "machen Sie Webseiten so, dass sie auf vorhersehbare Weise erscheinen und arbeiten". Dies ist ein Grundsatz für gutes Benutzererlebnisdesign. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dazu gehört Konsistenz im Seitendesign und bei vorhersehbaren interaktiven Komponenten.

### Verwenden Sie Aktivierung, nicht Fokus, um den Kontext zu ändern

Eine Änderung des Kontexts sollte absichtlich geschehen. Da dies so ist, sollte eine Benutzeroberflächenfunktion beim Empfangen von [Fokus](/de/docs/Web/API/HTMLElement/focus) keine weiteren benutzerseitigen Aktionen auslösen. Vielmehr sollten Benutzer ein Feature aktivieren müssen, um die Änderung auszulösen.

### Änderung von Einstellungen aufgrund einer aktiven Anfrage

Die Bedienung von Formularelementen und die Dateneingabe sollten zu einem vorhersehbaren Verhalten führen. Änderungen des Kontexts können Benutzer mit kognitiven Behinderungen verwirren und sollten daher nur auftreten, wenn klar ist, dass eine solche Änderung in Reaktion auf die Benutzeraktion erfolgt.

Eine Zustandsänderung sollte eine absichtliche Benutzeraktion erfordern. Beispiele hierfür sind das Ankreuzen eines Kontrollkästchens, Daten einzugeben oder eine Auswahloption zu ändern. Stellen Sie außerdem sicher, dass Sie eine Schaltfläche "Absenden" bereitstellen, um die Kontextänderung einzuleiten und zu beschreiben, was passieren wird, bevor die Änderung vorgenommen wird.

### Halten Sie die Navigation auf der gesamten Seite konsistent

Halten Sie die Navigationsreihenfolge auf den Seiten konsistent. Wenn Sie beispielsweise eine Navigationsleiste auf mehreren Seiten haben, machen Sie diese Navigation einheitlich über die gesamte Website mit denselben Links an derselben Stelle. Dies gilt nicht nur für die Navigation: Alle wiederkehrenden Komponenten sollten jedes Mal in derselben relativen Reihenfolge präsentiert werden, wenn sie erscheinen.

### Sorgen Sie für konsistente Beschriftungen

Identische Funktionen sollten jedes Mal ähnliche Beschriftungen haben, wenn sie genutzt werden. Konsistente Schaltflächenbeschriftungen, Alternativtexte für Symbole und Ikonographie für ähnliche Interaktionen usw., selbst in verschiedenen Bereichen Ihrer Seite, helfen allen Benutzern.

### Seien Sie konsistent und vorhersehbar, und verwenden Sie Normen

Während unbeschriftete Ikonographie nicht die effektivste Methode zur Informationsvermittlung ist, hilft die konsequente Verwendung der Symbole (und wenn beschriftet, ihrer Beschriftung) Menschen, zu verstehen, wofür das Symbol steht. Ändern Sie nicht die Standardbegriffe wie die Schaltfläche 'Zurück' im Browser. Wenn Sie einen Benutzer weiterleiten müssen, lassen Sie den Benutzer im Voraus davon wissen.

## Eingabeunterstützung

[Leitlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, um sicherzustellen, dass Daten richtig eingegeben werden, und besagt: "Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen eher dazu veranlagt, Fehler zu machen, weniger wahrscheinlich, einen Fehler zu bemerken, oder haben es schwerer, einen Fehler zu korrigieren, sobald sie ihn gemacht haben.

Die Richtlinien zur Eingabeunterstützung zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere solche mit Behinderungen, einen Fehler machen, und, wenn sie einen Fehler machen, die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und Fehler erfolgreich beheben können.

### Übermittlung automatisierter Fehlererkennung

Benutzer müssen auf den Fehler aufmerksam gemacht und darüber informiert werden, was falsch ist. Wenn es eine clientseitige Fehlererkennung gibt, beachten Sie die folgenden Richtlinien, um den Fehler dem Benutzer so effektiv wie möglich zu vermitteln:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Geben Sie Texte zur Identifizierung unvollständiger erforderlicher Felder und Textbeschreibungen, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler die Übermittlung eines Formulars verhindert hat, konzentrieren Sie sich auf den Fehler. Wenn mehrere Fehler vorhanden sind, geben Sie eine Zusammenfassung an, bei der jeder Fehler mit dem zugehörigen Eingabefeld verlinkt ist.
- Schließen Sie Text beinhaltet von Symbolen, Bildern, Farben und so weiter. Einige Menschen haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Personen haben möglicherweise Schwierigkeiten, die Textversion Ihrer Fehlermeldung zu verstehen. Für diese Menschen bieten Sie auch so Dinge wie Symbole und Farben.
- Auch Rückmeldungen zu einem erfolgreichen Einreichen von Formularen bereitstellen.

### Bereitstellung von Anweisungen für Benutzereingaben

Beginnen Sie das Formular mit Textanweisungen, wie es zu bedienen ist. Fügen Sie Etiketten oder Anweisungen ein, wenn Benutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}}-Elemente verwenden.

Etiketten sollten beschreibend und in der Nähe der Eingabe platziert sein, auf die sie sich beziehen. Wenn ein bestimmtes Format für die Eingabe erforderlich ist, geben Sie ein Beispiel im korrekten Format. Erwägen Sie zudem die Durchführung von serverseitiger Validierung, um Eingabedaten zu formatieren und die Benutzereingabe zu erleichtern.

Wenn eine Formularsteuerung erforderlich ist, geben Sie dies sowohl visuell als auch [über den Code](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) an. Wenn eine Formularsteuerung den Kontext ändert, beschreiben Sie, was passiert, auf eine Weise, die der Benutzer versteht, bevor sie die Kontextänderung auslöst.

### Fehler Vorschlag

Geben Sie dem Benutzer vorgeschlagene Eingaben, wenn ein Eingabefehler automatisch erkannt wird und Vorschläge zur Korrektur bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck des Inhalts gefährden).

### Katastrophen verhindern

Bei Eingaben, die rechtliche, finanzielle oder andere erhebliche Konsequenzen verursachen oder zu ihnen führen können, stellen Sie sicher, dass die Eingaben überprüft, bestätigt und/oder umkehrbar sind.

Von den Benutzern eingegebene Daten sollten vor der Übermittlung auf Fehler überprüft werden, und den Benutzern sollte Gelegenheit gegeben werden, diese zu korrigieren. Die Benutzer sollten die Möglichkeit haben, Informationen vor der endgültigen Übermittlung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie zudem sicher, dass eine Bestätigungscheckbox zusätzlich zu einer Senden-Schaltfläche vorhanden ist.

Wenn eine Einreichung eine rechtliche oder finanzielle Transaktion auslöst, geben Sie einen festgelegten Zeitraum an, innerhalb dessen der Benutzer die Anfrage ändern oder stornieren kann.

### Hilfe bereitstellen

Kontextbezogene Hilfe sollte verfügbar sein. Wenn ein Formular eine Texteingabe erfordert, geben Sie Formularanweisungen an, die den Zweck und die erforderliche Eingabe beschreiben. Fügen Sie Rechtschreibprüfung und Vorschläge für langformatige Texteingaben sowie Links zu Hilfs- und Unterstützungsmaterialien ein. Falls ein spezifisches Datenformat für die Eingabe erwartet wird, geben Sie ein Beispiel an.

## Hinweise

Die obigen Punkte sind gute Designpraktiken. Sie werden allen zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Behinderungen. Websites müssen den [Web Content Accessibility Guidelines des W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Richtlinien zur Barrierefreiheit für das Web für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Kognitive Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Das United States Centers for Disease Control schätzt, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat und [kognitive Beeinträchtigung bei jungen Menschen die häufigste ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "mentale Retardierung" bezeichnet. In Großbritannien wird "intellektuelle Behinderungen" häufig als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Zugänglichkeitsrichtlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn/Accessibility/What_is_accessibility)
- [Barrierefreiheit bei Anfallsleiden](/de/docs/Web/Accessibility/Seizure_disorders)
- [Verständnis der WCAG Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG)
- [Übersicht über Barrierefreiheit](/de/docs/Learn/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [kognitiver Zugänglichkeitsrichtlinien](#wcag_richtlinien)
- [Die W3C Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Kognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC-Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
