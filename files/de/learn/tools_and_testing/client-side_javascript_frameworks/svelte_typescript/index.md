---
title: TypeScript-Unterstützung in Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir Svelte-Stores kennengelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Web Storage zu speichern. Wir haben uns auch angesehen, wie die Übergangsrichtlinie verwendet wird, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Jetzt lernen wir, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es uns bringen kann. Dann werden wir sehen, wie man unser Projekt konfiguriert, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile der TypeScript-Funktionen voll auszuschöpfen.

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
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie TypeScript beim Entwickeln von Svelte-Anwendungen konfigurieren und verwenden.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und das Portieren auf TypeScript völlig optional ist. Es gibt unterschiedliche Meinungen dazu, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile der Verwendung von TypeScript sprechen. Auch wenn Sie nicht vorhaben, es zu übernehmen, wird dieser Artikel nützlich sein, um zu erfahren, was es zu bieten hat und Ihnen helfen, eine eigene Entscheidung zu treffen. Wenn Sie überhaupt nicht an TypeScript interessiert sind, können Sie zum nächsten Kapitel springen, in dem wir uns verschiedene Optionen zur Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen werden.

## Arbeiten Sie mit uns mit

### Git

Klonen Sie das GitHub-Repository (falls Sie es nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erreichen, führen Sie dann aus:

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

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist die Möglichkeit für Entwicklungsumgebungen, eine reichhaltigere Umgebung zum Erkennen häufiger Fehler beim Eingeben des Codes zu bieten.

Das Beste daran ist, dass JavaScript-Code auch gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien einfach in `.ts`-Dateien umbenennen und sie funktionieren.

Unser TypeScript-Code kann überall dort ausgeführt werden, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code in reines JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den entsprechenden reinen JavaScript-Code für Browser erzeugt.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript-Spielplatz](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Die erstklassige TypeScript-Unterstützung war lange Zeit das am meisten gewünschte Feature von Svelte. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Mitwirkenden, haben wir eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript), die bereit ist, getestet zu werden. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitige Erkennung von Fehlern: Der Compiler überprüft die Typen zur Kompilierungszeit und liefert Fehlermeldungen.
- Lesbarkeit: Statische Typisierung gibt dem Code mehr Struktur, macht ihn selbstdokumentierend und lesbarer.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichereres Refactoring: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Ihnen beim Refactoring großer Teile Ihres Code-Basis zu helfen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen in reines, altmodisches JavaScript, wodurch Sie sie auch auf User-Agents verwenden können, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierungszeit überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Auch wenn TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine erhebliche Lernkurve, insbesondere wenn Sie keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Auch wenn Typen Ihnen helfen können, mehrere Fehler zu erkennen, ist TypeScript kein wirklicher Ersatz für einen umfassenden Satz automatisierter Tests.
- Boilerplate-Code: Das Arbeiten mit Typen, Klassen, Schnittstellen und Generics kann zu übermäßig komplexen Code-Basen führen.

Es scheint einen breiten Konsens darüber zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, bei denen viele Entwickler an derselben Code-Basis arbeiten. Und es wird tatsächlich von mehreren groß angelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Dennoch ziehen es einige Entwickler vor, es auch bei kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Am Ende liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Beweise zu liefern, damit Sie sich eine Meinung bilden können.

## Erstellen eines Svelte-TypeScript-Projekts von Grund auf

