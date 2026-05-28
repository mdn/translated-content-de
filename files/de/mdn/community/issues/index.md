---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 7e96b93b5b540a0cddb52fef9ae05c9db3410d73
---

Als Mitwirkender können Sie [Issues melden](#leitlinien_zum_melden_eines_issues) und [bearbeiten](#leitlinien_zur_bearbeitung_eines_issues).
Nachdem Sie ein Issue gemeldet haben, wird es triagiert. Die [Triagierung](#leitlinien_zur_triagierung_von_issues) von Issues erfolgt in der Regel durch Personen, die die Rolle eines Maintainers oder Owners innehaben.

## Allgemeine Leitlinien für die Teilnahme

Wenn Sie ein Issue melden oder an einer Diskussion in einem Issue teilnehmen, achten Sie darauf, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare in einem Issue konstruktiv und themenbezogen sind und nicht nur Lärm erzeugen.

Folgendes tun:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu erstellen.
- Wenn es viele Möglichkeiten gibt, ein Problem zu lösen, überlegen Sie, ob Sie es mit dem Personal oder der Community [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Verwenden Sie Diskussionen, um verschiedene Standpunkte zu erhalten und einen vereinbarten Handlungsplan zu entwickeln. Dies hilft, Issues fokussiert und produktiv zu halten.
- Nachdem Sie ein Issue erstellt haben, versuchen Sie, das Problem selbst zu beheben. Es gibt einen Leitfaden zur [Abgabe und Überprüfung von Pull Requests](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragsprozess wissen müssen.

Folgendes vermeiden:

- Komplizieren von Issues durch das Versuchen, mehrere Themen zu diskutieren oder durch das Erstellen von nicht themenbezogenen Kommentaren.
- Erstellen von vielen Issues mit vagen Fragen.
- Stellen von Fragen, ohne zuerst zu versuchen, das Problem selbst zu lösen.

Wenn Sie neue Dokumentationen oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, siehe [Vorschlagen neuer Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Leitlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Issue melden

Zuerst, basierend auf dem von Ihnen entdeckten Problemtyp, identifizieren Sie das entsprechende [MDN GitHub-Repository](/de/docs/MDN/Community/Our_repositories), um das Issue zu erstellen, damit die richtigen Personen es bearbeiten können. Bevor Sie ein Issue erstellen, überprüfen Sie, ob es nicht bereits gemeldet wurde.

### Melden eines Issues

Hier sind einige Tipps zum Eröffnen von Issues:

- Wählen Sie die entsprechende Kategorie, um das Issue zu melden. Zum Beispiel, um einen Inhaltsfehler zu melden, verwenden Sie die [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) Vorlage im `mdn/content` Repository.
- Stellen Sie ausreichend Informationen zur Verfügung, während Sie das Issue melden:
  - Der **Thementitel** muss die _notwendige Aktion_ kurz und prägnant vermitteln.
  - Die **Problembeschreibung** muss den Fehler klar beschreiben und, wenn möglich, die erforderliche Aktion zur Lösung des Issues.

    Bei komplexen Issues, die mehrere Schritte zur Lösung erfordern, teilen Sie die Arbeit in kleinere Aufgaben mithilfe einer [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) auf. Aktualisieren Sie den Status einer Aufgabe in der Problembeschreibung anstelle von Kommentaren im Issue. Dies hilft anderen, die sonst durch Kommentare im Issue scrollen müssten, um den Status verschiedener Aufgaben zu bestimmen. Kommentare in einem Issue sollten auf Details oder Kontext beschränkt sein, die bei der Lösung des Issues helfen.

- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Konversation zu [MDNs Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Sie sind sich nicht sicher, ob das Issue gültig ist oder welche Aktion erforderlich ist.
  - Das Issue hat keinen klaren Konsens über seine Lösung.
- Bei kleinen Fehlern können Sie [selbst die Änderungen vornehmen](#probleme_selbst_beheben) und einen Pull Request einreichen.

Wenn die Informationen, die Sie im Issue bereitstellen, unvollständig sind, werden Sie möglicherweise gebeten, während der [Issue-Triagierung](#überprüfung_des_issues_auf_vollständigkeit_der_informationen) mehr Details bereitzustellen (achten Sie auf das `needs info` Label).

### Erstellen eines Aufgabenlisten-Issues

Wenn das von Ihnen eröffnete Issue nicht dazu dient, einen Fehler zu melden, sondern eine Reihe von Aufgaben auszuführen, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen. Erklären Sie den Kontext oder Grund für das Ausführen der Aufgaben in der Beschreibung. Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste aufführen.

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

## Leitlinien zur Bearbeitung eines Issues

Denken Sie daran, dass, wenn Sie ein Issue übernehmen, die Erwartung besteht, dass die Arbeit in angemessener Zeit abgeschlossen wird. Wenn Sie nicht in der Lage sind, an einem beanspruchten Issue Fortschritte zu machen, fügen Sie bitte einen Kommentar hinzu, damit die Maintainer Bescheid wissen, und damit das Issue von einem anderen Mitwirkenden übernommen werden kann.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie beitragen möchten, suchen Sie nach Issues mit einem Prioritätslabel, `p2` oder `p3` (sehen Sie, was diese [Prioritätslabels](#setzen_sie_ein_prioritätslabel) bedeuten). Alternativ suchen Sie nach Issues mit [einem dieser Labels, die anzeigen, dass wir PRs aus der Community einladen](#apply_type_goal_and_effort_labels): `good first issue`, `accepting PR` und `help wanted`. Die meisten Repositories haben Issues mit diesen Labels. Sie sind eingeladen, ein Issue auszuwählen, das zu Ihrem Fähigkeiten-Set passt.

   Eine weitere nützliche Stelle, um nach Issues zu suchen, ist die [MDN Contributor Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte), die Sie interessieren, filtern. Wenn Sie neugierig sind, lesen Sie die Bedeutungen der [Labels](#apply_type_goal_and_effort_labels), die während des Issue-Triage-Prozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem `needs triage` Label zeigt an, dass das MDN-Team das Issue noch nicht überprüft hat, und Sie sollten nicht damit beginnen zu arbeiten.

2. **Überprüfen, ob niemand bereits an dem Issue arbeitet:**

   Bevor Sie mit der Arbeit an einem Issue beginnen, überprüfen Sie zuerst, dass niemand dem Issue zugewiesen ist (das Feld _Assignees_ sollte "Unassigned" sein).

   Überprüfen Sie dann, dass keine verknüpften [Pull Requests](/de/docs/MDN/Community/Pull_requests) vorhanden sind, da diese anzeigen können, dass ein anderer Mitwirkender das Issue beansprucht und daran zu arbeiten begonnen hat.

3. **Forschung betreiben:**

   Die meisten Issues benötigen eine Untersuchung, bevor die Arbeit beginnen kann.
   - Umreißen Sie die Arbeit, die erledigt werden muss.
     Wenn das Issue nicht gut beschrieben ist und/oder Sie nicht sicher sind, was benötigt wird, zögern Sie nicht, die Person zu erwähnen, die das Issue eröffnet hat (mit @username) und um weitere Informationen zu bitten.
   - Sie können auch in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) um Rat fragen.

4. **Das Issue beanspruchen:**

   Sie können ein nicht zugewiesenes und nicht beanspruchtes Issue folgendermaßen "beanspruchen":
   1. Forken Sie das Repository und erstellen Sie Ihren Arbeitszweig.
   2. Beheben Sie das Issue und öffnen Sie dann einen [Pull Request (PR)](/de/docs/MDN/Community/Pull_requests) im Repository.
   3. Fügen Sie im PR-Beschreibungstext `Fixes #<issue_number>` ein (wenn der PR das Issue nur teilweise behebt, fügen Sie den Text `Related to #<issue_number>` hinzu).

      Das Hinzufügen dieses Textes erstellt eine Querverweise zwischen dem Issue und dem PR und markiert das Issue implizit als von Ihnen beansprucht.

      > [!NOTE]
      > Wenn Sie die erforderlichen Berechtigungen haben, sollten Sie das Issue auch _explizit_ [sich selbst zuweisen](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

   Abhängig von den Dateien, die Sie im Pull Request aktualisiert haben, wird Ihrem Pull Request automatisch ein Reviewer zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   > [!WARNING]
   > Wenn Sie nach dem Öffnen des Pull Requests feststellen, dass Sie keine Zeit mehr haben, um Änderungen vorzunehmen oder Feedback zu berücksichtigen, lassen Sie das Team so schnell wie möglich in einem Kommentar im Pull Request wissen.
   > Dadurch kann das Team einen anderen interessierten Mitwirkenden beauftragen, die Arbeit am Pull Request abzuschließen und das verknüpfte Issue zu schließen.

5. **Schließen Sie das Issue als abgeschlossen:**

   Wenn Sie den Pull Request mit `Fixes #<issue>` in der Beschreibung geöffnet haben, wird das Issue automatisch geschlossen, wenn der PR zusammengeführt wird. Andernfalls können Sie einen Kommentar zum Issue hinzufügen, der auf einen oder mehrere Pull Requests verweist, die es beheben, und ein Maintainer wird das Issue als abgeschlossen schließen.

### Probleme selbst beheben

Wenn Sie einen Fehler entdecken – sei es ein Problem mit dem Aussehen und der Anmutung der Website oder ein Fehler in der Dokumentation – können Sie versuchen, ihn selbst in einem [Pull Request](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (wie ein Tippfehler oder eine geringfügige Satzverbesserung) oder eine schnelle Lösung beinhaltet, können Sie einen Pull Request mit den entsprechenden Änderungen einreichen.

Für jede andere Art von Fehler beginnen Sie mit dem [Öffnen eines Issues](#leitlinien_zum_melden_eines_issues).
Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Issue zu arbeiten, und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder die Schritte zur Behebung.

> [!NOTE]
> Ihre Zeit und Mühe könnten verschwendet sein, wenn Sie einen Pull Request öffnen, ohne zuvor ein Issue zu erstellen.
> Warten Sie, bis das Issue triagiert wurde, damit das MDN Web Docs Team verifizieren kann, dass das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigt.

Verwenden Sie die [Leitlinien zur Bearbeitung eines Issues](#leitlinien_zur_bearbeitung_eines_issues), um zu versuchen, das Problem durch Aktualisierung der entsprechenden Quelle zu beheben, wie zum Beispiel:

- Die MDN Web Docs **Inhalte** (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Die MDN Web Docs **übersetzten Inhalte** im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Die MDN Web Docs **Frontend** im [mdn/fred](https://github.com/mdn/fred) Repository

Jedes Repository enthält nützliche Informationen, die Sie anleiten, wie Sie beitragen können.
Für weitere Informationen siehe [unsere Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Leitlinien zur Triagierung von Issues

Wenn Sie ein Maintainer oder Owner in der GitHub-Organisation der MDN Web Docs sind, sind Sie verantwortlich für die Triagierung von Issues in einem oder mehreren MDN Web Docs Repositories.

Der Gesamtprozess der Triagierung umfasst einige [allgemeine](#allgemeine_triagierungsaufgaben) und einige [issue-spezifische Aufgaben](#issue-spezifische_triagierungsaufgaben).

### Allgemeine Triagierungsaufgaben

- Wenn ein Issue eröffnet wird, wird das `needs triage` Label automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#issue-spezifische_triagierungsaufgaben). Mitwirkende oder andere Personen sollten nicht an dem Issue arbeiten, bis es triagiert wurde. (Triagierer sollten daran denken, das `needs triage` Label nach der Triagierung des Issues zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird automatisch ein zusätzliches `Content:` Label gesetzt, wie `Content:CSS` oder `Content:WebAPI`. Dies wird basierend auf der im Issue erwähnten MDN-URL gesetzt. Sie können das inhalts-spezifische Label nutzen, um in Ihrem spezifischen Themenbereich nach Issues zu suchen, die triagiert werden müssen.

- Wenn ein Issue eine aktive, nicht en-US Lokalisierung betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Sprachversionen werden diese Issues übernehmen und triagieren.

- Sie müssen nicht ständig aktiv Issues triagieren. Planen Sie regelmäßig Zeit ein, sagen wir 30 Minuten jede Woche, um in Ihrem Zuständigkeitsbereich Issues zu triagieren. Triagieren muss nicht Teil eines synchronen Meetings sein oder sogar zur gleichen Zeit wie alle anderen erfolgen, aber es sollte regelmäßig durchgeführt werden, um sicherzustellen, dass der Rückstand an nicht triagierten Fehlern nicht zu hoch wird.

- Abgesehen von der wöchentlichen Triagierung neu eingehender Issues, überprüfen Sie die Liste der alten Fehler, um festzustellen, ob es welche gibt, die festgefahren sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die seit 30 Tagen keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, um zu sehen, ob der Zuweisende Fortschritte macht. Wenn nach einer Woche der Zuweisung keine Fortschritte erzielt wurden, fragen Sie sie, ob sie noch Zeit haben, an dem Issue zu arbeiten. Wenn eine weitere Woche ohne Fortschritte vergeht, weisen Sie das Issue zurück und hinterlassen Sie einen Kommentar, der darauf hinweist, dass Sie das Issue für andere interessierte Mitwirkende verfügbar machen.
  - Wenn ein Pull Request eröffnet wurde, um das Issue zu beheben, der jedoch seit einer Woche nicht überprüft wurde, geben Sie dem Reviewer einen sanften Ping, um zu fragen, ob er dazu kommen kann.
  - Wenn ein Pull Request zur Behebung des Issues auf Überprüfungskommentare wartet, nachdem eine Woche vergangen ist, dann fragen Sie den Autor, ob er auf ihre Überprüfung reagieren kann. Wenn eine weitere Woche vergeht, beheben Sie entweder die Überprüfungskommentare selbst, wenn Sie Zeit haben, oder schließen Sie den Pull Request und weisen das zugehörige Issue zurück.

### Issue-spezifische Triagierungsaufgaben

Dies sind die Leitlinien, die zu befolgen sind, während jedes Issue triagiert wird.

#### Überprüfen, ob das Issue gültig ist

Dies sind einige der Dinge, die während der Überprüfung der Gültigkeit eines Issues zu beachten sind:

- Überprüfen Sie, ob das aufgeworfene Issue gültig ist.
- Bewerten Sie, ob die Lösung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob die Auswirkung der Lösung klein oder site-weit ist.
- Bewerten Sie, ob die Lösung des Issues zuerst eine Diskussion benötigt, in diesem Fall sollten Sie den Autor darauf hinweisen, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Issue unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht. Beispielsweise, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.
- Überprüfen Sie, ob das Issue ein Duplikat eines bestehenden Issues ist. Wenn dies der Fall ist, können Sie das Issue als [Duplikat schließen](#schließen_eines_issues_als_duplikat).

#### Überprüfung des Issues auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Arbeit an dem Fehler beginnen kann:

- URL der MDN Web Docs Seite mit dem Problem oder URL einer Beispielseite der MDN Web Docs, wenn das Problem auf mehreren Seiten besteht
- Der spezifische Titel oder Abschnitt auf der MDN Web Docs Seite, in dem das Problem gefunden wurde
- Eine klare Beschreibung der falschen, nicht hilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen fehlt, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das `needs info` Label zum Issue hinzufügen. Setzen Sie die Triagierung des Issues erst fort, nachdem diese Details bereitgestellt wurden (nachdem Sie das `needs info` Label entfernen können). Es ist in Ordnung, bis zu einer Woche auf eine Antwort vom Autor zu warten.

#### Setzen Sie ein Prioritätslabel

Setzen Sie für jeden Fehler ein Prioritätslabel basierend auf der Schwere des Issues, um Personen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Diese Art von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website erscheint. Diese Art von Issue könnte den Ruf von MDN ernsthaft schädigen und/oder Benutzer schädigen. Beispiele für dieses Issue umfassen einen falschen Code-Snippet, der, falls er in der Produktion verwendet wird, ein schwerwiegendes Sicherheitsproblem und unerwünschte Inhalte wie Malware, Obszönität, Pornografie, Hassreden oder Links zu solchem Inhalt erzeugen könnte.
  - Label: `p0` (wird sofort behoben)

- Großes Issue: Diese Art von Issue könnte die Nützlichkeit einer Seite erheblich beeinflussen. Zum Beispiel eine erhebliche Menge an veralteten Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine bedeutende Menge an Prosa, die schlecht geschrieben und schwer zu verstehen ist, oder eine große Anzahl von kaputten Links.
  - Labels: `p1` (wird bald behoben) und `p2` (wird bald behoben, aber höhere Prioritätsartikel haben Vorrang)

- Kleines Issue: Diese Art von Verbesserungs-Issue kann den vorhandenen Inhalt besser machen, beeinflusst das Lernen jedoch nicht oder hat nur einen geringen Einfluss auf das Lernen. Da diese Art von Issues nicht aktiv geplant sind, ist Hilfe von Mitwirkenden, um diese Issues zu beheben, willkommen und sehr geschätzt. Die Lösung einiger dieser Issues kann auch den notwendigen Übungsbedarf für Anfänger-Mitarbeiter bieten, die sich mit dem Beitragsprozess vertraut machen. Beispiele schließen Tippfehler, schlechte Grammatik, einen kaputten Link, eine kleine Menge veralteter Informationen oder schlecht geschriebene Prosa oder einen Codeausschnitt, der nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Issue behoben wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich von MDN-Mitarbeitern und Kollegen bearbeitet. Wenn nicht spezifiziert, ist `p3` das Standard-Prioritätsniveau.

#### Hilfreiche Informationen hinzufügen

Fügen Sie nach Möglichkeit Informationen hinzu, die Mitwirkenden helfen können, das Issue zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlich behobenen Issues oder Lesematerialien sein. Ein gut ausgearbeiteter Plan oder Schritte sind besonders bei Issues erforderlich, die mit dem Label `good first issue` versehen sind und neue Mitwirkende schnell einarbeiten können. Sie können diese Aufgabe zeitlich auf 5-10 Minuten begrenzen.

Zum Beispiel können Sie als Triagierer die folgenden Informationen zum Issue hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Anwendung von Labels für Typ, Ziel und Aufwand

Setzen Sie als Nächstes, wo möglich, die folgenden Labels:

- Ein Label, um die "Art des Problems" anzugeben, das behoben werden muss, falls zutreffend:
  - `broken link external`: Das Issue meldet einen defekten Link zu einer externen Seite.
  - `document not written`: Das Issue meldet ein notwendiges Dokument, das noch nicht geschrieben wurde, normalerweise, weil ein Link darauf zeigt. Beachten Sie, dass wir ein [Web Docs Backlog](https://openwebdocs.github.io/web-docs-backlog/all/) Projekt haben, das bereits viele ungeschriebene Referenzseiten verfolgt, also wenn das Issue über eine dieser Seiten handelt, können Sie das Issue mit `closed: duplicate` [schließen](#schließen_eines_issues_als_duplikat) und auf den Backlog verweisen.
  - `screenshot`: Das Issue meldet einen fehlenden oder veralteten Screenshot.
  - `baseline`: Das Issue meldet ein falsches {{Glossary("Baseline/Compatibility", "baseline")}} Banner. Beachten Sie, dass die im Baseline-Banner angezeigten Daten nicht aus dem `mdn/content` Repository stammen; es wird stattdessen durch eine Kombination von Eingaben von [browser compat data](https://github.com/mdn/browser-compat-data), [front-end code](https://github.com/mdn/fred) und [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) bestimmt. Sie sollten fast immer entweder das Issue schließen, um anzugeben, dass es wie beabsichtigt funktioniert, oder es in das entsprechende Repository übertragen.

- Ein "Ziel"-Label, um anzugeben, was die Lösung zu erreichen versucht:
  - `goal: accuracy`: Das Issue berichtet über falsche oder ungenaue Informationen. Wenn die Inhalte zum Zeitpunkt des Schreibens korrekt waren, verwenden Sie stattdessen `goal: up-to-date`.
  - `goal: clarity`: Das Issue berichtet über irreführende oder unklare Informationen (ist aber technisch korrekt).
  - `goal: completeness`: Das Issue berichtet über fehlende Informationen, normalerweise wichtige Vorbehalte oder Erklärungen.
  - `goal: consistency`: Das Issue berichtet über inkonsistente Informationen. Verwenden Sie dieses Label nur für redaktionelle Konsistenz, wie z. B. Codebeispiele und deren Beschreibungen; wenn mindestens ein Ort technisch falsch ist, verwenden Sie stattdessen das `goal: accuracy` Label.
  - `goal: up-to-date`: Das Issue berichtet über veraltete Informationen, normalerweise aufgrund von Änderungen in der Webplattform.
  - `goal: best practices`: Das Issue berichtet über Anti-Patterns in Codebeispielen oder Inhalt.
  - `goal: discoverability`: Das Issue berichtet über fehlende Links zu verwandten Inhalten oder fehlende Schlüsselwörter, die Suchmaschinen helfen würden, die Seite zu finden.

- Ein "Aufwand"-Label, um Mitwirkenden zu helfen, Issues zu finden, die dem Zeit- und Arbeitsaufwand entsprechen, den sie verwenden können. Verwenden Sie Ihre beste Schätzung, um das entsprechende Label anzuwenden, da der tatsächliche Aufwand letztendlich von den Fähigkeiten und Erfahrungen des Mitwirkenden abhängt. In der Realität kann der geleistete Aufwand größer sein als der Umfang der geleisteten Arbeit (z.B. erfordert die Arbeit erhebliche Vorrecherchen) oder umgekehrt (z.B. umfasst sie nur eine einzelne Änderung, die viele Seiten betrifft).
  - `effort: small`: Die Lösung würde wahrscheinlich unter 50 Zeilen liegen (entspricht einem `xs` oder `s`-großen PR).
  - `effort: medium`: Die Lösung würde wahrscheinlich zwischen 50 und 1000 Zeilen liegen (entspricht einem `m` oder `l`-großen PR).
  - `effort: large`: Die Lösung würde wahrscheinlich über 1000 Zeilen liegen (entspricht einem `xl`-großen PR).

- Ein "Akzeptieren von Beiträgen" Typ von Label, das angibt, dass wir PRs aus der Community einladen:
  - `good first issue`: Fügen Sie dieses Label hinzu, wenn die Lösung des Issues wirklich einfach ist und eine gute Übung für einen Neuling bieten würde, der sich an den Beitragsprozess gewöhnt. Wenden Sie dieses Label nur an, wenn _alle_ dieser Bedingungen zutreffen:
    - Es gibt Anweisungen, entweder vom Autor oder vom Triagierer, darüber, was _genau_ geschrieben werden muss (vorzugsweise wörtlicher Text oder eine Schritt-für-Schritt-Anleitung).
    - Die Lösung zielt auf eine einzige Seite ab (damit der Mitwirkende sie leicht über die Weboberfläche reparieren kann).
    - Die Lösung beinhaltet nicht das Schreiben eines wesentlichen neuen Inhalts oder Codes, der ein tieferes technisches Verständnis erfordern kann.
  - `help wanted`: Setzen Sie dieses Label, wenn das Issue Hilfe von jemandem erfordert, der sich mit dem Thema auskennt oder vertraut ist. Dies ist ein beliebtes Label, und einige Mitwirkende verwenden es, um nach Issues zu suchen, an denen sie in Open-Source-Projekten in ihren Vertrautheit oder Fachkenntnisbereichen arbeiten können.
  - `accepting PR`: Fügen Sie dieses neutrale Label hinzu, wenn das Issue nicht so unkompliziert wie ein `good first issue` ist, aber auch nicht so komplex oder spezialisiert, dass ein `help wanted` Label erforderlich ist.

  Besteht ein Issue nicht mit einem dieser Label, zeigt dies in der Regel an, dass Community-Beiträge für das Issue nicht erwünscht sind. Dies kann der Fall sein, wenn weitere Diskussionen erforderlich sind, die Arbeit jemanden erfordert, der mit den redaktionellen Konventionen von MDN vertraut ist, oder ein Teammitglied plant, daran zu arbeiten. Mitwirkende können trotzdem an diesen Issues arbeiten, wenn sie mit dem Prozess ausreichend vertraut sind.

- Issue-Status: Wenn ein Issue kein Label hat, das zeigt, dass wir PRs akzeptieren oder dass daran gearbeitet wird, fügen Sie eines der folgenden Labels hinzu, um anzugeben, worauf es blockiert ist:
  - `needs BCD update`: Setzen Sie dieses Label, wenn das Issue die Dokumentation neuer Funktionen oder Verhaltensweisen betrifft, die zuerst Daten darüber benötigen, wann diese implementiert werden.
  - `needs content update`: Setzen Sie dieses Label, wenn die Lösung in einem anderen Repository eine entsprechende Lösung im `mdn/content` Repository erfordert.
  - `needs decision`: Setzen Sie dieses Label, wenn das Issue eine Teamkonsens über den Ansatz erfordert. Der Konsens kann durch eine Diskussion oder ein synchrones internes Meeting erreicht werden.
  - `needs example update`: Setzen Sie dieses Label, wenn dasIssue die Synchronisierung von Codebeispielen in einem anderen Repository betrifft. Wenn das Repository extern ist, muss es wahrscheinlich erst in ein internes [Live-Beispiel](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) konvertiert oder unter MDN übertragen werden.
  - `needs info`: Wie [oben erwähnt](#überprüfung_des_issues_auf_vollständigkeit_der_informationen), setzen Sie dieses Label, wenn Informationen angefordert werden, sei es vom Autor des Issues, vom Autor des betreffenden Inhalts oder von jemand anderem, um mit dem Issue fortzufahren.
  - `on hold`: Ein generisches Label, das anzeigt, dass das Issue noch nicht bearbeitet werden sollte.
  - `waiting for implementations`: Setzen Sie dieses Label, wenn das Issue eine Funktion betrifft, die noch nicht in Browsern implementiert ist und daher nicht für unsere [Dokumentationskriterien](/de/docs/MDN/Writing_guidelines/Criteria_for_inclusion) geeignet ist.

Nachdem Sie das Issue analysiert und validiert und die entsprechenden Labels (Typ, Ziel, Aufwand, offen für die Community) angewendet haben, ist der Triagierungsvorgang abgeschlossen, und Sie können das `needs triage` Label entfernen.

### Schließen eines Issues als nicht geplant

Wenn ein Issue keiner umsetzbaren Aufgabe zugeordnet werden kann, sollten Sie in Erwägung ziehen, das Issue als nicht geplant zu schließen. Klicken Sie auf das Dropdown-Menü neben der **Close issue** Schaltfläche und wählen Sie **Close as not planned**. Verfassen Sie einen Kommentar, um den Grund für das Schließen des Issues zu erklären. Fügen Sie auch eines der folgenden Labels hinzu:

- `closed: browser bug`: Das Issue meldet unerwartetes Verhalten im Code des Meldees oder im Code von MDN, aber die Ursache ist ein Browser-Bug. Das Issue ist auch nicht bedeutend genug, um eine BCD-Notiz zu rechtfertigen.
- `closed: question`: Das Issue basiert auf einem Fehler oder Missverständnis des Meldenden, und der Inhalt ist bereits korrekt und klar. Sie sollten dennoch den Bericht anerkennen und in Betracht ziehen, ob der Inhalt weiter geklärt werden kann, um ähnliche Fragen in Zukunft zu verhindern.
- `closed: wontfix`: Das Issue berichtet über ein gültiges Problem, aber MDN entscheidet, es nicht zu beheben. Häufige Gründe sind, dass die Arbeit außerhalb des Geltungsbereichs liegt, der erforderliche Aufwand den Nutzen übersteigt oder Inhalt und Code wie beabsichtigt funktionieren.

### Schließen eines Issues als Duplikat

Wenn ein Issue ein Problem meldet, das bereits an anderer Stelle verfolgt wird, können Sie das Issue schließen. Sie müssen keine exakten Duplikate sein; wenn das Issue einem bestehenden Issue genügend ähnlich ist, können sie als ein einziges Issue zusammengefasst werden, das gemeinsam behoben wird.

Wenn es ein GitHub-Issue gibt, das dasselbe Problem verfolgt, klicken Sie auf das Dropdown-Menü neben der **Close issue** Schaltfläche, wählen **Close as duplicate** und fügen die URL des anderen Issues ein. Ist die Duplizierung offensichtlich, ist kein Kommentar erforderlich; andernfalls posten Sie einen Kommentar, der erklärt, warum die Issues Duplikate sind.

Wenn das Problem verfolgt wird, jedoch nicht über ein GitHub-Issue (wie das [Web Docs Backlog](https://openwebdocs.github.io/web-docs-backlog/all/)), können Sie das Issue als [nicht geplant schließen](#schließen_eines_issues_als_nicht_geplant), einen Kommentar posten und das `closed: duplicate` Label hinzufügen. Dieses Label ist optional für Issues, die über die **Close as duplicate** Option geschlossen wurden, hilft jedoch bei der späteren Suche nach doppelten Issues.
