---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen der App bereitstellt, damit sie wie eine native App aussieht und sich verhält, wenn sie auf dem Gerät des Benutzers installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Icons und Präsentationsvorgaben.

Obwohl laut Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Vertriebskanäle [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members) für eine Web-App, um eine PWA zu sein. Durch die Angabe eines Namens oder Kurznamens, der Start-URL, eines Icons, das bestimmte Mindestanforderungen erfüllt, und des Anwendungs-Viewports, in dem die PWA angezeigt werden soll, erfüllt Ihre App die Manifest-Anforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere App zur Verfolgung des Menstruationszyklus könnte folgendermaßen aussehen:

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

Bevor wir die Manifestdatei speichern und sie in unsere HTML-Datei einbinden, können wir ein immer noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, das obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Bezeichnung neben dem Anwendungsicon usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` anzuzeigen. Er wird als Beschriftung für Icons auf Telefonbildschirmen verwendet, einschließlich im Dialogfeld "Zum Home-Bildschirm hinzufügen" auf iOS.

Wenn sowohl der `name` als auch der `short_name` vorhanden sind, wird der `name` in den meisten Fällen verwendet, während der `short_name` bei begrenztem Platz zur Anzeige des Anwendungsnamens verwendet wird.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung dessen, was die Anwendung tut. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den untenstehenden Text verwenden, oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und offline erlebten PWA wird im Manifest definiert. Präsentations-Manifestmitglieder umfassen `start_url` und `display`, sowie Mitglieder, die zur [Anpassung Ihrer App-Farben](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) verwendet werden können, einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, der die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einem eigenständigen Ansichtsmodus ähnlich ist, jedoch mit UI-Elementen zur Navigation, und `browser`, das die App in einem regulären Browserfenster öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied auslassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standard-[Farbe der Betriebssystem- und Browser-UI-Elemente](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color), wie die Statusleiste bei einigen mobilen Erlebnissen und der Anwendungsfenstertitel auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen wird. Um einen nahtlosen Übergang zwischen App-Start und Laden zu schaffen, wird empfohlen, die im App-CSS deklarierte [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Farbe als [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) zu verwenden.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine einzelne Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist die `background-color: #eeffee;` auf dem `body`-Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen nahtlosen Übergang vom Platzhalter-Erscheinungsbild zum App-Laden zu gewährleisten.

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

