---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir über Svelte-Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Webspeicher zu speichern. Wir haben uns auch angeschaut, wie die Übergangsrichtlinie für Animationen an DOM-Elementen in Svelte verwendet wird.

Wir werden nun lernen, wie TypeScript in Svelte-Anwendungen verwendet wird. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es uns bringt. Dann sehen wir, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Funktionen von TypeScript voll auszunutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal / die Befehlszeile</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
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

Beachten Sie, dass unsere Anwendung voll funktionsfähig ist und die Portierung auf TypeScript vollständig optional ist. Es gibt dazu unterschiedliche Meinungen, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile der Verwendung von TypeScript sprechen. Auch wenn Sie nicht planen, es zu verwenden, wird dieser Artikel nützlich sein, um zu lernen, was es zu bieten hat und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie überhaupt nicht an TypeScript interessiert sind, können Sie zum nächsten Kapitel springen, in dem wir verschiedene Optionen zur Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr betrachten werden.

## Code mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Stand der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist [TypeScript-Unterstützung im REPL derzeit nicht verfügbar](https://github.com/sveltejs/svelte.dev/issues/853).

## TypeScript: optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu machen. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung bereitstellen können, um häufige Fehler zu erkennen, während Sie den Code schreiben.

Am besten ist, dass JavaScript-Code auch gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen und sie werden einfach funktionieren.

Unser TypeScript-Code kann überall ausgeführt werden, wo auch JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code in Vanilla-JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den entsprechenden Vanilla-JavaScript-Code erzeugt, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Erstklassige TypeScript-Unterstützung war schon seit einiger Zeit die am meisten gewünschte Funktion für Svelte. Dank der harten Arbeit des Svelte-Teams und vieler Mitwirkender gibt es nun eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript), die bereit ist, getestet zu werden. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitige Erkennung von Fehlern: Der Compiler überprüft Typen zur Compile-Zeit und bietet Fehlerberichte.
- Lesbarkeit: Statische Typisierung verleiht dem Code mehr Struktur, macht ihn selbstdokumentierend und leichter lesbar.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichereres Refactoring: Typen ermöglichen es den IDEs, mehr über Ihren Code zu wissen und Sie beim Refactoring großer Teile Ihres Codebase zu unterstützen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen in normales, altbewährtes JavaScript, sodass Sie diese verwenden können, auch auf Benutzeragenten, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Compile-Zeit überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Auch wenn TypeScript eine Obermenge von JavaScript ist und keine völlig neue Sprache, gibt es eine erhebliche Lernkurve, insbesondere wenn Sie überhaupt keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Obwohl Typen Ihnen helfen können, mehrere Fehler zu erkennen, ist TypeScript kein wahrer Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generics kann zu übermäßig ausgeklügelten Codebasen führen.

Es scheint einen breiten Konsens zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, bei denen viele Entwickler am gleichen Codebase arbeiten. Und es wird tatsächlich in mehreren groß angelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Dennoch ziehen es einige Entwickler vor, es sogar bei kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Am Ende ist es Ihre Entscheidung. In den folgenden Abschnitten hoffen wir Ihnen mehr Beweise zu geben, um sich selbst darüber Gedanken zu machen.

## Erstellen eines Svelte-TypeScript-Projekts von Grund auf

