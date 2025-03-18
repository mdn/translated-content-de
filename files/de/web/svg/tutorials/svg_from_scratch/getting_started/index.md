---
title: Erste Schritte
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
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

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Öffnen Sie dann die Datei in einem Browser. Sie wird wie im folgenden Screenshot dargestellt. (Firefox-Nutzer: klicken Sie [hier](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund, zusammengesetzt aus einem zentrierten grünen Kreis. Weißer Text, zentriert innerhalb des Kreises, ist SVG.](svgdemo1.png)

Der Rendering-Prozess umfasst Folgendes:

1. Wir beginnen mit dem {{SVGElement("svg")}}-Wurzelelement:

   - Eine Doctype-Deklaration, wie sie von (X)HTML bekannt ist, sollte weggelassen werden, da die DTD-basierte SVG-Validierung mehr Probleme verursacht als sie löst.
   - Vor SVG 2 sollten zur Identifizierung der Version des SVG für andere Arten der Validierung stattdessen die Attribute `version` und `baseProfile` immer verwendet werden. Beide Attribute `version` und `baseProfile` sind in SVG 2 veraltet.
   - Als Dialekt von XML muss SVG immer die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

2. Der Hintergrund wird auf rot gesetzt, indem ein Rechteck {{SVGElement("rect")}} gezeichnet wird, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird über dem Zentrum des roten Rechtecks gezeichnet (das Zentrum des Kreises ist 150px nach rechts und 100px nach unten von der oberen linken Ecke versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens ist mit Weiß gefüllt. Der Text wird durch Setzen eines Ankers positioniert, wo der Mittelpunkt sein soll: in diesem Fall sollte der Mittelpunkt dem Zentrum des grünen Kreises entsprechen. Feinabstimmungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um sicherzustellen, dass das Endergebnis ästhetisch ansprechend ist.

## Grundlegende Eigenschaften von SVG-Dateien

- Das erste, was auffällt, ist die Reihenfolge der renderten Elemente. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _über vorherigen_ Elementen dargestellt werden. Je weiter unten ein Element ist, desto sichtbarer wird es sein.
- SVG-Dateien können direkt im Browser angezeigt oder auf verschiedene Weise in HTML-Dateien eingebettet werden:

  - Wenn das HTML XHTML ist und als Typ `application/xhtml+xml` bereitgestellt wird, kann das SVG direkt in die XML-Quelle eingebettet werden.
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

  - Schließlich kann SVG dynamisch mit JavaScript erstellt und in das HTML-DOM injiziert werden.

- Wie SVG Größen und Einheiten handhabt, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind Textdateien, die SVG-Markup enthalten. Die empfohlene Dateierweiterung für diese Dateien ist ".svg" (alles in Kleinbuchstaben).

Aufgrund der potenziell massiven Größe, die SVG-Dateien bei Verwendung für einige Anwendungen (z. B. geografische Anwendungen) erreichen können, erlaubt die SVG-Spezifikation auch gzip-komprimierte SVG-Dateien. Die empfohlene Dateierweiterung für diese Dateien ist ".svgz" (alles in Kleinbuchstaben). Leider ist es sehr problematisch, gzip-komprimierte SVG-Dateien dazu zu bringen, bei allen SVG-fähigen Benutzeragenten zuverlässig zu funktionieren, wenn sie von einem Microsoft IIS-Server bereitgestellt werden, und Firefox kann gzip-komprimiertes SVG nicht vom lokalen Computer laden. Vermeiden Sie es, gzip-komprimiertes SVG zu verwenden, außer wenn Sie auf einen Webserver veröffentlichen, von dem Sie wissen, dass er es korrekt bereitstellt (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Jetzt, da Sie eine Vorstellung davon haben, wie man grundlegende SVG-Dateien erstellt, besteht der nächste Schritt darin, sie auf einen Webserver hochzuladen. An diesem Punkt gibt es jedoch einige Stolpersteine. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

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

Sie können überprüfen, ob Ihr Server die korrekten HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Netzwerk-Monitor-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) verwenden oder eine Seite wie [websniffer.com](https://websniffer.com/) besuchen. Übermitteln Sie die URL einer Ihrer SVG-Dateien und schauen Sie sich die HTTP-Antwort-Header an. Wenn Sie feststellen, dass Ihr Server die Header nicht mit den oben angegebenen Werten sendet, sollten Sie Ihren Webhost kontaktieren. Wenn Sie Probleme haben, sie davon zu überzeugen, ihre Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, dies selbst zu tun. Sehen Sie sich die [Server-Konfigurationsseite](https://www.w3.org/services/svg-server/) auf w3.org für eine Reihe von Lösungen an.

Serverfehlkonfiguration ist ein sehr häufiger Grund dafür, dass SVG nicht geladen wird. Stellen Sie daher sicher, dass Sie Ihre überprüfen. Wenn Ihr Server nicht konfiguriert ist, die richtigen Header mit den von ihm bedienten SVG-Dateien zu senden, zeigt Firefox höchstwahrscheinlich das Markup der Dateien als Text oder kodierten Datenmüll an oder verlangt sogar vom Betrachter, ein Programm zum Öffnen auszuwählen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
