---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen dieser App liefert, sodass sie bei der Installation auf dem Gerät des Benutzers wie eine native App aussieht und sich verhält. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und ihrer Präsentationsanweisungen.

Während gemäß der Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Distributoren [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App als PWA gilt. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Symbol mit einigen Mindestanforderungen und den Typ des Anwendungsviewports, in dem die PWA angezeigt werden soll, einschließen, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere App zur Nachverfolgung des Menstruationszyklus könnte folgendermaßen aussehen:

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

Bevor Sie die Manifestdatei speichern und von unserer HTML-Datei darauf verlinken, können wir ein immer noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, das oben genannte würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die Manifestdateien eine bessere Definition des Erscheinungsbilds unserer CycleTracker-PWA ermöglichen.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name` oder `short_name` Mitglied oder beide enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` anzuzeigen. Es wird als Beschriftung für Symbole auf Telefonbildschirmen verwendet, einschließlich im "Zum Home-Bildschirm hinzufügen"-Dialog auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird `name` in den meisten Fällen verwendet, wobei `short_name` verwendet wird, wenn nur begrenzter Platz vorhanden ist, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung, was die Anwendung tut. Es bietet eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den unten stehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispielhafte Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation einer PWA in den installierten und Offline-Erlebnissen wird im Manifest definiert. Präsentationsmanifestmitglieder umfassen `start_url` und `display` sowie Mitglieder, die zur [Anpassung der App-Farben](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) verwendet werden können, einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, was die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, was einem eigenständigen View ähnelt, jedoch UI-Elemente zur Steuerung der Navigation bietet, und `browser`, was die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standard-[Farbe der Betriebssystem- und Browser-UI-Elemente](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color), wie die Statusleiste bei einigen mobilen Erlebnissen und die Titelleiste der Anwendung auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen nahtlosen Übergang zwischen dem Start der App und dem Laden zu schaffen, wird empfohlen, die [`<color>`](/de/docs/Web/CSS/color_value) zu verwenden, die als [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) der App deklariert ist.

### Aufgabe

Fügen Sie dem Manifest, das Sie in der vorangegangenen Aufgabe begonnen haben zu erstellen, Präsentationsdefinitionen hinzu.

### Beispielhafte Lösung

Da die Beispielanwendung eine Einzelseite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist `background-color: #eeffee;` auf dem `body`-Elementselektor gesetzt. Wir verwenden `#eeffee`, um einen nahtlosen Übergang vom Platzhalter-Erscheinungsbild zum Laden der App sicherzustellen.

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

PWA-Symbole helfen den Benutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Launchern oder in Suchergebnissen des App-Stores. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Das Manifest ist der Ort, an dem Sie Ihre Bilder definieren.

Innerhalb des Manifest-JSON-Objekts spezifiziert das `icons`-Mitglied ein Array von einem oder mehreren Symbolobjekten für die Verwendung in unterschiedlichen Kontexten, jeweils mit einem `src`- und `sizes`-Mitglied sowie optionalen `type`- und `purpose`-Mitgliedern. Jedes Symbolobjekt listet die Quelle einer einzelnen Bilddatei `src`. Das `sizes`-Mitglied bietet eine Liste von Leerzeichen-getrennten Größen, für die dieses spezielle Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut des {{HTMLElement("link")}} Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten dasselbe Aussehen haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symboldateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, indem sie Abschnitte abschneiden oder das Symbol "maskieren", um es an die UI anzupassen, oder das Symbol verkleinern und zentrieren, wenn es nicht maskierbar ist. Die [Safe-Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der korrekt gerendert wird, wenn das Symbol als Kreis maskiert ist, ist der innere 80% des Bildes. Symbole werden als sicher für das Maskieren gekennzeichnet durch das `purpose`-Mitglied, das, wenn es auf `maskable` gesetzt ist, das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari und somit für iOS und iPadOS, wenn Sie das [nicht standardisierte `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, haben sie Vorrang vor den im Manifest deklarierten Symbolen.

### Aufgabe

Fügen Sie die Symbole zum Manifest hinzu, das Sie gerade erstellen.

In Anlehnung an die Wörter "Zyklus" und "Periode" von CycleTracker und die gewählte grüne Themenfarbe könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unser kleinstes Bild `circle.ico`, eine Symboldatei, die nur einen Kreis darstellt, der das Satzzeichen für die Periode und die Themenfarbe der App zeigt, wobei unsere Zwischenbilder, `circle.svg`, `tire.svg` und `wheel.svg`, mehr Detail hinzufügen, die von einem einfachen Kreis zu einem Reifen wird, wenn es größer wird, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Das Design von Symbolen liegt jedoch außerhalb des Umfangs dieses Tutorials.

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

### Beispielhafte Lösung

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

Sie haben nun eine vollständig benutzbare Manifestdatei. Zeit, sie zu speichern und von unserer HTML-Datei darauf zu verlinken.

Die Erweiterung der Manifestdatei kann das Spezifikationsvorschlag `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der browserunterstützten Erweiterung `.json` gespeichert.

PWA erfordern, dass eine Manifestdatei vom HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber es ist noch keine PWA, da sie noch nicht mit unserer externen Manifest-JSON-Datei verknüpft ist. Um die externe JSON-Ressource einzufügen, verwenden wir das `<link>`-Element mit dem `rel="manifest"` Attribut und setzen das `href` Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um auf Stylesheets zu verlinken, und bei PWAs die erforderliche Manifestdatei. Es wird jedoch auch verwendet, um [Website-Symbole etablieren](/de/docs/Web/HTML/Reference/Attributes/rel#icon) zu (sowohl "Favicon"-Stil-Symbole als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Beim Verwenden der `.webmanifest` Erweiterung, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den oben genannten Schritten erstellt haben, und verlinken Sie sie dann von der `index.html` Datei aus.

Optional können Sie auch von Ihrem HTML aus auf ein Verknüpfungssymbol verlinken.

### Beispielhafte Lösung

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

Sehen Sie sich die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und sehen Sie sich den [Projektquellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und beim Laden von einer `https://` URL (oder `localhost`) werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Seite als PWA erkennen und einige werden auffordern, sie zu installieren. Um unsere PWA offline arbeiten zu lassen, müssen wir noch einen Service Worker hinzufügen.

## Debugging von Manifestdateien

Einige Browser-Entwicklungstools bieten Einblicke in das App-Manifest. In den Entwicklungstools von Edge, Firefox und Chrome sind die Manifestmitglieder und ihre Werte im "Application"-Panel sichtbar.

![In den Entwicklungstools enthält das linke Panel Links zum Manifest. Auf der rechten Seite steht 'App Manifest', mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Fenster gibt den Namen der Manifestdatei als Link an und hat Abschnitte für Identität, Präsentation und Symbole.

![Die Identitäts- und Präsentationsmanifestmitglieder zusammen mit Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. In diesem Screenshot, obwohl wir die `orientation` oder `id` Mitglieder nicht eingeschlossen haben, werden sie aufgelistet. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: in diesem Beispiel erfahren wir, dass um eine App-ID zu spezifizieren, die mit der aktuellen Identität übereinstimmt, das `id` Feld auf "/" gesetzt werden soll.

Chrome und Edge bieten auch Fehler und Warnungen, Protokollhandler sowie Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokollhandler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige hinzugefügt, würden sie unter "Protocol Handlers" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwicklungstools auf weitere Informationen zu diesem Thema.

![Die vier Symbole, die in der Manifestdatei enthalten sind, mit dem entfernten Hintergrund, da das Kontrollkästchen "Nur den minimal erforderlichen sicheren Bereich für maskierbare Symbole anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel enthält auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple-Betriebssysteme und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die produzierten Bilder entsprechen möglicherweise nicht Ihren Anforderungen, aber die Liste der Bildgrößen, die für jedes Betriebssystem produziert werden, zeigt die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklungstools sind nützlich, um zu identifizieren, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Entwicklungstools von Firefox Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, obwohl unsere Manifestdatei diese Mitglieder nicht enthalten hat. Firefox enthält auch den Wert des `purpose`-Mitglieds für jedes Symbol und zeigt `any` an, wenn kein Zweck explizit gesetzt ist.

![Das Manifest-Panel in den Entwicklungstools von Firefox, zeigt Werte für die nicht enthaltenen dir, scope und id Mitglieder, sowie die lang und orientation Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Nächste Schritte

Um unsere PWA offline arbeiten zu lassen, müssen wir einen [Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne die Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
