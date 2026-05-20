---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Svelte-Artikel werden nicht mehr gewartet und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Im letzten Artikel haben wir über Svelte Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Web Storage zu speichern. Wir haben uns auch mit der Verwendung der Transitionsdirektive befasst, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Jetzt werden wir lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst werden wir lernen, was TypeScript ist und welche Vorteile es bringen kann. Dann werden wir sehen, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Vorteile der TypeScript-Funktionen vollständig nutzen zu können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sein und
          Kenntnisse über den
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal / die Befehlszeile</a
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
        Lernen Sie, wie man TypeScript konfiguriert und verwendet, wenn Sie Svelte-Anwendungen entwickeln.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und die Portierung auf TypeScript völlig optional ist. Es gibt unterschiedliche Meinungen dazu, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile der Verwendung von TypeScript sprechen. Selbst wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel nützlich sein, um Ihnen zu zeigen, was es zu bieten hat und Ihnen bei Ihrer eigenen Entscheidung zu helfen. Sollten Sie kein Interesse an TypeScript haben, können Sie zum nächsten Kapitel springen, in dem wir verschiedene Optionen zur Bereitstellung von Svelte-Anwendungen, weitere Ressourcen und mehr durchgehen.

## Code mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie dies nicht bereits getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Stand zu gelangen, führen Sie Folgendes aus:

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

[TypeScript](https://www.typescriptlang.org/) ist ein Superset von JavaScript, das Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung bieten können, um häufige Fehler zu erkennen, während Sie den Code schreiben.

Das Beste ist, dass JavaScript-Code gültiger TypeScript-Code ist; TypeScript ist ein Superset von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen und sie werden einfach funktionieren.

Unser TypeScript-Code kann überall ausgeführt werden, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code in Vanilla JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den äquivalenten Vanilla JavaScript-Code erstellt, damit Browser ihn ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie einen Blick auf den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) werfen.

Die Unterstützung von TypeScript als erstklassige Funktion war Sveltes am meisten geforderte Funktion seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Mitwirkenden, haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, um getestet zu werden. In diesem Abschnitt werden wir Ihnen zeigen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitig erkannte Fehler: Der Compiler überprüft die Typen zur Kompilierzeit und liefert Fehlermeldungen.
- Lesbarkeit: Die statische Typisierung verleiht dem Code mehr Struktur, wodurch er selbstdokumentierend und besser lesbar wird.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sicheres Refactoring: Typen ermöglichen es den IDEs, mehr über Ihren Code zu wissen und Sie beim Refactoring großer Teile Ihrer Codebasis zu unterstützen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Funktionen zu nutzen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit neuer und zukünftiger JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen in herkömmliches JavaScript, sodass Sie sie auch in User-Agents verwenden können, die diese noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Kein echtes statisches Typing: Typen werden nur zur Kompilierzeit überprüft und aus dem generierten Code entfernt.
- Steile Lernkurve: Obwohl TypeScript ein Superset von JavaScript ist und keine völlig neue Sprache, gibt es eine beträchtliche Lernkurve, besonders wenn Sie keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatisierte Tests: Obwohl Typen helfen können, viele Bugs zu erkennen, ist TypeScript kein echter Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generics kann zu übermäßig komplexen Codebasen führen.

Es scheint es einen breiten Konsens darüber zu geben, dass TypeScript besonders gut geeignet ist für groß angelegte Projekte, bei denen viele Entwickler am selben Code arbeiten. Und es wird tatsächlich von mehreren groß angelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte Compiler. Dennoch bevorzugen einige Entwickler, es selbst bei kleinen Projekten zu verwenden, wie das, das wir entwickeln.

Am Ende liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Informationen zu geben, um Ihre Entscheidung zu treffen.

## Ein Svelte TypeScript-Projekt von Grund auf erstellen

