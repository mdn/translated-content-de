---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestsdatei ist eine JSON-Datei, die Informationen über die Funktionen der App bereitstellt, damit sie wie eine native App aussieht und sich verhält, wenn sie auf dem Gerät des Nutzers installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und ihrer Präsentationsrichtlinien.

Obwohl laut Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Distributoren [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App eine PWA ist. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Icon, das bestimmte Mindestanforderungen erfüllt, und den Typ des Anwendungs-Viewports, in dem die PWA angezeigt werden soll, angeben, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestsdatei für unsere Menstruationszyklus-Verfolgungs-App könnte folgendermaßen aussehen:

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

Bevor die Manifestsdatei gespeichert und von unserer HTML-Datei aus verlinkt wird, können wir ein immer noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, das Obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifestsdateien ermöglichen, das Erscheinungsbild unserer CycleTracker PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beide enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` beinhalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Er wird als Beschriftung für Symbole auf Handybildschirmen verwendet, einschließlich im Dialog "Zum Home-Bildschirm hinzufügen" in iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird der `name` in den meisten Fällen verwendet und der `short_name`, wenn der Platz zur Anzeige des Anwendungsnamens begrenzt ist.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung, was die Anwendung macht. Sie bietet eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestsdatei. Sie können den unten stehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und offline verfügbaren Erfahrungen einer PWA werden im Manifest definiert. Präsentationsmanifeste umfassen `start_url` und `display` sowie Mitglieder, die zur [Anpassung Ihrer App-Farben](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) verwendet werden können, einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Darstellungsmodus der App, einschließlich `fullscreen`, `standalone`, wodurch die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) angezeigt wird, `minimal-ui`, das einer eigenständigen Ansicht ähnelt, aber mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standardfarbe von UI-Elementen des Betriebssystems und Browsers](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color), z.B. die Statusleiste auf einigen mobilen Geräten und die Anwendungstitelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen reibungslosen Übergang zwischen Start und Laden der App zu schaffen, wird empfohlen, die Farbe [`<color>`](/de/docs/Web/CSS/color_value) zu verwenden, die als [`background-color`](/de/docs/Web/CSS/background-color) der App erklärt ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestsdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine einzelne Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist auf dem `body`-Element-Selektor `background-color: #efe;` festgelegt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang vom Platzhalteraussehen zum Laden der App sicherzustellen.

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

## App-Ikonografie

PWA-Icons helfen Nutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Icon erscheint auf Home-Bildschirmen, App-Launchern oder in Suchergebnissen des App-Stores. Die Größe des gerenderten Icons und die Dateianforderungen variieren je nach Anzeigeort und -kontext. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts spezifiziert das `icons`-Mitglied ein Array von einem oder mehreren Icon-Objekten zur Nutzung in verschiedenen Kontexten, wobei jedes mit einem `src`- und `sizes`-Mitglied sowie optionalen `type`- und `purpose`-Mitgliedern ausgestattet ist. Jedes Icon-Objekt hat eine `src`, die die Quelle einer einzelnen Bilddatei auflistet. Das `sizes`-Mitglied liefert eine Liste von durch Leerzeichen getrennten Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert entspricht dem [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Icons sollten denselben Look und Feel haben, um sicherzustellen, dass Nutzer Ihre PWA erkennen, aber je größer das Icon, desto mehr Detail kann es enthalten. Während alle Icon-Dateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, schneiden Abschnitte ab oder "maskieren" das Icon, um es an die Benutzeroberfläche anzupassen, oder verkleinern und zentrieren das Icon mit einem Hintergrund, wenn das Icon nicht maskierbar ist. Die [Sicherheitszone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der okay gerendert wird, wenn das Icon als Kreis maskiert wird, ist die innere 80% der Bilddatei. Icons werden als sicher zum Maskieren markiert durch das `purpose`-Mitglied, das, wenn auf `maskable` gesetzt, das [Icon als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und daher für iOS und iPadOS, wird, wenn Sie das [nicht standardmäßige `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, wird dieses Vorrang haben über im Manifest deklarierte Icons.

### Aufgabe

Fügen Sie die Icons zur Manifestsdatei hinzu, die Sie erstellt haben.

Indem Sie mit den Wörtern "cycle" und "period" von CycleTracker und der grünen Farbthematik spielen, könnten unsere Icon-Bilder allesamt hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, und Icon-Datei, die nur einen Kreis darstellt, der das Satzzeichen und die Farbthematik der App darstellt, wobei unsere dazwischenliegenden Bilder, `circle.svg`, `tire.svg` und `wheel.svg`, beim Größerwerden mehr Details hinzufügen, von einem einfachen Kreis zu einem Reifen, mit unseren größten Icons, die ein detailliertes Rad mit Speichen und Schatten sind. Das Design von Icons liegt jedoch außerhalb des Umfangs dieses Tutorials.

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

{{EmbedLiveSample("PWA iconography", 600, 250)}}

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

## Hinzufügen des Manifests zur App

Sie haben nun eine voll funktionsfähige Manifestsdatei. Es ist Zeit, sie zu speichern und von unserer HTML-Datei aus zu verlinken.

Die Dateierweiterung der Manifestsdatei kann `.webappmanifest` entsprechend der Spezifikation sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der vom Browser unterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern, dass eine Manifestsdatei von dem HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, weil sie noch nicht auf unsere externe Manifest-JSON-Datei verweist. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element, mit dem Attribut `rel="manifest"` und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten zum Verknüpfen von Stylesheets und, bei PWAs, der erforderlichen Manifestsdatei verwendet, aber auch zur [Festlegung von Site-Icons](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl "Favicon"-Stil Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, falls Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestsdatei, die Sie in den oben genannten Schritten erstellt haben, und verlinken Sie sie dann aus der `index.html`-Datei.

Optional können Sie auch aus Ihrem HTML auf ein Verknüpfungssymbol verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} von `index.html` könnte nun folgendermaßen aussehen:

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

Sehen Sie sich die [`cycletracker.json`-Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und sehen Sie sich den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestsdatei und wenn sie von einer `https://`-URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Seite als PWA erkennen und einige werden deren Installation vorschlagen. Um unsere PWA offline funktional zu machen, müssen wir noch einen Service-Arbeiter hinzufügen.

## Debuggen von Manifestsdateien

Einige Browser-Entwicklertools bieten Einblicke ins App-Manifest. In den Entwicklertools von Edge, Firefox und Chrome sind die Manifest-Mitglieder und deren Werte unter dem "Anwendung"-Panel sichtbar.

![In den Entwicklertools umfasst das linke Panel Links zum Manifest. Die rechte Seite liest App Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Pane bietet den Namen der Manifestdatei als Link sowie Abschnitte zur Identität, Präsentation und zu Icons.

![Die Identitäts- und Präsentationsmanifestmitglieder zusammen mit den Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifest-Mitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. In diesem Screenshot, obwohl wir die `orientation`- oder `id`-Mitglieder nicht eingeschlossen haben, werden sie aufgelistet. Das App-Panel kann verwendet werden, um die Manifest-Mitglieder zu sehen und sogar zu lernen: In diesem Beispiel erfahren wir, dass, um eine App-ID anzugeben, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" gesetzt werden muss.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Icons.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir welche eingeschlossen, würden sie unter "Protokoll-Handler" gefunden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools auf weitere Informationen zu diesem Thema.

![Die vier im Manifestfile enthaltenen Icons, ohne Hintergrund, da "zeige nur den minimal sicheren Bereich für maskierbare Icons ist ausgewählt.](manifest_icons.jpg)

Das Manifest-Panel beinhaltet auch Einsichten in den sicheren Bereich für maskierbare Icons und einen Link zu einem [PWA-Image-Generator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die erzeugten Bilder könnten nicht Ihren Bedürfnissen entsprechen, aber die Liste der Bildgrößen, die für jedes Betriebssystem erzeugt werden, zeigt die Vielfalt, wo und wie PWAs angeboten werden können.

Die Entwicklertools sind nützlich, um zu identifizieren, welche Manifest-Mitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, auch wenn unsere Manifestsdatei diese Mitglieder nicht enthalten hat. Firefox enthält auch den Wert des `purpose`-Mitglieds für jedes Icon und zeigt `any` an, wenn der Zweck nicht explizit festgelegt ist.

![Das Manifest-Panel in den Firefox-Entwicklertools zeigt Werte für die nicht eingeschlossenen dir-, scope- und id-Mitglieder sowie die lang- und orientation-Mitglieder ohne zugehörige Werte an.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline funktional zu machen, müssen wir einen [Service-Arbeiter hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne die Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
