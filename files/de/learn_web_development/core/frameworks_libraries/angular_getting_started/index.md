---
title: Erste Schritte mit Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Angular-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis August 20, 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie [in dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Es ist an der Zeit, sich das Angular-Framework von Google anzusehen, eine weitere beliebte Option, auf die Sie häufig stoßen werden. In diesem Artikel schauen wir, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispielanwendung ein und werfen einen Blick auf die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial zielt auf [Angular Version 18](https://angular.dev/overview) ab und wurde zuletzt im August 2024 überarbeitet (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie Kenntnisse
        des <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminals/der Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Angular-Entwicklungsumgebung einrichten, eine Starter-App erstellen und die Grundlagen ihres Funktionierens verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, entwickelt mit [TypeScript](https://www.typescriptlang.org/). Es wird verwendet, um Single-Page-Webanwendungen zu erstellen. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zur Erstellung skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklerwerkzeugen, die Ihnen beim Entwickeln, Bauen, Testen und Aktualisieren Ihres Codes helfen

Beim Erstellen von Anwendungen mit Angular nutzen Sie eine Plattform, die von Einzelentwicklerprojekten bis hin zu Unternehmensanwendungen skalieren kann. Angular ist so konzipiert, dass Updates so einfach wie möglich sind, sodass Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Am besten ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Inhaltserstellern besteht.

Bevor Sie beginnen, die Angular-Plattform zu erkunden, sollten Sie den Angular CLI kennenlernen. Der Angular CLI ist die schnellste, einfachste und empfohlene Methode zur Entwicklung von Angular-Anwendungen. Der Angular CLI erleichtert eine Reihe von Aufgaben. Hier sind einige häufig verwendete Befehle:

| Befehl                                            | Beschreibung                                                                           |
| ------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                                 |
| [`ng serve`](https://angular.dev/cli/serve)       | Baut und bedient Ihre Anwendung, wobei sie bei Dateiänderungen neu gebaut wird.        |
| [`ng generate`](https://angular.dev/cli/generate) | Generiert oder modifiziert Dateien basierend auf einem Schema.                         |
| [`ng test`](https://angular.dev/cli/test)         | Führt Unit-Tests für ein gegebenes Projekt aus.                                        |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Baut und bedient eine Angular-Anwendung, um anschließend End-to-End-Tests auszuführen. |

Sie werden den Angular CLI als wertvolles Werkzeug zum Aufbau Ihrer Anwendungen finden.

## Was Sie erstellen werden

Diese Tutorial-Serie führt Sie durch den Aufbau einer To-Do-Liste-Anwendung. Durch diese Anwendung lernen Sie, wie Sie Angular verwenden, um Elemente zu verwalten, zu bearbeiten, hinzuzufügen, zu löschen und zu filtern.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS oder Wartungsversion](https://nodejs.org/en/about/previous-releases) von Node.js. Informationen zu spezifischen Versionsanforderungen finden Sie auf der Seite [Versionskompatibilität](https://angular.dev/reference/versions).

  Weitere Informationen zur Installation von Node.js finden Sie unter [nodejs.org](https://nodejs.org/en/download).
  Wenn Sie sich nicht sicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm-Paket-Manager**

  Angular, der Angular CLI und Angular-Anwendungen sind von [npm-Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen und Merkmale abhängig.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm Paketmanager.
  Diese Anleitung nutzt die [npm-Client](https://docs.npmjs.com/cli/install/) Kommandozeilenschnittstelle, die mit `Node.js` standardmäßig installiert wird.
  Um zu überprüfen, ob Sie den npm-Client installiert haben, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können den Angular CLI verwenden, um Befehle in Ihrem Terminal zum Generieren, Bauen, Testen und Bereitstellen von Angular-Anwendungen auszuführen.
Um den Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt davon, was der CLI tun soll.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App bauen möchten, und wechseln Sie in das Verzeichnis im Terminal. Verwenden Sie dann den folgenden [`ng new`](https://angular.dev/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new`-Befehl erstellt eine minimale Starter Angular-Anwendung.
Die zusätzlichen Flags `--routing` und `--style`, und `--ssr` definieren, wie Navigation und Stile in der Anwendung gehandhabt werden und konfigurieren Rendering auf Serverseite.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Das erste Mal, wenn Sie `ng` ausführen, können Sie gefragt werden, ob Sie die Terminal-[Autovervollständigung](https://angular.dev/cli/completion) und Analyse aktivieren möchten.
Die Autovervollständigung ist praktisch, weil durch Drücken von <kbd>TAB</kbd> beim Eingeben von `ng` Befehlen mögliche Optionen angezeigt und Argumente automatisch vervollständigt werden.

Sie können auch entscheiden, ob Sie erlauben möchten, dass Analysen zur CLI-Nutzung an die Angular-Pflegenden bei Google gesendet werden.
Um mehr über Analysen zu erfahren, lesen Sie die [Angular `ng analytics` CLI-Dokumentation](https://angular.dev/cli/analytics).

Um Ihre `todo`-Anwendung auszuführen, navigieren Sie mit dem `cd`-Befehl in Ihr neues Projekt und führen `ng serve` aus:

```bash
cd todo
ng serve
```

Navigieren Sie im Browser zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Während `ng serve` läuft, öffnen Sie einen zweiten Terminal-Tab oder ein Terminal-Fenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie irgendwann aufhören möchten, Ihre Anwendung zu bedienen, drücken Sie `Strg+c` im Terminal, das den `ng serve`-Befehl ausführt.

## Machen Sie sich mit Ihrer Angular-Anwendung vertraut

Die Anwendungsquellen, auf die sich dieses Tutorial konzentriert, befinden sich in `src/app`:

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

Wichtige Dateien, die der CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Auch als die Klasse bekannt, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei ist auch als Vorlage bekannt.
   Die Vorlage bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Stile für `AppComponent`. Sie verwenden diese Datei, wenn Sie Stile definieren möchten, die nur auf eine bestimmte Komponente angewendet werden, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen—der Vorlage, den Stilen, und der Klasse.
Zum Beispiel bilden `app.component.ts`, `app.component.html`, und `app.component.css` zusammen das `AppComponent`.
Diese Struktur trennt die Logik, Ansicht und Stile, sodass die Anwendung wartungsfreundlicher und skalierbarer ist.
Auf diese Weise verwenden Sie von Anfang an bewährte Praktiken.

Der Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf Tests ein, sodass Sie diese Datei ignorieren können.
Jedes Mal, wenn Sie eine Komponente generieren, erstellt der CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen. Wir werden später ein Beispiel dafür sehen.

Um mehr über Tests zu erfahren, lesen Sie den [Angular-Testleitfaden](https://angular.dev/guide/testing).

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript gebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierung und eine präzisere Syntax als einfaches JavaScript, was Ihnen ein Werkzeug bietet, um wartbareren Code zu erstellen und Fehler zu minimieren.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente umfasst eine TypeScript-Klasse, die einen `@Component()`-Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()`-Dekorator, um Metadaten (HTML-Vorlage und Stile) über eine Klasse anzugeben.

### Die Klasse

Die Klasse ist der Ort, an dem Sie jede Logik platzieren, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignis-Listener, Eigenschaften und Verweise auf Dienste umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
Sie könnten also Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()`-Dekorator, der Metadaten hat, die Angular mitteilen, wo das HTML und CSS zu finden ist.
Eine typische Komponente sieht wie folgt aus:

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

Diese Komponente wird `ItemComponent` genannt und ihr Selektor ist `app-item`.
Sie verwenden einen Selektor genau wie reguläre HTML-Tags, indem Sie ihn in andere Vorlagen setzen, d.h. `<app-item></app-item>`.
Wenn ein Selektor in einer Vorlage ist, rendert der Browser die Vorlage dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch die Erstellung von zwei Komponenten und die Verwendung der einen innerhalb der anderen.

> [!NOTE]
> Der Name der obigen Komponente ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, einfach, weil eine Komponente nichts anderes ist als eine Klasse, die durch einen TypeScript-Dekorator ergänzt wird.

Angulares Komponentenmodell bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten machen Ihre Anwendung auch leichter, auf Modulebene zu testen, und können die allgemeine Lesbarkeit Ihres Codes verbessern.

### Die HTML-Vorlage

Jede Komponente hat eine HTML-Vorlage, die angibt, wie diese Komponente gerendert wird.
Sie können diese Vorlage entweder inline oder per Dateipfad definieren.

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

Um Inline-HTML zu schreiben, verwenden Sie die `template`-Eigenschaft und schreiben Sie Ihr HTML in Backticks:

```ts
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular erweitert HTML um eine zusätzliche Syntax, die es Ihnen ermöglicht, dynamische Werte aus Ihrer Komponente einzufügen.
Angular aktualisiert automatisch den gerenderten DOM, wenn sich der Zustand Ihrer Komponente ändert.
Eine Verwendung dieser Funktion ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern weisen Angular an, den Inhalt zwischen ihnen zu interpolieren.
Der Wert für `title` kommt aus der Komponentenkasse:

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

Wenn die Anwendung die Komponente und ihre Vorlage lädt, sieht der Browser Folgendes:

```html
<h1>To do application</h1>
```

### Stile

Eine Komponente kann globale Stile aus der Datei `styles.css` der Anwendung erben und diese mit eigenen Stilen ergänzen oder überschreiben.
Sie können komponentespezifische Stile direkt im `@Component()`-Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Stile direkt im Komponentendekorator zu inkludieren, verwenden Sie die `styles`-Eigenschaft:

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

Typischerweise verwendet eine Komponente Stile in einer separaten Datei.
Sie können die `styleUrl`-Eigenschaft mit dem Pfad zur CSS-Datei als String oder `styleUrls` mit einem Array von Strings verwenden, wenn es mehrere CSS-Stylesheets gibt, die Sie einbeziehen möchten:

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

### Standalone-Komponenten

Es wird empfohlen, [Komponenten standalone zu machen](https://angular.dev/guide/components/importing#standalone-components), es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.dev/guide/ngmodules) (Angular-Module) zur Organisation des Codes.
Dieses Tutorial verwendet [Standalone-Komponenten](https://angular.dev/guide/components/importing#standalone-components), mit denen der Einstieg leichter ist.

Es ist üblich, [`CommonModule`](https://angular.dev/api/common/CommonModule) zu importieren, damit Ihre Komponente allgemeine [Direktiven](https://angular.dev/guide/directives) und [Pipes](https://angular.dev/guide/pipes) nutzen kann.

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

Das war Ihre erste Einführung in Angular. An diesem Punkt sollten Sie bereit sein, eine Angular-App zu erstellen, und ein grundlegendes Verständnis davon haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und beginnen, die Struktur unserer To-Do-Liste-Anwendung aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
