---
title: Kognitive Barrierefreiheit
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

Kognitive Barrierefreiheit umfasst Überlegungen zur Zugänglichkeit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Barrierefreiheit ein und zeigt, wie die Zugänglichkeit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigungen beziehen sich auf eine breite Palette von Behinderungen, von Menschen mit geistiger Behinderung, die möglicherweise die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen mit Denken und Erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie. Es umfasst auch Menschen mit Lernbehinderungen, wie Dyslexie und Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS).

Obwohl innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen eine große Vielfalt besteht, haben Menschen mit diesen Beeinträchtigungen gemeinsame funktionale Probleme. Diese Probleme umfassen Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung, die durch inkonsistente oder nicht traditionelle Webseitengestaltungen verursacht wird. Dieses Dokument konzentriert sich auf Schritte, die Entwickler unternehmen sollten, um die kognitive Barrierefreiheit ihrer Webseiten und Anwendungen zu verbessern.

## Überblick

Kognitive und intellektuelle Behinderungen umfassen ein breites Spektrum und können momentane, vorübergehende oder dauerhafte Zustände sein. Beispielsweise sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich verschlimmern. Andere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprechstörungen, Autismus, ADD/ADHS, Dyslexie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnten Menschen sein, die von Substanzen wie Alkohol oder Drogen betroffen sind. Eine andere Form kann Depression sein, zum Beispiel beim Trauern um den Verlust eines geliebten Menschen oder wenn man durch einen Tweet oder ein Video, das man gerade online gesehen hat, vorübergehend traurig wird. Ein drittes Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die große Bandbreite kognitiver Unterschiede zu berücksichtigen, insbesondere wenn Lösungen für zwei verschiedene Personen im Konflikt stehen können. Eine Möglichkeit, dies zu bewältigen, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Kognitive Fähigkeiten umfassen:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Art, wie z.B. durch Text-zu-Sprache oder durch Video;
- Bereitstellung leicht verständlicher Inhalte, wie z.B. Texte, die auf einfachen Sprachstandards basieren;
- Konzentration der Aufmerksamkeit auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung;
- Bereitstellung von konsistentem Webseiten-Layout und Navigation;
- Integration vertrauter Elemente, wie z.B. unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- Erleichterung der Website-Authentifizierung so einfach wie möglich, ohne die Sicherheit zu kompromittieren; und
- Vereinfachung von Formularen, z.B. durch klare Fehlermeldungen und Fehlerbehebung.

## WCAG-Richtlinien

WCAG, die Richtlinien für barrierefreie Webinhalte, enthalten mehrere Richtlinien zur Verbesserung der kognitiven Barrierefreiheit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortiums (W3C), der wichtigsten internationalen Normungsgremiumsorganisation für das Internet, veröffentlicht. Diese Gruppe ist auch für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/Guides) Richtlinien verantwortlich.

WCAG wird von vier Prinzipien geleitet: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Barrierefreiheit sind.

Alle folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. Zum Beispiel hilft es in den folgenden Szenarien, die Ablaufzeit einer Anwendung, die einen Authentifizierungscode erfordert, der über eine Textnachricht an ein Mobilgerät gesendet wird, zu verlängern:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen, die ein schlechtes Kurzzeitgedächtnis haben oder die multitaskingfähig sind.
- Menschen, die weniger technologisch versiert sind.
- Menschen, die eine schlechte drahtlose Verbindung haben.
- Menschen, die Probleme mit der Motorik haben.

## Anpassungsfähigkeit

[Leitlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) beschreibt, dass "Inhalte **anpassbar** sein sollten". Erstellen Sie Inhalte, die in verschiedenen Formen präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Bereitstellen Sie beispielsweise {{Glossary("responsive_web_design", "responsive")}} Layouts, mit einem einspaltigen Design für Mobilgeräte.

Alle Informationen, einschließlich der durch die Präsentation vermittelten Struktur und Beziehungen, sollten in einer Form vorliegen, die von allen Nutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Beispielsweise könnten die Informationen von einem Erzählwerkzeug vorgelesen werden. Inhalte, die von Software verstanden werden können, sind eine gute Möglichkeit, um sicherzustellen, dass sie mit alternativen Präsentationsmodi verwendet werden können.

## Zeit

