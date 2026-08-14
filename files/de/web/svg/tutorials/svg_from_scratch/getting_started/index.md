---
title: Erste Schritte
slug: Web/SVG/Tutorials/SVG_from_scratch/Getting_started
l10n:
  sourceCommit: fd216f3c4358f24fef043d32b28d6e980a78afc0
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}

## Ein einfaches Beispiel

Lassen Sie uns direkt mit einem Beispiel beginnen. Schauen Sie sich den folgenden Code an.

```xml
<svg width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Kopieren Sie den Code und fügen Sie ihn in eine Datei namens demo1.svg ein. Öffnen Sie dann die Datei in einem Browser. Sie wird wie im folgenden Screenshot dargestellt. (Oder [sehen Sie es live](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![Roter Hintergrund, bestehend aus einem zentrierten grünen Kreis. Weißer Text zentriert innerhalb des Kreises ist SVG.](svgdemo1.png)

Der Rendering-Prozess umfasst Folgendes:

1. Wir beginnen mit dem {{SVGElement("svg")}}-Root-Element:
   - Eine Doctype-Erklärung, wie sie von (X)HTML bekannt ist, sollte weggelassen werden, da die DTD-basierte SVG-Validierung mehr Probleme verursacht als sie löst.
   - Vor SVG 2 sollten zur Identifizierung der SVG-Version für andere Arten der Validierung stattdessen immer die Attribute `version` und `baseProfile` verwendet werden. Beide Attribute sind in SVG 2 veraltet.
   - Als XML-Dialekt muss SVG immer die Namensräume korrekt binden (im xmlns-Attribut). Weitere Informationen finden Sie auf der Seite [Namespaces Crash Course](/de/docs/Web/SVG/Guides/Namespaces_crash_course).

2. Der Hintergrund wird auf Rot gesetzt, indem ein Rechteck {{SVGElement("rect")}} gezeichnet wird, das den gesamten Bildbereich abdeckt.
3. Ein grüner Kreis {{SVGElement("circle")}} mit einem Radius von 80px wird über dem Zentrum des roten Rechtecks gezeichnet (Mittelpunkt des Kreises 150px nach rechts und 100px nach unten vom oberen linken Eckpunkt versetzt).
4. Der Text "SVG" wird gezeichnet. Das Innere jedes Buchstabens ist weiß gefüllt. Der Text wird positioniert, indem ein Anker dort gesetzt wird, wo sich der Mittelpunkt befinden soll: In diesem Fall sollte der Mittelpunkt dem Zentrum des grünen Kreises entsprechen. Feinabstimmungen können an der Schriftgröße und der vertikalen Position vorgenommen werden, um sicherzustellen, dass das Endergebnis ästhetisch ansprechend ist.

## Grundlegende Eigenschaften von SVG-Dateien

- Das erste wichtige Merkmal, das zu beachten ist, ist die Reihenfolge der Zeichenelemente. Die global gültige Regel für SVG-Dateien ist, dass _spätere_ Elemente _über früheren_ Elementen gerendert werden. Je weiter unten ein Element ist, desto sichtbarer wird es sein.
- SVG-Dateien können im Web direkt im Browser angezeigt oder über verschiedene Methoden in HTML-Dateien eingebettet werden:
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

- Wie SVG Größen und Einheiten behandelt, wird [auf der nächsten Seite](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Positions) erklärt.

## SVG-Dateitypen

SVG-Dateien gibt es in zwei Varianten. Normale SVG-Dateien sind Textdateien, die SVG-Auszeichnung enthalten. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svg" (alles klein geschrieben).

Aufgrund der potenziell enormen Größe, die SVG-Dateien bei manchen Anwendungen (z.B. geografischen Anwendungen) erreichen können, erlaubt die SVG-Spezifikation auch, SVG-Dateien {{Glossary("gzip_compression", "gzip-komprimiert")}} zu speichern. Die empfohlene Dateinamenerweiterung für diese Dateien ist ".svgz" (alles klein geschrieben). Eine gzip-komprimierte SVG wird nur korrekt geladen, wenn der Server den korrekten `Content-Encoding`-Header sendet (siehe den nächsten Abschnitt), daher sollten Sie `.svgz` nur verwenden, wenn Sie wissen, dass Ihr Webserver entsprechend konfiguriert ist.

## Ein Wort zu Webservern für .svgz-Dateien

Nun, da Sie eine Vorstellung davon haben, wie man grundlegende SVG-Dateien erstellt, besteht der nächste Schritt darin, sie auf einen Webserver hochzuladen. Es gibt jedoch einige Stolperfallen in diesem Stadium. Für normale SVG-Dateien sollten Server die folgenden HTTP-Header senden:

```http
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

Für gzip-komprimierte SVG-Dateien sollten Server die folgenden HTTP-Header senden:

```http
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

Sie können überprüfen, ob Ihr Server die korrekten HTTP-Header mit Ihren SVG-Dateien sendet, indem Sie die {{Glossary("Developer_Tools", "Entwickler-Tools")}} Ihres Browsers öffnen und die Antwort-Header für eine Ihrer SVG-Dateien inspizieren – in Firefox zum Beispiel im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#headers). Wenn Sie feststellen, dass Ihr Server die Header nicht mit den gezeigten Werten sendet, sollten Sie Ihren Webhost kontaktieren oder, falls Sie den Server selbst verwalten, die Konfiguration aktualisieren, um SVG mit diesen Headern zu bedienen.

Server-Fehlkonfiguration ist ein sehr häufiger Grund dafür, dass SVG nicht geladen wird, also stellen Sie sicher, dass Sie Ihren überprüfen. Wenn Ihr Server nicht konfiguriert ist, um die korrekten Header mit den von ihm bedienten SVG-Dateien zu senden, wird Firefox höchstwahrscheinlich das Markup der Dateien als Text oder codierten Datenmüll anzeigen oder den Betrachter sogar auffordern, eine Anwendung zur Öffnung auszuwählen.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Introduction", "Web/SVG/Tutorials/SVG_from_scratch/Positions") }}
