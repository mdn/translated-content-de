---
title: Kritischer Rendering-Pfad
slug: Web/Performance/Critical_rendering_path
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("Web/Performance")}}

Der kritische Rendering-Pfad ist die Abfolge von Schritten, die der Browser durchläuft, um HTML, CSS und JavaScript in Pixel auf dem Bildschirm zu konvertieren. Die Optimierung des kritischen Rendering-Pfades verbessert die Renderleistung. Der kritische Rendering-Pfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Renderbaum und das Layout.

Das Document Object Model wird erstellt, während das HTML analysiert wird. Das HTML kann JavaScript anfordern, das wiederum das DOM ändern kann. Das HTML enthält oder fordert Stile an, die wiederum das CSS-Objektmodell aufbauen. Die Browser-Engine kombiniert die beiden, um den Renderbaum zu erstellen. Das Layout bestimmt die Größe und Position aller Elemente auf der Seite. Sobald das Layout festgelegt ist, werden die Pixel auf den Bildschirm gemalt.

Die Optimierung des kritischen Rendering-Pfades verbessert die Zeit bis zur ersten Darstellung. Das Verstehen und Optimieren des kritischen Rendering-Pfades ist wichtig, um sicherzustellen, dass Neudarstellungen und Neu-Paintings mit 60 Bildern pro Sekunde erfolgen können, um performante Benutzerinteraktionen zu gewährleisten und {{Glossary("Jank", "Jank")}} zu vermeiden.

## Verständnis des CRP

Web-Performance umfasst die Anfragen und Antworten des Servers, das Laden, das Skripting, das Rendering, das Layout und das Malen der Pixel auf dem Bildschirm.

Eine Anfrage für eine Webseite oder App beginnt mit einer HTTP-Anfrage. Der Server sendet eine Antwort, die das HTML enthält. Der Browser beginnt dann mit dem Parsen des HTML, indem er die empfangenen Bytes in den DOM-Baum umwandelt. Jedes Mal, wenn der Browser Links zu externen Ressourcen findet, seien es Stylesheets, Skripte oder eingebettete Bildreferenzen, initiiert er Anfragen. Einige Anfragen sind blockierend, was bedeutet, dass das Parsen des restlichen HTML gestoppt wird, bis das importierte Asset verarbeitet ist. Der Browser setzt das Parsen des HTML fort, Anfragen zu stellen und den DOM aufzubauen, bis er das Ende erreicht hat, an dem er das CSS Object Model konstruiert. Mit dem vollständigen DOM und CSSOM erstellt der Browser den Renderbaum und berechnet die Stile für alle sichtbaren Inhalte. Nachdem der Renderbaum abgeschlossen ist, erfolgt das Layout, das die Position und Größe aller Elemente des Renderbaums definiert. Sobald dies abgeschlossen ist, wird die Seite gerendert oder auf den Bildschirm "gemalt".

### Document Object Model

Der Aufbau des DOM ist inkrementell. Die HTML-Antwort wird zu Tokens, die zu Knoten werden, aus denen der DOM-Baum entsteht. Ein einzelner DOM-Knoten beginnt mit einem StartTag-Token und endet mit einem EndTag-Token. Knoten enthalten alle relevanten Informationen über das HTML-Element. Die Informationen werden mit Hilfe von Tokens beschrieben. Knoten sind auf Basis der Token-Hierarchie zu einem DOM-Baum verbunden. Wenn ein weiteres Set von StartTag- und EndTag-Tokens zwischen einem Set von StartTag- und EndTags kommt, haben Sie einen Knoten innerhalb eines Knotens, was die Hierarchie des DOM-Baums definiert.

Je mehr Knoten vorhanden sind, desto länger dauern die folgenden Ereignisse im kritischen Rendering-Pfad. Messen Sie es! Ein paar zusätzliche Knoten machen keinen großen Unterschied, aber denken Sie daran, dass das Hinzufügen vieler zusätzlicher Knoten die Leistung beeinträchtigen wird.

### CSS Object Model

