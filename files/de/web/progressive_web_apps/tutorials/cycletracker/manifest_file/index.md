---
title: "CycleTracker: Manifest und Symbole"
short-title: Manifest und Symbole
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Eigenschaften einer App bereitstellt. Dadurch kann die App nach der Installation auf dem Gerät der Benutzer wie eine native App aussehen und sich entsprechend verhalten. Das Manifest enthält Metadaten zu Ihrer App, darunter ihren Namen, ihre Icons und Vorgaben für ihre Darstellung.

Laut Spezifikation sind alle Manifest-Schlüssel (oder -Member) optional. Einige Browser, Betriebssysteme und App-Distributoren setzen jedoch [bestimmte Member voraus](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App als PWA gilt. Wenn Sie einen Namen oder Kurznamen, die Start-URL, ein Icon, das bestimmte Mindestanforderungen erfüllt, und die Art des Anwendungsfensters angeben, in dem die PWA angezeigt werden soll, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimale Manifestdatei für unsere App zur Verfolgung des Menstruationszyklus könnte so aussehen:

```json
{
  "short_name": "CT",
  "start_url": "./",
  "icons": [
    {
      "src": "icon-512.png",
      "sizes": "512x512"
    }
  ],
  "display": "standalone"
}
```

Bevor wir die Manifestdatei speichern und aus unserer HTML-Datei darauf verlinken, können wir ein weiterhin kurzes, aber aussagekräftigeres JSON-Objekt erstellen, das Identität, Darstellung und Symbole der PWA definiert. Das obige Beispiel würde funktionieren. Sehen wir uns dennoch die Member darin sowie einige weitere Member an, mit denen sich das Erscheinungsbild unserer CycleTracker-PWA genauer festlegen lässt.

## Identität der App

Um Ihre PWA zu benennen, muss das JSON-Objekt den Member `name` oder `short_name` oder beide enthalten. Es kann außerdem eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Er wird beispielsweise verwendet, wenn das Betriebssystem Anwendungen auflistet, und als Beschriftung neben dem Anwendungs-Icon.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der angezeigt wird, wenn für `name` nicht genügend Platz vorhanden ist. Er wird als Beschriftung für Icons auf Smartphone-Bildschirmen verwendet, auch im iOS-Dialog „Zum Home-Bildschirm hinzufügen“.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird in den meisten Fällen `name` verwendet. `short_name` kommt zum Einsatz, wenn nur wenig Platz für den Anwendungsnamen verfügbar ist.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Eine Erklärung, was die Anwendung tut. Sie bietet eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} von Zweck und Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den unten stehenden Text oder zurückhaltendere beziehungsweise aussagekräftigere Werte sowie eine Beschreibung Ihrer Wahl verwenden.

### Beispiellösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## Darstellung der App

Das Erscheinungsbild einer installierten PWA und ihrer Offline-Ansicht wird im Manifest definiert. Zu den Manifest-Membern für die Darstellung gehören `start_url` und `display` sowie Member, mit denen Sie [die Farben Ihrer App anpassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) können, darunter `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, die geöffnet wird, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App. Dazu gehören `fullscreen`, `standalone`, bei dem die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) angezeigt wird, `minimal-ui`, das einer eigenständigen Ansicht ähnelt, aber UI-Elemente zur Steuerung der Navigation enthält, und `browser`, bei dem die App in einer regulären Browseransicht geöffnet wird.

Außerdem gibt es den Member [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation), der die Standardausrichtung der PWA als `portrait` oder `landscape` festlegt. Da unsere App in beiden Ausrichtungen gut funktioniert, lassen wir diesen Member weg.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standard-[farbe von UI-Elementen des Betriebssystems und Browsers](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color), etwa der Statusleiste auf manchen Mobilgeräten und der Titelleiste der Anwendung auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Für einen fließenden Übergang zwischen dem Starten und dem vollständigen Laden der App empfiehlt es sich, den {{cssxref("&lt;color&gt;")}}-Wert zu verwenden, der für {{cssxref("background-color")}} der App festgelegt ist.

### Aufgabe

Ergänzen Sie die Manifestdatei aus der vorherigen Aufgabe um Angaben zur Darstellung.

### Beispiellösung

Da die Beispielanwendung aus einer einzelnen Seite in einem Unterverzeichnis besteht, können wir `"./"` als `start_url` verwenden oder den Member ganz weglassen. Aus demselben Grund können wir die App ohne Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist `background-color: #eeffee;` für den `body`-Elementselektor festgelegt. Wir verwenden `#eeffee`, um einen fließenden Übergang von der Platzhalterdarstellung zur geladenen App zu gewährleisten.

