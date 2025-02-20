---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 5dc85adc81be4e4164c5e5df147509117eed2ea5
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen einer App bereitstellt, damit sie auf dem Gerät des Benutzers wie eine native App aussieht und sich verhält, wenn sie installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Icons und ihrer Präsentationsanweisungen.

Obwohl laut Spezifikation alle Manifest-Schlüssel (oder -Elemente) optional sind, haben einige Browser, Betriebssysteme und App-Anbieter [spezifische erforderliche Elemente](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App als PWA anerkannt wird. Wenn Sie einen Namen oder Kurzname, die Start-URL, ein Icon, das einige Mindestanforderungen erfüllt, und den Typ des Anwendungs-Viewports angeben, in dem die PWA angezeigt werden soll, erfüllt Ihre App die Manifestanforderungen für eine PWA.

Eine minimalistische Manifestdatei für unsere App zur Verfolgung des Menstruationszyklus könnte folgendermaßen aussehen:

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

Bevor wir die Manifestdatei speichern und sie von unserer HTML-Datei aus verlinken, können wir ein weiterhin kurzes, aber informativeres JSON-Objekt erstellen, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, die obige Datei würde funktionieren, aber lassen Sie uns die Elemente in diesem Beispiel und einige andere besprechen, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON entweder ein `name`- oder `short_name`-Element oder beides enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem App-Icon usw.
- [`short_name`](/de/docs/Web/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Er wird z. B. als Beschriftung für Icons auf Mobilbildschirmen und im "Zum Startbildschirm hinzufügen"-Dialog auf iOS verwendet.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird `name` in den meisten Fällen verwendet, und `short_name` wird verwendet, wenn nur begrenzter Platz zur Verfügung steht, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Manifest/Reference/description)
  - : Erklärung, was die Anwendung tut. Es bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den unten stehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl hinzufügen.

### Beispiel-Lösung

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und offline verfügbaren Erlebnisse einer PWA wird im Manifest definiert. Zu den Präsentations-Manifest-Elementen gehören `start_url` und `display` sowie Elemente, die Sie verwenden können, um [die App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Manifest/Reference/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, wodurch die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) angezeigt wird, `minimal-ui`, das einem eigenständigen Modus ähnelt, jedoch mit Benutzerschnittstellenelementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Manifest/Reference/orientation)-Element, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Element weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Manifest/Reference/theme_color)
  - : Die Standard-[Farbe der Betriebssystem- und Browser-Benutzerschnittstellelemente](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie z. B. die Statusleiste bei einigen mobilen Erlebnissen und die Titelleiste der App auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen reibungslosen Übergang zwischen dem Starten und Laden der App zu schaffen, wird empfohlen, die [`<color>`](/de/docs/Web/CSS/color_value) zu verwenden, die als [`background-color`](/de/docs/Web/CSS/background-color) der App deklariert ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zu der Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine Einzelseite ist, können wir `"/"` als `start_url` verwenden oder das Element ganz weglassen. Aus demselben Grund können wir die App ohne Browser-Benutzerschnittstelle anzeigen, indem wir den `display`-Wert auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist die `background-color: #efe;` auf dem Selektor des `body`-Elements eingestellt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang vom Platzhalter-Erscheinungsbild zum Laden der App zu gewährleisten.

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

## App-Ikonografie

PWA-Icons helfen Benutzern, Ihre App zu identifizieren, machen sie optisch ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Icon erscheint auf Startbildschirmen, App-Launchern oder in App-Store-Suchergebnissen. Die Größe des gerenderten Icons und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Im JSON-Objekt des Manifests gibt das `icons`-Element ein Array von einem oder mehreren Icon-Objekten für verschiedene Kontexte an, jeweils mit einem `src`- und `sizes`-Element sowie optionalen `type`- und `purpose`-Elementen. In jedem Icon-Objekt listet `src` die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Element gibt eine durch Leerzeichen getrennte Liste von Größen an, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert entspricht dem {{HTMLElement("link")}}-Element [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut. Das `type`-Element listet den MIME-Typ des Bildes auf.

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

Alle Icons sollten das gleiche Aussehen und Gefühl haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen. Je größer das Icon, desto mehr Details kann es enthalten. Zwar sind alle Icon-Dateien quadratisch, aber einige Betriebssysteme rendern sie in unterschiedlichen Formen, schneiden Abschnitte ab oder "maskieren" das Icon, um die Benutzeroberfläche zu erfüllen, oder verkleinern und zentrieren das Icon mit einem Hintergrund, wenn das Icon nicht maskierbar ist. Der [sichere Bereich](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der gut gerendert wird, wenn das Icon als Kreis maskiert wird, ist der innere 80% der Bilddatei. Icons werden als sicher für Maskierung gekennzeichnet, wenn das Element `purpose` auf `maskable` gesetzt ist, was das [Icon als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und somit für iOS und iPadOS, haben Sie die Möglichkeit, das [nicht standardisierte `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} anzugeben. Diese Icons haben Vorrang vor den im Manifest definierten Icons.

### Aufgabe

Fügen Sie die Icons in die Manifestdatei ein, die Sie konstruiert haben.

Die Worte "cycle" und "period" von CycleTracker in Verbindung mit dem gewählten grünen Farbthema können durch Bilder umgesetzt werden, die alle hellgrüne Quadrate mit einem grünen Kreis darstellen. Unser kleinstes Icon `circle.ico` könnte einfach ein Kreis sein, der das Satzzeichen "Punkt" und das Farbthema der App repräsentiert. Größere Icons (wie `circle.svg`, `tire.svg` und `wheel.svg`) könnten von einem schlichten Kreis bis zu einem detaillierten Rad mit Speichen und Schatten gehen. Das Design von Icons liegt jedoch außerhalb des Umfangs dieses Tutorials.

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

## Hinzufügen des Manifests zur App

Sie haben jetzt eine voll funktionsfähige Manifestdatei. Es ist an der Zeit, sie zu speichern und in unsere HTML-Datei zu verlinken.

Die Dateiendung der Manifestdatei kann `.webappmanifest` gemäß der Spezifikation sein. Da es jedoch eine JSON-Datei ist, wird sie meist mit der browser-kompatiblen Erweiterung `.json` gespeichert.

PWAs erfordern, dass das Manifest von der HTML-Datei der App aus verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie nicht mit unserer externen Manifestdatei verlinkt ist. Um die externe JSON-Ressource hinzuzufügen, verwenden wir das `<link>`-Element mit dem Attribut `rel="manifest"` und setzen das Attribut `href` auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten zum Verlinken von Stylesheets und, bei PWAs, der erforderlichen Manifestdatei verwendet, wird aber auch genutzt, um [Seiten-Icons festzulegen](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl "Favicons" als auch Icons für die Startbildschirm-Apps auf mobilen Geräten) und andere Dinge.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn die `.webmanifest`-Erweiterung verwendet wird, setzen Sie `type="application/manifest+json"`, falls Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den oben genannten Schritten erstellt haben, und verlinken Sie sie in der `index.html`-Datei.

Optional können Sie auch ein Shortcut-Icon in Ihrem HTML verlinken.

### Beispiel-Lösung

Das {{HTMLelement("head")}} der `index.html`-Datei könnte nun wie folgt aussehen:

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

Sehen Sie sich die [`cycletracker.json`-Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) und den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und bei Laden über eine `https://`-URL (oder `localhost`) erkennen [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA und einige werden einen Installationshinweis anzeigen. Um unsere PWA offline nutzbar zu machen, müssen wir noch einen Service Worker hinzufügen.

## Fehlerbehebung bei Manifestdateien

Einige Entwicklerwerkzeuge von Browsern bieten Einblicke in das App-Manifest. In den Entwicklerwerkzeugen von Edge, Firefox und Chrome sind die Manifest-Elemente und deren Werte unter dem Bereich "Application" sichtbar.

![In den Entwicklerwerkzeugen enthält das linke Panel Links zum Manifest. Auf der rechten Seite steht "App Manifest" mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Panel zeigt den Namen der Manifestdatei als Link sowie Abschnitte zu Identität, Präsentation und Icons.

![Die Manifest-Elemente zu Identität und Präsentation sowie deren Werte (falls vorhanden).](manifest_identity_and_presentation.jpg)

Unterstützte Manifest-Elemente werden angezeigt, zusammen mit allen eingeschlossenen Werten. In diesem Screenshot, obwohl wir die `orientation`- oder `id`-Elemente nicht eingeschlossen haben, werden sie aufgelistet. Das App-Panel kann verwendet werden, um die Manifest-Elemente zu sehen und sogar zu lernen: In diesem Beispiel erfahren wir, dass Sie eine App-Id angeben können, indem Sie das Element `id` auf "/" setzen.

Chrome und Edge liefern außerdem Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Icons.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir welche eingeschlossen, würden sie unter "Protocol Handlers" zu finden sein. Da dieser Abschnitt leer ist, bieten die Entwicklerwerkzeuge einen Link zu weiteren Informationen zu diesem Thema.

![Die vier in der Manifestdatei enthaltenen Icons mit entferntem Hintergrund, da "show only the minimum safe area for maskable icons" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel enthält auch Einblicke in den sicheren Bereich für maskierbare Icons und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android-, Apple- und Windows-Betriebssysteme sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erstellten Bilder müssen möglicherweise nicht Ihren Anforderungen entsprechen, aber die erzeugte Liste der Bildgrößen gibt einen Eindruck von der Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklerwerkzeuge sind nützlich, um festzustellen, welche Manifest-Elemente unterstützt werden. Beachten Sie, dass die Entwicklerwerkzeuge von Firefox Einträge für `dir`, `lang`, `orientation`, `scope` und `id` enthalten, selbst wenn diese Elemente nicht in unserer Manifestdatei enthalten sind. Firefox zeigt auch den Wert des `purpose`-Elements für jedes Icon an und zeigt `any` an, wenn kein Zweck explizit gesetzt ist.

![Das Manifest-Panel in den Entwicklerwerkzeugen von Firefox zeigt Werte für die nicht enthaltenen Elemente dir, scope und id sowie die Elemente lang und orientation ohne zugehörige Werte.](manifest_firefox.jpg)

## Als Nächstes

Um unsere PWA offline nutzbar zu machen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne die Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
