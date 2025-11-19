---
title: Erste Schritte
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns gleich mit einem Beispiel beginnen. Schauen Sie sich den folgenden Code an.

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Öffnen Sie dann die Datei in einem Browser. Sie wird wie im folgenden Screenshot dargestellt wiedergegeben. (Oder [sehen Sie es live](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund, bestehend aus einem zentrierten grünen Kreis. Weißer Text, der im Kreis zentriert ist, ist SVG.](svgdemo1.png)

Der Rendering-Prozess umfasst Folgendes:

1. Wir beginnen mit dem {{SVGElement("svg")}} Wurzelelement:
   - Eine Doctype-Deklaration, wie sie aus (X)HTML bekannt ist, sollte weggelassen werden, da DTD-basierte SVG-Validierung mehr Probleme verursacht als sie löst.
   - Vor SVG 2, um die Version des SVG für andere Validierungsarten zu identifizieren, sollten stattdessen immer die Attribute `version` und `baseProfile` verwendet werden. Sowohl `version` als auch `baseProfile` Attribute sind in SVG 2 veraltet.
   - Als XML-Dialekt muss SVG immer die Namespaces korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

2. Der Hintergrund wird rot gefärbt, indem ein Rechteck {{SVGElement("rect")}} gezeichnet wird, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird über dem Zentrum des roten Rechtecks gezeichnet (der Kreis ist vom oberen linken Rand um 150px nach rechts und 100px nach unten verschoben).
4. Der Text "SVG" wird gezeichnet. Der Innenraum jedes Buchstabens wird mit Weiß gefüllt. Der Text wird positioniert, indem ein Anker gesetzt wird, wo der Mittelpunkt liegen soll: in diesem Fall soll der Mittelpunkt mit dem Zentrum des grünen Kreises übereinstimmen. Feine Anpassungen der Schriftgröße und der vertikalen Position können vorgenommen werden, um sicherzustellen, dass das Endergebnis ästhetisch ansprechend ist.

## Grundlegende Eigenschaften von SVG-Dateien

- Das erste wichtige Merkmal ist die Reihenfolge der Darstellung der Elemente. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _auf vorherigen_ Elementen gerendert werden. Je weiter unten ein Element steht, desto sichtbarer wird es sein.
- SVG-Dateien im Web können direkt im Browser angezeigt oder über verschiedene Methoden in HTML-Dateien eingebettet werden:
  - Wenn HTML XHTML ist und als Typ `application/xhtml+xml` geliefert wird, kann SVG direkt in die XML-Quelle eingebettet werden.
  - SVG kann auch direkt in HTML eingebettet werden.
  - Ein `img` Element kann verwendet werden.
  - Die SVG-Datei kann mit einem `object` Element referenziert werden:

    ```html
    <object data="image.svg" type="image/svg+xml"></object>
    ```

  - Ebenso kann ein `iframe` Element verwendet werden:

    ```html
    <iframe src="image.svg"></iframe>
    ```

  - Schließlich kann SVG mit JavaScript dynamisch erstellt und in den HTML-DOM eingefügt werden.

- Wie SVG mit Größen und Einheiten umgeht, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind Textdateien, die SVG-Markup enthalten. Die empfohlene Dateierweiterung für diese Dateien ist ".svg" (alles in Kleinbuchstaben).

Aufgrund der potenziell massiven Größe, die SVG-Dateien bei bestimmten Anwendungen erreichen können (z.B. geografische Anwendungen), erlaubt die SVG-Spezifikation auch gzip-komprimierte SVG-Dateien. Die empfohlene Dateierweiterung für diese Dateien ist ".svgz" (alles in Kleinbuchstaben). Leider ist es sehr problematisch, gzip-komprimierte SVG-Dateien zuverlässig bei allen SVG-fähigen Benutzeragenten zum Laufen zu bringen, wenn sie von einem Microsoft IIS-Server bereitgestellt werden, und Firefox kann gzip-komprimierte SVG nicht vom lokalen Computer laden. Vermeiden Sie gzip-komprimiertes SVG, es sei denn, Sie veröffentlichen es auf einem Webserver, von dem Sie wissen, dass er es korrekt bereitstellen wird (siehe unten).

## Ein Wort zu Webservern für .svgz-Dateien

Jetzt, da Sie eine Vorstellung davon haben, wie man einfache SVG-Dateien erstellt, besteht der nächste Schritt darin, sie auf einem Webserver hochzuladen. Es gibt jedoch einige Stolpersteine in diesem Stadium. Für normale SVG-Dateien sollten Server die HTTP-Header senden:

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

Sie können überprüfen, ob Ihr Server die korrekten HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie das [Netzwerküberwachungspanel](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers) oder eine Website wie [websniffer.com](https://websniffer.com/) verwenden. Geben Sie die URL einer Ihrer SVG-Dateien ein und schauen Sie sich die HTTP-Antwortheader an. Wenn Sie feststellen, dass Ihr Server die Header nicht mit den oben angegebenen Werten sendet, sollten Sie sich an Ihren Webhoster wenden. Wenn Sie Schwierigkeiten haben, ihn davon zu überzeugen, seine Server korrekt für SVG zu konfigurieren, gibt es möglicherweise Möglichkeiten, dies selbst zu tun. Siehe die [Serverkonfigurationsseite](https://www.w3.org/services/svg-server/) auf der w3.org für eine Reihe von Lösungen.

Eine fehlerhafte Serverkonfiguration ist ein sehr häufiger Grund dafür, dass SVG nicht geladen werden kann, also prüfen Sie Ihren unbedingt. Wenn Ihr Server nicht konfiguriert ist, die korrekten Header mit den von ihm bereitgestellten SVG-Dateien zu senden, zeigt Firefox vermutlich den Code der Dateien als Text oder kodierten Müll an oder fordert den Betrachter sogar auf, eine Anwendung zur Öffnung zu wählen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
