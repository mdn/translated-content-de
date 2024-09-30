---
title: Richtlinien zum Öffnen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{MDNSidebar}}

Als Beitragende können Sie [Probleme melden](#richtlinien_zum_melden_eines_problems) und an diesen [arbeiten](#description).

Nachdem Sie ein Problem gemeldet haben, wird dieses triagiert. Das [Triagieren von Problemen](#richtlinien_für_die_arbeit_an_einem_problem) wird normalerweise von Personen erledigt, die die Rolle eines Maintainers oder Eigentümers haben.

## Allgemeine Richtlinien zur Teilnahme

Stellen Sie beim Melden eines Problems oder bei der Teilnahme an einem Gespräch in einem Problem immer sicher, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Probleme und Ihre Kommentare konstruktiv und themenbezogen sind und nicht nur Lärm erzeugen.

Tun Sie Folgendes:

- Bevor Sie ein Problem melden, überlegen Sie, ob Sie es mit dem Personal/der Community [besprechen](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Nutzen Sie Diskussionen, um verschiedene Standpunkte zu gewinnen und zu einem abgestimmten Vorgehen zu gelangen. Dies hilft, Probleme fokussiert und produktiv zu halten.
- Versuchen Sie nach dem Melden eines Problems, das Problem selbst zu beheben. Lesen Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie sie in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Problem zu melden.

Vermeiden Sie Folgendes:

- Probleme zu verkomplizieren, indem Sie versuchen, mehrere Themen zu diskutieren oder themenfremde Kommentare abzugeben.
- Viele Probleme mit vagen Fragen zu eröffnen.
- Fragen zu stellen, ohne zuerst selbst zu versuchen, das Problem zu lösen.

## Richtlinien zum Melden eines Problems

[Probleme](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden zur Nachverfolgung von Fehlern verwendet. Ein Problem muss eine einzelne auszuführende Aufgabe oder eine Sammlung verwandter Aufgaben sein und muss ein klares Ziel haben.

### Bevor Sie ein Problem melden

Wenn Sie glauben, einen Fehler im Inhalt der MDN Web Docs oder im Aussehen und Design der Website gefunden zu haben, durchsuchen Sie die aktuellen offenen Probleme im [relevanten Repository](/de/docs/MDN/Community/Contributing/Our_repositories) und stellen Sie sicher, dass niemand anderes das Problem bereits gemeldet hat.

### Ein Problem melden

- Abhängig von der Art des von Ihnen entdeckten Problems melden Sie es, indem Sie ein Problem in einem der folgenden Bereiche eröffnen:

  - [Dokumentation](https://github.com/mdn/content/issues/new/choose)
  - [Übersetzung](https://github.com/mdn/translated-content/issues/new/choose)
  - das [Aussehen] der Website (https://github.com/mdn/yari/issues/new/choose)
  - die "Try it" [interaktiven Beispiel](https://github.com/mdn/interactive-examples/issues/new/choose) Sektion
  - [DOM-Beispiele](https://github.com/mdn/dom-examples/issues)
  - [Lernbereich](https://github.com/mdn/learning-area/issues)
  - die [Browser-Kompatibilitäts](https://github.com/mdn/browser-compat-data/issues/new/choose) Informationen

- Wählen Sie die passende Kategorie, um das Problem zu melden. Um zum Beispiel einen Inhaltsfehler zu melden, verwenden Sie die [Vorlage für Inhaltsprobleme](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im `mdn/content` Repository.

- Geben Sie ausreichend Informationen an, während Sie das Problem melden:

  - **Titel des Problems** muss die _erforderliche Aktion_ knapp vermitteln.

  - **Beschreibung des Problems** muss den Fehler und die erforderliche Aktion zur Lösung des Problems klar beschreiben. Es muss auch die Aufgabe oder Unteraufgaben enthalten, die zur Lösung des Problems abgeschlossen werden müssen. Einige weitere Richtlinien sind:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Problembeschreibung anstelle von Kommentaren zum Problem. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Problem mehrere Teile hat. Dies hilft anderen, die ansonsten durch Kommentare zum Problem scrollen müssen, um den Status verschiedener Aufgaben zu ermitteln.
    - Kommentare in einem Problem sollten auf Details oder Kontexte beschränkt sein, die zur Lösung des Problems beitragen.

- Wenn die Informationen, die Sie im Problem zur Verfügung stellen, unvollständig sind, werden Sie möglicherweise später während des [Prozesses der Problemanalyse](#problemspezifische_triagierungsaufgaben) kontaktiert.

- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie das Gespräch zur [MDN-Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):

  - Eine Diskussion muss geführt werden, um ein Problem zu klären.
  - Eine Diskussion beginnt nach dem Öffnen des Problems.
  - Für das Problem gibt es keinen klaren Konsens über die Lösung.
  - Die Anforderungen zur Erledigung der Aufgabe erweitern sich während der Lösung, oder die Arbeit ist nicht klar.

- Bei kleinen Fehlern können Sie [selbst Änderungen vornehmen](#list_of_pages_checked) und einen Pull Request einreichen.

### Erstellen eines Aufgabenlistenproblems

Wenn das von Ihnen geöffnete Problem nicht zur Meldung eines Fehlers dient, sondern eine Reihe von Aufgaben auszuführen, können Sie das Problem als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen.
Erläutern Sie den Kontext oder Grund für die Durchführung der Aufgaben in der Beschreibung.
Stellen Sie sicher, dass Sie alle ausführbaren Aufgaben als Checkliste aufführen.

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

## Richtlinien für die Arbeit an einem Problem

Denken Sie daran, dass von Ihnen erwartet wird, die Arbeit in einem angemessenen Zeitrahmen abzuschließen, wenn Sie ein Problem übernehmen. Wenn Sie eine Woche nach der Zuweisung keinen Fortschritt erzielen können oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und weisen Sie sich von dem Problem ab.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Problems:

1. **Finden Sie ein Problem:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Problemen mit dem Label [`good first issue`, `help wanted`](#setzen_sie_ein_prioritätslabel) oder [`p3`](#überprüfen,_ob_das_problem_gültig_ist). Die meisten Repositories haben Probleme mit diesen Labels. Sie sind willkommen, ein Problem zu durchsuchen und auszuwählen, das für Ihre Fähigkeiten geeignet ist. Eine andere nützliche Anlaufstelle, um nach Problemen zu suchen, an denen Sie arbeiten können, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Probleme aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels` Spalte), die Sie interessieren, filtern. Sehen Sie sich die Beschreibung einiger [Labels](#setzen_sie_ein_prioritätslabel) an, die während des Problemtriageprozesses angewendet werden.

   > [!NOTE]
   > Ein Problem mit dem Label `needs triage` zeigt an, dass das Kernteam der MDN Web Docs das Problem noch nicht überprüft hat, und Sie sollten nicht daran arbeiten.

2. **Weisen Sie sich das Problem selbst zu:** Nachdem Sie ein Problem gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass es niemandem sonst zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie das Problem bearbeiten möchten, und wenn Sie können, [weisen Sie sich das Problem selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Führen Sie die Recherche durch:** Die meisten Probleme erfordern einige Nachforschungen, bevor mit der Arbeit begonnen werden kann.

   - Umreißen Sie die Arbeit, die erledigt werden muss. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Problem gut beschrieben ist und die Arbeit offensichtlich ist, machen Sie weiter und tun Sie es.
   - Wenn das Problem nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, können Sie die Person, die das Problem gepostet hat, erwähnen (@mention) und um weitere Informationen bitten.

4. **Nehmen Sie die Änderungen vor:** Forken und verzweigen Sie das Repository. Machen Sie Ihre Arbeit und öffnen Sie einen [Pull Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Verweisen Sie auf das Problem](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Beschreibung des Pull Requests. Abhängig von den Dateien, die Sie im Pull Request aktualisiert haben, wird Ihrem Pull Request automatisch ein Reviewer zugewiesen. (Die Teams pro Themenbereich sind in der Datei [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) definiert).

   Nachdem Sie den Pull Request geöffnet haben, wenn Sie feststellen, dass Sie keine Zeit haben, Änderungen vorzunehmen oder Feedback zur Überprüfung zu bearbeiten, lassen Sie das Team so schnell wie möglich über einen Kommentar im Pull Request wissen. Dies wird dem Team helfen, einen anderen interessierten Beitragenden zu beauftragen, die Arbeit am Pull Request abzuschließen und das verknüpfte Problem zu schließen.

5. Nachdem Ihr Pull Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Problem als geschlossen markieren. Wenn Sie den Pull Request mit der Formel `Fixes #<issue>` geöffnet haben, wird das Problem automatisch geschlossen, wenn der Pull Request zusammengeführt wird.

### Probleme selbst beheben

Wenn Sie einen Fehler entdecken – sei es ein Problem mit dem Aussehen der Website oder ein Fehler in der Dokumentation – können Sie versuchen, es selbst zu beheben. Erfahren Sie, wie Sie beitragen können, indem Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) durchgehen.

Wenn der Fehler klein ist, wie ein Tippfehler oder eine geringfügige Verbesserung eines Satzes, oder eine unkontroverse Korrektur umfasst, senden Sie einen Pull Request mit den Änderungen.

Für alle anderen Arten von Fehlern beginnen Sie mit der [Eröffnung des Problems](#richtlinien_zum_melden_eines_problems). Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Problem zu arbeiten, und beschreiben Sie, falls möglich, Ihre vorgeschlagene Lösung oder die Schritte zur Behebung des Problems.
Warten Sie darauf, dass das Problem triagiert wird, damit das MDN Web Docs-Team verifizieren kann, dass das Problem legitim ist und Ihre vorgeschlagene Lösung billigt.

> [!NOTE]
> Wenn Sie einen Pull Request öffnen, bevor das Problem triagiert wurde, könnten Ihre Zeit und Mühe verschwendet sein, wenn das verknüpfte Problem als ungültig angesehen wird oder die Lösung nicht mit der von den MDN Web Docs erwarteten übereinstimmt.
> Nachdem das Problem triagiert wurde, weisen Sie es sich selbst zu.

Mit den [Richtlinien zur Arbeit an einem Problem](#description) versuchen Sie, das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, beispielsweise:

- Der Inhalt der MDN Web Docs (auf Englisch) im [content](https://github.com/mdn/content) Repository
- Der übersetzte Inhalt der MDN Web Docs im [translated-content](https://github.com/mdn/translated-content) Repository
- Das Aussehen der MDN Web Docs Website im [yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, die Sie anleiten, wie Sie beitragen können.

## Richtlinien für das Triagieren von Problemen

Wenn Sie ein Maintainer oder Eigentümer in der MDN Web Docs GitHub-Organisation sind, sind Sie verantwortlich für das Triagieren von Problemen in einem oder mehreren MDN Web Docs Repository.

Der Gesamtprozess für das Triagieren umfasst einige [allgemeine](#probleme_selbst_beheben) und einige [problemspezifische Aufgaben](#richtlinien_für_das_triagieren_von_problemen).

### Allgemeine Triagierungsaufgaben

- Wenn ein Problem geöffnet wird, wird das Label `needs triage` automatisch auf das Problem gesetzt. Sie können nach diesem Label suchen, um nach Problemen zu suchen, die [triagiert werden müssen](#richtlinien_für_das_triagieren_von_problemen). Beitragende oder andere sollten nicht an dem Problem arbeiten, bis es triagiert wurde. (Triagierer sollten daran denken, das `needs triage` Label nach dem Triagieren des Problems zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird ein weiteres `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch auf das Problem gesetzt. Dies wird aufgrund der im Problem erwähnten MDN-URL gesetzt. Sie können das inhaltsspezifische Label verwenden, um nach Problemen zu suchen, die in Ihrem spezifischen Themenbereich triagiert werden müssen.

- Wenn ein Problem eine aktive, nicht-en-US-Lokalisierung betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Lokalisierungen werden diese Probleme aufnehmen und triagieren.

- Sie müssen nicht die ganze Zeit aktiv Probleme triagieren. Nehmen Sie sich regelmäßig Zeit, beispielsweise 30 Minuten pro Woche, um Probleme in Ihrem Verantwortungsbereich zu triagieren. Das Triagieren muss nicht Teil eines synchronen Meetings sein oder zur selben Zeit wie jemand anderes erfolgen, sollte aber regelmäßig erfolgen, um sicherzustellen, dass der Rückstand untriagierter Bugs nicht zu hoch wird.

- Neben dem wöchentlichen Triagieren eingehender Probleme überprüfen Sie die Liste der alten Bugs, um zu sehen, ob es welche gibt, die ins Stocken geraten, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Probleme gesetzt, die seit 30 Tagen keine Aktivität mehr haben.
  - Prüfen Sie zugewiesene Probleme, die noch offen sind, um zu sehen, ob die/der Zuweisende Fortschritte macht. Wenn nach einer Woche keine Fortschritte gemacht werden, fragen Sie nach, ob sie/er noch Zeit hat, am Problem zu arbeiten. Wenn eine weitere Woche ohne Fortschritt vergeht, weisen Sie das Problem jemand anderem zu und hinterlassen Sie einen Kommentar, der darauf hinweist, dass das Problem anderen interessierten Beitragenden zur Verfügung gestellt wird.
  - Wenn ein Pull Request zur Behebung des Problems eröffnet wurde, aber seit einer Woche nicht überprüft wurde, geben Sie dem Reviewer einen sanften Ping, um zu fragen, ob er ihn prüfen kann.
  - Wenn ein Pull Request zur Behebung des Problems nach einer Woche auf Feedback zur Überprüfung wartet, fragen Sie den Autor, ob er auf die Überprüfung antworten kann. Wenn eine weitere Woche vergeht, beheben Sie entweder selbst die Überprüfungskommentare, wenn Sie Zeit haben, oder schließen Sie den Pull Request und heben Sie die Zuweisung des zugehörigen Problems auf.

### Problemspezifische Triagierungsaufgaben

Dies sind die Richtlinien, die beim Triagieren jedes Problems befolgt werden sollten.

#### Überprüfen, ob das Problem gültig ist

Dies sind einige der Dinge, die Sie im Hinterkopf behalten sollten, während Sie die Gültigkeit eines Problems überprüfen:

- Prüfen Sie, ob das angesprochene Problem gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob die Auswirkung der Behebung klein oder auf die gesamte Website bezogen sein wird.
- Bewerten Sie, ob für die Behebung des Problems zuerst eine Diskussion erforderlich ist; in diesem Fall weisen Sie den Autor darauf hin, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Prüfen Sie, ob das Problem mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Prüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfen Sie das Problem auf Vollständigkeit der Informationen

Überprüfen Sie jedes Problem anhand der folgenden Checkliste, um sicherzustellen, dass das Problem die beschriebenen Informationen enthält, damit jemand mit der Arbeit am Fehler beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder die URL eines Beispiel-MDN Web Docs-Seite, wenn das Problem auf mehreren Seiten existiert
- Die spezifische Überschrift oder Abschnitt auf der MDN Web Docs-Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unhilfreichen, unvollständigen oder fehlenden Informationen

Wenn keine der oben genannten Informationen vorhanden sind, sollten Sie den Autor des Problems bitten, diese Details bereitzustellen und das `needs info` Label auf das Problem setzen. Fahren Sie mit dem Triagieren des Problems fort, nachdem diese Details bereitgestellt wurden (nachdem das `needs info` Label entfernt wurde). Es ist in Ordnung, bis zu eine Woche auf eine Antwort des Autors zu warten.

#### Setzen Sie ein Prioritätslabel

Für jeden Fehler setzen Sie ein Prioritätslabel anhand der Schwere des Problems, um Personen zu helfen, die an den wichtigsten Problemen oder Bereichen arbeiten möchten.

- Kritisches Problem: Diese Art von Problem muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website erscheint. Diese Art von Problem könnte MDNs Ruf schwer schädigen und/oder Benutzer verletzen. Beispiele für dieses Problem sind ein fehlerhaftes Code-Beispiel, das, wenn es in der Produktion verwendet wird, ein schweres Sicherheitsproblem und unerwünschte Inhalte wie Malware, Obszönitäten, Pornographie, Hassrede oder Links zu solchen Inhalten verursachen könnte.

  - Label: `p0` (wird sofort bearbeitet)

- Großes Problem: Diese Art von Problem könnte die Nützlichkeit einer Seite erheblich beeinträchtigen. Zum Beispiel eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Code-Beispiel, das nicht funktioniert, eine erhebliche Menge an schwer verständlichem und schlecht verfasstem Text oder eine große Anzahl von defekten Links.

  - Labels: `p1` (wird bald bearbeitet) und `p2` (wird bald bearbeitet, aber wichtigeres wird Vorrang haben)

- Kleines Problem: Dies ist eine Art von Verbesserungsproblem, das den bestehenden Inhalt besser machen kann, aber das Lernen nicht beeinträchtigt oder nur einen geringen Einfluss auf das Lernen hat. Da diese Arten von Problemen nicht aktiv geplant werden, ist Hilfe von Beitragenden zur Behebung dieser Probleme willkommen und sehr geschätzt. Das Beheben einiger dieser Probleme kann auch die notwendige Übung für Anfängerbeitragende bieten, die anfangen, sich mit dem Beitragsprozess vertraut zu machen. Beispiele schließen Tippfehler, schlechte Grammatik, einen defekten Link, eine kleine Menge veralteter Informationen oder schlecht verfassten Text oder ein Code-Beispiel, das nicht funktioniert, ein.
  - Labels: `p3` (keine Sichtbarkeit, wann das Problem angegangen wird)

Im Allgemeinen sollten kritische Probleme sofort behoben werden und werden höchstwahrscheinlich vom MDN Web Docs-Personal und den Peers bearbeitet.

#### Fügen Sie hilfreiche Informationen hinzu

Wenn möglich, fügen Sie Informationen hinzu, die den Beitragenden helfen können, das Problem zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlichen gelösten Problemen oder Lesematerialien vorliegen. Ein gut ausgearbeitetes Vorgehen oder Schritte sind insbesondere bei Problemen mit dem Label `good first issue` erforderlich und können neuen Beitragenden helfen, sich schnell einzuarbeiten. Sie können diese Aufgabe auf 5-10 Minuten zeitlich begrenzen.

Zum Beispiel können Sie als Triagierer die folgenden Informationen dem Problem hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen Sie andere Labels

Setzen Sie als Nächstes die folgenden Labels nach Bedarf:

- `effort: small`, `effort: medium`, `effort: large`: Einige Beitragende suchen nach Bugs basierend auf der Zeit und dem Aufwand, den die Behebung des Bugs erfordern wird. Wo möglich, sollten Sie versuchen, eine Schätzung des erforderlichen Aufwands zu geben.
- `good first issue`: Setzen Sie dieses Label auf das Problem, wenn die Behebung wirklich einfach ist und wenn das Beheben des Problems gute Übung für einen Neuling wäre, der sich an den Prozess gewöhnt.
- `help wanted`: Setzen Sie dieses Label, wenn das Problem Hilfe von jemandem benötigt, der das Thema kennt oder mit ihm vertraut ist. Dies ist ein beliebtes Label und einige Beitragende verwenden es, um nach Problemen in ihrer Vertrautheit oder Expertise in Open-Source-Projekten zu suchen, an denen sie arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Problem einen defekten Link zu einer externen Seite beinhaltet.
- `document not written`: Setzen Sie dieses Label, wenn das Problem ein notwendiges Dokument beinhaltet, das noch nicht geschrieben wurde, normalerweise weil ein Link darauf zeigt.
- `needs content update`: Setzen Sie dieses Label, wenn die Problemlösung in einem anderen Repository eine entsprechende Behebung im `mdn/content` Repository benötigt.

  > [!NOTE]
  > Nachdem der Triagierungsprozess abgeschlossen ist, entfernen Sie das `needs triage` Label.
