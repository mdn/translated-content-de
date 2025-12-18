---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 1351f23f494656e58195ab8e186cd8946e90adcf
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifeste-Datei ist eine JSON-Datei, die Informationen über die Merkmale dieser App bereitstellt, um sie wie eine native App aussehen und funktionieren zu lassen, wenn sie auf dem Gerät des Benutzers installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich deren Namen, Icons und Präsentationsanweisungen.

Während laut Spezifikation alle Schlüssel (oder Mitglieder) des Manifests optional sind, haben einige Browser, Betriebssysteme und App-Verteiler [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members) für eine Web-App, um eine PWA zu sein. Indem Sie einen Namen oder kurzbezeichneten Namen, die Start-URL, ein Icon, das einige Mindestanforderungen erfüllt, und die Art des Anwendungsfensters, in dem die PWA angezeigt werden soll, einfügen, werden die Manifestanforderungen einer PWA erfüllt.

Eine minimalistische Manifest-Datei für unsere Menstruationszyklus-Tracking-App könnte so aussehen:

```json
{
  "short_name": "CT",
  "start_url": "/",
  "icons": [
    {
      "src": "icon-512.png",
      "sizes": "512x512"
    }
  ],
  "display": "standalone"
}
```

Bevor Sie die Manifest-Datei speichern und von unserer HTML-Datei verlinken, können wir ein noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifest-Dateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der vom Betriebssystem verwendet wird, wenn Anwendungen aufgelistet werden, als Bezeichnung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Er wird als Bezeichnung für Icons auf Telefonbildschirmen verwendet, einschließlich im "Zum Home-Bildschirm hinzufügen" Dialog auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird `name` in den meisten Fällen verwendet, während `short_name` verwendet wird, wenn es nur begrenzten Platz gibt, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Eine Erklärung, was die Anwendung tut. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifest-Datei. Sie können den untenstehenden Text verwenden oder diskretere oder beschreibendere Werte sowie eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und offline Erfahrungen einer PWA wird im Manifest definiert. Präsentations-Manifest-Mitglieder umfassen `start_url` und `display`, sowie Mitglieder, die verwendet werden können, um [Ihre App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Kontrolliert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, was die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einem eigenständigen View ähnelt, aber mit UI-Elementen zur Navigationsteuerung, und `browser`, das die App in einem regulären Browser-View öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, lassen wir dieses Mitglied weg.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standardfarbe von Betriebssystem- und Browser-UI-Elementen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie der Statusleiste in einigen mobilen Erfahrungen und der Anwendungs-Titelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen reibungslosen Übergang zwischen App-Start und Laden zu schaffen, wird empfohlen, das {{cssxref("&lt;color&gt;")}} zu verwenden, das als {{cssxref("background-color")}} der App deklariert ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben zu erstellen.

### Beispiel-Lösung

Da die Beispielanwendung eine einzelne Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist `background-color: #eeffee;` auf dem `body`-Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang vom Platzhalterschein zum App-Laden zu gewährleisten.

```json
{
  "name": "...",
  "short_name": "...",
  "description": "...",
  "start_url": "/",
  "theme_color": "#eeffee",
  "background_color": "#eeffee",
  "display": "standalone"
}
```

## App-Ikonographie

PWA-Icons helfen Benutzern, Ihre App zu erkennen, machen sie visuell ansprechender und verbessern die Entdeckbarkeit. Das PWA-App Symbol erscheint auf Startbildschirmen, App-Launchern oder App-Store-Suchergebnissen. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts spezifiziert das `icons`-Mitglied ein Array von einem oder mehreren Icon-Objekten zur Verwendung in verschiedenen Kontexten, wobei jedes ein `src`- und `sizes`-Mitglied und optionale `type`- und `purpose`-Mitglieder hat. Jedes Icon-Objekt listet unter `src` die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Mitglied liefert eine durch Leerzeichen getrennte Liste von Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) des {{HTMLElement("link")}} Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

```json
{
  "name": "MyApp",
  "icons": [
    {
      "src": "icons/tiny.webp",
      "sizes": "48x48"
    },
    {
      "src": "icons/small.png",
      "sizes": "72x72 96x96 128x128 256x256",
      "purpose": "maskable"
    },
    {
      "src": "icons/large.png",
      "sizes": "512x512"
    },
    {
      "src": "icons/scalable.svg",
      "sizes": "any"
    }
  ]
}
```

