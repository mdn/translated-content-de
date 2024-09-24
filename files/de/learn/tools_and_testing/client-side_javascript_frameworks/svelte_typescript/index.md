---
title: TypeScript-Unterstützung in Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir etwas über Svelte-Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Webspeicher zu speichern. Wir haben uns auch angesehen, wie man die Übergangsdirektive verwendet, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Jetzt lernen wir, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es bieten kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir über unsere App und sehen, welche Änderungen wir vornehmen müssen, um die Funktionen von TypeScript vollständig zu nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal- oder Befehlszeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie TypeScript bei der Entwicklung von Svelte-Anwendungen konfigurieren und verwenden.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung voll funktionsfähig ist und die Umstellung auf TypeScript völlig optional ist. Es gibt verschiedene Meinungen darüber, und in diesem Kapitel werden wir kurz die Vor- und Nachteile der Verwendung von TypeScript besprechen. Selbst wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel nützlich sein, um zu lernen, was es zu bieten hat, und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie überhaupt nicht an TypeScript interessiert sind, können Sie zum nächsten Kapitel übergehen, wo wir uns verschiedene Optionen zur Bereitstellung unserer Svelte-Anwendungen ansehen werden, weiterführende Ressourcen und mehr.

## Coden Sie mit uns mit

### Git

