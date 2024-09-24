---
title: Kritischer Renderpfad
slug: Web/Performance/Critical_rendering_path
l10n:
  sourceCommit: b12b0159b3f27459ed82b9ac8e3711fec4912e19
---

{{QuickLinksWithSubPages("Web/Performance")}}

Der kritische Renderpfad ist die Abfolge von Schritten, die der Browser durchläuft, um HTML, CSS und JavaScript in Pixel auf dem Bildschirm umzuwandeln. Die Optimierung des kritischen Renderpfads verbessert die Renderleistung. Der kritische Renderpfad umfasst das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM), das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM), den Rendertree und das Layout.

Das Document Object Model wird während der HTML-Analyse erstellt. Das HTML kann JavaScript anfordern, welches wiederum das DOM ändern kann. Das HTML enthält oder fordert Styles an, die wiederum das CSS Object Model aufbauen. Die Browser-Engine kombiniert die beiden, um den Rendertree zu erstellen. Das Layout bestimmt die Größe und den Ort von allem auf der Seite. Sobald das Layout festgelegt ist, werden die Pixel auf den Bildschirm gezeichnet.

Die Optimierung des kritischen Renderpfads verbessert die Zeit bis zur ersten Darstellung. Das Verständnis und die Optimierung des kritischen Renderpfads sind wichtig, um sicherzustellen, dass Umflüsse und Neuzeichnungen mit 60 Bildern pro Sekunde erfolgen können, um performante Benutzerinteraktionen zu gewährleisten und [Ruckeln](/de/docs/Glossary/Jank) zu vermeiden.

## Verständnis des CRP

Die Webleistung umfasst serverseitige Anfragen und Antworten, das Laden, Scripting, Rendern, Layout und das Zeichnen der Pixel auf den Bildschirm.

Eine Anfrage für eine Webseite oder App beginnt mit einer HTTP-Anfrage. Der Server sendet eine Antwort mit dem HTML. Der Browser beginnt dann mit der Analyse des HTML und wandelt die empfangenen Bytes in den DOM-Baum um. Jedes Mal, wenn der Browser Links zu externen Ressourcen findet, sei es Stylesheets, Skripts oder eingebettete Bildreferenzen, initiiert er Anfragen. Einige Anfragen blockieren, was bedeutet, dass die Analyse des restlichen HTML angehalten wird, bis das importierte Asset verarbeitet wurde. Der Browser fährt mit der Analyse des HTML fort, stellt Anfragen und baut das DOM auf, bis er zum Ende gelangt, an dem er das CSS Object Model konstruiert. Sobald DOM und CSSOM abgeschlossen sind, erstellt der Browser den Rendertree und berechnet die Styles für alle sichtbaren Inhalte. Nach Abschluss des Rendertrees erfolgt das Layout, das den Ort und die Größe aller Elemente des Rendertrees definiert. Sobald dies abgeschlossen ist, wird die Seite auf dem Bildschirm angezeigt oder "gezeichnet".

### Document Object Model

Der DOM-Aufbau erfolgt inkrementell. Die HTML-Antwort wird in Tokens umgewandelt, die dann in Knoten umgewandelt werden, die schließlich zum DOM-Baum werden. Ein einzelner DOM-Knoten beginnt mit einem startTag-Token und endet mit einem endTag-Token. Knoten enthalten alle relevanten Informationen zum HTML-Element. Die Informationen werden mithilfe von Tokens beschrieben. Knoten werden basierend auf der Token-Hierarchie zu einem DOM-Baum verbunden. Wenn ein weiterer Satz von startTag- und endTag-Tokens zwischen einem Satz von startTag und endTags kommt, haben Sie einen Knoten innerhalb eines Knotens, was die Hierarchie des DOM-Baums definiert.

Je größer die Anzahl der Knoten, desto länger dauern die folgenden Ereignisse im kritischen Renderpfad. Messen Sie! Ein paar zusätzliche Knoten machen keinen großen Unterschied, aber beachten Sie, dass das Hinzufügen vieler zusätzlicher Knoten die Leistung beeinträchtigt.

