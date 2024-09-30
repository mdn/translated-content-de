---
title: Critical rendering path
slug: Web/Performance/Critical_rendering_path
l10n:
  sourceCommit: b12b0159b3f27459ed82b9ac8e3711fec4912e19
---

{{QuickLinksWithSubPages("Web/Performance")}}

Der Critical Rendering Path ist die Abfolge von Schritten, die der Browser durchläuft, um das HTML, CSS und JavaScript in Pixel auf dem Bildschirm zu verwandeln. Die Optimierung des kritischen Rendering-Pfads verbessert die Renderleistung. Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.

Das Document Object Model wird erstellt, während das HTML geparst wird. Das HTML kann JavaScript anfordern, das wiederum das DOM ändern kann. Das HTML enthält oder fordert Stile an, die wiederum das CSS-Objektmodell erstellen. Die Browser-Engine kombiniert die beiden Modelle, um den Renderbaum zu erstellen. Das Layout bestimmt die Größe und den Ort von allem auf der Seite. Sobald das Layout festgelegt ist, werden die Pixel auf den Bildschirm gemalt.

Die Optimierung des kritischen Rendering-Pfads verbessert die Zeit bis zur ersten Darstellung. Das Verständnis und die Optimierung des kritischen Rendering-Pfads sind wichtig, um sicherzustellen, dass Neulayouts und Neumalen mit 60 Bildern pro Sekunde ausgeführt werden können, um eine performante Benutzerinteraktion sicherzustellen und [Jank](/de/docs/Glossary/Jank) zu vermeiden.

## Verständnis des CRP

Die Web-Performance umfasst die Serveranfragen und -antworten, das Laden, Scripting, Rendern, Layout und das Malen der Pixel auf dem Bildschirm.

Eine Anforderung für eine Webseite oder App beginnt mit einer HTTP-Anfrage. Der Server sendet eine Antwort, die das HTML enthält. Der Browser beginnt dann mit dem Parsen des HTML und konvertiert die empfangenen Bytes in den DOM-Baum. Der Browser initiiert Anfragen jedes Mal, wenn er Links zu externen Ressourcen findet, seien es Stylesheets, Skripte oder eingebettete Bildreferenzen. Einige Anfragen sind blockierend, was bedeutet, dass das Parsen des restlichen HTML gestoppt wird, bis das importierte Asset verarbeitet ist. Der Browser fährt fort, das HTML zu parsen, Anfragen zu stellen und den DOM zu erstellen, bis er zum Ende gelangt und das CSS-Objektmodell konstruiert. Mit dem vollständigen DOM und CSSOM erstellt der Browser den Renderbaum und berechnet die Stile für alle sichtbaren Inhalte. Nachdem der Renderbaum vollständig ist, erfolgt das Layout, das den Ort und die Größe aller Renderbaumelemente definiert. Nach Abschluss wird die Seite auf dem Bildschirm dargestellt oder "gemalt".

### Document Object Model

Die DOM-Konstruktion ist inkrementell. Die HTML-Antwort wird in Tokens umgewandelt, die dann in Knoten und schließlich in den DOM-Baum verwandelt werden. Ein einzelner DOM-Knoten beginnt mit einem startTag-Token und endet mit einem endTag-Token. Knoten enthalten alle relevanten Informationen über das HTML-Element. Die Informationen werden mit Tokens beschrieben. Knoten sind basierend auf der Token-Hierarchie zu einem DOM-Baum verbunden. Wenn zwischen einem Satz von startTag- und endTag-Tokens ein weiterer Satz von startTag- und endTag-Tokens kommt, haben Sie einen Knoten innerhalb eines Knotens, was die Hierarchie des DOM-Baums definiert.

Je mehr Knoten vorhanden sind, desto länger dauern die nachfolgenden Ereignisse im kritischen Rendering-Pfad. Messen Sie! Einige zusätzliche Knoten machen keinen großen Unterschied, aber bedenken Sie, dass das Hinzufügen vieler zusätzlicher Knoten die Leistung beeinflusst.

