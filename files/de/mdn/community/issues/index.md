---
title: Richtlinien zum Öffnen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

Als Mitwirkender können Sie [melden](#richtlinien_zum_melden_eines_issues) und an Issues [arbeiten](#richtlinien_zur_bearbeitung_eines_issues).

Nachdem Sie ein Issue gemeldet haben, wird es priorisiert. Die Priorisierung von [Issues](#richtlinien_zur_priorisierung_von_issues) wird typischerweise von Personen durchgeführt, die als ein Maintainer oder Besitzer zugewiesen sind.

## Allgemeine Richtlinien zur Teilnahme

Stellen Sie beim Melden eines Issues oder bei der Teilnahme an einer Diskussion in einem Issue immer sicher, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare konstruktiv und themenbezogen sind und nicht nur Lärm verursachen.

Tun Sie Folgendes:

- Bevor Sie ein Issue einreichen, überlegen Sie, ob Sie es mit den Mitarbeitern/dem Team [besprechen](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Nutzen Sie Diskussionen, um verschiedene Standpunkte zu gewinnen und sich auf ein gemeinsames Vorgehen zu einigen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Versuchen Sie, das Problem selbst zu beheben, nachdem Sie ein Issue eingereicht haben. Lesen Sie unseren [Beitrag-Guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie sie in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue einzureichen.

Vermeiden Sie Folgendes:

- Erschweren von Issues, indem Sie versuchen, mehrere Themen zu besprechen oder unpassende Kommentare abzugeben.
- Eröffnung vieler Issues mit vagen Fragen.
- Stellen von Fragen, ohne zu versuchen, das Problem zuerst selbst zu lösen.

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Issue einreichen

Wenn Sie glauben, einen Fehler im Inhalt der MDN Web Docs oder im Erscheinungsbild der Website gefunden zu haben, durchsuchen Sie die aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Contributing/Our_repositories) und stellen Sie sicher, dass niemand anders das Issue bereits gemeldet hat.

### Melden eines Issues

- Abhängig von der Art des Problems, das Sie entdeckt haben, melden Sie es, indem Sie ein Issue in einem der folgenden Bereiche einreichen:

  - [Dokumentation](https://github.com/mdn/content/issues/new/choose)
  - [Übersetzung](https://github.com/mdn/translated-content/issues/new/choose)
  - das [Aussehen](https://github.com/mdn/yari/issues/new/choose) der Website
  - der "Try it" [interaktive Beispiel](https://github.com/mdn/interactive-examples/issues/new/choose) Bereich
  - [DOM-Beispiele](https://github.com/mdn/dom-examples/issues)
  - [Lernbereich](https://github.com/mdn/learning-area/issues)
  - die [Browser-Kompatibilität](https://github.com/mdn/browser-compat-data/issues/new/choose) Informationen

- Wählen Sie die passende Kategorie, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Content Issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) Vorlage im `mdn/content` Repository.

- Geben Sie beim Melden des Issues genügend Informationen an:

  - Der **Titel des Issues** muss die _erforderliche Aktion_ prägnant vermitteln.

  - Die **Beschreibung des Issues** muss den Fehler und die erforderliche Aktion zur Behebung des Issues klar beschreiben. Sie muss auch die Aufgaben oder Unteraufgaben auflisten, die zur Behebung des Issues abgeschlossen werden müssen. Einige weitere Richtlinien beinhalten:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mit Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Issues-Beschreibung anstatt in Kommentaren im Issue. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, den Status der verschiedenen Aufgaben zu ermitteln, ohne durch die Kommentare im Issue scrollen zu müssen.
    - Kommentare in einem Issue sollten auf Details oder Kontexte beschränkt sein, die bei der Lösung des Issues helfen.

- Wenn die Informationen, die Sie im Issue bereitstellen, unvollständig sind, könnten Sie später während des [Issue-Priorisierungsprozesses](#überprüfen_sie_das_issue_auf_vollständigkeit_der_informationen) kontaktiert werden.

- Wenn Sie sich in einer der folgenden Situationen befinden, verschieben Sie die Diskussion zu [MDNs Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):

  - Eine Diskussion ist erforderlich, um ein Issue zu klären.
  - Eine Diskussion beginnt nach der Eröffnung des Issues.
  - Es gibt keinen klaren Konsens über die Lösung des Problems.
  - Die Anforderungen zur Abschluss des Problems erweitern sich während der Lösung oder die Arbeit ist unklar.

- Bei kleinen und unbedeutenden Fehlern können Sie [die Änderungen selbst vornehmen](#behebung_von_issues_selbst) und einen Pull-Request einreichen.

### Erstellung eines Aufgabenlisten-Issues

Wenn das Issue, das Sie öffnen, nicht zum Melden eines Fehlers, sondern zur Erledigung einer Reihe von Aufgaben dient, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen. Erklären Sie den Kontext oder Grund für die Durchführung der Aufgaben in der Beschreibung.
Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste auflisten.

Zum Beispiel:

```markdown
// Titel des Issues
Stellen Sie sicher, dass Abschnitte der in der CSS-Eigenschaften-Vorlage definierten Reihenfolge folgen

### Beschreibung

Die Vorlage für die CSS-Eigenschaftenseite ist [hier](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template) definiert.
Die Aufgabenliste in diesem Issue wird verwendet, um die dokumentierten CSS-Eigenschaften mit der Vorlage zu vergleichen und Änderungen an den Eigenschaftsseiten für die Übereinstimmung zu verfolgen.

### Liste der überprüften Seiten

- [x] [accent-color](/de/docs/Web/CSS/accent-color) - überprüft, in Ordnung
- [ ] [backdrop-filter](/de/docs/Web/CSS/backdrop-filter)
- [ ] [letter-spacing](/de/docs/Web/CSS/letter-spacing) - Pull-Request offen, um die Abschnitte `Accessibility concerns` und `Internationalization concerns` vor den Abschnitt `Specifications` zu verschieben.
```

## Richtlinien zur Bearbeitung eines Issues

Denken Sie daran, dass von Ihnen erwartet wird, die Arbeit an einem Issue innerhalb eines angemessenen Zeitrahmens abzuschließen, wenn Sie es übernehmen. Wenn Sie eine Woche nach der Zuweisung keine Fortschritte machen können oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und entziehen Sie sich dem Issue.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit den Labels [`good first issue`, `help wanted`](#setzen_sie_andere_labels) oder [`p3`](#setzen_sie_ein_prioritätslabel). Die meisten Repositories haben Issues mit diesen Labels. Sie sind herzlich eingeladen, ein Issue auszuwählen, das zu Ihren Fähigkeiten passt. Ein weiterer nützlicher Ort, um nach Issues zu suchen, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste nach den Themen (`Labels` Spalte) filtern, die Sie interessieren. Sehen Sie sich die Beschreibung einiger der [Labels](#setzen_sie_andere_labels) an, die während des Issue-Priorisierungsprozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` zeigt an, dass das MDN Web Docs Kernteam das Issue noch nicht überprüft hat, und Sie sollten nicht damit beginnen.

2. **Weisen Sie sich selbst das Issue zu:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass es niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie gerne an dem Issue arbeiten möchten, und wenn möglich, [weisen Sie sich selbst das Issue zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Forschung betreiben:** Die meisten Issues erfordern einige Untersuchungen, bevor die Arbeit beginnen kann.

   - Untersuchen Sie den Arbeitsumfang, der zu erledigen ist. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit offensichtlich, machen Sie einfach weiter und erledigen Sie es.
   - Wenn das Issue nicht gut beschrieben ist und/oder Sie unsicher sind, was benötigt wird, zögern Sie nicht, den Verfasser zu @erwähnen und nach weiteren Informationen zu fragen.

4. **Machen Sie die Änderungen:** Forken und verzweigen Sie das Repository. Machen Sie Ihre Arbeit und öffnen Sie einen [Pull-Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Beziehen Sie sich auf das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) in der Pull-Request-Beschreibung. Abhängig von den Dateien, die Sie im Pull-Request aktualisiert haben, wird Ihrem Pull-Request automatisch ein Prüfer zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   Nachdem Sie den Pull-Request geöffnet haben und merken, dass Sie keine Zeit mehr haben, Änderungen vorzunehmen oder Feedback zu berücksichtigen, lassen Sie das Team schnellstmöglich in einem Kommentar im Pull-Request wissen. Dies wird dem Team helfen, einen anderen interessierten Mitwirkenden zuzuweisen, der die Arbeiten am Pull-Request abschließt und das verknüpfte Issue schließt.

5. Nachdem Ihr Pull-Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Issue als geschlossen markieren. Wenn Sie den Pull-Request mit dem Satz `Fixes #<issue>` eröffnet haben, wird das Issue automatisch geschlossen, wenn der Pull-Request zusammengeführt wird.

### Behebung von Issues selbst

Wenn Sie einen Fehler entdecken — sei es ein Problem mit dem Erscheinungsbild der Website oder ein Fehler in der Dokumentation —, können Sie versuchen, ihn selbst zu beheben. Erfahren Sie in unserem [Beitrag-Guide](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), wie Sie beitragen können.

Wenn der Fehler klein ist, wie ein Tippfehler oder eine geringfügige Verbesserung des Satzes, oder eine unstrittige Korrektur erfordert, reichen Sie einen Pull-Request mit den Änderungen ein.

Für alle anderen Arten von Fehlern beginnen Sie damit, das [Issue zu eröffnen](#richtlinien_zum_melden_eines_issues). Fügen Sie einen Kommentar zu Ihrer Absicht hinzu, an dem Issue zu arbeiten und, wenn möglich, beschreiben Sie Ihre vorgeschlagene Lösung oder Schritte zur Behebung des Problems.
Warten Sie darauf, dass das Issue priorisiert wird, sodass das MDN Web Docs Team bestätigen kann, dass das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigt.

> [!NOTE]
> Wenn Sie einen Pull-Request eröffnen, bevor das Issue priorisiert wurde, könnten Ihre Zeit und Mühe verschwendet werden, falls das verknüpfte Issue als ungültig erachtet wird oder die Lösung nicht der vom MDN Web Docs Team erwarteten entspricht.
> Nachdem das Issue priorisiert wurde, weisen Sie es sich selbst zu.

Versuchen Sie mit den [Richtlinien zur Bearbeitung eines Issues](#richtlinien_zur_bearbeitung_eines_issues), das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, wie zum Beispiel:

- Der Inhalt der MDN Web Docs (auf Englisch) im [content](https://github.com/mdn/content) Repository
- Der übersetzte Inhalt der MDN Web Docs im [translated-content](https://github.com/mdn/translated-content) Repository
- Das Erscheinungsbild der MDN Web Docs Website im [yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, um Ihnen bei Ihrem Beitrag zu helfen.

## Richtlinien zur Priorisierung von Issues

Wenn Sie in der MDN Web Docs GitHub-Organisation ein Maintainer oder Besitzer sind, liegt es in Ihrer Verantwortung, Issues in einem oder mehreren MDN Web Docs Repositories zu priorisieren.

Der Gesamtprozess für die Priorisierung umfasst einige [allgemeine](#allgemeine_aufgaben_zur_priorisierung) und einige [issuespezifische Aufgaben](#branchenspezifische_aufgaben_zur_prioritäisierung_von_issues).

### Allgemeine Aufgaben zur Priorisierung

- Wenn ein Issue eröffnet wird, wird das Label `needs triage` automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um Issues zu finden, die [priorisiert werden müssen](#branchenspezifische_aufgaben_zur_prioritäisierung_von_issues). Mitwirkende oder andere sollten nicht an dem Issue arbeiten, bis es priorisiert wurde. (Priorisierer sollten daran denken, das `needs triage` Label nach der Priorisierung des Issues zu entfernen.)

- Im [mdn/content-Repository](https://github.com/mdn/content/issues) wird ein zusätzliches `Content:`-Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch dem Issue zugewiesen. Dies wird basierend auf der angegebenen MDN-URL im Issue gesetzt. Sie können das inhaltspezifische Label verwenden, um Issues zu finden, die in Ihrem speziellen Themenbereich priorisiert werden müssen.

- Wenn ein Issue eine aktive, nicht-en-US-Lokalisierung betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Lokalisierungen werden diese Issues aufgreifen und priorisieren.

- Sie müssen nicht ständig Issues aktiv priorisieren. Setzen Sie sich regelmäßig, sagen wir, 30 Minuten pro Woche, eine Zeit, um Issues in Ihrem Verantwortungsbereich priorisieren. Die Priorisierung muss nicht als Teil einer synchronen Besprechung oder zur gleichen Zeit wie alle anderen erfolgen, sollte aber regelmäßig durchgeführt werden, um sicherzustellen, dass das Backlog an unpriorisierten Fehlern nicht zu hoch wird.

- Neben der Priorisierung neu eingehender Issues jede Woche, überprüfen Sie die Liste alter Fehler, um festzustellen, ob es welche gibt, die gestoppt, geschlossen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, bei denen seit 30 Tagen keine Aktivität erfolgt ist.
  - Überprüfen Sie offene, zugewiesene Issues, um festzustellen, ob der Zuweisungsträger Fortschritte macht. Wenn nach einer Woche keine Fortschritte erzielt werden, fragen Sie sie, ob sie noch Zeit haben, am Issue zu arbeiten. Wenn eine weitere Woche vergeht, ohne dass Fortschritte gemacht werden, entziehen Sie die Zuweisung und hinterlassen Sie einen Kommentar, dass Sie das Issue für andere interessierte Mitwirkende verfügbar machen.
  - Wenn ein Pull-Request zur Behebung des Issues geöffnet wurde, aber eine Woche lang nicht überprüft wurde, geben Sie dem Prüfer einen sanften Ping, um zu fragen, ob er dazu kommen kann.
  - Wenn auf einen Pull-Request zur Behebung des Issues nach einer Woche noch keine Kommentare zum Review beantwortet wurden, dann fragen Sie den Verfasser, ob er auf das Review antworten kann. Wenn eine weitere Woche vergeht, beheben Sie entweder selbst die Kommentare vom Review, wenn Sie Zeit haben, oder schließen Sie den Pull-Request und entziehen Sie das zugehörige Issue.

### Branchenspezifische Aufgaben zur Prioritäisierung von Issues

Dies sind die Richtlinien, die Sie befolgen sollten, während Sie jedes Issue priorisieren.

#### Überprüfen, ob das Issue gültig ist

Dies sind einige der Punkte, die Sie im Auge behalten sollten, während Sie die Gültigkeit eines Issues überprüfen:

- Prüfen Sie, ob das aufgeworfene Issue gültig ist und ob die Lösung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob der Umfang der Lösung klein oder seitenweit ist.
- Bewerten Sie, ob die Lösung des Issues zuerst Diskussionen erfordert, in diesem Fall weisen Sie den Autor an, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Prüfen Sie, ob das Issue unseren [Schreib-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht.
- Prüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie zu externen Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfen Sie das Issue auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Arbeit am Fehler beginnen kann:

- URL der MDN Web Docs Seite mit dem Problem oder URL einer Beispiel-MDN-Web-Docs-Seite, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder der Abschnitt auf der MDN Web Docs-Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, nicht hilfreichen, unvollständigen oder fehlenden Informationen

Wenn einer der oben genannten Informationen fehlt, sollten Sie den Verfasser des Issues bitten, diese Angaben zu machen, und das Label `needs info` auf das Issue setzen. Nehmen Sie die Priorisierung des Issues erst wieder auf, nachdem diese Details bereitgestellt wurden (nach dem Entfernen des `needs info` Labels). Es ist in Ordnung, bis zu einer Woche auf eine Antwort vom Verfasser zu warten.

#### Setzen Sie ein Prioritätslabel

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Schwere des Issues, um Menschen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Dieser Typ von Issue muss so bald wie möglich behoben werden, unabhängig davon, wo er auf der Website auftritt. Solch ein Issue könnte MDNs Ruf ernsthaft schädigen und/oder Benutzern schaden. Beispiele für diesen Typ von Issue sind ein falsches Code-Snippet, das bei Verwendung in der Produktion ein schweres Sicherheitsproblem schaffen könnte und unerwünschte Inhalte wie Malware, Obszönitäten, Pornografie, Hassreden oder Links zu solchen Inhalten.

  - Label: `p0` (wird sofort adressiert)

- Großes Problem: Dieser Typ von Issue könnte die Nützlichkeit einer Seite stark beeinträchtigen. Beispielsweise eine signifikante Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine erhebliche Menge schlecht geschriebenem Prosa, die schwer zu verstehen ist, oder eine große Anzahl fehlerhafter Links.

  - Labels: `p1` (wird bald adressiert) und `p2` (wird bald behandelt, aber wichtigere Elemente haben Vorrang)

- Kleines Problem: Dies ist ein Verbesserungsvorschlag, der den vorhandenen Inhalt verbessern kann, jedoch nicht das Lernen erheblich beeinflusst oder nur geringfügigen Einfluss hat. Da diese Arten von Issues nicht aktiv geplant sind, wird Hilfe von Mitwirkenden zur Behebung dieser Issues gerne begrüßt und geschätzt. Die Behebung einiger dieser Issues kann auch Anfängern, die mit dem Beitragsprozess vertraut werden, notwendige Übung geben. Beispiele sind Tippfehler, schlechte Grammatik, ein fehlerhafter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebene Prosa oder ein Code-Snippet, das nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Issue behandelt wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich vom MDN Web Docs Team und Kollegen behandelt.

#### Fügen Sie hilfreiche Informationen hinzu

Wenn möglich, fügen Sie Informationen hinzu, die Mitwirkenden helfen können, das Issue zu lösen. Die Informationen können in Form von Schritten, allgemeinem Ansatz, Links zu anderen ähnlichen behobenen Issues oder Lesematerialien sein. Ein gut ausgelegter Plan oder Schritte sind besonders erforderlich bei Issues, die mit dem Label `good first issue` versehen sind, und können dazu beitragen, neue Mitwirkende schnell einzuarbeiten. Sie können diese Aufgabe innerhalb von 5-10 Minuten zeitlich begrenzen.

Zum Beispiel können Sie als Priorisierer die folgenden Informationen zum Issue hinzufügen, das Sie priorisieren:

```md
Für diejenigen, die dieses Problem beheben, scheint Folgendes erforderlich zu sein:

- Aktualisieren Sie den ersten Absatz unter der Überschrift X, um das Problem mit Y zu korrigieren
- Fügen Sie eine Beschreibung von X hinzu
- Aktualisieren Sie die Kompatibilitätsdaten unter Link-X
```

#### Setzen Sie andere Labels

Setzen Sie anschließend die folgenden Labels nach Bedarf:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende möchten nach Fehlern basierend auf der Zeit und dem Aufwand suchen, die zur Behebung des Fehlers benötigt werden. Daher sollten Sie, wo möglich, versuchen, einen Schätzwert für den erforderlichen Aufwand bereitzustellen.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung wirklich einfach ist und wenn das Beheben des Issues gute Übung für einen Neuling bietet, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn für das Issue Hilfe von jemandem benötigt wird, der mit dem Thema vertraut ist. Dies ist ein beliebtes Label, und einige Mitwirkende verwenden es, um nach Issues in Open-Source-Projekten in ihren Bereichen der Vertrautheit oder Expertise zu suchen.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen fehlerhaften Link zu einer externen Seite betrifft.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, normalerweise weil ein Link darauf verweist.
- `needs content update`: Setzen Sie dieses Label, wenn die Behebung des Issues in einem anderen Repository eine gleichwertige Behebung im `mdn/content` Repository erfordern wird.

  > [!NOTE]
  > Nachdem der Priorisierungsprozess abgeschlossen ist, entfernen Sie das `needs triage` Label.
