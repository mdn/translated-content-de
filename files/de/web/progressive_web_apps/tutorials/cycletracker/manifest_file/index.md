---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 7c90842660507d716c4e9deac52c1ed3bb465fb3
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen dieser App bereitstellt, damit sie wie eine native App aussieht und sich auch so verhält, wenn sie auf dem Gerät des Benutzers installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und präsentationaler Anweisungen.

Obwohl laut Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Vertriebshändler [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App eine PWA wird. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Icon, das bestimmte Mindestanforderungen erfüllt, und die Art des Anwendungs-Viewports angeben, in dem die PWA angezeigt werden soll, erfüllen Sie die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere App zur Nachverfolgung von Menstruationszyklen könnte so aussehen:

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

Bevor wir die Manifestdatei speichern und sie von unserer HTML-Datei aus verknüpfen, können wir ein immer noch kurzes, aber informativeres JSON-Objekt erstellen, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name` oder `short_name`-Mitglied oder beides enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` anzuzeigen. Er wird als Beschriftung für Symbole auf Handyscreens verwendet, einschließlich im "Zum Startbildschirm hinzufügen"-Dialog auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird der `name` in den meisten Fällen verwendet, der `short_name` jedoch, wenn der Platz zum Anzeigen des Anwendungsnamens begrenzt ist.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung, was die Anwendung tut. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den untenstehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und offline Erfahrungen einer PWA wird im Manifest definiert. Präsentationsmanifest-Mitglieder umfassen `start_url` und `display` sowie Mitglieder, die zur [Anpassung der App-Farben](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) verwendet werden können, einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, was die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einer eigenständigen Ansicht ähnelt, jedoch mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardorientierung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standardfarbe [der UI-Elemente von Betriebssystemen und Browsern](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color), wie die Statusleiste in einigen mobilen Erlebnissen und die Anwendungs-Titelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen nahtlosen Übergang zwischen App-Start und Ladung zu schaffen, wird empfohlen, die [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) zu verwenden, die als [`background-color`](/de/docs/Web/CSS/Reference/Properties/background-color) der App deklariert ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine Einzelseitige ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus dem gleichen Grund können wir die App ohne die Browser-UI anzeigen, indem wir das `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist die `background-color: #eeffee;` auf dem `body`-Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang vom Platzhalter-Aussehen zum App-Laden sicherzustellen.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, sie optisch ansprechender zu machen und die Auffindbarkeit zu verbessern. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Startprogrammen oder in Suchergebnissen des App-Stores. Die Größe des gerenderten Symbols und die Datei-Anforderungen variieren je nach Anzeigeort und -verantwortlichem. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts gibt das `icons`-Mitglied ein Array von einem oder mehreren Icon-Objekten zur Verwendung in verschiedenen Kontexten an, jeweils mit einem `src`- und `sizes`-Mitglied und optional `type`- und `purpose`-Mitgliedern. Jedes Icon-Objekt listet in `src` die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Mitglied bietet eine Liste von durch Leerzeichen getrennten Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert entspricht dem Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes) des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten das gleiche Aussehen und Gefühl haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen; jedoch, je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symbol-Dateien Quadrate sind, rendern einige Betriebssysteme verschiedene Formen, schneiden Abschnitte ab oder "maskieren" das Symbol, um der Benutzeroberfläche zu entsprechen, oder verkleinern und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der in Ordnung gerendert wird, wenn das Symbol als Kreis maskiert wird, ist die innere 80% der Bilddatei. Symbole sind sicher, maskiert zu werden, wenn das `purpose`-Mitglied auf `maskable` gesetzt ist, und definiert das [Symbol als anpassbar](https://web.dev/articles/maskable-icon).

In Safari und daher für iOS und iPadOS, nehmen die [nicht standardisierten `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments via {{HTMLElement("link")}} Vorrang vor manifest-deklarierten Symbolen.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie erstellt haben.

Unter Verwendung der Wörter "cycle" und "period" von CycleTracker und der von uns gewählten grünen Themenfarbe könnten alle unsere Symbolbilder hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, eine Icon-Datei, die nur einen Kreis darstellt, der das Satzzeichen für den Punkt und die App-Themenfarbe repräsentiert, wobei unsere Zwischenbilder, `circle.svg`, `tire.svg` und `wheel.svg`, mehr Details von einem einfachen Kreis zu einem Reifen hinzufügend, wenn es größer wird, unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Aber das Entwerfen von Symbolen liegt außerhalb des Umfangs dieses Tutorials.

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

{{EmbedLiveSample("PWA ikonen", 600, 250)}}

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

Sie haben jetzt eine vollständig verwendbare Manifestdatei. Es ist Zeit, sie zu speichern und von unserer HTML-Datei aus zu verlinken.

Die Dateierweiterung der Manifestdatei kann das Vorschlagsschema `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der browserunterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern, dass eine Manifestdatei von einem HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, weil sie noch nicht mit unserer externen Manifest-JSON-Datei verlinkt ist. Um die externe JSON-Ressource einzuschließen, verwenden wir das `<link>`-Element mit dem `rel="manifest"`-Attribut und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um auf Stylesheets zu verlinken und bei PWAs auf die erforderliche Manifestdatei, wird aber auch verwendet, um [Website-Symbole zu erstellen](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl "Favicons" als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann von der `index.html`-Datei aus.

Optional, verlinken Sie auch auf ein Shortcut-Symbol von Ihrem HTML aus.

### Beispiel-Lösung

Der {{HTMLelement("head")}} der `index.html` könnte jetzt ähnlich aussehen wie:

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

Öffnen Sie die [`cycletracker.json`-Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) und betrachten Sie den [Quellcode des Projekts](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub.

Mit einer Manifestdatei und wenn sie von einer `https://`-URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Site als PWA erkennen und einige werden zur Installation auffordern. Um unsere PWA offline arbeiten zu lassen, müssen wir noch einen Service Worker hinzufügen.

## Debuggen von Manifestdateien

Einige Entwicklerwerkzeuge von Browsern bieten Einblick in das App-Manifest. In den Entwicklertools von Edge, Firefox und Chrome sind die Manifest-Mitglieder und ihre Werte unter dem "Application"-Panel sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Die rechte Seite liest App Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Fenster zeigt den Namen der Manifestdatei als Link sowie Identitäts-, Präsentations- und Symbolsektionen.

![Die Identitäts- und Präsentationsmanifest-Mitglieder zusammen mit den Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifest-Mitglieder werden angezeigt, zusammen mit allen eingeschlossenen Werten. In diesem Screenshot, obwohl wir die `orientation` oder `id`-Mitglieder nicht aufgenommen haben, werden sie aufgelistet. Das App-Panel kann verwendet werden, um die Manifest-Mitglieder zu sehen und sogar zu lernen: in diesem Beispiel lernen wir, dass um eine App-Id zu spezifizieren, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" gesetzt werden soll.

Chrome und Edge bieten auch Fehler und Warnungen, Protokollhandler und Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokollhandler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige aufgenommen, würden sie unter "Protocol Handlers" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools zu weiteren Informationen zu diesem Thema.

![Die vier im Manifest enthaltenen Symbole mit dem entfernten Hintergrund, da "nur die minimal sichere Fläche für maskierbare Symbole anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel enthält auch Einblicke in die sichere Fläche für maskierbare Symbole und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple-Betriebssysteme und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die produzierten Bilder dienen möglicherweise nicht Ihren Bedürfnissen, aber die Liste der für jedes Betriebssystem produzierten Bildgrößen zeigt die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklertools sind nützlich, um festzustellen, welche Manifest-Mitglieder unterstützt werden. Beachten Sie, dass die Entwicklertools von Firefox Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, auch wenn unsere Manifest-Datei diese Mitglieder nicht enthielt. Firefox enthält auch den Wert des `purpose`-Mitglieds für jedes Symbol und zeigt `any` an, wenn der Zweck nicht explizit festgelegt ist.

![Das Manifest-Panel in den Entwicklertools von Firefox zeigt Werte für die nicht enthaltenen Mitglieder dir, scope und id sowie die Mitglieder lang und orientation ohne zugehörige Werte.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline arbeiten zu lassen, müssen wir einen [Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne den Einsatz eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
