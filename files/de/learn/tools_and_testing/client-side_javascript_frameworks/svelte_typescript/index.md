---
title: TypeScript-Unterstützung in Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir Svelte Stores kennengelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Web Storage zu speichern. Wir haben auch die Übergangsdirektive verwendet, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Jetzt werden wir lernen, wie TypeScript in Svelte-Anwendungen verwendet wird. Zunächst werden wir verstehen, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die TypeScript-Funktionen vollständig zu nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie zumindest mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node.js und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, wie Sie TypeScript beim Entwickeln von Svelte-Anwendungen konfigurieren und verwenden können.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und die Umsetzung in TypeScript vollständig optional ist. Darüber gibt es unterschiedliche Meinungen, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile der Verwendung von TypeScript sprechen. Auch wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel für Sie nützlich sein, um zu lernen, was es zu bieten hat, und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie überhaupt kein Interesse an TypeScript haben, können Sie zum nächsten Kapitel übergehen, in dem wir uns verschiedene Optionen für die Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen.

## Machen Sie mit uns die Umsetzung

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist [TypeScript-Unterstützung im REPL bisher nicht verfügbar](https://github.com/sveltejs/sites/issues/156).

## TypeScript: Optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generika bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung bieten können, um häufige Fehler zu erkennen, während Sie den Code schreiben.

Das Beste daran ist, dass JavaScript-Code gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen und sie werden einfach funktionieren.

Unser TypeScript-Code kann überall ausgeführt werden, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code in Vanilla-JavaScript. Das bedeutet, dass es den TypeScript-Code analysiert und den entsprechenden Vanilla-JavaScript-Code erzeugt, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie einen Blick auf den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) werfen.

Die Unterstützung von TypeScript war Sveltes am meisten angeforderte Funktion seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Mitwirkenden, haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereitgestellt, die getestet werden kann. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Früher erkannte Bugs: Der Compiler überprüft Typen zur Kompilierungszeit und bietet Fehlermeldungen.
- Lesbarkeit: Statische Typisierung gibt dem Code mehr Struktur, macht ihn selbstdokumentierend und lesbarer.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichereres Refactoring: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Ihnen beim Refactoring großer Codebereiche zu helfen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionalitäten zu nutzen, selbst ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen in altes JavaScript und ermöglicht es Ihnen, sie zu verwenden, selbst auf Benutzer-Agenten, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierungszeit überprüft und werden aus dem generierten Code entfernt.
- Hohe Lernkurve: Obwohl TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine erhebliche Lernkurve, insbesondere wenn Sie keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Selbst wenn Typen mehrere Bugs abfangen können, ist TypeScript kein wahrer Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generika kann zu übertrieben konstruierten Codebasen führen.

Es scheint einen breiten Konsens darüber zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, bei denen viele Entwickler am selben Code arbeiten. Und es wird tatsächlich von mehreren groß angelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Trotzdem ziehen es einige Entwickler vor, es sogar für kleine Projekte wie das, das wir entwickeln, zu verwenden.

Am Ende liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Anhaltspunkte zu geben, damit Sie sich darüber Gedanken machen können.

## Ein Svelte TypeScript-Projekt von Grund auf neu erstellen

Sie können ein neues Svelte TypeScript-Projekt mit der [Standardvorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starterprojekt, das TypeScript-Unterstützung enthält, die Sie dann nach Belieben ändern können.

Dann müssen Sie npm mitteilen, dass es die Abhängigkeiten herunterladen und das Projekt im Entwicklungsmodus starten soll, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzufügen

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diese Anweisungen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project) befolgen. Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen Ordner `scripts` in Ihrem Projektstammverzeichnis herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um mit der Portierung unserer Anwendung auf TypeScript zu beginnen.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie mit der Portierung auf TypeScript beginnen.

Gehen Sie in das Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

```bash
npx degit sveltejs/template/scripts scripts       # download script file to a scripts folder

node scripts/setupTypeScript.js                   # run it
# Converted to TypeScript.
```

Sie müssen Ihren Abhängigkeitsmanager erneut ausführen, um loszulegen.

