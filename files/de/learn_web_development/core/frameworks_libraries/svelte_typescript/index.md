---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir Svelte Stores kennengelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App in Web Storage zu speichern. Wir haben uns auch angesehen, wie die Übergangsdirektive verwendet wird, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Jetzt lernen wir, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile von TypeScript vollständig zu nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse zu
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten node und npm, um Ihre App zu kompilieren und zu bauen.
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

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und das Portieren zu TypeScript völlig optional ist. Es gibt unterschiedliche Meinungen dazu, und in diesem Kapitel werden wir kurz die Vor- und Nachteile der Verwendung von TypeScript besprechen. Auch wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel nützlich sein, um zu lernen, was es zu bieten hat, und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie sich überhaupt nicht für TypeScript interessieren, können Sie zum nächsten Kapitel übergehen, in dem wir verschiedene Optionen zur Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr untersuchen.

## Coden Sie mit uns

### Git

Clonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Zustand zu erreichen, führen Sie aus

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

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generika bietet. Das Ziel von TypeScript ist es, durch sein Typsystem frühzeitig Fehler zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung bereitstellen können, um häufige Fehler beim Schreiben des Codes zu erkennen.

Das Beste daran ist, dass JavaScript-Code gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie funktionieren einfach.

Unser TypeScript-Code kann überall ausgeführt werden, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code in reines JavaScript. Das bedeutet, es analysiert TypeScript-Code und erzeugt den entsprechenden reinen JavaScript-Code, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig darauf sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Erstklassige TypeScript-Unterstützung war Sveltes meistgefordertes Feature seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Beitragenden, gibt es eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript), die bereit ist, getestet zu werden. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten können, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Früh erfasste Bugs: Der Compiler überprüft Typen zur Kompilierungszeit und bietet Fehlermeldungen.
- Lesbarkeit: Statische Typisierung verleiht dem Code mehr Struktur, was ihn selbstdokumentierend und lesbarer macht.
- Umfangreiche IDE-Unterstützung: Typsinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichere Refaktorisierung: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Ihnen bei der Refaktorisierung großer Teile Ihres Codebasisse zu helfen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen auch ohne Deklaration von Variablentypen zu nutzen.
- Verfügbarkeit neuer und zukünftiger JavaScript-Features: TypeScript transpiliert viele neuere JavaScript-Features zu einfachem altem JavaScript, sodass Sie sie auch auf Benutzeragenten verwenden können, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierungszeit überprüft und aus dem generierten Code entfernt.
- Steile Lernkurve: Obwohl TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine erhebliche Lernkurve, besonders wenn Sie keinerlei Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Obwohl Typen Ihnen helfen können, mehrere Fehler zu erkennen, ist TypeScript kein echter Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Mit Typen, Klassen, Schnittstellen und Generika zu arbeiten, kann zu übermäßig komplizierten Codebasen führen.

Es scheint einen breiten Konsens zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, bei denen viele Entwickler am selben Code arbeiten. Und es wird tatsächlich in mehreren groß angelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Nichtsdestotrotz bevorzugen einige Entwickler, es auch bei kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Am Ende liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Beweise zu liefern, um sich darüber klar zu werden.

## Ein Svelte TypeScript-Projekt von Grund auf erstellen

Sie können ein neues Svelte TypeScript-Projekt mithilfe der [Standardvorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminkommandos auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es erstellt ein neues Verzeichnis):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starter-Projekt, das TypeScript-Unterstützung beinhaltet, die Sie dann nach Belieben modifizieren können.

Dann müssen Sie npm anweisen, Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzufügen

Um ein bestehendes Svelte-Projekt mit TypeScript-Unterstützung auszustatten, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner im Stammverzeichnis Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um mit dem Portieren unserer Anwendung zu TypeScript zu beginnen.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Listenanwendung in JavaScript zu erhalten, bevor Sie mit dem Portieren zu TypeScript beginnen.

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