Sie können ein neues Svelte-TypeScript-Projekt mit dem [Standard-Template](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starter-Projekt, das TypeScript-Unterstützung enthält, die Sie dann nach Belieben ändern können.

Dann müssen Sie npm anweisen, Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner in Ihrem Projektstammordner herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um mit der Portierung unserer Anwendung zu TypeScript zu beginnen.

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

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript konvertieren möchten. Beachten Sie, dass die Svelte-Community ständig die TypeScript-Unterstützung für Svelte verbessert, sodass Sie regelmäßig `npm update` ausführen sollten, um von den neuesten Änderungen zu profitieren.

> [!NOTE]
> Wenn Sie Probleme mit der Arbeit mit TypeScript in einer Svelte-Anwendung haben, schauen Sie sich diesen [Troubleshooting/FAQ-Bereich zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq) an.

Wie bereits erwähnt, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Derzeit läuft eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung, ohne dass die Funktionen genutzt werden, die TypeScript bietet. Sie können nun beginnen, Typen schrittweise hinzuzufügen.

Nachdem Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es in regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` zu `.ts`. Sie müssen auch die entsprechenden Importanweisungen aktualisieren, um die `.ts`-Dateierweiterung von allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler ausgeben, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden, also wenn Sie eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Siehe den Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Lader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Komponentengestaltungsabschnitten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Während Sie also JavaScript aus der Gestaltung verwenden können, müssen Sie TypeScript im Abschnitt `<script lang='ts'>` verwenden.
> TypeScript in Komponentengestaltungsabschnitten ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript bietet Code-Editoren und IDEs viele Informationen, um ihnen eine angenehmere Entwicklungserfahrung zu ermöglichen.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen kurzen Test durchzuführen und zu sehen, wie wir Vervollständigungshinweise und Typüberprüfung erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir später auch Anweisungen zur Verwendung der TypeScript-Fehlerprüfung über das Terminal an.

Es wird daran gearbeitet, TypeScript in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die bisher umfassendste Unterstützung ist in der [Svelte for VS Code Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gewartet wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refactoring, Intellisense, Hover-Information, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich innerhalb der VS Code-Anwendung, geben Sie vom Stammverzeichnis Ihres Projekts `code .` ein (der nachfolgende Punkt weist VS Code an, den aktuellen Ordner zu öffnen), um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen zum Installieren gibt.

![Dialogfeld, das sagt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Wenn Sie auf _Alles installieren_ klicken, wird Svelte für VS Code installiert.

![Svelte for VS Code Erweiterungsinformationen](02-svelte-for-vscode.png)

Wir können auch sehen, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code Screenshot zeigt, dass beim Hover auf eine Komponente Hinweise gegeben werden](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir erhalten auch eine Typüberprüfung kostenlos. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (zum Beispiel einen Tippfehler wie `traget` statt `target`), wird TypeScript sich darüber beschweren:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traquet gegeben](04-vscode-type-checking-in-main-ts.png)

Im `App.svelte` Komponent hat das `setupTypeScript.js` Skript das `lang="ts"` Attribut zum `<script>` Tag hinzugefügt. Dank der Typinferenz müssen wir in vielen Fällen nicht einmal Typen angeben, um Unterstützung durch den Code zu erhalten. Wenn Sie zum Beispiel beginnen, eine `ms` Eigenschaft zum `Alert`-Komponentenaufruf hinzuzufügen, wird TypeScript von dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Code-Vervollständigung - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es sich darüber beschweren:

![Typüberprüfung in VS Code - der ms-Variable wurde ein nicht numerischer Wert zugewiesen](06-vscode-type-checking-in-components.png)

Das Anwendungs-Template hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, über die Befehlszeile, was es ziemlich nützlich macht, um es in einer kontinuierlichen Integrationspipeline (CI) auszuführen. Führen Sie einfach `npm run check` aus, um nicht verwendetes CSS zu prüfen und A11y-Hinweise und TypeScript-Compiler-Fehler zu melden.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), erhalten Sie den folgenden Fehler:

![Check-Befehl wird in VS Code ausgeführt, zeigt einen Typfehler an, die ms-Variable sollte eine Zahl zugewiesen bekommen](07-vscode-svelte-check.png)

Noch besser: Wenn Sie es von dem integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), können Sie durch Drücken von <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> auf den Dateinamen zur Zeile gehen, die den Fehler enthält.

Sie können das `check`-Skript auch im Watch-Modus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript bei jeder Änderung einer Datei ausgeführt. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, damit es weiterhin Fehler melden kann, aber nicht andere Terminalverwendungen stört.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Möglichkeit, Typen ausschließlich basierend auf ihren Mitgliedern zu vergleichen, selbst wenn Sie den Typ nicht explizit definieren.

Wir definieren einen `TodoType`, um zu sehen, wie TypeScript erzwingt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell kompatibel mit ihm ist.

1. Erstellen Sie einen `types`-Ordner im `src`-Ordner.
2. Fügen Sie eine `todo.type.ts` Datei darin hinzu.
3. Geben Sie `todo.type.ts` den folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Das Svelte-Template verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie das `export`/`import`-Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Weitere Informationen finden Sie in diesem Abschnitt des [Troubleshooting-Guides](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation).

4. Nun verwenden wir `TodoType` in unserer `Todo.svelte` Komponente. Fügen Sie dem `<script>` Tag `lang='ts'` hinzu und ersetzen Sie die `export let todo` Zeile durch:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht zulässig ist und daher weggelassen wurde.

5. Nun werden wir im `Todos.svelte` eine `Todo`-Komponente mit einem literalen Objekt als Parameter vor dem Aufruf der `MoreActions`-Komponente instanziieren, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

6. Fügen Sie `lang='ts'` dem `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit sie weiß, dass die Typprüfung verwendet wird, die wir angegeben haben.

   Wir werden den folgenden Fehler erhalten:

   ![Typfehler in VS Code, Todo Type Objekt erfordert ein id-Attribut.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung darüber bekommen haben, welche Art von Unterstützung wir von TypeScript bei der Erstellung von Svelte-Projekten erhalten können.

Nun machen wir diese Änderungen wieder rückgängig, um mit der Portierung unserer Anwendung auf TypeScript zu beginnen, damit wir nicht von allen Prüfwarnungen gestört werden.

1. Entfernen Sie das fehlerhafte Todo und das `lang='ts'` Attribut von der `Todos.svelte` Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir werden später angemessen damit umgehen.

## Portierung unserer To-Do-Liste-App auf TypeScript

Jetzt sind wir bereit, mit der Portierung unserer To-Do-Liste-Anwendung zu beginnen, um alle Funktionen zu nutzen, die TypeScript uns bietet.

Beginnen wir mit dem Ausführen des Check-Skripts im Watch-Modus im Projektstamm:

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

Beachten Sie, dass, wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, eine einfache Möglichkeit, mit der Portierung einer Svelte-Komponente zu beginnen, darin besteht, einfach das `<script lang='ts'>` oben in Ihrer Komponente hinzuzufügen und nach den mit drei Punkten versehenen Hinweisen zu suchen:

![VS Code Bildschirmfoto zeigt, dass, wenn Sie Typ="ts" zu einer Komponente hinzufügen, diese Ihnen drei Punkt-Warnhinweise gibt](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte` Komponente.

1. Fügen Sie `lang="ts"` in das `<script>`-Tag Ihrer `Alert.svelte` Komponente ein. Sie werden einige Warnungen in der Ausgabe des `check` Skripts sehen:

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
   > Es ist nicht notwendig, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Nun machen wir dasselbe für die `MoreActions.svelte` Komponente.

1. Fügen Sie, wie zuvor, das `lang='ts'` Attribut hinzu. TypeScript wird uns in Bezug auf die `todos`-Eigenschaft und die `t`-Variable im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den bereits definierten `TodoType` verwenden, um TypeScript mitzuteilen, dass `todos` ein Array vom Typ `TodoType` ist. Ersetzen Sie die `export let todos` Zeile durch:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass jetzt TypeScript ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Trotzdem, wenn wir denken, dass es unseren Code leichter lesbar macht, könnten wir es wie folgt angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Meistens wird TypeScript den reaktiven Variablentyp korrekt ableiten, aber manchmal erhalten Sie möglicherweise einen Fehler "implizit hat einen 'any' Typ", wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ in der reaktiven Zuweisung selbst nicht angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie unter [Wie typisiere ich reaktive Zuweisungen? / Ich erhalte einen "implizit hat einen 'any' Typ" Fehler](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton` Komponente.

1. Fügen Sie das `lang='ts'` Attribut zum `<script>`-Tag hinzu, wie üblich. Sie werden bemerken, dass es keine Warnungen gibt — TypeScript leitet den Typ der `filter`-Variable aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Deshalb können wir TypeScript darüber informieren, indem wir ein `enum Filter` erstellen.
2. Erstellen Sie eine `filter.enum.ts` Datei im `types` Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Nun werden wir dies von der `FilterButton` Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte` Datei durch den folgenden:

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

Hier importieren wir einfach das `Filter` enum und verwenden es anstelle der zuvor verwendeten Zeichenfolgenwerte.

### Todos.svelte

Wir werden auch das `Filter` enum in der `Todos.svelte` Komponente verwenden.

1. Zuerst fügen Sie das `lang='ts'` Attribut hinzu, wie zuvor.
2. Dann importieren Sie das `Filter` enum. Fügen Sie die folgende `import`-Anweisung unter Ihren bestehenden hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Nun werden wir es immer verwenden, wenn wir auf den aktuellen Filter verweisen. Ersetzen Sie Ihre beiden Filter-bezogenen Blöcke durch die folgenden:

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

4. `check` wird uns immer noch einige Warnungen von `Todos.svelte` geben. Lassen Sie sie uns beheben.

   Beginnen Sie mit dem Importieren von `TodoType` und sagen Sie TypeScript, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes spezifizieren wir alle fehlenden Typen. Die Variable `todosStatus`, die wir verwendet haben, um programmatisch auf die von der `TodosStatus` Komponente bereitgestellten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>` Abschnitt, damit er so aussieht:

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

Wir stoßen auf die folgenden Fehler im Zusammenhang mit dem Übergeben von `todos` an die `TodosStatus.svelte` (und `Todo.svelte`) Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Dies liegt daran, dass die `todos`-Eigenschaft in der `TodosStatus` Komponente keinen Standardwert hat, sodass TypeScript schlussfolgert, dass sie vom Typ `undefined` ist, was nicht kompatibel mit einem `TodoType`-Array ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die `TodosStatus.svelte` Datei und fügen Sie das `lang='ts'` Attribut hinzu.
2. Importieren Sie dann den `TodoType` und deklarieren Sie die `todos`-Eigenschaft als Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>` Abschnitts durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir spezifizieren auch das `headingEl`, das wir zum Binden an das Überschriftstag verwendet haben, als `HTMLElement`. Aktualisieren Sie die `let headingEl` Zeile wie folgt:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler bemerken, der sich auf die Stelle bezieht, an der wir die `tabindex` Eigenschaft gesetzt haben. Dies liegt daran, dass TypeScript das `<h2>` Element überprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, erwartet einen Typ von Zahl, nicht Zeichenfolge](10-vscode-tabindex-hint.png)

   Um es zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, so:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript uns daran hindern, es falsch zu einer Zeichenfolgenvariablen zuzuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Wie üblich fügen Sie das `lang='ts'` Attribut hinzu.
2. Die Warnung wird darauf hinweisen, dass wir einen Typ für die `nameEl` Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement`, so:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt für diese Datei müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie deren Definition so:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` ausgibt, solche, die durch den Aufruf der `Todo.svelte` Komponente ausgelöst werden. Lassen Sie uns sie beheben.

1. Öffnen Sie die `Todo.svelte` Datei und fügen Sie das `lang='ts'` Attribut hinzu.
2. Lassen Sie uns den `TodoType` importieren und den Typ der `todo`-Eigenschaft festlegen. Ersetzen Sie die `export let todo` Zeile mit:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns mitteilt, den Typ der `update()` Funktion's `updatedTodo` Variable festzulegen. Dies kann etwas knifflig sein, da `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, es ist kein vollständiges `todo` — es hat nur eine Teilmenge der Eigenschaften eines `todo`.

   Für solche Fälle bietet TypeScript mehrere [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html), um es einfacher zu machen, diese häufigen Transformationen anzuwenden. Was wir gerade brauchen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) Dienstprogramm, das es uns ermöglicht, alle Teilmengen eines gegebenen Typs darzustellen. Das Partial-Dienstprogramm gibt einen neuen Typ basierend auf dem Typ `T` zurück, wobei jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()` Funktion — aktualisieren Sie Ihre so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit sagen wir TypeScript, dass die `updatedTodo`-Variable eine Teilmenge der `TodoType`-Eigenschaften enthalten wird.

4. Jetzt sagt uns svelte-check, dass wir den Typ unserer aktionsfunktionsparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die node-Variable als `HTMLElement` definieren. Ersetzen Sie in den beiden angegebenen Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die `actions.js` Datei.

1. Benennen Sie sie in `actions.ts` um und geben Sie den Typ des node-Parameters an. Sie sollte so aussehen:

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

2. Aktualisieren Sie nun `Todo.svelte` und `NewTodo.svelte`, wo wir die actions Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In jedem Fall sollte es so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Jetzt müssen wir die `stores.js` und `localStore.js` Dateien zu TypeScript migrieren.

Tipp: Das Script `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) Werkzeug verwendet, überprüft nur die `.svelte` Dateien unserer Anwendung. Wenn Sie auch die `.ts` Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, was dem TypeScript-Compiler sagt, dass er nach Fehlern suchen soll, ohne die `.js` Ausgabedateien zu generieren. Sie könnten sogar ein Script in Ihre `package.json` Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos` Arrays auf `TodoType[]`. So wird der Inhalt enden:

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

3. Denken Sie daran, die `import` Anweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Entfernen Sie einfach die `.js` Erweiterung, so:

   ```js
   import { todos } from "../stores";
   ```

Nun zu `localStore.js`.

Aktualisieren Sie die `import` Anweisung in `stores.ts` so:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie mit der Umbenennung der Datei in `localStore.ts`.
2. TypeScript sagt uns, dass wir den Typ der `key`, `initial` und `value` Variablen angeben müssen. Die erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenfolge sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das in einen gültigen JSON-String mit der [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Methode konvertiert werden könnte, was bedeutet, dass es jedes JavaScript-Objekt mit ein paar Einschränkungen sein kann: beispielsweise sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Also erstellen wir den Typ `JsonValue`, um diese Bedingungen festzulegen.

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

   Der `|` Operator lässt uns Variablen deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte eine Zeichenfolge, eine Nummer, ein Boolean usw. sein. In diesem Fall verwenden wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` haben kann und auch ein Objekt mit Eigenschaften vom Typ `JsonValue`.

4. Wir importieren unseren `JsonValue` Typ und verwenden ihn entsprechend. Aktualisieren Sie Ihre `localStore.ts` Datei so:

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

Jetzt, wenn wir versuchen, einen `localStore` mit etwas zu erstellen, das nicht über `JSON.stringify()` in JSON konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` sich darüber beschweren:

![VS Code zeigt einen Fehler bei der Verwendung unseres Stores an — es schlägt fehl, wenn versucht wird, einen lokalen Speicherwert auf etwas inkompatibles mit JSON.stringify() zu setzen](11-vscode-invalid-store.png)

Und das Beste ist, es wird sogar mit der [`$store` Auto-Abo Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktionieren. Wenn wir versuchen, einen ungültigen Wert in unserem `todos` Store mit der `$store`-Syntax zu speichern, so:

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

Das check Script wird den folgenden Fehler melden:

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

Dies ist ein weiteres Beispiel dafür, wie die Angabe von Typen unseren Code robuster machen kann und uns helfen kann, mehr Fehler zu finden, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung so umgestellt, dass sie TypeScript verwendet.

## Kugelsicher machen unserer Stores mit Generics

Unsere Stores wurden bereits auf TypeScript portiert, aber wir können noch mehr tun. Wir sollten nicht jede Art von Wert speichern müssen — wir wissen, dass der Alert Store Zeichenfolgenmeldungen enthalten sollte, und der Todos Store sollte ein Array von `TodoType` enthalten, usw. Wir können TypeScript dies durch Verwendung von [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) erzwingen. Finden wir mehr darüber heraus.

### Verständnis von TypeScript Generics

Generics ermöglichen es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen anstelle eines einzigen Typs arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mithilfe einer speziellen Syntax übergeben: sie werden innerhalb von Spitzklammern angegeben und konventionell mit einem einzelnen großen Buchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die von den Benutzern bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Sehen wir uns ein kurzes Beispiel an, eine einfache `Stack`-Klasse, die es uns erlaubt, Elemente zu `push`-en und zu `pop`-en, so:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und entsprechend nehmen die Methoden `push()` und `pop()` beide eine Variable vom Typ `any` entgegen und geben sie zurück. Daher ist es vollkommen gültig, etwas wie das Folgende zu tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir unseren Code duplizieren, um eine `NumberStack`-Klasse zu erstellen. Und wie könnten wir einen Stack von Typen behandeln, die wir noch nicht kennen und die vom Konsumenten definiert werden sollten?

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann, wie wir normalerweise einen spezifischen Typ verwenden würden. Jetzt ist `elements` ein Array vom Typ `T`, und `push()` und `pop()` nehmen beide eine Variable vom Typ `T` entgegen und geben sie zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Nun weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und gibt einen Fehler aus, wenn wir versuchen, etwas anderes zu `push`-en:

![Argument vom Typ hallo kann nicht dem Parameter vom Typ Zahl zugewiesen werden](12-vscode-generic-stack-error.png)

TypeScript kann generische Typen auch durch ihre Verwendung ableiten. Generics unterstützen auch Standardwerte und Einschränkungen.

Generics sind ein mächtiges Werkzeug, das es unserem Code ermöglicht, sich von den spezifischen verwendeten Typen zu abstrahieren, ihn wiederverwendbar und generisch zu machen, ohne auf Typsicherheit zu verzichten. Um mehr darüber zu erfahren, lesen Sie die [TypeScript Introduction to Generics](https://www.typescriptlang.org/docs/handbook/generics.html).

### Umgang mit Svelte Stores und Generics

Svelte Stores unterstützen Generics von Haus aus. Und dank der generischen Typinferenz können wir diese nutzen, ohne unseren Code auch nur zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number` Typ für unseren `$alert` Store festlegen, erhalten Sie den folgenden Fehler:

![Argument vom Typ 9999 kann nicht dem Parameter vom Typ string zugewiesen werden](13-vscode-generic-alert-error.png)

Das liegt daran, dass, als wir unseren alert Store in der `stores.ts` Datei mit:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

definierten, TypeScript den generischen Typ als `string` ableitete. Wenn wir bewusst darüber sein wollten, könnten wir das Folgende tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt machen wir, dass unser `localStore` Store Generics unterstützt. Denken Sie daran, dass wir den Typ `JsonValue` definiert haben, um die Verwendung unseres `localStore` Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir, dass die Konsumenten von `localStore` in der Lage sind, den zu speichernden Datentyp zu spezifizieren. Aber anstatt mit jedem Typ zu arbeiten, sollten sie dem Typ `JsonValue` entsprechen. Wir spezifizieren das mit einer generischen Einschränkung, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // …
};
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem Typ `JsonValue` kompatibel sein muss. Dann verwenden wir den Typ `T` angemessen.

Unsere `localStore.ts` Datei wird wie folgt enden — probieren Sie den neuen Code jetzt in Ihrer Version aus:

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

Und dank der generischen Typinferenz weiß TypeScript bereits, dass unser `$todos` Store ein Array von `TodoType` enthalten sollte:

![Todo Type-Objekteigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Noch einmal, wenn wir es explizit machen wollten, könnten wir das im `stores.ts` Datei machen, so:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war's für unsere kurze Tour durch TypeScript Generics.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie mit diesen Anweisungen auf Ihre Kopie unseres Repos zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Erinnern Sie sich daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits gesagt, ist TypeScript momentan im REPL nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Liste-Anwendung nach TypeScript portiert.

Zuerst haben wir gelernt, was TypeScript ist und welche Vorteile es uns bringen kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt in TypeScript konvertiert – unsere To-Do-Liste-App.

Wir haben gelernt, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typprüfung und Auto-Vervollständigung zu erhalten. Wir haben auch das `svelte-check` Werkzeug verwendet, um TypeScript-Probleme über die Befehlszeile zu überprüfen.

Im nächsten Artikel lernen wir, wie wir unsere App für die Produktion kompilieren und bereitstellen. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um mehr über Svelte zu lernen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
