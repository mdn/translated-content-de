---
title: Einstieg in Angular
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Es ist an der Zeit, sich Angular, das Framework von Google, anzusehen, eine weitere beliebte Option, auf die Sie häufig stoßen werden. In diesem Artikel betrachten wir, was Angular zu bieten hat, installieren die Voraussetzungen, richten eine Beispielanwendung ein und werfen einen Blick auf die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial zielt auf [Angular Version 17](https://v17.angular.io/guide/update-to-version-17) ab und wurde zuletzt im März 2024 überarbeitet (`Angular CLI: 17.3.0`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        Kenntnisse über das
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Angular-Entwicklungsumgebung, Erstellen einer Starter-App und Verständnis der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und Entwicklungsplattform, gebaut auf [TypeScript](https://www.typescriptlang.org/). Es wird zur Erstellung von Single-Page-Webanwendungen verwendet. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zum Erstellen skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, darunter Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklerwerkzeugen, die Ihnen beim Entwickeln, Erstellen, Testen und Aktualisieren Ihres Codes helfen

Wenn Sie Anwendungen mit Angular erstellen, nutzen Sie eine Plattform, die vom Einzelentwicklerprojekt bis hin zu Unternehmensanwendungen skalieren kann. Angular ist so konzipiert, dass das Aktualisieren so einfach wie möglich ist, sodass Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Das Beste daran ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Content-Erstellern besteht.

Bevor Sie mit der Erkundung der Angular-Plattform beginnen, sollten Sie den Angular CLI kennen. Der Angular CLI ist der schnellste, einfachste und empfohlene Weg, um Angular-Anwendungen zu entwickeln. Der Angular CLI erleichtert eine Reihe von Aufgaben. Hier sind einige Beispielbefehle, die Sie häufig verwenden werden:

| Befehl                                           | Beschreibung                                                                            |
| ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [`ng build`](https://angular.io/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                                  |
| [`ng serve`](https://angular.io/cli/serve)       | Erstellt und führt Ihre Anwendung aus, wobei sie bei Dateiänderungen neu erstellt wird. |
| [`ng generate`](https://angular.io/cli/generate) | Generiert oder ändert Dateien basierend auf einem Schema.                               |
| [`ng test`](https://angular.io/cli/test)         | Führt Unit-Tests an einem bestimmten Projekt durch.                                     |
| [`ng e2e`](https://angular.io/cli/e2e)           | Erstellt und führt eine Angular-Anwendung aus, um danach End-to-End-Tests auszuführen.  |

Der Angular CLI wird für den Ausbau Ihrer Anwendungen ein wertvolles Werkzeug sein.

## Was Sie erstellen werden

Diese Tutorial-Serie führt Sie durch den Aufbau einer To-Do-Liste-Anwendung. Über diese Anwendung werden Sie lernen, wie man mit Angular Objekte verwaltet, bearbeitet, hinzufügt, löscht und filtert.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktuelle LTS- oder Wartungs-LTS](https://nodejs.org/en/about/previous-releases)-Version von Node.js. Informationen zu spezifischen Versionsanforderungen finden Sie auf der Seite [Versionskompatibilität](https://angular.io/guide/versions).

  Weitere Informationen zur Installation von Node.js finden Sie unter [nodejs.org](https://nodejs.org/en/download/package-manager).
  Wenn Sie unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm Paketmanager**

  Angular, die Angular CLI und Angular-Anwendungen sind auf [npm Pakete](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen angewiesen.
  Um npm Pakete herunterladen und installieren zu können, benötigen Sie einen npm Paketmanager.
  Dieser Leitfaden verwendet die [npm Client](https://docs.npmjs.com/cli/install/) Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob der npm-Client installiert ist, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können den Angular CLI verwenden, um Befehle in Ihrem Terminal auszuführen, um Angular-Anwendungen zu erzeugen, zu erstellen, zu testen und bereitzustellen.
Um den Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt von dem, was der CLI tun soll.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre Anwendung erstellen möchten, und wechseln Sie im Terminal zu diesem Verzeichnis. Verwenden Sie dann den folgenden [`ng new`](https://angular.io/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new` Befehl erstellt eine minimale Starter-Angular-Anwendung.
Die zusätzlichen Flags, `--routing` und `--style`, sowie `--ssr` definieren, wie die Navigation und Stile in der Anwendung gehandhabt werden und konfigurieren das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Beim ersten Ausführen von `ng` werden Sie möglicherweise gefragt, ob Sie eine terminale [Autovervollständigung](https://angular.io/cli/completion) und Analytik aktivieren möchten.
Die Autovervollständigung ist praktisch, da beim Tippen von `ng` Befehlen durch Drücken von <kbd>TAB</kbd> mögliche Optionen angezeigt und Argumente automatisch vervollständigt werden.

Sie können auch entscheiden, ob Sie zulassen möchten, dass Analysen über die Nutzung der CLI an die Angular-Betreuer bei Google gesendet werden.
Weitere Informationen zu Analysen finden Sie in der [Angular `ng analytics` CLI Dokumentation](https://angular.io/cli/analytics).

Um Ihre `todo`-Anwendung auszuführen, navigieren Sie mit dem `cd` Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Im Browser können Sie auf `http://localhost:4200/` navigieren, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Während `ng serve` läuft, öffnen Sie eine zweite Registerkarte oder ein zweites Fenster im Terminal, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie irgendwann Aufhören möchten, Ihre Anwendung zu bedienen, drücken Sie `Ctrl+c` in dem Terminal, in dem der `ng serve` Befehl ausgeführt wird.

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

Wichtige Dateien, die der CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Auch als Klasse bekannt, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei ist auch als Vorlage bekannt.
   Die Vorlage bestimmt das Erscheinungsbild oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Stile für `AppComponent`. Diese Datei wird verwendet, wenn Sie Stile definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen – der Vorlage, den Stilen und der Klasse.
Zum Beispiel bilden `app.component.ts`, `app.component.html` und `app.component.css` zusammen das `AppComponent`.
Diese Struktur trennt Logik, Ansicht und Stile, sodass die Anwendung besser wartbar und skalierbar ist.
So nutzen Sie die Best Practices von Anfang an.

Der Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht näher auf Tests ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente generieren, erstellt der CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen, und wir werden später ein Beispiel dafür sehen.

Um mehr über das Testen zu lernen, siehe den [Angular-Testleitfaden](https://angular.io/guide/testing).

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript erstellt.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jeder gültige JavaScript-Code auch gültiger TypeScript-Code ist.
TypeScript bietet Typisierung und eine prägnantere Syntax als reines JavaScript, was Ihnen ein Werkzeug zur Erstellung wartbarerer Codes und zur Minimierung von Fehlern gibt.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente umfasst eine TypeScript-Klasse, die einen `@Component()` Dekorator besitzt.

### Der Dekorator

Sie verwenden den `@Component()` Dekorator, um Metadaten (HTML-Vorlage und Stile) zu einer Klasse anzugeben.

### Die Klasse

Die Klasse ist der Ort, an dem Sie jegliche Logik unterbringen, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignis-Listener, Eigenschaften und Verweise auf Dienste umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
Daher könnten Sie Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Eine Komponente erstellen Sie mit einem `@Component()` Dekorator, der Metadaten enthält, die Angular mitteilen, wo das HTML und CSS zu finden sind.
Eine typische Komponente sieht folgendermaßen aus:

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
Ein Selektor wird ähnlich wie reguläre HTML-Tags verwendet, indem er in andere Vorlagen eingefügt wird, also `<app-item></app-item>`.
Wenn ein Selektor in einer Vorlage ist, rendert der Browser die Vorlage dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch das Erstellen von zwei Komponenten und die Verwendung einer innerhalb der anderen.

> [!NOTE]
> Der Name der obigen Komponente ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, da eine Komponente nichts anderes ist als eine Klasse, die durch einen TypeScript-Dekorator ergänzt wird.

Das Komponentenmodell von Angular bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten machen Ihre Anwendung auch einfacher zu Unit-Testen und können die Lesbarkeit Ihres Codes insgesamt verbessern.

### Die HTML-Vorlage

Jede Komponente hat eine HTML-Vorlage, die definiert, wie diese Komponente gerendert wird.
Sie können diese Vorlage entweder inline oder über einen Dateipfad definieren.

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

Um inline HTML zu schreiben, verwenden Sie die `template`-Eigenschaft und schreiben Sie Ihr HTML in Backticks:

```js
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular erweitert HTML um zusätzliche Syntax, die es Ihnen ermöglicht, dynamische Werte aus Ihrer Komponente einzufügen.
Angular aktualisiert den gerenderten DOM automatisch, wenn sich der Zustand Ihrer Komponente ändert.
Eine Nutzung dieser Funktion besteht darin, dynamischen Text einzufügen, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern weisen Angular an, den Inhalt dazwischen zu interpolieren.
Der Wert für `title` kommt aus der Komponentenklasse:

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

Wenn die Anwendung die Komponente und deren Vorlage lädt, sieht der Browser folgendes:

```html
<h1>To do application</h1>
```

### Stile

Eine Komponente kann globale Stile aus der `styles.css`-Datei der Anwendung erben und diese durch eigene Stile ergänzen oder überschreiben.
Sie können komponentenspezifische Stile direkt im `@Component()` Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Stile direkt im Dekorator der Komponente einzubinden, verwenden Sie die `styles`-Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typischerweise verwendet eine Komponente Stile in einer separaten Datei unter Verwendung der `styleUrls`-Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

Mit komponentenspezifischen Stilen können Sie Ihr CSS so organisieren, dass es leicht wartbar und portierbar ist.

### Standalone-Komponenten

Es wird empfohlen, [Komponenten als Standalone zu gestalten](https://angular.io/guide/component-overview#creating-a-component-manually-1), es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.io/guide/ngmodules) (Angular-Module), um den Code zu organisieren.
Dieses Tutorial verwendet [Standalone-Komponenten](https://angular.io/guide/standalone-components), die einfacher zu starten sind.

Es ist üblich, [`CommonModule`](https://angular.io/api/common/CommonModule) zu importieren, damit Ihre Komponente gemeinsame [Direktiven](https://angular.io/api/common#directives) und [Pipes](https://angular.io/api/common#pipes) nutzen kann.
Dieses Tutorial verwendet `ngFor` und `ngIf`, sodass wir sicherstellen können, dass diese verfügbar sind:

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

Das war's für Ihre erste Einführung in Angular. An diesem Punkt sollten Sie bereit sein, eine Angular-App zu erstellen, und ein grundlegendes Verständnis davon haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und mit dem Aufbau der Struktur unserer To-Do-Liste-Anwendung beginnen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
