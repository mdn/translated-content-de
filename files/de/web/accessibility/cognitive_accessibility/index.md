---
title: Kognitive Zugänglichkeit
slug: Web/Accessibility/Cognitive_accessibility
l10n:
  sourceCommit: 2e3ea7e3f3a563fb556e6eb58503b2c746b9aa3b
---

{{AccessibilitySidebar}}

Kognitive Zugänglichkeit umfasst Überlegungen zur Zugänglichkeit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument stellt kognitive Zugänglichkeit vor und bietet Möglichkeiten zur Verbesserung der Zugänglichkeit des Internets für Menschen mit kognitiven und Lernunterschieden.

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Beeinträchtigungen, die möglicherweise die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen mit Denken und Erinnern. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie. Dazu gehören auch Menschen mit Lernbehinderungen wie Legasthenie und Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS).

Obwohl es innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen eine große Vielfalt gibt, erleben Menschen mit ihnen eine gemeinsame Reihe von funktionalen Problemen. Diese Probleme umfassen Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben abgeschlossen werden, und Verwirrung, die durch inkonsistente oder unübliche Webseitenlayouts verursacht wird. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Zugänglichkeit ihrer Websites und Anwendungen zu verbessern.

## Überblick

Kognitive und intellektuelle Behinderungen decken ein großes Spektrum ab und können momentane, vorübergehende oder dauerhafte Zustände sein. Beispielsweise sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich progressiv verschlechtern. Weitere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprechstörungen, Autismus, ADD/ADHD, Legasthenie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnte Menschen sein, die von Stoffen wie Alkohol oder Drogen beeinträchtigt sind. Eine andere Form kann Depression sein, etwa wenn man um den Verlust eines geliebten Menschen trauert oder durch einen Tweet oder ein gerade gesehenes Video kurzzeitig betrübt wird. Ein drittes Beispiel könnte Schlafentzug sein.

Es mag wie eine überwältigende Herausforderung erscheinen, sich mit der breiten Palette kognitiver Unterschiede auseinanderzusetzen, insbesondere wenn Lösungen für zwei verschiedene Personen im Widerspruch zueinander stehen können. Eine Möglichkeit, dies zu bewältigen, ist die Fokussierung auf kognitive Fähigkeiten. Kognitive Fähigkeiten umfassen:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz, um zugängliche Lösungen für Menschen mit kognitiven Beeinträchtigungen bereitzustellen, umfasst:

- Bereitstellen von Inhalten auf mehr als eine Weise, wie beispielsweise Text-zu-Sprache oder Video;
- Bereitstellung leicht verständlicher Inhalte, wie Text, der in einfacher Sprache geschrieben ist;
- Konzentration auf wichtige Inhalte;
- Minimierung von Ablenkungen wie unnötigen Inhalten oder Werbung;
- Bereitstellung eines konsistenten Webseitenlayouts und einer konsistenten Navigation;
- Einbeziehung vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- Authentifizierung auf Webseiten so einfach wie möglich gestalten, ohne die Sicherheit zu gefährden; und
- Formulare einfach ausfüllbar machen, zum Beispiel mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

## WCAG-Richtlinien