### CSS Object Model

Das DOM enthält den gesamten Inhalt der Seite. Das CSSOM enthält alle Informationen darüber, wie das DOM gestylt werden soll. CSSOM ist dem DOM ähnlich, aber unterschiedlich. Während der DOM-Aufbau inkrementell ist, ist das CSSOM es nicht. CSS ist render-blockierend: Der Browser blockiert das Rendern der Seite, bis er das gesamte CSS empfangen und verarbeitet hat. CSS ist render-blockierend, weil Regeln überschrieben werden können, daher kann der Inhalt nicht gerendert werden, bis das CSSOM vollständig ist.

CSS hat seine eigenen Regeln zur Identifizierung gültiger Tokens. Denken Sie daran, dass das “C” in CSS für "Cascading" steht. CSS-Regeln kaskadieren nach unten. Während der Parser Tokens in Knoten umwandelt, erben Nachkommen-Knoten einige der Styles des Elternknotens. Die inkrementellen Verarbeitungsfunktionen gelten nicht für CSS wie bei HTML, da nachfolgende Regeln vorherige überschreiben können. Das CSS Object Model wird erstellt, während das CSS analysiert wird, kann aber nicht zum Aufbau des Rendertrees verwendet werden, bis es vollständig analysiert ist, da Styles, die durch spätere Analysen überschrieben werden, nicht auf den Bildschirm gerendert werden sollten.

In Bezug auf die Selektorenleistung sind weniger spezifische Selektoren schneller als spezifischere. Zum Beispiel ist `.foo {}` schneller als `.bar .foo {}`, weil der Browser im zweiten Szenario bei `.foo` nach oben zum DOM gehen muss, um zu überprüfen, ob `.foo` einen Vorfahren `.bar` hat. Der spezifischere Tag erfordert mehr Arbeit vom Browser, aber diese Strafe lohnt sich wahrscheinlich nicht, um darum zu optimieren.

Wenn Sie die Zeit messen, die das Parsen von CSS benötigt, werden Sie erstaunt sein, wie schnell Browser tatsächlich sind. Die spezifischere Regel ist teurer, weil mehr Knoten im DOM-Baum durchlaufen werden müssen - aber dieser zusätzliche Aufwand ist in der Regel minimal. Messen Sie zuerst. Optimieren Sie nach Bedarf. Spezifität ist wahrscheinlich nicht Ihr niedrig hängendes Obst. Wenn es um CSS geht, werden Verbesserungen der Selektorenleistung nur in Mikrosekunden erfolgen. Es gibt andere [Möglichkeiten zur CSS-Optimierung](/de/docs/Learn/Performance/CSS), wie Minifizierung und das Trennen von verzögertem CSS in nicht-blockierende Anfragen durch die Verwendung von Media Queries.

### Rendertree

Der Rendertree erfasst sowohl den Inhalt als auch die Styles: Die DOM- und CSSOM-Bäume werden in den Rendertree kombiniert. Um den Rendertree zu konstruieren, überprüft der Browser jeden Knoten, beginnend beim Wurzelknoten des DOM-Baums, und bestimmt, welche CSS-Regeln angehängt sind.

Der Rendertree erfasst nur sichtbaren Inhalt. Der Kopfbereich enthält in der Regel keine sichtbaren Informationen und ist daher nicht im Rendertree enthalten. Wenn auf einem Element ein `display: none;` gesetzt ist, sind weder es noch alle seine Nachkommen im Rendertree.

### Layout

Sobald der Rendertree aufgebaut ist, wird Layout möglich. Das Layout ist von der Größe des Bildschirms abhängig. Der Layout-Schritt bestimmt, wo und wie die Elemente auf der Seite positioniert sind, bestimmt die Breite und Höhe jedes Elements und wo sie zueinander stehen.