```bash
npm install                                       # download new dependencies

npm run dev                                       # start the app in development mode
```

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript konvertieren möchten. Nehmen Sie jedoch zur Kenntnis, dass die Svelte-Community die Svelte-TypeScript-Unterstützung ständig verbessert, sodass Sie `npm update` regelmäßig ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Falls Sie Probleme haben, mit TypeScript innerhalb einer Svelte-Anwendung zu arbeiten, schauen Sie sich diese [Fehlerbehebungs-/FAQ-Sektion über die TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq) an.

Wie bereits erwähnt, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Modifikationen läuft. Derzeit werden Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausführen, ohne die Vorteile der von TypeScript bereitgestellten Funktionen zu nutzen. Sie können nun anfangen, Typen schrittweise hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es von einer Svelte-Komponente aus verwenden, indem Sie einfach eine `<script lang='ts'>` am Anfang des Skript-Bereichs hinzufügen. Um es in regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` in `.ts`. Sie müssen auch alle entsprechenden `import`-Anweisungen aktualisieren, um die `.ts`-Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler auslösen, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden. Wenn Sie also eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Weitere Informationen finden Sie im Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) des TypeScript-Handbuchs.

> [!NOTE]
> Die Verwendung von TypeScript in Komponentenvolllzugabschnitten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Während Sie JavaScript aus der Markup-Sektion verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Abschnitt verwenden.
> TypeScript in Komponentenvolllzug ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript stellt Code-Editoren und IDEs viele Informationen zur Verfügung, um ihnen eine angenehmere Entwicklungserfahrung zu bieten.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen schnellen Test durchzuführen und zu sehen, wie wir Hinweise zur Autovervollständigung und Typüberprüfung erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie nicht VS Code verwenden möchten, bieten wir etwas später auch Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung von der Befehlszeile aus an.

Es wird daran gearbeitet, TypeScript in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die vollständigste Unterstützung ist derzeit im [Svelte für VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refactoring, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen an. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich innerhalb der VS Code-Anwendung, geben Sie von der Wurzel Ihres Projektordners `code .` (der Punkt am Ende sagt VS Code, dass es den aktuellen Ordner öffnen soll) ein, um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen zur Installation gibt.

![Dialogfeld sagt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zur Installation oder Anzeigen der Liste](01-vscode-extension-recommendations.png)

Ein Klick auf _Alles installieren_ wird Svelte für VS Code installieren.

![Svelte für VS Code-Erweiterungsinformationen](02-svelte-for-vscode.png)

Wir können auch sehen, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code Screenshot zeigt an, dass wenn Sie über eine Komponente schweben, erhalten Sie Hinweise](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir erhalten auch die Typüberprüfung kostenlos. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (zum Beispiel ein Tippfehler wie `traget` anstelle von `target`), wird TypeScript reklamieren:

![Typüberprüfung in VS Code - App-Objekt hat eine unbekannte Eigenschaft traget erhalten](04-vscode-type-checking-in-main-ts.png)

Im `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das Attribut `lang="ts"` zum `<script>`-Tag hinzugefügt. Außerdem werden wir dank der Typinferenz in vielen Fällen nicht einmal die Typen angeben müssen, um Codeunterstützung zu erhalten. Zum Beispiel, wenn Sie anfangen, eine `ms`-Eigenschaft dem `Alert`-Komponentenanruf hinzuzufügen, wird TypeScript von dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Code-Hinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es darüber Beschwerden erheben:

![Typüberprüfung in VS Code - der ms-Variable wurde ein nicht-numerischer Wert zugewiesen](06-vscode-type-checking-in-components.png)

Die Anwendungsvorlage hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden und die über die Befehlszeile laufen, wodurch es ziemlich nützlich ist, wenn es in einer kontinuierlichen Integrations-Pipeline (CI) ausgeführt wird. Starten Sie einfach `npm run check`, um ungenutztes CSS zu überprüfen und A11y-Hinweise zurückzugeben sowie TypeScript-Kompilierungsfehler zu melden.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), erhalten Sie den folgenden Fehler:

![Check-Befehl wird innerhalb von VS Code ausgeführt, zeigt Typfehler, ms-Variable sollte eine Zahl sein](07-vscode-svelte-check.png)

Noch besser, wenn Sie es aus dem integrierten VS Code-Terminal ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), führt das Klicken <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> auf den Dateinamen Sie zu der Zeile, die den Fehler enthält.

