---
title: Kognitive Barrierefreiheit
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

Kognitive Barrierefreiheit berücksichtigt die Zugänglichkeitsaspekte für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Barrierefreiheit ein und beschreibt, wie die Zugänglichkeit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit geistigen Behinderungen, die möglicherweise die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen beim Denken und Erinnern. Zu dieser Bandbreite zählen Menschen mit psychischen Erkrankungen, wie Depressionen und Schizophrenie. Sie umfasst auch Menschen mit Lernbehinderungen, wie Legasthenie und Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS).

Obwohl es innerhalb der klinischen Definitionen kognitiver Beeinträchtigungen viel Vielfalt gibt, haben Menschen mit diesen Beeinträchtigungen einen gemeinsamen Satz von funktionalen Problemen. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben erledigt werden, und Verwirrung durch inkonsistentes oder unkonventionelles Webseitendesign. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Barrierefreiheit ihrer Websites und Anwendungen zu verbessern.

## Übersicht

Kognitive und intellektuelle Behinderungen umfassen ein breites Spektrum und können momentane, vorübergehende oder dauerhafte Zustände sein. Zum Beispiel sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich fortschreitend verschlechtern. Andere dauerhafte kognitive Beeinträchtigungen sind Aphasie, Sprech- und Sprachstörungen, Autismus, ADD/ADHS, Legasthenie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnte Menschen betreffen, die von Substanzen wie Alkohol oder Drogen betroffen sind. Eine andere Form könnte Depression sein, etwa wenn ein geliebter Mensch verloren wird, oder bei momentaner Traurigkeit durch einen Tweet oder ein Video, das sie gerade online gesehen haben. Ein drittes Beispiel könnte Schlafentzug sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die große Bandbreite kognitiver Unterschiede zu adressieren, besonders wenn Lösungen für zwei verschiedene Personen im Konflikt stehen könnten. Eine Möglichkeit, damit umzugehen, ist, sich auf kognitive Fähigkeiten zu konzentrieren. Kognitive Fähigkeiten umfassen:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheiden

Ein solider Ansatz zur Bereitstellung barrierefreier Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- die Bereitstellung von Inhalten auf mehr als eine Weise, wie zum Beispiel durch Text-zu-Sprache oder Video;
- das Anbieten von leicht verständlichen Inhalten, z. B. Texten, die nach einfachen Sprachstandards verfasst sind;
- die Konzentration der Aufmerksamkeit auf wichtige Inhalte;
- die Minimierung von Ablenkungen, wie unnötigen Inhalten oder Werbungen;
- die Bereitstellung eines konsistenten Webseitenlayouts und einer konsistenten Navigation;
- das Einbeziehen vertrauter Elemente, wie unterstrichener Links, die blau sind, wenn nicht besucht, und lila, wenn besucht;
- das Teilen von Prozessen in logische, essenzielle Schritte mit Fortschrittsindikatoren;
- die einfache Gestaltung der Website-Authentifizierung, ohne die Sicherheit zu beeinträchtigen; und
- das einfache Ausfüllen von Formularen, zum Beispiel durch klare Fehlermeldungen und Fehlerbehebung.

## WCAG-Richtlinien

WCAG, die Web Content Accessibility Guidelines, enthalten mehrere Richtlinien zur Verbesserung der kognitiven Barrierefreiheit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortiums (W3C) veröffentlicht, der wichtigsten internationalen Normierungsorganisation für das Internet. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/Guides) Richtlinien.

WCAG wird von vier Prinzipien geleitet: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für kognitive Barrierefreiheit sind.

Alle der folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. So hilft beispielsweise die Möglichkeit, die Ablaufzeit einer Anwendung zu verlängern, die einen Authentifizierungscode benötigt, der per Textnachricht an ein mobiles Gerät gesendet wird, bei den folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit einem schlechten Kurzzeitgedächtnis oder die Multitasking betreiben.
- Menschen, die weniger technikaffin sind.
- Menschen mit schlechter drahtloser Verbindung.
- Menschen mit motorischen Kontrollproblemen.