Klonen Sie das GitHub-Repo (falls Sie es nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie folgendes aus:

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist [TypeScript-Unterstützung im REPL derzeit nicht verfügbar](https://github.com/sveltejs/sites/issues/156).

## TypeScript: optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist ein Superset von JavaScript, das Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung bieten können, um häufige Fehler beim Eintippen des Codes zu erkennen.

Das Beste daran ist, dass JavaScript-Code auch gültiger TypeScript-Code ist; TypeScript ist ein Superset von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie werden einfach funktionieren.

Unser TypeScript-Code wird überall dort ausgeführt werden können, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code zu klassischem JavaScript. Das bedeutet, dass es TypeScript-Code parst und den äquivalenten klassischen JavaScript-Code erstellt, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code zu JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Die Unterstützung für TypeScript war lange Zeit die am meisten nachgefragte Funktion von Svelte. Dank der harten Arbeit des Svelte-Teams zusammen mit vielen Mitwirkenden haben wir eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript), die bereit zum Testen ist. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten können, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Früherkannte Fehler: Der Compiler überprüft die Typen zur Kompilierzeit und liefert Fehlermeldungen.
- Lesbarkeit: Statische Typisierung gibt dem Code mehr Struktur, macht ihn selbstdokumentierend und lesbarer.
- Reiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sicherere Umgestaltung: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen, und helfen Ihnen, während Sie große Teile Ihres Codes umgestalten.
- Typinferenz: Ermöglicht die Nutzung vieler TypeScript-Funktionen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen zu klassischem JavaScript, sodass Sie sie auch in Benutzeragenten verwenden können, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierzeit überprüft und aus dem generierten Code entfernt.
- Steile Lernkurve: Obwohl TypeScript ein Superset von JavaScript und keine völlig neue Sprache ist, gibt es eine beträchtliche Lernkurve, besonders wenn Sie überhaupt keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Auch wenn Typen Ihnen helfen können, mehrere Bugs zu finden, ist TypeScript kein wahrer Ersatz für eine umfassende Reihe automatisierter Tests.
- Boilerplate-Code: Arbeiten mit Typen, Klassen, Interfaces und Generics kann zu übermäßig komplexen Codebasen führen.

Es scheint eine breite Übereinstimmung darüber zu geben, dass TypeScript besonders gut für großangelegte Projekte geeignet ist, bei denen viele Entwickler in derselben Codebasis arbeiten. Und es wird tatsächlich in mehreren großangelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Trotzdem bevorzugen einige Entwickler es, es auch in kleinen Projekten wie dem zu verwenden, das wir entwickeln.

Letztendlich liegt es an Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Anhaltspunkte zu geben, um sich darüber eine Meinung zu bilden.

## Erstellen eines Svelte-TypeScript-Projekts von Grund auf

Sie können ein neues Svelte-TypeScript-Projekt mit der [Standardvorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern - es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starterprojekt, das TypeScript-Unterstützung beinhaltet und welches Sie dann nach Belieben modifizieren können.

Dann müssen Sie npm anweisen, Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um einem bestehenden Svelte-Projekt TypeScript-Unterstützung hinzuzufügen, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner im Stammverzeichnis Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um zu beginnen, unsere Anwendung auf TypeScript umzustellen.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Listenanwendung in JavaScript zu erhalten, bevor Sie sie zu TypeScript umstellen.

Gehen Sie zum Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

```bash
npx degit sveltejs/template/scripts scripts       # Skriptdatei in einen Skriptordner herunterladen

node scripts/setupTypeScript.js                   # Ausführen
# In TypeScript konvertiert.
```

Sie müssen Ihren Paketmanager neu starten, um loszulegen.

```bash
npm install                                       # Neue Abhängigkeiten herunterladen

npm run dev                                       # Starten Sie die App im Entwicklungsmodus
```

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript umwandeln möchten. Beachten Sie, dass die Svelte-Community die TypeScript-Unterstützung von Svelte ständig verbessert. Daher sollten Sie regelmäßig `npm update` ausführen, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie bei der Arbeit mit TypeScript in einer Svelte-Anwendung Probleme haben, sehen Sie sich diesen [Abschnitt zur Fehlerbehebung/FAQ über TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq) an.

Wie bereits erwähnt, ist TypeScript ein Superset von JavaScript, sodass Ihre Anwendung ohne Modifikationen ausgeführt wird. Derzeit werden Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausführen, ohne die Vorteile der Funktionen zu nutzen, die TypeScript bietet. Sie können jetzt damit beginnen, schrittweise Typen hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es von einer Svelte-Komponente aus verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es von regulären JavaScript-Dateien aus zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` auf `.ts`. Sie müssen auch jede entsprechende `import`-Anweisung aktualisieren, um die `.ts`-Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler auslösen, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden. Wenn Sie also eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Sehen Sie den Abschnitt [Modulauflösung für Bundler, TypeScript-Runtimes und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Markup-Abschnitten von Komponenten wird [noch nicht unterstützt](https://github.com/sveltejs/svelte/issues/4701). Sie müssen JavaScript aus dem Markup verwenden und TypeScript im `<script lang='ts'>`-Abschnitt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript bietet Code-Editoren und IDEs viele Informationen, um eine benutzerfreundlichere Entwicklungsumgebung bereitzustellen.

Wir werden jetzt [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen kurzen Test durchzuführen und zu sehen, wie wir während des Schreibens von Komponenten Autovervollständigungshinweise und Typüberprüfung erhalten können.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir Ihnen auch Anweisungen zur Verwendung der TypeScript-Fehlerprüfung über das Terminal an, die etwas später kommen.

Es wird daran gearbeitet, die Unterstützung von TypeScript in Svelte-Projekten in mehreren Code-Editoren zu integrieren. Die umfangreichste Unterstützung ist derzeit in der [Svelte for VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektionen, Refactoring, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, welches eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, öffnen Sie das Code-Editorfenster vom Stammverzeichnis des Projektordners aus mit `code .` (Der Punkt am Ende weist VS Code an, den aktuellen Ordner zu öffnen). VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen zur Installation gibt.

![Dialogbox, die sagt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder zur Anzeige einer Liste](01-vscode-extension-recommendations.png)

Durch Klicken auf _Install all_ wird Svelte for VS Code installiert.

![Svelte for VS Code Erweiterungsinformationen](02-svelte-for-vscode.png)

Wir können auch sehen, dass das `setupTypeScript.js`-Skript ein paar Änderungen an unserem Projekt vorgenommen hat. Die `main.js`-Datei wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot zeigt, dass beim Überfahren einer Komponente mit der Maus Hinweise angezeigt werden](03-vscode-hints-in-main-ts.png)

Wir erhalten auch die Typüberprüfung kostenlos. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (zum Beispiel ein Tippfehler wie `traget` statt `target`), wird TypeScript eine Beschwerde äußern:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget zugewiesen](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das `lang="ts"`-Attribut zum `<script>`-Tag hinzugefügt. Dank der Typinferenz müssen wir in vielen Fällen nicht einmal Typen angeben, um Code-Unterstützung zu erhalten. Zum Beispiel, wenn Sie beginnen, eine `ms`-Eigenschaft zum `Alert`-Komponentenaufruf hinzuzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code-Typinferenz und Codehinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es Sie darauf hinweisen:

![Typüberprüfung in VS Code - der ms-Variable wurde ein nicht-numerischer Wert zugewiesen](06-vscode-type-checking-in-components.png)

Das Anwendungsvorlage hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise durch einen Code-Editor angezeigt werden, aus der Befehlszeile heraus, was es ziemlich nützlich macht, es in einer kontinuierlichen Integrationspipeline (CI) auszuführen. Führen Sie einfach `npm run check` aus, um ungenutztes CSS zu überprüfen und A11y-Hinweise und TypeScript-Kompilierfehler zurückzugeben.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), erhalten Sie den folgenden Fehler:

![Überprüfungskommando, das in VS Code ausgeführt wird und einen Typfehler anzeigt, ms-Variable sollte eine Zahl sein](07-vscode-svelte-check.png)

Noch besser, wenn Sie es über das integrierte Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), können Sie durch <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> klicken auf den Dateinamen zur Zeile mit dem Fehler navigieren.

Sie können das `check`-Skript auch im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript ausgeführt, wann immer Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, damit es weiterhin Fehler meldet, aber die Verwendung des Terminals nicht stört.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Methode, um Typen basierend nur auf ihren Mitgliedern zu vergleichen, auch wenn Sie den Typ nicht explizit definieren.

Wir definieren einen `TodoType`-Typ, um zu sehen, wie TypeScript erzwingt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell damit kompatibel ist.

1. Erstellen Sie im `src`-Ordner einen `types`-Ordner.
2. Fügen Sie eine Datei `todo.type.ts` darin hinzu.
3. Geben Sie der Datei `todo.type.ts` folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Die Svelte-Vorlage verwendet `svelte-preprocess` 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie die `export`/`import`-Typsyntax verwenden, um Typen und Schnittstellen zu importieren. Lesen Sie [diesen Abschnitt des Fehlerbehebungsleitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für mehr Informationen.

4. Jetzt verwenden wir `TodoType` von unserer `Todo.svelte`-Komponente aus. Fügen Sie zuerst das `lang="ts"` zu unserem `<script>`-Tag hinzu.
5. Importieren Sie den Typ und verwenden Sie ihn, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` durch folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht zulässig ist und ausgelassen wurde.

6. Jetzt werden wir von `Todos.svelte` aus eine `Todo`-Komponente mit einem literalen Objekt als Parameter vor dem Aufruf der `MoreActions`-Komponente instanziieren, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es die Typprüfung verwendet, die wir angegeben haben.

   Wir erhalten den folgenden Fehler:

   ![Typfehler in VS Code, Todo Type-Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte erstellen.

Jetzt werden wir diese Änderungen wieder rückgängig machen, um unsere Anwendung auf TypeScript umzustellen, damit wir nicht von all den Prüfungswarnungen gestört werden.

1. Entfernen Sie das fehlerhafte To-Do und das `lang='ts'`-Attribut aus der Datei `Todos.svelte`.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus der Datei `Todo.svelte`.

Wir werden uns später ordnungsgemäß darum kümmern.

## Portieren unserer To-Do-Listen-App zu TypeScript

Jetzt sind wir bereit, unsere To-Do-Listen-Anwendung zu portieren, um alle Funktionen zu nutzen, die TypeScript uns bietet.

Lassen Sie uns beginnen, indem wir das Prüfskript im Überwachungsmodus im Projektstamm ausführen:

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

Beachten Sie, dass ein einfacher Weg, um mit der Portierung einer Svelte-Komponente zu beginnen, darin besteht, einfach das `<script lang='ts'>` oben in Ihrer Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen:

![VS Code-Screenshot zeigt, dass beim Hinzufügen von type='ts' zu einer Komponente, dreipunktige Warnhinweise angezeigt werden](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte`-Komponente.

1. Fügen Sie `lang="ts"` in das `<script>`-Tag Ihrer `Alert.svelte`-Komponente ein. Sie werden einige Warnungen in der Ausgabe des Prüfskripts sehen:

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
       if (!message) {               // Alert ausblenden, wenn die Nachricht leer ist
   ```

   > [!NOTE]
   > Es ist nicht notwendig, den Typ `ms` mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Jetzt machen wir dasselbe für die `MoreActions.svelte`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut hinzu, wie zuvor. TypeScript wird uns auf die `todos`-Eigenschaft und die `t`-Variable im Aufruf von `todos.filter((t) =>...)` hinweisen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir verwenden den `TodoType`, den wir bereits definiert haben, um TypeScript mitzuteilen, dass `todos` ein `TodoType` Array ist. Ersetzen Sie die `export let todos`-Zeile durch Folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Dennoch, wenn wir der Meinung sind, dass es unseren Code einfacher zu lesen macht, könnten wir es wie folgt angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Meistens kann TypeScript den reaktiven Variablentyp korrekt ableiten, aber manchmal erhalten Sie einen "implizit hat den Typ 'any' Fehler", wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ in der reaktiven Zuweisung selbst nicht angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Für mehr Informationen lesen Sie [Wie typisiere ich reaktive Zuweisungen? / Ich erhalte einen "implizit hat den Typ 'any'" Fehler](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut zum `<script>`-Tag hinzu, wie üblich. Sie werden feststellen, dass es keine Warnungen gibt - TypeScript leitet den Typ der Filtervariable aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Wir können TypeScript darüber informieren, indem wir ein `enum Filter` erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt verwenden wir das von der `FilterButton`-Komponente aus. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch Folgendes:

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

Hier importieren wir das `Filter`-Enum und verwenden es anstelle der vorher verwendeten Zeichenfolgenwerte.

### Todos.svelte

Wir werden das `Filter`-Enum auch in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zunächst das `lang='ts'`-Attribut hinzu, wie zuvor.
2. Als nächstes importieren wir das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter den vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt verwenden wir es, wann immer wir aktuell referenzieren. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch das Folgende:

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

4. `check` wird uns immer noch einige Warnungen aus `Todos.svelte` geben. Lassen Sie uns diese beheben.

   Beginnen Sie damit, den `TodoType` zu importieren und TypeScript mitzuteilen, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes werden wir alle fehlenden Typen angeben. Die Variable `todosStatus`, die wir verwendet haben, um methoden zu verwenden, die von der `TodosStatus`-Komponente bereitgestellt werden, ist vom Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>`-Abschnitt der Datei:

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

   let todosStatus: TodosStatus; // Referenz zu TodosStatus-Instanz

   $: newTodoId =
     todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;

   function addTodo(name: string) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
     $alert = `Todo '${name}' has been added`;
   }

   function removeTodo(todo: TodoType) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // Fokus auf Überschrift geben
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

Wir stoßen auf folgende Fehler im Zusammenhang mit der Übergabe von `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`) Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Das liegt daran, dass die `todos`-Eigenschaft in der `TodosStatus`-Komponente keinen Standardwert hat, sodass TypeScript diese als `undefined` inferiert hat, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann den `TodoType` und erklären Sie die `todos`-Eigenschaft als ein Array von Typ `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts durch Folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir werden auch das `headingEl` als `HTMLElement` angeben, das wir verwendet haben, um es an das Überschrift-Tag zu binden. Aktualisieren Sie die `let headingEl` Zeile mit Folgendem:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler bemerken, der angezeigt wird, wenn wir das `tabindex`-Attribut setzen. Das liegt daran, dass TypeScript das `<h2>`-Element und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, tabindex erwartet einen Wert vom Typ Zahl und nicht Zeichenfolge](10-vscode-tabindex-hint.png)

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, so:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es fälschlicherweise einer Zeichenfolgenvariablen zuweisen.

### NewTodo.svelte

Als Nächstes kümmern wir uns um `NewTodo.svelte`.

1. Fügen Sie wie gewohnt das `lang='ts'`-Attribut hinzu.
2. Die Warnung zeigt uns an, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement`:

   ```ts
   let nameEl: HTMLElement; // Referenz zum Namen-Input-Element
   ```

3. Zuletzt in dieser Datei müssen wir den korrekten Typ für unsere `autofokus`-Variable angeben. Aktualisieren Sie die Definition:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Die einzigen Warnungen, die `npm run check` ausgibt, werden durch den Aufruf der `Todo.svelte`-Komponente ausgelöst. Lassen Sie uns diese beheben.

1. Öffnen Sie die `Todo.svelte`-Datei und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie den `TodoType` und setzen Sie den Typ der `todo`-Eigenschaft. Ersetzen Sie die Zeile `export let todo` durch Folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, wird von TypeScript ausgelöst, das uns anweist, den Typ der `update()`-Funktion für die `updatedTodo`-Variable zu definieren. Das kann ein wenig knifflig sein, weil `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es kein vollständiges `todo` ist - es hat nur eine Teilmenge von `todo`-Eigenschaften.

   Für diese Art von Fällen bietet TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html), um diese häufigen Transformationen zu erleichtern. Was wir jetzt benötigen, ist der [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) Utility-Typ, der es uns ermöglicht, alle Teilmengen eines bestimmten Typs darzustellen. Die Partial-Utility-Typ gibt einen neuen Typ basierend auf dem Typ `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()`-Funktion - aktualisieren Sie Ihre, so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // wendet Änderungen auf todo an
     dispatch("update", todo); // Aktualisierungsereignis auslösen
   }
   ```

   Auf diese Weise weisen wir TypeScript darauf hin, dass die `updatedTodo`-Variable eine Teilmenge der `TodoType`-Eigenschaften aufweisen wird.

4. Svelte-check sagt uns jetzt, dass wir den Typ unserer Action-Funktionsparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die Variable node als Typ `HTMLElement` definieren. Ersetzen Sie in den beiden angegebenen Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um das Datei `actions.js`.

1. Benennen Sie es in `actions.ts` um und geben Sie den Typ des Knotenparameters an. Es sollte so aussehen:

   ```ts
   // actions.ts
   export function selectOnFocus(node: HTMLInputElement) {
     if (node && typeof node.select === "function") {
       // sicherstellen, dass node definiert ist und eine select()-Methode hat
       const onFocus = () => node.select(); // Ereignishandler
       node.addEventListener("focus", onFocus); // wenn node den Fokus erhält, onFocus() aufrufen
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // dies wird ausgeführt, wenn der node aus dem DOM entfernt wird
       };
     }
   }
   ```

2. Aktualisieren Sie `Todo.svelte` und `NewTodo.svelte` an den Stellen, an denen wir die Aktionen-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In beiden Fällen sollte es so enden:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Nun müssen wir die Dateien `stores.js` und `localStore.js` zu TypeScript migrieren.

Tipp: Das Skript `npm run check`, das das Tool [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) verwendet, wird nur die `.svelte`-Dateien unserer Anwendung überprüfen. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noemit` ausführen, was dem TypeScript-Compiler sagt, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays auf `TodoType[]`. So sieht der Inhalt aus:

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

3. Denken Sie daran, die Importanweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Entfernen Sie einfach die `.js`-Erweiterung, zum Beispiel:

   ```js
   import { todos } from "../stores";
   ```

Jetzt die Datei `localStore.js`.

Aktualisieren Sie die Importanweisung in `stores.ts` wie folgt:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie damit, die Datei in `localStore.ts` umzubenennen.
2. TypeScript zeigt uns an, den Typ der Variablen `key`, `initial` und `value` anzugeben. Die erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenfolge sein.

   Aber `initial` und `value` sollten jedes Objekt sein können, das mit der Methode [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in einen gültigen JSON-String konvertiert werden kann, was bedeutet, jedes JavaScript-Objekt mit einigen Einschränkungen: z.B. `undefined`, Funktionen und Symbole sind keine gültigen JSON-Werte.

   Deshalb werden wir den Typ `JsonValue` erstellen, um diese Bedingungen festzulegen.

   Erstellen Sie die Datei `json.type.ts` im `types`-Ordner.

3. Geben Sie ihr folgenden Inhalt:

   ```ts
   export type JsonValue =
     | string
     | number
     | boolean
     | null
     | JsonValue[]
     | { [key: string]: JsonValue };
   ```

   Der `|`-Operator erlaubt uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern können. Ein `JsonValue` könnte eine Zeichenfolge, eine Zahl, ein Boolescher Wert usw. sein. In diesem Fall verwenden wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` und auch ein Objekt mit Eigenschaften vom Typ `JsonValue` haben kann.

4. Wir importieren unseren `JsonValue`-Typ und verwenden ihn entsprechend. Aktualisieren Sie Ihre `localStore.ts`-Datei wie folgt:

   ```ts
   // localStore.ts
   import { writable } from "svelte/store";

   import type { JsonValue } from "./types/json.type";

   export const localStore = (key: string, initial: JsonValue) => {
     // erhält den Schlüssel des lokalen Speichers und einen Anfangswert

     const toString = (value: JsonValue) => JSON.stringify(value, null, 2); // Hilfsfunktion
     const toObj = JSON.parse; // Hilfsfunktion

     if (localStorage.getItem(key) === null) {
       // Element nicht im lokalen Speicher vorhanden
       localStorage.setItem(key, toString(initial)); // lokalen Speicher mit Anfangswert initialisieren
     }

     const saved = toObj(localStorage.getItem(key)); // in Objekt umwandeln

     const { subscribe, set, update } = writable(saved); // den zugrunde liegenden writable Store erstellen

     return {
       subscribe,
       set: (value: JsonValue) => {
         localStorage.setItem(key, toString(value)); // auch im lokalen Speicher als Zeichenfolge speichern
         return set(value);
       },
       update,
     };
   };
   ```

Nun, wenn wir versuchen, eine `localStore`-Instanz mit etwas zu erstellen, das nicht in JSON konvertiert werden kann via `JSON.stringify()`, zum Beispiel mit einem Objekt, das eine Funktion als Property hat, wird VS Code/`validate` darauf hinweisen:

![VS Code zeigt einen Fehler beim Verwenden unseres Stores - es schlägt fehl, wenn versucht wird, einen lokalen Speicherwert auf etwas zu setzen, das nicht mit JSON.stringify konvertierbar ist](11-vscode-invalid-store.png)

Das Beste ist, dass es sogar mit der [`$store` Auto-Subscription Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) arbeitet. Wenn wir versuchen, einen ungültigen Wert in unserem `todos`-Store unter Verwendung der `$store`-Syntax zu speichern, wie dies:

```svelte
<!-- App.svelte -->
<script lang="ts">
  import Todos from "./components/Todos.svelte";
  import Alert from "./components/Alert.svelte";

  import { todos } from "./stores";

  // dies ist ungültig, da der Inhalt nicht mit JSON.stringify in JSON konvertiert werden kann
  $todos = { handler: () => {} };
</script>
```

Das Prüfskript meldet den folgenden Fehler:

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

Dies ist ein weiteres Beispiel dafür, wie die Angabe von Typen unseren Code robuster machen und uns helfen kann, mehr Fehler zu erkennen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung konvertiert, um TypeScript zu verwenden.

## Unsere Stores mit Generics absichern

Unsere Stores wurden bereits zu TypeScript portiert, aber wir können noch mehr machen. Wir sollten keinen beliebigen Wert speichern müssen - wir wissen, dass der alert-Store Zeichenfolgenmeldungen enthalten sollte und der To-Dos-Store ein Array von `TodoType`, usw. enthält. Wir können TypeScript dazu verwenden, dies durch [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) durchzusetzen. Lassen Sie uns mehr darüber erfahren.

### Verständnis von TypeScript-Generics

Generics ermöglichen es Ihnen, wiederverwendbare Code-Komponenten zu erstellen, die mit einer Vielzahl von Typen anstelle eines einzigen Typs arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generic-Typen werden als Parameter mit spezieller Syntax übergeben: Sie werden innerhalb von spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generic-Typen ermöglichen es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein kurzes Beispiel sehen, eine einfache `Stack`-Klasse, die es uns ermöglicht, `push`- und `pop`-Elemente zu verwenden, so:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und entsprechend empfangen und geben die `push()`- und `pop()`-Methoden eine Variable vom Typ `any` zurück. Daher ist es vollkommen gültig, so etwas zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen `Stack` haben möchten, der nur mit Typ `string` arbeitet? Wir könnten das Folgende machen:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollen, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnte man mit einem Stack von Typen umgehen, die wir noch nicht kennen und die vom Verbraucher definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generics verwenden.

Das ist unsere `Stack`-Klasse, die mit Generics neu implementiert wurde:

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

Wir definieren einen Generic-Typ `T` und verwenden ihn dann auf die gleiche Weise, wie wir es mit einem spezifischen Typ tun würden. Jetzt ist elements ein Array vom Typ `T`, und `push()` und `pop()` empfangen und geben beide eine Variable vom Typ `T` zurück.

So verwenden wir unseren generischen `Stack`:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und wird einen Fehler ausgeben, wenn wir versuchen, etwas anderes zu pushen:

![Argument von Typ hello ist nicht zuweisbar zu Parameter vom Typ number](12-vscode-generic-stack-error.png)

TypeScript kann generische Typen auch durch Gebrauch ableiten. Generics unterstützen auch Standardwerte und Einschränkungen.

Generics sind ein leistungsstarkes Merkmal, das es unserem Code ermöglicht, sich von den spezifischen Typen abzuheben, die verwendet werden, und ihn allgemeiner und wiederverwendbarer zu machen, ohne auf die Typsicherheit zu verzichten. Um mehr darüber zu erfahren, sehen Sie sich das [TypeScript Introduction to Generics](https://www.typescriptlang.org/docs/handbook/generics.html) an.

### Svelte-Stores mit Generics verwenden

Svelte-Stores unterstützen Generics von Haus aus. Und, aufgrund der generischen Typinferenz, können wir diese nutzen, ohne unseren Code überhaupt zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ unserem `$alert` Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument von Typ 9999 ist nicht zuweisbar zu Parameter vom Typ string](13-vscode-generic-alert-error.png)

Das liegt daran, dass wir unseren alert-Store in der `stores.ts`-Datei definiert haben mit:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript hat den generischen Typ als `string` abgeleitet. Wenn wir explizit sein wollten, könnten wir Folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt lassen wir unseren `localStore` Store Generics unterstützen. Denken Sie daran, dass wir den `JsonValue`-Typ definiert haben, um die Verwendung unserer `localStore`-Speicher mit Werten zu verhindern, die nicht mit `JSON.stringify()` persistiert werden können. Jetzt möchten wir, dass die Benutzer von `localStore` den Typ der Daten festlegen können, die gespeichert werden sollen, aber anstatt mit einem beliebigen Typ zu arbeiten, sollten sie dem `JsonValue`-Typ entsprechen. Wir werden dies mit einer generischen Einschränkung festlegen, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den `T`-Typ entsprechend.

Unsere `localStore.ts`-Datei wird letztendlich so aussehen - versuchen Sie den neuen Code jetzt in Ihrer Version:

```ts
// localStore.ts
import { writable } from "svelte/store";

import type { JsonValue } from "./types/json.type";

export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // empfängt den Schlüssel des lokalen Speichers und einen Anfangswert

  const toString = (value: T) => JSON.stringify(value, null, 2); // Hilfsfunktion
  const toObj = JSON.parse; // Hilfsfunktion

  if (localStorage.getItem(key) === null) {
    // Element im lokalen Speicher nicht vorhanden
    localStorage.setItem(key, toString(initial)); // lokalen Speicher mit Anfangswert initialisieren
  }

  const saved = toObj(localStorage.getItem(key)); // in Objekt umwandeln

  const { subscribe, set, update } = writable<T>(saved); // zugrunde liegenden writable Store erstellen

  return {
    subscribe,
    set: (value: T) => {
      localStorage.setItem(key, toString(value)); // auch im lokalen Speicher als Zeichenfolge speichern
      return set(value);
    },
    update,
  };
};
```

Und dank der generischen Typinferenz weiß TypeScript bereits, dass unser `$todos`-Store ein Array von `TodoType` enthalten sollte:

![Todo Type-Objekteigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Noch einmal, wenn wir explizit sein wollten, könnten wir dies in der Datei `stores.ts` so tun:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war unser kurzer Überblick über TypeScript-Generics.

## Der bisherige Code

### Git

Um den Zustand des Codes am Ende dieses Artikels zu sehen, greifen Sie auf Ihre Kopie unseres Repos so zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie wir bereits sagten, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Listen-Anwendung genommen und auf TypeScript portiert.

Zuerst haben wir gelernt, was TypeScript ist und welche Vorteile es bieten kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir sahen auch, wie man ein bestehendes Svelte-Projekt konvertiert, um TypeScript zu verwenden - unsere To-Do-Listen-App.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das Tool `svelte-check` verwendet, um TypeScript-Probleme über die Befehlszeile zu überprüfen.

Im nächsten Artikel werden wir lernen, wie man unsere App kompiliert und in die Produktion einführt. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um weiter mit Svelte zu lernen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
