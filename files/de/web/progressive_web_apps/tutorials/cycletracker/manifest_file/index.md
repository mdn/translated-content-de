---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen dieser App bereitstellt, damit sie auf dem Gerät des Benutzers wie eine native App aussieht und sich auch so verhält. Das Manifest enthält Metadaten Ihrer App, einschließlich ihres Namens, ihrer Symbole und ihrer Präsentationsrichtlinien.

Obwohl laut Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Vertriebe [bestimmte erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members) für eine Web-App, um eine PWA zu sein. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Symbol, das einige Mindestanforderungen erfüllt, und den Typ des Anwendungsviewports, in dem die PWA angezeigt werden soll, einschließen, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere Menstruationszyklus-Tracking-App könnte folgendermaßen aussehen:

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

Bevor Sie die Manifestdatei speichern und von unserer HTML-Datei darauf verlinken, können wir ein noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, das obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder diskutieren, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` beinhalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Er wird als Beschriftung für Symbole auf Telefonbildschirmen verwendet, einschließlich im Dialog "Zum Home-Bildschirm hinzufügen" auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird `name` in den meisten Fällen verwendet, während `short_name` verwendet wird, wenn es wenig Platz gibt, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung dessen, was die Anwendung tut. Es bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können untenstehenden Text verwenden oder diskretere oder beschreibendere Werte verwenden und eine Beschreibung Ihrer Wahl hinzufügen.

### Beispiel Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild, oder die Präsentation, der installierten und offline genutzten Erfahrungen einer PWA sind im Manifest definiert. Zu den Präsentationsmitgliedern des Manifests gehören `start_url` und `display` sowie Mitglieder, die dazu verwendet werden können, [Ihre App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, was die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, was einer eigenständigen Ansicht ähnelt, jedoch mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, lassen wir dieses Mitglied weg.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standardfarbe von Betriebssystem- und Browser-UI-Elementen, wie die Statusleiste bei einigen mobilen Erfahrungen und die Titelleiste der Anwendung auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen nahtlosen Übergang zwischen App-Start und Ladezeit zu schaffen, wird empfohlen, die im Hintergrund verwendete [`<color>`](/de/docs/Web/CSS/color_value) zu verwenden, die als `background-color` der App deklariert ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel Lösung

Da die Beispielanwendung eine Einzelseitige ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne Browser-UI anzeigen, indem wir das `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist `background-color: #efe;` im `body`-Element-Selektor festgelegt. Wir verwenden `#eeffee`, um einen nahtlosen Übergang vom Platzhalteraussehen zum App-Laden sicherzustellen.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Erkennbarkeit. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Launchern oder Suchergebnissen im App-Store. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts gibt das `icons`-Mitglied ein Array von einem oder mehreren Symbolobjekten zur Verwendung in verschiedenen Kontexten an, jeweils mit einem `src`- und `sizes`-Mitglied und optionalen `type`- und `purpose`-Mitgliedern. Jedes Symbolobjekt `src` listet die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Mitglied gibt eine Liste von durch Leerzeichen getrennten Größen an, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`. Der Wert ist derselbe wie das Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten dasselbe Aussehen und Gefühl haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen, aber je größer das Symbol ist, desto mehr Details kann es enthalten. Während alle Dateien quadratisch sind, rendern einige Betriebssysteme unterschiedliche Formen, schneiden Abschnitte ab oder "maskieren" das Symbol, um den UI-Bedürfnissen gerecht zu werden, oder verkleinern und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Der [sichere Bereich](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der okay gerendert wird, wenn das Symbol als Kreis maskiert wird, ist die innere 80% der Bilddatei. Symbole werden als maskierbar gekennzeichnet durch das `purpose`-Mitglied, das, wenn es auf `maskable` gesetzt ist, das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari und damit für iOS und iPadOS, wenn Sie das [nicht standardisierte `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, haben sie Vorrang vor den im Manifest deklarierten Symbolen.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie bereits erstellt haben.

