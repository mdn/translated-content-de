---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifeste-Datei ist eine JSON-Datei, die Informationen über die Funktionen dieser App bereitstellt, um sie wie eine native App aussehen und funktionieren zu lassen, wenn sie auf dem Gerät des Benutzers installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und präsentationeller Richtlinien.

Obwohl gemäß der Spezifikation alle Schlüssel oder Mitglieder des Manifests optional sind, haben einige Browser, Betriebssysteme und App-Distributoren [spezifische Mitglieder erforderlich](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App eine PWA ist. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Icon, das einige Mindestanforderungen erfüllt, und den Anwendungstyp angeben, in dem die PWA angezeigt werden soll, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifeste-Datei für unsere App zur Verfolgung von Menstruationszyklen könnte wie folgt aussehen:

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

Bevor wir die Manifeste-Datei speichern und von unserer HTML-Datei darauf verlinken, können wir ein nach wie vor kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das Obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und ein paar andere Mitglieder besprechen, die es Manifeste-Dateien ermöglichen, das Erscheinungsbild unserer CycleTracker PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Manifest/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Bezeichnung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Manifest/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Er wird als Bezeichnung für Symbole auf Telefonscreens verwendet, einschließlich im "Zum Home-Bildschirm hinzufügen" Dialog auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird in den meisten Fällen `name` verwendet, wobei `short_name` verwendet wird, wenn nur begrenzter Platz zur Anzeige des Anwendungsnamens vorhanden ist.

- [`description`](/de/docs/Web/Manifest/description)
  - : Erklärung dessen, was die Anwendung tut. Es bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifeste-Datei. Sie können den unten stehenden Text oder diskretere oder beschreibende Werte sowie eine Beschreibung Ihrer Wahl verwenden.

### Beispiel-Lösung

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und Offline-Erlebnisse einer PWA werden im Manifest definiert. Präsentationsmanifestmitglieder umfassen `start_url` und `display`, sowie Mitglieder, die verwendet werden können, um [Anpassung Ihrer App-Farben](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`, festzulegen.

- [`start_url`](/de/docs/Web/Manifest/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Manifest/display)
  - : Kontrolliert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, das die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einem unabhängigen Blick ähnelt, jedoch mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Manifest/orientation) Mitglied, das die Standardorientierung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Orientierungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Manifest/theme_color)
  - : Die Standard-[Farbe von Betriebssystem- und Browser-UI-Elementen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie der Statusleiste bei einigen mobilen Erlebnissen und der Anwendungstitelleiste bei Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Manifest/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen reibungslosen Übergang zwischen dem App-Start und dem Laden zu schaffen, wird empfohlen, die im `<color>` Folge CSS deklarierte [Hintergrundfarbe](/de/docs/Web/CSS/background-color) der App zu verwenden.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifeste-Datei hinzu, die Sie in der vorherigen Aufgabe begonnen haben zu erstellen.

### Beispiel-Lösung

Da die Beispielanwendung eine einzelne Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) wird die `background-color: #efe;` auf dem `body`-Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang von der Platzhaltererscheinung zum App-Laden sicherzustellen.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie optisch ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Home-Bildschirmen, App-Startern oder in Suchergebnissen im App-Store. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Das Manifest ist, wo Sie Ihre Bilder definieren.

Innerhalb des Manifeste-JSON-Objekts gibt das `icons`-Mitglied ein Array von einem oder mehreren Symbolobjekten an, die in verschiedenen Kontexten verwendet werden können, jedes mit einem `src`- und `sizes`-Mitglied sowie optionalen `type`- und `purpose`-Mitgliedern. Jedes Symbolobjekt's `src` listet die Quelle einer einzelnen Bilddatei. Das `sizes`-Mitglied gibt eine liste von durch Leerzeichen getrennten Größen an, für die dieses bestimmte Bild verwendet werden soll oder das Schlüsselwort `any`; der Wert ist derselbe wie das Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des {{HTMLElement("link")}} Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten dieselbe Optik und Haptik haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symboldateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, indem sie Abschnitte abschneiden oder das Symbol "maskieren", um zur UI zu passen, oder das Symbol mit einem Hintergrund verkleinern und zentrieren, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der korrekt gerendert wird, wenn das Symbol als Kreis maskiert wird, ist die innere 80% der Bilddatei. Symbole werden als sicher gekennzeichnet, um durch das `purpose`-Mitglied maskiert zu werden, das, wenn es auf `maskable` gesetzt ist, das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und daher für iOS und iPadOS, wird, wenn Sie das [nicht standardisierte `apple-touch-icon`](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, diese den im Manifest deklarierten Symbolen vorgezogen.

### Aufgabe

Fügen Sie die Symbole zu der Manifeste-Datei hinzu, die Sie gerade erstellt haben.

Indem wir mit den Wörtern "Zyklus" und "Periode" von CycleTracker und der gewählten grünen Themenfarbe spielen, könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, und eine Symboldatei, die nur einen Kreis darstellt, der das Satzzeichen "Punkt" und die App-Themenfarbe repräsentiert, wobei unsere Mittelbilder `circle.svg`, `tire.svg` und `wheel.svg` mehr Detail hinzufügen, vom einfachen Kreis zu einem Reifen, wenn es größer wird, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Das gesagt, das Entwerfen von Symbolen liegt außerhalb des Umfangs dieses Tutorials.

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

## Das Manifest zur App hinzufügen

Sie haben jetzt eine voll funktionsfähige Manifeste-Datei. Zeit, diese zu speichern und von unserer HTML-Datei auf sie zu verlinken.

Die Dateierweiterung des Manifests kann die Spezifikationsvorschläge `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der vom Browser unterstützten `.json` Erweiterung gespeichert.

PWAs erfordern, dass eine Manifeste-Datei aus dem HTML-Dokument der App verlinkt ist. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie nicht zu unserer externen Manifest-JSON-Datei verlinkt. Um die externe JSON-Ressource einzuschließen, verwenden wir das `<link>` Element mit dem `rel="manifest"` Attribut und setzen das `href` Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>` Element wird am häufigsten verwendet, um auf Stylesheets zu verlinken und bei PWAs auf die erforderliche Manifestdatei, wird aber auch verwendet, um [Site-Symbole festzulegen](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl "Favicon"-Stil-Symbole als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten), unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Beim Verwenden der `.webmanifest` Erweiterung sollten Sie `type="application/manifest+json"` setzen, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifeste-Datei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie dann auf sie von der `index.html` Datei.

Optional können Sie auch ein Shortcut-Symbol aus Ihrem HTML verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} der `index.html` könnte jetzt in etwa so aussehen:

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

Sehen Sie die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) und den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifeste-Datei und beim Laden von einer `https://` URL (oder `localhost`), werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA erkennen und einige werden auffordern, sie zu installieren. Um unsere PWA offline funktionsfähig zu machen, müssen wir noch einen Service Worker hinzufügen.

