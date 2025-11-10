---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir über Svelte-Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Webspeicher zu sichern. Wir haben uns auch angesehen, wie man die Übergangsrichtlinie verwendet, um Animationen auf DOM-Elemente in Svelte anzuwenden.

Jetzt werden wir lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst klären wir, was TypeScript ist und welche Vorteile es uns bringt. Danach sehen wir, wie wir unser Projekt konfigurieren müssen, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Funktionen von TypeScript vollständig auszunutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den Grundsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          sowie mit dem
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/der Befehlszeile</a
          >
          vertraut sind.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node.js und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie TypeScript beim Entwickeln von Svelte-Anwendungen konfigurieren und verwenden.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung voll funktionsfähig ist und die Portierung zu TypeScript völlig optional ist. Es gibt unterschiedliche Meinungen dazu, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile von TypeScript sprechen. Selbst wenn Sie nicht vorhaben, es zu übernehmen, wird dieser Artikel nützlich sein, um Ihnen aufzuzeigen, was es zu bieten hat, und Ihnen bei Ihrer eigenen Entscheidung zu helfen. Wenn Sie überhaupt nicht an TypeScript interessiert sind, können Sie zum nächsten Kapitel springen, in dem wir uns verschiedene Möglichkeiten zur Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen werden.

## Programmiert mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider [ist die TypeScript-Unterstützung im REPL noch nicht verfügbar](https://github.com/sveltejs/svelte.dev/issues/853).

## TypeScript: optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist ein Superset von JavaScript, das Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generika bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist die Möglichkeit, IDEs eine reichhaltigere Umgebung für das Erkennen von häufigen Fehlern beim Schreiben des Codes zu bieten.

Das Beste daran ist, dass JavaScript-Code gültiger TypeScript-Code ist; TypeScript ist ein Superset von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie werden einfach funktionieren.

Unser TypeScript-Code wird überall dort ausgeführt werden können, wo JavaScript laufen kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code in Vanilla-JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den entsprechenden Vanilla-JavaScript-Code erzeugt, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

TypeScript-Unterstützung erster Klasse ist die am meisten geforderte Funktion in Svelte seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Beitragenden, haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, die getestet werden kann. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitig erkannte Fehler: Der Compiler überprüft Typen zur Kompilierzeit und bietet Fehlermeldungen.
- Lesbarkeit: Statische Typisierung gibt dem Code mehr Struktur, macht ihn selbstdokumentierend und lesbarer.
- Reichhaltige IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Codenavigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichereres Refactoring: Typen erlauben es IDEs, mehr über Ihren Code zu wissen und Ihnen beim Refactoring großer Teile Ihrer Codebasis zu helfen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen in altes, traditionelles JavaScript, sodass Sie sie auch auf Benutzeragenten verwenden können, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur während der Kompilierung überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Obwohl TypeScript ein Superset von JavaScript ist und keine völlig neue Sprache, gibt es eine beträchtliche Lernkurve, insbesondere wenn Sie keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Auch wenn Typen helfen können, mehrere Fehler zu erkennen, ist TypeScript kein echter Ersatz für eine umfassende Suite von automatisierten Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generika kann zu übermäßig komplizierten Codebasen führen.

Es scheint einen breiten Konsens zu geben, dass TypeScript besonders gut geeignet ist für große Projekte, an denen viele Entwickler an derselben Codebasis arbeiten. Tatsächlich wird es auch in mehreren Großprojekten eingesetzt, wie z.B. in Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar im Svelte-Compiler. Trotzdem ziehen es einige Entwickler vor, es auch in kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Letztendlich liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Anhaltspunkte zu geben, um Ihre Entscheidung zu erleichtern.

## Erstellen eines Svelte-TypeScript-Projekts von Grund auf

Sie können ein neues Svelte-TypeScript-Projekt mit dem [Standard-Template](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es erstellt ein neues Verzeichnis):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dadurch wird ein Startprojekt erstellt, das TypeScript-Unterstützung beinhaltet und das Sie nach Belieben anpassen können.

