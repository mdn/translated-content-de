---
title: Erste Schritte mit Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist nun an der Zeit, sich das Angular-Framework von Google anzusehen, eine weitere beliebte Option, auf die Sie häufig stoßen werden. In diesem Artikel betrachten wir, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und werfen einen Blick auf die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial richtet sich an [Angular Version 18](https://angular.dev/overview) und wurde zuletzt im August 2024 überarbeitet (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
        sowie Kenntnisse im Umgang mit dem
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
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

Angular ist ein Framework und Entwicklungsplattform, die auf [TypeScript](https://www.typescriptlang.org/) basiert. Es wird zur Erstellung von Single-Page-Webanwendungen verwendet. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zum Erstellen skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklerwerkzeugen, die Ihnen helfen, Ihren Code zu entwickeln, aufzubauen, zu testen und zu aktualisieren

Wenn Sie Anwendungen mit Angular entwickeln, nutzen Sie eine Plattform, die von Einzelentwicklerprojekten bis zu Unternehmensanwendungen skalieren kann. Angular ist so konzipiert, dass Aktualisierungen so einfach wie möglich sind, sodass Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Das Beste daran: Das Angular-Ökosystem besteht aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Inhaltserstellern.

Bevor Sie mit der Erkundung der Angular-Plattform beginnen, sollten Sie über die Angular CLI Bescheid wissen. Die Angular CLI ist die schnellste, einfachste und empfohlene Möglichkeit, Angular-Anwendungen zu entwickeln. Die Angular CLI erleichtert eine Reihe von Aufgaben. Hier sind einige Befehlsbeispiele, die Sie häufig verwenden werden:

| Befehl                                            | Beschreibung                                                                              |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                                    |
| [`ng serve`](https://angular.dev/cli/serve)       | Baut Ihre Anwendung und startet den Server, der bei Dateiänderungen automatisch neu lädt. |
| [`ng generate`](https://angular.dev/cli/generate) | Generiert oder ändert Dateien basierend auf einem Schema.                                 |
| [`ng test`](https://angular.dev/cli/test)         | Führt Komponententests auf einem gegebenen Projekt aus.                                   |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Baut eine Angular-App und startet End-to-End-Tests.                                       |

Sie werden feststellen, dass die Angular CLI ein wertvolles Werkzeug zum Aufbau Ihrer Anwendungen ist.

## Was Sie erstellen werden

Diese Tutorialreihe führt Sie durch die Erstellung einer To-Do-Liste-Anwendung. Durch diese Anwendung lernen Sie, wie man mit Angular Elemente verwaltet, bearbeitet, hinzufügt, löscht und filtert.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS oder Wartungs-LTS](https://nodejs.org/en/about/previous-releases) Version von Node.js. Informationen zu spezifischen Versionserfordernissen finden Sie auf der Seite [Version-Kompatibilität](https://angular.dev/reference/versions).

  Für weitere Informationen zur Installation von Node.js, besuchen Sie [nodejs.org](https://nodejs.org/en/download).
  Falls Sie unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm-Paketmanager**

  Angular, die Angular CLI und Angular-Anwendungen hängen von [npm-Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen ab.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Diese Anleitung verwendet die [npm-Client](https://docs.npmjs.com/cli/install/) Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob der npm-Client installiert ist, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellung einer Angular-Anwendung

Sie können die Angular CLI verwenden, um Befehle in Ihrem Terminal auszuführen, um Angular-Anwendungen zu generieren, zu bauen, zu testen und bereitzustellen.
Um die Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt von der gewünschten Aktion.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App erstellen möchten, und wechseln Sie im Terminal in das Verzeichnis. Verwenden Sie dann den folgenden [`ng new`](https://angular.dev/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new` Befehl erstellt eine minimalistische Starter Angular-Anwendung.
Die zusätzlichen Flags, `--routing` und `--style`, sowie `--ssr` definieren, wie die Navigation und Stile in der Anwendung gehandhabt werden, und konfigurieren das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Wenn Sie `ng` zum ersten Mal ausführen, werden Sie möglicherweise gefragt, ob Sie die Terminal-[Autovervollständigung](https://angular.dev/cli/completion) und die Analyse aktivieren möchten.
Die Autovervollständigung ist praktisch, da das Drücken von <kbd>TAB</kbd> während der Eingabe von `ng`-Befehlen mögliche Optionen anzeigt und Argumente automatisch vervollständigt.

Sie können auch entscheiden, ob Sie zulassen möchten, dass Analysen über die CLI-Nutzung an die Angular-Verwalter bei Google gesendet werden.
Um mehr über Analysen zu erfahren, schauen Sie in die [Angular `ng analytics` CLI-Dokumentation](https://angular.dev/cli/analytics).

Um Ihre `todo`-Anwendung auszuführen, navigieren Sie mit dem `cd`-Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Navigieren Sie im Browser zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Während `ng serve` läuft, öffnen Sie einen zweiten Terminal-Tab oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie zu irgendeinem Zeitpunkt die Bereitstellung Ihrer Anwendung stoppen möchten, drücken Sie `Ctrl+c` im Terminal, das den `ng serve` Befehl ausführt.

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

Schlüsseldateien, die die CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Auch bekannt als die Klasse, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei wird auch als Template bezeichnet.
   Das Template bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Stile für `AppComponent`. Diese Datei wird verwendet, wenn Sie Stile definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen – dem Template, den Stilen und der Klasse.
Zum Beispiel stellen `app.component.ts`, `app.component.html` und `app.component.css` zusammen das `AppComponent` dar.
Diese Struktur trennt die Logik, die Ansicht und die Stile, sodass die Anwendung wartbarer und skalierbarer ist.
Auf diese Weise verwenden Sie von Anfang an bewährte Praktiken.

Die Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf Tests ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente generieren, erstellt die CLI diese Dateien in einem Verzeichnis mit dem Namen, den Sie angeben, und wir werden später ein Beispiel dafür sehen.

Um mehr über Tests zu erfahren, schauen Sie sich die [Angular Testleitfaden](https://angular.dev/guide/testing) an.

## Die Struktur einer Angular-Anwendung

Angular wird mit TypeScript aufgebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierung und eine prägnantere Syntax als reines JavaScript, was Ihnen ein Werkzeug bietet, um wartbareren Code zu erstellen und Fehler zu minimieren.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente umfasst eine TypeScript-Klasse mit einem `@Component()`-Decorator.

### Der Decorator

Sie verwenden den `@Component()`-Decorator, um Metadaten (HTML-Template und Stile) zu einer Klasse zu spezifizieren.

### Die Klasse

In der Klasse platzieren Sie alle Logik, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignislistener, Eigenschaften und Referenzen zu Diensten enthalten.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
Sie könnten also Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()`-Decorator, der Metadaten enthält, die Angular mitteilen, wo sich das HTML und CSS befinden.
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

Diese Komponente heißt `ItemComponent`, und ihr Selector ist `app-item`.
Sie verwenden einen Selector genauso wie reguläre HTML-Tags, indem Sie ihn in andere Templates platzieren, z.B. `<app-item></app-item>`.
Wenn ein Selector in einem Template ist, rendert der Browser das Template dieser Komponente immer dann, wenn eine Instanz des Selectors auftritt.
Dieses Tutorial führt Sie durch die Erstellung von zwei Komponenten und die Verwendung einer innerhalb der anderen.

> [!NOTE]
> Der Name der Komponente oben ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, weil eine Komponente nichts anderes als eine Klasse ist, die durch einen TypeScript-Decorator ergänzt wird.

Das Komponentenmodell von Angular bietet starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten machen Ihre Anwendung auch einfacher zu testen und können die allgemeine Lesbarkeit Ihres Codes verbessern.

### Das HTML-Template

Jede Komponente hat ein HTML-Template, das deklariert, wie diese Komponente rendert.
Sie können dieses Template entweder inline oder durch den Dateipfad definieren.

Um auf eine externe HTML-Datei zu verweisen, nutzen Sie die Eigenschaft `templateUrl`:

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}
```

Um Inline-HTML zu schreiben, verwenden Sie die Eigenschaft `template` und schreiben Ihr HTML in Backticks:

```ts
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular erweitert HTML mit zusätzlicher Syntax, die es Ihnen ermöglicht, dynamische Werte aus Ihrer Komponente einzufügen.
Angular aktualisiert bei Änderungen im Status Ihrer Komponente automatisch das gerenderte DOM.
Eine Verwendung dieser Funktion ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern weisen Angular an, den Inhalt dazwischen zu interpolieren.
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

Wenn die Anwendung die Komponente und deren Template lädt, sieht der Browser das Folgende:

```html
<h1>To do application</h1>
```

### Stile

Eine Komponente kann globale Stile von der `styles.css` Datei der Anwendung erben und diese mit ihren eigenen Stilen ergänzen oder überschreiben.
Sie können komponentenspezifische Stile direkt im `@Component()`-Decorator oder über den Pfad zu einer CSS-Datei schreiben.

Um die Stile direkt im Komponenten-Decorator einzuschließen, nutzen Sie die Eigenschaft `styles`:

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

Typischerweise nutzt eine Komponente Stile in einer separaten Datei.
Sie können die Eigenschaft `styleUrl` mit dem Pfad zur CSS-Datei als String oder `styleUrls` mit einem Array von Strings verwenden, wenn mehrere CSS-Stylesheets eingeschlossen werden sollen:

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

Mit komponentenspezifischen Stilen können Sie Ihr CSS so organisieren, dass es leicht wartbar und portabel ist.

### Eigenständige Komponenten

Es wird empfohlen, [Komponenten eigenständig zu machen](https://angular.dev/guide/components/importing#standalone-components), es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.dev/guide/ngmodules) (Angular-Module) zur Organisation des Codes.
Dieses Tutorial verwendet [eigenständige Komponenten](https://angular.dev/guide/components/importing#standalone-components), die einfacher zu starten sind.

Es ist üblich, [`CommonModule`](https://angular.dev/api/common/CommonModule) zu importieren, damit Ihre Komponente gebräuchliche [Direktiven](https://angular.dev/guide/directives) und [Pipes](https://angular.dev/guide/pipes) verwenden kann.

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

Das war Ihre erste Einführung in Angular. An diesem Punkt sollten Sie eingerichtet und bereit sein, eine Angular-App zu erstellen, und ein grundlegendes Verständnis davon haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und mit dem Aufbau der Struktur unserer To-Do-Liste-Anwendung beginnen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
