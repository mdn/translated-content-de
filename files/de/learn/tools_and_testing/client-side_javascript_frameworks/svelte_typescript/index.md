---
title: TypeScript-Unterstützung in Svelte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im letzten Artikel haben wir über Svelte-Stores gelernt und sogar unseren eigenen benutzerdefinierten Store implementiert, um die Informationen der App im Web-Speicher zu persistieren. Wir haben uns auch das Verwenden der Transitions-Direktive angesehen, um Animationen auf DOM-Elementen in Svelte zu implementieren.

Nun werden wir lernen, wie man TypeScript in Svelte-Anwendungen verwendet. Zuerst lernen wir, was TypeScript ist und welche Vorteile es uns bringen kann. Dann werden wir sehen, wie wir unser Projekt konfigurieren, um mit TypeScript-Dateien zu arbeiten. Schließlich werden wir unsere App durchgehen und sehen, welche Änderungen wir vornehmen müssen, um alle Funktionen von TypeScript voll auszunutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sein und
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
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

Beachten Sie, dass unsere Anwendung voll funktionsfähig ist und das Portieren auf TypeScript völlig optional ist. Es gibt hierzu unterschiedliche Meinungen, und in diesem Kapitel werden wir kurz über die Vor- und Nachteile der Verwendung von TypeScript sprechen. Auch wenn Sie nicht planen, es zu übernehmen, wird dieser Artikel nützlich sein, um Ihnen zu ermöglichen, zu lernen, was es zu bieten hat und Ihnen helfen, Ihre eigene Entscheidung zu treffen. Wenn Sie überhaupt nicht an TypeScript interessiert sind, können Sie zum nächsten Kapitel springen, in dem wir uns verschiedene Optionen für das Deployment unserer Svelte-Anwendungen, weitere Ressourcen und mehr ansehen werden.

## Programmieren Sie mit

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie

```bash
cd mdn-svelte-tutorial/07-typescript-support
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/07-typescript-support
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Leider ist die [TypeScript-Unterstützung im REPL noch nicht verfügbar](https://github.com/sveltejs/sites/issues/156).

## TypeScript: Optionale statische Typisierung für JavaScript

[TypeScript](https://www.typescriptlang.org/) ist ein Superset von JavaScript, das Funktionen wie optionale statische Typisierung, Klassen, Schnittstellen und Generika bietet. Das Ziel von TypeScript ist es, Fehler frühzeitig durch sein Typsystem zu erkennen und die JavaScript-Entwicklung effizienter zu gestalten. Einer der großen Vorteile ist, dass IDEs eine reichhaltigere Umgebung bieten können, um häufige Fehler beim Eintippen des Codes zu erkennen.

Der beste Teil ist, dass JavaScript-Code auch gültiger TypeScript-Code ist; TypeScript ist ein Superset von JavaScript. Sie können die meisten Ihrer `.js`-Dateien in `.ts`-Dateien umbenennen, und sie werden einfach funktionieren.

Unser TypeScript-Code kann überall ausgeführt werden, wo JavaScript laufen kann. Wie ist das möglich? TypeScript „transpiliert“ unseren Code in Vanilla-JavaScript. Das bedeutet, dass es TypeScript-Code analysiert und den entsprechenden Vanilla-JavaScript-Code für Browser erzeugt.

> [!NOTE]
> Wenn Sie neugierig darauf sind, wie TypeScript unseren Code in JavaScript transpiliert, können Sie sich den [TypeScript Playground](https://www.typescriptlang.org/play/?target=1&e=4#example/hello-world) ansehen.

Die erstklassige TypeScript-Unterstützung war die meistgeforderte Funktion von Svelte seit einiger Zeit. Dank der harten Arbeit des Svelte-Teams zusammen mit vielen Mitwirkenden haben wir eine [offizielle Lösung](https://svelte.dev/blog/svelte-and-typescript) bereit, um sie zu testen. In diesem Abschnitt zeigen wir Ihnen, wie Sie ein Svelte-Projekt mit TypeScript-Unterstützung einrichten, um es auszuprobieren.

## Warum TypeScript?

Die Hauptvorteile von TypeScript sind:

- Frühzeitig erkannte Fehler: Der Compiler überprüft Typen zur Kompilierzeit und liefert Fehlerberichte.
- Lesbarkeit: Statische Typisierung verleiht dem Code mehr Struktur und macht ihn selbstdokumentierend und lesbarer.
- Umfangreiche IDE-Unterstützung: Typinformationen ermöglichen es Code-Editoren und IDEs, Funktionen wie Codenavigation, Autovervollständigung und intelligentere Hinweise anzubieten.
- Sichereres Refactoring: Typen erlauben es IDEs, mehr über Ihren Code zu wissen und Ihnen beim Refaktorieren großer Codebasen zu helfen.
- Typinferenz: Ermöglicht es Ihnen, viele TypeScript-Features zu nutzen, ohne Variablentypen explizit anzugeben.
- Verfügbarkeit neuer und zukünftiger JavaScript-Features: TypeScript transpiliert viele aktuelle JavaScript-Features zu einfachem, traditionellem JavaScript, sodass Sie diese auch auf User-Agents verwenden können, die sie noch nicht nativ unterstützen.

TypeScript hat auch einige Nachteile:

- Keine echte statische Typisierung: Typen werden nur zur Kompilierzeit überprüft und aus dem generierten Code entfernt.
- Hohe Lernkurve: Obwohl TypeScript ein Superset von JavaScript und keine komplett neue Sprache ist, gibt es eine erhebliche Lernkurve, besonders wenn Sie überhaupt keine Erfahrung mit statischen Sprachen wie Java oder C# haben.
- Mehr Code: Sie müssen mehr Code schreiben und warten.
- Kein Ersatz für automatische Tests: Auch wenn Typen Ihnen helfen können, mehrere Bugs zu fangen, ist TypeScript kein wahrer Ersatz für eine umfassende Suite automatisierter Tests.
- Boilerplate-Code: Die Arbeit mit Typen, Klassen, Schnittstellen und Generika kann zu übermäßig verkomplizierten Codebasen führen.

Es scheint ein breiter Konsens darüber zu bestehen, dass TypeScript besonders gut für groß angelegte Projekte geeignet ist, an denen viele Entwickler arbeiten. Und es wird tatsächlich von mehreren groß angelegten Projekten verwendet, wie Angular 2, Vue 3, Ionic, Visual Studio Code, Jest und sogar dem Svelte-Compiler. Dennoch ziehen es einige Entwickler vor, es auch in kleinen Projekten wie dem, das wir entwickeln, zu verwenden.

Am Ende liegt es an Ihnen, zu entscheiden. In den folgenden Abschnitten hoffen wir, Ihnen mehr Beweise zu liefern, um sich eine Meinung darüber zu bilden.

## Ein Svelte TypeScript-Projekt von Grund auf neu erstellen

Sie können ein neues Svelte TypeScript-Projekt mit dem [Standard-Template](https://github.com/sveltejs/template) starten. Alles, was Sie tun müssen, ist die folgenden Terminalbefehle auszuführen (führen Sie sie an einem Ort aus, an dem Sie Ihre Svelte-Testprojekte speichern – es wird ein neues Verzeichnis erstellt):

```bash
npx degit sveltejs/template svelte-typescript-app

