---
title: Bereitstellung unserer App
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Deployment
l10n:
  sourceCommit: 3bfbb30511072e6318b12b56c0b4208448fa36bf
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

Im letzten Artikel unserer Serie nehmen wir die im vorherigen Artikel aufgebaute Werkzeugkette und erweitern sie, um unsere Beispiel-App bereitzustellen. Wir übertragen den Code zu GitHub, stellen ihn mit GitHub Pages bereit und zeigen Ihnen sogar, wie Sie einen einfachen Test in den Prozess integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Den Abschluss unserer Fallstudie zur vollständigen Werkzeugkette schaffen, mit Schwerpunkt auf der Bereitstellung der App.
      </td>
    </tr>
  </tbody>
</table>

## Nach der Entwicklung

In dieser Phase des Projekts gibt es möglicherweise eine Vielzahl von Problemen zu lösen. Es ist daher wichtig, eine Werkzeugkette zu erstellen, die diese Probleme so weit wie möglich ohne manuelle Eingriffe bewältigt.

Hier sind einige Überlegungen zu diesem speziellen Projekt:

- Generierung eines Produktions-Builds: Sicherstellen, dass Dateien minimiert, aufgeteilt, „tree-shaking“ angewendet und Versionen „Cache gebusted“ sind.
- Tests durchführen: Diese können von „Ist dieser Code korrekt formatiert?“ bis zu „Funktioniert dieses Ding wie erwartet?“ reichen und sicherstellen, dass fehlschlagende Tests die Bereitstellung verhindern.
- Den aktualisierten Code tatsächlich auf eine Live-URL bereitstellen: Oder möglicherweise auf eine Staging-URL, damit er zuerst überprüft werden kann.

> [!NOTE]
> Cache-Busting ist ein neuer Begriff, den wir in diesem Modul noch nicht kennengelernt haben. Dies ist die Strategie, den eigenen Cache-Mechanismus des Browsers zu brechen, wodurch der Browser gezwungen wird, eine neue Kopie Ihres Codes herunterzuladen. Vite (und viele andere Tools) generieren Dateinamen, die einzigartig für jeden neuen Build sind. Dieser einzigartige Dateiname „bustet“ den Browser-Cache, wodurch sichergestellt wird, dass der Browser den aktualisierten Code jedes Mal herunterlädt, wenn der dargestellte Code aktualisiert wird.

Die obigen Aufgaben lassen sich auch in weitere Aufgaben unterteilen; bedenken Sie, dass die meisten Webentwicklungsteams ihre eigenen Begriffe und Prozesse für mindestens einen Teil der Post-Entwicklungsphase haben.

