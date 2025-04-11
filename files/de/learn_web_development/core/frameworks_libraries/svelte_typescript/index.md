---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir über Svelte-Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die App-Informationen im Web Storage zu speichern. Wir haben uns auch angeschaut, wie man die Übergangsdirektive verwendet, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Jetzt werden wir lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst werden wir erfahren, was TypeScript ist und welche Vorteile es uns bieten kann. Dann werden wir sehen, wie wir unser Projekt konfigurieren können, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile der TypeScript-Funktionen voll auszunutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind, und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          >haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und NPM, um Ihre App zu kompilieren und zu bauen.
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

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und das Portieren zu TypeScript vollkommen optional ist. Es gibt unterschiedliche Meinungen dazu, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile der Verwendung von TypeScript sprechen. Selbst wenn Sie nicht vorhaben, es einzuführen, wird dieser Artikel nützlich sein, um zu verstehen, was es zu bieten hat, und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie überhaupt nicht an TypeScript interessiert sind, können Sie zum nächsten Kapitel übergehen, in dem wir uns verschiedene Optionen zur Bereitstellung unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen.

## Machen Sie mit uns mit dem Code mit

### Git

Klonen Sie das GitHub-Repo (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Status zu erhalten, führen Sie Folgendes aus:

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

## TypeScript: Optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine Obermenge von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu machen. Einer der großen Vorteile ist es, dass IDEs dadurch eine reichhaltigere Umgebung bieten können, um häufige Fehler zu erkennen, während Sie den Code schreiben.

Das Beste daran ist, dass JavaScript-Code auch gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie funktionieren einfach.

Unser TypeScript-Code wird überall dort laufen können, wo JavaScript laufen kann. Wie ist das möglich? TypeScript "kompiliert" unseren Code in Vanilla-JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den entsprechenden Vanilla-JavaScript-Code erzeugt, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript umwandelt, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Die erstklassige Unterstützung von TypeScript war die am meisten nachgefragte Funktion für Svelte seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Mitwirkenden, haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, um getestet zu werden. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Früh erkannte Bugs: Der Compiler überprüft Typen zur Kompilierzeit und bietet Fehlermeldungen.
- Lesbarkeit: Statische Typisierung gibt dem Code mehr Struktur, wodurch er sich selbst dokumentiert und besser lesbar ist.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Codenavigation, Autovervollständigung und intelligentere Hinweise zu bieten.
- Sicherer Refactoring: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Sie beim Refactoring großer Teile Ihres Codegrundstocks zu unterstützen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript kompiliert viele der neuesten JavaScript-Funktionen zu einfachem, altmodischem JavaScript, sodass Sie sie auch auf Benutzeragenten verwenden können, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierzeit überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Auch wenn TypeScript eine Obermenge von JavaScript und keine völlig neue Sprache ist, gibt es eine erhebliche Lernkurve, insbesondere wenn Sie keinerlei Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatisierte Tests: Auch wenn Typen Ihnen helfen können, mehrere Fehler zu erkennen, ist TypeScript kein echter Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generics kann zu übermäßig ausgearbeiteten Codegrundstöcken führen.

Es scheint eine breite Übereinstimmung zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, bei denen viele Entwickler am gleichen Codeprojekt arbeiten. Tatsächlich wird es von mehreren großflächigen Projekten wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler verwendet. Dennoch bevorzugen einige Entwickler, es sogar bei kleinen Projekten zu verwenden, wie das, das wir gerade entwickeln.

Letztendlich liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Beweise zu liefern, um Ihre Meinung darüber zu bilden.

## Erstellen eines Svelte TypeScript-Projekts von Grund auf

Sie können ein neues Svelte TypeScript-Projekt unter Verwendung der [Standardvorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, folgende Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es erstellt ein neues Verzeichnis):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starterprojekt, das TypeScript-Unterstützung enthält, die Sie nach Belieben ändern können.

Dann müssen Sie npm sagen, dass es die Abhängigkeiten herunterladen und das Projekt im Entwicklungsmodus starten soll, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diesen Anweisungen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project) folgen. Alternativ können Sie die [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) Datei in einen `scripts`-Ordner innerhalb des Stammverzeichnisses Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um unsere Anwendung zu TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie sie nach TypeScript portieren.

