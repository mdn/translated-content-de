---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im vorherigen Artikel haben wir über die TypeScript-Unterstützung von Svelte gelernt und wie Sie diese verwenden können, um Ihre Anwendung robuster zu machen. In diesem letzten Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online verfügbar machen. Außerdem teilen wir einige Ressourcen, die Sie besuchen sollten, um Ihre Svelte-Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          über Kenntnisse in der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          >verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node + npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie wir unsere Svelte-App für die Produktion vorbereiten und welche Lernressourcen Sie als Nächstes besuchen sollten.
      </td>
    </tr>
  </tbody>
</table>

## Codieren Sie mit uns

### Git

Klonen Sie das GitHub-Repo (falls Sie es noch nicht gemacht haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Stand der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Kompilierung unserer App

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js`-Datei zu kompilieren und alle CSS-Bereiche unserer Komponenten in `public/build/bundle.css`. Es startet auch einen Entwicklungsserver und überwacht Änderungen, kompiliert die App neu und aktualisiert die Seite, wenn eine Änderung auftritt.

Ihre generierten `bundle.js`- und `bundle.css`-Dateien werden etwa so aussehen (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder Änderungen überwachen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minifizieren und komprimieren.

Nachdem Sie `npm run build` ausgeführt haben, werden unsere generierten `bundle.js`- und `bundle.css`-Dateien eher so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, aber diese können Sie vorerst ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8,3 KB, wenn sie gezippt ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, geparst, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code in Vanilla-JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig verwendet Svelte [rollup](https://rollupjs.org/) als Modulbündler, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Verwendung von [webpack](https://webpack.js.org/) sowie viele [von der Community gepflegte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bündler.

In der Datei `package.json` können Sie sehen, dass die `build` und `dev` Skripte einfach rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev` Skript übergeben wir das `-w` Argument, welches rollup anweist, Dateien zu beobachten und bei Änderungen neu zu erstellen.

Wenn wir uns die Datei `rollup.config.js` ansehen, sehen wir, dass der Svelte-Compiler einfach ein rollup-Plugin ist:

```js
import svelte from "rollup-plugin-svelte";
// …
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write("public/build/bundle.css");
      },
    }),
    // More plugins…
  ],
  // …
};
```

Später in derselben Datei werden Sie auch sehen, wie rollup unsere Skripte im Produktionsmodus minimiert und im Entwicklungsmodus einen lokalen Server startet:

```js
export default {
  // …
  plugins: [
    // …
    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  // …
};
```

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das ebenfalls vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorbereitet.

## Bereitstellung Ihrer Svelte-Anwendung

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nichts anderes als eine Ansammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt kann auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Websites ausgelegt ist und umfassende Unterstützung für die meisten gängigen Frontend-Tools bietet, einschließlich Svelte.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus. Beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und den Schritten in der an diese Adresse gesendeten E-Mail zu folgen, aus Sicherheitsgründen.
3. Führen Sie `npx vercel` erneut aus und Sie werden aufgefordert, einige Fragen zu beantworten, wie diese:

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

4. Akzeptieren Sie alle Standardeinstellungen, und alles sollte in Ordnung sein.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Production"-URL in Ihrem Browser und Sie werden die bereitgestellte App sehen!

Sie können auch [ein Svelte-Git-Projekt](https://vercel.com/import/svelte) von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/) in Vercel importieren.

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, sodass Sie es nicht mit `npx` ausführen müssen.

### Automatische Bereitstellung auf GitLab Pages

Für das Hosting von statischen Dateien gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen an ein Git-Repository pushen. Die meisten von ihnen beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und den Bau und die Bereitstellung Ihrer Website übernimmt.

Um dies zu demonstrieren, werden wir unsere Todos-App auf [GitLab Pages](https://docs.gitlab.com/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich bei [GitLab registrieren](https://gitlab.com/users/sign_up) und dann ein [neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie erhalten eine Remote-URL, die auf Ihr neues GitLab-Git-Repository verweist, wie `git@gitlab.com:[Ihr-Benutzer]/[Ihr-Projekt].git`.
2. Bevor Sie beginnen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien von der Versionskontrolle ausgeschlossen werden sollten. In unserem Fall werden wir Git anweisen, Dateien im `node_modules`-Verzeichnis zu ignorieren, indem wir eine `.gitignore`-Datei im Stammordner Ihres lokalen Projekts mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Kehren wir nun zu GitLab zurück. Nach der Erstellung eines neuen Repos wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen erklärt, um Ihre bestehenden Dateien hochzuladen. Befolgen Sie die unter der Überschrift _Push an existing folder_ aufgeführten Schritte:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten das [git-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Sie davor bewahrt, jedes Mal Ihren Benutzernamen und Ihr Passwort einzugeben, wenn Sie auf Ihr Ursprungs-Repo zugreifen. Dazu müssen Sie ein [SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair). Ihre Ursprungs-URL würde so aussehen: `git@gitlab.com:[Ihr-Benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen dann unser Remote-Ursprungs-Repository (wohin wir unseren Code pushen werden) als unser Repo auf GitLab. Als Nächstes committen wir alle Dateien in das lokale Git-Repo und pushen diese anschließend an das Remote-Ursprungs-Repo auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Website zu erstellen und auf dem GitLab Pages Server zu veröffentlichen. Die Sequenz von Skripten, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird von einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezieller Job namens `pages` in der Konfigurationsdatei wird GitLab bewusst machen, dass Sie eine GitLab Pages-Website bereitstellen.

Lassen Sie uns das jetzt ausprobieren.

1. Erstellen Sie eine `.gitlab-ci.yml`-Datei im Stammverzeichnis Ihres Projekts und geben Sie ihr folgenden Inhalt:

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

   Hier geben wir GitLab an, ein Image mit der neuesten Version von Node zu verwenden, um unsere App zu bauen. Als Nächstes deklarieren wir einen `pages`-Job, um GitLab Pages zu aktivieren. Immer wenn ein Push in unser Repo erfolgt, führt GitLab `npm install` und `npm run build` aus, um unsere Anwendung zu bauen. Wir geben GitLab auch an, den Inhalt des `public`-Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab so, dass unsere App nur dann erneut bereitgestellt wird, wenn ein Push zu unserem Haupt-Branch erfolgt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://your-user.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html`-Datei relativ machen. Um dies zu tun, entfernen wir einfach die führenden Schrägstriche (`/`) von den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, wie folgt:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Führen Sie dies jetzt aus.

3. Jetzt müssen wir nur noch unsere Änderungen an GitLab committen und pushen. Machen Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Wann immer ein Job läuft, wird GitLab ein Symbol anzeigen, das den Prozess des Jobs anzeigt. Durch Klicken darauf können Sie die Ausgabe des Jobs inspizieren.

![gitlab screenshot showing a deployed commit, which add a gitlab ci file, and changes bundle paths to relative](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs aus dem Menüpunkt _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![a gitlab ci job shown in the gitlab ui, running a lot of commands](02-gitlab-pages-job.png)

Sobald GitLab den Bau und die Veröffentlichung Ihrer App abgeschlossen hat, ist sie unter `https://your-user.gitlab.io/mdn-svelte-todo/` zugänglich; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-Benutzeroberfläche überprüfen — siehe die Menüoption _Settings_ > _Pages_.

Mit dieser Konfiguration wird die Anwendung automatisch neu gebaut und auf GitLab Pages bereitgestellt, wann immer Sie Änderungen an das GitLab-Repo pushen.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie besuchen und auschecken sollten, um Ihr Svelte-Lernen weiter zu vertiefen.

### Svelte Dokumentation

Um weiter zu lernen und mehr über Svelte zu erfahren, sollten Sie definitiv die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht gemacht haben, stellen Sie sicher, dass Sie das [interaktive Svelte-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits den Großteil seines Inhalts behandelt, sodass es nicht viel Zeit in Anspruch nehmen sollte — sehen Sie es als Übung!

Sie können auch die [Svelte-API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Motivationen hinter Svelte zu verstehen, sollten Sie [Rich Harris](https://x.com/Rich_Harris)'s Präsentation [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) auf YouTube ansehen. Er ist der Erfinder von Svelte, also hat er ein paar Dinge darüber zu sagen. Sie haben auch die interaktiven Folien hier verfügbar, die, wenig überraschend, mit Svelte erstellt wurden. Wenn es Ihnen gefallen hat, werden Sie auch [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) Präsentation genießen, die Rich Harris auf der [JSCAMP 2019](https://jscamp.tech/2019/) gegeben hat.

### Verwandte Projekte

Es gibt andere Projekte, die mit Svelte zusammenhängen und die zu beachten sich lohnen:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungsframework, das von Svelte betrieben wird und serverseitiges Rendering (SSR), Code-Splitting, dateibasierte Routen, Offline-Unterstützung und vieles mehr bietet. Denken Sie daran als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine recht komplexe Webanwendung zu entwickeln, sollten Sie auf jeden Fall einen Blick auf dieses Projekt werfen.
- [Svelte Native](https://svelte.nativescript.org/): Ein mobiles Anwendungsframework, das von Svelte betrieben wird. Denken Sie daran als [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin für die Arbeit mit `.svelte` Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) betrachtet haben.

### Weitere Lernressourcen

- Es gibt einen [kompletten Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, erhältlich bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Web, so dass es schwierig ist, eine Empfehlung auszusprechen.
- Nichtsdestotrotz ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist ebenfalls eine nützliche Referenz, um die wichtigsten Svelte-Konzepte zu lernen.
- Wenn Sie Bücher bevorzugen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, [das Sie online kostenlos einsehen](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome) können.
- Wenn Sie tiefer eintauchen möchten, um das Innenleben des Svelte-Compilers zu verstehen, sollten Sie [Tan Li Hau](https://x.com/lihautan)'s Blogbeiträge [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) ansehen.

### Interaktion mit der Community

Es gibt eine Reihe verschiedener Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Svelte's Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Der Twitter-Account der Svelte-Community.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-getriebene Sammlung von Rezepten, Tipps und Best Practices zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem Tag `svelte` bei SO.
- [Svelte reddit community](https://www.reddit.com/r/sveltejs/): Diskussions- und Inhaltsbewertungsseite der Svelte-Community auf Reddit.
- [Svelte DEV community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte zu der Erstellung und Bereitstellung einer vollständigen Anwendung übergegangen.

- Wir haben die Philosophie von Svelte und was es von anderen Frontend-Frameworks unterscheidet, kennengelernt.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten, Informationen zwischen ihnen auszutauschen.
- Wir haben das reaktive System von Svelte genutzt und gelernt, wie man häufige Fallen vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und HTML-Elemente programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Web-Speicher zu speichern.
- Wir haben auch einen Blick auf Svelte's TypeScript-Unterstützung geworfen.

In diesem Artikel haben wir über ein paar mühelose Optionen zur Bereitstellung unserer App in der Produktion gelernt und gesehen, wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit an GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen bereitgestellt, um Ihr Svelte-Lernen weiter zu vertiefen.

Herzlichen Glückwunsch! Nach Abschluss dieser Serie von Tutorials sollten Sie eine starke Basis haben, von der aus Sie professionelle Webanwendungen mit Svelte entwickeln können.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