Für dieses Projekt verwenden wir das kostenlose statische Hosting-Angebot von [GitHub Pages](https://pages.github.com/), um unser Projekt zu hosten. Es stellt nicht nur unsere Website im Internet bereit, sondern gibt uns auch eine URL zu unserer Website. Es ist großartig — viele MDN-Beispielwebsites werden auf GitHub Pages gehostet.

Das Bereitstellen auf einem Hosting erfolgt tendenziell am Ende des Projektlebenszyklus, aber mit Diensten wie GitHub Pages, die die Kosten für Bereitstellungen senken (sowohl finanziell als auch die tatsächlich benötigte Zeit), ist es möglich, während der Entwicklung bereitzustellen, um entweder Arbeit in Bearbeitung zu teilen oder eine Vorveröffentlichung für einen anderen Zweck zu haben.

GitHub bietet einen reibungslosen Workflow, um neuen Code in eine Live-Website zu verwandeln:

- Sie übertragen Ihren Code nach GitHub.
- Sie definieren eine [GitHub Action](https://docs.github.com/en/actions), die ausgelöst wird, wenn es einen neuen Push zum Hauptzweig gibt, welcher den Code buildet und an einem bestimmten Ort platziert.
- GitHub Pages stellt dann den Code an einer bestimmten URL bereit.

Genau diese Art von verbundenen Diensten empfehlen wir Ihnen, zu suchen, wenn Sie Ihre eigene Build-Werkzeugkette erstellen. Wir können unseren Code einpflegen und zu GitHub übertragen, und der aktualisierte Code wird automatisch die gesamte Build-Routine auslösen. Wenn alles in Ordnung ist, bekommen wir eine automatisch bereitgestellte Live-Änderung. Die _einzige_ Handlung, die wir vornehmen müssen, ist dieser anfängliche „Push“.

Wir müssen jedoch diese Schritte einrichten, und das werden wir jetzt betrachten.

## Der Build-Prozess

Da wir Vite für die Entwicklung verwenden, ist die Build-Option extrem einfach hinzuzufügen. Wie wir bereits gesehen haben, haben wir bereits ein benutzerdefiniertes Skript `npm run build`, das Vite alles für die Produktion bereitstellen lässt, anstatt es nur für Entwicklungs- und Testzwecke auszuführen. Dies beinhaltet [Minifizierung](/de/docs/Glossary/Minification) und [Tree-Shaking](/de/docs/Glossary/Tree_shaking) des Codes und Cache-Busting bei Dateinamen.

Es ist eine gute Best Practice, immer ein `build`-Skript in Ihrem Projekt zu definieren, sodass wir uns auf `npm run build` verlassen können, um immer den vollständigen Build-Schritt auszuführen, ohne sich die spezifischen Build-Befehlsparameter für jedes Projekt merken zu müssen.

Der neu erstellte Produktionscode wird in ein neues Verzeichnis namens `dist` abgelegt, das _alle_ zur Ausführung der Website erforderlichen Dateien enthält, bereit für Ihren Upload auf einen Server.

Wenn wir jedoch diesen Schritt manuell machen, ist das nicht unser endgültiges Ziel – was wir wollen, ist, dass der Build automatisch erfolgt und das Ergebnis des `dist`-Verzeichnisses live auf unserer Website bereitgestellt wird.

## Änderungen zu GitHub übertragen

Dieser Abschnitt führt Sie dazu, Ihren Code in einem Git-Repository zu speichern, ist jedoch weit von einem Git-Tutorial entfernt. Es gibt viele großartige Tutorials und Bücher, und unsere [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub) Seite ist ein guter Ausgangspunkt.

Wir haben unser Arbeitsverzeichnis bereits als Git-Arbeitsverzeichnis initialisiert. Ein schneller Weg, dies zu überprüfen, ist, den folgenden Befehl auszuführen:

```bash
git status
```

Sie sollten einen Statusbericht darüber bekommen, welche Dateien verfolgt werden, welche Dateien gestaged sind und so weiter – all dies sind Begriffe der Git-Grammatik. Wenn Sie den Fehler `fatal: not a git repository` zurückbekommen, ist das Arbeitsverzeichnis kein Git-Arbeitsverzeichnis und Sie müssen Git mit `git init` initialisieren.

Jetzt haben wir drei Aufgaben vor uns:

- Alle vorgenommenen Änderungen zur Staging-Stelle hinzufügen (ein spezieller Name für den Ort, von dem aus Git Dateien einfügt).
- Die Änderungen dem Repository übergeben.
- Die Änderungen nach GitHub übertragen.

1. Um Änderungen hinzuzufügen, führen Sie den folgenden Befehl aus:

   ```bash
   git add .
   ```

   Beachten Sie den Punkt am Ende, er bedeutet „alles in diesem Verzeichnis“. Der Befehl `git add .` ist ein bisschen ein Vorschlaghammer-Ansatz – er wird alle lokalen Änderungen, an denen Sie gearbeitet haben, auf einmal hinzufügen. Wenn Sie feinere Kontrolle darüber wünschen, was Sie hinzufügen, verwenden Sie `git add -p` für einen interaktiven Prozess oder fügen Sie einzelne Dateien mit `git add path/to/file` hinzu.

2. Jetzt, wo all der Code gestaged ist, können wir die Änderungen einfügen; führen Sie den folgenden Befehl aus:

   ```bash
   git commit -m 'committing initial code'
   ```

   > [!NOTE]
   > Obwohl Sie im Commit-Kommentar schreiben können, was Sie möchten, gibt es nützliche Tipps im Internet für gute Commit-Kommentare. Halten Sie sie kurz, prägnant und beschreibend, damit sie klar beschreiben, was die Änderung bewirkt.

3. Schließlich muss der Code zu Ihrem auf GitHub gehosteten Repository übertragen werden. Lassen Sie uns das jetzt tun.

   Besuchen Sie auf GitHub <https://github.com/new> und erstellen Sie Ihr eigenes Repository, um diesen Code zu hosten.

4. Geben Sie Ihrem Repository einen kurzen, einprägsamen Namen, ohne Leerzeichen (verwenden Sie Bindestriche, um Wörter zu trennen) und eine Beschreibung, und klicken Sie dann unten auf der Seite auf _Create repository_.

   Sie sollten jetzt eine „Remote“-URL haben, die auf Ihr neues GitHub-Repo verweist.

   ![GitHub-Screenshot zeigt Remote-URLs, die Sie verwenden können, um Code in ein GitHub-Repo zu übertragen](github-quick-setup.png)

5. Dieser entfernte Ort muss zu unserem lokalen Git-Repository hinzugefügt werden, bevor wir es dorthin schieben können, andernfalls kann es ihn nicht finden. Sie müssen einen Befehl mit der folgenden Struktur ausführen (verwenden Sie für jetzt die bereitgestellte HTTPS-Option, besonders wenn Sie neu bei GitHub sind – nicht die SSH-Option):

   ```bash
   git remote add origin https://github.com/your-name/repo-name.git
   ```

   Wenn Ihre Remote-URL beispielsweise `https://github.com/remy/super-website.git` war, wie im obigen Screenshot, würde Ihr Befehl folgendermaßen lauten:

   ```bash
   git remote add origin https://github.com/remy/super-website.git
   ```

   Ändern Sie die URL auf Ihr eigenes Repository und führen Sie es jetzt aus.

   > [!NOTE]
   > Nachdem Sie Ihren Repository-Namen gewählt haben, stellen Sie sicher, dass die `base`-Option in Ihrer `vite.config.js` diesen Namen widerspiegelt, wie im [vorherigen Kapitel](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#javascript_transformation) erwähnt. Andernfalls werden die JavaScript- und CSS-Assets nicht korrekt verlinkt.

6. Jetzt sind wir bereit, unseren Code nach GitHub zu übertragen; führen Sie jetzt den folgenden Befehl aus:

   ```bash
   git push origin main
   ```

   An diesem Punkt werden Sie aufgefordert, einen Benutzernamen und ein Passwort einzugeben, bevor Git den Push zulässt. Dies liegt daran, dass wir die HTTPS-Option anstelle der SSH-Option verwendet haben, wie im vorherigen Screenshot zu sehen. Dafür benötigen Sie Ihren GitHub-Benutzernamen und dann – wenn Sie keine Zwei-Faktor-Authentifizierung (2FA) aktiviert haben – Ihr GitHub-Passwort. Wir würden Sie immer ermutigen, 2FA, wenn möglich, zu verwenden, aber bedenken Sie, dass Sie auch ein „persönliches Zugriffstoken“ benötigen, wenn Sie dies tun. Die GitHub-Hilfeseiten bieten [eine ausgezeichnete und einfache Anleitung, wie man eines erhält](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

> [!NOTE]
> Wenn Sie daran interessiert sind, die SSH-Option zu verwenden, um dadurch die Notwendigkeit zu vermeiden, Ihren Benutzernamen und Ihr Passwort jedes Mal einzugeben, wenn Sie nach GitHub übertragen, [dieses Tutorial führt Sie Schritt für Schritt durch den Prozess](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Dieser Abschlussbefehl weist Git an, den Code an den „Remote“-Ort zu übertragen, den wir `origin` genannt haben (das ist das auf github.com gehostete Repository – wir hätten es nennen können, wie wir wollten) und verwendet den `main`-Zweig. Mit Zweigen sind wir bisher nicht in Berührung gekommen, aber der „main“-Zweig ist der Standardort für unsere Arbeit und ist es, von dem Git ausgeht. Wenn wir die Aktion definieren, die ausgelöst wird, um die Website zu erstellen, werden wir sie auch auf Änderungen im „main“-Zweig überwachen lassen.

> [!NOTE]
> Bis Oktober 2020 war der Standardzweig auf GitHub `master`, der aus verschiedenen sozialen Gründen auf `main` geändert wurde. Sie sollten sich dessen bewusst sein, dass dieser ältere Standardzweig in verschiedenen Projekten, mit denen Sie in Berührung kommen, noch erscheinen kann, aber wir würden vorschlagen, `main` für Ihre eigenen Projekte zu verwenden.

So, mit unserem Projekt, das in Git eingecheckt und in unser GitHub-Repository übertragen wurde, ist der nächste Schritt in der Werkzeugkette, eine Build-Aktion zu definieren, damit unser Projekt live im Web bereitgestellt werden kann!

## Verwendung von GitHub Actions für die Bereitstellung

GitHub Actions, ähnlich wie die ESLint-Konfiguration, ist ein weiteres tiefgehendes Thema, in das man eintauchen kann. Es ist nicht leicht, es beim ersten Versuch richtig zu machen, aber für beliebte Aufgaben wie "erstelle eine statische Website und stelle sie auf GitHub Pages bereit", gibt es viele Beispiele zur Copy-and-Paste-Verwendung. Sie können den Anweisungen in [Veröffentlichen mit einem benutzerdefinierten GitHub Actions Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) folgen. Sie können sich [unsere GitHub Action-Datei](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml) für ein funktionierendes Beispiel ansehen. (Der Name der Datei spielt keine Rolle.)

Nachdem Sie diese Datei zum Hauptzweig hinzugefügt haben, sollten Sie ein kleines grünes Häkchen neben dem Commit-Titel sehen:

![GitHub-Screenshot zeigt ein grünes Häkchen neben einem Commit-Titel](build-action-pass.png)

Wenn Sie einen gelben Punkt sehen, bedeutet dies, dass die Aktion ausgeführt wird, und wenn Sie ein rotes Kreuz sehen, bedeutet dies, dass die Aktion fehlgeschlagen ist. Klicken Sie auf das Symbol, und Sie können den Status und die Protokolle Ihrer eigenen Build-Aktion sehen (in unserem Fall "Deploy build" genannt).

Nach ein paar weiteren Minuten können Sie Ihre GitHub Pages-URL besuchen, um Ihre Website live im Web zu sehen. Der Link sieht aus wie `https://<your-name>.github.io/<repo-name>`. Für unser Beispiel ist es <https://mdn.github.io/client-toolchain-example/>.

Jetzt für das letzte Glied in unserer Werkzeugkette: ein Test, um sicherzustellen, dass unser Code funktioniert.

## Testen

Das Testen selbst ist ein weitreichendes Thema, selbst im Bereich der Frontend-Entwicklung. Ich zeige Ihnen, wie Sie einen ersten Test zu Ihrem Projekt hinzufügen und wie Sie den Test verwenden, um die Bereitstellung des Projekts zu verhindern oder zu erlauben.

Beim Herangehen an Tests gibt es eine gute Anzahl von Ansätzen:

- End-to-End-Testing, bei dem Ihr Besucher auf etwas klickt und etwas anderes passiert.
- Integrationstests, die im Wesentlichen sagen: "Funktioniert ein Codeblock noch, wenn er mit einem anderen verbunden ist?"
- Unit-Tests, bei denen kleine und spezifische Funktionalitäten getestet werden, um zu sehen, ob sie das tun, was sie tun sollen.
- [Und viele weitere Typen](https://en.wikipedia.org/wiki/Functional_testing). Siehe auch unser [Cross-Browser-Testing-Modul](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) für eine Menge nützlicher Informationen zum Testen.

Denken Sie auch daran, dass Tests nicht auf JavaScript beschränkt sind; Tests können gegen den gerenderten DOM, Benutzerinteraktionen, CSS und sogar gegen das Aussehen einer Seite ausgeführt werden.

Für dieses Projekt werden wir jedoch einen kleinen Test erstellen, der überprüft, ob die GitHub API-Daten im richtigen Format vorliegen. Wenn nicht, schlägt der Test fehl und verhindert, dass das Projekt live geht. Etwas anderes zu tun, würde den Rahmen dieses Moduls sprengen – Testen ist ein riesiges Thema, das wirklich ein eigenes separates Modul erfordert. Wir hoffen, dass dieser Abschnitt Sie zumindest für die Notwendigkeit von Tests sensibilisiert und Ihnen den Anstoß gibt, mehr zu lernen.

Der Test selbst ist nicht das Wichtigste. Wichtig ist, wie mit dem Scheitern oder dem Erfolg umgegangen wird. Da wir bereits eine benutzerdefinierte Build-Aktion schreiben, können wir einen Schritt vor dem Build hinzufügen, der den Test ausführt. Wenn der Test fehlschlägt, schlägt der Build fehl und die Bereitstellung findet nicht statt.

Die gute Nachricht ist: Da wir Vite verwenden, bietet Vite bereits ein gutes integriertes Werkzeug zum Testen: [Vitest](https://vitest.dev/guide/).

Lassen Sie uns beginnen.

1. Vitest installieren:

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
   > Hier ist der gute Teil bei der Verwendung von Vite zusammen mit Vitest: Wenn Sie andere Test-Frameworks verwenden, müssen Sie eine weitere Konfiguration hinzufügen, die beschreibt, wie die Testdateien transformiert werden müssen, aber Vitest wird automatisch die Vite-Konfiguration verwenden.

3. Jetzt müssen wir natürlich den Test zu unserem Codebasis hinzufügen. Normalerweise, wenn Sie die Funktionalität einer Datei, sagen wir `App.jsx`, testen, würden Sie eine Datei namens `App.test.jsx` daneben hinzufügen. In diesem Fall testen wir nur die Daten, also lassen Sie uns ein weiteres Verzeichnis erstellen, um unsere Tests aufzunehmen. Sie können das Beispiel-Repository öffnen, das Sie im vorherigen Kapitel heruntergeladen haben, und den `tests`-Ordner herüberkopieren.

4. Um den Test manuell auszuführen, können wir in der Befehlszeile Folgendes ausführen:

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

   Das bedeutet, dass der Test bestanden wurde. Wie Vite, wird es auf Änderungen achten und die Tests neu ausführen, wenn Sie eine Datei speichern. Wir können mit <kbd>q</kbd> beenden.

5. Wir müssen den Test noch mit unserer Build-Aktion verbinden, damit er den Build blockiert, wenn der Test fehlschlägt. Öffnen Sie die `.github/workflows/github-pages.yml`-Datei (oder welchen Dateinamen Sie Ihrer Build-Aktion gegeben haben) und fügen Sie den folgenden Schritt direkt vor dem Schritt hinzu, der `npm run build` ausführt:

   ```yaml
   - name: Install deps
     run: npm ci

   # Add this
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   Dies wird den Test vor dem Build-Schritt ausführen. Wenn der Test fehlschlägt, schlägt der Build fehl und die Bereitstellung wird nicht ausgeführt.

6. Jetzt lassen Sie uns den neuen Code zu GitHub hochladen, mit ähnlichen Befehlen wie zuvor:

   ```bash
   git add .
   git commit -m 'adding test'
   git push origin main
   ```

   In einigen Fällen möchten Sie möglicherweise das Ergebnis des kompilierten Codes testen (da dies nicht ganz der ursprüngliche Code ist, den wir geschrieben haben), deshalb könnte der Test nach dem Build-Befehl ausgeführt werden müssen. Sie müssen all diese Einzelheiten im Auge behalten, während Sie an Ihren eigenen Projekten arbeiten.

Schließlich wird GitHub Pages das Projekt-Update einige Minuten nach dem Übertragen bereitstellen. Aber nur, wenn es den eingeführten Test besteht.

## Zusammenfassung

Das ist es für unsere Beispiel-Fallstudie und für das Modul! Wir hoffen, Sie fanden es nützlich. Während es noch ein langer Weg ist, bevor Sie sich als „Client-Side Tooling Wizard“ betrachten können, hoffen wir, dass dieses Modul Ihnen den ersten wichtigen Schritt versteht, client-seitige Werkzeuge besser zu verstehen und das Vertrauen entwickelt zu haben, mehr zu lernen und neue Dinge auszuprobieren.

Fassen wir alle Teile der Werkzeugkette zusammen:

- Codequalität und Wartung werden von ESLint und Prettier durchgeführt. Diese Werkzeuge werden als `devDependencies` zum Projekt hinzugefügt via `npm install --dev eslint prettier eslint-plugin-react ...` (das ESLint-Plugin wird benötigt, weil dieses spezielle Projekt React verwendet).
- Es gibt zwei Konfigurationsdateien, die die Codequalitätswerkzeuge lesen: `eslint.config.js` und `.prettierrc`.
- Während der Entwicklung fügen wir weiterhin Abhängigkeiten mit npm hinzu. Der Vite-Entwicklungsserver läuft im Hintergrund, um Änderungen zu überwachen und unsere Quelle automatisch zu erstellen.
- Bereitstellung wird durch das Pushen unserer Änderungen zu GitHub (im "main"-Branch) gehandhabt, welches einen Build und die Bereitstellung über GitHub Actions zum Veröffentlichen des Projekts auslöst. Für unser Beispiel ist diese URL <https://mdn.github.io/client-toolchain-example/>; Sie werden Ihre eigene einzigartige URL haben.
- Wir haben auch einen einfachen Test, der das Erstellen und Bereitstellen der Website blockiert, wenn der GitHub-API-Feed uns nicht das richtige Datenformat liefert.

Für diejenigen von Ihnen, die eine Herausforderung suchen, überlegen Sie, ob Sie irgendeinen Teil dieser Werkzeugkette optimieren können. Einige Fragen, die Sie sich stellen sollten:

- Können wir nur die Funktionen von plotly.js extrahieren, die wir benötigen? Dies würde die Größe des JavaScript-Bundles reduzieren.
- Vielleicht möchten Sie andere Werkzeuge hinzufügen, wie TypeScript für die Typprüfung oder stylelint für CSS-Linting?
- Könnte React gegen [etwas Kleineres](https://preactjs.com/) ausgetauscht werden?
- Könnten Sie weitere Tests hinzufügen, um zu verhindern, dass ein schlechter Build bereitgestellt wird, wie z. B. [Leistungs-Audits](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)?
- Könnten Sie eine Benachrichtigung einrichten, die Sie informiert, wenn eine neue Bereitstellung erfolgreich war oder fehlgeschlagen ist?

{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
