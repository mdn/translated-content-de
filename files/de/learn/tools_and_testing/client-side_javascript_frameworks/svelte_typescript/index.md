---
title: TypeScript-Unterstützung in Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
l10n:
  sourceCommit: ad7585d8505afbbf93157cfe09f6f7dba361dc35
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir Svelte-Stores kennengelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Webspeicher zu speichern. Wir haben auch einen Blick darauf geworfen, wie man die Übergangs-Direktive verwendet, um Animationen auf DOM-Elemente in Svelte anzuwenden.

Jetzt werden wir lernen, wie man TypeScript in Svelte-Anwendungen nutzt. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die Funktionen von TypeScript voll auszuschöpfen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sein
          und über Kenntnisse des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Kommandozeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie TypeScript konfigurieren und nutzen, wenn Sie Svelte-Anwendungen entwickeln.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung voll funktionsfähig ist und die Portierung auf TypeScript völlig optional ist. Es gibt unterschiedliche Meinungen darüber, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile von TypeScript sprechen. Auch wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel nützlich sein, um Ihnen zu erlauben, zu lernen, was es zu bieten hat und Ihnen bei Ihrer eigenen Entscheidung zu helfen. Wenn Sie sich überhaupt nicht für TypeScript interessieren, können Sie zum nächsten Kapitel überspringen, in dem wir uns verschiedene Optionen zur Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen.

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um in den aktuellen Zustand der App zu gelangen, führen Sie Folgendes aus:

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist die [TypeScript-Unterstützung im REPL noch nicht verfügbar](https://github.com/sveltejs/sites/issues/156).

## TypeScript: optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist, dass IDEs eine reichere Umgebung bieten können, um häufige Fehler beim Schreiben des Codes zu erkennen.

Am besten ist, dass JavaScript-Code auch gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen und sie werden funktionieren.

Unser TypeScript-Code kann überall ausgeführt werden, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code in Vanilla-JavaScript. Das bedeutet, dass es TypeScript-Code parst und den äquivalenten Vanilla-JavaScript-Code erzeugt, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Erstklassige TypeScript-Unterstützung war die am meisten angeforderte Funktion von Svelte seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams zusammen mit vielen Mitwirkenden haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, die getestet werden kann. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten können, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Früherkannte Fehler: Der Compiler überprüft die Typen zur Kompilierzeit und bietet Fehlermeldungen.
- Lesbarkeit: Statische Typisierung verleiht dem Code mehr Struktur und macht ihn selbstdokumentierend und besser lesbar.
- Umfangreiche IDE-Unterstützung: Typ-Informationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichereres Refactoring: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Sie beim Refactoring großer Teile Ihres Codes zu unterstützen.
- Typ-Inferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele neuere JavaScript-Funktionen in alten JavaScript-Code und ermöglicht es Ihnen, sie auch auf Benutzeragenten zu verwenden, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierzeit überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Obwohl TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine beträchtliche Lernkurve, insbesondere wenn Sie keine Erfahrungen mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatisierte Tests: Auch wenn Typen Ihnen helfen können, mehrere Fehler zu finden, ist TypeScript kein echter Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generics kann zu übermäßigem Code führen.

Es scheint einen breiten Konsens darüber zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, an denen viele Entwickler am gleichen Code arbeiten. Und es wird tatsächlich in mehreren großen Projekten verwendet, wie z.B. Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Dennoch ziehen es einige Entwickler vor, es auch in kleinen Projekten zu verwenden, wie dem, das wir entwickeln.

Am Ende liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Beweise zu liefern, um Ihre Meinung zu bilden.

## Ein Svelte-TypeScript-Projekt von Grund auf erstellen

Sie können ein neues Svelte-TypeScript-Projekt mit der [Standardvorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminal-Befehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es erstellt ein neues Verzeichnis):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starterprojekt, das TypeScript-Unterstützung enthält und das Sie nach Belieben anpassen können.

Dann müssen Sie npm anweisen, die Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diese Anweisungen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project) befolgen. Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einem `scripts`-Ordner im Stammverzeichnis Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um unsere Anwendung auf TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die komplette To-Do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie sie auf TypeScript portieren.

