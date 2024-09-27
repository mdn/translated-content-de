---
title: Kritischer Rendering-Pfad
slug: Web/Performance/Critical_rendering_path
l10n:
  sourceCommit: b12b0159b3f27459ed82b9ac8e3711fec4912e19
---

{{QuickLinksWithSubPages("Web/Performance")}}

Der Kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm zu konvertieren. Die Optimierung des kritischen Rendering-Pfads verbessert die Renderleistung. Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Rendertree und das Layout.

Das Document Object Model wird erstellt, während das HTML geparst wird. Das HTML kann JavaScript anfordern, das wiederum das DOM ändern kann. Das HTML enthält oder fordert Stile an, die wiederum das CSS Object Model aufbauen. Die Browser-Engine kombiniert beide, um den Rendertree zu erstellen. Das Layout bestimmt die Größe und Position von allem auf der Seite. Sobald das Layout festgelegt ist, werden die Pixel auf den Bildschirm gemalt.

Die Optimierung des kritischen Rendering-Pfades verbessert die Zeit bis zur ersten Darstellung. Das Verständnis und die Optimierung des kritischen Rendering-Pfades sind wichtig, um sicherzustellen, dass Neuzeichnungen und Neugestaltungen mit 60 Frames pro Sekunde erfolgen können, um performante Benutzerinteraktionen zu gewährleisten und [Ruckeln](/de/docs/Glossary/Jank) zu vermeiden.

## Verständnis des CRP

Web-Performance umfasst die Serveranfragen und -antworten, das Laden, Skripting, Rendern, Layout und das Malen der Pixel auf dem Bildschirm.

Eine Anfrage für eine Webseite oder App beginnt mit einer HTTP-Anfrage. Der Server sendet eine Antwort, die das HTML enthält. Der Browser beginnt dann mit dem Parsen des HTML und konvertiert die empfangenen Bytes in den DOM-Baum. Der Browser initiiert Anfragen jedes Mal, wenn er Links zu externen Ressourcen findet, sei es Stylesheets, Skripte oder eingebettete Bildreferenzen. Einige Anfragen blockieren, was bedeutet, dass das Parsen des restlichen HTML gestoppt wird, bis das importierte Asset verarbeitet ist. Der Browser parst weiterhin das HTML, stellt Anfragen und baut das DOM auf, bis er zum Ende gelangt, an welchem Punkt er das CSS Object Model konstruiert. Mit dem vollständigen DOM und CSSOM erstellt der Browser den Rendertree und berechnet die Stile für alle sichtbaren Inhalte. Nachdem der Rendertree vollständig ist, erfolgt das Layout, das den Ort und die Größe aller Rendertree-Elemente definiert. Sobald dies abgeschlossen ist, wird die Seite auf dem Bildschirm dargestellt oder "gemalt".

### Document Object Model

Der DOM-Aufbau ist inkrementell. Die HTML-Antwort wird in Token umgewandelt, die sich in Knoten verwandeln, welche sich in den DOM-Baum verwandeln. Ein einzelner DOM-Knoten beginnt mit einem StartTag-Token und endet mit einem EndTag-Token. Knoten enthalten alle relevanten Informationen über das HTML-Element. Die Informationen werden mit Hilfe von Token beschrieben. Knoten werden basierend auf der Token-Hierarchie zu einem DOM-Baum verbunden. Wenn ein weiteres Set von StartTag- und EndTag-Token zwischen einem Set von StartTag- und EndTag-Token kommt, haben Sie einen Knoten innerhalb eines Knotens, was die Hierarchie des DOM-Baums definiert.

Je größer die Anzahl der Knoten, desto länger dauern die folgenden Ereignisse im kritischen Rendering-Pfad. Messen Sie! Ein paar zusätzliche Knoten machen keinen großen Unterschied, aber denken Sie daran, dass das Hinzufügen vieler zusätzlicher Knoten die Leistung beeinträchtigen wird.

### CSS Object Model

