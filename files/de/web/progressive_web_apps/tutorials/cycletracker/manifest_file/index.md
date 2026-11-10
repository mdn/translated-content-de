---
title: "CycleTracker: Manifest und Icons"
short-title: Manifest und Icons
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Die Manifestdatei einer PWA ist eine JSON-Datei, die Informationen über die App bereitstellt. Dadurch kann sie nach der Installation auf dem Gerät der Benutzerin oder des Benutzers wie eine native App aussehen und sich auch so verhalten. Das Manifest enthält Metadaten zur App, darunter ihren Namen, ihre Icons und Vorgaben für ihre Darstellung.

Laut Spezifikation sind zwar alle Schlüssel (oder Eigenschaften) eines Manifests optional. Einige Browser, Betriebssysteme und App-Anbieter verlangen jedoch [bestimmte Eigenschaften](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App als PWA gilt. Wenn Sie einen Namen oder Kurznamen, die Start-URL, ein Icon, das bestimmte Mindestanforderungen erfüllt, und die Art der Anwendungsansicht angeben, in der die PWA angezeigt werden soll, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimale Manifestdatei für unsere App zur Aufzeichnung des Menstruationszyklus könnte so aussehen:

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

Bevor wir die Manifestdatei speichern und sie in unserer HTML-Datei verlinken, können wir ein weiterhin kurzes, aber aussagekräftigeres JSON-Objekt erstellen. Damit legen wir Identität, Darstellung und Icons der PWA fest. Das obige Beispiel würde funktionieren. Sehen wir uns aber zunächst seine Eigenschaften und einige weitere an, mit denen die Manifestdatei das Erscheinungsbild unserer CycleTracker-PWA genauer definieren kann.

## Identität der App

Um Ihre PWA zu benennen, muss das JSON eine `name`- oder `short_name`-Eigenschaft oder beide enthalten. Es kann außerdem eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Er wird beispielsweise verwendet, wenn das Betriebssystem Anwendungen auflistet oder eine Beschriftung neben dem App-Icon anzeigt.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name, der angezeigt wird, wenn für `name` nicht genügend Platz vorhanden ist. Er dient als Beschriftung für Icons auf Smartphone-Bildschirmen, auch im Dialog „Zum Home-Bildschirm hinzufügen“ unter iOS.

Sind sowohl `name` als auch `short_name` vorhanden, wird in den meisten Fällen `name` verwendet. `short_name` kommt zum Einsatz, wenn der Platz für den App-Namen begrenzt ist.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Eine Erklärung, was die Anwendung tut. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} ihres Zwecks und ihrer Funktion.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den folgenden Text, zurückhaltendere oder ausführlichere Werte sowie eine Beschreibung Ihrer Wahl verwenden.

### Beispiellösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## Darstellung der App

Das Erscheinungsbild einer installierten PWA und ihrer Offline-Ansicht wird im Manifest festgelegt. Zu den Eigenschaften für die Darstellung gehören `start_url` und `display` sowie Eigenschaften, mit denen Sie [die Farben Ihrer App anpassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) können, darunter `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, die geöffnet wird, wenn eine Benutzerin oder ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App. Zu den möglichen Werten gehören `fullscreen`, `standalone`, bei dem die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) angezeigt wird, `minimal-ui`, das einer eigenständigen Ansicht ähnelt, aber Bedienelemente für die Navigation enthält, und `browser`, das die App in einer regulären Browseransicht öffnet.

Daneben gibt es die Eigenschaft [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation), die die Standardausrichtung der PWA als `portrait` oder `landscape` festlegt. Da unsere App in beiden Ausrichtungen gut funktioniert, lassen wir diese Eigenschaft weg.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standardfarbe für [UI-Elemente des Betriebssystems und Browsers](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color), etwa die Statusleiste in manchen mobilen Ansichten und die Titelleiste der Anwendung auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Für einen nahtlosen Übergang zwischen dem Start und dem Laden der App empfiehlt es sich, den {{cssxref("&lt;color&gt;")}}-Wert zu verwenden, der für {{cssxref("background-color")}} der App festgelegt ist.

### Aufgabe

Ergänzen Sie die Manifestdatei aus der vorherigen Aufgabe um Angaben zur Darstellung.

### Beispiellösung

Da die Beispielanwendung aus einer einzelnen Seite in einem Unterverzeichnis besteht, können wir `"./"` als `start_url` verwenden oder die Eigenschaft ganz weglassen. Aus demselben Grund können wir die App ohne Browseroberfläche anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist `background-color: #eeffee;` für den `body`-Elementselektor festgelegt. Wir verwenden `#eeffee`, um einen nahtlosen Übergang vom Platzhalter zum geladenen Erscheinungsbild der App zu gewährleisten.

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