Sie können ein neues Svelte TypeScript-Projekt mit der [Standardvorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dadurch wird ein Starter-Projekt erstellt, das TypeScript-Unterstützung enthält, die Sie dann nach Belieben ändern können.

Dann müssen Sie npm anweisen, die Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzuzufügen, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner in Ihrem Projekt-Stammverzeichnis herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Genau das werden wir tun, um den Port unserer Anwendung auf TypeScript zu starten.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie mit dem Porting zu TypeScript beginnen.

Gehen Sie zum Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

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

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript umwandeln möchten. Beachten Sie nur, dass die Svelte-Community ständig die TypeScript-Unterstützung für Svelte verbessert, und führen Sie daher regelmäßig `npm update` aus, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie Probleme haben, TypeScript in einer Svelte-Anwendung zu verwenden, werfen Sie einen Blick auf diesen [Troubleshooting / FAQ-Abschnitt zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits gesagt, ist TypeScript ein Superset von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Derzeit wird eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung ausgeführt, ohne die Vorteile der Funktionen zu nutzen, die TypeScript bietet. Jetzt können Sie beginnen, Typen schrittweise hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skript-Abschnitts hinzufügen. Um es von regulären JavaScript-Dateien aus zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` zu `.ts`. Sie müssen auch die entsprechenden `import`-Anweisungen aktualisieren, um die `.ts` Dateierweiterung von allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler ausgeben, wenn Sie die `.ts` Dateierweiterung in einer `import`-Anweisung verwenden. Wenn Sie also eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Siehe den Abschnitt [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Komponenten-Markup-Abschnitten wird in Svelte 4 nicht unterstützt, auf das dieser Leitfaden basiert.
> Während Sie JavaScript aus dem Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>` Abschnitt verwenden.
> TypeScript im Komponenten-Markup ist ab Svelte 5 erlaubt.

## Verbesserte Entwickler-Erfahrung mit TypeScript

TypeScript bietet Code-Editoren und IDEs eine Menge Informationen, um ihnen eine freundlichere Entwicklungserfahrung zu ermöglichen.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um schnell zu testen und zu sehen, wie wir Autovervollständigungshinweise und Typüberprüfung erhalten, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir auch Anweisungen zur Verwendung der TypeScript-Fehlerüberprüfung über das Terminal etwas später an.

Es wird daran gearbeitet, TypeScript in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die bisher vollständigste Unterstützung ist in der [Svelte für VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refaktorisierung, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwickler-Unterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verwenden und NICHT das alte "Svelte" von James Birtles, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, geben Sie im Stammverzeichnis Ihres Projektordners `code .` (der abschließende Punkt weist VS Code an, den aktuellen Ordner zu öffnen) ein, um den Code-Editor zu öffnen. VS Code wird Ihnen mitteilen, dass es empfohlene Erweiterungen zur Installation gibt.

![Dialogfenster, das sagt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Durch Klicken auf _Alle installieren_ wird Svelte für VS Code installiert.

![Svelte für VS Code Erweiterungsinformationen](02-svelte-for-vscode.png)

Wir können auch sehen, dass die `setupTypeScript.js` Datei einige Änderungen an unserem Projekt vorgenommen hat. Die `main.js` Datei wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code Screenshot zeigt, dass beim Überfahren einer Komponente mit der Maus, Hinweise angezeigt werden](03-vscode-hints-in-main-ts.png)

<!-- cSpell:ignore traget -->

Wir erhalten auch Typüberprüfungen. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (zum Beispiel einen Tippfehler wie `traget` anstelle von `target`), wird TypeScript eine Warnung ausgeben:

![Typüberprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget zugewiesen](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js` Skript das `lang="ts"` Attribut zum `<script>`-Tag hinzugefügt. Dank der Typinferenz brauchen wir in vielen Fällen nicht einmal Typen anzugeben, um Code-Unterstützung zu erhalten. Wenn Sie beispielsweise anfangen, eine `ms`-Eigenschaft zur `Alert`-Komponentenaufruf hinzufügen, wird TypeScript aus dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Code-Hinweise - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es eine Beschwerde geben:

![Typüberprüfung in VS Code - die ms-Variable wurde mit einem nicht numerischen Wert belegt](06-vscode-type-checking-in-components.png)

Die Anwendungsvorlage hat ein `check` Script konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, von der Befehlszeile aus, was es ziemlich nützlich macht, es in einer {{Glossary("continuous_integration", "Continuous Integration")}} (CI) Pipeline auszuführen. Führen Sie einfach `npm run check` aus, um nach ungenutztem CSS zu suchen, und geben Sie A11y-Hinweise und TypeScript-Compile-Fehler zurück.

In diesem Fall wird, wenn Sie `npm run check` ausführen (entweder in der VS Code Konsole oder im Terminal), das folgende Fehler angezeigt:

![Check-Befehl wird in VS Code ausgeführt, zeigt Typfehler an, ms-Variable sollte eine Nummer sein](07-vscode-svelte-check.png)

Noch besser, wenn Sie es aus dem integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Strg</kbd> + <kbd>\`</kbd> öffnen), führt das Klicken auf den Dateinamen mit <kbd>Cmd</kbd>/<kbd>Strg</kbd> Sie zur Linie, die den Fehler enthält.

Sie können das `check` Skript auch im Beobachtungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript ausgeführt, wann immer Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal durchführen, lassen Sie es im Hintergrund in einem separaten Terminalfenster laufen, sodass es weiterhin Fehler melden kann, aber Ihren anderen Terminalgebrauch nicht stört.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Die strukturelle Typisierung ist eine Methode, um Typen nur auf Basis ihrer Mitglieder zu vergleichen, auch wenn Sie den Typ nicht explizit definieren.

Wir werden einen `TodoType` Typ definieren, um zu sehen, wie TypeScript sicherstellt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell dazu kompatibel ist.

1. Erstellen Sie im `src`-Ordner einen `types`-Ordner.
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
   > Die Svelte-Vorlage verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie die `export`/`import` Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Weitere Informationen finden Sie in [diesem Abschnitt des Leitfadens zur Fehlersuche](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation).

4. Jetzt werden wir `TodoType` von unserer `Todo.svelte`-Komponente aus verwenden. Fügen Sie zuerst das `lang="ts"` zum `<script>`-Tag hinzu.
5. Importieren Sie den Typ und verwenden Sie ihn zur Deklaration der `todo`-Eigenschaft. Ersetzen Sie die Zeile `export let todo` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts` Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und ausgelassen wurde.

6. Jetzt werden wir von `Todos.svelte` eine `Todo` Komponente mit einem Literalobjekt als Parameter instanziieren, vor dem Aufruf der `MoreActions`-Komponente, so:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` zum `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es weiß, dass das Typring, das wir angegeben haben, verwendet wird.

   Wir erhalten die folgende Fehlermeldung:

   ![Typfehler in VS Code, Todo-Typ-Objekt muss eine id-Eigenschaft haben.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript beim Erstellen von Svelte-Projekten erhalten können.

Jetzt werden wir diese Änderungen rückgängig machen, um mit dem Port unserer Anwendung zu TypeScript zu beginnen, damit wir nicht von allen Prüfwarnungen gestört werden.

1. Entfernen Sie das fehlerhafte To-do und das `lang='ts'` Attribut aus der `Todos.svelte` Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir werden uns später ordentlich darum kümmern.

## Portierung unserer To-do-Liste-App nach TypeScript

Jetzt sind wir bereit, den Typisierungsvorgang zu starten, um unsere To-do-Liste-App zu nutzen und alle Funktionen von TypeScript vollständig zu nutzen.

Lassen Sie uns damit beginnen, das `check` Skript im Beobachtungsmodus innerhalb des Projektstamms auszuführen:

```bash
npm run check -- --watch
```

Dies sollte so etwas ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass ein einfacher Weg, eine Svelte-Komponente in einem unterstützenden Code-Editor wie VS Code zu portieren, darin besteht, einfach das `<script lang='ts'>` oben in Ihrer Komponente hinzuzufügen und nach den dreipunktigen Hinweisen zu suchen:

![VS Code Screenshot zeigt, dass wenn Sie Typ="ts" zu einer Komponente hinzufügen, es dreipunktige Hinweisalarme gibt](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte` Komponente.

1. Fügen Sie `lang="ts"` in Ihre `Alert.svelte`-Komponente's `<script>`-Tag ein. Sie werden einige Warnungen in der Ausgabe des `check` Skripts sehen:

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
   > Es besteht keine Notwendigkeit, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript dies bereits aus seinem Standardwert ableitet.

### MoreActions.svelte

Jetzt machen wir dasselbe für die `MoreActions.svelte` Komponente.

1. Fügen Sie das `lang='ts'` Attribut wie zuvor hinzu. TypeScript wird uns vor der `todos`-Eigenschaft und der `t`-Variablen im Aufruf `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den `TodoType` verwenden, die wir bereits definiert haben, um TypeScript mitzuteilen, dass `todos` ein `TodoType` Array ist. Ersetzen Sie die Zeile `export let todos` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript nun ableiten kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Trotzdem, wenn wir denken, dass es unseren Code leichter lesbar macht, könnten wir ihn wie folgt angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Die meiste Zeit wird TypeScript in der Lage sein, den reaktiven Variablentyp korrekt abzuleiten, aber manchmal können Sie einen "implizit hat den 'any' Typ" Fehler erhalten, wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ nicht in der reaktiven Zuweisung selbst angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Weitere Informationen finden Sie unter [Wie gebe ich reaktive Zuweisungen an? / Ich erhalte einen "implizit hat den 'any' Typ" Fehler](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton` Komponente.

1. Fügen Sie das `lang='ts'` Attribut zum `<script>`-Tag hinzu, wie gewohnt. Sie werden feststellen, dass es keine Warnungen gibt — TypeScript leitet den Typ der Filtervariable aus dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: alle, aktiv und abgeschlossen. Also können wir TypeScript darüber informieren, indem wir ein Enum Filter erstellen.
2. Erstellen Sie eine `filter.enum.ts` Datei im `types` Ordner.
3. Geben Sie ihm den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Jetzt werden wir dies aus der `FilterButton` Komponente verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte` Datei durch den folgenden:

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

Hier importieren wir einfach das `Filter` Enum und verwenden es anstelle der zuvor genutzten Zeichenkettenwerte.

### Todos.svelte

Wir werden auch das `Filter` Enum in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst das `lang='ts'` Attribut hinzu, wie zuvor.
2. Importieren Sie anschließend das `Filter` Enum. Fügen Sie die folgende `import` Anweisung unter Ihren bestehenden hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt werden wir es verwenden, wann immer wir auf den aktuellen Filter verweisen. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch die folgenden:

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

   Beginnen Sie damit, den `TodoType` zu importieren und teilen Sie TypeScript mit, dass unsere `todos` Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes werden wir alle fehlenden Typen angeben. Die Variable `todosStatus`, die wir verwendet haben, um programmgesteuert auf die von der `TodosStatus`-Komponente bereitgestellten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jedes `todo` wird vom Typ `TodoType` sein.

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

Wir stoßen auf die folgenden Fehler im Zusammenhang mit der Übergabe von `todos` an die `TodosStatus.svelte` (und `Todo.svelte`) Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Dies ist, weil die `todos`-Eigenschaft in der `TodosStatus`-Komponente keinen Standardwert hat, so dass TypeScript es als `undefined` Typ aufgefasst hat, was nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe passiert mit unserer Todo-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'` Attribut hinzu.
2. Dann importieren Sie den `TodoType` und deklarieren Sie die `todos` Eigenschaft als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>` Abschnitts wie folgt:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir werden auch die `headingEl`, die wir verwendet haben, um sie an das Überschrift-Tag zu binden, als ein `HTMLElement` spezifizieren. Aktualisieren Sie die Zeile `let headingEl` wie folgt:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler gemeldet sehen, der sich auf die Stelle bezieht, an der wir das `tabindex` Attribut setzen. Das ist, weil TypeScript den `<h2>`-Element überprüft und erwartet, dass `tabindex` von Typ `number` ist.

   ![Tabindex-Hinweis in Visual Studio Code, tabindex erwartet einen Typ von Zahl, nicht Zeichenkette](10-vscode-tabindex-hint.png)

   Um das zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, wie hier:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir es fälschlicherweise einer Zeichenfolgenvariable zuweisen.

### NewTodo.svelte

Als nächstes kümmern wir uns um `NewTodo.svelte`.

1. Wie üblich, fügen Sie das `lang='ts'` Attribut hinzu.
2. Die Warnung wird anzeigen, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Setzen Sie ihren Typ auf `HTMLElement` so:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie ihre Definition so:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt stammen die einzigen Warnungen, die `npm run check` ausgibt, von den Methodenaufrufen der `Todo.svelte`-Komponente. Lassen Sie uns das beheben.

1. Öffnen Sie die `Todo.svelte` Datei und fügen Sie das `lang='ts'` Attribut hinzu.
2. Lassen Sie uns den `TodoType` importieren und den Typ der `todo`-Eigenschaft festlegen. Ersetzen Sie die Zeile `export let todo` durch die folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist ein Hinweis von TypeScript, dass wir den Typ der `update()`-Funktion `updatedTodo`-Variable definieren müssen. Das kann etwas knifflig sein, weil `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es sich nicht um ein komplettes `todo` handelt — es hat nur ein Teilmengen von Eigenschaften eines `todo`.

   Für solche Fälle bietet TypeScript mehrere [Utilitytypen](https://www.typescriptlang.org/docs/handbook/utility-types.html), die es einfacher machen, diese allgemeinen Transformationen anzuwenden. Was wir gerade brauchen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) Utility, das es uns erlaubt, alle Teilmengen eines bestimmten Typs zu repräsentieren. Das Partial-Utility gibt einen neuen Typ basierend auf dem Typ `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir werden es in der `update()`-Funktion verwenden — aktualisieren Sie diese so wie hier:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit sagen wir TypeScript, dass die `updatedTodo`-Variable eine Teilmenge der `TodoType`-Eigenschaften enthalten wird.

4. Nun sagt uns `svelte-check`, dass wir den Typ unserer Aktionsfunktionsparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die `node` Variable vom Typ `HTMLElement` definieren. Ersetzen Sie die erste Instanz von `node` in den zwei oben genannten Zeilen durch `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die `actions.js` Datei.

1. Benennen Sie sie in `actions.ts` um und fügen Sie den Typ des `node` Parameters hinzu. Sie sollte am Ende so aussehen:

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

2. Jetzt aktualisieren Sie `Todo.svelte` und `NewTodo.svelte`, wo wir die `actions`-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In beiden Fällen sollte es so enden:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migrationen der Stores zu TypeScript

Nun müssen wir die `stores.js` und `localStore.js` Dateien auf TypeScript migrieren.

Tipp: das Skript `npm run check`, das das Tool [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) verwendet, prüft nur die `.svelte` Dateien unserer Anwendung. Wenn Sie auch die `.ts` Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, was den TypeScript-Compiler anweist, auf Fehler zu prüfen, ohne die `.js` Ausgabedateien zu erzeugen. Sie könnten sogar ein Skript zu Ihrer `package.json` Datei hinzufügen, das diesen Befehl ausführt.

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
2. TypeScript sagt uns, wir sollen den Typ der `key`, `initial` und `value` Variablen angeben. Die erste ist einfach: der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenfolge sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das in einen gültigen JSON-String mit der [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Methode umgewandelt werden kann, was jedes JavaScript-Objekt mit ein paar Einschränkungen bedeutet: zum Beispiel sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Also werden wir den Typ `JsonValue` erstellen, um diese Bedingungen anzugeben.

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

   Der `|` Operator lässt uns Variablen deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte eine Zeichenfolge, eine Zahl, ein Boolean, und so weiter sein. Hierbei nutzen wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` und auch ein Objekt mit Eigenschaften des `JsonValue` Typs haben kann.

4. Wir werden unseren `JsonValue` Typ importieren und entsprechend verwenden. Aktualisieren Sie Ihre `localStore.ts` Datei so:

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

Jetzt wenn wir versuchen, einen `localStore` mit etwas zu erstellen, das nicht in JSON mit `JSON.stringify()` konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` sich darüber beschweren:

![VS Code zeigt einen Fehler bei der Verwendung unseres Store - es scheitert, wenn versucht wird, einen lokalen Speicherwert auf etwas nicht kompatibles mit JSON stringify zu setzen](11-vscode-invalid-store.png)

Und das Beste ist, es wird sogar mit der [`$store` Autoabonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktionieren. Wenn wir versuchen, einen ungültigen Wert in unserem `$todos` Store mit der `$store` Syntax zu speichern, so:

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

Das Prüfen-Skript wird den folgenden Fehler melden:

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

Und das war's. Wir haben unsere ganze Anwendung konvertiert, um TypeScript zu nutzen.

## Die Stores mit Generics ausfallsicher machen

Unsere Stores sind bereits zu TypeScript portiert, aber wir können besser arbeiten. Wir sollten nicht jede Art von Wert speichern müssen — wir wissen, dass der Alert-Store Zeichenfolgennachrichten enthalten sollte und der To-do-Store ein Array von `TodoType`, usw. Wir können TypeScript zulassen, dass dies sichergestellt wird, indem wir [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) verwenden. Lassen Sie uns mehr herausfinden.

### Generisches Typen in TypeScript verstehen

Generische Typen ermöglichen es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen anstelle eines einzelnen Typs arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter unter Verwendung einer speziellen Syntax übergeben: Sie werden innerhalb von Winkelklammern angegeben und konventionell durch einen einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die von dem Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Lassen Sie uns schnell ein Beispiel sehen, eine einfache `Stack`-Klasse, die es uns ermöglicht, Elemente zu `push` und `pop`, wie hier:

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

In diesem Fall ist `elements` ein Array des Typs `any`, und dementsprechend empfangen und geben die `push()` und `pop()` Methoden beide eine Variable des Typs `any` zurück. Es ist also völlig gültig, so etwas wie das folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` funktioniert? Wir könnten so vorgehen:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack` Klasse erstellen. Und wie könnten wir einen Stapel von Typen handhaben, die wir noch nicht kennen und die von dem Verbraucher bestimmt werden sollten?

Um all diese Probleme zu lösen, können wir generische Typen verwenden.

Dies ist unsere `Stack` Klasse, wieder implementiert mit Generics:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann so, wie wir normalerweise einen bestimmten Typ verwenden würden. Jetzt ist `elements` ein Array des Typs `T` und `push()` und `pop()` empfangen beide und geben eine Variable des Typs `T` zurück.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stapel nur Zahlen akzeptieren kann und wird einen Fehler melden, wenn Sie versuchen, alles andere zu verwenden:

![Argument von Typ hello ist nicht zuweisbar zu Parameter von Typ number](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen durch ihre Verwendung ableiten. Generische Typen unterstützen auch Standardwerte und Einschränkungen.

Generische Typen sind ein mächtiges Feature, das es unserem Code erlaubt, sich von den spezifischen Typen zu abstrahieren, die verwendet werden, wodurch er wiederverwendbarer und generischer wird, ohne auf die Typsicherheit zu verzichten. Um mehr darüber zu erfahren, lesen Sie die [Einführung in die Generics in TypeScript](https://www.typescriptlang.org/docs/handbook/generics.html).

### Verwenden von Svelte-Stores mit Generics

Svelte-Stores unterstützen Generics von Haus aus. Und dank generischer Typinferenz können wir davon profitieren, ohne auch nur unseren Code zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number` Typ auf unseren `$alert` Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument von Typ 9999 ist nicht zuweisbar zu Parameter von Typ string](13-vscode-generic-alert-error.png)

Das liegt daran, dass wir, als wir unseren Alert-Store in der `stores.ts` Datei definiert haben, dies getan haben:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript hat den generistischen Typ als `string` abgeleitet. Wenn wir explizit sein wollten, könnten wir das so tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Nun werden wir unseren `localStore` so einrichten, dass er Generics unterstützt. Denken Sie daran, dass wir den `JsonValue` Typ definiert haben, um die Verwendung unseres `localStore` mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt sollen die Verbraucher von `localStore` in der Lage sein, den Typ der zu speichernden Daten anzugeben, aber anstatt mit jedem Typ zu arbeiten, sollten sie den `JsonValue` Typ einhalten. Wir geben das mit

einer Generischen Einschränkung an, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T) => {
  // …
};
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue` Typ kompatibel sein muss. Dann verwenden wir den `T` Typ entsprechend.

Unsere `localStore.ts` Datei wird am Ende so aussehen — probieren Sie den neuen Code jetzt in Ihrer Version aus:

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

Und dank generischer Typinferenz weiß TypeScript bereits, dass unser `$todos` Store ein Array von `TodoType` enthalten sollte:

![Todo Typ Objekt-Eigenschaft complete sollte completed sein](14-vscode-generic-localstore-error.png)

Einmal mehr, wenn wir explizit sein wollten, könnten wir das im `stores.ts` Datei so tun:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war es für unseren kurzen Rundgang durch die Generics in TypeScript.

## Der Code, den wir bis jetzt haben

### Git

Um den Code-Status zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos folgendermaßen zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie wir bereits früher gesagt haben, ist TypeScript noch nicht im REPL verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-do-Liste-Anwendung genommen und nach TypeScript portiert.

Zuerst haben wir etwas über TypeScript gelernt und welche Vorteile es uns bringen kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt in eine TypeScript-Anwendung umwandelt — unsere To-do-Liste-App.

Wir haben gelernt, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check` Tool verwendet, um TypeScript-Probleme von der Befehlszeile aus zu inspizieren.

Im nächsten Artikel werden wir lernen, wie man unsere App kompiliert und in die Produktion bereitstellt. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um weiterführend Svelte zu lernen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
