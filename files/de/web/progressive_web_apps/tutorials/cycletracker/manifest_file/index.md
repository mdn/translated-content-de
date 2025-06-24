---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen der App bereitstellt, um sie wie eine native App aussehen und sich verhalten zu lassen, wenn sie auf dem Gerät eines Nutzers installiert ist. Das Manifest enthält Metadaten Ihrer App, einschließlich ihres Namens, ihrer Symbole und Darstellungsvorgaben.

Auch wenn laut Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Verteiler [spezifische erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members) für eine Web-App, um eine PWA zu sein. Durch das Hinzufügen eines Namens oder Kurznamens, der Start-URL, eines Icons, das einige Mindestanforderungen erfüllt, und des Typs des Anwendungs-Viewports, in dem die PWA angezeigt werden sollte, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere Menstruationszyklus-Verfolgungs-App könnte wie folgt aussehen:

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

Bevor wir die Manifestdatei speichern und von unserer HTML-Datei aus verlinken, können wir ein immer noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige weitere Mitglieder diskutieren, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungsicon usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Nutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Es wird als Beschriftung für Icons auf Handybildschirmen verwendet, einschließlich im Dialogfeld "Zum Startbildschirm hinzufügen" auf iOS.

Wenn sowohl der `name` als auch der `short_name` vorhanden sind, wird in den meisten Fällen der `name` verwendet, während der `short_name` verwendet wird, wenn nicht genügend Platz zur Verfügung steht, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung dessen, was die Anwendung tut. Es bietet eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den folgenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und Offline-Erfahrungen einer PWA wird im Manifest definiert. Zu den Präsentations-Manifest-Mitgliedern gehören `start_url` und `display` sowie Mitglieder, die verwendet werden können, um [Ihre App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)

  - : Die Startseite, wenn ein Nutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, was die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einem eigenständigen Ansicht ähnelt, jedoch mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardorientierung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standardfarbe der [UI-Elemente des Betriebssystems und des Browsers](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie die Statusleiste in einigen mobilen Erfahrungen und die Titelleiste der Anwendung in Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen reibungslosen Übergang zwischen App-Start und -Laden zu erreichen, wird empfohlen, die im `<color>`-Wert deklarierte [`background-color`](/de/docs/Web/CSS/background-color) der App zu verwenden.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine einzige Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Benutzeroberfläche des Browsers anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) wird `background-color: #efe;` auf dem `body`-Elementselektor gesetzt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang vom Platzhalterausschnitt zum Laden der App zu gewährleisten.

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