Wechseln Sie zum Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

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

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript konvertieren möchten. Beachten Sie jedoch, dass die Svelte-Community ständig die Unterstützung von Svelte-TypeScript verbessert, sodass Sie `npm update` regelmäßig ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie Probleme haben, mit TypeScript in einer Svelte-Anwendung zu arbeiten, werfen Sie einen Blick auf diesen [Troubleshooting/FAQ-Bereich zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie wir bereits sagten, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Derzeit werden Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausführen, ohne die Vorteile der Features von TypeScript zu nutzen. Sie können jetzt beginnen, Typen schrittweise hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es aus einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es aus regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` auf `.ts`. Sie müssen auch alle entsprechenden `import`-Anweisungen aktualisieren, um die `.ts`-Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler auslösen, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden, also müssen Sie, wenn Sie eine Datei `./foo.ts` haben, sie als `./foo` importieren.
> Siehe den Abschnitt [Modulauflösung für Bundler, TypeScript-Runtimes und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Markup-Abschnitten von Komponenten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Während Sie also JavaScript aus dem Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Abschnitt verwenden.
> TypeScript im Markup von Komponenten ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript stellt Code-Editoren und IDEs viele Informationen zur Verfügung, damit sie eine benutzerfreundlichere Entwicklungsumgebung bieten können.

Wir verwenden [Visual Studio Code](https://code.visualstudio.com/), um einen kurzen Test durchzuführen und zu sehen, wie wir Autovervollständigungshinweise und typüberprüfung erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie nicht VS Code verwenden möchten, bieten wir später Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung vom Terminal aus.

Es wird daran gearbeitet, die TypeScript-Unterstützung in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die umfassendste Unterstützung ist bisher in der [Svelte for VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gewartet wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refactoring, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, mit der Verwendung von TypeScript in Ihren Projekten zu beginnen.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, geben Sie vom Stammverzeichnis des Projektordners aus `code .` (der nachfolgende Punkt weist VS Code an, den aktuellen Ordner zu öffnen) ein, um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass empfohlene Erweiterungen installiert werden können.

![Dialogfeld mit der Meldung, dass dieser Arbeitsbereich Extension-Empfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Wenn Sie auf _Alle installieren_ klicken, wird Svelte for VS Code installiert.

![Svelte for VS Code-Erweiterungsinformationen](02-svelte-for-vscode.png)

Wir können auch sehen, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code bei unseren Svelte-Komponenten Hover-Informationen anzeigen kann:

![VS Code Screenshot, der zeigt, dass beim Überfahren einer Komponente Hinweise angezeigt werden](03-vscode-hints-in-main-ts.png)

Wir erhalten auch kostenlos Typüberprüfung. Wenn wir zum Beispiel eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (zum Beispiel ein Tippfehler wie `traget` statt `target`), wird TypeScript darauf hinweisen:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget zugewiesen](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das `lang="ts"`-Attribut zum `<script>`-Tag hinzugefügt. Zudem werden wir dank Typinferenz in vielen Fällen nicht einmal die Typen angeben müssen, um Unterstützung vom Code zu erhalten. Wenn Sie beispielsweise anfangen, eine `ms`-Eigenschaft zum `Alert`-Komponentenaufruf hinzuzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Codehinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es darauf hinweisen:

![Typüberprüfung in VS Code - der ms-Variable wurde ein nicht numerischer Wert zugewiesen](06-vscode-type-checking-in-components.png)

Die Anwendungsvorlage hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, von der Kommandozeile aus, was es ziemlich nützlich dafür macht, es in einer Continuous-Integration-Pipeline (CI) laufen zu lassen. Führen Sie einfach `npm run check` aus, um unbenutztes CSS zu überprüfen und A11y-Hinweise und TypeScript-Kompilierungsfehler zurückzugeben.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), erhalten Sie den folgenden Fehler:

![Check-Befehl, der in VS Code ausgeführt wird, zeigt einen Typfehler an, ms-Variable sollte eine Zahl zugewiesen werden](07-vscode-svelte-check.png)

Noch besser, wenn Sie es im integrierten VS Code-Terminal ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), führt das <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Klick auf den Dateinamen Sie zur Zeile, die den Fehler enthält.

Sie können auch das `check`-Skript im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript jedes Mal ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, damit es weiterhin Fehler melden kann, ohne die andere Nutzung des Terminals zu beeinträchtigen.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt die strukturelle Typisierung. Die strukturelle Typisierung ist eine Möglichkeit, Typen ausschließlich auf der Grundlage ihrer Mitglieder zu vergleichen, selbst wenn Sie den Typ nicht explizit definieren.

Wir erstellen einen `TodoType`, um zu sehen, wie TypeScript sicherstellt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell kompatibel ist.

1. Erstellen Sie einen `types`-Ordner im `src`-Ordner.
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
   > Die Svelte-Vorlage verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie den `export`/`import`-Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Informieren Sie sich in [diesem Abschnitt des Leitfadens zur Problembehandlung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für weitere Informationen.

4. Nun werden wir `TodoType` aus unserer `Todo.svelte`-Komponente verwenden. Fügen Sie zuerst `lang='ts'` zu unserem `<script>`-Tag hinzu.
5. Lassen Sie uns den Typ importieren und ihn verwenden, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die `export let todo`-Zeile durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Nun werden wir eine `Todo`-Komponente mit einem Literalobjekt als Parameter vor dem Aufruf der `MoreActions`-Komponente aus der `Todos.svelte`-Datei instanziieren, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es weiß, dass die Typüberprüfung verwendet werden soll.

   Wir erhalten den folgenden Fehler:

   ![Typfehler in VS Code, Todo-Typ-Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte erstellen.

Nun werden wir diese Änderungen rückgängig machen, um unsere Anwendung auf TypeScript zu portieren, damit wir nicht durch alle Überprüfungswarnungen gestört werden.

1. Entfernen Sie das fehlerhafte To-Do und das `lang='ts'`-Attribut aus der `Todos.svelte`-Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir werden uns später darum kümmern.

## Unsere To-Do-Liste-App auf TypeScript portieren

Jetzt sind wir bereit, mit der Portierung unserer To-Do-Liste-Anwendung zu beginnen, um alle Funktionen zu nutzen, die TypeScript uns bietet.

Lassen Sie uns anfangen, das Check-Skript im Überwachungsmodus im Projektstamm auszuführen:

```bash
npm run check -- --watch
```

Dies sollte etwas in der folgenden Art ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass eine einfache Möglichkeit, eine Svelte-Komponente zu portieren, darin besteht, einfach `lang='ts'` am Anfang des `<script>`-Tags der Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen, wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden:

![VS Code Screenshot, der zeigt, dass wenn Sie lang='ts' zu einer Komponente hinzufügen, es dreipunktige Hinweiswarnungen gibt](09-vscode-alert-hints.png)

### Alert.svelte

Lassen Sie uns mit unserer `Alert.svelte`-Komponente beginnen.

1. Fügen Sie `lang="ts"` in Ihrer `Alert.svelte`-Komponente zum `<script>`-Tag hinzu. Sie werden einige Warnungen in der Ausgabe des `check`-Skripts sehen:

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
   > Es ist nicht notwendig, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Nun machen wir das Gleiche für die `MoreActions.svelte`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut hinzu, wie zuvor. TypeScript wird uns vor dem `todos`-Prop und der `t`-Variablen im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den `TodoType` verwenden, den wir bereits definiert haben, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die Zeile `export let todos` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die Variable `t` in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Dennoch, wenn wir glauben, dass unser Code dadurch leichter zu lesen ist, könnten wir ihn wie folgt spezifizieren:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

TypeScript kann in der Regel den reaktiven Variablentyp korrekt ableiten, aber manchmal können Sie einen "hat implizit einen 'any'-Typ"-Fehler erhalten, wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ nicht in der reaktiven Zuweisung selbst angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie in [Wie tippe ich reaktive Anweisungen? / Ich erhalte einen "hat implizit den Typ 'any'"-Fehler](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut dem `<script>`-Tag hinzu, wie gewohnt. Sie werden feststellen, dass es keine Warnungen gibt - TypeScript leitet den Typ der Filtervariable aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: alle, aktiv und abgeschlossen. Wir können TypeScript darüber informieren, indem wir ein Enum-Filter erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt werden wir dies von der `FilterButton`-Komponente aus verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch die folgende:

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

Hier importieren wir einfach das `Filter`-Enum und verwenden es anstelle der String-Werte, die wir zuvor verwendet haben.

### Todos.svelte

Wir werden das `Filter`-Enum auch in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst das `lang='ts'`-Attribut hinzu, wie zuvor.
2. Importieren Sie das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt verwenden wir es überall dort, wo wir den aktuellen Filter referenzieren. Ersetzen Sie die beiden filterbezogenen Blöcke mit den folgenden:

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

   Beginnen Sie damit, den `TodoType` zu importieren und TypeScript mitzuteilen, dass unsere `todos`-Variable ein Array vom `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes deklarieren wir alle fehlenden Typen. Die Variable `todosStatus`, die wir verwendet haben, um programmgesteuert auf die Methoden zuzugreifen, die von der `TodosStatus`-Komponente freigegeben werden, ist von Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

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

Wir stoßen auf die folgenden Fehler im Zusammenhang mit der Übergabe von `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`-)Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Das liegt daran, dass die `todos`-Prop der `TodosStatus`-Komponente keinen Standardwert hat, sodass TypeScript abgeleitet hat, dass sie vom Typ `undefined` ist, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie es uns beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann den `TodoType` und deklarieren Sie die `todos`-Prop als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts mit der folgenden:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir werden auch das `headingEl`, das wir verwendet haben, um es an das Heading-Tag zu binden, als `HTMLElement` spezifizieren. Aktualisieren Sie die Zeile `let headingEl` mit der folgenden:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler bemerken, der sich auf das Setzen des `tabindex`-Attributs bezieht. Das liegt daran, dass TypeScript das `<h2>`-Element typich überprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, tabindex erwartet einen Typ von number, nicht string](10-vscode-tabindex-hint.png)

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, so:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir ihn falsch einem String zuweisen.

