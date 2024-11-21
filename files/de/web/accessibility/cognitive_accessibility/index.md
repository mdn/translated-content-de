---
title: Kognitive Zugänglichkeit
slug: Web/Accessibility/Cognitive_accessibility
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{AccessibilitySidebar}}

Kognitive Zugänglichkeit umfasst Überlegungen zur Zugänglichkeit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Zugänglichkeit ein und zeigt, wie die Zugänglichkeit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit geistigen Behinderungen, die möglicherweise über die am stärksten eingeschränkten Fähigkeiten verfügen, bis hin zu altersbedingten Problemen mit Denken und Erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie. Es umfasst auch Menschen mit Lernbehinderungen, wie Dyslexie und Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS).

Obwohl es innerhalb der klinischen Definitionen kognitiver Beeinträchtigungen eine große Vielfalt gibt, erleben Menschen mit diesen Beeinträchtigungen eine gemeinsame Reihe funktionaler Probleme. Zu diesen Problemen gehören Schwierigkeiten, Inhalte zu verstehen, sich zu erinnern, wie man Aufgaben erledigt, und Verwirrung, die durch inkonsistente oder nicht-traditionelle Webseitenlayouts verursacht wird. In diesem Dokument konzentrieren wir uns darauf, welche Schritte Entwickler unternehmen sollten, um die kognitive Zugänglichkeit ihrer Websites und Anwendungen zu verbessern.

## Übersicht

Kognitive und geistige Behinderungen umfassen ein breites Spektrum und können momentane, vorübergehende oder dauerhafte Zustände sein. Zum Beispiel sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich progressiv verschlechtern. Weitere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprechstörungen, Autismus, ADD/ADHS, Dyslexie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnten Menschen sein, die von Substanzen wie Alkohol oder Drogen beeinflusst werden. Eine weitere Form kann Depression sein, wie beim Trauern um den Verlust eines geliebten Menschen oder bei einer momentanen Verstimmung durch einen Tweet oder ein Video, das sie gerade online gesehen haben. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die breite Palette an kognitiven Unterschieden anzugehen, insbesondere wenn Lösungen für zwei verschiedene Personen widersprüchlich sein können. Eine Möglichkeit, damit umzugehen, ist der Fokus auf kognitive Fähigkeiten. Zu den kognitiven Fähigkeiten gehören:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z. B. durch Text-zu-Sprache oder per Video;
- Bereitstellung leicht verständlicher Inhalte, z. B. Texte, die in einfacher Sprache geschrieben sind;
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötigen Inhalten oder Werbung;
- Bereitstellung eines konsistenten Webseitenlayouts und einer nachvollziehbaren Navigation;
- Einbeziehung vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- Sichere Authentifizierung auf Websites so einfach wie möglich gestalten; und
- Formulare einfach auszufüllen, z. B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

## WCAG-Richtlinien

WCAG, Web Content Accessibility Guidelines, umfasst mehrere Richtlinien zur Verbesserung der kognitiven Zugänglichkeit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortiums (W3C), der Hauptorganisation für internationale Internetstandards, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/ARIA_Guides) Richtlinien.

WCAG basiert auf vier Prinzipien: Webseiten müssen Wahrnehmbar, Bedienbar, Verständlich und Robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Zugänglichkeit sind.

Alle folgenden Richtlinien helfen weit mehr als nur Menschen mit kognitiven Behinderungen. Zum Beispiel ist die Möglichkeit, die Ablaufzeit einer Anwendung zu verlängern, die einen per SMS an ein mobiles Gerät gesendeten Authentifizierungscode erfordert, hilfreich in den folgenden Szenarien:

- Menschen mit Aufmerksamkeitsstörungen oder Angsterkrankungen.
- Menschen mit schlechtem Kurzzeitgedächtnis oder die multitaskingfähig sind.
- Menschen, die weniger technisch versiert sind.
- Menschen mit schlechter drahtloser Empfangsabdeckung.
- Menschen mit motorischen Steuerungsproblemen.

## Anpassungsfähigkeit

[Richtlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt "Inhalte sollten **anpassbar** sein". Inhalte sollten in unterschiedlichen Formen dargestellt werden können, ohne dass Informationen oder Struktur verloren gehen. Zum Beispiel sollten {{Glossary("responsive_web_design", "responsive")}} Layouts bereitgestellt werden, mit einem Einkolonnen-Design für mobile Geräte.

Alle Informationen, einschließlich der durch die Darstellung vermittelten Struktur und Beziehungen, sollten in einer Form vorliegen, die von allen Nutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Beispielsweise könnten die Informationen über ein Erzählwerkzeug laut vorgelesen werden. Die Möglichkeit, Inhalte für die Software verständlich zu gestalten, ist eine gute Möglichkeit sicherzustellen, dass sie auch in alternativen Präsentationsmodi verwendet werden kann.

## Zeit

Es ist wichtig, den Nutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erledigen. [Richtlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt "den Nutzern genug **Zeit** geben, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Prozess, der ohne Benutzerinitiation nach einer festgelegten Zeit oder regelmäßig stattfindet, wie beispielsweise das Ausloggen nach 30 Minuten oder das Erhalten von 15 Minuten Zeit, um einen Kauf zu tätigen. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen zu übernehmen. Lösungen bestehen darin, den Nutzern genügend zusätzliche Zeit zu geben, um Aufgaben zu erledigen oder Zeitbeschränkungen vollständig zu beseitigen.

### Timer

Optionen zur Anpassung der Zeitvorgaben umfassen:

- Dem Nutzer erlauben, die Zeit auszuschalten oder anzupassen, sodass sie mindestens das 10-fache des ursprünglichen Limits beträgt, bevor sie auftritt.
- Den Nutzer warnen und ihm einen Puffer von mindestens 20 Sekunden geben, um die Zeitüberschreitung mit einer Aktion, wie das Drücken der Leertaste, um das 10-fache zu verlängern.

Bieten Sie eine Umschalttaste auf Inhalten, die es Benutzern ermöglicht, eine längere Sitzungszeitbegrenzung einzuschalten oder überhaupt keine Sitzungszeitbegrenzung zu verwenden. Beispiele für zeitgesteuerte Inhalte umfassen Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden ist, sind keine Anpassungen erforderlich.

### Bewegung, Blinken, Scrollen

Es ist wichtig, die Nutzer nicht abzulenken, insbesondere diejenigen mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder sich automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Nutzer in der Lage sein, sie zu pausieren, zu stoppen, zu verstecken oder zu kontrollieren, es sei denn, es ist eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder sich automatisch aktualisierenden Informationen die Bedeutung des Inhalts und/oder der Funktionalität grundlegend verändern würde **und** Informationen und Funktionalität nicht in anderer Weise erreicht werden können, die konform wäre. Dies umfasst animierte GIFs, wenn das gif länger als 5 Sekunden animiert.

Zusätzliche zeitliche Kriterien zur Berücksichtigung sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Zur Verbesserung der Benutzerfreundlichkeit entfernen Sie jegliches Zeitlimit. Zeitbeschränkte Inhalte sollten vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten in der Lage sein, sich ohne Ablenkungen auf Inhalte zu konzentrieren. Der Benutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, mit Ausnahme von Situationen, die eine Warnung an eine Person über einen Notfall beinhalten. Dies ermöglicht es den Menschen mit kognitiven Behinderungen, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen durch Bereitstellung einer Möglichkeit, Inhaltsaktualisierungen anzufordern, anstatt automatisch zu aktualisieren. Stellen Sie außerdem sicher, dass nicht essentielle Warnungen optional sind.
- Stellen Sie sicher, dass Menschen eine Aktivität ohne Datenverlust fortsetzen können, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben, zum Beispiel durch das Speichern des Zustands eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung durch den Benutzer geändert werden können. Bevor Sie erneut authentifizieren, kodieren Sie die Daten als versteckt oder verschlüsselt.
- Bereitstellung von Warnungen bei Inaktivität, die zu Datenverlust führen könnten. Wenn ein Timeout verwendet wird, teilen Sie den Menschen genau mit, wie viel Zeit dazu führen wird, dass die Sitzung abläuft und Daten verloren gehen. Die Ausnahme zu dieser Regel ist das Aufbewahren von Daten für mehr als 20 Stunden, wenn keine Maßnahmen ergriffen wurden.

## Navigation

[Richtlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt "bieten Sie Möglichkeiten, die den Nutzern helfen, zu navigieren, Inhalte zu finden und festzustellen, wo sie sich befinden," und bietet 10 Richtlinien, um sicherzustellen, dass die Seite navigierbar ist und Inhalte auffindbar sind:

### Fügen Sie einen `<title>` hinzu

Stellen Sie sicher, dass Sie ein {{HTMLElement('title')}} für das Dokument hinzufügen, da Titel eine schnelle und einfache Möglichkeit bieten, eine Beschreibung des Hauptinhalts der Seite zu referenzieren. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwäche profitieren davon, den Zweck von Inhalten auf diese Weise zu identifizieren.

### Überschriften und Beschriftungen

Fügen Sie klare und beschreibende Überschriften hinzu, damit Benutzer Informationen einfach finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Beschriftungen helfen den Benutzern, spezifische Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen und Menschen mit begrenztem Kurzzeitgedächtnis profitieren davon, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die allgemeine Organisation der Seiteninhalte zu definieren. Sie erleichtern die Navigation durch Seitinhaltsabschnitte und bieten einen Mechanismus, um das Verständnis zu unterstützen. Beispiele für Überschriften umfassen Kapitel, Abschnitte und Unterabschnitte von Inhalten und so weiter.

Überschriften sind eindeutigere Navigationshilfen im Vergleich zu anderen Methoden zur Identifizierung von Seiteninhaltsabschnitten (Rahmen, Leerzeichen, horizontale Linien usw.).

### Mehrere Möglichkeiten, Inhalte zu finden

Verschiedene Benutzer bevorzugen unterschiedliche Methoden, um Informationen zu finden, deshalb ist es wichtig, mehrere Möglichkeiten anzubieten, mit denen Benutzer Inhalte auf Ihrer Website lokalisieren können.

Die Bereitstellung von mehr als einer Möglichkeit, auf Ihrer Website zu navigieren, kann Menschen helfen, Informationen schneller zu finden. Einige Benutzer bevorzugen vielleicht ein Inhaltsverzeichnis, eine Sitemap oder Suchfunktionen, anstatt durch mehrere Seiten lesen und navigieren zu müssen, um das zu finden, was sie benötigen. Andere bevorzugen möglicherweise, die Seite schrittweise zu erkunden, sich von Seite zu Seite zu bewegen, um das Layout, die Inhalte und die Konzepte der Site am besten zu verstehen.

### Möglichkeit, Inhaltsblöcke zu umgehen

Bereitstellung eines Mechanismus, wie eines [Skip-Links](/de/docs/Web/HTML/Element/a#skip_links), um Inhaltsblöcke zu umgehen, die auf mehreren Webseiten wiederholt werden.

### Fokusreihenfolge sollte sinnvoll sein

Die Fokusreihenfolge für interaktive Elemente sollte sinnvoll sein. Um dies zu erreichen, sollte die DOM-Reihenfolge der visuellen Reihenfolge entsprechen, die wiederum der Tab-Reihenfolge entsprechen sollte. Wenn die Tab-Reihenfolge herumspringt, insbesondere in einer Weise, die nicht der visuellen Reihenfolge entspricht, wenn mit der Tastatur navigiert wird, können Benutzer desorientiert werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Benutzer mit einer Tastatur navigiert, sollte die Benutzeroberfläche deutlich machen, welches Element derzeit den Fokus hat. Ändern oder entfernen Sie nicht das Standardstyling des Browsers für [`:focus`](/de/docs/Web/CSS/:focus), es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktext vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, wohin der Benutzer beim Aktivieren des Links navigiert wird. Schlecht formulierter Linktext kann Benutzer bezüglich seines Zwecks oder Ziels verwirren.

Einige Assistive-Technologie-Formen ermöglichen Benutzern das Navigieren über Listen aller auf der Seite vorhandenen Links. Die Links werden aus ihrem umgebenden, nicht-linkenden Kontext entfernt, was die Notwendigkeit für verständlichen Linktext noch wichtiger macht. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Klicken Sie hier" lautet. Ohne anzugeben, wohin "hier" führt, bleibt der Zweck des Links unklar.

Für Screenreader ist es wichtig, dass der verlinkte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalt zu Links für Screenreader hinzugefügt haben und dieser Inhalt ausführlich und potenziell verwirrend für sehende Leser ist, ziehen Sie in Betracht, den hinzugefügten Text visuell zu verstecken, um diejenigen, die keine assistive Technologien verwenden, nicht zu beeinträchtigen.

### Aktueller Standort ist verfügbar

Benutzer sollten sich innerhalb einer Website oder Anwendung orientieren können. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die möglicherweise verwirrt werden, wenn sie einer langen Reihe von Navigationsschritten folgen.

Alle Nutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere bei Webseiten oder Anwendungen mit großen Mengen an Inhalten oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Brotkrumen")}}, {{Glossary("Site_map", "Sitemaps")}} und das Identifizieren der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die helfen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Richtlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt "machen Sie Textinhalte lesbar und verständlich". Für einige Nutzer ist es schwierig, die Bedeutung eines Wortes oder Satzes aus dem Kontext zu erschließen, insbesondere wenn das Wort oder der Satz auf ungewöhnliche Weise verwendet wird oder eine spezielle Bedeutung hat.

Für diese Benutzer kann die Fähigkeit zu lesen und zu verstehen davon abhängen, dass spezifische Definitionen oder die erweiterten Formen von Akronymen oder Abkürzungen verfügbar sind. Einige Benutzer können große Schwierigkeiten haben, geschriebene Wörter zu erkennen, verstehen jedoch äußerst komplexe und anspruchsvolle Dokumente, wenn der Text laut vorgelesen wird oder wenn wichtige Prozesse und Ideen visuell veranschaulicht werden.

### Deklarieren Sie die Sprache der Seite und aller Inhalte, die nicht in dieser Hauptsprache sind

Die Sprache jeder Seite muss durch das Verwenden des [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attributs am {{HTMLElement('html')}} Element deklariert werden. Fügen Sie das `lang` Attribut auch bei Text hinzu, der in einer anderen Sprache als der Hauptsprache des Dokuments ist.

Die korrekte Verwendung von `lang` erlaubt es einigen Screenreadern, den Text korrekt anzukündigen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Sprachsynthesesoftware verwenden.

### Definieren Sie ungewöhnliche Wörter und Wortverwendungen

Einige Behinderungen machen es schwierig, nichtwörtliche Wortverwendungen zu verstehen, wie Idiome, umgangssprachliche Ausdrücke und spezielle Fachbegriffe. Auch Personen, die die Sprache nicht perfekt beherrschen, können mit diesen Begriffen Schwierigkeiten haben. Wenn ein Wort oder Satz eine einzigartige Bedeutung hat, geben Sie die Definition im Dokument entweder direkt oder verlinkt, innerhalb eines Glossars oder zu einem Online-Wörterbuch an. Wenn ein Wort oder eine Phrase mehr als eine Bedeutung hat, definieren Sie jede Verwendung.

### Definition von Abkürzungen

Abkürzungen können für Menschen verwirrend sein, die:

- Schwierigkeiten haben, Wörter zu entschlüsseln.
- Ein begrenztes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zur Unterstützung des Verständnisses zu nutzen.
- Auf Bildschirmvergrößerer angewiesen sind (die häufig kontextuelle Hinweise reduzieren).

Geben Sie die vollständige Form der Abkürzung an, sobald sie zum ersten Mal verwendet wird, gefolgt von der Abkürzung in einem {{HTMLElement('abbr')}} Element. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments vorliegt (wie Latein), erklären Sie deren Bedeutung. Erwägen Sie auch die Verwendung von [Ruby-Text](/de/docs/Web/HTML/Element/ruby) für Initialismen (Aussprache von Akronymen).

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben werden. Eine gute Regel ist, Inhalte so einfach zu machen, dass sie beim ersten Mal verstanden werden können. Methoden, um dies zu erreichen, sind:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung des aktiven Sprachstils im Präsens.
- Verwendung korrekter Grammatik und Rechtschreibung.

Es hilft Nutzern mit kognitiven Behinderungen, eine Textzusammenfassung auf einem niedrigen Lesestand (manchmal als TL;DR, "zu lang; nicht gelesen" bezeichnet) bereitzustellen. Eine weitere Technik, die Sie verwenden können, ist die Bereitstellung von begleitenden visuellen Darstellungen, um Ideen, Ereignisse und Prozesse zu erklären.

Es gibt Tools, die das Niveau Ihrer Inhalte bewerten können. Beispielsweise hat dieses Dokument ein durchschnittliches Bildungsniveau von etwa 11. Dies bedeutet, dass es von einem englischsprachigen Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Tools können sogar Vorschläge zur Vereinfachung geben.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen beizubringen, wie man Wörter ausspricht:

- Geben Sie die Aussprache direkt nach dem Wort an.
- Verlinken Sie zu einer Liste von Aussprachen.
- Stellen Sie ein Glossar mit Aussprache bereit.
- Verwenden Sie das {{HTMLElement('ruby')}} Element, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Anleitungen zur Aussprache von Wörtern zu geben, hilft vielen verschiedenen Arten von Menschen, einschließlich solcher, die es bevorzugen, laut zu lesen, Nicht-Muttersprachler sowie Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine weitere Lösung ist die Verwendung von Glyphen oder diakritischen Zeichen, um die Aussprache zu veranschaulichen. Wenn diese Technik verwendet wird, muss es jedoch einen Mechanismus geben, um sie auszuschalten. Ferner ist es hilfreich, einen Leitfaden zu den verwendeten Zeichen anzubieten, da deren Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersagbarkeit

WCAG [Richtlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt "lassen Sie Webseiten in vorhersehbarer Weise erscheinen und operieren". Dies ist ein Grundsatz guten Benutzererfahrungsdesigns. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dies umfasst Konsistenz im Seitenlayout und vorhersehbare interaktive Komponenten.

### Verwenden Sie die Aktivierung, nicht den Fokus, um den Kontext zu ändern

Das Erstellen einer Änderung im Kontext sollte absichtsvoll erfolgen. Aus diesem Grund sollte eine UI-Funktion, die [Fokus](/de/docs/Web/API/HTMLElement/focus) erhält, keine weiteren benutzerseitigen Aktionen auslösen. Stattdessen sollten Benutzer ein Feature "aktivieren" müssen, um die Änderung zu bewirken.

### Änderung der Einstellung basierend auf einer aktiven Anforderung

Die Bedienung von Formularsteuerelementen und die Dateneingabe sollten vorhersehbares Verhalten bewirken. Kontextänderungen können Benutzer mit kognitiven Behinderungen verwirren und sollten deshalb nur dann auftreten, wenn klar ist, dass eine solche Änderung in Reaktion auf die Aktion des Benutzers aufgezeigt wird.

Das Ändern des Zustands sollte absichtliche Benutzeraktionen erfordern. Beispiele hierfür sind das Aktivieren eines Kontrollkästchens, die Eingabe von Daten oder das Ändern einer Auswahloption. Stellen Sie außerdem sicher, dass ein Absenden-Button zur Einleitung der Kontextänderung bereitsteht und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Halten Sie die Navigation über die gesamte Website konsistent

Halten Sie die Navigationsreihenfolge zwischen den Seiten konsistent. Wenn Sie beispielsweise eine Navigationsleiste auf mehreren Seiten haben, gestalten Sie die Navigation über die gesamte Website einheitlich mit denselben Links an derselben Stelle. Dies gilt nicht nur für die Navigation: Stellen Sie sicher, dass alle wiederkehrenden Komponenten jedes Mal in derselben Reihenfolge präsentiert werden, wenn sie erscheinen.

### Bieten Sie konsistente Beschriftungen

Identische Funktionen sollten immer mit ähnlichen Beschriftungen versehen sein, wenn sie verwendet werden. Konsistente Schaltflächenbeschriftungen, alternativer Text für Symbole und Ikonografie für ähnliche Interaktionen usw., selbst in verschiedenen Abschnitten Ihrer Website, helfen all Ihren Benutzern.

### Seien Sie konsistent und vorhersehbar, und verwenden Sie Normen

Während nicht beschriftete Ikonografie nicht die effektivste Methode zur Informationsübermittlung ist, hilft es den Menschen, zu verstehen, was das Symbol repräsentiert, wenn die Verwendung der Symbole (und wenn beschriftet, deren Beschriftungstext) konsistent bleibt. Ändern Sie auch keine Standardeinstellungen wie die Zurückschaltfläche des Browsers. Wenn Sie einen Benutzer umleiten möchten, lassen Sie es ihn vorher wissen.

## Eingabeunterstützung

[Richtlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, genaue Dateneingabe zu gewährleisten, indem "Benutzern geholfen wird, Fehler zu vermeiden und zu korrigieren". Auch wenn wir alle Fehler machen, sind einige Menschen eher geneigt, Fehler zu machen, weniger wahrscheinlich, einen Fehler zu bemerken oder haben größere Schwierigkeiten, einen Fehler zu korrigieren, wenn sie einen machen.

Die Eingabeunterstützungsrichtlinien zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere solche mit Behinderungen, einen Fehler machen, und ihre Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen können und in der Lage sind, alle Fehler erfolgreich zu beheben.

### Automatische Fehlererkennung übertragen

Benutzer müssen auf den Fehler aufmerksam gemacht und darüber informiert werden, was falsch ist. Wenn es eine clientseitige Fehlererkennung gibt, befolgen Sie die folgenden Richtlinien, um den Fehler so effektiv wie möglich zu gestalten, wenn er an den Benutzer übertragen wird:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Geben Sie Text an, um unvollständige erforderliche Felder zu identifizieren und Textbeschreibungen anzugeben, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler die Übertragung eines Formulars verhindert hat, fokussieren Sie auf den Fehler. Wenn mehrere Fehler vorliegen, geben Sie eine Zusammenfassung an, wobei jeder Fehler mit dem zugehörigen Eingabefeld verlinkt ist.
- Fügen Sie zusätzlich zu Piktogrammen, Bildern, Farben usw. Text hinzu. Einige Menschen haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen könnten Schwierigkeiten haben, die Textversion Ihrer Fehlermeldung zu verstehen. Für diese Menschen bieten Sie auch Dinge wie Piktogramme und Farben an.
- Stellen Sie außerdem Feedback bereit, wenn ein Formular erfolgreich übermittelt wurde.

### Anweisungen zur Benutzereingabe bereitstellen

Beginnen Sie das Formular mit Textanweisungen, wie es zu bedienen ist. Fügen Sie Etiketten oder Anweisungen hinzu, wenn Benutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}} Elemente verwenden.

Etiketten sollten beschreibend sein und in der Nähe der Eingabeplatziert sein, auf die sie sich beziehen. Wenn ein bestimmtes Format für die Eingabe erforderlich ist, geben Sie ein korrekt formatiertes Beispiel an. Erwägen Sie zudem serverseitige Validierung, um die Eingabedaten zu formatieren, um die Benutzereingabe zu erleichtern.

Wenn ein Formularsteuerelement erforderlich ist, kennzeichnen Sie es sowohl visuell als auch [über den Code](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required). Wenn ein Formularsteuerelement den Kontext ändert, beschreiben Sie, was passieren wird, in einer Weise, die der Benutzer versteht, bevor sie den Kontextwechsel verursachen.

### Fehler Vorschlag

Geben Sie dem Nutzer einen Vorschlag für die Eingabe, wenn ein Eingabefehler automatisch erkannt wird und Korrekturvorschläge bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck des Inhalts gefährden).

### Katastrophen verhindern

Sorgen Sie dafür, dass Einreichungen, die rechtliche, finanzielle oder andere bedeutende Konsequenzen haben oder zu solchen führen können, überprüft, bestätigt und/oder umkehrbar sind.

Von Benutzern eingegebene Daten sollten vor der Übermittlung auf Fehler überprüft werden, und der Benutzer sollte die Gelegenheit haben, sie zu korrigieren. Der Benutzer sollte in der Lage sein, Informationen vor der endgültigen Übermittlung zu überprüfen, zu bestätigen und zu korrigieren. Fügen Sie auch ein Bestätigungs-Kontrollkästchen zusätzlich zu einem Senden-Button hinzu.

Wenn eine Übermittlung eine rechtliche oder finanzielle Transaktion verursacht, geben Sie einen Zeitraum an, innerhalb dessen die Anfrage vom Benutzer geändert oder storniert werden kann.

### Hilfe bereitstellen

Kontextbezogene Hilfe sollte verfügbar gemacht werden. Wenn ein Formular Texteingaben erfordert, geben Sie Formulareingabebeschreibungen an, die den Zweck und die erforderliche Eingabe beschreiben. Einschließlich der Rechtschreibprüfung und Vorschlägen für lange Texteingaben sowie Links zu Hilfe- und Unterstützungsmaterialien. Wenn ein bestimmtes Datenformat für die Eingabe gefordert wird, geben Sie ein Beispiel an.

## Anmerkungen

Die oben genannten sind gute Designpraktiken. Sie werden allen zugute kommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C entwickelt Richtlinien zur Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die United States Centers for Disease Control schätzen, dass ab 2018 1 von 4 US-Bürgern eine Behinderung hat und [kognitive Beeinträchtigung die häufigste für junge Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellectual disabilities" früher als "mental retardation" bezeichnet. Im Vereinigten Königreich werden "intellectual disabilities" häufig als "learning disabilities" oder "learning difficulties" bezeichnet.

## Siehe auch

- [Barrierefreiheits-Leitlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn/Accessibility/What_is_accessibility)
- [Barrierefreiheit bei Krampfanfallstörungen](/de/docs/Web/Accessibility/Seizure_disorders)
- [Verständnis der WCAG-Richtlinien](/de/docs/Web/Accessibility/Understanding_WCAG)
- [Übersicht über Barrierefreiheit](/de/docs/Learn/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [Richtlinien zur kognitiven Zugänglichkeit](#wcag-richtlinien)
- [Die W3C Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Kognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
