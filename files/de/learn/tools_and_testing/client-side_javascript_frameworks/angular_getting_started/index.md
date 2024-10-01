---
title: Erste Schritte mit Angular
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, sich Googles Angular-Framework anzusehen, eine weitere beliebte Option, die Ihnen häufig begegnen wird. In diesem Artikel schauen wir uns an, was Angular zu bieten hat, installieren die Voraussetzungen und richten eine Beispiel-App ein, und werfen einen Blick auf die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial ist für [Angular Version 17](https://v17.angular.io/guide/update-to-version-17) vorgesehen und wurde zuletzt im März 2024 überarbeitet (`Angular CLI: 17.3.0`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        Kenntnisse über das
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Kommandobefehlsinterpreter</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein lokales Angular-Entwicklungsumfeld einrichten, eine Start-App erstellen und die Grundlagen ihrer Funktionsweise verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, aufgebaut auf [TypeScript](https://www.typescriptlang.org/). Es wird verwendet zur Erstellung von Single-Page-Webanwendungen. Als Plattform beinhaltet Angular:

- Ein komponentenbasiertes Framework zum Erstellen von skalierbaren Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Eine Suite von Entwicklertools, die Ihnen helfen, Ihren Code zu entwickeln, zu erstellen, zu testen und zu aktualisieren

Wenn Sie Anwendungen mit Angular erstellen, nutzen Sie eine Plattform, die von Einzelentwicklerprojekten bis hin zu Unternehmensanwendungen skalierbar ist. Angular ist so konzipiert, dass Updates so einfach wie möglich sind, sodass Sie mit minimalem Aufwand die neuesten Entwicklungen nutzen können. Am besten ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliothekautoren und Inhaltserstellern besteht.

Bevor Sie anfangen, die Angular-Plattform zu erkunden, sollten Sie den Angular CLI kennen. Der Angular CLI ist der schnellste, einfachste und empfohlene Weg, Angular-Anwendungen zu entwickeln. Der Angular CLI erleichtert viele Aufgaben. Hier sind einige Befehle, die Sie häufig verwenden werden:

| Befehl                                           | Beschreibung                                                                        |
| ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| [`ng build`](https://angular.io/cli/build)       | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                              |
| [`ng serve`](https://angular.io/cli/serve)       | Erstellt und serviert Ihre Anwendung, mit Neuaufbau bei Dateiänderungen.            |
| [`ng generate`](https://angular.io/cli/generate) | Generiert oder ändert Dateien basierend auf einem Schema.                           |
| [`ng test`](https://angular.io/cli/test)         | Führt Unit-Tests auf einem bestimmten Projekt aus.                                  |
| [`ng e2e`](https://angular.io/cli/e2e)           | Erstellt und serviert eine Angular-Anwendung und führt dann End-to-End-Tests durch. |

Sie werden feststellen, dass der Angular CLI ein wertvolles Werkzeug für die Erstellung Ihrer Anwendungen ist.

## Was Sie erstellen werden

Diese Tutorialserie führt Sie durch den Aufbau einer To-Do-Listenanwendung. Über diese Anwendung lernen Sie, wie Sie Angular verwenden, um Elemente zu verwalten, zu bearbeiten, hinzuzufügen, zu löschen und zu filtern.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS oder Wartungs-LTS](https://nodejs.org/en/about/previous-releases) Version von Node.js. Informationen zu spezifischen Versionsanforderungen finden Sie auf der Seite [Version-Kompatibilität](https://angular.io/guide/versions).

  Weitere Informationen zur Installation von Node.js finden Sie auf [nodejs.org](https://nodejs.org/en/download/package-manager).
  Wenn Sie unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm Paketmanager**

  Angular, die Angular CLI und Angular-Anwendungen hängen von [npm Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen ab.
  Um npm-Pakete herunterzuladen und zu installieren, benötigen Sie einen npm-Paketmanager.
  Dieser Leitfaden verwendet die [npm client](https://docs.npmjs.com/cli/install/) Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob der npm-Client installiert ist, führen Sie `npm -v` in einem Terminalfenster aus.

## Erstellen einer Angular-Anwendung

Sie können den Angular CLI verwenden, um Befehle in Ihrem Terminal zum Generieren, Erstellen, Testen und Bereitstellen von Angular-Anwendungen auszuführen.
Um den Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt davon, was der CLI tun soll.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App erstellen möchten, und wechseln Sie in das Verzeichnis im Terminal. Verwenden Sie dann den folgenden [`ng new`](https://angular.io/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der `ng new` Befehl erstellt eine minimale Starter-Angular-Anwendung.
Die zusätzlichen Flags `--routing` und `--style`, sowie `--ssr` definieren, wie die Navigation und Styles in der Anwendung gehandhabt werden und konfigurieren das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später detaillierter.

Wenn Sie `ng` zum ersten Mal ausführen, werden Sie möglicherweise gefragt, ob Sie die [Autovervollständigung](https://angular.io/cli/completion) und Analysen im Terminal aktivieren möchten.
Die Autovervollständigung ist praktisch, da das Drücken von <kbd>TAB</kbd> beim Eingeben von `ng`-Befehlen mögliche Optionen anzeigt und Argumente automatisch vervollständigt.

Sie können auch entscheiden, ob Sie erlauben möchten, dass Analysen zur Nutzung des CLI an Angular-Wartungsmitarbeiter von Google gesendet werden.
Um mehr über Analysen zu erfahren, sehen Sie sich die [Angular `ng analytics` CLI-Dokumentation](https://angular.io/cli/analytics) an.

Um Ihre `todo`-Anwendung auszuführen, wechseln Sie mit dem Befehl `cd` in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Navigieren Sie im Browser zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie Änderungen an einer der Quelldateien vornehmen, lädt die Anwendung automatisch neu.

Während `ng serve` läuft, öffnen Sie eine zweite Terminal-Registerkarte oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie zu irgendeinem Zeitpunkt die Bedienung Ihrer Anwendung beenden möchten, drücken Sie im Terminal, das den Befehl `ng serve` ausführt, `Strg+c`.

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

Die wichtigsten Dateien, die der CLI automatisch generiert, sind die folgenden:

1. `app.component.ts`: Auch als Klasse bekannt, enthält die Logik für die Hauptseite der Anwendung.
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei wird auch als Vorlage (Template) bezeichnet.
   Die Vorlage bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Styles für `AppComponent`. Sie verwenden diese Datei, wenn Sie Styles definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen – die Vorlage, die Stile und die Klasse.
Zum Beispiel bilden `app.component.ts`, `app.component.html` und `app.component.css` zusammen das `AppComponent`.
Diese Struktur trennt die Logik, Ansicht und Stile so, dass die Anwendung besser wartbar und skalierbar ist.
Auf diese Weise verwenden Sie von Anfang an bewährte Praktiken.

Der Angular CLI generiert auch eine Datei für Komponententests, die `app.component.spec.ts` genannt wird, aber dieses Tutorial geht nicht auf das Testen ein, sodass Sie diese Datei ignorieren können.
Wann immer Sie eine Komponente generieren, erstellt der CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen und wir werden später ein Beispiel dafür sehen.

Um mehr über Tests zu erfahren, sehen Sie sich den [Angular-Testleitfaden](https://angular.io/guide/testing) an.

## Die Struktur einer Angular-Anwendung

Angular ist mit TypeScript aufgebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierung und eine präzisere Syntax als reines JavaScript, was Ihnen ein Werkzeug bietet, um wartbarer Code zu erstellen und Fehler zu minimieren.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente beinhaltet eine TypeScript-Klasse, die einen `@Component()`-Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()`-Dekorator, um Metadaten (HTML-Vorlage und Styles) über eine Klasse anzugeben.

### Die Klasse

Die Klasse ist, wo Sie jede Logik unterbringen, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignislistener, Eigenschaften und Verweise auf Services umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
So könnten Sie Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()`-Dekorator, der Metadaten enthält, die Angular mitteilen, wo das HTML und CSS zu finden sind.
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

Diese Komponente wird `ItemComponent` genannt, und ihr Selektor ist `app-item`.
Sie verwenden einen Selektor ebenso wie reguläre HTML-Tags, indem Sie ihn in andere Vorlagen einfügen, z.B. `<app-item></app-item>`.
Wenn ein Selektor in einer Vorlage erscheint, rendert der Browser die Vorlage dieser Komponente, wann immer eine Instanz des Selektors auftritt.
Dieses Tutorial führt Sie durch das Erstellen zweier Komponenten und die Verwendung einer innerhalb der anderen.

> [!NOTE]
> Der Name der oben genannten Komponente ist `ItemComponent`, was auch der Name der Klasse ist.
> Die Namen sind identisch, weil eine Komponente nichts anderes als eine Klasse ist, die durch einen TypeScript-Dekorator ergänzt wird.

Angulas Komponentenmodell bietet eine starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten machen Ihre Anwendung auch einfacher zu unit-testen und können die Lesbarkeit Ihres Codes insgesamt verbessern.

### Die HTML-Vorlage

Jede Komponente hat eine HTML-Vorlage, die deklariert, wie diese Komponente gerendert wird.
Sie können diese Vorlage entweder inline oder durch einen Dateipfad definieren.

Um auf eine externe HTML-Datei zu verweisen, verwenden Sie die Eigenschaft `templateUrl`:

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}
```

Um HTML inline zu schreiben, verwenden Sie die Eigenschaft `template` und schreiben Ihr HTML in Backticks:

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
Angular aktualisiert automatisch das gerenderte DOM, wenn sich der Status Ihrer Komponente ändert.
Eine Verwendung dieser Funktion ist das Einfügen von dynamischem Text, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelt geschweiften Klammern geben Angular die Anweisung, den Inhalt innerhalb der Klammern zu interpolieren.
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

Wenn die Anwendung die Komponente und ihre Vorlage lädt, sieht der Browser Folgendes:

```html
<h1>To do application</h1>
```

### Styles

Eine Komponente kann globale Styles aus der `styles.css`-Datei der Anwendung erben und diese mit ihren eigenen Styles erweitern oder überschreiben.
Sie können komponentenspezifische Styles direkt im `@Component()`-Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Styles direkt im Komponentendekorator einzubinden, verwenden Sie die Eigenschaft `styles`:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typischerweise verwendet eine Komponente Styles in einer separaten Datei mit der Eigenschaft `styleUrls`:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

Mit komponentenspezifischen Styles können Sie Ihr CSS so organisieren, dass es einfach wartbar und portabel ist.

### Selbstständige Komponenten

Es wird empfohlen, [Komponenten eigenständig zu machen](https://angular.io/guide/component-overview#creating-a-component-manually-1), es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.io/guide/ngmodules) (Angular-Module), um den Code zu organisieren.
Dieses Tutorial verwendet [selbstständige Komponenten](https://angular.io/guide/standalone-components), die einfacher zu starten sind.

Es ist üblich, [`CommonModule`](https://angular.io/api/common/CommonModule) zu importieren, damit Ihre Komponente gängige [Direktiven](https://angular.io/api/common#directives) und [Pipes](https://angular.io/api/common#pipes) verwenden kann.
Dieses Tutorial verwendet `ngFor` und `ngIf`, daher können wir sicherstellen, dass sie wie folgt verfügbar sind:

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

Das war's für Ihre erste Einführung in Angular. Zu diesem Zeitpunkt sollten Sie eingerichtet und bereit sein, eine Angular-App zu erstellen und ein grundlegendes Verständnis dafür haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und beginnen, die Struktur unserer To-Do-Listenanwendung aufzubauen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