Diese Anleitungen gelten für jedes Svelte-Projekt, das Sie in TypeScript konvertieren möchten. Beachten Sie lediglich, dass die Svelte-Community ständig die TypeScript-Unterstützung von Svelte verbessert, sodass Sie `npm update` regelmäßig ausführen sollten, um von den neuesten Änderungen zu profitieren.

> [!NOTE]
> Wenn Sie bei der Arbeit mit TypeScript innerhalb einer Svelte-Anwendung auf Schwierigkeiten stoßen, werfen Sie einen Blick auf diesen [Problemlösungs-/Häufig gestellte Fragen-Bereich zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits erwähnt, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Momentan führen Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung aus, ohne die Vorteile der von TypeScript bereitgestellten Funktionen zu nutzen. Sie können jetzt anfangen, Typen schrittweise hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es in regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` in `.ts`. Sie müssen auch alle entsprechenden Importanweisungen aktualisieren, um die `.ts`-Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wirft einen Fehler, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden. Wenn Sie also eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Siehe den Abschnitt [Modul-Auflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Markup-Abschnitten von Komponenten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Obwohl Sie JavaScript aus dem Markup heraus verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Abschnitt verwenden.
> TypeScript in Markup von Komponenten ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript bietet Code-Editoren und IDEs viele Informationen, damit sie eine benutzerfreundlichere Entwicklungsumgebung bereitstellen können.

Wir verwenden [Visual Studio Code](https://code.visualstudio.com/), um einen schnellen Test zu machen und zu sehen, wie wir Autovervollständigungshinweise und Typüberprüfungen erhalten, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie nicht VS Code verwenden möchten, bieten wir auch Anleitungen zur Verwendung der TypeScript-Fehlerprüfung über das Terminal an.

Es wird daran gearbeitet, TypeScript in Svelte-Projekten in mehreren Code-Editoren zu unterstützen. Die umfassendste Unterstützung ist bisher im [Svelte für VS Code-Plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, das vom Svelte-Team entwickelt und gepflegt wird. Dieses Plugin bietet Typprüfung, Inspektion, Refaktorisierung, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art der Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen das offizielle Svelte-Plugin installieren.

Wenn Sie sich innerhalb der VS Code-Anwendung befinden, geben Sie im Stammordner Ihres Projekts `code .` (der abschließende Punkt weist VS Code an, den aktuellen Ordner zu öffnen) ein, um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Plugins zur Installation gibt.

![Dialogfeld, das besagt, dass dieses Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Das Klicken auf _Install all_ wird Svelte für VS Code installieren.

![Svelte für VS Code Erweiterungsinformationen](02-svelte-for-vscode.png)

Wir können auch sehen, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot, der zeigt, dass Hinweise angezeigt werden, wenn man auf eine Komponente hovert](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir erhalten auch Typüberprüfung kostenlos. Wenn wir eine unbekannte Eigenschaft im Parameter der `App`-Konstruktoroptionen übergeben (zum Beispiel einen Tippfehler wie `traget` statt `target`), wird sich TypeScript beschweren:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget gegeben](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das Skript `setupTypeScript.js` das Attribut `lang="ts"` zum `<script>`-Tag hinzugefügt. Darüber hinaus müssen wir dank der Typinferenz in vielen Fällen nicht einmal die Typen angeben, um Code-Unterstützung zu erhalten. Wenn Sie zum Beispiel anfangen, eine `ms`-Eigenschaft zur `Alert`-Komponentenaufruf hinzuzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Code-Hinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es sich darüber beschweren:

![Typüberprüfung in VS Code - der ms-Variablen wurde ein nicht numerischer Wert zugewiesen](06-vscode-type-checking-in-components.png)

Die Anwendungsvorlage hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, aus der Befehlszeile heraus, was es ziemlich nützlich macht, um es in einer kontinuierlichen Integrationspipeline (CI) auszuführen. Führen Sie einfach `npm run check` aus, um unbenutztes CSS zu überprüfen und A11y-Hinweise und TypeScript-Kompilierfehler zurückzugeben.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), erhalten Sie den folgenden Fehler:

![Check-Befehl in VS Code ausgeführt, zeigt Typfehler, ms-Variable sollte eine Zahl sein](07-vscode-svelte-check.png)

Noch besser, wenn Sie es aus dem integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), führt <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> durch Klicken auf den Dateinamen Sie zu der Zeile mit dem Fehler.

Sie können das `check`-Skript auch im Watch-Modus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript bei jeder Änderung einer Datei ausgeführt. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster ausgeführt, damit es weiterhin Fehler melden kann, aber nicht mit anderen Terminalverwendungen interferiert.

## Einen benutzerdefinierten Typ erstellen

TypeScript unterstützt strukturelle Typisierung. Die strukturelle Typisierung ist eine Möglichkeit, Typen allein basierend auf ihren Mitgliedern in Beziehung zu setzen, auch wenn Sie den Typ nicht explizit definieren.

Wir definieren einen Typ `TodoType`, um zu sehen, wie TypeScript sicherstellt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell kompatibel ist.

1. Erstellen Sie im `src`-Ordner einen `types`-Ordner.
2. Fügen Sie eine `todo.type.ts`-Datei darin hinzu.
3. Geben Sie der `todo.type.ts` die folgenden Inhalte:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Die Svelte-Vorlage verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie `export`/`import`-Typen-Syntax verwenden, um Typen und Schnittstellen zu importieren. Weitere Informationen finden Sie in [diesem Abschnitt des Problemlösungsleitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation).

4. Jetzt verwenden wir `TodoType` aus unserer `Todo.svelte`-Komponente. Fügen Sie zuerst das `lang="ts"`-Attribut zu unserem `<script>`-Tag hinzu.
5. Importieren wir den Typ und verwenden ihn, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die `export let todo`-Zeile durch das folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Jetzt instanziieren wir eine `Todo`-Komponente in `Todos.svelte` mit einem Literalobjekt als Parameter vor dem `MoreActions`-Komponentenaufruf, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'`-Attribut zu dem `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es weiß, dass es die von uns angegebene Typprüfung verwenden soll.

   Wir erhalten den folgenden Fehler:

   ![Typfehler in VS Code, Todo Type-Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript beim Erstellen von Svelte-Projekten erhalten können.

Jetzt werden wir diese Änderungen rückgängig machen, um mit dem Portieren unserer Anwendung zu TypeScript zu beginnen, damit wir nicht mit allen Prüfungswarnungen belästigt werden.

1. Entfernen Sie das fehlerhafte To-Do und das `lang='ts'`-Attribut aus der `Todos.svelte`-Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir kümmern uns später ordnungsgemäß darum.

## Portieren unserer To-Do-Listen-App zu TypeScript

Jetzt sind wir bereit, mit dem Portieren unserer To-Do-Listenanwendung zu beginnen, um alle Funktionen, die TypeScript uns bietet, voll auszunutzen.

Beginnen wir damit, das Check-Skript im Watch-Modus im Projektstamm auszuführen:

```bash
npm run check -- --watch
```

Dies sollte etwas wie das folgende ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass, wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, eine einfache Möglichkeit, mit der Portierung einer Svelte-Komponente zu beginnen, darin besteht, einfach `<script lang='ts'>` an die Spitze Ihrer Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen:

![VS Code-Screenshot, der zeigt, dass, wenn Sie lang='ts' zu einer Komponente hinzufügen, es Ihnen dreipunktige Hinweis zeigt](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte`-Komponente.

1. Fügen Sie `lang="ts"` in das `<script>`-Tag Ihrer `Alert.svelte`-Komponente ein. Sie werden einige Warnungen in der Ausgabe des `check`-Skripts sehen:

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
   > Es ist nicht erforderlich, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Nun werden wir dasselbe für die `MoreActions.svelte`-Komponente tun.

1. Fügen Sie wie zuvor das `lang='ts'`-Attribut hinzu. TypeScript wird uns über die `todos`-Prop und die `t`-Variable im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir verwenden den `TodoType`, den wir bereits definiert haben, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die Zeile `export let todos` mit dem Folgenden:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript nun ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Trotzdem, wenn wir denken, dass unser Code dadurch leichter lesbar wird, könnten wir es so spezifizieren:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Meistens wird TypeScript in der Lage sein, den Typ der reaktiven Variablen korrekt abzuleiten, aber manchmal können Sie einen Fehler vom Typ "implizit hat 'any'-Typ" erhalten, wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, wie folgt:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ in der reaktiven Zuweisung selbst nicht angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie unter [Wie typisiere ich reaktive Zuweisungen? / Ich erhalte einen "implizit hat Type 'any'-Fehler"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt werden wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut wie gewohnt in das `<script>`-Tag ein. Sie werden feststellen, dass es keine Warnungen gibt — TypeScript leitet den Typ der Filtervariablen aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: alle, aktiv und abgeschlossen. So können wir TypeScript darüber informieren, indem wir ein Enum Filter erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt verwenden wir dies aus der `FilterButton`-Komponente. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei mit folgendem:

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

Hier importieren wir einfach das `Filter`-Enum und verwenden es statt der vorher verwendeten String-Werte.

### Todos.svelte

Wir werden auch das `Filter`-Enum in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zunächst das `lang='ts'`-Attribut hinzu, wie zuvor.
2. Importieren Sie dann das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter den vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt werden wir es wann immer der aktuelle Filter referenziert wird verwenden. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch das folgende:

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

4. `check` wird uns weiterhin einige Warnungen von `Todos.svelte` geben. Lassen Sie uns diese beheben.

   Beginnen Sie mit dem Importieren des `TodoType` und teilen Sie TypeScript mit, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes werden wir alle fehlenden Typen angeben. Die Variable `todosStatus`, die wir verwendet haben, um programmatisch auf die Methoden zuzugreifen, die von der `TodosStatus`-Komponente bereitgestellt werden, ist vom Typ `TodosStatus`. Und jeder `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>`-Abschnitt, so dass er so aussieht:

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

Wir sind auf die folgenden Fehler gestoßen, die im Zusammenhang mit der Übergabe von `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`-)Komponenten stehen:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Dies liegt daran, dass die `todos`-Prop in der `TodosStatus`-Komponente keinen Standardwert hat, sodass TypeScript sie als Typ `undefined` abgeleitet hat, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann das `TodoType` und deklarieren Sie `todos` als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts durch folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir geben auch an, dass das `headingEl`, das wir verwendet haben, um die Überschrift zu binden, ein `HTMLElement` ist. Aktualisieren Sie die Zeile `let headingEl` mit folgendem:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehlerbericht bemerken, der sich auf das Setzen des `tabindex`-Attributs bezieht. Das liegt daran, dass TypeScript das `<h2>`-Element typüberprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Hinweis zu tabindex in VS Code, tabindex erwartet einen Zahlentyp, keine Zeichenfolge](10-vscode-tabindex-hint.png)

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, wie folgt:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   So kann TypeScript verhindern, dass wir es versehentlich einer Zeichenfolgenvariable zuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Fügen Sie wie gewohnt das `lang='ts'`-Attribut hinzu.
2. Die Warnung wird anzeigen, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement`, wie folgt:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zum Schluss für diese Datei müssen wir den korrekten Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie deren Definition wie folgt:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt stammen die einzigen Warnungen, die `npm run check` ausgibt, von Aufrufen der `Todo.svelte`-Komponente. Lassen Sie uns diese beheben.

1. Öffnen Sie die `Todo.svelte`-Datei und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren wir das `TodoType` und setzen den Typ der `todo`-Prop. Ersetzen Sie die Zeile `export let todo` durch folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der `update()`-Funktion `updatedTodo`-Variable zu definieren. Das kann ein wenig knifflig sein, da `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es kein vollständiges `todo` ist — es hat nur einen Teil der Eigenschaften eines `todo`.

   Für diese Arten von Fällen bietet TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html), um es einfacher zu machen, diese häufigen Transformationen anzuwenden. Was wir gerade brauchen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt)-Dienstprogramm, das es uns erlaubt, alle Untergruppen eines gegebenen Typs darzustellen. Das partielle Dienstprogramm gibt einen neuen Typ basierend auf dem Typ `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()`-Funktion — aktualisieren Sie Ihres wie folgt:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit teilen wir TypeScript mit, dass die `updatedTodo`-Variable eine Untergruppe der `TodoType`-Eigenschaften enthalten wird.

