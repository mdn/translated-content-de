---
title: Bereitstellung und nächste Schritte
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_deployment_next
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}

Im vorherigen Artikel haben wir uns mit der TypeScript-Unterstützung von Svelte beschäftigt und wie man sie verwendet, um Ihre Anwendung robuster zu gestalten. In diesem letzten Artikel werden wir uns ansehen, wie man Ihre Anwendung bereitstellt und online stellt, und Ihnen einige Ressourcen vorstellen, die Sie nutzen sollten, um Ihre Svelte-Lernerfahrung fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird empfohlen, dass Sie mit den Kernkonzepten von
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Sie benötigen ein Terminal mit installiertem Node und npm, um Ihre App zu kompilieren und zu bauen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen Sie, wie wir unsere Svelte-App für die Produktion vorbereiten können, und welche Lernressourcen Sie als nächstes besuchen sollten.
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

Um den aktuellen Zustand der App zu erreichen, führen Sie aus:

```bash
cd mdn-svelte-tutorial/08-next-steps
```

Oder laden Sie direkt den Inhalt des Ordners herunter:

```bash
npx degit opensas/mdn-svelte-tutorial/08-next-steps
```

Denken Sie daran, `npm install && npm run dev` auszuführen, um Ihre App im Entwicklungsmodus zu starten.

## Unsere App kompilieren

Bisher haben wir unsere App im Entwicklungsmodus mit `npm run dev` ausgeführt. Wie wir bereits gesehen haben, weist diese Anweisung Svelte an, unsere Komponenten und JavaScript-Dateien in eine `public/build/bundle.js`-Datei zu kompilieren und alle CSS-Abschnitte unserer Komponenten in `public/build/bundle.css`. Es startet auch einen Entwicklungsserver und überwacht Änderungen, kompiliert die App neu und aktualisiert die Seite, wenn eine Änderung erfolgt.

Ihr generiertes `bundle.js` und `bundle.css` sieht etwa so aus (Dateigröße links):

```plain
  504 Jul 13 02:43 bundle.css
95981 Jul 13 02:43 bundle.js
```

