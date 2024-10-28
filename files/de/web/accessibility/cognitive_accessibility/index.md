---
title: Kognitive Barrierefreiheit
slug: Web/Accessibility/Cognitive_accessibility
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Kognitive Barrierefreiheit umfasst die Barrierefreiheitsüberlegungen für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Barrierefreiheit ein und zeigt Wege zur Verbesserung der Barrierefreiheit des Webs für Menschen mit kognitiven und Lernunterschieden auf.

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit geistigen Behinderungen, die möglicherweise die am meisten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen beim Denken und Erinnern. Das Spektrum umfasst auch Menschen mit psychischen Erkrankungen, wie Depressionen und Schizophrenie. Ebenso umfasst es Menschen mit Lernbehinderungen, wie Legasthenie und Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS).

Obwohl es in den klinischen Definitionen kognitiver Beeinträchtigungen eine große Vielfalt gibt, erleben Menschen mit diesen Beeinträchtigungen eine gemeinsame Reihe funktionaler Probleme. Diese Probleme umfassen Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben abgeschlossen werden, und Verwirrung durch inkonsistente oder unkonventionelle Webseitenlayouts. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Barrierefreiheit ihrer Websites und Anwendungen zu verbessern.

## Überblick

Kognitive und intellektuelle Behinderungen decken ein breites Spektrum ab und können momentane, vorübergehende oder dauerhafte Zustände sein. Beispielsweise sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich fortschreitend verschlechtern. Andere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprechstörungen, Autismus, ADS/ADHS, Legasthenie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnten Menschen sein, die durch Substanzen wie Alkohol oder Drogen beeinträchtigt sind. Eine andere Form ist Depression, etwa beim Trauern um den Verlust eines geliebten Menschen, oder wenn man kurzzeitig durch einen Tweet oder ein Video, das man gerade online gesehen hat, traurig wird. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, das breite Spektrum kognitiver Unterschiede anzugehen, besonders wenn Lösungen für zwei verschiedene Menschen gegensätzlich sein können. Eine Möglichkeit, damit umzugehen, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Kognitive Fähigkeiten umfassen:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verständnis und Entscheidungsfindung

Ein solider Ansatz zur Bereitstellung barrierefreier Lösungen für Menschen mit kognitiven Beeinträchtigungen besteht darin:

- Inhalte auf mehr als eine Weise bereitzustellen, etwa durch Text-zu-Sprache oder Video;
- leicht verständliche Inhalte bereitzustellen, wie Texte, die klar und in einfacher Sprache verfasst sind;
- die Aufmerksamkeit auf wichtige Inhalte zu lenken;
- Ablenkungen zu minimieren, etwa unnötige Inhalte oder Werbung;
- ein konsistentes Webseitenlayout und eine konsistente Navigation bereitzustellen;
- vertraute Elemente zu integrieren, wie unterstrichene Links, die blau sind, wenn noch nicht besucht, und violett, wenn besucht;
- Prozesse in logische, wesentliche Schritte mit Fortschrittsanzeigern zu unterteilen;
- die Authentifizierung auf der Website so einfach wie möglich zu gestalten, ohne die Sicherheit zu beeinträchtigen; und
- Formulare leicht ausfüllbar zu machen, etwa mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

## WCAG-Leitlinien

WCAG, Web Content Accessibility Guidelines, enthält mehrere Richtlinien zur Verbesserung der kognitiven Barrierefreiheit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C), der Hauptstandardsorganisation für das Internet, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/ARIA_Guides) Leitlinien.

WCAG folgt vier Prinzipien: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs insbesondere für die kognitive Barrierefreiheit relevant sind.

Alle folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. Zum Beispiel hilft die Möglichkeit, die Ablaufzeit bei einer Anwendung, die einen per SMS an ein mobiles Gerät gesendeten Authentifizierungscode erfordert, zu verlängern, in den folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit einem schlechten Kurzzeitgedächtnis oder die multitasken.
- Menschen, die weniger technikaffin sind.
- Menschen mit schlechtem drahtlosen Empfang.
- Menschen mit motorischen Kontrollproblemen.

