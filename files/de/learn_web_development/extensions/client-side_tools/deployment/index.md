---
title: Bereitstellung unserer App
slug: Learn_web_development/Extensions/Client-side_tools/Deployment
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

Im letzten Artikel unserer Reihe nehmen wir die im vorherigen Artikel aufgebaute Toolchain und erweitern sie, damit wir unsere Beispiel-App bereitstellen können. Wir laden den Code auf GitHub hoch, stellen ihn über GitHub Pages bereit und zeigen Ihnen sogar, wie Sie einen einfachen Test in den Prozess integrieren.

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
        Abschließen der Fallstudie zur kompletten Toolchain, mit Fokus auf die Bereitstellung der App.
      </td>
    </tr>
  </tbody>
</table>

## Nach der Entwicklung

In diesem Abschnitt des Projektlebenszyklus gibt es potenziell eine Vielzahl von Problemen zu lösen. Daher ist es wichtig, eine Toolchain zu erstellen, die diese Probleme mit möglichst wenig manuellen Eingriffen löst.

Hier sind nur ein paar Dinge, die für dieses spezielle Projekt zu berücksichtigen sind:

- Erstellen eines Produktions-Builds: Sicherstellen, dass Dateien minimiert, gestückelt, mit Tree-Shaking versehen und "Cache gebustet" sind.
- Ausführen von Tests: Diese können von "ist der Code richtig formatiert?" bis "erfüllt dieses Ding meine Erwartungen?" reichen und sicherstellen, dass bei fehlschlagenden Tests keine Bereitstellung erfolgt.
- Tatsächliche Bereitstellung des aktualisierten Codes auf einer Live-URL: Oder möglicherweise eine Staging-URL, sodass es zuerst überprüft werden kann.

> [!NOTE]
> "Cache busting" ist ein neuer Begriff, den wir in diesem Modul noch nicht kennengelernt haben. Dabei handelt es sich um die Strategie, den eigenen Cache-Mechanismus des Browsers zu durchbrechen und den Browser zu zwingen, eine neue Kopie Ihres Codes herunterzuladen. Vite (und viele andere Tools) generiert Dateinamen, die für jeden neuen Build eindeutig sind. Dieser eindeutige Dateiname "bustet" den Cache Ihres Browsers und sorgt dafür, dass der Browser den aktualisierten Code bei jeder Änderung herunterlädt.

Die oben genannten Aufgaben lassen sich auch in weitere Aufgaben unterteilen; beachten Sie, dass die meisten Webentwicklungsteams eigene Begriffe und Prozesse für zumindest einige Teilbereiche der Nachentwicklungsphase haben.

