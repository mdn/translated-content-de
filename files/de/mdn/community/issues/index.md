---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Als Beitragende können Sie [melden](#richtlinien_zum_melden_eines_issues) und an [Issues arbeiten](#richtlinien_zur_bearbeitung_eines_issues).
Nachdem Sie ein Issue gemeldet haben, wird es triagiert. Das Issue [Triaging](#richtlinien_zum_triaging_von_issues) wird typischerweise von Personen durchgeführt, die die Rolle eines Maintainers oder Eigentümers innehaben.

## Allgemeine Richtlinien für die Teilnahme

Während Sie ein Issue melden oder an einem Gespräch in einem Issue teilnehmen, stellen Sie immer sicher, dass Ihre Beiträge zum allgemeinen Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare in einem Issue konstruktiv und themenbezogen sind und nicht einfach nur Lärm erzeugen.

Tun Sie Folgendes:

- Bevor Sie ein Issue einreichen, überlegen Sie, ob Sie es mit dem Personal oder der Community [besprechen](/de/docs/MDN/Community/Communication_channels#chat_rooms) sollten. Verwenden Sie Diskussionen, um unterschiedliche Standpunkte zu gewinnen und sich auf ein gemeinsames Vorgehen zu einigen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Versuchen Sie nach dem Einreichen eines Issues, das Problem selbst zu beheben. Lesen Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue einzureichen.

Vermeiden Sie Folgendes:

- Das Komplizieren von Issues durch die gleichzeitige Diskussion mehrerer Themen oder durch Ausschweifungen.
- Das Öffnen vieler Issues mit vagen Fragen.
- Fragen zu stellen, ohne zuerst versucht zu haben, das Problem selbst zu lösen.

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und ein klares Ergebnis haben.

### Bevor Sie ein Issue einreichen

Wenn Sie glauben, einen Fehler im Inhalt auf den MDN Web Docs oder im Erscheinungsbild der Website gefunden zu haben, durchsuchen Sie die aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass das Problem noch nicht von jemand anderem gemeldet wurde.

### Melden eines Issues

- Abhängig von der Art des von Ihnen entdeckten Problems, melden Sie es in einem der folgenden:

  - [Dokumentation](https://github.com/mdn/content/issues/new/choose)
  - [Übersetzung](https://github.com/mdn/translated-content/issues/new/choose)
  - das [Erscheinungsbild der Website](https://github.com/mdn/yari/issues/new/choose)
  - der "Try it" [interaktive Beispiel](https://github.com/mdn/interactive-examples/issues/new/choose) Abschnitt
  - [DOM-Beispiele](https://github.com/mdn/dom-examples/issues)
  - [Lernbereich](https://github.com/mdn/learning-area/issues)
  - die [Browser-Kompatibilitäts](https://github.com/mdn/browser-compat-data/issues/new/choose) Informationen

- Wählen Sie die passende Kategorie, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Inhalts-Issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) Vorlage im `mdn/content` Repository.

- Geben Sie genügend Informationen beim Melden des Issues an:

  - **Issue-Titel** muss die _erforderliche Handlung_ prägnant vermitteln.

  - **Issue-Beschreibung** muss den Fehler und die erforderliche Handlung zur Behebung des Problems klar beschreiben. Sie muss auch die Aufgaben oder Unteraufgaben zur Lösung des Problems auflisten. Einige andere Richtlinien beinhalten:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Issue-Beschreibung, anstatt in Kommentaren auf das Issue einzugehen. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, die sonst durch Kommentare im Issue scrollen müssten, um den Status verschiedener Aufgaben zu bestimmen.
    - Kommentare in einem Issue sollten auf Details oder Kontext beschränkt sein, die bei der Lösung des Problems helfen.

- Wenn die von Ihnen bereitgestellten Informationen im Issue unvollständig sind, könnten Sie später im Rahmen des [Issue-Triagierungsprozesses](#überprüfung_des_issues_auf_vollständigkeit_der_informationen) kontaktiert werden.

- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Diskussion zu [GitHub-Diskussionen von MDN](https://github.com/orgs/mdn/discussions):

  - Eine Diskussion muss stattfinden, um ein Issue zu klären.
  - Eine Diskussion beginnt nach Öffnen des Issues.
  - Es besteht kein klarer Konsens über die Lösung des Issues.
  - Die Anforderungen zur Vervollständigung der Aufgabe erweitern sich, während sie gelöst wird, oder die Arbeit ist unklar.

- Bei kleineren und kleinen Fehlern können Sie [die Änderungen selbst vornehmen](#beheben_von_issues_selbst) und einen Pull-Request einreichen.

### Erstellen eines Aufgabenlisten-Issues

Wenn das Issue, das Sie eröffnen, nicht zum Melden eines Fehlers gedacht ist, sondern um eine Reihe von Aufgaben auszuführen, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen.
Erklären Sie im Beschreibungstext den Kontext oder den Grund für die Durchführung der Aufgaben.
Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste auflisten.

Zum Beispiel:

```markdown
// Issue title
Ensure sections follow the order defined in the CSS property template

### Description

The CSS property page template is defined [here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template).
The task list in this issue will be used to compare the documented CSS properties with the template and track changes to the property pages for compliance.

### List of pages checked

- [x] [accent-color](/en-US/docs/Web/CSS/accent-color) - checked, okay
- [ ] [backdrop-filter](/en-US/docs/Web/CSS/backdrop-filter)
- [ ] [letter-spacing](/en-US/docs/Web/CSS/letter-spacing) - open pull request to move `Accessibility concerns` and `Internationalization concerns` sections before the `Specifications` section.
```

## Richtlinien zur Bearbeitung eines Issues

Denken Sie daran, dass, wenn Sie ein Issue übernehmen, die Erwartung besteht, dass die Arbeit innerhalb eines angemessenen Zeitrahmens abgeschlossen wird. Wenn Sie nach einer Woche keinen Fortschritt erzielen können, nachdem Ihnen das Issue zugewiesen wurde, oder nicht mehr in der Lage sind, die erforderliche Aufgabe abzuschließen, hinterlassen Sie einen Kommentar und entziehen Sie sich selbst die Zuweisung für das Issue.

Dies sind die allgemeinen Schritte für die Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit den Labels [`good first issue`, `help wanted`](#setzen_anderer_labels) oder [`p3`](#festlegen_eines_prioritätslabels). Die meisten Repositories haben Issues mit diesen Labels. Sie sind herzlich eingeladen, in den Issues zu stöbern und ein passendes für Ihre Fähigkeiten auszuwählen. Ein weiterer nützlicher Ort, um nach Issues zu suchen, die bearbeitet werden können, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte), die Sie interessieren, filtern. Lesen Sie die Beschreibung einiger [Labels](#setzen_anderer_labels), die während des Issue-Triagierungsprozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` zeigt an, dass das MDN Web Docs Kernteam das Issue noch nicht überprüft hat, und Sie sollten nicht daran arbeiten.

2. **Weisen Sie sich das Issue zu:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass das Issue niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie an dem Issue arbeiten möchten, und wenn möglich, [weisen Sie sich das Issue selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Führen Sie die Recherche durch:** Die meisten Issues erfordern eine gewisse Untersuchung, bevor die Arbeit beginnen kann.

   - Ermitteln Sie, welche Arbeiten erledigt werden müssen. Wenn Sie Fragen stellen müssen, tun Sie dies in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit offensichtlich ist, können Sie getrost loslegen.
   - Wenn das Issue nicht gut beschrieben ist und/oder Sie nicht sicher sind, was erforderlich ist, zögern Sie nicht, den ursprünglichen Poster @-Mention zu fragen, um nach weiteren Informationen zu bitten.

4. **Nehmen Sie die Änderungen vor:** Forken und branchen Sie das Repository. Machen Sie Ihre Arbeit und eröffnen Sie einen [Pull Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Verweisen Sie auf das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Pull-Request-Beschreibung. Je nach den Dateien, die Sie im Pull Request aktualisiert haben, wird ein Reviewer automatisch Ihrem Pull Request zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   Nachdem der Pull Request eröffnet wurde, falls Sie nicht mehr die Zeit haben, Änderungen vorzunehmen oder das Feedback zu den Reviews zu bearbeiten, lassen Sie das Team so schnell wie möglich in einem Kommentar im Pull Request wissen. Dies wird dem Team helfen, einen weiteren interessierten Beitragenden zu beauftragen, die Arbeit am Pull Request abzuschließen und das verlinkte Issue zu schließen.

5. Nachdem Ihr Pull Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Issue als geschlossen markieren. Wenn Sie den Pull Request mit dem Vermerk `Fixes #<issue>` eröffnet haben, wird das Issue automatisch geschlossen, wenn der Pull Request zusammengeführt wird.

### Beheben von Issues selbst

Wenn Sie einen Fehler entdecken — sei es ein Problem mit dem Erscheinungsbild der Website oder ein Fehler in der Dokumentation — können Sie versuchen, es selbst zu beheben. Erfahren Sie, wie Sie beitragen können, indem Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) durchgehen.

Wenn der Fehler klein ist, wie ein Tippfehler oder eine geringfügige Verbesserung eines Satzes, oder eine unkontroverse Korrektur umfasst, reichen Sie einen Pull Request mit den Änderungen ein.

Für alle anderen Arten von Fehlern beginnen Sie damit, [das Issue zu eröffnen](#richtlinien_zum_melden_eines_issues). Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Issue zu arbeiten und wenn möglich, beschreiben Sie Ihre Lösungsvorschläge oder die Schritte zur Behebung des Problems.
Warten Sie, bis das Issue triagiert wird, damit das MDN Web Docs Team überprüfen kann, dass das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigt.

> [!NOTE]
> Wenn Sie einen Pull Request einreichen, bevor das Issue triagiert wurde, könnten Ihre Zeit und Mühe verschwendet sein, wenn das verlinkte Issue als ungültig angesehen wird oder die Lösung nicht derjenigen entspricht, die vom MDN Web Docs Team erwartet wird.
> Nachdem das Issue triagiert wurde, weisen Sie sich das Issue selbst zu.

Verwenden Sie die [Richtlinien zur Bearbeitung eines Issues](#richtlinien_zur_bearbeitung_eines_issues), um das Problem durch Aktualisierung der entsprechenden Quelle zu beheben, wie:

- Der Inhalt der MDN Web Docs (auf Englisch) im [content](https://github.com/mdn/content) Repository
- Der übersetzte Inhalt der MDN Web Docs im [translated-content](https://github.com/mdn/translated-content) Repository
- Das Erscheinungsbild der MDN Web Docs Website im [yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, die Sie anleiten, wie Sie beitragen können.

## Richtlinien zum Triaging von Issues

Wenn Sie ein Maintainer oder Eigentümer in der MDN Web Docs GitHub Organisation sind, sind Sie verantwortlich für das Triaging von Issues in einem oder mehreren MDN Web Docs Repositories.

Der Gesamtprozess des Triagierens umfasst einige [allgemeine](#allgemeine_triaging-aufgaben) und einige [issue-spezifische Aufgaben](#issue-spezifische_triaging-aufgaben).

### Allgemeine Triaging-Aufgaben

- Wenn ein Issue geöffnet wird, wird das `needs triage` Label automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#issue-spezifische_triaging-aufgaben). Beitragende oder andere Personen sollten nicht an dem Issue arbeiten, bis es triagiert wurde. (Triager sollten daran denken, das `needs triage` Label nach dem Triaging-Vorgang zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird ein zusätzliches `Content:` Label, wie zum Beispiel `Content:CSS` oder `Content:WebAPI`, automatisch auf das Issue gesetzt. Dies wird basierend auf der im Issue erwähnten MDN URL festgelegt. Sie können das Content-spezifische Label verwenden, um Issues zu triagieren, die in Ihrem spezifischen Themenbereich fallen.

- Wenn ein Issue ein aktives, nicht-en-US-Format betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh`, oder `l10n-ja`. Die Teams für diese Formate werden diese Issues aufnehmen und triagieren.

- Sie müssen nicht ständig aktiv Issues triagieren. Reservieren Sie Zeit, sagen wir 30 Minuten jede Woche, um regelmäßig die Issues in Ihrem Verantwortungsbereich zu triagieren. Das Triaging muss nicht als Teil einer synchronen Sitzung oder sogar zur gleichen Zeit wie alle anderen erfolgen, es sollte jedoch regelmäßig durchgeführt werden, um sicherzustellen, dass der Rückstand an nicht triagierten Fehlern nicht zu groß wird.

- Abgesehen von der Triagierung einkommender Issues jede Woche, überprüfen Sie die Liste der alten Fehler, um zu sehen, ob es solche gibt, die ins Stocken geraten, geschlossen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, um zu sehen, ob derjenige, dem sie zugewiesen wurden, Fortschritte macht. Wenn nach einer Woche keine Fortschritte erzielt werden, fragen Sie sie, ob sie noch Zeit haben, an dem Issue zu arbeiten. Wenn noch eine Woche ohne Fortschritt verstreicht, entziehen Sie ihnen die Zuweisung und hinterlassen Sie einen Kommentar, dass Sie das Issue für andere interessierte Beitragende verfügbar machen.
  - Wenn ein Pull Request geöffnet wurde, um das Issue zu beheben, aber seit einer Woche nicht überprüft wurde, geben Sie dem Reviewer einen sanften Anstoß, um zu fragen, ob er es sich ansehen kann.
  - Wenn ein Pull Request zur Behebung des Issues nach einer Woche auf Kommentare wartet, die von den Reviews beantwortet werden müssen, dann fragen Sie den Autor, ob er auf seine Review antworten kann. Wenn noch eine Woche vergeht, beheben Sie entweder die Review-Kommentare selbst, wenn Sie Zeit haben, oder schließen Sie den Pull Request und übernehmen Sie das zugehörige Issue.

### Issue-spezifische Triaging-Aufgaben

Dies sind die Richtlinien, die beim Triaging jedes Issues befolgt werden sollten.

#### Überprüfung, ob das Issue gültig ist

Dies sind einige der Dinge, die beim Überprüfen der Gültigkeit eines Issues zu beachten sind:

- Überprüfen Sie, ob das erhobene Issue gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessert.
- Beurteilen Sie, ob die Auswirkungen der Behebung klein oder auf die gesamte Website ausgeweitet sind.
- Bewerten Sie, ob die Behebung des Issues zuerst einer Diskussion bedarf, und weisen Sie in diesem Fall den Autor darauf hin, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Issue mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Überprüfen Sie, ob Vorschläge zur Hinzufügung von Links mit unserer [Externe Links-Richtlinie](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfung des Issues auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Arbeit am Fehler beginnen kann:

- URL der MDN Web Docs Seite mit dem Problem oder URL einer Beispiel-MDN-Web-Docs-Seite, wenn das Problem auf mehreren Seiten besteht.
- Der spezifische Abschnitt oder die Überschrift auf der MDN-Web-Docs-Seite, wo das Problem gefunden wurde.
- Eine klare Beschreibung der unzutreffenden, unhilfreichen, unvollständigen oder fehlenden Informationen.

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das `needs info` Label dem Issue hinzufügen. Nehmen Sie das Triaging des Issues nur dann wieder auf, wenn diese Details bereitgestellt wurden (wonach Sie das `needs info` Label entfernen können). Es ist in Ordnung, bis zu einer Woche auf eine Antwort des Autors zu warten.

#### Festlegen eines Prioritätslabels

Setzen Sie für jeden Fehler ein Prioritätslabel basierend auf dem Schweregrad des Issues, um Personen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Dieser Issue-Typ muss so schnell wie möglich behoben werden, unabhängig davon, wo er auf der Website erscheint. Diese Art von Issue könnte MDNs Ruf schwer schädigen und/oder den Nutzern schaden. Beispiele für diesen Issue-Typ umfassen einen falschen Code-Snippet, der bei Verwendung in der Produktion ein schweres Sicherheitsproblem erzeugen könnte und unerwünschte Inhalte wie Malware, Obszönitäten, Pornografie, Hassrede oder Links zu solchen Inhalten.

  - Label: `p0` (wird sofort bearbeitet)

- Großes Issue: Dieser Issue-Typ könnte die Nützlichkeit einer Seite stark beeinträchtigen. Zum Beispiel eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Code-Beispiel, das nicht funktioniert, eine erhebliche Menge Prosa, die schlecht geschrieben und schwer verständlich ist, oder eine große Anzahl von defekten Links.

  - Labels: `p1` (wird bald bearbeitet) und `p2` (wird bald bearbeitet, aber höher priorisierte Items haben Vorrang)

- Kleines Issue: Dies ist ein Verbesserungsvorschlag, der den vorhandenen Inhalt besser machen kann, aber das Lernen nicht beeinflusst oder nur einen geringen Einfluss auf das Lernen hat. Da diese Art von Issues nicht aktiv geplant werden, sind Beiträge von Beitragenden, die diese Issues beheben, willkommen und sehr geschätzt. Die Behebung einiger dieser Issues kann auch die notwendige Praxis für beginnende Beitragende bieten, die sich mit dem Beitragsprozess vertraut machen. Beispiele sind Tippfehler, schlechte Grammatik, ein defekter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebene Prosa oder ein Code-Snippet, das nicht funktioniert.

  - Labels: `p3` (keine Sichtbarkeit, wann das Issue bearbeitet wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden wahrscheinlich von MDN Web Docs Mitarbeitern und Gleichgestellten behandelt.

#### Hinzufügen hilfreicher Informationen

Fügen Sie, wenn möglich, Informationen hinzu, die den Beitragenden helfen können, das Issue zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlich behobenen Issues oder Lese-Ressourcen vorliegen. Ein gut ausgearbeiteter Plan oder Schritte sind besonders bei Issues erforderlich, die mit `good first issue` markiert sind und dazu beitragen können, neue Beitragende schnell einzuarbeiten. Sie können diese Aufgabe auf 5-10 Minuten begrenzen.

Zum Beispiel können Sie als Triager die folgenden Informationen zu dem Issue hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen anderer Labels

Setzen Sie anschließend die folgenden Labels wie angemessen:

- `effort: small`, `effort: medium`, `effort: large`: Einige Beitragende durchsuchen gerne Bugs basierend auf der Zeit und dem Aufwand, die zur Behebung des Bugs benötigt werden. Daher sollten Sie, wenn möglich, versuchen, eine Schätzung des erforderlichen Aufwands bereitzustellen.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung des Issues wirklich einfach ist und wenn die Behebung des Issues eine gute Übung für einen Neuling bietet, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn das Issue Hilfe von jemandem erfordert, der über das Thema Bescheid weiß oder mit dem Thema vertraut ist. Dies ist ein beliebtes Label, und einige Beitragende verwenden es, um nach Issues zu suchen, die in Open-Source-Projekten in ihren Bereichen der Vertrautheit oder Expertise bearbeitet werden können.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen defekten Link zu einer externen Seite enthält.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, normalerweise, weil ein Link darauf hinweist.
- `needs content update`: Setzen Sie dieses Label, wenn die Issue-Behebung in einem anderen Repository eine entsprechende Behebung im `mdn/content` Repository erfordern wird.

  > [!NOTE]
  > Nachdem der Triage-Prozess abgeschlossen ist, entfernen Sie das `needs triage` Label.
