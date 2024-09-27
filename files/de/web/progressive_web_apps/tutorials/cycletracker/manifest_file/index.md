---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifestsdatei ist eine JSON-Datei, die Informationen über die Funktionen dieser App bereitstellt, um sie beim Installieren auf dem Gerät des Benutzers wie eine native App aussehen und verhalten zu lassen. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und darstellender Anweisungen.

Während gemäß der Spezifikation alle Schlüssel oder Mitglieder des Manifests optional sind, gibt es einige Browser, Betriebssysteme und App-Distributoren, die [bestimmte Mitglieder erforderlich machen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App zu einer PWA wird. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Symbol, das einige Mindestanforderungen erfüllt, und den Typ des Anwendungs-Viewports, in dem die PWA angezeigt werden soll, angeben, erfüllt Ihre App die Manifestanforderungen einer PWA.

Ein minimalistisches Manifest für unsere Tracking-App für den Menstruationszyklus könnte so aussehen:

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

Bevor wir die Manifestdatei speichern und von unserer HTML-Datei darauf verweisen, können wir ein immer noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` beinhalten.

- [`name`](/de/docs/Web/Manifest/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Bezeichnung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Manifest/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` anzuzeigen. Es wird als Bezeichnung für Symbole auf Handybildschirmen verwendet, einschließlich im "Zur Startseite hinzufügen"-Dialog auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird `name` in den meisten Fällen verwendet, während `short_name` verwendet wird, wenn nur begrenzter Platz zur Anzeige des Anwendungsnamens vorhanden ist.

- [`description`](/de/docs/Web/Manifest/description)
  - : Erklärung, was die Anwendung macht. Es bietet eine [zugängliche Beschreibung](/de/docs/Glossary/accessible_description) des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den untenstehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispielhafte Lösung

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und offline Erfahrungswelten einer PWA wird im Manifest definiert. Präsentationsmanifest-Mitglieder umfassen `start_url` und `display` sowie Mitglieder, die verwendet werden können, um [Ihre App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Manifest/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Manifest/display)
  - : Legt den Anzeigemodus der App fest, einschließlich `fullscreen`, `standalone`, das die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einer eigenständigen Ansicht ähnelt, jedoch mit Steuerelementen für die Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Manifest/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Manifest/theme_color)
  - : Die Standardfarbe der [Betriebssystem- und Browser-UI-Elemente](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie die Statusleiste auf einigen mobilen Erlebnissen und die Anwendungstitelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Manifest/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen fließenden Übergang zwischen dem Starten und Laden der App zu schaffen, wird empfohlen, die [`<color>`](/de/docs/Web/CSS/color_value) zu verwenden, die als [`background-color`](/de/docs/Web/CSS/background-color) der App deklariert ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zu der Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben zu erstellen.

### Beispielhafte Lösung

Da die Beispielanwendung eine Einzelseite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Browser-UI anzeigen lassen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist `background-color: #efe;` beim `body`-Element-Selektor gesetzt. Wir verwenden `#eeffee`, um einen fließenden Übergang vom Platzhalteraussehen zum App-Laden sicherzustellen.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Launchern oder Suchergebnissen im App-Store. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nach Ort, an dem es angezeigt wird. Im Manifest definieren Sie Ihre Bilder.

Im JSON-Objekt des Manifests gibt das `icons`-Mitglied ein Array von einem oder mehreren Symbolobjekten für die Verwendung in verschiedenen Kontexten an, jedes mit einem `src`- und `sizes`-Mitglied sowie optionalen `type`- und `purpose`-Mitgliedern. Die `src`-Liste jedes Symbolobjekts gibt die Quelle einer einzelnen Bilddatei an. Das `sizes`-Mitglied bietet eine Liste von durch Leerzeichen getrennten Größen, für die dieses spezielle Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie im {{HTMLElement("link")}}-Element-Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes). Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten dasselbe Aussehen und Gefühl haben, um sicherzustellen, dass Benutzer Ihre PWA wiedererkennen, aber je größer das Symbol ist, desto mehr Details kann es enthalten. Während alle Symboldateien Quadrate sind, rendern einige Betriebssysteme unterschiedliche Formen, schneiden Abschnitte ab oder "maskieren" das Symbol, um die UI zu erfüllen, oder verkleinern und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der in Ordnung bleibt, wenn das Symbol als Kreis maskiert wird, ist die innere 80% der Bilddatei. Symbole werden als sicher zum Maskieren gekennzeichnet durch das `purpose`-Mitglied, das, wenn es auf `maskable` gesetzt ist, das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und daher für iOS und iPadOS, wenn Sie das [nicht standardisierte `apple-touch-icon`](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, haben diese Vorrang vor dem Manifest-deklarierten Symbolen.

### Aufgabe

Fügen Sie die Symbole zu der Manifestdatei hinzu, die Sie erstellt haben.

Mit den Worten "cycle" und "period" von CycleTracker und der grünen Themenfarbe, die wir gewählt haben, könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe, `circle.ico`, ist eine Symboldatei, die nur einen Kreis darstellt, der das Satzzeichen für den Zeitraum und die Themenfarbe der App symbolisiert, und mit unseren dazwischenliegenden Bildern, `circle.svg`, `tire.svg` und `wheel.svg`, die beim zunehmenden größer werden mehr Details hinzufügen, mit unseren größten Symbolen, die ein detailliertes Rad mit Speichen und Schatten darstellen. Allerdings geht das Design von Symbolen über den Umfang dieses Tutorials hinaus.

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

### Beispielhafte Lösung

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

## Hinzufügen des Manifests zur App

Sie haben nun eine vollständig verwendbare Manifestdatei. Es ist Zeit, sie zu speichern und von unserer HTML-Datei darauf zu verlinken.

Die Manifestdatei-Erweiterung kann das in der Spezifikation vorgeschlagene `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der browserunterstützten `.json`-Erweiterung gespeichert.

PWAs erfordern, dass eine Manifestdatei mit dem HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie noch nicht mit unserer externen Manifestdatei verlinkt ist. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element mit dem Attribut `rel="manifest"` und setzen das Attribut `href` auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird meistens verwendet, um auf Stylesheets zu verlinken, und bei PWAs auf die erforderliche Manifestdatei, wird jedoch auch verwendet, um [Site-Symbole zu etablieren](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl "favicon"-Stil-Symbole als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann in der `index.html`-Datei.

Optional können Sie auch zu einem Shortcut-Symbol aus Ihrem HTML verlinken.

### Beispielhafte Lösung

Das {{HTMLelement("head")}} von `index.html` könnte jetzt ähnlich aussehen wie:

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

Sehen Sie sich die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) und den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und wenn von einer `https://` URL (oder `localhost`) geladen, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA erkennen, und einige werden dazu auffordern, sie zu installieren. Um unsere PWA offline arbeitsfähig zu machen, müssen wir noch einen Service Worker hinzufügen.

## Debugging von Manifestdateien

Einige Browser-Entwicklertools bieten Einblick in das App-Manifest. In Edge, Firefox und Chrome-Entwicklertools sind die Manifestmitglieder und deren Werte unter dem "Anwendung"-Tab sichtbar.

![In den Entwicklertools enthält das linke Panel Links zum Manifest. Auf der rechten Seite steht App-Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Panel bietet den Namen der Manifestdatei als Link sowie Abschnitte zu Identität, Präsentation und Symbolen.

![Die Identitäts- und Präsentationsmanifestmitglieder sowie deren Werte, wenn vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden zusammen mit allen enthaltenen Werten angezeigt. In diesem Screenshot sind, obwohl wir die `orientation`- oder `id`-Mitglieder nicht enthalten haben, diese aufgelistet. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: In diesem Beispiel erfahren wir, dass, um eine App-Id anzugeben, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/ " gesetzt werden muss.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokollhandler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige enthalten, würden sie unter "Protokoll-Handler" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools zu weiteren Informationen zu diesem Thema.

![Die vier im Manifest enthaltenen Symbole, mit entferntem Hintergrund, da "nur den minimalen sicheren Bereich für maskierbare Symbole zeigen" angekreuzt ist.](manifest_icons.jpg)

Das Manifest-Panel enthält auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildergenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und deren Größen auflistet. Die produzierten Bilder entsprechen möglicherweise nicht Ihren Bedürfnissen, aber die Liste der Bildgrößen, die für jedes OS produziert werden, zeigt die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklertools sind nützlich, um zu erkennen, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, obwohl unsere Manifestdatei diese Mitglieder nicht umfasst. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Symbol an und zeigt `any` an, wenn kein Zweck explizit festgelegt ist.

![Das Manifest-Panel in den Firefox-Entwicklertools, das Werte für die nicht enthaltenen dir-, scope- und id-Mitglieder und die lang- und orientation-Mitglieder ohne zugehörige Werte anzeigt.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline arbeitsfähig zu machen, müssen wir einen [Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne die Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