4. Jetzt informiert uns svelte-check, dass wir den Typ der Parameters unserer Aktionsfunktion definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die Knotenvariable als `HTMLElement` definieren. Ersetzen Sie in den beiden angegebenen Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Als Nächstes kümmern wir uns um die `actions.js`-Datei.

1. Benennen Sie sie in `actions.ts` um und geben Sie den Typ des Knotenparameters an. Dies sollte schließlich so aussehen:

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

2. Jetzt aktualisieren Sie `Todo.svelte` und `NewTodo.svelte`, wo wir die Aktionen-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In jedem Fall sollte es schließlich so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Die Stores zu TypeScript migrieren

Jetzt müssen wir die `stores.js`- und `localStore.js`-Dateien zu TypeScript migrieren.

Tipp: Das Skript `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)-Tool verwendet, überprüft nur die `.svelte`-Dateien unserer Anwendung. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, das dem TypeScript-Compiler anweist, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Beginnen wir mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays auf `TodoType[]`. Der Inhalt wird schließlich so aussehen:

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

Aktualisieren Sie die `import`-Anweisung in `stores.ts`, wie folgt:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie damit, die Datei in `localStore.ts` umzubenennen.
2. TypeScript sagt uns, dass wir den Typ der Variablen `key`, `initial` und `value` angeben müssen. Der erste ist einfach: Der Schlüssel unseres lokalen Web-Speichers sollte eine Zeichenfolge sein.

   Aber `initial` und `value` sollten jedes beliebige Objekt sein, das mit der Methode [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in einen gültigen JSON-String umgewandelt werden kann, was jedes JavaScript-Objekt mit ein paar Einschränkungen bedeutet: Zum Beispiel sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Lassen Sie uns also den Typ `JsonValue` erstellen, um diese Bedingungen anzugeben.

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

   Der `|`-Operator ermöglicht es uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte eine Zeichenfolge, eine Zahl, ein Boolean usw. sein. In diesem Fall nutzen wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` haben kann und auch ein Objekt mit Eigenschaften vom Typ `JsonValue`.

