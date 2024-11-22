---
title: Bereitstellung und nächste Schritte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im vorherigen Artikel haben wir über Sveltes Unterstützung für TypeScript gelernt und wie man es nutzt, um Ihre Anwendung robuster zu machen. In diesem abschließenden Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online bringen können, und einige Ressourcen teilen, zu denen Sie fortfahren sollten, um Ihre Svelte-Lernreise fortzuführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/den Befehlszeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installierten Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie unsere Svelte-App für die Produktion vorbereiten und welche Lernressourcen Sie als Nächstes besuchen sollten.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repository (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen App-Status zu gelangen, führen Sie

```bash
cd mdn-svelte-tutorial/08-next-steps
```

oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Kompilierung unserer App

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist dieser Befehl Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js`-Datei zu kompilieren und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css`. Es wird auch ein Entwicklungsserver gestartet, der auf Änderungen achtet, die App neu kompiliert und die Seite aktualisiert, wenn eine Änderung erfolgt.

Ihre generierten `bundle.js`- und `bundle.css`-Dateien werden in etwa so aussehen (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder Änderungen weiter überwachen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minimieren und komprimieren.

Nach dem Ausführen von `npm run build` werden unsere generierten `bundle.js`- und `bundle.css`-Dateien mehr so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Sie könnten eine Warnung bekommen, aber Sie können diese vorerst ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8,3 KB, wenn sie gezippt ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, analysiert, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code in Vanilla-JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, wird Svelte [rollup](https://rollupjs.org/) als Modul-Bündler verwenden.

> [!NOTE]
> Es gibt auch ein offizielles Template für die Nutzung von [webpack](https://webpack.js.org/) und auch viele [community-unterstützte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bündler.

In der Datei `package.json` können Sie sehen, dass die `build` und `dev` Skripte einfach Rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev`-Skript übergeben wir das `-w`-Argument, das Rollup anweist, Dateien zu überwachen und bei Änderungen neu zu bauen.

Wenn wir uns die Datei `rollup.config.js` ansehen, können wir sehen, dass der Svelte-Compiler einfach ein Rollup-Plugin ist:

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

Später in derselben Datei sehen Sie auch, wie Rollup unsere Skripte im Produktionsmodus minimiert und einen lokalen Server im Entwicklungsmodus startet:

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

Es gibt [viele Plugins für Rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das ebenfalls vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien vorverarbeitet, wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript.

## Bereitstellung Ihrer Svelte-Anwendung

Aus Sicht eines Webservers ist eine Svelte-Anwendung nichts anderes als eine Ansammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Sites entwickelt wurde und Unterstützung für die meisten gängigen Frontend-Tools bietet, wobei Svelte eine davon ist.

Um unsere App bereitzustellen, führen Sie die folgenden Schritte aus.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und die Schritte in der an diese Adresse gesendeten E-Mail zu befolgen, aus Sicherheitsgründen.
3. Führen Sie `npx vercel` erneut aus und Sie werden aufgefordert, ein paar Fragen zu beantworten, wie zum Beispiel:

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

4. Akzeptieren Sie alle Standardwerte, und Sie werden in Ordnung sein.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Production"-URL in Ihrem Browser, und Sie werden die bereitgestellte App sehen!

Sie können auch ein [Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) zu Vercel von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global installieren mit `npm i -g vercel`, sodass Sie `npx` nicht verwenden müssen, um es auszuführen.

### Automatische Bereitstellung auf GitLab Pages

Es gibt mehrere Online-Dienste zum Hosten statischer Dateien, die Ihnen die Möglichkeit bieten, Ihre Site automatisch bereitzustellen, wann immer Sie Änderungen in ein Git-Repository verschieben. Die meisten umfassen den Aufbau einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um den Aufbau und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todos-App zu [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich bei GitLab [registrieren](https://gitlab.com/users/sign_up) und dann ein [neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie werden eine Remote-URL haben, die auf Ihr neues GitLab-Git-Repository zeigt, wie zum Beispiel `git@gitlab.com:[your-user]/[your-project].git`.
2. Bevor Sie mit dem Hochladen von Inhalten in Ihr Git-Repository beginnen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien von der Versionskontrolle auszuschließen sind. In unserem Fall werden wir Git anweisen, Dateien im Verzeichnis `node_modules` auszuschließen, indem wir im Stammverzeichnis Ihres lokalen Projekts eine `.gitignore`-Datei mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Kehren wir nun zu GitLab zurück. Nach dem Erstellen eines neuen Repos wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen erklärt, um Ihre vorhandenen Dateien hochzuladen. Folgen Sie den Schritten unter der Überschrift _Push an existing folder_:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten [das `git`-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Sie davor bewahrt, Ihren Benutzernamen und Ihr Passwort jedes Mal einzugeben, wenn Sie auf Ihr originelles Repo zugreifen. Dazu müssen Sie [ein SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/ee/user/ssh.html#generate-an-ssh-key-pair). Ihre Ursprungs-URL wird so sein: `git@gitlab.com:[your-user]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen dann unser Remote-Original (wo wir unseren Code hinschieben werden) als unser Repo auf GitLab. Als Nächstes übergeben wir alle Dateien in das lokale Git-Repo und schieben sie dann zum Remote-Original auf GitLab.

GitLab verwendet ein integriertes Werkzeug namens GitLab CI/CD, um Ihre Site zu bauen und sie auf dem GitLab Pages-Server zu veröffentlichen. Die Reihenfolge der Skripte, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezifischer Job namens `pages` in der Konfigurationsdatei wird GitLab darüber informieren, dass Sie eine GitLab Pages-Website bereitstellen.

Versuchen wir dies jetzt.

1. Erstellen Sie eine `.gitlab-ci.yml`-Datei im Stamm Ihres Projekts und geben Sie ihr den folgenden Inhalt:

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

   Hier teilen wir GitLab mit, dass ein Image mit der neuesten Version von Node verwendet werden soll, um unsere App zu bauen. Als Nächstes deklarieren wir einen `pages`-Job, um GitLab Pages zu aktivieren. Immer wenn ein Push zu unserem Repo erfolgt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir teilen GitLab auch mit, dass die Inhalte des `public`-Verzeichnisses bereitgestellt werden sollen. In der letzten Zeile konfigurieren wir GitLab so, dass unsere App nur dann neu bereitgestellt wird, wenn ein Push zu unserem Hauptzweig erfolgt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://your-user.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html`-Datei relativ machen. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) von den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, so:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Tun Sie dies jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen in GitLab übergeben und verschieben. Machen Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Immer wenn ein Job läuft, zeigt GitLab ein Symbol an, das den Prozess des Jobs anzeigt. Durch Klicken darauf können Sie die Ausgabe des Jobs inspizieren.

![gitlab screenshot showing a deployed commit, which add a gitlab ci file, and changes bundle paths to relative](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs im Menüpunkt _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![a gitlab ci job shown in the gitlab ui, running a lot of commands](02-gitlab-pages-job.png)

Sobald GitLab das Bauen und Veröffentlichen Ihrer App abgeschlossen hat, wird sie unter `https://your-user.gitlab.io/mdn-svelte-todo/` zugänglich sein; in meinem Fall unter `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-UI überprüfen — siehe das Menü _Einstellungen_ > _Pages_.

Mit dieser Konfiguration wird die Anwendung automatisch neu gebaut und auf GitLab Pages bereitgestellt, sobald Sie Änderungen in das GitLab-Repo schieben.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie sich anschauen können, um Ihr Svelte-Wissen weiter zu vertiefen.

### Svelte-Dokumentation

Um weiterzugehen und mehr über Svelte zu lernen, sollten Sie unbedingt die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die Sveltes Philosophie erklären. Wenn Sie das noch nicht getan haben, sollten Sie unbedingt den [interaktiven Svelte-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits die meisten seiner Inhalte behandelt, also wird es nicht viel Zeit in Anspruch nehmen, es zu vervollständigen — Sie sollten es als Übung betrachten!

Sie können auch die [Svelte API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Beweggründe hinter Svelte zu verstehen, sollten Sie sich die [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s)-Präsentation von [Rich Harris](https://x.com/Rich_Harris) auf YouTube ansehen. Er ist der Erfinder von Svelte, also hat er ein paar Dinge darüber zu sagen. Sie haben auch die interaktiven Folien zur Verfügung, die, wenig überraschend, mit Svelte gebaut sind. Wenn es Ihnen gefallen hat, werden Sie auch die Präsentation [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) mögen, die Rich Harris bei [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte im Zusammenhang mit Svelte, die einen Blick wert sind:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungsframework, das von Svelte angetrieben wird und serverseitiges Rendering (SSR), Code-Splitting, dateibasierte Routenführung und Offline-Unterstützung und mehr bietet. Betrachten Sie es als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt definitiv ansehen.
- [Svelte Native](https://svelte-native.technology/): Ein Framework für mobile Anwendungen, das von Svelte angetrieben wird. Betrachten Sie es als [React Native](https://reactnative.dev/) für Svelte.
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code Plugin für die Arbeit mit `.svelte`-Dateien, welches wir in unserem [TypeScript-Artikel](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript) behandelt haben.

### Weitere Lernressourcen

- Es gibt einen [vollständigen Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Web, sodass es schwierig ist, eine Empfehlung auszusprechen.
- Nichtsdestotrotz ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist ebenfalls eine nützliche Referenz zum Erlernen der wichtigsten Svelte-Konzepte.
- Wenn Sie es vorziehen, Bücher zu lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das [Sie online einsehen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome) kostenlos.
- Wenn Sie tiefer eintauchen und die inneren Abläufe des Svelte-Compilers verstehen möchten, sollten Sie [Tan Li Hau](https://x.com/lihautan)'s [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) Blogposts überprüfen.

### Interaktion mit der Community

Es gibt verschiedene Möglichkeiten, um Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Svelte's Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Svelte-Community-Twitter-Account.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-gesteuertes Repository von Rezepten, Tipps und bewährten Methoden zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte`-Tag auf SO.
- [Svelte reddit community](https://www.reddit.com/r/sveltejs/): Svelte-Community-Diskussions- und Inhaltsbewertungsseite auf reddit.
- [Svelte DEV community](https://dev.to/t/svelte): Eine Sammlung von Technischen Artikeln und Tutorials zu Svelte von der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte zum Aufbau und zur Bereitstellung einer vollständigen Anwendung gekommen.

- Wir haben über die Svelte-Philosophie gelernt und was es von anderen Frontend-Frameworks unterscheidet.
- Wir haben gesehen, wie man unserer Webseite dynamisches Verhalten hinzufügt, wie man unsere App in Komponenten organisiert und auf verschiedene Arten Informationen zwischen ihnen teilt.
- Wir haben das Reaktivitätssystem von Svelte genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und die Fähigkeiten von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Webspeicher zu speichern.
- Wir haben auch einen Blick auf die Unterstützung von Svelte für TypeScript geworfen.

In diesem Artikel haben wir über ein paar stressfreie Optionen gelernt, um unsere App in der Produktion bereitzustellen und gesehen, wie man eine grundlegende Pipeline zum Bereitstellen unserer App bei jedem Commit auf GitLab einrichtet. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen bereitgestellt, um Ihr Lernen zu vertiefen.

Herzlichen Glückwunsch! Nach Abschluss dieser Tutorialreihe sollten Sie eine starke Grundlage haben, um mit der Entwicklung professioneller Webanwendungen mit Svelte zu beginnen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