```json
{
  "name": "...",
  "short_name": "...",
  "description": "...",
  "start_url": "./",
  "theme_color": "#eeffee",
  "background_color": "#eeffee",
  "display": "standalone"
}
```

## App-Icons

PWA-Icons helfen Benutzern, Ihre App wiederzuerkennen, machen sie optisch ansprechender und verbessern ihre Auffindbarkeit. Das PWA-App-Icon erscheint auf Startbildschirmen, in App-Launchern oder in den Suchergebnissen von App-Stores. Die Größe des dargestellten Icons und die Anforderungen an die Datei hängen davon ab, wo und durch wen es angezeigt wird. Im Manifest legen Sie die Bilder fest.

Im JSON-Objekt des Manifests gibt der Member `icons` ein Array aus einem oder mehreren Icon-Objekten für unterschiedliche Kontexte an. Jedes Objekt enthält die Member `src` und `sizes` sowie optional `type` und `purpose`. Der Member `src` jedes Icon-Objekts gibt die Quelldatei eines einzelnen Bildes an. `sizes` enthält eine durch Leerzeichen getrennte Liste der Größen, für die dieses Bild verwendet werden soll, oder das Schlüsselwort `any`. Der Wert entspricht dem des Attributs [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) des Elements {{HTMLElement("link")}}. Der Member `type` gibt den MIME-Typ des Bildes an.

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

