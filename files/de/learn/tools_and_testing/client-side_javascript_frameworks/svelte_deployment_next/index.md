---
title: Bereitstellung und nächste Schritte
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Im vorherigen Artikel haben wir über die TypeScript-Unterstützung von Svelte gelernt und wie Sie sie verwenden können, um Ihre Anwendung robuster zu machen. In diesem abschließenden Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online stellen können, und einige der Ressourcen teilen, zu denen Sie weitermachen sollten, um Ihre Svelte-Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollte empfohlen werden, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a>
          haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie wir unsere Svelte-App für die Produktion vorbereiten und welche Lernressourcen Sie als nächstes besuchen sollten.
      </td>
    </tr>
  </tbody>
</table>

## Coden Sie mit uns

### Git

Klonen Sie das GitHub-Repository (wenn Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie dann aus

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Kompilieren unserer App

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir zuvor gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js` Datei zu kompilieren und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css`. Es startet auch einen Entwicklungsserver und beobachtet Änderungen, recompiliert die App und aktualisiert die Seite bei einer Änderung.

Ihre generierten `bundle.js` und `bundle.css` Dateien werden so etwas wie folgt sein (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder weiterhin auf Änderungen achten. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minifizieren und komprimieren.

Nach dem Ausführen von `npm run build` werden unsere generierten `bundle.js` und `bundle.css` Dateien mehr so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, aber diese können Sie vorerst ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB — 8,3 KB, wenn sie gzip-komprimiert ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, analysiert, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code in Vanilla JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig verwendet Svelte, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, [rollup](https://rollupjs.org/) als Modulpaketierer.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Verwendung von [webpack](https://webpack.js.org/) und auch viele [community-erhaltene Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Paketierer.

In der Datei `package.json` können Sie sehen, dass die `build` und `dev` Skripte einfach rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev` Skript übergeben wir das `-w` Argument, das rollup anweist, Dateien zu beobachten und bei Änderungen neu zu bauen.

Wenn wir uns die `rollup.config.js` Datei ansehen, können wir sehen, dass der Svelte-Kompiler nur ein rollup-Plugin ist:

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

Später in der gleichen Datei sehen Sie auch, wie rollup unsere Skripte im Produktionsmodus minimiert und im Entwicklungsmodus einen lokalen Server startet:

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

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), die Ihnen erlauben, sein Verhalten zu modifizieren. Ein besonders nützliches Plugin, das auch vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorverarbeitet.

## Bereitstellen Ihrer Svelte-Anwendung

Für einen Webserver ist eine Svelte-Anwendung nichts weiter als eine Ansammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Lassen Sie uns ein paar Beispiele betrachten.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell auf statische Seiten zugeschnitten ist und Unterstützung für die gängigsten Frontend-Tools bietet, darunter Svelte.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für einen Account bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben, und folgen Sie den Anweisungen in der an diese Adresse gesendeten E-Mail zu Sicherheitszwecken.
3. Führen Sie `npx vercel` erneut aus, und Sie werden gebeten, einige Fragen zu beantworten, wie diese:

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

4. Akzeptieren Sie alle Standardeinstellungen, und Sie sind gut dabei.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Production"-URL in Ihrem Browser, und Sie werden die bereitgestellte App sehen!

Sie können auch [ein Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [BitBucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, sodass Sie es nicht mit `npx` ausführen müssen.

### Automatische Bereitstellung auf GitLab Pages

Für das Hosting von statischen Dateien gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Seite automatisch bereitzustellen, wann immer Sie Änderungen in ein Git-Repository pushen. Die meisten von ihnen beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um das Bauen und Bereitstellen Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere "todos" App auf [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich bei [GitLab registrieren](https://gitlab.com/users/sign_up) und dann [ein neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie haben eine Remote-URL, die auf Ihr neues GitLab-Git-Repository verweist, wie `git@gitlab.com:[ihre-benutzername]/[ihr-projekt].git`.
2. Bevor Sie beginnen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien von der Quellverwaltung ausgeschlossen werden sollen. In unserem Fall werden wir Git anweisen, Dateien im `node_modules` Verzeichnis auszuschließen, indem wir eine `.gitignore` Datei im Stammverzeichnis Ihres lokalen Projekts mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Gehen wir jetzt zurück zu GitLab. Nach dem Erstellen eines neuen Repos wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen erklärt, um Ihre vorhandenen Dateien hochzuladen. Folgen Sie den Schritten, die unter der Überschrift _Push an existing folder_ aufgeführt sind:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten [das `git` Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, das schneller ist und Sie davon bewahrt, Ihren Benutzernamen und Ihr Passwort jedes Mal einzugeben, wenn Sie auf Ihr Ursprungs-Repo zugreifen. Dazu müssen Sie [ein SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/ee/user/ssh.html#generate-an-ssh-key-pair). Ihre Ursprungs-URL wird so aussehen: `git@gitlab.com:[ihre-benutzername]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen dann unser Remote-Urspüngliches (wo wir unseren Code hochladen werden) als unser Repo auf GitLab. Als nächstes fügen wir alle Dateien dem lokalen Git-Repo hinzu und pushen sie dann auf den Remote-Ursprung auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Seite zu bauen und auf den GitLab Pages-Server zu veröffentlichen. Die Reihenfolge der Skripte, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezifischer Job namens `pages` in der Konfigurationsdatei wird GitLab darüber informieren, dass Sie eine GitLab Pages-Website bereitstellen.

Versuchen wir, dies jetzt zu tun.

1. Erstellen Sie eine `.gitlab-ci.yml` Datei im Stammverzeichnis Ihres Projekts und geben Sie ihr folgenden Inhalt:

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

   Hier sagen wir GitLab, ein Image mit der neuesten Version von Node zu verwenden, um unsere App zu bauen. Als Nächstes deklarieren wir einen `pages` Job, um GitLab Pages zu aktivieren. Wannimmer es einen Push in unser Repo gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir sagen GitLab auch, den Inhalt des `public` Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab, unsere App nur dann bereitzustellen, wenn es einen Push in unseren Hauptzweig gibt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://ihr-benutzer.gitlab.io/mdn-svelte-todo`), müssen die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html` Datei relativ gemacht werden. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) von den `/global.css`, `/build/bundle.css`, und `/build/bundle.js` URLs, wie folgt:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Machen Sie dies jetzt.

3. Nun müssen wir nur noch unsere Änderungen in GitLab committen und pushen. Tun Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Wannimmer ein Job läuft, zeigt GitLab ein Symbol an, das den Fortschritt des Jobs anzeigt. Durch Klicken darauf können Sie die Ausgabe des Jobs überprüfen.

![gitlab screenshot zeigt einen bereitgestellten Commit, der eine gitlab ci Datei hinzufügt und Bundle-Pfade zu relativen ändert](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs im _CI / CD_ > _Jobs_ Menüpunkt Ihres GitLab-Projekts überprüfen.

![ein gitlab ci job, gezeigt in der GitLab-Benutzeroberfläche, der eine Menge von Befehlen ausführt](02-gitlab-pages-job.png)

Sobald GitLab den Build und die Veröffentlichung Ihrer App abgeschlossen hat, wird sie unter `https://ihr-benutzer.gitlab.io/mdn-svelte-todo/` zugänglich sein; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-Benutzeroberfläche überprüfen — sehen Sie den Menüpunkt _Settings_ > _Pages_.

Mit dieser Konfiguration wird bei jedem Push von Änderungen in das GitLab-Repo die Anwendung automatisch neu erstellt und auf GitLab Pages bereitgestellt.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie sich ansehen können, um Ihr Svelte-Lernen weiter zu vertiefen.

### Svelte-Dokumentation

Um weiter zu gehen und mehr über Svelte zu lernen, sollten Sie auf jeden Fall die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht getan haben, stellen Sie sicher, dass Sie den [interaktiven Svelte-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchlaufen. Wir haben bereits die meisten Inhalte abgedeckt, sodass es nicht viel Zeit in Anspruch nimmt — betrachten Sie es als Übung!

Sie können auch die [Svelte API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Motivationen hinter Svelte zu verstehen, sollten Sie sich [Rich Harris](https://x.com/Rich_Harris)'s Presentation [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) auf YouTube ansehen. Er ist der Ersteller von Svelte, also hat er ein paar Dinge darüber zu sagen. Sie haben auch die interaktiven Folien zur Verfügung, die überraschenderweise mit Svelte gebaut sind. Wenn es Ihnen gefallen hat, werden Sie auch die Präsentation [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) genießen, die Rich Harris auf der [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte in Bezug auf Svelte, die einen Blick wert sind:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungs-Framework basierend auf Svelte, das serverseitiges Rendering (SSR), Code-Splitting, dateibasiertes Routing und Offline-Unterstützung bietet und mehr. Denken Sie an es wie an [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt unbedingt ansehen.
- [Svelte Native](https://svelte-native.technology/): Ein mobiles Anwendungs-Framework basierend auf Svelte. Denken Sie an es wie an [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin zum Arbeiten mit `.svelte` Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript) betrachtet haben.

### Andere Lernressourcen

- Es gibt einen [kompletten Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, der bei Frontend Masters verfügbar ist.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Web, daher ist es schwierig, eine Empfehlung auszusprechen.
- Nichtsdestotrotz ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist auch eine nützliche Referenz für das Lernen der Hauptkonzepte von Svelte.
- Wenn Sie es vorziehen, Bücher zu lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), das im Oktober 2020 veröffentlicht wurde und [Sie können es online ansehen](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome) kostenlos.
- Wenn Sie tiefer eintauchen und das Innenleben des Svelte-Kompilers verstehen möchten, sollten Sie [Tan Li Hau](https://x.com/lihautan)'s [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) Blogbeiträge überprüfen.

### Interaktion mit der Community

Es gibt eine Reihe verschiedener Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Svelte's Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Das offizielle Twitter-Konto.
- [@sveltesociety](https://x.com/sveltesociety): Svelte Community Twitter-Konto.
- [Svelte Rezepte](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-getriebene Sammlung von Rezepten, Tipps und Best Practices zur Lösung gängiger Probleme.
- [Svelte-Fragen auf StackOverflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte` Tag bei SO.
- [Svelte Reddit-Community](https://www.reddit.com/r/sveltejs/): Svelte-Community-Diskussion und Inhaltsbewertung auf Reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-basierten technischen Artikeln und Tutorials der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln haben wir Sie von null Wissen über Svelte bis hin zum Erstellen und Bereitstellen einer vollständigen Anwendung geführt.

- Wir haben über die Philosophie von Svelte gelernt und was es von anderen Frontend-Frameworks unterscheidet.
- Wir haben gesehen, wie man dynamisches Verhalten auf unsere Website bringt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten zur Informationsweitergabe unter ihnen.
- Wir haben das Reaktivitätssystem von Svelte ausgenutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und die Fähigkeiten von HTML-Elementen mit der `use` Direktive programmatisch zu erweitern.
- Dann haben wir gesehen, wie man Speichersysteme verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Speicher erstellt, um die Daten unserer Anwendung im Web Storage zu speichern.
- Wir haben auch einen Blick auf die TypeScript-Unterstützung von Svelte geworfen.

In diesem Artikel haben wir über ein paar einfache Optionen gelernt, um unsere App in der Produktion bereitzustellen, und gesehen, wie man eine einfache Pipeline einrichtet, um unsere App bei jedem Commit auf GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen zur Verfügung gestellt, um Ihr Svelte-Lernen weiterzuführen.

Herzlichen Glückwunsch! Nach Abschluss dieser Serie von Tutorials sollten Sie eine solide Basis haben, um professionelle Webanwendungen mit Svelte zu entwickeln.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