Das DOM enthält den gesamten Inhalt der Seite. Das CSSOM enthält alle Informationen darüber, wie das DOM gestylt werden soll. CSSOM ist dem DOM ähnlich, aber unterschiedlich. Während der DOM-Aufbau inkrementell ist, ist das CSSOM dies nicht. CSS blockiert das Rendern: Der Browser blockiert das Rendering der Seite, bis er das gesamte CSS erhält und verarbeitet hat. CSS blockiert das Rendern, weil Regeln überschrieben werden können, sodass der Inhalt nicht gerendert werden kann, bis das CSSOM vollständig ist.

CSS hat seine eigenen Regeln zur Identifizierung gültiger Tokens. Denken Sie daran, dass das C in CSS für "Cascade" (Kaskadierung) steht. CSS-Regeln kaskadieren nach unten. Während der Parser Token in Knoten umwandelt, erben Nachkommen einige der Stile des Elternteils. Die inkrementellen Verarbeitungsmerkmale gelten nicht für CSS wie für HTML, da nachfolgende Regeln frühere überschreiben können. Das CSS Object Model wird beim Parsen des CSS aufgebaut, kann jedoch nicht zum Erstellen des Renderbaums verwendet werden, bis es vollständig geparst ist, da Stile, die mit späterem Parsen überschrieben werden, nicht auf dem Bildschirm gerendert werden sollten.

In Bezug auf die Selektorleistung sind weniger spezifische Selektoren schneller als spezifischere. Zum Beispiel ist `.foo {}` schneller als `.bar .foo {}`, da der Browser im zweiten Szenario bei der Suche nach `.foo` den DOM-Baum nach oben durchlaufen muss, um zu überprüfen, ob `.foo` einen Vorfahren `.bar` hat. Der spezifischere Tag erfordert mehr Arbeit vom Browser, aber diese Strafe lohnt sich wahrscheinlich nicht zu optimieren.

Wenn Sie die Zeit messen, die zum Parsen von CSS benötigt wird, werden Sie erstaunt sein, wie schnell Browser tatsächlich sind. Die spezifischere Regel ist teurer, da sie mehr Knoten im DOM-Baum durchlaufen muss - aber dieser zusätzliche Aufwand ist in der Regel minimal. Messen Sie zuerst. Optimieren Sie bei Bedarf. Spezifität ist wahrscheinlich nicht Ihr niedrig hängendes Obst. Wenn es um CSS geht, werden Verbesserungen bei der Selektorleistung nur in Mikrosekunden erfolgen. Es gibt andere [Möglichkeiten, CSS zu optimieren](/de/docs/Learn/Performance/CSS), wie z.B. Minifizierung und das Trennen von aufgeschobenem CSS in nicht blockierende Anfragen durch Medienabfragen.

### Render Tree

Der Renderbaum erfasst sowohl den Inhalt als auch die Stile: Die DOM- und CSSOM-Bäume werden in den Renderbaum kombiniert. Um den Renderbaum zu erstellen, überprüft der Browser jeden Knoten, beginnend von der Wurzel des DOM-Baums, und bestimmt, welche CSS-Regeln angewendet werden.

Der Renderbaum erfasst nur sichtbaren Inhalt. Der Kopfabschnitt (im Allgemeinen) enthält keine sichtbaren Informationen und wird daher nicht in den Renderbaum aufgenommen. Wenn ein Element auf `display: none;` gesetzt ist, wird es ebenso wenig wie eines seiner Nachkommen im Renderbaum berücksichtigt.

### Layout

Sobald der Renderbaum aufgebaut ist, wird das Layout möglich. Das Layout ist von der Größe des Bildschirms abhängig. Der Layout-Schritt bestimmt, wo und wie die Elemente auf der Seite positioniert sind, bestimmt die Breite und Höhe jedes Elements und deren Position zueinander.

