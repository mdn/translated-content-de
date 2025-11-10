---
title: Kritischer Rendering-Pfad
slug: Web/Performance/Guides/Critical_rendering_path
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um HTML, CSS und JavaScript in Pixel auf dem Bildschirm umzuwandeln. Die Optimierung des kritischen Rendering-Pfads verbessert die Renderleistung. Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.

Das Document Object Model wird erstellt, während das HTML analysiert wird. Das HTML kann JavaScript anfordern, das wiederum das DOM verändern kann. Das HTML umfasst oder fordert Styles an, die wiederum das CSS Object Model aufbauen. Die Browser-Engine kombiniert die beiden, um den Renderbaum zu erstellen. Das Layout bestimmt die Größe und die Position von allem auf der Seite. Sobald das Layout festgelegt ist, werden Pixel auf den Bildschirm gemalt.

Die Optimierung des kritischen Rendering-Pfads verbessert die Zeit bis zur ersten Darstellung. Das Verstehen und Optimieren des kritischen Rendering-Pfads ist wichtig, um sicherzustellen, dass Neulayouts und Neuzeichnungen mit 60 Bildern pro Sekunde durchgeführt werden können, um performante Benutzerinteraktionen zu gewährleisten und um {{Glossary("Jank", "Jank")}} zu vermeiden.

## Verstehen des CRP

Web-Performance umfasst die Serveranfragen und -antworten, das Laden, das Skripting, das Rendern, das Layout und das Malen der Pixel auf den Bildschirm.

Eine Anfrage für eine Webseite oder App beginnt mit einer HTTP-Anfrage. Der Server sendet eine Antwort, die das HTML enthält. Der Browser beginnt dann, das HTML zu analysieren und die empfangenen Bytes in den DOM-Baum zu konvertieren. Der Browser initiiert Anfragen jedes Mal, wenn er Links zu externen Ressourcen findet, seien es Stylesheets, Skripte oder eingebettete Bildreferenzen. Einige Anfragen blockieren, was bedeutet, dass das Parsen des restlichen HTMLs gestoppt wird, bis das importierte Asset behandelt wird. Der Browser setzt das Parsen des HTMLs fort, stellt Anfragen und baut das DOM auf, bis er zum Ende gelangt, an welchem Punkt er das CSS Object Model konstruiert. Mit dem vollständigen DOM und CSSOM erstellt der Browser den Renderbaum, in dem die Stile für alle sichtbaren Inhalte berechnet werden. Sobald der Renderbaum abgeschlossen ist, tritt das Layout ein, das festlegt, wo und wie die Elemente auf der Seite platziert sind, und ihre Breite und Höhe bestimmt sowie ihre Relation zueinander. Ist dies abgeschlossen, wird die Seite gerendert bzw. 'gemalt' auf den Bildschirm.

### Document Object Model

Der Aufbau des DOM ist inkrementell. Die HTML-Antwort wird zu Tokens, die zu Knoten werden, die wiederum den DOM-Baum bilden. Ein einzelner DOM-Knoten beginnt mit einem startTag-Token und endet mit einem endTag-Token. Knoten enthalten alle relevanten Informationen über das HTML-Element. Die Informationen werden mit Tokens beschrieben. Knoten sind basierend auf der Token-Hierarchie in einem DOM-Baum verbunden. Wenn ein weiterer Satz von startTag- und endTag-Tokens zwischen einem Satz startTag- und endTags kommt, haben Sie einen Knoten innerhalb eines Knotens, was die Hierarchie des DOM-Baums definiert.

Je größer die Anzahl der Knoten, desto länger dauern die folgenden Ereignisse im kritischen Rendering-Pfad. Messen Sie! Ein paar zusätzliche Knoten machen keinen großen Unterschied, aber bedenken Sie, dass das Hinzufügen von vielen zusätzlichen Knoten die Leistung beeinträchtigen wird.

### CSS Object Model

