---
title: Erste Schritte
slug: Web/SVG/Tutorial/Getting_Started
l10n:
  sourceCommit: 9d69b066e7d887ffca8e974786d1c2600fb72bc3
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns direkt mit einem einfachen Beispiel beginnen. Werfen Sie einen Blick auf den folgenden Code.

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei ein, demo1.svg. Öffnen Sie dann die Datei in einem Browser. Es wird wie im folgenden Screenshot angezeigt. (Firefox-Benutzer: Klicken Sie [hier](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund mit einem zentrierten grünen Kreis. Weißer Text, der innerhalb des Kreises zentriert ist, lautet SVG.](svgdemo1.png)

Der Rendering-Prozess umfasst Folgendes:

1. Wir beginnen mit dem {{SVGElement("svg")}} Wurzelelement:

   - Eine Doctype-Deklaration, wie sie von (X)HTML bekannt ist, sollte weggelassen werden, da DTD-basierte SVG-Validierung mehr Probleme verursacht, als sie löst.
   - Vor SVG 2 sollten zur Identifizierung der SVG-Version für andere Arten der Validierung immer die Attribute `version` und `baseProfile` verwendet werden. Beide Attribute sind in SVG 2 veraltet.
   - Als XML-Dialekt muss SVG immer die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Namespaces_Crash_Course).

2. Der Hintergrund wird durch Zeichnen eines Rechtecks {{SVGElement("rect")}}, das den gesamten Bildbereich abdeckt, rot gesetzt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird auf der Mitte des roten Rechtecks gezeichnet (Mittelpunkt des Kreises 150px nach rechts und 100px nach unten von der oberen linken Ecke versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens ist mit Weiß gefüllt. Der Text wird positioniert, indem ein Anker gesetzt wird, wo sich der Mittelpunkt befinden soll: In diesem Fall sollte der Mittelpunkt dem Mittelpunkt des grünen Kreises entsprechen. Feinabstimmungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um sicherzustellen, dass das Endergebnis ästhetisch ansprechend ist.

## Grundlegende Eigenschaften von SVG-Dateien

- Die erste wichtige Sache, die zu beachten ist, ist die Reihenfolge der Renderings von Elementen. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _über_ vorherigen Elementen dargestellt werden. Je weiter ein Element unten steht, desto sichtbarer wird es.
- SVG-Dateien im Web können direkt im Browser angezeigt oder über mehrere Methoden in HTML-Dateien eingebettet werden:

  - Wenn das HTML XHTML ist und als Typ `application/xhtml+xml` geliefert wird, kann das SVG direkt im XML-Quelltext eingebettet werden.
  - Das SVG kann auch direkt in HTML eingebettet werden.
  - Ein `img`-Element kann verwendet werden.
  - Das SVG kann mit einem `object`-Element referenziert werden:

    ```html
    <object data="image.svg" type="image/svg+xml"></object>
    ```

  - Ebenso kann ein `iframe`-Element verwendet werden:

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - Schließlich kann SVG dynamisch mit JavaScript erstellt und in das HTML-DOM injiziert werden.

- Wie SVG Größen und Einheiten behandelt, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorial/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind einfache Textdateien, die SVG-Markup enthalten. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svg" (alles in Kleinbuchstaben).

Aufgrund der potenziell massiven Größe, die SVG-Dateien bei einigen Anwendungen (z. B. geografische Anwendungen) erreichen können, erlaubt die SVG-Spezifikation auch gzip-komprimierte SVG-Dateien. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svgz" (alles in Kleinbuchstaben). Leider ist es sehr problematisch, gzip-komprimierte SVG-Dateien von einem Microsoft IIS-Server aus zuverlässig mit allen SVG-fähigen Benutzeragenten zu verwenden, und Firefox kann gzip-komprimierte SVG nicht vom lokalen Computer laden. Vermeiden Sie gzip-komprimierte SVGs, außer wenn Sie auf einen Webserver veröffentlichen, von dem Sie wissen, dass er sie korrekt bereitstellt (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Jetzt, da Sie eine Vorstellung davon haben, wie man grundlegende SVG-Dateien erstellt, besteht der nächste Schritt darin, diese auf einen Webserver hochzuladen. Es gibt jedoch einige Fallstricke in diesem Stadium. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

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

Sie können überprüfen, ob Ihr Server die korrekten HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Netzwerkmonitor-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) oder eine Seite wie [websniffer.com](https://websniffer.com/) verwenden. Übermitteln Sie die URL einer Ihrer SVG-Dateien und sehen Sie sich die HTTP-Antwort-Header an. Wenn Sie feststellen, dass Ihr Server die Header nicht mit den oben angegebenen Werten sendet, sollten Sie Ihren Webhoster kontaktieren. Wenn es Ihnen schwerfällt, sie davon zu überzeugen, ihre Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, es selbst zu tun. Sehen Sie sich die [Server-Konfigurationsseite](https://www.w3.org/services/svg-server/) auf w3.org für eine Reihe einfacher Lösungen an.

Server-Fehlkonfiguration ist ein sehr häufiger Grund dafür, dass SVG nicht geladen wird, also vergewissern Sie sich, dass Sie Ihren überprüfen. Wenn Ihr Server nicht korrekt konfiguriert ist, um die richtigen Header mit den von ihm bereitgestellten SVG-Dateien zu senden, wird Firefox höchstwahrscheinlich das Markup der Dateien als Text oder codierten Müll anzeigen oder den Betrachter sogar bitten, ein Programm zur Öffnung der Dateien zu wählen.

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}
