---
title: Einstieg mit Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist nun an der Zeit, sich mit Googles Angular-Framework vertraut zu machen, einer weiteren beliebten Option, die Ihnen oft begegnen wird. In diesem Artikel schauen wir uns an, was Angular zu bieten hat, installieren die erforderlichen Vorbereitungen, richten eine Beispiel-App ein und untersuchen die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial richtet sich an [Angular Version 18](https://angular.dev/overview) und wurde zuletzt im August 2024 überarbeitet (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal-/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einrichten einer lokalen Angular-Entwicklungsumgebung, Erstellen einer Starter-App
        und Verstehen der Grundlagen, wie sie funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, die auf [TypeScript](https://www.typescriptlang.org/) basiert. Es wird verwendet, um einseitige Webanwendungen zu erstellen. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zum Erstellen skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklerwerkzeugen, die Ihnen helfen, Ihren Code zu entwickeln, zu erstellen, zu testen und zu aktualisieren

Wenn Sie Anwendungen mit Angular entwickeln, nutzen Sie eine Plattform, die von Einzelentwicklerprojekten bis hin zu Unternehmensanwendungen skalierbar ist. Angular ist so konzipiert, dass Aktualisierungen so einfach wie möglich sind, sodass Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Am besten ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Inhaltsentwicklern besteht.

Bevor Sie mit der Erkundung der Angular-Plattform beginnen, sollten Sie die Angular CLI kennen. Die Angular CLI ist der schnellste, einfachste und empfohlene Weg, um Angular-Anwendungen zu entwickeln. Die Angular CLI erleichtert viele Aufgaben. Hier sind einige Beispielbefehle, die Sie häufig verwenden werden:

| Befehl                                            | Beschreibung                                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [`ng build`](https://angular.dev/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                                     |
| [`ng serve`](https://angular.dev/cli/serve)       | Erstellt und startet Ihre Anwendung, erneuert sich bei Dateisänderungen.                   |
| [`ng generate`](https://angular.dev/cli/generate) | Erzeugt oder modifiziert Dateien basierend auf einem Schema.                               |
| [`ng test`](https://angular.dev/cli/test)         | Führt Komponententests auf einem gegebenen Projekt durch.                                  |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Erstellt und startet eine Angular-Anwendung und führt anschließend End-to-End-Tests durch. |

Sie werden die Angular CLI als wertvolles Werkzeug für den Aufbau Ihrer Anwendungen finden.

## Was Sie entwickeln werden

Diese Tutorialserie führt Sie durch den Bau einer To-Do-Listenanwendung. Durch diese Anwendung lernen Sie, wie Sie mit Angular Elemente verwalten, bearbeiten, hinzufügen, löschen und filtern können.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS- oder Wartungsversion von LTS](https://nodejs.org/en/about/previous-releases) von Node.js. Informationen zu spezifischen Versionsanforderungen finden Sie auf der Seite [Version-Kompatibilität](https://angular.dev/reference/versions).

  Weitere Informationen zur Installation von Node.js finden Sie auf [nodejs.org](https://nodejs.org/en/download).
  Wenn Sie sich nicht sicher sind, welche Version von Node.js auf Ihrem System ausgeführt wird, führen Sie `node -v` in einem Terminalfenster aus.

- **npm-Paketmanager**

  Angular, die Angular CLI und Angular-Anwendungen hängen von [npm-Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen und Features ab.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Diese Anleitung verwendet die [npm-Client](https://docs.npmjs.com/cli/install/)-Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob der npm-Client installiert ist, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können die Angular CLI verwenden, um Befehle in Ihrem Terminal auszuführen, um Angular-Anwendungen zu erstellen, zu testen und zu bereitzustellen.
Um die Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt von dem, was die CLI tun soll.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App bauen möchten, und wechseln Sie in das Verzeichnis im Terminal. Verwenden Sie dann den folgenden [`ng new`](https://angular.dev/cli/new)-Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new`-Befehl erstellt eine minimale Starter-Angular-Anwendung.
Die zusätzlichen Flags `--routing` und `--style` und `--ssr` definieren, wie die Navigation und die Stile in der Anwendung behandelt werden, und konfigurieren das Server-Side-Rendering.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Beim ersten Ausführen von `ng` werden Sie möglicherweise gefragt, ob Sie die Terminal-[Autovervollständigung](https://angular.dev/cli/completion) und die Analytics aktivieren möchten.
Die Autovervollständigung ist praktisch, da das Drücken von <kbd>TAB</kbd> während der Eingabe von `ng`-Befehlen mögliche Optionen anzeigt und Argumente vervollständigt.

Sie können auch entscheiden, ob Sie erlauben möchten, dass Analysen zur Nutzung der CLI an die Angular-Wartungsteams bei Google gesendet werden.
Um mehr über Analytics zu erfahren, sehen Sie sich die [Angular `ng analytics`-CLI-Dokumentation](https://angular.dev/cli/analytics) an.

Um Ihre `todo`-Anwendung auszuführen, navigieren Sie mit dem `cd`-Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Navigieren Sie in Ihrem Browser zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Während `ng serve` läuft, öffnen Sie einen zweiten Terminal-Tab oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie die Ausführung Ihrer Anwendung zu einem beliebigen Zeitpunkt stoppen möchten, drücken Sie `Strg+c` im Terminal, das den `ng serve`-Befehl ausführt.

## Machen Sie sich mit Ihrer Angular-Anwendung vertraut

Die Quellcodedateien der Anwendung, auf die sich dieses Tutorial konzentriert, befinden sich in `src/app`:

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
2. `app.component.html`: Beinhaltet das HTML für `AppComponent`. Der Inhalt dieser Datei wird auch als Template bezeichnet.
   Das Template bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Beinhaltet die Stile für `AppComponent`. Sie verwenden diese Datei, wenn Sie Stile definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptbestandteilen – dem Template, den Stilen und der Klasse.
Zum Beispiel bilden `app.component.ts`, `app.component.html` und `app.component.css` zusammen das `AppComponent`.
Diese Struktur trennt die Logik, die Ansicht und die Stile, sodass die Anwendung leichter wartbar und skalierbar ist.
Auf diese Weise verwenden Sie von Anfang an die besten Praktiken.

Die Angular CLI generiert auch eine Datei für das Komponententesting namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf das Testen ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente generieren, erstellt die CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen, und wir werden später ein Beispiel dafür sehen.

Um mehr über das Testen zu lernen, sehen Sie sich den [Angular Testleitfaden](https://angular.dev/guide/testing) an.

## Die Struktur einer Angular-Anwendung

Angular wird mit TypeScript gebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierungen und ein prägnanteres Syntax als reines JavaScript, wodurch Sie ein Werkzeug zur Erstellung von besser wartbarem Code und zur Minimierung von Fehlern erhalten.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente enthält eine TypeScript-Klasse, die einen `@Component()`-Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()`-Dekorator, um Metadaten (HTML-Template und Stile) über eine Klasse zu spezifizieren.

### Die Klasse

Die Klasse ist der Ort, an dem Sie alle Logik platzieren, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignislistener, Eigenschaften und Referenzen zu Diensten umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
So könnten Sie Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()`-Dekorator, der Metadaten enthält, die Angular mitteilen, wo das HTML und CSS zu finden ist.
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

Diese Komponente heißt `ItemComponent`, und ihr Selektor ist `app-item`.
Sie verwenden einen Selektor wie reguläre HTML-Tags, indem Sie ihn in andere Templates einfügen, d.h. `<app-item></app-item>`.
Wenn ein Selektor in einem Template vorhanden ist, rendert der Browser das Template dieser Komponente, wann immer eine Instanz des Selektors gefunden wird.
Dieses Tutorial führt Sie durch die Erstellung von zwei Komponenten und die Verwendung einer Komponente innerhalb der anderen.

> [!NOTE]
> Der Name der oben genannten Komponente ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, einfach weil eine Komponente nichts anderes als eine Klasse ist, die mit einem TypeScript-Dekorator ergänzt wurde.

Das Komponentenmodell von Angular bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten erleichtern auch das Komponententesten und können die allgemeine Lesbarkeit Ihres Codes verbessern.

### Das HTML-Template

Jede Komponente hat ein HTML-Template, das deklariert, wie diese Komponente gerendert wird.
Sie können dieses Template entweder inline oder durch einen Dateipfad definieren.

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

Um Inline-HTML zu schreiben, verwenden Sie die `template`-Eigenschaft und schreiben Sie Ihr HTML in Backticks:

```js
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular erweitert HTML mit zusätzlichem Syntax, der es Ihnen ermöglicht, dynamische Werte aus Ihrer Komponente einzufügen.
Angular aktualisiert automatisch das gerenderte DOM, wenn sich der Zustand Ihrer Komponente ändert.
Eine Nutzung dieses Features ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern fordern Angular auf, die darin enthaltenen Inhalte zu interpolieren.
Der Wert für `title` kommt aus der Komponentenklasse:

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

Wenn die Anwendung die Komponente und ihr Template lädt, sieht der Browser Folgendes:

```html
<h1>To do application</h1>
```

### Stile

Eine Komponente kann globale Stile aus der `styles.css`-Datei der Anwendung erben und sie mit eigenen Stilen ergänzen oder überschreiben.
Sie können komponentenspezifische Stile direkt im `@Component()`-Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Stile direkt im Komponentendekorator einzubeziehen, verwenden Sie die `styles`-Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typischerweise verwendet eine Komponente Stile in einer separaten Datei.
Sie können die `styleUrl`-Eigenschaft mit dem Pfad zur CSS-Datei als Zeichenfolge oder `styleUrls` mit einem Array von Zeichenfolgen verwenden, wenn es mehrere CSS-Stylesheets gibt, die Sie einbeziehen möchten:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

Mit komponentenspezifischen Stilen können Sie Ihr CSS so organisieren, dass es leicht wartbar und portabel ist.

### Eigenständige Komponenten

Es wird empfohlen, [Komponenten eigenständig zu machen](https://angular.dev/guide/components/importing#standalone-components), es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.dev/guide/ngmodules) (Angular-Module), um den Code zu organisieren.
Dieses Tutorial verwendet [eigenständige Komponenten](https://angular.dev/guide/components/importing#standalone-components), mit denen der Einstieg einfacher ist.

Es ist üblich, [`CommonModule`](https://angular.dev/api/common/CommonModule) zu importieren, sodass Ihre Komponente gebräuchliche [Direktiven](https://angular.dev/guide/directives) und [Pipes](https://angular.dev/guide/pipes) verwenden kann.

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

Das war Ihre erste Einführung in Angular. An diesem Punkt sollten Sie in der Lage sein, eine Angular-App zu erstellen und ein grundlegendes Verständnis davon zu haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und damit beginnen, die Struktur unserer To-Do-Listenanwendung aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