### CSS Object Model

Das DOM enthält den gesamten Inhalt der Seite. Das CSSOM enthält alle Informationen darüber, wie das DOM gestylt werden soll. CSSOM ist dem DOM ähnlich, jedoch anders. Während die DOM-Konstruktion inkrementell ist, ist das CSSOM dies nicht. CSS blockiert das Rendern: Der Browser blockiert das Seitenrendern, bis alle CSS empfangen und verarbeitet wurden. CSS blockiert das Rendern, weil Regeln überschrieben werden können, sodass der Inhalt erst gerendert werden kann, wenn das CSSOM vollständig ist.

CSS hat eigene Regeln zur Identifizierung gültiger Tokens. Denken Sie daran, dass das C in CSS für 'Cascade' steht. CSS-Regeln kaskadieren nach unten. Während der Parser Tokens in Knoten umwandelt, erben Nachfahrenknoten einige der Stile des Elternteils. Die inkrementellen Verarbeitungsfunktionen gelten nicht für CSS wie bei HTML, da nachfolgende Regeln frühere überschreiben können. Das CSS-Objektmodell wird erstellt, während das CSS geparst wird, kann jedoch nicht verwendet werden, um den Renderbaum zu erstellen, bis es vollständig geparst ist, weil Stile, die später überschrieben werden sollen, nicht auf den Bildschirm gerendert werden sollten.

In Bezug auf die Selektor-Performance sind weniger spezifische Selektoren schneller als spezifischere. Zum Beispiel ist `.foo {}` schneller als `.bar .foo {}`, weil der Browser bei der zweiten Variante im DOM nach oben gehen muss, um zu überprüfen, ob `.foo` einen Vorfahren `.bar` hat. Der spezifischere Tag erfordert mehr Arbeit vom Browser, aber dieser Nachteil lohnt sich wahrscheinlich nicht zur Optimierung.

Wenn Sie die Zeit messen, die das Parsen von CSS dauert, werden Sie erstaunt sein, wie schnell Browser wirklich sind. Die spezifischere Regel ist teurer, weil sie mehr Knoten im DOM-Baum durchlaufen muss - aber dieser zusätzliche Aufwand ist im Allgemeinen minimal. Messen Sie zuerst. Optimieren Sie bei Bedarf. Spezifität ist wahrscheinlich nicht Ihr geringster Aufwand. Wenn es um CSS geht, werden Optimierungsverbesserungen bei der Selektor-Performance nur in Mikrosekunden spürbar. Es gibt andere [Möglichkeiten, CSS zu optimieren](/de/docs/Learn/Performance/CSS), wie zum Beispiel Minifizierung und das Trennen von zurückgestellten CSS in nicht blockierende Anfragen mit Media Queries.

### Renderbaum

Der Renderbaum erfasst sowohl den Inhalt als auch die Stile: Die DOM- und CSSOM-Bäume werden in den Renderbaum kombiniert. Um den Renderbaum zu konstruieren, überprüft der Browser jeden Knoten, beginnend vom Stamm des DOM-Baums, und bestimmt, welche CSS-Regeln angehängt sind.

Der Renderbaum erfasst nur sichtbare Inhalte. Der Kopfabschnitt enthält (im Allgemeinen) keine sichtbaren Informationen und ist daher nicht im Renderbaum enthalten. Wenn auf einem Element `display: none;` gesetzt ist, sind weder dieses Element noch eines seiner Nachfahren im Renderbaum enthalten.

### Layout

Sobald der Renderbaum erstellt ist, ist das Layout möglich. Das Layout hängt von der Bildschirmgröße ab. Der Layout-Schritt bestimmt, wo und wie die Elemente auf der Seite positioniert werden, bestimmt die Breite und Höhe jedes Elements und wo sie sich zueinander befinden.

