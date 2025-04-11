---
title: Erste Schritte mit Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist an der Zeit, sich das Angular-Framework von Google anzusehen, eine weitere beliebte Option, die Ihnen oft begegnen wird. In diesem Artikel betrachten wir, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein und untersuchen die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial zielt auf [Angular Version 18](https://angular.dev/overview) ab und wurde zuletzt im August 2024 überarbeitet (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Command Line</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine lokale Entwicklungsumgebung für Angular einrichten, eine Starter-App erstellen und die Grundlagen ihrer Funktionsweise verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, die auf [TypeScript](https://www.typescriptlang.org/) basiert. Es wird zur Erstellung von Single-Page-Webanwendungen verwendet. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zur Erstellung skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklerwerkzeugen, die Ihnen helfen, Ihren Code zu entwickeln, zu erstellen, zu testen und zu aktualisieren

Beim Erstellen von Anwendungen mit Angular nutzen Sie eine Plattform, die von Einzelentwicklerprojekten bis hin zu Unternehmensanwendungen skalierbar ist. Angular ist so konzipiert, dass das Aktualisieren so einfach wie möglich ist, sodass Sie mit minimalem Aufwand die neuesten Entwicklungen nutzen können. Am besten ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Inhaltserstellern besteht.

Bevor Sie die Angular-Plattform erkunden, sollten Sie den Angular CLI kennen. Der Angular CLI ist der schnellste, einfachste und empfohlene Weg, um Angular-Anwendungen zu entwickeln. Der Angular CLI erleichtert eine Reihe von Aufgaben. Hier sind einige Beispielbefehle, die Sie häufig verwenden werden:

| Kommando                                          | Beschreibung                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`ng build`](https://angular.dev/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                         |
| [`ng serve`](https://angular.dev/cli/serve)       | Erstellt und dient Ihre Anwendung, erneuert bei Dateiänderungen.               |
| [`ng generate`](https://angular.dev/cli/generate) | Generiert oder ändert Dateien basierend auf einem Schema.                      |
| [`ng test`](https://angular.dev/cli/test)         | Führen Sie Unit-Tests für ein gegebenes Projekt durch.                         |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Baut und bedient eine Angular-Anwendung und führt dann End-to-End-Tests durch. |

Sie werden feststellen, dass der Angular CLI ein wertvolles Werkzeug für den Aufbau Ihrer Anwendungen ist.

## Was Sie erstellen werden

Diese Tutorialreihe führt Sie durch den Aufbau einer Aufgabenlistenanwendung. Über diese Anwendung werden Sie lernen, wie Sie mit Angular Elemente verwalten, bearbeiten, hinzufügen, löschen und filtern können.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS- oder Wartungs-LTS](https://nodejs.org/en/about/previous-releases) Version von Node.js. Für Informationen zu spezifischen Versionsanforderungen siehe die [Version-Kompatibilität](https://angular.dev/reference/versions) Seite.

  Für weitere Informationen zur Installation von Node.js siehe [nodejs.org](https://nodejs.org/en/download).
  Wenn Sie sich nicht sicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm Paketmanager**

  Angular, der Angular CLI, und Angular-Anwendungen hängen von [npm-Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen und Merkmale ab.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Dieser Leitfaden verwendet die Kommandozeilenschnittstelle [npm client](https://docs.npmjs.com/cli/install/), die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob Sie den npm-Client installiert haben, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellung einer Angular-Anwendung

Sie können den Angular CLI verwenden, um Befehle in Ihrem Terminal zum Generieren, Erstellen, Testen und Bereitstellen von Angular-Anwendungen auszuführen.
Um den Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt von dem, was Sie vom CLI ausgeführt haben möchten.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App bauen möchten, und wechseln Sie im Terminal zu diesem Verzeichnis. Verwenden Sie dann den folgenden [`ng new`](https://angular.dev/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new` Befehl erstellt eine minimalistische Starter-Angular-Anwendung.
Die zusätzlichen Flags, `--routing` und `--style`, und `--ssr` definieren, wie die Navigation und die Stile in der Anwendung behandelt werden, und konfiguriert das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später im Detail.

Beim ersten Ausführen von `ng` werden Sie möglicherweise gefragt, ob Sie die Terminal-[Autovervollständigung](https://angular.dev/cli/completion) und Analysen aktivieren möchten.
Autovervollständigung ist praktisch, da beim Eingeben von `ng` Befehlen durch das Drücken von <kbd>TAB</kbd> mögliche Optionen angezeigt und Argumente automatisch vervollständigt werden.

Sie können auch entscheiden, ob Sie zulassen möchten, dass Analysen über die CLI-Nutzung an die Angular-Verwalter bei Google gesendet werden.
Um mehr über Analysen zu erfahren, lesen Sie die [Angular `ng analytics` CLI-Dokumentation](https://angular.dev/cli/analytics).

Um Ihre `todo` Anwendung auszuführen, navigieren Sie mit dem `cd` Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Navigieren Sie im Browser zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Während `ng serve` läuft, öffnen Sie einen zweiten Terminaltab oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Falls Sie zu einem beliebigen Zeitpunkt das Bedienen Ihrer Anwendung beenden möchten, drücken Sie `Ctrl+c` in dem Terminal, das den `ng serve` Befehl ausführt.

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

Wichtige Dateien, die vom CLI automatisch generiert werden, sind folgende:

1. `app.component.ts`: Auch als Klasse bekannt, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei ist auch als Template bekannt.
   Das Template bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Stile für `AppComponent`. Sie verwenden diese Datei, wenn Sie Stile definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen – dem Template, den Stilen und der Klasse.
Zum Beispiel bilden `app.component.ts`, `app.component.html` und `app.component.css` zusammen das `AppComponent`.
Diese Struktur trennt die Logik, die Ansicht und die Stile, sodass die Anwendung wartbarer und skalierbarer wird.
Auf diese Weise nutzen Sie von Anfang an Best Practices.

Der Angular CLI generiert auch eine Datei für Komponententests namens `app.component.spec.ts`, aber dieses Tutorial geht nicht auf das Testen ein, daher können Sie diese Datei ignorieren.
Wann immer Sie eine Komponente generieren, erstellt der CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen, und wir werden später ein Beispiel dafür sehen.

Um mehr über das Testen zu erfahren, siehe die [Angular Testleitfaden](https://angular.dev/guide/testing).

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript gebaut.
TypeScript ist eine Obermenge von JavaScript, das bedeutet, dass jeder gültige JavaScript-Code auch gültiger TypeScript-Code ist.
TypeScript bietet Typisierung und eine präzisere Syntax als einfaches JavaScript, was Ihnen ein Werkzeug zum Erstellen von wartbarerem Code und zur Minimierung von Fehlern an die Hand gibt.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente umfasst eine TypeScript-Klasse, die einen `@Component()` Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()` Dekorator, um Metadaten (HTML-Template und Stile) über eine Klasse anzugeben.

### Die Klasse

Die Klasse ist der Ort, an dem Sie jegliche Logik einfügen, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Event-Listener, Eigenschaften und Referenzen zu Diensten umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
Sie könnten also Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()` Dekorator, der Metadaten enthält, welche Angular mitteilen, wo sich das HTML und CSS befinden.
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

Diese Komponente heißt `ItemComponent`, und ihr Selektor ist `app-item`.
Sie verwenden einen Selektor genau wie reguläre HTML-Tags, indem Sie ihn innerhalb anderer Templates platzieren, z.B. `<app-item></app-item>`.
Wenn ein Selektor in einem Template ist, rendert der Browser das Template dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch das Erstellen von zwei Komponenten und das Verwenden einer innerhalb der anderen.

> [!NOTE]
> Der Name der Komponente oben ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind gleich, weil eine Komponente nichts anderes als eine Klasse ist, die durch einen TypeScript-Dekorator ergänzt wird.

Das Komponentenmodell von Angular bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten erleichtern auch das Unit-Testen Ihrer Anwendung und können die Lesbarkeit Ihres Codes insgesamt verbessern.

### Das HTML-Template

Jede Komponente hat ein HTML-Template, das erklärt, wie diese Komponente gerendert wird.
Sie können dieses Template entweder inline oder durch den Dateipfad definieren.

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

Um HTML inline zu schreiben, verwenden Sie die `template`-Eigenschaft und schreiben Ihr HTML innerhalb von Backticks:

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
Angular aktualisiert das gerenderte DOM automatisch, wenn sich der Zustand Ihrer Komponente ändert.
Ein Nutzen dieser Funktion ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern instruieren Angular, die darin enthaltenen Inhalte zu interpolieren.
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

Wenn die Anwendung die Komponente und ihr Template lädt, sieht der Browser folgendes:

```html
<h1>To do application</h1>
```

### Styles

Eine Komponente kann globale Stile aus der `styles.css`-Datei der Anwendung erben und diese mit eigenen Stilen erweitern oder überschreiben.
Sie können komponentenspezifische Stile direkt im `@Component()` Dekorator schreiben oder den Pfad zu einer CSS-Datei spezifizieren.

Um die Stile direkt im Komponentendekorator einzuschließen, verwenden Sie die `styles`-Eigenschaft:

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
Sie können die `styleUrl`-Eigenschaft mit dem Pfad zur CSS-Datei als String oder `styleUrls` mit einem Array von Strings verwenden, wenn es mehrere CSS-Stylesheets gibt, die Sie einbinden möchten:

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

Mit komponentenspezifischen Stilen können Sie Ihr CSS so organisieren, dass es einfach wartbar und portabel ist.

### Eigenständige Komponenten

Es wird empfohlen, [Komponenten eigenständig zu machen](https://angular.dev/guide/components/importing#standalone-components), es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.dev/guide/ngmodules) (Angular-Module), um Code zu organisieren.
Dieses Tutorial verwendet [eigenständige Komponenten](https://angular.dev/guide/components/importing#standalone-components), die einfacher zu beginnen sind.

Es ist üblich, [`CommonModule`](https://angular.dev/api/common/CommonModule) zu importieren, damit Ihre Komponente allgemeine [Direktiven](https://angular.dev/guide/directives) und [Pipes](https://angular.dev/guide/pipes) verwenden kann.

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

Das war's für Ihre erste Einführung in Angular. An diesem Punkt sollten Sie bereit sein, eine Angular-Anwendung zu erstellen und ein grundlegendes Verständnis dafür haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und damit beginnen, die Struktur unserer Aufgabenlistenanwendung aufzubauen.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