Das DOM enthält alle Inhalte der Seite. Das CSSOM enthält alle Informationen darüber, wie das DOM gestylt wird. CSSOM ist dem DOM ähnlich, aber unterschiedlich. Während der Aufbau des DOM inkrementell erfolgt, ist das CSSOM dies nicht. CSS ist render-blockierend: Der Browser blockiert das Rendern der Seite, bis er das gesamte CSS erhalten und verarbeitet hat. CSS ist render-blockierend, weil Regeln überschrieben werden können, so dass der Inhalt nicht gerendert werden kann, bis das CSSOM vollständig ist.

CSS hat seine eigenen Regeln für die Identifizierung gültiger Tokens. Denken Sie daran, das C in CSS steht für 'Cascade'. CSS-Regeln kaskadieren nach unten. Wenn der Parser Tokens zu Knoten umwandelt, werden Nachkommenknoten einige der Stile des Elternknotens erben. Die inkrementellen Verarbeitungseigenschaften gelten nicht für CSS, wie sie es für HTML tun, da nachfolgende Regeln vorherige überschreiben können. Das CSS-Objektmodell wird aufgebaut, während das CSS geparst wird, kann aber nicht verwendet werden, um den Render-Baum zu erstellen, bis es vollständig geparst ist, da Stile, die mit späterem Parsen überschrieben werden sollen, nicht auf den Bildschirm gerendert werden sollten.

In Bezug auf die Selektorleistung sind weniger spezifische Selektoren schneller als spezifischere. Zum Beispiel ist `.foo {}` schneller als `.bar .foo {}`, weil der Browser, wenn er `.foo` im zweiten Szenario findet, den DOM nach oben durchlaufen muss, um zu prüfen, ob `.foo` einen Vorfahren `.bar` hat. Der spezifischere Tag erfordert mehr Arbeit vom Browser, aber dieser Nachteil ist wahrscheinlich nicht optimierungswürdig.

Wenn Sie die Zeit messen, die das Parsen von CSS dauert, werden Sie erstaunt sein, wie schnell Browser wirklich sind. Die spezifischere Regel ist teurer, weil sie mehr Knoten im DOM-Baum durchlaufen muss - aber dieser zusätzliche Aufwand ist in der Regel minimal. Messen Sie zuerst. Optimieren Sie bei Bedarf. Spezifität ist wahrscheinlich nicht Ihre am leichtesten zu lösende Herausforderung. Bei CSS werden Leistungsoptimierungen von Selektoren nur in Mikrosekunden erfolgen. Es gibt andere [Möglichkeiten zur Optimierung von CSS](/de/docs/Learn_web_development/Extensions/Performance/CSS), wie Minifizierung und das Trennen verzögerter CSS in nicht blockierende Anfragen mit Hilfe von Media Queries.

### Renderbaum

Der Renderbaum erfasst sowohl den Inhalt als auch die Stile: Die DOM- und CSSOM-Bäume werden in den Renderbaum zusammengeführt. Um den Renderbaum zu erstellen, überprüft der Browser jeden Knoten, beginnend mit der Wurzel des DOM-Baums, und bestimmt, welche CSS-Regeln angewendet werden.

Der Renderbaum erfasst nur sichtbare Inhalte. Der head-Bereich enthält (im Allgemeinen) keine sichtbaren Informationen und wird daher nicht im Renderbaum enthalten. Wenn ein `display: none;` auf ein Element angewendet wird, wird weder dieses Element noch eines seiner Nachkommen im Renderbaum vorhanden sein.

### Layout

Sobald der Renderbaum erstellt ist, ist ein Layout möglich. Das Layout hängt von der Größe des Bildschirms ab. Der Layoutschritt bestimmt, wo und wie die Elemente auf der Seite positioniert werden, wobei die Breite und Höhe jedes Elements sowie deren relative Position zueinander definiert werden.

