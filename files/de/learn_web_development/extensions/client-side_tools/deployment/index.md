---
title: Bereitstellung unserer App
slug: Learn_web_development/Extensions/Client-side_tools/Deployment
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

Im abschließenden Artikel unserer Serie nehmen wir die Beispiel-Toolchain, die wir im vorherigen Artikel aufgebaut haben, und erweitern sie, damit wir unsere Beispiel-App bereitstellen können. Wir laden den Code auf GitHub hoch, stellen ihn mit GitHub Pages bereit und zeigen Ihnen sogar, wie Sie einen einfachen Test in den Prozess integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Nacharbeitung unserer kompletten Toolchain-Fallstudie mit Fokus auf der Bereitstellung der App.
      </td>
    </tr>
  </tbody>
</table>

## Nach der Entwicklung

In diesem Abschnitt des Projektzyklus gibt es potenziell eine große Bandbreite an Problemen zu lösen. Daher ist es wichtig, eine Toolchain zu erstellen, die diese Probleme mit möglichst wenig manueller Intervention bewältigt.

Hier sind nur einige Dinge, die Sie für dieses spezielle Projekt beachten sollten:

- Erzeugen eines Produktions-Builds: Sicherstellen, dass Dateien minimiert, in Stücke zerlegt, mit Tree-Shaking angewendet und Versionsnummern "cache bustiert" sind.
- Durchführung von Tests: Diese können vom "Ist dieser Code richtig formatiert?" bis zum "Macht diese Funktion das, was ich erwarte?" reichen, und sicherstellen, dass fehlschlagende Tests die Bereitstellung verhindern.
- Tatsächliches Bereitstellen des aktualisierten Codes auf einer Live-URL: Oder möglicherweise auf einer Staging-URL, damit er zuerst überprüft werden kann.

> [!NOTE]
> Cache Busting ist ein neuer Begriff, der in diesem Modul noch nicht angesprochen wurde. Dabei handelt es sich um die Strategie, den eigenen Caching-Mechanismus des Browsers zu durchbrechen, wodurch der Browser gezwungen wird, eine neue Kopie Ihres Codes herunterzuladen. Vite (und tatsächlich viele andere Tools) erzeugen Dateinamen, die für jeden neuen Build eindeutig sind. Dieser eindeutige Dateiname "bustiert" den Cache Ihres Browsers und stellt sicher, dass der Browser den aktuellen Code jedes Mal herunterlädt, wenn ein Update am bereitgestellten Code erfolgt.

Die oben genannten Aufgaben lassen sich auch in weitere Aufgaben unterteilen; beachten Sie, dass die meisten Webentwicklungsteams ihre eigenen Begriffe und Prozesse für mindestens einen Teil der Nachentwicklung haben werden.

