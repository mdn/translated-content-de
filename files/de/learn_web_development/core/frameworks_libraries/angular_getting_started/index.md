---
title: Erste Schritte mit Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist nun an der Zeit, sich das Angular-Framework von Google anzusehen, eine weitere beliebte Option, auf die Sie häufig stoßen werden. In diesem Artikel werfen wir einen Blick darauf, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein, und betrachten die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial zielt auf [Angular Version 18](https://angular.dev/overview) ab und wurde zuletzt im August 2024 überarbeitet (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Command Line</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Angular-Entwicklungsumgebung, Erstellen einer Starter-App und
        Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, die auf [TypeScript](https://www.typescriptlang.org/) basiert. Es wird zum Erstellen von Single-Page-Webanwendungen verwendet. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zum Erstellen skalierbarer Webanwendungen
- Eine Sammlung integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklerwerkzeugen, die Ihnen beim Entwickeln, Erstellen, Testen und Aktualisieren Ihres Codes helfen

Wenn Sie Anwendungen mit Angular entwickeln, nutzen Sie eine Plattform, die von Projekten einzelner Entwickler bis hin zu Unternehmensanwendungen skalieren kann. Angular ist so konzipiert, dass Updates so einfach wie möglich sind, damit Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Am besten ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Content-Erstellern besteht.

Bevor Sie die Angular-Plattform erkunden, sollten Sie wissen, dass es das Angular CLI gibt. Das Angular CLI ist die schnellste, einfachste und empfohlene Möglichkeit, Angular-Anwendungen zu entwickeln. Das Angular CLI macht viele Aufgaben einfach. Hier sind einige Beispielbefehle, die Sie häufig verwenden werden:

| Befehl                                            | Beschreibung                                                                          |
| ------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                                |
| [`ng serve`](https://angular.dev/cli/serve)       | Erstellt und stellt Ihre Anwendung bereit und kompiliert sie bei Dateiänderungen neu. |
| [`ng generate`](https://angular.dev/cli/generate) | Generiert oder modifiziert Dateien basierend auf einem Schema.                        |
| [`ng test`](https://angular.dev/cli/test)         | Führt Unit-Tests auf einem bestimmten Projekt aus.                                    |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Baut und dient eine Angular-Anwendung, führt dann End-to-End-Tests durch.             |

Sie werden feststellen, dass das Angular CLI ein wertvolles Werkzeug zum Erstellen Ihrer Anwendungen ist.

## Was Sie erstellen werden

Diese Tutorial-Serie führt Sie durch den Bau einer Aufgabenlistenanwendung. Über diese Anwendung lernen Sie, wie Sie Angular verwenden, um Elemente zu verwalten, bearbeiten, hinzufügen, löschen und zu filtern.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular benötigt eine [aktive LTS oder Maintenance LTS](https://nodejs.org/en/about/previous-releases) Version von Node.js. Für Informationen über spezifische Versionsanforderungen siehe die Seite [Version-Kompatibilität](https://angular.dev/reference/versions).

  Weitere Informationen zur Installation von Node.js finden Sie unter [nodejs.org](https://nodejs.org/en/download).
  Wenn Sie sich unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm-Paketmanager**

  Angular, das Angular CLI und Angular-Anwendungen hängen von [npm-Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen und Features ab.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Diese Anleitung verwendet die [npm-Client](https://docs.npmjs.com/cli/install/) Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob der npm-Client installiert ist, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können das Angular CLI verwenden, um Befehle in Ihrem Terminal zum Erstellen, Testen und Bereitstellen von Angular-Anwendungen auszuführen.
Um das Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt von dem, was Sie mit dem CLI tun möchten.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App erstellen möchten, und wechseln Sie im Terminal in das Verzeichnis. Verwenden Sie dann den folgenden [`ng new`](https://angular.dev/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new` Befehl erstellt eine minimale Starter-Angular-Anwendung.
Die zusätzlichen Flags `--routing` und `--style` sowie `--ssr` definieren, wie mit Navigation und Styles in der Anwendung umgegangen wird und konfigurieren das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Wenn Sie `ng` zum ersten Mal ausführen, werden Sie möglicherweise gefragt, ob Sie die terminalseitige [Autovervollständigung](https://angular.dev/cli/completion) und Analytics aktivieren möchten.
Die Autovervollständigung ist praktisch, da beim Eingeben von `ng`-Befehlen durch Drücken der <kbd>TAB</kbd>-Taste mögliche Optionen angezeigt und Argumente vervollständigt werden.

Sie können auch entscheiden, ob Sie erlauben möchten, dass Analysedaten über die Nutzung des CLI an die Angular-Betreuer bei Google gesendet werden.
Weitere Informationen zu Analytics finden Sie in der [Angular `ng analytics` CLI-Dokumentation](https://angular.dev/cli/analytics).

Um Ihre `todo`-Anwendung auszuführen, wechseln Sie mit dem Befehl `cd` in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Im Browser navigieren Sie zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, lädt die Anwendung automatisch neu.

Während `ng serve` läuft, öffnen Sie eine zweite Registerkarte oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie Ihre Anwendung nicht mehr bereitstellen möchten, drücken Sie `Ctrl+c` im Terminal, das den `ng serve`-Befehl ausführt.

## Machen Sie sich mit Ihrer Angular-Anwendung vertraut

Die Anwendungsquellendateien, auf die sich dieses Tutorial konzentriert, befinden sich in `src/app`:

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

Wichtige Dateien, die das CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Enthält auch bekannt als die Klasse, die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Beinhaltet das HTML für `AppComponent`. Die Inhalte dieser Datei sind auch als Vorlage bekannt.
   Die Vorlage bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Beinhaltet die Styles für `AppComponent`. Sie verwenden diese Datei, wenn Sie Styles definieren möchten, die nur für eine spezifische Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen: der Vorlage, den Styles und der Klasse.
Zum Beispiel, `app.component.ts`, `app.component.html`, und `app.component.css` zusammen bilden das `AppComponent`.
Diese Struktur trennt die Logik, die Ansicht und die Styles, sodass die Anwendung wartbarer und skalierbarer wird.
Auf diese Weise verwenden Sie von Anfang an die besten Praktiken.

Das Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf das Testen ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente generieren, erstellt das CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen und wir werden ein Beispiel dafür später sehen.

Um mehr über Tests zu erfahren, siehe den [Angular-Testleitfaden](https://angular.dev/guide/testing).

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript gebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet eine Typisierung und eine prägnantere Syntax als reines JavaScript, was Ihnen ein Werkzeug zum Erstellen wartungsfreundlicherer Codes und zur Minimierung von Fehlern gibt.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente enthält eine TypeScript-Klasse, die einen `@Component()` Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()` Dekorator, um Metadaten (HTML-Vorlage und Styles) über eine Klasse zu spezifizieren.

### Die Klasse

Die Klasse ist dort, wo Sie die Logik unterbringen, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignis-Listener, Eigenschaften und Verweise auf Dienste beinhalten, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
So könnten Sie Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()` Dekorator, der Metadaten enthält, die Angular darüber informieren, wo sich das HTML und CSS befindet.
Eine typische Komponente sieht folgendermaßen aus:

```js
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

Diese Komponente wird `ItemComponent` genannt und ihr Selektor ist `app-item`.
Sie verwenden einen Selektor genauso wie reguläre HTML-Tags, indem Sie ihn in andere Vorlagen platzieren, z.B. `<app-item></app-item>`.
Wenn ein Selektor in einer Vorlage ist, rendert der Browser die Vorlage dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch das Erstellen von zwei Komponenten und das Verwenden einer innerhalb der anderen.

> [!NOTE]
> Der Name der Komponente oben ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, einfach weil eine Komponente nichts anderes als eine Klasse ist, die durch einen TypeScript-Dekorator ergänzt wird.

Angulas Component-Modell bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten machen Ihre Anwendung zudem einfacher in Unit-Tests zu integrieren und können die insgesamt Lesbarkeit Ihres Codes verbessern.

### Die HTML-Vorlage

Jede Komponente hat eine HTML-Vorlage, die deklariert, wie diese Komponente gerendert wird.
Sie können diese Vorlage entweder inline oder per Dateipfad definieren.

Um auf eine externe HTML-Datei zu verweisen, verwenden Sie die `templateUrl`-Eigenschaft:

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}
```

Um HTML inline zu schreiben, verwenden Sie die `template`-Eigenschaft und schreiben Sie Ihr HTML in Backticks:

```js
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular erweitert HTML mit zusätzlicher Syntax, die es Ihnen erlaubt, dynamische Werte aus Ihrer Komponente einzufügen.
Angular aktualisiert automatisch den gerenderten DOM, wenn sich der Zustand Ihrer Komponente ändert.
Eine Nutzung dieser Funktion besteht darin, dynamischen Text einzusetzen, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern weisen Angular an, den Inhalt darin einzufügen.
Der Wert für `title` kommt aus der Klassen der Komponente:

```js-nolint
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

Wenn die Anwendung die Komponente und ihre Vorlage lädt, sieht der Browser folgendes:

```html
<h1>To do application</h1>
```

### Styles

Eine Komponente kann globale Styles aus der `styles.css`-Datei der Anwendung erben und diese mit eigenen Styles ergänzen oder überschreiben.
Sie können komponentenspezifische Styles direkt im `@Component()` Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Styles direkt in den Komponentendekorator einzuschließen, verwenden Sie die `styles`-Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typischerweise nutzt eine Komponente Styles in einer separaten Datei.
Sie können die `styleUrl`-Eigenschaft mit dem Pfad zur CSS-Datei als String verwenden oder `styleUrls` mit einem Array von Strings, wenn Sie mehrere CSS-Stylesheets einschließen möchten:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

Mit komponentenspezifischen Styles können Sie Ihr CSS so organisieren, dass es leicht wartbar und portabel ist.

### Standalone-Komponenten

Es wird empfohlen, [Komponenten als Standalone zu erstellen](https://angular.dev/guide/components/importing#standalone-components), es sei denn, ein Projekt nutzt bereits [NgModules](https://angular.dev/guide/ngmodules) (Angular-Module) zur Organisation des Codes.
Dieses Tutorial verwendet [Standalone-Komponenten](https://angular.dev/guide/components/importing#standalone-components), die einfacher zu beginnen sind.

Es ist üblich, [`CommonModule`](https://angular.dev/api/common/CommonModule) zu importieren, damit Ihre Komponente gängige [Direktiven](https://angular.dev/guide/directives) und [Pipes](https://angular.dev/guide/pipes) verwenden kann.

```js
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
```

## Zusammenfassung

Das war es für Ihre erste Einführung in Angular. An diesem Punkt sollten Sie bereit sein, eine Angular-App zu erstellen und ein grundlegendes Verständnis davon haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und beginnen, die Struktur unserer Aufgabenlistenanwendung aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
