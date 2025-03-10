---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

Als Beitragende können Sie Issues [melden](#richtlinien_zum_melden_eines_issues) und an ihnen [arbeiten](#richtlinien_zur_bearbeitung_eines_issues).
Nachdem Sie ein Issue gemeldet haben, wird es triagiert. Das [Triagieren von Issues](#richtlinien_für_das_triagieren_von_issues) wird in der Regel von Personen durchgeführt, die die Rolle eines Betreuers oder Eigentümers innehaben.

## Allgemeine Richtlinien für die Teilnahme

Stellen Sie beim Melden eines Issues oder bei der Teilnahme an einer Diskussion in einem Issue sicher, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare konstruktiv und themenbezogen sind und nicht nur Lärm erzeugen.

Tun Sie Folgendes:

- Bevor Sie ein Issue einreichen, überlegen Sie, ob Sie es mit dem Personal oder der Gemeinschaft [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Nutzen Sie Diskussionen, um verschiedene Standpunkte zu gewinnen und sich auf einen gemeinsamen Handlungsweg zu einigen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Versuchen Sie, das Problem selbst zu beheben, nachdem Sie ein Issue eingereicht haben. Lesen Sie unseren [Leitfaden für Beiträge](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu erstellen.

Vermeiden Sie Folgendes:

- Probleme zu verkomplizieren, indem mehrere Themen diskutiert oder nicht themenbezogene Kommentare abgegeben werden.
- Viele Issues zu eröffnen, die vage Fragen stellen.
- Fragen zu stellen, ohne zuerst zu versuchen, das Problem selbst zu lösen.

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Issue einreichen

Wenn Sie denken, Sie haben einen Fehler im Inhalt der MDN Web Docs oder im Aussehen und Gefühl der Website gefunden, suchen Sie in den aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass niemand anderes das Problem bereits gemeldet hat.

### Ein Issue melden

Abhängig vom Typ des entdeckten Problems können Sie es melden, indem Sie ein Issue in einem der Haupt-[MDN GitHub-Repositories](/de/docs/MDN/Community/Our_repositories) einreichen.
Wenn die von Ihnen im Issue bereitgestellten Informationen unvollständig sind, werden Sie möglicherweise gebeten, während des [Triagierungsprozesses](#überprüfung_der_vollständigkeit_der_informationen_im_issue) mehr Details bereitzustellen.

Hier sind einige Hinweise zum Öffnen von Issues:

- Wählen Sie die passende Kategorie aus, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie das [Content Issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) Template im `mdn/content` Repository.
- Stellen Sie beim Melden des Issues genügend Informationen bereit:
  - **Titel des Issues** muss die _erforderliche Aktion_ kurz und prägnant vermitteln.
  - **Beschreibung des Issues** muss den Fehler klar beschreiben und die erforderliche Aktion zur Lösung des Problems angeben. Sie muss auch die Aufgabe oder Unteraufgaben auflisten, die abgeschlossen werden müssen, um das Problem zu lösen. Einige weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben anhand von Checklisten anzuzeigen.
    - Aktualisieren Sie den Status einer Aufgabe in der Issues-Beschreibung anstatt in den Kommentaren des Issues. Verwenden Sie [Task-Listen](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, die andernfalls durch Kommentare im Issue scrollen müssen, um den Status verschiedener Aufgaben zu bestimmen.
    - Kommentare in einem Issue sollten sich auf Details oder Kontext beschränken, die bei der Lösung des Issues helfen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Konversation zu [MDNs Diskussionen auf GitHub](https://github.com/orgs/mdn/discussions):
  - Eine Diskussion muss stattfinden, um ein Issue zu klären.
  - Eine Diskussion beginnt nach dem Öffnen des Issues.
  - Für das Issue besteht kein klarer Konsens über seine Lösung.
  - Die Anforderungen zur Vervollständigung der Aufgabe erweitern sich, während sie gelöst wird, oder die Arbeit ist unklar.
- Für kleinere Fehler können Sie [die Änderungen selbst vornehmen](#probleme_selbst_beheben) und einen Pull-Request einreichen.

### Ein Task-Listen-Issue erstellen

Wenn das von Ihnen eröffnete Issue nicht dazu dient, einen Fehler zu melden, sondern um eine Reihe von Aufgaben durchzuführen, können Sie das Issue als [Task-Liste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen.
Erklären Sie den Kontext oder Grund für die Durchführung der Aufgaben in der Beschreibung.
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

Denken Sie daran, dass, wenn Sie ein Issue übernehmen, die Erwartung besteht, dass die Arbeit zeitnah abgeschlossen wird. Wenn Sie eine Woche nach der Zuweisung keinen Fortschritt machen können oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und weisen Sie sich von dem Issue ab.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie beitragen möchten, suchen Sie nach Issues mit dem Label [`good first issue`, `help wanted`](#weitere_labels_setzen) oder [`p3`](#ein_prioritätslabel_setzen). Die meisten Repositories haben Issues mit diesen Labels. Sie sind willkommen, ein Thema zu durchsuchen und zu wählen, das zu Ihrem Fähigkeitsniveau passt. Ein weiterer nützlicher Ort, um nach Issues zu suchen, an denen Sie arbeiten können, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte), die Sie interessieren, filtern. Siehe die Beschreibung einiger der [Labels](#weitere_labels_setzen), die während des Issues-Triage- Prozesses verwendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` bedeutet, dass das Kernteam der MDN Web Docs das Issue noch nicht überprüft hat, und Sie sollten noch nicht daran arbeiten.

2. **Weisen Sie sich das Issue zu:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass das Issue niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie an dem Issue arbeiten möchten, und falls möglich, [weisen Sie sich das Issue selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Führen Sie die Recherche durch:** Die meisten Issues benötigen einige Untersuchungen, bevor mit der Arbeit begonnen werden kann.

   - Umreißen Sie die Arbeit, die zu erledigen ist. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit ziemlich offensichtlich ist, machen Sie einfach weiter.
   - Wenn das Issue nicht gut beschrieben ist und/oder nicht klar ist, was benötigt wird, @erwähnen Sie den Verfasser und bitten Sie um weitere Informationen.

4. **Nehmen Sie die Änderungen vor:** Forken und verzweigen Sie das Repository. Führen Sie Ihre Arbeit durch und erstellen Sie einen [Pull-Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Referenzieren Sie das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Pull-Request-Beschreibung. Abhängig von den Dateien, die Sie im Pull-Request aktualisiert haben, wird automatisch ein Prüfer zu Ihrem Pull-Request zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   Nachdem Sie den Pull-Request erstellt haben, falls Sie feststellen, dass Sie keine Zeit mehr haben, Änderungen vorzunehmen oder Feedback zur Überprüfung einzubauen, informieren Sie das Team so schnell wie möglich in einem Kommentar im Pull-Request. Dies hilft dem Team, einen anderen interessierten Mitwirkenden zuzuweisen, um die Arbeit am Pull-Request abzuschließen und das verknüpfte Issue zu schließen.

5. Nachdem Ihr Pull-Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Issue als geschlossen markieren. Wenn Sie den Pull-Request mit der Verbatim-Darstellung `Fixes #<issue>` erstellt haben, wird das Issue automatisch geschlossen, wenn der Pull-Request zusammengeführt wird.

### Probleme selbst beheben

Wenn Ihnen ein Fehler auffällt — sei es ein Problem mit dem Aussehen der Website oder ein Fehler in der Dokumentation — können Sie versuchen, ihn selbst zu beheben. Erfahren Sie mehr darüber, wie Sie beitragen können, indem Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) durchgehen.

Wenn der Fehler klein ist, wie z.B. ein Tippfehler oder eine kleinere Satzverbesserung, oder eine unstrittige Korrektur beinhaltet, erstellen Sie einen Pull-Request mit den Änderungen.

Für alle anderen Arten von Fehlern beginnen Sie damit, [das Issue zu öffnen](#richtlinien_zum_melden_eines_issues). Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Issue zu arbeiten und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder die Schritte zur Behebung des Problems.
Warten Sie, bis das Issue triagiert wurde, damit das MDN Web Docs Team das Problem überprüfen kann und Ihre vorgeschlagene Lösung genehmigt.

> [!NOTE]
> Wenn Sie einen Pull-Request einreichen, bevor das Issue triagiert wurde, könnten Ihre Zeit und Mühe verschwendet werden, wenn das verknüpfte Issue als ungültig erachtet wird oder die Lösung nicht der von MDN Web Docs erwarteten entspricht.
> Nachdem das Issue triagiert wurde, weisen Sie sich das Issue zu.

Unter Verwendung der [Richtlinien zur Bearbeitung eines Issues](#richtlinien_zur_bearbeitung_eines_issues) versuchen Sie das Problem zu lösen, indem Sie die geeignete Quelle aktualisieren, wie:

- Der **Inhalt** der MDN Web Docs (in Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Der **übersetzte Inhalt** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** der MDN Web Docs im [mdn/yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, die Sie anleiten, wie Sie beitragen können.
Weitere Informationen finden Sie in [unseren Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien für das Triagieren von Issues

Wenn Sie ein Betreuer oder Eigentümer in der MDN Web Docs GitHub-Organisation sind, sind Sie für das Triagieren von Issues in einem oder mehreren MDN Web Docs Repositories verantwortlich.

Der gesamte Prozess des Triagierens umfasst einige [allgemeine](#allgemeine_triagieraufgaben) und einige [issue-spezifische Aufgaben](#issue-spezifische_triagieraufgaben).

### Allgemeine Triagieraufgaben

- Wenn ein Issue eröffnet wird, wird das Label `needs triage` automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#issue-spezifische_triagieraufgaben). Mitwirkende oder sonst jemand sollte nicht an dem Issue arbeiten, bevor es triagiert wurde. (Triager sollten daran denken, das `needs triage` Label nach dem Triagieren des Issues zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird ein zusätzliches `Content:` Label wie `Content:CSS` oder `Content:WebAPI` automatisch auf das Issue gesetzt. Dieses Label wird basierend auf der MDN-URL gesetzt, die im Issue erwähnt wird. Sie können das auf Inhalte bezogene Label verwenden, um nach Issues zu suchen, die in Ihrem speziellen Themenbereich triagiert werden müssen.

- Wenn ein Issue ein aktives, nicht-en-US-Gebietsschema betrifft, setzen Sie das entsprechende Label, wie z.B. `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Gebietsschemas werden diese Issues aufnehmen und triagieren.

- Sie müssen nicht immer aktiv Issues triagieren. Setzen Sie sich regelmäßig, zum Beispiel jede Woche 30 Minuten, Zeit, um Issues in Ihrem Verantwortungsbereich zu triagieren. Triagieren muss nicht als Teil eines synchronen Treffens oder zur gleichen Zeit wie alle anderen durchgeführt werden, aber es sollte regelmäßig getan werden, um sicherzustellen, dass der Rückstand an untriagierten Fehlern nicht zu hoch wird.

- Neben dem wöchentlichen Triagieren eingehender Issues überprüfen Sie die Liste der alten Fehler, um zu sehen, ob es welche gibt, die ins Stocken geraten sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Issues, die immer noch offen sind, um zu sehen, ob der Bearbeiter Fortschritte macht. Wenn nach einer Woche der Zuweisung kein Fortschritt erzielt wurde, fragen Sie sie, ob sie noch Zeit haben, an dem Issue zu arbeiten. Wenn noch eine Woche vergeht, ohne dass Fortschritte gemacht werden, heben Sie die Zuweisung auf und hinterlassen einen Kommentar, dass Sie das Issue für andere interessierte Mitwirkende verfügbar machen.
  - Wenn ein Pull-Request zur Behebung des Issues eingereicht wurde, der jedoch seit einer Woche nicht mehr überprüft wurde, geben Sie dem Prüfer einen sanften Anstoß, um zu fragen, ob er ihn sich ansehen kann.
  - Wenn ein Pull-Request zur Behebung des Issues auf die Bearbeitung von Überarbeitungskommentaren nach einer Woche wartet, dann fragen Sie den Autor, ob er auf seine Überarbeitung antworten kann. Wenn noch eine Woche vergeht, entweder die Überarbeitungskommentare selbst beheben, wenn Sie Zeit haben, oder den Pull-Request schließen und das zugehörige Issue abweisen.

### Issue-spezifische Triagieraufgaben

Dies sind die Richtlinien, die beim Triagieren jedes Issues zu befolgen sind.

#### Überprüfung, ob das Issue gültig ist

Dies sind einige der Dinge, die Sie beim Überprüfen der Gültigkeit eines Issues im Auge behalten sollten:

- Prüfen Sie, ob das problematisch gemachte Issue gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob die Auswirkungen der Behebung klein oder site-weit sind.
- Bewerten Sie, ob die Behebung des Issues zuerst eine Diskussion benötigt, in welchem Fall Sie den Autor darauf hinweisen, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Issue mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Überprüfen Sie, ob die Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfung der Vollständigkeit der Informationen im Issue

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Arbeit am Fehler beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder URL einer Beispiel-MDN-Web-Docs-Seite, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder der Abschnitt auf der MDN-Web-Docs-Seite, in dem das Problem gefunden wurde
- Eine klare Beschreibung der inkorrekten, unhilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen und das `needs info` Label auf das Issue setzen. Fahren Sie mit dem Triagieren des Issues erst fort, nachdem diese Details bereitgestellt wurden (nachdem Sie können Sie das `needs info` Label entfernen). Es ist in Ordnung, eine Woche zu warten, um eine Antwort vom Autor zu erhalten.

#### Ein Prioritätslabel setzen

Setzen Sie für jeden Fehler ein Prioritätslabel basierend auf der Schwere des Issues, um Personen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Diese Art von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website erscheint. Diese Art von Issue könnte den Ruf von MDN schwer beschädigen und/oder den Nutzen von Nutzern stark beeinträchtigen. Beispiele für diese Art von Issue beinhalten ein falsches Codesnippet, das in der Produktion verwendet, ein schwerwiegendes Sicherheitsproblem hervorrufen könnte und unerwünschte Inhalte enthält wie Malware, Obszönitäten, Pornografie, Hassreden oder Links zu solchen Inhalten.

  - Label: `p0` (wird sofort behandelt)

- Großes Problem: Diese Art von Issue könnte die Nützlichkeit einer Seite stark beeinträchtigen. Zum Beispiel eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, erhebliche Mengen schwer verständlichen Prosa Textes oder eine große Anzahl defekter Links.

  - Labels: `p1` (wird bald behandelt) und `p2` (wird bald behandelt, aber vorrangigere Aufgaben haben Vorrang)

- Kleines Problem: Dies ist eine diese Art von Verbesserungs-Issue, die den vorhandenen Inhalt besser machen können aber nicht die Lernerfahrung beeinträchtigen oder nur einen kleinen Effekt auf das Lernen haben. Da diese Art von Issues nicht aktiv geplant werden, sind Beiträge von Mitwirkenden zur Behebung dieser Issues willkommen und sehr geschätzt. Die Behebung einiger dieser Issues kann auch den notwendigen Übungsbedarf für Anfängermitglieder bieten, die sich mit dem Prozess des Beitragens vertraut machen. Beispiele umfassen Tippfehler, schlechte Grammatik, einen defekten Link, eine kleine Menge veralteter Informationen oder schlecht geschriebener Prosa, oder ein Codesnippet, das nicht funktioniert.
  - Labels: `p3` (keine Sicht darauf, wann das Problem behandelt wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich von MDN Web Docs Mitarbeitern und Kollegen bearbeitet.

#### Nützliche Informationen hinzufügen

Fügen Sie nach Möglichkeit Informationen hinzu, die Mitwirkenden helfen können, das Issue zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlichen behobenen Issues oder Lesematerialien sein. Ein gut ausgearbeiteter Plan oder Schritte sind besonders erforderlich bei Issues, die mit `good first issue` gekennzeichnet sind und können neuen Mitwirkenden helfen, sich schnell zu orientieren. Sie können diese Aufgabe auf 5-10 Minuten zeitlich festlegen.

Zum Beispiel können Sie als Triager die folgenden Informationen zum Issue hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Weitere Labels setzen

Legen Sie anschließend folgende Labels nach Bedarf fest:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende suchen gerne nach Fehlern basierend auf der Zeit und dem Aufwand, die für die Behebung des Fehlers erforderlich sind. Wenn möglich, sollten Sie versuchen, einen Schätzbetrag des benötigten Aufwands bereitzustellen.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung des Issues wirklich einfach ist und wenn die Behebung des Issues eine gute Praxis für einen Neuling darstellen würde, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn das Issue Unterstützung von jemandem erfordert, der das Thema kennt oder damit vertraut ist. Dies ist ein beliebtes Label und einige Mitwirkende verwenden es, um nach Issues zu suchen, an denen sie in Open-Source-Projekten in ihren Bereichen der Vertrautheit oder Expertise arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen defekten Link zu einer externen Seite umfasst.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein notwendiges Dokument beinhaltet, das noch nicht geschrieben wurde, normalerweise weil ein Link darauf zeigt.
- `needs content update`: Setzen Sie dieses Label, wenn die Fehlerbehebung in einem anderen Repository eine entsprechende Behebung im `mdn/content` Repository erfordert.

  > [!NOTE]
  > Nachdem der Triagierungsprozess abgeschlossen ist, entfernen Sie das `needs triage` Label.