PWA-Icons helfen Nutzern, Ihre App zu identifizieren, sie visuell ansprechender zu gestalten und ihre Auffindbarkeit zu verbessern. Das PWA-App-Icon erscheint auf Startbildschirmen, App-Launchern oder in den Suchergebnissen des App-Stores. Die Größe des gerenderten Icons und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts gibt das `icons`-Mitglied ein Array von einem oder mehreren Icon-Objekten zur Verwendung in verschiedenen Kontexten an, jedes mit einem `src`- und einem `sizes`-Mitglied sowie optionalen `type`- und `purpose`-Mitgliedern. Jedes Icon-Objektlistet die Quelle einer einzelnen Bilddatei im `src`-Eintrag auf. Das `sizes`-Mitglied bietet eine Liste von durch Leerzeichen getrennten Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)Attribut des {{HTMLElement("link")}}Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Icons sollten das gleiche Aussehen und Gefühl haben, um sicherzustellen, dass Nutzer Ihre PWA erkennen, aber je größer das Icon, desto mehr Details kann es enthalten. Während alle Icon-Dateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, indem sie Abschnitte abschneiden oder das Icon "maskieren", um die UI zu erfüllen, oder das Icon verkleinern und mit einem Hintergrund zentrieren, wenn das Icon nicht maskierbar ist. Die [Sicherheitszone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der in Ordnung rendert, wenn das Icon als Kreis maskiert ist, ist das innere 80% der Bilddatei. Icons sind als sicher zum Maskieren durch das `purpose`-Mitglied gekennzeichnet, das, wenn auf `maskable` gesetzt, das [Icon als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari und somit für iOS und iPadOS wird, wenn Sie das [nicht standardisierte `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, dieses Vorrang vor im Manifest deklarierte Icons haben.

### Aufgabe

Fügen Sie die Icons zur Manifestdatei hinzu, die Sie bisher erstellt haben.

Im Spiel mit den Worten "Zyklus" und "Periode" von CycleTracker und der grünen Themenfarbe, die wir gewählt haben, könnten unsere Icon-Bilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico` und eine Icon-Datei, die nur einen Kreis darstellt, der das Satzzeichen und die Themenfarbe der App repräsentiert, während unsere Zwischenbilder `circle.svg`, `tire.svg` und `wheel.svg` mehr Details hinzufügen, vom einfachen Kreis zu einem Reifen, wenn sie größer werden, wobei unsere größten Icons ein detailliertes Rad mit Speichen und Schatten sind. Das Entwerfen von Icons liegt jedoch außerhalb des Umfangs dieses Tutorials.

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

{{EmbedLiveSample("PWA Ikonographie", 600, 250)}}

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

Sie haben jetzt eine vollständig verwendbare Manifestdatei. Es ist an der Zeit, sie zu speichern und von unserer HTML-Datei aus darauf zu verlinken.

Die Dateiendung des Manifests kann die Spezifikationsvorgabe `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der von Browsern unterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern eine Manifestdatei, die von dem HTML-Dokument der App verlinkt ist. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie noch nicht auf unsere externe Manifest-JSON-Datei verweist. Um die externe JSON-Ressource einzuschließen, verwenden wir das `<link>`-Element, mit dem Attribut `rel="manifest"` und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten zum Verlinken auf Stylesheets und bei PWAs auf die erforderliche Manifestdatei verwendet, aber es wird auch verwendet, um [Website-Icons festzulegen](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl "Favicon"-Stil-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) neben anderen Dingen.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann von der Datei `index.html`.

Optional können Sie auch von Ihrem HTML auf ein Shortcut-Icon verlinken.

### Beispiel-Lösung

Das {{HTMLelement("head")}} von `index.html` könnte nun so aussehen:

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

Sehen Sie sich die [`cycletracker.json`-Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und sehen Sie sich den [Quellcode des Projekts](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und wenn sie von einer `https://`-URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA erkennen und einige werden zur Installation auffordern. Um unsere PWA offline arbeiten zu lassen, müssen wir noch einen Service Worker hinzufügen.

## Manifestdateien debuggen

Einige Entwicklertools von Browsern bieten Einblicke in das App-Manifest. In den Entwicklertools von Edge, Firefox und Chrome sind die Manifestmitglieder und ihre Werte im "Application"-Panel sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Auf der rechten Seite steht App Manifest mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Feld bietet den Namen der Manifestdatei als Link sowie Abschnitte zur Identität, Präsentation und zu Icons.

![Die Identitäts- und Präsentations-Manifestmitglieder zusammen mit ihren Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden zusammen mit allen enthaltenen Werten angezeigt. In diesem Screenshot werden zwar die `orientation`- oder `id`-Mitglieder nicht eingeschlossen, sie werden jedoch aufgelistet. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: In diesem Beispiel erfahren wir, dass das `id`-Feld auf "/" gesetzt werden muss, um eine App-ID anzugeben, die mit der aktuellen Identität übereinstimmt.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Icons.

Unsere Web-App verfügt nicht über Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige eingebunden, wären sie unter "Protocol Handlers" zu finden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools mit weiteren Informationen zu diesem Thema.

![Die vier im Manifestfile enthaltenen Icons, mit entferntem Hintergrund, da "show only the minimum safe area for maskable icons is checked".](manifest_icons.jpg)

Das Manifest-Panel umfasst auch Einblicke in die sichere Zone für maskierbare Icons und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die produzierten Bilder können Ihren Bedürfnissen möglicherweise nicht entsprechen, aber die Liste der Bildgrößen, die für jedes Betriebssystem erzeugt werden, zeigt die Vielfalt auf, mit der und wie PWAs bedient werden können.

Die Entwicklertools sind nützlich, um herauszufinden, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` enthalten, auch wenn unsere Manifestdatei diese Mitglieder nicht enthält. Firefox enthält auch den Wert des `purpose`-Mitglieds für jedes Icon und zeigt `any` an, wenn der Zweck nicht explizit festgelegt ist.

![Das Manifest-Panel in den Firefox-Entwicklertools, zeigt Werte für nicht eingeschlossene dir-, scope- und id-Mitglieder und die lang- und orientation-Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Als Nächstes

Um unsere PWA offline arbeiten zu lassen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), den wir ohne Verwendung eines Frameworks erstellen werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