WCAG, Web Content Accessibility Guidelines, umfasst mehrere Richtlinien zur Verbesserung der kognitiven Zugänglichkeit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C), der wichtigsten internationalen Normungsorganisation für das Internet, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](https://developer.mozilla.org/de/docs/Web/Accessibility/ARIA/ARIA_Guides) Richtlinien.

Die WCAG sind von vier Prinzipien geleitet: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Zugänglichkeit sind.

Alle folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. Zum Beispiel hilft die Möglichkeit, die Ablaufzeit einer Anwendung zu verlängern, die einen Authentifizierungscode erfordert, der per Textnachricht an ein Mobilgerät gesendet wird, in den folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit einem schlechten Kurzzeitgedächtnis oder die Multitasking betreiben.
- Menschen mit geringer technischer Kompetenz.
- Menschen mit schlechter drahtloser Verbindung.
- Menschen mit motorischen Kontrollproblemen.

## Anpassungsfähigkeit

[Guideline 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte sollten **anpassbar** sein". Erstellen Sie Inhalte, die in unterschiedlichen Formen präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Stellen Sie beispielsweise [responsive](/de/docs/Glossary/responsive_web_design) Layouts bereit, mit einem Ein-Spalten-Design für mobile Geräte.

Alle Informationen, einschließlich der Struktur und Beziehungen, die durch die Präsentation vermittelt werden, sollten in einer Form verfügbar sein, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Beispielsweise könnte die Information über ein Erzählwerkzeug laut vorgelesen werden. Wenn Ihre Inhalte von der Software verstanden werden können, ist dies eine gute Möglichkeit sicherzustellen, dass sie in alternativen Präsentationsmodi verwendet werden können.

## Zeit

Es ist wichtig, den Benutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erledigen. [Guideline 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt, "geben Sie Benutzern genug **Zeit**, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Prozess, der ohne Benutzerinitiierung nach einer festgelegten Zeit oder regelmäßig abläuft, wie beispielsweise das Abmelden nach 30 Minuten oder das Geben von 15 Minuten für einen Kauf. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen auszuführen. Lösungsansätze sind das Bereitstellen von Benutzern genügend zusätzlicher Zeit, um Aufgaben zu erledigen, oder Zeitbeschränkungen ganz zu beseitigen.

### Timer

Optionen zur Anpassung der Zeitanforderungen umfassen:

- Dem Benutzer ermöglichen, die Zeit abzustellen oder sie um das bis zu 10-fache des ursprünglichen Limits zu verlängern, bevor es auftritt.
- Den Benutzer warnen und eine Pufferzeit von mindestens 20 Sekunden bereitstellen, um die Timeout-Dauer mit einer einfachen Aktion zu verlängern, wie z. B. das Drücken der Leertaste.

Stellen Sie einen Schalter in den Inhalten bereit, der es Benutzern ermöglicht, eine längere Sitzungszeitgrenze zu aktivieren oder überhaupt keine Sitzungszeitgrenze. Beispiele für zeitgesteuerte Inhalte sind Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden dauert, sind keine Anpassungen erforderlich.

### Bewegungen, Blinken, Scrollen

Es ist wichtig, Benutzer nicht abzulenken, insbesondere solche mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder automatisch aktualisierte Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, sie zu pausieren, zu stoppen, zu verbergen oder zu steuern, es sei denn, es handelt sich um eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierten Informationen den Inhalt oder die Funktionalität grundlegend ändern würde **und** Informationen und Funktionalität nicht auf andere Weise erreicht werden können, die konform wäre. Dies schließt animierte GIFs ein, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche Timing-Kriterien, die zu berücksichtigen sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit, um zu lesen und zu verstehen. Für eine verbesserte Benutzerfreundlichkeit sollten jegliche zeitlichen Einschränkungen entfernt werden. Zeitgesteuerte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten sich auf Inhalte konzentrieren können, ohne abgelenkt zu werden. Der Benutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Situationen, die eine Person auf einen Notfall aufmerksam machen. Dies ermöglicht den Zugang zu Menschen mit kognitiven Behinderungen, indem es ihnen ermöglicht wird, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen anzufordern, anstatt sie automatisch zu aktualisieren. Außerdem sollten nicht wesentliche Warnmeldungen optional gemacht werden.
- Sicherstellen, dass Personen eine Aktivität ohne Datenverlust fortsetzen können, nachdem eine abgelaufene Sitzung erneut authentifiziert wurde, beispielsweise durch das Speichern des Zustands eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung geändert werden können. Vor der erneuten Authentifizierung sollten die Daten als verborgen oder verschlüsselt kodiert werden.
- Bereitstellung von Warnungen bei Inaktivität, die zu Datenverlust führen könnte. Wenn ein Timeout verwendet wird, informieren Sie die Benutzer genau darüber, wie viel Zeit verstreichen muss, damit die Sitzung abläuft und zu Datenverlust führt. Die Ausnahme hiervon besteht darin, Daten für mehr als 20 Stunden zu erhalten, wenn keine Aktionen ausgeführt werden.

## Navigation

[Guideline 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt, "bieten Sie Möglichkeiten, um Benutzern beim Navigieren, Finden von Inhalten und Bestimmen ihrer Position zu helfen", und bietet 10 Richtlinien, um sicherzustellen, dass die Seite navigierbar ist und Inhalte auffindbar sind:

### Ein `<title>` einfügen

Stellen Sie sicher, dass ein {{HTMLElement('title')}} für das Dokument enthalten ist, da Titel eine schnelle und einfache Referenzbeschreibung des Hauptpunktes des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Lesebehinderungen profitieren davon, dass sie den Zweck von Inhalten auf diese Weise identifizieren können.

### Überschriften und Labels

Fügen Sie klare und beschreibende Überschriften ein, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Labels helfen den Benutzern, spezifische Komponenten innerhalb der Inhalte zu identifizieren. Menschen, die langsam lesen, und Menschen mit einem eingeschränkten Kurzzeitgedächtnis profitieren davon, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die Gesamtorganisation des Seiteninhalts zu definieren. Sie unterstützen die Navigation durch Seiteninhaltsabschnitte und bieten einen Mechanismus zur Unterstützung des Verständnisses. Beispiele für Überschriften umfassen Kapitel, Abschnitte und Unterabschnitte von Inhalten und so weiter.

Überschriften sind im Vergleich zu anderen Methoden zum Identifizieren von Seiteninhaltsabschnitten (Rahmen, Weißraum, horizontale Linien usw.) offensichtlichere Navigationselemente.

### Mehrere Möglichkeiten, Inhalte zu finden

Verschiedene Benutzer bevorzugen unterschiedliche Methoden, um Informationen zu finden. Daher ist es wichtig, mehrere Möglichkeiten anzubieten, mit deren Hilfe Benutzer Inhalte auf Ihrer Website finden können.

Indem Sie mehr als eine Möglichkeit zum Navigieren auf Ihrer Website bereitstellen, können Benutzer Informationen schneller finden. Manche Benutzer bevorzugen ein Inhaltsverzeichnis, eine Standortkarte oder eine Suchfunktion, anstatt sich durch mehrere Seiten zu lesen und zu navigieren, um das zu finden, was sie benötigen. Andere bevorzugen möglicherweise das Erkunden der Website in einer sequenziellen Weise, indem sie von Seite zu Seite fortschreiten, um das Layout, die Inhalte und die Konzepte der Website am besten zu verstehen.

### Möglichkeit, Inhaltsblöcke zu überspringen

Bereitstellung eines Mechanismus, wie eines [Sprunglinks](/de/docs/Web/HTML/Element/a#skip_links), um Inhaltsblöcke zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Fokusreihenfolge macht Sinn

Die Reihenfolge des Fokus für interaktive Elemente sollte sinnvoll sein. Um dies zu erreichen, sollte die DOM-Reihenfolge der visuellen Reihenfolge entsprechen, die ihrerseits der Tab-Reihenfolge entspricht. Wenn die Tab-Reihenfolge herumspringt, insbesondere auf eine Weise, die bei der Tastaturnavigation nicht der visuellen Reihenfolge entspricht, können die Benutzer desorientiert werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Benutzer mit der Tastatur navigiert, sollte die Benutzeroberfläche klar machen, welches Element derzeit den Fokus hat. Verändern oder entfernen Sie nicht das standardmäßige [`:focus`](/de/docs/Web/CSS/:focus)-Styling des Browsers, es sei denn, Sie machen den Fokus noch offensichtlicher.

### Link-Text vermittelt Bedeutung

Der Link-Text sollte klar und prägnant kommunizieren, was der Benutzer als nächstes erwartet, wenn er ihn aktiviert. Schlechte Formulierung des Link-Texts kann Benutzer über seine Absicht oder Ziel verwirren.

Einige Formen von Hilfstechnologie ermöglichen es Benutzern, über Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihrer umgebenden Nicht-Link-Inhalte entfernt, was die Notwendigkeit für verständlichen Link-Text noch wichtiger macht. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne anzuzeigen, wohin "hier" führen wird, ist der Zweck des Links unklar.

Für Screenreader ist es entscheidend, dass der verlinkte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalt zu Links für Screenreader hinzugefügt haben und dieser Inhalt für sehende Leser umständlich und potenziell verwirrend ist, ziehen Sie in Betracht, den hinzugefügten Text visuell vor denen zu verstecken, die keine unterstützenden Technologien verwenden.

### Aktueller Standort ist verfügbar

Benutzer sollten sich innerhalb einer Website oder Anwendung orientieren können. Dies ist insbesondere für Menschen mit kurzer Aufmerksamkeitsspanne hilfreich, die verwirrt werden können, wenn sie einer langen Reihe von Navigationsschritten folgen.

Alle Benutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere bei Websites oder Anwendungen mit großen Inhaltsmengen oder vielen Unterabschnitten. [Brotkrumen](/de/docs/Glossary/Breadcrumb), [Seitenkarten](/de/docs/Glossary/Site_map) und das Kennzeichnen der aktuellen Seite in der Navigation als "aktuell" sind Techniken, die helfen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Guideline 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt, "Texte verständlich und lesbar machen". Für einige Benutzer ist es schwierig, die Bedeutung eines Wortes oder einer Phrase aus dem Kontext zu erschließen, insbesondere wenn das Wort oder die Phrase in einer ungewöhnlichen Weise verwendet wird oder eine spezielle Bedeutung erhalten hat.

Für diese Benutzer hängt die Fähigkeit zu lesen und zu verstehen möglicherweise von der Verfügbarkeit spezifischer Definitionen oder den erweiterten Formen von Akronymen oder Abkürzungen ab. Einige Benutzer haben große Schwierigkeiten, schriftliche Wörter zu erkennen, verstehen jedoch extrem komplexe und anspruchsvolle Dokumente, wenn der Text laut vorgelesen wird oder wenn wichtige Prozesse und Ideen visuell dargestellt werden.

### Sprache der Seite und jeden Inhalt, der nicht in dieser Hauptsprache ist, deklarieren

Die Sprache jeder Seite muss durch die Verwendung des [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attributs auf dem {{HTMLElement('html')}}-Element erklärt werden. Setzen Sie das `lang`-Attribut erneut auf Text, der in einer anderen Sprache als der Hauptsprache des Dokuments verfasst ist.

Die ordnungsgemäße Verwendung von `lang` ermöglicht es einigen Screenreadern, den Text korrekt in synthetische Sprache umzuwandeln. Es hilft auch Menschen, die Software zur Sprachausgabe verwenden.

### Ungewöhnliche Wörter und den Wortgebrauch definieren

Einige Behinderungen erschweren das Verständnis von nicht wörtlichem Wortgebrauch, wie Idiome, umgangssprachliche Ausdrücke und spezialisierten Fachjargon. Nicht-Muttersprachler haben möglicherweise auch Schwierigkeiten mit diesen Begriffen. Wenn ein Wort oder eine Phrase eine einzigartige Bedeutung hat, bieten Sie eine Definition online oder verlinkt an, innerhalb eines Glossars oder zu einem Online-Wörterbuch. Wenn ein Wort oder eine Phrase mehr als eine Bedeutung hat, definieren Sie jede Verwendung.

### Abkürzungen definieren

Abkürzungen können verwirrend für Menschen sein, die:

- Schwierigkeiten beim Entschlüsseln von Wörtern haben.
- Ein begrenztes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zu verwenden, um das Verständnis zu unterstützen.
- Vergrößerungssoftware für Bildschirme verwenden (die oft kontextuelle Hinweise reduziert).

Stellen Sie beim ersten Gebrauch die erweiterte Form der Abkürzung bereit, gefolgt von der Abkürzung selbst innerhalb eines {{HTMLElement('abbr')}}-Elements. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments ist (wie Latein), erklären Sie seine Bedeutung. Erwägen Sie auch die Verwendung von [Ruby Text](/de/docs/Web/HTML/Element/ruby) für Initialismen (Aussprache von Akronymen).

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben sein. Eine gute Regel ist, Inhalte so einfach zu machen, dass sie beim ersten Mal verstanden werden können. Methoden, um dies zu erreichen, umfassen:

- Verwenden von kurzen, einfachen Wörtern.
- Schreiben von kurzen Sätzen.
- Verwenden der aktiven Stimme im Präsens.
- Verwenden korrekter Grammatik und Rechtschreibung.

Es hilft Benutzern mit kognitiven Behinderungen, eine Textzusammenfassung (manchmal als TL;DR, oder "too long; didn't read") auf einem niedrigen Lesestufeniveau bereitzustellen. Eine weitere Technik, die Sie verwenden können, ist das Bereitstellen von begleitenden Visuals, um Ideen, Ereignisse und Prozesse zu erklären.

Es gibt Werkzeuge, die das Niveau Ihrer Inhalte bewerten können. Zum Beispiel hat dieses Dokument ein durchschnittliches Lesealter von etwa 11. Das bedeutet, dass es von einem englischen Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Werkzeuge können sogar Vorschläge zur Vereinfachung geben.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen beizubringen, wie man Wörter ausspricht:

- Geben Sie die Aussprache unmittelbar nach dem Wort an.
- Verlinken Sie auf eine Liste mit Aussprachen.
- Stellen Sie ein Glossar mit Aussprache bereit.
- Verwenden Sie das {{HTMLElement('ruby')}}-Element, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Eine Anleitung zum Aussprechen von Wörtern hilft vielen verschiedenen Menschen, einschließlich derjenigen, die bevorzugen, laut zu lesen, Nicht-Muttersprachler und Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine weitere Lösung besteht darin, Glyphen oder diakritische Zeichen zu verwenden, um die Aussprache zu veranschaulichen. Wenn diese Technik verwendet wird, muss jedoch ein Mechanismus vorhanden sein, um sie auszuschalten. Es ist auch hilfreich, einen Guide zu den verwendeten Zeichen bereitzustellen, da ihre Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Guideline 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt, "sorgen Sie dafür, dass Webseiten auf vorhersehbare Weise erscheinen und funktionieren". Dies ist ein Grundsatz des guten Nutzererfahrungsdesigns. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dies umfasst Konsistenz im Seitenlayout und vorhersehbare interaktive Komponenten.

### Verwendung von Aktivierung, nicht Fokus zur Änderung von Kontext

Eine Änderung im Kontext sollte beabsichtigt sein. Aus diesem Grund sollte beim Erhalt von [Fokus](/de/docs/Web/API/HTMLElement/focus) einer UI-Funktion keine weitere benutzerorientierte Aktion ausgelöst werden. Vielmehr sollten Benutzer eine Funktion "aktivieren" müssen, um die Änderung auszulösen.

### Änderung der Einstellung basierend auf einem aktiven Anfrage

Die Bedienung von Formularsteuerelementen und die Dateneingabe sollte ein vorhersehbares Verhalten zur Folge haben. Änderungen im Kontext können Benutzer mit kognitiven Behinderungen verwirren und sollten daher nur auftreten, wenn klar ist, dass eine solche Änderung aufgrund der Aktion des Benutzers erfolgen wird.

Das Ändern des Zustands sollte ein beabsichtigtes Benutzerverhalten erfordern. Beispiele hierfür sind das Markieren eines Kontrollkästchens, das Eingeben von Daten oder das Ändern einer Auswahloption. Stellen Sie auch sicher, dass ein Absenden-Knopf bereitgestellt wird, um die Kontextänderung zu initiieren, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Navigation auf der gesamten Website konsistent halten

Halten Sie die Navigationsreihenfolge zwischen den Seiten konsistent. Wenn Sie zum Beispiel eine Navigationsleiste auf mehreren Seiten haben, gestalten Sie diese Navigation einheitlich auf der gesamten Website, mit den gleichen Links an der gleichen Stelle. Das gilt nicht nur für die Navigation: Präsentieren Sie alle wiederholten Komponenten in der gleichen relativen Reihenfolge, jedes Mal, wenn sie auftauchen.

### Bereitstellung konsistenter Kennzeichnung

Identische Funktionen sollten jedes Mal ähnliche Labels haben, wenn sie genutzt werden. Konsistente Knöpfe, Alt-Texte für Icons und Ikonographie für ähnliche Interaktionen und so weiter, auch in verschiedenen Bereichen Ihrer Website, helfen allen Ihren Nutzern.

### Seien Sie konsistent und vorhersehbar und nutzen Sie Normen

Während unbeschriftete Ikonographie nicht die effektivste Methode zur Vermittlung von Informationen ist, hilft es den Menschen zu verstehen, wofür das Icon steht, wenn der Gebrauch der Icons (und wenn beschriftet, deren Labeltext) konsistent bleibt. Ändern Sie daher nicht die Standardfunktionalitäten wie die Zurück-Schaltfläche des Browsers. Wenn Sie einen Benutzer umleiten müssen, lassen Sie den Benutzer im Voraus darüber Bescheid wissen.

## Eingabehilfe

[Guideline 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, um eine genaue Dateneingabe zu gewährleisten, und besagt, "unterstützen Sie Benutzer dabei, Fehler zu vermeiden und zu korrigieren". Auch wenn wir alle Fehler machen, neigen einige Menschen stärker dazu, sie zu machen, haben weniger Chancen, einen Fehler zu bemerken oder haben mehr Schwierigkeiten, einen Fehler zu korrigieren, sobald sie einen gemacht haben.

Die Richtlinien zur Eingabehilfe zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere solche mit Behinderungen, einen Fehler machen, und die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und erfolgreich alle Fehler beheben können.

### Übermittlung automatisierter Fehlererkennung

Benutzer müssen auf den Fehler hingewiesen und über das Problem informiert werden. Wenn es eine clientseitige Fehlererkennung gibt, beachten Sie die folgenden Richtlinien, um den Fehler so effektiv wie möglich zu kommunizieren:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Stellen Sie Text bereit, um unvollständige erforderliche Felder zu identifizieren und Textbeschreibungen anzugeben, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler die Einreichung eines Formulars verhindert hat, fokussieren Sie den Fehler. Wenn mehrere Fehler vorliegen, stellen Sie eine Zusammenfassung bereit, mit jedem Fehler einen Link zum entsprechenden Eingabefeld.
- Fügen Sie Text neben der Verwendung von Icons, Bildern, Farben usw. ein. Einige Menschen haben Schwierigkeiten, die Bedeutung von Icons und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, die textbasierte Version Ihrer Fehlermeldung zu verstehen. Für diese Nutzer sollten auch Dinge wie Icons und Farben bereitgestellt werden.
- Stellen Sie auch Feedback bereit, wenn ein Formular erfolgreich übermittelt wurde.

### Bereitstellung von Anleitungen für Benutzereingaben

Beginnen Sie das Formular mit Textanleitungen, wie es zu bedienen ist. Integrieren Sie Labels oder Anleitungen, wenn Benutzer Informationen eingeben müssen, und verwenden Sie dazu die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}}-Elemente.

Labels sollten beschreibend und nah am jeweiligen Eingabefeld platziert werden. Wenn ein bestimmtes Eingabeformat erforderlich ist, geben Sie ein Beispiel im richtigen Format an. Ziehen Sie außerdem in Betracht, serverseitige Validierung durchzuführen, um Eingabedaten zu formatieren, um die Benutzerfreundlichkeit bei der Eingabe zu unterstützen.

Wenn eine Formularsteuerung erforderlich ist, zeigen Sie dies sowohl visuell als auch [über den Code](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) an. Wenn eine Formularsteuerung den Kontext ändert, beschreiben Sie, was geschehen wird, in einer Weise, die der Benutzer versteht, bevor die Kontextänderung stattfindet.

### Fehlervorschläge

Stellen Sie dem Benutzer vorgeschlagene Eingaben zur Verfügung, wenn ein Eingabefehler automatisch erkannt wird und Korrekturvorschläge vorhanden sind (sofern dadurch nicht die Sicherheit oder der Zweck des Inhalts gefährdet werden).

### Katastrophen verhindern

Für Einsendungen, die zu rechtlichen, finanziellen oder anderen signifikanten Konsequenzen führen können, stellen Sie sicher, dass die Einsendungen überprüft, bestätigt und/oder reversibel sind.

Vom Benutzer eingegebene Daten sollten auf Fehler geprüft werden, bevor eine Übermittlung stattfindet, und der Benutzer sollte die Möglichkeit haben, sie zu korrigieren. Der Benutzer sollte in der Lage sein, Informationen vor der endgültigen Einreichung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie auch sicher, dass ein Bestätigungskasten neben einem Absenden-Knopf enthalten ist.

Wenn eine Einreichung eine rechtliche oder finanzielle Transaktion auslöst, geben Sie einen angegebenen Zeitraum an, innerhalb dessen die Anforderung vom Benutzer geändert oder storniert werden kann.

### Hilfe bereitstellen

Kontextsensitive Hilfe sollte bereitgestellt werden. Wenn ein Formular Texteingaben erfordert, geben Sie Formulareinstruktionen an, die den Zweck und die erforderliche Eingabe beschreiben. Integrieren Sie Rechtschreibprüfung und Vorschläge für lange Texteingaben sowie Links zu Hilfe- und Supportmaterialien. Wenn ein spezifisches Datenformat für Eingaben erwartet wird, geben Sie ein Beispiel an.

## Anmerkungen

Die oben genannten sind gute Designpraktiken. Sie werden jedem zugute kommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Webzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Centers for Disease Control schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hatte und von ihnen [kognitive Beeinträchtigung die häufigste bei jungen Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "geistige Behinderung" bezeichnet. Im Vereinigten Königreich wird "intellektuelle Behinderung" häufig als "Lernbehinderung" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Zugänglichkeitsrichtlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Zugänglichkeit](/de/docs/Learn/Accessibility/What_is_accessibility)
- [Zugänglichkeit für Anfallsstörungen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Verständnis der WCAG-Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG)
- [Überblick über die Zugänglichkeit](/de/docs/Learn/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [kognitiver Zugänglichkeitsrichtlinien](#wcag-richtlinien)
- [Die Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Kognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
