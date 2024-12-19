---
title: Bereitstellung unserer App
slug: Learn_web_development/Extensions/Client-side_tools/Deployment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

Im letzten Artikel unserer Serie erweitern wir das im vorherigen Artikel erstellte Toolchain-Beispiel, damit wir unsere Muster-App bereitstellen können. Wir pushen den Code zu GitHub, stellen ihn mit GitHub Pages bereit und zeigen Ihnen sogar, wie Sie einen einfachen Test in den Prozess einfügen können.

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
        Das Durcharbeiten unserer kompletten Toolchain-Fallstudie zu beenden, mit Fokus auf die Bereitstellung der App.
      </td>
    </tr>
  </tbody>
</table>

## Nach der Entwicklung

In diesem Abschnitt des Projektlebenszyklus gibt es möglicherweise eine Vielzahl von Problemen zu lösen. Daher ist es wichtig, eine Toolchain zu erstellen, die diese Probleme so löst, dass möglichst wenig manuelle Eingriffe erforderlich sind.

Hier sind nur einige Dinge zu beachten für dieses spezielle Projekt:

- Erstellung eines Produktions-Builds: Sicherstellen, dass Dateien minimiert, aufgeteilt und "Tree-shaking" angewendet wird, und dass Versionen "Cache-busting" haben.
- Tests durchführen: Diese können von "ist dieser Code richtig formatiert?" bis "macht dieses Ding, was ich erwarte?" reichen, und sicherstellen, dass fehlschlagende Tests die Bereitstellung verhindern.
- Den aktualisierten Code tatsächlich auf eine Live-URL bereitstellen: Oder möglicherweise auf eine Staging-URL, damit es zuerst überprüft werden kann.

> [!NOTE]
> Cache-Busting ist ein neuer Begriff, den wir bisher in diesem Modul noch nicht kennengelernt haben. Dies ist die Strategie, den eigenen Cache-Mechanismus eines Browsers zu durchbrechen, wodurch der Browser gezwungen wird, eine neue Kopie Ihres Codes herunterzuladen. Vite (und in der Tat viele andere Tools) generieren Dateinamen, die für jeden neuen Build einzigartig sind. Dieser einzigartige Dateiname "sprengt" den Cache Ihres Browsers und stellt so sicher, dass der Browser den frischen Code bei jedem Update des bereitgestellten Codes herunterlädt.

Die oben genannten Aufgaben zerfallen auch in weitere Aufgaben; beachten Sie, dass die meisten Web-Entwicklungsteams ihre eigenen Begriffe und Prozesse für zumindest einen Teil der Nachentwicklungsphase haben werden.

