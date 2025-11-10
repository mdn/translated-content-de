---
title: Bereitstellung unserer App
slug: Learn_web_development/Extensions/Client-side_tools/Deployment
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}

Im letzten Artikel unserer Serie erweitern wir die Beispiel-Toolchain, die wir im vorherigen Artikel aufgebaut haben, um unsere Beispiel-App bereitzustellen. Wir laden den Code auf GitHub hoch, stellen ihn über GitHub Pages bereit und zeigen Ihnen sogar, wie Sie einen einfachen Test in den Prozess integrieren können.

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
        Abschließen der Arbeit an unserer vollständigen Toolchain-Fallstudie mit Schwerpunkt auf der Bereitstellung der App.
      </td>
    </tr>
  </tbody>
</table>

## Nach der Entwicklung

In dieser Phase des Projektzyklus gibt es potenziell eine Vielzahl von Problemen zu lösen. Daher ist es wichtig, eine Toolchain zu erstellen, die diese Probleme so weit wie möglich ohne manuelle Eingriffe löst.

Hier sind nur einige Dinge, die für dieses spezielle Projekt zu berücksichtigen sind:

- Generieren eines Produktions-Builds: Sicherstellen, dass Dateien minimiert, aufgeteilt, Baum-Schütteln angewendet wird und Versionen "Cache-Busting" unterliegen.
- Tests durchführen: Diese können von "ist dieser Code richtig formatiert?" bis "macht dieses Ding, was ich erwarte?" reichen, und sicherstellen, dass fehlgeschlagene Tests die Bereitstellung verhindern.
- Die aktualisierten Code tatsächlich auf eine Live-URL bereitstellen: Oder möglicherweise eine Staging-URL, damit sie zuerst überprüft werden kann.

> [!NOTE]
> Cache Busting ist ein neuer Begriff, den wir in diesem Modul noch nicht kennengelernt haben. Dies ist die Strategie, den Zwischenspeichermechanismus eines Browsers zu durchbrechen, was den Browser dazu zwingt, eine neue Kopie Ihres Codes herunterzuladen. Vite (und in der Tat viele andere Tools) generieren Dateinamen, die für jedes neue Build einzigartig sind. Dieser einzigartige Dateiname "bustet" den Cache Ihres Browsers, wodurch sichergestellt wird, dass der Browser den neuen Code jedes Mal herunterlädt, wenn ein Update am bereitgestellten Code vorgenommen wird.

Die oben genannten Aufgaben zerfallen auch in weitere Aufgaben; beachten Sie, dass die meisten Webentwicklungsteams ihre eigenen Begriffe und Prozesse für mindestens einen Teil der Nachentwicklungsphase haben werden.