Für dieses Projekt nutzen wir das kostenlose Angebot für statisches Hosting von [GitHub Pages](https://pages.github.com/), um unser Projekt zu hosten. Es sorgt nicht nur dafür, dass unsere Website im Internet bereitgestellt wird, sondern gibt uns auch eine URL zu unserer Website. Das ist großartig — viele MDN-Beispiel-Websites sind auf GitHub Pages gehostet.

Die Bereitstellung für das Hosting erfolgt tendenziell am Ende des Projektlebenszyklus. Mit Diensten wie GitHub Pages, die die Kosten für Bereitstellungen (sowohl finanziell als auch in Bezug auf die tatsächlich erforderliche Zeit) reduzieren, ist es jedoch möglich, während der Entwicklung bereitzustellen, um entweder an Work-in-Progress zu teilen oder um aus einem anderen Grund eine Vorabveröffentlichung zu machen.

GitHub bietet einen reibungslosen Workflow, um neuen Code in eine Live-Website zu verwandeln:

- Sie laden Ihren Code auf GitHub hoch.
- Sie definieren eine [GitHub Action](https://docs.github.com/en/actions), die ausgelöst wird, wenn ein neuer Push in den Hauptzweig erfolgt, der den Code baut und an einem bestimmten Ort ablegt.
- GitHub Pages stellt den Code dann unter einer bestimmten URL bereit.

Genau nach solchen verbundenen Diensten sollten Sie suchen, wenn Sie Ihre eigene Toolchain erstellen. Wir können unseren Code commiten und auf GitHub pushen, und der aktualisierte Code wird automatisch den gesamten Build-Prozess auslösen. Wenn alles in Ordnung ist, wird eine Live-Änderung automatisch bereitgestellt. Die _einzige_ Aktion, die wir ausführen müssen, ist der initiale "Push".

Wir müssen jedoch diese Schritte einrichten, und wir werden uns das jetzt ansehen.

## Der Build-Prozess

Da wir Vite für die Entwicklung nutzen, ist die Option zum Bauen sehr einfach hinzuzufügen. Wie wir bereits gesehen haben, haben wir ein benutzerdefiniertes Skript `npm run build`, das es Vite ermöglicht, alles bereit für die Produktion zu bauen, anstatt es nur für Entwicklungs- und Testzwecke auszuführen. Dazu gehören Minifizierung und Tree-Shaking des Codes sowie Cache-Busting bei Dateinamen.

Es ist eine gute Praxis, immer ein `build`-Skript in Ihrem Projekt zu definieren, sodass wir uns auf `npm run build` verlassen können, um stets den vollständigen Build-Schritt auszuführen, ohne die spezifischen Build-Befehlsargumente für jedes Projekt zu merken.

Der neu erstellte Produktionscode wird in einem neuen Verzeichnis namens `dist` abgelegt, das _alle_ erforderlichen Dateien enthält, um die Website auszuführen, bereit zum Hochladen auf einen Server.

Dieser Schritt manuell auszuführen, ist jedoch nicht unser Endziel - wir möchten, dass der Build automatisch erfolgt und das Ergebnis des `dist`-Verzeichnisses live auf unserer Website bereitgestellt wird.

## Änderungen zu GitHub committen

Dieser Abschnitt wird Ihnen helfen, Ihren Code in einem Git-Repository zu speichern, ist jedoch noch weit von einem vollständigen Git-Tutorial entfernt. Es gibt viele großartige Tutorials und Bücher, und unsere [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control)-Seite ist ein guter Startpunkt.

Wir haben unser Arbeitsverzeichnis bereits als Git-Arbeitsverzeichnis initialisiert. Ein schneller Weg, dies zu überprüfen, ist, den folgenden Befehl auszuführen:

```bash
git status
```

Sie sollten einen Statusbericht erhalten, welche Dateien verfolgt werden, welche Dateien bereitgestellt sind usw. — alles Begriffe, die zur Git-Grammatik gehören. Wenn Sie den Fehler `fatal: not a git repository` erhalten, dann ist das Arbeitsverzeichnis kein Git-Arbeitsverzeichnis und Sie müssen Git mit `git init` initialisieren.

Jetzt liegen drei Aufgaben vor uns:

- Alle Änderungen, die wir vorgenommen haben, zur Bühne hinzufügen (ein spezieller Ort, von dem Git Dateien commiten wird).
- Die Änderungen ins Repository committen.
- Die Änderungen zu GitHub pushen.

1. Um Änderungen hinzuzufügen, führen Sie den folgenden Befehl aus:

   ```bash
   git add .
   ```

   Beachten Sie den Punkt am Ende, er bedeutet "alles in diesem Verzeichnis". Der Befehl `git add .` ist ein umfassender Ansatz — er wird alle lokalen Änderungen, an denen Sie gearbeitet haben, auf einmal hinzufügen. Wenn Sie eine feinere Kontrolle darüber haben möchten, was Sie hinzufügen, verwenden Sie `git add -p` für einen interaktiven Prozess oder fügen Sie einzelne Dateien mit `git add path/to/file` hinzu.

2. Jetzt, da der gesamte Code bereitgestellt ist, können wir committen; führen Sie den folgenden Befehl aus:

   ```bash
   git commit -m 'committing initial code'
   ```

   > [!NOTE]
   > Obwohl Sie frei sind, im Commit-Kommentar zu schreiben, was Sie möchten, gibt es im Web einige nützliche Tipps zu guten Commit-Kommentaren. Halten Sie sie kurz, prägnant und beschreibend, sodass sie klar beschreiben, was die Änderung bewirkt.

3. Endlich, der Code muss zu Ihrem auf GitHub gehosteten Repository gepusht werden. Lassen Sie uns das jetzt tun.

   Besuchen Sie bei GitHub <https://github.com/new> und erstellen Sie Ihr eigenes Repository, um diesen Code zu hosten.

4. Geben Sie Ihrem Repository einen kurzen, einprägsamen Namen ohne Leerzeichen (verwenden Sie Bindestriche für die Trennung von Wörtern) und eine Beschreibung, und klicken Sie dann auf _Create repository_ am unteren Rand der Seite.

   Sie sollten jetzt eine "Remote" URL haben, die auf Ihr neues GitHub-Repo zeigt.

   ![GitHub Screenshot zeigt Remote-URLs, die Sie zur Bereitstellung des Codes in einem GitHub-Repo verwenden können](github-quick-setup.png)

5. Dieser Remote-Standort muss unserem lokalen Git-Repository hinzugefügt werden, bevor wir es hochpushen können, ansonsten kann er es nicht finden. Sie müssen einen Befehl mit der folgenden Struktur ausführen (verwenden Sie vorerst die bereitgestellte HTTPS-Option — besonders wenn Sie neu bei GitHub sind — nicht die SSH-Option):

   ```bash
   git remote add origin https://github.com/your-name/repo-name.git
   ```

   Wenn Ihre Remote-URL beispielsweise `https://github.com/remy/super-website.git` war, wie im obigen Screenshot, wäre Ihr Befehl

   ```bash
   git remote add origin https://github.com/remy/super-website.git
   ```

   Ändern Sie die URL in Ihr eigenes Repository und führen Sie es jetzt aus.

   > [!NOTE]
   > Nachdem Sie Ihren Repository-Namen ausgewählt haben, stellen Sie sicher, dass die `base`-Option in Ihrer `vite.config.js` diesen Namen widerspiegelt, wie im [vorherigen Kapitel](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#javascript_transformation) erwähnt. Andernfalls werden die JavaScript- und CSS-Ressourcen nicht korrekt verlinkt.

6. Nun sind wir bereit, unseren Code zu GitHub zu pushen; führen Sie den folgenden Befehl jetzt aus:

   ```bash
   git push origin main
   ```

   Zu diesem Zeitpunkt werden Sie aufgefordert, einen Benutzernamen und ein Passwort einzugeben, bevor Git den Push zulässt. Dies liegt daran, dass wir die HTTPS-Option anstelle der SSH-Option verwendet haben, wie im früheren Screenshot zu sehen war. Dafür benötigen Sie Ihren GitHub-Benutzernamen und dann — wenn Sie keine Zwei-Faktor-Authentifizierung (2FA) aktiviert haben — Ihr GitHub-Passwort. Wir würden immer empfehlen, 2FA zu verwenden, wenn möglich, jedoch bedenken Sie, dass Sie, falls Sie dies tun, auch ein "persönliches Zugriffstoken" verwenden müssen. GitHub-Hilfeseiten bieten einen [ausgezeichneten und einfachen Leitfaden, der beschreibt, wie man eines erhält](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

> [!NOTE]
> Falls Sie die SSH-Option verwenden möchten, um das Eingeben Ihres Benutzernamens und Passworts bei jedem Push zu GitHub zu vermeiden, [führt Sie dieses Tutorial hindurch, wie](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Dieser letzte Befehl weist Git an, den Code an den "Remote" Standort zu pushen, den wir `origin` genannt haben (das Repository, das auf github.com gehostet ist — wir könnten es nennen, wie wir wollen) unter Verwendung des Zweigs `main`. Wir haben bisher keine Zweige behandelt, aber der "main"-Zweig ist der Standardort für unsere Arbeit, und dort startet Git. Wenn wir die Aktion definieren, die ausgelöst wird, um die Website zu bauen, lassen wir sie ebenfalls auf Änderungen im "main"-Zweig achten.

> [!NOTE]
> Bis Oktober 2020 war der Standardzweig auf GitHub `master`, der aus verschiedenen sozialen Gründen zu `main` gewechselt wurde. Sie sollten sich dessen bewusst sein, dass dieser ältere Standardzweig in verschiedenen Projekten, die Sie antreffen, erscheinen kann, aber wir empfehlen, `main` für Ihre eigenen Projekte zu verwenden.

Mit unserem Projekt, das in Git committet und in unser GitHub-Repository gepusht wurde, ist der nächste Schritt in der Toolchain die Definition einer Build-Aktion, damit unser Projekt live im Web bereitgestellt werden kann!

## Verwendung von GitHub Actions für die Bereitstellung

GitHub Actions, ähnlich wie die ESLint-Konfiguration, ist ein weiteres tiefes Thema, in das man eintauchen kann. Es ist nicht leicht, es beim ersten Mal richtig zu machen, aber für beliebte Aufgaben wie "eine statische Website bauen und auf GitHub Pages bereitstellen" gibt es viele Beispiele, aus denen man kopieren und einfügen kann. Sie können die Anweisungen in [Veröffentlichen mit einem benutzerdefinierten GitHub-Actions-Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) befolgen. Sie können auch unsere [GitHub Action-Datei](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml) für ein funktionierendes Beispiel einsehen. (Der Name der Datei spielt keine Rolle.)

Nachdem Sie diese Datei in den Hauptzweig committen, sollten Sie ein kleines grünes Häkchen neben dem Commit-Titel sehen:

![GitHub Screenshot zeigt ein grünes Häkchen neben einem Commit-Titel](build-action-pass.png)

Wenn Sie einen gelben Punkt sehen, bedeutet das, dass die Aktion ausgeführt wird, und wenn Sie ein rotes Kreuz sehen, bedeutet das, dass die Aktion fehlgeschlagen ist. Klicken Sie auf das Symbol, und Sie können den Status und die Protokolle Ihrer eigenen Build-Aktion (in unserem Fall "Deploy build" genannt) sehen.

Nach ein paar weiteren Minuten können Sie Ihre GitHub Pages-URL besuchen, um Ihre Website live im Web zu sehen. Der Link sieht in etwa so aus: `https://<your-name>.github.io/<repo-name>`. In unserem Beispiel ist es unter <https://mdn.github.io/client-toolchain-example/>.

Nun zum letzten Element in unserer Toolchain: ein Test, um sicherzustellen, dass unser Code funktioniert.

## Testen

Testen ist ein umfangreiches Thema, selbst im Bereich der Frontend-Entwicklung. Ich zeige Ihnen, wie Sie einen ersten Test zu Ihrem Projekt hinzufügen und wie Sie den Test nutzen können, um die Projektbereitstellung zu ermöglichen oder zu verhindern.

Beim Testen gibt es viele Ansätze, das Problem zu behandeln:

- End-to-End-Tests, bei denen Ihr Besucher etwas anklickt und etwas anderes passiert.
- Integrationstests, die im Grunde sagen "funktioniert ein Codeblock noch, wenn er mit einem anderen Block verbunden ist?"
- Unit-Tests, bei denen kleine und spezifische Funktionalitäten getestet werden, um zu sehen, ob sie das tun, was sie sollen.
- [Und viele weitere Testarten](https://en.wikipedia.org/wiki/Functional_testing). Siehe auch unser [Cross-Browser-Testing-Modul](/de/docs/Learn_web_development/Extensions/Testing) für eine Menge nützlicher Testinformationen.

Denken Sie auch daran, dass Tests nicht auf JavaScript beschränkt sind; Tests können gegen den gerenderten DOM, Benutzerinteraktionen, CSS und sogar das Aussehen einer Seite durchgeführt werden.

Für dieses Projekt erstellen wir jedoch einen kleinen Test, der überprüft, ob die GitHub-API-Daten im richtigen Format vorliegen. Wenn nicht, schlägt der Test fehl und verhindert, dass das Projekt live geht. Alles andere wäre über den Rahmen dieses Moduls hinaus - Testen ist ein riesiges Thema, das wirklich ein eigenes Modul benötigt. Wir hoffen, dass dieser Abschnitt Sie zumindest auf die Notwendigkeit von Tests aufmerksam macht und den Anstoß gibt, mehr zu lernen.

Der Test selbst ist nicht das Wichtigste. Wichtig ist, wie das Scheitern oder Bestehen gehandhabt wird. Da wir ohnehin eine benutzerdefinierte Build-Aktion schreiben, können wir einen Schritt vor dem Build hinzufügen, der den Test ausführt. Schlägt der Test fehl, schlägt auch der Build fehl, und die Bereitstellung erfolgt nicht.

Die gute Nachricht ist: Da wir Vite verwenden, bietet Vite bereits ein gutes integriertes Werkzeug zum Testen: [Vitest](https://vitest.dev/guide/).

Lassen Sie uns beginnen.

1. Installieren Sie Vitest:

   ```bash
   npm install --save-dev vitest
   ```

2. In Ihrer package.json finden Sie Ihr `scripts`-Element und aktualisieren es so, dass es die folgenden Test- und Build-Befehle enthält:

   ```json
   "scripts": {
     // …
     "test": "vitest"
   }
   ```

   > [!NOTE]
   > Das ist der gute Teil bei der Verwendung von Vite zusammen mit Vitest: Bei Verwendung anderer Testframeworks müssen Sie eine weitere Konfiguration hinzufügen, die beschreibt, wie die Testdateien transformiert werden müssen, aber Vitest wird automatisch die Vite-Konfiguration verwenden.

3. Natürlich müssen wir den Test in unseren Code einfügen. Normalerweise würden Sie, wenn Sie die Funktionalität einer Datei, sagen wir `App.jsx`, testen, eine Datei namens `App.test.jsx` daneben hinzufügen. In diesem Fall testen wir nur die Daten, also erstellen wir ein anderes Verzeichnis, um unsere Tests zu speichern. Sie können das Beispiel-Repository, das Sie im vorherigen Kapitel heruntergeladen haben, öffnen und den Ordner `tests` kopieren.

4. Um den Test manuell auszuführen, können wir folgendes von der Kommandozeile ausführen:

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

   Dies bedeutet, dass der Test bestanden wurde. Wie bei Vite wird es auf Änderungen achten und die Tests neu ausführen, wenn Sie eine Datei speichern. Sie können mit <kbd>q</kbd> beenden.

5. Wir müssen den Test immer noch mit unserer Build-Aktion verbinden, sodass er den Build blockiert, wenn der Test fehlschlägt. Öffnen Sie die `.github/workflows/github-pages.yml`-Datei (oder welchen Namen Sie Ihrer Build-Aktion gegeben haben) und fügen Sie den folgenden Schritt direkt vor dem Schritt, der `npm run build` ausführt, hinzu:

   ```yaml
   - name: Install deps
     run: npm ci

   # Add this
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   Dies wird den Test vor dem Build-Schritt ausführen. Wenn der Test fehlschlägt, schlägt der Build ebenfalls fehl, und die Bereitstellung wird nicht durchgeführt.

6. Lassen Sie uns den neuen Code zu GitHub hochladen, mit ähnlichen Befehlen wie zuvor:

   ```bash
   git add .
   git commit -m 'adding test'
   git push origin main
   ```

   In einigen Fällen möchten Sie das Ergebnis des kompilierten Codes (da dieser nicht ganz der Originalcode ist, den wir geschrieben haben) testen, sodass der Test möglicherweise nach dem Build-Befehl ausgeführt werden muss. Sie müssen alle diese individuellen Aspekte berücksichtigen, während Sie an Ihren eigenen Projekten arbeiten.

Schließlich, eine Minute oder so nach dem Pushen, wird GitHub Pages das Projekt-Update bereitstellen. Aber nur, wenn es den neu eingeführten Test besteht.

## Zusammenfassung

Das war's für unsere Beispiel-Fallstudie und für das Modul! Wir hoffen, Sie fanden es nützlich. Während es noch ein langer Weg ist, bevor Sie sich selbst als Experte für Clientseitige Tools betrachten können, hoffen wir, dass Ihnen dieses Modul den ersten wichtigen Schritt zum Verständnis von clientseitigen Tools gegeben hat und das Vertrauen, mehr zu lernen und neue Dinge auszuprobieren.

Lassen Sie uns alle Teile der Toolchain zusammenfassen:

- Codequalität und Wartung werden von ESLint und Prettier durchgeführt. Diese Tools werden als `devDependencies` zum Projekt hinzugefügt über `npm install --dev eslint prettier eslint-plugin-react ...` (das ESLint-Plugin ist erforderlich, weil dieses spezielle Projekt React verwendet).
- Es gibt zwei Konfigurationsdateien, die die Codequalitäts-Tools lesen: `eslint.config.js` und `.prettierrc`.
- Während der Entwicklung fügen wir weiterhin Abhängigkeiten mit npm hinzu. Der Vite-Entwicklungsserver wird im Hintergrund ausgeführt, um Änderungen zu überwachen und automatisch unseren Quellcode zu bauen.
- Die Bereitstellung erfolgt durch das Hochladen unserer Änderungen auf GitHub (im "main"-Zweig), das eine Build- und Bereitstellungsaktion auslöst, um das Projekt zu veröffentlichen. Für unser Beispiel ist diese URL <https://mdn.github.io/client-toolchain-example/>; Sie werden Ihre eigene einzigartige URL haben.
- Wir haben auch einen einfachen Test, der das Bauen und Bereitstellen der Seite blockiert, wenn das GitHub-API-Feed uns nicht das richtige Datenformat gibt.

Für diejenigen von Ihnen, die eine Herausforderung suchen, überlegen Sie, ob Sie einen Teil dieser Toolchain optimieren können. Einige Fragen, die Sie sich stellen sollten:

- Können wir nur die Funktionen von plotly.js extrahieren, die wir benötigen? Dadurch wird die JavaScript-Bundlegröße reduziert.
- Vielleicht möchten Sie andere Tools hinzufügen, wie TypeScript zur Typüberprüfung oder stylelint für CSS-Linting?
- Könnte React durch [etwas Kleineres](https://preactjs.com/) ersetzt werden?
- Könnten Sie weitere Tests hinzufügen, um einen schadhaften Build von der Bereitstellung abzuhalten, wie [Leistungs-Audits](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)?
- Könnten Sie eine Benachrichtigung einrichten, um Ihnen mitzuteilen, wenn eine neue Bereitstellung erfolgreich war oder fehlgeschlagen ist?

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
