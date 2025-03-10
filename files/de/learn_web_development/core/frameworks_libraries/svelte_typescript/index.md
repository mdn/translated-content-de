---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir über Svelte Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Webspeicher zu speichern. Wir haben uns auch angesehen, wie wir die Übergangsdirektive nutzen können, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Wir werden nun lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es bieten kann. Dann sehen wir, wie wir unser Projekt so konfigurieren, dass es mit TypeScript-Dateien arbeiten kann. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die TypeScript-Features vollständig nutzen zu können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und über Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/der Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie man TypeScript konfiguriert und verwendet, wenn man Svelte-Anwendungen entwickelt.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und das Portieren zu TypeScript völlig optional ist. Darüber gibt es unterschiedliche Meinungen, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile der Verwendung von TypeScript sprechen. Auch wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel nützlich sein, um zu erfahren, was es zu bieten hat und Ihnen bei Ihrer eigenen Entscheidungsfindung zu helfen. Wenn Sie überhaupt nicht an TypeScript interessiert sind, können Sie zum nächsten Kapitel weitergehen, in dem wir uns verschiedene Optionen für die Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen.

## Mit uns programmieren

### Git

Klonen Sie das GitHub-Repo (falls nicht bereits geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie dann aus:

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist [TypeScript-Unterstützung im REPL derzeit nicht verfügbar](https://github.com/sveltejs/svelte.dev/issues/853).

## TypeScript: optionales statisches Typing für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionales statisches Typing, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typensystem zu erkennen und die JavaScript-Entwicklung effizienter zu machen. Ein großer Vorteil ist die Möglichkeit für IDEs, eine reichere Umgebung zum Erkennen häufig auftretender Fehler beim Eintippen des Codes bereitzustellen.

Das Beste daran ist, dass JavaScript-Code gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie werden einfach funktionieren.

Unser TypeScript-Code wird überall ausgeführt werden können, wo auch JavaScript laufen kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code zu Vanilla-JavaScript. Das bedeutet, dass es den TypeScript-Code analysiert und den entsprechenden Vanilla-JavaScript-Code generiert, damit Browser ihn ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Die umfassende TypeScript-Unterstützung war Sveltes am meisten nachgefragtes Feature seit geraumer Zeit. Dank der harten Arbeit des Svelte-Teams und vieler Mitwirkender haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript), die bereit ist, getestet zu werden. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitig erkannte Fehler: Der Compiler überprüft Typen zur Kompilierzeit und bietet Fehlermeldungen.
- Lesbarkeit: Statisches Typing verleiht dem Code mehr Struktur, was ihn selbsterklärend und lesbarer macht.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichere Refaktorierung: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Sie beim Refaktorisieren großer Teile Ihres Codebasisses zu unterstützen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, selbst ohne Variabletypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen zu herkömmlichem JavaScript und ermöglicht Ihnen deren Nutzung auch auf Benutzeragenten, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Kein echtes statisches Typing: Typen werden nur zur Kompilierzeit überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Obwohl TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine beträchtliche Lernkurve, insbesondere wenn Sie keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatisierte Tests: Auch wenn Typen Ihnen helfen können, mehrere Fehler zu erkennen, ist TypeScript kein wahrer Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generics kann zu übertrieben komplexen Codebasissen führen.

Es scheint einen breiten Konsens darüber zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, bei denen viele Entwickler am gleichen Code arbeiten. Und tatsächlich wird es in mehreren groß angelegten Projekten, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler, eingesetzt. Dennoch ziehen es einige Entwickler vor, es auch bei kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Letztendlich liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen weitere Beweise zu liefern, um Ihnen bei Ihrer Entscheidung zu helfen.

## Ein neues Svelte TypeScript-Projekt von Grund auf erstellen

Sie können ein neues Svelte TypeScript-Projekt mit dem [Standard-Template](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dadurch wird ein Starter-Projekt erstellt, das TypeScript-Unterstützung enthält, und Sie können es nach Belieben anpassen.

Dann müssen Sie npm anweisen, die Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzufügen

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diese Anweisungen befolgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner im Stammverzeichnis Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um unsere Anwendung auf TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie sie auf TypeScript portieren.

Gehen Sie zum Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

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

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript umwandeln möchten. Beachten Sie nur, dass die Svelte-Community die TypeScript-Unterstützung für Svelte ständig verbessert, sodass Sie regelmäßig `npm update` ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie Probleme mit der Verwendung von TypeScript in einer Svelte-Anwendung haben, werfen Sie einen Blick auf diese [Troubleshooting/FAQ-Sektion über TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits gesagt, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Derzeit führen Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung aus, ohne die Vorteile der von TypeScript bereitgestellten Funktionen zu nutzen. Sie können nun beginnen, schrittweise Typen hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es in regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` in `.ts`. Sie müssen auch alle entsprechenden Import-Anweisungen aktualisieren, um die `.ts`-Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler werfen, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden. Wenn Sie also eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Lesen Sie den Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Markup-Abschnitten von Komponenten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Während Sie JavaScript vom Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Abschnitt verwenden.
> TypeScript in Markup-Abschnitten von Komponenten ist ab Svelte 5 zulässig.

## Verbessertes Entwicklererlebnis mit TypeScript

TypeScript liefert Code-Editoren und IDEs viele Informationen, damit diese eine benutzerfreundlichere Entwicklungsumgebung bereitstellen können.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen kurzen Test durchzuführen und zu sehen, wie wir beim Schreiben von Komponenten Autovervollständigungshilfen und Typüberprüfung erhalten können.

> [!NOTE]
> Wenn Sie nicht wünschen, VS Code zu verwenden, bieten wir auch später Anweisungen zur Verwendung der TypeScript-Fehlerprüfung über das Terminal an.

Es wird daran gearbeitet, TypeScript in Svelte-Projekten in mehreren Code-Editoren zu unterstützen. Die umfassendste Unterstützung ist bisher in der [Svelte für VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refaktorierung, IntelliSense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, in Ihren Projekten mit TypeScript anzufangen.

> [!NOTE]
> Stellen Sie sicher, dass Sie das [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung im Stammverzeichnis des Projektordners, geben Sie `code .` ein (der abschließende Punkt weist VS Code an, den aktuellen Ordner zu öffnen), um den Code-Editor zu öffnen. VS Code teilt Ihnen mit, dass es empfohlene Erweiterungen zur Installation gibt.

![Dialogfeld, das anzeigt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Durch Klicken auf _Alle installieren_ wird Svelte für VS Code installiert.

![Svelte für VS Code-Erweiterungsinformation](02-svelte-for-vscode.png)

Wir können auch sehen, dass die `setupTypeScript.js`-Datei einige Änderungen an unserem Projekt vorgenommen hat. Die `main.js`-Datei wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot, der zeigt, dass beim Hover über eine Komponente Hinweise angezeigt werden](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir erhalten auch kostenlose Typüberprüfung. Wenn wir eine unbekannte Eigenschaft im options-Parameter des `App`-Konstruktors übergeben (zum Beispiel einen Tippfehler wie `traget` statt `target`), wird TypeScript sich beschweren:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget gegeben](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das Attribut `lang="ts"` zum `<script>`-Tag hinzugefügt. Dank der Typinferenz müssen wir in vielen Fällen nicht einmal Typen angeben, um Unterstützung durch den Code zu erhalten. Wenn Sie beispielsweise beginnen, der `Alert`-Komponentenaufruf eine `ms`-Eigenschaft hinzuzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code-Typinferenz und Code-Hinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es sich darüber beschweren:

![Typüberprüfung in VS Code - der ms-Variable wurde ein nicht-numerischer Wert gegeben](06-vscode-type-checking-in-components.png)

Das Anwendungstemplate hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor aus der Befehlszeile angezeigt werden, was es ziemlich nützlich für den Betrieb in einer Continuous Integration (CI)-Pipeline macht. Führen Sie einfach `npm run check` aus, um ungenutztes CSS zu überprüfen und A11y-Hinweise und TypeScript-Kompilierungsfehler zurückzugeben.

In diesem Fall erhalten Sie, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), den folgenden Fehler:

![Check-Befehl wird in VS Code ausgeführt und zeigt einen Typfehler an, ms-Variable sollte als Nummer zugewiesen sein](07-vscode-svelte-check.png)

Noch besser ist, dass Sie beim Ausführen aus dem integrierten Terminal von VS Code (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen) durch Drücken von <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> auf den Dateinamen zu der Zeile gelangen können, die den Fehler enthält.

Sie können das `check`-Skript auch im Watch-Modus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript immer ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, halten Sie es im Hintergrund in einem separaten Terminalfenster am Laufen, damit es weiterhin Fehler melden kann, ohne andere Terminalverwendungen zu stören.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelles Typing. Strukturelles Typing ist eine Möglichkeit, Typen allein basierend auf ihren Mitgliedern zu beziehen, sogar wenn Sie den Typ nicht explizit definieren.

Wir definieren einen `TodoType`-Typ, um zu sehen, wie TypeScript sicherstellt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell kompatibel damit ist.

1. Erstellen Sie im `src`-Ordner einen `types`-Ordner.
2. Fügen Sie darin eine `todo.type.ts`-Datei hinzu.
3. Geben Sie `todo.type.ts` folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Das Svelte-Template verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0 zur Unterstützung von TypeScript. Ab dieser Version müssen Sie das `export`/`import`-Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Lesen Sie [diesen Abschnitt des Troubleshooting-Leitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für mehr Informationen.

4. Jetzt verwenden wir `TodoType` von unserer `Todo.svelte`-Komponente aus. Fügen Sie zuerst das `lang="ts"` zum `<script>`-Tag hinzu.
5. Lassen Sie uns den Typ `import` importieren und verwenden, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` mit der folgenden:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht zulässig ist und weggelassen wurde.

6. Jetzt instanziieren wir von `Todos.svelte` aus eine `Todo`-Komponente mit einem literalen Objekt als Parameter vor dem Aufruf der `MoreActions`-Komponente, so:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit sie weiß, dass sie die von uns angegebenen Typüberprüfungen verwendet.

   Wir erhalten folgenden Fehler:

   ![Typfehler in VS Code, Todo Type-Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon haben, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte erstellen.

Jetzt werden wir diese Änderungen rückgängig machen, um unsere Anwendung auf TypeScript zu portieren, damit wir nicht mit allen Prüfwarnungen belästigt werden.

1. Entfernen Sie das fehlerhafte To-Do und das `lang='ts'`-Attribut aus der `Todos.svelte`-Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir kümmern uns später darum.

## Portierung unserer To-Do-Listen-App auf TypeScript

Jetzt sind wir bereit, unsere To-Do-Listen-Anwendung zu portieren, um alle Funktionen, die TypeScript uns bietet, zu nutzen.

Beginnen wir, indem wir das check-Skript im Watch-Modus im Projektstamm ausführen:

```bash
npm run check -- --watch
```

Dies sollte etwas Ähnliches wie das Folgende ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass, wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, eine einfache Möglichkeit, eine Svelte-Komponente zu portieren, darin besteht, einfach das `<script lang='ts'>` am Anfang Ihrer Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen:

![VS Code-Screenshot, der zeigt, dass, wenn Sie type="ts" zu einer Komponente hinzufügen, dreipunktige Alarmhinweise angezeigt werden](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte`-Komponente.

1. Fügen Sie `lang="ts"` in das `<script>`-Tag Ihrer `Alert.svelte`-Komponente ein. Sie werden einige Warnmeldungen in der Ausgabe des `check`-Skripts sehen:

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

2. Sie können diese beheben, indem Sie die entsprechenden Typen angeben, so:

   ```ts
   export let ms = 3000

     let visible: boolean
     let timeout: number

     const onMessageChange = (message: string, ms: number) => {
       clearTimeout(timeout)
       if (!message) {               // hide Alert if message is empty
   ```

   > [!NOTE]
   > Es ist nicht erforderlich, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus dem Standardwert ableitet.

### MoreActions.svelte

Nun werden wir dasselbe für die `MoreActions.svelte`-Komponente tun.

1. Fügen Sie wie zuvor das `lang='ts'`-Attribut hinzu. TypeScript wird uns bezüglich des `todos`-Props und der `t`-Variable im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir verwenden den bereits definierten `TodoType`, um TypeScript mitzuteilen, dass `todos` ein Array von `TodoType` ist. Ersetzen Sie die Zeile `export let todos` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Dennoch, wenn wir denken, dass es unseren Code leichter lesbar macht, könnten wir es so angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Die meiste Zeit wird TypeScript in der Lage sein, den Typ der reaktiven Variable korrekt abzuleiten, aber manchmal können Sie einen "implizit hat einen 'any'-Typ"-Fehler beim Arbeiten mit reaktiven Zuweisungen erhalten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ nicht in der reaktiven Zuweisung selbst angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Für weitere Informationen lesen Sie [How do I type reactive assignments? / I get an "implicitly has type 'any' error"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut zum `<script>`-Tag hinzu, wie üblich. Sie werden feststellen, dass es keine Warnungen gibt — TypeScript leitet den Typ der Filtervariable aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Also können wir TypeScript darüber informieren, indem wir ein Enum Filter erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt werden wir dies von der `FilterButton`-Komponente aus verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch das Folgende:

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

Hier importieren wir einfach das `Filter`-Enum und verwenden es anstelle der zuvor verwendeten String-Werte.

### Todos.svelte

Wir verwenden das `Filter`-Enum auch in der `Todos.svelte`-Komponente.

1. Fügen Sie zuerst das `lang='ts'` Attribut hinzu, wie zuvor.
2. Importieren Sie als nächstes das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren bestehenden hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt werden wir es verwenden, wann immer wir auf den aktuellen Filter verweisen. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch das Folgende:

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

4. `check` gibt immer noch einige Warnungen aus `Todos.svelte` aus. Lassen Sie uns sie beheben.

   Beginnen Sie, indem Sie den `TodoType` importieren und TypeScript mitteilen, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes geben wir alle fehlenden Typen an. Die Variable `todosStatus`, die wir verwendet haben, um programmgesteuert auf die von der `TodosStatus`-Komponente bereitgestellten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>`-Abschnitt, damit er so aussieht:

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

Wir stoßen auf die folgenden Fehler im Zusammenhang mit dem Übergeben von `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`-)Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Das liegt daran, dass das `todos`-Prop in der `TodosStatus`-Komponente keinen Standardwert hat, sodass TypeScript daraus schließt, dass es vom Typ `undefined` ist, was mit einem Array von `TodoType` nicht kompatibel ist. Dasselbe geschieht mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann den `TodoType` und deklarieren Sie das `todos`-Prop als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir werden auch das `headingEl`, das wir verwendet haben, um es an das heading-Tag zu binden, als `HTMLElement` angeben. Aktualisieren Sie die Zeile `let headingEl` mit der folgenden:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler gemeldet bekommen, der sich auf die Stelle bezieht, an der wir das `tabindex`-Attribut setzen. Das liegt daran, dass TypeScript das `<h2>`-Element typüberprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, tabindex erwartet einen Typ von Zahl, nicht String](10-vscode-tabindex-hint.png)

   Um es zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, so:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es fälschlicherweise einer String-Variablen zuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Wie üblich fügen Sie das `lang='ts'`-Attribut hinzu.
2. Die Warnung wird angeben, dass wir einen Typ für die Variable `nameEl` angeben müssen. Setzen Sie ihren Typ auf `HTMLElement` wie folgt:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt für diese Datei müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie ihre Definition so:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` auslöst, die durch den Aufruf der `Todo.svelte`-Komponente ausgelöst werden. Lassen Sie uns sie reparieren.

1. Öffnen Sie die `Todo.svelte`-Datei und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Lassen Sie uns den `TodoType` importieren und den Typ des `todo`-Props festlegen. Ersetzen Sie die Zeile `export let todo` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der `update()`-Funktion der `updatedTodo`-Variable zu definieren. Dies kann etwas kompliziert sein, da `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es kein vollständiges `todo` ist — es hat nur einen Teil der Eigenschaften eines `todos`.

   Für solche Fälle bietet TypeScript mehrere [Dienstprogrammtypen](https://www.typescriptlang.org/docs/handbook/utility-types.html) an, um es einfacher zu machen, diese häufigen Transformationen anzuwenden. Was wir jetzt benötigen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) Dienstprogramm, mit dem wir alle Teilmengen eines gegebenen Typs darstellen können. Das Partielle Dienstprogramm gibt einen neuen Typ basierend auf dem Typ `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir werden es in der `update()`-Funktion verwenden — aktualisieren Sie Ihre wie folgt:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit sagen wir TypeScript, dass die Variable `updatedTodo` eine Teilmenge der `TodoType`-Eigenschaften enthält.

4. Jetzt teilt uns svelte-check mit, dass wir den Typ der Parameter unserer Aktionsfunktion definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die `node`-Variable vom Typ `HTMLElement` definieren. In den beiden angegebenen Zeilen ersetzen Sie das erste Vorkommen von `node` durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die `actions.js`-Datei.

1. Benennen Sie sie in `actions.ts` um und fügen Sie den Typ des node-Parameters hinzu. Sie sollte letztendlich so aussehen:

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

2. Aktualisieren Sie jetzt `Todo.svelte` und `NewTodo.svelte`, wo wir die Aktionsdatei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In jedem Fall sollte es letztendlich so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Jetzt müssen wir die `stores.js`- und `localStore.js`-Dateien auf TypeScript migrieren.

Tipp: Das Skript `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)-Tool verwendet, überprüft nur die `.svelte`-Dateien unserer Anwendung. Wenn Sie möchten, dass auch die `.ts`-Dateien überprüft werden, können Sie `npm run check && npx tsc --noEmit` ausführen, was dem TypeScript-Compiler sagt, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu erzeugen. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Legen Sie den Typ unseres `initialTodos`-Arrays auf `TodoType[]` fest. So sieht der Inhalt aus:

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

Nun zu `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` so:

```js
import { localStore } from "./localStore";
```

1. Starten Sie, indem Sie die Datei in `localStore.ts` umbenennen.
2. TypeScript fordert uns auf, den Typ der `key`-, `initial`- und `value`-Variablen anzugeben. Das erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenfolge sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das mit der Methode [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in eine gültige JSON-Zeichenfolge konvertiert werden kann, was bedeutet, dass jedes JavaScript-Objekt mit ein paar Einschränkungen: zum Beispiel sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Daher erstellen wir den Typ `JsonValue`, um diese Bedingungen anzugeben.

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

   Der Operator `|` erlaubt es uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern können. Ein `JsonValue` könnte eine Zeichenfolge, eine Zahl, ein boolescher Wert und so weiter sein. In diesem Fall verwenden wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` und auch ein Objekt mit Eigenschaften vom Typ `JsonValue` haben kann.

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

Wenn wir jetzt versuchen, einen `localStore` zu erstellen, der in JSON via `JSON.stringify()` nicht konvertiert werden kann, z.B. ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` sich darüber beschweren:

![VS Code zeigt einen Fehler bei der Verwendung unseres Stores - es schlägt fehl, wenn versucht wird, einen lokalen Speicherwert auf etwas inkompatibles mit JSON stringify zu setzen](11-vscode-invalid-store.png)

Und das Beste daran ist, dass es sogar mit der [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktioniert. Wenn wir versuchen, einen ungültigen Wert in unserem `todos`-Store mit der `$store`-Syntax zu speichern, so:

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

Das check-Skript wird den folgenden Fehler melden:

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

Dies ist ein weiteres Beispiel dafür, wie das Angeben von Typen unseren Code robuster machen kann und uns hilft, mehr Fehler zu erkennen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung so umgebaut, dass sie TypeScript verwendet.

## Unsere Stores mit Generics absichern

Unsere Stores wurden bereits auf TypeScript portiert, aber wir können es besser machen. Wir sollten keinen beliebigen Wert speichern müssen — wir wissen, dass der Alert-Store Zeichenfolgenmeldungen enthalten sollte, und der To-Do-Store sollte ein Array von `TodoType` enthalten usw. Wir können TypeScript dies durch die Verwendung von [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) erzwingen. Lassen Sie uns mehr darüber herausfinden.

### Verständnis von TypeScript-Generics

Generics ermöglichen es uns, Codekomponenten zu erstellen, die mit einer Vielzahl von Typen anstelle eines einzelnen Typs arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: Sie werden in spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein kurzes Beispiel ansehen, eine einfache `Stack`-Klasse, die es uns ermöglicht, Elemente `push` und `pop` zu machen, so:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und dementsprechend empfangen und geben die `push()`- und `pop()`-Methoden beide eine Variable vom Typ `any` zurück. Also ist es vollkommen gültig, etwas wie das folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was ist, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` arbeitet? Wir könnten das Folgende tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir unseren Code dann duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir mit einem Stack von Typen umgehen, die wir noch nicht kennen und die vom Verbraucher definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generics verwenden.

Hier ist unsere `Stack`-Klasse auf Generics umgestellt:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann so, wie wir normalerweise einen bestimmten Typ verwenden würden. Jetzt ist `elements` ein Array vom Typ `T`, und `push()` und `pop()` empfangen und geben beide eine Variable vom Typ `T` zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und gibt einen Fehler aus, wenn wir versuchen, etwas anderes zu pushen:

![Argument vom Typ hello kann nicht auf Parameter vom Typ number zugewiesen werden](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen aus ihrer Verwendung ableiten. Generics unterstützen auch Standardwerte und Einschränkungen.

Generics sind ein leistungsstarkes Feature, das es uns ermöglicht, unseren Code von den spezifischen verwendeten Typen abzustrahieren, wodurch er wiederverwendbarer und generischer wird, ohne die Typsicherheit aufzugeben. Um mehr darüber zu erfahren, sehen Sie sich die [TypeScript Introduction to Generics](https://www.typescriptlang.org/docs/handbook/generics.html) an.

### Svelte-Stores mit Generics verwenden

Svelte-Stores unterstützen generische Typen von Haus aus. Und dank der generischen Typableitung können wir dies nutzen, ohne unseren Code auch nur zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ für unseren `$alert`-Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument vom Typ 9999 kann nicht auf Parameter vom Typ string zugewiesen werden](13-vscode-generic-alert-error.png)

Das liegt daran, dass als wir unseren Alert-Store in der Datei `stores.ts` mit definiert haben:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript ableitete den generischen Typ als `string`. Wenn wir dies explizit angeben wollten, könnten wir das Folgende tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt machen wir unseren `localStore`-Store generisch. Erinnern Sie sich, dass wir den `JsonValue`-Typ definiert haben, um die Verwendung unseres `localStore`-Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` persistiert werden können. Nun möchten wir, dass die Verbraucher von `localStore` in der Lage sind, den Typ der zu persistierenden Daten anzugeben, aber anstatt mit einem beliebigen Typ zu arbeiten, sollten sie dem `JsonValue`-Typ entsprechen. Wir werden dies mit einer generischen Einschränkung angeben, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den `T`-Typ entsprechend.

Unsere `localStore.ts`-Datei wird letztendlich so aussehen — versuchen Sie den neuen Code jetzt in Ihrer Version:

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

Und dank der generischen Typableitung weiß TypeScript bereits, dass unser `$todos`-Store ein Array von `TodoType` enthalten sollte:

![Todo Type-Objekteigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Nochmals, wenn wir explizit darüber sein wollten, könnten wir dies in der Datei `stores.ts` folgendermaßen tun:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war's für unsere kurze Tour durch TypeScript Generics.

## Der Code bisher

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie wie folgt auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits erwähnt, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Listen-Anwendung genommen und sie auf TypeScript portiert.

Zuerst haben wir über TypeScript gelernt und welche Vorteile es uns bieten kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt so konvertiert, dass es TypeScript verwendet — unsere To-Do-Listen-App.

Wir haben gelernt, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check`-Tool verwendet, um TypeScript-Probleme von der Befehlszeile aus zu untersuchen.

Im nächsten Artikel werden wir lernen, wie man unsere App kompiliert und in die Produktion überträgt. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um tiefer in das Lernen von Svelte einzusteigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
