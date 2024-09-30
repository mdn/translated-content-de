---
title: Bereitstellung unserer App
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Deployment
l10n:
  sourceCommit: 3bfbb30511072e6318b12b56c0b4208448fa36bf
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

Im abschließenden Artikel unserer Serie nehmen wir die Beispiel-Toolchain aus dem vorherigen Artikel und erweitern sie, um unsere Beispiel-App bereitzustellen. Wir pushen den Code zu GitHub, deployen ihn mit GitHub Pages und zeigen Ihnen sogar, wie Sie einen einfachen Test in den Prozess einfügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Abschluss der Bearbeitung unserer vollständigen Toolchain-Fallstudie mit Fokus auf
        die Bereitstellung der App.
      </td>
    </tr>
  </tbody>
</table>

## Nach der Entwicklung

In dieser Phase des Projekts gibt es möglicherweise eine Vielzahl von Problemen, die gelöst werden müssen. Daher ist es wichtig, eine Toolchain zu erstellen, die diese Probleme mit möglichst geringem manuellem Aufwand bewältigt.

Hier sind nur einige Dinge, die für dieses spezielle Projekt zu beachten sind:

- Erstellung eines Produktions-Builds: Sicherstellen, dass Dateien minimiert, in Chunks aufgeteilt, mit Tree-Shaking versehen und durch "Cache Busting" aktualisiert werden.
- Ausführen von Tests: Diese können von "Ist dieser Code korrekt formatiert?" bis "Erfüllt dies meine Erwartungen?" reichen und sicherstellen, dass fehlerhafte Tests die Bereitstellung verhindern.
- Tatsächliche Bereitstellung des aktualisierten Codes an eine Live-URL: Oder möglicherweise eine Staging-URL, um ihn zuerst überprüfen zu können.

> [!NOTE]
> Cache Busting ist ein neuer Begriff, dem wir in diesem Modul noch nicht begegnet sind. Dies ist die Strategie, den eigenen Caching-Mechanismus eines Browsers zu durchbrechen, wodurch der Browser gezwungen wird, eine neue Kopie Ihres Codes herunterzuladen. Vite (und viele andere Tools) generieren Dateinamen, die bei jedem neuen Build einzigartig sind. Dieser einzigartige Dateiname "zerstört" den Cache des Browsers und sorgt so dafür, dass der Browser bei jedem Update den neuesten Code herunterlädt.

Die oben genannten Aufgaben lassen sich weiter unterteilen. Beachten Sie, dass die meisten Webentwicklungsteams ihre eigenen Begriffe und Prozesse für zumindest einen Teil der Nachentwicklungsphase haben.