Wie breit ist ein Element? Blockelemente haben per Definition eine Standardbreite von 100% der Breite ihres Elternteils. Ein Element mit einer Breite von 50% ist halb so groß wie sein Elternteil. Sofern nicht anders definiert, hat der Body eine Breite von 100%, was bedeutet, dass er 100% der Breite des Ansichtsfensters hat. Diese Breite des Geräts wirkt sich auf das Layout aus.

Das Viewport-Meta-Tag definiert die Breite des Layoutansichtsfensters, was das Layout beeinflusst. Ohne es verwendet der Browser die Standardbreite des Ansichtsfensters, die bei standardmäßig im Vollbildmodus ausgeführten Browsern in der Regel 960px beträgt. Bei standardmäßig im Vollbildmodus ausgeführten Browsern, wie dem Browser Ihres Telefons, wird die Breite mit der Einstellung `<meta name="viewport" content="width=device-width">` die Breite des Geräts anstelle der Standardbreite des Ansichtsfensters sein. Die Gerätebreite ändert sich, wenn ein Benutzer sein Telefon zwischen Quer- und Hochformat dreht. Layout passiert jedes Mal, wenn ein Gerät gedreht oder der Browser anderweitig geändert wird.

Die Layout-Leistung wird vom DOM beeinflusst – je größer die Anzahl der Knoten, desto länger dauert das Layout. Layout kann zum Nadelöhr werden und zu Ruckeln führen, wenn es beim Scrollen oder bei anderen Animationen erforderlich ist. Während eine Verzögerung von 20 ms beim Laden oder beim Ändern der Ausrichtung in Ordnung sein kann, führt sie bei Animationen oder Scrollen zu Ruckeln. Jedes Mal, wenn der Rendertree verändert wird, wie z.B. durch Hinzufügen von Knoten, Änderung von Inhalten oder Aktualisierung der Box-Modell-Stile an einem Knoten, erfolgt ein Layout.

Um die Häufigkeit und Dauer von Layout-Ereignissen zu reduzieren, sollten Sie Aktualisierungen bündeln und vermeiden, Boxmodell-Eigenschaften zu animieren.

### Paint

Der letzte Schritt ist das Malen der Pixel auf den Bildschirm. Sobald der Rendertree erstellt und das Layout erfolgt ist, können die Pixel auf den Bildschirm gemalt werden. Beim Laden wird der gesamte Bildschirm gemalt. Danach werden nur die betroffenen Bereiche des Bildschirms neu bemalt, da Browser optimiert sind, um den minimal erforderlichen Bereich neu zu bemalen. Die Malzeit hängt davon ab, welche Art von Aktualisierungen am Rendertree vorgenommen werden. Während das Malen ein sehr schneller Prozess ist und daher wahrscheinlich nicht der wirkungsvollste Ort ist, um die Leistung zu verbessern, ist es wichtig, beim Messen der Dauer eines Animationsframes sowohl die Layout- als auch die Neumalzeiten zu berücksichtigen. Die auf jeden Knoten angewendeten Stile erhöhen die Malzeit, aber das Entfernen von Stil, der das Malen um 0,001 ms erhöht, wird Ihnen möglicherweise nicht den größten Nutzen für Ihre Optimierung bringen. Denken Sie daran, zuerst zu messen. Dann können Sie bestimmen, ob es eine Optimierungspriorität sein sollte.

## Optimierung für den CRP

Verbessern Sie die Seitenladegeschwindigkeit, indem Sie priorisieren, welche Ressourcen geladen werden, die Reihenfolge kontrollieren, in der sie geladen werden, und die Dateigrößen dieser Ressourcen reduzieren. Leistungstipps umfassen 1) Minimierung der Anzahl kritischer Ressourcen, indem der Download nicht-kritischer Ressourcen verschoben, als asynchron markiert oder ganz eliminiert wird, 2) Optimierung der Anzahl der erforderlichen Anfragen zusammen mit der Dateigröße jeder Anfrage und 3) Optimierung der Reihenfolge, in der kritische Ressourcen geladen werden, indem das Herunterladen kritischer Assets priorisiert wird, wodurch die Länge des kritischen Pfads verkürzt wird.