### NewTodo.svelte

Als Nächstes kümmern wir uns um `NewTodo.svelte`.

1. Fügen Sie wie gewohnt das `lang='ts'`-Attribut hinzu.
2. Die Warnung wird anzeigen, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement` so:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt für diese Datei müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie ihre Definition so:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` ausgibt, ausgelöst durch den Aufruf der `Todo.svelte`-Komponente. Lassen Sie uns sie beheben.

1. Öffnen Sie die `Todo.svelte`-Datei und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Lassen Sie uns den `TodoType` importieren und den Typ der `todo`-Prop festlegen. Ersetzen Sie die Zeile `export let todo` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der `update()`-Funktion `updatedTodo`-Variable zu definieren. Dies kann etwas knifflig sein, da `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es kein vollständiges `todo` ist — es hat nur einen Teil der Eigenschaften eines `todo`.

   Für diese Art von Fällen stellt TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html) zur Verfügung, um es einfacher zu machen, diese allgemeinen Transformationen anzuwenden. Was wir jetzt brauchen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt)-Utility, das es uns ermöglicht, alle Teilmengen eines gegebenen Typs darzustellen. Das Partial-Utility gibt einen neuen Typ basierend auf dem Typ `T` zurück, wobei jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()`-Funktion — aktualisieren Sie Ihre so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit sagen wir TypeScript, dass die `updatedTodo`-Variable eine Teilmenge der Eigenschaften des `TodoType` enthalten wird.

