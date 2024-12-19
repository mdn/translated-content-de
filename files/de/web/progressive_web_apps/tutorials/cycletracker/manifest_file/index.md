---
title: "CycleTracker: Manifest und Ikonographie"
short-title: Manifest und Ikonographie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifestdatei ist eine JSON-Datei, die Informationen über die Funktionen dieser App bereitstellt, um sie wie eine native App aussehen und verhalten zu lassen, wenn sie auf dem Gerät des Benutzers installiert ist. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und darstellerischer Vorgaben.

Während gemäß der Spezifikation alle Manifest-Schlüssel oder -Mitglieder optional sind, haben einige Browser, Betriebssysteme und App-Vertriebskanäle [bestimmte Mitglieder erforderlich](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App eine PWA ist. Indem Sie einen Namen oder einen Kurznamen, die Start-URL, ein Symbol, das bestimmte Mindestanforderungen erfüllt, und den Typ des Anwendungs-Viewports, in dem die PWA angezeigt werden soll, einschließen, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifestdatei für unsere Menstruations-Zyklus-Tracking-App könnte folgendermaßen aussehen:

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

Bevor wir die Manifestdatei speichern und von unserer HTML-Datei aus darauf verlinken, können wir ein nach wie vor knappes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonographie der PWA zu definieren. Ja, das Obige würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und ein paar andere Mitglieder besprechen, die es den Manifestdateien ermöglichen, das Erscheinungsbild unserer CycleTracker-PWA besser zu definieren.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Manifest/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Bezeichnung neben dem Anwendungs-Symbol usw.
- [`short_name`](/de/docs/Web/Manifest/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genug Platz vorhanden ist, um den `name` anzuzeigen. Es wird als Bezeichnung für Symbole auf Telefonbildschirmen verwendet, einschließlich im Dialogfeld „Zum Startbildschirm hinzufügen“ auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird in den meisten Fällen der `name` verwendet, während `short_name` verwendet wird, wenn nur begrenzter Platz zur Verfügung steht, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Manifest/description)
  - : Erklärung dessen, was die Anwendung macht. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifestdatei. Sie können den untenstehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl.

### Beispiel-Lösung

```js
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation einer installierten und offline verfügbar gemachten PWA werden im Manifest definiert. Präsentationsmanifest-Mitglieder umfassen `start_url` und `display` sowie Mitglieder, mit denen Sie [Ihre App-Farben anpassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) können, einschließlich `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Manifest/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Manifest/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, das die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, das einer eigenständigen Ansicht ähnelt, aber mit UI-Elementen zur Steuerung der Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Manifest/orientation)-Mitglied, das die Standardausrichtung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Ausrichtungen gut funktioniert, lassen wir dieses Mitglied weg.

### Farben

