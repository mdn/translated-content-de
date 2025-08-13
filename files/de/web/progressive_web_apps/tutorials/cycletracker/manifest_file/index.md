---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen der App bereitstellt, damit sie wie eine native App aussieht und sich verhält, wenn sie auf dem Gerät des Benutzers installiert wird. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und Darstellungsvorschriften.

Obwohl laut der Spezifikation alle Manifestschlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Vertriebe [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App als PWA gilt. Durch das Einfügen eines Namens oder Kurznamens, der Start-URL, eines Icons, das einige Mindestanforderungen erfüllt, und des Anwendungs-Viewport-Typs, in dem die PWA angezeigt werden soll, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere App zur Verfolgung des Menstruationszyklus könnte so aussehen:

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

Bevor Sie die Manifestdatei speichern und von unserer HTML-Datei aus verlinken, können wir ein immer noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder diskutieren, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` anzuzeigen. Es wird als Beschriftung für Symbole auf Handybildschirmen verwendet, einschließlich im Dialogfeld "Zum Home-Bildschirm hinzufügen" auf iOS.

Wenn sowohl der `name` als auch der `short_name` vorhanden sind, wird der `name` in den meisten Fällen verwendet, während der `short_name` verwendet wird, wenn der Platz zur Anzeige des Anwendungsnamens begrenzt ist.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung, was die Anwendung macht. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den untenstehenden Text oder dezentere oder ausführlichere Werte und eine Beschreibung Ihrer Wahl verwenden.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Darstellung

Das Aussehen oder die Präsentation der installierten und Offline-Erfahrungen einer PWA wird im Manifest definiert. Präsentationsmanifestmitglieder umfassen `start_url` und `display` und Mitglieder, mit denen Sie [Ihre App-Farben anpassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) können, einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, das die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einem eigenständigen Modus ähnelt, aber mit Bedienelementen für die Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, lassen wir dieses Mitglied weg.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standard-[Farbe von Betriebssystem- und Browser-UI-Elementen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie der Statusleiste in einigen mobilen Erlebnissen und der Anwendungstitelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen sanften Übergang zwischen dem Starten der App und dem Laden zu schaffen, wird empfohlen, das `<color>`, das als die [`background-color`](/de/docs/Web/CSS/background-color) der App deklariert ist, zu verwenden.

### Aufgabe

Fügen Sie die Präsentationsdefinitionen in die Manifestdatei ein, die Sie in der vorherigen Aufgabe erstellt haben.

### Beispiel-Lösung

Da die Beispielanwendung eine Einzelseitige ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Browser-UI anzeigen, indem wir das `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) wird das `background-color: #eeffee;` auf dem `body`-Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen sanften Übergang vom Platzhalter-Erscheinungsbild zum App-Laden sicherzustellen.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie optisch ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Home-Bildschirmen, App-Launchern oder Suchergebnissen im App-Store. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Das Manifest ist der Ort, an dem Sie Ihre Bilder definieren.