4. Nun sagt uns svelte-check, dass wir den Typ unserer Aktionsfunktionsparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die Node-Variable als von Typ `HTMLElement` definieren. Ersetzen Sie in den beiden angegebenen Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Nehmen wir nun die Datei `actions.js` in Angriff.

1. Benennen Sie sie in `actions.ts` um und fügen Sie den Typ des Node-Parameters hinzu. Sie sollte schließlich so aussehen:

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

2. Aktualisieren Sie nun `Todo.svelte` und `NewTodo.svelte`, wo wir die Aktionen-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In jedem Fall sollte es so enden:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Jetzt müssen wir die Dateien `stores.js` und `localStore.js` zu TypeScript migrieren.

Tipp: das Skript `npm run check`, das das Tool [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) verwendet, wird nur die `.svelte`-Dateien unserer Anwendung überprüfen. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noemit` ausführen, das den TypeScript-Compiler anweist, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays in `TodoType[]`. So sieht der Inhalt aus:

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

3. Denken Sie daran, die `import`-Anweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Entfernen Sie einfach die `.js`-Dateierweiterung, so:

   ```js
   import { todos } from "../stores";
   ```

Nun zu `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` wie folgt:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie damit, die Datei in `localStore.ts` umzubenennen.
2. TypeScript fordert uns auf, den Typ der `key`-, `initial`- und `value`-Variablen anzugeben. Das erste ist einfach: Der Schlüssel unseres lokalen Web-Speichers sollte ein String sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das in einen gültigen JSON-String mit der [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)-Methode konvertiert werden kann, was bedeutet, dass jedes JavaScript-Objekt mit ein paar Einschränkungen: zum Beispiel sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Also werden wir den `JsonValue`-Typ erstellen, um diese Bedingungen zu spezifizieren.

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

   Der `|`-Operator ermöglicht es uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte ein String, eine Nummer, ein Boolean usw. sein. In diesem Fall machen wir auch Gebrauch von rekursiven Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` und auch ein Objekt mit Eigenschaften vom Typ `JsonValue` haben kann.