Gehen Sie in das Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

```bash
npx degit sveltejs/template/scripts scripts       # download script file to a scripts folder

node scripts/setupTypeScript.js                   # run it
# Converted to TypeScript.
```

Sie müssen Ihren Abhängigkeitsmanager neu ausführen, um zu beginnen.

```bash
npm install                                       # download new dependencies

npm run dev                                       # start the app in development mode
```

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript konvertieren möchten. Beachten Sie einfach, dass die Svelte-Community ständig die Unterstützung von Svelte TypeScript verbessert, daher sollten Sie regelmäßig `npm update` ausführen, um von den neuesten Änderungen zu profitieren.

> [!NOTE]
> Wenn Sie Probleme haben, mit TypeScript in einer Svelte-Anwendung zu arbeiten, werfen Sie einen Blick auf diesen [Troubleshooting/FAQ-Abschnitt über TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits erwähnt, ist TypeScript eine Obermenge von JavaScript, daher wird Ihre Anwendung ohne Änderungen laufen. Derzeit werden Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausführen, ohne die Vorteile der enthaltenen TypeScript-Funktionen zu nutzen. Sie können jetzt beginnen, Typen schrittweise hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es von regulären JavaScript-Dateien aus zu verwenden, ändern Sie einfach die Dateiendung von `.js` in `.ts`. Darüber hinaus müssen Sie alle entsprechenden `import`-Anweisungen aktualisieren, um die `.ts`-Dateiendung von allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wirft einen Fehler, wenn Sie die `.ts`-Dateiendung in einer `import`-Anweisung verwenden, also müssen Sie, wenn Sie eine Datei `./foo.ts` haben, sie als "./foo" importieren.
> Siehe den Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Markup-Abschnitten von Komponenten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Obwohl Sie JavaScript aus dem Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Abschnitt verwenden.
> TypeScript in Markup von Komponenten ist ab Svelte 5 erlaubt.

## Verbessertes Entwicklererlebnis mit TypeScript

TypeScript stellt Codeeditoren und IDEs viele Informationen zur Verfügung, die es ihnen ermöglichen, ein benutzerfreundlicheres Entwicklungserlebnis zu bieten.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen schnellen Test zu machen und zu sehen, wie wir Autovervollständigungs-Hinweise und Typüberprüfung erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir etwas später in diesem Artikel auch Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung über das Terminal.

Es wird daran gearbeitet, TypeScript in Svelte-Projekten in mehreren Codeeditoren zu unterstützen; die vollständigste Unterstützung gibt es bisher in der [Svelte for VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode), die vom Svelte-Team entwickelt und gewartet wird. Diese Erweiterung bietet Typprüfung, Inspektion, Refactoring, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) und NICHT das alte "Svelte" von James Birtles verwenden, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, geben Sie vom Stammverzeichnis Ihres Projekts aus `code .` (der abschließende Punkt sagt VS Code, den aktuellen Ordner zu öffnen) ein, um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen gibt, die installiert werden sollen.

