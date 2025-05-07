---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 7819249f906dcfc59a2c4cb702b80a35b7964842
---

Als Mitwirkender können Sie [Problems melden](#richtlinien_zum_melden_eines_problems) und [an Problemen arbeiten](#richtlinien_für_die_arbeit_an_einem_problem).
Nachdem Sie ein Problem gemeldet haben, wird es einer Priorisierung unterzogen. Das [Priorisieren von Problemen](#richtlinien_zur_priorisierung_von_problemen) wird typischerweise von Personen mit der Rolle eines Maintainers oder Owners durchgeführt.

## Allgemeine Richtlinien für die Teilnahme

Beim Melden eines Problems oder bei der Teilnahme an einer Diskussion in einem Problem sollten Ihre Beiträge stets zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Probleme und Ihre Kommentare in einem Problem konstruktiv und thematisch relevant sind und nicht nur Lärm erzeugen.

Folgendes sollten Sie tun:

- Bevor Sie ein Problem eröffnen, sollten Sie überlegen, ob Sie es mit dem Team oder der Community [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) sollten. Nutzen Sie Diskussionen, um verschiedene Standpunkte zu erhalten und eine vereinbarte Handlungslinie zu finden. Dies hilft, Probleme fokussiert und produktiv zu halten.
- Versuchen Sie nach dem Eröffnen eines Problems, das Problem selbst zu lösen. Lesen Sie unseren [Leitfaden zur Mitwirkung](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Problem zu eröffnen.

Vermeiden Sie Folgendes:

- Probleme zu komplizieren, indem Sie versuchen, mehrere Themen zu diskutieren, oder indem Sie themenfremde Kommentare machen.
- Eine Vielzahl von Problemen mit unklaren Fragen zu eröffnen.
- Fragen zu stellen, ohne zunächst zu versuchen, das Problem selbst zu lösen.

Wenn Sie neue Dokumentationen oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, lesen Sie [Vorschläge für neue Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien zum Melden eines Problems

[Probleme](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Problem muss eine einzelne ausführbare Aufgabe oder eine Sammlung verwandter ausführbarer Aufgaben sein und ein klares Ergebnis haben.

### Bevor Sie ein Problem eröffnen

Wenn Sie glauben, einen Fehler mit dem Inhalt der MDN Web Docs oder dem Aussehen der Website gefunden zu haben, durchsuchen Sie die aktuellen offenen Probleme im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass niemand anderes das Problem bereits gemeldet hat.

### Ein Problem melden

Abhängig von der Art des entdeckten Problems können Sie es melden, indem Sie ein Problem in einem der Haupt- [MDN GitHub-Repositories](/de/docs/MDN/Community/Our_repositories) eröffnen.
Wenn die Informationen, die Sie im Problem angeben, unvollständig sind, werden Sie möglicherweise während des [Priorisierungsprozesses](#überprüfen_der_vollständigkeit_der_informationen_im_problem) um weitere Details gebeten.

Hier sind einige Tipps zum Eröffnen von Problemen:

- Wählen Sie die passende Kategorie, um das Problem zu melden. Zum Beispiel, um einen Inhaltsfehler zu melden, verwenden Sie die [Vorlage für Inhaltsprobleme](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im `mdn/content`-Repository.
- Geben Sie beim Melden eines Problems ausreichende Informationen an:
  - **Titel des Problems** muss das zu ergreifende _Handelnd_ kurz und prägnant vermitteln.
  - **Beschreibung des Problems** muss den Fehler klar beschreiben und die zur Lösung des Problems erforderliche Handlung. Sie muss auch die Aufgaben oder Teilaufgaben auflisten, die zur Lösung des Problems abgeschlossen werden müssen. Einige weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Teilaufgaben durch Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Problembeschreibung und nicht in einem Kommentar zum Problem. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Problem mehrere Teile hat. Dies hilft anderen, die sonst Kommentare zu dem Problem durchsuchen müssten, um den Status verschiedener Aufgaben zu bestimmen.
    - Kommentare in einem Problem sollten sich auf Details oder Kontext beschränken, die zur Lösung des Problems beitragen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verschieben Sie die Konversation zu [MDNs Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Es muss eine Diskussion stattfinden, um ein Problem zu klären.
  - Eine Diskussion beginnt, nachdem das Problem geöffnet wurde.
  - Es gibt keinen klaren Konsens über die Lösung des Problems.
  - Die Anforderungen zum Abschluss der Aufgabe werden während der Bearbeitung erweitert oder die Arbeit ist unklar.
- Für kleinere Fehler können Sie [die Änderungen selbst vornehmen](#beheben_von_problemen_selbst) und eine Pull-Anfrage einreichen.

### Erstellen eines Aufgabenlistenproblems

Wenn das von Ihnen eröffnete Problem nicht dem Melden eines Fehlers dient, sondern der Ausführung einer Reihe von Aufgaben, können Sie das Problem als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen.
Erklären Sie den Kontext oder den Grund für die Durchführung der Aufgaben in der Beschreibung.
Stellen Sie sicher, dass Sie alle ausführbaren Aufgaben als Checkliste auflisten.

Zum Beispiel:

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

## Richtlinien für die Arbeit an einem Problem

Denken Sie daran, dass erwartet wird, dass die Arbeit rechtzeitig abgeschlossen wird, wenn Sie ein Problem übernehmen. Wenn Sie nach einer Woche, in der Sie zugewiesen wurden, keine Fortschritte erzielen können oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und weisen Sie sich selbst von dem Problem ab.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Problems:

1. **Ein Problem finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Problemen mit dem Label [`good first issue`, `help wanted`](#setzen_weiterer_labels) oder [`p3`](#setzen_eines_prioritätslabels). Die meisten Repositories haben Probleme mit diesen Labels. Sie sind herzlich eingeladen, ein Problem zu durchsuchen und auszuwählen, das zu Ihrem Fähigkeitsniveau passt. Ein weiterer nützlicher Ort, um nach Problemen zu suchen, an denen Sie arbeiten können, ist die [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Probleme aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte) filtern, die Sie interessieren. Siehe die Beschreibung einiger [Labels](#setzen_weiterer_labels), die während des Priorisierungsprozesses für Probleme angewendet werden.

   > [!NOTE]
   > Ein Problem mit dem Label `needs triage` zeigt an, dass das Kernteam der MDN Web Docs das Problem noch nicht überprüft hat und Sie nicht an ihm arbeiten sollten.

2. **Ordnen Sie sich das Problem zu:** Nachdem Sie ein Problem gefunden haben, an dem Sie arbeiten möchten, vergewissern Sie sich, dass das Problem niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie gerne an dem Problem arbeiten möchten, und wenn Sie können, [ordnen Sie sich das Problem selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Recherchieren Sie:** Die meisten Probleme benötigen einige Untersuchungen, bevor die Arbeit beginnen kann.

   - Überlegen Sie das Ausmaß der Arbeit, die erledigt werden muss. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Problem gut beschrieben ist und die Arbeit ziemlich offensichtlich ist, fahren Sie fort und erledigen Sie sie.
   - Wenn das Problem nicht gut beschrieben ist und/oder Sie nicht sicher sind, was benötigt wird, dürfen Sie den Ersteller mit @mention um weitere Informationen bitten.

4. **Änderungen vornehmen:** Forken und verästeln Sie das Repository. Führen Sie Ihre Arbeit aus und öffnen Sie eine [Pull-Anfrage](/de/docs/MDN/Community/Pull_requests) im Repository. [Verweisen Sie auf das Problem](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Beschreibung der Pull-Anfrage. Abhängig von den Dateien, die Sie in der Pull-Anfrage aktualisiert haben, wird automatisch ein Gutachter Ihrer Pull-Anfrage zugewiesen. (Teams pro Themenbereich sind in der Datei [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) definiert).

   Nachdem Sie die Pull-Anfrage geöffnet haben, geben Sie in einem Kommentar in der Pull-Anfrage an, wenn Sie keine Zeit mehr haben, Änderungen vorzunehmen oder das Feedback zur Überprüfung zu berücksichtigen. Dies hilft dem Team, einen anderen interessierten Mitwirkenden zuzuweisen, um die Arbeit an der Pull-Anfrage abzuschließen und das verknüpfte Problem zu schließen.

5. Nachdem Ihre Pull-Anfrage überprüft und zusammengeführt wurde, können Sie das verknüpfte Problem als geschlossen kennzeichnen. Wenn Sie die Pull-Anfrage mit dem Text `Fixes #<issue>` eröffnet haben, wird das Problem automatisch geschlossen, wenn die Pull-Anfrage zusammengeführt wird.

### Beheben von Problemen selbst

Wenn Sie einen Fehler feststellen — sei es ein Problem mit dem Aussehen der Website oder ein Fehler in der Dokumentation — können Sie versuchen, ihn selbst zu beheben. Erfahren Sie, wie Sie beitragen können, indem Sie unseren [Leitfaden zur Mitwirkung](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) durchgehen.

Wenn der Fehler klein ist, z. B. ein Tippfehler oder eine geringfügige Satzverbesserung, oder eine unkontroverse Korrektur betrifft, übermitteln Sie eine Pull-Anfrage mit den Änderungen.

Für alle anderen Arten von Fehlern beginnen Sie mit der [Eröffnung des Problems](#richtlinien_zum_melden_eines_problems). Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Problem zu arbeiten, und beschreiben Sie nach Möglichkeit Ihre vorgeschlagene Lösung oder die Schritte zur Behebung des Problems.
Warten Sie, bis das Problem priorisiert wird, damit das MDN Web Docs-Team bestätigen kann, dass das Problem legitim ist und Ihre vorgeschlagene Lösung genehmigt.

> [!NOTE]
> Wenn Sie eine Pull-Anfrage eröffnen, bevor das Problem priorisiert wurde, könnten Ihre Zeit und Mühe verschwendet werden, wenn das verknüpfte Problem als ungültig angesehen wird oder die Lösung nicht mit der vom MDN Web Docs-Team erwarteten übereinstimmt.
> Nachdem das Problem priorisiert wurde, ordnen Sie sich das Problem selbst zu.

Versuchen Sie unter Verwendung der [Richtlinien zur Bearbeitung eines Problems](#richtlinien_für_die_arbeit_an_einem_problem), das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, wie zum Beispiel:

- Der **Inhalt** der MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content)-Repository
- Der **übersetzte Inhalt** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content)-Repository
- Das **Frontend** der MDN Web Docs im [mdn/yari](https://github.com/mdn/yari)-Repository

Jedes Repository enthält nützliche Informationen, um Sie bei Ihrem Beitrag zu unterstützen.
Für weitere Informationen siehe [unsere Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien zur Priorisierung von Problemen

Wenn Sie ein Maintainer oder Owner in der MDN Web Docs GitHub-Organisation sind, sind Sie verantwortlich für die Priorisierung von Problemen in einem oder mehreren MDN Web Docs-Repositories.

Der allgemeine Prozess der Priorisierung umfasst einige [allgemeine](#allgemeine_priorisierungsaufgaben) und einige [problem-spezifische Aufgaben](#problem-spezifische_priorisierungsaufgaben).

### Allgemeine Priorisierungsaufgaben

- Wenn ein Problem geöffnet wird, wird das Label `needs triage` automatisch auf das Problem gesetzt. Sie können nach diesem Label suchen, um nach Problemen zu suchen, die (noch) [priorisiert werden müssen](#problem-spezifische_priorisierungsaufgaben). Mitwirkende oder andere Personen sollten nicht an dem Problem arbeiten, bis es priorisiert wurde. (Priorisierende Personen sollten daran denken, das Label `needs triage` nach der Priorisierung des Problems zu entfernen.)

- Im [mdn/content-Repository](https://github.com/mdn/content/issues) wird zusätzlich ein `Content:`-Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch auf das Problem gesetzt. Dieses wird basierend auf der im Problem genannten MDN-URL gesetzt. Sie können das inhaltsspezifische Label verwenden, um nach Problemen zu suchen, die in Ihrem speziellen Themenbereich priorisiert werden müssen.

- Wenn ein Problem eine aktive, nicht-en-US-Locale betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Sprachversionen werden diese Probleme auswählen und priorisieren.

- Sie müssen nicht die ganze Zeit aktiv Probleme priorisieren. Planen Sie sich Zeit ein, sagen wir 30 Minuten pro Woche, um Probleme regelmäßig in Ihrem Verantwortungsbereich zu priorisieren. Die Priorisierung muss nicht im Rahmen eines synchronen Meetings oder gleichzeitig mit anderen erfolgen, sollte jedoch regelmäßig durchgeführt werden, um sicherzustellen, dass die Rückstände unangemeldeter Fehler nicht zu groß werden.

- Abgesehen von der Priorisierung eingehender Probleme jede Woche, überprüfen Sie die Liste der alten Fehler, um zu sehen, ob es welche gibt, die ins Stocken geraten sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle`-Label wird automatisch auf Probleme gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Probleme, die noch offen sind, um zu sehen, ob der oder die Bearbeiter Fortschritte machen. Wenn nach einer Woche keine Fortschritte gemacht werden, fragen Sie den Bearbeiter, ob er noch Zeit hat, an dem Problem zu arbeiten. Wenn eine weitere Woche ohne Fortschritte vergeht, entziehen Sie ihm die Zuweisung und hinterlassen Sie einen Kommentar, dass Sie das Problem für andere interessierte Mitwirkende freigeben.
  - Wenn eine Pull-Anfrage geöffnet wurde, um das Problem zu beheben, aber seit einer Woche nicht überprüft wurde, geben Sie dem Überprüfenden eine sanfte Erinnerung, ob er oder sie dazu kommen kann.
  - Wenn auf eine Überprüfungskommentare gewartet wird, um behoben zu werden, nachdem eine Woche vergangen ist, fragen Sie den Verfasser, ob er die Überprüfung beantworten kann. Wenn eine weitere Woche vergeht, beheben Sie entweder selbst die Überprüfungskommentare, wenn Sie Zeit haben, oder schließen Sie die Pull-Anfrage und entziehen Sie die Zuweisung des zugehörigen Problems.

### Problem-spezifische Priorisierungsaufgaben

Dies sind die Richtlinien, die beim Priorisieren jedes Problems befolgt werden sollten.

#### Überprüfen, ob das Problem gültig ist

Dies sind einige Dinge, die beim Überprüfen der Gültigkeit eines Problems zu beachten sind:

- Überprüfen Sie, ob das aufgeworfene Problem gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob der Einfluss der Behebung gering oder umfassend sein wird.
- Prüfen Sie, ob die Behebung des Problems eine Diskussion erfordert, in diesem Fall weisen Sie den Autor an, stattdessen eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Problem mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Überprüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfen der Vollständigkeit der Informationen im Problem

Überprüfen Sie jedes Problem anhand der folgenden Checkliste, um sicherzustellen, dass das Problem die beschriebenen Informationen enthält, damit jemand beginnen kann, am Fehler zu arbeiten:

- URL der MDN-Web-Dokumentationsseite mit dem Problem oder URL einer Beispiel-MDN-Web-Dokumentationsseite, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder der Abschnitt auf der MDN-Web-Dokumentationsseite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unhilfreichen, unvollständigen oder fehlenden Information

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Problems bitten, diese Details bereitzustellen, und das `needs info`-Label auf das Problem setzen. Fahren Sie mit der Priorisierung des Problems erst dann fort, nachdem diese Details bereitgestellt wurden (nachdem Sie das `needs info`-Label entfernen können). Es ist in Ordnung, bis zu einer Woche zu warten, um eine Antwort vom Autor zu erhalten.

#### Setzen eines Prioritätslabels

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Schwere des Problems, um Personen zu helfen, die an den wichtigsten Problemen oder Bereichen arbeiten möchten.

- Kritisches Problem: Dieser Problemtyp muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website auftritt. Dieser Problemtyp könnte den Ruf von MDN schwer beschädigen und/oder Nutzern schaden. Beispiele für dieses Problem sind ein falscher Code-Schnipsel, der bei Verwendung in der Produktion ein schwerwiegendes Sicherheitsproblem verursachen könnte, und unerwünschte Inhalte wie Malware, Anstößigkeit, Pornografie, Hassrede oder Links zu solchen Inhalten.

  - Label: `p0` (wird sofort bearbeitet)

- Hauptproblem: Dieser Problemtyp könnte die Nützlichkeit einer Seite ernsthaft beeinträchtigen. Zum Beispiel eine erhebliche Menge an veralteten Informationen, ein komplexes und wichtiges Code-Beispiel, das nicht funktioniert, eine große Menge an schlecht geschriebenem und schwer verständlichem Text oder eine große Anzahl von defekten Links.

  - Labels: `p1` (wird bald bearbeitet) und `p2` (wird bald bearbeitet, aber wichtigere Aufgaben haben Vorrang)

- Geringfügiges Problem: Dies ist eine Art Verbesserungsvorschlag, der den bestehenden Inhalt verbessern kann, das Lernen jedoch nicht beeinträchtigt oder nur einen geringen Einfluss auf das Lernen hat. Da diese Arten von Problemen nicht aktiv geplant werden, sind Beiträge von Mitwirkenden zur Behebung dieser Probleme willkommen und sehr geschätzt. Die Behebung einiger dieser Probleme kann auch den notwendigen Übungsbedarf für Anfänger bieten, die gerade erst mit dem Mitwirkungsprozess vertraut werden. Beispiele umfassen Tippfehler, schlechte Grammatik, einen defekten Link, eine kleine Menge veralteter Informationen oder schlecht geschriebener Text oder ein Code-Schnipsel, der nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Problem bearbeitet wird)

Im Allgemeinen sollten kritische Probleme sofort behoben werden und werden höchstwahrscheinlich von MDN Web Docs-Mitarbeitern und -Kollegen behandelt.

#### Hinzufügen hilfreicher Informationen

Fügen Sie nach Möglichkeit Informationen hinzu, die Mitwirkenden helfen können, das Problem zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlichen gelösten Problemen oder Lesematerialien sein. Ein gut ausgelegter Plan oder Schritte sind besonders bei Problemen erforderlich, die mit dem Label `good first issue` versehen sind und neuen Mitwirkenden schnell auf die Sprünge helfen können. Sie können diese Aufgabe zeitlich auf 5-10 Minuten begrenzen.

Zum Beispiel könnten Sie als Priorisierender folgende Informationen zu dem Problem hinzufügen, das Sie priorisieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen weiterer Labels

Setzen Sie als nächstes die folgenden Labels nach Bedarf:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende möchten nach Fehlern suchen, basierend auf dem Zeit- und Aufwand, der zur Behebung des Fehlers benötigt wird. Wenn möglich, sollten Sie versuchen, einen Schätzwert für den erforderlichen Aufwand anzugeben.
- `good first issue`: Setzen Sie dieses Label auf das Problem, wenn die Behebung des Problems wirklich einfach ist und wenn die Behebung des Problems für einen Neuling, der sich an den Prozess gewöhnt, eine gute Übung bietet.
- `help wanted`: Setzen Sie dieses Label, wenn das Problem Hilfe von jemandem erfordert, der das Thema kennt oder damit vertraut ist. Dies ist ein beliebtes Label und einige Mitwirkende verwenden es, um nach Problemen zu suchen, an denen sie in Open-Source-Projekten in ihren Vertrautheits- oder Fachgebieten arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Problem einen defekten Link zu einer externen Seite betrifft.
- `document not written`: Setzen Sie dieses Label, wenn das Problem ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, in der Regel, weil ein Link darauf verweist.
- `needs content update`: Setzen Sie dieses Label, wenn das Problem in einem anderen Repository behoben werden muss und eine entsprechende Korrektur im `mdn/content`-Repository erfordert.

  > [!NOTE]
  > Nach Abschluss des Priorisierungsprozesses entfernen Sie das `needs triage`-Label.