Anschließend müssen Sie npm anweisen, die Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem vorhandenen Svelte-Projekt

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) Datei in einen `scripts` Ordner im Root-Ordner Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das ist es, was wir tun werden, um unsere Anwendung zu TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie mit der Portierung zu TypeScript beginnen.

Gehen Sie zum Root-Verzeichnis des Projekts und geben Sie diese Befehle ein:

```bash
npx degit sveltejs/template/scripts scripts       # download script file to a scripts folder

node scripts/setupTypeScript.js                   # run it
# Converted to TypeScript.
```

Sie müssen Ihren Paketmanager erneut ausführen, um loszulegen.

```bash
npm install                                       # download new dependencies

npm run dev                                       # start the app in development mode
```

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript umwandeln möchten. Beachten Sie, dass die Svelte-Community ständig die TypeScript-Unterstützung in Svelte verbessert, sodass Sie regelmäßig `npm update` ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie Probleme bei der Arbeit mit TypeScript in einer Svelte-Anwendung haben, lesen Sie diesen [Abschnitt zur Fehlersuche/FAQ zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits erwähnt, ist TypeScript ein Superset von JavaScript, daher läuft Ihre Anwendung ohne Änderungen. Derzeit wird eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausgeführt, ohne dass einer der Funktionen von TypeScript genutzt wird. Sie können jetzt beginnen, Typen schrittweise hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es in normalen JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` zu `.ts`. Sie müssen auch alle entsprechenden Importanweisungen aktualisieren, um die `.ts` Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler auswerfen, wenn Sie die `.ts` Dateierweiterung in einer `import`-Anweisung verwenden, sodass Sie, wenn Sie eine Datei `./foo.ts` haben, diese als "./foo" importieren müssen. Weitere Informationen finden Sie im Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) des TypeScript-Handbuchs.

> [!NOTE]
> Die Verwendung von TypeScript in Komponenten-Markup-Abschnitten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt. Während Sie also JavaScript im Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>` Abschnitt verwenden. TypeScript im Komponenten-Markup ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript liefert Code-Editoren und IDEs viele Informationen, um ihnen eine freundlichere Entwicklungsumgebung zu ermöglichen.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen schnellen Test durchzuführen und zu sehen, wie wir Autovervollständigungshinweise und Typüberprüfung erhalten, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir auch etwas später im Artikel Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung von der Befehlszeile aus an.

Es wird daran gearbeitet, TypeScript auch in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die vollständigste Unterstützung ist derzeit in der [Svelte for VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refactoring, Intellisense, Hover-Informationen, Autovervollständigung und weitere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) und NICHT das alte "Svelte" von James Birtles verwenden, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und die offizielle Svelte-Erweiterung stattdessen installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, geben Sie bei geöffnetem Projektordner den Befehl `code .` (der Punkt am Ende weist VS Code an, den aktuellen Ordner zu öffnen) ein, um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen gibt, die installiert werden können.

![Dialogfeld, das anzeigt, dass diese Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Das Klicken auf _Install all_ installiert Svelte for VS Code.

![Svelte for VS Code Erweiterungsinformation](02-svelte-for-vscode.png)

Wir können auch sehen, dass das `setupTypeScript.js` Skript ein paar Änderungen an unserem Projekt vorgenommen hat. Die `main.js` Datei wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot, der zeigt, dass beim Überfahren einer Komponente Hinweise angezeigt werden](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Außerdem erhalten wir die Typüberprüfung kostenlos. Wenn wir eine unbekannte Eigenschaft in den Optionsparametern des `App`-Konstruktors übergeben (zum Beispiel ein Tippfehler wie `traget` statt `target`), wird TypeScript einen Fehler melden:

![Typüberprüfung in VS Code - App Objekt wurde mit einer unbekannten Eigenschaft traget übergeben](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte` Komponente hat das `setupTypeScript.js` Skript das `lang="ts"` Attribut zum `<script>` Tag hinzugefügt. Dank der Typinferenz müssen wir oft nicht einmal Typen angeben, um Codeunterstützung zu erhalten. Wenn Sie beispielsweise beginnen, eine `ms`-Eigenschaft zum Aufruf der `Alert`-Komponente hinzuzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Codehinweise - ms Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es einen Fehler melden:

![Typüberprüfung in VS Code – die ms-Variable wurde mit einem nicht-numerischen Wert übergeben](06-vscode-type-checking-in-components.png)

Das Anwendungsschema hat ein `check` Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise vom Code-Editor angezeigt werden, aus der Befehlszeile, was es ziemlich nützlich macht, es in eine [kontinuierliche Integrations](https://de/docs/Glossary/continuous_integration) (CI) Pipeline zu verwenden. Führen Sie einfach `npm run check` aus, um nach ungenutztem CSS zu suchen und A11y-Hinweise und TypeScript-Kompilierfehler zurückzugeben.

In diesem Fall, wenn Sie `npm run check` (entweder in der VS Code-Konsole oder im Terminal) ausführen, erhalten Sie den folgenden Fehler:

![Check-Befehl, der in VS Code ausgeführt wird, zeigt einen Typfehler, ms-Variable sollte einer Zahl zugewiesen werden](07-vscode-svelte-check.png)

Noch besser, wenn Sie es aus dem integrierten VS Code-Terminal ausführen (Sie können es mit dem Tastenkürzel <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), führt das Klicken auf den Dateinamen mit <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> zu der Zeile mit dem Fehler.

Sie können das `check` Skript auch im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript immer dann ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es in einem separaten Terminalfenster im Hintergrund laufen, damit es weiterhin Fehler melden kann, allerdings nicht mit der normalen Terminalnutzung interferiert.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Die strukturelle Typisierung ist eine Möglichkeit, Typen ausschließlich basierend auf ihren Mitgliedern zu vergleichen, selbst wenn Sie den Typ nicht explizit definieren.

Wir definieren einen `TodoType`, um zu sehen, wie TypeScript erzwingt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell kompatibel damit ist.

1. Erstellen Sie im `src` Ordner einen Ordner `types`.
2. Fügen Sie eine Datei `todo.type.ts` hinzu.
3. Geben Sie `todo.type.ts` den folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Das Svelte-Schema verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie `export`/`import`-Typsyntax verwenden, um Typen und Schnittstellen zu importieren. Weitere Informationen finden Sie in [diesem Abschnitt des Troubleshooting-Leitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation).

4. Jetzt werden wir `TodoType` in unserer `Todo.svelte` Komponente verwenden. Fügen Sie zunächst das `lang="ts"`- Attribut zum `<script>` Tag hinzu.

5. Importieren Sie den Typ und verwenden Sie ihn, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts` Dateierweiterung in der `import`-Anweisung nicht zulässig ist und weggelassen wurde.

6. Nun werden wir ein `Todo`-Komponenten-Instanz mit einem Literalobjekt als Parameter vor dem Aufruf der `MoreActions`-Komponente instanziieren, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` Attribut zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es weiß, dass die von uns angegebenen Prüfungen ausgeführt werden sollen.

   Wir erhalten den folgenden Fehler:

   ![Typfehler in VS Code, Todo Type Objekt erfordert eine id PE](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir mit TypeScript beim Erstellen von Svelte-Projekten erhalten können.

Nun machen wir diese Änderungen rückgängig, um unsere Anwendung auf TypeScript zu portieren, damit wir nicht mit all den Überprüfungswarnungen belästigt werden.

1. Entfernen Sie die fehlerhafte To-Do-Liste und das `lang='ts'` Attribut aus der `Todos.svelte`-Datei.

2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'`-Attribut aus `Todo.svelte`.

Wir kümmern uns später richtig um sie.

## Portierung unserer To-Do-Listen-App zu TypeScript

Jetzt sind wir bereit, mit der Portierung unserer To-Do-Listen-Anwendung zu beginnen, um alle von TypeScript gebotenen Funktionen nutzen zu können.

Lasst uns beginnen, indem wir das Check-Skript im Watch-Modus im Projekt-Root-Verzeichnis ausführen:

```bash
npm run check -- --watch
```

Dies sollte etwas wie folgt ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie: wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, ist ein einfacher Weg, um die Portierung einer Svelte-Komponente zu starten, einfach `<script lang='ts'>` an den Anfang Ihrer Komponente hinzuzufügen und nach den dreifach punktierten Hinweisen zu suchen:

![VS Code-Screenshot, der zeigt, dass beim Hinzufügen von type="ts" zu einer Komponente, dreieckige Hinweisal Werthinweisen angezeigt werden](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte`-Komponente.

1. Fügen Sie `lang="ts"` zu Ihrem `<script>` Tag der `Alert.svelte` Komponente hinzu. Sie werden einige Warnungen in der Ausgabe des `check` Skripts sehen:

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
   export let ms = 3000;

   let visible: boolean;
   let timeout: number;

   const onMessageChange = (message: string, ms: number) => {
     clearTimeout(timeout);
     if (!message) {
       // hide Alert if message is empty
       // …
     }
     // …
   };
   ```

   > [!NOTE]
   > Es ist nicht notwendig, den `ms` Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Nun machen wir dasselbe für die `MoreActions.svelte` Komponente.

1. Fügen Sie das `lang='ts'` Attribut hinzu, wie zuvor. TypeScript wird uns über das `todos` Prop und die `t` Variable in dem Aufruf `todos.filter((t) =>...)` informieren.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir verwenden den `TodoType`, den wir bereits definiert haben, um TypeScript mitzuteilen, dass `todos` ein `TodoType` Array ist. Ersetzen Sie die Zeile `export let todos` durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die `t` Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Trotzdem, wenn wir denken, es erleichtert das Lesen unseres Codes, könnten wir es so angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Die meiste Zeit wird TypeScript in der Lage sein, den reaktiven Variablentyp korrekt abzuleiten, aber manchmal kann es zu einem Fehler wie "implicitly has an ‘any’ type" kommen, wenn es sich um reaktive Zuweisungen handelt. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, wie hier:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ bei der reaktiven Zuordnung selbst nicht spezifizieren. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie unter [How do I type reactive assignments? / I get an "implicitly has type 'any' error"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Nun kümmern wir uns um die `FilterButton` Komponente.

1. Fügen Sie das `lang='ts'` Attribut zum `<script>` Tag hinzu, wie üblich. Sie werden feststellen, dass keine Warnungen angezeigt werden – TypeScript leitet den Filtertypen aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Wir können TypeScript darüber informieren, indem wir ein Enum Filter erstellen.
2. Erstellen Sie eine Datei `filter.enum.ts` im `types`-Ordner.
3. Geben Sie ihr folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Nun werden wir das in der `FilterButton` Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte` Datei durch folgendes:

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

Hier importieren wir einfach das Filter-Enum und verwenden es anstelle der zuvor verwendeten Zeichenfolgenwerte.

### Todos.svelte

Wir werden auch das Filter-Enum in der `Todos.svelte` Komponente verwenden.

1. Fügen Sie zuerst das `lang='ts'` Attribut hinzu, wie zuvor.
2. Importieren Sie dann das Filter-Enum. Fügen Sie die folgende `import` Anweisung unter Ihren vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Nun werden wir es immer verwenden, wenn wir den aktuellen Filter referenzieren. Ersetzen Sie Ihre beiden Filter-bezogenen Blöcke mit folgenden:

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

4. `check` gibt immer noch einige Warnungen von `Todos.svelte` aus. Lassen Sie uns sie beheben.

   Beginnen Sie mit dem Importieren von `TodoType` und sagen Sie TypeScript, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als Nächstes geben wir alle fehlenden Typen an. Die Variable `todosStatus`, die wir verwendet haben, um programmatisch auf die vom `TodosStatus`-Komponenten bereitgestellten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>`-Abschnitt, sodass es so aussieht:

   ```ts
   import FilterButton from "./FilterButton.svelte";
   import Todo from "./Todo.svelte";
   import MoreActions from "./MoreActions.svelte";
   import NewTodo from "./NewTodo.svelte";
   import type TodosStatus from "./TodosStatus.svelte";
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

Wir stoßen auf die folgenden Fehler, die mit der Übergabe von `todos` an die Komponenten `TodosStatus.svelte` (und `Todo.svelte`) zusammenhängen:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Dies liegt daran, dass das `todos` Prop in der `TodosStatus` Komponente keinen Standardwert hat, weshalb TypeScript abgeleitet hat, dass es vom Typ `undefined` ist, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe passiert bei unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'` Attribut hinzu.
2. Importieren Sie dann den `TodoType` und deklarieren Sie das `todos` Prop als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>` Abschnitts durch Folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir geben auch das `headingEl`, das wir verwendet haben, um es an das Headtag zu binden, als ein `HTMLElement` an. Aktualisieren Sie die Zeile `let headingEl` wie folgt:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler bemerken, der sich darauf bezieht, dass wir das `tabindex` Attribut setzen. TypeScript führt eine Typüberprüfung am `<h2>`-Element durch und erwartet `tabindex` als Typ `number`.

   ![Tabindex-Hinweis in VS Code, tabindex erwartet einen Typ von number, nicht string](10-vscode-tabindex-hint.png)

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, so:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

Damit kann TypeScript verhindern, dass wir es einem String zuweisen.

### NewTodo.svelte

Als Nächstes kümmern wir uns um `NewTodo.svelte`.

1. Fügen Sie wie üblich das `lang='ts'` Attribut hinzu.
2. Der Warnhinweis wird darauf hingewiesen, dass wir einen Typ für die `nameEl` Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement`, so:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt für diese Datei müssen wir den richtigen Typ für unsere `autofocus` Variable angeben. Aktualisieren Sie ihre Definition so:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` erzeugt, durch Aufrufen der `Todo.svelte` Komponente ausgelöst. Beheben wir sie.

1. Öffnen Sie die `Todo.svelte` Datei und fügen Sie das `lang='ts'` Attribut hinzu.
2. Importieren Sie den `TodoType` und setzen Sie den Typ des `todo` Props. Ersetzen Sie die Zeile `export let todo` durch Folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der `update()` Funktion und die `updatedTodo` Variable zu definieren. Dies kann etwas knifflig sein, da `updatedTodo` nur die Attribute des `todos` enthält, die aktualisiert wurden. Das bedeutet, dass es kein vollständiges `todo` ist – es hat nur einen Teil der Eigenschaften eines `todo`.

   Für solche Fälle bietet TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html) an, um es einfacher zu machen, diese häufigen Transformationen anzuwenden. Was wir jetzt brauchen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) Utility, das es uns ermöglicht, alle Teilmengen eines bestimmte Typs darzustellen. Das partial Utility gibt einen neuen Typ basierend auf dem Typ `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()` Funktion – aktualisieren Sie Ihre so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit sagen wir TypeScript, dass die `updatedTodo` Variable einen Teil der `TodoType` Eigenschaften enthalten wird.

4. Jetzt sagt uns svelte-check, dass wir den Typ unserer Aktionsfunktionsparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die node-Variable als `HTMLElement` definieren. Ersetzen Sie in den beiden angegebenen Zeilen das erste Vorkommen von `node` durch `node: HTMLElement`.

### actions.js

Als Nächstes kümmern wir uns um die `actions.js` Datei.

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

2. Aktualisieren Sie dann `Todo.svelte` und `NewTodo.svelte`, wo wir die actions-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In beiden Fällen sollte es so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Jetzt müssen wir die `stores.js` und `localStore.js` Dateien zu TypeScript migrieren.

Tipp: Das Skript `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) Tool verwendet, überprüft nur die `.svelte` Dateien unserer Anwendung. Wenn Sie auch die `.ts` Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, was dem TypeScript-Compiler sagt, Fehler zu überprüfen, ohne die `.js` Ausgabe-Dateien zu erzeugen. Sie könnten sogar ein Skript zu Ihrer `package.json` Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos` Arrays auf `TodoType[]`. So sieht der Inhalt am Ende aus:

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

3. Denken Sie daran, die `import` Anweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Entfernen Sie einfach die `.js` Erweiterung, wie hier:

   ```js
   import { todos } from "../stores";
   ```

Nun zu `localStore.js`.

Aktualisieren Sie die `import` Anweisung in `stores.ts` so:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie, indem Sie die Datei in `localStore.ts` umbenennen.
2. TypeScript sagt uns, dass wir die Typen der `key`, `initial` und `value` Variablen angeben müssen. Die erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte ein String sein.

   Aber `initial` und `value` sollten irgendwelche Objekte sein, die in einen gültigen JSON-String umgewandelt werden können, mit der [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Methode, das bedeutet jedes JavaScript-Objekt mit einem paar Einschränkungen: zum Beispiel, `undefined`, Funktionen und Symbole sind keine gültigen JSON-Werte.

   Lassen Sie uns also den Typ `JsonValue` erstellen, um diese Bedingungen anzugeben.

   Erstellen Sie die Datei `json.type.ts` im `types` Ordner.

3. Geben Sie ihm den folgenden Inhalt:

   ```ts
   export type JsonValue =
     | string
     | number
     | boolean
     | null
     | JsonValue[]
     | { [key: string]: JsonValue };
   ```

   Der `|` Operator lässt uns Variablen deklarieren, die Werte von zwei oder mehr Typen speichern können. Ein `JsonValue` könnte eine Zeichenfolge, eine Zahl, ein Boolean und so weiter sein. In diesem Fall machen wir auch von rekursiven Typen Gebrauch, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` und auch ein Objekt mit Eigenschaften vom Typ `JsonValue` haben kann.

4. Lassen Sie uns unseren `JsonValue` Typ importieren und ihn entsprechend verwenden. Aktualisieren Sie Ihre `localStore.ts` Datei so:

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
       set(value: JsonValue) {
         localStorage.setItem(key, toString(value)); // save also to local storage as a string
         return set(value);
       },
       update,
     };
   };
   ```

Wenn wir jetzt versuchen, einen `localStore` mit irgendetwas zu erstellen, das nicht per JSON über `JSON.stringify()` konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` darüber klagen:

![VS Code zeigt einen Fehler mit der Verwendung unseres Stores - es schlägt fehl, wenn versucht wird, einen lokalen Speichermaster auf etwas Unvereinbares mit JSON stringify zu setzen](11-vscode-invalid-store.png)

Und das Beste daran ist, dass es sogar mit der [`$store` Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktionieren wird. Wenn wir versuchen, einen ungültigen Wert in unseren `todos`-Store zu speichern, indem wir die `$store` Syntax verwenden, wie hier:

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

Das ist ein weiteres Beispiel dafür, wie die Angabe von Typen unseren Code robuster machen kann und uns helfen kann, mehr Fehler zu erkennen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung so konvertiert, dass sie TypeScript verwendet.

## Bulletproofing unserer Stores mit Generics

Unsere Stores wurden bereits auf TypeScript portiert, aber wir können noch besser werden. Wir sollten nicht jegliche Art von Wert speichern müssen – wir wissen, dass der Alert-Store nur Zeichenfolgen-Nachrichten enthalten sollte, und der To-Do-Store sollte ein Array von `TodoType` enthalten, usw. Wir können TypeScript dies erzwingen lassen, indem wir [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) verwenden. Lassen Sie uns mehr darüber erfahren.

### Verständnis von TypeScript Generics

Generics ermöglichen es Ihnen, wiederverwendbare Code-Komponenten zu erstellen, die mit einer Vielzahl von Typen arbeiten, anstelle eines einzelnen Typs. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: Sie werden innerhalb von spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Sehen wir uns ein kurzes Beispiel an, eine einfache `Stack` Klasse, die es uns ermöglicht, Elemente zu `push` und zu `pop`, so:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und dementsprechend empfangen und geben die `push()` und `pop()` Methoden eine Variable vom Typ `any` zurück. Daher ist es völlig gültig etwas wie folgendes zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` funktioniert? Wir könnten folgendes tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack` Klasse erstellen. Und wie könnten wir einen Stack von Typen behandeln, die wir noch nicht kennen sollen, und die vom Verbraucher definiert werden sollen?

Um all diese Probleme zu lösen, können wir Generics verwenden.

Hier ist unsere `Stack` Klasse, die mit Generics neu implementiert wurde:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann wie gewohnt einen spezifischen Typ. Jetzt ist elements ein Array vom Typ `T`, und `push()` und `pop()` empfangen und geben eine Variable vom Typ `T` zurück.

So würden wir unseren generischen `Stack`-Klasse verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und es wird einen Fehler auslöschen, wenn wir versuchen, etwas anderes zu pushen:

![Argument vom Typ hello ist nicht zuweisbar zu Parameter von Typ number](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen durch ihre Verwendung ableiten. Generics unterstützen auch Standardwerte und Einschränkungen.

Generics sind ein mächtiges Feature, das es unserem Code ermöglicht, sich von den spezifischen Typen zu abstrahieren, die verwendet werden, und ihn wiederverwendbarer und generischer zu machen, ohne auf Typsicherheit zu verzichten. Um mehr darüber zu erfahren, lesen Sie die [TypeScript Einführung in Generics](https://www.typescriptlang.org/docs/handbook/generics.html).

### Verwendung von Svelte-Stores mit Generics

Svelte-Stores unterstützen Generics von Haus aus. Und dank der generischen Typableitung können wir es nutzen, ohne unseren Code anzupassen.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ in unserem `$alert` Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument vom Typ 9999 ist nicht zuweisbar zu Parameter von Typ string](13-vscode-generic-alert-error.png)

Das liegt daran, dass TypeScript, als wir unseren Alert-Store in der `stores.ts` Datei definierten mit:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

den generischen Typ `string` abgeleitet hat. Wenn wir explizit darüber sein wollten, könnten wir folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Nun lassen Sie uns unseren `localStore` Store generisch machen. Erinnern Sie sich daran, dass wir den `JsonValue` Typ definiert haben, um die Verwendung unseres `localStore` Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir den Verbrauchern von `localStore` ermöglichen, den Typ der Daten zu spezifizieren, die gespeichert werden sollen, aber anstatt mit jedem Typ zu arbeiten, sollten sie sich mit dem `JsonValue` Typ anfreunden. Wir spezifizieren das mit einem generischen Constraint, wie hier:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // …
};
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue` Typ kompatibel sein muss. Dann verwenden wir den `T` Typ entsprechend.

Unsere `localStore.ts` Datei sieht so aus – probieren Sie den neuen Code in Ihrer Version aus:

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
    set(value: T) {
      localStorage.setItem(key, toString(value)); // save also to local storage as a string
      return set(value);
    },
    update,
  };
};
```

Und dank der generischen Typableitung weiß TypeScript bereits, dass unser `$todos` Store ein Array von `TodoType` enthalten soll:

![Todo Typ Objekt Eigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Nochmals, wenn wir explizit darüber sein wollten, könnten wir dies in der `stores.ts` Datei tun, wie hier:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das genügt für unsere kurze Einführung in TypeScript Generics.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits erwähnt, ist TypeScript noch nicht im REPL verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Listen-Anwendung genommen und sie in TypeScript portiert.

Wir haben zuerst erfahren, was TypeScript ist und welche Vorteile es uns bringt. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt konvertiert, um TypeScript zu verwenden – unsere To-Do-Listen-App.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check` Tool verwendet, um TypeScript-Probleme von der Befehlszeile aus zu überprüfen.

Im nächsten Artikel werden wir lernen, wie man unsere App kompiliert und in Produktion bereitstellt. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um weiter mit dem Lernen von Svelte zu gehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