Für dieses Projekt werden wir das kostenlose statische Hosting-Angebot von [GitHub Pages](https://pages.github.com/) nutzen, um unser Projekt zu hosten. Es dient nicht nur zur Bereitstellung unserer Website im Internet, sondern gibt uns auch eine URL zu unserer Website. Es ist großartig — viele MDN-Beispielwebsites sind auf GitHub Pages gehostet.

Das Bereitstellen auf ein Hosting tendiert zum Ende des Projektlebenszyklus, aber mit Diensten wie GitHub Pages, die die Kosten der Bereitstellungen senken (sowohl finanziell als auch in Bezug auf die benötigte Zeit für die tatsächliche Bereitstellung), ist es möglich, während der Entwicklung bereitzustellen, um entweder Work-in-Progress zu teilen oder aus einem anderen Grund eine Vorabveröffentlichung durchzuführen.

GitHub bietet einen reibungslosen Workflow, um neuen Code in eine Live-Website umzuwandeln:

- Sie pushen Ihren Code zu GitHub.
- Sie definieren eine [GitHub Action](https://docs.github.com/en/actions), die ausgelöst wird, wenn es einen neuen Push auf den Haupt-Branch gibt, der den Code baut und an einem bestimmten Ort ablegt.
- GitHub Pages bedient dann den Code an einer bestimmten URL.

Genau diese Art von verbundenen Diensten ermutigen wir Sie zu suchen, wenn Sie sich für Ihre eigene Build-Toolchain entscheiden. Wir können unseren Code committen und nach GitHub pushen, und der aktualisierte Code wird automatisch die gesamte Build-Routine auslösen. Wenn alles in Ordnung ist, erhalten wir eine automatisch bereitgestellte Live-Änderung. Die _einzige_ Aktion, die wir ausführen müssen, ist dieser erste "Push".

Wir müssen diese Schritte jedoch einrichten, und das schauen wir uns jetzt an.

## Der Build-Prozess

Da wir Vite für die Entwicklung verwenden, ist die Build-Option sehr einfach hinzuzufügen. Wie wir bereits gesehen haben, haben wir ein benutzerdefiniertes Script `npm run build`, das Vite alles für die Produktion bereitstellen lässt, anstatt es nur für Entwicklungs- und Testzwecke auszuführen. Dies beinhaltet [Minimierung](/de/docs/Glossary/Minification) und [Tree-Shaking](/de/docs/Glossary/Tree_shaking) des Codes sowie Cache Busting bei Dateinamen.

Es ist eine gute Praxis, immer ein `build`-Skript in Ihrem Projekt zu definieren, sodass wir uns auf `npm run build` verlassen können, um immer den vollständigen Build-Schritt auszuführen, ohne uns die spezifischen Build-Kommandos des Projekts merken zu müssen.

Der neu erstellte Produktionscode wird in einem neuen Verzeichnis namens `dist` abgelegt, das _alle_ zum Ausführen der Website erforderlichen Dateien enthält, bereit zur Bereitstellung auf einem Server.

Dieses Schritt manuell durchzuführen, ist jedoch nicht unser endgültiges Ziel — wir möchten, dass der Build automatisch erfolgt und das Ergebnis des `dist`-Verzeichnisses live auf unserer Website bereitgestellt wird.

## Änderungen zu GitHub committen

Dieser Abschnitt bringt Sie dazu, Ihren Code in ein Git-Repository zu speichern, aber es ist weit entfernt von einem Git-Tutorial. Es gibt viele großartige Tutorials und Bücher, und unsere Seite [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub) ist ein guter Anfang.

Wir haben unser Arbeitsverzeichnis bereits als Git-Arbeitsverzeichnis initialisiert. Eine schnelle Möglichkeit, dies zu überprüfen, ist das Ausführen des folgenden Befehls:

```bash
git status
```

Sie sollten einen Statusbericht darüber erhalten, welche Dateien verfolgt werden, welche Dateien gestaged sind usw. – alle Begriffe, die Teil der Git-Grammatik sind. Wenn Sie den Fehler `fatal: not a git repository` erhalten, dann ist das Arbeitsverzeichnis kein Git-Arbeitsverzeichnis, und Sie müssen Git mit `git init` initialisieren.

Nun liegen drei Aufgaben vor uns:

- Alle Änderungen, die wir vorgenommen haben, zum Stage hinzufügen (ein spezieller Name für den Ort, von dem Git Dateien committet).
- Die Änderungen zum Repository committen.
- Die Änderungen zu GitHub pushen.

1. Um Änderungen hinzuzufügen, führen Sie den folgenden Befehl aus:

   ```bash
   git add .
   ```

   Beachten Sie den Punkt am Ende, er bedeutet "alles in diesem Verzeichnis". Der Befehl `git add .` ist ein bisschen ein grobes Werkzeug — er fügt alle lokalen Änderungen, an denen Sie gearbeitet haben, in einem Rutsch hinzu. Wenn Sie eine genauere Kontrolle darüber haben möchten, was Sie hinzufügen, verwenden Sie `git add -p` für einen interaktiven Prozess oder fügen Sie einzelne Dateien mit `git add path/to/file` hinzu.

2. Jetzt, da alle Codes gestaged sind, können wir committen; führen Sie den folgenden Befehl aus:

   ```bash
   git commit -m 'committing initial code'
   ```

   > [!NOTE]
   > Obwohl es Ihnen freisteht, in der Commit-Nachricht zu schreiben, was Sie möchten, gibt es im Internet einige nützliche Tipps für gute Commit-Nachrichten. Halten Sie diese kurz, prägnant und beschreibend, damit sie klar beschreiben, was die Änderung bewirkt.

3. Schließlich muss der Code in Ihr auf GitHub gehostetes Repository gepusht werden. Lassen Sie uns dies jetzt tun.

   Besuchen Sie bei GitHub <https://github.com/new> und erstellen Sie Ihr eigenes Repository, um diesen Code zu hosten.

4. Geben Sie Ihrem Repository einen kurzen, einprägsamen Namen, ohne Leerzeichen (verwenden Sie Bindestriche, um Wörter zu trennen), und eine Beschreibung, und klicken Sie dann unten auf der Seite auf _Create repository_.

   Nun sollten Sie über eine "remote" URL verfügen, die auf Ihr neues GitHub-Repository zeigt.

   ![GitHub-Screenshot, der Remote-URLs zeigt, die Sie zum Bereitstellen von Code in einem GitHub-Repository verwenden können](github-quick-setup.png)

5. Dieser Remote-Standort muss zu unserem lokalen Git-Repository hinzugefügt werden, bevor wir es dorthin pushen können. Andernfalls kann es diesen nicht finden. Sie müssen einen Befehl mit der folgenden Struktur ausführen (verwenden Sie vorerst die angegebene HTTPS-Option – insbesondere, wenn Sie neu bei GitHub sind – nicht die SSH-Option):

   ```bash
   git remote add origin https://github.com/your-name/repo-name.git
   ```

   Wenn Ihre Remote-URL beispielsweise `https://github.com/remy/super-website.git` war, wie im Screenshot oben, wäre Ihr Befehl

   ```bash
   git remote add origin https://github.com/remy/super-website.git
   ```

   Ändern Sie die URL zu Ihrem eigenen Repository und führen Sie es jetzt aus.

   > [!NOTE]
   > Nachdem Sie Ihren Repository-Namen gewählt haben, stellen Sie sicher, dass die `base`-Option in Ihrer `vite.config.js` diesen Namen widerspiegelt, wie im [vorherigen Kapitel](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#javascript_transformation) erwähnt. Andernfalls werden die JavaScript- und CSS-Ressourcen nicht korrekt verlinkt.

6. Jetzt sind wir bereit, unseren Code zu GitHub zu pushen; führen Sie folgenden Befehl jetzt aus:

   ```bash
   git push origin main
   ```

   An diesem Punkt werden Sie aufgefordert, einen Benutzernamen und ein Passwort einzugeben, bevor Git den Push zulässt. Dies liegt daran, dass wir die HTTPS-Option anstelle der SSH-Option verwendet haben, wie im vorherigen Screenshot zu sehen ist. Dafür benötigen Sie Ihren GitHub-Benutzernamen und – falls Sie keine Zwei-Faktor-Authentifizierung (2FA) aktiviert haben – Ihr GitHub-Passwort. Wir empfehlen Ihnen immer, nach Möglichkeit 2FA zu verwenden, aber beachten Sie, dass Sie, wenn Sie dies tun, auch ein "Persönliches Zugriffstoken" verwenden müssen. Die Hilfe-Seiten von GitHub bietet Ihnen eine [ausgezeichnete und einfache Anleitung, wie Sie eines erhalten](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

> [!NOTE]
> Wenn Sie daran interessiert sind, die SSH-Option zu verwenden und dadurch die Notwendigkeit, Ihren Benutzernamen und Ihr Passwort jedes Mal einzugeben, wenn Sie zu GitHub pushen, zu vermeiden, [führt dieses Tutorial Sie durch, wie](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Dieser letzte Befehl weist Git an, den Code an den "remote" Ort zu pushen, den wir `origin` genannt haben (das ist das auf github.com gehostete Repository — wir hätten es nennen können, wie wir wollten) und den Branch `main` zu verwenden. Wir sind bisher nicht auf Zweige eingegangen, aber der "main"-Branch ist der Standardarbeitsplatz und es ist, wo Git startet. Wenn wir die Aktion definieren, die zum Bauen der Website ausgelöst wird, werden wir sie auch so einrichten, dass sie auf Änderungen im "main"-Branch achtet.

> [!NOTE]
> Bis Oktober 2020 war der Standard-Branch auf GitHub `master`, der aus verschiedenen sozialen Gründen auf `main` geändert wurde. Sie sollten sich bewusst sein, dass dieser ältere Standard-Branch in verschiedenen Projekten, auf die Sie stoßen, vorkommen kann, aber wir würden vorschlagen, `main` für Ihre eigenen Projekte zu verwenden.

Da unser Projekt in Git committed und in unser GitHub-Repository gepusht ist, ist der nächste Schritt in der Toolchain, eine Build-Aktion zu definieren, sodass unser Projekt live im Web bereitgestellt werden kann!

## Verwendung von GitHub Actions für die Bereitstellung

GitHub Actions, ähnlich wie ESLint-Konfigurationen, ist ein weiteres tiefes Thema, in das man eintauchen kann. Es ist nicht einfach, es beim ersten Versuch richtig zu machen, aber für beliebte Aufgaben wie "eine statische Website erstellen und auf GitHub Pages bereitstellen" gibt es viele Beispiele zum Kopieren und Einfügen. Sie können den Anweisungen in [Veröffentlichung mit einem benutzerdefinierten GitHub Actions-Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) folgen. Sie können [unser GitHub Action File](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml) für ein funktionierendes Beispiel überprüfen. (Der Name der Datei spielt keine Rolle.)

Nachdem Sie diese Datei im Haupt-Branch committet haben, sollten Sie ein kleines grünes Häkchen neben dem Commit-Titel sehen:

![GitHub-Screenshot, der ein grünes Häkchen neben einem Commit-Titel zeigt](build-action-pass.png)

Wenn Sie einen gelben Punkt sehen, bedeutet das, dass die Aktion läuft, und wenn Sie ein rotes Kreuz sehen, bedeutet das, dass die Aktion fehlgeschlagen ist. Klicken Sie auf das Symbol und Sie können den Status und die Logs Ihrer eigenen Build-Aktion sehen (in unserem Fall "Deploy build" genannt).

Nachdem Sie ein paar Minuten gewartet haben, können Sie Ihre GitHub Pages-URL besuchen, um Ihre Website live im Web zu sehen. Der Link sieht aus wie `https://<Ihr-Name>.github.io/<repo-name>`. Für unser Beispiel ist dies <https://mdn.github.io/client-toolchain-example/>.

Und jetzt für das letzte Glied in unserer Toolchain: Ein Test, um sicherzustellen, dass unser Code funktioniert.

## Testing

Testing selbst ist ein weites Feld, auch im Bereich der Front-End-Entwicklung. Ich zeige Ihnen, wie Sie einen ersten Test zu Ihrem Projekt hinzufügen und wie Sie den Test verwenden können, um zu verhindern, dass das Projekt bereitgestellt wird, falls es fehlschlägt.

Beim Herangehen an Tests gibt es viele Möglichkeiten, das Problem anzugehen:

- End-to-End-Tests, bei denen Ihr Besucher auf etwas klickt und etwas anderes passiert.
- Integrationstests, die im Wesentlichen sagen: "Arbeitet ein Codeblock noch zusammen, wenn er mit einem anderen Codeblock verbunden ist?"
- Unit-Tests, bei denen kleine und spezifische Funktionalitäten getestet werden, um zu sehen, ob sie das tun, was sie sollen.
- [Und noch viele weitere Typen](https://en.wikipedia.org/wiki/Functional_testing). Siehe auch unser [Cross Browser Testing Modul](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) für viele nützliche Testinformationen.

Denken Sie auch daran, dass Tests nicht auf JavaScript beschränkt sind; Tests können gegen den gerenderten DOM, Benutzerinteraktionen, CSS und sogar das Aussehen einer Seite durchgeführt werden.

Für dieses Projekt erstellen wir jedoch einen kleinen Test, der überprüft, ob die GitHub API-Daten im richtigen Format vorliegen. Ist dies nicht der Fall, schlägt der Test fehl und verhindert, dass das Projekt live geht. Alles andere wäre außerhalb des Umfangs dieses Moduls — Testing ist ein riesiges Thema, das wirklich ein eigenes separates Modul erfordert. Wir hoffen, dass dieser Abschnitt Sie zumindest auf die Notwendigkeit von Tests aufmerksam macht und den Samen pflanzt, der Sie dazu inspiriert, mehr zu lernen.

Der Test selbst ist nicht das Wichtige. Wichtig ist, wie das Versagen oder der Erfolg gehandhabt wird. Da wir bereits eine benutzerdefinierte Build-Aktion schreiben, können wir einen Schritt vor dem Build hinzufügen, der den Test ausführt. Wenn der Test fehlschlägt, schlägt auch der Build fehl und die Bereitstellung erfolgt nicht.

Die gute Nachricht ist: Da wir Vite verwenden, bietet Vite bereits ein gutes integriertes Tool für das Testing: [Vitest](https://vitest.dev/guide/).

Lassen Sie uns anfangen.

1. Installieren Sie Vitest:

   ```bash
   npm install --save-dev vitest
   ```

2. Finden Sie in Ihrer package.json den Eintrag `scripts` und aktualisieren Sie ihn, sodass er die folgenden Test- und Build-Kommandos enthält:

   ```json
   "scripts": {
     // …
     "test": "vitest"
   }
   ```

   > [!NOTE]
   > Hier ist der gute Teil der Verwendung von Vite zusammen mit Vitest: Wenn Sie andere Test-Frameworks verwenden, müssen Sie eine weitere Konfiguration hinzufügen, die beschreibt, wie die Testdateien transformiert werden müssen, aber Vitest nutzt automatisch die Vite-Konfiguration.

3. Natürlich müssen wir jetzt den Test zu unserem Codebase hinzufügen. Normalerweise, wenn Sie die Funktionalität einer Datei testen, z. B. `App.jsx`, würden Sie eine Datei namens `App.test.jsx` daneben hinzufügen. In diesem Fall testen wir nur die Daten, also erstellen wir ein weiteres Verzeichnis, um unsere Tests zu halten. Sie können das Beispiel-Repository öffnen, das Sie im vorherigen Kapitel heruntergeladen haben und das Verzeichnis `tests` kopieren.

4. Um den Test manuell auszuführen, können wir im Terminal folgenden Befehl ausführen:

   ```bash
   npm run test
   ```

   Sie sollten eine ähnliche Ausgabe sehen:

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

   Dies bedeutet, dass der Test bestanden wurde. Ähnlich wie Vite, wird es Änderungen überwachen und die Tests erneut ausführen, wenn Sie eine Datei speichern. Wir können mit der Taste <kbd>q</kbd> beenden.

5. Wir müssen den Test noch mit unserer Build-Aktion verknüpfen, sodass der Build blockiert wird, wenn der Test fehlschlägt. Öffnen Sie die Datei `.github/workflows/github-pages.yml` (oder welchen Namen Sie auch immer der Build-Aktion gegeben haben) und fügen Sie den folgenden Schritt direkt vor dem Schritt hinzu, der `npm run build` ausführt:

   ```yaml
   - name: Install deps
     run: npm ci

   # Add this
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   Dies wird den Test vor dem Build-Schritt ausführen. Wenn der Test fehlschlägt, wird auch der Build fehlschlagen und die Bereitstellung wird nicht stattfinden.

6. Jetzt lassen Sie uns den neuen Code zu GitHub hochladen, verwenden Sie dazu ähnliche Befehle wie zuvor:

   ```bash
   git add .
   git commit -m 'adding test'
   git push origin main
   ```

   In einigen Fällen möchten Sie vielleicht das Ergebnis des erstellten Codes testen (da dies nicht genau der ursprüngliche Code ist, den wir geschrieben haben), sodass der Test möglicherweise nach dem Build-Befehl ausgeführt werden muss. Sie müssen all diese einzelnen Aspekte berücksichtigen, während Sie an Ihren eigenen Projekten arbeiten.

Schließlich wird GitHub Pages eine Minute oder so nach dem Push das Projekt aktualisieren. Aber nur, wenn es den eingeführten Test besteht.

## Zusammenfassung

Das war's für unsere Beispiel-Fallstudie und für das Modul! Wir hoffen, Sie fanden sie nützlich. Während es ein langer Weg ist, bevor Sie sich als Client-seitiges Tooling-Wizard betrachten können, hoffen wir, dass dieses Modul Ihnen den ersten wichtigen Schritt zum Verständnis von Client-seitigem Tooling gibt und das Vertrauen vermittelt, mehr zu lernen und Neues auszuprobieren.

Lassen Sie uns alle Teile der Toolchain zusammenfassen:

- Codequalität und Wartung werden durch ESLint und Prettier durchgeführt. Diese Tools werden als `devDependencies` über `npm install --dev eslint prettier eslint-plugin-react ...` (das ESLint-Plugin ist erforderlich, weil dieses spezielle Projekt React verwendet) zum Projekt hinzugefügt.
- Es gibt zwei Konfigurationsdateien, die die Codequalitätstools lesen: `eslint.config.js` und `.prettierrc`.
- Während der Entwicklung fügen wir weiterhin Abhängigkeiten über npm hinzu. Der Vite-Entwicklungsserver läuft im Hintergrund, um Änderungen zu überwachen und automatisch unseren Quellcode zu bauen.
- Die Bereitstellung erfolgt durch das Pushen unserer Änderungen zu GitHub (auf dem "main"-Branch), was einen Build und eine Bereitstellung mittels GitHub Actions auslöst, um das Projekt zu veröffentlichen. Für unsere Instanz ist diese URL <https://mdn.github.io/client-toolchain-example/>; Sie werden Ihre eigene einzigartige URL haben.
- Wir haben auch einen einfachen Test eingeführt, der den Build und die Bereitstellung der Site blockiert, wenn der GitHub API-Feed uns nicht das richtige Datenformat gibt.

Für diejenigen von Ihnen, die eine Herausforderung suchen, überlegen Sie, ob Sie einen Teil dieser Toolchain optimieren können. Einige Fragen, die Sie sich stellen sollten:

- Können wir nur die Features von plotly.js extrahieren, die wir benötigen? Dies wird die JavaScript-Bundle-Größe reduzieren.
- Vielleicht möchten Sie andere Tools hinzufügen, wie TypeScript für die Typrprüfung oder stylelint für das CSS-Linting?
- Kann React gegen [etwas kleineres](https://preactjs.com/) ausgetauscht werden?
- Könnten Sie weitere Tests hinzufügen, um zu verhindern, dass ein schlechter Build bereitgestellt wird, wie [Leistungaudits](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)?
- Könnten Sie eine Benachrichtigung einrichten, um Ihnen mitzuteilen, wenn eine neue Bereitstellung erfolgreich oder fehlgeschlagen ist?

{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
