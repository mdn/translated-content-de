---
title: "CycleTracker: Manifest und Ikonografie"
short-title: Manifest und Ikonografie
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

Eine PWA-Manifeste-Datei ist eine JSON-Datei, die Informationen über die Funktionen der App bereitstellt, damit sie bei Installation auf dem Gerät des Benutzers wie eine native App aussieht und sich verhält. Das Manifest enthält Metadaten für Ihre App, einschließlich ihres Namens, ihrer Symbole und Präsentationsanweisungen.

Obwohl laut Spezifikation alle Schlüssel (oder Mitglieder) im Manifest optional sind, haben einige Browser, Betriebssysteme und App-Vertriebsplattformen [bestimmte erforderliche Mitglieder](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members), damit eine Web-App als PWA betrachtet wird. Indem Sie einen Namen oder Kurznamen, die Start-URL, ein Symbol, das bestimmte Mindestanforderungen erfüllt, und den Anzeigetyp der Anwendung angeben, erfüllt Ihre App die Manifestanforderungen einer PWA.

Eine minimalistische Manifest-Datei für unsere App zur Nachverfolgung des Menstruationszyklus könnte folgendermaßen aussehen:

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

Bevor Sie die Manifest-Datei speichern und sie in unsere HTML-Datei einbinden, können wir ein noch kurzes, aber informativeres JSON-Objekt entwickeln, um die Identität, Präsentation und Ikonografie der PWA zu definieren. Ja, das obige Beispiel würde funktionieren, aber lassen Sie uns die Mitglieder in diesem Beispiel und einige andere Mitglieder besprechen, die es ermöglichen, Manifestdateien besser aussehen zu lassen.

## App-Identität

Um Ihre PWA zu identifizieren, muss das JSON ein `name`- oder `short_name`-Mitglied oder beides enthalten, um den Namen der PWA zu definieren. Es kann auch eine `description` enthalten.

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
  - : Der Name der PWA. Dies ist der Name, der verwendet wird, wenn das Betriebssystem Anwendungen auflistet, als Label neben dem Anwendungssymbol usw.