Sie können ein neues Svelte-TypeScript-Projekt mit dem [Standard-Template](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dadurch wird ein Starterprojekt erstellt, das die TypeScript-Unterstützung enthält und das Sie nach Belieben anpassen können.

Dann müssen Sie npm anweisen, die Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner im Stammverzeichnis Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um zu beginnen, unsere Anwendung auf TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Listen-Anwendung in JavaScript zu erhalten, bevor Sie beginnen, sie auf TypeScript zu portieren.

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

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript konvertieren möchten. Beachten Sie dabei, dass die Svelte-Community die TypeScript-Unterstützung für Svelte ständig verbessert, sodass Sie regelmäßig `npm update` ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie Schwierigkeiten bei der Arbeit mit TypeScript in einer Svelte-Anwendung haben, werfen Sie einen Blick in diesen [Troubleshooting/FAQ-Bereich zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits erwähnt, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Derzeit führen Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung aus, ohne die Funktionen zu nutzen, die TypeScript bietet. Sie können jetzt schrittweise mit dem Hinzufügen von Typen beginnen.

Sobald Sie TypeScript eingerichtet haben, können Sie es in einem Svelte-Komponenten verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es von regulären JavaScript-Dateien aus zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` in `.ts`. Sie müssen auch alle entsprechenden Import-Anweisungen aktualisieren, um die `.ts`-Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wirft einen Fehler, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden, also wenn Sie eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Weitere Informationen finden Sie im Abschnitt [Module resolution for bundlers, TypeScript runtimes, and Node.js loaders](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) des TypeScript-Handbuchs.

> [!NOTE]
> Die Verwendung von TypeScript in Komponenten-Markup-Abschnitten wird [noch nicht unterstützt](https://github.com/sveltejs/svelte/issues/4701). Sie müssen JavaScript aus dem Markup verwenden und TypeScript im `<script lang='ts'>`-Abschnitt.

## Verbesserte Entwicklungsumgebung mit TypeScript

TypeScript bietet Code-Editoren und IDEs viele Informationen, um eine benutzerfreundlichere Entwicklungsumgebung bereitzustellen.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen kurzen Test durchzuführen und zu sehen, wie wir Autovervollständigungshinweise und Typüberprüfungen erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie nicht VS Code verwenden möchten, bieten wir auch Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung über das Terminal an, etwas später.

Es wird daran gearbeitet, die TypeScript-Unterstützung in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die umfassendste Unterstützung ist derzeit in der [Svelte for VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refactoring, IntelliSense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwickler-Assistenz ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, von der Wurzel des Ordners Ihres Projekts aus, geben Sie `code .` (der nachgestellte Punkt gibt VS Code an, den aktuellen Ordner zu öffnen), um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen gibt, die installiert werden sollen.

![Dialogfeld, das sagt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen, um alle zu installieren oder eine Liste anzuzeigen](01-vscode-extension-recommendations.png)

Wenn Sie auf _Alles installieren_ klicken, wird Svelte für VS Code installiert.

![Informationen zur Svelte for VS Code-Erweiterung](02-svelte-for-vscode.png)

Wir können auch sehen, dass das `setupTypeScript.js`-Skript einige Änderungen an unserem Projekt vorgenommen hat. Die `main.js`-Datei wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot, der zeigt, dass, wenn Sie über eine Komponente schweben, es Ihnen Hinweise gibt](03-vscode-hints-in-main-ts.png)

Wir erhalten auch die Typüberprüfung kostenlos. Wenn wir in der Optionen-Parameter des `App`-Konstruktors eine unbekannte Eigenschaft übergeben (zum Beispiel ein Tippfehler wie `traget` statt `target`), wird TypeScript sich beschweren:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget gegeben](04-vscode-type-checking-in-main-ts.png)

Im `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das `lang="ts"`-Attribut zum `<script>`-Tag hinzugefügt. Darüber hinaus, dank der Typinferenz, werden wir in vielen Fällen nicht einmal Typen angeben müssen, um Code-Unterstützung zu erhalten. Wenn Sie beispielsweise eine `ms`-Eigenschaft zu dem `Alert`-Komponentenaufruf hinzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![Typinferenz und Code-Hinweise in VS Code - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es sich beschweren:

![Typüberprüfung in VS Code - die ms-Variable wurde ein nicht-numerischer Wert übergeben](06-vscode-type-checking-in-components.png)

Das Anwendungstemplate hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, von der Kommandozeile aus, was es sehr nützlich macht, es in einer Continuous-Integration (CI)-Pipeline auszuführen. Führen Sie einfach `npm run check` aus, um auf nicht verwendetes CSS, Rückgabe von A11y-Hinweisen und TypeScript-Kompilierfehler zu überprüfen.

In diesem Fall, wenn Sie `npm run check` (entweder in der VS Code-Konsole oder im Terminal) ausführen, erhalten Sie den folgenden Fehler:

![Check-Befehl in VS Code ausgeführt zeigt Typfehler, ms-Variable sollte eine Zahl zugewiesen werden](07-vscode-svelte-check.png)

Noch besser, wenn Sie es vom integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> das Dateinamen anklicken, führt Sie zur Zeile mit dem Fehler.

Sie können das `check`-Skript auch im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript jedes Mal ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, damit es weiterhin Fehler melden kann, ohne andere Terminalnutzungen zu stören.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt die strukturelle Typisierung. Die strukturelle Typisierung ist eine Möglichkeit, Typen ausschließlich basierend auf ihren Mitgliedern zu verknüpfen, selbst wenn Sie den Typ nicht explizit definieren.

Wir werden einen `TodoType`-Typ definieren, um zu sehen, wie TypeScript erzwingt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell mit ihm kompatibel ist.

1. Erstellen Sie im `src`-Ordner einen `types`-Ordner.
2. Fügen Sie eine `todo.type.ts`-Datei darin hinzu.
3. Geben Sie der `todo.type.ts` den folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Das Svelte-Template verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie `export`/`import`-Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Siehe [diesen Abschnitt der Fehlerbehebungsvorschläge](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für weitere Informationen.

4. Nun verwenden wir `TodoType` aus unserer `Todo.svelte`-Komponente. Fügen Sie zuerst das `lang="ts"` zum `<script>`-Tag hinzu.
5. Lassen Sie uns den Typ importieren und verwenden, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Jetzt werden wir aus `Todos.svelte` eine `Todo`-Komponente mit einem Literalobjekt als Parameter instanziieren, vor dem Aufruf der `MoreActions`-Komponente, wie folgt:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es die Typüberprüfung erkennt, die wir angegeben haben.

   Wir erhalten den folgenden Fehler:

   ![Typfehler in VS Code, Todo Type Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Jetzt sollten Sie eine Vorstellung davon haben, welche Art von Unterstützung TypeScript beim Erstellen von Svelte-Projekten bieten kann.

Jetzt werden wir diese Änderungen rückgängig machen, um zu beginnen, unsere Anwendung auf TypeScript zu portieren, damit wir nicht durch alle Prüfungswarnungen gestört werden.

1. Entfernen Sie das fehlerhafte To-Do und das `lang='ts'`-Attribut aus der `Todos.svelte`-Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir kümmern uns später darum.

## Portieren unserer To-Do-Listen-App auf TypeScript

Jetzt sind wir bereit, unsere To-Do-Listen-Anwendung zu portieren, um alle Funktionen, die TypeScript uns bietet, voll auszuschöpfen.

Beginnen Sie damit, das Check-Skript im Überwachungsmodus im Projektstamm auszuführen:

```bash
npm run check -- --watch
```

Es sollte ungefähr so aussehen:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass eine einfache Möglichkeit, eine Svelte-Komponente mit der Unterstützung eines unterstützenden Code-Editors wie VS Code zu beginnen, darin besteht, einfach das `<script lang='ts'>` oben in Ihrer Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen:

![VS Code-Screenshot zeigt drei Punkte-Warnhinweise, wenn ein Komponenten-Typ="ts" hinzugefügt wird](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte`-Komponente.

1. Fügen Sie `lang="ts"` Ihrer `<script>`-Sektion der `Alert.svelte`-Komponente hinzu. Sie werden einige Warnungen in der Ausgabe des Check-Skripts sehen:

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

2. Diese können Sie beheben, indem Sie die entsprechenden Typen angeben, so:

   ```ts
   export let ms = 3000

     let visible: boolean
     let timeout: number

     const onMessageChange = (message: string, ms: number) => {
       clearTimeout(timeout)
       if (!message) {               // hide Alert if message is empty
   ```

   > [!NOTE]
   > Es gibt keine Notwendigkeit, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript dies bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Jetzt machen wir dasselbe für die `MoreActions.svelte`-Komponente.

1. Fügen Sie wie vorher das `lang='ts'`-Attribut hinzu. TypeScript wird uns vor der `todos`-Eigenschaft und der `t`-Variablen im Aufruf zu `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den `TodoType`, den wir bereits definiert haben, verwenden, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die `export let todos`-Zeile durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript nun ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Wenn wir denken, dass unser Code dadurch einfacher zu lesen ist, könnten wir es so angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Die meiste Zeit wird TypeScript in der Lage sein, den reaktiven Variablentyp korrekt abzuleiten, aber manchmal erhalten Sie möglicherweise einen "implizit hat den 'any'-Typ"-Fehler, wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, wie folgt:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ in der reaktiven Zuweisung selbst nicht angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie im Abschnitt [How do I type reactive assignments? / I get an "implicitly has type 'any' error"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut zum `<script>`-Tag hinzu, wie üblich. Sie werden feststellen, dass keine Warnungen vorhanden sind - TypeScript leitet den Typ der Filtervariablen aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Also können wir TypeScript darüber informieren, indem wir ein `enum Filter` erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt werden wir dies aus der `FilterButton`-Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch den folgenden:

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

Hier importieren wir einfach das `Filter`-Enum und verwenden es anstelle der Zeichenfolgenwerte, die wir zuvor verwendet haben.

### Todos.svelte

Wir werden das `Filter`-Enum auch in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst das `lang='ts'`-Attribut hinzu, wie zuvor.
2. Importieren Sie das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren bestehenden hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt verwenden wir es immer dann, wenn wir auf den aktuellen Filter Bezug nehmen. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch die folgenden:

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

4. `check` gibt uns immer noch einige Warnungen aus `Todos.svelte`. Lassen Sie uns diese beheben.

   Beginnen Sie mit dem Import des `TodoType` und teilen Sie TypeScript mit, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes spezifizieren wir alle fehlenden Typen. Die Variable `todosStatus`, die wir verwendet haben, um programmgesteuert auf die Methoden zuzugreifen, die von der `TodosStatus`-Komponente bereitgestellt werden, ist vom Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>`-Abschnitt, um so auszusehen:

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

Wir stoßen auf die folgenden Fehler im Zusammenhang mit der Übergabe von `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`)-Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Dies liegt daran, dass die `todos`-Eigenschaft in der `TodosStatus`-Komponente keinen Standardwert hat. TypeScript hat daher abgeleitet, dass es den Typ `undefined` hat, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe geschieht mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann das `TodoType` und deklarieren Sie die `todos`-Eigenschaft als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir spezifizieren auch die `headingEl`, die wir verwendet haben, um an das heading-Tag zu binden, als ein `HTMLElement`. Aktualisieren Sie die Zeile `let headingEl` mit der folgenden:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich bemerken Sie den folgenden gemeldeten Fehler, der mit dem Ort zusammenhängt, an dem wir das `tabindex`-Attribut setzen. Das liegt daran, dass TypeScript das `<h2>`-Element typüberprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, erwartet, dass Tabindex ein numerischer Wert ist, nicht string](10-vscode-tabindex-hint.png)

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, wie folgt:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es falsch einem String-Wert zuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Wie üblich, fügen Sie das `lang='ts'`-Attribut hinzu.
2. Die Warnung zeigt an, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Setzen Sie seinen Typ auf `HTMLElement`, so:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt für diese Datei müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie ihre Definition so:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` ausgibt, durch den Aufruf der `Todo.svelte`-Komponente ausgelöst. Lassen Sie uns diese beheben.

1. Öffnen Sie die `Todo.svelte`-Datei und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie das `TodoType` und setzen Sie den Typ der `todo`-Eigenschaft. Ersetzen Sie die `export let todo`-Zeile durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der `update()`-Funktion der `updatedTodo`-Variable zu definieren. Dies kann etwas kompliziert sein, weil `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es sich nicht um ein vollständiges `todo` handelt – es hat nur einen Teil der Eigenschaften eines `todo`.

   Für diese Arten von Fällen stellt TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html) zur Verfügung, um es einfacher zu machen, diese allgemeinen Transformationen anzuwenden. Was wir jetzt brauchen, ist die [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) -Utility, die es ermöglicht, alle Teilmengen eines gegebenen Typs darzustellen. Die Partial-Utility gibt einen neuen Typ basierend auf dem Typ `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()`-Funktion — aktualisieren Sie Ihre so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit teilen wir TypeScript mit, dass die `updatedTodo`-Variable eine Teilmenge der `TodoType`-Eigenschaften enthalten wird.

4. Jetzt meldet `svelte-check`, dass wir den Typen unserer Aktionsfunktion-Parameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die Knotenvariable als Typ `HTMLElement` definieren. Ersetzen Sie die erste Instanz von `node` in den angegebenen zwei Zeilen durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die `actions.js`-Datei.

1. Benennen Sie es in `actions.ts` um und fügen Sie den Typ des Knotenparameters hinzu. Es sollte so aussehen:

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

2. Jetzt aktualisieren Sie `Todo.svelte` und `NewTodo.svelte`, wo wir die actions-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In jedem Fall sollte es so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores auf TypeScript

Jetzt müssen wir die `stores.js`- und `localStore.js`-Dateien auf TypeScript migrieren.

Tipp: Das Skript `npm run check`, das das Tool [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) verwendet, überprüft nur die `.svelte`-Dateien unserer Anwendung. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noemit` ausführen, das dem TypeScript-Compiler anweist, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie können sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

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

3. Denken Sie daran, die `import`-Anweisungen in `App.svelte`, `Alert.svelte` und `Todos.svelte` zu aktualisieren. Entfernen Sie einfach die `.js`-Erweiterung, so:

   ```js
   import { todos } from "../stores";
   ```

Zum `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` wie folgt:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie damit, die Datei in `localStore.ts` umzubenennen.
2. TypeScript fordert uns auf, den Typ der `key`-, `initial`- und `value`-Variablen anzugeben. Der erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte ein String sein.

   Aber `initial` und `value` sollten beliebige Objekte sein, die in eine gültige JSON-Zeichenfolge mit der [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)-Methode konvertiert werden können, was bedeutet, dass es sich um beliebige JavaScript-Objekte mit einigen Einschränkungen handelt: beispielsweise sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

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

   Der `|`-Operator ermöglicht es uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte ein String, eine Zahl, ein Boolean usw. sein. In diesem Fall machen wir auch Gebrauch von rekursiven Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` haben kann und auch ein Objekt mit Eigenschaften vom Typ `JsonValue`.

4. Wir werden unseren `JsonValue`-Typ importieren und ihn entsprechend verwenden. Aktualisieren Sie Ihre `localStore.ts`-Datei wie folgt:

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

Wenn wir nun versuchen, einen `localStore` mit etwas zu erstellen, das nicht mit `JSON.stringify()` konvertiert werden kann, beispielsweise einem Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` darüber klagen:

![VS Code zeigt einen Fehler beim Verwenden unseres Stores - es scheitert bei dem Versuch, einen lokal gespeicherten Wert auf etwas zu setzen, das mit JSON stringify nicht kompatibel ist](11-vscode-invalid-store.png)

Und das Beste daran, es funktioniert sogar mit der [`$store`-Auto-Subscription-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values). Wenn wir versuchen würden, einen ungültigen Wert in unserem `todos`-Store mit der `$store`-Syntax zu speichern, so:

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

Das Check-Skript meldet den folgenden Fehler:

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

Und das war's. Wir haben unsere gesamte Anwendung darauf umgestellt, TypeScript zu verwenden.

## Unsere Stores mit Generika absichern

Unsere Stores sind bereits auf TypeScript portiert, aber wir können noch besser werden. Wir sollten nicht jeden Wert speichern müssen - wir wissen, dass der Alert-Store nur Zeichenfolgen-Nachrichten enthalten sollte, und der To-Do-Store sollte ein Array von `TodoType` usw. enthalten. Wir können TypeScript dies mit der Verwendung von [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) erzwingen. Lassen Sie uns mehr darüber herausfinden.

### Verständnis von TypeScript-Generika

Generika erlauben es Ihnen, wiederverwendbare Code-Komponenten zu erstellen, die mit einer Vielzahl von Typen anstelle eines einzelnen Typs arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: Sie werden innerhalb von spitzen Klammern angegeben und üblicherweise mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein kurzes Beispiel sehen, eine einfache `Stack`-Klasse, die es uns erlaubt, `Elements` zu `push` und `pop` zu.

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und dementsprechend empfangen und geben die `push()` und `pop()`-Methoden eine Variable vom Typ `any` zurück. Also ist es völlig gültig, etwas wie das folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was ist, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` funktioniert? Wir könnten das Folgende tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir einen Stack von Typen behandeln, die wir noch nicht kennen und die vom Verbraucher definiert werden sollen?

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann, wie wir normalerweise einen bestimmten Typ verwenden würden. Nun ist `elements` ein Array vom Typ `T`, und die `push()` und `pop()`-Methoden empfangen und geben eine Variable vom Typ `T` zurück.

So würden wir unsere generische `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und gibt einen Fehler aus, wenn wir versuchen, etwas anderes zu pushen:

![Argument of type hello is not assignable to parameter of type number](12-vscode-generic-stack-error.png)

TypeScript kann generische Typen auch durch ihre Verwendung ableiten. Generika unterstützen zudem Standardwerte und Einschränkungen.

Generika sind ein leistungsstarkes Feature, das es unserem Code ermöglicht, sich von den spezifischen Typen zu lösen und allgemeiner und wiederverwendbarer zu machen, ohne dabei auf die Typsicherheit zu verzichten. Um mehr darüber zu erfahren, schauen Sie sich die [Einführung in Generika von TypeScript](https://www.typescriptlang.org/docs/handbook/generics.html) an.

### Verwendung von Svelte-Stores mit Generika

Svelte-Stores unterstützen Generika von Haus aus. Und dank der generischen Typ-Inferenz können wir davon profitieren, ohne unseren Code zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ zu unserem `$alert`-Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument des Typs 9999 ist nicht zuordenbar zum Parameter des Typs string](13-vscode-generic-alert-error.png)

Das liegt daran, dass wir unseren Alert-Store in der `stores.ts`-Datei mit folgender Definition erstellt haben:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript hat dann den generischen Typ als `string` abgeleitet. Wenn wir explizit sein wollten, könnten wir das Folgende tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt werden wir unseren `localStore`-Store so umsetzen, dass er Generika unterstützt. Denken Sie daran, dass wir den Typ `JsonValue` definiert haben, um die Benutzung unseres `localStore`-Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt wollen wir, dass die Verbraucher von `localStore` in der Lage sind, den Typ der zu speichernden Daten anzugeben, aber anstelle mit jedem beliebigen Typ zu arbeiten, sollten sie die Anforderungen des `JsonValue`-Typs erfüllen. Das werden wir mit einer generischen Einschränkung angeben, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und spezifizieren, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den `T`-Typ entsprechend.

Unsere `localStore.ts`-Datei sieht jetzt so aus – probieren Sie den neuen Code in Ihrer Version aus:

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

Und dank der generischen Typ-Inferenz weiß TypeScript bereits, dass unser `$todos`-Store ein Array von `TodoType` enthalten soll:

![Todo Type-Objekteigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Wenn wir explizit sein wollten, könnten wir es so in der `stores.ts`-Datei tun:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war es für unsere kurze Einführung in TypeScript Generika.

## Der Code bis jetzt

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repositories so zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie wir bereits gesagt haben, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Listen-Anwendung genommen und auf TypeScript portiert.

Zuerst haben wir TypeScript kennengelernt und welche Vorteile es uns bringen kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt in TypeScript konvertiert - unsere To-Do-Listen-App.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check`-Tool verwendet, um TypeScript-Probleme über die Kommandozeile zu inspizieren.

Im nächsten Artikel lernen wir, wie wir unsere App für die Produktion kompilieren und bereitstellen. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um das Lernen von Svelte weiterzuführen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
