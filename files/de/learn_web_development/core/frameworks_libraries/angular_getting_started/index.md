---
title: Einstieg in Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist an der Zeit, sich mit Googles Angular-Framework vertraut zu machen, einer weiteren beliebten Option, auf die Sie häufig stoßen werden. In diesem Artikel sehen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispielanwendung ein, und betrachten die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial richtet sich an [Angular Version 18](https://angular.dev/overview) und wurde zuletzt im August 2024 überarbeitet (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie Kenntnis des
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminals/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Angular-Entwicklungsumgebung, Erstellen einer Starteranwendung
        und Verständnis der Grundlagen zur Funktionsweise.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, die auf [TypeScript](https://www.typescriptlang.org/) basiert. Es wird zur Erstellung von Single-Page-Webanwendungen verwendet. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zum Erstellen skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklertools, die Ihnen helfen, Ihren Code zu entwickeln, zu bauen, zu testen und zu aktualisieren

Wenn Sie Anwendungen mit Angular erstellen, nutzen Sie eine Plattform, die von Ein-Entwickler-Projekten bis hin zu Unternehmensebene skalieren kann. Angular ist so konzipiert, dass Aktualisierungen so einfach wie möglich sind, damit Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Das Beste von allem: Das Angular-Ökosystem besteht aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Inhaltsherstellern.

Bevor Sie beginnen, die Angular-Plattform zu erkunden, sollten Sie über die Angular CLI Bescheid wissen. Die Angular CLI ist der schnellste, einfachste und empfohlene Weg, Angular-Anwendungen zu entwickeln. Die Angular CLI erleichtert eine Vielzahl von Aufgaben. Hier sind einige Beispielbefehle, die Sie häufig verwenden werden:

| Befehl                                            | Beschreibung                                                                      |
| ------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                            |
| [`ng serve`](https://angular.dev/cli/serve)       | Baut Ihre Anwendung und dient sie, indem sie bei Dateiänderungen neu gebaut wird. |
| [`ng generate`](https://angular.dev/cli/generate) | Generiert oder modifiziert Dateien basierend auf einem Schema.                    |
| [`ng test`](https://angular.dev/cli/test)         | Führt Unittests für ein angegebenes Projekt aus.                                  |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Baut eine Angular-Anwendung und dient sie, führt dann End-to-End-Tests aus.       |

Sie werden feststellen, dass die Angular CLI ein wertvolles Werkzeug zum Erstellen Ihrer Anwendungen ist.

## Was Sie bauen werden

Diese Tutorial-Serie führt Sie durch den Aufbau einer Aufgabenlisten-Anwendung. Über diese Anwendung lernen Sie, wie Sie Angular verwenden, um Elemente zu verwalten, zu bearbeiten, hinzuzufügen, zu löschen und zu filtern.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS oder WartungslTS](https://nodejs.org/en/about/previous-releases)-Version von Node.js. Informationen zu spezifischen Versionsanforderungen finden Sie auf der Seite [Version-Kompatibilität](https://angular.dev/reference/versions).

  Weitere Informationen zur Installation von Node.js finden Sie auf [nodejs.org](https://nodejs.org/en/download).
  Wenn Sie unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm-Paketmanager**

  Angular, die Angular CLI und Angular-Anwendungen hängen von [npm-Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen und Features ab.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Dieser Leitfaden verwendet die [npm-Client](https://docs.npmjs.com/cli/install/)-Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob der npm-Client installiert ist, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können die Angular CLI verwenden, um Befehle in Ihrem Terminal auszuführen, um Angular-Anwendungen zu generieren, zu erstellen, zu testen und bereitzustellen.
Um die Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Die Befehle der Angular CLI beginnen alle mit `ng`, gefolgt von der Aktion, die Sie ausführen möchten.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App erstellen möchten, und wechseln Sie im Terminal in dieses Verzeichnis. Verwenden Sie dann den folgenden [`ng new`](https://angular.dev/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der Befehl `ng new` erstellt eine minimale Starter-Angular-Anwendung.
Die zusätzlichen Flags, `--routing`, `--style` und `--ssr` definieren, wie die Navigation und die Styles in der Anwendung gehandhabt werden sollen, und konfiguriert das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Wenn Sie `ng` zum ersten Mal ausführen, werden Sie möglicherweise gefragt, ob Sie die terminalseitige [Autovervollständigung](https://angular.dev/cli/completion) und Analysen aktivieren möchten.
Autovervollständigung ist praktisch, da das Drücken der <kbd>TAB</kbd>-Taste während der Eingabe von `ng`-Befehlen mögliche Optionen anzeigt und Argumente automatisch vervollständigt.

Sie können auch entscheiden, ob Sie zulassen möchten, dass Analysedaten über die Nutzung der CLI an die Angular-Verwalter bei Google gesendet werden.
Weitere Informationen zu Analysen finden Sie in der [Angular `ng analytics` CLI-Dokumentation](https://angular.dev/cli/analytics).

Um Ihre `todo`-Anwendung auszuführen, navigieren Sie mit dem `cd`-Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Navigieren Sie im Browser zu `http://localhost:4200/`, um Ihre neue Starteranwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Öffnen Sie während `ng serve` läuft, einen zweiten Terminal-Tab oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie zu einem beliebigen Zeitpunkt das Servieren Ihrer Anwendung beenden möchten, drücken Sie `Ctrl+c` im Terminal, das den `ng serve`-Befehl ausführt.

## Machen Sie sich mit Ihrer Angular-Anwendung vertraut

Die Anwendungs-Quelldateien, auf die sich dieses Tutorial konzentriert, befinden sich in `src/app`:

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

Wichtige Dateien, die die CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Auch als die Klasse bekannt, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei wird auch als Vorlage bezeichnet.
   Die Vorlage bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Styles für `AppComponent`. Diese Datei verwenden Sie, wenn Sie Styles definieren möchten, die nur auf eine bestimmte Komponente und nicht auf die gesamte Anwendung angewendet werden.

Eine Komponente in Angular besteht aus drei Hauptteilen — der Vorlage, den Styles und der Klasse.
Zum Beispiel bilden `app.component.ts`, `app.component.html` und `app.component.css` gemeinsam das `AppComponent`.
Diese Struktur trennt die Logik, Ansicht und Styles, sodass die Anwendung wartbarer und skalierbarer ist.
Auf diese Weise verwenden Sie von Anfang an die besten Praktiken.

Die Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf das Testen ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente generieren, erstellt die CLI diese Dateien in einem Verzeichnis mit dem Namen, den Sie angeben, und wir werden später ein Beispiel dazu sehen.

Um mehr über das Testen zu erfahren, sehen Sie sich den [Angular-Testleitfaden](https://angular.dev/guide/testing) an.

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript aufgebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierung und eine prägnantere Syntax als reines JavaScript, was Ihnen ein Werkzeug zur Schaffung von wartbarerem Code und zur Minimierung von Fehlern bietet.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente umfasst eine TypeScript-Klasse, die einen `@Component()`-Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()`-Dekorator, um Metadaten (HTML-Vorlage und Styles) über eine Klasse anzugeben.

### Die Klasse

In der Klasse platzieren Sie sämtliche Logik, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignis-Listener, Eigenschaften und Verweise auf Dienste umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
Also könnten Sie Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()`-Dekorator, der Metadaten enthält, die Angular angeben, wo sich das HTML und CSS befinden.
Eine typische Komponente sieht folgendermaßen aus:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  standalone: true,
  imports: [],
  // the following metadata specifies the location of the other parts of the component
  templateUrl: "./item.component.html",
  styleUrl: "./item.component.css",
})
export class ItemComponent {
  // code goes here
}
```

Diese Komponente wird `ItemComponent` genannt, und ihr Selektor ist `app-item`.
Einen Selektor verwenden Sie ähnlich wie normale HTML-Tags, indem Sie ihn in andere Vorlagen platzieren, d.h. `<app-item></app-item>`.
Wenn ein Selektor in einer Vorlage ist, rendert der Browser die Vorlage dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch die Erstellung von zwei Komponenten und die Verwendung einer innerhalb der anderen.

> [!NOTE]
> Der Name der oben gezeigten Komponente ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, einfach weil eine Komponente nichts anderes ist als eine Klasse, die durch einen TypeScript-Dekorator ergänzt wird.

Das Komponentenmodell von Angular bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten erleichtern es auch, Ihre Anwendung zu unit testen und können die Gesamte Lesbarkeit Ihres Codes verbessern.

### Die HTML-Vorlage

Jede Komponente hat eine HTML-Vorlage, die deklariert, wie diese Komponente gerendert wird.
Sie können diese Vorlage entweder inline oder durch einen Dateipfad definieren.

Um auf eine externe HTML-Datei zu verweisen, verwenden Sie die `templateUrl`-Eigenschaft:

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}
```

Um inline HTML zu schreiben, verwenden Sie die `template`-Eigenschaft und schreiben Sie Ihr HTML innerhalb von Backticks:

```ts
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular erweitert HTML mit zusätzlicher Syntax, die Ihnen das Einfügen dynamischer Werte aus Ihrer Komponente ermöglicht.
Angular aktualisiert automatisch das gerenderte DOM, wenn sich der Zustand Ihrer Komponente ändert.
Eine Verwendungsmöglichkeit dieser Funktion ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern weisen Angular an, den Inhalt innerhalb dieser Klammern zu interpolieren.
Der Wert für `title` kommt aus der Komponentenklasse:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: "<h1>\{{ title }}</h1>",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "To do application";
}
```

Wenn die Anwendung die Komponente und ihre Vorlage lädt, sieht der Browser das Folgende:

```html
<h1>To do application</h1>
```

### Styles

Eine Komponente kann globale Styles aus der `styles.css`-Datei der Anwendung erben und diese mit ihren eigenen Styles ergänzen oder überschreiben.
Sie können komponentenspezifische Styles direkt im `@Component()`-Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Styles direkt im Komponenten-Dekorator aufzunehmen, verwenden Sie die `style`-Eigenschaft:

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: ["h1 { color: red; }"],
})
export class AppComponent {
  // …
}
```

In der Regel verwendet eine Komponente Styles in einer separaten Datei.
Sie können die `styleUrl`-Eigenschaft mit dem Pfad zur CSS-Datei als Zeichenfolge verwenden oder `styleUrls` mit einem Array von Zeichenfolgen, wenn es mehrere CSS-Stylesheets gibt, die Sie einfügen möchten:

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  // …
}
```

Mit komponentenspezifischen Styles können Sie Ihr CSS so organisieren, dass es leicht wartbar und portabel ist.

### Standalone-Komponenten

Es wird empfohlen, [Komponenten als eigenständige Komponenten](https://angular.dev/guide/components/importing#standalone-components) zu erstellen, es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.dev/guide/ngmodules) (Angular-Module), um Code zu organisieren.
Dieses Tutorial verwendet [eigenständige Komponenten](https://angular.dev/guide/components/importing#standalone-components), die einfacher zu starten sind.

Es ist üblich, [`CommonModule`](https://angular.dev/api/common/CommonModule) zu importieren, damit Ihre Komponente gängige [Direktiven](https://angular.dev/guide/directives) und [Pipes](https://angular.dev/guide/pipes) verwenden kann.

```ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [CommonModule],
})
export class AppComponent {
  // …
}
```

## Zusammenfassung

Das war Ihre erste Einführung in Angular. An diesem Punkt sollten Sie bereit sein, eine Angular-App zu erstellen und ein grundlegendes Verständnis dafür haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und beginnen, die Struktur unserer Aufgabenlistenanwendung aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