4. Wir importieren unseren `JsonValue`-Typ und verwenden ihn entsprechend. Aktualisieren Sie Ihre `localStore.ts`-Datei wie folgt:

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

Jetzt, wenn wir versuchen, einen `localStore` mit etwas zu erstellen, das nicht mit `JSON.stringify()` zu JSON konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird sich VS Code oder `validate` darüber beschweren:

![VS Code zeigt einen Fehler an, bei der Verwendung unseres Stores — er schlägt fehl, wenn versucht wird, einen lokalen Speicherwert auf etwas einzustellen, das nicht mit JSON stringify kompatibel ist](11-vscode-invalid-store.png)

Und das Beste ist, dass es sogar mit der [`$store` Auto-Abonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktioniert. Wenn wir versuchen, einen ungültigen Wert in unseren `todos`-Store mit der `$store`-Syntax zu speichern, wie folgt:

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

Dies ist ein weiteres Beispiel dafür, wie die Angabe von Typen unseren Code robuster machen und uns helfen kann, mehr Fehler zu erfassen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere ganze Anwendung zu TypeScript konvertiert.

## Unsere Stores mit Generika absichern

Unsere Stores wurden bereits auf TypeScript portiert, aber wir können es noch besser machen. Wir sollten nicht jeden beliebigen Wert speichern müssen — wir wissen, dass der Alarmstore nur Zeichenfolgen speichern sollte und der To-Dos-Store ein Array von `TodoType` enthalten sollte usw. Wir können TypeScript dies mit [TypeScript-Generika](https://www.typescriptlang.org/docs/handbook/generics.html) erzwingen. Lassen Sie uns mehr herausfinden.

### TypeScript-Generika verstehen

Generika ermöglichen es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen arbeiten, anstatt mit einem einzelnen Typ. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mittels einer speziellen Syntax übergeben: Sie werden in spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein kurzes Beispiel sehen, eine einfache `Stack`-Klasse, die es uns ermöglicht, Elemente mit `push` und `pop` zu bearbeiten, wie folgt:

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

In diesem Fall sind die `elements` ein Array vom Typ `any`, und dementsprechend empfangen und geben die Methoden `push()` und `pop()` eine Variable vom Typ `any` zurück. Es ist also völlig gültig, so etwas wie das Folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was ist, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` arbeiten würde? Wir könnten folgendes tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir einen Stapel von Typen handhaben, die wir noch nicht kennen und die vom Verbraucher definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generika verwenden.

Dies ist unsere `Stack`-Klasse, neu implementiert mit Generika:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann wie einen spezifischen Typ. Jetzt sind die `elements` ein Array vom Typ `T`, und `push()` und `pop()` empfangen und geben beide eine Variable vom Typ `T` zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und wird einen Fehler ausgeben, wenn wir versuchen, etwas anderes hinzuzufügen:

![Argument des Typs hello ist nicht an Parameter des Typs Zahl zuzuordnen](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen anhand ihrer Verwendung ableiten. Generika unterstützen auch Standardwerte und Einschränkungen.

Generika sind ein leistungsfähiges Feature, das es unserem Code ermöglicht, sich von den spezifischen verwendeten Typen zu abstrahieren, was ihn wiederverwendbarer und allgemeiner macht, ohne auf die Typensicherheit zu verzichten. Um mehr darüber zu erfahren, lesen Sie die [TypeScript Introduction to Generics](https://www.typescriptlang.org/docs/handbook/generics.html).

### Svelte-Stores mit Generika verwenden

Svelte-Stores unterstützen Generika sofort. Und dank der generischen Typableitung können wir davon profitieren, ohne unseren Code zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ unserem `$alert`-Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument des Typs 9999 ist nicht an Parameter des Typs Zeichenkette zuzuordnen](13-vscode-generic-alert-error.png)

Das liegt daran, dass, als wir unseren Alarmstore in der `stores.ts`-Datei mit:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

definiert haben, TypeScript den generischen Typ als `string` abgeleitet hat. Wenn wir explizit sein wollten, könnten wir folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt werden wir unsere `localStore`-Stores um generische unterstützung erweitern. Denken Sie daran, dass wir den `JsonValue`-Typ definiert haben, um die Verwendung unserer `localStore`-Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir, dass die Verbraucher von `localStore` in der Lage sind, den Typ der zu speichernden Daten anzugeben, aber anstatt mit einem beliebigen Typ zu arbeiten, sollten sie den `JsonValue`-Typ erfüllen. Das geben wir mit einer Generika-Einschränkung an, wie folgt:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // …
};
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den `T`-Typ entsprechend.

Unsere `localStore.ts`-Datei wird so enden — probieren Sie den neuen Code jetzt in Ihrer Version aus:

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

Und Dank der generischen Typableitung weiß TypeScript bereits, dass unser `$todos`-Store ein Array von `TodoType` enthalten soll:

![Todo-Typobjekteigenschaft abgschlossen sollte vollständig sein](14-vscode-generic-localstore-error.png)

Nochmals, wenn wir explizit sein wollten, könnten wir das im `stores.ts`-File tun, wie folgt:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war der kurze Ausflug in TypeScript-Generics.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie so auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Vergessen Sie nicht `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits erwähnt, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Listenanwendung zu TypeScript portiert.

Zuerst haben wir gelernt, was TypeScript ist und welche Vorteile es uns bringen kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt auf TypeScript umstellt — unsere To-Do-Listenanwendung.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check`-Tool verwendet, um TypeScript-Probleme aus der Befehlszeile zu überprüfen.

Im nächsten Artikel lernen wir, wie wir unsere App für die Produktion kompilieren und bereitstellen. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um weiter mit Svelte zu lernen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
