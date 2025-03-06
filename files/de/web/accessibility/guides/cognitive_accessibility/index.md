---
title: Kognitive Zugänglichkeit
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Kognitive Zugänglichkeit umfasst Überlegungen zur Zugänglichkeit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Zugänglichkeit ein und wie die Zugänglichkeit des Internets für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit geistigen Behinderungen, die möglicherweise die am stärksten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Schwierigkeiten beim Denken und Erinnern. Dazu gehören Menschen mit psychischen Erkrankungen wie Depression und Schizophrenie sowie Menschen mit Lernbehinderungen wie Legasthenie und Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS).

Obwohl es in den klinischen Definitionen von kognitiven Beeinträchtigungen eine große Vielfalt gibt, erleben Menschen mit diesen Beeinträchtigungen eine gemeinsame Reihe von funktionalen Problemen. Diese Probleme umfassen Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern, wie Aufgaben erledigt werden sollen, und Verwirrung durch inkonsistente oder unkonventionelle Webseitengestaltungen. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Zugänglichkeit ihrer Websites und Anwendungen zu verbessern.

## Überblick

Kognitive und intellektuelle Behinderungen umfassen ein breites Spektrum und können vorübergehende, temporäre oder dauerhafte Zustände sein. Zum Beispiel sind Demenz und Alzheimer dauerhafte kognitive Beeinträchtigungen, die sich im Laufe der Zeit verschlechtern. Andere dauerhafte kognitive Beeinträchtigungen umfassen Aphasie, Spracherwerbsprobleme, Autismus, ADD/ADHS, Legasthenie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnte Menschen betreffen, die von Substanzen wie Alkohol oder Drogen beeinflusst sind. Eine andere Form kann die Depression sein, wie bei Trauer über den Verlust eines geliebten Menschen oder bei momentanen Traurigkeit aufgrund eines Tweets oder Videos, das sie gerade online gesehen haben. Ein weiteres Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die breite Palette kognitiver Unterschiede anzugehen, besonders wenn Lösungen für zwei verschiedene Personen im Widerspruch zueinander stehen können. Eine Möglichkeit, dies zu handhaben, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Zu den kognitiven Fähigkeiten gehören:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellen von Inhalten auf mehr als eine Weise, z. B. durch Text-zu-Sprache oder Video;
- Bereitstellen leicht verständlicher Inhalte, z. B. Texte, die nach einfachen Sprachstandards verfasst sind;
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötiger Inhalte oder Werbung;
- Bereitstellen eines konsistenten Seitenlayouts und einer konsistenten Navigation;
- Einbinden vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Zerlegung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- Vereinfachung der Authentifizierung auf der Website, ohne die Sicherheit zu beeinträchtigen; und
- Vereinfachung des Ausfüllens von Formularen, z. B. durch klare Fehlermeldungen und einfache Fehlerkorrektur.

## WCAG-Richtlinien

Die WCAG, Web Content Accessibility Guidelines, enthalten mehrere Richtlinien zur Verbesserung der kognitiven Zugänglichkeit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C), der wichtigsten internationalen Normungsorganisation für das Internet, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/Guides) Richtlinien.

Die WCAG basieren auf vier Grundprinzipien: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Zugänglichkeit sind.

Alle folgenden Richtlinien helfen nicht nur Menschen mit kognitiven Behinderungen. Zum Beispiel hilft die Möglichkeit, die Ablauffrist einer Anwendung, die einen Authentifizierungscode an ein mobiles Gerät per SMS sendet, zu verlängern, in den folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen mit schlechtem Kurzzeitgedächtnis oder die mehrere Aufgaben gleichzeitig bearbeiten.
- Menschen, die technisch weniger versiert sind.
- Menschen mit schlechter drahtloser Verbindung.
- Menschen mit motorischen Kontrollproblemen.

## Anpassungsfähigkeit

