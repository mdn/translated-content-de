---
title: Richtlinien zum Eröffnen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{MDNSidebar}}

Als Beitragender können Sie [melden](#richtlinien_zum_melden_eines_issues) und [bearbeiten](#description) Issues.

Nachdem Sie ein Issue gemeldet haben, wird es triagiert. Das [Triagieren von Issues](#richtlinien_für_die_bearbeitung_eines_issues) wird typischerweise von Personen übernommen, die die Rolle eines Betreuers oder Eigentümers innehaben.

## Allgemeine Richtlinien für die Teilnahme

Beim Melden eines Issues oder der Teilnahme an einer Diskussion in einem Issue sollten Sie immer sicherstellen, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare konstruktiv und themenbezogen sind und nicht einfach nur stören.

Tun Sie Folgendes:

- Überlegen Sie vor der Einreichung eines Issues, ob Sie es mit dem Personal/der Gemeinschaft [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Nutzen Sie Diskussionen, um unterschiedliche Standpunkte zu gewinnen und sich auf eine vereinbarte Vorgehensweise zu verständigen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Versuchen Sie, das Problem selbst zu lösen, nachdem Sie ein Issue eingereicht haben. Lesen Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue einzureichen.

Vermeiden Sie Folgendes:

- Issues zu verkomplizieren, indem Sie versuchen, mehrere Themen zu diskutieren oder Kommentare abzugeben, die nicht zum Thema gehören.
- Viele Issues zu eröffnen, die vage Fragen stellen.
- Fragen zu stellen, ohne zuerst zu versuchen, das Problem selbst zu lösen.

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und ein klares Ergebnis haben.

### Vor der Einreichung eines Issues

Wenn Sie glauben, einen Fehler im Inhalt der MDN Web Docs oder in der Gestaltung der Website gefunden zu haben, durchsuchen Sie die aktuellen offenen Issues im [entsprechenden Repository](/de/docs/MDN/Community/Contributing/Our_repositories) und stellen Sie sicher, dass niemand anderes das Issue gemeldet hat.

### Ein Issue melden

- Abhängig vom gefundenen Problem, melden Sie es, indem Sie ein Issue in einem der folgenden Bereiche einreichen:

  - [Dokumentation](https://github.com/mdn/content/issues/new/choose)
  - [Übersetzung](https://github.com/mdn/translated-content/issues/new/choose)
  - das [Aussehen und Design](https://github.com/mdn/yari/issues/new/choose) der Website
  - der "Try it" [interaktive Beispiel](https://github.com/mdn/interactive-examples/issues/new/choose) Abschnitt
  - [DOM-Beispiele](https://github.com/mdn/dom-examples/issues)
  - [Lernbereich](https://github.com/mdn/learning-area/issues)
  - die [Browser-Kompatibilitäts](https://github.com/mdn/browser-compat-data/issues/new/choose)informationen

- Wählen Sie die geeignete Kategorie, um das Issue zu melden. Zum Beispiel, um einen Inhaltsfehler zu melden, verwenden Sie die [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) Vorlage im `mdn/content` Repository.

- Geben Sie ausreichend Informationen an, während Sie das Issue melden:

  - **Issue-Titel** muss die _erforderliche Aktion_ prägnant vermitteln.

  - **Issue-Beschreibung** muss den Bug und die erforderliche Aktion zur Behebung des Issues klar beschreiben. Es muss auch die zu erledigenden Aufgaben oder Unteraufgaben auflisten, um das Issue zu lösen. Einige weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Issue-Beschreibung anstatt im Kommentar zum Issue. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, die sonst durch Kommentare im Issue scrollen müssten, um den Status verschiedener Aufgaben festzustellen.
    - Kommentare in einem Issue sollten auf Details oder Kontext beschränkt werden, die helfen, das Issue zu lösen.

- Wenn die von Ihnen angegebenen Informationen im Issue unvollständig sind, könnten Sie später während des [Issue-Triagierungsprozesses](#issue-spezifische_triagierungsaufgaben) kontaktiert werden.

- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Diskussion zu [MDN's Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):

  - Es muss eine Diskussion stattfinden, um ein Issue zu klären.
  - Eine Diskussion beginnt nach Eröffnung des Issues.
  - Es gibt keinen klaren Konsens über die Lösung des Issues.
  - Die Anforderungen für die Erledigung der Aufgabe erweitern sich, während sie bearbeitet wird, oder die Arbeit ist unklar.

- Für kleinere und geringfügige Fehler können Sie [die Änderungen selbst vornehmen](#list_of_pages_checked) und eine Pull-Anfrage einreichen.

### Eine Aufgabenliste erstellen

Wenn das Issue, das Sie eröffnen, nicht dazu dient, einen Fehler zu melden, sondern eine Reihe von Aufgaben auszuführen, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen.
Erklären Sie den Kontext oder den Grund für die Durchführung der Aufgaben in der Beschreibung.
Stellen Sie sicher, dass Sie alle ausführbaren Aufgaben als Checkliste auflisten.

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

## Richtlinien für die Bearbeitung eines Issues

Denken Sie daran, dass die Erwartung, wenn Sie ein Issue übernehmen, darin besteht, dass die Arbeit zeitnah abgeschlossen wird. Wenn Sie nach der Zuweisung eine Woche lang keinen Fortschritt machen können oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und weisen Sie sich selbst aus dem Issue zu.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit den Labeln [`good first issue`, `help wanted`](#ein_prioritätslabel_setzen) oder [`p3`](#überprüfen,_ob_das_issue_gültig_ist). Die meisten Repositories haben Issues mit diesen Labels. Sie sind eingeladen, ein Issue zu durchsuchen und auszuwählen, das zu Ihrem Kenntnisstand passt. Eine weitere nützliche Stelle, um nach Issues zu suchen, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte), die Sie interessieren, filtern. Sehen Sie die Beschreibung einiger der [Labels](#ein_prioritätslabel_setzen), die während des Issue-Triage-Prozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` zeigt an, dass das Kernteam der MDN Web Docs das Issue noch nicht überprüft hat, und Sie sollten noch nicht damit beginnen, daran zu arbeiten.

2. **Weisen Sie das Issue sich selbst zu:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass es nicht jemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, in dem Sie sagen, dass Sie an dem Issue arbeiten möchten, und falls möglich, [weisen Sie sich das Issue selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Forschung betreiben:** Die meisten Issues benötigen einige Untersuchungen, bevor die Arbeit beginnen kann.

   - Umreißen Sie die Arbeit, die erledigt werden muss. Wenn Sie Fragen stellen müssen, stellen Sie sie in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit ziemlich offensichtlich ist, machen Sie weiter und erledigen Sie es.
   - Wenn das Issue nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, können Sie sich gerne beim Post-Ersteller melden und nach weiteren Informationen fragen.

4. **Änderungen vornehmen:** Forken und verzweigen Sie das Repository. Erledigen Sie Ihre Arbeit und öffnen Sie eine [Pull-Anfrage](/de/docs/MDN/Community/Pull_requests) im Repository. [Verweisen Sie auf das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Beschreibung der Pull-Anfrage. Abhängig von den Dateien, die Sie in der Pull-Anfrage aktualisiert haben, wird automatisch ein Prüfer Ihrer Pull-Anfrage zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   Nachdem Sie die Pull-Anfrage geöffnet haben, wenn Sie feststellen, dass Sie keine Zeit mehr haben, um Änderungen vorzunehmen oder Rückmeldungen zur Überprüfung einzubauen, lassen Sie das Team so schnell wie möglich in einem Kommentar in der Pull-Anfrage wissen. Dies hilft dem Team, einen anderen interessierten Mitwirkenden zuzuweisen, um die Arbeit an der Pull-Anfrage abzuschließen und das verknüpfte Issue zu schließen.

5. Nachdem Ihre Pull-Anfrage überprüft und zusammengeführt wurde, können Sie das verknüpfte Issue als geschlossen markieren. Wenn Sie die Pull-Anfrage mit dem Ansatz `Fixes #<issue>` öffnen, wird das Issue automatisch geschlossen, wenn die Pull-Anfrage zusammengeführt wird.

### Issues selbst beheben

Wenn Sie einen Fehler entdecken — sei es ein Problem mit dem Aussehen und Design der Website oder ein Fehler in der Dokumentation — können Sie versuchen, ihn selbst zu beheben. Erfahren Sie, wie Sie beitragen können, indem Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) durchgehen.

Wenn der Fehler klein ist, wie zum Beispiel ein Tippfehler oder eine geringfügige Verbesserung eines Satzes, oder eine unstrittige Korrektur beinhaltet, senden Sie eine Pull-Anfrage mit den Änderungen.

Für alle anderen Arten von Fehlern beginnen Sie mit dem [Öffnen eines Issues](#richtlinien_zum_melden_eines_issues). Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Issue zu arbeiten, und beschreiben Sie nach Möglichkeit Ihre vorgeschlagene Lösung oder Schritte zur Behebung des Issues.
Warten Sie, bis das Issue triagiert wurde, damit das MDN Web Docs Team überprüfen kann, ob das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigt.

> [!NOTE]
> Wenn Sie eine Pull-Anfrage öffnen, bevor das Issue triagiert wurde, könnten Ihre Zeit und Anstrengungen verschwendet werden, wenn das verknüpfte Issue als ungültig angesehen wird oder die Lösung nicht mit der von MDN Web Docs erwarteten übereinstimmt.
> Nachdem das Issue triagiert wurde, weisen Sie sich das Issue selbst zu.

Verwenden Sie die [Richtlinien zur Bearbeitung eines Issues](#description), um das Problem zu beheben, indem Sie die geeignete Quelle aktualisieren, z. B.:

- Den MDN Web Docs Inhalt (in Englisch) im [content](https://github.com/mdn/content) Repository
- Den übersetzten Inhalt der MDN Web Docs im [translated-content](https://github.com/mdn/translated-content) Repository
- Das Aussehen und Design der MDN Web Docs Website im [yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, die Ihnen helfen, zu erfahren, wie Sie beitragen können.

## Richtlinien zum Triagieren von Issues

Wenn Sie ein Betreuer oder Inhaber in der GitHub-Organisation der MDN Web Docs sind, sind Sie für das Triagieren von Issues in einem oder mehreren MDN Web Docs Repositories verantwortlich.

Der gesamte Triagierungsprozess umfasst einige [allgemeine](#issues_selbst_beheben) und einige [issue-spezifische Aufgaben](#richtlinien_zum_triagieren_von_issues).

### Allgemeine Triagierungsaufgaben

- Wenn ein Issue geöffnet wird, wird das `needs triage` Label automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#richtlinien_zum_triagieren_von_issues). Beitragende oder andere sollten nicht an dem Issue arbeiten, bis das Issue triagiert wurde. (Triagierer sollten daran denken, das `needs triage` Label nach dem Triagieren des Issues zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird ein zusätzliches `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch auf das Issue gesetzt. Dies wird basierend auf der im Issue erwähnten MDN-URL festgelegt. Sie können das inhaltsbezogene Label verwenden, um nach Issues zu suchen, die in Ihrem spezifischen Themenbereich triagiert werden müssen.

- Wenn ein Issue eine aktive, nicht en-US Locale betrifft, setzen Sie das passende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Lokalisierungen werden diese Issues übernehmen und triagieren.

- Sie müssen nicht ständig aktiv Issues triagieren. Planen Sie sich Zeit ein, zum Beispiel 30 Minuten jede Woche, um regelmäßig Issues in Ihrem Verantwortungsbereich zu triagieren. Das Triagieren muss nicht als Teil eines synchronen Meetings oder sogar zur gleichen Zeit wie alle anderen durchgeführt werden, sollte aber regelmäßig durchgeführt werden, um sicherzustellen, dass der Rückstand untriagierter Bugs nicht zu hoch wird.

- Neben dem wöchentlichen Triagieren eingehender Issues überprüfen Sie die Liste der alten Bugs, um festzustellen, ob es welche gibt, die blockiert sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität gehabt haben.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, um zu sehen, ob der Zuweisende Fortschritte macht. Wenn es nach einer Woche keine Fortschritte gibt, fragen Sie sie, ob sie noch Zeit haben, an dem Issue zu arbeiten. Wenn eine weitere Woche ohne Fortschritte vergeht, weisen Sie sie ab und hinterlassen Sie einen Kommentar, dass Sie das Issue für andere interessierte Mitwirkende verfügbar machen.
  - Wenn eine Pull-Anfrage zur Lösung des Issues geöffnet wurde, aber eine Woche lang nicht überprüft wurde, geben Sie dem Prüfer einen sanften Anstoß, um zu fragen, ob er darauf zugreifen kann.
  - Wenn eine Pull-Anfrage zur Lösung des Issues auf Kommentare zur Überprüfung wartet, nachdem eine Woche vergangen ist, fragen Sie den Autor, ob er auf seine Überprüfung reagieren kann. Wenn eine weitere Woche vergeht, beheben Sie entweder selbst die Überprüfungskommentare, wenn Sie Zeit haben, oder schließen Sie die Pull-Anfrage und heben Sie die Zuordnung des verwandten Issues auf.

### Issue-spezifische Triagierungsaufgaben

Dies sind die Richtlinien, denen Sie beim Triagieren jedes Issues folgen sollten.

#### Überprüfen, ob das Issue gültig ist

Dies sind einige der Dinge, die Sie im Auge behalten sollten, während Sie die Gültigkeit eines Issues überprüfen:

- Überprüfen Sie, ob das angesprochene Issue gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob der Impact der Behebung klein oder weitreichend ist.
- Bewerten Sie, ob die Behebung des Issues zuerst eine Diskussion erfordert, in diesem Fall weisen Sie den Autor darauf hin, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Prüfen Sie, ob das Issue unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht.
- Prüfen Sie, ob Vorschläge zum Hinzufügen von Links unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) entsprechen.

#### Überprüfen Sie das Issue auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Behebung des Bugs beginnen kann:

- URL der MDN Web Docs Seite mit dem Problem oder URL einer beispielhaften MDN Web Docs Seite, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder der Abschnitt auf der MDN Web Docs Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unhilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das `needs info` Label auf das Issue setzen. Fahren Sie mit der Triagierung des Issues erst fort, nachdem diese Details bereitgestellt wurden (nachdem Sie das `needs info` Label entfernt haben). Es ist in Ordnung, bis zu einer Woche auf eine Antwort des Autors zu warten.

#### Ein Prioritätslabel setzen

Für jeden Bug setzen Sie ein Prioritätslabel basierend auf dem Schweregrad des Issues, um Menschen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Diese Art von Issue muss sobald wie möglich behoben werden, unabhängig davon, wo es auf der Seite erscheint. Diese Art von Issue könnte den Ruf von MDN stark schädigen und/oder Benutzer schädigen. Beispiele für dieses Issue sind ein falscher Codeausschnitt, der, wenn er in Produktion verwendet wird, ein schwerwiegendes Sicherheitsproblem erzeugen könnte, und unerwünschte Inhalte wie Malware, Obszönität, Pornografie, Hassrede oder Links zu solchen Inhalten.

  - Label: `p0` (wird sofort behandelt)

- Wichtiges Issue: Diese Art von Issue könnte die Nützlichkeit einer Seite erheblich beeinflussen. Zum Beispiel eine signifikante Menge an veralteten Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine signifikante Menge an schlecht geschriebenem und schwer verständlichem Text oder eine große Anzahl an defekten Links.

  - Labels: `p1` (wird bald behandelt) und `p2` (wird bald behandelt, aber wichtigere Dinge haben Vorrang)

- Geringfügiges Issue: Dies ist eine Art von Verbesserungsissue, das den vorhandenen Inhalt besser machen kann, jedoch das Lernen nicht beeinflusst oder nur geringfügige Auswirkungen auf das Lernen hat. Da diese Art von Issues nicht aktiv geplant werden, ist Hilfe von Mitwirkenden, diese Issues zu beheben, willkommen und sehr geschätzt. Das Beheben einiger dieser Issues kann auch neuen Mitwirkenden die notwendige Erfahrung bieten, die sie benötigen, um sich mit dem Beitragsprozess vertraut zu machen. Beispiele sind Tippfehler, schlechte Grammatik, ein kaputter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebener Text oder ein Codeausschnitt, der nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Issue behandelt wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich von Mitarbeitern und Kollegen der MDN Web Docs gehandhabt.

#### Hilfreiche Informationen hinzufügen

Fügen Sie nach Möglichkeit Informationen hinzu, die Mitwirkenden helfen können, das Issue zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlichen behobenen Issues oder Ressourcen zum Lesen sein. Ein gut ausgelegter Plan oder Schritte sind besonders bei Issues erforderlich, die mit dem Label `good first issue` versehen sind und neuen Mitwirkenden helfen können, sich schnell einzuarbeiten. Sie können diese Aufgabe zeitlich begrenzen auf 5-10 Minuten.

Zum Beispiel können Sie als Triagierer folgende Informationen zum von Ihnen triagierten Issue hinzufügen:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Andere Labels setzen

Stellen Sie als Nächstes die folgenden Labels nach Bedarf ein:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende suchen gerne nach Bugs basierend auf der Zeit und dem Aufwand, den die Behebung des Bugs erfordern wird. Sie sollten also nach Möglichkeit versuchen, eine Einschätzung des erforderlichen Aufwands anzugeben.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung wirklich einfach ist und die Behebung gute Übung für einen Neuling bieten würde, der sich an den Prozess gewöhnt.
- `help wanted`: Setzen Sie dieses Label, wenn das Issue Unterstützung von jemandem erfordert, der sich mit dem Thema auskennt. Dies ist ein beliebtes Label und einige Mitwirkende verwenden es, um nach Issues zu suchen, an denen sie in Open-Source-Projekten in ihrem Bereich sowie mit ihrer Fachkenntnis arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen kaputten Link zu einer externen Seite betrifft.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, normalerweise weil ein Link darauf zeigt.
- `needs content update`: Setzen Sie dieses Label, wenn die Behebung in einem anderen Repository eine gleichwertige Behebung im `mdn/content` Repository erfordern wird.

  > [!NOTE]
  > Nachdem der Triagierungsprozess abgeschlossen ist, entfernen Sie das `needs triage` Label.
