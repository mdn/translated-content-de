---
title: Bereitstellung unserer App
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Deployment
l10n:
  sourceCommit: 3bfbb30511072e6318b12b56c0b4208448fa36bf
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

Im letzten Artikel unserer Serie nehmen wir die im vorherigen Artikel erstellte Toolchain und erweitern sie, damit wir unsere Beispiel-App bereitstellen können. Wir pushen den Code zu GitHub, deployen ihn mit GitHub Pages und zeigen Ihnen sogar, wie Sie einen einfachen Test in den Prozess einbinden können.

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
      <th scope="row">Zielsetzung:</th>
      <td>
        Unsere Fallstudie zur vollständigen Toolchain abschließen und dabei den Schwerpunkt auf die Bereitstellung der App legen.
      </td>
    </tr>
  </tbody>
</table>

## Nach der Entwicklung

Es gibt potenziell eine Vielzahl von Problemen, die in dieser Phase des Projektlebenszyklus gelöst werden müssen. Daher ist es wichtig, eine Toolchain zu erstellen, die diese Probleme auf eine Weise bewältigt, die möglichst wenig manuelle Eingriffe erfordert.

Hier sind einige Aspekte, die Sie für dieses spezielle Projekt berücksichtigen sollten:

- Erstellung eines Produktions-Builds: Sicherstellen, dass Dateien minimiert, segmentiert, mit Tree Shaking bearbeitet werden und dass Versionen cachefrei sind.
- Ausführen von Tests: Diese können von "Ist dieser Code richtig formatiert?" zu "Funktioniert dies so, wie ich es erwarte?" reichen, und sicherstellen, dass fehlschlagende Tests die Bereitstellung verhindern.
- Tatsächliche Bereitstellung des aktualisierten Codes auf einer Live-URL oder möglicherweise erst auf einer Staging-URL zur Überprüfung.

> [!NOTE]
> Cache-Busting ist ein neuer Begriff, der in diesem Modul bisher nicht behandelt wurde. Dies ist die Strategie, den Cache-Mechanismus des Browsers zu durchbrechen, was den Browser zwingt, eine neue Kopie Ihres Codes herunterzuladen. Vite (und viele andere Tools) erzeugt Dateinamen, die für jeden neuen Build eindeutig sind. Dieser einzigartige Dateiname "durchbricht" den Cache Ihres Browsers und stellt so sicher, dass der Browser den aktualisierten Code jedes Mal herunterlädt, wenn ein Update des bereitgestellten Codes erfolgt.

Die oben genannten Aufgaben können in weitere Aufgaben unterteilt werden; beachten Sie, dass die meisten Webentwicklungsteams ihre eigenen Begriffe und Prozesse für zumindest einen Teil der Post-Entwicklungsphase haben.