Das DOM enthält den gesamten Inhalt der Seite. Das CSSOM enthält alle Informationen darüber, wie das DOM zu stylen ist. CSSOM ist dem DOM ähnlich, aber anders. Während der DOM-Aufbau inkrementell ist, ist CSSOM dies nicht. CSS blockiert das Rendern: Der Browser blockiert das Rendern der Seite, bis es das gesamte CSS empfangen und verarbeitet hat. CSS blockiert das Rendern, weil Regeln überschrieben werden können, sodass der Inhalt nicht gerendert werden kann, bis CSSOM komplett ist.

CSS hat seine eigenen Regeln zur Erkennung gültiger Tokens. Denken Sie daran, dass das 'C' in CSS für 'Cascade' steht. CSS-Regeln kaskadieren nach unten. Während der Parser Tokens in Knoten umwandelt, erben Nachkommenknoten einige der Stile vom Elternteil. Die inkrementellen Verarbeitungseigenschaften gelten nicht für CSS wie für HTML, da nachfolgende Regeln vorherige überschreiben können. Das CSS Object Model wird erstellt, während das CSS analysiert wird, kann jedoch nicht verwendet werden, um den Renderbaum zu erstellen, bis es vollständig analysiert ist, da Stile, die bei späterer Analyse überschrieben werden, nicht auf den Bildschirm gerendert werden sollten.

In Bezug auf die Selektorleistung sind weniger spezifische Selektoren schneller als speziellere. Zum Beispiel ist `.foo {}` schneller als `.bar .foo {}`, weil der Browser im zweiten Szenario, wenn er `.foo` findet, den DOM-Baum hochgehen muss, um zu prüfen, ob `.foo` einen Vorfahren `.bar` hat. Der spezifischere Tag erfordert mehr Arbeit des Browsers, aber diese Strafe ist wahrscheinlich nicht wert, um optimiert zu werden.

Wenn Sie die Zeit messen, die zum Parsen von CSS benötigt wird, werden Sie erstaunt sein, wie schnell Browser tatsächlich sind. Die spezifischere Regel ist teurer, weil sie mehr Knoten im DOM-Baum durchlaufen muss - aber dieser zusätzliche Aufwand ist im Allgemeinen minimal. Messen Sie zuerst. Optimieren Sie nach Bedarf. Spezifität ist wahrscheinlich nicht Ihre niedrig hängende Frucht. Bei CSS sind Optimierungsverbesserungen der Selektorleistung nur im Mikrosekundenbereich. Es gibt andere [Wege zur Optimierung von CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS), wie Minifizierung und das Trennen von verzögertem CSS in nicht blockierende Anfragen durch Verwendung von Media Queries.

### Render Tree

Der Renderbaum umfasst sowohl den Inhalt als auch die Styles: die DOM- und CSSOM-Bäume werden in den Renderbaum kombiniert. Um den Renderbaum zu konstruieren, überprüft der Browser jeden Knoten, beginnend vom Stamm des DOM-Baums, und bestimmt, welche CSS-Regeln angewendet werden.

Der Renderbaum umfasst nur sichtbare Inhalte. Der Head-Bereich enthält (im Allgemeinen) keine sichtbaren Informationen und ist daher nicht im Renderbaum enthalten. Wenn ein `display: none;` auf einem Element eingestellt ist, sind weder es noch seine Nachkommen im Renderbaum.

### Layout

Sobald der Renderbaum erstellt ist, wird Layout möglich. Layout ist abhängig von der Bildschirmgröße. Der Layout-Schritt bestimmt, wo und wie die Elemente auf der Seite positioniert sind, und bestimmt die Breite und Höhe jedes Elements sowie ihre Relation zueinander.