Für dieses Projekt werden wir das kostenlose statische Hosting-Angebot von [GitHub Pages](https://pages.github.com/) verwenden, um unser Projekt zu hosten. Es stellt nicht nur unsere Website im Internet bereit, sondern bietet uns auch eine URL zu unserer Website. Das ist großartig — viele MDN-Beispielwebsites sind auf GitHub Pages gehostet.

Die Bereitstellung beim Hosting tendiert dazu, am Ende des Projektlebenszyklus zu erfolgen, aber mit Diensten wie GitHub Pages, die die Kosten für Bereitstellungen (sowohl in finanzieller Hinsicht als auch in der tatsächlich erforderlichen Zeit) senken, ist es möglich, während der Entwicklung bereitzustellen, um entweder laufende Arbeiten zu teilen oder eine Vorabveröffentlichung für einen anderen Zweck zu haben.

GitHub bietet einen reibungslosen Workflow, um neuen Code in eine Live-Website zu verwandeln:

- Sie laden Ihren Code auf GitHub hoch.
- Sie definieren eine [GitHub Action](https://docs.github.com/en/actions), die ausgelöst wird, wenn es einen neuen Push auf den Hauptzweig gibt, der den Code baut und an einem bestimmten Ort ablegt.
- GitHub Pages stellt dann den Code unter einer bestimmten URL bereit.

Genau diese Art von verbundenen Diensten würden wir Ihnen empfehlen zu suchen, wenn Sie Ihre eigene Build-Toolchain auswählen. Wir können unseren Code committen und auf GitHub hochladen, und der aktualisierte Code wird automatisch die gesamte Build-Routine auslösen. Wenn alles gut geht, wird eine Live-Änderung automatisch bereitgestellt. Die _einzige_ Aktion, die wir ausführen müssen, ist dieser erste "Push".

Wir müssen jedoch diese Schritte einrichten, und darauf werfen wir jetzt einen Blick.

## Der Build-Prozess

Da wir wieder Vite für die Entwicklung nutzen, ist es extrem einfach, die Build-Option hinzuzufügen. Wie wir bereits früher gesehen haben, haben wir bereits ein benutzerdefiniertes Skript `npm run build`, das Vite alles für die Produktion bereitstellen lässt, anstatt es nur für Entwicklungs- und Testzwecke auszuführen. Dies umfasst das {{Glossary("Minification", "Minifizieren")}} und {{Glossary("Tree_shaking", "Tree-Shaking")}} des Codes sowie das Cache-Busting für Dateinamen.

Es ist eine gute Praxis, immer ein `build`-Skript in Ihrem Projekt zu definieren, damit wir uns auf `npm run build` verlassen können, um immer den vollständigen Build-Schritt auszuführen, ohne uns die spezifischen Befehlsargumente für den Build für jedes Projekt merken zu müssen.

Der neu erstellte Produktionscode wird in ein neues Verzeichnis namens `dist` abgelegt, das _alle_ Dateien enthält, die zum Ausführen der Website erforderlich sind und die Sie auf einen Server hochladen können.

Es ist jedoch nicht unser endgültiges Ziel, diesen Schritt manuell auszuführen — wir möchten, dass der Build automatisch erfolgt und das Ergebnis des `dist`-Verzeichnisses live auf unserer Website bereitgestellt wird.

## Änderungen an GitHub committen

Dieser Abschnitt wird Sie bis zu dem Punkt bringen, Ihren Code in einem git-Repository zu speichern, aber es ist weit von einem git-Tutorial entfernt. Es gibt viele hervorragende Tutorials und Bücher, und unsere Seite [Git und GitHub](/de/docs/Learn_web_development/Core/Version_control) ist ein guter Startpunkt.

Wir haben unser Arbeitsverzeichnis bereits als ein git-Arbeitsverzeichnis initialisiert. Eine schnelle Möglichkeit, dies zu überprüfen, ist das Ausführen des folgenden Befehls:

```bash
git status
```

Sie sollten einen Statusbericht erhalten, welche Dateien verfolgt werden, welche Dateien gestaged sind, und so weiter — alles Begriffe, die Teil der git-Grammatik sind. Wenn Sie den Fehler `fatal: not a git repository` zurückerhalten, dann ist das Arbeitsverzeichnis kein git-Arbeitsverzeichnis, und Sie müssen git mit `git init` initialisieren.

Nun haben wir drei Aufgaben vor uns:

- Alle von uns vorgenommenen Änderungen zu stagen (ein spezieller Name für den Ort, von dem git Dateien committen wird).
- Die Änderungen ins Repository committen.
- Die Änderungen auf GitHub hochladen.

1. Um Änderungen hinzuzufügen, führen Sie den folgenden Befehl aus:

   ```bash
   git add .
   ```

   Beachten Sie den Punkt am Ende, er bedeutet "alles in diesem Verzeichnis". Der Befehl `git add .` ist ein bisschen wie ein Vorschlaghammer — er fügt alle lokalen Änderungen, an denen Sie gearbeitet haben, auf einmal hinzu. Wenn Sie feinere Kontrolle darüber haben möchten, was Sie hinzufügen, dann verwenden Sie `git add -p` für einen interaktiven Prozess oder fügen Sie einzelne Dateien mit `git add path/to/file` hinzu.

2. Jetzt, wo der gesamte Code gestaged ist, können wir committen; führen Sie den folgenden Befehl aus:

   ```bash
   git commit -m 'committing initial code'
   ```

   > [!NOTE]
   > Obwohl es Ihnen freisteht, im Commit-Kommentar zu schreiben, was Sie möchten, gibt es im Web einige nützliche Tipps zu guten Commit-Kommentaren. Halten Sie sie kurz, prägnant und beschreibend, sodass sie deutlich machen, was die Änderung bewirkt.

3. Schließlich muss der Code in Ihr auf GitHub gehostetes Repository hochgeladen werden. Lassen Sie uns das jetzt tun.

   Besuchen Sie auf GitHub <https://github.com/new> und erstellen Sie Ihr eigenes Repository, um diesen Code zu hosten.

4. Geben Sie Ihrem Repository einen kurzen, einprägsamen Namen, ohne Leerzeichen (verwenden Sie Bindestriche zur Trennung von Wörtern), und eine Beschreibung, dann klicken Sie unten auf der Seite auf _Create repository_.

   Sie sollten nun eine "Remote"-URL haben, die auf Ihr neues GitHub-Repo verweist.

   ![GitHub-Screenshot, der Remote-URLs zeigt, die Sie verwenden können, um Code in ein GitHub-Repo bereitzustellen](github-quick-setup.png)

5. Dieser Remote-Ort muss zu unserem lokalen git-Repository hinzugefügt werden, bevor wir es dort hochladen können, andernfalls kann er es nicht finden. Sie müssen einen Befehl mit folgender Struktur ausführen (verwenden Sie die bereitgestellte HTTPS-Option vorerst — insbesondere, wenn Sie neu bei GitHub sind — nicht die SSH-Option):

   ```bash
   git remote add origin https://github.com/your-name/repo-name.git
   ```

   Wenn Ihre Remote-URL `https://github.com/remy/super-website.git` war, wie im obigen Screenshot, würde Ihr Befehl folgendermaßen aussehen:

   ```bash
   git remote add origin https://github.com/remy/super-website.git
   ```

   Ändern Sie die URL in Ihr eigenes Repository und führen Sie es jetzt aus.

   > [!NOTE]
   > Nachdem Sie Ihren Repository-Namen ausgewählt haben, stellen Sie sicher, dass die `base`-Option in Ihrer Datei `vite.config.js` diesen Namen widerspiegelt, wie im [vorherigen Kapitel](/de/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain#javascript_transformation) erwähnt. Andernfalls werden die JavaScript- und CSS-Ressourcen nicht korrekt verlinkt.

6. Jetzt sind wir bereit, unseren Code auf GitHub hochzuladen; führen Sie nun den folgenden Befehl aus:

   ```bash
   git push origin main
   ```

   An diesem Punkt werden Sie aufgefordert, einen Benutzernamen und ein Passwort einzugeben, bevor Git den Push senden lässt. Das liegt daran, dass wir die HTTPS-Option anstelle der SSH-Option verwendet haben, wie im früheren Screenshot gezeigt. Hierfür benötigen Sie Ihren GitHub-Benutzernamen und, falls Sie keine Zwei-Faktor-Authentifizierung (2FA) aktiviert haben, Ihr GitHub-Passwort. Wir würden Ihnen immer empfehlen, wenn möglich 2FA zu verwenden, aber beachten Sie, dass Sie, wenn dies der Fall ist, auch ein "persönliches Zugriffstoken" verwenden müssen. Die GitHub-Hilfeseiten bieten eine [ausgezeichnete und einfache Anleitung dazu, wie man eines bekommt](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

> [!NOTE]
> Wenn Sie daran interessiert sind, die SSH-Option zu verwenden, um so das Eingeben Ihres Benutzernamens und Passworts bei jedem Pushen auf GitHub zu vermeiden, [führt Sie dieses Tutorial durch den Prozess](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Dieser letzte Befehl instruiert git, den Code an die "Remote" zu pushen, die wir `origin` genannt haben (das ist das auf github.com gehostete Repository — wir hätten es beliebig nennen können) und den Branch `main` zu verwenden. Wir sind noch nicht auf Branches gestoßen, aber der "main"-Branch ist der Standard-Arbeitsplatz, auf dem git beginnt. Wenn wir die Aktion definieren, die ausgelöst wird, um die Website zu erstellen, werden wir sie auch so konfigurieren, dass sie Änderungen im "main"-Branch überwacht.

> [!NOTE]
> Bis Oktober 2020 war der Standardbranch auf GitHub `master`, der aus verschiedenen sozialen Gründen in `main` umbenannt wurde. Sie sollten sich bewusst sein, dass dieser ältere Standardbranch in verschiedenen Projekten, auf die Sie stoßen, erscheinen kann, aber wir würden Ihnen empfehlen, `main` für Ihre eigenen Projekte zu verwenden.

Mit unserem in git comitteten Projekt, das in unser GitHub-Repository gepusht wurde, ist der nächste Schritt in der Toolchain, eine Build-Aktion zu definieren, damit unser Projekt im Web live bereitgestellt werden kann!

## Verwendung von GitHub Actions für die Bereitstellung

GitHub Actions, wie ESLint-Konfigurationen, ist ein weiterer tiefer Kaninchenbau, in den Sie eintauchen können. Es ist nicht einfach, es beim ersten Mal richtig hinzubekommen, aber für beliebte Aufgaben wie "eine statische Website erstellen und sie auf GitHub Pages bereitstellen" gibt es viele Beispiele zum Kopieren und Einfügen. Sie können den Anweisungen in [Veröffentlichung mit einem benutzerdefinierten GitHub Actions Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) folgen. Sie können [unsere GitHub Action Datei](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml) für ein funktionierendes Beispiel überprüfen. (Der Name der Datei spielt keine Rolle.)

Nachdem Sie diese Datei in den main-Branch überführt haben, sollte neben dem Commit-Titel ein kleines grünes Häkchen erscheinen:

![GitHub-Screenshot, der ein grünes Häkchen neben einem Commit-Titel zeigt](build-action-pass.png)

Wenn Sie einen gelben Punkt sehen, bedeutet das, dass die Aktion läuft, und wenn Sie ein rotes Kreuz sehen, bedeutet das, dass die Aktion fehlgeschlagen ist. Klicken Sie auf das Symbol, und Sie können den Status und die Protokolle Ihrer eigenen Build-Aktion sehen (in unserem Fall "Deploy build" genannt).

Nach ein paar weiteren Minuten können Sie Ihre GitHub Pages URL besuchen, um Ihre Website live im Web zu sehen. Der Link sieht so aus: `https://<ihr-name>.github.io/<repo-name>`. Für unser Beispiel ist es <https://mdn.github.io/client-toolchain-example/>.

Jetzt für ein letztes Glied in unserer Toolchain: ein Test, um sicherzustellen, dass unser Code funktioniert.

## Testen

Das Testen selbst ist ein umfangreiches Thema, selbst im Bereich der Front-End-Entwicklung. Ich werde Ihnen zeigen, wie Sie Ihrem Projekt einen ersten Test hinzufügen, und wie Sie den Test nutzen können, um die Bereitstellung des Projekts zu verhindern oder zuzulassen.

Wenn es darum geht, Tests anzugehen, gibt es viele Wege, das Problem anzugehen:

- End-to-End-Testing, das den Klick eines Besuchers auf etwas und die resultierende Aktion umfasst.
- Integrationstests, die im Grunde sagen: "Funktioniert ein Codeteil noch, wenn er mit einem anderen verbunden ist?"
- Unittests, bei denen kleine und spezifische Funktionalitäten getestet werden, um zu sehen, ob sie das tun, was sie sollen.
- [Und viele andere Typen](https://en.wikipedia.org/wiki/Functional_testing). Sehen Sie auch unser [Cross-Browser-Testing-Modul](/de/docs/Learn_web_development/Extensions/Testing) für viele nützliche Testinformationen.

Denken Sie auch daran, dass Tests sich nicht auf JavaScript beschränken; Tests können gegen das gerenderte DOM, Benutzerinteraktionen, CSS und sogar das Aussehen einer Seite durchgeführt werden.

Für dieses Projekt werden wir jedoch einen kleinen Test erstellen, der überprüft, ob die GitHub API-Daten im richtigen Format vorliegen. Wenn nicht, schlägt der Test fehl und verhindert, dass das Projekt live geht. Alles andere wäre über den Umfang dieses Moduls hinaus — das Testen ist ein großes Thema, das wirklich sein eigenes separates Modul erfordert. Wir hoffen, dass dieser Abschnitt Sie zumindest auf die Notwendigkeit von Tests aufmerksam macht und den Samen pflanzt, der Sie dazu inspiriert, mehr zu lernen.

Der Test selbst ist nicht wichtig. Wichtig ist, wie mit dem Scheitern oder Erfolg umgegangen wird. Da wir bereits eine benutzerdefinierte Build-Aktion schreiben, können wir einen Schritt vor dem Build hinzufügen, der den Test ausführt. Wenn der Test fehlschlägt, schlägt der Build fehl, und die Bereitstellung erfolgt nicht.

Die gute Nachricht ist: Da wir Vite verwenden, bietet Vite bereits ein gutes integriertes Werkzeug für Tests: [Vitest](https://vitest.dev/guide/).

Lassen Sie uns beginnen.

1. Installieren Sie Vitest:

   ```bash
   npm install --save-dev vitest
   ```

2. Suchen Sie in Ihrer package.json nach dem `scripts`-Mitglied und aktualisieren Sie es so, dass es die folgenden Test- und Build-Befehle enthält:

   ```json
   {
     "scripts": {
       // …
       "test": "vitest"
     }
   }
   ```

   > [!NOTE]
   > Das ist der Vorteil, Vite zusammen mit Vitest zu nutzen: Wenn Sie andere Test-Frameworks verwenden, müssen Sie eine weitere Konfiguration hinzufügen, die beschreibt, wie die Testdateien transformiert werden müssen, aber Vitest wird automatisch die Vite-Konfiguration verwenden.

3. Natürlich müssen wir den Test nun in unseren Codebestand aufnehmen. Normalerweise, wenn Sie die Funktionalität einer Datei `App.jsx` testen, würden Sie eine Datei `App.test.jsx` daneben hinzufügen. In diesem Fall testen wir nur die Daten, lassen Sie uns also ein weiteres Verzeichnis erstellen, um unsere Tests zu halten. Sie können das Beispiel-Repository, das Sie im vorherigen Kapitel heruntergeladen haben, öffnen und den Ordner `tests` darüber kopieren.

4. Um den Test manuell auszuführen, können Sie im Befehlszeilenfenster Folgendes ausführen:

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

   Dies bedeutet, dass der Test bestanden wurde. Wie Vite wird es auf Änderungen warten und die Tests neu ausführen, wenn Sie eine Datei speichern. Sie können mit <kbd>q</kbd> beenden.

5. Wir müssen den Test immer noch mit unserer Build-Aktion verbinden, damit er den Build blockiert, wenn der Test fehlschlägt. Öffnen Sie die `.github/workflows/github-pages.yml`-Datei (oder welchen Dateinamen Sie Ihrer Build-Aktion gegeben haben) und fügen Sie den folgenden Schritt hinzu, direkt bevor der Schritt mit `npm run build` ausgeführt wird:

   ```yaml
   - name: Install deps
     run: npm ci

   # Add this
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   Dies führt den Test vor dem Build-Schritt aus. Wenn der Test fehlschlägt, schlägt der Build fehl und die Bereitstellung wird nicht durchgeführt.

6. Jetzt laden wir den neuen Code auf GitHub hoch, indem wir ähnliche Befehle wie zuvor verwenden:

   ```bash
   git add .
   git commit -m 'adding test'
   git push origin main
   ```

   In einigen Fällen möchten Sie möglicherweise das Ergebnis des erstellten Codes testen (da dies nicht ganz der Originalcode ist, den wir geschrieben haben), daher muss der Test möglicherweise nach dem Build-Befehl ausgeführt werden. Sie müssen all Diese einzelnen Aspekte berücksichtigen, während Sie an Ihren eigenen Projekten arbeiten.

Schließlich wird GitHub Pages, etwa eine Minute nach dem Push, das Projektupdate bereitstellen. Aber nur, wenn es den eingeführten Test besteht.

## Zusammenfassung

Das war's für unser Beispiel-Fallstudie und für das Modul! Wir hoffen, Sie fanden es nützlich. Während es noch ein langer Weg ist, bevor Sie sich als Meister der Client-seitigen Werkzeuge betrachten können, hoffen wir, dass Ihnen dieses Modul den ersten wichtigen Schritt zum Verstehen der Client-seitigen Werkzeuge gegeben hat und das Vertrauen, mehr zu lernen und neue Dinge auszuprobieren.

Lassen Sie uns alle Teile der Toolchain zusammenfassen:

- Die Codequalität und -wartung wird durch ESLint und Prettier durchgeführt. Diese Werkzeuge werden als `devDependencies` zu dem Projekt über `npm install --dev eslint prettier eslint-plugin-react ...` hinzugefügt (das ESLint-Plugin ist erforderlich, da dieses spezielle Projekt React verwendet).
- Es gibt zwei Konfigurationsdateien, die von den Codequalitätswerkzeugen gelesen werden: `eslint.config.js` und `.prettierrc`.
- Während der Entwicklung fügen wir weiterhin Abhängigkeiten mit npm hinzu. Der Vite-Entwicklungsserver läuft im Hintergrund, um nach Änderungen zu suchen und unser Quellcode automatisch zu bauen.
- Die Bereitstellung erfolgt durch das Hochladen unserer Änderungen auf GitHub (im "main"-Branch), das einen Build und eine Bereitstellung mit GitHub Actions auslöst, um das Projekt zu veröffentlichen. Für unsere Instanz ist diese URL <https://mdn.github.io/client-toolchain-example/>; Sie haben Ihre eigene eindeutige URL.
- Wir haben auch einen einfachen Test, der das Bauen und Bereitstellen der Site blockiert, wenn der GitHub-API-Feed uns nicht das korrekte Datenformat liefert.

Für diejenigen, die sich einer Herausforderung stellen wollen, überlegen Sie, ob Sie einen Teil dieser Toolchain optimieren können. Einige Fragen, die Sie sich stellen sollten:

- Können wir nur die Funktionen von plotly.js extrahieren, die wir benötigen? Dies würde die Größe des JavaScript-Bundles reduzieren.
- Vielleicht möchten Sie andere Werkzeuge hinzufügen, wie TypeScript für die Typprüfung oder stylelint für das CSS-Linting?
- Könnte React gegen [etwas Kleineres](https://preactjs.com/) ausgetauscht werden?
- Könnten Sie mehr Tests hinzufügen, um einen schlechten Build von der Bereitstellung zu verhindern, etwa [Performance-Audits](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)?
- Könnten Sie eine Benachrichtigung einrichten, um Ihnen mitzuteilen, wann eine neue Bereitstellung erfolgreich war oder fehlgeschlagen ist?

{{PreviousMenu("Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain", "Learn_web_development/Extensions/Client-side_tools")}}
