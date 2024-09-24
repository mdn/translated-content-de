---
title: Erste Schritte mit Angular
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Es ist nun an der Zeit, sich Googles Angular-Framework anzusehen, eine weitere beliebte Option, die Sie häufig antreffen werden. In diesem Artikel untersuchen wir, was Angular zu bieten hat, installieren die erforderlichen Voraussetzungen und richten eine Beispielanwendung ein. Außerdem betrachten wir die grundlegende Architektur von Angular.

> [!NOTE]
> Dieses Tutorial richtet sich an [Angular Version 17](https://v17.angular.io/guide/update-to-version-17) und wurde zuletzt im März 2024 überprüft (`Angular CLI: 17.3.0`).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        sowie Kenntnisse über das
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/den Befehlszeileninterpreter</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein lokales Angular-Entwicklungsumfeld einrichten, eine Starter-App erstellen und die Grundlagen ihrer Funktionsweise verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Angular?

Angular ist ein Framework und eine Entwicklungsplattform, das auf [TypeScript](https://www.typescriptlang.org/) basiert. Es wird zur Erstellung von Single-Page-Webanwendungen verwendet. Als Plattform umfasst Angular:

- Ein komponentenbasiertes Framework zum Erstellen skalierbarer Webanwendungen
- Eine Sammlung gut integrierter Bibliotheken, die eine Vielzahl von Funktionen abdecken, einschließlich Routing, Formularverwaltung, Client-Server-Kommunikation und mehr
- Ein Entwickler-Tools-Paket, das Ihnen beim Entwickeln, Erstellen, Testen und Aktualisieren Ihres Codes hilft

Wenn Sie Anwendungen mit Angular erstellen, nutzen Sie eine Plattform, die von Einzelentwicklerprojekten bis hin zu unternehmensweiten Anwendungen skalieren kann. Angular ist so konzipiert, dass das Aktualisieren so einfach wie möglich ist, sodass Sie mit minimalem Aufwand von den neuesten Entwicklungen profitieren können. Am besten ist, dass das Angular-Ökosystem aus einer vielfältigen Gruppe von über 1,7 Millionen Entwicklern, Bibliotheksautoren und Inhaltserstellern besteht.

Bevor Sie beginnen, die Angular-Plattform zu erkunden, sollten Sie die Angular CLI kennen. Die Angular CLI ist der schnellste, einfachste und empfohlene Weg, Angular-Anwendungen zu entwickeln. Die Angular CLI macht eine Reihe von Aufgaben einfach. Hier sind einige Beispielbefehle, die Sie häufig verwenden werden:

| Befehl                                         | Beschreibung                                                            |
| ---------------------------------------------- | ----------------------------------------------------------------------- |
| [`ng build`](https://angular.io/cli/build)     | Kompiliert eine Angular-App in ein Ausgabeverzeichnis.                  |
| [`ng serve`](https://angular.io/cli/serve)     | Erstellt und dient Ihre Anwendung, baut bei Dateiänderungen neu auf.    |
| [`ng generate`](https://angular.io/cli/generate) | Generiert oder ändert Dateien basierend auf einem Schema.               |
| [`ng test`](https://angular.io/cli/test)       | Führt Unit-Tests in einem gegebenen Projekt aus.                        |
| [`ng e2e`](https://angular.io/cli/e2e)         | Erstellt und dient eine Angular-Anwendung und führt dann End-to-End-Tests durch. |

Sie werden feststellen, dass die Angular CLI ein wertvolles Werkzeug zum Erstellen Ihrer Anwendungen ist.

## Was Sie erstellen werden

Diese Tutorial-Reihe führt Sie durch den Aufbau einer Aufgabenlistenanwendung. Durch diese Anwendung lernen Sie, wie Sie Angular verwenden können, um Elemente zu verwalten, zu bearbeiten, hinzuzufügen, zu löschen und zu filtern.

## Voraussetzungen

Um Angular auf Ihrem lokalen System zu installieren, benötigen Sie Folgendes:

- **Node.js**

  Angular erfordert eine [aktive LTS- oder Wartungs-LTS](https://nodejs.org/en/about/previous-releases) Version von Node.js. Informationen zu spezifischen Versionsanforderungen finden Sie auf der Seite [Version Compatibility](https://angular.io/guide/versions).

  Weitere Informationen zur Installation von Node.js finden Sie auf [nodejs.org](https://nodejs.org/en/download/package-manager).
  Wenn Sie sich unsicher sind, welche Version von Node.js auf Ihrem System läuft, führen Sie `node -v` in einem Terminalfenster aus.

- **npm Paket-Manager**

  Angular, die Angular CLI und Angular-Anwendungen hängen von [npm Paketen](https://docs.npmjs.com/getting-started/what-is-npm/) für viele Funktionen ab.
  Zum Herunterladen und Installieren von npm-Paketen benötigen Sie einen npm-Paketmanager.
  Dieser Leitfaden verwendet die [npm client](https://docs.npmjs.com/cli/install/) Kommandozeilenschnittstelle, die standardmäßig mit `Node.js` installiert wird.
  Um zu überprüfen, ob der npm-Client installiert ist, führen Sie `npm -v` in einem Terminalfenster aus.

## Eine Angular-Anwendung erstellen

Sie können die Angular CLI verwenden, um Befehle in Ihrem Terminal auszuführen, um Angular-Anwendungen zu generieren, zu bauen, zu testen und bereitzustellen.
Um die Angular CLI global zu installieren, führen Sie den folgenden Befehl in Ihrem Terminal aus:

```bash
npm install -g @angular/cli
```

Alle Angular CLI-Befehle beginnen mit `ng`, gefolgt davon, was die CLI tun soll.
Erstellen Sie ein neues Verzeichnis, in dem Sie Ihre App erstellen möchten, und wechseln Sie in das Verzeichnis im Terminal. Verwenden Sie dann den folgenden [`ng new`](https://angular.io/cli/new) Befehl, um eine neue Anwendung namens `todo` zu erstellen:

```bash
ng new todo --routing=false --style=css --ssr=false
```

Der Befehl `ng new` erstellt eine minimale Starter-Anwendung für Angular.
Die zusätzlichen Flags `--routing` und `--style` sowie `--ssr` definieren, wie die Navigation und Stile in der Anwendung behandelt werden, und konfigurieren das serverseitige Rendering.
Dieses Tutorial beschreibt diese Funktionen später ausführlicher.

Wenn Sie `ng` zum ersten Mal ausführen, werden Sie möglicherweise gefragt, ob Sie die Terminal-[Autovervollständigung](https://angular.io/cli/completion) und Analysen aktivieren möchten.
Autovervollständigung ist praktisch, da das Drücken von <kbd>TAB</kbd> beim Eingeben von `ng` Befehlen mögliche Optionen anzeigt und Argumente vervollständigt.

Sie können auch entscheiden, ob Sie zulassen möchten, dass Analysen zur CLI-Nutzung an Angular-Maintainer bei Google gesendet werden.
Um mehr über Analysen zu erfahren, siehe die [Angular `ng analytics` CLI-Dokumentation](https://angular.io/cli/analytics).

Um Ihre `todo` Anwendung auszuführen, navigieren Sie mit dem `cd` Befehl in Ihr neues Projekt und führen Sie `ng serve` aus:

```bash
cd todo
ng serve
```

Im Browser navigieren Sie zu `http://localhost:4200/`, um Ihre neue Starter-Anwendung zu sehen.
Wenn Sie eine der Quelldateien ändern, wird die Anwendung automatisch neu geladen.

Während `ng serve` läuft, öffnen Sie eine zweite Terminal-Registerkarte oder ein Terminalfenster, um Befehle auszuführen, ohne den Server zu stoppen.
Wenn Sie zu einem beliebigen Zeitpunkt das Bereitstellen Ihrer Anwendung beenden möchten, drücken Sie `Ctrl+c` im Terminal, das den `ng serve` Befehl ausführt.

## Machen Sie sich mit Ihrer Angular-Anwendung vertraut

Die Quellcode-Dateien der Anwendung, auf die sich dieses Tutorial konzentriert, befinden sich in `src/app`:

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
2. `app.component.html`: Enthält das HTML für `AppComponent`. Der Inhalt dieser Datei wird auch als das Template bezeichnet.
   Das Template bestimmt die Ansicht oder das, was Sie im Browser sehen.
3. `app.component.css`: Enthält die Stile für `AppComponent`. Sie verwenden diese Datei, wenn Sie Stile definieren möchten, die nur für eine bestimmte Komponente gelten, im Gegensatz zu Ihrer gesamten Anwendung.

Eine Komponente in Angular besteht aus drei Hauptteilen – dem Template, den Stilen und der Klasse.
Beispielsweise bilden `app.component.ts`, `app.component.html` und `app.component.css` zusammen die `AppComponent`.
Diese Struktur trennt die Logik, die Ansicht und die Stile, sodass die Anwendung besser wartbar und skalierbar ist.
Auf diese Weise verwenden Sie von Anfang an die besten Praktiken.

Die Angular CLI erstellt auch eine Datei für Komponententests, genannt `app.component.spec.ts`, aber dieses Tutorial behandelt keine Tests, daher können Sie diese Datei ignorieren.
Wann immer Sie eine Komponente generieren, erstellt die CLI diese Dateien in einem Verzeichnis mit dem von Ihnen angegebenen Namen, und wir werden später ein Beispiel dafür sehen.

Um mehr über das Testen zu erfahren, lesen Sie den [Angular Testing Guide](https://angular.io/guide/testing).

## Die Struktur einer Angular-Anwendung

Angular wird mit TypeScript gebaut.
TypeScript ist eine Obermenge von JavaScript, was bedeutet, dass jedes gültige JavaScript auch gültiges TypeScript ist.
TypeScript bietet Typisierung und eine prägnantere Syntax als reines JavaScript, was Ihnen hilft, wartbareren Code zu erstellen und Fehler zu minimieren.

Komponenten sind die Bausteine einer Angular-Anwendung.
Eine Komponente umfasst eine TypeScript-Klasse, die einen `@Component()`-Dekorator hat.

### Der Dekorator

Sie verwenden den `@Component()`-Dekorator, um Metadaten (HTML-Template und Stile) über eine Klasse anzugeben.

### Die Klasse

Die Klasse ist der Ort, an dem Sie jegliche Logik platzieren, die Ihre Komponente benötigt.
Dieser Code kann Funktionen, Ereignis-Listener, Eigenschaften und Verweise auf Dienste umfassen, um nur einige zu nennen.
Die Klasse befindet sich in einer Datei mit einem Namen wie `feature.component.ts`, wobei `feature` der Name Ihrer Komponente ist.
Sie könnten also Dateien mit Namen wie `header.component.ts`, `signup.component.ts` oder `feed.component.ts` haben.
Sie erstellen eine Komponente mit einem `@Component()`-Dekorator, der Metadaten enthält, die Angular mitteilen, wo sich das HTML und CSS befinden.
Eine typische Komponente sieht folgendermaßen aus:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  standalone: true,
  // die folgenden Metadaten geben den Speicherort der anderen Teile der Komponente an
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  // code goes here
}
```

Diese Komponente heißt `ItemComponent` und ihr Selector ist `app-item`.
Sie verwenden einen Selector genau wie reguläre HTML-Tags, indem Sie ihn in andere Templates einfügen, z.B. `<app-item></app-item>`.
Wenn ein Selector in einem Template ist, zeigt der Browser das Template dieser Komponente immer dann, wenn er auf eine Instanz des Selectors trifft.
Dieses Tutorial führt Sie durch die Erstellung von zwei Komponenten und ihre Verwendung innerhalb der anderen.

> [!NOTE]
> Der Name der obigen Komponente ist `ItemComponent`, welcher auch der Name der Klasse ist.
> Die Namen sind identisch, da eine Komponente nichts anderes als eine Klasse ist, ergänzt durch einen TypeScript-Dekorator.

Angulars Komponentenmodell bietet starke Kapselung und eine intuitive Anwendungsstruktur.
Komponenten machen Ihre Anwendung auch einfacher zu unit-testen und können die Lesbarkeit Ihres Codes insgesamt verbessern.

### Das HTML-Template

Jede Komponente hat ein HTML-Template, das angibt, wie diese Komponente gerendert wird.
Sie können dieses Template entweder inline oder über einen Dateipfad definieren.

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

Angular erweitert HTML mit zusätzlicher Syntax, die es Ihnen ermöglicht, dynamische Werte aus Ihrer Komponente einzufügen.
Angular aktualisiert den gerenderten DOM automatisch, wenn sich der Zustand Ihrer Komponente ändert.
Eine Verwendung dieser Funktion ist das Einfügen dynamischen Textes, wie im folgenden Beispiel gezeigt.

```html
<h1>\{{ title }}</h1>
```

Die doppelten geschweiften Klammern weisen Angular an, den Inhalt dazwischen zu interpolieren.
Der Wert für `title` stammt aus der Komponentes-Klasse:

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

Eine Komponente kann globale Stile aus der `styles.css`-Datei der Anwendung erben und sie mit eigenen Stilen ergänzen oder überschreiben.
Sie können komponentenspezifische Stile direkt im `@Component()`-Dekorator schreiben oder den Pfad zu einer CSS-Datei angeben.

Um die Stile direkt im Komponentendekorator einzuschließen, verwenden Sie die `styles`-Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typischerweise verwendet eine Komponente Stile in einer separaten Datei mittels der `styleUrls`-Eigenschaft:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

Mit komponentenspezifischen Stilen können Sie Ihr CSS so organisieren, dass es leicht wartbar und portabel ist.

### Standalone-Komponenten

Es wird empfohlen, [Komponenten alleine zu erstellen](https://angular.io/guide/component-overview#creating-a-component-manually-1), es sei denn, ein Projekt verwendet bereits [NgModules](https://angular.io/guide/ngmodules) (Angular-Module) zur Organisation von Code.
Dieses Tutorial verwendet [standalone Komponenten](https://angular.io/guide/standalone-components), die einfacher zu starten sind.

Es ist üblich, [`CommonModule`](https://angular.io/api/common/CommonModule) zu importieren, damit Ihre Komponente allgemeine [Direktiven](https://angular.io/api/common#directives) und [Pipes](https://angular.io/api/common#pipes) verwenden kann.
Dieses Tutorial verwendet `ngFor` und `ngIf`, daher können wir sicherstellen, dass sie verfügbar sind, indem wir Folgendes tun:

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

Das war's für Ihre erste Einführung in Angular. An diesem Punkt sollten Sie eingerichtet sein und bereit, eine Angular-Anwendung zu erstellen, und ein grundlegendes Verständnis davon haben, wie Angular funktioniert. Im nächsten Artikel werden wir dieses Wissen vertiefen und beginnen, die Struktur unserer Aufgabenlistenanwendung aufzubauen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
