---
title: TypeScript-Unterstützung in Svelte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}

Im letzten Artikel haben wir Svelte Stores kennengelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Web-Speicher zu speichern. Außerdem haben wir uns angesehen, wie man die `transition`-Direktive verwendet, um Animationen an DOM-Elementen in Svelte zu implementieren.

Jetzt lernen wir, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst erfahren wir, was TypeScript ist und welche Vorteile es uns bieten kann. Dann sehen wir uns an, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich gehen wir unsere App durch und sehen, welche Änderungen wir vornehmen müssen, um die Funktionen von TypeScript voll auszunutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse im Umgang mit dem
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre Anwendung zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man TypeScript beim Entwickeln von Svelte-Anwendungen konfiguriert und verwendet.
      </td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass unsere Anwendung vollständig funktionsfähig ist und das Portieren auf TypeScript völlig optional ist. Darüber gibt es verschiedene Meinungen, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile von TypeScript sprechen. Selbst wenn Sie nicht planen, es zu verwenden, wird dieser Artikel nützlich sein, um zu verstehen, was es zu bieten hat und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie sich überhaupt nicht für TypeScript interessieren, können Sie zum nächsten Kapitel springen, in dem wir uns verschiedene Optionen zum Bereitstellen unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen.

## Gemeinsam mit uns Coden

### Git