## Debugging von Manifeste-Dateien

Einige Browser-Entwicklertools bieten Einblicke in das App-Manifest. In den Entwicklertools von Edge, Firefox und Chrome sind die Manifestmitglieder und ihre Werte unter dem "Application"-Panel sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Die rechte Seite zeigt App Manifest an, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das App Manifest-Bereich bietet den Namen der Manifeste-Datei als Link sowie Abschnitte zur Identität, Präsentation und Symbole.

![Die Identitäts- und Präsentationsmanifestglieder zusammen mit den Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen eingeschlossenen Werten. In diesem Screenshot, während wir die `orientation`- oder `id`-Mitglieder nicht eingeschlossen haben, werden sie aufgeführt. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: in diesem Beispiel lernen wir, dass, um eine App-ID anzugeben, die mit der aktuellen Identität übereinstimmt, das `id` Feld auf "/" gesetzt werden muss.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige eingeschlossen, würden sie unter "Protocol Handlers" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools zu mehr Informationen über das Thema.

![Die vier im Manifest-Datei enthaltenen Symbole, mit dem Hintergrund entfernt, da "nur den minimalen sicheren Bereich für maskierbare Symbole anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifeste-Panel bietet auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die erzeugten Bilder stimmen möglicherweise nicht mit Ihren Anforderungen überein, aber die Liste der Bildgrößen, die für jedes Betriebssystem erstellt wurden, demonstriert die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklertools sind nützlich, um zu identifizieren, welche Mitglieder eines Manifests unterstützt werden. Beachten Sie, dass die Entwicklertools von Firefox Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, auch wenn unser Manifest-Datei diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Symbol an, wobei `any` angezeigt wird, wenn der Zweck nicht explizit gesetzt ist.

![Das Manifest-Panel in den Entwicklertools von Firefox, das Werte für die nicht eingeschlossenen dir-, scope- und id-Mitglieder zeigt, sowie die lang- und orientation-Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline funktionsfähig zu machen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
