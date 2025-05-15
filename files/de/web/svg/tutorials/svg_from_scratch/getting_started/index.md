---
title: Erste Schritte
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns direkt mit einem Beispiel beginnen. Werfen Sie einen Blick auf den folgenden Code.

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Dann öffnen Sie die Datei in einem Browser. Sie wird wie im folgenden Screenshot dargestellt. (Oder [sehen Sie es live](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund, bestehend aus einem zentrierten grünen Kreis. Weißer Text im Kreis zentriert ist SVG.](svgdemo1.png)

Der Renderprozess umfasst Folgendes:

1. Wir beginnen mit dem {{SVGElement("svg")}}-Wurzelelement:

   - Eine Doctype-Deklaration, wie sie von (X)HTML bekannt ist, sollte weggelassen werden, da die DTD-basierte SVG-Validierung mehr Probleme verursacht als sie löst.
   - Vor SVG 2 sollten zur Identifizierung der SVG-Version für andere Validierungsarten die Attribute `version` und `baseProfile` stets verwendet werden. Beide Attribute `version` und `baseProfile` sind in SVG 2 veraltet.
   - Als XML-Dialekt muss SVG immer die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

2. Der Hintergrund wird rot, indem ein Rechteck {{SVGElement("rect")}} gezeichnet wird, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird auf dem Zentrum des roten Rechtecks gezeichnet (Kreiszentrum 150px nach rechts und 100px nach unten von der oberen linken Ecke versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens wird mit Weiß gefüllt. Der Text wird positioniert, indem ein Anker dort gesetzt wird, wo wir den Mittelpunkt haben möchten: in diesem Fall soll der Mittelpunkt dem Zentrum des grünen Kreises entsprechen. Feinanpassungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um das Endergebnis ästhetisch ansprechend zu gestalten.

## Grundlegende Eigenschaften von SVG-Dateien

- Das erste wichtige Merkmal ist die Reihenfolge der Renderelemente. Die allgemein gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _über vorherigen_ Elementen gerendert werden. Je weiter unten sich ein Element befindet, desto sichtbarer wird es.
- SVG-Dateien können im Web direkt im Browser angezeigt oder über mehrere Methoden in HTML-Dateien eingebettet werden:

  - Wenn das HTML XHTML ist und als Typ `application/xhtml+xml` geliefert wird, kann das SVG direkt in die XML-Quelle eingebettet werden.
  - Das SVG kann auch direkt in HTML eingebettet werden.
  - Ein `img`-Element kann verwendet werden.
  - Die SVG-Datei kann mit einem `object`-Element referenziert werden:

    ```html
    <object data="image.svg" type="image/svg+xml"></object>
    ```

  - Ebenso kann ein `iframe`-Element verwendet werden:

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - Schließlich kann SVG dynamisch mit JavaScript erstellt und in den HTML-DOM eingefügt werden.

- Wie SVG mit Größen und Einheiten umgeht, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Positions) erklärt.

## SVG-Dateiformate

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind Textdateien, die SVG-Markup enthalten. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svg" (alles in Kleinbuchstaben).

Aufgrund der potenziell großen Größe, die SVG-Dateien erreichen können, wenn sie für einige Anwendungen (z. B. geografische Anwendungen) verwendet werden, erlaubt die SVG-Spezifikation auch gzip-komprimierte SVG-Dateien. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svgz" (alles in Kleinbuchstaben). Leider ist es sehr problematisch, gzip-komprimierte SVG-Dateien zuverlässig über alle SVG-fähigen Benutzeragenten hinweg zum Laufen zu bringen, wenn sie von einem Microsoft IIS-Server bereitgestellt werden, und Firefox kann gzip-komprimiertes SVG nicht vom lokalen Computer laden. Vermeiden Sie gzip-komprimiertes SVG, außer wenn Sie auf einem Webserver veröffentlichen, von dem Sie wissen, dass er es korrekt ausliefert (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Nachdem Sie nun eine Vorstellung davon haben, wie man grundlegende SVG-Dateien erstellt, ist der nächste Schritt, sie auf einen Webserver hochzuladen. An diesem Punkt gibt es jedoch einige Fallstricke. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

```http
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

Für gzip-komprimierte SVG-Dateien sollten Server die HTTP-Header senden:

```http
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

Sie können überprüfen, ob Ihr Server die korrekten HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Network Monitor Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) verwenden oder eine Seite wie [websniffer.com](https://websniffer.com/) nutzen. Reichen Sie die URL einer Ihrer SVG-Dateien ein und schauen Sie sich die HTTP-Antwort-Header an. Wenn Sie feststellen, dass Ihr Server die Header nicht mit den oben angegebenen Werten sendet, sollten Sie Ihren Webhost kontaktieren. Wenn Sie Probleme haben, ihn davon zu überzeugen, die Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, dies selbst zu tun. Siehe die [Serverkonfigurationsseite](https://www.w3.org/services/svg-server/) auf w3.org für eine Reihe von Lösungen.

Fehlkonfigurationen von Servern sind ein sehr häufiger Grund dafür, dass SVG nicht geladen wird, also stellen Sie sicher, dass Sie Ihre prüfen. Wenn Ihr Server nicht dafür konfiguriert ist, die richtigen Header mit den von ihm ausgelieferten SVG-Dateien zu senden, wird Firefox höchstwahrscheinlich den Markup der Dateien als Text oder kodierten Müll anzeigen oder den Betrachter auffordern, eine Anwendung zum Öffnen auszuwählen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