cd svelte-typescript-app

node scripts/setupTypeScript.js
```

Dies erstellt ein Starter-Projekt, das TypeScript-Unterstützung enthält, die Sie dann nach Belieben anpassen können.

Dann müssen Sie npm anweisen, Abhängigkeiten herunterzuladen und das Projekt im Entwicklungsmodus zu starten, wie wir es normalerweise tun:

```bash
npm install

npm run dev
```

## TypeScript-Unterstützung zu einem bestehenden Svelte-Projekt hinzufügen

Um einem bestehenden Svelte-Projekt TypeScript-Unterstützung hinzuzufügen, können Sie [diesen Anweisungen folgen](https://svelte.dev/blog/svelte-and-typescript#Adding_TypeScript_to_an_existing_project). Alternativ können Sie die Datei [`setupTypeScript.js`](https://github.com/sveltejs/template/blob/master/scripts/setupTypeScript.js) in einen Ordner `scripts` im Stammverzeichnis Ihres Projekts herunterladen und dann `node scripts/setupTypeScript.js` ausführen.

Sie können sogar `degit` verwenden, um das Skript herunterzuladen. Das werden wir tun, um zu beginnen, unsere Anwendung auf TypeScript zu portieren.

> [!NOTE]
> Denken Sie daran, dass Sie `npx degit opensas/mdn-svelte-tutorial/07-typescript-support svelte-todo-typescript` ausführen können, um die vollständige To-Do-Liste-Anwendung in JavaScript zu erhalten, bevor Sie beginnen, sie auf TypeScript zu portieren.

Gehen Sie zum Stammverzeichnis des Projekts und geben Sie diese Befehle ein:

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

Diese Anweisungen gelten für jedes Svelte-Projekt, das Sie in TypeScript konvertieren möchten. Beachten Sie jedoch, dass die Svelte-Community ständig an der Verbesserung der Svelte TypeScript-Unterstützung arbeitet, sodass Sie `npm update` regelmäßig ausführen sollten, um die neuesten Änderungen zu nutzen.

> [!NOTE]
> Wenn Sie Probleme mit TypeScript innerhalb einer Svelte-Anwendung haben, werfen Sie einen Blick auf diesen Abschnitt zu [Fehlerbehebung/FAQ zur TypeScript-Unterstützung](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#troubleshooting--faq).

Wie bereits erwähnt, ist TypeScript ein Superset von JavaScript, sodass Ihre Anwendung ohne Änderungen läuft. Derzeit betreiben Sie eine reguläre JavaScript-Anwendung mit aktivierter TypeScript-Unterstützung, ohne eines der von TypeScript bereitgestellten Features zu nutzen. Sie können jetzt damit beginnen, schrittweise Typen hinzuzufügen.

Sobald Sie TypeScript konfiguriert haben, können Sie es von einer Svelte-Komponente aus verwenden, indem Sie einfach ein `<script lang='ts'>` am Anfang des Skriptabschnitts hinzufügen. Um es aus regulären JavaScript-Dateien zu verwenden, ändern Sie einfach die Dateierweiterung von `.js` zu `.ts`. Sie müssen auch alle entsprechenden Import-Anweisungen aktualisieren, um die `.ts`-Dateierweiterung aus allen `import`-Anweisungen zu entfernen.

> [!NOTE]
> TypeScript wird einen Fehler ausgeben, wenn Sie die `.ts`-Dateierweiterung in einer `import`-Anweisung verwenden. Wenn Sie also eine Datei `./foo.ts` haben, müssen Sie sie als "./foo" importieren.
> Lesen Sie den Abschnitt [Modulauflösung für Bundler, TypeScript-Runtimes und Node.js-Loader](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-for-bundlers-typescript-runtimes-and-nodejs-loaders) im TypeScript-Handbuch für weitere Informationen.

> [!NOTE]
> Die Verwendung von TypeScript in den Markup-Abschnitten von Komponenten ist [noch nicht unterstützt](https://github.com/sveltejs/svelte/issues/4701). Sie müssen JavaScript aus dem Markup verwenden und TypeScript im `<script lang='ts'>` Abschnitt.

## Verbesserte Entwicklererfahrung mit TypeScript

TypeScript bietet Code-Editoren und IDEs viele Informationen, damit sie eine benutzerfreundlichere Entwicklungsumgebung bereitstellen können.

Wir werden [Visual Studio Code](https://code.visualstudio.com/) verwenden, um einen schnellen Test durchzuführen und zu sehen, wie wir während des Schreibens von Komponenten Autovervollständigung und Typprüfung erhalten können.

> [!NOTE]
> Wenn Sie VS Code nicht verwenden möchten, bieten wir später im Artikel Anweisungen zur Verwendung der TypeScript-Fehlerprüfung über das Terminal an.

Derzeit wird in mehreren Code-Editoren an der Unterstützung von TypeScript in Svelte-Projekten gearbeitet. Die vollständigste Unterstützung ist bisher im [Svelte für VS Code Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) verfügbar, die vom Svelte-Team entwickelt und gepflegt wird. Diese Erweiterung bietet Typprüfung, Inspektion, Refactoring, Intellisense, Schwebetexte, Autovervollständigung und andere Funktionen. Diese Art von Entwicklerunterstützung ist ein weiterer guter Grund, um TypeScript in Ihren Projekten zu verwenden.

> [!NOTE]
> Stellen Sie sicher, dass Sie [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) und NICHT das alte "Svelte" von James Birtles verwenden, das eingestellt wurde. Falls Sie es installiert haben, sollten Sie es deinstallieren und stattdessen die offizielle Svelte-Erweiterung installieren.

Angenommen, Sie befinden sich in der VS Code-Anwendung, geben Sie `code .` (der Punkt am Ende weist VS Code an, den aktuellen Ordner zu öffnen) vom Stammordner Ihres Projekts ein, um den Code-Editor zu öffnen. VS Code informiert Sie darüber, dass es empfohlene Erweiterungen zum Installieren gibt.

![Dialogfeld, das besagt, dass dieser Arbeitsbereich Erweiterungsempfehlungen hat, mit Optionen zum Installieren oder Anzeigen einer Liste](01-vscode-extension-recommendations.png)

Ein Klick auf _Alle installieren_ installiert Svelte für VS Code.

![Svelte für VS Code Erweiterungsinformationen](02-svelte-for-vscode.png)

Wir können auch sehen, dass die Datei `setupTypeScript.js` einige Änderungen an unserem Projekt vorgenommen hat. Die Datei `main.js` wurde in `main.ts` umbenannt, wodurch VS Code Schwebetexte für unsere Svelte-Komponenten bereitstellen kann:

![VS Code-Screenshot zeigt, dass beim Schweben über einer Komponente Hinweise angezeigt werden](03-vscode-hints-in-main-ts.png)

Wir erhalten auch kostenlos eine Typprüfung. Wenn wir eine unbekannte Eigenschaft im Optionsparameter des `App`-Konstruktors übergeben (zum Beispiel ein Tippfehler wie `traget` anstelle von `target`), wird TypeScript reklamieren:

![Typprüfung in VS Code - App-Objekt wurde eine unbekannte Eigenschaft traget gegeben](04-vscode-type-checking-in-main-ts.png)

In der `App.svelte`-Komponente hat das `setupTypeScript.js`-Skript das Attribut `lang="ts"` zum `<script>`-Tag hinzugefügt. Dank der Typinferenz müssen wir in vielen Fällen nicht einmal Typen angeben, um Codeunterstützung zu erhalten. Zum Beispiel wird TypeScript, wenn Sie beginnen, eine `ms`-Eigenschaft zum `Alert`-Komponentenaufruf hinzuzufügen, basierend auf dem Standardwert ableiten, dass die `ms`-Eigenschaft eine Zahl sein sollte:

![VS Code Typinferenz und Codeunterstützung - ms-Variable sollte eine Zahl sein](05-vscode-type-inference-and-code-assistance.png)

Und wenn Sie etwas übergeben, das keine Zahl ist, wird es natürlich reklamieren:

![Typprüfung in VS Code - der ms-Variable wurde ein nicht-numerischer Wert zugewiesen](06-vscode-type-checking-in-components.png)

Das Anwendungstemplate hat ein `check`-Skript konfiguriert, das `svelte-check` gegen Ihren Code ausführt. Dieses Paket ermöglicht es Ihnen, Fehler und Warnungen zu erkennen, die normalerweise von einem Code-Editor angezeigt werden, über die Befehlszeile, was es ziemlich nützlich für den Einsatz in einer Continuous Integration (CI) Pipeline macht. Führen Sie einfach `npm run check` aus, um ungenutztes CSS zu überprüfen, und A11y-Hinweise und TypeScript-Kompilierungsfehler zurückzugeben.

In diesem Fall, wenn Sie `npm run check` ausführen (entweder im VS Code-Konsolenfenster oder im Terminal), erhalten Sie den folgenden Fehler:

![Check-Befehl innerhalb von VS Code ausgeführt, zeigt Typfehler, ms-Variable sollte eine Zahl sein](07-vscode-svelte-check.png)

Noch besser ist, dass, wenn Sie es aus dem integrierten Terminal von VS Code ausführen (Sie können es mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>\`</kbd> öffnen), das <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>-Klicken auf den Dateinamen Sie zur Zeile mit dem Fehler bringt.

Sie können das `check`-Skript auch im Überwachungsmodus mit `npm run check -- --watch` ausführen. In diesem Fall wird das Skript immer dann ausgeführt, wenn Sie eine Datei ändern. Wenn Sie dies in Ihrem regulären Terminal ausführen, lassen Sie es in einem Hintergrundfenster laufen, damit es weiter Berichte über Fehler gibt, aber nicht die Nutzung des Terminals beeinträchtigt.

## Erstellen eines benutzerdefinierten Typs

TypeScript unterstützt strukturelle Typisierung. Strukturelle Typisierung ist eine Möglichkeit, Typen allein auf Grundlage ihrer Mitglieder in Beziehung zu setzen, selbst wenn Sie den Typ nicht explizit definieren.

Wir definieren einen Typ `TodoType`, um zu sehen, wie TypeScript sicherstellt, dass alles, was an eine Komponente übergeben wird, die einen `TodoType` erwartet, strukturell mit ihm kompatibel ist.

1. Erstellen Sie im `src`-Ordner einen Ordner `types`.
2. Fügen Sie eine Datei `todo.type.ts` darin ein.
3. Geben Sie `todo.type.ts` den folgenden Inhalt:

   ```ts
   export type TodoType = {
     id: number;
     name: string;
     completed: boolean;
   };
   ```

   > [!NOTE]
   > Das Svelte-Template verwendet [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) 4.0.0, um TypeScript zu unterstützen. Ab dieser Version müssen Sie `export`/`import`-Typ-Syntax verwenden, um Typen und Schnittstellen zu importieren. Überprüfen Sie diesen Abschnitt des [Fehlerbehebungsleitfadens](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-import-interfaces-into-my-svelte-components-i-get-errors-after-transpilation) für weitere Informationen.

4. Nun verwenden wir `TodoType` aus unserer `Todo.svelte`-Komponente. Fügen Sie zunächst `lang="ts"` dem `<script>`-Tag hinzu.
5. Importieren wir den Typ und verwenden ihn, um die `todo`-Eigenschaft zu deklarieren. Ersetzen Sie die Zeile `export let todo` durch folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

   Beachten Sie, dass die `.ts`-Dateierweiterung in der Import-Anweisung nicht erlaubt ist und weggelassen wurde.

6. Nun werden wir die `Todo`-Komponente aus der `Todos.svelte`-Komponente mit einem literalen Objekt als Parameter vor dem Aufruf der `MoreActions`-Komponente instanziieren, so:

   ```svelte
   <hr />

   <Todo todo={ { name: 'a new task with no id!', completed: false } } />

   <!-- MoreActions -->
   <MoreActions {todos}
   ```

7. Fügen Sie das `lang='ts'` dem `<script>`-Tag der `Todos.svelte`-Komponente hinzu, damit es die von uns angegebene Typprüfung verwenden kann.

   Wir erhalten die folgende Fehlermeldung:

   ![Typfehler in VS Code, ToDo-Typ-Objekt erfordert eine id-Eigenschaft.](08-vscode-structural-typing.png)

Bis jetzt sollten Sie eine Vorstellung davon bekommen, welche Art von Unterstützung wir von TypeScript erhalten können, wenn wir Svelte-Projekte entwickeln.

Nun werden wir diese Änderungen rückgängig machen, um damit zu beginnen, unsere Anwendung auf TypeScript zu portieren, damit wir nicht alle Prüfungswarnungen erhalten.

1. Entfernen Sie das fehlerhafte To-Do und das Attribut `lang='ts'` aus der `Todos.svelte`-Datei.
2. Entfernen Sie auch den Import von `TodoType` und das `lang='ts'` aus `Todo.svelte`.

Wir kümmern uns später ordnungsgemäß darum.

## Portieren unserer To-Do-Liste App zu TypeScript

Jetzt sind wir bereit, damit zu beginnen, unsere To-Do-Liste-App zu TypeScript zu portieren, um alle Funktionen zu nutzen, die TypeScript uns bietet.

Beginnen wir damit, das Check-Skript im Überwachungsmodus im Stammverzeichnis des Projekts auszuführen:

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

Beachten Sie, dass bei der Verwendung eines unterstützenden Code-Editors wie VS Code eine einfache Möglichkeit, mit dem Portieren einer Svelte-Komponente zu beginnen, das Hinzufügen von `<script lang='ts'>` oben in Ihrer Komponente und das Suchen nach den dreifach punktierten Hinweisen ist:

![VS Code-Screenshot zeigt, dass Sie beim Hinzufügen von type=ts zu einer Komponente dreifach punktierte Hinweisalarme erhalten](09-vscode-alert-hints.png)

### Alert.svelte

Beginnen wir mit unserer `Alert.svelte`-Komponente.

1. Fügen Sie `lang="ts"` in das `<script>`-Tag Ihrer `Alert.svelte`-Komponente ein. Sie sehen einige Warnungen in der Ausgabe des Check-Skripts:

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

Nun machen wir dasselbe für die `MoreActions.svelte`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut, wie vorher, hinzu. TypeScript wird uns über die `todos`-Eigenschaft und die `t`-Variable im Aufruf von `todos.filter((t) =>...)` warnen.

   ```plain
   Warn: Variable 'todos' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     export let todos

   Warn: Parameter 't' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     $: completedTodos = todos.filter((t) => t.completed).length
   ```

2. Wir werden den bereits definierten `TodoType` verwenden, um TypeScript mitzuteilen, dass `todos` ein `TodoType`-Array ist. Ersetzen Sie die Zeile `export let todos` mit folgendem:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

Beachten Sie, dass TypeScript jetzt ableiten kann, dass die Variable `t` in `todos.filter((t) => t.completed)` vom Typ `TodoType` ist. Nichtsdestotrotz, wenn wir denken, dass es unseren Code leichter lesbar macht, könnten wir ihn so angeben:

```ts
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Meistens kann TypeScript den reaktiven Variablentyp korrekt ableiten, aber manchmal erhalten Sie möglicherweise einen "implizit hat Typ 'any'"-Fehler, wenn Sie mit reaktiven Zuordnungen arbeiten. In diesen Fällen können Sie die typisierte Variable in einer anderen Anweisung deklarieren, so:

