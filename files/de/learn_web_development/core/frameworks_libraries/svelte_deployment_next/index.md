---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im vorherigen Artikel haben wir über Sveltes Unterstützung für TypeScript gelernt und wie Sie diese nutzen können, um Ihre Anwendung robuster zu gestalten. In diesem abschließenden Artikel betrachten wir, wie Sie Ihre Anwendung bereitstellen und online verfügbar machen können, und teilen auch einige Ressourcen, die Sie für Ihre weitere Svelte-Lernreise besuchen sollten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kern-
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie wir unsere Svelte-Anwendung für die Produktion vorbereiten, und welche Lernressourcen Sie als Nächstes besuchen sollten.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie die Inhalte des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Unsere App kompilieren

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir zuvor gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js`-Datei und alle CSS-Bereiche unserer Komponenten in `public/build/bundle.css` zu kompilieren. Es startet auch einen Entwicklungsserver und überwacht Änderungen, kompiliert die App neu und aktualisiert die Seite bei Änderungen.

Ihre generierten `bundle.js`- und `bundle.css`-Dateien sehen ungefähr so aus (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall startet Svelte keinen Webserver und überwacht keine Änderungen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minimieren und komprimieren.

Nachdem Sie `npm run build` ausgeführt haben, sehen unsere generierten `bundle.js`- und `bundle.css`-Dateien eher so aus:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, die Sie jedoch vorerst ignorieren können.

Unsere gesamte App ist jetzt nur 21 KB groß — 8,3 KB, wenn sie gezippt ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten zum Herunterladen, Parsen, Ausführen und Speicherhalten. Svelte hat unsere Komponenten analysiert und den Code in natives JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, verwendet Svelte [rollup](https://rollupjs.org/) als Modul-Bundler.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Nutzung von [webpack](https://webpack.js.org/) und viele [gemeinschaftlich gepflegte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bundler.

In der Datei `package.json` können Sie sehen, dass die `build`- und `dev`-Skripte einfach Rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev`-Skript übergeben wir das Argument `-w`, das Rollup anweist, Dateien zu beobachten und bei Änderungen neu zu erstellen.

Wenn wir uns die Datei `rollup.config.js` ansehen, können wir sehen, dass der Svelte-Compiler nur ein Rollup-Plugin ist:

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

