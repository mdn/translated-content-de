---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir über Svelte Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Web Storage zu speichern. Wir haben uns auch angeschaut, wie man die `transition`-Direktive benutzt, um Animationen an DOM-Elementen in Svelte zu implementieren.

Jetzt werden wir lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren können, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Features von TypeScript voll auszunutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen vertraut sind, und
          über Kenntnisse des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie TypeScript konfigurieren und verwenden, wenn Sie Svelte-Anwendungen entwickeln.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung voll funktionsfähig ist und die Portierung zu TypeScript völlig optional ist. Es gibt verschiedene Meinungen dazu, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile von TypeScript sprechen. Auch wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel nützlich sein, um zu erfahren, was es zu bieten hat, und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie sich überhaupt nicht für TypeScript interessieren, können Sie zum nächsten Kapitel springen, in dem wir uns verschiedene Optionen für die Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen.

## Code mit uns zusammen

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist [TypeScript-Unterstützung im REPL noch nicht verfügbar](https://github.com/sveltejs/svelte.dev/issues/853).

## TypeScript: optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu machen. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung für die Erkennung häufiger Fehler bieten können, während Sie den Code eingeben.

Am besten von allem ist, dass JavaScript-Code gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie werden einfach funktionieren.

Unser TypeScript-Code kann überall ausgeführt werden, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code zu Vanilla-JavaScript. Das bedeutet, dass es TypeScript-Code parst und den entsprechenden Vanilla-JavaScript-Code produziert, damit Browser diesen ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Die erstklassige TypeScript-Unterstützung war Sveltes am meisten angeforderte Funktion seit geraumer Zeit. Dank der harten Arbeit des Svelte-Teams zusammen mit vielen Mitwirkenden haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, die getestet werden kann. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitige Fehlererkennung: Der Compiler überprüft Typen zur Kompilierzeit und liefert Fehlermeldungen.
- Lesbarkeit: Statische Typisierung gibt dem Code mehr Struktur, was ihn selbstdokumentierend und lesbarer macht.
- Reichhaltige IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Codenavigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sicheres Refactoring: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Ihnen beim Refaktorisieren großer Teile Ihres Codes zu helfen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele der neuesten JavaScript-Funktionen zu einfachem, altmodischem JavaScript, sodass Sie diese verwenden können, auch wenn Benutzeragenten sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierzeit überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Auch wenn TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine beträchtliche Lernkurve, besonders wenn Sie keinerlei Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Auch wenn Typen Ihnen helfen könnten, mehrere Fehler zu erkennen, ist TypeScript kein echter Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Arbeiten mit Typen, Klassen, Schnittstellen und Generics kann zu übermäßig komplexen Code-Basen führen.

Es scheint einen breiten Konsens darüber zu geben, dass TypeScript besonders gut für große Projekte geeignet ist, bei denen viele Entwickler an derselben Codebasis arbeiten. Und es wird in der Tat von mehreren Großprojekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest, und sogar dem Svelte-Compiler. Dennoch ziehen es einige Entwickler vor, es auch in kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Am Ende liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Beweise zu liefern, um Ihre Meinung darüber zu bilden.

## Ein Svelte-TypeScript-Projekt von Grund auf neu erstellen

Sie können ein neues Svelte-TypeScript-Projekt mit dem [Standard-Template](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es erstellt ein neues Verzeichnis):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starter-Projekt, das TypeScript-Unterstützung enthält und das Sie nach Belieben ändern können.

Dann müssen Sie npm dazu bringen, Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um einem bestehenden Svelte-Projekt TypeScript-Unterstützung hinzuzufügen, können Sie [diesen Anweisungen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project) folgen. Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner im Stammordner Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um unsere Anwendung nach TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie damit beginnen, sie nach TypeScript zu portieren.

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

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie nach TypeScript konvertieren möchten. Beachten Sie einfach, dass die Svelte-Community ständig die TypeScript-Unterstützung für Svelte verbessert, sodass Sie regelmäßig `npm update` ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie bei der Arbeit mit TypeScript in einer Svelte-Anwendung auf Probleme stoßen, werfen Sie einen Blick auf diesen [Troubleshooting/FAQ-Bereich zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie wir bereits gesagt haben, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Derzeit werden Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausführen, ohne von den angebotenen Funktionen von TypeScript zu profitieren. Sie können jetzt damit beginnen, Typen schrittweise hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es aus regulären JavaScript-Dateien zu verwenden, müssen Sie einfach die Dateierweiterung von `.js` auf `.ts` ändern. Sie müssen auch jede entsprechende Importanweisung aktualisieren, um die `.ts` Dateierweiterung von allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wirft einen Fehler aus, wenn Sie die `.ts` Dateierweiterung in einer `import`-Anweisung verwenden, also müssen Sie, wenn Sie eine Datei `./foo.ts` haben, sie als "./foo" importieren.
> Siehe den Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) des TypeScript-Handbuchs für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Komponentenzeichenfolgenabschnitten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Während Sie JavaScript in der Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Abschnitt verwenden.
> TypeScript in Komponentenzeichenfolgen ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript bietet Code-Editoren und IDEs viele Informationen, um ihnen zu ermöglichen, eine freundlichere Entwicklungsumgebung zu bieten.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen schnellen Test durchzuführen und zu sehen, wie wir Autovervollständigungs-Hinweise und Typüberprüfungen erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir etwas später auch Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung aus dem Terminal an.

Es laufen Arbeiten zur Unterstützung von TypeScript in Svelte-Projekten in mehreren Code-Editoren; die vollständigste Unterstützung ist bisher in der [Svelte für VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gewartet wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refactoring, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) und NICHT das alte "Svelte" von James Birtles verwenden, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, geben Sie vom Stammordner Ihres Projekts aus `code .` ein (der Punkt am Ende weist VS Code an, den aktuellen Ordner zu öffnen), um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen zum Installieren gibt.

![Dialogfeld, das besagt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Wenn Sie auf _Install all_ klicken, wird Svelte für VS Code installiert.

![Informationen zur Svelte für VS Code-Erweiterung](02-svelte-for-vscode.png)

Wir können auch sehen, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot, der zeigt, dass beim Hovern über eine Komponente Hinweise angezeigt werden](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir erhalten auch kostenlos eine Typüberprüfung. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (z. B. einen Tippfehler wie `traget` statt `target`), wird TypeScript beanstanden:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget gegeben](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das Attribut `lang="ts"` zum `<script>`-Tag hinzugefügt. Darüber hinaus werden wir dank der Typinferenz in vielen Fällen nicht einmal Typen angeben müssen, um Codeunterstützung zu erhalten. Wenn Sie beispielsweise beginnen, der `Alert`-Komponentenaufruf eine `ms`-Eigenschaft hinzuzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Code-Hinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es darüber ein Problem melden:

![Typüberprüfung in VS Code - der ms-Variablen wurde ein nicht numerischer Wert zugewiesen](06-vscode-type-checking-in-components.png)

Das Anwendungsvorlage hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, und zwar von der Befehlszeile aus, was es ziemlich nützlich macht, um es in einer Continuous Integration (CI)-Pipeline auszuführen. Führen Sie einfach `npm run check` aus, um ungenutztes CSS zu überprüfen und A11y-Hinweise und TypeScript-Kompilierfehler zurückzugeben.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), erhalten Sie den folgenden Fehler:

![Check-Befehl, der in VS Code ausgeführt wird und einen Typfehler zeigt, die ms-Variable sollte eine Zahl zugewiesen bekommen](07-vscode-svelte-check.png)

Noch besser, wenn Sie es aus dem integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), führt <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> Klicken auf den Dateinamen Sie zur Zeile, die den Fehler enthält.

