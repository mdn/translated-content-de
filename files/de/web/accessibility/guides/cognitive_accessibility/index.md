---
title: Kognitive Barrierefreiheit
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Kognitive Barrierefreiheit umfasst Überlegungen zur Barrierefreiheit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Barrierefreiheit ein und beschreibt, wie die Barrierefreiheit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit geistigen Behinderungen, die möglicherweise die am meisten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen beim Denken und Erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie. Dazu gehören auch Menschen mit Lernbehinderungen wie Legasthenie und Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS).

Obwohl es innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen große Unterschiede gibt, erleben Menschen mit diesen Beeinträchtigungen einen gemeinsamen Satz von funktionalen Problemen. Diese Probleme beinhalten Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung durch inkonsistente oder unkonventionelle Webseitenlayouts. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Barrierefreiheit ihrer Websites und Anwendungen zu verbessern.

## Überblick

Kognitive und intellektuelle Behinderungen umfassen ein breites Spektrum und können momentane, temporäre oder permanente Zustände sein. Zum Beispiel sind Demenz und Alzheimer permanente kognitive Beeinträchtigungen, die sich progressiv verschlechtern. Andere permanente kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprachstörungen, Autismus, ADD/ADHS, Legasthenie und Dyskalkulie.

Ein Beispiel für eine temporäre kognitive Beeinträchtigung könnten Menschen sein, die von Substanzen wie Alkohol oder Drogen beeinflusst sind. Eine andere Form kann Depression sein, zum Beispiel beim Trauern um den Verlust eines geliebten Menschen oder wenn man vorübergehend durch einen Tweet oder ein Video, das sie gerade online gesehen haben, traurig ist. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die breite Palette kognitiver Unterschiede anzugehen, insbesondere wenn Lösungen für zwei verschiedene Personen im Widerspruch stehen können. Eine Möglichkeit, damit umzugehen, ist, sich auf kognitive Fähigkeiten zu konzentrieren. Kognitive Fähigkeiten umfassen:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz, um zugängliche Lösungen für Menschen mit kognitiven Beeinträchtigungen bereitzustellen, umfasst:

- Bereitstellung von Inhalten in mehr als einer Weise, zum Beispiel durch Text-zu-Sprache oder Video;
- Bereitstellung von leicht verständlichen Inhalten, wie Texten, die unter Verwendung von Standards für einfache Sprache verfasst sind;
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötigen Inhalten oder Werbung;
- Bereitstellung eines konsistenten Webseitendesigns und einer gemeinsamen Navigation;
- Einbeziehung vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden und lila, wenn sie besucht wurden;
- Aufteilen von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- Ermöglichung einer möglichst einfachen Authentifizierung der Website ohne Kompromittierung der Sicherheit; und
- Vervollständigbare Formulare, beispielsweise mit klaren Fehlermeldungen und Fehlerbehebung.

## WCAG-Richtlinien

WCAG, Web Content Accessibility Guidelines, umfasst mehrere Richtlinien zur Verbesserung der kognitiven Barrierefreiheit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortiums (W3C), der wichtigsten internationalen Standardisierungsorganisation für das Internet, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/Guides)-Richtlinien.

WCAG werden von vier Prinzipien geleitet: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für kognitive Barrierefreiheit sind.

Jede der folgenden Richtlinien hilft mehr als nur Menschen mit kognitiven Behinderungen. Zum Beispiel, die Möglichkeit, die Ablaufzeit eines Codes zur Authentifizierung zu verlängern, der an ein Mobilgerät per Textnachricht gesendet wird, hilft in den folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit schlechtem Kurzzeitgedächtnis oder die Multitasking betreiben.
- Menschen mit weniger technologischem Wissen.
- Menschen mit schlechter drahtloser Verbindung.
- Menschen mit motorischen Kontrollproblemen.

## Anpassbarkeit

[Richtlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt "Inhalte sollten **anpassbar** sein". Erstellen Sie Inhalte, die auf verschiedene Weisen präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Zum Beispiel, bieten Sie {{Glossary("responsive_web_design", "responsive")}} Layouts mit einem Einspalten-Design für Mobilgeräte an.

Alle Informationen, einschließlich der durch die Darstellung vermittelten Struktur und Beziehungen, sollten in einer Form verfügbar sein, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Zum Beispiel könnten die Informationen über ein Erzählwerkzeug laut vorgelesen werden. Ihre Inhalte so zu gestalten, dass sie von Software verstanden werden können, ist eine gute Möglichkeit, sicherzustellen, dass sie in alternativen Präsentationsmodi verwendet werden können.

## Zeit

Es ist wichtig, den Nutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erledigen. [Richtlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt "Geben Sie den Benutzern genügend **Zeit**, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Prozess, der ohne Benutzereingabe nach einer festgelegten Zeit oder in regelmäßigen Abständen abläuft, wie beispielsweise das automatische Abmelden nach 30 Minuten oder das Vorsehen von 15 Minuten zum Tätigen eines Kaufs. Menschen mit kognitiven Beeinträchtigungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen zu nutzen. Lösungen umfassen, den Nutzern genügend zusätzliche Zeit zu geben, um Aufgaben zu absolvieren oder Zeitbeschränkungen ganz zu eliminieren.

### Timer

Optionen zum Anpassen von Zeitanforderungen umfassen:

- Dem Nutzer erlauben, die Zeit abzuschalten oder die Zeit auf mindestens das Zehnfache der ursprünglichen Begrenzung vor dem Erreichen zu erhöhen.
- Den Nutzer benachrichtigen und ihm einen Puffer von mindestens 20 Sekunden anbieten, um die Ablaufdauer durch eine Aktion, wie das Drücken der Leertaste, um das Zehnfache zu verlängern.

Bieten Sie eine Umschaltung bei Inhalten an, die es den Nutzern ermöglicht, eine längere Sitzungsablaufbeschränkung einzustellen oder ganz aufzuheben. Beispiele für zeitgesteuerte Inhalte umfassen Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn die Zeitbegrenzung länger als 20 Stunden ist, sind keine Anpassungen erforderlich.

### Bewegung, Blinken, Scrollen

Es ist wichtig, die Nutzer nicht abzulenken, insbesondere jene mit kognitiven Beeinträchtigungen.

Wenn sich bewegende, blinkende, scrollende oder automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Nutzer in der Lage sein, diese zu pausieren, zu stoppen, zu verbergen oder zu kontrollieren, es sei denn, es handelt sich um eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Informationen grundsätzlich die Bedeutung des Inhalts und/oder der Funktionalität ändern würde, **und** Informationen und Funktionalitäten nicht auf eine andere Weise erreicht werden können, die konform wäre. Dies umfasst animierte GIFs, falls das GIF länger als 5 Sekunden animiert.

Zusätzliche zeitliche Kriterien, die berücksichtigt werden sollten, sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit, um zu lesen und zu verstehen. Zur Verbesserung der Usability entfernen Sie jegliche Zeitbegrenzung. Zeitgesteuerte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitsyndrom sollten in der Lage sein, sich ohne Ablenkungen auf den Inhalt zu konzentrieren. Der Nutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Situationen, in denen eine Person auf einen Notfall aufmerksam gemacht wird. Dies bietet Menschen mit kognitiven Beeinträchtigungen Zugang, indem sie sich auf den Hauptzweck des Inhalts konzentrieren können. Dem Nutzer die Möglichkeit geben, Inhaltsaktualisierungen zu verschieben, indem sie eine Möglichkeit bieten, Inhaltsaktualisierungen anzufordern, anstatt sie automatisch zu aktualisieren. Außerdem eine Möglichkeit bereitstellen, unwesentliche Warnungen optional zu machen.
- Sicherstellen, dass Nutzer eine Aktivität ohne Datenverlust fortsetzen können, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben, beispielsweise indem der Zustand eines Fragebogens gespeichert wird. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung des Nutzers geändert werden können. Bevor neu authentifiziert wird, die Daten als versteckt oder verschlüsselt codieren.
- Warnungen vor Inaktivität bereitstellen, die zu einem Datenverlust führen könnte. Wenn eine Zeitüberschreitung verwendet wird, sagen Sie den Menschen genau, wie viel Zeit verstreicht, bevor die Sitzung abläuft und Daten verloren gehen. Die Ausnahme hiervon ist die Datenerhaltung für mehr als 20 Stunden, wenn keine Aktionen unternommen werden.

## Navigation

[Richtlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt "Bieten Sie Möglichkeiten, um den Nutzern beim Navigieren, Finden von Inhalten und Bestimmen ihres Standortes zu helfen" und stellt 10 Richtlinien zur Verfügung, um sicherzustellen, dass die Seite navigierbar ist und Inhalte auffindbar sind:

### Ein `<title>` einfügen

Stellen Sie sicher, dass ein {{HTMLElement('title')}} für das Dokument enthalten ist, da Titel eine schnelle und einfache Möglichkeit bieten, den Hauptpunkt des Bildschirms zu beschreiben. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren davon, den Zweck der Inhalte auf diese Weise identifizieren zu können.

### Überschriften und Beschriftungen

Fügen Sie klare und beschreibende Überschriften ein, damit Nutzer Informationen leicht finden und Beziehungen zwischen den verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Beschriftungen helfen Nutzern, bestimmte Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen und Menschen mit eingeschränktem Kurzzeitgedächtnis profitieren davon, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die Gesamtorganisation der Seiteninhalte zu definieren. Sie helfen, die Navigation durch die Inhaltsabschnitte der Seite zu erleichtern und bieten einen Mechanismus, um das Verständnis zu unterstützen. Beispiele für Überschriften umfassen Kapitel, Abschnitte und Unterabschnitte von Inhalten und mehr.

Überschriften sind offensichtlichere Navigationselemente im Vergleich zu anderen Methoden zur Identifizierung von Seiteninhaltsabschnitten (Rahmen, Leerraum, horizontale Linien usw.).

### Mehrere Möglichkeiten, um Inhalte zu finden

Verschiedene Nutzer bevorzugen unterschiedliche Methoden, um Informationen zu finden, daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, damit Nutzer Inhalte auf Ihrer Website lokalisieren können.

Die Bereitstellung von mehr als einer Möglichkeit, auf Ihrer Website zu navigieren, kann Menschen dabei helfen, Informationen schneller zu finden. Einige Nutzer ziehen es möglicherweise vor, ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktionalität zu verwenden, anstatt mehrere Seiten zu lesen und zu durchqueren, um das zu finden, was sie benötigen. Andere ziehen es möglicherweise vor, die Website in einer sequenziellen Weise zu erkunden und von Seite zu Seite zu wechseln, um den Aufbau, die Inhalte und die Konzepte der Website am besten zu verstehen.

### Möglichkeit, Inhaltsblöcke zu überspringen

Bereitstellung eines Mechanismus, wie eines [Skip-Links](/de/docs/Web/HTML/Reference/Elements/a#skip_links), um Inhaltsblöcke zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Fokusreihenfolge ergibt Sinn

Die Fokusreihenfolge für interaktive Elemente sollte sinnvoll sein. Um dies zu erreichen, sollte die DOM-Reihenfolge mit der visuellen Reihenfolge übereinstimmen, die wiederum mit der Tabulatorreihenfolge übereinstimmen sollte. Wenn die Tabulatorreihenfolge auf eine Weise springt, die nicht der visuellen Reihenfolge beim Navigieren mit der Tastatur entspricht, können Nutzer desorientiert werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Nutzer mit der Tastatur navigiert, sollte die Benutzeroberfläche offensichtlich machen, welches Element derzeit im Fokus steht. Ändern oder entfernen Sie nicht das Standard-[:focus](/de/docs/Web/CSS/Reference/Selectors/:focus)-Styling des Browsers, es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktext vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, zu welchem Ziel der User navigieren wird, wenn er ihn aktiviert. Schlecht formulierter Linktext kann Nutzer bezüglich seines Zwecks oder Ziels verwirren.

Einige Formen assistiver Technologien erlauben Nutzern die Navigation durch Listen aller auf der Seite vorhandenen Links. Links werden aus dem Kontext ihres umgebenden Nicht-Link-Inhalts entfernt, was verständlichen Linktext umso wichtiger macht. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne eine Angabe, wohin "hier" führen wird, ist der Zweck des Links unklar.

Für Bildschirmlesegeräte ist es entscheidend, dass der verknüpfte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalte für Bildschirmlesegeräte zu Links hinzugefügt haben und diese Inhalte ausführlich und potenziell verwirrend für sehende Leser sind, ziehen Sie in Betracht, den zusätzlichen Text auszuschneiden, um ihn für diejenigen zu verbergen, die keine assistiven Technologien verwenden.

### Aktueller Standort ist verfügbar

Nutzer sollten sich innerhalb einer Website oder Anwendung orientieren können. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die bei einer langen Reihe von Navigationsschritten verwirrt werden können.

Alle Nutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere bei Websites oder Anwendungen mit großen Mengen an Inhalten oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Breadcrumbs")}}, {{Glossary("Site_map", "Sitemaps")}} und das Kennzeichnen der aktuellen Seite in der Navigation als "Aktuell" sind alles Techniken, die dabei helfen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Richtlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt "Machen Sie Textinhalte lesbar und verständlich". Für einige Nutzer ist es schwierig, die Bedeutung eines Wortes oder einer Phrase aus dem Kontext heraus abzuleiten, insbesondere wenn das Wort oder die Phrase auf ungewöhnliche Weise verwendet wird oder eine spezielle Bedeutung erhalten hat.

Für diese Nutzer kann die Fähigkeit zu lesen und zu verstehen vom Vorhandensein spezifischer Definitionen oder der ausgeschriebenen Form von Akronymen oder Abkürzungen abhängen. Einige Nutzer haben große Schwierigkeiten, geschriebene Wörter zu erkennen, verstehen jedoch äußerst komplexe und anspruchsvolle Dokumente, wenn der Text laut gelesen wird oder wenn wichtige Prozesse und Ideen visuell veranschaulicht werden.

### Sprache der Seite und jeden Inhalt, der nicht in dieser Hauptsprache ist, angeben

Die Sprache jeder Seite muss durch das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) auf dem {{HTMLElement('html')}}-Element angegeben werden. Fügen Sie das `lang`-Attribut erneut auf Text ein, der in einer anderen Sprache als der Hauptsprache des Dokuments verfasst ist.

Der korrekte Gebrauch von `lang` ermöglicht es einigen Bildschirmlesegeräten, den Text korrekt anzukündigen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Ungewöhnliche Wörter und Wortverwendungen definieren

Einige Behinderungen erschweren es, nicht-wörtlichen Wortgebrauch zu verstehen, wie Idiome, umgangssprachliche Ausdrücke und Fachjargon. Nicht-muttersprachliche Sprecher können ebenfalls Schwierigkeiten mit diesen Begriffen haben. Wenn ein Wort oder eine Phrase eine einzigartige Bedeutung hat, geben Sie im Dokument eine Definition direkt im Text oder verlinkt an, innerhalb eines Glossars oder zu einem Online-Wörterbuch. Wenn ein Wort oder eine Phrase mehr als eine Bedeutung hat, definieren Sie jede Verwendung.

### Abkürzungen definieren

Abkürzungen können für Menschen verwirrend sein, die:

- Schwierigkeiten beim Dekodieren von Wörtern haben.
- Ein eingeschränktes Gedächtnis haben.
- Schwierigkeiten haben, den Zusammenhang zur Unterstützung des Verständnisses zu nutzen.
- Sich auf Bildschirmvergrößerer verlassen (die oft kontextuelle Hinweise reduzieren).

Geben Sie beim ersten Mal, dass eine Abkürzung verwendet wird, die erweiterte Form an, gefolgt von der Abkürzung in einem {{HTMLElement('abbr')}}-Element. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments ist (z. B. Latein), erklären Sie deren Bedeutung. Erwägen Sie auch, [ruby text](/de/docs/Web/HTML/Reference/Elements/ruby) für Initialismen (Aussprechung von Akronymen) zu verwenden.

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben sein. Eine gute Regel ist, die Inhalte so einfach zu gestalten, dass sie beim ersten Lesen verstanden werden können. Methoden, um dies zu erreichen, umfassen:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung des Aktivsatzes in der Gegenwartsform.
- Verwendung korrekter Grammatik und Rechtschreibung.

Es hilft Nutzern mit kognitiven Beeinträchtigungen, eine Textzusammenfassung (manchmal als TL;DR oder "zu lang; nicht gelesen" bezeichnet) auf einem niedrigen Leserniveau bereitzustellen. Eine weitere Technik, die Sie verwenden können, ist die Bereitstellung begleitender visueller Darstellungen, um Ideen, Ereignisse und Prozesse zu erklären.

Es gibt Werkzeuge, die das Niveau Ihrer Inhalte bewerten können. Beispielsweise hat dieses Dokument einen durchschnittlichen Notenstand von etwa 11. Das bedeutet, dass es von einem englischsprachigen Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Werkzeuge können sogar Vorschläge zur Vereinfachung geben.

### Aussprache

Es gibt mehrere Techniken, die dabei helfen können, den Menschen beizubringen, wie man Wörter ausspricht:

- Geben Sie die Aussprache unmittelbar nach dem Wort an.
- Einen Link zu einer Liste von Aussprachen bereitstellen.
- Ein Glossar mit Aussprachen bereitstellen.
- Verwenden Sie das {{HTMLElement('ruby')}}-Element, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Die Bereitstellung von Anleitungen zur Aussprache von Wörtern hilft vielen verschiedenen Menschen, einschließlich derjenigen, die bevorzugen, laut vorzulesen, nicht-muttersprachlichen Sprechern und Menschen, die nicht mit der Bedeutung eines Begriffs im Kontext vertraut sind.

Eine andere Lösung besteht darin, Glyphen oder diakritische Zeichen zu verwenden, um die Aussprache zu veranschaulichen. Wenn diese Technik jedoch verwendet wird, muss es eine Möglichkeit geben, sie auszuschalten. Ferner ist es hilfreich, einen Link zu einer Anleitung zu den verwendeten Zeichen bereitzustellen, da deren Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Richtlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt "Webseiten müssen in vorhersehbarer Weise erscheinen und funktionieren". Dies ist ein Grundsatz des guten User-Experience-Designs. Konsistenz ist insbesondere für Menschen mit kognitiven Schwierigkeiten wichtig. Dazu gehört Konsistenz im Seitenlayout und vorhersehbare interaktive Komponenten.

### Verwenden Sie die Aktivierung, nicht den Fokus, um den Kontext zu ändern

Das Herstellen eines Kontextwechsels sollte absichtlich erfolgen. Deshalb sollte, wenn ein UI-Feature die [Fokussierung](/de/docs/Web/API/HTMLElement/focus) erhält, es keine weiteren benutzerorientierten Aktionen auslösen. Vielmehr sollten Nutzer in der Lage sein, ein Feature zu "aktivieren", um den Wechsel auszulösen.

### Ändern Sie die Einstellungen basierend auf einer aktiven Anfrage

Die Bedienung von Formularsteuerelementen und der Dateneingabe sollte zu vorhersehbarem Verhalten führen. Kontextänderungen können Menschen mit kognitiven Beeinträchtigungen verwirren und sollten daher nur dann erfolgen, wenn klar ist, dass eine solche Änderung als Reaktion auf die Aktion des Nutzers erfolgt.

Zustandsänderungen sollten absichtliche Benutzerhandlungen erfordern. Beispiele hierfür sind das Ankreuzen eines Kontrollkästchens, die Eingabe von Daten oder das Ändern einer Auswahloption. Stellen Sie auch sicher, dass eine Absende-Schaltfläche bereitgestellt wird, um die Kontextänderung zu initiieren, und beschreiben Sie, was geschehen wird, bevor die Änderung vorgenommen wird.

### Behalten Sie eine konsistente Navigation auf der gesamten Seite bei

Behalten Sie die Navigationsreihenfolge zwischen Seiten bei. Wenn Sie beispielsweise eine Navigationsleiste auf mehreren Seiten haben, machen Sie diese Navigation auf der gesamten Site einheitlich und platzieren Sie die gleichen Links an denselben Stellen. Dies gilt nicht nur für die Navigation: Präsentieren Sie alle wiederkehrenden Komponenten in der gleichen relativen Reihenfolge, jedes Mal, wenn sie erscheinen.

### Stellen Sie konsistente Beschriftungen bereit

Identische Funktionen sollten jedes Mal ähnliche Beschriftungen haben, wenn sie verwendet werden. Konsistente Beschriftungen von Schaltflächen, Alternativtext für Icons und Ikonographie für ähnliche Interaktionen und so weiter, auch in verschiedenen Abschnitten Ihrer Website, helfen allen Ihren Nutzern.

### Seien Sie konsistent und vorhersehbar, und verwenden Sie Normen

Während unbeschriftete Ikonographie nicht die effektivste Methode zur Informationsvermittlung ist, hilft die Konsistenz in der Verwendung der Icons (und, wenn beschriftet, ihres Beschriftungstextes) den Menschen, zu verstehen, was das Icon repräsentiert. Ändern Sie ähnliche Defaults, wie die Rücktaste des Browsers, nicht. Wenn Sie einen Nutzer umleiten müssen, lassen Sie den Benutzer im Voraus darüber wissen.

## Eingabeunterstützung

[Richtlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) soll die korrekte Dateneingabe sicherstellen und sagt "Hilfe für die Nutzer, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind manche Menschen eher dazu geneigt, Fehler zu machen, weniger wahrscheinlich, einen Fehler zu bemerken oder es fällt ihnen schwerer, einen Fehler zu korrigieren, den sie gemacht haben.

Die Eingabeunterstützungsrichtlinien zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Nutzer, insbesondere solche mit Behinderungen, einen Fehler machen, und im Falle eines Fehlers die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und den Fehler erfolgreich beheben können.

### Übermittlung von automatisierten Fehlererkennungen

Nutzer müssen auf den Fehler aufmerksam gemacht werden und darüber informiert werden, was falsch ist. Wenn eine clientseitige Fehlererkennung vorhanden ist, halten Sie sich an die folgenden Richtlinien, um den Fehler effektiv an den Nutzer zu übermitteln:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Geben Sie Text an, um nicht vollständige erforderliche Felder und Textbeschreibungen zu identifizieren, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler das Absenden eines Formulars verhindert, fokussieren Sie auf den Fehler. Wenn mehrere Fehler vorhanden sind, bieten Sie eine Zusammenfassung an, wobei jeder Fehler auf den zugehörigen Eingabebereich verlinkt ist.
- Fügen Sie Text zusammen mit der Verwendung von Icons, Bildern, Farben und so weiter hinzu. Einige Menschen haben Schwierigkeiten, die Bedeutung von Icons und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, die Textversion Ihrer Fehlermeldung zu verstehen. Für diese Menschen bieten Sie auch Dinge wie Icons und Farben an.
- Geben Sie auch Rückmeldungen, wenn ein Formular erfolgreich eingereicht wurde.

### Anweisungen zur Nutzereingabe bereitstellen

Beginnen Sie das Formular mit Textanweisungen, wie es zu bedienen ist. Fügen Sie Beschriftungen oder Anweisungen ein, wenn Nutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}}-Elemente verwenden.

Beschriftungen sollten beschreibend und nah an der Eingabe positioniert sein, zu der sie gehören. Wenn ein spezifisches Format für die Eingabe erforderlich ist, bieten Sie ein Beispiel im korrekten Format an. Erwägen Sie auch die serverseitige Validierung, um Eingabedaten zu formatieren, was die Benutzerfreundlichkeit der Eingabe fördert.

Wenn ein Formularsteuerelement erforderlich ist, zeigen Sie es sowohl visuell als auch [durch Code](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) an. Wenn ein Formularsteuerelement den Kontext ändert, beschreiben Sie, was geschehen wird, auf eine Weise, die der Nutzer versteht, bevor er die Kontextänderung verursacht.

### Fehlerbehebung

Geben Sie Vorschläge zur Eingabe, wenn ein Eingabefehler automatisch erkannt wird und Vorschläge zur Korrektur verfügbar sind (es sei denn, diese würden die Sicherheit oder den Zweck der Inhalte gefährden).

### Verhindern Sie Katastrophen

Für Einsendungen, die zu rechtlichen, finanziellen oder anderen wesentlichen Konsequenzen führen können oder führen, stellen Sie sicher, dass die Einsendungen überprüft, bestätigt und/oder zurücknehmbar sind.

Von Benutzer eingegebene Daten sollten auf Fehler überprüft werden, bevor sie gesendet werden, und der Benutzer muss die Möglichkeit haben, diese zu korrigieren. Der Benutzer sollte in der Lage sein, die Informationen vor der endgültigen Einreichung zu überprüfen, zu bestätigen und zu korrigieren. Außerdem sicherstellen, dass ein Bestätigungsfeld neben einem Absende-Button vorhanden ist.

Wenn eine Einreichung rechtliche oder finanzielle Transaktionen auslöst, geben Sie einen festgelegten Zeitraum an, innerhalb dessen der Nutzer die Anfrage ändern oder stornieren kann.

### Hilfe bereitstellen

Kontextbezogene Hilfe sollte verfügbar gemacht werden. Wenn ein Formular eine Texteingabe erfordert, geben Sie Formulareinweisungen zum Zweck und zur erforderlichen Eingabe. Integrieren Sie Rechtschreibprüfung und Vorschläge für Texteingaben sowie Links zu Hilfs- und Unterstützungsdokumenten. Wenn ein spezifisches Datenformat für Eingaben erwartet wird, bieten Sie ein Beispiel an.

## Hinweise

Die oben genannten sind gute Designpraktiken. Sie werden jedem zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines des W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) entsprechen.
- Die [Arbeitsgruppe für Barrierefreiheit bei kognitiven und Lernbehinderungen des W3C](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Web-Barrierefreiheitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Seite zu kognitiven Themen](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Centers for Disease Control schätzen, dass im Jahr 2018 1 von 4 Bürgern der USA eine Behinderung hat und [kognitive Beeinträchtigung ist die häufigste für junge Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "geistige Behinderung" bezeichnet. In Großbritannien werden "intellektuelle Behinderungen" allgemein als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Barrierefreiheitsrichtlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Barrierefreiheit für Anfallsstörungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Verstehen der WCAG-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Überblick über Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [Richtlinien zur kognitiven Barrierefreiheit](#wcag-richtlinien)
- [Das W3C-Arbeitsgruppe für Barrierefreiheit bei kognitiven und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM-Kognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC-Informationen zu Behinderungen](https://www.cdc.gov/disability-and-health/)
