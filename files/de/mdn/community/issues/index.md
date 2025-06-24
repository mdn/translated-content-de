---
title: Erstellen und Bearbeiten von Aufgaben
slug: MDN/Community/Issues
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Als Mitwirkender können Sie [Berichte](#richtlinien_für_das_melden_eines_problems) erstellen und an Aufgaben [arbeiten](#richtlinien_für_das_arbeiten_an_einem_problem).
Nachdem Sie ein Problem gemeldet haben, wird dieses eingestuft. Die [Einstufung](#richtlinien_für_die_einstufung_von_problemen) von Problemen wird typischerweise von Personen durchgeführt, die die Rolle eines Betreuers oder Eigentümers innehaben.

## Allgemeine Richtlinien für die Teilnahme

Stellen Sie sicher, dass Ihre Beiträge, sei es beim Melden eines Problems oder bei der Teilnahme an Diskussionen, zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Probleme und Ihre Kommentare konstruktiv und thematisch relevant sind und nicht nur unnötigen Lärm erzeugen.

Folgendes sollten Sie tun:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Problem zu melden.
- Wenn es viele Möglichkeiten gibt, ein Problem zu lösen, überlegen Sie, ob Sie es mit dem Personal/die Gemeinschaft [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen.
  Nutzen Sie Diskussionen, um verschiedene Standpunkte zu gewinnen und zu einem abgestimmten Vorgehen zu gelangen. Dies hilft, Probleme fokussiert und produktiv zu halten.
- Versuchen Sie, das Problem selbst zu beheben, nachdem Sie es gemeldet haben. Es gibt einen Leitfaden zur [Einreichung und Überprüfung von Pull-Anfragen](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragsprozess wissen müssen.

Vermeiden Sie Folgendes:

- Komplexe Diskussionen, indem Sie mehrere Themen diskutieren oder Kommentare abgeben, die nicht zum Thema gehören.
- Eröffnung vieler Probleme mit vagen Fragen.
- Fragen stellen, ohne vorher selbst versucht zu haben, das Problem zu lösen.

Wenn Sie neue Dokumentationen oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, siehe [Vorschläge für neue Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien für das Melden eines Problems

[Probleme](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Problem muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Vor dem Melden eines Problems

Wenn Sie glauben, dass Sie einen Fehler im Inhalt der MDN Web Docs oder im Erscheinungsbild der Website gefunden haben, durchsuchen Sie die aktuellen offenen Probleme im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass das Problem nicht bereits von jemand anderem gemeldet wurde.

### Melden eines Problems

Abhängig von der Art des entdeckten Problems können Sie es melden, indem Sie ein Problem in einem der Haupt-[MDN GitHub-Repositories](/de/docs/MDN/Community/Our_repositories) einreichen.
Wenn die von Ihnen im Problem bereitgestellten Informationen unvollständig sind, werden Sie möglicherweise gebeten, während des [Einstufungsprozesses](#überprüfen_sie_die_vollständigkeit_der_informationen_im_problem) weitere Details bereitzustellen.

Hier einige Hinweise zum Eröffnen von Problemen:

- Wählen Sie die entsprechende Kategorie aus, um das Problem zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die Vorlage [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im `mdn/content` Repository.
- Stellen Sie genügend Informationen bereit, während Sie das Problem melden:
  - **Titel des Problems** sollte die _erforderliche Aktion_ prägnant vermitteln.
  - **Problembeschreibung** muss den Fehler und die zur Lösung des Problems erforderliche Aktion klar beschreiben. Es muss auch die zu lösenden Aufgaben oder Unteraufgaben auflisten. Weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Problembeschreibung anstatt über Kommentare. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in der Beschreibung, wenn ein Problem mehrere Teile hat. Dies hilft anderen, die möglicherweise durch die Kommentare scrollen müssen, um den Status verschiedener Aufgaben zu bestimmen.
    - Kommentare in einem Problem sollten auf Details oder Kontext beschränkt werden, die zur Lösung des Problems beitragen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verschieben Sie das Gespräch an die [MDN-Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Eine Diskussion muss stattfinden, um ein Problem zu klären.
  - Eine Diskussion beginnt, nachdem das Problem eröffnet wurde.
  - Zu der Lösung des Problems besteht kein klarer Konsens.
  - Die Anforderungen zur Erledigung der Aufgabe erweitern sich während der Lösung oder die Arbeit ist unklar.
- Bei kleineren Fehlern können Sie [die Änderungen selbst vornehmen](#probleme_selbst_beheben) und eine Pull-Anfrage einreichen.

### Erstellen eines Aufgabenlistenproblems

Wenn das von Ihnen eröffnete Problem nicht dazu dient, einen Fehler zu melden, sondern eine Reihe von Aufgaben auszuführen, können Sie das Problem als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
Erklären Sie den Kontext oder den Grund für die Durchführung der Aufgaben in der Beschreibung.
Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste auflisten.

Beispiel:

```md
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

## Richtlinien für das Arbeiten an einem Problem

Denken Sie daran, dass die Erwartung besteht, dass die Arbeit in angemessener Zeit abgeschlossen wird, wenn Sie ein Problem übernehmen. Wenn Sie nach einer Woche Zuweisung keine Fortschritte machen können oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und weisen Sie sich von dem Problem selbst zu.

Dies sind die allgemeinen Schritte, um an einem Problem zu arbeiten:

1. **Ein Problem finden:** Wenn Sie sich beteiligen möchten, suchen Sie nach Problemen mit dem Label [`good first issue`, `help wanted`](#setzen_sie_andere_labels) oder [`p3`](#setzen_sie_ein_prioritätslabel). Die meisten Repositories haben Probleme mit diesen Labels. Sie können gerne ein für Ihre Fähigkeiten geeignetes Problem durchstöbern und auswählen. Eine weitere nützliche Stelle, um nach zu bearbeitenden Problemen zu suchen, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Probleme aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte) filtern, die Sie interessieren. Sehen Sie sich die Beschreibung einiger [Labels](#setzen_sie_andere_labels) an, die während des Einstufungsprozesses angewendet werden.

   > [!NOTE]
   > Ein Problem mit dem Label `needs triage` zeigt an, dass das Kernteam der MDN Web Docs das Problem noch nicht überprüft hat, und Sie sollten nicht damit beginnen.

2. **Zuweisen Sie sich das Problem:** Nachdem Sie ein Problem gefunden haben, das Sie bearbeiten möchten, stellen Sie sicher, dass es niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, in dem Sie angeben, dass Sie das Problem bearbeiten möchten, und weisen Sie, wenn möglich, [das Problem sich selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Führen Sie die Recherche durch:** Die meisten Probleme erfordern einige Untersuchungen, bevor die Arbeit beginnen kann.

   - Erfassen Sie den Arbeitsumfang, der erforderlich ist. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Problem gut beschrieben ist und die Arbeit offensichtlich ist, machen Sie es einfach.
   - Wenn das Problem nicht gut beschrieben ist und/oder Sie nicht sicher sind, was benötigt wird, @mentionen Sie den Poster und fragen Sie nach weiteren Informationen.

4. **Nehmen Sie die Änderungen vor:** Forken und verzweigen Sie das Repository. Machen Sie Ihre Arbeit und öffnen Sie eine [Pull-Anfrage](/de/docs/MDN/Community/Pull_requests) im Repository. [Verweisen Sie in der Pull-Anfrage-Beschreibung auf das Problem](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue). Je nach den in der Pull-Anfrage aktualisierten Dateien wird ein Prüfer automatisch Ihrer Pull-Anfrage zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   Nachdem Sie die Pull-Anfrage eröffnet haben, informieren Sie das Team in einem Kommentar in der Pull-Anfrage, wenn Sie keine Zeit mehr haben, Änderungen vorzunehmen oder Feedback zu Rezensionen zu integrieren. Dies hilft dem Team, einen anderen interessierten Mitwirkenden zuzuweisen, um die Arbeit an der Pull-Anfrage abzuschließen und das verknüpfte Problem zu schließen.

5. Nachdem Ihre Pull-Anfrage überprüft und zusammengeführt wurde, können Sie das verknüpfte Problem als geschlossen markieren. Wenn Sie die Pull-Anfrage mit dem Ausdruck `Fixes #<issue>` eröffnet haben, wird das Problem automatisch geschlossen, wenn die Pull-Anfrage zusammengeführt wird.

### Probleme selbst beheben

Wenn Sie einen Fehler entdecken – sei es ein Problem mit der Darstellung der Website oder ein Fehler in der Dokumentation – können Sie versuchen, ihn selbst in einer [Pull-Anfrage](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (z. B. ein Tippfehler oder eine geringfügige Verbesserung eines Satzes) oder eine schnelle Lösung beinhaltet, können Sie eine Pull-Anfrage mit den entsprechenden Änderungen einreichen.

Für alle anderen Arten von Fehlern beginnen Sie damit, ein [Problem zu eröffnen](#richtlinien_für_das_melden_eines_problems).
Fügen Sie einen Kommentar über Ihre Absicht hinzu, an dem Problem zu arbeiten, und beschreiben Sie, wenn möglich, Ihren Vorschlag zur Lösung oder die Schritte zur Behebung.

> [!NOTE]
> Ihre Zeit und Mühe könnte vergeudet sein, wenn Sie eine Pull-Anfrage ohne vorherige Eröffnung eines Problems einreichen.
> Warten Sie, bis das Problem eingestuft wurde, damit das MDN Web Docs-Team verifizieren kann, dass das Problem legitim ist und Ihren Lösungsvorschlag genehmigen kann.

Verwenden Sie die [Richtlinien zur Bearbeitung eines Problems](#richtlinien_für_das_arbeiten_an_einem_problem), um das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, wie zum Beispiel:

- Die **Inhalte** der MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Die **übersetzten Inhalte** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** der MDN Web Docs im [mdn/yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, um Sie bei Ihrem Beitrag zu unterstützen.
Weitere Informationen finden Sie in [unseren Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien für die Einstufung von Problemen

Wenn Sie ein Betreuer oder Eigentümer in der GitHub-Organisation von MDN Web Docs sind, sind Sie für die Einstufung von Problemen in einem oder mehreren MDN Web Docs Repositories verantwortlich.

Der gesamte Prozess der Einstufung umfasst einige [allgemeine](#allgemeine_einstufungsaufgaben) und einige [problemspezifische Aufgaben](#spezifische_einstufungsaufgaben).

### Allgemeine Einstufungsaufgaben

- Wenn ein Problem eröffnet wird, wird automatisch das Label `needs triage` auf das Problem gesetzt. Sie können nach diesem Label suchen, um nach Problemen zu suchen, die [eingestuft werden müssen](#spezifische_einstufungsaufgaben). Mitwirkende oder andere Personen sollten nicht an dem Problem arbeiten, bis es eingestuft wurde. (Triager sollten daran denken, das Label `needs triage` zu entfernen, nachdem sie das Problem eingestuft haben.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird zusätzlich automatisch ein `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, auf das Problem gesetzt. Dies wird basierend auf der in dem Problem genannten MDN-URL festgelegt. Sie können das inhaltsbezogene Label verwenden, um nach Problemen zu suchen, die in Ihrem spezifischen Themenbereich eingestuft werden müssen.

- Wenn ein Problem eine aktive, nicht en-US Locale betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Locales werden diese Probleme aufnehmen und einstufen.

- Sie müssen nicht ständig aktiv Probleme einstufen. Nehmen Sie sich zum Beispiel jede Woche 30 Minuten Zeit, um regelmäßig Probleme in Ihrem Verantwortungsbereich zu klassifizieren. Einstufungen müssen nicht als Teil eines synchronen Treffens oder sogar zur gleichen Zeit wie alle anderen durchgeführt werden, sollten jedoch regelmäßig erfolgen, um sicherzustellen, dass der Rückstand an nicht eingestuften Fehlern nicht zu hoch wird.

- Zusätzlich zur wöchentlichen Einstufung eingehender Probleme überprüfen Sie die Liste der alten Fehler, um festzustellen, ob es welche gibt, die blockiert sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Probleme gesetzt, die 30 Tage lang keine Aktivität aufweisen.
  - Überprüfen Sie, ob zugewiesene Probleme, die noch offen sind, Fortschritte machen. Wenn nach einer Woche keine Fortschritte gemacht werden, fragen Sie die zuständige Person, ob sie noch Zeit hat, an dem Problem zu arbeiten. Wenn eine weitere Woche ohne Fortschritt vergeht, heben Sie die Zuweisung auf und hinterlassen Sie einen Kommentar, der angibt, dass Sie das Problem für andere interessierte Mitwirkende verfügbar machen.
  - Wenn eine Pull-Anfrage zur Behebung des Problems erstellt wurde, aber nicht innerhalb einer Woche überprüft wurde, geben Sie dem Prüfer einen sanften Anstoß, um zu sehen, ob er dazu kommen kann.
  - Wenn eine Pull-Anfrage zur Behebung des Problems auf Überprüfungskommentare wartet, die nach einer Woche adressiert werden sollen, fragen Sie den Autor, ob er auf die Überprüfung reagieren kann. Wenn eine weitere Woche vergeht, beheben Sie entweder die Überprüfungskommentare selbst, falls Sie Zeit haben, oder schließen Sie die Pull-Anfrage und heben die Zuweisung des zugehörigen Problems auf.

### Spezifische Einstufungsaufgaben

Dies sind die Richtlinien, die beim Einstufen jedes Problems befolgt werden sollten.

#### Überprüfen Sie, ob das Problem gültig ist

Dies sind einige Dinge, die Sie beim Überprüfen der Gültigkeit eines Problems beachten sollten:

- Überprüfen Sie, ob das aufgeworfene Problem gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessert.
- Bewerten Sie, ob der Einfluss der Behebung klein oder umfassend ist.
- Bewerten Sie, ob die Behebung des Problems zuvor eine Diskussion erfordert, und verweisen Sie in diesem Fall den Autor darauf, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Problem mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Überprüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfen Sie die Vollständigkeit der Informationen im Problem

Überprüfen Sie jedes Problem anhand der folgenden Checkliste, um sicherzustellen, dass das Problem die beschriebenen Informationen enthält, damit jemand mit der Bearbeitung des Fehlers beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder URL einer Beispielseite von MDN Web Docs, wenn das Problem auf mehreren Seiten auftritt
- Die spezifische Überschrift oder der Abschnitt auf der MDN Web Docs-Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unhilfreichen, unvollständigen oder fehlenden Information

Wenn eine der obigen Informationen fehlt, sollten Sie den Autor des Problems bitten, diese Details bereitzustellen, und das `needs info` Label zum Problem hinzufügen. Setzen Sie die Einstufung des Problems erst fort, nachdem diese Details bereitgestellt wurden (nachdem Sie das `needs info` Label entfernen können). Es ist okay, bis zu einer Woche auf eine Antwort des Autors zu warten.

#### Setzen Sie ein Prioritätslabel

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Schwere des Problems, um denjenigen zu helfen, die an den wichtigsten Problemen oder Bereichen arbeiten möchten.

- Kritisches Problem: Dieser Probletyp muss so schnell wie möglich behoben werden, unabhängig vom Standort auf der Website. Dieser Probletyp könnte den Ruf von MDN schwer beschädigen und/oder Benutzern schaden. Beispiele für dieses Problem sind ein falsches Codebeispiel, das, wenn es in der Produktion verwendet wird, ein großes Sicherheitsproblem und unerwünschte Inhalte wie Malware, Profanität, Pornografie, Hassrede oder Links zu solchen Inhalten verursachen könnte.

  - Label: `p0` (wird umgehend bearbeitet)

- Schwerwiegendes Problem: Dieser Probletyp könnte die Nützlichkeit einer Seite stark beeinträchtigen. Beispiele sind eine erhebliche Menge an veralteten Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine erhebliche Menge an schwer verständlichem und schlecht geschriebenem Prosa oder eine große Anzahl kaputter Links.

  - Labels: `p1` (wird bald adressiert) und `p2` (wird bald adressiert, aber hochpriorisierte Elemente haben Vorrang)

- Kleines Problem: Dies ist eine Art von Verbesserungsproblem, das vorhandenen Inhalt verbessern kann, jedoch das Lernen nicht beeinträchtigt oder nur einen geringen Einfluss auf das Lernen hat. Da diese Problemtypen nicht aktiv geplant werden, ist die Hilfe von Mitwirkenden bei der Behebung dieser Probleme willkommen und sehr geschätzt. Die Lösung einiger dieser Probleme kann auch den notwendigen Übungsrahmen für Mitwirkende bieten, die mit dem Beitragsprozess beginnen. Beispiele sind Tippfehler, schlechte Grammatik, ein kaputter Link, eine kleine Menge an veralteten Informationen oder schlecht geschriebene Prosa oder ein Codeausschnitt, der nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Problem adressiert wird)

Im Allgemeinen sollten kritische Probleme sofort behoben werden und werden höchstwahrscheinlich von MDN Web Docs-Mitarbeitern und Kollegen bearbeitet.

#### Fügen Sie hilfreiche Informationen hinzu

Geben Sie nach Möglichkeit Informationen an, die Mitwirkenden helfen können, das Problem zu beheben. Die Informationen können in Form von Schritten, allgemeinem Vorgehen, Links zu anderen ähnlich behobenen Problemen oder Leseressourcen sein. Ein gut ausgearbeiteter Plan oder Schritte sind besonders bei Problemen erforderlich, die mit `good first issue` gekennzeichnet sind und neuen Mitwirkenden schnell helfen können. Sie können diese Aufgabe auf 5-10 Minuten begrenzen.

Beispiel: Als Triager können Sie die folgenden Informationen zum Problem hinzufügen, das Sie einstufen:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen Sie andere Labels

Als nächstes setzen Sie die folgenden Labels, soweit dies zutrifft:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende suchen gerne nach Fehlern basierend auf dem Zeit- und Arbeitsaufwand, der für die Behebung des Fehlers erforderlich ist. Wenn möglich, sollten Sie versuchen, eine Schätzung des erforderlichen Aufwands anzugeben.
- `good first issue`: Setzen Sie dieses Label auf das Problem, wenn die Behebung wirklich einfach ist und das Beheben des Problems eine gute Übung für einen Neuling darstellt, der sich an den Prozess gewöhnt.
- `help wanted`: Setzen Sie dieses Label, wenn das Problem Hilfe von jemandem erfordert, der mit dem Thema vertraut ist. Dies ist ein beliebtes Label und einige Mitwirkende nutzen es, um nach Problemen zu suchen, an denen sie in Open-Source-Projekten in ihren Bereichen der Vertrautheit oder Expertise arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Problem einen kaputten Link zu einer externen Seite beinhaltet.
- `document not written`: Setzen Sie dieses Label, wenn das Problem ein notwendiges, aber noch nicht geschriebenes Dokument betrifft, in der Regel weil ein Link darauf hinweist.
- `needs content update`: Setzen Sie dieses Label, wenn die Problembehebung in einem anderen Repository eine entsprechende Behebung im `mdn/content` Repository erfordert.

  > [!NOTE]
  > Entfernen Sie nach Abschluss des Einstufungsprozesses das `needs triage` Label.