Sie können das `check`-Skript auch im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript ausgeführt, wann immer Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, damit es weiterhin Fehler melden kann, aber den anderen Terminalgebrauch nicht beeinträchtigt.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Möglichkeit, Typen ausschließlich auf der Grundlage ihrer Mitglieder in Beziehung zu setzen, auch wenn Sie den Typ nicht explizit definieren.

Wir werden einen `TodoType`-Typ definieren, um zu sehen, wie TypeScript durchsetzt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturelle Kompatibilität mit diesem aufweist.

1. Erstellen Sie im `src`-Ordner einen `types`-Ordner.
2. Fügen Sie darin eine `todo.type.ts`-Datei hinzu.
3. Geben Sie `todo.type.ts` den folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Die Svelte-Vorlage verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie das `export`/`import` Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Lesen Sie [diesen Abschnitt des Troubleshooting-Leitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für weitere Informationen.

4. Jetzt werden wir `TodoType` aus unserer `Todo.svelte`-Komponente verwenden. Fügen Sie zuerst das `lang="ts"` zu unserem `<script>`-Tag hinzu.
5. Lassen Sie uns den Typ `importieren` und verwenden, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` durch das Folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Jetzt werden wir aus `Todos.svelte` eine `Todo`-Komponente mit einem Literalen Objekt als Parameter instantiieren, bevor der Aufruf zur `MoreActions`-Komponente erfolgt, etwa so:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es weiß, dass es die von uns angegebene Typüberprüfung verwenden soll.

   Wir werden den folgenden Fehler erhalten:

   ![Typfehler in VS Code, Todo Type Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript beim Erstellen von Svelte-Projekten erhalten können.

Jetzt werden wir diese Änderungen rückgängig machen, um mit der Portierung unserer Anwendung nach TypeScript zu beginnen, damit wir nicht durch alle Prüfungswarnungen gestört werden.

1. Entfernen Sie das fehlerhafte To-do und das `lang='ts'` Attribut aus der `Todos.svelte` Datei.
2. Entfernen Sie außerdem den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir werden uns später darum kümmern.

## Portierung unserer To-do-Liste App nach TypeScript

Jetzt sind wir bereit, mit der Portierung unserer To-do-Liste App zu beginnen, um alle Funktionen zu nutzen, die TypeScript uns bietet.

Lassen Sie uns damit beginnen, das Check-Skript im Überwachungsmodus innerhalb des Projektstamms auszuführen:

```bash
npm run check -- --watch
```

Dies sollte etwas wie das Folgende ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass, wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, eine einfache Möglichkeit, mit der Portierung einer Svelte-Komponente zu beginnen, darin besteht, einfach das `<script lang='ts'>` oben in Ihrer Komponente hinzuzufügen und nach den drei gepunkteten Hinweisen zu suchen:

![VS Code-Screenshot, der zeigt, dass beim Hinzufügen von type="ts" zu einer Komponente, es Ihnen drei Punkte-Hinweise gibt](09-vscode-alert-hints.png)

### Alert.svelte

Lassen Sie uns mit unserer `Alert.svelte`-Komponente beginnen.

1. Fügen Sie `lang="ts"` zu Ihrem `<script>`-Tag der `Alert.svelte`-Komponente hinzu. Sie werden einige Warnungen in der Ausgabe des `check`-Skripts sehen:

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

2. Sie können diese beheben, indem Sie die entsprechenden Typen, etwa so, angeben:

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
   > Es ist nicht nötig, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus dem Standardwert ableitet.

### MoreActions.svelte

Jetzt machen wir dasselbe für die `MoreActions.svelte`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut hinzu, wie zuvor. TypeScript wird uns über die `todos`-Prop und die `t`-Variable im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den bereits definierten `TodoType` verwenden, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die Zeile `export let todos` durch das Folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Dennoch, wenn wir denken, dass es unseren Code lesbarer macht, könnten wir es so angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Die meiste Zeit wird TypeScript den Typ der reaktiven Variable korrekt ableiten können, aber manchmal könnten Sie einen "implizit hat einen 'any' Type"-Fehler bekommen, wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die getypte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ nicht in der reaktiven Zuweisung selbst angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Lesen Sie [Wie tippe ich reaktive Zuweisungen? / Ich bekomme einen "implizit hat Typ 'any' Fehler"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut zum `<script>`-Tag hinzu, wie üblich. Sie werden feststellen, dass es keine Warnungen gibt — TypeScript leitet den Typ der Filtervariable aus dem Standardwert ab. Aber wir wissen, dass nur drei gültige Werte für den Filter existieren: all, active und completed. Wir können TypeScript darüber informieren, indem wir ein Enum Filter erstellen.
2. Erstellen Sie eine Datei `filter.enum.ts` im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt werden wir dies in der `FilterButton`-Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch das Folgende:

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

Hier importieren wir einfach das `Filter` Enum und verwenden es anstelle der zuvor verwendeten Zeichenfolgenwerte.

### Todos.svelte

Wir werden auch das `Filter` Enum in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst das `lang='ts'` Attribut hinzu, wie zuvor.
2. Importieren Sie dann das `Filter` Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt verwenden wir es, wann immer wir auf den aktuellen Filter verweisen. Ersetzen Sie Ihre zwei filterbezogenen Blöcke durch das Folgende:

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

   Beginnen Sie mit dem Importieren des `TodoType` und informieren Sie TypeScript, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als Nächstes geben wir alle fehlenden Typen an. Die Variable `todosStatus`, die wir verwendet haben, um programmgesteuert auf die von der `TodosStatus`-Komponente bereitgestellten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>` Abschnitt so, dass er wie folgt aussieht:

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

Wir stoßen auf die folgenden Fehler im Zusammenhang mit dem Übergeben von `todos` an die Komponenten `TodosStatus.svelte` (und `Todo.svelte`):

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Dies liegt daran, dass die `todos`-Prop in der `TodosStatus` Komponente keinen Standardwert hat, sodass TypeScript abgeleitet hat, dass sie vom Typ `undefined` ist, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'` Attribut hinzu.
2. Dann importieren Sie den `TodoType` und deklarieren die `todos` Prop als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>` Abschnitts durch das Folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir spezifizieren auch das `headingEl`, das wir verwendet haben, um es an das Heading-Tag zu binden, als `HTMLElement`. Aktualisieren Sie die Zeile `let headingEl` wie folgt:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler bemerken, der sich auf das Setzen des `tabindex` Attributs bezieht. Das liegt daran, dass TypeScript den `<h2>`-Element Typ überprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, tabindex erwartet einen Typ von Nummer, nicht Zeichenfolge](10-vscode-tabindex-hint.png)

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, so:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es fälschlicherweise in eine Zeichenfolgenvariable zuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Wie üblich fügen Sie das `lang='ts'` Attribut hinzu.
2. Die Warnung zeigt an, dass wir einen Typ für die `nameEl` Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement` wie folgt:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt in dieser Datei müssen wir den richtigen Typ für unsere `autofocus` Variable angeben. Aktualisieren Sie ihre Definition wie folgt:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` ausgibt, durch das Aufrufen der `Todo.svelte`-Komponente ausgelöst. Lassen Sie uns sie beheben.

1. Öffnen Sie die Datei `Todo.svelte`, und fügen Sie das `lang='ts'` Attribut hinzu.
2. Importieren Sie den `TodoType` und setzen Sie den Typ der `todo` Prop. Ersetzen Sie die Zeile `export let todo` durch das Folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der `update()`-Funktion `updatedTodo`-Variable zu definieren. Dies kann etwas knifflig sein, da `updatedTodo` nur die aktualisierten Attribute der `todo` enthält. Das bedeutet, dass es kein vollständiges `todo` ist — es hat nur eine Teilmenge der Eigenschaften eines `todo`.

   Für diese Art von Fällen bietet TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html), um es einfacher zu machen, diese gängigen Transformationen anzuwenden. Was wir jetzt brauchen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) Utility, das es uns ermöglicht, alle Teilmengen eines gegebenen Typs darzustellen. Das Partial Utility gibt einen neuen Typ zurück, basierend auf dem Typ `T`, bei dem jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der Funktion `update()` — aktualisieren Sie Ihre wie folgt:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit sagen wir TypeScript, dass die `updatedTodo` Variable eine Teilmenge der `TodoType` Eigenschaften enthält.

4. Jetzt sagt uns svelte-check, dass wir den Typ unserer Aktionsfunktionsparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die Node-Variable als `HTMLElement` Typ definieren. Ersetzen Sie in den beiden oben genannten Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die `actions.js` Datei.

1. Benennen Sie sie in `actions.ts` um und geben Sie den Typ des Node-Params an. Es sollte am Ende so aussehen:

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

2. Aktualisieren Sie jetzt `Todo.svelte` und `NewTodo.svelte`, wo wir die actions-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In jedem Fall sollte es am Ende so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Jetzt müssen wir die `stores.js` und `localStore.js` Dateie nach TypeScript migrieren.

Tipp: das Skript `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) Werkzeug verwendet, überprüft nur die `.svelte` Dateien unserer Anwendung. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, wodurch der TypeScript-Compiler angewiesen wird, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Beginnen wir mit `stores.js`.

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

