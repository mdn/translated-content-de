---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: da7287ff61b6ea4db7f9a5e07be11263b525b7d0
---

Als Mitwirkende:r können Sie Issues [melden](#richtlinien_zum_melden_eines_issues) und an ihnen [arbeiten](#richtlinien_für_die_arbeit_an_einem_issue).
Nachdem Sie ein Issue gemeldet haben, wird es triagiert. Das [Triagieren](#richtlinien_für_das_triagieren_von_issues) von Issues wird in der Regel von Personen mit der Rolle eines Maintainers oder Owners durchgeführt.

## Allgemeine Richtlinien für die Teilnahme

Achten Sie beim Melden eines Issues oder bei der Teilnahme an einer Unterhaltung in einem Issue stets darauf, dass Ihre Beiträge zum allgemeinen Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare in einem Issue konstruktiv und themenbezogen sind und nicht nur Rauschen erzeugen.

Gehen Sie wie folgt vor:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu erstellen.
- Wenn es viele Möglichkeiten gibt, ein Problem zu beheben, überlegen Sie, ob Sie es mit den Mitarbeitenden/der Community [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen.
  Nutzen Sie Diskussionen, um unterschiedliche Perspektiven einzuholen und sich auf ein gemeinsames Vorgehen zu einigen. Dies trägt dazu bei, Issues fokussiert und produktiv zu halten.
- Versuchen Sie nach dem Erstellen eines Issues, das Problem selbst zu beheben. Es gibt einen Leitfaden zu [Pull-Request-Einreichungen und Reviews](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragsprozess wissen müssen.

Vermeiden Sie Folgendes:

- Issues zu verkomplizieren, indem Sie versuchen, mehrere Themen zu diskutieren oder themenfremde Kommentare abgeben.
- Viele Issues mit vagen Fragen zu eröffnen.
- Fragen zu stellen, ohne zuvor selbst versucht zu haben, das Problem zu lösen.

Wenn Sie neue Dokumentation oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, lesen Sie [Vorschlagen neuer Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) werden zur Nachverfolgung von Fehlern verwendet. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung zusammenhängender umsetzbarer Aufgaben sein und ein klares Ergebnis haben.

### Vor dem Erstellen eines Issues

Ermitteln Sie zunächst anhand der Art des entdeckten Problems das passende [MDN-GitHub-Repository](/de/docs/MDN/Community/Our_repositories), in dem Sie das Issue erstellen sollten, damit die richtigen Personen es bearbeiten können. Prüfen Sie dann vor dem Erstellen eines Issues, ob es nicht bereits gemeldet wurde.

### Melden eines Issues

Hier sind einige Hinweise zum Eröffnen von Issues:

- Wählen Sie die passende Kategorie, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die Vorlage [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im Repository `mdn/content`.
- Geben Sie beim Melden des Issues ausreichende Informationen an:
  - Der **Issue-Titel** muss die _erforderliche Maßnahme_ prägnant vermitteln.
  - Die **Issue-Beschreibung** muss den Fehler klar beschreiben und, wenn möglich, die zur Behebung des Issues erforderliche Maßnahme nennen.

    Bei komplexen Issues, die mehrere Schritte zur Behebung erfordern, unterteilen Sie die Arbeit mithilfe einer [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in kleinere Aufgaben. Aktualisieren Sie den Status einer Aufgabe in der Issue-Beschreibung, anstatt das Issue zu kommentieren. Dies hilft anderen Personen, die andernfalls durch die Kommentare im Issue scrollen müssten, um den Status verschiedener Aufgaben zu ermitteln. Kommentare in einem Issue sollten auf Details oder Kontext beschränkt sein, die bei der Behebung des Issues helfen.

- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Unterhaltung in [MDNs Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Sie sind sich nicht sicher, ob das Issue gültig ist oder welche Maßnahme erforderlich ist.
  - Für die Behebung des Issues besteht kein klarer Konsens.
- Bei kleineren Fehlern können Sie [die Änderungen selbst vornehmen](#issues_selbst_beheben) und einen Pull Request einreichen.

Wenn die von Ihnen im Issue bereitgestellten Informationen unvollständig sind, werden Sie möglicherweise während des [Issue-Triage-Prozesses](#das_issue_auf_vollständigkeit_der_informationen_prüfen) gebeten, weitere Details anzugeben (achten Sie auf das Label `needs info`).

### Erstellen eines Aufgabenlisten-Issues

Wenn das von Ihnen eröffnete Issue nicht der Meldung eines Fehlers dient, sondern der Durchführung einer Reihe von Aufgaben, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
Erläutern Sie in der Beschreibung den Kontext oder Grund für die Durchführung der Aufgaben.
Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste aufführen.

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

## Richtlinien für die Arbeit an einem Issue

Denken Sie daran: Wenn Sie ein Issue übernehmen, wird erwartet, dass die Arbeit zeitnah abgeschlossen wird.
Wenn Sie die Arbeit an einem übernommenen Issue nicht voranbringen können, fügen Sie bitte einen Kommentar hinzu, damit Maintainer informiert sind und das Issue von einer anderen mitwirkenden Person übernommen werden kann.

Dies sind die allgemeinen Schritte für die Arbeit an einem Issue:

1. **Ein Issue finden:** Wenn Sie etwas beitragen möchten, suchen Sie nach Issues mit einem Prioritätslabel, `p2` oder `p3` (siehe die Bedeutung dieser [Prioritätslabels](#ein_prioritätslabel_setzen)). Alternativ können Sie nach Issues mit [einem dieser Labels suchen, die anzeigen, dass wir PRs aus der Community einladen](#apply_type_goal_and_effort_labels): `good first issue`, `accepting PR` und `help wanted`. Die meisten Repositories haben Issues mit diesen Labels. Sie können gerne ein Issue durchsuchen und auswählen, das zu Ihren Fähigkeiten passt.

   Ein weiterer hilfreicher Ort, um nach Issues zu suchen, ist das [MDN Contributor Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste anhand der Themen filtern, die Sie interessieren (Spalte `Labels`). Wenn Sie neugierig sind, lesen Sie die Bedeutung der [Labels](#apply_type_goal_and_effort_labels), die während des Issue-Triage-Prozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` zeigt an, dass das MDN-Team das Issue noch nicht überprüft hat und Sie nicht mit der Arbeit daran beginnen sollten.

2. **Prüfen, dass niemand bereits am Issue arbeitet:**

   Prüfen Sie vor Beginn der Arbeit an einem Issue zunächst, dass dem Issue niemand zugewiesen ist (das Feld _Assignees_ sollte „Unassigned“ lauten).

   Prüfen Sie dann, dass keine verknüpften [Pull Requests](/de/docs/MDN/Community/Pull_requests) vorhanden sind, da diese darauf hinweisen können, dass eine andere mitwirkende Person das Issue übernommen und mit der Arbeit daran begonnen hat.

3. **Recherche durchführen:**

   Die meisten Issues erfordern einige Untersuchungen, bevor die Arbeit beginnen kann.
   - Klären Sie den Umfang der zu erledigenden Arbeit.
     Wenn das Issue nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, können Sie die Person, die das Issue eröffnet hat, gerne erwähnen (mit @username) und um weitere klärende Informationen bitten.
   - Sie können auch in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) um Rat fragen.

4. **Das Issue übernehmen:**

   Sie können ein nicht zugewiesenes und nicht übernommenes Issue übernehmen, indem Sie diese Schritte befolgen:
   1. Forken Sie das Repository und erstellen Sie Ihren Arbeitsbranch.
   2. Beheben Sie das Issue und eröffnen Sie dann einen [Pull Request (PR)](/de/docs/MDN/Community/Pull_requests) im Repository.
   3. Fügen Sie in der PR-Beschreibung den Text `Fixes #<issue_number>` ein (wenn der PR das Issue nur teilweise behebt, fügen Sie den Text `Related to #<issue_number>` ein).

      Durch das Hinzufügen dieses Texts wird ein Querverweis zwischen dem Issue und dem PR erstellt und das Issue implizit als von Ihnen übernommen markiert.

      > [!NOTE]
      > Wenn Sie über die erforderlichen Berechtigungen verfügen, sollten Sie sich das Issue auch _explizit_ [selbst zuweisen](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

   Abhängig von den Dateien, die Sie im Pull Request aktualisiert haben, wird Ihrem Pull Request automatisch ein:e Reviewer:in zugewiesen. (Teams nach Themenbereich sind in der Datei [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) definiert.)

   > [!WARNING]
   > Wenn Sie nach dem Eröffnen des Pull Requests feststellen, dass Sie keine Zeit mehr haben, Änderungen vorzunehmen oder Review-Feedback einzuarbeiten, informieren Sie das Team so schnell wie möglich mit einem Kommentar im Pull Request.
   > Dies hilft dem Team, eine andere interessierte mitwirkende Person zuzuweisen, um die Arbeit am Pull Request abzuschließen und das verknüpfte Issue zu schließen.

5. **Das Issue als abgeschlossen schließen:**

   Wenn Sie den Pull Request mit `Fixes #<issue>` in der Beschreibung eröffnet haben, wird das Issue automatisch geschlossen, wenn der PR gemergt wird. Andernfalls können Sie dem Issue einen Kommentar hinzufügen, der auf einen oder mehrere Pull Requests verweist, die es beheben, und ein:e Maintainer:in wird das Issue als abgeschlossen schließen.

### Issues selbst beheben

Wenn Sie einen Fehler entdecken — ob es sich um ein Problem mit dem Erscheinungsbild und der Bedienung der Website oder einen Fehler in der Dokumentation handelt — können Sie versuchen, ihn selbst in einem [Pull Request](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (etwa ein Tippfehler oder eine geringfügige Satzverbesserung) oder eine schnelle Behebung erfordert, können Sie einen Pull Request mit den entsprechenden Änderungen einreichen.

Für jede andere Art von Fehler beginnen Sie mit dem [Eröffnen eines Issues](#richtlinien_zum_melden_eines_issues).
Fügen Sie einen Kommentar über Ihre Absicht hinzu, an dem Issue zu arbeiten, und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder die Schritte zu dessen Behebung.

> [!NOTE]
> Ihre Zeit und Mühe könnten verschwendet sein, wenn Sie einen Pull Request eröffnen, ohne zuvor ein Issue zu eröffnen.
> Warten Sie, bis das Issue triagiert wurde, damit das MDN Web Docs-Team überprüfen kann, ob das Issue legitim ist, und Ihre vorgeschlagene Lösung genehmigen kann.

Versuchen Sie mithilfe der [Richtlinien für die Arbeit an einem Issue](#richtlinien_für_die_arbeit_an_einem_issue), das Problem zu beheben, indem Sie die passende Quelle aktualisieren, beispielsweise:

- Die **Inhalte** von MDN Web Docs (auf Englisch) im Repository [mdn/content](https://github.com/mdn/content)
- Die **übersetzten Inhalte** von MDN Web Docs im Repository [mdn/translated-content](https://github.com/mdn/translated-content)
- Das **Frontend** von MDN Web Docs im Repository [mdn/fred](https://github.com/mdn/fred)

Jedes Repository enthält hilfreiche Informationen, die Sie bei Ihren Beiträgen unterstützen.
Weitere Informationen finden Sie unter [unseren wichtigsten GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien für das Triagieren von Issues

Wenn Sie Maintainer oder Owner in der GitHub-Organisation von MDN Web Docs sind, sind Sie für das Triagieren von Issues in einem oder mehreren MDN Web Docs-Repositories verantwortlich.

Der gesamte Triage-Prozess umfasst einige [allgemeine](#allgemeine_triage-aufgaben) sowie einige [Issue-spezifische Aufgaben](#issue-spezifische_triage-aufgaben).

### Allgemeine Triage-Aufgaben

- Wenn ein Issue eröffnet wird, wird das Label `needs triage` automatisch für das Issue gesetzt. Sie können nach diesem Label suchen, um Issues zu finden, die [triagiert werden müssen](#issue-spezifische_triage-aufgaben). Mitwirkende oder andere Personen sollten nicht am Issue arbeiten, bis es triagiert wurde. (Personen, die triagieren, sollten daran denken, das Label `needs triage` nach dem Triagieren des Issues zu entfernen.)

- Im [Repository mdn/content](https://github.com/mdn/content/issues) wird automatisch zusätzlich ein Label `Content:`, etwa `Content:CSS` oder `Content:WebAPI`, für das Issue gesetzt. Es wird anhand der im Issue genannten MDN-URL gesetzt. Sie können das inhaltsspezifische Label verwenden, um in Ihrem spezifischen Themenbereich nach zu triagierenden Issues zu suchen.

- Wenn ein Issue eine aktive, nicht englischsprachige `en-US`-Locale betrifft, setzen Sie das passende Label, beispielsweise `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Locales werden diese Issues übernehmen und triagieren.

- Sie müssen Issues nicht ständig aktiv triagieren. Planen Sie regelmäßig Zeit ein, beispielsweise jede Woche 30 Minuten, um Issues in Ihrem Verantwortungsbereich zu triagieren. Das Triagieren muss nicht als Teil eines synchronen Meetings oder zur gleichen Zeit wie bei allen anderen erfolgen, sollte jedoch regelmäßig durchgeführt werden, damit der Rückstand nicht triagierter Fehler nicht zu groß wird.

- Überprüfen Sie zusätzlich zum wöchentlichen Triagieren eingehender Issues die Liste alter Fehler, um festzustellen, ob welche festgefahren sind, geschlossen werden müssen oder nicht mehr relevant sind. Das Label `idle` wird automatisch für Issues gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Prüfen Sie weiterhin offene zugewiesene Issues, um festzustellen, ob die zugewiesene Person Fortschritte macht. Wenn nach einer Woche seit der Zuweisung kein Fortschritt erkennbar ist, fragen Sie, ob sie noch Zeit hat, an dem Issue zu arbeiten. Wenn nach einer weiteren Woche keine Fortschritte erzielt wurden, heben Sie die Zuweisung auf und hinterlassen Sie einen Kommentar, der darauf hinweist, dass Sie das Issue anderen interessierten Mitwirkenden zur Verfügung stellen.
  - Wenn ein Pull Request zur Behebung des Issues eröffnet wurde, aber eine Woche lang nicht überprüft wurde, erinnern Sie die prüfende Person freundlich daran und fragen Sie, ob sie ihn bearbeiten kann.
  - Wenn ein Pull Request zur Behebung des Issues nach einer Woche auf die Berücksichtigung von Review-Kommentaren wartet, fragen Sie die Autorin oder den Autor, ob sie oder er auf das Review reagieren kann. Wenn eine weitere Woche vergeht, beheben Sie entweder die Review-Kommentare selbst, falls Sie Zeit haben, oder schließen Sie den Pull Request und heben Sie die Zuweisung des zugehörigen Issues auf.

### Issue-spezifische Triage-Aufgaben

Dies sind die Richtlinien, die beim Triagieren jedes Issues zu befolgen sind.

#### Prüfen, ob das Issue gültig ist

Beachten Sie bei der Prüfung der Gültigkeit eines Issues unter anderem Folgendes:

- Prüfen Sie, ob das gemeldete Issue gültig ist.
- Bewerten Sie, ob die Behebung den Inhalt für Leser:innen und die Website verbessert.
- Bewerten Sie, ob die Auswirkung der Behebung gering oder websiteweit sein wird.
- Bewerten Sie, ob für die Behebung des Issues zunächst eine Diskussion erforderlich ist; verweisen Sie die Autorin oder den Autor in diesem Fall darauf, stattdessen eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Prüfen Sie, ob das Issue unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht. Prüfen Sie beispielsweise, ob Vorschläge zum Hinzufügen von Links unserer [Richtlinie zu externen Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) entsprechen.
- Prüfen Sie, ob das Issue ein Duplikat eines bestehenden Issues ist. Wenn dies der Fall ist, können Sie [das Issue als Duplikat schließen](#ein_issue_als_duplikat_schließen).

#### Das Issue auf Vollständigkeit der Informationen prüfen

Prüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Arbeit am Fehler beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder URL einer Beispielseite von MDN Web Docs, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder der Abschnitt auf der MDN Web Docs-Seite, in dem das Problem gefunden wurde
- Eine klare Beschreibung der falschen, nicht hilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen fehlt, sollten Sie die Autorin oder den Autor des Issues bitten, diese Details bereitzustellen, und dem Issue das Label `needs info` hinzufügen. Setzen Sie das Triagieren des Issues erst fort, nachdem diese Details bereitgestellt wurden (danach können Sie das Label `needs info` entfernen). Es ist in Ordnung, bis zu einer Woche auf eine Antwort der Autorin oder des Autors zu warten.

#### Ein Prioritätslabel setzen

Setzen Sie für jeden Fehler ein Prioritätslabel basierend auf der Schwere des Issues, um Personen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Diese Art von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website erscheint. Diese Art von Issue könnte MDNs Ruf schwer schädigen und/oder Benutzer:innen schaden. Beispiele für ein solches Issue sind ein falsches Code-Snippet, das bei Verwendung in der Produktion ein schwerwiegendes Sicherheitsproblem verursachen könnte, sowie unerwünschte Inhalte wie Malware, Obszönitäten, Pornografie, Hassrede oder Links zu solchen Inhalten.
  - Label: `p0` (wird sofort bearbeitet)

- Schwerwiegendes Issue: Diese Art von Issue könnte die Nützlichkeit einer Seite erheblich beeinträchtigen. Beispielsweise eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine erhebliche Menge schlecht geschriebener und schwer verständlicher Prosa oder eine große Anzahl defekter Links.
  - Labels: `p1` (wird zeitnah bearbeitet) und `p2` (wird zeitnah bearbeitet, jedoch haben Elemente mit höherer Priorität Vorrang)

- Geringfügiges Issue: Dies ist eine Art Verbesserungs-Issue, die bestehende Inhalte verbessern kann, jedoch das Lernen nicht oder nur geringfügig beeinflusst. Da diese Arten von Issues nicht aktiv geplant werden, ist Hilfe von Mitwirkenden zur Behebung dieser Issues willkommen und sehr geschätzt. Die Behebung einiger dieser Issues kann auch die notwendige Übung für neue Mitwirkende bieten, die sich gerade mit dem Beitragsprozess vertraut machen. Beispiele sind Tippfehler, schlechte Grammatik, ein defekter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebener Prosa oder ein Code-Snippet, das nicht funktioniert.
  - Labels: `p3` (keine Angabe, wann das Issue bearbeitet wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich von MDN-Mitarbeitenden und Peers bearbeitet. Wenn nicht anders angegeben, ist `p3` die Standardprioritätsstufe.

#### Hilfreiche Informationen hinzufügen

Fügen Sie nach Möglichkeit Informationen hinzu, die Mitwirkenden bei der Behebung des Issues helfen können. Die Informationen können in Form von Schritten, einem allgemeinen Ansatz, Links zu anderen ähnlichen behobenen Issues oder Lernressourcen vorliegen. Ein gut strukturierter Plan oder Schritte sind insbesondere bei Issues mit dem Label `good first issue` erforderlich und können neue Mitwirkende schnell einarbeiten. Sie können diese Aufgabe auf 5–10 Minuten begrenzen.

Beispielsweise können Sie als triagierende Person dem von Ihnen triagierten Issue die folgenden Informationen hinzufügen:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Typ-, Ziel- und Aufwandslabels anwenden

Setzen Sie als Nächstes, wenn möglich, die folgenden Labels:

- Ein Label, das den „Problemtyp“ angibt, der behoben werden muss, falls zutreffend:
  - `broken link external`: Das Issue meldet einen defekten Link zu einer externen Seite.
  - `document not written`: Das Issue meldet ein notwendiges Dokument, das noch nicht geschrieben wurde, üblicherweise weil ein Link darauf verweist. Beachten Sie, dass wir bereits ein Projekt [Web Docs Backlog](https://openwebdocs.github.io/web-docs-backlog/all/) haben, das viele noch nicht geschriebene Referenzseiten erfasst. Wenn das Issue also eine dieser Seiten betrifft, können Sie [das Issue als Duplikat schließen](#ein_issue_als_duplikat_schließen) mit `closed: duplicate` und auf den Backlog verweisen.
  - `screenshot`: Das Issue meldet einen fehlenden oder veralteten Screenshot.
  - `baseline`: Das Issue meldet ein falsches {{Glossary("Baseline/Compatibility", "Baseline")}}-Banner. Beachten Sie, dass die im Baseline-Banner angezeigten Daten nicht aus dem Repository `mdn/content` stammen; stattdessen werden sie durch eine Kombination von Eingaben aus [browser compat data](https://github.com/mdn/browser-compat-data), [Front-End-Code](https://github.com/mdn/fred) und [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) bestimmt. Sie sollten das Issue fast immer entweder schließen, um anzugeben, dass es wie vorgesehen funktioniert, oder es in das passende Repository übertragen.

- Ein „Ziel“-Label, das angibt, was durch die Behebung erreicht werden soll:
  - `goal: accuracy`: Das Issue meldet falsche oder ungenaue Informationen. Wenn der Inhalt zum Zeitpunkt der Erstellung korrekt war, verwenden Sie stattdessen `goal: up-to-date`.
  - `goal: clarity`: Das Issue meldet irreführende oder unklare Informationen (die jedoch technisch korrekt sind).
  - `goal: completeness`: Das Issue meldet fehlende Informationen, üblicherweise wichtige Vorbehalte oder Erklärungen.
  - `goal: consistency`: Das Issue meldet inkonsistente Informationen. Verwenden Sie dieses Label nur für redaktionelle Konsistenz, beispielsweise Codebeispiele und deren Beschreibungen; wenn mindestens eine Stelle technisch falsch ist, verwenden Sie stattdessen das Label `goal: accuracy`.
  - `goal: up-to-date`: Das Issue meldet veraltete Informationen, üblicherweise aufgrund von Änderungen an der Webplattform.
  - `goal: best practices`: Das Issue meldet Antimuster, die in Codebeispielen oder Inhalten verwendet werden.
  - `goal: discoverability`: Das Issue meldet fehlende Links zu verwandten Inhalten oder fehlende Schlüsselwörter, die Suchmaschinen helfen würden, die Seite zu finden.

- Ein „Aufwand“-Label, das Mitwirkenden hilft, Issues zu finden, die ihrem verfügbaren Zeitaufwand und Einsatz entsprechen. Verwenden Sie Ihre beste Einschätzung, um das passende Label anzuwenden, da der tatsächliche Aufwand letztlich von den Fähigkeiten und der Erfahrung der mitwirkenden Person abhängt. In der Praxis kann der geleistete Aufwand größer sein als der Umfang der gelieferten Arbeit (z. B. wenn die Arbeit umfangreiche vorherige Recherche erfordert) oder umgekehrt (z. B. wenn nur eine einzige Änderung viele Seiten betrifft).
  - `effort: small`: Die Behebung würde voraussichtlich weniger als 50 Zeilen umfassen (entspricht einem PR der Größe `xs` oder `s`).
  - `effort: medium`: Die Behebung würde voraussichtlich zwischen 50 und 1000 Zeilen umfassen (entspricht einem PR der Größe `m` oder `l`).
  - `effort: large`: Die Behebung würde voraussichtlich mehr als 1000 Zeilen umfassen (entspricht einem PR der Größe `xl`).

- Ein Label vom Typ „Beiträge willkommen“, das angibt, dass wir PRs aus der Community einladen:
  - `good first issue`: Fügen Sie dieses Label hinzu, wenn die Behebung des Issues wirklich einfach ist und gute Übung für eine neue Person bieten würde, die sich mit dem Beitragsprozess vertraut macht. Wenden Sie dieses Label nur an, wenn _alle_ folgenden Bedingungen zutreffen:
    - Es gibt Anweisungen, entweder von der Autorin beziehungsweise dem Autor oder von der triagierenden Person, dazu, was _genau_ geschrieben werden muss (vorzugsweise wortwörtlicher Text oder eine Schritt-für-Schritt-Anleitung).
    - Die Behebung betrifft eine einzige Seite (sodass die mitwirkende Person sie einfach über die Weboberfläche beheben kann).
    - Die Behebung umfasst nicht das Schreiben umfangreicher neuer Inhalte oder von Code, was ein tieferes technisches Verständnis erfordern könnte.
  - `help wanted`: Setzen Sie dieses Label, wenn das Issue Hilfe von jemandem erfordert, der sich mit dem Thema auskennt oder damit vertraut ist. Dies ist ein beliebtes Label, und einige Mitwirkende verwenden es, um in Open-Source-Projekten nach Issues zu suchen, an denen sie in ihren Bereichen der Vertrautheit oder Expertise arbeiten können.
  - `accepting PR`: Fügen Sie dieses neutrale Label hinzu, wenn das Issue nicht so unkompliziert wie ein `good first issue`, aber auch nicht so komplex oder spezialisiert ist, dass ein Label `help wanted` erforderlich wäre.

  Wenn ein Issue keines dieser Labels hat, zeigt dies im Allgemeinen an, dass Beiträge aus der Community für das Issue nicht erwünscht sind. Dies kann der Fall sein, wenn weitere Diskussionen erforderlich sind, die Arbeit von jemandem übernommen werden muss, der mit den redaktionellen Konventionen von MDN vertraut ist, oder ein Teammitglied beabsichtigt, daran zu arbeiten. Mitwirkende können dennoch an diesen Issues arbeiten, wenn sie mit dem Prozess ausreichend vertraut sind.

- Issue-Status: Wenn ein Issue kein Label hat, das zeigt, dass wir PRs akzeptieren oder dass die Arbeit daran läuft, fügen Sie eines der folgenden Labels hinzu, um anzugeben, wodurch es blockiert wird:
  - `needs BCD update`: Setzen Sie dieses Label, wenn das Issue Dokumentation für neue Funktionen oder Verhalten umfasst, für die zunächst Daten darüber benötigt werden, wann sie implementiert wurden.
  - `needs content update`: Setzen Sie dieses Label, wenn die Behebung eines Issues in einem anderen Repository eine entsprechende Behebung im Repository `mdn/content` erfordert.
  - `needs decision`: Setzen Sie dieses Label, wenn das Issue einen Teamkonsens über den Ansatz erfordert. Der Konsens kann durch eine Diskussion oder ein synchrones internes Meeting erzielt werden.
  - `needs example update`: Setzen Sie dieses Label, wenn das Issue die Synchronisierung von Codebeispielen in einem anderen Repository umfasst. Wenn das Repository extern ist, muss es wahrscheinlich zunächst in ein internes [Live Sample](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) umgewandelt oder unter MDN übertragen werden.
  - `needs info`: Wie [oben erwähnt](#das_issue_auf_vollständigkeit_der_informationen_prüfen), setzen Sie dieses Label, wenn Informationen angefordert werden, entweder von der Autorin oder dem Autor des Issues, von der Autorin oder dem Autor des betreffenden Inhalts oder von jemand anderem, um mit dem Issue fortzufahren.
  - `on hold`: Ein allgemeines Label, das angibt, dass noch nicht an dem Issue gearbeitet werden soll.
  - `waiting for implementations`: Setzen Sie dieses Label, wenn das Issue eine Funktion betrifft, die noch nicht in Browsern implementiert ist und daher nicht unsere [Dokumentationskriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) erfüllt.

Nachdem Sie das Issue analysiert und validiert sowie die passenden Labels angewendet haben (Typ, Ziel, Aufwand, für die Community offen), ist der Triage-Prozess abgeschlossen und Sie können das Label `needs triage` entfernen.

### Ein Issue als nicht geplant schließen

Wenn ein Issue keiner umsetzbaren Aufgabe zugeordnet werden kann, sollten Sie erwägen, das Issue als nicht geplant zu schließen. Klicken Sie auf das Dropdown-Menü neben der Schaltfläche **Close issue** und wählen Sie **Close as not planned**. Veröffentlichen Sie einen Kommentar, der den Grund für das Schließen des Issues erläutert. Fügen Sie außerdem eines der folgenden Labels hinzu:

- `closed: browser bug`: Das Issue meldet unerwartetes Verhalten im Code der meldenden Person oder im Code von MDN, die Ursache ist jedoch ein Browserfehler. Das Issue ist auch nicht bedeutend genug, um eine BCD-Anmerkung zu rechtfertigen.
- `closed: question`: Das Issue beruht auf einem Fehler oder Missverständnis der meldenden Person, und der Inhalt ist bereits korrekt und klar. Sie sollten die Meldung dennoch anerkennen und überlegen, ob der Inhalt weiter präzisiert werden kann, um ähnliche Fragen künftig zu verhindern.
- `closed: wontfix`: Das Issue meldet ein gültiges Problem, aber MDN entscheidet sich dagegen, es zu beheben. Häufige Gründe sind, dass die Arbeit außerhalb des Umfangs liegt, der erforderliche Aufwand den Nutzen überwiegt oder Inhalt und Code wie vorgesehen funktionieren.

### Ein Issue als Duplikat schließen

Wenn ein Issue ein Problem meldet, das bereits an anderer Stelle verfolgt wird, können Sie das Issue schließen. Die Issues müssen keine exakten Duplikate sein; wenn das Issue einem bestehenden Issue ausreichend ähnlich ist, können sie als ein einzelnes Issue zusammengeführt und gemeinsam behoben werden.

Wenn es ein GitHub-Issue gibt, das dasselbe Problem verfolgt, klicken Sie auf das Dropdown-Menü neben der Schaltfläche **Close issue**, wählen Sie **Close as duplicate** und fügen Sie die URL des anderen Issues ein. Wenn die Duplizierung offensichtlich ist, ist kein Kommentar erforderlich; andernfalls veröffentlichen Sie einen Kommentar, der erläutert, warum die Issues Duplikate sind.

Wenn das Problem verfolgt wird, aber nicht über ein GitHub-Issue (etwa über [web docs backlog](https://openwebdocs.github.io/web-docs-backlog/all/)), können Sie [das Issue als nicht geplant schließen](#ein_issue_als_nicht_geplant_schließen), einen Kommentar veröffentlichen und das Label `closed: duplicate` hinzufügen. Dieses Label ist bei Issues, die über die Option **Close as duplicate** geschlossen wurden, optional, hilft jedoch später bei der Suche nach duplizierten Issues.
