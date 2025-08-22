---
title: Erstellen und Bearbeiten von Problemen
slug: MDN/Community/Issues
l10n:
  sourceCommit: 405633ae19118004716a450d26ad3916b0cc86fa
---

Als Beitragende können Sie [Probleme melden](#richtlinien_zum_melden_eines_problems) und an [diesen arbeiten](#richtlinien_für_die_bearbeitung_eines_problems).
Nachdem Sie ein Problem gemeldet haben, wird es einer Priorisierung unterzogen. Die [Priorisierung von Problemen](#richtlinien_zur_priorisierung_von_problemen) wird typischerweise von Personen durchgeführt, die als Maintainer oder Eigentümer zugewiesen sind.

## Allgemeine Richtlinien für die Teilnahme

Wenn Sie ein Problem melden oder an einer Diskussion zu einem Problem teilnehmen, stellen Sie immer sicher, dass Ihre Beiträge zum allgemeinen Fortschritt des Projekts beitragen. Überlegen Sie, ob die Probleme, die Sie eröffnen, und Ihre Kommentare zu einem Problem konstruktiv und themenbezogen sind und nicht nur Lärm verursachen.

Tun Sie Folgendes:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Problem zu melden.
- Wenn es viele Möglichkeiten gibt, ein Problem zu lösen, überlegen Sie, ob Sie es mit dem Team/der Gemeinschaft [besprechen](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen.
  Nutzen Sie Diskussionen, um unterschiedliche Standpunkte zu gewinnen und sich auf einen abgestimmten Handlungsablauf zu einigen. Dies hilft dabei, Probleme fokussiert und produktiv zu halten.
- Nachdem Sie ein Problem gemeldet haben, versuchen Sie, das Problem selbst zu beheben. Es gibt einen Leitfaden zur [Einreichung und Überprüfung von Pull-Requests](/de/docs/MDN/Community/Pull_requests), der alles behandelt, was Sie über den Beitragsprozess wissen müssen.

Vermeiden Sie Folgendes:

- Probleme zu verkomplizieren, indem Sie mehrere Themen diskutieren oder außerhalb des Themas liegende Kommentare abgeben.
- Viele Fragen in vielen offenen Problemen zu stellen, die unklar sind.
- Fragen zu stellen, ohne zunächst selbst zu versuchen, das Problem zu lösen.

Wenn Sie neue Dokumentation oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, lesen Sie [Vorschlagen neuer Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien zum Melden eines Problems

[Probleme](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Problem muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Problem melden

Wenn Sie denken, dass Sie einen Fehler im Inhalt der MDN Web Docs oder im Aussehen und Verhalten der Website gefunden haben, durchsuchen Sie die aktuellen offenen Probleme im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass niemand sonst das Problem gemeldet hat.

### Melden eines Problems

Je nach Art des entdeckten Problems können Sie es melden, indem Sie ein Problem in einem der Haupt- [MDN GitHub-Repositories](/de/docs/MDN/Community/Our_repositories) einreichen.
Wenn die von Ihnen bereitgestellten Informationen im Problem unvollständig sind, werden Sie möglicherweise gebeten, während des [Priorisierungsprozesses für das Problem](#überprüfung_des_problems_auf_vollständigkeit_der_informationen) mehr Details bereitzustellen.

Hier sind einige Tipps zum Öffnen von Problemen:

- Wählen Sie die entsprechende Kategorie aus, um das Problem zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Vorlage für Inhaltsprobleme](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im `mdn/content`-Repository.
- Geben Sie ausreichende Informationen beim Melden des Problems an:
  - **Problem-Titel** muss die _erforderliche Aktion_ prägnant vermitteln.
  - **Problembeschreibung** muss den Fehler und die zur Lösung des Problems erforderliche Handlung eindeutig beschreiben. Es muss auch die Aufgabe oder Unteraufgaben aufgelistet werden, die zur Lösung des Problems abgeschlossen werden müssen. Einige andere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Problembeschreibung, anstatt auf das Problem zu kommentieren. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in der Beschreibung, wenn ein Problem mehrere Teile hat. Dies hilft anderen, die sonst möglicherweise durch Kommentare im Problem scrollen müssten, um den Status verschiedener Aufgaben zu bestimmen.
    - Kommentare zu einem Problem sollten auf Details oder Kontext beschränkt sein, die zur Lösung des Problems beitragen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Konversation auf [MDNs Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Eine Diskussion muss stattfinden, um ein Problem zu klären.
  - Eine Diskussion beginnt nach dem Öffnen des Problems.
  - Das Problem hat keinen klaren Konsens über seine Lösung.
  - Die Anforderungen zur Erledigung der Aufgabe erweitern sich während ihrer Lösung oder die Arbeit ist unklar.
- Bei kleineren Fehlern können Sie [die Änderungen selbst vornehmen](#probleme_selbst_beheben) und einen Pull-Request einreichen.

### Erstellen eines Aufgabenlisten-Problems

Wenn das von Ihnen geöffnete Problem nicht zur Meldung eines Fehlers dient, sondern zur Durchführung einer Reihe von Aufgaben, können Sie das Problem als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
Erklären Sie den Kontext oder Grund für die Durchführung der Aufgaben in der Beschreibung.
Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste auflisten.

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

## Richtlinien für die Bearbeitung eines Problems

Denken Sie daran, dass, wenn Sie ein Problem übernehmen, die Erwartung besteht, dass die Arbeit in einer angemessenen Zeit abgeschlossen wird. Wenn Sie nach der Zuweisung eine Woche lang keinen Fortschritt machen können oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und weisen Sie sich selbst vom Problem ab.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Problems:

1. **Ein Problem finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Problemen mit dem Label [`good first issue`, `help wanted`](#setzen_anderer_labels) oder [`p3`](#setzen_eines_prioritätslabels). Die meisten Repositories haben Probleme mit diesen Labels. Es steht Ihnen frei, ein Problem auszuwählen, das für Ihre Fähigkeiten geeignet ist. Ein weiterer nützlicher Ort, um nach Problemen zu suchen, ist das [MDN Contributor Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Probleme aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte) filtern, die Sie interessieren. Sehen Sie sich die Beschreibung einiger [Labels](#setzen_anderer_labels) an, die während des Priorisierungsprozesses des Problems angewendet werden.

   > [!NOTE]
   > Ein Problem mit dem Label `needs triage` zeigt an, dass das Kernteam der MDN Web Docs das Problem noch nicht überprüft hat und Sie noch nicht daran arbeiten sollten.

2. **Weisen Sie das Problem sich selbst zu:** Nachdem Sie ein Problem gefunden haben, das Sie bearbeiten möchten, stellen Sie sicher, dass das Problem niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, in dem Sie sagen, dass Sie an dem Problem arbeiten möchten, und wenn Sie können, [weisen Sie das Problem sich selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Recherchieren Sie:** Die meisten Probleme erfordern einige Untersuchungen, bevor mit der Arbeit begonnen werden kann.
   - Definieren Sie den Umfang der durchzuführenden Arbeit. Stellen Sie Fragen in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms), wenn Sie welche haben.
   - Wenn das Problem gut beschrieben ist und die Arbeit offensichtlich ist, beginnen Sie sie.
   - Wenn das Problem nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, dürfen Sie den Verfasser @mention und um weitere Informationen bitten.

4. **Änderungen vornehmen:** Forken und verzweigen Sie das Repository. Machen Sie Ihre Arbeit und öffnen Sie einen [Pull-Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Beziehen Sie sich auf das Problem](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Beschreibung des Pull-Requests. Abhängig von den Dateien, die Sie im Pull-Request aktualisiert haben, wird automatisch ein Prüfer Ihrem Pull-Request zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS)-Datei definiert).

   Nachdem Sie den Pull-Request geöffnet haben, lassen Sie das Team in einem Kommentar im Pull-Request so schnell wie möglich wissen, wenn Sie nicht mehr die Zeit haben, Änderungen vorzunehmen oder das Feedback zur Überprüfung zu integrieren. Dies wird dem Team helfen, einen anderen interessierten Mitwirkenden zu beauftragen, die Arbeit am Pull-Request abzuschließen und das verknüpfte Problem zu schließen.

5. Nachdem Ihr Pull-Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Problem als geschlossen markieren. Wenn Sie den Pull-Request mit dem Text `Fixes #<issue>` eröffnet haben, wird das Problem automatisch geschlossen, wenn der Pull-Request zusammengeführt wird.

### Probleme selbst beheben

Wenn Sie einen Fehler entdecken – sei es ein Problem mit dem Aussehen und Verhalten der Website oder ein Fehler in der Dokumentation – können Sie versuchen, ihn selbst in einem [Pull-Request](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (wie ein Tippfehler oder eine kleine Verbesserung eines Satzes) oder eine schnelle Lösung beinhaltet, können Sie einen Pull-Request mit den entsprechenden Änderungen einreichen.

Für jede andere Art von Fehler beginnen Sie mit dem [Öffnen eines Problems](#richtlinien_zum_melden_eines_problems).
Fügen Sie einen Kommentar über Ihre Absicht, an dem Problem zu arbeiten, hinzu und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder Schritte, um es zu beheben.

> [!NOTE]
> Ihre Zeit und Mühe könnten verschwendet werden, wenn Sie einen Pull-Request öffnen, ohne zuerst ein Problem zu öffnen.
> Warten Sie, bis das Problem priorisiert wurde, damit das Team der MDN Web Docs überprüfen kann, dass das Problem legitim ist und Ihre vorgeschlagene Lösung genehmigt.

Verwenden Sie die [Richtlinien zur Bearbeitung eines Problems](#richtlinien_für_die_bearbeitung_eines_problems), um zu versuchen, das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, wie zum Beispiel:

- Den **Inhalt** der MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content)-Repository
- Den **übersetzten Inhalt** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content)-Repository
- Das **Frontend** der MDN Web Docs im [mdn/fred](https://github.com/mdn/fred)-Repository

Jedes Repository enthält nützliche Informationen, die Ihnen zeigen, wie Sie beitragen können.
Für weitere Informationen siehe [unsere Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien zur Priorisierung von Problemen

Wenn Sie ein Maintainer oder Eigentümer in der MDN Web Docs GitHub-Organisation sind, sind Sie für die Priorisierung von Problemen in einem oder mehreren MDN Web Docs-Repositories verantwortlich.

Der Gesamtprozess zur Priorisierung beinhaltet einige [allgemeine](#allgemeine_priorisierungsaufgaben) und einige [problemspezifische Aufgaben](#problemspezifische_priorisierungsaufgaben).

### Allgemeine Priorisierungsaufgaben

- Wenn ein Problem geöffnet wird, wird das Label `needs triage` automatisch auf das Problem gesetzt. Sie können nach diesem Label suchen, um nach Problemen zu suchen, die [priorisiert werden müssen](#problemspezifische_priorisierungsaufgaben). Beitragende oder sonst niemand sollte an dem Problem arbeiten, bis es priorisiert wurde. (Priorisierer sollten daran denken, das Label `needs triage` nach der Priorisierung des Problems zu entfernen.)

- Im [mdn/content-Repository](https://github.com/mdn/content/issues) wird automatisch ein weiteres `Content:`-Label, wie `Content:CSS` oder `Content:WebAPI`, auf das Problem gesetzt. Dies wird basierend auf der in dem Problem erwähnten MDN-URL gesetzt. Sie können das inhaltspezifische Label verwenden, um nach Problemen zu suchen, die in Ihrem spezifischen Themenbereich priorisiert werden müssen.

- Wenn ein Problem eine aktive, nicht-en-US Sprache betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Sprachen werden diese Probleme aufgreifen und priorisieren.

- Sie müssen nicht die ganze Zeit aktiv Probleme priorisieren. Planen Sie Zeit ein, zum Beispiel 30 Minuten pro Woche, um Probleme regelmäßig in Ihrem Verantwortungsbereich zu priorisieren. Die Priorisierung muss nicht als Teil eines synchronen Treffens oder sogar zur gleichen Zeit wie alle anderen erfolgen, aber sie sollte regelmäßig durchgeführt werden, um sicherzustellen, dass der Rückstand an nicht priorisierten Fehlern nicht zu hoch wird.

- Abgesehen von der wöchentlichen Priorisierung eingehender Probleme überprüfen Sie die Liste alter Fehler, um zu sehen, ob es welche gibt, die stocken, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle`-Label wird automatisch auf Probleme gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Probleme, die noch offen sind, um zu sehen, ob der/die Zuweisende Fortschritte macht. Wenn eine Woche nach der Zuweisung kein Fortschritt erzielt wird, fragen Sie, ob diese Person noch Zeit hat, an dem Problem zu arbeiten. Wenn eine weitere Woche ohne Fortschritt verstreicht, entziehen Sie ihnen die Zuweisung und hinterlassen Sie einen Kommentar, dass Sie das Problem für andere interessierte Mitwirkende verfügbar machen.
  - Wenn ein Pull-Request geöffnet wurde, um das Problem zu beheben, aber nach einer Woche noch nicht überprüft wurde, geben Sie dem Prüfer einen sanften Hinweis, ob sie dazu kommen können.
  - Wenn ein Pull-Request zur Behebung des Problems auf die Reaktion auf die Überprüfungskommentare wartet, fragen Sie nach einer Woche, ob der Autor auf ihre Überprüfung reagieren kann. Wenn noch eine Woche verstreicht, entweder beheben Sie die Überprüfungskommentare selbst, wenn Sie Zeit haben, oder schließen Sie den Pull-Request und entziehen Sie die Zuweisung des dazugehörigen Problems.

### Problemspezifische Priorisierungsaufgaben

Dies sind die Richtlinien, die bei der Priorisierung jedes Problems befolgt werden sollten.

#### Überprüfung, ob das Problem gültig ist

Dies sind einige der Dinge, die Sie im Auge behalten sollten, während Sie die Gültigkeit eines Problems überprüfen:

- Überprüfen Sie, ob das aufgeworfene Problem gültig ist und ob die Behebung der Inhalte für die Leser und die Website verbessert.
- Bewerten Sie, ob die Auswirkungen der Behebung gering oder site-weit sind.
- Bewerten Sie, ob die Behebung des Problems zunächst eine Diskussion erfordert, in diesem Fall weisen Sie den Autor darauf hin, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Problem mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Prüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie zu externen Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) konform sind.

#### Überprüfung des Problems auf Vollständigkeit der Informationen

Überprüfen Sie jedes Problem anhand der folgenden Checkliste, um sicherzustellen, dass das Problem die beschriebenen Informationen enthält, damit jemand mit der Arbeit am Fehler beginnen kann:

- URL der betroffenen MDN Web Docs-Seite oder URL einer beispielhaften MDN Web Docs-Seite, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder der Abschnitt auf der MDN Web Docs-Seite, in dem das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unhilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Problems bitten, diese Details bereitzustellen, und das `needs info`-Label auf das Problem setzen. Setzen Sie die Priorisierung des Problems erst fort, nachdem diese Details bereitgestellt wurden (danach können Sie das `needs info`-Label entfernen). Es ist in Ordnung, bis zu einer Woche auf eine Antwort vom Autor zu warten.

#### Setzen eines Prioritätslabels

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Dringlichkeit des Problems, um Personen zu helfen, die an den wichtigsten Problemen oder Bereichen arbeiten möchten.

- Kritisches Problem: Diese Art von Problem muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website erscheint. Diese Art von Problem könnte den Ruf von MDN ernsthaft schädigen und/oder Benutzern schaden. Beispiele für dieses Problem sind ein falscher Code-Snippet, der, wenn er in der Produktion verwendet wird, ein schwerwiegendes Sicherheitsproblem verursachen und unerwünschte Inhalte wie Malware, Obszönität, Pornografie, Hassrede oder Links zu solchen Inhalten schaffen könnte.
  - Label: `p0` (wird sofort behandelt)

- Schwerwiegendes Problem: Diese Art von Problem könnte die Nützlichkeit einer Seite stark beeinträchtigen. Beispiele sind eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine Menge an schlecht geschriebener und schwer zu verstehender Prosa oder eine große Anzahl defekter Links.
  - Labels: `p1` (wird bald behandelt) und `p2` (wird bald behandelt, aber prioritäre Punkte haben Vorrang)

- Kleines Problem: Dies ist eine Art Verbesserungsvorschlag, der vorhandene Inhalte besser machen kann, aber das Lernen nicht beeinträchtigt oder nur einen minimalen Effekt auf das Lernen hat. Da diese Arten von Problemen nicht aktiv geplant werden, ist Hilfe von Mitwirkenden zur Behebung dieser Probleme willkommen und sehr geschätzt. Das Beheben einiger dieser Probleme kann auch Anfängern, die sich mit dem Beitragsprozess vertraut machen, die erforderliche Übung bieten. Beispiele sind Tippfehler, schlechte Grammatik, ein defekter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebene Prosa oder ein Code-Snippet, das nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Problem behandelt wird)

Im Allgemeinen sollten kritische Probleme sofort behoben werden und werden höchstwahrscheinlich vom MDN Web Docs-Team und den Peers behandelt.

#### Hinzufügen hilfreicher Informationen

Fügen Sie nach Möglichkeit Informationen hinzu, die Mitwirkenden helfen können, das Problem zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlich behobenen Problemen oder Lesequellen vorliegen. Ein gut ausgearbeiteter Plan oder Schritte sind insbesondere in Problemen erforderlich, die mit `good first issue` gekennzeichnet sind und neuen Mitwirkenden helfen können, sich schnell einzuarbeiten. Sie können diese Aufgabe auf 5-10 Minuten zeitlich begrenzen.

Beispielsweise können Sie als Priorisierer die folgenden Informationen zu dem von Ihnen priorisierten Problem hinzufügen:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen anderer Labels

Setzen Sie als Nächstes die folgenden Labels angemessen:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende suchen gerne nach Fehlern basierend auf dem Zeit- und Arbeitsaufwand, der erforderlich ist, um den Fehler zu beheben. Daher sollten Sie nach Möglichkeit versuchen, eine Schätzung des erforderlichen Aufwands abzugeben.
- `good first issue`: Setzen Sie dieses Label auf das Problem, wenn die Behebung wirklich einfach ist und das Beheben des Problems eine gute Übung für einen Neuling wäre, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn das Problem Hilfe von jemandem benötigt, der sich mit dem Thema auskennt oder vertraut ist. Dies ist ein beliebtes Label und einige Mitwirkende nutzen es, um nach Problemen zu suchen, an denen sie in Open-Source-Projekten in ihrem Gebietsbereich oder ihrer Fachkenntnis arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Problem einen defekten Link zu einer externen Seite betrifft.
- `document not written`: Setzen Sie dieses Label, wenn das Problem ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, meist weil ein Link darauf verweist.
- `needs content update`: Setzen Sie dieses Label, wenn die Behebung des Problems in einem anderen Repository eine äquivalente Behebung im `mdn/content`-Repository erfordert.

  > [!NOTE]
  > Nach Abschluss des Priorisierungsprozesses entfernen Sie das `needs triage`-Label.