Sie können das `check`-Skript auch im Beobachtungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript jedes Mal ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, damit es weiterhin Fehler melden kann, ohne die übrige Terminalnutzung zu stören.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Möglichkeit, Typen nur anhand ihrer Mitglieder zu vergleichen, selbst wenn Sie den Typ nicht explizit definieren.

Wir werden einen `TodoType`-Typ definieren, um zu sehen, wie TypeScript sicherstellt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell mit diesem kompatibel ist.

1. Erstellen Sie im `src`-Ordner einen `types`-Ordner.
2. Fügen Sie eine `todo.type.ts`-Datei darin hinzu.
3. Geben Sie `todo.type.ts` den folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Die Svelte-Vorlage verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie die `export`/`import`-Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Überprüfen Sie [diesen Abschnitt des Fehlerbehebungs-Leitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für weitere Informationen.

4. Jetzt werden wir `TodoType` aus unserer `Todo.svelte`-Komponente verwenden. Fügen Sie zuerst `lang="ts"` zu unserem `<script>`-Tag hinzu.
5. Importieren Sie den Typ und verwenden Sie ihn, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die `export let todo`-Zeile durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Nun werden wir aus `Todos.svelte` eine `Todo`-Komponente mit einem literalen Objekt als Parameter vor dem Aufruf der `MoreActions`-Komponente instanziieren, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit bekannt ist, dass die Typüberprüfung, die wir spezifiziert haben, verwendet werden muss.

   Wir erhalten folgenden Fehler:

   ![Typfehler in VS Code, Todo Type Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte erstellen.

Jetzt werden wir diese Änderungen rückgängig machen, um mit der Portierung unserer Anwendung auf TypeScript zu beginnen, damit wir nicht mit all den Prüfwarnungen belästigt werden.

1. Entfernen Sie die fehlerhafte To-Do und das `lang='ts'` Attribut aus der Datei `Todos.svelte`.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'`-Attribut aus `Todo.svelte`.

Wir werden uns später darum kümmern.

## Portierung unserer To-Do-Liste App auf TypeScript

Jetzt sind wir bereit, mit der Portierung unserer To-Do-Liste-Anwendung zu beginnen, um alle Funktionen von TypeScript auszunutzen.

Lassen Sie uns zuerst das Check-Skript im Beobachtungsmodus im Projektstamm ausführen:

```bash
npm run check -- --watch
```

Dies sollte so etwas ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass ein einfacher Weg, um mit der Portierung einer Svelte-Komponente zu beginnen, wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, einfach `lang='ts'` am Anfang Ihrer Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen:

![VS Code Screenshot zeigt an, dass wenn Sie lang='ts' zu einer Komponente hinzufügen, erhalten Sie dreipunktige Hinweise](09-vscode-alert-hints.png)

### Alert.svelte

Lassen Sie uns mit unserer `Alert.svelte`-Komponente beginnen.

1. Fügen Sie `lang="ts"` zu Ihrer `Alert.svelte`-Komponenten `<script>`-Tag hinzu. Sie werden einige Warnungen in der Ausgabe des `check`-Skripts sehen:

   ```bash
   npm run check -- --watch
   ```

   ```plain
   > svelte-check "--watch"

   ./svelte-todo-typescript
   Getting Svelte diagnostics...
   ====================================

   ./svelte-todo-typescript/src/components/Alert.svelte:8:7
   Warn: Variable 'visible' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     let visible

   ./svelte-todo-typescript/src/components/Alert.svelte:9:7
   Warn: Variable 'timeout' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     let timeout

   ./svelte-todo-typescript/src/components/Alert.svelte:11:28
   Warn: Parameter 'message' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
   Change = (message, ms) => {

   ./svelte-todo-typescript/src/components/Alert.svelte:11:37
   Warn: Parameter 'ms' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
   (message, ms) => {
   ```

2. Sie können diese beheben, indem Sie die entsprechenden Typen angeben, wie folgt:

   ```ts
   export let ms = 3000

     let visible: boolean
     let timeout: number

     const onMessageChange = (message: string, ms: number) => {
       clearTimeout(timeout)
       if (!message) {               // hide Alert if message is empty
   ```

   > [!NOTE]
   > Es ist nicht nötig, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Jetzt werden wir dasselbe für die `MoreActions.svelte`-Komponente tun.

1. Fügen Sie das Attribut `lang='ts'` wie zuvor hinzu. TypeScript wird uns bezüglich der `todos`-Eigenschaft und der `t`-Variablen im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den bereits definierten `TodoType` verwenden, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die `export let todos`-Zeile durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Nun kann TypeScript ableiten, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Dennoch, wenn wir denken, dass es unseren Code leichter lesbar macht, könnten wir es so angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Die meiste Zeit wird TypeScript den reaktiven Variablentyp korrekt ableiten, aber manchmal können Sie einen "implicitly has an 'any' type"-Fehler erhalten, wenn Sie mit reaktiven Zuordnungen arbeiten. In diesen Fällen können Sie die getypte Variable in einer anderen Anweisung deklarieren, wie folgt:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ nicht in der reaktiven Zuordnung selbst angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen lesen Sie [Wie gebe ich reaktive Zuordnungen ein? / Ich erhalte einen "implicitly has type 'any'-Fehler"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Nun werden wir uns um die `FilterButton`-Komponente kümmern.

1. Fügen Sie das Attribut `lang='ts'` dem `<script>`-Tag wie üblich hinzu. Sie werden feststellen, dass keine Warnungen vorhanden sind — TypeScript leitet den Typ der Filtervariable aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Daher können wir TypeScript darüber informieren, indem wir ein `Filter`-Enum erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Nun werden wir dies von der `FilterButton`-Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch folgenden:

   ```svelte
   <!-- components/FilterButton.svelte -->
   <script lang="ts">
     import { Filter } from "../types/filter.enum";

     export let filter: Filter = Filter.ALL;
   </script>

   <div class="filters btn-group stack-exception">
     <button class="btn toggle-btn" class:btn__primary={filter === Filter.ALL} aria-pressed={filter === Filter.ALL} on:click={()=> filter = Filter.ALL} >
       <span class="visually-hidden">Show</span>
       <span>All</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === Filter.ACTIVE} aria-pressed={filter === Filter.ACTIVE} on:click={()=> filter = Filter.ACTIVE} >
       <span class="visually-hidden">Show</span>
       <span>Active</span>
       <span class="visually-hidden">tasks</span>
     </button>
     <button class="btn toggle-btn" class:btn__primary={filter === Filter.COMPLETED} aria-pressed={filter === Filter.COMPLETED} on:click={()=> filter = Filter.COMPLETED} >
       <span class="visually-hidden">Show</span>
       <span>Completed</span>
       <span class="visually-hidden">tasks</span>
     </button>
   </div>
   ```

Hier importieren wir einfach das `Filter`-Enum und verwenden es, anstatt der zuvor verwendeten Zeichenkettenwerte.

### Todos.svelte

Wir werden das `Filter`-Enum auch in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst das Attribut `lang='ts'` hinzu, wie zuvor.
2. Importieren Sie das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren vorhandenen Anweisungen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt werden wir es verwenden, wann immer wir auf den aktuellen Filter verweisen. Ersetzen Sie Ihre zwei Filter-bezogenen Blöcke mit folgenden:

   ```ts
   let filter: Filter = Filter.ALL;
   const filterTodos = (filter: Filter, todos) =>
     filter === Filter.ACTIVE
       ? todos.filter((t) => !t.completed)
       : filter === Filter.COMPLETED
         ? todos.filter((t) => t.completed)
         : todos;

   $: {
     if (filter === Filter.ALL) {
       $alert = "Browsing all todos";
     } else if (filter === Filter.ACTIVE) {
       $alert = "Browsing active todos";
     } else if (filter === Filter.COMPLETED) {
       $alert = "Browsing completed todos";
     }
   }
   ```

4. `check` wird uns immer noch einige Warnungen von `Todos.svelte` geben. Lassen Sie uns sie beheben.

   Beginnen Sie, indem Sie den `TodoType` importieren und TypeScript mitteilen, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch folgende zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes werden wir alle fehlenden Typen angeben. Die Variable `todosStatus`, die wir verwendet haben, um programmatisch auf die von der `TodosStatus`-Komponente bereitgestellten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jeder `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>`-Abschnitt so, dass er wie folgt aussieht:

   ```ts
   import FilterButton from "./FilterButton.svelte";
   import Todo from "./Todo.svelte";
   import MoreActions from "./MoreActions.svelte";
   import NewTodo from "./NewTodo.svelte";
   import TodosStatus from "./TodosStatus.svelte";
   import { alert } from "../stores";

   import { Filter } from "../types/filter.enum";

   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];

   let todosStatus: TodosStatus; // reference to TodosStatus instance

   $: newTodoId =
     todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

   function addTodo(name: string) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' has been added`;
   }

   function removeTodo(todo: TodoType) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
     $alert = `Todo '${todo.name}' has been deleted`;
   }

   function updateTodo(todo: TodoType) {
     const i = todos.findIndex((t) => t.id === todo.id);
     if (todos[i].name !== todo.name)
       $alert = `todo '${todos[i].name}' has been renamed to '${todo.name}'`;
     if (todos[i].completed !== todo.completed)
       $alert = `todo '${todos[i].name}' marked as ${
         todo.completed ? "completed" : "active"
       }`;
     todos[i] = { ...todos[i], ...todo };
   }

   let filter: Filter = Filter.ALL;
   const filterTodos = (filter: Filter, todos: TodoType[]) =>
     filter === Filter.ACTIVE
       ? todos.filter((t) => !t.completed)
       : filter === Filter.COMPLETED
         ? todos.filter((t) => t.completed)
         : todos;

   $: {
     if (filter === Filter.ALL) {
       $alert = "Browsing all todos";
     } else if (filter === Filter.ACTIVE) {
       $alert = "Browsing active todos";
     } else if (filter === Filter.COMPLETED) {
       $alert = "Browsing completed todos";
     }
   }

   const checkAllTodos = (completed: boolean) => {
     todos = todos.map((t) => ({ ...t, completed }));
     $alert = `${completed ? "Checked" : "Unchecked"} ${todos.length} todos`;
   };
   const removeCompletedTodos = () => {
     $alert = `Removed ${todos.filter((t) => t.completed).length} todos`;
     todos = todos.filter((t) => !t.completed);
   };
   ```

### TodosStatus.svelte

Wir stoßen auf die folgenden Fehler im Zusammenhang mit der Übergabe von `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`-)Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Der Grund dafür ist, dass die `todos`-Eigenschaft in der `TodosStatus`-Komponente keinen Standardwert hat, sodass TypeScript abgeleitet hat, dass sie von Typ `undefined` sein sollte, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie es uns beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das Attribut `lang='ts'` hinzu.
2. Importieren Sie dann den `TodoType` und deklarieren Sie die `todos`-Eigenschaft als Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir werden auch den `headingEl`, den wir verwendet haben, um an das Überschrift-Tag zu binden, als `HTMLElement` spezifizieren. Aktualisieren Sie die `let headingEl`-Zeile mit folgender:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler festgestellt haben, der darauf hinweist, dass wir das `tabindex`-Attribut setzen. Das liegt daran, dass TypeScript den `<h2>`-Element typüberprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis innerhalb von VS Code, tabindex erwartet einen Typ von number, nicht string](10-vscode-tabindex-hint.png)

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, wie folgt:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es inkorrekt einer Zeichenkettenvariable zuweisen.

### NewTodo.svelte

Als nächstes werden wir uns um `NewTodo.svelte` kümmern.

1. Fügen Sie wie üblich das Attribut `lang='ts'` hinzu.
2. Die Warnung wird uns darauf hinweisen, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement` wie folgt:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt in dieser Datei müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie ihre Definition wie folgt:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` auslöst, durch den Aufruf der `Todo.svelte`-Komponente verursacht. Lassen Sie uns diese beheben.

1. Öffnen Sie die Datei `Todo.svelte` und fügen Sie das Attribut `lang='ts'` hinzu.
2. Lassen Sie uns den `TodoType` importieren und den Typ der `todo`-Eigenschaft festlegen. Ersetzen Sie die `export let todo`-Zeile durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der `update()`-Funktion, der `updatedTodo`-Variable zu definieren. Dies kann ein wenig knifflig sein, weil `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es sich nicht um ein vollständiges `todo` handelt — es enthält nur einen Teil der Eigenschaften eines `todo`.

   Für diese Art von Fällen stellt TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html) bereit, um es einfacher zu machen, diese häufigen Transformationen anzuwenden. Was wir gerade benötigen, ist der `Partial<T>`-Utility, der es uns ermöglicht, alle Teilmengen eines gegebenen Typs darzustellen. Der Partial-Utility gibt einen neuen Typ basierend auf dem Typ `T` zurück, wobei jede Eigenschaft von `T` optional ist.

   Wir werden es in der `update()`-Funktion verwenden — aktualisieren Sie Ihre wie folgt:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit teilen wir TypeScript mit, dass die `updatedTodo`-Variable eine Teilmenge der `TodoType`-Eigenschaften enthält.

