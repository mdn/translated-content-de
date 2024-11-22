---
title: TypeScript-Unterstützung in Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir über Svelte Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Web Storage zu speichern. Wir haben auch einen Blick darauf geworfen, wie man die Übergangsdirektive verwendet, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Jetzt werden wir lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst erfahren wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Funktionen von TypeScript vollständig zu nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse mit dem
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > besitzen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man TypeScript konfiguriert und verwendet, wenn man Svelte-Anwendungen entwickelt.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und die Portierung zu TypeScript völlig optional ist. Es gibt unterschiedliche Meinungen dazu, und in diesem Kapitel werden wir kurz die Vor- und Nachteile der Verwendung von TypeScript erörtern. Selbst wenn Sie nicht planen, es zu übernehmen, wird Ihnen dieser Artikel nützlich sein, um zu erfahren, was es zu bieten hat und Ihnen bei Ihrer eigenen Entscheidung zu helfen. Wenn Sie sich überhaupt nicht für TypeScript interessieren, können Sie zum nächsten Kapitel übergehen, in dem wir verschiedene Optionen zur Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr betrachten werden.

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist [TypeScript-Unterstützung im REPL noch nicht verfügbar](https://github.com/sveltejs/sites/issues/156).

## TypeScript: optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generika bereitstellt. Das Ziel von TypeScript ist es, durch sein Typsystem Fehler frühzeitig zu erfassen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung bieten können, um gängige Fehler zu erkennen, während Sie den Code schreiben.

Das Beste daran ist, dass JavaScript-Code auch gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen und sie werden einfach funktionieren.

Unser TypeScript-Code wird überall dort ausgeführt werden können, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiles" unseren Code in Vanilla-JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den entsprechenden Vanilla-JavaScript-Code für Browser generiert.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code nach JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

First-class TypeScript-Unterstützung war Sveltes am meisten gewünschte Funktion seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Mitwirkenden, haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, die getestet werden kann. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Früherkannte Fehler: Der Compiler überprüft Typen zur Compile-Zeit und bietet Fehlermeldungen.
- Lesbarkeit: Statische Typisierung verleiht dem Code mehr Struktur und macht ihn selbstdokumentierend und lesbarer.
- Reichhaltige IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichereres Refactoring: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Ihnen beim Refactoring großer Teile Ihres Codes zu helfen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen ohne Deklaration von Variablentypen zu nutzen.
- Verfügbarkeit neuerer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen in einfaches, altmodisches JavaScript, sodass Sie sie auch auf Benutzeragenten verwenden können, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Compile-Zeit überprüft und vom generierten Code entfernt.
- Steile Lernkurve: Auch wenn TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine beträchtliche Lernkurve, insbesondere wenn Sie überhaupt keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Keine Ersatz für automatische Tests: Auch wenn Typen Ihnen helfen könnten, mehrere Fehler zu erfassen, ist TypeScript kein Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generika kann zu überkonstruierten Codebasen führen.

Es scheint ein breiter Konsens zu herrschen, dass TypeScript besonders gut für Großprojekte mit vielen Entwicklern geeignet ist, die am gleichen Code arbeiten. Und es wird tatsächlich von mehreren Großprojekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Dennoch ziehen es einige Entwickler vor, es auch bei kleinen Projekten zu verwenden, wie bei dem, das wir entwickeln.

Letztendlich liegt es an Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Hinweise zu geben, um sich darüber klar zu werden.

## Ein Svelte TypeScript-Projekt von Grund auf neu erstellen

Sie können ein neues Svelte TypeScript-Projekt mit der [Standardvorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminalbefehle auszuführen (führen Sie sie irgendwo aus, wo Sie Ihre Svelte-Testprojekte speichern — es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starterprojekt, das die TypeScript-Unterstützung enthält, die Sie dann nach Belieben modifizieren können.

Dann müssen Sie npm anweisen, Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzufügen

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner im Stammordner Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das ist, was wir tun werden, um unsere Anwendung auf TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie beginnen, sie auf TypeScript zu portieren.

Wechseln Sie zum Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

```bash
npx degit sveltejs/template/scripts scripts       # download script file to a scripts folder

node scripts/setupTypeScript.js                   # run it
# Converted to TypeScript.
```

Sie müssen Ihren Abhängigkeitsmanager neu ausführen, um zu starten.

```bash
npm install                                       # download new dependencies

npm run dev                                       # start the app in development mode
```

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie zu TypeScript konvertieren möchten. Bedenken Sie einfach, dass die Svelte-Community kontinuierlich die TypeScript-Unterstützung für Svelte verbessert, sodass Sie regelmäßig `npm update` ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie Schwierigkeiten mit TypeScript in einer Svelte-Anwendung haben, werfen Sie einen Blick auf diesen Abschnitt zur [Fehlerbehebung/FAQ zu TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits gesagt ist TypeScript eine Obermenge von JavaScript, daher wird Ihre Anwendung ohne Modifikationen ausgeführt. Derzeit werden Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausführen, ohne die Vorteile der von TypeScript bereitgestellten Funktionen zu nutzen. Sie können jetzt damit beginnen, Typen progressiv hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des `<script>`-Abschnitts hinzufügen. Um es in regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` zu `.ts`. Sie müssen auch alle entsprechenden Importanweisungen aktualisieren, um die `.ts`-Dateierweiterung von allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler ausgeben, wenn Sie die `.ts` Dateierweiterung in einer `import`-Anweisung verwenden. Wenn Sie also eine Datei `./foo.ts` haben, müssen Sie sie als `./foo` importieren.
> Siehe den Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js Lader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Komponenten-Markup-Abschnitten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Während Sie also JavaScript aus dem Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Abschnitt verwenden.
> TypeScript in Komponentenauszeichnungen ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript stellt Code-Editoren und IDEs viele Informationen zur Verfügung, um eine benutzerfreundlichere Entwicklungserfahrung zu ermöglichen.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen kurzen Test durchzuführen und zu sehen, wie wir Vervollständigungshinweise und Typüberprüfungen erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir auch Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung über das Terminal an, etwas später im Artikel.

Es wird daran gearbeitet, TypeScript in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die vollständigste Unterstützung ist derzeit in der [Svelte for VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refactoring, Intellisense, Hover-Informationen, automatische Vervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich im VS Code-Anwendungsfenster, geben Sie `code .` aus dem Stammverzeichnis Ihres Projektsordners ein (der abschließende Punkt weist VS Code an, den aktuellen Ordner zu öffnen), um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen zur Installation gibt.

![Dialogfeld, das sagt, dass dieses Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zur Installation oder zum Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Ein Klick auf _Alle installieren_ wird Svelte for VS Code installieren.

![Informationen zur Svelte for VS Code-Erweiterung](02-svelte-for-vscode.png)

Wir können auch sehen, dass die `setupTypeScript.js`-Datei einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hovern-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot, der zeigt, dass wenn man über eine Komponente schwebt, es Hinweise gibt](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir erhalten auch eine Typüberprüfung ohne zusätzliche Kosten. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (zum Beispiel ein Tippfehler wie `traget` anstelle von `target`), wird TypeScript eine Beschwerde erheben:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget gegeben](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das Attribut `lang="ts"` zum `<script>`-Tag hinzugefügt. Dank Typinferenz müssen wir in vielen Fällen nicht einmal Typen angeben, um Codeunterstützung zu erhalten. Zum Beispiel, wenn Sie beginnen, eine `ms`-Eigenschaft zum Aufruf der `Alert`-Komponente hinzuzufügen, wird TypeScript von dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Codehinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es sich beschweren:

![Typüberprüfung in VS Code - die ms-Variable hat einen nicht numerischen Wert erhalten](06-vscode-type-checking-in-components.png)

Das Anwendungstemplate hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor über die Befehlszeile angezeigt werden, was es ziemlich nützlich macht, um es in einer CI-Pipeline auszuführen. Führen Sie einfach `npm run check` aus, um ungenutztes CSS zu überprüfen und A11y-Hinweise und TypeScript-Kompilierfehler zurückzugeben.

In diesem Fall erhalten Sie, wenn Sie `npm run check` (entweder in der VS Code-Konsole oder im Terminal) ausführen, den folgenden Fehler:

![Check-Befehl, der in VS Code ausgeführt wird und Typfehler zeigt, die ms-Variable sollte eine Zahl zugewiesen bekommen](07-vscode-svelte-check.png)

Noch besser, wenn Sie es vom integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), führt <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> Klicken auf den Dateinamen Sie zur Zeile mit dem Fehler.

Sie können das `check`-Skript auch im Watch-Modus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript jedes Mal ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, sodass es weiterhin Fehler melden kann, ohne andere Terminalverwendungen zu stören.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Methode zur Beziehung von Typen, die ausschließlich auf deren Mitgliedern basiert, auch wenn Sie den Typ nicht explizit definieren.

Wir definieren einen `TodoType`-Typ, um zu sehen, wie TypeScript erzwingt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell kompatibel damit ist.

1. Erstellen Sie innerhalb des `src`-Ordners einen `types`-Ordner.
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
   > Das Svelte-Template verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie das `export`/`import`-Typsyntax verwenden, um Typen und Schnittstellen zu importieren. Schauen Sie sich [diesen Abschnitt der Fehlerbehebung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für weitere Informationen an.

4. Jetzt werden wir `TodoType` in unserer `Todo.svelte`-Komponente verwenden. Fügen Sie zuerst das `lang="ts"` in unser `<script>`-Tag hinzu.
5. Lassen Sie uns den Typ importieren und ihn verwenden, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Nun werden wir in `Todos.svelte` eine `Todo`-Komponente mit einem Literalobjekt als Parameter vor dem Aufruf der `MoreActions`-Komponente instanziieren, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` in das `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es weiß, dass die von uns angegebenen Typüberprüfungen verwendet werden sollen.

   Wir erhalten den folgenden Fehler:

   ![Typfehler in VS Code, Todo Type-Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon haben, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte entwickeln.

Nun werden wir diese Änderungen rückgängig machen, um anzufangen, unsere Anwendung auf TypeScript zu portieren, sodass wir nicht von allen Prüfungswarnungen gestört werden.

1. Entfernen Sie das fehlerhafte To-do und das `lang='ts'`-Attribut aus der `Todos.svelte`-Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir werden uns später darum kümmern.

## Portieren unserer To-do-Liste-App zu TypeScript

Nun sind wir bereit, unsere To-do-Liste-Anwendung zu portieren, um alle Funktionen zu nutzen, die TypeScript uns bietet.

Beginnen Sie damit, das Check-Skript im Watch-Modus im Projektstamm auszuführen:

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

Beachten Sie, dass wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, eine einfache Möglichkeit, eine Svelte-Komponente zu portieren, darin besteht, einfach das `<script lang='ts'>` oben an Ihrer Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen:

![VS Code-Screenshot, der zeigt, dass wenn Sie .svelte zu einer Komponente hinzufügen, es dreipunktige Warnhinweise gibt](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte`-Komponente.

1. Fügen Sie `lang="ts"` in das `<script>`-Tag Ihrer `Alert.svelte`-Komponente hinzu. Sie werden einige Warnungen in der Ausgabe des `check`-Skripts sehen:

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
   > Es besteht keine Notwendigkeit, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits von seinem Standardwert ableitet.

### MoreActions.svelte

Jetzt machen wir dasselbe für die `MoreActions.svelte`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut hinzu, wie zuvor. TypeScript wird uns bezüglich der `todos`-Prop und der `t`-Variablen in dem Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir verwenden den bereits definierten `TodoType`, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die `export let todos`-Zeile durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Dennoch können wir es spezifizieren, wenn wir der Meinung sind, dass es unseren Code lesbarer macht, so:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Oftmals wird TypeScript in der Lage sein, den reaktiven Variablentyp korrekt abzuleiten, aber manchmal erhalten Sie möglicherweise einen "implizit hat Typ 'any'"-Fehler beim Arbeiten mit reaktiven Zuordnungen. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ in der reaktiven Zuordnung selbst nicht spezifizieren. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie unter [Wie gebe ich reaktive Zuordnungen an? / Ich erhalte einen "implizit hat Typ 'any'"-Fehler](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut zum `<script>`-Tag hinzu, wie gewohnt. Sie werden keine Warnungen bemerken - TypeScript leitet den Typ der Filtervariablen vom Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: alle, aktiv und abgeschlossen. Also können wir TypeScript davon in Kenntnis setzen, indem wir ein enum Filter erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt werden wir dies in der `FilterButton`-Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch folgende:

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

Hier importieren wir einfach das `Filter`-Enum und verwenden es anstelle der zuvor verwendeten Zeichenfolgenwerte.

### Todos.svelte

Wir werden das `Filter`-Enum auch in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zunächst das `lang='ts'`-Attribut hinzu, wie zuvor.
2. Importieren Sie nun das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt werden wir es verwenden, wann immer wir auf den aktuellen Filter verweisen. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch folgende:

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

4. `check` wird uns immer noch einige Warnungen aus `Todos.svelte` geben. Lassen Sie uns sie beheben.

   Beginnen Sie damit, den `TodoType` zu importieren und TypeScript mitzuteilen, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes geben wir alle fehlenden Typen an. Die Variable `todosStatus`, die wir verwendet haben, um programmgesteuert auf die von der `TodosStatus`-Komponente offen gelegten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jede `todo` wird vom Typ `TodoType` sein.

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

Wir stoßen auf die folgenden Fehler, die daraus resultieren, dass wir `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`-) Komponente übergeben:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Dies liegt daran, dass die `todos`-Prop in der `TodosStatus`-Komponente keinen Standardwert hat, sodass TypeScript sie als `undefined`-Typ abgeleitet hat, was nicht mit einem `TodoType`-Array kompatibel ist. Das Gleiche geschieht mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann den `TodoType` und erklären Sie die `todos`-Prop als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir werden auch den `headingEl`, den wir verwendet haben, um ihn an das Headings-Tag zu binden, als ein `HTMLElement` angeben. Aktualisieren Sie die `let headingEl`-Zeile mit der folgenden:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler im Zusammenhang mit dem Festlegen des `tabindex`-Attributs bemerken. Das liegt daran, dass TypeScript das `<h2>`-Element typprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, tabindex erwartet eine Type von number, nicht string](10-vscode-tabindex-hint.png)

   Um das zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, wie folgt:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es fälschlicherweise einer Zeichenfolgenvariablen zuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Wie gewohnt fügen Sie das `lang='ts'`-Attribut hinzu.
2. Die Warnung wird darauf hinweisen, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Geben Sie ihren Typ als `HTMLElement` an, wie folgt:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Als letztes für diese Datei müssen wir den korrekten Typ für unsere `autofocus`-variable angeben. Aktualisieren Sie ihre Definition wie folgt:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` ausgibt, durch den Aufruf der `Todo.svelte`-Komponente ausgelöst. Lassen Sie uns sie beheben.

1. Öffnen Sie die `Todo.svelte`-Datei und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Lassen Sie uns den `TodoType` importieren und den Typ der `todo`-Prop festlegen. Ersetzen Sie die Zeile `export let todo` durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns anweist, den Typ der `updatedTodo`-Variablen der `update()`-Funktion zu definieren. Dies kann etwas knifflig sein, da `updatedTodo` nur die Attribute der `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es keine vollständige `todo` ist — es hat nur eine Teilmenge der Eigenschaften einer `todo`.

   Für diese Art von Fällen bietet TypeScript mehrere [Nutztypen](https://www.typescriptlang.org/docs/handbook/utility-types.html), um es einfacher zu machen, diese häufigen Transformationen anzuwenden. Was wir jetzt brauchen, ist der [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt)-Nutztyp, der es uns erlaubt, alle Teilmengen eines bestimmten Typs darzustellen. Der Partial-Nutztyp gibt einen neuen Typ basierend auf dem Typ `T` zurück, wobei jede Eigenschaft von `T` optional ist.

   Wir verwenden ihn in der `update()`-Funktion — aktualisieren Sie Ihre Funktion so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit teilen wir TypeScript mit, dass die `updatedTodo`-Variable eine Teilmenge der `TodoType`-Eigenschaften enthalten wird.

4. Jetzt teilt uns svelte-check mit, dass wir den Typ unserer Aktionsfunktionsparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die Knotenvariable vom Typ `HTMLElement` definieren. Ersetzen Sie in den oben angegebenen zwei Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die `actions.js`-Datei.

1. Benennen Sie sie in `actions.ts` um und geben Sie den Typ des Knotenparameters an. Es sollte in etwa so aussehen:

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

2. Aktualisieren Sie nun `Todo.svelte` und `NewTodo.svelte`, wo wir die Actions-Datei importieren. Denken Sie daran, dass Importe in TypeScript nicht die Dateierweiterung beinhalten. In jedem Fall sollte es so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Die Stores zu TypeScript migrieren

Jetzt müssen wir die `stores.js` und `localStore.js`-Dateien zu TypeScript migrieren.

Tipp: Das Skript `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)-Tool verwendet, wird nur die `.svelte`-Dateien unserer Anwendung überprüfen. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, was dem TypeScript-Compiler anweist, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays auf `TodoType[]`. Das ist der Inhalt:

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

3. Denken Sie daran, die `import`-Anweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Entfernen Sie einfach die `.js`-Erweiterung, wie folgt:

   ```js
   import { todos } from "../stores";
   ```

Jetzt zu `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` wie folgt:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie, indem Sie die Datei in `localStore.ts` umbenennen.
2. TypeScript fordert uns auf, den Typ der Variablen `key`, `initial` und `value` anzugeben. Der erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenfolge sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das in einen gültigen JSON-String mit der [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)-Methode konvertiert werden kann, was bedeutet, dass es sich um ein beliebiges JavaScript-Objekt handelt mit einigen Einschränkungen: Beispielsweise sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Daher erstellen wir den Typ `JsonValue`, um diese Bedingungen anzugeben.

   Erstellen Sie die Datei `json.type.ts` im `types` Ordner.

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

   Der `|`-Operator ermöglicht es uns, Variablen zu deklarieren, die Werte zweier oder mehrer Typen speichern könnten. Ein `JsonValue` könnte eine Zeichenfolge, eine Zahl, ein boolescher Wert und so weiter sein. In diesem Fall nutzen wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` haben kann und auch ein Objekt mit Eigenschaften vom Typ `JsonValue` sein kann.

4. Wir importieren unseren `JsonValue`-Typ und verwenden ihn entsprechend. Aktualisieren Sie Ihr `localStore.ts` so:

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

Wenn wir nun versuchen, einen `localStore` mit etwas zu erstellen, das nicht über `JSON.stringify()` in JSON konvertiert werden kann, beispielsweise ein Objekt mit einer Funktion als Eigenschaft, wird sich VS Code/`validate` darüber beschweren:

![VS Code zeigt einen Fehler beim Verwenden unseres Stores an — es schlägt fehl, wenn versucht wird, einen lokalen Speicherwert auf etwas einzustellen, das nicht mit JSON stringify kompatibel ist](11-vscode-invalid-store.png)

Und das Beste daran ist, dass es sogar mit der [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktioniert. Wenn wir versuchen, einen ungültigen Wert in unserem `todos`-Store mit der `$store`-Syntax zu speichern, wie folgt:

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

Wird das Check-Skript den folgenden Fehler melden:

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

## Unsere Stores mit Generics widerstandsfähiger machen

Unsere Stores wurden bereits auf TypeScript portiert, aber wir können noch mehr tun. Wir sollten nicht irgendeine Art von Wert speichern müssen — wir wissen, dass der Alarmstore nur Zeichenfolgennachrichten enthalten sollte, der To-do-Store ein Array von `TodoType`, usw. Wir können TypeScript dies durch die Verwendung von [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) erzwingen lassen. Finden wir mehr heraus.

### Einführung in TypeScript-Generics

Generics ermöglichen es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen anstelle eines einzelnen Typs funktionieren. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mithilfe einer speziellen Syntax übergeben: Sie werden in spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Sehen wir uns ein kurzes Beispiel an, eine einfache `Stack`-Klasse, die es uns ermöglicht, Elemente hinzuzufügen (`push`) und herauszunehmen (`pop`), so:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und entsprechend sowohl die `push()`-Zeit als auch die `pop()`-Methode empfangen und geben eine Variable vom Typ `any` zurück. Es ist also völlig zulässig, etwas wie das Folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was wäre, wenn wir nur einen `Stack` haben wollten, der nur mit dem Typ `string` funktionieren würde? Wir könnten Folgendes tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir mit einem Stack von Typen umgehen, die wir noch nicht kennen und die vom Benutzer definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generics verwenden.

Das ist unsere `Stack`-Klasse, wiederimplementiert mit Generics:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann, wie wir normalerweise einen bestimmten Typ verwenden würden. Jetzt ist elements ein Array vom Typ `T` und sowohl die `push()`- als auch die `pop()`-Methode empfangen und geben eine Variable vom Typ `T` zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann und wird einen Fehler angeben, wenn wir etwas anderes hinzufügen wollen:

![Argument des Typs hello ist nicht zuweisbar an Parameter des Typs number](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen durch Nutzung ableiten. Generics unterstützen außerdem Standardwerte und Einschränkungen.

Generics sind eine leistungsstarke Funktion, die es unserem Code ermöglicht, sich von den spezifischen Typen, die verwendet werden, freizumachen, wodurch er wiederverwendbarer und generischer wird, ohne auf Typsicherheit verzichten zu müssen. Um mehr darüber zu erfahren, schauen Sie sich die [Einführung in TypeScript-Generics](https://www.typescriptlang.org/docs/handbook/generics.html) an.

### Svelte-Stores mit Generics verwenden

Svelte-Stores unterstützen Generics von Haus aus. Und aufgrund der generischen Typinferenz können wir davon profitieren, ohne unseren Code berühren zu müssen.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ für unseren `$alert`-Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument des Typs 9999 ist nicht zuweisbar an Parameter des Typs string](13-vscode-generic-alert-error.png)

Das liegt daran, dass als wir unseren Alarmstore im `stores.ts`-File mit folgender Anweisung definiert haben:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

hat TypeScript den generischen Typ als `string` abgeleitet. Wenn wir das explizit machen wollten, könnten wir Folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt machen wir unseren `localStore` Store zu einem generischen Typ. Denken Sie daran, dass wir den `JsonValue`-Typ definiert haben, um die Verwendung unseres `localStore`-Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir, dass die Benutzer von `localStore` den Typ von Daten, die gespeichert werden, angeben können, aber anstatt mit jedem Typ zu arbeiten, sollten sie den `JsonValue`-Typ erfüllen. Wir werden diese Anforderung durch eine generische Einschränkung angeben, wie folgt:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den `T`-Typ entsprechend.

Unsere `localStore.ts`-Datei wird dann folgendermaßen aussehen - probieren Sie den neuen Code jetzt in Ihrer Version aus:

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

Und dank der generischen Typinferenz weiß TypeScript bereits, dass unser `$todos`-Store ein Array von `TodoType` enthalten sollte:

![TodoType-Objekteigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Nochmals, wenn wir ausdrücklich darüber sein wollten, könnten wir das im `stores.ts`-File so machen:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war es für unsere kurze Tour durch TypeScript-Generics.

## Der Code bis jetzt

### Git

Um den Codezustand zu sehen, den er am Ende dieses Artikels haben sollte, greifen Sie auf Ihre Kopie unseres Repos zu, wie folgt:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie wir eingangs sagten, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-do-Liste-Anwendung genommen und sie zu TypeScript portiert.

Zuerst haben wir über TypeScript erfahren und welche Vorteile es uns bieten kann. Dann haben wir gesehen, wie wir ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellen. Wir haben auch gesehen, wie wir ein bestehendes Svelte-Projekt dazu konvertieren können, TypeScript zu verwenden - unsere To-do-Liste-App.

Wir haben gelernt, mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) zu arbeiten, um Funktionen wie Typrpüfung und Autovervollständigung zu erhalten. Wir haben auch das Tool `svelte-check` verwendet, um TypeScript-Probleme über die Befehlszeile zu überprüfen.

Im nächsten Artikel werden wir lernen, wie wir unsere App für die Produktion kompilieren und bereitstellen. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um das Lernen von Svelte weiter zu vertiefen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