Wie groß ist ein Element? Block-Level-Elemente haben definitionsgemäß eine Standardbreite von 100 % der Breite ihres übergeordneten Elements. Ein Element mit einer Breite von 50 % hat die Hälfte der Breite seines übergeordneten Elements. Sofern nicht anders definiert, hat der Body eine Breite von 100 %, was bedeutet, dass er 100 % der Breite des Ansichtsfensters hat. Diese Breite des Geräts beeinflusst das Layout.

Das Viewport-Meta-Tag definiert die Breite des Layout-Ansichtsfensters und beeinflusst das Layout. Ohne es verwendet der Browser die Standardviewport-Breite, die bei von Haus aus vollbildschirmigen Browsern in der Regel 960px beträgt. Bei von Haus aus vollbildschirmigen Browsern, wie dem Browser Ihres Telefons, setzt `<meta name="viewport" content="width=device-width">` die Breite auf die Breite des Geräts statt der Standardviewport-Breite. Die device-width ändert sich, wenn ein Benutzer sein Telefon zwischen Quer- und Hochformat dreht. Layout geschieht jedes Mal, wenn ein Gerät gedreht oder der Browser anderweitig neu justiert wird.

Die Layoutleistung wird durch das DOM beeinflusst — je größer die Anzahl der Knoten, desto länger dauert das Layout. Layout kann zu einem Engpass werden und zu Ruckeln führen, wenn es während des Scrollens oder anderer Animationen erforderlich ist. Während eine Verzögerung von 20 ms beim Laden oder bei einer Ausrichtungsänderung in Ordnung sein kann, wird sie bei Animationen oder Scrollen zu Ruckeln führen. Jedes Mal, wenn der Rendertree geändert wird, wie durch das Hinzufügen von Knoten, geändertem Inhalt oder aktualisierten Box-Modell-Styles an einem Knoten, erfolgt ein Layout.

Um die Häufigkeit und Dauer von Layout-Ereignissen zu reduzieren, sollten Sie Updates bündeln und vermeiden, Box-Modell-Eigenschaften zu animieren.

### Zeichnen

Der letzte Schritt ist das Zeichnen der Pixel auf den Bildschirm. Sobald der Rendertree erstellt und Layout stattgefunden hat, können die Pixel auf den Bildschirm gezeichnet werden. Beim Laden wird der gesamte Bildschirm gezeichnet. Danach werden nur die betroffenen Bereiche des Bildschirms neu gezeichnet, da Browser optimiert sind, den minimal erforderlichen Bereich neu zu zeichnen. Die Zeichnungszeit hängt davon ab, welche Art von Updates auf den Rendertree angewendet werden. Während das Zeichnen ein sehr schneller Prozess ist und daher wahrscheinlich nicht der wirkungsvollste Ort ist, um die Leistung zu verbessern, ist es wichtig, sowohl Layout- als auch Neuzeichnungszeiten zu ermöglichen, wenn gemessen wird, wie lange ein Animationsrahmen dauern kann. Die auf jeden Knoten angewendeten Styles erhöhen die Zeichenzeit, aber das Entfernen eines Styles, der das Zeichnen um 0,001ms erhöht, gibt Ihnen möglicherweise nicht den größten Nutzen für Ihre Optimierungsanstrengungen. Denken Sie daran, zuerst zu messen. Dann können Sie bestimmen, ob es eine Optimierungspriorität sein sollte.

## Optimierung für den CRP

Verbessern Sie die Seitengeschwindigkeit, indem Sie priorisieren, welche Ressourcen geladen werden, die Reihenfolge der Ladung kontrollieren und die Dateigrößen dieser Ressourcen reduzieren. Zu den Leistungstipps gehört 1) die Minimierung der Anzahl kritischer Ressourcen, indem nicht-kritische Ressourcen verzögert heruntergeladen oder als asynchron markiert oder vollständig eliminiert werden, 2) Optimierung der Anzahl der erforderlichen Anfragen sowie der Dateigröße jeder Anfrage, und 3) Optimierung der Reihenfolge, in der kritische Ressourcen geladen werden, durch die Priorisierung des Herunterladens kritischer Assets und Verkürzung der Länge des kritischen Pfads.
