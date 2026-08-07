---
title: Erste Schritte
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns direkt mit einem Beispiel beginnen. Werfen Sie einen Blick auf den folgenden Code.

```xml
<svg width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Öffnen Sie dann die Datei in einem Browser. Sie wird gerendert wie im folgenden Screenshot gezeigt. (Oder [sehen Sie es live](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund bestehend aus einem zentrierten grünen Kreis. Weißer Text zentriert innerhalb des Kreises ist SVG.](svgdemo1.png)

Der Rendering-Prozess umfasst Folgendes:

1. Wir beginnen mit dem {{SVGElement("svg")}}-Root-Element:
   - Eine Doctype-Deklaration, wie sie von (X)HTML bekannt ist, sollte weggelassen werden, da eine DTD-basierte SVG-Validierung mehr Probleme verursacht, als sie löst.
   - Vor SVG 2 sollten zur Identifizierung der SVG-Version für andere Arten der Validierung die Attribute `version` und `baseProfile` verwendet werden. Beide Attribute `version` und `baseProfile` sind in SVG 2 veraltet.
   - Als XML-Dialekt muss SVG immer die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

2. Der Hintergrund wird durch Zeichnen eines Rechtecks {{SVGElement("rect")}} gesetzt, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird über dem Zentrum des roten Rechtecks gezeichnet (Zentrum des Kreises 150px nach rechts und 100px nach unten vom oberen linken Eckpunkt versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens wird mit Weiß gefüllt. Der Text wird positioniert, indem ein Ankerpunkt festgelegt wird, an dem sich die Mittellinie befinden soll: In diesem Fall soll die Mittellinie dem Zentrum des grünen Kreises entsprechen. Feineinstellungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um sicherzustellen, dass das Endergebnis ästhetisch ansprechend ist.

## Grundlegende Eigenschaften von SVG-Dateien

- Das erste, was auffällt, ist die Reihenfolge beim Rendern der Elemente. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _auf vorherigen_ Elementen gerendert werden. Je weiter unten ein Element steht, desto sichtbarer wird es sein.
- SVG-Dateien im Web können direkt im Browser angezeigt oder auf verschiedene Arten in HTML-Dateien eingebettet werden:
  - Wenn das HTML XHTML ist und als Typ `application/xhtml+xml` geliefert wird, kann SVG direkt in der XML-Quelle eingebettet werden.
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

  - Schließlich kann SVG dynamisch mit JavaScript erstellt und in das HTML-DOM eingefügt werden.

- Wie SVG Größen und Einheiten handhabt, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind Textdateien, die SVG-Markup enthalten. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svg" (alles in Kleinbuchstaben).

Aufgrund der potenziell massiven Größe, die SVG-Dateien bei bestimmten Anwendungen (z. B. geografische Anwendungen) erreichen können, erlaubt die SVG-Spezifikation auch für gzip-komprimierte SVG-Dateien. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svgz" (alles in Kleinbuchstaben). Leider ist es sehr problematisch, gzip-komprimierte SVG-Dateien zuverlässig in allen SVG-fähigen Benutzeragenten zum Laufen zu bringen, wenn sie von einem Microsoft-IIS-Server bereitgestellt werden, und Firefox kann gzip-komprimierte SVG nicht vom lokalen Computer laden. Vermeiden Sie gzip-komprimierte SVG, es sei denn, Sie veröffentlichen sie auf einem Webserver, von dem Sie wissen, dass er sie korrekt bereitstellt (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Jetzt, da Sie eine Vorstellung davon haben, wie Sie grundlegende SVG-Dateien erstellen, besteht der nächste Schritt darin, sie auf einen Webserver hochzuladen. An dieser Stelle gibt es jedoch ein paar Stolpersteine. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

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

Sie können überprüfen, ob Ihr Server die korrekten HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Netzwerk-Monitor-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) oder eine Website wie [websniffer.com](https://websniffer.com/) verwenden. Übermitteln Sie die URL einer Ihrer SVG-Dateien und schauen Sie sich die HTTP-Antwort-Header an. Wenn Sie feststellen, dass Ihr Server die nicht mit den oben angegebenen Werten übereinstimmenden Header sendet, sollten Sie sich an Ihren Webhost wenden. Wenn Sie Schwierigkeiten haben, sie davon zu überzeugen, ihre Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, dies selbst zu tun. Siehe die [Server-Konfigurationsseite](https://www.w3.org/services/svg-server/) auf w3.org für eine Reihe von Lösungen.

Eine fehlerhafte Serverkonfiguration ist ein sehr häufiger Grund, warum SVG nicht geladen werden kann, also stellen Sie sicher, dass Sie Ihre überprüfen. Wenn Ihr Server nicht konfiguriert ist, die korrekten Header mit den von ihm bereitgestellten SVG-Dateien zu senden, zeigt Firefox die Markup-Dateien höchstwahrscheinlich als Text oder kodierten Müll an oder fordert den Betrachter sogar auf, eine Anwendung zum Öffnen auszuwählen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
