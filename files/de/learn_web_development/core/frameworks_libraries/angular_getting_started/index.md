---
title: Erste Schritte mit Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist nun an der Zeit, sich das Angular-Framework von Google anzusehen, eine weitere oft verwendete Option. In diesem Artikel betrachten wir, was Angular zu bieten hat, installieren die Voraussetzungen, richten eine Beispiel-App ein und betrachten die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial richtet sich an [Angular Version 17](https://v17.angular.io/guide/update-to-version-17) und wurde zuletzt im März 2024 überarbeitet (`Angular CLI: 17.3.0`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
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
        Einrichten einer lokalen Angular-Entwicklungsumgebung, Erstellen einer Starter-App
        und Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, entwickelt auf [TypeScript](https://www.typescriptlang.org/). Es wird zum Erstellen von Single-Page-Webanwendungen verwendet. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zum Erstellen skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwickler-Tools, die helfen, Ihren Code zu entwickeln, zu bauen, zu testen und zu aktualisieren

Wenn Sie Anwendungen mit Angular erstellen, nutzen Sie eine Plattform, die vom Einzelentwicklerprojekt bis zu Unternehmensanwendungen skalieren kann. Angular ist darauf ausgelegt, Updates so einfach wie möglich zu gestalten, sodass Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Das Beste jedoch ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Content-Erstellern besteht.

Bevor Sie anfangen, die Angular-Plattform zu erkunden, sollten Sie über die Angular CLI Bescheid wissen. Die Angular CLI ist der schnellste, einfachste und empfohlene Weg, um Angular-Anwendungen zu entwickeln. Die Angular CLI erleichtert eine Reihe von Aufgaben. Hier sind einige Beispielbefehle, die Sie häufig verwenden werden:

| Befehl                                          | Beschreibung                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| [`ng build`](https://angular.io/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                     |
| [`ng serve`](https://angular.io/cli/serve)       | Baut und dient Ihre Anwendung, bei Dateiaenderungen erneut erstellend.       |
| [`ng generate`](https://angular.io/cli/generate) | Erzeugt oder modifiziert Dateien basierend auf einem Schema.                     |
| [`ng test`](https://angular.io/cli/test)         | Führt Unit-Tests auf einem gegebenen Projekt durch.                                   |
| [`ng e2e`](https://angular.io/cli/e2e)           | Baut und dient eine Angular-Anwendung und führt dann End-to-End-Tests durch. |

Sie werden feststellen, dass die Angular CLI ein wertvolles Werkzeug zum Aufbau Ihrer Anwendungen ist.

## Was Sie erstellen werden

Diese Tutorialserie führt Sie durch den Bau einer To-Do-Listenanwendung. Über diese Anwendung lernen Sie, wie Sie mit Angular Elemente verwalten, bearbeiten, hinzufügen, löschen und filtern können.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS- oder Wartungs-LTS](https://nodejs.org/en/about/previous-releases) Version von Node.js. Informationen zu spezifischen Versionsanforderungen finden Sie auf der Seite [Version-Kompatibilität](https://angular.io/guide/versions).

  Weitere Informationen zur Installation von Node.js finden Sie unter [nodejs.org](https://nodejs.org/en/download/package-manager).
  Wenn Sie unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm-Paketmanager**

  Angular, die Angular CLI und Angular-Anwendungen hängen von [npm-Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen ab.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Dieser Leitfaden verwendet die [npm-Client](https://docs.npmjs.com/cli/install/) Befehlszeilenschnittstelle, die standardmäßig mit `Node.js` installiert ist.
  Um zu überprüfen, ob Sie den npm-Client installiert haben, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können die Angular CLI verwenden, um Befehle in Ihrem Terminal zum Erzeugen, Bauen, Testen und Bereitstellen von Angular-Anwendungen auszuführen.
Um die Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt davon, was die CLI tun soll.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App erstellen möchten, und wechseln Sie im Terminal in das Verzeichnis. Verwenden Sie dann den folgenden [`ng new`](https://angular.io/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der Befehl `ng new` erstellt eine minimale Starter-Angular-Anwendung.
Die zusätzlichen Flags, `--routing` und `--style`, sowie `--ssr` definieren, wie die Navigation und Stile in der Anwendung gehandhabt werden und konfigurieren das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Wenn Sie `ng` zum ersten Mal ausführen, werden Sie möglicherweise gefragt, ob Sie die [Autovervollständigung](https://angular.io/cli/completion) und Analysen aktivieren möchten.
Autovervollständigung ist praktisch, weil das Drücken von <kbd>TAB</kbd> beim Eingeben von `ng`-Befehlen mögliche Optionen zeigt und Argumente automatisch vervollständigt.

Sie können auch entscheiden, ob Sie zulassen möchten, dass Analysen über die Nutzung der CLI an die Angular-Pfleger bei Google gesendet werden.
Um mehr über Analysen zu erfahren, sehen Sie sich die [Angular `ng analytics` CLI-Dokumentation](https://angular.io/cli/analytics) an.

Um Ihre `todo`-Anwendung auszuführen, navigieren Sie mit dem `cd`-Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Im Browser navigieren Sie zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, lädt die Anwendung automatisch neu.

Während `ng serve` läuft, öffnen Sie einen zweiten Terminal-Tab oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie zu irgendeinem Zeitpunkt aufhören möchten, Ihre Anwendung zu bedienen, drücken Sie `Strg+c` in dem Terminal, das den `ng serve`-Befehl ausführt.

## Machen Sie sich mit Ihrer Angular-Anwendung vertraut

Die Quelldateien der Anwendung, auf die sich dieses Tutorial konzentriert, befinden sich in `src/app`:

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

Wichtige Dateien, die die CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Auch bekannt als die Klasse, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei ist auch bekannt als das Template.
   Das Template bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Stile für `AppComponent`. Sie verwenden diese Datei, wenn Sie Stile definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen: dem Template, den Stilen und der Klasse.
Zum Beispiel stellen `app.component.ts`, `app.component.html` und `app.component.css` zusammen das `AppComponent` dar.
Diese Struktur trennt die Logik, Ansicht und Stile, sodass die Anwendung wartbarer und skalierbarer ist.
Auf diese Weise verwenden Sie die Best Practices von Anfang an.

Die Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf das Testen ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente erzeugen, erstellt die CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen, und wir werden später ein Beispiel dafür sehen.

Um mehr über das Testen zu erfahren, siehe den [Angular Testleitfaden](https://angular.io/guide/testing).

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript aufgebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierung und eine prägnantere Syntax als reines JavaScript, was Ihnen ein Werkzeug zum Erstellen wartbarerer Code und Minimierung von Fehlereinschmuggeln bietet.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente beinhaltet eine TypeScript-Klasse mit einem `@Component()` Dekorator.

### Der Dekorator

Sie verwenden den `@Component()` Dekorator, um Metadaten (HTML-Template und Stile) über eine Klasse zu spezifizieren.

### Die Klasse

In der Klasse legen Sie die gesamte Logik ab, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Event-Listener, Eigenschaften und Referenzen zu Diensten umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
Sie könnten Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()` Dekorator, der Metadaten enthält, die Angular sagt, wo das HTML und CSS zu finden ist.
Eine typische Komponente sieht wie folgt aus:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  standalone: true,
  // the following metadata specifies the location of the other parts of the component
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // code goes here
}
```

Diese Komponente heißt `ItemComponent`, und ihr Selektor ist `app-item`.
Sie verwenden einen Selektor genau wie reguläre HTML-Tags, indem Sie ihn in anderen Templates platzieren, d.h. `<app-item></app-item>`.
Wenn ein Selektor in einem Template ist, rendert der Browser das Template dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch die Erstellung zweier Komponenten und deren Verwendung innerhalb der anderen.

> [!NOTE]
> Der Name der Komponente oben ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, da eine Komponente nichts anderes als eine Klasse mit einem TypeScript-Dekorator ist.

Das Komponentenmodell von Angular bietet starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten erleichtern auch das Unit-Testen Ihrer Anwendung und können die Gesamtverständlichkeit Ihres Codes verbessern.

### Das HTML-Template

Jede Komponente hat ein HTML-Template, das deklariert, wie diese Komponente gerendert wird.
Sie können dieses Template entweder inline oder über den Dateipfad definieren.

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

Um HTML inline zu schreiben, verwenden Sie die `template`-Eigenschaft und schreiben Sie Ihr HTML innerhalb von Backticks:

```js
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular erweitert HTML mit zusätzlicher Syntax, die es Ihnen ermöglicht, dynamische Werte aus Ihrer Komponente einzufügen.
Angular aktualisiert automatisch das gerenderte DOM, wenn sich der Zustand Ihrer Komponente ändert.
Eine Verwendung dieser Funktion ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern weisen Angular an, den Inhalt innerhalb derer zu interpolieren.
Der Wert für `title` stammt aus der Komponentenklasse:

```js-nolint
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: "<h1>\{{ title }}</h1>",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "To do application";
}
```

Wenn die Anwendung die Komponente und ihr Template lädt, sieht der Browser Folgendes:

```html
<h1>To do application</h1>
```

### Stile

Eine Komponente kann globale Stile aus der `styles.css` Datei der Anwendung erben und diese durch eigene Stile erweitern oder überschreiben.
Sie können komponentenspezifische Stile direkt im `@Component()` Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Stile direkt im Komponentendekorator zu enthalten, verwenden Sie die `styles`-Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typischerweise verwendet eine Komponente Stile in einer separaten Datei, indem die `styleUrls`-Eigenschaft verwendet wird:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

Mit komponentenspezifischen Stilen können Sie Ihr CSS so organisieren, dass es leicht wartbar und portabel ist.

### Standalone-Komponenten

Es wird empfohlen, [Komponenten als Standalone zu erstellen](https://angular.io/guide/component-overview#creating-a-component-manually-1), es sei denn, ein Projekt nutzt bereits [NgModules](https://angular.io/guide/ngmodules) (Angular-Module) zur Codeorganisation.
Dieses Tutorial verwendet [Standalone-Komponenten](https://angular.io/guide/standalone-components), die leichter zu verwenden sind.

Es ist üblich, [`CommonModule`](https://angular.io/api/common/CommonModule) zu importieren, damit Ihre Komponente gängige [Direktiven](https://angular.io/api/common#directives) und [Pipes](https://angular.io/api/common#pipes) verwenden kann.
Dieses Tutorial nutzt `ngFor` und `ngIf`, sodass wir sicherstellen, dass diese verfügbar sind:

```js
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
```

## Zusammenfassung

Das war's für Ihre erste Einführung in Angular. An diesem Punkt sollten Sie eingerichtet und bereit sein, eine Angular-App zu erstellen, und ein grundlegendes Verständnis davon haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und damit beginnen, die Struktur unserer To-Do-Listenanwendung aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