4. Nun sagt uns svelte-check, dass wir den Typ der Parameter unserer Aktionsfunktion definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die `node`-Variable als `HTMLElement`-Typ definieren. Ersetzen Sie in den beiden angegebenen Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die Datei `actions.js`.

1. Benennen Sie es in `actions.ts` um und geben Sie den Typ des node-Parameters an. Es sollte so aussehen:

   ```ts
   // actions.ts
   export function selectOnFocus(node: HTMLInputElement) {
     if (node && typeof node.select === "function") {
       // make sure node is defined and has a select() method
       const onFocus = () => node.select(); // event handler
       node.addEventListener("focus", onFocus); // when node gets focus call onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // this will be executed when the node is removed from the DOM
       };
     }
   }
   ```

2. Aktualisieren Sie nun `Todo.svelte` und `NewTodo.svelte`, wo wir die Datei actions importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht einschließen. In jedem Fall sollte es so enden:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores in TypeScript

Jetzt müssen wir die Dateien `stores.js` und `localStore.js` nach TypeScript migrieren.

Tipp: das Skript `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) Tool verwendet, überprüft nur die `.svelte` Dateien unserer Anwendung. Wenn Sie auch die `.ts` Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, was dem TypeScript-Compiler mitteilt, nach Fehlern zu suchen, ohne die `.js` Ausgabedateien zu generieren. Sie könnten sogar ein Skript in Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays auf `TodoType[]`. So sehen die Inhalte aus:

   ```ts
   // stores.ts
   import { writable } from "svelte/store";
   import { localStore } from "./localStore.js";
   import type { TodoType } from "./types/todo.type";

   export const alert = writable("Welcome to the To-Do list app!");

   const initialTodos: TodoType[] = [
     { id: 1, name: "Visit MDN web docs", completed: true },
     { id: 2, name: "Complete the Svelte Tutorial", completed: false },
   ];

   export const todos = localStore("mdn-svelte-todo", initialTodos);
   ```

3. Denken Sie daran, die `import`-Anweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Entfernen Sie einfach die `.js`-Erweiterung, so:

   ```js
   import { todos } from "../stores";
   ```

Jetzt weiter mit `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` so:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie mit der Umbenennung der Datei in `localStore.ts`.
2. TypeScript sagt uns, dass wir den Typ der `key`, `initial` und `value`-Variablen angeben sollen. Der erste ist einfach: der Schlüssel unseres lokalen Webspeichers sollte ein String sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das mit der Methode [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in eine gültige JSON-Zeichenkette konvertiert werden kann, das heißt, jedes JavaScript-Objekt mit ein paar Einschränkungen: zum Beispiel, `undefined`, Funktionen und Symbole sind keine gültigen JSON-Werte.

   Also werden wir den Typ `JsonValue` erstellen, um diese Bedingungen anzugeben.

   Erstellen Sie die Datei `json.type.ts` im `types`-Ordner.

3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export type JsonValue =
     | string
     | number
     | boolean
     | null
     | JsonValue[]
     | { [key: string]: JsonValue };
   ```

   Der `|`-Operator lässt uns Variablen deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte ein String, eine Zahl, ein Boolean usw. sein. In diesem Fall nutzen wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` haben kann und auch ein Objekt mit Eigenschaften vom Typ `JsonValue`.

4. Wir werden unseren `JsonValue`-Typ importieren und entsprechend verwenden. Aktualisieren Sie Ihre `localStore.ts`-Datei so:

   ```ts
   // localStore.ts
   import { writable } from "svelte/store";

   import type { JsonValue } from "./types/json.type";

   export const localStore = (key: string, initial: JsonValue) => {
     // receives the key of the local storage and an initial value

     const toString = (value: JsonValue) => JSON.stringify(value, null, 2); // helper function
     const toObj = JSON.parse; // helper function

     if (localStorage.getItem(key) === null) {
       // item not present in local storage
       localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
     }

     const saved = toObj(localStorage.getItem(key)); // convert to object

     const { subscribe, set, update } = writable(saved); // create the underlying writable store

     return {
       subscribe,
       set: (value: JsonValue) => {
         localStorage.setItem(key, toString(value)); // save also to local storage as a string
         return set(value);
       },
       update,
     };
   };
   ```

Jetzt, wenn wir versuchen, einen `localStore` mit etwas zu erstellen, das nicht mit `JSON.stringify()` in JSON konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` darüber beschweren:

![VS Code zeigt einen Fehler beim Verwenden unseres Stores an – es schlägt fehl beim Versuch, einen Local Storage Wert auf etwas inkompatibles mit JSON stringify zu setzen](11-vscode-invalid-store.png)

Und das Beste daran ist, es wird sogar mit der [`$store`-Automatikabonnierungs-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktionieren. Wenn wir versuchen, einen ungültigen Wert in unser `todos`-Store mit der `$store`-Syntax zu speichern, so:

```svelte
<!-- App.svelte -->
<script lang="ts">
  import Todos from "./components/Todos.svelte";
  import Alert from "./components/Alert.svelte";

  import { todos } from "./stores";

  // this is invalid, the content cannot be converted to JSON using JSON.stringify
  $todos = { handler: () => {} };
</script>
```

Das Check-Skript wird den folgenden Fehler melden:

```bash
> npm run check

Getting Svelte diagnostics...
====================================

./svelte-todo-typescript/src/App.svelte:8:12
Error: Argument of type '{ handler: () => void; }' is not assignable to parameter of type 'JsonValue'.
  Types of property 'handler' are incompatible.
    Type '() => void' is not assignable to type 'JsonValue'.
      Type '() => void' is not assignable to type '{ [key: string]: JsonValue; }'.
        Index signature is missing in type '() => void'. (ts)
 $todos = { handler: () => {} }
```

Dies ist ein weiteres Beispiel dafür, wie das Angeben von Typen unseren Code robuster machen und uns helfen kann, mehr Bugs zu erkennen, bevor sie in der Produktion auftreten.

Und das war's. Wir haben unsere gesamte Anwendung so konvertiert, dass sie TypeScript verwendet.

## Absichern unserer Stores mit Generika

Unsere Stores wurden bereits nach TypeScript portiert, aber wir können es besser machen. Wir sollten keinen beliebigen Wert speichern müssen — wir wissen, dass der Alarm-Store String-Nachrichten enthalten soll und der To-Dos-Store sollte ein Array von `TodoType` enthalten, usw. Wir können TypeScript verwenden, um dies mit [TypeScript-Generika](https://www.typescriptlang.org/docs/handbook/generics.html) durchzusetzen. Lassen Sie uns mehr darüber erfahren.

### Verständnis der TypeScript Generika

Generika ermöglichen es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen und nicht nur einem Typ arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: sie sind innerhalb von spitzen Klammern angegeben und werden konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen erlauben es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein schnelles Beispiel sehen, eine einfache `Stack`-Klasse, die es uns ermöglicht, Elemente zu versuchen und zurückzugeben, wie dies:

```ts
export class Stack {
  private elements = [];

  push = (element) => this.elements.push(element);

  pop() {
    if (this.elements.length === 0) throw new Error("The stack is empty!");
    return this.elements.pop();
  }
}
```

In diesem Fall ist `elements` ein Array vom Typ `any`, und dementsprechend empfangen und geben die Methoden `push()` und `pop()` eine Variable vom Typ `any` zurück. Daher ist es völlig gültig, Folgendes zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was ist, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` arbeiten würde? Wir könnten Folgendes tun:

```ts
export class StringStack {
  private elements: string[] = [];

  push = (element: string) => this.elements.push(element);

  pop(): string {
    if (this.elements.length === 0) throw new Error("The stack is empty!");
    return this.elements.pop();
  }
}
```

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten möchten, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir mit einem Stack von Typen umgehen, die wir noch nicht kennen, und die vom Verbraucher definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generika verwenden.

Dies ist unsere `Stack`-Klasse, die mit Generika neu implementiert wurde:

```ts
export class Stack<T> {
  private elements: T[] = [];

  push = (element: T): number => this.elements.push(element);

  pop(): T {
    if (this.elements.length === 0) throw new Error("The stack is empty!");
    return this.elements.pop();
  }
}
```

Wir definieren einen generischen Typ `T` und verwenden ihn dann so, wie wir normalerweise einen spezifischen Typ verwenden würden. Jetzt sind Elemente ein Array vom Typ `T`, und `push()` und `pop()` nehmen und geben beide eine Variable vom Typ `T` zurück.

So würden wir unsere generische `Stack`-Klasse verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann und wird einen Fehler ausgeben, wenn wir versuchen, etwas anderes zu versuchen:

![Das Argument vom Typ hello ist nicht dem Parameter vom Typ number zuzuordnen](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen anhand ihrer Verwendung ableiten. Generika unterstützen auch Standardwerte und Einschränkungen.

Generika sind ein leistungsstarkes Feature, das es unserem Code ermöglicht, sich von den spezifischen Typen zu lösen, die verwendet werden, wodurch es wiederverwendbarer und allgemeiner wird, ohne auf Typsicherheit zu verzichten. Um mehr darüber zu erfahren, schauen Sie sich die [TypeScript-Einführung in Generika](https://www.typescriptlang.org/docs/handbook/generics.html) an.

### Verwenden von Svelte Stores mit Generika

Svelte Stores unterstützen Generika von Haus aus. Und dank der generischen Typableitung können wir davon profitieren, ohne überhaupt unseren Code anzufassen.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ in unser `$alert`-Store assignieren, erhalten Sie den folgenden Fehler:

![Das Argument vom Typ 9999 ist dem Parameter vom Typ string nicht zuzuordnen](13-vscode-generic-alert-error.png)

Das liegt daran, dass, als wir unser Alarm-Store in der `stores.ts`-Datei definiert haben:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript den generischen Typ als `string` abgeleitet hat. Wenn wir darüber explizit sein wollten, könnten wir Folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Nun werden wir unser `localStore` so anpassen, dass es Generika unterstützt. Denken Sie daran, dass wir den `JsonValue`-Typ definiert haben, um die Verwendung unseres `localStore`-Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` persistiert werden können. Jetzt wollen wir, dass die `localStore`-Verbraucher in der Lage sind, den Datentyp zu spezifizieren, der persistiert werden soll, aber anstatt mit einem beliebigen Typ zu arbeiten, müssen sie mit dem `JsonValue`-Typ kompatibel sein. Wir werden diese Einschränkung mit einem generischen Zwang festlegen, wie folgt:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und spezifizieren, dass dieser mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den Typ `T` entsprechend.

Unsere `localStore.ts`-Datei wird am Ende so aussehen — überprüfen Sie den neuen Code jetzt in Ihrer Version:

```ts
// localStore.ts
import { writable } from "svelte/store";

import type { JsonValue } from "./types/json.type";

export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // receives the key of the local storage and an initial value

  const toString = (value: T) => JSON.stringify(value, null, 2); // helper function
  const toObj = JSON.parse; // helper function

  if (localStorage.getItem(key) === null) {
    // item not present in local storage
    localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
  }

  const saved = toObj(localStorage.getItem(key)); // convert to object

  const { subscribe, set, update } = writable<T>(saved); // create the underlying writable store

  return {
    subscribe,
    set: (value: T) => {
      localStorage.setItem(key, toString(value)); // save also to local storage as a string
      return set(value);
    },
    update,
  };
};
```

Und dank der generischen Typableitung weiß TypeScript bereits, dass unser `$todos` Store ein Array von `TodoType` enthalten sollte:

![Todo Type Objekt-Eigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Ein weiteres Mal, wenn wir darüber explizit sein wollten, könnten wir es in der `stores.ts`-Datei tun, zum Beispiel so:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war's für unsere kurze Tour durch die TypeScript-Generika.

## Der Code bisher

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie den Ordnerinhalt direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie wir bereits gesagt haben, ist TypeScript bisher im REPL nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Liste-Anwendung genommen und nach TypeScript portiert.

Wir haben zuerst gelernt, was TypeScript ist und welche Vorteile es uns bringen kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt zu TypeScript konvertiert — unsere To-Do-Liste App.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check` Werkzeug verwendet, um TypeScript-Probleme von der Befehlszeile aus zu inspizieren.

Im nächsten Artikel werden wir lernen, wie man unsere App kompiliert und in Produktion bereitstellt. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um Svelte weiter zu lernen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
