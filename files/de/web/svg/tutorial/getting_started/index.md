---
title: Erste Schritte
slug: Web/SVG/Tutorial/Getting_Started
l10n:
  sourceCommit: 9d69b066e7d887ffca8e974786d1c2600fb72bc3
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns direkt mit einem einfachen Beispiel beginnen. Betrachten Sie den folgenden Code.

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Öffnen Sie dann die Datei in einem Browser. Sie wird wie im folgenden Screenshot dargestellt gerendert. (Firefox-Nutzer: Klicken Sie [hier](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund mit einem zentrierten grünen Kreis. Weißer Text, der in der Mitte des Kreises zentriert ist, lautet SVG.](svgdemo1.png)

Der Rendering-Prozess beinhaltet Folgendes:

1. Wir beginnen mit dem {{SVGElement("svg")}}-Root-Element:

   - Eine Doctype-Deklaration, wie man sie von (X)HTML kennt, sollte weggelassen werden, da die DTD-basierte SVG-Validierung mehr Probleme verursacht, als sie löst.
   - Vor SVG 2 sollten zur Identifizierung der SVG-Version für andere Arten der Validierung immer die Attribute `version` und `baseProfile` verwendet werden. Beide Attribute `version` und `baseProfile` sind in SVG 2 veraltet.
   - Als ein XML-Dialekt muss SVG immer die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namensräume Crashkurs](/de/docs/Web/SVG/Namespaces_Crash_Course).

2. Der Hintergrund wird auf Rot gesetzt, indem ein Rechteck {{SVGElement("rect")}} gezeichnet wird, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird über dem Zentrum des roten Rechtecks gezeichnet (Mittelpunkt des Kreises um 150px nach rechts und 100px nach unten vom oberen linken Eck versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens wird mit Weiß gefüllt. Der Text wird positioniert, indem ein Anker gesetzt wird, wo wir den Mittelpunkt haben möchten: In diesem Fall sollte der Mittelpunkt dem Zentrum des grünen Kreises entsprechen. Feineinstellungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um ein ästhetisch ansprechendes Endergebnis zu gewährleisten.

## Grundlegende Eigenschaften von SVG-Dateien

- Das erste wichtige Merkmal ist die Reihenfolge der Rendering-Elemente. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _über_ vorherigen Elementen gerendert werden. Je weiter unten ein Element ist, desto sichtbarer wird es.
- SVG-Dateien können im Web direkt im Browser angezeigt oder über verschiedene Methoden in HTML-Dateien eingebettet werden:

  - Wenn das HTML XHTML ist und als Typ `application/xhtml+xml` geliefert wird, kann SVG direkt in den XML-Quellcode eingebettet werden.
  - SVG kann auch direkt in HTML eingebettet werden.
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

- Wie SVG Größen und Einheiten behandelt, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorial/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind einfache Textdateien, die SVG-Markup enthalten. Die empfohlene Dateierweiterung für diese Dateien ist ".svg" (alles in Kleinbuchstaben).

Da SVG-Dateien bei bestimmten Anwendungen (z.B. geografischen Anwendungen) potenziell sehr groß werden können, erlaubt die SVG-Spezifikation auch gzip-komprimierte SVG-Dateien. Die empfohlene Dateierweiterung für diese Dateien ist ".svgz" (alles in Kleinbuchstaben). Unglücklicherweise ist es sehr problematisch, gzip-komprimierte SVG-Dateien zuverlässig auf allen SVG-fähigen Benutzeragenten zum Laufen zu bringen, wenn sie von einem Microsoft IIS-Server bereitgestellt werden, und Firefox kann gzip-komprimierte SVG nicht vom lokalen Computer laden. Vermeiden Sie gzip-komprimierte SVG, außer wenn Sie auf einen Webserver veröffentlichen, von dem Sie wissen, dass er sie korrekt bereitstellt (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Nachdem Sie nun eine Vorstellung davon haben, wie Sie grundlegende SVG-Dateien erstellen, besteht die nächste Phase darin, sie auf einen Webserver hochzuladen. Es gibt jedoch einige Stolpersteine in dieser Phase. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

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

Sie können überprüfen, ob Ihr Server die richtigen HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Netzwerküberwachungs-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) oder eine Seite wie [websniffer.com](https://websniffer.com/) verwenden. Geben Sie die URL einer Ihrer SVG-Dateien ein und schauen Sie sich die HTTP-Antwortheader an. Wenn Sie feststellen, dass Ihr Server die Header nicht mit den oben angegebenen Werten sendet, sollten Sie Ihren Webhoster kontaktieren. Wenn Sie Schwierigkeiten haben, ihn zu überzeugen, seine Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, dies selbst zu tun. Siehe die [Server-Konfigurationsseite](https://www.w3.org/services/svg-server/) auf w3.org für eine Reihe einfacher Lösungen.

Fehlkonfiguration des Servers ist ein sehr häufiger Grund dafür, dass SVG nicht geladen wird, stellen Sie also sicher, dass Sie Ihren überprüfen. Wenn Ihr Server nicht so konfiguriert ist, dass er die richtigen Header mit den von ihm gelieferten SVG-Dateien sendet, zeigt Firefox höchstwahrscheinlich das Markup der Dateien als Text oder kodierten Müll an oder fordert den Betrachter sogar auf, ein Programm zum Öffnen auszuwählen.

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}
