---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 57d4a3ab62517528c9642489e9dbdbec3e9c319e
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen dieser App bereitstellt, damit sie wie eine native App aussieht und sich verhält, wenn sie auf dem Gerät des Benutzers installiert wird. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und darstellerischer Anweisungen.

Obwohl gemäß der Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Distributoren [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App eine PWA ist. Durch die Angabe eines Namens oder Kurznamens, der Start-URL, eines Symbols, das einige Mindestanforderungen erfüllt, und des Anwendungs-Viewports, in dem die PWA angezeigt werden soll, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere App zur Verfolgung des Menstruationszyklus könnte folgendermaßen aussehen:

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

Bevor wir die Manifestdatei speichern und sie von unserer HTML-Datei aus verlinken, können wir ein noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, das oben Gesagte würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name` oder `short_name` Mitglied, oder beides, enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` darzustellen. Er wird als Beschriftung für Symbole auf Bildschirmen von Mobiltelefonen verwendet, einschließlich im „Zum Startbildschirm hinzufügen“-Dialog auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird `name` in den meisten Fällen verwendet, während `short_name` verwendet wird, wenn es nur begrenzten Platz für die Anzeige des Anwendungsnamens gibt.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung, was die Anwendung macht. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den unten stehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl hinzufügen.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und Offline-Erlebnisse einer PWA werden im Manifest definiert. Präsentationsmanifestmitglieder umfassen `start_url` und `display` sowie Mitglieder, die verwendet werden können, um [Ihre App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, das die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das ähnlich wie eine eigenständige Ansicht ist, aber mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browserversion öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation) Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standardfarbe von Benutzeroberflächenelementen des Betriebssystems und Browsers, wie die Statusleiste bei einigen mobilen Erlebnissen und die Anwendungs-Titelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als Hintergrund der App angezeigt wird, bis das CSS geladen ist. Um einen fließenden Übergang zwischen dem Start und dem Ladevorgang der App zu schaffen, empfiehlt es sich, die im {{cssxref("&lt;color&gt;")}} deklarierte Farbe als {{cssxref("background-color")}} Farbe der App zu verwenden.

### Aufgabe

Fügen Sie der Manifestdatei, die Sie in der vorherigen Aufgabe begonnen haben zu erstellen, Präsentationsdefinitionen hinzu.

### Beispiel-Lösung

Da die Beispielanwendung eine einzelne Seite in einem Unterverzeichnis ist, können wir `"./"` als `start_url` verwenden oder das Mitglied weglassen. Aus demselben Grund können wir die App ohne Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist `background-color: #eeffee;` auf dem `body` Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen fließenden Übergang vom Platzhalter-Erscheinungsbild zum Laden der App zu gewährleisten.

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

## App-Ikonografie

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie optisch ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Launchern oder in den Suchergebnissen des App-Stores. Die Größe des dargestellten Symbols und die Dateianforderungen variieren je nach Anzeigemodus und Anbieter. Das Manifest ist der Ort, an dem Sie Ihre Bilder definieren.

Innerhalb des Manifest-JSON-Objekts gibt das `icons` Mitglied ein Array von einem oder mehreren Icon-Objekten für die Verwendung in verschiedenen Kontexten an, jedes mit einem `src` und `sizes` Mitglied und optionalen `type` und `purpose` Mitgliedern. Jedes Icon-Objekt's `src` listet die Quelle einer einzelnen Bilddatei auf. Das `sizes` Mitglied bietet eine durch Leerzeichen getrennte Liste von Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut des {{HTMLElement("link")}} Elements. Das `type` Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten das gleiche Aussehen und Gefühl haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symboldateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, schneiden Abschnitte heraus oder „maskieren“ das Symbol, um die UI zu erfüllen, oder verkleinern und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der als Kreis maskiert werden kann, ist die innere 80% der Bilddatei. Symbole werden als sicher zum Maskieren gekennzeichnet durch das `purpose` Mitglied, das mit dem Wert `maskable` das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und daher für iOS und iPadOS, haben Sie die Möglichkeit, das [nicht standardmäßige `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) in das {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einzufügen, wodurch sie Vorrang gegenüber im Manifest deklarierten Symbolen haben.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie erstellt haben.

Mit den Wörtern „Zyklus“ und „Periode“ von CycleTracker und der grünen Themenfarbe, die wir gewählt haben, könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, und Symboldatei, die nur einen Kreis darstellt, der das Satzzeichen und die Themenfarbe der App repräsentiert, mit unseren Zwischenbildern, `circle.svg`, `tire.svg` und `wheel.svg`, die mehr Details in einem Übergang von einem einfachen Kreis zu einem Reifen hinzufügen, je größer sie werden, mit unseren größten Symbolen als detailliertes Rad mit Speichen und Schatten. Das Design von Symbolen liegt jedoch außerhalb des Umfangs dieses Tutorials.

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

{{EmbedLiveSample("PWA ikonografie", 600, 250)}}

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

Sie haben jetzt eine voll funktionsfähige Manifestdatei. Zeit, sie zu speichern und einen Link von unserer HTML-Datei aus zu erstellen.

Die Manifesterweiterung kann gemäß der Spezifikation `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der browserunterstützten `.json` Erweiterung gespeichert.

PWAs erfordern, dass eine Manifestdatei mit dem HTML-Dokument der App verlinkt ist. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie noch nicht mit unserer externen Manifest-JSON-Datei verlinkt ist. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>` Element mit dem `rel="manifest"` Attribut und setzen das `href` Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>` Element wird am häufigsten verwendet, um zu Stylesheets zu verlinken und ist bei PWAs erforderlich, um die Manifestdatei zu verlinken, wird aber auch verwendet, um [Site-Icons festzulegen](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl "Favicons" als auch andere Icons für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Beim Verwenden der `.webmanifest` Erweiterung, setzen Sie `type="application/manifest+json"` wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann von der `index.html` Datei.

Optional können Sie die HTML-Datei auch mit einem Shortcut-Icon verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} von `index.html` könnte jetzt ungefähr so aussehen:

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

Sehen Sie sich die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und sehen Sie sich den [Projektquellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und wenn sie von einer `https://` URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Site als PWA erkennen und einige werden dazu auffordern, sie zu installieren. Um unsere PWA offline funktionieren zu lassen, müssen wir dennoch einen Service Worker hinzufügen.

## Debugging von Manifest-Dateien

Einige Browser-Entwicklertools bieten Einblick in das App-Manifest. In Edge, Firefox und den Chrome Entwicklertools sind die Manifestmitglieder und ihre Werte unter dem "Application" Panel sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Die rechte Seite zeigt das App-Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das App-Manifest-Panel bietet den Namen der Manifestdatei als Link sowie Abschnitte zur Identität, Präsentation und zu den Symbolen.

![Die Identitäts- und Präsentationsmanifestmitglieder zusammen mit Werten, sofern vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden zusammen mit allen beinhalteten Werten angezeigt. In diesem Screenshot, obwohl wir die Mitglieder `orientation` oder `id` nicht enthalten haben, werden sie aufgeführt. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: In diesem Beispiel erfahren wir, dass um eine App-ID, die zur aktuellen Identität passt, zu spezifizieren, das `id` Feld auf "/" gesetzt werden muss.

Chrome und Edge bieten auch Fehler und Warnungen, Protokollhandler und Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokollhandler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige eingeschlossen, wären diese unter "Protocol Handlers" zu finden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools zu weiteren Informationen zu diesem Thema.

![Die vier in der Manifestdatei enthaltenen Symbole, mit entferntem Hintergrund, da "nur der minimal sichere Bereich für maskierbare Symbole" aktiviert ist.](manifest_icons.jpg)

Das Manifestpanel bietet auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildergenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple-Betriebssysteme und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erzeugten Bilder entsprechen möglicherweise nicht Ihren Anforderungen, aber die Liste der Bildgrößen, die für jedes Betriebssystem erstellt werden, zeigt die Vielfalt, wo und wie PWAs verfügbar gemacht werden können.

Die Entwicklertools sind nützlich, um festzustellen, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass Firefox Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` enthalten, obwohl unsere Manifestdatei diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose` Mitglieds für jedes Symbol, wobei `any` angezeigt wird, wenn der Zweck nicht explizit festgelegt ist.

![Das Manifest-Panel in den Firefox-Entwicklertools, das Werte für die nicht enthaltenen dir, scope und id Mitglieder anzeigt, sowie die lang- und orientation-Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Als Nächstes

Um unsere PWA offline funktionsfähig zu machen, müssen wir einen [Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne ein Framework tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
