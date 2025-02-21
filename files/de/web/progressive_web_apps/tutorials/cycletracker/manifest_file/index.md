---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen dieser App bereitstellt, damit sie beim Installieren auf dem Gerät des Benutzers wie eine native App aussieht und sich verhält. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, der Symbole und der Präsentationsrichtlinien.

Obwohl laut Spezifikation alle Manifest-Schlüssel (oder Mitglieder) optional sind, haben einige Browser, Betriebssysteme und App-Vertriebskanäle [bestimmte erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App eine PWA sein kann. Indem Sie einen Namen oder Kurzname, die Start-URL, ein Symbol, das einige Mindestanforderungen erfüllt, und den Anwendungsansichtstyp, in dem die PWA angezeigt werden sollte, einschließen, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere Menstruationszyklus-Tracking-App könnte so aussehen:

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

Bevor wir die Manifestdatei speichern und mit ihr in unserer HTML-Datei verknüpfen, können wir ein noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, das Obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name` oder `short_name` Mitglied, oder beide enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` anzuzeigen. Er wird als Beschriftung für Symbole auf Telefonbildschirmen, einschließlich im "Zum Home-Bildschirm hinzufügen"-Dialog auf iOS, verwendet.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird in den meisten Fällen der `name` verwendet, während `short_name` verwendet wird, wenn nur begrenzter Platz zur Verfügung steht, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung, was die Anwendung macht. Sie bietet eine {{Glossary("accessible_description", "barrierefreie Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den Text unten verwenden oder diskretere oder beschreibende Werte sowie eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und Offline-Erfahrungen einer PWA sind im Manifest definiert. Präsentationsmanifest-Mitglieder umfassen `start_url` und `display`, sowie Mitglieder, die verwendet werden können, um [Ihre App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, das die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das ähnlich wie eine eigenständige Ansicht ist, jedoch mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation) Mitglied, das die Standardorientierung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standard-[Farbe von Betriebssystem- und Browser-UI-Elementen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie beispielsweise der Statusleiste bei mobilen Erlebnissen und der Anwendungs-Titelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen reibungslosen Übergang zwischen App-Start und -Laden zu schaffen, wird empfohlen, die [`<color>`](/de/docs/Web/CSS/color_value) zu verwenden, die als [`background-color`](/de/docs/Web/CSS/background-color) der App deklariert ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine Einzelseite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied vollständig weglassen. Aus dem gleichen Grund können wir die App ohne die Benutzeroberfläche des Browsers anzeigen, indem wir das `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist das `background-color: #efe;` auf dem `body`-Element-Selektor festgelegt. Wir verwenden `#eeffee`, um einen reibungslosen Übergang vom Platzhalter-Erscheinungsbild zum Laden der App zu gewährleisten.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Auffindbarkeit. Das App-Symbol der PWA erscheint auf Startbildschirmen, App-Launchern oder Suchergebnissen im App-Store. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts gibt das `icons` Mitglied ein Array von einem oder mehreren Symbolobjekten an, die in verschiedenen Kontexten verwendet werden, jeweils mit einem `src` und `sizes` Mitglied, sowie optionalen `type` und `purpose` Mitgliedern. Jedes Symbolobjekt `src` listet die Quelle einer einzelnen Bilddatei auf. Das `sizes` Mitglied bietet eine Liste von durch Leerzeichen getrennten Größen, für die das jeweilige Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das Attribut [`sizes`](/de/docs/Web/HTML/Element/link#sizes) des {{HTMLElement("link")}} Elements. Das `type` Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten dasselbe Aussehen und Gefühl haben, damit Benutzer Ihre PWA erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symboldateien Quadrate sind, rendern einige Betriebssysteme verschiedene Formen, indem sie Abschnitte abschneiden oder das Symbol "maskieren", um es an die Benutzeroberfläche anzupassen, oder das Symbol verkleinern und zentrieren mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Der [sichere Bereich](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der korrekt gerendert wird, wenn das Symbol als Kreis maskiert ist, ist die innere 80% der Bilddatei. Symbole werden als sicher zum Maskieren betrachtet, wenn das `purpose` Mitglied auf `maskable` gesetzt ist, was das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari, und somit für iOS und iPadOS, wird das [nicht standardmäßige `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} aufgenommen und hat Vorrang vor im Manifest deklarierten Symbolen.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie erstellt haben.

In Anlehnung an die Wörter "cycle" und "period" von CycleTracker und die grüne Themenfarbe, die wir ausgewählt haben, könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, eine Symboldatei, die nur ein Kreis ist, der das Satzzeichen Punkt und die Themenfarbe der App darstellt, wobei unsere Zwischenbilder `circle.svg`, `tire.svg` und `wheel.svg` beim Übergang von einem einfachen Kreis zu einem Reifen mehr Details hinzufügen, je größer das Symbol wird, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Das Entwerfen von Symbolen ist jedoch nicht Teil dieses Tutorials.

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

Sie haben jetzt eine vollständig nutzbare Manifestdatei. Zeit, sie zu speichern und in unsere HTML-Datei aufzunehmen.

Die Dateiendung des Manifests kann die spezifikationsgemäße `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie am häufigsten mit der vom Browser unterstützten `.json` Erweiterung gespeichert.

PWAs erfordern, dass eine Manifestdatei aus dem HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie noch nicht mit unserer externen Manifest-JSON-Datei verlinkt ist. Um die externe JSON-Ressource einzuschließen, verwenden wir das `<link>` Element mit dem `rel="manifest"` Attribut und setzen das `href` Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>` Element wird hauptsächlich verwendet, um zu Stylesheets zu verlinken, und bei PWAs die erforderliche Manifestdatei, es wird jedoch auch verwendet, um [Website-Symbole festzulegen](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl "Favicon"-Stil-Symbole als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest` Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann mit der `index.html` Datei.

Optional können Sie von Ihrem HTML aus auch zu einem Shortcut-Symbol verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} von `index.html` könnte jetzt etwa so aussehen:

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

Sehen Sie sich die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und betrachten Sie den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub.

Mit einer Manifestdatei und wenn sie von einer `https://` URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Seite als PWA erkennen und einige werden einen Installationshinweis anzeigen. Um unsere PWA offline funktionsfähig zu machen, müssen wir noch einen Service Worker hinzufügen.

## Debuggen von Manifestdateien

Einige Entwicklerwerkzeuge von Browsern bieten Einblicke in das App-Manifest. In Edge, Firefox und den Chrome-Entwicklerwerkzeugen sind die Manifestmitglieder und ihre Werte im "Application"-Panel sichtbar.

![In den Entwicklerwerkzeugen enthält das linke Panel Links zum Manifest. Die rechte Seite zeigt das App-Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Panel gibt den Namen der Manifestdatei als Link an und Identity-, Präsentations- und Symbolsektionen.

![Die Identity- und Präsentations-Manifestmitglieder zusammen mit Werten, sofern vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. Auf diesem Screenshot, obwohl wir die `orientation` oder `id` Mitglieder nicht aufgenommen haben, werden sie aufgelistet. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar mehr zu lernen: in diesem Beispiel erfahren wir, dass, um eine App-Id anzugeben, die mit der aktuellen Identität übereinstimmt, das `id` Feld auf "/" gesetzt werden sollte.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen zur Verbesserung des Manifests und der Symbole.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir welche eingeschlossen, würden sie unter "Protocol Handlers" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwicklerwerkzeuge zu weiteren Informationen zum Thema.

![Die vier im Manifest enthaltenen Symbole, mit entferntem Hintergrund, da "nur das minimale sichere Bereich für maskierbare Symbole anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifestpanel bietet auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildergenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erzeugten Bilder entsprechen möglicherweise nicht Ihren Anforderungen, aber die Liste der Bildgrößen, die für jedes OS betrachtet werden, zeigt die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklerwerkzeuge sind nützlich, um zu identifizieren, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass Firefox-Entwicklerwerkzeuge Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, obwohl unsere Manifestdatei diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose` Mitglieds für jedes Symbol an, wobei `any` angezeigt wird, wenn kein Zweck explizit festgelegt ist.

![Das Manifest-Panel in den Firefox-Entwicklerwerkzeugen, das Werte für die nicht enthaltenen dir-, scope- und id-Mitglieder zeigt, sowie die lang- und orientierungsmitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Nächste Schritte

Um unsere PWA offline funktionsfähig zu machen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
