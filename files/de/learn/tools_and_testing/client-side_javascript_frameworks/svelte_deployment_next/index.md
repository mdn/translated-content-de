---
title: Bereitstellung und nächste Schritte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im vorherigen Artikel haben wir die TypeScript-Unterstützung von Svelte kennengelernt und wie Sie sie nutzen können, um Ihre Anwendung robuster zu gestalten. In diesem abschließenden Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online verfügbar machen können, und wir werden einige Ressourcen teilen, die Sie nutzen sollten, um Ihre Svelte-Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie zumindest mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandzeile</a
          > besitzen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node.js + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Ihre Svelte-App für die Produktion vorbereiten und welche Lernressourcen Sie als Nächstes besuchen sollten.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repository (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Zustand der App zu gelangen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Unsere App kompilieren

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist dieser Befehl Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js` Datei zu kompilieren und alle CSS-Bereiche unserer Komponenten in `public/build/bundle.css`. Es startet auch einen Entwicklungsserver und überwacht Änderungen, indem die App neu kompiliert und die Seite aktualisiert wird, wenn Änderungen auftreten.

Ihre generierten `bundle.js` und `bundle.css` Dateien sehen in etwa so aus (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder weitere Änderungen überwachen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minimieren und komprimieren.

Nach dem Ausführen von `npm run build` werden unsere erstellten `bundle.js` und `bundle.css` Dateien mehr in etwa so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, aber diese können Sie vorerst ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8,3 KB, wenn sie gezippt ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, analysiert, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code zu Vanilla JavaScript kompiliert.

## Ein Blick hinter den Kompilierungsprozess von Svelte

Standardmäßig, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, verwendet Svelte [rollup](https://rollupjs.org/) als Modul-Bundler.

> [!NOTE]
> Es gibt auch ein offizielles Template für die Verwendung von [webpack](https://webpack.js.org/) und auch viele [von der Community gepflegte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bundler.

In der Datei `package.json` können Sie sehen, dass die `build` und `dev` Skripte einfach Rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev` Skript übergeben wir das Argument `-w`, das Rollup anweist, Dateien zu überwachen und bei Änderungen neu zu bauen.

Wenn wir uns die `rollup.config.js` Datei ansehen, können wir sehen, dass der Svelte-Compiler nur ein Rollup-Plugin ist:

```js
import svelte from 'rollup-plugin-svelte';
// …
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write('public/build/bundle.css');
      }
    }),
```

Später in derselben Datei sehen Sie auch, wie Rollup unsere Skripte im Produktionsmodus minimiert und im Entwicklungsmodus einen lokalen Server startet:

```js
    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
```

Es gibt [viele Plugins für Rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das auch vom Svelte-Team gewartet wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien vorkompiliert, wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript.

## Ihre Svelte-Anwendung bereitstellen

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nichts weiter als eine Sammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der in der Lage ist, statische Dateien bereitzustellen, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellen mit Vercel

Einer der einfachsten Wege, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Seiten maßgeschneidert ist und sofortige Unterstützung für die gängigsten Front-End-Tools bietet, darunter auch Svelte.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und den Schritten in der an diese Adresse gesendeten E-Mail aus Sicherheitsgründen zu folgen.
3. Führen Sie `npx vercel` erneut aus, und Sie werden aufgefordert, einige Fragen zu beantworten, wie diese:

   ```bash
   npx vercel
   ```

   ```plain
   Vercel CLI 19.1.2
   ? Set up and deploy "./mdn-svelte-tutorial"? [Y/n] y
   ? Which scope do you want to deploy to? opensas
   ? Link to existing project? [y/N] n
   ? What's your project's name? mdn-svelte-tutorial
   ? In which directory is your code located? ./
   Auto-detected Project Settings (Svelte):
   - Build Command: `npm run build` or `rollup -c`
   - Output Directory: public
   - Development Command: sirv public --single --dev --port $PORT
   ? Want to override the settings? [y/N] n
      Linked to opensas/mdn-svelte-tutorial (created .vercel)
      Inspect: https://vercel.com/opensas/mdn-svelte-tutorial/[...] [1s]
   ✅  Production: https://mdn-svelte-tutorial.vercel.app [copied to clipboard] [19s]
      Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
      To change the domain or build command, go to https://zeit.co/opensas/mdn-svelte-tutorial/settings
   ```

4. Akzeptieren Sie alle Standardeinstellungen, und Sie sind auf dem richtigen Weg.
5. Sobald die Bereitstellung beendet ist, gehen Sie zur "Production"-URL in Ihrem Browser, und Sie sehen die bereitgestellte App!

Sie können auch [ein Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [BitBucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, damit Sie es ohne `npx` verwenden können.

### Automatische Bereitstellung zu GitLab Pages

Für das Hosting von statischen Dateien gibt es mehrere Online-Dienste, die es ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen in ein Git-Repository pushen. Die meisten davon beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um das Bauen und Bereitstellen Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere To-Do-App auf [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich bei [GitLab registrieren](https://gitlab.com/users/sign_up) und dann ein [neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie erhalten eine Remote-URL, die auf Ihr neues GitLab-Git-Repository zeigt, wie `git@gitlab.com:[Ihr-Benutzer]/[Ihr-Projekt].git`.
2. Bevor Sie anfangen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien von der Versionskontrolle ausgeschlossen werden sollen. In unserem Fall werden wir Git mitteilen, Dateien im `node_modules`-Verzeichnis auszuschließen, indem wir eine `.gitignore`-Datei im Stammverzeichnis Ihres lokalen Projekts mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Gehen wir jetzt zurück zu GitLab. Nach dem Erstellen eines neuen Repos wird GitLab Ihnen mit einer Nachricht erklären, welche Optionen es gibt, um Ihre bestehenden Dateien hochzuladen. Folgen Sie den Schritten unter der Überschrift _Ein bestehendes Verzeichnis hochladen_:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten das [Git-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Sie davon befreit, Ihren Benutzernamen und Ihr Passwort jedes Mal einzugeben, wenn Sie auf Ihr Ursprungs-Repo zugreifen. Um es zu verwenden, müssen Sie ein [SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/ee/user/ssh.html#generate-an-ssh-key-pair). Ihre Ursprungs-URL wird in etwa so aussehen: `git@gitlab.com:[Ihr-Benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen unser Remote-Ursprung (wohin wir unseren Code pushen werden) als unser Repo bei GitLab. Nächstes committen wir alle Dateien zum lokalen Git-Repo und pushen diese dann auf den Remote-Ursprung bei GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Seite zu erstellen und sie auf dem GitLab Pages-Server zu veröffentlichen. Die Sequenz der Skripte, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird von einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezifischer Job namens `pages` in der Konfigurationsdatei macht GitLab bewusst, dass Sie eine GitLab Pages-Website bereitstellen.

Probieren wir dies jetzt aus.

1. Erstellen Sie eine Datei `.gitlab-ci.yml` im Stammverzeichnis Ihres Projekts und geben Sie ihr den folgenden Inhalt:

   ```yaml
   image: node:latest
   pages:
     stage: deploy
     script:
       - npm install
       - npm run build
     artifacts:
       paths:
         - public
     only:
       - main
   ```

   Hier sagen wir GitLab, dass es ein Image mit der neuesten Version von Node verwenden soll, um unsere App zu bauen. Als Nächstes deklarieren wir einen `pages` Job, um GitLab Pages zu aktivieren. Jedes Mal wenn es einen Push zu unserem Repo gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir sagen GitLab auch, den Inhalt des `public`-Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab so, dass unsere App nur dann erneut bereitgestellt wird, wenn ein Push zu unserem Hauptzweig erfolgt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://ihr-benutzer.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html`-Datei relativ machen. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) von den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, so wie dies:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Machen Sie dies jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen an GitLab committen und pushen. Tun Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Jedes Mal, wenn ein Job ausgeführt wird, zeigt GitLab ein Icon an, das den Prozess des Jobs anzeigt. Wenn man darauf klickt, kann man die Ausgabe des Jobs inspizieren.

![GitLab-Screenshot, der einen bereitgestellten Commit zeigt, der eine GitLab CI-Datei hinzufügt und Bundle-Pfade zu relativen Pfaden ändert](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs aus dem Menüpunkt _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![Ein GitLab CI-Job, der in der GitLab-Benutzeroberfläche angezeigt wird, mit vielen ausgeführten Befehlen](02-gitlab-pages-job.png)

Sobald GitLab das Bauen und Veröffentlichen Ihrer App abgeschlossen hat, wird sie unter `https://ihr-benutzer.gitlab.io/mdn-svelte-todo/` zugänglich sein; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der Benutzeroberfläche von GitLab überprüfen – siehe den Menüpunkt _Settings_ > _Pages_.

Mit dieser Konfiguration wird die Anwendung bei jedem Push an das GitLab-Repository automatisch neu gebaut und auf GitLab Pages bereitgestellt.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie sich ansehen sollten, um Ihr Svelte-Wissen zu erweitern.

### Svelte-Dokumentation

Um weiterzugehen und mehr über Svelte zu erfahren, sollten Sie unbedingt die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht getan haben, sollten Sie unbedingt das [interaktive Svelte-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits den Großteil seines Inhalts behandelt, daher wird es nicht viel Zeit in Anspruch nehmen, es zu vervollständigen – Sie sollten es als Übung betrachten!

Sie können auch die [Svelte-API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Motivationen hinter Svelte zu verstehen, sollten Sie sich die Präsentation [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) von [Rich Harris](https://x.com/Rich_Harris) auf YouTube ansehen. Er ist der Erschaffer von Svelte, also hat er ein paar Dinge darüber zu sagen. Sie haben auch die interaktiven Folien zur Verfügung, die, wenig überraschend, mit Svelte erstellt wurden. Wenn es Ihnen gefallen hat, werden Sie auch die Präsentation [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) genießen, die Rich Harris auf der [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte im Zusammenhang mit Svelte, die es wert sind, überprüft zu werden:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungs-Framework, das von Svelte betrieben wird und serverseitiges Rendering (SSR), Code-Splitting, dateibasierte Routen und Offline-Unterstützung und mehr bietet. Denken Sie daran wie an [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt definitiv ansehen.
- [Svelte Native](https://svelte-native.technology/): Ein mobiles Anwendungs-Framework, das von Svelte betrieben wird. Denken Sie daran wie an [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin für die Arbeit mit `.svelte`-Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript) behandelt haben.

### Weitere Lernressourcen

- Es gibt einen [vollständigen Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Web, also ist es schwer, eine Empfehlung auszusprechen.
- Dennoch ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist auch eine nützliche Referenz, um die Hauptkonzepte von Svelte zu lernen.
- Wenn Sie Bücher bevorzugen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, die [Sie online vorlesen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome).
- Wenn Sie tiefer eintauchen und das Innere des Svelte-Compilers verstehen möchten, sollten Sie sich [Tan Li Hau](https://x.com/lihautan)'s Blog-Einträge [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) ansehen.

### Interaktion mit der Community

Es gibt eine Reihe von Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Der Discord-Server von Svelte.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Der Twitter-Account der Svelte-Community.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-gestütztes Repository mit Rezepten, Tipps und bewährten Methoden zur Lösung häufiger Probleme.
- [Svelte-Fragen auf StackOverflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte`-Tag bei SO.
- [Svelte-Reddit-Community](https://www.reddit.com/r/sveltejs/): Diskussion und Inhaltsbewertung der Svelte-Community auf Reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von technischen Artikeln und Tutorials zu Svelte von der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von Null Wissen über Svelte bis hin zur Erstellung und Bereitstellung einer vollständigen Anwendung gegangen.

- Wir haben die Philosophie von Svelte und das, was es von anderen Front-End-Frameworks unterscheidet, kennengelernt.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten, Informationen unter ihnen zu teilen.
- Wir haben das Reaktivitätssystem von Svelte genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und die Fähigkeiten von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores benutzt, um mit einem zentralen Datenspeicher zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Web Storage zu speichern.
- Wir haben uns auch die Unterstützung von Svelte für TypeScript angesehen.

In diesem Artikel haben wir über ein paar unkomplizierte Optionen gelernt, um unsere App in der Produktion bereitzustellen, und gesehen, wie man eine einfache Pipeline einrichtet, um unsere App bei jedem Commit auf GitLab bereitzustellen. Dann haben wir Ihnen eine Liste mit Svelte-Ressourcen zur Verfügung gestellt, um Ihre Svelte-Kenntnisse weiter zu vertiefen.

Herzlichen Glückwunsch! Nach Abschluss dieser Reihe von Tutorials sollten Sie über eine solide Grundlage verfügen, um mit der Entwicklung professioneller Webanwendungen mit Svelte zu beginnen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