## Anpassungsfähigkeit

[Leitlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt: "Inhalte sollten **anpassbar** sein". Erstellen Sie Inhalte, die in verschiedenen Formen dargestellt werden können, ohne Informationen oder Struktur zu verlieren. Zum Beispiel, bieten Sie {{Glossary("responsive_web_design", "responsive")}} Layouts mit einem einspaltigen mobilen Design an.

Alle Informationen, einschließlich Struktur und Beziehungen, die durch die Präsentation vermittelt werden, sollten in einem für alle Nutzer wahrnehmbaren Format verfügbar sein, um dieses Ziel zu erreichen. Zum Beispiel könnten die Informationen mithilfe eines Erzählwerkzeugs laut vorgelesen werden. Ihre Inhalte von Software verstanden machen zu lassen, ist ein guter Weg, um sicherzustellen, dass sie in alternativen Darstellungsformen verwendet werden können.

## Zeit

Es ist wichtig, den Nutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erfüllen. [Leitlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt: "Geben Sie Nutzern **genügend Zeit**, um Inhalte zu lesen und zu nutzen".

Eine **Zeitbegrenzung** ist jeder Prozess, der ohne Nutzeranforderung nach einer festgelegten Zeit oder periodisch erfolgt, wie z.B. das automatische Abmelden nach 30 Minuten oder das Limit von 15 Minuten für einen Kauf. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen durchzuführen. Lösungen umfassen, den Nutzern genügend zusätzliche Zeit zu geben, um Aufgaben zu beenden, oder Zeitbeschränkungen ganz zu beseitigen.

### Timer

Optionen zum Anpassen von Zeitvorgaben umfassen:

- Den Nutzern zu ermöglichen, die Zeit abzuschalten oder sie auf mindestens das Zehnfache des ursprünglichen Limits anzupassen, bevor es in Kraft tritt.
- Den Nutzer zu warnen und ein Zeitfenster von mindestens 20 Sekunden zu geben, um die Timeout-Dauer um den Faktor 10 mit einer einfachen Aktion zu verlängern, z. B. durch Drücken der Leertaste.

Stellen Sie einen Schalter auf Inhalte bereit, der Nutzern erlaubt, eine längere Sitzungslimit-Zeit oder gar keine Sitzungszeitbegrenzung zu aktivieren. Beispiele für zeitbegrenzte Inhalte sind Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn die Zeitbegrenzung länger als 20 Stunden ist, sind keine Anpassungen erforderlich.

### Bewegung, Blinken, Scrollen

Es ist wichtig, die Nutzer nicht abzulenken, insbesondere solche mit kognitiven Beeinträchtigungen.

Wenn sich bewegende, blinkende, scrollende oder automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und gleichzeitig mit anderen Inhalten dargestellt werden, muss der Nutzer in der Lage sein, sie zu pausieren, zu stoppen, zu verstecken oder zu steuern, es sei denn, es handelt sich um eine essentielle Funktion. "Essentiell" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Informationen die Bedeutung der Inhalte und/oder Funktionalität grundlegend verändern würde **und** die Informationen und Funktionalität nicht auf eine andere Art erreicht werden können, die entsprechen würde. Dies betrifft animierte GIFs, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche Timing-Kriterien, die berücksichtigt werden sollten, sind:

- Menschen, die kognitive oder Sprachbeschränkungen haben, benötigen möglicherweise mehr Zeit, um zu lesen und zu verstehen. Für verbesserte Benutzerfreundlichkeit entfernen Sie jegliche Zeitbegrenzung. Zeitlich begrenzte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten in der Lage sein, sich ohne Ablenkungen auf Inhalte zu konzentrieren. Der Nutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Situationen, in denen er auf einen Notfall hingewiesen wird. Dies bietet Zugang für Menschen mit kognitiven Beeinträchtigungen, indem es ihnen ermöglicht wird, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Nutzer, Inhaltsaktualisierungen zu verschieben, indem Sie eine Möglichkeit bieten, Aktualisierungen anzufordern, anstatt sie automatisch vorzunehmen. Auch bieten Sie eine Möglichkeit, nicht wesentliche Benachrichtigungen optional zu machen.
- Stellen Sie sicher, dass Menschen eine Aktivität fortsetzen können, ohne Datenverlust zu erleiden, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben, zum Beispiel indem Sie den Zustand eines Fragebogens speichern. Stellen Sie sicher, dass die Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung des Nutzers geändert werden können. Vor der erneuten Authentifizierung, kodieren Sie die Daten als versteckt oder verschlüsselt.
- Hinweis auf Inaktivität, die zu Datenverlust führen könnte. Wenn ein Timeout verwendet wird, sagen Sie den Menschen genau, wie viel Zeit ablaufen wird, bevor die Sitzung abläuft und zu Datenverlust führt. Die Ausnahme ist die Sicherung von Daten über mehr als 20 Stunden, wenn keine Aktionen eingeleitet werden.

## Navigation

[Leitlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt: "Bieten Sie Möglichkeiten, damit Nutzernavigation und -suche von Inhalten möglich ist und sie ihren Standort bestimmen können," und liefert 10 Richtlinien, um sicherzustellen, że die Seite navigierbar und Inhalte auffindbar sind:

### Fügen Sie ein `<title>` ein

Stellen Sie sicher, dass Sie ein {{HTMLElement('title')}} für das Dokument hinzufügen, da Titel eine schnelle und einfache Referenzbeschreibung der Hauptpunkte des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren davon, den Zweck von Inhalten so zu identifizieren.

### Überschrift und Beschriftungen

Fügen Sie klare und beschreibende Überschriften hinzu, damit Nutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Beschriftungen helfen Nutzern, spezifische Komponenten in den Inhalten zu erkennen. Menschen, die langsam lesen und Menschen mit begrenztem Kurzzeitgedächtnis profitieren, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die gesamte Organisation der Seiteninhalte zu definieren. Sie helfen, die Navigation durch Inhaltsabschnitte der Seite zu erleichtern und bieten einen Mechanismus, der das Verständnis unterstützt. Beispiele für Überschriften umfassen Kapitel, Abschnitte und Unterabschnitte von Inhalten und so weiter.

Überschriften sind im Vergleich zu anderen Methoden für die Identifizierung von Seiteninhaltsabschnitten (Ränder, Leerraum, horizontale Linien usw.) offensichtlichere Navigationshilfen.

### Mehrere Möglichkeiten, Inhalte zu finden

Verschiedene Nutzer bevorzugen unterschiedliche Methoden zum Finden von Informationen, daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, damit Nutzer Inhalte auf Ihrer Seite finden können.

Mehr als eine Möglichkeit bieten, Ihre Seite zu navigieren, kann Menschen helfen, Informationen schneller zu finden. Einige Nutzer bevorzugen möglicherweise ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktionalität, statt durch mehrere Seiten zu lesen, um das zu finden, was sie benötigen. Andere ziehen es möglicherweise vor, die Seite in einer sequentiellen Weise zu erkunden und sich von Seite zu Seite zu bewegen, um das Layout, die Inhalte und die Konzepte der Seite am besten zu verstehen.

### Möglichkeit, Inhaltsblöcke zu umgehen

Eine Möglichkeit bereitstellen, wie z. B. einen [Sprunglink](/de/docs/Web/HTML/Element/a#skip_links), um Inhaltsblöcke zu umgehen, die auf mehreren Webseiten wiederholt werden.

### Fokusreihenfolge sollte sinnvoll sein

Die Fokusreihenfolge für interaktive Elemente sollte sinnvoll sein. Um dies zu erreichen, sollte die DOM-Reihenfolge der visuellen Reihenfolge entsprechen, die wiederum der Tabulator-Reihenfolge entsprechen sollte. Wenn die Tabulator-Reihenfolge springt, insbesondere auf eine Weise, die nicht der visuellen Reihenfolge entspricht, wenn mit der Tastatur navigiert wird, können Nutzer desorientiert werden.

### Elemente mit Fokus sollten sichtbar fokussiert sein

Wenn ein Nutzer mit einer Tastatur navigiert, sollte die Benutzeroberfläche offensichtlich machen, welches Element derzeit im Fokus ist. Verändern oder entfernen Sie nicht das Standardstyling des Browsers [`:focus`](/de/docs/Web/CSS/:focus), es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktext vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, wohin der Nutzer navigiert wird, wenn er sich entscheidet, ihn zu aktivieren. Schlecht formulierte Linktexte können Nutzer über seinen Zweck oder das Ziel verwirren.

Einige Formen von unterstützenden Technologien ermöglichen es Nutzern, durch Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihrer umgebenden Nicht-Link-Inhalte entfernt, was die Notwendigkeit von verständlichen Linktexten noch wichtiger macht. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne anzugeben, wohin "hier" führen wird, ist der Zweck des Links unklar.

Für Screenreader ist es von entscheidender Bedeutung, dass der verlinkte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalt zu Links für Screenreader hinzugefügt haben und dieser Inhalt für sehende Leser zu langatmig und möglicherweise verwirrend ist, sollten Sie in Betracht ziehen, den hinzugefügten Text so zu kürzen, dass er für diejenigen, die keine Assistenztechnologien verwenden, visuell versteckt wird.

### Der aktuelle Standort ist verfügbar

Nutzer sollten in der Lage sein, sich innerhalb einer Website oder Anwendung zu orientieren. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die verwirrt werden können, wenn sie einer langen Reihe von Navigationsschritten folgen.

Alle Nutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere bei Websites oder Anwendungen mit großen Inhaltsmengen oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Breadcrumbs")}}, {{Glossary("Site_map", "Sitemaps")}} und das Identifizieren der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die helfen, den aktuellen Standort zu vermitteln.

## Lesbarkeit

[Leitlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt: "Machen Sie Textinhalte lesbar und verständlich". Für einige Nutzer ist es schwierig, die Bedeutung eines Wortes oder einer Phrase aus dem Kontext abzuleiten, insbesondere wenn das Wort oder die Phrase auf unübliche Weise verwendet oder mit einer speziellen Bedeutung versehen wurde.

Für diese Nutzer kann die Fähigkeit zu lesen und zu verstehen davon abhängen, ob spezifische Definitionen oder die erweiterten Formen von Akronymen oder Abkürzungen verfügbar sind. Einige Nutzer können große Schwierigkeiten haben, schriftliche Wörter zu erkennen, verstehen jedoch extrem komplexe und anspruchsvolle Dokumente, wenn der Text laut vorgelesen wird oder die Schlüsselprozesse und Ideen visuell veranschaulicht werden.

### Deklarieren Sie die Sprache der Seite und aller Inhalte, die nicht in dieser Hauptsprache sind

Die Sprache jeder Seite muss durch die Verwendung des [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attributs auf dem {{HTMLElement('html')}} Element deklariert werden. Fügen Sie das `lang` Attribut erneut bei Texten hinzu, die in einer anderen Sprache als der Hauptsprache des Dokuments sind.

Die korrekte Verwendung von `lang` erlaubt einigen Screenreadern, den Text richtig auszusprechen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Definieren Sie ungewöhnliche Wörter und Wortverwendungen

Einige Behinderungen machen es schwierig, nicht wörtliche Wortverwendungen zu verstehen, wie Idiome, Redewendungen und Fachjargon. Auch nicht-muttersprachliche Sprecher könnten mit diesen Begriffen kämpfen. Wenn ein Wort oder eine Phrase eine einzigartige Bedeutung hat, bieten Sie eine Definition Inline oder verlinkt, innerhalb eines Glossars oder zu einem Online-Wörterbuch an. Wenn ein Wort oder eine Phrase in mehreren Bedeutungen verwendet wird, definieren Sie jede Verwendung.

### Definieren Sie Abkürzungen

Abkürzungen können für Menschen verwirrend sein, die:

- Schwierigkeiten beim Entziffern von Wörtern haben.
- Ein begrenztes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zur Hilfe beim Verständnis zu nutzen.
- Auf Bildschirmlupen angewiesen sind (die oft kontextuelle Hinweise reduzieren).

Bieten Sie die erweiterte Form der Abkürzung beim ersten Gebrauch an, gefolgt von der Abkürzung, die in einem {{HTMLElement('abbr')}} Element eingefügt ist. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments steht (wie z. B. Latein), erklären Sie ihre Bedeutung. Erwägen Sie auch, [Ruby-Text](/de/docs/Web/HTML/Element/ruby) für Initialismus (Aussprechung von Akronymen) zu verwenden.

### Lesesniveau

Inhalt sollte so klar wie möglich geschrieben sein. Eine gute Regel ist, Inhalte so einfach zu gestalten, dass sie beim ersten Mal verstanden werden können. Methoden, um dies zu erreichen, umfassen:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung des Aktivstils im Präsens.
- Verwendung korrekter Grammatik und Rechtschreibung.

Es hilft Nutzern mit kognitiven Behinderungen, eine Textzusammenfassung (manchmal als TL;DR, oder "too long; didn't read", bezeichnet) auf niedrigem Lesesniveau bereitzustellen. Eine andere Technik, die Sie verwenden können, ist die Bereitstellung von begleitenden visuellen Elementen, um Ideen, Ereignisse und Prozesse zu erläutern.

Es gibt Tools, die das Niveau Ihrer Inhalte bewerten können. Zum Beispiel hat dieses Dokument ein Durchschnittslesestufenniveau von ungefähr 11. Dies bedeutet, dass es von einem englischen Muttersprachler im Alter von 16 bis 17 leicht verstanden werden sollte. Einige Tools können sogar Vorschläge zur Vereinfachung anbieten.

### Aussprache

Es gibt verschiedene Techniken, die Menschen helfen können, zu lernen, wie man Wörter ausspricht:

- Bereitstellung der Aussprache direkt nach dem Wort.
- Verlinkung zu einer Liste mit Aussprachen.
- Bereitstellung eines Glossars mit Aussprachen.
- Verwendung des {{HTMLElement('ruby')}} Elements, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Hinweise zur Aussprache von Wörtern bereitzustellen, hilft vielen verschiedenen Menschen, darunter solchen, die es vorziehen, laut zu lesen, nicht-muttersprachliche Sprecher und Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine weitere Lösung ist die Verwendung von Glyphen oder diakritischen Zeichen, um die Aussprache zu veranschaulichen. Wenn diese Technik verwendet wird, sollte es jedoch einen Mechanismus geben, um sie auszuschalten. Darüber hinaus ist es hilfreich, einen Leitfaden zu den verwendeten Zeichen bereitzustellen, da deren Bedeutung nicht immer offensichtlich sein könnte.

## Vorhersehbarkeit

WCAG [Leitlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt: "Lassen Sie Webseiten in vorhersagbarer Weise erscheinen und bedienen". Dies ist ein Grundsatz guten User Experience Designs. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Das umfasst Konsistenz im Seitenlayout und vorhersagbare interaktive Komponenten.

### Verwenden Sie Aktivierung, nicht Fokus, um den Kontext zu ändern

Eine Änderung im Kontext sollte absichtlich erfolgen. Daher sollte ein UI-Feature, wenn es im [Fokus](/de/docs/Web/API/HTMLElement/focus) ist, keine weiteren Benutzeraktionen auslösen. Vielmehr sollten Nutzer eine Funktion "aktivieren", um die Änderung auszulösen.

### Änderung der Einstellung basierend auf einer aktiven Anforderung

Formularsteuerungsoperationen und Dateneingaben sollten vorhersehbares Verhalten zur Folge haben. Änderungen im Kontext können Nutzer mit kognitiven Behinderungen verwirren und sollten daher nur erfolgen, wenn klar ist, dass eine solche Änderung als Reaktion auf die Nutzereingabe erfolgen wird.

Der Statuswechsel sollte eine bewusste Nutzeraktion erfordern. Beispiele hierfür sind das Ankreuzen eines Kontrollkästchens, das Eingeben von Daten oder das Ändern einer Auswahloption. Stellen Sie auch sicher, dass ein Senden-Knopf zur Verfügung steht, um den Kontextwechsel zu initiieren, und das, was geschehen wird, zu beschreiben, bevor die Änderung erfolgt.

### Halten Sie die Navigation durchgehend konsistent

Halten Sie die Navigationsreihenfolge zwischen den Seiten konsistent. Wenn Sie beispielsweise eine Navigationsleiste auf mehreren Seiten haben, machen Sie diese Navigation auf der gesamten Seite einheitlich, mit den gleichen Links an denselben Positionen. Dies gilt nicht nur für die Navigation: Stellen Sie alle sich wiederholenden Komponenten in derselben relativen Reihenfolge dar, jedes Mal, wenn sie erscheinen.

### Bieten Sie konsistente Kennzeichnungen an

Identische Funktionen sollten immer die gleichen Labels haben, jedes Mal, wenn sie genutzt werden. Konsistente Schaltflächenbeschriftungen, Alternativtexte für Icons und Icons für ähnliche Interaktionen und so weiter, selbst in verschiedenen Abschnitten Ihrer Seite, helfen all Ihren Nutzern.

### Seien Sie konsistent und vorhersehbar und verwenden Sie Normen

Während unbeschriftete Iconografie nicht die effektivste Methode ist, um Informationen zu vermitteln, hilft die konsistente Verwendung der Icons (und, wenn beschriftet, des entsprechenden Beschriftungstextes), Menschen zu verstehen, was das Icon darstellen soll. Ändern Sie auf ähnliche Weise nicht Standards wie die Zurück-Schaltfläche des Browsers. Wenn Sie einen Nutzer umleiten müssen, informieren Sie den Nutzer vorher darüber.

## Eingabeunterstützung

[Leitlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, genaue Dateneingabe sicherzustellen, indem sie besagt: "Helfen Sie Nutzern, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen dazu prädisponiert, häufiger Fehler zu machen, seltener Fehler zu bemerken oder haben größere Schwierigkeiten, einmal gemachte Fehler zu beheben.

Eingabeunterstützungsrichtlinien zielen darauf ab, es wahrscheinlicher zu machen, dass Nutzer, insbesondere solche mit Behinderungen, Fehler vermeiden, und wenn sie Fehler machen, die Fehlermeldung erkennen und verstehen können und in der Lage sind, die Fehler erfolgreich zu beheben.

### Automatierte Fehlererkennung kommunizieren

Nutzer müssen über den Fehler informiert und darüber aufgeklärt werden, was falsch ist. Wenn eine clientseitige Fehlererkennung vorhanden ist, beachten Sie folgende Richtlinien, um den Fehler bei der Kommunikation an den Nutzer möglichst effektiv zu machen:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Bieten Sie Texte zur Erkennung unvollständiger erforderlicher Felder und textliche Beschreibungen an, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler eine Formularübermittlung verhindert, fokussieren Sie auf den Fehler. Wenn mehrere Fehler vorhanden sind, liefern Sie eine Zusammenfassung, wobei jeder Fehler auf die zugehörige Eingabe verweist.
- Verwenden Sie Texte zusammen mit Icons, Bildern, Farben und so weiter. Manche Menschen haben Schwierigkeiten, die Bedeutung von Icons und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, die Textversion Ihrer Fehlermeldung zu verstehen. Bieten Sie diesen Menschen auch Dinge wie Icons und Farben.
- Bieten Sie auch Feedback an, wenn ein Formular erfolgreich abgeschickt wurde.

### Anweisungen für die Nutzereingabe bereitstellen

Beginnen Sie das Formular mit Textanweisungen, wie man es bedient. Fügen Sie Labels oder Anweisungen hinzu, wenn Nutzer Informationen eingeben müssen, und verwenden Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}} Elemente.

Labels sollten beschreibend sein und in der Nähe des Eingabefeldes positioniert sein, auf das sie sich beziehen. Wenn ein spezifisches Format für die Eingabe erforderlich ist, geben Sie ein Muster an, das im richtigen Format ist. Überlegen Sie auch, serverseitige Validierung zu verwenden, um Eingabedaten zu formatieren, um die Nutzereingabe zu erleichtern.

Wenn eine Formularsteuerung erforderlich ist, kennzeichnen Sie dies sowohl visuell als auch [über den Code](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required). Wenn eine Formularsteuerung den Kontext ändert, beschreiben Sie, was geschehen wird, auf eine Weise, die der Nutzer verstehen kann, bevor er die Kontextänderung auslöst.

### Fehler-Vorschläge

Bieten Sie Vorschläge für die Eingabe an, wenn ein Eingabefehler automatisch erkannt wurde und Vorschläge für die Korrektur bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck der Inhalte gefährden).

### Katastrophen vermeiden

Bei Übermittlungen, die rechtliche, finanzielle oder andere bedeutende Konsequenzen haben oder verursachen können, stellen Sie sicher, dass die Übermittlungen überprüft, bestätigt und/oder rückgängig gemacht werden können.

Vom Nutzer eingetragene Daten sollten vor der Übermittlung auf Fehler überprüft werden, und der Nutzer sollte die Möglichkeit haben, sie zu korrigieren. Der Nutzer sollte in der Lage sein, die Informationen vor der endgültigen Übermittlung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie außerdem sicher, dass Sie ein Bestätigungskontrollkästchen zusätzlich zu einem Senden-Knopf einfügen.

Wenn eine Übermittlung eine rechtliche oder finanzielle Transaktion verursacht, geben Sie einen Zeitraum an, innerhalb dessen die Anforderung vom Nutzer geändert oder storniert werden kann.

### Hilfe bereitstellen

Kontextsensitive Hilfe sollte zur Verfügung stehen. Wenn ein Formular Texteingabe erfordert, geben Sie Formulareinweisungen an, die den Zweck und die notwendigen Eingaben beschreiben. Fügen Sie Rechtschreibprüfung und Vorschläge für Textfelder mit Langtexteingabe ein, sowie Links zu Hilfs- und Unterstützungsmaterialien. Wenn ein bestimmtes Datenformat für die Eingabe erwartet wird, geben Sie ein Beispiel an.

## Anmerkungen

Die oben genannten Punkte sind gute Designpraktiken. Sie werden allen Menschen zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Web-Barrierefreiheit-Richtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die Zentren für Krankheitskontrolle in den USA schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat und [kognitive Beeinträchtigung bei jungen Menschen die häufigste ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "geistige Behinderung" bezeichnet. In Großbritannien werden "intellektuelle Behinderungen" häufig als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-Extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn/Accessibility/What_is_accessibility)
- [Barrierefreiheit bei Anfallsleiden](/de/docs/Web/Accessibility/Seizure_disorders)
- [WCAG-Richtlinien verstehen](/de/docs/Web/Accessibility/Understanding_WCAG)
- [Barrierefreiheitsübersicht](/de/docs/Learn/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [Richtlinien zur kognitiven Barrierefreiheit](#wcag-leitlinien)
- [Die W3C Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM-Kognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC-Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