Um unsere Anwendung für die Produktion zu kompilieren, müssen wir stattdessen `npm run build` ausführen. In diesem Fall wird Svelte keinen Webserver starten oder weiterhin Änderungen überwachen. Es wird jedoch unsere JavaScript-Dateien mit [terser](https://terser.org/) minimieren und komprimieren.

Nach der Ausführung von `npm run build` werden unsere generierten `bundle.js` und `bundle.css` Dateien eher so aussehen:

```plain
  504 Jul 13 02:43 bundle.css
21782 Jul 13 02:43 bundle.js
```

Versuchen Sie jetzt, `npm run build` im Stammverzeichnis Ihrer App auszuführen. Sie könnten eine Warnung erhalten, die Sie jedoch derzeit ignorieren können.

Unsere gesamte App ist jetzt nur noch 21 KB groß — 8,3 KB, wenn sie gezippt ist. Es gibt keine zusätzlichen Laufzeiten oder Abhängigkeiten, die heruntergeladen, analysiert, ausgeführt und im Speicher gehalten werden müssen. Svelte hat unsere Komponenten analysiert und den Code in reines JavaScript kompiliert.

## Ein Blick hinter den Svelte-Kompilierungsprozess

Standardmäßig verwendet Svelte [rollup](https://rollupjs.org/) als Modulbündler, wenn Sie eine neue App mit `npx degit sveltejs/template my-svelte-project` erstellen.

> [!NOTE]
> Es gibt auch eine offizielle Vorlage für die Verwendung von [webpack](https://webpack.js.org/) sowie viele [von der Community gepflegte Plugins](https://github.com/sveltejs/integrations#bundler-plugins) für andere Bundler.

In der Datei `package.json` können Sie sehen, dass die `build` und `dev` Skripte einfach Rollup aufrufen:

```json
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "start": "sirv public"
},
```

Im `dev` Skript geben wir das `-w` Argument an, das Rollup anweist, Dateien zu überwachen und bei Änderungen neu zu erstellen.

Wenn wir uns die Datei `rollup.config.js` ansehen, sehen wir, dass der Svelte-Compiler einfach ein Rollup-Plugin ist:

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

Es gibt [viele Plugins für Rollup](https://github.com/rollup/awesome), die es Ihnen ermöglichen, sein Verhalten anzupassen. Ein besonders nützliches Plugin, das ebenfalls vom Svelte-Team gepflegt wird, ist [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess), das viele verschiedene Sprachen in Svelte-Dateien vorverarbeitet, wie PostCSS, SCSS, Less, CoffeeScript, SASS und TypeScript.

## Bereitstellung Ihrer Svelte-Anwendung

Aus Sicht eines Webservers ist eine Svelte-Anwendung nichts anderes als ein Haufen von HTML-, CSS- und JavaScript-Dateien. Alles, was Sie benötigen, ist ein Webserver, der statische Dateien bereitstellen kann, was bedeutet, dass Sie eine Vielzahl von Optionen zur Auswahl haben. Sehen wir uns ein paar Beispiele an.

> [!NOTE]
> Der folgende Abschnitt könnte auf jede clientseitige statische Website angewendet werden, die einen Erstellschritt erfordert, nicht nur auf Svelte-Apps.

### Bereitstellung mit Vercel

Eine der einfachsten Möglichkeiten, eine Svelte-Anwendung bereitzustellen, ist die Verwendung von [Vercel](https://vercel.com/home). Vercel ist eine Cloud-Plattform, die speziell für statische Websites entwickelt wurde und die Box-Support für die meisten gängigen Frontend-Tools bietet, einschließlich Svelte.

Um unsere App bereitzustellen, folgen Sie diesen Schritten.

1. [Registrieren Sie sich für ein Konto bei Vercel](https://vercel.com/signup).
2. Navigieren Sie zum Stammverzeichnis Ihrer App und führen Sie `npx vercel` aus; beim ersten Mal werden Sie aufgefordert, Ihre E-Mail-Adresse einzugeben und den Anweisungen in der an diese Adresse gesendeten E-Mail zu folgen, aus Sicherheitsgründen.
3. Führen Sie `npx vercel` erneut aus, und Sie werden gebeten, einige Fragen zu beantworten, wie folgt:

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

4. Akzeptieren Sie alle Standardoptionen, und es wird alles in Ordnung sein.
5. Sobald die Bereitstellung abgeschlossen ist, gehen Sie zur "Produktion"-URL in Ihrem Browser, und Sie werden sehen, dass die App bereitgestellt ist!

Sie können auch ein [Svelte-Git-Projekt importieren](https://vercel.com/import/svelte) aus [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) oder [Bitbucket](https://bitbucket.org/product/).

> [!NOTE]
> Sie können Vercel global installieren mit `npm i -g vercel`, sodass Sie nicht `npx` verwenden müssen, um es auszuführen.

### Automatische Bereitstellung auf GitLab Pages

Für das Hosten von statischen Dateien gibt es mehrere Online-Dienste, die es Ihnen ermöglichen, Ihre Website automatisch bereitzustellen, wann immer Sie Änderungen an ein Git-Repository pushen. Die meisten von ihnen beinhalten das Einrichten einer Bereitstellungspipeline, die bei jedem `git push` ausgelöst wird und sich um den Aufbau und die Bereitstellung Ihrer Website kümmert.

Um dies zu demonstrieren, werden wir unsere Todos-App auf [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) bereitstellen.

1. Zunächst müssen Sie sich bei GitLab [registrieren](https://gitlab.com/users/sign_up) und dann ein [neues Projekt erstellen](https://gitlab.com/projects/new). Geben Sie Ihrem neuen Projekt einen kurzen, einfachen Namen wie "mdn-svelte-todo". Sie werden eine Remote-URL haben, die auf Ihr neues GitLab-Git-Repository verweist, z.B. `git@gitlab.com:[Ihr-Benutzer]/[Ihr-Projekt].git`.
2. Bevor Sie beginnen, Inhalte in Ihr Git-Repository hochzuladen, ist es eine gute Praxis, eine `.gitignore`-Datei hinzuzufügen, um Git mitzuteilen, welche Dateien aus der Versionskontrolle auszuschließen sind. In unserem Fall werden wir Git angewiesen, Dateien im Verzeichnis `node_modules` auszuschließen, indem wir eine `.gitignore` Datei im Stammordner Ihres lokalen Projekts erstellen, mit dem folgenden Inhalt:

   ```bash
   node_modules/
   ```

3. Gehen wir jetzt zurück zu GitLab. Nach dem Erstellen eines neuen Repos zeigt Ihnen GitLab eine Nachricht an, die verschiedene Optionen erklärt, um Ihre vorhandenen Dateien hochzuladen. Folgen Sie den Schritten unter der Überschrift _Push an existing folder_:

   ```bash
   cd your_root_directory # Go into your project's root directory
   git init
   git remote add origin https://gitlab.com/[your-user]/mdn-svelte-todo.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

   > [!NOTE]
   > Sie könnten [das `git`-Protokoll](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols#_the_git_protocol) anstelle von `https` verwenden, was schneller ist und Ihnen erspart, bei jedem Zugriff auf Ihr Ursprungs-Repo Ihren Benutzernamen und Ihr Passwort einzugeben. Dafür müssen Sie ein [SSH-Schlüsselpaar erstellen](https://docs.gitlab.com/ee/user/ssh.html#generate-an-ssh-key-pair). Ihre Ursprungs-URL wird etwa so aussehen: `git@gitlab.com:[Ihr-Benutzer]/mdn-svelte-todo.git`.

Mit diesen Anweisungen initialisieren wir ein lokales Git-Repository, setzen dann unser Remote-Ursprung (wohin wir unseren Code pushen werden) als unser Repo auf GitLab. Dann committen wir alle Dateien im lokalen Git-Repo und pushen diese dann an das Remote-Ursprung auf GitLab.

GitLab verwendet ein integriertes Tool namens GitLab CI/CD, um Ihre Website zu erstellen und sie auf den GitLab Pages Server zu veröffentlichen. Die Abfolge der Skripte, die GitLab CI/CD ausführt, um diese Aufgabe zu erfüllen, wird aus einer Datei namens `.gitlab-ci.yml` erstellt, die Sie nach Bedarf erstellen und ändern können. Ein spezifischer Job namens `pages` in der Konfigurationsdatei wird GitLab darauf aufmerksam machen, dass Sie eine GitLab Pages-Website bereitstellen.

Lassen Sie uns das jetzt versuchen.

1. Erstellen Sie eine `.gitlab-ci.yml` Datei im Stammverzeichnis Ihres Projekts mit folgendem Inhalt:

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

   Hier teilen wir GitLab mit, ein Image mit der neuesten Version von Node zu verwenden, um unsere App zu bauen. Anschließend deklarieren wir einen `pages`-Job, um GitLab Pages zu aktivieren. Immer wenn ein Push zu unserem Repo erfolgt, wird GitLab `npm install` und `npm run build` ausführen, um unsere Anwendung zu bauen. Wir teilen GitLab auch mit, die Inhalte des `public`-Ordners bereitzustellen. In der letzten Zeile konfigurieren wir GitLab, unsere App nur neu bereitzustellen, wenn ein Push zu unserem Main-Branch erfolgt.

2. Da unsere App in einem Unterverzeichnis veröffentlicht wird (z.B. `https://ihr-benutzer.gitlab.io/mdn-svelte-todo`), müssen wir die Referenzen zu den JavaScript- und CSS-Dateien in unserer `public/index.html` Datei relativ machen. Dazu entfernen wir die führenden Schrägstriche (`/`) aus den URLs `/global.css`, `/build/bundle.css` und `/build/bundle.js`, wie folgt:

   ```html
   <title>Svelte To-Do list</title>

   <link rel="icon" type="image/png" href="favicon.png" />
   <link rel="stylesheet" href="global.css" />
   <link rel="stylesheet" href="build/bundle.css" />

   <script defer src="build/bundle.js"></script>
   ```

   Machen Sie dies jetzt.

3. Jetzt müssen wir nur noch unsere Änderungen an GitLab committen und pushen. Machen Sie dies, indem Sie die folgenden Befehle ausführen:

   ```bash
   git add public/index.html
   git add .gitlab-ci.yml
   git commit -m "Added .gitlab-ci.yml file and fixed index.html absolute paths"
   git push
   ```

Immer wenn ein Job läuft, zeigt GitLab ein Symbol an, das den Prozess des Jobs anzeigt. Klicken darauf, um die Ausgabe des Jobs zu inspizieren.

![GitLab Screenshot, der einen bereitgestellten Commit zeigt, der eine GitLab CI-Datei hinzufügt und die Bündelpfade relativ ändert](01-gitlab-pages-deploy.png)

Sie können auch den Fortschritt der aktuellen und vorherigen Jobs im Menü _CI / CD_ > _Jobs_ Ihres GitLab-Projekts überprüfen.

![Ein GitLab CI-Job, der in der GitLab-UI angezeigt wird und viele Befehle ausführt](02-gitlab-pages-job.png)

Sobald GitLab Ihre App fertiggestellt und veröffentlicht hat, ist sie unter `https://ihr-benutzer.gitlab.io/mdn-svelte-todo/` zugänglich; in meinem Fall ist es `https://opensas.gitlab.io/mdn-svelte-todo/`. Sie können die URL Ihrer Seite in der GitLab-UI überprüfen — siehe die Menüoption _Settings_ > _Pages_.

Mit dieser Konfiguration wird die Anwendung jedes Mal automatisch neu gebaut und bereitgestellt, wenn Sie Änderungen an das GitLab-Repo pushen.

## Mehr über Svelte lernen

In diesem Abschnitt zeigen wir Ihnen einige Ressourcen und Projekte, die Sie auschecken sollten, um Ihr Svelte-Lernen weiter zu vertiefen.

### Svelte-Dokumentation

Um weiter zu gehen und mehr über Svelte zu lernen, sollten Sie unbedingt die [Svelte-Homepage](https://svelte.dev/) besuchen. Dort finden Sie [viele Artikel](https://svelte.dev/blog), die die Philosophie von Svelte erklären. Wenn Sie es noch nicht getan haben, sollten Sie unbedingt das [Svelte Interactive Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte) durchgehen. Wir haben bereits den größten Teil des Inhalts behandelt, daher wird es nicht viel Zeit in Anspruch nehmen, es abzuschließen — Sie sollten es als Übung betrachten!

Sie können auch die [Svelte API-Dokumentation](https://svelte.dev/docs) und die verfügbaren [Beispiele](https://svelte.dev/examples/hello-world) konsultieren.

Um die Beweggründe hinter Svelte zu verstehen, sollten Sie sich die Präsentation [Rethinking reactivity](https://www.youtube.com/watch?v=AdNJ3fydeao&t=47s) von [Rich Harris](https://x.com/Rich_Harris) auf YouTube ansehen. Er ist der Erfinder von Svelte, daher hat er ein paar Dinge darüber zu sagen. Sie haben auch die interaktiven Folien, die wenig überraschend mit Svelte gebaut sind, verfügbar. Wenn Ihnen das gefallen hat, werden Sie auch die Präsentation [The Return of 'Write Less, Do More'](https://www.youtube.com/watch?v=BzX4aTRPzno) mögen, die Rich Harris auf dem [JSCAMP 2019](https://jscamp.tech/2019/) gehalten hat.

### Verwandte Projekte

Es gibt andere Projekte, die mit Svelte verbunden sind und es wert sind, angesehen zu werden:

- [Sapper](https://sapper.svelte.dev/): Ein Anwendungsframework, das von Svelte angetrieben wird und serverseitiges Rendering (SSR), Codeaufteilung, dateibasierte Routierung und Offline-Unterstützung und mehr bietet. Denken Sie an es als [Next.js](https://nextjs.org/) für Svelte. Wenn Sie planen, eine ziemlich komplexe Webanwendung zu entwickeln, sollten Sie sich dieses Projekt unbedingt ansehen.
- [Svelte Native](https://svelte-native.technology/): Ein mobiles Anwendungsframework, das von Svelte angetrieben wird. Denken Sie an es als [React Native](https://reactnative.dev/) für Svelte.
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Das offiziell unterstützte VS Code-Plugin für die Arbeit mit `.svelte`-Dateien, das wir in unserem [TypeScript-Artikel](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript) behandelt haben.

### Andere Lernressourcen

- Es gibt einen [vollständigen Kurs über Svelte und Sapper](https://frontendmasters.com/courses/svelte/) von Rich Harris, verfügbar bei Frontend Masters.
- Auch wenn Svelte ein relativ junges Projekt ist, gibt es viele Tutorials und [Kurse](https://www.udemy.com/topic/svelte-framework/?sort=popularity) im Internet, sodass es schwierig ist, eine Empfehlung auszusprechen.
- Nichtsdestotrotz ist [Svelte.js — The Complete Guide](https://www.udemy.com/course/sveltejs-the-complete-guide/) von [Academind](https://academind.com/) eine sehr beliebte Option mit großartigen Bewertungen.
- [The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/) von [Flavio Copes](https://flaviocopes.com/) ist auch eine nützliche Referenz, um die wichtigsten Svelte-Konzepte zu lernen.
- Wenn Sie lieber Bücher lesen, gibt es [Svelte and Sapper in Action](https://www.manning.com/books/svelte-and-sapper-in-action) von [Mark Volkman](https://x.com/mark_volkmann), veröffentlicht im Oktober 2020, das [Sie online kostenlos ansehen können](https://livebook.manning.com/book/svelte-and-sapper-in-action/welcome).
- Wenn Sie tiefer in die inneren Abläufe des Svelte-Compilers eintauchen möchten, sollten Sie [Tan Li Hau](https://x.com/lihautan)'s [_Compile Svelte in your head_](https://lihautan.com/compile-svelte-in-your-head) Blogbeiträge ansehen.

### Interagieren mit der Community

Es gibt eine Reihe von Möglichkeiten, Unterstützung zu erhalten und mit der Svelte-Community zu interagieren:

- [svelte.dev/chat](https://discord.com/invite/yy75DKs): Der Discord-Server von Svelte.
- [@sveltejs](https://x.com/sveltejs): Der offizielle Twitter-Account.
- [@sveltesociety](https://x.com/sveltesociety): Twitter-Account der Svelte-Community.
- [Svelte Recipes](https://github.com/svelte-society/recipes-mvp#recipes-mvp): Community-gesteuertes Repository mit Rezepten, Tipps und bewährten Praktiken zur Lösung häufiger Probleme.
- [Svelte-Fragen auf Stack Overflow](https://stackoverflow.com/questions/tagged/svelte): Fragen mit dem `svelte`-Tag bei SO.
- [Svelte Reddit-Community](https://www.reddit.com/r/sveltejs/): Diskussions- und Inhaltsbewertungsseite zur Svelte-Community bei Reddit.
- [Svelte DEV-Community](https://dev.to/t/svelte): Eine Sammlung von Svelte-bezogenen technischen Artikeln und Tutorials aus der DEV.to-Community.

## Finito

Herzlichen Glückwunsch! Sie haben das Svelte-Tutorial abgeschlossen. In den vorherigen Artikeln sind wir von null Wissen über Svelte zu der Entwicklung und Bereitstellung einer vollständigen Anwendung fortgeschritten.

- Wir haben die Philosophie von Svelte kennengelernt und verstanden, was es von anderen Frontend-Frameworks unterscheidet.
- Wir haben gesehen, wie man dynamisches Verhalten zu unserer Website hinzufügt, wie man unsere App in Komponenten organisiert und verschiedene Möglichkeiten zur Informationsweitergabe zwischen ihnen.
- Wir haben das Reaktivitätssystem von Svelte genutzt und gelernt, wie man häufige Fallstricke vermeidet.
- Wir haben auch einige fortgeschrittene Konzepte und Techniken gesehen, um mit DOM-Elementen zu interagieren und um die Fähigkeiten von HTML-Elementen programmatisch mit der `use`-Direktive zu erweitern.
- Dann haben wir gesehen, wie man Stores verwendet, um mit einem zentralen Datenrepository zu arbeiten, und wir haben unseren eigenen benutzerdefinierten Store erstellt, um die Daten unserer Anwendung im Web-Speicher zu persistieren.
- Wir haben auch einen Blick auf die TypeScript-Unterstützung von Svelte geworfen.

In diesem Artikel haben wir gelernt, wie man unsere App ohne großen Aufwand in der Produktion bereitstellt und gesehen, wie man eine grundlegende Pipeline einrichtet, um unsere App bei jedem Commit an GitLab bereitzustellen. Dann haben wir Ihnen eine Liste von Svelte-Ressourcen gegeben, um Ihr Svelte-Lernen weiterzuführen.

Herzlichen Glückwunsch! Nach Abschluss dieser Serie von Tutorials sollten Sie über eine solide Grundlage verfügen, von der aus Sie professionelle Webanwendungen mit Svelte entwickeln können.

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Svelte_TypeScript", "Learn_web_development/Core/Frameworks_libraries")}}