Beim Spielen mit den Worten "cycle" und "period" von CycleTracker und der grünen Themenfarbe, die wir ausgewählt haben, könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, und eine Symboldatei, die nur einen Kreis darstellt, der die Satzzeichenperiode und die App-Themenfarbe repräsentiert, wobei unsere Zwischengrößen `circle.svg`, `tire.svg` und `wheel.svg` mehr Details hinzufügen, die von einem einfachen Kreis zu einem Reifen größer werden, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Das Entwerfen von Symbolen liegt jedoch außerhalb des Umfangs dieses Tutorials.

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

### Beispiel Lösung

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

Sie haben nun eine voll funktionsfähige Manifestdatei. Es ist an der Zeit, sie zu speichern und von unserer HTML-Datei darauf zu verlinken.

Die Dateierweiterung des Manifests kann der Spezifikationsvorschlag `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der browserunterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern eine Verknüpfung der Manifestdatei von dem HTML-Dokument der App. Wir haben eine vollständig funktionale App, aber es ist noch keine PWA, weil sie noch nicht auf unsere externe Manifest-JSON-Datei verweist. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element mit dem Attribut `rel="manifest"` und setzen das `href`-Attribut auf den Ort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um auf Stylesheets zu verlinken und bei PWAs auf die erforderliche Manifestdatei, es wird jedoch auch verwendet, um [Site-Symbole festzulegen](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl "favicon"-Stil-Symbole als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn die `.webmanifest`-Erweiterung verwendet wird, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann in der Datei `index.html`.

Optional können Sie auch von Ihrem HTML aus auf ein Shortcut-Symbol verlinken.

### Beispiel Lösung

Der {{HTMLelement("head")}} von `index.html` kann jetzt so ähnlich aussehen:

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

Mit einer Manifestdatei und wenn sie von einer `https://` URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Seite als PWA erkennen und einige werden auffordern, sie zu installieren. Um unsere PWA offline funktionieren zu lassen, müssen wir noch einen Service Worker hinzufügen.

## Debugging von Manifestdateien

Einige Browser-Entwicklertools bieten Einblick in das App-Manifest. In den Entwicklertools von Edge, Firefox und Chrome sind die Manifestmitglieder und ihre Werte im Panel "Application" sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Die rechte Seite zeigt App-Manifest an, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Panel liefert den Namen der Manifestdatei als Link sowie Abschnitte zur Identität, Präsentation und Symbolen.

![Die Identitäts- und Präsentationsmanifestmitglieder zusammen mit Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. In diesem Screenshot werden zwar die Mitglieder `orientation` oder `id` nicht von uns eingeschlossen, sie werden jedoch aufgelistet. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: In diesem Beispiel erfahren wir, dass, um eine App-ID anzugeben, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" gesetzt werden soll.

Chrome und Edge bieten auch Fehler und Warnungen, Protokollhandler und Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokollhandler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige aufgenommen, wären sie unter "Protocol Handlers" zu finden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools auf weitere Informationen zu diesem Thema.

![Die vier im Manifestfile enthaltenen Symbole, mit entferntem Hintergrund, da "nur den minimalen sicheren Bereich für maskierbare Symbole anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel bietet auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA Image Generator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple-Betriebssysteme und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erstellten Bilder erfüllen möglicherweise nicht Ihre Bedürfnisse, aber die Liste der Bildgrößen, die für jedes Betriebssystem produziert werden, demonstriert die Vielfalt, in der und wie PWAs bereitgestellt werden können.

Die Entwicklertools sind nützlich, um zu identifizieren, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` aufweisen, auch wenn unsere Manifestdatei diese Mitglieder nicht enthält. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Symbol an und zeigt `any`, wenn für den Zweck kein Wert explizit gesetzt ist.

![Das Manifest-Panel in den Firefox-Entwicklertools, zeigt Werte für die nicht enthaltenen Mitglieder dir, scope und id, und die Mitglieder lang und orientation ohne zugehörige Werte.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline arbeiten zu lassen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne das Verwenden eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
