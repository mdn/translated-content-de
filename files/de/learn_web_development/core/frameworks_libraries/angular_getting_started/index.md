---
title: Erste Schritte mit Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist an der Zeit, einen Blick auf Googles Angular-Framework zu werfen, eine weitere beliebte Option, auf die Sie häufig stoßen werden. In diesem Artikel betrachten wir, was Angular zu bieten hat, installieren die Voraussetzungen, richten eine Beispiel-App ein und schauen uns die grundlegende Architektur von Angular an.

> [!NOTE]
> Dieses Tutorial richtet sich an die [Angular Version 18](https://angular.dev/overview) und wurde zuletzt im August 2024 überarbeitet (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Angular-Entwicklungsumgebung einrichten, eine Starter-App erstellen
        und die Grundlagen des Funktionierens verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, die auf [TypeScript](https://www.typescriptlang.org/) aufgebaut ist. Es wird zur Erstellung von Single-Page-Webanwendungen verwendet. Als Plattform beinhaltet Angular:

- Ein komponentenbasiertes Framework zur Erstellung skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine breite Palette von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklerwerkzeugen, die Ihnen helfen, Ihren Code zu entwickeln, zu erstellen, zu testen und zu aktualisieren

Wenn Sie Anwendungen mit Angular erstellen, nutzen Sie eine Plattform, die von Einzelentwicklerprojekten bis hin zu Anwendungen auf Unternehmensebene skalierbar ist. Angular ist so konzipiert, dass Aktualisierungen so einfach wie möglich sind, sodass Sie mit minimalem Aufwand die neuesten Entwicklungen nutzen können. Am besten von allem besteht das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Inhaltserstellern.

Bevor Sie beginnen, die Angular-Plattform zu erkunden, sollten Sie den Angular CLI kennen. Der Angular CLI ist der schnellste, einfachste und empfohlene Weg, um Angular-Anwendungen zu entwickeln. Der Angular CLI macht eine Reihe von Aufgaben einfach. Hier sind einige Beispielbefehle, die Sie häufig verwenden:

| Befehl                                            | Beschreibung                                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                          |
| [`ng serve`](https://angular.dev/cli/serve)       | Erstellt und bedient Ihre Anwendung, erneuert bei Dateienstößen.                |
| [`ng generate`](https://angular.dev/cli/generate) | Generiert oder modifiziert Dateien basierend auf einem Schema.                  |
| [`ng test`](https://angular.dev/cli/test)         | Führt Unittests auf einem gegebenen Projekt aus.                                |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Erstellt und bedient eine Angular-Anwendung, dann führt End-to-End-Tests durch. |

Sie werden feststellen, dass der Angular CLI ein wertvolles Werkzeug zum Erstellen Ihrer Anwendungen ist.

## Was Sie bauen werden

Diese Tutorialreihe führt Sie durch den Bau einer To-Do-Listen-Anwendung. Über diese Anwendung lernen Sie, wie Sie Angular verwenden, um Elemente zu verwalten, zu bearbeiten, hinzuzufügen, zu löschen und zu filtern.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS- oder Wartungs-LTS-Version](https://nodejs.org/en/about/previous-releases) von Node.js. Für Informationen zu spezifischen Versionsanforderungen, siehe die Seite [Versionskompatibilität](https://angular.dev/reference/versions).

  Für weitere Informationen zur Installation von Node.js, siehe [nodejs.org](https://nodejs.org/en/download/package-manager).
  Wenn Sie unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm-Paketmanager**

  Angular, der Angular CLI und Angular-Anwendungen sind auf [npm-Pakete](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen und Eigenschaften angewiesen.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Diese Anleitung verwendet die [npm-Client](https://docs.npmjs.com/cli/install/) Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, dass Sie den npm-Client installiert haben, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können den Angular CLI verwenden, um Befehle in Ihrem Terminal auszuführen, um Angular-Anwendungen zu generieren, zu erstellen, zu testen und bereitzustellen.
Um den Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt davon, was der CLI tun soll.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App erstellen möchten, und wechseln Sie in das Verzeichnis im Terminal. Verwenden Sie dann den folgenden [`ng new`](https://angular.dev/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new` Befehl erstellt eine minimale Starter-Angular-Anwendung.
Die zusätzlichen Flags, `--routing` und `--style`, sowie `--ssr` definieren, wie die Navigation und Stile in der Anwendung behandelt werden sollen, und konfiguriert das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später im Detail.

Wenn Sie `ng` zum ersten Mal ausführen, werden Sie möglicherweise gefragt, ob Sie die [Autovervollständigung](https://angular.dev/cli/completion) und die Analyse im Terminal aktivieren möchten.
Autovervollständigung ist praktisch, da das Drücken von <kbd>TAB</kbd> beim Schreiben von `ng`-Befehlen mögliche Optionen anzeigt und Argumente automatisch ergänzt.

Sie können auch entscheiden, ob Sie die Analyse zur Nutzung der CLI an Google, die Erhalter von Angular, senden möchten.
Um mehr über die Analyse zu erfahren, siehe die [Angular `ng analytics` CLI-Dokumentation](https://angular.dev/cli/analytics).

Um Ihre `todo` Anwendung auszuführen, navigieren Sie mit dem `cd` Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Im Browser navigieren Sie zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Während `ng serve` ausgeführt wird, öffnen Sie eine zweite Registerkarte im Terminal oder ein neues Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie zu einem bestimmten Zeitpunkt den Dienst Ihrer Anwendung beenden möchten, drücken Sie `Ctrl+c` im Terminal, das den `ng serve` Befehl ausführt.

## Machen Sie sich mit Ihrer Angular-Anwendung vertraut

Die Quellcodes der Anwendung, auf die sich dieses Tutorial konzentriert, befinden sich in `src/app`:

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

Schlüsseldokumente, die der CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Auch bekannt als die Klasse, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für den `AppComponent`. Die Inhalte dieser Datei sind ebenfalls als Template bekannt.
   Das Template bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Stile für den `AppComponent`. Sie verwenden diese Datei, wenn Sie Stile definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer Anwendung im Allgemeinen.

Eine Komponente in Angular besteht aus drei Hauptteilen—dem Template, den Stilen und der Klasse.
Zum Beispiel bestehen `app.component.ts`, `app.component.html` und `app.component.css` zusammen den `AppComponent`.
Diese Struktur trennt die Logik, die Ansicht und die Stile, sodass die Anwendung wartbarer und skalierbarer ist.
Auf diese Weise verwenden Sie von Anfang an Best Practices.

Der Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf das Testen ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente generieren, erstellt der CLI diese Dateien in einem Verzeichnis mit dem Namen, den Sie angeben, und wir werden später ein Beispiel dafür sehen.

Um mehr über das Testen zu erfahren, siehe den [Angular Test-Leitfaden](https://angular.dev/guide/testing).

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript gebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierung und eine präzisere Syntax als einfaches JavaScript, was Ihnen ein Werkzeug bietet, um wartbaren Code zu erstellen und Bugs zu minimieren.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente beinhaltet eine TypeScript-Klasse, die einen `@Component()` Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()` Dekorator, um Metadaten (HTML-Template und Stile) über eine Klasse anzugeben.

### Die Klasse

Die Klasse ist der Ort, an dem Sie alle Logiken platzieren, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignislistener, Eigenschaften und Referenzen auf Services umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
So könnten Sie Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()` Dekorator, der Metadaten hat, die Angular mitteilen, wo das HTML und das CSS zu finden sind.
Eine typische Komponente ist wie folgt:

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
Sie verwenden einen Selektor wie reguläre HTML-Tags, indem Sie ihn in andere Templates einfügen, z.B. `<app-item></app-item>`.
Wenn ein Selektor in einem Template ist, rendert der Browser das Template dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch die Erstellung von zwei Komponenten und die Verwendung einer Komponente innerhalb der anderen.

> [!NOTE]
> Der Name der obigen Komponente ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, einfach weil eine Komponente nichts anderes als eine Klasse ist, die durch einen TypeScript-Dekorator ergänzt wird.

Das Komponentenmodell von Angular bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten erleichtern auch das Unit-Testen Ihrer Anwendung und können die allgemeine Lesbarkeit Ihres Codes verbessern.

### Das HTML-Template

Jede Komponente hat ein HTML-Template, das erklärt, wie diese Komponente gerendert wird.
Sie können dieses Template entweder inline oder nach Dateipfad definieren.

Um auf eine externe HTML-Datei zu verweisen, verwenden Sie die `templateUrl` Eigenschaft:

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}
```

Um HTML inline zu schreiben, verwenden Sie die `template` Eigenschaft und schreiben Sie Ihr HTML innerhalb von Backticks:

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
Eine Verwendung dieser Funktion ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern instruieren Angular, den Inhalt innerhalb dieser zu interpolieren.
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

Eine Komponente kann globale Stile aus der `styles.css` Datei der Anwendung erben und diese mit ihren eigenen Stilen ergänzen oder überschreiben.
Sie können komponentenspezifische Stile direkt im `@Component()` Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Stile direkt in den Komponentendekorator aufzunehmen, verwenden Sie die `styles` Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typischerweise verwendet eine Komponente Stile in einer separaten Datei.
Sie können die `styleUrl` Eigenschaft mit dem Pfad zur CSS-Datei als Zeichenfolge oder `styleUrls` mit einem Array von Zeichenfolgen verwenden, wenn es mehrere CSS-Stylesheets gibt, die Sie einbeziehen möchten:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

Mit komponentenspezifischen Stilen können Sie Ihre CSS so organisieren, dass sie leicht wartbar und portabel sind.

### Standalone-Komponenten

Es wird empfohlen, [Komponenten eigenständig zu machen](https://angular.dev/guide/components/importing#standalone-components), es sei denn, ein Projekt nutzt bereits [NgModules](https://angular.dev/guide/ngmodules) (Angular-Module), um den Code zu organisieren.
Dieses Tutorial verwendet [eigenständige Komponenten](https://angular.dev/guide/components/importing#standalone-components), die einfacher zu starten sind.

Es ist üblich, [`CommonModule`](https://angular.dev/api/common/CommonModule) zu importieren, damit Ihre Komponente gebräuchliche [Direktiven](https://angular.dev/guide/directives) und [Pipes](https://angular.dev/guide/pipes) nutzen kann.

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

Das war Ihre erste Einführung in Angular. An diesem Punkt sollten Sie bereit sein, eine Angular-App zu bauen, und haben ein grundlegendes Verständnis davon, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und beginnen, die Struktur unserer To-Do-Listen-Anwendung aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