4. Wir importieren unseren `JsonValue`-Typ und verwenden ihn entsprechend. Aktualisieren Sie Ihre `localStore.ts`-Datei so:

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

Wenn wir nun versuchen, einen `localStore` mit etwas zu erstellen, das nicht mit `JSON.stringify` in JSON konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` darauf hinweisen:

![VS Code zeigt einen Fehler mit der Verwendung unseres Stores - es schlägt fehl, wenn versucht wird, einen lokalen Speichervalue zu einem Wert zu setzen, der nicht mit JSON-Strngify kompatibel ist](11-vscode-invalid-store.png)

Und das Beste daran ist, dass es sogar mit der [`$store`-Autoabonnementsyntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktionieren wird. Wenn wir versuchen, einen ungültigen Wert in unserem `todos`-Store mit der `$store`-Syntax zu speichern, so:

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

Das Check-Skript gibt den folgenden Fehler aus:

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

Dies ist ein weiteres Beispiel dafür, wie das Angeben von Typen unseren Code robuster machen kann und uns helfen kann, mehr Fehler zu erkennen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung auf TypeScript umgestellt.

## Unsere Stores mit Generics absichern

Unsere Stores wurden bereits auf TypeScript portiert, aber wir können es besser machen. Wir sollten keinen beliebigen Wert speichern müssen — wir wissen, dass der Alarm-Store String-Nachrichten enthalten sollte und der To-Do-Store ein Array vom `TodoType` usw. Wir können dies von TypeScript mit [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) durchsetzen lassen. Lassen Sie uns mehr darüber erfahren.

### TypeScript Generics verstehen

Generics ermöglichen es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen und nicht nur mit einem einzigen Typ arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendetem werden. Generische Typen werden als Parameter mit einer speziellen Syntax angegeben: sie werden innerhalb von spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die von den Benutzern bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein schnelles Beispiel sehen, eine einfache `Stack`-Klasse, die es uns ermöglicht, `push` und `pop`-Elemente zu benutzen, so:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und dementsprechend empfangen und geben die `push()`- und `pop()`-Methoden eine Variable vom Typ `any` zurück. Es ist also völlig gültig, etwas wie das Folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` funktioniert? Wir könnten Folgendes tun:

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