Was ist die Breite eines Elements? Block-Level-Elemente haben per Definition eine Standardbreite von 100% der Breite ihres Elternteils. Ein Element mit einer Breite von 50% hat die Hälfte der Breite seines Elternteils. Sofern nicht anders definiert, hat der Body eine Breite von 100%, was bedeutet, dass er 100% der Breite des Viewports einnimmt. Diese Breite des Geräts wirkt sich auf das Layout aus.

Das Viewport-Meta-Tag definiert die Breite des Layout-Viewports und beeinflusst das Layout. Ohne es verwendet der Browser die Standardviewbreite, die bei standardmäßig auf Vollbild gesetzten Browsern im Allgemeinen 960px beträgt. Bei standardmäßig auf Vollbild gesetzten Browsern, wie dem Browser Ihres Telefons, wird durch das Setzen von `<meta name="viewport" content="width=device-width">` die Breite auf die des Geräts anstelle der Standardviewbreite gesetzt. Die Gerätebreite ändert sich, wenn ein Benutzer das Telefon zwischen Quer- und Hochformat dreht. Layout tritt jedes Mal auf, wenn ein Gerät gedreht oder der Browser anderweitig angepasst wird.

Die Leistung des Layouts wird durch das DOM beeinflusst — je größer die Anzahl der Knoten, desto länger dauert das Layout. Layout kann zu einem Engpass werden und Jank verursachen, wenn er während des Scrollens oder anderer Animationen erforderlich ist. Eine Verzögerung von 20 ms bei der Lade- oder Orientierungsänderung mag in Ordnung sein, sie führt jedoch zu Jank bei Animationen oder Scrollen. Jedes Mal, wenn der Renderbaum modifiziert wird, z.B. durch Hinzufügen von Knoten, Verändern von Inhalten oder Aktualisieren von Boxmodell-Styles auf einem Knoten, erfolgt ein Layout.

Um die Häufigkeit und Dauer von Layout-Ereignissen zu reduzieren, stapeln Sie Updates und vermeiden Sie Animationen von Boxmodell-Eigenschaften.

### Paint

Der letzte Schritt ist das Malen der Pixel auf den Bildschirm. Sobald der Renderbaum erstellt und das Layout durchgeführt wird, können die Pixel auf den Bildschirm gemalt werden. Beim Laden wird der gesamte Bildschirm gemalt. Danach werden nur die betroffenen Bereiche des Bildschirms neu gemalt, da Browser so optimiert sind, dass sie den minimal erforderlichen Bereich neu malen. Die Malzeit hängt davon ab, welche Art von Updates auf den Renderbaum angewendet werden. Während das Malen ein sehr schneller Prozess ist und daher wahrscheinlich nicht der wirkungsvollste Ort ist, um die Leistung zu verbessern, ist es wichtig, sowohl die Layout- als auch die Neuproduktionszeiten zu berücksichtigen, wenn gemessen wird, wie lange ein Animationsbildrahmen dauern kann. Die auf jeden Knoten angewendeten Styles erhöhen die Malzeit, aber das Entfernen eines Stils, der das Malen um 0,001 ms erhöht, könnte Ihnen nicht den größten Optimierungsertrag bringen. Denken Sie daran, zuerst zu messen. Dann können Sie entscheiden, ob es eine Optimierungspriorität sein sollte.

## Optimierung für CRP

Verbessern Sie die Seitengeschwindigkeit, indem Sie priorisieren, welche Ressourcen geladen werden, die Reihenfolge kontrollieren, in der sie geladen werden, und die Dateigrößen dieser Ressourcen reduzieren. Zu den Leistungstipps gehören 1) Minimierung der Anzahl kritischer Ressourcen, indem der Download nicht-kritischer Ressourcen verzögert, sie als async markiert oder ganz eliminiert wird, 2) Optimierung der Anzahl notwendiger Anfragen zusammen mit der Dateigröße jeder Anfrage und 3) Optimierung der Reihenfolge, in der kritische Ressourcen geladen werden, durch Priorisierung des Downloads kritischer Assets, wodurch die Länge des kritischen Pfads verkürzt wird.