- [`theme_color`](/de/docs/Web/Manifest/theme_color)
  - : Die Standard-[Farbe der Betriebssystem- und Browser-Benutzeroberflächenelemente](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie die Statusleiste in einigen mobilen Erfahrungen und die Anwendungstitelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Manifest/background_color)
  - : Eine Platzhalterfarbe, die als [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Um einen nahtlosen Übergang zwischen dem Start der App und dem Laden zu schaffen, wird empfohlen, die im `<color>`-Tag deklarierte [`background-color`](/de/docs/Web/CSS/background-color) der App zu verwenden.

### Aufgabe

Fügen Sie Präsentationsdefinitionen zur Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine einzelne Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne die Browser-Benutzeroberfläche anzeigen, indem wir das `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist die `background-color: #efe;` auf dem `body`-Element-Selektor eingestellt. Wir verwenden `#eeffee`, um einen nahtlosen Übergang vom Platzhalter-Erscheinungsbild zum Laden der App sicherzustellen.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie visuell ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Launchern oder Suchergebnissen in App-Stores. Die Größe des gerenderten Symbols und die Dateianforderungen variieren je nachdem, wo es angezeigt wird und von wem. Im Manifest definieren Sie Ihre Bilder.

Innerhalb des Manifest-JSON-Objekts gibt das `icons`-Mitglied ein Array von einem oder mehreren Symbolobjekten zur Verwendung in verschiedenen Kontexten an, jeweils mit einem `src`- und `sizes`-Mitglied sowie optionalen `type`- und `purpose`-Mitgliedern. Jede `src`-Liste eines Symbolobjekts gibt die Quelle einer einzelnen Bilddatei an. Das `sizes`-Mitglied liefert eine Liste raumgetrennter Größen, für die dieses bestimmte Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Element/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten das gleiche Aussehen und Gefühl haben, um sicherzustellen, dass Benutzer Ihre PWA wiedererkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Symboldateien quadratisch sind, rendern einige Betriebssysteme unterschiedliche Formen, indem sie Abschnitte wegschneiden oder das Symbol „maskieren“, um die Benutzeroberfläche zu erfüllen, oder das Symbol verkleinern und zentrieren, sofern es nicht maskierbar ist. Die [Sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der okay gerendert wird, wenn das Symbol als Kreis maskiert wird, ist der innere 80% des Bildes. Symbole werden als sicher zum Maskieren durch das `purpose`-Mitglied gekennzeichnet, welches, wenn auf `maskable` gesetzt, das [Symbol als adaptiv](https://web.dev/articles/maskable-icon) definiert.

In Safari und daher für iOS und iPadOS, wenn Sie das [nicht standardmäßige `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im {{HTMLElement("head")}} des HTML-Dokuments über {{HTMLElement("link")}} einfügen, werden diese die im Manifest deklarierten Symbole übersteuern.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie konstruiert haben.

In Anlehnung an die Worte „Zyklus“ und „Periode“ von CycleTracker und der grünen Theme-Farbe, die wir gewählt haben, könnten unsere Symbolbilder alle hellgrüne Quadrate mit einem grünen Kreis sein. Unser kleinstes Symbol `circle.ico`, eine Symboldatei, die nur einen Kreis darstellt, welcher das Satzzeichen der Periode und die Themefarbe der App repräsentiert, mit unseren Zwischengrößenbildern `circle.svg`, `tire.svg` und `wheel.svg`, die mehr Details hinzufügen, während sie von einem einfachen Kreis zu einem Reifen werden, je größer sie werden, wobei unsere größten Symbole ein detailliertes Rad mit Speichen und Schatten sind. Dennoch geht das Design von Symbolen über den Umfang dieses Tutorials hinaus.

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

Sie haben jetzt eine voll funktionsfähige Manifestdatei. Zeit, sie zu speichern und darauf von unserer HTML-Datei aus zu verlinken.

Die Dateierweiterung der Manifestdatei kann die Spezifikationsvorgabe `.webappmanifest` sein. Da es sich jedoch um eine JSON-Datei handelt, wird sie meist mit der browsergestützten Erweiterung `.json` gespeichert.

PWAs erfordern, dass eine Manifestdatei vom HTML-Dokument der App aus verlinkt wird. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, weil sie noch nicht mit unserer externen Manifest-JSON-Datei verlinkt. Um die externe JSON-Ressource einzubinden, verwenden wir das `<link>`-Element, mit dem `rel="manifest"`-Attribut, und setzen das `href`-Attribut auf den Ort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird hauptsächlich verwendet, um auf Stylesheets zu verlinken, und bei PWAs ebenfalls, um die erforderliche Manifestdatei zu verlinken, es wird aber auch verwendet, um [Website-Icons zu etablieren](/de/docs/Web/HTML/Attributes/rel#icon) (sowohl „Favicon“-ähnliche Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten), und weiteres.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden und Ihr Server diesen MIME-Typ nicht unterstützt, setzen Sie `type="application/manifest+json"`.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie dann darauf von der `index.html`-Datei.

Optional, verlinken Sie ebenfalls ein Shortcut-Symbol aus Ihrem HTML.

### Beispiel-Lösung

Das {{HTMLelement("head")}} von `index.html` könnte nun folgendermaßen aussehen:

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

Sehen Sie sich die [`cycletracker.json` Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und den [Projekt-Quellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub.

Mit einer Manifestdatei und beim Laden von einer `https://`-URL (oder `localhost`) werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Website als PWA erkennen und einige werden vorschlagen, sie zu installieren. Um unsere PWA offline funktionsfähig zu machen, müssen wir aber noch einen Service Worker hinzufügen.

## Debugging von Manifestdateien

Einige Browser-Entwicklungstools bieten Einblicke in das App-Manifest. In den Entwicklungstools von Edge, Firefox und Chrome sind die Manifest-Mitglieder und ihre Werte im "Anwendung"-Panel sichtbar.

![In den Entwicklertools umfasst das linke Panel Links zum Manifest. Die rechte Seite liest App-Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das Manifest-App-Panel stellt den Namen der Manifestdatei als Link bereit sowie Abschnitte zur Identität, Präsentation und Icons.

![Die Identitäts- und Präsentationsmanifest-Mitglieder zusammen mit Werten, falls vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifest-Mitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. In diesem Screenshot sind, obwohl wir die `orientation`- oder `id`-Mitglieder nicht eingeschlossen haben, diese aufgelistet. Das App-Panel kann verwendet werden, um die Manifest-Mitglieder zu sehen und sogar zu lernen: in diesem Beispiel erfahren wir, dass um eine App-ID anzugeben, die mit der aktuellen Identität übereinstimmt, das `id`-Feld auf "/" gesetzt werden soll.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler sowie Informationen, um das Manifest und die Icons zu verbessern.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige eingeschlossen, würden sie sich unter "Protokoll-Handler" finden. Da dieser Abschnitt leer ist, verlinken die Entwicklertools auf weitere Informationen zum Thema.

![Die vier Icons, die in der Manifestdatei enthalten sind, mit entfernten Hintergründen, da "zeige nur den minimal sicheren Bereich für maskierbare Symbole" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel umfasst auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bildgenerator](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Obwohl die erzeugten Bilder möglicherweise nicht Ihren Anforderungen entsprechen, zeigt die Liste der für jedes Betriebssystem erzeugten Bildgrößen die Vielfalt der Einsatzmöglichkeiten von PWAs.

Die Entwicklertools sind nützlich, um zu identifizieren, welche Manifest-Mitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwicklertools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, obwohl unsere Manifestdatei diese Mitglieder nicht enthielt. Firefox zeigt auch den Wert des `purpose`-Mitglieds für jedes Symbol an und zeigt `any` an, wenn kein Zweck explizit gesetzt ist.

![Das Manifest-Panel in den Firefox-Entwicklertools, zeigt Werte für nicht enthaltene dir-, scope- und id-Mitglieder, und die lang- und orientation-Mitglieder ohne zugehörige Werte.](manifest_firefox.jpg)

## Als nächstes

Um unsere PWA offline funktionsfähig zu machen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), was wir ohne die Verwendung eines Frameworks tun werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
