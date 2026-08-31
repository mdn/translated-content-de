---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Als Beitragender können Sie [Probleme melden](#richtlinien_zur_meldung_eines_problems) und an [Issues arbeiten](#richtlinien_zur_bearbeitung_eines_issues).
Nachdem Sie ein Problem gemeldet haben, wird es triagiert. Die [Triagierung](#richtlinien_für_die_triagierung_von_problemen) von Problemen wird typischerweise von Personen vorgenommen, die die Rolle eines Maintainers oder Besitzers haben.

## Allgemeine Richtlinien für die Teilnahme

Wenn Sie ein Problem melden oder an einer Konversation zu einem Problem teilnehmen, stellen Sie stets sicher, dass Ihr Beitrag zum Gesamtfortschritt des Projekts beiträgt. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare in einem Issue konstruktiv und themenbezogen sind und nicht nur für Unruhe sorgen.

Folgendes sollten Sie tun:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue einzureichen.
- Wenn es viele Möglichkeiten gibt, ein Problem zu lösen, überlegen Sie, ob Sie dies mit dem Personal/der Community [besprechen](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Diskussionen dienen dazu, unterschiedliche Standpunkte zu gewinnen und sich auf eine vereinbarte Vorgehensweise zu einigen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Versuchen Sie nach dem Einreichen eines Issues, das Problem selbst zu beheben. Es gibt einen Leitfaden zu [Pull-Request-Einreichungen und Bewertungen](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragsprozess wissen müssen.

Vermeiden Sie Folgendes:

- Die Probleme durch die Diskussion mehrerer Themen oder durch Off-Topic-Kommentare kompliziert machen.
- Viele Issues mit vagen Fragen eröffnen.
- Fragen stellen, ohne zu versuchen, das Problem selbst zu lösen.

Wenn Sie neue Dokumentationen oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, lesen Sie [Vorschläge für neue Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien zur Meldung eines Problems

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Problem melden

Identifizieren Sie zuerst, basierend auf der Art des entdeckten Problems, das entsprechende [MDN GitHub-Repository](/de/docs/MDN/Community/Our_repositories) zur Erstellung des Issues, damit die richtigen Personen es bearbeiten können. Überprüfen Sie dann, bevor Sie ein Issue erstellen, ob es nicht bereits gemeldet wurde.

### Melden eines Problems

Hier sind einige Hinweise zum Eröffnen von Issues:

- Wählen Sie die passende Kategorie, um das Problem zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Inhalts-Issue-Vorlage](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im `mdn/content` Repository.
- Geben Sie beim Melden des Problems ausreichend Informationen an:
  - **Titel des Problems** muss die _erforderliche Handlung_ prägnant vermitteln.
  - **Beschreibung des Problems** muss den Fehler klar beschreiben und, wenn möglich, die erforderliche Handlung zur Behebung des Problems erläutern.

    Bei komplexen Problemen, die mehrere Schritte zur Behebung erfordern, unterteilen Sie die Arbeit in kleinere Aufgaben mit einer [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists). Aktualisieren Sie den Status einer Aufgabe in der Problembeschreibung, anstatt einen Kommentar hinzuzufügen. Dies hilft anderen, die sonst durch Kommentare blättern müssten, um den Status verschiedener Aufgaben zu bestimmen. Kommentare in einem Problem sollten sich auf Details oder Kontext beschränken, die bei der Behebung des Problems helfen.

- Wenn auf Sie eine der folgenden Situationen zutrifft, verlagern Sie die Konversation zu [MDNs Diskussion bei GitHub](https://github.com/orgs/mdn/discussions):
  - Sie sind unsicher, ob das Problem gültig ist oder welche Handlung erforderlich ist.
  - Es gibt keinen klaren Konsens über die Lösung des Problems.
- Bei kleineren Fehlern können Sie [die Änderungen selbst vornehmen](#probleme_selbst_beheben) und eine Pull-Request einreichen.

Wenn die Informationen, die Sie in Ihrem Issue bereitstellen, unvollständig sind, werden Sie möglicherweise gebeten, während des [Triagierungsprozesses](#überprüfen_sie_das_problem_auf_vollständigkeit_der_informationen) weitere Details anzugeben (achten Sie auf das `needs info` Label).

### Erstellen eines Aufgabenlisten-Issues

Wenn das zu eröffnende Issue keinen Fehler meldet, sondern eine Serie von Aufgaben auszuführen ist, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen. Erklären Sie den Kontext oder den Grund für die Durchführung der Aufgaben in der Beschreibung. Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste auflisten.

Zum Beispiel:

```md
// Issue title
Ensure sections follow the order defined in the CSS property template

### Description

The CSS property page template is defined [here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template).
The task list in this issue will be used to compare the documented CSS properties with the template and track changes to the property pages for compliance.

### List of pages checked

- [x] [accent-color](/en-US/docs/Web/CSS/Reference/Properties/accent-color) - checked, okay
- [ ] [backdrop-filter](/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter)
- [ ] [letter-spacing](/en-US/docs/Web/CSS/Reference/Properties/letter-spacing) - open pull request to move `Accessibility concerns` and `Internationalization concerns` sections before the `Specifications` section.
```

## Richtlinien zur Bearbeitung eines Issues

Denken Sie daran, dass wenn Sie ein Issue übernehmen, die Erwartung besteht, dass die Arbeit zeitnah abgeschlossen wird. Wenn es Ihnen nicht möglich ist, mit der Bearbeitung eines übernommenen Issues fortzufahren, fügen Sie bitte einen Kommentar hinzu, damit die Maintainer informiert sind und das Issue von einem anderen Beitragenden übernommen werden kann.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit einem Prioritätslabel, `p2` oder `p3` (sehen Sie, was diese [Prioritätslabel](#setzen_sie_ein_prioritätslabel) bedeuten). Alternativ suchen Sie nach Issues mit [einem dieser Labels, die darauf hinweisen, dass wir PRs aus der Community einladen](#apply_type_goal_and_effort_labels): `good first issue`, `accepting PR` und `help wanted`. Die meisten Repositories haben Issues mit diesen Labels. Sie können nach Belieben stöbern und ein Issue auswählen, das zu Ihrem Kompetenzniveau passt.

   Ein weiterer nützlicher Ort, um nach Issues zu suchen, ist das [MDN Contributor Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste nach den Themen filtern, die Sie interessieren (`Labels` Spalte). Wenn Sie neugierig sind, lesen Sie die Bedeutungen der [Labels](#apply_type_goal_and_effort_labels), die während des Triagingprozesses aufgetragen werden.

   > [!NOTE]
   > Ein Issue mit dem `needs triage` Label zeigt an, dass das MDN-Team das Issue noch nicht überprüft hat, und Sie sollten nicht mit der Arbeit daran beginnen.

2. **Überprüfen, dass niemand bereits an dem Issue arbeitet:**

   Bevor Sie mit der Arbeit an einem Issue beginnen, überprüfen Sie zuerst, dass niemand dem Issue zugewiesen ist (das _Assignees_-Feld sollte "Unassigned" sein).

   Dann prüfen Sie, dass keine verknüpften [Pull-Requests](/de/docs/MDN/Community/Pull_requests) existieren, da diese anzeigen könnten, dass ein anderer Beitragender das Issue beansprucht und daran zu arbeiten begonnen hat.

3. **Forschung betreiben:**

   Die meisten Issues erfordern einige Untersuchungen, bevor die Arbeit beginnen kann.
   - Umreißen Sie den Arbeitsumfang, der erledigt werden muss. Wenn das Issue nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, fühlen Sie sich frei, die Person zu erwähnen, die das Issue eröffnet hat (verwenden Sie @Benutzername) und um weitere klärende Informationen zu bitten.
   - Sie können auch um Rat in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) bitten.

4. **Beanspruchen Sie das Issue:**

   Sie können ein nicht zugewiesenes und nicht beanspruchtes Issue durch folgende Schritte "beanspruchen":
   1. Forken Sie das Repository und erstellen Sie Ihren Arbeitszweig.
   2. Beheben Sie das Issue und öffnen Sie dann einen [Pull Request (PR)](/de/docs/MDN/Community/Pull_requests) im Repository.
   3. Fügen Sie in der PR-Beschreibung den Text `Fixes #<issue_number>` ein (wenn die PR das Issue nur teilweise behebt, fügen Sie den Text `Related to #<issue_number>` hinzu).

      Das Hinzufügen dieses Textes erstellt eine Querverbindung zwischen dem Issue und der PR und markiert das Issue implizit als von Ihnen beansprucht.

      > [!NOTE]
      > Wenn Sie die notwendigen Berechtigungen haben, sollten Sie das Issue auch _explizit_ [sich selbst zuweisen](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

   Je nachdem, welche Dateien Sie in der Pull-Request aktualisiert haben, wird Ihrem Pull-Request automatisch ein Reviewer zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   > [!WARNING]
   > Nachdem Sie den Pull-Request geöffnet haben, lassen Sie das Team wissen, wenn Sie feststellen, dass Sie nicht mehr die Zeit haben, Änderungen vorzunehmen oder das Feedback zu überprüfen. Dies hilft dem Team, einen anderen interessierten Beitragenden zu beauftragen, die Arbeit an der Pull-Request abzuschließen und das verknüpfte Issue zu schließen.

5. **Schließen Sie das Issue als abgeschlossen:**

   Wenn Sie den Pull-Request mit `Fixes #<issue>` in der Beschreibung geöffnet haben, wird das Issue automatisch geschlossen, wenn die PR zusammengeführt wird. Andernfalls können Sie einen Kommentar zu dem Problem hinzufügen, der auf eine oder mehrere Pull-Requests verweist, die es beheben, und ein Maintainer wird das Problem als abgeschlossen schließen.

### Probleme selbst beheben

Wenn Sie einen Fehler entdecken – sei es ein Problem mit dem Aussehen und der Funktionalität der Website oder ein Fehler in der Dokumentation – können Sie versuchen, ihn in einer [Pull-Request](/de/docs/MDN/Community/Pull_requests) selbst zu beheben. Wenn der Fehler klein ist (wie z. B. ein Tippfehler oder eine geringfügige Verbesserung eines Satzes) oder eine schnelle Korrektur erforderlich ist, können Sie eine Pull-Request mit den erforderlichen Änderungen einreichen.

Bei jedem anderen Fehler beginnen Sie mit dem [Öffnen eines Issues](#richtlinien_zur_meldung_eines_problems). Fügen Sie einen Kommentar zu Ihrer Absicht bei, an dem Problem zu arbeiten, und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder die Schritte zu dessen Behebung.

> [!NOTE]
> Ihre Zeit und Mühe könnte verschwendet werden, wenn Sie eine Pull-Request eröffnen, ohne vorher ein Issue zu eröffnen. Warten Sie, bis das Issue triagiert wurde, damit das MDN Web Docs Team überprüfen kann, ob das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigen kann.

Verwenden Sie die [Richtlinien zum Bearbeiten von Issues](#richtlinien_zur_bearbeitung_eines_issues), um das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, wie z.B.:

- Den **Inhalt** der MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Den **übersetzten Inhalt** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** der MDN Web Docs im [mdn/fred](https://github.com/mdn/fred) Repository

Jedes Repository enthält nützliche Informationen, die Ihnen bei Ihrem Beitrag helfen. Für weitere Informationen siehe [unsere Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien für die Triagierung von Problemen

Wenn Sie ein Maintainer oder Besitzer in der MDN Web Docs GitHub-Organisation sind, sind Sie für die Triagierung von Issues in einem oder mehreren MDN Web Docs-Repositories verantwortlich.

Der gesamte Prozess der Triagierung umfasst einige [allgemeine](#allgemeine_triagierungsaufgaben) und einige [problemspezifische Aufgaben](#problemspezifische_triagierungsaufgaben).

### Allgemeine Triagierungsaufgaben

- Wenn ein Issue geöffnet wird, wird das Label `needs triage` automatisch gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#problemspezifische_triagierungsaufgaben). Beitragende oder andere Personen sollten an dem Issue nicht arbeiten, bis es triagiert wurde. (Triagierer sollten daran denken, das `needs triage` Label nach der Triagierung des Issues zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird ein zusätzliches `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch gesetzt. Dies wird basierend auf der MDN-URL gesetzt, die im Issue erwähnt wird. Sie können das inhaltsspezifische Label verwenden, um nach zu triagierenden Issues in Ihrem spezifischen Themenbereich zu suchen.

- Wenn ein Problem eine aktive, nicht en-US-Sprache betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Sprachen werden diese Issues bearbeiten und triagieren.

- Sie müssen nicht die ganze Zeit aktiv Probleme triagieren. Gehen Sie regelmäßig davon aus, z. B. 30 Minuten pro Woche, um Issues in Ihrem Zuständigkeitsbereich auf regelmäßiger Basis zu triagieren. Die Triagierung muss nicht als Teil eines synchronen Meetings oder zur gleichen Zeit wie alle anderen gemacht werden, aber es sollte regelmäßig geschehen, um sicherzustellen, dass der Rückstand an nicht triagierten Bugs nicht zu hoch wird.

- Abgesehen von der Triagierung eingehender Issues jede Woche, überprüfen Sie die Liste der alten Bugs, um zu sehen, ob es welche gibt, die festgefahren sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, bei denen 30 Tage keine Aktivität stattfand.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, um zu sehen, ob der Assignee Fortschritte macht. Wenn nach einer Woche des Zuweisens keine Fortschritte gemacht werden, fragen Sie, ob sie noch Zeit haben, an dem Problem zu arbeiten. Wenn nach einer weiteren Woche keine Fortschritte gemacht werden, weisen Sie jemanden ab und hinterlassen Sie einen Kommentar, der angibt, dass Sie das Issue für andere interessierte Beitragende freigeben.
  - Wenn eine Pull-Request zur Behebung des Problems eröffnet wurde, aber nach einer Woche nicht überprüft wurde, geben Sie dem Reviewer einen sanften Hinweis, ob er es schaffen kann.
  - Wenn eine Pull-Request zur Behebung des Problems auf Rückkommentare wartet, dann fragen Sie den Autor, ob er auf die Überprüfung antworten kann. Wenn eine weitere Woche vergeht, korrigieren Sie entweder die Überprüfungskommentare selbst, wenn Sie die Zeit haben, oder schließen Sie die Pull-Request und geben Sie das zugehörige Problem frei.

### Problemspezifische Triagierungsaufgaben

Dies sind die Richtlinien, die Sie bei der Triagierung jedes Issues befolgen sollten.

#### Überprüfen Sie, ob das Problem gültig ist

Dies sind einige Punkte, die Sie bei der Überprüfung der Gültigkeit eines Issues beachten sollten:

- Überprüfen Sie, ob das gemeldete Problem gültig ist.
- Bewerten Sie, ob die Korrektur den Inhalt für die Leser und die Website verbessert.
- Bewerten Sie, ob die Auswirkungen der Korrektur gering oder weitreichend sind.
- Bewerten Sie, ob die Behebung des Issues zunächst eine Diskussion erfordert, und weisen Sie den Autor in diesem Fall darauf hin, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Problem mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt. Zum Beispiel, ob Vorschläge für das Hinzufügen von Links mit unserer [externen Links-Politik](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.
- Überprüfen Sie, ob das Issue ein Duplikat eines bestehenden Issues ist. Wenn dies der Fall ist, können Sie [das Issue als Duplikat schließen](#schließen_eines_problems_als_duplikat).

#### Überprüfen Sie das Problem auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Problem die beschriebenen Informationen enthält, damit jemand mit der Fehlerbehebung beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder URL einer Beispiel-MDN-Web-Docs-Seite, wenn das Problem auf mehreren Seiten besteht
- Die spezielle Überschrift oder der Abschnitt auf der MDN-Web-Docs-Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unhilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das `needs info` Label auf das Issue setzen. Setzen Sie die Triagierung des Issues erst fort, nachdem diese Details bereitgestellt wurden (nachdem Sie das `needs info` Label entfernen können). Es ist in Ordnung, bis zu einer Woche auf eine Antwort vom Autor zu warten.

#### Setzen Sie ein Prioritätslabel

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Schwere des Problems, um den Menschen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Problem: Diese Art von Problem muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website erscheint. Diese Art von Problem könnte den Ruf von MDN ernsthaft schädigen und/oder Benutzer gefährden. Beispiele für dieses Problem sind ein falsches Code-Snippet, das bei Verwendung in der Produktion ein schwerwiegendes Sicherheitsproblem und unerwünschte Inhalte wie Malware, Obszönitäten, Pornografie, Hassrede oder Links zu solchen Inhalten verursachen könnte.
  - Label: `p0` (wird sofort behandelt)

- Schwerwiegendes Problem: Diese Art von Problem könnte die Nützlichkeit einer Seite schwerwiegend beeinträchtigen. Zum Beispiel eine signifikanter Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine erhebliche Menge schlecht geschriebener und schwer verständlicher Prosa oder eine große Anzahl kaputter Links.
  - Labels: `p1` (wird bald behandelt) und `p2` (wird bald behandelt, aber höher priorisierte Punkte haben Vorrang)

- Geringfügiges Problem: Dies ist eine Art von Verbesserungsproblem, das den vorhandenen Inhalt verbessern kann, aber nicht das Lernen betrifft oder nur einen geringen Einfluss auf das Lernen hat. Da diese Art von Problemen nicht aktiv geplant werden, wird ihre Behebung von Beitragenden begrüßt und sehr geschätzt. Die Behebung einiger dieser Probleme kann auch den erforderlichen Übungsraum für Anfängerinnen bieten, die sich erst mit dem Beitragsprozess vertraut machen. Beispiele sind Tippfehler, schlechte Grammatik, ein kaputter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebene Prosa oder ein Code-Snippet, das nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Problem behoben wird)

Generell sollten kritische Probleme sofort behoben werden und werden am ehesten vom MDN-Personal und Kollegen behandelt. Wenn nicht anders angegeben, ist `p3` das Standardprioritätslevel.

#### Fügen Sie hilfreiche Informationen hinzu

Fügen Sie nach Möglichkeit Informationen hinzu, die Beitragenden helfen können, das Problem zu beheben. Die Informationen können in Form von Schritten, allgemeinem Ansatz, Links zu anderen ähnlichen behobenen Problemen oder Lesematerialien sein. Ein gut ausgelegter Plan oder Schritte sind besonders bei Problemen erforderlich, die mit `good first issue` gekennzeichnet sind und neuen Beitragenden schnell helfen können, sich einzuarbeiten. Sie können diese Aufgabe auf 5-10 Minuten time-boxen.

Zum Beispiel können Sie als Triagierer folgende Informationen zu dem von Ihnen triagierten Issue hinzufügen:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Wenden Sie Typ-, Ziel- und Aufwand-Labels an

Setzen Sie als Nächstes nach Möglichkeit die folgenden Labels:

- Ein Label, um den "Problemtyp" anzuzeigen, der behoben werden muss, sofern zutreffend:
  - `broken link external`: Das Problem meldet einen kaputten Link zu einer externen Seite.
  - `document not written`: Das Problem meldet ein notwendiges Dokument, das noch nicht geschrieben wurde, normalerweise weil ein Link darauf verweist. Beachten Sie, dass wir ein [Web Docs Backlog](https://openwebdocs.github.io/web-docs-backlog/all/) Projekt haben, das bereits viele ungeschriebene Referenzseiten verfolgt. Wenn das Problem also eines dieser ist, können Sie [das Problem schließen](#schließen_eines_problems_als_duplikat) mit `closed: duplicate` und auf das Backlogging-Punkt.
  - `screenshot`: Das Problem meldet einen fehlenden oder veralteten Screenshot.
  - `baseline`: Das Problem meldet ein inkorrektes {{Glossary("Baseline/Compatibility", "Baseline")}} Banner. Beachten Sie, dass die im Baseline-Banner angezeigten Daten nicht aus dem `mdn/content` Repository kommen; stattdessen wird es durch eine Kombination von Eingaben von [browser compatibility data](https://github.com/mdn/browser-compat-data), [frontend code](https://github.com/mdn/fred) und [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) bestimmt. Sie sollten fast immer entweder das Problem schließen, um anzuzeigen, dass es wie beabsichtigt funktioniert, oder es an das entsprechende Repository übertragen.

- Ein "Ziel"-Label, um anzugeben, was die Korrektur zu erreichen versucht:
  - `goal: accuracy`: Das Problem meldet inkorrekte oder ungenaue Informationen. Wenn der Inhalt zum Zeitpunkt des Schreibens korrekt war, verwenden Sie stattdessen `goal: up-to-date`.
  - `goal: clarity`: Das Problem meldet irreführende oder unklare Informationen (aber technisch korrekt).
  - `goal: completeness`: Das Problem meldet fehlende Informationen, normalerweise wichtige Vorbehalte oder Erklärungen.
  - `goal: consistency`: Das Problem meldet inkonsistente Informationen. Verwenden Sie dieses Label nur bei redaktioneller Konsistenz, wie etwa Codebeispiele und deren Beschreibungen; wenn mindestens ein Ort technisch inkorrekt ist, verwenden Sie das Label `goal: accuracy` stattdessen.
  - `goal: up-to-date`: Das Problem meldet veraltete Informationen, normalerweise aufgrund von Änderungen in der Webplattform.
  - `goal: best practices`: Das Problem meldet Musterverletzungen in Codebeispielen oder Inhalten.
  - `goal: discoverability`: Das Problem meldet fehlende Links zu verwandtem Inhalt oder fehlenden Schlüsselwörtern, die Suchmaschinen helfen würden, die Seite zu finden.

- Ein "Aufwand"-Label, um Beitragende dabei zu unterstützen, Issues zu finden, die dem Zeit- und Arbeitsaufwand entsprechen, den sie aufwenden können. Verwenden Sie Ihre beste Einschätzung, um das passende Label aufzubringen, da der tatsächliche Aufwand letztendlich von der Qualifikation und Erfahrung des Beitragenden abhängt. In der Praxis kann der eingesetzte Aufwand größer sein als die tatsächlich geleistete Arbeit (z. B. wenn die Arbeit erheblichen vorausgehenden Forschungen erfordert) oder umgekehrt (z. B. wenn sie nur eine einzelne Änderung betrifft, die viele Seiten berührt).
  - `effort: small`: Die Korrektur würde wahrscheinlich unter 50 Zeilen (entsprechend einer `xs` oder `s`-großen PR) umfassen.
  - `effort: medium`: Die Korrektur würde zwischen 50 und 1000 Zeilen (entsprechend einer `m` oder `l`-großen PR) umfassen.
  - `effort: large`: Die Korrektur würde wahrscheinlich über 1000 Zeilen (entsprechend einer `xl`-großen PR) umfassen.

- Ein "Beitrag akzeptieren"-Label, das zeigt, dass wir PRs aus der Community einladen:
  - `good first issue`: Fügen Sie dieses Label hinzu, wenn die Korrektur des Problems wirklich einfach ist und somit eine gute Übung für einen Neuling darstellen würde, der sich mit dem Beitragsprozess vertraut macht. Wenden Sie dieses Label nur an, wenn _alle_ folgenden Punkte zutreffen:
    - Es gibt Anleitungen, entweder vom Autor oder dem Triagierer, darüber, was _genau_ geschrieben werden muss (vorzugsweise wortwörtlicher Text oder eine Schritt-für-Schritt-Anleitung).
    - Die Korrektur richtet sich auf eine einzelne Seite (damit der Beitragende sie leicht über die Web-Oberfläche beheben kann).
    - Die Korrektur beinhaltet nicht das Schreiben von wesentlich neuem Inhalt oder Code, der möglicherweise ein tieferes technisches Verständnis erfordern könnte.
  - `help wanted`: Setzen Sie dieses Label, wenn das Problem Hilfe von jemandem erfordert, der mit dem Thema vertraut ist. Dieses Label wird häufig verwendet, und einige Beitragende suchen danach, um in Open-Source-Projekten in ihren Fachgebieten Themen zu bearbeiten.
  - `accepting PR`: Fügen Sie dieses neutrale Label hinzu, wenn das Problem nicht so einfach wie ein `good first issue` ist, aber auch nicht so komplex oder nischenspezifisch, um ein `help wanted` Label zu erfordern.

  Wenn ein Problem keines dieser Labels hat, zeigt es grundsätzlich an, dass Community-Beiträge für das Problem nicht erwünscht sind. Dies kann der Fall sein, wenn weitere Diskussionen erforderlich sind, jemand mit MDN-Redaktionskonventionen vertraut sein muss, um es zu übernehmen, oder ein Teammitglied beabsichtigt, daran zu arbeiten. Beitragende können trotzdem an diesen Issues arbeiten, wenn sie mit dem Prozess vertraut sind.

- Issue-Status: Wenn ein Problem kein Label hat, das zeigt, dass wir PRs akzeptieren oder dass daran gearbeitet wird, fügen Sie eines der folgenden Labels hinzu, um anzuzeigen, auf was es blockiert ist:
  - `needs BCD update`: Setzen Sie dieses Label, wenn das Problem eine Dokumentation für neue Funktionen oder verhaltensbezogene Änderungen betrifft, die zuerst Daten darüber benötigen, wann sie implementiert wurden.
  - `needs content update`: Setzen Sie dieses Label, wenn der Fix in einem anderen Repository eine äquivalente Korrektur im `mdn/content` Repository erfordert.
  - `needs decision`: Setzen Sie dieses Label, wenn das Problem einen Teamkonsens über den Ansatz erfordert. Der Konsens kann durch eine Diskussion oder ein synchrones internes Meeting erreicht werden.
  - `needs example update`: Setzen Sie dieses Label, wenn das Problem die Synchronisierung von Codebeispielen in einem anderen Repository betrifft. Wenn das Repository extern ist, muss es wahrscheinlich zuerst in ein internes [Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) konvertiert oder unter MDN übertragen werden.
  - `needs info`: Wie [oben erwähnt](#überprüfen_sie_das_problem_auf_vollständigkeit_der_informationen), setzen Sie dieses Label, wenn Informationen angefordert werden, entweder vom Issue-Autor, vom Autor des jeweiligen Inhalts oder von jemand anderem, um mit dem Issue fortfahren zu können.
  - `on hold`: Ein generisches Label, um anzugeben, dass das Issue noch nicht bearbeitet werden soll.
  - `waiting for implementations`: Setzen Sie dieses Label, wenn das Problem eine Funktion betrifft, die noch nicht in den Browsern implementiert wurde und sich daher nicht für unsere [Dokumentationskriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) qualifiziert.

Nachdem Sie das Problem analysiert und validiert, die geeigneten Labels (Typ, Ziel, Aufwand, offen für die Community) angewendet haben, ist der Triagierungsprozess abgeschlossen und Sie können das `needs triage` Label entfernen.

### Schließen eines Problems als nicht geplant

Wenn ein Problem keine umsetzbare Aufgabe darstellt, sollten Sie in Erwägung ziehen, das Problem als nicht geplant zu schließen. Klicken Sie auf das Dropdown-Menü neben der **Schließen**-Schaltfläche und wählen Sie **Als nicht geplant schließen** aus. Schreiben Sie einen Kommentar, der den Grund für das Schließen des Issues erklärt. Fügen Sie auch eines der folgenden Labels hinzu:

- `closed: browser bug`: Das Issue meldet unerwartetes Verhalten im Reporter's Code oder im MDN Code, aber die Ursache ist ein Browser-Bug. Das Problem ist auch nicht bedeutend genug, um eine BCD-Notiz zu rechtfertigen.
- `closed: question`: Das Problem beruht auf dem Fehler oder Missverständnis des Reporters, und der Inhalt ist bereits korrekt und klar. Sie sollten jedoch den Bericht trotzdem anerkennen und in Erwägung ziehen, ob der Inhalt weiter präzisiert werden kann, um ähnliche Fragen in der Zukunft zu vermeiden.
- `closed: wontfix`: Das Problem meldet ein gültiges Problem, aber MDN entscheidet sich, es nicht zu beheben. Häufige Gründe sind, dass die Arbeit außerhalb des Geltungsbereichs liegt, der erforderliche Aufwand den Nutzen überwiegt oder der Inhalt und der Code wie vorgesehen funktionieren.

### Schließen eines Problems als Duplikat

Wenn ein Issue ein Problem meldet, das bereits anderswo verfolgt wird, können Sie das Issue schließen. Sie müssen keine exakten Duplikate sein; wenn das Problem einem bestehenden Issue ähnlich genug ist, können sie als ein einziges Problem zusammengeführt werden, das zusammen behoben wird.

Wenn ein GitHub-Issue dasselbe Problem verfolgt, klicken Sie auf das Dropdown-Menü neben der **Schließen**-Schaltfläche, wählen Sie **Als Duplikat schließen** und fügen Sie die URL des anderen Issues ein. Wenn die Duplizierung offensichtlich ist, ist kein Kommentar erforderlich; andernfalls posten Sie einen Kommentar, der erklärt, warum die Probleme Duplikate sind.

Wenn das Problem verfolgt wird, aber nicht über ein GitHub-Issue (wie [Web Docs Backlog](https://openwebdocs.github.io/web-docs-backlog/all/)), können Sie [das Issue als nicht geplant schließen](#schließen_eines_problems_als_nicht_geplant), einen Kommentar posten und das `closed: duplicate` Label hinzufügen. Dieses Label ist optional für Issues, die über die **Als Duplikat schließen**-Option geschlossen werden, hilft jedoch bei der späteren Suche nach duplizierten Issues.