Für dieses Projekt werden wir das kostenlose statische Hosting-Angebot von [GitHub Pages](https://pages.github.com/) nutzen, um unser Projekt zu hosten. Es dient nicht nur unserer Website im Internet, sondern gibt uns auch eine URL zu unserer Website. Das ist großartig — viele MDN-Beispiel-Websites werden auf GitHub Pages gehostet.

Das Deployment auf ein Hosting erfolgt tendenziell am Ende des Projektlebenszyklus, aber mit Diensten wie GitHub Pages, die die Kosten für Deployments senken (sowohl in finanzieller Hinsicht als auch in Bezug auf die erforderliche Zeit), ist es möglich, während der Entwicklung zu deployen, um entweder an laufenden Arbeiten teilzunehmen oder um eine Vorabveröffentlichung für einen anderen Zweck zu haben.

GitHub bietet einen reibungslosen Workflow, um neuen Code in eine Live-Website zu verwandeln:

- Sie pushen Ihren Code zu GitHub.
- Sie definieren eine [GitHub Action](https://docs.github.com/en/actions), die ausgelöst wird, wenn es einen neuen Push zum Hauptzweig gibt, der den Code baut und an einem bestimmten Ort ablegt.
- GitHub Pages stellt dann den Code unter einer bestimmten URL bereit.

Es sind genau diese Arten von verbundenen Diensten, die wir Ihnen empfehlen würden zu suchen, wenn Sie sich für Ihre eigene Build-Toolchain entscheiden. Wir können unseren Code commiten und zu GitHub pushen, und der aktualisierte Code wird automatisch die gesamte Build-Routine auslösen. Wenn alles in Ordnung ist, erhalten wir automatisch eine Live-Änderung. Die _einzige_ Aktion, die wir ausführen müssen, ist dieser anfängliche "Push".

Wir müssen jedoch diese Schritte einrichten, und das werden wir uns jetzt ansehen.

## Der Build-Prozess

Da wir wieder Vite zur Entwicklung verwenden, ist die Build-Option extrem einfach hinzuzufügen. Wie wir bereits gesehen haben, haben wir ein benutzerdefiniertes Skript `npm run build`, das Vite alles für die Produktion bauen lässt, anstatt es nur zu Entwicklungs- und Testzwecken auszuführen. Dies beinhaltet die Durchführung von {{Glossary("Minification", "Minification")}} und {{Glossary("Tree_shaking", "Tree-shaking")}} des Codes sowie Cache-Busting bei Dateinamen.

Es ist eine gute Praxis, immer ein `build`-Skript in Ihrem Projekt zu definieren, sodass wir uns dann auf `npm run build` verlassen können, um immer den vollständigen Build-Schritt durchzuführen, ohne dass wir uns die spezifischen Build-Befehlsargumente für jedes Projekt merken müssen.

Der neu erstellte Produktionscode wird in einem neuen Verzeichnis namens `dist` platziert, das _alle_ Dateien enthält, die zur Ausführung der Website erforderlich sind und bereit sind, auf einen Server hochgeladen zu werden.

Das manuelle Ausführen dieses Schrittes ist jedoch nicht unser endgültiges Ziel — wir wollen, dass der Build automatisch erfolgt und das Ergebnis des `dist`-Verzeichnisses live auf unserer Website bereitgestellt wird.

## Änderungen zu GitHub commiten

Dieser Abschnitt wird Sie darüber hinwegbringen, Ihren Code in einem Git-Repository zu speichern, aber es ist weit entfernt von einem Git-Tutorial. Es gibt viele großartige Tutorials und Bücher, und unsere [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control)-Seite ist ein guter Ausgangspunkt.

Wir haben unser Arbeitsverzeichnis bereits zu einem Git-Arbeitsverzeichnis initialisiert. Eine schnelle Möglichkeit, dies zu überprüfen, ist das Ausführen des folgenden Befehls:

```bash
git status
```

Sie sollten einen Statusbericht darüber erhalten, welche Dateien verfolgt werden, welche Dateien bereitgestellt sind und so weiter — alles Begriffe, die Teil der Git-Grammatik sind. Wenn Sie den Fehler `fatal: not a git repository` erhalten, ist das Arbeitsverzeichnis kein Git-Arbeitsverzeichnis und Sie müssen Git mit `git init` initialisieren.

Jetzt stehen uns drei Aufgaben bevor:

- Alle Änderungen, die wir vorgenommen haben, zur Staging-Phase hinzufügen (ein spezieller Name für den Ort, an dem Git Dateien committet).
- Die Änderungen an das Repository commiten.
- Die Änderungen zu GitHub pushen.

1. Um Änderungen hinzuzufügen, führen Sie den folgenden Befehl aus:

   ```bash
   git add .
   ```

   Beachten Sie den Punkt am Ende, er bedeutet "alles in diesem Verzeichnis". Der Befehl `git add .` ist ein bisschen eine Vorschlaghammer-Methode — er fügt alle lokalen Änderungen, an denen Sie gearbeitet haben, in einem Schritt hinzu. Wenn Sie mehr Kontrolle darüber haben möchten, was Sie hinzufügen, verwenden Sie `git add -p` für einen interaktiven Prozess oder fügen Sie einzelne Dateien mit `git add path/to/file` hinzu.

2. Nun, da der gesamte Code gestaged ist, können wir commiten; führen Sie den folgenden Befehl aus:

   ```bash
   git commit -m 'committing initial code'
   ```

   > [!NOTE]
   > Obwohl Sie beim Commit-Nachricht schreiben, was Sie möchten, im Internet finden Sie einige nützliche Tipps zu guten Commit-Nachrichten. Halten Sie sie kurz, prägnant und beschreibend, damit sie eindeutig beschreiben, was die Änderung tut.

3. Schließlich muss der Code in Ihr auf GitHub gehostetes Repository gepusht werden. Lassen Sie es uns jetzt tun.

   Gehen Sie zu GitHub, besuchen Sie <https://github.com/new> und erstellen Sie Ihr eigenes Repository, um diesen Code zu hosten.

4. Geben Sie Ihrem Repository einen kurzen, einprägsamen Namen, ohne Leerzeichen (verwenden Sie Bindestriche, um Wörter zu trennen), und eine Beschreibung, und klicken Sie dann unten auf der Seite auf _Create repository_.

   Sie sollten nun eine "Remote"-URL haben, die auf Ihr neues GitHub-Repo zeigt.

   ![GitHub-Screenshot, der Remote-URLs zeigt, die Sie verwenden können, um Code in ein GitHub-Repo bereitzustellen](github-quick-setup.png)

5. Dieser entfernte Standort muss zu unserem lokalen Git-Repository hinzugefügt werden, bevor wir es nach oben pushen können, andernfalls kann er es nicht finden. Sie müssen einen Befehl mit der folgenden Struktur ausführen (verwenden Sie die bereitgestellte HTTPS-Option vorerst — insbesondere, wenn Sie neu bei GitHub sind — nicht die SSH-Option):

   ```bash
   git remote add origin https://github.com/your-name/repo-name.git
   ```

   Wenn Ihre Remote-URL also `https://github.com/remy/super-website.git` war, wie im obigen Screenshot, wäre Ihr Befehl

   ```bash
   git remote add origin https://github.com/remy/super-website.git
   ```

   Ändern Sie die URL auf Ihr eigenes Repository und führen Sie es jetzt aus.

   > [!NOTE]
   > Nachdem Sie Ihren Repository-Namen ausgewählt haben, stellen Sie sicher, dass die `base`-Option in Ihrer `vite.config.js` diesen Namen widerspiegelt, wie im [vorherigen Kapitel](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#javascript_transformation) erwähnt. Andernfalls werden die JavaScript- und CSS-Assets nicht korrekt verlinkt.

6. Jetzt sind wir bereit, unseren Code zu GitHub zu pushen; führen Sie jetzt den folgenden Befehl aus:

   ```bash
   git push origin main
   ```

   An diesem Punkt werden Sie aufgefordert, einen Benutzernamen und ein Passwort einzugeben, bevor Git den Push zulässt. Dies liegt daran, dass wir die HTTPS-Option anstelle der SSH-Option verwendet haben, wie im früheren Screenshot gezeigt. Dafür benötigen Sie Ihren GitHub-Benutzernamen und dann — wenn Sie keine Zwei-Faktor-Authentifizierung (2FA) aktiviert haben — Ihr GitHub-Passwort. Wir würden Ihnen immer empfehlen, 2FA zu verwenden, wenn möglich, aber denken Sie daran, dass Sie, wenn Sie dies tun, auch ein "persönliches Zugriffstoken" verwenden müssen. Die GitHub-Hilfeseiten haben eine [ausgezeichnete und einfache Anleitung, wie man eines erhält](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

> [!NOTE]
> Wenn Sie daran interessiert sind, die SSH-Option zu verwenden, um das Eingeben Ihres Benutzernamens und Passworts jedes Mal, wenn Sie zu GitHub pushen, zu vermeiden, [führt Sie dieses Tutorial durch den Prozess](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Dieser endgültige Befehl weist Git an, den Code in den "Remote"-Standort zu pushen, den wir `origin` genannt haben (das ist das auf github.com gehostete Repository — wir hätten es nennen können, wie wir wollten) unter Verwendung des Zweigs `main`. Wir sind überhaupt nicht auf Zweige gestoßen, aber der "main"-Zweig ist der Standardort für unsere Arbeit und ist, was Git beginnt. Wenn wir die Aktion definieren, die ausgelöst wird, um die Website zu bauen, lassen wir sie auch auf Änderungen im "main"-Zweig achten.

> [!NOTE]
> Bis Oktober 2020 war der Standardzweig auf GitHub `master`, der aus verschiedenen sozialen Gründen auf `main` umgestellt wurde. Sie sollten sich bewusst sein, dass dieser ältere Standardzweig in verschiedenen Projekten, auf die Sie stoßen, auftauchen kann, aber wir würden vorschlagen, `main` für Ihre eigenen Projekte zu verwenden.

Also mit unserem Projekt, das in Git committet und in unser GitHub-Repository gepusht wurde, ist der nächste Schritt in der Toolchain, eine Build-Aktion zu definieren, damit unser Projekt live im Web bereitgestellt werden kann!

## Verwendung von GitHub Actions für die Bereitstellung

GitHub Actions, ähnlich wie ESLint-Konfiguration, ist ein weiteres tiefes Thema, in das man eintauchen kann. Es ist nicht einfach, beim ersten Versuch alles richtig zu machen, aber für beliebte Aufgaben wie "eine statische Website bauen und auf GitHub Pages bereitstellen" gibt es viele Beispiele, die man kopieren und einfügen kann. Sie können den Anweisungen in [Veröffentlichung mit einem benutzerdefinierten GitHub Actions Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) folgen. Sie können [unser GitHub Action-File](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml) für ein funktionierendes Beispiel überprüfen. (Der Dateiname ist egal.)

Nachdem Sie diese Datei im Hauptzweig committet haben, sollten Sie ein kleines grünes Häkchen neben dem Commit-Titel sehen:

![GitHub-Screenshot, der ein grünes Häkchen neben einem Commit-Titel zeigt](build-action-pass.png)

Wenn Sie einen gelben Punkt sehen, bedeutet das, dass die Aktion läuft, und wenn Sie ein rotes Kreuz sehen, bedeutet das, dass die Aktion fehlgeschlagen ist. Klicken Sie auf das Symbol und Sie können den Status und die Protokolle Ihrer eigenen Build-Aktion sehen (in unserem Fall "Deploy build" genannt).

Nachdem Sie ein paar Minuten gewartet haben, können Sie Ihre GitHub Pages URL besuchen, um Ihre Website live im Web zu sehen. Der Link sieht aus wie `https://<Ihr-Name>.github.io/<repo-name>`. Für unser Beispiel ist es unter <https://mdn.github.io/client-toolchain-example/>.

Nun für die letzte Verknüpfung in unserer Toolchain: einen Test, um sicherzustellen, dass unser Code funktioniert.

## Testen

Das Testen selbst ist ein weites Thema, selbst im Bereich der Frontend-Entwicklung. Ich werde Ihnen zeigen, wie Sie einen ersten Test zu Ihrem Projekt hinzufügen und wie Sie den Test verwenden, um die Bereitstellung des Projekts zu verhindern oder zuzulassen.

Beim Herangehen an Tests gibt es viele Möglichkeiten, das Problem anzugehen:

- End-to-End-Tests, bei denen Ihr Besucher etwas anklickt und etwas anderes passiert.
- Integrationstests, die im Grunde sagen "funktioniert ein Codeblock noch, wenn er mit einem anderen Block verbunden ist?"
- Unit-Tests, bei denen kleine und spezifische Funktionalitäten getestet werden, um zu sehen, ob sie das tun, was sie sollen.
- [Und viele andere Typen](https://en.wikipedia.org/wiki/Functional_testing). Auch unser [Cross-Browser-Testmodul](/de/docs/Learn_web_development/Extensions/Testing) bietet eine Menge nützlicher Testinformationen.

Denken Sie auch daran, dass Tests nicht auf JavaScript beschränkt sind; Tests können gegen das gerenderte DOM, Benutzerinteraktionen, CSS und sogar das Aussehen einer Seite durchgeführt werden.

Für dieses Projekt werden wir jedoch einen kleinen Test erstellen, der überprüft, ob die GitHub-API-Daten im richtigen Format vorliegen. Wenn nicht, schlägt der Test fehl und verhindert, dass das Projekt live geht. Alles andere wäre außerhalb des Umfangs dieses Moduls — das Testen ist ein riesiges Thema, das wirklich ein eigenes separates Modul erfordert. Wir hoffen, dass dieser Abschnitt Sie zumindest auf die Notwendigkeit von Tests aufmerksam macht und den Anstoß gibt, mehr zu lernen und auszuprobieren.

Der Test selbst ist nicht wichtig. Wichtig ist, wie der Fehlschlag oder Erfolg gehandhabt wird. Da wir bereits eine benutzerdefinierte Build-Aktion schreiben, können wir einen Schritt vor dem Build hinzufügen, der den Test ausführt. Wenn der Test fehlschlägt, wird der Build fehlschlagen und die Bereitstellung nicht stattfinden.

Die gute Nachricht ist: Da wir Vite verwenden, bietet Vite bereits ein gutes integriertes Tool zum Testen: [Vitest](https://vitest.dev/guide/).

Lassen Sie uns starten.

1. Installieren Sie Vitest:

   ```bash
   npm install --save-dev vitest
   ```

2. Finden Sie in Ihrer package.json Ihr `scripts`-Mitglied und aktualisieren Sie es so, dass es die folgenden Test- und Build-Befehle enthält:

   ```json
   "scripts": {
     // …
     "test": "vitest"
   }
   ```

   > [!NOTE]
   > Hier ist das Gute an der Verwendung von Vite zusammen mit Vitest: Wenn Sie andere Testframeworks verwenden, müssen Sie eine weitere Konfiguration hinzufügen, die beschreibt, wie die Testdateien transformiert werden müssen, aber Vitest wird automatisch die Vite-Konfiguration verwenden.

3. Jetzt müssen wir natürlich den Test zu unserem Codebase hinzufügen. Normalerweise, wenn Sie die Funktionalität einer Datei testen, sagen wir `App.jsx`, würden Sie eine Datei namens `App.test.jsx` daneben hinzufügen. In diesem Fall testen wir nur die Daten, also lassen Sie uns ein anderes Verzeichnis erstellen, um unsere Tests zu speichern. Sie können das Beispiel-Repository öffnen, das Sie im vorherigen Kapitel heruntergeladen haben, und den `tests`-Ordner kopieren.

4. Um nun manuell den Test auszuführen, können wir von der Kommandozeile aus folgendes ausführen:

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

   Das bedeutet, der Test ist bestanden. Wie Vite wird es auf Änderungen achten und die Tests erneut ausführen, wenn Sie eine Datei speichern. Wir können mit <kbd>q</kbd> beenden.

5. Wir müssen den Test noch mit unserer Build-Aktion verknüpfen, damit er den Build blockiert, wenn der Test fehlschlägt. Öffnen Sie die Datei `.github/workflows/github-pages.yml` (oder welchen Dateinamen Sie Ihrer Build-Aktion gegeben haben) und fügen Sie den folgenden Schritt direkt vor dem Schritt hinzu, der `npm run build` ausführt:

   ```yaml
   - name: Install deps
     run: npm ci

   # Add this
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   Dies führt den Test vor dem Build-Schritt aus. Wenn der Test fehlschlägt, wird der Build fehlschlagen und die Bereitstellung nicht stattfinden.

6. Lassen Sie uns nun den neuen Code zu GitHub hochladen, indem wir ähnliche Befehle verwenden wie zuvor:

   ```bash
   git add .
   git commit -m 'adding test'
   git push origin main
   ```

   In einigen Fällen möchten Sie vielleicht das Ergebnis des gebauten Codes testen (da dies nicht ganz der ursprüngliche Code ist, den wir geschrieben haben), also muss der Test möglicherweise nach dem Build-Befehl ausgeführt werden. Sie müssen all diese einzelnen Aspekte berücksichtigen, während Sie an Ihren eigenen Projekten arbeiten.

Schließlich wird GitHub Pages eine Minute oder so nach dem Pushen des Projekts das Update bereitstellen. Aber nur, wenn es den eingeführten Test besteht.

## Zusammenfassung

Das war's für unsere Beispiel-Fallstudie und für das Modul! Wir hoffen, Sie fanden es nützlich. Während es noch ein langer Weg ist, bevor Sie sich als Klientseitiger-Tooling-Zauberer betrachten können, hoffen wir, dass Ihnen dieses Modul diesen ersten wichtigen Schritt gegeben hat, um das Klientseitige-Tooling zu verstehen und das Vertrauen, mehr zu lernen und neue Dinge auszuprobieren.

Lassen Sie uns alle Teile der Toolchain zusammenfassen:

- Code-Qualität und Wartung werden von ESLint und Prettier durchgeführt. Diese Tools werden über `npm install --dev eslint prettier eslint-plugin-react ...` als `devDependencies` zum Projekt hinzugefügt (das ESLint-Plugin ist erforderlich, da dieses spezielle Projekt React verwendet).
- Es gibt zwei Konfigurationsdateien, die die Code-Qualität-Tools lesen: `eslint.config.js` und `.prettierrc`.
- Während der Entwicklung fügen wir weiterhin Abhängigkeiten mit npm hinzu. Der Vite-Entwicklungsserver läuft im Hintergrund, um auf Änderungen zu achten und unseren Sourcecode automatisch zu bauen.
- Die Bereitstellung erfolgt durch Pushing unserer Änderungen zu GitHub (im "main"-Zweig), was eine Build-und Bereitstellungsaktion mit GitHub Actions auslöst, um das Projekt zu veröffentlichen. Für unsere Instanz ist diese URL <https://mdn.github.io/client-toolchain-example/>; Sie werden Ihre eigene einzigartige URL haben.
- Wir haben auch einen einfachen Test, der das Bauen und Bereitstellen der Seite blockiert, wenn der GitHub API-Feed uns nicht das korrekte Datenformat liefert.

Für diejenigen unter Ihnen, die eine Herausforderung suchen, überlegen Sie, ob Sie einen Teil dieser Toolchain optimieren können. Einige Fragen, die Sie sich selbst stellen können:

- Können wir nur die Funktionen von plotly.js extrahieren, die wir benötigen? Dies wird die Größe des JavaScript-Bundles reduzieren.
- Vielleicht möchten Sie andere Tools hinzufügen, wie TypeScript zur Typüberprüfung oder stylelint zur CSS-Linting?
- Könnte React durch [etwas Kleineres](https://preactjs.com/) ersetzt werden?
- Könnten Sie weitere Tests hinzufügen, um zu verhindern, dass ein schlechter Build bereitgestellt wird, wie [Leistungsprüfungen](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)?
- Könnten Sie eine Benachrichtigung einrichten, die Sie informiert, wenn ein neuer Deployment erfolgreich oder fehlgeschlagen ist?

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