Es ist wichtig, den Nutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erledigen. [Leitlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt, dass den Nutzern genügend **Zeit** gegeben werden muss, um Inhalte zu lesen und zu nutzen.

Ein **Zeitlimit** ist jeder Prozess, der ohne Benutzerinitiative nach einer festgelegten Zeit oder in regelmäßigen Abständen erfolgt, wie z.B. das automatische Abmelden nach 30 Minuten oder das Vorhandensein von 15 Minuten, um einen Kauf abzuschließen. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Aufgaben wie das Ausfüllen von Formularen zu erledigen. Lösungen umfassen, den Nutzern genügend zusätzliche Zeit zum Ausführen von Aufgaben zu geben oder Zeitbeschränkungen ganz zu beseitigen.

### Timer

Optionen zum Anpassen von Zeitanforderungen umfassen:

- Ermöglichen Sie dem Nutzer, die Zeit auszuschalten oder auf mindestens das 10-fache des ursprünglichen Limits zu verlängern, bevor er darauf stößt.
- Warnen Sie den Nutzer und geben Sie einen Puffer von mindestens 20 Sekunden, um die Ablaufdauer um den Faktor 10 durch eine Aktion zu verlängern, z.B. durch Drücken der Leertaste.

Bereiten Sie einen Schalter für Inhalte bereit, mit dem Nutzer eine längere Sitzungszeit oder überhaupt keine Sitzungszeit einstellen können. Beispiele für zeitlich begrenzte Inhalte sind Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden beträgt, sind keine Anpassungen erforderlich.

### Bewegen, Blinken, Scrollen

Es ist wichtig, Nutzer, insbesondere solche mit kognitiven Behinderungen, nicht abzulenken.

Wenn sich bewegende, blinkende, scrollende oder automatisch aktualisierte Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten dargestellt werden, muss der Benutzer in der Lage sein, diese anzuhalten, zu stoppen, zu verbergen oder zu steuern, es sei denn, sie sind eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der bewegenden, blinkenden, scrollenden oder automatisch aktualisierten Informationen die Bedeutung des Inhalts und/oder die Funktionalität grundlegend verändern würde **und** Informationen und Funktionen auf andere Weise, die konform wäre, nicht erreicht werden können. Dies schließt animierte GIFs ein, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche zeitliche Kriterien, die berücksichtigt werden müssen, sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Aus Gründen der Benutzerfreundlichkeit sollte jedes Zeitlimit entfernt werden. Zeitlich begrenzte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten in der Lage sein, sich ohne Ablenkungen auf Inhalte zu konzentrieren. Der Nutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, mit Ausnahme von Situationen, in denen eine Person auf einen Notfall aufmerksam gemacht werden muss. Dies bietet Menschen mit kognitiven Behinderungen Zugang, indem sie in der Lage sind, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen zu verschieben, indem Sie eine Möglichkeit anbieten, Inhaltsaktualisierungen anzufordern, anstatt diese automatisch zu aktualisieren. Bieten Sie auch eine Möglichkeit, nicht wesentliche Warnmeldungen optional zu machen.
- Stellen Sie sicher, dass Nutzer eine Aktivität ohne Datenverlust fortsetzen können, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben, z.B. durch das Speichern des Zustands eines Fragebogens. Speichern Sie Daten so, dass sie nach einer erneuten Authentifizierung des Nutzers geändert werden können. Kodieren Sie die Daten vor der erneuten Authentifizierung als versteckt oder verschlüsselt.
- Warnungen über Inaktivität, die zu Datenverlust führen könnte, bereitstellen. Wenn ein Timeout verwendet wird, teilen Sie den Nutzern genau mit, wie viel Zeit erforderlich ist, um die Sitzung zu beenden und Datenverlust zu verursachen. Die Ausnahme hiervon ist das Speichern von Daten für mehr als 20 Stunden, wenn keine Maßnahmen ergriffen werden.

## Navigation

[Leitlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt, dass "Wege bereitgestellt werden müssen, um Nutzern zu helfen, sich zu orientieren, Inhalte zu finden und ihren Standort zu bestimmen", und bietet 10 Richtlinien, um sicherzustellen, dass die Seite navigierbar und Inhalte auffindbar sind:

### Einschließlich eines `<title>`

Stellen Sie sicher, dass Sie ein {{HTMLElement('title')}} für das Dokument einschließen, da Titel eine schnelle und leicht zu referenzierende Beschreibung des Hauptpunktes des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren davon, den Zweck des Inhalts auf diese Weise identifizieren zu können.

### Überschriften und Beschriftungen

Fügen Sie klare und aussagekräftige Überschriften hinzu, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Beschriftungen helfen Benutzern, bestimmte Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen, und Menschen mit eingeschränktem Kurzzeitgedächtnis profitieren davon, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die Gesamtorganisation des Seiteninhalts zu definieren. Sie erleichtern die Navigation durch Inhaltsabschnitte der Seite und bieten einen Mechanismus, der das Verständnis unterstützt. Beispiele für Überschriften umfassen Kapitel, Abschnitte und Unterabschnitte von Inhalten usw.

Überschriften sind offensichtlichere Navigationshilfen im Vergleich zu anderen Methoden, um Inhaltsabschnitte der Seite zu identifizieren (Ränder, Leerraum, horizontale Linien usw.).

### Mehrere Wege, um Inhalt zu finden

Unterschiedliche Nutzer ziehen es vor, Informationen auf unterschiedliche Weisen zu finden. Daher ist es wichtig, mehrere Möglichkeiten anzubieten, um Inhalte auf Ihrer Seite zu lokalisieren.

Das Anbieten von mehr als einem Weg, Ihre Seite zu durchsuchen, kann Menschen helfen, Informationen schneller zu finden. Einige Nutzer ziehen es möglicherweise vor, ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktion zu verwenden, anstatt durch mehrere Seiten zu lesen und zu navigieren, um das zu finden, was sie benötigen. Andere möchten möglicherweise die Seite auf eine sequentielle Weise erkunden, von Seite zu Seite wechseln, um das Layout, die Inhalte und die Konzepte der Seite am besten zu verstehen.

### Möglichkeit, Inhalte zu überspringen

Stellen Sie einen Mechanismus bereit, wie einen [Überspringen-Link](/de/docs/Web/HTML/Reference/Elements/a#skip_links), um Inhalte zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Fokus-Reihenfolge ist sinnvoll

Die Reihenfolge des Fokus für interaktive Elemente sollte sinnvoll sein. Um dies zu erreichen, sollte die DOM-Reihenfolge mit der visuellen Reihenfolge übereinstimmen, die wiederum mit der Tabulator-Reihenfolge übereinstimmen sollte. Wenn die Tabulator-Reihenfolge umher springt, insbesondere auf eine Weise, die nicht mit der visuellen Reihenfolge übereinstimmt, wenn mit der Tastatur navigiert wird, können Nutzer desorientiert werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Nutzer mit einer Tastatur navigiert, sollte die Benutzeroberfläche offensichtlich machen, welches Element derzeit den Fokus hat. Verändern oder entfernen Sie nicht das Standard-{{cssxref(":focus")}}-Styling des Browsers, es sei denn, Sie machen den Fokus noch offensichtlicher.

### Linktext vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, wohin der Nutzer als Nächstes navigiert wird, wenn er ihn auswählt. Schlecht formulierter Linktext kann Nutzer über den Zweck oder das Ziel verwirren.

Einige Formen von unterstützenden Technologien ermöglichen es Nutzern, durch Listen aller Links auf der Seite zu navigieren. Links werden aus dem Kontext ihres umgebenden Nicht-Link-Inhalts entfernt, was den Bedarf an verständlichem Linktext noch wichtiger macht. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne zu kennzeichnen, wohin "hier" führt, ist der Zweck des Links unklar.

Für Screenreader ist es entscheidend, dass der verlinkte Text den Zweck jedes Links beschreibt. Wenn Sie Links für Screenreader-Inhalte hinzugefügt haben, und dieser Inhalt ausführlich und für sehende Leser potenziell verwirrend ist, sollten Sie in Erwägung ziehen, den zusätzlichen Text visuell zu verbergen.

### Der aktuelle Ort ist verfügbar

Nutzer sollten in der Lage sein, sich innerhalb einer Website oder Anwendung zu orientieren. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die möglicherweise verwirrt werden, wenn sie einer langen Serie von Navigationsschritten folgen.

Alle Nutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Website befinden, insbesondere bei Seiten oder Anwendungen mit einer großen Menge an Inhalten oder vielen Unterabschnitten. {{Glossary("Breadcrumbs", "Breadcrumbs")}}, {{Glossary("Site_map", "Sitemaps")}} und die Kennzeichnung der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die helfen, den aktuellen Ort zu kommunizieren.

## Lesbarkeit

[Leitlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt, dass "Textinhalte lesbar und verständlich sein sollen". Für einige Nutzer ist es schwierig, die Bedeutung eines Wortes oder Satzes aus dem Kontext heraus zu erschließen, insbesondere wenn das Wort oder der Satz auf ungewöhnliche Weise verwendet wird oder eine spezielle Bedeutung erhält.

Für diese Nutzer kann die Fähigkeit, zu lesen und zu verstehen, davon abhängen, ob spezifische Definitionen oder die erweiterten Formen von Akronymen oder Abkürzungen verfügbar sind. Einige Nutzer haben große Schwierigkeiten, schriftliche Wörter zu erkennen, aber sie verstehen äußerst komplexe und anspruchsvolle Dokumente, wenn der Text vorgelesen wird oder wenn wichtige Prozesse und Ideen visuell veranschaulicht werden.

### Sprache der Seite und aller nicht in dieser Hauptsprache enthaltenen Inhalte deklarieren

Die Sprache jeder Seite muss deklariert werden, indem das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut auf das {{HTMLElement('html')}}-Element angewendet wird. Fügen Sie das `lang`-Attribut erneut auf Text an, der in einer anderen Sprache als der Hauptsprache des Dokuments ist.

Die ordnungsgemäße Verwendung von `lang` ermöglicht einigen Screenreadern, den Text korrekt anzukündigen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Ungewöhnliche Wörter und Wortnutzung definieren

Einige Behinderungen erschweren es, den nicht-wörtlichen Sprachgebrauch zu verstehen, z.B. Idiome, umgangssprachliche Ausdrücke und spezialisierte Fachsprache. Nicht-Muttersprachler können auch Schwierigkeiten mit diesen Begriffen haben. Wenn ein Wort oder Satz eine einzigartige Bedeutung hat, geben Sie im Dokument eine Definition inline oder verlinkt an, in einem Glossar oder zu einem Online-Lexikon. Wenn ein Wort oder Satz verwendet wird, um mehr als eine Sache zu bedeuten, definieren Sie jede Verwendung.

### Abkürzungen definieren

Abkürzungen können für Menschen verwirrend sein, die:

- Schwierigkeiten beim Entziffern von Wörtern haben.
- Eingeschränkte Gedächtnisleistung haben.
- Schwierigkeiten haben, Kontext zur Unterstützung des Verständnisses zu nutzen.
- Sich auf Bildschirmlupen verlassen (die oft die kontextbezogenen Hinweis reduzieren).

Geben Sie eine ausgeweitete Form der Abkürzung an, wenn sie das erste Mal verwendet wird, gefolgt von der Abkürzung innerhalb eines {{HTMLElement('abbr')}}-Elements. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments vorliegt (wie Latein), erklären Sie die Bedeutung. Erwägen Sie auch die Verwendung von [Ruby-Text](/de/docs/Web/HTML/Reference/Elements/ruby) für Initialismen (Aussprache von Akronymen).

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben werden. Eine gute Regel ist, Inhalte so einfach zu gestalten, dass sie beim ersten Mal verstanden werden können. Methoden, um dies zu erreichen, umfassen:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung des Aktivstils im Präsens.
- Verwendung korrekter Grammatik und Rechtschreibung.

Es hilft Nutzern mit kognitiven Behinderungen, eine textliche Zusammenfassung (manchmal als TL;DR, also "too long; didn't read" bezeichnet) auf einem niedrigen Lesestufeniveau bereitzustellen. Eine weitere Technik besteht darin, begleitende visuelle Hilfen anzubieten, um Ideen, Ereignisse und Prozesse zu erklären.

Es gibt Werkzeuge, die das Niveau Ihrer Inhalte bewerten können. Beispielsweise hat dieses Dokument ein durchschnittliches Bildungsniveau von etwa 11. Das bedeutet, dass es von einem englischsprachigen Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Werkzeuge können sogar Vorschläge machen, um es zu vereinfachen.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen beizubringen, wie man Wörter ausspricht:

- Geben Sie die Aussprache direkt nach dem Wort an.
- Verlinken Sie zu einer Liste von Aussprachen.
- Stellen Sie ein Glossar mit Aussprachen bereit.
- Verwenden Sie das {{HTMLElement('ruby')}}-Element, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Die Bereitstellung von Anleitungen zur Aussprache von Wörtern hilft vielen verschiedenen Arten von Menschen, einschließlich solchen, die es vorziehen, laut zu lesen, Nicht-Muttersprachler, und Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine andere Lösung ist die Verwendung von Glyphe oder diakritischen Zeichen, um die Aussprache zu veranschaulichen. Wenn diese Technik verwendet wird, muss es jedoch einen Mechanismus geben, um sie auszuschalten. Darüber hinaus ist es hilfreich, auf einen Leitfaden für die verwendeten Zeichen zu verlinken, da deren Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Leitlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt, dass "Webseiten auf vorhersehbare Weise erscheinen und funktionieren sollen". Dies ist ein Grundsatz für gutes User Experience Design. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dies umfasst Konsistenz im Seitenlayout und vorhersehbare interaktive Komponenten.

### Verwendung von Aktivierung, nicht Fokus, um Kontext zu ändern

Eine Änderung des Kontexts sollte absichtlich erfolgen. Aus diesem Grund sollte ein UI-Feature beim Erhalt des [Fokus](/de/docs/Web/API/HTMLElement/focus) keine fortführenden Funktionen für den Nutzer auslösen. Vielmehr sollten Nutzer ein Feature "aktivieren" müssen, um die Änderung auszulösen.

### Ändern Sie Einstellungen basierend auf einer aktiven Anfrage

Die Funktionsweise und Dateneingabe der Formularsteuerung sollte zu einem vorhersehbaren Verhalten führen. Änderungen im Kontext können Nutzer mit kognitiven Behinderungen verwirren und sollten daher nur auftreten, wenn klar ist, dass eine solche Änderung als Antwort auf die Aktion des Nutzers erfolgt.

Das Ändern des Zustands sollte eine absichtliche Nutzeraktion erfordern. Beispiele hierfür sind das Aktivieren eines Kontrollkästchens, Eingabedaten oder das Ändern einer Auswahloption. Stellen Sie auch sicher, dass ein Absende-Button bereitgestellt wird, um die Kontextänderung einzuleiten, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Behalten Sie die Navigation auf der gesamten Website konsistent

Behalten Sie die Navigationsreihenfolge auf allen Seiten konsistent bei. Wenn Sie beispielsweise eine Navigationsleiste auf mehreren Seiten haben, machen Sie diese Navigation auf der gesamten Website einheitlich mit denselben Links an derselben Stelle. Dies gilt nicht nur für die Navigation: Präsentieren Sie alle wiederholten Komponenten jedes Mal in derselben relativen Reihenfolge, wenn sie erscheinen.

### Bieten Sie konsistente Beschriftungen

Identische Funktionen sollten ähnliche Beschriftungen haben, jedes Mal, wenn sie genutzt werden. Konsistente Button-Beschriftungen, alternative Texte für Symbole und Ikonographie für ähnliche Interaktionen usw., auch in verschiedenen Abschnitten Ihrer Website, helfen all Ihren Nutzern.

### Seien Sie konsistent und vorhersehbar und verwenden Sie Normen

Während unbeschriftete Ikonographie nicht die effektivste Methode ist, um Informationen zu vermitteln, hilft die konsistente Verwendung der Symbole (und falls beschriftet, deren Beschriftungstext), den Menschen zu verstehen, was das Symbol darstellt. Ändern Sie auch keine Standardwerte wie die Zurück-Taste des Browsers. Wenn Sie einen Nutzer umleiten müssen, lassen Sie den Nutzer im Voraus darüber Bescheid wissen.

## Eingabehilfe

[Leitlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) trägt dazu bei, eine genaue Dateneingabe sicherzustellen, indem sie besagt, dass "Nutzern geholfen werden soll, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen eher dazu geneigt, sie zu begehen, weniger wahrscheinlich, einen Fehler zu bemerken, oder haben es schwerer, einen Fehler zu korrigieren, sobald sie einen gemacht haben.

Die Leitlinien zur Eingabehilfe zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Nutzer, insbesondere diejenigen mit Behinderungen, einen Fehler machen, und, falls sie einen Fehler machen, die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen können und eventuelle Fehler erfolgreich beheben können.

### Automatische Fehlererkennung übermitteln

Nutzer müssen auf den Fehler hingewiesen werden und darüber informiert werden, was falsch ist. Wenn eine clientseitige Fehlererkennung vorliegt, beachten Sie die folgenden Richtlinien, um den Fehler so effektiv wie möglich zu gestalten, wenn er den Nutzern mitgeteilt wird:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Stellen Sie Text bereit, um unvollständige erforderliche Felder und textliche Beschreibungen zu identifizieren, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler das Absenden eines Formulars verhindert hat, fokussieren Sie auf den Fehler. Bei mehreren Fehlern bieten Sie eine Zusammenfassung an, mit jeweils einem Link pro Fehler zum entsprechenden Eingabefeld.
- Fügen Sie Text zusammen mit der Verwendung von Symbolen, Bildern, Farben usw. hinzu. Einige Menschen haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, die textliche Version Ihrer Fehlermeldung zu verstehen. Für diese Menschen bieten Sie auch Dinge wie Symbole und Farben an.
- Bieten Sie auch Feedback, wenn ein Formular erfolgreich abgeschickt wurde.

### Anleitungen für die Benutzereingabe bereitstellen

Beginnen Sie das Formular mit Textanweisungen, wie es zu bedienen ist. Integrieren Sie Beschriftungen oder Anweisungen, wenn Nutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('legend')}}-Elemente verwenden.

Beschriftungen sollten beschreibend sein und in der Nähe des Eingabefelds positioniert sein, auf das sie sich beziehen. Wenn ein bestimmtes Format für die Eingabe erforderlich ist, geben Sie ein Beispiel im richtigen Format an. Erwägen Sie außerdem die Durchführung einer serverseitigen Validierung, um Eingabedaten zu formatieren, um die Benutzereingabe zu erleichtern.

Wenn eine Formularsteuerung erforderlich ist, kennzeichnen Sie sie sowohl visuell als auch [per Code](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required). Wenn eine Formularsteuerung den Kontext ändert, beschreiben Sie, was passieren wird, auf eine Weise, die der Nutzer versteht, bevor er die Kontextänderung verursacht.

### Fehler-Vorschläge

Geben Sie dem Nutzer vorgeschlagene Eingaben an, wenn ein Eingabefehler automatisch erkannt wurde und Korrekturvorschläge bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck des Inhalts gefährden).

### Katastrophen verhindern

Für Einreichungen, die rechtliche, finanzielle oder andere wesentliche Folgen haben oder haben können, stellen Sie sicher, dass die Einreichungen überprüft, bestätigt und/oder rückgängig gemacht werden können.

Von den Nutzern eingegebene Daten sollten vor der Einreichung auf Fehler überprüft werden, und der Nutzer sollte die Möglichkeit haben, sie zu korrigieren. Der Benutzer sollte die Möglichkeit haben, Informationen vor der endgültigen Einreichung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie außerdem sicher, dass ein Bestätigungskontrollkästchen neben einem Absende-Button vorhanden ist.

Wenn eine Einreichung eine rechtliche oder finanzielle Transaktion bewirkt, geben Sie einen erklärten Zeitraum an, innerhalb dessen die Anfrage vom Nutzer geändert oder storniert werden kann.

### Hilfe bereitstellen

Kontextabhängige Hilfe sollte verfügbar gemacht werden. Wenn ein Formular eine Texteingabe erfordert, geben Sie Formulanweisungen ein, die den Zweck und die erforderlichen Eingabedaten beschreiben. Integrieren Sie Rechtschreibprüfung und Vorschläge für längere Texteingaben sowie Links zu Hilfe- und Unterstützungsmaterial. Wenn für Eingaben ein spezifisches Datenformat erwartet wird, geben Sie ein Beispiel an.

## Anmerkungen

Die oben genannten sind gute Designpraktiken. Sie werden allen zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Webseiten müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen.
- Die [Task Force für kognitive und Lernbehinderungen] des W3C (https://www.w3.org/WAI/GL/task-forces/coga/) erstellt Richtlinien für die Barrierefreiheit im Web für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Zentren für Seuchenkontrolle schätzen, dass ab 2018 1 von 4 US-Bürgern eine Behinderung hat und davon [kognitive Beeinträchtigungen die häufigste bei jungen Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "geistige Behinderung" bezeichnet. Im Vereinigten Königreich werden "intellektuelle Behinderungen" allgemein als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Barrierefreiheit Richtlinien](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Barrierefreiheit für Anfallsstörungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [WCAG Richtlinien verstehen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Überblick über Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Richtlinien für barrierefreie Webinhalte](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [Richtlinien für kognitive Barrierefreiheit](#wcag-richtlinien)
- [Die Task Force für kognitive und Lernbehinderungen des W3C](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Cognitive Information](https://webaim.org/articles/cognitive/)
- [CDC Informationen zu Behinderungen](https://www.cdc.gov/disability-and-health/)