PWA-Icons helfen Benutzerinnen und Benutzern, Ihre App wiederzuerkennen. Sie machen sie optisch ansprechender und leichter auffindbar. Das Icon einer PWA erscheint auf Startbildschirmen, in App-Launchern oder in Suchergebnissen von App-Stores. Die Größe des dargestellten Icons und die Anforderungen an die Datei hängen davon ab, wo und von wem es angezeigt wird. Die Bilder legen Sie im Manifest fest.

Im JSON-Objekt des Manifests gibt die Eigenschaft `icons` ein Array aus einem oder mehreren Icon-Objekten für unterschiedliche Kontexte an. Jedes Objekt enthält `src` und `sizes` sowie optional `type` und `purpose`. `src` gibt die Quelldatei eines einzelnen Bildes an. `sizes` enthält eine durch Leerzeichen getrennte Liste der Größen, für die dieses Bild verwendet werden soll, oder das Schlüsselwort `any`. Der Wert hat dasselbe Format wie das Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) des {{HTMLElement("link")}}-Elements. `type` gibt den MIME-Typ des Bildes an.

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

Alle Icons sollten ein einheitliches Erscheinungsbild haben, damit Benutzerinnen und Benutzer Ihre PWA wiedererkennen. Größere Icons können jedoch mehr Details enthalten. Zwar sind alle Icon-Dateien quadratisch, doch manche Betriebssysteme stellen sie in anderen Formen dar: Sie schneiden Bereiche ab oder „maskieren“ das Icon, damit es zur Benutzeroberfläche passt. Ist das Icon nicht maskierbar, wird es möglicherweise verkleinert und mit einem Hintergrund zentriert. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking) ist der innere Bereich von 80 % der Bilddatei, der auch dann korrekt dargestellt wird, wenn das Icon kreisförmig maskiert wird. Mit der Eigenschaft `purpose` werden Icons als sicher maskierbar gekennzeichnet. Der Wert `maskable` definiert das [Icon als adaptiv](https://web.dev/articles/maskable-icon).

In Safari und damit auch unter iOS und iPadOS haben [nicht standardisierte `apple-touch-icon`-Angaben](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) Vorrang vor den im Manifest definierten Icons, wenn Sie sie über {{HTMLElement("link")}} im {{HTMLElement("head")}} des HTML-Dokuments einbinden.

### Aufgabe

Fügen Sie der Manifestdatei, an der Sie gearbeitet haben, Icons hinzu.

Als Anspielung auf die Wörter „cycle“ und „period“ im Namen CycleTracker und auf die gewählte grüne Designfarbe könnten alle unsere Icon-Bilder hellgrüne Quadrate mit einem grünen Kreis sein. Die kleinste Datei, `circle.ico`, könnte nur einen Kreis enthalten, der den Satzpunkt und die Designfarbe der App aufgreift. Die Bilder dazwischen – `circle.svg`, `tire.svg` und `wheel.svg` – könnten mit zunehmender Größe mehr Details zeigen: vom einfachen Kreis über einen Reifen bis hin zum größten Icon, einem detaillierten Rad mit Speichen und Schatten. Das Entwerfen von Icons geht allerdings über den Rahmen dieses Tutorials hinaus.

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

{{EmbedLiveSample("app_iconography", 600, 250)}}

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

Sie haben jetzt eine vollständig nutzbare Manifestdatei. Speichern Sie sie und verlinken Sie sie in unserer HTML-Datei.

Die Dateiendung des Manifests kann, wie in der Spezifikation vorgeschlagen, `.webappmanifest` sein. Da es sich um eine JSON-Datei handelt, wird es jedoch meist mit der von Browsern unterstützten Endung `.json` gespeichert.

Bei PWAs muss die Manifestdatei im HTML-Dokument der App verlinkt sein. Unsere App ist zwar voll funktionsfähig, aber noch keine PWA, weil sie noch nicht auf unsere externe JSON-Manifestdatei verweist. Zum Einbinden der externen JSON-Ressource verwenden wir das `<link>`-Element mit dem Attribut `rel="manifest"` und setzen das Attribut `href` auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird meist zum Verlinken von Stylesheets und bei PWAs auch der erforderlichen Manifestdatei verwendet. Unter anderem dient es außerdem dazu, [Website-Icons festzulegen](/de/docs/Web/HTML/Reference/Attributes/rel#icon), sowohl Favicons als auch Icons für den Startbildschirm und Apps auf Mobilgeräten.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die Endung `.webmanifest` verwenden und Ihr Server den entsprechenden MIME-Typ nicht unterstützt, setzen Sie `type="application/manifest+json"`.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie anschließend in der Datei `index.html`.

Optional können Sie in Ihrem HTML auch ein Shortcut-Icon verlinken.

### Beispiellösung

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

Sehen Sie sich die [Datei `cycletracker.json`](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) und den [Quellcode des Projekts](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und beim Laden über eine `https://`-URL (oder `localhost`) erkennen die [meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA. Einige bieten dann an, sie zu installieren. Damit unsere PWA auch offline funktioniert, müssen wir noch einen Service Worker hinzufügen.

## Manifestdateien debuggen

Einige Browser-Entwicklertools geben Einblick in das App-Manifest. In den Entwicklertools von Edge, Firefox und Chrome sind die Eigenschaften des Manifests und ihre Werte im Bereich „Application“ sichtbar.

![In den Entwicklertools enthält der linke Bereich Links zum Manifest. Rechts steht „App Manifest“; der Dateiname ist ein Link zur JSON-Datei.](debugger_devtools.jpg)

Der Bereich „App Manifest“ zeigt den Namen der Manifestdatei als Link sowie Abschnitte für Identität, Darstellung und Icons.

![Die Eigenschaften für Identität und Darstellung im Manifest mit ihren Werten, sofern vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifest-Eigenschaften werden zusammen mit ihren Werten angezeigt. Obwohl wir in diesem Screenshot weder `orientation` noch `id` angegeben haben, sind beide Eigenschaften aufgeführt. Der App-Bereich hilft Ihnen, die Manifest-Eigenschaften zu prüfen und mehr über sie zu erfahren: In diesem Beispiel zeigt er, dass Sie das Feld `id` auf „/“ setzen müssen, um eine zur aktuellen Identität passende App-ID festzulegen.

Chrome und Edge zeigen außerdem Fehler, Warnungen, Protocol Handler und Informationen zur Verbesserung des Manifests und der Icons an.

Unsere Web-App hat keine Protocol Handler; dieses Thema wird im Tutorial nicht behandelt. Hätten wir welche hinzugefügt, würden sie unter „Protocol Handlers“ erscheinen. Da dieser Abschnitt leer ist, verlinken die Entwicklertools stattdessen auf weitere Informationen zum Thema.

![Die vier Icons aus der Manifestdatei. Der Hintergrund ist ausgeblendet, weil die Option „Nur den minimalen sicheren Bereich für maskierbare Icons anzeigen“ aktiviert ist.](manifest_icons.jpg)

Der Manifestbereich bietet auch Informationen zum sicheren Bereich maskierbarer Icons und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt mehr als 100 quadratische PNG-Bilder für Android, Apple-Betriebssysteme und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erzeugten Bilder entsprechen möglicherweise nicht Ihren Anforderungen. Die Liste der Bildgrößen für die einzelnen Betriebssysteme verdeutlicht aber, wie unterschiedlich die Umgebungen sind, in denen PWAs bereitgestellt werden können.

Die Entwicklertools helfen Ihnen auch zu erkennen, welche Manifest-Eigenschaften unterstützt werden. Beachten Sie, dass die Firefox-Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` anzeigen, obwohl unsere Manifestdatei diese Eigenschaften nicht enthält. Firefox zeigt außerdem für jedes Icon den Wert von `purpose` an. Ist die Eigenschaft nicht ausdrücklich festgelegt, wird `any` angezeigt.

![Der Manifestbereich in den Firefox-Entwicklertools zeigt Werte für die nicht angegebenen Eigenschaften dir, scope und id sowie die Eigenschaften lang und orientation ohne zugehörige Werte.](manifest_firefox.jpg)

## Als Nächstes

Damit unsere PWA offline funktioniert, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers). Das werden wir ohne Framework tun.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
