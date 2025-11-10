---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im vorherigen Artikel haben wir Sveltes TypeScript-Unterstützung kennengelernt und erfahren, wie Sie damit Ihre Anwendung robuster gestalten können. In diesem abschließenden Artikel werden wir uns ansehen, wie Sie Ihre Anwendung bereitstellen und online stellen können, und einige Ressourcen teilen, die Sie für Ihre weitere Svelte-Lernreise besuchen sollten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mindestens mit den Kernsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem node + npm, um Ihre App zu kompilieren und zu bauen.
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

## Programmieren Sie mit uns

### Git

Klonen Sie das GitHub-Repository (falls Sie dies noch nicht getan haben) mit:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Um zum aktuellen Anwendungszustand zu gelangen, führen Sie aus

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Vergessen Sie nicht, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Kompilieren unserer App

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits zuvor gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js`-Datei und alle CSS-Bereiche unserer Komponenten in `public/build/bundle.css` zu kompilieren. Es startet auch einen Entwicklungsserver und überwacht Änderungen, um die App bei einer Änderung neu zu kompilieren und die Seite zu aktualisieren.

Ihre generierten `bundle.js`- und `bundle.css`-Dateien sehen in etwa so aus (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder weiter auf Änderungen achten. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minifizieren und komprimieren.

Nachdem Sie `npm run build` ausgeführt haben, werden unsere generierten `bundle.js`- und `bundle.css`-Dateien eher so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie nun, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Möglicherweise erhalten Sie eine Warnung, aber Sie können diese vorerst ignorieren.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8.3 KB, wenn sie gezippt ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, geparst, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code in Vanilla-JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig verwendet Svelte, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen, [rollup](https://rollupjs.org/) als Modul-Bundler.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Verwendung von [webpack](https://webpack.js.org/) sowie viele von der Gemeinschaft erstellte [Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bundler.

In der Datei `package.json` können Sie sehen, dass die `build`- und `dev`-Skripte lediglich rollup aufrufen:

```json
{
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "start": "sirv public"
  }
}
```

Im `dev`-Skript übergeben wir das Argument `-w`, das rollup anweist, Dateien zu beobachten und bei Änderungen neu zu erstellen.

Wenn wir uns die `rollup.config.js`-Datei ansehen, sehen wir, dass der Svelte-Compiler nur ein rollup-Plugin ist:

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

Es gibt [viele Plugins für rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, das Verhalten anzupassen. Ein besonders nützliches Plugin, das auch vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript vorverarbeitet.

## Bereitstellen Ihrer Svelte-Anwendung

Aus der Sicht eines Webservers ist eine Svelte-Anwendung nichts anderes als eine Sammlung von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was Ihnen viele Optionen zur Auswahl gibt. Schauen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Build-Schritt erfordert, nicht nur Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Seiten entwickelt wurde und out-of-the-box Unterstützung für die gängigsten Frontend-Tools bietet, Svelte eingeschlossen.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und die Schritte in der an diese Adresse gesendeten E-Mail zu befolgen, aus Sicherheitsgründen.
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

4. Akzeptieren Sie alle Standardeinstellungen, und es wird alles funktionieren.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Produktion"-URL in Ihrem Browser, und Sie werden die bereitgestellte App sehen!

Sie können auch [ein Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) von [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global mit `npm i -g vercel` installieren, sodass Sie nicht `npx` verwenden müssen, um es auszuführen.

### Automatische Bereitstellung für GitLab-Seiten

Um statische Dateien zu hosten, gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen in ein Git-Repository pushen. Die meisten von ihnen beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und den Bau und die Bereitstellung Ihrer Website übernimmt.

Um dies zu demonstrieren, werden wir unsere Todos-App auf [GitLab Pages](https://docs.gitlab.com/user/project/pages/) bereitstellen.

1. Zuerst müssen Sie sich [bei GitLab registrieren](https://gitlab.com/users/sign_up) und dann [ein neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie werden eine Remote-URL haben, die auf Ihr neues GitLab-Git-Repository zeigt, wie `git@gitlab.com:[Ihr-Benutzer]/[Ihr-Projekt].git`.
2. Bevor Sie beginnen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien aus der Quellsteuerung ausgeschlossen werden sollen. In unserem Fall werden wir Git anweisen, Dateien im `node_modules`-Verzeichnis auszuschließen, indem wir eine `.gitignore`-Datei im Stammordner Ihres lokalen Projekts mit folgendem Inhalt erstellen:

   ```bash
   node_modules/
   ```

3. Jetzt gehen wir zurück zu GitLab. Nachdem Sie ein neues Repository erstellt haben, wird GitLab Sie mit einer Nachricht begrüßen, die verschiedene Optionen zum Hochladen Ihrer vorhandenen Dateien erklärt. Folgen Sie den Schritten im Abschnitt _Pushen eines bestehenden Ordners_:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten das [Git-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Sie davon befreit, jedes Mal Ihren Benutzernamen und Ihr Passwort einzugeben, wenn Sie auf Ihr ursprüngliches Repository zugreifen. Dazu müssen Sie ein [SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/user/ssh/#generate-an-ssh-key-pair). Ihre Origin-URL wird so aussehen: `git@gitlab.com:[Ihr-Benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales git-Repository, setzen dann unser Remote-Repository (wohin wir unseren Code pushen werden) als unser Repository auf GitLab. Als nächstes committen wir alle Dateien in das lokale git-Repo und pushen diese dann zum Remote-Repository auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Website zu bauen und sie auf dem GitLab Pages-Server zu veröffentlichen. Die Abfolge der Skripte, die GitLab CI/CD zur Ausführung dieser Aufgabe verwendet, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Belieben erstellen und ändern können. Ein spezieller Job namens `pages` in der Konfigurationsdatei macht GitLab darauf aufmerksam, dass Sie eine GitLab Pages-Website bereitstellen.

Lassen Sie uns das jetzt umsetzen.

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

   Hier sagen wir GitLab, dass es ein Image mit der neuesten Version von node verwenden soll, um unsere App zu bauen. Dann erklären wir einen `pages`-Job, um GitLab Pages zu aktivieren. Immer wenn es ein Push zu unserem Repository gibt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu erstellen. Wir sagen GitLab auch, dass es die Inhalte des `public`-Ordners bereitstellen soll. Auf der letzten Zeile konfigurieren wir GitLab so, dass es unsere App nur dann erneut bereitstellt, wenn es einen Push zu unserem Hauptzweig gibt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (wie `https://ihr-benutzer.gitlab.io/mdn-svelte-todo`), müssen wir die Verweise auf die JavaScript- und CSS-Dateien in unserer `public/index.html`-Datei relativ machen. Dazu entfernen wir einfach die führenden Schrägstriche (`/`) aus den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, wie folgt:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Machen Sie das jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen committen und zu GitLab pushen. Führen Sie dazu die folgenden Befehle aus:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Wann immer ein Job ausgeführt wird, zeigt GitLab ein Symbol an, das den Prozess des Jobs zeigt. Ein Klick darauf ermöglicht es Ihnen, die Ausgabe des Jobs zu überprüfen.

![gitlab screenshot zeigt ein bereitgestelltes Commit, das eine gitlab ci-Datei hinzufügt und bundle-pfade relativ ändert](01-gitlab-pages-deploy.png)

Sie können den Fortschritt der aktuellen und vorherigen Jobs auch aus dem Menüpunkt _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![ein gitlab ci-job, der in der gitlab-UI angezeigt wird und viele Befehle ausführt](02-gitlab-pages-job.png)

Sobald GitLab Ihre App fertig gebaut und veröffentlicht hat, wird sie unter `https://ihr-benutzer.gitlab.io/mdn-svelte-todo/` zugänglich sein; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-UI überprüfen — siehe den Menüpunkt _Einstellungen_ > _Seiten_.

Mit dieser Konfiguration wird die Anwendung bei jedem Push in das GitLab-Repo automatisch neu gebaut und auf GitLab Pages bereitgestellt.

## Mehr über Svelte lernen

In diesem Abschnitt geben wir Ihnen einige Ressourcen und Projekte zum Auschecken, um Ihr Svelte-Lernen zu vertiefen.

### Svelte-Dokumentation

Um weiterzugehen und mehr über Svelte zu lernen, sollten Sie definitiv die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die Sveltes Philosophie erklären. Wenn Sie es noch nicht getan haben, sollten Sie unbedingt das [Svelte interaktive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits den größten Teil seines Inhalts behandelt, sodass es nicht viel Zeit in Anspruch nehmen wird, es zu vervollständigen — Sie sollten es als Übung betrachten!

Sie können auch die [Svelte API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Beweggründe hinter Svelte zu verstehen, sollten Sie [Rich Harris](https://x.com/Rich_Harris)'s [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) Präsentation auf YouTube ansehen. Er ist der Schöpfer von Svelte und hat ein paar Dinge darüber zu sagen. Sie können auch die interaktiven Folien hier sehen, die, wenig überraschend, mit Svelte erstellt wurden. Wenn es Ihnen gefallen hat, werden Sie auch [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) Präsentation genießen, die Rich Harris auf [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte im Zusammenhang mit Svelte, die einen Blick wert sind:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungsframework, das von Svelte betrieben wird und Server-Side Rendering (SSR), Code Splitting, Dateibasierte Routing und Offline-Unterstützung sowie mehr bietet. Betrachten Sie es als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie dieses Projekt unbedingt genauer ansehen.
- [Svelte Native](https://svelte.nativescript.org/): Ein mobiles Anwendungsframework, das von Svelte betrieben wird. Betrachten Sie es als [React Native](https://reactnative.dev/) für Svelte.
- [Svelte für VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin für die Arbeit mit `.svelte`-Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) betrachtet haben.

### Weitere Lernressourcen

- Es gibt einen [kompletten Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/), gehalten von Rich Harris, verfügbar bei Frontend Masters.
- Obwohl Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Web, sodass es schwierig ist, eine Empfehlung zu geben.
- Nichtsdestotrotz ist [Svelte.js — Der komplette Leitfaden](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit hervorragenden Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/), von [Flavio Copes](https://flaviocopes.com/), ist auch eine nützliche Referenz zum Erlernen der wichtigsten Svelte-Konzepte.
- Wenn Sie es vorziehen, Bücher zu lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das [Sie online kostenlos einsehen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome).
- Wenn Sie tiefer eintauchen und das innere Funktionieren des Svelte-Compilers verstehen möchten, sollten Sie [Tan Li Hau](https://x.com/lihautan)'s [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) Blog-Beiträge überprüfen.

### Interaktion mit der Community

Es gibt eine Reihe von Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Sveltes Discord-Server.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Sveltes Community-Twitter-Account.
- [Svelte-Rezepte](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-getriebenes Repository von Rezepten, Tipps und Best Practices zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte`-Tag bei SO.
- [Svelte reddit community](https://www.reddit.com/r/sveltejs/): Sveltes Community-Diskussions- und Inhaltsbewertungsseite bei reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte zum Erstellen und Bereitstellen einer vollständigen Anwendung übergegangen.

- Wir haben die Philosophie von Svelte kennengelernt und was es von anderen Frontend-Frameworks unterscheidet.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten, Informationen zwischen ihnen zu teilen.
- Wir haben das Reaktivitätssystem von Svelte genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und die Fähigkeiten von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Daten-Repository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Webspeicher zu speichern.
- Wir haben auch einen Blick auf Sveltes TypeScript-Unterstützung geworfen.

In diesem Artikel haben wir über ein paar mühelose Optionen zur Bereitstellung unserer App in der Produktion gelernt und gesehen, wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit in GitLab bereitzustellen. Danach haben wir Ihnen eine Liste von Svelte-Ressourcen gegeben, um Ihr Svelte-Lernen zu vertiefen.

Herzlichen Glückwunsch! Nach Abschluss dieser Reihe von Tutorials sollten Sie eine solide Basis haben, um professionelle Webanwendungen mit Svelte zu entwickeln.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