PWA-Icons helfen Benutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Auffindbarkeit. Das PWA-Anwendungsicon erscheint auf Startbildschirmen, in App-Launchern oder App-Store-Suchergebnissen. Die Größe des angezeigten Icons und die Dateianforderungen variieren je nach Ort und Anbieter. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts gibt das `icons`-Mitglied ein Array von einem oder mehreren Icon-Objekten zur Verwendung in verschiedenen Kontexten an, jedes mit einem `src`- und `sizes`-Mitglied und optionalen `type`- und `purpose`-Mitgliedern. Jedes Icon-Objekt auf `src` listet die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Mitglied bietet eine Liste von durch Leerzeichen getrennten Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Icons sollten denselben Look and Feel haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen. Je größer das Icon, desto detaillierter kann es sein. Während alle Icon-Dateien Quadrate sind, rendert einige Betriebssysteme unterschiedliche Formen, indem sie Abschnitte abschneiden oder das Icon "maskieren", um die Benutzeroberfläche zu erfüllen, oder das Icon verkleinern und zentrieren mit einem Hintergrund, wenn das Icon nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der in Ordnung gerendert wird, wenn das Icon als Kreis maskiert ist, ist die innere 80% der Bilddatei. Icons werden als sicher zur Maskierung gekennzeichnet, indem das `purpose`-Mitglied auf `maskable` gesetzt wird, was das [Icon als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und damit für iOS und iPadOS, wenn Sie das [nicht standardmäßige `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, haben diese Vorrang vor im Manifest deklarierten Icons.

### Aufgabe

Fügen Sie die Icons zur Manifestdatei hinzu, die Sie erstellt haben.

Mit den Worten "cycle" und "period" von CycleTracker und der grünen Farbthema, die wir gewählt haben, könnten unsere Icon-Bilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, und Icon-Datei, die nur einen Kreis darstellt, der das Satzzeichen und das Farbthema der App repräsentiert, mit unseren dazwischen liegenden Bildern, `circle.svg`, `tire.svg` und `wheel.svg`, die mehr Details hinzufügen, von einem einfachen Kreis zu einem Reifen, wenn er größer wird, wobei unsere größten Icons ein detailliertes Rad mit Speichen und Schatten sind. Dennoch ist das Entwerfen von Icons nicht Bestandteil dieses Tutorials.

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

{{EmbedLiveSample("PWA Ikonografie", 600, 250)}}

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

Sie haben nun eine voll funktionale Manifestdatei. Zeit, sie zu speichern und in unsere HTML-Datei einzubinden.

Die Dateierweiterung des Manifests kann `.webappmanifest` gemäß der Spezifikation sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der von Browsern unterstützten Erweiterung `.json` gespeichert.

PWAs erfordern, dass eine Manifestdatei aus dem HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, weil sie noch nicht auf unsere externe Manifest-JSON-Datei verweist. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element mit dem `rel="manifest"`-Attribut und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um auf Stylesheets zu verweisen, und bei PWAs auf die erforderliche Manifestdatei, kann aber auch verwendet werden, um [Seiten-Icons zu etablieren](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl "Favicons" und Icons für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie diese anschließend mit der `index.html`-Datei.

Optional können Sie auch ein Shortcut-Icon aus Ihrem HTML verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} der `index.html` könnte nun folgendermaßen aussehen:

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

Sehen Sie sich die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und überprüfen Sie den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub.

Mit einer Manifestdatei und wenn sie von einer `https://` URL (oder `localhost`) geladen wird, wird [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA erkennen, und einige werden eine Installation vorschlagen. Um unsere PWA offline funktionsfähig zu machen, müssen wir noch einen Service Worker hinzufügen.

## Debugging von Manifestdateien

Einige Browser-Entwickler-Tools bieten Einblicke in das App-Manifest. In den Entwickler-Tools von Edge, Firefox und Chrome sind die Manifestmitglieder und ihre Werte unter der "Application"-Leiste sichtbar.

![In den Entwickler-Tools enthält die linke Leiste Links zum Manifest. Die rechte Seite liest App Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Fenster bietet den Namen der Manifestdatei als Link, sowie Identitäts-, Präsentations- und Icon-Abschnitte.

![Die Identitäts- und Präsentations-Manifestmitglieder zusammen mit Werten, sofern vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. In diesem Screenshot, obwohl wir die `orientation`- oder `id`-Mitglieder nicht einbezogen haben, werden sie aufgeführt. Das App-Fenster kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: in diesem Beispiel lernen wir, dass um eine App-ID zu spezifizieren, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" gesetzt werden muss.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Icons.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige eingeschlossen, würden sie unter "Protokoll-Handler" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwickler-Tools auf weitere Informationen zu diesem Thema.

![Die vier im Manifest enthaltenen Icons, mit entferntem Hintergrund, da "nur den minimalen sicheren Bereich für maskierbare Icons anzeigen" angekreuzt ist.](manifest_icons.jpg)

Das Manifest-Panel bietet auch Einblick in den sicheren Bereich für maskierbare Icons sowie einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die produzierten Bilder mögen Ihren Anforderungen nicht entsprechen, aber die Liste der erzeugten Bildgrößen für jedes Betriebssystem demonstriert die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwickler-Tools sind nützlich, um zu identifizieren, welche Manifest-Mitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwickler-Tools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, selbst wenn unser Manifest diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Icon an und zeigt `any` an, wenn kein Zweck explizit festgelegt ist.

![Das Manifest-Panel in den Firefox-Entwickler-Tools zeigt Werte für die nicht eingeschlossenen dir-, scope- und id-Mitglieder, sowie die lang- und orientation-Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline funktionsfähig zu machen, müssen wir einen [Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), das wir ohne Framework umsetzen werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
