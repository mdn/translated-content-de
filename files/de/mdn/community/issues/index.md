---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

Als Mitwirkender können Sie [ein Problem melden](#richtlinien_zum_melden_eines_problems) und [an Problemen arbeiten](#richtlinien_zum_arbeiten_an_einem_problem).
Nachdem Sie ein Problem gemeldet haben, wird es triagiert. Die [Triagierung von Problemen](#richtlinien_zur_triagierung_von_problemen) wird typischerweise von Personen durchgeführt, denen die Rolle eines Maintainers oder Eigentümers zugewiesen wurde.

## Allgemeine Richtlinien für die Teilnahme

Beim Melden eines Problems oder der Teilnahme an einer Diskussion in einem Problem sollten Sie stets sicherstellen, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Probleme und Ihre Kommentare in einem Problem konstruktiv und thematisch relevant sind und nicht nur Lärm erzeugen.

Tun Sie Folgendes:

- Bevor Sie ein Problem melden, überlegen Sie, ob Sie es mit dem Personal oder der Community [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Nutzen Sie Diskussionen, um verschiedene Standpunkte einzuholen und sich auf einen vereinbarten Handlungsweg zu einigen. Dies hilft, Probleme fokussiert und produktiv zu halten.
- Versuchen Sie nach dem Melden eines Problems, das Problem selbst zu lösen. Lesen Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Problem zu melden.

Vermeiden Sie Folgendes:

- Probleme zu verkomplizieren, indem Sie mehrere Themen diskutieren oder nicht themenbezogene Kommentare abgeben.
- Viele Probleme mit unklaren Fragen zu eröffnen.
- Fragen zu stellen, ohne zuerst zu versuchen, das Problem selbst zu lösen.

## Richtlinien zum Melden eines Problems

[Probleme](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Bugs zu verfolgen. Ein Problem muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Problem melden

Wenn Sie glauben, einen Fehler im Inhalt von MDN Web Docs oder im Aussehen der Website gefunden zu haben, suchen Sie in den aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories), um sicherzustellen, dass niemand anderes das Problem bereits gemeldet hat.

### Ein Problem melden

Je nach Art des entdeckten Problems können Sie es melden, indem Sie ein Issue auf einem der Haupt- [MDN GitHub-Repositories](/de/docs/MDN/Community/Our_repositories) erstellen.
Wenn die von Ihnen bereitgestellten Informationen im Issue unvollständig sind, werden Sie möglicherweise gebeten, während des [Triagierungsprozesses des Issues](#überprüfen_der_vollständigkeit_der_informationen_im_problem) weitere Details bereitzustellen.

Hier sind einige Tipps zum Öffnen von Issues:

- Wählen Sie die richtige Kategorie, um das Problem zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Content Issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml)- Vorlage im `mdn/content` Repository.
- Geben Sie ausreichende Informationen beim Melden des Problems an:
  - Der **Titel des Problems** muss die _erforderliche Aktion_ prägnant vermitteln.
  - Die **Problembeschreibung** muss den Fehler und die zur Lösung des Problems erforderlichen Maßnahmen klar beschreiben. Es muss auch die Aufgabe oder Unteraufgaben enthalten, die zur Lösung des Problems abgeschlossen werden müssen. Einige weitere Richtlinien beinhalten:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Problembeschreibung anstatt im Kommentarfeld. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Problem mehrere Teile hat. Dies hilft anderen, die sonst durch Kommentare scrollen müssten, um den Status verschiedener Aufgaben zu ermitteln.
    - Kommentare in einem Problem sollten auf Details oder Kontext beschränkt sein, die helfen, das Problem zu lösen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Diskussion auf [MDNs Diskussionen auf GitHub](https://github.com/orgs/mdn/discussions):
  - Es muss eine Diskussion geführt werden, um ein Problem zu klären.
  - Eine Diskussion beginnt, nachdem das Problem eröffnet wurde.
  - Es gibt keinen klaren Konsens zur Lösung des Problems.
  - Die Anforderungen zur Erledigung der Aufgabe weiten sich aus, während sie gelöst wird, oder die Arbeit ist unklar.
- Bei kleinen Fehlern können Sie [die Änderungen selbst vornehmen](#probleme_selbst_beheben) und eine Pull-Anfrage einreichen.

### Erstellen eines Aufgabenlisten-Problems

Wenn das eröffnete Problem nicht dazu dient, einen Fehler zu melden, sondern eine Reihe von Aufgaben auszuführen, können Sie das Problem als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen.
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

## Richtlinien zum Arbeiten an einem Problem

Denken Sie daran, dass, wenn Sie sich einem Problem widmen, erwartet wird, dass die Arbeit zeitnah abgeschlossen wird. Wenn Sie nach Zuweisung für eine Woche keinen Fortschritt machen können oder nicht mehr in der Lage sind, die erforderliche Aufgabe abzuschließen, hinterlassen Sie einen Kommentar und weisen Sie sich selbst vom Problem ab.

Dies sind die allgemeinen Schritte zum Arbeiten an einem Problem:

1. **Finden Sie ein Problem:** Wenn Sie beitragen möchten, suchen Sie nach Problemen mit dem Label [`good first issue`, `help wanted`](#setzen_anderer_labels) oder [`p3`](#setzen_eines_prioritätslabels). Die meisten Repositories haben Probleme mit diesen Labels. Sie sind herzlich eingeladen, ein Problem auszuwählen, das zu Ihren Fähigkeiten passt. Eine weitere nützliche Anlaufstelle, um nach Problemen zu suchen, an denen Sie arbeiten können, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Probleme aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen filtern (`Labels`-Spalte), die Sie interessieren. Sehen Sie die Beschreibung einiger Labels, die während des Triagierungsprozesses angewendet werden.

   > [!NOTE]
   > Ein Problem mit dem Label `needs triage` zeigt an, dass das MDN Web Docs Kernteam das Problem noch nicht überprüft hat und Sie an ihm noch nicht arbeiten sollten.

2. **Weisen Sie sich das Problem selbst zu:** Nachdem Sie ein Problem gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass das Problem niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie an dem Problem arbeiten möchten, und wenn Sie es können, [weisen Sie sich das Problem selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Führen Sie die Recherche durch:** Die meisten Probleme erfordern einige Nachforschungen, bevor mit der Arbeit begonnen werden kann.

   - Erkunden Sie den Umfang der Arbeit, die erledigt werden muss. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Problem gut beschrieben ist und die Arbeit ziemlich offensichtlich ist, erledigen Sie sie fort.
   - Wenn das Problem nicht gut beschrieben ist und/oder Sie nicht sicher sind, was benötigt wird, erwähnen Sie den Autor und bitten Sie um weitere Informationen.

4. **Nehmen Sie die Änderungen vor:** Forken und verzweigen Sie das Repository. Führen Sie Ihre Arbeit durch und öffnen Sie eine [Pull-Anfrage](/de/docs/MDN/Community/Pull_requests) im Repository. [Beziehen Sie sich auf das Problem](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Beschreibung der Pull-Anfrage. Abhängig von den Dateien, die Sie in der Pull-Anfrage aktualisiert haben, wird automatisch ein Prüfer zu Ihrer Pull-Anfrage zugewiesen. (Themenbezogene Teams sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   Wenn Sie die Pull-Anfrage geöffnet haben und feststellen, dass Sie keine Zeit mehr haben, um Änderungen vorzunehmen oder Feedback zu implementieren, lassen Sie das Team so schnell wie möglich in einem Kommentar in der Pull-Anfrage wissen. So kann das Team einen anderen interessierten Mitwirkenden beauftragen, die Arbeit an der Pull-Anfrage abzuschließen und das verknüpfte Problem zu schließen.

5. Nachdem Ihre Pull-Anfrage überprüft und zusammengeführt wurde, können Sie das verknüpfte Problem als abgeschlossen markieren. Wenn Sie die Pull-Anfrage mit dem Vermerk `Fixes #<issue>` geöffnet haben, wird das Problem automatisch geschlossen, wenn die Pull-Anfrage zusammengeführt wird.

### Probleme selbst beheben

Wenn Sie einen Fehler bemerken – sei es ein Problem mit dem Erscheinungsbild der Website oder ein Fehler in der Dokumentation –, können Sie versuchen, ihn selbst zu beheben. Erfahren Sie, wie Sie beitragen können, indem Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) durchgehen.

Bei kleinen Fehlern, wie z. B. einem Tippfehler oder einer geringfügigen Satzverbesserung, oder einer unkontroversen Korrektur, reichen Sie eine Pull-Anfrage mit den Änderungen ein.

Bei allen anderen Arten von Fehlern beginnen Sie mit dem [Öffnen des Problems](#richtlinien_zum_melden_eines_problems). Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Problem zu arbeiten, und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder Schritte zur Behebung des Problems.
Warten Sie, bis das Problem triagiert ist, damit das MDN Web Docs Team überprüfen kann, dass das Problem legitim ist und Ihre vorgeschlagene Lösung genehmigen kann.

> [!NOTE]
> Wenn Sie eine Pull-Anfrage öffnen, bevor das Problem triagiert wurde, könnte Ihre Zeit und Mühe verschwendet sein, wenn das verknüpfte Problem als ungültig erachtet wird oder die Lösung nicht der von dem MDN Web Docs Team erwarteten entspricht.
> Nachdem das Problem triagiert wurde, weisen Sie sich das Problem selbst zu.

Verwenden Sie die [Richtlinien zum Arbeiten an einem Problem](#richtlinien_zum_arbeiten_an_einem_problem), um zu versuchen, das Problem durch Aktualisierung der entsprechenden Quelle zu beheben, wie zum Beispiel:

- Der **Inhalt** von MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Der **übersetzte Inhalt** von MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** von MDN Web Docs im [mdn/yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, die Sie darüber informieren, wie Sie beitragen können.
Weitere Informationen finden Sie in [unseren Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien zur Triagierung von Problemen

Wenn Sie ein Maintainer oder Eigentümer in der GitHub-Organisation der MDN Web Docs sind, sind Sie verantwortlich für die Triagierung von Problemen in einem oder mehreren MDN Web Docs Repositorys.

Der gesamte Triagierungsprozess umfasst einige [allgemeine](#allgemeine_triagierungsaufgaben) und einige [problem-spezifische Aufgaben](#problem-spezifische_triagierungsaufgaben).

### Allgemeine Triagierungsaufgaben

- Wenn ein Problem geöffnet wird, wird das Label `needs triage` automatisch gesetzt. Sie können nach diesem Label suchen, um nach Problemen zu suchen, die [triagiert werden müssen](#problem-spezifische_triagierungsaufgaben). Mitwirkende oder andere Personen sollten an dem Problem nicht arbeiten, bis es triagiert wurde. (Triagierende sollten daran denken, das `needs triage` Label nach der Triagierung des Problems zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird automatisch ein zusätzliches `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, gesetzt. Dieses wird basierend auf der in dem Problem erwähnten MDN-URL gesetzt. Sie können das inhaltsspezifische Label verwenden, um nach Problemen zu suchen, die in Ihrem spezifischen Themenbereich triagiert werden müssen.

- Wenn sich ein Problem auf eine aktive, nicht englischsprachige Lokalisierung bezieht, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Lokalisierungen werden diese Probleme aufnehmen und triagieren.

- Sie müssen nicht ständig Probleme triagieren. Planen Sie Zeit ein, z. B. 30 Minuten pro Woche, um regelmäßig Probleme in Ihrem Verantwortungsbereich zu triagieren. Triagierung muss nicht bei einem synchronen Meeting oder zur gleichen Zeit wie alle anderen erfolgen, aber sie sollte regelmäßig durchgeführt werden, damit der Rückstand an untriagierten Bugs nicht zu hoch wird.

- Neben der wöchentlichen Triagierung eingehender Probleme überprüfen Sie die Liste der alten Bugs, um festzustellen, ob es welche gibt, die feststecken, geschlossen werden müssen oder nicht mehr relevant sind. Das Label `idle` wird automatisch auf Probleme gesetzt, bei denen nach 30 Tagen keine Aktivitäten mehr stattgefunden haben.
  - Überprüfen Sie zugewiesene Probleme, die noch offen sind, um zu sehen, ob der Zuweisungsempfänger Fortschritte macht. Wenn nach einer Woche keine Fortschritte gemacht wurden, fragen Sie sie, ob sie noch Zeit haben, an dem Problem zu arbeiten. Wenn eine weitere Woche ohne Fortschritt vergeht, weisen Sie sie ab und hinterlassen Sie einen Kommentar, der besagt, dass Sie das Problem für andere interessierte Mitwirkende verfügbar machen.
  - Wenn eine Pull-Anfrage zur Behebung des Problems geöffnet wurde, jedoch eine Woche lang nicht überprüft wurde, senden Sie dem Prüfer eine sanfte Erinnerung, ob er sie ansehen kann.
  - Wenn eine Pull-Anfrage zur Behebung des Problems auf die Bearbeitung von Überprüfungskommentaren wartet und diese nach einer Woche nicht bearbeitet wurden, fragen Sie den Autor, ob er auf seine Überprüfung antworten kann. Wenn eine weitere Woche vergeht, entweder die Überprüfungskommentare selbst korrigieren, wenn Sie Zeit haben, oder die Pull-Anfrage schließen und das zugehörige Problem abweisen.

### Problem-spezifische Triagierungsaufgaben

Dies sind die Richtlinien, die beim Triagieren eines jeden Problems beachtet werden sollten.

#### Überprüfen, ob das Problem gültig ist

Hier sind einige Dinge, die während der Überprüfung der Gültigkeit eines Problems zu beachten sind:

- Überprüfen Sie, ob das aufgeworfene Problem gültig ist und ob die Korrektur den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob die Auswirkungen der Korrektur klein oder auf die ganze Website ausgedehnt sind.
- Bewerten Sie, ob die Lösung des Problems zuerst einer Diskussion bedarf, in diesem Fall weisen Sie den Autor darauf hin, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Problem mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Überprüfen Sie, ob Vorschläge zur Hinzufügung von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfen der Vollständigkeit der Informationen im Problem

Überprüfen Sie jedes Problem anhand der folgenden Checkliste, um sicherzustellen, dass das Problem die beschriebenen Informationen enthält, damit jemand mit der Arbeit an dem Bug beginnen kann:

- URL der MDN Web Docs Seite mit dem Problem oder URL einer Beispielseite der MDN Web Docs, wenn das Problem auf mehreren Seiten auftritt
- Die bestimmte Überschrift oder der Abschnitt auf der MDN Web Docs Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, nicht hilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Problems bitten, diese Details bereitzustellen, und das `needs info` Label zum Problem hinzufügen. Fahren Sie erst mit der Triagierung fort, nachdem diese Details bereitgestellt wurden (nachdem Sie das `needs info` Label entfernen können). Es ist in Ordnung, bis zu einer Woche auf eine Antwort des Autors zu warten.

#### Setzen eines Prioritätslabels

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Schwere des Problems, um Personen zu helfen, die an den wichtigsten Problemen oder Bereichen arbeiten möchten.

- Kritisches Problem: Diese Art von Problem muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Seite erscheint. Diese Art von Problem könnte den Ruf von MDN schwer schädigen und/oder Benutzern schaden. Beispiele für dieses Problem sind ein fehlerhaftes Code-Snippet, das bei Verwendung in der Produktion ein schweres Sicherheitsproblem verursachen könnte, sowie unerwünschte Inhalte wie Malware, Obszönitäten, Pornografie, Hassrede oder Links zu solchen Inhalten.

  - Label: `p0` (wird sofort behoben)

- Größeres Problem: Diese Art von Problem könnte die Nützlichkeit einer Seite ernsthaft beeinträchtigen. Zum Beispiel eine erhebliche Menge an veralteten Informationen, ein komplexes und wichtiges Code-Beispiel, das nicht funktioniert, eine erhebliche Menge an schlecht geschriebenem und schwer verständlichem Text oder eine große Anzahl defekter Links.

  - Labels: `p1` (wird bald behandelt) und `p2` (wird bald behandelt, aber höhere prioritäre Punkte haben Vorrang)

- Kleineres Problem: Dies ist eine Art Verbesserungsproblem, das den bestehenden Inhalt besser machen kann, aber das Lernen nicht beeinträchtigt oder nur geringfügig beeinträchtigt. Da diese Art von Problemen nicht aktiv geplant werden, ist Hilfe von Mitwirkenden zur Behebung dieser Probleme willkommen und sehr geschätzt. Die Behebung einiger dieser Probleme kann auch Anfängern, die mit dem Beitragsprozess vertraut werden, die notwendige Übung bieten. Beispiele beinhalten Tippfehler, schlechte Grammatik, einen defekten Link, eine geringe Menge an veralteten oder schlecht geschriebenen Informationen oder ein nicht funktionierendes Code-Snippet.
  - Labels: `p3` (keine Sichtbarkeit, wann das Problem behandelt wird)

Im Allgemeinen sollten kritische Probleme sofort behoben werden und werden höchstwahrscheinlich vom MDN Web Docs-Team und Kollegen behandelt.

#### Hilfreiche Informationen hinzufügen

Wenn möglich, fügen Sie Informationen hinzu, die den Mitwirkenden helfen können, das Problem zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlichen behobenen Problemen oder Lesematerialien vorliegen. Ein gut ausgelegter Plan oder Schritte sind besonders bei Problemen erforderlich, die als `good first issue` gekennzeichnet sind, und können neuen Mitwirkenden helfen, sich schnell einzuarbeiten. Sie können diese Aufgabe zeitlich begrenzen, z. B. auf 5-10 Minuten.

Zum Beispiel können Sie als Triagierer die folgenden Informationen zu dem Problem hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen anderer Labels

Setzen Sie anschließend die folgenden Labels entsprechend:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende suchen nach Bugs basierend auf der Zeit und dem Aufwand, der zur Behebung des Problems erforderlich ist. Wenn möglich, sollten Sie versuchen, eine Schätzung des erforderlichen Aufwands bereitzustellen.
- `good first issue`: Setzen Sie dieses Label auf das Problem, wenn die Korrektur des Problems sehr einfach ist und wenn das Beheben des Problems eine gute Übung für einen Neueinsteiger darstellt, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn das Problem Hilfe von jemandem erfordert, der sich mit dem Thema auskennt oder damit vertraut ist. Dies ist ein beliebtes Label und einige Mitwirkende verwenden es, um nach Problemen zu suchen, an denen sie in Open-Source-Projekten in ihren Themenbereichen arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Problem einen defekten Link zu einer externen Seite beinhaltet.
- `document not written`: Setzen Sie dieses Label, wenn das Problem ein erforderliches Dokument beinhaltet, das noch nicht geschrieben wurde, normalerweise weil ein Link darauf verweist.
- `needs content update`: Setzen Sie dieses Label, wenn eine Problemlösung in einem anderen Repository eine entsprechende Korrektur im `mdn/content` Repository benötigt.

  > [!NOTE]
  > Entfernen Sie nach Abschluss des Triagierungsprozesses das `needs triage` Label.