Innerhalb des Manifest-JSON-Objekts gibt das `icons`-Mitglied ein Array aus einem oder mehreren Symbolobjekten an, die in verschiedenen Kontexten verwendet werden sollen, jedes mit einem `src`- und `sizes`-Mitglied und optionalen `type`- und `purpose`-Mitgliedern. Jedes Symbolobjekt gibt in `src` die Quelle einer einzelnen Bilddatei an. Das `sizes`-Mitglied liefert eine liste der durch Leerzeichen getrennten Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten das gleiche Aussehen und Gefühl haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Obwohl alle Symboldateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, indem sie Abschnitte abschneiden oder das Symbol "maskieren", um es an die Benutzeroberfläche anzupassen, oder das Symbol verkleinern und mit einem Hintergrund zentrieren, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), das Gebiet, das okay gerendert wird, wenn das Symbol als Kreis maskiert ist, ist die innere 80% der Bilddatei. Symbole werden als sicher zum Maskieren gekennzeichnet durch das `purpose`-Mitglied, das, wenn es auf `maskable` gesetzt ist, das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und daher für iOS und iPadOS, wenn Sie das [nicht-standardmäßige `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, haben diese Vorrang vor den im Manifest deklarierten Symbolen.

### Aufgabe

Fügen Sie die Symbole in die Manifestdatei ein, die Sie erstellt haben.

Mit den Worten "Zyklus" und "Periode" von CycleTracker und der gewählten grünen Themenfarbe könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unser kleinstes Symbol `circle.ico`, eine Symboldatei, die nur einen Kreis darstellt, der das Satzzeichen der Periode und die Themenfarbe der App anzeigt, mit unseren dazwischenliegenden Bildern `circle.svg`, `tire.svg` und `wheel.svg`, die mehr Details hinzufügen, indem sie von einem einfachen Kreis zu einem Reifen werden, wenn sie größer werden, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Dennoch liegt das Design von Symbolen außerhalb des Umfangs dieses Tutorials.

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

{{EmbedLiveSample("PWA ikonography", 600, 250)}}

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

Sie haben nun eine vollständig nutzbare Manifestdatei. Zeit, sie zu speichern und von unserer HTML-Datei aus zu verlinken.

Die Dateierweiterung des Manifests kann die Spezifikationsvorschlag `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der von Browsern unterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern, dass eine Manifestdatei von der HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, die aber noch keine PWA ist, weil sie noch nicht zu unserer externen Manifest-JSON-Datei verlinkt. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element, mit dem `rel="manifest"`-Attribut, und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um auf Stylesheets zu verlinken und bei PWAs auf die erforderliche Manifestdatei, aber es wird auch verwendet, um [Standortsymbole zu erstellen](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl "Favicon"-Stil-Symbole als auch Symbole für den Home-Bildschirm und Apps auf mobilen Geräten), neben anderen Dingen.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den oben genannten Schritten erstellt haben, dann verlinken Sie sie von der `index.html`-Datei.

Optional können Sie auch ein Shortcut-Symbol von Ihrem HTML aus verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} von `index.html` könnte jetzt ähnlich aussehen wie:

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

Sehen Sie sich die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und sehen Sie sich den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und wenn sie von einer `https://` URL (oder `localhost`) geladen wird, wird [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Seite als PWA erkennen und einige werden vorschlagen, sie zu installieren. Um unsere PWA offline arbeiten zu lassen, müssen wir noch einen Service Worker hinzufügen.

## Debugging von Manifest-Dateien

Einige Entwicklerwerkzeuge von Browsern bieten Einsichten in das App-Manifest. In den Entwicklerwerkzeugen von Edge, Firefox und Chrome sind die Manifestmitglieder und ihre Werte im "Anwendung"-Bereich sichtbar.

![In den Entwicklerwerkzeugen enthält das linke Panel Links zum Manifest. Die rechte Seite zeigt App-Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Panel bietet den Namen der Manifestdatei als Link sowie Abschnitte zur Identität, Präsentation und zu Symbolen.

![Die Identitäts- und Präsentationsmanifestmitglieder zusammen mit den Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden zusammen mit allen eingeschlossenen Werten angezeigt. In diesem Screenshot, obwohl wir die `orientation`- oder `id`-Mitglieder nicht aufgenommen haben, sind sie aufgelistet. Das App-Panel kann verwendet werden, um die Manifestmitglieder anzuzeigen und sogar zu lernen: In diesem Beispiel erfahren wir, dass, um eine App-ID anzugeben, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" gesetzt werden sollte.

Chrome und Edge bieten auch Fehler- und Warnmeldungen, Protokollhandler und Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige einbezogen, wären sie unter "Protokoll-Handler" zu finden. Da dieser Abschnitt leer ist, verlinken die Entwicklerwerkzeuge zu weiteren Informationen zu diesem Thema.

![Die vier in der Manifestdatei enthaltenen Symbole, mit entferntem Hintergrund, da "nur das minimale sichere Gebiet für maskierbare Symbole anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel bietet auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildergenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erzeugten Bilder erfüllen möglicherweise nicht Ihre Bedürfnisse, aber die Liste der Bildgrößen, die für jedes Betriebssystem erzeugt werden, zeigt die Vielfalt, in der und wie PWAs bereitgestellt werden können.

Die Entwicklerwerkzeuge sind nützlich, um zu erkennen, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Entwicklerwerkzeuge von Firefox Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, obwohl unsere Manifestdatei diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Symbol an und zeigt `any` an, wenn kein Zweck explizit festgelegt ist.

![Das Manifest-Panel in den Entwicklerwerkzeugen von Firefox, zeigt Werte für nicht enthaltene dir-, scope- und id-Mitglieder sowie die lang- und orientation-Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Als Nächstes

Um unsere PWA offline arbeiten zu lassen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne die Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
