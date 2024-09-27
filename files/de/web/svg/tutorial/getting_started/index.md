---
title: Erste Schritte
slug: Web/SVG/Tutorial/Getting_Started
l10n:
  sourceCommit: 9d69b066e7d887ffca8e974786d1c2600fb72bc3
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns direkt mit einem einfachen Beispiel beginnen. Sehen Sie sich den folgenden Code an.

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Öffnen Sie dann die Datei in einem Browser. Es wird gerendert wie im folgenden Screenshot dargestellt. (Firefox-Nutzer: klicken Sie [hier](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund, bestehend aus einem zentrierten grünen Kreis. Weißer Text, innerhalb des Kreises zentriert, ist SVG.](svgdemo1.png)

Der Rendering-Prozess umfasst die folgenden Schritte:

1. Wir beginnen mit dem {{SVGElement("svg")}} Root-Element:

   - Eine Doctype-Deklaration wie aus (X)HTML bekannt, sollte weggelassen werden, da DTD-basierte SVG-Validierung mehr Probleme verursacht, als sie löst.
   - Vor SVG 2 sollten zur Identifikation der SVG-Version für andere Arten der Validierung die Attribute `version` und `baseProfile` immer verwendet werden. Beide Attribute sind in SVG 2 veraltet.
   - Als XML-Dialekt muss SVG immer die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Namespaces_Crash_Course).

2. Der Hintergrund wird durch das Zeichnen eines Rechtecks {{SVGElement("rect")}} festgelegt, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird über dem Zentrum des roten Rechtecks gezeichnet (Zentrum des Kreises 150px nach rechts und 100px nach unten von der oberen linken Ecke versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens wird mit Weiß gefüllt. Der Text wird durch Setzen eines Ankers da positioniert, wo wir den Mittelpunkt haben möchten: In diesem Fall sollte der Mittelpunkt dem Zentrum des grünen Kreises entsprechen. Feinabstimmungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um ein ästhetisch ansprechendes Endergebnis zu gewährleisten.

## Grundlegende Eigenschaften von SVG-Dateien

- Das erste wichtige Merkmal ist die Reihenfolge der Rendering-Elemente. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _auf vorhergehenden_ Elementen gerendert werden. Je weiter unten ein Element steht, desto sichtbarer wird es sein.
- SVG-Dateien können im Web direkt im Browser angezeigt oder auf mehrere Arten in HTML-Dateien eingebettet werden:

  - Wenn das HTML XHTML ist und als Typ `application/xhtml+xml` geliefert wird, kann das SVG direkt im XML-Quelltext eingebettet werden.
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

  - Schließlich kann SVG dynamisch mit JavaScript erstellt und in den HTML DOM eingefügt werden.

- Wie SVG mit Größen und Einheiten umgeht, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorial/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind einfache Textdateien, die SVG-Markup enthalten. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svg" (alles in Kleinbuchstaben).

Aufgrund der potenziell großen Größe, die SVG-Dateien bei bestimmten Anwendungen erreichen können (z. B. geografische Anwendungen), erlaubt die SVG-Spezifikation auch gzip-komprimierte SVG-Dateien. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svgz" (alles in Kleinbuchstaben). Leider ist es sehr problematisch, gzip-komprimierte SVG-Dateien zuverlässig über alle SVG-fähigen Benutzeragenten hinweg arbeiten zu lassen, wenn sie von einem Microsoft IIS-Server bereitgestellt werden, und Firefox kann gzip-komprimierte SVGs nicht von einem lokalen Computer laden. Vermeiden Sie gzip-komprimierte SVGs, es sei denn, Sie veröffentlichen auf einem Webserver, von dem Sie wissen, dass er sie korrekt bereitstellt (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Jetzt, da Sie eine Vorstellung davon haben, wie Sie grundlegende SVG-Dateien erstellen, ist der nächste Schritt, sie auf einen Webserver hochzuladen. An dieser Stelle gibt es jedoch einige Fallstricke. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

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

Sie können überprüfen, ob Ihr Server die korrekten HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Netzwerk-Monitor-Panel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) oder eine Seite wie [websniffer.com](https://websniffer.com/) verwenden. Übermitteln Sie die URL einer Ihrer SVG-Dateien und sehen Sie sich die HTTP-Antwort-Header an. Wenn Sie feststellen, dass Ihr Server die Header nicht mit den oben angegebenen Werten sendet, sollten Sie Ihren Webhost kontaktieren. Wenn Sie Schwierigkeiten haben, sie davon zu überzeugen, ihre Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, es selbst zu tun. Siehe die [Server-Konfigurationsseite](https://www.w3.org/services/svg-server/) auf der w3.org für eine Reihe einfacher Lösungen.

Server-Fehlkonfiguration ist ein sehr häufiger Grund für das Scheitern des Ladens von SVG, also überprüfen Sie Ihre Konfiguration. Wenn Ihr Server nicht konfiguriert ist, um die richtigen Header mit den von ihm servierten SVG-Dateien zu senden, zeigt Firefox wahrscheinlich das Markup der Dateien als Text oder kodierten Datenmüll an oder fordert den Betrachter auf, eine Anwendung zu wählen, um sie zu öffnen.

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}