Für dieses Projekt werden wir das kostenlose statische Hosting-Angebot von [GitHub Pages](https://pages.github.com/) verwenden, um unser Projekt zu hosten. Es bietet nicht nur unser Website im Internet an, sondern gibt uns auch eine URL zu unserer Website. Es ist großartig – viele MDN-Beispielwebsites werden auf GitHub Pages gehostet.

Die Bereitstellung von Hosting erfolgt oft am Ende des Projektlebenszyklus, aber mit Diensten wie GitHub Pages, die die Kosten für Bereitstellungen (sowohl in finanzieller Hinsicht als auch die erforderliche Zeit) senken, ist es möglich, während der Entwicklung bereitzustellen, um entweder laufende Arbeiten zu teilen oder eine Vorabversion für einen anderen Zweck zu haben.

GitHub bietet einen reibungslosen Workflow, um neuen Code in eine Live-Website zu verwandeln:

- Sie laden Ihren Code auf GitHub hoch.
- Sie definieren eine [GitHub Action](https://docs.github.com/en/actions), die ausgelöst wird, wenn ein neuer Push zum Hauptzweig erfolgt, der den Code erstellt und an einem bestimmten Ort bereitstellt.
- GitHub Pages stellt dann den Code unter einer bestimmten URL bereit.

Genau diese Art von verbundenen Diensten würden wir Ihnen empfehlen zu suchen, wenn Sie Ihre eigene Build-Toolchain festlegen. Wir können unseren Code commiten und auf GitHub pushen und der aktualisierte Code löst automatisch die gesamte Build-Routine aus. Wenn alles gut läuft, wird eine Live-Änderung automatisch bereitgestellt. Die _einzige_ Aktion, die wir durchführen müssen, ist der initiale "Push".

Allerdings müssen wir diese Schritte einrichten, was wir uns jetzt ansehen werden.

## Der Build-Prozess

Da wir Vite für die Entwicklung verwenden, ist die Hinzufügung der Build-Option wieder extrem einfach. Wie wir bereits gesehen haben, haben wir bereits ein benutzerdefiniertes Skript `npm run build`, das Vite alles für die Produktion bauen lässt, anstatt es nur für die Entwicklung und zu Testzwecken auszuführen. Dies umfasst die {{Glossary("Minification", "Minifizierung")}} und das {{Glossary("Tree_shaking", "Tree-Shaking")}} von Code sowie das Cache-Busting bei Dateinamen.

Es ist eine gute bewährte Praxis, immer ein `build`-Skript in Ihrem Projekt zu definieren, damit wir uns dann auf `npm run build` verlassen können, um immer den vollständigen Build-Schritt auszuführen, ohne die spezifischen Build-Befehlsargumente für jedes Projekt merken zu müssen.

Der neu erstellte Produktionscode wird in einem neuen Verzeichnis namens `dist` abgelegt, das _alle_ Dateien enthält, die zum Ausführen der Website erforderlich sind und die Sie auf einen Server hochladen können.

Manuelles Durchführen dieses Schritts ist jedoch nicht unser endgültiges Ziel – wir möchten, dass der Build automatisch erfolgt und das Ergebnis des `dist`-Verzeichnisses live auf unserer Website bereitgestellt wird.

## Änderungen auf GitHub committen

Dieser Abschnitt wird Ihnen dabei helfen, Ihren Code in einem Git-Repository zu speichern, aber er ist weit entfernt von einem Git-Tutorial. Es gibt viele großartige Tutorials und Bücher, und unsere Seite zu [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) ist ein guter Ausgangspunkt.

Wir haben unser Arbeitsverzeichnis zuvor als ein Git-Arbeitsverzeichnis initialisiert. Ein schneller Weg, dies zu überprüfen, ist das Ausführen des folgenden Befehls:

```bash
git status
```

Sie sollten einen Statusbericht erhalten, in dem angezeigt wird, welche Dateien verfolgt werden, welche Dateien gestaged sind usw. – alle Begriffe, die Teil der Git-Grammatik sind. Wenn Sie den Fehler `fatal: not a git repository` erhalten, dann ist das Arbeitsverzeichnis kein Git-Arbeitsverzeichnis und Sie müssen Git mit `git init` initialisieren.

Jetzt haben wir drei Aufgaben vor uns:

- Änderungen, die wir vorgenommen haben, zur Staging hinzufügen (ein spezieller Name für den Ort, von dem aus Git Dateien commiten wird).
- Die Änderungen im Repository committen.
- Die Änderungen auf GitHub pushen.

1. Um Änderungen hinzuzufügen, führen Sie den folgenden Befehl aus:

   ```bash
   git add .
   ```

   Beachten Sie den Punkt am Ende, er bedeutet "alles in diesem Verzeichnis". Der Befehl `git add .` ist ein ziemlicher Universalansatz – er wird alle lokalen Änderungen hinzufügen, an denen Sie gearbeitet haben, in einem Zug. Wenn Sie mehr Kontrolle darüber haben möchten, was Sie hinzufügen, verwenden Sie `git add -p` für einen interaktiven Prozess oder fügen Sie einzelne Dateien mit `git add path/to/file` hinzu.

2. Jetzt, da der gesamte Code gestaged ist, können wir committen; führen Sie den folgenden Befehl aus:

   ```bash
   git commit -m 'committing initial code'
   ```

   > [!NOTE]
   > Obwohl es Ihnen freisteht, was immer Sie in der Commit-Nachricht schreiben möchten, gibt es im Internet einige nützliche Tipps zu guten Commit-Nachrichten. Halten Sie sie kurz, prägnant und beschreibend, sodass sie eindeutig beschreiben, was die Änderung bewirkt.

3. Schließlich muss der Code in Ihr auf GitHub gehostetes Repository gepusht werden. Lassen Sie uns das jetzt tun.

   Gehen Sie zu GitHub zu <https://github.com/new> und erstellen Sie Ihr eigenes Repository, um diesen Code zu hosten.

4. Geben Sie Ihrem Repository einen kurzen, einprägsamen Namen ohne Leerzeichen (verwenden Sie Bindestriche, um Wörter zu trennen) und eine Beschreibung und klicken Sie dann unten auf der Seite auf _Create repository_.

   Sie sollten jetzt eine "Remote"-URL haben, die auf Ihr neues GitHub-Repo verweist.

   ![GitHub-Screenshot, der Remote-URLs zeigt, die Sie verwenden können, um Code in ein GitHub-Repo bereitzustellen](github-quick-setup.png)

5. Dieser Remote-Standort muss zu unserem lokalen Git-Repository hinzugefügt werden, bevor wir es dorthin pushen können. Andernfalls kann es nicht gefunden werden. Sie müssen einen Befehl mit folgender Struktur ausführen (verwenden Sie vorerst die bereitgestellte HTTPS-Option – insbesondere wenn Sie neu bei GitHub sind – nicht die SSH-Option):

   ```bash
   git remote add origin https://github.com/your-name/repo-name.git
   ```

   Wenn Ihre Remote-URL `https://github.com/remy/super-website.git` war, wie im obigen Screenshot, wäre Ihr Befehl:

   ```bash
   git remote add origin https://github.com/remy/super-website.git
   ```

   Ändern Sie die URL in Ihr eigenes Repository und führen Sie es jetzt aus.

   > [!NOTE]
   > Nachdem Sie den Namen Ihres Repositories gewählt haben, stellen Sie sicher, dass die `base`-Option in Ihrer `vite.config.js` diesen Namen widerspiegelt, wie im [vorherigen Kapitel](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#javascript_transformation) erwähnt. Andernfalls werden die JavaScript- und CSS-Assets nicht korrekt verlinkt.

6. Nun sind wir bereit, unseren Code auf GitHub zu pushen; führen Sie jetzt den folgenden Befehl aus:

   ```bash
   git push origin main
   ```

   An diesem Punkt werden Sie aufgefordert, einen Benutzernamen und ein Passwort einzugeben, bevor Git das Pushen zulassen wird. Dies liegt daran, dass wir die HTTPS-Option verwendet haben, anstelle der SSH-Option, wie im vorherigen Screenshot zu sehen war. Dafür benötigen Sie Ihren GitHub-Benutzernamen und dann – falls Sie keine Zwei-Faktor-Authentifizierung (2FA) aktiviert haben – Ihr GitHub-Passwort. Wir empfehlen Ihnen immer, wenn möglich 2FA zu nutzen, aber beachten Sie, dass Sie, falls Sie das tun, auch ein "persönliches Zugangstoken" verwenden müssen. Die Hilfeseiten von GitHub bieten eine [ausgezeichnete und einfache Anleitung, wie man eins erhält](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

> [!NOTE]
> Wenn Sie daran interessiert sind, die SSH-Option zu verwenden und damit die Notwendigkeit zu vermeiden, bei jedem Push zu GitHub Ihren Benutzernamen und Ihr Passwort einzugeben, [führt Sie dieses Tutorial durch den Prozess, wie man das macht](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Dieser letzte Befehl weist Git an, den Code an den "Remote"-Standort zu pushen, den wir `origin` genannt haben (das ist das auf github.com gehostete Repository – wir hätten es nennen können, wie wir wollten) unter Verwendung des Zweigs `main`. Wir haben gerade überhaupt keine Zweige behandelt, aber der "main"-Zweig ist der Standard-Arbeitsplatz für unsere Arbeit, und dort startet Git. Wenn wir die Aktion definieren, die ausgelöst wird, um die Website zu erstellen, werden wir sie auch darauf achten lassen, ob Änderungen am "main"-Zweig vorgenommen wurden.

> [!NOTE]
> Bis Oktober 2020 war der Standardzweig auf GitHub `master`, was aus verschiedenen sozialen Gründen zu `main` geändert wurde. Sie sollten wissen, dass dieser ältere Standardzweig in verschiedenen Projekten, die Sie antreffen, auftauchen kann, aber wir empfehlen die Verwendung von `main` für Ihre eigenen Projekte.

Mit unserem Projekt, das in Git committet und in unser GitHub-Repository gepusht wurde, besteht der nächste Schritt in der Toolchain darin, eine Build-Aktion zu definieren, damit unser Projekt live im Internet bereitgestellt werden kann!

## Verwendung von GitHub Actions für die Bereitstellung

GitHub Actions, wie auch die ESLint-Konfiguration, ist ein weiteres tiefes Thema, in das man eintauchen kann. Es ist nicht leicht, es beim ersten Versuch richtig zu machen, aber für beliebte Aufgaben wie "Bauen einer statischen Website und Bereitstellen auf GitHub Pages" gibt es viele Beispiele zum Kopieren und Einfügen. Sie können die Anweisungen in [Veröffentlichung mit einem benutzerdefinierten GitHub Actions-Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) befolgen. Sie können sich [unsere GitHub Action-Datei](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml) für ein funktionierendes Beispiel ansehen. (Der Dateiname spielt keine Rolle.)

Nachdem Sie diese Datei in den Hauptzweig committet haben, sollten Sie ein kleines grünes Häkchen neben dem Commit-Titel sehen:

![GitHub-Screenshot, der ein grünes Häkchen neben einem Commit-Titel zeigt](build-action-pass.png)

Wenn Sie einen gelben Punkt sehen, bedeutet das, dass die Aktion läuft, und wenn Sie ein rotes Kreuz sehen, bedeutet das, dass die Aktion fehlgeschlagen ist. Klicken Sie auf das Symbol, und Sie können den Status und die Protokolle Ihrer eigenen Build-Aktion (in unserem Fall "Deploy build" genannt) sehen.

Nach einigen Minuten Warten können Sie Ihre GitHub Pages-URL besuchen, um Ihre Website live im Internet zu sehen. Der Link sieht so aus: `https://<your-name>.github.io/<repo-name>`. In unserem Beispiel lautet er <https://mdn.github.io/client-toolchain-example/>.

Nun zum letzten Glied in unserer Toolchain: ein Test, um sicherzustellen, dass unser Code funktioniert.

## Testen

Das Testen selbst ist ein umfangreiches Thema, sogar im Bereich der Front-End-Entwicklung. Ich werde Ihnen zeigen, wie Sie Ihrem Projekt einen ersten Test hinzufügen und wie der Test genutzt werden kann, um zu verhindern oder zuzulassen, dass die Projektbereitstellung erfolgt.

Beim Testen gibt es viele verschiedene Ansätze:

- End-to-End-Testing, bei dem Ihr Besucher etwas anklickt und etwas anderes passiert.
- Integrationstests, die im Grunde sagen: "Funktioniert ein Codeblock noch, wenn er mit einem anderen verbunden ist?"
- Unit-Testing, bei dem kleine und spezifische Funktionalitäten getestet werden, um zu sehen, ob sie das tun, was sie sollen.
- [Und viele weitere Typen](https://en.wikipedia.org/wiki/Functional_testing). Auch unser [Cross-Browser-Testing-Modul](/de/docs/Learn_web_development/Extensions/Testing) enthält eine Menge nützlicher Testinformationen.

Denken Sie auch daran, dass Tests nicht auf JavaScript beschränkt sind; Tests können gegen das gerenderte DOM, Benutzerinteraktionen, CSS und sogar gegen das Aussehen einer Seite ausgeführt werden.

Für dieses Projekt werden wir jedoch einen kleinen Test erstellen, der überprüft, ob die GitHub API-Daten im korrekten Format vorliegen. Wenn nicht, wird der Test fehlschlagen und das Projekt wird am Live-Schalten gehindert. Alles andere wäre über den Umfang dieses Moduls hinaus – das Testen ist ein großes Thema, das wirklich sein eigenes separates Modul benötigt. Wir hoffen, dass Sie dieser Abschnitt zumindest auf die Notwendigkeit des Testens aufmerksam macht und den Samen pflanzt, der Sie inspiriert, mehr zu lernen.

Der Test selbst ist nicht das Wichtige. Was wichtig ist, ist, wie das Scheitern oder der Erfolg gehandhabt wird. Da wir bereits eine benutzerdefinierte Build-Aktion schreiben, können wir einen Schritt vor dem Build hinzufügen, der den Test ausführt. Wenn der Test fehlschlägt, wird der Build fehlschlagen und die Bereitstellung nicht erfolgen.

Die gute Nachricht ist: Da wir Vite nutzen, bietet Vite bereits ein gutes integriertes Werkzeug zum Testen: [Vitest](https://vitest.dev/guide/).

Lassen Sie uns loslegen.

1. Installieren Sie Vitest:

   ```bash
   npm install --save-dev vitest
   ```

2. In Ihrer package.json finden Sie Ihr `scripts`-Mitglied und aktualisieren es so, dass es die folgenden Test- und Build-Befehle enthält:

   ```json
   "scripts": {
     // …
     "test": "vitest"
   }
   ```

   > [!NOTE]
   > Das ist der Vorteil der Verwendung von Vite zusammen mit Vitest: Wenn Sie andere Test-Frameworks verwenden, müssten Sie eine zusätzliche Konfiguration hinzufügen, die beschreibt, wie die Testdateien transformiert werden müssen. Vitest wird jedoch automatisch die Vite-Konfiguration verwenden.

3. Natürlich müssen wir den Test in unserem Code hinzufügen. Normalerweise, wenn Sie die Funktionalität einer Datei testen, z.B. `App.jsx`, würden Sie eine Datei namens `App.test.jsx` daneben hinzufügen. In diesem Fall testen wir nur die Daten. Lassen Sie uns ein weiteres Verzeichnis erstellen, um unsere Tests zu halten. Sie können das Beispiel-Repository öffnen, das Sie im vorherigen Kapitel heruntergeladen haben, und den Ordner `tests` kopieren.

4. Um den Test jetzt manuell auszuführen, können wir die folgenden Befehle in der Befehlszeile ausführen:

   ```bash
   npm run test
   ```

   Sie sollten eine Ausgabe wie diese sehen:

   ```plain
   > client-toolchain-example@1.0.0 test
   > vitest


   DEV  v1.6.0 /Users/joshcena/Desktop/work/Tech/projects/mdn/client-toolchain-example

   ✓ tests/api.test.js (1) 896ms
     ✓ GitHub API returns the right response 896ms

   Test Files  1 passed (1)
        Tests  1 passed (1)
     Start at  23:12:25
     Duration  1.03s (transform 15ms, setup 0ms, collect 5ms, tests 896ms, environment 0ms, prepare 38ms)


   PASS  Waiting for file changes...
         press h to show help, press q to quit
   ```

   Das bedeutet, dass der Test bestanden wurde. Wie Vite wird es auf Änderungen achten und die Tests erneut durchführen, wenn Sie eine Datei speichern. Wir können mit <kbd>q</kbd> beenden.

5. Wir müssen den Test noch mit unserer Build-Aktion verknüpfen, damit der Build blockiert wird, wenn der Test fehlschlägt. Öffnen Sie die Datei `.github/workflows/github-pages.yml` (oder welchen Dateinamen Sie Ihrer Build-Aktion gegeben haben) und fügen Sie diesen Schritt direkt vor dem Schritt hinzu, der `npm run build` ausführt:

   ```yaml
   - name: Install deps
     run: npm ci

   # Add this
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   Dies wird den Test vor dem Build-Schritt ausführen. Wenn der Test fehlschlägt, wird der Build fehlschlagen, und die Bereitstellung wird nicht erfolgen.

6. Laden Sie nun den neuen Code auf GitHub hoch, indem Sie ähnliche Befehle wie zuvor verwenden:

   ```bash
   git add .
   git commit -m 'adding test'
   git push origin main
   ```

   In manchen Fällen möchten Sie möglicherweise das Ergebnis des gebauten Codes testen (da dies nicht ganz der ursprüngliche Code ist, den wir geschrieben haben), sodass der Test möglicherweise nach dem Build-Befehl ausgeführt werden muss. Sie müssen all diese individuellen Aspekte berücksichtigen, während Sie an Ihren eigenen Projekten arbeiten.

Schließlich wird GitHub Pages einige Minuten nach dem Push das Projekt-Update bereitstellen. Aber nur, wenn es den eingeführten Test besteht.

## Zusammenfassung

Das ist es für unsere Beispiel-Fallstudie und für das Modul! Wir hoffen, Sie fanden es nützlich. Während es noch ein weiter Weg ist, bis Sie sich als Client-Side-Tools-Experte betrachten können, hoffen wir, dass Ihnen dieses Modul den ersten wichtigen Schritt in Richtung Verständnis von Client-Side-Tools gegeben hat und Vertrauen, mehr zu lernen und neue Dinge auszuprobieren.

Lassen Sie uns alle Teile der Toolchain zusammenfassen:

- Die Code-Qualität und -Wartung werden von ESLint und Prettier durchgeführt. Diese Tools werden als `devDependencies` zum Projekt über `npm install --dev eslint prettier eslint-plugin-react ...` hinzugefügt (das ESLint-Plugin ist erforderlich, da dieses spezielle Projekt React verwendet).
- Es gibt zwei Konfigurationsdateien, die die Code-Qualität-Tools lesen: `eslint.config.js` und `.prettierrc`.
- Während der Entwicklung werden weiterhin Abhängigkeiten mit npm hinzugefügt. Der Vite-Entwicklungsserver läuft im Hintergrund, um Änderungen zu überwachen und unseren Quellcode automatisch zu bauen.
- Die Bereitstellung erfolgt durch das Pushen unserer Änderungen auf GitHub (im "main"-Zweig), der einen Build und eine Bereitstellung mit GitHub Actions auslöst, um das Projekt zu veröffentlichen. Für unsere Instanz lautet diese URL <https://mdn.github.io/client-toolchain-example/>; Sie werden Ihre eigene eindeutige URL haben.
- Wir haben auch einen einfachen Test, der den Bau und die Bereitstellung der Seite blockiert, wenn der GitHub API-Feed nicht das richtige Datenformat liefert.

Für diejenigen von Ihnen, die eine Herausforderung suchen, überlegen Sie, ob Sie einen Teil dieser Toolchain optimieren können. Einige Fragen, die Sie sich stellen sollten:

- Können wir nur die Funktionen von plotly.js extrahieren, die wir benötigen? Dies würde die Größe des JavaScript-Bundles reduzieren.
- Vielleicht möchten Sie weitere Tools hinzufügen, z.B. TypeScript für die Typüberprüfung oder stylelint für die CSS-Linters?
- Könnte React durch [etwas Kleineres](https://preactjs.com/) ersetzt werden?
- Könnten Sie weitere Tests hinzufügen, um einen fehlerhaften Build von der Bereitstellung abzuhalten, z.B. [Leistungsbewertungen](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)?
- Könnten Sie eine Benachrichtigung einrichten, die Ihnen mitteilt, wann eine neue Bereitstellung erfolgreich war oder fehlgeschlagen ist?

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
