---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im vorherigen Artikel haben wir über die Unterstützung von Svelte für TypeScript und wie man diese verwendet gelernt, um Ihre Anwendung robuster zu machen. In diesem letzten Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online stellen können, und wir teilen auch einige Ressourcen, die Sie nutzen sollten, um Ihre Reise beim Lernen von Svelte fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
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
        Erfahren Sie, wie Sie unsere Svelte-App für die Produktion vorbereiten und welche Lernressourcen Sie als nächstes besuchen sollten.
      </td>
    </tr>
  </tbody>
</table>

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie es noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Zustand der App zu erreichen, führen Sie dann

```bash
cd mdn-svelte-tutorial/08-next-steps
```

oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Unsere App kompilieren

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js`-Datei zu kompilieren und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css`. Es startet auch einen Entwicklungsserver und überwacht Änderungen, kompiliert die App neu und aktualisiert die Seite, wenn eine Änderung auftritt.

Ihre generierten `bundle.js`- und `bundle.css`-Dateien werden ungefähr so aussehen (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder weiterhin auf Änderungen achten. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minimieren und komprimieren.

Nach dem Ausführen von `npm run build` werden unsere generierten `bundle.js`- und `bundle.css`-Dateien ungefähr so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Sie könnten eine Warnung erhalten, aber Sie können dies vorerst ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB groß – 8.3 KB im komprimierten Zustand. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, geparst, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code in Standard-JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, wird Svelte [rollup](https://rollupjs.org/) als Modul-Bundler verwenden.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Verwendung von [webpack](https://webpack.js.org/) und viele [von der Community gewartete Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bundler.

In der Datei `package.json` können Sie sehen, dass die `build`- und `dev`-Skripte einfach rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev`-Skript übergeben wir das Argument `-w`, welches rollup anweist, Dateien zu beobachten und bei Änderungen neu zu erstellen.

Wenn wir uns die Datei `rollup.config.js` anschauen, sehen wir, dass der Svelte-Compiler nur ein rollup-Plugin ist:

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
      css(css) {
        css.write("public/build/bundle.css");
      },
    }),
    // More plugins…
  ],
  // …
};
```

Später in derselben Datei sehen Sie auch, wie rollup unsere Skripte im Produktionsmodus minimiert und im Entwicklungsmodus einen lokalen Server startet:

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

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), mit denen Sie sein Verhalten anpassen können. Ein besonders nützliches Plugin, das auch vom Svelte-Team gewartet wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorverarbeitet.

## Bereitstellung Ihrer Svelte-Anwendung

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nichts anderes als eine Reihe von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie brauchen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede client-seitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Websites entwickelt wurde und Unterstützung für die gängigsten Front-End-Tools bietet, darunter Svelte.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und die Schritte in der an diese Adresse gesendeten E-Mail aus Sicherheitsgründen zu befolgen.
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

4. Akzeptieren Sie alle Standardeinstellungen, und Sie werden gut sein.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Production"-URL in Ihrem Browser und Sie werden die bereitgestellte App sehen!

Sie können auch ein [Svelte-Git-Projekt](https://vercel.com/import/svelte) von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/) in Vercel importieren.

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, sodass Sie nicht `npx` verwenden müssen, um es auszuführen.

### Automatische Bereitstellung auf GitLab Pages

Zum Hosten statischer Dateien gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen an einem Git-Repository pushen. Die meisten von ihnen beinhalten die Einrichtung einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um den Aufbau und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todos-App auf [GitLab Pages](https://docs.gitlab.com/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich bei [GitLab registrieren](https://gitlab.com/users/sign_up) und dann ein [neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie werden eine Remote-URL haben, die auf Ihr neues GitLab-Git-Repository zeigt, wie `git@gitlab.com:[your-user]/[your-project].git`.
2. Bevor Sie beginnen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien von der Versionskontrolle ausgeschlossen werden sollen. In unserem Fall werden wir Git anweisen, Dateien im Verzeichnis `node_modules` auszuschließen, indem wir eine `.gitignore`-Datei im Stammordner Ihres lokalen Projekts mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Gehen wir nun zurück zu GitLab. Nach dem Erstellen eines neuen Repos wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen zum Hochladen Ihrer bestehenden Dateien erklärt. Befolgen Sie die unter der Überschrift _Push an existing folder_ aufgeführten Schritte:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie können das [das `git`-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Ihnen das Eingeben Ihres Benutzernamens und Passworts jedes Mal erspart, wenn Sie auf Ihr origin-Repo zugreifen. Dazu müssen Sie ein [SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair). Ihre origin-URL wird so aussehen: `git@gitlab.com:[your-user]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen dann unser Remote-Origin (wohin wir unseren Code pushen werden) als unser Repo auf GitLab. Anschließend committen wir alle Dateien in das lokale Git-Repo und pushen diese dann an das Remote-Origin auf GitLab.

GitLab verwendet ein integriertes Werkzeug namens GitLab CI/CD, um Ihre Seite zu erstellen und auf dem GitLab Pages Server zu veröffentlichen. Die Sequenz von Skripten, die GitLab CI/CD ausführt, um diese Aufgabe zu erledigen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezieller Job namens `pages` in der Konfigurationsdatei wird GitLab darauf aufmerksam machen, dass Sie eine GitLab Pages-Website bereitstellen.

Lassen Sie uns dies jetzt versuchen.

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

   Hier sagen wir GitLab, dass es ein Image mit der neuesten Version von Node verwenden soll, um unsere App zu erstellen. Als Nächstes deklarieren wir einen `pages`-Job, um GitLab Pages zu aktivieren. Wann immer es einen Push zu unserem Repo gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu erstellen. Wir sagen GitLab auch, dass es den Inhalt des Ordners `public` bereitstellen soll. In der letzten Zeile konfigurieren wir GitLab so, dass unsere App nur dann erneut bereitgestellt wird, wenn es einen Push zu unserem Haupt-Branch gibt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://your-user.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html`-Datei relativ machen. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) von den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, so:

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

Wann immer ein Job läuft, zeigt GitLab ein Symbol, das den Prozess des Jobs anzeigt. Klicken darauf ermöglicht es Ihnen, die Ausgabe des Jobs zu inspizieren.

![gitlab screenshot showing a deployed commit, which add a gitlab ci file, and changes bundle paths to relative](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs aus dem Menüpunkt _CI / CD_ > _Jobs_ Ihres GitLab-Projekts prüfen.

![a gitlab ci job shown in the gitlab ui, running a lot of commands](02-gitlab-pages-job.png)

Sobald GitLab das Erstellen und Veröffentlichen Ihrer App abgeschlossen hat, wird sie unter `https://your-user.gitlab.io/mdn-svelte-todo/` zugänglich sein; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der Benutzeroberfläche von GitLab überprüfen – sehen Sie im Menüpunkt _Settings_ > _Pages_ nach.

Mit dieser Konfiguration wird die Anwendung automatisch neu erstellt und auf GitLab Pages bereitgestellt, wann immer Sie Änderungen an das GitLab-Repo pushen.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie sich ansehen können, um Ihr Svelte-Lernen zu vertiefen.

### Svelte-Dokumentation

Um weiter voranzukommen und mehr über Svelte zu lernen, sollten Sie unbedingt die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht getan haben, sollten Sie unbedingt das [Svelte-interaktive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits den Großteil seines Inhalts abgedeckt, daher wird es nicht viel Zeit in Anspruch nehmen, es zu vervollständigen – Sie sollten es als Übung ansehen!

Sie können auch die [Svelte-API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Beweggründe hinter Svelte zu verstehen, sollten Sie sich die Präsentation [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) von [Rich Harris](https://x.com/Rich_Harris) auf YouTube ansehen. Er ist der Schöpfer von Svelte, daher hat er ein paar Dinge dazu zu sagen. Sie haben auch die interaktiven Folien hier zur Verfügung, die, wenig überraschend, mit Svelte gebaut wurden. Wenn es Ihnen gefallen hat, werden Sie auch die Präsentation [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) genießen, die Rich Harris auf der [JSCAMP 2019](https://jscamp.tech/2019/) gegeben hat.

### Verwandte Projekte

Es gibt andere Projekte im Zusammenhang mit Svelte, die es wert sind, untersucht zu werden:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungs-Framework, das von Svelte angetrieben wird und serverseitiges Rendering (SSR), Code-Splitting, dateibasierte Routing- und Offline-Unterstützung und mehr bietet. Denken Sie daran als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt unbedingt ansehen.
- [Svelte Native](https://svelte.nativescript.org/): Ein mobiles Anwendungs-Framework, das von Svelte angetrieben wird. Denken Sie daran als [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS-Code-Plugin zum Arbeiten mit `.svelte`-Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) betrachtet haben.

### Weitere Lernressourcen

- Es gibt einen [kompletten Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Web, daher ist es schwierig, eine Empfehlung auszusprechen.
- Dennoch ist [Svelte.js — Der vollständige Leitfaden](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist auch eine nützliche Referenz zum Lernen der grundlegenden Svelte-Konzepte.
- Wenn Sie es vorziehen, Bücher zu lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das Sie [online kostenlos anschauen](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome) können.
- Wenn Sie tiefer eintauchen und das Innenleben von Sveltes Compiler verstehen möchten, sollten Sie [Tan Li Hau](https://x.com/lihautan)'s Blogbeiträge [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) lesen.

### Interaktion mit der Gemeinschaft

Es gibt mehrere Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community in Kontakt zu treten:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Sveltes Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Svelte-Community Twitter-Account.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-gesteuertes Repository mit Rezepten, Tipps und Best Practices zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte`-Tag bei SO.
- [Svelte-Reddit-Community](https://www.reddit.com/r/sveltejs/): Svelte-Community-Diskussion und Inhaltsbewertung auf Reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte dazu übergegangen, eine vollständige Anwendung zu erstellen und bereitzustellen.

- Wir haben über die Svelte-Philosophie und was es von anderen Frontend-Frameworks unterscheidet gelernt.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Wege erkundet, Informationen zwischen ihnen zu teilen.
- Wir haben das Svelte-Reaktivitätssystem genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und die Funktionen von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Web-Speicher zu speichern.
- Wir haben auch die TypeScript-Unterstützung von Svelte betrachtet.

In diesem Artikel haben wir über ein paar unkomplizierte Möglichkeiten gelernt, unsere App in der Produktion bereitzustellen und gesehen, wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit auf GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen zur Verfügung gestellt, um Ihr Svelte-Lernen zu vertiefen.

Herzlichen Glückwunsch! Nach Abschluss dieser Serie von Tutorials sollten Sie eine solide Grundlage haben, um professionelle Webanwendungen mit Svelte zu entwickeln.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