Was ist die Breite eines Elements? Blocklevel-Elemente haben definitionsgemäß eine Standardbreite von 100 % der Breite ihres übergeordneten Elements. Ein Element mit einer Breite von 50 % ist die Hälfte der Breite seines übergeordneten Elements. Sofern nicht anders definiert, hat der Body eine Breite von 100 %, was bedeutet, dass er 100 % der Breite des Sichtfensters beträgt. Diese Breite des Geräts wirkt sich auf das Layout aus.

Das `viewport`-Meta-Tag definiert die Breite des Layout-Sichtfensters und beeinflusst das Layout. Ohne es verwendet der Browser die Standard-Sichtfensterbreite, die bei standardmäßig im Vollbild befindlichen Browsern im Allgemeinen 960px beträgt. Auf standardmäßig im Vollbild befindlichen Browsern, wie dem Browser Ihres Telefons, wird mithilfe von `<meta name="viewport" content="width=device-width">` die Breite die Breite des Geräts anstelle der Standard-Sichtfensterbreite sein. Die Gerätebreite ändert sich, wenn ein Benutzer sein Telefon zwischen Quer- und Hochformat wechselt. Layout findet jedes Mal statt, wenn ein Gerät gedreht oder der Browser anderweitig in der Größe verändert wird.

Die Layout-Performance wird vom DOM beeinflusst — je mehr Knoten vorhanden sind, desto länger dauert das Layout. Layout kann zu einem Engpass werden, der zu Jank führt, wenn er während des Scrollens oder anderer Animationen erforderlich ist. Während eine Verzögerung von 20 ms beim Laden oder Ändern der Ausrichtung in Ordnung sein mag, wird sie bei Animation oder Scrollen zu Jank führen. Jedes Mal, wenn der Renderbaum modifiziert wird, z. B. durch hinzugefügte Knoten, geänderte Inhalte oder aktualisierte Box-Modell-Stile auf einem Knoten, erfolgt ein Layout.

Um die Häufigkeit und Dauer von Layout-Ereignissen zu reduzieren, fassen Sie Aktualisierungen zusammen und vermeiden Sie das Animieren von Box-Modell-Eigenschaften.

### Malen

Der letzte Schritt ist das Malen der Pixel auf dem Bildschirm. Sobald der Renderbaum erstellt und das Layout erfolgt ist, können die Pixel auf den Bildschirm gemalt werden. Beim Laden wird der gesamte Bildschirm gemalt. Danach werden nur die betroffenen Bereiche des Bildschirms neu gemalt, da Browser darauf optimiert sind, das minimale erforderliche Gebiet neu zu malen. Die Malzeit hängt davon ab, welche Art von Aktualisierungen auf den Renderbaum angewendet werden. Während das Malen ein sehr schneller Prozess ist und daher wahrscheinlich nicht der am meisten einflussreiche Bereich zur Verbesserung der Leistung ist, ist es wichtig, sowohl Layout- als auch Neumalmzeiten zu berücksichtigen, wenn man misst, wie lange ein Animationsrahmen dauern kann. Die auf jeden Knoten angewendeten Stile erhöhen die Malzeit, aber das Entfernen von Stil, das die Malzeit um 0,001 ms erhöht, bringt möglicherweise nicht den größten Nutzen für Ihre Optimierungsarbeit. Denken Sie daran, zuerst zu messen. Dann können Sie bestimmen, ob es eine Optimierungspriorität sein sollte.

## Optimierung für den CRP

Verbessern Sie die Ladegeschwindigkeit der Seite, indem Sie priorisieren, welche Ressourcen geladen werden, die Reihenfolge kontrollieren, in der sie geladen werden, und die Dateigrößen dieser Ressourcen reduzieren. Performance-Tipps umfassen 1) Minimierung der Anzahl kritischer Ressourcen, indem nicht-kritische Downloads aufgeschoben, sie als asynchron markiert oder ganz eliminiert werden, 2) Optimierung der Anzahl der benötigten Anfragen zusammen mit der Dateigröße jeder Anfrage, und 3) Optimierung der Reihenfolge, in der kritische Ressourcen geladen werden, indem der Download kritischer Assets priorisiert wird, und damit die Länge des kritischen Pfads verkürzt wird.
