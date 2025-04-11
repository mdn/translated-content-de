---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im vorherigen Artikel haben wir über die TypeScript-Unterstützung von Svelte gelernt und wie Sie es nutzen können, um Ihre Anwendung robuster zu machen. In diesem abschließenden Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online verfügbar machen können, und auch einige Ressourcenvorschläge teilen, die Sie für Ihre weitere Svelte-Lernreise nutzen sollten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen vertraut sind, und
          über Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Kommandozeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie wir unsere Svelte-App für die Produktion vorbereiten können, und welche Lernressourcen Sie als nächstes besuchen sollten.
      </td>
    </tr>
  </tbody>
</table>

## Gemeinsam mit uns programmieren

### Git

Klonen Sie das GitHub-Repository (falls noch nicht geschehen) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen App-Stand zu erreichen, führen Sie

```bash
cd mdn-svelte-tutorial/08-next-steps
```

aus. Oder laden Sie den Inhalt des Ordners direkt herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Unsere App kompilieren

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js` Datei zu kompilieren und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css`. Es startet auch einen Entwicklungsserver und überwacht Änderungen, wobei die App neu kompiliert und die Seite aktualisiert wird, wenn eine Änderung auftritt.

Ihre generierten `bundle.js` und `bundle.css` Dateien sehen in etwa so aus (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder weiterhin auf Änderungen überwachen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minifizieren und komprimieren.

Nach dem Ausführen von `npm run build` werden unsere generierten `bundle.js` und `bundle.css` Dateien mehr so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie nun, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, die Sie vorerst ignorieren können.

Unsere gesamte App ist jetzt nur noch 21 KB — 8,3 KB bei Gzip-Komprimierung. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten zum Herunterladen, Parsen, Ausführen und im Speicher zu halten. Svelte hat unsere Komponenten analysiert und den Code in Vanilla JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig verwendet Svelte [rollup](https://rollupjs.org/) als Modul-Bundler, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage zur Verwendung von [webpack](https://webpack.js.org/) und viele [community-erstellte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bundler.

In der Datei `package.json` können Sie sehen, dass die `build` und `dev` Skripte einfach rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev` Skript übergeben wir das Argument `-w`, das rollup anweist, Dateien zu beobachten und bei Änderungen neu zu bauen.

Wenn wir uns die Datei `rollup.config.js` ansehen, können wir sehen, dass der Svelte-Compiler nur ein rollup-Plugin ist:

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

Später in derselben Datei sehen Sie auch, wie rollup unsere Skripte im Produktionsmodus minimiert und einen lokalen Server im Entwicklungsmodus startet:

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

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), die Ihnen erlauben, Verhalten anzupassen. Ein besonders nützliches Plugin, das auch vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien vorverarbeitet, wie PostCSS, SCSS, Less, CoffeeScript, SASS, und TypeScript.

## Bereitstellen Ihrer Svelte-Anwendung

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nicht mehr als eine Reihe von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine speziell für statische Seiten entwickelte Cloud-Plattform, die Out-of-the-Box-Unterstützung für die meisten gängigen Frontend-Tools bietet, darunter Svelte.

Um unsere App bereitzustellen, befolgen Sie diese Schritte.

1. [registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; das erste Mal, wenn Sie dies tun, werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und den Schritten in der an diese Adresse gesendeten E-Mail zu folgen, aus Sicherheitsgründen.
3. Führen Sie `npx vercel` erneut aus, und Sie werden aufgefordert, ein paar Fragen zu beantworten, wie diese:

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

4. Akzeptieren Sie alle Standardeinstellungen und Sie sind bereit.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Production" URL in Ihrem Browser, und Sie sehen die bereitgestellte App!

Sie können auch [ein Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) aus [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global installieren mit `npm i -g vercel`, damit Sie es nicht mit `npx` ausführen müssen.

### Automatische Bereitstellung auf GitLab Pages

Es gibt mehrere Online-Dienste für das Hosting statischer Dateien, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen an ein Git-Repository pushen. Die meisten von ihnen erfordern die Einrichtung einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um den Aufbau und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todos-App auf [GitLab Pages](https://docs.gitlab.com/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich bei [GitLab registrieren](https://gitlab.com/users/sign_up) und dann [ein neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie haben eine Remote-URL, die auf Ihr neues GitLab-Git-Repository zeigt, zum Beispiel `git@gitlab.com:[Ihr-Benutzer]/[Ihr-Projekt].git`.
2. Bevor Sie beginnen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore` Datei hinzuzufügen, um Git anzuweisen, welche Dateien vom Quellsteuerung auszuschließen sind. In unserem Fall werden wir Git anweisen, Dateien im `node_modules` Verzeichnis auszuschließen, indem wir eine `.gitignore` Datei im Stammordner Ihres lokalen Projekts erstellen, mit folgendem Inhalt:

   ```bash
   node_modules/
   ```

3. Kehren wir nun zu GitLab zurück. Nach dem Erstellen eines neuen Repositories begrüßt GitLab Sie mit einer Nachricht, die verschiedene Optionen zum Hochladen Ihrer vorhandenen Dateien erklärt. Befolgen Sie die Schritte unter der Überschrift _Push an existing folder_:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten [das `git`-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, das schneller ist und Sie davon befreit, jedes Mal Ihren Benutzernamen und Ihr Passwort einzugeben, wenn Sie auf Ihr Ursprungs-Repo zugreifen. Dazu müssen Sie [ein SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair). Ihre Ursprungs-URL wird so aussehen: `git@gitlab.com:[Ihr-Benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen dann unseren Remote-Ursprung (wohin wir unseren Code pushen werden) als unser Repo auf GitLab. Als nächstes committen wir alle Dateien in das lokale Git-Repo und pushen diese dann zum Remote-Ursprung auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Website zu bauen und auf den GitLab Pages Server zu veröffentlichen. Die Abfolge der Skripte, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezifischer Job namens `pages` in der Konfigurationsdatei wird GitLab darüber informieren, dass Sie eine GitLab Pages-Website bereitstellen.

Versuchen wir es jetzt mal.

1. Erstellen Sie eine `.gitlab-ci.yml` Datei im Stammverzeichnis Ihres Projekts und geben Sie ihr den folgenden Inhalt:

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

   Hier teilen wir GitLab mit, ein Image mit der neuesten Version von Node zu verwenden, um unsere App zu erstellen. Als Nächstes deklarieren wir einen `pages`-Job, um GitLab Pages zu aktivieren. Wann immer es einen Push zu unserem Repo gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir teilen GitLab auch mit, die Inhalte des `public` Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab, um unsere App nur dann neu bereitzustellen, wenn es einen Push zu unserem Hauptzweig gibt.

2. Da unsere App in einem Unterordner veröffentlicht wird (wie `https://your-user.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html` Datei relativ gestalten. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) von den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, wie folgt:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Machen Sie dies jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen in GitLab committen und pushen. Tun Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Wann immer ein Job läuft, wird GitLab ein Symbol anzeigen, das den Prozess des Jobs zeigt. Wenn Sie darauf klicken, können Sie die Ausgabe des Jobs inspizieren.

![GitLab-Screenshot zeigt einen bereitgestellten Commit, der eine GitLab-CI-Datei hinzufügt und die Bundle-Pfade relativ ändert](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs über die Menüoption _CI / CD_ > _Jobs_ in Ihrem GitLab-Projekt überprüfen.

![Ein GitLab-CI-Job, der in der GitLab-Oberfläche angezeigt wird und eine Menge Befehle ausführt](02-gitlab-pages-job.png)

Sobald GitLab mit dem Erstellen und Veröffentlichen Ihrer App fertig ist, ist sie unter `https://your-user.gitlab.io/mdn-svelte-todo/` zugänglich; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-Benutzeroberfläche überprüfen — siehe die Menüoption _Settings_ > _Pages_.

Mit dieser Konfiguration wird die Anwendung automatisch neu erstellt und auf GitLab Pages bereitgestellt, wann immer Sie Änderungen im GitLab-Repo pushen.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie sich ansehen sollten, um Ihr Svelte-Lernen zu vertiefen.

### Svelte-Dokumentation

Um weiter zu lernen und mehr über Svelte zu erfahren, sollten Sie definitiv die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht getan haben, sollten Sie unbedingt das [Svelte-interaktive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits den Großteil seines Inhalts behandelt, sodass es nicht viel Zeit in Anspruch nehmen wird, es abzuschließen — Sie sollten es als Übung ansehen!

Sie können auch die [Svelte-API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Motivationen hinter Svelte zu verstehen, sollten Sie sich [Rich Harris](https://x.com/Rich_Harris)'s Vortrag [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) auf YouTube ansehen. Er ist der Schöpfer von Svelte und hat ein paar Dinge dazu zu sagen. Sie haben auch die interaktiven Folien hier verfügbar, die, wenig überraschend, mit Svelte erstellt wurden. Wenn es Ihnen gefallen hat, werden Sie auch den Vortrag [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) genießen, den Rich Harris auf der [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte im Zusammenhang mit Svelte, die es wert sind, überprüft zu werden:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungsframework, das von Svelte betrieben wird und serverseitiges Rendering (SSR), Code-Splitting, Datei-basiertes Routing und Offline-Unterstützung sowie mehr bietet. Denken Sie an es als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie eine ziemlich komplexe Webanwendung entwickeln möchten, sollten Sie sich dieses Projekt unbedingt ansehen.
- [Svelte Native](https://svelte.nativescript.org/): Ein mobiles Anwendungsframework, das von Svelte betrieben wird. Denken Sie an es als [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code Plugin, um mit `.svelte` Dateien zu arbeiten, welches wir in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) betrachtet haben.

### Weitere Lernressourcen

- Es gibt einen [vollständigen Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es auf dem Web viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity), sodass es schwer ist, eine Empfehlung auszusprechen.
- Nichtsdestotrotz ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist ebenfalls eine nützliche Referenz zum Erlernen der wichtigsten Svelte-Konzepte.
- Wenn Sie Bücher bevorzugen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das [Sie online kostenlos anschauen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome).
- Wenn Sie tiefer eintauchen und das innere Funktionieren des Svelte-Compilers verstehen möchten, sollten Sie sich [Tan Li Hau](https://x.com/lihautan)'s Blogposts [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) ansehen.

### Mit der Community interagieren

Es gibt verschiedene Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Svelte's Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Svelte-Community-Twitter-Account.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Ein von der Community betriebenes Repository mit Rezepten, Tipps und Best Practices zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte` Tag bei SO.
- [Svelte Reddit-Community](https://www.reddit.com/r/sveltejs/): Svelte-Community-Diskussion und Bewertungsseite bei Reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln haben wir von null Wissen über Svelte bis zum Aufbau und der Bereitstellung einer vollständigen Anwendung gearbeitet.

- Wir haben über Svelte-Philosophie und was es von anderen Frontend-Frameworks unterscheidet gelernt.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten, Informationen zwischen ihnen zu teilen.
- Wir haben das Svelte-Reaktivitätssystem genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und die Fähigkeiten von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Web Storage zu speichern.
- Wir haben uns auch die Unterstützung von TypeScript durch Svelte angesehen.

In diesem Artikel haben wir erfahren, welche einfachen Optionen es gibt, um unsere App in der Produktion bereitzustellen, und wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit auf GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen zur Verfügung gestellt, um Ihr Svelte-Lernen weiterzuführen.

Herzlichen Glückwunsch! Nach dem Abschluss dieser Tutorials-Serie sollten Sie eine starke Basis haben, von der aus Sie beginnen können, professionelle Webanwendungen mit Svelte zu entwickeln.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
