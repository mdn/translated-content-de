---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifeste-Datei ist eine JSON-Datei, die Informationen über die Merkmale dieser App bereitstellt, damit sie beim Installieren auf dem Gerät des Benutzers wie eine native App aussieht und sich verhält. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und Präsentationsanweisungen.

Obwohl gemäß der Spezifikation alle Manifest-Schlüssel oder -Mitglieder optional sind, erfordern einige Browser, Betriebssysteme und App-Distributoren [bestimmte Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members) für eine Web-App, um eine PWA zu sein. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Symbol, das einige Mindestanforderungen erfüllt, und den Typ des Anwendungsansichtsbereichs, in dem die PWA angezeigt werden soll, einschließen, erfüllt Ihre App die Manifestanforderungen einer PWA.

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

Bevor Sie die Manifestdatei speichern und aus unserer HTML-Datei darauf verlinken, können wir ein weiterhin kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das obige Beispiel würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den PWA-Namen zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Manifest/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Beschriftung neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Manifest/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Es wird als Beschriftung für Symbole auf Telefonbildschirmen verwendet, einschließlich im Dialogfeld "Zum Startbildschirm hinzufügen" auf iOS.

Wenn sowohl der `name` als auch der `short_name` vorhanden sind, wird der `name` in den meisten Fällen verwendet, und der `short_name` wenn der Platz begrenzt ist, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Manifest/description)
  - : Erklärung, was die Anwendung macht. Es bietet eine {{glossary("accessible description")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den untenstehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Verfolgen Sie sicher und vertraulich Ihren Menstruationszyklus. Geben Sie die Start- und Enddaten Ihrer Perioden ein und speichern Sie Ihre privaten Daten in Ihrem Browser auf Ihrem Gerät, ohne sie mit dem Rest der Welt zu teilen."
}
```

## App-Präsentation

Das Aussehen oder die Präsentation der auf dem Gerät installierten und offline erlebbaren PWA wird im Manifest definiert. Präsentations-Manifestmitglieder umfassen `start_url` und `display`, und Mitglieder, die verwendet werden können, um [Ihre App-Farben anzupassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Manifest/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Manifest/display)
  - : Steuert den Anzeigemodus der App einschließlich `fullscreen`, `standalone`, welcher die [PWA als eigenständige Anwendung anzeigt](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), `minimal-ui`, ähnlich der Ansicht im eigenständigen Modus jedoch mit UI-Elementen zur Steuerung der Navigation, und `browser`, welcher die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Manifest/orientation) Mitlied, das die Standardausrichtung der PWA als `portrait` oder `landscape` festlegt. Da unsere App in beiden Ausrichtungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Manifest/theme_color)
  - : Die Standard[farbe von Betriebssystem- und Browser-UI-Elementen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie der Statusleiste in einigen mobilen Erlebnissen und der Anwendungstitelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Manifest/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Es wird empfohlen, für einen nahtlosen Übergang zwischen App-Start und -Laden die [`<color>`](/de/docs/Web/CSS/color_value) zu verwenden, die als die [`background-color`](/de/docs/Web/CSS/background-color) der App deklariert ist.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben zu erstellen.

### Beispiel-Lösung

Da die Beispielanwendung eine einzelne Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Benutzeroberfläche des Browsers anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist die `background-color: #efe;` auf dem `body` Element-Selektor eingestellt. Wir verwenden `#eeffee`, um einen nahtlosen Übergang vom Platzhalteraussehen zum Appladen zu gewährleisten.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Launchern oder in Suchergebnissen von App-Stores. Die Größe des dargestellten Symbols und die Dateianforderungen variieren abhängig davon, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts gibt das `icons`-Mitglied ein Array von einem oder mehreren Symbolobjekten zur Verwendung in verschiedenen Kontexten an, jedes mit einem `src`- und `sizes`-Mitglied und optionalen `type`- und `purpose`-Mitgliedern. Jedes Symbolobjekt's `src` listet die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Mitglied liefert eine Liste von durch Leerzeichen getrennten Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten denselben Look und Feel haben, um sicherzustellen, dass Benutzer Ihre PWA erkennen, aber je größer das Symbol, desto detaillierter kann es sein. Während alle Symboldateien quadratisch sind, rendern einige Betriebssysteme verschiedene Formen, schneiden Abschnitte ab oder "maskieren" das Symbol, um die Benutzeroberfläche zu entsprechen, oder verkleinern und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der in Ordnung gerendert wird falls das Symbol als Kreis maskiert ist, ist der innere 80% des Bilddatei. Symbole werden als sicher zum Maskieren gekennzeichnet, indem das `purpose`-Mitglied auf `maskable` gesetzt wird, was das [Symbol als adaptiv definiert](https://web.dev/articles/maskable-icon).

In Safari, und daher für iOS und iPadOS, falls Sie das [nicht standardmäßige `apple-touch-icon`](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, haben diese Vorrang vor Manifest-deklarierten Symbolen.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie erstellt haben.

Mit den Worten "cycle" und "period" von CycleTracker und der grünen Farbschema, das wir gewählt haben, könnten unsere Symboldateien alle hellgrüne Quadrate mit einem grünen Kreis sein. Unsere kleinste Größe `circle.ico`, eine Symboldatei, die nur ein Kreis, der das Satzzeichen Perioden und das App-Farbschema darstellt, mit unseren mittleren Bildern, `circle.svg`, `tire.svg`, und `wheel.svg`, die mehr Details hinzufügen, von einem einfachen Kreis zu einem Reifen als es größer wird, und unsere größten Symbole, die ein detailliertes Rad mit Speichen und Schatten zeigen. Die Gestaltung von Symbolen liegt jedoch außerhalb des Umfangs dieses Tutorials.

```html hidden
<div>
  <img alt="ein grüner Kreis" src="circle.svg" role="img" />
  <img alt="ein einfaches Rad" src="tire.svg" role="img" />
  <img alt="ein detailliertes Rad" src="wheel.svg" role="img" />
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

Sie haben jetzt eine vollständig verwendbare Manifestdatei. Zeit, sie zu speichern und daraus in unserer HTML-Datei zu verlinken.

Die Dateierweiterung für Manifestdateien kann `.webappmanifest` sein, wie von der Spezifikation vorgeschlagen. Da es sich jedoch um eine JSON-Datei handelt, wird sie meist mit der browserunterstützten Erweiterung `.json` gespeichert.

PWAs erfordern, dass eine Manifestdatei aus dem HTML-Dokument der App verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie noch nicht mit unserer externen Manifest-JSON-Datei verlinkt ist. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element, mit dem `rel="manifest"` Attribut, und setzen das `href` Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird überwiegend verwendet, um zu Stylesheets zu verlinken, und, bei PWAs, zur erforderlichen Manifestdatei, es wird aber auch verwendet, um [Webseiten-Symbole festzulegen](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl "favicon"-Stil-Symbole als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten).

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest` Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, falls Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann aus der `index.html`-Datei.

Optional können Sie auch ein Verknüpfungssymbol aus Ihrer HTML verlinken.

### Beispiel-Lösung

Das {{HTMLelement("head")}} von `index.html` könnte nun ähnlich aussehen wie:

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

Mit einer Manifestdatei und bei der Lade über eine `https://` URL (oder `localhost`), werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als eine PWA erkennen, und einige werden auffordern, diese zu installieren. Um unsere PWA offline arbeitsfähig zu machen, müssen wir dennoch einen Service Worker hinzufügen.

## Debugging von Manifest-Dateien

Einige Browser-Entwicklertools bieten Einblicke in das App-Manifest. In den Entwicklerwerkzeugen von Edge, Firefox und Chrome sind die Manifestmitglieder und ihre Werte im "Application"-Panel sichtbar.

![In den Entwicklerwerkzeugen enthält das linke Panel Links zum Manifest. Die rechte Seite liest App Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest App-Panel bietet den Namen der Manifestdatei als Link sowie Identitäts-, Präsentations- und Symbolabschnitte.

![Die Identitäts- und Präsentationsmanifestmitglieder zusammen mit den Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifestmitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. Auf diesem Screenshot, während wir die `orientation` oder `id` Mitglieder nicht einbeziehen, werden sie gelistet. Das App-Panel kann verwendet werden, um die Manifestmitglieder zu sehen und sogar zu lernen: in diesem Beispiel erfahren wir, dass um eine App-Id zu spezifizieren, die der aktuellen Identität entspricht, das `id` Feld auf "/" gesetzt wird.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen, um das Manifest und die Symbole zu verbessern.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das nicht in diesem Tutorial behandelt wird. Hätten wir einige aufgenommen, würden sie unter "Protocol Handlers" gefunden werden. Da dieser Abschnitt leer ist, verlinken die Entwicklerwerkzeuge zu weiteren Informationen zum Thema.

![Die vier Symbole, die in der Manifestdatei enthalten sind, mit entferntem Hintergrund, wenn "show only the minimum safe area for maskable icons" angekreuzt ist.](manifest_icons.jpg)

Das Manifestpanel enthält auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erzeugten Bilder mögen möglicherweise nicht Ihren Bedürfnissen entsprechen, aber die Liste der Bildgrößen, die für jedes Betriebssystem produziert werden, demonstriert die Vielfalt, wo und wie PWAs verwendet werden können.

Die Entwicklertools sind nützlich, um zu erkennen, welche Manifestmitglieder unterstützt werden. Beachten Sie, dass die Firefox Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, auch wenn unsere Manifestdatei diese Mitglieder nicht einbezog. Firefox enthält auch den Wert des `purpose`-Mitglieds für jedes Symbol und zeigt `any` an, wenn kein Zweck explizit gesetzt ist.

![Der Manifest-Tab in den Firefox Entwicklertools zeigt Werte für die nicht eingeschlossenen dir, scope und id Mitglieder, sowie die lang und orientation Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline arbeitsfähig zu machen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne das Benutzen eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