Für dieses Projekt werden wir das kostenlose statische Hosting-Angebot von [GitHub Pages](https://pages.github.com/) nutzen, um unser Projekt zu hosten. Es dient nicht nur als Bereitstellungsort unserer Website im Internet, sondern stellt uns auch eine URL zu unserer Website zur Verfügung. Es ist großartig — viele MDN Beispiel-Websites werden auf GitHub Pages gehostet.

Die Bereitstellung auf einem Hosting-Dienst erfolgt oft am Ende des Projektlebenszyklus, aber mit Diensten wie GitHub Pages, die die Kosten für Bereitstellungen (sowohl finanziell als auch zeittechnisch) senken, ist es möglich, während der Entwicklung zu deployen, um entweder Arbeiten in Bearbeitung zu teilen oder eine Vorab-Version für einen anderen Zweck zu haben.

GitHub bietet einen reibungslosen Workflow, um neuen Code in eine Live-Website zu verwandeln:

- Sie pushen Ihren Code zu GitHub.
- Sie definieren eine [GitHub Action](https://docs.github.com/en/actions), die ausgelöst wird, wenn es einen neuen Push auf den Hauptbranch gibt, der den Code baut und an einen bestimmten Ort stellt.
- GitHub Pages stellt dann den Code unter einer bestimmten URL bereit.

Genau diese Art von verbundenen Diensten sollten Sie suchen, wenn Sie Ihre eigene Build-Toolchain auswählen. Wir können unseren Code committen und zu GitHub pushen, und der aktualisierte Code löst automatisch die gesamte Build-Routine aus. Wenn alles gut läuft, wird die Änderung automatisch live bereitgestellt. Die _einzige_ Aktion, die wir ausführen müssen, ist dieser initiale „Push“.

Allerdings müssen wir diese Schritte einrichten, und darauf schauen wir jetzt.

## Der Build-Prozess

Da wir Vite für die Entwicklung verwenden, ist die Option zum Bauen extrem einfach hinzuzufügen. Wie wir bereits gesehen haben, haben wir bereits ein benutzerdefiniertes Skript `npm run build`, das Vite alles für die Produktion bauen lässt, anstatt es nur für Entwicklungs- und Testzwecke auszuführen. Dies schließt auch [Minimierung](/de/docs/Glossary/Minification) und [Tree-Shaking](/de/docs/Glossary/Tree_shaking) des Codes sowie Cache-Busting bei Dateinamen ein.

Es ist eine gute Praxis, immer ein `build`-Skript in Ihrem Projekt zu definieren, damit wir uns auf `npm run build` verlassen können, um immer den kompletten Build-Schritt auszuführen, ohne sich die spezifischen Build-Kommando-Argumente für jedes Projekt merken zu müssen.

Der neu erstellte Produktionscode wird in einem neuen Verzeichnis namens `dist` abgelegt, das _alle_ Dateien enthält, die erforderlich sind, um die Website auszuführen, bereit für den Upload auf einen Server.

Das manuelle Ausführen dieses Schritts ist jedoch nicht unser endgültiges Ziel – wir möchten, dass der Build automatisch erfolgt und das Ergebnis des `dist`-Verzeichnisses live auf unserer Website bereitgestellt wird.

## Änderungen an GitHub committen

Dieser Abschnitt bringt Sie über die Linie, um Ihren Code in einem Git-Repository zu speichern, ist aber weit entfernt von einem Git-Tutorial. Es gibt viele großartige Tutorials und Bücher, und unsere [Git und GitHub](/de/docs/Learn/Tools_and_testing/GitHub) Seite ist ein guter Startpunkt.

Wir haben unser Arbeitsverzeichnis zuvor als Git-Arbeitsverzeichnis initialisiert. Eine schnelle Möglichkeit, dies zu überprüfen, besteht darin, den folgenden Befehl auszuführen:

```bash
git status
```

Sie sollten einen Statusbericht darüber erhalten, welche Dateien verfolgt werden, welche Dateien gestaged sind usw. – alle Begriffe, die Teil der Git-Grammatik sind. Wenn Sie den Fehler `fatal: not a git repository` erhalten, dann ist das Arbeitsverzeichnis kein Git-Arbeitsverzeichnis und Sie müssen Git mit `git init` initialisieren.

Jetzt stehen uns drei Aufgaben bevor:

- Alle von uns vorgenommenen Änderungen in die Stage bringen (ein besonderer Name für den Ort, von dem Git Dateien committen wird).
- Die Änderungen im Repository committen.
- Die Änderungen zu GitHub pushen.

1. Um Änderungen hinzuzufügen, führen Sie den folgenden Befehl aus:

   ```bash
   git add .
   ```

   Beachten Sie den Punkt am Ende, er bedeutet "alles in diesem Verzeichnis". Der `git add .`-Befehl ist ein ziemlicher Vorschlaghammer-Ansatz – er wird alle lokalen Änderungen, an denen Sie gearbeitet haben, in einem Rutsch hinzufügen. Wenn Sie eine feinere Kontrolle darüber haben möchten, was Sie hinzufügen, verwenden Sie `git add -p` für einen interaktiven Prozess oder fügen Sie einzelne Dateien mit `git add path/to/file` hinzu.

2. Jetzt ist der gesamte Code gestaged, wir können committen; führen Sie den folgenden Befehl aus:

   ```bash
   git commit -m 'initialen Code committen'
   ```

   > [!NOTE]
   > Obwohl Sie in der Commit-Nachricht schreiben können, was Sie möchten, gibt es einige nützliche Tipps im Internet zu guten Commit-Nachrichten. Halten Sie sie kurz, prägnant und beschreibend, damit sie klar beschreiben, was die Änderung bewirkt.

3. Schließlich muss der Code zu Ihrem auf GitHub gehosteten Repository gepusht werden. Lassen Sie uns das jetzt tun.

   Besuchen Sie auf GitHub <https://github.com/new> und erstellen Sie Ihr eigenes Repository, um diesen Code zu hosten.

4. Geben Sie Ihrem Repository einen kurzen, einprägsamen Namen ohne Leerzeichen (verwenden Sie Bindestriche, um Wörter zu trennen) und eine Beschreibung, und klicken Sie dann unten auf der Seite auf _Create repository_.

   Sie sollten jetzt eine „Remote“-URL haben, die auf Ihr neues GitHub-Repo zeigt.

   ![GitHub-Screenshot, der Remote-URLs zeigt, die Sie zum Bereitstellen von Code in einem GitHub-Repo verwenden können](github-quick-setup.png)

5. Dieser Remote-Standort muss zu unserem lokalen Git-Repository hinzugefügt werden, bevor wir es dort hochpushen können, andernfalls kann er es nicht finden. Sie müssen einen Befehl mit der folgenden Struktur ausführen (verwenden Sie jetzt die bereitgestellte HTTPS-Option – insbesondere, wenn Sie neu bei GitHub sind – nicht die SSH-Option):

   ```bash
   git remote add origin https://github.com/your-name/repo-name.git
   ```

   Wenn Ihre Remote-URL `https://github.com/remy/super-website.git` wäre, wie im obigen Screenshot, wäre Ihr Befehl

   ```bash
   git remote add origin https://github.com/remy/super-website.git
   ```

   Ändern Sie die URL in Ihr eigenes Repository und führen Sie es jetzt aus.

   > [!NOTE]
   > Nachdem Sie Ihren Repositories-Namen ausgewählt haben, stellen Sie sicher, dass die `base`-Option in Ihrer `vite.config.js` diesen Namen widerspiegelt, wie im [vorherigen Kapitel](/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#javascript_transformation) erwähnt. Andernfalls werden die JavaScript- und CSS-Ressourcen nicht korrekt verknüpft.

6. Jetzt sind wir bereit, unseren Code zu GitHub zu pushen; führen Sie jetzt den folgenden Befehl aus:

   ```bash
   git push origin main
   ```

   An diesem Punkt werden Sie aufgefordert, einen Benutzernamen und ein Passwort einzugeben, bevor Git das Senden des Pushes erlaubt. Dies liegt daran, dass wir die HTTPS-Option anstelle der SSH-Option verwendet haben, wie im Screenshot zuvor gesehen. Dazu benötigen Sie Ihren GitHub-Benutzernamen und dann – falls Sie keine Zwei-Faktor-Authentifizierung (2FA) aktiviert haben – Ihr GitHub-Passwort. Wir empfehlen Ihnen immer die Verwendung von 2FA, wenn möglich, aber bedenken Sie, dass Sie, wenn Sie dies tun, auch ein „persönliches Zugriffstoken“ verwenden müssen. Die GitHub-Hilfeseiten bieten eine [hervorragende und einfache Anleitung zur Erstellung eines solchen Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

> [!NOTE]
> Wenn Sie daran interessiert sind, die SSH-Option zu verwenden, um zu vermeiden, dass Sie jedes Mal, wenn Sie zu GitHub pushen, Ihren Benutzernamen und Ihr Passwort eingeben müssen, [führt Sie dieses Tutorial durch den Prozess](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Dieser letzte Befehl weist Git an, den Code an den „Remote“-Standort zu pushen, den wir `origin` genannt haben (das ist das auf github.com gehostete Repository – wir hätten es nennen können, wie wir wollten), und dabei den Branch `main` zu verwenden. Wir haben bisher gar keine Branches kennengelernt, aber der „main“-Branch ist der Standardarbeitsbereich für unsere Arbeit, und es ist der, mit dem Git beginnt. Wenn wir die Aktion definieren, die ausgelöst wird, um die Website zu erstellen, lassen wir sie auch auf Änderungen im „main“-Branch achten.

> [!NOTE]
> Bis Oktober 2020 war der Standard-Branch auf GitHub `master`, der aus verschiedenen sozialen Gründen auf `main` umgestellt wurde. Sie sollten sich dessen bewusst sein, dass dieser ältere Standard-Branch in verschiedenen Projekten, die Sie kennenlernen, erscheinen kann, aber wir würden Ihnen empfehlen, `main` für Ihre eigenen Projekte zu verwenden.

So, mit unserem Projekt, das in Git committet und zu unserem GitHub-Repository gepusht wurde, ist der nächste Schritt in der Toolchain, eine Build-Aktion zu definieren, damit unser Projekt live im Web bereitgestellt werden kann!

## Verwendung von GitHub-Aktionen für die Bereitstellung

GitHub Actions, wie die ESLint-Konfiguration, ist ein weiteres tiefes Thema, in das man eintauchen kann. Es ist nicht einfach, es beim ersten Versuch richtig zu machen, aber für beliebte Aufgaben wie „Erstellen einer statischen Website und Bereitstellen auf GitHub Pages“ gibt es viele Beispiele zum Kopieren und Einfügen. Sie können die Anweisungen in [Veröffentlichen mit einem benutzerdefinierten GitHub Actions-Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) befolgen. Sie können unsere [GitHub Action-Datei](https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml) für ein funktionierendes Beispiel überprüfen. (Der Dateiname spielt keine Rolle.)

Nachdem Sie diese Datei dem Hauptbranch hinzugefügt haben, sollten Sie ein kleines grünes Häkchen neben dem Commit-Titel sehen:

![GitHub-Screenshot, der ein grünes Häkchen neben einem Commit-Titel zeigt](build-action-pass.png)

Wenn Sie einen gelben Punkt sehen, bedeutet dies, dass die Aktion ausgeführt wird, und wenn Sie ein rotes Kreuz sehen, bedeutet dies, dass die Aktion fehlgeschlagen ist. Klicken Sie auf das Symbol, und Sie können den Status und die Protokolle Ihrer eigenen Build-Aktion (in unserem Fall „Deploy build“ genannt) sehen.

Nachdem Sie einige weitere Minuten gewartet haben, können Sie Ihre GitHub Pages-URL besuchen, um Ihre Website live im Web zu sehen. Der Link sieht aus wie `https://<your-name>.github.io/<repo-name>`. Für unser Beispiel ist es <https://mdn.github.io/client-toolchain-example/>.

Jetzt für den letzten Link in unserer Toolchain: ein Test zur Sicherstellung, dass unser Code funktioniert.

## Testing

Tests selbst sind ein weites Thema, selbst im Bereich der Front-End-Entwicklung. Ich werde Ihnen zeigen, wie Sie einen ersten Test zu Ihrem Projekt hinzufügen und wie Sie den Test verwenden können, um die Bereitstellung des Projekts zu verhindern oder zuzulassen.

Im Hinblick auf Teststrategien gibt es eine Vielzahl von Ansätzen:

- End-to-End-Tests, bei denen Ihr Besucher auf eine Sache klickt und eine andere Sache passiert.
- Integrationstests, die im Wesentlichen prüfen, ob ein Codeblock immer noch funktioniert, wenn er mit einem anderen Block verbunden ist.
- Unit-Tests, bei denen kleine und spezifische Funktionalitäten getestet werden, um zu sehen, ob sie das tun, was sie sollen.
- [Und viele weitere Typen](https://en.wikipedia.org/wiki/Functional_testing). Siehe auch unser [Cross Browser Testing Modul](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) für viele nützliche Testinformationen.

Denken Sie auch daran, dass Tests nicht auf JavaScript beschränkt sind; Tests können gegen das gerenderte DOM, Benutzerinteraktionen, CSS und sogar das Aussehen einer Seite ausgeführt werden.

Für dieses Projekt werden wir jedoch einen kleinen Test erstellen, der prüft, ob die GitHub-API-Daten im richtigen Format vorliegen. Wenn nicht, schlagen die Tests fehl und verhindern die Veröffentlichung des Projekts. Alles andere wäre außerhalb des Umfangs dieses Moduls – Tests sind ein riesiges Thema, das wirklich einen eigenen separaten Modul erfordert. Wir hoffen, dass dieser Abschnitt zumindest das Bewusstsein für die Notwendigkeit von Tests weckt und den Samen pflanzt, der Sie inspiriert, mehr zu lernen.

Der Test selbst ist nicht das Wichtige. Was wichtig ist, ist die Art und Weise, wie das Scheitern oder Gelingen gehandhabt wird. Da wir bereits eine benutzerdefinierte Build-Aktion schreiben, können wir einen Schritt vor dem Build hinzufügen, der den Test ausführt. Wenn der Test fehlschlägt, schlägt der Build fehl und die Bereitstellung erfolgt nicht.

Die gute Nachricht ist: Da wir Vite verwenden, bietet Vite bereits ein gutes integriertes Tool zum Testen: [Vitest](https://vitest.dev/guide/).

Lassen Sie uns beginnen.

1. Installieren Sie Vitest:

   ```bash
   npm install --save-dev vitest
   ```

2. Finden Sie in Ihrer package.json Ihr `scripts`-Element und aktualisieren Sie es so, dass es die folgenden Test- und Build-Befehle enthält:

   ```json
   "scripts": {
     // …
     "test": "vitest"
   }
   ```

   > [!NOTE]
   > Hier ist der Vorteil der Nutzung von Vite und Vitest: Wenn Sie andere Test-Frameworks verwenden, müssen Sie eine zusätzliche Konfiguration hinzufügen, die beschreibt, wie die Test-Dateien transformiert werden müssen, aber Vitest verwendet automatisch die Vite-Konfiguration.

3. Natürlich müssen wir jetzt den Test zu unserem Codebase hinzufügen. Normalerweise, wenn Sie die Funktionalität einer Datei testen, sagen wir `App.jsx`, würden Sie eine Datei namens `App.test.jsx` daneben hinzufügen. In diesem Fall testen wir nur die Daten, also erstellen wir ein anderes Verzeichnis, um unsere Tests zu speichern. Sie können das Beispiellager, das Sie im vorherigen Kapitel heruntergeladen haben, öffnen und den `tests`-Ordner kopieren.

4. Um den Test manuell auszuführen, können wir den folgenden Befehl über die Kommandozeile ausführen:

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

   Dies bedeutet, dass der Test erfolgreich war. Wie Vite wird es auf Änderungen achten und die Tests erneut ausführen, wenn Sie eine Datei speichern. Wir können mit <kbd>q</kbd> beenden.

5. Wir müssen den Test noch mit unserer Build-Aktion verbinden, damit er den Build blockiert, wenn der Test fehlschlägt. Öffnen Sie die Datei `.github/workflows/github-pages.yml` (oder welchen Namen Sie Ihrer Build-Aktion auch gegeben haben) und fügen Sie den folgenden Schritt direkt vor dem Schritt ein, der `npm run build` ausführt:

   ```yaml
   - name: Install deps
     run: npm ci

   # Add this
   - name: Run tests
     run: npm run test

   - name: Build
     run: npm run build
   ```

   Dies führt den Test vor dem Build-Schritt aus. Wenn der Test fehlschlägt, schlägt der Build fehl und die Bereitstellung erfolgt nicht.

6. Jetzt laden wir den neuen Code zu GitHub hoch, mit ähnlichen Befehlen wie zuvor verwendet:

   ```bash
   git add .
   git commit -m 'adding test'
   git push origin main
   ```

   In einigen Fällen möchten Sie vielleicht das Ergebnis des gebauten Codes testen (da dies nicht ganz der ursprüngliche Code ist, den wir geschrieben haben), deshalb sollte der Test möglicherweise nach dem Build-Befehl ausgeführt werden. Sie müssen all diese einzelnen Aspekte berücksichtigen, während Sie an Ihren eigenen Projekten arbeiten.

Schließlich wird ein oder zwei Minuten nach dem Pushen GitHub Pages das Projekt-Update bereitstellen. Aber nur, wenn es den eingeführten Test besteht.

## Zusammenfassung

Das war es für unsere Beispiel-Fallstudie und das Modul! Wir hoffen, dass Sie es nützlich fanden. Obwohl es noch ein weiter Weg ist, bevor Sie sich selbst als Client-seitiges-Tooling-Zauberer betrachten können, hoffen wir, dass Ihnen dieses Modul den ersten wichtigen Schritt in Richtung Verständnis von Client-seitigen-Tools gegeben hat und das Selbstvertrauen verleiht, mehr zu lernen und neue Dinge auszuprobieren.

Fassen wir alle Teile der Toolchain zusammen:

- Die Codequalität und -pflege werden durch ESLint und Prettier durchgeführt. Diese Tools werden über `npm install --dev eslint prettier eslint-plugin-react ...` als `devDependencies` zum Projekt hinzugefügt (das ESLint-Plugin wird benötigt, da dieses spezielle Projekt React verwendet).
- Es gibt zwei Konfigurationsdateien, die die Codequalitätstools lesen: `eslint.config.js` und `.prettierrc`.
- Während der Entwicklung fügen wir weiterhin Abhängigkeiten mit npm hinzu. Der Vite-Entwicklungsserver läuft im Hintergrund, um Änderungen zu beobachten und automatisch unseren Quellcode zu bauen.
- Die Bereitstellung erfolgt durch das Pushen unserer Änderungen zu GitHub (im „main“-Branch), das einen Build und eine Bereitstellung mithilfe von GitHub Actions auslöst, um das Projekt zu veröffentlichen. In unserem Fall lautet diese URL <https://mdn.github.io/client-toolchain-example/>; Sie werden Ihre eigene einzigartige URL haben.
- Wir haben auch einen einfachen Test, der den Bau und die Bereitstellung der Site blockiert, wenn der GitHub-API-Feed uns nicht das richtige Datenformat liefert.

Für diejenigen unter Ihnen, die eine Herausforderung suchen, überlegen Sie, ob Sie einen Teil dieser Toolchain optimieren können. Einige Fragen, die Sie sich stellen sollten:

- Können wir nur die Funktionen von plotly.js extrahieren, die wir benötigen? Dies würde die Größe des JavaScript-Pakets reduzieren.
- Vielleicht möchten Sie andere Tools hinzufügen, wie TypeScript für die Typüberprüfung oder stylelint für CSS-Linting?
- Könnte React durch [etwas Kleineres](https://preactjs.com/) ersetzt werden?
- Könnten Sie weitere Tests hinzufügen, um einen schlechten Build vorz الصخور, wie z. B. [Leistungsprüfungen](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)؟
- Könnten Sie eine Benachrichtigung einrichten, um Ihnen mitzuteilen, wann ein neuer DEPLOY erfolgreich war oder fehlgeschlagen ist?

{{PreviousMenu("Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
