---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Svelte-Artikel werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Die Inhalte werden im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Im vorherigen Artikel haben wir die TypeScript-Unterstützung von Svelte kennengelernt und wie Sie diese nutzen können, um Ihre Anwendung robuster zu machen. In diesem letzten Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online bringen können, und auch einige Ressourcen teilen, die Sie weiterverfolgen sollten, um Ihre Svelte-Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          über Kenntnisse zu
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Befehlszeile</a
          > verfügen.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node + npm, um Ihre Anwendung zu kompilieren und zu erstellen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, wie Sie Ihre Svelte-App für die Produktion vorbereiten und welche Lernressourcen Sie als Nächstes besuchen sollten.
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

Dann, um den aktuellen Zustand der App zu erreichen, führen Sie aus

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Kompilieren unserer App

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js` Datei und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css` zu kompilieren. Es startet auch einen Entwicklungsserver und überwacht Änderungen, kompiliert die App neu und aktualisiert die Seite, wenn eine Änderung auftritt.

Ihre generierten `bundle.js` und `bundle.css` Dateien werden etwa so aussehen (Dateigröße auf der linken Seite):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder weiterhin auf Änderungen warten. Es wird jedoch unsere JavaScript-Dateien unter Verwendung von [terser](https://terser.org/) minimieren und komprimieren.

Nach dem Ausführen von `npm run build` werden unsere generierten `bundle.js` und `bundle.css` Dateien mehr in dieser Art sein:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie, `npm run build` im Stammverzeichnis Ihrer App jetzt auszuführen. Sie könnten eine Warnung erhalten, aber Sie können diese momentan ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8,3 KB beim Gzip-Komprimieren. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten zum Herunterladen, Parsen, Ausführen und im Speicher zu behalten. Svelte hat unsere Komponenten analysiert und den Code in Vanilla JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig verwendet Svelte, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, [rollup](https://rollupjs.org/) als Modulpaketierer.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage zur Verwendung von [webpack](https://webpack.js.org/) und viele [community-gestützte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Paketierer.

In der Datei `package.json` können Sie sehen, dass die `build` und `dev` Skripte nur rollup aufrufen:

```json
{
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "sirv public"
  }
}
```

Im `dev` Skript übergeben wir das `-w` Argument, das rollup anweist, Dateien zu überwachen und bei Änderungen neu zu bauen.

Wenn wir einen Blick auf die `rollup.config.js` Datei werfen, können wir sehen, dass der Svelte-Compiler nur ein rollup Plugin ist:

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

Später in derselben Datei werden Sie auch sehen, wie rollup unsere Skripts im Produktionsmodus minimiert und einen lokalen Server im Entwicklungsmodus startet:

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

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das auch vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorverarbeitet.

## Bereitstellung Ihrer Svelte-Anwendung

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nichts weiter als eine Sammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Ihnen viele Optionen zur Verfügung stehen. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Websites optimiert ist und out-of-the-box-Unterstützung für die gängigsten Frontend-Tools bietet, Svelte eingeschlossen.

Um unsere App bereitzustellen, befolgen Sie diese Schritte.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal müssen Sie Ihre E-Mail-Adresse eingeben und den Schritten in der Ihnen zugesandten E-Mail aus Sicherheitsgründen folgen.
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

4. Akzeptieren Sie alle Standardwerte, und es wird alles in Ordnung sein.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie in Ihrem Browser zur URL "Production" und Sie sehen die bereitgestellte App!

Sie können auch ein [Svelte-Git-Projekt nach Vercel importieren](https://vercel.com/import/svelte) von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, sodass Sie nicht `npx` verwenden müssen, um es auszuführen.

### Automatische Bereitstellung auf GitLab Pages

Für das Hosting von statischen Dateien gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wenn Sie Änderungen an einem Git-Repository vornehmen. Die meisten von ihnen beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um den Build und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todos-App auf [GitLab Pages](https://docs.gitlab.com/user/project/pages/) bereitstellen.

1. Zunächst müssen Sie sich bei [GitLab registrieren](https://gitlab.com/users/sign_up) und dann ein [neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie erhalten eine Remote-URL, die auf Ihr neues GitLab-Git-Repository zeigt, wie `git@gitlab.com:[Ihr-Benutzer]/[Ihr-Projekt].git`.
2. Bevor Sie mit dem Hochladen von Inhalten in Ihr Git-Repository beginnen, ist es eine gute Praxis, eine `.gitignore` Datei hinzuzufügen, um Git mitzuteilen, welche Dateien aus der Quellcodeverwaltung ausgeschlossen werden sollen. In unserem Fall werden wir Git anweisen, Dateien im `node_modules` Verzeichnis auszuschließen, indem wir eine `.gitignore` Datei im Stammverzeichnis Ihres lokalen Projekts erstellen, mit folgendem Inhalt:

   ```bash
   node_modules/
   ```

3. Kehren wir nun zu GitLab zurück. Nach dem Erstellen eines neuen Repos wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen zum Hochladen Ihrer vorhandenen Dateien erklärt. Befolgen Sie die Schritte, die unter dem _Push an existing folder_ Überschrift aufgeführt sind:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten das [`git` Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Sie davor bewahrt, bei jedem Zugriff auf Ihr Origin-Repo Ihren Benutzernamen und Ihr Passwort einzugeben. Dazu müssen Sie ein [SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair). Ihre Origin-URL sieht so aus: `git@gitlab.com:[Ihr-Benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen dann unseren Remote-Ursprung (wohin wir unseren Code pushen werden) als unser Repository auf GitLab. Als Nächstes commiten wir alle Dateien in das lokale Git-Repo und pushen diese dann zum Remote-Ursprung auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Website zu erstellen und auf dem GitLab Pages-Server zu veröffentlichen. Die Abfolge der Skripte, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein im Konfigurationsfile genannter Job namens `pages` wird GitLab darauf aufmerksam machen, dass Sie eine GitLab Pages-Website bereitstellen.

Versuchen wir es jetzt.

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

   Hier teilen wir GitLab mit, dass es ein Image mit der neuesten Version von Node verwenden soll, um unsere App zu erstellen. Als Nächstes deklarieren wir einen `pages` Job, um GitLab Pages zu aktivieren. Wann immer ein Push in unser Repository erfolgt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu erstellen. Wir teilen GitLab auch mit, die Inhalte des `public` Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab so, dass unsere App nur dann erneut bereitgestellt wird, wenn ein Push in unseren Hauptbranch erfolgt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://your-user.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html` Datei relativ machen. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) aus den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, wie folgt:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Machen Sie dies jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen auf GitLab committen und pushen. Tun Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Wann immer ein Job läuft, zeigt GitLab ein Icon, das den Fortschritt des Jobs anzeigt. Ein Klick darauf ermöglicht es Ihnen, die Ausgabe des Jobs zu inspizieren.

![GitLab-Screenshot eines bereitgestellten Commits, der eine GitLab-CI-Datei hinzufügt und Bundle-Pfade auf relativ ändert](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs über die Menüoption _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![Ein GitLab CI Job im GitLab UI, der viele Befehle ausführt](02-gitlab-pages-job.png)

Sobald GitLab die Erstellung und Veröffentlichung Ihrer App abgeschlossen hat, ist sie unter `https://your-user.gitlab.io/mdn-svelte-todo/` zugänglich; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-Benutzeroberfläche überprüfen — siehe die Menüoption _Settings_ > _Pages_.

Mit dieser Konfiguration wird die Anwendung automatisch neu erstellt und auf GitLab Pages bereitgestellt, wann immer Sie Änderungen an das GitLab-Repo pushen.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte, die Sie sich ansehen sollten, um Ihr Svelte-Lernen weiter zu vertiefen.

### Svelte-Dokumentation

Um weiter zu lernen und mehr über Svelte zu erfahren, sollten Sie auf jeden Fall die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht getan haben, sollten Sie unbedingt das [interaktive Svelte-Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits die meisten Inhalte behandelt, sodass es nicht viel Zeit in Anspruch nehmen wird, es zu vervollständigen — Sie sollten es als Übung betrachten!

Sie können auch die [Svelte-API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Beweggründe hinter Svelte zu verstehen, sollten Sie sich Rich Harris’ [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) Präsentation auf YouTube ansehen. Er ist der Schöpfer von Svelte, er hat also einiges darüber zu sagen. Die interaktiven Folien sind hier verfügbar und sind, wenig überraschend, mit Svelte gebaut. Wenn es Ihnen gefallen hat, werden Sie auch die Präsentation [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) genießen, die Rich Harris bei [JSCAMP 2019](https://jscamp.tech/2019/) gegeben hat.

### Zugehörige Projekte

Es gibt noch andere Projekte im Zusammenhang mit Svelte, die es wert sind, angesehen zu werden:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungs-Framework, das von Svelte betrieben wird und serverseitiges Rendering (SSR), Code-Splitting, Dateibasierte Routenführung, Offline-Unterstützung und mehr bietet. Denken Sie daran wie [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt unbedingt ansehen.
- [Svelte Native](https://svelte.nativescript.org/): Ein mobile Anwendung-Framework, betrieben von Svelte. Denken Sie daran wie [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code Plugin für die Arbeit mit `.svelte` Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) betrachtet haben.

### Andere Lernressourcen

- Es gibt einen [kompletten Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Internet, daher ist es schwierig, eine Empfehlung auszusprechen.
- Nichtsdestotrotz ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist auch eine nützliche Referenz, um die wichtigsten Svelte-Konzepte zu lernen.
- Wenn Sie lieber Bücher lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das [Sie online einsehen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome) kostenlos.
- Wenn Sie tiefer einsteigen und die inneren Abläufe des Svelte-Compilers verstehen möchten, sollten Sie sich [Tan Li Hau](https://x.com/lihautan)’s [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) Blog-Beiträge ansehen.

### Mit der Community interagieren

Es gibt eine Reihe von Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Svelte's Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Twitter-Account der Svelte-Community.
- [Svelte-Rezepte](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-getriebenes Repository von Rezepten, Tipps und Best Practices zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte` Tag bei SO.
- [Svelte Reddit Community](https://www.reddit.com/r/sveltejs/): Svelte Community Diskussions- und Content-Bewertungsseite auf Reddit.
- [Svelte DEV Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Kenntnissen über Svelte zum Erstellen und Bereitstellen einer vollständigen Anwendung übergegangen.

- Wir haben Svelte Philosophie kennengelernt und was Svelte von anderen Frontend-Frameworks unterscheidet.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten findet, Informationen unter ihnen zu teilen.
- Wir haben das Svelte-Reaktivitätssystem genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und die HTML-Element-Fähigkeiten programmgesteuert mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Web Storage zu speichern.
- Wir haben auch einen Blick auf Svelte's TypeScript-Unterstützung geworfen.

In diesem Artikel haben wir einige unkomplizierte Optionen kennengelernt, um unsere App in Produktion bereitzustellen und gesehen, wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit auf GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen zur Verfügung gestellt, um Ihr Svelte-Lernen weiter voranzutreiben.

Herzlichen Glückwunsch! Nach Abschluss dieser Serie von Tutorials sollten Sie eine solide Basis haben, von der aus Sie professionelle Webanwendungen mit Svelte entwickeln können.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
