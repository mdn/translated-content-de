---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im vorherigen Artikel haben wir über Sveltes TypeScript-Unterstützung gelernt und wie man sie nutzt, um Ihre Anwendung robuster zu machen. In diesem letzten Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online bringen können, und wir teilen auch einige Ressourcen, die Sie weiter nutzen sollten, um Ihre Svelte-Lernreise fortzusetzen.

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
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandzeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem node + npm, um Ihre App zu kompilieren und zu erstellen.
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

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um den aktuellen Status der App zu erreichen, führen Sie dann aus:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Unsere App kompilieren

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten- und JavaScript-Dateien in eine `public/build/bundle.js`-Datei und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css` zu kompilieren. Es startet auch einen Entwicklungsserver und beobachtet Änderungen, kompiliert die App neu und aktualisiert die Seite, wenn eine Änderung auftritt.

Ihre generierten `bundle.js`- und `bundle.css`-Dateien werden in etwa so aussehen (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder Änderungen überwachen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minimieren und komprimieren.

Nach dem Ausführen von `npm run build` werden unsere generierten `bundle.js`- und `bundle.css`-Dateien eher so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, aber Sie können diese vorerst ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8,3 KB, wenn sie gezippt ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, analysiert, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code zu gewöhnlichem JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-projekt` erstellen, verwendet Svelte [rollup](https://rollupjs.org/) als Modulbündler.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Verwendung von [webpack](https://webpack.js.org/) und viele [gemeinschaftlich gepflegte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bündler.

In der Datei `package.json` können Sie sehen, dass die `build`- und `dev`-Skripte einfach rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev`-Skript übergeben wir das Argument `-w`, das rollup anweist, Dateien zu überwachen und bei Änderungen neu zu erstellen.

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

Später in derselben Datei können Sie auch sehen, wie rollup unsere Skripte im Produktionsmodus minimiert und im Entwicklungsmodus einen lokalen Server startet:

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

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das ebenfalls vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorverarbeitet.

## Bereitstellung Ihrer Svelte-Anwendung

Aus der Perspektive eines Webservers ist eine Svelte-Anwendung nichts weiter als eine Ansammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie viele Optionen zur Auswahl haben. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Seiten entwickelt wurde und von Haus aus die meisten gängigen Frontend-Tools unterstützt, darunter auch Svelte.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und den Schritten in der an diese Adresse gesendeten E-Mail aus Sicherheitsgründen zu folgen.
3. Führen Sie `npx vercel` erneut aus, und Sie werden aufgefordert, ein paar Fragen zu beantworten, wie zum Beispiel:

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

4. Akzeptieren Sie alle Standardwerte, und es klappt.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Production"-URL in Ihrem Browser, und Sie werden sehen, dass die App bereitgestellt ist!

Sie können auch [ein Svelte-Git-Projekt](https://vercel.com/import/svelte) aus [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/) in Vercel importieren.

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, damit Sie es nicht mit `npx` ausführen müssen.

### Automatische Bereitstellung auf GitLab Pages

Für das Hosting statischer Dateien gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen an ein Git-Repository pushen. Die meisten von ihnen beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um den Bau und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todo-App auf [GitLab Pages](https://docs.gitlab.com/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich [bei GitLab registrieren](https://gitlab.com/users/sign_up) und dann [ein neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, leicht zu merkenden Namen wie "mdn-svelte-todo". Sie haben eine Remote-URL, die auf Ihr neues GitLab-Git-Repository zeigt, wie `git@gitlab.com:[Ihr-Benutzer]/[Ihr-Projekt].git`.
2. Bevor Sie beginnen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien von der Versionskontrolle ausgeschlossen werden sollen. In unserem Fall werden wir Git anweisen, Dateien im Verzeichnis `node_modules` auszuschließen, indem wir eine `.gitignore`-Datei im Stammverzeichnis Ihres lokalen Projekts erstellen, mit folgendem Inhalt:

   ```bash
   node_modules/
   ```

3. Gehen wir nun zurück zu GitLab. Nachdem Sie ein neues Repository erstellt haben, begrüßt Sie GitLab mit einer Nachricht, die verschiedene Optionen zur Hochladung Ihrer bestehenden Dateien erklärt. Befolgen Sie die unter der Überschrift _Push an existing folder_ aufgeführten Schritte:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten das [Protokoll `git`](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Ihnen das Eingeben Ihres Benutzernamens und Passworts jedes Mal erspart, wenn Sie auf Ihr Origin-Repo zugreifen. Um es zu verwenden, müssen Sie ein [SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair). Ihre Origin-URL wird so aussehen: `git@gitlab.com:[Ihr-Benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository und setzen dann unser Remote-Originkonfiguration (wohin wir unseren Code pushen) auf unser Repository bei GitLab. Als nächstes committen wir alle Dateien in das lokale Git-Repository und pushen diese dann auf den Remote-Server bei GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Site zu bauen und sie auf dem GitLab Pages-Server zu veröffentlichen. Die Sequenz von Scripts, die GitLab CI/CD zur Erreichung dieser Aufgabe ausführt, wird durch eine Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und modifizieren können. Ein spezifischer Job namens `pages` in der Konfigurationsdatei wird GitLab darauf aufmerksam machen, dass Sie eine GitLab Pages-Website bereitstellen.

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

   Hier teilen wir GitLab mit, ein Bild mit der neuesten Version von Node zu verwenden, um unsere App zu erstellen. Als nächstes deklarieren wir einen `pages` Job, um GitLab Pages zu aktivieren. Wann immer es einen Push zu unserem Repo gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir sagen GitLab auch, dass es die Inhalte des `public` Verzeichnisses bereitstellen soll. In der letzten Zeile konfigurieren wir GitLab so, dass unsere App nur dann neu bereitgestellt wird, wenn es einen Push zu unserem Hauptbranch gibt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://ihr-benutzer.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html` Datei relativ machen. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) von den URLs `global.css`, `build/bundle.css` und `build/bundle.js`, so:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Tun Sie dies jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen an GitLab committen und pushen. Führen Sie dazu die folgenden Befehle aus:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Wann immer ein Job läuft, wird GitLab ein Symbol anzeigen, das den Prozess des Jobs anzeigt. Durch Klicken darauf können Sie die Ausgabe des Jobs inspizieren.

![GitLab-Screenshot, der einen bereitgestellten Commit zeigt, der eine .gitlab-ci-Datei hinzufügt und die Bundle-Pfade in relative Pfade ändert](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs über die Menüoption _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![Ein GitLab CI Job im GitLab UI gezeigt, der viele Befehle ausführt](02-gitlab-pages-job.png)

Sobald GitLab Ihre Anwendung gebaut und veröffentlicht hat, wird sie unter `https://ihr-benutzer.gitlab.io/mdn-svelte-todo/` zugänglich sein; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite im GitLab UI überprüfen — siehe die Menüoption _Einstellungen_ > _Seiten_.

Mit dieser Konfiguration wird die Anwendung bei jedem Push in das GitLab-Repo automatisch neu gebaut und an GitLab Pages bereitgestellt.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie sich ansehen sollten, um Ihr Svelte-Wissen weiter zu vertiefen.

### Svelte-Dokumentation

Um weiterzugehen und mehr über Svelte zu lernen, sollten Sie definitiv die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht getan haben, sollten Sie unbedingt das [interaktive Svelte-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits den Großteil seines Inhalts behandelt, daher wird es nicht viel Zeit in Anspruch nehmen, es abzuschließen — Sie sollten es als Übung betrachten!

Sie können auch die [Svelte-API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Motivation hinter Svelte zu verstehen, sollten Sie sich [Rich Harris](https://x.com/Rich_Harris)'s [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) Präsentation auf YouTube ansehen. Er ist der Schöpfer von Svelte, also hat er ein paar Dinge darüber zu sagen. Sie haben auch die interaktiven Folien verfügbar, die, wenig überraschend, mit Svelte erstellt wurden. Wenn es Ihnen gefallen hat, werden Sie auch [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) Präsentation genießen, die Rich Harris auf der [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte im Zusammenhang mit Svelte, die es wert sind, überprüft zu werden:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungs-Framework basierend auf Svelte, das serverseitiges Rendering (SSR), Code-Splitting, dateibasierte Routing und Offline-Unterstützung und mehr bietet. Denken Sie daran wie [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt unbedingt ansehen.
- [Svelte Native](https://svelte-native.technology/): Ein mobiles Anwendungsframework basierend auf Svelte. Denken Sie daran wie [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin zum Arbeiten mit `.svelte`-Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) betrachtet haben.

### Weitere Lernressourcen

- Es gibt einen [kompletten Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Auch wenn Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Internet, sodass es schwierig ist, eine Empfehlung auszusprechen.
- Nichtsdestotrotz ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit hervorragenden Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/) von [Flavio Copes](https://flaviocopes.com/) ist auch ein nützliches Nachschlagewerk, um die wichtigsten Svelte-Konzepte zu lernen.
- Wenn Sie lieber Bücher lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das Sie [online kostenlos vorlesen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome).
- Wenn Sie tiefer eintauchen und das innere Funktionieren des Svelte-Compilers verstehen möchten, sollten Sie sich [Tan Li Hau](https://x.com/lihautan)'s [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) Blogbeiträge ansehen.

### Interaktion mit der Community

Es gibt eine Reihe von Möglichkeiten, um Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Der Discord-Server von Svelte.
- [@sveltejs](https://x.com/sveltejs): Das offizielle Twitter-Konto.
- [@sveltesociety](https://x.com/sveltesociety): Svelte Community Twitter-Konto.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-getriebenes Repository von Rezepten, Tipps und Best Practices zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem Tag `svelte` bei SO.
- [Svelte-Reddit-Community](https://www.reddit.com/r/sveltejs/): Svelte-Community-Diskussionen und Bewertungsseite bei Reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte zu Aufbau und Bereitstellung einer vollständigen Anwendung übergegangen.

- Wir haben gelernt, was die Philosophie von Svelte ist und was es von anderen Frontend-Frameworks unterscheidet.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten, Informationen unter ihnen zu teilen.
- Wir haben das Svelte-Reaktivitätssystem genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und HTML-Elementfähigkeiten programmatisch mit der `use` Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung in Web Storage zu speichern.
- Wir haben uns auch die TypeScript-Unterstützung von Svelte angesehen.

In diesem Artikel haben wir über ein paar mühelose Optionen gelernt, um unsere App in der Produktion bereitzustellen, und gesehen, wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit auf GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen gegeben, um weiter mit Ihrem Svelte-Lernen voranzukommen.

Herzlichen Glückwunsch! Nach dem Abschluss dieser Reihe von Tutorials sollten Sie eine starke Basis haben, von der aus Sie beginnen können, professionelle Webanwendungen mit Svelte zu entwickeln.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
