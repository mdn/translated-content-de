---
title: Bereitstellung und nächste Schritte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im vorherigen Artikel haben wir über die TypeScript-Unterstützung von Svelte gelernt und wie man sie nutzen kann, um Ihre Anwendung robuster zu machen. In diesem abschließenden Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online bringen können. Außerdem teilen wir einige Ressourcen mit Ihnen, die Sie für Ihre weitere Svelte-Lernreise nutzen sollten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
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
        Lernen Sie, wie Sie unsere Svelte-App für die Produktion vorbereiten und welche Lernressourcen Sie als nächstes besuchen sollten.
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

Um den aktuellen Status der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Unsere App kompilieren

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir zuvor gesehen haben, weist dieser Befehl Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js`-Datei zu kompilieren und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css`. Außerdem startet es einen Entwicklungsserver und überwacht Änderungen, kompiliert die App neu und aktualisiert die Seite, wenn eine Änderung auftritt.

Ihre generierten `bundle.js`- und `bundle.css`-Dateien werden ungefähr so aussehen (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder Änderungen weiter überwachen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minimieren und komprimieren.

Nach dem Ausführen von `npm run build` sehen unsere generierten `bundle.js`- und `bundle.css`-Dateien mehr wie folgt aus:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, die Sie jedoch vorerst ignorieren können.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8.3 KB, wenn sie gzip-komprimiert ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, geparst, ausgeführt und im Speicher behalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code in Vanilla JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, verwendet Svelte [rollup](https://rollupjs.org/) als Modulbündler.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Verwendung von [webpack](https://webpack.js.org/) sowie viele [community-maintained plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bündler.

In der Datei `package.json` können Sie sehen, dass die Skripte `build` und `dev` einfach rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev`-Skript übergeben wir das `-w`-Argument, das rollup anweist, die Dateien zu überwachen und bei Änderungen neu zu bauen.

Wenn wir uns die Datei `rollup.config.js` ansehen, können wir erkennen, dass der Svelte-Kompilierer nur ein rollup-Plugin ist:

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

Später in derselben Datei werden Sie auch sehen, wie rollup unsere Skripte im Produktionsmodus minimiert und einen lokalen Server im Entwicklungsmodus startet:

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

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das auch von den Svelte-Entwicklern gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorverarbeitet.

## Ihre Svelte-Anwendung bereitstellen

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nichts anderes als eine Sammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie brauchen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt benötigt, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Einer der einfachsten Wege, eine Svelte-Anwendung bereitzustellen, ist die Nutzung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Websites entwickelt wurde und von Haus aus Unterstützung für die gängigsten Front-End-Tools, einschließlich Svelte, bietet.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal wird Ihnen angeboten, Ihre E-Mail-Adresse einzugeben und den Schritten in der an diese Adresse gesendeten E-Mail aus Sicherheitsgründen zu folgen.
3. Führen Sie `npx vercel` erneut aus, und Sie werden gebeten, ein paar Fragen zu beantworten, wie diese:

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

4. Akzeptieren Sie alle Standardwerte, und Sie sind gut unterwegs.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Production"-URL in Ihrem Browser, und Sie sehen die bereitgestellte App!

Sie können auch [ein Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) nach Vercel von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [BitBucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global installieren mit `npm i -g vercel`, sodass Sie `npx` nicht verwenden müssen, um es auszuführen.

### Automatische Bereitstellung für GitLab Pages

Zum Hosting von statischen Dateien gibt es mehrere Onlinedienste, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen in ein Git-Repository pushen. Die meisten davon beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um den Aufbau und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todos-App auf [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich bei GitLab [registrieren](https://gitlab.com/users/sign_up) und dann [ein neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, leicht zu merkenden Namen wie "mdn-svelte-todo". Sie erhalten eine Remote-URL, die auf Ihr neues GitLab-Git-Repository zeigt, z.B. `git@gitlab.com:[your-user]/[your-project].git`.
2. Bevor Sie anfangen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, die Git mitteilt, welche Dateien von der Quellcodeverwaltung ausgeschlossen werden sollen. In unserem Fall werden wir Git anweisen, Dateien im Verzeichnis `node_modules` auszuschließen, indem wir eine `.gitignore`-Datei im Stammordner Ihres lokalen Projekts mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Gehen wir nun zurück zu GitLab. Nachdem Sie ein neues Repo erstellt haben, wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen erklärt, um Ihre vorhandenen Dateien hochzuladen. Folgen Sie den Schritten, die unter dem Titel _Push an existing folder_ aufgelistet sind:

   ```bash
   cd your_root_directory # Gehen Sie in das Stammverzeichnis Ihres Projekts
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten [das `git`-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, das schneller ist und Ihnen das Eingeben Ihres Benutzernamens und Passworts bei jedem Zugriff auf Ihr Ursprungsrepo erspart. Dafür müssen Sie [ein SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/ee/user/ssh.html#generate-an-ssh-key-pair). Ihre Ursprungs-URL wird dann so aussehen: `git@gitlab.com:[your-user]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, dann setzen wir unsere Remote-Ursprung (wo wir unseren Code hin pushen werden) als unser Repository auf GitLab. Als Nächstes commiten wir alle Dateien in das lokale Git-Repo und pushen diese dann zum Remote-Ursprung auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Seite zu bauen und auf den GitLab Pages-Server zu veröffentlichen. Die Folge von Skripten, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezieller Job namens `pages` in der Konfigurationsdatei wird GitLab bewusst machen, dass Sie eine GitLab Pages-Website bereitstellen.

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

   Hier geben wir GitLab an, ein Image mit der neuesten Version von Node zu verwenden, um unsere App zu bauen. Als Nächstes deklarieren wir einen `pages`-Job, um GitLab Pages zu aktivieren. Immer wenn es einen Push in unser Repo gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir weisen GitLab auch an, den Inhalt des `public`-Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab so, dass unsere App nur dann erneut bereitgestellt wird, wenn es einen Push in unseren main-Branch gibt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://your-user.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html`-Datei relativ machen. Dafür entfernen wir einfach die führenden Schrägstriche (`/`) aus den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, wie hier gezeigt:

   ```html
   <title>Svelte To-Do Liste</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Tun Sie dies jetzt.

3. Nun müssen wir nur noch unsere Änderungen an GitLab committen und pushen. Tun Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Immer wenn ein Job läuft, zeigt GitLab ein Symbol an, das den Prozess des Jobs zeigt. Durch Klicken darauf können Sie den Output des Jobs inspizieren.

![Screenshot von GitLab, der einen bereitgestellten Commit zeigt, der eine GitLab CI-Datei hinzufügt und Bundle-Pfade in relative Pfade ändert](01-gitlab-pages-deploy.png)

Sie können den Fortschritt der aktuellen und vorherigen Jobs auch über die Menüoption _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![Ein GitLab CI-Job wird in der GitLab-Benutzeroberfläche angezeigt und führt viele Befehle aus](02-gitlab-pages-job.png)

Sobald GitLab mit dem Aufbau und der Veröffentlichung Ihrer App fertig ist, ist sie unter `https://your-user.gitlab.io/mdn-svelte-todo/` zugänglich; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-Benutzeroberfläche überprüfen — sehen Sie unter der Menüoption _Settings_ > _Pages_ nach.

Mit dieser Konfiguration wird Ihre App bei jedem Push von Änderungen in das GitLab-Repo automatisch neu aufgebaut und auf GitLab Pages bereitgestellt.

## Mehr über Svelte lernen

In diesem Abschnitt bieten wir Ihnen einige Ressourcen und Projekte an, die Sie besuchen können, um Ihr Svelte-Wissen zu vertiefen.

### Svelte-Dokumentation

Um weiter zu gehen und mehr über Svelte zu lernen, sollten Sie auf jeden Fall die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die Sveltes Philosophie erklären. Falls Sie es noch nicht getan haben, sollten Sie unbedingt das [interaktive Svelte-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben den Großteil des Inhalts bereits behandelt, sodass es nicht lange dauern wird, es zu vervollständigen — sehen Sie es als Übung an!

Sie können auch die [Svelte-API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Motivationen hinter Svelte zu verstehen, sollten Sie sich die Präsentation [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) von [Rich Harris](https://x.com/Rich_Harris) auf YouTube ansehen. Er ist der Schöpfer von Svelte, also hat er einiges dazu zu sagen. Sie haben auch die interaktiven Folien hier verfügbar, die, wenig überraschend, mit Svelte gebaut wurden. Wenn es Ihnen gefallen hat, werden Sie auch die Präsentation [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) genießen, die Rich Harris auf dem [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte, die mit Svelte in Verbindung stehen und die einen Blick wert sind:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungs-Framework, das von Svelte betrieben wird und serverseitiges Rendering (SSR), Code-Splitting, Dateibasierte Routenführung, Offlinesupport und mehr bietet. Denken Sie daran als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt auf jeden Fall ansehen.
- [Svelte Native](https://svelte-native.technology/): Ein mobiles Anwendungs-Framework, das von Svelte betrieben wird. Denken Sie daran als [React Native](https://reactnative.dev/) für Svelte.
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin für die Arbeit mit `.svelte`-Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript) angesehen haben.

### Andere Lernressourcen

- Es gibt einen [vollständigen Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Auch wenn Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Web, sodass es schwierig ist, eine Empfehlung zu geben.
- Dennoch ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [Das Svelte-Handbuch](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist auch eine nützliche Referenz, um die Hauptkonzepte von Svelte zu lernen.
- Wenn Sie gerne Bücher lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das [Sie online kostenlos durchsehen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome).
- Wenn Sie tiefer eintauchen und das innere Funktionieren des Svelte-Kompilierers verstehen möchten, sollten Sie die Blogbeiträge [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) von [Tan Li Hau](https://x.com/lihautan) ansehen.

### Interaktion mit der Community

Es gibt mehrere Möglichkeiten, um Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Der Discord-Server von Svelte.
- [@sveltejs](https://x.com/sveltejs): Das offizielle Twitter-Konto.
- [@sveltesociety](https://x.com/sveltesociety): Das Community-Twitter-Konto von Svelte.
- [Svelte Rezepte](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Eine community-gesteuerte Sammlung von Rezepten, Tipps und Best Practices zur Lösung häufiger Probleme.
- [Svelte Fragen auf StackOverflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte`-Tag bei SO.
- [Svelte Reddit Community](https://www.reddit.com/r/sveltejs/): Eine Diskussions- und Content-Rating-Seite für die Svelte-Community auf Reddit.
- [Svelte DEV Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials von der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte bis zum Erstellen und Bereitstellen einer vollständigen Anwendung vorgedrungen.

- Wir haben über die Philosophie von Svelte gelernt und was es von anderen Front-End-Frameworks unterscheidet.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und welche verschiedenen Möglichkeiten es gibt, Informationen unter ihnen auszutauschen.
- Wir haben uns das Reaktivitätssystem von Svelte zunutze gemacht und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken kennengelernt, um mit DOM-Elementen zu interagieren und die Fähigkeiten von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Webspeicher zu speichern.
- Wir haben auch einen Blick auf die TypeScript-Unterstützung von Svelte geworfen.

In diesem Artikel haben wir über einige mühelose Möglichkeiten gelernt, um unsere App in der Produktion bereitzustellen und gesehen, wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit an GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen bereitgestellt, um weiter mit Ihrem Svelte-Lernen voranzuschreiten.

Herzlichen Glückwunsch! Nach dem Abschluss dieser Tutorial-Serie sollten Sie eine solide Basis für die Entwicklung professioneller Webanwendungen mit Svelte haben.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