Alle Icons sollten ein einheitliches Erscheinungsbild haben, damit Benutzer Ihre PWA wiedererkennen. Je größer ein Icon ist, desto mehr Details kann es enthalten. Zwar sind alle Icon-Dateien quadratisch, manche Betriebssysteme stellen sie jedoch in anderen Formen dar: Sie schneiden Teile ab oder „maskieren“ das Icon, damit es zur Benutzeroberfläche passt. Ist das Icon nicht maskierbar, wird es unter Umständen verkleinert und auf einem Hintergrund zentriert. Die [Safe Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking) – der Bereich, der auch bei einer kreisförmigen Maskierung korrekt dargestellt wird – umfasst die inneren 80 % der Bilddatei. Mit dem Member `purpose` werden Icons als sicher maskierbar gekennzeichnet: Der Wert `maskable` definiert das [Icon als adaptiv](https://web.dev/articles/maskable-icon).

In Safari und damit auch unter iOS und iPadOS haben Icons Vorrang vor den im Manifest deklarierten Icons, wenn Sie über {{HTMLElement("link")}} im {{HTMLElement("head")}} des HTML-Dokuments ein [nicht standardisiertes `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) einbinden.

### Aufgabe

Fügen Sie der Manifestdatei, an der Sie arbeiten, die Icons hinzu.

Wir können mit den Bedeutungen von „cycle“ und „period“ im Namen CycleTracker sowie der gewählten grünen Designfarbe spielen: Unsere Icon-Bilder könnten hellgrüne Quadrate mit einem grünen Kreis sein. Das kleinste Icon, `circle.ico`, wäre lediglich ein Kreis, der zugleich einen Punkt als Satzzeichen und die Designfarbe der App darstellt. Die dazwischenliegenden Bilder `circle.svg`, `tire.svg` und `wheel.svg` könnten mit zunehmender Größe immer mehr Details zeigen – von einem einfachen Kreis über einen Reifen bis hin zu einem Rad. Die größten Icons wären dann detaillierte Räder mit Speichen und Schatten. Die Gestaltung von Icons geht allerdings über den Rahmen dieses Tutorials hinaus.

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

### Beispiellösung

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

Sie haben jetzt eine vollständig verwendbare Manifestdatei. Nun müssen Sie sie speichern und aus unserer HTML-Datei darauf verlinken.

Als Dateiendung für das Manifest kann die in der Spezifikation vorgeschlagene Endung `.webappmanifest` verwendet werden. Da es sich jedoch um eine JSON-Datei handelt, wird es meistens mit der von Browsern unterstützten Endung `.json` gespeichert.

Bei PWAs muss im HTML-Dokument der App auf eine Manifestdatei verlinkt werden. Unsere App ist voll funktionsfähig, aber noch keine PWA, weil sie noch nicht auf unsere externe JSON-Manifestdatei verweist. Um die externe JSON-Ressource einzubinden, verwenden wir das Element `<link>` mit dem Attribut `rel="manifest"` und setzen das Attribut `href` auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das Element `<link>` wird meistens verwendet, um Stylesheets und bei PWAs die erforderliche Manifestdatei einzubinden. Es dient unter anderem aber auch dazu, [Website-Icons festzulegen](/de/docs/Web/HTML/Reference/Attributes/rel#icon) – sowohl Icons im Stil eines Favicons als auch Icons für den Startbildschirm und für Apps auf Mobilgeräten.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die Endung `.webmanifest` verwenden, setzen Sie `type="application/manifest+json"`, falls Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den vorherigen Schritten erstellt haben, und verlinken Sie sie aus der Datei `index.html`.

Optional können Sie aus Ihrem HTML auch auf ein Shortcut-Icon verlinken.

### Beispiellösung

Der {{HTMLelement("head")}} von `index.html` könnte nun etwa so aussehen:

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

Sehen Sie sich die [Datei `cycletracker.json`](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) und den [Quellcode des Projekts](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und beim Laden über eine `https://`-URL (oder `localhost`) erkennen [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA; einige bieten dann die Installation an. Damit unsere PWA offline funktioniert, müssen wir noch einen Service Worker hinzufügen.

## Manifestdateien debuggen

Die Entwicklertools einiger Browser geben Einblick in das App-Manifest. In den Entwicklertools von Edge, Firefox und Chrome sind die Manifest-Member und ihre Werte im Bereich „Application“ sichtbar.

![In den Entwicklertools enthält der linke Bereich Links zum Manifest. Rechts steht „App Manifest“; der Dateiname ist ein Link zur JSON-Datei.](debugger_devtools.jpg)

Der Bereich „App Manifest“ zeigt den Namen der Manifestdatei als Link sowie Abschnitte zu Identität, Darstellung und Icons.

![Die Manifest-Member für Identität und Darstellung sowie ihre Werte, sofern vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifest-Member werden zusammen mit allen angegebenen Werten angezeigt. In diesem Screenshot sind `orientation` und `id` aufgeführt, obwohl wir diese Member nicht angegeben haben. Im Bereich „Application“ können Sie also nicht nur die Manifest-Member einsehen, sondern auch etwas dazulernen: In diesem Beispiel erfahren wir, dass wir das Feld `id` auf „/“ setzen müssen, um eine App-ID anzugeben, die der aktuellen Identität entspricht.

Chrome und Edge zeigen außerdem Fehler und Warnungen, Protokoll-Handler sowie Informationen an, die bei der Verbesserung des Manifests und der Icons helfen.

Unsere Web-App hat keine Protokoll-Handler; dieses Thema wird in diesem Tutorial nicht behandelt. Hätten wir welche angegeben, würden sie unter „Protocol Handlers“ erscheinen. Da dieser Abschnitt leer ist, verlinken die Entwicklertools auf weiterführende Informationen zum Thema.

![Die vier in der Manifestdatei angegebenen Icons, deren Hintergrund ausgeblendet ist, weil „show only the minimum safe area for maskable icons“ aktiviert ist.](manifest_icons.jpg)

Der Manifestbereich zeigt außerdem Informationen zur Safe Zone maskierbarer Icons und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt mehr als 100 quadratische PNG-Bilder für Android, Apple-Betriebssysteme und Windows sowie ein JSON-Objekt mit einer Liste aller Bilder und ihrer Größen. Die erzeugten Bilder entsprechen möglicherweise nicht Ihren Anforderungen. Die Liste der Bildgrößen für die einzelnen Betriebssysteme verdeutlicht jedoch, wie vielfältig die Orte und Darstellungsformen von PWAs sind.

Die Entwicklertools helfen dabei festzustellen, welche Manifest-Member unterstützt werden. Beachten Sie, dass die Firefox-Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` enthalten, obwohl diese Member in unserer Manifestdatei fehlen. Firefox zeigt außerdem für jedes Icon den Wert des Members `purpose` an. Ist `purpose` nicht ausdrücklich festgelegt, wird `any` angezeigt.

![Der Manifestbereich der Firefox-Entwicklertools zeigt Werte für die nicht angegebenen Member dir, scope und id sowie die Member lang und orientation ohne zugehörige Werte.](manifest_firefox.jpg)

## Als Nächstes

Damit unsere PWA offline funktioniert, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers). Das erledigen wir ohne Framework.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