## Anpassbarkeit

[Leitlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass Inhalte "**anpassbar**" sein sollten. Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Bieten Sie zum Beispiel {{Glossary("responsive_web_design", "reagierende")}} Layouts an, mit einem einspaltigen mobilen Design.

Alle Informationen, einschließlich der durch die Präsentation vermittelten Struktur und Beziehungen, sollten in einer Form vorliegen, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Beispielsweise könnten die Informationen mithilfe eines Erzählwerkzeugs laut vorgelesen werden. Wenn Ihre Inhalte durch Software verstanden werden können, hilft dies sicherzustellen, dass sie durch alternative Präsentationsmodi genutzt werden können.

## Zeit

Es ist wichtig, den Nutzern die erforderliche Zeit zu geben, um Aufgaben zu erledigen. [Leitlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt: "Stellen Sie sicher, dass Benutzer ausreichend **Zeit** haben, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Prozess, der nach einer festgelegten Zeit oder periodisch ohne Benutzeranforderung abläuft, beispielsweise das Ausloggen nach 30 Minuten oder die 15-minütige Zeitspanne, um einen Kauf abzuschließen. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen auszuführen. Lösungen umfassen die Bereitstellung zusätzlicher Zeit für Benutzer, um Aufgaben abzuschließen, oder die Abschaffung von Zeitbeschränkungen.

### Timer

Möglichkeiten zur Anpassung der Zeitanforderungen umfassen:

- Dem Benutzer zu erlauben, die Zeit auszuschalten oder sie auf mindestens das 10-fache des ursprünglichen Limits zu erweitern, bevor er auf sie trifft.
- Den Benutzer zu warnen und ihm einen Puffer von mindestens 20 Sekunden bereitzustellen, um die Zeitüberschreitung um das 10-fache mit einer Handlung wie dem Drücken der Leertaste zu verlängern.

Stellen Sie einen Umschalter auf Inhalte bereit, der es Benutzern ermöglicht, eine längere Sitzungszeitbegrenzung zu ermöglichen oder gar keine Sitzungszeitbegrenzung. Beispiele für zeitlich limitierte Inhalte umfassen Formulare, zeitlich begrenzte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden ist, sind keine Anpassungen erforderlich.

### Bewegung, Blinken, Scrollen

Es ist wichtig, Benutzer nicht abzulenken, besonders solche mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, diese zu pausieren, zu stoppen, auszublenden oder zu steuern, es sei denn, sie sind eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Informationen den Inhalt und/oder die Funktionalität grundlegend verändern würde, **und** Informationen und Funktionalität nicht auf eine andere Weise erreicht werden können, die konform wäre. Dies schließt animierte GIFs ein, sofern das GIF mehr als 5 Sekunden animiert.

Zusätzliche zeitliche Kriterien, die berücksichtigt werden sollten, sind:

- Menschen, die kognitive oder sprachliche Einschränkungen haben, benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Zur Verbesserung der Benutzerfreundlichkeit sollte jede Zeitbegrenzung entfernt werden. Zeitlich begrenzte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten in der Lage sein, sich ohne Ablenkungen auf Inhalte zu konzentrieren. Der Benutzer sollte in der Lage sein, Unterbrechungen zu verschieben oder zu unterdrücken, außer in Situationen, in denen eine Person auf einen Notfall aufmerksam gemacht werden sollte. Dies ermöglicht den Zugang für Menschen mit kognitiven Behinderungen, indem sie sich auf das Hauptziel des Inhalts konzentrieren können. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen aufzuschieben, indem Sie eine Möglichkeit bereitstellen, Inhaltsaktualisierungen anzufordern, anstatt sie automatisch zu aktualisieren. Lassen Sie auch eine Möglichkeit, nicht wesentliche Warnungen optional zu machen.
- Stellen Sie sicher, dass Menschen eine Aktivität ohne Datenverlust fortsetzen können, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben; zum Beispiel das Speichern des Zustands eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung durch den Benutzer geändert werden können. Bevor Sie die erneute Authentifizierung durchführen, codieren Sie die Daten als versteckt oder verschlüsselt.
- Bereitstellung von Warnungen über Inaktivität, die zu Datenverlust führen könnte. Wenn ein Timeout verwendet wird, sagen Sie den Personen genau, wie viel Zeit verstreicht, bevor die Sitzung beendet wird und Daten verloren gehen. Die Ausnahme hierfür ist die Erhaltung von Daten für mehr als 20 Stunden, wenn keine Maßnahmen ergriffen werden.

## Navigation

[Leitlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt: "Stellen Sie Möglichkeiten zur Verfügung, um Benutzern zu helfen, zu navigieren, Inhalte zu finden und ihren Standort zu bestimmen", und bietet 10 Richtlinien, um sicherzustellen, dass die Site navigierbar ist und Inhalte auffindbar sind:

### Ein `<title>` einfügen

Stellen Sie sicher, dass Sie ein {{HTMLElement('title')}} für das Dokument einfügen, da Titel eine schnelle und einfache Möglichkeit bieten, eine Beschreibung des Hauptpunkts des Bildschirms zu erhalten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren davon, den Zweck des Inhalts auf diese Weise identifizieren zu können.

### Überschriften und Beschriftungen

Fügen Sie klare und verständliche Überschriften ein, damit Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Labels helfen Benutzern, bestimmte Komponenten innerhalb des Inhalts zu identifizieren. Menschen, die langsam lesen und Menschen mit eingeschränktem Kurzzeitgedächtnis profitieren, wenn Abschnittstitel es ermöglichen, vorherzusagen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die allgemeine Organisation der Seiteninhalte zu definieren. Sie erleichtern die Navigation durch Seitenteilabschnitte und bieten einen Mechanismus zur Unterstützung des Verständnisses. Beispiele für Überschriften sind Kapitel, Abschnitte und Unterabschnitte von Inhalten usw.

Überschriften sind offensichtlichere Navigationshilfen im Vergleich zu anderen Methoden zur Identifizierung von Seiteninhaltbereichen (Rahmen, Leerraum, horizontale Linien usw.).

### Mehrere Möglichkeiten, um Inhalte zu finden

Verschiedene Benutzer bevorzugen verschiedene Methoden, um Informationen zu finden, daher ist es wichtig, mehrere Möglichkeiten bereitzustellen, um Inhalte auf Ihrer Site zu lokalisieren.

Mehr als eine Möglichkeit, sich auf Ihrer Site zu bewegen, kann Menschen helfen, Informationen schneller zu finden. Einige Benutzer bevorzugen ein Inhaltsverzeichnis, eine Sitemap oder eine Suchfunktionalität, anstatt mehrere Seiten zu lesen und zu durchforsten, um das zu finden, was sie benötigen. Andere ziehen es möglicherweise vor, die Site in chronologischer Reihenfolge zu erkunden, von Seite zu Seite wechseln, um die Struktur, Inhalte und Konzepte der Site besser zu verstehen.

### Fähigkeit, Inhaltsblöcke zu überspringen

Bereitstellung eines Mechanismus, wie eines [Skip-Links](/de/docs/Web/HTML/Reference/Elements/a#skip_links), um Inhaltsblöcke zu umgehen, die auf mehreren Webseiten wiederholt werden.

### Der Fokus ist sinnvoll

Die Fokussequenz für interaktive Elemente sollte sinnvoll sein. Dies wird erreicht, indem die DOM-Reihenfolge mit der visuellen Reihenfolge übereinstimmt, die wiederum der Tab-Reihenfolge entsprechen sollte. Wenn die Tab-Reihenfolge herumspringt, besonders auf eine Weise, die nicht der visuellen Reihenfolge entspricht, wenn mit Tastatur navigiert wird, können Benutzer desorientiert werden.

### Fokusierte Elemente sollten sichtbar fokussiert sein

Wenn ein Benutzer die Tastatur zur Navigation verwendet, sollte die Benutzeroberfläche offensichtlich machen, welches Element gerade im Fokus steht. Verändern oder entfernen Sie nicht das Standard-CSS {{cssxref(":focus")}}-Styling des Browsers, es sei denn, Sie machen den Fokus noch deutlicher.

### Linktext vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren können, was der Benutzer als Nächstes erwarten sollte, wohin navigiert wird, wenn er ihn ausführt. Schlecht formulierter Linktext kann Benutzer darüber verwirren, was sein Zweck oder Ziel ist.

Einige Formen von unterstützender Technologie ermöglichen es Benutzern, durch Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden dann aus dem Kontext ihres umgebenden nicht-verknüpften Inhalts herausgenommen, was die Notwendigkeit für verständlichen Linktext noch wichtiger macht. Ein Beispiel für ein schlechtes Benutzererlebnis ist eine Seite voller Links, deren Texte "Hier klicken" lauten. Ohne zu wissen, wohin "hier" führen wird, bleibt der Zweck des Links unklar.

Für Screenreader ist es wichtig, dass der verknüpfte Text den Zweck jedes Links beschreibt. Wenn Sie Links für Screenreader Inhalte hinzugefügt haben, und diese Inhalte ausführlich und potenziell verwirrend für sehende Leser sind, erwägen Sie, den hinzugefügten Text abzuschneiden, um ihn visuell vor nicht assistiven Technologie-Benutzern zu verbergen.

### Der aktuelle Standort ist verfügbar

Benutzer sollten in der Lage sein, sich innerhalb einer Site oder Anwendung zu orientieren. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die bei einer langen Reihe von Navigationsschritten verwirrt werden könnten.

Alle Benutzer profitieren von Informationen darüber, wo sie sich in der Hierarchie einer Site befinden, besonders bei Sites oder Anwendungen mit großen Inhaltsmengen oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Breadcrumbs")}}, {{Glossary("Site_map", "Site-Maps")}} und das Markieren der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die helfen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Leitlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt "Mach den Textinhalt lesbar und verständlich". Für einige Benutzer ist es schwierig, die Bedeutung eines Wortes oder einer Phrase aus dem Kontext zu schließen, besonders wenn das Wort oder die Phrase auf eine ungewöhnliche Weise verwendet wird oder eine spezielle Bedeutung erhalten hat.

Für diese Benutzer könnte die Fähigkeit, zu lesen und zu verstehen, von der Verfügbarkeit spezifischer Definitionen oder der erweiterten Formen von Akronymen oder Abkürzungen abhängen. Einige Benutzer haben große Schwierigkeiten, schriftliche Wörter zu erkennen, verstehen aber extrem komplexe und anspruchsvolle Dokumente, wenn der Text laut vorgelesen wird oder wenn wichtige Prozesse und Ideen visuell dargestellt werden.

### Die Sprache der Seite und alle nicht in dieser Hauptsprache geschriebenen Inhalte definieren

Die Sprache jeder Seite muss durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut am {{HTMLElement('html')}}-Element definiert werden. Fügen Sie das `lang`-Attribut erneut für Text hinzu, der in einer anderen Sprache als der Hauptsprache des Dokuments vorliegt.

Die ordnungsgemäße Verwendung von `lang` ermöglicht es einigen Screenreadern, den Text bei der Umwandlung in synthetische Sprache richtig auszusprechen. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Ungewöhnliche Wörter und Wortgebrauch definieren

Einige Behinderungen machen es schwierig, den nicht-wörtlichen Gebrauch von Wörtern zu verstehen, wie Idiome, Redewendungen und Fachjargon. Auch nicht-muttersprachliche Sprecher können mit diesen Begriffen Probleme haben. Wenn ein Wort oder Ausdruck eine einzigartige Bedeutung hat, geben Sie eine Definition im Text oder als Link innerhalb eines Glossars oder zu einem Online-Wörterbuch an. Wenn ein Wort oder Ausdruck mehr als eine Bedeutung hat, definieren Sie jede Verwendung.

### Abkürzungen definieren

Abkürzungen können verwirrend sein für Menschen, die:

- Schwierigkeiten haben, Wörter zu entschlüsseln.
- Ein eingeschränktes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zur Unterstützung des Verständnisses zu nutzen.
- Auf Bildschirmvergrößerer angewiesen sind (die oft kontextuale Hinweise reduzieren).

Geben Sie die vollständige Form der Abkürzung bei ihrer ersten Verwendung an, gefolgt von der Abkürzung, die innerhalb eines {{HTMLElement('abbr')}}-Elements platziert wird. Wenn eine Abkürzung keine vollständige Form hat oder eine Abkürzung für ein Wort ist, das nicht in der Hauptsprache des Dokuments (wie Latein) steht, erklären Sie seine Bedeutung. In Betracht ziehen können Sie auch die [Ruby-Text](/de/docs/Web/HTML/Reference/Elements/ruby)-Verwendung für Initialen (die Aussprache von Akronymen).

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben werden. Eine gute Regel ist, die Inhalte so einfach zu gestalten, dass sie beim ersten Mal verstanden werden können. Methoden, um dies zu erreichen, umfassen:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung aktiver Stimme in der Gegenwart.
- Korrekte Grammatik und Rechtschreibung anwenden.

Es hilft Nutzern mit kognitiven Behinderungen, eine Textzusammenfassung (manchmal als TL;DR oder "too long; didn't read" bezeichnet) auf einem niedrigen Lesesniveau bereitzustellen. Eine andere Technik, die Sie verwenden können, ist die Bereitstellung begleitender visueller Darstellungen, um Ideen, Ereignisse und Prozesse zu erläutern.

Es gibt Werkzeuge, die das Niveau Ihrer Inhalte bewerten können. Zum Beispiel hat dieses Dokument einen durchschnittlichen Bildungsgrad von etwa 11. Das bedeutet, dass es leicht von einem muttersprachlichen englischen Sprecher im Alter von 16 bis 17 Jahren verstanden werden sollte. Einige Werkzeuge können sogar Vorschläge zur Vereinfachung machen.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen beizubringen, wie man Wörter ausspricht:

- Die Aussprache direkt nach dem Wort bereitstellen.
- Zu einer Liste von Aussprachen verlinken.
- Ein Glossar mit Aussprachen bereitstellen.
- Das {{HTMLElement('ruby')}}-Element verwenden, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Die Bereitstellung von Anleitung zur Aussprache hilft vielen verschiedenen Arten von Menschen, einschließlich jener, die es vorziehen, laut zu lesen, nicht-muttersprachlicher Sprecher und Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine andere Lösung ist die Verwendung von Glyphen oder diakritischen Zeichen, um die Aussprache darzustellen. Wenn diese Technik verwendet wird, muss es jedoch einen Mechanismus geben, um sie auszuschalten. Es ist zudem hilfreich, auf einen Leitfaden zu den verwendeten Zeichen zu verlinken, da ihre Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Leitlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt: "Erstellen Sie Webseiten, die auf vorhersehbare Weise erscheinen und funktionieren". Dies ist ein Grundsatz der guten Benutzererfahrungsgestaltung. Konsistenz ist besonders wichtig für Menschen mit kognitiven Schwierigkeiten. Dies beinhaltet Konsistenz im Layout der Seite und erwartbare interaktive Komponenten.

### Nutzen Sie Aktivierung, nicht Fokus, um den Kontext zu ändern

Eine Änderung des Kontexts sollte absichtlich erfolgen. Aus diesem Grund sollte eine Benutzeroberflächenfunktion bei Erhalt des [Fokus](/de/docs/Web/API/HTMLElement/focus) keine weiteren benutzerorientierten Aktionen auslösen. Stattdessen sollten Benutzer eine Funktion "aktivieren" müssen, um die Änderung auszulösen.

### Veränderungseinstellung basierend auf einer aktiven Anfrage

Formularsteuerungsoperationen und Dateneingaben sollten zu vorhersehbarem Verhalten führen. Änderungen im Kontext können Benutzer mit kognitiven Behinderungen verwirren und sollten daher nur auftreten, wenn klar ist, dass eine solche Änderung als Reaktion auf die Aktion des Benutzers erfolgt.

Eine Statusänderung sollte eine bewusste Benutzeraktion erfordern. Beispiele hierfür sind das Aktivieren eines Kontrollkästchens, Eingaben oder das Ändern einer Auswahloption. Stellen Sie auch sicher, dass ein Absenden-Button bereitgestellt wird, um die Kontextänderung zu initiieren, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Halten Sie die Navigation auf der gesamten Site konsistent

Halten Sie die Reihenfolge der Navigation zwischen den Seiten konsistent. Wenn Sie beispielsweise auf mehreren Seiten eine Navigationsleiste haben, machen Sie diese Navigation einheitlich über die gesamte Site mit denselben Links an denselben Stellen. Dies gilt nicht nur für die Navigation: Präsentieren Sie alle wiederkehrenden Komponenten in der gleichen relativen Reihenfolge, wenn sie erscheinen.

### Bieten Sie konsistente Beschriftungen an

Identische Funktionen sollten jedes Mal ähnliche Beschriftungen haben, wenn sie genutzt werden. Konsistente Button-Beschriftungen, alternativer Text für Symbole und Ikonographie für ähnliche Interaktionen, sogar in verschiedenen Bereichen Ihrer Website, helfen allen Nutzern.

### Seien Sie konsistent und vorhersehbar und verwenden Sie Normen

Obwohl nicht beschriftete Ikonographie nicht die effektivste Methode zur Informationsvermittlung ist, hilft das Beibehalten der Nutzung der Symbole (und, wenn beschriftet, deren Labeltext) dabei, dass Menschen verstehen können, was das Symbol repräsentiert. Ändern Sie auch keine Standards wie den Zurück-Button des Browsers. Falls Sie einen Benutzer umleiten müssen, informieren Sie den Benutzer vorher darüber.

## Eingabehilfen

[Leitlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, die Genauigkeit der Dateneingabe zu gewährleisten, indem sie angibt "Helfen Sie Benutzern, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen eher dazu geneigt, Fehler zu machen, bemerken sie weniger wahrscheinlich oder haben Schwierigkeiten, einen Fehler zu korrigieren, wenn sie einen gemacht haben.

Die Richtlinien zur Eingabehilfe zielen darauf ab, die Wahrscheinlichkeit, dass Benutzer, insbesondere jene mit Behinderungen, einen Fehler machen, zu reduzieren und die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und alle Fehler erfolgreich korrigieren können.

### Automatische Fehlererkennung übermitteln

Benutzer müssen auf den Fehler aufmerksam gemacht werden und darüber informiert werden, was falsch ist. Wenn eine clientseitige Fehlererkennung vorhanden ist, beachten Sie die folgenden Richtlinien, um den Fehler so effektiv wie möglich zu gestalten, wenn er an den Benutzer weitergegeben wird:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Geben Sie Text an, um unvollständige erforderliche Felder zu identifizieren und Textbeschreibungen, wenn ein eingegebener Wert ungültig ist.
- Wenn der Fehler das Absenden eines Formulars verhinderte, konzentrieren Sie sich auf den Fehler. Wenn mehrere Fehler vorhanden sind, bieten Sie eine Zusammenfassung, bei der jeder Fehler mit dem entsprechenden Eingabefeld verlinkt ist.
- Fügen Sie Text zusammen mit der Verwendung von Symbolen, Bildern, Farben usw. hinzu. Einige Menschen haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen könnten Schwierigkeiten haben, die Textversion Ihrer Fehlermeldung zu verstehen. Für diese Menschen stellen Sie auch Dinge wie Symbole und Farben bereit.
- Zudem geben Sie Rückmeldung über das erfolgreiche Absenden eines Formulars.

### Anweisungen für Benutzereingaben bereitstellen

Beginnen Sie das Formular mit Textanweisungen zur Bedienung. Geben Sie Labels oder Anweisungen an, wenn Benutzer Informationen eingeben müssen, und verwenden Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}} sowie {{HTMLElement('legend')}} Elemente dafür.

Labels sollten beschreibend sein und in der Nähe der Eingabe platziert werden, auf die sie sich beziehen. Wenn ein bestimmtes Format für eine Eingabe erforderlich ist, geben Sie ein Beispiel im richtigen Format. Ziehen Sie zudem in Erwägung, eine serverseitige Validierung durchzuführen, um Eingabedaten zu formatieren und die Benutzerfreundlichkeit zu unterstützen.

Wenn eine Formularsteuerung erforderlich ist, zeigen Sie dies sowohl visuell als auch [über den Code](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) an. Wenn eine Formularsteuerung den Kontext ändert, beschreiben Sie, was in einer Weise geschehen wird, die der Benutzer versteht, bevor die Kontextänderung ausgelöst wird.

### Fehlerbehebungsvorschläge

Bieten Sie dem Benutzer Vorschläge zur Eingabe an, wenn ein Eingabefehler automatisch erkannt wird und Korrekturvorschläge bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck des Inhalts gefährden).

### Katastrophen verhindern

Bei Übermittlungen, die zu rechtlichen, finanziellen oder anderen bedeutenden Konsequenzen führen oder führen können, stellen Sie sicher, dass die Übermittlungen überprüft, bestätigt und/oder reversibel sind.

Von Benutzern eingegebene Daten sollten vor dem Absenden auf Fehler geprüft und der Benutzer sollte in die Lage versetzt werden, diese zu korrigieren. Der Benutzer sollte in der Lage sein, Informationen vor der endgültigen Übermittlung zu überprüfen, zu bestätigen und zu korrigieren. Zudem stellen Sie sicher, dass ein Bestätigungsbox neben einem Absenden-Button vorhanden ist.

Wenn eine Übermittlung zu einer rechtlichen oder finanziellen Transaktion führt, geben Sie eine festgelegte Zeit an, innerhalb derer die Anfrage durch den Benutzer geändert oder storniert werden kann.

### Hilfe bereitstellen

Kontextsensitive Hilfe sollte verfügbar sein. Wenn ein Formular Texteingaben erfordert, geben Sie Formulareingabeanweisungen an, die den Zweck und die erforderliche Eingabe beschreiben. Inkludieren Sie eine Rechtschreibprüfung und Vorschläge für Langtexteingaben sowie Links zu Hilfe- und Unterstützungsdokumenten. Wenn für Eingaben ein bestimmtes Datenformat erwartet wird, geben Sie ein Beispiel an.

## Anmerkungen

Die oben genannten sind gute Designpraktiken. Sie werden jedem zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Zugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die United States Centers for Disease Control schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat und davon [kognitive Beeinträchtigung für junge Menschen die häufigste ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "geistige Retardierung" bezeichnet. Im Vereinigten Königreich werden "intellektuelle Behinderungen" oft als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Richtlinien für Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Barrierefreiheit für Anfallstörungen](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Verstehen der WCAG-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Überblick über Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [kognitiver Barrierefreiheit-Richtlinien](#wcag-richtlinien)
- [Cognitive and Learning Disabilities Accessibility Task Force des W3C](https://www.w3.org/WAI/GL/task-forces/coga/)
- [Informationen zu WebAIM Cognitive](https://webaim.org/articles/cognitive/)
- [CDC-Informationen zu Behinderungen](https://www.cdc.gov/disability-and-health/)