Es gibt [viele Plugins für Rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das ebenfalls vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorverarbeitet.

## Deployment Ihrer Svelte-Anwendung

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nichts weiter als eine Ansammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie aus vielen Optionen wählen können. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Deployment mit Vercel

Einer der einfachsten Wege, eine Svelte-Anwendung bereitzustellen, ist die Nutzung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Seiten zugeschnitten ist und eine sofortige Unterstützung für die meisten gängigen Front-End-Tools bietet, einschließlich Svelte.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Erstellen Sie ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und den in dieser Adresse gesendeten Schritten aus Sicherheitsgründen zu folgen.
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

4. Akzeptieren Sie alle Standardeinstellungen, und es wird alles gut laufen.
5. Nachdem es fertig ist, setzen Sie die "Production"-URL in Ihren Browser, und Sie werden die bereitgestellte App sehen!

Sie können auch [ein Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) in Vercel von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, sodass Sie es nicht mit `npx` ausführen müssen.

### Automatisches Deployment bei GitLab Pages

Für das Hosten statischer Dateien gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Seite automatisch bereitzustellen, sobald Sie Änderungen in ein Git-Repository pushen. Die meisten von ihnen beinhalten das Einrichten einer Deployment-Pipeline, die bei jedem `git push` ausgelöst wird und sich um den Aufbau und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todos-App bei [GitLab Pages](https://docs.gitlab.com/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich [bei GitLab registrieren](https://gitlab.com/users/sign_up) und dann [ein neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie werden eine Remote-URL haben, die auf Ihr neues GitLab-Git-Repository zeigt, wie `git@gitlab.com:[ihr-benutzer]/[ihr-projekt].git`.
2. Bevor Sie mit dem Hochladen von Inhalten in Ihr Git-Repository beginnen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git zu sagen, welche Dateien von der Quellkontrolle ausgeschlossen werden sollen. In unserem Fall werden wir Git anweisen, Dateien im `node_modules`-Verzeichnis auszuschließen, indem wir eine `.gitignore`-Datei im Stammordner Ihres lokalen Projekts mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Gehen wir jetzt zurück zu GitLab. Nach dem Erstellen eines neuen Repos wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen zum Hochladen Ihrer vorhandenen Dateien erklärt. Folgen Sie den Schritten unter der Überschrift _Push an existing folder_ (Einen vorhandenen Ordner pushen):

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten [das `git`-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Sie davon befreit, Ihren Benutzernamen und Ihr Passwort jedes Mal einzugeben, wenn Sie Ihr Ursprung-Repo aufrufen. Um es zu verwenden, müssen Sie [ein SSH-Schlüssel-Paar erstellen](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair). Ihre Ursprungs-URL wird dann so aussehen: `git@gitlab.com:[ihr-benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, legen dann unseren Remote-Ursprung (wo wir unseren Code pushen werden) als unser Repo auf GitLab fest. Anschließend übergeben wir alle Dateien an das lokale Git-Repo und pushen diese dann zum Remote-Ursprung auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Seite aufzubauen und auf dem GitLab Pages-Server zu veröffentlichen. Die Abfolge von Skripten, die GitLab CI/CD ausführt, um diese Aufgabe zu erledigen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezieller Job namens `pages` in der Konfigurationsdatei wird GitLab darauf aufmerksam machen, dass Sie eine GitLab Pages-Website bereitstellen.

Lassen Sie uns dies jetzt ausprobieren.

1. Erstellen Sie eine `.gitlab-ci.yml`-Datei im Stammverzeichnis Ihres Projekts und geben Sie ihr den folgenden Inhalt:

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

   Hier sagen wir GitLab, dass es ein Image mit der neuesten Version von Node verwenden soll, um unsere App zu bauen. Als nächstes deklarieren wir einen `pages`-Job, um GitLab Pages zu aktivieren. Wann immer es einen Push in unser Repo gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir sagen GitLab auch, die Inhalte des `public`-Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab, unsere App nur dann erneut bereitzustellen, wenn es einen Push in unseren Hauptzweig gibt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://your-user.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html`-Datei relativ machen. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) aus den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, wie folgt:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Machen Sie das jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen an GitLab committen und pushen. Tun Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Wann immer ein Job läuft, zeigt GitLab ein Symbol an, das den Prozess des Jobs anzeigt. Ein Klick darauf ermöglicht es Ihnen, die Ausgabe des Jobs zu inspizieren.

![gitlab screenshot showing a deployed commit, which add a gitlab ci file, and changes bundle paths to relative](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs aus dem Menüpunkt _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![a gitlab ci job shown in the gitlab ui, running a lot of commands](02-gitlab-pages-job.png)

Sobald GitLab mit dem Aufbau und der Veröffentlichung Ihrer App fertig ist, wird sie unter `https://your-user.gitlab.io/mdn-svelte-todo/` zugänglich sein; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-Oberfläche überprüfen — siehe Menüoption _Settings_ > _Pages_.

Mit dieser Konfiguration wird Ihre Anwendung bei jedem Push in das GitLab-Repo automatisch neu gebaut und auf GitLab Pages bereitgestellt.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie besuchen sollten, um Ihr Svelte-Lernen weiter zu führen.

### Svelte-Dokumentation

Um weiter voranzukommen und mehr über Svelte zu lernen, sollten Sie definitiv die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die Sveltes Philosophie erklären. Falls Sie es noch nicht getan haben, stellen Sie sicher, dass Sie das [Svelte-Interaktive-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits die meisten Inhalte behandelt, sodass es nicht lange dauern wird, es abzuschließen — Sie sollten es als Übung betrachten!

Sie können auch die [Svelte API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Motivationen hinter Svelte zu verstehen, sollten Sie sich [Rich Harris](https://x.com/Rich_Harris)' Präsentation [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) auf YouTube ansehen. Er ist der Schöpfer von Svelte und hat einige Dinge darüber zu sagen. Sie haben auch die interaktiven Folien hier verfügbar, die, wenig überraschend, mit Svelte erstellt wurden. Wenn es Ihnen gefallen hat, werden Sie auch [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) Präsentation genießen, die Rich Harris auf [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte im Zusammenhang mit Svelte, die es wert sind, überprüft zu werden:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungsframework, das von Svelte angetrieben wird und Unterstützung für serverseitiges Rendering (SSR), Code-Splitting, dateibasierte Routenführung und Offline-Support bietet. Denken Sie daran als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine relativ komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt unbedingt ansehen.
- [Svelte Native](https://svelte-native.technology/): Ein Mobile-Anwendungsframework, das von Svelte angetrieben wird. Denken Sie daran wie [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin zum Arbeiten mit `.svelte`-Dateien, das wir uns in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) angesehen haben.

### Weitere Lernressourcen

- Es gibt einen [kompletten Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Internet, sodass es schwierig ist, eine Empfehlung auszusprechen.
- Dennoch ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist auch eine nützliche Referenz, um die Hauptkonzepte von Svelte zu lernen.
- Wenn Sie lieber Bücher lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das [Sie online kostenlos ansehen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome).
- Wenn Sie tiefer eintauchen und das Innenleben des Svelte-Compilers verstehen möchten, sollten Sie sich [Tan Li Hau](https://x.com/lihautan)'s [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) Blogposts ansehen.

### Interaktion mit der Community

Es gibt eine Reihe von Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Sveltes Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Der Twitter-Account der Community von Svelte.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-getriebene Repository von Rezepten, Tipps und Best Practices zur Lösung gängiger Probleme.
- [Svelte Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte`-Tag bei SO.
- [Svelte reddit-Community](https://www.reddit.com/r/sveltejs/): Diskussions- und Bewertungsseite der Svelte-Community auf Reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte zu einem kompletten Aufbau und Bereitstellung einer Anwendung übergegangen.

- Wir haben die Philosophie von Svelte kennengelernt und was es von anderen Front-End-Frameworks unterscheidet.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten hat, Informationen unter ihnen zu teilen.
- Wir haben das Reaktivitätssystem von Svelte genutzt und gelernt, wie man gängige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und um die Fähigkeiten von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Webspeicher zu speichern.
- Wir haben uns auch die Unterstützung von Svelte für TypeScript angesehen.

In diesem Artikel haben wir über ein paar unkomplizierte Optionen gelernt, um unsere App in der Produktion bereitzustellen und gesehen, wie man ein grundlegendes Pipeline einrichtet, um unsere App bei jedem Commit bei GitLab bereitzustellen. Dann haben wir Ihnen eine Liste mit Svelte-Ressourcen zur Verfügung gestellt, um Ihr Svelte-Lernen weiterzuführen.

Herzlichen Glückwunsch! Nach Abschluss dieser Serie von Tutorials sollten Sie eine solide Basis haben, auf der Sie professionelle Webanwendungen mit Svelte entwickeln können.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