- [`short_name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
  - : Der Name der PWA, der dem Benutzer angezeigt wird, wenn nicht genügend Platz vorhanden ist, um den `name` anzuzeigen. Es wird als Label für Symbole auf Telefonscreens verwendet, einschließlich im "Zum Home-Bildschirm hinzufügen"-Dialog auf iOS.

Wenn sowohl `name` als auch `short_name` vorhanden sind, wird `name` in den meisten Fällen verwendet, während `short_name` verwendet wird, wenn der Platz begrenzt ist, um den Anwendungsnamen anzuzeigen.

- [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description)
  - : Erklärung, was die Anwendung macht. Sie bietet eine {{Glossary("accessible_description", "zugängliche Beschreibung")}} des Zwecks und der Funktion der Anwendung.

### Aufgabe

Schreiben Sie die ersten Zeilen Ihrer Manifest-Datei. Sie können den nachstehenden Text verwenden oder diskretere oder beschreibendere Werte und eine Beschreibung Ihrer Wahl wählen.

### Beispiel-Lösung

```json
{
  "name": "CycleTracker: Period Tracking app",
  "short_name": "CT",
  "description": "Securely and confidentially track your menstrual cycle. Enter the start and end dates of your periods, saving your private data to your browser on your device, without sharing it with the rest of the world."
}
```

## App-Präsentation

Das Erscheinungsbild oder die Präsentation der installierten und Offline-Erfahrungen einer PWA sind im Manifest definiert. Präsentationsmanifest-Mitglieder umfassen `start_url` und `display` sowie Mitglieder, mit denen Sie [Ihre App-Farben anpassen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) können, wie z.B. `theme_color` und `background_color`.

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)

  - : Die Startseite, wenn ein Benutzer die PWA startet.

- [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)
  - : Steuert den Anzeigemodus der App, einschließlich `fullscreen`, `standalone`, was die [PWA als eigenständige Anwendung](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app) anzeigt, `minimal-ui`, ähnlich einem eigenständigen View, aber mit UI-Elementen zur Navigation, und `browser`, das die App in einer regulären Browseransicht öffnet.

Es gibt auch ein [`orientation`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/orientation)-Mitglied, das die Standardorientierung der PWA als `portrait` oder `landscape` definiert. Da unsere App in beiden Orientierungen gut funktioniert, werden wir dieses Mitglied weglassen.

### Farben

- [`theme_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)
  - : Die Standard-[Farbe von Betriebssystem- und Browser-UI-Elementen](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#define_a_theme_color) wie z.B. der Statusleiste auf einigen mobilen Erlebnissen und der Anwendungstitelleiste auf Desktop-Betriebssystemen.
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
  - : Eine Platzhalterfarbe, die als der [Hintergrund der App](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors#customize_the_app_window_background_color) angezeigt wird, bis das CSS geladen ist. Für einen fließenden Übergang zwischen dem Start der App und dem Laden wird empfohlen, die im App-Design deklarierte [`<color>`](/de/docs/Web/CSS/color_value) als [`background-color`](/de/docs/Web/CSS/background-color)-Farbe der App zu verwenden.

### Aufgabe

Fügen Sie Präsentationsdefinitionen der Manifestdatei hinzu, die Sie in der vorherigen Aufgabe begonnen haben.

### Beispiel-Lösung

Da die Beispielanwendung eine einzige Seite ist, können wir `"/"` als `start_url` verwenden oder das Mitglied ganz weglassen. Aus demselben Grund können wir die App ohne Browser-UI anzeigen, indem wir `display` auf `standalone` setzen.

In [unserem CSS](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS#css_content) ist die `background-color: #efe;` auf dem `body`-Element-Selektor eingestellt. Wir verwenden `#eeffee`, um einen fließenden Übergang vom Platzhalteraussehen zum Laden der App zu gewährleisten.

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

PWA-Symbole helfen Benutzern, Ihre App zu identifizieren, machen sie ansprechender und verbessern die Auffindbarkeit. Das PWA-App-Symbol erscheint auf Startbildschirmen, App-Startern oder in Suchergebnissen von App-Stores. Die Größe des angezeigten Symbols und die Dateianforderungen variieren abhängig von der Anzeige und dem Benutzer. Im Manifest definieren Sie Ihre Bilder.

Im JSON-Objekt des Manifests spezifiziert das `icons`-Mitglied ein Array aus einem oder mehreren Symbolobjekten für verschiedene Kontexte, jedes mit einem `src`- und `sizes`-Mitglied sowie optionalen `type`- und `purpose`-Mitgliedern. Jedes Symbolobjekt listet mit `src` die Quelle einer einzelnen Bilddatei auf. Das `sizes`-Mitglied liefert eine Liste aus leerzeichen-getrennten Größen, für die dieses spezielle Bild verwendet werden soll, oder das Schlüsselwort `any`; der Wert ist derselbe wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/link#sizes)-Attribut des {{HTMLElement("link")}}-Elements. Das `type`-Mitglied listet den MIME-Typ des Bildes auf.

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

Alle Symbole sollten denselben Look and Feel haben, um sicherzustellen, dass Benutzer Ihre PWA sofort erkennen, aber je größer das Symbol, desto mehr Details kann es enthalten. Während alle Bilddateien quadratisch sind, rendern einige Betriebssysteme unterschiedliche Formen, schneiden Abschnitte ab oder "maskieren" das Symbol, um den UI-Vorgaben zu genügen, oder verkleinern und zentrieren das Symbol mit einem Hintergrund, wenn das Symbol nicht maskierbar ist. Die [sichere Zone](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons#support_masking), der Bereich, der in Ordnung gerendert wird, wenn das Symbol als Kreis maskiert ist, ist die innere 80 % der Bilddatei. Symbole werden als sicher markiert, um maskiert zu werden, dank des `purpose`-Mitglieds, das, wenn auf `maskable` gesetzt, das [Symbol als anpassbar](https://web.dev/articles/maskable-icon) definiert.

In Safari, und daher auf iOS und iPadOS, werden, wenn Sie das [nicht-standardisierte `apple-touch-icon`](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site) im HTML-Dokument in den {{HTMLElement("head")}} über {{HTMLElement("link")}} einfügen, diese den im Manifest deklarierten Symbolen vorgezogen.

### Aufgabe

Fügen Sie die Symbole zur Manifestdatei hinzu, die Sie bisher erstellt haben.

In Anlehnung an die Wörter "cycle" und "period" im CycleTracker und die gewählte grüne Farbgebung könnten unsere Symbolbilder allesamt hellgrüne Quadrate mit einem grünen Kreis sein. Unser kleinstes Symbol, `circle.ico`, eine Symboldatei, die nur einen Kreis repräsentiert - das Satzzeichen für Periode und dem App-Thema entsprechend - mit den Zwischenbildern `circle.svg`, `tire.svg` und `wheel.svg`, die immer mehr Details von einem einfachen Kreis zu einem detaillierten Rad mit Speichen und Schatten hinzufügen. Das Entwerfen von Symbolen liegt jedoch außerhalb des Umfangs dieses Tutorials.

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

{{EmbedLiveSample("PWA-Ikonografie", 600, 250)}}

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

Sie haben nun eine voll funktionsfähige Manifestdatei. Es ist an der Zeit, sie zu speichern und in unsere HTML-Datei einzubinden.

Die Dateiendung des Manifests kann die spezierungegemäße Empfehlung `.webappmanifest` sein. Da es jedoch eine JSON-Datei ist, wird sie am häufigsten mit `.json` gespeichert, das von Browsern unterstützt wird.

PWAs erfordern, dass eine Manifestdatei mit dem HTML-Dokument der App verlinkt ist. Wir haben eine voll funktionsfähige App, aber sie ist noch keine PWA, da sie noch nicht mit unserer externen Manifest-JSON-Datei verlinkt ist. Um die externe JSON-Ressource einzuschließen, verwenden wir das `<link>`-Element mit dem `rel="manifest"`-Attribut und setzen das `href`-Attribut auf den Speicherort der Ressource.

```html
<link rel="manifest" href="cycletracker.json" />
```

Das `<link>`-Element wird am häufigsten verwendet, um Stylesheets zu verknüpfen und bei PWAs die erforderliche Manifestdatei, dient aber daneben auch der [Einrichtung von Seiten-Icons](/de/docs/Web/HTML/Reference/Attributes/rel#icon) (sowohl als "Favicon"-Symbole als auch Symbole für den Home-Bildschirm und Apps auf mobilen Geräten) unter anderem.

```html
<link rel="icon" href="icons/circle.svg" />
```

Wenn Sie die `.webmanifest`-Erweiterung verwenden, setzen Sie `type="application/manifest+json"`, wenn Ihr Server diesen MIME-Typ nicht unterstützt.

### Aufgabe

Speichern Sie die Manifestdatei, die Sie in den obigen Schritten erstellt haben, und verlinken Sie sie dann mit der `index.html`-Datei.

Optional können Sie auch zu einem Shortcut-Icon von Ihrem HTML verlinken.

### Beispiel-Lösung

Der {{HTMLelement("head")}} von `index.html` könnte jetzt folgendermaßen aussehen:

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

Sehen Sie sich die [`cycletracker.json`-Datei](https://mdn.github.io/pwa-examples/cycletracker/manifest_file/cycletracker.json) an und sehen Sie sich den [Projektquellcode](https://github.com/mdn/pwa-examples/tree/main/cycletracker/manifest_file) auf GitHub an.

Mit einer Manifestdatei und wenn sie von einer `https://`-URL (oder `localhost`) geladen wird, werden [die meisten Browser](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#browser_support) Ihre Seite als PWA erkennen und einige werden sie zur Installation auffordern. Um unsere PWA offline funktionsfähig zu machen, müssen wir noch einen Service Worker hinzufügen.

## Debuggen von Manifestdateien

Einige Browser-Entwicklungstools bieten Einblicke in das App-Manifest. In Edge, Firefox und den Chrome-Entwicklungstools sind die Manifest-Mitglieder und ihre Werte auf dem Tab "Anwendung" sichtbar.

![In den Entwicklerwerkzeugen enthält das linke Paneel Links zum Manifest. Die rechte Seite zeigt App-Manifest, mit dem Dateinamen als Link zur JSON-Datei.](debugger_devtools.jpg)

Das App-Manifest-Fenster bietet den Namen der Manifestdatei als Link und Abschnitte zur Identität, Präsentation und Ikonografie.

![Die Identität und Präsentations-Manifest-Mitglieder zusammen mit den Werten, sofern vorhanden.](manifest_identity_and_presentation.jpg)

Unterstützte Manifest-Mitglieder werden angezeigt, zusammen mit allen enthaltenen Werten. In diesem Screenshot, obwohl wir die `orientation`- oder `id`-Mitglieder nicht aufgenommen haben, sind sie aufgelistet. Das App-Panel kann verwendet werden, um die Manifest-Mitglieder zu sehen und sogar zu lernen: In diesem Beispiel lernen wir, dass, um eine App-Id anzugeben, die der aktuellen Identität entspricht, das `id`-Feld auf "/" gesetzt werden soll.

Chrome und Edge bieten auch Fehler und Warnungen, Protokoll-Handler und Informationen, um das Manifest und die Symbole zu verbessern.

Unsere Web-App hat keine Protokoll-Handler; ein Thema, das in diesem Tutorial nicht behandelt wird. Hätten wir einige aufgenommen, würden sie unter "Protokoll-Handler" zu finden sein. Da dieser Abschnitt leer ist, verlinken die Entwicklerwerkzeuge auf weitere Informationen zu diesem Thema.

![Die vier im Manifest-Datei enthaltenen Symbole, mit dem Hintergrund entfernt, da "nur den minimal sicheren Bereich für maskierbare Symbole anzeigen" aktiviert ist.](manifest_icons.jpg)

Das Manifest-Panel enthält auch Einblicke in den sicheren Bereich für maskierbare Symbole und einen Link zu einem [PWA-Bilderzeuger](https://www.pwabuilder.com/imageGenerator). Dieses Tool erstellt über 100 quadratische PNG-Bilder für Android, Apple OSs und Windows sowie ein JSON-Objekt, das alle Bilder und ihre Größen auflistet. Die erzeugten Bilder entsprechen möglicherweise nicht Ihren Anforderungen, aber die Liste der Bildgrößen, die für jedes Betriebssystem erzeugt wurden, zeigt die Vielfalt, wo und wie PWAs bereitgestellt werden können.

Die Entwicklerwerkzeuge sind nützlich, um festzustellen, welche Manifest-Mitglieder unterstützt werden. Beachten Sie, dass die Firefox-Entwicklungstools Einträge für `dir`, `lang`, `orientation`, `scope` und `id` haben, obwohl unsere Manifestdatei diese Mitglieder nicht enthalten hat. Firefox enthält auch den Wert des `purpose`-Mitglieds für jedes Symbol und zeigt `any` an, wenn kein Ziel explizit gesetzt ist.

![Das Manifest-Fenster in den Firefox-Entwicklungstools, mit Werten für die nicht enthaltenen `dir`, `scope` und `id`-Mitglieder und den `lang` und `orientation`-Mitgliedern ohne zugeordnete Werte.](manifest_firefox.jpg)

## Nächste Schritte

Um unsere PWA offline arbeitsfähig zu machen, müssen wir [einen Service Worker hinzufügen](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers), den wir ohne die Nutzung eines Frameworks umsetzen werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality", "Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