```ts
let completedTodos: number;
$: completedTodos = todos.filter((t: TodoType) => t.completed).length;
```

Sie können den Typ in der reaktiven Zuordnung selbst nicht angeben. Die Anweisung `$: completedTodos: number = todos.filter[...]` ist ungültig. Für weitere Informationen lesen Sie [Wie typisiere ich reaktive Zuordnungen? / Ich erhalte einen "implizit hat Typ 'any'"-Fehler](https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#how-do-i-type-reactive-assignments--i-get-an-implicitly-has-type-any-error).

### FilterButton.svelte

Nun kümmern wir uns um die `FilterButton`-Komponente.

1. Fügen Sie das `lang='ts'`-Attribut wie gewohnt zum `<script>`-Tag hinzu. Sie werden feststellen, dass es keine Warnungen gibt — TypeScript leitet den Typ der Filtervariablen aus dem Standardwert ab. Aber wir wissen, dass es für den Filter nur drei gültige Werte gibt: all, active und completed. Wir können TypeScript über diese informieren, indem wir ein Enum `Filter` erstellen.
2. Erstellen Sie eine Datei `filter.enum.ts` im `types`-Ordner.
3. Geben Sie ihr den folgenden Inhalt:

   ```ts
   export enum Filter {
     ALL = "all",
     ACTIVE = "active",
     COMPLETED = "completed",
   }
   ```

4. Nun werden wir dies von der `FilterButton`-Komponente aus verwenden. Ersetzen Sie den Inhalt der `FilterButton.svelte`-Datei durch das Folgende:

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

Hier importieren wir einfach das `Filter`-Enum und verwenden es anstelle der zuvor verwendeten Zeichenkettenwerte.

### Todos.svelte

Wir werden das `Filter`-Enum auch in der `Todos.svelte`-Komponente verwenden.

1. Fügen Sie zuerst wie zuvor das `lang='ts'`-Attribut hinzu.
2. Importieren Sie das `Filter`-Enum. Fügen Sie die folgende `import`-Anweisung unter Ihren vorhandenen hinzu:

   ```js
   import { Filter } from "../types/filter.enum";
   ```

3. Nun verwenden wir es überall dort, wo wir auf den aktuellen Filter hinweisen. Ersetzen Sie Ihre beiden filterbezogenen Blöcke durch das Folgende:

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

   Beginnen Sie, indem Sie den `TodoType` importieren und TypeScript mitteilen, dass unsere `todos`-Variable ein Array von `TodoType` ist. Ersetzen Sie `export let todos = []` durch die folgenden zwei Zeilen:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[] = [];
   ```

5. Als Nächstes geben wir alle fehlenden Typen an. Die Variable `todosStatus`, die wir verwendet haben, um programmgesteuert auf die von der `TodosStatus`-Komponente bereitgestellten Methoden zuzugreifen, ist vom Typ `TodosStatus`. Und jedes `todo` ist vom Typ `TodoType`.

   Aktualisieren Sie Ihren `<script>`-Abschnitt damit:

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

Wir stoßen auf die folgenden Fehler in Bezug auf die Übergabe von `todos` an die `TodosStatus.svelte`- (und `Todo.svelte`-)Komponenten:

```plain
./src/components/Todos.svelte:70:39
Error: Type 'TodoType[]' is not assignable to type 'undefined'. (ts)
  <TodosStatus bind:this={todosStatus} {todos} />

./src/components/Todos.svelte:76:12
Error: Type 'TodoType' is not assignable to type 'undefined'. (ts)
     <Todo {todo}
```

Der Grund dafür ist, dass die `todos`-Eigenschaft in der `TodosStatus`-Komponente keinen Standardwert hat. TypeScript hat daher abgeleitet, dass sie vom Typ `undefined` ist, was nicht mit einem Array vom Typ `TodoType` kompatibel ist. Dasselbe passiert mit unserer `Todo`-Komponente.

Lassen Sie uns das beheben.

1. Öffnen Sie die Datei `TodosStatus.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Importieren Sie dann den `TodoType` und deklarieren Sie die `todos`-Eigenschaft als ein Array von `TodoType`. Ersetzen Sie die erste Zeile des `<script>`-Abschnitts mit dem folgenden:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todos: TodoType[];
   ```

3. Wir geben außerdem `headingEl`, das wir zum Binden an das `heading`-Tag verwendet haben, als `HTMLElement` an. Aktualisieren Sie die Zeile `let headingEl` mit dem Folgenden:

   ```ts
   let headingEl: HTMLElement;
   ```

4. Schließlich werden Sie den folgenden Fehler in Bezug auf die Stelle, an der wir das `tabindex`-Attribut setzen, feststellen. Das liegt daran, dass TypeScript das `<h2>`-Element überprüft und erwartet, dass `tabindex` vom Typ `number` ist.

   ![Hinweis auf tabindex in VS Code, tabindex erwartet einen Typ von number, nicht string](10-vscode-tabindex-hint.png)

   Um das zu beheben, ersetzen Sie `tabindex="-1"` durch `tabindex={-1}`, wie folgt:

   ```svelte
   <h2 id="list-heading" bind:this={headingEl} tabindex={-1}>
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Auf diese Weise kann TypeScript verhindern, dass wir ihm fälschlicherweise eine Zeichenkettenvariable zuweisen.

### NewTodo.svelte

Als Nächstes kümmern wir uns um `NewTodo.svelte`.

1. Wie gewohnt, fügen Sie das `lang='ts'`-Attribut hinzu.
2. Die Warnung wird anzeigen, dass wir einen Typ für die Variable `nameEl` angeben müssen. Setzen Sie ihren Typ auf `HTMLElement`, indem Sie Folgendes angeben:

   ```ts
   let nameEl: HTMLElement; // reference to the name input DOM node
   ```

3. Zuletzt in dieser Datei müssen wir den richtigen Typ für unsere `autofocus`-Variable angeben. Aktualisieren Sie ihre Definition wie folgt:

   ```ts
   export let autofocus: boolean = false;
   ```

### Todo.svelte

Jetzt sind die einzigen Warnungen, die `npm run check` ausgibt, die beim Aufruf der `Todo.svelte`-Komponente ausgelöst werden. Lassen Sie uns diese beheben.

1. Öffnen Sie die Datei `Todo.svelte` und fügen Sie das `lang='ts'`-Attribut hinzu.
2. Lassen Sie uns den `TodoType` importieren und den Typ der `todo`-Eigenschaft festlegen. Ersetzen Sie die Zeile `export let todo` durch Folgendes:

   ```ts
   import type { TodoType } from "../types/todo.type";

   export let todo: TodoType;
   ```

3. Die erste Warnung, die wir erhalten, ist, dass TypeScript uns auffordert, den Typ der Variablen `updatedTodo` in der `update()`-Funktion anzugeben. Dies kann etwas knifflig sein, da `updatedTodo` nur die Attribute des `todo` enthält, die aktualisiert wurden. Das bedeutet, dass es kein vollständiges `todo` ist – es hat nur einen Teil von `todo`-Eigenschaften.

   Für solche Fälle bietet TypeScript mehrere [Hilfstypen](https://www.typescriptlang.org/docs/handbook/utility-types.html), um es einfacher zu machen, diese häufigen Transformationen anzuwenden. Was wir gerade benötigen, ist das [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt)-Dienstprogramm, das es uns ermöglicht, alle Teilmengen eines gegebenen Typs darzustellen. Das Partial-Dienstprogramm gibt einen neuen Typ basierend auf dem Typ `T` zurück, wo jede Eigenschaft von `T` optional ist.

   Wir verwenden es in der `update()`-Funktion – aktualisieren Sie Ihre, so:

   ```ts
   function update(updatedTodo: Partial<TodoType>) {
     todo = { ...todo, ...updatedTodo }; // applies modifications to todo
     dispatch("update", todo); // emit update event
   }
   ```

   Damit teilen wir TypeScript mit, dass die Variable `updatedTodo` eine Teilmenge der `TodoType`-Eigenschaften enthalten wird.

4. Nun teilt uns svelte-check mit, dass wir den Typ der Parameter unserer Aktionsfunktion definieren müssen:

   ```bash
   ./07-next-steps/src/components/Todo.svelte:45:24
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusOnInit = (node) => node && typeof node.focus === 'function' && node.focus()

   ./07-next-steps/src/components/Todo.svelte:47:28
   Warn: Parameter 'node' implicitly has an 'any' type, but a better type may be inferred from usage. (ts)
     const focusEditButton = (node) => editButtonPressed && node.focus()
   ```

   Wir müssen einfach die `node`-Variable vom Typ `HTMLElement` definieren. Ersetzen Sie in den beiden oben genannten Zeilen die erste Instanz von `node` mit `node: HTMLElement`.

### actions.js

Als nächstes kümmern wir uns um die `actions.js`-Datei.

1. Benennen Sie sie in `actions.ts` um und geben Sie den Typ des Node-Parameters an. Es sollte so aussehen:

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

2. Aktualisieren Sie dann `Todo.svelte` und `NewTodo.svelte`, wo wir die actions-Datei importieren. Denken Sie daran, dass Importe in TypeScript keine Dateierweiterung enthalten. In jedem Fall sollte es so aussehen:

   ```js
   import { selectOnFocus } from "../actions";
   ```

### Migration der Stores zu TypeScript

Nun müssen wir die Dateien `stores.js` und `localStore.js` zu TypeScript migrieren.

Tipp: Das Skript `npm run check`, das das [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)-Tool verwendet, überprüft nur die `.svelte`-Dateien Ihrer Anwendung. Wenn Sie auch die `.ts`-Dateien überprüfen möchten, können Sie `npm run check && npx tsc --noemit` ausführen, was dem TypeScript-Compiler mitteilt, nach Fehlern zu suchen, ohne die `.js`-Ausgabedateien zu generieren. Sie könnten sogar ein Skript zu Ihrer `package.json`-Datei hinzufügen, das diesen Befehl ausführt.

Beginnen wir mit `stores.js`.

1. Benennen Sie die Datei in `stores.ts` um.
2. Setzen Sie den Typ unseres `initialTodos`-Arrays auf `TodoType[]`. So wird der Inhalt enden:

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

Jetzt zu `localStore.js`.

Aktualisieren Sie die `import`-Anweisung in `stores.ts` so:

```js
import { localStore } from "./localStore";
```

1. Beginnen Sie, indem Sie die Datei in `localStore.ts` umbenennen.
2. TypeScript fordert uns auf, den Typ der Variablen `key`, `initial` und `value` anzugeben. Der erste ist einfach: Der Schlüssel unseres lokalen Webspeichers sollte eine Zeichenkette sein.

   Aber `initial` und `value` sollten jedes Objekt sein, das mit der Methode [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in eine gültige JSON-Zeichenfolge konvertiert werden kann, was jedes JavaScript-Objekt mit ein paar Einschränkungen bedeutet: beispielsweise sind `undefined`, Funktionen und Symbole keine gültigen JSON-Werte.

   Daher erstellen wir den Typ `JsonValue`, um diese Bedingungen anzugeben.

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

   Der `|`-Operator erlaubt es uns, Variablen zu deklarieren, die Werte von zwei oder mehr Typen speichern können. Ein `JsonValue` könnte eine Zeichenkette, eine Zahl, ein Boolean und so weiter sein. In diesem Fall verwenden wir auch rekursive Typen, um anzugeben, dass ein `JsonValue` ein Array von `JsonValue` haben kann und auch ein Objekt mit Eigenschaften von `JsonValue`.

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

Wenn wir nun versuchen, einen `localStore` mit etwas zu erstellen, das nicht mit `JSON.stringify()` in JSON konvertiert werden kann, zum Beispiel ein Objekt mit einer Funktion als Eigenschaft, wird VS Code/`validate` darauf hinweisen:

![VS Code zeigt einen Fehler bei der Verwendung unseres Stores – es schlägt fehl, wenn versucht wird, einen lokalen Speicherschlüssel mit etwas, das nicht mit JSON stringifizieren kann, zu setzen](11-vscode-invalid-store.png)

Und das Beste daran ist, dass es sogar mit der [automatischen Subscription-Syntax `$store`](https://svelte.dev/docs/svelte-components#script-4-prefix-stores-with-$-to-access-their-values) funktioniert. Wenn wir versuchen, einen ungültigen Wert in unserem `todos`-Store mithilfe der `$store`-Syntax zu speichern, so:

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

Dies ist ein weiteres Beispiel dafür, wie die Angabe von Typen unseren Code robuster machen kann und uns hilft, mehr Fehler zu erkennen, bevor sie in die Produktion gelangen.

Und das war's. Wir haben unsere gesamte Anwendung konvertiert, um TypeScript zu verwenden.

## Unsere Stores mit Generika bulletproofen

Unsere Stores wurden bereits nach TypeScript portiert, aber wir können es noch besser machen. Wir sollten keinen beliebige Wert speichern müssen – wir wissen, dass der Alarmstore nur Zeichenfolgenmeldungen enthalten sollte, und der To-Do-Store sollte ein Array von `TodoType` enthalten, usw. Wir können TypeScript verwenden, um dies zu erzwingen, indem wir [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) verwenden. Lassen Sie uns mehr darüber erfahren.

### Verständnis von TypeScript-Generika

Generika erlauben es Ihnen, wiederverwendbare Codekomponenten zu erstellen, die mit einer Vielzahl von Typen arbeiten, anstatt mit einem einzigen Typ. Sie können auf Schnittstellen, Klassen und Funktionen angewendet werden. Generische Typen werden als Parameter mit einer speziellen Syntax übergeben: Sie werden innerhalb von spitzen Klammern angegeben und konventionell mit einem einzelnen Großbuchstaben bezeichnet. Generische Typen ermöglichen es Ihnen, die vom Benutzer bereitgestellten Typen zu erfassen und sicherzustellen, dass sie für die zukünftige Verarbeitung verfügbar sind.

Schauen wir uns ein einfaches Beispiel an, eine einfache `Stack`-Klasse, die es uns ermöglicht, Elemente zu `push` und `pop`, so:

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

In diesem Fall ist `elements` ein Array vom Typ `any`, und dementsprechend empfangen und liefern die `push()`- und `pop()`-Methoden eine Variable vom Typ `any`. Es ist also völlig gültig, etwas wie das folgende zu tun:

```js
const anyStack = new Stack();

anyStack.push(1);
anyStack.push("hello");
```

Aber was, wenn wir einen `Stack` haben wollten, der nur mit dem Typ `string` funktioniert? Wir könnten das Folgende tun:

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

Das würde funktionieren. Aber wenn wir mit Zahlen arbeiten wollten, müssten wir dann unseren Code duplizieren und eine `NumberStack`-Klasse erstellen. Und wie könnten wir mit einem Stack von Typen umgehen, die wir noch nicht kennen und die vom Verbraucher definiert werden sollten?

Um all diese Probleme zu lösen, können wir Generika verwenden.

Dies ist unsere `Stack`-Klasse, die mit Generika neu implementiert ist:

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

Wir definieren einen generischen Typ `T` und verwenden ihn dann so, wie wir normalerweise einen bestimmten Typ verwenden würden. Jetzt ist `elements` ein Array vom Typ `T`, und `push()` und `pop()` empfangen und liefern beide eine Variable vom Typ `T`.

So würden wir unseren generischen `Stack` verwenden:

```ts
const numberStack = new Stack<number>();
numberStack.push(1);
```

Jetzt weiß TypeScript, dass unser Stack nur Zahlen akzeptieren kann und wird einen Fehler ausgeben, wenn wir versuchen, etwas anderes zu pushen:

![Argument vom Typ hello ist nicht zuweisbar an Parameter vom Typ number](12-vscode-generic-stack-error.png)

TypeScript kann auch generische Typen aufgrund ihrer Verwendung ableiten. Generika unterstützen auch Standardwerte und Einschränkungen.

Generika sind ein leistungsfähiges Feature, das es unserem Code ermöglicht, sich von den spezifischen verwendeten Typen zu abstrahieren und ihn wiederverwendbarer und generischer zu machen, ohne auf Typensicherheit zu verzichten. Um mehr darüber zu erfahren, lesen Sie die [TypeScript Einführung zu Generics](https://www.typescriptlang.org/docs/handbook/generics.html).

### Svelte-Stores mit Generika verwenden

Svelte-Stores unterstützen Generika von Haus aus. Und dank der generischen Typinferenz können wir es nutzen, ohne unseren Code zu berühren.

Wenn Sie die Datei `Todos.svelte` öffnen und einen `number`-Typ in unserem `$alert`-Store zuweisen, erhalten Sie folgenden Fehler:

![Argument vom Typ 9999 ist nicht zuweisbar an Parameter vom Typ string](13-vscode-generic-alert-error.png)

Das liegt daran, dass, als wir unseren Alert-Store in der `stores.ts`-Datei definierten mit:

```js
export const alert = writable("Welcome to the To-Do list app!");
```

TypeScript ableitete, dass der generische Typ `string` war. Wenn wir dies explizit machen wollten, könnten wir Folgendes tun:

```ts
export const alert = writable<string>("Welcome to the To-Do list app!");
```

Nun werden wir unseren `localStore` so modifizieren, dass er Generics unterstützt. Erinnern Sie sich, dass wir den Typ `JsonValue` definiert haben, um die Verwendung unseres `localStore`-Stores mit Werten zu verhindern, die nicht mithilfe von `JSON.stringify()` gespeichert werden können. Jetzt möchten wir, dass die Verbraucher von `localStore` den zu speichernden Datentyp angeben können; aber anstatt mit jedem Typ zu arbeiten, sollten sie mit dem `JsonValue`-Typ übereinstimmen. Wir geben dies mit einer generischen Einschränkung an, so:

```ts
export const localStore = <T extends JsonValue>(key: string, initial: T)
```

Wir definieren einen generischen Typ `T` und geben an, dass er mit dem `JsonValue`-Typ kompatibel sein muss. Dann verwenden wir den Typ `T` entsprechend.

Unsere `localStore.ts`-Datei wird schließlich so aussehen – probieren Sie den neuen Code jetzt in Ihrer Version aus:

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

![ToDo-Typ-Objekteigenschaft complete sollte completed heißen](14-vscode-generic-localstore-error.png)

Noch einmal, wenn wir es explizit machen wollten, könnten wir es in der `stores.ts`-Datei so tun:

```ts
const initialTodos: TodoType[] = [
  { id: 1, name: "Visit MDN web docs", completed: true },
  { id: 2, name: "Complete the Svelte Tutorial", completed: false },
];

export const todos = localStore<TodoType[]>("mdn-svelte-todo", initialTodos);
```

Das wird für unseren kurzen Überblick über TypeScript Generics ausreichen.

## Der bisherige Code

### Git

Um den Stand des Codes zu sehen, wie er am Ende dieses Artikels sein sollte, greifen Sie auf Ihre Kopie unseres Repos wie folgt zu:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

### REPL

Wie wir bereits erwähnt haben, ist TypeScript im REPL noch nicht verfügbar.

## Zusammenfassung

In diesem Artikel haben wir unsere To-Do-Liste-Anwendung auf TypeScript portiert.

Zuerst haben wir über TypeScript und die Vorteile gelernt, die es uns bringen kann. Anschließend haben wir gesehen, wie man ein neues Svelte-Projekt mit TypeScript-Unterstützung erstellt. Wir haben auch gesehen, wie man ein bestehendes Svelte-Projekt konvertiert, sodass TypeScript verwendet wird – unsere To-Do-Liste-App.

Wir haben gesehen, wie man mit [Visual Studio Code](https://code.visualstudio.com/) und der [Svelte-Erweiterung](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) arbeitet, um Funktionen wie Typprüfung und Autovervollständigung zu erhalten. Wir haben auch das `svelte-check`-Tool verwendet, um TypeScript-Probleme über die Befehlszeile zu überprüfen.

Im nächsten Artikel werden wir lernen, wie wir unsere App für die Produktion kompilieren und bereitstellen. Wir werden auch sehen, welche Ressourcen online verfügbar sind, um weiter mit Svelte zu lernen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