Was ist die Breite eines Elements? Block-Level-Elemente haben per Definition eine Standardbreite von 100% der Breite ihres Elternteils. Ein Element mit einer Breite von 50% wird die Hälfte der Breite seines Elternteils haben. Sofern nicht anders definiert, hat der Body eine Breite von 100%, was bedeutet, dass es 100% der Breite des Viewports einnehmen wird. Diese Breite des Geräts beeinflusst das Layout.

Das viewport-Meta-Tag definiert die Breite des Layout-Viewports und beeinflusst das Layout. Ohne ihn verwendet der Browser die Standard-Viewport-Breite, die bei standardmäßig vollbildigen Browsern in der Regel 960px beträgt. Bei standardmäßig vollbildigen Browsern, wie dem Browser Ihres Telefons, wird durch das Setzen von `<meta name="viewport" content="width=device-width">` die Breite die des Geräts anstelle der Standard-Viewport-Breite sein. Die device-width ändert sich, wenn ein Benutzer sein Telefon zwischen Quer- und Hochformat dreht. Das Layout erfolgt jedes Mal, wenn ein Gerät gedreht oder der Browser anderweitig geändert wird.

Die Layout-Leistung wird durch das DOM beeinflusst – je mehr Knoten vorhanden sind, desto länger dauert das Layout. Das Layout kann zu einem Engpass werden, der zu Ruckeln führt, wenn es während des Scrollens oder anderer Animationen erforderlich ist. Während eine Verzögerung von 20 ms beim Laden oder bei der Änderung der Ausrichtung in Ordnung sein kann, wird sie bei Animationen oder Scrollen zu Ruckeln führen. Jedes Mal, wenn der Renderbaum verändert wird, z. B. durch Hinzufügen von Knoten, Ändern von Inhalten oder Aktualisieren von Box-Modell-Stilen an einem Knoten, erfolgt das Layout.

Um die Häufigkeit und Dauer von Layoutevents zu verringern, bündeln Sie Aktualisierungen und vermeiden Sie das Animieren von Box-Modell-Eigenschaften.

### Paint

Der letzte Schritt ist das Malen der Pixel auf den Bildschirm. Sobald der Renderbaum erstellt und das Layout erfolgt ist, können die Pixel auf den Bildschirm gemalt werden. Beim Laden wird der gesamte Bildschirm bemalt. Danach werden nur die betroffenen Bereiche des Bildschirms neu bemalt, da Browser darauf optimiert sind, den minimal erforderlichen Bereich neu zu bemalen. Die Zeit des Malens hängt davon ab, welche Art von Aktualisierungen am Renderbaum vorgenommen werden. Während das Malen ein sehr schneller Prozess ist und daher wahrscheinlich nicht die einflussreichste Stelle zur Verbesserung der Leistung darstellt, ist es wichtig zu bedenken, sowohl die Layout- als auch die Neumalkzeiten zu berücksichtigen, wenn Sie messen, wie lange ein Animationsframe dauern kann. Die auf jeden Knoten angewendeten Stile erhöhen die Malzeit, aber das Entfernen eines Stils, der das Malen um 0,001 ms erhöht, könnte Ihnen nicht den größten Nutzen für Ihre Optimierungsbemühungen bringen. Denken Sie daran, zuerst zu messen. Dann können Sie bestimmen, ob es eine Optimierungspriorität sein sollte.

## Optimierung für CRP

Verbessern Sie die Ladegeschwindigkeit der Seite, indem Sie priorisieren, welche Ressourcen geladen werden, die Reihenfolge ihrer Ladevorgänge kontrollieren und die Dateigrößen dieser Ressourcen reduzieren. Leistungstipps umfassen 1) Minimieren der Anzahl kritischer Ressourcen, indem nicht-kritische Downloads verzögert, als async markiert oder ganz eliminiert werden, 2) Optimierung der Anzahl der erforderlichen Anfragen zusammen mit der Dateigröße jeder Anfrage und 3) Optimierung der Reihenfolge, in der kritische Ressourcen geladen werden, indem die kritischen Assets priorisiert heruntergeladen werden, wodurch die Länge des kritischen Pfades verkürzt wird.
