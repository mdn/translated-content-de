---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen der App bereitstellt, um sie wie eine native App aussehen und verhalten zu lassen, wenn sie auf dem Gerät des Nutzers installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und Darstellungsvorgaben.

Während laut Spezifikation alle Manifest-Schlüssel oder -Mitglieder optional sind, haben einige Browser, Betriebssysteme und App-Distributoren [bestimmte erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members) festgelegt, damit eine Web-App eine PWA ist. Indem Sie einen Namen oder Kurzname, die Start-URL, ein Icon, das einige Mindestanforderungen erfüllt, und den Anwendungsviewport-Typ angeben, in dem die PWA angezeigt werden soll, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere Menstruationszyklus-Tracking-App könnte wie folgt aussehen:

```js
{
  "short_name": "CT",
  "start_url" : "/",
  "icons": [
    {
      "src": "icon-512.png",
      "sizes": "512x512"
    }
  ],
  "display": "standalone"
}
```

Bevor wir die Manifestdatei speichern und sie in unserer HTML-Datei verlinken, können wir ein kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das Obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name` oder `short_name` Mitglied oder beides enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Bezeichnung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz ist, um den `name` anzuzeigen. Er wird als Bezeichnung für Symbole auf Telefonbildschirmen verwendet, einschließlich im Dialog "Zum Startbildschirm hinzufügen" auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird in den meisten Fällen der `name` verwendet, der `short_name` wird verwendet, wenn der verfügbare Platz für die Anzeige des Anwendungsnamens begrenzt ist.

- [`description`](/de/docs/Web/Manifest/Reference/description)
  - : Erklärung, was die Anwendung tut. Sie bietet eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den untenstehenden Text verwenden oder diskretere oder beschreibendere Werte wählen und eine Beschreibung Ihrer Wahl hinzufügen.

### Beispiel-Lösung

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation einer installierten und offline nutzbaren PWA wird im Manifest definiert. Präsentations-Manifest-Mitglieder beinhalten `start_url` und `display`, sowie Mitglieder, die verwendet werden können, um [App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Manifest/Reference/start_url)

  - : Die Startseite, wenn ein Nutzer die PWA startet.

- [`display`](/de/docs/Web/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, die [PWA als eigenständige Anwendung anzeigt](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), `minimal-ui`, die einem eigenständigen Ansichtsmodus ähnelt, aber mit UI-Elementen zur Steuerung der Navigation, und `browser`, die die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Manifest/Reference/orientation) Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, lassen wir dieses Mitglied weg.

### Farben

- [`theme_color`](/de/docs/Web/Manifest/Reference/theme_color)
  - : Die standardmäßige [Farbe von Benutzeroberflächenelementen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) des Betriebssystems und des Browsers, wie die Statusleiste auf einigen mobilen Erfahrungen und die Titelleiste der Anwendung auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen reibungslosen Übergang zwischen dem Start der App und dem Laden zu schaffen, wird empfohlen, die im CSS deklarierte [`<color>`](/de/docs/Web/CSS/color_value) als [`background-color`](/de/docs/Web/CSS/background-color) der App zu verwenden.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine einzige Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied vollständig weglassen. Aus demselben Grund können wir die App ohne die Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist die `background-color: #efe;` auf dem `body`-Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang von der Platzhalteransicht zum Laden der App zu gewährleisten.

```js
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

PWA-Symbole helfen den Nutzern, Ihre App zu identifizieren, machen sie ansprechender und verbessern die Auffindbarkeit. Das App-Symbol der PWA erscheint auf Startbildschirmen, App-Launchern oder Suchergebnissen im App-Store. Die Größe des gerenderten Symbols und die Dateianforderungen variieren, je nachdem, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Im JSON-Objekt des Manifests gibt das `icons`-Mitglied ein Array von einem oder mehreren Symbolobjekten für die Verwendung in verschiedenen Kontexten an, von denen jedes ein `src`- und `sizes`-Mitglied sowie optionale `type`- und `purpose`-Mitglieder enthält. Jedes Symbolobjekt listet im `src` die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Mitglied bietet eine Liste von leerzeichengetrennten Größen, für die dieses bestimmte Bild verwendet werden soll oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

```js
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