Klonen Sie das GitHub-Repo (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Status der App zu gelangen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist die [TypeScript-Unterstützung noch nicht im REPL verfügbar](https://github.com/sveltejs/sites/issues/156).

## TypeScript: optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist eine erweiterte Version von JavaScript, die Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generics bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist die Ermöglichung von umfangreicheren Entwicklungsumgebungen, die Fehler bereits beim Tippen des Codes erkennen.

Das Beste daran ist, dass JavaScript-Code gültiger TypeScript-Code ist; TypeScript ist eine Obermenge von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie werden einfach funktionieren.

Unser TypeScript-Code wird überall dort ausgeführt werden können, wo JavaScript ausgeführt werden kann. Wie ist das möglich? TypeScript "transpiliert" unseren Code zu standardmäßigem JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den entsprechenden Standard-JavaScript-Code erzeugt, den Browser ausführen können.

> [!NOTE]
> Wenn Sie neugierig sind, wie TypeScript unseren Code nach JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Erstklassige TypeScript-Unterstützung war die am meisten geforderte Funktion von Svelte seit geraumer Zeit. Dank der harten Arbeit des Svelte-Teams, zusammen mit vielen Mitwirkenden, haben sie eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, die getestet werden kann. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitige Fehlererkennung: Der Compiler prüft die Typen zur Kompilierungszeit und liefert Fehlermeldungen.
- Lesbarkeit: Die statische Typisierung verleiht dem Code mehr Struktur, macht ihn selbstdokumentierend und leichter lesbar.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Code-Navigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichere Refaktorisierung: Typen ermöglichen es IDEs, mehr über Ihren Code zu wissen und Ihnen beim Refaktorieren großer Teile Ihres Code-Basis zu helfen.
- Typinferenz: Ermöglicht die Nutzung vieler TypeScript-Funktionen, auch ohne Variablentypen zu deklarieren.
- Verfügbarkeit von neuen und zukünftigen JavaScript-Funktionen: TypeScript transpiliert viele aktuelle JavaScript-Funktionen in einfaches, altes JavaScript, sodass Sie sie auch dann verwenden können, wenn sie in Nutzeragenten noch nicht nativ unterstützt werden.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierungszeit geprüft und aus dem generierten Code entfernt.
- Steile Lernkurve: Obwohl TypeScript eine Obermenge von JavaScript ist und keine völlig neue Sprache, gibt es eine beträchtliche Lernkurve, insbesondere wenn Sie keine Erfahrungen mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und pflegen.
- Kein Ersatz für automatische Tests: Auch wenn Typen helfen können, viele Fehler zu erkennen, ist TypeScript kein wahrer Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generics kann zu übermäßig engineered Code-Basen führen.

Es scheint einen breiten Konsens zu geben, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, an denen viele Entwickler am selben Code arbeiten. Und es wird tatsächlich von mehreren großangelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und selbst dem Svelte-Compiler. Dennoch ziehen es einige Entwickler vor, es auch in kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Letztendlich liegt die Entscheidung bei Ihnen. In den folgenden Abschnitten hoffen wir, Ihnen mehr Beweise liefern zu können, um Ihre Meinung dazu zu bilden.

## Erstellen eines Svelte TypeScript-Projekts von Grund auf

Sie können ein neues Svelte TypeScript-Projekt mit der [standardmäßigen Vorlage](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist, die folgenden Befehle im Terminal auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern — es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starter-Projekt mit TypeScript-Unterstützung, das Sie dann nach Belieben anpassen können.

Dann müssen Sie npm anweisen, Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## Hinzufügen von TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt

Um ein bestehendes Svelte-Projekt um TypeScript-Unterstützung zu erweitern, können Sie diese [Anleitung befolgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen `scripts`-Ordner innerhalb Ihres Projekt-Root-Verzeichnisses herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Genau das werden wir tun, um mit dem Portieren unserer Anwendung auf TypeScript zu beginnen.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie beginnen, diese auf TypeScript zu portieren.

Wechseln Sie ins Root-Verzeichnis des Projekts und geben Sie diese Befehle ein:

```bash
npx degit sveltejs/template/scripts scripts       # download script file to a scripts folder

node scripts/setupTypeScript.js                   # run it
# Converted to TypeScript.
```

Sie müssen Ihren Abhängigkeitsmanager neu ausführen, um loszulegen.

```bash
npm install                                       # download new dependencies

npm run dev                                       # start the app in development mode
```

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie zu TypeScript konvertieren möchten. Beachten Sie nur, dass die Svelte-Community die Svelte TypeScript-Unterstützung ständig verbessert, sodass Sie `npm update` regelmäßig ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie auf Probleme stoßen, TypeScript in einer Svelte-Anwendung zu verwenden, schauen Sie sich diese [Fehlerbehebung/FAQ-Sektion zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq) an.

Wie bereits erwähnt, ist TypeScript eine Obermenge von JavaScript, sodass Ihre Anwendung ohne Änderungen ausgeführt wird. Derzeit führen Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung aus, ohne die Vorteile der von TypeScript bereitgestellten Funktionen zu nutzen. Sie können jetzt damit beginnen, nach und nach Typen hinzuzufügen.

Nachdem Sie TypeScript konfiguriert haben, können Sie es in einer Svelte-Komponente verwenden, indem Sie einfach `<script lang='ts'>` am Anfang des Script-Bereichs hinzufügen. Um es in regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` in `.ts`. Sie müssen auch alle entsprechenden Import-Anweisungen aktualisieren, um die `.ts` Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler auslösen, wenn Sie die `.ts` Dateierweiterung in einer `import`-Anweisung verwenden, daher müssen Sie, wenn Sie eine Datei `./foo.ts` haben, diese als "./foo" importieren.
> Siehe die [Modulauflösung für Bundler, TypeScript-Laufzeiten und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) Sektion des TypeScript-Handbuchs für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in Markup-Bereichen von Komponenten wird in Svelte 4, auf dem dieser Leitfaden basiert, nicht unterstützt.
> Während Sie JavaScript aus dem Markup verwenden können, müssen Sie TypeScript im `<script lang='ts'>`-Bereich verwenden.
> TypeScript in Komponenten-Markup ist ab Svelte 5 erlaubt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript stellt Code-Editoren und IDEs viele Informationen zur Verfügung, um eine benutzerfreundlichere Entwicklererfahrung zu ermöglichen.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen kurzen Test durchzuführen und zu sehen, wie wir Autovervollständigungshinweise und Typüberprüfung erhalten können, während wir Komponenten schreiben.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir etwas später auch Anweisungen zur Verwendung der TypeScript-Fehlerprüfung über das Terminal an.

Es gibt laufende Arbeiten, um TypeScript in Svelte-Projekten in mehreren Code-Editoren zu unterstützen; die vollständigste Unterstützung ist derzeit in der [Svelte für VS Code-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typüberprüfung, Inspektion, Refaktorisierung, Intellisense, Hover-Informationen, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) und NICHT das alte "Svelte" von James Birtles verwenden, welches eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und die offizielle Svelte-Erweiterung stattdessen installieren.

Angenommen, Sie befinden sich innerhalb der VS Code-Anwendung, geben Sie am Projekthauptverzeichnis `code .` ein (der nachfolgende Punkt weist VS Code an, das aktuelle Verzeichnis zu öffnen), um den Code-Editor zu öffnen. VS Code weist Sie darauf hin, dass empfohlene Erweiterungen zur Installation verfügbar sind.

![Dialogbox, die besagt, dass für diesen Arbeitsbereich Erweiterungsempfehlungen vorliegen, mit Optionen, um diese zu installieren oder anzuzeigen](01-vscode-extension-recommendations.png)

Durch Klicken auf _Alle installieren_ wird Svelte für VS Code installiert.

![Erweiterungsinformationen zu Svelte für VS Code](02-svelte-for-vscode.png)

Wir sehen auch, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, was bedeutet, dass VS Code Hover-Informationen zu unseren Svelte-Komponenten bereitstellen kann:

![VS Code Bildschirmfoto, das zeigt, dass beim Überfahren einer Komponente Hinweise gegeben werden](03-vscode-hints-in-main-ts.png)

Wir erhalten auch die Typüberprüfung kostenlos. Wenn wir eine unbekannte Eigenschaft im options-Parameter des `App`-Konstruktors übergeben (z. B. ein Tippfehler wie `traget` anstelle von `target`), wird TypeScript sich beschweren:

![Typüberprüfung in VS Code – App-Objekt wurde eine unbekannte Eigenschaft traget gegeben](04-vscode-type-checking-in-main-ts.png)

Im `App.svelte` Komponenten hat das Script `setupTypeScript.js` das `lang="ts"` Attribut zum `<script>` Tag hinzugefügt. Darüber hinaus, dank der Typinferenz, müssen wir in vielen Fällen keine Typen mehr angeben, um Zugang zu Codeassistenz zu erhalten. Wenn Sie beispielsweise beginnen, ein `ms`-Eigenschaft zum Aufruf der `Alert`-Komponente hinzuzufügen, sieht TypeScript anhand des Standardwerts, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Code-Hinweis – ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas anderes als eine Zahl übergeben, wird es sich darüber beschweren:

![Typüberprüfung in VS Code – die ms-Variable wurde mit einem nicht numerischen Wert vergeben](06-vscode-type-checking-in-components.png)

Das Anwendungs-Template hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen, die normalerweise von einem Code-Editor angezeigt werden, von der Befehlszeile aus zu erkennen. Dies macht es ziemlich nützlich, es in einer kontinuierlichen Integrationspipeline (CI) auszuführen. Führen Sie einfach `npm run check` aus, um nicht verwendetes CSS zu überprüfen und A11y-Hinweise sowie TypeScript-Kompilierungsfehler zurückzugeben.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder in der VS Code Konsole oder dem Terminal), erhalten Sie den folgenden Fehler:

![Check-Befehl wird in VS Code ausgeführt und zeigt einen Typfehler an, ms Variable sollte mit einer Zahl zugewiesen werden](07-vscode-svelte-check.png)

Noch besser, wenn Sie es aus dem integrierten terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Strg</kbd> + <kbd>\`</kbd> öffnen), führt ein <kbd>Befehl</kbd>/<kbd>Strg</kbd>-Klick auf den Dateinamen direkt zur Zeile mit dem Fehler.

Sie können das `check`-Skript auch im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript jedes Mal ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, halten Sie es im Hintergrund in einem separaten Terminalfenster offen, sodass es weiterhin Fehler melden kann, aber nicht Ihre anderen Terminalnutzungen stört.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Methode, Typen ausschließlich basierend auf ihren Mitgliedern in Beziehung zu setzen, selbst wenn Sie den Typ nicht explizit definieren.

Wir definieren einen `TodoType` Typ, um zu sehen, wie TypeScript durchsetzt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell mit diesem kompatibel ist.

1. Erstellen Sie am Anfang einen `types`-Ordner im `src`-Verzeichnis.
2. Fügen Sie diesem Ordner eine `todo.type.ts`-Datei hinzu.
3. Der Inhalt von `todo.type.ts` sollte wie folgt sein:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Das Svelte Template verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie die `export`/`import`-Syntax verwenden, um Typen und Schnittstellen zu importieren. Überprüfen Sie [diesen Abschnitt des Fehlerbehebungsleitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für weitere Informationen.

4. Nun verwenden wir `TodoType` von unserer `Todo.svelte`-Komponente. Fügen Sie zuerst dem `<script>`-Tag `lang="ts"` hinzu.
5. Importieren Sie den Typ und verwenden Sie ihn, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` durch folgende Zeile:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts` Dateierweiterung in der `import`-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Jetzt instanziieren wir eine `Todo`-Komponente mit einem Literalen Objekt als Parameter vor dem Aufruf der `MoreActions`-Komponente, so:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie dem `<script>`-Tag der `Todos.svelte`-Komponente `lang='ts'` hinzu, damit Codeüberprüfung verwendet wird, die wir spezifiziert haben.

   Wir erhalten den folgenden Fehler:

   ![Typfehler in VS Code, Todo Type-Objekt benötigt eine id-Eigenschaft.](08-vscode-structural-typing.png)

Nun sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte erstellen.

Jetzt machen wir diese Änderungen rückgängig, um mit dem Portieren unserer Anwendung auf TypeScript zu beginnen, damit wir nicht durch alle Prüfwarnungen gestört werden.

1. Entfernen Sie das fehlerhafte To-Do und das `lang='ts'`-Attribut aus der Datei `Todos.svelte`.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir werden sie später ordnungsgemäß bearbeiten.

## Portieren unserer To-Do-Liste App zu TypeScript

Jetzt sind wir bereit, damit zu beginnen, unsere To-Do-Liste Applikation zu portieren, um all die Funktionen zu nutzen, die TypeScript uns bietet.

Beginnen wir damit, das Check-Skript im Überwachungsmodus im Projektstammverzeichnis auszuführen:

```bash
npm run check -- --watch
```

Dies sollte etwas wie folgendes ausgeben:

```bash
svelte-check "--watch"

Loading svelte-check in workspace: ./svelte-todo-typescript
Getting Svelte diagnostics...
====================================
svelte-check found no errors and no warnings
```

Beachten Sie, dass wenn Sie einen unterstützenden Code-Editor wie VS Code verwenden, es einfach ist, damit zu beginnen, eine Svelte-Komponente zu portieren, indem Sie einfach das `<script lang='ts'>` oben in Ihrer Komponente hinzufügen und nach den dreigepunkteten Hinweisen suchen:

![VS Code Screenshot zeigt, dass beim Hinzufügen von type="ts" zu einer Komponente dreipunktige Hinweismeldungen angezeigt werden](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte` Komponente.

1. Fügen Sie `lang="ts"` in die `<script>`-Tag Ihrer `Alert.svelte` Komponente ein. Sie werden einige Warnungen in der Ausgabe des `check`-Skripts sehen:

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
   > Es gibt keine Notwendigkeit, den `ms`-Typ mit `export let ms:number = 3000` anzugeben, da TypeScript dies bereits anhand des Standardwerts ableitet.

### MoreActions.svelte

Jetzt machen wir das gleiche für die `MoreActions.svelte` Komponente.

1. Fügen Sie das `lang='ts'`-Attribut wie zuvor hinzu. TypeScript wird uns bezüglich der `todos`-Eigenschaft und der `t`-Variable im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den bereits definierten `TodoType` verwenden, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die `export let todos`-Zeile durch folgende:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt erkennen kann, dass die `t`-Variable in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Wenn wir jedoch denken, dass dies unseren Code leichter lesbar macht, könnten wir es so spezifizieren:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Meistens kann TypeScript den reaktiven Variablentyp richtig ableiten, aber manchmal können Sie einen "hat implizit den Typ 'any' Fehler" erhalten, wenn Sie mit reaktiven Zuweisungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer separaten Anweisung deklarieren, wie so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ nicht in der reaktiven Zuweisung selbst angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Für weitere Informationen lesen Sie [Wie typisiere ich reaktive Zuweisungen? / Ich erhalte einen "implizit hat Typ 'any' Fehler"](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Jetzt kümmern wir uns um die `FilterButton` Komponente.

1. Fügen Sie das `lang='ts'`-Attribut zum `<script>`-Tag hinzu, wie gewohnt. Es folgen keine Warnungen — TypeScript leitet den Typ der Filtervariable von dem Standardwert ab. Aber wir wissen, dass es nur drei gültige Werte für den Filter gibt: all, active und completed. Daher können wir TypeScript darüber informieren, indem wir eine Aufzählung Filter erstellen.
2. Erstellen Sie eine `filter.enum.ts`-Datei im `types`-Ordner.
3. Geben Sie ihr folgende Inhalte:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Nun verwenden wir dies von der `FilterButton`-Komponente aus. Ersetzen Sie den Inhalt der Datei `FilterButton.svelte` durch Folgendes:

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

Hier importieren wir nur die `Filter`-Aufzählung und verwenden sie anstelle der vorher verwendeten Zeichenfolgenwerte.

### Todos.svelte

Wir werden auch die `Filter`-Aufzählung in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst das `lang='ts'`-Attribut hinzu, wie zuvor.
2. Importieren Sie die `Filter`-Aufzählung. Fügen Sie folgende `import`-Anweisung unter Ihren bestehenden hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Jetzt werden wir sie verwenden, wann immer wir den aktuellen Filter referenzieren. Ersetzen Sie Ihre beiden Filter-bezogenen Blöcke durch Folgendes:

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

4. Der `check` gibt uns immer noch einige Warnungen von `Todos.svelte`. Lass uns sie beheben.

   Beginnen Sie den `TodoType` zu importieren und sagen Sie TypeScript, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als nächstes werden wir alle fehlenden Typen angeben. Die Variable `todosStatus`, die wir verwendet haben, um programmatisch auf die Methoden zuzugreifen, die von der `TodosStatus`-Komponente bereitgestellt werden, hat den Typ `TodosStatus`. Und jeder `todo` wird vom Typ `TodoType` sein.

   Aktualisieren Sie Ihren `<script>` Abschnitt, um wie folgt auszusehen:

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

Wir haben die folgenden Fehler im Zusammenhang mit der Übergabe von `todos` an die `TodosStatus.svelte` (und `Todo.svelte`) Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Das liegt daran, dass die `todos`-Eigenschaft in der `TodosStatus`-Komponente keinen Standardwert hat, TypeScript sie daher als Typ `undefined` angenommen hat, der nicht mit einem Array von `TodoType` kompatibel ist. Dasselbe Problem tritt bei unserer Todo-Komponente auf.

Lass uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann den `TodoType` und deklarieren Sie die `todos`-Eigenschaft als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>` Abschnitts mit folgendem:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir spezifizieren außerdem das `headingEl`, das wir zum Binden an das Überschriftentag verwendet haben, als `HTMLElement`. Aktualisieren Sie die `let headingEl`-Zeile mit folgendem:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler gemeldet sehen, der sich auf die Stelle bezieht, an der wir das `tabindex`-Attribut setzen. Das liegt daran, dass TypeScript das `<h2>`-Element typüberprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   Um dies zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, so:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   So kann TypeScript verhindern, dass wir es fälschlicherweise auf eine Zeichenfolgenvariable setzen.

### NewTodo.svelte

Als Nächstes kümmern wir uns um `NewTodo.svelte`.

1. Fügen Sie wie gewohnt das `lang='ts'`-Attribut hinzu.
2. Die Warnung weist darauf hin, dass wir einen Typ für die `nameEl`-Variable angeben müssen. Legen Sie ihren Typ als `HTMLElement` fest, so:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt für diese Datei müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie deren Definition wie so:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Nun sind die einzigen Warnungen, die `npm run check` ausgibt, durch das Aufrufen der `Todo.svelte`-Komponente ausgelöst. Lassen Sie uns diese beheben.

1. Öffnen Sie die `Todo.svelte`-Datei und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Lassen Sie uns den Typ `TodoType` importieren und den Typ der `todo`-Eigenschaft festlegen. Ersetzen Sie die Zeile `export let todo` durch folgende Zeile:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass uns TypeScript bittet, den Typ der `update()`-Funktion `updatedTodo`-Variable zu definieren. Dies kann etwas knifflig sein, da `updatedTodo` nur die aktualisierten Attribute des `todo` enthält. Das bedeutet, dass es kein vollständiges `todo` ist — es hat nur eine Teilmenge der Eigenschaften eines `todo`.

   Für diese Arten von Fällen stellt TypeScript mehrere [Utility-Typen](https://www.typescriptlang.org/docs/handbook/utility-types.html) zur Verfügung, die es einfacher machen, diese gängigen Transformationen anzuwenden. Was wir jetzt brauchen, ist der [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) Utility-Typ, der es ermöglicht, alle Teilmengen eines angegebenen Typs darzustellen. Der Partial-Utility gibt einen neuen Typ auf Basis des Typs `T` zurück, bei dem jede Eigenschaft von `T` optional ist.

   Wir werden ihn in der `update()`-Funktion verwenden — aktualisieren Sie dafür so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit teilen wir TypeScript mit, dass die `updatedTodo` Variable eine Teilmenge der `TodoType`-Eigenschaften enthalten wird.

4. Nun sagt uns svelte-check, dass wir den Typ unserer Aktionsfunktionparameter definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen nur die `node` Variable als `HTMLElement` definieren. Ersetzen Sie in den beiden oben angegebenen Zeilen die erste Instanz von `node` durch `node: HTMLElement`.

### actions.js

Als Nächstes kümmern wir uns um die Datei `actions.js`.

1. Benennen Sie sie in `actions.ts` um und geben Sie den Typ des node Parameters an. Es sollte folgendermaßen aussehen:

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

2. Aktualisieren Sie `Todo.svelte` und `NewTodo.svelte`, wo wir die actions-Datei importieren. Denken Sie daran, dass Importe in TypeScript die Dateierweiterung nicht enthalten. In jedem Fall sollte es folgendermaßen aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migrieren der Stores zu TypeScript

Nun müssen wir die Dateien `stores.js` und `localStore.js` zu TypeScript konvertieren.

Tipp: Das Script `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) Tool verwendet, prüft nur die `.svelte`-Dateien unserer Anwendung. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noEmit` ausführen, was dem TypeScript-Compiler sagt, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Wir beginnen mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays zu `TodoType[]`. Der Inhalt wird folgendermaßen aussehen:

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

1. Beginnen Sie damit, die Datei in `localStore.ts` umzubenennen.
2. TypeScript sagt uns, dass wir den Typ der `key`, `initial` und `value`-Variablen angeben sollen. Der erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenkette sein.

   Aber `initial` und `value` sollten jedes beliebige Objekt sein, das zu einem gültigen JSON-String mit der [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Methode konvertiert werden kann, was jedes JavaScript-Objekt mit ein paar Einschränkungen bedeutet: Zum Beispiel sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Daher erstellen wir den Typ `JsonValue`, um diese Bedingungen zu spezifizieren.

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

   Der `|`-Operator erlaubt uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern könnten. Ein `JsonValue` könnte eine Zeichenkette, eine Zahl, ein Boolescher Wert und so weiter sein. In diesem Fall nutzen wir auch rekursive Typen, um zu spezifizieren, dass ein `JsonValue` ein Array von `JsonValue` haben kann und auch ein Objekt mit Eigenschaften vom Typ `JsonValue`.

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

Wenn wir nun versuchen, einen `localStore` mit etwas zu erstellen, das nicht mit `JSON.stringify()` in JSON konvertiert werden kann, z. B. ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` dies monieren:

![VS Code zeigt einen Fehler beim Verwenden unseres Stores – es schlägt fehl, wenn versucht wird, dem lokalen Speicher einen Wert zuzuweisen, der mit JSON.stringify nicht kompatibel ist](11-vscode-invalid-store.png)

Und das Beste daran, es wird sogar mit der [`$store`-Autoabonnement-Syntax](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktionieren. Wenn wir versuchen, einen ungültigen Wert in unserem `todos`-Store mit der `$store`-Syntax zu speichern, so:

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

Dies ist ein weiteres Beispiel dafür, wie die Angabe von Typen unseren Code robuster machen kann und uns helfen kann, mehr Fehler zu erfassen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung konvertiert, um TypeScript zu verwenden.

## Unsere Stores mit Generics wasserdicht machen

Unsere Stores wurden bereits nach TypeScript portiert, aber wir können noch besser werden. Wir sollten keinen Wert jedweder Art speichern müssen – wir wissen, dass der Alert Store nur Zeichenfolgenmeldungen enthalten sollte, und der To-Do-Store ein Array von `TodoType` usw. Wir können TypeScript dies durchsetzt, indem wir [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) verwenden. Lassen Sie uns mehr herausfinden.

### Verständnis von TypeScript Generics

Generics ermöglichen das Erstellen von wiederverwendbaren Codekomponenten, die mit verschiedenen Typen anstelle eines einzelnen Typs arbeiten. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: Sie werden innerhalb eckiger Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben benannt. Generische Typen ermöglichen es Ihnen, Typen zu erfassen, die vom Benutzer bereitgestellt werden, und stellt sicher, dass sie für die zukünftige Verarbeitung verfügbar sind.

Sehen wir uns ein schnelles Beispiel an, eine einfache `Stack`-Klasse, in der wir Elemente `push` und `pop` können, so:

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

In diesem Fall ist `elements` ein Array vom Typ `any` und dementsprechend empfangen und geben die `push()`- und `pop()`-Methoden eine Variable vom Typ `any` zurück. Daher ist es perfekt gültig, so etwas zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen Stack haben wollten, der nur mit dem Typ `string` arbeiten würde? Wir könnten das Folgende tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir denselben Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir einen Stapel von Typen handhaben, die wir noch nicht kennen und die vom Benutzer definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generika verwenden.

Das ist unsere `Stack`-Klasse neu implementiert mit Generics:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann, als würden wir normalerweise einen bestimmten Typ verwenden. Jetzt ist `elements` ein Array vom Typ `T` und `push()` und `pop()` beide empfangen und geben eine Variable vom Typ `T` zurück.

So würden wir unsere generische `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Nun weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann und gibt einen Fehler aus, wenn wir versuchen, etwas anderes hinzuzufügen:

![Argument des Typs hello ist dem Parameter des Typs number nicht zuweisbar](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen anhand ihrer Verwendung ableiten. Generische Typen unterstützen auch Standardwerte und Einschränkungen.

Generische Typen sind ein mächtiges Feature, das es unserem Code ermöglicht, von den spezifischen Typen abstrahiert zu werden, die verwendet werden, und ihn wiederverwendbarer und generischer zu machen, ohne Sicherheitsüberprüfungen aufzugeben. Um mehr darüber zu erfahren, schauen Sie sich die [TypeScript Einführung in Generika](https://www.typescriptlang.org/docs/handbook/generics.html) an.

### Verwendung von Svelte Stores mit Generics

Svelte Stores unterstützen Generics von Haus aus. Und dank der generischen Typenableitung können wir ihre Vorteile nutzen, ohne unseren Code überhaupt zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number` Typ unserem `$alert`-Store zuweisen, erhalten Sie den folgenden Fehler:

![Argument des Typs 9999 ist dem Parameter des Typs string nicht zuweisbar](13-vscode-generic-alert-error.png)

Das liegt daran, dass wir, als wir unseren Alert Store in der `stores.ts` Datei definiert haben mit:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript den generischen Typ `string` angenommen hat. Wenn wir darüber explizit sein wollten, könnten wir das Folgende tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Nun lassen Sie uns unseren `localStore` Store generische Unterstützung hinzufügen. Denken Sie daran, dass wir den `JsonValue` Typ definiert haben, um die Verwendung unserer `localStore` Stores mit Werten zu verhindern, die nicht mit `JSON.stringify()` gespeichert werden können. Jetzt möchten wir, dass die Verbraucher von `localStore` in der Lage sind, den Typ der zu speichernden Daten anzugeben, aber statt mit einem beliebigen Typ zu arbeiten, sollten sie die `JsonValue`-Bedingungen erfüllen. Wir werden das mit einer generischen Einschränkung spezifizieren, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und spezifizieren, dass er mit dem `JsonValue` Typ kompatibel sein muss. Dann verwenden wir den `T` Typ entsprechend.

Unsere `localStore.ts` Datei wird folgendermaßen aussehen – versuchen Sie es jetzt mit dem neuen Code in Ihrer Version:

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

Und dank generischer Typenableitung weiß TypeScript bereits, dass unser `$todos` Store ein Array von `TodoType` enthalten sollte:

![Todo Type Objekt-Eigenschaft complete sollte als completed geschrieben werden](14-vscode-generic-localstore-error.png)

Ein weiteres Beispiel dafür, wenn wir explizit sein wollen, könnten wir es in der `stores.ts` Datei tun, so:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das war unsere kurze Einführung in TypeScript Generika.

## Der bisherige Code

### Git

Um den Zustand des Codes zu sehen, wie er am Ende dieses Artikels aussehen sollte, greifen Sie mit Ihrer Kopie unseres Repos folgendermaßen darauf zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie den gesamten Ordnerinhalt direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Erinnern Sie sich daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie bereits erwähnt, ist TypeScript noch nicht im REPL verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Listen-Applikation genommen und auf TypeScript portiert.

Wir haben zuerst über TypeScript gelernt und welche Vorteile es uns bieten kann. Dann haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt konvertiert, um TypeScript zu verwenden – unsere To-Do-Liste App.

Wir haben gelernt, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typüberprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check`-Tool verwendet, um TypeScript-Probleme von der Befehlszeile aus zu überprüfen.

Im nächsten Artikel lernen wir, wie wir unsere App kompilieren und in der Produktion bereitstellen. Wir werden auch sehen, welche Ressourcen online zur Verfügung stehen, um das Lernen von Svelte weiter voranzutreiben.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_stores","Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next", "Learn_web_development/Core/Frameworks_libraries")}}