3. Denken Sie daran, die `import`-Anweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Lassen Sie einfach die `.js`-Erweiterung weg, so:

   ```js
   import { todos } from "../stores";
   ```

Jetzt zu `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` so:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie, indem Sie die Datei in `localStore.ts` umbenennen.
2. TypeScript sagt uns, dass wir den Typ der `key`, `initial` und `value`-Variablen angeben müssen. Die erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenfolge sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das in eine gültige JSON-Zeichenfolge mit der Methode [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) konvertiert werden kann, was jedes JavaScript-Objekt mit ein paar Einschränkungen bedeutet: z.B. sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Also erstellen wir den Typ `JsonValue`, um diese Bedingungen anzugeben.

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

   Der `|`-Operator lässt uns Variablen deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte eine Zeichenfolge, eine Zahl, ein Boolean usw. sein. In diesem Fall machen wir auch Gebrauch von rekursiven Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` und auch ein Objekt mit Eigenschaften vom Typ `JsonValue` haben kann.

4. Wir werden unseren `JsonValue`-Typ importieren und ihn entsprechend verwenden. Aktualisieren Sie Ihre `localStore.ts`-Datei so:

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

Wenn wir jetzt versuchen, einen `localStore` mit etwas zu erstellen, das nicht in JSON über `JSON.stringify()` konvertiert werden kann, z.B. ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` darüber beschweren:

![VS Code zeigt einen Fehler mit der Verwendung unseres Stores - es schlägt fehl, wenn versucht wird, einen lokalen Speicherwert auf etwas einzustellen, das nicht mit JSON stringify kompatibel ist](11-vscode-invalid-store.png)

Und das Beste von allem, es wird sogar mit der [`$store` Auto-Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktionieren. Wenn wir versuchen, einen ungültigen Wert in unserem `todos` Store mit der `$store` Syntax zu speichern, etwa so:

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

Das ist ein weiteres Beispiel dafür, wie das Angeben von Typen unseren Code robuster machen kann und uns helfen kann, mehr Fehler zu erkennen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere ganze Anwendung so konvertiert, dass sie TypeScript verwendet.

## Unsere Stores mit Generics kugelsicher machen

Unsere Stores wurden bereits auf TypeScript portiert, aber wir können besser werden. Wir sollten keinen beliebigen Wert speichern müssen — wir wissen, dass der Alert-Store Zeichenfolgen-Nachrichten enthalten sollte und der To-dos-Store ein Array von `TodoType`, usw. Wir können TypeScript dazu bringen, dies mit [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) durchzusetzen. Lassen Sie uns mehr herausfinden.

### Verstehen von TypeScript Generics

Generics ermöglichen es Ihnen, wiederverwendbaren Code zu erstellen, der mit einer Vielzahl von Typen anstelle eines einzelnen Typs arbeitet. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: sie werden in spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben dargestellt. Generische Typen ermöglichen es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein kurzes Beispiel sehen, eine einfache `Stack`-Klasse, die uns erlaubt, `push` und `pop` Elemente zu verwenden, etwa so:

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

In diesem Fall ist `elements` ein Array vom Typ `any` und dementsprechend empfangen und geben die `push()` und `pop()`-Methoden beide eine Variable vom Typ `any` zurück. Es ist also vollkommen gültig, etwas wie das Folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen `Stack` hätten, der nur mit dem Typ `string` arbeiten würde? Wir könnten Folgendes tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir einen Stack mit Typen handhaben, die wir noch nicht kennen und die vom Verbraucher definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generics verwenden.

Das ist unsere `Stack`-Klasse, neu implementiert unter Verwendung von Generics:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann wie einen normalen spezifischen Typ. Jetzt ist `elements` ein Array vom Typ `T`, und `push()` und `pop()` empfangen und geben eine Variable vom Typ `T` zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und wird einen Fehler ausgeben, wenn wir versuchen, etwas anderes zu pushen:

![Argument von Typ hello ist nicht zuweisbar für Parameter von Typ Nummer](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen anhand ihrer Verwendung ableiten. Generics unterstützen auch Standardwerte und Einschränkungen.

Generics sind eine leistungsstarke Funktion, die es unserem Code ermöglicht, sich von den spezifischen verwendeten Typen zu abstrahieren, wodurch er wiederverwendbarer und generischer wird, ohne auf Typensicherheit zu verzichten. Um mehr darüber zu erfahren, sehen Sie sich die [TypeScript Einführung zu Generics](https://www.typescriptlang.org/docs/handbook/generics.html) an.

### Verwenden von Svelte Stores mit Generics

Svelte-Stores unterstützen Generics von Haus aus. Und durch die generische Typinferenz können wir davon profitieren, ohne überhaupt unseren Code anfassen zu müssen.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ unseren `$alert` Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument von Typ 9999 ist nicht zuweisbar für Parameter von Typ string](13-vscode-generic-alert-error.png)

Das liegt daran, dass, als wir unseren Alert-Store in der `stores.ts`-Datei mit definiert haben:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript den generischen Typ auf `string` abgeleitet hat. Wenn wir darüber explizit sein wollten, könnten wir Folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt machen wir unseren `localStore` Store so, dass er Generics unterstützt. Denken Sie daran, dass wir den `JsonValue` Typ definiert haben, um die Verwendung unseres `localStore` Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir den Verbrauchern von `localStore` erlauben, den Typ der zu speichernden Daten anzugeben, aber anstatt mit einem beliebigen Typ zu arbeiten, sollten sie mit dem `JsonValue` Typ übereinstimmen. Wir werden dies mit einer generischen Einschränkung angeben, etwa so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // …
};
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue` Typ kompatibel sein muss. Dann verwenden wir den `T` Typ entsprechend.

Unsere `localStore.ts` Datei wird so enden — versuchen Sie nun den neuen Code in Ihrer Version:

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

Und dank der generischen Typinferenz weiß TypeScript bereits, dass unser `$todos` Store ein Array von `TodoType` enthalten soll:

![Todo Typ-Objekteigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Ein weiteres Mal, wenn wir darüber explizit sein wollten, könnten wir das in der `stores.ts` Datei so tun:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das reicht für unsere kurze Tour durch TypeScript Generics.

## Der Code bis jetzt

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits gesagt, ist TypeScript noch nicht im REPL verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-do-Liste Anwendung genommen und auf TypeScript portiert.

Zuerst haben wir über TypeScript gelernt und welche Vorteile es uns bringen kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt konvertiert, um TypeScript zu nutzen — unsere To-do-Liste App.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check` Werkzeug verwendet, um TypeScript-Problemen von der Befehlszeile aus zu überprüfen.

Im nächsten Artikel lernen wir, wie man unsere App kompiliert und in die Produktion bereitstellt. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um weiter über Svelte zu lernen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