![Dialogfeld, das anzeigt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Durch Klicken auf _Alles installieren_ wird Svelte for VS Code installiert.

![Informationen zur Svelte for VS Code-Erweiterung](02-svelte-for-vscode.png)

Wir können auch sehen, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code Screenshot, der zeigt, dass beim Schweben über eine Komponente Ihnen Hinweise gegeben werden](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir bekommen auch kostenlose Typenprüfung. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App` Konstruktors übergeben (zum Beispiel einen Tippfehler wie `traget` anstelle von `target`), wird TypeScript sich beschweren:

![Typprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget hinzugefügt](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das `lang="ts"`-Attribut zum `<script>`-Tag hinzugefügt. Dank der Typinferenz müssen wir in vielen Fällen nicht einmal Typen angeben, um Codeunterstützung zu erhalten. Wenn Sie zum Beispiel beginnen, eine `ms`-Eigenschaft zum `Alert`-Komponentenaufruf hinzuzufügen, wird TypeScript aufgrund des Standardwerts ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Code-Hinting - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das nicht eine Zahl ist, wird es sich darüber beschweren:

![Typprüfung in VS Code - die ms-Variable wurde mit einem nicht-numerischen Wert versehen](06-vscode-type-checking-in-components.png)

Das Anwendungsvorlage hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, direkt über die Befehlszeile auszuführen, was es besonders nützlich macht, es in einer Continuous Integration (CI)-Pipeline auszuführen. Führen Sie einfach `npm run check` aus, um nach ungenutztem CSS zu suchen, und geben Sie A11y-Hinweise und TypeScript-Kompilierfehler zurück.

In diesem Fall erhalten Sie, wenn Sie `npm run check` ausführen (entweder in der VS Code-Konsole oder im Terminal), den folgenden Fehler:

![Check-Befehl, der innerhalb von VS Code ausgeführt wird und einen Typfehler zeigt, ms-Variable sollte eine Zahl sein](07-vscode-svelte-check.png)

Noch besser: Wenn Sie es vom integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Strg</kbd> + <kbd>\`</kbd> öffnen), führt <kbd>Cmd</kbd>/<kbd>Strg</kbd> das Klicken auf den Dateinamen Sie zur Zeile mit dem Fehler.

Sie können das `check`-Skript auch im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript immer dann ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem normalen Terminal ausführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, damit es weiterhin Fehler melden kann, ohne dass es andere Terminalsitzungen beeinflusst.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Möglichkeit, Typen allein basierend auf ihren Mitgliedern zuzuordnen, auch wenn Sie den Typ nicht explizit definieren.

Wir definieren einen `TodoType`-Typ, um zu sehen, wie TypeScript sicherstellt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell damit kompatibel sein wird.

1. Erstellen Sie innerhalb des `src`-Ordners einen `types`-Ordner.
2. Fügen Sie eine `todo.type.ts`-Datei darin hinzu.
3. Geben Sie der Datei `todo.type.ts` folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Die Vorlage von Svelte verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0 zur Unterstützung von TypeScript. Ab dieser Version muss man `export`/`import`-Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Weitere Informationen finden Sie in [diesem Abschnitt des Troubleshooting-Leitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation).

4. Jetzt werden wir `TodoType` von unserer `Todo.svelte`-Komponente aus verwenden. Fügen Sie zuerst das `lang="ts"` zu unserem `<script>`-Tag hinzu.
5. Lassen Sie uns den Typ importieren und verwenden, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` mit der folgenden:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateiendung nicht in der `import`-Anweisung erlaubt ist und weggelassen wurde.

6. Jetzt von `Todos.svelte` aus werden wir eine `Todo`-Komponente mit einem Objektliteral als Parameter instanziieren, bevor der Aufruf der `MoreActions`-Komponente, so:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` dem `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es weiß, dass die Typprüfung genutzt werden soll, die wir angegeben haben.

   Wir werden den folgenden Fehler erhalten:

   ![Typfehler in VS Code, Todo Type-Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Sie sollten bis jetzt eine Vorstellung davon bekommen haben, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte erstellen.

Jetzt machen wir diese Änderungen rückgängig, um mit dem Portieren unserer Anwendung zu TypeScript zu beginnen, damit wir nicht mit Warnungen von Checks belästigt werden.

1. Entfernen Sie das fehlerhafte To-do und das `lang='ts'`-Attribut aus der `Todos.svelte`-Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir werden sie später richtig bearbeiten.

## Unsere To-do-List-Anwendung zu TypeScript portieren

Jetzt sind wir bereit, mit dem Portieren unserer To-do-Liste-Anwendung zu beginnen, um die Vorteile aller Features zu nutzen, die TypeScript uns bietet.

Beginnen wir, indem wir das Check-Skript im Überwachungsmodus innerhalb des Projektstamms ausführen:

```bash
npm run check -- --watch
```

Dies sollte etwa so etwas ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass, wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, eine einfache Möglichkeit, mit dem Portieren einer Svelte-Komponente zu beginnen, darin besteht, einfach das `<script lang='ts'>` oben in Ihre Komponente hinzuzufügen und nach den drei gepunkteten Hinweisen zu suchen:

![VS Code-Screenshot, der zeigt, dass wenn Sie type="ts" zu einer Komponente hinzufügen, Ihnen drei-Punkte-Warnhinweise gegeben werden](09-vscode-alert-hints.png)

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
   > Es ist nicht nötig, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript ihn bereits aus dem Standardwert ableitet.

### MoreActions.svelte

Jetzt machen wir dasselbe für die `MoreActions.svelte`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut hinzu, wie zuvor. TypeScript wird uns über die `todos`-Eigenschaft und die `t`-Variable im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir verwenden das bereits definierte `TodoType`, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die Zeile `export let todos` mit der folgenden:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Dennoch würden wir es spezifizieren, wenn wir denken, dass es unseren Code leichter lesbar macht, wie folgt:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Meistens wird TypeScript in der Lage sein, den Typ der reaktiven Variable korrekt abzuleiten, aber manchmal können Sie einen "implizit hat einen 'any'-Typ"-Fehler erhalten, wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die getypte Variable in einer anderen Anweisung deklarieren, wie folgt:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ nicht in der reaktiven Zuweisung selbst angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie unter [How do I type reactive assignments? / I get an "implicitly has type 'any' error"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut dem `<script>`-Tag hinzu, wie üblich. Sie werden feststellen, dass es keine Warnungen gibt — TypeScript leitet den Typ der Filtervariable aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Wir können TypeScript darüber informieren, indem wir ein Enum Filter erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt werden wir dies in der `FilterButton`-Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch den folgenden:

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

Wir werden das `Filter`-Enum auch in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst das `lang='ts'`-Attribut hinzu, wie zuvor.
2. Importieren Sie als nächstes das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt werden wir es jedes Mal verwenden, wenn wir auf den aktuellen Filter verweisen. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch die folgenden:

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

4. `check` gibt uns immer noch einige Warnungen von `Todos.svelte`. Lassen Sie uns sie beheben.

   Beginnen Sie, indem Sie das `TodoType` importieren und TypeScript mitteilen, dass unsere `todos`-Variable ein `TodoType`-Array ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als Nächstes geben wir alle fehlenden Typen an. Die Variable `todosStatus`, die wir verwendet haben, um auf die von der `TodosStatus`-Komponente bereitgestellten Methoden programmatisch zuzugreifen, ist vom Typ `TodosStatus`. Und jeder `todo` wird vom Typ `TodoType` sein.

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

Wir stoßen auf folgende Fehler im Zusammenhang mit dem Weitergeben von `todos` an die Komponenten `TodosStatus.svelte` (und `Todo.svelte`):

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Der Grund dafür ist, dass die `todos`-Eigenschaft in der `TodosStatus`-Komponente keinen Standardwert hat, sodass TypeScript ableitet, dass sie vom Typ `undefined` ist, was nicht mit einem `TodoType`-Array kompatibel ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann das `TodoType` und deklarieren Sie die `todos`-Eigenschaft als `TodoType`-Array. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir geben auch das `headingEl`, das wir mit dem Überschriftstag verbunden haben, als `HTMLElement` an. Aktualisieren Sie die Zeile `let headingEl` mit der folgenden:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler feststellen, der sich auf die Stelle bezieht, an der wir das `tabindex`-Attribut setzen. Das liegt daran, dass TypeScript das `<h2>`-Element typisiert und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Tabindex-Hinweis in VS Code, tabindex erwartet einen Typ von Zahl, nicht String](10-vscode-tabindex-hint.png)

   Um es zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, wie folgt:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es einem String zuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Fügen Sie wie gewohnt das `lang='ts'`-Attribut hinzu.
2. Die Warnung wird darauf hinweisen, dass wir für die `nameEl`-Variable einen Typ angeben müssen. Setzen Sie ihren Typ auf `HTMLElement` wie folgt:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt für diese Datei müssen wir den korrekten Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie ihre Definition wie folgt:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` ausgibt, von Aufrufen der `Todo.svelte`-Komponente ausgelöst. Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `Todo.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Lassen Sie uns `TodoType` importieren und den Typ der `todo`-Eigenschaft setzen. Ersetzen Sie die Zeile `export let todo` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist TypeScript, das uns auffordert, den Typ der `update()`-Funktion `updatedTodo`-Variable zu definieren. Dies kann etwas knifflig sein, da `updatedTodo` nur die Attribute von `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es kein vollständiges `todo` ist — es hat nur eine Teilmenge der Eigenschaften eines `todo`.

   Für diese Art von Fällen stellt TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html) zur Verfügung, um es Ihnen zu erleichtern, diese häufigen Transformationen anzuwenden. Was wir sofort benötigen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt)-Utility, das es uns erlaubt, alle Teilmengen eines bestimmten Typs darzustellen. Das partielle Utility gibt einen neuen Typ basierend auf dem Typ `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()`-Funktion — aktualisieren Sie Ihre wie folgt:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit teilen wir TypeScript mit, dass die `updatedTodo`-Variable eine Teilmenge der `TodoType`-Eigenschaften enthalten wird.

4. Jetzt teilt uns `svelte-check` mit, dass wir den Typ der Parameter der Aktionsfunktion definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die Knotenvariable als `HTMLElement` definieren. Ersetzen Sie in den beiden oben angegebenen Zeilen das erste Vorkommen von `node` durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die Datei `actions.js`.

1. Benennen Sie es in `actions.ts` um und geben Sie den Typ der Knotenparameter an. Es sollte am Ende so aussehen:

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

2. Aktualisieren Sie nun `Todo.svelte` und `NewTodo.svelte`, in denen wir die Aktionsdatei importieren. Denken Sie daran, dass Importe in TypeScript die Dateiendung nicht enthalten. In jedem Fall sollte es am Ende so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Jetzt müssen wir die Dateien `stores.js` und `localStore.js` zu TypeScript portieren.

Tipp: Das Skript `npm run check`, das das Werkzeug [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) verwendet, überprüft nur die `.svelte`-Dateien unserer Anwendung. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, was dem TypeScript-Compiler mitteilt, Fehler zu überprüfen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Wir fangen bei `stores.js` an.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays zu `TodoType[]`. So sieht der Inhalt am Ende aus:

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

Nun zu `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` so:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie, indem Sie die Datei in `localStore.ts` umbenennen.
2. TypeScript fordert uns auf, den Typ der Variablen `key`, `initial` und `value` anzugeben. Der erste ist einfach: der Schlüssel unseres lokalen Webspeichers sollte ein String sein.

   Aber `initial` und `value` sollten ein beliebiges Objekt sein, das mit der Methode [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in einen gültigen JSON-String konvertiert werden kann, was jedes JavaScript-Objekt mit ein paar Einschränkungen bedeutet: zum Beispiel sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Deshalb werden wir den Typ `JsonValue` erstellen, um diese Bedingungen anzugeben.

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

   Der `|`-Operator erlaubt es uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern können. Ein `JsonValue` könnte ein String, eine Zahl, ein Boolean und so weiter sein. In diesem Fall verwenden wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` und auch ein Objekt mit Eigenschaften vom Typ `JsonValue` haben kann.

4. Importieren wir unseren `JsonValue`-Typ und verwenden ihn entsprechend. Aktualisieren Sie Ihre `localStore.ts`-Datei so:

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

Wenn wir jetzt versuchen, einen `localStore` mit etwas zu erstellen, das nicht mit `JSON.stringify()` konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` sich darüber beschweren:

![VS Code zeigt einen Fehler bei der Verwendung unseres Stores — es scheitert beim Versuch, einen lokalen Speichernwert auf etwas zu setzen, das nicht mit JSON stringify kompatibel ist](11-vscode-invalid-store.png)

Und das Beste daran ist, es funktioniert sogar mit der [`$store`-Autoverknüpfungssyntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values). Wenn wir versuchen, einen ungültigen Wert in unseren `todos`-Store mit der `$store`-Syntax zu speichern, wie folgt:

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

Das ist ein weiteres Beispiel, wie das Angeben von Typen unseren Code robuster machen und uns helfen kann, mehr Fehler zu fangen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung so konvertiert, dass sie TypeScript verwendet.

## Unsere Stores mit Generics kugelsicher machen

Unsere Stores wurden bereits zu TypeScript portiert, aber wir können noch mehr tun. Wir sollten nicht jeden beliebigen Wert speichern müssen — wir wissen, dass der Alert-Store nur String-Nachrichten enthalten sollte, und der Todos-Store sollte ein Array von `TodoType` enthalten, usw. Wir können TypeScript erlauben, dies mit [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) zu erzwingen. Finden wir mehr heraus.

### TypeScript Generics verstehen

Generics erlauben es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen anstelle eines einzelnen Typs arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: sie werden mit Winkelklammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen erlauben es Ihnen, die von der Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns ein kurzes Beispiel sehen, eine einfache `Stack`-Klasse, die uns erlaubt, Elemente mit `push` und `pop` zu verarbeiten, wie folgt:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und dementsprechend erhalten und geben die `push()`- und `pop()`-Methoden beide eine Variable vom Typ `any` zurück. Es ist also vollkommen gültig, etwas wie das Folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen `Stack` haben wollten, der nur mit Typ `string` funktioniert? Wir könnten das Folgende tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir einen Stack von Typen verarbeiten, die wir noch nicht kennen und die vom Verbraucher definiert werden sollten?

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann wie einen bestimmten Typ. Jetzt ist `elements` ein Array vom Typ `T`, und `push()` und `pop()` erhalten und geben beide eine Variable vom Typ `T` zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann, und gibt einen Fehler aus, wenn wir versuchen, etwas anderes zu pushen:

![Argument des Typs hello ist nicht zuweisbar an den Parameter des Typs number](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen durch ihre Verwendung ableiten. Generics unterstützen auch Standardwerte und Einschränkungen.

Generics sind ein leistungsstarkes Feature, das es unserem Code ermöglicht, sich von den spezifischen verwendeten Typen zu abstrahieren, ihn wiederverwendbarer und generischer zu machen, ohne auf die Typensicherheit verzichten zu müssen. Um mehr darüber zu erfahren, lesen Sie die [Einführung zu Generics in TypeScript](https://www.typescriptlang.org/docs/handbook/generics.html).

### Verwendung von Svelte-Stores mit Generics

Svelte-Stores unterstützen standardmäßig Generics. Und aufgrund der generischen Typableitung können wir davon profitieren, ohne auch nur unseren Code zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ in unseren `$alert`-Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument des Typs 9999 ist nicht zuweisbar an den Parameter des Typs string](13-vscode-generic-alert-error.png)

Das liegt daran, dass, als wir unseren Alert-Store in der Datei `stores.ts` definierten, TypeScript den generischen Typ auf `string` ableitete. Wenn wir darüber explizit sein wollten, könnten wir Folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Jetzt werden wir unseren `localStore`-Store so anpassen, dass er Generics unterstützt. Erinnern Sie sich, dass wir den `JsonValue`-Typ definiert haben, um die Verwendung unseres `localStore`-Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir den Verbrauchern von `localStore` erlauben, den Typ der gespeicherten Daten zu spezifizieren, aber anstelle von irgendwelchen Typen, sollten sie mit dem `JsonValue`-Typ kompatibel sein. Wir geben das mit einer generischen Einschränkung an, wie folgt:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // …
};
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den Typ `T` entsprechend.

Unsere Datei `localStore.ts` wird den folgenden Inhalt haben — versuchen Sie den neuen Code jetzt in Ihrem Beispiel:

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

Nochmals, wenn wir darüber explizit sein wollten, könnten wir das in der Datei `stores.ts` tun, wie folgt:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das sollte zu unserem kurzen Überblick über TypeScript Generics genügen.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos zu, wie folgt:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits erwähnt, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-do-Liste-Anwendung portiert, um sie TypeScript zu verwenden.

Wir haben zuerst gelernt, was TypeScript ist und welche Vorteile es uns bringen kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt so konvertiert, dass es TypeScript verwendet — Unsere To-do-Liste-App.

Wir haben gesehen, wie wir mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeiten können, um Funktionen wie Typprüfung und Autovervollständigung zu erhalten. Wir haben auch das Tool `svelte-check` verwendet, um TypeScript-Probleme von der Befehlszeile aus zu prüfen.

Im nächsten Artikel werden wir lernen, wie man unsere App kompiliert und in die Produktion bereitstellt. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um weiter mit dem Lernen von Svelte fortzufahren.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