Alle Symbole sollten denselben Look und das gleiche Feeling haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symboldateien Quadrate sind, rendert einige Betriebssysteme unterschiedliche Formen, schneiden Abschnitte ab oder "maskieren" das Symbol, um der UI zu entsprechen, oder schrumpfen und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der okay gerendert wird, wenn das Symbol als Kreis maskiert ist, ist das innere 80% des Bildes. Icons sind sicher maskierbar gekennzeichnet durch das `purpose`-Mitglied, welches, wenn auf `maskable` gesetzt, das [Symbol als anpassungsfähig](https://web.dev/articles/maskable-icon) definiert.

In Safari, und daher für iOS und iPadOS, wenn Sie das [nicht standardmäßige `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, wird es Vorrang vor manifest-deklarierten Icons haben.

### Aufgabe

Fügen Sie die Icons zur Manifestdatei hinzu, die Sie erstellt haben.

Mit den Wörtern "Zyklus" und "Periode" von CycleTracker und der gewählten grünen Themenfarbe spielend, könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unser kleinste Größe `circle.ico`, eine Icon-Datei, die einfach ein Kreis ist, der das Punktzeichen und die Themenfarbe der App darstellt, wobei unsere Zwischenbilder, `circle.svg`, `tire.svg` und `wheel.svg`, mehr Details hinzufügen, vom einfachen Kreis zu einem Reifen, je größer sie werden, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Das Entwerfen von Icons ist jedoch nicht Teil dieses Tutorials.

```html hidden
<div>
  <img alt="a green circle" src="circle.svg" role="img" />
  <img alt="a simple wheel" src="tire.svg" role="img" />
  <img alt="a detailed wheel" src="wheel.svg" role="img" />
</div>
```

```css hidden
div {
  display: flex;
  gap: 5px;
}
img {
  width: 33%;
}
```

{{EmbedLiveSample("PWA-Ikonographie", 600, 250)}}

### Beispiel-Lösung

```json
{
  "name": "...",
  "short_name": "...",
  "description": "...",
  "start_url": "...",
  "theme_color": "...",
  "background_color": "...",
  "display": "...",
  "icons": [
    {
      "src": "circle.ico",
      "sizes": "48x48"
    },
    {
      "src": "icons/circle.svg",
      "sizes": "72x72 96x96",
      "purpose": "maskable"
    },
    {
      "src": "icons/tire.svg",
      "sizes": "128x128 256x256"
    },
    {
      "src": "icons/wheel.svg",
      "sizes": "512x512"
    }
  ]
}
```

## Das Manifest zur App hinzufügen

Sie haben jetzt eine voll funktionsfähige Manifestdatei. Zeit, sie zu speichern und von unserer HTML-Datei zu verlinken.

Die Manifest-Dateierweiterung kann die von der Spezifikation vorgeschlagene `.webappmanifest` sein. Da sie jedoch eine JSON-Datei ist, wird sie am häufigsten mit der browserunterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern ein Manifest, das von dem HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, weil sie noch nicht mit unserer externen Manifest-JSON-Datei verlinkt ist. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element mit dem Attribut `rel="manifest"` und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um auf Stylesheets zu verlinken und bei PWAs die erforderliche Manifest-Datei, wird aber auch verwendet, um [Website-Icons festzulegen](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl "Favicon"-Artikons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) sowie andere Dinge.

```html
<link rel="icon" href="icons/circle.svg" />
```

Beim Verwenden der `.webmanifest`-Erweiterung, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie dann darauf von der `index.html`-Datei.

Optionen Sie können auch ein Shortcut-Icon aus Ihrem HTML verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} von `index.html` könnte nun so aussehen:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Cycle Tracker</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="manifest" href="cycletracker.json" />
  <link rel="icon" href="icons/circle.svg" />
</head>
```

Siehe die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) und sehen Sie sich den [Projektquellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und wenn sie von einer `https://` URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA erkennen und einige werden vorschlagen, sie zu installieren. Um unsere PWA offline arbeiten zu lassen, müssen wir noch einen Service Worker hinzufügen.

## Debuggen von Manifeste-Dateien

Einige Browser-Entwicklungstools bieten Einblick in das App-Manifest. In den Developer Tools von Edge, Firefox und Chrome sind die Manifest-Mitglieder und ihre Werte unter dem "Application"-Panel sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Auf der rechten Seite steht App-Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Paneel bietet den Namen der Manifestdatei als Link und Identitäts-, Darstellungs- und Ikonensektionen.

![Die Identitäts- und Präsentations-Manifestmitglieder zusammen mit Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. In diesem Screenshot, obwohl wir die Mitglieder `orientation` oder `id` nicht eingeschlossen haben, werden sie aufgeführt. Das App-Panel kann verwendet werden, um die Manifest-Mitglieder zu sehen und sogar zu lernen: in diesem Beispiel lernen wir, dass um eine App-ID zu spezifizieren, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" setzen muss.

Chrome und Edge bieten auch Fehler und Warnungen, Protokollhandler und Informationen, um das Manifest und die Icons zu verbessern.

Unsere Web-App hat keine Protokollhandler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir welche hinzugefügt, wären sie unter "Protocol Handlers" zu finden. Da dieser Abschnitt leer ist, bieten die Entwicklertools Links zu weiteren Informationen zu diesem Thema.

![Die vier in der Manifestdatei enthaltenen Icons mit dem Hintergrund entfernt, da "nur der minimale sichere Bereich für maskierbare Icons anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel enthält auch Einblicke in den sicheren Bereich für maskierbare Icons und einen Link zu einem [PWA Bildergenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die erzeugten Bilder mögen Ihren Bedürfnissen nicht entsprechen, aber die Liste der Bildgrößen, die für jedes Betriebssystem erzeugt werden, demonstriert die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklertools sind nützlich, um zu identifizieren, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwicklungstools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, auch wenn unser Manifest diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Icon an und zeigt `any` an, wenn der Zweck nicht explizit gesetzt ist.

![Das Manifest-Panel in den Firefox-Entwicklertools, das Werte für die nicht eingerichteten Mitglieder dir, scope und id sowie die Mitglieder lang und orientation ohne zugehörige Werte zeigt.](manifest_firefox.jpg)

## Als Nächstes

Damit unsere PWA offline funktioniert, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne ein Framework tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