Das würde funktionieren. Aber wenn wir mit Nummern arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir mit einem Stapel von Typen umgehen, die wir noch nicht kennen und die vom Verbraucher definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generics verwenden.

Dies ist unsere `Stack`-Klasse, mit Generics neu implementiert:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann so, wie wir normalerweise einen bestimmten Typ verwenden würden. Jetzt ist `elements` ein Array von Typ `T`, und `push()` und `pop()` empfangen und geben beide eine Variable von Typ `T` zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stapel nur Zahlen akzeptieren kann, und gibt einen Fehler aus, wenn wir versuchen, irgendetwas anderes zu übergeben:

![Argument vom Typ "hello" ist nicht zuweisbar an Parameter vom Typ number](12-vscode-generic-stack-error.png)

TypeScript kann generische Typen auch durch Verwendung ableiten. Generics unterstützen auch Standardwerte und Einschränkungen.

Generics sind ein leistungsstarkes Merkmal, das es unserem Code ermöglicht, sich von den spezifischen Typen zu abstrahieren, die verwendet werden, und ihn allgemeiner und wiederverwendbarer zu machen, ohne auf Type-Sicherheit zu verzichten. Um mehr darüber zu erfahren, lesen Sie die [Einführung in TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html).

### Verwendung von Svelte-Stores mit Generics

Svelte-Stores unterstützen Generics von Haus aus. Und dank der generischen Typinferenz können wir dies nutzen, ohne unseren Code zu ändern.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ in unserem `$alert`-Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument von Typ 9999 ist nicht zuweisbar an Parameter vom Typ string](13-vscode-generic-alert-error.png)

Das liegt daran, dass, als wir unseren Alarm-Store in der `stores.ts`-Datei definiert hatten, folgendes:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript den generischen Typ als `string` abgeleitet hat. Wenn wir darin explizit sein wollten, könnten wir Folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt werden wir unseren `localStore`-Store generische Unterstützung hinzufügen. Erinnern Sie sich daran, dass wir den `JsonValue`-Typ erstellt haben, um die Verwendung unseres `localStore`-Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir, dass die Verbraucher von `localStore` den Typ der Daten angeben können, die gespeichert werden sollen, aber anstatt mit jedem Typ zu arbeiten, sollten sie den `JsonValue`-Typ einhalten. Wir werden das mit einer generischen Einschränkung angeben, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den `T`-Typ entsprechend.

Unsere `localStore.ts`-Datei wird folgendermaßen aussehen — probieren Sie den neuen Code jetzt in Ihrer Version:

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

Und dank der generischen Typinferenz weiß TypeScript bereits, dass unser `$todos`-Store ein Array von `TodoType` enthalten soll:

![Todo-Typ-Objekteigenschaft complete sollte abgeschlossen sein](14-vscode-generic-localstore-error.png)

Nochmals, wenn wir darin explizit sein wollten, könnten wir das in der `stores.ts`-Datei tun, so:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das sollte für unsere kurze Tour durch die TypeScript Generics genügen.

## Der Code bis jetzt

### Git

Um den Stand des Codes am Ende dieses Artikels zu sehen, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits gesagt, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Liste-Anwendung genommen und auf TypeScript portiert.

Wir haben zuerst gelernt, was TypeScript ist und welche Vorteile es uns bietet. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt auf TypeScript umstellt — unsere To-Do-Liste-App.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check`-Tool verwendet, um TypeScript-Probleme von der Kommandozeile aus zu überprüfen.

Im nächsten Artikel lernen wir, wie man unsere App kompiliert und in die Produktion bereitstellt. Wir werden auch sehen, welche Ressourcen online zur Verfügung stehen, um mehr über Svelte zu lernen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