Alle Symbole sollten denselben Look und Feel haben, um sicherzustellen, dass die Nutzer Ihre PWA erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symboldateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, schneiden Abschnitte ab oder "maskieren" das Symbol, um sich an das Benutzerinterface anzupassen, oder verkleinern und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der korrekt gerendert wird, wenn das Symbol als Kreis maskiert ist, ist das innere 80% der Bilddatei. Symbole werden als sicher zum Maskieren bezeichnet, wenn das `purpose`-Mitglied auf `maskable` gesetzt ist, wodurch das [Symbol als adaptiv definiert](https://web.dev/articles/maskable-icon) wird.

In Safari und daher für iOS und iPadOS, wenn Sie das [nicht standardisierte `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einschließen, haben diese Vorrang vor Manifest- erklärten Symbolen.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie erstellt haben.

In Anlehnung an die Wörter "Zyklus" und "Periode" von CycleTracker und die von uns gewählte grüne Themenfarbe könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unser kleinstes Symbol `circle.ico`, eine Symboldatei, die nur einen Kreis darstellt, der für das Satzzeichen und die Themenfarbe der App steht, wobei unsere Zwischenbilder `circle.svg`, `tire.svg` und `wheel.svg` mehr Details hinzufügen, indem sie von einem einfachen Kreis zu einem Reifen übergehen, wenn sie größer werden, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Zu beachten ist, dass das Entwerfen von Symbolen über den Rahmen dieses Tutorials hinausgeht.

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

```js
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

Sie haben nun eine vollständig nutzbare Manifestdatei. Es ist Zeit, sie zu speichern und in unserer HTML-Datei zu verlinken.

Die Dateierweiterung des Manifests kann das im Spezifikationsvorschlag angegebene `.webappmanifest` sein. Da es jedoch eine JSON-Datei ist, wird sie meistens mit der browserunterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern eine Manifestdatei, die im HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie noch nicht mit unserer externen Manifestdatei verlinkt ist. Um die externe JSON-Ressource einzuschließen, verwenden wir das `<link>`-Element mit dem `rel="manifest"`-Attribut und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um auf Stylesheets und bei PWAs auf die erforderliche Manifestdatei zu verlinken, wird aber auch verwendet, um [Seitenicons zu etablieren](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl "Favoriten"-Stil-Icons als auch Symbole für den Startbildschirm und Apps auf Mobilgeräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann in der `index.html`-Datei.

Optional können Sie auch ein Verknüpfungs-Symbol aus Ihrem HTML verlinken.

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

Sehen Sie die [`cycletracker.json`-Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und betrachten Sie den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub.

Mit einer Manifestdatei und bei Abruf von einer `https://` URL (oder `localhost`) werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihr Seite als PWA erkennen, und einige werden dazu auffordern, sie zu installieren. Um unsere PWA offline funktionsfähig zu machen, müssen wir noch einen Service Worker hinzufügen.

## Debuggen von Manifestdateien

Einige Entwicklertools von Browsern bieten Einblick in das App-Manifest. In Edge, Firefox und Chrome-Entwicklertools sind die Manifestmitglieder und ihre Werte unter dem "Application"-Panel sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Auf der rechten Seite steht App Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest App-Paneel bietet den Namen der Manifestdatei als Link sowie Abschnitte zu Identität, Präsentation und Icons.

![Die Identitäts- und Präsentations-Manifestmitglieder zusammen mit Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. Auf diesem Screenshot, obwohl wir die Mitglieder `orientation` oder `id` nicht eingeschlossen haben, sind sie aufgeführt. Das App-Paneel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: in diesem Beispiel erfahren wir, dass um eine App-ID anzugeben, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" gesetzt werden muss.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Icons.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir welche eingeschlossen, würden sie unter "Protocol Handlers" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools auf weitere Informationen zu diesem Thema.

![Die vier im Manifest-Datei enthaltenen Icons, mit entferntem Hintergrund, da "show only the minimum safe area for maskable icons is checked" ausgewählt ist.](manifest_icons.jpg)

Das Manifest-Panel enthält auch Einblick in den sicheren Bereich für maskierbare Icons und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erzeugten Bilder sind möglicherweise nicht Ihren Anforderungen entsprechend, aber die Liste der Bildgrößen, die für jedes OS produziert werden, zeigt die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklertools sind nützlich, um zu identifizieren, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Entwicklertools von Firefox Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, obwohl unser Manifest diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Icon, `any` an, wenn kein Zweck explizit festgesetzt ist.

![Das Manifest-Panel in den Entwicklertools von Firefox, zeigt Werte für die nicht enthaltenen Mitglieder dir, scope und id, und die Mitglieder lang und orientation ohne zugehörige Werte.](manifest_firefox.jpg)

## Als Nächstes

Um unsere PWA offline funktionsfähig zu machen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