[Leitlinie 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte **anpassungsfähig** sein sollten". Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Zum Beispiel, indem Sie {{Glossary("responsive_web_design", "responsive")}} Layouts bereitstellen, mit einem einspaltigen mobilen Design.

Alle Informationen, einschließlich der durch die Präsentation vermittelten Struktur und Beziehungen, sollten in einer Form verfügbar sein, die von allen Benutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Zum Beispiel könnten die Informationen über ein Vorlesetool laut vorgelesen werden. Ihre Inhalte so zu gestalten, dass sie von der Software verstanden werden können, ist eine gute Möglichkeit, sicherzustellen, dass sie von alternativen Präsentationsmodi genutzt werden können.

## Zeit

Es ist wichtig, den Benutzern die erforderliche Zeit zu geben, um Aufgaben zu erledigen. [Leitlinie 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt, dass "Benutzern genug **Zeit** gegeben werden muss, Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Vorgang, der ohne Benutzereingriff nach einer festgelegten Zeit oder in regelmäßigen Abständen erfolgt, wie z. B. das Ausloggen nach 30 Minuten oder das zur Verfügung stellen von 15 Minuten für einen Kauf. Menschen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen wie das Ausfüllen von Formularen auszuführen. Lösungen umfassen die Bereitstellung von genügend zusätzlicher Zeit, um Aufgaben abzuschließen, oder die Abschaffung von Zeitbeschränkungen insgesamt.

### Timer

Optionen zur Anpassung der Zeitvorgaben umfassen:

- Ermöglichen Sie dem Benutzer, die Zeit auszuschalten oder auf mindestens das 10-fache des ursprünglichen Limits zu erhöhen, bevor er darauf stößt.
- Benachrichtigen Sie den Benutzer und geben Sie ihm einen Puffer von mindestens 20 Sekunden, um den Timeout-Dauer um das 10-fache mit einer Aktion, z. B. durch Drücken der Leertaste, zu verlängern.

Bieten Sie einen Umschalter auf Inhalte, der es Benutzern ermöglicht, eine längere Sitzungszeitbegrenzung zu aktivieren oder gar keine Sitzungszeitbegrenzung. Beispiele für zeitgesteuerte Inhalte umfassen Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn die Zeitbegrenzung länger als 20 Stunden ist, sind keine Anpassungen erforderlich.

### Bewegte, blinkende, scrollende Informationen

Es ist wichtig, Benutzer nicht abzulenken, insbesondere solche mit kognitiven Behinderungen.

Wenn sich bewegende, blinkende, scrollende oder sich automatisch aktualisierende Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, sie zu pausieren, zu stoppen, zu verbergen oder zu kontrollieren, es sei denn, es handelt sich um eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierenden Informationen die Bedeutung der Inhalte und/oder Funktionalität grundlegend ändern würde, **und** Informationen und Funktionalität nicht auf eine andere Weise erreicht werden können, die den Anforderungen entspricht. Dies schließt animierte GIFs ein, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche Zeitkriterien, die berücksichtigt werden sollten, sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit, um zu lesen und zu verstehen. Entfernen Sie zeitgesteuerte Inhalte für eine verbesserte Benutzerfreundlichkeit. Ausnahmen gelten für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten sich ohne Ablenkungen auf Inhalte konzentrieren können. Der Benutzer sollte in der Lage sein, Unterbrechungen hinauszuzögern oder zu unterdrücken, es sei denn, es handelt sich um Situationen, in denen eine Person auf einen Notfall hingewiesen werden muss. Dies ermöglicht den Zugang für Menschen mit kognitiven Behinderungen, indem es ihnen ermöglicht wird, sich auf den Hauptzweck der Inhalte zu konzentrieren. Ermöglichen Sie dem Benutzer, Inhaltsaktualisierungen zu verschieben, indem Sie eine Möglichkeit bieten, Inhaltsaktualisierungen anzufordern, anstatt automatisch zu aktualisieren. Außerdem sollte es möglich sein, nicht wesentliche Benachrichtigungen optional zu machen.
- Stellen Sie sicher, dass Menschen eine Aktivität ohne Datenverlust fortsetzen können, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben, zum Beispiel durch das Speichern des Zustands eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach einer erneuten Authentifizierung des Benutzers geändert werden können. Bevor Sie sich erneut authentifizieren, kodieren Sie die Daten als verborgen oder verschlüsselt.
- Warnungen über Inaktivität, die zu Datenverlust führen könnten. Wenn ein Timeout verwendet wird, informieren Sie die Leute genau darüber, wie viel Zeit zum Timeout der Sitzung führen wird und Daten verloren gehen. Die Ausnahme von dieser Regel besteht darin, Daten für mehr als 20 Stunden zu bewahren, wenn keine Aktionen durchgeführt werden.

## Navigation

[Leitlinie 2.4](https://www.w3.org/WAI/WCAG21/Understanding/navigable) besagt, "bieten Sie Wege, um Benutzern zu helfen, zu navigieren, Inhalte zu finden und zu bestimmen, wo sie sind", und bietet 10 Richtlinien, um sicherzustellen, dass die Seite navigierbar und der Inhalt auffindbar ist:

### `<title>` einfügen

Stellen Sie sicher, ein {{HTMLElement('title')}} für das Dokument einzubeziehen, da Titel eine schnelle und leicht zu erfassende Beschreibung des Hauptthemas des Bildschirms bieten. Menschen mit kognitiven Behinderungen, eingeschränktem Kurzzeitgedächtnis und Leseschwierigkeiten profitieren davon, so den Zweck der Inhalte identifizieren zu können.

### Überschriften und Beschriftungen

Inklusive klarer und beschreibender Überschriften, sodass Benutzer Informationen leicht finden und Beziehungen zwischen verschiedenen Inhaltsabschnitten verstehen können. Beschreibende Beschriftungen helfen Benutzern, bestimmte Komponenten innerhalb der Inhalte zu identifizieren. Menschen, die langsam lesen, und Menschen mit eingeschränktem Kurzzeitgedächtnis profitieren davon, wenn Abschnittstitel erkennen lassen, was jeder Abschnitt enthält.

### Abschnittsüberschriften

Überschriften helfen, die GesamtorIsensierung der Seiteninhalte zu definieren. Sie unterstützen die Navigation durch Inhaltsabschnitte der Seite und bieten einen Mechanismus zur Unterstützung des Verständnisses. Beispiele für Überschriften sind Kapitel, Abschnitte und Unterabschnitte von Inhalten usw.

Überschriften sind offensichtlicher Navigationshilfen im Vergleich zu anderen Methoden zur Identifizierung von Inhaltsabschnitten auf der Seite (Ränder, Leerzeichen, horizontale Linien usw.).

### Mehrere Möglichkeiten, Inhalte zu finden

Verschiedene Benutzer bevorzugen unterschiedliche Methoden, um Informationen zu finden, daher ist es wichtig, mehrere Möglichkeiten anzubieten, wie Benutzer Inhalte auf Ihrer Website auffinden können.

Mehr als eine Möglichkeit anzubieten, um auf Ihrer Seite zu navigieren, kann helfen, Informationen schneller zu finden. Einige Benutzer bevorzugen möglicherweise ein Inhaltsverzeichnis, eine Sitemap oder Suchfunktionalität, anstatt mehrere Seiten zu lesen und zu durchforsten, um das zu finden, was sie benötigen. Andere ziehen es möglicherweise vor, die Seite methodisch zu erkunden, von Seite zu Seite zu gehen, um das Layout, die Inhalte und die Konzepte der Seite besser zu verstehen.

### Möglichkeit, Inhaltsblöcke zu überspringen

Bereitstellung eines Mechanismus, wie eines [Skip-Link](/de/docs/Web/HTML/Element/a#skip_links), um Inhaltsblöcke zu überspringen, die auf mehreren Webseiten wiederholt werden.

### Fokusreihenfolge macht Sinn

Die Reihenfolge des Fokus für interaktive Elemente sollte Sinn ergeben. Um dies zu erreichen, sollte die DOM-Reihenfolge mit der visuellen Reihenfolge übereinstimmen, die wiederum mit der Reihenfolge der Tabulatoren übereinstimmen sollte. Wenn die Tabulatoren-Reihenfolge hin und her springt, insbesondere in einer Weise, die der visuellen Reihenfolge bei der Navigation mit einer Tastatur nicht entspricht, können Benutzer desorientiert werden.

### Fokussierte Elemente sollten sichtbar fokussiert sein

Wenn ein Benutzer mit einer Tastatur navigiert, sollte die Benutzeroberfläche deutlich machen, welches Element derzeit den Fokus hat. Ändern oder entfernen Sie nicht das Standardstyling von [`:focus`](/de/docs/Web/CSS/:focus) des Browsers, es sei denn, Sie machen den Fokus noch offensichtlicher.

### Link-Text vermittelt Bedeutung

Der Text des Links sollte klar und prägnant kommunizieren, was der Benutzer als nächstes erwartet, wenn er ihn aktiviert. Schlecht formulierter Link-Text kann Benutzer über dessen Zweck oder Ziel verwirren.

Einige Formen von unterstützender Technologie ermöglichen es Benutzern, durch Listen aller auf der Seite vorhandenen Links zu navigieren. Links werden aus dem Kontext ihres umgebenden Inhalts entfernt, was die Notwendigkeit verständlichen Link-Textes noch wichtiger macht. Ein Beispiel für eine schlechte Erfahrung ist eine Seite voller Links, deren Text "Hier klicken" lautet. Ohne anzugeben, wohin "hier" führen wird, ist der Zweck des Links unklar.

Für Screenreader ist es entscheidend, dass der verlinkte Text den Zweck jedes Links beschreibt. Wenn Sie Inhalte für Screenreader zu Links hinzugefügt haben und diese Inhalte wortreich und potenziell verwirrend für sehende Leser sind, sollten Sie den hinzugefügten Text ausblenden, um ihn für diejenigen, die keine unterstützenden Technologien verwenden, visuell zu verbergen.

### Der aktuelle Standort ist verfügbar

Benutzer sollten in der Lage sein, sich innerhalb einer Website oder Anwendung zu orientieren. Dies ist besonders wichtig und hilfreich für Menschen mit kurzer Aufmerksamkeitsspanne, die sich bei einer langen Serie von Navigationsschritten verwirren können.

Alle Benutzer profitieren von Informationen darüber, wo sie in der Hierarchie einer Website stehen, besonders auf Websites oder Anwendungen mit vielen Inhalten oder vielen Unterabschnitten. {{Glossary("Breadcrumb", "Breadcrumbs")}}, {{Glossary("Site_map", "Sitemaps")}} und die Kennzeichnung der aktuellen Seite in der Navigation als "aktuell" sind alles Techniken, die helfen, den aktuellen Standort zu kommunizieren.

## Lesbarkeit

[Leitlinie 3.1](https://www.w3.org/WAI/WCAG21/Understanding/readable) besagt: "Machen Sie Textinhalte lesbar und verständlich". Für einige Benutzer ist es schwierig, die Bedeutung eines Wortes oder Ausdrucks aus dem Kontext zu erschließen, insbesondere wenn das Wort oder der Ausdruck in einer ungewöhnlichen Weise verwendet wird oder ihm eine spezialisierte Bedeutung gegeben wurde.

Für diese Benutzer hängt die Fähigkeit, zu lesen und zu verstehen, möglicherweise von der Verfügbarkeit spezifischer Definitionen oder erweiterter Formen von Akronymen oder Abkürzungen ab. Einige Benutzer haben große Schwierigkeiten, geschriebene Wörter zu erkennen, obwohl sie extrem komplexe und anspruchsvolle Dokumente verstehen, wenn der Text vorgelesen wird oder wenn Schlüsselmomente und Ideen visuell illustriert werden.

### Deklarieren Sie die Sprache der Seite und alle Inhalte, die nicht in dieser Hauptsprache sind

Die Sprache jeder Seite muss durch das Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang) im {{HTMLElement('html')}} Element deklariert werden. Fügen Sie das `lang` Attribut erneut für Texte ein, die in einer anderen Sprache als der Hauptsprache des Dokuments verfasst sind.

Die ordnungsgemäße Verwendung von `lang` ermöglicht es einigen Screenreadern, den Text korrekt anzukündigen, wenn er in synthetische Sprache umgewandelt wird. Es hilft auch Menschen, die Text-to-Speech-Software verwenden.

### Definieren Sie ungewöhnliche Wörter und Wortgebrauch

Einige Behinderungen erschweren das Verständnis des nicht-wörtlichen Wortgebrauchs, wie Idiome, umgangssprachliche Ausdrücke und spezialisierten Jargon. Nicht-Muttersprachler könnten auch Schwierigkeiten mit diesen Begriffen haben. Wenn ein Wort oder Ausdruck eine einzigartige Bedeutung hat, geben Sie im Dokument eine Definition entweder inline oder verlinkt, innerhalb eines Glossars oder zu einem Online-Wörterbuch an. Wenn ein Wort oder Ausdruck in mehr als einer Bedeutung verwendet wird, definieren Sie jede Verwendung.

### Definieren Sie Abkürzungen

Abkürzungen können für Menschen verwirrend sein, die:

- Schwierigkeiten haben, Wörter zu entschlüsseln.
- Ein eingeschränktes Gedächtnis haben.
- Schwierigkeiten haben, den Kontext zur Unterstützung des Verständnisses zu nutzen.
- Sich auf Bildschirmlupen verlassen (die oft kontextuelle Hinweise reduzieren).

Geben Sie die erweiterte Form der Abkürzung beim ersten Gebrauch an, gefolgt von der Abkürzung, die sich innerhalb eines {{HTMLElement('abbr')}} Elements befindet. Wenn eine Abkürzung keine erweiterte Form hat oder eine Abkürzung für ein Wort in einer anderen Sprache als der Hauptsprache des Dokuments ist (z. B. Latein), erklären Sie ihre Bedeutung. Überlegen Sie auch, ob Sie [Ruby-Text](/de/docs/Web/HTML/Element/ruby) für Initialismus (Aussprache von Akronymen) verwenden.

### Lesestufe

Inhalte sollten so klar wie möglich geschrieben werden. Eine gute Regel ist, die Inhalte so einfach zu gestalten, dass sie beim ersten Mal verstanden werden können. Methoden zur Erreichung dieses Ziels umfassen:

- Verwendung kurzer, einfacher Wörter.
- Schreiben kurzer Sätze.
- Verwendung eines aktiven Stils im Präsens.
- Korrekte Grammatik und Rechtschreibung.

Es hilft Benutzern mit kognitiven Behinderungen, eine textliche Zusammenfassung (manchmal als TL;DR oder "too long; didn't read" bezeichnet) auf einem niedrigen Lesestatus zu bieten. Eine weitere Technik, die Sie verwenden können, ist die Bereitstellung von Begleitvisualisierungen zur Erläuterung von Ideen, Ereignissen und Prozessen.

Es gibt Tools, die den Schwierigkeitsgrad Ihrer Inhalte bewerten können. Zum Beispiel hat dieses Dokument eine durchschnittliche Klassenstufe von etwa 11. Das bedeutet, dass es von einem Englisch-Muttersprachler im Alter von 16 bis 17 Jahren leicht verstanden werden sollte. Einige Tools können sogar Vorschläge liefern, um es einfacher zu machen.

### Aussprache

Es gibt mehrere Techniken, die helfen können, Menschen beizubringen, wie man Wörter ausspricht:

- Geben Sie die Aussprache unmittelbar nach dem Wort an.
- Verlinken Sie zu einer Liste von Aussprachen.
- Bieten Sie ein Glossar mit Aussprache.
- Verwenden Sie das {{HTMLElement('ruby')}} Element, um zu veranschaulichen, wie ein Wort ausgesprochen wird.

Eine Anleitung zur Aussprache von Wörtern anzubieten, hilft vielen verschiedenen Menschen, einschließlich solcher, die vorzugsweise laut lesen, nicht-muttersprachlichen Sprechern und Menschen, die mit der Bedeutung eines Begriffs im Kontext nicht vertraut sind.

Eine andere Lösung besteht darin, Glyphen oder diakritische Zeichen zur Veranschaulichung der Aussprache zu verwenden. Wenn diese Technik jedoch verwendet wird, muss ein Mechanismus bereitgestellt werden, um sie auszuschalten. Zudem ist es hilfreich, auf eine Anleitung zu den verwendeten Zeichen zu verlinken, da deren Bedeutung möglicherweise nicht offensichtlich ist.

## Vorhersehbarkeit

WCAG [Leitlinie 3.2](https://www.w3.org/WAI/WCAG21/Understanding/predictable) besagt, "Webseiten erscheinen und arbeiten in vorhersehbaren Weisen". Dies ist ein Grundsatz guten Benutzererfahrungsdesigns. Konsistenz ist insbesondere für Menschen mit kognitiven Schwierigkeiten wichtig. Dazu gehören Konsistenz im Seitenlayout und vorhersehbare interaktive Komponenten.

### Verwenden Sie Aktivierung, nicht Fokus, um den Kontext zu ändern

Das Erzeugen einer Kontextänderung sollte absichtlich erfolgen. Aus diesem Grund sollte, wenn ein UI-Feature [Fokus](/de/docs/Web/API/HTMLElement/focus) erhält, es keine weiteren benutzerorientierten Aktionen auslösen. Vielmehr sollten Benutzer ein Feature "aktivieren", um die Änderung auszulösen.

### Ändern Sie Einstellungen basierend auf einem aktiven Ersuchen

Die Funktionsweise von Formularelementen und Dateneingaben sollte zu vorhersehbarem Verhalten führen. Änderungen im Kontext können Benutzer mit kognitiven Behinderungen verwirren und sollten daher nur auftreten, wenn klar ist, dass eine solche Änderung infolge der Benutzeraktion erfolgen wird.

Das Ändern des Standes sollte eine bewusste Benutzeraktion erfordern. Beispiele hierfür sind das Aktivieren eines Kontrollkästchens, das Eingeben von Daten oder das Ändern einer Auswahloption. Stellen Sie auch sicher, dass Sie einen Übertragungsknopf bereitstellen, um die Kontextänderung zu initiieren, und beschreiben Sie, was passieren wird, bevor die Änderung vorgenommen wird.

### Konsistenz halten in der Navigation auf der gesamten Seite

Halten Sie die Reihenfolge der Navigation zwischen den Seiten konsistent. Wenn Sie zum Beispiel eine Navigationsleiste auf mehreren Seiten haben, gestalten Sie diese auf der gesamten Website einheitlich mit denselben Links an denselben Stellen. Das gilt nicht nur für die Navigation: Präsentieren Sie alle wiederholten Komponenten in derselben relativen Reihenfolge, wenn sie erscheinen.

### Statt gleiche Funktionen auch gleich beschriften

Identische Funktionen sollten jedes Mal ähnliche Bezeichnungen haben, wenn sie genutzt werden. Konsistente Bezeichnungen von Schaltflächen, alternative Texte für Symbole, und Iconographie für ähnliche Interaktionen usw., auch in verschiedenen Bereichen Ihrer Seite, helfen all Ihren Benutzern.

### Seien Sie konsistent und vorhersagbar, und verwenden Sie Normen

Während unbeschriftete Iconographie nicht die effektivste Methode zur Informationsvermittlung ist, hilft die konsistente Verwendung der Symbole (und wenn sie beschriftet sind, der Beschriftungstext) den Menschen, zu verstehen, was das Symbol darstellt. Ändern Sie ebenso keine Voreinstellungen, wie etwa die Rücktaste des Browsers. Wenn Sie einen Benutzer umleiten müssen, informieren Sie ihn im Voraus.

## Eingabehilfe

[Leitlinie 3.3](https://www.w3.org/WAI/WCAG21/Understanding/input-assistance) hilft, genaue Dateneingaben zu sichern, und besagt "Helfen Sie den Benutzern, Fehler zu vermeiden und zu korrigieren". Während wir alle Fehler machen, sind einige Menschen anfälliger für Fehler, bemerken Fehler weniger häufig oder haben es schwerer, sie zu korrigieren, sobald sie geschehen sind.

Die Leitlinien zur Eingabehilfe zielen darauf ab, die Wahrscheinlichkeit zu verringern, dass Benutzer, insbesondere solche mit Behinderungen, Fehler machen, und wenn sie einen Fehler machen, die Wahrscheinlichkeit zu erhöhen, dass sie die Fehlermeldung sehen und verstehen und Fehler erfolgreich beheben können.

### Automatische Fehlerkennung übermitteln

Benutzer müssen auf den Fehler aufmerksam gemacht und darüber informiert werden, was nicht stimmt. Wenn es einen clientseitigen Fehlererkennung gibt, beachten Sie die folgenden Richtlinien, um den Fehler so effektiv wie möglich an den Benutzer zu übermitteln:

- Der Fehler muss im Text beschrieben werden.
- Stellen Sie sicher, dass die Fehlermeldung so spezifisch wie möglich ist.
- Geben Sie Text zur Identifizierung unvollständiger erforderlicher Felder und Textbeschreibungen, falls ein eingegebener Wert ungültig ist.
- Wenn der Fehler eine Formularübermittlung verhinderte, fokussieren Sie auf den Fehler. Wenn mehrere Fehler vorhanden sind, bieten Sie eine Zusammenfassung an, wobei jeder Fehler mit der zugehörigen Eingabe verlinkt ist.
- Fügen Sie Text mit der Verwendung von Symbolen, Bildern, Farben usw. hinzu. Manche Menschen haben Schwierigkeiten, die Bedeutung von Symbolen und anderen visuellen Hinweisen zu verstehen.
- Andere Menschen haben möglicherweise Schwierigkeiten, den Textinhalt Ihrer Fehlermeldung zu verstehen. Für diese Menschen liefern Sie auch Dinge wie Symbole und Farben.
- Außerdem geben Sie Rückmeldung, wenn eine Formularübermittlung erfolgreich war.

### Geben Sie Anweisungen für Benutzereingaben

Beginnen Sie das Formular mit Textanweisungen zur Bedienung. Fügen Sie Beschriftungen oder Anweisungen hinzu, wenn Benutzer Informationen eingeben müssen, indem Sie die {{HTMLElement('label')}}, {{HTMLElement('fieldset')}}, und {{HTMLElement('legend')}} Elemente verwenden.

Beschriftungen sollten beschreibend sein und nahe an der Eingabe positioniert sein, auf die sie sich beziehen. Wenn ein bestimmtes Format für Eingaben erforderlich ist, geben Sie ein Beispiel an, das im richtigen Format formatiert ist. Zusätzlich sollten Sie auch eine serverseitige Validierung durchführen, um Eingabedaten zu formatieren, um die Eingabe durch den Benutzer zu erleichtern.

Wenn ein Formularfeld erforderlich ist, markieren Sie dies sowohl visuell als auch [im Code](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required). Wenn ein Formularfeld den Kontext ändert, beschreiben Sie, was passieren wird, in einer Weise, dass der Benutzer es versteht, bevor die Kontextänderung auftritt.

### Vorschläge für Fehler

Geben Sie dem Benutzer Vorschläge zur Eingabe, wenn ein Eingabefehler automatisch erkannt wurde und Korrekturvorschläge bekannt sind (es sei denn, dies würde die Sicherheit oder den Zweck der Inhalte gefährden).

### Verhindern Sie Katastrophen

Für Übermittlungen, die rechtliche, finanzielle oder andere wesentliche Konsequenzen haben oder haben können, stellen Sie sicher, dass die Übermittlungen überprüft, bestätigt und/oder rückgängig gemacht werden können.

Von Benutzern eingegebene Daten sollten vor der Übermittlung auf Fehler überprüft werden, und den Benutzern sollte die Möglichkeit gegeben werden, sie zu korrigieren. Der Benutzer sollte in der Lage sein, Informationen vor der endgültigen Übermittlung zu überprüfen, zu bestätigen und zu korrigieren. Stellen Sie außerdem sicher, dass zusätzlich zu einem Übermittlungsknopf auch ein Bestätigungsfeld enthalten ist.

Wenn eine Übermittlung eine rechtliche oder finanzielle Transaktion verursacht, geben Sie eine festgelegte Zeit an, innerhalb derer der Benutzer die Anfrage ändern oder stornieren kann.

### Hilfe bereitstellen

Kontextabhängige Hilfe sollte verfügbar gemacht werden. Wenn ein Formular die Texteingabe erfordert, geben Sie Form Anweisungen an, die den Zweck und die erforderliche Eingabe beschreiben. Verwenden Sie eine Rechtschreibüberprüfung und Vorschläge für lang formatierte Texteingaben sowie Links zu Hilfe- und Unterstützungsmaterialien. Wenn für die Eingabe ein bestimmtes Datenformat erwartet wird, geben Sie ein Beispiel an.

## Hinweise

Die oben genannten sind gute Designpraktiken. Sie werden allen zugutekommen.

- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen.
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Webzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-amerikanischen Zentren für Krankheitskontrolle schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat, und darunter ist [kognitive Beeinträchtigung die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden "intellektuelle Behinderungen" früher als "Geistige Behinderung" bezeichnet. Im UK werden "intellektuelle Behinderungen" häufig auch als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Siehe auch

- [Richtlinien zur Barrierefreiheit](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Was ist Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [Zugänglichkeit für Anfallsleiden](/de/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Verständnis der WCAG-Richtlinien](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
- [Überblick über die Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), einschließlich [kognitive Zugänglichkeitsrichtlinien](#wcag-richtlinien)
- [Die W3C's Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WebAIM Kognitive Informationen](https://webaim.org/articles/cognitive/)
- [CDC Informationen zu Behinderungen](https://www.cdc.gov/ncbddd/disabilityandhealth/)
