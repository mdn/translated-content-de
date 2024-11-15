---
title: Erste Schritte
slug: Web/SVG/Tutorial/Getting_Started
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns direkt mit einem Beispiel beginnen. Sehen Sie sich den folgenden Code an.

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Öffnen Sie die Datei dann in einem Browser. Sie wird wie im folgenden Screenshot dargestellt. (Firefox-Nutzer: Klicken Sie [hier](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund, der aus einem zentrierten grünen Kreis besteht. Weiße Schrift zentriert innerhalb des Kreises ist SVG.](svgdemo1.png)

Der Renderprozess umfasst die folgenden Schritte:

1. Wir beginnen mit dem {{SVGElement("svg")}}-Root-Element:

   - Eine Doctype-Deklaration, wie sie von (X)HTML bekannt ist, sollte weggelassen werden, da die DTD-basierte SVG-Validierung mehr Probleme verursacht als sie löst.
   - Vor SVG 2 sollten anstelle dessen die Attribute `version` und `baseProfile` immer verwendet werden, um die Version des SVG für andere Typen der Validierung zu identifizieren. Beide Attribute sind in SVG 2 veraltet.
   - Als XML-Dialekt muss SVG die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Namespaces_Crash_Course).

2. Der Hintergrund wird auf Rot gesetzt, indem ein Rechteck {{SVGElement("rect")}} gezeichnet wird, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird oberhalb der Mitte des roten Rechtecks gezeichnet (Mittelpunkt des Kreises 150px nach rechts und 100px nach unten von der oberen linken Ecke versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens wird mit Weiß gefüllt. Der Text wird positioniert, indem ein Anker gesetzt wird, wo wir den Mittelpunkt haben möchten: in diesem Fall sollte der Mittelpunkt mit dem Zentrum des grünen Kreises übereinstimmen. Feine Anpassungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um sicherzustellen, dass das Endergebnis ästhetisch ansprechend ist.

## Grundlegende Eigenschaften von SVG-Dateien

- Das Erste, was man beachten sollte, ist die Reihenfolge der zu rendernden Elemente. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _über vorherige_ Elemente gerendert werden. Je weiter unten sich ein Element befindet, desto sichtbarer wird es.
- SVG-Dateien im Web können direkt im Browser angezeigt oder über verschiedene Methoden in HTML-Dateien eingebettet werden:

  - Wenn das HTML als XHTML vorliegt und als Typ `application/xhtml+xml` ausgeliefert wird, kann das SVG direkt im XML-Quellcode eingebettet werden.
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

- Wie SVG Größen und Einheiten handhabt, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorial/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind Textdateien, die SVG-Markup enthalten. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svg" (alles kleingeschrieben).

Aufgrund der potenziell enormen Größe, die SVG-Dateien bei bestimmten Anwendungen (z. B. geografischen Anwendungen) erreichen können, erlaubt die SVG-Spezifikation auch gzip-komprimierte SVG-Dateien. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svgz" (alles kleingeschrieben). Leider ist es sehr problematisch, gzip-komprimierte SVG-Dateien zuverlässig über alle SVG-fähigen Benutzeragenten hinweg zum Laufen zu bringen, wenn sie von einem Microsoft IIS-Server bereitgestellt werden, und Firefox kann gzip-komprimierte SVG von einem lokalen Computer nicht laden. Vermeiden Sie gzip-komprimierte SVG, außer wenn Sie sie auf einen Webserver veröffentlichen, von dem Sie wissen, dass er sie korrekt bereitstellt (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Jetzt, wo Sie eine Vorstellung davon haben, wie Sie grundlegende SVG-Dateien erstellen, besteht der nächste Schritt darin, sie auf einen Webserver hochzuladen. Dabei gibt es jedoch einige Stolpersteine. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

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

Sie können überprüfen, ob Ihr Server die richtigen HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Netzwerküberwachungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) oder eine Website wie [websniffer.com](https://websniffer.com/) verwenden. Übermitteln Sie die URL einer Ihrer SVG-Dateien und sehen Sie sich die HTTP-Antwort-Header an. Wenn Sie feststellen, dass Ihr Server die Header nicht mit den oben angegebenen Werten sendet, sollten Sie sich an Ihren Webhost wenden. Wenn Sie Probleme haben, sie dazu zu bringen, ihre Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, dies selbst zu tun. Weitere Lösungen finden Sie auf der [Server-Konfigurationsseite](https://www.w3.org/services/svg-server/) auf w3.org.

Server-Fehlkonfiguration ist ein sehr häufiger Grund dafür, dass SVG nicht geladen werden kann. Stellen Sie also sicher, dass Sie Ihren überprüfen. Wenn Ihr Server nicht so konfiguriert ist, dass er die richtigen Header mit den von ihm bereitgestellten SVG-Dateien sendet, wird Firefox höchstwahrscheinlich den Markup der Dateien als Text oder kodierten Müll anzeigen oder den Betrachter sogar auffordern, ein Programm zum Öffnen zu wählen.

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}
